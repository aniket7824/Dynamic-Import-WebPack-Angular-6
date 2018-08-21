import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import C4Component from './c4.component';

const c4Routes: Routes = [
  { path: '', component: C4Component, pathMatch: 'full' }
];

export const routes: ModuleWithProviders = RouterModule.forChild(c4Routes);
