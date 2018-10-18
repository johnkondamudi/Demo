import { Component, OnInit } from '@angular/core';
import {AuthenticationDetails, CognitoUser, CognitoUserAttribute, CognitoUserPool} from 'amazon-cognito-identity-js';
import {NgForm} from "@angular/forms";
import { AuthorizationService } from './shared/authorization.service';
import { Router } from '@angular/router';
// import {AWSKinesisProvider} from 'aws-amplify'
// import * as AWS from "aws-sdk/global";
// import * as STS from "aws-sdk/clients/sts";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AuthorizationService]
})
export class AppComponent implements OnInit {
  title = 'cong2';
   PoolData = {
    UserPoolId: 'us-east-1_dmOHKsdnf',
    ClientId: '539c5ippkvono120apb7j58fum'
  };

   poolData = { UserPoolId : 'us-east-1_TcoKGbf7n',
  ClientId : '4pe2usejqcdmhi0a25jp4b5sh3'
};
// userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

userPool = new CognitoUserPool(this.PoolData);

ngOnInit(){
  //this.signupUser('sam12@sam.com','Sam@123456','sam12@sam.com')
}

constructor(private _auth: AuthorizationService,
  private _router: Router) { }

doLogout(){    
  this._auth.logOut();
  this._router.navigateByUrl('/login');
}
signupUser(user: string, password: string, email: string) {
  const dataEmail = {
    Name: 'email',
    Value: email
  };
  const  emailAtt = [new CognitoUserAttribute(dataEmail)];

  this.userPool.signUp(user,  password, emailAtt, null, ((err, result) => {
    if (err) {
    //  alert('e')
      console.log('There was an error ', err);
    } else {
      //alert('Suc')
      console.log('You have successfully signed up, please confirm your email ')
    }
  }))
}
}
