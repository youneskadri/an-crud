import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import {ListComponent} from "../../backoffice/gestion-user/list/list.component";
import {BackofficeModule} from "../backoffice/backoffice.module";
import {ProfileComponent} from "../../backoffice/gestion-user/profile/profile.component";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ListComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    BackofficeModule,
    FormsModule,
  ]
})
export class UserModule { }
