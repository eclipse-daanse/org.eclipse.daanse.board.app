(function(){var i="ui.vue.widget.svg.repeat",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".repeatable-svg-container[data-v-60b124e5]{width:100%;height:100%;display:flex;flex-direction:row;object-fit:contain}\n";})();
import { WidgetActionInterfaceImpl as oe, EVENT_ACTIONS_REGISTRY as ne, PayloadImpl as x, EVENT_REGISTRY_ID as le, EVENT_ACTIONS_REGISTRY_ID as ue } from "org.eclipse.daanse.board.app.lib.api.events";
import { component as K, activate as ce, deactivate as pe, inject as k } from "@eclipse-daanse/tsm";
import { defineComponent as de, mergeModels as Ee, toRefs as Se, useModel as he, inject as B, ref as G, onMounted as _e, onUnmounted as ge, watch as fe, computed as T, createElementBlock as m, openBlock as C, withModifiers as Te, createElementVNode as w, Fragment as Y, renderList as U } from "vue";
import { BasicEObject as Z, BasicEFactory as me, BasicEPackage as Ce, EPackageRegistry as X, BasicEClass as H, BasicEReference as f, BasicEAttribute as ve, getEcorePackage as Ie } from "@emfts/core";
import { useRoute as Le } from "vue-router";
import { VariableWrapper as A } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { WidgetAction as j } from "org.eclipse.daanse.board.app.lib.events";
import { WIDGET_SERVICE_ID as ye } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: we } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class n extends Z {
  // Feature ID Constants (eLiterals)
  static FILL = 0;
  static STROKE = 1;
  static CLASS_NAME = 2;
  // Private fields
  _fill;
  _stroke;
  _className;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return a.Literals.S_V_G_ITEM_STYLES;
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
      getFeature: () => this.eClass().getEStructuralFeature(n.FILL),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.FILL,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.STROKE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.STROKE,
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
      getFeature: () => this.eClass().getEStructuralFeature(n.CLASS_NAME),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.CLASS_NAME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case n.FILL:
        return this.fill;
      case n.STROKE:
        return this.stroke;
      case n.CLASS_NAME:
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
      case n.FILL:
        this.fill = t, super.eSet(e, t);
        break;
      case n.STROKE:
        this.stroke = t, super.eSet(e, t);
        break;
      case n.CLASS_NAME:
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
      case n.FILL:
        return this._fill !== void 0;
      case n.STROKE:
        return this._stroke !== void 0;
      case n.CLASS_NAME:
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
      case n.FILL:
        this._fill = void 0;
        return;
      case n.STROKE:
        this._stroke = void 0;
        return;
      case n.CLASS_NAME:
        this._className = void 0;
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
      fill: this.fill,
      stroke: this.stroke,
      className: this.className
    };
  }
}
class V extends me {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new V()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(a.eINSTANCE);
  }
  /**
   * Create a new RepeatableSVGSettings instance
   */
  createRepeatableSVGSettings() {
    return new r();
  }
  /**
   * Create a new SVGItemStyles instance
   */
  createSVGItemStyles() {
    return new n();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "RepeatableSVGSettings":
        return this.createRepeatableSVGSettings();
      case "SVGItemStyles":
        return this.createSVGItemStyles();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function y(o) {
  const e = X.INSTANCE.getEPackage(o);
  if (!e)
    throw new Error(`EPackage '${o}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing RepeatableSvgWidgetsPackage.`);
  return e;
}
class a extends Ce {
  static eNAME = "repeatableSvgWidgets";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat";
  static eNS_PREFIX = "repeatableSvgWidgets";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new a(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    REPEATABLE_S_V_G_SETTINGS: null,
    REPEATABLE_S_V_G_SETTINGS__SRC: null,
    REPEATABLE_S_V_G_SETTINGS__ACTIVE_ITEM_STYLES: null,
    REPEATABLE_S_V_G_SETTINGS__DEFAULT_ITEM_STYLES: null,
    REPEATABLE_S_V_G_SETTINGS__REPETITIONS: null,
    REPEATABLE_S_V_G_SETTINGS__PROGRESS: null,
    S_V_G_ITEM_STYLES: null,
    S_V_G_ITEM_STYLES__FILL: null,
    S_V_G_ITEM_STYLES__STROKE: null,
    S_V_G_ITEM_STYLES__CLASS_NAME: null
  };
  constructor() {
    super(), this.setName(a.eNAME), this.setNsURI(a.eNS_URI), this.setNsPrefix(a.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    X.INSTANCE.set(a.eNS_URI, this), this.setEFactoryInstance(V.eINSTANCE);
    const e = new H();
    e.setName("RepeatableSVGSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), a.Literals.REPEATABLE_S_V_G_SETTINGS = e;
    const t = new f();
    t.setContainment(!1), t.setName("src"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), a.Literals.REPEATABLE_S_V_G_SETTINGS__SRC = t;
    const i = new f();
    i.setContainment(!0), i.setName("activeItemStyles"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), a.Literals.REPEATABLE_S_V_G_SETTINGS__ACTIVE_ITEM_STYLES = i;
    const s = new f();
    s.setContainment(!0), s.setName("defaultItemStyles"), s.setLowerBound(0), s.setUpperBound(1), e.getEStructuralFeatures().push(s), a.Literals.REPEATABLE_S_V_G_SETTINGS__DEFAULT_ITEM_STYLES = s;
    const l = new f();
    l.setContainment(!1), l.setName("repetitions"), l.setLowerBound(0), l.setUpperBound(1), e.getEStructuralFeatures().push(l), a.Literals.REPEATABLE_S_V_G_SETTINGS__REPETITIONS = l;
    const c = new f();
    c.setContainment(!1), c.setName("progress"), c.setLowerBound(0), c.setUpperBound(1), e.getEStructuralFeatures().push(c), a.Literals.REPEATABLE_S_V_G_SETTINGS__PROGRESS = c;
    const S = new H();
    S.setName("SVGItemStyles"), S.setAbstract(!1), S.setInterface(!1), this.getEClassifiers().push(S), S.setEPackage(this), a.Literals.S_V_G_ITEM_STYLES = S;
    const g = new f();
    g.setContainment(!1), g.setName("fill"), g.setLowerBound(0), g.setUpperBound(1), S.getEStructuralFeatures().push(g), a.Literals.S_V_G_ITEM_STYLES__FILL = g;
    const h = new f();
    h.setContainment(!1), h.setName("stroke"), h.setLowerBound(0), h.setUpperBound(1), S.getEStructuralFeatures().push(h), a.Literals.S_V_G_ITEM_STYLES__STROKE = h;
    const _ = new ve();
    _.setName("className"), _.setLowerBound(0), _.setUpperBound(1), S.getEStructuralFeatures().push(_), a.Literals.S_V_G_ITEM_STYLES__CLASS_NAME = _, a.Literals.REPEATABLE_S_V_G_SETTINGS__SRC.setEType(y("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.REPEATABLE_S_V_G_SETTINGS__ACTIVE_ITEM_STYLES.setEType(a.Literals.S_V_G_ITEM_STYLES), a.Literals.REPEATABLE_S_V_G_SETTINGS__DEFAULT_ITEM_STYLES.setEType(a.Literals.S_V_G_ITEM_STYLES), a.Literals.REPEATABLE_S_V_G_SETTINGS__REPETITIONS.setEType(y("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.REPEATABLE_S_V_G_SETTINGS__PROGRESS.setEType(y("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.S_V_G_ITEM_STYLES__FILL.setEType(y("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.S_V_G_ITEM_STYLES__STROKE.setEType(y("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), a.Literals.S_V_G_ITEM_STYLES__CLASS_NAME.setEType(Ie().getEClassifier("EString"));
  }
}
class r extends Z {
  // Feature ID Constants (eLiterals)
  static SRC = 0;
  static ACTIVE_ITEM_STYLES = 1;
  static DEFAULT_ITEM_STYLES = 2;
  static REPETITIONS = 3;
  static PROGRESS = 4;
  // Private fields
  _src;
  _activeItemStyles;
  _defaultItemStyles;
  _repetitions;
  _progress;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return a.Literals.REPEATABLE_S_V_G_SETTINGS;
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
      getFeature: () => this.eClass().getEStructuralFeature(r.SRC),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.SRC,
      merge: () => !1
    });
  }
  get activeItemStyles() {
    return this._activeItemStyles;
  }
  set activeItemStyles(e) {
    const t = this._activeItemStyles;
    this._activeItemStyles = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.ACTIVE_ITEM_STYLES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.ACTIVE_ITEM_STYLES,
      merge: () => !1
    });
  }
  get defaultItemStyles() {
    return this._defaultItemStyles;
  }
  set defaultItemStyles(e) {
    const t = this._defaultItemStyles;
    this._defaultItemStyles = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.DEFAULT_ITEM_STYLES),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.DEFAULT_ITEM_STYLES,
      merge: () => !1
    });
  }
  get repetitions() {
    return this._repetitions;
  }
  set repetitions(e) {
    const t = this._repetitions;
    this._repetitions = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.REPETITIONS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.REPETITIONS,
      merge: () => !1
    });
  }
  get progress() {
    return this._progress;
  }
  set progress(e) {
    const t = this._progress;
    this._progress = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(r.PROGRESS),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => r.PROGRESS,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.SRC:
        return this.src;
      case r.ACTIVE_ITEM_STYLES:
        return this.activeItemStyles;
      case r.DEFAULT_ITEM_STYLES:
        return this.defaultItemStyles;
      case r.REPETITIONS:
        return this.repetitions;
      case r.PROGRESS:
        return this.progress;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case r.SRC:
        this.src = t, super.eSet(e, t);
        break;
      case r.ACTIVE_ITEM_STYLES:
        this.activeItemStyles = t, super.eSet(e, t);
        break;
      case r.DEFAULT_ITEM_STYLES:
        this.defaultItemStyles = t, super.eSet(e, t);
        break;
      case r.REPETITIONS:
        this.repetitions = t, super.eSet(e, t);
        break;
      case r.PROGRESS:
        this.progress = t, super.eSet(e, t);
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
      case r.SRC:
        return this._src !== void 0;
      case r.ACTIVE_ITEM_STYLES:
        return this._activeItemStyles !== void 0;
      case r.DEFAULT_ITEM_STYLES:
        return this._defaultItemStyles !== void 0;
      case r.REPETITIONS:
        return this._repetitions !== void 0;
      case r.PROGRESS:
        return this._progress !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case r.SRC:
        this._src = void 0;
        return;
      case r.ACTIVE_ITEM_STYLES:
        this._activeItemStyles = void 0;
        return;
      case r.DEFAULT_ITEM_STYLES:
        this._defaultItemStyles = void 0;
        return;
      case r.REPETITIONS:
        this._repetitions = void 0;
        return;
      case r.PROGRESS:
        this._progress = void 0;
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
      src: this.src,
      activeItemStyles: this.activeItemStyles,
      defaultItemStyles: this.defaultItemStyles,
      repetitions: this.repetitions,
      progress: this.progress
    };
  }
}
var Ne = Object.defineProperty, Ae = Object.getOwnPropertyDescriptor, z = (o, e, t, i) => {
  for (var s = Ae(e, t), l = o.length - 1, c; l >= 0; l--)
    (c = o[l]) && (s = c(e, t, s) || s);
  return s && Ne(e, t, s), s;
};
class R extends oe {
  zoom(e) {
    throw new Error("zoom not implemented");
  }
  resetZoom() {
    throw new Error("resetZoom not implemented");
  }
}
z([
  j({ eventType: "svgRepeat.zoom" })
], R.prototype, "zoom");
z([
  j({ eventType: "svgRepeat.resetZoom" })
], R.prototype, "resetZoom");
const Fe = ["viewBox"], Re = { id: "bubbleKenseo" }, Ge = ["width"], Ve = ["fill", "stroke"], be = ["innerHTML", "transform"], Me = ["fill", "stroke"], De = ["innerHTML", "transform"], Oe = /* @__PURE__ */ de({
  __name: "RepeatableSvgWidget",
  props: /* @__PURE__ */ Ee({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(o, { expose: e }) {
    const t = o, { id: i } = Se(t), s = he(o, "configv"), l = B(we.TINY_EMITTER), c = B(ne), g = Le().params.pageid || "", h = G(1), _ = G(null);
    class J extends R {
      zoom(p) {
        h.value = Math.max(0.1, Math.min(10, p));
        const d = _.value;
        d && (d.style.transform = `scale(${h.value})`, d.style.transformOrigin = "top left");
      }
      resetZoom() {
        h.value = 1;
        const p = _.value;
        p && (p.style.transform = "", p.style.transformOrigin = "");
      }
    }
    const M = new J();
    e(M);
    const Q = () => {
      i?.value && l.emit("widget:RepeatableSVGWidget:click", {
        type: "widget:RepeatableSVGWidget:click",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now() }
      });
    }, ee = () => {
      i?.value && l.emit("widget:RepeatableSVGWidget:right_click", {
        type: "widget:RepeatableSVGWidget:right_click",
        widgetId: i.value,
        payload: { widgetId: i.value, timestamp: Date.now() }
      });
    }, I = G("");
    new r();
    const D = async (u) => {
      const p = u?.value || u;
      if (p && typeof p == "string")
        try {
          const E = await (await fetch(p)).text();
          I.value = E;
        } catch (d) {
          console.error("Failed to load SVG:", d), I.value = "";
        }
      else
        I.value = "";
    }, L = (u, p, d) => {
      const E = u[p];
      if (E == null)
        u[p] = new A(d);
      else if (!(E instanceof A)) if (typeof E == "object" && "value" in E) {
        const P = new A(E.value);
        "variable" in E && (P.variable = E.variable), u[p] = P;
      } else
        u[p] = new A(E);
    }, O = (u) => {
      u && (L(u, "fill", "#000000"), L(u, "stroke", "none"));
    };
    _e(async () => {
      i?.value && c.registerInstance(i.value, M, "RepeatableSVGWidget", g), s.value || (s.value = new r()), L(s.value, "src", ""), L(s.value, "repetitions", "1"), L(s.value, "progress", "0"), s.value.activeItemStyles || (s.value.activeItemStyles = new n()), O(s.value.activeItemStyles), s.value.defaultItemStyles || (s.value.defaultItemStyles = new n()), O(s.value.defaultItemStyles), await D(s.value.src);
    }), ge(() => {
      i?.value && c.unregisterInstance(i.value);
    }), fe(
      () => s.value?.src?.value,
      (u) => {
        D(u);
      }
    );
    const N = T(() => {
      const u = s.value?.repetitions?.value ?? "1";
      return isNaN(parseFloat(u)) ? 1 : Math.floor(Number(u));
    }), te = T(() => {
      const u = s.value?.progress?.value ?? "0";
      return isNaN(parseFloat(u)) ? 0 : Number(u);
    }), se = T(() => s.value?.activeItemStyles?.fill?.value), re = T(() => s.value?.activeItemStyles?.stroke?.value), ie = T(() => s.value?.defaultItemStyles?.fill?.value), ae = T(() => s.value?.defaultItemStyles?.stroke?.value);
    return (u, p) => (C(), m("div", {
      class: "repeatable-svg-container",
      onClick: Q,
      onContextmenu: Te(ee, ["prevent"]),
      ref_key: "rsvgContainerRef",
      ref: _
    }, [
      (C(), m("svg", {
        fill: "#000000",
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: `0 0 ${100 * N.value} 100`,
        "enable-background": "new 0 0 100 100",
        "xml:space": "preserve"
      }, [
        w("defs", null, [
          w("mask", Re, [
            w("rect", {
              x: "0",
              y: "0",
              style: { fill: "#adadad" },
              width: 100 * N.value * te.value,
              height: "100"
            }, null, 8, Ge)
          ])
        ]),
        w("g", {
          fill: ie.value,
          stroke: ae.value
        }, [
          (C(!0), m(Y, null, U(N.value, (d) => (C(), m("g", {
            innerHTML: I.value,
            transform: `translate(${100 * (d - 1)}, 0)`,
            key: d
          }, null, 8, be))), 128))
        ], 8, Ve),
        w("g", {
          mask: "url(#bubbleKenseo)",
          fill: se.value,
          stroke: re.value
        }, [
          (C(!0), m(Y, null, U(N.value, (d) => (C(), m("g", {
            innerHTML: I.value,
            transform: `translate(${100 * (d - 1)}, 0)`,
            key: d
          }, null, 8, De))), 128))
        ], 8, Me)
      ], 8, Fe))
    ], 544));
  }
}), Pe = (o, e) => {
  const t = o.__vccOpts || o;
  for (const [i, s] of e)
    t[i] = s;
  return t;
}, xe = /* @__PURE__ */ Pe(Oe, [["__scopeId", "data-v-60b124e5"]]), ke = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M46.8924%2066.198C46.4124%2066.198%2045.9084%2066.162%2045.3804%2066.09C44.8644%2066.03%2044.3724%2065.934%2043.9044%2065.802C43.4364%2065.67%2043.0164%2065.514%2042.6444%2065.334C42.3204%2065.178%2042.0924%2064.974%2041.9604%2064.722C41.8284%2064.458%2041.7804%2064.182%2041.8164%2063.894C41.8524%2063.606%2041.9544%2063.354%2042.1224%2063.138C42.2904%2062.91%2042.5124%2062.76%2042.7884%2062.688C43.0644%2062.604%2043.3764%2062.64%2043.7244%2062.796C44.1804%2063.012%2044.6964%2063.18%2045.2724%2063.3C45.8484%2063.42%2046.3884%2063.48%2046.8924%2063.48C47.6844%2063.48%2048.2364%2063.378%2048.5484%2063.174C48.8724%2062.958%2049.0344%2062.694%2049.0344%2062.382C49.0344%2062.106%2048.9204%2061.884%2048.6924%2061.716C48.4764%2061.548%2048.0864%2061.404%2047.5224%2061.284L45.4164%2060.834C44.2644%2060.594%2043.4064%2060.174%2042.8424%2059.574C42.2784%2058.974%2041.9964%2058.2%2041.9964%2057.252C41.9964%2056.628%2042.1224%2056.064%2042.3744%2055.56C42.6384%2055.044%2043.0044%2054.606%2043.4724%2054.246C43.9524%2053.886%2044.5164%2053.61%2045.1644%2053.418C45.8244%2053.214%2046.5564%2053.112%2047.3604%2053.112C47.9844%2053.112%2048.6144%2053.184%2049.2504%2053.328C49.8984%2053.46%2050.4564%2053.664%2050.9244%2053.94C51.2004%2054.084%2051.3984%2054.282%2051.5184%2054.534C51.6384%2054.786%2051.6864%2055.05%2051.6624%2055.326C51.6384%2055.59%2051.5424%2055.824%2051.3744%2056.028C51.2184%2056.232%2051.0024%2056.37%2050.7264%2056.442C50.4624%2056.502%2050.1444%2056.454%2049.7724%2056.298C49.4244%2056.142%2049.0284%2056.028%2048.5844%2055.956C48.1524%2055.872%2047.7324%2055.83%2047.3244%2055.83C46.8804%2055.83%2046.5024%2055.884%2046.1904%2055.992C45.8784%2056.088%2045.6384%2056.232%2045.4704%2056.424C45.3144%2056.616%2045.2364%2056.838%2045.2364%2057.09C45.2364%2057.342%2045.3384%2057.558%2045.5424%2057.738C45.7584%2057.906%2046.1484%2058.05%2046.7124%2058.17L48.8004%2058.62C49.9644%2058.872%2050.8344%2059.286%2051.4104%2059.862C51.9864%2060.438%2052.2744%2061.188%2052.2744%2062.112C52.2744%2062.736%2052.1484%2063.3%2051.8964%2063.804C51.6444%2064.308%2051.2844%2064.74%2050.8164%2065.1C50.3484%2065.448%2049.7844%2065.718%2049.1244%2065.91C48.4644%2066.102%2047.7204%2066.198%2046.8924%2066.198Z'%20fill='%23606060'/%3e%3cpath%20d='M59.1989%2066.162C58.7429%2066.162%2058.3709%2066.066%2058.0829%2065.874C57.8069%2065.682%2057.5729%2065.376%2057.3809%2064.956L53.0249%2055.344C52.8329%2054.924%2052.7729%2054.546%2052.8449%2054.21C52.9169%2053.874%2053.0849%2053.616%2053.3489%2053.436C53.6129%2053.244%2053.9429%2053.148%2054.3389%2053.148C54.8309%2053.148%2055.1969%2053.256%2055.4369%2053.472C55.6889%2053.688%2055.9049%2054.006%2056.0849%2054.426L59.7569%2062.922H58.7489L62.4209%2054.408C62.6009%2053.988%2062.8169%2053.676%2063.0689%2053.472C63.3209%2053.256%2063.6749%2053.148%2064.1309%2053.148C64.5029%2053.148%2064.8149%2053.244%2065.0669%2053.436C65.3189%2053.616%2065.4749%2053.874%2065.5349%2054.21C65.6069%2054.546%2065.5469%2054.924%2065.3549%2055.344L60.9809%2064.956C60.8009%2065.376%2060.5729%2065.682%2060.2969%2065.874C60.0209%2066.066%2059.6549%2066.162%2059.1989%2066.162Z'%20fill='%23606060'/%3e%3cpath%20d='M73.1603%2066.198C71.7083%2066.198%2070.4723%2065.928%2069.4523%2065.388C68.4443%2064.848%2067.6763%2064.092%2067.1483%2063.12C66.6203%2062.148%2066.3563%2061.014%2066.3563%2059.718C66.3563%2058.71%2066.5123%2057.804%2066.8243%2057C67.1483%2056.184%2067.6103%2055.488%2068.2103%2054.912C68.8103%2054.324%2069.5423%2053.88%2070.4063%2053.58C71.2823%2053.268%2072.2723%2053.112%2073.3763%2053.112C73.9763%2053.112%2074.5883%2053.172%2075.2123%2053.292C75.8363%2053.4%2076.4483%2053.61%2077.0483%2053.922C77.3603%2054.066%2077.5703%2054.27%2077.6783%2054.534C77.7983%2054.786%2077.8343%2055.056%2077.7863%2055.344C77.7503%2055.62%2077.6483%2055.878%2077.4803%2056.118C77.3243%2056.346%2077.1083%2056.502%2076.8323%2056.586C76.5563%2056.658%2076.2443%2056.616%2075.8963%2056.46C75.5363%2056.292%2075.1463%2056.166%2074.7263%2056.082C74.3063%2055.986%2073.8623%2055.938%2073.3943%2055.938C72.5903%2055.938%2071.9183%2056.082%2071.3783%2056.37C70.8503%2056.658%2070.4543%2057.084%2070.1903%2057.648C69.9263%2058.212%2069.7943%2058.902%2069.7943%2059.718C69.7943%2060.942%2070.0943%2061.866%2070.6943%2062.49C71.2943%2063.114%2072.1823%2063.426%2073.3583%2063.426C73.7183%2063.426%2074.1083%2063.39%2074.5283%2063.318C74.9603%2063.246%2075.3923%2063.144%2075.8243%2063.012L75.2123%2064.254V61.176H73.9523C73.5443%2061.176%2073.2263%2061.074%2072.9983%2060.87C72.7823%2060.666%2072.6743%2060.378%2072.6743%2060.006C72.6743%2059.634%2072.7823%2059.352%2072.9983%2059.16C73.2263%2058.956%2073.5443%2058.854%2073.9523%2058.854H76.6163C77.0363%2058.854%2077.3543%2058.968%2077.5703%2059.196C77.7983%2059.412%2077.9123%2059.73%2077.9123%2060.15V64.128C77.9123%2064.488%2077.8343%2064.794%2077.6783%2065.046C77.5343%2065.298%2077.3003%2065.478%2076.9763%2065.586C76.4123%2065.778%2075.8003%2065.928%2075.1403%2066.036C74.4803%2066.144%2073.8203%2066.198%2073.1603%2066.198Z'%20fill='%23606060'/%3e%3cpath%20d='M30%2030C30%2025.8579%2033.3579%2022.5%2037.5%2022.5H82.5C86.6421%2022.5%2090%2025.8579%2090%2030V36C90%2036.8284%2090.6716%2037.5%2091.5%2037.5H94.5C95.7361%2037.5%2096.4416%2038.9111%2095.7%2039.9L87.45%2050.9C86.85%2051.7%2085.65%2051.7%2085.05%2050.9L76.8%2039.9C76.0584%2038.9111%2076.7639%2037.5%2078%2037.5H81.25C81.9404%2037.5%2082.5%2036.9404%2082.5%2036.25C82.5%2032.7982%2079.7018%2030%2076.25%2030H45C40.8579%2030%2037.5%2033.3579%2037.5%2037.5V43.5C37.5%2044.3284%2036.8284%2045%2036%2045H31.5C30.6716%2045%2030%2044.3284%2030%2043.5V30Z'%20fill='%23606060'/%3e%3cpath%20d='M90%2090C90%2094.1421%2086.6421%2097.5%2082.5%2097.5H37.5C33.3579%2097.5%2030%2094.1421%2030%2090V84C30%2083.1716%2029.3284%2082.5%2028.5%2082.5H25.5C24.2639%2082.5%2023.5584%2081.0889%2024.3%2080.1L32.55%2069.1C33.15%2068.3%2034.35%2068.3%2034.95%2069.1L43.2%2080.1C43.9416%2081.0889%2043.2361%2082.5%2042%2082.5H38.75C38.0596%2082.5%2037.5%2083.0596%2037.5%2083.75C37.5%2087.2018%2040.2982%2090%2043.75%2090H75C79.1421%2090%2082.5%2086.6421%2082.5%2082.5V76.5C82.5%2075.6716%2083.1716%2075%2084%2075H88.5C89.3284%2075%2090%2075.6716%2090%2076.5V90Z'%20fill='%23606060'/%3e%3c/svg%3e", Be = [
  { name: "Repeatable SVG Clicked", type: "click", description: "Triggered when the Repeatable SVG widget is clicked", payloadType: x },
  { name: "Repeatable SVG Right Clicked", type: "right_click", description: "Triggered when the Repeatable SVG widget is right-clicked", payloadType: x }
], Ye = `<?xml version="1.0" encoding="UTF-8"?>
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

The form for the repeatable SVG widget.

The widget draws one small picture over and over and colours the first few
differently - five of ten batteries filled, three of five stars. So: the
picture, how many of it, how far along, and then the two looks that
difference is made of. The two looks are alike on purpose - it is the same
two properties either side of the line, and seeing them in the same order
is what makes the pair readable.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="RepeatableSVGSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat#//RepeatableSVGSettings"/>

  <components xsi:type="uimodel:FormView" name="RepeatableSVGSettingsFormView">

    <fields xsi:type="uimodel:GroupWidget" name="sourceGroup" layout="VERTICAL" label="svgRepeat:Form.sourceGroup">
      <fields xsi:type="uimodel:InputWidget" name="src"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat#//RepeatableSVGSettings/src" label="svgRepeat:Form.src"
          placeholder="https://… oder ein Pfad"/>
      <fields xsi:type="uimodel:NumberWidget" name="repetitions"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat#//RepeatableSVGSettings/repetitions" label="svgRepeat:Form.repetitions" min="1" step="1"/>
      <fields xsi:type="uimodel:NumberWidget" name="progress"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat#//RepeatableSVGSettings/progress" label="svgRepeat:Form.progress" min="0" step="1"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="activeGroup" layout="VERTICAL" label="svgRepeat:Form.activeGroup">
      <fields xsi:type="uimodel:InputWidget" name="activeItemStyles"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat#//RepeatableSVGSettings/activeItemStyles" label=""/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="defaultGroup" layout="VERTICAL" label="svgRepeat:Form.defaultGroup">
      <fields xsi:type="uimodel:InputWidget" name="defaultItemStyles"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat#//RepeatableSVGSettings/defaultItemStyles" label=""/>
    </fields>

  </components>
</uimodel:UIModel>
`, Ue = `<?xml version="1.0" encoding="UTF-8"?>
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

How one copy of the picture is painted.

Used twice - once for the copies that count, once for the rest - so it says
fill and stroke and nothing about which of the two it is. The class name is
not offered: the widget sets the same class on every copy and tells them
apart by position, not by naming them.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="SVGItemStylesForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat#//SVGItemStyles"/>

  <components xsi:type="uimodel:FormView" name="SVGItemStylesFormView">
    <fields xsi:type="uimodel:InputWidget" name="fill"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat#//SVGItemStyles/fill" label="svgRepeat:FormStyles.fill"/>
    <fields xsi:type="uimodel:InputWidget" name="stroke"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat#//SVGItemStyles/stroke" label="svgRepeat:FormStyles.stroke"/>
  </components>
</uimodel:UIModel>
`, He = { name: "Wiederholtes SVG" }, We = { fill: "Füllfarbe", stroke: "Linienfarbe" }, $e = { sourceGroup: "Grafik", src: "Adresse der Grafik", repetitions: "Wie oft", progress: "Davon hervorgehoben", activeGroup: "Hervorgehoben", defaultGroup: "Übrige" }, Ke = {
  Widget: He,
  FormStyles: We,
  Form: $e
}, Ze = { name: "Repeated SVG" }, Xe = { fill: "Fill colour", stroke: "Line colour" }, je = { sourceGroup: "Graphic", src: "Address of the graphic", repetitions: "How many times", progress: "Of which highlighted", activeGroup: "Highlighted", defaultGroup: "Others" }, ze = {
  Widget: Ze,
  FormStyles: Xe,
  Form: je
};
var qe = Object.getOwnPropertyDescriptor, Je = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? qe(e, t) : e, l = o.length - 1, c; l >= 0; l--)
    (c = o[l]) && (s = c(s) || s);
  return s;
};
const q = "svgRepeat";
let W = class {
  namespace = q;
  resources = {
    de: Ke,
    en: ze
  };
};
W = Je([
  K({
    service: ["Translations"],
    properties: { "i18n.namespace": q }
  })
], W);
var Qe = Object.defineProperty, et = Object.getOwnPropertyDescriptor, b = (o, e, t, i) => {
  for (var s = i > 1 ? void 0 : i ? et(e, t) : e, l = o.length - 1, c; l >= 0; l--)
    (c = o[l]) && (s = (i ? c(e, t, s) : c(s)) || s);
  return i && s && Qe(e, t, s), s;
}, $ = (o, e) => (t, i) => e(t, i, o);
a.eINSTANCE;
const v = "RepeatableSVGWidget";
let F = class {
  constructor(o, e) {
    this.events = o, this.actions = e;
  }
  type = v;
  component = xe;
  /*
   * No hand-written form: the model covers all of it. The picture, how many
   * of it, how far along, and the two looks - every one of them a field, so
   * there is nothing left to write by hand.
   */
  supportedDSTypes = [];
  icon = ke;
  name = "RepeatableSVG";
  nameKey = "svgRepeat:Widget.name";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Ye,
    uri: "/svg-repeat-settings.ui.xmi",
    ePackage: () => a.eINSTANCE,
    create: () => new r(),
    /* The form for the class this one contains, twice. */
    entryForms: [{ xmi: Ue, uri: "/svg-repeat-styles.ui.xmi" }]
  };
  register() {
    this.events.registerWidget(v, Be), this.actions.registerWidgetType(v, R, "widget");
  }
  unregister() {
    this.events.unregisterWidget(v), this.actions.unregisterWidgetType(v);
  }
};
b([
  ce()
], F.prototype, "register", 1);
b([
  pe()
], F.prototype, "unregister", 1);
F = b([
  K({
    service: [ye],
    properties: { "widget.type": v }
  }),
  $(0, k(le)),
  $(1, k(ue))
], F);
export {
  r as RepeatableSVGSettingsImpl,
  F as RepeatableSVGWidgetProvider,
  xe as RepeatableSvgWidget,
  a as RepeatableSvgWidgetsPackage,
  W as SvgRepeatTranslations,
  Ye as repeatSettingsFormXmi
};
