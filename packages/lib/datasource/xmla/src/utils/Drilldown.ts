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

import { filterKey, stableId } from './helpers'
import { filterMembers } from './filterMembers'

export async function getRowsDrilldownRequestString(
  hierarchy: any,
  rowsDrilldownMember: any,
  expandedMembers: any[],
  levels: any[],
) {
  const metadataLevels = levels

  if (rowsDrilldownMember) {
    const uid = stableId('rows', rowsDrilldownMember.UName)
    const setSection = `SET [Row_Dim_${uid}] AS 'VisualTotals(Distinct(Hierarchize({Ascendants(${rowsDrilldownMember.UName}), Descendants(${rowsDrilldownMember.UName})})))'`

    const rowsMemberLevel = metadataLevels.find(
      e => e.LEVEL_UNIQUE_NAME === rowsDrilldownMember.LName,
    )

    const rowsLevels = metadataLevels.filter(e => {
      return (
        e.HIERARCHY_UNIQUE_NAME === rowsMemberLevel?.HIERARCHY_UNIQUE_NAME &&
        Number(e.LEVEL_NUMBER) <= Number(rowsMemberLevel.LEVEL_NUMBER)
      )
    })

    let hierarchizeString = ''

    for (let i = 0; i < rowsLevels.length; i++) {
      if (!hierarchizeString.length) {
        hierarchizeString = `
        DrilldownLevel({
          ${rowsLevels[i].LEVEL_UNIQUE_NAME}
        })
        `
      } else {
        hierarchizeString = `
          DrilldownLevel({
            ${hierarchizeString}
            },
            ${rowsLevels[i].LEVEL_UNIQUE_NAME}
          )
        `
      }
    }

    if (expandedMembers) {
      const rowsRootLevel = metadataLevels.find(e => {
        return (
          e.HIERARCHY_UNIQUE_NAME ===
            expandedMembers[0]?.HIERARCHY_UNIQUE_NAME && e.LEVEL_NUMBER === '0'
        )
      })

      for (let i = 0; i < expandedMembers.length; i++) {
        if (!hierarchizeString.length) {
          // hierarchizeString = `DrilldownMember({{DrilldownLevel({${rowsRootLevel?.LEVEL_UNIQUE_NAME}})}}, {${expandedMembers[i].UName}})`;
          hierarchizeString = `DrilldownMember({{DrilldownLevel({${rowsRootLevel?.LEVEL_UNIQUE_NAME}})}}, {${expandedMembers[i].UName}})`
        } else {
          hierarchizeString = `
            DrilldownMember({{
              ${hierarchizeString}
            }}, {${expandedMembers[i].UName}})
          `
        }
      }
    }

    hierarchizeString = `
      Hierarchize(Intersect(AddCalculatedMembers({
        ${hierarchizeString}
      }), [Row_Dim_${uid}]))
    `

    return {
      with: setSection,
      select: hierarchizeString,
    }
  } else {
    if (!hierarchy.filters?.enabled) {
      let hierarchizeString = ''

      const rowsRootLevel = metadataLevels.find(e => {
        return (
          e.HIERARCHY_UNIQUE_NAME ===
            expandedMembers[0]?.HIERARCHY_UNIQUE_NAME && e.LEVEL_NUMBER === '0'
        )
      })

      for (let i = 0; i < expandedMembers.length; i++) {
        if (i === 0) {
          if (expandedMembers[i].LNum === '0') {
            hierarchizeString = `
              DrilldownMember({{
                ${rowsRootLevel?.LEVEL_UNIQUE_NAME}.members
              }}, {${expandedMembers[i].UName}})
            `
          } else {
            // hierarchizeString = `DrilldownLevel({${colsRootLevel?.LEVEL_UNIQUE_NAME}},,,INCLUDE_CALC_MEMBERS)`;
            hierarchizeString = `DrilldownMember({{DrilldownLevel({${rowsRootLevel?.LEVEL_UNIQUE_NAME}})}}, {${expandedMembers[i].UName}})`
          }
          // hierarchizeString = `DrilldownMember({{DrilldownLevel({${rowsRootLevel?.LEVEL_UNIQUE_NAME}})}}, {${expandedMembers[i].UName}})`;
        } else {
          hierarchizeString = `
            DrilldownMember({{
              ${hierarchizeString}
            }}, {${expandedMembers[i].UName}})
          `
        }
      }
      hierarchizeString = `
        Hierarchize(
            ${hierarchizeString}
        )`

      return {
        with: '',
        select: hierarchizeString,
      }
    } else {
      const filter = hierarchy.filters
      let selectSection = ''

      const hierarchyLevels = metadataLevels.filter(
        e => e.HIERARCHY_UNIQUE_NAME === hierarchy.originalItem.HIERARCHY_UNIQUE_NAME,
      )
      const rootLevel = hierarchyLevels.find(e => e.LEVEL_NUMBER === '0')

      if (!rootLevel)
        return {
          select: '',
          with: '',
        }

      const uid = stableId('rows-filter', hierarchy.originalItem.HIERARCHY_UNIQUE_NAME, filterKey(filter))
      const filterSetName = `[FILTER_${uid}]`

      const levels = [] as any[][]
      expandedMembers.forEach(element => {
        if (
          element.HIERARCHY_UNIQUE_NAME !==
          hierarchy.originalItem.HIERARCHY_UNIQUE_NAME
        ) {
          return
        }

        const levelNum = parseInt(element.LNum)
        if (levels[levelNum]) levels[levelNum].push(element)
        else levels[levelNum] = [element]
      })

      if (levels.length) {
        for (let i = 0; i < levels.length; i++) {
          const joinedMembers = levels[i].map(e => e.UName).join(',')
          if (i === 0) {
            selectSection = `DrilldownMember({{${rootLevel.LEVEL_UNIQUE_NAME}.members}}, {${joinedMembers}})`
          } else {
            selectSection = `DrilldownMember({{${selectSection}}}, {${joinedMembers}})`
          }
        }

        selectSection = `Intersect(AddCalculatedMembers(${selectSection}), ${filterSetName})`
      } else {
        selectSection = `Intersect(AddCalculatedMembers({${rootLevel.LEVEL_UNIQUE_NAME}.members}), ${filterSetName}))`
      }

      selectSection = `Hierarchize(${selectSection})`
      const members = filterMembers(filter, hierarchy.originalItem.HIERARCHY_UNIQUE_NAME)

      return {
        with: `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(${members})))' `,
        select: selectSection,
      }
    }
  }
}

export async function getColsDrilldownRequestString(
  hierarchy: any,
  columnsDrilldownMember: any,
  expandedMembers: any[],
  levels: any[],
) {
  const metadataLevels = levels

  if (columnsDrilldownMember) {
    const uid = stableId('columns', columnsDrilldownMember.UName)
    const setSection = `SET [Col_Dim_${uid}] AS 'VisualTotals(Distinct(Hierarchize({Ascendants(${columnsDrilldownMember.UName}), Descendants(${columnsDrilldownMember.UName})})))'`

    const colsMemberLevel = metadataLevels.find(
      e => e.LEVEL_UNIQUE_NAME === columnsDrilldownMember.LName,
    )

    const colsLevels = metadataLevels.filter(e => {
      return (
        e.HIERARCHY_UNIQUE_NAME === colsMemberLevel?.HIERARCHY_UNIQUE_NAME &&
        Number(e.LEVEL_NUMBER) <= Number(colsMemberLevel.LEVEL_NUMBER)
      )
    })

    let hierarchizeString = ''
    for (let i = 0; i < colsLevels.length; i++) {
      if (!hierarchizeString.length) {
        hierarchizeString = `
        DrilldownLevel({
          ${colsLevels[i].LEVEL_UNIQUE_NAME}
        })
        `
      } else {
        hierarchizeString = `
          DrilldownLevel({
            ${hierarchizeString}
            },
            ${colsLevels[i].LEVEL_UNIQUE_NAME}
          )
        `
      }
    }

    if (expandedMembers) {
      const colsRootLevel = metadataLevels.find(e => {
        return (
          e.HIERARCHY_UNIQUE_NAME ===
            expandedMembers[0]?.HIERARCHY_UNIQUE_NAME && e.LEVEL_NUMBER === '0'
        )
      })

      for (let i = 0; i < expandedMembers.length; i++) {
        if (!hierarchizeString.length) {
          hierarchizeString = `DrilldownMember({{DrilldownLevel({${colsRootLevel?.LEVEL_UNIQUE_NAME}})}}, {${expandedMembers[i].UName}})`
        } else {
          hierarchizeString = `
            DrilldownMember({{
              ${hierarchizeString}
            }}, {${expandedMembers[i].UName}})
          `
        }
      }
    }

    hierarchizeString = `
    Hierarchize(Intersect(AddCalculatedMembers({
      ${hierarchizeString}
    }), [Col_Dim_${uid}]))
    `

    return {
      with: setSection,
      select: hierarchizeString,
    }
  } else {
    if (!hierarchy.filters?.enabled) {
      let hierarchizeString = ''

      const colsRootLevel = metadataLevels.find(e => {
        return (
          e.HIERARCHY_UNIQUE_NAME ===
            expandedMembers[0]?.HIERARCHY_UNIQUE_NAME && e.LEVEL_NUMBER === '0'
        )
      })

      for (let i = 0; i < expandedMembers.length; i++) {
        if (i === 0) {
          if (expandedMembers[i].LNum === '0') {
            hierarchizeString = `
              DrilldownMember({{
                ${colsRootLevel?.LEVEL_UNIQUE_NAME}.members
              }}, {${expandedMembers[i].UName}})
            `
          } else {
            // hierarchizeString = `DrilldownLevel({${colsRootLevel?.LEVEL_UNIQUE_NAME}},,,INCLUDE_CALC_MEMBERS)`;
            hierarchizeString = `DrilldownMember({{DrilldownLevel({${colsRootLevel?.LEVEL_UNIQUE_NAME}})}}, {${expandedMembers[i].UName}})`
          }
        } else {
          hierarchizeString = `
            DrilldownMember({{
              ${hierarchizeString}
            }}, {${expandedMembers[i].UName}})
          `
        }
      }
      hierarchizeString = `
        Hierarchize(
          AddCalculatedMembers
          (
            ${hierarchizeString}
          )
        )`

      return {
        with: '',
        select: hierarchizeString,
      }
    } else {
      const filter = hierarchy.filters
      let selectSection = ''

      const hierarchyLevels = metadataLevels.filter(
        e => e.HIERARCHY_UNIQUE_NAME === hierarchy.originalItem.HIERARCHY_UNIQUE_NAME,
      )
      const rootLevel = hierarchyLevels.find(e => e.LEVEL_NUMBER === '0')

      if (!rootLevel)
        return {
          select: '',
          with: '',
        }

      const uid = stableId('columns-filter', hierarchy.originalItem.HIERARCHY_UNIQUE_NAME, filterKey(filter))
      const filterSetName = `[FILTER_${uid}]`

      const levels = [] as any[][]
      expandedMembers.forEach(element => {
        if (
          element.HIERARCHY_UNIQUE_NAME !==
          hierarchy.originalItem.HIERARCHY_UNIQUE_NAME
        ) {
          return
        }

        const levelNum = parseInt(element.LNum)
        if (levels[levelNum]) levels[levelNum].push(element)
        else levels[levelNum] = [element]
      })

      if (levels.length) {
        for (let i = 0; i < levels.length; i++) {
          const joinedMembers = levels[i].map(e => e.UName).join(',')
          if (i === 0) {
            selectSection = `DrilldownMember({{${rootLevel.LEVEL_UNIQUE_NAME}.members}}, {${joinedMembers}})`
          } else {
            selectSection = `DrilldownMember({{${selectSection}}}, {${joinedMembers}})`
          }
        }

        selectSection = `Intersect(AddCalculatedMembers(${selectSection}), ${filterSetName})`
      } else {
        selectSection = `Intersect(AddCalculatedMembers({${rootLevel.LEVEL_UNIQUE_NAME}.members}), ${filterSetName}))`
      }

      selectSection = `Hierarchize(${selectSection})`
      const members = filterMembers(filter, hierarchy.originalItem.HIERARCHY_UNIQUE_NAME)

      return {
        with: `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(${members})))' `,
        select: selectSection,
      }
    }
  }
}
