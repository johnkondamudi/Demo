import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorizationService } from '../shared/authorization.service';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css'],
  providers:[AuthorizationService]

})
export class ChangepasswordComponent implements OnInit {

  confirmationCode: string;
  oldPassword: string;
  newPassword:string;
  errorMessage: string;
  private sub: any;
userName:string="kuldeep.dewal@rsystems.com";
  constructor(public  auth: AuthorizationService, public router: Router, public route: ActivatedRoute) {
  }


  ngOnInit() {
  }

  onChangePassword()
  {

this.auth.chnagePAssword(this.oldPassword,this.newPassword, this);
} 
cognitoCallback(message: string, result: any) {
  //alert('a')

  //alert(message)
  if (message != null) { //error
      this.errorMessage = message;
      console.log("result: " + this.errorMessage);
  } else { //success
   // alert('s')
      //move to the next step
      console.log("redirecting");
      this.errorMessage = 'Password change sUCCESSFULYY';
      //this.router.navigate(['/Home']);
      this.oldPassword='';
      this.newPassword='';
  }
  }
}
