import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';
import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';
import { routes } from './app.routes';
import { authInterceptor } from './core/interceptors/auth.interceptor';

/**
 * Preset PrimeNG personalizado con paleta Seguros Bolívar.
 * Verde corporativo como primary, superficies neutras.
 */
const CleverFlowPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#e8f5ee',
      100: '#c8e6d5',
      200: '#a5d6b9',
      300: '#80c69d',
      400: '#4db87e',
      500: '#0a6e45',
      600: '#09633e',
      700: '#085a38',
      800: '#064d30',
      900: '#043d26',
      950: '#022d1b',
    },
    colorScheme: {
      light: {
        primary: {
          color: '#0a6e45',
          contrastColor: '#ffffff',
          hoverColor: '#085a38',
          activeColor: '#064d30',
        },
        highlight: {
          background: '#e8f5ee',
          focusBackground: '#c8e6d5',
          color: '#0a6e45',
          focusColor: '#064d30',
        },
        surface: {
          0: '#ffffff',
          50: '#f4f6f8',
          100: '#eef1f4',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimations(),
    MessageService,
    providePrimeNG({
      theme: {
        preset: CleverFlowPreset,
        options: {
          darkModeSelector: '.app-dark',
        },
      },
    }),
  ],
};
