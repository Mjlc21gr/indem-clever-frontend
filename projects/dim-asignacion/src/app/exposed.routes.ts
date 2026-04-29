import { Routes } from '@angular/router';

export const REMOTE_ROUTES: Routes = [
  {
    path: 'inicio',
    loadComponent: () => import('./features/dim-asignacion/components/inicio/inicio.component').then(m => m.InicioComponent),
  },
  {
    path: 'listar-radicaciones',
    loadComponent: () => import('./features/dim-asignacion/components/listar-radicaciones/listar-radicaciones.component').then(m => m.ListarradicacionesComponent),
  },
  {
    path: 'listar-mesa-perfect',
    loadComponent: () => import('./features/dim-asignacion/components/listar-mesa-perfect/listar-mesa-perfect.component').then(m => m.ListarmesaperfectComponent),
  },
  {
    path: 'listar-analisis',
    loadComponent: () => import('./features/dim-asignacion/components/listar-analisis/listar-analisis.component').then(m => m.ListaranalisisComponent),
  },
  {
    path: 'listar-analisis-linea',
    loadComponent: () => import('./features/dim-asignacion/components/listar-analisis-linea/listar-analisis-linea.component').then(m => m.ListaranalisislineaComponent),
  },
  {
    path: 'listar-mis-analisis',
    loadComponent: () => import('./features/dim-asignacion/components/listar-mis-analisis/listar-mis-analisis.component').then(m => m.ListarmisanalisisComponent),
  },
  {
    path: 'listar-uifa',
    loadComponent: () => import('./features/dim-asignacion/components/listar-uifa/listar-uifa.component').then(m => m.ListaruifaComponent),
  },
  {
    path: 'listar-medico',
    loadComponent: () => import('./features/dim-asignacion/components/listar-medico/listar-medico.component').then(m => m.ListarmedicoComponent),
  },
  {
    path: 'listar-investigador',
    loadComponent: () => import('./features/dim-asignacion/components/listar-investigador/listar-investigador.component').then(m => m.ListarinvestigadorComponent),
  },
  {
    path: 'listar-tecnico',
    loadComponent: () => import('./features/dim-asignacion/components/listar-tecnico/listar-tecnico.component').then(m => m.ListartecnicoComponent),
  },
  {
    path: 'listar-pagos',
    loadComponent: () => import('./features/dim-asignacion/components/listar-pagos/listar-pagos.component').then(m => m.ListarpagosComponent),
  },
  {
    path: 'listar-casos',
    loadComponent: () => import('./features/dim-asignacion/components/listar-casos/listar-casos.component').then(m => m.ListarcasosComponent),
  },
  {
    path: 'listar-usuarios',
    loadComponent: () => import('./features/dim-asignacion/components/listar-usuarios/listar-usuarios.component').then(m => m.ListarusuariosComponent),
  },
  {
    path: 'listar-otros',
    loadComponent: () => import('./features/dim-asignacion/components/listar-otros/listar-otros.component').then(m => m.ListarotrosComponent),
  },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
];
