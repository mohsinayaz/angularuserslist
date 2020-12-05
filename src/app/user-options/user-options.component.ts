import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-user-options',
  templateUrl: './user-options.component.html',
  styleUrls: ['./user-options.component.scss']
})
export class UserOptionsComponent implements OnInit {
  @Input() userDetail: User;
  @Output() userDetailShown = new EventEmitter();
  birthYear: string;
  userData= [];
  activeItem: number = 0;
  activeClass: string;
  allItems;

  constructor() { }

  ngOnInit(): void {
    this.allItems = document.querySelectorAll('i');
    this.userData = [
      {
        title: 'Hi, My name is',
        detail: this.userDetail.name
      },
      {
        title: 'My email address is',
        detail: this.userDetail.email
      },
      {
        title: 'My birthday is',
        detail: this.userDetail.birthYear
      },
      {
        title: 'My city is',
        detail: this.userDetail.city
      },
      {
        title: 'My phone number is',
        detail: this.userDetail.phone
      },
    ]
  }

  sendDetail(userData) {
    const changeActiveItem = this.userData.indexOf(userData);
    if (changeActiveItem === this.activeItem) {
      return;
    }
    this.setClasses(changeActiveItem);
    this.activeItem = changeActiveItem;
    this.userDetailShown.emit(userData)
  }

  setClasses(changeActiveItem) {
    this.allItems[changeActiveItem].classList.add("active");
    this.allItems[this.activeItem].classList.remove("active");
  }

}
