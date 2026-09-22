/*
  Copyright (c) 2026 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { expect, type Page, test } from '@playwright/test'
import { open, scrollerHandle, scrollTo, toggle, visibleCellTexts } from './helpers'
import { PivotGenerator } from '../src/generator'
import { scenarios } from '../src/scenarios'

test.setTimeout(30000)

const widgetEvents = (page: Page, name: string) =>
  page.evaluate(
    name => (window as any).__pivot.widgetEvents().filter((e: any) => e.type === `widget:PivotTableWidget:${name}`),
    name,
  )
const datasourceEvents = (page: Page) => page.evaluate(() => (window as any).__pivot.events())

const german = new Intl.NumberFormat('de-DE')
const expectedText = (scenario: string, i: number, j: number) =>
  german.format(Number(new PivotGenerator(scenarios[scenario].spec).build().cells[j][i].FmtValue))

const headerCell = (page: Page, caption: string) =>
  page.locator('.rowMember, .columnMember').filter({ hasText: new RegExp(`^\\s*(chevron_right|expand_more)?\\s*${caption}\\s*$`) }).first()

test.describe('pivot table', () => {
  test('renders headers and formatted cells', async ({ page }) => {
    await open(page, 'edit')
    await expect(headerCell(page, 'Account 0')).toBeVisible()
    await expect(headerCell(page, 'Period 5')).toBeVisible()
    const texts = await visibleCellTexts(page)
    expect(texts[0]).toBe(expectedText('edit', 0, 0))
  })

  test('expands and collapses a row member', async ({ page }) => {
    await open(page, 'edit')
    await toggle(page, 'Account 0', 'chevron_right')
    await expect(headerCell(page, 'Account 0.0')).toBeVisible()
    await expect(headerCell(page, 'Account 0.2')).toBeVisible()
    expect(await widgetEvents(page, 'row_expanded')).toMatchObject([{ payload: { uniqueName: '[Account].[0]' } }])

    await toggle(page, 'Account 0', 'expand_more')
    await expect(headerCell(page, 'Account 0.0')).toHaveCount(0)
    expect(await widgetEvents(page, 'row_collapsed')).toMatchObject([{ payload: { uniqueName: '[Account].[0]' } }])
    expect((await datasourceEvents(page)).map((e: any) => [e.event, e.params.area])).toEqual([
      ['expand', 'rows'],
      ['collapse', 'rows'],
    ])
  })

  test('reports clicks on headers and cells', async ({ page }) => {
    await open(page, 'edit')
    await headerCell(page, 'Account 1').click()
    await headerCell(page, 'Period 2').click()
    expect(await widgetEvents(page, 'row_clicked')).toMatchObject([{ payload: { uniqueName: '[Account].[1]' } }])
    expect(await widgetEvents(page, 'column_clicked')).toMatchObject([{ payload: { uniqueName: '[Period].[2]' } }])

    await page.locator('.cell').filter({ hasText: expectedText('edit', 2, 1) }).first().click()
    expect(await widgetEvents(page, 'cell_clicked')).toMatchObject([
      { payload: { rowId: '[Account].[1]', colId: '[Period].[2]' } },
    ])
  })

  test('opens the cell menu on right click', async ({ page }) => {
    await open(page, 'edit')
    await page.locator('.cell').filter({ hasText: expectedText('edit', 1, 1) }).first().click({ button: 'right' })
    await expect(page.getByText('PivotTable.drillthroughButton')).toBeVisible()
    expect(await widgetEvents(page, 'cell_right_clicked')).toMatchObject([
      { payload: { rowId: '[Account].[1]', colId: '[Period].[1]' } },
    ])
    await page.keyboard.press('Escape')
    await expect(page.getByText('PivotTable.drillthroughButton')).toBeHidden()
  })

  test('opens the member menu on right click', async ({ page }) => {
    await open(page, 'edit')
    await headerCell(page, 'Account 3').click({ button: 'right' })
    await expect(page.getByText('PivotTable.drillDownButton')).toBeVisible()
    expect(await widgetEvents(page, 'row_right_clicked')).toMatchObject([{ payload: { uniqueName: '[Account].[3]' } }])
  })

  test('edits cells in edit mode and moves with tab', async ({ page }) => {
    await open(page, 'edit')
    await page.locator('.edit-mode-btn').click()
    // every second cell of the edit scenario is updateable
    const first = page.locator('input[data-col="0"][data-row="0"]')
    await expect(first).toBeVisible()
    await expect(page.locator('input[data-col="1"][data-row="0"]')).toHaveCount(0)

    await first.fill('42')
    await first.press('Tab')
    await expect(page.locator('input[data-col="2"][data-row="0"]')).toBeFocused()

    const edits = await widgetEvents(page, 'cell_edited')
    expect(edits.length).toBeGreaterThan(0)
    expect(edits[0].payload.value).toBe('42')
    expect(edits[0].payload.query).toBe(
      'UPDATE CUBE [Synthetic] SET  ([Account].[0], [Period].[0])  = 42 USE_EQUAL_ALLOCATION',
    )
    const events = (await datasourceEvents(page)).map((e: any) => e.event)
    expect(events).toContain('beginTransaction')
    expect(events).toContain('cellUpdate')
  })

  test('tab reaches cells outside the rendered window', async ({ page }) => {
    await open(page, 'edit')
    await page.locator('.edit-mode-btn').click()
    // last editable cell of row 0, then wrap to row 1
    await scrollTo(page, 1e6, 0)
    const last = page.locator('input[data-col="10"][data-row="0"]')
    await last.focus()
    await last.press('Tab')
    await expect(page.locator('input[data-col="1"][data-row="1"]')).toBeFocused()
    // Ctrl+Down walks a column to the bottom edge
    for (let k = 0; k < 14; k++) await page.keyboard.press('Control+ArrowDown')
    await expect(page.locator('input[data-col="1"][data-row="29"]')).toBeFocused()
  })

  test('shows the last rows and columns when scrolled to the end', async ({ page }) => {
    await open(page, 'expand')
    await scrollTo(page, 1e6, 1e6)
    await expect(headerCell(page, 'Account 49')).toBeVisible()
    await expect(headerCell(page, 'Period 29')).toBeVisible()
    const texts = await visibleCellTexts(page)
    expect(texts).toContain(expectedText('expand', 29, 49))
  })
})

// Improvements of the refactoring, not true for the original implementation
test.describe('pivot table state across expand', () => {
  test('keeps the scroll position', async ({ page }) => {
    await open(page, 'expand')
    await scrollTo(page, 0, 300)
    const scroller = await scrollerHandle(page)
    const before = await scroller.evaluate(el => el.scrollTop)
    // Account 10 is in view after scrolling 300px
    await toggle(page, 'Account 10', 'chevron_right')
    expect(await scroller.evaluate(el => el.scrollTop)).toBe(before)
    await expect(headerCell(page, 'Account 10.0')).toBeVisible()
  })

  test('keeps a resized column width', async ({ page }) => {
    await open(page, 'edit')
    const header = page.locator('.columnHeader').filter({ hasText: 'Period 0' }).first()
    const box = (await header.boundingBox())!
    await page.mouse.move(box.x + box.width - 1, box.y + 5)
    await page.mouse.down()
    await page.mouse.move(box.x + box.width + 79, box.y + 5, { steps: 5 })
    await page.mouse.up()
    expect(Math.round((await header.boundingBox())!.width)).toBe(Math.round(box.width + 80))

    await toggle(page, 'Account 0', 'chevron_right')
    expect(Math.round((await header.boundingBox())!.width)).toBe(Math.round(box.width + 80))
  })
})
