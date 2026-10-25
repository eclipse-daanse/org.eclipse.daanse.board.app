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
 * One Discover row as the properties dialog lists it: a line per column,
 * the value as people read it.
 */

import { dataTypeName } from 'org.eclipse.daanse.board.app.ui.vue.common.xmla'

export interface RowColumn {
  key: string
  value: string
  /** A nested rowset, shown as its JSON. */
  nested: boolean
}

/*
 * An empty element arrives as an object with nothing in it but, at most,
 * its attributes: no value, so nothing to show - not "{}".
 */
function isEmptyNode(value: object): boolean {
  return Object.keys(value).every(key => key === '__attrs')
}

export function rowColumns(row: Record<string, unknown>): RowColumn[] {
  return Object.entries(row)
    .filter(([key]) => key !== '__attrs')
    .map(([key, value]) => {
      if (value !== null && typeof value === 'object') {
        if (isEmptyNode(value)) return { key, value: '', nested: false }
        return { key, value: JSON.stringify(value, null, 2), nested: true }
      }
      const text = String(value ?? '')
      // An OLE DB type indicator - 130 is a Unicode string, 5 a double: named, with the code kept.
      if (key === 'DATA_TYPE') {
        const name = dataTypeName(text)
        return { key, value: name && name !== text ? `${name} (${text})` : text, nested: false }
      }
      return { key, value: text, nested: false }
    })
}
