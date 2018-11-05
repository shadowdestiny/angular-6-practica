import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMillonComponent } from './footer-millon.component';

describe('FooterMillonComponent', () => {
  let component: FooterMillonComponent;
  let fixture: ComponentFixture<FooterMillonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMillonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
