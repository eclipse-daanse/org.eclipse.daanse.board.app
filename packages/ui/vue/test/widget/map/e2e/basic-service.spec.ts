/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { test, expect } from '@playwright/test'

test.describe('Maps Widget - Basic Service Test', () => {
  test('should add WMS service endpoint', async ({ page }) => {
    await page.goto('/')

    // Wait for app to load
    await expect(page.getByTestId('maps-widget')).toBeVisible({ timeout: 15000 })
    await expect(page.getByTestId('settings-panel')).toBeVisible()

    console.log('✓ App loaded')

    const settingsPanel = page.getByTestId('settings-panel')

    // Take screenshot of initial state
    await page.screenshot({ path: 'test-results/01-initial-state.png', fullPage: true })

    // Find the add service button by its icon (add_circle) in the Services collapse section
    const addServiceButton = settingsPanel.locator('button').filter({ has: page.locator('i.material-icons:has-text("add_circle")') })
    await expect(addServiceButton).toBeVisible({ timeout: 10000 })

    console.log('✓ Found "Add Service" button with add_circle icon')

    await addServiceButton.click()
    await page.waitForTimeout(1000)

    // Take screenshot of modal
    await page.screenshot({ path: 'test-results/02-modal-opened.png', fullPage: true })

    // Find URL input - va-input renders as regular input with placeholder
    const urlInput = page.locator('input[placeholder*="serviceurl"]').first()
    await expect(urlInput).toBeVisible({ timeout: 5000 })

    console.log('✓ Found URL input field')

    // Fill URL
    await urlInput.fill('https://kartenportal.jena.de/ows/pg/qwc_config/kartenportal_start')

    console.log('✓ Filled URL: kartenportal.jena.de')

    await page.screenshot({ path: 'test-results/03-url-filled.png', fullPage: true })

    // Find and click Add button
    const addButton = page.getByRole('button', { name: /^Add$/i }).first()
    await expect(addButton).toBeVisible({ timeout: 5000 })

    console.log('✓ Found Add button')

    await addButton.click()

    console.log('⏳ Waiting 20 seconds for service to load...')
    await page.waitForTimeout(20000)

    await page.screenshot({ path: 'test-results/04-after-load.png', fullPage: true })

    // Check if service was added to config
    const configCheck = await page.evaluate(() => {
      const config = (window as any).getConfig()
      return {
        services: config.services || [],
        serviceCount: (config.services || []).length
      }
    })

    console.log('Service count:', configCheck.serviceCount)
    console.log('Services:', JSON.stringify(configCheck.services, null, 2))

    expect(configCheck.serviceCount).toBeGreaterThan(0)

    console.log('✅ Service successfully added!')
  })
})
