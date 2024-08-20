import { Component } from '@angular/core';
import {UserService} from "../shared/services/userService/user.service";
import {AuthService} from "../shared/auth/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
  email:string = '';
  constructor(private userService:UserService, private authService:AuthService, private router:Router, private toast: ToastrService) {
  }
  sendCode() {
    this.authService.sendCode(this.email).subscribe((res)=>{
      this.toast.success("please check email for code", `Email Sent !`,{
        timeOut: 5000,
        positionClass:'toast-top-center'
      });
      localStorage.setItem('email', this.email);
      this.router.navigate(['/code-verification']);
    }, (err) =>{
      if (err.status == 400){
        this.toast.error("Verify the email !!", "No user associated to this email",{
          timeOut:5000,
          positionClass:'toast-top-center'
        })
      }
    });
  }
}
