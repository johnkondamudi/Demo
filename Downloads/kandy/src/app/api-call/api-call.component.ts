import { Component, OnInit } from '@angular/core';
import { ApiCalling } from '../shared/Services/ApiCalling';

@Component({
  selector: 'app-api-call',
  templateUrl: './api-call.component.html',
  styleUrls: ['./api-call.component.css'],
  providers:[ApiCalling]
})
export class ApiCallComponent implements OnInit {
data:any
  constructor(private _ApiCalling:ApiCalling) { }

  ngOnInit() {
    this.data=this._ApiCalling.APICall().subscribe((data: any) => {
      this.data=(data)
     
   })

  }
   
  

}
