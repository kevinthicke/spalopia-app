import { TimeTablePopupComponent } from '../time-table-popup.component';

describe('TimeTablePopupComponent', () => {
    
    let component: TimeTablePopupComponent;

    beforeEach(() => {
        component = new TimeTablePopupComponent();
    });
    
    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set "schedule" as null when closePopup is called', () => {
        component.closePopup();
        expect(component.schedule).toBeNull();
    });

})