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
import {
  getRowsDrilldownRequestString,
  getColsDrilldownRequestString,
} from './Drilldown'
import { v4 } from 'uuid'

export async function getMdxRequest(
  cubename: string,
  rowsDrilldownMembers: any,
  columnsDrilldownMembers: any,
  rowsExpandedMembers: any,
  columnsExpandedMembers: any,
  rows: any[],
  columns: any[],
  measures: any[],
  pivotTableSettings: any,
  properties: any[],
  filters: any[],
  levels: any[],
) {
  const filtersRequest = getFiltersRequest(filters)

  if (!rows.length || !columns.length) {
    return getSingleHierarchyRequest(
      rows,
      columns,
      measures,
      cubename,
      rowsDrilldownMembers,
      columnsDrilldownMembers,
      rowsExpandedMembers,
      columnsExpandedMembers,
      pivotTableSettings,
      properties,
      filtersRequest,
      levels,
    )
  } else {
    let withSection = 'WITH'
    let selectSection = 'SELECT'
    const fromSection = getFromPart(measures, cubename, filtersRequest.where)

    if (!pivotTableSettings.showEmpty) selectSection += ' NON EMPTY'

    const rowsProperties = getRowsProperies(rows, properties)
    const rowsRequest = await getRowsRequest(
      rows,
      rowsDrilldownMembers,
      rowsExpandedMembers,
      measures,
      levels,
    )
    if (rowsRequest.with.length) {
      withSection = `${withSection} ${rowsRequest.with}`
    }
    selectSection = `${selectSection}\n${rowsRequest.select} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${rowsProperties} ON 1,\n`

    if (!pivotTableSettings.showEmpty) selectSection += ' NON EMPTY'

    const colsProperties = getColumnsProperies(columns, properties)
    const colsRequest = await getColumnsRequest(
      columns,
      columnsDrilldownMembers,
      columnsExpandedMembers,
      measures,
      levels,
    )
    if (colsRequest.with.length) {
      withSection = `${withSection} ${colsRequest.with}`
    }
    selectSection = `${selectSection}\n${colsRequest.select} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${colsProperties} ON 0\n`

    let resultString = ''

    if (filtersRequest.with) {
      withSection += filtersRequest.with
    }

    if (withSection.length > 4) {
      resultString += withSection
    }

    resultString += '\n'
    resultString += selectSection
    resultString += fromSection
    return resultString
  }
}

async function getColumnsRequest(
  columns: any,
  columnsDrilldownMembers: any[],
  colsExpandedMembers: any[],
  measures: any[],
  levels: any[],
) {
  let columnsSelect = ''
  let columnsWhere = ''

  if (columns.length >= 1) {
    for (let i = 0; i < columns.length; i++) {
      const e = columns[i]
      const columnsRequest = await getSingleColumnRequest(
        e,
        columnsDrilldownMembers,
        colsExpandedMembers,
        measures,
        levels,
      )

      if (i === 0) {
        columnsSelect = columnsRequest.select
        columnsWhere = columnsRequest.with
      } else {
        columnsWhere += columnsRequest.with

        columnsSelect = `
          CrossJoin(
            ${columnsSelect},
            ${columnsRequest.select}
          )`
      }
    }
  } else {
    columnsSelect = ''
  }

  return {
    select: columnsSelect,
    with: columnsWhere,
  }
}

async function getSingleColumnRequest(
  e: any,
  columnsDrilldownMembers: any[],
  colsExpandedMembers: any[],
  measures: any[],
  levels: any[],
) {
  if (e.type === 'Values') {
    const selectRequest = measures
      .map(e => e.originalItem.MEASURE_UNIQUE_NAME)
      .join(',')
    return {
      select: `{${selectRequest}}`,
      with: '',
    }
  }

  const filteredRequest = await getAxisFilterRequest(e, levels)

  const drilledDownMember = columnsDrilldownMembers.find(drilldownedMembers => {
    return (
      drilldownedMembers.HIERARCHY_UNIQUE_NAME ===
      e.originalItem.HIERARCHY_UNIQUE_NAME
    )
  })
  const expandedMembers = colsExpandedMembers.filter(drilldownedMembers => {
    return (
      drilldownedMembers.HIERARCHY_UNIQUE_NAME ===
      e.originalItem.HIERARCHY_UNIQUE_NAME
    )
  })

  const rootExpanded = expandedMembers.some(member => member.LNum === '0')
  if (drilledDownMember || (expandedMembers.length && rootExpanded)) {
    const request = await getColsDrilldownRequestString(
      e,
      drilledDownMember,
      colsExpandedMembers,
      levels,
    )

    return {
      with: request.with,
      select: request.select,
    }
  }

  if (filteredRequest) {
    return {
      select: filteredRequest.select,
      with: filteredRequest.with,
    }
  }

  const rootLevel = levels.find(
    l =>
      l.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME &&
      l.LEVEL_NUMBER === '0',
  )
  return {
    select: `Hierarchize(AddCalculatedMembers({${rootLevel?.LEVEL_UNIQUE_NAME}.members}))`,
    with: '',
  }
}

async function getRowsRequest(
  rows: any,
  rowsDrilldownMembers: any[],
  rowsExpandedMembers: any[],
  measures: any[],
  levels: any[],
) {
  let rowsSelect = ''
  let rowsWhere = ''

  if (rows.length >= 1) {
    for (let i = 0; i < rows.length; i++) {
      const e = rows[i]

      const rowsRequest = await getSingleRowRequest(
        e,
        rowsDrilldownMembers,
        rowsExpandedMembers,
        measures,
        levels,
      )
      if (i === 0) {
        rowsSelect = rowsRequest.select
        rowsWhere = rowsRequest.with
      } else {
        rowsWhere += rowsRequest.with

        rowsSelect = `
          CrossJoin(
            ${rowsSelect},
            ${rowsRequest.select}
          )`
      }
    }
  } else if (rows.length === 1) {
    rowsSelect = `{ ${rows[0].originalItem.HIERARCHY_UNIQUE_NAME}.Members }`
  } else {
    rowsSelect = ''
  }

  return {
    select: rowsSelect,
    with: rowsWhere,
  }
}

async function getSingleRowRequest(
  e: any,
  rowsDrilldownMembers: any[],
  rowsExpandedMembers: any[],
  measures: any[],
  levels: any[],
) {
  if (e.type === 'Values') {
    const selectRequest = measures
      .map(e => e.originalItem.MEASURE_UNIQUE_NAME)
      .join(',')
    return {
      select: `{${selectRequest}}`,
      with: '',
    }
  }

  const filteredRequest = await getAxisFilterRequest(e, levels)

  const drilledDownMember = rowsDrilldownMembers.find(drilldownedMembers => {
    return (
      drilldownedMembers.HIERARCHY_UNIQUE_NAME ===
      e.originalItem.HIERARCHY_UNIQUE_NAME
    )
  })
  const expandedMembers = rowsExpandedMembers.filter(drilldownedMembers => {
    return (
      drilldownedMembers.HIERARCHY_UNIQUE_NAME ===
      e.originalItem.HIERARCHY_UNIQUE_NAME
    )
  })

  const rootExpanded = expandedMembers.some(member => member.LNum === '0')
  if (drilledDownMember || (expandedMembers.length && rootExpanded)) {
    const request = await getRowsDrilldownRequestString(
      e,
      drilledDownMember,
      expandedMembers,
      levels,
    )

    return {
      with: request.with,
      select: request.select,
    }
  }
  if (filteredRequest) {
    return {
      select: filteredRequest.select,
      with: filteredRequest.with,
    }
  }

  // Default request with no drilldowns and filters

  const rootLevel = levels.find(
    l =>
      l.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME &&
      l.LEVEL_NUMBER === '0',
  )

  return {
    select: `Hierarchize(AddCalculatedMembers({${rootLevel?.LEVEL_UNIQUE_NAME}.members}))`,
    with: '',
  }
}

function getRowsProperies(rows: any, properties: any[]) {
  const rowsProperties = [] as any[]

  rows.forEach((e: any) => {
    rowsProperties.push(
      properties.filter(
        prop =>
          prop.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME,
      ),
    )
  })

  let rowsPropertiesList = rowsProperties
    .flat(1)
    .map((e: any) => `${e.LEVEL_UNIQUE_NAME}.[${e.PROPERTY_NAME}]`)
    .join(',')

  if (rowsPropertiesList) rowsPropertiesList = `,${rowsPropertiesList}`
  return rowsPropertiesList
}

function getColumnsProperies(columns: any, properties: any[]) {
  const columnsProperties = [] as any[]

  columns.forEach((e: any) => {
    columnsProperties.push(
      properties.filter(
        prop =>
          prop.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME,
      ),
    )
  })

  let columnsPropertiesList = columnsProperties
    .flat(1)
    .map((e: any) => `${e.LEVEL_UNIQUE_NAME}.[${e.PROPERTY_NAME}]`)
    .join(',')

  if (columnsPropertiesList) columnsPropertiesList = `,${columnsPropertiesList}`
  return columnsPropertiesList
}

async function getSingleHierarchyRequest(
  rows: any[],
  columns: any[],
  measures: any[],
  cubename: string,
  rowsDrilldownMembers: any,
  columnsDrilldownMembers: any,
  rowsExpandedMembers: any,
  columnsExpandedMembers: any,
  pivotTableSettings: any,
  properties: any[],
  filtersRequest: any,
  levels: any[],
) {
  const selectPart = getSelectWithOptions(pivotTableSettings)
  const fromPart = getFromPart(measures, cubename, filtersRequest.where)

  if (rows.length) {
    const request = await getRowsRequest(
      rows,
      rowsDrilldownMembers,
      rowsExpandedMembers,
      measures,
      levels,
    )

    const rowsSelect = request.select
    let rowsWith = request.with ? `WITH ${request.with}` : ''

    if (filtersRequest.with) {
      if (rowsWith) rowsWith += filtersRequest.with
      else rowsWith = `WITH ${filtersRequest.with}`
    }

    const rowsProperties = getRowsProperies(rows, properties)

    return `
      ${rowsWith}
      ${selectPart}
      ${rowsSelect}
      DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${rowsProperties} ON 0
      ${fromPart}
    `
  } else if (columns.length) {
    const request = await getColumnsRequest(
      columns,
      columnsDrilldownMembers,
      columnsExpandedMembers,
      measures,
      levels,
    )

    const colsSelect = request.select
    let colsWith = request.with ? `WITH ${request.with}` : ''

    if (filtersRequest.with) {
      if (colsWith) colsWith += filtersRequest.with
      else colsWith = `WITH ${filtersRequest.with}`
    }

    const colsProperties = getColumnsProperies(columns, properties)

    return `
      ${colsWith}
      ${selectPart}
      ${colsSelect}
      DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${colsProperties} ON 0
      ${fromPart}
    `
  } else if (measures.length) {
    return `
      SELECT ${fromPart}
    `
  }
  return ''
}

function getSelectWithOptions(pivotTableSettings: any) {
  let result = 'SELECT'
  if (!pivotTableSettings.showEmpty) result += ' NON EMPTY'
  return result
}

function getFromPart(measures: any[], cubename: string, filtersWhere: any) {
  let measuresPart = ''
  if (measures.length === 1) {
    measuresPart = `${measures[0].originalItem.MEASURE_UNIQUE_NAME}`
  }

  let result = ''
  if (filtersWhere) {
    if (measuresPart) {
      result = `FROM [${cubename}] WHERE (${filtersWhere},${measuresPart}) CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS`
    } else {
      result = `FROM [${cubename}] WHERE (${filtersWhere}) CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS`
    }
  } else if (measuresPart) {
    result = `FROM [${cubename}] WHERE ${measuresPart} CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS`
  } else {
    result = `FROM [${cubename}] CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS`
  }
  return result
}

function getFiltersRequest(filters: any[]) {
  let withSection = ''
  let whereSection = ''
  if (!filters) {
    return {
      where: null,
      with: null,
    }
  }

  const filtersArray = filters.map(e => e.filters)

  filtersArray.forEach(filter => {
    if (!filter?.enabled) return

    if (filter.multipleChoise) {
      const uid = 'id' + v4()
      const filterSetName = `${filter.originalItem.DIMENSION_UNIQUE_NAME}.[FILTER_${uid}]`

      const selectedItems = filter.selectedItems
        .map((e: any) => e.UName)
        .join(',')
      withSection += ` MEMBER ${filterSetName} AS 'Aggregate({${selectedItems}})'`

      if (whereSection.length) whereSection += ','
      whereSection += filterSetName
      // TODO
    } else {
      if (whereSection.length) whereSection += ','
      whereSection += filter.selectedItem.UName
    }
  })

  return {
    where: whereSection,
    with: withSection,
  }
}

async function getAxisFilterRequest(e: any, levels: any[]) {
  // const appSettings = useAppSettingsStore();
  // const api = appSettings.getApi();
  const filter = e.filters
  let withSection = ''
  let selectSection = ''

  if (!filter?.enabled) return null
  const selectedFilters = [] as any[]
  if (filter.multipleChoise) {
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

  if (filter.selectAll && !deseclectedFiltersLevels.length) {
    const uid = 'id' + v4()
    const filterSetName = `[FILTER_${uid}]`

    const rootLevel = levels.find(
      l =>
        l.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME &&
        l.LEVEL_NUMBER === '0',
    )

    withSection = `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(AddCalculatedMembers({${rootLevel?.LEVEL_UNIQUE_NAME}.members}))))' `
    selectSection = `Hierarchize(AddCalculatedMembers({${rootLevel?.LEVEL_UNIQUE_NAME}.members}))`
  } else {
    const rowsLevels = levels.filter(l => {
      return l.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME
    })

    const rootLevel = rowsLevels.find(e => e.LEVEL_NUMBER === '0')
    // if (filter.selectAll) {
    //   const appSettings = useAppSettingsStore()
    //   const members = await appSettings.api?.getLevelMembers(
    //     rootLevel as MDSchemaLevel,
    //     100,
    //     0,
    //   )

    //   const req =
    //     members
    //       ?.map(
    //         e =>
    //           `Ascendants(${e.Member.UName}), Descendants(${e.Member.UName})`,
    //       )
    //       .join(',') || ''

    //   withSection = `{${req}}`
    // }

    if (!rootLevel) return null

    const uid = 'id' + v4()
    const filterSetName = `[FILTER_${uid}]`

    const set = selectedFilters
      .map(e => `Ascendants(${e.UName}), Descendants(${e.UName})`)
      .join(',')

    for (let i = 0; i < filtersDepth; i++) {
      if (filtersLevels[i]) {
        const aggregatedFiltersForLevel = filtersLevels[i]
          .map(e => `Ascendants(${e.UName}), Descendants(${e.UName})`)
          .join(',')

        if (withSection.length) {
          withSection = `Union({${aggregatedFiltersForLevel}}, {${withSection}})`
        } else {
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

    if (filter.selectAll) {
      withSection = `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(${withSection})))' `
    } else {
      withSection = `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(Intersect({${set}}, ${withSection}))))' `
    }
    selectSection = `Hierarchize(Intersect(AddCalculatedMembers({${rootLevel.LEVEL_UNIQUE_NAME}.members}), ${filterSetName}))`
  }

  return {
    with: withSection,
    select: selectSection,
  }
}
