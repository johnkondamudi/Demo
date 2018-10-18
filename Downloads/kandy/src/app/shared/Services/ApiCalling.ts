import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { Router } from '@angular/router';


@Injectable()
export class ApiCalling {
  readonly rootUrl = 'http://rsi:5000/api/v1/resources';

  constructor(private __http: HttpClient,private router : Router){}

  getAllRoles() {
  //alert('1')
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.__http.get(this.rootUrl + '/roles', { headers: reqHeader });
  }

  GetRoleRights(Id) {
    var data = "RoleID=" + Id;


    //alert(data)
    var reqHeader = new HttpHeaders({ 'No-Auth': 'True' });
    return this.__http.get(this.rootUrl + '/rights?'+data, { headers: reqHeader });
  }

  APICall() {
    //var data = "RoleID=" + Id;
    alert('data')

    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json','No-Auth':'True' });
    //return this.__http.get('https://fohrthv6e6.execute-api.us-west-2.amazonaws.com/prod/helloworld', { headers: reqHeader });
    return  this.__http.get('https://fohrthv6e6.execute-api.us-west-2.amazonaws.com/prod/helloworld',
    {headers: new HttpHeaders({'Authorization': 
    'Bearer ' + localStorage.getItem('userToken')})})
  }

}