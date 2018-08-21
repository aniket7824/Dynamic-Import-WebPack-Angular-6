import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import C1Component from './c1.component';

const c5Routes: Routes = [
  { path: '', component: C1Component, pathMatch: 'full' }, /** default open c1  then deviate POA*/
  {
    path: 'c4', loadChildren: () =>
      System.import('./c4.module').then(mod => mod.default) /**dynamic import */
  },
  {
    path: 'c5', loadChildren: () =>
      System.import('./c5.module').then(mod => mod.default) /**dynamic import */
  },
  {
    path: '**', component: C1Component /**static error display */
  }
];

export const routes: ModuleWithProviders = RouterModule.forChild(c5Routes);
