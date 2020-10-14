import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOfMonthComponent } from './project-of-month.component';

describe('ProjectOfMonthComponent', () => {
  let component: ProjectOfMonthComponent;
  let fixture: ComponentFixture<ProjectOfMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectOfMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectOfMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
