import { NgModule } from '@angular/core';

import { routes } from './c1-routing.module';

import C1Component from './c1.component';

@NgModule({
  declarations: [ C1Component ],
  imports: [ routes ]
})
export default class C1Module {
  static routes = routes;
}
