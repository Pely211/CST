import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { RpgGuardGuard } from '../rpg-guard.guard';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router, private _service : RegistrationService , private _guard: RpgGuardGuard) {}
  mouseOver()
  {
    document.body.style.setProperty('--user-color', "#f30256");
  }
  mouseLeave()
  {
    document.body.style.setProperty('--user-color', "gray");
  }
  redirectToLandingPage() {
    this.router.navigate(['/']);
  }
  user = new User();
  msg = '';
  loginUser()
  {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        console.log("response recieved");
        this._guard.isLoggedIn = true;
        this.router.navigate(['loginsucces']);
      } ,
      () => {
        console.log("exception occured")
        this._guard.isLoggedIn = false;
        this.msg="Invalid credentials. Please enter valid email and password";
      }
    )
  }
  gotoRegistration()
  {
    this.router.navigate(['registration']);
  }
}
