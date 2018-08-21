import { Component } from '@angular/core';

@Component({
  selector: 'c4-component',
  template: `
    <div class="addMargin">
      <div><strong>C4 Works!</strong></div>
      <div>This sub component was loaded dynamically... </div>
      <a [routerLink]='["/c2"]'><button class="btn btn-success pull-right" > Go to C2 from C4</button></a>
    </div>`
})
export default class C4Component {}
