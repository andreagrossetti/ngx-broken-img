
# ngx-broken-img
[![npm](https://badge.fury.io/js/ngx-broken-img.svg)](https://www.npmjs.org/package/ngx-broken-img)

Angular directive to fix broken url in img.  
If image url returns 404 a placeholder is used to fill img's src.
<div align="center">
  <img src="https://raw.githubusercontent.com/andreagrossetti/ngx-broken-img/master/projects/ngx-broken-img/src/assets/example.jpg" width="300">
</div>

## Demo
https://stackblitz.com/edit/ngx-broken-img

## Install

### npm
```bash
npm install ngx-broken-img --save
```
### yarn
```bash
yarn add ngx-broken-img
```

## Setup

**step 1:** add NgxBrokenImgModule to app NgModule

```typescript
import { CommonModule } from '@angular/common';
import { NgxBrokenImgModule } from 'ngx-broken-img';

@NgModule({
  imports: [
    CommonModule,
    NgxBrokenImgModule,
  ],
  bootstrap: [App],
  declarations: [App],
})
class MainModule {}
```

## Use

```html
<!-- Default placeholder -->
<img src="http://somebrokenurl" ngxBrokenImage>

<!-- Custom base64 placeholder -->
<img src="http://somebrokenurl" ngxBrokenImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM88x8AAp0BzdNtlUkAAAAASUVORK5CYII="> 
```
