import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarComponent } from '../search-bar.component';
import { NgModel } from '@angular/forms';

describe('SearchBarComponent', () => {
  let component: SearchBarComponent;

  beforeEach(() => {
    component = new SearchBarComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should "searchValueEvent" emit the value passed in the arguments of "handleOnChange" correctly', () => {

    let searchValue = null;
    component.searchValueEvent.subscribe(t => searchValue = t);

    const ngModel = new NgModel(null, null, null, null);
    ngModel.control.setValue('search value')
    component.handleOnChange(ngModel);

    expect(searchValue).toBe('search value');

  });
});
