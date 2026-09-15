(function(){var i="ui.vue.datasource.sql_xmla",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".tree[data-v-ca19b849]{margin:0;padding:0;list-style:none}.node__row[data-v-ca19b849]{display:flex;align-items:center;gap:5px;width:100%;padding:3px 4px;border:0;background:none;text-align:left;cursor:pointer;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.node__row[data-v-ca19b849]:hover{background-color:color-mix(in srgb,var(--color-pane) 70%,transparent)}.node__row[data-v-ca19b849]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.node__leaf[data-v-ca19b849]{width:14px;flex:none}.node__label[data-v-ca19b849]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.explorer[data-v-5294ffcf]{display:flex;gap:16px;width:100%;height:100%;overflow:hidden}.explorer__schema[data-v-5294ffcf]{width:320px;flex:none;overflow:auto;border-right:1px solid var(--color-divider);padding-right:8px}.explorer__title[data-v-5294ffcf]{margin:0 0 6px;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:600;color:var(--color-dim)}.explorer__work[data-v-5294ffcf]{display:flex;flex-direction:column;gap:10px;flex:1 1 auto;min-width:0;overflow:hidden}.explorer__result[data-v-5294ffcf]{display:flex;flex-direction:column;flex:1 1 auto;min-height:0}.explorer__pane[data-v-5294ffcf]{flex:1 1 auto;min-height:0;overflow:auto}.messages[data-v-5294ffcf]{margin:0;padding:0;list-style:none;font-family:var(--font-sans);font-size:var(--text-sm)}.message[data-v-5294ffcf]{padding:7px 8px;border-bottom:1px solid var(--color-divider)}\n";})();
import { DATASOURCE_REPOSITORY as N } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as x, ref as d, resolveComponent as G, createElementBlock as m, openBlock as r, Fragment as I, renderList as O, createElementVNode as g, createBlock as _, createCommentVNode as k, normalizeStyle as B, unref as h, toDisplayString as P, shallowRef as U, watch as T, createVNode as y, withCtx as D, createTextVNode as z, computed as Q } from "vue";
import { DIcon as q, DButton as Y, DTabs as H, DTable as Z, DSelect as j } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { MonacoEditor as J } from "org.eclipse.daanse.board.app.ui.vue.common.monaco";
import { useTemporaryStore as K } from "org.eclipse.daanse.board.app.ui.vue.composables";
const W = `<?xml version="1.0" encoding="UTF-8"?>
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
`, ee = { class: "tree" }, te = ["aria-expanded", "onClick"], ne = {
  key: 1,
  class: "node__leaf"
}, ae = { class: "node__label" }, oe = /* @__PURE__ */ x({
  __name: "SchemaTree",
  props: {
    nodes: {},
    depth: {}
  },
  setup(t) {
    const i = d({});
    return (s, l) => {
      const p = G("SchemaTree", !0);
      return r(), m("ul", ee, [
        (r(!0), m(I, null, O(t.nodes, (o) => (r(), m("li", {
          key: o.label,
          class: "node"
        }, [
          g("button", {
            type: "button",
            class: "node__row",
            style: B({ paddingLeft: `${(t.depth ?? 0) * 14 + 4}px` }),
            "aria-expanded": o.children?.length ? !!i.value[o.label] : void 0,
            onClick: (b) => o.children?.length && (i.value[o.label] = !i.value[o.label])
          }, [
            o.children?.length ? (r(), _(h(q), {
              key: 0,
              name: i.value[o.label] ? "expand_more" : "chevron_right",
              size: "sm",
              tone: "color-dim"
            }, null, 8, ["name"])) : (r(), m("span", ne)),
            o.icon ? (r(), _(h(q), {
              key: 2,
              name: o.icon,
              size: "sm",
              tone: "color-dim"
            }, null, 8, ["name"])) : k("", !0),
            g("span", ae, P(o.label), 1)
          ], 12, te),
          o.children?.length && i.value[o.label] ? (r(), _(p, {
            key: 0,
            nodes: o.children,
            depth: (t.depth ?? 0) + 1
          }, null, 8, ["nodes", "depth"])) : k("", !0)
        ]))), 128))
      ]);
    };
  }
}), R = (t, i) => {
  const s = t.__vccOpts || t;
  for (const [l, p] of i)
    s[l] = p;
  return s;
}, le = /* @__PURE__ */ R(oe, [["__scopeId", "data-v-ca19b849"]]), re = { class: "explorer" }, se = { class: "explorer__schema" }, ie = { class: "explorer__work" }, ce = { class: "explorer__result" }, ue = { class: "explorer__pane" }, de = {
  key: 1,
  class: "messages"
}, me = /* @__PURE__ */ x({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  emits: ["updateConfig"],
  setup(t, { emit: i }) {
    const s = t, l = U(null), p = d(s.dataSource), { update: o } = K(s.dataSource.type, p, l), b = d([]), f = d(s.dataSource.config.sql || ""), L = d(null), A = d([]), v = d([]);
    T(s.dataSource.config, () => {
      o();
    }, { deep: !0 });
    const V = i, X = (c) => ({
      130: "VARCHAR",
      // WChar
      5: "NUMERIC",
      // Double
      3: "INT",
      // Integer
      11: "BOOLEAN"
      // Boolean
    })[String(c)] || "VARCHAR";
    function F(c) {
      const n = {};
      return c.forEach((u) => {
        const e = u.children?.find((a) => a.label === "Tables");
        e && e.children.forEach((a) => {
          if (a.TABLE_TYPE === "SYSTEM TABLE") return;
          const M = a.TABLE_NAME, E = a.children?.find((S) => S.label === "Columns");
          E && E.children && (n[M] = {
            name: M,
            description: a.DESCRIPTION || "",
            columns: E.children.map((S) => ({
              name: S.COLUMN_NAME,
              type: X(S.DATA_TYPE)
            }))
          });
        });
      }), n;
    }
    T(l, async () => {
      const { tables: c } = await l.value.getTables(), n = await l.value.getCatalogs(), u = await l.value.getColumns();
      n.map((e) => (e.label = e.CATALOG_NAME, e.id = e.CATALOG_NAME, e.icon = "storage", e));
      for (const e of c)
        e.label = e.TABLE_NAME, e.id = e.TABLE_NAME, e.icon = "table_chart", e.children == null && (e.children = [{
          label: "Columns",
          icon: "view_column",
          children: []
        }]), e.children[0].children = u.filter((a) => a.TABLE_NAME === e.TABLE_NAME && a.TABLE_CATALOG === e.TABLE_CATALOG).map((a) => (a.label = a.COLUMN_NAME, a.id = a.COLUMN_NAME, a.icon = "view_array", a));
      for (const e of n)
        e.children == null && (e.children = [{
          label: "Tables",
          icon: "backup_table",
          children: []
        }]), e.children[0].children = c.filter((a) => a.TABLE_CATALOG === e.CATALOG_NAME);
      console.log("catalogs", n), b.value = n, L.value = F(b.value), v.value.push({ type: "success", text: `Schema gelesen um ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}` });
    }, { deep: !0 }), T(() => f, async () => {
      V("updateConfig", {
        ...s.dataSource.config,
        sql: f.value
      });
    }, { deep: !0 });
    const C = [
      { id: "data", label: "Ergebnis" },
      { id: "messages", label: "Meldungen" }
    ], w = d(C[0].id), $ = async () => {
      l.value.sql = f.value;
      try {
        const c = /* @__PURE__ */ new Date();
        A.value = (await l.value.getData("DataTable")).items;
        const n = /* @__PURE__ */ new Date();
        v.value.push({ type: "success", text: `${A.value.length} Zeilen in ${n.getTime() - c.getTime()} ms.` });
      } catch (c) {
        v.value.push({ type: "error", text: `Abfrage fehlgeschlagen: ${c.message}` });
      }
    };
    return (c, n) => (r(), m("div", re, [
      g("aside", se, [
        n[2] || (n[2] = g("h4", { class: "explorer__title" }, "Schema", -1)),
        y(le, { nodes: b.value }, null, 8, ["nodes"])
      ]),
      g("div", ie, [
        y(h(J), {
          class: "h-full",
          supportedLanguages: ["sql"],
          language: "sql",
          modelValue: f.value,
          "onUpdate:modelValue": n[0] || (n[0] = (u) => f.value = u),
          metadata: L.value
        }, {
          actions: D(() => [
            y(h(Y), {
              intent: "primary",
              size: "sm",
              onClick: $
            }, {
              default: D(() => [...n[3] || (n[3] = [
                z("Ausführen", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue", "metadata"]),
        g("div", ce, [
          y(h(H), {
            modelValue: w.value,
            "onUpdate:modelValue": n[1] || (n[1] = (u) => w.value = u),
            tabs: C,
            label: "Ergebnis oder Meldungen"
          }, null, 8, ["modelValue"]),
          g("div", ue, [
            w.value === "data" ? (r(), _(h(Z), {
              key: 0,
              items: A.value,
              empty: "Noch nichts ausgeführt"
            }, null, 8, ["items"])) : (r(), m("ul", de, [
              (r(!0), m(I, null, O(v.value, (u, e) => (r(), m("li", {
                key: e,
                class: "message",
                style: B({ color: u.type === "error" ? "var(--color-err)" : "var(--color-fg)" })
              }, P(u.text), 5))), 128))
            ]))
          ])
        ])
      ])
    ]));
  }
}), pe = /* @__PURE__ */ R(me, [["__scopeId", "data-v-5294ffcf"]]), ge = /* @__PURE__ */ x({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(t) {
    const i = Q(() => t.connections.filter((s) => s.type === "xmla"));
    return (s, l) => (r(), _(h(j), {
      modelValue: t.config.connection,
      "onUpdate:modelValue": l[0] || (l[0] = (p) => t.config.connection = p),
      label: "Verbindung",
      options: i.value,
      "label-key": "name",
      "value-key": "uid"
    }, null, 8, ["modelValue", "options"]));
  }
}), he = Symbol.for("SqlXmlaStoreFactory"), fe = Symbol.for("SqlXmlaPreview"), _e = Symbol.for("SqlXmlaSettings");
function we({ services: t }) {
  t.register("SqlXmlaPreview", pe), t.register("SqlXmlaSettings", ge), t.getRequired(N).registerDatasourceType("sql_xmla", {
    icon: "storage",
    connections: ["xmla"],
    Model: W,
    Store: he,
    Preview: fe,
    Settings: _e
  });
}
function Ee({ services: t }) {
  t.getRequired(N).unregisterDatasourceType("sql_xmla"), t.unregister("SqlXmlaPreview"), t.unregister("SqlXmlaSettings");
}
export {
  we as activate,
  Ee as deactivate
};
