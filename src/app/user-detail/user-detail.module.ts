import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserDetailComponent } from './user-detail.component';
import { UserOptionsComponent } from '../user-options/user-options.component';


@NgModule({
  declarations: [
    UserDetailComponent,
    UserOptionsComponent
  ],
  imports: [
    CommonModule,
    UserDetailRoutingModule
  ]
})
export class UserDetailModule { }
