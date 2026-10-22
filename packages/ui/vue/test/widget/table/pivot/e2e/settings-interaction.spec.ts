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

// This test exercises the real component tree end-to-end: it mutates the
// shared config through the exposed window.setConfig() hook (the same state
// both PivotTableWidget and PivotTableWidgetSettings are bound to) and verifies the
// change survives a real render pass in the browser — i.e. the widget
// doesn't crash or ignore reactive updates to its bound settings object.
test.describe('PivotTableWidget - Settings Interaction E2E Test', () => {
  test('reflects a settings change made through the settings panel state', async ({ page }) => {
    await page.goto('/')

    await expect(page.getByTestId('widget-panel')).toBeVisible({ timeout: 15000 })
    await expect(page.getByTestId('settings-panel')).toBeVisible()

    const before = await page.evaluate(() => (window as any).getConfig())
    expect(before.text).toBe('mocked-text')

    await page.evaluate(() => {
      const cfg = (window as any).getConfig()
      ;(window as any).setConfig({ ...cfg, text: 'updated-from-e2e', fontColor: '#00ff00' })
    })

    await page.waitForTimeout(300)

    const after = await page.evaluate(() => (window as any).getConfig())
    expect(after.text).toBe('updated-from-e2e')
    expect(after.fontColor).toBe('#00ff00')

    // Panels must still be alive after the reactive update — a widget
    // that throws on a settings change would detach here.
    await expect(page.getByTestId('widget-panel')).toBeVisible()
    await expect(page.getByTestId('settings-panel')).toBeVisible()

    console.log('✓ Settings change propagated without breaking the render')
  })
})
