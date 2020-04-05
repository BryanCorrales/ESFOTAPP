import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowprofilePage } from './showprofile.page';

describe('ShowprofilePage', () => {
  let component: ShowprofilePage;
  let fixture: ComponentFixture<ShowprofilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowprofilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowprofilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
