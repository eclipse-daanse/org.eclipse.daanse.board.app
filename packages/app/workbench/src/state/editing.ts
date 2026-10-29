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
/*
 * The cube in use, handed to the editor: the MDX package's completion,
 * hover and highlighting read it through a source, and members below the
 * ones loaded are asked from the server as completion reaches them.
 */

import { computed } from 'vue'
import { mdxMetadata, type MdxMetadataItem, type MdxMetadataSource } from 'org.eclipse.daanse.board.app.lib.lsp.lang.mdx'
import { signatureOf } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla'
import { entriesOf } from './metadata'
import type { Workbench } from './workbench'

/* MDSCHEMA_MEMBERS TREE_OP: the children of the named member. */
const CHILDREN = 1

/* Where a member sits, for its alternatives: the level and the parent MDSCHEMA_MEMBERS gives. */
function placeOf(row: any): { level?: string; parent?: string } {
  const text = (value: unknown) => (typeof value === 'string' && value ? value : undefined)
  return { level: text(row?.LEVEL_UNIQUE_NAME), parent: text(row?.PARENT_UNIQUE_NAME) }
}

export function useMetadataEditing(wb: Workbench) {
  const items = computed<MdxMetadataItem[]>(() =>
    entriesOf(wb.metadata.value).map(e => ({ uniqueName: e.uniqueName, caption: e.caption, kind: e.kind, description: e.description, ...placeOf(e.row) })),
  )
  const kinds = computed(() => new Map(items.value.map(item => [item.uniqueName.toLowerCase(), item.kind])))
  const cubes = computed<MdxMetadataItem[]>(() =>
    wb.cubes.value.map(row => ({
      uniqueName: `[${String(row.CUBE_NAME).replace(/]/g, ']]')}]`,
      caption: String(row.CUBE_CAPTION || row.CUBE_NAME),
      kind: 'cube',
      description: typeof row.DESCRIPTION === 'string' ? row.DESCRIPTION : undefined,
    })),
  )
  const functions = computed(() =>
    wb.metadata.value.functions.map(row => ({
      name: String(row.FUNCTION_NAME ?? ''),
      signature: signatureOf(row),
      description: typeof row.DESCRIPTION === 'string' ? row.DESCRIPTION : undefined,
    })),
  )

  const source: MdxMetadataSource = {
    items: () => items.value,
    cubes: () => cubes.value,
    functions: () => functions.value,
    version: () => wb.generation.value * 100000 + items.value.length,
    async children(prefix: string) {
      const kind = kinds.value.get(prefix.toLowerCase())
      const restrictions =
        kind === 'level'
          ? { LEVEL_UNIQUE_NAME: prefix }
          : kind === 'member'
            ? { MEMBER_UNIQUE_NAME: prefix, TREE_OP: CHILDREN }
            : kind === 'hierarchy'
              ? { HIERARCHY_UNIQUE_NAME: prefix, LEVEL_NUMBER: 0 }
              : null
      if (!restrictions) return []
      const rows = await wb.membersOf(restrictions)
      return rows.map(row => ({
        uniqueName: String(row.MEMBER_UNIQUE_NAME),
        caption: String(row.MEMBER_CAPTION || row.MEMBER_NAME || row.MEMBER_UNIQUE_NAME),
        kind: 'member' as const,
        ...placeOf(row),
      }))
    },
  }
  return [mdxMetadata(source)]
}
