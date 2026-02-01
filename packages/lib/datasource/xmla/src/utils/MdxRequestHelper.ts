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
  // console.log(properties);

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

  // columns.value[0]?.forEach((col) => {
  //   const colPropsShown = pivotTableStore.state.membersWithProps.includes(
  //     col.HIERARCHY_UNIQUE_NAME,
  //   );
  //   if (!colPropsShown) return;

  //   const colProps: any[] = properties.filter(
  //     (prop) => prop.HIERARCHY_UNIQUE_NAME === col.HIERARCHY_UNIQUE_NAME,
  //   );
  //   columnProperties.push(...colProps);
  // });

  // rows.value[0]?.forEach((row) => {
  //   const rowPropsShown = pivotTableStore.state.membersWithProps.includes(
  //     row.HIERARCHY_UNIQUE_NAME,
  //   );
  //   if (!rowPropsShown) return;

  //   const rowProps: any[] = properties.filter(
  //     (prop) => prop.HIERARCHY_UNIQUE_NAME === row.HIERARCHY_UNIQUE_NAME,
  //   );
  //   rowsProperties.push(...rowProps);
  // });

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

  const propertiesCells = propertiesRows.map(prop => {
    return columns.map(col => {
      const propsOrigin = col.find(
        (e: any) => e.HIERARCHY_UNIQUE_NAME === prop.HIERARCHY_UNIQUE_NAME,
      )

      const colHierarchyIndex = col.indexOf(propsOrigin)
      const desc = colPropertiesDescription[colHierarchyIndex]
      const propName = `${prop.HIERARCHY_UNIQUE_NAME}.[${prop.PROPERTY_NAME}]`
      const objPropName = Object.entries(desc).find((keyValue: any) => {
        if (Array.isArray(keyValue[1])) {
          const att = keyValue[1].find(entry => {
            return entry.__attrs?.name === propName
          })
          if (att) return att
        } else {
          return keyValue[1]?.__attrs?.name === propName
        }
      })

      if (objPropName) {
        return {
          Value: propsOrigin[objPropName[0]],
        }
      }

      return {
        Value: '',
      }
    })
  })

  cells = [...propertiesCells, ...cells]

  cells = cells.map((row, i) => {
    const propertiesCells = propertiesCols.map(prop => {
      const rowDesc = rows[i]

      const propsOrigin = rowDesc.find(
        (e: any) => e.HIERARCHY_UNIQUE_NAME === prop.HIERARCHY_UNIQUE_NAME,
      )

      const rowHierarchyIndex = rowDesc.indexOf(propsOrigin)
      const desc = rowPropertiesDescription[rowHierarchyIndex]
      const propName = `${prop.HIERARCHY_UNIQUE_NAME}.[${prop.PROPERTY_NAME}]`
      const objPropName = Object.entries(desc)?.find((keyValue: any) => {
        return keyValue[1]?.__attrs?.name === propName
      })

      if (objPropName) {
        return {
          Value: propsOrigin[objPropName[0]],
        }
      }

      return {
        Value: '',
      }
    })

    return [...propertiesCells, ...row]
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

  if (mainAxis === 0) {
    axis1.forEach((item, index) => {
      const newItem = item.Member.Caption
      table.headers.push(newItem)
    })

    axis0.forEach((item, i) => {
      console.log(i)
      table.rows[i] = [item.Member.Caption]
      table.rowProperties[item.Member.Caption] = item.Member;
      axis1.forEach((subItem, j) => {
        table.rows[i].push(cellsArray[j * axis0.length + i].Value)
      })
    })
  } else if (mainAxis === 1) {
    axis0.forEach((item, index) => {
      const newItem = item.Member.Caption
      table.headers.push(newItem)
    })

    axis1.forEach((item, i) => {
      table.items[i] = [item.Member.Caption]
      table.rowProperties[item.Member.Caption] = item.Member;
      axis0.forEach((subItem, j) => {
        table.items[i].push(cellsArray[i * axis0.length + j].Value)
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
