import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearchatPage } from './crearchat.page';

describe('CrearchatPage', () => {
  let component: CrearchatPage;
  let fixture: ComponentFixture<CrearchatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearchatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearchatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
