<div align="center">
  <img src="https://raw.githubusercontent.com/andreagrossetti/ngx-broken-img/master/src/assets/example.jpg" width="300">
</div>


# ngx-broken-img

Angular 2+ directive to fix broken url in img.  
If image url returns 404 a placeholder is used to fill img's src.

## Install

```bash
npm install ngx-broken-img --save
```

## Setup

**step 1:** add FixBrokenImgModule to app NgModule

```typescript
import { CommonModule } from '@angular/common';
import { FixBrokenImgModule } from 'ngx-broken-img';

@NgModule({
  imports: [
    CommonModule,
    FixBrokenImgModule,
  ],
  bootstrap: [App],
  declarations: [App],
})
class MainModule {}
```

## Use

```html
<!-- Default placeholder -->
<img src="http://somebrokenurl" fixBrokenImage>

<!-- Custom base64 placeholder -->
<img src="http://somebrokenurl" fixBrokenImage="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM88x8AAp0BzdNtlUkAAAAASUVORK5CYII="> 
```
