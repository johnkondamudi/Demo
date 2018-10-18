import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
import * as CanvasJS from './../canvasjs.min';
@Component({
  selector: 'app-canlinet-chart',
  templateUrl: './canlinet-chart.component.html',
  styleUrls: ['./canlinet-chart.component.css']
})
export class CanlinetChartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let dataPoints = [
			{ y: 450 },
			{ y: 414},
			{ y: 520, indexLabel: "highest",markerColor: "red", markerType: "triangle" },
			{ y: 460 },
			{ y: 450 },
			{ y: 500 },
			{ y: 480 },
			{ y: 480 },
			{ y: 410 , indexLabel: "lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
			{ y: 500 },
			{ y: 480 },
			{ y: 510 }
		];
    let dpsLength = 0;
    let chart = new CanvasJS.Chart("chartContainer",{
      //exportEnabled: true,
      title:{
        text:"Live Chart with Data-Points from External JSON"
      },
      data: [{
        type: "line",
        dataPoints : dataPoints,
      }]
    });
    
    // $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=25&length=20&type=json&callback=?", function(data) {  
    //   $.each(data, function(key, value){
    //     dataPoints.push({x: value[0], y: parseInt(value[1])});
    //   });
    //   dpsLength = dataPoints.length;
    //   chart.render();
    //   updateChart();
    // });
    // function updateChart() {	
    // $.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=" + (dpsLength + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json&callback=?", function(data) {
    //   $.each(data, function(key, value) {
    //     dataPoints.push({
    //     x: parseInt(value[0]),
    //     y: parseInt(value[1])
    //     });
    //     dpsLength++;
    //   });
      
    //   if (dataPoints.length >  20 ) {
    //         dataPoints.shift();				
    //       }
    //   chart.render();
    //   setTimeout(function(){updateChart()}, 1000);
    // });
    //   }

      chart.render();
    }
  }
