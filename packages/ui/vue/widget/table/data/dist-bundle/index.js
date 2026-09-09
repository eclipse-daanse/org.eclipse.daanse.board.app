(function(){var i="ui.vue.widget.table.data",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".filters[data-v-055c8fbb]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:1rem;padding:1rem;flex-grow:0}.table_container[data-v-055c8fbb]{display:flex;flex-direction:column;height:100%}.table_container .pagination[data-v-055c8fbb]{flex-grow:0;padding:1rem;display:grid;grid-template-columns:1fr 1fr 1fr;justify-items:center;align-items:end}.table_container .pagination .page_input[data-v-055c8fbb]{justify-self:start}.table_container .table[data-v-055c8fbb]{flex-grow:1;flex-shrink:1}.table[data-v-055c8fbb]{width:100%;border-collapse:collapse;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.table th[data-v-055c8fbb]{position:sticky;top:0;z-index:1;padding:6px 10px;text-align:left;font-weight:600;background:var(--header-background, var(--color-raised));border-bottom:1px solid var(--color-divider);cursor:pointer;white-space:nowrap}.table td[data-v-055c8fbb]{padding:5px 10px;border-bottom:1px solid var(--color-divider)}.table tbody tr[data-v-055c8fbb]:hover{background:var(--color-raised)}.loading[data-v-055c8fbb]{display:flex;height:100%}\n";})();
import { WidgetActionInterfaceImpl as J, EVENT_ACTIONS_REGISTRY as Q, PayloadImpl as u, EVENT_REGISTRY_ID as ee, EVENT_ACTIONS_REGISTRY_ID as te } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as ae, deactivate as ie, component as re, inject as O } from "@eclipse-daanse/tsm";
import { defineComponent as ne, toRefs as se, inject as P, onUnmounted as le, ref as ce, watch as oe, onMounted as de, computed as E, createElementBlock as h, openBlock as m, withModifiers as f, createElementVNode as C, normalizeStyle as ge, unref as ue, Fragment as k, renderList as b, toDisplayString as G } from "vue";
import { useVariableRepository as pe, useDatasourceRepository as he, VariableWrapper as w } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as me } from "vue-router";
import { WidgetAction as Te } from "org.eclipse.daanse.board.app.lib.events";
import { BasicEFactory as _e, BasicEPackage as ve, EPackageRegistry as H, BasicEClass as fe, BasicEReference as Ce, BasicEObject as De } from "@emfts/core";
import { WIDGET_SERVICE_ID as Ee } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: we } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), ke = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2025.5C22.5%2023.8431%2023.8431%2022.5%2025.5%2022.5H34.5C36.1569%2022.5%2037.5%2023.8431%2037.5%2025.5V34.5C37.5%2036.1569%2036.1569%2037.5%2034.5%2037.5H25.5C23.8431%2037.5%2022.5%2036.1569%2022.5%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2048C22.5%2046.3431%2023.8431%2045%2025.5%2045H34.5C36.1569%2045%2037.5%2046.3431%2037.5%2048V94.5C37.5%2096.1569%2036.1569%2097.5%2034.5%2097.5H25.5C23.8431%2097.5%2022.5%2096.1569%2022.5%2094.5V48Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2025.5C45%2023.8431%2046.3431%2022.5%2048%2022.5H94.5C96.1569%2022.5%2097.5%2023.8431%2097.5%2025.5V34.5C97.5%2036.1569%2096.1569%2037.5%2094.5%2037.5H48C46.3431%2037.5%2045%2036.1569%2045%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2048C45%2046.3431%2046.3431%2045%2048%2045H94.5C96.1569%2045%2097.5%2046.3431%2097.5%2048V94.5C97.5%2096.1569%2096.1569%2097.5%2094.5%2097.5H48C46.3431%2097.5%2045%2096.1569%2045%2094.5V48Z'%20fill='%23606060'/%3e%3c/svg%3e";
var be = Object.defineProperty, ye = Object.getOwnPropertyDescriptor, Ie = (n, e, a, c) => {
  for (var r = ye(e, a), s = n.length - 1, t; s >= 0; s--)
    (t = n[s]) && (r = t(e, a, r) || r);
  return r && be(e, a, r), r;
};
class y extends J {
  refresh() {
    throw new Error("refresh not implemented");
  }
}
Ie([
  Te({ eventType: "dataTable.refresh" })
], y.prototype, "refresh");
const Ne = ["onClick", "onContextmenu"], Ae = ["onClick", "onContextmenu"], Se = ["onClick", "onContextmenu"], Re = /* @__PURE__ */ ne({
  __name: "DataTableWidget",
  props: {
    datasourceId: {},
    config: {},
    id: {}
  },
  setup(n, { expose: e }) {
    const { wrapParameters: a } = pe(), c = n, { datasourceId: r, config: s, id: t } = se(c), g = P(we.TINY_EMITTER), A = P(Q), U = me().params.pageid || "";
    class F extends y {
      refresh() {
        B(r.value, r.value);
      }
    }
    const S = new F();
    e(S), le(() => {
      t?.value && A.unregisterInstance(t.value);
    });
    const L = () => {
      t?.value && g.emit("widget:DataTableWidget:click", {
        type: "widget:DataTableWidget:click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, M = () => {
      t?.value && g.emit("widget:DataTableWidget:right_click", {
        type: "widget:DataTableWidget:right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, $ = (i) => {
      t?.value && g.emit("widget:DataTableWidget:row_click", {
        type: "widget:DataTableWidget:row_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), rowId: i }
      });
    }, K = (i) => {
      t?.value && g.emit("widget:DataTableWidget:row_right_click", {
        type: "widget:DataTableWidget:row_right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), rowId: i }
      });
    }, j = (i) => {
      t?.value && g.emit("widget:DataTableWidget:col_click", {
        type: "widget:DataTableWidget:col_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), colId: i }
      });
    }, X = (i) => {
      t?.value && g.emit("widget:DataTableWidget:col_right_click", {
        type: "widget:DataTableWidget:col_right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), colId: i }
      });
    }, Z = (i, o) => {
      t?.value && g.emit("widget:DataTableWidget:cell_click", {
        type: "widget:DataTableWidget:cell_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), rowId: i, colId: o }
      });
    }, Y = (i, o) => {
      t?.value && g.emit("widget:DataTableWidget:cell_right_click", {
        type: "widget:DataTableWidget:cell_right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), rowId: i, colId: o }
      });
    }, R = ce(null);
    oe(r, (i, o) => {
      B(i, o);
    }), de(() => {
      if (t?.value && A.registerInstance(t.value, S, "DataTableWidget", U), !s.value) return;
      const i = s.value.headerBackground;
      if (i == null)
        s.value.headerBackground = new w("var(--color-raised)");
      else if (!(i instanceof w)) if (typeof i == "object" && "value" in i) {
        const o = new w(i.value);
        "variable" in i && (o.variable = i.variable), s.value.headerBackground = o;
      } else
        s.value.headerBackground = new w(i);
    });
    const {
      headerBackground: z
    } = a({
      headerBackground: E(() => s.value.headerBackground?.value || "var(--color-raised)")
    }), { update: B } = he(r, "DataTable", R), W = E(() => R.value?.items ?? []), x = E(() => Object.keys(W.value[0] ?? {}));
    return (i, o) => (m(), h("div", {
      class: "w-full h-full",
      onClick: L,
      onContextmenu: f(M, ["prevent"])
    }, [
      C("table", {
        class: "table",
        style: ge({ "--header-background": ue(z) })
      }, [
        C("thead", null, [
          C("tr", null, [
            (m(!0), h(k, null, b(x.value, (T) => (m(), h("th", {
              key: T,
              onClick: (p) => j(T),
              onContextmenu: f((p) => X(T), ["prevent"])
            }, G(T), 41, Ne))), 128))
          ])
        ]),
        C("tbody", null, [
          (m(!0), h(k, null, b(W.value, (T, p) => (m(), h("tr", {
            key: p,
            onClick: (_) => $(String(p)),
            onContextmenu: f((_) => K(String(p)), ["prevent"])
          }, [
            (m(!0), h(k, null, b(x.value, (_) => (m(), h("td", {
              key: _,
              onClick: (q) => Z(String(p), _),
              onContextmenu: f((q) => Y(String(p), _), ["prevent"])
            }, G(T[_]), 41, Se))), 128))
          ], 40, Ae))), 128))
        ])
      ], 4)
    ], 32));
  }
}), Be = (n, e) => {
  const a = n.__vccOpts || n;
  for (const [c, r] of e)
    a[c] = r;
  return a;
}, We = /* @__PURE__ */ Be(Re, [["__scopeId", "data-v-055c8fbb"]]), xe = [
  { name: "DataTable Clicked", type: "click", description: "Triggered when the datatable widget is clicked", payloadType: u },
  { name: "DataTable Right Clicked", type: "right_click", description: "Triggered when the datatable widget is right-clicked", payloadType: u },
  { name: "DataTable Row Clicked", type: "row_click", description: "Triggered when a row is clicked", payloadType: u },
  { name: "DataTable Row Right Clicked", type: "row_right_click", description: "Triggered when a row is right-clicked", payloadType: u },
  { name: "DataTable Column Clicked", type: "col_click", description: "Triggered when a column header is clicked", payloadType: u },
  { name: "DataTable Column Right Clicked", type: "col_right_click", description: "Triggered when a column header is right-clicked", payloadType: u },
  { name: "DataTable Cell Clicked", type: "cell_click", description: "Triggered when a cell is clicked", payloadType: u },
  { name: "DataTable Cell Right Clicked", type: "cell_right_click", description: "Triggered when a cell is right-clicked", payloadType: u }
];
class I extends _e {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new I()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(l.eINSTANCE);
  }
  /**
   * Create a new DataTableSettings instance
   */
  createDataTableSettings() {
    return new d();
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
function Oe(n) {
  const e = H.INSTANCE.getEPackage(n);
  if (!e)
    throw new Error(`EPackage '${n}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing DatatablesettingsPackage.`);
  return e;
}
class l extends ve {
  static eNAME = "datatablesettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.table.data";
  static eNS_PREFIX = "datatablesettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new l(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    DATA_TABLE_SETTINGS: null,
    DATA_TABLE_SETTINGS__HEADER_BACKGROUND: null
  };
  constructor() {
    super(), this.setName(l.eNAME), this.setNsURI(l.eNS_URI), this.setNsPrefix(l.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    H.INSTANCE.set(l.eNS_URI, this), this.setEFactoryInstance(I.eINSTANCE);
    const e = new fe();
    e.setName("DataTableSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), l.Literals.DATA_TABLE_SETTINGS = e;
    const a = new Ce();
    a.setContainment(!1), a.setName("headerBackground"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), l.Literals.DATA_TABLE_SETTINGS__HEADER_BACKGROUND = a, l.Literals.DATA_TABLE_SETTINGS__HEADER_BACKGROUND.setEType(Oe("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class d extends De {
  // Feature ID Constants (eLiterals)
  static HEADER_BACKGROUND = 0;
  // Private fields
  _headerBackground = new w();
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return l.Literals.DATA_TABLE_SETTINGS;
  }
  // Getters and Setters
  get headerBackground() {
    return this._headerBackground;
  }
  set headerBackground(e) {
    const a = this._headerBackground;
    this._headerBackground = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(d.HEADER_BACKGROUND),
      getOldValue: () => a,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => d.HEADER_BACKGROUND,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case d.HEADER_BACKGROUND:
        return this.headerBackground;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, a) {
    switch (this.eClass().getFeatureID(e)) {
      case d.HEADER_BACKGROUND:
        this.headerBackground = a, super.eSet(e, a);
        break;
      default:
        super.eSet(e, a);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case d.HEADER_BACKGROUND:
        return this._headerBackground !== new w();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case d.HEADER_BACKGROUND:
        this._headerBackground = new w();
        return;
      default:
        super.eUnset(e);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      headerBackground: this.headerBackground
    };
  }
}
const Pe = `<?xml version="1.0" encoding="UTF-8"?>
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
var Ge = Object.defineProperty, Ve = Object.getOwnPropertyDescriptor, N = (n, e, a, c) => {
  for (var r = c > 1 ? void 0 : c ? Ve(e, a) : e, s = n.length - 1, t; s >= 0; s--)
    (t = n[s]) && (r = (c ? t(e, a, r) : t(r)) || r);
  return c && r && Ge(e, a, r), r;
}, V = (n, e) => (a, c) => e(a, c, n);
l.eINSTANCE;
const v = "DataTableWidget";
let D = class {
  constructor(n, e) {
    this.events = n, this.actions = e;
  }
  type = v;
  component = We;
  /*
   * No hand-written form: the model covers all of it, so there is nothing
   * to keep beside it and no second place for the two to disagree.
   *
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Pe,
    uri: "/data-table-settings.ui.xmi",
    ePackage: () => l.eINSTANCE,
    create: () => new d()
  };
  supportedDSTypes = ["csv", "rest"];
  icon = ke;
  name = "DataTable";
  register() {
    this.events.registerWidget(v, xe), this.actions.registerWidgetType(v, y, "widget");
  }
  unregister() {
    this.events.unregisterWidget(v), this.actions.unregisterWidgetType(v);
  }
};
N([
  ae()
], D.prototype, "register", 1);
N([
  ie()
], D.prototype, "unregister", 1);
D = N([
  re({
    service: [Ee],
    properties: { "widget.type": v }
  }),
  V(0, O(ee)),
  V(1, O(te))
], D);
export {
  d as DataTableSettingsImpl,
  We as DataTableWidget,
  D as DataTableWidgetProvider,
  l as DatatablesettingsPackage,
  Pe as dataTableSettingsFormXmi
};
