import { SearchBarComponent } from '../search-bar.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

describe('NavbarComponent', () => {

    let component: SearchBarComponent;
    let fixture: ComponentFixture<SearchBarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                SearchBarComponent
            ],
            imports: [
                FormsModule
            ]
        });

        fixture = TestBed.createComponent(SearchBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});