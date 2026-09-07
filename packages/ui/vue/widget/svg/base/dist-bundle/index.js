(function(){var i="ui.vue.widget.svg.base",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".svg[data-v-960288bf]{width:100%;height:100%}.fallback[data-v-960288bf]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#666;font-style:italic}\n";})();
import { WidgetActionInterfaceImpl as se, EVENT_ACTIONS_REGISTRY as ie, PayloadImpl as x, EVENT_REGISTRY_ID as re, EVENT_ACTIONS_REGISTRY_ID as ae } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as ne, deactivate as oe, component as le, inject as U } from "@eclipse-daanse/tsm";
import { defineComponent as ce, mergeModels as ue, toRefs as he, useModel as de, inject as P, ref as y, getCurrentInstance as ge, onMounted as Ce, onUnmounted as pe, watch as fe, computed as K, createElementBlock as B, openBlock as Y, Fragment as Se, createElementVNode as H, createCommentVNode as Ee, mergeProps as _e, withModifiers as X } from "vue";
import { BasicEObject as b, BasicEFactory as me, BasicEPackage as ve, EPackageRegistry as z, BasicEClass as V, BasicEReference as m, BasicEAttribute as $, getEcorePackage as Z, createContainmentEList as Ne } from "@emfts/core";
import { useRoute as Ie } from "vue-router";
import { VariableWrapper as w } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { WidgetAction as q } from "org.eclipse.daanse.board.app.lib.events";
import { WIDGET_SERVICE_ID as we } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Te } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class d extends b {
  // Feature ID Constants (eLiterals)
  static KEY = 0;
  static VALUE = 1;
  // Private fields
  _key;
  _value;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return i.Literals.SVG_CLASS_CONFIG_MAP_ENTRY;
  }
  // Getters and Setters
  get key() {
    return this._key;
  }
  set key(e) {
    const t = this._key;
    this._key = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(d.KEY),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => d.KEY,
      merge: () => !1
    });
  }
  get value() {
    return this._value;
  }
  set value(e) {
    const t = this._value;
    this._value = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(d.VALUE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => d.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case d.KEY:
        return this.key;
      case d.VALUE:
        return this.value;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case d.KEY:
        this.key = t, super.eSet(e, t);
        break;
      case d.VALUE:
        this.value = t, super.eSet(e, t);
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
      case d.KEY:
        return this._key !== void 0;
      case d.VALUE:
        return this._value !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case d.KEY:
        this._key = void 0;
        return;
      case d.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
class a extends b {
  // Feature ID Constants (eLiterals)
  static FILL = 0;
  static STROKE = 1;
  static STROKE_WIDTH = 2;
  static CLASS_NAME = 3;
  // Private fields
  _fill;
  _stroke;
  _strokeWidth;
  _className;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return i.Literals.SVG_CONFIG_ITEM;
  }
  // Getters and Setters
  get fill() {
    return this._fill;
  }
  set fill(e) {
    const t = this._fill;
    this._fill = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.FILL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.FILL,
      merge: () => !1
    });
  }
  get stroke() {
    return this._stroke;
  }
  set stroke(e) {
    const t = this._stroke;
    this._stroke = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.STROKE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.STROKE,
      merge: () => !1
    });
  }
  get strokeWidth() {
    return this._strokeWidth;
  }
  set strokeWidth(e) {
    const t = this._strokeWidth;
    this._strokeWidth = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.STROKE_WIDTH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.STROKE_WIDTH,
      merge: () => !1
    });
  }
  get className() {
    return this._className;
  }
  set className(e) {
    const t = this._className;
    this._className = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(a.CLASS_NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => a.CLASS_NAME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case a.FILL:
        return this.fill;
      case a.STROKE:
        return this.stroke;
      case a.STROKE_WIDTH:
        return this.strokeWidth;
      case a.CLASS_NAME:
        return this.className;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case a.FILL:
        this.fill = t, super.eSet(e, t);
        break;
      case a.STROKE:
        this.stroke = t, super.eSet(e, t);
        break;
      case a.STROKE_WIDTH:
        this.strokeWidth = t, super.eSet(e, t);
        break;
      case a.CLASS_NAME:
        this.className = t, super.eSet(e, t);
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
      case a.FILL:
        return this._fill !== void 0;
      case a.STROKE:
        return this._stroke !== void 0;
      case a.STROKE_WIDTH:
        return this._strokeWidth !== void 0;
      case a.CLASS_NAME:
        return this._className !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case a.FILL:
        this._fill = void 0;
        return;
      case a.STROKE:
        this._stroke = void 0;
        return;
      case a.STROKE_WIDTH:
        this._strokeWidth = void 0;
        return;
      case a.CLASS_NAME:
        this._className = void 0;
        return;
      default:
        super.eUnset(e);
    }
  }
}
class A extends me {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new A()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(i.eINSTANCE);
  }
  /**
   * Create a new SvgSettings instance
   */
  createSvgSettings() {
    return new g();
  }
  /**
   * Create a new SvgClassConfigMapEntry instance
   */
  createSvgClassConfigMapEntry() {
    return new d();
  }
  /**
   * Create a new SvgConfigItem instance
   */
  createSvgConfigItem() {
    return new a();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "SvgSettings":
        return this.createSvgSettings();
      case "SvgClassConfigMapEntry":
        return this.createSvgClassConfigMapEntry();
      case "SvgConfigItem":
        return this.createSvgConfigItem();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function L(l) {
  const e = z.INSTANCE.getEPackage(l);
  if (!e)
    throw new Error(`EPackage '${l}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing SvgwidgetsPackage.`);
  return e;
}
class i extends ve {
  static eNAME = "svgwidgets";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base";
  static eNS_PREFIX = "svgwidgets";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new i(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    SVG_SETTINGS: null,
    SVG_SETTINGS__SRC: null,
    SVG_SETTINGS__CLASSES_CONFIG: null,
    SVG_CLASS_CONFIG_MAP_ENTRY: null,
    SVG_CLASS_CONFIG_MAP_ENTRY__KEY: null,
    SVG_CLASS_CONFIG_MAP_ENTRY__VALUE: null,
    SVG_CONFIG_ITEM: null,
    SVG_CONFIG_ITEM__FILL: null,
    SVG_CONFIG_ITEM__STROKE: null,
    SVG_CONFIG_ITEM__STROKE_WIDTH: null,
    SVG_CONFIG_ITEM__CLASS_NAME: null
  };
  constructor() {
    super(), this.setName(i.eNAME), this.setNsURI(i.eNS_URI), this.setNsPrefix(i.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    z.INSTANCE.set(i.eNS_URI, this), this.setEFactoryInstance(A.eINSTANCE);
    const e = new V();
    e.setName("SvgSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), i.Literals.SVG_SETTINGS = e;
    const t = new m();
    t.setContainment(!1), t.setName("src"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), i.Literals.SVG_SETTINGS__SRC = t;
    const r = new m();
    r.setContainment(!0), r.setName("classesConfig"), r.setLowerBound(0), r.setUpperBound(-1), e.getEStructuralFeatures().push(r), i.Literals.SVG_SETTINGS__CLASSES_CONFIG = r;
    const s = new V();
    s.setName("SvgClassConfigMapEntry"), s.setAbstract(!1), s.setInterface(!1), this.getEClassifiers().push(s), s.setEPackage(this), i.Literals.SVG_CLASS_CONFIG_MAP_ENTRY = s;
    const c = new $();
    c.setName("key"), c.setLowerBound(0), c.setUpperBound(1), s.getEStructuralFeatures().push(c), i.Literals.SVG_CLASS_CONFIG_MAP_ENTRY__KEY = c;
    const u = new m();
    u.setContainment(!0), u.setName("value"), u.setLowerBound(0), u.setUpperBound(1), s.getEStructuralFeatures().push(u), i.Literals.SVG_CLASS_CONFIG_MAP_ENTRY__VALUE = u;
    const C = new V();
    C.setName("SvgConfigItem"), C.setAbstract(!1), C.setInterface(!1), this.getEClassifiers().push(C), C.setEPackage(this), i.Literals.SVG_CONFIG_ITEM = C;
    const E = new m();
    E.setContainment(!1), E.setName("fill"), E.setLowerBound(0), E.setUpperBound(1), C.getEStructuralFeatures().push(E), i.Literals.SVG_CONFIG_ITEM__FILL = E;
    const p = new m();
    p.setContainment(!1), p.setName("stroke"), p.setLowerBound(0), p.setUpperBound(1), C.getEStructuralFeatures().push(p), i.Literals.SVG_CONFIG_ITEM__STROKE = p;
    const f = new m();
    f.setContainment(!1), f.setName("strokeWidth"), f.setLowerBound(0), f.setUpperBound(1), C.getEStructuralFeatures().push(f), i.Literals.SVG_CONFIG_ITEM__STROKE_WIDTH = f;
    const _ = new $();
    _.setName("className"), _.setLowerBound(0), _.setUpperBound(1), C.getEStructuralFeatures().push(_), i.Literals.SVG_CONFIG_ITEM__CLASS_NAME = _, i.Literals.SVG_SETTINGS__SRC.setEType(L("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.SVG_SETTINGS__CLASSES_CONFIG.setEType(i.Literals.SVG_CLASS_CONFIG_MAP_ENTRY), i.Literals.SVG_CLASS_CONFIG_MAP_ENTRY__KEY.setEType(Z().getEClassifier("EString")), i.Literals.SVG_CLASS_CONFIG_MAP_ENTRY__VALUE.setEType(i.Literals.SVG_CONFIG_ITEM), i.Literals.SVG_CONFIG_ITEM__FILL.setEType(L("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.SVG_CONFIG_ITEM__STROKE.setEType(L("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.SVG_CONFIG_ITEM__STROKE_WIDTH.setEType(L("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.SVG_CONFIG_ITEM__CLASS_NAME.setEType(Z().getEClassifier("EString"));
  }
}
class g extends b {
  // Feature ID Constants (eLiterals)
  static SRC = 0;
  static CLASSES_CONFIG = 1;
  // Private fields
  _src;
  _classesConfig;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return i.Literals.SVG_SETTINGS;
  }
  // Getters and Setters
  get src() {
    return this._src;
  }
  set src(e) {
    const t = this._src;
    this._src = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(g.SRC),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => g.SRC,
      merge: () => !1
    });
  }
  get classesConfig() {
    return this._classesConfig || (this._classesConfig = Ne(this, this.eClass().getEStructuralFeature("classesConfig"))), this._classesConfig;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case g.SRC:
        return this.src;
      case g.CLASSES_CONFIG:
        return this.classesConfig;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case g.SRC:
        this.src = t, super.eSet(e, t);
        break;
      case g.CLASSES_CONFIG:
        this.classesConfig.clear(), this.classesConfig.addAll(t), super.eSet(e, t);
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
      case g.SRC:
        return this._src !== void 0;
      case g.CLASSES_CONFIG:
        return this._classesConfig !== void 0 && !this._classesConfig.isEmpty();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case g.SRC:
        this._src = void 0;
        return;
      case g.CLASSES_CONFIG:
        this._classesConfig && this._classesConfig.clear();
        return;
      default:
        super.eUnset(e);
    }
  }
}
var Le = Object.defineProperty, Fe = Object.getOwnPropertyDescriptor, J = (l, e, t, r) => {
  for (var s = Fe(e, t), c = l.length - 1, u; c >= 0; c--)
    (u = l[c]) && (s = u(e, t, s) || s);
  return s && Le(e, t, s), s;
};
class G extends se {
  zoom(e) {
    throw new Error("zoom not implemented");
  }
  resetZoom() {
    throw new Error("resetZoom not implemented");
  }
}
J([
  q({ eventType: "svg.zoom" })
], G.prototype, "zoom");
J([
  q({ eventType: "svg.resetZoom" })
], G.prototype, "resetZoom");
const Ge = ["innerHTML"], ye = ["innerHTML"], Ve = /* @__PURE__ */ ce({
  __name: "SvgWidget",
  props: /* @__PURE__ */ ue({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(l, { expose: e }) {
    const t = l, { id: r } = he(t), s = de(l, "configv"), c = P(Te.TINY_EMITTER), u = P(ie), E = Ie().params.pageid || "", p = y(1), f = y(null);
    class _ extends G {
      zoom(o) {
        p.value = Math.max(0.1, Math.min(10, o));
        const S = f.value;
        S && (S.style.transform = `scale(${p.value})`, S.style.transformOrigin = "top left");
      }
      resetZoom() {
        p.value = 1;
        const o = f.value;
        o && (o.style.transform = "", o.style.transformOrigin = "");
      }
    }
    const D = new _();
    e(D);
    const R = () => {
      r?.value && c.emit("widget:SVGWidget:click", {
        type: "widget:SVGWidget:click",
        widgetId: r.value,
        payload: { widgetId: r.value, timestamp: Date.now() }
      });
    }, M = () => {
      r?.value && c.emit("widget:SVGWidget:right_click", {
        type: "widget:SVGWidget:right_click",
        widgetId: r.value,
        payload: { widgetId: r.value, timestamp: Date.now() }
      });
    }, N = y(""), Q = (ge()?.type).__scopeId, ee = new g(), k = async (n) => {
      const o = n?.value || n;
      if (o && typeof o == "string") {
        console.log("Loading SVG from:", o);
        try {
          const h = await (await fetch(o)).text();
          N.value = h, console.log("SVG loaded successfully, length:", h.length);
        } catch (S) {
          console.error("Failed to load SVG:", S), N.value = "";
        }
      } else
        console.warn("No SVG src provided"), N.value = "";
    }, I = (n, o, S) => {
      const h = n[o];
      if (h == null)
        n[o] = new w(S);
      else if (!(h instanceof w)) if (typeof h == "object" && "value" in h) {
        const T = new w(h.value);
        "variable" in h && (T.variable = h.variable), n[o] = T;
      } else
        n[o] = new w(h);
    };
    Ce(async () => {
      r?.value && u.registerInstance(r.value, D, "SVGWidget", E), s.value && (Object.assign(s.value, { ...ee, ...s.value }), console.log("SVG config:", s.value), console.log("SVG config.value.src:", s.value.src), console.log("SVG config.value (as any).settings:", s.value.settings), !s.value.src && s.value.settings?.src && (console.log("Using legacy settings structure"), s.value.src = s.value.settings.src, s.value.settings.classesConfig && (s.value.classesConfig = s.value.settings.classesConfig)), I(s.value, "src", ""), s.value.classesConfig && s.value.classesConfig.forEach((n) => {
        n.value && (I(n.value, "fill", ""), I(n.value, "stroke", ""), I(n.value, "strokeWidth", ""));
      }), await k(s.value.src));
    }), pe(() => {
      r?.value && u.unregisterInstance(r.value);
    }), fe(
      () => s.value?.src?.value,
      (n) => {
        console.log("SVG src changed to:", n), k(n);
      }
    );
    const te = K(() => {
      let n = "";
      return s.value?.classesConfig && s.value.classesConfig.length > 0 && (n += "<style>", s.value.classesConfig.forEach((o) => {
        if (o.value?.className) {
          const S = o.value.fill?.value || "", h = o.value.stroke?.value || "", T = o.value.strokeWidth?.value || "";
          n += `[${Q || ""}] .${o.value.className} {
                    stroke: ${h};
                    fill: ${S};
                    stroke-width: ${T};
                }`;
        }
      }), n += "</style>"), n;
    }), W = K(() => N.value);
    return (n, o) => (Y(), B(Se, null, [
      H("div", { innerHTML: te.value }, null, 8, Ge),
      H("div", _e(n.$attrs, {
        class: "svg",
        innerHTML: W.value,
        onClick: R,
        onContextmenu: X(M, ["prevent"]),
        ref_key: "svgContainerRef",
        ref: f
      }), null, 16, ye),
      !W.value && !s.value?.src?.value ? (Y(), B("div", {
        key: 0,
        class: "fallback",
        onClick: R,
        onContextmenu: X(M, ["prevent"])
      }, " No SVG configured ", 32)) : Ee("", !0)
    ], 64));
  }
}), be = (l, e) => {
  const t = l.__vccOpts || l;
  for (const [r, s] of e)
    t[r] = s;
  return t;
}, Ae = /* @__PURE__ */ be(Ve, [["__scopeId", "data-v-960288bf"]]), Oe = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M32.6925%2072.4125C31.6925%2072.4125%2030.6425%2072.3375%2029.5425%2072.1875C28.4675%2072.0625%2027.4425%2071.8625%2026.4675%2071.5875C25.4925%2071.3125%2024.6175%2070.9875%2023.8425%2070.6125C23.1675%2070.2875%2022.6925%2069.8625%2022.4175%2069.3375C22.1425%2068.7875%2022.0425%2068.2125%2022.1175%2067.6125C22.1925%2067.0125%2022.405%2066.4875%2022.755%2066.0375C23.105%2065.5625%2023.5675%2065.25%2024.1425%2065.1C24.7175%2064.925%2025.3675%2065%2026.0925%2065.325C27.0425%2065.775%2028.1175%2066.125%2029.3175%2066.375C30.5175%2066.625%2031.6425%2066.75%2032.6925%2066.75C34.3425%2066.75%2035.4925%2066.5375%2036.1425%2066.1125C36.8175%2065.6625%2037.155%2065.1125%2037.155%2064.4625C37.155%2063.8875%2036.9175%2063.425%2036.4425%2063.075C35.9925%2062.725%2035.18%2062.425%2034.005%2062.175L29.6175%2061.2375C27.2175%2060.7375%2025.43%2059.8625%2024.255%2058.6125C23.08%2057.3625%2022.4925%2055.75%2022.4925%2053.775C22.4925%2052.475%2022.755%2051.3%2023.28%2050.25C23.83%2049.175%2024.5925%2048.2625%2025.5675%2047.5125C26.5675%2046.7625%2027.7425%2046.1875%2029.0925%2045.7875C30.4675%2045.3625%2031.9925%2045.15%2033.6675%2045.15C34.9675%2045.15%2036.28%2045.3%2037.605%2045.6C38.955%2045.875%2040.1175%2046.3%2041.0925%2046.875C41.6675%2047.175%2042.08%2047.5875%2042.33%2048.1125C42.58%2048.6375%2042.68%2049.1875%2042.63%2049.7625C42.58%2050.3125%2042.38%2050.8%2042.03%2051.225C41.705%2051.65%2041.255%2051.9375%2040.68%2052.0875C40.13%2052.2125%2039.4675%2052.1125%2038.6925%2051.7875C37.9675%2051.4625%2037.1425%2051.225%2036.2175%2051.075C35.3175%2050.9%2034.4425%2050.8125%2033.5925%2050.8125C32.6675%2050.8125%2031.88%2050.925%2031.23%2051.15C30.58%2051.35%2030.08%2051.65%2029.73%2052.05C29.405%2052.45%2029.2425%2052.9125%2029.2425%2053.4375C29.2425%2053.9625%2029.455%2054.4125%2029.88%2054.7875C30.33%2055.1375%2031.1425%2055.4375%2032.3175%2055.6875L36.6675%2056.625C39.0925%2057.15%2040.905%2058.0125%2042.105%2059.2125C43.305%2060.4125%2043.905%2061.975%2043.905%2063.9C43.905%2065.2%2043.6425%2066.375%2043.1175%2067.425C42.5925%2068.475%2041.8425%2069.375%2040.8675%2070.125C39.8925%2070.85%2038.7175%2071.4125%2037.3425%2071.8125C35.9675%2072.2125%2034.4175%2072.4125%2032.6925%2072.4125Z'%20fill='%23606060'/%3e%3cpath%20d='M58.3311%2072.3375C57.3811%2072.3375%2056.6061%2072.1375%2056.0061%2071.7375C55.4311%2071.3375%2054.9436%2070.7%2054.5436%2069.825L45.4686%2049.8C45.0686%2048.925%2044.9436%2048.1375%2045.0936%2047.4375C45.2436%2046.7375%2045.5936%2046.2%2046.1436%2045.825C46.6936%2045.425%2047.3811%2045.225%2048.2061%2045.225C49.2311%2045.225%2049.9936%2045.45%2050.4936%2045.9C51.0186%2046.35%2051.4686%2047.0125%2051.8436%2047.8875L59.4936%2065.5875H57.3936L65.0436%2047.85C65.4186%2046.975%2065.8686%2046.325%2066.3936%2045.9C66.9186%2045.45%2067.6561%2045.225%2068.6061%2045.225C69.3811%2045.225%2070.0311%2045.425%2070.5561%2045.825C71.0811%2046.2%2071.4061%2046.7375%2071.5311%2047.4375C71.6811%2048.1375%2071.5561%2048.925%2071.1561%2049.8L62.0436%2069.825C61.6686%2070.7%2061.1936%2071.3375%2060.6186%2071.7375C60.0436%2072.1375%2059.2811%2072.3375%2058.3311%2072.3375Z'%20fill='%23606060'/%3e%3cpath%20d='M87.4173%2072.4125C84.3923%2072.4125%2081.8173%2071.85%2079.6923%2070.725C77.5923%2069.6%2075.9923%2068.025%2074.8923%2066C73.7923%2063.975%2073.2423%2061.6125%2073.2423%2058.9125C73.2423%2056.8125%2073.5673%2054.925%2074.2173%2053.25C74.8923%2051.55%2075.8548%2050.1%2077.1048%2048.9C78.3548%2047.675%2079.8798%2046.75%2081.6798%2046.125C83.5048%2045.475%2085.5673%2045.15%2087.8673%2045.15C89.1173%2045.15%2090.3923%2045.275%2091.6923%2045.525C92.9923%2045.75%2094.2673%2046.1875%2095.5173%2046.8375C96.1673%2047.1375%2096.6048%2047.5625%2096.8298%2048.1125C97.0798%2048.6375%2097.1548%2049.2%2097.0548%2049.8C96.9798%2050.375%2096.7673%2050.9125%2096.4173%2051.4125C96.0923%2051.8875%2095.6423%2052.2125%2095.0673%2052.3875C94.4923%2052.5375%2093.8423%2052.45%2093.1173%2052.125C92.3673%2051.775%2091.5548%2051.5125%2090.6798%2051.3375C89.8048%2051.1375%2088.8798%2051.0375%2087.9048%2051.0375C86.2298%2051.0375%2084.8298%2051.3375%2083.7048%2051.9375C82.6048%2052.5375%2081.7798%2053.425%2081.2298%2054.6C80.6798%2055.775%2080.4048%2057.2125%2080.4048%2058.9125C80.4048%2061.4625%2081.0298%2063.3875%2082.2798%2064.6875C83.5298%2065.9875%2085.3798%2066.6375%2087.8298%2066.6375C88.5798%2066.6375%2089.3923%2066.5625%2090.2673%2066.4125C91.1673%2066.2625%2092.0673%2066.05%2092.9673%2065.775L91.6923%2068.3625V61.95H89.0673C88.2173%2061.95%2087.5548%2061.7375%2087.0798%2061.3125C86.6298%2060.8875%2086.4048%2060.2875%2086.4048%2059.5125C86.4048%2058.7375%2086.6298%2058.15%2087.0798%2057.75C87.5548%2057.325%2088.2173%2057.1125%2089.0673%2057.1125H94.6173C95.4923%2057.1125%2096.1548%2057.35%2096.6048%2057.825C97.0798%2058.275%2097.3173%2058.9375%2097.3173%2059.8125V68.1C97.3173%2068.85%2097.1548%2069.4875%2096.8298%2070.0125C96.5298%2070.5375%2096.0423%2070.9125%2095.3673%2071.1375C94.1923%2071.5375%2092.9173%2071.85%2091.5423%2072.075C90.1673%2072.3%2088.7923%2072.4125%2087.4173%2072.4125Z'%20fill='%23606060'/%3e%3c/svg%3e", De = [
  { name: "SVG Clicked", type: "click", description: "Triggered when the SVG widget is clicked", payloadType: x },
  { name: "SVG Right Clicked", type: "right_click", description: "Triggered when the SVG widget is right-clicked", payloadType: x }
], Re = `<?xml version="1.0" encoding="UTF-8"?>
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

The form for the SVG widget.

The drawing first, then the rules that colour it. Each rule names a CSS
class in the file and says what to paint the shapes carrying it - which is
how one drawing serves as a diagram: the shapes are drawn once, the colours
come from here or from a variable.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="SvgSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgSettings"/>

  <components xsi:type="uimodel:FormView" name="SvgSettingsFormView">
    <fields xsi:type="uimodel:InputWidget" name="src"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgSettings/src" label="Adresse der Grafik"
        placeholder="https://… oder ein Pfad"/>
    <fields xsi:type="uimodel:InputWidget" name="classesConfig"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgSettings/classesConfig" label="Klassenregeln"/>
  </components>
</uimodel:UIModel>
`, Me = `<?xml version="1.0" encoding="UTF-8"?>
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

One rule, as the model stores it.

The class is named twice in this structure - once as the entry's key and
once inside the rule - and it is the inner one the widget builds its CSS
from. Only that one is offered, so there is no way to set the two to
different things.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="SvgClassConfigMapEntryForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgClassConfigMapEntry"/>

  <components xsi:type="uimodel:FormView" name="SvgClassConfigMapEntryFormView">
    <fields xsi:type="uimodel:InputWidget" name="value"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgClassConfigMapEntry/value" label=""/>
  </components>
</uimodel:UIModel>
`, ke = `<?xml version="1.0" encoding="UTF-8"?>
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

What one rule paints.

The class name comes first because it is what the rule is about: the rest
only means something once it is known which shapes are being talked about.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="SvgConfigItemForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgConfigItem"/>

  <components xsi:type="uimodel:FormView" name="SvgConfigItemFormView">
    <fields xsi:type="uimodel:InputWidget" name="className"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgConfigItem/className" label="CSS-Klasse"
        placeholder="primary"/>
    <fields xsi:type="uimodel:InputWidget" name="fill"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgConfigItem/fill" label="Füllfarbe"/>
    <fields xsi:type="uimodel:InputWidget" name="stroke"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgConfigItem/stroke" label="Linienfarbe"/>
    <fields xsi:type="uimodel:InputWidget" name="strokeWidth"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgConfigItem/strokeWidth" label="Linienstärke"/>
  </components>
</uimodel:UIModel>
`;
var We = Object.defineProperty, xe = Object.getOwnPropertyDescriptor, O = (l, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? xe(e, t) : e, c = l.length - 1, u; c >= 0; c--)
    (u = l[c]) && (s = (r ? u(e, t, s) : u(s)) || s);
  return r && s && We(e, t, s), s;
}, j = (l, e) => (t, r) => e(t, r, l);
i.eINSTANCE;
const v = "SVGWidget";
let F = class {
  constructor(l, e) {
    this.events = l, this.actions = e;
  }
  type = v;
  component = Ae;
  /*
   * No hand-written form: the model covers all of it. Everything this
   * widget is configured with - the drawing and the rules that colour it -
   * is a field or a list of them, so there is nothing left to write by
   * hand and no second place for the two to disagree.
   */
  supportedDSTypes = [];
  icon = Oe;
  name = "SVG";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Re,
    uri: "/svg-settings.ui.xmi",
    ePackage: () => i.eINSTANCE,
    create: () => new g(),
    /* Forms for the classes that appear inside this one. */
    entryForms: [
      { xmi: Me, uri: "/svg-entry.ui.xmi" },
      { xmi: ke, uri: "/svg-rule.ui.xmi" }
    ]
  };
  register() {
    this.events.registerWidget(v, De), this.actions.registerWidgetType(v, G, "widget");
  }
  unregister() {
    this.events.unregisterWidget(v), this.actions.unregisterWidgetType(v);
  }
};
O([
  ne()
], F.prototype, "register", 1);
O([
  oe()
], F.prototype, "unregister", 1);
F = O([
  le({
    service: [we],
    properties: { "widget.type": v }
  }),
  j(0, U(re)),
  j(1, U(ae))
], F);
export {
  F as SVGWidgetProvider,
  g as SvgSettingsImpl,
  Ae as SvgWidget,
  i as SvgwidgetsPackage,
  Re as svgSettingsFormXmi
};
