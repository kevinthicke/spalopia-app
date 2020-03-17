import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpaServiceManagerComponent } from './spa-service-manager.component';
import { SpaServiceListContainer } from './containers/spa-service-list/spa-service-list.container';
import { SharedModule } from '../../shared/shared.module';
import { ListToolbarComponent } from './components/list-toolbar/list-toolbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TimeTablePopupComponent } from './components/time-table-popup/time-table-popup.component';
import { TimeTablePopupContainer } from './containers/time-table-popup/time-table-popup.container';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [
    SpaServiceManagerComponent,
    SpaServiceListContainer,
    ListToolbarComponent,
    TimeTablePopupComponent,
    TimeTablePopupContainer
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserAnimationsModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    SpaServiceManagerComponent
  ]
})
export class SpaServiceManagerModule { }
