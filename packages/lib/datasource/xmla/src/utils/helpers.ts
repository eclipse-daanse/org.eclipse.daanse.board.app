/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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

export function extractDataByPath(data: any, path: string) {
  if (!data) return
  if (path === 'root') return data
  const keys = path.replace('root.', '').split('.')
  let currentValue = data

  for (const key of keys) {
    if (key.includes('[') && key.includes(']')) {
      const [arrayKey, index] = key.replace(']', '').split('[')
      if (index === '' || isNaN(Number(index)) || Number(index) < 0) return
      currentValue = currentValue[arrayKey]
      currentValue = Array.isArray(currentValue)
        ? currentValue[Number(index)]
        : null
    } else {
      currentValue = currentValue[key]
    }

    if (currentValue == null) break
  }

  return currentValue
}

export function optionalArrayToArray(el: any): any[] {
  if (Array.isArray(el)) return el
  if (el) {
    return [el]
  }
  return []
}

export function transposeArray(array: any[][]): any[][] {
  return array[0].map((_, colIndex) => array.map(row => row[colIndex]))
}

export function findMaxInArrayByField(
  fieldPath: string | string[],
  array: any[],
): number {
  try {
    return array.reduce((maxValue, currentItem) => {
      let fieldValue = currentItem

      if (Array.isArray(fieldPath)) {
        for (const key of fieldPath) {
          fieldValue = fieldValue[key]
        }
      } else {
        fieldValue = fieldValue[fieldPath]
      }

      const numericValue = parseInt(fieldValue, 10)
      return numericValue > maxValue ? numericValue : maxValue
    }, 0)
  } catch (error) {
    const pathDescription = Array.isArray(fieldPath)
      ? fieldPath.join('.')
      : fieldPath

    throw new Error(
      `Cannot find field path "${pathDescription}" in array elements`,
    )
  }
}

/**
 * The name of a set or member a generated query defines, the same every
 * time the same query is built. A random name made each build a new
 * statement, which no request coalescing and no server cache can match.
 */
export function stableId(...parts: unknown[]): string {
  const text = JSON.stringify(parts)
  let hash = 0x811c9dc5
  for (let i = 0; i < text.length; i++) {
    hash ^= text.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193)
  }
  return 'id' + (hash >>> 0).toString(16)
}

/** What a filter selects, by member - the part of it a query depends on. */
export function filterKey(filter: any) {
  return {
    multiple: !!filter?.multipleChoise,
    all: !!filter?.selectAll,
    selected: (filter?.selectedItems ?? []).map((e: any) => e?.UName),
    deselected: (filter?.deselectedItems ?? []).map((e: any) => e?.UName),
    single: filter?.selectedItem?.UName,
  }
}
