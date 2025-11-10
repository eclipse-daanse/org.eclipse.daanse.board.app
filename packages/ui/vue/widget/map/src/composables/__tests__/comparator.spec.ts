/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { describe, it, expect } from 'vitest'
import { useComparator } from '../comparator'
import { Comperator } from '../../gen/Comperator'

describe('useComparator', () => {
  const { compareDatastream, compareThing, filterFeatureCollection } = useComparator()

  describe('compareThing', () => {
    it('should return false for renderer without thing conditions', () => {
      const thing: any = { name: 'Test Thing' }
      const renderer: any = { thing: [] }

      expect(compareThing(thing, renderer)).toBe(false)
    })

    it('should return false for null thing', () => {
      const renderer: any = {
        thing: [{ prop: 'name', value: 'test', comperator: Comperator.eq }]
      }

      expect(compareThing(null as any, renderer)).toBe(false)
    })

    it('should match wildcard condition', () => {
      const thing: any = { name: 'Test Thing' }
      const renderer: any = {
        thing: [{ prop: 'name', value: '*', comperator: Comperator.eq }]
      }

      expect(compareThing(thing, renderer)).toBe(true)
    })

    it('should match equal condition', () => {
      const thing: any = { status: 'active' }
      const renderer: any = {
        thing: [{ prop: 'status', value: 'active', comperator: Comperator.eq }]
      }

      expect(compareThing(thing, renderer)).toBe(true)
    })

    it('should fail non-matching condition', () => {
      const thing: any = { status: 'inactive' }
      const renderer: any = {
        thing: [{ prop: 'status', value: 'active', comperator: Comperator.eq }]
      }

      expect(compareThing(thing, renderer)).toBe(false)
    })

    it('should handle multiple conditions (AND)', () => {
      const thing: any = { status: 'active', type: 'sensor' }
      const renderer: any = {
        thing: [
          { prop: 'status', value: 'active', comperator: Comperator.eq },
          { prop: 'type', value: 'sensor', comperator: Comperator.eq }
        ]
      }

      expect(compareThing(thing, renderer)).toBe(true)
    })

    it('should fail if one condition fails', () => {
      const thing: any = { status: 'active', type: 'actuator' }
      const renderer: any = {
        thing: [
          { prop: 'status', value: 'active', comperator: Comperator.eq },
          { prop: 'type', value: 'sensor', comperator: Comperator.eq }
        ]
      }

      expect(compareThing(thing, renderer)).toBe(false)
    })
  })

  describe('compareDatastream', () => {
    it('should return false for renderer without datastream conditions', () => {
      const datastream: any = { name: 'Temperature' }
      const renderer: any = { datastream: [] }

      expect(compareDatastream(datastream, renderer)).toBe(false)
    })

    it('should return false for null datastream', () => {
      const renderer: any = {
        datastream: [{ prop: 'name', value: 'Temperature', comperator: Comperator.eq }]
      }

      expect(compareDatastream(null as any, renderer)).toBe(false)
    })

    it('should match wildcard condition', () => {
      const datastream: any = { name: 'Temperature' }
      const renderer: any = {
        datastream: [{ prop: 'name', value: '*', comperator: Comperator.eq }]
      }

      expect(compareDatastream(datastream, renderer)).toBe(true)
    })

    it('should match equal condition', () => {
      const datastream: any = { unitOfMeasurement: { symbol: '°C' } }
      const renderer: any = {
        datastream: [{ prop: 'unitOfMeasurement.symbol', value: '°C', comperator: Comperator.eq }]
      }

      expect(compareDatastream(datastream, renderer)).toBe(true)
    })

    it('should handle multiple conditions', () => {
      const datastream: any = {
        name: 'Temperature',
        unitOfMeasurement: { symbol: '°C' }
      }
      const renderer: any = {
        datastream: [
          { prop: 'name', value: 'Temperature', comperator: Comperator.eq },
          { prop: 'unitOfMeasurement.symbol', value: '°C', comperator: Comperator.eq }
        ]
      }

      expect(compareDatastream(datastream, renderer)).toBe(true)
    })
  })

  describe('filterFeatureCollection', () => {
    it('should return input collection for empty datastream conditions', () => {
      const fc: any = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: { name: 'test' },
            geometry: { type: 'Point', coordinates: [0, 0] }
          }
        ]
      }
      const renderer: any = { datastream: [] }

      const result = filterFeatureCollection(fc, renderer)
      expect(result.features).toHaveLength(1)
    })

    it('should filter features by datastream conditions', () => {
      const fc: any = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: { temperature: 25 },
            geometry: { type: 'Point', coordinates: [0, 0] }
          },
          {
            type: 'Feature',
            properties: { temperature: 15 },
            geometry: { type: 'Point', coordinates: [1, 1] }
          }
        ]
      }
      const renderer: any = {
        datastream: [
          { prop: 'temperature', value: '25', comperator: Comperator.eq }
        ]
      }

      const result = filterFeatureCollection(fc, renderer)
      expect(result.features).toHaveLength(1)
      expect(result.features[0].properties?.temperature).toBe(25)
    })

    it('should handle null feature collection', () => {
      const renderer: any = {
        datastream: [
          { prop: 'name', value: 'test', comperator: Comperator.eq }
        ]
      }

      const result = filterFeatureCollection(null as any, renderer)
      expect(result.features).toHaveLength(0)
    })

    it('should match wildcard in feature filtering', () => {
      const fc: any = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: { name: 'test1' },
            geometry: { type: 'Point', coordinates: [0, 0] }
          },
          {
            type: 'Feature',
            properties: { name: 'test2' },
            geometry: { type: 'Point', coordinates: [1, 1] }
          }
        ]
      }
      const renderer: any = {
        datastream: [
          { prop: 'name', value: '*', comperator: Comperator.eq }
        ]
      }

      const result = filterFeatureCollection(fc, renderer)
      expect(result.features).toHaveLength(2)
    })
  })
})
