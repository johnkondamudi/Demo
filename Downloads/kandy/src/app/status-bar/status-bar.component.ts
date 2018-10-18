import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {

  constructor() { }

  DivColor:string;
  DivText:string
  Element1:HTMLElement
  Element2:HTMLElement

  Data:any=[
      {S:10,
        W:20,
        F:30,
        ID:1
      },
      {S:10,
        W:120,
        F:130,
        ID:2
      },
      {S:210,
        W:220,
        F:230,
        ID:3
      }]

  ngOnInit() {
  }

  DivClicked(IDs,Id){
    const myElement: HTMLElement  = document.getElementById(IDs+'_'+Id);
    this.ChangeStatus(myElement,IDs,Id)
  }

  ChangeStatus(myElement,IDs,Id){
    if(Id==1){
      this.DivColor=myElement.firstChild.className;
      this.Element1= document.getElementById(IDs+'_2');
      this.Element2= document.getElementById(IDs+'_3');
      this.Reset( this.Element1, this.Element2,Id);
  
      if(this.DivColor=="Success"){
        myElement.firstChild.setAttribute("Class","SuccessC")
        myElement.firstChild.nextElementSibling.nextElementSibling.setAttribute("Class","FlotWidthC")
      }
      else{
        myElement.firstChild.setAttribute("Class","Success")
        myElement.firstChild.nextElementSibling.nextElementSibling.setAttribute("Class","FlotWidth")
      }
    }

    if(Id==2){
      this.DivColor=myElement.firstChild.className;
      this.Element1= document.getElementById(IDs+'_1');
      this.Element2= document.getElementById(IDs+'_3');
      this.Reset( this.Element1, this.Element2,Id);

      if(this.DivColor=="Warning"){
        myElement.firstChild.setAttribute("Class","WarningC")
        myElement.firstChild.nextElementSibling.nextElementSibling.setAttribute("Class","FlotWidthC")
      }
      else{
        myElement.firstChild.setAttribute("Class","Warning")
        myElement.firstChild.nextElementSibling.nextElementSibling.setAttribute("Class","FlotWidth")
      }
    }
    
    
    if(Id==3)
    {
      this.DivColor=myElement.firstChild.className;
      this.Element1= document.getElementById(IDs+'_1');
      this.Element2= document.getElementById(IDs+'_2');
      this.Reset( this.Element1, this.Element2,Id);
      
      if(this.DivColor=="Failed"){
        myElement.firstChild.setAttribute("Class","FailedC")
        myElement.firstChild.nextElementSibling.nextElementSibling.setAttribute("Class","FlotWidthC")
      }
      else{
        myElement.firstChild.setAttribute("Class","Failed")
        myElement.firstChild.nextElementSibling.nextElementSibling.setAttribute("Class","FlotWidth")
      }
    }
  }

  Reset(myElement1,myElement2,Id){
    if(Id==1){
      myElement1.firstChild.setAttribute("Class","Warning")
      myElement1.firstChild.nextElementSibling.nextElementSibling.setAttribute("Class","FlotWidth")

      myElement2.firstChild.setAttribute("Class","Failed")
      myElement2.firstChild.nextElementSibling.nextElementSibling.setAttribute("Class","FlotWidth")
    }

    if(Id==2){
      myElement1.firstChild.setAttribute("Class","Success")
      myElement1.firstChild.nextElementSibling.nextElementSibling.setAttribute("Class","FlotWidth")

      myElement2.firstChild.setAttribute("Class","Failed")
      myElement2.firstChild.nextElementSibling.nextElementSibling.setAttribute("Class","FlotWidth")
    }

    if(Id==3){
      myElement1.firstChild.setAttribute("Class","Success")
      myElement1.firstChild.nextElementSibling.nextElementSibling.setAttribute("Class","FlotWidth")

      myElement2.firstChild.setAttribute("Class","Warning")
      myElement2.firstChild.nextElementSibling.nextElementSibling.setAttribute("Class","FlotWidth")
    }
  }
}
