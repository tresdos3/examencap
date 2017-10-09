import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carpeta5Component } from './carpeta5.component';

describe('Carpeta5Component', () => {
  let component: Carpeta5Component;
  let fixture: ComponentFixture<Carpeta5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carpeta5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carpeta5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
