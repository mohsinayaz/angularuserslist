import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from '../interfaces/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: User;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService
    ) { }

  ngOnInit(): void {
    let userId: number;
    this.route.params.subscribe((params:Params) => {
      userId = +params['userId'];
    })
    if (!this.userService.newData) {
      this.userService.getUsers().subscribe(data => {
        this.user = this.userService.getUser(userId);
      });
    } else {
      this.user = this.userService.getUser(userId);
    }
  }


  changeTitle($event) {
    this.user.title = $event.title;
    this.user.name = $event.detail;
  }

}
