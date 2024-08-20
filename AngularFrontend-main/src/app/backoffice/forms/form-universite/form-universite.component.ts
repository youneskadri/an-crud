import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import { Foyer } from 'src/app/shared/models/foyer';
import { Universite } from 'src/app/shared/models/universite';
import { FoyerService } from 'src/app/shared/services/foyerService/foyer.service';
import { UniversiteService } from 'src/app/shared/services/universiteService/universite.service';

@Component({
  selector: 'app-form-universite',
  templateUrl: './form-universite.component.html',
  styleUrls: ['./form-universite.component.scss']
})
export class FormUniversiteComponent implements OnInit{
  Foyers: Foyer[] = [];
  id: number = 0;
  updating: Boolean = false;
  universite : Universite = new Universite();
  selectedFoyer: string = '';
  constructor(
     private http: HttpClient,
     private _foyerService: FoyerService,
     private _universiteService: UniversiteService,
     private router: Router,
     private activatedRoute:ActivatedRoute,
     private snackBar: MatSnackBar
     ) {}
  ngOnInit() {
    // Call your API endpoint to get countries data
    this._foyerService.fetchFoyer().subscribe({
      next: (data) => (this.Foyers = data as Foyer[]),
      error: (err) => console.log(err),
    });


    this.activatedRoute.params.subscribe((param)=>this.id = param['id'])
    if(this.id!=undefined)
    {
      this.updating=true;
    }
    this._universiteService.fetchUniversiteById(this.id).subscribe((res)=> {
      this.UniversiteForm.patchValue(res);
    });

  }


  UniversiteForm: FormGroup = new FormGroup({
    nomUniversite: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ),
    adresse: new FormControl(
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ),
    foyer: new FormControl(


    ),




  });

 get nomUniversite() {
    return this.UniversiteForm.controls['nomUniversite'];
  }

  get adresse() {
    return this.UniversiteForm.controls['adresse'];
  }
  get birthdate() {
    return this.UniversiteForm.controls['foyer'];
  }


  add(f: FormGroup) {

    console.log(f.value)
    console.log("function works !")
    console.log("nom ", this.UniversiteForm.value.nomUniversite)
    console.log("id ", this.UniversiteForm.value.foyer)
    const formValue = {...this.UniversiteForm.value};
    delete formValue.foyer;
    console.log(formValue);

    if (this.id !== undefined) {
      this._universiteService.updateUniversite(this.UniversiteForm.getRawValue(), this.id).subscribe({
        next: () => this.router.navigate(['admin/gestion-universite']),
      });
    }
    else {
    this._universiteService.addUniversite(formValue).subscribe({
      next: () =>

        this._universiteService.affectFoyertoUniversite(this.UniversiteForm.value.nomUniversite, this.UniversiteForm.value.foyer).subscribe({
          next: () =>


            this.router.navigate(['/admin/gestion-universite']),

        })
    });
  }


  }
}
