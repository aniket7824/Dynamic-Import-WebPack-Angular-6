import { Component } from '@angular/core';

@Component({
  selector: 'c5-component',
  template: `
    <div class="addMargin">
      <div><strong>C5 Works!</strong></div>
      <div>This sub component was loaded dynamically...</div> <br>
      <a [routerLink]='["/c3"]'><button class="btn btn-info" > Go to C3</button></a>
    </div>
  `
})
export default class C5Component {}
