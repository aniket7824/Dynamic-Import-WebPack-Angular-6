import { NgModule } from '@angular/core';

import { routes } from './c5-routing.module';

import C5Component from './c5.component';

@NgModule({
  declarations: [ C5Component ],
  imports: [ routes ]
})
export default class C5Module {
  static routes = routes;
}