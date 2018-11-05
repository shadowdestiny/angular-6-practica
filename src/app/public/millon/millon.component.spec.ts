import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MillonComponent } from './millon.component';

describe('MillonComponent', () => {
  let component: MillonComponent;
  let fixture: ComponentFixture<MillonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
