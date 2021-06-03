import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { WebsiteGraphComponent } from './website-graph.component';

describe('WebsiteGraphComponent', () => {
  let component: WebsiteGraphComponent;
  let fixture: ComponentFixture<WebsiteGraphComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WebsiteGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsiteGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
