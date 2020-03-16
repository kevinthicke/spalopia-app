import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { SpaServiceListContainer } from '../spa-service-list.container';
import { SpaService } from '@app-core/services/spa-service/spa-service.service';
import { SpaServiceSelectedService } from '@app-core/services/event-bus/spa-service-selected.service';
import { ListToolbarComponent } from '../../../components/list-toolbar/list-toolbar.component';
import { TimeTablePopupComponent } from '../../../components/time-table-popup/time-table-popup.component';
import { TimeTablePopupContainer } from '../../time-table-popup/time-table-popup.container';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@app-shared/shared.module';

describe('TimeTablePopupComponent', () => {

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
        fixture = TestBed.createComponent(SpaServiceListContainer);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});