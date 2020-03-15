import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaServiceListContainer } from './spa-service-list.container';
import { HttpClientModule } from '@angular/common/http';
import { SpaServiceSelectedService } from '../../../../core/services/event-bus/spa-service-selected.service';

import { of } from 'rxjs';
import { ListToolbarComponent } from '../../components/list-toolbar/list-toolbar.component';
import { TimeTablePopupContainer } from '../time-table-popup/time-table-popup.container';
import { TimeTablePopupComponent } from '../../components/time-table-popup/time-table-popup.component';
import { SharedModule } from '../../../../shared/shared.module';
import { adaptToListItemArray } from '../../utils/adapt-to-list-item/adapt-to-list-item';
import { doesNotThrow } from 'assert';
import { toArray } from 'rxjs/operators';
import { SpaService } from 'src/app/core/services/spa-service/spa-service.service';

const spaServicesMocked = [
  {
    id: 1,
    name: "name 1",
    description: "description 1",
    price: 3
  },
  {
    id: 2,
    name: "name 2",
    description: "description 2",
    price: 2
  },
  {
    id: 3,
    name: "name 3",
    description: "description 3",
    price: 1
  },
];

const spaServicesSortedAscMocked = [
  {
    id: 3,
    name: "name 3",
    description: "description 3",
    price: 1
  },
  {
    id: 2,
    name: "name 2",
    description: "description 2",
    price: 2
  },
  {
    id: 1,
    name: "name 1",
    description: "description 1",
    price: 3
  },
]

describe('SpaServiceListComponent', () => {
  let component: SpaServiceListContainer;
  let fixture: ComponentFixture<SpaServiceListContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        HttpClientModule
      ],
      declarations: [ 
        SpaServiceListContainer,
        ListToolbarComponent,
        TimeTablePopupContainer,
        TimeTablePopupComponent
      ],
      providers: [ 
        SpaService, 
        SpaServiceSelectedService 
      ]
    })
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaServiceListContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should load all spa services from server', (done) => {

    let spaService = TestBed.get(SpaService);
    spyOn(spaService, 'getAll').and.returnValue(of(spaServicesMocked));
    
    component.ngOnInit();
    fixture.detectChanges();


    component.spaServices$.pipe(toArray()).subscribe(spaServices => {
      expect(spaServices).toBeTruthy();
      done();
    });

  });

  xit('should load all spa services sorted ASC from server', () => {

    let spaService = TestBed.get(SpaService);
    spyOn(spaService, 'getSortedBy').and.returnValue(() => of(spaServicesSortedAscMocked));
    
    fixture.detectChanges();

    component.spaServices$.subscribe(spaServices => {
      expect(spaServices).toEqual(adaptToListItemArray(null));
    });

  });
  
});
