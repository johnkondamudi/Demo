import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngxdonut',
  templateUrl: './ngxdonut.component.html',
  styleUrls: ['./ngxdonut.component.css']
})
export class NgxdonutComponent implements OnInit {

  constructor() { }

  chartdata: boolean = false;

  countryCount = [];
  countryData:any =   [
    {
      "name": "Germany",
      "value": 8940000
    },
    {
      "name": "USA",
      "value": 5000000
    },
    {
      "name": "France",
      "value": 7200000
    }
  ];
  ;
  //Chart
  view: any[] = [400, 400];
  showLegend = false;

  colorScheme = {
    domain: [ "#E6392F",
       "#FFAC0F",
       "#CFDCE6"]
  };

  title:{
    verticalAlign: "center",
      text: "123",
       fontColor: "#0D4774",
      fontWeight: "700",
      fontFamily: "Montserrat",
      fontSize: 30,

  }
  showLabels = true;
  explodeSlices = true;
  doughnut = false;
  ngOnInit() {
  }
  onSelect(event) {
    console.log(event);
  }


}
