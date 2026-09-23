(function(){var i="ui.vue.widget.table.data",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".filters[data-v-055c8fbb]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:1rem;padding:1rem;flex-grow:0}.table_container[data-v-055c8fbb]{display:flex;flex-direction:column;height:100%}.table_container .pagination[data-v-055c8fbb]{flex-grow:0;padding:1rem;display:grid;grid-template-columns:1fr 1fr 1fr;justify-items:center;align-items:end}.table_container .pagination .page_input[data-v-055c8fbb]{justify-self:start}.table_container .table[data-v-055c8fbb]{flex-grow:1;flex-shrink:1}.table[data-v-055c8fbb]{width:100%;border-collapse:collapse;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.table th[data-v-055c8fbb]{position:sticky;top:0;z-index:1;padding:6px 10px;text-align:left;font-weight:600;background:var(--header-background, var(--color-raised));border-bottom:1px solid var(--color-divider);cursor:pointer;white-space:nowrap}.table td[data-v-055c8fbb]{padding:5px 10px;border-bottom:1px solid var(--color-divider)}.table tbody tr[data-v-055c8fbb]:hover{background:var(--color-raised)}.loading[data-v-055c8fbb]{display:flex;height:100%}\n";})();
import { WidgetActionInterfaceImpl as te, EVENT_ACTIONS_REGISTRY as ae, PayloadImpl as u, EVENT_REGISTRY_ID as ie, EVENT_ACTIONS_REGISTRY_ID as re } from "org.eclipse.daanse.board.app.lib.api.events";
import { component as V, activate as ne, deactivate as se, inject as x } from "@eclipse-daanse/tsm";
import { defineComponent as le, toRefs as oe, inject as P, onUnmounted as ce, ref as de, watch as ge, onMounted as ue, computed as E, createElementBlock as h, openBlock as m, withModifiers as f, createElementVNode as C, normalizeStyle as pe, unref as he, Fragment as k, renderList as b, toDisplayString as F } from "vue";
import { useVariableRepository as me, useDatasourceRepository as we, VariableWrapper as w } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as Te } from "vue-router";
import { WidgetAction as ve } from "org.eclipse.daanse.board.app.lib.events";
import { BasicEFactory as fe, BasicEPackage as Ce, EPackageRegistry as U, BasicEClass as De, BasicEReference as Ee, BasicEObject as ke } from "@emfts/core";
import { WIDGET_SERVICE_ID as be } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: _e } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), ye = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2025.5C22.5%2023.8431%2023.8431%2022.5%2025.5%2022.5H34.5C36.1569%2022.5%2037.5%2023.8431%2037.5%2025.5V34.5C37.5%2036.1569%2036.1569%2037.5%2034.5%2037.5H25.5C23.8431%2037.5%2022.5%2036.1569%2022.5%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2048C22.5%2046.3431%2023.8431%2045%2025.5%2045H34.5C36.1569%2045%2037.5%2046.3431%2037.5%2048V94.5C37.5%2096.1569%2036.1569%2097.5%2034.5%2097.5H25.5C23.8431%2097.5%2022.5%2096.1569%2022.5%2094.5V48Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2025.5C45%2023.8431%2046.3431%2022.5%2048%2022.5H94.5C96.1569%2022.5%2097.5%2023.8431%2097.5%2025.5V34.5C97.5%2036.1569%2096.1569%2037.5%2094.5%2037.5H48C46.3431%2037.5%2045%2036.1569%2045%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2048C45%2046.3431%2046.3431%2045%2048%2045H94.5C96.1569%2045%2097.5%2046.3431%2097.5%2048V94.5C97.5%2096.1569%2096.1569%2097.5%2094.5%2097.5H48C46.3431%2097.5%2045%2096.1569%2045%2094.5V48Z'%20fill='%23606060'/%3e%3c/svg%3e";
var Ie = Object.defineProperty, Ne = Object.getOwnPropertyDescriptor, Ae = (n, e, a, l) => {
  for (var i = Ne(e, a), s = n.length - 1, t; s >= 0; s--)
    (t = n[s]) && (i = t(e, a, i) || i);
  return i && Ie(e, a, i), i;
};
class y extends te {
  refresh() {
    throw new Error("refresh not implemented");
  }
}
Ae([
  ve({ eventType: "dataTable.refresh" })
], y.prototype, "refresh");
const Se = ["onClick", "onContextmenu"], Re = ["onClick", "onContextmenu"], Be = ["onClick", "onContextmenu"], We = /* @__PURE__ */ le({
  __name: "DataTableWidget",
  props: {
    datasourceId: {},
    config: {},
    id: {}
  },
  setup(n, { expose: e }) {
    const { wrapParameters: a } = me(), l = n, { datasourceId: i, config: s, id: t } = oe(l), g = P(_e.TINY_EMITTER), A = P(ae), M = Te().params.pageid || "";
    class $ extends y {
      refresh() {
        B(i.value, i.value);
      }
    }
    const S = new $();
    e(S), ce(() => {
      t?.value && A.unregisterInstance(t.value);
    });
    const K = () => {
      t?.value && g.emit("widget:DataTableWidget:click", {
        type: "widget:DataTableWidget:click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, j = () => {
      t?.value && g.emit("widget:DataTableWidget:right_click", {
        type: "widget:DataTableWidget:right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, X = (r) => {
      t?.value && g.emit("widget:DataTableWidget:row_click", {
        type: "widget:DataTableWidget:row_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), rowId: r }
      });
    }, Z = (r) => {
      t?.value && g.emit("widget:DataTableWidget:row_right_click", {
        type: "widget:DataTableWidget:row_right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), rowId: r }
      });
    }, Y = (r) => {
      t?.value && g.emit("widget:DataTableWidget:col_click", {
        type: "widget:DataTableWidget:col_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), colId: r }
      });
    }, z = (r) => {
      t?.value && g.emit("widget:DataTableWidget:col_right_click", {
        type: "widget:DataTableWidget:col_right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), colId: r }
      });
    }, q = (r, c) => {
      t?.value && g.emit("widget:DataTableWidget:cell_click", {
        type: "widget:DataTableWidget:cell_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), rowId: r, colId: c }
      });
    }, J = (r, c) => {
      t?.value && g.emit("widget:DataTableWidget:cell_right_click", {
        type: "widget:DataTableWidget:cell_right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now(), rowId: r, colId: c }
      });
    }, R = de(null);
    ge(i, (r, c) => {
      B(r, c);
    }), ue(() => {
      if (t?.value && A.registerInstance(t.value, S, "DataTableWidget", M), !s.value) return;
      const r = s.value.headerBackground;
      if (r == null)
        s.value.headerBackground = new w("var(--color-raised)");
      else if (!(r instanceof w)) if (typeof r == "object" && "value" in r) {
        const c = new w(r.value);
        "variable" in r && (c.variable = r.variable), s.value.headerBackground = c;
      } else
        s.value.headerBackground = new w(r);
    });
    const {
      headerBackground: Q
    } = a({
      headerBackground: E(() => s.value.headerBackground?.value || "var(--color-raised)")
    }), { update: B } = we(i, "DataTable", R), W = E(() => R.value?.items ?? []), O = E(() => Object.keys(W.value[0] ?? {}));
    return (r, c) => (m(), h("div", {
      class: "w-full h-full",
      onClick: K,
      onContextmenu: f(j, ["prevent"])
    }, [
      C("table", {
        class: "table",
        style: pe({ "--header-background": he(Q) })
      }, [
        C("thead", null, [
          C("tr", null, [
            (m(!0), h(k, null, b(O.value, (T) => (m(), h("th", {
              key: T,
              onClick: (p) => Y(T),
              onContextmenu: f((p) => z(T), ["prevent"])
            }, F(T), 41, Se))), 128))
          ])
        ]),
        C("tbody", null, [
          (m(!0), h(k, null, b(W.value, (T, p) => (m(), h("tr", {
            key: p,
            onClick: (_) => X(String(p)),
            onContextmenu: f((_) => Z(String(p)), ["prevent"])
          }, [
            (m(!0), h(k, null, b(O.value, (_) => (m(), h("td", {
              key: _,
              onClick: (ee) => q(String(p), _),
              onContextmenu: f((ee) => J(String(p), _), ["prevent"])
            }, F(T[_]), 41, Be))), 128))
          ], 40, Re))), 128))
        ])
      ], 4)
    ], 32));
  }
}), Oe = (n, e) => {
  const a = n.__vccOpts || n;
  for (const [l, i] of e)
    a[l] = i;
  return a;
}, xe = /* @__PURE__ */ Oe(We, [["__scopeId", "data-v-055c8fbb"]]), Pe = [
  { name: "DataTable Clicked", type: "click", description: "Triggered when the datatable widget is clicked", payloadType: u },
  { name: "DataTable Right Clicked", type: "right_click", description: "Triggered when the datatable widget is right-clicked", payloadType: u },
  { name: "DataTable Row Clicked", type: "row_click", description: "Triggered when a row is clicked", payloadType: u },
  { name: "DataTable Row Right Clicked", type: "row_right_click", description: "Triggered when a row is right-clicked", payloadType: u },
  { name: "DataTable Column Clicked", type: "col_click", description: "Triggered when a column header is clicked", payloadType: u },
  { name: "DataTable Column Right Clicked", type: "col_right_click", description: "Triggered when a column header is right-clicked", payloadType: u },
  { name: "DataTable Cell Clicked", type: "cell_click", description: "Triggered when a cell is clicked", payloadType: u },
  { name: "DataTable Cell Right Clicked", type: "cell_right_click", description: "Triggered when a cell is right-clicked", payloadType: u }
];
class I extends fe {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new I()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(o.eINSTANCE);
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
function Fe(n) {
  const e = U.INSTANCE.getEPackage(n);
  if (!e)
    throw new Error(`EPackage '${n}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing DatatablesettingsPackage.`);
  return e;
}
class o extends Ce {
  static eNAME = "datatablesettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.table.data";
  static eNS_PREFIX = "datatablesettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new o(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    DATA_TABLE_SETTINGS: null,
    DATA_TABLE_SETTINGS__HEADER_BACKGROUND: null
  };
  constructor() {
    super(), this.setName(o.eNAME), this.setNsURI(o.eNS_URI), this.setNsPrefix(o.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    U.INSTANCE.set(o.eNS_URI, this), this.setEFactoryInstance(I.eINSTANCE);
    const e = new De();
    e.setName("DataTableSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), o.Literals.DATA_TABLE_SETTINGS = e;
    const a = new Ee();
    a.setContainment(!1), a.setName("headerBackground"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), o.Literals.DATA_TABLE_SETTINGS__HEADER_BACKGROUND = a, o.Literals.DATA_TABLE_SETTINGS__HEADER_BACKGROUND.setEType(Fe("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class d extends ke {
  // Feature ID Constants (eLiterals)
  static HEADER_BACKGROUND = 0;
  // Private fields
  _headerBackground = new w();
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return o.Literals.DATA_TABLE_SETTINGS;
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
const Ge = `<?xml version="1.0" encoding="UTF-8"?>
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
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.table.data#//DataTableSettings/headerBackground" label="tableData:Form.headerBackground"/>
  </components>
</uimodel:UIModel>
`, He = { name: "Datentabelle" }, Ve = { headerBackground: "Kopfzeilenfarbe" }, Ue = {
  Widget: He,
  Form: Ve
}, Le = { name: "Data table" }, Me = { headerBackground: "Header colour" }, $e = {
  Widget: Le,
  Form: Me
};
var Ke = Object.getOwnPropertyDescriptor, je = (n, e, a, l) => {
  for (var i = l > 1 ? void 0 : l ? Ke(e, a) : e, s = n.length - 1, t; s >= 0; s--)
    (t = n[s]) && (i = t(i) || i);
  return i;
};
const L = "tableData";
let G = class {
  namespace = L;
  resources = {
    de: Ue,
    en: $e
  };
};
G = je([
  V({
    service: ["Translations"],
    properties: { "i18n.namespace": L }
  })
], G);
var Xe = Object.defineProperty, Ze = Object.getOwnPropertyDescriptor, N = (n, e, a, l) => {
  for (var i = l > 1 ? void 0 : l ? Ze(e, a) : e, s = n.length - 1, t; s >= 0; s--)
    (t = n[s]) && (i = (l ? t(e, a, i) : t(i)) || i);
  return l && i && Xe(e, a, i), i;
}, H = (n, e) => (a, l) => e(a, l, n);
o.eINSTANCE;
const v = "DataTableWidget";
let D = class {
  constructor(n, e) {
    this.events = n, this.actions = e;
  }
  type = v;
  component = xe;
  /*
   * No hand-written form: the model covers all of it, so there is nothing
   * to keep beside it and no second place for the two to disagree.
   *
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Ge,
    uri: "/data-table-settings.ui.xmi",
    ePackage: () => o.eINSTANCE,
    create: () => new d()
  };
  supportedDSTypes = ["csv", "rest"];
  icon = ye;
  name = "DataTable";
  nameKey = "tableData:Widget.name";
  register() {
    this.events.registerWidget(v, Pe), this.actions.registerWidgetType(v, y, "widget");
  }
  unregister() {
    this.events.unregisterWidget(v), this.actions.unregisterWidgetType(v);
  }
};
N([
  ne()
], D.prototype, "register", 1);
N([
  se()
], D.prototype, "unregister", 1);
D = N([
  V({
    service: [be],
    properties: { "widget.type": v }
  }),
  H(0, x(ie)),
  H(1, x(re))
], D);
export {
  d as DataTableSettingsImpl,
  xe as DataTableWidget,
  D as DataTableWidgetProvider,
  o as DatatablesettingsPackage,
  G as TableDataTranslations,
  Ge as dataTableSettingsFormXmi
};
