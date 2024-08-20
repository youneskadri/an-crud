import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './frontoffice/contacts/contacts.component';
import { PricingComponent } from './frontoffice/pricing/pricing.component';
import { ProductsComponent } from './products/products.component';
import { ProjectsComponent } from './frontoffice/projects/projects.component';
import { ServicesComponent } from './frontoffice/services/services.component';
import { TeamComponent } from './frontoffice/team/team.component';
import { TestimonialsComponent } from './frontoffice/testimonials/testimonials.component';
import { NavbarComponent } from './frontoffice/navbar/navbar.component';
import { HomeComponent } from './frontoffice/home/home.component';
import { ProductComponent } from './products/product/product.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatButtonModule} from "@angular/material/button";
import {ToastrModule} from "ngx-toastr";
import { GestionUserComponent } from './backoffice/gestion-user/gestion-user.component';
import {BackofficeModule} from "./features/backoffice/backoffice.module";
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CodeVerificationComponent } from './code-verification/code-verification.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { GestionDemandeComponent } from './backoffice/gestion-demande/gestion-demande.component';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    GestionUserComponent,
    ResetPasswordComponent,
    CodeVerificationComponent,
    NewPasswordComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatButtonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
