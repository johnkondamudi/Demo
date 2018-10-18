import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../shared/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resend-code',
  templateUrl: './resend-code.component.html',
  styleUrls: ['./resend-code.component.css']
})
export class ResendCodeComponent implements OnInit {

  email: string;
  errorMessage: string;
  constructor(private auth: AuthorizationService,public router: Router,) { }

  ngOnInit() {
  }
  resendCode() {
    this.auth.resendCode(this.email, this);
}
cognitoCallback(error: any, result: any) {
  //alert('a')
  if (error != null) {
      this.errorMessage = "Something went wrong...please try again";
  } else {
      this.router.navigate(['/confirm',
       this.email]);
  }
}
}
