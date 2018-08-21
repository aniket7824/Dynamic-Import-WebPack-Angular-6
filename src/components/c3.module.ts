import { NgModule } from '@angular/core';

import { routes } from './c3-routing.module';

import C3Component from './c3.component';

@NgModule({
  declarations: [ C3Component ],
  imports: [ routes ]
})
export default class C3Module {
  static routes = routes;
}
