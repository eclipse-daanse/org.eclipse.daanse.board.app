/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

/**
 * Undo and redo have to be each other's opposite.
 *
 * The case that made this file: a drag sets x a hundred times, and
 * redoing it put the widget where it stood after the first of those
 * hundred rather than the last.
 */
import { describe, expect, it } from 'vitest'
import { effectScope } from 'vue'
import { LayoutItemImpl, PageImpl, WidgetImpl } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { useHistory } from './useHistory'

function aPage() {
  const page = new PageImpl()
  page.id = 'p1'
  page.name = 'Seite'

  const item = new LayoutItemImpl()
  item.id = 'w1'
  item.x = 0
  item.y = 0
  item.z = 1
  item.width = 300
  item.height = 150
  page.layout.push(item)

  return { page, item }
}

/** The composable attaches on a watcher, so it runs inside a scope. */
function withHistory<T>(page: PageImpl, run: (history: ReturnType<typeof useHistory>) => T): T {
  const scope = effectScope()
  try {
    return scope.run(() => run(useHistory(() => page)))!
  } finally {
    scope.stop()
  }
}

describe('useHistory', () => {
  it('takes a drag back and puts it forward again', () => {
    const { page, item } = aPage()

    withHistory(page, (history) => {
      history.begin('Widget verschoben')
      /* Every pixel, the way Moveable reports one */
      for (let step = 1; step <= 100; step += 1) {
        item.x = step
        item.y = step * 2
      }
      history.end()

      expect([item.x, item.y]).toEqual([100, 200])

      history.undo()
      expect([item.x, item.y]).toEqual([0, 0])

      history.redo()
      expect([item.x, item.y]).toEqual([100, 200])

      /* And again, because once is not a round trip */
      history.undo()
      expect([item.x, item.y]).toEqual([0, 0])
      history.redo()
      expect([item.x, item.y]).toEqual([100, 200])
    })
  })

  it('keeps one change per feature in a step', () => {
    const { page, item } = aPage()

    withHistory(page, (history) => {
      history.begin('Widget verschoben')
      for (let step = 1; step <= 50; step += 1) item.x = step
      history.end()

      expect(history.canUndo.value).toBe(true)
      history.undo()
      expect(item.x).toBe(0)
    })
  })

  it('takes a widget back that was added, and adds it again', () => {
    const { page } = aPage()

    withHistory(page, (history) => {
      history.record('Widget hinzugefügt', () => {
        const widget = new WidgetImpl()
        widget.uid = 'w2'
        widget.type = 'Text'
        page.widgets.push(widget)

        const item = new LayoutItemImpl()
        item.id = 'w2'
        item.x = 10
        item.y = 10
        item.z = 2
        item.width = 100
        item.height = 100
        page.layout.push(item)
      })

      expect(page.widgets.size()).toBe(1)
      expect(page.layout.size()).toBe(2)

      history.undo()
      expect(page.widgets.size()).toBe(0)
      expect(page.layout.size()).toBe(1)

      history.redo()
      expect(page.widgets.size()).toBe(1)
      expect(page.layout.size()).toBe(2)
      expect(page.widgets.get(0).uid).toBe('w2')
    })
  })

  it('takes a removed widget back to where it stood', () => {
    const { page, item } = aPage()

    withHistory(page, (history) => {
      const second = new LayoutItemImpl()
      second.id = 'w2'
      second.x = 5
      second.y = 5
      second.z = 2
      second.width = 50
      second.height = 50
      history.record('Widget hinzugefügt', () => page.layout.push(second))

      history.record('Widget gelöscht', () => page.layout.removeAt(0))
      expect(page.layout.size()).toBe(1)
      expect(page.layout.get(0).id).toBe('w2')

      history.undo()
      expect(page.layout.size()).toBe(2)
      /* Back in its place, not appended */
      expect(page.layout.get(0).id).toBe(item.id)
    })
  })

  it('forgets the future once something new is done', () => {
    const { page, item } = aPage()

    withHistory(page, (history) => {
      history.record('eins', () => { item.x = 10 })
      history.undo()
      expect(history.canRedo.value).toBe(true)

      history.record('zwei', () => { item.x = 20 })
      expect(history.canRedo.value).toBe(false)
      expect(item.x).toBe(20)
    })
  })
})
