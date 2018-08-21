import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import C2Component from './c2.component';

const c2Routes: Routes = [
  { path: '', component: C2Component, pathMatch: 'full' } /**nothing else to do here */
];

export const routes: ModuleWithProviders = RouterModule.forChild(c2Routes);
