import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { SharedModule } from '../../shared/shared.module';
import { ListToolbarComponent } from './components/list-toolbar/list-toolbar.component';
import { TimeTablePopupComponent } from './components/time-table-popup/time-table-popup.component';
import { SpaServiceListContainer } from './containers/spa-service-list/spa-service-list.container';
import { TimeTablePopupContainer } from './containers/time-table-popup/time-table-popup.container';
import { SpaServiceManagerComponent } from './spa-service-manager.component';


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
