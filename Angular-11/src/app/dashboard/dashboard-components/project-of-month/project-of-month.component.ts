import { Component, OnInit } from '@angular/core';
import {Project,projects} from './project-data';

@Component({
  selector: 'app-project-of-month',
  templateUrl: './project-of-month.component.html',
  styleUrls: ['./project-of-month.component.css']
})
export class ProjectOfMonthComponent implements OnInit {

   projectOfMonth:Project[];

  constructor() {
    this.projectOfMonth=projects;
   }

  ngOnInit(): void {
  }

}
