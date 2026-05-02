import { Routes } from '@angular/router';
import { REMOTE_ROUTES } from './exposed.routes';

export const routes: Routes = [
  ...REMOTE_ROUTES,
  {
    path: 'acceso-denegado',
    loadComponent: () => import('./core/pages/acceso-denegado/acceso-denegado.component').then(m => m.AccesoDenegadoComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./core/pages/no-encontrado/no-encontrado.component').then(m => m.NoEncontradoComponent),
  },
];
