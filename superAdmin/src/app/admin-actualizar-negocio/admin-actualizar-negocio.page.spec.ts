import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminActualizarNegocioPage } from './admin-actualizar-negocio.page';

describe('AdminActualizarNegocioPage', () => {
  let component: AdminActualizarNegocioPage;
  let fixture: ComponentFixture<AdminActualizarNegocioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminActualizarNegocioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminActualizarNegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
