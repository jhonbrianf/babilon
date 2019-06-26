import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListaReservasPage } from './cliente-lista-reservas.page';

describe('ClienteListaReservasPage', () => {
  let component: ClienteListaReservasPage;
  let fixture: ComponentFixture<ClienteListaReservasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteListaReservasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteListaReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
