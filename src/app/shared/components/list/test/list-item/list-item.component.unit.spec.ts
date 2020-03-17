import { ListItemComponent } from '../../list-item/list-item.component';

describe('ListItemComponent', () => {

  let component: ListItemComponent;

  beforeEach(() => {
    component = new ListItemComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should emit a "buttonClickEvent" when handleClick is called', () => {

    let isButtonClickEventEmitted = false;
    component.buttonClickEvent.subscribe(() => isButtonClickEventEmitted = true);

    // ...
    expect(isButtonClickEventEmitted).toBeTruthy();
  
  });

});
