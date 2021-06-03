import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit-graph',
  templateUrl: './visit-graph.component.html',
  styleUrls: ['./visit-graph.component.css']
})
export class VisitGraphComponent implements OnInit {

    // Doughnut
    public doughnutChartLabels: string[] = ['Tablet', 'Desktop', 'Mobile', 'Other'];
    public doughnutChartOptions = {
      borderWidth: 1,
      maintainAspectRatio: false
    };
    public doughnutChartData: number[] = [30, 10, 40, 50];
    public doughnutChartType = 'doughnut';
    public doughnutChartLegend = false;

  constructor() { }

  ngOnInit(): void {
  }

}
