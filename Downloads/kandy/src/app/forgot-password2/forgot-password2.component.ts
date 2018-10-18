import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../shared/authorization.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password2',
  templateUrl: './forgot-password2.component.html',
  styleUrls: ['./forgot-password2.component.css']
})
export class ForgotPassword2Component implements OnInit {

  verificationCode: string;
  email: string;
  password: string;
  errorMessage: string;
  private sub: any;
  constructor(private auth: AuthorizationService,public router: Router, public route: ActivatedRoute,) { }

  ngOnInit() { 
     this.sub = this.route.params.subscribe(params => {
    this.email = params['email'];

});
this.errorMessage = null;
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
}

onNext() {
  this.errorMessage = null;
  this.auth.confirmNewPassword(this.email, this.verificationCode, this.password).subscribe((data) => {

    //alert(data)
      //alert('s1')
      this.router.navigate(['/login']);
  }, (err)=> {
   //alert('e1')
   this.errorMessage=err;
  });   ;;
}






}
