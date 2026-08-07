/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 * ********************************************************************/

import { test, expect } from '@playwright/test'

test.describe('IconWidget - Basic E2E Test', () => {
  test('should load widget and settings panel side-by-side', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByTestId('widget-panel')).toBeVisible({ timeout: 15000 })
    await expect(page.getByTestId('settings-panel')).toBeVisible()

    console.log('✓ Panels loaded')

    await page.screenshot({ path: 'test-results/01-initial-state.png', fullPage: true })

    const configCheck = await page.evaluate(() => {
      return (window as any).getConfig()
    })

    expect(configCheck).toBeDefined()
    expect(configCheck.value).toBe('mocked-value')

    console.log('✓ Config validated')
  })
})
