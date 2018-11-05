import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMillonComponent } from './header-millon.component';

describe('HeaderMillonComponent', () => {
  let component: HeaderMillonComponent;
  let fixture: ComponentFixture<HeaderMillonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMillonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMillonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
