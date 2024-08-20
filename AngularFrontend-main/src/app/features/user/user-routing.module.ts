import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GestionUserComponent} from "../../backoffice/gestion-user/gestion-user.component";
import {ListComponent} from "../../backoffice/gestion-user/list/list.component";
import {ProfileComponent} from "../../backoffice/gestion-user/profile/profile.component";

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'profile/:id', component:ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
