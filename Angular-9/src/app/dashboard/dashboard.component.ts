import { Component, AfterViewInit } from '@angular/core';
@Component({
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
    subtitle: string;
    constructor() {
        this.subtitle = 'This is some text within a card block.';
    }

    public lineChartData1: Array<any> = [{ data: [0, 150, 110, 240, 200, 200, 300, 200, 380, 300, 400, 380], label: 'Sales' }];

    public lineChartLabels1: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions1: any = {
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
    public lineChartColors1: Array<any> = [
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


    // Doughnut
    public doughnutChartLabels: string[] = ['Tablet', 'Desktop', 'Mobile', 'Other'];
    public doughnutChartOptions: any = {
        borderWidth: 1,
        maintainAspectRatio: false
    };
    public doughnutChartData: number[] = [30, 10, 40, 50];
    public doughnutChartType = 'doughnut';
    public doughnutChartLegend = false;

    public lineChartData: Array<any> = [{ data: [0, 5, 6, 8, 25, 9, 8, 24], label: 'Site A' }, { data: [0, 3, 1, 2, 8, 1, 5, 1], label: 'Site B' }];
    public lineChartLabels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8'];
    public lineChartOptions: any = {
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
    public lineChartColors: Array<any> = [
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
    ngAfterViewInit() { }
}
