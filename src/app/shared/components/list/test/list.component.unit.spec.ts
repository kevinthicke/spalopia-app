import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from '../list.component';

describe('ListComponent', () => {

  let component: ListComponent;

  beforeEach(() => {
    component = new ListComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit the selected item id event when "handleSelectedItem" is called correctly', () => {
    
    let itemId = null;
    component.selectedItemEvent.subscribe(id => itemId = id);

    const mockItemId = 1;
    component.handleSelectedItem(mockItemId);

    expect(itemId).toBe(1);

  });
  
});
