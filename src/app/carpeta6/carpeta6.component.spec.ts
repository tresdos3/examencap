import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carpeta6Component } from './carpeta6.component';

describe('Carpeta6Component', () => {
  let component: Carpeta6Component;
  let fixture: ComponentFixture<Carpeta6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carpeta6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carpeta6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
