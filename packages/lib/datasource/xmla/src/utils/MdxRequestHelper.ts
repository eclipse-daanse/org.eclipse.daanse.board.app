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

const parseCells = (cells: any[], columns: any[], rows: any[]) => {
  if (!cells.length) return []
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

  const cellsArray = optionalArrayToArray(
    mdxResponce.Body.ExecuteResponse.return.root.CellData?.Cell,
  )

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
    axis1.forEach((item, index) => {
      table.headers.push(getCaption(item.Member))
    })

    axis0.forEach((item, i) => {
      const caption = getCaption(item.Member)
      table.rows[i] = [caption]
      table.rowProperties[caption] = item.Member;
      axis1.forEach((subItem, j) => {
        table.rows[i].push(cellsArray[j * axis0.length + i]?.Value)
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
        table.items[i].push(cellsArray[i * axis0.length + j]?.Value)
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
