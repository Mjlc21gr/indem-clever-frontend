import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { roleGuard } from './core/guards/role.guard';

export const REMOTE_ROUTES: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./features/dim-asignacion/components/inicio/inicio.component').then(m => m.InicioComponent),
  },
  {
    path: 'listar-radicaciones',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dim-asignacion/components/listar-radicaciones/listar-radicaciones.component').then(m => m.ListarradicacionesComponent),
  },
  {
    path: 'listar-mesa-perfect',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dim-asignacion/components/listar-mesa-perfect/listar-mesa-perfect.component').then(m => m.ListarmesaperfectComponent),
  },
  {
    path: 'listar-analisis',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dim-asignacion/components/listar-analisis/listar-analisis.component').then(m => m.ListaranalisisComponent),
  },
  {
    path: 'listar-analisis-linea',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dim-asignacion/components/listar-analisis-linea/listar-analisis-linea.component').then(m => m.ListaranalisislineaComponent),
  },
  {
    path: 'listar-mis-analisis',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dim-asignacion/components/listar-mis-analisis/listar-mis-analisis.component').then(m => m.ListarmisanalisisComponent),
  },
  {
    path: 'listar-uifa',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dim-asignacion/components/listar-uifa/listar-uifa.component').then(m => m.ListaruifaComponent),
  },
  {
    path: 'listar-medico',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dim-asignacion/components/listar-medico/listar-medico.component').then(m => m.ListarmedicoComponent),
  },
  {
    path: 'listar-investigador',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dim-asignacion/components/listar-investigador/listar-investigador.component').then(m => m.ListarinvestigadorComponent),
  },
  {
    path: 'listar-tecnico',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dim-asignacion/components/listar-tecnico/listar-tecnico.component').then(m => m.ListartecnicoComponent),
  },
  {
    path: 'listar-pagos',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin'] },
    loadComponent: () => import('./features/dim-asignacion/components/listar-pagos/listar-pagos.component').then(m => m.ListarpagosComponent),
  },
  {
    path: 'listar-casos',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dim-asignacion/components/listar-casos/listar-casos.component').then(m => m.ListarcasosComponent),
  },
  {
    path: 'listar-usuarios',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin'] },
    loadComponent: () => import('./features/dim-asignacion/components/listar-usuarios/listar-usuarios.component').then(m => m.ListarusuariosComponent),
  },
  {
    path: 'listar-otros',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dim-asignacion/components/listar-otros/listar-otros.component').then(m => m.ListarotrosComponent),
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];
