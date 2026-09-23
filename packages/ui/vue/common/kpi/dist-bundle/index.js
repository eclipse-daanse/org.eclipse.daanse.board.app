(function(){var i="ui.vue.common.kpi",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".folder-row[data-v-38e1b373]{background-color:var(--color-raised);font-weight:500}.expandable[data-v-38e1b373]{cursor:pointer}.expandable[data-v-38e1b373]:hover{background-color:var(--color-raised)}.expanded[data-v-38e1b373]{background-color:color-mix(in srgb,var(--color-accent) 16%,transparent)}.expand-icon[data-v-38e1b373]{width:16px;margin-right:8px;font-size:12px}.folder-cell[data-v-38e1b373]{color:var(--color-dim);text-align:right;font-style:italic}.child-count[data-v-38e1b373]{margin-left:8px;font-size:.875em;color:var(--color-dim)}.selection-cell[data-v-38e1b373]{width:40px;text-align:center;padding:8px 4px}.selected[data-v-38e1b373]{background-color:color-mix(in srgb,var(--color-accent) 16%,transparent)}.va-table[data-v-757d5256]{width:100%;border-collapse:collapse;border:1px solid var(--color-divider)}.kpi-table th[data-v-757d5256]{background-color:var(--color-raised);padding:12px;text-align:left;border-bottom:2px solid var(--color-divider);font-weight:600}.kpi-table td[data-v-757d5256]{padding:8px 12px;border-bottom:1px solid var(--color-divider)}.kpi-table tr[data-v-757d5256]:hover{background-color:var(--color-bg)}.selection-header[data-v-757d5256]{width:40px;text-align:center}\n";})();
import { defineComponent as k, computed as h, createElementBlock as o, openBlock as s, createElementVNode as d, toDisplayString as c, inject as N, createBlock as I, unref as v, withCtx as A, createTextVNode as D, ref as O, resolveComponent as L, Fragment as S, createCommentVNode as b, normalizeClass as G, withModifiers as M, normalizeStyle as U, createVNode as w, renderList as P } from "vue";
import { useFormat as K, useTranslation as R } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DChip as j } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { component as W } from "@eclipse-daanse/tsm";
const Y = /* @__PURE__ */ k({
  __name: "KpiValueCell",
  props: {
    value: {}
  },
  setup(t) {
    const n = t, l = K(), e = h(() => n.value == null ? "-" : typeof n.value == "number" ? l.number(n.value) : n.value.toString());
    return (u, r) => (s(), o("td", null, [
      d("span", null, c(e.value), 1)
    ]));
  }
}), Z = /* @__PURE__ */ k({
  __name: "KpiGoalCell",
  props: {
    goal: {}
  },
  setup(t) {
    const n = t, l = K(), e = h(() => n.goal == null ? "-" : typeof n.goal == "number" ? l.number(n.goal) : n.goal.toString());
    return (u, r) => (s(), o("td", null, [
      d("span", null, c(e.value), 1)
    ]));
  }
}), q = { key: 0 }, H = { key: 1 }, J = /* @__PURE__ */ k({
  __name: "KpiStatusCell",
  props: {
    status: {}
  },
  setup(t) {
    const n = t, l = h(() => n.status == null ? null : typeof n.status == "string" ? parseInt(n.status) : n.status), e = N("statusVisualType", "badge");
    return (u, r) => (s(), o("td", null, [
      v(e) === "Lights" ? (s(), o("span", q, c(l.value > 0.5 ? "🟢" : "🛑"), 1)) : v(e) === "Emoji" ? (s(), o("span", H, c(l.value > 0.5 ? "😊" : "☹️"), 1)) : (s(), I(v(j), {
        key: 2,
        tone: l.value > 0.5 ? "ok" : "err",
        numeric: ""
      }, {
        default: A(() => [
          D(c(l.value), 1)
        ]),
        _: 1
      }, 8, ["tone"]))
    ]));
  }
}), Q = { key: 0 }, X = { key: 1 }, ee = { key: 2 }, te = /* @__PURE__ */ k({
  __name: "KpiTrendCell",
  props: {
    trend: {}
  },
  setup(t) {
    const n = t, l = h(() => n.trend == null ? null : typeof n.trend == "string" ? parseInt(n.trend) : n.trend), e = N("trendVisualType", "badge");
    return (u, r) => (s(), o("td", null, [
      v(e) === "Chart" ? (s(), o("span", Q, c(l.value > 0.5 ? "📈" : "📉"), 1)) : v(e) === "Emoji" ? (s(), o("span", X, c(l.value > 0.5 ? "😊" : "☹️"), 1)) : v(e) === "Arrow" ? (s(), o("span", ee, c(l.value > 0.5 ? "⬆️" : "⬇️"), 1)) : (s(), I(v(j), {
        key: 3,
        tone: l.value > 0.5 ? "ok" : "err",
        numeric: ""
      }, {
        default: A(() => [
          D(c(l.value), 1)
        ]),
        _: 1
      }, 8, ["tone"]))
    ]));
  }
}), ne = ["checked"], le = {
  key: 0,
  class: "expand-icon"
}, se = {
  key: 1,
  class: "child-count"
}, ae = ["colspan"], oe = /* @__PURE__ */ k({
  __name: "KpiTableRow",
  props: {
    item: {},
    level: {},
    selectedItems: {},
    showSelection: { type: Boolean }
  },
  emits: ["toggle-select"],
  setup(t, { emit: n }) {
    K();
    const { t: l } = R("kpi"), e = t, u = n, r = O(!1), m = h(() => e.item.type === "Folder"), g = h(() => e.item.children?.length > 0), f = h(() => e.item.children || []), x = h(
      () => m.value ? e.item.name : e.item.caption || e.item.name || "Unknown KPI"
    ), C = () => {
      e.item.children && e.item.children.length > 0 && (r.value = !r.value);
    }, T = h(() => {
      const a = e.selectedItems || [];
      return !m.value && a.includes(e.item.name);
    }), $ = () => {
      m.value || u("toggle-select", e.item.name);
    };
    return (a, i) => {
      const p = L("KpiTableRow", !0);
      return s(), o(S, null, [
        d("tr", {
          class: G({
            "folder-row": m.value,
            "kpi-row": !m.value,
            expandable: g.value,
            expanded: r.value,
            selected: T.value
          }),
          onClick: C
        }, [
          t.showSelection ? (s(), o("td", {
            key: 0,
            class: "selection-cell",
            onClick: i[0] || (i[0] = M(() => {
            }, ["stop"]))
          }, [
            m.value ? b("", !0) : (s(), o("input", {
              key: 0,
              type: "checkbox",
              checked: T.value,
              onChange: $
            }, null, 40, ne))
          ])) : b("", !0),
          d("td", {
            style: U({ paddingLeft: `${t.level * 20 + 12}px` })
          }, [
            g.value ? (s(), o("span", le, c(r.value ? "▼" : "▶"), 1)) : b("", !0),
            d("span", null, c(x.value), 1),
            g.value && !m.value ? (s(), o("span", se, "(" + c(f.value.length) + ")", 1)) : b("", !0)
          ], 4),
          m.value ? (s(), o("td", {
            key: 1,
            colspan: (t.showSelection, 4),
            class: "folder-cell"
          }, c(v(l)("Table.items", { count: f.value.length })), 9, ae)) : (s(), o(S, { key: 2 }, [
            w(Y, {
              value: e.item.value
            }, null, 8, ["value"]),
            w(Z, {
              goal: e.item.goal
            }, null, 8, ["goal"]),
            w(J, {
              status: e.item.status
            }, null, 8, ["status"]),
            w(te, {
              trend: e.item.trend
            }, null, 8, ["trend"])
          ], 64))
        ], 2),
        g.value && r.value ? (s(!0), o(S, { key: 0 }, P(f.value, (_, y) => (s(), I(p, {
          key: y,
          item: _,
          level: t.level + 1,
          "selected-items": t.selectedItems,
          "show-selection": t.showSelection,
          onToggleSelect: i[1] || (i[1] = (F) => a.$emit("toggle-select", F))
        }, null, 8, ["item", "level", "selected-items", "show-selection"]))), 128)) : b("", !0)
      ], 64);
    };
  }
}), B = (t, n) => {
  const l = t.__vccOpts || t;
  for (const [e, u] of n)
    l[e] = u;
  return l;
}, ce = /* @__PURE__ */ B(oe, [["__scopeId", "data-v-38e1b373"]]), re = { class: "va-table" }, ue = {
  key: 0,
  class: "selection-header"
}, ie = ["checked", "indeterminate"], de = /* @__PURE__ */ k({
  __name: "KpiTable",
  props: {
    tableData: {},
    selectedItems: {},
    showSelection: { type: Boolean }
  },
  emits: ["update:selectedItems"],
  setup(t, { emit: n }) {
    const { t: l } = R("kpi"), e = t, u = n, r = O(/* @__PURE__ */ new Set()), m = (a) => {
      console.log("Extracting KPI names from items:", a);
      const i = [], p = (_) => {
        _.forEach((y) => {
          y.type === "KPI" && i.push(y.name), y.children?.length > 0 && p(y.children);
        });
      };
      return a && a.length > 0 && p(a), i;
    }, g = h(() => m(e.tableData)), f = h(() => {
      const a = e.selectedItems || [];
      return g.value.length > 0 && g.value.every((i) => a.includes(i));
    }), x = h(() => {
      console.log("All KPI Names:", g.value);
      const a = e.selectedItems || [], i = g.value.filter((p) => a.includes(p)).length;
      return i > 0 && i < g.value.length;
    }), C = (a) => {
      r.value.has(a) ? r.value.delete(a) : r.value.add(a);
    }, T = (a) => {
      const p = [...e.selectedItems || []], _ = p.indexOf(a);
      _ === -1 ? p.push(a) : p.splice(_, 1), u("update:selectedItems", p);
    }, $ = () => {
      f.value ? u("update:selectedItems", []) : u("update:selectedItems", [...g.value]);
    };
    return (a, i) => (s(), o("table", re, [
      d("thead", null, [
        d("tr", null, [
          t.showSelection ? (s(), o("th", ue, [
            d("input", {
              type: "checkbox",
              checked: f.value,
              indeterminate: x.value,
              onChange: $
            }, null, 40, ie)
          ])) : b("", !0),
          d("th", null, c(v(l)("Table.name")), 1),
          d("th", null, c(v(l)("Table.value")), 1),
          d("th", null, c(v(l)("Table.goal")), 1),
          d("th", null, c(v(l)("Table.status")), 1),
          d("th", null, c(v(l)("Table.trend")), 1)
        ])
      ]),
      d("tbody", null, [
        (s(!0), o(S, null, P(t.tableData, (p, _) => (s(), I(ce, {
          key: _,
          item: p,
          level: 0,
          "selected-items": t.selectedItems,
          "show-selection": t.showSelection,
          onToggleExpand: C,
          onToggleSelect: T
        }, null, 8, ["item", "selected-items", "show-selection"]))), 128))
      ])
    ]));
  }
}), me = /* @__PURE__ */ B(de, [["__scopeId", "data-v-757d5256"]]), pe = { name: "Name", value: "Wert", goal: "Ziel", status: "Status", trend: "Trend", items_one: "{{count}} Eintrag", items_other: "{{count}} Einträge" }, ve = {
  Table: pe
}, he = { name: "Name", value: "Value", goal: "Goal", status: "Status", trend: "Trend", items_one: "{{count}} item", items_other: "{{count}} items" }, ge = {
  Table: he
};
var _e = Object.getOwnPropertyDescriptor, fe = (t, n, l, e) => {
  for (var u = e > 1 ? void 0 : e ? _e(n, l) : n, r = t.length - 1, m; r >= 0; r--)
    (m = t[r]) && (u = m(u) || u);
  return u;
};
const z = "kpi";
let E = class {
  namespace = z;
  resources = {
    de: ve,
    en: ge
  };
};
E = fe([
  W({
    service: ["Translations"],
    properties: { "i18n.namespace": z }
  })
], E);
const ye = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KpiTable: me,
  get KpiTranslations() {
    return E;
  }
}, Symbol.toStringTag, { value: "Module" })), V = "org.eclipse.daanse.board.app.ui.vue.common.kpi", be = "0.0.1-next.1";
async function Ie(t) {
  const n = globalThis.__tsm__;
  if (!n)
    throw new Error(`${V}: tsm runtime is not initialized`);
  n.register(V, ye, be, "ui.vue.common.kpi"), await void 0;
}
async function xe(t) {
  await void 0;
}
export {
  me as KpiTable,
  E as KpiTranslations,
  Ie as activate,
  xe as deactivate
};
