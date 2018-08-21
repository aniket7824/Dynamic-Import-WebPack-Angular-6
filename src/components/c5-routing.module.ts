import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import C5Component from './c5.component';

const c5Routes: Routes = [
  { path: '', component: C5Component, pathMatch: 'full' }
];

export const routes: ModuleWithProviders = RouterModule.forChild(c5Routes);
