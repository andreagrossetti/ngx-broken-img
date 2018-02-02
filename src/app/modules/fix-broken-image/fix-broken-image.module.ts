import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FixBrokenImgDirective } from './fix-broken-image.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FixBrokenImgDirective
  ],
  exports: [
    FixBrokenImgDirective
  ]
})
export class FixBrokenImgModule { }
