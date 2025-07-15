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

import type { Client } from "../utils/SOAPInBrowser/src/client";

// export interface Client {
//   ExecuteAsync: (args: any) => Promise<any>
//   DiscoverAsync: (args: any) => Promise<any>
// }

class XMLAApi {
  public url: string
  sessionId: string = ''
  SOAPClient: null | Client = null

  constructor(SOAPClient: any, url: string) {
    this.url = url
    this.SOAPClient = SOAPClient
  }

  private rowToArray(row: any): any[] {
    if (Array.isArray(row)) return row
    if (row) {
      return [row]
    }
    return []
  }

  public async getKpis(catalog: string): Promise<{ kpis: any[] }> {
    const kpisResponse = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      RequestType: 'MDSCHEMA_KPIS',
      Restrictions: {
        RestrictionList: {},
      },
      Properties: {
        PropertyList: {
          Catalog: catalog
        },
      },
    })
    const kpis = this.rowToArray(
      kpisResponse.Body.DiscoverResponse.return[0].root.row,
    )

    return {
      kpis
    }
  }

  public async startSession(): Promise<void> {
    const res = await this.SOAPClient?.ExecuteAsync({
      Headers: {
        BeginSession: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
          },
        },
        Version: {},
      },
      Command: {
        Statement: '',
      },
      Properties: {
        PropertieList: {
          LocaleIdentifier: '1033',
        },
      },
    })

    const sessionId = res?.Header?.Session?.__attrs?.SessionId
    this.sessionId = sessionId
  }

  public async getCatalogs(): Promise<{ catalogs: DBSchemaCatalog[] }> {
    const catalogsResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      RequestType: 'DBSCHEMA_CATALOGS',
      Restrictions: {
        RestrictionList: {},
      },
      Properties: {
        PropertyList: {},
      },
    })

    const catalogs = this.rowToArray(
      catalogsResponce.Body.DiscoverResponse.return[0].root.row,
    )

    return {
      catalogs,
    }
  }

  public async getCubes(
    catalogName: string,
  ): Promise<{ cubes: MDSchemaCube[] }> {
    const cubesResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      RequestType: 'MDSCHEMA_CUBES',
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
        },
      },
      Properties: {
        PropertyList: {},
      },
    })

    const cubes = this.rowToArray(
      cubesResponce.Body.DiscoverResponse.return[0].root.row,
    )
    return {
      cubes,
    }
  }

  public async getDimensions(
    catalogName: string,
    cubeName: string,
  ): Promise<MDSchemaDimension[]> {
    const dimensionsResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      RequestType: 'MDSCHEMA_DIMENSIONS',
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName,
        },
      },
      Properties: {
        PropertyList: {},
      },
    })

    return this.rowToArray(
      dimensionsResponce.Body.DiscoverResponse.return[0].root.row,
    ) as MDSchemaDimension[]
  }

  public async getHierarchies(
    catalogName: string,
    cubeName: string,
  ): Promise<MDSchemaHierarchy[]> {
    const hierarchiesResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      RequestType: 'MDSCHEMA_HIERARCHIES',
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName,
        },
      },
      Properties: {
        PropertyList: {},
      },
    })

    return this.rowToArray(
      hierarchiesResponce.Body.DiscoverResponse.return[0].root.row,
    ) as MDSchemaHierarchy[]
  }

  public async getLevels(
    catalogName: string,
    cubeName: string,
  ): Promise<MDSchemaLevel[]> {
    const levelsResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      RequestType: 'MDSCHEMA_LEVELS',
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName,
        },
      },
      Properties: {
        PropertyList: {},
      },
    })

    return this.rowToArray(
      levelsResponce.Body.DiscoverResponse.return[0].root.row,
    ) as MDSchemaLevel[]
  }

  public async getHierarchyLevels(
    catalogName: string,
    cubeName: string,
    hierarchyUniqueName: string,
  ): Promise<MDSchemaLevel[]> {
    const levelsResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      RequestType: 'MDSCHEMA_LEVELS',
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName,
          HIERARCHY_UNIQUE_NAME: hierarchyUniqueName,
        },
      },
      Properties: {
        PropertyList: {},
      },
    })

    return this.rowToArray(
      levelsResponce.Body.DiscoverResponse.return[0].root.row,
    ) as MDSchemaLevel[]
  }

  public async getMeasureGroups(
    catalogName: string,
    cubeName: string,
  ): Promise<MDSchemaMeasureGroup[]> {
    const measureGroupsResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      RequestType: 'MDSCHEMA_MEASUREGROUPS',
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName,
        },
      },
      Properties: {
        PropertyList: {},
      },
    })

    return this.rowToArray(
      measureGroupsResponce.Body.DiscoverResponse.return[0].root.row,
    ) as MDSchemaMeasureGroup[]
  }

  public async getMeasures(
    catalogName: string,
    cubeName: string,
  ): Promise<MDSchemaMeasure[]> {
    const measuresResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      RequestType: 'MDSCHEMA_MEASURES',
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName,
        },
      },
      Properties: {
        PropertyList: {},
      },
    })

    return this.rowToArray(
      measuresResponce.Body.DiscoverResponse.return[0].root.row,
    ) as MDSchemaMeasure[]
  }

  public async getSets(
    catalogName: string,
    cubeName: string,
  ): Promise<MDSchemaSet[]> {
    const setsResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      RequestType: 'MDSCHEMA_SETS',
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName,
        },
      },
      Properties: {
        PropertyList: {},
      },
    })

    return this.rowToArray(
      setsResponce.Body.DiscoverResponse.return[0].root.row,
    ) as MDSchemaSet[]
  }

  public async getProperties(
    catalogName: string,
    cubeName: string,
  ): Promise<MDSchemaProperty[]> {
    const propertiesResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      RequestType: 'MDSCHEMA_PROPERTIES',
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName,
        },
      },
      Properties: {
        PropertyList: {},
      },
    })

    return this.rowToArray(
      propertiesResponce.Body.DiscoverResponse.return[0].root.row,
    ) as MDSchemaProperty[]
  }

  public async getMembers(level: MDSchemaLevel): Promise<MDSchemaMember[]> {
    const propertiesResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      RequestType: 'MDSCHEMA_MEMBERS',
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: level.CATALOG_NAME,
          CUBE_NAME: level.CUBE_NAME,
          DIMENSION_UNIQUE_NAME: level.DIMENSION_UNIQUE_NAME,
          HIERARCHY_UNIQUE_NAME: level.HIERARCHY_UNIQUE_NAME,
          LEVEL_UNIQUE_NAME: level.LEVEL_UNIQUE_NAME,
        },
      },
      Properties: {
        PropertyList: {},
      },
    })

    return this.rowToArray(
      propertiesResponce.Body.DiscoverResponse.return[0].root.row,
    ) as MDSchemaMember[]
  }

  public async getLevelMembers(
    level: MDSchemaLevel,
    amount: number,
    start: number,
  ): Promise<any[]> {
    const levelMembersRequestMDX = `
      select Subset(${level.LEVEL_UNIQUE_NAME}.AllMembers, ${start}, ${
        amount + 1
      })
      DIMENSION PROPERTIES MEMBER_TYPE on 0,
      {} on 1
      from ${level.CUBE_NAME}
    `

    const levelMembersResponce = await this.getMDX(levelMembersRequestMDX)
    return this.rowToArray(
      levelMembersResponce.Body.ExecuteResponse.return.root.Axes.Axis[0].Tuples
        .Tuple,
    )
  }

  public async getChildMembers(
    member: MDSchemaMember,
    amount: number,
    start: number,
  ): Promise<any[]> {
    const childMembersRequestMDX = `
      select Subset({AddCalculatedMembers(${
        member.MEMBER_UNIQUE_NAME
      }.Children)}, ${start}, ${amount + 1})
      DIMENSION PROPERTIES MEMBER_TYPE on 0,
      {} on 1
      from ${member.CUBE_NAME}
    `

    const childMembersResponce = await this.getMDX(childMembersRequestMDX)
    return this.rowToArray(
      childMembersResponce.Body.ExecuteResponse.return.root.Axes.Axis[0].Tuples
        .Tuple,
    )
  }

  public async getMDX(mdx: string, catalog?: string, format: string = 'Multidimensional'): Promise<any> {
    const propertiesResponce = await this.SOAPClient?.ExecuteAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      Command: {
        Statement: mdx,
      },
      Properties: {
        PropertyList: {
          Format: format,
          Catalog: catalog,
        },
      },
    })

    return propertiesResponce
  }

  public async getPivotTableData(
    cubename: string,
    rows: any[],
    columns: any[],
    pivotTableSettings: any,
    properties: any[],
  ): Promise<any> {
    let mdxRequest
    if (rows.length && columns.length) {
      const rowsProperties = [] as any[]
      let rowsRequest = ''
      if (rows.length >= 1) {
        rows.forEach((e: any, i: number) => {
          if (i === 0) {
            rowsRequest = `Hierarchize({DrilldownLevel({${e.originalItem.HIERARCHY_UNIQUE_NAME}},,,INCLUDE_CALC_MEMBERS)})`
          } else {
            rowsRequest = `
              CrossJoin(
                ${rowsRequest},
                Hierarchize({DrilldownLevel({${e.originalItem.HIERARCHY_UNIQUE_NAME}},,,INCLUDE_CALC_MEMBERS)})
              )
            `
          }
        })
      } else {
        rowsRequest = `{ ${rows[0].originalItem.HIERARCHY_UNIQUE_NAME}.Members }`
      }

      rows.forEach((e: any) => {
        rowsProperties.push(
          properties.filter(
            prop =>
              prop.HIERARCHY_UNIQUE_NAME ===
              e.originalItem.HIERARCHY_UNIQUE_NAME,
          ),
        )
      })

      const columnsProperties = [] as any[]
      let columnsRequest = ''
      if (columns.length >= 1) {
        columns.forEach((e: any, i: number) => {
          if (i === 0) {
            columnsRequest = `Hierarchize({DrilldownLevel({${e.originalItem.HIERARCHY_UNIQUE_NAME}},,,INCLUDE_CALC_MEMBERS)})`
          } else {
            columnsRequest = `
              CrossJoin(
                ${columnsRequest},
                Hierarchize({DrilldownLevel({${e.originalItem.HIERARCHY_UNIQUE_NAME}},,,INCLUDE_CALC_MEMBERS)})
              )
            `
          }
        })
      } else {
        columnsRequest = `{ ${columns[0].originalItem.HIERARCHY_UNIQUE_NAME}.Members }`
      }

      columns.forEach((e: any) => {
        columnsProperties.push(
          properties.filter(
            prop =>
              prop.HIERARCHY_UNIQUE_NAME ===
              e.originalItem.HIERARCHY_UNIQUE_NAME,
          ),
        )
      })

      let columnsPropertiesList = columnsProperties
        .flat(1)
        .map(e => `${e.LEVEL_UNIQUE_NAME}.[${e.PROPERTY_NAME}]`)
        .join(',')
      let rowsPropertiesList = rowsProperties
        .flat(1)
        .map(e => `${e.LEVEL_UNIQUE_NAME}.[${e.PROPERTY_NAME}]`)
        .join(',')

      if (columnsPropertiesList)
        columnsPropertiesList = `,${columnsPropertiesList}`
      if (rowsPropertiesList) rowsPropertiesList = `,${rowsPropertiesList}`

      // if (drillDownHistory.length === 1) {
      //   if (pivotTableSettings.showEmpty) {
      //     mdxRequest = `WITH  SET [XL_Col_Dim_0] AS 'VisualTotals(Distinct(Hierarchize({Ascendants([Product].[Drink]), Descendants([Product].[Drink])})))'
      //     SELECT NON EMPTY Hierarchize(Intersect(AddCalculatedMembers({DrilldownLevel({DrilldownLevel({[Product].[All Products]})},[Product].[Product Family])}),
      //     [XL_Col_Dim_0])) DIMENSION PROPERTIES PARENT_UNIQUE_NAME ON COLUMNS,
      //     NON EMPTY Hierarchize(AddCalculatedMembers({DrilldownLevel({[Gender].[All Gender]})})) DIMENSION PROPERTIES PARENT_UNIQUE_NAME ON ROWS
      //     FROM [Sales] CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS`;
      //   } else {
      //     mdxRequest = `WITH  SET [XL_Col_Dim_0] AS 'VisualTotals(Distinct(Hierarchize({Ascendants([Product].[Drink]), Descendants([Product].[Drink])})))'
      //     SELECT Hierarchize(Intersect(AddCalculatedMembers({DrilldownLevel({DrilldownLevel({[Product].[All Products]})},[Product].[Product Family])}),
      //     [XL_Col_Dim_0])) DIMENSION PROPERTIES PARENT_UNIQUE_NAME ON COLUMNS,
      //     Hierarchize(AddCalculatedMembers({DrilldownLevel({[Gender].[All Gender]})})) DIMENSION PROPERTIES PARENT_UNIQUE_NAME ON ROWS
      //     FROM [Sales] CELL PROPERTIES VALUE, FORMAT_STRING, LANGUAGE, BACK_COLOR, FORE_COLOR, FONT_FLAGS`;
      //   }
      // }

      if (pivotTableSettings.showEmpty) {
        mdxRequest = `
            SELECT
            ${columnsRequest} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${columnsPropertiesList} ON 1,
            ${rowsRequest} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${rowsPropertiesList}  ON 0
            FROM ${cubename}
        `
      } else {
        mdxRequest = `
            SELECT
            NON EMPTY ${columnsRequest} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${columnsPropertiesList} ON 1,
            NON EMPTY ${rowsRequest} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${rowsPropertiesList} ON 0
            FROM ${cubename}
        `
      }
    } else {
      mdxRequest = `
          SELECT
          FROM ${cubename}
      `
    }

    const mdxResponce = await this.getMDX(mdxRequest)
    const axis0 = this.rowToArray(
      mdxResponce.Body.ExecuteResponse.return.root.Axes?.Axis?.[0]?.Tuples
        ?.Tuple,
    )
    const axis1 = this.rowToArray(
      mdxResponce.Body.ExecuteResponse.return.root.Axes?.Axis?.[1]?.Tuples
        ?.Tuple,
    )
    const cells = this.rowToArray(
      mdxResponce.Body.ExecuteResponse.return.root.CellData?.Cell,
    )

    return {
      axis0,
      axis1,
      cells,
    }
  }

  public async getMember(
    level: MDSchemaLevel,
    MEMBER_UNIQUE_NAME: string,
  ): Promise<MDSchemaMember> {
    const propertiesResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      RequestType: 'MDSCHEMA_MEMBERS',
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: level.CATALOG_NAME,
          CUBE_NAME: level.CUBE_NAME,
          DIMENSION_UNIQUE_NAME: level.DIMENSION_UNIQUE_NAME,
          HIERARCHY_UNIQUE_NAME: level.HIERARCHY_UNIQUE_NAME,
          LEVEL_UNIQUE_NAME: level.LEVEL_UNIQUE_NAME,
          MEMBER_UNIQUE_NAME,
        },
      },
      Properties: {
        PropertyList: {},
      },
    })

    const array = this.rowToArray(
      propertiesResponce.Body.DiscoverResponse.return[0].root.row,
    ) as MDSchemaMember[]

    return array[0]
  }

  public async getLevelChildMembers(level: MDSchemaLevel) {
    const mdx = `
            SELECT {AddCalculatedMembers({${level.DIMENSION_UNIQUE_NAME}.${level.HIERARCHY_UNIQUE_NAME}.Levels(0).Members})} DIMENSION PROPERTIES MEMBER_TYPE ON 0, {} ON 1 FROM ${level.CUBE_NAME} CELL PROPERTIES CELL_ORDINAL
        `

    const membersResponce = await this.getMDX(mdx)
    const childMembers = this.rowToArray(
      membersResponce.Body.ExecuteResponse.return.root.Axes.Axis[0].Tuples
        .Tuple,
    )

    return childMembers
  }

  public async getChildren(member: any, cube: string) {
    const mdx = `
            SELECT {AddCalculatedMembers({${member.UName}.Children})} DIMENSION PROPERTIES MEMBER_TYPE ON 0, {} ON 1 FROM ${cube} CELL PROPERTIES CELL_ORDINAL
        `

    const membersResponce = await this.getMDX(mdx)
    const childMembers = this.rowToArray(
      membersResponce.Body.ExecuteResponse.return.root.Axes.Axis[0].Tuples
        .Tuple,
    )

    return childMembers
  }

  public async getDrillthroughMDX(mdx: string): Promise<any> {
    const propertiesResponce = await this.SOAPClient?.ExecuteAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      Command: {
        Statement: mdx,
      },
      Properties: {
        PropertyList: {
          Format: 'Tabular',
        },
      },
    })

    return propertiesResponce
  }

  public async endSession(): Promise<void> {
    await this.SOAPClient?.ExecuteAsync({
      Headers: {
        EndSession: {
          __attrs: {
            xmlns: 'urn:schemas-microsoft-com:xml-analysis',
            SessionId: this.sessionId,
          },
        },
      },
      Command: {
        Statement: {},
      },
      Properties: {},
    })

    this.sessionId = ''
  }
}

export { XMLAApi }
