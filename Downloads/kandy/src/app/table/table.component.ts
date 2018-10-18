import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  Data:any=[{
    Name:"kandy",
    City:"Delhi",
    ContactNo:"1258488",
    MailID:"Sam@sam.com"
  },
  {
    Name:"Romeo",
    City:"Mew Delhi",
    ContactNo:"98568745",
    MailID:"Sam1@sam1.com"
  },
  {
    Name:"Kuldeep",
    City:"Noida",
    ContactNo:"82859726",
    MailID:"kandy@in.com"
  },
  {
    Name:"kandy",
    City:"Delhi",
    ContactNo:"1258488",
    MailID:"Sam@sam.com"
  },
  {
    Name:"Romeo",
    City:"Mew Delhi",
    ContactNo:"98568745",
    MailID:"Sam1@sam1.com"
  },
  {
    Name:"Kuldeep",
    City:"Noida",
    ContactNo:"82859726",
    MailID:"kandy@in.com"
  },
  {
    Name:"kandy",
    City:"Delhi",
    ContactNo:"1258488",
    MailID:"Sam@sam.com"
  },
  {
    Name:"Romeo",
    City:"Mew Delhi",
    ContactNo:"98568745",
    MailID:"Sam1@sam1.com"
  },
  {
    Name:"Kuldeep",
    City:"Noida",
    ContactNo:"82859726",
    MailID:"kandy@in.com"
  }
]

  Column:any=[]
  ColumnCount:number

  //Sort
  key: string = 'name'; //set default
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }
  //Sort

  p: number = 1;
  Col:any
  
  constructor() { 
    if(this.Data.length>0){
        this.Col=this.Data[0]
        for(var prop in this.Col) {
          console.log(prop);  
          this.Column.push(prop)
        }
    }
    this.ColumnCount=this.Column.length 
  }

  ngOnInit() {
  }
}
