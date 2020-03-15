import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { OrderType } from 'src/app/core/services/spa-service/spa-service';

@Component({
  selector: 'app-list-toolbar',
  templateUrl: './list-toolbar.component.html'
})
export class ListToolbarComponent {

  @Output() orderMethodEvent = new EventEmitter<OrderType>();
  @Output() searchValueEvent = new EventEmitter<string>();

  handleSearchValue(value: string) {
    this.searchValueEvent.emit(value);
  }

  handleOrderMethod(orderMethod: OrderType) {
    this.orderMethodEvent.emit(orderMethod)
  }

};
