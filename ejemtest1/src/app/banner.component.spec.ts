import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BannerComponent } from './banner.component';

describe('BannerComponent', () => {

  it('Test title', () => {

    TestBed.configureTestingModule({
      // declare the test component
      declarations: [BannerComponent],
    });

    const fixture = TestBed.createComponent(BannerComponent);

    // BannerComponent test instance
    const component = fixture.componentInstance;

    // query for the title <h1> by CSS element selector
    const debugElement = fixture.debugElement.query(By.css('h1'));
    const htmlElement = debugElement.nativeElement;

    fixture.detectChanges();
    expect(htmlElement.textContent).toContain(component.title);
  });

});
