import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxBrokenImgModule } from 'projects/ngx-broken-img/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBrokenImgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
