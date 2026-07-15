import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgxBrokenImgDirective } from './ngx-broken-img.directive';

@Component({
    template: `
    <img class="card-img" src="http://www.sdf.com" ngxBrokenImg />`,
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
class TestComponent {}

describe('NgxBrokenImgDirective', () => {
  let elements: DebugElement[];
  let fixture: ComponentFixture<TestComponent>;
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

  it('broken image should be replaced with placeholder', () => {
    const img = elements[0].nativeElement as HTMLImageElement;
    img.dispatchEvent(new Event('error'));
    fixture.detectChanges();
    expect(img.src).toContain('data:image');
  });
});
