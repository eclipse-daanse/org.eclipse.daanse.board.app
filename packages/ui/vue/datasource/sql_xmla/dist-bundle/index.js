(function(){var i="ui.vue.datasource.sql_xmla",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".tree[data-v-ca19b849]{margin:0;padding:0;list-style:none}.node__row[data-v-ca19b849]{display:flex;align-items:center;gap:5px;width:100%;padding:3px 4px;border:0;background:none;text-align:left;cursor:pointer;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.node__row[data-v-ca19b849]:hover{background-color:color-mix(in srgb,var(--color-pane) 70%,transparent)}.node__row[data-v-ca19b849]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-2px}.node__leaf[data-v-ca19b849]{width:14px;flex:none}.node__label[data-v-ca19b849]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.explorer[data-v-5294ffcf]{display:flex;gap:16px;width:100%;height:100%;overflow:hidden}.explorer__schema[data-v-5294ffcf]{width:320px;flex:none;overflow:auto;border-right:1px solid var(--color-divider);padding-right:8px}.explorer__title[data-v-5294ffcf]{margin:0 0 6px;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:600;color:var(--color-dim)}.explorer__work[data-v-5294ffcf]{display:flex;flex-direction:column;gap:10px;flex:1 1 auto;min-width:0;overflow:hidden}.explorer__result[data-v-5294ffcf]{display:flex;flex-direction:column;flex:1 1 auto;min-height:0}.explorer__pane[data-v-5294ffcf]{flex:1 1 auto;min-height:0;overflow:auto}.messages[data-v-5294ffcf]{margin:0;padding:0;list-style:none;font-family:var(--font-sans);font-size:var(--text-sm)}.message[data-v-5294ffcf]{padding:7px 8px;border-bottom:1px solid var(--color-divider)}\n";})();
import { DATASOURCE_REPOSITORY as q } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as x, ref as d, resolveComponent as G, createElementBlock as m, openBlock as s, Fragment as O, renderList as V, createElementVNode as _, createBlock as f, createCommentVNode as k, normalizeStyle as B, unref as h, toDisplayString as R, shallowRef as F, watch as C, createVNode as b, withCtx as D, createTextVNode as z, computed as Y } from "vue";
import { DIcon as M, DButton as H, DTabs as Z, DTable as j, DSelect as J } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { MonacoEditor as K } from "org.eclipse.daanse.board.app.ui.vue.common.monaco";
import { useTemporaryStore as Q } from "org.eclipse.daanse.board.app.ui.vue.composables";
const W = { class: "tree" }, ee = ["aria-expanded", "onClick"], te = {
  key: 1,
  class: "node__leaf"
}, le = { class: "node__label" }, ae = /* @__PURE__ */ x({
  __name: "SchemaTree",
  props: {
    nodes: {},
    depth: {}
  },
  setup(t) {
    const c = d({});
    return (r, o) => {
      const p = G("SchemaTree", !0);
      return s(), m("ul", W, [
        (s(!0), m(O, null, V(t.nodes, (n) => (s(), m("li", {
          key: n.label,
          class: "node"
        }, [
          _("button", {
            type: "button",
            class: "node__row",
            style: B({ paddingLeft: `${(t.depth ?? 0) * 14 + 4}px` }),
            "aria-expanded": n.children?.length ? !!c.value[n.label] : void 0,
            onClick: (v) => n.children?.length && (c.value[n.label] = !c.value[n.label])
          }, [
            n.children?.length ? (s(), f(h(M), {
              key: 0,
              name: c.value[n.label] ? "expand_more" : "chevron_right",
              size: "sm",
              tone: "color-dim"
            }, null, 8, ["name"])) : (s(), m("span", te)),
            n.icon ? (s(), f(h(M), {
              key: 2,
              name: n.icon,
              size: "sm",
              tone: "color-dim"
            }, null, 8, ["name"])) : k("", !0),
            _("span", le, R(n.label), 1)
          ], 12, ee),
          n.children?.length && c.value[n.label] ? (s(), f(p, {
            key: 0,
            nodes: n.children,
            depth: (t.depth ?? 0) + 1
          }, null, 8, ["nodes", "depth"])) : k("", !0)
        ]))), 128))
      ]);
    };
  }
}), $ = (t, c) => {
  const r = t.__vccOpts || t;
  for (const [o, p] of c)
    r[o] = p;
  return r;
}, ne = /* @__PURE__ */ $(ae, [["__scopeId", "data-v-ca19b849"]]), oe = { class: "explorer" }, se = { class: "explorer__schema" }, re = { class: "explorer__work" }, ce = { class: "explorer__result" }, ie = { class: "explorer__pane" }, ue = {
  key: 1,
  class: "messages"
}, de = /* @__PURE__ */ x({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  emits: ["updateConfig"],
  setup(t, { emit: c }) {
    const r = t, o = F(null), p = d(r.dataSource), { update: n } = Q(r.dataSource.type, p, o), v = d([]), g = d(r.dataSource.config.sql || ""), L = d(null), A = d([]), S = d([]);
    C(r.dataSource.config, () => {
      n();
    }, { deep: !0 });
    const P = c, I = (i) => ({
      130: "VARCHAR",
      // WChar
      5: "NUMERIC",
      // Double
      3: "INT",
      // Integer
      11: "BOOLEAN"
      // Boolean
    })[String(i)] || "VARCHAR";
    function U(i) {
      const l = {};
      return i.forEach((u) => {
        const e = u.children?.find((a) => a.label === "Tables");
        e && e.children.forEach((a) => {
          if (a.TABLE_TYPE === "SYSTEM TABLE") return;
          const w = a.TABLE_NAME, E = a.children?.find((T) => T.label === "Columns");
          E && E.children && (l[w] = {
            name: w,
            description: a.DESCRIPTION || "",
            columns: E.children.map((T) => ({
              name: T.COLUMN_NAME,
              type: I(T.DATA_TYPE)
            }))
          });
        });
      }), l;
    }
    C(o, async () => {
      const { tables: i } = await o.value.getTables(), l = await o.value.getCatalogs(), u = await o.value.getColumns();
      l.map((e) => (e.label = e.CATALOG_NAME, e.id = e.CATALOG_NAME, e.icon = "storage", e));
      for (const e of i)
        e.label = e.TABLE_NAME, e.id = e.TABLE_NAME, e.icon = "table_chart", e.children == null && (e.children = [{
          label: "Columns",
          icon: "view_column",
          children: []
        }]), e.children[0].children = u.filter((a) => a.TABLE_NAME === e.TABLE_NAME && a.TABLE_CATALOG === e.TABLE_CATALOG).map((a) => (a.label = a.COLUMN_NAME, a.id = a.COLUMN_NAME, a.icon = "view_array", a));
      for (const e of l)
        e.children == null && (e.children = [{
          label: "Tables",
          icon: "backup_table",
          children: []
        }]), e.children[0].children = i.filter((a) => a.TABLE_CATALOG === e.CATALOG_NAME);
      console.log("catalogs", l), v.value = l, L.value = U(v.value), S.value.push({ type: "success", text: `Schema gelesen um ${(/* @__PURE__ */ new Date()).toLocaleTimeString()}` });
    }, { deep: !0 }), C(() => g, async () => {
      P("updateConfig", {
        ...r.dataSource.config,
        sql: g.value
      });
    }, { deep: !0 });
    const N = [
      { id: "data", label: "Ergebnis" },
      { id: "messages", label: "Meldungen" }
    ], y = d(N[0].id), X = async () => {
      o.value.sql = g.value;
      try {
        const i = /* @__PURE__ */ new Date();
        A.value = (await o.value.getData("DataTable")).items;
        const l = /* @__PURE__ */ new Date();
        S.value.push({ type: "success", text: `${A.value.length} Zeilen in ${l.getTime() - i.getTime()} ms.` });
      } catch (i) {
        S.value.push({ type: "error", text: `Abfrage fehlgeschlagen: ${i.message}` });
      }
    };
    return (i, l) => (s(), m("div", oe, [
      _("aside", se, [
        l[2] || (l[2] = _("h4", { class: "explorer__title" }, "Schema", -1)),
        b(ne, { nodes: v.value }, null, 8, ["nodes"])
      ]),
      _("div", re, [
        b(h(K), {
          class: "h-full",
          supportedLanguages: ["sql"],
          language: "sql",
          modelValue: g.value,
          "onUpdate:modelValue": l[0] || (l[0] = (u) => g.value = u),
          metadata: L.value
        }, {
          actions: D(() => [
            b(h(H), {
              intent: "primary",
              size: "sm",
              onClick: X
            }, {
              default: D(() => [...l[3] || (l[3] = [
                z("Ausführen", -1)
              ])]),
              _: 1
            })
          ]),
          _: 1
        }, 8, ["modelValue", "metadata"]),
        _("div", ce, [
          b(h(Z), {
            modelValue: y.value,
            "onUpdate:modelValue": l[1] || (l[1] = (u) => y.value = u),
            tabs: N,
            label: "Ergebnis oder Meldungen"
          }, null, 8, ["modelValue"]),
          _("div", ie, [
            y.value === "data" ? (s(), f(h(j), {
              key: 0,
              items: A.value,
              empty: "Noch nichts ausgeführt"
            }, null, 8, ["items"])) : (s(), m("ul", ue, [
              (s(!0), m(O, null, V(S.value, (u, e) => (s(), m("li", {
                key: e,
                class: "message",
                style: B({ color: u.type === "error" ? "var(--color-err)" : "var(--color-fg)" })
              }, R(u.text), 5))), 128))
            ]))
          ])
        ])
      ])
    ]));
  }
}), me = /* @__PURE__ */ $(de, [["__scopeId", "data-v-5294ffcf"]]), pe = /* @__PURE__ */ x({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(t) {
    const c = Y(() => t.connections.filter((r) => r.type === "xmla"));
    return (r, o) => (s(), f(h(J), {
      modelValue: t.config.connection,
      "onUpdate:modelValue": o[0] || (o[0] = (p) => t.config.connection = p),
      label: "Verbindung",
      options: c.value,
      "label-key": "name",
      "value-key": "uid"
    }, null, 8, ["modelValue", "options"]));
  }
}), _e = Symbol.for("SqlXmlaStoreFactory"), he = Symbol.for("SqlXmlaPreview"), ge = Symbol.for("SqlXmlaSettings");
function Ae({ services: t }) {
  t.register("SqlXmlaPreview", me), t.register("SqlXmlaSettings", pe), t.getRequired(q).registerDatasourceType("sql_xmla", {
    Store: _e,
    Preview: he,
    Settings: ge
  });
}
function ye({ services: t }) {
  t.getRequired(q).unregisterDatasourceType("sql_xmla"), t.unregister("SqlXmlaPreview"), t.unregister("SqlXmlaSettings");
}
export {
  Ae as activate,
  ye as deactivate
};
