/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { isArray } from 'lodash'

export function useUtils() {

  const isPoint = (point: any) => {
    if (!point) return false
    if (!point.type) return false
    if (point.type !== 'Point') return false
    if (!point.coordinates || !isArray(point.coordinates) || point.coordinates.length < 2) return false

    return true
  }
  const isFeature = (point: any) => {
    if (!point) return false
    if (!point.type) return false
    if (point.type !== 'Feature') return false

    return true
  }

  const isFeatureCollection = (point: any) => {
    if (!point) return false
    if (!point.type) return false
    if (point.type !== 'FeatureCollection') return false

    return true
  }

  const transformToGeoJson = (geom: any) => {
    if (!geom) return null
    if (geom.type == 'Feature' || geom.type == 'FeatureCollection') return geom
    if (['Polygon', 'MultiPolygon', 'Line', 'MultiLine', 'Point', 'MultiPoint'].includes(geom.type)) {
      const res = {
        'type': 'Feature',
        'properties': {}, geometry: geom
      }
      return res
    }
    return null

  }

  return {
    isFeature,
    isFeatureCollection,
    isPoint,
    transformToGeoJson
  }
}
