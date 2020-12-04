import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: Array<User>;
  constructor(private userService: UsersService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(users);
    });
  }

  goToUserDetail(user: User) {
    console.log(user);
    // const data = {
    //   name: user.name.title + " " + user.name.first + " " + user.name.last,
    //   phone: user.phone,
    //   city: user.location.city,
    //   image: user.picture.large,
    //   email: user.email,
    //   birthYear: new Date(user.registered.date).getFullYear().toString()

    // }
    this.router.navigate(['/user-detail'], {
      queryParams: {data: JSON.stringify(user)}
    })
  }

}
