import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxdonutComponent } from './ngxdonut.component';

describe('NgxdonutComponent', () => {
  let component: NgxdonutComponent;
  let fixture: ComponentFixture<NgxdonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxdonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxdonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
