import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDetallesNegocioPage } from './cliente-detalles-negocio.page';

describe('ClienteDetallesNegocioPage', () => {
  let component: ClienteDetallesNegocioPage;
  let fixture: ComponentFixture<ClienteDetallesNegocioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteDetallesNegocioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteDetallesNegocioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
