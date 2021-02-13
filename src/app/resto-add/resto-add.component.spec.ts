/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RestoAddComponent } from './resto-add.component';

describe('RestoAddComponent', () => {
  let component: RestoAddComponent;
  let fixture: ComponentFixture<RestoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
