import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SpaServiceSelectedService } from '@app-core/services/event-bus/spa-service-selected.service';
import { SpaService } from '@app-core/services/spa-service/spa-service.service';
import { SharedModule } from '@app-shared/shared.module';
import { ListToolbarComponent } from '../../../components/list-toolbar/list-toolbar.component';
import { TimeTablePopupComponent } from '../../../components/time-table-popup/time-table-popup.component';
import { SpaServiceListContainer } from '../../spa-service-list/spa-service-list.container';
import { TimeTablePopupContainer } from '../time-table-popup.container';

 
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