/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { test, expect } from '@playwright/test'

test.describe('Maps Widget - WMS Service Integration (Kommunale Wärmeplanung Jena)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')

    // Wait for both widget and settings to load
    await expect(page.getByTestId('maps-widget')).toBeVisible({ timeout: 15000 })
    await expect(page.getByTestId('settings-panel')).toBeVisible()

    console.log('✓ Dockyard loaded - Widget left, Settings right')
  })

  test('should add WMS service, add Kommunale Wärmeplanung layer, set opacity to 50%, and verify on map', async ({ page }) => {
    console.log('\n=== Step 1: Add WMS Service via Settings ===')

    const settingsPanel = page.getByTestId('settings-panel')

    // Find and click the add service button by its icon (add_circle)
    const addServiceButton = settingsPanel.locator('button').filter({ has: page.locator('i.material-icons:has-text("add_circle")') })
    await expect(addServiceButton).toBeVisible({ timeout: 10000 })
    await addServiceButton.click()

    console.log('✓ Clicked "Service hinzufügen"')

    // Wait for modal to appear
    await page.waitForTimeout(1000)

    // Enter WMS service URL - va-input renders as regular input with placeholder
    const urlInput = page.locator('input[placeholder*="serviceurl"]').first()
    await expect(urlInput).toBeVisible({ timeout: 5000 })
    await urlInput.fill('https://kartenportal.jena.de/ows/pg/qwc_config/kartenportal_start')

    console.log('✓ Entered WMS URL: kartenportal.jena.de')

    // Click Add button in modal
    const addButton = page.getByRole('button', { name: /^Add$/i }).first()
    await addButton.click()

    console.log('⏳ Waiting for WMS service to load (max 20s)...')

    // Wait for service to load and appear in tree
    await page.waitForTimeout(20000)

    console.log('\n=== Step 2: Find Kommunale Wärmeplanung Layer ===')

    // Look for the layer in the service tree
    const layerText = settingsPanel.getByText(/wärmeplanung/i).first()
    await expect(layerText).toBeVisible({ timeout: 5000 })

    console.log('✓ Found layer "Kommunale Wärmeplanung" in service tree')

    // Try to add layer - look for checkbox near the layer text
    // Get parent element and find checkbox within it
    const layerRow = layerText.locator('..')
    const layerCheckbox = layerRow.locator('input[type="checkbox"]').first()

    const checkboxVisible = await layerCheckbox.isVisible({ timeout: 2000 }).catch(() => false)

    if (checkboxVisible) {
      await layerCheckbox.check()
      console.log('✓ Checked layer checkbox')
    } else {
      // Try double-click to add
      await layerText.dblclick()
      console.log('✓ Double-clicked layer to add')
    }

    await page.waitForTimeout(2000)

    console.log('\n=== Step 3: Set Opacity to 50% ===')

    // Find opacity slider in settings
    const opacitySlider = settingsPanel.locator('input[type="range"]').first()
    await expect(opacitySlider).toBeVisible({ timeout: 5000 })

    // Get current value
    const currentValue = await opacitySlider.inputValue()
    console.log(`Current opacity: ${currentValue}`)

    // Set to 50%
    await opacitySlider.fill('50')
    await page.waitForTimeout(500)

    // Verify opacity is set
    const newValue = await opacitySlider.inputValue()
    expect(newValue).toBe('50')

    console.log('✓ Opacity set to 50%')

    console.log('\n=== Step 4: Verify Layer on Map ===')

    // Wait for WMS tiles to load on map
    await page.waitForTimeout(3000)

    // Check for WMS tiles in the widget
    const widgetPanel = page.getByTestId('widget-panel')
    const wmsTiles = await widgetPanel.locator('img[src*="kartenportal.jena.de"]').count()

    expect(wmsTiles).toBeGreaterThan(0)
    console.log(`✓ Found ${wmsTiles} WMS tiles on map`)

    // Verify via JavaScript config
    const configCheck = await page.evaluate(() => {
      const config = (window as any).getConfig()

      const services = config.services || []
      const layers = config.layers || []

      const wmsService = services.find((s: any) =>
        s.url && s.url.includes('kartenportal.jena.de')
      )

      const waermeplanungLayer = layers.find((l: any) =>
        l.name && l.name.toLowerCase().includes('waermeplanung')
      )

      return {
        hasWmsService: !!wmsService,
        serviceName: wmsService?.name || null,
        hasLayer: !!waermeplanungLayer,
        layerName: waermeplanungLayer?.name || null,
        layerOpacity: waermeplanungLayer?.opacity || null,
        layerCount: layers.length,
        serviceCount: services.length
      }
    })

    console.log('Config check:', configCheck)

    expect(configCheck.hasWmsService).toBe(true)
    expect(configCheck.hasLayer).toBe(true)
    expect(configCheck.layerOpacity).toBe(0.5)

    console.log('\n=== Step 5: Take Screenshot ===')

    await page.screenshot({
      path: 'test-results/wms-integration-kommunale-waermeplanung.png',
      fullPage: true
    })

    console.log('✓ Screenshot saved')

    console.log('\n✅ ALL STEPS COMPLETED SUCCESSFULLY!')
    console.log(`   - WMS Service: ${configCheck.serviceName}`)
    console.log(`   - Layer: ${configCheck.layerName}`)
    console.log(`   - Opacity: ${configCheck.layerOpacity * 100}%`)
    console.log(`   - Tiles on map: ${wmsTiles}`)
  })

  test('should handle invalid WMS service gracefully', async ({ page }) => {
    console.log('\n=== Testing Error Handling ===')

    const settingsPanel = page.getByTestId('settings-panel')

    // Add invalid service
    const addServiceButton = settingsPanel.locator('button').filter({ has: page.locator('i.material-icons:has-text("add_circle")') })
    await addServiceButton.click()

    await page.waitForTimeout(1000)

    // Enter invalid URL - va-input with placeholder
    const urlInput = page.locator('input[placeholder*="serviceurl"]').first()
    await urlInput.fill('http://invalid-domain-xyz.com/wms')

    const addButton = page.getByRole('button', { name: /^Add$/i }).first()
    await addButton.click()

    console.log('⏳ Waiting for service timeout (max 15s)...')

    // Wait for timeout (10s + buffer)
    await page.waitForTimeout(15000)

    // Look for error indicator - check in settings panel
    const errorIcon = settingsPanel.locator('.material-icons').filter({ hasText: 'error' }).first()
    const failedText = settingsPanel.getByText(/failed|fehler|error/i).first()

    const hasErrorIndicator = await errorIcon.isVisible({ timeout: 2000 }).catch(() => false)
    const hasFailedText = await failedText.isVisible({ timeout: 2000 }).catch(() => false)

    // At least one error indicator should be visible
    expect(hasErrorIndicator || hasFailedText).toBe(true)

    console.log('✓ Error indicator shown for failed service')
    console.log('\n✅ ERROR HANDLING TEST PASSED')
  })

  test('should display map centered on Jena', async ({ page }) => {
    console.log('\n=== Testing Initial Map State ===')

    // Verify map is visible
    const mapWidget = page.getByTestId('maps-widget')
    await expect(mapWidget).toBeVisible()

    // Check if Leaflet map is initialized
    const leafletMap = mapWidget.locator('.leaflet-container')
    await expect(leafletMap).toBeVisible()

    // Verify map controls
    const zoomControls = leafletMap.locator('.leaflet-control-zoom')
    await expect(zoomControls).toBeVisible()

    // Check config for Jena coordinates
    const config = await page.evaluate(() => (window as any).getConfig())

    expect(config.center).toEqual([50.9275, 11.5892])
    expect(config.zoom).toBe(13)

    console.log('✓ Map initialized with Jena coordinates')
    console.log(`   Center: [${config.center}]`)
    console.log(`   Zoom: ${config.zoom}`)
    console.log('\n✅ INITIAL STATE TEST PASSED')
  })
})
