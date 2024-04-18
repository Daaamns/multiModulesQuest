import { Component, inject } from '@angular/core';
import { UserService } from '../../../../../shared/services/user.service';
import { User } from '../../../../../models/classes/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-random',
  templateUrl: './user-random.component.html',
  styleUrl: './user-random.component.scss',
})
export class UserRandomComponent {
  user!: User;
  private userService = inject(UserService);
  private route = inject(ActivatedRoute);

  // ngOnInit(): void {
  //   this.userService.getUsers().subscribe((data) => {
  //     const randomIndex = Math.floor(Math.random() * data.length);
  //     this.user = data[randomIndex];
  //     console.log(this.user);
  //   });
  // }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const userId = +params['id']; // récupère l'ID de l'URL
      this.userService.getUserById(userId).subscribe((user) => {
        if (user) {
          this.user = user; // Assignez l'utilisateur seulement s'il est défini
        } else {
          console.log(`L'utilisateur avec l'ID ${userId} n'a pas été trouvé.`);
        }
      });
    });
  }
}
