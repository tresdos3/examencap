import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carpeta7Component } from './carpeta7.component';

describe('Carpeta7Component', () => {
  let component: Carpeta7Component;
  let fixture: ComponentFixture<Carpeta7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carpeta7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carpeta7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
