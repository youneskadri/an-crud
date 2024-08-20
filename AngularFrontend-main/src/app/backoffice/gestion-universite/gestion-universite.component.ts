import { HttpClient } from '@angular/common/http';
import { Component,OnDestroy, OnInit } from '@angular/core';
import { Universite } from 'src/app/shared/models/universite';
import { UniversiteService } from 'src/app/shared/services/universiteService/universite.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-gestion-universite',
  templateUrl: './gestion-universite.component.html',
  styleUrls: ['./gestion-universite.component.scss']
})
export class GestionUniversiteComponent implements OnInit {
  listUniversite: Universite[] = [];
  filteredUniversities: any[] = [];
  searchTerm: string = '';
  myAngularxQrCode: string = '';
  constructor(
    private http: HttpClient,
    private _universiteService:UniversiteService,
    private router:Router
    ){
    this.myAngularxQrCode = 'Khalil Hermassi';
  };

  ngOnInit(): void {
    this.refresh();

  }
  refresh() {
    this._universiteService.fetchUniversites().subscribe({
      next: (data) => {
        this.listUniversite = data as Universite[];
        this.filteredUniversities = this.listUniversite;
      },







      error: (err) => console.log(err),
    });
  }
  deleteUniversite(id:number)
{
  this._universiteService.removeUniversite(id).subscribe({
    next: () => {
      this.listUniversite = this.listUniversite.filter((universite) => universite.idUniversite !== id);
      this.refresh();
    },
    error: (error:any) => console.log(error)

  }) ;
}

  search(): void {
    this.filteredUniversities = this.listUniversite.filter((u) =>
      u.nomUniversite.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
