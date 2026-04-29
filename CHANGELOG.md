# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y este proyecto adhiere a [Versionamiento Semántico](https://semver.org/lang/es/).

## [No publicado]

### Agregado
- Se creó componente `TopbarComponent` (`shared/components/topbar/`) usando PrimeNG Toolbar, Button y Avatar
- Se creó componente `SidebarComponent` (`shared/components/sidebar/`) con navegación basada en datos y PrimeNG Tooltip
- Se creó modelo `SidebarMenuGroup` y `SidebarMenuItem` en `shared/models/sidebar-menu.model.ts`
- Se creó archivo de datos de menú `shared/data/sidebar-menu.data.ts` con la definición centralizada de navegación

### Cambiado
- Se refactorizó `app.ts` para usar los nuevos componentes `TopbarComponent` y `SidebarComponent` en lugar de HTML inline
- Se simplificó `app.html` a 10 líneas usando composición de componentes
- Se reemplazó `styles.scss` (~2000 líneas de CSS legacy/Bootstrap) por un archivo limpio con CSS custom properties (~80 líneas)
- Se actualizaron los 13 componentes de listado para usar `ChangeDetectionStrategy.OnPush`, eliminar `standalone: true` explícito, eliminar `CommonModule` innecesario y usar `styleUrl` singular
- Se actualizaron los 3 componentes modales para usar `input()` y `output()` en lugar de decoradores `@Input()` y `@Output()`
- Se eliminaron todas las dependencias de clases Bootstrap del proyecto — ahora usa exclusivamente PrimeNG y Tailwind CSS
- Se redujo el CSS inicial de 58.82 kB a 19.95 kB (reducción del 66%)
- Se reemplazaron todos los elementos HTML nativos (`div`, `h2`, `p`, `nav`, `img`, `span`, `i`) por componentes PrimeNG (`p-panel`, `p-card`, `p-image`, `p-toolbar`, `p-button`, `p-avatar`, `p-tag`, `p-panelMenu`, `p-scrollPanel`, `p-dialog`, `p-fluid`)

### Corregido
- Se corrigió la ruta de importación de `environment` en los 11 servicios bajo `features/dim-asignacion/services/`
- Se eliminó método duplicado `listarPagosAdmin()` en `admin.service.ts`
- Se eliminaron métodos duplicados `formatearFecha()` y `formatearCOP()` en `funciones-auxiliares.service.ts`
- Se creó preset PrimeNG personalizado `CleverFlowPreset` en `app.config.ts` con paleta corporativa (#004D40 verde, superficies slate) integrada al tema Aura
- Se unificaron estilos globales (`styles.scss`) con overrides de PrimeNG para `p-panel`, `p-card`, `p-dialog` y `p-datatable` usando la paleta corporativa
- Se ajustaron estilos del topbar para que `p-tag` se renderice como texto plano (título) y chip sutil (usuario) en vez de badges
- Se ajustaron estilos del sidebar con colores de acento dorado (#f2c010) en headers de grupo, hover suave y scrollbar auto-hide
- Se centralizaron tokens de layout (`--app-topbar-height`, `--app-sidebar-width`, etc.) en `:root` para consistencia entre componentes
- Se corrigió el collapse del sidebar que no funcionaba — se reemplazó `:host:has(.sidebar--collapsed)` (no soportado en encapsulación Angular) por `@HostBinding('class.sidebar-collapsed')` que aplica la clase directamente al host element
- Se actualizó la paleta completa a colores Seguros Bolívar: verde corporativo `#0a6e45`, verde oscuro sidebar `#0d3b2a`, dorado acento `#f2c010`
- Se mejoró la legibilidad del sidebar: texto claro `#d4e8dc` sobre fondo verde oscuro, headers de grupo con ícono dorado, items con hover verde medio `#115237`
- Se mejoró visualmente el topbar: gradiente verde con borde inferior dorado, avatar con anillo dorado, nombre de usuario en chip dorado
- Se agregó `p-divider` entre el logo y el menú del sidebar para separación visual
- Se actualizó el preset PrimeNG `CleverFlowPreset` con la paleta verde Seguros Bolívar como primary (`#0a6e45`)
- Se cambió el sidebar de fondo verde oscuro (`#0d3b2a`) a fondo blanco (`#ffffff`) con borde gris claro — texto oscuro `#1f2937` sobre fondo claro para máxima legibilidad
- Se corrigió el centrado de íconos en modo colapsado del sidebar — se agregó `display: flex; flex-direction: column; align-items: center` al contenedor del scroll panel cuando el host tiene clase `.sidebar-collapsed`
- Se mejoró el contraste del menú lateral: texto de items en `#1f2937` (casi negro), headers de grupo en gris `#9ca3af`, íconos en `#4b5563`, hover en verde claro `#f0faf5` con texto verde `#0a6e45`
- Se reorganizó la estructura de navegación del sidebar con criterio UX por flujo de trabajo: Recepción → Análisis → Proveedores → Decisiones → Seguimiento → Administrar
- Se eliminaron items duplicados del menú (Análisis, UIFA, Consultar Casos aparecían en múltiples grupos)
- Se agregó sección "Decisiones" con Órdenes de Pago y Objeciones
- Se renombró "Mesa de Perfeccionamiento" a "Mesa de Transformación"
- Se cambió el modo colapsado para mostrar 6 íconos (uno por grupo) en vez de ~20 íconos (uno por item), con tooltip del nombre del grupo
- Se asignaron íconos diferenciados por item: `pi-shield` (UIFA), `pi-heart` (Médico), `pi-eye` (Investigador), `pi-wallet` (Pagos), `pi-exclamation-triangle` (Objeciones), etc.
