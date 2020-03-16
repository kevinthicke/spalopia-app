import { SpaServiceListContainer } from '../spa-service-list.container';
import { SpaServiceSelectedService } from '../../../../../core/services/event-bus/spa-service-selected.service';
import { SpaService } from 'src/app/core/services/spa-service/spa-service.service';
import { ISpaServiceModel } from '../../../../../core/models/spa-service.model';
import { of } from 'rxjs';
import { IListItem } from '../../../../../shared/components/list/list.component';


const spaServiceMock1: ISpaServiceModel = {
    id: 1, 
    name: 'name - 1',
    description: 'description - 1',
    price: 2,
};

const spaServiceMock2: ISpaServiceModel = {
    id: 2, 
    name: 'name - 2',
    description: 'description - 2',
    price: 3,
};

const spaServiceMock3: ISpaServiceModel = {
    id: 3, 
    name: 'name - 3',
    description: 'description - 3',
    price: 1,
};

const spaServiceListItem1: IListItem = {
    id: 1, 
    header: 'name - 1',
    body: 'description - 1',
    extraInfo: '2$'
};

const spaServiceListItem2: IListItem = {
    id: 2, 
    header: 'name - 2',
    body: 'description - 2',
    extraInfo: '3$'
};
const spaServiceListItem3: IListItem = {
    id: 3, 
    header: 'name - 3',
    body: 'description - 3',
    extraInfo: '1$'
};

describe('SpaServiceListContainer', () => {

    let component: SpaServiceListContainer;
    let spaService: SpaService;
    let spaServiceSelectedService: SpaServiceSelectedService;

    beforeEach(() => {

        spaService = new SpaService(null);
        spaServiceSelectedService = new SpaServiceSelectedService();

        component = new SpaServiceListContainer(
            spaService,
            spaServiceSelectedService
        );

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('when "getSpaService" is called', () => {

        it('should returns an observable of all spa services when "totalSpaServices$" emits a value', (done) => {
            
            component.totalSpaServices$.next();
            spyOn(spaService, 'getAll').and.returnValue(
                of([ spaServiceMock1, spaServiceMock2, spaServiceMock3])
            );


            component.getSpaService().subscribe(spaServices => {
                expect(spaServices).toEqual(
                    [ spaServiceListItem1, spaServiceListItem2, spaServiceListItem3 ]
                );
                done();
            });

        });

        xit('should returns an observable of filtered spa services when "spaServicesFiltered$" emits a value', () => {});
        xit('should returns an observable of sorted spa services when and "sortSpaServices$" emits a value', () => {});

    });

    describe('when "getSpaServiceSelectionSubscription" is called with spaServices$',  () => {
        
        xit('should call "selectSpaService" of "spaServiceSelectedService" with the SpaServiceMinized', () => {});
        xit('should return correct subscription', () => {})
    
    });

    describe('when "ngOnInit" is called', () => {

        xit('should set "spaServices$"', () => {});
        xit('should assing "getSpaServiceSelectionSubscription" to subSink', () => {});

    });

    describe('when "ngOnDestroy" is called', () => {

        xit('should unsubscribe to all subscriptions', () => {});

    })

});