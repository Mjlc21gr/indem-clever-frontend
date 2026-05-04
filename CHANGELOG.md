# Changelog

Todos los cambios notables de este proyecto se documentan en este archivo.

El formato está basado en [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/)
y este proyecto adhiere a [Versionamiento Semántico](https://semver.org/lang/es/).

## [No publicado]

### Corregido
- Se corrigió typo HTML en 8 modales: doble cierre de etiqueta `>>` en el `div.modal-overlay` — archivos afectados: `modal-uifa`, `modal-tecnico`, `modal-radicacion`, `modal-mesa-perfeccionamiento`, `modal-objecion`, `modal-pago`, `modal-medico`, `modal-investigador`

### Cambiado
- Se optimizaron las definiciones de columnas (`columnas`) en 6 componentes de listado: `listar-tecnico`, `listar-medico`, `listar-investigador`, `listar-mesa-perfect`, `listar-mis-analisis`, `listar-analisis-linea` — se simplificaron headers (ej. 'ID Radicado' → 'ID', 'Numero Poliza' → 'Póliza', 'Fecha Aviso' → 'F. Aviso'), se eliminaron anchos fijos (`width`), se removieron columnas redundantes (`tipoPoliza`, `fechaSiniestro`) y se reordenaron campos para consistencia

### Agregado
- Se agregó funcionalidad de maximizar/restaurar a los 10 modales del proyecto: `modal-agregar-caso`, `modal-radicacion`, `modal-mesa-perfeccionamiento`, `modal-uifa`, `modal-medico`, `modal-investigador`, `modal-tecnico`, `modal-pago`, `modal-objecion`, `modal-caso` — siguiendo el patrón existente de `modal-analisis` con propiedad `maximized`, método `toggleMaximize()`, reset en `close()`, y clases CSS condicionales `modal-overlay--maximized` / `modal-container--maximized`

### Cambiado
- Se completó migración PrimeNG → sb-ui en `projects/indem-clever/`: se migraron íconos del sidebar (`sidebar-menu.data.ts`) de PrimeIcons a Font Awesome, se reemplazó `p-button` por `sb-ui-button` en páginas de error (acceso-denegado, no-encontrado), y se eliminaron archivos HTML huérfanos de componentes shared que ya usaban templates inline
- Se migró la totalidad de componentes PrimeNG a sb-ui (Seguros Bolívar Design System) en `projects/indem-clever/`: 10 modales (`modal-uifa`, `modal-tecnico`, `modal-medico`, `modal-investigador`, `modal-pago`, `modal-objecion`, `modal-caso`, `modal-mesa-perfeccionamiento`, `modal-agregar-caso`, `modal-radicacion`), 2 ventanas (`ventana-datos-generales`, `ventana-data-operativa`), 10 listados (`listar-radicaciones`, `listar-casos`, `listar-uifa`, `listar-tecnico`, `listar-medico`, `listar-investigador`, `listar-mis-analisis`, `listar-analisis-linea`, `listar-mesa-perfect`, `listar-usuarios`) y dashboard (`inicio`)
- Se reemplazó `p-dialog` por modal sb-ui (`@if` + `modal-overlay` / `modal-container` / `modal-header` / `modal-body` / `modal-footer`)
- Se reemplazó `p-panel` por `page-panel` sb-ui (`page-panel__header` / `page-panel__body`)
- Se reemplazó `p-fieldset` por `section-card` sb-ui (`section-card__header` / `section-card__body`)
- Se reemplazó `p-table` por `sb-ui-table` nativa con `@for` loops
- Se reemplazó `p-tabs` / `p-tablist` / `p-tab` / `p-tabpanels` / `p-tabpanel` por `sb-ui-tabs` con signal `activeTab`
- Se reemplazó `p-divider` por `<hr>` con estilo inline
- Se reemplazó `p-button` en `listar-radicaciones` por botones `sb-ui-button`
- Se reemplazaron todos los íconos PrimeIcons (`pi pi-*`) por Font Awesome (`fa-solid fa-*`) en templates y datos de componentes
- Se eliminaron imports de `Dialog`, `Panel`, `Button`, `Divider`, `Fieldset`, `TableModule`, `TabPanel`, `Tabs`, `TabList`, `Tab`, `TabPanels` de todos los archivos TS
- Se mantuvo `UIChart` de PrimeNG en `inicio.component.ts` como excepción (sb-ui no tiene componente de gráficas)

### Agregado
- Se creó servicio `RadicacionesService` en `core/services/` para consumir el endpoint `GET /radicaciones` del backend de siniestros con paginación
- Se creó modelo `ApiResponse<T>` y `PaginatedData<T>` en `core/models/` para tipar las respuestas del backend
- Se creó interfaz `RadicacionResumen` para representar los datos del listado de radicaciones

### Cambiado
- Se conectó `listar-radicaciones` al backend real (`http://localhost:8080/siniestros/api/v1/radicaciones?estado=R`) reemplazando los datos mock
- Se actualizó `environment.ts` y `environment.prod.ts` con la URL base correcta del backend (`/siniestros/api/v1`)
- Se actualizaron los `tagMap` de las columnas Decisión y Estado para coincidir con los valores del backend (UPPER_SNAKE_CASE y códigos de estado)

### Agregado
- Se configuró integración con `@seguros-bolivar/ui-bundle` (Design System): `.npmrc` para JFrog, CSS como asset estático en `angular.json`, atributos `data-brand` y `data-theme` en `index.html`, JS de Web Components en scripts
- Se crearon 4 steering files globales del Design System en `~/.kiro/steering/`: `CSS.md`, `variables-01-css.md`, `componentes-01-sb-ui.md`, `workflow-01-implementar.md`
- Se creó sección `seccion-linea-tiempo` en shared: stepper horizontal con 5 etapas + acordeón expandible con gestiones (responsable, fecha, observación) por etapa
- Se convirtió modal de Consultar Casos (Bootstrap → PrimeNG): información del caso en 3 bloques (Asegurado, Radicado, Siniestro), historial con línea de tiempo, resumen de tiempos con 2 tablas (por etapa y por responsable), documentos adjuntos
- Se aplicó pase de UX/UI global: spacing entre secciones en modales, fieldset legend con borde izquierdo verde, inputs readonly con fondo diferenciado, footer de modales con fondo sutil, checklist con hover feedback, accordion con bordes y hover, tabs con barra activa más gruesa, focus verde en inputs, file upload con estilo corporativo, botones de acción con hover scale
- Se creó capa `core/` con arquitectura enterprise: modelos tipados (Radicacion, Analisis, CasoProveedor, OrdenPago, Objecion, CasoConsulta, Usuario), servicios (AuthService, NotificacionService), guards (authGuard, roleGuard), interceptor HTTP (JWT + manejo global de errores 401/403/500), páginas de error (404, acceso denegado)
- Se configuró `authGuard` en todas las rutas protegidas y `roleGuard` en rutas de admin (pagos, usuarios)
- Se registró `authInterceptor` con `withInterceptors()` en app.config
- Se agregó `<p-toast />` al app shell para notificaciones globales
- Se conectó `AuthService` al topbar para mostrar el nombre del usuario autenticado
- Se crearon archivos de environment (dev/prod) con URL de API stub
- Se creó README corporativo con arquitectura, stack, roles, endpoints y ejecución

### Eliminado
- Se eliminaron 11 servicios legacy no utilizados en `features/indem-clever/services/` (admin, controlador, whatsapp, etc.)
- Se eliminó archivo de environment duplicado `config/environment.ts` (reemplazado por `src/environments/`)
- Se eliminó `SeccionInfoCasoComponent` no utilizado de shared y de `public-api.ts`
- Se eliminaron 3 carpetas de secciones locales muertas en `modal-mesa-perfeccionamiento/secciones/` (seccion-checklist, seccion-datos-caso, seccion-observaciones-mesa)

### Corregido
- Se corrigió selección de checkboxes en tabla de Consultar Casos: se agregó `dataKey="idRadicado"` para que cada fila se identifique de forma única
- Se corrigió acordeón de etapas en línea de tiempo: se agregó `[(value)]="activeValue"` con signal inicializado en `null` para que todas las etapas arranquen cerradas y solo una se abra a la vez

### Eliminado
- Se eliminó directorio `components/` duplicado en `indem-clever-frontend/projects/indem-clever/src/app/features/indem-clever/` (componentes `listar-radicaciones` y `modal-agregar-caso`)
- Se eliminó carpeta duplicada `indem-clever-frontend/` anidada en la raíz del workspace

### Corregido
- Se corrigió error de tipo en `modal-agregar-caso.component.html`: `valueChange` de `p-tabs` emitía `string | number | undefined` pero el signal esperaba `string`
- Se eliminó import no utilizado de `Toolbar` en `listar-radicaciones.component.ts`
- Se corrigió checklist de documentos en `seccion-checklist`: los labels no se asociaban a los checkboxes — se reemplazó `label` attribute por `<label for="">` con `inputId` para vincular correctamente
- Se corrigió botón X de cierre en ambos modales: se agregó `(visibleChange)` handler que emite `onClose` cuando PrimeNG cambia `visible` a `false` (click en X o Escape)
- Se ajustó el maximizar de ambos modales para que respete el área de contenido (entre topbar y sidebar) usando clase `app-dialog-constrained` con CSS que reposiciona el mask y el dialog dentro del área del módulo
- Se ajustó el modal maximizado para que responda al colapso del sidebar: se agrega clase `sidebar-collapsed` en `<html>` al togglear, y el CSS adapta el ancho/posición del dialog con transición suave

### Cambiado
- Se reorganizó la estructura de componentes siguiendo la regla de proyecto: modales anidados dentro de su componente padre
- Se movió `modal-agregar-caso/` y `modal-mesa-perfeccionamiento/` dentro de `listar-radicaciones/`
- Se dividió `modal-agregar-caso` en 2 ventanas: `ventana-datos-generales/` (Tab Datos Generales) y `ventana-data-operativa/` (Tab Data Operativa)
- Se dividió `ventana-datos-generales` en 9 secciones: `seccion-asegurado`, `seccion-radicado`, `seccion-siniestro`, `seccion-bancaria`, `seccion-numero-siniestro`, `seccion-archivos`, `seccion-historial`, `seccion-observaciones`, `seccion-derivacion`
- Se dividió `ventana-data-operativa` en 3 secciones: `seccion-consulta`, `seccion-datos-asegurado`, `seccion-demografica`
- Se movieron modales huérfanos (`modal-crear-otros`, `modal-reapertura`, `modal-ver-enlaces`) a `shared/components/`
- Se creó steering `rule-project-structure.md` con la regla de organización de componentes Angular (módulo → modal → ventana → sección)
- Se migró `modal-mesa-perfeccionamiento` de Bootstrap a PrimeNG: se reemplazó modal Bootstrap, clases `row/col/form-control/form-check/btn`, e íconos Font Awesome por `p-dialog`, `p-fieldset`, `p-fluid`, `p-checkbox`, `p-button`, `p-divider` e íconos PrimeIcons
- Se dividió `modal-mesa-perfeccionamiento` en 3 secciones: `seccion-datos-caso`, `seccion-checklist`, `seccion-observaciones-mesa`
- Se aplicó pase completo de UI/UX y responsive: se centralizaron estilos de formulario (`form-grid`, `checklist-grid`, `form-radio-group`) en `styles.scss` global, se simplificaron SCSS de modales, se agregaron breakpoints responsive (992px tablet, 768px mobile, 576px small mobile) para dialogs, paneles, tablas, formularios y footer de modales
- Se mejoró la tabla dinámica con `text-overflow: ellipsis`, `white-space: nowrap`, scroll horizontal, y toolbar responsive
- Se mejoró visualmente PrimeNG Fieldset, Tabs, Tag, Inputs con sizing consistente y colores corporativos
- Se agregó responsive a `p-panel-icons` para que los botones del header se ajusten en pantallas pequeñas
- Se agregó responsive a `p-dialog-footer` para que los botones se apilen verticalmente en mobile
- Se implementó sidebar mobile overlay: en pantallas ≤768px el sidebar se oculta completamente, el botón hamburguesa lo abre como overlay con backdrop oscuro y animación slide-in, al seleccionar un módulo se cierra automáticamente
- Se creó carpeta `shared/mocks/` con datos mock realistas para todos los módulos: `mock-radicaciones.data.ts` (12 registros), `mock-analisis.data.ts` (10 registros), `mock-proveedores.data.ts` (UIFA 6, Médico 5, Investigador 7, Técnico 4), `mock-pagos.data.ts` (Órdenes 8, Objeciones 6)
- Se conectaron los mocks a los 11 módulos de listado para visualizar datos en las tablas

### Agregado
- Se creó componente `TopbarComponent` (`shared/components/topbar/`) usando PrimeNG Toolbar, Button y Avatar
- Se creó componente `TablaDinamicaComponent` (`shared/components/tabla-dinamica/`) — tabla reutilizable que se adapta dinámicamente al número de columnas y tipos de datos de cada módulo, con soporte para filtro global, paginación, ordenamiento, selección de filas, columna de acciones, y tipos de renderizado (text, date, currency, tag, boolean)
- Se integró `TablaDinamicaComponent` en `listar-radicaciones` con columnas: ID Radicado, Numero Poliza, Fecha Aviso, Decisión, Cobertura, Tipo Poliza, Estado + Acciones (ver, editar)
- Se integró `TablaDinamicaComponent` en `listar-mesa-perfect` con las mismas columnas: ID Radicado, Numero Poliza, Fecha Aviso, Decisión, Cobertura, Tipo Poliza, Estado + Acciones (ver, editar)
- Se integró `TablaDinamicaComponent` en `listar-analisis` (Análisis), `listar-analisis-linea` (Línea de Negocio) y `listar-mis-analisis` (Mis Casos) con columnas: ID, Nombre, Numero Poliza, Fecha Aviso, Fecha Siniestro, Cobertura, Decisión IA, Tipo Poliza, Estado + Acciones
- Se integró `TablaDinamicaComponent` en `listar-uifa`, `listar-medico`, `listar-investigador` y `listar-tecnico` con columnas: ID Radicado, Numero Poliza, Fecha Aviso + Acciones
- Se integró `TablaDinamicaComponent` en `listar-pagos` (Órdenes de Pago) y `listar-otros` (Objeciones) con columnas: ID, Fecha, No. Siniestro, Cobertura, Póliza, Total, Info. + Acciones
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
- Se corrigió la ruta de importación de `environment` en los 11 servicios bajo `features/indem-clever/services/`
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
