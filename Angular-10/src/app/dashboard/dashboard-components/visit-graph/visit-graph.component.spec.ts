import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitGraphComponent } from './visit-graph.component';

describe('VisitGraphComponent', () => {
  let component: VisitGraphComponent;
  let fixture: ComponentFixture<VisitGraphComponent>;

  beforeEach(async(() => {
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
