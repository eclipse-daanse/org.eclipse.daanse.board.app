(function(){var i="ui.vue.datasource.sql_xmla",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".tree[data-v-ca19b849]{margin:0;padding:0;list-style:none}.node__row[data-v-ca19b849]{display:flex;align-items:center;gap:5px;width:100%;padding:3px 4px;border:0;background:none;text-align:left;cursor:pointer;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.node__row[data-v-ca19b849]:hover{background-color:color-mix(in srgb,var(--color-pane) 70%,transparent)}.node__row[data-v-ca19b849]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.node__leaf[data-v-ca19b849]{width:14px;flex:none}.node__label[data-v-ca19b849]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.explorer[data-v-cfa05d7e]{display:flex;gap:16px;width:100%;height:100%;overflow:hidden}.explorer__schema[data-v-cfa05d7e]{width:320px;flex:none;overflow:auto;border-right:1px solid var(--color-divider);padding-right:8px}.explorer__title[data-v-cfa05d7e]{margin:0 0 6px;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:600;color:var(--color-dim)}.explorer__work[data-v-cfa05d7e]{display:flex;flex-direction:column;gap:10px;flex:1 1 auto;min-width:0;overflow:hidden}.explorer__result[data-v-cfa05d7e]{display:flex;flex-direction:column;flex:1 1 auto;min-height:0}.explorer__pane[data-v-cfa05d7e]{flex:1 1 auto;min-height:0;overflow:auto}.messages[data-v-cfa05d7e]{margin:0;padding:0;list-style:none;font-family:var(--font-sans);font-size:var(--text-sm)}.message[data-v-cfa05d7e]{padding:7px 8px;border-bottom:1px solid var(--color-divider)}\n";})();
import { DATASOURCE_REPOSITORY as O } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as C, ref as p, resolveComponent as Z, createElementBlock as h, openBlock as i, Fragment as X, renderList as P, createElementVNode as g, createBlock as S, createCommentVNode as D, normalizeStyle as I, unref as u, toDisplayString as y, shallowRef as j, watch as x, computed as B, createVNode as w, withCtx as N, createTextVNode as J } from "vue";
import { DIcon as k, DButton as K, DTabs as W, DTable as ee, DSelect as te } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { MonacoEditor as ne } from "org.eclipse.daanse.board.app.ui.vue.common.monaco";
import { useTranslation as V, useFormat as ae, useTemporaryStore as oe } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { component as se } from "@eclipse-daanse/tsm";
const le = `<?xml version="1.0" encoding="UTF-8"?>
<!--
/*********************************************************************
* Copyright (c) 2024 Contributors to the Eclipse Foundation.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/
-->
<ecore:EPackage xmi:version="2.0"
                xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="sqlxmlastore"
                nsURI="http://org.eclipse.daanse.board.app.lib.datasource.sql_xmla" nsPrefix="sqlxmlastore">

    <eClassifiers xsi:type="ecore:EClass" name="ISqlXmlaStoreConfiguration">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Represents the configuration for a SQL XMLA data store, extending the base connection configuration."/>
        </eAnnotations>
        <eSuperTypes href="http://org.eclipse.daanse.board.app.lib.datasource.base#//IBaseConnectionConfiguration"/>

        <eStructuralFeatures xsi:type="ecore:EAttribute" name="connection" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A reference or ID to a SQL XMLA connection configuration used to access the data source."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="sql" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The SQL query to be executed to retrieve data from the XMLA source."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="pollingInterval" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The optional interval in milliseconds to poll the SQL XMLA resource for updates. If not specified, polling might be disabled or use a default value."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <eSubpackages href="http://org.eclipse.daanse.board.app.lib.datasource.base#/"/>

</ecore:EPackage>
`, re = { class: "tree" }, ce = ["aria-expanded", "onClick"], ie = {
  key: 1,
  class: "node__leaf"
}, ue = { class: "node__label" }, me = /* @__PURE__ */ C({
  __name: "SchemaTree",
  props: {
    nodes: {},
    depth: {}
  },
  setup(n) {
    const l = p({});
    return (r, a) => {
      const c = Z("SchemaTree", !0);
      return i(), h("ul", re, [
        (i(!0), h(X, null, P(n.nodes, (e) => (i(), h("li", {
          key: e.label,
          class: "node"
        }, [
          g("button", {
            type: "button",
            class: "node__row",
            style: I({ paddingLeft: `${(n.depth ?? 0) * 14 + 4}px` }),
            "aria-expanded": e.children?.length ? !!l.value[e.label] : void 0,
            onClick: (f) => e.children?.length && (l.value[e.label] = !l.value[e.label])
          }, [
            e.children?.length ? (i(), S(u(k), {
              key: 0,
              name: l.value[e.label] ? "expand_more" : "chevron_right",
              size: "sm",
              tone: "color-dim"
            }, null, 8, ["name"])) : (i(), h("span", ie)),
            e.icon ? (i(), S(u(k), {
              key: 2,
              name: e.icon,
              size: "sm",
              tone: "color-dim"
            }, null, 8, ["name"])) : D("", !0),
            g("span", ue, y(e.label), 1)
          ], 12, ce),
          e.children?.length && l.value[e.label] ? (i(), S(c, {
            key: 0,
            nodes: e.children,
            depth: (n.depth ?? 0) + 1
          }, null, 8, ["nodes", "depth"])) : D("", !0)
        ]))), 128))
      ]);
    };
  }
}), F = (n, l) => {
  const r = n.__vccOpts || n;
  for (const [a, c] of l)
    r[a] = c;
  return r;
}, de = /* @__PURE__ */ F(me, [["__scopeId", "data-v-ca19b849"]]), pe = { class: "explorer" }, he = { class: "explorer__schema" }, ge = { class: "explorer__title" }, fe = { class: "explorer__work" }, _e = { class: "explorer__result" }, Se = { class: "explorer__pane" }, be = {
  key: 1,
  class: "messages"
}, ve = /* @__PURE__ */ C({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  emits: ["updateConfig"],
  setup(n, { emit: l }) {
    const r = n, { t: a } = V("datasourceSqlXmla"), c = ae(), e = j(null), f = p(r.dataSource), { update: U } = oe(r.dataSource.type, f, e), A = p([]), _ = p(r.dataSource.config.sql || ""), L = p(null), E = p([]), b = p([]);
    x(r.dataSource.config, () => {
      U();
    }, { deep: !0 });
    const $ = l, Q = (m) => ({
      130: "VARCHAR",
      // WChar
      5: "NUMERIC",
      // Double
      3: "INT",
      // Integer
      11: "BOOLEAN"
      // Boolean
    })[String(m)] || "VARCHAR";
    function z(m) {
      const s = {};
      return m.forEach((d) => {
        const t = d.children?.find((o) => o.label === "Tables");
        t && t.children.forEach((o) => {
          if (o.TABLE_TYPE === "SYSTEM TABLE") return;
          const M = o.TABLE_NAME, q = o.children?.find((v) => v.label === "Columns");
          q && q.children && (s[M] = {
            name: M,
            description: o.DESCRIPTION || "",
            columns: q.children.map((v) => ({
              name: v.COLUMN_NAME,
              type: Q(v.DATA_TYPE)
            }))
          });
        });
      }), s;
    }
    x(e, async () => {
      const { tables: m } = await e.value.getTables(), s = await e.value.getCatalogs(), d = await e.value.getColumns();
      s.map((t) => (t.label = t.CATALOG_NAME, t.id = t.CATALOG_NAME, t.icon = "storage", t));
      for (const t of m)
        t.label = t.TABLE_NAME, t.id = t.TABLE_NAME, t.icon = "table_chart", t.children == null && (t.children = [{
          label: a("Sql.columns"),
          icon: "view_column",
          children: []
        }]), t.children[0].children = d.filter((o) => o.TABLE_NAME === t.TABLE_NAME && o.TABLE_CATALOG === t.TABLE_CATALOG).map((o) => (o.label = o.COLUMN_NAME, o.id = o.COLUMN_NAME, o.icon = "view_array", o));
      for (const t of s)
        t.children == null && (t.children = [{
          label: a("Sql.tables"),
          icon: "backup_table",
          children: []
        }]), t.children[0].children = m.filter((o) => o.TABLE_CATALOG === t.CATALOG_NAME);
      console.log("catalogs", s), A.value = s, L.value = z(A.value), b.value.push({ type: "success", text: a("Sql.schemaRead", { time: c.date(/* @__PURE__ */ new Date(), { timeStyle: "medium" }) }) });
    }, { deep: !0 }), x(() => _, async () => {
      $("updateConfig", {
        ...r.dataSource.config,
        sql: _.value
      });
    }, { deep: !0 });
    const Y = B(() => [
      { id: "data", label: a("Sql.result") },
      { id: "messages", label: a("Sql.messages") }
    ]), T = p("data"), H = async () => {
      e.value.sql = _.value;
      try {
        const m = /* @__PURE__ */ new Date();
        E.value = (await e.value.getData("DataTable")).items;
        const s = /* @__PURE__ */ new Date();
        b.value.push({ type: "success", text: a("Sql.rows", { count: E.value.length, ms: s.getTime() - m.getTime() }) });
      } catch (m) {
        b.value.push({ type: "error", text: a("Sql.failed", { reason: m.message }) });
      }
    };
    return (m, s) => (i(), h("div", pe, [
      g("aside", he, [
        g("h4", ge, y(u(a)("Sql.schema")), 1),
        w(de, { nodes: A.value }, null, 8, ["nodes"])
      ]),
      g("div", fe, [
        w(u(ne), {
          class: "h-full",
          supportedLanguages: ["sql"],
          language: "sql",
          modelValue: _.value,
          "onUpdate:modelValue": s[0] || (s[0] = (d) => _.value = d),
          metadata: L.value
        }, {
          actions: N(() => [
            w(u(K), {
              intent: "primary",
              size: "sm",
              onClick: H
            }, {
              default: N(() => [
                J(y(u(a)("Sql.run")), 1)
              ]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue", "metadata"]),
        g("div", _e, [
          w(u(W), {
            modelValue: T.value,
            "onUpdate:modelValue": s[1] || (s[1] = (d) => T.value = d),
            tabs: Y.value,
            label: u(a)("Sql.tabs")
          }, null, 8, ["modelValue", "tabs", "label"]),
          g("div", Se, [
            T.value === "data" ? (i(), S(u(ee), {
              key: 0,
              items: E.value,
              empty: u(a)("Sql.nothingRun")
            }, null, 8, ["items", "empty"])) : (i(), h("ul", be, [
              (i(!0), h(X, null, P(b.value, (d, t) => (i(), h("li", {
                key: t,
                class: "message",
                style: I({ color: d.type === "error" ? "var(--color-err)" : "var(--color-fg)" })
              }, y(d.text), 5))), 128))
            ]))
          ])
        ])
      ])
    ]));
  }
}), we = /* @__PURE__ */ F(ve, [["__scopeId", "data-v-cfa05d7e"]]), ye = /* @__PURE__ */ C({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(n) {
    const { t: l } = V("datasourceSqlXmla"), r = B(() => n.connections.filter((a) => a.type === "xmla"));
    return (a, c) => (i(), S(u(te), {
      modelValue: n.config.connection,
      "onUpdate:modelValue": c[0] || (c[0] = (e) => n.config.connection = e),
      label: u(l)("Settings.connection"),
      options: r.value,
      "label-key": "name",
      "value-key": "uid"
    }, null, 8, ["modelValue", "label", "options"]));
  }
}), Ae = { connection: "Verbindung" }, Ee = { columns: "Spalten", tables: "Tabellen", schema: "Schema", schemaRead: "Schema gelesen um {{time}}", result: "Ergebnis", messages: "Meldungen", rows_one: "{{count}} Zeile in {{ms}} ms.", rows_other: "{{count}} Zeilen in {{ms}} ms.", failed: "Abfrage fehlgeschlagen: {{reason}}", run: "Ausführen", tabs: "Ergebnis oder Meldungen", nothingRun: "Noch nichts ausgeführt" }, Te = {
  Settings: Ae,
  Sql: Ee
}, qe = { connection: "Connection" }, xe = { columns: "Columns", tables: "Tables", schema: "Schema", schemaRead: "Schema read at {{time}}", result: "Result", messages: "Messages", rows_one: "{{count}} row in {{ms}} ms.", rows_other: "{{count}} rows in {{ms}} ms.", failed: "Query failed: {{reason}}", run: "Run", tabs: "Result or messages", nothingRun: "Nothing run yet" }, Ce = {
  Settings: qe,
  Sql: xe
};
var Le = Object.getOwnPropertyDescriptor, Me = (n, l, r, a) => {
  for (var c = a > 1 ? void 0 : a ? Le(l, r) : l, e = n.length - 1, f; e >= 0; e--)
    (f = n[e]) && (c = f(c) || c);
  return c;
};
const G = "datasourceSqlXmla";
let R = class {
  namespace = G;
  resources = {
    de: Te,
    en: Ce
  };
};
R = Me([
  se({
    service: ["Translations"],
    properties: { "i18n.namespace": G }
  })
], R);
const De = Symbol.for("SqlXmlaStoreFactory"), Ne = Symbol.for("SqlXmlaPreview"), ke = Symbol.for("SqlXmlaSettings");
function Ve({ services: n }) {
  n.register("SqlXmlaPreview", we), n.register("SqlXmlaSettings", ye), n.getRequired(O).registerDatasourceType("sql_xmla", {
    icon: "storage",
    connections: ["xmla"],
    Model: le,
    Store: De,
    Preview: Ne,
    Settings: ke
  });
}
function Fe({ services: n }) {
  n.getRequired(O).unregisterDatasourceType("sql_xmla"), n.unregister("SqlXmlaPreview"), n.unregister("SqlXmlaSettings");
}
export {
  R as DatasourceSqlXmlaTranslations,
  Ve as activate,
  Fe as deactivate
};
