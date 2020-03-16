import { ListItemComponent } from '../list-item/list-item.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from '../list.component';

describe('ListItemComponent', () => {

    let fixture: ComponentFixture<ListItemComponent>;
    let component: ListItemComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                ListComponent,
                ListItemComponent
            ]
        });

        fixture = TestBed.createComponent(ListItemComponent);
        component = fixture.componentInstance;

    });

    describe('render', () => {

        it('should create', () => {
            expect(component).toBeTruthy();
        });

    })
});