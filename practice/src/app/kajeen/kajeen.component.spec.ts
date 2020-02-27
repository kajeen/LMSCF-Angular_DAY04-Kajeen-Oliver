import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KajeenComponent } from './kajeen.component';

describe('KajeenComponent', () => {
  let component: KajeenComponent;
  let fixture: ComponentFixture<KajeenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KajeenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KajeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
