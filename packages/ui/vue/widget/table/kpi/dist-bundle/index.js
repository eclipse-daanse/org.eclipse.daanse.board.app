(function(){var i="ui.vue.widget.table.kpi",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".filters[data-v-f4b39436]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:1rem;padding:1rem;flex-grow:0}.table_container[data-v-f4b39436]{display:flex;flex-direction:column;height:100%}.table_container .pagination[data-v-f4b39436]{flex-grow:0;padding:1rem;display:grid;grid-template-columns:1fr 1fr 1fr;justify-items:center;align-items:end}.table_container .pagination .page_input[data-v-f4b39436]{justify-self:start}.table_container .table[data-v-f4b39436]{flex-grow:1;flex-shrink:1}.loading[data-v-f4b39436]{display:flex;height:100%}.settings-container[data-v-21aafe5f]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}\n";})();
import { WidgetActionInterfaceImpl as L, EVENT_ACTIONS_REGISTRY as z, PayloadImpl as D, EVENT_REGISTRY_ID as J, EVENT_ACTIONS_REGISTRY_ID as Q } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as X, deactivate as ee, component as te, inject as R } from "@eclipse-daanse/tsm";
import { defineComponent as F, toRefs as ae, inject as W, onUnmounted as le, ref as O, watch as j, onMounted as oe, computed as _, provide as H, createElementBlock as re, openBlock as M, withModifiers as ie, createVNode as h, unref as N, useModel as ne, markRaw as se, resolveComponent as y, createBlock as de, withCtx as S, createElementVNode as ue } from "vue";
import { useVariableRepository as ce, useDatasourceRepository as pe, VariableWrapper as T } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as ve } from "vue-router";
import { KpiTable as fe } from "org.eclipse.daanse.board.app.ui.vue.common.kpi";
import { WidgetAction as he } from "org.eclipse.daanse.board.app.lib.events";
import { VariableInput as me } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as Te } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: ge } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), _e = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2025.5C22.5%2023.8431%2023.8431%2022.5%2025.5%2022.5H34.5C36.1569%2022.5%2037.5%2023.8431%2037.5%2025.5V34.5C37.5%2036.1569%2036.1569%2037.5%2034.5%2037.5H25.5C23.8431%2037.5%2022.5%2036.1569%2022.5%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2048C22.5%2046.3431%2023.8431%2045%2025.5%2045H34.5C36.1569%2045%2037.5%2046.3431%2037.5%2048V94.5C37.5%2096.1569%2036.1569%2097.5%2034.5%2097.5H25.5C23.8431%2097.5%2022.5%2096.1569%2022.5%2094.5V48Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2025.5C45%2023.8431%2046.3431%2022.5%2048%2022.5H94.5C96.1569%2022.5%2097.5%2023.8431%2097.5%2025.5V34.5C97.5%2036.1569%2096.1569%2037.5%2094.5%2037.5H48C46.3431%2037.5%2045%2036.1569%2045%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2048C45%2046.3431%2046.3431%2045%2048%2045H94.5C96.1569%2045%2097.5%2046.3431%2097.5%2048V94.5C97.5%2096.1569%2096.1569%2097.5%2094.5%2097.5H48C46.3431%2097.5%2045%2096.1569%2045%2094.5V48Z'%20fill='%23606060'/%3e%3c/svg%3e";
var Ve = Object.defineProperty, we = Object.getOwnPropertyDescriptor, Ce = (n, r, s, e) => {
  for (var t = we(r, s), l = n.length - 1, o; l >= 0; l--)
    (o = n[l]) && (t = o(r, s, t) || t);
  return t && Ve(r, s, t), t;
};
class P extends L {
  refresh() {
    throw new Error("refresh not implemented");
  }
}
Ce([
  he({ eventType: "kpiTable.refresh" })
], P.prototype, "refresh");
const be = /* @__PURE__ */ F({
  __name: "KpiTableWidget",
  props: {
    datasourceId: {},
    config: {},
    id: {}
  },
  setup(n, { expose: r }) {
    const { wrapParameters: s } = ce(), e = n, { datasourceId: t, config: l, id: o } = ae(e), v = W(ge.TINY_EMITTER), d = W(z), V = ve().params.pageid || "";
    class w extends P {
      refresh() {
        B(t.value, t.value);
      }
    }
    const C = new w();
    r(C), le(() => {
      o?.value && d.unregisterInstance(o.value);
    });
    const u = () => {
      o?.value && v.emit("widget:KpiTableWidget:click", {
        type: "widget:KpiTableWidget:click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    }, E = () => {
      o?.value && v.emit("widget:KpiTableWidget:right_click", {
        type: "widget:KpiTableWidget:right_click",
        widgetId: o.value,
        payload: { widgetId: o.value, timestamp: Date.now() }
      });
    }, k = O(null);
    j(t, (a, c) => {
      B(a, c);
    }), oe(() => {
      if (o?.value && d.registerInstance(o.value, C, "KpiTableWidget", V), !l.value) return;
      const a = {
        headerBackground: "var(--color-raised)"
      };
      for (const [c, g] of Object.entries(a)) {
        const f = l.value[c];
        let i = f;
        if (Array.isArray(f) && (i = f[0] || g), i == null)
          l.value[c] = new T(g);
        else if (!(i instanceof T)) if (typeof i == "object" && "value" in i) {
          const p = new T(i.value);
          "variable" in i && (p.variable = i.variable), l.value[c] = p;
        } else
          l.value[c] = new T(i);
      }
    });
    const {
      showParentChild: xe,
      showFolders: Be
    } = s({
      showParentChild: _(() => l.value.showParentChild ?? !1),
      showFolders: _(() => l.value.showFolders ?? !1)
    }), Z = _(() => {
      const a = l.value.statusVisualType;
      return Array.isArray(a) ? a[0] || "Badge" : a || "Badge";
    }), G = _(() => {
      const a = l.value.trendVisualType;
      return Array.isArray(a) ? a[0] || "Badge" : a || "Badge";
    });
    H("statusVisualType", Z), H("trendVisualType", G);
    const { update: B } = pe(t, "DataTable", k), Y = _(() => {
      if (!k.value) return null;
      let a = k.value;
      return (l.value.showFolders ?? !1) || (a = $(a)), (l.value.showParentChild ?? !1) || (a = q(a)), a;
    });
    function $(a) {
      const c = [];
      function g(f) {
        f.forEach((i) => {
          i.type === "Folder" ? g(i.children || []) : c.push(i);
        });
      }
      return g(a), c;
    }
    function q(a) {
      const c = [];
      function g(i) {
        i.forEach((p) => {
          p.type === "Folder" ? c.push({
            ...p,
            children: p.children ? f(p.children) : []
          }) : (c.push({
            ...p,
            children: []
            // Remove children to flatten hierarchy
          }), p.children && p.children.length > 0 && c.push(...f(p.children)));
        });
      }
      function f(i) {
        const p = [];
        return i.forEach((b) => {
          p.push({
            ...b,
            children: []
            // Remove children to flatten hierarchy
          }), b.children && b.children.length > 0 && p.push(...f(b.children));
        }), p;
      }
      return g(a), c;
    }
    return (a, c) => (M(), re("div", {
      class: "w-full h-full",
      onClick: u,
      onContextmenu: ie(E, ["prevent"])
    }, [
      h(N(fe), { tableData: Y.value }, null, 8, ["tableData"])
    ], 32));
  }
}), U = (n, r) => {
  const s = n.__vccOpts || n;
  for (const [e, t] of r)
    s[e] = t;
  return s;
}, ye = /* @__PURE__ */ U(be, [["__scopeId", "data-v-f4b39436"]]), Ie = { class: "settings-container" }, Ee = /* @__PURE__ */ F({
  __name: "KpiTableWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(n) {
    const r = W("i18n"), s = (v) => r ? r.t(v) : v, e = ne(n, "modelValue"), t = ["Emoji", "Arrow", "Chart", "Badge"], l = ["Emoji", "Lights", "Badge"], o = O(!1);
    return j(() => e.value, (v) => {
      v && (v.headerBackground instanceof T || (v.headerBackground = se(new T(v.headerBackground || "#f0f0f0"))));
    }, { immediate: !0, deep: !0 }), (v, d) => {
      const x = y("va-color-input"), V = y("va-select"), w = y("va-checkbox"), C = y("va-collapse");
      return M(), de(C, {
        modelValue: o.value,
        "onUpdate:modelValue": d[5] || (d[5] = (u) => o.value = u),
        header: "Kpi Table Settings",
        icon: "settings"
      }, {
        default: S(() => [
          ue("div", Ie, [
            h(N(me), {
              modelValue: e.value.headerBackground,
              "onUpdate:modelValue": d[0] || (d[0] = (u) => e.value.headerBackground = u),
              label: "Header Color"
            }, {
              default: S(({ value: u, change: E }) => [
                h(x, {
                  class: "text-color",
                  label: "Header Color",
                  "model-value": u,
                  onInput: E
                }, null, 8, ["model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            h(V, {
              modelValue: e.value.trendVisualType,
              "onUpdate:modelValue": d[1] || (d[1] = (u) => e.value.trendVisualType = u),
              options: t,
              placeholder: "Trend Visual Type"
            }, null, 8, ["modelValue"]),
            h(V, {
              modelValue: e.value.statusVisualType,
              "onUpdate:modelValue": d[2] || (d[2] = (u) => e.value.statusVisualType = u),
              options: l,
              placeholder: "Status Visual Type"
            }, null, 8, ["modelValue"]),
            h(w, {
              modelValue: e.value.showFolders,
              "onUpdate:modelValue": d[3] || (d[3] = (u) => e.value.showFolders = u),
              label: s("Show Folders")
            }, null, 8, ["modelValue", "label"]),
            h(w, {
              modelValue: e.value.showParentChild,
              "onUpdate:modelValue": d[4] || (d[4] = (u) => e.value.showParentChild = u),
              label: s("Show Parent-Child")
            }, null, 8, ["modelValue", "label"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), ke = /* @__PURE__ */ U(Ee, [["__scopeId", "data-v-21aafe5f"]]), We = [
  { name: "KpiTable Clicked", type: "click", description: "Triggered when the kpi table widget is clicked", payloadType: D },
  { name: "KpiTable Right Clicked", type: "right_click", description: "Triggered when the kpi table widget is right-clicked", payloadType: D }
];
var Pe = Object.defineProperty, Ke = Object.getOwnPropertyDescriptor, K = (n, r, s, e) => {
  for (var t = e > 1 ? void 0 : e ? Ke(r, s) : r, l = n.length - 1, o; l >= 0; l--)
    (o = n[l]) && (t = (e ? o(r, s, t) : o(t)) || t);
  return e && t && Pe(r, s, t), t;
}, A = (n, r) => (s, e) => r(s, e, n);
const m = "KpiTableWidget";
let I = class {
  constructor(n, r) {
    this.events = n, this.actions = r;
  }
  type = m;
  component = ye;
  settingsComponent = ke;
  supportedDSTypes = ["csv", "rest"];
  icon = _e;
  name = "KpiTable";
  register() {
    this.events.registerWidget(m, We), this.actions.registerWidgetType(m, P, "widget");
  }
  unregister() {
    this.events.unregisterWidget(m), this.actions.unregisterWidgetType(m);
  }
};
K([
  X()
], I.prototype, "register", 1);
K([
  ee()
], I.prototype, "unregister", 1);
I = K([
  te({
    service: [Te],
    properties: { "widget.type": m }
  }),
  A(0, R(J)),
  A(1, R(Q))
], I);
export {
  ye as KpiTableWidget,
  I as KpiTableWidgetProvider,
  ke as KpiTableWidgetSettings
};
