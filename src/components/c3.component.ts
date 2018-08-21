import { Component } from '@angular/core';

@Component({
  selector: 'c3-component',
  template: `
    <div class="addMargin">
      <div><strong>C3 Works!</strong></div>
      <div>This sub component was loaded dynamically... along with its corresponding CSS styles</div>
    </div>`
})
export default class C3Component {}
