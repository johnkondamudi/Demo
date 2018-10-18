import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthorizationService } from '../shared/authorization.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-password',
  templateUrl: './confirm-password.component.html',
  styleUrls: ['./confirm-password.component.css']
})
// export class ConfirmPasswordComponent implements OnInit {

//   constructor(private auth: AuthorizationService,private router:Router) { }

//   ngOnInit() {
//   }

// }


export class ConfirmPasswordComponent implements OnInit, OnDestroy {
  confirmationCode: string;
  email: string;
  errorMessage: string;
  private sub: any;

  constructor(public  auth: AuthorizationService, public router: Router, public route: ActivatedRoute) {
  }

  ngOnInit() {
      this.sub = this.route.params.subscribe(params => {
          this.email = params['username'];

      });

      this.errorMessage = null;
  }

  ngOnDestroy() {
      this.sub.unsubscribe();
  }

  onConfirmRegistration() {
   // alert('a')
      this.errorMessage = null;
      this.auth.confirmRegistration(this.email, this.confirmationCode, this);
  }

  cognitoCallback(message: string, result: any) {
   // alert(message)
      if (message != null) { //error
          this.errorMessage = message;
          console.log("message: " + this.errorMessage);
      } else { //success
          //move to the next step
          console.log("Moving to securehome");
          // this.configs.curUser = result.user;
          this.router.navigate(['/Home']);
      }
  }
}

