import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgxBrokenImgDirective } from './ngx-broken-img.directive';

@Component({
    template: `
    <img class="card-img" src="http://www.sdf.com" ngxBrokenImg />`,
    standalone: false
})
class TestComponent {}

describe('NgxBrokenImgDirective', () => {
  let elements;
  let fixture;
  beforeEach(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [NgxBrokenImgDirective, TestComponent],
    }).createComponent(TestComponent);
    fixture.detectChanges();
    elements = fixture.debugElement.queryAll(By.directive(NgxBrokenImgDirective));
  });

  it('should create an instance', () => {
    const directive = new NgxBrokenImgDirective();
    expect(directive).toBeTruthy();
  });

  it('broken image should be replaced with placeholder', (done) => {
    setTimeout(() => {
      const src = elements[0].nativeElement.src;
      expect(src).toContain('data:image');
      done();
    }, 500);
  });
});
