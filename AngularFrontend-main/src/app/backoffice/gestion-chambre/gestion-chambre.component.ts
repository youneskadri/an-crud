import { Component, OnDestroy, OnInit } from '@angular/core';
import { Chambre } from 'src/app/shared/models/chambre';
import { ChambreService } from 'src/app/shared/services/chambreService/chambre.service';
import { ActivatedRoute } from '@angular/router';
import { BlocService } from 'src/app/shared/services/blocService/bloc.service';
import { Bloc } from 'src/app/shared/models/bloc';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion-chambre',
  templateUrl: './gestion-chambre.component.html',
  styleUrls: ['./gestion-chambre.component.scss']
})
export class GestionChambreComponent  implements OnInit,OnDestroy {
  chambres:Chambre[]=[];
  blocIds: any[] = [];
  constructor( private router: Router,private _ChambreService: ChambreService,private _BlocService: BlocService ){}
  ngOnDestroy(): void {
    

  }
  ngOnInit(): void {
    this._ChambreService.getChambres().subscribe({
      next:(data)=>this.chambres=data as Chambre[],
      error: (error:any) => console.log(error),
       complete:()=>console.log("complete")

    }) ;
    this._BlocService.fetchBloc().subscribe({

      next:(data)=>(this.blocIds= data as Bloc[]) ,
      error:(err)=>console.log(err) ,
      }
      );
  }
  stringifyObject(obj: any): string {
    console.log('Chambres with bloc:', this.chambres); 
    return JSON.stringify(obj);
  }
  DeleteChambre(id:number) 
{
  this._ChambreService.DeleteChambre(id).subscribe({
    next: () => this.chambres = this.chambres.filter((chambre) => chambre.idChambre !== id),
 
    error: (error:any) => console.log(error)
  
  }) ;  
}
editChambre(idChambre: number) {
  this.router.navigate(['/admin/add-chambre', idChambre]);
}
}
