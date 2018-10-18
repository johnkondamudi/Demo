import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanBarComponent } from './can-ar.component';

describe('CanArComponent', () => {
  let component: CanBarComponent;
  let fixture: ComponentFixture<CanBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
