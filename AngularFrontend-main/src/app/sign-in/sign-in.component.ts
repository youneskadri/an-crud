import { Component } from '@angular/core';
import {AuthService} from "../shared/auth/auth.service";
import {User} from "../shared/models/User";
import {NgToastService} from "ng-angular-popup";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  user:User = new User();

  constructor(private authService:AuthService, private toast: ToastrService, private router: Router) {
  }

  onSubmit() {
    this.authService.Authenticate(this.user).subscribe((res) => {
      this.toast.success("welcome back", `Logged in successfully !`,{
          timeOut: 5000,
          positionClass:'toast-top-center'
          });
      localStorage.setItem('token', res.token);
      localStorage.setItem('userid',String(res.user.id));
      localStorage.setItem('firstname', res.user.firstname);
      localStorage.setItem('lastname', res.user.lastname);
      if(res.user.role === 'ETUDIANT'){
        this.router.navigate(['/user/home']);
      }
      if(res.user.role === 'ADMIN'){
        this.router.navigate(['/admin/dashboard']);
      }
    },
      (err) =>{
        console.log(typeof err.status);
        if (err.status == 400){
          this.toast.error("Verify the email !!", "No user associated to this email",{
            timeOut:5000,
            positionClass:'toast-top-center'
          })
        }
        else{
          this.toast.error("Please verify your password !!", "Wrong password",{
            timeOut: 5000,
            positionClass:'toast-top-center'
          })
        }
      })
  }

}
