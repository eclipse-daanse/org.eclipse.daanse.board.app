/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/


import { BoxedDatastream, BoxedThing } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta/dist/src/interfaces/OgcStaConfiguration'
import { resolveObj } from '../utils/helpers'
import { FeatureCollection } from 'geojson'
import { DSRenderer } from '../gen/DSRenderer'
import { Comperator } from '../gen/Comperator'
import { Renderer } from '../gen/Renderer'


export function useComparator() {

  const compareThing = (th: BoxedThing, renderer: Renderer) => {

    if (!renderer.thing || renderer.thing.length == 0) {
      return false
    }
    if (!th) return false
    const red = renderer.thing.map((condition) => {
        if (condition.value == '*') {
          return true
        } else {
          const prop = resolveObj(th, condition.prop??'')
          if (!prop) {
            return false
          }
          return compateCondition(condition.comperator, prop, condition.value)
        }
      }
    ).reduce((accumulator, currentValue) => accumulator && currentValue,
      true
    )
    return red
  }

  const compareDatastream = (ds: BoxedDatastream, renderer: DSRenderer) => {

    if (!renderer.datastream || renderer.datastream.length == 0) {
      return false
    }
    if (!ds) return false

    const red = renderer.datastream.map((condition) => {
        if (condition.value == '*') {
          return true
        } else {
          const prop = resolveObj(ds, condition.prop??'')
          if (prop === undefined || prop === null) {
            // For neq: null != anything → true (so default renderer matches)
            // For eq and others: null == anything → false
            return condition.comperator === Comperator.neq
          }

          return compateCondition(condition.comperator, prop, condition.value)
        }
      }
    ).reduce((accumulator, currentValue) => accumulator && currentValue,
      true
    )
    return red
  }


  const filterFeatureCollection = (featurecollection: FeatureCollection, renderer: DSRenderer): FeatureCollection<any> => {
    if (!renderer.datastream || renderer.datastream.length == 0) {
      return featurecollection
    }
    if (!featurecollection) return { type: 'FeatureCollection', features: [] }

    const copyOfFeaturecollection = { ...featurecollection }
    const listofFeatures = []
    for (const feature of featurecollection.features) {
      for (const condition of renderer.datastream) {
        if (condition.value == '*') {
          listofFeatures.push(feature)
          break
        } else {
          const prop = resolveObj(feature.properties, condition.prop??'')
          if (!prop) {
            continue
          }
          if (compateCondition(condition.comperator, prop, condition.value)) {
            listofFeatures.push(feature)
            break
          }
        }
      }
    }

    copyOfFeaturecollection.features = listofFeatures
    return copyOfFeaturecollection
  }

  /**
   * Checks if a value matches a wildcard pattern
   * Supports: *_derived (ends with), sensor_* (starts with), *temp* (contains)
   */
  const matchesWildcard = (propValue: string, pattern: string): boolean => {
    const startsWithWildcard = pattern.startsWith('*')
    const endsWithWildcard = pattern.endsWith('*')

    if (startsWithWildcard && endsWithWildcard) {
      // *pattern* - contains
      const search = pattern.slice(1, -1)
      return propValue.includes(search)
    } else if (startsWithWildcard) {
      // *pattern - ends with
      const suffix = pattern.slice(1)
      return propValue.endsWith(suffix)
    } else if (endsWithWildcard) {
      // pattern* - starts with
      const prefix = pattern.slice(0, -1)
      return propValue.startsWith(prefix)
    }
    return false
  }

  const compateCondition = (comperator: Comperator, prop: any, value: any) => {
    const propStr = String(prop)
    const valueStr = String(value)
    const hasWildcard = valueStr.includes('*')

    switch (comperator) {
      case Comperator.eq:
        if (hasWildcard) {
          return matchesWildcard(propStr, valueStr)
        }
        return propStr === valueStr
      case Comperator.neq:
        if (hasWildcard) {
          return !matchesWildcard(propStr, valueStr)
        }
        return propStr !== valueStr
      case Comperator.gt:
        return Number(prop) > Number(value)
      case Comperator.gte:
        return Number(prop) >= Number(value)
      case Comperator.lt:
        return Number(prop) < Number(value)
      case Comperator.lte:
        return Number(prop) <= Number(value)
      default:
        return false
    }
  }
  return {
    compareThing,
    compareDatastream,
    filterFeatureCollection
  }

}
