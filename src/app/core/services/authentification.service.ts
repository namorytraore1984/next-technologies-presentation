import { Injectable } from '@angular/core';
import { LoginInfo } from 'src/app/shared/login-info';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  userInfo: UserInfo;

  constructor() { }

  loginUser(loginInfo: LoginInfo): void {
    this.userInfo = {
      userName: 'noe_stefy',
      firsName: 'Stephanie',
      lastName: 'bitty'
    }
    console.log('User to log : ' + JSON.stringify(loginInfo));
  }

  logout() {
    this.userInfo = null;
  }
}
