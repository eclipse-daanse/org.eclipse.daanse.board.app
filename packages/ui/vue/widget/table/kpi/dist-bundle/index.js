(function(){var i="ui.vue.widget.table.kpi",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".filters[data-v-f4b39436]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:1rem;padding:1rem;flex-grow:0}.table_container[data-v-f4b39436]{display:flex;flex-direction:column;height:100%}.table_container .pagination[data-v-f4b39436]{flex-grow:0;padding:1rem;display:grid;grid-template-columns:1fr 1fr 1fr;justify-items:center;align-items:end}.table_container .pagination .page_input[data-v-f4b39436]{justify-self:start}.table_container .table[data-v-f4b39436]{flex-grow:1;flex-shrink:1}.loading[data-v-f4b39436]{display:flex;height:100%}\n";})();
import { WidgetActionInterfaceImpl as j, EVENT_ACTIONS_REGISTRY as M, PayloadImpl as V, EVENT_REGISTRY_ID as X, EVENT_ACTIONS_REGISTRY_ID as Z } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as $, deactivate as z, component as J, inject as L } from "@eclipse-daanse/tsm";
import { defineComponent as q, toRefs as Q, inject as B, onUnmounted as ee, ref as te, watch as se, onMounted as ae, computed as _, provide as R, createElementBlock as re, openBlock as ie, withModifiers as ne, createVNode as oe, unref as le } from "vue";
import { useVariableRepository as ue, useDatasourceRepository as de, VariableWrapper as g } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as ce } from "vue-router";
import { KpiTable as he } from "org.eclipse.daanse.board.app.ui.vue.common.kpi";
import { WidgetAction as Te } from "org.eclipse.daanse.board.app.lib.events";
import { BasicEFactory as ge, BasicEPackage as Ee, EPackageRegistry as b, BasicEClass as _e, BasicEReference as fe, BasicEAttribute as S, getEcorePackage as w, BasicEObject as Se } from "@emfts/core";
import { WIDGET_SERVICE_ID as we } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: pe } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Ce = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2025.5C22.5%2023.8431%2023.8431%2022.5%2025.5%2022.5H34.5C36.1569%2022.5%2037.5%2023.8431%2037.5%2025.5V34.5C37.5%2036.1569%2036.1569%2037.5%2034.5%2037.5H25.5C23.8431%2037.5%2022.5%2036.1569%2022.5%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2048C22.5%2046.3431%2023.8431%2045%2025.5%2045H34.5C36.1569%2045%2037.5%2046.3431%2037.5%2048V94.5C37.5%2096.1569%2036.1569%2097.5%2034.5%2097.5H25.5C23.8431%2097.5%2022.5%2096.1569%2022.5%2094.5V48Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2025.5C45%2023.8431%2046.3431%2022.5%2048%2022.5H94.5C96.1569%2022.5%2097.5%2023.8431%2097.5%2025.5V34.5C97.5%2036.1569%2096.1569%2037.5%2094.5%2037.5H48C46.3431%2037.5%2045%2036.1569%2045%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2048C45%2046.3431%2046.3431%2045%2048%2045H94.5C96.1569%2045%2097.5%2046.3431%2097.5%2048V94.5C97.5%2096.1569%2096.1569%2097.5%2094.5%2097.5H48C46.3431%2097.5%2045%2096.1569%2045%2094.5V48Z'%20fill='%23606060'/%3e%3c/svg%3e";
var Ie = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, Ne = (l, e, t, u) => {
  for (var a = Ae(e, t), r = l.length - 1, i; r >= 0; r--)
    (i = l[r]) && (a = i(e, t, a) || a);
  return a && Ie(e, t, a), a;
};
class A extends j {
  refresh() {
    throw new Error("refresh not implemented");
  }
}
Ne([
  Te({ eventType: "kpiTable.refresh" })
], A.prototype, "refresh");
const ve = /* @__PURE__ */ q({
  __name: "KpiTableWidget",
  props: {
    datasourceId: {},
    config: {},
    id: {}
  },
  setup(l, { expose: e }) {
    const { wrapParameters: t } = ue(), u = l, { datasourceId: a, config: r, id: i } = Q(u), y = B(pe.TINY_EMITTER), P = B(M), k = ce().params.pageid || "";
    class O extends A {
      refresh() {
        m(a.value, a.value);
      }
    }
    const D = new O();
    e(D), ee(() => {
      i?.value && P.unregisterInstance(i.value);
    });
    const U = () => {
      i?.value && y.emit("widget:KpiTableWidget:click", {
        type: "widget:KpiTableWidget:click",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now() }
      });
    }, H = () => {
      i?.value && y.emit("widget:KpiTableWidget:right_click", {
        type: "widget:KpiTableWidget:right_click",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now() }
      });
    }, I = te(null);
    se(a, (n, c) => {
      m(n, c);
    }), ae(() => {
      if (i?.value && P.registerInstance(i.value, D, "KpiTableWidget", k), !r.value) return;
      const n = {
        headerBackground: "var(--color-raised)"
      };
      for (const [c, T] of Object.entries(n)) {
        const p = r.value[c];
        let d = p;
        if (Array.isArray(p) && (d = p[0] || T), d == null)
          r.value[c] = new g(T);
        else if (!(d instanceof g)) if (typeof d == "object" && "value" in d) {
          const h = new g(d.value);
          "variable" in d && (h.variable = d.variable), r.value[c] = h;
        } else
          r.value[c] = new g(d);
      }
    });
    const {
      showParentChild: Fe,
      showFolders: be
    } = t({
      showParentChild: _(() => r.value.showParentChild ?? !1),
      showFolders: _(() => r.value.showFolders ?? !1)
    }), W = _(() => {
      const n = r.value.statusVisualType;
      return Array.isArray(n) ? n[0] || "Badge" : n || "Badge";
    }), G = _(() => {
      const n = r.value.trendVisualType;
      return Array.isArray(n) ? n[0] || "Badge" : n || "Badge";
    });
    R("statusVisualType", W), R("trendVisualType", G);
    const { update: m } = de(a, "DataTable", I), x = _(() => {
      if (!I.value) return null;
      let n = I.value;
      return (r.value.showFolders ?? !1) || (n = Y(n)), (r.value.showParentChild ?? !1) || (n = K(n)), n;
    });
    function Y(n) {
      const c = [];
      function T(p) {
        p.forEach((d) => {
          d.type === "Folder" ? T(d.children || []) : c.push(d);
        });
      }
      return T(n), c;
    }
    function K(n) {
      const c = [];
      function T(d) {
        d.forEach((h) => {
          h.type === "Folder" ? c.push({
            ...h,
            children: h.children ? p(h.children) : []
          }) : (c.push({
            ...h,
            children: []
            // Remove children to flatten hierarchy
          }), h.children && h.children.length > 0 && c.push(...p(h.children)));
        });
      }
      function p(d) {
        const h = [];
        return d.forEach((f) => {
          h.push({
            ...f,
            children: []
            // Remove children to flatten hierarchy
          }), f.children && f.children.length > 0 && h.push(...p(f.children));
        }), h;
      }
      return T(n), c;
    }
    return (n, c) => (ie(), re("div", {
      class: "w-full h-full",
      onClick: U,
      onContextmenu: ne(H, ["prevent"])
    }, [
      oe(le(he), { tableData: x.value }, null, 8, ["tableData"])
    ], 32));
  }
}), ye = (l, e) => {
  const t = l.__vccOpts || l;
  for (const [u, a] of e)
    t[u] = a;
  return t;
}, Pe = /* @__PURE__ */ ye(ve, [["__scopeId", "data-v-f4b39436"]]), De = [
  { name: "KpiTable Clicked", type: "click", description: "Triggered when the kpi table widget is clicked", payloadType: V },
  { name: "KpiTable Right Clicked", type: "right_click", description: "Triggered when the kpi table widget is right-clicked", payloadType: V }
];
class N extends ge {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new N()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(o.eINSTANCE);
  }
  /**
   * Create a new KpiTableSettings instance
   */
  createKpiTableSettings() {
    return new s();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "KpiTableSettings":
        return this.createKpiTableSettings();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function me(l) {
  const e = b.INSTANCE.getEPackage(l);
  if (!e)
    throw new Error(`EPackage '${l}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing KpitablesettingsPackage.`);
  return e;
}
class o extends Ee {
  static eNAME = "kpitablesettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.table.kpi";
  static eNS_PREFIX = "kpitablesettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new o(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    KPI_TABLE_SETTINGS: null,
    KPI_TABLE_SETTINGS__HEADER_BACKGROUND: null,
    KPI_TABLE_SETTINGS__TREND_VISUAL_TYPE: null,
    KPI_TABLE_SETTINGS__STATUS_VISUAL_TYPE: null,
    KPI_TABLE_SETTINGS__SHOW_FOLDERS: null,
    KPI_TABLE_SETTINGS__SHOW_PARENT_CHILD: null
  };
  constructor() {
    super(), this.setName(o.eNAME), this.setNsURI(o.eNS_URI), this.setNsPrefix(o.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    b.INSTANCE.set(o.eNS_URI, this), this.setEFactoryInstance(N.eINSTANCE);
    const e = new _e();
    e.setName("KpiTableSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), o.Literals.KPI_TABLE_SETTINGS = e;
    const t = new fe();
    t.setContainment(!1), t.setName("headerBackground"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), o.Literals.KPI_TABLE_SETTINGS__HEADER_BACKGROUND = t;
    const u = new S();
    u.setName("trendVisualType"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), o.Literals.KPI_TABLE_SETTINGS__TREND_VISUAL_TYPE = u;
    const a = new S();
    a.setName("statusVisualType"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), o.Literals.KPI_TABLE_SETTINGS__STATUS_VISUAL_TYPE = a;
    const r = new S();
    r.setName("showFolders"), r.setLowerBound(0), r.setUpperBound(1), e.getEStructuralFeatures().push(r), o.Literals.KPI_TABLE_SETTINGS__SHOW_FOLDERS = r;
    const i = new S();
    i.setName("showParentChild"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), o.Literals.KPI_TABLE_SETTINGS__SHOW_PARENT_CHILD = i, o.Literals.KPI_TABLE_SETTINGS__HEADER_BACKGROUND.setEType(me("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), o.Literals.KPI_TABLE_SETTINGS__TREND_VISUAL_TYPE.setEType(w().getEClassifier("EString")), o.Literals.KPI_TABLE_SETTINGS__STATUS_VISUAL_TYPE.setEType(w().getEClassifier("EString")), o.Literals.KPI_TABLE_SETTINGS__SHOW_FOLDERS.setEType(w().getEClassifier("EBoolean")), o.Literals.KPI_TABLE_SETTINGS__SHOW_PARENT_CHILD.setEType(w().getEClassifier("EBoolean"));
  }
}
class s extends Se {
  // Feature ID Constants (eLiterals)
  static HEADER_BACKGROUND = 0;
  static TREND_VISUAL_TYPE = 1;
  static STATUS_VISUAL_TYPE = 2;
  static SHOW_FOLDERS = 3;
  static SHOW_PARENT_CHILD = 4;
  // Private fields
  _headerBackground = new g();
  _trendVisualType = "Badge";
  _statusVisualType = "Badge";
  _showFolders = !1;
  _showParentChild = !1;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return o.Literals.KPI_TABLE_SETTINGS;
  }
  // Getters and Setters
  get headerBackground() {
    return this._headerBackground;
  }
  set headerBackground(e) {
    const t = this._headerBackground;
    this._headerBackground = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.HEADER_BACKGROUND),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.HEADER_BACKGROUND,
      merge: () => !1
    });
  }
  get trendVisualType() {
    return this._trendVisualType;
  }
  set trendVisualType(e) {
    const t = this._trendVisualType;
    this._trendVisualType = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.TREND_VISUAL_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.TREND_VISUAL_TYPE,
      merge: () => !1
    });
  }
  get statusVisualType() {
    return this._statusVisualType;
  }
  set statusVisualType(e) {
    const t = this._statusVisualType;
    this._statusVisualType = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.STATUS_VISUAL_TYPE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.STATUS_VISUAL_TYPE,
      merge: () => !1
    });
  }
  get showFolders() {
    return this._showFolders;
  }
  set showFolders(e) {
    const t = this._showFolders;
    this._showFolders = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.SHOW_FOLDERS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.SHOW_FOLDERS,
      merge: () => !1
    });
  }
  get showParentChild() {
    return this._showParentChild;
  }
  set showParentChild(e) {
    const t = this._showParentChild;
    this._showParentChild = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(s.SHOW_PARENT_CHILD),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => s.SHOW_PARENT_CHILD,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case s.HEADER_BACKGROUND:
        return this.headerBackground;
      case s.TREND_VISUAL_TYPE:
        return this.trendVisualType;
      case s.STATUS_VISUAL_TYPE:
        return this.statusVisualType;
      case s.SHOW_FOLDERS:
        return this.showFolders;
      case s.SHOW_PARENT_CHILD:
        return this.showParentChild;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case s.HEADER_BACKGROUND:
        this.headerBackground = t, super.eSet(e, t);
        break;
      case s.TREND_VISUAL_TYPE:
        this.trendVisualType = t, super.eSet(e, t);
        break;
      case s.STATUS_VISUAL_TYPE:
        this.statusVisualType = t, super.eSet(e, t);
        break;
      case s.SHOW_FOLDERS:
        this.showFolders = t, super.eSet(e, t);
        break;
      case s.SHOW_PARENT_CHILD:
        this.showParentChild = t, super.eSet(e, t);
        break;
      default:
        super.eSet(e, t);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case s.HEADER_BACKGROUND:
        return this._headerBackground !== new g();
      case s.TREND_VISUAL_TYPE:
        return this._trendVisualType !== "Badge";
      case s.STATUS_VISUAL_TYPE:
        return this._statusVisualType !== "Badge";
      case s.SHOW_FOLDERS:
        return this._showFolders !== !1;
      case s.SHOW_PARENT_CHILD:
        return this._showParentChild !== !1;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case s.HEADER_BACKGROUND:
        this._headerBackground = new g();
        return;
      case s.TREND_VISUAL_TYPE:
        this._trendVisualType = "Badge";
        return;
      case s.STATUS_VISUAL_TYPE:
        this._statusVisualType = "Badge";
        return;
      case s.SHOW_FOLDERS:
        this._showFolders = !1;
        return;
      case s.SHOW_PARENT_CHILD:
        this._showParentChild = !1;
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
      headerBackground: this.headerBackground,
      trendVisualType: this.trendVisualType,
      statusVisualType: this.statusVisualType,
      showFolders: this.showFolders,
      showParentChild: this.showParentChild
    };
  }
}
const Ve = `<?xml version="1.0" encoding="UTF-8"?>
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

The form for the KPI table.

Split the way the two decisions differ: how a number is drawn, and what
shape the table has. The drawing names are the table's own - it switches on
them - so they are the values; optionLabel says what each one looks like.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="KpiTableSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.table.kpi#//KpiTableSettings"/>

  <components xsi:type="uimodel:FormView" name="KpiTableSettingsFormView">

    <fields xsi:type="uimodel:GroupWidget" name="marksGroup" layout="VERTICAL" label="Kennzeichen">
      <fields xsi:type="uimodel:SelectWidget" name="trendVisualType"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.table.kpi#//KpiTableSettings/trendVisualType" label="Trend">
        <values>Emoji</values>
        <values>Arrow</values>
        <values>Chart</values>
        <values>Badge</values>
        <optionLabel language="JS" body="({ Emoji: 'Emoji', Arrow: 'Pfeil', Chart: 'Kurve', Badge: 'Plakette' })[option] ?? option"/>
      </fields>
      <fields xsi:type="uimodel:SelectWidget" name="statusVisualType"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.table.kpi#//KpiTableSettings/statusVisualType" label="Status">
        <values>Emoji</values>
        <values>Lights</values>
        <values>Badge</values>
        <optionLabel language="JS" body="({ Emoji: 'Emoji', Lights: 'Ampel', Badge: 'Plakette' })[option] ?? option"/>
      </fields>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="shapeGroup" layout="VERTICAL" label="Aufbau">
      <fields xsi:type="uimodel:CheckboxWidget" name="showFolders"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.table.kpi#//KpiTableSettings/showFolders" label="Ordner zeigen"/>
      <fields xsi:type="uimodel:CheckboxWidget" name="showParentChild"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.table.kpi#//KpiTableSettings/showParentChild" label="Über- und Untereinträge zeigen"/>
      <fields xsi:type="uimodel:InputWidget" name="headerBackground"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.table.kpi#//KpiTableSettings/headerBackground" label="Kopfzeilenfarbe"/>
    </fields>

  </components>
</uimodel:UIModel>
`;
var Le = Object.defineProperty, Be = Object.getOwnPropertyDescriptor, v = (l, e, t, u) => {
  for (var a = u > 1 ? void 0 : u ? Be(e, t) : e, r = l.length - 1, i; r >= 0; r--)
    (i = l[r]) && (a = (u ? i(e, t, a) : i(a)) || a);
  return u && a && Le(e, t, a), a;
}, F = (l, e) => (t, u) => e(t, u, l);
o.eINSTANCE;
const E = "KpiTableWidget";
let C = class {
  constructor(l, e) {
    this.events = l, this.actions = e;
  }
  type = E;
  component = Pe;
  /*
   * No hand-written form: the model covers all of it, so there is nothing
   * to keep beside it and no second place for the two to disagree.
   *
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Ve,
    uri: "/kpi-table-settings.ui.xmi",
    ePackage: () => o.eINSTANCE,
    create: () => new s()
  };
  supportedDSTypes = ["csv", "rest"];
  icon = Ce;
  name = "KpiTable";
  register() {
    this.events.registerWidget(E, De), this.actions.registerWidgetType(E, A, "widget");
  }
  unregister() {
    this.events.unregisterWidget(E), this.actions.unregisterWidgetType(E);
  }
};
v([
  $()
], C.prototype, "register", 1);
v([
  z()
], C.prototype, "unregister", 1);
C = v([
  J({
    service: [we],
    properties: { "widget.type": E }
  }),
  F(0, L(X)),
  F(1, L(Z))
], C);
export {
  s as KpiTableSettingsImpl,
  Pe as KpiTableWidget,
  C as KpiTableWidgetProvider,
  o as KpitablesettingsPackage,
  Ve as kpiTableSettingsFormXmi
};
