import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNegociosPage } from './admin-negocios.page';

describe('AdminNegociosPage', () => {
  let component: AdminNegociosPage;
  let fixture: ComponentFixture<AdminNegociosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminNegociosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNegociosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
