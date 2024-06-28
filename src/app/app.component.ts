import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'proxecto';

  constructor(
    private readonly _viewportScroll : ViewportScroller,
  ){}

  ngOnInit(): void {
    this._viewportScroll.scrollToPosition([0,0]);
  }

}
