import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientMapgooglePage } from './client-mapgoogle.page';

describe('ClientMapgooglePage', () => {
  let component: ClientMapgooglePage;
  let fixture: ComponentFixture<ClientMapgooglePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientMapgooglePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientMapgooglePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
