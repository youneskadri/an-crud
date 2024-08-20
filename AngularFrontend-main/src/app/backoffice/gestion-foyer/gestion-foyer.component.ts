import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Foyer } from 'src/app/shared/models/foyer';
import { FoyerService } from 'src/app/shared/services/foyerService/foyer.service';

@Component({
  selector: 'app-gestion-foyer',
  templateUrl: './gestion-foyer.component.html',
  styleUrls: ['./gestion-foyer.component.scss']
})
export class GestionFoyerComponent implements OnInit,OnDestroy{

  listFoyer: Foyer[]=[];
  constructor(private _foyerService: FoyerService, private http: HttpClient) {}

  ngOnInit(): void {

    this._foyerService.fetchFoyer().subscribe({
      next: (data) => (this.listFoyer = data as Foyer[]),
      error: (err) => console.log(err),
    });
  }

  ngOnDestroy(): void {
    console.log('I m unmounted');
  }




deleteFoyer(id:number)
{
  this._foyerService.removeFoyer(id).subscribe({
    next: () => this.listFoyer = this.listFoyer.filter((foyer) => foyer.idFoyer !== id),

    error: (error:any) => console.log(error)

  }) ;
}
}
