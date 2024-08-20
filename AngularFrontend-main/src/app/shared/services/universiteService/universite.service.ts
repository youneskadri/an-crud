import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Universite } from '../../models/universite';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Foyer} from "../../models/foyer";

@Injectable({
  providedIn: 'root'
})
export class UniversiteService {

  apiUrl = environment.baseUrl+'universite/';
  httpOptions = {};
  list: Universite[] = []
  constructor(private _http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
  }


  fetchUniversites() {
    return this._http.get(this.apiUrl+'retrieve-all-universite', this.httpOptions);
  }
  fetchUniversiteById(id:number){
    return this._http.get(this.apiUrl+'get-universite-by-id/'+id,this.httpOptions);
  }

  updateUniversite(universite: Universite, id: number) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    const options = {
      headers: headers
    };
    return this._http.put(this.apiUrl + "update-universite/"+id, {nomUniversite:universite.nomUniversite,adresse:universite.adresse},options);
  }
  removeUniversite(id: number) {
    return this._http.delete(this.apiUrl + 'delete-universite/'+id, this.httpOptions);
  }
  addUniversite(universite: Universite) {
    return this._http.post(this.apiUrl+'add-universite', universite, this.httpOptions);
  }
  affectFoyertoUniversite(nomUniversite:String,idFoyer:number){
    return this._http.put(this.apiUrl+'affecterFoyer/' + nomUniversite +'/' + idFoyer, null,this.httpOptions);
  }
}
