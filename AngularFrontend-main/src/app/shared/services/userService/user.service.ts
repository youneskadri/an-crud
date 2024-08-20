import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment.development";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../../models/User";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {};
  endpoint=`${environment.baseUrl}admin/user/`;

  constructor(private http:HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    };
  }

  fetchUsers(){
    return this.http.get<User[]>(this.endpoint+'retrieve-all-users', this.httpOptions );
  }

  getUserById(id:number){
    return this.http.get<User>(this.endpoint+'retrieve-user/'+id, this.httpOptions );
  }

  updateUser(id:number, user:User){
    return this.http.put(this.endpoint+'update-user/'+id, {firstname:user.firstname,lastname:user.lastname,email:user.email,
      dateNaissance:user.dateNaissance,ecole:user.ecole}, this.httpOptions);
  }

}
