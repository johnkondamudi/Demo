import { Component, OnInit } from '@angular/core';
import { NewPasswordUser } from "../shared/Shared";
import { AuthorizationService } from '../shared/authorization.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})


export class NewPasswordComponent implements OnInit {
//  router: Router;
  errorMessage: string;
  registrationUser: NewPasswordUser;
  
  constructor(private auth: AuthorizationService,private router:Router) {
    this.registrationUser = new NewPasswordUser();
        this.errorMessage = null;
   }

  ngOnInit() {

  }

  onRegister() {
    console.log(this.registrationUser);
    this.errorMessage = null;
    this.auth.newPassword(this.registrationUser, this);
}
cognitoCallback(message: string, result: any) {
  //alert(message)
  if (message != null) { //error
      this.errorMessage = message;
      console.log("result: " + this.errorMessage);
  } else { //success
   // alert('s')
      //move to the next step
      console.log("redirecting");
      this.router.navigate(['/Home']);
  }
}
}
