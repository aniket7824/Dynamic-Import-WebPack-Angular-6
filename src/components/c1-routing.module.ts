import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import C1Component from './c1.component';

const c1Routes: Routes = [
  { path: '', redirectTo: 'c4', pathMatch: 'full' }, /** default open c4 */
  {
    path: 'c4', loadChildren: () =>
      System.import('./c4.module').then(mod => mod.default)
  },
  {
    path: 'c5', loadChildren: () =>
      System.import('./c5.module').then(mod => mod.default)
  }
];

export const routes: ModuleWithProviders = RouterModule.forChild(c1Routes);
