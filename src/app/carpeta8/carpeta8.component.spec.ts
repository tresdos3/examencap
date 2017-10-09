import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carpeta8Component } from './carpeta8.component';

describe('Carpeta8Component', () => {
  let component: Carpeta8Component;
  let fixture: ComponentFixture<Carpeta8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carpeta8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carpeta8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
