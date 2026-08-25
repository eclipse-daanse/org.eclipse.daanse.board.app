import { BaseConnection as de } from "org.eclipse.daanse.board.app.lib.connection.base";
const { serviceId: xe } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class H {
  url;
  sessionId = "";
  SOAPClient = null;
  constructor(e, n) {
    this.url = n, this.SOAPClient = e;
  }
  rowToArray(e) {
    return Array.isArray(e) ? e : e ? [e] : [];
  }
  async getKpis(e, n) {
    const s = await this.SOAPClient?.DiscoverAsync({
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
          CATALOG_NAME: e,
          CUBE_NAME: n
        }
      },
      Properties: {
        PropertyList: {
          Catalog: e,
          Cube: n
        }
      }
    });
    return {
      kpis: this.rowToArray(
        s.Body.DiscoverResponse.return[0].root.row
      )
    };
  }
  async startSession() {
    const n = (await this.SOAPClient?.ExecuteAsync({
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
    }))?.Header?.Session?.__attrs?.SessionId;
    this.sessionId = n;
  }
  async getCatalogs() {
    const e = await this.SOAPClient?.DiscoverAsync({
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
    return {
      catalogs: this.rowToArray(
        e.Body.DiscoverResponse.return[0].root.row
      )
    };
  }
  async getTables() {
    const e = await this.SOAPClient?.DiscoverAsync({
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
    return {
      tables: this.rowToArray(
        e.Body.DiscoverResponse.return[0].root.row
      )
    };
  }
  async getColumns() {
    const e = await this.SOAPClient?.DiscoverAsync({
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
    return {
      columns: this.rowToArray(
        e.Body.DiscoverResponse.return[0].root.row
      )
    };
  }
  async getCubes(e) {
    const n = await this.SOAPClient?.DiscoverAsync({
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
          CATALOG_NAME: e
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return {
      cubes: this.rowToArray(
        n.Body.DiscoverResponse.return[0].root.row
      )
    };
  }
  async getDimensions(e, n) {
    const s = await this.SOAPClient?.DiscoverAsync({
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
          CATALOG_NAME: e,
          CUBE_NAME: n
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      s.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getHierarchies(e, n) {
    const s = await this.SOAPClient?.DiscoverAsync({
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
          CATALOG_NAME: e,
          CUBE_NAME: n
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      s.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getLevels(e, n) {
    const s = await this.SOAPClient?.DiscoverAsync({
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
          CATALOG_NAME: e,
          CUBE_NAME: n
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      s.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getHierarchyLevels(e, n, s) {
    const a = await this.SOAPClient?.DiscoverAsync({
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
          CATALOG_NAME: e,
          CUBE_NAME: n,
          HIERARCHY_UNIQUE_NAME: s
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      a.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getMeasureGroups(e, n) {
    const s = await this.SOAPClient?.DiscoverAsync({
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
          CATALOG_NAME: e,
          CUBE_NAME: n
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      s.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getMeasures(e, n) {
    const s = await this.SOAPClient?.DiscoverAsync({
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
          CATALOG_NAME: e,
          CUBE_NAME: n
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      s.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getSets(e, n) {
    const s = await this.SOAPClient?.DiscoverAsync({
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
          CATALOG_NAME: e,
          CUBE_NAME: n
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      s.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getProperties(e, n) {
    const s = await this.SOAPClient?.DiscoverAsync({
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
          CATALOG_NAME: e,
          CUBE_NAME: n
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      s.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getMembers(e) {
    const n = await this.SOAPClient?.DiscoverAsync({
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
          CATALOG_NAME: e.CATALOG_NAME,
          CUBE_NAME: e.CUBE_NAME,
          DIMENSION_UNIQUE_NAME: e.DIMENSION_UNIQUE_NAME,
          HIERARCHY_UNIQUE_NAME: e.HIERARCHY_UNIQUE_NAME,
          LEVEL_UNIQUE_NAME: e.LEVEL_UNIQUE_NAME
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      n.Body.DiscoverResponse.return[0].root.row
    );
  }
  async getLevelMembers(e, n, s) {
    const a = `
      select Subset(${e.LEVEL_UNIQUE_NAME}.AllMembers, ${s}, ${n + 1})
      DIMENSION PROPERTIES MEMBER_TYPE on 0,
      {} on 1
      from ${e.CUBE_NAME}
    `, i = await this.getMDX(a);
    return this.rowToArray(
      i.Body.ExecuteResponse.return.root.Axes.Axis[0].Tuples.Tuple
    );
  }
  async getChildMembers(e, n, s) {
    const a = `
      select Subset({AddCalculatedMembers(${e.MEMBER_UNIQUE_NAME}.Children)}, ${s}, ${n + 1})
      DIMENSION PROPERTIES MEMBER_TYPE on 0,
      {} on 1
      from ${e.CUBE_NAME}
    `, i = await this.getMDX(a);
    return this.rowToArray(
      i.Body.ExecuteResponse.return.root.Axes.Axis[0].Tuples.Tuple
    );
  }
  async getMDX(e, n, s = "Multidimensional") {
    return await this.SOAPClient?.ExecuteAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      Command: {
        Statement: e
      },
      Properties: {
        PropertyList: {
          Format: s,
          Catalog: n
        }
      }
    });
  }
  async getPivotTableData(e, n, s, a, i) {
    let r;
    if (n.length && s.length) {
      const p = [];
      let O = "";
      n.length >= 1 ? n.forEach((g, D) => {
        D === 0 ? O = `Hierarchize({DrilldownLevel({${g.originalItem.HIERARCHY_UNIQUE_NAME}},,,INCLUDE_CALC_MEMBERS)})` : O = `
              CrossJoin(
                ${O},
                Hierarchize({DrilldownLevel({${g.originalItem.HIERARCHY_UNIQUE_NAME}},,,INCLUDE_CALC_MEMBERS)})
              )
            `;
      }) : O = `{ ${n[0].originalItem.HIERARCHY_UNIQUE_NAME}.Members }`, n.forEach((g) => {
        p.push(
          i.filter(
            (D) => D.HIERARCHY_UNIQUE_NAME === g.originalItem.HIERARCHY_UNIQUE_NAME
          )
        );
      });
      const y = [];
      let b = "";
      s.length >= 1 ? s.forEach((g, D) => {
        D === 0 ? b = `Hierarchize({DrilldownLevel({${g.originalItem.HIERARCHY_UNIQUE_NAME}},,,INCLUDE_CALC_MEMBERS)})` : b = `
              CrossJoin(
                ${b},
                Hierarchize({DrilldownLevel({${g.originalItem.HIERARCHY_UNIQUE_NAME}},,,INCLUDE_CALC_MEMBERS)})
              )
            `;
      }) : b = `{ ${s[0].originalItem.HIERARCHY_UNIQUE_NAME}.Members }`, s.forEach((g) => {
        y.push(
          i.filter(
            (D) => D.HIERARCHY_UNIQUE_NAME === g.originalItem.HIERARCHY_UNIQUE_NAME
          )
        );
      });
      let l = y.flat(1).map((g) => `${g.LEVEL_UNIQUE_NAME}.[${g.PROPERTY_NAME}]`).join(","), E = p.flat(1).map((g) => `${g.LEVEL_UNIQUE_NAME}.[${g.PROPERTY_NAME}]`).join(",");
      l && (l = `,${l}`), E && (E = `,${E}`), a.showEmpty ? r = `
            SELECT
            ${b} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${l} ON 1,
            ${O} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${E}  ON 0
            FROM ${e}
        ` : r = `
            SELECT
            NON EMPTY ${b} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${l} ON 1,
            NON EMPTY ${O} DIMENSION PROPERTIES PARENT_UNIQUE_NAME,HIERARCHY_UNIQUE_NAME${E} ON 0
            FROM ${e}
        `;
    } else
      r = `
          SELECT
          FROM ${e}
      `;
    const d = await this.getMDX(r), x = this.rowToArray(
      d.Body.ExecuteResponse.return.root.Axes?.Axis?.[0]?.Tuples?.Tuple
    ), c = this.rowToArray(
      d.Body.ExecuteResponse.return.root.Axes?.Axis?.[1]?.Tuples?.Tuple
    ), T = this.rowToArray(
      d.Body.ExecuteResponse.return.root.CellData?.Cell
    );
    return {
      axis0: x,
      axis1: c,
      cells: T
    };
  }
  async getMember(e, n) {
    const s = await this.SOAPClient?.DiscoverAsync({
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
          CATALOG_NAME: e.CATALOG_NAME,
          CUBE_NAME: e.CUBE_NAME,
          DIMENSION_UNIQUE_NAME: e.DIMENSION_UNIQUE_NAME,
          HIERARCHY_UNIQUE_NAME: e.HIERARCHY_UNIQUE_NAME,
          LEVEL_UNIQUE_NAME: e.LEVEL_UNIQUE_NAME,
          MEMBER_UNIQUE_NAME: n
        }
      },
      Properties: {
        PropertyList: {}
      }
    });
    return this.rowToArray(
      s.Body.DiscoverResponse.return[0].root.row
    )[0];
  }
  async getLevelChildMembers(e) {
    const n = `
            SELECT {AddCalculatedMembers({${e.HIERARCHY_UNIQUE_NAME}.Levels(0).Members})} DIMENSION PROPERTIES MEMBER_TYPE ON 0, {} ON 1 FROM ${e.CUBE_NAME} CELL PROPERTIES CELL_ORDINAL
        `, s = await this.getMDX(n);
    return this.rowToArray(
      s.Body.ExecuteResponse.return.root.Axes.Axis[0].Tuples.Tuple
    );
  }
  async getChildren(e, n) {
    const s = `
            SELECT {AddCalculatedMembers({${e.UName}.Children})} DIMENSION PROPERTIES MEMBER_TYPE ON 0, {} ON 1 FROM ${n} CELL PROPERTIES CELL_ORDINAL
        `, a = await this.getMDX(s);
    return this.rowToArray(
      a.Body.ExecuteResponse.return.root.Axes.Axis[0].Tuples.Tuple
    );
  }
  async getDrillthroughMDX(e) {
    return await this.SOAPClient?.ExecuteAsync({
      Headers: {
        Session: {
          __attrs: {
            xmlns: "urn:schemas-microsoft-com:xml-analysis",
            SessionId: this.sessionId
          }
        }
      },
      Command: {
        Statement: e
      },
      Properties: {
        PropertyList: {
          Format: "Tabular"
        }
      }
    });
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
    }), this.sessionId = "";
  }
}
async function oe(t, e, n = {}) {
  return await fetch(t, {
    method: e ? "POST" : "GET",
    headers: {
      ...{
        Accept: "text/html,application/xhtml+xml,application/xml",
        "Content-Type": "text/xml"
      },
      ...n
    },
    body: e
  });
}
function ce(t, e) {
  for (const n in t) if (t[n] === e) return n;
}
class le {
  wsdl;
  endpoint;
  security;
  constructor(e, n) {
    this.wsdl = e, this.endpoint = n, this._initializeServices(n);
  }
  setEndpoint(e) {
    this.endpoint = e, this._initializeServices(this.endpoint, !0);
  }
  describe() {
    return this.wsdl.describeServices();
  }
  setSecurity(e) {
    this.security = e;
  }
  setSOAPAction(e) {
    this.SOAPAction = e;
  }
  _initializeServices(e, n = !1) {
    const a = this.wsdl.definitions.services;
    for (const i in a)
      this[i] = this._defineService(a[i], e, n);
  }
  _defineService(e, n, s) {
    const a = e.ports, i = {};
    for (const r in a)
      i[r] = this._definePort(
        a[r],
        n || a[r].location,
        s
      );
    return i;
  }
  _definePort(e, n, s) {
    const {
      binding: { methods: a }
    } = e, i = {};
    for (const r in a) {
      const d = `${r}Async`;
      if (i[r] = this._defineMethod(a[r], n), i[d] = this._defineMethodAsync(a[r], n), this[r] && !s)
        throw new Error(`Method with name ${r} already exists`);
      if (this[d] && !s)
        throw new Error(`Method with name ${d} already exists`);
      this[d] = i[d], this[r] = i[r];
    }
    return i;
  }
  _defineMethod(e, n) {
    return async (s, a) => {
      await this._invoke(e, s, n).then((i) => {
        a(i);
      });
    };
  }
  _defineMethodAsync(e, n) {
    return async (s) => await this._invoke(e, s, n);
  }
  async _invoke(e, n, s) {
    const {
      name: a,
      input: i
      // output,
      // style
    } = e, r = this.wsdl.definitions, d = r.$targetNamespace;
    let x = "", c = null;
    const T = {
      SOAPAction: this.SOAPAction ? this.SOAPAction(d, a) : `${d.lastIndexOf("/") !== d.length - 1 ? `${d}/` : d}${a}`,
      "Content-Type": "text/xml; charset=utf-8"
    }, p = n.Headers, O = {}, y = ce(r.xmlns, d);
    delete n.Headers, this.security?.addHeaders && this.security.addHeaders(T), this.security?.addOptions && this.security.addOptions(O);
    const b = this.security ? this.wsdl.objectToXML(this.security, null, y, void 0) : "", l = p ? this.wsdl.complexObjectToXML(p, null) : "";
    if (x = this.wsdl.objectToDocumentXML(
      i.$name,
      n,
      i.targetNSAlias,
      i.targetNamespace
    ), x.includes("Execute") && x.includes("Command") && x.includes("Statement") && x.includes("Minimal_Cubes_With_KPI_all_Properties")) {
      const R = x.match(
        /<[^:]*:?Statement>([\s\S]*?)<\/[^:]*:?Statement>/
      ), _ = x.match(
        /<[^:]*:?Catalog>([\s\S]*?)<\/[^:]*:?Catalog>/
      ), S = x.match(
        /<[^:]*:?Format>([\s\S]*?)<\/[^:]*:?Format>/
      ), M = R ? R[1].trim() : "", L = _ ? _[1].trim() : "", B = S ? S[1].trim() : "Tabular";
      x = `
  <Execute xmlns="urn:schemas-microsoft-com:xml-analysis">
    <Command>
      <Statement>
        ${M}
      </Statement>
    </Command>
    <Properties>
      <PropertyList>
        <Format>${B}</Format>
        <Catalog>${L}</Catalog>
      </PropertyList>
    </Properties>
  </Execute>`.trim();
    }
    c = // Encoding is not supported
    // `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" ${encoding} ${this.wsdl.xmlnsInEnvelope}'>'` +
    `<soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/" ${this.wsdl.xmlnsInEnvelope}><soap:Header>${b}${l}</soap:Header><soap:Body>` + x + "</soap:Body></soap:Envelope>", (c.includes("GeoJson") || c.includes("SELECT")) && (c = c.replaceAll("ana:", "")), c = c.replace("<Execute>", '<Execute xmlns="urn:schemas-microsoft-com:xml-analysis">');
    const g = await (await oe(s, c, T)).text();
    return this.wsdl.xmlToObject(g);
  }
}
let N, w, q, f, k, P, C, m = function(t) {
  t = u.replace(t, null, null, `\r
`, `
`), t = u.replace(t, null, null, "\r", `
`), this.m_xml = t, this.m_iP = 0, this.m_iState = m._STATE_PROLOG, this.m_stack = new I(), this._clearAttributes(), this.m_pause = !1, this.m_preInterruptIState = m._STATE_PROLOG, this.m_namespaceList = new Array(), this.m_chunkTransitionContinuation = null;
};
m._NONE = 0;
m._ELM_B = 1;
m._ELM_E = 2;
m._ELM_EMP = 3;
m._ATT = 4;
m._TEXT = 5;
m._ENTITY = 6;
m._PI = 7;
m._CDATA = 8;
m._COMMENT = 9;
m._DTD = 10;
m._ERROR = 11;
m._INTERRUPT = 12;
m._CONT_XML = 0;
m._CONT_ALT = 1;
m._ATT_NAME = 0;
m._ATT_VAL = 1;
m._STATE_PROLOG = 1;
m._STATE_DOCUMENT = 2;
m._STATE_MISC = 3;
m._errs = new Array();
m.ERR_CLOSE_PI = 0;
m.ERR_CLOSE_DTD = 1;
m.ERR_CLOSE_COMMENT = 2;
m.ERR_CLOSE_CDATA = 3;
m.ERR_CLOSE_ELM = 4;
m.ERR_CLOSE_ENTITY = 5;
m.ERR_PI_TARGET = 6;
m.ERR_ELM_EMPTY = 7;
m.ERR_ELM_NAME = 8;
m.ERR_ELM_LT_NAME = 9;
m.ERR_ATT_VALUES = 10;
m.ERR_ATT_LT_NAME = 11;
m.ERR_ATT_LT_VALUE = 12;
m.ERR_ATT_DUP = 13;
m.ERR_ENTITY_UNKNOWN = 14;
m.ERR_INFINITELOOP = 15;
m.ERR_DOC_STRUCTURE = 16;
m.ERR_ELM_NESTING = 17;
m._errs[m.ERR_CLOSE_PI] = "PI: missing closing sequence";
m._errs[m.ERR_CLOSE_DTD] = "DTD: missing closing sequence";
m._errs[m.ERR_CLOSE_COMMENT] = "Comment: missing closing sequence";
m._errs[m.ERR_CLOSE_CDATA] = "CDATA: missing closing sequence";
m._errs[m.ERR_CLOSE_ELM] = "Element: missing closing sequence";
m._errs[m.ERR_CLOSE_ENTITY] = "Entity: missing closing sequence";
m._errs[m.ERR_PI_TARGET] = "PI: target is required";
m._errs[m.ERR_ELM_EMPTY] = "Element: cannot be both empty and closing";
m._errs[m.ERR_ELM_NAME] = 'Element: name must immediatly follow "<"';
m._errs[m.ERR_ELM_LT_NAME] = 'Element: "<" not allowed in element names';
m._errs[m.ERR_ATT_VALUES] = "Attribute: values are required and must be in quotes";
m._errs[m.ERR_ATT_LT_NAME] = 'Element: "<" not allowed in attribute names';
m._errs[m.ERR_ATT_LT_VALUE] = 'Attribute: "<" not allowed in attribute values';
m._errs[m.ERR_ATT_DUP] = "Attribute: duplicate attributes not allowed";
m._errs[m.ERR_ENTITY_UNKNOWN] = "Entity: unknown entity";
m._errs[m.ERR_INFINITELOOP] = "Infininte loop";
m._errs[m.ERR_DOC_STRUCTURE] = "Document: only comments, processing instructions, or whitespace allowed outside of document element";
m._errs[m.ERR_ELM_NESTING] = "Element: must be nested correctly";
m.prototype.continueParsing = function(t) {
  this.m_chunkTransitionContinuation && (t = this.m_chunkTransitionContinuation + t), t = u.replace(t, null, null, `\r
`, `
`), t = u.replace(t, null, null, "\r", `
`), this.m_xml = t, this.m_iP = 0, this.m_iState = m._STATE_DOCUMENT, this.m_pause = !1, this.m_preInterruptIState = m._STATE_PROLOG, this.m_chunkTransitionContinuation = null;
};
m.prototype._addAttribute = function(t, e) {
  this.m_atts[this.m_atts.length] = new Array(t, e);
};
m.prototype._checkStructure = function(t) {
  if (m._STATE_PROLOG == this.m_iState) {
    if ((m._TEXT == t || m._ENTITY == t) && u.indexOfNonWhitespace(
      this.getContent(),
      this.getContentBegin(),
      this.getContentEnd()
    ) != -1)
      return this._setErr(m.ERR_DOC_STRUCTURE);
    (m._ELM_B == t || m._ELM_EMP == t) && (this.m_iState = m._STATE_DOCUMENT);
  }
  if (m._STATE_DOCUMENT == this.m_iState) {
    if ((m._ELM_B == t || m._ELM_EMP == t) && this.m_stack.push(this.getName()), m._ELM_E == t || m._ELM_EMP == t) {
      let e = this.m_stack.pop();
      if (e == null || e != this.getName())
        return this._setErr(m.ERR_ELM_NESTING);
    }
    if (this.m_stack.count() == 0)
      return this.m_iState = m._STATE_MISC, t;
  }
  if (m._STATE_MISC == this.m_iState) {
    if (m._ELM_B == t || m._ELM_E == t || m._ELM_EMP == t || m.EVT_DTD == t)
      return this._setErr(m.ERR_DOC_STRUCTURE);
    if ((m._TEXT == t || m._ENTITY == t) && u.indexOfNonWhitespace(
      this.getContent(),
      this.getContentBegin(),
      this.getContentEnd()
    ) != -1)
      return this._setErr(m.ERR_DOC_STRUCTURE);
  }
  return t;
};
m.prototype._clearAttributes = function() {
  this.m_atts = new Array();
};
m.prototype._findAttributeIndex = function(t) {
  for (let e = 0; e < this.m_atts.length; e++)
    if (this.m_atts[e][m._ATT_NAME] == t)
      return e;
  return -1;
};
m.prototype.getAttributeCount = function() {
  return this.m_atts ? this.m_atts.length : 0;
};
m.prototype.getAttributeName = function(t) {
  return t < 0 || t >= this.m_atts.length ? null : this.m_atts[t][m._ATT_NAME];
};
m.prototype.getAttributeValue = function(t) {
  return t < 0 || t >= this.m_atts.length ? null : ue(this.m_atts[t][m._ATT_VAL]);
};
m.prototype.getAttributeValueByName = function(t) {
  return this.getAttributeValue(this._findAttributeIndex(t));
};
m.prototype.getColumnNumber = function() {
  return u.getColumnNumber(this.m_xml, this.m_iP);
};
m.prototype.getContent = function() {
  return this.m_cSrc == m._CONT_XML ? this.m_xml : this.m_cAlt;
};
m.prototype.getContentBegin = function() {
  return this.m_cB;
};
m.prototype.getContentEnd = function() {
  return this.m_cE;
};
m.prototype.getLineNumber = function() {
  return u.getLineNumber(this.m_xml, this.m_iP);
};
m.prototype.getName = function() {
  return this.m_name;
};
m.prototype.pause = function() {
  this.m_pause = !0;
};
m.prototype.resume = function() {
  this.m_pause = !1, this.m_iState = this.m_preInterruptIState;
};
m.prototype.next = function() {
  return this.m_pause ? (this.m_preInterruptIState = this.m_iState, m._INTERRUPT) : this._checkStructure(this._parse());
};
m.prototype._parse = function() {
  if (this.m_iP == this.m_xml.length)
    return m._NONE;
  function t(n, s, a) {
    for (let i = 0; i < n.length; i++)
      if (n.charAt(i) != s.charAt(a + i)) return -1;
    return a;
  }
  let e = this.m_xml.charAt(this.m_iP);
  return e !== "<" && e !== "&" ? this._parseText(this.m_iP) : this.m_iP == t("<?", this.m_xml, this.m_iP) ? this._parsePI(this.m_iP + 2) : this.m_iP == t("<!DOCTYPE", this.m_xml, this.m_iP) ? this._parseDTD(this.m_iP + 9) : this.m_iP == t("<!--", this.m_xml, this.m_iP) ? this._parseComment(this.m_iP + 4) : this.m_iP == t("<![CDATA[", this.m_xml, this.m_iP) ? this._parseCDATA(this.m_iP + 9) : this.m_iP == t("<", this.m_xml, this.m_iP) ? this._parseElement(this.m_iP + 1) : this.m_iP == t("&", this.m_xml, this.m_iP) ? this._parseEntity(this.m_iP + 1) : this._parseText(this.m_iP);
};
m.prototype._parsePrefixAndElementName = function(t) {
  return q = t.split(":", 2), {
    prefix: q.length === 1 ? "" : q[0],
    name: q.length === 1 ? t : q[1]
  };
};
m.prototype._parseNamespacesAndAtts = function(t) {
  k = this;
  let e = [], n = [];
  return t.map(function(s) {
    return s[0].slice(0, 5) === "xmlns" ? e.push({
      prefix: s[0].slice(6),
      uri: s[1],
      scopetag: k.m_name
    }) : n.push(s), "not used";
  }), this.m_namespaceList = this.m_namespaceList.concat(e), [
    n,
    e.map(function(s) {
      return [s.prefix, s.uri];
    })
  ];
};
m.prototype._getContextualNamespace = function(t) {
  if (t !== "")
    for (let e in this.m_namespaceList) {
      const n = this.m_namespaceList[e];
      if (n.prefix === t)
        return n.uri;
    }
  for (let e = this.m_namespaceList.length - 1; e >= 0; e--) {
    const n = this.m_namespaceList[e];
    if (n.prefix === "")
      return n.uri;
  }
  return "";
};
m.prototype._removeExpiredNamesapces = function(t) {
  const e = [];
  this.m_namespaceList.map(function(n) {
    n.scopetag !== t && e.push(n);
  }), this.m_namespaceList = e;
};
m.prototype._parseAttribute = function(t, e) {
  let n, s, a, i, r, d, x, c;
  if (this.m_cAlt = "", n = u.indexOfNonWhitespace(this.m_xml, t, e), n == -1 || n >= e)
    return n;
  if (a = this.m_xml.indexOf("=", n), a == -1 || a > e)
    return this._setErr(m.ERR_ATT_VALUES);
  if (s = u.lastIndexOfNonWhitespace(this.m_xml, n, a), i = u.indexOfNonWhitespace(this.m_xml, a + 1, e), i == -1 || i > e)
    return this._setErr(m.ERR_ATT_VALUES);
  if (d = this.m_xml.charAt(i), u.QUOTES.indexOf(d) == -1)
    return this._setErr(m.ERR_ATT_VALUES);
  if (r = this.m_xml.indexOf(d, i + 1), r == -1 || r > e)
    return this._setErr(m.ERR_ATT_VALUES);
  if (x = this.m_xml.substring(n, s + 1), c = this.m_xml.substring(i + 1, r), x.indexOf("<") != -1)
    return this._setErr(m.ERR_ATT_LT_NAME);
  if (c.indexOf("<") != -1)
    return this._setErr(m.ERR_ATT_LT_VALUE);
  if (c = u.replace(c, null, null, `
`, " "), c = u.replace(c, null, null, "	", " "), N = this._replaceEntities(c), N == m._ERROR)
    return N;
  if (c = this.m_cAlt, this._findAttributeIndex(x) == -1)
    this._addAttribute(x, c);
  else
    return this._setErr(m.ERR_ATT_DUP);
  return this.m_iP = r + 2, m._ATT;
};
m.prototype._parseCDATA = function(t) {
  const e = this.m_xml.indexOf("]]>", t);
  return e == -1 ? (this.m_chunkTransitionContinuation = this.m_xml.slice(t - 9), m._INTERRUPT) : (this._setContent(m._CONT_XML, t, e), this.m_iP = e + 3, m._CDATA);
};
m.prototype._parseComment = function(t) {
  const e = this.m_xml.indexOf("-->", t);
  return e == -1 ? (this.m_chunkTransitionContinuation = this.m_xml.slice(t - 4), m._INTERRUPT) : (this._setContent(m._CONT_XML, t, e), this.m_iP = e + 3, m._COMMENT);
};
m.prototype._parseDTD = function(t) {
  let e, n, s, a;
  if (e = this.m_xml.indexOf(">", t), e == -1)
    return this.m_chunkTransitionContinuation = this.m_xml.slice(t - 9), m._INTERRUPT;
  for (s = this.m_xml.indexOf("[", t), n = s != -1 && s < e ? "]>" : ">"; ; ) {
    if (e == a)
      return this._setErr(m.ERR_INFINITELOOP);
    if (a = e, e = this.m_xml.indexOf(n, t), e == -1)
      return this._setErr(m.ERR_CLOSE_DTD);
    if (this.m_xml.substring(e - 1, e + 2) != "]]>")
      break;
  }
  return this.m_iP = e + n.length, m._DTD;
};
m.prototype._parseElement = function(t) {
  let e, n, s, a, i, r, d;
  if (n = e = this.m_xml.indexOf(">", t), e == -1)
    return this.m_chunkTransitionContinuation = this.m_xml.slice(t - 1), m._INTERRUPT;
  if (this.m_xml.charAt(t) == "/" ? (i = m._ELM_E, t++) : i = m._ELM_B, this.m_xml.charAt(e - 1) == "/") {
    if (i == m._ELM_E)
      return this._setErr(m.ERR_ELM_EMPTY);
    i = m._ELM_EMP, n--;
  }
  if (n = u.lastIndexOfNonWhitespace(this.m_xml, t, n), e - t != 1 && u.indexOfNonWhitespace(this.m_xml, t, n) != t)
    return this._setErr(m.ERR_ELM_NAME);
  if (this._clearAttributes(), s = u.indexOfWhitespace(this.m_xml, t, n), s == -1)
    s = n + 1;
  else
    for (this.m_iP = s; this.m_iP < n; ) {
      if (this.m_iP == d) return this._setErr(m.ERR_INFINITELOOP);
      if (d = this.m_iP, a = this._parseAttribute(this.m_iP, n), a == m._ERROR) return a;
    }
  return r = this.m_xml.substring(t, s), r.indexOf("<") != -1 ? this._setErr(m.ERR_ELM_LT_NAME) : (this.m_name = r, this.m_iP = e + 1, i);
};
m.prototype._parseEntity = function(t) {
  const e = this.m_xml.indexOf(";", t);
  return e == -1 ? (this.m_chunkTransitionContinuation = this.m_xml.slice(t - 1), m._INTERRUPT) : (this.m_iP = e + 1, this._replaceEntity(this.m_xml, t, e));
};
m.prototype._parsePI = function(t) {
  let e, n, s, a, i;
  return e = this.m_xml.indexOf("?>", t), e == -1 ? (this.m_chunkTransitionContinuation = this.m_xml.slice(t - 2), m._INTERRUPT) : (n = u.indexOfNonWhitespace(this.m_xml, t, e), n == -1 ? this._setErr(m.ERR_PI_TARGET) : (s = u.indexOfWhitespace(this.m_xml, n, e), s == -1 && (s = e), a = u.indexOfNonWhitespace(this.m_xml, s, e), a == -1 && (a = e), i = u.lastIndexOfNonWhitespace(this.m_xml, a, e), i == -1 && (i = e - 1), this.m_name = this.m_xml.substring(n, s), this._setContent(m._CONT_XML, a, i + 1), this.m_iP = e + 2, m._PI));
};
m.prototype._parseText = function(t) {
  let e, n;
  for (e = t; e < this.m_xml.length && (n = this.m_xml.charAt(e), !(n === "<" || n === "&")); ++e)
    ;
  return this._setContent(m._CONT_XML, t, e), this.m_iP = e, m._TEXT;
};
m.prototype._replaceEntities = function(t, e, n) {
  if (u.isEmpty(t)) return "";
  e = e || 0, n = n || t.length;
  var s, a, i = "";
  for (s = t.indexOf("&", e), a = e; s > 0 && s < n; ) {
    if (i += t.substring(a, s), a = t.indexOf(";", s) + 1, a == 0 || a > n)
      return this._setErr(m.ERR_CLOSE_ENTITY);
    if (N = this._replaceEntity(t, s + 1, a - 1), N == m._ERROR)
      return N;
    i += this.m_cAlt, s = t.indexOf("&", a);
  }
  return a != n && (i += t.substring(a, n)), this._setContent(m._CONT_ALT, i), m._ENTITY;
};
m.prototype._replaceEntity = function(t, e, n) {
  if (u.isEmpty(t)) return -1;
  switch (e = e || 0, n = n || t.length, t.substring(e, n)) {
    case "amp":
      C = "&";
      break;
    case "lt":
      C = "<";
      break;
    case "gt":
      C = ">";
      break;
    case "apos":
      C = "'";
      break;
    case "quot":
      C = '"';
      break;
    case "nbsp":
      C = "";
      break;
    case "cent":
      C = "¢";
      break;
    case "pound":
      C = "£";
      break;
    case "yen":
      C = "¥";
      break;
    case "euro":
      C = "€";
      break;
    case "sect":
      C = "§";
      break;
    case "copy":
      C = "©";
      break;
    case "reg":
      C = "®";
      break;
    default:
      t.charAt(e) == "#" ? C = String.fromCharCode(parseInt(t.substring(e + 1, n))) : C = " ";
      break;
  }
  return this._setContent(m._CONT_ALT, C), m._ENTITY;
};
m.prototype._setContent = function(t) {
  const e = arguments;
  m._CONT_XML == t ? (this.m_cAlt = null, this.m_cB = e[1], this.m_cE = e[2]) : (this.m_cAlt = e[1], this.m_cB = 0, this.m_cE = e[1].length), this.m_cSrc = t;
};
m.prototype._setErr = function(t) {
  const e = m._errs[t];
  return this.m_cAlt = e, this.m_cB = 0, this.m_cE = e.length, this.m_cSrc = m._CONT_ALT, m._ERROR;
};
const o = function(t) {
  const e = new (function() {
  })(), n = new Function();
  n.prototype.onStartDocument = function(s) {
    e.onStartDocument = s;
  }, n.prototype.onEndDocument = function(s) {
    e.onEndDocument = s;
  }, n.prototype.onStartElementNS = function(s) {
    e.onStartElementNS = s;
  }, n.prototype.onEndElementNS = function(s) {
    e.onEndElementNS = s;
  }, n.prototype.onCharacters = function(s) {
    e.onCharacters = s;
  }, n.prototype.onCdata = function(s) {
    e.onCdata = s;
  }, n.prototype.onComment = function(s) {
    e.onComment = s;
  }, n.prototype.onWarning = function(s) {
    e.onWarning = s;
  }, n.prototype.onError = function(s) {
    e.onError = s;
  }, t(new n()), this.m_hndDoc = e, this.m_hndErr = e, this.m_hndLex = e, this.m_interrupted = !1;
};
o.DOC_B = 1;
o.DOC_E = 2;
o.ELM_B = 3;
o.ELM_E = 4;
o.CHARS = 5;
o.PI = 6;
o.CD_B = 7;
o.CD_E = 8;
o.CMNT = 9;
o.DTD_B = 10;
o.DTD_E = 11;
o.prototype.parseString = function(t) {
  const e = this;
  let n = !0;
  e.m_parser ? e.m_parser.continueParsing(t) : (e.m_parser = new m(t), n = !1), e.m_bErr = !1, !e.m_bErr && !n && e._fireEvent(o.DOC_B), e._parseLoop(), !e.m_bErr && !e.m_interrupted && e._fireEvent(o.DOC_E), e.m_xml = null, e.m_iP = 0, e.m_interrupted = !1;
};
o.prototype.pause = function() {
  this.m_parser.pause();
};
o.prototype.resume = function() {
  this.m_parser.resume(), this.m_interrupted = !1;
  const t = this;
  setTimeout(function() {
    t._parseLoop(), !t.m_bErr && !t.m_interrupted && t._fireEvent(o.DOC_E);
  }, 0);
};
o.prototype.setDocumentHandler = function(t) {
  this.m_hndDoc = t;
};
o.prototype.setErrorHandler = function(t) {
  this.m_hndErr = t;
};
o.prototype.setLexicalHandler = function(t) {
  this.m_hndLex = t;
};
o.prototype.getColumnNumber = function() {
  return this.m_parser.getColumnNumber();
};
o.prototype.getLineNumber = function() {
  return this.m_parser.getLineNumber();
};
o.prototype.getMessage = function() {
  return this.m_strErrMsg;
};
o.prototype.getPublicId = function() {
  return null;
};
o.prototype.getSystemId = function() {
  return null;
};
o.prototype.getLength = function() {
  return this.m_parser.getAttributeCount();
};
o.prototype.getName = function(t) {
  return this.m_parser.getAttributeName(t);
};
o.prototype.getValue = function(t) {
  return this.m_parser.getAttributeValue(t);
};
o.prototype.getValueByName = function(t) {
  return this.m_parser.getAttributeValueByName(t);
};
o.prototype._fireError = function(t) {
  this.m_strErrMsg = t, this.m_bErr = !0, this.m_hndErr?.onError && this.m_hndErr.onError(this.m_strErrMsg);
};
o.prototype._fireEvent = function(t) {
  let e, n, s = arguments, a = s.length - 1;
  this.m_bErr || (o.DOC_B == t ? (n = "onStartDocument", e = this.m_hndDoc) : o.DOC_E == t ? (n = "onEndDocument", e = this.m_hndDoc) : o.ELM_B == t ? (n = "onStartElementNS", e = this.m_hndDoc) : o.ELM_E == t ? (n = "onEndElementNS", e = this.m_hndDoc) : o.CHARS == t ? (n = "onCharacters", e = this.m_hndDoc) : o.PI == t ? (n = "processingInstruction", e = this.m_hndDoc) : o.CD_B == t ? (n = "onCdata", e = this.m_hndLex) : o.CD_E == t ? (n = "onEndCDATA", e = this.m_hndLex) : o.CMNT == t && (n = "onComment", e = this.m_hndLex), e?.[n] && (a == 0 ? e[n]() : a == 1 ? e[n](s[1]) : a == 2 ? e[n](s[1], s[2]) : a == 3 ? e[n](s[1], s[2], s[3]) : a == 4 ? e[n](s[1], s[2], s[3], s[4]) : a == 5 ? e[n](s[1], s[2], s[3], s[4], s[5]) : a == 6 && e[n](s[1], s[2], s[3], s[4], s[5], s[6])));
};
o.prototype._parseLoop = function() {
  let t, e;
  for (e = this.m_parser; !this.m_bErr; )
    if (t = e.next(), t == m._ELM_B) {
      w = this.m_parser.m_atts, f = e._parsePrefixAndElementName(e.getName()), P = e._parseNamespacesAndAtts(w);
      const n = e._getContextualNamespace(f.prefix);
      this._fireEvent(
        o.ELM_B,
        f.name,
        P[0],
        f.prefix === "" ? null : f.prefix,
        n === "" ? null : n,
        P[1]
      );
    } else if (t == m._ELM_E) {
      f = e._parsePrefixAndElementName(e.getName());
      const n = e._getContextualNamespace(f.prefix);
      e._removeExpiredNamesapces(e.getName()), this._fireEvent(
        o.ELM_E,
        f.name,
        f.prefix === "" ? null : f.prefix,
        n === "" ? null : n
      );
    } else if (t == m._ELM_EMP) {
      w = this.m_parser.m_atts, f = e._parsePrefixAndElementName(e.getName()), P = e._parseNamespacesAndAtts(w);
      const n = e._getContextualNamespace(f.prefix);
      this._fireEvent(
        o.ELM_B,
        f.name,
        P[0],
        f.prefix === "" ? null : f.prefix,
        n === "" ? null : n,
        P[1],
        !0
      ), e._removeExpiredNamesapces(e.getName()), this._fireEvent(
        o.ELM_E,
        f.name,
        f.prefix === "" ? null : f.prefix,
        n === "" ? null : n,
        !0
      );
    } else if (t == m._TEXT)
      this._fireEvent(
        o.CHARS,
        e.getContent().slice(e.getContentBegin(), e.getContentEnd())
      );
    else if (t == m._ENTITY)
      this._fireEvent(
        o.CHARS,
        e.getContent(),
        e.getContentBegin(),
        e.getContentEnd() - e.getContentBegin()
      );
    else if (t == m._PI)
      this._fireEvent(
        o.PI,
        e.getName(),
        e.getContent().substring(e.getContentBegin(), e.getContentEnd())
      );
    else if (t == m._CDATA)
      this._fireEvent(
        o.CD_B,
        e.getContent().slice(e.getContentBegin(), e.getContentEnd())
      );
    else if (t == m._COMMENT)
      this._fireEvent(
        o.CMNT,
        e.getContent().slice(e.getContentBegin(), e.getContentEnd())
      );
    else {
      if (t == m._DTD)
        return;
      if (t == m._ERROR)
        this._fireError(e.getContent());
      else if (t == m._INTERRUPT) {
        this.m_interrupted = !0;
        return;
      } else if (t == m._NONE)
        return;
    }
};
const u = function() {
};
u.WHITESPACE = ` 	
\r`;
u.QUOTES = `"'`;
u.getColumnNumber = function(t, e) {
  if (u.isEmpty(t))
    return -1;
  e = e || t.length;
  const n = t.substring(0, e).split(`
`);
  n.length--;
  const s = n.join(`
`).length;
  return e - s;
};
u.getLineNumber = function(t, e) {
  return u.isEmpty(t) ? -1 : (e = e || t.length, t.substring(0, e).split(`
`).length);
};
u.indexOfNonWhitespace = function(t, e, n) {
  if (u.isEmpty(t))
    return -1;
  e = e || 0, n = n || t.length;
  for (let s = e; s < n; s++)
    if (u.WHITESPACE.indexOf(t.charAt(s)) == -1)
      return s;
  return -1;
};
u.indexOfWhitespace = function(t, e, n) {
  if (u.isEmpty(t))
    return -1;
  e = e || 0, n = n || t.length;
  for (var s = e; s < n; s++)
    if (u.WHITESPACE.indexOf(t.charAt(s)) != -1)
      return s;
  return -1;
};
u.isEmpty = function(t) {
  return t == null || t.length == 0;
};
u.lastIndexOfNonWhitespace = function(t, e, n) {
  if (u.isEmpty(t))
    return -1;
  e = e || 0, n = n || t.length;
  for (var s = n - 1; s >= e; s--)
    if (u.WHITESPACE.indexOf(t.charAt(s)) == -1)
      return s;
  return -1;
};
u.replace = function(t, e, n, s, a) {
  return u.isEmpty(t) ? "" : (e = e || 0, n = n || t.length, t.toString().substring(e, n).split(s).join(a));
};
const I = function() {
  this.m_arr = new Array();
};
I.prototype.clear = function() {
  this.m_arr = new Array();
};
I.prototype.count = function() {
  return this.m_arr.length;
};
I.prototype.destroy = function() {
  this.m_arr = null;
};
I.prototype.peek = function() {
  return this.m_arr.length == 0 ? null : this.m_arr[this.m_arr.length - 1];
};
I.prototype.pop = function() {
  if (this.m_arr.length == 0)
    return null;
  const t = this.m_arr[this.m_arr.length - 1];
  return this.m_arr.length--, t;
};
I.prototype.push = function(t) {
  this.m_arr[this.m_arr.length] = t;
};
function ue(t) {
  const e = /&lt;/g, n = /&gt;/g, s = /&quot;/g, a = /&apos;/g;
  return t = t.replace(e, "<"), t = t.replace(n, ">"), t = t.replace(s, '"'), t = t.replace(a, "'"), t = t.replace(/&amp;/g, "&"), t;
}
const V = { SaxParser: o }, pe = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<wsdl:definitions
  xmlns="urn:daanse-eclipse-org:xmla-ws"
  xmlns:soap="http://schemas.xmlsoap.org/wsdl/soap/"
  xmlns:wsdl="http://schemas.xmlsoap.org/wsdl/"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  xmlns:ana="urn:schemas-microsoft-com:xml-analysis"
  xmlns:ext="http://schemas.microsoft.com/analysisservices/2003/ext"
  xmlns:msxmla="http://schemas.microsoft.com/analysisservices/2003/xmla"
  xmlns:eng="http://schemas.microsoft.com/analysisservices/2003/engine"
  xmlns:eng2="http://schemas.microsoft.com/analysisservices/2003/engine/2"
  xmlns:eng2_2="http://schemas.microsoft.com/analysisservices/2003/engine/2/2"
  xmlns:eng100="http://schemas.microsoft.com/analysisservices/2008/engine/100"
  xmlns:eng100_100="http://schemas.microsoft.com/analysisservices/2008/engine/100/100"
  xmlns:eng200="http://schemas.microsoft.com/analysisservices/2010/engine/200"
  xmlns:eng200_200="http://schemas.microsoft.com/analysisservices/2010/engine/200/200"
  xmlns:eng300="http://schemas.microsoft.com/analysisservices/2011/engine/300"
  xmlns:eng300_300="http://schemas.microsoft.com/analysisservices/2011/engine/300/300"
  xmlns:eng400="http://schemas.microsoft.com/analysisservices/2012/engine/400"
  xmlns:eng600="http://schemas.microsoft.com/analysisservices/2013/engine/600"
  xmlns:eng800="http://schemas.microsoft.com/analysisservices/2013/engine/800"
  xmlns:ana-ds="urn:schemas-microsoft-com:xml-analysis:mddataset"
  xmlns:ana-e="urn:schemas-microsoft-com:xml-analysis:empty"
  xmlns:ana-m="http://schemas.microsoft.com/analysisservices/2003/xmla-multipleresults"
  xmlns:ana-rs="urn:schemas-microsoft-com:xml-analysis:rowset"
  xmlns:ana-x="urn:schemas-microsoft-com:xml-analysis:exception"
  targetNamespace="urn:daanse-eclipse-org:xmla-ws"
  name="SQLServerAnalysisServicesProtocol">
  <wsdl:types>
    <xsd:schema>
      <xsd:import
        namespace="http://schemas.microsoft.com/analysisservices/2003/xmla"
        schemaLocation="msxmla.xsd" />
    </xsd:schema>

    <xsd:schema>
      <xsd:import
        namespace="http://schemas.microsoft.com/analysisservices/2003/ext"
        schemaLocation="ext.xsd" />
    </xsd:schema>

    <xsd:schema>
      <xsd:import
        namespace="urn:schemas-microsoft-com:xml-analysis"
        schemaLocation="xmla.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="urn:schemas-microsoft-com:xml-analysis:mddataset"
        schemaLocation="xmla-ds.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="urn:schemas-microsoft-com:xml-analysis:rowset"
        schemaLocation="xmla-rs.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="urn:schemas-microsoft-com:xml-analysis:empty"
        schemaLocation="xmla-e.xsd" />
    </xsd:schema>
    <xsd:schema>

      <xsd:import
        namespace="http://schemas.microsoft.com/analysisservices/2003/xmla-multipleresults"
        schemaLocation="xmla-m.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="urn:schemas-microsoft-com:xml-analysis:exception"
        schemaLocation="xmla-x.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="http://schemas.microsoft.com/analysisservices/2003/engine"
        schemaLocation="eng.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="http://schemas.microsoft.com/analysisservices/2003/engine/2"
        schemaLocation="eng2.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="http://schemas.microsoft.com/analysisservices/2003/engine/2/2"
        schemaLocation="eng2_2.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="http://schemas.microsoft.com/analysisservices/2008/engine/100"
        schemaLocation="eng100.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="http://schemas.microsoft.com/analysisservices/2008/engine/100/100"
        schemaLocation="eng100_100.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="http://schemas.microsoft.com/analysisservices/2010/engine/200"
        schemaLocation="eng200.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="http://schemas.microsoft.com/analysisservices/2010/engine/200/200"
        schemaLocation="eng200_200.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="http://schemas.microsoft.com/analysisservices/2011/engine/300"
        schemaLocation="eng300.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="http://schemas.microsoft.com/analysisservices/2011/engine/300/300"
        schemaLocation="eng300_300.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="http://schemas.microsoft.com/analysisservices/2012/engine/400"
        schemaLocation="eng400.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="http://schemas.microsoft.com/analysisservices/2013/engine/600"
        schemaLocation="eng600.xsd" />
    </xsd:schema>
    <xsd:schema>
      <xsd:import
        namespace="http://schemas.microsoft.com/analysisservices/2013/engine/800"
        schemaLocation="eng800.xsd" />
    </xsd:schema>
  </wsdl:types>

  <wsdl:message name="AuthenticateSoapIn">
    <wsdl:part name="parameters" element="ext:Authenticate" />
  </wsdl:message>
  <wsdl:message name="AuthenticateSoapOut">
    <wsdl:part name="parameters"
      element="ext:AuthenticateResponse" />
  </wsdl:message>

  <wsdl:message name="DiscoverSoapIn">
    <wsdl:part name="parameters" element="ana:Discover" />
    <wsdl:part name="Session" element="ana:Session" />
    <wsdl:part name="BeginSession" element="ana:BeginSession" />
    <wsdl:part name="EndSession" element="ana:EndSession" />
  </wsdl:message>
  <wsdl:message name="DiscoverSoapOut">
    <wsdl:part name="parameters" element="ana:DiscoverResponse" />
    <wsdl:part name="Session" element="ana:Session" />
  </wsdl:message>
  <wsdl:message name="ExecuteSoapIn">
    <wsdl:part name="parameters" element="ana:Execute" />
    <wsdl:part name="Session" element="ana:Session" />
    <wsdl:part name="BeginSession" element="ana:BeginSession" />
    <wsdl:part name="EndSession" element="ana:EndSession" />
  </wsdl:message>
  <wsdl:message name="ExecuteSoapOut">
    <wsdl:part name="parameters" element="ana:ExecuteResponse" />
    <wsdl:part name="Session" element="ana:Session" />
  </wsdl:message>

  <wsdl:portType name="MsXmlAnalysisSoapPortType">
    <wsdl:operation name="Authenticate">
      <wsdl:input message="AuthenticateSoapIn" />
      <wsdl:output message="AuthenticateSoapOut" />
    </wsdl:operation>
    <wsdl:operation name="Discover">
      <wsdl:input message="DiscoverSoapIn" name="DiscoverSoapIn" />
      <wsdl:output message="DiscoverSoapOut" />
    </wsdl:operation>
    <wsdl:operation name="Execute">
      <wsdl:input message="ExecuteSoapIn" />
      <wsdl:output message="ExecuteSoapOut" />
    </wsdl:operation>
  </wsdl:portType>

  <wsdl:binding name="MsXmlAnalysisSoapBinding"
    type="MsXmlAnalysisSoapPortType">
    <!-- -->
    <soap:binding
      transport="http://schemas.xmlsoap.org/soap/http" style="document" />

    <wsdl:operation name="Authenticate">
      <soap:operation style="document" />
      <wsdl:input>
        <soap:body parts="parameters" use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body parts="parameters" use="literal" />
      </wsdl:output>
    </wsdl:operation>

    <wsdl:operation name="Discover">
      <soap:operation
        soapAction="urn:schemas-microsoft-com:xml-analysis:Discover"
        style="document" />
      <wsdl:input>
        <soap:body parts="parameters" use="literal" />
        <soap:header message="DiscoverSoapIn" part="Session"
          use="literal" />
        <soap:header message="DiscoverSoapIn"
          part="BeginSession" use="literal" />
        <soap:header message="DiscoverSoapIn" part="EndSession"
          use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body parts="parameters"
          use="literal" />
        <soap:header message="DiscoverSoapOut" part="Session"
          use="literal" />
      </wsdl:output>
    </wsdl:operation>
    <wsdl:operation name="Execute">
      <soap:operation
        soapAction="urn:schemas-microsoft-com:xml-analysis:Execute"
        style="document" />
      <wsdl:input>
        <soap:body parts="parameters" use="literal" />
        <soap:header message="ExecuteSoapIn" part="Session"
          use="literal" />
        <soap:header message="ExecuteSoapIn" part="BeginSession"
          use="literal" />
        <soap:header message="ExecuteSoapIn" part="EndSession"
          use="literal" />
      </wsdl:input>
      <wsdl:output>
        <soap:body parts="parameters" use="literal" />
        <soap:header message="ExecuteSoapOut" part="Session"
          use="literal" />
      </wsdl:output>
    </wsdl:operation>
  </wsdl:binding>

  <wsdl:service name="MsXmlAnalysisService">
    <wsdl:port name="MsXmlAnalysisSoapPort"
      binding="MsXmlAnalysisSoapBinding">
      <soap:address location="https://ssemenkoff.dev/emondrian/xmla" />
    </wsdl:port>
  </wsdl:service>
</wsdl:definitions>
`, ye = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0"
  xmlns="http://schemas.microsoft.com/analysisservices/2003/engine"
  targetNamespace="http://schemas.microsoft.com/analysisservices/2003/engine">

  <xsd:element name="LastSchemaUpdate" type="xsd:dateTime" />
  <xsd:element name="LastDataUpdate" type="xsd:dateTime" />

  <xsd:complexType name="ImpersonationInfo">
    <xsd:all>
      <xsd:element name="ImpersonationMode">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Default" />
            <xsd:enumeration value="ImpersonateServiceAccount" />
            <xsd:enumeration value="ImpersonateAnonymous" />
            <xsd:enumeration value="ImpersonateCurrentUser" />
            <xsd:enumeration value="ImpersonateAccount" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Account" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Password" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="ImpersonationInfoSecurity"
        minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="PasswordRemoved" />
            <xsd:enumeration value="Unchanged" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>
</xsd:schema>
`, ge = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0"
  xmlns="http://schemas.microsoft.com/analysisservices/2003/engine/2/2"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  targetNamespace="http://schemas.microsoft.com/analysisservices/2003/engine/2/2">
</xsd:schema>
`, Te = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0"
  xmlns="http://schemas.microsoft.com/analysisservices/2003/engine/2"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  targetNamespace="http://schemas.microsoft.com/analysisservices/2003/engine/2">

  <xsd:element name="MemberKeysUnique">
    <xsd:simpleType>
      <xsd:restriction base="xsd:string">
        <xsd:enumeration value="NotUnique" />
        <xsd:enumeration value="Unique" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>
</xsd:schema>
`, Oe = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0"
  xmlns="http://schemas.microsoft.com/analysisservices/2008/engine/100/100"
  targetNamespace="http://schemas.microsoft.com/analysisservices/2008/engine/100/100">

  <xsd:element name="DbStorageLocation" type="xsd:string" />

  <xsd:element name="HoldoutMaxPercent" type="xsd:int" />
  <xsd:element name="HoldoutMaxCases" type="xsd:int" />
  <xsd:element name="HoldoutSeed" type="xsd:int" />
  <xsd:element name="HoldoutActualSize" type="xsd:int" />

</xsd:schema>
`, he = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0"
  xmlns="http://schemas.microsoft.com/analysisservices/2008/engine/100"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  targetNamespace="http://schemas.microsoft.com/analysisservices/2008/engine/100">

  <xsd:element name="ReadWriteMode">
    <xsd:simpleType>
      <xsd:restriction base="xsd:string">
        <xsd:enumeration value="ReadWrite" />
        <xsd:enumeration value="ReadOnly" />
        <xsd:enumeration value="ReadOnlyExclusive" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>

  <xsd:element name="HoldoutMaxPercent" type="xsd:int" />
  <xsd:element name="HoldoutMaxCases" type="xsd:int" />
  <xsd:element name="HoldoutSeed" type="xsd:int" />
  <xsd:element name="HoldoutActualSize" type="xsd:int" />

  <xsd:element name="DbStorageLocation" type="xsd:string" />

</xsd:schema>
`, be = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0"
  xmlns="http://schemas.microsoft.com/analysisservices/2010/engine/200/200"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  xmlns:ana="urn:schemas-microsoft-com:xml-analysis"
  targetNamespace="http://schemas.microsoft.com/analysisservices/2010/engine/200/200">

  <xsd:import
    namespace="urn:schemas-microsoft-com:xml-analysis"
    schemaLocation="xmla.xsd" />


  <xsd:complexType name="RowNumberBinding">
    <xsd:complexContent>
      <xsd:extension base="ana:Binding" />
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="ExpressionBinding">
    <xsd:complexContent>
      <xsd:extension base="ana:Binding">
        <xsd:all>
          <xsd:element name="Expression" type="xsd:string" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:element name="StorageEngineUsed">
    <xsd:simpleType>
      <xsd:restriction base="xsd:string">
        <xsd:enumeration value="Traditional" />
        <xsd:enumeration value="InMemory" />
        <xsd:enumeration value="Mixed" />
        <xsd:enumeration value="TabularMetadata" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>
  <xsd:element name="ImagePath" type="xsd:string" />
  <xsd:element name="ImageUrl" type="xsd:string" />
  <xsd:element name="ImageUniqueID" type="xsd:string" />
  <xsd:element name="ImageVersion" type="xsd:string" />
  <xsd:element name="Token" type="xsd:string" />

  <xsd:element name="ProcessingRecommendation">
    <xsd:simpleType>
      <xsd:restriction base="xsd:string">
        <xsd:enumeration value="None" />
        <xsd:enumeration value="Stale" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>

  <xsd:element name="ProcessingState">
    <xsd:simpleType>
      <xsd:restriction base="xsd:string">
        <xsd:enumeration value="Processed" />
        <xsd:enumeration value="Unprocessed" />
        <xsd:enumeration value="InvalidExpression" />
        <xsd:enumeration value="CalculationError" />
        <xsd:enumeration value="DependencyError" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>

  <xsd:element name="ShareDimensionStorage">
    <xsd:simpleType>
      <xsd:restriction base="xsd:string">
        <xsd:enumeration value="Distinct" />
        <xsd:enumeration value="Shared" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>

</xsd:schema>
`, ve = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0"
  xmlns="http://schemas.microsoft.com/analysisservices/2010/engine/200"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  targetNamespace="http://schemas.microsoft.com/analysisservices/2010/engine/200">

  <xsd:element name="WarningColumn">
    <xsd:complexType>
      <xsd:all>
        <xsd:element name="Dimension" type="xsd:string" />
        <xsd:element name="Attribute" type="xsd:string" />
      </xsd:all>
    </xsd:complexType>
  </xsd:element>

  <xsd:element name="WarningMeasure">
    <xsd:complexType>
      <xsd:all>
        <xsd:element name="Cube" type="xsd:string" />
        <xsd:element name="MeasureGroup" type="xsd:string" />
        <xsd:element name="MeasureName" type="xsd:string" />
      </xsd:all>
    </xsd:complexType>
  </xsd:element>

  <xsd:complexType name="WarningLocationObject">
    <xsd:choice>
      <xsd:element ref="WarningColumn" />
      <xsd:element ref="WarningMeasure" />
    </xsd:choice>
  </xsd:complexType>

  <xsd:element name="CalculationError">
    <xsd:simpleType>
      <xsd:restriction base="xsd:string">
        <xsd:enumeration value="IgnoreError" />
        <xsd:enumeration value="ReportAndStop" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>

  <xsd:element name="CompatibilityLevel" type="xsd:integer" />

</xsd:schema>
`, fe = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0"
  xmlns="http://schemas.microsoft.com/analysisservices/2011/engine/300/300"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  xmlns:ana="urn:schemas-microsoft-com:xml-analysis"
  xmlns:eng300="http://schemas.microsoft.com/analysisservices/2011/engine/300"
  targetNamespace="http://schemas.microsoft.com/analysisservices/2011/engine/300/300">

  <xsd:import
    namespace="urn:schemas-microsoft-com:xml-analysis"
    schemaLocation="xmla.xsd" />
  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2011/engine/300"
    schemaLocation="eng300.xsd" />

  <xsd:element name="DirectQueryMode">
    <xsd:simpleType>
      <xsd:restriction base="xsd:string">
        <xsd:enumeration value="InMemory" />
        <xsd:enumeration value="DirectQueryWithInMemory" />
        <xsd:enumeration value="InMemoryWithDirectQuery" />
        <xsd:enumeration value="DirectQuery" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>

  <xsd:complexType name="Relationship">
    <xsd:sequence>
      <xsd:element name="ID" type="xsd:string" />
      <xsd:element name="Visible" type="xsd:boolean" />
      <xsd:element name="FromRelationshipEnd"
        type="RelationshipEnd" />
      <xsd:element name="ToRelationshipEnd"
        type="RelationshipEnd" />
    </xsd:sequence>
  </xsd:complexType>
  <xsd:complexType name="RelationshipEnd">
    <xsd:sequence>
      <xsd:element name="Role" type="xsd:string" />
      <xsd:element name="Multiplicity">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="One" />
            <xsd:enumeration value="Many" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DimensionID" type="xsd:string" />
      <xsd:element name="Attributes" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Attribute" minOccurs="0"
              maxOccurs="unbounded">
              <xsd:complexType>
                <xsd:sequence>
                  <xsd:element name="AttributeID" type="xsd:string" />
                </xsd:sequence>
              </xsd:complexType>
            </xsd:element>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation"
              type="RelationshipEndTranslation" minOccurs="0"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="VisualizationProperties"
        type="eng300:RelationshipEndVisualizationProperties" minOccurs="0"
        maxOccurs="1" />
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="RelationshipEndTranslation">
    <xsd:all>
      <xsd:element name="Language" type="xsd:unsignedInt" />
      <xsd:element name="Caption" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="CollectionCaption" type="xsd:string" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DisplayFolder" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="ana:Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:element name="AllowedRowsExpression" type="xsd:string" />

  <xsd:complexType name="Relationships">
    <xsd:sequence>
      <xsd:element name="Relationship" type="Relationship"
        minOccurs="0" maxOccurs="unbounded" />
    </xsd:sequence>
  </xsd:complexType>

  <xsd:element name="XEvent">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element ref="ana:event_session" />
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>

  <xsd:element name="DirectQueryUsage">
    <xsd:simpleType>
      <xsd:restriction base="xsd:string">
        <xsd:enumeration value="InMemoryWithDirectQuery" />
        <xsd:enumeration value="DirectQueryOnly" />
        <xsd:enumeration value="InMemoryOnly" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>

</xsd:schema>
`, Ce = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0"
  xmlns="http://schemas.microsoft.com/analysisservices/2011/engine/300"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  xmlns:eng="http://schemas.microsoft.com/analysisservices/2003/engine"
  targetNamespace="http://schemas.microsoft.com/analysisservices/2011/engine/300">

  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2003/engine"
    schemaLocation="eng.xsd" />


  <xsd:element name="DataEmbeddingStyle">
    <xsd:simpleType>
      <xsd:restriction base="xsd:string">
        <xsd:enumeration value="Embedded" />
        <xsd:enumeration value="NotEmbedded" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>


  <xsd:element name="QueryImpersonationInfo"
    type="eng:ImpersonationInfo" />
  <xsd:element name="QueryHints" type="xsd:string" />
  <xsd:element name="StringStoresCompatibilityLevel">
    <xsd:simpleType>
      <xsd:restriction base="xsd:int">
        <xsd:enumeration value="1050" />
        <xsd:enumeration value="1100" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>
  <xsd:element name="CurrentStringStoresCompatibilityLevel">
    <xsd:simpleType>
      <xsd:restriction base="xsd:int">
        <xsd:enumeration value="1050" />
        <xsd:enumeration value="1100" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>


  <xsd:complexType
    name="RelationshipEndVisualizationProperties">
    <xsd:sequence>
      <xsd:element name="FolderPosition" type="xsd:integer"
        minOccurs="0" maxOccurs="1" default="-1" />
      <xsd:element name="ContextualNameRule" minOccurs="0"
        maxOccurs="1" default="None">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="None" />
            <xsd:enumeration value="Context" />
            <xsd:enumeration value="Merge" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DefaultDetailsPosition"
        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />
      <xsd:element name="DisplayKeyPosition" type="xsd:integer"
        minOccurs="0" maxOccurs="1" default="-1" />
      <xsd:element name="CommonIdentifierPosition"
        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />
      <xsd:element name="IsDefaultMeasure" type="xsd:boolean"
        minOccurs="0" maxOccurs="1" default="false" />
      <xsd:element name="IsDefaultImage" type="xsd:boolean"
        minOccurs="0" maxOccurs="1" default="false" />
      <xsd:element name="SortPropertiesPosition"
        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />
    </xsd:sequence>
  </xsd:complexType>

  <xsd:simpleType name="AttributeHierarchyProcessingState">
    <xsd:restriction base="xsd:string">
      <xsd:enumeration value="Processed" />
      <xsd:enumeration value="Unprocessed" />
      <xsd:enumeration value="DependencyError" />
    </xsd:restriction>
  </xsd:simpleType>

  <xsd:complexType
    name="DimensionAttributeVisualizationProperties">
    <xsd:sequence>
      <xsd:element name="FolderPosition" type="xsd:integer"
        minOccurs="0" maxOccurs="1" default="-1" />
      <xsd:element name="ContextualNameRule" minOccurs="0"
        maxOccurs="1" default="None">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="None" />
            <xsd:enumeration value="Context" />
            <xsd:enumeration value="Merge" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Alignment" minOccurs="0" maxOccurs="1"
        default="Default">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Default" />
            <xsd:enumeration value="Left" />
            <xsd:enumeration value="Right" />
            <xsd:enumeration value="Center" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="IsFolderDefault" type="xsd:boolean"
        minOccurs="0" maxOccurs="1" default="false" />
      <xsd:element name="IsRightToLeft" type="xsd:boolean"
        minOccurs="0" maxOccurs="1" default="false" />
      <xsd:element name="SortDirection" minOccurs="0"
        maxOccurs="1" default="Default">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Default" />
            <xsd:enumeration value="Ascending" />
            <xsd:enumeration value="Descending" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Units" type="xsd:string" minOccurs="0"
        maxOccurs="1" default="" />
      <xsd:element name="Width" type="xsd:integer"
        minOccurs="0" maxOccurs="1" default="-1" />
      <xsd:element name="DefaultDetailsPosition"
        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />
      <xsd:element name="CommonIdentifierPosition"
        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />
      <xsd:element name="SortPropertiesPosition"
        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />
      <xsd:element name="DisplayKeyPosition" type="xsd:integer"
        minOccurs="0" maxOccurs="1" default="-1" />
      <xsd:element name="IsDefaultImage" type="xsd:boolean"
        minOccurs="0" maxOccurs="1" default="false" />
      <xsd:element name="DefaultAggregateFunction"
        minOccurs="0" maxOccurs="1" default="Default">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Default" />
            <xsd:enumeration value="None" />
            <xsd:enumeration value="Sum" />
            <xsd:enumeration value="Min" />
            <xsd:enumeration value="Max" />
            <xsd:enumeration value="Count" />
            <xsd:enumeration value="Average" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType
    name="HierarchyVisualizationProperties">
    <xsd:sequence>
      <xsd:element name="ContextualNameRule" minOccurs="0"
        maxOccurs="1" default="None">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="None" />
            <xsd:enumeration value="Context" />
            <xsd:enumeration value="Merge" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="FolderPosition" type="xsd:integer"
        minOccurs="0" maxOccurs="1" default="-1" />
    </xsd:sequence>
  </xsd:complexType>
  <xsd:element name="ProcessingState">
    <xsd:simpleType>
      <xsd:restriction base="xsd:string">
        <xsd:enumeration value="Processed" />
        <xsd:enumeration value="Unprocessed" />
        <xsd:enumeration value="InvalidExpression" />
        <xsd:enumeration value="DependencyError" />
        <xsd:enumeration value="CalculationError" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>
  <xsd:element name="StructureType">
    <xsd:simpleType>
      <xsd:restriction base="xsd:string">
        <xsd:enumeration value="Natural" />
        <xsd:enumeration value="Unnatural" />
        <xsd:enumeration value="Unknown" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>

  <xsd:element name="ServerMode">
    <xsd:simpleType>
      <xsd:restriction base="xsd:string">
        <xsd:enumeration value="Multidimensional" />
        <xsd:enumeration value="Tabular" />
        <xsd:enumeration value="SharePoint" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>


  <xsd:complexType
    name="CalculationPropertiesVisualizationProperties">
    <xsd:sequence>
      <xsd:element name="FolderPosition" type="xsd:integer"
        minOccurs="0" maxOccurs="1" default="-1" />
      <xsd:element name="ContextualNameRule" minOccurs="0"
        maxOccurs="1" default="None">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="None" />
            <xsd:enumeration value="Context" />
            <xsd:enumeration value="Merge" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Alignment" minOccurs="0" maxOccurs="1"
        default="Default">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Default" />
            <xsd:enumeration value="Left" />
            <xsd:enumeration value="Right" />
            <xsd:enumeration value="Center" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="IsFolderDefault" type="xsd:boolean"
        minOccurs="0" maxOccurs="1" default="false" />
      <xsd:element name="IsRightToLeft" type="xsd:boolean"
        minOccurs="0" maxOccurs="1" default="false" />
      <xsd:element name="SortDirection" minOccurs="0"
        maxOccurs="1" default="Default">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Default" />
            <xsd:enumeration value="Ascending" />
            <xsd:enumeration value="Descending" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Units" type="xsd:string" minOccurs="0"
        maxOccurs="1" default="" />
      <xsd:element name="Width" type="xsd:integer"
        minOccurs="0" maxOccurs="1" default="-1" />
      <xsd:element name="IsDefaultMeasure" type="xsd:boolean"
        minOccurs="0" maxOccurs="1" default="false" />
      <xsd:element name="DefaultDetailsPosition"
        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />
      <xsd:element name="SortPropertiesPosition"
        type="xsd:integer" minOccurs="0" maxOccurs="1" default="-1" />
      <xsd:element name="IsSimpleMeasure" type="xsd:boolean"
        minOccurs="0" maxOccurs="1" default="false" />
    </xsd:sequence>
  </xsd:complexType>

</xsd:schema>
`, Ee = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0"
  xmlns="http://schemas.microsoft.com/analysisservices/2012/engine/400"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  targetNamespace="http://schemas.microsoft.com/analysisservices/2012/engine/400">

  <xsd:element name="DefaultCompatibilityLevel"
    type="xsd:long" />

</xsd:schema>
`, _e = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0"
  xmlns="http://schemas.microsoft.com/analysisservices/2013/engine/600"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  targetNamespace="http://schemas.microsoft.com/analysisservices/2013/engine/600">

  <xsd:element name="SupportedCompatibilityLevels"
    type="xsd:string" />

</xsd:schema>
`, Ae = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0"
  xmlns="http://schemas.microsoft.com/analysisservices/2013/engine/800"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  targetNamespace="http://schemas.microsoft.com/analysisservices/2013/engine/800">


  <xsd:element name="SubscriptionId" type="xsd:string" />

  <xsd:element name="DaxOptimizationMode">
    <xsd:simpleType>
      <xsd:restriction base="xsd:string">
        <xsd:enumeration value="1" />
        <xsd:enumeration value="0" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>

</xsd:schema>
`, Se = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0"
  xmlns="http://schemas.microsoft.com/analysisservices/2003/ext"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  targetNamespace="http://schemas.microsoft.com/analysisservices/2003/ext">

  <xsd:element name="Authenticate">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="SspiHandshake" minOccurs="1"
          maxOccurs="1" nillable="false" type="xsd:base64Binary" />
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>

  <xsd:element name="AuthenticateResponse">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="return" minOccurs="1" maxOccurs="1">
          <xsd:complexType>
            <xsd:sequence>
              <xsd:element name="SspiHandshake" minOccurs="1"
                maxOccurs="1" nillable="false" type="xsd:base64Binary" />
            </xsd:sequence>
          </xsd:complexType>
        </xsd:element>
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>

</xsd:schema>
`, De = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0"
  targetNamespace="http://schemas.microsoft.com/analysisservices/2003/xmla"
  xmlns="http://schemas.microsoft.com/analysisservices/2003/xmla"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  xmlns:ana-ds="urn:schemas-microsoft-com:xml-analysis:mddataset">

  <xsd:import
    namespace="urn:schemas-microsoft-com:xml-analysis:mddataset"
    schemaLocation="xmla-ds.xsd" />

  <xsd:element name="NormTupleSet">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="NormTuples" type="NormTuplesType"
          minOccurs="1" maxOccurs="1" />
        <xsd:element name="MembersLookup" minOccurs="1"
          maxOccurs="1">
          <xsd:complexType>
            <xsd:sequence>
              <xsd:element name="Members" type="ana-ds:TupleType"
                minOccurs="1" maxOccurs="unbounded" />
            </xsd:sequence>
          </xsd:complexType>
        </xsd:element>
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>

  <xsd:complexType name="NormTuplesType">
    <xsd:sequence>
      <xsd:element name="NormTuple" minOccurs="0"
        maxOccurs="unbounded">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="MemberRef" minOccurs="0"
              maxOccurs="unbounded">
              <xsd:complexType>
                <xsd:sequence>
                  <xsd:element name="MemberOrdinal" type="xsd:int"
                    minOccurs="1" maxOccurs="1" />
                  <xsd:element name="MemberDispInfo" type="xsd:int"
                    minOccurs="0" maxOccurs="1" />
                </xsd:sequence>
              </xsd:complexType>
            </xsd:element>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:sequence>
  </xsd:complexType>
</xsd:schema>
`, Me = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema version="1.0"
  targetNamespace="urn:schemas-microsoft-com:xml-analysis:mddataset"
  xmlns="urn:schemas-microsoft-com:xml-analysis:mddataset"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  xmlns:xs="http://www.w3.org/2001/XMLSchema"
  xmlns:msxmla="http://schemas.microsoft.com/analysisservices/2003/xmla"
  xmlns:ana-x="urn:schemas-microsoft-com:xml-analysis:exception"
  xmlns:eng="http://schemas.microsoft.com/analysisservices/2003/engine">


  <xsd:import namespace="http://www.w3.org/2001/XMLSchema" />
  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2003/xmla"
    schemaLocation="msxmla.xsd" />
  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2003/engine"
    schemaLocation="eng.xsd" />
  <xsd:import
    namespace="urn:schemas-microsoft-com:xml-analysis:exception"
    schemaLocation="xmla-x.xsd" />

  <xsd:element name="root" type="mddataset" />

  <xsd:complexType name="mddataset">
    <xsd:sequence>
      <xsd:element name="OlapInfo" minOccurs="0"
        type="OlapInfo" />
      <xsd:element name="Axes" minOccurs="0" type="Axes" />
      <xsd:element name="CellData" minOccurs="0"
        type="CellData" />
      <xsd:element name="Exception" minOccurs="0"
        type="ana-x:Exception" />
      <xsd:element name="Messages" minOccurs="0"
        type="ana-x:Messages" />
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="OlapInfo">
    <xsd:sequence>
      <xsd:element name="CubeInfo" type="CubeInfo" />
      <xsd:element name="AxesInfo" type="AxesInfo" />
      <xsd:element name="CellInfo" type="CellInfo" />
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="CubeInfo">
    <xsd:sequence>
      <xsd:element name="Cube" maxOccurs="unbounded"
        type="OlapInfoCube" />
    </xsd:sequence>
  </xsd:complexType>


  <xsd:complexType name="TupleType">
    <xsd:sequence>
      <xsd:element name="Member" type="MemberType"
        maxOccurs="unbounded" />
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="OlapInfoCube">
    <xsd:sequence>
      <xsd:element name="CubeName" type="xsd:string" />
      <xsd:element ref="eng:LastDataUpdate" minOccurs="0" />
      <xsd:element ref="eng:LastSchemaUpdate" minOccurs="0" />
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="AxesInfo">
    <xsd:sequence>
      <xsd:element name="AxisInfo" maxOccurs="unbounded"
        type="AxisInfo"></xsd:element>
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="AxisInfo">
    <xsd:sequence>
      <xsd:element name="HierarchyInfo" type="HierarchyInfo"
        minOccurs="0" maxOccurs="unbounded" />
    </xsd:sequence>
    <xsd:attribute name="name" type="xsd:string" />
  </xsd:complexType>


  <xsd:complexType name="HierarchyInfo">
    <xsd:sequence>
      <xsd:any namespace="##targetNamespace" minOccurs="0"
        maxOccurs="unbounded" processContents="skip" />
    </xsd:sequence>
    <xsd:attribute name="name" type="xsd:string"
      use="required" />
  </xsd:complexType>

  <xsd:complexType name="CellInfo">
    <xsd:sequence>
      <xsd:any namespace="##targetNamespace" minOccurs="0"
        maxOccurs="unbounded" processContents="skip" />
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="Axes">
    <xsd:sequence>
      <xsd:element name="Axis" type="Axis"
        maxOccurs="unbounded" />
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="Axis">
    <xsd:group ref="SetType" minOccurs="0" maxOccurs="unbounded" />
    <xsd:attribute name="name" type="xsd:string" />
  </xsd:complexType>

  <xsd:group name="SetType">
    <xsd:choice>
      <xsd:element name="Members" type="MembersType" />
      <xsd:element name="Tuples" type="TuplesType" />
      <xsd:element name="CrossProduct" type="SetListType" />
      <xsd:element ref="msxmla:NormTupleSet" />
      <xsd:element name="Union">
        <xsd:complexType>
          <xsd:group ref="SetType" minOccurs="0"
            maxOccurs="unbounded" />
        </xsd:complexType>
      </xsd:element>
    </xsd:choice>
  </xsd:group>

  <xsd:complexType name="MembersType">
    <xsd:sequence>
      <xsd:element name="Member" type="MemberType"
        minOccurs="0" maxOccurs="unbounded" />
    </xsd:sequence>
    <xsd:attribute name="Hierarchy" type="xsd:string"
      use="required" />
  </xsd:complexType>

  <xsd:complexType name="MemberType">
    <xsd:sequence>
      <xsd:any namespace="##targetNamespace" minOccurs="0"
        maxOccurs="unbounded" processContents="skip" />
    </xsd:sequence>
    <xsd:attribute name="Hierarchy" type="xsd:string" />
  </xsd:complexType>


  <xsd:complexType name="TuplesType">
    <xsd:sequence>
      <xsd:element name="Tuple" type="TupleType" minOccurs="0"
        maxOccurs="unbounded" />
    </xsd:sequence>
  </xsd:complexType>
  <xsd:complexType name="SetListType">
    <xsd:group ref="SetType" minOccurs="0" maxOccurs="unbounded" />
    <xsd:attribute name="Size" type="xsd:unsignedInt" />
  </xsd:complexType>
  <xsd:complexType name="CellData">
    <xsd:sequence>
      <xsd:element name="Cell" type="CellType" minOccurs="0"
        maxOccurs="unbounded" />
      <xsd:element name="CellSet" type="CellSetType"
        minOccurs="0" maxOccurs="1" />
    </xsd:sequence>
  </xsd:complexType>


  <xsd:complexType name="CellType">
    <xsd:sequence>
      <xsd:element name="Value" minOccurs="0" maxOccurs="1">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Error" type="CellTypeError"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:any namespace="##targetNamespace" minOccurs="0"
        maxOccurs="unbounded" processContents="skip" />
    </xsd:sequence>
    <xsd:attribute name="CellOrdinal" type="xsd:unsignedInt"
      use="required" />
  </xsd:complexType>


  <xsd:complexType name="CellTypeError">
    <xsd:attribute name="ErrorCode" type="xsd:long" />
    <xsd:attribute name="Description" type="xsd:string" />
  </xsd:complexType>


  <xsd:complexType name="CellSetType">
    <xsd:sequence>
      <xsd:element name="Data" type="xsd:base64Binary"
        minOccurs="1" maxOccurs="unbounded" />
    </xsd:sequence>
  </xsd:complexType>

</xsd:schema>
`, Ie = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0" xmlns="urn:schemas-microsoft-com:xml-analysis:empty"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  xmlns:ana-x="urn:schemas-microsoft-com:xml-analysis:exception"
  targetNamespace="urn:schemas-microsoft-com:xml-analysis:empty">

  <xsd:import
    namespace="urn:schemas-microsoft-com:xml-analysis:exception"
    schemaLocation="xmla-x.xsd" />

  <xsd:complexType name="emptyresult">
    <xsd:sequence>
      <xsd:element name="Exception" minOccurs="0"
        type="ana-x:Exception" />
      <xsd:element name="Messages" minOccurs="0"
        type="ana-x:Messages" />
    </xsd:sequence>
  </xsd:complexType>

  <xsd:element name="root" type="emptyresult" />


</xsd:schema>
`, Re = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0"
  xmlns="http://schemas.microsoft.com/analysisservices/2003/xmla-multipleresults"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  xmlns:ana-e="urn:schemas-microsoft-com:xml-analysis:empty"
  targetNamespace="http://schemas.microsoft.com/analysisservices/2003/xmla-multipleresults">

  <xsd:import
    namespace="urn:schemas-microsoft-com:xml-analysis:empty"
    schemaLocation="xmla-e.xsd" />


  <xsd:element name="results">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element ref="ana-e:root" minOccurs="0"
          maxOccurs="unbounded" />
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>

</xsd:schema>
`, Pe = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0" xmlns="urn:schemas-microsoft-com:xml-analysis:exception"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  targetNamespace="urn:schemas-microsoft-com:xml-analysis:exception"
  xmlns:eng200="http://schemas.microsoft.com/analysisservices/2010/engine/200">

  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2010/engine/200"
    schemaLocation="eng200.xsd" />

  <xsd:complexType name="Exception">
    <xsd:sequence></xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="Messages">
    <xsd:choice minOccurs="1" maxOccurs="unbounded">
      <xsd:element name="Warning" type="WarningType" />
      <xsd:element name="Error" type="ErrorType" />
    </xsd:choice>
  </xsd:complexType>

  <xsd:complexType name="WarningType">
    <xsd:all>
      <xsd:element name="Location" type="MessageLocation"
        minOccurs="0" />
    </xsd:all>
    <xsd:attribute name="WarningCode" type="xsd:int" />
    <xsd:attribute name="Description" type="xsd:string" />
    <xsd:attribute name="Source" type="xsd:string" />
    <xsd:attribute name="HelpFile" type="xsd:string" />
  </xsd:complexType>

  <xsd:complexType name="ErrorType">
    <xsd:all>
      <xsd:element name="Location" type="MessageLocation"
        minOccurs="0" />
      <xsd:element name="Callstack" type="xsd:string"
        minOccurs="0" />
    </xsd:all>
    <xsd:attribute name="ErrorCode" type="xsd:long" />
    <xsd:attribute name="Description" type="xsd:string" />
    <xsd:attribute name="Source" type="xsd:string" />
    <xsd:attribute name="HelpFile" type="xsd:string" />
  </xsd:complexType>

  <xsd:complexType name="MessageLocation">
    <xsd:all>
      <xsd:element name="Start">
        <xsd:complexType>
          <xsd:all>
            <xsd:element name="Line" type="xsd:int" />
            <xsd:element name="Column" type="xsd:int" />
          </xsd:all>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="End">
        <xsd:complexType>
          <xsd:all>
            <xsd:element name="Line" type="xsd:int" />
            <xsd:element name="Column" type="xsd:int" />
          </xsd:all>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="LineOffset" type="xsd:int"
        minOccurs="0" maxOccurs="1" />
      <xsd:element name="TextLength" type="xsd:int"
        minOccurs="0" maxOccurs="1" />
      <xsd:element name="SourceObject"
        type="eng200:WarningLocationObject" minOccurs="0" maxOccurs="1" />
      <xsd:element name="DependsOnObject"
        type="eng200:WarningLocationObject" minOccurs="0" maxOccurs="1" />
      <xsd:element name="RowNumber" type="xsd:int"
        minOccurs="0" maxOccurs="1" />
    </xsd:all>
  </xsd:complexType>

</xsd:schema>
`, Ne = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0" xmlns="urn:schemas-microsoft-com:xml-analysis:rowset"
  xmlns:ana-x="urn:schemas-microsoft-com:xml-analysis:exception"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  targetNamespace="urn:schemas-microsoft-com:xml-analysis:rowset">

  <xsd:import
    namespace="urn:schemas-microsoft-com:xml-analysis:exception"
    schemaLocation="xmla-x.xsd" />

  <xsd:element name="root" type="rowset" />

  <xsd:complexType name="rowset">
    <xsd:sequence>
      <xsd:element name="row" minOccurs="0"
        maxOccurs="unbounded" type="row" />
      <xsd:element name="Exception" minOccurs="0"
        type="ana-x:Exception" />
      <xsd:element name="Messages" minOccurs="0"
        type="ana-x:Messages" />
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="row">
    <xsd:sequence>
      <xsd:any namespace="##any" minOccurs="0"
        maxOccurs="unbounded" />
    </xsd:sequence>
  </xsd:complexType>

</xsd:schema>
`, qe = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<xsd:schema xmlns:xsd="http://www.w3.org/2001/XMLSchema"
  version="1.0" xmlns="urn:schemas-microsoft-com:xml-analysis"
  xmlns:eng="http://schemas.microsoft.com/analysisservices/2003/engine"
  xmlns:eng2="http://schemas.microsoft.com/analysisservices/2003/engine/2"
  xmlns:eng100="http://schemas.microsoft.com/analysisservices/2008/engine/100"
  xmlns:eng100_100="http://schemas.microsoft.com/analysisservices/2008/engine/100/100"
  xmlns:eng200="http://schemas.microsoft.com/analysisservices/2010/engine/200"
  xmlns:eng200_200="http://schemas.microsoft.com/analysisservices/2010/engine/200/200"
  xmlns:eng300="http://schemas.microsoft.com/analysisservices/2011/engine/300"
  xmlns:eng300_300="http://schemas.microsoft.com/analysisservices/2011/engine/300/300"
  xmlns:eng400="http://schemas.microsoft.com/analysisservices/2012/engine/400"
  xmlns:eng600="http://schemas.microsoft.com/analysisservices/2013/engine/600"
  xmlns:eng800="http://schemas.microsoft.com/analysisservices/2013/engine/800"
  xmlns:ana-ds="urn:schemas-microsoft-com:xml-analysis:mddataset"
  xmlns:ana-rs="urn:schemas-microsoft-com:xml-analysis:rowset"
  xmlns:ana-e="urn:schemas-microsoft-com:xml-analysis:empty"
  xmlns:ana-m="http://schemas.microsoft.com/analysisservices/2003/xmla-multipleresults"
  xmlns:jaxb="https://jakarta.ee/xml/ns/jaxb" jaxb:version="3.0"
  targetNamespace="urn:schemas-microsoft-com:xml-analysis">

  <xsd:import
    namespace="urn:schemas-microsoft-com:xml-analysis:mddataset"
    schemaLocation="xmla-ds.xsd" />
  <xsd:import
    namespace="urn:schemas-microsoft-com:xml-analysis:rowset"
    schemaLocation="xmla-rs.xsd" />
  <xsd:import
    namespace="urn:schemas-microsoft-com:xml-analysis:empty"
    schemaLocation="xmla-e.xsd" />
  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2003/xmla-multipleresults"
    schemaLocation="xmla-m.xsd" />
  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2003/engine"
    schemaLocation="eng.xsd" />
  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2003/engine/2"
    schemaLocation="eng2.xsd" />
  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2008/engine/100"
    schemaLocation="eng100.xsd" />
  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2008/engine/100/100"
    schemaLocation="eng100_100.xsd" />
  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2010/engine/200"
    schemaLocation="eng200.xsd" />
  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2010/engine/200/200"
    schemaLocation="eng200_200.xsd" />
  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2011/engine/300"
    schemaLocation="eng300.xsd" />
  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2011/engine/300/300"
    schemaLocation="eng300_300.xsd" />
  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2012/engine/400"
    schemaLocation="eng400.xsd" />
  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2013/engine/600"
    schemaLocation="eng600.xsd" />
  <xsd:import
    namespace="http://schemas.microsoft.com/analysisservices/2013/engine/800"
    schemaLocation="eng800.xsd" />

  <xsd:complexType name="Properties">
    <xsd:sequence>
      <xsd:element name="PropertyList" minOccurs="0"
        maxOccurs="1" type="PropertyList" />
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="Parameters">
    <xsd:sequence>
      <xsd:element name="Parameter" type="ExecuteParameter"
        minOccurs="0" maxOccurs="unbounded" />
    </xsd:sequence>
  </xsd:complexType>


  <xsd:complexType name="PropertyList">
    <xsd:all>
      <xsd:element name="DataSourceInfo" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Timeout" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="UserName" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Password" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="LocaleIdentifier" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="Catalog" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="StateSupport" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="None" />
            <xsd:enumeration value="Sessions" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Content" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="None" />
            <xsd:enumeration value="Schema" />
            <xsd:enumeration value="Data" />
            <xsd:enumeration value="SchemaData" />
            <xsd:enumeration value="Metadata" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Format" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Tabular" />
            <xsd:enumeration value="Multidimensional" />
            <xsd:enumeration value="Native" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="AxisFormat" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="ClusterFormat" />
            <xsd:enumeration value="CustomFormat" />
            <xsd:enumeration value="TupleFormat" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="BeginRange" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="EndRange" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="MDXSupport" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Core" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="ProviderName" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="ProviderVersion" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DBMSVersion" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="ProviderType" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
            <xsd:enumeration value="3" />
            <xsd:enumeration value="4" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="ShowHiddenCubes" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="SQLSupport" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="TransactionDDL" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="MaximumRows" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="Roles" type="xsd:string" minOccurs="0" />
      <xsd:element name="VisualMode" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="0" />
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="EffectiveRoles" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="EffectiveUserName" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="ServerName" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="CatalogLocation" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DbpropCatalogTerm" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DbpropCatalogUsage" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="DbpropColumnDefinition"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropConcatNullBehavior"
        minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DbpropDataSourceReadOnly"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="DbpropGroupBy" minOccurs="0"
        type="xsd:integer" />
      <xsd:element name="DbpropHeterogeneousTables"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropIdentifierCase"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropMaxIndexSize" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="DbpropMaxOpenChapters"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropMaxRowSize" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="DbpropMaxRowSizeIncludeBlob"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="DbpropMaxTablesInSelect"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropMultiTableUpdate"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="DbpropNullCollation" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
            <xsd:enumeration value="4" />
            <xsd:enumeration value="8" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DbpropOrderByColumnsInSelect"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="DbpropOutputParameterAvailable"
        minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
            <xsd:enumeration value="4" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DbpropPersistentIdType" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
            <xsd:enumeration value="4" />
            <xsd:enumeration value="8" />
            <xsd:enumeration value="16" />
            <xsd:enumeration value="32" />
            <xsd:enumeration value="64" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DbpropPrepareAbortBehavior"
        minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DbpropPrepareCommitBehavior"
        minOccurs="0">
        <xsd:simpleType>

          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DbpropProcedureTerm" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DbpropQuotedIdentifierCase"
        minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
            <xsd:enumeration value="4" />
            <xsd:enumeration value="8" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DbpropSchemaUsage" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="DbpropSqlSupport" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="DbpropSubqueries" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="DbpropSupportedTxnDdl"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="MdpropMdxSubqueries"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropSupportedTxnIsoLevels"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropSupportedTxnIsoRetain"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropTableTerm" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="MdpropAggregateCellUpdate"
        minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="0" />
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="MdpropAxes" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="MdpropFlatteningSupport" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
            <xsd:enumeration value="3" />
            <xsd:enumeration value="4" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="MdpropMdxCaseSupport"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="MdpropMdxDescFlags" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="MdpropMdxDrillFunctions"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="MdpropMdxFormulas" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="MdpropMdxJoinCubes" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="MdpropMdxMemberFunctions"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="MdpropMdxNonMeasureExpressions"
        minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="0" />
            <xsd:enumeration value="1" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="MdpropMdxNumericFunctions"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="MdpropMdxObjQualification"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="MdpropMdxOuterReference"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="MdpropMdxQueryByProperty"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="MdpropMdxRangeRowset" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
            <xsd:enumeration value="4" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="MdpropMdxSetFunctions"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="MdpropMdxSlicer" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="MdpropMdxStringCompop"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="MdpropNamedLevels" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="DbpropMsmdMDXCompatibility"
        minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="0" />
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
            <xsd:enumeration value="3" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DbpropMsmdSQLCompatibility"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropMsmdMDXUniqueNameStyle"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropMsmdCachePolicy"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropMsmdCacheRatio"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropMsmdCacheMode"
        type="xsd:integer" minOccurs="0" />
      <xsd:element
        name="DbpropMsmdCompareCaseSensitiveStringFlags" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
            <xsd:enumeration value="16" />
            <xsd:enumeration value="256" />
            <xsd:enumeration value="4096" />
            <xsd:enumeration value="65536" />
            <xsd:enumeration value="1048576" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element
        name="DbpropMsmdCompareCaseNotSensitiveStringFlags"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropMsmdFlattened2"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="DbpropInitMode" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="SspropInitAppName" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="SspropInitWsid" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="SspropInitPacketsize"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="ReadOnlySession" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="SecuredCellValue" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="0" />
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
            <xsd:enumeration value="3" />
            <xsd:enumeration value="4" />
            <xsd:enumeration value="5" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="NonEmptyThreshold" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="SafetyOptions" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="0" />
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
            <xsd:enumeration value="3" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DbpropMsmdCacheRatio2"
        type="xsd:double" minOccurs="0" />
      <xsd:element name="DbpropMsmdUseFormulaCache"
        type="xsd:string" minOccurs="0" />
      <xsd:element name="DbpropMsmdDynamicDebugLimit"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropMsmdDebugMode" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Dialect" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="MDX" />
            <xsd:enumeration value="DMX" />
            <xsd:enumeration value="SQL" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="ImpactAnalysis" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="SQLQueryMode" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Data" />
            <xsd:enumeration value="Calculated" />
            <xsd:enumeration value="IncludeEmpty" />
            <xsd:enumeration value="DataKeys" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="ClientProcessID" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="Cube" type="xsd:string" minOccurs="0" />
      <xsd:element name="ReturnCellProperties"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="CommitTimeout" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="ForceCommitTimeout" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="ExecutionMode" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="RealTimeOlap" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="MdxMissingMemberMode" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Default" />
            <xsd:enumeration value="Ignore" />
            <xsd:enumeration value="Error" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="MdpropMdxNamedSets" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="DbpropMsmdSubqueries" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="0" />
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DbpropMsmdAutoExists" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="0" />
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
            <xsd:enumeration value="3" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="CustomData" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DisablePrefetchFacts"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="UpdateIsolationLevel" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="1" />
            <xsd:enumeration value="2" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DbpropMsmdErrorMessageMode"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="MdpropMdxDdlExtensions"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="ResponseEncoding" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Default" />
            <xsd:enumeration value="UTF-8" />
            <xsd:enumeration value="UTF-16" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="MemoryLockingMode" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:integer">
            <xsd:enumeration value="0" />
            <xsd:enumeration value="1" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DbpropMsmdOptimizeResponse"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropMsmdActivityID"
        type="xsd:string" minOccurs="0" />
      <xsd:element name="DbpropMsmdRequestID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="ReturnAffectedObjects"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="DbpropMsmdRequestMemoryLimit"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="ApplicationContext" type="xsd:string"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Command">
    <xsd:choice>
      <xsd:element name="Statement" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Create" type="Create" minOccurs="0" />
      <xsd:element name="Alter" type="Alter" minOccurs="0" />
      <xsd:element name="Delete" type="Delete" minOccurs="0" />
      <xsd:element name="Process" type="Process" minOccurs="0" />
      <xsd:element name="MergePartitions"
        type="MergePartitions" minOccurs="0" />
      <xsd:element name="DesignAggregations"
        type="DesignAggregations" minOccurs="0" />
      <xsd:element name="ClearCache" type="ClearCache"
        minOccurs="0" />
      <xsd:element name="Subscribe" type="Subscribe"
        minOccurs="0" />
      <xsd:element name="Unsubscribe" type="Unsubscribe"
        minOccurs="0" />
      <xsd:element name="Cancel" type="Cancel" minOccurs="0" />
      <xsd:element name="BeginTransaction"
        type="BeginTransaction" minOccurs="0" />
      <xsd:element name="CommitTransaction"
        type="CommitTransaction" minOccurs="0" />
      <xsd:element name="RollbackTransaction"
        type="RollbackTransaction" minOccurs="0" />
      <xsd:element name="Lock" type="Lock" minOccurs="0" />
      <xsd:element name="Unlock" type="Unlock" minOccurs="0" />
      <xsd:element name="Backup" type="Backup" minOccurs="0" />
      <xsd:element name="Restore" type="Restore" minOccurs="0" />
      <xsd:element name="Synchronize" type="Synchronize"
        minOccurs="0" />
      <xsd:element name="Attach" type="Attach" minOccurs="0" />
      <xsd:element name="Detach" type="Detach" minOccurs="0" />
      <xsd:element name="Insert" type="Insert" minOccurs="0" />
      <xsd:element name="Update" type="Update" minOccurs="0" />
      <xsd:element name="Drop" type="Drop" minOccurs="0" />
      <xsd:element name="UpdateCells" type="UpdateCells"
        minOccurs="0" />
      <xsd:element name="NotifyTableChange"
        type="NotifyTableChange" minOccurs="0" />
      <xsd:element name="Batch" type="Batch" minOccurs="0" />
      <xsd:element name="ImageLoad" type="ImageLoad"
        minOccurs="0" />
      <xsd:element name="ImageSave" type="ImageSave"
        minOccurs="0" />
      <xsd:element name="CloneDatabase" type="CloneDatabase"
        minOccurs="0" />
      <xsd:element name="SetAuthContext" type="SetAuthContext"
        minOccurs="0" />
      <xsd:element name="DBCC" type="DBCC" minOccurs="0" />
    </xsd:choice>
  </xsd:complexType>

  <xsd:complexType name="ObjectReference">
    <xsd:all>
      <xsd:element name="ServerID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DatabaseID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="RoleID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="TraceID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="AssemblyID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DimensionID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DimensionPermissionID"
        type="xsd:string" minOccurs="0" />
      <xsd:element name="DataSourceID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DataSourcePermissionID"
        type="xsd:string" minOccurs="0" />
      <xsd:element name="DatabasePermissionID"
        type="xsd:string" minOccurs="0" />

      <xsd:element name="DataSourceViewID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="CubeID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="MiningStructureID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="MeasureGroupID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="PerspectiveID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="CubePermissionID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="MdxScriptID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="PartitionID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="AggregationDesignID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="MiningModelID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="MiningModelPermissionID"
        type="xsd:string" minOccurs="0" />
      <xsd:element name="MiningStructurePermissionID"
        type="xsd:string" minOccurs="0" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Statement">
    <xsd:all>
      <xsd:element name="Statement" type="xsd:string"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>

  <xsd:simpleType name="Scope">
    <xsd:restriction base="xsd:string">
      <xsd:enumeration value="Session" />
    </xsd:restriction>
  </xsd:simpleType>

  <xsd:complexType name="Create">
    <xsd:all>
      <xsd:element name="ParentObject" type="ObjectReference"
        minOccurs="0" />
      <xsd:element name="ObjectDefinition" type="MajorObject" />
    </xsd:all>
    <xsd:attribute name="Scope" type="Scope" />
    <xsd:attribute name="AllowOverwrite" type="xsd:boolean" />
  </xsd:complexType>

  <xsd:simpleType name="ObjectExpansion">
    <xsd:restriction base="xsd:string">
      <xsd:enumeration value="ObjectProperties" />
      <xsd:enumeration value="ExpandFull" />
    </xsd:restriction>
  </xsd:simpleType>

  <xsd:complexType name="Alter">
    <xsd:all>
      <xsd:element name="Object" type="ObjectReference"
        minOccurs="0" />
      <xsd:element name="ObjectDefinition" type="MajorObject" />
    </xsd:all>
    <xsd:attribute name="Scope" type="Scope" />
    <xsd:attribute name="AllowCreate" type="xsd:boolean" />
    <xsd:attribute name="ObjectExpansion"
      type="ObjectExpansion" />
  </xsd:complexType>


  <xsd:complexType name="Delete">
    <xsd:all>
      <xsd:element name="Object" type="ObjectReference" />
    </xsd:all>
    <xsd:attribute name="IgnoreFailures" type="xsd:boolean" />
  </xsd:complexType>

  <xsd:complexType name="Process">
    <xsd:all>
      <xsd:element name="Type">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="ProcessFull" />
            <xsd:enumeration value="ProcessAdd" />
            <xsd:enumeration value="ProcessUpdate" />
            <xsd:enumeration value="ProcessIndexes" />
            <xsd:enumeration value="ProcessScriptCache" />
            <xsd:enumeration value="ProcessData" />
            <xsd:enumeration value="ProcessDefault" />
            <xsd:enumeration value="ProcessClear" />
            <xsd:enumeration value="ProcessStructure" />
            <xsd:enumeration value="ProcessClearStructureOnly" />
            <xsd:enumeration value="ProcessClearIndexes" />
            <xsd:enumeration value="ProcessDefrag" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Object" type="ObjectReference" />
      <xsd:element name="Bindings" type="Bindings"
        minOccurs="0" />
      <xsd:element name="DataSource" type="DataSource"
        minOccurs="0" />
      <xsd:element name="DataSourceView" type="DataSourceView"
        minOccurs="0" />
      <xsd:element name="ErrorConfiguration"
        type="ErrorConfiguration" minOccurs="0" />
      <xsd:element name="WriteBackTableCreation"
        type="WriteBackTableCreation" minOccurs="0"></xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="DataSourceView">
    <xsd:all>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for DataSourceView object -->
      <xsd:element name="DataSourceID" type="xsd:string" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Bindings">
    <xsd:sequence>
      <xsd:element name="Binding" type="OutOfLineBinding"
        minOccurs="0" maxOccurs="unbounded" />
    </xsd:sequence>
  </xsd:complexType>


  <xsd:simpleType name="WriteBackTableCreation">
    <xsd:restriction base="xsd:string">
      <xsd:enumeration value="Create" />
      <xsd:enumeration value="CreateAlways" />
      <xsd:enumeration value="UseExisting" />
    </xsd:restriction>
  </xsd:simpleType>

  <xsd:complexType name="MergePartitions">
    <xsd:all>
      <xsd:element name="Sources">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Source" type="ObjectReference"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Target" type="ObjectReference" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="DesignAggregations">
    <xsd:all>
      <xsd:element name="Object" type="ObjectReference" />
      <xsd:element name="Time" type="xsd:duration"
        minOccurs="0" />
      <xsd:element name="Steps" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="Optimization" type="xsd:double"
        minOccurs="0" />
      <xsd:element name="Storage" type="xsd:long" minOccurs="0" />
      <xsd:element name="Materialize" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="Queries" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Query" type="xsd:string"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="ClearCache">
    <xsd:all>
      <xsd:element name="Object" type="ObjectReference" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Subscribe">
    <xsd:all>
      <xsd:element name="Object" type="ObjectReference"
        minOccurs="0" />
      <xsd:element ref="eng800:SubscriptionId" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Unsubscribe">
    <xsd:all>
      <xsd:element ref="eng800:SubscriptionId" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Cancel">
    <xsd:all>
      <xsd:element name="ConnectionID" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="SessionID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="SPID" type="xsd:integer" minOccurs="0" />
      <xsd:element name="CancelAssociated" type="xsd:boolean"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>
  <xsd:complexType name="BeginTransaction" />

  <xsd:complexType name="CommitTransaction">
    <xsd:all>
      <xsd:element name="DurabilityGuarantee" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="LocalDisk" />
            <xsd:enumeration value="Full" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="RollbackTransaction" />

  <xsd:complexType name="Lock">
    <xsd:all>
      <xsd:element name="ID">
        <xsd:simpleType>
          <xsd:restriction base="xsd:token">
            <xsd:pattern
              value="[0-9a-zA-Z]{8}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]
{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{12}" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Object" type="ObjectReference" />
      <xsd:element name="Mode">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="CommitShared" />
            <xsd:enumeration value="CommitExclusive" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="Unlock">
    <xsd:all>
      <xsd:element name="ID">
        <xsd:simpleType>
          <xsd:restriction base="xsd:token">
            <xsd:pattern
              value="[0-9a-zA-Z]{8}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]
{4}-[0-9a-zA-Z]{4}-[0-9a-zA-Z]{12}" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Backup">
    <xsd:all>
      <xsd:element name="Object" type="ObjectReference" />
      <xsd:element name="File" type="xsd:string" />
      <xsd:element name="Security" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="SkipMembership" />
            <xsd:enumeration value="CopyAll" />
            <xsd:enumeration value="IgnoreSecurity" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="ApplyCompression" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="AllowOverwrite" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="Password" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="BackupRemotePartitions"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="Locations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Location" type="Location_Backup"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="Location_Backup">
    <xsd:all>
      <xsd:element name="File" type="xsd:string" />
      <xsd:element name="DataSourceID" type="xsd:string" />
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="Restore">
    <xsd:all>
      <xsd:element name="DatabaseName" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DatabaseID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="File" type="xsd:string" />
      <xsd:element name="Security" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="SkipMembership" />
            <xsd:enumeration value="CopyAll" />
            <xsd:enumeration value="IgnoreSecurity" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="AllowOverwrite" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="Password" type="xsd:string"
        minOccurs="0" />
      <xsd:element ref="eng100_100:DbStorageLocation"
        minOccurs="0" />
      <xsd:element ref="eng100:ReadWriteMode" minOccurs="0">
      </xsd:element>
      <xsd:element name="Locations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Location" type="Location"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="MajorObject">
    <xsd:choice>
      <xsd:element name="AggregationDesign"
        type="AggregationDesign" />
      <xsd:element name="Assembly" type="Assembly" />
      <xsd:element name="Cube" type="Cube" />
      <xsd:element name="Database" type="Database" />
      <xsd:element name="DataSource" type="DataSource" />
      <xsd:element name="DataSourceView" type="DataSourceView" />
      <xsd:element name="Dimension" type="Dimension" />
      <xsd:element name="MdxScript" type="MdxScript" />
      <xsd:element name="MeasureGroup" type="MeasureGroup" />
      <xsd:element name="MiningModel" type="MiningModel" />
      <xsd:element name="MiningStructure"
        type="MiningStructure" />
      <xsd:element name="Partition" type="Partition" />
      <xsd:element name="Permission" type="Permission" />
      <xsd:element name="Perspective" type="Perspective" />
      <xsd:element name="Role" type="Role" />
      <xsd:element name="Server" type="Server" />
      <xsd:element name="Trace" type="Trace" />
    </xsd:choice>
  </xsd:complexType>

  <xsd:complexType name="Location">
    <xsd:complexContent>
      <xsd:extension base="Location_Backup">
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="Folder">
    <xsd:all>
      <xsd:element name="Original" type="xsd:string" />
      <xsd:element name="New" type="xsd:string" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Synchronize">
    <xsd:all>
      <xsd:element name="Source" type="Source" />
      <xsd:element name="SynchronizeSecurity" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="SkipMembership" />
            <xsd:enumeration value="CopyAll" />
            <xsd:enumeration value="IgnoreSecurity" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="ApplyCompression" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element ref="eng100_100:DbStorageLocation"
        minOccurs="0" />
      <xsd:element name="Locations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Location" type="Location"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Source">
    <xsd:all>
      <xsd:element name="Object" type="ObjectReference" />
      <xsd:element name="ConnectionString" type="xsd:string" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Attach">
    <xsd:all>
      <xsd:element name="Folder" type="xsd:string" />
      <xsd:element name="Password" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="AllowOverwrite" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element ref="eng100:ReadWriteMode" minOccurs="0">
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Detach">
    <xsd:all>
      <xsd:element name="Object" type="ObjectReference" />
      <xsd:element name="Password" type="xsd:string"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Insert">
    <xsd:all>
      <xsd:element name="Object" type="Object" />
      <xsd:element name="Attributes" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Attribute"
              type="Attribute_InsertUpdate" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Object">
    <xsd:all>
      <xsd:element name="Database" type="xsd:string" />
      <xsd:element name="Cube" type="xsd:string" />
      <xsd:element name="Dimension" type="xsd:string" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Attribute_InsertUpdate">
    <xsd:all>
      <xsd:element name="AttributeName" type="xsd:string" />
      <xsd:element name="Name" type="xsd:string" minOccurs="0" />
      <xsd:element name="Keys" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Key" type="xsd:anySimpleType"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation"
              type="Translation_InsertUpdate" minOccurs="0"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Value" type="xsd:string" minOccurs="0" />
      <xsd:element name="CUSTOM_ROLLUP" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="CUSTOM_ROLLUP_PROPERTIES"
        type="xsd:string" minOccurs="0" />
      <xsd:element name="UNARY_OPERATOR" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="SKIPPED_LEVELS" type="xsd:integer"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Translation_InsertUpdate">
    <xsd:all>
      <xsd:element name="Language" type="xsd:integer" />
      <xsd:element name="Name" type="xsd:string" minOccurs="0" />
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="Update">
    <xsd:all>
      <xsd:element name="Object" type="Object" />
      <xsd:element name="Attributes" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Attribute"
              type="Attribute_InsertUpdate" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="MoveWithDescendants"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="MoveToRoot" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="Where" type="Where" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Where">
    <xsd:all>
      <xsd:element name="Attribute" type="Where_Attribute" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Where_Attribute">
    <xsd:all>
      <xsd:element name="AttributeName" type="xsd:string" />
      <xsd:element name="Keys" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Key" type="xsd:anySimpleType"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Drop">
    <xsd:all>
      <xsd:element name="Object" type="Object" />
      <xsd:element name="DeleteWithDescendants"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="Where" type="Where" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="UpdateCells">
    <xsd:sequence>
      <xsd:element name="Cell" type="Cell" minOccurs="0"
        maxOccurs="unbounded" />
    </xsd:sequence>
  </xsd:complexType>

  <xsd:element name="KeepResult">
    <xsd:complexType>
      <xsd:sequence>
        <!--The KeepResult element MUST be empty -->
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>

  <xsd:element name="ClearResult">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="ResultId" type="xsd:string" />
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>

  <xsd:element name="Result">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="ResultId" type="xsd:string" />
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>

  <xsd:complexType name="Cell">
    <xsd:all>
      <xsd:element name="Value" type="xsd:anySimpleType" />
    </xsd:all>
    <xsd:attribute name="CellOrdinal" type="xsd:long" />
  </xsd:complexType>

  <xsd:complexType name="NotifyTableChange">
    <xsd:all>
      <xsd:element name="Object" type="ObjectReference" />
      <xsd:element name="TableNotifications">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="TableNotification"
              type="TableNotification" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="Batch">
    <xsd:sequence>
      <xsd:element name="Parallel" minOccurs="0"
        maxOccurs="unbounded">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Process" type="Process"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
          <xsd:attribute name="MaxParallel" type="xsd:int"
            default="0" />
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Bindings" minOccurs="0"
        type="OutOfLineBinding" />
      <xsd:element name="DataSource" minOccurs="0"
        type="DataSource" />
      <xsd:element name="DataSourceView" type="DataSourceView"
        minOccurs="0" />
      <xsd:element name="ErrorConfiguration"
        type="ErrorConfiguration" minOccurs="0" />
      <xsd:element name="Create" type="Create" minOccurs="0"
        maxOccurs="unbounded" />
      <xsd:element name="Alter" type="Alter" minOccurs="0"
        maxOccurs="unbounded" />
      <xsd:element name="Delete" type="Delete" minOccurs="0"
        maxOccurs="unbounded" />
      <xsd:element name="Process" type="Process" minOccurs="0"
        maxOccurs="unbounded" />
      <xsd:element name="MergePartitions"
        type="MergePartitions" minOccurs="0" maxOccurs="unbounded" />
      <xsd:element name="DesignAggregations"
        type="DesignAggregations" minOccurs="0" maxOccurs="unbounded" />
      <xsd:element name="NotifyTableChange"
        type="NotifyTableChange" minOccurs="0" maxOccurs="unbounded" />
      <xsd:element name="Insert" minOccurs="0" type="Insert"
        maxOccurs="unbounded" />
      <xsd:element name="Update" minOccurs="0" type="Update"
        maxOccurs="unbounded" />
      <xsd:element name="Drop" minOccurs="0" type="Drop"
        maxOccurs="unbounded" />
      <xsd:element name="UpdateCells" minOccurs="0"
        type="UpdateCells" maxOccurs="unbounded" />
      <xsd:element name="Backup" minOccurs="0" type="Backup"
        maxOccurs="unbounded" />
      <xsd:element name="Restore" minOccurs="0" type="Restore"
        maxOccurs="unbounded" />
      <xsd:element name="Synchronize" minOccurs="0"
        type="Synchronize" maxOccurs="unbounded" />
      <xsd:element name="Cancel" minOccurs="0" type="Cancel"
        maxOccurs="unbounded" />
      <xsd:element name="BeginTransaction" minOccurs="0"
        type="BeginTransaction" maxOccurs="unbounded" />
      <xsd:element name="CommitTransaction" minOccurs="0"
        type="CommitTransaction" maxOccurs="unbounded" />
      <xsd:element name="RollbackTransaction" minOccurs="0"
        type="RollbackTransaction" maxOccurs="unbounded" />
      <xsd:element name="ClearCache" minOccurs="0"
        type="ClearCache" maxOccurs="unbounded" />
      <xsd:element name="Subscribe" minOccurs="0"
        type="Subscribe" maxOccurs="unbounded" />
      <xsd:element name="Unsubscribe" minOccurs="0"
        type="Unsubscribe" maxOccurs="unbounded" />
      <xsd:element name="Detach" minOccurs="0" type="Detach"
        maxOccurs="unbounded" />
      <xsd:element name="Attach" minOccurs="0" type="Attach"
        maxOccurs="unbounded" />
      <xsd:element name="Lock" minOccurs="0" type="Lock"
        maxOccurs="unbounded" />
      <xsd:element name="Unlock" minOccurs="0" type="Unlock"
        maxOccurs="unbounded" />
      <xsd:element name="ImageLoad" minOccurs="0"
        type="ImageLoad" maxOccurs="unbounded" />
      <xsd:element name="ImageSave" minOccurs="0"
        type="ImageSave" maxOccurs="unbounded" />
      <xsd:element name="CloneDatabase" minOccurs="0"
        type="CloneDatabase" maxOccurs="unbounded" />
      <xsd:element name="SetAuthContext" minOccurs="0"
        type="SetAuthContext" maxOccurs="unbounded" />
      <xsd:element name="DBCC" type="DBCC" minOccurs="0" />
      <xsd:element ref="Discover" minOccurs="0"
        maxOccurs="unbounded" />
    </xsd:sequence>
    <xsd:attribute name="Transaction" type="xsd:boolean" />
    <xsd:attribute name="ProcessAffectedObjects"
      type="xsd:boolean" />
  </xsd:complexType>

  <xsd:complexType name="ImageLoad">
    <xsd:all>
      <xsd:element ref="eng200_200:ImagePath" minOccurs="0"
        maxOccurs="1" />
      <xsd:element ref="eng200_200:ImageUrl" minOccurs="0"
        maxOccurs="1" />
      <xsd:element ref="eng200_200:ImageUniqueID" minOccurs="0"
        maxOccurs="1" />
      <xsd:element ref="eng200_200:ImageVersion" minOccurs="0"
        maxOccurs="1" />
      <xsd:element ref="eng100:ReadWriteMode" minOccurs="1"
        maxOccurs="1">
      </xsd:element>
      <xsd:element ref="eng100_100:DbStorageLocation"
        minOccurs="0" />
      <xsd:element name="DatabaseName" type="xsd:string"
        minOccurs="1" maxOccurs="1" />
      <xsd:element name="DatabaseID" type="xsd:string"
        minOccurs="1" maxOccurs="1" />
      <xsd:element name="Data" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="DataBlock" type="xsd:string"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="ImageSave">
    <xsd:all>
      <xsd:element name="Object" type="ObjectReference" />
      <xsd:element name="Data" type="xsd:boolean" minOccurs="0" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="CloneDatabase">
    <xsd:all>
      <xsd:element name="Object">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="DatabaseID" type="ObjectReference"
              minOccurs="1" maxOccurs="1" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Target">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element ref="eng100_100:DbStorageLocation"
              minOccurs="0" />
            <xsd:element name="DatabaseName" type="xsd:string"
              minOccurs="1" maxOccurs="1" />
            <xsd:element name="DatabaseID" type="xsd:string"
              minOccurs="1" maxOccurs="1" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="SetAuthContext">
    <xsd:all>
      <xsd:element ref="eng200_200:Token" minOccurs="1"
        maxOccurs="1" />
      <xsd:element name="DatabaseID" type="xsd:string"
        minOccurs="1" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="DBCC">
    <xsd:all>
      <xsd:element name="Object" type="ObjectReference"
        minOccurs="0" maxOccurs="1" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="ExecuteParameter">
    <xsd:all>
      <xsd:element name="Name" minOccurs="1" type="xsd:string" />
      <xsd:element name="Value" minOccurs="1"
        type="xsd:anyType" />
    </xsd:all>
  </xsd:complexType>


  <xsd:element name="ExecuteResponse">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="return" minOccurs="1" maxOccurs="1"
          type="return"></xsd:element>
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>

  <xsd:complexType name="return">
    <xsd:choice>
      <xsd:element ref="ana-ds:root" />
      <xsd:element ref="ana-rs:root" />
      <xsd:element ref="ana-e:root" />
      <xsd:element ref="ana-m:results" />
    </xsd:choice>
  </xsd:complexType>

  <xsd:complexType name="OutOfLineBinding">
    <xsd:all>
      <xsd:element name="DatabaseID" minOccurs="0"
        type="xsd:string" />
      <xsd:element name="DimensionID" minOccurs="0"
        type="xsd:string" />
      <xsd:element name="CubeID" minOccurs="0"
        type="xsd:string" />
      <xsd:element name="MeasureGroupID" minOccurs="0"
        type="xsd:string" />
      <xsd:element name="PartitionID" minOccurs="0"
        type="xsd:string" />
      <xsd:element name="MiningModelID" minOccurs="0"
        type="xsd:string" />
      <xsd:element name="MiningStructureID" minOccurs="0"
        type="xsd:string" />
      <xsd:element name="AttributeID" minOccurs="0"
        type="xsd:string" />
      <xsd:element name="CubeDimensionID" minOccurs="0"
        type="xsd:string" />
      <xsd:element name="MeasureID" minOccurs="0"
        type="xsd:string" />
      <xsd:element name="ParentColumnID" minOccurs="0"
        type="xsd:string" />
      <xsd:element name="ColumnID" minOccurs="0"
        type="xsd:string" />
      <xsd:element name="Source" minOccurs="0" type="Binding" />
      <xsd:element name="NameColumn" minOccurs="0">
        <xsd:complexType>
          <xsd:all>
            <xsd:element name="Source" minOccurs="0"
              type="Binding" />
          </xsd:all>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="SkippedLevelsColumn" minOccurs="0">
        <xsd:complexType>
          <xsd:all>
            <xsd:element name="Source" minOccurs="0"
              type="Binding" />
          </xsd:all>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="CustomRollupColumn" minOccurs="0">
        <xsd:complexType>
          <xsd:all>
            <xsd:element name="Source" minOccurs="0"
              type="Binding" />
          </xsd:all>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="CustomRollupPropertiesColumn"
        minOccurs="0">
        <xsd:complexType>
          <xsd:all>
            <xsd:element name="Source" minOccurs="0"
              type="Binding" />
          </xsd:all>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="ValueColumn" minOccurs="0">
        <xsd:complexType>
          <xsd:all>
            <xsd:element name="Source" minOccurs="0"
              type="Binding" />
          </xsd:all>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="UnaryOperatorColumn" minOccurs="0">
        <xsd:complexType>
          <xsd:all>
            <xsd:element name="Source" minOccurs="0"
              type="Binding" />
          </xsd:all>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="KeyColumns" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="KeyColumn" minOccurs="0"
              maxOccurs="unbounded">
              <xsd:complexType>
                <xsd:all>
                  <xsd:element name="Source" minOccurs="0"
                    type="Binding" />
                </xsd:all>
              </xsd:complexType>
            </xsd:element>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="ForeignKeyColumns" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="ForeignKeyColumn" minOccurs="0"
              maxOccurs="unbounded">
              <xsd:complexType>
                <xsd:all>
                  <xsd:element name="Source" minOccurs="0"
                    type="Binding" />
                </xsd:all>
              </xsd:complexType>
            </xsd:element>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" minOccurs="0"
              maxOccurs="unbounded">
              <xsd:complexType>
                <xsd:all>
                  <xsd:element name="Language" type="xsd:int" />
                  <xsd:element name="Source" minOccurs="0"
                    type="Binding" />
                </xsd:all>
              </xsd:complexType>
            </xsd:element>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Binding" abstract="true" />
  <xsd:complexType name="ColumnBinding">
    <xsd:complexContent>
      <xsd:extension base="Binding">
        <xsd:all>
          <xsd:element name="TableID" type="xsd:string" />
          <xsd:element name="ColumnID" type="xsd:string" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="RowBinding">
    <xsd:complexContent>
      <xsd:extension base="Binding">
        <xsd:all>
          <xsd:element name="TableID" type="xsd:string" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>


  <xsd:complexType name="DataSourceViewBinding">
    <xsd:complexContent>
      <xsd:extension base="Binding">
        <xsd:all>
          <xsd:element name="DataSourceViewID" type="xsd:string" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="AttributeBinding">
    <xsd:complexContent>
      <xsd:extension base="Binding">
        <xsd:all>
          <xsd:element name="AttributeID" type="xsd:string" />
          <xsd:element name="Type">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="All" />
                <xsd:enumeration value="Key" />
                <xsd:enumeration value="Name" />
                <xsd:enumeration value="Value" />
                <xsd:enumeration value="Translation" />
                <xsd:enumeration value="UnaryOperator" />
                <xsd:enumeration value="SkippedLevels" />
                <xsd:enumeration value="CustomRollup" />
                <xsd:enumeration value="CustomRollupProperties" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="Ordinal" type="xsd:integer"
            minOccurs="0" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="UserDefinedGroupBinding">
    <xsd:complexContent>
      <xsd:extension base="Binding">
        <xsd:all>
          <xsd:element name="AttributeID" type="xsd:string" />
          <xsd:element name="Groups" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="Group" type="Group" minOccurs="0"
                  maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="MeasureBinding">
    <xsd:complexContent>
      <xsd:extension base="Binding">
        <xsd:all>
          <xsd:element name="MeasureID" type="xsd:string" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="Group">
    <xsd:all>
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="Members" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Member" type="xsd:string"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="CubeAttributeBinding">
    <xsd:complexContent>
      <xsd:extension base="Binding">
        <xsd:all>
          <xsd:element name="CubeID" type="xsd:string" />
          <xsd:element name="CubeDimensionID" type="xsd:string" />
          <xsd:element name="AttributeID" type="xsd:string" />
          <xsd:element name="Type">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="All" />
                <xsd:enumeration value="Key" />
                <xsd:enumeration value="Name" />
                <xsd:enumeration value="Value" />
                <xsd:enumeration value="Translation" />
                <xsd:enumeration value="UnaryOperator" />
                <xsd:enumeration value="SkippedLevels" />
                <xsd:enumeration value="CustomRollup" />
                <xsd:enumeration value="CustomRollupProperties" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="Ordinal" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="Ordinal" type="xsd:integer"
                  minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="DimensionBinding">
    <xsd:complexContent>
      <xsd:extension base="Binding">
        <xsd:all>
          <xsd:element name="DataSourceID" type="xsd:string" />
          <xsd:element name="DimensionID" type="xsd:string" />
          <xsd:element name="Persistence" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="NotPersisted" />
                <xsd:enumeration value="Metadata" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="RefreshPolicy" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="ByQuery" />
                <xsd:enumeration value="ByInterval" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="RefreshInterval" type="xsd:duration"
            minOccurs="0" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="CubeDimensionBinding">
    <xsd:complexContent>
      <xsd:extension base="Binding">
        <xsd:all>
          <xsd:element name="DataSourceID" type="xsd:string" />
          <xsd:element name="CubeID" type="xsd:string" />
          <xsd:element name="CubeDimensionID" type="xsd:string" />
          <xsd:element name="Filter" type="xsd:string"
            minOccurs="0" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="MeasureGroupBinding">
    <xsd:complexContent>
      <xsd:extension base="Binding">
        <xsd:all>
          <xsd:element name="DataSourceID" type="xsd:string" />
          <xsd:element name="CubeID" type="xsd:string" />
          <xsd:element name="MeasureGroupID" type="xsd:string" />
          <xsd:element name="Persistence" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="NotPersisted" />
                <xsd:enumeration value="Metadata" />
                <xsd:enumeration value="All" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="RefreshPolicy" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="ByQuery" />
                <xsd:enumeration value="ByInterval" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="RefreshInterval" type="xsd:duration"
            minOccurs="0" />
          <xsd:element name="Filter" type="xsd:string"
            minOccurs="0" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="MeasureGroupDimensionBinding">
    <xsd:complexContent>
      <xsd:extension base="Binding">
        <xsd:all>
          <xsd:element name="CubeDimensionID" type="xsd:string" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>


  <xsd:complexType name="TimeBinding">
    <xsd:complexContent>
      <xsd:extension base="Binding">
        <xsd:all>
          <xsd:element name="CalendarStartDate"
            type="xsd:dateTime" />
          <xsd:element name="CalendarEndDate" type="xsd:dateTime" />
          <xsd:element name="FirstDayOfWeek " minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:integer">
                <xsd:minInclusive value="1" />
                <xsd:maxInclusive value="7" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="CalendarLanguage" type="xsd:integer"
            minOccurs="0" />
          <xsd:element name="FiscalFirstMonth" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:integer">
                <xsd:minInclusive value="1" />
                <xsd:maxInclusive value="12" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="FiscalFirstDayOfMonth" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:integer">
                <xsd:minInclusive value="1" />
                <xsd:maxInclusive value="31" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="FiscalYearName" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="CalendarYearName" />
                <xsd:enumeration value="NextCalendarYearName" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="ReportingFirstMonth" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:integer">
                <xsd:minInclusive value="1" />
                <xsd:maxInclusive value="12" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="ReportingFirstWeekOfMonth"
            minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="1" />
                <xsd:enumeration value="2" />
                <xsd:enumeration value="3" />
                <xsd:enumeration value="4" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="ReportingWeekToMonthPattern"
            minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="Weeks445" />
                <xsd:enumeration value="Weeks454" />
                <xsd:enumeration value="Weeks544" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="ManufacturingFirstMonth"
            minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:integer">
                <xsd:minInclusive value="1" />
                <xsd:maxInclusive value="12" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name=" ManufacturingFirstWeekOfMonth"
            minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:integer">
                <xsd:minInclusive value="1" />
                <xsd:maxInclusive value="4" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="ManufacturingExtraMonthQuarter"
            minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:integer">
                <xsd:minInclusive value="1" />
                <xsd:maxInclusive value="4" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="TimeAttributeBinding">
    <xsd:complexContent>
      <xsd:extension base="Binding" />
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="InheritedBinding">
    <xsd:complexContent>
      <xsd:extension base="Binding" />
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="TabularBinding" abstract="true" />

  <xsd:complexType name="TableBinding">
    <xsd:complexContent>
      <xsd:extension base="TabularBinding">
        <xsd:all>
          <xsd:element name="DataSourceID" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="DbTableName" type="xsd:string" />
          <xsd:element name="DbSchemaName" type="xsd:string"
            minOccurs="0" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="QueryBinding">
    <xsd:complexContent>
      <xsd:extension base="TabularBinding">
        <xsd:all>
          <xsd:element name="DataSourceID" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="QueryDefinition" type="xsd:string" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="DSVTableBinding">
    <xsd:complexContent>
      <xsd:extension base="TabularBinding">
        <xsd:all>
          <xsd:element name="DataSourceViewID" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="TableID" type="xsd:string" />
          <xsd:element ref="eng300:DataEmbeddingStyle"
            minOccurs="0" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="ProactiveCachingBinding"
    abstract="true" />

  <xsd:complexType
    name="ProactiveCachingObjectNotificationBinding" abstract="true" />


  <xsd:complexType
    name="ProactiveCachingInheritedBinding">
    <xsd:complexContent>
      <xsd:extension
        base="ProactiveCachingObjectNotificationBinding">
        <xsd:all>
          <xsd:element name="NotificationTechnique" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="Client" />
                <xsd:enumeration value="Server" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="ProactiveCachingTablesBinding">
    <xsd:complexContent>
      <xsd:extension
        base="ProactiveCachingObjectNotificationBinding">
        <xsd:all>
          <xsd:element name="NotificationTechnique" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="Client" />
                <xsd:enumeration value="Server" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="TableNotifications">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="TableNotification"
                  type="TableNotification" minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="ProactiveCachingQueryBinding">
    <xsd:complexContent>
      <xsd:extension base="ProactiveCachingBinding">
        <xsd:all>
          <xsd:element name="RefreshInterval" type="xsd:duration" />
          <xsd:element name="QueryNotifications">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="QueryNotification"
                  type="QueryNotification" minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="QueryNotification">
    <xsd:all>
      <xsd:element name="Query" type="xsd:string" />
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType
    name="ProactiveCachingIncrementalProcessingBinding">
    <xsd:complexContent>
      <xsd:extension base="ProactiveCachingBinding">
        <xsd:all>
          <xsd:element name="RefreshInterval" type="xsd:duration"
            minOccurs="0" />
          <xsd:element name="IncrementalProcessingNotifications">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element
                  name="IncrementalProcessingNotification"
                  type="IncrementalProcessingNotification" minOccurs="0"
                  maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType
    name="IncrementalProcessingNotification">
    <xsd:all>
      <xsd:element name="TableID" type="xsd:string" />
      <xsd:element name="ProcessingQuery" type="xsd:string" />
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="TableNotification">
    <xsd:all>
      <xsd:element name="DbTableName" type="xsd:string" />
      <xsd:element name="DbSchemaName" type="xsd:string"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="CalculatedMeasureBinding">
    <xsd:complexContent>
      <xsd:extension base="Binding">
        <xsd:all>
          <xsd:element name="MeasureName" type="xsd:string" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="Permission">
    <xsd:sequence>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for Permission object -->
      <xsd:element name="RoleID" type="xsd:string" />
      <xsd:element name="Process" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="ReadDefinition" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="None" />
            <xsd:enumeration value="Basic" />
            <xsd:enumeration value="Allowed" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Read" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="None" />
            <xsd:enumeration value="Allowed" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="CubeDimensionPermission">
    <xsd:all>
      <xsd:element name="CubeDimensionID" type="xsd:string" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Read" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="None" />
            <xsd:enumeration value="Allowed" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Write" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="None" />
            <xsd:enumeration value="Allowed" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="AttributePermissions" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="AttributePermission"
              type="AttributePermission" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="AttributePermission">
    <xsd:all>
      <xsd:element name="AttributeID" type="xsd:string" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DefaultMember" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="VisualTotals" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="AllowedSet" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DeniedSet" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="CellPermission">
    <xsd:all>
      <xsd:element name="Access">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Read" />
            <xsd:enumeration value="ReadContingent" />
            <xsd:enumeration value="ReadWrite" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Expression" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="DatabasePermission">
    <xsd:complexContent>
      <xsd:extension base="Permission">
        <xsd:sequence>
          <xsd:element name="Administer" type="xsd:boolean"
            minOccurs="0" />
          <xsd:element name="Write" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="None" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
        </xsd:sequence>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="DataSourcePermission">
    <xsd:complexContent>
      <xsd:extension base="Permission">
        <xsd:sequence>
          <!--Extended elements for DataSourcePermission object -->
          <xsd:element name="Write" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="None" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
        </xsd:sequence>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>


  <xsd:complexType name="DimensionPermission">
    <xsd:complexContent>
      <xsd:extension base="Permission">
        <xsd:sequence>
          <!--Extended elements for DimensionPermission object -->
          <xsd:element name="AttributePermissions" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="AttributePermission"
                  type="AttributePermission" minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="Write" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="None" />
                <xsd:enumeration value="Allowed" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element ref="eng300_300:AllowedRowsExpression"
            minOccurs="0" />
        </xsd:sequence>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:element name="AllowedRowsExpression" type="xsd:string" />

  <xsd:complexType name="MiningStructurePermission">
    <xsd:complexContent>
      <xsd:extension base="Permission">
        <xsd:sequence>
          <!--Extended elements for MiningStructurePermission object -->
          <xsd:element name="AllowDrillThrough"
            type="xsd:boolean" minOccurs="0" />
          <xsd:element name="Write" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="None" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
        </xsd:sequence>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="MiningModelPermission">
    <xsd:complexContent>
      <xsd:extension base="Permission">
        <xsd:sequence>
          <!--Extended elements for MiningModelPermission object -->
          <xsd:element name="AllowDrillThrough"
            type="xsd:boolean" minOccurs="0" />
          <xsd:element name="AllowBrowsing" type="xsd:boolean"
            minOccurs="0" />
          <xsd:element name="Write" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="None" />
                <xsd:enumeration value="Allowed" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
        </xsd:sequence>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>


  <xsd:complexType name="CubePermission">
    <xsd:complexContent>
      <xsd:extension base="Permission">
        <xsd:sequence>
          <!--Extended elements for CubePermission object -->
          <xsd:element name="ReadSourceData" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="None" />
                <xsd:enumeration value="Allowed" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="DimensionPermissions" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="DimensionPermission"
                  type="CubeDimensionPermission" minOccurs="0"
                  maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="CellPermissions" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="CellPermission"
                  type="CellPermission" minOccurs="0" maxOccurs="3" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="Write" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="None" />
                <xsd:enumeration value="Allowed" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
        </xsd:sequence>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="Role">
    <xsd:all>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for Role object -->
      <xsd:element name="Members" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Member" type="Member" minOccurs="0"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="Member">
    <xsd:all>
      <xsd:element name="Name" minOccurs="0" type="xsd:string" />
      <xsd:element name="Sid" minOccurs="0" type="xsd:string" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="ProactiveCaching">
    <xsd:all>
      <xsd:element name="OnlineMode" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Immediate" />
            <xsd:enumeration value="OnCacheComplete" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="AggregationStorage" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Regular" />
            <xsd:enumeration value="MolapOnly" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Source" type="ProactiveCachingBinding"
        minOccurs="0" />
      <xsd:element name="SilenceInterval" type="xsd:duration"
        minOccurs="0" />
      <xsd:element name="Latency" type="xsd:duration"
        minOccurs="0" />
      <xsd:element name="SilenceOverrideInterval"
        type="xsd:duration" minOccurs="0" />
      <xsd:element name="ForceRebuildInterval"
        type="xsd:duration" minOccurs="0" />
      <xsd:element name="Enabled" type="xsd:boolean"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="ErrorConfiguration">
    <xsd:all>
      <xsd:element name="KeyErrorLimit" type="xsd:long"
        minOccurs="0" />
      <xsd:element name="KeyErrorLogFile" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="KeyErrorAction" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="ConvertToUnknown" />
            <xsd:enumeration value="DiscardRecord" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="KeyErrorLimitAction" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="StopProcessing" />
            <xsd:enumeration value="StopLogging" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="KeyNotFound" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="IgnoreError" />
            <xsd:enumeration value="ReportAndContinue" />
            <xsd:enumeration value="ReportAndStop" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="KeyDuplicate" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="IgnoreError" />
            <xsd:enumeration value="ReportAndContinue" />
            <xsd:enumeration value="ReportAndStop" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="NullKeyConvertedToUnknown"
        minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="IgnoreError" />
            <xsd:enumeration value="ReportAndContinue" />
            <xsd:enumeration value="ReportAndStop" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="NullKeyNotAllowed" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="IgnoreError" />
            <xsd:enumeration value="ReportAndContinue" />
            <xsd:enumeration value="ReportAndStop" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element ref="eng200:CalculationError" minOccurs="0" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Trace_Definition_ProviderInfo">
    <xsd:sequence>
      <xsd:element name="Data">
        <xsd:complexType>
          <xsd:all>
            <xsd:element name="Name" type="xsd:string" />
            <xsd:element name="Version">
              <xsd:complexType>
                <xsd:all>
                  <xsd:element name="Major" type="xsd:string"
                    minOccurs="0" />
                  <xsd:element name="Minor" type="xsd:string"
                    minOccurs="0" />
                  <xsd:element name="BuildNumber" type="xsd:string"
                    minOccurs="0" />
                </xsd:all>
              </xsd:complexType>
            </xsd:element>
            <xsd:element name="Type" type="xsd:string"
              minOccurs="0" />
            <xsd:element name="Description" type="xsd:string"
              minOccurs="0" />
          </xsd:all>
        </xsd:complexType>
      </xsd:element>
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="Trace_Event_Categories">
    <xsd:sequence>
      <xsd:element name="Data">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="EventCategory">
              <xsd:complexType>
                <xsd:all>
                  <xsd:element name="Name" type="xsd:string" />
                  <xsd:element name="Type" type="xsd:string"
                    minOccurs="0" />
                  <xsd:element name="Description" type="xsd:string"
                    minOccurs="0" />
                  <xsd:element name="EventList">
                    <xsd:complexType>
                      <xsd:sequence>
                        <xsd:element name="Event" type="TraceEvent"
                          minOccurs="0" maxOccurs="unbounded" />
                      </xsd:sequence>
                    </xsd:complexType>
                  </xsd:element>
                </xsd:all>
              </xsd:complexType>
            </xsd:element>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="TraceEvent">
    <xsd:all>
      <xsd:element name="ID" type="xsd:integer" />
      <xsd:element name="Name" type="xsd:string" minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="EventColumnList">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="EventColumn" type="EventColumn"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="EventColumn">
    <xsd:all>
      <xsd:element name="ID" type="xsd:integer" />
      <xsd:element name="EventColumnSubclassList" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="EventColumnSubclass" minOccurs="0"
              maxOccurs="unbounded">
              <xsd:complexType>
                <xsd:all>
                  <xsd:element name="ID" type="xsd:integer" />
                  <xsd:element name="name" type="xsd:string" />
                </xsd:all>
              </xsd:complexType>
            </xsd:element>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Trace_Columns">
    <xsd:sequence>
      <xsd:element name="Data">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Column">
              <xsd:complexType>
                <xsd:all>
                  <xsd:element name="ID" type="xsd:integer" />
                  <xsd:element name="Type" type="xsd:integer" />
                  <xsd:element name="Name" type="xsd:string" />
                  <xsd:element name="Description" type="xsd:string"
                    minOccurs="0" />
                  <xsd:element name="Filterable" type="xsd:boolean" />
                  <xsd:element name="Repeatable" type="xsd:boolean" />
                  <xsd:element name="RepeatedBase" type="xsd:boolean" />
                </xsd:all>
              </xsd:complexType>
            </xsd:element>
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="Annotation">
    <xsd:all>
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="Visibility" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="SchemaRowset" />
            <xsd:enumeration value="None" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Value" type="xsd:anyType"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="DataSource" abstract="true">
    <xsd:all>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for DataSource object -->
      <xsd:element name="ManagedProvider" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="ConnectionString" type="xsd:string" />
      <xsd:element name="ConnectionStringSecurity"
        minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="PasswordRemoved" />
            <xsd:enumeration value="Unchanged" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="ImpersonationInfo"
        type="eng:ImpersonationInfo" minOccurs="0" />
      <xsd:element name="Isolation" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="ReadCommitted" />
            <xsd:enumeration value="Snapshot" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="MaxActiveConnections"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="Timeout" type="xsd:duration"
        minOccurs="0" />
      <xsd:element name="DataSourcePermissions" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="DataSourcePermission"
              type="DataSourcePermission" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element ref="eng300:QueryImpersonationInfo"
        minOccurs="0" />
      <xsd:element ref="eng300:QueryHints" minOccurs="0" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="RelationalDataSource">
    <xsd:complexContent>
      <xsd:extension base="DataSource" />
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="OlapDataSource">
    <xsd:complexContent>
      <xsd:extension base="DataSource" />
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="PushedDataSource">
    <xsd:all>
      <xsd:element name="root">
        <xsd:complexType>
          <xsd:attribute name="Parameter">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="InputRowset" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:attribute>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="EndOfData">
        <xsd:complexType>
          <xsd:attribute name="Parameter">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="EndOfInputRowset" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:attribute>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="Dimension">
    <xsd:all>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for Dimension object -->
      <xsd:element name="Source" minOccurs="0" type="Binding" />
      <xsd:element name="MiningModelID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Type" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Regular" />
            <xsd:enumeration value="Time" />
            <xsd:enumeration value="Geography" />
            <xsd:enumeration value="Organization" />
            <xsd:enumeration value="BillOfMaterials" />
            <xsd:enumeration value="Accounts" />
            <xsd:enumeration value="Customers" />
            <xsd:enumeration value="Products" />
            <xsd:enumeration value="Scenario" />
            <xsd:enumeration value="Quantitative" />
            <xsd:enumeration value="Utility" />
            <xsd:enumeration value="Currency" />
            <xsd:enumeration value="Rates" />
            <xsd:enumeration value="Channel" />
            <xsd:enumeration value="Promotion" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="UnknownMember" minOccurs="0">
        <xsd:complexType>
          <xsd:simpleContent>
            <xsd:extension base="UnknownMemberEnumType">
              <xsd:attribute name="valuens">
                <xsd:simpleType>
                  <xsd:restriction base="xsd:string">
                    <xsd:enumeration
                      value="http://schemas.microsoft.com/analysisservices/2010/engine/200/200" />
                  </xsd:restriction>
                </xsd:simpleType>
              </xsd:attribute>
            </xsd:extension>
          </xsd:simpleContent>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="MdxMissingMemberMode" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Default" />
            <xsd:enumeration value="Ignore" />
            <xsd:enumeration value="Error" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="ErrorConfiguration"
        type="ErrorConfiguration" minOccurs="0" />
      <xsd:element name="StorageMode">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Molap" />
            <xsd:enumeration value="Rolap" />
            <xsd:enumeration value="InMemory" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="WriteEnabled" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="ProcessingPriority" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="LastProcessed" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="DimensionPermissions" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="DimensionPermission"
              type="DimensionPermission" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="DependsOnDimensionID"
        type="xsd:string" minOccurs="0" />
      <xsd:element name="Language" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="Collation" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="UnknownMemberName" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="UnknownMemberTranslations"
        minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="UnknownMemberTranslation"
              type="Translation" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="State" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Processed" />
            <xsd:enumeration value="Unprocessed" />
            <xsd:enumeration value="PartiallyProcessed" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="ProactiveCaching"
        type="ProactiveCaching" minOccurs="0" />
      <xsd:element name="ProcessingMode" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Regular" />
            <xsd:enumeration value="LazyAggregations" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="ProcessingGroup" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="ByAttribute" />
            <xsd:enumeration value="ByTable" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="CurrentStorageMode" minOccurs="0">
        <xsd:complexType>
          <xsd:simpleContent>
            <xsd:extension
              base="DimensionCurrentStorageModeEnumType">
              <xsd:attribute name="valuens">
                <xsd:simpleType>
                  <xsd:restriction base="xsd:string">
                    <xsd:enumeration
                      value="http://schemas.microsoft.com/analysisservices/2010/engine/200/200" />
                  </xsd:restriction>
                </xsd:simpleType>
              </xsd:attribute>
            </xsd:extension>
          </xsd:simpleContent>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Attributes" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Attribute"
              type="DimensionAttribute" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="AttributeAllMemberName"
        type="xsd:string" minOccurs="0" />
      <xsd:element name="AttributeAllMemberTranslations"
        minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="MemberAllMemberTranslation"
              type="Translation" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Hierarchies" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Hierarchy" type="Hierarchy"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element ref="eng200_200:ProcessingRecommendation"
        minOccurs="0" />
      <xsd:element name="Relationships"
        type="eng300_300:Relationships" minOccurs="0" maxOccurs="1" />
      <xsd:element ref="eng300:StringStoresCompatibilityLevel"
        minOccurs="0" />
      <xsd:element
        ref="eng300:CurrentStringStoresCompatibilityLevel" minOccurs="0" />
    </xsd:all>
  </xsd:complexType>
  <xsd:simpleType
    name="DimensionCurrentStorageModeEnumType">
    <xsd:restriction base="xsd:string">
      <xsd:enumeration value="Molap" />
      <xsd:enumeration value="InMemory" />
      <xsd:enumeration value="Rolap" />
    </xsd:restriction>
  </xsd:simpleType>
  <xsd:simpleType name="UnknownMemberEnumType">
    <xsd:restriction base="xsd:string">
      <xsd:enumeration value="Visible" />
      <xsd:enumeration value="Hidden" />
      <xsd:enumeration value="None" />
      <xsd:enumeration value="AutomaticNull" />
    </xsd:restriction>
  </xsd:simpleType>


  <xsd:complexType name="DimensionAttribute">
    <xsd:all>
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Type" minOccurs="0">
        <xsd:complexType>
          <xsd:simpleContent>
            <xsd:extension base="DimensionAttributeTypeEnumType">
              <xsd:attribute name="valuens">
                <xsd:simpleType>
                  <xsd:restriction base="xsd:string">
                    <xsd:enumeration
                      value="http://schemas.microsoft.com/analysisservices/2010/engine/200/200" />
                  </xsd:restriction>
                </xsd:simpleType>
              </xsd:attribute>
            </xsd:extension>
          </xsd:simpleContent>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Usage" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Regular" />
            <xsd:enumeration value="Key" />
            <xsd:enumeration value="Parent" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Source" type="Binding" minOccurs="0" />
      <xsd:element name="EstimatedCount" type="xsd:long"
        minOccurs="0" />
      <xsd:element name="KeyColumns">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="KeyColumn" type="DataItem"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="NameColumn" type="DataItem"
        minOccurs="0" />
      <xsd:element name="ValueColumn" type="DataItem"
        minOccurs="0" />
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation"
              type="AttributeTranslation" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="AttributeRelationships" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="AttributeRelationship"
              type="AttributeRelationship" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="DiscretizationMethod" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="None" />
            <xsd:enumeration value="Automatic" />
            <xsd:enumeration value="EqualAreas" />
            <xsd:enumeration value="Clusters" />
            <xsd:enumeration value="Thresholds" />
            <xsd:enumeration value="UserDefined" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DiscretizationBucketCount"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="RootMemberIf" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration
              value="ParentIsBlankSelfOrMissing" />
            <xsd:enumeration value="ParentIsBlank" />
            <xsd:enumeration value="ParentIsSelf" />
            <xsd:enumeration value="ParentIsMissing" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="OrderBy" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Key" />
            <xsd:enumeration value="Name" />
            <xsd:enumeration value="AttributeKey" />
            <xsd:enumeration value="AttributeName" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DefaultMember" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="OrderByAttributeID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="SkippedLevelsColumn" type="DataItem"
        minOccurs="0" />
      <xsd:element name="NamingTemplate" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="MembersWithData" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="NonLeafDataHidden" />
            <xsd:enumeration value="NonLeafDataVisible" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="MembersWithDataCaption"
        type="xsd:string" minOccurs="0" />
      <xsd:element name="NamingTemplateTranslations"
        minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="NamingTemplateTranslation"
              type="Translation" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="CustomRollupColumn" type="DataItem"
        minOccurs="0" />
      <xsd:element name="CustomRollupPropertiesColumn"
        type="DataItem" minOccurs="0" />
      <xsd:element name="UnaryOperatorColumn" type="DataItem"
        minOccurs="0" />
      <xsd:element name="AttributeHierarchyOrdered"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="MemberNamesUnique" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="IsAggregatable" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="AttributeHierarchyEnabled"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="AttributeHierarchyOptimizedState"
        minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="FullyOptimized" />
            <xsd:enumeration value="NotOptimized" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="AttributeHierarchyVisible"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="AttributeHierarchyDisplayFolder"
        type="xsd:string" minOccurs="0" />
      <xsd:element name="KeyUniquenessGuarantee"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="GroupingBehavior" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="EncourageGrouping" />
            <xsd:enumeration value="DiscourageGrouping" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="InstanceSelection" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="None" />
            <xsd:enumeration value="DropDown" />
            <xsd:enumeration value="List" />
            <xsd:enumeration value="FilteredList" />
            <xsd:enumeration value="MandatoryFilter" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="ProcessingState" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Processed" />
            <xsd:enumeration value="Unprocessed" />
            <xsd:enumeration value="InvalidExpression" />
            <xsd:enumeration value="CalculationError" />
            <xsd:enumeration value="DependencyError" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="AttributeHierarchyProcessingState"
        type="eng300:AttributeHierarchyProcessingState" minOccurs="0" />
      <xsd:element name="VisualizationProperties"
        type="eng300:DimensionAttributeVisualizationProperties"
        minOccurs="0" maxOccurs="1" />
      <xsd:element name="ExtendedType" type="xsd:string"
        minOccurs="0" maxOccurs="1" />
    </xsd:all>
  </xsd:complexType>
  <xsd:simpleType name="DimensionAttributeTypeEnumType">
    <xsd:restriction base="xsd:string">
      <xsd:enumeration value="Account" />
      <xsd:enumeration value="AccountName" />
      <xsd:enumeration value="AccountNumber" />
      <xsd:enumeration value="AccountType" />
      <xsd:enumeration value="Address" />
      <xsd:enumeration value="AddressBuilding" />
      <xsd:enumeration value="AddressCity" />
      <xsd:enumeration value="AddressCountry" />
      <xsd:enumeration value="AddressFax" />
      <xsd:enumeration value="AddressFloor" />
      <xsd:enumeration value="AddressHouse" />
      <xsd:enumeration value="AddressPhone" />
      <xsd:enumeration value="AddressQuarter" />
      <xsd:enumeration value="AddressRoom" />
      <xsd:enumeration value="AddressStateOrProvince" />
      <xsd:enumeration value="AddressStreet" />
      <xsd:enumeration value="AddressZip" />
      <xsd:enumeration value="BomResource" />
      <xsd:enumeration value="Caption" />
      <xsd:enumeration value="CaptionAbbreviation" />
      <xsd:enumeration value="CaptionDescription" />
      <xsd:enumeration value="Channel" />
      <xsd:enumeration value="City" />
      <xsd:enumeration value="Company" />
      <xsd:enumeration value="Continent" />
      <xsd:enumeration value="Country" />
      <xsd:enumeration value="County" />
      <xsd:enumeration value="CurrencyDestination" />
      <xsd:enumeration value="CurrencyIsoCode" />
      <xsd:enumeration value="CurrencyName" />
      <xsd:enumeration value="CurrencySource" />
      <xsd:enumeration value="CustomerGroup" />
      <xsd:enumeration value="CustomerHousehold" />
      <xsd:enumeration value="Customers" />
      <xsd:enumeration value="Date" />
      <xsd:enumeration value="DateCanceled" />
      <xsd:enumeration value="DateDuration" />
      <xsd:enumeration value="DateEnded" />
      <xsd:enumeration value="DateModified" />
      <xsd:enumeration value="DateStart" />
      <xsd:enumeration value="DayOfHalfYear" />
      <xsd:enumeration value="DayOfMonth" />
      <xsd:enumeration value="DayOfQuarter" />
      <xsd:enumeration value="DayOfTenDays" />
      <xsd:enumeration value="DayOfTrimester" />
      <xsd:enumeration value="DayOfWeek" />
      <xsd:enumeration value="DayOfYear" />
      <xsd:enumeration value="Days" />
      <xsd:enumeration value="DeletedFlag" />
      <xsd:enumeration value="ExtendedType" />
      <xsd:enumeration value="FiscalDate" />
      <xsd:enumeration value="FiscalDayOfHalfYear" />
      <xsd:enumeration value="FiscalDayOfMonth" />
      <xsd:enumeration value="FiscalDayOfQuarter" />
      <xsd:enumeration value="FiscalDayOfTrimester" />
      <xsd:enumeration value="FiscalDayOfWeek" />
      <xsd:enumeration value="FiscalDayOfYear" />
      <xsd:enumeration value="FiscalHalfYears" />
      <xsd:enumeration value="FiscalHalfYearOfYear" />
      <xsd:enumeration value="FiscalMonths" />
      <xsd:enumeration value="FiscalMonthOfHalfYear" />
      <xsd:enumeration value="FiscalMonthOfQuarter" />
      <xsd:enumeration value="FiscalMonthOfTrimester" />
      <xsd:enumeration value="FiscalMonthOfYear" />
      <xsd:enumeration value="FiscalQuarters" />
      <xsd:enumeration value="FiscalQuarterOfHalfYear" />
      <xsd:enumeration value="FiscalQuarterOfYear" />
      <xsd:enumeration value="FiscalTrimesters" />
      <xsd:enumeration value="FiscalTrimesterOfYear" />
      <xsd:enumeration value="FiscalWeeks" />
      <xsd:enumeration value="FiscalWeekOfHalfYear" />
      <xsd:enumeration value="FiscalWeekOfMonth" />
      <xsd:enumeration value="FiscalWeekOfQuarter" />
      <xsd:enumeration value="FiscalWeekOfTrimester" />
      <xsd:enumeration value="FiscalWeekOfYear" />
      <xsd:enumeration value="FiscalYears" />
      <xsd:enumeration value="FormattingColor" />
      <xsd:enumeration value="FormattingFont" />
      <xsd:enumeration value="FormattingFontEffects" />
      <xsd:enumeration value="FormattingFontSize" />
      <xsd:enumeration value="FormattingOrder" />
      <xsd:enumeration value="FormattingSubtotal" />
      <xsd:enumeration value="GeoBoundaryBottom" />
      <xsd:enumeration value="GeoBoundaryFront" />
      <xsd:enumeration value="GeoBoundaryLeft" />
      <xsd:enumeration value="GeoBoundaryPolygon" />
      <xsd:enumeration value="GeoBoundaryRear" />
      <xsd:enumeration value="GeoBoundaryRight" />
      <xsd:enumeration value="GeoBoundaryTop" />
      <xsd:enumeration value="GeoCentroidX" />
      <xsd:enumeration value="GeoCentroidY" />
      <xsd:enumeration value="GeoCentroidZ" />
      <xsd:enumeration value="HalfYears" />
      <xsd:enumeration value="HalfYearOfYear" />
      <xsd:enumeration value="Hours" />
      <xsd:enumeration value="ID" />
      <xsd:enumeration value="Image" />
      <xsd:enumeration value="ImageBmp" />
      <xsd:enumeration value="ImageGif" />
      <xsd:enumeration value="ImageJpg" />
      <xsd:enumeration value="ImagePng" />
      <xsd:enumeration value="ImageTiff" />
      <xsd:enumeration value="ImageUrl" />
      <xsd:enumeration value="IsHoliday" />
      <xsd:enumeration value="Iso8601Date" />
      <xsd:enumeration value="Iso8601DayOfWeek" />
      <xsd:enumeration value="Iso8601DayOfYear" />
      <xsd:enumeration value="Iso8601Weeks" />
      <xsd:enumeration value="Iso8601WeekOfYear" />
      <xsd:enumeration value="Iso8601Years" />
      <xsd:enumeration value="IsPeakDay" />
      <xsd:enumeration value="IsWeekDay" />
      <xsd:enumeration value="IsWorkingDay" />
      <xsd:enumeration value="ManufacturingDate" />
      <xsd:enumeration value="ManufacturingDayOfHalfYear" />
      <xsd:enumeration value="ManufacturingDayOfMonth" />
      <xsd:enumeration value="ManufacturingDayOfQuarter" />
      <xsd:enumeration value="ManufacturingDayOfWeek" />
      <xsd:enumeration value="ManufacturingDayOfYear" />
      <xsd:enumeration value="ManufacturingHalfYears" />
      <xsd:enumeration value="ManufacturingHalfYearOfYear" />
      <xsd:enumeration value="ManufacturingMonths" />
      <xsd:enumeration value="ManufacturingMonthOfHalfYear" />
      <xsd:enumeration value="ManufacturingMonthOfQuarter" />
      <xsd:enumeration value="ManufacturingMonthOfYear" />
      <xsd:enumeration value="ManufacturingQuarters" />
      <xsd:enumeration
        value="ManufacturingQuarterOfHalfYear" />
      <xsd:enumeration value="ManufacturingQuarterOfYear" />
      <xsd:enumeration value="ManufacturingWeeks" />
      <xsd:enumeration value="ManufacturingWeekOfHalfYear" />
      <xsd:enumeration value="ManufacturingWeekOfMonth" />
      <xsd:enumeration value="ManufacturingWeekOfQuarter" />
      <xsd:enumeration value="ManufacturingWeekOfYear" />
      <xsd:enumeration value="ManufacturingYears" />
      <xsd:enumeration value="Minutes" />
      <xsd:enumeration value="Months" />
      <xsd:enumeration value="MonthOfHalfYear" />
      <xsd:enumeration value="MonthOfQuarter" />
      <xsd:enumeration value="MonthOfTrimester" />
      <xsd:enumeration value="MonthOfYear" />
      <xsd:enumeration value="OrganizationalUnit" />
      <xsd:enumeration value="OrgTitle" />
      <xsd:enumeration value="PercentOwnership" />
      <xsd:enumeration value="PercentVoteRight" />
      <xsd:enumeration value="Person" />
      <xsd:enumeration value="PersonContact" />
      <xsd:enumeration value="PersonDemographic" />
      <xsd:enumeration value="PersonFirstName" />
      <xsd:enumeration value="PersonFullName" />
      <xsd:enumeration value="PersonLastName" />
      <xsd:enumeration value="PersonMiddleName" />
      <xsd:enumeration value="PhysicalColor" />
      <xsd:enumeration value="PhysicalDensity" />
      <xsd:enumeration value="PhysicalDepth" />
      <xsd:enumeration value="PhysicalHeight" />
      <xsd:enumeration value="PhysicalSize" />
      <xsd:enumeration value="PhysicalVolume" />
      <xsd:enumeration value="PhysicalWeight" />
      <xsd:enumeration value="PhysicalWidth" />
      <xsd:enumeration value="Point" />
      <xsd:enumeration value="PostalCode" />
      <xsd:enumeration value="Product" />
      <xsd:enumeration value="ProductBrand" />
      <xsd:enumeration value="ProductCategory" />
      <xsd:enumeration value="ProductGroup" />
      <xsd:enumeration value="ProductSKU" />
      <xsd:enumeration value="Project" />
      <xsd:enumeration value="ProjectCode" />
      <xsd:enumeration value="ProjectCompletion" />
      <xsd:enumeration value="ProjectEndDate" />
      <xsd:enumeration value="ProjectName" />
      <xsd:enumeration value="ProjectStartDate" />
      <xsd:enumeration value="Promotion" />
      <xsd:enumeration value="QtyRangeHigh" />
      <xsd:enumeration value="QtyRangeLow" />
      <xsd:enumeration value="Quantitative" />
      <xsd:enumeration value="Quarters" />
      <xsd:enumeration value="QuarterOfHalfYear" />
      <xsd:enumeration value="QuarterOfYear" />
      <xsd:enumeration value="Rate" />
      <xsd:enumeration value="RateType" />
      <xsd:enumeration value="Region" />
      <xsd:enumeration value="Regular" />
      <xsd:enumeration value="RelationToParent" />
      <xsd:enumeration value="ReportingDate" />
      <xsd:enumeration value="ReportingDayOfHalfYear" />
      <xsd:enumeration value="ReportingDayOfMonth" />
      <xsd:enumeration value="ReportingDayOfQuarter" />
      <xsd:enumeration value="ReportingDayOfTrimester" />
      <xsd:enumeration value="ReportingDayOfWeek" />
      <xsd:enumeration value="ReportingDayOfYear" />
      <xsd:enumeration value="ReportingHalfYears" />
      <xsd:enumeration value="ReportingHalfYearOfYear" />
      <xsd:enumeration value="ReportingMonths" />
      <xsd:enumeration value="ReportingMonthOfHalfYear" />
      <xsd:enumeration value="ReportingMonthOfQuarter" />
      <xsd:enumeration value="ReportingMonthOfTrimester" />
      <xsd:enumeration value="ReportingMonthOfYear" />
      <xsd:enumeration value="ReportingQuarters" />
      <xsd:enumeration value="ReportingQuarterOfHalfYear" />
      <xsd:enumeration value="ReportingQuarterOfYear" />
      <xsd:enumeration value="ReportingTrimesters" />
      <xsd:enumeration value="ReportingTrimesterOfYear" />
      <xsd:enumeration value="ReportingWeeks" />
      <xsd:enumeration value="ReportingWeekOfHalfYear" />
      <xsd:enumeration value="ReportingWeekOfMonth" />
      <xsd:enumeration value="ReportingWeekOfQuarter" />
      <xsd:enumeration value="ReportingWeekOfTrimester" />
      <xsd:enumeration value="ReportingWeekOfYear" />
      <xsd:enumeration value="ReportingYears" />
      <xsd:enumeration value="Representative" />
      <xsd:enumeration value="RowNumber" />
      <xsd:enumeration value="ScdEndDate" />
      <xsd:enumeration value="ScdOriginalID" />
      <xsd:enumeration value="ScdStartDate" />
      <xsd:enumeration value="ScdStatus" />
      <xsd:enumeration value="Scenario" />
      <xsd:enumeration value="Seconds" />
      <xsd:enumeration value="Sequence" />
      <xsd:enumeration value="ShortCaption" />
      <xsd:enumeration value="StateOrProvince" />
      <xsd:enumeration value="TenDay" />
      <xsd:enumeration value="TenDayOfHalfYear" />
      <xsd:enumeration value="TenDayOfMonth" />
      <xsd:enumeration value="TenDayOfQuarter" />
      <xsd:enumeration value="TenDayOfTrimester" />
      <xsd:enumeration value="TenDayOfYear" />
      <xsd:enumeration value="Trimesters" />
      <xsd:enumeration value="TrimesterOfYear" />
      <xsd:enumeration value="UndefinedTime" />
      <xsd:enumeration value="Utility" />
      <xsd:enumeration value="Version" />
      <xsd:enumeration value="WebHtml" />
      <xsd:enumeration value="WebMailAlias" />
      <xsd:enumeration value="WebUrl" />
      <xsd:enumeration value="WebXmlOrXsl" />
      <xsd:enumeration value="WeekOfYear" />
      <xsd:enumeration value="Weeks" />
      <xsd:enumeration value="WinterSummerSeason" />
      <xsd:enumeration value="Years" />
    </xsd:restriction>
  </xsd:simpleType>

  <xsd:complexType name="DataItem">
    <xsd:all>
      <xsd:element name="DataType">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="WChar" />
            <xsd:enumeration value="Integer" />
            <xsd:enumeration value="BigInt" />
            <xsd:enumeration value="Single" />
            <xsd:enumeration value="Double" />
            <xsd:enumeration value="Date" />
            <xsd:enumeration value="Currency" />
            <xsd:enumeration value="UnsignedTinyInt" />
            <xsd:enumeration value="UnsignedSmallInt" />
            <xsd:enumeration value="UnsignedInt" />
            <xsd:enumeration value="UnsignedBigInt" />
            <xsd:enumeration value="Bool" />
            <xsd:enumeration value="Smallint" />
            <xsd:enumeration value="Tinyint" />
            <xsd:enumeration value="Binary" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DataSize" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="MimeType" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="NullProcessing" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Preserve" />
            <xsd:enumeration value="Error" />
            <xsd:enumeration value="UnknownMember" />
            <xsd:enumeration value="ZeroOrBlank" />
            <xsd:enumeration value="Automatic" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Trimming" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Left" />
            <xsd:enumeration value="Right" />
            <xsd:enumeration value="LeftRight" />
            <xsd:enumeration value="None" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="InvalidXmlCharacters" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Preserve" />
            <xsd:enumeration value="Remove" />
            <xsd:enumeration value="Replace" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Collation" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Format" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="TrimRight" />
            <xsd:enumeration value="TrimLeft" />
            <xsd:enumeration value="TrimAll" />
            <xsd:enumeration value="TrimNone" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Source" type="Binding" minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Translation">
    <xsd:all>
      <xsd:element name="Language" type="xsd:unsignedInt" />
      <xsd:element name="Caption" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DisplayFolder" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="AttributeTranslation">
    <xsd:all>
      <xsd:element name="Language" type="xsd:unsignedInt" />
      <xsd:element name="Caption" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DisplayFolder" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="CaptionColumn" type="DataItem"
        minOccurs="0" />
      <xsd:element name="MembersWithDataCaption"
        type="xsd:string" minOccurs="0" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="AttributeRelationship">
    <xsd:all>
      <xsd:element name="AttributeID" type="xsd:string" />
      <xsd:element name="RelationshipType" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Rigid" />
            <xsd:enumeration value="Flexible" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Cardinality" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Many" />
            <xsd:enumeration value="One" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Optionality" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Mandatory" />
            <xsd:enumeration value="Optional" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="OverrideBehavior" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="None" />
            <xsd:enumeration value="Strong" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Name" type="xsd:string" minOccurs="0" />
      <xsd:element name="Visible" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Hierarchy">
    <xsd:all>
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element ref="eng300:ProcessingState" minOccurs="0" />
      <xsd:element ref="eng300:StructureType" minOccurs="0" />
      <xsd:element name="DisplayFolder" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="AllMemberName" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="AllMemberTranslations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="AllMemberTranslation"
              type="Translation" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="MemberNamesUnique" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element ref="eng2:MemberKeysUnique" minOccurs="0" />
      <xsd:element name="AllowDuplicateNames"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="Levels">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Level" type="Level"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="VisualizationProperties"
        type="eng300:HierarchyVisualizationProperties" minOccurs="0"
        maxOccurs="1" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Level">
    <xsd:all>
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="SourceAttributeID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="HideMemberIf" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Never" />
            <xsd:enumeration value="OnlyChildWithNoName" />
            <xsd:enumeration value="OnlyChildWithParentName" />
            <xsd:enumeration value="NoName" />
            <xsd:enumeration value="ParentName" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Server">
    <xsd:all>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for Server object -->
      <xsd:element name="ProductName" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Edition" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Standard" />
            <xsd:enumeration value="Standard64" />
            <xsd:enumeration value="Enterprise" />
            <xsd:enumeration value="Enterprise64" />
            <xsd:enumeration value="Developer" />
            <xsd:enumeration value="Developer64" />
            <xsd:enumeration value="Evaluation" />
            <xsd:enumeration value="Evaluation64" />
            <xsd:enumeration value="Local" />
            <xsd:enumeration value="Local64" />
            <xsd:enumeration value="BusinessIntelligence" />
            <xsd:enumeration value="BusinessIntelligence64" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="EditionID" type="xsd:long"
        minOccurs="0" />
      <xsd:element name="Version" type="xsd:string"
        minOccurs="0" />
      <xsd:element ref="eng300:ServerMode" minOccurs="0" />
      <xsd:element name="ProductLevel" type="xsd:string"
        minOccurs="0" />
      <xsd:element ref="eng400:DefaultCompatibilityLevel"
        minOccurs="0" />
      <xsd:element ref="eng600:SupportedCompatibilityLevels"
        minOccurs="0" />
      <xsd:element name="Databases " minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Database" type="Database"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Assemblies" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Assembly" type="Assembly"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Traces" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Trace" type="Trace" minOccurs="0"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Roles" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Role" type="Role" minOccurs="0"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="ServerProperties" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="ServerProperty"
              type="ServerProperty" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="ServerProperty">
    <xsd:all>
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="Value" type="xsd:string" />
      <xsd:element name="RequiresRestart" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="PendingValue" type="xsd:anySimpleType"
        minOccurs="0" />
      <xsd:element name="DefaultValue" type="xsd:anySimpleType"
        minOccurs="0" />
      <xsd:element name="DisplayFlag" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="Type" minOccurs="0" type="xsd:string" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Assembly" abstract="true">
    <xsd:sequence>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for Assembly object -->
      <xsd:element name="ImpersonationInfo"
        type="eng:ImpersonationInfo" minOccurs="0" />
    </xsd:sequence>
  </xsd:complexType>


  <xsd:complexType name="ComAssembly">
    <xsd:complexContent>
      <xsd:extension base="Assembly">
        <xsd:sequence>
          <xsd:element name="Source" type="xsd:string"
            minOccurs="0" />
        </xsd:sequence>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="ClrAssembly">
    <xsd:complexContent>
      <xsd:extension base="Assembly">
        <xsd:sequence>
          <xsd:element name="Files">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="File" type="ClrAssemblyFile"
                  maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="PermissionSet" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="Safe" />
                <xsd:enumeration value="ExternalAccess" />
                <xsd:enumeration value="Unrestricted" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
        </xsd:sequence>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="ClrAssemblyFile">
    <xsd:all>
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="Type">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Main" />
            <xsd:enumeration value="Dependent" />
            <xsd:enumeration value="Debug" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Data" type="DataBlock" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="DataBlock">
    <xsd:sequence>
      <xsd:element name="Block" type="xsd:base64Binary"
        minOccurs="0" maxOccurs="unbounded" />
    </xsd:sequence>
  </xsd:complexType>

  <xsd:complexType name="Trace">
    <xsd:all>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for Trace object -->
      <xsd:element name="LogFileName" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="LogFileAppend" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="LogFileSize" type="xsd:long"
        minOccurs="0" />
      <xsd:element name="Audit" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="LogFileRollover" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="AutoRestart" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="StopTime" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Filter" type="TraceFilter"
        minOccurs="0" />
      <xsd:element ref="EventType" maxOccurs="1" minOccurs="1" />
    </xsd:all>
  </xsd:complexType>

  <xsd:element name="EventType">
    <xsd:complexType>
      <xsd:choice>
        <xsd:element name="Events">
          <xsd:complexType>
            <xsd:sequence>
              <xsd:element name="Event" type="Event" minOccurs="0"
                maxOccurs="unbounded" />
            </xsd:sequence>
          </xsd:complexType>
        </xsd:element>
        <xsd:element ref="eng300_300:XEvent" minOccurs="0" />
      </xsd:choice>
    </xsd:complexType>
  </xsd:element>

  <xsd:complexType name="Event">
    <xsd:all>
      <xsd:element name="EventID" type="xsd:string" />
      <xsd:element name="Columns" type="EventColumnID" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="EventColumnID">
    <xsd:sequence>
      <xsd:element name="ColumnID" type="xsd:string"
        maxOccurs="unbounded" />
    </xsd:sequence>
  </xsd:complexType>


  <xsd:complexType name="TraceFilter">
    <xsd:choice minOccurs="1" maxOccurs="1">
      <xsd:element name="Not" type="not_type" minOccurs="0" />
      <xsd:element name="Or" type="and_or_type" minOccurs="0" />
      <xsd:element name="And" type="and_or_type" minOccurs="0" />
      <xsd:element name="Equal" type="bool_binop" minOccurs="0" />
      <xsd:element name="NotEqual" type="bool_binop"
        minOccurs="0" />
      <xsd:element name="Less" type="bool_binop" minOccurs="0" />
      <xsd:element name="LessOrEqual" type="bool_binop"
        minOccurs="0" />
      <xsd:element name="Greater" type="bool_binop"
        minOccurs="0" />
      <xsd:element name="GreaterOrEqual" type="bool_binop"
        minOccurs="0" />
      <xsd:element name="Like" type="bool_binop" minOccurs="0" />
      <xsd:element name="NotLike" type="bool_binop"
        minOccurs="0" />
    </xsd:choice>
  </xsd:complexType>
  <xsd:complexType name="not_type">
    <xsd:choice maxOccurs="1" minOccurs="1">
      <xsd:element name="Not" type="not_type" minOccurs="0" />
      <xsd:element name="Or" type="and_or_type" minOccurs="0" />
      <xsd:element name="And" type="and_or_type" minOccurs="0" />
      <xsd:element name="Equal" type="bool_binop" minOccurs="0" />
      <xsd:element name="NotEqual" type="bool_binop"
        minOccurs="0" />
      <xsd:element name="Less" type="bool_binop" minOccurs="0" />
      <xsd:element name="LessOrEqual" type="bool_binop"
        minOccurs="0" />
      <xsd:element name="Greater" type="bool_binop"
        minOccurs="0" />
      <xsd:element name="GreaterOrEqual" type="bool_binop"
        minOccurs="0" />
      <xsd:element name="Like" type="bool_binop" minOccurs="0" />
      <xsd:element name="NotLike" type="bool_binop"
        minOccurs="0" />
    </xsd:choice>
  </xsd:complexType>
  <xsd:complexType name="and_or_type">
    <xsd:choice maxOccurs="2" minOccurs="2">
      <xsd:element name="Not" type="not_type" minOccurs="0" />
      <xsd:element name="Or" type="and_or_type" minOccurs="0" />
      <xsd:element name="And" type="and_or_type" minOccurs="0" />
      <xsd:element name="Equal" type="bool_binop" minOccurs="0" />
      <xsd:element name="NotEqual" type="bool_binop"
        minOccurs="0" />
      <xsd:element name="Less" type="bool_binop" minOccurs="0" />
      <xsd:element name="LessOrEqual" type="bool_binop"
        minOccurs="0" />
      <xsd:element name="Greater" type="bool_binop"
        minOccurs="0" />
      <xsd:element name="GreaterOrEqual" type="bool_binop"
        minOccurs="0" />
      <xsd:element name="Like" type="bool_binop" minOccurs="0" />
      <xsd:element name="NotLike" type="bool_binop"
        minOccurs="0" />
    </xsd:choice>
  </xsd:complexType>
  <xsd:complexType name="bool_binop">
    <xsd:all>
      <xsd:element name="ColumnID" type="xsd:string" />
      <xsd:element name="Value" type="xsd:string" />
    </xsd:all>
  </xsd:complexType>


  <xsd:element name="event_session">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="templateCategory" minOccurs="0"
          maxOccurs="1" type="xsd:string" />
        <xsd:element name="templateName" minOccurs="0"
          maxOccurs="1" type="xsd:string" />
        <xsd:element name="templateDescription" minOccurs="0"
          maxOccurs="1" type="xsd:string" />
        <xsd:element name="event" minOccurs="0"
          maxOccurs="unbounded" />
        <xsd:element name="target" minOccurs="0"
          maxOccurs="unbounded" />
      </xsd:sequence>
      <xsd:attribute name="name" type="xsd:string"
        use="required" />
      <xsd:attribute name="maxMemory" type="xsd:unsignedLong"
        use="optional" default="4" />
      <xsd:attribute name="eventRetentionMode"
        type="retentionModes" use="optional" default="allowSingleEventLoss" />
      <xsd:attribute name="dispatchLatency"
        type="xsd:unsignedInt" use="optional" default="30" />
      <xsd:attribute name="maxEventSize"
        type="xsd:unsignedInt" use="optional" default="0" />
      <xsd:attribute name="memoryPartitionMode"
        type="partitionModes" use="optional" default="none" />
      <xsd:attribute name="trackCausality" type="xsd:boolean"
        use="optional" default="false" />
    </xsd:complexType>
  </xsd:element>

  <xsd:simpleType name="retentionModes">
    <xsd:restriction base="xsd:string">
      <xsd:enumeration value="allowSingleEventLoss" />
      <xsd:enumeration value="allowMultipleEventLoss" />
      <xsd:enumeration value="noEventLoss" />
    </xsd:restriction>
  </xsd:simpleType>

  <xsd:simpleType name="partitionModes">
    <xsd:restriction base="xsd:string">
      <xsd:enumeration value="none" />
      <xsd:enumeration value="perNode" />
      <xsd:enumeration value="perCpu" />
    </xsd:restriction>
  </xsd:simpleType>

  <xsd:element name="event">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="action" minOccurs="0"
          maxOccurs="unbounded" />
        <xsd:element ref="parameter" maxOccurs="unbounded"
          minOccurs="0" />
        <xsd:element name="predicate" minOccurs="0"
          maxOccurs="1" type="unary_expr" />
      </xsd:sequence>
      <xsd:attributeGroup ref="objectNames"></xsd:attributeGroup>
    </xsd:complexType>
  </xsd:element>


  <xsd:element name="action">
    <xsd:complexType>
      <xsd:attributeGroup ref="objectNames" />
    </xsd:complexType>
  </xsd:element>

  <xsd:element name="target">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element ref="parameter" maxOccurs="unbounded"
          minOccurs="0" />
      </xsd:sequence>
      <xsd:attributeGroup ref="objectNames"></xsd:attributeGroup>
    </xsd:complexType>
  </xsd:element>
  <xsd:attributeGroup name="objectNames">
    <xsd:attribute name="module" type="xsd:string"
      use="optional"></xsd:attribute>
    <xsd:attribute name="package" type="xsd:string"
      use="required"></xsd:attribute>
    <xsd:attribute name="name" type="xsd:string"
      use="required"></xsd:attribute>
  </xsd:attributeGroup>


  <xsd:element name="parameter">
    <xsd:complexType>
      <xsd:attribute name="name" type="xsd:string"
        use="required" />
      <xsd:attribute name="value" use="required" />
    </xsd:complexType>
  </xsd:element>

  <xsd:complexType name="pred_leaf">
    <xsd:sequence>
      <xsd:element name="comparator">
        <xsd:complexType>
          <xsd:attributeGroup ref="objectNames" />
        </xsd:complexType>
      </xsd:element>
      <xsd:choice>
        <xsd:element name="event">
          <xsd:complexType>
            <xsd:attributeGroup ref="objectNames" />
            <xsd:attribute name="field" type="xsd:string" />
          </xsd:complexType>
        </xsd:element>
        <xsd:element name="global">
          <xsd:complexType>
            <xsd:attributeGroup ref="objectNames" />
          </xsd:complexType>
        </xsd:element>
      </xsd:choice>
      <xsd:element name="value"></xsd:element>
    </xsd:sequence>
  </xsd:complexType>
  <xsd:complexType name="unary_expr">
    <xsd:choice>
      <xsd:element name="not" type="unary_expr"></xsd:element>
      <xsd:element name="and" type="boolean_expr"></xsd:element>
      <xsd:element name="or" type="boolean_expr"></xsd:element>
      <xsd:element name="leaf" type="pred_leaf"></xsd:element>
    </xsd:choice>
  </xsd:complexType>
  <xsd:complexType name="boolean_expr">
    <xsd:sequence>
      <xsd:choice>
        <xsd:element name="and" type="boolean_expr"></xsd:element>
        <xsd:element name="or" type="boolean_expr"></xsd:element>
        <xsd:element name="not" type="unary_expr"></xsd:element>
        <xsd:element name="leaf" type="pred_leaf"></xsd:element>
      </xsd:choice>
      <xsd:choice maxOccurs="1" minOccurs="1">
        <xsd:element name="and" type="boolean_expr"></xsd:element>
        <xsd:element name="or" type="boolean_expr"></xsd:element>
        <xsd:element name="not" type="unary_expr"></xsd:element>
        <xsd:element name="leaf" type="pred_leaf"></xsd:element>
      </xsd:choice>
    </xsd:sequence>
  </xsd:complexType>
  <xsd:complexType name="Database">
    <xsd:all>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for Database object -->
      <xsd:element name="LastUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="State" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Processed" />
            <xsd:enumeration value="PartiallyProcessed" />
            <xsd:enumeration value="Unprocessed" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element ref="eng100:ReadWriteMode" minOccurs="0" />
      <xsd:element ref="eng100_100:DbStorageLocation"
        minOccurs="0" />
      <xsd:element name="AggregationPrefix" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="ProcessingPriority" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="EstimatedSize" type="xsd:long"
        minOccurs="0" />
      <xsd:element name="LastProcessed" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Language" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="Collation" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Visible" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="MasterDataSourceID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DataSourceImpersonationInfo"
        type="eng:ImpersonationInfo" minOccurs="0" />
      <xsd:element name="Accounts" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Account" type="Account"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="DataSources" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="DataSource" type="DataSource"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="DataSourceViews" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="DataSourceView"
              type="DataSourceView" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Dimensions" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Dimension" type="Dimension"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Cubes" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Cube" type="Cube" minOccurs="0"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="MiningStructures" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="MiningStructure"
              type="MiningStructure" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Roles" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Role" type="Role" minOccurs="0"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Assemblies" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Assembly" type="Assembly"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="DatabasePermissions" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="DatabasePermission"
              type="DatabasePermission" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element ref="eng200_200:StorageEngineUsed"
        minOccurs="0" />
      <xsd:element ref="eng200_200:ImagePath" minOccurs="0" />
      <xsd:element ref="eng200_200:ImageUrl" minOccurs="0" />
      <xsd:element ref="eng200_200:ImageUniqueID" minOccurs="0" />
      <xsd:element ref="eng200_200:ImageVersion" minOccurs="0" />
      <xsd:element ref="eng200_200:Token" minOccurs="0" />
      <xsd:element ref="eng200:CompatibilityLevel"
        minOccurs="0" />
      <xsd:element ref="eng300_300:DirectQueryMode"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="MiningStructure">
    <xsd:all>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for MiningStructure object -->
      <xsd:element name="Source" type="Binding" minOccurs="0" />
      <xsd:element name="LastProcessed" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Language" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="Collation" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="ErrorConfiguration"
        type="ErrorConfiguration" minOccurs="0" />
      <xsd:element name="CacheMode" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="KeepTrainingCases" />
            <xsd:enumeration value="ClearAfterProcessing" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element ref="eng100_100:HoldoutMaxPercent"
        minOccurs="0" />
      <xsd:element ref="eng100_100:HoldoutMaxCases"
        minOccurs="0" />
      <xsd:element ref="eng100_100:HoldoutSeed" minOccurs="0" />
      <xsd:element ref="eng100_100:HoldoutActualSize"
        minOccurs="0" />
      <xsd:element name="Columns">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Column"
              type="MiningStructureColumn" minOccurs="1" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="State" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Processed" />
            <xsd:enumeration value="Unprocessed" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="MiningStructurePermissions"
        minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="MiningStructurePermission"
              type="MiningStructurePermission" minOccurs="0"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="MiningModels" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="MiningModel" type="MiningModel"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="MiningStructureColumn"
    abstract="true" />

  <xsd:complexType name="ScalarMiningStructureColumn">
    <xsd:all>
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Type">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Long" />
            <xsd:enumeration value="Boolean" />
            <xsd:enumeration value="Text" />
            <xsd:enumeration value="Double" />
            <xsd:enumeration value="Date" />
            <xsd:enumeration value="Table" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="IsKey" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="Source" type="Binding" minOccurs="0" />
      <xsd:element name="Distribution" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="ModelingFlags" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="ModelingFlag"
              type="MiningModelingFlag" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Content">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <!-- This list is user-extensible -->
            <xsd:enumeration value="Discrete" />
            <xsd:enumeration value="Continuous" />
            <xsd:enumeration value="Discretized" />
            <xsd:enumeration value="Ordered" />
            <xsd:enumeration value="Cyclical" />
            <xsd:enumeration value="Probability" />
            <xsd:enumeration value="Variance" />
            <xsd:enumeration value="StdDev" />
            <xsd:enumeration value="ProbabilityVariance" />
            <xsd:enumeration value="ProbabilityStdDev" />
            <xsd:enumeration value="Support" />
            <xsd:enumeration value="Key" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="ClassifiedColumns" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="ClassifiedColumnID"
              type="xsd:string" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="DiscretizationMethod"
        type="xsd:string" minOccurs="0" />
      <xsd:element name="DiscretizationBucketCount"
        type="xsd:integer" minOccurs="0" />
      <xsd:element name="KeyColumns" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="KeyColumn" type="DataItem"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="NameColumn" type="DataItem"
        minOccurs="0" />
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="TableMiningStructureColumn">
    <xsd:all>
      <xsd:element name="ForeignKeyColumns" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="ForeignKeyColumn" type="DataItem"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="SourceMeasureGroup"
        type="MeasureGroupBinding" minOccurs="0" />
      <xsd:element name="Columns" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Column"
              type="MiningStructureColumn" minOccurs="1" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="MiningModel">
    <xsd:all>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for MiningModel object -->
      <xsd:element name="Algorithm" minOccurs="1">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Microsoft_Naive_Bayes" />
            <xsd:enumeration value="Microsoft_Decision_Trees" />
            <xsd:enumeration value="Microsoft_Clustering" />
            <xsd:enumeration value="Microsoft_Neural_Network" />
            <xsd:enumeration
              value="Microsoft_Logistic_Regression" />
            <xsd:enumeration
              value="Microsoft_Linear_Regression" />
            <xsd:enumeration
              value="Microsoft_Association_Rules" />
            <xsd:enumeration value="Microsoft_Time_Series" />
            <xsd:enumeration
              value="Microsoft_Sequence_Clustering" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="LastProcessed" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="AlgorithmParameters" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="AlgorithmParameter"
              type="AlgorithmParameter" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="AllowDrillThrough" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation"
              type="AttributeTranslation" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Columns">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Column" type="MiningModelColumn"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="State" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Processed" />
            <xsd:enumeration value="Unprocessed" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="FoldingParameters"
        type="FoldingParameters" minOccurs="0" />
      <xsd:element name="Filter" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="MiningModelPermissions" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="MiningModelPermission"
              type="MiningModelPermission" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Language" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Collation" type="xsd:string"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="MiningModelingFlag">
    <xsd:all>
      <xsd:element name="ModelingFlag" type="xsd:string" />
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="MiningModelColumn">
    <xsd:all>
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="SourceColumnID" type="xsd:string" />
      <xsd:element name="Usage" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Key" />
            <xsd:enumeration value="Input" />
            <xsd:enumeration value="Predict" />
            <xsd:enumeration value="PredictOnly" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Filter" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Columns" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Column" type="MiningModelColumn"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="ModelingFlags" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="ModelingFlag"
              type="MiningModelingFlag" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="AlgorithmParameter">
    <xsd:all>
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="Value" type="xsd:anySimpleType" />
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="FoldingParameters">
    <xsd:all>
      <xsd:element name="FoldIndex" type="xsd:integer" />
      <xsd:element name="FoldCount" type="xsd:integer" />
      <xsd:element name="FoldMaxCases" type="xsd:long"
        minOccurs="0" />
      <xsd:element name="FoldTargetAttribute" type="xsd:string"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="Cube">
    <xsd:all>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for Cube object -->
      <xsd:element name="Language" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="Collation" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Dimensions">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Dimension" type="CubeDimension"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="CubePermissions" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="CubePermission" minOccurs="0"
              type="CubePermission" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="MdxScripts" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="MdxScript" type="MdxScript"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Perspectives" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Perspective" type="Perspective"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="State" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Processed" />
            <xsd:enumeration value="PartiallyProcessed" />
            <xsd:enumeration value="Unprocessed" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DefaultMeasure" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Visible" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="MeasureGroups">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="MeasureGroup" type="MeasureGroup"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Source" type="DataSourceViewBinding"
        minOccurs="0" />
      <xsd:element name="AggregationPrefix" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="ProcessingPriority" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="StorageMode" minOccurs="0">
        <xsd:complexType>
          <xsd:simpleContent>
            <xsd:extension base="CubeStorageModeEnumType">
              <xsd:attribute name="valuens">
                <xsd:simpleType>
                  <xsd:restriction base="xsd:string">
                    <xsd:enumeration
                      value="http://schemas.microsoft.com/analysisservices/2010/engine/200/200" />
                  </xsd:restriction>
                </xsd:simpleType>
              </xsd:attribute>
            </xsd:extension>
          </xsd:simpleContent>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="ProcessingMode" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Regular" />
            <xsd:enumeration value="LazyAggregations" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="ScriptCacheProcessingMode"
        minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Regular" />
            <xsd:enumeration value="Lazy" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="ScriptErrorHandlingMode" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="IgnoreNone" />
            <xsd:enumeration value="IgnoreAll" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element ref="eng800:DaxOptimizationMode"
        minOccurs="0" />
      <xsd:element name="ProactiveCaching"
        type="ProactiveCaching" minOccurs="0" />
      <xsd:element name="Kpis" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Kpi" type="Kpi" minOccurs="0"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="ErrorConfiguration"
        type="ErrorConfiguration" minOccurs="0" />
      <xsd:element name="Actions" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Action" minOccurs="0" type="Action"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="StorageLocation" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="EstimatedRows" type="xsd:long"
        minOccurs="0" />
      <xsd:element name="LastProcessed" type="xsd:dateTime"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>
  <xsd:simpleType name="CubeStorageModeEnumType">
    <xsd:restriction base="xsd:string">
      <xsd:enumeration value="Molap" />
      <xsd:enumeration value="Rolap" />
      <xsd:enumeration value="Holap" />
      <xsd:enumeration value="InMemory" />
    </xsd:restriction>
  </xsd:simpleType>

  <xsd:element name="Execute">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="Command" type="Command" />
        <xsd:element name="Properties" minOccurs="1"
          maxOccurs="1">
          <xsd:complexType>
            <xsd:sequence>
              <xsd:element name="PropertyList" minOccurs="0"
                maxOccurs="1" type="PropertyList" />
            </xsd:sequence>
          </xsd:complexType>
        </xsd:element>
        <xsd:element name="Parameters" minOccurs="0">
          <xsd:complexType>
            <xsd:sequence>
              <xsd:element name="Parameter" type="ExecuteParameter"
                minOccurs="0" maxOccurs="unbounded" />
            </xsd:sequence>
          </xsd:complexType>
        </xsd:element>
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>

  <xsd:element name="Discover">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="RequestType" minOccurs="1"
          maxOccurs="1">
          <xsd:simpleType>
            <xsd:restriction base="xsd:string">
              <xsd:enumeration value="DBSCHEMA_CATALOGS" />
              <xsd:enumeration value="MDSCHEMA_CUBES" />
              <xsd:enumeration value="MDSCHEMA_DIMENSIONS" />
              <xsd:enumeration value="MDSCHEMA_HIERARCHIES" />
              <xsd:enumeration value="MDSCHEMA_LEVELS" />
              <xsd:enumeration value="MDSCHEMA_MEASURES" />
              <xsd:enumeration value="MDSCHEMA_PROPERTIES" />
              <xsd:enumeration value="MDSCHEMA_MEMBERS" />
              <xsd:enumeration value="MDSCHEMA_ACTIONS" />
              <xsd:enumeration value="MDSCHEMA_SETS" />
              <xsd:enumeration value="DISCOVER_INSTANCES" />
              <xsd:enumeration value="MDSCHEMA_KPIS" />
              <xsd:enumeration value="MDSCHEMA_MEASUREGROUPS" />
              <xsd:enumeration
                value="MDSCHEMA_MEASUREGROUP_DIMENSIONS" />
              <xsd:enumeration value="DISCOVER_PROPERTIES" />
              <xsd:enumeration value="DISCOVER_LITERALS" />
              <xsd:enumeration value="DISCOVER_SCHEMA_ROWSETS" />
              <xsd:enumeration value="DISCOVER_KEYWORDS" />
              <xsd:enumeration value="DBSCHEMA_TABLES" />
              <xsd:enumeration value="DBSCHEMA_COLUMNS" />
              <xsd:enumeration value="DBSCHEMA_PROVIDER_TYPES" />
              <xsd:enumeration
                value="MDSCHEMA_INPUT_DATASOURCES" />
              <xsd:enumeration value="DMSCHEMA_MINING_SERVICES" />
              <xsd:enumeration
                value="DMSCHEMA_MINING_SERVICE_PARAMETERS" />
              <xsd:enumeration
                value="DMSCHEMA_MINING_FUNCTIONS" />
              <xsd:enumeration
                value="DMSCHEMA_MINING_MODEL_CONTENT" />
              <xsd:enumeration
                value="DMSCHEMA_MINING_MODEL_XML" />
              <xsd:enumeration
                value="DMSCHEMA_MINING_MODEL_CONTENT_PMML" />
              <xsd:enumeration value="DMSCHEMA_MINING_MODELS" />
              <xsd:enumeration value="DMSCHEMA_MINING_COLUMNS" />
              <xsd:enumeration
                value="DMSCHEMA_MINING_STRUCTURES" />
              <xsd:enumeration
                value="DMSCHEMA_MINING_STRUCTURE_COLUMNS" />
              <xsd:enumeration value="DISCOVER_DATASOURCES" />
              <xsd:enumeration value="DISCOVER_ENUMERATORS" />
              <xsd:enumeration value="DISCOVER_XML_METADATA" />
              <xsd:enumeration value="DISCOVER_TRACES" />
              <xsd:enumeration
                value="DISCOVER_TRACE_DEFINITION_PROVIDERINFO" />
              <xsd:enumeration value="DISCOVER_TRACE_COLUMNS" />
              <xsd:enumeration
                value="DISCOVER_TRACE_EVENT_CATEGORIES" />
              <xsd:enumeration value="DISCOVER_MEMORYUSAGE" />
              <xsd:enumeration value="DISCOVER_MEMORYGRANT" />
              <xsd:enumeration value="DISCOVER_LOCKS" />
              <xsd:enumeration value="DISCOVER_CONNECTIONS" />
              <xsd:enumeration value="DISCOVER_SESSIONS" />
              <xsd:enumeration value="DISCOVER_JOBS" />
              <xsd:enumeration value="DISCOVER_TRANSACTIONS" />
              <xsd:enumeration value="DISCOVER_DB_CONNECTIONS" />
              <xsd:enumeration value="DISCOVER_MASTER_KEY" />
              <xsd:enumeration
                value="DISCOVER_PERFORMANCE_COUNTERS" />
              <xsd:enumeration value="DISCOVER_LOCATIONS" />
              <xsd:enumeration
                value="DISCOVER_PARTITION_DIMENSION_STAT" />
              <xsd:enumeration value="DISCOVER_PARTITION_STAT" />
              <xsd:enumeration value="DISCOVER_DIMENSION_STAT" />
              <xsd:enumeration value="DISCOVER_COMMANDS" />
              <xsd:enumeration value="DISCOVER_COMMAND_OBJECTS" />
              <xsd:enumeration value="DISCOVER_OBJECT_ACTIVITY" />
              <xsd:enumeration
                value="DISCOVER_OBJECT_MEMORY_USAGE" />
              <xsd:enumeration value="DISCOVER_STORAGE_TABLES" />
              <xsd:enumeration
                value="DISCOVER_STORAGE_TABLE_COLUMNS" />
              <xsd:enumeration
                value="DISCOVER_STORAGE_TABLE_COLUMN_SEGMENTS" />
              <xsd:enumeration value="DISCOVER_CSDL_METADATA" />
              <xsd:enumeration value="DISCOVER_CALC_DEPENDENCY" />
              <xsd:enumeration value="MDSCHEMA_FUNCTIONS" />
              <xsd:enumeration value="DISCOVER_RING_BUFFERS" />
              <xsd:enumeration
                value="DISCOVER_XEVENT_TRACE_DEFINITION" />
              <xsd:enumeration value="DISCOVER_XEVENT_PACKAGES" />
              <xsd:enumeration value="DISCOVER_XEVENT_OBJECTS" />
              <xsd:enumeration
                value="DISCOVER_XEVENT_OBJECT_COLUMNS" />
              <xsd:enumeration value="DISCOVER_XEVENT_SESSIONS" />
              <xsd:enumeration
                value="DISCOVER_XEVENT_SESSION_TARGETS" />
              <xsd:enumeration value="DISCOVER_MEM_STATS" />
              <xsd:enumeration value="DISCOVER_DB_MEM_STATS" />
              <xsd:enumeration value="DISCOVER_OBJECT_COUNTERS" />
            </xsd:restriction>
          </xsd:simpleType>
        </xsd:element>
        <xsd:element name="Restrictions" minOccurs="1"
          maxOccurs="1">
          <xsd:complexType>
            <xsd:sequence>
              <xsd:element name="RestrictionList" minOccurs="0"
                maxOccurs="1" nillable="true">
                <xsd:complexType>
                  <xsd:sequence>
                    <xsd:any minOccurs="0" maxOccurs="unbounded" />
                  </xsd:sequence>
                </xsd:complexType>
              </xsd:element>
            </xsd:sequence>
          </xsd:complexType>
        </xsd:element>
        <xsd:element name="Properties" type="Properties" />
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>

  <xsd:complexType name="CubeDimension">
    <xsd:all>
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="Name" type="xsd:string" minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="DimensionID" type="xsd:string" />
      <xsd:element name="Visible" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="AllMemberAggregationUsage"
        minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Full" />
            <xsd:enumeration value="None" />
            <xsd:enumeration value="Unrestricted" />
            <xsd:enumeration value="Default" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="HierarchyUniqueNameStyle"
        minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="IncludeDimensionName" />
            <xsd:enumeration value="ExcludeDimensionName" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="MemberUniqueNameStyle" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Native" />
            <xsd:enumeration value="NamePath" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Attributes" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Attribute" type="CubeAttribute"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Hierarchies" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Hierarchy" type="CubeHierarchy"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="CubeAttribute">
    <xsd:all>
      <xsd:element name="AttributeID" type="xsd:string" />
      <xsd:element name="AggregationUsage" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Full" />
            <xsd:enumeration value="None" />
            <xsd:enumeration value="Unrestricted" />
            <xsd:enumeration value="Default" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="AttributeHierarchyOptimizedState"
        minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="FullyOptimized" />
            <xsd:enumeration value="NotOptimized" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="AttributeHierarchyEnabled"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="AttributeHierarchyVisible"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="CubeHierarchy">
    <xsd:all>
      <xsd:element name="HierarchyID" type="xsd:string" />
      <xsd:element name="OptimizedState" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="FullyOptimized" />
            <xsd:enumeration value="NotOptimized" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Visible" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="Enabled" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Kpi">
    <xsd:all>
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="DisplayFolder" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="AssociatedMeasureGroupID"
        type="xsd:string" minOccurs="0" />
      <xsd:element name="Value" type="xsd:string" />
      <xsd:element name="Goal" type="xsd:string" minOccurs="0" />
      <xsd:element name="Status" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Trend" type="xsd:string" minOccurs="0" />
      <xsd:element name="Weight" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="TrendGraphic" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="StatusGraphic" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="CurrentTimeMember" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="ParentKpiID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Action" abstract="true" />


  <xsd:complexType name="StandardAction">
    <xsd:complexContent>
      <xsd:extension base="Action">
        <xsd:all>
          <!--These elements are inherited from Action -->
          <xsd:element name="Name" type="xsd:string" />
          <xsd:element name="ID" type="xsd:string" minOccurs="0" />
          <xsd:element name="Caption" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="CaptionIsMdx" type="xsd:boolean"
            minOccurs="0" />
          <xsd:element name="Translations" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="Translation" type="Translation"
                  minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="TargetType">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="Cube" />
                <xsd:enumeration value="Cells" />
                <xsd:enumeration value="Set" />
                <xsd:enumeration value="Hierarchy" />
                <xsd:enumeration value="Level" />
                <xsd:enumeration value="DimensionMembers" />
                <xsd:enumeration value="HierarchyMembers" />
                <xsd:enumeration value="LevelMembers" />
                <xsd:enumeration value="AttributeMembers" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="Target" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="Condition" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="Type">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="Url" />
                <xsd:enumeration value="Html" />
                <xsd:enumeration value="Statement" />
                <xsd:enumeration value="DrillThrough" />
                <xsd:enumeration value="Dataset" />
                <xsd:enumeration value="Rowset" />
                <xsd:enumeration value="CommandLine" />
                <xsd:enumeration value="Proprietary" />
                <xsd:enumeration value="Report" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="Invocation" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="Interactive" />
                <xsd:enumeration value="OnOpen" />
                <xsd:enumeration value="Batch" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="Application" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="Description" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="Annotations" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="Annotation" type="Annotation"
                  minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <!--Extended elements for StandardAction object -->
          <xsd:element name="Expression" type="xsd:string" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>


  <xsd:complexType name="ReportAction">
    <xsd:complexContent>
      <xsd:extension base="Action">
        <xsd:all>
          <!--These elements are inherited from Action -->
          <xsd:element name="Name" type="xsd:string" />
          <xsd:element name="ID" type="xsd:string" minOccurs="0" />
          <xsd:element name="Caption" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="CaptionIsMdx" type="xsd:boolean"
            minOccurs="0" />
          <xsd:element name="Translations" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="Translation" type="Translation"
                  minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="TargetType">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="Cube" />
                <xsd:enumeration value="Cells" />
                <xsd:enumeration value="Set" />
                <xsd:enumeration value="Hierarchy" />
                <xsd:enumeration value="Level" />
                <xsd:enumeration value="DimensionMembers" />
                <xsd:enumeration value="HierarchyMembers" />
                <xsd:enumeration value="LevelMembers" />
                <xsd:enumeration value="AttributeMembers" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="Target" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="Condition" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="Type">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="Url" />
                <xsd:enumeration value="Html" />
                <xsd:enumeration value="Statement" />
                <xsd:enumeration value="Drillthrough" />
                <xsd:enumeration value="Dataset" />
                <xsd:enumeration value="Rowset" />
                <xsd:enumeration value="CommandLine" />
                <xsd:enumeration value="Proprietary" />
                <xsd:enumeration value="Report" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="Invocation" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="Interactive" />
                <xsd:enumeration value="OnOpen" />
                <xsd:enumeration value="Batch" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="Application" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="Description" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="Annotations" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="Annotation" type="Annotation"
                  minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <!--Extended elements for ReportAction object -->
          <xsd:element name="ReportServer" type="xsd:string" />
          <xsd:element name="Path" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="ReportParameters" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="ReportParameter"
                  type="ReportParameter" minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="ReportFormatParameters"
            minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="ReportFormatParameter"
                  type="ReportFormatParameter" minOccurs="0"
                  maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>


  <xsd:complexType name="ReportParameter">
    <xsd:all>
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="Value" type="xsd:string" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="ReportFormatParameter">
    <xsd:all>
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="Value" type="xsd:string" />
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="DrillThroughAction">
    <xsd:complexContent>
      <xsd:extension base="Action">
        <xsd:all>
          <!--These elements are inherited from Action -->
          <xsd:element name="Name" type="xsd:string" />
          <xsd:element name="ID" type="xsd:string" minOccurs="0" />
          <xsd:element name="Caption" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="CaptionIsMdx" type="xsd:boolean"
            minOccurs="0" />
          <xsd:element name="Translations" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="Translation" type="Translation"
                  minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="TargetType">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="Cube" />
                <xsd:enumeration value="Cells" />
                <xsd:enumeration value="Set" />
                <xsd:enumeration value="Hierarchy" />
                <xsd:enumeration value="Level" />
                <xsd:enumeration value="DimensionMembers" />
                <xsd:enumeration value="HierarchyMembers" />
                <xsd:enumeration value="LevelMembers" />
                <xsd:enumeration value="AttributeMembers" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="Target" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="Condition" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="Type">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="Url" />
                <xsd:enumeration value="Html" />
                <xsd:enumeration value="Statement" />
                <xsd:enumeration value="DrillThrough" />
                <xsd:enumeration value="Dataset" />
                <xsd:enumeration value="Rowset" />
                <xsd:enumeration value="CommandLine" />
                <xsd:enumeration value="Proprietary" />
                <xsd:enumeration value="Report" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="Invocation" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="Interactive" />
                <xsd:enumeration value="OnOpen" />
                <xsd:enumeration value="Batch" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="Application" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="Description" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="Annotations" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="Annotation" type="Annotation"
                  minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <!--Extended elements for DrillThroughAction object -->
          <xsd:element name="Default" type="xsd:boolean"
            minOccurs="0" />
          <xsd:element name="Columns" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="Column" type="Binding"
                  minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="MaximumRows" type="xsd:integer"
            minOccurs="0" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>


  <xsd:complexType name="MdxScript">
    <xsd:all>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for MdxScript object -->
      <xsd:element name="Commands" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Command" type="Command"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="DefaultScript" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="CalculationProperties" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="CalculationProperty"
              type="CalculationProperty" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>
  <xsd:complexType name="CalculationProperty">
    <xsd:all>
      <xsd:element name="CalculationReference"
        type="xsd:string" />
      <xsd:element name="CalculationType">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Member" />
            <xsd:enumeration value="Set" />
            <xsd:enumeration value="Cells" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Visible" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="SolveOrder" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="FormatString" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="ForeColor" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="BackColor" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="FontName" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="FontSize" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="FontFlags" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="NonEmptyBehavior" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="AssociatedMeasureGroupID"
        type="xsd:string" minOccurs="0" />
      <xsd:element name="DisplayFolder" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Language" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="VisualizationProperties"
        type="eng300:CalculationPropertiesVisualizationProperties"
        minOccurs="0" maxOccurs="1" />
    </xsd:all>
  </xsd:complexType>
  <xsd:complexType name="Perspective">
    <xsd:all>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for Perspective object -->
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="DefaultMeasure" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Dimensions" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Dimension"
              type="PerspectiveDimension" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="MeasureGroups" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="MeasureGroup"
              type="PerspectiveMeasureGroup" minOccurs="0"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Calculations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Calculation"
              type="PerspectiveCalculation" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Kpis" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Kpi" type="PerspectiveKpi"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Actions" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Action" type="PerspectiveAction"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="PerspectiveDimension">
    <xsd:all>
      <xsd:element name="CubeDimensionID" type="xsd:string" />
      <xsd:element name="Attributes" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Attribute"
              type="PerspectiveAttribute" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Hierarchies" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Hierarchy"
              type="PerspectiveHierarchy" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="PerspectiveAttribute">
    <xsd:all>
      <xsd:element name="AttributeID" type="xsd:string" />
      <xsd:element name="AttributeHierarchyVisible"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="DefaultMember" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="PerspectiveHierarchy">
    <xsd:all>
      <xsd:element name="HierarchyID" type="xsd:string" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="PerspectiveMeasureGroup">
    <xsd:all>
      <xsd:element name="MeasureGroupID" type="xsd:string" />
      <xsd:element name="Measures" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Measure" type="PerspectiveMeasure"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="PerspectiveMeasure">
    <xsd:all>
      <xsd:element name="MeasureID" type="xsd:string" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="PerspectiveCalculation">
    <xsd:all>
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="Type">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Member" />
            <xsd:enumeration value="Set" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="PerspectiveKpi">
    <xsd:all>
      <xsd:element name="KpiID" type="xsd:string" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="PerspectiveAction">
    <xsd:all>
      <xsd:element name="ActionID" type="xsd:string" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="MeasureGroup">
    <xsd:all>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for MeasureGroup object -->
      <xsd:element name="LastProcessed" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Type" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Regular" />
            <xsd:enumeration value="ExchangeRate" />
            <xsd:enumeration value="Sales" />
            <xsd:enumeration value="Budget" />
            <xsd:enumeration value="FinancialReporting" />
            <xsd:enumeration value="Marketing" />
            <xsd:enumeration value="Inventory" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="State" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Processed" />
            <xsd:enumeration value="PartiallyProcessed" />
            <xsd:enumeration value="Unprocessed" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Measures">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Measure" type="Measure"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="DataAggregation" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="None" />
            <xsd:enumeration value="DataAggregatable" />
            <xsd:enumeration value="CacheAggregatable" />
            <xsd:enumeration value="DataAndCacheAggregatable" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Source" type="MeasureGroupBinding"
        minOccurs="0" />
      <xsd:element name="StorageMode" minOccurs="0">
        <xsd:complexType>
          <xsd:simpleContent>
            <xsd:extension
              base="MeasureGroupStorageModeEnumType">
              <xsd:attribute name="valuens">
                <xsd:simpleType>
                  <xsd:restriction base="xsd:string">
                    <xsd:enumeration
                      value="http://schemas.microsoft.com/analysisservices/2010/engine/200/200" />
                  </xsd:restriction>
                </xsd:simpleType>
              </xsd:attribute>
            </xsd:extension>
          </xsd:simpleContent>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="StorageLocation" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="IgnoreUnrelatedDimensions"
        type="xsd:boolean" minOccurs="0" />
      <xsd:element name="ProactiveCaching"
        type="ProactiveCaching" minOccurs="0" />
      <xsd:element name="EstimatedRows" type="xsd:long"
        minOccurs="0" />
      <xsd:element name="ErrorConfiguration"
        type="ErrorConfiguration" minOccurs="0" />
      <xsd:element name="EstimatedSize" type="xsd:long"
        minOccurs="0" />
      <xsd:element name="ProcessingMode" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Regular" />
            <xsd:enumeration value="LazyAggregations" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Dimensions">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Dimension"
              type="MeasureGroupDimension" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Partitions" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Partition" type="Partition"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="AggregationPrefix" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="ProcessingPriority" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="AggregationDesigns" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="AggregationDesign"
              type="AggregationDesign" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>
  <xsd:simpleType name="MeasureGroupStorageModeEnumType">
    <xsd:restriction base="xsd:string">
      <xsd:enumeration value="Molap" />
      <xsd:enumeration value="Rolap" />
      <xsd:enumeration value="Holap" />
      <xsd:enumeration value="InMemory" />
    </xsd:restriction>
  </xsd:simpleType>

  <xsd:complexType name="MeasureGroupDimension"
    abstract="true" />
  <xsd:complexType name="ManyToManyMeasureGroupDimension">
    <xsd:complexContent>
      <xsd:extension base="MeasureGroupDimension">
        <xsd:all>
          <!--These elements are inherited from MeasureGroupDimension -->
          <xsd:element name="CubeDimensionID" type="xsd:string" />
          <xsd:element name="Annotations" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="Annotation" type="Annotation"
                  minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="Source"
            type="MeasureGroupDimensionBinding" minOccurs="0" />
          <!--Extended elements for ManyToManyMeasureGroupDimension object -->
          <xsd:element name="MeasureGroupID" type="xsd:string"
            minOccurs="0" />
          <xsd:element name="DirectSlice" type="xsd:string"
            minOccurs="0" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="RegularMeasureGroupDimension">
    <xsd:complexContent>
      <xsd:extension base="MeasureGroupDimension">
        <xsd:all>
          <!--These elements are inherited from MeasureGroupDimension -->
          <xsd:element name="CubeDimensionID" type="xsd:string" />
          <xsd:element name="Annotations" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="Annotation" type="Annotation"
                  minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="Source"
            type="MeasureGroupDimensionBinding" minOccurs="0" />
          <!--Extended elements for RegularMeasureGroupDimension object -->
          <xsd:element name="Cardinality" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="Many" />
                <xsd:enumeration value="One" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element name="Attributes">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="Attribute"
                  type="MeasureGroupAttribute" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="ReferenceMeasureGroupDimension">
    <xsd:complexContent>
      <xsd:extension base="MeasureGroupDimension">
        <xsd:all>
          <!--These elements are inherited from MeasureGroupDimension -->
          <xsd:element name="CubeDimensionID" type="xsd:string" />
          <xsd:element name="Annotations" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="Annotation" type="Annotation"
                  minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="Source"
            type="MeasureGroupDimensionBinding" minOccurs="0" />
          <!--Extended elements for ReferenceMeasureGroupDimension object -->
          <xsd:element name="IntermediateCubeDimensionID"
            type="xsd:string" minOccurs="1" />
          <xsd:element name="IntermediateGranularityAttributeID"
            type="xsd:string" minOccurs="1" />
          <xsd:element name="Materialization" minOccurs="0">
            <xsd:simpleType>
              <xsd:restriction base="xsd:string">
                <xsd:enumeration value="Regular" />
                <xsd:enumeration value="Indirect" />
              </xsd:restriction>
            </xsd:simpleType>
          </xsd:element>
          <xsd:element ref="eng200_200:ProcessingState"
            minOccurs="0" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>


  <xsd:complexType name="DegenerateMeasureGroupDimension">
    <xsd:complexContent>
      <xsd:extension base="MeasureGroupDimension">
        <xsd:all>
          <!--These elements are inherited from MeasureGroupDimension -->
          <xsd:element name="CubeDimensionID" type="xsd:string" />
          <xsd:element name="Annotations" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="Annotation" type="Annotation"
                  minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="Source"
            type="MeasureGroupDimensionBinding" minOccurs="0" />
          <!--Extended elements for DegenerateMeasureGroupDimension object -->
          <xsd:element ref="eng200_200:ShareDimensionStorage"
            minOccurs="0" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:element name="ShareDimensionStorage">
    <xsd:simpleType>
      <xsd:restriction base="xsd:string">
        <xsd:enumeration value="Distinct" />
        <xsd:enumeration value="Shared" />
      </xsd:restriction>
    </xsd:simpleType>
  </xsd:element>

  <xsd:complexType name="DataMiningMeasureGroupDimension">
    <xsd:complexContent>
      <xsd:extension base="MeasureGroupDimension">
        <xsd:all>
          <!--These elements are inherited from MeasureGroupDimension -->
          <xsd:element name="CubeDimensionID" type="xsd:string" />
          <xsd:element name="Annotations" minOccurs="0">
            <xsd:complexType>
              <xsd:sequence>
                <xsd:element name="Annotation" type="Annotation"
                  minOccurs="0" maxOccurs="unbounded" />
              </xsd:sequence>
            </xsd:complexType>
          </xsd:element>
          <xsd:element name="Source"
            type="MeasureGroupDimensionBinding" minOccurs="0" />
          <!--Extended elements for DataMiningMeasureGroupDimension object -->
          <xsd:element name="CaseCubeDimensionID"
            type="xsd:string" />
        </xsd:all>
      </xsd:extension>
    </xsd:complexContent>
  </xsd:complexType>

  <xsd:complexType name="MeasureGroupAttribute">
    <xsd:all>
      <xsd:element name="AttributeID" type="xsd:string" />
      <xsd:element name="KeyColumns" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="KeyColumn" type="DataItem"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Type" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Regular" />
            <xsd:enumeration value="Granularity" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:complexType name="Measure">
    <xsd:all>
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="AggregateFunction" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Sum" />
            <xsd:enumeration value="Count" />
            <xsd:enumeration value="Min" />
            <xsd:enumeration value="Max" />
            <xsd:enumeration value="DistinctCount" />
            <xsd:enumeration value="None" />
            <xsd:enumeration value="ByAccount" />
            <xsd:enumeration value="AverageOfChildren" />
            <xsd:enumeration value="FirstChild" />
            <xsd:enumeration value="LastChild" />
            <xsd:enumeration value="FirstNonEmpty" />
            <xsd:enumeration value="LastNonEmpty" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="DataType" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="WChar" />
            <xsd:enumeration value="Integer" />
            <xsd:enumeration value="BigInt" />
            <xsd:enumeration value="Single" />
            <xsd:enumeration value="Double" />
            <xsd:enumeration value="Date" />
            <xsd:enumeration value="Currency" />
            <xsd:enumeration value="UnsignedTinyInt" />
            <xsd:enumeration value="UnsignedSmallInt" />
            <xsd:enumeration value="UnsignedInt" />
            <xsd:enumeration value="UnsignedBigInt" />
            <xsd:enumeration value="Bool" />
            <xsd:enumeration value="Smallint" />
            <xsd:enumeration value="Tinyint" />
            <xsd:enumeration value="Variant" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Source" type="DataItem" />
      <xsd:element name="Visible" type="xsd:boolean"
        minOccurs="0" />
      <xsd:element name="MeasureExpression" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="DisplayFolder" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="FormatString" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="BackColor" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="ForeColor" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="FontName" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="FontSize" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="FontFlags" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Translations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Translation" type="Translation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>
  <xsd:complexType name="AggregationDesign">
    <xsd:all>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for AggregationDesign object -->
      <xsd:element name="EstimatedRows" type="xsd:long"
        minOccurs="0" />
      <xsd:element name="Dimensions" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Dimension"
              type="AggregationDesignDimension" minOccurs="0"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Aggregations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Aggregation" type="Aggregation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="EstimatedPerformanceGain"
        type="xsd:integer" minOccurs="0" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="AggregationDesignDimension">
    <xsd:all>
      <xsd:element name="CubeDimensionID" type="xsd:string" />
      <xsd:element name="Attributes" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Attribute"
              type="AggregationDesignAttribute" minOccurs="0"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="AggregationDesignAttribute">
    <xsd:all>
      <xsd:element name="AttributeID" type="xsd:string" />
      <xsd:element name="EstimatedCount" type="xsd:long"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Aggregation">
    <xsd:all>
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="Dimensions" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Dimension"
              type="AggregationDimension" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="AggregationDimension">
    <xsd:all>
      <xsd:element name="CubeDimensionID" type="xsd:string" />
      <xsd:element name="Attributes" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Attribute"
              type="AggregationAttribute" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="AggregationAttribute">
    <xsd:all>
      <xsd:element name="AttributeID" type="xsd:string" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Partition">
    <xsd:all>
      <!--These elements are common to each MajorObject -->
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="CreatedTimestamp" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="LastSchemaUpdate" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <!--Extended elements for Partition object -->
      <xsd:element name="Source" type="TabularBinding"
        minOccurs="0" />
      <xsd:element name="ProcessingPriority" type="xsd:integer"
        minOccurs="0" />
      <xsd:element name="AggregationPrefix" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="StorageMode" minOccurs="0">
        <xsd:complexType>
          <xsd:simpleContent>
            <xsd:extension base="PartitionStorageModeEnumType">
              <xsd:attribute name="valuens">
                <xsd:simpleType>
                  <xsd:restriction base="xsd:string">
                    <xsd:enumeration
                      value="http://schemas.microsoft.com/analysisservices/2010/engine/200/200" />
                  </xsd:restriction>
                </xsd:simpleType>
              </xsd:attribute>
            </xsd:extension>
          </xsd:simpleContent>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="ProcessingMode" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Regular" />
            <xsd:enumeration value="LazyAggregations" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="ErrorConfiguration"
        type="ErrorConfiguration" minOccurs="0" />
      <xsd:element name="StorageLocation" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="RemoteDatasourceID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="Slice" type="xsd:string" minOccurs="0" />
      <xsd:element name="ProactiveCaching"
        type="ProactiveCaching" minOccurs="0" />
      <xsd:element name="Type" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Data" />
            <xsd:enumeration value="Writeback" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="EstimatedSize" type="xsd:long"
        minOccurs="0" />
      <xsd:element name="EstimatedRows" type="xsd:long"
        minOccurs="0" />
      <xsd:element name="CurrentStorageMode" minOccurs="0">
        <xsd:complexType>
          <xsd:simpleContent>
            <xsd:extension
              base="PartitionCurrentStorageModeEnumType">
              <xsd:attribute name="valuens">
                <xsd:simpleType>
                  <xsd:restriction base="xsd:string">
                    <xsd:enumeration
                      value="http://schemas.microsoft.com/analysisservices/2010/engine/200/200" />
                  </xsd:restriction>
                </xsd:simpleType>
              </xsd:attribute>
            </xsd:extension>
          </xsd:simpleContent>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="AggregationDesignID" type="xsd:string"
        minOccurs="0" />
      <xsd:element name="AggregationInstances" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="AggregationInstance"
              type="AggregationInstance" minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="AggregationInstanceSource"
        type="DataSourceViewBinding" minOccurs="0" />
      <xsd:element name="LastProcessed" type="xsd:dateTime"
        minOccurs="0" />
      <xsd:element name="State" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Processed" />
            <xsd:enumeration value="Unprocessed" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element ref="eng300:StringStoresCompatibilityLevel"
        minOccurs="0" />
      <xsd:element
        ref="eng300:CurrentStringStoresCompatibilityLevel" minOccurs="0" />
      <xsd:element ref="eng300_300:DirectQueryUsage"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>
  <xsd:simpleType name="PartitionStorageModeEnumType">
    <xsd:restriction base="xsd:string">
      <xsd:enumeration value="Molap" />
      <xsd:enumeration value="Rolap" />
      <xsd:enumeration value="Holap" />
      <xsd:enumeration value="InMemory" />
    </xsd:restriction>
  </xsd:simpleType>
  <xsd:simpleType
    name="PartitionCurrentStorageModeEnumType">
    <xsd:restriction base="xsd:string">
      <xsd:enumeration value="Molap" />
      <xsd:enumeration value="Rolap" />
      <xsd:enumeration value="Holap" />
      <xsd:enumeration value="InMemory" />
    </xsd:restriction>
  </xsd:simpleType>

  <xsd:complexType name="AggregationInstance">
    <xsd:all>
      <xsd:element name="ID" type="xsd:string" minOccurs="0" />
      <xsd:element name="Name" type="xsd:string" />
      <xsd:element name="AggregationType">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="IndexedView" />
            <xsd:enumeration value="Table" />
            <xsd:enumeration value="UserDefined" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Source" type="TabularBinding"
        minOccurs="0" />
      <xsd:element name="Dimensions" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Dimension"
              type="AggregationInstanceDimension" minOccurs="0"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Measures" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Measure"
              type="AggregationInstanceMeasure" minOccurs="0"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Description" type="xsd:string"
        minOccurs="0" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="AggregationInstanceDimension">
    <xsd:all>
      <xsd:element name="CubeDimensionID" type="xsd:string" />
      <xsd:element name="Attributes" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Attribute"
              type="AggregationInstanceAttribute" minOccurs="0"
              maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="AggregationInstanceAttribute">
    <xsd:all>
      <xsd:element name="AttributeID" type="xsd:string" />
      <xsd:element name="KeyColumns">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="KeyColumn" type="DataItem"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="AggregationInstanceMeasure">
    <xsd:all>
      <xsd:element name="MeasureID" type="xsd:string" />
      <xsd:element name="Source" type="ColumnBinding" />
    </xsd:all>
  </xsd:complexType>

  <xsd:complexType name="Account">
    <xsd:all>
      <xsd:element name="AccountType" type="xsd:string" />
      <xsd:element name="AggregationFunction" minOccurs="0">
        <xsd:simpleType>
          <xsd:restriction base="xsd:string">
            <xsd:enumeration value="Sum" />
            <xsd:enumeration value="Count" />
            <xsd:enumeration value="Min" />
            <xsd:enumeration value="Max" />
            <xsd:enumeration value="DistinctCount" />
            <xsd:enumeration value="None" />
            <xsd:enumeration value="AverageOfChildren" />
            <xsd:enumeration value="FirstChild" />
            <xsd:enumeration value="LastChild" />
            <xsd:enumeration value="FirstNonEmpty" />
            <xsd:enumeration value="LastNonEmpty" />
          </xsd:restriction>
        </xsd:simpleType>
      </xsd:element>
      <xsd:element name="Aliases" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Alias" type="xsd:string"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
      <xsd:element name="Annotations" minOccurs="0">
        <xsd:complexType>
          <xsd:sequence>
            <xsd:element name="Annotation" type="Annotation"
              minOccurs="0" maxOccurs="unbounded" />
          </xsd:sequence>
        </xsd:complexType>
      </xsd:element>
    </xsd:all>
  </xsd:complexType>


  <xsd:element name="BeginSession">
    <xsd:complexType>
      <xsd:attribute form="unqualified" name="mustUnderstand"
        type="xsd:int" />
    </xsd:complexType>
  </xsd:element>
  <xsd:element name="EndSession">
    <xsd:complexType>
      <xsd:attribute form="unqualified" name="SessionId"
        type="xsd:string" />
      <xsd:attribute form="unqualified" name="mustUnderstand"
        type="xsd:int" />
    </xsd:complexType>
  </xsd:element>

  <xsd:element name="Session">
    <xsd:complexType>
      <xsd:attribute form="unqualified" name="SessionId"
        type="xsd:string" />
      <xsd:attribute form="unqualified" name="mustUnderstand"
        type="xsd:int" />
    </xsd:complexType>
  </xsd:element>

  <xsd:element name="DiscoverResponse">
    <xsd:complexType>
      <xsd:sequence>
        <xsd:element name="return" minOccurs="0" maxOccurs="1">
          <xsd:complexType>
            <xsd:sequence>
              <xsd:element ref="ana-rs:root" minOccurs="0"
                maxOccurs="1">
              </xsd:element>
            </xsd:sequence>
          </xsd:complexType>
        </xsd:element>
      </xsd:sequence>
    </xsd:complexType>
  </xsd:element>

</xsd:schema>
`, Le = {
  "xmla.wsdl": pe,
  "eng.xsd": ye,
  "eng2_2.xsd": ge,
  "eng2.xsd": Te,
  "eng100_100.xsd": Oe,
  "eng100.xsd": he,
  "eng200_200.xsd": be,
  "eng200.xsd": ve,
  "eng300_300.xsd": fe,
  "eng300.xsd": Ce,
  "eng400.xsd": Ee,
  "eng600.xsd": _e,
  "eng800.xsd": Ae,
  "ext.xsd": Se,
  "msxmla.xsd": De,
  "xmla-ds.xsd": Me,
  "xmla-e.xsd": Ie,
  "xmla-m.xsd": Re,
  "xmla-x.xsd": Pe,
  "xmla-rs.xsd": Ne,
  "xmla.xsd": qe
  // 'xmla.xsd': require('./xmla.xsd'),
  // 'xmla-x.xsd': require('./xmla-x.xsd'),
  // 'xmla-rs.xsd': require('./xmla-rs.xsd'),
}, Y = {
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
function A(t) {
  const e = t != null ? t.indexOf(":") : -1;
  return e < 0 ? { namespace: null, name: t } : {
    namespace: t.substring(0, e),
    name: t.substring(e + 1)
  };
}
class h {
  nsName;
  namespace;
  name;
  children;
  xmlns;
  allowedChildren = {};
  allowedChildrenList = "_fault";
  constructor(e, n, s) {
    const a = A(e);
    this.nsName = e, this.namespace = a.namespace ?? "", this.name = a.name, this.children = [], this.xmlns = {};
    for (const i in n) {
      const r = /^xmlns:?(.*)$/.exec(i);
      r ? this.xmlns[r[1]] = n[i] : this["$" + i] = n[i];
    }
    this.allowedChildrenList = s ?? this.allowedChildrenList, this._parseAllowedTypes();
  }
  _parseAllowedTypes() {
    this.allowedChildrenList.split(" ").forEach((n) => {
      this.allowedChildren[n.replace(/^_/, "")] = (v[n] || [
        h
      ])[0];
    });
  }
  deleteFixedAttrs() {
    this.children && this.children.length === 0 && delete this.children, this.xmlns && Object.keys(this.xmlns).length === 0 && delete this.xmlns, delete this.nsName, delete this.namespace, delete this.name;
  }
  startElement(e, n, s) {
    if (!this.allowedChildren) return;
    const a = this.allowedChildren[A(n).name];
    a ? e.push(new a(n, s)) : this.unexpected(n);
  }
  endElement(e, n) {
    if (this.nsName === n) {
      if (e.length < 2) return;
      const s = e[e.length - 2];
      this !== e[0] && (e[0].xmlns = {
        ...e[0].xmlns,
        ...this.xmlns
      }, s.children?.push(this), s.addChild(this));
    }
    e.pop();
  }
  addChild(e) {
  }
  unexpected(e) {
    throw new Error(
      `Found unexpected element (${e}) inside ${this.nsName ?? ""}`
    );
  }
  description(e) {
    return this.$name || this.name;
  }
}
class we extends h {
  constructor(e, n) {
    const s = v.element[1];
    super(e, n, s);
  }
  description(e) {
    const n = {};
    let s = this.$name;
    if (this.$minOccurs !== this.$maxOccurs && (s += "[]"), this.$type) {
      const a = A(this.$type).name, i = e.xmlns[A(this.$type).namespace ?? ""], r = e.schemas[i], d = r && (r.complexTypes[a] || r.types[a]);
      d && !(a in Y) ? n[s] = d.description(e) : n[s] = this.$type;
    } else {
      const a = this.children ?? [];
      n[s] = {};
      for (let i = 0, r; r = a[i]; i++)
        r instanceof Q && (n[s] = r.description(e));
    }
    return n;
  }
}
class Q extends h {
  constructor(e, n) {
    const s = v.complexType[1];
    super(e, n, s);
  }
  description(e) {
    const n = this.children ?? [];
    for (let s = 0, a; a = n[s]; s++)
      if (a instanceof z || a instanceof X)
        return a.description(e);
    return {};
  }
}
class X extends h {
  constructor(e, n) {
    const s = v.all[1];
    super(e, n, s);
  }
  description(e) {
    const n = this.children ?? [], s = {};
    for (let a = 0, i; i = n[a]; a++) {
      const r = i.description(e);
      for (const d in r)
        s[d] = r[d];
    }
    return s;
  }
}
class z extends h {
  constructor(e, n) {
    const s = v.sequence[1];
    super(e, n, s);
  }
  description(e) {
    const n = this.children ?? [], s = {};
    for (let a = 0, i; i = n[a]; a++) {
      const r = i.description(e);
      for (const d in r)
        s[d] = r[d];
    }
    return s;
  }
}
class K extends h {
  schemas;
  constructor(e, n) {
    const s = v.types[1];
    super(e, n, s), this.schemas = {};
  }
  addChild(e) {
    e.$targetNamespace ? this.schemas[e.$targetNamespace] = e : this.schemas[e.includes[0].namespace] = e;
  }
}
class J extends h {
  complexTypes;
  types;
  elements;
  includes;
  constructor(e, n) {
    const s = v.schema[1];
    super(e, n, s), this.complexTypes = {}, this.types = {}, this.elements = {}, this.includes = [];
  }
  addChild(e) {
    if (!(e.$name in Y)) {
      if (e.name === "include" || e.name === "import") {
        const n = e.$schemaLocation || e.$location;
        n && this.includes.push({
          namespace: e.$namespace || e.$targetNamespace || this.$targetNamespace,
          location: n
        });
      } else e.name === "complexType" ? this.complexTypes[e.$name] = e : e.name === "element" ? this.elements[e.$name] = e : e.$name && (this.types[e.$name] = e);
      this.children?.pop();
    }
  }
}
class Ue extends h {
  constructor(e, n) {
    const s = v.simpleType[1];
    super(e, n, s);
  }
  description() {
    const e = this.children ?? [];
    for (let n = 0, s; s = e[n]; n++)
      if (s instanceof Z)
        return `${this.$name} | ${s.description()}`;
    return {};
  }
}
class Z extends h {
  constructor(e, n) {
    const s = v.restriction[1];
    super(e, n, s);
  }
  description() {
    return (this.$base ? `${this.$base}|` : "") + (this.children ?? []).map(function(n) {
      return n.description();
    }).join(",");
  }
}
class Be extends h {
  constructor(e, n) {
    const s = v.enumeration[1];
    super(e, n, s);
  }
  description() {
    return this.$value;
  }
}
class ee extends h {
  ports;
  constructor(e, n) {
    const s = v.service[1];
    super(e, n, s), this.ports = {};
  }
  description(e) {
    const n = {};
    for (const s in this.ports) {
      const a = this.ports[s];
      n[s] = a.binding.description(e);
    }
    return n;
  }
  postProcess(e) {
    const n = this.children ?? [], s = e.bindings;
    for (let a = 0, i; i = n[a]; a++) {
      if (i.name !== "port") continue;
      const r = A(i.$binding).name, d = s[r];
      d && (d.postProcess(e), this.ports[i.$name] = {
        location: i.location,
        binding: d
      }, n.splice(a--, 1));
    }
    delete this.$name, this.deleteFixedAttrs();
  }
}
class Fe extends h {
  location;
  constructor(e, n) {
    const s = v.port[1];
    super(e, n, s), this.location = null;
  }
  addChild(e) {
    e.name === "address" && typeof e.$location < "u" && (this.location = e.$location);
  }
}
class ne extends h {
  transport;
  style;
  methods;
  constructor(e, n) {
    const s = v.binding[1];
    super(e, n, s), this.transport = "", this.style = "", this.methods = {};
  }
  addChild(e) {
    e.name === "binding" && (this.transport = e.$transport, this.style = e.$style, this.children?.pop());
  }
  postProcess(e) {
    const n = A(this.$type).name, s = e.portTypes[n], a = this.style, i = this.children ?? [];
    s.postProcess(e), this.methods = s.methods;
    for (let r = 0, d; d = i[r]; r++) {
      if (d.name !== "operation") continue;
      d.postProcess(e, "binding"), i.splice(r--, 1), d.style || (d.style = a);
      const x = this.methods[d.$name];
      x.style = d.style, x.soapAction = d.soapAction, x.inputSoap = d.input || null, x.outputSoap = d.output || null, x.inputSoap?.deleteFixedAttrs(), x.outputSoap?.deleteFixedAttrs();
    }
    delete this.$name, delete this.$type, this.deleteFixedAttrs();
  }
  description(e) {
    const n = {};
    for (const s in this.methods) {
      const a = this.methods[s];
      n[s] = a.description(e);
    }
    return n;
  }
}
class se extends h {
  methods;
  constructor(e, n) {
    const s = v.portType[1];
    super(e, n, s), this.methods = {};
  }
  postProcess(e) {
    const n = this.children;
    if (!(typeof n > "u")) {
      for (let s = 0, a; a = n[s]; s++)
        a.name === "operation" && (a.postProcess(e, "portType"), this.methods[a.$name] = a, n.splice(s--, 1));
      delete this.$name, this.deleteFixedAttrs();
    }
  }
  description(e) {
    const n = {};
    for (const s in this.methods) {
      const a = this.methods[s];
      n[s] = a.description(e);
    }
    return n;
  }
}
class te extends h {
  element;
  parts;
  constructor(e, n) {
    const s = v.message[1];
    super(e, n, s), this.element = null, this.parts = null;
  }
  postProcess(e) {
    let n = null, s;
    const a = this.children ?? [];
    for (let i = 0; i < a.length; i++)
      if ((s = a[i]).name === "part") {
        n = s;
        break;
      }
    if (n) {
      if (n.$element) {
        delete this.parts;
        const i = A(n.$element), r = i.namespace ?? "";
        this.element = e.schemas[e.xmlns[r]].elements[i.name], this.element.targetNSAlias = r, this.element.targetNamespace = e.xmlns[r], this.children?.splice(0, 1);
      } else {
        this.parts = {}, delete this.element;
        for (let i = 0, r; r = a[i]; i++) {
          const d = A(n.$type), x = e.xmlns[d.namespace ?? ""], c = d.name;
          typeof e.schemas[x] < "u" ? this.parts[r.$name] = e.schemas[x].types[c] || e.schemas[x].complexTypes[c] : this.parts[r.$name] = r.$type, this.parts[r.$name].namespace = d.namespace, this.parts[r.$name].xmlns = x, this.children?.splice(i--, 1);
        }
      }
      this.deleteFixedAttrs();
    }
  }
  description(e) {
    if (this.element)
      return this.element?.description(e);
    const n = {};
    return n[this.$name] = this.parts, n;
  }
}
class je extends h {
  constructor(e, n) {
    const s = v.operation[1];
    super(e, n, s), this.input = null, this.output = null, this.inputSoap = null, this.outputSoap = null, this.style = "", this.soapAction = "";
  }
  postProcess(e, n) {
    const s = this.children ?? [];
    for (let a = 0, i; i = s[a]; a++) {
      if (i.name !== "input" && i.name !== "output") continue;
      if (n === "binding") {
        this[i.name] = i, s.splice(a--, 1);
        continue;
      }
      const r = A(i.$message).name, d = e.messages[r];
      d.postProcess(e), d.element ? (e.messages[d.element.$name] = d, this[i.name] = d.element) : this[i.name] = d, s.splice(a--, 1);
    }
    this.deleteFixedAttrs();
  }
  description(e) {
    const n = this.input.description(e), s = this.output.description(e);
    return {
      input: n?.[Object.keys(n)[0]],
      output: s?.[Object.keys(s)[0]]
    };
  }
  addChild(e) {
    e.name === "operation" && (this.soapAction = e.$soapAction || "", this.style = e.$style || "", this.children?.pop());
  }
}
class He extends h {
  constructor(e, n) {
    const s = v.input[1];
    super(e, n, s);
  }
  addChild(e) {
    e.name === "body" && (this.use = e.$use, this.use === "encoded" && (this.encodingStyle = e.$encodingStyle), this.children?.pop());
  }
}
class ke extends h {
  constructor(e, n) {
    const s = v.output[1];
    super(e, n, s);
  }
  addChild(e) {
    e.name === "body" && (this.use = e.$use, this.use === "encoded" && (this.encodingStyle = e.$encodingStyle), this.children?.pop());
  }
}
class me extends h {
  messages;
  portTypes;
  bindings;
  services;
  schemas;
  constructor(e, n) {
    const s = v.definitions[1];
    super(e, n, s), this.name !== "definitions" && this.unexpected(this.nsName ?? ""), this.messages = {}, this.portTypes = {}, this.bindings = {}, this.services = {}, this.schemas = {};
  }
  addChild(e) {
    e instanceof K ? this.schemas = e.schemas : e instanceof te ? this.messages[e.$name] = e : e instanceof se ? this.portTypes[e.$name] = e : e instanceof ne ? (e.transport === "http://schemas.xmlsoap.org/soap/http" || e.transport === "http://www.w3.org/2003/05/soap/bindings/HTTP/") && (this.bindings[e.$name] = e) : e instanceof ee && (this.services[e.$name] = e), this.children?.pop();
  }
}
const v = {
  types: [K, "schema"],
  schema: [J, "element complexType simpleType include import"],
  element: [we, "annotation complexType"],
  simpleType: [Ue, "restriction"],
  restriction: [Z, "enumeration"],
  enumeration: [Be, ""],
  complexType: [Q, "annotation sequence all"],
  sequence: [z, "element"],
  all: [X, "element"],
  service: [ee, "port documentation"],
  port: [Fe, "address"],
  binding: [ne, "_binding SecuritySpec operation"],
  portType: [se, "operation"],
  message: [te, "part documentation"],
  operation: [je, "documentation input output fault _operation"],
  input: [He, "body SecuritySpecRef documentation header"],
  output: [ke, "body SecuritySpecRef documentation header"],
  fault: [h, "_fault"],
  definitions: [me, "types message portType binding service"]
};
function Ve(t) {
  return typeof t == "string" ? t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : t;
}
const Ge = /^[\s\xA0]+/, $e = /[\s\xA0]+$/;
function We(t) {
  return t.replace(Ge, "").replace($e, "");
}
class Ye {
  uri;
  options;
  xml = "";
  definitions = {};
  services = {};
  xmlnsInEnvelope = "";
  readyPromise;
  readyPromiseResolveFn;
  constructor(e, n, s = {}) {
    let a = (i) => {
    };
    if (this.uri = n, this.options = s, this.readyPromise = new Promise((i) => {
      a = i;
    }), this.readyPromiseResolveFn = a, typeof e != "string")
      throw new Error("WSDL constructor takes an XML string");
    this._fromXML(e), this.processIncludes().then(() => {
      this.definitions.deleteFixedAttrs();
      const i = this.services = this.definitions.services;
      if (i)
        for (const x in i)
          i[x].postProcess(this.definitions);
      const r = this.definitions.complexTypes;
      if (r)
        for (const x in r)
          r[x].deleteFixedAttrs();
      const d = this.definitions.bindings;
      for (const x in d) {
        const c = d[x];
        if (c.style !== "document") continue;
        const T = c.methods;
        c.topElements = {};
        for (const p in T) {
          const O = T[p].input.$name, y = T[p].output.$name;
          c.topElements[O] = {
            methodName: p,
            outputName: y
          };
        }
      }
      this.xmlnsInEnvelope = this.xmlnsMap(), this.readyPromiseResolveFn(null);
    }).catch(() => {
    });
  }
  _fromXML(e) {
    this.definitions = this._parse(e), this.xml = e;
  }
  _parse(e) {
    let n;
    const s = new V.SaxParser(function(r) {
      n = r;
    }), a = [];
    let i = null;
    return n.onStartElementNS(
      (r, d, x, c, T) => {
        r = x ? x + ":" + r : r;
        const p = d.reduce(
          function(y, b) {
            return y[b[0]] = b[1], y;
          },
          {}
        );
        T.forEach(function(y) {
          const b = y[0], l = y[1];
          p["xmlns" + (b ? ":" : "") + b] = l;
        });
        const O = a[a.length - 1];
        if (O)
          try {
            O.startElement(a, r, p);
          } catch (y) {
            if (this.options.strict)
              throw y;
            a.push(new h(r, p));
          }
        else {
          const y = A(r).name;
          if (y === "definitions")
            i = new me(r, p);
          else if (y === "schema")
            i = new J(r, p);
          else
            throw new Error("Unexpected root element of WSDL or include");
          a.push(i);
        }
      }
    ), n.onEndElementNS(function(r, d) {
      r = d ? d + ":" + r : r, a[a.length - 1].endElement(a, r);
    }), s.parseString(e), i;
  }
  async processIncludes() {
    const e = this.definitions.schemas;
    let n = [];
    for (const s in e) {
      const a = e[s];
      n = n.concat(a.includes || []);
    }
    await this.processNextInclude(n);
  }
  async processNextInclude(e) {
    const n = e.shift();
    if (!n) return;
    const s = n.location, a = await ae(s), i = this.definitions.schemas;
    i[n.namespace || a.definitions.$targetNamespace] = a.definitions, await this.processNextInclude(e);
  }
  xmlnsMap() {
    const e = this.definitions.xmlns;
    let n = "";
    for (const s in e) {
      if (s === "") continue;
      const a = e[s], i = new URL(a), r = [
        "www.w3.org",
        "schemas.xmlsoap.org",
        "xml.apache.org",
        "schemas.microsoft.com"
      ];
      switch (a) {
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
      r.includes(i.host) || (n += ` xmlns:${s}="${a}"`);
    }
    return n;
  }
  async ready() {
    await this.readyPromise;
  }
  objectToXML(e, n, s, a) {
    const i = [], d = s ? s + ":" : "";
    if (Array.isArray(e))
      for (let x = 0, c; c = e[x]; x++)
        x > 0 && (i.push(["</", d, n, ">"].join("")), i.push(["<", d, n, "", ">"].join(""))), i.push(this.objectToXML(c, n));
    else if (typeof e == "object")
      for (const x in e) {
        const c = e[x];
        c === null ? i.push(["<", d, x, "", "/>"].join("")) : (i.push(["<", d, x, "", ">"].join("")), i.push(this.objectToXML(c, x, s)), i.push(["</", d, x, ">"].join("")));
      }
    else e && i.push(Ve(e));
    return i.join("");
  }
  complexObjectToXML(e, n) {
    const s = [];
    let a = "";
    if (typeof e != "object")
      throw new Error("Wrong type of object");
    {
      const i = e.__attrs;
      delete e.__attrs;
      for (const r in i) {
        if (typeof i[r] != "string")
          throw new Error(
            `Wrong type of attribute ${r} in element with name ${n ?? "not specified"}. Attributes should be strings.`
          );
        a = a.concat(` ${r}="${i[r]}"`);
      }
      if (Object.keys(e).length === 0)
        return n ? `<${n}${a}/>` : "";
      for (const r in e) {
        const d = e[r];
        typeof d == "object" && s.push(this.complexObjectToXML(d, r));
      }
    }
    return s.join("");
  }
  describeServices() {
    const e = {};
    for (const n in this.services) {
      const s = this.services[n];
      e[n] = s.description(this.definitions);
    }
    return e;
  }
  objectToDocumentXML(e, n, s, a) {
    const i = {};
    return i[e] = n, this.objectToXML(i, null, s, a);
  }
  xmlToObject(e) {
    let n;
    const s = new V.SaxParser((T) => {
      n = T;
    });
    let a = null;
    const i = {}, d = [{ name: null, object: i, schema: {
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
    } }], x = {};
    let c;
    n.onStartElementNS(
      (T, p, O, y, b) => {
        T = O ? O + ":" + T : T, p = p.reduce((_, S) => (_[S[0]] = S[1], _), {}), b.forEach((_) => {
          const S = _[0], M = _[1];
          p[`xmlns${S ? ":" : ""}${S}`] = M;
        });
        let l = A(T).name;
        const E = d[d.length - 1];
        let g = E.schema;
        const D = {}, R = l;
        if (!a && E.name === "Body" && l !== "Fault") {
          const _ = this.definitions.messages;
          let S = _[l];
          if (!S) {
            let M = !1;
            /Response$/.test(l) ? l = l.replace(/Response$/, "") : /Request$/.test(l) ? (M = !0, l = l.replace(/Request$/, "")) : /Solicit$/.test(l) && (M = !0, l = l.replace(/Solicit$/, ""));
            const L = this.definitions.portTypes, B = Object.keys(L), j = L[B[0]];
            M ? l = j.methods[l].input.$name : l = j.methods[l].output.$name, S = _[l], _[R] = _[l];
          }
          g = S.description(this.definitions), a = R;
        }
        p.href && (c = p.href.substr(1), x[c] || (x[c] = { hrefs: [], obj: null }), x[c].hrefs.push({ par: E.object, key: l })), (c = p.id) && (x[c] || (x[c] = { hrefs: [], obj: null })), g && g[l + "[]"] && (l = l + "[]"), d.push({
          name: R,
          object: D,
          schema: g?.[l],
          id: p.id,
          __attrs: p
        });
      }
    ), n.onEndElementNS(function(T, p) {
      T = p ? p + ":" + T : T;
      const O = d.pop(), y = O.object;
      typeof y == "object" && (y.__attrs = O.__attrs);
      const b = d[d.length - 1], l = b.object, E = b.schema, g = A(T).name;
      E && E[g + "[]"] && typeof E[g + "[]"] != "string" ? (l[g] || (l[g] = []), l[g].push(y)) : g in l ? (Array.isArray(l[g]) || (l[g] = [l[g]]), l[g].push(y)) : l[g] = y, O.id && (x[O.id].obj = y);
    }), n.onCharacters(function(T) {
      if (!We(T).length) return;
      const p = d[d.length - 1], O = A(p.schema).name;
      let y;
      O === "int" ? y = parseInt(T, 10) : O === "dateTime" ? y = new Date(T) : typeof p.object != "string" ? y = T : y = p.object + T, p.object = y;
    }), s.parseString(e);
    for (const T in x) {
      const p = x[T], O = p.obj;
      p.hrefs.forEach(function(y) {
        y.par[y.key] = O;
      });
    }
    return i.Envelope;
  }
}
async function ae(t, e) {
  const n = Le[t], s = new Ye(n, t, e);
  return await s.ready(), s;
}
const Qe = {};
async function Xe(t, e = {}) {
  const n = Qe[t];
  return n || await ae(t, e);
}
async function ze(t, e = {}) {
  const n = await Xe(t, e);
  return new le(n, e.endpoint);
}
class G {
  _username;
  _password;
  constructor(e, n = "") {
    this._username = e, this._password = n;
  }
  addHeaders(e) {
    console.log("Adding headers for BasicAuthSecurity", e), e.Authorization = `Basic ${btoa(this._username + ":" + this._password)}`;
  }
  toXML() {
    return "";
  }
}
function $(...t) {
  return ze(t[0]);
}
class F extends de {
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
    super(), this.apiPromise = new Promise((e) => {
      this.apiPromiseResolve = e;
    });
  }
  async init(e) {
    super.init(e), this.url = e.url, this.catalogName = e.catalogName, this.cubeName = e.cubeName, this.security = e.security || "None", this.user = e.user || "", this.password = e.password || "", this.api = await this.initApi(), this.apiPromiseResolve && this.apiPromiseResolve(this.api);
  }
  async initApi() {
    const e = await $("xmla.wsdl");
    this.security === "Basic" && e.setSecurity(new G(this.user, this.password)), e.setEndpoint(this.url);
    const n = new H(e, this.url);
    return await n.startSession(), n;
  }
  async fetch(e) {
    return await this.apiPromise, await this.api.getMDX(
      e.data.mdx,
      this.catalogName,
      e.format
    );
  }
  setConfig() {
    throw new Error("Method not implemented.");
  }
  static validateConfiguration(e) {
    return !(!e.url || !e.catalogName);
  }
  static async getCatalogs(e, n) {
    const s = await $("xmla.wsdl");
    if (n.type === "Basic" && n.user) {
      const r = new G(n.user, n.password);
      console.log("Security class:", r), s.setSecurity(r);
    }
    s.setEndpoint(e), console.log("Client", s);
    const a = new H(s, e);
    await a.startSession();
    const { catalogs: i } = await a.getCatalogs();
    return i;
  }
  async getApi() {
    return await this.apiPromise, this.api;
  }
}
const U = xe("XmlaConnectionFactory"), Ke = Symbol.for(U);
function Je(t) {
  if (!F.validateConfiguration(t))
    throw new Error(
      "Invalid XmlaConnection configuration. Please provide a valid configuration."
    );
  const e = new F();
  return e.init(t), e;
}
function ie({ services: t }) {
  t.register(U, Je);
}
function re({ services: t }) {
  t.unregister(U);
}
const Ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  XMLA_CONNECTION_FACTORY: U,
  XmlaConnection: F,
  activate: ie,
  deactivate: re,
  factorySymbol: Ke
}, Symbol.toStringTag, { value: "Module" })), W = "org.eclipse.daanse.board.app.lib.connection.xmla", en = "0.0.1-next.1";
async function sn(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${W}: tsm runtime is not initialized`);
  e.register(W, Ze, en, "lib.connection.xmla"), await ie?.(t);
}
async function tn(t) {
  await re?.(t);
}
export {
  U as XMLA_CONNECTION_FACTORY,
  F as XmlaConnection,
  sn as activate,
  tn as deactivate,
  Ke as factorySymbol
};
