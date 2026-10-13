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
import { optionalArrayToArray } from './helpers'

interface QueryParams {
  rows: any[]
  columns: any[]
  measures: any[]
  properties: any[]
  showRowsProperties: boolean
  showColumnsProperties: boolean
}

const buildPropKeyMap = (hierarchyInfo: any): Map<string, string> => {
  const map = new Map<string, string>()
  if (!hierarchyInfo) return map
  for (const [key, val] of Object.entries(hierarchyInfo)) {
    if (Array.isArray(val)) {
      for (const entry of val) {
        if (entry?.__attrs?.name) {
          map.set(entry.__attrs.name, key)
        }
      }
    } else if (val && typeof val === 'object') {
      const name = (val as any).__attrs?.name
      if (name) {
        map.set(name, key)
      }
    }
  }
  return map
}

const parseMdxRequest = (mdxResponce: any, params: QueryParams) => {
  let columns = [] as any[]
  let rows = [] as any[]
  let cells = [] as any[]
  let propertiesRows = [] as any[]
  let propertiesCols = [] as any[]

  // const mdxResponce = await store.getData({
  //     rows: params.rows,
  //     columns: params.columns,
  //     measures: params.measures,
  //     rowsExpandedMembers: params.rowsExpandedMembers,
  //     rowsDrilldownMembers: params.rowsDrilldownMembers,
  //     columnsExpandedMembers: params.columnsExpandedMembers,
  //     columnsDrilldownMembers: params.columnsDrilldownMembers,
  // });

  if (!mdxResponce.Body.ExecuteResponse) return null

  // const properties = (await metadataStorage.getMetadataStorage()).properties;
  const properties = params.properties;
  console.log('properties in helper', properties);

  let tupples = optionalArrayToArray(
      mdxResponce.Body.ExecuteResponse.return?.root.Axes?.Axis,
  )?.[0]?.Tuples
  const axis0 = Array.isArray(tupples) ? tupples.map(e => e.Tuple) : optionalArrayToArray(
    tupples?.Tuple,
  );

  tupples = optionalArrayToArray(
    mdxResponce.Body.ExecuteResponse.return?.root?.Axes?.Axis
  )?.[1]?.Tuples;

  let axis1 = [] as any[];
  if (mdxResponce.Body.ExecuteResponse.return.root.Axes?.Axis?.[1]?.__attrs.name === 'Axis1') {
    axis1 = Array.isArray(tupples) ? tupples.map((e: any) => e.Tuple) : optionalArrayToArray(
      tupples?.Tuple,
    )
  }
  else if (
    mdxResponce.Body.ExecuteResponse.return.root.Axes?.Axis?.[1]?.__attrs
      .name === "SlicerAxis"
  ) {
    axis1 = Array.isArray(tupples) ? tupples.map((e: any) => e.Tuple) : optionalArrayToArray(
      tupples?.Tuple,
    );
  }

  const cellsArray = optionalArrayToArray(
    mdxResponce.Body.ExecuteResponse.return.root.CellData?.Cell,
  )

  if (!params.rows.length && !params.columns.length) {
    columns = axis0.map((e: { Member: any }) => {
      return optionalArrayToArray(e.Member);
    });
    rows = axis1.map((e: { Member: any }) => {
      return optionalArrayToArray(e.Member);
    });
    cells = parseCells(cellsArray, columns, rows);
  } else if (!params.columns.length) {
    columns = axis1.map((e: { Member: any }) => {
      return optionalArrayToArray(e.Member);
    });
    rows = axis0.map((e: { Member: any }) => {
      return optionalArrayToArray(e.Member);
    });
    cells = parseCells(cellsArray, columns, rows);
  } else {
    columns = axis0.map((e: { Member: any }) => {
      return optionalArrayToArray(e.Member)
    })
    rows = axis1.map((e: { Member: any }) => {
      return optionalArrayToArray(e.Member)
    })
    cells = parseCells(cellsArray, columns, rows)
  }

  const columnProperties = [] as any[]
  const rowsProperties = [] as any[]

  console.log('Params in helper', params)

  columns[0]?.forEach((col: any) => {
    // const colPropsShown = pivotTableStore.state.membersWithProps.includes(
    //   col.HIERARCHY_UNIQUE_NAME,
    // );
    if (!params.showColumnsProperties) return;
    console.log(col);

    const colProps: any[] = properties.filter(
      (prop) => prop.HIERARCHY_UNIQUE_NAME === col.HIERARCHY_UNIQUE_NAME,
    );
    columnProperties.push(...colProps);
  });

  rows[0]?.forEach((row: any) => {
    // const rowPropsShown = pivotTableStore.state.membersWithProps.includes(
    //   row.HIERARCHY_UNIQUE_NAME,
    // );
    if (!params.showRowsProperties) return;

    const rowProps: any[] = properties.filter(
      (prop) => prop.HIERARCHY_UNIQUE_NAME === row.HIERARCHY_UNIQUE_NAME,
    );
    rowsProperties.push(...rowProps);
  });

  const colPropertiesDescription = optionalArrayToArray(
    optionalArrayToArray(
      mdxResponce.Body.ExecuteResponse.return.root.OlapInfo?.AxesInfo.AxisInfo,
    )[0]?.HierarchyInfo,
  )

  let rowPropertiesDescription = [] as any[]
  if (!params.columns.length) {
    rowPropertiesDescription = optionalArrayToArray(
      optionalArrayToArray(
        mdxResponce.Body.ExecuteResponse.return.root.OlapInfo?.AxesInfo
          .AxisInfo,
      )[0]?.HierarchyInfo,
    );
  } else {
    rowPropertiesDescription = optionalArrayToArray(
      optionalArrayToArray(
        mdxResponce.Body.ExecuteResponse.return.root.OlapInfo?.AxesInfo.AxisInfo,
      )[1]?.HierarchyInfo,
    );
  }

  propertiesRows = columnProperties.map(e => ({
    ...e,
    isProperty: true,
  }))

  propertiesCols = rowsProperties.map(e => ({
    ...e,
    isProperty: true,
  }))

  const colPropMaps = colPropertiesDescription.map(buildPropKeyMap)
  const rowPropMaps = rowPropertiesDescription.map(buildPropKeyMap)

  const propertiesCells = propertiesRows.map(prop => {
    return columns.map(col => {
      const propsOrigin = col.find(
        (e: any) => e.HIERARCHY_UNIQUE_NAME === prop.HIERARCHY_UNIQUE_NAME,
      )
      if (!propsOrigin) return { Value: '' }

      const colHierarchyIndex = col.indexOf(propsOrigin)
      const propMap = colPropMaps[colHierarchyIndex]
      const propName = `${prop.HIERARCHY_UNIQUE_NAME}.[${prop.PROPERTY_NAME}]`
      const objPropKey = propMap?.get(propName)

      if (objPropKey) {
        return {
          Value: propsOrigin[objPropKey],
        }
      }

      return {
        Value: '',
      }
    })
  })

  if (params.showColumnsProperties) {
    cells = [...propertiesCells, ...cells]
  }

  cells = cells.map((row, i) => {
    const propertiesCells = propertiesCols.map(prop => {
      const rowDesc = rows[i]

      const propsOrigin = rowDesc.find(
        (e: any) => e.HIERARCHY_UNIQUE_NAME === prop.HIERARCHY_UNIQUE_NAME,
      )
      if (!propsOrigin) return { Value: '' }

      const rowHierarchyIndex = rowDesc.indexOf(propsOrigin)
      const propMap = rowPropMaps[rowHierarchyIndex]
      const propName = `${prop.HIERARCHY_UNIQUE_NAME}.[${prop.PROPERTY_NAME}]`
      const objPropKey = propMap?.get(propName)

      if (objPropKey) {
        return {
          Value: propsOrigin[objPropKey],
        }
      }

      return {
        Value: '',
      }
    })

    if (params.showRowsProperties) {
      return [...propertiesCells, ...row]
    }
    return row
  })


  return {
    columns,
    rows,
    cells,
    propertiesRows,
    propertiesCols,
  }
}

/**
 * Cells by their ordinal. A server may leave empty cells out - SSAS does -
 * so a cell's place is its CellOrdinal, never its index in the list.
 */
interface CellNode {
  Value?: unknown
  __attrs?: { CellOrdinal?: string }
}

const cellsByOrdinal = <T extends CellNode>(cells: T[]): Map<number, T> => {
  const byOrdinal = new Map<number, T>()
  cells.forEach((cell, index) => byOrdinal.set(Number(cell?.__attrs?.CellOrdinal ?? index), cell))
  return byOrdinal
}

const parseCells = (sparse: CellNode[], columns: unknown[], rows: unknown[]) => {
  if (!sparse.length) return []
  const byOrdinal = cellsByOrdinal(sparse)
  const size = Math.max(columns.length, 1) * Math.max(rows.length, 1)
  // A cell left out is there all the same, empty, so the ones after it keep their place.
  const cells: CellNode[] = Array.from({ length: size }, (_, ordinal) => byOrdinal.get(ordinal) ?? { __attrs: { CellOrdinal: String(ordinal) } })
  if (!rows.length) {
    return [cells]
  } else if (!columns.length) {
    return cells.map(e => [e])
  }
  const cp = [...cells] as any[]

  const columnsArray = [] as any[]
  const count = columns.length
  while (cp.length) {
    columnsArray.push(cp.splice(0, count))
  }
  return columnsArray
}

/** A member's place in its hierarchy, from its unique name: [Time].[1997].[Q1] is 1997 › Q1. */
const memberPath = (uniqueName: string): string => {
  const parts = (uniqueName.match(/\[(?:[^\]]|\]\])*\]/g) ?? [uniqueName]).map(p => p.replace(/^\[|\]$/g, '').replace(/\]\]/g, ']'))
  return parts.length > 1 ? parts.slice(1).join(' › ') : parts[0]
}

/**
 * The captions a table is keyed by - its headers, its item fields and its
 * rowProperties. A caption that turns up twice (Q1 of 1997 and of 1998) is
 * told apart by its members' paths; otherwise one would overwrite the other
 * and its values would be lost.
 */
const tableCaptions = (tuples: { Member: unknown }[]): string[] => {
  const plain = tuples.map(t => optionalArrayToArray(t.Member).map(m => m.Caption).join(' - '))
  const seen = new Map<string, number>()
  for (const caption of plain) seen.set(caption, (seen.get(caption) ?? 0) + 1)
  const distinct = plain.map((caption, i) =>
    (seen.get(caption) ?? 0) > 1
      ? optionalArrayToArray(tuples[i].Member).map(m => memberPath(m.UName ?? m.Caption)).join(' - ')
      : caption,
  )
  // Two tuples of the very same members: numbered, rather than lost.
  const used = new Map<string, number>()
  return distinct.map(caption => {
    const n = (used.get(caption) ?? 0) + 1
    used.set(caption, n)
    return n > 1 ? `${caption} (${n})` : caption
  })
}

const parseRequestToTable = (mdxResponce: any, mainAxis = 0) => {
  let tupples = optionalArrayToArray(
      mdxResponce.Body.ExecuteResponse.return?.root.Axes?.Axis,
  )?.[0]?.Tuples
  const axis0 = Array.isArray(tupples) ? tupples.map(e => e.Tuple) : optionalArrayToArray(
    tupples?.Tuple,
  );


  tupples = optionalArrayToArray(
    mdxResponce.Body.ExecuteResponse.return?.root?.Axes?.Axis
  )?.[1]?.Tuples;

  // if (
  //   mdxResponce.Body.ExecuteResponse.return?.root?.Axes?.Axis?.[1]?.__attrs
  //     .name === 'Axis1'
  // ) {
  const axis1 = Array.isArray(tupples) ? tupples.map(e => e.Tuple) : optionalArrayToArray(
    tupples?.Tuple,
  );
  // let axis1 = [] as any[]
  // if (
  //   mdxResponce.Body.ExecuteResponse.return.root.Axes?.Axis?.[1]?.__attrs
  //     .name === 'Axis1'
  // ) {
  //   axis1 = optionalArrayToArray(
  //     mdxResponce.Body.ExecuteResponse.return.root.Axes?.Axis?.[1]?.Tuples
  //       ?.Tuple,
  //   )
  // }

  const cells = cellsByOrdinal(optionalArrayToArray(
    mdxResponce.Body.ExecuteResponse.return.root.CellData?.Cell,
  ))

  const table = {
    rows: [],
    items: [],
    headers: ['Caption'],
    rowProperties: {},
  } as any

  const getCaption = (member: any) => {
    return optionalArrayToArray(member).map(m => m.Caption).join(' - ')
  }

  if (mainAxis === 0) {
    table.headers.push(...tableCaptions(axis1))

    const rowCaptions = tableCaptions(axis0)
    axis0.forEach((item, i) => {
      const caption = rowCaptions[i]
      table.rows[i] = [caption]
      table.rowProperties[caption] = item.Member;
      axis1.forEach((subItem, j) => {
        table.rows[i].push(cells.get(j * axis0.length + i)?.Value)
      })
    })
  } else if (mainAxis === 1) {
    axis0.forEach((item, index) => {
      table.headers.push(getCaption(item.Member))
    })

    axis1.forEach((item, i) => {
      const caption = getCaption(item.Member)
      table.items[i] = [caption]
      table.rowProperties[caption] = item.Member;
      axis0.forEach((subItem, j) => {
        table.items[i].push(cells.get(i * axis0.length + j)?.Value)
      })
    })
  }

  table.items = table.rows.map((row: any, i: number) => {
    const mappedItem = {} as any

    row.forEach((value: any, i: number) => {
      mappedItem[table.headers[i]] = value
    })

    return mappedItem
  })

  // if (mainAxis === 0) {
  //     axis1.forEach((item, index) => {
  //         const newItem = item.Member.Caption;
  //         table.headers.push(newItem);
  //     });

  //     axis0.forEach((item, i) => {
  //         table.items[item.Member.Caption] = [];
  //         axis1.forEach((subItem, j) => {
  //             table.items[item.Member.Caption].push(
  //                 cellsArray[j * axis0.length + i].Value,
  //             );
  //         });
  //     });
  // } else if (mainAxis === 1) {
  //     axis0.forEach((item, index) => {
  //         const newItem = item.Member.Caption;
  //         table.headers.push(newItem);
  //     });

  //     axis1.forEach((item, i) => {
  //         table.items[item.Member.Caption] = [];
  //         axis0.forEach((subItem, j) => {
  //             table.items[item.Member.Caption].push(
  //                 cellsArray[i * axis0.length + j].Value,
  //             );
  //         });
  //     });
  // }

  return table
}

export { parseMdxRequest, parseRequestToTable }
