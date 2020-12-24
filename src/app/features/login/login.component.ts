import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/services/authentification.service';
import { LoginInfo } from 'src/app/shared/login-info';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginInfo : LoginInfo = {
    'userName' : '',
    'passWord' : '',
    'rememberMe': false
  };

  constructor(private auth: AuthentificationService, private router: Router) { }

  loginFormSubmit(): void {
    console.log(this.auth.userInfo);
    this.auth.loginUser(this.loginInfo);
    this.router.navigate(['/loggedpage']);
  }
}
