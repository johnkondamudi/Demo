import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanlinetChartComponent } from './canlinet-chart.component';

describe('CanlinetChartComponent', () => {
  let component: CanlinetChartComponent;
  let fixture: ComponentFixture<CanlinetChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanlinetChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanlinetChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
