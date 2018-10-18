import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JWtTokenComponent } from './jwt-token.component';

describe('JWtTokenComponent', () => {
  let component: JWtTokenComponent;
  let fixture: ComponentFixture<JWtTokenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JWtTokenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JWtTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
