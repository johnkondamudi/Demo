import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanDonutChartComponent } from './can-donut-chart.component';

describe('CanDonutChartComponent', () => {
  let component: CanDonutChartComponent;
  let fixture: ComponentFixture<CanDonutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanDonutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanDonutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
