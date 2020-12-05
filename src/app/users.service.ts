import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './interfaces/users';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<Users>('https://randomuser.me/api/?results=20').pipe(
      map(data =>  {
        const newData = data.results.map(user => {
          return {
            name: user.name.title + " " + user.name.first + " " + user.name.last,
            phone: user.phone,
            city: user.location.city,
            image: user.picture.large,
            email: user.email,
            birthYear: new Date(user.registered.date).getFullYear().toString()
          }
        });
        return newData;
      }));
  }
}
