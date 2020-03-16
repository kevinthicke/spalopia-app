import { Component, Input, Output, EventEmitter } from "@angular/core";

export interface IListItem {
  id: number;
  header: string;
  body: string;
  extraInfo: string;
};

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.less' ]
})
export class ListComponent {

  @Input() items: IListItem[];
  @Input() buttonLabel: string;

  @Output() selectedItemEvent = new EventEmitter<number>();

  constructor() { }

  handleSelectedItem(itemId: number): void {
    this.selectedItemEvent.emit(itemId);
  };

}
