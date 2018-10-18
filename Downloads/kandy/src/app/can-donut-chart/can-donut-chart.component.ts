import { Component, OnInit, OnChanges } from '@angular/core';
import * as CanvasJS from './../canvasjs.min'
@Component({
  selector: 'app-can-donut-chart',
  templateUrl: './can-donut-chart.component.html',
  styleUrls: ['./can-donut-chart.component.css']
})
export class CanDonutChartComponent implements OnInit,OnChanges {
//https://canvasjs.com/html5-javascript-doughnut-chart/

  chartId:string="kandydeol"
   chart:CanvasJS
constructor() { 
  this.chartId="kandydeol"
  const div = document.createElement('div')
  div.innerHTML = '<h3>Hello there</h3>'
  div.id="kandydeol1"
  
  this.myElement = div.outerHTML;
 }
ngOnChanges()
{
  this.chartId="kandydeol"

  }
  myElement:any
  ngOnInit() {
    // let myElement: HTMLElement  = document.getElementById("kandydeol");
    // alert(myElement)
 
    

    this.chartId="kandydeol"
    
    this.c()
  //   CanvasJS.addColorSet("customColorSet",
  //   [//colorSet Array
  //   "#E6392F",
  //   "#FFAC0F",
  //   "#CFDCE6",
    
  //  ]); 
  //this.assignDiv(this.chartId)
  
   
  }
  assignDiv(options){
    {
      const myElement: HTMLElement  = document.getElementById("kandydeol");
      var thiselem = document.createElement("div");
        thiselem.id = options+'_1';
        thiselem.style.height = "33vH";
        thiselem.style.width = "100%";
        document.body.appendChild(thiselem);
        options.chartContainer = thiselem.id;
     }
     return options;//.chartContainer;
  }
  c()
  {this.chart = new CanvasJS.Chart(this.chartId, {
    theme: "light2",
    animationEnabled: true,
    //colorSet:  "customColorSet",
    //exportEnabled: true,
    title:{
      verticalAlign: "center",
        text: "123",
         fontColor: "#0D4774",
        fontWeight: "700",
        fontFamily: "Montserrat",
        fontSize: 30,
  
    },
  
    data: [{
      type: "doughnut",
      //showInLegend: true,
      // toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
      //indexLabel: "{name} - #percent%",
      dataPoints: [
        { y: 30, name: "warning" },
        { y: 12, name: "Failed" },
         { y: 450, name: "" },
        
      ],
      
    }]
  });
  
  
  this.chart.render();}
}