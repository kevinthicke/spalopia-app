import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListToolbarComponent } from '../list-toolbar.component';
import { SharedModule } from '../../../../../shared/shared.module';

describe('ListToolbarComponent', () => {

  let component: ListToolbarComponent;
  let fixture: ComponentFixture<ListToolbarComponent>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations: [ 
        ListToolbarComponent 
      ],
      imports: [
        SharedModule
      ]
    });

    fixture = TestBed.createComponent(ListToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});
