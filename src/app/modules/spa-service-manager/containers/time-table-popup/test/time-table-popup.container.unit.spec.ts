import { TimeTablePopupComponent } from '../../../components/time-table-popup/time-table-popup.component';
import { TimeTablePopupContainer } from '../time-table-popup.container';
import { SpaService } from 'src/app/core/services/spa-service/spa-service.service';
import { SpaServiceSelectedService, ISpaServiceEvent } from '../../../../../core/services/event-bus/spa-service-selected.service';
import { ScheduleService } from '../../../../../core/services/schedule/schedule.service';
import { of, empty } from 'rxjs';
import { IScheduleModel } from '../../../../../core/models/schedule.model';

const scheduleMock: IScheduleModel = {
    id: 0,
    spaServiceMini: { id: 1, name: null },
    data: [
        {
            date: 'date',
            ranges: [
                { start: 'start', end: 'end' }
            ]
        }
    ]
};

const spaServiceEventMock: ISpaServiceEvent = {
    existsSelected: true,
    spaService: { id: 1, name: 'name' }
};

describe('TimeTablePopupContainer', () => {

    let component: TimeTablePopupContainer;
    let scheduleService: ScheduleService;
    let spaServiceSelectedService: SpaServiceSelectedService;

    beforeEach(() => {
        scheduleService = new ScheduleService(null);
        spaServiceSelectedService = new SpaServiceSelectedService();
        component = new TimeTablePopupContainer(spaServiceSelectedService, scheduleService);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should "getSpaServiceSelectedId()" returns the spaService.id form "spaServiceSelectedService"', (done) => {

        spaServiceSelectedService.spaServiceSelectedChanged$ = of<ISpaServiceEvent>(spaServiceEventMock);

        component.getSpaServiceSelectedId().subscribe(id => {
            expect(id).toEqual(1);
            done();
        });

    });

    it('should "retrieveSchedule" returns the scheduleModel form "scheduleService" when "spaServiceSelectedId$" is passed', (done) => {

        spyOn(scheduleService, 'getScheduleBySpaServiceId').and.callFake(() => {
            return of<IScheduleModel>(scheduleMock);
        });
        
        spaServiceSelectedService.spaServiceSelectedChanged$ = of<ISpaServiceEvent>(spaServiceEventMock);

        const spaServiceSelectedId$ = of(1);

        const scheduleExpected: IScheduleModel = { ...scheduleMock };
        scheduleExpected.spaServiceMini.name = 'name';

        component.retrieveSchedule(spaServiceSelectedId$).subscribe(schedule => {
            expect(schedule).toEqual(scheduleExpected);
            done();
        });

    });

    it('should set "schedule$" with the retrievedSchedule when "ngOnInit" is called', (done) => {
        
        spyOn(component, 'retrieveSchedule').and.returnValue(of(scheduleMock));
        component.ngOnInit();

        const scheduleExpected = { ... scheduleMock };
        component.schedule$.subscribe(schedule => {
            expect(schedule).toEqual(scheduleExpected);
            done();
        })
    });

});