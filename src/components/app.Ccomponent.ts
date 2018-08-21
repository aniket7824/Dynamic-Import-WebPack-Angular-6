import { Component } from '@angular/core';

@Component({
  selector: 'c-component',
  template: `
  <div>
    <p>Loaded on Parent Level - Default Component.</p>
    <a routerLink="/dynamic" routerLinkActive="active">Load a dynamic component</a>
  </div>`
})
export default class CComponent {}
