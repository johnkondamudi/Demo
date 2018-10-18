import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthorizationService} from "../shared/authorization.service";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiCalling } from '../shared/Services/ApiCalling';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthorizationService,ApiCalling]
})
export class RegisterComponent implements OnInit {


  ngOnInit() {
    //alert('s')
    this.Api.getAllRoles().subscribe((data : any)=>{
      //alert('2')
      data.forEach(obj => obj.selected = false);
      this.roles = data;
      });
  }
  confirmCode: boolean = false;
  codeWasConfirmed: boolean = false;
  error: string = "";
  roles : any[];
  roleRights : any[];
  RoleId:number
  
  constructor(private auth: AuthorizationService,
              private _router: Router,private Api :ApiCalling) { }

  register(form: NgForm) {
    var x = this.roles.filter(x => x.selected).map(y => y.Name);
    var y = this.roleRights.filter(x => x.selected).map(y => y.Name);

    alert(x)
    //alert(y)

//return

    const email = form.value.email;
    const password = form.value.password;
    const name = form.value.name;
    const phone = form.value.phone;
    const address = form.value.address;
    //this.user.name=name;
    this.auth.register(email, password,name,address,phone,x,y).subscribe(
      (data) => {        
        this.confirmCode = true;
      },
      (err) => {
        console.log(err);
        //alert(err.message)
        this.error = err.message;
      }
    );
  }

  validateAuthCode(form: NgForm) {
    const code = form.value.code;
    
    this.auth.confirmAuthCode(code).subscribe(
      (data) => {
        //this._router.navigateByUrl('/');
        this.codeWasConfirmed = true;
        this.confirmCode = false;
      },
      (err) => {
        console.log(err);
        this.error = "Confirm Authorization Error has occurred";
      });
  }
  updateSelectedRoles(Id,index) {
    alert(index)
    this.Api.GetRoleRights(Id).subscribe(
      (data : any)=>{
        data.forEach(obj => obj.selected = false);
        this.roleRights = data;
        //alert(data)
      });
    //  this.roles[index].selected  =index
    this.roles[index].selected = !this.roles[index].selected;
  }

  updateSelectedRoleRights(index) {
    this.roleRights[index].selected = !this.roleRights[index].selected;
   }
}
