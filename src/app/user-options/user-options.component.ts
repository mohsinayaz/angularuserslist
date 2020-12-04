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
  currentValue: number = 0;
  previousValue: number;
  activeClass: string;
  allItems;

  constructor() { }

  ngOnInit(): void {
    // this.getBirthYear();
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

  // getBirthYear() {
  //   this.birthYear = new Date(this.userDetail.registered.date).getFullYear().toString();
  // }

  sendDetail(userData) {
    const currentIndex = this.userData.indexOf(userData);
    if (currentIndex === this.currentValue) {
      return;
    }
    this.setClasses(currentIndex);
    this.currentValue = currentIndex;
    console.log(this.currentValue);
    this.userDetailShown.emit(userData)
  }

  setClasses(currentItem) {
    this.allItems[currentItem].classList.add("active");
    this.allItems[this.currentValue].classList.remove("active");
  }

}
