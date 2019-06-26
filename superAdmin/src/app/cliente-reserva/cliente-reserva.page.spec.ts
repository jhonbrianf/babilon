import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteReservaPage } from './cliente-reserva.page';

describe('ClienteReservaPage', () => {
  let component: ClienteReservaPage;
  let fixture: ComponentFixture<ClienteReservaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteReservaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
