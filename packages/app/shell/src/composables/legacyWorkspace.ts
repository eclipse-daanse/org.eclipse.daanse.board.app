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
 * Reading a workspace stored before it was modelled.
 *
 * The old payload was written with `flatted`, which encodes an object graph
 * as an array of parts. It needed flatted because the payload carried the
 * Vue components of a page's layout, and those refer back to themselves.
 *
 * Everything here reads the old shape and builds the model from it. Nothing
 * writes it: a workspace opened this way is written back as a resource, and
 * this file is only ever needed once per stored board.
 */

import { parse } from 'flatted'
import {
  ConnectionImpl,
  DatasourceImpl,
  EventMappingImpl,
  LayoutItemImpl,
  PageImpl,
  VariableImpl,
  WidgetImpl,
  WorkspaceImpl,
  type Connection,
  type Datasource,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'

/** The old format, as far as anything here reads it. */
interface LegacyWorkspace {
  /** Misspelled in every board ever stored, and therefore kept. */
  conections?: Array<{ uid: string; name: string; type: string; config?: Record<string, unknown> }>
  datasources?: Array<{ uid: string; name: string; type: string; config?: Record<string, unknown> }>
  variables?: Array<Record<string, unknown>>
  eventMappings?: Array<Record<string, unknown>>
  pages?: Record<string, { info?: any; widgets?: any[]; layout?: any[] }>
}

/**
 * Decodes stored content into a plain object.
 *
 * Three shapes arrive here. A flatted string, which is an array at the top
 * level - that is what a board written before this was stored as. A plain
 * JSON string. And an object, because a repository may have decoded it
 * already: the local one un-flattens on read, so what a caller passes on
 * is neither of the strings.
 */
export function decodeStored(content: unknown): Record<string, any> | undefined {
  if (!content) return undefined
  if (typeof content === 'object') return content as Record<string, any>
  if (typeof content !== 'string') return undefined

  try {
    const data = JSON.parse(content)
    return Array.isArray(data) ? (parse(content) as Record<string, any>) : data
  } catch {
    return undefined
  }
}

/** Whether a decoded object is a resource rather than the old shape. */
export function isResource(data: Record<string, any>): boolean {
  return typeof data.eClass === 'string'
}

export function readLegacyWorkspace(data: LegacyWorkspace): Workspace | undefined {
  if (!data || typeof data !== 'object') return undefined

  const workspace = new WorkspaceImpl()

  const byUid = new Map<string, Connection>()
  for (const entry of data.conections ?? []) {
    const connection = new ConnectionImpl()
    connection.uid = entry.uid
    connection.name = entry.name
    connection.type = entry.type
    connection.config = entry.config ?? {}
    workspace.connections.push(connection)
    byUid.set(entry.uid, connection)
  }

  const sources = new Map<string, Datasource>()
  for (const entry of data.datasources ?? []) {
    const source = new DatasourceImpl()
    source.uid = entry.uid
    source.name = entry.name
    source.type = entry.type
    source.config = entry.config ?? {}
    /* The id in the configuration becomes the reference it always meant. */
    const through = byUid.get((entry.config ?? {})['connection'] as string)
    if (through) source.connection = through
    workspace.datasources.push(source)
    sources.set(entry.uid, source)
  }

  /*
   * A stored variable carried its whole serialised self in one bag, with
   * the scope and the board it belongs to among the rest. Those are the
   * model's own features now, so they are lifted out of the bag here - the
   * only place an old file is read.
   */
  const variables: Array<{ entry: Record<string, unknown>; variable: VariableImpl }> = []
  for (const entry of data.variables ?? []) {
    const variable = new VariableImpl()
    variable.uid = (entry['id'] ?? entry['uid'] ?? Math.random().toString(36).substring(7)) as string
    variable.name = entry['name'] as string
    variable.type = entry['type'] as string
    variable.scope = (entry['scope'] as string) ?? 'global'
    variable.accessMode = (entry['accessMode'] as string) ?? 'external-writable'
    variable.definition = entry
    workspace.variables.push(variable)
    variables.push({ entry, variable })
  }

  for (const entry of data.eventMappings ?? []) {
    const mapping = new EventMappingImpl()
    mapping.id = entry['id'] as string
    mapping.definition = entry
    workspace.eventMappings.push(mapping)
  }

  for (const [id, stored] of Object.entries(data.pages ?? {})) {
    const info = stored?.info ?? {}
    const page = new PageImpl()
    page.id = info.id ?? id
    page.name = info.name ?? 'Seite'
    page.description = info.description
    page.icon = info.icon
    page.visibleInNavigation = info.visibleInNavigation ?? true
    /*
     * A board stored before the layout became an id carries the whole
     * layout object, Vue components and all. Only its id is of any use.
     */
    page.layoutId =
      info.layoutId ?? info.layout?.id ?? 'org.eclipse.daanse.board.app.ui.vue.layouts.base'
    page.layoutSettings = info.layoutSettings
    page.backgroundColor = info.backgroundColor
    page.backgroundImage = info.backgroundImage
    page.backgroundSize = info.backgroundSize
    page.backgroundPosition = info.backgroundPosition
    page.backgroundRepeat = info.backgroundRepeat

    for (const stored_widget of stored?.widgets ?? []) {
      const widget = new WidgetImpl()
      widget.uid = stored_widget.uid
      widget.type = stored_widget.type
      widget.config = stored_widget.config ?? {}
      widget.wrapperConfig = stored_widget.wrapperConfig ?? {}
      const reads = sources.get(stored_widget.config?.datasourceId)
      if (reads) widget.datasource = reads
      page.widgets.push(widget)
    }

    for (const stored_item of stored?.layout ?? []) {
      const item = new LayoutItemImpl()
      item.id = stored_item.id
      item.x = stored_item.x ?? 0
      item.y = stored_item.y ?? 0
      item.z = stored_item.z ?? 0
      item.width = stored_item.width ?? 300
      item.height = stored_item.height ?? 150
      item.group = stored_item.group
      page.layout.push(item)
    }

    workspace.pages.push(page)
  }

  /* Now that the boards exist, a page variable can point at the one it names. */
  for (const { entry, variable } of variables) {
    const pageId = entry['pageId'] as string | undefined
    if (!pageId) continue
    variable.page = workspace.pages.toArray().find((page) => page.id === pageId)
  }

  if (workspace.pages.size() > 0) workspace.defaultPage = workspace.pages.get(0)

  return workspace
}
