import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Carpeta3Component } from './carpeta3.component';

describe('Carpeta3Component', () => {
  let component: Carpeta3Component;
  let fixture: ComponentFixture<Carpeta3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Carpeta3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Carpeta3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
