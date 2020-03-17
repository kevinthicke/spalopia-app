import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SpaServiceManagerModule } from './modules/spa-service-manager/spa-service-manager.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    SpaServiceManagerModule,
    HttpClientModule,
    SpaServiceManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
