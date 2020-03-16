import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ListItemComponent } from '../../list-item/list-item.component';

describe('ListItemComponent', () => {

    let fixture: ComponentFixture<ListItemComponent>;
    let component: ListItemComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ListItemComponent]
        });

        fixture = TestBed.createComponent(ListItemComponent);
        component = fixture.componentInstance;

    });

    describe('render', () => {

        it('should create', () => {
            expect(component).toBeTruthy();
        });

        it('Should render "headerText" ', () => {

            component.headerText = 'header text';
            fixture.detectChanges();

            const debugElement = fixture.debugElement.query(By.css('#header-text'));
            const element = debugElement.nativeElement as HTMLElement;

            expect(element.innerText).toBe('header text');
        });

        it('Should render "extraInfo" ', () => {

            component.extraInfo = 'extra-info';
            fixture.detectChanges();

            const debugElement = fixture.debugElement.query(By.css('#extra-info'));
            const element = debugElement.nativeElement as HTMLElement;

            expect(element.innerText).toContain('extra-info');
        });

        it('Should render "buttonText" ', () => {

            component.buttonText = 'button text';
            fixture.detectChanges();

            const debugElement = fixture.debugElement.query(By.css('#button'));
            const element = debugElement.nativeElement as HTMLElement;

            expect(element.innerText).toBe('button text');
        });

        it('Should render "bodyText" ', () => {

            component.bodyText = 'body text';
            fixture.detectChanges();

            const debugElement = fixture.debugElement.query(By.css('#body-text'));
            const element = debugElement.nativeElement as HTMLElement;

            expect(element.innerText).toBe('body text');
            
        });

        it('Should has the correct button class', () => {

            component.buttonClass = 'button-class';
            fixture.detectChanges();

            const debugElement = fixture.debugElement.query(By.css('#button'));
            const element = debugElement.nativeElement as HTMLElement;

            expect(element.classList).toContain('button-class');

        });
    });

    describe('functionality', () => {
        it('should call "handleClick" when #button is clicked', () => {

            spyOn(component, 'handleClick');
            const debugElement = fixture.debugElement.query(By.css('#button'));
            const element = debugElement.nativeElement as HTMLElement;

            element.click()

            expect(component.handleClick).toHaveBeenCalled();

        })
    })


}); 