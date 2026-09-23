(function(){var i="ui.vue.widget.wrapper",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".absolute[data-v-40d70b59]{position:absolute}.wrapper-container[data-v-40d70b59]{background-color:var(--d4d0032e);border-color:var(--v08fa051c);border-width:var(--v28cb1685);border-style:solid;width:100%;height:100%;box-Shadow:var(--v8270104a);border-radius:var(--v78a99a94);backdrop-filter:blur(var(--blur-amount))}.sub[data-v-40d70b59]{border-radius:var(--v78a99a94);padding:var(--v5f002dd2)}.scroll[data-v-40d70b59]{width:100%;height:100%;overflow:auto}.confirm__title[data-v-40d70b59]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.confirm__text[data-v-40d70b59]{margin:0;color:var(--color-dim);line-height:1.5}.actions[data-v-40d70b59]{position:absolute;inset:0;z-index:3000;display:flex;align-items:center;justify-content:center;border-radius:inherit;background:color-mix(in srgb,var(--color-bg, #121820) 70%,transparent);opacity:0;transition:opacity .12s ease;pointer-events:none}.wrapper-container:hover .actions[data-v-40d70b59],.actions[data-v-40d70b59]:focus-within{opacity:1}.actions__row[data-v-40d70b59]{display:flex;flex-wrap:wrap;justify-content:center;gap:2px;max-width:100%;padding:0 4px;margin-bottom:6%}.action[data-v-40d70b59]{pointer-events:auto;position:relative;display:flex;align-items:center;justify-content:center;width:34px;height:34px;border:1px solid transparent;border-radius:var(--radius-md, 4px);background:transparent;color:var(--color-dim, #8b98a8);font:inherit;cursor:pointer;transition:color .1s ease,background-color .1s ease,border-color .1s ease}.action[data-v-40d70b59]:hover,.action[data-v-40d70b59]:focus-visible{color:var(--color-fg, #e6edf5);background:color-mix(in srgb,var(--color-pane, #1a222c) 88%,transparent);border-color:var(--color-divider, #2b3644)}.action[data-v-40d70b59]:focus-visible{outline:2px solid var(--color-accent, #4fa3d1);outline-offset:1px}.action--danger[data-v-40d70b59]:hover,.action--danger[data-v-40d70b59]:focus-visible{color:var(--color-err, #d1584f);border-color:color-mix(in srgb,var(--color-err, #d1584f) 40%,transparent)}.action__label[data-v-40d70b59]{position:absolute;top:calc(100% + 2px);left:50%;transform:translate(-50%);padding:2px 6px;border-radius:var(--radius-sm, 3px);background:var(--color-raised, #232d3a);color:var(--color-fg, #e6edf5);font-size:11px;line-height:1.4;letter-spacing:.01em;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity 90ms ease}.action:hover .action__label[data-v-40d70b59],.action:focus-visible .action__label[data-v-40d70b59]{opacity:1}\n";})();
import { defineComponent as ie, useCssVars as oe, computed as w, inject as ne, ref as x, onUnmounted as le, createElementBlock as F, openBlock as v, normalizeStyle as z, createCommentVNode as X, createVNode as G, toDisplayString as y, Fragment as K, createElementVNode as P, createBlock as ue, resolveDynamicComponent as de, renderList as ce, withModifiers as he, normalizeClass as ge, unref as C, withCtx as I, createTextVNode as Z } from "vue";
import { identifier as we } from "org.eclipse.daanse.board.app.lib.api.widget";
import { useTranslation as Re, VariableWrapper as r } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DIcon as $, DModal as Ee, DButton as M } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { BasicEFactory as pe, BasicEPackage as fe, EPackageRegistry as q, BasicEClass as Ce, BasicEReference as c, BasicEObject as Te } from "@emfts/core";
import { component as be } from "@eclipse-daanse/tsm";
const Se = { class: "scroll" }, Ne = {
  key: 0,
  class: "actions",
  "aria-hidden": "false"
}, _e = { class: "actions__row" }, Oe = ["title", "onClick"], Ae = { class: "action__label" }, De = { key: 2 }, Le = { class: "confirm__title" }, me = { class: "confirm__text" }, ve = /* @__PURE__ */ ie({
  __name: "WidgetWrapper",
  props: {
    widget: {},
    editEnabled: { type: Boolean },
    extraActions: {}
  },
  emits: ["openSettings", "removeWidget"],
  setup(a, { emit: e }) {
    oe((o) => ({
      d4d0032e: m.value,
      v08fa051c: Q.value,
      v28cb1685: ee.value + "px",
      v8270104a: L.value,
      v78a99a94: te.value + "px",
      v5f002dd2: Y.value + "px"
    }));
    const s = e, { t: u } = Re("wrapper"), d = ne(we), g = x(0), p = d.onChange?.(() => {
      g.value++;
    });
    le(() => p?.());
    const S = w(() => (g.value, d.getWidget(a.widget.type))), N = w(() => (g.value, d.getAllWidgets())), R = x(!1), E = x(null), _ = (o) => {
      E.value = o, R.value = !0;
    }, O = () => {
      E.value && s("removeWidget", E.value), R.value = !1, E.value = null;
    }, T = () => {
      R.value = !1, E.value = null;
    }, A = (o) => {
      s("openSettings", o);
    }, D = w(() => [
      {
        id: "settings",
        icon: "settings",
        label: u("Actions.settings"),
        run: () => A(a.widget.uid)
      },
      ...a.extraActions ?? [],
      {
        id: "delete",
        icon: "delete",
        label: u("common:Action.delete"),
        danger: !0,
        run: () => _(a.widget.uid)
      }
    ]), f = {
      title: "",
      backgroundColor: "#f6f7f9",
      backgroundColorTransparence: 255,
      titleColor: "#575d68",
      padding: 0,
      titleFontSize: 12,
      borderSize: 1,
      borderColor: "#ccd1d9",
      borderRadius: 8,
      blur: 0,
      fullscreen: !1,
      shadowColor: "#191e2d",
      shadowBlur: 8,
      shadowX: 0,
      shadowY: 2,
      shadowTransparence: 36,
      transparency: 255
    };
    Object.keys(f).forEach((o) => {
      const n = a.widget.wrapperConfig[o];
      if (n == null)
        a.widget.wrapperConfig[o] = new r(f[o]);
      else if (typeof n != "object")
        a.widget.wrapperConfig[o] = new r(n);
      else if (!(n instanceof r))
        if ("value" in n) {
          const l = new r(n.value);
          "variable" in n && (l.variable = n.variable), a.widget.wrapperConfig[o] = l;
        } else
          a.widget.wrapperConfig[o] = new r(f[o]);
    });
    const L = w(() => {
      let o = "";
      const n = a.widget.wrapperConfig.shadowTransparence?.value;
      B(n) && (o = n.toString(16));
      let l = (a.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      return l.length == 3 && (l = l[0] + l[0] + l[1] + l[1] + l[2] + l[2]), `${a.widget.wrapperConfig.shadowX?.value}px ${a.widget.wrapperConfig.shadowY?.value}px ${a.widget.wrapperConfig.shadowBlur?.value}px #${l}${o}`;
    }), m = w(() => {
      let o = 255;
      const n = a.widget.wrapperConfig.backgroundColorTransparence?.value;
      B(n) && (o = n);
      const l = a.widget.wrapperConfig.transparency?.value;
      B(l) && (o = Math.round(o * (l / 255)));
      const U = a.widget.wrapperConfig.backgroundColor?.value;
      if (!U) return "var(--color-pane)";
      let b = U.replace("#", "");
      b.length == 3 && (b = b[0] + b[0] + b[1] + b[1] + b[2] + b[2]);
      const ae = o < 255 ? o.toString(16).padStart(2, "0") : "";
      return `#${b}${ae}`;
    }), Q = w(() => a.widget.wrapperConfig.borderColor?.value || "var(--color-divider)"), ee = w(() => a.widget.wrapperConfig.borderSize?.value || 0), te = w(() => a.widget.wrapperConfig.borderRadius?.value || 0), H = w(() => {
      const o = a.widget.wrapperConfig.transparency?.value;
      return B(o) ? o / 255 : 1;
    }), se = w(() => a.widget.wrapperConfig.titleFontSize?.value || 16), W = w(() => a.widget.wrapperConfig.titleColor?.value || "var(--color-divider)");
    w(() => {
      let o = (a.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      o.length == 3 && (o = o[0] + o[0] + o[1] + o[1] + o[2] + o[2]);
      const n = a.widget.wrapperConfig.shadowTransparence?.value;
      return o + (B(n) ? n.toString(16) : "");
    });
    function B(o) {
      const n = parseInt(o);
      return isNaN(n) ? !1 : n >= 0 && n <= 255;
    }
    const re = w(() => {
      const o = a.widget.wrapperConfig.blur?.value;
      return B(o) ? o : "";
    }), Y = w(() => {
      const o = parseInt(a.widget.wrapperConfig.padding?.value);
      return isNaN(o) ? 0 : o;
    });
    return (o, n) => (v(), F("div", {
      class: "flex relative flex-col w-full h-full wrapper-container",
      style: z({ "--blur-amount": re.value + "px", "--title-color": W.value })
    }, [
      a.widget.wrapperConfig.title?.value ? (v(), F("div", {
        key: 0,
        class: "font-semibold capitalize",
        style: z({
          fontSize: se.value + "px",
          color: W.value,
          padding: Y.value + "px",
          paddingBottom: 0,
          opacity: H.value
        })
      }, y(a.widget.wrapperConfig.title.value), 5)) : X("", !0),
      S.value ? (v(), F(K, { key: 1 }, [
        P("div", {
          class: "w-full h-full box-border cursor-pointer overflow-hidden sub",
          style: z({ position: "relative", opacity: H.value })
        }, [
          P("div", Se, [
            (v(), ue(de(N.value[a.widget.type].component), {
              config: a.widget.config,
              configv: a.widget.config,
              "onUpdate:configv": n[0] || (n[0] = (l) => a.widget.config = l),
              datasourceId: a.widget.config.datasourceId,
              id: a.widget.uid || a.widget.id,
              class: "widget_component"
            }, null, 40, ["config", "configv", "datasourceId", "id"]))
          ])
        ], 4),
        a.editEnabled ? (v(), F("div", Ne, [
          P("div", _e, [
            (v(!0), F(K, null, ce(D.value, (l) => (v(), F("button", {
              key: l.id,
              type: "button",
              class: ge(["action", { "action--danger": l.danger }]),
              title: l.label,
              onClick: he((U) => l.run(), ["stop"])
            }, [
              G(C($), {
                name: l.icon,
                size: "lg"
              }, null, 8, ["name"]),
              P("span", Ae, y(l.label), 1)
            ], 10, Oe))), 128))
          ])
        ])) : X("", !0)
      ], 64)) : (v(), F("div", De, [
        P("p", null, y(C(u)("NotRegistered", { type: a.widget.type })), 1)
      ])),
      G(C(Ee), {
        modelValue: R.value,
        "onUpdate:modelValue": n[1] || (n[1] = (l) => R.value = l),
        size: "sm",
        onCancel: T
      }, {
        header: I(() => [
          G(C($), {
            name: "warning",
            size: "lg",
            tone: "color-err"
          }),
          P("h2", Le, y(C(u)("Delete.title")), 1)
        ]),
        actions: I(() => [
          G(C(M), {
            intent: "quiet",
            onClick: T
          }, {
            default: I(() => [
              Z(y(C(u)("common:Action.cancel")), 1)
            ]),
            _: 1
          }),
          G(C(M), {
            intent: "danger",
            onClick: O
          }, {
            default: I(() => [
              Z(y(C(u)("common:Action.delete")), 1)
            ]),
            _: 1
          })
        ]),
        default: I(() => [
          P("p", me, y(C(u)("Delete.text")), 1)
        ]),
        _: 1
      }, 8, ["modelValue"])
    ], 4));
  }
}), Fe = (a, e) => {
  const s = a.__vccOpts || a;
  for (const [u, d] of e)
    s[u] = d;
  return s;
}, ye = /* @__PURE__ */ Fe(ve, [["__scopeId", "data-v-40d70b59"]]);
class k extends pe {
  static get eINSTANCE() {
    return this._instance || (this._instance = new k()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(i.eINSTANCE);
  }
  /**
   * Create a new WrapperSettings instance
   */
  createWrapperSettings() {
    return new t();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "WrapperSettings":
        return this.createWrapperSettings();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
function h(a) {
  const e = q.INSTANCE.getEPackage(a);
  if (!e)
    throw new Error(`EPackage '${a}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing WrapperSettingsPackage.`);
  return e;
}
class i extends fe {
  static {
    this.eNAME = "wrapperSettings";
  }
  static {
    this.eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
  }
  static {
    this.eNS_PREFIX = "wrapperSettings";
  }
  static get eINSTANCE() {
    return this._instance || (this._instance = new i(), this._instance.init()), this._instance;
  }
  static {
    this.Literals = {
      WRAPPER_SETTINGS: null,
      WRAPPER_SETTINGS__TITLE: null,
      WRAPPER_SETTINGS__BACKGROUND_COLOR: null,
      WRAPPER_SETTINGS__BACKGROUND_COLOR_TRANSPARENCE: null,
      WRAPPER_SETTINGS__TITLE_COLOR: null,
      WRAPPER_SETTINGS__PADDING: null,
      WRAPPER_SETTINGS__TITLE_FONT_SIZE: null,
      WRAPPER_SETTINGS__BORDER_SIZE: null,
      WRAPPER_SETTINGS__BORDER_COLOR: null,
      WRAPPER_SETTINGS__BORDER_RADIUS: null,
      WRAPPER_SETTINGS__BLUR: null,
      WRAPPER_SETTINGS__FULLSCREEN: null,
      WRAPPER_SETTINGS__SHADOW_COLOR: null,
      WRAPPER_SETTINGS__SHADOW_BLUR: null,
      WRAPPER_SETTINGS__SHADOW_X: null,
      WRAPPER_SETTINGS__SHADOW_Y: null,
      WRAPPER_SETTINGS__SHADOW_TRANSPARENCE: null,
      WRAPPER_SETTINGS__TRANSPARENCY: null
    };
  }
  constructor() {
    super(), this.setName(i.eNAME), this.setNsURI(i.eNS_URI), this.setNsPrefix(i.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    q.INSTANCE.set(i.eNS_URI, this), this.setEFactoryInstance(k.eINSTANCE);
    const e = new Ce();
    e.setName("WrapperSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), i.Literals.WRAPPER_SETTINGS = e;
    const s = new c();
    s.setContainment(!1), s.setName("title"), s.setLowerBound(0), s.setUpperBound(1), e.getEStructuralFeatures().push(s), i.Literals.WRAPPER_SETTINGS__TITLE = s;
    const u = new c();
    u.setContainment(!1), u.setName("backgroundColor"), u.setLowerBound(0), u.setUpperBound(1), e.getEStructuralFeatures().push(u), i.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR = u;
    const d = new c();
    d.setContainment(!1), d.setName("backgroundColorTransparence"), d.setLowerBound(0), d.setUpperBound(1), e.getEStructuralFeatures().push(d), i.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR_TRANSPARENCE = d;
    const g = new c();
    g.setContainment(!1), g.setName("titleColor"), g.setLowerBound(0), g.setUpperBound(1), e.getEStructuralFeatures().push(g), i.Literals.WRAPPER_SETTINGS__TITLE_COLOR = g;
    const p = new c();
    p.setContainment(!1), p.setName("padding"), p.setLowerBound(0), p.setUpperBound(1), e.getEStructuralFeatures().push(p), i.Literals.WRAPPER_SETTINGS__PADDING = p;
    const S = new c();
    S.setContainment(!1), S.setName("titleFontSize"), S.setLowerBound(0), S.setUpperBound(1), e.getEStructuralFeatures().push(S), i.Literals.WRAPPER_SETTINGS__TITLE_FONT_SIZE = S;
    const N = new c();
    N.setContainment(!1), N.setName("borderSize"), N.setLowerBound(0), N.setUpperBound(1), e.getEStructuralFeatures().push(N), i.Literals.WRAPPER_SETTINGS__BORDER_SIZE = N;
    const R = new c();
    R.setContainment(!1), R.setName("borderColor"), R.setLowerBound(0), R.setUpperBound(1), e.getEStructuralFeatures().push(R), i.Literals.WRAPPER_SETTINGS__BORDER_COLOR = R;
    const E = new c();
    E.setContainment(!1), E.setName("borderRadius"), E.setLowerBound(0), E.setUpperBound(1), e.getEStructuralFeatures().push(E), i.Literals.WRAPPER_SETTINGS__BORDER_RADIUS = E;
    const _ = new c();
    _.setContainment(!1), _.setName("blur"), _.setLowerBound(0), _.setUpperBound(1), e.getEStructuralFeatures().push(_), i.Literals.WRAPPER_SETTINGS__BLUR = _;
    const O = new c();
    O.setContainment(!1), O.setName("fullscreen"), O.setLowerBound(0), O.setUpperBound(1), e.getEStructuralFeatures().push(O), i.Literals.WRAPPER_SETTINGS__FULLSCREEN = O;
    const T = new c();
    T.setContainment(!1), T.setName("shadowColor"), T.setLowerBound(0), T.setUpperBound(1), e.getEStructuralFeatures().push(T), i.Literals.WRAPPER_SETTINGS__SHADOW_COLOR = T;
    const A = new c();
    A.setContainment(!1), A.setName("shadowBlur"), A.setLowerBound(0), A.setUpperBound(1), e.getEStructuralFeatures().push(A), i.Literals.WRAPPER_SETTINGS__SHADOW_BLUR = A;
    const D = new c();
    D.setContainment(!1), D.setName("shadowX"), D.setLowerBound(0), D.setUpperBound(1), e.getEStructuralFeatures().push(D), i.Literals.WRAPPER_SETTINGS__SHADOW_X = D;
    const f = new c();
    f.setContainment(!1), f.setName("shadowY"), f.setLowerBound(0), f.setUpperBound(1), e.getEStructuralFeatures().push(f), i.Literals.WRAPPER_SETTINGS__SHADOW_Y = f;
    const L = new c();
    L.setContainment(!1), L.setName("shadowTransparence"), L.setLowerBound(0), L.setUpperBound(1), e.getEStructuralFeatures().push(L), i.Literals.WRAPPER_SETTINGS__SHADOW_TRANSPARENCE = L;
    const m = new c();
    m.setContainment(!1), m.setName("transparency"), m.setLowerBound(0), m.setUpperBound(1), e.getEStructuralFeatures().push(m), i.Literals.WRAPPER_SETTINGS__TRANSPARENCY = m, i.Literals.WRAPPER_SETTINGS__TITLE.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR_TRANSPARENCE.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__TITLE_COLOR.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__PADDING.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__TITLE_FONT_SIZE.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__BORDER_SIZE.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__BORDER_COLOR.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__BORDER_RADIUS.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__BLUR.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__FULLSCREEN.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__SHADOW_COLOR.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__SHADOW_BLUR.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__SHADOW_X.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__SHADOW_Y.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__SHADOW_TRANSPARENCE.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), i.Literals.WRAPPER_SETTINGS__TRANSPARENCY.setEType(h("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class t extends Te {
  constructor() {
    super(...arguments), this._title = new r(), this._backgroundColor = new r(), this._backgroundColorTransparence = new r(), this._titleColor = new r(), this._padding = new r(), this._titleFontSize = new r(), this._borderSize = new r(), this._borderColor = new r(), this._borderRadius = new r(), this._blur = new r(), this._fullscreen = new r(), this._shadowColor = new r(), this._shadowBlur = new r(), this._shadowX = new r(), this._shadowY = new r(), this._shadowTransparence = new r(), this._transparency = new r();
  }
  static {
    this.TITLE = 0;
  }
  static {
    this.BACKGROUND_COLOR = 1;
  }
  static {
    this.BACKGROUND_COLOR_TRANSPARENCE = 2;
  }
  static {
    this.TITLE_COLOR = 3;
  }
  static {
    this.PADDING = 4;
  }
  static {
    this.TITLE_FONT_SIZE = 5;
  }
  static {
    this.BORDER_SIZE = 6;
  }
  static {
    this.BORDER_COLOR = 7;
  }
  static {
    this.BORDER_RADIUS = 8;
  }
  static {
    this.BLUR = 9;
  }
  static {
    this.FULLSCREEN = 10;
  }
  static {
    this.SHADOW_COLOR = 11;
  }
  static {
    this.SHADOW_BLUR = 12;
  }
  static {
    this.SHADOW_X = 13;
  }
  static {
    this.SHADOW_Y = 14;
  }
  static {
    this.SHADOW_TRANSPARENCE = 15;
  }
  static {
    this.TRANSPARENCY = 16;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return i.Literals.WRAPPER_SETTINGS;
  }
  // Getters and Setters
  get title() {
    return this._title;
  }
  set title(e) {
    const s = this._title;
    this._title = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.TITLE),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.TITLE,
      merge: () => !1
    });
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(e) {
    const s = this._backgroundColor;
    this._backgroundColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BACKGROUND_COLOR),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.BACKGROUND_COLOR,
      merge: () => !1
    });
  }
  get backgroundColorTransparence() {
    return this._backgroundColorTransparence;
  }
  set backgroundColorTransparence(e) {
    const s = this._backgroundColorTransparence;
    this._backgroundColorTransparence = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BACKGROUND_COLOR_TRANSPARENCE),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.BACKGROUND_COLOR_TRANSPARENCE,
      merge: () => !1
    });
  }
  get titleColor() {
    return this._titleColor;
  }
  set titleColor(e) {
    const s = this._titleColor;
    this._titleColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.TITLE_COLOR),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.TITLE_COLOR,
      merge: () => !1
    });
  }
  get padding() {
    return this._padding;
  }
  set padding(e) {
    const s = this._padding;
    this._padding = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.PADDING),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.PADDING,
      merge: () => !1
    });
  }
  get titleFontSize() {
    return this._titleFontSize;
  }
  set titleFontSize(e) {
    const s = this._titleFontSize;
    this._titleFontSize = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.TITLE_FONT_SIZE),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.TITLE_FONT_SIZE,
      merge: () => !1
    });
  }
  get borderSize() {
    return this._borderSize;
  }
  set borderSize(e) {
    const s = this._borderSize;
    this._borderSize = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BORDER_SIZE),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.BORDER_SIZE,
      merge: () => !1
    });
  }
  get borderColor() {
    return this._borderColor;
  }
  set borderColor(e) {
    const s = this._borderColor;
    this._borderColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BORDER_COLOR),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.BORDER_COLOR,
      merge: () => !1
    });
  }
  get borderRadius() {
    return this._borderRadius;
  }
  set borderRadius(e) {
    const s = this._borderRadius;
    this._borderRadius = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BORDER_RADIUS),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.BORDER_RADIUS,
      merge: () => !1
    });
  }
  get blur() {
    return this._blur;
  }
  set blur(e) {
    const s = this._blur;
    this._blur = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BLUR),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.BLUR,
      merge: () => !1
    });
  }
  get fullscreen() {
    return this._fullscreen;
  }
  set fullscreen(e) {
    const s = this._fullscreen;
    this._fullscreen = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.FULLSCREEN),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.FULLSCREEN,
      merge: () => !1
    });
  }
  get shadowColor() {
    return this._shadowColor;
  }
  set shadowColor(e) {
    const s = this._shadowColor;
    this._shadowColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.SHADOW_COLOR),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.SHADOW_COLOR,
      merge: () => !1
    });
  }
  get shadowBlur() {
    return this._shadowBlur;
  }
  set shadowBlur(e) {
    const s = this._shadowBlur;
    this._shadowBlur = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.SHADOW_BLUR),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.SHADOW_BLUR,
      merge: () => !1
    });
  }
  get shadowX() {
    return this._shadowX;
  }
  set shadowX(e) {
    const s = this._shadowX;
    this._shadowX = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.SHADOW_X),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.SHADOW_X,
      merge: () => !1
    });
  }
  get shadowY() {
    return this._shadowY;
  }
  set shadowY(e) {
    const s = this._shadowY;
    this._shadowY = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.SHADOW_Y),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.SHADOW_Y,
      merge: () => !1
    });
  }
  get shadowTransparence() {
    return this._shadowTransparence;
  }
  set shadowTransparence(e) {
    const s = this._shadowTransparence;
    this._shadowTransparence = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.SHADOW_TRANSPARENCE),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.SHADOW_TRANSPARENCE,
      merge: () => !1
    });
  }
  get transparency() {
    return this._transparency;
  }
  set transparency(e) {
    const s = this._transparency;
    this._transparency = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.TRANSPARENCY),
      getOldValue: () => s,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => t.TRANSPARENCY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case t.TITLE:
        return this.title;
      case t.BACKGROUND_COLOR:
        return this.backgroundColor;
      case t.BACKGROUND_COLOR_TRANSPARENCE:
        return this.backgroundColorTransparence;
      case t.TITLE_COLOR:
        return this.titleColor;
      case t.PADDING:
        return this.padding;
      case t.TITLE_FONT_SIZE:
        return this.titleFontSize;
      case t.BORDER_SIZE:
        return this.borderSize;
      case t.BORDER_COLOR:
        return this.borderColor;
      case t.BORDER_RADIUS:
        return this.borderRadius;
      case t.BLUR:
        return this.blur;
      case t.FULLSCREEN:
        return this.fullscreen;
      case t.SHADOW_COLOR:
        return this.shadowColor;
      case t.SHADOW_BLUR:
        return this.shadowBlur;
      case t.SHADOW_X:
        return this.shadowX;
      case t.SHADOW_Y:
        return this.shadowY;
      case t.SHADOW_TRANSPARENCE:
        return this.shadowTransparence;
      case t.TRANSPARENCY:
        return this.transparency;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, s) {
    switch (this.eClass().getFeatureID(e)) {
      case t.TITLE:
        this.title = s, super.eSet(e, s);
        break;
      case t.BACKGROUND_COLOR:
        this.backgroundColor = s, super.eSet(e, s);
        break;
      case t.BACKGROUND_COLOR_TRANSPARENCE:
        this.backgroundColorTransparence = s, super.eSet(e, s);
        break;
      case t.TITLE_COLOR:
        this.titleColor = s, super.eSet(e, s);
        break;
      case t.PADDING:
        this.padding = s, super.eSet(e, s);
        break;
      case t.TITLE_FONT_SIZE:
        this.titleFontSize = s, super.eSet(e, s);
        break;
      case t.BORDER_SIZE:
        this.borderSize = s, super.eSet(e, s);
        break;
      case t.BORDER_COLOR:
        this.borderColor = s, super.eSet(e, s);
        break;
      case t.BORDER_RADIUS:
        this.borderRadius = s, super.eSet(e, s);
        break;
      case t.BLUR:
        this.blur = s, super.eSet(e, s);
        break;
      case t.FULLSCREEN:
        this.fullscreen = s, super.eSet(e, s);
        break;
      case t.SHADOW_COLOR:
        this.shadowColor = s, super.eSet(e, s);
        break;
      case t.SHADOW_BLUR:
        this.shadowBlur = s, super.eSet(e, s);
        break;
      case t.SHADOW_X:
        this.shadowX = s, super.eSet(e, s);
        break;
      case t.SHADOW_Y:
        this.shadowY = s, super.eSet(e, s);
        break;
      case t.SHADOW_TRANSPARENCE:
        this.shadowTransparence = s, super.eSet(e, s);
        break;
      case t.TRANSPARENCY:
        this.transparency = s, super.eSet(e, s);
        break;
      default:
        super.eSet(e, s);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case t.TITLE:
        return this._title !== new r();
      case t.BACKGROUND_COLOR:
        return this._backgroundColor !== new r();
      case t.BACKGROUND_COLOR_TRANSPARENCE:
        return this._backgroundColorTransparence !== new r();
      case t.TITLE_COLOR:
        return this._titleColor !== new r();
      case t.PADDING:
        return this._padding !== new r();
      case t.TITLE_FONT_SIZE:
        return this._titleFontSize !== new r();
      case t.BORDER_SIZE:
        return this._borderSize !== new r();
      case t.BORDER_COLOR:
        return this._borderColor !== new r();
      case t.BORDER_RADIUS:
        return this._borderRadius !== new r();
      case t.BLUR:
        return this._blur !== new r();
      case t.FULLSCREEN:
        return this._fullscreen !== new r();
      case t.SHADOW_COLOR:
        return this._shadowColor !== new r();
      case t.SHADOW_BLUR:
        return this._shadowBlur !== new r();
      case t.SHADOW_X:
        return this._shadowX !== new r();
      case t.SHADOW_Y:
        return this._shadowY !== new r();
      case t.SHADOW_TRANSPARENCE:
        return this._shadowTransparence !== new r();
      case t.TRANSPARENCY:
        return this._transparency !== new r();
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case t.TITLE:
        this._title = new r();
        return;
      case t.BACKGROUND_COLOR:
        this._backgroundColor = new r();
        return;
      case t.BACKGROUND_COLOR_TRANSPARENCE:
        this._backgroundColorTransparence = new r();
        return;
      case t.TITLE_COLOR:
        this._titleColor = new r();
        return;
      case t.PADDING:
        this._padding = new r();
        return;
      case t.TITLE_FONT_SIZE:
        this._titleFontSize = new r();
        return;
      case t.BORDER_SIZE:
        this._borderSize = new r();
        return;
      case t.BORDER_COLOR:
        this._borderColor = new r();
        return;
      case t.BORDER_RADIUS:
        this._borderRadius = new r();
        return;
      case t.BLUR:
        this._blur = new r();
        return;
      case t.FULLSCREEN:
        this._fullscreen = new r();
        return;
      case t.SHADOW_COLOR:
        this._shadowColor = new r();
        return;
      case t.SHADOW_BLUR:
        this._shadowBlur = new r();
        return;
      case t.SHADOW_X:
        this._shadowX = new r();
        return;
      case t.SHADOW_Y:
        this._shadowY = new r();
        return;
      case t.SHADOW_TRANSPARENCE:
        this._shadowTransparence = new r();
        return;
      case t.TRANSPARENCY:
        this._transparency = new r();
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
      title: this.title,
      backgroundColor: this.backgroundColor,
      backgroundColorTransparence: this.backgroundColorTransparence,
      titleColor: this.titleColor,
      padding: this.padding,
      titleFontSize: this.titleFontSize,
      borderSize: this.borderSize,
      borderColor: this.borderColor,
      borderRadius: this.borderRadius,
      blur: this.blur,
      fullscreen: this.fullscreen,
      shadowColor: this.shadowColor,
      shadowBlur: this.shadowBlur,
      shadowX: this.shadowX,
      shadowY: this.shadowY,
      shadowTransparence: this.shadowTransparence,
      transparency: this.transparency
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

The form for the wrapper settings.

Grouped the way someone setting up a widget thinks about it - the title,
the surface it sits on, its edge, its shadow - rather than in the order the
generator happens to emit the features. The shadow needs four values that
mean nothing apart from each other, and a title that is empty makes its
size and colour pointless; both only read as one thing when they are one
group.

This is the point of modelling the form rather than deriving it: the
derived version can only ever list seventeen fields.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="WrapperSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings"/>

  <components xsi:type="uimodel:FormView" name="WrapperSettingsFormView">

    <fields xsi:type="uimodel:GroupWidget" name="titleGroup" layout="VERTICAL" label="wrapper:Form.titleGroup">
      <fields xsi:type="uimodel:InputWidget"
          name="title"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/title"
          label="wrapper:Form.title"
          placeholder="Ohne Titel"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="titleFontSize"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/titleFontSize"
          label="wrapper:Form.titleFontSize" min="6" max="72" step="1"/>
      <fields xsi:type="uimodel:InputWidget"
          name="titleColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/titleColor"
          label="wrapper:Form.titleColor"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="surfaceGroup" layout="VERTICAL" label="wrapper:Form.surfaceGroup">
      <fields xsi:type="uimodel:InputWidget"
          name="backgroundColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/backgroundColor"
          label="wrapper:Form.backgroundColor"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="backgroundColorTransparence"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/backgroundColorTransparence"
          label="wrapper:Form.backgroundColorTransparence" min="0" max="255" step="1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="transparency"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/transparency"
          label="wrapper:Form.transparency" min="0" max="255" step="1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="blur"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/blur"
          label="wrapper:Form.blur" min="0" max="50" step="1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="padding"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/padding"
          label="wrapper:Form.padding" min="0" max="200" step="1"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="borderGroup" layout="VERTICAL" label="wrapper:Form.borderGroup">
      <fields xsi:type="uimodel:NumberWidget"
          name="borderSize"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/borderSize"
          label="wrapper:Form.borderSize" min="0" max="40" step="1"/>
      <fields xsi:type="uimodel:InputWidget"
          name="borderColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/borderColor"
          label="wrapper:Form.borderColor"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="borderRadius"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/borderRadius"
          label="wrapper:Form.borderRadius" min="0" max="100" step="1"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="shadowGroup" layout="VERTICAL" label="wrapper:Form.shadowGroup">
      <fields xsi:type="uimodel:InputWidget"
          name="shadowColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/shadowColor"
          label="wrapper:Form.shadowColor"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="shadowBlur"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/shadowBlur"
          label="wrapper:Form.shadowBlur" min="0" max="100" step="1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="shadowX"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/shadowX"
          label="wrapper:Form.shadowX" min="-100" max="100" step="1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="shadowY"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/shadowY"
          label="wrapper:Form.shadowY" min="-100" max="100" step="1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="shadowTransparence"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/shadowTransparence"
          label="wrapper:Form.shadowTransparence" min="0" max="255" step="1"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="behaviourGroup" layout="VERTICAL" label="wrapper:Form.behaviourGroup">
      <fields xsi:type="uimodel:CheckboxWidget"
          name="fullscreen"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/fullscreen"
          label="wrapper:Form.fullscreen"/>
    </fields>

  </components>
</uimodel:UIModel>
`, Be = { settings: "Einstellungen" }, Ge = "Der Widget-Typ {{type}} ist nicht registriert.", Ie = { title: "Widget löschen", text: "Möchtest du dieses Widget wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden." }, Ue = { titleGroup: "Titel", title: "Text", titleFontSize: "Schriftgröße", titleColor: "Schriftfarbe", surfaceGroup: "Fläche", backgroundColor: "Hintergrund", backgroundColorTransparence: "Deckkraft", transparency: "Gesamtdeckkraft", blur: "Weichzeichnen", padding: "Innenabstand", borderGroup: "Rand", borderSize: "Stärke", borderColor: "Farbe", borderRadius: "Eckenradius", shadowGroup: "Schatten", shadowColor: "Farbe", shadowBlur: "Weichheit", shadowX: "Versatz X", shadowY: "Versatz Y", shadowTransparence: "Deckkraft", behaviourGroup: "Verhalten", fullscreen: "Vollbild erlauben" }, xe = {
  Actions: Be,
  NotRegistered: Ge,
  Delete: Ie,
  Form: Ue
}, ze = { settings: "Settings" }, Ve = "Widget type {{type}} is not registered.", ke = { title: "Delete widget", text: "Do you really want to delete this widget? This cannot be undone." }, He = { titleGroup: "Title", title: "Text", titleFontSize: "Font size", titleColor: "Font colour", surfaceGroup: "Surface", backgroundColor: "Background", backgroundColorTransparence: "Opacity", transparency: "Overall opacity", blur: "Blur", padding: "Padding", borderGroup: "Border", borderSize: "Width", borderColor: "Colour", borderRadius: "Corner radius", shadowGroup: "Shadow", shadowColor: "Colour", shadowBlur: "Softness", shadowX: "Offset X", shadowY: "Offset Y", shadowTransparence: "Opacity", behaviourGroup: "Behaviour", fullscreen: "Allow full screen" }, We = {
  Actions: ze,
  NotRegistered: Ve,
  Delete: ke,
  Form: He
};
var Ye = Object.getOwnPropertyDescriptor, Xe = (a, e, s, u) => {
  for (var d = u > 1 ? void 0 : u ? Ye(e, s) : e, g = a.length - 1, p; g >= 0; g--)
    (p = a[g]) && (d = p(d) || d);
  return d;
};
const J = "wrapper";
let V = class {
  constructor() {
    this.namespace = J, this.resources = {
      de: xe,
      en: We
    };
  }
};
V = Xe([
  be({
    service: ["Translations"],
    properties: { "i18n.namespace": J }
  })
], V);
i.eINSTANCE;
const Ke = new t(), Ze = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WidgetWrapper: ye,
  WrapperSettingsImpl: t,
  WrapperSettingsPackage: i,
  get WrapperTranslations() {
    return V;
  },
  defaultConfig: Ke,
  wrapperSettingsFormXmi: Pe
}, Symbol.toStringTag, { value: "Module" })), j = "org.eclipse.daanse.board.app.ui.vue.widget.wrapper", $e = "0.0.1-next.1";
async function st(a) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${j}: tsm runtime is not initialized`);
  e.register(j, Ze, $e, "ui.vue.widget.wrapper"), await void 0;
}
async function rt(a) {
  await void 0;
}
export {
  ye as WidgetWrapper,
  t as WrapperSettingsImpl,
  i as WrapperSettingsPackage,
  V as WrapperTranslations,
  st as activate,
  rt as deactivate,
  Ke as defaultConfig,
  Pe as wrapperSettingsFormXmi
};
