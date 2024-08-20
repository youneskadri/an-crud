import { Injectable } from '@angular/core';
import { Bloc } from '../../models/bloc';
import { Observable, tap } from 'rxjs';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { Foyer } from '../../models/foyer';

@Injectable({
  providedIn: 'root'
})
export class BlocService {

  httpOptions = {};
  apiUrl = environment.baseUrl+'bloc/';
  apiUrl2 = environment.baseUrl+'foyer/';
  apiUrl3 = environment.baseUrl+'chambre/';
  constructor(private _http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
  }

  getFoyerOptions(): Observable<string[]> {
    return this._http.get<string[]>(this.apiUrl2+'ids'); // Assuming it returns an array of numbers (foyer IDs)
  }
  fetchBloc() {
    return this._http.get(this.apiUrl+'retrieve-all-bloc',this.httpOptions);
  }
  getBlocs()
  {
   return this._http.get(this.apiUrl+'retrieve-all-bloc',this.httpOptions) ;
  }

  deleteBloc(id:number)
  {
    return this._http.delete (this.apiUrl+"delete-bloc/"+id,this.httpOptions) ;
  }
  affecterBlocToFoyer(nomBloc:String,idFoyer:number){
    return this._http.put(this.apiUrl+'affecter-bloc-to-foyer/' + nomBloc +'/' + idFoyer,null,this.httpOptions);
  }
  addBloc(data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`

      })
    };

    return this._http.post<any>('http://localhost:8082/app/bloc/add-bloc', data, httpOptions);
  }
  getBlocById (id:number)
  {
    return this._http.get(this.apiUrl+'retrieve-bloc/'+id, this.httpOptions) ;

  }
  updateBloc(id:number, bloc:Bloc){
    return this._http.put(this.apiUrl+'updateBloc/'+id, {nomBloc:bloc.nomBloc,capaciteBloc:bloc.capaciteBloc}, this.httpOptions);
  }
  getBlocStat(){
    return this._http.get(this.apiUrl3+"typesChambresParBloc",this.httpOptions);
  }

  pdfBlocChambre(): Observable<Blob> {
    return this._http.get(this.apiUrl3 + 'generate-pdf', {
      responseType: 'blob', 
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    });
  }

}
