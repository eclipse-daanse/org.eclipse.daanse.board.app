(function(){var i="ui.vue.datasource.sql_xmla",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".va-tabs__wrapper{overflow:visible}.va-tabs__content{overflow:hidden}\n";})();
import { DATASOURCE_REPOSITORY as q } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as O, shallowRef as X, ref as i, watch as V, resolveComponent as u, createElementBlock as f, openBlock as c, createElementVNode as g, createVNode as v, unref as G, withCtx as _, createTextVNode as L, createBlock as R, createCommentVNode as I, Fragment as N, renderList as M, normalizeStyle as F, toDisplayString as D, computed as $ } from "vue";
import { MonacoEditor as Y } from "org.eclipse.daanse.board.app.ui.vue.common.monaco";
import { useTemporaryStore as H } from "org.eclipse.daanse.board.app.ui.vue.composables";
const Q = {
  class: "flex gap-4",
  style: { overflow: "hidden", height: "100%", width: "100%" }
}, z = {
  class: "flex flex-col gap-4 overflow-auto",
  style: { width: "550px", "flex-grow": "0" }
}, j = {
  class: "flex flex-col gap-4",
  style: { overflow: "hidden", height: "100%", width: "100%" }
}, J = { class: "h-full" }, K = { style: { "padding-top": "4px", height: "100%" } }, W = {
  key: 1,
  class: "flex flex-col",
  style: { width: "100%", height: "100%", overflow: "auto", border: "1px solid silver", padding: "0px" }
}, Z = /* @__PURE__ */ O({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  emits: ["updateConfig"],
  setup(l, { emit: S }) {
    const r = l, n = X(null), b = i(r.dataSource), { update: E } = H(r.dataSource.type, b, n), h = i([]), d = i(r.dataSource.config.sql || ""), w = i(null), x = i([]), y = i([]);
    V(r.dataSource.config, () => {
      E();
    }, { deep: !0 });
    const B = S, k = (s) => ({
      130: "VARCHAR",
      // WChar
      5: "NUMERIC",
      // Double
      3: "INT",
      // Integer
      11: "BOOLEAN"
      // Boolean
    })[String(s)] || "VARCHAR";
    function P(s) {
      const o = {};
      return s.forEach((m) => {
        const e = m.children?.find((t) => t.label === "Tables");
        e && e.children.forEach((t) => {
          if (t.TABLE_TYPE === "SYSTEM TABLE") return;
          const A = t.TABLE_NAME, p = t.children?.find((a) => a.label === "Columns");
          p && p.children && (o[A] = {
            name: A,
            description: t.DESCRIPTION || "",
            columns: p.children.map((a) => ({
              name: a.COLUMN_NAME,
              type: k(a.DATA_TYPE)
            }))
          });
        });
      }), o;
    }
    V(n, async () => {
      const { tables: s } = await n.value.getTables(), o = await n.value.getCatalogs(), m = await n.value.getColumns();
      o.map((e) => (e.label = e.CATALOG_NAME, e.id = e.CATALOG_NAME, e.icon = "storage", e));
      for (const e of s)
        e.label = e.TABLE_NAME, e.id = e.TABLE_NAME, e.icon = "table_chart", e.children == null && (e.children = [{
          label: "Columns",
          icon: "view_column",
          children: []
        }]), e.children[0].children = m.filter((t) => t.TABLE_NAME === e.TABLE_NAME && t.TABLE_CATALOG === e.TABLE_CATALOG).map((t) => (t.label = t.COLUMN_NAME, t.id = t.COLUMN_NAME, t.icon = "view_array", t));
      for (const e of o)
        e.children == null && (e.children = [{
          label: "Tables",
          icon: "backup_table",
          children: []
        }]), e.children[0].children = s.filter((t) => t.TABLE_CATALOG === e.CATALOG_NAME);
      console.log("catalogs", o), h.value = o, console.log("treeData", h.value), w.value = P(h.value), console.log("metadata for autocomplete", w.value), y.value.push({ type: "success", text: `Metadata refreshed at ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}` });
    }, { deep: !0 }), V(() => d, async () => {
      B("updateConfig", {
        ...r.dataSource.config,
        sql: d.value
      });
    }, { deep: !0 });
    const C = [
      {
        title: "Data",
        icon: "table_chart"
      },
      {
        title: "Messages",
        icon: "message"
      }
    ], T = i(C[0].title), U = async () => {
      console.log(n.value), n.value.sql = d.value;
      try {
        const s = /* @__PURE__ */ new Date();
        x.value = (await n.value.getData("DataTable")).items;
        const o = /* @__PURE__ */ new Date();
        y.value.push({ type: "success", text: `Query executed successfully in ${o.getTime() - s.getTime()}ms. Returned ${x.value.length} rows.` });
      } catch (s) {
        y.value.push({ type: "error", text: `Query failed: ${s.message}` });
      }
    };
    return (s, o) => {
      const m = u("VaTreeView"), e = u("va-button"), t = u("VaTab"), A = u("VaDataTable"), p = u("VaTabs");
      return c(), f("div", Q, [
        g("div", z, [
          o[2] || (o[2] = g("h4", { class: "" }, "Explorer", -1)),
          v(m, { nodes: h.value }, null, 8, ["nodes"])
        ]),
        g("div", j, [
          v(G(Y), {
            class: "h-full",
            supportedLanguages: ["sql"],
            language: "sql",
            modelValue: d.value,
            "onUpdate:modelValue": o[0] || (o[0] = (a) => d.value = a),
            metadata: w.value
          }, {
            actions: _(() => [
              v(e, {
                color: "primary",
                onClick: U
              }, {
                default: _(() => [...o[3] || (o[3] = [
                  L("Run Query", -1)
                ])]),
                _: 1
              })
            ]),
            _: 1
          }, 8, ["modelValue", "metadata"]),
          g("div", J, [
            v(p, {
              modelValue: T.value,
              "onUpdate:modelValue": o[1] || (o[1] = (a) => T.value = a),
              color: "rgb(33, 150, 243)"
            }, {
              tabs: _(() => [
                (c(), f(N, null, M(C, (a) => v(t, {
                  key: a.title,
                  name: a.title
                }, {
                  default: _(() => [
                    L(D(a.title), 1)
                  ]),
                  _: 2
                }, 1032, ["name"])), 64))
              ]),
              default: _(() => [
                g("div", K, [
                  T.value === "Data" ? (c(), R(A, {
                    key: 0,
                    items: x.value,
                    stickyHeader: !0,
                    style: { height: "100%" }
                  }, null, 8, ["items"])) : T.value === "Messages" ? (c(), f("div", W, [
                    (c(!0), f(N, null, M(y.value, (a) => (c(), f("p", {
                      key: a,
                      style: F([{ "border-bottom": "1px solid silver", padding: "8px" }, {
                        color: a.type === "error" ? "#f00" : a.type === "success" ? "#0f0" : "#000"
                      }])
                    }, D(a.text), 5))), 128))
                  ])) : I("", !0)
                ])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ])
      ]);
    };
  }
}), ee = /* @__PURE__ */ O({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(l) {
    const S = $(() => l.connections.filter((r) => r.type === "xmla"));
    return (r, n) => {
      const b = u("VaSelect");
      return c(), R(b, {
        modelValue: l.config.connection,
        "onUpdate:modelValue": n[0] || (n[0] = (E) => l.config.connection = E),
        label: "Connection",
        options: S.value,
        "text-by": "name",
        "value-by": "uid"
      }, null, 8, ["modelValue", "options"]);
    };
  }
}), te = Symbol.for("SqlXmlaStoreFactory"), oe = Symbol.for("SqlXmlaPreview"), ae = Symbol.for("SqlXmlaSettings");
function ie({ services: l }) {
  l.register("SqlXmlaPreview", Z), l.register("SqlXmlaSettings", ee), l.getRequired(q).registerDatasourceType("sql_xmla", {
    Store: te,
    Preview: oe,
    Settings: ae
  });
}
function ce({ services: l }) {
  l.getRequired(q).unregisterDatasourceType("sql_xmla"), l.unregister("SqlXmlaPreview"), l.unregister("SqlXmlaSettings");
}
export {
  ie as activate,
  ce as deactivate
};
