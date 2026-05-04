import { SidebarMenuGroup } from '../models/sidebar-menu.model';

/**
 * Sidebar navigation — organizado por flujo de trabajo.
 *
 * Estructura UX:
 * 1. Recepción    → Donde entran los casos (radicaciones, mesa)
 * 2. Análisis     → Donde se estudian (análisis, línea, mis casos)
 * 3. Proveedores  → Actores externos (UIFA, médico, investigador, técnico)
 * 4. Decisiones   → Resolución (pagos, objeciones)
 * 5. Seguimiento  → Monitoreo transversal
 * 6. Administrar  → Gestión interna (usuarios, total casos)
 */
export const SIDEBAR_MENU: SidebarMenuGroup[] = [
  {
    label: 'Recepción',
    icon: 'fa-solid fa-inbox',
    collapsedTooltip: 'Recepción',
    items: [
      { label: 'Radicaciones', icon: 'fa-solid fa-file-circle-plus', routerLink: '/listar-radicaciones' },
      { label: 'Mesa de Transformación', icon: 'fa-solid fa-arrows-rotate', routerLink: '/listar-mesa-perfect' },
    ],
  },
  {
    label: 'Análisis',
    icon: 'fa-solid fa-chart-simple',
    collapsedTooltip: 'Análisis',
    items: [
      { label: 'Análisis General', icon: 'fa-solid fa-magnifying-glass', routerLink: '/listar-analisis' },
      { label: 'Línea de Negocio', icon: 'fa-solid fa-sitemap', routerLink: '/listar-analisis-linea' },
      { label: 'Mis Casos', icon: 'fa-solid fa-briefcase', routerLink: '/listar-mis-analisis' },
    ],
  },
  {
    label: 'Proveedores',
    icon: 'fa-solid fa-users',
    collapsedTooltip: 'Proveedores',
    items: [
      { label: 'UIFA', icon: 'fa-solid fa-shield', routerLink: '/listar-uifa' },
      { label: 'Médico', icon: 'fa-solid fa-heart', routerLink: '/listar-medico' },
      { label: 'Investigador', icon: 'fa-solid fa-eye', routerLink: '/listar-investigador' },
      { label: 'Técnico', icon: 'fa-solid fa-wrench', routerLink: '/listar-tecnico' },
    ],
  },
  {
    label: 'Decisiones',
    icon: 'fa-solid fa-circle-check',
    collapsedTooltip: 'Decisiones',
    items: [
      { label: 'Órdenes de Pago', icon: 'fa-solid fa-wallet', routerLink: '/listar-pagos' },
      { label: 'Objeciones', icon: 'fa-solid fa-triangle-exclamation', routerLink: '/listar-otros' },
    ],
  },
  {
    label: 'Seguimiento',
    icon: 'fa-solid fa-chart-line',
    collapsedTooltip: 'Seguimiento',
    items: [
      { label: 'Consultar Casos', icon: 'fa-solid fa-magnifying-glass', routerLink: '/listar-casos' },
    ],
  },
  {
    label: 'Administrar',
    icon: 'fa-solid fa-gear',
    collapsedTooltip: 'Administrar',
    items: [
      { label: 'Total Casos', icon: 'fa-solid fa-database', routerLink: '/listar-casos' },
      { label: 'Usuarios', icon: 'fa-solid fa-user-pen', routerLink: '/listar-usuarios' },
    ],
  },
];
