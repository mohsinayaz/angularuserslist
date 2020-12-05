import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user;
  title: string;
  detail: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.user = JSON.parse(params.data);
    })
    this.detail = this.user.name;
    this.title = 'Hi, My name is';
  }

  changeTitle($event) {
    this.title = $event.title;
    this.detail = $event.detail;
  }

}
