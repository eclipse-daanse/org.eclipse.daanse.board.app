(function(){var i="ui.vue.common.kpi",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".folder-row[data-v-dfe548f6]{background-color:var(--color-raised);font-weight:500}.expandable[data-v-dfe548f6]{cursor:pointer}.expandable[data-v-dfe548f6]:hover{background-color:var(--color-raised)}.expanded[data-v-dfe548f6]{background-color:color-mix(in srgb,var(--color-accent) 16%,transparent)}.expand-icon[data-v-dfe548f6]{width:16px;margin-right:8px;font-size:12px}.folder-cell[data-v-dfe548f6]{color:var(--color-dim);text-align:right;font-style:italic}.child-count[data-v-dfe548f6]{margin-left:8px;font-size:.875em;color:var(--color-dim)}.selection-cell[data-v-dfe548f6]{width:40px;text-align:center;padding:8px 4px}.selected[data-v-dfe548f6]{background-color:color-mix(in srgb,var(--color-accent) 16%,transparent)}.va-table[data-v-b719739e]{width:100%;border-collapse:collapse;border:1px solid var(--color-divider)}.kpi-table th[data-v-b719739e]{background-color:var(--color-raised);padding:12px;text-align:left;border-bottom:2px solid var(--color-divider);font-weight:600}.kpi-table td[data-v-b719739e]{padding:8px 12px;border-bottom:1px solid var(--color-divider)}.kpi-table tr[data-v-b719739e]:hover{background-color:var(--color-bg)}.selection-header[data-v-b719739e]{width:40px;text-align:center}\n";})();
import { defineComponent as y, computed as p, createElementBlock as a, openBlock as s, createElementVNode as r, toDisplayString as v, inject as K, resolveComponent as C, createBlock as x, unref as k, ref as E, Fragment as w, createCommentVNode as _, normalizeClass as A, withModifiers as L, normalizeStyle as j, createVNode as b, renderList as B } from "vue";
const D = /* @__PURE__ */ y({
  __name: "KpiValueCell",
  props: {
    value: {}
  },
  setup(t) {
    const l = t, e = p(() => l.value == null ? "-" : typeof l.value == "number" ? l.value.toLocaleString() : l.value.toString());
    return (c, u) => (s(), a("td", null, [
      r("span", null, v(e.value), 1)
    ]));
  }
}), O = /* @__PURE__ */ y({
  __name: "KpiGoalCell",
  props: {
    goal: {}
  },
  setup(t) {
    const l = t, e = p(() => l.goal == null ? "-" : typeof l.goal == "number" ? l.goal.toLocaleString() : l.goal.toString());
    return (c, u) => (s(), a("td", null, [
      r("span", null, v(e.value), 1)
    ]));
  }
}), P = { key: 0 }, z = { key: 1 }, F = /* @__PURE__ */ y({
  __name: "KpiStatusCell",
  props: {
    status: {}
  },
  setup(t) {
    const l = t, e = p(() => l.status == null ? null : typeof l.status == "string" ? parseInt(l.status) : l.status), c = K("statusVisualType", "badge");
    return (u, m) => {
      const i = C("VaBadge");
      return s(), a("td", null, [
        k(c) === "Lights" ? (s(), a("span", P, v(e.value > 0.5 ? "🟢" : "🛑"), 1)) : k(c) === "Emoji" ? (s(), a("span", z, v(e.value > 0.5 ? "😊" : "☹️"), 1)) : (s(), x(i, {
          key: 2,
          color: e.value > 0.5 ? "success" : "danger",
          text: e.value
        }, null, 8, ["color", "text"]))
      ]);
    };
  }
}), G = { key: 0 }, M = { key: 1 }, U = { key: 2 }, Y = /* @__PURE__ */ y({
  __name: "KpiTrendCell",
  props: {
    trend: {}
  },
  setup(t) {
    const l = t, e = p(() => l.trend == null ? null : typeof l.trend == "string" ? parseInt(l.trend) : l.trend), c = K("trendVisualType", "badge");
    return (u, m) => {
      const i = C("VaBadge");
      return s(), a("td", null, [
        k(c) === "Chart" ? (s(), a("span", G, v(e.value > 0.5 ? "📈" : "📉"), 1)) : k(c) === "Emoji" ? (s(), a("span", M, v(e.value > 0.5 ? "😊" : "☹️"), 1)) : k(c) === "Arrow" ? (s(), a("span", U, v(e.value > 0.5 ? "⬆️" : "⬇️"), 1)) : (s(), x(i, {
          key: 3,
          color: e.value > 0.5 ? "success" : "danger",
          text: e.value
        }, null, 8, ["color", "text"]))
      ]);
    };
  }
}), q = ["checked"], H = {
  key: 0,
  class: "expand-icon"
}, J = {
  key: 1,
  class: "child-count"
}, Q = ["colspan"], W = /* @__PURE__ */ y({
  __name: "KpiTableRow",
  props: {
    item: {},
    level: {},
    selectedItems: {},
    showSelection: { type: Boolean }
  },
  emits: ["toggle-select"],
  setup(t, { emit: l }) {
    const e = t, c = l, u = E(!1), m = p(() => e.item.type === "Folder"), i = p(() => e.item.children?.length > 0), h = p(() => e.item.children || []), I = p(
      () => m.value ? e.item.name : e.item.caption || e.item.name || "Unknown KPI"
    ), T = () => {
      e.item.children && e.item.children.length > 0 && (u.value = !u.value);
    }, S = p(() => {
      const o = e.selectedItems || [];
      return !m.value && o.includes(e.item.name);
    }), V = () => {
      m.value || c("toggle-select", e.item.name);
    };
    return (o, n) => {
      const d = C("KpiTableRow", !0);
      return s(), a(w, null, [
        r("tr", {
          class: A({
            "folder-row": m.value,
            "kpi-row": !m.value,
            expandable: i.value,
            expanded: u.value,
            selected: S.value
          }),
          onClick: T
        }, [
          t.showSelection ? (s(), a("td", {
            key: 0,
            class: "selection-cell",
            onClick: n[0] || (n[0] = L(() => {
            }, ["stop"]))
          }, [
            m.value ? _("", !0) : (s(), a("input", {
              key: 0,
              type: "checkbox",
              checked: S.value,
              onChange: V
            }, null, 40, q))
          ])) : _("", !0),
          r("td", {
            style: j({ paddingLeft: `${t.level * 20 + 12}px` })
          }, [
            i.value ? (s(), a("span", H, v(u.value ? "▼" : "▶"), 1)) : _("", !0),
            r("span", null, v(I.value), 1),
            i.value && !m.value ? (s(), a("span", J, "(" + v(h.value.length) + ")", 1)) : _("", !0)
          ], 4),
          m.value ? (s(), a("td", {
            key: 1,
            colspan: (t.showSelection, 4),
            class: "folder-cell"
          }, v(h.value.length) + " items", 9, Q)) : (s(), a(w, { key: 2 }, [
            b(D, {
              value: e.item.value
            }, null, 8, ["value"]),
            b(O, {
              goal: e.item.goal
            }, null, 8, ["goal"]),
            b(F, {
              status: e.item.status
            }, null, 8, ["status"]),
            b(Y, {
              trend: e.item.trend
            }, null, 8, ["trend"])
          ], 64))
        ], 2),
        i.value && u.value ? (s(!0), a(w, { key: 0 }, B(h.value, (g, f) => (s(), x(d, {
          key: f,
          item: g,
          level: t.level + 1,
          "selected-items": t.selectedItems,
          "show-selection": t.showSelection,
          onToggleSelect: n[1] || (n[1] = (R) => o.$emit("toggle-select", R))
        }, null, 8, ["item", "level", "selected-items", "show-selection"]))), 128)) : _("", !0)
      ], 64);
    };
  }
}), N = (t, l) => {
  const e = t.__vccOpts || t;
  for (const [c, u] of l)
    e[c] = u;
  return e;
}, X = /* @__PURE__ */ N(W, [["__scopeId", "data-v-dfe548f6"]]), Z = { class: "va-table" }, ee = {
  key: 0,
  class: "selection-header"
}, te = ["checked", "indeterminate"], le = /* @__PURE__ */ y({
  __name: "KpiTable",
  props: {
    tableData: {},
    selectedItems: {},
    showSelection: { type: Boolean }
  },
  emits: ["update:selectedItems"],
  setup(t, { emit: l }) {
    const e = t, c = l, u = E(/* @__PURE__ */ new Set()), m = (o) => {
      console.log("Extracting KPI names from items:", o);
      const n = [], d = (g) => {
        g.forEach((f) => {
          f.type === "KPI" && n.push(f.name), f.children?.length > 0 && d(f.children);
        });
      };
      return o && o.length > 0 && d(o), n;
    }, i = p(() => m(e.tableData)), h = p(() => {
      const o = e.selectedItems || [];
      return i.value.length > 0 && i.value.every((n) => o.includes(n));
    }), I = p(() => {
      console.log("All KPI Names:", i.value);
      const o = e.selectedItems || [], n = i.value.filter((d) => o.includes(d)).length;
      return n > 0 && n < i.value.length;
    }), T = (o) => {
      u.value.has(o) ? u.value.delete(o) : u.value.add(o);
    }, S = (o) => {
      const d = [...e.selectedItems || []], g = d.indexOf(o);
      g === -1 ? d.push(o) : d.splice(g, 1), c("update:selectedItems", d);
    }, V = () => {
      h.value ? c("update:selectedItems", []) : c("update:selectedItems", [...i.value]);
    };
    return (o, n) => (s(), a("table", Z, [
      r("thead", null, [
        r("tr", null, [
          t.showSelection ? (s(), a("th", ee, [
            r("input", {
              type: "checkbox",
              checked: h.value,
              indeterminate: I.value,
              onChange: V
            }, null, 40, te)
          ])) : _("", !0),
          n[0] || (n[0] = r("th", null, "Name", -1)),
          n[1] || (n[1] = r("th", null, "Value", -1)),
          n[2] || (n[2] = r("th", null, "Goal", -1)),
          n[3] || (n[3] = r("th", null, "Status", -1)),
          n[4] || (n[4] = r("th", null, "Trend", -1))
        ])
      ]),
      r("tbody", null, [
        (s(!0), a(w, null, B(t.tableData, (d, g) => (s(), x(X, {
          key: g,
          item: d,
          level: 0,
          "selected-items": t.selectedItems,
          "show-selection": t.showSelection,
          onToggleExpand: T,
          onToggleSelect: S
        }, null, 8, ["item", "selected-items", "show-selection"]))), 128))
      ])
    ]));
  }
}), ne = /* @__PURE__ */ N(le, [["__scopeId", "data-v-b719739e"]]), se = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KpiTable: ne
}, Symbol.toStringTag, { value: "Module" })), $ = "org.eclipse.daanse.board.app.ui.vue.common.kpi", oe = "0.0.1-next.1";
async function ce(t) {
  const l = globalThis.__tsm__;
  if (!l)
    throw new Error(`${$}: tsm runtime is not initialized`);
  l.register($, se, oe, "ui.vue.common.kpi"), await void 0;
}
async function ue(t) {
  await void 0;
}
export {
  ne as KpiTable,
  ce as activate,
  ue as deactivate
};
