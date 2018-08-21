import { Component } from '@angular/core';

@Component({
  selector: 'c2-component',
  template: `
    <div class="addMargin">
      <div><strong>Sub Sandwiches!</strong></div>
      <div>This sub component was loaded dynamically... along with its corresponding CSS styles</div>
    </div>
  `
})
export default class C2Component {}
