import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent {
  
  @Output() searchValueEvent = new EventEmitter<string>();
  
  handleOnChange(ngModel: NgModel) {
    this.searchValueEvent.emit(ngModel.value);
  }
}
