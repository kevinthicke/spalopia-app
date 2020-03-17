import { AngularSvgIconModule } from 'angular-svg-icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';
import { ListItemComponent } from './components/list/list-item/list-item.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    ListComponent,
    ListItemComponent,
    SearchBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AngularSvgIconModule.forRoot()
  ],
  exports: [
    NavbarComponent,
    ListComponent,
    SearchBarComponent
  ]
})
export class SharedModule { }
