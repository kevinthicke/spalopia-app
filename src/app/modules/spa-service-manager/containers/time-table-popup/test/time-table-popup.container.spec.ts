import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';

import { TimeTablePopupContainer } from '../time-table-popup.container';
import { SpaServiceListContainer } from '../../spa-service-list/spa-service-list.container';
import { TimeTablePopupComponent } from '../../../components/time-table-popup/time-table-popup.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { SpaService } from 'src/app/core/services/spa-service/spa-service.service';
import { SpaServiceSelectedService } from '../../../../../core/services/event-bus/spa-service-selected.service';
import { ListToolbarComponent } from '../../../components/list-toolbar/list-toolbar.component';
import { of, Observable, empty } from 'rxjs';
import { By } from '@angular/platform-browser';
 
describe('TimeTablePopupComponent', () => {
  let component: TimeTablePopupContainer;
  let fixture: ComponentFixture<TimeTablePopupContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule
      ],
      declarations: [ 
        SpaServiceListContainer,
        TimeTablePopupContainer,
        TimeTablePopupComponent,
        ListToolbarComponent
      ],
      providers: [ 
        SpaService, 
        SpaServiceSelectedService 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeTablePopupContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});