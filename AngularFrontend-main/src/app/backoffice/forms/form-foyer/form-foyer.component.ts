import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { FoyerService } from 'src/app/shared/services/foyerService/foyer.service';
import {Foyer} from "../../../shared/models/foyer";

@Component({
  selector: 'app-form-foyer',
  templateUrl: './form-foyer.component.html',
  styleUrls: ['./form-foyer.component.scss']
})
export class FormFoyerComponent implements OnInit{
  updating: Boolean = false;
  id: number = 0;
  foyer: Foyer = new Foyer();
  constructor(private _foyerService: FoyerService,
              private activatedRoute:ActivatedRoute,
   private router:Router
    ){}


  ngOnInit() {
    this.activatedRoute.params.subscribe((param)=>this.id = param['id'])
    if(this.id!=undefined)
    {
      this.updating=true;
    }
    this._foyerService.fetchById(this.id).subscribe((res)=> {
    this.FoyerForm.patchValue(res);
    });





  }

  FoyerForm: FormGroup = new FormGroup({
    nomFoyer: new FormControl(
      this.foyer.nomFoyer,
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ),
    capaciteFoyer: new FormControl(
      this.foyer.capaciteFoyer,
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ),





  });

 get nomFoyer() {
    return this.FoyerForm.controls['nomFoyer'];
  }

  get capaciteFoyer() {
    return this.FoyerForm.controls['capaciteFoyer'];
  }

/*
  add(f: FormGroup) {

    console.log(f.value)
    console.log("function works !")
    this._foyerService.addFoyer(this.FoyerForm.value).subscribe(
      (response) => {
        console.log('Form data sent successfully:', response);
        this.router.navigate(['admin/gestion-foyer'])
        // Handle the response or any further logic
      },
      (error) => {
        console.error('Error sending form data:', error);
        // Handle errors accordingly
      }
    );
  }*/


  add() {
    console.log(this.FoyerForm.value);
    console.log(this.FoyerForm.getRawValue());

    if (this.id !== undefined) {
      this._foyerService.updateFoyer(this.FoyerForm.getRawValue(), this.id).subscribe({
        next: () => this.router.navigate(['admin/gestion-foyer']),
      });
    }
    else {

      this._foyerService.addFoyer(this.FoyerForm.getRawValue()).subscribe({
        next: () => this.router.navigate(['admin/gestion-foyer']),
      });
    }

  }






}
