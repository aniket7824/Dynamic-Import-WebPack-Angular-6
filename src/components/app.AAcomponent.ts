import { Component } from '@angular/core';
import {Router } from '@angular/router';
@Component({
  selector: 'aa-component',
  template: `
  <div class="a1">
    <p>Default AA Component.</p>
    <button (onclick)></button>
    <a routerLink="/dynamic" routerLinkActive="active">Load a dynamic component</a>
  </div>`,
  styles: ['.a1 { background-color: #7b7b7b;}']
})
export default class AAComponent {
    constructor(private router: Router){

    }

}
