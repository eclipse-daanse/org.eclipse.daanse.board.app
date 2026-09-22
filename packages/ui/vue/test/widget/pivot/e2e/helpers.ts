/*
  Copyright (c) 2026 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import type { Page } from '@playwright/test'

// Loads a scenario (a name, or a query such as 'rows=100&columns=10') and
// returns how long the first render took; null when it exceeded `cap` ms
export const open = async (page: Page, scenario: string, cap = Infinity) => {
  await page.goto(scenario.includes('=') ? `/?${scenario}` : `/?scenario=${scenario}`)
  await page.waitForFunction(() => (window as any).__pivot)
  const render = page.evaluate(() => (window as any).__pivot.start() as Promise<number>)
  if (cap === Infinity) return render
  render.catch(() => {})
  return Promise.race([render, new Promise<null>(resolve => setTimeout(() => resolve(null), cap))])
}

// The member's expand/collapse icon, found by the caption next to it
export const toggleIcon = (page: Page, caption: string, icon: 'chevron_right' | 'expand_more') =>
  page.evaluateHandle(
    ({ caption, icon }) => {
      for (const wrapper of document.querySelectorAll('.expandIcon')) {
        const iconEl = wrapper.querySelector('.va-icon') as HTMLElement | null
        if (!iconEl || iconEl.textContent?.trim() !== icon) continue
        const text = wrapper.parentElement?.textContent?.replace(iconEl.textContent ?? '', '').trim()
        if (text === caption) return iconEl
      }
      return null
    },
    { caption, icon },
  )

// Clicks the icon and resolves once the datasource answered and the result was painted
export const toggle = async (page: Page, caption: string, icon: 'chevron_right' | 'expand_more') => {
  const handle = await toggleIcon(page, caption, icon)
  if (!(await handle.evaluate(el => !!el))) throw new Error(`No ${icon} icon next to "${caption}"`)
  return page.evaluate(el => (window as any).__pivot.clickAndWait(el) as Promise<number>, handle)
}

// The element that actually scrolls the cells
export const scrollerHandle = (page: Page) =>
  page.evaluateHandle(() => {
    let best: HTMLElement | null = null
    let bestRange = 0
    for (const el of document.querySelectorAll<HTMLElement>('[data-testid="widget-panel"] *')) {
      const style = getComputedStyle(el)
      if (!/(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY)) continue
      const range = el.scrollHeight - el.clientHeight + el.scrollWidth - el.clientWidth
      if (range > bestRange) {
        best = el
        bestRange = range
      }
    }
    return best!
  })

export const scrollTo = async (page: Page, left: number, top: number) => {
  const scroller = await scrollerHandle(page)
  await scroller.evaluate(
    async (el, { left, top }) => {
      el.scrollLeft = left
      el.scrollTop = top
      await (window as any).__pivot.frames(3)
    },
    { left, top },
  )
}

export const visibleCellTexts = (page: Page) =>
  page.evaluate(() => {
    const panel = document.querySelector('[data-testid="widget-panel"]')!.getBoundingClientRect()
    return [...document.querySelectorAll<HTMLElement>('.cell')]
      .filter(el => {
        const r = el.getBoundingClientRect()
        return r.width > 0 && r.right > panel.left && r.left < panel.right && r.bottom > panel.top && r.top < panel.bottom
      })
      .map(el => el.textContent?.trim())
  })
