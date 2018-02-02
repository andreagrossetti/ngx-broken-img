import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FixBrokenImgModule } from './modules/fix-broken-image/fix-broken-image.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FixBrokenImgModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
