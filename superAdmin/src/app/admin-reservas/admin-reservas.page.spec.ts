import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReservasPage } from './admin-reservas.page';

describe('AdminReservasPage', () => {
  let component: AdminReservasPage;
  let fixture: ComponentFixture<AdminReservasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminReservasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
