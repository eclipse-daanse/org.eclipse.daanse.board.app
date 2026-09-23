(function(){var i="ui.vue.widget.table.kpi",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".filters[data-v-f4b39436]{display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:1rem;padding:1rem;flex-grow:0}.table_container[data-v-f4b39436]{display:flex;flex-direction:column;height:100%}.table_container .pagination[data-v-f4b39436]{flex-grow:0;padding:1rem;display:grid;grid-template-columns:1fr 1fr 1fr;justify-items:center;align-items:end}.table_container .pagination .page_input[data-v-f4b39436]{justify-self:start}.table_container .table[data-v-f4b39436]{flex-grow:1;flex-shrink:1}.loading[data-v-f4b39436]{display:flex;height:100%}\n";})();
import { WidgetActionInterfaceImpl as X, EVENT_ACTIONS_REGISTRY as Z, PayloadImpl as b, EVENT_REGISTRY_ID as z, EVENT_ACTIONS_REGISTRY_ID as J } from "org.eclipse.daanse.board.app.lib.api.events";
import { component as O, activate as q, deactivate as Q, inject as D } from "@eclipse-daanse/tsm";
import { defineComponent as ee, toRefs as te, inject as L, onUnmounted as se, ref as ae, watch as re, onMounted as ie, computed as _, provide as B, createElementBlock as ne, openBlock as oe, withModifiers as le, createVNode as ue, unref as de } from "vue";
import { useVariableRepository as ce, useDatasourceRepository as he, VariableWrapper as g } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { useRoute as pe } from "vue-router";
import { KpiTable as Te } from "org.eclipse.daanse.board.app.ui.vue.common.kpi";
import { WidgetAction as Ee } from "org.eclipse.daanse.board.app.lib.events";
import { BasicEFactory as _e, BasicEPackage as fe, EPackageRegistry as k, BasicEClass as Se, BasicEReference as we, BasicEAttribute as S, getEcorePackage as w, BasicEObject as Ce } from "@emfts/core";
import { WIDGET_SERVICE_ID as ye } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: ge } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Ie = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2025.5C22.5%2023.8431%2023.8431%2022.5%2025.5%2022.5H34.5C36.1569%2022.5%2037.5%2023.8431%2037.5%2025.5V34.5C37.5%2036.1569%2036.1569%2037.5%2034.5%2037.5H25.5C23.8431%2037.5%2022.5%2036.1569%2022.5%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2048C22.5%2046.3431%2023.8431%2045%2025.5%2045H34.5C36.1569%2045%2037.5%2046.3431%2037.5%2048V94.5C37.5%2096.1569%2036.1569%2097.5%2034.5%2097.5H25.5C23.8431%2097.5%2022.5%2096.1569%2022.5%2094.5V48Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2025.5C45%2023.8431%2046.3431%2022.5%2048%2022.5H94.5C96.1569%2022.5%2097.5%2023.8431%2097.5%2025.5V34.5C97.5%2036.1569%2096.1569%2037.5%2094.5%2037.5H48C46.3431%2037.5%2045%2036.1569%2045%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2048C45%2046.3431%2046.3431%2045%2048%2045H94.5C96.1569%2045%2097.5%2046.3431%2097.5%2048V94.5C97.5%2096.1569%2096.1569%2097.5%2094.5%2097.5H48C46.3431%2097.5%2045%2096.1569%2045%2094.5V48Z'%20fill='%23606060'/%3e%3c/svg%3e";
var me = Object.defineProperty, ve = Object.getOwnPropertyDescriptor, Ae = (o, e, t, l) => {
  for (var a = ve(e, t), r = o.length - 1, i; r >= 0; r--)
    (i = o[r]) && (a = i(e, t, a) || a);
  return a && me(e, t, a), a;
};
class I extends X {
  refresh() {
    throw new Error("refresh not implemented");
  }
}
Ae([
  Ee({ eventType: "kpiTable.refresh" })
], I.prototype, "refresh");
const Ne = /* @__PURE__ */ ee({
  __name: "KpiTableWidget",
  props: {
    datasourceId: {},
    config: {},
    id: {}
  },
  setup(o, { expose: e }) {
    const { wrapParameters: t } = ce(), l = o, { datasourceId: a, config: r, id: i } = te(l), A = L(ge.TINY_EMITTER), N = L(Z), H = pe().params.pageid || "";
    class W extends I {
      refresh() {
        V(a.value, a.value);
      }
    }
    const P = new W();
    e(P), se(() => {
      i?.value && N.unregisterInstance(i.value);
    });
    const G = () => {
      i?.value && A.emit("widget:KpiTableWidget:click", {
        type: "widget:KpiTableWidget:click",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now() }
      });
    }, K = () => {
      i?.value && A.emit("widget:KpiTableWidget:right_click", {
        type: "widget:KpiTableWidget:right_click",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now() }
      });
    }, y = ae(null);
    re(a, (n, c) => {
      V(n, c);
    }), ie(() => {
      if (i?.value && N.registerInstance(i.value, P, "KpiTableWidget", H), !r.value) return;
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
      showParentChild: Me,
      showFolders: $e
    } = t({
      showParentChild: _(() => r.value.showParentChild ?? !1),
      showFolders: _(() => r.value.showFolders ?? !1)
    }), x = _(() => {
      const n = r.value.statusVisualType;
      return Array.isArray(n) ? n[0] || "Badge" : n || "Badge";
    }), j = _(() => {
      const n = r.value.trendVisualType;
      return Array.isArray(n) ? n[0] || "Badge" : n || "Badge";
    });
    B("statusVisualType", x), B("trendVisualType", j);
    const { update: V } = he(a, "DataTable", y), Y = _(() => {
      if (!y.value) return null;
      let n = y.value;
      return (r.value.showFolders ?? !1) || (n = M(n)), (r.value.showParentChild ?? !1) || (n = $(n)), n;
    });
    function M(n) {
      const c = [];
      function T(p) {
        p.forEach((d) => {
          d.type === "Folder" ? T(d.children || []) : c.push(d);
        });
      }
      return T(n), c;
    }
    function $(n) {
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
    return (n, c) => (oe(), ne("div", {
      class: "w-full h-full",
      onClick: G,
      onContextmenu: le(K, ["prevent"])
    }, [
      ue(de(Te), { tableData: Y.value }, null, 8, ["tableData"])
    ], 32));
  }
}), Pe = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [l, a] of e)
    t[l] = a;
  return t;
}, Ve = /* @__PURE__ */ Pe(Ne, [["__scopeId", "data-v-f4b39436"]]), be = [
  { name: "KpiTable Clicked", type: "click", description: "Triggered when the kpi table widget is clicked", payloadType: b },
  { name: "KpiTable Right Clicked", type: "right_click", description: "Triggered when the kpi table widget is right-clicked", payloadType: b }
];
class m extends _e {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new m()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(u.eINSTANCE);
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
function De(o) {
  const e = k.INSTANCE.getEPackage(o);
  if (!e)
    throw new Error(`EPackage '${o}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing KpitablesettingsPackage.`);
  return e;
}
class u extends fe {
  static eNAME = "kpitablesettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.table.kpi";
  static eNS_PREFIX = "kpitablesettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new u(), this._instance.init()), this._instance;
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
    super(), this.setName(u.eNAME), this.setNsURI(u.eNS_URI), this.setNsPrefix(u.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    k.INSTANCE.set(u.eNS_URI, this), this.setEFactoryInstance(m.eINSTANCE);
    const e = new Se();
    e.setName("KpiTableSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), u.Literals.KPI_TABLE_SETTINGS = e;
    const t = new we();
    t.setContainment(!1), t.setName("headerBackground"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), u.Literals.KPI_TABLE_SETTINGS__HEADER_BACKGROUND = t;
    const l = new S();
    l.setName("trendVisualType"), l.setLowerBound(0), l.setUpperBound(1), e.getEStructuralFeatures().push(l), u.Literals.KPI_TABLE_SETTINGS__TREND_VISUAL_TYPE = l;
    const a = new S();
    a.setName("statusVisualType"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), u.Literals.KPI_TABLE_SETTINGS__STATUS_VISUAL_TYPE = a;
    const r = new S();
    r.setName("showFolders"), r.setLowerBound(0), r.setUpperBound(1), e.getEStructuralFeatures().push(r), u.Literals.KPI_TABLE_SETTINGS__SHOW_FOLDERS = r;
    const i = new S();
    i.setName("showParentChild"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), u.Literals.KPI_TABLE_SETTINGS__SHOW_PARENT_CHILD = i, u.Literals.KPI_TABLE_SETTINGS__HEADER_BACKGROUND.setEType(De("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), u.Literals.KPI_TABLE_SETTINGS__TREND_VISUAL_TYPE.setEType(w().getEClassifier("EString")), u.Literals.KPI_TABLE_SETTINGS__STATUS_VISUAL_TYPE.setEType(w().getEClassifier("EString")), u.Literals.KPI_TABLE_SETTINGS__SHOW_FOLDERS.setEType(w().getEClassifier("EBoolean")), u.Literals.KPI_TABLE_SETTINGS__SHOW_PARENT_CHILD.setEType(w().getEClassifier("EBoolean"));
  }
}
class s extends Ce {
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
    return u.Literals.KPI_TABLE_SETTINGS;
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
const Le = `<?xml version="1.0" encoding="UTF-8"?>
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

    <fields xsi:type="uimodel:GroupWidget" name="marksGroup" layout="VERTICAL" label="tableKpi:Form.marksGroup">
      <fields xsi:type="uimodel:SelectWidget" name="trendVisualType"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.table.kpi#//KpiTableSettings/trendVisualType" label="tableKpi:Form.trendVisualType">
        <values>Emoji</values>
        <values>Arrow</values>
        <values>Chart</values>
        <values>Badge</values>
        <optionLabel language="JS" body="({ Emoji: 'tableKpi:Options.trend.emoji', Arrow: 'tableKpi:Options.trend.arrow', Chart: 'tableKpi:Options.trend.chart', Badge: 'tableKpi:Options.trend.badge' })[option] ?? option"/>
      </fields>
      <fields xsi:type="uimodel:SelectWidget" name="statusVisualType"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.table.kpi#//KpiTableSettings/statusVisualType" label="tableKpi:Form.statusVisualType">
        <values>Emoji</values>
        <values>Lights</values>
        <values>Badge</values>
        <optionLabel language="JS" body="({ Emoji: 'tableKpi:Options.status.emoji', Lights: 'tableKpi:Options.status.lights', Badge: 'tableKpi:Options.status.badge' })[option] ?? option"/>
      </fields>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="shapeGroup" layout="VERTICAL" label="tableKpi:Form.shapeGroup">
      <fields xsi:type="uimodel:CheckboxWidget" name="showFolders"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.table.kpi#//KpiTableSettings/showFolders" label="tableKpi:Form.showFolders"/>
      <fields xsi:type="uimodel:CheckboxWidget" name="showParentChild"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.table.kpi#//KpiTableSettings/showParentChild" label="tableKpi:Form.showParentChild"/>
      <fields xsi:type="uimodel:InputWidget" name="headerBackground"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.table.kpi#//KpiTableSettings/headerBackground" label="tableKpi:Form.headerBackground"/>
    </fields>

  </components>
</uimodel:UIModel>
`, Be = { name: "KPI-Tabelle" }, Fe = { marksGroup: "Kennzeichen", trendVisualType: "Trend", statusVisualType: "Status", shapeGroup: "Aufbau", showFolders: "Ordner zeigen", showParentChild: "Über- und Untereinträge zeigen", headerBackground: "Kopfzeilenfarbe" }, Re = { trend: { emoji: "Emoji", arrow: "Pfeil", chart: "Kurve", badge: "Plakette" }, status: { emoji: "Emoji", lights: "Ampel", badge: "Plakette" } }, Oe = {
  Widget: Be,
  Form: Fe,
  Options: Re
}, ke = { name: "KPI table" }, Ue = { marksGroup: "Indicators", trendVisualType: "Trend", statusVisualType: "Status", shapeGroup: "Structure", showFolders: "Show folders", showParentChild: "Show parent and child entries", headerBackground: "Header colour" }, He = { trend: { emoji: "Emoji", arrow: "Arrow", chart: "Curve", badge: "Badge" }, status: { emoji: "Emoji", lights: "Traffic light", badge: "Badge" } }, We = {
  Widget: ke,
  Form: Ue,
  Options: He
};
var Ge = Object.getOwnPropertyDescriptor, Ke = (o, e, t, l) => {
  for (var a = l > 1 ? void 0 : l ? Ge(e, t) : e, r = o.length - 1, i; r >= 0; r--)
    (i = o[r]) && (a = i(a) || a);
  return a;
};
const U = "tableKpi";
let F = class {
  namespace = U;
  resources = {
    de: Oe,
    en: We
  };
};
F = Ke([
  O({
    service: ["Translations"],
    properties: { "i18n.namespace": U }
  })
], F);
var xe = Object.defineProperty, je = Object.getOwnPropertyDescriptor, v = (o, e, t, l) => {
  for (var a = l > 1 ? void 0 : l ? je(e, t) : e, r = o.length - 1, i; r >= 0; r--)
    (i = o[r]) && (a = (l ? i(e, t, a) : i(a)) || a);
  return l && a && xe(e, t, a), a;
}, R = (o, e) => (t, l) => e(t, l, o);
u.eINSTANCE;
const E = "KpiTableWidget";
let C = class {
  constructor(o, e) {
    this.events = o, this.actions = e;
  }
  type = E;
  component = Ve;
  /*
   * No hand-written form: the model covers all of it, so there is nothing
   * to keep beside it and no second place for the two to disagree.
   *
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Le,
    uri: "/kpi-table-settings.ui.xmi",
    ePackage: () => u.eINSTANCE,
    create: () => new s()
  };
  supportedDSTypes = ["csv", "rest"];
  icon = Ie;
  name = "KpiTable";
  nameKey = "tableKpi:Widget.name";
  register() {
    this.events.registerWidget(E, be), this.actions.registerWidgetType(E, I, "widget");
  }
  unregister() {
    this.events.unregisterWidget(E), this.actions.unregisterWidgetType(E);
  }
};
v([
  q()
], C.prototype, "register", 1);
v([
  Q()
], C.prototype, "unregister", 1);
C = v([
  O({
    service: [ye],
    properties: { "widget.type": E }
  }),
  R(0, D(z)),
  R(1, D(J))
], C);
export {
  s as KpiTableSettingsImpl,
  Ve as KpiTableWidget,
  C as KpiTableWidgetProvider,
  u as KpitablesettingsPackage,
  F as TableKpiTranslations,
  Le as kpiTableSettingsFormXmi
};
