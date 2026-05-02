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
    icon: 'pi pi-inbox',
    collapsedTooltip: 'Recepción',
    items: [
      { label: 'Radicaciones', icon: 'pi pi-file-plus', routerLink: '/listar-radicaciones' },
      { label: 'Mesa de Transformación', icon: 'pi pi-sync', routerLink: '/listar-mesa-perfect' },
    ],
  },
  {
    label: 'Análisis',
    icon: 'pi pi-chart-bar',
    collapsedTooltip: 'Análisis',
    items: [
      { label: 'Análisis General', icon: 'pi pi-search', routerLink: '/listar-analisis' },
      { label: 'Línea de Negocio', icon: 'pi pi-sitemap', routerLink: '/listar-analisis-linea' },
      { label: 'Mis Casos', icon: 'pi pi-briefcase', routerLink: '/listar-mis-analisis' },
    ],
  },
  {
    label: 'Proveedores',
    icon: 'pi pi-users',
    collapsedTooltip: 'Proveedores',
    items: [
      { label: 'UIFA', icon: 'pi pi-shield', routerLink: '/listar-uifa' },
      { label: 'Médico', icon: 'pi pi-heart', routerLink: '/listar-medico' },
      { label: 'Investigador', icon: 'pi pi-eye', routerLink: '/listar-investigador' },
      { label: 'Técnico', icon: 'pi pi-wrench', routerLink: '/listar-tecnico' },
    ],
  },
  {
    label: 'Decisiones',
    icon: 'pi pi-check-circle',
    collapsedTooltip: 'Decisiones',
    items: [
      { label: 'Órdenes de Pago', icon: 'pi pi-wallet', routerLink: '/listar-pagos' },
      { label: 'Objeciones', icon: 'pi pi-exclamation-triangle', routerLink: '/listar-otros' },
    ],
  },
  {
    label: 'Seguimiento',
    icon: 'pi pi-chart-line',
    collapsedTooltip: 'Seguimiento',
    items: [
      { label: 'Consultar Casos', icon: 'pi pi-search', routerLink: '/listar-casos' },
    ],
  },
  {
    label: 'Administrar',
    icon: 'pi pi-cog',
    collapsedTooltip: 'Administrar',
    items: [
      { label: 'Total Casos', icon: 'pi pi-database', routerLink: '/listar-casos' },
      { label: 'Usuarios', icon: 'pi pi-user-edit', routerLink: '/listar-usuarios' },
    ],
  },
];
