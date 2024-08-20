import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bloc } from 'src/app/shared/models/bloc';
import { BlocService } from 'src/app/shared/services/blocService/bloc.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FoyerService } from 'src/app/shared/services/foyerService/foyer.service';
import { Foyer } from 'src/app/shared/models/foyer';
import { ChambreService } from 'src/app/shared/services/chambreService/chambre.service';
import { ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-gestion-bloc',
  templateUrl: './gestion-bloc.component.html',
  styleUrls: ['./gestion-bloc.component.scss']
})
export class GestionBlocComponent implements OnInit,OnDestroy{
  @ViewChild('downloadLink') downloadLink?: ElementRef<HTMLAnchorElement>;
  foyerIds: any[] = [];
  
  blocs:Bloc[]=[];
  s:Number=0 ;
  blocid:number=0;
  myMap = new Map<number, number>();
  constructor(private router: Router,private _BlocService: BlocService,
    private _FoyerService:FoyerService,private _ChambreSerivce: ChambreService,
 ) { }
  ngOnDestroy(): void {
    

  }
  ngOnInit(): void {
    console.log('I m mounted');

    this._BlocService.getBlocs().subscribe({
       next:(data)=>{this.blocs=data as Bloc[] ; 
        let somme:number=0 ;
         for (let i=0 ; i<this.blocs.length ; i++ )
            {
                this._ChambreSerivce.getnombreChambreParBloc(this.blocs[i].idBloc).subscribe((res)=>{
                  somme = res  as number;  
                  this.myMap.set(this.blocs[i].idBloc,somme) 
                 })
           
                
            }
               console.log(this.myMap)
          } ,

       error: (error:any) => console.log(error),
        complete:()=>console.log("complete")

     }) ;
     
     this._FoyerService.fetchFoyer().subscribe({

      next:(data)=>(this.foyerIds= data as Foyer[]) ,
      error:(err)=>console.log(err) ,
      }
      );
}

deleteBloc(id:number) 
{
  this._BlocService.deleteBloc(id).subscribe({
    next: () => this.blocs = this.blocs.filter((bloc) => bloc.idBloc !== id),
 
    error: (error:any) => console.log(error)
  
  }) ;  
}
editBloc(idBloc: number) {
  this.router.navigate(['/admin/add-bloc', idBloc]);
}

pdfblocchambre() {
  this._BlocService.pdfBlocChambre().subscribe(
    (response: Blob) => {
      const blob = new Blob([response], { type: 'application/pdf' });

      const blobUrl = URL.createObjectURL(blob);

      const link = this.downloadLink?.nativeElement || document.createElement('a');
      link.href = blobUrl;
      link.download = 'Overview_Report.pdf';

      link.click();

      URL.revokeObjectURL(blobUrl);
    },
    (error: any) => {
      console.error('Error fetching PDF: ', error);
    }
  );
}


}
