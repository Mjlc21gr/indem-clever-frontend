/**
 * Configuración de entorno — Producción.
 * apiUrl se reemplaza en el pipeline de CI/CD.
 */
export const environment = {
  production: true,
  apiUrl: '/api/v1',
  appName: 'CleverFlow',
  tokenKey: 'cf_token',
};
