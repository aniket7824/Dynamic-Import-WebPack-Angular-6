import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import InlineComponent from './inline.component';

const appRoutes: Routes = [
  { path: '', component: InlineComponent}, /**default router outlet :: father of all :: MAIN in diag*/
  {path : 'c1', children : [
    {path : '', loadChildren: () => { /** loading C1 now this will have option perhaps */
      return System.import('./c1.module').then((comp: any) => {
        return comp.default;
      });
    },}
  ]},
  {path : 'c2', children : [
    {path : '', loadChildren: () => { /** loading C2 and this does NO_ACTION */
      return System.import('./c2.module').then((comp: any) => {
        return comp.default;
      });
    },}
  ]},
  {path : 'c3', children : [
    {path : '', loadChildren: () => { /** loading C3 now this will by default show on click to c5 */
      return System.import('./c3.module').then((comp: any) => {
        return comp.default;
      });
    },}
  ]} 
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
