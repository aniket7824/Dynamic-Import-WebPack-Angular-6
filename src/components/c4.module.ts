import { NgModule } from '@angular/core';

import { routes } from './c4-routing.module';

import C4Component from './c4.component';

@NgModule({
  declarations: [ C4Component ],
  imports: [ routes ]
})
export default class C4Module {
  static routes = routes;
}
