import { ListToolbarComponent } from '../list-toolbar.component';
import { OrderType } from './../../../../../core/services/spa-service/spa-service.service';

describe('ListToolbarComponent', () => {

    let component: ListToolbarComponent;

    beforeEach(() => {
        component = new ListToolbarComponent();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should emit a "searchValueEvent" when "handleSearchValue" is called', () => {
        
        let searchValueResult: string;
        component.searchValueEvent.subscribe(value => searchValueResult = value);
        
        component.handleSearchValue('value');
        expect(searchValueResult).toBe('value');
    
    });

    it('should emit a "orderMethodEvent" when "handleOrderMethod" is called', () => {
        
        let orderTypeResult: string;
        component.orderMethodEvent.subscribe(orderType => orderTypeResult = orderType);
        
        component.handleOrderMethod(OrderType.ASC);
        expect(orderTypeResult).toBe('asc');
    
    });

});