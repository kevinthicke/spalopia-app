import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'
import { trigger, transition, style, animate, state } from '@angular/animations';
import { slideInOut } from '../../../animations/slide-in-out.animation';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: [ './list-item.component.less' ],
  animations: [ slideInOut(200) ]
})
export class ListItemComponent {

  @Input() headerText : string;
  @Input() bodyText   : string;
  @Input() extraInfo  : string;
  @Input() buttonText : string;
  @Input() buttonClass: string;

  @Output() buttonClickEvent = new EventEmitter<void>();
  showCardBody = false;

  handleClick(): void {
    this.buttonClickEvent.emit();
  }

  switchShowCardBody(): void  {
    this.showCardBody = !this.showCardBody;
  }

}
