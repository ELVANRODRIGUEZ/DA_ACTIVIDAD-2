import { Routes } from '@angular/router';
import { Minutas } from './minutas/minutas';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'minutas',
  },
  {
    path: 'minutas',
    component: Minutas,
  },
  {
    path: '**',
    redirectTo: 'minutas',
  },
];
