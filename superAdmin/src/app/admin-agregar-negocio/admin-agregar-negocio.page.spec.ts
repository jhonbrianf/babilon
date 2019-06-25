import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAgregarNegocioPage } from './admin-agregar-negocio.page';

describe('AdminAgregarNegocioPage', () => {
  let component: AdminAgregarNegocioPage;
  let fixture: ComponentFixture<AdminAgregarNegocioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminAgregarNegocioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAgregarNegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
