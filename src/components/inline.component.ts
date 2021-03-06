import { Component, AfterViewInit } from '@angular/core';
@Component({
  selector: 'inline-component',
  template: `
  <div>
    <p>Loaded on Parent Level - Default Component.</p>
    <button class="btn btn-info" [routerLink]="['/c1']">Go to C1</button>
    <button class="btn btn-info c3one" [routerLink]="['/c3']">Go to C3</button>
  </div>`,
  styles: ['.c3one {margin-left : 24px;}'],
  providers: []
})
export default class InlineComponent implements AfterViewInit {
  constructor() {

  }
  ngAfterViewInit() {

  }
}
