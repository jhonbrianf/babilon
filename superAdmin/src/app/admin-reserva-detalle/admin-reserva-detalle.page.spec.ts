import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReservaDetallePage } from './admin-reserva-detalle.page';

describe('AdminReservaDetallePage', () => {
  let component: AdminReservaDetallePage;
  let fixture: ComponentFixture<AdminReservaDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReservaDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReservaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
