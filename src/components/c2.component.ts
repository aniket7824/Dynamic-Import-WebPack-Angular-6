import { Component } from '@angular/core';

@Component({
  selector: 'c2-component',
  template: `
    <div class="addMargin">
      <div><strong>C2 Works Awesome!!!</strong></div>
      <div>This sub component was loaded dynamically... </div>
      <div>Also this does nothing</div>
    </div>
  `
})
export default class C2Component {}
