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
import { filterKey, stableId } from './helpers'
import { filterMembers } from './filterMembers'

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
  if (measures.length === 1 && pivotTableSettings?.showSingleMeasureHeader === false) {
    rows = rows.filter(e => e.type !== 'Values')
    columns = columns.filter(e => e.type !== 'Values')
  }

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
    const hasValues = rows.some((e: any) => e.type === 'Values') || columns.some((e: any) => e.type === 'Values')
    const fromSection = getFromPart(measures, cubename, filtersRequest.where, hasValues)

    if (!pivotTableSettings.showEmpty) selectSection += ' NON EMPTY'

    const rowsProperties = getRowsProperies(rows, shownProperties(properties, pivotTableSettings?.showRowsProperties))
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

    const colsProperties = getColumnsProperies(columns, shownProperties(properties, pivotTableSettings?.showColumnsProperties))
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
    const drilldownMap = new Map<string, any>()
    columnsDrilldownMembers.forEach((member: any) => {
      if (member?.HIERARCHY_UNIQUE_NAME) {
        drilldownMap.set(member.HIERARCHY_UNIQUE_NAME, member)
      }
    })

    const expandedMap = new Map<string, any[]>()
    colsExpandedMembers.forEach((member: any) => {
      if (member?.HIERARCHY_UNIQUE_NAME) {
        const list = expandedMap.get(member.HIERARCHY_UNIQUE_NAME) || []
        list.push(member)
        expandedMap.set(member.HIERARCHY_UNIQUE_NAME, list)
      }
    })

    for (let i = 0; i < columns.length; i++) {
      const e = columns[i]
      const hName = e.originalItem?.HIERARCHY_UNIQUE_NAME
      const drilledDownMember = hName ? drilldownMap.get(hName) : undefined
      const expandedMembers = (hName ? expandedMap.get(hName) : undefined) || []

      const columnsRequest = await getSingleColumnRequest(
        e,
        drilledDownMember,
        expandedMembers,
        measures,
        levels,
      )

      if (i === 0) {
        columnsSelect = columnsRequest.select
        columnsWhere = columnsRequest.with
      } else {
        columnsWhere += columnsRequest.with

        columnsSelect = `
          NonEmpty(
            CrossJoin(
              ${columnsSelect},
              ${columnsRequest.select}
            )
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
  drilledDownMember: any,
  expandedMembers: any[],
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

  const rootExpanded = expandedMembers.some(member => member.LNum === '0')
  if (drilledDownMember || (expandedMembers.length && rootExpanded)) {
    const request = await getColsDrilldownRequestString(
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
    const drilldownMap = new Map<string, any>()
    rowsDrilldownMembers.forEach((member: any) => {
      if (member?.HIERARCHY_UNIQUE_NAME) {
        drilldownMap.set(member.HIERARCHY_UNIQUE_NAME, member)
      }
    })

    const expandedMap = new Map<string, any[]>()
    rowsExpandedMembers.forEach((member: any) => {
      if (member?.HIERARCHY_UNIQUE_NAME) {
        const list = expandedMap.get(member.HIERARCHY_UNIQUE_NAME) || []
        list.push(member)
        expandedMap.set(member.HIERARCHY_UNIQUE_NAME, list)
      }
    })

    for (let i = 0; i < rows.length; i++) {
      const e = rows[i]
      const hName = e.originalItem?.HIERARCHY_UNIQUE_NAME
      const drilledDownMember = hName ? drilldownMap.get(hName) : undefined
      const expandedMembers = (hName ? expandedMap.get(hName) : undefined) || []

      const rowsRequest = await getSingleRowRequest(
        e,
        drilledDownMember,
        expandedMembers,
        measures,
        levels,
      )
      if (i === 0) {
        rowsSelect = rowsRequest.select
        rowsWhere = rowsRequest.with
      } else {
        rowsWhere += rowsRequest.with

        rowsSelect = `
          NonEmpty(
            CrossJoin(
              ${rowsSelect},
              ${rowsRequest.select}
            )
          )`
      }
    }
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
  drilledDownMember: any,
  expandedMembers: any[],
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

/**
 * The member properties to ask for: none where the pivot table was told not
 * to show them. Where nobody said - a DataTable - they are asked for: the
 * table hands them on as rowProperties, and the OGC composer finds its
 * geometry there.
 */
function shownProperties<T>(properties: T[], shown: boolean | undefined): T[] {
  return shown === false ? [] : properties
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
  const forceValues = (rows.length === 0 && columns.length === 0 && measures.length > 0 && pivotTableSettings?.showSingleMeasureHeader !== false)
  const hasValues = rows.some((e: any) => e.type === 'Values') || columns.some((e: any) => e.type === 'Values') || forceValues
  const selectPart = getSelectWithOptions(pivotTableSettings)
  const fromPart = getFromPart(measures, cubename, filtersRequest.where, hasValues)

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

    const rowsProperties = getRowsProperies(rows, shownProperties(properties, pivotTableSettings?.showRowsProperties))

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

    const colsProperties = getColumnsProperies(columns, shownProperties(properties, pivotTableSettings?.showColumnsProperties))

    return `
      ${colsWith}
      ${selectPart}
      ${colsSelect}
      DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${colsProperties} ON 0
      ${fromPart}
    `
  } else if (measures.length) {
    const selectRequest = measures.map((e: any) => e.originalItem.MEASURE_UNIQUE_NAME).join(',')
    return `
      ${selectPart}
      {${selectRequest}} ON 0
      ${fromPart}
    `
  }
  return ''
}

function getSelectWithOptions(pivotTableSettings: any) {
  let result = 'SELECT'
  if (!pivotTableSettings.showEmpty) result += ' NON EMPTY'
  return result
}

function getFromPart(measures: any[], cubename: string, filtersWhere: any, hasValues: boolean = false) {
  let measuresPart = ''
  if (measures.length === 1 && !hasValues) {
    measuresPart = `${measures[0].originalItem.MEASURE_UNIQUE_NAME}`
  }

  let result = ''
  if (filtersWhere) {
    if (measuresPart) {
      result = `FROM [${cubename}] WHERE (${filtersWhere},${measuresPart}) CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS, UPDATEABLE`
    } else {
      result = `FROM [${cubename}] WHERE (${filtersWhere}) CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS, UPDATEABLE`
    }
  } else if (measuresPart) {
    result = `FROM [${cubename}] WHERE ${measuresPart} CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS, UPDATEABLE`
  } else {
    result = `FROM [${cubename}] CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS, UPDATEABLE`
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
      const uid = stableId('where', filter.originalItem.DIMENSION_UNIQUE_NAME, filterKey(filter))
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
  const filter = e.filters
  if (!filter?.enabled) return null

  const rootLevel = levels.find(
    l =>
      l.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME &&
      l.LEVEL_NUMBER === '0',
  )

  // Everything selected, nothing taken out: no filter at all.
  if (filter.selectAll && !filter.deselectedItems?.length) {
    return {
      with: '',
      select: `Hierarchize(AddCalculatedMembers({${rootLevel?.LEVEL_UNIQUE_NAME}.members}))`,
    }
  }

  if (!rootLevel) return null

  const uid = stableId('axis', e.originalItem.HIERARCHY_UNIQUE_NAME, filterKey(filter))
  const filterSetName = `[FILTER_${uid}]`
  const members = filterMembers(filter, e.originalItem.HIERARCHY_UNIQUE_NAME)

  return {
    with: `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(${members})))' `,
    select: `Hierarchize(Intersect(AddCalculatedMembers({${rootLevel.LEVEL_UNIQUE_NAME}.members}), ${filterSetName}))`,
  }
}
