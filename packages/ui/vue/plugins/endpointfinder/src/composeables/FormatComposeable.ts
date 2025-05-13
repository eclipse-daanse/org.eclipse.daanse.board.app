/**
  Copyright (c) 2025 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena
 */
import { Formats } from '../queryBuilder/FilterAPI'

export function useFormat() {

  const colorMap: { [key: string]: string } = {}
  colorMap[Formats.WMS] = '#2c1f90'
  colorMap[Formats.OGCSTA] = '#1f908c'
  colorMap[Formats.XMLA] = '#45901f'
  colorMap[Formats.CSV] = '#90301f'
  colorMap[Formats.JSON] = '#7f1f90'


  const getColorForFormat = (format: string) => {
    if (!Object.keys(colorMap).includes(format)) return '#ccc'
    return colorMap[format]
  }

  return {
    getColorForFormat
  }
}
