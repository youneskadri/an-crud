import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BackofficeComponent} from "../../backoffice/backoffice.component";
import { BackofficeRoutingModule } from './backoffice-routing.module';
import { NavbarbackComponent } from 'src/app/backoffice/navbarback/navbarback.component';
import { SidebarbackComponent } from 'src/app/backoffice/sidebarback/sidebarback.component';
import { GestionFoyerComponent } from 'src/app/backoffice/gestion-foyer/gestion-foyer.component';
import { GestionBlocComponent } from 'src/app/backoffice/gestion-bloc/gestion-bloc.component';
import { FormFoyerComponent } from 'src/app/backoffice/forms/form-foyer/form-foyer.component';
import {  FormBlocComponent} from 'src/app/backoffice/forms/form-bloc/form-bloc.component' ;
import { FormChambreComponent } from 'src/app/backoffice/forms/form-chambre/form-chambre.component';
import {GestionChambreComponent} from 'src/app/backoffice/gestion-chambre/gestion-chambre.component'  ;
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormUniversiteComponent } from 'src/app/backoffice/forms/form-universite/form-universite.component';
import { GestionUniversiteComponent } from 'src/app/backoffice/gestion-universite/gestion-universite.component';
import { StatistiqueChambreComponent } from 'src/app/backoffice/statistique-chambres/statistique_chambre.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import {StatistiqueComponent} from "../../backoffice/statistique/statistique.component";
import { NgChartsModule } from 'ng2-charts';
import {ChartjsComponent} from "@coreui/angular-chartjs";
import {QRCodeModule} from "angularx-qrcode";
import { GestionDemandeComponent } from 'src/app/backoffice/gestion-demande/gestion-demande.component';

@NgModule({
  declarations: [
    BackofficeComponent,
    NavbarbackComponent,
    SidebarbackComponent,
    GestionFoyerComponent,
    FormFoyerComponent,
    FormUniversiteComponent,
    GestionUniversiteComponent,
    StatistiqueChambreComponent,
    GestionDemandeComponent,
    GestionBlocComponent,
    GestionChambreComponent,
    FormBlocComponent,
    FormChambreComponent,
    StatistiqueChambreComponent,
    StatistiqueComponent,
    FormFoyerComponent
  ],
  exports: [
    BackofficeComponent,
    NavbarbackComponent,

  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgApexchartsModule,
    NgChartsModule,
    QRCodeModule,


  ]
})
export class BackofficeModule { }
