import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsiteGraphComponent } from './website-graph.component';

describe('WebsiteGraphComponent', () => {
  let component: WebsiteGraphComponent;
  let fixture: ComponentFixture<WebsiteGraphComponent>;

  beforeEach(async(() => {
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
