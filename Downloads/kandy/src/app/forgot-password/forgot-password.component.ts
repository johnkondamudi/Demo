import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../shared/authorization.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  email: string;
  errorMessage: string;
  constructor(private auth: AuthorizationService,public router: Router,) { }

  ngOnInit() {
  }
  onNext() {
    this.errorMessage = null;
    this.auth.forgotPassword(this.email).subscribe((data) => {

    alert(data)
//      alert('s1')
      this.router.navigate(['/forgot', this.email]);
  }, (err)=> {
  //  alert('e1')
  });   ;
}
}
