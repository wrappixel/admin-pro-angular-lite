import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VisitGraphComponent } from './visit-graph.component';

describe('VisitGraphComponent', () => {
  let component: VisitGraphComponent;
  let fixture: ComponentFixture<VisitGraphComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisitGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
