import { Component, OnInit } from '@angular/core';
import { TypeChambre } from 'src/app/shared/enums/typechambre';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ChambreService } from 'src/app/shared/services/chambreService/chambre.service';
import { BlocService } from 'src/app/shared/services/blocService/bloc.service';
import { Bloc } from 'src/app/shared/models/bloc';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Chambre } from 'src/app/shared/models/chambre';
import {ToastrService} from "ngx-toastr";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-form-chambre',
  templateUrl: './form-chambre.component.html',
  styleUrls: ['./form-chambre.component.scss']
})
export class FormChambreComponent implements OnInit {
  BlocIds: any[] = [];
  update: Boolean = false;
  idChambre: number=0; 
  chambre:Chambre=new Chambre() ;  
  constructor (private _ChambreService:ChambreService,private _BlocService:BlocService, 
    private router: Router,private route:  ActivatedRoute,
    private toast: ToastrService) {}

  ChambreForm: FormGroup = new FormGroup({
    numeroChambre: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.min(1)
      ]
    ),
    typeC: new FormControl(
      '',
      [
        Validators.required
    
      ]
    ),
   
    idBloc: new FormControl('', Validators.required),

 
  });
ngOnInit(): void {

  this.route.params.subscribe(params => {
     this.idChambre = params['id'];
     if(this.idChambre!=undefined)
     {
       this.update=true;
     }
     this._ChambreService.getChambreById(this.idChambre).subscribe(
       (res)=>
         {
         
           this.ChambreForm.patchValue(res as Chambre) ; 

         }

     )
  });
  this._BlocService.fetchBloc().subscribe({

    next:(data)=>(this.BlocIds= data as Bloc[]) ,
    error:(err)=>console.log(err) ,
    }
    );
}

get chambreTypes() {
  return Object.values(TypeChambre);
}
get numeroChambre() {
  return this.ChambreForm.controls['numeroChambre'];
}  

get typeC() {
  return this.ChambreForm.controls['typeC'];
}
get idBloc() {
  return this.ChambreForm.controls['idBloc'];
}


add(f: FormGroup) {
  const formValue = { ...this.ChambreForm.value };
  delete formValue.idBloc;

  if (this.idChambre === undefined) {
    this._ChambreService.addChambre(formValue).subscribe({
      next: () => {
        this._ChambreService.affecterChambretoBloc(this.ChambreForm.value.numeroChambre, this.ChambreForm.value.idBloc)
          .subscribe({
            next: () => {
              this.router.navigate(['/admin/gestion-chambre']);
            },
            error: (err) => {
              this.handleError(err);
            }
          });
      },
      error: (err) => {
        this.handleError(err);
      }
    });
  } else {
    this._ChambreService.updateChambre(this.idChambre, formValue).subscribe({
      next: () => {
        this.router.navigate(['/admin/gestion-chambre']);
      },
      error: (err) => {
        this.handleError(err);
      }
    });
  }
}


private handleError(error: any) {
  console.error('An error occurred:', error);
  console.log('Error object:', error);

  if (error.error?.message === 'Chambre with numeroChambre already exists') {
    this.toast.error('Chambre with numeroChambre already exists');
  } else {
    this.toast.error('An error occurred while processing your request.', 'Error', {
      timeOut: 5000,
      positionClass: 'toast-top-center'
    });
  }
}


}
