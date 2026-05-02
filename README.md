# Clever Indem — Frontend

## Descripción

Aplicación web para la gestión de indemnizaciones de Seguros Bolívar. Permite radicar casos, asignar analistas, derivar a proveedores externos, aprobar pagos y consultar el historial completo de cada caso.

## Ruta API

```
/seguros/api/v1/indemnizaciones
```

## Arquitectura

```
projects/dim-asignacion/src/app/
├── core/                          # Servicios singleton, guards, interceptors, modelos
│   ├── guards/                    # authGuard, roleGuard
│   ├── interceptors/              # authInterceptor (JWT + error handling)
│   ├── models/                    # Interfaces TypeScript del dominio
│   ├── pages/                     # Páginas de error (404, acceso denegado)
│   └── services/                  # AuthService, NotificacionService
├── features/dim-asignacion/       # Feature module principal
│   └── components/                # Componentes por módulo (lazy loaded)
│       ├── listar-radicaciones/   # Radicaciones + modales (agregar, ver, mesa)
│       ├── listar-analisis/       # Análisis + modal
│       ├── listar-uifa/           # Proveedor UIFA + modal
│       ├── listar-medico/         # Proveedor Médico + modal
│       ├── listar-investigador/   # Proveedor Investigador + modal
│       ├── listar-tecnico/        # Proveedor Técnico + modal
│       ├── listar-pagos/          # Órdenes de pago + modal (admin)
│       ├── listar-otros/          # Objeciones + modal
│       ├── listar-casos/          # Consultar casos + modal seguimiento
│       └── inicio/                # Dashboard de bienvenida
├── shared/                        # Librería de componentes reutilizables
│   ├── components/
│   │   ├── tabla-dinamica/        # Tabla genérica con sorting, filtering, paginación
│   │   ├── boton-accion/          # Botón reutilizable
│   │   ├── dialogo-confirmacion/  # Diálogo de confirmación
│   │   ├── topbar/                # Barra superior
│   │   ├── sidebar/               # Menú lateral
│   │   └── secciones/             # Secciones genéricas de formulario
│   ├── mocks/                     # Datos mock para desarrollo
│   └── public-api.ts              # Barrel export de la librería
└── environments/                  # Configuración por entorno
```

## Stack Tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| Angular | 20.x | Framework frontend |
| PrimeNG | 20.x | Componentes UI |
| TypeScript | 5.x | Lenguaje |
| RxJS | 7.x | Programación reactiva |

## Roles

| Rol | Acceso |
|---|---|
| `admin` | Todos los módulos + aprobación de pagos + gestión de usuarios |
| `gestor` | Radicaciones, análisis, proveedores, consulta de casos |

## Endpoints (pendientes de implementación backend)

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/radicaciones` | Listar radicaciones |
| POST | `/radicaciones` | Crear radicación |
| GET | `/analisis` | Listar casos en análisis |
| GET | `/proveedores/:tipo` | Listar casos por tipo de proveedor |
| GET | `/pagos` | Listar órdenes de pago |
| PUT | `/pagos/:id/aprobar` | Aprobar orden de pago |
| PUT | `/pagos/:id/devolver` | Devolver orden de pago |
| GET | `/casos/:id/seguimiento` | Obtener seguimiento de un caso |

## Ejecución Local

```bash
npm install
npx ng serve dim-asignacion-mfe --port 4201
```

## Build

```bash
npx ng build dim-asignacion-mfe
```

## Autores

- Equipo de Indemnizaciones — Seguros Bolívar
