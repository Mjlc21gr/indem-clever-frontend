/** Mock data para Decisiones (Órdenes de Pago + Objeciones unificadas). */
export const MOCK_DECISIONES = [
  { id: 1, tipo: 'Orden de Pago', fecha: '2026-03-10', numeroSiniestro: '20260310-001', cobertura: 'Vida Grupo', poliza: '3001-4521', total: 15000000 },
  { id: 2, tipo: 'Orden de Pago', fecha: '2026-03-14', numeroSiniestro: '20260314-002', cobertura: 'ITP', poliza: '3001-7832', total: 8500000 },
  { id: 3, tipo: 'Objeción', fecha: '2026-03-12', numeroSiniestro: '20260312-001', cobertura: 'Vida Grupo', poliza: '3001-4521', total: 15000000 },
  { id: 4, tipo: 'Orden de Pago', fecha: '2026-03-18', numeroSiniestro: '20260318-003', cobertura: 'Exequias', poliza: '3002-1190', total: 3200000 },
  { id: 5, tipo: 'Objeción', fecha: '2026-03-16', numeroSiniestro: '20260316-002', cobertura: 'ITP', poliza: '3001-7832', total: 8500000 },
  { id: 6, tipo: 'Orden de Pago', fecha: '2026-03-22', numeroSiniestro: '20260322-004', cobertura: 'Vida Individual', poliza: '3001-5567', total: 45000000 },
  { id: 7, tipo: 'Objeción', fecha: '2026-03-20', numeroSiniestro: '20260320-003', cobertura: 'Vida Individual', poliza: '3001-5567', total: 45000000 },
  { id: 8, tipo: 'Orden de Pago', fecha: '2026-03-26', numeroSiniestro: '20260326-005', cobertura: 'Accidentes', poliza: '3003-2241', total: 6700000 },
  { id: 9, tipo: 'Objeción', fecha: '2026-03-28', numeroSiniestro: '20260328-004', cobertura: 'Accidentes', poliza: '3003-2241', total: 6700000 },
  { id: 10, tipo: 'Orden de Pago', fecha: '2026-04-01', numeroSiniestro: '20260401-006', cobertura: 'Vida Grupo', poliza: '3001-8899', total: 22000000 },
  { id: 11, tipo: 'Objeción', fecha: '2026-04-03', numeroSiniestro: '20260403-005', cobertura: 'Vida Grupo', poliza: '3001-8899', total: 22000000 },
  { id: 12, tipo: 'Orden de Pago', fecha: '2026-04-05', numeroSiniestro: '20260405-007', cobertura: 'ITP', poliza: '3002-3345', total: 11500000 },
  { id: 13, tipo: 'Objeción', fecha: '2026-04-08', numeroSiniestro: '20260408-006', cobertura: 'ITP', poliza: '3002-3345', total: 11500000 },
  { id: 14, tipo: 'Orden de Pago', fecha: '2026-04-10', numeroSiniestro: '20260410-008', cobertura: 'Exequias', poliza: '3003-6678', total: 2800000 },
];

/** @deprecated Usar MOCK_DECISIONES en su lugar. */
export const MOCK_ORDENES_PAGO = MOCK_DECISIONES.filter(d => d.tipo === 'Orden de Pago');

/** @deprecated Usar MOCK_DECISIONES en su lugar. */
export const MOCK_OBJECIONES = MOCK_DECISIONES.filter(d => d.tipo === 'Objeción');
