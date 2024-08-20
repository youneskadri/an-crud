import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FrontofficeComponent} from "../../frontoffice/frontoffice.component";
import {ContactsComponent} from "../../frontoffice/contacts/contacts.component";
import {PricingComponent} from "../../frontoffice/pricing/pricing.component";
import {ProductsComponent} from "../../products/products.component";
import {ProjectsComponent} from "../../frontoffice/projects/projects.component";
import {ServicesComponent} from "../../frontoffice/services/services.component";
import {TeamComponent} from "../../frontoffice/team/team.component";
import {TestimonialsComponent} from "../../frontoffice/testimonials/testimonials.component";
import {NavbarComponent} from "../../frontoffice/navbar/navbar.component";
import {ProductComponent} from "../../products/product/product.component";
import { FrontofficeRoutingModule } from './frontoffice-routing.module';
import {HomeComponent} from "../../frontoffice/home/home.component";
import { GestionBlocfrontComponent } from 'src/app/frontoffice/gestion-blocfront/gestion-blocfront.component';
import { GestionChambrefrontComponent } from 'src/app/frontoffice/gestion-chambrefront/gestion-chambrefront.component';


@NgModule({
  declarations: [
    FrontofficeComponent,
    ContactsComponent,
    PricingComponent,
    ProductsComponent,
    ProjectsComponent,
    ServicesComponent,
    TeamComponent,
    TestimonialsComponent,
    NavbarComponent,
    ProductComponent,
    GestionBlocfrontComponent,
    GestionChambrefrontComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FrontofficeRoutingModule
  ]
})
export class FrontofficeModule { }
