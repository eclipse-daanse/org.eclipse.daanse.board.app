/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/


import { BoxedDatastream, BoxedThing } from 'org.eclipse.daanse.board.app.lib.datasource.ogcsta/dist/src/interfaces/OgcStaConfiguration'
import { Comperator, IDSRenderer, IRenderer } from '../api/Renderer'
import { resolveObj } from '../utils/helpers'
import { FeatureCollection } from 'geojson'

export function useComparator() {

  const compareThing = (th: BoxedThing, renderer: IRenderer) => {

    if (!renderer.thing || renderer.thing.length == 0) {
      return false
    }
    if (!th) return false
    const red = renderer.thing.map((condition) => {
        if (condition.value == '*') {
          return true
        } else {
          const prop = resolveObj(th, condition.prop)
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

  const compareDatastream = (ds: BoxedDatastream, renderer: IDSRenderer) => {

    if (!renderer.datastream || renderer.datastream.length == 0) {
      return false
    }
    if (!ds) return false

    const red = renderer.datastream.map((condition) => {
        if (condition.value == '*') {
          return true
        } else {
          const prop = resolveObj(ds, condition.prop)
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


  const filterFeatureCollection = (featurecollection: FeatureCollection, renderer: IDSRenderer): FeatureCollection<any> => {
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
          const prop = resolveObj(feature.properties, condition.prop)
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

  const compateCondition = (comperator: Comperator, prop: any, value: any) => {
    switch (comperator) {
      case Comperator.equals:
        return String(prop) === value
      case Comperator.notEQuals:
        return String(prop) !== value
      case Comperator.greaterThen:
        return Number(prop) > Number(value)
      case Comperator.greaterThenEquals:
        return Number(prop) >= Number(value)
      case Comperator.lessThen:
        return Number(prop) < Number(value)
      case Comperator.lessThenEquals:
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
