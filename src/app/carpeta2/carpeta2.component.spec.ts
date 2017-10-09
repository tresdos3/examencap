import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carpeta2Component } from './carpeta2.component';

describe('Carpeta2Component', () => {
  let component: Carpeta2Component;
  let fixture: ComponentFixture<Carpeta2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carpeta2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carpeta2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
