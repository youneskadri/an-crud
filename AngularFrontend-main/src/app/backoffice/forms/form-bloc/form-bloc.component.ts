import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Foyer } from 'src/app/shared/models/foyer';
import { BlocService } from 'src/app/shared/services/blocService/bloc.service';
import { FoyerService } from 'src/app/shared/services/foyerService/foyer.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Bloc } from 'src/app/shared/models/bloc';
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-form-bloc',
  templateUrl: './form-bloc.component.html',
  styleUrls: ['./form-bloc.component.scss']
})
export class FormBlocComponent  implements OnInit {

  foyer: any[] = [];
  idBloc: number=0; 
  update: Boolean = false;
  bloc:Bloc=new Bloc() ;  

  constructor (private _BlocService: BlocService,private _FoyerService : FoyerService, 
    private router: Router,private route:  ActivatedRoute,
    private toast: ToastrService) {}
  BlocForm: FormGroup = new FormGroup({
    nomBloc: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ),
    capaciteBloc: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.min(1)
      ]
    ),
   
    foyer: new FormControl(


      ),

 
  });

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.idBloc = params['id'];
      if(this.idBloc!=undefined)
      {
        this.update=true;
      }
      this._BlocService.getBlocById(this.idBloc).subscribe(
        (res)=>
          {
          
            this.BlocForm.patchValue(res as Bloc) ; 
 
          }
 
      )
   });


    this._FoyerService.fetchFoyer().subscribe({

    next:(data)=>(this.foyer= data as Foyer[]) ,
    error:(err)=>console.log(err) ,
    }
    );
  }

 
  get nomBloc() {
    return this.BlocForm.controls['nomBloc'];
  }  

  get capaciteBloc() {
    return this.BlocForm.controls['capaciteBloc'];
  }
 
  
  add(f: FormGroup) {
    const formValue = { ...this.BlocForm.value };
    delete formValue.foyer;
    console.log("Value of this.idBloc:", this.idBloc);
    if (this.idBloc === undefined) {
      console.log("Attempting to add a new bloc");
      this._BlocService.addBloc(formValue).subscribe({
        next: () => {
          this._BlocService.affecterBlocToFoyer(this.BlocForm.value.nomBloc, this.BlocForm.value.foyer).subscribe({
            next: () => {
              this.router.navigate(['/admin/gestion-bloc']);
              this.toast.success("Bloc added successfully!", "Success", {
                timeOut: 5000,
                positionClass: 'toast-top-center'
              });
            }
          });
        }
      });
    } else {
      console.log("Attempting to update bloc with ID:", this.idBloc);
      console.log(this.idBloc);
      this._BlocService.updateBloc(this.idBloc, formValue).subscribe({
        next: () => {
          this.router.navigate(['/admin/gestion-bloc']);
          this.toast.success("Bloc updated successfully!", "Success", {
            timeOut: 5000,
            positionClass: 'toast-top-center'
          });
        }
      });
    }
}
}
