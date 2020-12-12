import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './interfaces/users';
import { map } from 'rxjs/operators';
import { User } from './interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  newData: Array<User>;
  userId = 0;

  getUsers() {
      return this.http.get<Users>("https://randomuser.me/api/?results=20&seed=users").pipe(
        map(data =>  {
           this.newData = data.results.map(user => {
            return {
              id: this.userId += 1,
              title: 'Hi, My name is',
              name: user.name.title + " " + user.name.first + " " + user.name.last,
              phone: user.phone,
              city: user.location.city,
              image: user.picture.large,
              email: user.email,
              birthYear: new Date(user.registered.date).getFullYear().toString()
            }
          });
          this.userId = 0;
          return this.newData;
        }));
  }

  getUser(clickedUserId) {
    return this.newData.find(user => user.id === clickedUserId);  
  }
}
