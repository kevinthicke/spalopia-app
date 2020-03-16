import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: [ './list-item.component.less' ]
})
export class ListItemComponent {

  @Input() headerText : string;
  @Input() bodyText   : string;
  @Input() extraInfo  : string;
  @Input() buttonText : string;
  @Input() buttonClass: string;

  @Output() buttonClickEvent = new EventEmitter<void>();

  handleClick(): void {
    this.buttonClickEvent.emit();
  }

}
