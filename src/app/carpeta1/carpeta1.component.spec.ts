import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carpeta1Component } from './carpeta1.component';

describe('Carpeta1Component', () => {
  let component: Carpeta1Component;
  let fixture: ComponentFixture<Carpeta1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carpeta1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carpeta1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
