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

import { v4 } from 'uuid'

export async function getRowsDrilldownRequestString(
  hierarchy: any,
  rowsDrilldownMember: any,
  expandedMembers: any[],
  levels: any[],
) {
  const metadataLevels = levels

  if (rowsDrilldownMember) {
    const uid = 'id' + v4()
    const setSection = `SET [Row_Dim_${uid}] AS 'VisualTotals(Distinct(Hierarchize({Ascendants(${rowsDrilldownMember.UName}), Descendants(${rowsDrilldownMember.UName})})))'`

    const rowsMemberLevel = metadataLevels.find(
      e => e.LEVEL_UNIQUE_NAME === rowsDrilldownMember.LName,
    )

    const rowsLevels = metadataLevels.filter(e => {
      return (
        e.HIERARCHY_UNIQUE_NAME === rowsMemberLevel?.HIERARCHY_UNIQUE_NAME &&
        e.LEVEL_NUMBER <= rowsMemberLevel.LEVEL_NUMBER
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
      let withSection = ''
      let selectSection = ''

      const selectedFilters = [] as any[]
      if (filter?.multipleChoise) {
        selectedFilters.push(...filter.selectedItems)
      } else {
        selectedFilters.push(filter.selectedItem)
      }

      const filtersLevels = [] as any[][]
      selectedFilters.forEach(e => {
        const levelNum = e.LNum
        if (filtersLevels[levelNum]) {
          filtersLevels[levelNum].push(e)
        } else {
          filtersLevels[levelNum] = [e]
        }
      })

      const rowsLevels = metadataLevels.filter(e => {
        return (
          e.HIERARCHY_UNIQUE_NAME ===
          hierarchy.originalItem.HIERARCHY_UNIQUE_NAME
        )
      })

      const rootLevel = rowsLevels.find(e => e.LEVEL_NUMBER === '0')

      if (!rootLevel)
        return {
          select: '',
          with: '',
        }

      const uid = 'id' + v4()
      const filterSetName = `[FILTER_${uid}]`

      const set = selectedFilters
        .map(e => `Ascendants(${e.UName}), Descendants(${e.UName})`)
        .join(',')

      const deseclectedFiltersLevels = [] as any[][]
      if (filter.deselectedItems) {
        filter.deselectedItems.forEach((e: any) => {
          const levelNum = e.LNum
          if (deseclectedFiltersLevels[levelNum]) {
            deseclectedFiltersLevels[levelNum].push(e)
          } else {
            deseclectedFiltersLevels[levelNum] = [e]
          }
        })
      }

      const filtersDepth = Math.max(
        filtersLevels.length,
        deseclectedFiltersLevels.length,
      )

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

      // if (filter.selectAll) {
      //     const appSettings = useAppSettingsStore();
      //     const members = await appSettings.api?.getLevelMembers(
      //         rootLevel,
      //         100,
      //         0,
      //     );

      //     const req =
      //         members
      //             ?.map(
      //                 (e) =>
      //                     `Ascendants(${e.Member.UName}), Descendants(${e.Member.UName})`,
      //             )
      //             .join(",") || "";

      //     withSection = `{${req}}`;
      // }

      for (let i = 0; i < filtersDepth; i++) {
        if (filtersLevels[i]) {
          const aggregatedFiltersForLevel = filtersLevels[i]
            .map(e => `Ascendants(${e.UName}), Descendants(${e.UName})`)
            .join(',')

          if (withSection.length) {
            withSection = `Union({${aggregatedFiltersForLevel}}, {${withSection}})`
          } else {
            // 0 iter
            withSection = `{${aggregatedFiltersForLevel}}`
          }
        }
        if (deseclectedFiltersLevels[i]) {
          const aggregatedFiltersForLevel = deseclectedFiltersLevels[i]
            .map(e => `Descendants(${e.UName})`)
            .join(',')

          if (withSection.length) {
            withSection = `Except({${withSection}}, {${aggregatedFiltersForLevel}})`
          } else {
            withSection = `{${aggregatedFiltersForLevel}}`
          }
        }
      }

      selectSection = `Hierarchize(${selectSection})`

      if (filter.selectAll) {
        withSection = `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(${withSection})))' `
      } else {
        withSection = `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(Intersect({${set}}, ${withSection}))))' `
      }

      return {
        with: withSection,
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
    const uid = 'id' + v4()
    const setSection = `SET [Col_Dim_${uid}] AS 'VisualTotals(Distinct(Hierarchize({Ascendants(${columnsDrilldownMember.UName}), Descendants(${columnsDrilldownMember.UName})})))'`

    const colsMemberLevel = metadataLevels.find(
      e => e.LEVEL_UNIQUE_NAME === columnsDrilldownMember.LName,
    )

    const colsLevels = metadataLevels.filter(e => {
      return (
        e.HIERARCHY_UNIQUE_NAME === colsMemberLevel?.HIERARCHY_UNIQUE_NAME &&
        e.LEVEL_NUMBER <= colsMemberLevel.LEVEL_NUMBER
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
      let withSection = ''
      let selectSection = ''

      const selectedFilters = [] as any[]
      if (filter?.multipleChoise) {
        selectedFilters.push(...filter.selectedItems)
      } else {
        selectedFilters.push(filter.selectedItem)
      }

      const filtersLevels = [] as any[][]
      selectedFilters.forEach(e => {
        const levelNum = e.LNum
        if (filtersLevels[levelNum]) {
          filtersLevels[levelNum].push(e)
        } else {
          filtersLevels[levelNum] = [e]
        }
      })

      const rowsLevels = metadataLevels.filter(e => {
        return (
          e.HIERARCHY_UNIQUE_NAME ===
          hierarchy.originalItem.HIERARCHY_UNIQUE_NAME
        )
      })

      const rootLevel = rowsLevels.find(e => e.LEVEL_NUMBER === '0')

      if (!rootLevel)
        return {
          select: '',
          with: '',
        }

      const uid = 'id' + v4()
      const filterSetName = `[FILTER_${uid}]`

      const set = selectedFilters
        .map(e => `Ascendants(${e.UName}), Descendants(${e.UName})`)
        .join(',')

      const deseclectedFiltersLevels = [] as any[][]

      if (filter.deselectedItems) {
        filter.deselectedItems.forEach((e: any) => {
          const levelNum = e.LNum
          if (deseclectedFiltersLevels[levelNum]) {
            deseclectedFiltersLevels[levelNum].push(e)
          } else {
            deseclectedFiltersLevels[levelNum] = [e]
          }
        })
      }

      const filtersDepth = Math.max(
        filtersLevels.length,
        deseclectedFiltersLevels.length,
      )

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

      // if (filter.selectAll) {
      //     const appSettings = useAppSettingsStore();
      //     const members = await appSettings.api?.getLevelMembers(
      //         rootLevel,
      //         100,
      //         0,
      //     );

      //     const req =
      //         members
      //             ?.map(
      //                 (e) =>
      //                     `Ascendants(${e.Member.UName}), Descendants(${e.Member.UName})`,
      //             )
      //             .join(",") || "";

      //     withSection = `{${req}}`;
      // }

      for (let i = 0; i < filtersDepth; i++) {
        if (filtersLevels[i]) {
          const aggregatedFiltersForLevel = filtersLevels[i]
            .map(e => `Ascendants(${e.UName}), Descendants(${e.UName})`)
            .join(',')

          if (withSection.length) {
            withSection = `Union({${aggregatedFiltersForLevel}}, {${withSection}})`
          } else {
            // 0 iter
            withSection = `{${aggregatedFiltersForLevel}}`
          }
        }
        if (deseclectedFiltersLevels[i]) {
          const aggregatedFiltersForLevel = deseclectedFiltersLevels[i]
            .map(e => `Descendants(${e.UName})`)
            .join(',')

          if (withSection.length) {
            withSection = `Except({${withSection}}, {${aggregatedFiltersForLevel}})`
          } else {
            withSection = `{${aggregatedFiltersForLevel}}`
          }
        }
      }

      selectSection = `Hierarchize(${selectSection})`

      if (filter.selectAll) {
        withSection = `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(${withSection})))' `
      } else {
        withSection = `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(Intersect({${set}}, ${withSection}))))' `
      }

      // withSection = `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(
      //   Intersect(
      //     {Ascendants([Time].[1997]), Descendants([Time].[1997])},
      //     {
      //       Except({
      //         Except({Ascendants([Time].[1997]), Descendants([Time].[1997])}, {Descendants([Time].[1997].[Q2])})
      //       }, {Descendants([Time].[1997].[Q1].[January]), Descendants([Time].[1997].[Q1].[March])})
      //     }
      //   )
      // )))'`;

      return {
        with: withSection,
        select: selectSection,
      }
    }
  }
}
