import { Component } from '@angular/core';
import {AuthService} from "../shared/auth/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent {
  newPassword: string = '';
  confirmPassword: string = '';
  currentPassword: string = '';
  email:string ='';

  constructor(private authService: AuthService, private toast: ToastrService, private router: Router) {
  }
  setPassword() {
    this.email = localStorage.getItem('email') ?? '';
    console.log(this.newPassword);
    console.log(this.confirmPassword);
    console.log(this.currentPassword);
    this.authService.changePassword(this.email, this.currentPassword, this.newPassword, this.confirmPassword).subscribe((res) =>{
      this.toast.success("sign in now", `Password reset successfully !`,{
        timeOut: 5000,
        positionClass:'toast-top-center'
      });
      localStorage.clear();
      this.router.navigate(['sign-in']);
    },
      (err) =>{
        this.toast.error("Password Recently used !!", "Choose an other Password",{
          timeOut:5000,
          positionClass:'toast-top-center'
        })
      })
  }
}
