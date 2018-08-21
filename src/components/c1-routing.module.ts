import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import C1Component from './c1.component';

const c5Routes: Routes = [
  { path: '', component: C1Component, pathMatch: 'full' }, /** default open c4 */
  {
    path: 'c4', loadChildren: () =>
      System.import('./c4.module').then(mod => mod.default)
  },
  {
    path: 'c5', loadChildren: () =>
      System.import('./c5.module').then(mod => mod.default)
  }, 
  {
    path: '**', component : C1Component
  }
];

export const routes: ModuleWithProviders = RouterModule.forChild(c5Routes);
