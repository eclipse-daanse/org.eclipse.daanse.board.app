const { BaseDatasource } = __tsm__.require("org.eclipse.daanse.board.app.lib.datasource.base");
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
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var re = { exports: {} };
var constants;
var hasRequiredConstants;
function requireConstants() {
  if (hasRequiredConstants) return constants;
  hasRequiredConstants = 1;
  const SEMVER_SPEC_VERSION = "2.0.0";
  const MAX_LENGTH = 256;
  const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
  9007199254740991;
  const MAX_SAFE_COMPONENT_LENGTH = 16;
  const MAX_SAFE_BUILD_LENGTH = MAX_LENGTH - 6;
  const RELEASE_TYPES = [
    "major",
    "premajor",
    "minor",
    "preminor",
    "patch",
    "prepatch",
    "prerelease"
  ];
  constants = {
    MAX_LENGTH,
    MAX_SAFE_COMPONENT_LENGTH,
    MAX_SAFE_BUILD_LENGTH,
    MAX_SAFE_INTEGER,
    RELEASE_TYPES,
    SEMVER_SPEC_VERSION,
    FLAG_INCLUDE_PRERELEASE: 1,
    FLAG_LOOSE: 2
  };
  return constants;
}
var debug_1;
var hasRequiredDebug;
function requireDebug() {
  if (hasRequiredDebug) return debug_1;
  hasRequiredDebug = 1;
  var define_process_env_default = {};
  const debug = typeof process === "object" && define_process_env_default && define_process_env_default.NODE_DEBUG && /\bsemver\b/i.test(define_process_env_default.NODE_DEBUG) ? (...args) => console.error("SEMVER", ...args) : () => {
  };
  debug_1 = debug;
  return debug_1;
}
var hasRequiredRe;
function requireRe() {
  if (hasRequiredRe) return re.exports;
  hasRequiredRe = 1;
  (function(module, exports$1) {
    const {
      MAX_SAFE_COMPONENT_LENGTH,
      MAX_SAFE_BUILD_LENGTH,
      MAX_LENGTH
    } = requireConstants();
    const debug = requireDebug();
    exports$1 = module.exports = {};
    const re2 = exports$1.re = [];
    const safeRe = exports$1.safeRe = [];
    const src = exports$1.src = [];
    const safeSrc = exports$1.safeSrc = [];
    const t = exports$1.t = {};
    let R = 0;
    const LETTERDASHNUMBER = "[a-zA-Z0-9-]";
    const safeRegexReplacements = [
      ["\\s", 1],
      ["\\d", MAX_LENGTH],
      [LETTERDASHNUMBER, MAX_SAFE_BUILD_LENGTH]
    ];
    const makeSafeRegex = (value) => {
      for (const [token, max] of safeRegexReplacements) {
        value = value.split(`${token}*`).join(`${token}{0,${max}}`).split(`${token}+`).join(`${token}{1,${max}}`);
      }
      return value;
    };
    const createToken = (name, value, isGlobal) => {
      const safe = makeSafeRegex(value);
      const index = R++;
      debug(name, index, value);
      t[name] = index;
      src[index] = value;
      safeSrc[index] = safe;
      re2[index] = new RegExp(value, isGlobal ? "g" : void 0);
      safeRe[index] = new RegExp(safe, isGlobal ? "g" : void 0);
    };
    createToken("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    createToken("NUMERICIDENTIFIERLOOSE", "\\d+");
    createToken("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${LETTERDASHNUMBER}*`);
    createToken("MAINVERSION", `(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})\\.(${src[t.NUMERICIDENTIFIER]})`);
    createToken("MAINVERSIONLOOSE", `(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})\\.(${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASEIDENTIFIER", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIER]})`);
    createToken("PRERELEASEIDENTIFIERLOOSE", `(?:${src[t.NONNUMERICIDENTIFIER]}|${src[t.NUMERICIDENTIFIERLOOSE]})`);
    createToken("PRERELEASE", `(?:-(${src[t.PRERELEASEIDENTIFIER]}(?:\\.${src[t.PRERELEASEIDENTIFIER]})*))`);
    createToken("PRERELEASELOOSE", `(?:-?(${src[t.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${src[t.PRERELEASEIDENTIFIERLOOSE]})*))`);
    createToken("BUILDIDENTIFIER", `${LETTERDASHNUMBER}+`);
    createToken("BUILD", `(?:\\+(${src[t.BUILDIDENTIFIER]}(?:\\.${src[t.BUILDIDENTIFIER]})*))`);
    createToken("FULLPLAIN", `v?${src[t.MAINVERSION]}${src[t.PRERELEASE]}?${src[t.BUILD]}?`);
    createToken("FULL", `^${src[t.FULLPLAIN]}$`);
    createToken("LOOSEPLAIN", `[v=\\s]*${src[t.MAINVERSIONLOOSE]}${src[t.PRERELEASELOOSE]}?${src[t.BUILD]}?`);
    createToken("LOOSE", `^${src[t.LOOSEPLAIN]}$`);
    createToken("GTLT", "((?:<|>)?=?)");
    createToken("XRANGEIDENTIFIERLOOSE", `${src[t.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    createToken("XRANGEIDENTIFIER", `${src[t.NUMERICIDENTIFIER]}|x|X|\\*`);
    createToken("XRANGEPLAIN", `[v=\\s]*(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:\\.(${src[t.XRANGEIDENTIFIER]})(?:${src[t.PRERELEASE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGEPLAINLOOSE", `[v=\\s]*(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:\\.(${src[t.XRANGEIDENTIFIERLOOSE]})(?:${src[t.PRERELEASELOOSE]})?${src[t.BUILD]}?)?)?`);
    createToken("XRANGE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAIN]}$`);
    createToken("XRANGELOOSE", `^${src[t.GTLT]}\\s*${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COERCEPLAIN", `${"(^|[^\\d])(\\d{1,"}${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    createToken("COERCE", `${src[t.COERCEPLAIN]}(?:$|[^\\d])`);
    createToken("COERCEFULL", src[t.COERCEPLAIN] + `(?:${src[t.PRERELEASE]})?(?:${src[t.BUILD]})?(?:$|[^\\d])`);
    createToken("COERCERTL", src[t.COERCE], true);
    createToken("COERCERTLFULL", src[t.COERCEFULL], true);
    createToken("LONETILDE", "(?:~>?)");
    createToken("TILDETRIM", `(\\s*)${src[t.LONETILDE]}\\s+`, true);
    exports$1.tildeTrimReplace = "$1~";
    createToken("TILDE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAIN]}$`);
    createToken("TILDELOOSE", `^${src[t.LONETILDE]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("LONECARET", "(?:\\^)");
    createToken("CARETTRIM", `(\\s*)${src[t.LONECARET]}\\s+`, true);
    exports$1.caretTrimReplace = "$1^";
    createToken("CARET", `^${src[t.LONECARET]}${src[t.XRANGEPLAIN]}$`);
    createToken("CARETLOOSE", `^${src[t.LONECARET]}${src[t.XRANGEPLAINLOOSE]}$`);
    createToken("COMPARATORLOOSE", `^${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]})$|^$`);
    createToken("COMPARATOR", `^${src[t.GTLT]}\\s*(${src[t.FULLPLAIN]})$|^$`);
    createToken("COMPARATORTRIM", `(\\s*)${src[t.GTLT]}\\s*(${src[t.LOOSEPLAIN]}|${src[t.XRANGEPLAIN]})`, true);
    exports$1.comparatorTrimReplace = "$1$2$3";
    createToken("HYPHENRANGE", `^\\s*(${src[t.XRANGEPLAIN]})\\s+-\\s+(${src[t.XRANGEPLAIN]})\\s*$`);
    createToken("HYPHENRANGELOOSE", `^\\s*(${src[t.XRANGEPLAINLOOSE]})\\s+-\\s+(${src[t.XRANGEPLAINLOOSE]})\\s*$`);
    createToken("STAR", "(<|>)?=?\\s*\\*");
    createToken("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    createToken("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
  })(re, re.exports);
  return re.exports;
}
var parseOptions_1;
var hasRequiredParseOptions;
function requireParseOptions() {
  if (hasRequiredParseOptions) return parseOptions_1;
  hasRequiredParseOptions = 1;
  const looseOption = Object.freeze({ loose: true });
  const emptyOpts = Object.freeze({});
  const parseOptions = (options) => {
    if (!options) {
      return emptyOpts;
    }
    if (typeof options !== "object") {
      return looseOption;
    }
    return options;
  };
  parseOptions_1 = parseOptions;
  return parseOptions_1;
}
var identifiers;
var hasRequiredIdentifiers;
function requireIdentifiers() {
  if (hasRequiredIdentifiers) return identifiers;
  hasRequiredIdentifiers = 1;
  const numeric = /^[0-9]+$/;
  const compareIdentifiers = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
      return a === b ? 0 : a < b ? -1 : 1;
    }
    const anum = numeric.test(a);
    const bnum = numeric.test(b);
    if (anum && bnum) {
      a = +a;
      b = +b;
    }
    return a === b ? 0 : anum && !bnum ? -1 : bnum && !anum ? 1 : a < b ? -1 : 1;
  };
  const rcompareIdentifiers = (a, b) => compareIdentifiers(b, a);
  identifiers = {
    compareIdentifiers,
    rcompareIdentifiers
  };
  return identifiers;
}
var semver$1;
var hasRequiredSemver$1;
function requireSemver$1() {
  if (hasRequiredSemver$1) return semver$1;
  hasRequiredSemver$1 = 1;
  const debug = requireDebug();
  const { MAX_LENGTH, MAX_SAFE_INTEGER } = requireConstants();
  const { safeRe: re2, t } = requireRe();
  const parseOptions = requireParseOptions();
  const { compareIdentifiers } = requireIdentifiers();
  class SemVer {
    constructor(version, options) {
      options = parseOptions(options);
      if (version instanceof SemVer) {
        if (version.loose === !!options.loose && version.includePrerelease === !!options.includePrerelease) {
          return version;
        } else {
          version = version.version;
        }
      } else if (typeof version !== "string") {
        throw new TypeError(`Invalid version. Must be a string. Got type "${typeof version}".`);
      }
      if (version.length > MAX_LENGTH) {
        throw new TypeError(
          `version is longer than ${MAX_LENGTH} characters`
        );
      }
      debug("SemVer", version, options);
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      const m = version.trim().match(options.loose ? re2[t.LOOSE] : re2[t.FULL]);
      if (!m) {
        throw new TypeError(`Invalid Version: ${version}`);
      }
      this.raw = version;
      this.major = +m[1];
      this.minor = +m[2];
      this.patch = +m[3];
      if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
        throw new TypeError("Invalid major version");
      }
      if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
        throw new TypeError("Invalid minor version");
      }
      if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
        throw new TypeError("Invalid patch version");
      }
      if (!m[4]) {
        this.prerelease = [];
      } else {
        this.prerelease = m[4].split(".").map((id) => {
          if (/^[0-9]+$/.test(id)) {
            const num = +id;
            if (num >= 0 && num < MAX_SAFE_INTEGER) {
              return num;
            }
          }
          return id;
        });
      }
      this.build = m[5] ? m[5].split(".") : [];
      this.format();
    }
    format() {
      this.version = `${this.major}.${this.minor}.${this.patch}`;
      if (this.prerelease.length) {
        this.version += `-${this.prerelease.join(".")}`;
      }
      return this.version;
    }
    toString() {
      return this.version;
    }
    compare(other) {
      debug("SemVer.compare", this.version, this.options, other);
      if (!(other instanceof SemVer)) {
        if (typeof other === "string" && other === this.version) {
          return 0;
        }
        other = new SemVer(other, this.options);
      }
      if (other.version === this.version) {
        return 0;
      }
      return this.compareMain(other) || this.comparePre(other);
    }
    compareMain(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      if (this.major < other.major) {
        return -1;
      }
      if (this.major > other.major) {
        return 1;
      }
      if (this.minor < other.minor) {
        return -1;
      }
      if (this.minor > other.minor) {
        return 1;
      }
      if (this.patch < other.patch) {
        return -1;
      }
      if (this.patch > other.patch) {
        return 1;
      }
      return 0;
    }
    comparePre(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      if (this.prerelease.length && !other.prerelease.length) {
        return -1;
      } else if (!this.prerelease.length && other.prerelease.length) {
        return 1;
      } else if (!this.prerelease.length && !other.prerelease.length) {
        return 0;
      }
      let i = 0;
      do {
        const a = this.prerelease[i];
        const b = other.prerelease[i];
        debug("prerelease compare", i, a, b);
        if (a === void 0 && b === void 0) {
          return 0;
        } else if (b === void 0) {
          return 1;
        } else if (a === void 0) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    }
    compareBuild(other) {
      if (!(other instanceof SemVer)) {
        other = new SemVer(other, this.options);
      }
      let i = 0;
      do {
        const a = this.build[i];
        const b = other.build[i];
        debug("build compare", i, a, b);
        if (a === void 0 && b === void 0) {
          return 0;
        } else if (b === void 0) {
          return 1;
        } else if (a === void 0) {
          return -1;
        } else if (a === b) {
          continue;
        } else {
          return compareIdentifiers(a, b);
        }
      } while (++i);
    }
    // preminor will bump the version up to the next minor release, and immediately
    // down to pre-release. premajor and prepatch work the same way.
    inc(release, identifier, identifierBase) {
      if (release.startsWith("pre")) {
        if (!identifier && identifierBase === false) {
          throw new Error("invalid increment argument: identifier is empty");
        }
        if (identifier) {
          const match = `-${identifier}`.match(this.options.loose ? re2[t.PRERELEASELOOSE] : re2[t.PRERELEASE]);
          if (!match || match[1] !== identifier) {
            throw new Error(`invalid identifier: ${identifier}`);
          }
        }
      }
      switch (release) {
        case "premajor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor = 0;
          this.major++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "preminor":
          this.prerelease.length = 0;
          this.patch = 0;
          this.minor++;
          this.inc("pre", identifier, identifierBase);
          break;
        case "prepatch":
          this.prerelease.length = 0;
          this.inc("patch", identifier, identifierBase);
          this.inc("pre", identifier, identifierBase);
          break;
        // If the input is a non-prerelease version, this acts the same as
        // prepatch.
        case "prerelease":
          if (this.prerelease.length === 0) {
            this.inc("patch", identifier, identifierBase);
          }
          this.inc("pre", identifier, identifierBase);
          break;
        case "release":
          if (this.prerelease.length === 0) {
            throw new Error(`version ${this.raw} is not a prerelease`);
          }
          this.prerelease.length = 0;
          break;
        case "major":
          if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
            this.major++;
          }
          this.minor = 0;
          this.patch = 0;
          this.prerelease = [];
          break;
        case "minor":
          if (this.patch !== 0 || this.prerelease.length === 0) {
            this.minor++;
          }
          this.patch = 0;
          this.prerelease = [];
          break;
        case "patch":
          if (this.prerelease.length === 0) {
            this.patch++;
          }
          this.prerelease = [];
          break;
        // This probably shouldn't be used publicly.
        // 1.0.0 'pre' would become 1.0.0-0 which is the wrong direction.
        case "pre": {
          const base = Number(identifierBase) ? 1 : 0;
          if (this.prerelease.length === 0) {
            this.prerelease = [base];
          } else {
            let i = this.prerelease.length;
            while (--i >= 0) {
              if (typeof this.prerelease[i] === "number") {
                this.prerelease[i]++;
                i = -2;
              }
            }
            if (i === -1) {
              if (identifier === this.prerelease.join(".") && identifierBase === false) {
                throw new Error("invalid increment argument: identifier already exists");
              }
              this.prerelease.push(base);
            }
          }
          if (identifier) {
            let prerelease = [identifier, base];
            if (identifierBase === false) {
              prerelease = [identifier];
            }
            if (compareIdentifiers(this.prerelease[0], identifier) === 0) {
              if (isNaN(this.prerelease[1])) {
                this.prerelease = prerelease;
              }
            } else {
              this.prerelease = prerelease;
            }
          }
          break;
        }
        default:
          throw new Error(`invalid increment argument: ${release}`);
      }
      this.raw = this.format();
      if (this.build.length) {
        this.raw += `+${this.build.join(".")}`;
      }
      return this;
    }
  }
  semver$1 = SemVer;
  return semver$1;
}
var parse_1;
var hasRequiredParse;
function requireParse() {
  if (hasRequiredParse) return parse_1;
  hasRequiredParse = 1;
  const SemVer = requireSemver$1();
  const parse = (version, options, throwErrors = false) => {
    if (version instanceof SemVer) {
      return version;
    }
    try {
      return new SemVer(version, options);
    } catch (er) {
      if (!throwErrors) {
        return null;
      }
      throw er;
    }
  };
  parse_1 = parse;
  return parse_1;
}
var valid_1;
var hasRequiredValid$1;
function requireValid$1() {
  if (hasRequiredValid$1) return valid_1;
  hasRequiredValid$1 = 1;
  const parse = requireParse();
  const valid2 = (version, options) => {
    const v = parse(version, options);
    return v ? v.version : null;
  };
  valid_1 = valid2;
  return valid_1;
}
var clean_1;
var hasRequiredClean;
function requireClean() {
  if (hasRequiredClean) return clean_1;
  hasRequiredClean = 1;
  const parse = requireParse();
  const clean = (version, options) => {
    const s = parse(version.trim().replace(/^[=v]+/, ""), options);
    return s ? s.version : null;
  };
  clean_1 = clean;
  return clean_1;
}
var inc_1;
var hasRequiredInc;
function requireInc() {
  if (hasRequiredInc) return inc_1;
  hasRequiredInc = 1;
  const SemVer = requireSemver$1();
  const inc = (version, release, options, identifier, identifierBase) => {
    if (typeof options === "string") {
      identifierBase = identifier;
      identifier = options;
      options = void 0;
    }
    try {
      return new SemVer(
        version instanceof SemVer ? version.version : version,
        options
      ).inc(release, identifier, identifierBase).version;
    } catch (er) {
      return null;
    }
  };
  inc_1 = inc;
  return inc_1;
}
var diff_1;
var hasRequiredDiff;
function requireDiff() {
  if (hasRequiredDiff) return diff_1;
  hasRequiredDiff = 1;
  const parse = requireParse();
  const diff = (version1, version2) => {
    const v1 = parse(version1, null, true);
    const v2 = parse(version2, null, true);
    const comparison = v1.compare(v2);
    if (comparison === 0) {
      return null;
    }
    const v1Higher = comparison > 0;
    const highVersion = v1Higher ? v1 : v2;
    const lowVersion = v1Higher ? v2 : v1;
    const highHasPre = !!highVersion.prerelease.length;
    const lowHasPre = !!lowVersion.prerelease.length;
    if (lowHasPre && !highHasPre) {
      if (!lowVersion.patch && !lowVersion.minor) {
        return "major";
      }
      if (lowVersion.compareMain(highVersion) === 0) {
        if (lowVersion.minor && !lowVersion.patch) {
          return "minor";
        }
        return "patch";
      }
    }
    const prefix = highHasPre ? "pre" : "";
    if (v1.major !== v2.major) {
      return prefix + "major";
    }
    if (v1.minor !== v2.minor) {
      return prefix + "minor";
    }
    if (v1.patch !== v2.patch) {
      return prefix + "patch";
    }
    return "prerelease";
  };
  diff_1 = diff;
  return diff_1;
}
var major_1;
var hasRequiredMajor;
function requireMajor() {
  if (hasRequiredMajor) return major_1;
  hasRequiredMajor = 1;
  const SemVer = requireSemver$1();
  const major = (a, loose) => new SemVer(a, loose).major;
  major_1 = major;
  return major_1;
}
var minor_1;
var hasRequiredMinor;
function requireMinor() {
  if (hasRequiredMinor) return minor_1;
  hasRequiredMinor = 1;
  const SemVer = requireSemver$1();
  const minor = (a, loose) => new SemVer(a, loose).minor;
  minor_1 = minor;
  return minor_1;
}
var patch_1;
var hasRequiredPatch;
function requirePatch() {
  if (hasRequiredPatch) return patch_1;
  hasRequiredPatch = 1;
  const SemVer = requireSemver$1();
  const patch = (a, loose) => new SemVer(a, loose).patch;
  patch_1 = patch;
  return patch_1;
}
var prerelease_1;
var hasRequiredPrerelease;
function requirePrerelease() {
  if (hasRequiredPrerelease) return prerelease_1;
  hasRequiredPrerelease = 1;
  const parse = requireParse();
  const prerelease = (version, options) => {
    const parsed = parse(version, options);
    return parsed && parsed.prerelease.length ? parsed.prerelease : null;
  };
  prerelease_1 = prerelease;
  return prerelease_1;
}
var compare_1;
var hasRequiredCompare;
function requireCompare() {
  if (hasRequiredCompare) return compare_1;
  hasRequiredCompare = 1;
  const SemVer = requireSemver$1();
  const compare = (a, b, loose) => new SemVer(a, loose).compare(new SemVer(b, loose));
  compare_1 = compare;
  return compare_1;
}
var rcompare_1;
var hasRequiredRcompare;
function requireRcompare() {
  if (hasRequiredRcompare) return rcompare_1;
  hasRequiredRcompare = 1;
  const compare = requireCompare();
  const rcompare = (a, b, loose) => compare(b, a, loose);
  rcompare_1 = rcompare;
  return rcompare_1;
}
var compareLoose_1;
var hasRequiredCompareLoose;
function requireCompareLoose() {
  if (hasRequiredCompareLoose) return compareLoose_1;
  hasRequiredCompareLoose = 1;
  const compare = requireCompare();
  const compareLoose = (a, b) => compare(a, b, true);
  compareLoose_1 = compareLoose;
  return compareLoose_1;
}
var compareBuild_1;
var hasRequiredCompareBuild;
function requireCompareBuild() {
  if (hasRequiredCompareBuild) return compareBuild_1;
  hasRequiredCompareBuild = 1;
  const SemVer = requireSemver$1();
  const compareBuild = (a, b, loose) => {
    const versionA = new SemVer(a, loose);
    const versionB = new SemVer(b, loose);
    return versionA.compare(versionB) || versionA.compareBuild(versionB);
  };
  compareBuild_1 = compareBuild;
  return compareBuild_1;
}
var sort_1;
var hasRequiredSort;
function requireSort() {
  if (hasRequiredSort) return sort_1;
  hasRequiredSort = 1;
  const compareBuild = requireCompareBuild();
  const sort = (list, loose) => list.sort((a, b) => compareBuild(a, b, loose));
  sort_1 = sort;
  return sort_1;
}
var rsort_1;
var hasRequiredRsort;
function requireRsort() {
  if (hasRequiredRsort) return rsort_1;
  hasRequiredRsort = 1;
  const compareBuild = requireCompareBuild();
  const rsort = (list, loose) => list.sort((a, b) => compareBuild(b, a, loose));
  rsort_1 = rsort;
  return rsort_1;
}
var gt_1;
var hasRequiredGt;
function requireGt() {
  if (hasRequiredGt) return gt_1;
  hasRequiredGt = 1;
  const compare = requireCompare();
  const gt = (a, b, loose) => compare(a, b, loose) > 0;
  gt_1 = gt;
  return gt_1;
}
var lt_1;
var hasRequiredLt;
function requireLt() {
  if (hasRequiredLt) return lt_1;
  hasRequiredLt = 1;
  const compare = requireCompare();
  const lt = (a, b, loose) => compare(a, b, loose) < 0;
  lt_1 = lt;
  return lt_1;
}
var eq_1;
var hasRequiredEq;
function requireEq() {
  if (hasRequiredEq) return eq_1;
  hasRequiredEq = 1;
  const compare = requireCompare();
  const eq = (a, b, loose) => compare(a, b, loose) === 0;
  eq_1 = eq;
  return eq_1;
}
var neq_1;
var hasRequiredNeq;
function requireNeq() {
  if (hasRequiredNeq) return neq_1;
  hasRequiredNeq = 1;
  const compare = requireCompare();
  const neq = (a, b, loose) => compare(a, b, loose) !== 0;
  neq_1 = neq;
  return neq_1;
}
var gte_1;
var hasRequiredGte;
function requireGte() {
  if (hasRequiredGte) return gte_1;
  hasRequiredGte = 1;
  const compare = requireCompare();
  const gte = (a, b, loose) => compare(a, b, loose) >= 0;
  gte_1 = gte;
  return gte_1;
}
var lte_1;
var hasRequiredLte;
function requireLte() {
  if (hasRequiredLte) return lte_1;
  hasRequiredLte = 1;
  const compare = requireCompare();
  const lte = (a, b, loose) => compare(a, b, loose) <= 0;
  lte_1 = lte;
  return lte_1;
}
var cmp_1;
var hasRequiredCmp;
function requireCmp() {
  if (hasRequiredCmp) return cmp_1;
  hasRequiredCmp = 1;
  const eq = requireEq();
  const neq = requireNeq();
  const gt = requireGt();
  const gte = requireGte();
  const lt = requireLt();
  const lte = requireLte();
  const cmp = (a, op, b, loose) => {
    switch (op) {
      case "===":
        if (typeof a === "object") {
          a = a.version;
        }
        if (typeof b === "object") {
          b = b.version;
        }
        return a === b;
      case "!==":
        if (typeof a === "object") {
          a = a.version;
        }
        if (typeof b === "object") {
          b = b.version;
        }
        return a !== b;
      case "":
      case "=":
      case "==":
        return eq(a, b, loose);
      case "!=":
        return neq(a, b, loose);
      case ">":
        return gt(a, b, loose);
      case ">=":
        return gte(a, b, loose);
      case "<":
        return lt(a, b, loose);
      case "<=":
        return lte(a, b, loose);
      default:
        throw new TypeError(`Invalid operator: ${op}`);
    }
  };
  cmp_1 = cmp;
  return cmp_1;
}
var coerce_1;
var hasRequiredCoerce;
function requireCoerce() {
  if (hasRequiredCoerce) return coerce_1;
  hasRequiredCoerce = 1;
  const SemVer = requireSemver$1();
  const parse = requireParse();
  const { safeRe: re2, t } = requireRe();
  const coerce = (version, options) => {
    if (version instanceof SemVer) {
      return version;
    }
    if (typeof version === "number") {
      version = String(version);
    }
    if (typeof version !== "string") {
      return null;
    }
    options = options || {};
    let match = null;
    if (!options.rtl) {
      match = version.match(options.includePrerelease ? re2[t.COERCEFULL] : re2[t.COERCE]);
    } else {
      const coerceRtlRegex = options.includePrerelease ? re2[t.COERCERTLFULL] : re2[t.COERCERTL];
      let next;
      while ((next = coerceRtlRegex.exec(version)) && (!match || match.index + match[0].length !== version.length)) {
        if (!match || next.index + next[0].length !== match.index + match[0].length) {
          match = next;
        }
        coerceRtlRegex.lastIndex = next.index + next[1].length + next[2].length;
      }
      coerceRtlRegex.lastIndex = -1;
    }
    if (match === null) {
      return null;
    }
    const major = match[2];
    const minor = match[3] || "0";
    const patch = match[4] || "0";
    const prerelease = options.includePrerelease && match[5] ? `-${match[5]}` : "";
    const build = options.includePrerelease && match[6] ? `+${match[6]}` : "";
    return parse(`${major}.${minor}.${patch}${prerelease}${build}`, options);
  };
  coerce_1 = coerce;
  return coerce_1;
}
var lrucache;
var hasRequiredLrucache;
function requireLrucache() {
  if (hasRequiredLrucache) return lrucache;
  hasRequiredLrucache = 1;
  class LRUCache {
    constructor() {
      this.max = 1e3;
      this.map = /* @__PURE__ */ new Map();
    }
    get(key) {
      const value = this.map.get(key);
      if (value === void 0) {
        return void 0;
      } else {
        this.map.delete(key);
        this.map.set(key, value);
        return value;
      }
    }
    delete(key) {
      return this.map.delete(key);
    }
    set(key, value) {
      const deleted = this.delete(key);
      if (!deleted && value !== void 0) {
        if (this.map.size >= this.max) {
          const firstKey = this.map.keys().next().value;
          this.delete(firstKey);
        }
        this.map.set(key, value);
      }
      return this;
    }
  }
  lrucache = LRUCache;
  return lrucache;
}
var range;
var hasRequiredRange;
function requireRange() {
  if (hasRequiredRange) return range;
  hasRequiredRange = 1;
  const SPACE_CHARACTERS = /\s+/g;
  class Range {
    constructor(range2, options) {
      options = parseOptions(options);
      if (range2 instanceof Range) {
        if (range2.loose === !!options.loose && range2.includePrerelease === !!options.includePrerelease) {
          return range2;
        } else {
          return new Range(range2.raw, options);
        }
      }
      if (range2 instanceof Comparator) {
        this.raw = range2.value;
        this.set = [[range2]];
        this.formatted = void 0;
        return this;
      }
      this.options = options;
      this.loose = !!options.loose;
      this.includePrerelease = !!options.includePrerelease;
      this.raw = range2.trim().replace(SPACE_CHARACTERS, " ");
      this.set = this.raw.split("||").map((r) => this.parseRange(r.trim())).filter((c) => c.length);
      if (!this.set.length) {
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      }
      if (this.set.length > 1) {
        const first = this.set[0];
        this.set = this.set.filter((c) => !isNullSet(c[0]));
        if (this.set.length === 0) {
          this.set = [first];
        } else if (this.set.length > 1) {
          for (const c of this.set) {
            if (c.length === 1 && isAny(c[0])) {
              this.set = [c];
              break;
            }
          }
        }
      }
      this.formatted = void 0;
    }
    get range() {
      if (this.formatted === void 0) {
        this.formatted = "";
        for (let i = 0; i < this.set.length; i++) {
          if (i > 0) {
            this.formatted += "||";
          }
          const comps = this.set[i];
          for (let k = 0; k < comps.length; k++) {
            if (k > 0) {
              this.formatted += " ";
            }
            this.formatted += comps[k].toString().trim();
          }
        }
      }
      return this.formatted;
    }
    format() {
      return this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(range2) {
      const memoOpts = (this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE);
      const memoKey = memoOpts + ":" + range2;
      const cached = cache.get(memoKey);
      if (cached) {
        return cached;
      }
      const loose = this.options.loose;
      const hr = loose ? re2[t.HYPHENRANGELOOSE] : re2[t.HYPHENRANGE];
      range2 = range2.replace(hr, hyphenReplace(this.options.includePrerelease));
      debug("hyphen replace", range2);
      range2 = range2.replace(re2[t.COMPARATORTRIM], comparatorTrimReplace);
      debug("comparator trim", range2);
      range2 = range2.replace(re2[t.TILDETRIM], tildeTrimReplace);
      debug("tilde trim", range2);
      range2 = range2.replace(re2[t.CARETTRIM], caretTrimReplace);
      debug("caret trim", range2);
      let rangeList = range2.split(" ").map((comp) => parseComparator(comp, this.options)).join(" ").split(/\s+/).map((comp) => replaceGTE0(comp, this.options));
      if (loose) {
        rangeList = rangeList.filter((comp) => {
          debug("loose invalid filter", comp, this.options);
          return !!comp.match(re2[t.COMPARATORLOOSE]);
        });
      }
      debug("range list", rangeList);
      const rangeMap = /* @__PURE__ */ new Map();
      const comparators = rangeList.map((comp) => new Comparator(comp, this.options));
      for (const comp of comparators) {
        if (isNullSet(comp)) {
          return [comp];
        }
        rangeMap.set(comp.value, comp);
      }
      if (rangeMap.size > 1 && rangeMap.has("")) {
        rangeMap.delete("");
      }
      const result = [...rangeMap.values()];
      cache.set(memoKey, result);
      return result;
    }
    intersects(range2, options) {
      if (!(range2 instanceof Range)) {
        throw new TypeError("a Range is required");
      }
      return this.set.some((thisComparators) => {
        return isSatisfiable(thisComparators, options) && range2.set.some((rangeComparators) => {
          return isSatisfiable(rangeComparators, options) && thisComparators.every((thisComparator) => {
            return rangeComparators.every((rangeComparator) => {
              return thisComparator.intersects(rangeComparator, options);
            });
          });
        });
      });
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(version) {
      if (!version) {
        return false;
      }
      if (typeof version === "string") {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }
      for (let i = 0; i < this.set.length; i++) {
        if (testSet(this.set[i], version, this.options)) {
          return true;
        }
      }
      return false;
    }
  }
  range = Range;
  const LRU = requireLrucache();
  const cache = new LRU();
  const parseOptions = requireParseOptions();
  const Comparator = requireComparator();
  const debug = requireDebug();
  const SemVer = requireSemver$1();
  const {
    safeRe: re2,
    t,
    comparatorTrimReplace,
    tildeTrimReplace,
    caretTrimReplace
  } = requireRe();
  const { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = requireConstants();
  const isNullSet = (c) => c.value === "<0.0.0-0";
  const isAny = (c) => c.value === "";
  const isSatisfiable = (comparators, options) => {
    let result = true;
    const remainingComparators = comparators.slice();
    let testComparator = remainingComparators.pop();
    while (result && remainingComparators.length) {
      result = remainingComparators.every((otherComparator) => {
        return testComparator.intersects(otherComparator, options);
      });
      testComparator = remainingComparators.pop();
    }
    return result;
  };
  const parseComparator = (comp, options) => {
    comp = comp.replace(re2[t.BUILD], "");
    debug("comp", comp, options);
    comp = replaceCarets(comp, options);
    debug("caret", comp);
    comp = replaceTildes(comp, options);
    debug("tildes", comp);
    comp = replaceXRanges(comp, options);
    debug("xrange", comp);
    comp = replaceStars(comp, options);
    debug("stars", comp);
    return comp;
  };
  const isX = (id) => !id || id.toLowerCase() === "x" || id === "*";
  const replaceTildes = (comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceTilde(c, options)).join(" ");
  };
  const replaceTilde = (comp, options) => {
    const r = options.loose ? re2[t.TILDELOOSE] : re2[t.TILDE];
    return comp.replace(r, (_, M, m, p, pr) => {
      debug("tilde", comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0 <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        ret = `>=${M}.${m}.0 <${M}.${+m + 1}.0-0`;
      } else if (pr) {
        debug("replaceTilde pr", pr);
        ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
      } else {
        ret = `>=${M}.${m}.${p} <${M}.${+m + 1}.0-0`;
      }
      debug("tilde return", ret);
      return ret;
    });
  };
  const replaceCarets = (comp, options) => {
    return comp.trim().split(/\s+/).map((c) => replaceCaret(c, options)).join(" ");
  };
  const replaceCaret = (comp, options) => {
    debug("caret", comp, options);
    const r = options.loose ? re2[t.CARETLOOSE] : re2[t.CARET];
    const z = options.includePrerelease ? "-0" : "";
    return comp.replace(r, (_, M, m, p, pr) => {
      debug("caret", comp, _, M, m, p, pr);
      let ret;
      if (isX(M)) {
        ret = "";
      } else if (isX(m)) {
        ret = `>=${M}.0.0${z} <${+M + 1}.0.0-0`;
      } else if (isX(p)) {
        if (M === "0") {
          ret = `>=${M}.${m}.0${z} <${M}.${+m + 1}.0-0`;
        } else {
          ret = `>=${M}.${m}.0${z} <${+M + 1}.0.0-0`;
        }
      } else if (pr) {
        debug("replaceCaret pr", pr);
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}-${pr} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p}-${pr} <${+M + 1}.0.0-0`;
        }
      } else {
        debug("no pr");
        if (M === "0") {
          if (m === "0") {
            ret = `>=${M}.${m}.${p}${z} <${M}.${m}.${+p + 1}-0`;
          } else {
            ret = `>=${M}.${m}.${p}${z} <${M}.${+m + 1}.0-0`;
          }
        } else {
          ret = `>=${M}.${m}.${p} <${+M + 1}.0.0-0`;
        }
      }
      debug("caret return", ret);
      return ret;
    });
  };
  const replaceXRanges = (comp, options) => {
    debug("replaceXRanges", comp, options);
    return comp.split(/\s+/).map((c) => replaceXRange(c, options)).join(" ");
  };
  const replaceXRange = (comp, options) => {
    comp = comp.trim();
    const r = options.loose ? re2[t.XRANGELOOSE] : re2[t.XRANGE];
    return comp.replace(r, (ret, gtlt, M, m, p, pr) => {
      debug("xRange", comp, ret, gtlt, M, m, p, pr);
      const xM = isX(M);
      const xm = xM || isX(m);
      const xp = xm || isX(p);
      const anyX = xp;
      if (gtlt === "=" && anyX) {
        gtlt = "";
      }
      pr = options.includePrerelease ? "-0" : "";
      if (xM) {
        if (gtlt === ">" || gtlt === "<") {
          ret = "<0.0.0-0";
        } else {
          ret = "*";
        }
      } else if (gtlt && anyX) {
        if (xm) {
          m = 0;
        }
        p = 0;
        if (gtlt === ">") {
          gtlt = ">=";
          if (xm) {
            M = +M + 1;
            m = 0;
            p = 0;
          } else {
            m = +m + 1;
            p = 0;
          }
        } else if (gtlt === "<=") {
          gtlt = "<";
          if (xm) {
            M = +M + 1;
          } else {
            m = +m + 1;
          }
        }
        if (gtlt === "<") {
          pr = "-0";
        }
        ret = `${gtlt + M}.${m}.${p}${pr}`;
      } else if (xm) {
        ret = `>=${M}.0.0${pr} <${+M + 1}.0.0-0`;
      } else if (xp) {
        ret = `>=${M}.${m}.0${pr} <${M}.${+m + 1}.0-0`;
      }
      debug("xRange return", ret);
      return ret;
    });
  };
  const replaceStars = (comp, options) => {
    debug("replaceStars", comp, options);
    return comp.trim().replace(re2[t.STAR], "");
  };
  const replaceGTE0 = (comp, options) => {
    debug("replaceGTE0", comp, options);
    return comp.trim().replace(re2[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
  };
  const hyphenReplace = (incPr) => ($0, from, fM, fm, fp, fpr, fb, to, tM, tm, tp, tpr) => {
    if (isX(fM)) {
      from = "";
    } else if (isX(fm)) {
      from = `>=${fM}.0.0${incPr ? "-0" : ""}`;
    } else if (isX(fp)) {
      from = `>=${fM}.${fm}.0${incPr ? "-0" : ""}`;
    } else if (fpr) {
      from = `>=${from}`;
    } else {
      from = `>=${from}${incPr ? "-0" : ""}`;
    }
    if (isX(tM)) {
      to = "";
    } else if (isX(tm)) {
      to = `<${+tM + 1}.0.0-0`;
    } else if (isX(tp)) {
      to = `<${tM}.${+tm + 1}.0-0`;
    } else if (tpr) {
      to = `<=${tM}.${tm}.${tp}-${tpr}`;
    } else if (incPr) {
      to = `<${tM}.${tm}.${+tp + 1}-0`;
    } else {
      to = `<=${to}`;
    }
    return `${from} ${to}`.trim();
  };
  const testSet = (set, version, options) => {
    for (let i = 0; i < set.length; i++) {
      if (!set[i].test(version)) {
        return false;
      }
    }
    if (version.prerelease.length && !options.includePrerelease) {
      for (let i = 0; i < set.length; i++) {
        debug(set[i].semver);
        if (set[i].semver === Comparator.ANY) {
          continue;
        }
        if (set[i].semver.prerelease.length > 0) {
          const allowed = set[i].semver;
          if (allowed.major === version.major && allowed.minor === version.minor && allowed.patch === version.patch) {
            return true;
          }
        }
      }
      return false;
    }
    return true;
  };
  return range;
}
var comparator;
var hasRequiredComparator;
function requireComparator() {
  if (hasRequiredComparator) return comparator;
  hasRequiredComparator = 1;
  const ANY = Symbol("SemVer ANY");
  class Comparator {
    static get ANY() {
      return ANY;
    }
    constructor(comp, options) {
      options = parseOptions(options);
      if (comp instanceof Comparator) {
        if (comp.loose === !!options.loose) {
          return comp;
        } else {
          comp = comp.value;
        }
      }
      comp = comp.trim().split(/\s+/).join(" ");
      debug("comparator", comp, options);
      this.options = options;
      this.loose = !!options.loose;
      this.parse(comp);
      if (this.semver === ANY) {
        this.value = "";
      } else {
        this.value = this.operator + this.semver.version;
      }
      debug("comp", this);
    }
    parse(comp) {
      const r = this.options.loose ? re2[t.COMPARATORLOOSE] : re2[t.COMPARATOR];
      const m = comp.match(r);
      if (!m) {
        throw new TypeError(`Invalid comparator: ${comp}`);
      }
      this.operator = m[1] !== void 0 ? m[1] : "";
      if (this.operator === "=") {
        this.operator = "";
      }
      if (!m[2]) {
        this.semver = ANY;
      } else {
        this.semver = new SemVer(m[2], this.options.loose);
      }
    }
    toString() {
      return this.value;
    }
    test(version) {
      debug("Comparator.test", version, this.options.loose);
      if (this.semver === ANY || version === ANY) {
        return true;
      }
      if (typeof version === "string") {
        try {
          version = new SemVer(version, this.options);
        } catch (er) {
          return false;
        }
      }
      return cmp(version, this.operator, this.semver, this.options);
    }
    intersects(comp, options) {
      if (!(comp instanceof Comparator)) {
        throw new TypeError("a Comparator is required");
      }
      if (this.operator === "") {
        if (this.value === "") {
          return true;
        }
        return new Range(comp.value, options).test(this.value);
      } else if (comp.operator === "") {
        if (comp.value === "") {
          return true;
        }
        return new Range(this.value, options).test(comp.semver);
      }
      options = parseOptions(options);
      if (options.includePrerelease && (this.value === "<0.0.0-0" || comp.value === "<0.0.0-0")) {
        return false;
      }
      if (!options.includePrerelease && (this.value.startsWith("<0.0.0") || comp.value.startsWith("<0.0.0"))) {
        return false;
      }
      if (this.operator.startsWith(">") && comp.operator.startsWith(">")) {
        return true;
      }
      if (this.operator.startsWith("<") && comp.operator.startsWith("<")) {
        return true;
      }
      if (this.semver.version === comp.semver.version && this.operator.includes("=") && comp.operator.includes("=")) {
        return true;
      }
      if (cmp(this.semver, "<", comp.semver, options) && this.operator.startsWith(">") && comp.operator.startsWith("<")) {
        return true;
      }
      if (cmp(this.semver, ">", comp.semver, options) && this.operator.startsWith("<") && comp.operator.startsWith(">")) {
        return true;
      }
      return false;
    }
  }
  comparator = Comparator;
  const parseOptions = requireParseOptions();
  const { safeRe: re2, t } = requireRe();
  const cmp = requireCmp();
  const debug = requireDebug();
  const SemVer = requireSemver$1();
  const Range = requireRange();
  return comparator;
}
var satisfies_1;
var hasRequiredSatisfies;
function requireSatisfies() {
  if (hasRequiredSatisfies) return satisfies_1;
  hasRequiredSatisfies = 1;
  const Range = requireRange();
  const satisfies = (version, range2, options) => {
    try {
      range2 = new Range(range2, options);
    } catch (er) {
      return false;
    }
    return range2.test(version);
  };
  satisfies_1 = satisfies;
  return satisfies_1;
}
var toComparators_1;
var hasRequiredToComparators;
function requireToComparators() {
  if (hasRequiredToComparators) return toComparators_1;
  hasRequiredToComparators = 1;
  const Range = requireRange();
  const toComparators = (range2, options) => new Range(range2, options).set.map((comp) => comp.map((c) => c.value).join(" ").trim().split(" "));
  toComparators_1 = toComparators;
  return toComparators_1;
}
var maxSatisfying_1;
var hasRequiredMaxSatisfying;
function requireMaxSatisfying() {
  if (hasRequiredMaxSatisfying) return maxSatisfying_1;
  hasRequiredMaxSatisfying = 1;
  const SemVer = requireSemver$1();
  const Range = requireRange();
  const maxSatisfying = (versions, range2, options) => {
    let max = null;
    let maxSV = null;
    let rangeObj = null;
    try {
      rangeObj = new Range(range2, options);
    } catch (er) {
      return null;
    }
    versions.forEach((v) => {
      if (rangeObj.test(v)) {
        if (!max || maxSV.compare(v) === -1) {
          max = v;
          maxSV = new SemVer(max, options);
        }
      }
    });
    return max;
  };
  maxSatisfying_1 = maxSatisfying;
  return maxSatisfying_1;
}
var minSatisfying_1;
var hasRequiredMinSatisfying;
function requireMinSatisfying() {
  if (hasRequiredMinSatisfying) return minSatisfying_1;
  hasRequiredMinSatisfying = 1;
  const SemVer = requireSemver$1();
  const Range = requireRange();
  const minSatisfying = (versions, range2, options) => {
    let min = null;
    let minSV = null;
    let rangeObj = null;
    try {
      rangeObj = new Range(range2, options);
    } catch (er) {
      return null;
    }
    versions.forEach((v) => {
      if (rangeObj.test(v)) {
        if (!min || minSV.compare(v) === 1) {
          min = v;
          minSV = new SemVer(min, options);
        }
      }
    });
    return min;
  };
  minSatisfying_1 = minSatisfying;
  return minSatisfying_1;
}
var minVersion_1;
var hasRequiredMinVersion;
function requireMinVersion() {
  if (hasRequiredMinVersion) return minVersion_1;
  hasRequiredMinVersion = 1;
  const SemVer = requireSemver$1();
  const Range = requireRange();
  const gt = requireGt();
  const minVersion = (range2, loose) => {
    range2 = new Range(range2, loose);
    let minver = new SemVer("0.0.0");
    if (range2.test(minver)) {
      return minver;
    }
    minver = new SemVer("0.0.0-0");
    if (range2.test(minver)) {
      return minver;
    }
    minver = null;
    for (let i = 0; i < range2.set.length; ++i) {
      const comparators = range2.set[i];
      let setMin = null;
      comparators.forEach((comparator2) => {
        const compver = new SemVer(comparator2.semver.version);
        switch (comparator2.operator) {
          case ">":
            if (compver.prerelease.length === 0) {
              compver.patch++;
            } else {
              compver.prerelease.push(0);
            }
            compver.raw = compver.format();
          /* fallthrough */
          case "":
          case ">=":
            if (!setMin || gt(compver, setMin)) {
              setMin = compver;
            }
            break;
          case "<":
          case "<=":
            break;
          /* istanbul ignore next */
          default:
            throw new Error(`Unexpected operation: ${comparator2.operator}`);
        }
      });
      if (setMin && (!minver || gt(minver, setMin))) {
        minver = setMin;
      }
    }
    if (minver && range2.test(minver)) {
      return minver;
    }
    return null;
  };
  minVersion_1 = minVersion;
  return minVersion_1;
}
var valid;
var hasRequiredValid;
function requireValid() {
  if (hasRequiredValid) return valid;
  hasRequiredValid = 1;
  const Range = requireRange();
  const validRange = (range2, options) => {
    try {
      return new Range(range2, options).range || "*";
    } catch (er) {
      return null;
    }
  };
  valid = validRange;
  return valid;
}
var outside_1;
var hasRequiredOutside;
function requireOutside() {
  if (hasRequiredOutside) return outside_1;
  hasRequiredOutside = 1;
  const SemVer = requireSemver$1();
  const Comparator = requireComparator();
  const { ANY } = Comparator;
  const Range = requireRange();
  const satisfies = requireSatisfies();
  const gt = requireGt();
  const lt = requireLt();
  const lte = requireLte();
  const gte = requireGte();
  const outside = (version, range2, hilo, options) => {
    version = new SemVer(version, options);
    range2 = new Range(range2, options);
    let gtfn, ltefn, ltfn, comp, ecomp;
    switch (hilo) {
      case ">":
        gtfn = gt;
        ltefn = lte;
        ltfn = lt;
        comp = ">";
        ecomp = ">=";
        break;
      case "<":
        gtfn = lt;
        ltefn = gte;
        ltfn = gt;
        comp = "<";
        ecomp = "<=";
        break;
      default:
        throw new TypeError('Must provide a hilo val of "<" or ">"');
    }
    if (satisfies(version, range2, options)) {
      return false;
    }
    for (let i = 0; i < range2.set.length; ++i) {
      const comparators = range2.set[i];
      let high = null;
      let low = null;
      comparators.forEach((comparator2) => {
        if (comparator2.semver === ANY) {
          comparator2 = new Comparator(">=0.0.0");
        }
        high = high || comparator2;
        low = low || comparator2;
        if (gtfn(comparator2.semver, high.semver, options)) {
          high = comparator2;
        } else if (ltfn(comparator2.semver, low.semver, options)) {
          low = comparator2;
        }
      });
      if (high.operator === comp || high.operator === ecomp) {
        return false;
      }
      if ((!low.operator || low.operator === comp) && ltefn(version, low.semver)) {
        return false;
      } else if (low.operator === ecomp && ltfn(version, low.semver)) {
        return false;
      }
    }
    return true;
  };
  outside_1 = outside;
  return outside_1;
}
var gtr_1;
var hasRequiredGtr;
function requireGtr() {
  if (hasRequiredGtr) return gtr_1;
  hasRequiredGtr = 1;
  const outside = requireOutside();
  const gtr = (version, range2, options) => outside(version, range2, ">", options);
  gtr_1 = gtr;
  return gtr_1;
}
var ltr_1;
var hasRequiredLtr;
function requireLtr() {
  if (hasRequiredLtr) return ltr_1;
  hasRequiredLtr = 1;
  const outside = requireOutside();
  const ltr = (version, range2, options) => outside(version, range2, "<", options);
  ltr_1 = ltr;
  return ltr_1;
}
var intersects_1;
var hasRequiredIntersects;
function requireIntersects() {
  if (hasRequiredIntersects) return intersects_1;
  hasRequiredIntersects = 1;
  const Range = requireRange();
  const intersects = (r1, r2, options) => {
    r1 = new Range(r1, options);
    r2 = new Range(r2, options);
    return r1.intersects(r2, options);
  };
  intersects_1 = intersects;
  return intersects_1;
}
var simplify;
var hasRequiredSimplify;
function requireSimplify() {
  if (hasRequiredSimplify) return simplify;
  hasRequiredSimplify = 1;
  const satisfies = requireSatisfies();
  const compare = requireCompare();
  simplify = (versions, range2, options) => {
    const set = [];
    let first = null;
    let prev = null;
    const v = versions.sort((a, b) => compare(a, b, options));
    for (const version of v) {
      const included = satisfies(version, range2, options);
      if (included) {
        prev = version;
        if (!first) {
          first = version;
        }
      } else {
        if (prev) {
          set.push([first, prev]);
        }
        prev = null;
        first = null;
      }
    }
    if (first) {
      set.push([first, null]);
    }
    const ranges = [];
    for (const [min, max] of set) {
      if (min === max) {
        ranges.push(min);
      } else if (!max && min === v[0]) {
        ranges.push("*");
      } else if (!max) {
        ranges.push(`>=${min}`);
      } else if (min === v[0]) {
        ranges.push(`<=${max}`);
      } else {
        ranges.push(`${min} - ${max}`);
      }
    }
    const simplified = ranges.join(" || ");
    const original = typeof range2.raw === "string" ? range2.raw : String(range2);
    return simplified.length < original.length ? simplified : range2;
  };
  return simplify;
}
var subset_1;
var hasRequiredSubset;
function requireSubset() {
  if (hasRequiredSubset) return subset_1;
  hasRequiredSubset = 1;
  const Range = requireRange();
  const Comparator = requireComparator();
  const { ANY } = Comparator;
  const satisfies = requireSatisfies();
  const compare = requireCompare();
  const subset = (sub, dom, options = {}) => {
    if (sub === dom) {
      return true;
    }
    sub = new Range(sub, options);
    dom = new Range(dom, options);
    let sawNonNull = false;
    OUTER: for (const simpleSub of sub.set) {
      for (const simpleDom of dom.set) {
        const isSub = simpleSubset(simpleSub, simpleDom, options);
        sawNonNull = sawNonNull || isSub !== null;
        if (isSub) {
          continue OUTER;
        }
      }
      if (sawNonNull) {
        return false;
      }
    }
    return true;
  };
  const minimumVersionWithPreRelease = [new Comparator(">=0.0.0-0")];
  const minimumVersion = [new Comparator(">=0.0.0")];
  const simpleSubset = (sub, dom, options) => {
    if (sub === dom) {
      return true;
    }
    if (sub.length === 1 && sub[0].semver === ANY) {
      if (dom.length === 1 && dom[0].semver === ANY) {
        return true;
      } else if (options.includePrerelease) {
        sub = minimumVersionWithPreRelease;
      } else {
        sub = minimumVersion;
      }
    }
    if (dom.length === 1 && dom[0].semver === ANY) {
      if (options.includePrerelease) {
        return true;
      } else {
        dom = minimumVersion;
      }
    }
    const eqSet = /* @__PURE__ */ new Set();
    let gt, lt;
    for (const c of sub) {
      if (c.operator === ">" || c.operator === ">=") {
        gt = higherGT(gt, c, options);
      } else if (c.operator === "<" || c.operator === "<=") {
        lt = lowerLT(lt, c, options);
      } else {
        eqSet.add(c.semver);
      }
    }
    if (eqSet.size > 1) {
      return null;
    }
    let gtltComp;
    if (gt && lt) {
      gtltComp = compare(gt.semver, lt.semver, options);
      if (gtltComp > 0) {
        return null;
      } else if (gtltComp === 0 && (gt.operator !== ">=" || lt.operator !== "<=")) {
        return null;
      }
    }
    for (const eq of eqSet) {
      if (gt && !satisfies(eq, String(gt), options)) {
        return null;
      }
      if (lt && !satisfies(eq, String(lt), options)) {
        return null;
      }
      for (const c of dom) {
        if (!satisfies(eq, String(c), options)) {
          return false;
        }
      }
      return true;
    }
    let higher, lower;
    let hasDomLT, hasDomGT;
    let needDomLTPre = lt && !options.includePrerelease && lt.semver.prerelease.length ? lt.semver : false;
    let needDomGTPre = gt && !options.includePrerelease && gt.semver.prerelease.length ? gt.semver : false;
    if (needDomLTPre && needDomLTPre.prerelease.length === 1 && lt.operator === "<" && needDomLTPre.prerelease[0] === 0) {
      needDomLTPre = false;
    }
    for (const c of dom) {
      hasDomGT = hasDomGT || c.operator === ">" || c.operator === ">=";
      hasDomLT = hasDomLT || c.operator === "<" || c.operator === "<=";
      if (gt) {
        if (needDomGTPre) {
          if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomGTPre.major && c.semver.minor === needDomGTPre.minor && c.semver.patch === needDomGTPre.patch) {
            needDomGTPre = false;
          }
        }
        if (c.operator === ">" || c.operator === ">=") {
          higher = higherGT(gt, c, options);
          if (higher === c && higher !== gt) {
            return false;
          }
        } else if (gt.operator === ">=" && !satisfies(gt.semver, String(c), options)) {
          return false;
        }
      }
      if (lt) {
        if (needDomLTPre) {
          if (c.semver.prerelease && c.semver.prerelease.length && c.semver.major === needDomLTPre.major && c.semver.minor === needDomLTPre.minor && c.semver.patch === needDomLTPre.patch) {
            needDomLTPre = false;
          }
        }
        if (c.operator === "<" || c.operator === "<=") {
          lower = lowerLT(lt, c, options);
          if (lower === c && lower !== lt) {
            return false;
          }
        } else if (lt.operator === "<=" && !satisfies(lt.semver, String(c), options)) {
          return false;
        }
      }
      if (!c.operator && (lt || gt) && gtltComp !== 0) {
        return false;
      }
    }
    if (gt && hasDomLT && !lt && gtltComp !== 0) {
      return false;
    }
    if (lt && hasDomGT && !gt && gtltComp !== 0) {
      return false;
    }
    if (needDomGTPre || needDomLTPre) {
      return false;
    }
    return true;
  };
  const higherGT = (a, b, options) => {
    if (!a) {
      return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp > 0 ? a : comp < 0 ? b : b.operator === ">" && a.operator === ">=" ? b : a;
  };
  const lowerLT = (a, b, options) => {
    if (!a) {
      return b;
    }
    const comp = compare(a.semver, b.semver, options);
    return comp < 0 ? a : comp > 0 ? b : b.operator === "<" && a.operator === "<=" ? b : a;
  };
  subset_1 = subset;
  return subset_1;
}
var semver;
var hasRequiredSemver;
function requireSemver() {
  if (hasRequiredSemver) return semver;
  hasRequiredSemver = 1;
  const internalRe = requireRe();
  const constants2 = requireConstants();
  const SemVer = requireSemver$1();
  const identifiers2 = requireIdentifiers();
  const parse = requireParse();
  const valid2 = requireValid$1();
  const clean = requireClean();
  const inc = requireInc();
  const diff = requireDiff();
  const major = requireMajor();
  const minor = requireMinor();
  const patch = requirePatch();
  const prerelease = requirePrerelease();
  const compare = requireCompare();
  const rcompare = requireRcompare();
  const compareLoose = requireCompareLoose();
  const compareBuild = requireCompareBuild();
  const sort = requireSort();
  const rsort = requireRsort();
  const gt = requireGt();
  const lt = requireLt();
  const eq = requireEq();
  const neq = requireNeq();
  const gte = requireGte();
  const lte = requireLte();
  const cmp = requireCmp();
  const coerce = requireCoerce();
  const Comparator = requireComparator();
  const Range = requireRange();
  const satisfies = requireSatisfies();
  const toComparators = requireToComparators();
  const maxSatisfying = requireMaxSatisfying();
  const minSatisfying = requireMinSatisfying();
  const minVersion = requireMinVersion();
  const validRange = requireValid();
  const outside = requireOutside();
  const gtr = requireGtr();
  const ltr = requireLtr();
  const intersects = requireIntersects();
  const simplifyRange = requireSimplify();
  const subset = requireSubset();
  semver = {
    parse,
    valid: valid2,
    clean,
    inc,
    diff,
    major,
    minor,
    patch,
    prerelease,
    compare,
    rcompare,
    compareLoose,
    compareBuild,
    sort,
    rsort,
    gt,
    lt,
    eq,
    neq,
    gte,
    lte,
    cmp,
    coerce,
    Comparator,
    Range,
    satisfies,
    toComparators,
    maxSatisfying,
    minSatisfying,
    minVersion,
    validRange,
    outside,
    gtr,
    ltr,
    intersects,
    simplifyRange,
    subset,
    SemVer,
    re: internalRe.re,
    src: internalRe.src,
    tokens: internalRe.t,
    SEMVER_SPEC_VERSION: constants2.SEMVER_SPEC_VERSION,
    RELEASE_TYPES: constants2.RELEASE_TYPES,
    compareIdentifiers: identifiers2.compareIdentifiers,
    rcompareIdentifiers: identifiers2.rcompareIdentifiers
  };
  return semver;
}
requireSemver();
var _Reflect = {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var hasRequired_Reflect;
function require_Reflect() {
  if (hasRequired_Reflect) return _Reflect;
  hasRequired_Reflect = 1;
  var Reflect2;
  (function(Reflect3) {
    (function(factory) {
      var root = typeof globalThis === "object" ? globalThis : typeof commonjsGlobal === "object" ? commonjsGlobal : typeof self === "object" ? self : typeof this === "object" ? this : sloppyModeThis();
      var exporter = makeExporter(Reflect3);
      if (typeof root.Reflect !== "undefined") {
        exporter = makeExporter(root.Reflect, exporter);
      }
      factory(exporter, root);
      if (typeof root.Reflect === "undefined") {
        root.Reflect = Reflect3;
      }
      function makeExporter(target, previous) {
        return function(key, value) {
          Object.defineProperty(target, key, { configurable: true, writable: true, value });
          if (previous)
            previous(key, value);
        };
      }
      function functionThis() {
        try {
          return Function("return this;")();
        } catch (_) {
        }
      }
      function indirectEvalThis() {
        try {
          return (void 0, eval)("(function() { return this; })()");
        } catch (_) {
        }
      }
      function sloppyModeThis() {
        return functionThis() || indirectEvalThis();
      }
    })(function(exporter, root) {
      var hasOwn = Object.prototype.hasOwnProperty;
      var supportsSymbol = typeof Symbol === "function";
      var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
      var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
      var supportsCreate = typeof Object.create === "function";
      var supportsProto = { __proto__: [] } instanceof Array;
      var downLevel = !supportsCreate && !supportsProto;
      var HashMap = {
        // create an object in dictionary mode (a.k.a. "slow" mode in v8)
        create: supportsCreate ? function() {
          return MakeDictionary(/* @__PURE__ */ Object.create(null));
        } : supportsProto ? function() {
          return MakeDictionary({ __proto__: null });
        } : function() {
          return MakeDictionary({});
        },
        has: downLevel ? function(map, key) {
          return hasOwn.call(map, key);
        } : function(map, key) {
          return key in map;
        },
        get: downLevel ? function(map, key) {
          return hasOwn.call(map, key) ? map[key] : void 0;
        } : function(map, key) {
          return map[key];
        }
      };
      var functionPrototype = Object.getPrototypeOf(Function);
      var _Map = typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
      var _Set = typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
      var _WeakMap = typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
      var registrySymbol = supportsSymbol ? Symbol.for("@reflect-metadata:registry") : void 0;
      var metadataRegistry = GetOrCreateMetadataRegistry();
      var metadataProvider = CreateMetadataProvider(metadataRegistry);
      function decorate(decorators, target, propertyKey, attributes) {
        if (!IsUndefined(propertyKey)) {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsObject(target))
            throw new TypeError();
          if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
            throw new TypeError();
          if (IsNull(attributes))
            attributes = void 0;
          propertyKey = ToPropertyKey(propertyKey);
          return DecorateProperty(decorators, target, propertyKey, attributes);
        } else {
          if (!IsArray(decorators))
            throw new TypeError();
          if (!IsConstructor(target))
            throw new TypeError();
          return DecorateConstructor(decorators, target);
        }
      }
      exporter("decorate", decorate);
      function metadata(metadataKey, metadataValue) {
        function decorator(target, propertyKey) {
          if (!IsObject(target))
            throw new TypeError();
          if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
            throw new TypeError();
          OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        return decorator;
      }
      exporter("metadata", metadata);
      function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
      }
      exporter("defineMetadata", defineMetadata);
      function hasMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasMetadata", hasMetadata);
      function hasOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("hasOwnMetadata", hasOwnMetadata);
      function getMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetMetadata(metadataKey, target, propertyKey);
      }
      exporter("getMetadata", getMetadata);
      function getOwnMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
      }
      exporter("getOwnMetadata", getOwnMetadata);
      function getMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryMetadataKeys(target, propertyKey);
      }
      exporter("getMetadataKeys", getMetadataKeys);
      function getOwnMetadataKeys(target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        return OrdinaryOwnMetadataKeys(target, propertyKey);
      }
      exporter("getOwnMetadataKeys", getOwnMetadataKeys);
      function deleteMetadata(metadataKey, target, propertyKey) {
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        if (!IsObject(target))
          throw new TypeError();
        if (!IsUndefined(propertyKey))
          propertyKey = ToPropertyKey(propertyKey);
        var provider = GetMetadataProvider(
          target,
          propertyKey,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return false;
        return provider.OrdinaryDeleteMetadata(metadataKey, target, propertyKey);
      }
      exporter("deleteMetadata", deleteMetadata);
      function DecorateConstructor(decorators, target) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsConstructor(decorated))
              throw new TypeError();
            target = decorated;
          }
        }
        return target;
      }
      function DecorateProperty(decorators, target, propertyKey, descriptor) {
        for (var i = decorators.length - 1; i >= 0; --i) {
          var decorator = decorators[i];
          var decorated = decorator(target, propertyKey, descriptor);
          if (!IsUndefined(decorated) && !IsNull(decorated)) {
            if (!IsObject(decorated))
              throw new TypeError();
            descriptor = decorated;
          }
        }
        return descriptor;
      }
      function OrdinaryHasMetadata(MetadataKey, O, P) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn2)
          return true;
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
          return OrdinaryHasMetadata(MetadataKey, parent, P);
        return false;
      }
      function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return false;
        return ToBoolean(provider.OrdinaryHasOwnMetadata(MetadataKey, O, P));
      }
      function OrdinaryGetMetadata(MetadataKey, O, P) {
        var hasOwn2 = OrdinaryHasOwnMetadata(MetadataKey, O, P);
        if (hasOwn2)
          return OrdinaryGetOwnMetadata(MetadataKey, O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (!IsNull(parent))
          return OrdinaryGetMetadata(MetadataKey, parent, P);
        return void 0;
      }
      function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*Create*/
          false
        );
        if (IsUndefined(provider))
          return;
        return provider.OrdinaryGetOwnMetadata(MetadataKey, O, P);
      }
      function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*Create*/
          true
        );
        provider.OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P);
      }
      function OrdinaryMetadataKeys(O, P) {
        var ownKeys = OrdinaryOwnMetadataKeys(O, P);
        var parent = OrdinaryGetPrototypeOf(O);
        if (parent === null)
          return ownKeys;
        var parentKeys = OrdinaryMetadataKeys(parent, P);
        if (parentKeys.length <= 0)
          return ownKeys;
        if (ownKeys.length <= 0)
          return parentKeys;
        var set = new _Set();
        var keys = [];
        for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
          var key = ownKeys_1[_i];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
          var key = parentKeys_1[_a];
          var hasKey = set.has(key);
          if (!hasKey) {
            set.add(key);
            keys.push(key);
          }
        }
        return keys;
      }
      function OrdinaryOwnMetadataKeys(O, P) {
        var provider = GetMetadataProvider(
          O,
          P,
          /*create*/
          false
        );
        if (!provider) {
          return [];
        }
        return provider.OrdinaryOwnMetadataKeys(O, P);
      }
      function Type(x) {
        if (x === null)
          return 1;
        switch (typeof x) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            return x === null ? 1 : 6;
          default:
            return 6;
        }
      }
      function IsUndefined(x) {
        return x === void 0;
      }
      function IsNull(x) {
        return x === null;
      }
      function IsSymbol(x) {
        return typeof x === "symbol";
      }
      function IsObject(x) {
        return typeof x === "object" ? x !== null : typeof x === "function";
      }
      function ToPrimitive(input, PreferredType) {
        switch (Type(input)) {
          case 0:
            return input;
          case 1:
            return input;
          case 2:
            return input;
          case 3:
            return input;
          case 4:
            return input;
          case 5:
            return input;
        }
        var hint = "string";
        var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
        if (exoticToPrim !== void 0) {
          var result = exoticToPrim.call(input, hint);
          if (IsObject(result))
            throw new TypeError();
          return result;
        }
        return OrdinaryToPrimitive(input);
      }
      function OrdinaryToPrimitive(O, hint) {
        var valueOf, result, toString_2;
        {
          var toString_1 = O.toString;
          if (IsCallable(toString_1)) {
            var result = toString_1.call(O);
            if (!IsObject(result))
              return result;
          }
          var valueOf = O.valueOf;
          if (IsCallable(valueOf)) {
            var result = valueOf.call(O);
            if (!IsObject(result))
              return result;
          }
        }
        throw new TypeError();
      }
      function ToBoolean(argument) {
        return !!argument;
      }
      function ToString(argument) {
        return "" + argument;
      }
      function ToPropertyKey(argument) {
        var key = ToPrimitive(argument);
        if (IsSymbol(key))
          return key;
        return ToString(key);
      }
      function IsArray(argument) {
        return Array.isArray ? Array.isArray(argument) : argument instanceof Object ? argument instanceof Array : Object.prototype.toString.call(argument) === "[object Array]";
      }
      function IsCallable(argument) {
        return typeof argument === "function";
      }
      function IsConstructor(argument) {
        return typeof argument === "function";
      }
      function IsPropertyKey(argument) {
        switch (Type(argument)) {
          case 3:
            return true;
          case 4:
            return true;
          default:
            return false;
        }
      }
      function SameValueZero(x, y) {
        return x === y || x !== x && y !== y;
      }
      function GetMethod(V, P) {
        var func = V[P];
        if (func === void 0 || func === null)
          return void 0;
        if (!IsCallable(func))
          throw new TypeError();
        return func;
      }
      function GetIterator(obj) {
        var method = GetMethod(obj, iteratorSymbol);
        if (!IsCallable(method))
          throw new TypeError();
        var iterator = method.call(obj);
        if (!IsObject(iterator))
          throw new TypeError();
        return iterator;
      }
      function IteratorValue(iterResult) {
        return iterResult.value;
      }
      function IteratorStep(iterator) {
        var result = iterator.next();
        return result.done ? false : result;
      }
      function IteratorClose(iterator) {
        var f = iterator["return"];
        if (f)
          f.call(iterator);
      }
      function OrdinaryGetPrototypeOf(O) {
        var proto = Object.getPrototypeOf(O);
        if (typeof O !== "function" || O === functionPrototype)
          return proto;
        if (proto !== functionPrototype)
          return proto;
        var prototype = O.prototype;
        var prototypeProto = prototype && Object.getPrototypeOf(prototype);
        if (prototypeProto == null || prototypeProto === Object.prototype)
          return proto;
        var constructor = prototypeProto.constructor;
        if (typeof constructor !== "function")
          return proto;
        if (constructor === O)
          return proto;
        return constructor;
      }
      function CreateMetadataRegistry() {
        var fallback;
        if (!IsUndefined(registrySymbol) && typeof root.Reflect !== "undefined" && !(registrySymbol in root.Reflect) && typeof root.Reflect.defineMetadata === "function") {
          fallback = CreateFallbackProvider(root.Reflect);
        }
        var first;
        var second;
        var rest;
        var targetProviderMap = new _WeakMap();
        var registry = {
          registerProvider,
          getProvider,
          setProvider
        };
        return registry;
        function registerProvider(provider) {
          if (!Object.isExtensible(registry)) {
            throw new Error("Cannot add provider to a frozen registry.");
          }
          switch (true) {
            case fallback === provider:
              break;
            case IsUndefined(first):
              first = provider;
              break;
            case first === provider:
              break;
            case IsUndefined(second):
              second = provider;
              break;
            case second === provider:
              break;
            default:
              if (rest === void 0)
                rest = new _Set();
              rest.add(provider);
              break;
          }
        }
        function getProviderNoCache(O, P) {
          if (!IsUndefined(first)) {
            if (first.isProviderFor(O, P))
              return first;
            if (!IsUndefined(second)) {
              if (second.isProviderFor(O, P))
                return first;
              if (!IsUndefined(rest)) {
                var iterator = GetIterator(rest);
                while (true) {
                  var next = IteratorStep(iterator);
                  if (!next) {
                    return void 0;
                  }
                  var provider = IteratorValue(next);
                  if (provider.isProviderFor(O, P)) {
                    IteratorClose(iterator);
                    return provider;
                  }
                }
              }
            }
          }
          if (!IsUndefined(fallback) && fallback.isProviderFor(O, P)) {
            return fallback;
          }
          return void 0;
        }
        function getProvider(O, P) {
          var providerMap = targetProviderMap.get(O);
          var provider;
          if (!IsUndefined(providerMap)) {
            provider = providerMap.get(P);
          }
          if (!IsUndefined(provider)) {
            return provider;
          }
          provider = getProviderNoCache(O, P);
          if (!IsUndefined(provider)) {
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O, providerMap);
            }
            providerMap.set(P, provider);
          }
          return provider;
        }
        function hasProvider(provider) {
          if (IsUndefined(provider))
            throw new TypeError();
          return first === provider || second === provider || !IsUndefined(rest) && rest.has(provider);
        }
        function setProvider(O, P, provider) {
          if (!hasProvider(provider)) {
            throw new Error("Metadata provider not registered.");
          }
          var existingProvider = getProvider(O, P);
          if (existingProvider !== provider) {
            if (!IsUndefined(existingProvider)) {
              return false;
            }
            var providerMap = targetProviderMap.get(O);
            if (IsUndefined(providerMap)) {
              providerMap = new _Map();
              targetProviderMap.set(O, providerMap);
            }
            providerMap.set(P, provider);
          }
          return true;
        }
      }
      function GetOrCreateMetadataRegistry() {
        var metadataRegistry2;
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          metadataRegistry2 = root.Reflect[registrySymbol];
        }
        if (IsUndefined(metadataRegistry2)) {
          metadataRegistry2 = CreateMetadataRegistry();
        }
        if (!IsUndefined(registrySymbol) && IsObject(root.Reflect) && Object.isExtensible(root.Reflect)) {
          Object.defineProperty(root.Reflect, registrySymbol, {
            enumerable: false,
            configurable: false,
            writable: false,
            value: metadataRegistry2
          });
        }
        return metadataRegistry2;
      }
      function CreateMetadataProvider(registry) {
        var metadata2 = new _WeakMap();
        var provider = {
          isProviderFor: function(O, P) {
            var targetMetadata = metadata2.get(O);
            if (IsUndefined(targetMetadata))
              return false;
            return targetMetadata.has(P);
          },
          OrdinaryDefineOwnMetadata: OrdinaryDefineOwnMetadata2,
          OrdinaryHasOwnMetadata: OrdinaryHasOwnMetadata2,
          OrdinaryGetOwnMetadata: OrdinaryGetOwnMetadata2,
          OrdinaryOwnMetadataKeys: OrdinaryOwnMetadataKeys2,
          OrdinaryDeleteMetadata
        };
        metadataRegistry.registerProvider(provider);
        return provider;
        function GetOrCreateMetadataMap(O, P, Create) {
          var targetMetadata = metadata2.get(O);
          var createdTargetMetadata = false;
          if (IsUndefined(targetMetadata)) {
            if (!Create)
              return void 0;
            targetMetadata = new _Map();
            metadata2.set(O, targetMetadata);
            createdTargetMetadata = true;
          }
          var metadataMap = targetMetadata.get(P);
          if (IsUndefined(metadataMap)) {
            if (!Create)
              return void 0;
            metadataMap = new _Map();
            targetMetadata.set(P, metadataMap);
            if (!registry.setProvider(O, P, provider)) {
              targetMetadata.delete(P);
              if (createdTargetMetadata) {
                metadata2.delete(O);
              }
              throw new Error("Wrong provider for target.");
            }
          }
          return metadataMap;
        }
        function OrdinaryHasOwnMetadata2(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return false;
          return ToBoolean(metadataMap.has(MetadataKey));
        }
        function OrdinaryGetOwnMetadata2(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return void 0;
          return metadataMap.get(MetadataKey);
        }
        function OrdinaryDefineOwnMetadata2(MetadataKey, MetadataValue, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            true
          );
          metadataMap.set(MetadataKey, MetadataValue);
        }
        function OrdinaryOwnMetadataKeys2(O, P) {
          var keys = [];
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return keys;
          var keysObj = metadataMap.keys();
          var iterator = GetIterator(keysObj);
          var k = 0;
          while (true) {
            var next = IteratorStep(iterator);
            if (!next) {
              keys.length = k;
              return keys;
            }
            var nextValue = IteratorValue(next);
            try {
              keys[k] = nextValue;
            } catch (e) {
              try {
                IteratorClose(iterator);
              } finally {
                throw e;
              }
            }
            k++;
          }
        }
        function OrdinaryDeleteMetadata(MetadataKey, O, P) {
          var metadataMap = GetOrCreateMetadataMap(
            O,
            P,
            /*Create*/
            false
          );
          if (IsUndefined(metadataMap))
            return false;
          if (!metadataMap.delete(MetadataKey))
            return false;
          if (metadataMap.size === 0) {
            var targetMetadata = metadata2.get(O);
            if (!IsUndefined(targetMetadata)) {
              targetMetadata.delete(P);
              if (targetMetadata.size === 0) {
                metadata2.delete(targetMetadata);
              }
            }
          }
          return true;
        }
      }
      function CreateFallbackProvider(reflect) {
        var defineMetadata2 = reflect.defineMetadata, hasOwnMetadata2 = reflect.hasOwnMetadata, getOwnMetadata2 = reflect.getOwnMetadata, getOwnMetadataKeys2 = reflect.getOwnMetadataKeys, deleteMetadata2 = reflect.deleteMetadata;
        var metadataOwner = new _WeakMap();
        var provider = {
          isProviderFor: function(O, P) {
            var metadataPropertySet = metadataOwner.get(O);
            if (!IsUndefined(metadataPropertySet) && metadataPropertySet.has(P)) {
              return true;
            }
            if (getOwnMetadataKeys2(O, P).length) {
              if (IsUndefined(metadataPropertySet)) {
                metadataPropertySet = new _Set();
                metadataOwner.set(O, metadataPropertySet);
              }
              metadataPropertySet.add(P);
              return true;
            }
            return false;
          },
          OrdinaryDefineOwnMetadata: defineMetadata2,
          OrdinaryHasOwnMetadata: hasOwnMetadata2,
          OrdinaryGetOwnMetadata: getOwnMetadata2,
          OrdinaryOwnMetadataKeys: getOwnMetadataKeys2,
          OrdinaryDeleteMetadata: deleteMetadata2
        };
        return provider;
      }
      function GetMetadataProvider(O, P, Create) {
        var registeredProvider = metadataRegistry.getProvider(O, P);
        if (!IsUndefined(registeredProvider)) {
          return registeredProvider;
        }
        if (Create) {
          if (metadataRegistry.setProvider(O, P, metadataProvider)) {
            return metadataProvider;
          }
          throw new Error("Illegal state.");
        }
        return void 0;
      }
      function CreateMapPolyfill() {
        var cacheSentinel = {};
        var arraySentinel = [];
        var MapIterator = (
          /** @class */
          (function() {
            function MapIterator2(keys, values, selector) {
              this._index = 0;
              this._keys = keys;
              this._values = values;
              this._selector = selector;
            }
            MapIterator2.prototype["@@iterator"] = function() {
              return this;
            };
            MapIterator2.prototype[iteratorSymbol] = function() {
              return this;
            };
            MapIterator2.prototype.next = function() {
              var index = this._index;
              if (index >= 0 && index < this._keys.length) {
                var result = this._selector(this._keys[index], this._values[index]);
                if (index + 1 >= this._keys.length) {
                  this._index = -1;
                  this._keys = arraySentinel;
                  this._values = arraySentinel;
                } else {
                  this._index++;
                }
                return { value: result, done: false };
              }
              return { value: void 0, done: true };
            };
            MapIterator2.prototype.throw = function(error) {
              if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              }
              throw error;
            };
            MapIterator2.prototype.return = function(value) {
              if (this._index >= 0) {
                this._index = -1;
                this._keys = arraySentinel;
                this._values = arraySentinel;
              }
              return { value, done: true };
            };
            return MapIterator2;
          })()
        );
        var Map2 = (
          /** @class */
          (function() {
            function Map3() {
              this._keys = [];
              this._values = [];
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            }
            Object.defineProperty(Map3.prototype, "size", {
              get: function() {
                return this._keys.length;
              },
              enumerable: true,
              configurable: true
            });
            Map3.prototype.has = function(key) {
              return this._find(
                key,
                /*insert*/
                false
              ) >= 0;
            };
            Map3.prototype.get = function(key) {
              var index = this._find(
                key,
                /*insert*/
                false
              );
              return index >= 0 ? this._values[index] : void 0;
            };
            Map3.prototype.set = function(key, value) {
              var index = this._find(
                key,
                /*insert*/
                true
              );
              this._values[index] = value;
              return this;
            };
            Map3.prototype.delete = function(key) {
              var index = this._find(
                key,
                /*insert*/
                false
              );
              if (index >= 0) {
                var size = this._keys.length;
                for (var i = index + 1; i < size; i++) {
                  this._keys[i - 1] = this._keys[i];
                  this._values[i - 1] = this._values[i];
                }
                this._keys.length--;
                this._values.length--;
                if (SameValueZero(key, this._cacheKey)) {
                  this._cacheKey = cacheSentinel;
                  this._cacheIndex = -2;
                }
                return true;
              }
              return false;
            };
            Map3.prototype.clear = function() {
              this._keys.length = 0;
              this._values.length = 0;
              this._cacheKey = cacheSentinel;
              this._cacheIndex = -2;
            };
            Map3.prototype.keys = function() {
              return new MapIterator(this._keys, this._values, getKey);
            };
            Map3.prototype.values = function() {
              return new MapIterator(this._keys, this._values, getValue);
            };
            Map3.prototype.entries = function() {
              return new MapIterator(this._keys, this._values, getEntry);
            };
            Map3.prototype["@@iterator"] = function() {
              return this.entries();
            };
            Map3.prototype[iteratorSymbol] = function() {
              return this.entries();
            };
            Map3.prototype._find = function(key, insert) {
              if (!SameValueZero(this._cacheKey, key)) {
                this._cacheIndex = -1;
                for (var i = 0; i < this._keys.length; i++) {
                  if (SameValueZero(this._keys[i], key)) {
                    this._cacheIndex = i;
                    break;
                  }
                }
              }
              if (this._cacheIndex < 0 && insert) {
                this._cacheIndex = this._keys.length;
                this._keys.push(key);
                this._values.push(void 0);
              }
              return this._cacheIndex;
            };
            return Map3;
          })()
        );
        return Map2;
        function getKey(key, _) {
          return key;
        }
        function getValue(_, value) {
          return value;
        }
        function getEntry(key, value) {
          return [key, value];
        }
      }
      function CreateSetPolyfill() {
        var Set2 = (
          /** @class */
          (function() {
            function Set3() {
              this._map = new _Map();
            }
            Object.defineProperty(Set3.prototype, "size", {
              get: function() {
                return this._map.size;
              },
              enumerable: true,
              configurable: true
            });
            Set3.prototype.has = function(value) {
              return this._map.has(value);
            };
            Set3.prototype.add = function(value) {
              return this._map.set(value, value), this;
            };
            Set3.prototype.delete = function(value) {
              return this._map.delete(value);
            };
            Set3.prototype.clear = function() {
              this._map.clear();
            };
            Set3.prototype.keys = function() {
              return this._map.keys();
            };
            Set3.prototype.values = function() {
              return this._map.keys();
            };
            Set3.prototype.entries = function() {
              return this._map.entries();
            };
            Set3.prototype["@@iterator"] = function() {
              return this.keys();
            };
            Set3.prototype[iteratorSymbol] = function() {
              return this.keys();
            };
            return Set3;
          })()
        );
        return Set2;
      }
      function CreateWeakMapPolyfill() {
        var UUID_SIZE = 16;
        var keys = HashMap.create();
        var rootKey = CreateUniqueKey();
        return (
          /** @class */
          (function() {
            function WeakMap2() {
              this._key = CreateUniqueKey();
            }
            WeakMap2.prototype.has = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? HashMap.has(table, this._key) : false;
            };
            WeakMap2.prototype.get = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? HashMap.get(table, this._key) : void 0;
            };
            WeakMap2.prototype.set = function(target, value) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                true
              );
              table[this._key] = value;
              return this;
            };
            WeakMap2.prototype.delete = function(target) {
              var table = GetOrCreateWeakMapTable(
                target,
                /*create*/
                false
              );
              return table !== void 0 ? delete table[this._key] : false;
            };
            WeakMap2.prototype.clear = function() {
              this._key = CreateUniqueKey();
            };
            return WeakMap2;
          })()
        );
        function CreateUniqueKey() {
          var key;
          do
            key = "@@WeakMap@@" + CreateUUID();
          while (HashMap.has(keys, key));
          keys[key] = true;
          return key;
        }
        function GetOrCreateWeakMapTable(target, create) {
          if (!hasOwn.call(target, rootKey)) {
            if (!create)
              return void 0;
            Object.defineProperty(target, rootKey, { value: HashMap.create() });
          }
          return target[rootKey];
        }
        function FillRandomBytes(buffer, size) {
          for (var i = 0; i < size; ++i)
            buffer[i] = Math.random() * 255 | 0;
          return buffer;
        }
        function GenRandomBytes(size) {
          if (typeof Uint8Array === "function") {
            var array = new Uint8Array(size);
            if (typeof crypto !== "undefined") {
              crypto.getRandomValues(array);
            } else if (typeof msCrypto !== "undefined") {
              msCrypto.getRandomValues(array);
            } else {
              FillRandomBytes(array, size);
            }
            return array;
          }
          return FillRandomBytes(new Array(size), size);
        }
        function CreateUUID() {
          var data = GenRandomBytes(UUID_SIZE);
          data[6] = data[6] & 79 | 64;
          data[8] = data[8] & 191 | 128;
          var result = "";
          for (var offset = 0; offset < UUID_SIZE; ++offset) {
            var byte = data[offset];
            if (offset === 4 || offset === 6 || offset === 8)
              result += "-";
            if (byte < 16)
              result += "0";
            result += byte.toString(16).toLowerCase();
          }
          return result;
        }
      }
      function MakeDictionary(obj) {
        obj.__ = void 0;
        delete obj.__;
        return obj;
      }
    });
  })(Reflect2 || (Reflect2 = {}));
  return _Reflect;
}
require_Reflect();
const INJECT_KEY = Symbol.for("tsm:inject");
const INJECT_PROPERTY_KEY = Symbol.for("tsm:inject:property");
function inject(serviceId, options) {
  return (target, propertyKey, parameterIndex) => {
    if (parameterIndex !== void 0) {
      const existing = Reflect.getOwnMetadata(INJECT_KEY, target) ?? [];
      existing.push({
        index: parameterIndex,
        serviceId,
        optional: false
      });
      Reflect.defineMetadata(INJECT_KEY, existing, target);
    } else {
      const ctor = target.constructor;
      const existing = Reflect.getOwnMetadata(INJECT_PROPERTY_KEY, ctor) ?? [];
      existing.push({
        propertyKey,
        serviceId,
        optional: false
      });
      Reflect.defineMetadata(INJECT_PROPERTY_KEY, existing, ctor);
    }
  };
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
  inject("ConnectionRepository")
], XmlaStore.prototype, "connectionRepository");
const XMLA_STORE_FACTORY = "XmlaStoreFactory";
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
