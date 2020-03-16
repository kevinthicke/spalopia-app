import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeTablePopupComponent } from '../time-table-popup.component';

describe('TimeTableComponent', () => {

  let component: TimeTablePopupComponent;
  let fixture: ComponentFixture<TimeTablePopupComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ TimeTablePopupComponent ]
    });

    fixture = TestBed.createComponent(TimeTablePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
