import { NgModule } from '@angular/core';

import { routes } from './c2-routing.module';

import C2Component from './c2.component';

@NgModule({
  declarations: [ C2Component ],
  imports: [ routes ]
})
export default class C2Module {
  static routes = routes;
}
