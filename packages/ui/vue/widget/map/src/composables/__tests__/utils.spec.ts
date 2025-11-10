/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { describe, it, expect } from 'vitest'
import { useUtils } from '../utils'

describe('useUtils', () => {
  const { isPoint, isFeatureCollection, isFeature, transformToGeoJson } = useUtils()

  describe('isPoint', () => {
    it('should identify Point geometry', () => {
      const point = {
        type: 'Point',
        coordinates: [10, 20]
      }
      expect(isPoint(point)).toBe(true)
    })

    it('should reject non-Point geometry', () => {
      const polygon = {
        type: 'Polygon',
        coordinates: [[[0, 0], [1, 1], [1, 0], [0, 0]]]
      }
      expect(isPoint(polygon)).toBe(false)
    })

    it('should handle null/undefined', () => {
      expect(isPoint(null)).toBe(false)
      expect(isPoint(undefined)).toBe(false)
    })
  })

  describe('isFeatureCollection', () => {
    it('should identify FeatureCollection', () => {
      const fc = {
        type: 'FeatureCollection',
        features: []
      }
      expect(isFeatureCollection(fc)).toBe(true)
    })

    it('should reject non-FeatureCollection', () => {
      const feature = {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [0, 0] }
      }
      expect(isFeatureCollection(feature)).toBe(false)
    })

    it('should handle null/undefined', () => {
      expect(isFeatureCollection(null)).toBe(false)
      expect(isFeatureCollection(undefined)).toBe(false)
    })
  })

  describe('isFeature', () => {
    it('should identify Feature', () => {
      const feature = {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [0, 0] },
        properties: {}
      }
      expect(isFeature(feature)).toBe(true)
    })

    it('should reject non-Feature', () => {
      const point = {
        type: 'Point',
        coordinates: [0, 0]
      }
      expect(isFeature(point)).toBe(false)
    })

    it('should handle null/undefined', () => {
      expect(isFeature(null)).toBe(false)
      expect(isFeature(undefined)).toBe(false)
    })
  })

  describe('transformToGeoJson', () => {
    it('should wrap Point in Feature', () => {
      const point = {
        type: 'Point',
        coordinates: [10, 20]
      }
      const result = transformToGeoJson(point)
      expect(result.type).toBe('Feature')
      expect(result.geometry).toEqual(point)
      expect(result.properties).toEqual({})
    })

    it('should wrap Polygon in Feature', () => {
      const polygon = {
        type: 'Polygon',
        coordinates: [[[0, 0], [1, 1], [1, 0], [0, 0]]]
      }
      const result = transformToGeoJson(polygon)
      expect(result.type).toBe('Feature')
      expect(result.geometry).toEqual(polygon)
    })

    it('should return Feature as-is', () => {
      const feature = {
        type: 'Feature',
        geometry: { type: 'Point', coordinates: [0, 0] },
        properties: { name: 'Test' }
      }
      const result = transformToGeoJson(feature)
      expect(result).toEqual(feature)
    })

    it('should return FeatureCollection as-is', () => {
      const fc = {
        type: 'FeatureCollection',
        features: []
      }
      const result = transformToGeoJson(fc)
      expect(result).toEqual(fc)
    })

    it('should handle null/undefined', () => {
      expect(transformToGeoJson(null)).toBeNull()
      expect(transformToGeoJson(undefined)).toBeNull()
    })
  })
})
