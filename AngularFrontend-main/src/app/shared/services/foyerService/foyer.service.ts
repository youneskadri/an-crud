import { Injectable } from '@angular/core';
import { Foyer } from '../../models/foyer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  apiUrl = environment.baseUrl+'foyer/';
  httpOptions = {};
  list: Foyer[] = []
  constructor(private _http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
  }



  fetchFoyer() {
    return this._http.get(this.apiUrl+'retrieve-all-foyer', this.httpOptions);
  }

  removeFoyer(id: number) {
    return this._http.delete(this.apiUrl + 'delete-foyer/'+id, this.httpOptions);
  }

  addFoyer(data: any): Observable<any> {

    return this._http.post<any>('http://localhost:8082/app/foyer/add-foyer', data, this.httpOptions);
  }

  updateFoyer(foyer: Foyer, id: number) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization',`Bearer ${localStorage.getItem('token')}`);
    const options = {
      headers: headers
    };
    return this._http.put(this.apiUrl + "update-foyer/"+id, {nomFoyer:foyer.nomFoyer,capaciteFoyer:foyer.capaciteFoyer},options);
  }
  getFoyerbyCapacite(){
    return this._http.get(this.apiUrl+"get-foyer-by-capacite",this.httpOptions);
  }
  fetchById(id:Number)
  {
    return this._http.get<Foyer>(this.apiUrl+'retrieve-foyer/'+id, this.httpOptions );
  }
}
