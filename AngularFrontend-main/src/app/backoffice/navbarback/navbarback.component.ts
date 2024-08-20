import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbarback',
  templateUrl: './navbarback.component.html',
  styleUrls: ['./navbarback.component.scss']
})
export class NavbarbackComponent {

  constructor(private toast: ToastrService, private router:Router) {
  }

  logout() {
    localStorage.clear();
    this.toast.info("you are logged out see you soon !!", "Logged Out",{
      timeOut:5000,
      positionClass:'toast-top-center'
    });
    this.router.navigate(['/sign-in']);
  }

}
