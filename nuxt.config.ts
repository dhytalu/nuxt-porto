import Lara from '@primevue/themes/lara';
import { definePreset } from '@primevue/themes';
const MyPreset = definePreset(Lara, {
  semantic: {
    primary: {
        50: '{zinc.50}',
        100: '{zinc.100}',
        200: '{zinc.200}',
        300: '{zinc.300}',
        400: '{zinc.400}',
        500: '{zinc.500}',
        600: '{zinc.600}',
        700: '{zinc.700}',
        800: '{zinc.800}',
        900: '{zinc.900}',
        950: '{zinc.950}'
    },
    colorScheme: {
        light: {
            primary: {
                color: '{zinc.950}',
                inverseColor: '#ffffff',
                hoverColor: '{zinc.900}',
                activeColor: '{zinc.800}'
            }
        },
        dark: {
            primary: {
                color: '{zinc.50}',
                inverseColor: '{zinc.950}',
                hoverColor: '{zinc.100}',
                activeColor: '{zinc.200}'
            },
        }
    }
  }
});

export default defineNuxtConfig({
  primevue: {
    autoImport: true,
    options: {
      theme: {
        preset: MyPreset,
        options: {
          darkModeSelector: '.dark',
        }
      },
    }
  },
  sanctum: {
    mode: 'cookie',
    baseUrl: process.env.API_URL,
    redirectIfAuthenticated: true,
    redirectIfUnauthenticated: true,
    redirect: {
      keepRequestedRoute: true,
      onAuthOnly: '/login',
      onGuestOnly: '/',
      onLogout: '/login'
    },
    globalMiddleware: {
      enabled: true,
      allow404WithoutAuth: true,
    },
    logLevel: 5,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module',
    'nuxt-auth-sanctum',
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
  ],
})