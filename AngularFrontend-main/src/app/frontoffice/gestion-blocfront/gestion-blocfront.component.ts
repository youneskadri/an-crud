import { Component, OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import  {BlocService} from 'src/app/shared/services/blocService/bloc.service'
import { Bloc } from 'src/app/shared/models/bloc';
@Component({
  selector: 'app-gestion-blocfront',
  templateUrl: './gestion-blocfront.component.html',
  styleUrls: ['./gestion-blocfront.component.scss']
})
export class GestionBlocfrontComponent implements OnInit , OnDestroy {

  blocs:Bloc[]=[];
  private routeSubscription: Subscription | undefined;
  constructor(private router: Router,private _BlocService: BlocService) { }
  ngOnDestroy(): void {
    // Unsubscribe or perform cleanup tasks here
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
  ngOnInit(): void {
    console.log('I m mounted');

    this._BlocService.getBlocs().subscribe({
       next:(data)=>this.blocs=data as Bloc[],
       error: (error:any) => console.log(error),
        complete:()=>console.log("complete")

     }) ;
}

  ToChambres(idBloc: number) {
   
    this.router.navigate(['/user/bloc', idBloc, 'chambre']);
  }

}
