import { defineConfig } from '@playwright/test';

export default defineConfig({
  testMatch: ['**/*.spec.ts', '**/*.test.ts', 'play.ts'],
  use: {
    headless: false,
    screenshot: 'on',
    video: 'on-first-retry',
  },
});
