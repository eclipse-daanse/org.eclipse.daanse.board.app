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

import { describe, expect, it } from 'vitest'
import { JSONResource, OPTION_INDENT, URI } from '@emfts/core'
import {
  FilterOperator,
  SelectionPick,
  WorkspaceFactory,
  type Widget,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { parseWorkspace } from './useWorkspaceFile'

/*
 * A widget's data selection (#1216) is a setting of the widget, not a
 * state of the dialog it is edited in - so it has to come back from a
 * stored board exactly as it went in.
 *
 * Written and read the way the shell writes and reads a board: through a
 * JSONResource on the way out, through parseWorkspace on the way in.
 */

const factory = () => WorkspaceFactory.eINSTANCE

function boardWith(configure: (widget: Widget) => void): Workspace {
  const workspace = factory().createWorkspace()
  const board = factory().createBoard()
  const page = factory().createPage()
  const widget = factory().createWidget()
  widget.uid = 'w1'
  widget.type = 'TextWidget'
  configure(widget)
  page.widgets.push(widget)
  board.pages.push(page)
  workspace.board = board
  return workspace
}

function stored(workspace: Workspace): string {
  const resource = new JSONResource(URI.createURI('workspace.json'))
  resource.getContents().add(workspace)
  const text = resource.saveToString(new Map<string, unknown>([[OPTION_INDENT, 2]]))
  resource.getContents().clear()
  return text
}

function reopened(workspace: Workspace): Widget {
  const loaded = parseWorkspace(stored(workspace))
  expect(loaded).toBeDefined()
  return loaded!.board!.pages.get(0).widgets.get(0)
}

describe('a widget data selection', () => {
  it('comes back from a stored board as it went in', () => {
    const widget = reopened(
      boardWith((widget) => {
        const selection = factory().createDataSelection()
        selection.path = 'readings.0.items'
        selection.pick = SelectionPick.INDEX
        selection.index = 2
        selection.fields.push('name', 'value')
        const filter = factory().createDataFilter()
        filter.field = 'type'
        filter.operator = FilterOperator.NOT_EQUALS
        filter.value = 'humidity'
        selection.filters.push(filter)
        widget.selection = selection
      }),
    )

    const selection = widget.selection!
    expect(selection).toBeDefined()
    expect(selection.path).toBe('readings.0.items')
    expect(selection.pick).toBe(SelectionPick.INDEX)
    expect(selection.index).toBe(2)
    expect(selection.fields.toArray()).toEqual(['name', 'value'])
    expect(selection.filters.size()).toBe(1)
    const filter = selection.filters.get(0)
    expect(filter.field).toBe('type')
    expect(filter.operator).toBe(FilterOperator.NOT_EQUALS)
    expect(filter.value).toBe('humidity')
  })

  /* Contained, not copied: the loaded selection belongs to the loaded widget. */
  it('is contained in the widget it was loaded with', () => {
    const widget = reopened(
      boardWith((widget) => {
        widget.selection = factory().createDataSelection()
      }),
    )

    expect(widget.selection!.eContainer()).toBe(widget)
  })

  /* Every board stored before #1216: no selection, the whole answer. */
  it('is absent from a board that never had one', () => {
    const widget = reopened(boardWith(() => {}))

    expect(widget.selection).toBeFalsy()
  })
})
