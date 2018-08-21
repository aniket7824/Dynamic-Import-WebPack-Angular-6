import { Component } from '@angular/core';

@Component({
  selector: 'c4-component',
  template: `
    <div class="addMargin">
      <div><strong>C4 Works!</strong></div>
      <div>This sub component was loaded dynamically... along with its corresponding CSS styles</div>
    </div>`
})
export default class C4Component {}
