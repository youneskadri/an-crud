import { Component } from '@angular/core';
import {AuthService} from "../shared/auth/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-code-verification',
  templateUrl: './code-verification.component.html',
  styleUrls: ['./code-verification.component.scss']
})
export class CodeVerificationComponent {
  VerificationCode: string[] = ['', '', '', '', '', ''];
  email:string ='';
  constructor(private authService:AuthService, private toast: ToastrService, private router:Router) {
  }
  verifCode() {
    this.email = localStorage.getItem('email') ?? '';
    this.authService.verifCode(this.VerificationCode.join(''),this.email).subscribe((res) =>{
      console.log(res);
      if(res === true){
        this.toast.success("code is correct", "Enter a new password !",{
          timeOut: 5000,
          positionClass:'toast-top-center'
        });
        this.router.navigate(['/new-password']);
      }
      else{
        this.toast.error("code is incorrect", "Please verify the code !",{
          timeOut:5000,
          positionClass:'toast-top-center'
        })
      }
    });
  }
}
