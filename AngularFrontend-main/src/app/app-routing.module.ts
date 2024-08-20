import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./frontoffice/home/home.component";
import {ContactsComponent} from "./frontoffice/contacts/contacts.component";
import {PricingComponent} from "./frontoffice/pricing/pricing.component";
import {ProductsComponent} from "./products/products.component";
import {ProjectsComponent} from "./frontoffice/projects/projects.component";
import {ServicesComponent} from "./frontoffice/services/services.component";
import {TeamComponent} from "./frontoffice/team/team.component";
import {TestimonialsComponent} from "./frontoffice/testimonials/testimonials.component";
import {SignInComponent} from "./sign-in/sign-in.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {AuthGuard} from "./shared/auth/auth.guard";
import {ResetPasswordComponent} from "./reset-password/reset-password.component";
import {CodeVerificationComponent} from "./code-verification/code-verification.component";
import {NewPasswordComponent} from "./new-password/new-password.component";

const routes: Routes = [
  {path:'sign-in', component: SignInComponent},
  {path: '', redirectTo: 'sign-in', pathMatch: 'full'},
  {path:'sign-up', component: SignUpComponent},
  {path:'reset-password', component: ResetPasswordComponent},
  {path:'code-verification', component:CodeVerificationComponent},
  {path:'new-password', component:NewPasswordComponent},
  {path:'user', loadChildren: () => import('./features/frontoffice/frontoffice.module').then((m) => m.FrontofficeModule)},
  {path:'admin', loadChildren: () => import('./features/backoffice/backoffice.module').then((m) => m.BackofficeModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
