import { Component, OnInit } from '@angular/core';

import {Stuff} from './../shared/Shared'
import { Router } from '@angular/router';
import { Callback, AuthorizationService } from '../shared/authorization.service';

@Component({
  selector: 'app-jwt-token',
  templateUrl: './jwt-token.component.html',
  styleUrls: ['./jwt-token.component.css']
})
export class JWtTokenComponent implements OnInit,Callback {
  public stuff: Stuff = new Stuff();
 
  constructor(public router: Router, public userService: AuthorizationService) {
    this.userService.isAuthenticated(this);
    console.log("in JwtComponent");

}

isLoggedIn(message: string, isLoggedIn: boolean) {


  if (!isLoggedIn) {
      this.router.navigate(['/home/login']);
  } else {
      this.userService.getAccessToken(new AccessTokenCallback(this));
      this.userService.getIdToken(this);
      //this.userService.getIdToken(new IdTokenCallback(this));
  }
}
  ngOnInit() {
  }
  callback(){}
  callbackWithParam(result) {
    this.stuff.idToken = result;
}

}


export class AccessTokenCallback implements Callback {
  constructor(public jwt: JWtTokenComponent) {

  }

  callback() {

  }

  callbackWithParam(result) {
      this.jwt.stuff.accessToken = result;
  }
}

export class IdTokenCallback implements Callback {
  constructor(public jwt: JWtTokenComponent) {

  }

  callback() {

  }

  callbackWithParam(result) {
      this.jwt.stuff.idToken = result;
  }
}
