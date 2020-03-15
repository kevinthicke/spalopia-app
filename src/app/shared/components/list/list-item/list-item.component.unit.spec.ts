/* import { ListItemComponent } from './list-item.component';


 describe('ListItemComponent', () => {
  let component: ListItemComponent;

  beforeEach(() => {
    component = new ListItemComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit a "buttonClickEvent" when handleClick is called', () => {
    
    let isButtonClickEventEmitted = false;
    component.buttonClickEvent.subscribe(() => isButtonClickEventEmitted = true);

    component.handleClick();

    expect(isButtonClickEventEmitted).toBeTruthy();
  });
});
 */