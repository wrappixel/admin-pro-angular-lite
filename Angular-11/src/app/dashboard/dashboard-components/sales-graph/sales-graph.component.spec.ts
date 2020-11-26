import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalesGraphComponent } from './sales-graph.component';

describe('SalesGraphComponent', () => {
  let component: SalesGraphComponent;
  let fixture: ComponentFixture<SalesGraphComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
