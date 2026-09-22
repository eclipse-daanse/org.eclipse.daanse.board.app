/*
  Copyright (c) 2026 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

// Performance numbers for the pivot table on synthetic data. Not a pass/fail
// test: it writes perf-results/perf-<label>.json so two runs can be compared.
//   PIVOT_PERF=1 PIVOT_PERF_LABEL=after yarn test:perf
// Every step has a time cap; a step that exceeds it is recorded as null and
// the rest of that scenario is skipped, the page is unresponsive by then.
// PIVOT_QUIET_CONSOLE=1 silences console.log: with the DevTools protocol
// attached Chrome keeps every logged object alive, which costs a lot for
// code that logs whole tables.

import { type Page, test } from '@playwright/test'
import { mkdirSync, writeFileSync } from 'node:fs'
import { open, scrollerHandle, scrollTo, toggle } from './helpers'
import { scenarios } from '../src/scenarios'

test.skip(!process.env.PIVOT_PERF, 'set PIVOT_PERF=1 to run')
test.setTimeout(900000)

const label = process.env.PIVOT_PERF_LABEL ?? 'run'
const CAP = Number(process.env.PIVOT_PERF_CAP ?? 60000)
const results: Record<string, any> = {}

const quietConsole = () => {
  console.log = () => {}
}
test.beforeEach(async ({ page }) => {
  if (process.env.PIVOT_QUIET_CONSOLE) await page.addInitScript(quietConsole)
})

const stats = (values: number[]) => {
  const sorted = [...values].sort((a, b) => a - b)
  const pick = (q: number) => sorted[Math.min(sorted.length - 1, Math.floor(q * sorted.length))]
  return {
    mean: +(values.reduce((a, b) => a + b, 0) / values.length).toFixed(1),
    p50: +pick(0.5).toFixed(1),
    p95: +pick(0.95).toFixed(1),
    max: +sorted[sorted.length - 1].toFixed(1),
  }
}

const memory = (page: Page) =>
  page.evaluate(async () => {
    ;(window as any).gc?.()
    await (window as any).__pivot.frames(2)
    ;(window as any).gc?.()
    return {
      heapMB: +((performance as any).memory.usedJSHeapSize / 1048576).toFixed(1),
      domNodes: document.getElementsByTagName('*').length,
    }
  })

// Scrolls one step per frame and records how long each frame took, for at
// most `steps` frames or `budget` ms
const scrollRun = async (page: Page, dx: number, dy: number, steps = 150, budget = 20000) => {
  const scroller = await scrollerHandle(page)
  const deltas = await scroller.evaluate(
    (el, { dx, dy, steps, budget }) =>
      new Promise<number[]>(resolve => {
        const deltas: number[] = []
        const t0 = performance.now()
        let last = t0
        let n = 0
        const step = () => {
          const now = performance.now()
          if (n > 0) deltas.push(now - last)
          last = now
          if (n++ >= steps || now - t0 > budget) return resolve(deltas)
          const maxLeft = el.scrollWidth - el.clientWidth
          const maxTop = el.scrollHeight - el.clientHeight
          el.scrollLeft = dx && el.scrollLeft + dx > maxLeft ? 0 : el.scrollLeft + dx
          el.scrollTop = dy && el.scrollTop + dy > maxTop ? 0 : el.scrollTop + dy
          requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }),
    { dx, dy, steps, budget },
  )
  return {
    ...stats(deltas),
    longFrames: deltas.filter(d => d > 50).length,
    frames: deltas.length,
  }
}

// '[Region].[0.3]' -> 'Region 0.3', the caption PivotGenerator gives that member
const captionOf = (uName: string) => uName.slice(1, -1).split('].[').join(' ')

const withCap = <T>(promise: Promise<T>) =>
  Promise.race([promise, new Promise<null>(resolve => setTimeout(() => resolve(null), CAP))])

for (const name of ['tall', 'wide', 'formats', 'expand']) {
  test(`perf ${name}`, async ({ page }) => {
    const scenario = scenarios[name]
    const result: Record<string, any> = {}
    results[name] = result

    const first = await open(page, name, CAP)
    if (first === null) {
      result.firstRender = null
      return
    }
    const renders = [first]
    // repeat only while it is cheap enough
    if (first < 10000) for (let k = 0; k < 2; k++) renders.push((await open(page, name, CAP))!)
    result.firstRender = stats(renders)

    result.scrollVertical = await scrollRun(page, 0, 240)
    result.scrollHorizontal = await scrollRun(page, 300, 0)
    result.scrollDiagonal = await scrollRun(page, 150, 120)

    if (!scenario.toggle) return
    const caption = captionOf(scenario.toggle.uName)
    await scrollTo(page, 0, 0)
    result.memoryBefore = await memory(page)
    const expand: number[] = []
    const collapse: number[] = []
    for (let k = 0; k < 10; k++) {
      const e = await withCap(toggle(page, caption, 'chevron_right'))
      const c = e === null ? null : await withCap(toggle(page, caption, 'expand_more'))
      if (e === null || c === null) {
        result.toggleTimedOutAfter = k
        break
      }
      expand.push(e)
      collapse.push(c)
    }
    if (expand.length) {
      result.expand = stats(expand)
      result.collapse = stats(collapse)
    }
    if (result.toggleTimedOutAfter !== undefined) return
    result.memoryAfter20Toggles = await memory(page)

    // scrolling with the member expanded
    await toggle(page, caption, 'chevron_right')
    result.scrollExpanded = await scrollRun(page, 60, 180)
  })
}

// First render of a plain rows x 20 table, growing until a size exceeds the cap
test('perf scale', async ({ browser }) => {
  const scale: Record<string, number | null> = {}
  results.scale = scale
  const { baseURL, viewport } = test.info().project.use
  for (const rows of [500, 1000, 2000, 5000, 10000, 50000]) {
    // a fresh context each time, a page stuck in a render cannot navigate
    const context = await browser.newContext({ baseURL, viewport })
    if (process.env.PIVOT_QUIET_CONSOLE) await context.addInitScript(quietConsole)
    const ms = await open(await context.newPage(), `rows=${rows}&columns=20`, CAP)
    scale[`${rows}x20`] = ms === null ? null : +ms.toFixed(1)
    await context.close()
    if (ms === null) break
  }
})

test.afterAll(() => {
  // not test-results/, Playwright empties that one on every run
  mkdirSync('perf-results', { recursive: true })
  writeFileSync(`perf-results/perf-${label}.json`, JSON.stringify(results, null, 2))
})
