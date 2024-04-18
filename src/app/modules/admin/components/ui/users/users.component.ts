import { Component, Input } from '@angular/core';
import { User } from '../../../../../models/classes/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  @Input() user!: User;
}
