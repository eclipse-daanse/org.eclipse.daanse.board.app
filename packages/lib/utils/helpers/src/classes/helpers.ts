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

import { isArray } from 'lodash'

export function extractDataByPath(json: any, path: string) {
  if (!json || path === '') return undefined
  if (path === 'root') return json

  const normalizedPath = path.startsWith('root')
    ? path.substring(4) // Remove 'root'
    : path

  if (normalizedPath === '') return json

  let current = json

  const segments = normalizedPath.startsWith('.')
    ? normalizedPath.substring(1).match(/\[([^\]]*)\]|[^.\[\]]+/g) || []
    : normalizedPath.match(/\[([^\]]*)\]|[^.\[\]]+/g) || []

  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]

    if (current == null) return undefined

    if (segment.startsWith('[') && segment.endsWith(']')) {
      const indexStr = segment.slice(1, -1)
      const index = parseInt(indexStr, 10)

      if (isNaN(index) || index < 0 || !Array.isArray(current)) {
        return undefined
      }

      current = current[index]
    } else {
      current = current[segment]
    }
  }

  return current
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

export function findMaxinArrayByField(
  fieldname: string | string[],
  arraylike: any[],
) {
  try {
    const init = 0
    return arraylike.reduce(
      (accumulator, currentValue, currentIndex, array) => {
        let obj = array[currentIndex]
        if (isArray(fieldname)) {
          for (const name of fieldname) {
            obj = obj[name]
          }
        } else {
          obj = obj[fieldname as string]
        }
        const sint = parseInt(obj)
        return sint > accumulator ? sint : accumulator
      },
      init,
    )
  } catch (e) {
    throw new Error(`${fieldname} not a key`)
  }
}

export function extractValuesAndFullObject(inputString: string): { parts: { text: string; path?: string | null }[] } {
  const parts: { text: string; path?: string | null }[] = [];
  let currentIndex = 0;
  const regex = /\$value(?:\.([a-zA-Z0-9._]+))?/g;
  let match;

  while ((match = regex.exec(inputString)) !== null) {
    const fullMatch = match[0];
    const path = match[1] !== undefined ? match[1] : null;
    const startIndex = match.index;
    const textBefore = inputString.substring(currentIndex, startIndex);

    if (textBefore) {
      parts.push({ text: textBefore });
    }
    parts.push({ text: fullMatch, path });
    currentIndex = startIndex + fullMatch.length;
  }

  const textAfter = inputString.substring(currentIndex);
  if (textAfter) {
    parts.push({ text: textAfter });
  }

  return { parts };
}

export function getValueByPath(obj: any, path: string | null): any {
  if (!path) {
    return obj;
  }
  const keys = path.split('.');
  let current = obj;

  for (const key of keys) {
    if (current && typeof current === 'object' && current.hasOwnProperty(key)) {
      current = current[key];
    } else if (Array.isArray(current) && /^\d+$/.test(key)) {
      const index = parseInt(key, 10);
      if (index >= 0 && index < current.length) {
        current = current[index];
      } else {
        return undefined;
      }
    } else {
      return undefined;
    }
  }
  return current;
}
