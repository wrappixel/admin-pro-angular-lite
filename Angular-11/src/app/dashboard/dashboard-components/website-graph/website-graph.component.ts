import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-website-graph',
  templateUrl: './website-graph.component.html',
  styleUrls: ['./website-graph.component.css']
})
export class WebsiteGraphComponent implements OnInit {

  public lineChartData: Array<object> = [{ data: [0, 5, 6, 8, 25, 9, 8, 24], label: 'Site A' }, { data: [0, 3, 1, 2, 8, 1, 5, 1], label: 'Site B' }];
  public lineChartLabels: Array<string> = ['1', '2', '3', '4', '5', '6', '7', '8'];
  public lineChartOptions = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          gridLines: {
            color: 'rgba(120, 130, 140, 0.13)'
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            color: 'rgba(120, 130, 140, 0.13)'
          }
        }
      ]
    },
    responsive: true,
    maintainAspectRatio: false
  };
  public lineChartColors: Array<object> = [
    {
      // grey
      backgroundColor: 'rgba(6,215,156,0.1)',
      borderColor: 'rgba(6,215,156,1)',
      pointBackgroundColor: 'rgba(6,215,156,1)',
      pointBorderColor: '#fff',

      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(6,215,156,0.5)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(57,139,247,0.2)',
      borderColor: 'rgba(57,139,247,1)',
      pointBackgroundColor: 'rgba(57,139,247,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(57,139,247,0.5)'
    }
  ];
  public lineChartLegend = false;
  public lineChartType = 'line';

  constructor() { }

  ngOnInit(): void {
  }

}
