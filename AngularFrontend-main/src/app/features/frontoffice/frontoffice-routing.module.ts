import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TestimonialsComponent} from "../../frontoffice/testimonials/testimonials.component";
import {TeamComponent} from "../../frontoffice/team/team.component";
import {AuthGuard} from "../../shared/auth/auth.guard";
import {ServicesComponent} from "../../frontoffice/services/services.component";
import {ProjectsComponent} from "../../frontoffice/projects/projects.component";
import {ProductsComponent} from "../../products/products.component";
import {PricingComponent} from "../../frontoffice/pricing/pricing.component";
import {ContactsComponent} from "../../frontoffice/contacts/contacts.component";
import {HomeComponent} from "../../frontoffice/home/home.component";
import { GestionBlocfrontComponent } from 'src/app/frontoffice/gestion-blocfront/gestion-blocfront.component';
import { GestionChambrefrontComponent } from 'src/app/frontoffice/gestion-chambrefront/gestion-chambrefront.component';
const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'contacts', component:ContactsComponent},
  {path:'pricing', component:PricingComponent, canActivate:[AuthGuard]},
  {path:'products', component:ProductsComponent, canActivate:[AuthGuard]},
  {path:'projects', component:ProjectsComponent, canActivate:[AuthGuard]},
  {path:'services', component:ServicesComponent, canActivate:[AuthGuard]},
  {path:'bloc',component:GestionBlocfrontComponent},
  {path:'bloc/:idBloc/chambre',component:GestionChambrefrontComponent},
  {path:'team', component:TeamComponent},
  {path:'testimonials', component:TestimonialsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
