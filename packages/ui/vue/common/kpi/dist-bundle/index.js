(function(){var i="ui.vue.common.kpi",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".folder-row[data-v-dfe548f6]{background-color:var(--color-raised);font-weight:500}.expandable[data-v-dfe548f6]{cursor:pointer}.expandable[data-v-dfe548f6]:hover{background-color:var(--color-raised)}.expanded[data-v-dfe548f6]{background-color:color-mix(in srgb,var(--color-accent) 16%,transparent)}.expand-icon[data-v-dfe548f6]{width:16px;margin-right:8px;font-size:12px}.folder-cell[data-v-dfe548f6]{color:var(--color-dim);text-align:right;font-style:italic}.child-count[data-v-dfe548f6]{margin-left:8px;font-size:.875em;color:var(--color-dim)}.selection-cell[data-v-dfe548f6]{width:40px;text-align:center;padding:8px 4px}.selected[data-v-dfe548f6]{background-color:color-mix(in srgb,var(--color-accent) 16%,transparent)}.va-table[data-v-b719739e]{width:100%;border-collapse:collapse;border:1px solid var(--color-divider)}.kpi-table th[data-v-b719739e]{background-color:var(--color-raised);padding:12px;text-align:left;border-bottom:2px solid var(--color-divider);font-weight:600}.kpi-table td[data-v-b719739e]{padding:8px 12px;border-bottom:1px solid var(--color-divider)}.kpi-table tr[data-v-b719739e]:hover{background-color:var(--color-bg)}.selection-header[data-v-b719739e]{width:40px;text-align:center}\n";})();
import { defineComponent as k, computed as p, createElementBlock as a, openBlock as s, createElementVNode as i, toDisplayString as d, inject as K, createBlock as I, unref as g, withCtx as V, createTextVNode as E, ref as N, resolveComponent as L, Fragment as b, createCommentVNode as y, normalizeClass as j, withModifiers as O, normalizeStyle as P, createVNode as w, renderList as R } from "vue";
import { DChip as A } from "org.eclipse.daanse.board.app.ui.vue.controls";
const z = /* @__PURE__ */ k({
  __name: "KpiValueCell",
  props: {
    value: {}
  },
  setup(t) {
    const l = t, e = p(() => l.value == null ? "-" : typeof l.value == "number" ? l.value.toLocaleString() : l.value.toString());
    return (c, u) => (s(), a("td", null, [
      i("span", null, d(e.value), 1)
    ]));
  }
}), F = /* @__PURE__ */ k({
  __name: "KpiGoalCell",
  props: {
    goal: {}
  },
  setup(t) {
    const l = t, e = p(() => l.goal == null ? "-" : typeof l.goal == "number" ? l.goal.toLocaleString() : l.goal.toString());
    return (c, u) => (s(), a("td", null, [
      i("span", null, d(e.value), 1)
    ]));
  }
}), G = { key: 0 }, M = { key: 1 }, U = /* @__PURE__ */ k({
  __name: "KpiStatusCell",
  props: {
    status: {}
  },
  setup(t) {
    const l = t, e = p(() => l.status == null ? null : typeof l.status == "string" ? parseInt(l.status) : l.status), c = K("statusVisualType", "badge");
    return (u, m) => (s(), a("td", null, [
      g(c) === "Lights" ? (s(), a("span", G, d(e.value > 0.5 ? "🟢" : "🛑"), 1)) : g(c) === "Emoji" ? (s(), a("span", M, d(e.value > 0.5 ? "😊" : "☹️"), 1)) : (s(), I(g(A), {
        key: 2,
        tone: e.value > 0.5 ? "ok" : "err",
        numeric: ""
      }, {
        default: V(() => [
          E(d(e.value), 1)
        ]),
        _: 1
      }, 8, ["tone"]))
    ]));
  }
}), Y = { key: 0 }, q = { key: 1 }, H = { key: 2 }, J = /* @__PURE__ */ k({
  __name: "KpiTrendCell",
  props: {
    trend: {}
  },
  setup(t) {
    const l = t, e = p(() => l.trend == null ? null : typeof l.trend == "string" ? parseInt(l.trend) : l.trend), c = K("trendVisualType", "badge");
    return (u, m) => (s(), a("td", null, [
      g(c) === "Chart" ? (s(), a("span", Y, d(e.value > 0.5 ? "📈" : "📉"), 1)) : g(c) === "Emoji" ? (s(), a("span", q, d(e.value > 0.5 ? "😊" : "☹️"), 1)) : g(c) === "Arrow" ? (s(), a("span", H, d(e.value > 0.5 ? "⬆️" : "⬇️"), 1)) : (s(), I(g(A), {
        key: 3,
        tone: e.value > 0.5 ? "ok" : "err",
        numeric: ""
      }, {
        default: V(() => [
          E(d(e.value), 1)
        ]),
        _: 1
      }, 8, ["tone"]))
    ]));
  }
}), Q = ["checked"], W = {
  key: 0,
  class: "expand-icon"
}, X = {
  key: 1,
  class: "child-count"
}, Z = ["colspan"], ee = /* @__PURE__ */ k({
  __name: "KpiTableRow",
  props: {
    item: {},
    level: {},
    selectedItems: {},
    showSelection: { type: Boolean }
  },
  emits: ["toggle-select"],
  setup(t, { emit: l }) {
    const e = t, c = l, u = N(!1), m = p(() => e.item.type === "Folder"), v = p(() => e.item.children?.length > 0), f = p(() => e.item.children || []), x = p(
      () => m.value ? e.item.name : e.item.caption || e.item.name || "Unknown KPI"
    ), T = () => {
      e.item.children && e.item.children.length > 0 && (u.value = !u.value);
    }, S = p(() => {
      const o = e.selectedItems || [];
      return !m.value && o.includes(e.item.name);
    }), C = () => {
      m.value || c("toggle-select", e.item.name);
    };
    return (o, n) => {
      const r = L("KpiTableRow", !0);
      return s(), a(b, null, [
        i("tr", {
          class: j({
            "folder-row": m.value,
            "kpi-row": !m.value,
            expandable: v.value,
            expanded: u.value,
            selected: S.value
          }),
          onClick: T
        }, [
          t.showSelection ? (s(), a("td", {
            key: 0,
            class: "selection-cell",
            onClick: n[0] || (n[0] = O(() => {
            }, ["stop"]))
          }, [
            m.value ? y("", !0) : (s(), a("input", {
              key: 0,
              type: "checkbox",
              checked: S.value,
              onChange: C
            }, null, 40, Q))
          ])) : y("", !0),
          i("td", {
            style: P({ paddingLeft: `${t.level * 20 + 12}px` })
          }, [
            v.value ? (s(), a("span", W, d(u.value ? "▼" : "▶"), 1)) : y("", !0),
            i("span", null, d(x.value), 1),
            v.value && !m.value ? (s(), a("span", X, "(" + d(f.value.length) + ")", 1)) : y("", !0)
          ], 4),
          m.value ? (s(), a("td", {
            key: 1,
            colspan: (t.showSelection, 4),
            class: "folder-cell"
          }, d(f.value.length) + " items", 9, Z)) : (s(), a(b, { key: 2 }, [
            w(z, {
              value: e.item.value
            }, null, 8, ["value"]),
            w(F, {
              goal: e.item.goal
            }, null, 8, ["goal"]),
            w(U, {
              status: e.item.status
            }, null, 8, ["status"]),
            w(J, {
              trend: e.item.trend
            }, null, 8, ["trend"])
          ], 64))
        ], 2),
        v.value && u.value ? (s(!0), a(b, { key: 0 }, R(f.value, (h, _) => (s(), I(r, {
          key: _,
          item: h,
          level: t.level + 1,
          "selected-items": t.selectedItems,
          "show-selection": t.showSelection,
          onToggleSelect: n[1] || (n[1] = (D) => o.$emit("toggle-select", D))
        }, null, 8, ["item", "level", "selected-items", "show-selection"]))), 128)) : y("", !0)
      ], 64);
    };
  }
}), B = (t, l) => {
  const e = t.__vccOpts || t;
  for (const [c, u] of l)
    e[c] = u;
  return e;
}, te = /* @__PURE__ */ B(ee, [["__scopeId", "data-v-dfe548f6"]]), le = { class: "va-table" }, ne = {
  key: 0,
  class: "selection-header"
}, se = ["checked", "indeterminate"], oe = /* @__PURE__ */ k({
  __name: "KpiTable",
  props: {
    tableData: {},
    selectedItems: {},
    showSelection: { type: Boolean }
  },
  emits: ["update:selectedItems"],
  setup(t, { emit: l }) {
    const e = t, c = l, u = N(/* @__PURE__ */ new Set()), m = (o) => {
      console.log("Extracting KPI names from items:", o);
      const n = [], r = (h) => {
        h.forEach((_) => {
          _.type === "KPI" && n.push(_.name), _.children?.length > 0 && r(_.children);
        });
      };
      return o && o.length > 0 && r(o), n;
    }, v = p(() => m(e.tableData)), f = p(() => {
      const o = e.selectedItems || [];
      return v.value.length > 0 && v.value.every((n) => o.includes(n));
    }), x = p(() => {
      console.log("All KPI Names:", v.value);
      const o = e.selectedItems || [], n = v.value.filter((r) => o.includes(r)).length;
      return n > 0 && n < v.value.length;
    }), T = (o) => {
      u.value.has(o) ? u.value.delete(o) : u.value.add(o);
    }, S = (o) => {
      const r = [...e.selectedItems || []], h = r.indexOf(o);
      h === -1 ? r.push(o) : r.splice(h, 1), c("update:selectedItems", r);
    }, C = () => {
      f.value ? c("update:selectedItems", []) : c("update:selectedItems", [...v.value]);
    };
    return (o, n) => (s(), a("table", le, [
      i("thead", null, [
        i("tr", null, [
          t.showSelection ? (s(), a("th", ne, [
            i("input", {
              type: "checkbox",
              checked: f.value,
              indeterminate: x.value,
              onChange: C
            }, null, 40, se)
          ])) : y("", !0),
          n[0] || (n[0] = i("th", null, "Name", -1)),
          n[1] || (n[1] = i("th", null, "Value", -1)),
          n[2] || (n[2] = i("th", null, "Goal", -1)),
          n[3] || (n[3] = i("th", null, "Status", -1)),
          n[4] || (n[4] = i("th", null, "Trend", -1))
        ])
      ]),
      i("tbody", null, [
        (s(!0), a(b, null, R(t.tableData, (r, h) => (s(), I(te, {
          key: h,
          item: r,
          level: 0,
          "selected-items": t.selectedItems,
          "show-selection": t.showSelection,
          onToggleExpand: T,
          onToggleSelect: S
        }, null, 8, ["item", "selected-items", "show-selection"]))), 128))
      ])
    ]));
  }
}), ae = /* @__PURE__ */ B(oe, [["__scopeId", "data-v-b719739e"]]), ce = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KpiTable: ae
}, Symbol.toStringTag, { value: "Module" })), $ = "org.eclipse.daanse.board.app.ui.vue.common.kpi", ue = "0.0.1-next.1";
async function de(t) {
  const l = globalThis.__tsm__;
  if (!l)
    throw new Error(`${$}: tsm runtime is not initialized`);
  l.register($, ce, ue, "ui.vue.common.kpi"), await void 0;
}
async function me(t) {
  await void 0;
}
export {
  ae as KpiTable,
  de as activate,
  me as deactivate
};
