(function(){var i="ui.vue.widget.table.data",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".filters[data-v-5d1e9988]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:1rem;padding:1rem;flex-grow:0}.table_container[data-v-5d1e9988]{display:flex;flex-direction:column;height:100%}.table_container .pagination[data-v-5d1e9988]{flex-grow:0;padding:1rem;display:grid;grid-template-columns:1fr 1fr 1fr;justify-items:center;align-items:end}.table_container .pagination .page_input[data-v-5d1e9988]{justify-self:start}.table_container .table[data-v-5d1e9988]{flex-grow:1;flex-shrink:1}.loading[data-v-5d1e9988]{display:flex;height:100%}.settings-container[data-v-50bce613]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}\n";})();
import { WidgetActionInterfaceImpl as Q, EVENT_ACTIONS_REGISTRY as X, PayloadImpl as g, EVENT_REGISTRY_ID as ee, EVENT_ACTIONS_REGISTRY_ID as te } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as ae, deactivate as ie, component as le, inject as D } from "@eclipse-daanse/tsm";
import { defineComponent as V, toRefs as oe, inject as I, onUnmounted as re, ref as x, watch as E, onMounted as ne, computed as ce, resolveComponent as h, createElementBlock as de, openBlock as B, withModifiers as se, createVNode as f, normalizeStyle as ge, unref as S, useModel as pe, markRaw as ue, createBlock as me, withCtx as W, createElementVNode as ve } from "vue";
import { useVariableRepository as we, useDatasourceRepository as _e, VariableWrapper as u } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as he } from "vue-router";
import { WidgetAction as Ce } from "org.eclipse.daanse.board.app.lib.events";
import { VariableInput as Te } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as ke } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: fe } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), ye = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2025.5C22.5%2023.8431%2023.8431%2022.5%2025.5%2022.5H34.5C36.1569%2022.5%2037.5%2023.8431%2037.5%2025.5V34.5C37.5%2036.1569%2036.1569%2037.5%2034.5%2037.5H25.5C23.8431%2037.5%2022.5%2036.1569%2022.5%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2048C22.5%2046.3431%2023.8431%2045%2025.5%2045H34.5C36.1569%2045%2037.5%2046.3431%2037.5%2048V94.5C37.5%2096.1569%2036.1569%2097.5%2034.5%2097.5H25.5C23.8431%2097.5%2022.5%2096.1569%2022.5%2094.5V48Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2025.5C45%2023.8431%2046.3431%2022.5%2048%2022.5H94.5C96.1569%2022.5%2097.5%2023.8431%2097.5%2025.5V34.5C97.5%2036.1569%2096.1569%2037.5%2094.5%2037.5H48C46.3431%2037.5%2045%2036.1569%2045%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2048C45%2046.3431%2046.3431%2045%2048%2045H94.5C96.1569%2045%2097.5%2046.3431%2097.5%2048V94.5C97.5%2096.1569%2096.1569%2097.5%2094.5%2097.5H48C46.3431%2097.5%2045%2096.1569%2045%2094.5V48Z'%20fill='%23606060'/%3e%3c/svg%3e";
var be = Object.defineProperty, De = Object.getOwnPropertyDescriptor, Ie = (o, i, r, n) => {
  for (var a = De(i, r), c = o.length - 1, t; c >= 0; c--)
    (t = o[c]) && (a = t(i, r, a) || a);
  return a && be(i, r, a), a;
};
class C extends Q {
  refresh() {
    throw new Error("refresh not implemented");
  }
}
Ie([
  Ce({ eventType: "dataTable.refresh" })
], C.prototype, "refresh");
const We = /* @__PURE__ */ V({
  __name: "DataTableWidget",
  props: {
    datasourceId: {},
    config: {},
    id: {}
  },
  setup(o, { expose: i }) {
    const { wrapParameters: r } = we(), n = o, { datasourceId: a, config: c, id: t } = oe(n), d = I(fe.TINY_EMITTER), w = I(X), O = he().params.pageid || "";
    class P extends C {
      refresh() {
        y(a.value, a.value);
      }
    }
    const k = new P();
    i(k), re(() => {
      t?.value && w.unregisterInstance(t.value);
    });
    const M = () => {
      t?.value && d.emit("widget:DataTableWidget:click", {
        type: "widget:DataTableWidget:click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, j = () => {
      t?.value && d.emit("widget:DataTableWidget:right_click", {
        type: "widget:DataTableWidget:right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, N = (e) => {
      t?.value && d.emit("widget:DataTableWidget:row_click", {
        type: "widget:DataTableWidget:row_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), rowId: e }
      });
    }, A = (e) => {
      t?.value && d.emit("widget:DataTableWidget:row_right_click", {
        type: "widget:DataTableWidget:row_right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), rowId: e }
      });
    }, Z = (e) => {
      t?.value && d.emit("widget:DataTableWidget:col_click", {
        type: "widget:DataTableWidget:col_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), colId: e }
      });
    }, $ = (e) => {
      t?.value && d.emit("widget:DataTableWidget:col_right_click", {
        type: "widget:DataTableWidget:col_right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), colId: e }
      });
    }, G = (e, l) => {
      t?.value && d.emit("widget:DataTableWidget:cell_click", {
        type: "widget:DataTableWidget:cell_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), rowId: e, colId: l }
      });
    }, Y = (e, l) => {
      t?.value && d.emit("widget:DataTableWidget:cell_right_click", {
        type: "widget:DataTableWidget:cell_right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), rowId: e, colId: l }
      });
    }, m = x(null);
    E(a, (e, l) => {
      y(e, l);
    }), ne(() => {
      if (t?.value && w.registerInstance(t.value, k, "DataTableWidget", O), !c.value) return;
      const e = c.value.headerBackground;
      if (e == null)
        c.value.headerBackground = new u("var(--color-raised)");
      else if (!(e instanceof u)) if (typeof e == "object" && "value" in e) {
        const l = new u(e.value);
        "variable" in e && (l.variable = e.variable), c.value.headerBackground = l;
      } else
        c.value.headerBackground = new u(e);
    });
    const {
      headerBackground: U
    } = r({
      headerBackground: ce(() => c.value.headerBackground?.value || "var(--color-raised)")
    }), { update: y } = _e(a, "DataTable", m), q = (e) => {
      N(e.itemIndex?.toString() || "");
    }, z = (e) => {
      A(e.itemIndex?.toString() || "");
    }, F = (e, l, s, v) => ({
      onClick: (L) => {
        G(v.toString(), s.key || s.name || "");
      },
      onContextmenu: (L) => {
        Y(v.toString(), s.key || s.name || "");
      }
    }), b = (e) => {
      const l = e.parentElement;
      if (!l) return "";
      const s = Array.prototype.indexOf.call(l.children, e), v = m.value?.items?.[0] ? Object.keys(m.value.items[0]) : [];
      return v[s] ? v[s] : e.textContent?.trim() || "";
    }, J = (e) => {
      const l = e.target.closest("th");
      l && Z(b(l));
    }, K = (e) => {
      const l = e.target.closest("th");
      l && $(b(l));
    };
    return (e, l) => {
      const s = h("va-data-table");
      return B(), de("div", {
        class: "w-full h-full",
        onClick: M,
        onContextmenu: se(j, ["prevent"]),
        onClickCapture: J,
        onContextmenuCapture: K
      }, [
        f(s, {
          class: "table",
          items: m.value ? m.value.items : [],
          "sticky-header": "",
          style: ge(`--va-data-table-thead-background--computed: ${S(U)};`),
          "onRow:click": q,
          "onRow:contextmenu": z,
          "cell-bind": F
        }, null, 8, ["items", "style"])
      ], 32);
    };
  }
}), H = (o, i) => {
  const r = o.__vccOpts || o;
  for (const [n, a] of i)
    r[n] = a;
  return r;
}, Re = /* @__PURE__ */ H(We, [["__scopeId", "data-v-5d1e9988"]]), Ve = { class: "settings-container" }, xe = /* @__PURE__ */ V({
  __name: "DataTableWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = pe(o, "modelValue"), r = x(!1);
    return E(() => i.value, (n) => {
      n && (n.headerBackground instanceof u || (n.headerBackground = ue(new u(n.headerBackground || ""))));
    }, { immediate: !0, deep: !0 }), (n, a) => {
      const c = h("va-color-input"), t = h("va-collapse");
      return B(), me(t, {
        modelValue: r.value,
        "onUpdate:modelValue": a[1] || (a[1] = (d) => r.value = d),
        header: "Data Table Settings",
        icon: "settings"
      }, {
        default: W(() => [
          ve("div", Ve, [
            f(S(Te), {
              modelValue: i.value.headerBackground,
              "onUpdate:modelValue": a[0] || (a[0] = (d) => i.value.headerBackground = d),
              label: "Header Color"
            }, {
              default: W(({ value: d, change: w }) => [
                f(c, {
                  class: "text-color",
                  label: "Header Color",
                  "model-value": d,
                  onInput: w
                }, null, 8, ["model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), Ee = /* @__PURE__ */ H(xe, [["__scopeId", "data-v-50bce613"]]), Be = [
  { name: "DataTable Clicked", type: "click", description: "Triggered when the datatable widget is clicked", payloadType: g },
  { name: "DataTable Right Clicked", type: "right_click", description: "Triggered when the datatable widget is right-clicked", payloadType: g },
  { name: "DataTable Row Clicked", type: "row_click", description: "Triggered when a row is clicked", payloadType: g },
  { name: "DataTable Row Right Clicked", type: "row_right_click", description: "Triggered when a row is right-clicked", payloadType: g },
  { name: "DataTable Column Clicked", type: "col_click", description: "Triggered when a column header is clicked", payloadType: g },
  { name: "DataTable Column Right Clicked", type: "col_right_click", description: "Triggered when a column header is right-clicked", payloadType: g },
  { name: "DataTable Cell Clicked", type: "cell_click", description: "Triggered when a cell is clicked", payloadType: g },
  { name: "DataTable Cell Right Clicked", type: "cell_right_click", description: "Triggered when a cell is right-clicked", payloadType: g }
];
var Se = Object.defineProperty, He = Object.getOwnPropertyDescriptor, T = (o, i, r, n) => {
  for (var a = n > 1 ? void 0 : n ? He(i, r) : i, c = o.length - 1, t; c >= 0; c--)
    (t = o[c]) && (a = (n ? t(i, r, a) : t(a)) || a);
  return n && a && Se(i, r, a), a;
}, R = (o, i) => (r, n) => i(r, n, o);
const p = "DataTableWidget";
let _ = class {
  constructor(o, i) {
    this.events = o, this.actions = i;
  }
  type = p;
  component = Re;
  settingsComponent = Ee;
  supportedDSTypes = ["csv", "rest"];
  icon = ye;
  name = "DataTable";
  register() {
    this.events.registerWidget(p, Be), this.actions.registerWidgetType(p, C, "widget");
  }
  unregister() {
    this.events.unregisterWidget(p), this.actions.unregisterWidgetType(p);
  }
};
T([
  ae()
], _.prototype, "register", 1);
T([
  ie()
], _.prototype, "unregister", 1);
_ = T([
  le({
    service: [ke],
    properties: { "widget.type": p }
  }),
  R(0, D(ee)),
  R(1, D(te))
], _);
export {
  Re as DataTableWidget,
  _ as DataTableWidgetProvider,
  Ee as DataTableWidgetSettings
};
