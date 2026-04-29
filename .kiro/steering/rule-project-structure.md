---
inclusion: always
---

# Estructura de Proyecto — Organización de Componentes Angular

## Regla Principal

Cada módulo (listado, página) que tenga modales, formularios o componentes internos debe organizarlos **dentro de su propia carpeta**, nunca como hermanos al mismo nivel.

## Jerarquía

```
componente-padre/
├── componente-padre.component.ts/html/scss
├── modal-nombre/
│   ├── modal-nombre.component.ts/html/scss
│   ├── ventana-nombre/              ← cada pestaña/tab es una "ventana"
│   │   ├── ventana-nombre.component.ts/html/scss
│   │   └── secciones/               ← fieldsets/bloques dentro de la ventana
│   │       ├── seccion-x/
│   │       │   ├── seccion-x.component.ts
│   │       │   └── seccion-x.component.html
│   │       └── seccion-y/
│   └── ventana-otra/
│       ├── ventana-otra.component.ts/html/scss
│       └── secciones/
└── modal-otro/
```

## Definiciones

| Concepto | Qué es | Ejemplo |
|----------|--------|---------|
| **Módulo/Página** | Componente principal con ruta propia | `listar-radicaciones` |
| **Modal** | Diálogo que se abre desde el módulo | `modal-agregar-caso` |
| **Ventana** | Cada pestaña/tab dentro de un modal | `ventana-datos-generales`, `ventana-data-operativa` |
| **Sección** | Cada fieldset/bloque de formulario dentro de una ventana | `seccion-asegurado`, `seccion-siniestro` |

## Reglas

1. Los modales van **dentro** de la carpeta del componente que los invoca.
2. Si un modal tiene múltiples pestañas/tabs, cada pestaña es una **ventana** (carpeta propia al mismo nivel dentro del modal).
3. Si una ventana tiene múltiples fieldsets o bloques de formulario extensos, cada uno es una **sección** dentro de `secciones/`.
4. Los componentes que no pertenecen a ningún módulo específico van en `shared/components/`.
5. Nunca dejar modales sueltos al mismo nivel que los listados — siempre anidarlos.

## Ejemplo Real

```
listar-radicaciones/
├── listar-radicaciones.component.ts/html/scss
├── modal-agregar-caso/
│   ├── modal-agregar-caso.component.ts/html/scss
│   ├── ventana-datos-generales/
│   │   ├── ventana-datos-generales.component.ts/html
│   │   └── secciones/
│   │       ├── seccion-asegurado/
│   │       ├── seccion-radicado/
│   │       ├── seccion-siniestro/
│   │       ├── seccion-bancaria/
│   │       ├── seccion-numero-siniestro/
│   │       ├── seccion-archivos/
│   │       ├── seccion-historial/
│   │       ├── seccion-observaciones/
│   │       └── seccion-derivacion/
│   └── ventana-data-operativa/
│       ├── ventana-data-operativa.component.ts/html
│       └── secciones/
│           ├── seccion-consulta/
│           ├── seccion-datos-asegurado/
│           └── seccion-demografica/
└── modal-mesa-perfeccionamiento/
```

## Aplicación

Esta regla aplica a **todo el proyecto**. Cada vez que se cree o reorganice un módulo, seguir esta estructura.
