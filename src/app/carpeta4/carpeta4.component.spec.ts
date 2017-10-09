import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carpeta4Component } from './carpeta4.component';

describe('Carpeta4Component', () => {
  let component: Carpeta4Component;
  let fixture: ComponentFixture<Carpeta4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carpeta4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carpeta4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
