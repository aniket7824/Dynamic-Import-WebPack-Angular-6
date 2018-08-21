import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import InlineComponent from './inline.component';

const appRoutes: Routes = [
/*  {
    path: 'dynamic',
    loadChildren: () => {
      return System.import('./dynamic.module').then((comp: any) => {
        return comp.default;
      });
    }, 
  },  */
  { path: '', component: InlineComponent}, /**default router outlet :: father of all :: MAIN in diag*/
  {path : 'dynamic', children : [
    {path : '', loadChildren: () => { /** by default showing c4 but can have option of c5*/
      return System.import('./dynamic.module').then((comp: any) => {
        return comp.default;
      });
    },}
  ]}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
