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
