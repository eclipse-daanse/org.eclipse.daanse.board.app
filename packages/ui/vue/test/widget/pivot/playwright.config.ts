/*
  Copyright (c) 2026 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  // perf runs must not compete for the CPU
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: 'list',
  timeout: 300000,

  use: {
    baseURL: `http://localhost:${process.env.PIVOT_PORT ?? 5181}`,
    viewport: { width: 1400, height: 900 },
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1400, height: 900 },
        channel: process.env.PW_CHANNEL || undefined,
        launchOptions: {
          // gc() and precise heap numbers for the leak check
          args: ['--js-flags=--expose-gc', '--enable-precise-memory-info'],
        },
      },
    },
  ],

  webServer: {
    command: 'yarn dev',
    port: Number(process.env.PIVOT_PORT ?? 5181),
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
})
