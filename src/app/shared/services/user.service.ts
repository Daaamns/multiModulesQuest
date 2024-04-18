import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../../models/classes/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('assets/json/user.json');
  }

  getUserById(userId: number): Observable<User | undefined> {
    return this.http
      .get<User[]>('assets/json/user.json')
      .pipe(map((users) => users.find((user) => user.id === userId)));
  }
}
