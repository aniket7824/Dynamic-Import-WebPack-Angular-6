import { Component } from '@angular/core';

@Component({
  selector: 'c5-component',
  template: `
    <div class="addMargin">
      <div><strong>C5 Works!</strong></div>
      <div>This sub component was loaded dynamically...</div> <br>
      <button class="btn btn-info c3one" [routerLink]="['/c3']">Go to C3</button>
    </div>
  `
})
export default class C5Component {}
