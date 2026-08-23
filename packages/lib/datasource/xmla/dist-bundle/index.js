import { BaseDatasource } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.connection";
import { inject } from "@eclipse-daanse/tsm";
const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
const rnds8 = new Uint8Array(16);
function rng() {
  return crypto.getRandomValues(rnds8);
}
function v4(options, buf, offset) {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return _v4(options);
}
function _v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  return unsafeStringify(rnds);
}
async function getRowsDrilldownRequestString(hierarchy, rowsDrilldownMember, expandedMembers, levels) {
  const metadataLevels = levels;
  if (rowsDrilldownMember) {
    const uid = "id" + v4();
    const setSection = `SET [Row_Dim_${uid}] AS 'VisualTotals(Distinct(Hierarchize({Ascendants(${rowsDrilldownMember.UName}), Descendants(${rowsDrilldownMember.UName})})))'`;
    const rowsMemberLevel = metadataLevels.find(
      (e) => e.LEVEL_UNIQUE_NAME === rowsDrilldownMember.LName
    );
    const rowsLevels = metadataLevels.filter((e) => {
      return e.HIERARCHY_UNIQUE_NAME === rowsMemberLevel?.HIERARCHY_UNIQUE_NAME && e.LEVEL_NUMBER <= rowsMemberLevel.LEVEL_NUMBER;
    });
    let hierarchizeString = "";
    for (let i = 0; i < rowsLevels.length; i++) {
      if (!hierarchizeString.length) {
        hierarchizeString = `
        DrilldownLevel({
          ${rowsLevels[i].LEVEL_UNIQUE_NAME}
        })
        `;
      } else {
        hierarchizeString = `
          DrilldownLevel({
            ${hierarchizeString}
            },
            ${rowsLevels[i].LEVEL_UNIQUE_NAME}
          )
        `;
      }
    }
    if (expandedMembers) {
      const rowsRootLevel = metadataLevels.find((e) => {
        return e.HIERARCHY_UNIQUE_NAME === expandedMembers[0]?.HIERARCHY_UNIQUE_NAME && e.LEVEL_NUMBER === "0";
      });
      for (let i = 0; i < expandedMembers.length; i++) {
        if (!hierarchizeString.length) {
          hierarchizeString = `DrilldownMember({{DrilldownLevel({${rowsRootLevel?.LEVEL_UNIQUE_NAME}})}}, {${expandedMembers[i].UName}})`;
        } else {
          hierarchizeString = `
            DrilldownMember({{
              ${hierarchizeString}
            }}, {${expandedMembers[i].UName}})
          `;
        }
      }
    }
    hierarchizeString = `
      Hierarchize(Intersect(AddCalculatedMembers({
        ${hierarchizeString}
      }), [Row_Dim_${uid}]))
    `;
    return {
      with: setSection,
      select: hierarchizeString
    };
  } else {
    if (!hierarchy.filters?.enabled) {
      let hierarchizeString = "";
      const rowsRootLevel = metadataLevels.find((e) => {
        return e.HIERARCHY_UNIQUE_NAME === expandedMembers[0]?.HIERARCHY_UNIQUE_NAME && e.LEVEL_NUMBER === "0";
      });
      for (let i = 0; i < expandedMembers.length; i++) {
        if (i === 0) {
          if (expandedMembers[i].LNum === "0") {
            hierarchizeString = `
              DrilldownMember({{
                ${rowsRootLevel?.LEVEL_UNIQUE_NAME}.members
              }}, {${expandedMembers[i].UName}})
            `;
          } else {
            hierarchizeString = `DrilldownMember({{DrilldownLevel({${rowsRootLevel?.LEVEL_UNIQUE_NAME}})}}, {${expandedMembers[i].UName}})`;
          }
        } else {
          hierarchizeString = `
            DrilldownMember({{
              ${hierarchizeString}
            }}, {${expandedMembers[i].UName}})
          `;
        }
      }
      hierarchizeString = `
        Hierarchize(
            ${hierarchizeString}
        )`;
      return {
        with: "",
        select: hierarchizeString
      };
    } else {
      const filter = hierarchy.filters;
      let withSection = "";
      let selectSection = "";
      const selectedFilters = [];
      if (filter?.multipleChoise) {
        selectedFilters.push(...filter.selectedItems);
      } else {
        selectedFilters.push(filter.selectedItem);
      }
      const filtersLevels = [];
      selectedFilters.forEach((e) => {
        const levelNum = e.LNum;
        if (filtersLevels[levelNum]) {
          filtersLevels[levelNum].push(e);
        } else {
          filtersLevels[levelNum] = [e];
        }
      });
      const rowsLevels = metadataLevels.filter((e) => {
        return e.HIERARCHY_UNIQUE_NAME === hierarchy.originalItem.HIERARCHY_UNIQUE_NAME;
      });
      const rootLevel = rowsLevels.find((e) => e.LEVEL_NUMBER === "0");
      if (!rootLevel)
        return {
          select: "",
          with: ""
        };
      const uid = "id" + v4();
      const filterSetName = `[FILTER_${uid}]`;
      const set = selectedFilters.map((e) => `Ascendants(${e.UName}), Descendants(${e.UName})`).join(",");
      const deseclectedFiltersLevels = [];
      if (filter.deselectedItems) {
        filter.deselectedItems.forEach((e) => {
          const levelNum = e.LNum;
          if (deseclectedFiltersLevels[levelNum]) {
            deseclectedFiltersLevels[levelNum].push(e);
          } else {
            deseclectedFiltersLevels[levelNum] = [e];
          }
        });
      }
      const filtersDepth = Math.max(
        filtersLevels.length,
        deseclectedFiltersLevels.length
      );
      const levels2 = [];
      expandedMembers.forEach((element) => {
        if (element.HIERARCHY_UNIQUE_NAME !== hierarchy.originalItem.HIERARCHY_UNIQUE_NAME) {
          return;
        }
        const levelNum = parseInt(element.LNum);
        if (levels2[levelNum]) levels2[levelNum].push(element);
        else levels2[levelNum] = [element];
      });
      if (levels2.length) {
        for (let i = 0; i < levels2.length; i++) {
          const joinedMembers = levels2[i].map((e) => e.UName).join(",");
          if (i === 0) {
            selectSection = `DrilldownMember({{${rootLevel.LEVEL_UNIQUE_NAME}.members}}, {${joinedMembers}})`;
          } else {
            selectSection = `DrilldownMember({{${selectSection}}}, {${joinedMembers}})`;
          }
        }
        selectSection = `Intersect(AddCalculatedMembers(${selectSection}), ${filterSetName})`;
      } else {
        selectSection = `Intersect(AddCalculatedMembers({${rootLevel.LEVEL_UNIQUE_NAME}.members}), ${filterSetName}))`;
      }
      for (let i = 0; i < filtersDepth; i++) {
        if (filtersLevels[i]) {
          const aggregatedFiltersForLevel = filtersLevels[i].map((e) => `Ascendants(${e.UName}), Descendants(${e.UName})`).join(",");
          if (withSection.length) {
            withSection = `Union({${aggregatedFiltersForLevel}}, {${withSection}})`;
          } else {
            withSection = `{${aggregatedFiltersForLevel}}`;
          }
        }
        if (deseclectedFiltersLevels[i]) {
          const aggregatedFiltersForLevel = deseclectedFiltersLevels[i].map((e) => `Descendants(${e.UName})`).join(",");
          if (withSection.length) {
            withSection = `Except({${withSection}}, {${aggregatedFiltersForLevel}})`;
          } else {
            withSection = `{${aggregatedFiltersForLevel}}`;
          }
        }
      }
      selectSection = `Hierarchize(${selectSection})`;
      if (filter.selectAll) {
        withSection = `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(${withSection})))' `;
      } else {
        withSection = `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(Intersect({${set}}, ${withSection}))))' `;
      }
      return {
        with: withSection,
        select: selectSection
      };
    }
  }
}
async function getColsDrilldownRequestString(hierarchy, columnsDrilldownMember, expandedMembers, levels) {
  const metadataLevels = levels;
  if (columnsDrilldownMember) {
    const uid = "id" + v4();
    const setSection = `SET [Col_Dim_${uid}] AS 'VisualTotals(Distinct(Hierarchize({Ascendants(${columnsDrilldownMember.UName}), Descendants(${columnsDrilldownMember.UName})})))'`;
    const colsMemberLevel = metadataLevels.find(
      (e) => e.LEVEL_UNIQUE_NAME === columnsDrilldownMember.LName
    );
    const colsLevels = metadataLevels.filter((e) => {
      return e.HIERARCHY_UNIQUE_NAME === colsMemberLevel?.HIERARCHY_UNIQUE_NAME && e.LEVEL_NUMBER <= colsMemberLevel.LEVEL_NUMBER;
    });
    let hierarchizeString = "";
    for (let i = 0; i < colsLevels.length; i++) {
      if (!hierarchizeString.length) {
        hierarchizeString = `
        DrilldownLevel({
          ${colsLevels[i].LEVEL_UNIQUE_NAME}
        })
        `;
      } else {
        hierarchizeString = `
          DrilldownLevel({
            ${hierarchizeString}
            },
            ${colsLevels[i].LEVEL_UNIQUE_NAME}
          )
        `;
      }
    }
    if (expandedMembers) {
      const colsRootLevel = metadataLevels.find((e) => {
        return e.HIERARCHY_UNIQUE_NAME === expandedMembers[0]?.HIERARCHY_UNIQUE_NAME && e.LEVEL_NUMBER === "0";
      });
      for (let i = 0; i < expandedMembers.length; i++) {
        if (!hierarchizeString.length) {
          hierarchizeString = `DrilldownMember({{DrilldownLevel({${colsRootLevel?.LEVEL_UNIQUE_NAME}})}}, {${expandedMembers[i].UName}})`;
        } else {
          hierarchizeString = `
            DrilldownMember({{
              ${hierarchizeString}
            }}, {${expandedMembers[i].UName}})
          `;
        }
      }
    }
    hierarchizeString = `
    Hierarchize(Intersect(AddCalculatedMembers({
      ${hierarchizeString}
    }), [Col_Dim_${uid}]))
    `;
    return {
      with: setSection,
      select: hierarchizeString
    };
  } else {
    if (!hierarchy.filters?.enabled) {
      let hierarchizeString = "";
      const colsRootLevel = metadataLevels.find((e) => {
        return e.HIERARCHY_UNIQUE_NAME === expandedMembers[0]?.HIERARCHY_UNIQUE_NAME && e.LEVEL_NUMBER === "0";
      });
      for (let i = 0; i < expandedMembers.length; i++) {
        if (i === 0) {
          if (expandedMembers[i].LNum === "0") {
            hierarchizeString = `
              DrilldownMember({{
                ${colsRootLevel?.LEVEL_UNIQUE_NAME}.members
              }}, {${expandedMembers[i].UName}})
            `;
          } else {
            hierarchizeString = `DrilldownMember({{DrilldownLevel({${colsRootLevel?.LEVEL_UNIQUE_NAME}})}}, {${expandedMembers[i].UName}})`;
          }
        } else {
          hierarchizeString = `
            DrilldownMember({{
              ${hierarchizeString}
            }}, {${expandedMembers[i].UName}})
          `;
        }
      }
      hierarchizeString = `
        Hierarchize(
          AddCalculatedMembers
          (
            ${hierarchizeString}
          )
        )`;
      return {
        with: "",
        select: hierarchizeString
      };
    } else {
      const filter = hierarchy.filters;
      let withSection = "";
      let selectSection = "";
      const selectedFilters = [];
      if (filter?.multipleChoise) {
        selectedFilters.push(...filter.selectedItems);
      } else {
        selectedFilters.push(filter.selectedItem);
      }
      const filtersLevels = [];
      selectedFilters.forEach((e) => {
        const levelNum = e.LNum;
        if (filtersLevels[levelNum]) {
          filtersLevels[levelNum].push(e);
        } else {
          filtersLevels[levelNum] = [e];
        }
      });
      const rowsLevels = metadataLevels.filter((e) => {
        return e.HIERARCHY_UNIQUE_NAME === hierarchy.originalItem.HIERARCHY_UNIQUE_NAME;
      });
      const rootLevel = rowsLevels.find((e) => e.LEVEL_NUMBER === "0");
      if (!rootLevel)
        return {
          select: "",
          with: ""
        };
      const uid = "id" + v4();
      const filterSetName = `[FILTER_${uid}]`;
      const set = selectedFilters.map((e) => `Ascendants(${e.UName}), Descendants(${e.UName})`).join(",");
      const deseclectedFiltersLevels = [];
      if (filter.deselectedItems) {
        filter.deselectedItems.forEach((e) => {
          const levelNum = e.LNum;
          if (deseclectedFiltersLevels[levelNum]) {
            deseclectedFiltersLevels[levelNum].push(e);
          } else {
            deseclectedFiltersLevels[levelNum] = [e];
          }
        });
      }
      const filtersDepth = Math.max(
        filtersLevels.length,
        deseclectedFiltersLevels.length
      );
      const levels2 = [];
      expandedMembers.forEach((element) => {
        if (element.HIERARCHY_UNIQUE_NAME !== hierarchy.originalItem.HIERARCHY_UNIQUE_NAME) {
          return;
        }
        const levelNum = parseInt(element.LNum);
        if (levels2[levelNum]) levels2[levelNum].push(element);
        else levels2[levelNum] = [element];
      });
      if (levels2.length) {
        for (let i = 0; i < levels2.length; i++) {
          const joinedMembers = levels2[i].map((e) => e.UName).join(",");
          if (i === 0) {
            selectSection = `DrilldownMember({{${rootLevel.LEVEL_UNIQUE_NAME}.members}}, {${joinedMembers}})`;
          } else {
            selectSection = `DrilldownMember({{${selectSection}}}, {${joinedMembers}})`;
          }
        }
        selectSection = `Intersect(AddCalculatedMembers(${selectSection}), ${filterSetName})`;
      } else {
        selectSection = `Intersect(AddCalculatedMembers({${rootLevel.LEVEL_UNIQUE_NAME}.members}), ${filterSetName}))`;
      }
      for (let i = 0; i < filtersDepth; i++) {
        if (filtersLevels[i]) {
          const aggregatedFiltersForLevel = filtersLevels[i].map((e) => `Ascendants(${e.UName}), Descendants(${e.UName})`).join(",");
          if (withSection.length) {
            withSection = `Union({${aggregatedFiltersForLevel}}, {${withSection}})`;
          } else {
            withSection = `{${aggregatedFiltersForLevel}}`;
          }
        }
        if (deseclectedFiltersLevels[i]) {
          const aggregatedFiltersForLevel = deseclectedFiltersLevels[i].map((e) => `Descendants(${e.UName})`).join(",");
          if (withSection.length) {
            withSection = `Except({${withSection}}, {${aggregatedFiltersForLevel}})`;
          } else {
            withSection = `{${aggregatedFiltersForLevel}}`;
          }
        }
      }
      selectSection = `Hierarchize(${selectSection})`;
      if (filter.selectAll) {
        withSection = `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(${withSection})))' `;
      } else {
        withSection = `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(Intersect({${set}}, ${withSection}))))' `;
      }
      return {
        with: withSection,
        select: selectSection
      };
    }
  }
}
async function getMdxRequest(cubename, rowsDrilldownMembers, columnsDrilldownMembers, rowsExpandedMembers, columnsExpandedMembers, rows, columns, measures, pivotTableSettings, properties, filters, levels) {
  if (measures.length === 1 && pivotTableSettings?.showSingleMeasureHeader === false) {
    rows = rows.filter((e) => e.type !== "Values");
    columns = columns.filter((e) => e.type !== "Values");
  }
  const filtersRequest = getFiltersRequest(filters);
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
      levels
    );
  } else {
    let withSection = "WITH";
    let selectSection = "SELECT";
    const hasValues = rows.some((e) => e.type === "Values") || columns.some((e) => e.type === "Values");
    const fromSection = getFromPart(measures, cubename, filtersRequest.where, hasValues);
    if (!pivotTableSettings.showEmpty) selectSection += " NON EMPTY";
    const rowsProperties = getRowsProperies(rows, properties);
    const rowsRequest = await getRowsRequest(
      rows,
      rowsDrilldownMembers,
      rowsExpandedMembers,
      measures,
      levels
    );
    if (rowsRequest.with.length) {
      withSection = `${withSection} ${rowsRequest.with}`;
    }
    selectSection = `${selectSection}
${rowsRequest.select} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${rowsProperties} ON 1,
`;
    if (!pivotTableSettings.showEmpty) selectSection += " NON EMPTY";
    const colsProperties = getColumnsProperies(columns, properties);
    const colsRequest = await getColumnsRequest(
      columns,
      columnsDrilldownMembers,
      columnsExpandedMembers,
      measures,
      levels
    );
    if (colsRequest.with.length) {
      withSection = `${withSection} ${colsRequest.with}`;
    }
    selectSection = `${selectSection}
${colsRequest.select} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${colsProperties} ON 0
`;
    let resultString = "";
    if (filtersRequest.with) {
      withSection += filtersRequest.with;
    }
    if (withSection.length > 4) {
      resultString += withSection;
    }
    resultString += "\n";
    resultString += selectSection;
    resultString += fromSection;
    return resultString;
  }
}
async function getColumnsRequest(columns, columnsDrilldownMembers, colsExpandedMembers, measures, levels) {
  let columnsSelect = "";
  let columnsWhere = "";
  if (columns.length >= 1) {
    for (let i = 0; i < columns.length; i++) {
      const e = columns[i];
      const columnsRequest = await getSingleColumnRequest(
        e,
        columnsDrilldownMembers,
        colsExpandedMembers,
        measures,
        levels
      );
      if (i === 0) {
        columnsSelect = columnsRequest.select;
        columnsWhere = columnsRequest.with;
      } else {
        columnsWhere += columnsRequest.with;
        columnsSelect = `
          CrossJoin(
            ${columnsSelect},
            ${columnsRequest.select}
          )`;
      }
    }
  } else {
    columnsSelect = "";
  }
  return {
    select: columnsSelect,
    with: columnsWhere
  };
}
async function getSingleColumnRequest(e, columnsDrilldownMembers, colsExpandedMembers, measures, levels) {
  if (e.type === "Values") {
    const selectRequest = measures.map((e2) => e2.originalItem.MEASURE_UNIQUE_NAME).join(",");
    return {
      select: `{${selectRequest}}`,
      with: ""
    };
  }
  const filteredRequest = await getAxisFilterRequest(e, levels);
  const drilledDownMember = columnsDrilldownMembers.find((drilldownedMembers) => {
    return drilldownedMembers.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME;
  });
  const expandedMembers = colsExpandedMembers.filter((drilldownedMembers) => {
    return drilldownedMembers.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME;
  });
  const rootExpanded = expandedMembers.some((member) => member.LNum === "0");
  if (drilledDownMember || expandedMembers.length && rootExpanded) {
    const request = await getColsDrilldownRequestString(
      e,
      drilledDownMember,
      colsExpandedMembers,
      levels
    );
    return {
      with: request.with,
      select: request.select
    };
  }
  if (filteredRequest) {
    return {
      select: filteredRequest.select,
      with: filteredRequest.with
    };
  }
  const rootLevel = levels.find(
    (l) => l.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME && l.LEVEL_NUMBER === "0"
  );
  return {
    select: `Hierarchize(AddCalculatedMembers({${rootLevel?.LEVEL_UNIQUE_NAME}.members}))`,
    with: ""
  };
}
async function getRowsRequest(rows, rowsDrilldownMembers, rowsExpandedMembers, measures, levels) {
  let rowsSelect = "";
  let rowsWhere = "";
  if (rows.length >= 1) {
    for (let i = 0; i < rows.length; i++) {
      const e = rows[i];
      const rowsRequest = await getSingleRowRequest(
        e,
        rowsDrilldownMembers,
        rowsExpandedMembers,
        measures,
        levels
      );
      if (i === 0) {
        rowsSelect = rowsRequest.select;
        rowsWhere = rowsRequest.with;
      } else {
        rowsWhere += rowsRequest.with;
        rowsSelect = `
          CrossJoin(
            ${rowsSelect},
            ${rowsRequest.select}
          )`;
      }
    }
  } else if (rows.length === 1) {
    rowsSelect = `{ ${rows[0].originalItem.HIERARCHY_UNIQUE_NAME}.Members }`;
  } else {
    rowsSelect = "";
  }
  return {
    select: rowsSelect,
    with: rowsWhere
  };
}
async function getSingleRowRequest(e, rowsDrilldownMembers, rowsExpandedMembers, measures, levels) {
  if (e.type === "Values") {
    const selectRequest = measures.map((e2) => e2.originalItem.MEASURE_UNIQUE_NAME).join(",");
    return {
      select: `{${selectRequest}}`,
      with: ""
    };
  }
  const filteredRequest = await getAxisFilterRequest(e, levels);
  const drilledDownMember = rowsDrilldownMembers.find((drilldownedMembers) => {
    return drilldownedMembers.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME;
  });
  const expandedMembers = rowsExpandedMembers.filter((drilldownedMembers) => {
    return drilldownedMembers.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME;
  });
  const rootExpanded = expandedMembers.some((member) => member.LNum === "0");
  if (drilledDownMember || expandedMembers.length && rootExpanded) {
    const request = await getRowsDrilldownRequestString(
      e,
      drilledDownMember,
      expandedMembers,
      levels
    );
    return {
      with: request.with,
      select: request.select
    };
  }
  if (filteredRequest) {
    return {
      select: filteredRequest.select,
      with: filteredRequest.with
    };
  }
  const rootLevel = levels.find(
    (l) => l.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME && l.LEVEL_NUMBER === "0"
  );
  return {
    select: `Hierarchize(AddCalculatedMembers({${rootLevel?.LEVEL_UNIQUE_NAME}.members}))`,
    with: ""
  };
}
function getRowsProperies(rows, properties) {
  const rowsProperties = [];
  rows.forEach((e) => {
    rowsProperties.push(
      properties.filter(
        (prop) => prop.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME
      )
    );
  });
  let rowsPropertiesList = rowsProperties.flat(1).map((e) => `${e.LEVEL_UNIQUE_NAME}.[${e.PROPERTY_NAME}]`).join(",");
  if (rowsPropertiesList) rowsPropertiesList = `,${rowsPropertiesList}`;
  return rowsPropertiesList;
}
function getColumnsProperies(columns, properties) {
  const columnsProperties = [];
  columns.forEach((e) => {
    columnsProperties.push(
      properties.filter(
        (prop) => prop.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME
      )
    );
  });
  let columnsPropertiesList = columnsProperties.flat(1).map((e) => `${e.LEVEL_UNIQUE_NAME}.[${e.PROPERTY_NAME}]`).join(",");
  if (columnsPropertiesList) columnsPropertiesList = `,${columnsPropertiesList}`;
  return columnsPropertiesList;
}
async function getSingleHierarchyRequest(rows, columns, measures, cubename, rowsDrilldownMembers, columnsDrilldownMembers, rowsExpandedMembers, columnsExpandedMembers, pivotTableSettings, properties, filtersRequest, levels) {
  const forceValues = rows.length === 0 && columns.length === 0 && measures.length > 0 && pivotTableSettings?.showSingleMeasureHeader !== false;
  const hasValues = rows.some((e) => e.type === "Values") || columns.some((e) => e.type === "Values") || forceValues;
  const selectPart = getSelectWithOptions(pivotTableSettings);
  const fromPart = getFromPart(measures, cubename, filtersRequest.where, hasValues);
  if (rows.length) {
    const request = await getRowsRequest(
      rows,
      rowsDrilldownMembers,
      rowsExpandedMembers,
      measures,
      levels
    );
    const rowsSelect = request.select;
    let rowsWith = request.with ? `WITH ${request.with}` : "";
    if (filtersRequest.with) {
      if (rowsWith) rowsWith += filtersRequest.with;
      else rowsWith = `WITH ${filtersRequest.with}`;
    }
    const rowsProperties = getRowsProperies(rows, properties);
    return `
      ${rowsWith}
      ${selectPart}
      ${rowsSelect}
      DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${rowsProperties} ON 0
      ${fromPart}
    `;
  } else if (columns.length) {
    const request = await getColumnsRequest(
      columns,
      columnsDrilldownMembers,
      columnsExpandedMembers,
      measures,
      levels
    );
    const colsSelect = request.select;
    let colsWith = request.with ? `WITH ${request.with}` : "";
    if (filtersRequest.with) {
      if (colsWith) colsWith += filtersRequest.with;
      else colsWith = `WITH ${filtersRequest.with}`;
    }
    const colsProperties = getColumnsProperies(columns, properties);
    return `
      ${colsWith}
      ${selectPart}
      ${colsSelect}
      DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${colsProperties} ON 0
      ${fromPart}
    `;
  } else if (measures.length) {
    const selectRequest = measures.map((e) => e.originalItem.MEASURE_UNIQUE_NAME).join(",");
    return `
      ${selectPart}
      {${selectRequest}} ON 0
      ${fromPart}
    `;
  }
  return "";
}
function getSelectWithOptions(pivotTableSettings) {
  let result = "SELECT";
  if (!pivotTableSettings.showEmpty) result += " NON EMPTY";
  return result;
}
function getFromPart(measures, cubename, filtersWhere, hasValues = false) {
  let measuresPart = "";
  if (measures.length === 1 && !hasValues) {
    measuresPart = `${measures[0].originalItem.MEASURE_UNIQUE_NAME}`;
  }
  let result = "";
  if (filtersWhere) {
    if (measuresPart) {
      result = `FROM [${cubename}] WHERE (${filtersWhere},${measuresPart}) CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS`;
    } else {
      result = `FROM [${cubename}] WHERE (${filtersWhere}) CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS`;
    }
  } else if (measuresPart) {
    result = `FROM [${cubename}] WHERE ${measuresPart} CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS`;
  } else {
    result = `FROM [${cubename}] CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS`;
  }
  return result;
}
function getFiltersRequest(filters) {
  let withSection = "";
  let whereSection = "";
  if (!filters) {
    return {
      where: null,
      with: null
    };
  }
  const filtersArray = filters.map((e) => e.filters);
  filtersArray.forEach((filter) => {
    if (!filter?.enabled) return;
    if (filter.multipleChoise) {
      const uid = "id" + v4();
      const filterSetName = `${filter.originalItem.DIMENSION_UNIQUE_NAME}.[FILTER_${uid}]`;
      const selectedItems = filter.selectedItems.map((e) => e.UName).join(",");
      withSection += ` MEMBER ${filterSetName} AS 'Aggregate({${selectedItems}})'`;
      if (whereSection.length) whereSection += ",";
      whereSection += filterSetName;
    } else {
      if (whereSection.length) whereSection += ",";
      whereSection += filter.selectedItem.UName;
    }
  });
  return {
    where: whereSection,
    with: withSection
  };
}
async function getAxisFilterRequest(e, levels) {
  const filter = e.filters;
  let withSection = "";
  let selectSection = "";
  if (!filter?.enabled) return null;
  const selectedFilters = [];
  if (filter.multipleChoise) {
    selectedFilters.push(...filter.selectedItems);
  } else {
    selectedFilters.push(filter.selectedItem);
  }
  const filtersLevels = [];
  selectedFilters.forEach((e2) => {
    const levelNum = e2.LNum;
    if (filtersLevels[levelNum]) {
      filtersLevels[levelNum].push(e2);
    } else {
      filtersLevels[levelNum] = [e2];
    }
  });
  const deseclectedFiltersLevels = [];
  if (filter.deselectedItems) {
    filter.deselectedItems.forEach((e2) => {
      const levelNum = e2.LNum;
      if (deseclectedFiltersLevels[levelNum]) {
        deseclectedFiltersLevels[levelNum].push(e2);
      } else {
        deseclectedFiltersLevels[levelNum] = [e2];
      }
    });
  }
  const filtersDepth = Math.max(
    filtersLevels.length,
    deseclectedFiltersLevels.length
  );
  if (filter.selectAll && !deseclectedFiltersLevels.length) {
    const uid = "id" + v4();
    const filterSetName = `[FILTER_${uid}]`;
    const rootLevel = levels.find(
      (l) => l.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME && l.LEVEL_NUMBER === "0"
    );
    withSection = `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(AddCalculatedMembers({${rootLevel?.LEVEL_UNIQUE_NAME}.members}))))' `;
    selectSection = `Hierarchize(AddCalculatedMembers({${rootLevel?.LEVEL_UNIQUE_NAME}.members}))`;
  } else {
    const rowsLevels = levels.filter((l) => {
      return l.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME;
    });
    const rootLevel = rowsLevels.find((e2) => e2.LEVEL_NUMBER === "0");
    if (!rootLevel) return null;
    const uid = "id" + v4();
    const filterSetName = `[FILTER_${uid}]`;
    const set = selectedFilters.map((e2) => `Ascendants(${e2.UName}), Descendants(${e2.UName})`).join(",");
    for (let i = 0; i < filtersDepth; i++) {
      if (filtersLevels[i]) {
        const aggregatedFiltersForLevel = filtersLevels[i].map((e2) => `Ascendants(${e2.UName}), Descendants(${e2.UName})`).join(",");
        if (withSection.length) {
          withSection = `Union({${aggregatedFiltersForLevel}}, {${withSection}})`;
        } else {
          withSection = `{${aggregatedFiltersForLevel}}`;
        }
      }
      if (deseclectedFiltersLevels[i]) {
        const aggregatedFiltersForLevel = deseclectedFiltersLevels[i].map((e2) => `Descendants(${e2.UName})`).join(",");
        if (withSection.length) {
          withSection = `Except({${withSection}}, {${aggregatedFiltersForLevel}})`;
        } else {
          withSection = `{${aggregatedFiltersForLevel}}`;
        }
      }
    }
    if (filter.selectAll) {
      withSection = `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(${withSection})))' `;
    } else {
      withSection = `SET ${filterSetName} AS 'VisualTotals(Distinct(Hierarchize(Intersect({${set}}, ${withSection}))))' `;
    }
    selectSection = `Hierarchize(Intersect(AddCalculatedMembers({${rootLevel.LEVEL_UNIQUE_NAME}.members}), ${filterSetName}))`;
  }
  return {
    with: withSection,
    select: selectSection
  };
}
function optionalArrayToArray(el) {
  if (Array.isArray(el)) return el;
  if (el) {
    return [el];
  }
  return [];
}
const parseMdxRequest = (mdxResponce, params) => {
  let columns = [];
  let rows = [];
  let cells = [];
  let propertiesRows = [];
  let propertiesCols = [];
  if (!mdxResponce.Body.ExecuteResponse) return null;
  const properties = params.properties;
  console.log("properties in helper", properties);
  let tupples = optionalArrayToArray(
    mdxResponce.Body.ExecuteResponse.return?.root.Axes?.Axis
  )?.[0]?.Tuples;
  const axis0 = Array.isArray(tupples) ? tupples.map((e) => e.Tuple) : optionalArrayToArray(
    tupples?.Tuple
  );
  tupples = optionalArrayToArray(
    mdxResponce.Body.ExecuteResponse.return?.root?.Axes?.Axis
  )?.[1]?.Tuples;
  let axis1 = [];
  if (mdxResponce.Body.ExecuteResponse.return.root.Axes?.Axis?.[1]?.__attrs.name === "Axis1") {
    axis1 = Array.isArray(tupples) ? tupples.map((e) => e.Tuple) : optionalArrayToArray(
      tupples?.Tuple
    );
  } else if (mdxResponce.Body.ExecuteResponse.return.root.Axes?.Axis?.[1]?.__attrs.name === "SlicerAxis") {
    axis1 = Array.isArray(tupples) ? tupples.map((e) => e.Tuple) : optionalArrayToArray(
      tupples?.Tuple
    );
  }
  const cellsArray = optionalArrayToArray(
    mdxResponce.Body.ExecuteResponse.return.root.CellData?.Cell
  );
  if (!params.rows.length && !params.columns.length) {
    columns = axis0.map((e) => {
      return optionalArrayToArray(e.Member);
    });
    rows = axis1.map((e) => {
      return optionalArrayToArray(e.Member);
    });
    cells = parseCells(cellsArray, columns, rows);
  } else if (!params.columns.length) {
    columns = axis1.map((e) => {
      return optionalArrayToArray(e.Member);
    });
    rows = axis0.map((e) => {
      return optionalArrayToArray(e.Member);
    });
    cells = parseCells(cellsArray, columns, rows);
  } else {
    columns = axis0.map((e) => {
      return optionalArrayToArray(e.Member);
    });
    rows = axis1.map((e) => {
      return optionalArrayToArray(e.Member);
    });
    cells = parseCells(cellsArray, columns, rows);
  }
  const columnProperties = [];
  const rowsProperties = [];
  console.log("Params in helper", params);
  columns[0]?.forEach((col) => {
    if (!params.showColumnsProperties) return;
    console.log(col);
    const colProps = properties.filter(
      (prop) => prop.HIERARCHY_UNIQUE_NAME === col.HIERARCHY_UNIQUE_NAME
    );
    columnProperties.push(...colProps);
  });
  rows[0]?.forEach((row) => {
    if (!params.showRowsProperties) return;
    const rowProps = properties.filter(
      (prop) => prop.HIERARCHY_UNIQUE_NAME === row.HIERARCHY_UNIQUE_NAME
    );
    rowsProperties.push(...rowProps);
  });
  const colPropertiesDescription = optionalArrayToArray(
    optionalArrayToArray(
      mdxResponce.Body.ExecuteResponse.return.root.OlapInfo?.AxesInfo.AxisInfo
    )[0]?.HierarchyInfo
  );
  let rowPropertiesDescription = [];
  if (!params.columns.length) {
    rowPropertiesDescription = optionalArrayToArray(
      optionalArrayToArray(
        mdxResponce.Body.ExecuteResponse.return.root.OlapInfo?.AxesInfo.AxisInfo
      )[0]?.HierarchyInfo
    );
  } else {
    rowPropertiesDescription = optionalArrayToArray(
      optionalArrayToArray(
        mdxResponce.Body.ExecuteResponse.return.root.OlapInfo?.AxesInfo.AxisInfo
      )[1]?.HierarchyInfo
    );
  }
  propertiesRows = columnProperties.map((e) => ({
    ...e,
    isProperty: true
  }));
  propertiesCols = rowsProperties.map((e) => ({
    ...e,
    isProperty: true
  }));
  const propertiesCells = propertiesRows.map((prop) => {
    return columns.map((col) => {
      const propsOrigin = col.find(
        (e) => e.HIERARCHY_UNIQUE_NAME === prop.HIERARCHY_UNIQUE_NAME
      );
      const colHierarchyIndex = col.indexOf(propsOrigin);
      const desc = colPropertiesDescription[colHierarchyIndex];
      const propName = `${prop.HIERARCHY_UNIQUE_NAME}.[${prop.PROPERTY_NAME}]`;
      const objPropName = Object.entries(desc).find((keyValue) => {
        if (Array.isArray(keyValue[1])) {
          const att = keyValue[1].find((entry) => {
            return entry.__attrs?.name === propName;
          });
          if (att) return att;
        } else {
          return keyValue[1]?.__attrs?.name === propName;
        }
      });
      if (objPropName) {
        return {
          Value: propsOrigin[objPropName[0]]
        };
      }
      return {
        Value: ""
      };
    });
  });
  if (params.showColumnsProperties) {
    cells = [...propertiesCells, ...cells];
  }
  cells = cells.map((row, i) => {
    const propertiesCells2 = propertiesCols.map((prop) => {
      const rowDesc = rows[i];
      const propsOrigin = rowDesc.find(
        (e) => e.HIERARCHY_UNIQUE_NAME === prop.HIERARCHY_UNIQUE_NAME
      );
      const rowHierarchyIndex = rowDesc.indexOf(propsOrigin);
      const desc = rowPropertiesDescription[rowHierarchyIndex];
      const propName = `${prop.HIERARCHY_UNIQUE_NAME}.[${prop.PROPERTY_NAME}]`;
      const objPropName = Object.entries(desc)?.find((keyValue) => {
        return keyValue[1]?.__attrs?.name === propName;
      });
      if (objPropName) {
        return {
          Value: propsOrigin[objPropName[0]]
        };
      }
      return {
        Value: ""
      };
    });
    if (params.showRowsProperties) {
      return [...propertiesCells2, ...row];
    }
    return row;
  });
  return {
    columns,
    rows,
    cells,
    propertiesRows,
    propertiesCols
  };
};
const parseCells = (cells, columns, rows) => {
  if (!cells.length) return [];
  if (!rows.length) {
    return [cells];
  } else if (!columns.length) {
    return cells.map((e) => [e]);
  }
  const cp = [...cells];
  const columnsArray = [];
  const count = columns.length;
  while (cp.length) {
    columnsArray.push(cp.splice(0, count));
  }
  return columnsArray;
};
const parseRequestToTable = (mdxResponce, mainAxis = 0) => {
  let tupples = optionalArrayToArray(
    mdxResponce.Body.ExecuteResponse.return?.root.Axes?.Axis
  )?.[0]?.Tuples;
  const axis0 = Array.isArray(tupples) ? tupples.map((e) => e.Tuple) : optionalArrayToArray(
    tupples?.Tuple
  );
  tupples = optionalArrayToArray(
    mdxResponce.Body.ExecuteResponse.return?.root?.Axes?.Axis
  )?.[1]?.Tuples;
  const axis1 = Array.isArray(tupples) ? tupples.map((e) => e.Tuple) : optionalArrayToArray(
    tupples?.Tuple
  );
  const cellsArray = optionalArrayToArray(
    mdxResponce.Body.ExecuteResponse.return.root.CellData?.Cell
  );
  const table = {
    rows: [],
    items: [],
    headers: ["Caption"],
    rowProperties: {}
  };
  const getCaption = (member) => {
    return optionalArrayToArray(member).map((m) => m.Caption).join(" - ");
  };
  if (mainAxis === 0) {
    axis1.forEach((item, index) => {
      table.headers.push(getCaption(item.Member));
    });
    axis0.forEach((item, i) => {
      const caption = getCaption(item.Member);
      table.rows[i] = [caption];
      table.rowProperties[caption] = item.Member;
      axis1.forEach((subItem, j) => {
        table.rows[i].push(cellsArray[j * axis0.length + i]?.Value);
      });
    });
  } else if (mainAxis === 1) {
    axis0.forEach((item, index) => {
      table.headers.push(getCaption(item.Member));
    });
    axis1.forEach((item, i) => {
      const caption = getCaption(item.Member);
      table.items[i] = [caption];
      table.rowProperties[caption] = item.Member;
      axis0.forEach((subItem, j) => {
        table.items[i].push(cellsArray[i * axis0.length + j]?.Value);
      });
    });
  }
  table.items = table.rows.map((row, i) => {
    const mappedItem = {};
    row.forEach((value, i2) => {
      mappedItem[table.headers[i2]] = value;
    });
    return mappedItem;
  });
  return table;
};
class DrilldownHandler {
  rowsExpandedMembers = [];
  rowsDrilldownMembers = [];
  columnsExpandedMembers = [];
  columnsDrilldownMembers = [];
  connection;
  constructor(connection, state) {
    this.connection = connection;
    if (state) {
      this.rowsDrilldownMembers = state.rowsDrilldownMembers || [];
      this.rowsExpandedMembers = state.rowsExpandedMembers || [];
      this.columnsDrilldownMembers = state.columnsDrilldownMembers || [];
      this.columnsExpandedMembers = state.columnsExpandedMembers || [];
    }
  }
  getDrilldownState() {
    return {
      rowsExpandedMembers: this.rowsExpandedMembers,
      rowsDrilldownMembers: this.rowsDrilldownMembers,
      columnsExpandedMembers: this.columnsExpandedMembers,
      columnsDrilldownMembers: this.columnsDrilldownMembers
    };
  }
  drilldownOnRows(member) {
    const expandedIndex = this.rowsExpandedMembers.findIndex(
      (e) => e.UName === member.UName
    );
    if (expandedIndex >= 0) this.rowsExpandedMembers.splice(expandedIndex, 1);
    const sameHierarchyIndex = this.rowsDrilldownMembers.findIndex((e) => {
      return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME;
    });
    if (member.LNum === "0") {
      this.rowsDrilldownMembers.splice(sameHierarchyIndex, 1);
    } else {
      if (sameHierarchyIndex >= 0) {
        this.rowsDrilldownMembers.splice(sameHierarchyIndex, 1, member);
      } else {
        this.rowsDrilldownMembers.push(member);
      }
    }
  }
  drilldownOnColumns(member) {
    const expandedIndex = this.columnsExpandedMembers.findIndex(
      (e) => e.UName === member.UName
    );
    if (expandedIndex >= 0) this.columnsExpandedMembers.splice(expandedIndex, 1);
    const sameHierarchyIndex = this.columnsDrilldownMembers.findIndex(
      (e) => {
        return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME;
      }
    );
    if (member.LNum === "0") {
      this.columnsDrilldownMembers.splice(sameHierarchyIndex, 1);
    } else {
      if (sameHierarchyIndex >= 0) {
        this.columnsDrilldownMembers.splice(sameHierarchyIndex, 1, member);
      } else {
        this.columnsDrilldownMembers.push(member);
      }
    }
  }
  async drillupOnRows(member) {
    const levels = await this.connection.getLevels();
    const parentLevel = levels.find((e) => {
      return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME && e.LEVEL_NUMBER === Math.max(parseInt(member.LNum) - 1, 0).toString();
    });
    if (parentLevel) {
      const parentMember = await this.connection.getMember(
        parentLevel,
        member.PARENT_UNIQUE_NAME
      );
      const requestParentLevel = levels.find((e) => {
        return e.HIERARCHY_UNIQUE_NAME === parentMember.HIERARCHY_UNIQUE_NAME && e.LEVEL_NUMBER === Math.max(parseInt(parentMember.LEVEL_NUMBER) - 1, 0).toString();
      });
      if (requestParentLevel) {
        const createdMember = {
          UName: parentMember.PARENT_UNIQUE_NAME,
          LName: requestParentLevel.LEVEL_UNIQUE_NAME,
          HIERARCHY_UNIQUE_NAME: requestParentLevel.HIERARCHY_UNIQUE_NAME,
          LNum: requestParentLevel.LEVEL_NUMBER
        };
        this.drilldownOnRows(createdMember);
      }
    }
  }
  async drillupOnColumns(member) {
    const levels = await this.connection.getLevels();
    const parentLevel = levels.find((e) => {
      return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME && e.LEVEL_NUMBER === Math.max(parseInt(member.LNum) - 1, 0).toString();
    });
    if (parentLevel) {
      const parentMember = await this.connection.getMember(
        parentLevel,
        member.PARENT_UNIQUE_NAME
      );
      const requestParentLevel = levels.find((e) => {
        return e.HIERARCHY_UNIQUE_NAME === parentMember.HIERARCHY_UNIQUE_NAME && e.LEVEL_NUMBER === Math.max(parseInt(parentMember.LEVEL_NUMBER) - 1, 0).toString();
      });
      if (requestParentLevel) {
        const createdMember = {
          UName: parentMember.PARENT_UNIQUE_NAME,
          LName: requestParentLevel.LEVEL_UNIQUE_NAME,
          HIERARCHY_UNIQUE_NAME: requestParentLevel.HIERARCHY_UNIQUE_NAME,
          LNum: requestParentLevel.LEVEL_NUMBER
        };
        this.drilldownOnColumns(createdMember);
      }
    }
  }
  expandOnRows(member) {
    const currentMemberHierarchyItems = this.rowsExpandedMembers.filter(
      (e) => {
        return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME;
      }
    );
    currentMemberHierarchyItems.push(member);
    currentMemberHierarchyItems.sort(
      (a, b) => parseInt(a.LNum) - parseInt(b.LNum)
    );
    const indexInSorted = currentMemberHierarchyItems.indexOf(member);
    if (indexInSorted === 0) {
      if (currentMemberHierarchyItems.length > 1) {
        const nextItemIndex = this.rowsExpandedMembers.findIndex(
          (e) => e.UName === currentMemberHierarchyItems[1].UName
        );
        this.rowsExpandedMembers.splice(nextItemIndex, 0, member);
      } else {
        this.rowsExpandedMembers.push(member);
      }
    } else {
      const prevItemIndex = this.rowsExpandedMembers.findIndex(
        (e) => e.UName === currentMemberHierarchyItems[indexInSorted - 1].UName
      );
      this.rowsExpandedMembers.splice(prevItemIndex + 1, 0, member);
    }
  }
  collapseOnRows(member) {
    const itemIndex = this.rowsExpandedMembers.findIndex(
      (e) => e.UName === member.UName
    );
    this.rowsExpandedMembers.splice(itemIndex, 1);
  }
  expandOnColumns(member) {
    const currentMemberHierarchyItems = this.columnsExpandedMembers.filter((e) => {
      return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME;
    });
    currentMemberHierarchyItems.push(member);
    currentMemberHierarchyItems.sort(
      (a, b) => parseInt(a.LNum) - parseInt(b.LNum)
    );
    const indexInSorted = currentMemberHierarchyItems.indexOf(member);
    if (indexInSorted === 0) {
      if (currentMemberHierarchyItems.length > 1) {
        const nextItemIndex = this.columnsExpandedMembers.findIndex(
          (e) => e.UName === currentMemberHierarchyItems[1].UName
        );
        this.columnsExpandedMembers.splice(nextItemIndex, 0, member);
      } else {
        this.columnsExpandedMembers.push(member);
      }
    } else {
      const prevItemIndex = this.columnsExpandedMembers.findIndex(
        (e) => e.UName === currentMemberHierarchyItems[indexInSorted - 1].UName
      );
      this.columnsExpandedMembers.splice(prevItemIndex + 1, 0, member);
    }
  }
  collapseOnColumns(member) {
    const itemIndex = this.columnsExpandedMembers.findIndex(
      (e) => e.UName === member.UName
    );
    this.columnsExpandedMembers.splice(itemIndex, 1);
  }
  flushExpands(columns, rows) {
    const notUsedHierarchiesInDrilldownCols = this.columnsExpandedMembers.filter((e) => {
      return !columns.some((member) => {
        return member.originalItem.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME;
      });
    });
    notUsedHierarchiesInDrilldownCols.forEach((member) => {
      const itemIndex = this.columnsExpandedMembers.findIndex((e) => {
        return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME;
      });
      this.columnsExpandedMembers.splice(itemIndex, 1);
    });
    const notUsedHierarchiesInDrilldownRows = this.rowsExpandedMembers.filter(
      (e) => {
        return !rows.some((member) => {
          return member.originalItem.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME;
        });
      }
    );
    notUsedHierarchiesInDrilldownRows.forEach((member) => {
      const itemIndex = this.rowsExpandedMembers.findIndex((e) => {
        return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME;
      });
      this.rowsExpandedMembers.splice(itemIndex, 1);
    });
  }
  flushDrilldowns(columns, rows) {
    const notUsedHierarchiesInDrilldownCols = this.columnsDrilldownMembers.filter((e) => {
      return !columns.some((member) => {
        return member.originalItem.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME;
      });
    });
    notUsedHierarchiesInDrilldownCols.forEach((member) => {
      const itemIndex = this.columnsDrilldownMembers.findIndex((e) => {
        return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME;
      });
      this.columnsDrilldownMembers.splice(itemIndex, 1);
    });
    const notUsedHierarchiesInDrilldownRows = this.rowsDrilldownMembers.filter(
      (e) => {
        return !rows.some((member) => {
          return member.originalItem.HIERARCHY_UNIQUE_NAME === e.HIERARCHY_UNIQUE_NAME;
        });
      }
    );
    notUsedHierarchiesInDrilldownRows.forEach((member) => {
      const itemIndex = this.rowsDrilldownMembers.findIndex((e) => {
        return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME;
      });
      this.rowsDrilldownMembers.splice(itemIndex, 1);
    });
  }
  handleDrilldown({ value, area }) {
    if (area === "rows") {
      this.drilldownOnRows(value);
    } else if (area === "columns") {
      this.drilldownOnColumns(value);
    }
  }
  handleDrillup({ value, area }) {
    if (area === "rows") {
      this.drillupOnRows(value);
    } else if (area === "columns") {
      this.drillupOnColumns(value);
    }
  }
  handleExpand({ value, area }) {
    if (area === "rows") {
      this.expandOnRows(value);
    } else if (area === "columns") {
      this.expandOnColumns(value);
    }
  }
  handleCollapse({ value, area }) {
    if (area === "rows") {
      this.collapseOnRows(value);
    } else if (area === "columns") {
      this.collapseOnColumns(value);
    }
  }
}
class MetadataStore {
  storage = {
    hierarchies: [],
    dimensions: [],
    levels: [],
    measureGroups: [],
    measures: [],
    sets: [],
    properties: []
  };
  cache = {
    levelsState: /* @__PURE__ */ new Map(),
    membersState: /* @__PURE__ */ new Map(),
    levelMembers: /* @__PURE__ */ new Map(),
    childMembers: /* @__PURE__ */ new Map(),
    members: /* @__PURE__ */ new Map()
  };
  api = null;
  initPromiseResolve;
  initPromise = null;
  init(api) {
    this.api = api;
    this.initPromise = new Promise((resolve) => {
      this.initPromiseResolve = resolve;
    });
  }
  async waitForInit() {
    return this.initPromise;
  }
  async loadMetadata(catalogName, cubeName) {
    if (!this.api) throw new Error("API is not initialized");
    const [
      dimensions,
      hierarchies,
      levels,
      measureGroups,
      measures,
      sets,
      properties
    ] = await Promise.all([
      await this.api.getDimensions(catalogName, cubeName),
      await this.api.getHierarchies(catalogName, cubeName),
      await this.api.getLevels(catalogName, cubeName),
      await this.api.getMeasureGroups(catalogName, cubeName),
      await this.api.getMeasures(catalogName, cubeName),
      await this.api.getSets(catalogName, cubeName),
      await this.api.getProperties(catalogName, cubeName)
    ]);
    this.storage.dimensions = dimensions;
    this.storage.hierarchies = hierarchies;
    this.storage.levels = levels;
    this.storage.measureGroups = measureGroups;
    this.storage.measures = measures;
    this.storage.sets = sets;
    this.storage.properties = properties;
    this.initPromiseResolve();
    return this.initPromise;
  }
  async getMetadataStorage() {
    await this.initPromise;
    return this.storage;
  }
  getHierarchies() {
    return this.storage.hierarchies;
  }
  getMeasures() {
    return this.storage.measures;
  }
  getProperties() {
    return this.storage.properties;
  }
  getLevels() {
    return this.storage.levels;
  }
}
var __defProp = Object.defineProperty;
var __decorateClass = (decorators, target, key, kind) => {
  var result = void 0;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp(target, key, result);
  return result;
};
class XmlaStore extends BaseDatasource {
  connection;
  requestParams = {
    rows: [],
    columns: [],
    measures: [],
    filters: []
  };
  useMdx = false;
  mdx = "";
  drilldownHandler = null;
  metadata = null;
  cube = "";
  initPromiseResolve;
  initPromise = null;
  metadataPromiseResolve;
  metadataPromise = null;
  connectionRepository;
  constructor() {
    super();
  }
  init(configuration) {
    super.init(configuration);
    console.log("state of store during creation", JSON.stringify(this.requestParams));
    this.initPromise = new Promise((resolve) => {
      this.initPromiseResolve = resolve;
    });
    this.metadataPromise = new Promise((resolve) => {
      this.metadataPromiseResolve = resolve;
    });
    this.connection = configuration.connection;
    this.cube = configuration.cube;
    if (!this.connectionRepository) {
      throw new Error("ConnectionRepository is not provided to Store Classes");
    }
    const connection = this.connectionRepository.getConnection(
      this.connection
    );
    if (!connection) {
      throw new Error(`Connection ${this.connection} not found`);
    }
    this.drilldownHandler = new DrilldownHandler(
      connection,
      configuration.drilldownState
    );
    if (configuration.useMdx) {
      this.useMdx = configuration.useMdx;
    }
    if (configuration.mdx) {
      this.mdx = configuration.mdx;
    }
    if (configuration.requestParams) {
      this.requestParams = configuration.requestParams;
    }
    this.pollingInterval = configuration.pollingInterval ?? 5e3;
    if (this.pollingEnabled) {
      this.startPolling(this.pollingInterval);
    }
    this.initPromiseResolve?.();
  }
  async loadMetadata() {
    const connection = this.connectionRepository.getConnection(
      this.connection
    );
    this.metadata = new MetadataStore();
    const api = await connection.getApi();
    this.metadata.init(api);
    await this.metadata.loadMetadata(connection.catalogName, this.cube);
    this.metadataPromiseResolve?.(this.metadata);
    return this.metadataPromise;
  }
  /** The repository arrives as a parameter - callers inject it Vue-side. */
  static async fetchCubes(connection, connectionRepository) {
    if (!connectionRepository) {
      throw new Error("ConnectionRepository is required");
    }
    const conn = connectionRepository.getConnection(connection);
    if (!conn) {
      throw new Error(`Connection ${connection} not found`);
    }
    const api = await conn.getApi();
    const { cubes } = await api.getCubes(conn.catalogName);
    return cubes;
  }
  async setRequestParams(requestParams) {
    this.requestParams = requestParams;
    this.mdx = await this.getMdxRequest();
  }
  async getOriginalData() {
    throw new Error("Not Implemented");
  }
  async getData(type, requestConfig = {}) {
    let request;
    let response = null;
    if (!this.connectionRepository) {
      throw new Error("ConnectionRepository is not provided to Store Classes");
    }
    const connection = this.connectionRepository.getConnection(
      this.connection
    );
    if (this.useMdx) {
      request = this.mdx;
    } else {
      request = await this.getMdxRequest(requestConfig);
    }
    console.log("MDX Request in store:", request);
    console.log("Metadata in store:", this.metadata.getProperties());
    console.log("Metadata in store:", this.metadata.getLevels());
    const mdxResponse = await connection.fetch({
      data: {
        mdx: request
      }
    });
    if (type === "PivotTable") {
      response = this.parseToPivotTable(mdxResponse, requestConfig);
      console.log("Parsed responce in datasource", response);
      if (!response) return null;
      response.tableState = {
        rowsExpandedMembers: this.drilldownHandler?.rowsExpandedMembers || [],
        rowsDrilldownMembers: this.drilldownHandler?.rowsDrilldownMembers || [],
        columnsExpandedMembers: this.drilldownHandler?.columnsExpandedMembers || [],
        columnsDrilldownMembers: this.drilldownHandler?.columnsDrilldownMembers || []
      };
    } else if (type === "DataTable") {
      response = this.parseToDataTable(mdxResponse);
    } else {
      throw new Error("Invalid data type");
    }
    return response;
  }
  async getMdxRequest(requestConfig = {}) {
    await this.loadMetadata();
    const properties = this.metadata.getProperties();
    const levels = this.metadata.getLevels();
    const mdxRequest = await getMdxRequest(
      this.cube,
      this.drilldownHandler?.columnsDrilldownMembers || [],
      this.drilldownHandler?.rowsDrilldownMembers || [],
      this.drilldownHandler?.rowsExpandedMembers || [],
      this.drilldownHandler?.columnsExpandedMembers || [],
      this.requestParams.rows,
      this.requestParams.columns,
      this.requestParams.measures,
      requestConfig,
      properties,
      this.requestParams.filters,
      levels
    );
    return mdxRequest;
  }
  async getMetadata() {
    await this.initPromise;
    await this.loadMetadata();
    return this.metadata;
  }
  expand(e) {
    this.drilldownHandler?.handleExpand(e);
    return this.drilldownHandler?.getDrilldownState();
  }
  collapse(e) {
    this.drilldownHandler?.handleCollapse(e);
    return this.drilldownHandler?.getDrilldownState();
  }
  getConnection() {
    const connectionRepository = this.connectionRepository;
    return connectionRepository.getConnection(this.connection);
  }
  changeFilters(e) {
    console.log("event in the datasource", e);
    const originalItem = this.requestParams[e.area].find(
      (item) => item.id === e.id
    );
    if (originalItem) {
      originalItem.filters = e.filters;
    }
  }
  callEvent(event, params) {
    switch (event) {
      case "expand":
        this.expand(params);
        break;
      case "collapse":
        this.collapse(params);
        break;
      case "filterChange":
        this.changeFilters(params);
        break;
      default:
        console.warn("Event is not available for this type of store");
    }
    this.notify();
  }
  parseToPivotTable(mdxResponse, requestConfig = {}) {
    const properties = this.metadata.getProperties();
    console.log(requestConfig);
    return parseMdxRequest(mdxResponse, {
      rows: this.requestParams.rows,
      columns: this.requestParams.columns,
      measures: this.requestParams.measures,
      properties,
      showRowsProperties: requestConfig.showRowsProperties,
      showColumnsProperties: requestConfig.showColumnsProperties
    });
  }
  parseToDataTable(mdxResponce) {
    return parseRequestToTable(mdxResponce, 0);
  }
  destroy() {
    this.stopPolling();
  }
  static validateConfiguration(configuration) {
    if (!configuration?.connection) {
      return false;
    }
    if (!configuration?.cube) {
      return false;
    }
    return true;
  }
}
__decorateClass([
  inject(CONNECTION_REPOSITORY)
], XmlaStore.prototype, "connectionRepository");
const XMLA_STORE_FACTORY = serviceId("XmlaStoreFactory");
const factorySymbol = Symbol.for(XMLA_STORE_FACTORY);
function activate$1({ services }) {
  services.register(XMLA_STORE_FACTORY, (config) => {
    if (!XmlaStore.validateConfiguration(config)) {
      throw new Error(
        "Invalid XmlaStore configuration. Please provide a valid configuration."
      );
    }
    const store = services.construct(XmlaStore);
    store.init(config);
    return store;
  });
}
function deactivate$1({ services }) {
  services.unregister(XMLA_STORE_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  XMLA_STORE_FACTORY,
  XmlaStore,
  activate: activate$1,
  deactivate: deactivate$1,
  factorySymbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.datasource.xmla";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.datasource.xmla");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  XMLA_STORE_FACTORY,
  XmlaStore,
  activate,
  deactivate,
  factorySymbol
};
