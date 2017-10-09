import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carpeta9Component } from './carpeta9.component';

describe('Carpeta9Component', () => {
  let component: Carpeta9Component;
  let fixture: ComponentFixture<Carpeta9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carpeta9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carpeta9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
