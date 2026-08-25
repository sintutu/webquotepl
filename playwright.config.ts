import { defineConfig, devices } from '@playwright/test';

const defaultBaseURL = 'https://www-acc.santam.co.za/webquotepl/';
const configuredBaseURL = process.env.WEBQUOTE_BASE_URL;
const baseURL = configuredBaseURL?.endsWith('/')
  ? configuredBaseURL
  : `${configuredBaseURL || defaultBaseURL}/`;

const projects = [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
  },
];

if (!process.env.CI) {
  projects.push({
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  });
}

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL,
    trace: 'on-first-retry',
  },
  projects,
});
