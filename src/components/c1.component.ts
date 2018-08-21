import { Component } from '@angular/core';
// unutilized component may be used in case of error
@Component({
  selector: 'c1-component',
  template: `
    <div class="addMargin">
      <div><strong>C1 here : 2 Way to C4, C5 Component</strong></div>
      <div>This sub component was loaded dynamically...</div>
            <a [routerLink]='["/c1/c4"]'><button class="btn btn-success pull-right" > Go to C4</button></a>
            <a style="margin-left: 20px;" [routerLink]='["/c1/c5"]'><button class="btn btn-success pull-right" > Go to C5</button></a>     
    </div>`
})
export default class C1Component { }
