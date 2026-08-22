const { BaseConnection } = __tsm__.require("org.eclipse.daanse.board.app.lib.connection.base");
class XMLAApi {
  url;
  sessionId = "";
  SOAPClient = null;
  constructor(SOAPClient, url) {
    this.url = url;
    this.SOAPClient = SOAPClient;
  }
  rowToArray(row) {
    if (Array.isArray(row)) return row;
    if (row) {
      return [row];
    }
    return [];
  }
  async getKpis(catalog, cube) {
    const kpisResponse = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      RequestType: "MDSCHEMA_KPIS",
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalog,
          CUBE_NAME: cube
        }
      },
      Properties: {
        PropertyList: {
          Catalog: catalog,
          Cube: cube
        }
      }
    });
    const kpis = this.rowToArray(
      kpisResponse.Body.DiscoverResponse.return[0].root.row
    );
    return {
      kpis
    };
  }
  async startSession() {
    const res = await this.SOAPClient?.ExecuteAsync({
      Headers: {
        BeginSession: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis"
          }
        },
        Version: {}
      },
      Command: {
        Statement: ""
      },
      Properties: {
        PropertyList: {
          LocaleIdentifier: "1033"
        }
      }
    });
    const sessionId = res?.Header?.Session?.__attrs?.SessionId;
    this.sessionId = sessionId;
  }
  async getCatalogs() {
    const catalogsResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      RequestType: "DBSCHEMA_CATALOGS",
      Restrictions: {
        RestrictionList: {}
      },
      Properties: {
        PropertyList: {}
      }
    });
    const catalogs = this.rowToArray(
      catalogsResponce.Body.DiscoverResponse.return[0].root.row
    );
    return {
      catalogs
    };
  }
  async getTables() {
    const tablesResponse = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      RequestType: "DBSCHEMA_TABLES",
      Restrictions: {
        RestrictionList: {}
      },
      Properties: {
        PropertyList: {}
      }
    });
    const tables = this.rowToArray(
      tablesResponse.Body.DiscoverResponse.return[0].root.row
    );
    return {
      tables
    };
  }
  async getColumns() {
    const columnsResponse = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      RequestType: "DBSCHEMA_COLUMNS",
      Restrictions: {
        RestrictionList: {}
      },
      Properties: {
        PropertyList: {}
      }
    });
    const columns = this.rowToArray(
      columnsResponse.Body.DiscoverResponse.return[0].root.row
    );
    return {
      columns
    };
  }
  async getCubes(catalogName) {
    const cubesResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      RequestType: "MDSCHEMA_CUBES",
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    const cubes = this.rowToArray(
      cubesResponce.Body.DiscoverResponse.return[0].root.row
    );
    return {
      cubes
    };
  }
  async getDimensions(catalogName, cubeName) {
    const dimensionsResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      RequestType: "MDSCHEMA_DIMENSIONS",
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      dimensionsResponce.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getHierarchies(catalogName, cubeName) {
    const hierarchiesResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      RequestType: "MDSCHEMA_HIERARCHIES",
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      hierarchiesResponce.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getLevels(catalogName, cubeName) {
    const levelsResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      RequestType: "MDSCHEMA_LEVELS",
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      levelsResponce.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getHierarchyLevels(catalogName, cubeName, hierarchyUniqueName) {
    const levelsResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      RequestType: "MDSCHEMA_LEVELS",
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName,
          HIERARCHY_UNIQUE_NAME: hierarchyUniqueName
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      levelsResponce.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getMeasureGroups(catalogName, cubeName) {
    const measureGroupsResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      RequestType: "MDSCHEMA_MEASUREGROUPS",
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      measureGroupsResponce.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getMeasures(catalogName, cubeName) {
    const measuresResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      RequestType: "MDSCHEMA_MEASURES",
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      measuresResponce.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getSets(catalogName, cubeName) {
    const setsResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      RequestType: "MDSCHEMA_SETS",
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      setsResponce.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getProperties(catalogName, cubeName) {
    const propertiesResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      RequestType: "MDSCHEMA_PROPERTIES",
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: catalogName,
          CUBE_NAME: cubeName
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      propertiesResponce.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getMembers(level) {
    const propertiesResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      RequestType: "MDSCHEMA_MEMBERS",
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: level.CATALOG_NAME,
          CUBE_NAME: level.CUBE_NAME,
          DIMENSION_UNIQUE_NAME: level.DIMENSION_UNIQUE_NAME,
          HIERARCHY_UNIQUE_NAME: level.HIERARCHY_UNIQUE_NAME,
          LEVEL_UNIQUE_NAME: level.LEVEL_UNIQUE_NAME
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      propertiesResponce.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getLevelMembers(level, amount, start) {
    const levelMembersRequestMDX = `
      select Subset(${level.LEVEL_UNIQUE_NAME}.AllMembers, ${start}, ${amount + 1})
      DIMENSION PROPERTIES MEMBER_TYPE on 0,
      {} on 1
      from ${level.CUBE_NAME}
    `;
    const levelMembersResponce = await this.getMDX(levelMembersRequestMDX);
    return this.rowToArray(
      levelMembersResponce.Body.ExecuteResponse.return.root.Axes.Axis[0].Tuples.Tuple
    );
  }
  async getChildMembers(member, amount, start) {
    const childMembersRequestMDX = `
      select Subset({AddCalculatedMembers(${member.MEMBER_UNIQUE_NAME}.Children)}, ${start}, ${amount + 1})
      DIMENSION PROPERTIES MEMBER_TYPE on 0,
      {} on 1
      from ${member.CUBE_NAME}
    `;
    const childMembersResponce = await this.getMDX(childMembersRequestMDX);
    return this.rowToArray(
      childMembersResponce.Body.ExecuteResponse.return.root.Axes.Axis[0].Tuples.Tuple
    );
  }
  async getMDX(mdx, catalog, format = "Multidimensional") {
    const propertiesResponce = await this.SOAPClient?.ExecuteAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      Command: {
        Statement: mdx
      },
      Properties: {
        PropertyList: {
          Format: format,
          Catalog: catalog
        }
      }
    });
    return propertiesResponce;
  }
  async getPivotTableData(cubename, rows, columns, pivotTableSettings, properties) {
    let mdxRequest;
    if (rows.length && columns.length) {
      const rowsProperties = [];
      let rowsRequest = "";
      if (rows.length >= 1) {
        rows.forEach((e, i) => {
          if (i === 0) {
            rowsRequest = `Hierarchize({DrilldownLevel({${e.originalItem.HIERARCHY_UNIQUE_NAME}},,,INCLUDE_CALC_MEMBERS)})`;
          } else {
            rowsRequest = `
              CrossJoin(
                ${rowsRequest},
                Hierarchize({DrilldownLevel({${e.originalItem.HIERARCHY_UNIQUE_NAME}},,,INCLUDE_CALC_MEMBERS)})
              )
            `;
          }
        });
      } else {
        rowsRequest = `{ ${rows[0].originalItem.HIERARCHY_UNIQUE_NAME}.Members }`;
      }
      rows.forEach((e) => {
        rowsProperties.push(
          properties.filter(
            (prop) => prop.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME
          )
        );
      });
      const columnsProperties = [];
      let columnsRequest = "";
      if (columns.length >= 1) {
        columns.forEach((e, i) => {
          if (i === 0) {
            columnsRequest = `Hierarchize({DrilldownLevel({${e.originalItem.HIERARCHY_UNIQUE_NAME}},,,INCLUDE_CALC_MEMBERS)})`;
          } else {
            columnsRequest = `
              CrossJoin(
                ${columnsRequest},
                Hierarchize({DrilldownLevel({${e.originalItem.HIERARCHY_UNIQUE_NAME}},,,INCLUDE_CALC_MEMBERS)})
              )
            `;
          }
        });
      } else {
        columnsRequest = `{ ${columns[0].originalItem.HIERARCHY_UNIQUE_NAME}.Members }`;
      }
      columns.forEach((e) => {
        columnsProperties.push(
          properties.filter(
            (prop) => prop.HIERARCHY_UNIQUE_NAME === e.originalItem.HIERARCHY_UNIQUE_NAME
          )
        );
      });
      let columnsPropertiesList = columnsProperties.flat(1).map((e) => `${e.LEVEL_UNIQUE_NAME}.[${e.PROPERTY_NAME}]`).join(",");
      let rowsPropertiesList = rowsProperties.flat(1).map((e) => `${e.LEVEL_UNIQUE_NAME}.[${e.PROPERTY_NAME}]`).join(",");
      if (columnsPropertiesList)
        columnsPropertiesList = `,${columnsPropertiesList}`;
      if (rowsPropertiesList) rowsPropertiesList = `,${rowsPropertiesList}`;
      if (pivotTableSettings.showEmpty) {
        mdxRequest = `
            SELECT
            ${columnsRequest} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${columnsPropertiesList} ON 1,
            ${rowsRequest} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${rowsPropertiesList}  ON 0
            FROM ${cubename}
        `;
      } else {
        mdxRequest = `
            SELECT
            NON EMPTY ${columnsRequest} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${columnsPropertiesList} ON 1,
            NON EMPTY ${rowsRequest} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${rowsPropertiesList} ON 0
            FROM ${cubename}
        `;
      }
    } else {
      mdxRequest = `
          SELECT
          FROM ${cubename}
      `;
    }
    const mdxResponce = await this.getMDX(mdxRequest);
    const axis0 = this.rowToArray(
      mdxResponce.Body.ExecuteResponse.return.root.Axes?.Axis?.[0]?.Tuples?.Tuple
    );
    const axis1 = this.rowToArray(
      mdxResponce.Body.ExecuteResponse.return.root.Axes?.Axis?.[1]?.Tuples?.Tuple
    );
    const cells = this.rowToArray(
      mdxResponce.Body.ExecuteResponse.return.root.CellData?.Cell
    );
    return {
      axis0,
      axis1,
      cells
    };
  }
  async getMember(level, MEMBER_UNIQUE_NAME) {
    const propertiesResponce = await this.SOAPClient?.DiscoverAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      RequestType: "MDSCHEMA_MEMBERS",
      Restrictions: {
        RestrictionList: {
          CATALOG_NAME: level.CATALOG_NAME,
          CUBE_NAME: level.CUBE_NAME,
          DIMENSION_UNIQUE_NAME: level.DIMENSION_UNIQUE_NAME,
          HIERARCHY_UNIQUE_NAME: level.HIERARCHY_UNIQUE_NAME,
          LEVEL_UNIQUE_NAME: level.LEVEL_UNIQUE_NAME,
          MEMBER_UNIQUE_NAME
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    const array = this.rowToArray(
      propertiesResponce.Body.DiscoverResponse.return[0].root.row
    );
    return array[0];
  }
  async getLevelChildMembers(level) {
    const mdx = `
            SELECT {AddCalculatedMembers({${level.HIERARCHY_UNIQUE_NAME}.Levels(0).Members})} DIMENSION PROPERTIES MEMBER_TYPE ON 0, {} ON 1 FROM ${level.CUBE_NAME} CELL PROPERTIES CELL_ORDINAL
        `;
    const membersResponce = await this.getMDX(mdx);
    const childMembers = this.rowToArray(
      membersResponce.Body.ExecuteResponse.return.root.Axes.Axis[0].Tuples.Tuple
    );
    return childMembers;
  }
  async getChildren(member, cube) {
    const mdx = `
            SELECT {AddCalculatedMembers({${member.UName}.Children})} DIMENSION PROPERTIES MEMBER_TYPE ON 0, {} ON 1 FROM ${cube} CELL PROPERTIES CELL_ORDINAL
        `;
    const membersResponce = await this.getMDX(mdx);
    const childMembers = this.rowToArray(
      membersResponce.Body.ExecuteResponse.return.root.Axes.Axis[0].Tuples.Tuple
    );
    return childMembers;
  }
  async getDrillthroughMDX(mdx) {
    const propertiesResponce = await this.SOAPClient?.ExecuteAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      Command: {
        Statement: mdx
      },
      Properties: {
        PropertyList: {
          Format: "Tabular"
        }
      }
    });
    return propertiesResponce;
  }
  async endSession() {
    await this.SOAPClient?.ExecuteAsync({
      Headers: {
        EndSession: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      Command: {
        Statement: {}
      },
      Properties: {}
    });
    this.sessionId = "";
  }
}
async function request(url, data, exheaders = {}) {
  const fetchFunc = fetch;
  const baseHeaders = {
    Accept: "text/html,application/xhtml+xml,application/xml",
    "Content-Type": "text/xml"
  };
  const request2 = await fetchFunc(url, {
    method: data ? "POST" : "GET",
    headers: {
      ...baseHeaders,
      ...exheaders
    },
    body: data
  });
  return request2;
}
function findKey(obj, val) {
  for (const n in obj) if (obj[n] === val) return n;
}
class Client {
  wsdl;
  endpoint;
  security;
  constructor(wsdl, endpoint) {
    this.wsdl = wsdl;
    this.endpoint = endpoint;
    this._initializeServices(endpoint);
  }
  setEndpoint(endpoint) {
    this.endpoint = endpoint;
    this._initializeServices(this.endpoint, true);
  }
  describe() {
    return this.wsdl.describeServices();
  }
  setSecurity(security) {
    this.security = security;
  }
  setSOAPAction(SOAPAction) {
    this.SOAPAction = SOAPAction;
  }
  _initializeServices(endpoint, forceReinit = false) {
    const definitions = this.wsdl.definitions;
    const services = definitions.services;
    for (const name in services) {
      this[name] = this._defineService(services[name], endpoint, forceReinit);
    }
  }
  _defineService(service, endpoint, forceReinit) {
    const ports = service.ports;
    const def = {};
    for (const name in ports) {
      def[name] = this._definePort(
        ports[name],
        endpoint || ports[name].location,
        forceReinit
      );
    }
    return def;
  }
  _definePort(port, endpoint, forceReinit) {
    const {
      binding: { methods }
    } = port;
    const def = {};
    for (const name in methods) {
      const formatedName = `${name}Async`;
      def[name] = this._defineMethod(methods[name], endpoint);
      def[formatedName] = this._defineMethodAsync(methods[name], endpoint);
      if (this[name] && !forceReinit) {
        throw new Error(`Method with name ${name} already exists`);
      }
      if (this[formatedName] && !forceReinit) {
        throw new Error(`Method with name ${formatedName} already exists`);
      }
      this[formatedName] = def[formatedName];
      this[name] = def[name];
    }
    return def;
  }
  _defineMethod(method, location) {
    return async (args, callback) => {
      await this._invoke(method, args, location).then((result) => {
        callback(result);
      });
    };
  }
  _defineMethodAsync(method, location) {
    return async (args) => {
      const result = await this._invoke(method, args, location);
      return result;
    };
  }
  async _invoke(method, args, location) {
    const {
      name,
      input
      // output,
      // style
    } = method;
    const defs = this.wsdl.definitions;
    const ns = defs.$targetNamespace;
    let message = "";
    let xml = null;
    const headers = {
      SOAPAction: this.SOAPAction ? this.SOAPAction(ns, name) : `${ns.lastIndexOf("/") !== ns.length - 1 ? `${ns}/` : ns}${name}`,
      "Content-Type": "text/xml; charset=utf-8"
    };
    const exHeaders = args.Headers;
    const options = {};
    const alias = findKey(defs.xmlns, ns);
    delete args.Headers;
    if (this.security?.addHeaders) {
      this.security.addHeaders(headers);
    }
    if (this.security?.addOptions) {
      this.security.addOptions(options);
    }
    const securityHeader = this.security ? this.wsdl.objectToXML(this.security, null, alias, void 0) : "";
    const customHeader = exHeaders ? this.wsdl.complexObjectToXML(exHeaders, null) : "";
    message = this.wsdl.objectToDocumentXML(
      input.$name,
      args,
      input.targetNSAlias,
      input.targetNamespace
    );
    if (message.includes("Execute") && message.includes("Command") && message.includes("Statement") && message.includes("Minimal_Cubes_With_KPI_all_Properties")) {
      const statementMatch = message.match(
        /<[^:]*:?Statement>([\s\S]*?)<\/[^:]*:?Statement>/
      );
      const catalogMatch = message.match(
        /<[^:]*:?Catalog>([\s\S]*?)<\/[^:]*:?Catalog>/
      );
      const formatMatch = message.match(
        /<[^:]*:?Format>([\s\S]*?)<\/[^:]*:?Format>/
      );
      const statement = statementMatch ? statementMatch[1].trim() : "";
      const catalog = catalogMatch ? catalogMatch[1].trim() : "";
      const format = formatMatch ? formatMatch[1].trim() : "Tabular";
      message = `
  <Execute xmlns="urn:schemas-microsoft-com:xml-analysis">
    <Command>
      <Statement>
        ${statement}
      </Statement>
    </Command>
    <Properties>
      <PropertyList>
        <Format>${format}</Format>
        <Catalog>${catalog}</Catalog>
      </PropertyList>
    </Properties>
  </Execute>`.trim();
    }
    xml = // Encoding is not supported
    // `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" ${encoding} ${this.wsdl.xmlnsInEnvelope}'>'` +
    `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" ${this.wsdl.xmlnsInEnvelope}><soap:Header>${securityHeader}${customHeader}</soap:Header><soap:Body>` + message + "</soap:Body></soap:Envelope>";
    if (xml.includes("GeoJson") || xml.includes("SELECT")) {
      xml = xml.replaceAll("ana:", "");
    }
    xml = xml.replace("<Execute>", '<Execute xmlns="urn:schemas-microsoft-com:xml-analysis">');
    const responce = await request(location, xml, headers);
    const textContent = await responce.text();
    const parsedResult = this.wsdl.xmlToObject(textContent);
    return parsedResult;
  }
}
let iRet, theatts, splits, nameobject, that, theattsandnamespace, strEnt;
let XMLP = function(strXML) {
  strXML = SAXStrings.replace(strXML, null, null, "\r\n", "\n");
  strXML = SAXStrings.replace(strXML, null, null, "\r", "\n");
  this.m_xml = strXML;
  this.m_iP = 0;
  this.m_iState = XMLP._STATE_PROLOG;
  this.m_stack = new Stack();
  this._clearAttributes();
  this.m_pause = false;
  this.m_preInterruptIState = XMLP._STATE_PROLOG;
  this.m_namespaceList = new Array();
  this.m_chunkTransitionContinuation = null;
};
XMLP._NONE = 0;
XMLP._ELM_B = 1;
XMLP._ELM_E = 2;
XMLP._ELM_EMP = 3;
XMLP._ATT = 4;
XMLP._TEXT = 5;
XMLP._ENTITY = 6;
XMLP._PI = 7;
XMLP._CDATA = 8;
XMLP._COMMENT = 9;
XMLP._DTD = 10;
XMLP._ERROR = 11;
XMLP._INTERRUPT = 12;
XMLP._CONT_XML = 0;
XMLP._CONT_ALT = 1;
XMLP._ATT_NAME = 0;
XMLP._ATT_VAL = 1;
XMLP._STATE_PROLOG = 1;
XMLP._STATE_DOCUMENT = 2;
XMLP._STATE_MISC = 3;
XMLP._errs = new Array();
XMLP.ERR_CLOSE_PI = 0;
XMLP.ERR_CLOSE_DTD = 1;
XMLP.ERR_CLOSE_COMMENT = 2;
XMLP.ERR_CLOSE_CDATA = 3;
XMLP.ERR_CLOSE_ELM = 4;
XMLP.ERR_CLOSE_ENTITY = 5;
XMLP.ERR_PI_TARGET = 6;
XMLP.ERR_ELM_EMPTY = 7;
XMLP.ERR_ELM_NAME = 8;
XMLP.ERR_ELM_LT_NAME = 9;
XMLP.ERR_ATT_VALUES = 10;
XMLP.ERR_ATT_LT_NAME = 11;
XMLP.ERR_ATT_LT_VALUE = 12;
XMLP.ERR_ATT_DUP = 13;
XMLP.ERR_ENTITY_UNKNOWN = 14;
XMLP.ERR_INFINITELOOP = 15;
XMLP.ERR_DOC_STRUCTURE = 16;
XMLP.ERR_ELM_NESTING = 17;
XMLP._errs[XMLP.ERR_CLOSE_PI] = "PI: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_DTD] = "DTD: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_COMMENT] = "Comment: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_CDATA] = "CDATA: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_ELM] = "Element: missing closing sequence";
XMLP._errs[XMLP.ERR_CLOSE_ENTITY] = "Entity: missing closing sequence";
XMLP._errs[XMLP.ERR_PI_TARGET] = "PI: target is required";
XMLP._errs[XMLP.ERR_ELM_EMPTY] = "Element: cannot be both empty and closing";
XMLP._errs[XMLP.ERR_ELM_NAME] = 'Element: name must immediatly follow "<"';
XMLP._errs[XMLP.ERR_ELM_LT_NAME] = 'Element: "<" not allowed in element names';
XMLP._errs[XMLP.ERR_ATT_VALUES] = "Attribute: values are required and must be in quotes";
XMLP._errs[XMLP.ERR_ATT_LT_NAME] = 'Element: "<" not allowed in attribute names';
XMLP._errs[XMLP.ERR_ATT_LT_VALUE] = 'Attribute: "<" not allowed in attribute values';
XMLP._errs[XMLP.ERR_ATT_DUP] = "Attribute: duplicate attributes not allowed";
XMLP._errs[XMLP.ERR_ENTITY_UNKNOWN] = "Entity: unknown entity";
XMLP._errs[XMLP.ERR_INFINITELOOP] = "Infininte loop";
XMLP._errs[XMLP.ERR_DOC_STRUCTURE] = "Document: only comments, processing instructions, or whitespace allowed outside of document element";
XMLP._errs[XMLP.ERR_ELM_NESTING] = "Element: must be nested correctly";
XMLP.prototype.continueParsing = function(strXML) {
  if (this.m_chunkTransitionContinuation) {
    strXML = this.m_chunkTransitionContinuation + strXML;
  }
  strXML = SAXStrings.replace(strXML, null, null, "\r\n", "\n");
  strXML = SAXStrings.replace(strXML, null, null, "\r", "\n");
  this.m_xml = strXML;
  this.m_iP = 0;
  this.m_iState = XMLP._STATE_DOCUMENT;
  this.m_pause = false;
  this.m_preInterruptIState = XMLP._STATE_PROLOG;
  this.m_chunkTransitionContinuation = null;
};
XMLP.prototype._addAttribute = function(name, value) {
  this.m_atts[this.m_atts.length] = new Array(name, value);
};
XMLP.prototype._checkStructure = function(iEvent) {
  if (XMLP._STATE_PROLOG == this.m_iState) {
    if (XMLP._TEXT == iEvent || XMLP._ENTITY == iEvent) {
      if (SAXStrings.indexOfNonWhitespace(
        this.getContent(),
        this.getContentBegin(),
        this.getContentEnd()
      ) != -1) {
        return this._setErr(XMLP.ERR_DOC_STRUCTURE);
      }
    }
    if (XMLP._ELM_B == iEvent || XMLP._ELM_EMP == iEvent) {
      this.m_iState = XMLP._STATE_DOCUMENT;
    }
  }
  if (XMLP._STATE_DOCUMENT == this.m_iState) {
    if (XMLP._ELM_B == iEvent || XMLP._ELM_EMP == iEvent) {
      this.m_stack.push(this.getName());
    }
    if (XMLP._ELM_E == iEvent || XMLP._ELM_EMP == iEvent) {
      let strTop = this.m_stack.pop();
      if (strTop == null || strTop != this.getName()) {
        return this._setErr(XMLP.ERR_ELM_NESTING);
      }
    }
    if (this.m_stack.count() == 0) {
      this.m_iState = XMLP._STATE_MISC;
      return iEvent;
    }
  }
  if (XMLP._STATE_MISC == this.m_iState) {
    if (XMLP._ELM_B == iEvent || XMLP._ELM_E == iEvent || XMLP._ELM_EMP == iEvent || XMLP.EVT_DTD == iEvent) {
      return this._setErr(XMLP.ERR_DOC_STRUCTURE);
    }
    if (XMLP._TEXT == iEvent || XMLP._ENTITY == iEvent) {
      if (SAXStrings.indexOfNonWhitespace(
        this.getContent(),
        this.getContentBegin(),
        this.getContentEnd()
      ) != -1) {
        return this._setErr(XMLP.ERR_DOC_STRUCTURE);
      }
    }
  }
  return iEvent;
};
XMLP.prototype._clearAttributes = function() {
  this.m_atts = new Array();
};
XMLP.prototype._findAttributeIndex = function(name) {
  for (let i = 0; i < this.m_atts.length; i++) {
    if (this.m_atts[i][XMLP._ATT_NAME] == name) {
      return i;
    }
  }
  return -1;
};
XMLP.prototype.getAttributeCount = function() {
  return this.m_atts ? this.m_atts.length : 0;
};
XMLP.prototype.getAttributeName = function(index) {
  return index < 0 || index >= this.m_atts.length ? null : this.m_atts[index][XMLP._ATT_NAME];
};
XMLP.prototype.getAttributeValue = function(index) {
  return index < 0 || index >= this.m_atts.length ? null : __unescapeString(this.m_atts[index][XMLP._ATT_VAL]);
};
XMLP.prototype.getAttributeValueByName = function(name) {
  return this.getAttributeValue(this._findAttributeIndex(name));
};
XMLP.prototype.getColumnNumber = function() {
  return SAXStrings.getColumnNumber(this.m_xml, this.m_iP);
};
XMLP.prototype.getContent = function() {
  return this.m_cSrc == XMLP._CONT_XML ? this.m_xml : this.m_cAlt;
};
XMLP.prototype.getContentBegin = function() {
  return this.m_cB;
};
XMLP.prototype.getContentEnd = function() {
  return this.m_cE;
};
XMLP.prototype.getLineNumber = function() {
  return SAXStrings.getLineNumber(this.m_xml, this.m_iP);
};
XMLP.prototype.getName = function() {
  return this.m_name;
};
XMLP.prototype.pause = function() {
  this.m_pause = true;
};
XMLP.prototype.resume = function() {
  this.m_pause = false;
  this.m_iState = this.m_preInterruptIState;
};
XMLP.prototype.next = function() {
  if (!this.m_pause) {
    return this._checkStructure(this._parse());
  } else {
    this.m_preInterruptIState = this.m_iState;
    return XMLP._INTERRUPT;
  }
};
XMLP.prototype._parse = function() {
  if (this.m_iP == this.m_xml.length) {
    return XMLP._NONE;
  }
  function _indexOf(needle, haystack, start) {
    for (let i = 0; i < needle.length; i++) {
      if (needle.charAt(i) != haystack.charAt(start + i)) return -1;
    }
    return start;
  }
  let fc = this.m_xml.charAt(this.m_iP);
  if (fc !== "<" && fc !== "&") {
    return this._parseText(this.m_iP);
  } else if (this.m_iP == _indexOf("<?", this.m_xml, this.m_iP)) {
    return this._parsePI(this.m_iP + 2);
  } else if (this.m_iP == _indexOf("<!DOCTYPE", this.m_xml, this.m_iP)) {
    return this._parseDTD(this.m_iP + 9);
  } else if (this.m_iP == _indexOf("<!--", this.m_xml, this.m_iP)) {
    return this._parseComment(this.m_iP + 4);
  } else if (this.m_iP == _indexOf("<![CDATA[", this.m_xml, this.m_iP)) {
    return this._parseCDATA(this.m_iP + 9);
  } else if (this.m_iP == _indexOf("<", this.m_xml, this.m_iP)) {
    return this._parseElement(this.m_iP + 1);
  } else if (this.m_iP == _indexOf("&", this.m_xml, this.m_iP)) {
    return this._parseEntity(this.m_iP + 1);
  } else {
    return this._parseText(this.m_iP);
  }
};
XMLP.prototype._parsePrefixAndElementName = function(elementlabel) {
  splits = elementlabel.split(":", 2);
  return {
    prefix: splits.length === 1 ? "" : splits[0],
    name: splits.length === 1 ? elementlabel : splits[1]
  };
};
XMLP.prototype._parseNamespacesAndAtts = function(atts) {
  that = this;
  let newnamespaces = [];
  let filteredatts = [];
  atts.map(function(item) {
    if (item[0].slice(0, 5) === "xmlns") {
      newnamespaces.push({
        prefix: item[0].slice(6),
        uri: item[1],
        scopetag: that.m_name
      });
    } else {
      filteredatts.push(item);
    }
    return "not used";
  });
  this.m_namespaceList = this.m_namespaceList.concat(newnamespaces);
  return [
    filteredatts,
    newnamespaces.map(function(item) {
      return [item.prefix, item.uri];
    })
  ];
};
XMLP.prototype._getContextualNamespace = function(prefix) {
  if (prefix !== "") {
    for (let item in this.m_namespaceList) {
      const itemProp = this.m_namespaceList[item];
      if (itemProp.prefix === prefix) {
        return itemProp.uri;
      }
    }
  }
  for (let i = this.m_namespaceList.length - 1; i >= 0; i--) {
    const item = this.m_namespaceList[i];
    if (item.prefix === "") {
      return item.uri;
    }
  }
  return "";
};
XMLP.prototype._removeExpiredNamesapces = function(closingtagname) {
  const keeps = [];
  this.m_namespaceList.map(function(item) {
    if (item.scopetag !== closingtagname) {
      keeps.push(item);
    }
  });
  this.m_namespaceList = keeps;
};
XMLP.prototype._parseAttribute = function(iB, iE) {
  let iNB, iNE, iEq, iVB, iVE;
  let cQuote, strN, strV;
  this.m_cAlt = "";
  iNB = SAXStrings.indexOfNonWhitespace(this.m_xml, iB, iE);
  if (iNB == -1 || iNB >= iE) {
    return iNB;
  }
  iEq = this.m_xml.indexOf("=", iNB);
  if (iEq == -1 || iEq > iE) {
    return this._setErr(XMLP.ERR_ATT_VALUES);
  }
  iNE = SAXStrings.lastIndexOfNonWhitespace(this.m_xml, iNB, iEq);
  iVB = SAXStrings.indexOfNonWhitespace(this.m_xml, iEq + 1, iE);
  if (iVB == -1 || iVB > iE) {
    return this._setErr(XMLP.ERR_ATT_VALUES);
  }
  cQuote = this.m_xml.charAt(iVB);
  if (SAXStrings.QUOTES.indexOf(cQuote) == -1) {
    return this._setErr(XMLP.ERR_ATT_VALUES);
  }
  iVE = this.m_xml.indexOf(cQuote, iVB + 1);
  if (iVE == -1 || iVE > iE) {
    return this._setErr(XMLP.ERR_ATT_VALUES);
  }
  strN = this.m_xml.substring(iNB, iNE + 1);
  strV = this.m_xml.substring(iVB + 1, iVE);
  if (strN.indexOf("<") != -1) {
    return this._setErr(XMLP.ERR_ATT_LT_NAME);
  }
  if (strV.indexOf("<") != -1) {
    return this._setErr(XMLP.ERR_ATT_LT_VALUE);
  }
  strV = SAXStrings.replace(strV, null, null, "\n", " ");
  strV = SAXStrings.replace(strV, null, null, "	", " ");
  iRet = this._replaceEntities(strV);
  if (iRet == XMLP._ERROR) {
    return iRet;
  }
  strV = this.m_cAlt;
  if (this._findAttributeIndex(strN) == -1) {
    this._addAttribute(strN, strV);
  } else {
    return this._setErr(XMLP.ERR_ATT_DUP);
  }
  this.m_iP = iVE + 2;
  return XMLP._ATT;
};
XMLP.prototype._parseCDATA = function(iB) {
  const iE = this.m_xml.indexOf("]]>", iB);
  if (iE == -1) {
    this.m_chunkTransitionContinuation = this.m_xml.slice(iB - 9);
    return XMLP._INTERRUPT;
  }
  this._setContent(XMLP._CONT_XML, iB, iE);
  this.m_iP = iE + 3;
  return XMLP._CDATA;
};
XMLP.prototype._parseComment = function(iB) {
  const iE = this.m_xml.indexOf("-->", iB);
  if (iE == -1) {
    this.m_chunkTransitionContinuation = this.m_xml.slice(iB - 4);
    return XMLP._INTERRUPT;
  }
  this._setContent(XMLP._CONT_XML, iB, iE);
  this.m_iP = iE + 3;
  return XMLP._COMMENT;
};
XMLP.prototype._parseDTD = function(iB) {
  let iE, strClose, iInt, iLast;
  iE = this.m_xml.indexOf(">", iB);
  if (iE == -1) {
    this.m_chunkTransitionContinuation = this.m_xml.slice(iB - 9);
    return XMLP._INTERRUPT;
  }
  iInt = this.m_xml.indexOf("[", iB);
  strClose = iInt != -1 && iInt < iE ? "]>" : ">";
  while (true) {
    if (iE == iLast) {
      return this._setErr(XMLP.ERR_INFINITELOOP);
    }
    iLast = iE;
    iE = this.m_xml.indexOf(strClose, iB);
    if (iE == -1) {
      return this._setErr(XMLP.ERR_CLOSE_DTD);
    }
    if (this.m_xml.substring(iE - 1, iE + 2) != "]]>") {
      break;
    }
  }
  this.m_iP = iE + strClose.length;
  return XMLP._DTD;
};
XMLP.prototype._parseElement = function(iB) {
  let iE, iDE, iNE, iRet2;
  let iType, strN, iLast;
  iDE = iE = this.m_xml.indexOf(">", iB);
  if (iE == -1) {
    this.m_chunkTransitionContinuation = this.m_xml.slice(iB - 1);
    return XMLP._INTERRUPT;
  }
  if (this.m_xml.charAt(iB) == "/") {
    iType = XMLP._ELM_E;
    iB++;
  } else {
    iType = XMLP._ELM_B;
  }
  if (this.m_xml.charAt(iE - 1) == "/") {
    if (iType == XMLP._ELM_E) {
      return this._setErr(XMLP.ERR_ELM_EMPTY);
    }
    iType = XMLP._ELM_EMP;
    iDE--;
  }
  iDE = SAXStrings.lastIndexOfNonWhitespace(this.m_xml, iB, iDE);
  if (iE - iB != 1) {
    if (SAXStrings.indexOfNonWhitespace(this.m_xml, iB, iDE) != iB) {
      return this._setErr(XMLP.ERR_ELM_NAME);
    }
  }
  this._clearAttributes();
  iNE = SAXStrings.indexOfWhitespace(this.m_xml, iB, iDE);
  if (iNE == -1) {
    iNE = iDE + 1;
  } else {
    this.m_iP = iNE;
    while (this.m_iP < iDE) {
      if (this.m_iP == iLast) return this._setErr(XMLP.ERR_INFINITELOOP);
      iLast = this.m_iP;
      iRet2 = this._parseAttribute(this.m_iP, iDE);
      if (iRet2 == XMLP._ERROR) return iRet2;
    }
  }
  strN = this.m_xml.substring(iB, iNE);
  if (strN.indexOf("<") != -1) {
    return this._setErr(XMLP.ERR_ELM_LT_NAME);
  }
  this.m_name = strN;
  this.m_iP = iE + 1;
  return iType;
};
XMLP.prototype._parseEntity = function(iB) {
  const iE = this.m_xml.indexOf(";", iB);
  if (iE == -1) {
    this.m_chunkTransitionContinuation = this.m_xml.slice(iB - 1);
    return XMLP._INTERRUPT;
  }
  this.m_iP = iE + 1;
  return this._replaceEntity(this.m_xml, iB, iE);
};
XMLP.prototype._parsePI = function(iB) {
  let iE, iTB, iTE, iCB, iCE;
  iE = this.m_xml.indexOf("?>", iB);
  if (iE == -1) {
    this.m_chunkTransitionContinuation = this.m_xml.slice(iB - 2);
    return XMLP._INTERRUPT;
  }
  iTB = SAXStrings.indexOfNonWhitespace(this.m_xml, iB, iE);
  if (iTB == -1) {
    return this._setErr(XMLP.ERR_PI_TARGET);
  }
  iTE = SAXStrings.indexOfWhitespace(this.m_xml, iTB, iE);
  if (iTE == -1) {
    iTE = iE;
  }
  iCB = SAXStrings.indexOfNonWhitespace(this.m_xml, iTE, iE);
  if (iCB == -1) {
    iCB = iE;
  }
  iCE = SAXStrings.lastIndexOfNonWhitespace(this.m_xml, iCB, iE);
  if (iCE == -1) {
    iCE = iE - 1;
  }
  this.m_name = this.m_xml.substring(iTB, iTE);
  this._setContent(XMLP._CONT_XML, iCB, iCE + 1);
  this.m_iP = iE + 2;
  return XMLP._PI;
};
XMLP.prototype._parseText = function(iB) {
  let iE, ch;
  for (iE = iB; iE < this.m_xml.length; ++iE) {
    ch = this.m_xml.charAt(iE);
    if (ch === "<" || ch === "&") {
      break;
    }
  }
  this._setContent(XMLP._CONT_XML, iB, iE);
  this.m_iP = iE;
  return XMLP._TEXT;
};
XMLP.prototype._replaceEntities = function(strD, iB, iE) {
  if (SAXStrings.isEmpty(strD)) return "";
  iB = iB || 0;
  iE = iE || strD.length;
  var iEB, iEE, strRet = "";
  iEB = strD.indexOf("&", iB);
  iEE = iB;
  while (iEB > 0 && iEB < iE) {
    strRet += strD.substring(iEE, iEB);
    iEE = strD.indexOf(";", iEB) + 1;
    if (iEE == 0 || iEE > iE) {
      return this._setErr(XMLP.ERR_CLOSE_ENTITY);
    }
    iRet = this._replaceEntity(strD, iEB + 1, iEE - 1);
    if (iRet == XMLP._ERROR) {
      return iRet;
    }
    strRet += this.m_cAlt;
    iEB = strD.indexOf("&", iEE);
  }
  if (iEE != iE) {
    strRet += strD.substring(iEE, iE);
  }
  this._setContent(XMLP._CONT_ALT, strRet);
  return XMLP._ENTITY;
};
XMLP.prototype._replaceEntity = function(strD, iB, iE) {
  if (SAXStrings.isEmpty(strD)) return -1;
  iB = iB || 0;
  iE = iE || strD.length;
  switch (strD.substring(iB, iE)) {
    case "amp":
      strEnt = "&";
      break;
    case "lt":
      strEnt = "<";
      break;
    case "gt":
      strEnt = ">";
      break;
    case "apos":
      strEnt = "'";
      break;
    case "quot":
      strEnt = '"';
      break;
    case "nbsp":
      strEnt = "";
      break;
    case "cent":
      strEnt = "¢";
      break;
    case "pound":
      strEnt = "£";
      break;
    case "yen":
      strEnt = "¥";
      break;
    case "euro":
      strEnt = "€";
      break;
    case "sect":
      strEnt = "§";
      break;
    case "copy":
      strEnt = "©";
      break;
    case "reg":
      strEnt = "®";
      break;
    default:
      if (strD.charAt(iB) == "#") {
        strEnt = String.fromCharCode(parseInt(strD.substring(iB + 1, iE)));
      } else {
        strEnt = " ";
      }
      break;
  }
  this._setContent(XMLP._CONT_ALT, strEnt);
  return XMLP._ENTITY;
};
XMLP.prototype._setContent = function(iSrc) {
  const args = arguments;
  if (XMLP._CONT_XML == iSrc) {
    this.m_cAlt = null;
    this.m_cB = args[1];
    this.m_cE = args[2];
  } else {
    this.m_cAlt = args[1];
    this.m_cB = 0;
    this.m_cE = args[1].length;
  }
  this.m_cSrc = iSrc;
};
XMLP.prototype._setErr = function(iErr) {
  const strErr = XMLP._errs[iErr];
  this.m_cAlt = strErr;
  this.m_cB = 0;
  this.m_cE = strErr.length;
  this.m_cSrc = XMLP._CONT_ALT;
  return XMLP._ERROR;
};
const SaxParser = function(eventhandlerfactory) {
  const eventhandler = new (function() {
  })();
  const thehandler = new Function();
  thehandler.prototype.onStartDocument = function(funct) {
    eventhandler.onStartDocument = funct;
  };
  thehandler.prototype.onEndDocument = function(funct) {
    eventhandler.onEndDocument = funct;
  };
  thehandler.prototype.onStartElementNS = function(funct) {
    eventhandler.onStartElementNS = funct;
  };
  thehandler.prototype.onEndElementNS = function(funct) {
    eventhandler.onEndElementNS = funct;
  };
  thehandler.prototype.onCharacters = function(funct) {
    eventhandler.onCharacters = funct;
  };
  thehandler.prototype.onCdata = function(funct) {
    eventhandler.onCdata = funct;
  };
  thehandler.prototype.onComment = function(funct) {
    eventhandler.onComment = funct;
  };
  thehandler.prototype.onWarning = function(funct) {
    eventhandler.onWarning = funct;
  };
  thehandler.prototype.onError = function(funct) {
    eventhandler.onError = funct;
  };
  eventhandlerfactory(new thehandler());
  this.m_hndDoc = eventhandler;
  this.m_hndErr = eventhandler;
  this.m_hndLex = eventhandler;
  this.m_interrupted = false;
};
SaxParser.DOC_B = 1;
SaxParser.DOC_E = 2;
SaxParser.ELM_B = 3;
SaxParser.ELM_E = 4;
SaxParser.CHARS = 5;
SaxParser.PI = 6;
SaxParser.CD_B = 7;
SaxParser.CD_E = 8;
SaxParser.CMNT = 9;
SaxParser.DTD_B = 10;
SaxParser.DTD_E = 11;
SaxParser.prototype.parseString = function(strD) {
  const that2 = this;
  let startnew = true;
  if (!that2.m_parser) {
    that2.m_parser = new XMLP(strD);
    startnew = false;
  } else {
    that2.m_parser.continueParsing(strD);
  }
  that2.m_bErr = false;
  if (!that2.m_bErr && !startnew) {
    that2._fireEvent(SaxParser.DOC_B);
  }
  that2._parseLoop();
  if (!that2.m_bErr && !that2.m_interrupted) {
    that2._fireEvent(SaxParser.DOC_E);
  }
  that2.m_xml = null;
  that2.m_iP = 0;
  that2.m_interrupted = false;
};
SaxParser.prototype.pause = function() {
  this.m_parser.pause();
};
SaxParser.prototype.resume = function() {
  this.m_parser.resume();
  this.m_interrupted = false;
  const that2 = this;
  setTimeout(function() {
    that2._parseLoop();
    if (!that2.m_bErr && !that2.m_interrupted) {
      that2._fireEvent(SaxParser.DOC_E);
    }
  }, 0);
};
SaxParser.prototype.setDocumentHandler = function(hnd) {
  this.m_hndDoc = hnd;
};
SaxParser.prototype.setErrorHandler = function(hnd) {
  this.m_hndErr = hnd;
};
SaxParser.prototype.setLexicalHandler = function(hnd) {
  this.m_hndLex = hnd;
};
SaxParser.prototype.getColumnNumber = function() {
  return this.m_parser.getColumnNumber();
};
SaxParser.prototype.getLineNumber = function() {
  return this.m_parser.getLineNumber();
};
SaxParser.prototype.getMessage = function() {
  return this.m_strErrMsg;
};
SaxParser.prototype.getPublicId = function() {
  return null;
};
SaxParser.prototype.getSystemId = function() {
  return null;
};
SaxParser.prototype.getLength = function() {
  return this.m_parser.getAttributeCount();
};
SaxParser.prototype.getName = function(index) {
  return this.m_parser.getAttributeName(index);
};
SaxParser.prototype.getValue = function(index) {
  return this.m_parser.getAttributeValue(index);
};
SaxParser.prototype.getValueByName = function(name) {
  return this.m_parser.getAttributeValueByName(name);
};
SaxParser.prototype._fireError = function(strMsg) {
  this.m_strErrMsg = strMsg;
  this.m_bErr = true;
  if (this.m_hndErr?.onError) {
    this.m_hndErr.onError(this.m_strErrMsg);
  }
};
SaxParser.prototype._fireEvent = function(iEvt) {
  let hnd, func, args = arguments, iLen = args.length - 1;
  if (this.m_bErr) return;
  if (SaxParser.DOC_B == iEvt) {
    func = "onStartDocument";
    hnd = this.m_hndDoc;
  } else if (SaxParser.DOC_E == iEvt) {
    func = "onEndDocument";
    hnd = this.m_hndDoc;
  } else if (SaxParser.ELM_B == iEvt) {
    func = "onStartElementNS";
    hnd = this.m_hndDoc;
  } else if (SaxParser.ELM_E == iEvt) {
    func = "onEndElementNS";
    hnd = this.m_hndDoc;
  } else if (SaxParser.CHARS == iEvt) {
    func = "onCharacters";
    hnd = this.m_hndDoc;
  } else if (SaxParser.PI == iEvt) {
    func = "processingInstruction";
    hnd = this.m_hndDoc;
  } else if (SaxParser.CD_B == iEvt) {
    func = "onCdata";
    hnd = this.m_hndLex;
  } else if (SaxParser.CD_E == iEvt) {
    func = "onEndCDATA";
    hnd = this.m_hndLex;
  } else if (SaxParser.CMNT == iEvt) {
    func = "onComment";
    hnd = this.m_hndLex;
  }
  if (hnd?.[func]) {
    if (0 == iLen) {
      hnd[func]();
    } else if (1 == iLen) {
      hnd[func](args[1]);
    } else if (2 == iLen) {
      hnd[func](args[1], args[2]);
    } else if (3 == iLen) {
      hnd[func](args[1], args[2], args[3]);
    } else if (4 == iLen) {
      hnd[func](args[1], args[2], args[3], args[4]);
    } else if (5 == iLen) {
      hnd[func](args[1], args[2], args[3], args[4], args[5]);
    } else if (6 == iLen) {
      hnd[func](args[1], args[2], args[3], args[4], args[5], args[6]);
    }
  }
};
SaxParser.prototype._parseLoop = function() {
  let iEvent, parser;
  parser = this.m_parser;
  while (!this.m_bErr) {
    iEvent = parser.next();
    if (iEvent == XMLP._ELM_B) {
      theatts = this.m_parser.m_atts;
      nameobject = parser._parsePrefixAndElementName(parser.getName());
      theattsandnamespace = parser._parseNamespacesAndAtts(theatts);
      const theuri = parser._getContextualNamespace(nameobject.prefix);
      this._fireEvent(
        SaxParser.ELM_B,
        nameobject.name,
        theattsandnamespace[0],
        nameobject.prefix === "" ? null : nameobject.prefix,
        theuri === "" ? null : theuri,
        theattsandnamespace[1]
      );
    } else if (iEvent == XMLP._ELM_E) {
      nameobject = parser._parsePrefixAndElementName(parser.getName());
      const theuri = parser._getContextualNamespace(nameobject.prefix);
      parser._removeExpiredNamesapces(parser.getName());
      this._fireEvent(
        SaxParser.ELM_E,
        nameobject.name,
        nameobject.prefix === "" ? null : nameobject.prefix,
        theuri === "" ? null : theuri
      );
    } else if (iEvent == XMLP._ELM_EMP) {
      theatts = this.m_parser.m_atts;
      nameobject = parser._parsePrefixAndElementName(parser.getName());
      theattsandnamespace = parser._parseNamespacesAndAtts(theatts);
      const theuri = parser._getContextualNamespace(nameobject.prefix);
      this._fireEvent(
        SaxParser.ELM_B,
        nameobject.name,
        theattsandnamespace[0],
        nameobject.prefix === "" ? null : nameobject.prefix,
        theuri === "" ? null : theuri,
        theattsandnamespace[1],
        true
      );
      parser._removeExpiredNamesapces(parser.getName());
      this._fireEvent(
        SaxParser.ELM_E,
        nameobject.name,
        nameobject.prefix === "" ? null : nameobject.prefix,
        theuri === "" ? null : theuri,
        true
      );
    } else if (iEvent == XMLP._TEXT) {
      this._fireEvent(
        SaxParser.CHARS,
        parser.getContent().slice(parser.getContentBegin(), parser.getContentEnd())
      );
    } else if (iEvent == XMLP._ENTITY) {
      this._fireEvent(
        SaxParser.CHARS,
        parser.getContent(),
        parser.getContentBegin(),
        parser.getContentEnd() - parser.getContentBegin()
      );
    } else if (iEvent == XMLP._PI) {
      this._fireEvent(
        SaxParser.PI,
        parser.getName(),
        parser.getContent().substring(parser.getContentBegin(), parser.getContentEnd())
      );
    } else if (iEvent == XMLP._CDATA) {
      this._fireEvent(
        SaxParser.CD_B,
        parser.getContent().slice(parser.getContentBegin(), parser.getContentEnd())
      );
    } else if (iEvent == XMLP._COMMENT) {
      this._fireEvent(
        SaxParser.CMNT,
        parser.getContent().slice(parser.getContentBegin(), parser.getContentEnd())
      );
    } else if (iEvent == XMLP._DTD) {
      return;
    } else if (iEvent == XMLP._ERROR) {
      this._fireError(parser.getContent());
    } else if (iEvent == XMLP._INTERRUPT) {
      this.m_interrupted = true;
      return;
    } else if (iEvent == XMLP._NONE) {
      return;
    }
  }
};
const SAXStrings = function() {
};
SAXStrings.WHITESPACE = " 	\n\r";
SAXStrings.QUOTES = `"'`;
SAXStrings.getColumnNumber = function(strD, iP) {
  if (SAXStrings.isEmpty(strD)) {
    return -1;
  }
  iP = iP || strD.length;
  const arrD = strD.substring(0, iP).split("\n");
  arrD.length--;
  const iLinePos = arrD.join("\n").length;
  return iP - iLinePos;
};
SAXStrings.getLineNumber = function(strD, iP) {
  if (SAXStrings.isEmpty(strD)) {
    return -1;
  }
  iP = iP || strD.length;
  return strD.substring(0, iP).split("\n").length;
};
SAXStrings.indexOfNonWhitespace = function(strD, iB, iE) {
  if (SAXStrings.isEmpty(strD)) {
    return -1;
  }
  iB = iB || 0;
  iE = iE || strD.length;
  for (let i = iB; i < iE; i++) {
    if (SAXStrings.WHITESPACE.indexOf(strD.charAt(i)) == -1) {
      return i;
    }
  }
  return -1;
};
SAXStrings.indexOfWhitespace = function(strD, iB, iE) {
  if (SAXStrings.isEmpty(strD)) {
    return -1;
  }
  iB = iB || 0;
  iE = iE || strD.length;
  for (var i = iB; i < iE; i++) {
    if (SAXStrings.WHITESPACE.indexOf(strD.charAt(i)) != -1) {
      return i;
    }
  }
  return -1;
};
SAXStrings.isEmpty = function(strD) {
  return strD == null || strD.length == 0;
};
SAXStrings.lastIndexOfNonWhitespace = function(strD, iB, iE) {
  if (SAXStrings.isEmpty(strD)) {
    return -1;
  }
  iB = iB || 0;
  iE = iE || strD.length;
  for (var i = iE - 1; i >= iB; i--) {
    if (SAXStrings.WHITESPACE.indexOf(strD.charAt(i)) == -1) {
      return i;
    }
  }
  return -1;
};
SAXStrings.replace = function(strD, iB, iE, strF, strR) {
  if (SAXStrings.isEmpty(strD)) {
    return "";
  }
  iB = iB || 0;
  iE = iE || strD.length;
  return strD.toString().substring(iB, iE).split(strF).join(strR);
};
const Stack = function() {
  this.m_arr = new Array();
};
Stack.prototype.clear = function() {
  this.m_arr = new Array();
};
Stack.prototype.count = function() {
  return this.m_arr.length;
};
Stack.prototype.destroy = function() {
  this.m_arr = null;
};
Stack.prototype.peek = function() {
  if (this.m_arr.length == 0) {
    return null;
  }
  return this.m_arr[this.m_arr.length - 1];
};
Stack.prototype.pop = function() {
  if (this.m_arr.length == 0) {
    return null;
  }
  const o = this.m_arr[this.m_arr.length - 1];
  this.m_arr.length--;
  return o;
};
Stack.prototype.push = function(o) {
  this.m_arr[this.m_arr.length] = o;
};
function __unescapeString(str) {
  const escLtRegEx = /&lt;/g;
  const escGtRegEx = /&gt;/g;
  const quotRegEx = /&quot;/g;
  const aposRegEx = /&apos;/g;
  str = str.replace(escLtRegEx, "<");
  str = str.replace(escGtRegEx, ">");
  str = str.replace(quotRegEx, '"');
  str = str.replace(aposRegEx, "'");
  str = str.replace(/&amp;/g, "&");
  return str;
}
const xmlParser = { SaxParser };
const XmlaWsdl = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<wsdl:definitions\n  xmlns="urn:daanse-eclipse-org:xmla-ws"\n  xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"\n  xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/"\n  xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  xmlns:ana="urn:schemas-microsoft-com:xml-analysis"\n  xmlns:ext="http://schemas.microsoft.com/analysisservices/2003/ext"\n  xmlns:msxmla="http://schemas.microsoft.com/analysisservices/2003/xmla"\n  xmlns:eng="http://schemas.microsoft.com/analysisservices/2003/engine"\n  xmlns:eng2="http://schemas.microsoft.com/analysisservices/2003/engine/2"\n  xmlns:eng2_2="http://schemas.microsoft.com/analysisservices/2003/engine/2/2"\n  xmlns:eng100="http://schemas.microsoft.com/analysisservices/2008/engine/100"\n  xmlns:eng100_100="http://schemas.microsoft.com/analysisservices/2008/engine/100/100"\n  xmlns:eng200="http://schemas.microsoft.com/analysisservices/2010/engine/200"\n  xmlns:eng200_200="http://schemas.microsoft.com/analysisservices/2010/engine/200/200"\n  xmlns:eng300="http://schemas.microsoft.com/analysisservices/2011/engine/300"\n  xmlns:eng300_300="http://schemas.microsoft.com/analysisservices/2011/engine/300/300"\n  xmlns:eng400="http://schemas.microsoft.com/analysisservices/2012/engine/400"\n  xmlns:eng600="http://schemas.microsoft.com/analysisservices/2013/engine/600"\n  xmlns:eng800="http://schemas.microsoft.com/analysisservices/2013/engine/800"\n  xmlns:ana-ds="urn:schemas-microsoft-com:xml-analysis:mddataset"\n  xmlns:ana-e="urn:schemas-microsoft-com:xml-analysis:empty"\n  xmlns:ana-m="http://schemas.microsoft.com/analysisservices/2003/xmla-multipleresults"\n  xmlns:ana-rs="urn:schemas-microsoft-com:xml-analysis:rowset"\n  xmlns:ana-x="urn:schemas-microsoft-com:xml-analysis:exception"\n  targetNamespace="urn:daanse-eclipse-org:xmla-ws"\n  name="SQLServerAnalysisServicesProtocol">\n  <wsdl:types>\n    <xsd:schema>\n      <xsd:import\n        namespace="http://schemas.microsoft.com/analysisservices/2003/xmla"\n        schemaLocation="msxmla.xsd" />\n    </xsd:schema>\n\n    <xsd:schema>\n      <xsd:import\n        namespace="http://schemas.microsoft.com/analysisservices/2003/ext"\n        schemaLocation="ext.xsd" />\n    </xsd:schema>\n\n    <xsd:schema>\n      <xsd:import\n        namespace="urn:schemas-microsoft-com:xml-analysis"\n        schemaLocation="xmla.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="urn:schemas-microsoft-com:xml-analysis:mddataset"\n        schemaLocation="xmla-ds.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="urn:schemas-microsoft-com:xml-analysis:rowset"\n        schemaLocation="xmla-rs.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="urn:schemas-microsoft-com:xml-analysis:empty"\n        schemaLocation="xmla-e.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n\n      <xsd:import\n        namespace="http://schemas.microsoft.com/analysisservices/2003/xmla-multipleresults"\n        schemaLocation="xmla-m.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="urn:schemas-microsoft-com:xml-analysis:exception"\n        schemaLocation="xmla-x.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="http://schemas.microsoft.com/analysisservices/2003/engine"\n        schemaLocation="eng.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="http://schemas.microsoft.com/analysisservices/2003/engine/2"\n        schemaLocation="eng2.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="http://schemas.microsoft.com/analysisservices/2003/engine/2/2"\n        schemaLocation="eng2_2.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="http://schemas.microsoft.com/analysisservices/2008/engine/100"\n        schemaLocation="eng100.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="http://schemas.microsoft.com/analysisservices/2008/engine/100/100"\n        schemaLocation="eng100_100.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="http://schemas.microsoft.com/analysisservices/2010/engine/200"\n        schemaLocation="eng200.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="http://schemas.microsoft.com/analysisservices/2010/engine/200/200"\n        schemaLocation="eng200_200.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="http://schemas.microsoft.com/analysisservices/2011/engine/300"\n        schemaLocation="eng300.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="http://schemas.microsoft.com/analysisservices/2011/engine/300/300"\n        schemaLocation="eng300_300.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="http://schemas.microsoft.com/analysisservices/2012/engine/400"\n        schemaLocation="eng400.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="http://schemas.microsoft.com/analysisservices/2013/engine/600"\n        schemaLocation="eng600.xsd" />\n    </xsd:schema>\n    <xsd:schema>\n      <xsd:import\n        namespace="http://schemas.microsoft.com/analysisservices/2013/engine/800"\n        schemaLocation="eng800.xsd" />\n    </xsd:schema>\n  </wsdl:types>\n\n  <wsdl:message name="AuthenticateSoapIn">\n    <wsdl:part name="parameters" element="ext:Authenticate" />\n  </wsdl:message>\n  <wsdl:message name="AuthenticateSoapOut">\n    <wsdl:part name="parameters"\n      element="ext:AuthenticateResponse" />\n  </wsdl:message>\n\n  <wsdl:message name="DiscoverSoapIn">\n    <wsdl:part name="parameters" element="ana:Discover" />\n    <wsdl:part name="Session" element="ana:Session" />\n    <wsdl:part name="BeginSession" element="ana:BeginSession" />\n    <wsdl:part name="EndSession" element="ana:EndSession" />\n  </wsdl:message>\n  <wsdl:message name="DiscoverSoapOut">\n    <wsdl:part name="parameters" element="ana:DiscoverResponse" />\n    <wsdl:part name="Session" element="ana:Session" />\n  </wsdl:message>\n  <wsdl:message name="ExecuteSoapIn">\n    <wsdl:part name="parameters" element="ana:Execute" />\n    <wsdl:part name="Session" element="ana:Session" />\n    <wsdl:part name="BeginSession" element="ana:BeginSession" />\n    <wsdl:part name="EndSession" element="ana:EndSession" />\n  </wsdl:message>\n  <wsdl:message name="ExecuteSoapOut">\n    <wsdl:part name="parameters" element="ana:ExecuteResponse" />\n    <wsdl:part name="Session" element="ana:Session" />\n  </wsdl:message>\n\n  <wsdl:portType name="MsXmlAnalysisSoapPortType">\n    <wsdl:operation name="Authenticate">\n      <wsdl:input message="AuthenticateSoapIn" />\n      <wsdl:output message="AuthenticateSoapOut" />\n    </wsdl:operation>\n    <wsdl:operation name="Discover">\n      <wsdl:input message="DiscoverSoapIn" name="DiscoverSoapIn" />\n      <wsdl:output message="DiscoverSoapOut" />\n    </wsdl:operation>\n    <wsdl:operation name="Execute">\n      <wsdl:input message="ExecuteSoapIn" />\n      <wsdl:output message="ExecuteSoapOut" />\n    </wsdl:operation>\n  </wsdl:portType>\n\n  <wsdl:binding name="MsXmlAnalysisSoapBinding"\n    type="MsXmlAnalysisSoapPortType">\n    <!-- -->\n    <soap:binding\n      transport="http://schemas.xmlsoap.org/soap/http" style="document" />\n\n    <wsdl:operation name="Authenticate">\n      <soap:operation style="document" />\n      <wsdl:input>\n        <soap:body parts="parameters" use="literal" />\n      </wsdl:input>\n      <wsdl:output>\n        <soap:body parts="parameters" use="literal" />\n      </wsdl:output>\n    </wsdl:operation>\n\n    <wsdl:operation name="Discover">\n      <soap:operation\n        soapAction="urn:schemas-microsoft-com:xml-analysis:Discover"\n        style="document" />\n      <wsdl:input>\n        <soap:body parts="parameters" use="literal" />\n        <soap:header message="DiscoverSoapIn" part="Session"\n          use="literal" />\n        <soap:header message="DiscoverSoapIn"\n          part="BeginSession" use="literal" />\n        <soap:header message="DiscoverSoapIn" part="EndSession"\n          use="literal" />\n      </wsdl:input>\n      <wsdl:output>\n        <soap:body parts="parameters"\n          use="literal" />\n        <soap:header message="DiscoverSoapOut" part="Session"\n          use="literal" />\n      </wsdl:output>\n    </wsdl:operation>\n    <wsdl:operation name="Execute">\n      <soap:operation\n        soapAction="urn:schemas-microsoft-com:xml-analysis:Execute"\n        style="document" />\n      <wsdl:input>\n        <soap:body parts="parameters" use="literal" />\n        <soap:header message="ExecuteSoapIn" part="Session"\n          use="literal" />\n        <soap:header message="ExecuteSoapIn" part="BeginSession"\n          use="literal" />\n        <soap:header message="ExecuteSoapIn" part="EndSession"\n          use="literal" />\n      </wsdl:input>\n      <wsdl:output>\n        <soap:body parts="parameters" use="literal" />\n        <soap:header message="ExecuteSoapOut" part="Session"\n          use="literal" />\n      </wsdl:output>\n    </wsdl:operation>\n  </wsdl:binding>\n\n  <wsdl:service name="MsXmlAnalysisService">\n    <wsdl:port name="MsXmlAnalysisSoapPort"\n      binding="MsXmlAnalysisSoapBinding">\n      <soap:address location="https://ssemenkoff.dev/emondrian/xmla" />\n    </wsdl:port>\n  </wsdl:service>\n</wsdl:definitions>\n';
const eng_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0"\n  xmlns="http://schemas.microsoft.com/analysisservices/2003/engine"\n  targetNamespace="http://schemas.microsoft.com/analysisservices/2003/engine">\n\n  <xsd:element name="LastSchemaUpdate" type="xsd:dateTime" />\n  <xsd:element name="LastDataUpdate" type="xsd:dateTime" />\n\n  <xsd:complexType name="ImpersonationInfo">\n    <xsd:all>\n      <xsd:element name="ImpersonationMode">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Default" />\n            <xsd:enumeration value="ImpersonateServiceAccount" />\n            <xsd:enumeration value="ImpersonateAnonymous" />\n            <xsd:enumeration value="ImpersonateCurrentUser" />\n            <xsd:enumeration value="ImpersonateAccount" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Account" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Password" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="ImpersonationInfoSecurity"\n        minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="PasswordRemoved" />\n            <xsd:enumeration value="Unchanged" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n</xsd:schema>\n';
const eng2_2_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0"\n  xmlns="http://schemas.microsoft.com/analysisservices/2003/engine/2/2"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  targetNamespace="http://schemas.microsoft.com/analysisservices/2003/engine/2/2">\n</xsd:schema>\n';
const eng2_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0"\n  xmlns="http://schemas.microsoft.com/analysisservices/2003/engine/2"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  targetNamespace="http://schemas.microsoft.com/analysisservices/2003/engine/2">\n\n  <xsd:element name="MemberKeysUnique">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:string">\n        <xsd:enumeration value="NotUnique" />\n        <xsd:enumeration value="Unique" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n</xsd:schema>\n';
const eng100_100_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0"\n  xmlns="http://schemas.microsoft.com/analysisservices/2008/engine/100/100"\n  targetNamespace="http://schemas.microsoft.com/analysisservices/2008/engine/100/100">\n\n  <xsd:element name="DbStorageLocation" type="xsd:string" />\n\n  <xsd:element name="HoldoutMaxPercent" type="xsd:int" />\n  <xsd:element name="HoldoutMaxCases" type="xsd:int" />\n  <xsd:element name="HoldoutSeed" type="xsd:int" />\n  <xsd:element name="HoldoutActualSize" type="xsd:int" />\n\n</xsd:schema>\n';
const eng100_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0"\n  xmlns="http://schemas.microsoft.com/analysisservices/2008/engine/100"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  targetNamespace="http://schemas.microsoft.com/analysisservices/2008/engine/100">\n\n  <xsd:element name="ReadWriteMode">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:string">\n        <xsd:enumeration value="ReadWrite" />\n        <xsd:enumeration value="ReadOnly" />\n        <xsd:enumeration value="ReadOnlyExclusive" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n\n  <xsd:element name="HoldoutMaxPercent" type="xsd:int" />\n  <xsd:element name="HoldoutMaxCases" type="xsd:int" />\n  <xsd:element name="HoldoutSeed" type="xsd:int" />\n  <xsd:element name="HoldoutActualSize" type="xsd:int" />\n\n  <xsd:element name="DbStorageLocation" type="xsd:string" />\n\n</xsd:schema>\n';
const eng200_200_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0"\n  xmlns="http://schemas.microsoft.com/analysisservices/2010/engine/200/200"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  xmlns:ana="urn:schemas-microsoft-com:xml-analysis"\n  targetNamespace="http://schemas.microsoft.com/analysisservices/2010/engine/200/200">\n\n  <xsd:import\n    namespace="urn:schemas-microsoft-com:xml-analysis"\n    schemaLocation="xmla.xsd" />\n\n\n  <xsd:complexType name="RowNumberBinding">\n    <xsd:complexContent>\n      <xsd:extension base="ana:Binding" />\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="ExpressionBinding">\n    <xsd:complexContent>\n      <xsd:extension base="ana:Binding">\n        <xsd:all>\n          <xsd:element name="Expression" type="xsd:string" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:element name="StorageEngineUsed">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:string">\n        <xsd:enumeration value="Traditional" />\n        <xsd:enumeration value="InMemory" />\n        <xsd:enumeration value="Mixed" />\n        <xsd:enumeration value="TabularMetadata" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n  <xsd:element name="ImagePath" type="xsd:string" />\n  <xsd:element name="ImageUrl" type="xsd:string" />\n  <xsd:element name="ImageUniqueID" type="xsd:string" />\n  <xsd:element name="ImageVersion" type="xsd:string" />\n  <xsd:element name="Token" type="xsd:string" />\n\n  <xsd:element name="ProcessingRecommendation">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:string">\n        <xsd:enumeration value="None" />\n        <xsd:enumeration value="Stale" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n\n  <xsd:element name="ProcessingState">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:string">\n        <xsd:enumeration value="Processed" />\n        <xsd:enumeration value="Unprocessed" />\n        <xsd:enumeration value="InvalidExpression" />\n        <xsd:enumeration value="CalculationError" />\n        <xsd:enumeration value="DependencyError" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n\n  <xsd:element name="ShareDimensionStorage">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:string">\n        <xsd:enumeration value="Distinct" />\n        <xsd:enumeration value="Shared" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n\n</xsd:schema>\n';
const eng200_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0"\n  xmlns="http://schemas.microsoft.com/analysisservices/2010/engine/200"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  targetNamespace="http://schemas.microsoft.com/analysisservices/2010/engine/200">\n\n  <xsd:element name="WarningColumn">\n    <xsd:complexType>\n      <xsd:all>\n        <xsd:element name="Dimension" type="xsd:string" />\n        <xsd:element name="Attribute" type="xsd:string" />\n      </xsd:all>\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:element name="WarningMeasure">\n    <xsd:complexType>\n      <xsd:all>\n        <xsd:element name="Cube" type="xsd:string" />\n        <xsd:element name="MeasureGroup" type="xsd:string" />\n        <xsd:element name="MeasureName" type="xsd:string" />\n      </xsd:all>\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:complexType name="WarningLocationObject">\n    <xsd:choice>\n      <xsd:element ref="WarningColumn" />\n      <xsd:element ref="WarningMeasure" />\n    </xsd:choice>\n  </xsd:complexType>\n\n  <xsd:element name="CalculationError">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:string">\n        <xsd:enumeration value="IgnoreError" />\n        <xsd:enumeration value="ReportAndStop" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n\n  <xsd:element name="CompatibilityLevel" type="xsd:integer" />\n\n</xsd:schema>\n';
const eng300_300_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0"\n  xmlns="http://schemas.microsoft.com/analysisservices/2011/engine/300/300"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  xmlns:ana="urn:schemas-microsoft-com:xml-analysis"\n  xmlns:eng300="http://schemas.microsoft.com/analysisservices/2011/engine/300"\n  targetNamespace="http://schemas.microsoft.com/analysisservices/2011/engine/300/300">\n\n  <xsd:import\n    namespace="urn:schemas-microsoft-com:xml-analysis"\n    schemaLocation="xmla.xsd" />\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2011/engine/300"\n    schemaLocation="eng300.xsd" />\n\n  <xsd:element name="DirectQueryMode">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:string">\n        <xsd:enumeration value="InMemory" />\n        <xsd:enumeration value="DirectQueryWithInMemory" />\n        <xsd:enumeration value="InMemoryWithDirectQuery" />\n        <xsd:enumeration value="DirectQuery" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n\n  <xsd:complexType name="Relationship">\n    <xsd:sequence>\n      <xsd:element name="ID" type="xsd:string" />\n      <xsd:element name="Visible" type="xsd:boolean" />\n      <xsd:element name="FromRelationshipEnd"\n        type="RelationshipEnd" />\n      <xsd:element name="ToRelationshipEnd"\n        type="RelationshipEnd" />\n    </xsd:sequence>\n  </xsd:complexType>\n  <xsd:complexType name="RelationshipEnd">\n    <xsd:sequence>\n      <xsd:element name="Role" type="xsd:string" />\n      <xsd:element name="Multiplicity">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="One" />\n            <xsd:enumeration value="Many" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DimensionID" type="xsd:string" />\n      <xsd:element name="Attributes" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Attribute" minOccurs="0"\n              maxOccurs="unbounded">\n              <xsd:complexType>\n                <xsd:sequence>\n                  <xsd:element name="AttributeID" type="xsd:string" />\n                </xsd:sequence>\n              </xsd:complexType>\n            </xsd:element>\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation"\n              type="RelationshipEndTranslation" minOccurs="0"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="VisualizationProperties"\n        type="eng300:RelationshipEndVisualizationProperties" minOccurs="0"\n        maxOccurs="1" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="RelationshipEndTranslation">\n    <xsd:all>\n      <xsd:element name="Language" type="xsd:unsignedInt" />\n      <xsd:element name="Caption" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="CollectionCaption" type="xsd:string" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DisplayFolder" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="ana:Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:element name="AllowedRowsExpression" type="xsd:string" />\n\n  <xsd:complexType name="Relationships">\n    <xsd:sequence>\n      <xsd:element name="Relationship" type="Relationship"\n        minOccurs="0" maxOccurs="unbounded" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:element name="XEvent">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element ref="ana:event_session" />\n      </xsd:sequence>\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:element name="DirectQueryUsage">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:string">\n        <xsd:enumeration value="InMemoryWithDirectQuery" />\n        <xsd:enumeration value="DirectQueryOnly" />\n        <xsd:enumeration value="InMemoryOnly" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n\n</xsd:schema>\n';
const eng300_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0"\n  xmlns="http://schemas.microsoft.com/analysisservices/2011/engine/300"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  xmlns:eng="http://schemas.microsoft.com/analysisservices/2003/engine"\n  targetNamespace="http://schemas.microsoft.com/analysisservices/2011/engine/300">\n\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2003/engine"\n    schemaLocation="eng.xsd" />\n\n\n  <xsd:element name="DataEmbeddingStyle">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:string">\n        <xsd:enumeration value="Embedded" />\n        <xsd:enumeration value="NotEmbedded" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n\n\n  <xsd:element name="QueryImpersonationInfo"\n    type="eng:ImpersonationInfo" />\n  <xsd:element name="QueryHints" type="xsd:string" />\n  <xsd:element name="StringStoresCompatibilityLevel">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:int">\n        <xsd:enumeration value="1050" />\n        <xsd:enumeration value="1100" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n  <xsd:element name="CurrentStringStoresCompatibilityLevel">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:int">\n        <xsd:enumeration value="1050" />\n        <xsd:enumeration value="1100" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n\n\n  <xsd:complexType\n    name="RelationshipEndVisualizationProperties">\n    <xsd:sequence>\n      <xsd:element name="FolderPosition" type="xsd:integer"\n        minOccurs="0" maxOccurs="1" default="-1" />\n      <xsd:element name="ContextualNameRule" minOccurs="0"\n        maxOccurs="1" default="None">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="Context" />\n            <xsd:enumeration value="Merge" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DefaultDetailsPosition"\n        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />\n      <xsd:element name="DisplayKeyPosition" type="xsd:integer"\n        minOccurs="0" maxOccurs="1" default="-1" />\n      <xsd:element name="CommonIdentifierPosition"\n        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />\n      <xsd:element name="IsDefaultMeasure" type="xsd:boolean"\n        minOccurs="0" maxOccurs="1" default="false" />\n      <xsd:element name="IsDefaultImage" type="xsd:boolean"\n        minOccurs="0" maxOccurs="1" default="false" />\n      <xsd:element name="SortPropertiesPosition"\n        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:simpleType name="AttributeHierarchyProcessingState">\n    <xsd:restriction base="xsd:string">\n      <xsd:enumeration value="Processed" />\n      <xsd:enumeration value="Unprocessed" />\n      <xsd:enumeration value="DependencyError" />\n    </xsd:restriction>\n  </xsd:simpleType>\n\n  <xsd:complexType\n    name="DimensionAttributeVisualizationProperties">\n    <xsd:sequence>\n      <xsd:element name="FolderPosition" type="xsd:integer"\n        minOccurs="0" maxOccurs="1" default="-1" />\n      <xsd:element name="ContextualNameRule" minOccurs="0"\n        maxOccurs="1" default="None">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="Context" />\n            <xsd:enumeration value="Merge" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Alignment" minOccurs="0" maxOccurs="1"\n        default="Default">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Default" />\n            <xsd:enumeration value="Left" />\n            <xsd:enumeration value="Right" />\n            <xsd:enumeration value="Center" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="IsFolderDefault" type="xsd:boolean"\n        minOccurs="0" maxOccurs="1" default="false" />\n      <xsd:element name="IsRightToLeft" type="xsd:boolean"\n        minOccurs="0" maxOccurs="1" default="false" />\n      <xsd:element name="SortDirection" minOccurs="0"\n        maxOccurs="1" default="Default">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Default" />\n            <xsd:enumeration value="Ascending" />\n            <xsd:enumeration value="Descending" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Units" type="xsd:string" minOccurs="0"\n        maxOccurs="1" default="" />\n      <xsd:element name="Width" type="xsd:integer"\n        minOccurs="0" maxOccurs="1" default="-1" />\n      <xsd:element name="DefaultDetailsPosition"\n        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />\n      <xsd:element name="CommonIdentifierPosition"\n        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />\n      <xsd:element name="SortPropertiesPosition"\n        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />\n      <xsd:element name="DisplayKeyPosition" type="xsd:integer"\n        minOccurs="0" maxOccurs="1" default="-1" />\n      <xsd:element name="IsDefaultImage" type="xsd:boolean"\n        minOccurs="0" maxOccurs="1" default="false" />\n      <xsd:element name="DefaultAggregateFunction"\n        minOccurs="0" maxOccurs="1" default="Default">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Default" />\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="Sum" />\n            <xsd:enumeration value="Min" />\n            <xsd:enumeration value="Max" />\n            <xsd:enumeration value="Count" />\n            <xsd:enumeration value="Average" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType\n    name="HierarchyVisualizationProperties">\n    <xsd:sequence>\n      <xsd:element name="ContextualNameRule" minOccurs="0"\n        maxOccurs="1" default="None">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="Context" />\n            <xsd:enumeration value="Merge" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="FolderPosition" type="xsd:integer"\n        minOccurs="0" maxOccurs="1" default="-1" />\n    </xsd:sequence>\n  </xsd:complexType>\n  <xsd:element name="ProcessingState">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:string">\n        <xsd:enumeration value="Processed" />\n        <xsd:enumeration value="Unprocessed" />\n        <xsd:enumeration value="InvalidExpression" />\n        <xsd:enumeration value="DependencyError" />\n        <xsd:enumeration value="CalculationError" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n  <xsd:element name="StructureType">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:string">\n        <xsd:enumeration value="Natural" />\n        <xsd:enumeration value="Unnatural" />\n        <xsd:enumeration value="Unknown" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n\n  <xsd:element name="ServerMode">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:string">\n        <xsd:enumeration value="Multidimensional" />\n        <xsd:enumeration value="Tabular" />\n        <xsd:enumeration value="SharePoint" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n\n\n  <xsd:complexType\n    name="CalculationPropertiesVisualizationProperties">\n    <xsd:sequence>\n      <xsd:element name="FolderPosition" type="xsd:integer"\n        minOccurs="0" maxOccurs="1" default="-1" />\n      <xsd:element name="ContextualNameRule" minOccurs="0"\n        maxOccurs="1" default="None">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="Context" />\n            <xsd:enumeration value="Merge" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Alignment" minOccurs="0" maxOccurs="1"\n        default="Default">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Default" />\n            <xsd:enumeration value="Left" />\n            <xsd:enumeration value="Right" />\n            <xsd:enumeration value="Center" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="IsFolderDefault" type="xsd:boolean"\n        minOccurs="0" maxOccurs="1" default="false" />\n      <xsd:element name="IsRightToLeft" type="xsd:boolean"\n        minOccurs="0" maxOccurs="1" default="false" />\n      <xsd:element name="SortDirection" minOccurs="0"\n        maxOccurs="1" default="Default">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Default" />\n            <xsd:enumeration value="Ascending" />\n            <xsd:enumeration value="Descending" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Units" type="xsd:string" minOccurs="0"\n        maxOccurs="1" default="" />\n      <xsd:element name="Width" type="xsd:integer"\n        minOccurs="0" maxOccurs="1" default="-1" />\n      <xsd:element name="IsDefaultMeasure" type="xsd:boolean"\n        minOccurs="0" maxOccurs="1" default="false" />\n      <xsd:element name="DefaultDetailsPosition"\n        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />\n      <xsd:element name="SortPropertiesPosition"\n        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />\n      <xsd:element name="IsSimpleMeasure" type="xsd:boolean"\n        minOccurs="0" maxOccurs="1" default="false" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n</xsd:schema>\n';
const eng400_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0"\n  xmlns="http://schemas.microsoft.com/analysisservices/2012/engine/400"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  targetNamespace="http://schemas.microsoft.com/analysisservices/2012/engine/400">\n\n  <xsd:element name="DefaultCompatibilityLevel"\n    type="xsd:long" />\n\n</xsd:schema>\n';
const eng600_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0"\n  xmlns="http://schemas.microsoft.com/analysisservices/2013/engine/600"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  targetNamespace="http://schemas.microsoft.com/analysisservices/2013/engine/600">\n\n  <xsd:element name="SupportedCompatibilityLevels"\n    type="xsd:string" />\n\n</xsd:schema>\n';
const eng800_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0"\n  xmlns="http://schemas.microsoft.com/analysisservices/2013/engine/800"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  targetNamespace="http://schemas.microsoft.com/analysisservices/2013/engine/800">\n\n\n  <xsd:element name="SubscriptionId" type="xsd:string" />\n\n  <xsd:element name="DaxOptimizationMode">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:string">\n        <xsd:enumeration value="1" />\n        <xsd:enumeration value="0" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n\n</xsd:schema>\n';
const ext_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0"\n  xmlns="http://schemas.microsoft.com/analysisservices/2003/ext"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  targetNamespace="http://schemas.microsoft.com/analysisservices/2003/ext">\n\n  <xsd:element name="Authenticate">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element name="SspiHandshake" minOccurs="1"\n          maxOccurs="1" nillable="false" type="xsd:base64Binary" />\n      </xsd:sequence>\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:element name="AuthenticateResponse">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element name="return" minOccurs="1" maxOccurs="1">\n          <xsd:complexType>\n            <xsd:sequence>\n              <xsd:element name="SspiHandshake" minOccurs="1"\n                maxOccurs="1" nillable="false" type="xsd:base64Binary" />\n            </xsd:sequence>\n          </xsd:complexType>\n        </xsd:element>\n      </xsd:sequence>\n    </xsd:complexType>\n  </xsd:element>\n\n</xsd:schema>\n';
const msxmla_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0"\n  targetNamespace="http://schemas.microsoft.com/analysisservices/2003/xmla"\n  xmlns="http://schemas.microsoft.com/analysisservices/2003/xmla"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  xmlns:ana-ds="urn:schemas-microsoft-com:xml-analysis:mddataset">\n\n  <xsd:import\n    namespace="urn:schemas-microsoft-com:xml-analysis:mddataset"\n    schemaLocation="xmla-ds.xsd" />\n\n  <xsd:element name="NormTupleSet">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element name="NormTuples" type="NormTuplesType"\n          minOccurs="1" maxOccurs="1" />\n        <xsd:element name="MembersLookup" minOccurs="1"\n          maxOccurs="1">\n          <xsd:complexType>\n            <xsd:sequence>\n              <xsd:element name="Members" type="ana-ds:TupleType"\n                minOccurs="1" maxOccurs="unbounded" />\n            </xsd:sequence>\n          </xsd:complexType>\n        </xsd:element>\n      </xsd:sequence>\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:complexType name="NormTuplesType">\n    <xsd:sequence>\n      <xsd:element name="NormTuple" minOccurs="0"\n        maxOccurs="unbounded">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="MemberRef" minOccurs="0"\n              maxOccurs="unbounded">\n              <xsd:complexType>\n                <xsd:sequence>\n                  <xsd:element name="MemberOrdinal" type="xsd:int"\n                    minOccurs="1" maxOccurs="1" />\n                  <xsd:element name="MemberDispInfo" type="xsd:int"\n                    minOccurs="0" maxOccurs="1" />\n                </xsd:sequence>\n              </xsd:complexType>\n            </xsd:element>\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:sequence>\n  </xsd:complexType>\n</xsd:schema>\n';
const xmla_ds_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema version="1.0"\n  targetNamespace="urn:schemas-microsoft-com:xml-analysis:mddataset"\n  xmlns="urn:schemas-microsoft-com:xml-analysis:mddataset"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  xmlns:xs="http://www.w3.org/2001/XMLSchema"\n  xmlns:msxmla="http://schemas.microsoft.com/analysisservices/2003/xmla"\n  xmlns:ana-x="urn:schemas-microsoft-com:xml-analysis:exception"\n  xmlns:eng="http://schemas.microsoft.com/analysisservices/2003/engine">\n\n\n  <xsd:import namespace="http://www.w3.org/2001/XMLSchema" />\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2003/xmla"\n    schemaLocation="msxmla.xsd" />\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2003/engine"\n    schemaLocation="eng.xsd" />\n  <xsd:import\n    namespace="urn:schemas-microsoft-com:xml-analysis:exception"\n    schemaLocation="xmla-x.xsd" />\n\n  <xsd:element name="root" type="mddataset" />\n\n  <xsd:complexType name="mddataset">\n    <xsd:sequence>\n      <xsd:element name="OlapInfo" minOccurs="0"\n        type="OlapInfo" />\n      <xsd:element name="Axes" minOccurs="0" type="Axes" />\n      <xsd:element name="CellData" minOccurs="0"\n        type="CellData" />\n      <xsd:element name="Exception" minOccurs="0"\n        type="ana-x:Exception" />\n      <xsd:element name="Messages" minOccurs="0"\n        type="ana-x:Messages" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="OlapInfo">\n    <xsd:sequence>\n      <xsd:element name="CubeInfo" type="CubeInfo" />\n      <xsd:element name="AxesInfo" type="AxesInfo" />\n      <xsd:element name="CellInfo" type="CellInfo" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="CubeInfo">\n    <xsd:sequence>\n      <xsd:element name="Cube" maxOccurs="unbounded"\n        type="OlapInfoCube" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="TupleType">\n    <xsd:sequence>\n      <xsd:element name="Member" type="MemberType"\n        maxOccurs="unbounded" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="OlapInfoCube">\n    <xsd:sequence>\n      <xsd:element name="CubeName" type="xsd:string" />\n      <xsd:element ref="eng:LastDataUpdate" minOccurs="0" />\n      <xsd:element ref="eng:LastSchemaUpdate" minOccurs="0" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="AxesInfo">\n    <xsd:sequence>\n      <xsd:element name="AxisInfo" maxOccurs="unbounded"\n        type="AxisInfo"></xsd:element>\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="AxisInfo">\n    <xsd:sequence>\n      <xsd:element name="HierarchyInfo" type="HierarchyInfo"\n        minOccurs="0" maxOccurs="unbounded" />\n    </xsd:sequence>\n    <xsd:attribute name="name" type="xsd:string" />\n  </xsd:complexType>\n\n\n  <xsd:complexType name="HierarchyInfo">\n    <xsd:sequence>\n      <xsd:any namespace="##targetNamespace" minOccurs="0"\n        maxOccurs="unbounded" processContents="skip" />\n    </xsd:sequence>\n    <xsd:attribute name="name" type="xsd:string"\n      use="required" />\n  </xsd:complexType>\n\n  <xsd:complexType name="CellInfo">\n    <xsd:sequence>\n      <xsd:any namespace="##targetNamespace" minOccurs="0"\n        maxOccurs="unbounded" processContents="skip" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="Axes">\n    <xsd:sequence>\n      <xsd:element name="Axis" type="Axis"\n        maxOccurs="unbounded" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="Axis">\n    <xsd:group ref="SetType" minOccurs="0" maxOccurs="unbounded" />\n    <xsd:attribute name="name" type="xsd:string" />\n  </xsd:complexType>\n\n  <xsd:group name="SetType">\n    <xsd:choice>\n      <xsd:element name="Members" type="MembersType" />\n      <xsd:element name="Tuples" type="TuplesType" />\n      <xsd:element name="CrossProduct" type="SetListType" />\n      <xsd:element ref="msxmla:NormTupleSet" />\n      <xsd:element name="Union">\n        <xsd:complexType>\n          <xsd:group ref="SetType" minOccurs="0"\n            maxOccurs="unbounded" />\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:choice>\n  </xsd:group>\n\n  <xsd:complexType name="MembersType">\n    <xsd:sequence>\n      <xsd:element name="Member" type="MemberType"\n        minOccurs="0" maxOccurs="unbounded" />\n    </xsd:sequence>\n    <xsd:attribute name="Hierarchy" type="xsd:string"\n      use="required" />\n  </xsd:complexType>\n\n  <xsd:complexType name="MemberType">\n    <xsd:sequence>\n      <xsd:any namespace="##targetNamespace" minOccurs="0"\n        maxOccurs="unbounded" processContents="skip" />\n    </xsd:sequence>\n    <xsd:attribute name="Hierarchy" type="xsd:string" />\n  </xsd:complexType>\n\n\n  <xsd:complexType name="TuplesType">\n    <xsd:sequence>\n      <xsd:element name="Tuple" type="TupleType" minOccurs="0"\n        maxOccurs="unbounded" />\n    </xsd:sequence>\n  </xsd:complexType>\n  <xsd:complexType name="SetListType">\n    <xsd:group ref="SetType" minOccurs="0" maxOccurs="unbounded" />\n    <xsd:attribute name="Size" type="xsd:unsignedInt" />\n  </xsd:complexType>\n  <xsd:complexType name="CellData">\n    <xsd:sequence>\n      <xsd:element name="Cell" type="CellType" minOccurs="0"\n        maxOccurs="unbounded" />\n      <xsd:element name="CellSet" type="CellSetType"\n        minOccurs="0" maxOccurs="1" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="CellType">\n    <xsd:sequence>\n      <xsd:element name="Value" minOccurs="0" maxOccurs="1">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Error" type="CellTypeError"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:any namespace="##targetNamespace" minOccurs="0"\n        maxOccurs="unbounded" processContents="skip" />\n    </xsd:sequence>\n    <xsd:attribute name="CellOrdinal" type="xsd:unsignedInt"\n      use="required" />\n  </xsd:complexType>\n\n\n  <xsd:complexType name="CellTypeError">\n    <xsd:attribute name="ErrorCode" type="xsd:long" />\n    <xsd:attribute name="Description" type="xsd:string" />\n  </xsd:complexType>\n\n\n  <xsd:complexType name="CellSetType">\n    <xsd:sequence>\n      <xsd:element name="Data" type="xsd:base64Binary"\n        minOccurs="1" maxOccurs="unbounded" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n</xsd:schema>\n';
const xmla_e_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0" xmlns="urn:schemas-microsoft-com:xml-analysis:empty"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  xmlns:ana-x="urn:schemas-microsoft-com:xml-analysis:exception"\n  targetNamespace="urn:schemas-microsoft-com:xml-analysis:empty">\n\n  <xsd:import\n    namespace="urn:schemas-microsoft-com:xml-analysis:exception"\n    schemaLocation="xmla-x.xsd" />\n\n  <xsd:complexType name="emptyresult">\n    <xsd:sequence>\n      <xsd:element name="Exception" minOccurs="0"\n        type="ana-x:Exception" />\n      <xsd:element name="Messages" minOccurs="0"\n        type="ana-x:Messages" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:element name="root" type="emptyresult" />\n\n\n</xsd:schema>\n';
const xmla_m_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0"\n  xmlns="http://schemas.microsoft.com/analysisservices/2003/xmla-multipleresults"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  xmlns:ana-e="urn:schemas-microsoft-com:xml-analysis:empty"\n  targetNamespace="http://schemas.microsoft.com/analysisservices/2003/xmla-multipleresults">\n\n  <xsd:import\n    namespace="urn:schemas-microsoft-com:xml-analysis:empty"\n    schemaLocation="xmla-e.xsd" />\n\n\n  <xsd:element name="results">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element ref="ana-e:root" minOccurs="0"\n          maxOccurs="unbounded" />\n      </xsd:sequence>\n    </xsd:complexType>\n  </xsd:element>\n\n</xsd:schema>\n';
const xmla_x_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0" xmlns="urn:schemas-microsoft-com:xml-analysis:exception"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  targetNamespace="urn:schemas-microsoft-com:xml-analysis:exception"\n  xmlns:eng200="http://schemas.microsoft.com/analysisservices/2010/engine/200">\n\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2010/engine/200"\n    schemaLocation="eng200.xsd" />\n\n  <xsd:complexType name="Exception">\n    <xsd:sequence></xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="Messages">\n    <xsd:choice minOccurs="1" maxOccurs="unbounded">\n      <xsd:element name="Warning" type="WarningType" />\n      <xsd:element name="Error" type="ErrorType" />\n    </xsd:choice>\n  </xsd:complexType>\n\n  <xsd:complexType name="WarningType">\n    <xsd:all>\n      <xsd:element name="Location" type="MessageLocation"\n        minOccurs="0" />\n    </xsd:all>\n    <xsd:attribute name="WarningCode" type="xsd:int" />\n    <xsd:attribute name="Description" type="xsd:string" />\n    <xsd:attribute name="Source" type="xsd:string" />\n    <xsd:attribute name="HelpFile" type="xsd:string" />\n  </xsd:complexType>\n\n  <xsd:complexType name="ErrorType">\n    <xsd:all>\n      <xsd:element name="Location" type="MessageLocation"\n        minOccurs="0" />\n      <xsd:element name="Callstack" type="xsd:string"\n        minOccurs="0" />\n    </xsd:all>\n    <xsd:attribute name="ErrorCode" type="xsd:long" />\n    <xsd:attribute name="Description" type="xsd:string" />\n    <xsd:attribute name="Source" type="xsd:string" />\n    <xsd:attribute name="HelpFile" type="xsd:string" />\n  </xsd:complexType>\n\n  <xsd:complexType name="MessageLocation">\n    <xsd:all>\n      <xsd:element name="Start">\n        <xsd:complexType>\n          <xsd:all>\n            <xsd:element name="Line" type="xsd:int" />\n            <xsd:element name="Column" type="xsd:int" />\n          </xsd:all>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="End">\n        <xsd:complexType>\n          <xsd:all>\n            <xsd:element name="Line" type="xsd:int" />\n            <xsd:element name="Column" type="xsd:int" />\n          </xsd:all>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="LineOffset" type="xsd:int"\n        minOccurs="0" maxOccurs="1" />\n      <xsd:element name="TextLength" type="xsd:int"\n        minOccurs="0" maxOccurs="1" />\n      <xsd:element name="SourceObject"\n        type="eng200:WarningLocationObject" minOccurs="0" maxOccurs="1" />\n      <xsd:element name="DependsOnObject"\n        type="eng200:WarningLocationObject" minOccurs="0" maxOccurs="1" />\n      <xsd:element name="RowNumber" type="xsd:int"\n        minOccurs="0" maxOccurs="1" />\n    </xsd:all>\n  </xsd:complexType>\n\n</xsd:schema>\n';
const xmla_rs_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0" xmlns="urn:schemas-microsoft-com:xml-analysis:rowset"\n  xmlns:ana-x="urn:schemas-microsoft-com:xml-analysis:exception"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  targetNamespace="urn:schemas-microsoft-com:xml-analysis:rowset">\n\n  <xsd:import\n    namespace="urn:schemas-microsoft-com:xml-analysis:exception"\n    schemaLocation="xmla-x.xsd" />\n\n  <xsd:element name="root" type="rowset" />\n\n  <xsd:complexType name="rowset">\n    <xsd:sequence>\n      <xsd:element name="row" minOccurs="0"\n        maxOccurs="unbounded" type="row" />\n      <xsd:element name="Exception" minOccurs="0"\n        type="ana-x:Exception" />\n      <xsd:element name="Messages" minOccurs="0"\n        type="ana-x:Messages" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="row">\n    <xsd:sequence>\n      <xsd:any namespace="##any" minOccurs="0"\n        maxOccurs="unbounded" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n</xsd:schema>\n';
const xmla_xsd = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\n<!--\nCopyright (c) 2025 Contributors to the Eclipse Foundation.\n\nThis program and the accompanying materials are made\navailable under the terms of the Eclipse Public License 2.0\nwhich is available at https://www.eclipse.org/legal/epl-2.0/\n\nSPDX-License-Identifier: EPL-2.0\n\nContributors:\n    Smart City Jena\n-->\n<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"\n  version="1.0" xmlns="urn:schemas-microsoft-com:xml-analysis"\n  xmlns:eng="http://schemas.microsoft.com/analysisservices/2003/engine"\n  xmlns:eng2="http://schemas.microsoft.com/analysisservices/2003/engine/2"\n  xmlns:eng100="http://schemas.microsoft.com/analysisservices/2008/engine/100"\n  xmlns:eng100_100="http://schemas.microsoft.com/analysisservices/2008/engine/100/100"\n  xmlns:eng200="http://schemas.microsoft.com/analysisservices/2010/engine/200"\n  xmlns:eng200_200="http://schemas.microsoft.com/analysisservices/2010/engine/200/200"\n  xmlns:eng300="http://schemas.microsoft.com/analysisservices/2011/engine/300"\n  xmlns:eng300_300="http://schemas.microsoft.com/analysisservices/2011/engine/300/300"\n  xmlns:eng400="http://schemas.microsoft.com/analysisservices/2012/engine/400"\n  xmlns:eng600="http://schemas.microsoft.com/analysisservices/2013/engine/600"\n  xmlns:eng800="http://schemas.microsoft.com/analysisservices/2013/engine/800"\n  xmlns:ana-ds="urn:schemas-microsoft-com:xml-analysis:mddataset"\n  xmlns:ana-rs="urn:schemas-microsoft-com:xml-analysis:rowset"\n  xmlns:ana-e="urn:schemas-microsoft-com:xml-analysis:empty"\n  xmlns:ana-m="http://schemas.microsoft.com/analysisservices/2003/xmla-multipleresults"\n  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"\n  targetNamespace="urn:schemas-microsoft-com:xml-analysis">\n\n  <xsd:import\n    namespace="urn:schemas-microsoft-com:xml-analysis:mddataset"\n    schemaLocation="xmla-ds.xsd" />\n  <xsd:import\n    namespace="urn:schemas-microsoft-com:xml-analysis:rowset"\n    schemaLocation="xmla-rs.xsd" />\n  <xsd:import\n    namespace="urn:schemas-microsoft-com:xml-analysis:empty"\n    schemaLocation="xmla-e.xsd" />\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2003/xmla-multipleresults"\n    schemaLocation="xmla-m.xsd" />\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2003/engine"\n    schemaLocation="eng.xsd" />\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2003/engine/2"\n    schemaLocation="eng2.xsd" />\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2008/engine/100"\n    schemaLocation="eng100.xsd" />\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2008/engine/100/100"\n    schemaLocation="eng100_100.xsd" />\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2010/engine/200"\n    schemaLocation="eng200.xsd" />\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2010/engine/200/200"\n    schemaLocation="eng200_200.xsd" />\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2011/engine/300"\n    schemaLocation="eng300.xsd" />\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2011/engine/300/300"\n    schemaLocation="eng300_300.xsd" />\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2012/engine/400"\n    schemaLocation="eng400.xsd" />\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2013/engine/600"\n    schemaLocation="eng600.xsd" />\n  <xsd:import\n    namespace="http://schemas.microsoft.com/analysisservices/2013/engine/800"\n    schemaLocation="eng800.xsd" />\n\n  <xsd:complexType name="Properties">\n    <xsd:sequence>\n      <xsd:element name="PropertyList" minOccurs="0"\n        maxOccurs="1" type="PropertyList" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="Parameters">\n    <xsd:sequence>\n      <xsd:element name="Parameter" type="ExecuteParameter"\n        minOccurs="0" maxOccurs="unbounded" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="PropertyList">\n    <xsd:all>\n      <xsd:element name="DataSourceInfo" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Timeout" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="UserName" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Password" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="LocaleIdentifier" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="Catalog" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="StateSupport" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="Sessions" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Content" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="Schema" />\n            <xsd:enumeration value="Data" />\n            <xsd:enumeration value="SchemaData" />\n            <xsd:enumeration value="Metadata" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Format" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Tabular" />\n            <xsd:enumeration value="Multidimensional" />\n            <xsd:enumeration value="Native" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="AxisFormat" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="ClusterFormat" />\n            <xsd:enumeration value="CustomFormat" />\n            <xsd:enumeration value="TupleFormat" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="BeginRange" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="EndRange" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="MDXSupport" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Core" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="ProviderName" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="ProviderVersion" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DBMSVersion" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="ProviderType" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n            <xsd:enumeration value="3" />\n            <xsd:enumeration value="4" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="ShowHiddenCubes" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="SQLSupport" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="TransactionDDL" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="MaximumRows" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="Roles" type="xsd:string" minOccurs="0" />\n      <xsd:element name="VisualMode" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="0" />\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="EffectiveRoles" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="EffectiveUserName" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="ServerName" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="CatalogLocation" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DbpropCatalogTerm" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DbpropCatalogUsage" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="DbpropColumnDefinition"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropConcatNullBehavior"\n        minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DbpropDataSourceReadOnly"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="DbpropGroupBy" minOccurs="0"\n        type="xsd:integer" />\n      <xsd:element name="DbpropHeterogeneousTables"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropIdentifierCase"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropMaxIndexSize" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="DbpropMaxOpenChapters"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropMaxRowSize" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="DbpropMaxRowSizeIncludeBlob"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="DbpropMaxTablesInSelect"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropMultiTableUpdate"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="DbpropNullCollation" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n            <xsd:enumeration value="4" />\n            <xsd:enumeration value="8" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DbpropOrderByColumnsInSelect"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="DbpropOutputParameterAvailable"\n        minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n            <xsd:enumeration value="4" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DbpropPersistentIdType" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n            <xsd:enumeration value="4" />\n            <xsd:enumeration value="8" />\n            <xsd:enumeration value="16" />\n            <xsd:enumeration value="32" />\n            <xsd:enumeration value="64" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DbpropPrepareAbortBehavior"\n        minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DbpropPrepareCommitBehavior"\n        minOccurs="0">\n        <xsd:simpleType>\n\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DbpropProcedureTerm" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DbpropQuotedIdentifierCase"\n        minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n            <xsd:enumeration value="4" />\n            <xsd:enumeration value="8" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DbpropSchemaUsage" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="DbpropSqlSupport" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="DbpropSubqueries" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="DbpropSupportedTxnDdl"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="MdpropMdxSubqueries"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropSupportedTxnIsoLevels"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropSupportedTxnIsoRetain"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropTableTerm" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="MdpropAggregateCellUpdate"\n        minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="0" />\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="MdpropAxes" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="MdpropFlatteningSupport" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n            <xsd:enumeration value="3" />\n            <xsd:enumeration value="4" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="MdpropMdxCaseSupport"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="MdpropMdxDescFlags" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="MdpropMdxDrillFunctions"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="MdpropMdxFormulas" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="MdpropMdxJoinCubes" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="MdpropMdxMemberFunctions"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="MdpropMdxNonMeasureExpressions"\n        minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="0" />\n            <xsd:enumeration value="1" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="MdpropMdxNumericFunctions"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="MdpropMdxObjQualification"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="MdpropMdxOuterReference"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="MdpropMdxQueryByProperty"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="MdpropMdxRangeRowset" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n            <xsd:enumeration value="4" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="MdpropMdxSetFunctions"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="MdpropMdxSlicer" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="MdpropMdxStringCompop"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="MdpropNamedLevels" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="DbpropMsmdMDXCompatibility"\n        minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="0" />\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n            <xsd:enumeration value="3" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DbpropMsmdSQLCompatibility"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropMsmdMDXUniqueNameStyle"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropMsmdCachePolicy"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropMsmdCacheRatio"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropMsmdCacheMode"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element\n        name="DbpropMsmdCompareCaseSensitiveStringFlags" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n            <xsd:enumeration value="16" />\n            <xsd:enumeration value="256" />\n            <xsd:enumeration value="4096" />\n            <xsd:enumeration value="65536" />\n            <xsd:enumeration value="1048576" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element\n        name="DbpropMsmdCompareCaseNotSensitiveStringFlags"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropMsmdFlattened2"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="DbpropInitMode" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="SspropInitAppName" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="SspropInitWsid" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="SspropInitPacketsize"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="ReadOnlySession" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="SecuredCellValue" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="0" />\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n            <xsd:enumeration value="3" />\n            <xsd:enumeration value="4" />\n            <xsd:enumeration value="5" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="NonEmptyThreshold" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="SafetyOptions" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="0" />\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n            <xsd:enumeration value="3" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DbpropMsmdCacheRatio2"\n        type="xsd:double" minOccurs="0" />\n      <xsd:element name="DbpropMsmdUseFormulaCache"\n        type="xsd:string" minOccurs="0" />\n      <xsd:element name="DbpropMsmdDynamicDebugLimit"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropMsmdDebugMode" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Dialect" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="MDX" />\n            <xsd:enumeration value="DMX" />\n            <xsd:enumeration value="SQL" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="ImpactAnalysis" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="SQLQueryMode" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Data" />\n            <xsd:enumeration value="Calculated" />\n            <xsd:enumeration value="IncludeEmpty" />\n            <xsd:enumeration value="DataKeys" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="ClientProcessID" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="Cube" type="xsd:string" minOccurs="0" />\n      <xsd:element name="ReturnCellProperties"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="CommitTimeout" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="ForceCommitTimeout" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="ExecutionMode" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="RealTimeOlap" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="MdxMissingMemberMode" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Default" />\n            <xsd:enumeration value="Ignore" />\n            <xsd:enumeration value="Error" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="MdpropMdxNamedSets" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="DbpropMsmdSubqueries" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="0" />\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DbpropMsmdAutoExists" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="0" />\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n            <xsd:enumeration value="3" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="CustomData" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DisablePrefetchFacts"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="UpdateIsolationLevel" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="1" />\n            <xsd:enumeration value="2" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DbpropMsmdErrorMessageMode"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="MdpropMdxDdlExtensions"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="ResponseEncoding" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Default" />\n            <xsd:enumeration value="UTF-8" />\n            <xsd:enumeration value="UTF-16" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="MemoryLockingMode" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:integer">\n            <xsd:enumeration value="0" />\n            <xsd:enumeration value="1" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DbpropMsmdOptimizeResponse"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropMsmdActivityID"\n        type="xsd:string" minOccurs="0" />\n      <xsd:element name="DbpropMsmdRequestID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="ReturnAffectedObjects"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="DbpropMsmdRequestMemoryLimit"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="ApplicationContext" type="xsd:string"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Command">\n    <xsd:choice>\n      <xsd:element name="Statement" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Create" type="Create" minOccurs="0" />\n      <xsd:element name="Alter" type="Alter" minOccurs="0" />\n      <xsd:element name="Delete" type="Delete" minOccurs="0" />\n      <xsd:element name="Process" type="Process" minOccurs="0" />\n      <xsd:element name="MergePartitions"\n        type="MergePartitions" minOccurs="0" />\n      <xsd:element name="DesignAggregations"\n        type="DesignAggregations" minOccurs="0" />\n      <xsd:element name="ClearCache" type="ClearCache"\n        minOccurs="0" />\n      <xsd:element name="Subscribe" type="Subscribe"\n        minOccurs="0" />\n      <xsd:element name="Unsubscribe" type="Unsubscribe"\n        minOccurs="0" />\n      <xsd:element name="Cancel" type="Cancel" minOccurs="0" />\n      <xsd:element name="BeginTransaction"\n        type="BeginTransaction" minOccurs="0" />\n      <xsd:element name="CommitTransaction"\n        type="CommitTransaction" minOccurs="0" />\n      <xsd:element name="RollbackTransaction"\n        type="RollbackTransaction" minOccurs="0" />\n      <xsd:element name="Lock" type="Lock" minOccurs="0" />\n      <xsd:element name="Unlock" type="Unlock" minOccurs="0" />\n      <xsd:element name="Backup" type="Backup" minOccurs="0" />\n      <xsd:element name="Restore" type="Restore" minOccurs="0" />\n      <xsd:element name="Synchronize" type="Synchronize"\n        minOccurs="0" />\n      <xsd:element name="Attach" type="Attach" minOccurs="0" />\n      <xsd:element name="Detach" type="Detach" minOccurs="0" />\n      <xsd:element name="Insert" type="Insert" minOccurs="0" />\n      <xsd:element name="Update" type="Update" minOccurs="0" />\n      <xsd:element name="Drop" type="Drop" minOccurs="0" />\n      <xsd:element name="UpdateCells" type="UpdateCells"\n        minOccurs="0" />\n      <xsd:element name="NotifyTableChange"\n        type="NotifyTableChange" minOccurs="0" />\n      <xsd:element name="Batch" type="Batch" minOccurs="0" />\n      <xsd:element name="ImageLoad" type="ImageLoad"\n        minOccurs="0" />\n      <xsd:element name="ImageSave" type="ImageSave"\n        minOccurs="0" />\n      <xsd:element name="CloneDatabase" type="CloneDatabase"\n        minOccurs="0" />\n      <xsd:element name="SetAuthContext" type="SetAuthContext"\n        minOccurs="0" />\n      <xsd:element name="DBCC" type="DBCC" minOccurs="0" />\n    </xsd:choice>\n  </xsd:complexType>\n\n  <xsd:complexType name="ObjectReference">\n    <xsd:all>\n      <xsd:element name="ServerID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DatabaseID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="RoleID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="TraceID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="AssemblyID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DimensionID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DimensionPermissionID"\n        type="xsd:string" minOccurs="0" />\n      <xsd:element name="DataSourceID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DataSourcePermissionID"\n        type="xsd:string" minOccurs="0" />\n      <xsd:element name="DatabasePermissionID"\n        type="xsd:string" minOccurs="0" />\n\n      <xsd:element name="DataSourceViewID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="CubeID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="MiningStructureID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="MeasureGroupID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="PerspectiveID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="CubePermissionID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="MdxScriptID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="PartitionID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="AggregationDesignID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="MiningModelID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="MiningModelPermissionID"\n        type="xsd:string" minOccurs="0" />\n      <xsd:element name="MiningStructurePermissionID"\n        type="xsd:string" minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Statement">\n    <xsd:all>\n      <xsd:element name="Statement" type="xsd:string"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:simpleType name="Scope">\n    <xsd:restriction base="xsd:string">\n      <xsd:enumeration value="Session" />\n    </xsd:restriction>\n  </xsd:simpleType>\n\n  <xsd:complexType name="Create">\n    <xsd:all>\n      <xsd:element name="ParentObject" type="ObjectReference"\n        minOccurs="0" />\n      <xsd:element name="ObjectDefinition" type="MajorObject" />\n    </xsd:all>\n    <xsd:attribute name="Scope" type="Scope" />\n    <xsd:attribute name="AllowOverwrite" type="xsd:boolean" />\n  </xsd:complexType>\n\n  <xsd:simpleType name="ObjectExpansion">\n    <xsd:restriction base="xsd:string">\n      <xsd:enumeration value="ObjectProperties" />\n      <xsd:enumeration value="ExpandFull" />\n    </xsd:restriction>\n  </xsd:simpleType>\n\n  <xsd:complexType name="Alter">\n    <xsd:all>\n      <xsd:element name="Object" type="ObjectReference"\n        minOccurs="0" />\n      <xsd:element name="ObjectDefinition" type="MajorObject" />\n    </xsd:all>\n    <xsd:attribute name="Scope" type="Scope" />\n    <xsd:attribute name="AllowCreate" type="xsd:boolean" />\n    <xsd:attribute name="ObjectExpansion"\n      type="ObjectExpansion" />\n  </xsd:complexType>\n\n\n  <xsd:complexType name="Delete">\n    <xsd:all>\n      <xsd:element name="Object" type="ObjectReference" />\n    </xsd:all>\n    <xsd:attribute name="IgnoreFailures" type="xsd:boolean" />\n  </xsd:complexType>\n\n  <xsd:complexType name="Process">\n    <xsd:all>\n      <xsd:element name="Type">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="ProcessFull" />\n            <xsd:enumeration value="ProcessAdd" />\n            <xsd:enumeration value="ProcessUpdate" />\n            <xsd:enumeration value="ProcessIndexes" />\n            <xsd:enumeration value="ProcessScriptCache" />\n            <xsd:enumeration value="ProcessData" />\n            <xsd:enumeration value="ProcessDefault" />\n            <xsd:enumeration value="ProcessClear" />\n            <xsd:enumeration value="ProcessStructure" />\n            <xsd:enumeration value="ProcessClearStructureOnly" />\n            <xsd:enumeration value="ProcessClearIndexes" />\n            <xsd:enumeration value="ProcessDefrag" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Object" type="ObjectReference" />\n      <xsd:element name="Bindings" type="Bindings"\n        minOccurs="0" />\n      <xsd:element name="DataSource" type="DataSource"\n        minOccurs="0" />\n      <xsd:element name="DataSourceView" type="DataSourceView"\n        minOccurs="0" />\n      <xsd:element name="ErrorConfiguration"\n        type="ErrorConfiguration" minOccurs="0" />\n      <xsd:element name="WriteBackTableCreation"\n        type="WriteBackTableCreation" minOccurs="0"></xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="DataSourceView">\n    <xsd:all>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for DataSourceView object -->\n      <xsd:element name="DataSourceID" type="xsd:string" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Bindings">\n    <xsd:sequence>\n      <xsd:element name="Binding" type="OutOfLineBinding"\n        minOccurs="0" maxOccurs="unbounded" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n\n  <xsd:simpleType name="WriteBackTableCreation">\n    <xsd:restriction base="xsd:string">\n      <xsd:enumeration value="Create" />\n      <xsd:enumeration value="CreateAlways" />\n      <xsd:enumeration value="UseExisting" />\n    </xsd:restriction>\n  </xsd:simpleType>\n\n  <xsd:complexType name="MergePartitions">\n    <xsd:all>\n      <xsd:element name="Sources">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Source" type="ObjectReference"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Target" type="ObjectReference" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="DesignAggregations">\n    <xsd:all>\n      <xsd:element name="Object" type="ObjectReference" />\n      <xsd:element name="Time" type="xsd:duration"\n        minOccurs="0" />\n      <xsd:element name="Steps" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="Optimization" type="xsd:double"\n        minOccurs="0" />\n      <xsd:element name="Storage" type="xsd:long" minOccurs="0" />\n      <xsd:element name="Materialize" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="Queries" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Query" type="xsd:string"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="ClearCache">\n    <xsd:all>\n      <xsd:element name="Object" type="ObjectReference" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Subscribe">\n    <xsd:all>\n      <xsd:element name="Object" type="ObjectReference"\n        minOccurs="0" />\n      <xsd:element ref="eng800:SubscriptionId" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Unsubscribe">\n    <xsd:all>\n      <xsd:element ref="eng800:SubscriptionId" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Cancel">\n    <xsd:all>\n      <xsd:element name="ConnectionID" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="SessionID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="SPID" type="xsd:integer" minOccurs="0" />\n      <xsd:element name="CancelAssociated" type="xsd:boolean"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n  <xsd:complexType name="BeginTransaction" />\n\n  <xsd:complexType name="CommitTransaction">\n    <xsd:all>\n      <xsd:element name="DurabilityGuarantee" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="LocalDisk" />\n            <xsd:enumeration value="Full" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="RollbackTransaction" />\n\n  <xsd:complexType name="Lock">\n    <xsd:all>\n      <xsd:element name="ID">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:token">\n            <xsd:pattern\n              value="[0-9a-zA-Z]{8}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]\n{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{12}" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Object" type="ObjectReference" />\n      <xsd:element name="Mode">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="CommitShared" />\n            <xsd:enumeration value="CommitExclusive" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="Unlock">\n    <xsd:all>\n      <xsd:element name="ID">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:token">\n            <xsd:pattern\n              value="[0-9a-zA-Z]{8}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]\n{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{12}" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Backup">\n    <xsd:all>\n      <xsd:element name="Object" type="ObjectReference" />\n      <xsd:element name="File" type="xsd:string" />\n      <xsd:element name="Security" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="SkipMembership" />\n            <xsd:enumeration value="CopyAll" />\n            <xsd:enumeration value="IgnoreSecurity" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="ApplyCompression" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="AllowOverwrite" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="Password" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="BackupRemotePartitions"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="Locations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Location" type="Location_Backup"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="Location_Backup">\n    <xsd:all>\n      <xsd:element name="File" type="xsd:string" />\n      <xsd:element name="DataSourceID" type="xsd:string" />\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="Restore">\n    <xsd:all>\n      <xsd:element name="DatabaseName" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DatabaseID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="File" type="xsd:string" />\n      <xsd:element name="Security" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="SkipMembership" />\n            <xsd:enumeration value="CopyAll" />\n            <xsd:enumeration value="IgnoreSecurity" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="AllowOverwrite" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="Password" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element ref="eng100_100:DbStorageLocation"\n        minOccurs="0" />\n      <xsd:element ref="eng100:ReadWriteMode" minOccurs="0">\n      </xsd:element>\n      <xsd:element name="Locations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Location" type="Location"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="MajorObject">\n    <xsd:choice>\n      <xsd:element name="AggregationDesign"\n        type="AggregationDesign" />\n      <xsd:element name="Assembly" type="Assembly" />\n      <xsd:element name="Cube" type="Cube" />\n      <xsd:element name="Database" type="Database" />\n      <xsd:element name="DataSource" type="DataSource" />\n      <xsd:element name="DataSourceView" type="DataSourceView" />\n      <xsd:element name="Dimension" type="Dimension" />\n      <xsd:element name="MdxScript" type="MdxScript" />\n      <xsd:element name="MeasureGroup" type="MeasureGroup" />\n      <xsd:element name="MiningModel" type="MiningModel" />\n      <xsd:element name="MiningStructure"\n        type="MiningStructure" />\n      <xsd:element name="Partition" type="Partition" />\n      <xsd:element name="Permission" type="Permission" />\n      <xsd:element name="Perspective" type="Perspective" />\n      <xsd:element name="Role" type="Role" />\n      <xsd:element name="Server" type="Server" />\n      <xsd:element name="Trace" type="Trace" />\n    </xsd:choice>\n  </xsd:complexType>\n\n  <xsd:complexType name="Location">\n    <xsd:complexContent>\n      <xsd:extension base="Location_Backup">\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="Folder">\n    <xsd:all>\n      <xsd:element name="Original" type="xsd:string" />\n      <xsd:element name="New" type="xsd:string" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Synchronize">\n    <xsd:all>\n      <xsd:element name="Source" type="Source" />\n      <xsd:element name="SynchronizeSecurity" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="SkipMembership" />\n            <xsd:enumeration value="CopyAll" />\n            <xsd:enumeration value="IgnoreSecurity" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="ApplyCompression" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element ref="eng100_100:DbStorageLocation"\n        minOccurs="0" />\n      <xsd:element name="Locations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Location" type="Location"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Source">\n    <xsd:all>\n      <xsd:element name="Object" type="ObjectReference" />\n      <xsd:element name="ConnectionString" type="xsd:string" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Attach">\n    <xsd:all>\n      <xsd:element name="Folder" type="xsd:string" />\n      <xsd:element name="Password" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="AllowOverwrite" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element ref="eng100:ReadWriteMode" minOccurs="0">\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Detach">\n    <xsd:all>\n      <xsd:element name="Object" type="ObjectReference" />\n      <xsd:element name="Password" type="xsd:string"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Insert">\n    <xsd:all>\n      <xsd:element name="Object" type="Object" />\n      <xsd:element name="Attributes" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Attribute"\n              type="Attribute_InsertUpdate" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Object">\n    <xsd:all>\n      <xsd:element name="Database" type="xsd:string" />\n      <xsd:element name="Cube" type="xsd:string" />\n      <xsd:element name="Dimension" type="xsd:string" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Attribute_InsertUpdate">\n    <xsd:all>\n      <xsd:element name="AttributeName" type="xsd:string" />\n      <xsd:element name="Name" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Keys" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Key" type="xsd:anySimpleType"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation"\n              type="Translation_InsertUpdate" minOccurs="0"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Value" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CUSTOM_ROLLUP" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="CUSTOM_ROLLUP_PROPERTIES"\n        type="xsd:string" minOccurs="0" />\n      <xsd:element name="UNARY_OPERATOR" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="SKIPPED_LEVELS" type="xsd:integer"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Translation_InsertUpdate">\n    <xsd:all>\n      <xsd:element name="Language" type="xsd:integer" />\n      <xsd:element name="Name" type="xsd:string" minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="Update">\n    <xsd:all>\n      <xsd:element name="Object" type="Object" />\n      <xsd:element name="Attributes" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Attribute"\n              type="Attribute_InsertUpdate" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="MoveWithDescendants"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="MoveToRoot" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="Where" type="Where" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Where">\n    <xsd:all>\n      <xsd:element name="Attribute" type="Where_Attribute" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Where_Attribute">\n    <xsd:all>\n      <xsd:element name="AttributeName" type="xsd:string" />\n      <xsd:element name="Keys" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Key" type="xsd:anySimpleType"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Drop">\n    <xsd:all>\n      <xsd:element name="Object" type="Object" />\n      <xsd:element name="DeleteWithDescendants"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="Where" type="Where" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="UpdateCells">\n    <xsd:sequence>\n      <xsd:element name="Cell" type="Cell" minOccurs="0"\n        maxOccurs="unbounded" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:element name="KeepResult">\n    <xsd:complexType>\n      <xsd:sequence>\n        <!--The KeepResult element MUST be empty -->\n      </xsd:sequence>\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:element name="ClearResult">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element name="ResultId" type="xsd:string" />\n      </xsd:sequence>\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:element name="Result">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element name="ResultId" type="xsd:string" />\n      </xsd:sequence>\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:complexType name="Cell">\n    <xsd:all>\n      <xsd:element name="Value" type="xsd:anySimpleType" />\n    </xsd:all>\n    <xsd:attribute name="CellOrdinal" type="xsd:long" />\n  </xsd:complexType>\n\n  <xsd:complexType name="NotifyTableChange">\n    <xsd:all>\n      <xsd:element name="Object" type="ObjectReference" />\n      <xsd:element name="TableNotifications">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="TableNotification"\n              type="TableNotification" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="Batch">\n    <xsd:sequence>\n      <xsd:element name="Parallel" minOccurs="0"\n        maxOccurs="unbounded">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Process" type="Process"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n          <xsd:attribute name="MaxParallel" type="xsd:int"\n            default="0" />\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Bindings" minOccurs="0"\n        type="OutOfLineBinding" />\n      <xsd:element name="DataSource" minOccurs="0"\n        type="DataSource" />\n      <xsd:element name="DataSourceView" type="DataSourceView"\n        minOccurs="0" />\n      <xsd:element name="ErrorConfiguration"\n        type="ErrorConfiguration" minOccurs="0" />\n      <xsd:element name="Create" type="Create" minOccurs="0"\n        maxOccurs="unbounded" />\n      <xsd:element name="Alter" type="Alter" minOccurs="0"\n        maxOccurs="unbounded" />\n      <xsd:element name="Delete" type="Delete" minOccurs="0"\n        maxOccurs="unbounded" />\n      <xsd:element name="Process" type="Process" minOccurs="0"\n        maxOccurs="unbounded" />\n      <xsd:element name="MergePartitions"\n        type="MergePartitions" minOccurs="0" maxOccurs="unbounded" />\n      <xsd:element name="DesignAggregations"\n        type="DesignAggregations" minOccurs="0" maxOccurs="unbounded" />\n      <xsd:element name="NotifyTableChange"\n        type="NotifyTableChange" minOccurs="0" maxOccurs="unbounded" />\n      <xsd:element name="Insert" minOccurs="0" type="Insert"\n        maxOccurs="unbounded" />\n      <xsd:element name="Update" minOccurs="0" type="Update"\n        maxOccurs="unbounded" />\n      <xsd:element name="Drop" minOccurs="0" type="Drop"\n        maxOccurs="unbounded" />\n      <xsd:element name="UpdateCells" minOccurs="0"\n        type="UpdateCells" maxOccurs="unbounded" />\n      <xsd:element name="Backup" minOccurs="0" type="Backup"\n        maxOccurs="unbounded" />\n      <xsd:element name="Restore" minOccurs="0" type="Restore"\n        maxOccurs="unbounded" />\n      <xsd:element name="Synchronize" minOccurs="0"\n        type="Synchronize" maxOccurs="unbounded" />\n      <xsd:element name="Cancel" minOccurs="0" type="Cancel"\n        maxOccurs="unbounded" />\n      <xsd:element name="BeginTransaction" minOccurs="0"\n        type="BeginTransaction" maxOccurs="unbounded" />\n      <xsd:element name="CommitTransaction" minOccurs="0"\n        type="CommitTransaction" maxOccurs="unbounded" />\n      <xsd:element name="RollbackTransaction" minOccurs="0"\n        type="RollbackTransaction" maxOccurs="unbounded" />\n      <xsd:element name="ClearCache" minOccurs="0"\n        type="ClearCache" maxOccurs="unbounded" />\n      <xsd:element name="Subscribe" minOccurs="0"\n        type="Subscribe" maxOccurs="unbounded" />\n      <xsd:element name="Unsubscribe" minOccurs="0"\n        type="Unsubscribe" maxOccurs="unbounded" />\n      <xsd:element name="Detach" minOccurs="0" type="Detach"\n        maxOccurs="unbounded" />\n      <xsd:element name="Attach" minOccurs="0" type="Attach"\n        maxOccurs="unbounded" />\n      <xsd:element name="Lock" minOccurs="0" type="Lock"\n        maxOccurs="unbounded" />\n      <xsd:element name="Unlock" minOccurs="0" type="Unlock"\n        maxOccurs="unbounded" />\n      <xsd:element name="ImageLoad" minOccurs="0"\n        type="ImageLoad" maxOccurs="unbounded" />\n      <xsd:element name="ImageSave" minOccurs="0"\n        type="ImageSave" maxOccurs="unbounded" />\n      <xsd:element name="CloneDatabase" minOccurs="0"\n        type="CloneDatabase" maxOccurs="unbounded" />\n      <xsd:element name="SetAuthContext" minOccurs="0"\n        type="SetAuthContext" maxOccurs="unbounded" />\n      <xsd:element name="DBCC" type="DBCC" minOccurs="0" />\n      <xsd:element ref="Discover" minOccurs="0"\n        maxOccurs="unbounded" />\n    </xsd:sequence>\n    <xsd:attribute name="Transaction" type="xsd:boolean" />\n    <xsd:attribute name="ProcessAffectedObjects"\n      type="xsd:boolean" />\n  </xsd:complexType>\n\n  <xsd:complexType name="ImageLoad">\n    <xsd:all>\n      <xsd:element ref="eng200_200:ImagePath" minOccurs="0"\n        maxOccurs="1" />\n      <xsd:element ref="eng200_200:ImageUrl" minOccurs="0"\n        maxOccurs="1" />\n      <xsd:element ref="eng200_200:ImageUniqueID" minOccurs="0"\n        maxOccurs="1" />\n      <xsd:element ref="eng200_200:ImageVersion" minOccurs="0"\n        maxOccurs="1" />\n      <xsd:element ref="eng100:ReadWriteMode" minOccurs="1"\n        maxOccurs="1">\n      </xsd:element>\n      <xsd:element ref="eng100_100:DbStorageLocation"\n        minOccurs="0" />\n      <xsd:element name="DatabaseName" type="xsd:string"\n        minOccurs="1" maxOccurs="1" />\n      <xsd:element name="DatabaseID" type="xsd:string"\n        minOccurs="1" maxOccurs="1" />\n      <xsd:element name="Data" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="DataBlock" type="xsd:string"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="ImageSave">\n    <xsd:all>\n      <xsd:element name="Object" type="ObjectReference" />\n      <xsd:element name="Data" type="xsd:boolean" minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="CloneDatabase">\n    <xsd:all>\n      <xsd:element name="Object">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="DatabaseID" type="ObjectReference"\n              minOccurs="1" maxOccurs="1" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Target">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element ref="eng100_100:DbStorageLocation"\n              minOccurs="0" />\n            <xsd:element name="DatabaseName" type="xsd:string"\n              minOccurs="1" maxOccurs="1" />\n            <xsd:element name="DatabaseID" type="xsd:string"\n              minOccurs="1" maxOccurs="1" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="SetAuthContext">\n    <xsd:all>\n      <xsd:element ref="eng200_200:Token" minOccurs="1"\n        maxOccurs="1" />\n      <xsd:element name="DatabaseID" type="xsd:string"\n        minOccurs="1" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="DBCC">\n    <xsd:all>\n      <xsd:element name="Object" type="ObjectReference"\n        minOccurs="0" maxOccurs="1" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="ExecuteParameter">\n    <xsd:all>\n      <xsd:element name="Name" minOccurs="1" type="xsd:string" />\n      <xsd:element name="Value" minOccurs="1"\n        type="xsd:anyType" />\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:element name="ExecuteResponse">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element name="return" minOccurs="1" maxOccurs="1"\n          type="return"></xsd:element>\n      </xsd:sequence>\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:complexType name="return">\n    <xsd:choice>\n      <xsd:element ref="ana-ds:root" />\n      <xsd:element ref="ana-rs:root" />\n      <xsd:element ref="ana-e:root" />\n      <xsd:element ref="ana-m:results" />\n    </xsd:choice>\n  </xsd:complexType>\n\n  <xsd:complexType name="OutOfLineBinding">\n    <xsd:all>\n      <xsd:element name="DatabaseID" minOccurs="0"\n        type="xsd:string" />\n      <xsd:element name="DimensionID" minOccurs="0"\n        type="xsd:string" />\n      <xsd:element name="CubeID" minOccurs="0"\n        type="xsd:string" />\n      <xsd:element name="MeasureGroupID" minOccurs="0"\n        type="xsd:string" />\n      <xsd:element name="PartitionID" minOccurs="0"\n        type="xsd:string" />\n      <xsd:element name="MiningModelID" minOccurs="0"\n        type="xsd:string" />\n      <xsd:element name="MiningStructureID" minOccurs="0"\n        type="xsd:string" />\n      <xsd:element name="AttributeID" minOccurs="0"\n        type="xsd:string" />\n      <xsd:element name="CubeDimensionID" minOccurs="0"\n        type="xsd:string" />\n      <xsd:element name="MeasureID" minOccurs="0"\n        type="xsd:string" />\n      <xsd:element name="ParentColumnID" minOccurs="0"\n        type="xsd:string" />\n      <xsd:element name="ColumnID" minOccurs="0"\n        type="xsd:string" />\n      <xsd:element name="Source" minOccurs="0" type="Binding" />\n      <xsd:element name="NameColumn" minOccurs="0">\n        <xsd:complexType>\n          <xsd:all>\n            <xsd:element name="Source" minOccurs="0"\n              type="Binding" />\n          </xsd:all>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="SkippedLevelsColumn" minOccurs="0">\n        <xsd:complexType>\n          <xsd:all>\n            <xsd:element name="Source" minOccurs="0"\n              type="Binding" />\n          </xsd:all>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="CustomRollupColumn" minOccurs="0">\n        <xsd:complexType>\n          <xsd:all>\n            <xsd:element name="Source" minOccurs="0"\n              type="Binding" />\n          </xsd:all>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="CustomRollupPropertiesColumn"\n        minOccurs="0">\n        <xsd:complexType>\n          <xsd:all>\n            <xsd:element name="Source" minOccurs="0"\n              type="Binding" />\n          </xsd:all>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="ValueColumn" minOccurs="0">\n        <xsd:complexType>\n          <xsd:all>\n            <xsd:element name="Source" minOccurs="0"\n              type="Binding" />\n          </xsd:all>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="UnaryOperatorColumn" minOccurs="0">\n        <xsd:complexType>\n          <xsd:all>\n            <xsd:element name="Source" minOccurs="0"\n              type="Binding" />\n          </xsd:all>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="KeyColumns" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="KeyColumn" minOccurs="0"\n              maxOccurs="unbounded">\n              <xsd:complexType>\n                <xsd:all>\n                  <xsd:element name="Source" minOccurs="0"\n                    type="Binding" />\n                </xsd:all>\n              </xsd:complexType>\n            </xsd:element>\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="ForeignKeyColumns" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="ForeignKeyColumn" minOccurs="0"\n              maxOccurs="unbounded">\n              <xsd:complexType>\n                <xsd:all>\n                  <xsd:element name="Source" minOccurs="0"\n                    type="Binding" />\n                </xsd:all>\n              </xsd:complexType>\n            </xsd:element>\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" minOccurs="0"\n              maxOccurs="unbounded">\n              <xsd:complexType>\n                <xsd:all>\n                  <xsd:element name="Language" type="xsd:int" />\n                  <xsd:element name="Source" minOccurs="0"\n                    type="Binding" />\n                </xsd:all>\n              </xsd:complexType>\n            </xsd:element>\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Binding" abstract="true" />\n  <xsd:complexType name="ColumnBinding">\n    <xsd:complexContent>\n      <xsd:extension base="Binding">\n        <xsd:all>\n          <xsd:element name="TableID" type="xsd:string" />\n          <xsd:element name="ColumnID" type="xsd:string" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="RowBinding">\n    <xsd:complexContent>\n      <xsd:extension base="Binding">\n        <xsd:all>\n          <xsd:element name="TableID" type="xsd:string" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="DataSourceViewBinding">\n    <xsd:complexContent>\n      <xsd:extension base="Binding">\n        <xsd:all>\n          <xsd:element name="DataSourceViewID" type="xsd:string" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="AttributeBinding">\n    <xsd:complexContent>\n      <xsd:extension base="Binding">\n        <xsd:all>\n          <xsd:element name="AttributeID" type="xsd:string" />\n          <xsd:element name="Type">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="All" />\n                <xsd:enumeration value="Key" />\n                <xsd:enumeration value="Name" />\n                <xsd:enumeration value="Value" />\n                <xsd:enumeration value="Translation" />\n                <xsd:enumeration value="UnaryOperator" />\n                <xsd:enumeration value="SkippedLevels" />\n                <xsd:enumeration value="CustomRollup" />\n                <xsd:enumeration value="CustomRollupProperties" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="Ordinal" type="xsd:integer"\n            minOccurs="0" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="UserDefinedGroupBinding">\n    <xsd:complexContent>\n      <xsd:extension base="Binding">\n        <xsd:all>\n          <xsd:element name="AttributeID" type="xsd:string" />\n          <xsd:element name="Groups" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="Group" type="Group" minOccurs="0"\n                  maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="MeasureBinding">\n    <xsd:complexContent>\n      <xsd:extension base="Binding">\n        <xsd:all>\n          <xsd:element name="MeasureID" type="xsd:string" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="Group">\n    <xsd:all>\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="Members" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Member" type="xsd:string"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="CubeAttributeBinding">\n    <xsd:complexContent>\n      <xsd:extension base="Binding">\n        <xsd:all>\n          <xsd:element name="CubeID" type="xsd:string" />\n          <xsd:element name="CubeDimensionID" type="xsd:string" />\n          <xsd:element name="AttributeID" type="xsd:string" />\n          <xsd:element name="Type">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="All" />\n                <xsd:enumeration value="Key" />\n                <xsd:enumeration value="Name" />\n                <xsd:enumeration value="Value" />\n                <xsd:enumeration value="Translation" />\n                <xsd:enumeration value="UnaryOperator" />\n                <xsd:enumeration value="SkippedLevels" />\n                <xsd:enumeration value="CustomRollup" />\n                <xsd:enumeration value="CustomRollupProperties" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="Ordinal" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="Ordinal" type="xsd:integer"\n                  minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="DimensionBinding">\n    <xsd:complexContent>\n      <xsd:extension base="Binding">\n        <xsd:all>\n          <xsd:element name="DataSourceID" type="xsd:string" />\n          <xsd:element name="DimensionID" type="xsd:string" />\n          <xsd:element name="Persistence" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="NotPersisted" />\n                <xsd:enumeration value="Metadata" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="RefreshPolicy" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="ByQuery" />\n                <xsd:enumeration value="ByInterval" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="RefreshInterval" type="xsd:duration"\n            minOccurs="0" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="CubeDimensionBinding">\n    <xsd:complexContent>\n      <xsd:extension base="Binding">\n        <xsd:all>\n          <xsd:element name="DataSourceID" type="xsd:string" />\n          <xsd:element name="CubeID" type="xsd:string" />\n          <xsd:element name="CubeDimensionID" type="xsd:string" />\n          <xsd:element name="Filter" type="xsd:string"\n            minOccurs="0" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="MeasureGroupBinding">\n    <xsd:complexContent>\n      <xsd:extension base="Binding">\n        <xsd:all>\n          <xsd:element name="DataSourceID" type="xsd:string" />\n          <xsd:element name="CubeID" type="xsd:string" />\n          <xsd:element name="MeasureGroupID" type="xsd:string" />\n          <xsd:element name="Persistence" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="NotPersisted" />\n                <xsd:enumeration value="Metadata" />\n                <xsd:enumeration value="All" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="RefreshPolicy" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="ByQuery" />\n                <xsd:enumeration value="ByInterval" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="RefreshInterval" type="xsd:duration"\n            minOccurs="0" />\n          <xsd:element name="Filter" type="xsd:string"\n            minOccurs="0" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="MeasureGroupDimensionBinding">\n    <xsd:complexContent>\n      <xsd:extension base="Binding">\n        <xsd:all>\n          <xsd:element name="CubeDimensionID" type="xsd:string" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="TimeBinding">\n    <xsd:complexContent>\n      <xsd:extension base="Binding">\n        <xsd:all>\n          <xsd:element name="CalendarStartDate"\n            type="xsd:dateTime" />\n          <xsd:element name="CalendarEndDate" type="xsd:dateTime" />\n          <xsd:element name="FirstDayOfWeek " minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:integer">\n                <xsd:minInclusive value="1" />\n                <xsd:maxInclusive value="7" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="CalendarLanguage" type="xsd:integer"\n            minOccurs="0" />\n          <xsd:element name="FiscalFirstMonth" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:integer">\n                <xsd:minInclusive value="1" />\n                <xsd:maxInclusive value="12" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="FiscalFirstDayOfMonth" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:integer">\n                <xsd:minInclusive value="1" />\n                <xsd:maxInclusive value="31" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="FiscalYearName" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="CalendarYearName" />\n                <xsd:enumeration value="NextCalendarYearName" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="ReportingFirstMonth" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:integer">\n                <xsd:minInclusive value="1" />\n                <xsd:maxInclusive value="12" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="ReportingFirstWeekOfMonth"\n            minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="1" />\n                <xsd:enumeration value="2" />\n                <xsd:enumeration value="3" />\n                <xsd:enumeration value="4" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="ReportingWeekToMonthPattern"\n            minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="Weeks445" />\n                <xsd:enumeration value="Weeks454" />\n                <xsd:enumeration value="Weeks544" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="ManufacturingFirstMonth"\n            minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:integer">\n                <xsd:minInclusive value="1" />\n                <xsd:maxInclusive value="12" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name=" ManufacturingFirstWeekOfMonth"\n            minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:integer">\n                <xsd:minInclusive value="1" />\n                <xsd:maxInclusive value="4" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="ManufacturingExtraMonthQuarter"\n            minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:integer">\n                <xsd:minInclusive value="1" />\n                <xsd:maxInclusive value="4" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="TimeAttributeBinding">\n    <xsd:complexContent>\n      <xsd:extension base="Binding" />\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="InheritedBinding">\n    <xsd:complexContent>\n      <xsd:extension base="Binding" />\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="TabularBinding" abstract="true" />\n\n  <xsd:complexType name="TableBinding">\n    <xsd:complexContent>\n      <xsd:extension base="TabularBinding">\n        <xsd:all>\n          <xsd:element name="DataSourceID" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="DbTableName" type="xsd:string" />\n          <xsd:element name="DbSchemaName" type="xsd:string"\n            minOccurs="0" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="QueryBinding">\n    <xsd:complexContent>\n      <xsd:extension base="TabularBinding">\n        <xsd:all>\n          <xsd:element name="DataSourceID" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="QueryDefinition" type="xsd:string" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="DSVTableBinding">\n    <xsd:complexContent>\n      <xsd:extension base="TabularBinding">\n        <xsd:all>\n          <xsd:element name="DataSourceViewID" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="TableID" type="xsd:string" />\n          <xsd:element ref="eng300:DataEmbeddingStyle"\n            minOccurs="0" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="ProactiveCachingBinding"\n    abstract="true" />\n\n  <xsd:complexType\n    name="ProactiveCachingObjectNotificationBinding" abstract="true" />\n\n\n  <xsd:complexType\n    name="ProactiveCachingInheritedBinding">\n    <xsd:complexContent>\n      <xsd:extension\n        base="ProactiveCachingObjectNotificationBinding">\n        <xsd:all>\n          <xsd:element name="NotificationTechnique" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="Client" />\n                <xsd:enumeration value="Server" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="ProactiveCachingTablesBinding">\n    <xsd:complexContent>\n      <xsd:extension\n        base="ProactiveCachingObjectNotificationBinding">\n        <xsd:all>\n          <xsd:element name="NotificationTechnique" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="Client" />\n                <xsd:enumeration value="Server" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="TableNotifications">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="TableNotification"\n                  type="TableNotification" minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="ProactiveCachingQueryBinding">\n    <xsd:complexContent>\n      <xsd:extension base="ProactiveCachingBinding">\n        <xsd:all>\n          <xsd:element name="RefreshInterval" type="xsd:duration" />\n          <xsd:element name="QueryNotifications">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="QueryNotification"\n                  type="QueryNotification" minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="QueryNotification">\n    <xsd:all>\n      <xsd:element name="Query" type="xsd:string" />\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType\n    name="ProactiveCachingIncrementalProcessingBinding">\n    <xsd:complexContent>\n      <xsd:extension base="ProactiveCachingBinding">\n        <xsd:all>\n          <xsd:element name="RefreshInterval" type="xsd:duration"\n            minOccurs="0" />\n          <xsd:element name="IncrementalProcessingNotifications">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element\n                  name="IncrementalProcessingNotification"\n                  type="IncrementalProcessingNotification" minOccurs="0"\n                  maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType\n    name="IncrementalProcessingNotification">\n    <xsd:all>\n      <xsd:element name="TableID" type="xsd:string" />\n      <xsd:element name="ProcessingQuery" type="xsd:string" />\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="TableNotification">\n    <xsd:all>\n      <xsd:element name="DbTableName" type="xsd:string" />\n      <xsd:element name="DbSchemaName" type="xsd:string"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="CalculatedMeasureBinding">\n    <xsd:complexContent>\n      <xsd:extension base="Binding">\n        <xsd:all>\n          <xsd:element name="MeasureName" type="xsd:string" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="Permission">\n    <xsd:sequence>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for Permission object -->\n      <xsd:element name="RoleID" type="xsd:string" />\n      <xsd:element name="Process" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="ReadDefinition" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="Basic" />\n            <xsd:enumeration value="Allowed" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Read" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="Allowed" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="CubeDimensionPermission">\n    <xsd:all>\n      <xsd:element name="CubeDimensionID" type="xsd:string" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Read" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="Allowed" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Write" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="Allowed" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="AttributePermissions" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="AttributePermission"\n              type="AttributePermission" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="AttributePermission">\n    <xsd:all>\n      <xsd:element name="AttributeID" type="xsd:string" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DefaultMember" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="VisualTotals" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="AllowedSet" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DeniedSet" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="CellPermission">\n    <xsd:all>\n      <xsd:element name="Access">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Read" />\n            <xsd:enumeration value="ReadContingent" />\n            <xsd:enumeration value="ReadWrite" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Expression" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="DatabasePermission">\n    <xsd:complexContent>\n      <xsd:extension base="Permission">\n        <xsd:sequence>\n          <xsd:element name="Administer" type="xsd:boolean"\n            minOccurs="0" />\n          <xsd:element name="Write" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="None" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n        </xsd:sequence>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="DataSourcePermission">\n    <xsd:complexContent>\n      <xsd:extension base="Permission">\n        <xsd:sequence>\n          <!--Extended elements for DataSourcePermission object -->\n          <xsd:element name="Write" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="None" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n        </xsd:sequence>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="DimensionPermission">\n    <xsd:complexContent>\n      <xsd:extension base="Permission">\n        <xsd:sequence>\n          <!--Extended elements for DimensionPermission object -->\n          <xsd:element name="AttributePermissions" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="AttributePermission"\n                  type="AttributePermission" minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <xsd:element name="Write" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="None" />\n                <xsd:enumeration value="Allowed" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element ref="eng300_300:AllowedRowsExpression"\n            minOccurs="0" />\n        </xsd:sequence>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:element name="AllowedRowsExpression" type="xsd:string" />\n\n  <xsd:complexType name="MiningStructurePermission">\n    <xsd:complexContent>\n      <xsd:extension base="Permission">\n        <xsd:sequence>\n          <!--Extended elements for MiningStructurePermission object -->\n          <xsd:element name="AllowDrillThrough"\n            type="xsd:boolean" minOccurs="0" />\n          <xsd:element name="Write" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="None" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n        </xsd:sequence>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="MiningModelPermission">\n    <xsd:complexContent>\n      <xsd:extension base="Permission">\n        <xsd:sequence>\n          <!--Extended elements for MiningModelPermission object -->\n          <xsd:element name="AllowDrillThrough"\n            type="xsd:boolean" minOccurs="0" />\n          <xsd:element name="AllowBrowsing" type="xsd:boolean"\n            minOccurs="0" />\n          <xsd:element name="Write" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="None" />\n                <xsd:enumeration value="Allowed" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n        </xsd:sequence>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="CubePermission">\n    <xsd:complexContent>\n      <xsd:extension base="Permission">\n        <xsd:sequence>\n          <!--Extended elements for CubePermission object -->\n          <xsd:element name="ReadSourceData" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="None" />\n                <xsd:enumeration value="Allowed" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="DimensionPermissions" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="DimensionPermission"\n                  type="CubeDimensionPermission" minOccurs="0"\n                  maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <xsd:element name="CellPermissions" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="CellPermission"\n                  type="CellPermission" minOccurs="0" maxOccurs="3" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <xsd:element name="Write" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="None" />\n                <xsd:enumeration value="Allowed" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n        </xsd:sequence>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="Role">\n    <xsd:all>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for Role object -->\n      <xsd:element name="Members" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Member" type="Member" minOccurs="0"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="Member">\n    <xsd:all>\n      <xsd:element name="Name" minOccurs="0" type="xsd:string" />\n      <xsd:element name="Sid" minOccurs="0" type="xsd:string" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="ProactiveCaching">\n    <xsd:all>\n      <xsd:element name="OnlineMode" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Immediate" />\n            <xsd:enumeration value="OnCacheComplete" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="AggregationStorage" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Regular" />\n            <xsd:enumeration value="MolapOnly" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Source" type="ProactiveCachingBinding"\n        minOccurs="0" />\n      <xsd:element name="SilenceInterval" type="xsd:duration"\n        minOccurs="0" />\n      <xsd:element name="Latency" type="xsd:duration"\n        minOccurs="0" />\n      <xsd:element name="SilenceOverrideInterval"\n        type="xsd:duration" minOccurs="0" />\n      <xsd:element name="ForceRebuildInterval"\n        type="xsd:duration" minOccurs="0" />\n      <xsd:element name="Enabled" type="xsd:boolean"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="ErrorConfiguration">\n    <xsd:all>\n      <xsd:element name="KeyErrorLimit" type="xsd:long"\n        minOccurs="0" />\n      <xsd:element name="KeyErrorLogFile" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="KeyErrorAction" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="ConvertToUnknown" />\n            <xsd:enumeration value="DiscardRecord" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="KeyErrorLimitAction" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="StopProcessing" />\n            <xsd:enumeration value="StopLogging" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="KeyNotFound" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="IgnoreError" />\n            <xsd:enumeration value="ReportAndContinue" />\n            <xsd:enumeration value="ReportAndStop" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="KeyDuplicate" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="IgnoreError" />\n            <xsd:enumeration value="ReportAndContinue" />\n            <xsd:enumeration value="ReportAndStop" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="NullKeyConvertedToUnknown"\n        minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="IgnoreError" />\n            <xsd:enumeration value="ReportAndContinue" />\n            <xsd:enumeration value="ReportAndStop" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="NullKeyNotAllowed" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="IgnoreError" />\n            <xsd:enumeration value="ReportAndContinue" />\n            <xsd:enumeration value="ReportAndStop" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element ref="eng200:CalculationError" minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Trace_Definition_ProviderInfo">\n    <xsd:sequence>\n      <xsd:element name="Data">\n        <xsd:complexType>\n          <xsd:all>\n            <xsd:element name="Name" type="xsd:string" />\n            <xsd:element name="Version">\n              <xsd:complexType>\n                <xsd:all>\n                  <xsd:element name="Major" type="xsd:string"\n                    minOccurs="0" />\n                  <xsd:element name="Minor" type="xsd:string"\n                    minOccurs="0" />\n                  <xsd:element name="BuildNumber" type="xsd:string"\n                    minOccurs="0" />\n                </xsd:all>\n              </xsd:complexType>\n            </xsd:element>\n            <xsd:element name="Type" type="xsd:string"\n              minOccurs="0" />\n            <xsd:element name="Description" type="xsd:string"\n              minOccurs="0" />\n          </xsd:all>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="Trace_Event_Categories">\n    <xsd:sequence>\n      <xsd:element name="Data">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="EventCategory">\n              <xsd:complexType>\n                <xsd:all>\n                  <xsd:element name="Name" type="xsd:string" />\n                  <xsd:element name="Type" type="xsd:string"\n                    minOccurs="0" />\n                  <xsd:element name="Description" type="xsd:string"\n                    minOccurs="0" />\n                  <xsd:element name="EventList">\n                    <xsd:complexType>\n                      <xsd:sequence>\n                        <xsd:element name="Event" type="TraceEvent"\n                          minOccurs="0" maxOccurs="unbounded" />\n                      </xsd:sequence>\n                    </xsd:complexType>\n                  </xsd:element>\n                </xsd:all>\n              </xsd:complexType>\n            </xsd:element>\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="TraceEvent">\n    <xsd:all>\n      <xsd:element name="ID" type="xsd:integer" />\n      <xsd:element name="Name" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="EventColumnList">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="EventColumn" type="EventColumn"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="EventColumn">\n    <xsd:all>\n      <xsd:element name="ID" type="xsd:integer" />\n      <xsd:element name="EventColumnSubclassList" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="EventColumnSubclass" minOccurs="0"\n              maxOccurs="unbounded">\n              <xsd:complexType>\n                <xsd:all>\n                  <xsd:element name="ID" type="xsd:integer" />\n                  <xsd:element name="name" type="xsd:string" />\n                </xsd:all>\n              </xsd:complexType>\n            </xsd:element>\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Trace_Columns">\n    <xsd:sequence>\n      <xsd:element name="Data">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Column">\n              <xsd:complexType>\n                <xsd:all>\n                  <xsd:element name="ID" type="xsd:integer" />\n                  <xsd:element name="Type" type="xsd:integer" />\n                  <xsd:element name="Name" type="xsd:string" />\n                  <xsd:element name="Description" type="xsd:string"\n                    minOccurs="0" />\n                  <xsd:element name="Filterable" type="xsd:boolean" />\n                  <xsd:element name="Repeatable" type="xsd:boolean" />\n                  <xsd:element name="RepeatedBase" type="xsd:boolean" />\n                </xsd:all>\n              </xsd:complexType>\n            </xsd:element>\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="Annotation">\n    <xsd:all>\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="Visibility" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="SchemaRowset" />\n            <xsd:enumeration value="None" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Value" type="xsd:anyType"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="DataSource" abstract="true">\n    <xsd:all>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for DataSource object -->\n      <xsd:element name="ManagedProvider" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="ConnectionString" type="xsd:string" />\n      <xsd:element name="ConnectionStringSecurity"\n        minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="PasswordRemoved" />\n            <xsd:enumeration value="Unchanged" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="ImpersonationInfo"\n        type="eng:ImpersonationInfo" minOccurs="0" />\n      <xsd:element name="Isolation" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="ReadCommitted" />\n            <xsd:enumeration value="Snapshot" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="MaxActiveConnections"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="Timeout" type="xsd:duration"\n        minOccurs="0" />\n      <xsd:element name="DataSourcePermissions" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="DataSourcePermission"\n              type="DataSourcePermission" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element ref="eng300:QueryImpersonationInfo"\n        minOccurs="0" />\n      <xsd:element ref="eng300:QueryHints" minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="RelationalDataSource">\n    <xsd:complexContent>\n      <xsd:extension base="DataSource" />\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="OlapDataSource">\n    <xsd:complexContent>\n      <xsd:extension base="DataSource" />\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="PushedDataSource">\n    <xsd:all>\n      <xsd:element name="root">\n        <xsd:complexType>\n          <xsd:attribute name="Parameter">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="InputRowset" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:attribute>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="EndOfData">\n        <xsd:complexType>\n          <xsd:attribute name="Parameter">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="EndOfInputRowset" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:attribute>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="Dimension">\n    <xsd:all>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for Dimension object -->\n      <xsd:element name="Source" minOccurs="0" type="Binding" />\n      <xsd:element name="MiningModelID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Type" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Regular" />\n            <xsd:enumeration value="Time" />\n            <xsd:enumeration value="Geography" />\n            <xsd:enumeration value="Organization" />\n            <xsd:enumeration value="BillOfMaterials" />\n            <xsd:enumeration value="Accounts" />\n            <xsd:enumeration value="Customers" />\n            <xsd:enumeration value="Products" />\n            <xsd:enumeration value="Scenario" />\n            <xsd:enumeration value="Quantitative" />\n            <xsd:enumeration value="Utility" />\n            <xsd:enumeration value="Currency" />\n            <xsd:enumeration value="Rates" />\n            <xsd:enumeration value="Channel" />\n            <xsd:enumeration value="Promotion" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="UnknownMember" minOccurs="0">\n        <xsd:complexType>\n          <xsd:simpleContent>\n            <xsd:extension base="UnknownMemberEnumType">\n              <xsd:attribute name="valuens">\n                <xsd:simpleType>\n                  <xsd:restriction base="xsd:string">\n                    <xsd:enumeration\n                      value="http://schemas.microsoft.com/analysisservices/2010/engine/200/200" />\n                  </xsd:restriction>\n                </xsd:simpleType>\n              </xsd:attribute>\n            </xsd:extension>\n          </xsd:simpleContent>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="MdxMissingMemberMode" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Default" />\n            <xsd:enumeration value="Ignore" />\n            <xsd:enumeration value="Error" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="ErrorConfiguration"\n        type="ErrorConfiguration" minOccurs="0" />\n      <xsd:element name="StorageMode">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Molap" />\n            <xsd:enumeration value="Rolap" />\n            <xsd:enumeration value="InMemory" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="WriteEnabled" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="ProcessingPriority" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="LastProcessed" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="DimensionPermissions" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="DimensionPermission"\n              type="DimensionPermission" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="DependsOnDimensionID"\n        type="xsd:string" minOccurs="0" />\n      <xsd:element name="Language" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="Collation" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="UnknownMemberName" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="UnknownMemberTranslations"\n        minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="UnknownMemberTranslation"\n              type="Translation" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="State" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Processed" />\n            <xsd:enumeration value="Unprocessed" />\n            <xsd:enumeration value="PartiallyProcessed" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="ProactiveCaching"\n        type="ProactiveCaching" minOccurs="0" />\n      <xsd:element name="ProcessingMode" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Regular" />\n            <xsd:enumeration value="LazyAggregations" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="ProcessingGroup" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="ByAttribute" />\n            <xsd:enumeration value="ByTable" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="CurrentStorageMode" minOccurs="0">\n        <xsd:complexType>\n          <xsd:simpleContent>\n            <xsd:extension\n              base="DimensionCurrentStorageModeEnumType">\n              <xsd:attribute name="valuens">\n                <xsd:simpleType>\n                  <xsd:restriction base="xsd:string">\n                    <xsd:enumeration\n                      value="http://schemas.microsoft.com/analysisservices/2010/engine/200/200" />\n                  </xsd:restriction>\n                </xsd:simpleType>\n              </xsd:attribute>\n            </xsd:extension>\n          </xsd:simpleContent>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Attributes" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Attribute"\n              type="DimensionAttribute" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="AttributeAllMemberName"\n        type="xsd:string" minOccurs="0" />\n      <xsd:element name="AttributeAllMemberTranslations"\n        minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="MemberAllMemberTranslation"\n              type="Translation" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Hierarchies" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Hierarchy" type="Hierarchy"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element ref="eng200_200:ProcessingRecommendation"\n        minOccurs="0" />\n      <xsd:element name="Relationships"\n        type="eng300_300:Relationships" minOccurs="0" maxOccurs="1" />\n      <xsd:element ref="eng300:StringStoresCompatibilityLevel"\n        minOccurs="0" />\n      <xsd:element\n        ref="eng300:CurrentStringStoresCompatibilityLevel" minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n  <xsd:simpleType\n    name="DimensionCurrentStorageModeEnumType">\n    <xsd:restriction base="xsd:string">\n      <xsd:enumeration value="Molap" />\n      <xsd:enumeration value="InMemory" />\n      <xsd:enumeration value="Rolap" />\n    </xsd:restriction>\n  </xsd:simpleType>\n  <xsd:simpleType name="UnknownMemberEnumType">\n    <xsd:restriction base="xsd:string">\n      <xsd:enumeration value="Visible" />\n      <xsd:enumeration value="Hidden" />\n      <xsd:enumeration value="None" />\n      <xsd:enumeration value="AutomaticNull" />\n    </xsd:restriction>\n  </xsd:simpleType>\n\n\n  <xsd:complexType name="DimensionAttribute">\n    <xsd:all>\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Type" minOccurs="0">\n        <xsd:complexType>\n          <xsd:simpleContent>\n            <xsd:extension base="DimensionAttributeTypeEnumType">\n              <xsd:attribute name="valuens">\n                <xsd:simpleType>\n                  <xsd:restriction base="xsd:string">\n                    <xsd:enumeration\n                      value="http://schemas.microsoft.com/analysisservices/2010/engine/200/200" />\n                  </xsd:restriction>\n                </xsd:simpleType>\n              </xsd:attribute>\n            </xsd:extension>\n          </xsd:simpleContent>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Usage" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Regular" />\n            <xsd:enumeration value="Key" />\n            <xsd:enumeration value="Parent" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Source" type="Binding" minOccurs="0" />\n      <xsd:element name="EstimatedCount" type="xsd:long"\n        minOccurs="0" />\n      <xsd:element name="KeyColumns">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="KeyColumn" type="DataItem"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="NameColumn" type="DataItem"\n        minOccurs="0" />\n      <xsd:element name="ValueColumn" type="DataItem"\n        minOccurs="0" />\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation"\n              type="AttributeTranslation" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="AttributeRelationships" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="AttributeRelationship"\n              type="AttributeRelationship" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="DiscretizationMethod" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="Automatic" />\n            <xsd:enumeration value="EqualAreas" />\n            <xsd:enumeration value="Clusters" />\n            <xsd:enumeration value="Thresholds" />\n            <xsd:enumeration value="UserDefined" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DiscretizationBucketCount"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="RootMemberIf" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration\n              value="ParentIsBlankSelfOrMissing" />\n            <xsd:enumeration value="ParentIsBlank" />\n            <xsd:enumeration value="ParentIsSelf" />\n            <xsd:enumeration value="ParentIsMissing" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="OrderBy" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Key" />\n            <xsd:enumeration value="Name" />\n            <xsd:enumeration value="AttributeKey" />\n            <xsd:enumeration value="AttributeName" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DefaultMember" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="OrderByAttributeID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="SkippedLevelsColumn" type="DataItem"\n        minOccurs="0" />\n      <xsd:element name="NamingTemplate" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="MembersWithData" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="NonLeafDataHidden" />\n            <xsd:enumeration value="NonLeafDataVisible" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="MembersWithDataCaption"\n        type="xsd:string" minOccurs="0" />\n      <xsd:element name="NamingTemplateTranslations"\n        minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="NamingTemplateTranslation"\n              type="Translation" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="CustomRollupColumn" type="DataItem"\n        minOccurs="0" />\n      <xsd:element name="CustomRollupPropertiesColumn"\n        type="DataItem" minOccurs="0" />\n      <xsd:element name="UnaryOperatorColumn" type="DataItem"\n        minOccurs="0" />\n      <xsd:element name="AttributeHierarchyOrdered"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="MemberNamesUnique" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="IsAggregatable" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="AttributeHierarchyEnabled"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="AttributeHierarchyOptimizedState"\n        minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="FullyOptimized" />\n            <xsd:enumeration value="NotOptimized" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="AttributeHierarchyVisible"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="AttributeHierarchyDisplayFolder"\n        type="xsd:string" minOccurs="0" />\n      <xsd:element name="KeyUniquenessGuarantee"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="GroupingBehavior" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="EncourageGrouping" />\n            <xsd:enumeration value="DiscourageGrouping" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="InstanceSelection" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="DropDown" />\n            <xsd:enumeration value="List" />\n            <xsd:enumeration value="FilteredList" />\n            <xsd:enumeration value="MandatoryFilter" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="ProcessingState" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Processed" />\n            <xsd:enumeration value="Unprocessed" />\n            <xsd:enumeration value="InvalidExpression" />\n            <xsd:enumeration value="CalculationError" />\n            <xsd:enumeration value="DependencyError" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="AttributeHierarchyProcessingState"\n        type="eng300:AttributeHierarchyProcessingState" minOccurs="0" />\n      <xsd:element name="VisualizationProperties"\n        type="eng300:DimensionAttributeVisualizationProperties"\n        minOccurs="0" maxOccurs="1" />\n      <xsd:element name="ExtendedType" type="xsd:string"\n        minOccurs="0" maxOccurs="1" />\n    </xsd:all>\n  </xsd:complexType>\n  <xsd:simpleType name="DimensionAttributeTypeEnumType">\n    <xsd:restriction base="xsd:string">\n      <xsd:enumeration value="Account" />\n      <xsd:enumeration value="AccountName" />\n      <xsd:enumeration value="AccountNumber" />\n      <xsd:enumeration value="AccountType" />\n      <xsd:enumeration value="Address" />\n      <xsd:enumeration value="AddressBuilding" />\n      <xsd:enumeration value="AddressCity" />\n      <xsd:enumeration value="AddressCountry" />\n      <xsd:enumeration value="AddressFax" />\n      <xsd:enumeration value="AddressFloor" />\n      <xsd:enumeration value="AddressHouse" />\n      <xsd:enumeration value="AddressPhone" />\n      <xsd:enumeration value="AddressQuarter" />\n      <xsd:enumeration value="AddressRoom" />\n      <xsd:enumeration value="AddressStateOrProvince" />\n      <xsd:enumeration value="AddressStreet" />\n      <xsd:enumeration value="AddressZip" />\n      <xsd:enumeration value="BomResource" />\n      <xsd:enumeration value="Caption" />\n      <xsd:enumeration value="CaptionAbbreviation" />\n      <xsd:enumeration value="CaptionDescription" />\n      <xsd:enumeration value="Channel" />\n      <xsd:enumeration value="City" />\n      <xsd:enumeration value="Company" />\n      <xsd:enumeration value="Continent" />\n      <xsd:enumeration value="Country" />\n      <xsd:enumeration value="County" />\n      <xsd:enumeration value="CurrencyDestination" />\n      <xsd:enumeration value="CurrencyIsoCode" />\n      <xsd:enumeration value="CurrencyName" />\n      <xsd:enumeration value="CurrencySource" />\n      <xsd:enumeration value="CustomerGroup" />\n      <xsd:enumeration value="CustomerHousehold" />\n      <xsd:enumeration value="Customers" />\n      <xsd:enumeration value="Date" />\n      <xsd:enumeration value="DateCanceled" />\n      <xsd:enumeration value="DateDuration" />\n      <xsd:enumeration value="DateEnded" />\n      <xsd:enumeration value="DateModified" />\n      <xsd:enumeration value="DateStart" />\n      <xsd:enumeration value="DayOfHalfYear" />\n      <xsd:enumeration value="DayOfMonth" />\n      <xsd:enumeration value="DayOfQuarter" />\n      <xsd:enumeration value="DayOfTenDays" />\n      <xsd:enumeration value="DayOfTrimester" />\n      <xsd:enumeration value="DayOfWeek" />\n      <xsd:enumeration value="DayOfYear" />\n      <xsd:enumeration value="Days" />\n      <xsd:enumeration value="DeletedFlag" />\n      <xsd:enumeration value="ExtendedType" />\n      <xsd:enumeration value="FiscalDate" />\n      <xsd:enumeration value="FiscalDayOfHalfYear" />\n      <xsd:enumeration value="FiscalDayOfMonth" />\n      <xsd:enumeration value="FiscalDayOfQuarter" />\n      <xsd:enumeration value="FiscalDayOfTrimester" />\n      <xsd:enumeration value="FiscalDayOfWeek" />\n      <xsd:enumeration value="FiscalDayOfYear" />\n      <xsd:enumeration value="FiscalHalfYears" />\n      <xsd:enumeration value="FiscalHalfYearOfYear" />\n      <xsd:enumeration value="FiscalMonths" />\n      <xsd:enumeration value="FiscalMonthOfHalfYear" />\n      <xsd:enumeration value="FiscalMonthOfQuarter" />\n      <xsd:enumeration value="FiscalMonthOfTrimester" />\n      <xsd:enumeration value="FiscalMonthOfYear" />\n      <xsd:enumeration value="FiscalQuarters" />\n      <xsd:enumeration value="FiscalQuarterOfHalfYear" />\n      <xsd:enumeration value="FiscalQuarterOfYear" />\n      <xsd:enumeration value="FiscalTrimesters" />\n      <xsd:enumeration value="FiscalTrimesterOfYear" />\n      <xsd:enumeration value="FiscalWeeks" />\n      <xsd:enumeration value="FiscalWeekOfHalfYear" />\n      <xsd:enumeration value="FiscalWeekOfMonth" />\n      <xsd:enumeration value="FiscalWeekOfQuarter" />\n      <xsd:enumeration value="FiscalWeekOfTrimester" />\n      <xsd:enumeration value="FiscalWeekOfYear" />\n      <xsd:enumeration value="FiscalYears" />\n      <xsd:enumeration value="FormattingColor" />\n      <xsd:enumeration value="FormattingFont" />\n      <xsd:enumeration value="FormattingFontEffects" />\n      <xsd:enumeration value="FormattingFontSize" />\n      <xsd:enumeration value="FormattingOrder" />\n      <xsd:enumeration value="FormattingSubtotal" />\n      <xsd:enumeration value="GeoBoundaryBottom" />\n      <xsd:enumeration value="GeoBoundaryFront" />\n      <xsd:enumeration value="GeoBoundaryLeft" />\n      <xsd:enumeration value="GeoBoundaryPolygon" />\n      <xsd:enumeration value="GeoBoundaryRear" />\n      <xsd:enumeration value="GeoBoundaryRight" />\n      <xsd:enumeration value="GeoBoundaryTop" />\n      <xsd:enumeration value="GeoCentroidX" />\n      <xsd:enumeration value="GeoCentroidY" />\n      <xsd:enumeration value="GeoCentroidZ" />\n      <xsd:enumeration value="HalfYears" />\n      <xsd:enumeration value="HalfYearOfYear" />\n      <xsd:enumeration value="Hours" />\n      <xsd:enumeration value="ID" />\n      <xsd:enumeration value="Image" />\n      <xsd:enumeration value="ImageBmp" />\n      <xsd:enumeration value="ImageGif" />\n      <xsd:enumeration value="ImageJpg" />\n      <xsd:enumeration value="ImagePng" />\n      <xsd:enumeration value="ImageTiff" />\n      <xsd:enumeration value="ImageUrl" />\n      <xsd:enumeration value="IsHoliday" />\n      <xsd:enumeration value="Iso8601Date" />\n      <xsd:enumeration value="Iso8601DayOfWeek" />\n      <xsd:enumeration value="Iso8601DayOfYear" />\n      <xsd:enumeration value="Iso8601Weeks" />\n      <xsd:enumeration value="Iso8601WeekOfYear" />\n      <xsd:enumeration value="Iso8601Years" />\n      <xsd:enumeration value="IsPeakDay" />\n      <xsd:enumeration value="IsWeekDay" />\n      <xsd:enumeration value="IsWorkingDay" />\n      <xsd:enumeration value="ManufacturingDate" />\n      <xsd:enumeration value="ManufacturingDayOfHalfYear" />\n      <xsd:enumeration value="ManufacturingDayOfMonth" />\n      <xsd:enumeration value="ManufacturingDayOfQuarter" />\n      <xsd:enumeration value="ManufacturingDayOfWeek" />\n      <xsd:enumeration value="ManufacturingDayOfYear" />\n      <xsd:enumeration value="ManufacturingHalfYears" />\n      <xsd:enumeration value="ManufacturingHalfYearOfYear" />\n      <xsd:enumeration value="ManufacturingMonths" />\n      <xsd:enumeration value="ManufacturingMonthOfHalfYear" />\n      <xsd:enumeration value="ManufacturingMonthOfQuarter" />\n      <xsd:enumeration value="ManufacturingMonthOfYear" />\n      <xsd:enumeration value="ManufacturingQuarters" />\n      <xsd:enumeration\n        value="ManufacturingQuarterOfHalfYear" />\n      <xsd:enumeration value="ManufacturingQuarterOfYear" />\n      <xsd:enumeration value="ManufacturingWeeks" />\n      <xsd:enumeration value="ManufacturingWeekOfHalfYear" />\n      <xsd:enumeration value="ManufacturingWeekOfMonth" />\n      <xsd:enumeration value="ManufacturingWeekOfQuarter" />\n      <xsd:enumeration value="ManufacturingWeekOfYear" />\n      <xsd:enumeration value="ManufacturingYears" />\n      <xsd:enumeration value="Minutes" />\n      <xsd:enumeration value="Months" />\n      <xsd:enumeration value="MonthOfHalfYear" />\n      <xsd:enumeration value="MonthOfQuarter" />\n      <xsd:enumeration value="MonthOfTrimester" />\n      <xsd:enumeration value="MonthOfYear" />\n      <xsd:enumeration value="OrganizationalUnit" />\n      <xsd:enumeration value="OrgTitle" />\n      <xsd:enumeration value="PercentOwnership" />\n      <xsd:enumeration value="PercentVoteRight" />\n      <xsd:enumeration value="Person" />\n      <xsd:enumeration value="PersonContact" />\n      <xsd:enumeration value="PersonDemographic" />\n      <xsd:enumeration value="PersonFirstName" />\n      <xsd:enumeration value="PersonFullName" />\n      <xsd:enumeration value="PersonLastName" />\n      <xsd:enumeration value="PersonMiddleName" />\n      <xsd:enumeration value="PhysicalColor" />\n      <xsd:enumeration value="PhysicalDensity" />\n      <xsd:enumeration value="PhysicalDepth" />\n      <xsd:enumeration value="PhysicalHeight" />\n      <xsd:enumeration value="PhysicalSize" />\n      <xsd:enumeration value="PhysicalVolume" />\n      <xsd:enumeration value="PhysicalWeight" />\n      <xsd:enumeration value="PhysicalWidth" />\n      <xsd:enumeration value="Point" />\n      <xsd:enumeration value="PostalCode" />\n      <xsd:enumeration value="Product" />\n      <xsd:enumeration value="ProductBrand" />\n      <xsd:enumeration value="ProductCategory" />\n      <xsd:enumeration value="ProductGroup" />\n      <xsd:enumeration value="ProductSKU" />\n      <xsd:enumeration value="Project" />\n      <xsd:enumeration value="ProjectCode" />\n      <xsd:enumeration value="ProjectCompletion" />\n      <xsd:enumeration value="ProjectEndDate" />\n      <xsd:enumeration value="ProjectName" />\n      <xsd:enumeration value="ProjectStartDate" />\n      <xsd:enumeration value="Promotion" />\n      <xsd:enumeration value="QtyRangeHigh" />\n      <xsd:enumeration value="QtyRangeLow" />\n      <xsd:enumeration value="Quantitative" />\n      <xsd:enumeration value="Quarters" />\n      <xsd:enumeration value="QuarterOfHalfYear" />\n      <xsd:enumeration value="QuarterOfYear" />\n      <xsd:enumeration value="Rate" />\n      <xsd:enumeration value="RateType" />\n      <xsd:enumeration value="Region" />\n      <xsd:enumeration value="Regular" />\n      <xsd:enumeration value="RelationToParent" />\n      <xsd:enumeration value="ReportingDate" />\n      <xsd:enumeration value="ReportingDayOfHalfYear" />\n      <xsd:enumeration value="ReportingDayOfMonth" />\n      <xsd:enumeration value="ReportingDayOfQuarter" />\n      <xsd:enumeration value="ReportingDayOfTrimester" />\n      <xsd:enumeration value="ReportingDayOfWeek" />\n      <xsd:enumeration value="ReportingDayOfYear" />\n      <xsd:enumeration value="ReportingHalfYears" />\n      <xsd:enumeration value="ReportingHalfYearOfYear" />\n      <xsd:enumeration value="ReportingMonths" />\n      <xsd:enumeration value="ReportingMonthOfHalfYear" />\n      <xsd:enumeration value="ReportingMonthOfQuarter" />\n      <xsd:enumeration value="ReportingMonthOfTrimester" />\n      <xsd:enumeration value="ReportingMonthOfYear" />\n      <xsd:enumeration value="ReportingQuarters" />\n      <xsd:enumeration value="ReportingQuarterOfHalfYear" />\n      <xsd:enumeration value="ReportingQuarterOfYear" />\n      <xsd:enumeration value="ReportingTrimesters" />\n      <xsd:enumeration value="ReportingTrimesterOfYear" />\n      <xsd:enumeration value="ReportingWeeks" />\n      <xsd:enumeration value="ReportingWeekOfHalfYear" />\n      <xsd:enumeration value="ReportingWeekOfMonth" />\n      <xsd:enumeration value="ReportingWeekOfQuarter" />\n      <xsd:enumeration value="ReportingWeekOfTrimester" />\n      <xsd:enumeration value="ReportingWeekOfYear" />\n      <xsd:enumeration value="ReportingYears" />\n      <xsd:enumeration value="Representative" />\n      <xsd:enumeration value="RowNumber" />\n      <xsd:enumeration value="ScdEndDate" />\n      <xsd:enumeration value="ScdOriginalID" />\n      <xsd:enumeration value="ScdStartDate" />\n      <xsd:enumeration value="ScdStatus" />\n      <xsd:enumeration value="Scenario" />\n      <xsd:enumeration value="Seconds" />\n      <xsd:enumeration value="Sequence" />\n      <xsd:enumeration value="ShortCaption" />\n      <xsd:enumeration value="StateOrProvince" />\n      <xsd:enumeration value="TenDay" />\n      <xsd:enumeration value="TenDayOfHalfYear" />\n      <xsd:enumeration value="TenDayOfMonth" />\n      <xsd:enumeration value="TenDayOfQuarter" />\n      <xsd:enumeration value="TenDayOfTrimester" />\n      <xsd:enumeration value="TenDayOfYear" />\n      <xsd:enumeration value="Trimesters" />\n      <xsd:enumeration value="TrimesterOfYear" />\n      <xsd:enumeration value="UndefinedTime" />\n      <xsd:enumeration value="Utility" />\n      <xsd:enumeration value="Version" />\n      <xsd:enumeration value="WebHtml" />\n      <xsd:enumeration value="WebMailAlias" />\n      <xsd:enumeration value="WebUrl" />\n      <xsd:enumeration value="WebXmlOrXsl" />\n      <xsd:enumeration value="WeekOfYear" />\n      <xsd:enumeration value="Weeks" />\n      <xsd:enumeration value="WinterSummerSeason" />\n      <xsd:enumeration value="Years" />\n    </xsd:restriction>\n  </xsd:simpleType>\n\n  <xsd:complexType name="DataItem">\n    <xsd:all>\n      <xsd:element name="DataType">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="WChar" />\n            <xsd:enumeration value="Integer" />\n            <xsd:enumeration value="BigInt" />\n            <xsd:enumeration value="Single" />\n            <xsd:enumeration value="Double" />\n            <xsd:enumeration value="Date" />\n            <xsd:enumeration value="Currency" />\n            <xsd:enumeration value="UnsignedTinyInt" />\n            <xsd:enumeration value="UnsignedSmallInt" />\n            <xsd:enumeration value="UnsignedInt" />\n            <xsd:enumeration value="UnsignedBigInt" />\n            <xsd:enumeration value="Bool" />\n            <xsd:enumeration value="Smallint" />\n            <xsd:enumeration value="Tinyint" />\n            <xsd:enumeration value="Binary" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DataSize" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="MimeType" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="NullProcessing" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Preserve" />\n            <xsd:enumeration value="Error" />\n            <xsd:enumeration value="UnknownMember" />\n            <xsd:enumeration value="ZeroOrBlank" />\n            <xsd:enumeration value="Automatic" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Trimming" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Left" />\n            <xsd:enumeration value="Right" />\n            <xsd:enumeration value="LeftRight" />\n            <xsd:enumeration value="None" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="InvalidXmlCharacters" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Preserve" />\n            <xsd:enumeration value="Remove" />\n            <xsd:enumeration value="Replace" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Collation" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Format" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="TrimRight" />\n            <xsd:enumeration value="TrimLeft" />\n            <xsd:enumeration value="TrimAll" />\n            <xsd:enumeration value="TrimNone" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Source" type="Binding" minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Translation">\n    <xsd:all>\n      <xsd:element name="Language" type="xsd:unsignedInt" />\n      <xsd:element name="Caption" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DisplayFolder" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="AttributeTranslation">\n    <xsd:all>\n      <xsd:element name="Language" type="xsd:unsignedInt" />\n      <xsd:element name="Caption" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DisplayFolder" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="CaptionColumn" type="DataItem"\n        minOccurs="0" />\n      <xsd:element name="MembersWithDataCaption"\n        type="xsd:string" minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="AttributeRelationship">\n    <xsd:all>\n      <xsd:element name="AttributeID" type="xsd:string" />\n      <xsd:element name="RelationshipType" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Rigid" />\n            <xsd:enumeration value="Flexible" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Cardinality" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Many" />\n            <xsd:enumeration value="One" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Optionality" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Mandatory" />\n            <xsd:enumeration value="Optional" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="OverrideBehavior" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="Strong" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Name" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Visible" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Hierarchy">\n    <xsd:all>\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element ref="eng300:ProcessingState" minOccurs="0" />\n      <xsd:element ref="eng300:StructureType" minOccurs="0" />\n      <xsd:element name="DisplayFolder" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="AllMemberName" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="AllMemberTranslations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="AllMemberTranslation"\n              type="Translation" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="MemberNamesUnique" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element ref="eng2:MemberKeysUnique" minOccurs="0" />\n      <xsd:element name="AllowDuplicateNames"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="Levels">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Level" type="Level"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="VisualizationProperties"\n        type="eng300:HierarchyVisualizationProperties" minOccurs="0"\n        maxOccurs="1" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Level">\n    <xsd:all>\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="SourceAttributeID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="HideMemberIf" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Never" />\n            <xsd:enumeration value="OnlyChildWithNoName" />\n            <xsd:enumeration value="OnlyChildWithParentName" />\n            <xsd:enumeration value="NoName" />\n            <xsd:enumeration value="ParentName" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Server">\n    <xsd:all>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for Server object -->\n      <xsd:element name="ProductName" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Edition" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Standard" />\n            <xsd:enumeration value="Standard64" />\n            <xsd:enumeration value="Enterprise" />\n            <xsd:enumeration value="Enterprise64" />\n            <xsd:enumeration value="Developer" />\n            <xsd:enumeration value="Developer64" />\n            <xsd:enumeration value="Evaluation" />\n            <xsd:enumeration value="Evaluation64" />\n            <xsd:enumeration value="Local" />\n            <xsd:enumeration value="Local64" />\n            <xsd:enumeration value="BusinessIntelligence" />\n            <xsd:enumeration value="BusinessIntelligence64" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="EditionID" type="xsd:long"\n        minOccurs="0" />\n      <xsd:element name="Version" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element ref="eng300:ServerMode" minOccurs="0" />\n      <xsd:element name="ProductLevel" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element ref="eng400:DefaultCompatibilityLevel"\n        minOccurs="0" />\n      <xsd:element ref="eng600:SupportedCompatibilityLevels"\n        minOccurs="0" />\n      <xsd:element name="Databases " minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Database" type="Database"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Assemblies" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Assembly" type="Assembly"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Traces" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Trace" type="Trace" minOccurs="0"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Roles" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Role" type="Role" minOccurs="0"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="ServerProperties" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="ServerProperty"\n              type="ServerProperty" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="ServerProperty">\n    <xsd:all>\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="Value" type="xsd:string" />\n      <xsd:element name="RequiresRestart" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="PendingValue" type="xsd:anySimpleType"\n        minOccurs="0" />\n      <xsd:element name="DefaultValue" type="xsd:anySimpleType"\n        minOccurs="0" />\n      <xsd:element name="DisplayFlag" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="Type" minOccurs="0" type="xsd:string" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Assembly" abstract="true">\n    <xsd:sequence>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for Assembly object -->\n      <xsd:element name="ImpersonationInfo"\n        type="eng:ImpersonationInfo" minOccurs="0" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="ComAssembly">\n    <xsd:complexContent>\n      <xsd:extension base="Assembly">\n        <xsd:sequence>\n          <xsd:element name="Source" type="xsd:string"\n            minOccurs="0" />\n        </xsd:sequence>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="ClrAssembly">\n    <xsd:complexContent>\n      <xsd:extension base="Assembly">\n        <xsd:sequence>\n          <xsd:element name="Files">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="File" type="ClrAssemblyFile"\n                  maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <xsd:element name="PermissionSet" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="Safe" />\n                <xsd:enumeration value="ExternalAccess" />\n                <xsd:enumeration value="Unrestricted" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n        </xsd:sequence>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="ClrAssemblyFile">\n    <xsd:all>\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="Type">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Main" />\n            <xsd:enumeration value="Dependent" />\n            <xsd:enumeration value="Debug" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Data" type="DataBlock" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="DataBlock">\n    <xsd:sequence>\n      <xsd:element name="Block" type="xsd:base64Binary"\n        minOccurs="0" maxOccurs="unbounded" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n  <xsd:complexType name="Trace">\n    <xsd:all>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for Trace object -->\n      <xsd:element name="LogFileName" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="LogFileAppend" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="LogFileSize" type="xsd:long"\n        minOccurs="0" />\n      <xsd:element name="Audit" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="LogFileRollover" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="AutoRestart" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="StopTime" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Filter" type="TraceFilter"\n        minOccurs="0" />\n      <xsd:element ref="EventType" maxOccurs="1" minOccurs="1" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:element name="EventType">\n    <xsd:complexType>\n      <xsd:choice>\n        <xsd:element name="Events">\n          <xsd:complexType>\n            <xsd:sequence>\n              <xsd:element name="Event" type="Event" minOccurs="0"\n                maxOccurs="unbounded" />\n            </xsd:sequence>\n          </xsd:complexType>\n        </xsd:element>\n        <xsd:element ref="eng300_300:XEvent" minOccurs="0" />\n      </xsd:choice>\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:complexType name="Event">\n    <xsd:all>\n      <xsd:element name="EventID" type="xsd:string" />\n      <xsd:element name="Columns" type="EventColumnID" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="EventColumnID">\n    <xsd:sequence>\n      <xsd:element name="ColumnID" type="xsd:string"\n        maxOccurs="unbounded" />\n    </xsd:sequence>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="TraceFilter">\n    <xsd:choice minOccurs="1" maxOccurs="1">\n      <xsd:element name="Not" type="not_type" minOccurs="0" />\n      <xsd:element name="Or" type="and_or_type" minOccurs="0" />\n      <xsd:element name="And" type="and_or_type" minOccurs="0" />\n      <xsd:element name="Equal" type="bool_binop" minOccurs="0" />\n      <xsd:element name="NotEqual" type="bool_binop"\n        minOccurs="0" />\n      <xsd:element name="Less" type="bool_binop" minOccurs="0" />\n      <xsd:element name="LessOrEqual" type="bool_binop"\n        minOccurs="0" />\n      <xsd:element name="Greater" type="bool_binop"\n        minOccurs="0" />\n      <xsd:element name="GreaterOrEqual" type="bool_binop"\n        minOccurs="0" />\n      <xsd:element name="Like" type="bool_binop" minOccurs="0" />\n      <xsd:element name="NotLike" type="bool_binop"\n        minOccurs="0" />\n    </xsd:choice>\n  </xsd:complexType>\n  <xsd:complexType name="not_type">\n    <xsd:choice maxOccurs="1" minOccurs="1">\n      <xsd:element name="Not" type="not_type" minOccurs="0" />\n      <xsd:element name="Or" type="and_or_type" minOccurs="0" />\n      <xsd:element name="And" type="and_or_type" minOccurs="0" />\n      <xsd:element name="Equal" type="bool_binop" minOccurs="0" />\n      <xsd:element name="NotEqual" type="bool_binop"\n        minOccurs="0" />\n      <xsd:element name="Less" type="bool_binop" minOccurs="0" />\n      <xsd:element name="LessOrEqual" type="bool_binop"\n        minOccurs="0" />\n      <xsd:element name="Greater" type="bool_binop"\n        minOccurs="0" />\n      <xsd:element name="GreaterOrEqual" type="bool_binop"\n        minOccurs="0" />\n      <xsd:element name="Like" type="bool_binop" minOccurs="0" />\n      <xsd:element name="NotLike" type="bool_binop"\n        minOccurs="0" />\n    </xsd:choice>\n  </xsd:complexType>\n  <xsd:complexType name="and_or_type">\n    <xsd:choice maxOccurs="2" minOccurs="2">\n      <xsd:element name="Not" type="not_type" minOccurs="0" />\n      <xsd:element name="Or" type="and_or_type" minOccurs="0" />\n      <xsd:element name="And" type="and_or_type" minOccurs="0" />\n      <xsd:element name="Equal" type="bool_binop" minOccurs="0" />\n      <xsd:element name="NotEqual" type="bool_binop"\n        minOccurs="0" />\n      <xsd:element name="Less" type="bool_binop" minOccurs="0" />\n      <xsd:element name="LessOrEqual" type="bool_binop"\n        minOccurs="0" />\n      <xsd:element name="Greater" type="bool_binop"\n        minOccurs="0" />\n      <xsd:element name="GreaterOrEqual" type="bool_binop"\n        minOccurs="0" />\n      <xsd:element name="Like" type="bool_binop" minOccurs="0" />\n      <xsd:element name="NotLike" type="bool_binop"\n        minOccurs="0" />\n    </xsd:choice>\n  </xsd:complexType>\n  <xsd:complexType name="bool_binop">\n    <xsd:all>\n      <xsd:element name="ColumnID" type="xsd:string" />\n      <xsd:element name="Value" type="xsd:string" />\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:element name="event_session">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element name="templateCategory" minOccurs="0"\n          maxOccurs="1" type="xsd:string" />\n        <xsd:element name="templateName" minOccurs="0"\n          maxOccurs="1" type="xsd:string" />\n        <xsd:element name="templateDescription" minOccurs="0"\n          maxOccurs="1" type="xsd:string" />\n        <xsd:element name="event" minOccurs="0"\n          maxOccurs="unbounded" />\n        <xsd:element name="target" minOccurs="0"\n          maxOccurs="unbounded" />\n      </xsd:sequence>\n      <xsd:attribute name="name" type="xsd:string"\n        use="required" />\n      <xsd:attribute name="maxMemory" type="xsd:unsignedLong"\n        use="optional" default="4" />\n      <xsd:attribute name="eventRetentionMode"\n        type="retentionModes" use="optional" default="allowSingleEventLoss" />\n      <xsd:attribute name="dispatchLatency"\n        type="xsd:unsignedInt" use="optional" default="30" />\n      <xsd:attribute name="maxEventSize"\n        type="xsd:unsignedInt" use="optional" default="0" />\n      <xsd:attribute name="memoryPartitionMode"\n        type="partitionModes" use="optional" default="none" />\n      <xsd:attribute name="trackCausality" type="xsd:boolean"\n        use="optional" default="false" />\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:simpleType name="retentionModes">\n    <xsd:restriction base="xsd:string">\n      <xsd:enumeration value="allowSingleEventLoss" />\n      <xsd:enumeration value="allowMultipleEventLoss" />\n      <xsd:enumeration value="noEventLoss" />\n    </xsd:restriction>\n  </xsd:simpleType>\n\n  <xsd:simpleType name="partitionModes">\n    <xsd:restriction base="xsd:string">\n      <xsd:enumeration value="none" />\n      <xsd:enumeration value="perNode" />\n      <xsd:enumeration value="perCpu" />\n    </xsd:restriction>\n  </xsd:simpleType>\n\n  <xsd:element name="event">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element name="action" minOccurs="0"\n          maxOccurs="unbounded" />\n        <xsd:element ref="parameter" maxOccurs="unbounded"\n          minOccurs="0" />\n        <xsd:element name="predicate" minOccurs="0"\n          maxOccurs="1" type="unary_expr" />\n      </xsd:sequence>\n      <xsd:attributeGroup ref="objectNames"></xsd:attributeGroup>\n    </xsd:complexType>\n  </xsd:element>\n\n\n  <xsd:element name="action">\n    <xsd:complexType>\n      <xsd:attributeGroup ref="objectNames" />\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:element name="target">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element ref="parameter" maxOccurs="unbounded"\n          minOccurs="0" />\n      </xsd:sequence>\n      <xsd:attributeGroup ref="objectNames"></xsd:attributeGroup>\n    </xsd:complexType>\n  </xsd:element>\n  <xsd:attributeGroup name="objectNames">\n    <xsd:attribute name="module" type="xsd:string"\n      use="optional"></xsd:attribute>\n    <xsd:attribute name="package" type="xsd:string"\n      use="required"></xsd:attribute>\n    <xsd:attribute name="name" type="xsd:string"\n      use="required"></xsd:attribute>\n  </xsd:attributeGroup>\n\n\n  <xsd:element name="parameter">\n    <xsd:complexType>\n      <xsd:attribute name="name" type="xsd:string"\n        use="required" />\n      <xsd:attribute name="value" use="required" />\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:complexType name="pred_leaf">\n    <xsd:sequence>\n      <xsd:element name="comparator">\n        <xsd:complexType>\n          <xsd:attributeGroup ref="objectNames" />\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:choice>\n        <xsd:element name="event">\n          <xsd:complexType>\n            <xsd:attributeGroup ref="objectNames" />\n            <xsd:attribute name="field" type="xsd:string" />\n          </xsd:complexType>\n        </xsd:element>\n        <xsd:element name="global">\n          <xsd:complexType>\n            <xsd:attributeGroup ref="objectNames" />\n          </xsd:complexType>\n        </xsd:element>\n      </xsd:choice>\n      <xsd:element name="value"></xsd:element>\n    </xsd:sequence>\n  </xsd:complexType>\n  <xsd:complexType name="unary_expr">\n    <xsd:choice>\n      <xsd:element name="not" type="unary_expr"></xsd:element>\n      <xsd:element name="and" type="boolean_expr"></xsd:element>\n      <xsd:element name="or" type="boolean_expr"></xsd:element>\n      <xsd:element name="leaf" type="pred_leaf"></xsd:element>\n    </xsd:choice>\n  </xsd:complexType>\n  <xsd:complexType name="boolean_expr">\n    <xsd:sequence>\n      <xsd:choice>\n        <xsd:element name="and" type="boolean_expr"></xsd:element>\n        <xsd:element name="or" type="boolean_expr"></xsd:element>\n        <xsd:element name="not" type="unary_expr"></xsd:element>\n        <xsd:element name="leaf" type="pred_leaf"></xsd:element>\n      </xsd:choice>\n      <xsd:choice maxOccurs="1" minOccurs="1">\n        <xsd:element name="and" type="boolean_expr"></xsd:element>\n        <xsd:element name="or" type="boolean_expr"></xsd:element>\n        <xsd:element name="not" type="unary_expr"></xsd:element>\n        <xsd:element name="leaf" type="pred_leaf"></xsd:element>\n      </xsd:choice>\n    </xsd:sequence>\n  </xsd:complexType>\n  <xsd:complexType name="Database">\n    <xsd:all>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for Database object -->\n      <xsd:element name="LastUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="State" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Processed" />\n            <xsd:enumeration value="PartiallyProcessed" />\n            <xsd:enumeration value="Unprocessed" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element ref="eng100:ReadWriteMode" minOccurs="0" />\n      <xsd:element ref="eng100_100:DbStorageLocation"\n        minOccurs="0" />\n      <xsd:element name="AggregationPrefix" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="ProcessingPriority" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="EstimatedSize" type="xsd:long"\n        minOccurs="0" />\n      <xsd:element name="LastProcessed" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Language" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="Collation" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Visible" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="MasterDataSourceID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DataSourceImpersonationInfo"\n        type="eng:ImpersonationInfo" minOccurs="0" />\n      <xsd:element name="Accounts" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Account" type="Account"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="DataSources" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="DataSource" type="DataSource"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="DataSourceViews" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="DataSourceView"\n              type="DataSourceView" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Dimensions" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Dimension" type="Dimension"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Cubes" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Cube" type="Cube" minOccurs="0"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="MiningStructures" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="MiningStructure"\n              type="MiningStructure" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Roles" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Role" type="Role" minOccurs="0"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Assemblies" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Assembly" type="Assembly"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="DatabasePermissions" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="DatabasePermission"\n              type="DatabasePermission" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element ref="eng200_200:StorageEngineUsed"\n        minOccurs="0" />\n      <xsd:element ref="eng200_200:ImagePath" minOccurs="0" />\n      <xsd:element ref="eng200_200:ImageUrl" minOccurs="0" />\n      <xsd:element ref="eng200_200:ImageUniqueID" minOccurs="0" />\n      <xsd:element ref="eng200_200:ImageVersion" minOccurs="0" />\n      <xsd:element ref="eng200_200:Token" minOccurs="0" />\n      <xsd:element ref="eng200:CompatibilityLevel"\n        minOccurs="0" />\n      <xsd:element ref="eng300_300:DirectQueryMode"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="MiningStructure">\n    <xsd:all>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for MiningStructure object -->\n      <xsd:element name="Source" type="Binding" minOccurs="0" />\n      <xsd:element name="LastProcessed" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Language" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="Collation" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="ErrorConfiguration"\n        type="ErrorConfiguration" minOccurs="0" />\n      <xsd:element name="CacheMode" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="KeepTrainingCases" />\n            <xsd:enumeration value="ClearAfterProcessing" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element ref="eng100_100:HoldoutMaxPercent"\n        minOccurs="0" />\n      <xsd:element ref="eng100_100:HoldoutMaxCases"\n        minOccurs="0" />\n      <xsd:element ref="eng100_100:HoldoutSeed" minOccurs="0" />\n      <xsd:element ref="eng100_100:HoldoutActualSize"\n        minOccurs="0" />\n      <xsd:element name="Columns">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Column"\n              type="MiningStructureColumn" minOccurs="1" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="State" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Processed" />\n            <xsd:enumeration value="Unprocessed" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="MiningStructurePermissions"\n        minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="MiningStructurePermission"\n              type="MiningStructurePermission" minOccurs="0"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="MiningModels" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="MiningModel" type="MiningModel"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="MiningStructureColumn"\n    abstract="true" />\n\n  <xsd:complexType name="ScalarMiningStructureColumn">\n    <xsd:all>\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Type">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Long" />\n            <xsd:enumeration value="Boolean" />\n            <xsd:enumeration value="Text" />\n            <xsd:enumeration value="Double" />\n            <xsd:enumeration value="Date" />\n            <xsd:enumeration value="Table" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="IsKey" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="Source" type="Binding" minOccurs="0" />\n      <xsd:element name="Distribution" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="ModelingFlags" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="ModelingFlag"\n              type="MiningModelingFlag" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Content">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <!-- This list is user-extensible -->\n            <xsd:enumeration value="Discrete" />\n            <xsd:enumeration value="Continuous" />\n            <xsd:enumeration value="Discretized" />\n            <xsd:enumeration value="Ordered" />\n            <xsd:enumeration value="Cyclical" />\n            <xsd:enumeration value="Probability" />\n            <xsd:enumeration value="Variance" />\n            <xsd:enumeration value="StdDev" />\n            <xsd:enumeration value="ProbabilityVariance" />\n            <xsd:enumeration value="ProbabilityStdDev" />\n            <xsd:enumeration value="Support" />\n            <xsd:enumeration value="Key" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="ClassifiedColumns" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="ClassifiedColumnID"\n              type="xsd:string" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="DiscretizationMethod"\n        type="xsd:string" minOccurs="0" />\n      <xsd:element name="DiscretizationBucketCount"\n        type="xsd:integer" minOccurs="0" />\n      <xsd:element name="KeyColumns" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="KeyColumn" type="DataItem"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="NameColumn" type="DataItem"\n        minOccurs="0" />\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="TableMiningStructureColumn">\n    <xsd:all>\n      <xsd:element name="ForeignKeyColumns" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="ForeignKeyColumn" type="DataItem"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="SourceMeasureGroup"\n        type="MeasureGroupBinding" minOccurs="0" />\n      <xsd:element name="Columns" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Column"\n              type="MiningStructureColumn" minOccurs="1" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="MiningModel">\n    <xsd:all>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for MiningModel object -->\n      <xsd:element name="Algorithm" minOccurs="1">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Microsoft_Naive_Bayes" />\n            <xsd:enumeration value="Microsoft_Decision_Trees" />\n            <xsd:enumeration value="Microsoft_Clustering" />\n            <xsd:enumeration value="Microsoft_Neural_Network" />\n            <xsd:enumeration\n              value="Microsoft_Logistic_Regression" />\n            <xsd:enumeration\n              value="Microsoft_Linear_Regression" />\n            <xsd:enumeration\n              value="Microsoft_Association_Rules" />\n            <xsd:enumeration value="Microsoft_Time_Series" />\n            <xsd:enumeration\n              value="Microsoft_Sequence_Clustering" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="LastProcessed" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="AlgorithmParameters" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="AlgorithmParameter"\n              type="AlgorithmParameter" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="AllowDrillThrough" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation"\n              type="AttributeTranslation" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Columns">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Column" type="MiningModelColumn"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="State" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Processed" />\n            <xsd:enumeration value="Unprocessed" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="FoldingParameters"\n        type="FoldingParameters" minOccurs="0" />\n      <xsd:element name="Filter" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="MiningModelPermissions" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="MiningModelPermission"\n              type="MiningModelPermission" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Language" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Collation" type="xsd:string"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="MiningModelingFlag">\n    <xsd:all>\n      <xsd:element name="ModelingFlag" type="xsd:string" />\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="MiningModelColumn">\n    <xsd:all>\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="SourceColumnID" type="xsd:string" />\n      <xsd:element name="Usage" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Key" />\n            <xsd:enumeration value="Input" />\n            <xsd:enumeration value="Predict" />\n            <xsd:enumeration value="PredictOnly" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Filter" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Columns" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Column" type="MiningModelColumn"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="ModelingFlags" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="ModelingFlag"\n              type="MiningModelingFlag" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="AlgorithmParameter">\n    <xsd:all>\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="Value" type="xsd:anySimpleType" />\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="FoldingParameters">\n    <xsd:all>\n      <xsd:element name="FoldIndex" type="xsd:integer" />\n      <xsd:element name="FoldCount" type="xsd:integer" />\n      <xsd:element name="FoldMaxCases" type="xsd:long"\n        minOccurs="0" />\n      <xsd:element name="FoldTargetAttribute" type="xsd:string"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="Cube">\n    <xsd:all>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for Cube object -->\n      <xsd:element name="Language" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="Collation" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Dimensions">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Dimension" type="CubeDimension"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="CubePermissions" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="CubePermission" minOccurs="0"\n              type="CubePermission" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="MdxScripts" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="MdxScript" type="MdxScript"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Perspectives" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Perspective" type="Perspective"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="State" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Processed" />\n            <xsd:enumeration value="PartiallyProcessed" />\n            <xsd:enumeration value="Unprocessed" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DefaultMeasure" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Visible" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="MeasureGroups">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="MeasureGroup" type="MeasureGroup"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Source" type="DataSourceViewBinding"\n        minOccurs="0" />\n      <xsd:element name="AggregationPrefix" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="ProcessingPriority" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="StorageMode" minOccurs="0">\n        <xsd:complexType>\n          <xsd:simpleContent>\n            <xsd:extension base="CubeStorageModeEnumType">\n              <xsd:attribute name="valuens">\n                <xsd:simpleType>\n                  <xsd:restriction base="xsd:string">\n                    <xsd:enumeration\n                      value="http://schemas.microsoft.com/analysisservices/2010/engine/200/200" />\n                  </xsd:restriction>\n                </xsd:simpleType>\n              </xsd:attribute>\n            </xsd:extension>\n          </xsd:simpleContent>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="ProcessingMode" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Regular" />\n            <xsd:enumeration value="LazyAggregations" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="ScriptCacheProcessingMode"\n        minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Regular" />\n            <xsd:enumeration value="Lazy" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="ScriptErrorHandlingMode" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="IgnoreNone" />\n            <xsd:enumeration value="IgnoreAll" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element ref="eng800:DaxOptimizationMode"\n        minOccurs="0" />\n      <xsd:element name="ProactiveCaching"\n        type="ProactiveCaching" minOccurs="0" />\n      <xsd:element name="Kpis" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Kpi" type="Kpi" minOccurs="0"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="ErrorConfiguration"\n        type="ErrorConfiguration" minOccurs="0" />\n      <xsd:element name="Actions" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Action" minOccurs="0" type="Action"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="StorageLocation" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="EstimatedRows" type="xsd:long"\n        minOccurs="0" />\n      <xsd:element name="LastProcessed" type="xsd:dateTime"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n  <xsd:simpleType name="CubeStorageModeEnumType">\n    <xsd:restriction base="xsd:string">\n      <xsd:enumeration value="Molap" />\n      <xsd:enumeration value="Rolap" />\n      <xsd:enumeration value="Holap" />\n      <xsd:enumeration value="InMemory" />\n    </xsd:restriction>\n  </xsd:simpleType>\n\n  <xsd:element name="Execute">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element name="Command" type="Command" />\n        <xsd:element name="Properties" minOccurs="1"\n          maxOccurs="1">\n          <xsd:complexType>\n            <xsd:sequence>\n              <xsd:element name="PropertyList" minOccurs="0"\n                maxOccurs="1" type="PropertyList" />\n            </xsd:sequence>\n          </xsd:complexType>\n        </xsd:element>\n        <xsd:element name="Parameters" minOccurs="0">\n          <xsd:complexType>\n            <xsd:sequence>\n              <xsd:element name="Parameter" type="ExecuteParameter"\n                minOccurs="0" maxOccurs="unbounded" />\n            </xsd:sequence>\n          </xsd:complexType>\n        </xsd:element>\n      </xsd:sequence>\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:element name="Discover">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element name="RequestType" minOccurs="1"\n          maxOccurs="1">\n          <xsd:simpleType>\n            <xsd:restriction base="xsd:string">\n              <xsd:enumeration value="DBSCHEMA_CATALOGS" />\n              <xsd:enumeration value="MDSCHEMA_CUBES" />\n              <xsd:enumeration value="MDSCHEMA_DIMENSIONS" />\n              <xsd:enumeration value="MDSCHEMA_HIERARCHIES" />\n              <xsd:enumeration value="MDSCHEMA_LEVELS" />\n              <xsd:enumeration value="MDSCHEMA_MEASURES" />\n              <xsd:enumeration value="MDSCHEMA_PROPERTIES" />\n              <xsd:enumeration value="MDSCHEMA_MEMBERS" />\n              <xsd:enumeration value="MDSCHEMA_ACTIONS" />\n              <xsd:enumeration value="MDSCHEMA_SETS" />\n              <xsd:enumeration value="DISCOVER_INSTANCES" />\n              <xsd:enumeration value="MDSCHEMA_KPIS" />\n              <xsd:enumeration value="MDSCHEMA_MEASUREGROUPS" />\n              <xsd:enumeration\n                value="MDSCHEMA_MEASUREGROUP_DIMENSIONS" />\n              <xsd:enumeration value="DISCOVER_PROPERTIES" />\n              <xsd:enumeration value="DISCOVER_LITERALS" />\n              <xsd:enumeration value="DISCOVER_SCHEMA_ROWSETS" />\n              <xsd:enumeration value="DISCOVER_KEYWORDS" />\n              <xsd:enumeration value="DBSCHEMA_TABLES" />\n              <xsd:enumeration value="DBSCHEMA_COLUMNS" />\n              <xsd:enumeration value="DBSCHEMA_PROVIDER_TYPES" />\n              <xsd:enumeration\n                value="MDSCHEMA_INPUT_DATASOURCES" />\n              <xsd:enumeration value="DMSCHEMA_MINING_SERVICES" />\n              <xsd:enumeration\n                value="DMSCHEMA_MINING_SERVICE_PARAMETERS" />\n              <xsd:enumeration\n                value="DMSCHEMA_MINING_FUNCTIONS" />\n              <xsd:enumeration\n                value="DMSCHEMA_MINING_MODEL_CONTENT" />\n              <xsd:enumeration\n                value="DMSCHEMA_MINING_MODEL_XML" />\n              <xsd:enumeration\n                value="DMSCHEMA_MINING_MODEL_CONTENT_PMML" />\n              <xsd:enumeration value="DMSCHEMA_MINING_MODELS" />\n              <xsd:enumeration value="DMSCHEMA_MINING_COLUMNS" />\n              <xsd:enumeration\n                value="DMSCHEMA_MINING_STRUCTURES" />\n              <xsd:enumeration\n                value="DMSCHEMA_MINING_STRUCTURE_COLUMNS" />\n              <xsd:enumeration value="DISCOVER_DATASOURCES" />\n              <xsd:enumeration value="DISCOVER_ENUMERATORS" />\n              <xsd:enumeration value="DISCOVER_XML_METADATA" />\n              <xsd:enumeration value="DISCOVER_TRACES" />\n              <xsd:enumeration\n                value="DISCOVER_TRACE_DEFINITION_PROVIDERINFO" />\n              <xsd:enumeration value="DISCOVER_TRACE_COLUMNS" />\n              <xsd:enumeration\n                value="DISCOVER_TRACE_EVENT_CATEGORIES" />\n              <xsd:enumeration value="DISCOVER_MEMORYUSAGE" />\n              <xsd:enumeration value="DISCOVER_MEMORYGRANT" />\n              <xsd:enumeration value="DISCOVER_LOCKS" />\n              <xsd:enumeration value="DISCOVER_CONNECTIONS" />\n              <xsd:enumeration value="DISCOVER_SESSIONS" />\n              <xsd:enumeration value="DISCOVER_JOBS" />\n              <xsd:enumeration value="DISCOVER_TRANSACTIONS" />\n              <xsd:enumeration value="DISCOVER_DB_CONNECTIONS" />\n              <xsd:enumeration value="DISCOVER_MASTER_KEY" />\n              <xsd:enumeration\n                value="DISCOVER_PERFORMANCE_COUNTERS" />\n              <xsd:enumeration value="DISCOVER_LOCATIONS" />\n              <xsd:enumeration\n                value="DISCOVER_PARTITION_DIMENSION_STAT" />\n              <xsd:enumeration value="DISCOVER_PARTITION_STAT" />\n              <xsd:enumeration value="DISCOVER_DIMENSION_STAT" />\n              <xsd:enumeration value="DISCOVER_COMMANDS" />\n              <xsd:enumeration value="DISCOVER_COMMAND_OBJECTS" />\n              <xsd:enumeration value="DISCOVER_OBJECT_ACTIVITY" />\n              <xsd:enumeration\n                value="DISCOVER_OBJECT_MEMORY_USAGE" />\n              <xsd:enumeration value="DISCOVER_STORAGE_TABLES" />\n              <xsd:enumeration\n                value="DISCOVER_STORAGE_TABLE_COLUMNS" />\n              <xsd:enumeration\n                value="DISCOVER_STORAGE_TABLE_COLUMN_SEGMENTS" />\n              <xsd:enumeration value="DISCOVER_CSDL_METADATA" />\n              <xsd:enumeration value="DISCOVER_CALC_DEPENDENCY" />\n              <xsd:enumeration value="MDSCHEMA_FUNCTIONS" />\n              <xsd:enumeration value="DISCOVER_RING_BUFFERS" />\n              <xsd:enumeration\n                value="DISCOVER_XEVENT_TRACE_DEFINITION" />\n              <xsd:enumeration value="DISCOVER_XEVENT_PACKAGES" />\n              <xsd:enumeration value="DISCOVER_XEVENT_OBJECTS" />\n              <xsd:enumeration\n                value="DISCOVER_XEVENT_OBJECT_COLUMNS" />\n              <xsd:enumeration value="DISCOVER_XEVENT_SESSIONS" />\n              <xsd:enumeration\n                value="DISCOVER_XEVENT_SESSION_TARGETS" />\n              <xsd:enumeration value="DISCOVER_MEM_STATS" />\n              <xsd:enumeration value="DISCOVER_DB_MEM_STATS" />\n              <xsd:enumeration value="DISCOVER_OBJECT_COUNTERS" />\n            </xsd:restriction>\n          </xsd:simpleType>\n        </xsd:element>\n        <xsd:element name="Restrictions" minOccurs="1"\n          maxOccurs="1">\n          <xsd:complexType>\n            <xsd:sequence>\n              <xsd:element name="RestrictionList" minOccurs="0"\n                maxOccurs="1" nillable="true">\n                <xsd:complexType>\n                  <xsd:sequence>\n                    <xsd:any minOccurs="0" maxOccurs="unbounded" />\n                  </xsd:sequence>\n                </xsd:complexType>\n              </xsd:element>\n            </xsd:sequence>\n          </xsd:complexType>\n        </xsd:element>\n        <xsd:element name="Properties" type="Properties" />\n      </xsd:sequence>\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:complexType name="CubeDimension">\n    <xsd:all>\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Name" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="DimensionID" type="xsd:string" />\n      <xsd:element name="Visible" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="AllMemberAggregationUsage"\n        minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Full" />\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="Unrestricted" />\n            <xsd:enumeration value="Default" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="HierarchyUniqueNameStyle"\n        minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="IncludeDimensionName" />\n            <xsd:enumeration value="ExcludeDimensionName" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="MemberUniqueNameStyle" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Native" />\n            <xsd:enumeration value="NamePath" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Attributes" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Attribute" type="CubeAttribute"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Hierarchies" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Hierarchy" type="CubeHierarchy"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="CubeAttribute">\n    <xsd:all>\n      <xsd:element name="AttributeID" type="xsd:string" />\n      <xsd:element name="AggregationUsage" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Full" />\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="Unrestricted" />\n            <xsd:enumeration value="Default" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="AttributeHierarchyOptimizedState"\n        minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="FullyOptimized" />\n            <xsd:enumeration value="NotOptimized" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="AttributeHierarchyEnabled"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="AttributeHierarchyVisible"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="CubeHierarchy">\n    <xsd:all>\n      <xsd:element name="HierarchyID" type="xsd:string" />\n      <xsd:element name="OptimizedState" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="FullyOptimized" />\n            <xsd:enumeration value="NotOptimized" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Visible" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="Enabled" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Kpi">\n    <xsd:all>\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="DisplayFolder" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="AssociatedMeasureGroupID"\n        type="xsd:string" minOccurs="0" />\n      <xsd:element name="Value" type="xsd:string" />\n      <xsd:element name="Goal" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Status" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Trend" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Weight" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="TrendGraphic" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="StatusGraphic" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="CurrentTimeMember" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="ParentKpiID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Action" abstract="true" />\n\n\n  <xsd:complexType name="StandardAction">\n    <xsd:complexContent>\n      <xsd:extension base="Action">\n        <xsd:all>\n          <!--These elements are inherited from Action -->\n          <xsd:element name="Name" type="xsd:string" />\n          <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n          <xsd:element name="Caption" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="CaptionIsMdx" type="xsd:boolean"\n            minOccurs="0" />\n          <xsd:element name="Translations" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="Translation" type="Translation"\n                  minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <xsd:element name="TargetType">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="Cube" />\n                <xsd:enumeration value="Cells" />\n                <xsd:enumeration value="Set" />\n                <xsd:enumeration value="Hierarchy" />\n                <xsd:enumeration value="Level" />\n                <xsd:enumeration value="DimensionMembers" />\n                <xsd:enumeration value="HierarchyMembers" />\n                <xsd:enumeration value="LevelMembers" />\n                <xsd:enumeration value="AttributeMembers" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="Target" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="Condition" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="Type">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="Url" />\n                <xsd:enumeration value="Html" />\n                <xsd:enumeration value="Statement" />\n                <xsd:enumeration value="DrillThrough" />\n                <xsd:enumeration value="Dataset" />\n                <xsd:enumeration value="Rowset" />\n                <xsd:enumeration value="CommandLine" />\n                <xsd:enumeration value="Proprietary" />\n                <xsd:enumeration value="Report" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="Invocation" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="Interactive" />\n                <xsd:enumeration value="OnOpen" />\n                <xsd:enumeration value="Batch" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="Application" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="Description" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="Annotations" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="Annotation" type="Annotation"\n                  minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <!--Extended elements for StandardAction object -->\n          <xsd:element name="Expression" type="xsd:string" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="ReportAction">\n    <xsd:complexContent>\n      <xsd:extension base="Action">\n        <xsd:all>\n          <!--These elements are inherited from Action -->\n          <xsd:element name="Name" type="xsd:string" />\n          <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n          <xsd:element name="Caption" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="CaptionIsMdx" type="xsd:boolean"\n            minOccurs="0" />\n          <xsd:element name="Translations" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="Translation" type="Translation"\n                  minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <xsd:element name="TargetType">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="Cube" />\n                <xsd:enumeration value="Cells" />\n                <xsd:enumeration value="Set" />\n                <xsd:enumeration value="Hierarchy" />\n                <xsd:enumeration value="Level" />\n                <xsd:enumeration value="DimensionMembers" />\n                <xsd:enumeration value="HierarchyMembers" />\n                <xsd:enumeration value="LevelMembers" />\n                <xsd:enumeration value="AttributeMembers" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="Target" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="Condition" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="Type">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="Url" />\n                <xsd:enumeration value="Html" />\n                <xsd:enumeration value="Statement" />\n                <xsd:enumeration value="Drillthrough" />\n                <xsd:enumeration value="Dataset" />\n                <xsd:enumeration value="Rowset" />\n                <xsd:enumeration value="CommandLine" />\n                <xsd:enumeration value="Proprietary" />\n                <xsd:enumeration value="Report" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="Invocation" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="Interactive" />\n                <xsd:enumeration value="OnOpen" />\n                <xsd:enumeration value="Batch" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="Application" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="Description" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="Annotations" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="Annotation" type="Annotation"\n                  minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <!--Extended elements for ReportAction object -->\n          <xsd:element name="ReportServer" type="xsd:string" />\n          <xsd:element name="Path" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="ReportParameters" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="ReportParameter"\n                  type="ReportParameter" minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <xsd:element name="ReportFormatParameters"\n            minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="ReportFormatParameter"\n                  type="ReportFormatParameter" minOccurs="0"\n                  maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="ReportParameter">\n    <xsd:all>\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="Value" type="xsd:string" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="ReportFormatParameter">\n    <xsd:all>\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="Value" type="xsd:string" />\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="DrillThroughAction">\n    <xsd:complexContent>\n      <xsd:extension base="Action">\n        <xsd:all>\n          <!--These elements are inherited from Action -->\n          <xsd:element name="Name" type="xsd:string" />\n          <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n          <xsd:element name="Caption" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="CaptionIsMdx" type="xsd:boolean"\n            minOccurs="0" />\n          <xsd:element name="Translations" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="Translation" type="Translation"\n                  minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <xsd:element name="TargetType">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="Cube" />\n                <xsd:enumeration value="Cells" />\n                <xsd:enumeration value="Set" />\n                <xsd:enumeration value="Hierarchy" />\n                <xsd:enumeration value="Level" />\n                <xsd:enumeration value="DimensionMembers" />\n                <xsd:enumeration value="HierarchyMembers" />\n                <xsd:enumeration value="LevelMembers" />\n                <xsd:enumeration value="AttributeMembers" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="Target" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="Condition" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="Type">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="Url" />\n                <xsd:enumeration value="Html" />\n                <xsd:enumeration value="Statement" />\n                <xsd:enumeration value="DrillThrough" />\n                <xsd:enumeration value="Dataset" />\n                <xsd:enumeration value="Rowset" />\n                <xsd:enumeration value="CommandLine" />\n                <xsd:enumeration value="Proprietary" />\n                <xsd:enumeration value="Report" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="Invocation" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="Interactive" />\n                <xsd:enumeration value="OnOpen" />\n                <xsd:enumeration value="Batch" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="Application" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="Description" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="Annotations" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="Annotation" type="Annotation"\n                  minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <!--Extended elements for DrillThroughAction object -->\n          <xsd:element name="Default" type="xsd:boolean"\n            minOccurs="0" />\n          <xsd:element name="Columns" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="Column" type="Binding"\n                  minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <xsd:element name="MaximumRows" type="xsd:integer"\n            minOccurs="0" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="MdxScript">\n    <xsd:all>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for MdxScript object -->\n      <xsd:element name="Commands" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Command" type="Command"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="DefaultScript" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="CalculationProperties" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="CalculationProperty"\n              type="CalculationProperty" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n  <xsd:complexType name="CalculationProperty">\n    <xsd:all>\n      <xsd:element name="CalculationReference"\n        type="xsd:string" />\n      <xsd:element name="CalculationType">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Member" />\n            <xsd:enumeration value="Set" />\n            <xsd:enumeration value="Cells" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Visible" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="SolveOrder" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="FormatString" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="ForeColor" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="BackColor" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="FontName" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="FontSize" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="FontFlags" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="NonEmptyBehavior" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="AssociatedMeasureGroupID"\n        type="xsd:string" minOccurs="0" />\n      <xsd:element name="DisplayFolder" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Language" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="VisualizationProperties"\n        type="eng300:CalculationPropertiesVisualizationProperties"\n        minOccurs="0" maxOccurs="1" />\n    </xsd:all>\n  </xsd:complexType>\n  <xsd:complexType name="Perspective">\n    <xsd:all>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for Perspective object -->\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="DefaultMeasure" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Dimensions" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Dimension"\n              type="PerspectiveDimension" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="MeasureGroups" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="MeasureGroup"\n              type="PerspectiveMeasureGroup" minOccurs="0"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Calculations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Calculation"\n              type="PerspectiveCalculation" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Kpis" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Kpi" type="PerspectiveKpi"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Actions" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Action" type="PerspectiveAction"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="PerspectiveDimension">\n    <xsd:all>\n      <xsd:element name="CubeDimensionID" type="xsd:string" />\n      <xsd:element name="Attributes" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Attribute"\n              type="PerspectiveAttribute" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Hierarchies" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Hierarchy"\n              type="PerspectiveHierarchy" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="PerspectiveAttribute">\n    <xsd:all>\n      <xsd:element name="AttributeID" type="xsd:string" />\n      <xsd:element name="AttributeHierarchyVisible"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="DefaultMember" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="PerspectiveHierarchy">\n    <xsd:all>\n      <xsd:element name="HierarchyID" type="xsd:string" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="PerspectiveMeasureGroup">\n    <xsd:all>\n      <xsd:element name="MeasureGroupID" type="xsd:string" />\n      <xsd:element name="Measures" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Measure" type="PerspectiveMeasure"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="PerspectiveMeasure">\n    <xsd:all>\n      <xsd:element name="MeasureID" type="xsd:string" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="PerspectiveCalculation">\n    <xsd:all>\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="Type">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Member" />\n            <xsd:enumeration value="Set" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="PerspectiveKpi">\n    <xsd:all>\n      <xsd:element name="KpiID" type="xsd:string" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="PerspectiveAction">\n    <xsd:all>\n      <xsd:element name="ActionID" type="xsd:string" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="MeasureGroup">\n    <xsd:all>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for MeasureGroup object -->\n      <xsd:element name="LastProcessed" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Type" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Regular" />\n            <xsd:enumeration value="ExchangeRate" />\n            <xsd:enumeration value="Sales" />\n            <xsd:enumeration value="Budget" />\n            <xsd:enumeration value="FinancialReporting" />\n            <xsd:enumeration value="Marketing" />\n            <xsd:enumeration value="Inventory" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="State" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Processed" />\n            <xsd:enumeration value="PartiallyProcessed" />\n            <xsd:enumeration value="Unprocessed" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Measures">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Measure" type="Measure"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="DataAggregation" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="DataAggregatable" />\n            <xsd:enumeration value="CacheAggregatable" />\n            <xsd:enumeration value="DataAndCacheAggregatable" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Source" type="MeasureGroupBinding"\n        minOccurs="0" />\n      <xsd:element name="StorageMode" minOccurs="0">\n        <xsd:complexType>\n          <xsd:simpleContent>\n            <xsd:extension\n              base="MeasureGroupStorageModeEnumType">\n              <xsd:attribute name="valuens">\n                <xsd:simpleType>\n                  <xsd:restriction base="xsd:string">\n                    <xsd:enumeration\n                      value="http://schemas.microsoft.com/analysisservices/2010/engine/200/200" />\n                  </xsd:restriction>\n                </xsd:simpleType>\n              </xsd:attribute>\n            </xsd:extension>\n          </xsd:simpleContent>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="StorageLocation" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="IgnoreUnrelatedDimensions"\n        type="xsd:boolean" minOccurs="0" />\n      <xsd:element name="ProactiveCaching"\n        type="ProactiveCaching" minOccurs="0" />\n      <xsd:element name="EstimatedRows" type="xsd:long"\n        minOccurs="0" />\n      <xsd:element name="ErrorConfiguration"\n        type="ErrorConfiguration" minOccurs="0" />\n      <xsd:element name="EstimatedSize" type="xsd:long"\n        minOccurs="0" />\n      <xsd:element name="ProcessingMode" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Regular" />\n            <xsd:enumeration value="LazyAggregations" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Dimensions">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Dimension"\n              type="MeasureGroupDimension" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Partitions" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Partition" type="Partition"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="AggregationPrefix" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="ProcessingPriority" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="AggregationDesigns" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="AggregationDesign"\n              type="AggregationDesign" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n  <xsd:simpleType name="MeasureGroupStorageModeEnumType">\n    <xsd:restriction base="xsd:string">\n      <xsd:enumeration value="Molap" />\n      <xsd:enumeration value="Rolap" />\n      <xsd:enumeration value="Holap" />\n      <xsd:enumeration value="InMemory" />\n    </xsd:restriction>\n  </xsd:simpleType>\n\n  <xsd:complexType name="MeasureGroupDimension"\n    abstract="true" />\n  <xsd:complexType name="ManyToManyMeasureGroupDimension">\n    <xsd:complexContent>\n      <xsd:extension base="MeasureGroupDimension">\n        <xsd:all>\n          <!--These elements are inherited from MeasureGroupDimension -->\n          <xsd:element name="CubeDimensionID" type="xsd:string" />\n          <xsd:element name="Annotations" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="Annotation" type="Annotation"\n                  minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <xsd:element name="Source"\n            type="MeasureGroupDimensionBinding" minOccurs="0" />\n          <!--Extended elements for ManyToManyMeasureGroupDimension object -->\n          <xsd:element name="MeasureGroupID" type="xsd:string"\n            minOccurs="0" />\n          <xsd:element name="DirectSlice" type="xsd:string"\n            minOccurs="0" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="RegularMeasureGroupDimension">\n    <xsd:complexContent>\n      <xsd:extension base="MeasureGroupDimension">\n        <xsd:all>\n          <!--These elements are inherited from MeasureGroupDimension -->\n          <xsd:element name="CubeDimensionID" type="xsd:string" />\n          <xsd:element name="Annotations" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="Annotation" type="Annotation"\n                  minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <xsd:element name="Source"\n            type="MeasureGroupDimensionBinding" minOccurs="0" />\n          <!--Extended elements for RegularMeasureGroupDimension object -->\n          <xsd:element name="Cardinality" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="Many" />\n                <xsd:enumeration value="One" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element name="Attributes">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="Attribute"\n                  type="MeasureGroupAttribute" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="ReferenceMeasureGroupDimension">\n    <xsd:complexContent>\n      <xsd:extension base="MeasureGroupDimension">\n        <xsd:all>\n          <!--These elements are inherited from MeasureGroupDimension -->\n          <xsd:element name="CubeDimensionID" type="xsd:string" />\n          <xsd:element name="Annotations" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="Annotation" type="Annotation"\n                  minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <xsd:element name="Source"\n            type="MeasureGroupDimensionBinding" minOccurs="0" />\n          <!--Extended elements for ReferenceMeasureGroupDimension object -->\n          <xsd:element name="IntermediateCubeDimensionID"\n            type="xsd:string" minOccurs="1" />\n          <xsd:element name="IntermediateGranularityAttributeID"\n            type="xsd:string" minOccurs="1" />\n          <xsd:element name="Materialization" minOccurs="0">\n            <xsd:simpleType>\n              <xsd:restriction base="xsd:string">\n                <xsd:enumeration value="Regular" />\n                <xsd:enumeration value="Indirect" />\n              </xsd:restriction>\n            </xsd:simpleType>\n          </xsd:element>\n          <xsd:element ref="eng200_200:ProcessingState"\n            minOccurs="0" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="DegenerateMeasureGroupDimension">\n    <xsd:complexContent>\n      <xsd:extension base="MeasureGroupDimension">\n        <xsd:all>\n          <!--These elements are inherited from MeasureGroupDimension -->\n          <xsd:element name="CubeDimensionID" type="xsd:string" />\n          <xsd:element name="Annotations" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="Annotation" type="Annotation"\n                  minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <xsd:element name="Source"\n            type="MeasureGroupDimensionBinding" minOccurs="0" />\n          <!--Extended elements for DegenerateMeasureGroupDimension object -->\n          <xsd:element ref="eng200_200:ShareDimensionStorage"\n            minOccurs="0" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:element name="ShareDimensionStorage">\n    <xsd:simpleType>\n      <xsd:restriction base="xsd:string">\n        <xsd:enumeration value="Distinct" />\n        <xsd:enumeration value="Shared" />\n      </xsd:restriction>\n    </xsd:simpleType>\n  </xsd:element>\n\n  <xsd:complexType name="DataMiningMeasureGroupDimension">\n    <xsd:complexContent>\n      <xsd:extension base="MeasureGroupDimension">\n        <xsd:all>\n          <!--These elements are inherited from MeasureGroupDimension -->\n          <xsd:element name="CubeDimensionID" type="xsd:string" />\n          <xsd:element name="Annotations" minOccurs="0">\n            <xsd:complexType>\n              <xsd:sequence>\n                <xsd:element name="Annotation" type="Annotation"\n                  minOccurs="0" maxOccurs="unbounded" />\n              </xsd:sequence>\n            </xsd:complexType>\n          </xsd:element>\n          <xsd:element name="Source"\n            type="MeasureGroupDimensionBinding" minOccurs="0" />\n          <!--Extended elements for DataMiningMeasureGroupDimension object -->\n          <xsd:element name="CaseCubeDimensionID"\n            type="xsd:string" />\n        </xsd:all>\n      </xsd:extension>\n    </xsd:complexContent>\n  </xsd:complexType>\n\n  <xsd:complexType name="MeasureGroupAttribute">\n    <xsd:all>\n      <xsd:element name="AttributeID" type="xsd:string" />\n      <xsd:element name="KeyColumns" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="KeyColumn" type="DataItem"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Type" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Regular" />\n            <xsd:enumeration value="Granularity" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:complexType name="Measure">\n    <xsd:all>\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="AggregateFunction" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Sum" />\n            <xsd:enumeration value="Count" />\n            <xsd:enumeration value="Min" />\n            <xsd:enumeration value="Max" />\n            <xsd:enumeration value="DistinctCount" />\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="ByAccount" />\n            <xsd:enumeration value="AverageOfChildren" />\n            <xsd:enumeration value="FirstChild" />\n            <xsd:enumeration value="LastChild" />\n            <xsd:enumeration value="FirstNonEmpty" />\n            <xsd:enumeration value="LastNonEmpty" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="DataType" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="WChar" />\n            <xsd:enumeration value="Integer" />\n            <xsd:enumeration value="BigInt" />\n            <xsd:enumeration value="Single" />\n            <xsd:enumeration value="Double" />\n            <xsd:enumeration value="Date" />\n            <xsd:enumeration value="Currency" />\n            <xsd:enumeration value="UnsignedTinyInt" />\n            <xsd:enumeration value="UnsignedSmallInt" />\n            <xsd:enumeration value="UnsignedInt" />\n            <xsd:enumeration value="UnsignedBigInt" />\n            <xsd:enumeration value="Bool" />\n            <xsd:enumeration value="Smallint" />\n            <xsd:enumeration value="Tinyint" />\n            <xsd:enumeration value="Variant" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Source" type="DataItem" />\n      <xsd:element name="Visible" type="xsd:boolean"\n        minOccurs="0" />\n      <xsd:element name="MeasureExpression" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="DisplayFolder" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="FormatString" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="BackColor" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="ForeColor" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="FontName" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="FontSize" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="FontFlags" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Translations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Translation" type="Translation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n  <xsd:complexType name="AggregationDesign">\n    <xsd:all>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for AggregationDesign object -->\n      <xsd:element name="EstimatedRows" type="xsd:long"\n        minOccurs="0" />\n      <xsd:element name="Dimensions" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Dimension"\n              type="AggregationDesignDimension" minOccurs="0"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Aggregations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Aggregation" type="Aggregation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="EstimatedPerformanceGain"\n        type="xsd:integer" minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="AggregationDesignDimension">\n    <xsd:all>\n      <xsd:element name="CubeDimensionID" type="xsd:string" />\n      <xsd:element name="Attributes" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Attribute"\n              type="AggregationDesignAttribute" minOccurs="0"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="AggregationDesignAttribute">\n    <xsd:all>\n      <xsd:element name="AttributeID" type="xsd:string" />\n      <xsd:element name="EstimatedCount" type="xsd:long"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Aggregation">\n    <xsd:all>\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="Dimensions" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Dimension"\n              type="AggregationDimension" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="AggregationDimension">\n    <xsd:all>\n      <xsd:element name="CubeDimensionID" type="xsd:string" />\n      <xsd:element name="Attributes" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Attribute"\n              type="AggregationAttribute" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="AggregationAttribute">\n    <xsd:all>\n      <xsd:element name="AttributeID" type="xsd:string" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Partition">\n    <xsd:all>\n      <!--These elements are common to each MajorObject -->\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <!--Extended elements for Partition object -->\n      <xsd:element name="Source" type="TabularBinding"\n        minOccurs="0" />\n      <xsd:element name="ProcessingPriority" type="xsd:integer"\n        minOccurs="0" />\n      <xsd:element name="AggregationPrefix" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="StorageMode" minOccurs="0">\n        <xsd:complexType>\n          <xsd:simpleContent>\n            <xsd:extension base="PartitionStorageModeEnumType">\n              <xsd:attribute name="valuens">\n                <xsd:simpleType>\n                  <xsd:restriction base="xsd:string">\n                    <xsd:enumeration\n                      value="http://schemas.microsoft.com/analysisservices/2010/engine/200/200" />\n                  </xsd:restriction>\n                </xsd:simpleType>\n              </xsd:attribute>\n            </xsd:extension>\n          </xsd:simpleContent>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="ProcessingMode" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Regular" />\n            <xsd:enumeration value="LazyAggregations" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="ErrorConfiguration"\n        type="ErrorConfiguration" minOccurs="0" />\n      <xsd:element name="StorageLocation" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="RemoteDatasourceID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="Slice" type="xsd:string" minOccurs="0" />\n      <xsd:element name="ProactiveCaching"\n        type="ProactiveCaching" minOccurs="0" />\n      <xsd:element name="Type" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Data" />\n            <xsd:enumeration value="Writeback" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="EstimatedSize" type="xsd:long"\n        minOccurs="0" />\n      <xsd:element name="EstimatedRows" type="xsd:long"\n        minOccurs="0" />\n      <xsd:element name="CurrentStorageMode" minOccurs="0">\n        <xsd:complexType>\n          <xsd:simpleContent>\n            <xsd:extension\n              base="PartitionCurrentStorageModeEnumType">\n              <xsd:attribute name="valuens">\n                <xsd:simpleType>\n                  <xsd:restriction base="xsd:string">\n                    <xsd:enumeration\n                      value="http://schemas.microsoft.com/analysisservices/2010/engine/200/200" />\n                  </xsd:restriction>\n                </xsd:simpleType>\n              </xsd:attribute>\n            </xsd:extension>\n          </xsd:simpleContent>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="AggregationDesignID" type="xsd:string"\n        minOccurs="0" />\n      <xsd:element name="AggregationInstances" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="AggregationInstance"\n              type="AggregationInstance" minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="AggregationInstanceSource"\n        type="DataSourceViewBinding" minOccurs="0" />\n      <xsd:element name="LastProcessed" type="xsd:dateTime"\n        minOccurs="0" />\n      <xsd:element name="State" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Processed" />\n            <xsd:enumeration value="Unprocessed" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element ref="eng300:StringStoresCompatibilityLevel"\n        minOccurs="0" />\n      <xsd:element\n        ref="eng300:CurrentStringStoresCompatibilityLevel" minOccurs="0" />\n      <xsd:element ref="eng300_300:DirectQueryUsage"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n  <xsd:simpleType name="PartitionStorageModeEnumType">\n    <xsd:restriction base="xsd:string">\n      <xsd:enumeration value="Molap" />\n      <xsd:enumeration value="Rolap" />\n      <xsd:enumeration value="Holap" />\n      <xsd:enumeration value="InMemory" />\n    </xsd:restriction>\n  </xsd:simpleType>\n  <xsd:simpleType\n    name="PartitionCurrentStorageModeEnumType">\n    <xsd:restriction base="xsd:string">\n      <xsd:enumeration value="Molap" />\n      <xsd:enumeration value="Rolap" />\n      <xsd:enumeration value="Holap" />\n      <xsd:enumeration value="InMemory" />\n    </xsd:restriction>\n  </xsd:simpleType>\n\n  <xsd:complexType name="AggregationInstance">\n    <xsd:all>\n      <xsd:element name="ID" type="xsd:string" minOccurs="0" />\n      <xsd:element name="Name" type="xsd:string" />\n      <xsd:element name="AggregationType">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="IndexedView" />\n            <xsd:enumeration value="Table" />\n            <xsd:enumeration value="UserDefined" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Source" type="TabularBinding"\n        minOccurs="0" />\n      <xsd:element name="Dimensions" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Dimension"\n              type="AggregationInstanceDimension" minOccurs="0"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Measures" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Measure"\n              type="AggregationInstanceMeasure" minOccurs="0"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Description" type="xsd:string"\n        minOccurs="0" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="AggregationInstanceDimension">\n    <xsd:all>\n      <xsd:element name="CubeDimensionID" type="xsd:string" />\n      <xsd:element name="Attributes" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Attribute"\n              type="AggregationInstanceAttribute" minOccurs="0"\n              maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="AggregationInstanceAttribute">\n    <xsd:all>\n      <xsd:element name="AttributeID" type="xsd:string" />\n      <xsd:element name="KeyColumns">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="KeyColumn" type="DataItem"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="AggregationInstanceMeasure">\n    <xsd:all>\n      <xsd:element name="MeasureID" type="xsd:string" />\n      <xsd:element name="Source" type="ColumnBinding" />\n    </xsd:all>\n  </xsd:complexType>\n\n  <xsd:complexType name="Account">\n    <xsd:all>\n      <xsd:element name="AccountType" type="xsd:string" />\n      <xsd:element name="AggregationFunction" minOccurs="0">\n        <xsd:simpleType>\n          <xsd:restriction base="xsd:string">\n            <xsd:enumeration value="Sum" />\n            <xsd:enumeration value="Count" />\n            <xsd:enumeration value="Min" />\n            <xsd:enumeration value="Max" />\n            <xsd:enumeration value="DistinctCount" />\n            <xsd:enumeration value="None" />\n            <xsd:enumeration value="AverageOfChildren" />\n            <xsd:enumeration value="FirstChild" />\n            <xsd:enumeration value="LastChild" />\n            <xsd:enumeration value="FirstNonEmpty" />\n            <xsd:enumeration value="LastNonEmpty" />\n          </xsd:restriction>\n        </xsd:simpleType>\n      </xsd:element>\n      <xsd:element name="Aliases" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Alias" type="xsd:string"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n      <xsd:element name="Annotations" minOccurs="0">\n        <xsd:complexType>\n          <xsd:sequence>\n            <xsd:element name="Annotation" type="Annotation"\n              minOccurs="0" maxOccurs="unbounded" />\n          </xsd:sequence>\n        </xsd:complexType>\n      </xsd:element>\n    </xsd:all>\n  </xsd:complexType>\n\n\n  <xsd:element name="BeginSession">\n    <xsd:complexType>\n      <xsd:attribute form="unqualified" name="mustUnderstand"\n        type="xsd:int" />\n    </xsd:complexType>\n  </xsd:element>\n  <xsd:element name="EndSession">\n    <xsd:complexType>\n      <xsd:attribute form="unqualified" name="SessionId"\n        type="xsd:string" />\n      <xsd:attribute form="unqualified" name="mustUnderstand"\n        type="xsd:int" />\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:element name="Session">\n    <xsd:complexType>\n      <xsd:attribute form="unqualified" name="SessionId"\n        type="xsd:string" />\n      <xsd:attribute form="unqualified" name="mustUnderstand"\n        type="xsd:int" />\n    </xsd:complexType>\n  </xsd:element>\n\n  <xsd:element name="DiscoverResponse">\n    <xsd:complexType>\n      <xsd:sequence>\n        <xsd:element name="return" minOccurs="0" maxOccurs="1">\n          <xsd:complexType>\n            <xsd:sequence>\n              <xsd:element ref="ana-rs:root" minOccurs="0"\n                maxOccurs="1">\n              </xsd:element>\n            </xsd:sequence>\n          </xsd:complexType>\n        </xsd:element>\n      </xsd:sequence>\n    </xsd:complexType>\n  </xsd:element>\n\n</xsd:schema>\n';
const Cache = {
  "xmla.wsdl": XmlaWsdl,
  "eng.xsd": eng_xsd,
  "eng2_2.xsd": eng2_2_xsd,
  "eng2.xsd": eng2_xsd,
  "eng100_100.xsd": eng100_100_xsd,
  "eng100.xsd": eng100_xsd,
  "eng200_200.xsd": eng200_200_xsd,
  "eng200.xsd": eng200_xsd,
  "eng300_300.xsd": eng300_300_xsd,
  "eng300.xsd": eng300_xsd,
  "eng400.xsd": eng400_xsd,
  "eng600.xsd": eng600_xsd,
  "eng800.xsd": eng800_xsd,
  "ext.xsd": ext_xsd,
  "msxmla.xsd": msxmla_xsd,
  "xmla-ds.xsd": xmla_ds_xsd,
  "xmla-e.xsd": xmla_e_xsd,
  "xmla-m.xsd": xmla_m_xsd,
  "xmla-x.xsd": xmla_x_xsd,
  "xmla-rs.xsd": xmla_rs_xsd,
  "xmla.xsd": xmla_xsd
  // 'xmla.xsd': require('./xmla.xsd'),
  // 'xmla-x.xsd': require('./xmla-x.xsd'),
  // 'xmla-rs.xsd': require('./xmla-rs.xsd'),
};
const Primitives = {
  string: 1,
  boolean: 1,
  decimal: 1,
  float: 1,
  double: 1,
  anyType: 1,
  byte: 1,
  int: 1,
  long: 1,
  short: 1,
  unsignedByte: 1,
  unsignedInt: 1,
  unsignedLong: 1,
  unsignedShort: 1,
  duration: 0,
  dateTime: 0,
  time: 0,
  date: 0,
  gYearMonth: 0,
  gYear: 0,
  gMonthDay: 0,
  gDay: 0,
  gMonth: 0,
  hexBinary: 0,
  base64Binary: 0,
  anyURI: 0,
  QName: 0,
  NOTATION: 0
};
function splitNSName(nsName) {
  const index = nsName != null ? nsName.indexOf(":") : -1;
  return index < 0 ? { namespace: null, name: nsName } : {
    namespace: nsName.substring(0, index),
    name: nsName.substring(index + 1)
  };
}
class BaseElement {
  nsName;
  namespace;
  name;
  children;
  xmlns;
  allowedChildren = {};
  allowedChildrenList = "_fault";
  constructor(nsName, attrs, childrenList) {
    const parts = splitNSName(nsName);
    this.nsName = nsName;
    this.namespace = parts.namespace ?? "";
    this.name = parts.name;
    this.children = [];
    this.xmlns = {};
    for (const key in attrs) {
      const match = /^xmlns:?(.*)$/.exec(key);
      if (match) {
        this.xmlns[match[1]] = attrs[key];
      } else {
        this["$" + key] = attrs[key];
      }
    }
    this.allowedChildrenList = childrenList ?? this.allowedChildrenList;
    this._parseAllowedTypes();
  }
  _parseAllowedTypes() {
    const typesAllowed = this.allowedChildrenList.split(" ");
    typesAllowed.forEach((type) => {
      this.allowedChildren[type.replace(/^_/, "")] = (ElementTypeMap[type] || [
        BaseElement
      ])[0];
    });
  }
  deleteFixedAttrs() {
    this.children && this.children.length === 0 && delete this.children;
    this.xmlns && Object.keys(this.xmlns).length === 0 && delete this.xmlns;
    delete this.nsName;
    delete this.namespace;
    delete this.name;
  }
  startElement(stack, nsName, attrs) {
    if (!this.allowedChildren) return;
    const ChildClass = this.allowedChildren[splitNSName(nsName).name];
    if (ChildClass) {
      stack.push(new ChildClass(nsName, attrs));
    } else {
      this.unexpected(nsName);
    }
  }
  endElement(stack, nsName) {
    if (this.nsName === nsName) {
      if (stack.length < 2) return;
      const parent = stack[stack.length - 2];
      if (this !== stack[0]) {
        stack[0].xmlns = {
          ...stack[0].xmlns,
          ...this.xmlns
        };
        parent.children?.push(this);
        parent.addChild(this);
      }
    }
    stack.pop();
  }
  addChild(child) {
  }
  unexpected(name) {
    throw new Error(
      `Found unexpected element (${name}) inside ${this.nsName ?? ""}`
    );
  }
  description(definitions) {
    return this.$name || this.name;
  }
}
class ElementElement extends BaseElement {
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.element[1];
    super(nsName, attrs, allowedChildrenList);
  }
  description(definitions) {
    const element = {};
    let name = this.$name;
    if (this.$minOccurs !== this.$maxOccurs) {
      name += "[]";
    }
    if (this.$type) {
      const typeName = splitNSName(this.$type).name;
      const ns = definitions.xmlns[splitNSName(this.$type).namespace ?? ""];
      const schema = definitions.schemas[ns];
      const typeElement = schema && (schema.complexTypes[typeName] || schema.types[typeName]);
      if (typeElement && !(typeName in Primitives)) {
        element[name] = typeElement.description(definitions);
      } else element[name] = this.$type;
    } else {
      const children = this.children ?? [];
      element[name] = {};
      for (let i = 0, child; child = children[i]; i++) {
        if (child instanceof ComplexTypeElement) {
          element[name] = child.description(definitions);
        }
      }
    }
    return element;
  }
}
class ComplexTypeElement extends BaseElement {
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.complexType[1];
    super(nsName, attrs, allowedChildrenList);
  }
  description(definitions) {
    const children = this.children ?? [];
    for (let i = 0, child; child = children[i]; i++) {
      if (child instanceof SequenceElement || child instanceof AllElement) {
        return child.description(definitions);
      }
    }
    return {};
  }
}
class AllElement extends BaseElement {
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.all[1];
    super(nsName, attrs, allowedChildrenList);
  }
  description(definitions) {
    const children = this.children ?? [];
    const sequence = {};
    for (let i = 0, child; child = children[i]; i++) {
      const description = child.description(definitions);
      for (const key in description) {
        sequence[key] = description[key];
      }
    }
    return sequence;
  }
}
class SequenceElement extends BaseElement {
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.sequence[1];
    super(nsName, attrs, allowedChildrenList);
  }
  description(definitions) {
    const children = this.children ?? [];
    const sequence = {};
    for (let i = 0, child; child = children[i]; i++) {
      const description = child.description(definitions);
      for (const key in description) {
        sequence[key] = description[key];
      }
    }
    return sequence;
  }
}
class TypesElement extends BaseElement {
  schemas;
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.types[1];
    super(nsName, attrs, allowedChildrenList);
    this.schemas = {};
  }
  addChild(child) {
    if (child.$targetNamespace) this.schemas[child.$targetNamespace] = child;
    else this.schemas[child.includes[0].namespace] = child;
  }
}
class SchemaElement extends BaseElement {
  complexTypes;
  types;
  elements;
  includes;
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.schema[1];
    super(nsName, attrs, allowedChildrenList);
    this.complexTypes = {};
    this.types = {};
    this.elements = {};
    this.includes = [];
  }
  addChild(child) {
    if (child.$name in Primitives) return;
    if (child.name === "include" || child.name === "import") {
      const location = child.$schemaLocation || child.$location;
      if (location) {
        this.includes.push({
          namespace: child.$namespace || child.$targetNamespace || this.$targetNamespace,
          location
        });
      }
    } else if (child.name === "complexType") {
      this.complexTypes[child.$name] = child;
    } else if (child.name === "element") {
      this.elements[child.$name] = child;
    } else if (child.$name) {
      this.types[child.$name] = child;
    }
    this.children?.pop();
  }
}
class SimpleTypeElement extends BaseElement {
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.simpleType[1];
    super(nsName, attrs, allowedChildrenList);
  }
  description() {
    const children = this.children ?? [];
    for (let i = 0, child; child = children[i]; i++) {
      if (child instanceof RestrictionElement) {
        return `${this.$name} | ${child.description()}`;
      }
    }
    return {};
  }
}
class RestrictionElement extends BaseElement {
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.restriction[1];
    super(nsName, attrs, allowedChildrenList);
  }
  description() {
    const base = this.$base ? `${this.$base}|` : "";
    return base + (this.children ?? []).map(function(child) {
      return child.description();
    }).join(",");
  }
}
class EnumerationElement extends BaseElement {
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.enumeration[1];
    super(nsName, attrs, allowedChildrenList);
  }
  description() {
    return this.$value;
  }
}
class ServiceElement extends BaseElement {
  ports;
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.service[1];
    super(nsName, attrs, allowedChildrenList);
    this.ports = {};
  }
  description(definitions) {
    const ports = {};
    for (const name in this.ports) {
      const port = this.ports[name];
      ports[name] = port.binding.description(definitions);
    }
    return ports;
  }
  postProcess(definitions) {
    const children = this.children ?? [];
    const bindings = definitions.bindings;
    for (let i = 0, child; child = children[i]; i++) {
      if (child.name !== "port") continue;
      const bindingName = splitNSName(child.$binding).name;
      const binding = bindings[bindingName];
      if (binding) {
        binding.postProcess(definitions);
        this.ports[child.$name] = {
          location: child.location,
          binding
        };
        children.splice(i--, 1);
      }
    }
    delete this.$name;
    this.deleteFixedAttrs();
  }
}
class PortElement extends BaseElement {
  location;
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.port[1];
    super(nsName, attrs, allowedChildrenList);
    this.location = null;
  }
  addChild(child) {
    if (child.name === "address" && typeof child.$location !== "undefined") {
      this.location = child.$location;
    }
  }
}
class BindingElement extends BaseElement {
  transport;
  style;
  methods;
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.binding[1];
    super(nsName, attrs, allowedChildrenList);
    this.transport = "";
    this.style = "";
    this.methods = {};
  }
  addChild(child) {
    if (child.name === "binding") {
      this.transport = child.$transport;
      this.style = child.$style;
      this.children?.pop();
    }
  }
  postProcess(definitions) {
    const type = splitNSName(this.$type).name;
    const portType = definitions.portTypes[type];
    const style = this.style;
    const children = this.children ?? [];
    portType.postProcess(definitions);
    this.methods = portType.methods;
    for (let i = 0, child; child = children[i]; i++) {
      if (child.name !== "operation") continue;
      child.postProcess(definitions, "binding");
      children.splice(i--, 1);
      child.style || (child.style = style);
      const method = this.methods[child.$name];
      method.style = child.style;
      method.soapAction = child.soapAction;
      method.inputSoap = child.input || null;
      method.outputSoap = child.output || null;
      method.inputSoap?.deleteFixedAttrs();
      method.outputSoap?.deleteFixedAttrs();
    }
    delete this.$name;
    delete this.$type;
    this.deleteFixedAttrs();
  }
  description(definitions) {
    const methods = {};
    for (const name in this.methods) {
      const method = this.methods[name];
      methods[name] = method.description(definitions);
    }
    return methods;
  }
}
class PortTypeElement extends BaseElement {
  methods;
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.portType[1];
    super(nsName, attrs, allowedChildrenList);
    this.methods = {};
  }
  postProcess(definitions) {
    const children = this.children;
    if (typeof children === "undefined") return;
    for (let i = 0, child; child = children[i]; i++) {
      if (child.name !== "operation") continue;
      child.postProcess(definitions, "portType");
      this.methods[child.$name] = child;
      children.splice(i--, 1);
    }
    delete this.$name;
    this.deleteFixedAttrs();
  }
  description(definitions) {
    const methods = {};
    for (const name in this.methods) {
      const method = this.methods[name];
      methods[name] = method.description(definitions);
    }
    return methods;
  }
}
class MessageElement extends BaseElement {
  element;
  parts;
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.message[1];
    super(nsName, attrs, allowedChildrenList);
    this.element = null;
    this.parts = null;
  }
  postProcess(definitions) {
    let part = null;
    let child;
    const children = this.children ?? [];
    for (let i = 0; i < children.length; i++) {
      if ((child = children[i]).name === "part") {
        part = child;
        break;
      }
    }
    if (!part) return;
    if (part.$element) {
      delete this.parts;
      const nsName = splitNSName(part.$element);
      const ns = nsName.namespace ?? "";
      this.element = definitions.schemas[definitions.xmlns[ns]].elements[nsName.name];
      this.element.targetNSAlias = ns;
      this.element.targetNamespace = definitions.xmlns[ns];
      this.children?.splice(0, 1);
    } else {
      this.parts = {};
      delete this.element;
      for (let i = 0, partI; partI = children[i]; i++) {
        const nsName = splitNSName(part.$type);
        const ns = definitions.xmlns[nsName.namespace ?? ""];
        const type = nsName.name;
        const schemaDefinition = definitions.schemas[ns];
        if (typeof schemaDefinition !== "undefined") {
          this.parts[partI.$name] = definitions.schemas[ns].types[type] || definitions.schemas[ns].complexTypes[type];
        } else {
          this.parts[partI.$name] = partI.$type;
        }
        this.parts[partI.$name].namespace = nsName.namespace;
        this.parts[partI.$name].xmlns = ns;
        this.children?.splice(i--, 1);
      }
    }
    this.deleteFixedAttrs();
  }
  description(definitions) {
    if (this.element) {
      return this.element?.description(definitions);
    }
    const desc = {};
    desc[this.$name] = this.parts;
    return desc;
  }
}
class OperationElement extends BaseElement {
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.operation[1];
    super(nsName, attrs, allowedChildrenList);
    this.input = null;
    this.output = null;
    this.inputSoap = null;
    this.outputSoap = null;
    this.style = "";
    this.soapAction = "";
  }
  postProcess(definitions, tag) {
    const children = this.children ?? [];
    for (let i = 0, child; child = children[i]; i++) {
      if (child.name !== "input" && child.name !== "output") continue;
      if (tag === "binding") {
        this[child.name] = child;
        children.splice(i--, 1);
        continue;
      }
      const messageName = splitNSName(child.$message).name;
      const message = definitions.messages[messageName];
      message.postProcess(definitions);
      if (message.element) {
        definitions.messages[message.element.$name] = message;
        this[child.name] = message.element;
      } else {
        this[child.name] = message;
      }
      children.splice(i--, 1);
    }
    this.deleteFixedAttrs();
  }
  description(definitions) {
    const inputDesc = this.input.description(definitions);
    const outputDesc = this.output.description(definitions);
    return {
      input: inputDesc?.[Object.keys(inputDesc)[0]],
      output: outputDesc?.[Object.keys(outputDesc)[0]]
    };
  }
  addChild(child) {
    if (child.name === "operation") {
      this.soapAction = child.$soapAction || "";
      this.style = child.$style || "";
      this.children?.pop();
    }
  }
}
class InputElement extends BaseElement {
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.input[1];
    super(nsName, attrs, allowedChildrenList);
  }
  addChild(child) {
    if (child.name === "body") {
      this.use = child.$use;
      if (this.use === "encoded") {
        this.encodingStyle = child.$encodingStyle;
      }
      this.children?.pop();
    }
  }
}
class OutputElement extends BaseElement {
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.output[1];
    super(nsName, attrs, allowedChildrenList);
  }
  addChild(child) {
    if (child.name === "body") {
      this.use = child.$use;
      if (this.use === "encoded") {
        this.encodingStyle = child.$encodingStyle;
      }
      this.children?.pop();
    }
  }
}
class DefinitionsElement extends BaseElement {
  messages;
  portTypes;
  bindings;
  services;
  schemas;
  constructor(nsName, attrs) {
    const allowedChildrenList = ElementTypeMap.definitions[1];
    super(nsName, attrs, allowedChildrenList);
    if (this.name !== "definitions") this.unexpected(this.nsName ?? "");
    this.messages = {};
    this.portTypes = {};
    this.bindings = {};
    this.services = {};
    this.schemas = {};
  }
  addChild(child) {
    if (child instanceof TypesElement) {
      this.schemas = child.schemas;
    } else if (child instanceof MessageElement) {
      this.messages[child.$name] = child;
    } else if (child instanceof PortTypeElement) {
      this.portTypes[child.$name] = child;
    } else if (child instanceof BindingElement) {
      if (child.transport === "http://schemas.xmlsoap.org/soap/http" || child.transport === "http://www.w3.org/2003/05/soap/bindings/HTTP/") {
        this.bindings[child.$name] = child;
      }
    } else if (child instanceof ServiceElement) {
      this.services[child.$name] = child;
    }
    this.children?.pop();
  }
}
const ElementTypeMap = {
  types: [TypesElement, "schema"],
  schema: [SchemaElement, "element complexType simpleType include import"],
  element: [ElementElement, "annotation complexType"],
  simpleType: [SimpleTypeElement, "restriction"],
  restriction: [RestrictionElement, "enumeration"],
  enumeration: [EnumerationElement, ""],
  complexType: [ComplexTypeElement, "annotation sequence all"],
  sequence: [SequenceElement, "element"],
  all: [AllElement, "element"],
  service: [ServiceElement, "port documentation"],
  port: [PortElement, "address"],
  binding: [BindingElement, "_binding SecuritySpec operation"],
  portType: [PortTypeElement, "operation"],
  message: [MessageElement, "part documentation"],
  operation: [OperationElement, "documentation input output fault _operation"],
  input: [InputElement, "body SecuritySpecRef documentation header"],
  output: [OutputElement, "body SecuritySpecRef documentation header"],
  fault: [BaseElement, "_fault"],
  definitions: [DefinitionsElement, "types message portType binding service"]
};
function xmlEscape(obj) {
  if (typeof obj === "string") {
    return obj.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  return obj;
}
const trimLeft = /^[\s\xA0]+/;
const trimRight = /[\s\xA0]+$/;
function trim(text) {
  return text.replace(trimLeft, "").replace(trimRight, "");
}
class WSDL {
  uri;
  options;
  xml = "";
  definitions = {};
  services = {};
  xmlnsInEnvelope = "";
  readyPromise;
  readyPromiseResolveFn;
  constructor(definition, uri, options = {}) {
    let resolveTmp = (value) => {
    };
    this.uri = uri;
    this.options = options;
    this.readyPromise = new Promise((resolve) => {
      resolveTmp = resolve;
    });
    this.readyPromiseResolveFn = resolveTmp;
    if (typeof definition !== "string") {
      throw new Error("WSDL constructor takes an XML string");
    }
    this._fromXML(definition);
    this.processIncludes().then(() => {
      this.definitions.deleteFixedAttrs();
      const services = this.services = this.definitions.services;
      if (services) {
        for (const name in services) {
          services[name].postProcess(this.definitions);
        }
      }
      const complexTypes = this.definitions.complexTypes;
      if (complexTypes) {
        for (const name in complexTypes) {
          complexTypes[name].deleteFixedAttrs();
        }
      }
      const bindings = this.definitions.bindings;
      for (const bindingName in bindings) {
        const binding = bindings[bindingName];
        if (binding.style !== "document") continue;
        const methods = binding.methods;
        binding.topElements = {};
        for (const methodName in methods) {
          const inputName = methods[methodName].input.$name;
          const outputName = methods[methodName].output.$name;
          binding.topElements[inputName] = {
            methodName,
            outputName
          };
        }
      }
      this.xmlnsInEnvelope = this.xmlnsMap();
      this.readyPromiseResolveFn(null);
    }).catch(() => {
    });
  }
  _fromXML(xml) {
    this.definitions = this._parse(xml);
    this.xml = xml;
  }
  _parse(xml) {
    let pHandler;
    const p = new xmlParser.SaxParser(function(cb) {
      pHandler = cb;
    });
    const stack = [];
    let root = null;
    pHandler.onStartElementNS(
      (nsName, attrs, prefix, uri, namespaces) => {
        nsName = prefix ? prefix + ":" + nsName : nsName;
        const parsedAttrs = attrs.reduce(
          function(res, value) {
            res[value[0]] = value[1];
            return res;
          },
          {}
        );
        namespaces.forEach(function(e) {
          const nsName2 = e[0];
          const nsUrl = e[1];
          parsedAttrs["xmlns" + (nsName2 ? ":" : "") + nsName2] = nsUrl;
        });
        const top = stack[stack.length - 1];
        if (top) {
          try {
            top.startElement(stack, nsName, parsedAttrs);
          } catch (e) {
            if (this.options.strict) {
              throw e;
            } else {
              stack.push(new BaseElement(nsName, parsedAttrs));
            }
          }
        } else {
          const name = splitNSName(nsName).name;
          if (name === "definitions") {
            root = new DefinitionsElement(nsName, parsedAttrs);
          } else if (name === "schema") {
            root = new SchemaElement(nsName, parsedAttrs);
          } else {
            throw new Error("Unexpected root element of WSDL or include");
          }
          stack.push(root);
        }
      }
    );
    pHandler.onEndElementNS(function(name, prefix) {
      name = prefix ? prefix + ":" + name : name;
      const top = stack[stack.length - 1];
      top.endElement(stack, name);
    });
    p.parseString(xml);
    return root;
  }
  async processIncludes() {
    const schemas = this.definitions.schemas;
    let includes = [];
    for (const ns in schemas) {
      const schema = schemas[ns];
      includes = includes.concat(schema.includes || []);
    }
    await this.processNextInclude(includes);
  }
  async processNextInclude(includes) {
    const include = includes.shift();
    if (!include) return;
    const rurl = include.location;
    const wsdl = await openWSDL(rurl);
    const schemas = this.definitions.schemas;
    schemas[include.namespace || wsdl.definitions.$targetNamespace] = wsdl.definitions;
    await this.processNextInclude(includes);
  }
  xmlnsMap() {
    const xmlns = this.definitions.xmlns;
    let str = "";
    for (const alias in xmlns) {
      if (alias === "") continue;
      const ns = xmlns[alias];
      const url = new URL(ns);
      const allowedHosts = [
        "www.w3.org",
        "schemas.xmlsoap.org",
        "xml.apache.org",
        "schemas.microsoft.com"
      ];
      switch (ns) {
        case "http://xml.apache.org/xml-soap":
        // apachesoap
        case "http://schemas.xmlsoap.org/wsdl/":
        // wsdl
        case "http://schemas.xmlsoap.org/wsdl/soap/":
        // wsdlsoap
        case "http://schemas.xmlsoap.org/soap/encoding/":
        // soapenc
        case "http://www.w3.org/2001/XMLSchema":
          continue;
      }
      if (allowedHosts.includes(url.host)) continue;
      str += ` xmlns:${alias}="${ns}"`;
    }
    return str;
  }
  async ready() {
    await this.readyPromise;
  }
  objectToXML(obj, name, namespace, xmlns) {
    const parts = [];
    const xmlnsAttrib = "";
    const ns = namespace ? namespace + ":" : "";
    if (Array.isArray(obj)) {
      for (let i = 0, item; item = obj[i]; i++) {
        if (i > 0) {
          parts.push(["</", ns, name, ">"].join(""));
          parts.push(["<", ns, name, xmlnsAttrib, ">"].join(""));
        }
        parts.push(this.objectToXML(item, name));
      }
    } else if (typeof obj === "object") {
      for (const name2 in obj) {
        const child = obj[name2];
        if (child === null) {
          parts.push(["<", ns, name2, xmlnsAttrib, "/>"].join(""));
        } else {
          parts.push(["<", ns, name2, xmlnsAttrib, ">"].join(""));
          parts.push(this.objectToXML(child, name2, namespace));
          parts.push(["</", ns, name2, ">"].join(""));
        }
      }
    } else if (obj) {
      parts.push(xmlEscape(obj));
    }
    return parts.join("");
  }
  complexObjectToXML(obj, name) {
    const parts = [];
    let attrsString = "";
    if (typeof obj !== "object") {
      throw new Error("Wrong type of object");
    } else {
      const attrs = obj.__attrs;
      delete obj.__attrs;
      for (const a in attrs) {
        if (typeof attrs[a] !== "string") {
          throw new Error(
            `Wrong type of attribute ${a} in element with name ${name ?? "not specified"}. Attributes should be strings.`
          );
        } else {
          attrsString = attrsString.concat(` ${a}="${attrs[a]}"`);
        }
      }
      if (Object.keys(obj).length === 0) {
        if (name) {
          return `<${name}${attrsString}/>`;
        }
        return "";
      }
      for (const childName in obj) {
        const child = obj[childName];
        if (typeof child === "object") {
          parts.push(this.complexObjectToXML(child, childName));
        }
      }
    }
    return parts.join("");
  }
  describeServices() {
    const services = {};
    for (const name in this.services) {
      const service = this.services[name];
      services[name] = service.description(this.definitions);
    }
    return services;
  }
  objectToDocumentXML(name, params, ns, xmlns) {
    const args = {};
    args[name] = params;
    return this.objectToXML(args, null, ns, xmlns);
  }
  xmlToObject(xml) {
    let pHandler;
    const p = new xmlParser.SaxParser((cb) => {
      pHandler = cb;
    });
    let objectName = null;
    const root = {};
    const schema = {
      Envelope: {
        Header: {
          Security: {
            UsernameToken: {
              Username: "string",
              Password: "string"
            }
          }
        },
        Body: {
          Fault: {
            faultcode: "string",
            faultstring: "string",
            detail: "string"
          }
        }
      }
    };
    const stack = [{ name: null, object: root, schema }];
    const refs = {};
    let id;
    pHandler.onStartElementNS(
      (nsName, attrs, prefix, uri, namespaces) => {
        nsName = prefix ? prefix + ":" + nsName : nsName;
        attrs = attrs.reduce((res, value) => {
          res[value[0]] = value[1];
          return res;
        }, {});
        namespaces.forEach((e) => {
          const nsName2 = e[0];
          const nsUrl = e[1];
          attrs[`xmlns${nsName2 ? ":" : ""}${nsName2}`] = nsUrl;
        });
        let name = splitNSName(nsName).name;
        const top = stack[stack.length - 1];
        let topSchema = top.schema;
        const obj = {};
        const originalName = name;
        if (!objectName && top.name === "Body" && name !== "Fault") {
          const messages = this.definitions.messages;
          let message = messages[name];
          if (!message) {
            let isInput = false;
            if (/Response$/.test(name)) {
              name = name.replace(/Response$/, "");
            } else if (/Request$/.test(name)) {
              isInput = true;
              name = name.replace(/Request$/, "");
            } else if (/Solicit$/.test(name)) {
              isInput = true;
              name = name.replace(/Solicit$/, "");
            }
            const portTypes = this.definitions.portTypes;
            const portTypeNames = Object.keys(portTypes);
            const portType = portTypes[portTypeNames[0]];
            if (isInput) name = portType.methods[name].input.$name;
            else name = portType.methods[name].output.$name;
            message = messages[name];
            messages[originalName] = messages[name];
          }
          topSchema = message.description(this.definitions);
          objectName = originalName;
        }
        if (attrs.href) {
          id = attrs.href.substr(1);
          if (!refs[id]) refs[id] = { hrefs: [], obj: null };
          refs[id].hrefs.push({ par: top.object, key: name });
        }
        if (id = attrs.id) {
          if (!refs[id]) refs[id] = { hrefs: [], obj: null };
        }
        if (topSchema && topSchema[name + "[]"]) name = name + "[]";
        stack.push({
          name: originalName,
          object: obj,
          schema: topSchema?.[name],
          id: attrs.id,
          __attrs: attrs
        });
      }
    );
    pHandler.onEndElementNS(function(nsName, prefix) {
      nsName = prefix ? prefix + ":" + nsName : nsName;
      const cur = stack.pop();
      const obj = cur.object;
      if (typeof obj === "object") {
        obj.__attrs = cur.__attrs;
      }
      const top = stack[stack.length - 1];
      const topObject = top.object;
      const topSchema = top.schema;
      const name = splitNSName(nsName).name;
      if (topSchema && topSchema[name + "[]"] && typeof topSchema[name + "[]"] !== "string") {
        if (!topObject[name]) topObject[name] = [];
        topObject[name].push(obj);
      } else if (name in topObject) {
        if (!Array.isArray(topObject[name])) {
          topObject[name] = [topObject[name]];
        }
        topObject[name].push(obj);
      } else {
        topObject[name] = obj;
      }
      if (cur.id) {
        refs[cur.id].obj = obj;
      }
    });
    pHandler.onCharacters(function(text) {
      if (!trim(text).length) return;
      const top = stack[stack.length - 1];
      const name = splitNSName(top.schema).name;
      let value;
      if (name === "int") {
        value = parseInt(text, 10);
      } else if (name === "dateTime") {
        value = new Date(text);
      } else {
        if (typeof top.object !== "string") {
          value = text;
        } else {
          value = top.object + text;
        }
      }
      top.object = value;
    });
    p.parseString(xml);
    for (const n in refs) {
      const ref = refs[n];
      const obj = ref.obj;
      ref.hrefs.forEach(function(href) {
        href.par[href.key] = obj;
      });
    }
    return root.Envelope;
  }
}
async function openWSDL(uri, options) {
  const wsdlDef = Cache[uri];
  const wsdl = new WSDL(wsdlDef, uri, options);
  await wsdl.ready();
  return wsdl;
}
const _cache = {};
async function _requestWSDL(url, options = {}) {
  const cachedVal = _cache[url];
  if (cachedVal) return cachedVal;
  return await openWSDL(url, options);
}
async function createClient(url, options = {}) {
  const wsdl = await _requestWSDL(url, options);
  return new Client(wsdl, options.endpoint);
}
class BasicAuthSecurity {
  _username;
  _password;
  constructor(username, password = "") {
    this._username = username;
    this._password = password;
  }
  addHeaders(headers) {
    console.log("Adding headers for BasicAuthSecurity", headers);
    headers.Authorization = `Basic ${btoa(this._username + ":" + this._password)}`;
  }
  toXML() {
    return "";
  }
}
function createClientAsync(...args) {
  return createClient(args[0]);
}
class XmlaConnection extends BaseConnection {
  url = "";
  catalogName = "";
  cubeName = "";
  api = null;
  apiPromiseResolve;
  apiPromise;
  security = "None";
  user = "";
  password = "";
  constructor() {
    super();
    this.apiPromise = new Promise((resolve) => {
      this.apiPromiseResolve = resolve;
    });
  }
  async init(configuration) {
    super.init(configuration);
    this.url = configuration.url;
    this.catalogName = configuration.catalogName;
    this.cubeName = configuration.cubeName;
    this.security = configuration.security || "None";
    this.user = configuration.user || "";
    this.password = configuration.password || "";
    this.api = await this.initApi();
    if (this.apiPromiseResolve) {
      this.apiPromiseResolve(this.api);
    }
  }
  async initApi() {
    const client = await createClientAsync("xmla.wsdl");
    if (this.security === "Basic") {
      client.setSecurity(new BasicAuthSecurity(this.user, this.password));
    }
    client.setEndpoint(this.url);
    const api = new XMLAApi(client, this.url);
    await api.startSession();
    return api;
  }
  async fetch(config) {
    await this.apiPromise;
    const mdxResponce = await this.api.getMDX(
      config.data.mdx,
      this.catalogName,
      config.format
    );
    return mdxResponce;
  }
  setConfig() {
    throw new Error("Method not implemented.");
  }
  static validateConfiguration(configuration) {
    if (!configuration.url) {
      return false;
    }
    if (!configuration.catalogName) {
      return false;
    }
    return true;
  }
  static async getCatalogs(url, security) {
    const client = await createClientAsync("xmla.wsdl");
    if (security.type === "Basic" && security.user) {
      const securityClass = new BasicAuthSecurity(security.user, security.password);
      console.log("Security class:", securityClass);
      client.setSecurity(securityClass);
    }
    client.setEndpoint(url);
    console.log("Client", client);
    const api = new XMLAApi(client, url);
    await api.startSession();
    const { catalogs } = await api.getCatalogs();
    return catalogs;
  }
  async getApi() {
    await this.apiPromise;
    return this.api;
  }
}
const XMLA_CONNECTION_FACTORY = "XmlaConnectionFactory";
const factorySymbol = Symbol.for(XMLA_CONNECTION_FACTORY);
function createXmlaConnection(config) {
  if (!XmlaConnection.validateConfiguration(config)) {
    throw new Error(
      "Invalid XmlaConnection configuration. Please provide a valid configuration."
    );
  }
  const connection = new XmlaConnection();
  connection.init(config);
  return connection;
}
function activate$1({ services }) {
  services.register(XMLA_CONNECTION_FACTORY, createXmlaConnection);
}
function deactivate$1({ services }) {
  services.unregister(XMLA_CONNECTION_FACTORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  XMLA_CONNECTION_FACTORY,
  XmlaConnection,
  activate: activate$1,
  deactivate: deactivate$1,
  factorySymbol
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.connection.xmla";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.connection.xmla");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  XMLA_CONNECTION_FACTORY,
  XmlaConnection,
  activate,
  deactivate,
  factorySymbol
};
