import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import C3Component from './c3.component';

const c3Routes: Routes = [
  { path: '', component: C3Component, pathMatch: 'full' }
];

export const routes: ModuleWithProviders = RouterModule.forChild(c3Routes);
