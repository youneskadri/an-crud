import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/auth/auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isMenuOpened: boolean = false;
  constructor(private authService: AuthService, private toast: ToastrService, private router:Router) {
  }

  isLoggedIn(){
    return this.authService.IsLoggedIn();
  }

  ngOnInit(): void {
  }

  toggleMenu(){
    this.isMenuOpened = !this.isMenuOpened;
  }

  logout() {
    localStorage.clear();
    this.toast.info("you are logged out see you soon !!", "Logged Out",{
      timeOut:5000,
      positionClass:'toast-top-center'
    });
  }

  redirect() {
    this.router.navigate(['/sign-in']);
  }
}
