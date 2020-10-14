import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales-graph',
  templateUrl: './sales-graph.component.html',
  styleUrls: ['./sales-graph.component.css']
})
export class SalesGraphComponent implements OnInit {

  public lineChartData1: Array<object> = [{ data: [0, 150, 110, 240, 200, 200, 300, 200, 380, 300, 400, 380], label: 'Sales' }];

  public lineChartLabels1: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions1 = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        }
      ]
    },
    lineTension: 10,
    responsive: true,
    maintainAspectRatio: false,
    elements: { line: { tension: 0 } }
  };
  public lineChartColors1: Array<object> = [
    {
      // grey
      backgroundColor: 'rgba(6,215,156,0.0)',
      borderColor: 'rgba(57,139,247,1)',
      pointBackgroundColor: 'rgba(57,139,247,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(57,139,247,0.5)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(57,139,247,0.0)',
      borderColor: 'rgba(57,139,247,1)',
      pointBackgroundColor: 'rgba(57,139,247,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(57,139,247,0.5)'
    }
  ];
  public lineChartLegend1 = false;
  public lineChartType1 = 'line';

  constructor() { }

  ngOnInit(): void {
  }

}
