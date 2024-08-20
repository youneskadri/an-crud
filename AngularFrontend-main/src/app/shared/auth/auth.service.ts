import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/User";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint=`${environment.baseUrl}api/auth`;

  constructor(private http:HttpClient) { }
  Register(user:User){
    return this.http.post(`${this.endpoint}/register`,user);
  }
  Authenticate(user:User){
    return this.http.post<{token:string,user:User}>(`${this.endpoint}/authenticate`,user);
  }

  IsLoggedIn(){
    return !!localStorage.getItem('token');
  }
  sendCode(email:string){
    return this.http.put(this.endpoint+'/generatecode',{email:email});
  }
  verifCode(code:string, email:string){
    return this.http.post(this.endpoint+'/verif-code/'+code,{email:email});
  }

  changePassword(email : string, currentPassword: string, newPassword: string, confirmationPassword: string){
    return this.http.put(this.endpoint+'/reset-password',{email: email, currentPassword: currentPassword, newPassword: newPassword, confirmationPassword: confirmationPassword})
  }
}
