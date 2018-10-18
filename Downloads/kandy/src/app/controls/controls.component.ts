import { Component, OnInit } from '@angular/core';
import {DropdownModule} from 'primeng/dropdown';
import { SelectItem } from 'primeng/components/common/selectitem';
import {MessageService} from 'primeng/api';


interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.css'],
  providers: [MessageService]
})

export class ControlsComponent implements OnInit {

Data:any=[
  {
    Name:"kandy1",
    ID:1
  },
  {
    Name:"kandy2",
    ID:2
  },
  {
    Name:"kandy3",
    ID:3
  }
]

  cities1: SelectItem[];
    
  cities2: City[];

  selectedCity1: City;
  
  selectedCity2: City;

  constructor( private messageService: MessageService) {
      //SelectItem API with label-value pairs
      this.cities1 = [
          {label:'Select City', value:null},
          {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
          {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
          {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
          {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
          {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
      ];
      
      //An array of cities
      this.cities2 = [
          {name: 'New York', code: 'NY'},
          {name: 'Rome', code: 'RM'},
          {name: 'London', code: 'LDN'},
          {name: 'Istanbul', code: 'IST'},
          {name: 'Paris', code: 'PRS'}
      ];
  }

  ngOnInit() {
  }
  Change(event)
  {
    alert(event.value.id)
  }



  showConfirm() {
    //this.messageService.clear();
    this.messageService.add({key: 'c', sticky: true, severity:'warn', summary:'Are you sure?', detail:'Confirm to proceed'});
}

showMultiple() {
    this.messageService.addAll([
        {severity:'info', summary:'Message 1', detail:'PrimeNG rocks'},
        {severity:'info', summary:'Message 2', detail:'PrimeUI rocks'},
        {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
    ]);
}

onConfirm() {
  alert('c')
  this.messageService.clear('c');
}

onReject() {
  alert('r')
    this.messageService.clear('c');
}




}
