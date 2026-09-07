(function(){var i="ui.vue.widget.table.data",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".filters[data-v-5d1e9988]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:1rem;padding:1rem;flex-grow:0}.table_container[data-v-5d1e9988]{display:flex;flex-direction:column;height:100%}.table_container .pagination[data-v-5d1e9988]{flex-grow:0;padding:1rem;display:grid;grid-template-columns:1fr 1fr 1fr;justify-items:center;align-items:end}.table_container .pagination .page_input[data-v-5d1e9988]{justify-self:start}.table_container .table[data-v-5d1e9988]{flex-grow:1;flex-shrink:1}.loading[data-v-5d1e9988]{display:flex;height:100%}\n";})();
import { WidgetActionInterfaceImpl as X, EVENT_ACTIONS_REGISTRY as Z, PayloadImpl as p, EVENT_REGISTRY_ID as Y, EVENT_ACTIONS_REGISTRY_ID as z } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as q, deactivate as J, component as Q, inject as b } from "@eclipse-daanse/tsm";
import { defineComponent as ee, toRefs as te, inject as y, onUnmounted as ae, ref as ie, watch as re, onMounted as ne, computed as se, resolveComponent as le, createElementBlock as ce, openBlock as oe, withModifiers as de, createVNode as ge, normalizeStyle as ue, unref as pe } from "vue";
import { useVariableRepository as he, useDatasourceRepository as me, VariableWrapper as h } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as we } from "vue-router";
import { WidgetAction as _e } from "org.eclipse.daanse.board.app.lib.events";
import { BasicEFactory as fe, BasicEPackage as Ce, EPackageRegistry as R, BasicEClass as ve, BasicEReference as De, BasicEObject as Ee } from "@emfts/core";
import { WIDGET_SERVICE_ID as ke } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Te } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Ie = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2025.5C22.5%2023.8431%2023.8431%2022.5%2025.5%2022.5H34.5C36.1569%2022.5%2037.5%2023.8431%2037.5%2025.5V34.5C37.5%2036.1569%2036.1569%2037.5%2034.5%2037.5H25.5C23.8431%2037.5%2022.5%2036.1569%2022.5%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2048C22.5%2046.3431%2023.8431%2045%2025.5%2045H34.5C36.1569%2045%2037.5%2046.3431%2037.5%2048V94.5C37.5%2096.1569%2036.1569%2097.5%2034.5%2097.5H25.5C23.8431%2097.5%2022.5%2096.1569%2022.5%2094.5V48Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2025.5C45%2023.8431%2046.3431%2022.5%2048%2022.5H94.5C96.1569%2022.5%2097.5%2023.8431%2097.5%2025.5V34.5C97.5%2036.1569%2096.1569%2037.5%2094.5%2037.5H48C46.3431%2037.5%2045%2036.1569%2045%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2048C45%2046.3431%2046.3431%2045%2048%2045H94.5C96.1569%2045%2097.5%2046.3431%2097.5%2048V94.5C97.5%2096.1569%2096.1569%2097.5%2094.5%2097.5H48C46.3431%2097.5%2045%2096.1569%2045%2094.5V48Z'%20fill='%23606060'/%3e%3c/svg%3e";
var be = Object.defineProperty, ye = Object.getOwnPropertyDescriptor, Ne = (s, e, i, o) => {
  for (var r = ye(e, i), l = s.length - 1, a; l >= 0; l--)
    (a = s[l]) && (r = a(e, i, r) || r);
  return r && be(e, i, r), r;
};
class f extends X {
  refresh() {
    throw new Error("refresh not implemented");
  }
}
Ne([
  _e({ eventType: "dataTable.refresh" })
], f.prototype, "refresh");
const Re = /* @__PURE__ */ ee({
  __name: "DataTableWidget",
  props: {
    datasourceId: {},
    config: {},
    id: {}
  },
  setup(s, { expose: e }) {
    const { wrapParameters: i } = he(), o = s, { datasourceId: r, config: l, id: a } = te(o), u = y(Te.TINY_EMITTER), D = y(Z), A = we().params.pageid || "";
    class S extends f {
      refresh() {
        k(r.value, r.value);
      }
    }
    const E = new S();
    e(E), ae(() => {
      a?.value && D.unregisterInstance(a.value);
    });
    const B = () => {
      a?.value && u.emit("widget:DataTableWidget:click", {
        type: "widget:DataTableWidget:click",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now() }
      });
    }, W = () => {
      a?.value && u.emit("widget:DataTableWidget:right_click", {
        type: "widget:DataTableWidget:right_click",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now() }
      });
    }, x = (t) => {
      a?.value && u.emit("widget:DataTableWidget:row_click", {
        type: "widget:DataTableWidget:row_click",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), rowId: t }
      });
    }, O = (t) => {
      a?.value && u.emit("widget:DataTableWidget:row_right_click", {
        type: "widget:DataTableWidget:row_right_click",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), rowId: t }
      });
    }, P = (t) => {
      a?.value && u.emit("widget:DataTableWidget:col_click", {
        type: "widget:DataTableWidget:col_click",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), colId: t }
      });
    }, G = (t) => {
      a?.value && u.emit("widget:DataTableWidget:col_right_click", {
        type: "widget:DataTableWidget:col_right_click",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), colId: t }
      });
    }, V = (t, n) => {
      a?.value && u.emit("widget:DataTableWidget:cell_click", {
        type: "widget:DataTableWidget:cell_click",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), rowId: t, colId: n }
      });
    }, H = (t, n) => {
      a?.value && u.emit("widget:DataTableWidget:cell_right_click", {
        type: "widget:DataTableWidget:cell_right_click",
        widgetId: a.value,
        payload: { widgetId: a.value, timestamp: Date.now(), rowId: t, colId: n }
      });
    }, w = ie(null);
    re(r, (t, n) => {
      k(t, n);
    }), ne(() => {
      if (a?.value && D.registerInstance(a.value, E, "DataTableWidget", A), !l.value) return;
      const t = l.value.headerBackground;
      if (t == null)
        l.value.headerBackground = new h("var(--color-raised)");
      else if (!(t instanceof h)) if (typeof t == "object" && "value" in t) {
        const n = new h(t.value);
        "variable" in t && (n.variable = t.variable), l.value.headerBackground = n;
      } else
        l.value.headerBackground = new h(t);
    });
    const {
      headerBackground: U
    } = i({
      headerBackground: se(() => l.value.headerBackground?.value || "var(--color-raised)")
    }), { update: k } = me(r, "DataTable", w), F = (t) => {
      x(t.itemIndex?.toString() || "");
    }, L = (t) => {
      O(t.itemIndex?.toString() || "");
    }, M = (t, n, d, T) => ({
      onClick: ($) => {
        V(T.toString(), d.key || d.name || "");
      },
      onContextmenu: ($) => {
        H(T.toString(), d.key || d.name || "");
      }
    }), I = (t) => {
      const n = t.parentElement;
      if (!n) return "";
      const d = Array.prototype.indexOf.call(n.children, t), T = w.value?.items?.[0] ? Object.keys(w.value.items[0]) : [];
      return T[d] ? T[d] : t.textContent?.trim() || "";
    }, K = (t) => {
      const n = t.target.closest("th");
      n && P(I(n));
    }, j = (t) => {
      const n = t.target.closest("th");
      n && G(I(n));
    };
    return (t, n) => {
      const d = le("va-data-table");
      return oe(), ce("div", {
        class: "w-full h-full",
        onClick: B,
        onContextmenu: de(W, ["prevent"]),
        onClickCapture: K,
        onContextmenuCapture: j
      }, [
        ge(d, {
          class: "table",
          items: w.value ? w.value.items : [],
          "sticky-header": "",
          style: ue(`--va-data-table-thead-background--computed: ${pe(U)};`),
          "onRow:click": F,
          "onRow:contextmenu": L,
          "cell-bind": M
        }, null, 8, ["items", "style"])
      ], 32);
    };
  }
}), Ae = (s, e) => {
  const i = s.__vccOpts || s;
  for (const [o, r] of e)
    i[o] = r;
  return i;
}, Se = /* @__PURE__ */ Ae(Re, [["__scopeId", "data-v-5d1e9988"]]), Be = [
  { name: "DataTable Clicked", type: "click", description: "Triggered when the datatable widget is clicked", payloadType: p },
  { name: "DataTable Right Clicked", type: "right_click", description: "Triggered when the datatable widget is right-clicked", payloadType: p },
  { name: "DataTable Row Clicked", type: "row_click", description: "Triggered when a row is clicked", payloadType: p },
  { name: "DataTable Row Right Clicked", type: "row_right_click", description: "Triggered when a row is right-clicked", payloadType: p },
  { name: "DataTable Column Clicked", type: "col_click", description: "Triggered when a column header is clicked", payloadType: p },
  { name: "DataTable Column Right Clicked", type: "col_right_click", description: "Triggered when a column header is right-clicked", payloadType: p },
  { name: "DataTable Cell Clicked", type: "cell_click", description: "Triggered when a cell is clicked", payloadType: p },
  { name: "DataTable Cell Right Clicked", type: "cell_right_click", description: "Triggered when a cell is right-clicked", payloadType: p }
];
class C extends fe {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new C()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(c.eINSTANCE);
  }
  /**
   * Create a new DataTableSettings instance
   */
  createDataTableSettings() {
    return new g();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "DataTableSettings":
        return this.createDataTableSettings();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function We(s) {
  const e = R.INSTANCE.getEPackage(s);
  if (!e)
    throw new Error(`EPackage '${s}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing DatatablesettingsPackage.`);
  return e;
}
class c extends Ce {
  static eNAME = "datatablesettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.table.data";
  static eNS_PREFIX = "datatablesettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new c(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    DATA_TABLE_SETTINGS: null,
    DATA_TABLE_SETTINGS__HEADER_BACKGROUND: null
  };
  constructor() {
    super(), this.setName(c.eNAME), this.setNsURI(c.eNS_URI), this.setNsPrefix(c.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    R.INSTANCE.set(c.eNS_URI, this), this.setEFactoryInstance(C.eINSTANCE);
    const e = new ve();
    e.setName("DataTableSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), c.Literals.DATA_TABLE_SETTINGS = e;
    const i = new De();
    i.setContainment(!1), i.setName("headerBackground"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), c.Literals.DATA_TABLE_SETTINGS__HEADER_BACKGROUND = i, c.Literals.DATA_TABLE_SETTINGS__HEADER_BACKGROUND.setEType(We("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class g extends Ee {
  // Feature ID Constants (eLiterals)
  static HEADER_BACKGROUND = 0;
  // Private fields
  _headerBackground = new h();
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return c.Literals.DATA_TABLE_SETTINGS;
  }
  // Getters and Setters
  get headerBackground() {
    return this._headerBackground;
  }
  set headerBackground(e) {
    const i = this._headerBackground;
    this._headerBackground = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(g.HEADER_BACKGROUND),
      getOldValue: () => i,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.HEADER_BACKGROUND,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case g.HEADER_BACKGROUND:
        return this.headerBackground;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, i) {
    switch (this.eClass().getFeatureID(e)) {
      case g.HEADER_BACKGROUND:
        this.headerBackground = i, super.eSet(e, i);
        break;
      default:
        super.eSet(e, i);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case g.HEADER_BACKGROUND:
        return this._headerBackground !== new h();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case g.HEADER_BACKGROUND:
        this._headerBackground = new h();
        return;
      default:
        super.eUnset(e);
    }
  }
}
const xe = `<?xml version="1.0" encoding="UTF-8"?>
<!--
/*********************************************************************
* Copyright (c) 2026 Contributors to the Eclipse Foundation.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/

The form for the data table.

One field, and no group around it: a heading over a single row says nothing
the label does not already say.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="DataTableSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.table.data#//DataTableSettings"/>

  <components xsi:type="uimodel:FormView" name="DataTableSettingsFormView">
    <fields xsi:type="uimodel:InputWidget" name="headerBackground"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.table.data#//DataTableSettings/headerBackground" label="Kopfzeilenfarbe"/>
  </components>
</uimodel:UIModel>
`;
var Oe = Object.defineProperty, Pe = Object.getOwnPropertyDescriptor, v = (s, e, i, o) => {
  for (var r = o > 1 ? void 0 : o ? Pe(e, i) : e, l = s.length - 1, a; l >= 0; l--)
    (a = s[l]) && (r = (o ? a(e, i, r) : a(r)) || r);
  return o && r && Oe(e, i, r), r;
}, N = (s, e) => (i, o) => e(i, o, s);
c.eINSTANCE;
const m = "DataTableWidget";
let _ = class {
  constructor(s, e) {
    this.events = s, this.actions = e;
  }
  type = m;
  component = Se;
  /*
   * No hand-written form: the model covers all of it, so there is nothing
   * to keep beside it and no second place for the two to disagree.
   *
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: xe,
    uri: "/data-table-settings.ui.xmi",
    ePackage: () => c.eINSTANCE,
    create: () => new g()
  };
  supportedDSTypes = ["csv", "rest"];
  icon = Ie;
  name = "DataTable";
  register() {
    this.events.registerWidget(m, Be), this.actions.registerWidgetType(m, f, "widget");
  }
  unregister() {
    this.events.unregisterWidget(m), this.actions.unregisterWidgetType(m);
  }
};
v([
  q()
], _.prototype, "register", 1);
v([
  J()
], _.prototype, "unregister", 1);
_ = v([
  Q({
    service: [ke],
    properties: { "widget.type": m }
  }),
  N(0, b(Y)),
  N(1, b(z))
], _);
export {
  g as DataTableSettingsImpl,
  Se as DataTableWidget,
  _ as DataTableWidgetProvider,
  c as DatatablesettingsPackage,
  xe as dataTableSettingsFormXmi
};
