import { Component } from '@angular/core';

@Component({
  selector: 'c3-component',
  template: `
    <div class="addMargin">
      <div><strong>C3 Works!</strong></div>
      <div>This sub component was loaded dynamically...</div>
      <a [routerLink]='["/c1/c5"]'><button class="btn btn-success pull-right" > Go to C5 from c3 </button></a>
    </div>`
})
export default class C3Component {}
