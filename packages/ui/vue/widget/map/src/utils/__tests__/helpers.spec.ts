/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { describe, it, expect } from 'vitest'
import { resolve, resolveObj } from '../helpers'

describe('helpers', () => {
  describe('resolve', () => {
    it('should resolve nested object path', () => {
      const obj = {
        a: {
          b: {
            c: 'value'
          }
        }
      }
      expect(resolve(obj, 'a', 'b', 'c')).toBe('value')
    })

    it('should return undefined for non-existent path', () => {
      const obj = { a: { b: 'value' } }
      expect(resolve(obj, 'a', 'c')).toBeUndefined()
    })

    it('should handle null/undefined in path', () => {
      const obj = { a: null }
      // When accessing property on null, it should return undefined
      expect(resolve(obj, 'a', 'b')).toBeFalsy()
    })

    it('should handle empty path', () => {
      const obj = { value: 42 }
      expect(resolve(obj)).toEqual(obj)
    })

    it('should resolve single level', () => {
      const obj = { name: 'test' }
      expect(resolve(obj, 'name')).toBe('test')
    })

    it('should handle array access', () => {
      const obj = {
        items: [{ id: 1 }, { id: 2 }]
      }
      expect(resolve(obj, 'items', 0, 'id')).toBe(1)
      expect(resolve(obj, 'items', 1, 'id')).toBe(2)
    })
  })

  describe('resolveObj', () => {
    it('should resolve dot-notated path', () => {
      const obj = {
        user: {
          name: 'John',
          address: {
            city: 'Berlin'
          }
        }
      }
      expect(resolveObj(obj, 'user.name')).toBe('John')
      expect(resolveObj(obj, 'user.address.city')).toBe('Berlin')
    })

    it('should handle array indices in path', () => {
      const obj = {
        items: [
          { name: 'first' },
          { name: 'second' }
        ]
      }
      expect(resolveObj(obj, 'items.0.name')).toBe('first')
      expect(resolveObj(obj, 'items.1.name')).toBe('second')
    })

    it('should return null for non-existent path', () => {
      const obj = { a: { b: 'value' } }
      // resolveObj returns null on error or non-existent path
      expect(resolveObj(obj, 'a.c')).toBeFalsy()
      expect(resolveObj(obj, 'x.y.z')).toBeNull()
    })

    it('should handle single property access', () => {
      const obj = { name: 'test', value: 42 }
      expect(resolveObj(obj, 'name')).toBe('test')
      expect(resolveObj(obj, 'value')).toBe(42)
    })

    it('should handle null object', () => {
      expect(resolveObj(null, 'property')).toBeNull()
    })

    it('should handle nested objects with numeric keys', () => {
      const obj = {
        data: {
          '0': 'first',
          '1': 'second'
        }
      }
      expect(resolveObj(obj, 'data.0')).toBe('first')
      expect(resolveObj(obj, 'data.1')).toBe('second')
    })
  })
})
