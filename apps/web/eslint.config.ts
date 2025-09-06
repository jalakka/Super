import { defineConfig } from '@nelsonlaidev/eslint-config'

export default defineConfig({
  tailwindEntryPoint: './src/styles/globals.css',
  tsconfigPath: './tsconfig.json',
  overrides: {
    tailwindcss: {
      'better-tailwindcss/no-unregistered-classes': ['error', { ignore: ['not-prose', 'shiki'] }]
    }
  }
})
