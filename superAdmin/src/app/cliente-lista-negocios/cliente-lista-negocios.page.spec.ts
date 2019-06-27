import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteListaNegociosPage } from './cliente-lista-negocios.page';

describe('ClienteListaNegociosPage', () => {
  let component: ClienteListaNegociosPage;
  let fixture: ComponentFixture<ClienteListaNegociosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteListaNegociosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteListaNegociosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
