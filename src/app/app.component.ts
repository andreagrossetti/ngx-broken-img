import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  cards: Array<any>;
  title = 'app';
  constructor() {
    this.cards = [{
      previewImg: 'http://www.google.com',
      title: 'Broken',
      description: 'This is what happens when a img is broken',
      update: 'Last updated 3 mins ago',
      ngx: false
    }, {
      previewImg: 'http://www.google.com',
      title: 'ngx-broken-img',
      description: 'This is ngx-broken-img default placeholder',
      update: 'Last updated 3 mins ago',
      ngx: true
    }, {
      previewImg: 'http://www.google.com',
      title: 'ngx-broken-img',
      description: 'This is ngx-broken-img with a custom placeholder',
      update: 'Last updated 3 mins ago',
      ngx: true,
      customPlaceholder: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM88x8AAp0BzdNtlUkAAAAASUVORK5CYII='
    }]
  }
}
