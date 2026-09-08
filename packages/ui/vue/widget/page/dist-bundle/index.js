(function(){var i="ui.vue.widget.page",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".page-layout-renderer[data-v-1f16ff64]{width:100%;height:100%;position:relative;min-height:300px}.loading-state[data-v-1f16ff64],.error-state[data-v-1f16ff64],.empty-state[data-v-1f16ff64],.no-layout-state[data-v-1f16ff64]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:2rem;text-align:center}.loading-spinner[data-v-1f16ff64]{width:32px;height:32px;border:3px solid #f3f3f3;border-top:3px solid #007bff;border-radius:50%;animation:spin-1f16ff64 1s linear infinite}@keyframes spin-1f16ff64{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.error-state[data-v-1f16ff64]{color:#dc3545}.error-icon[data-v-1f16ff64],.empty-icon[data-v-1f16ff64],.warning-icon[data-v-1f16ff64]{font-size:2rem;margin-bottom:1rem}.no-layout-state[data-v-1f16ff64]{color:#ffc107}.layout-engine-container[data-v-1f16ff64]{width:100%;height:100%;position:relative}.empty-state[data-v-1f16ff64]{color:#6c757d}.layout-container[data-v-1f16ff64]{position:relative;width:100%;height:100%;background:#f8f9fa;min-height:400px}.layout-container.view-mode[data-v-1f16ff64]{background:transparent}.layout-item[data-v-1f16ff64]{border:1px solid #e9ecef;border-radius:4px;background:#fff;box-shadow:0 2px 4px #0000001a;overflow:hidden}.view-mode .layout-item[data-v-1f16ff64]{border-color:transparent;box-shadow:none}.missing-widget[data-v-1f16ff64]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#6c757d;background:#f8f9fa;text-align:center;font-size:.8rem}.missing-widget-icon[data-v-1f16ff64]{font-size:1.5rem;margin-bottom:.5rem}.debug-info[data-v-1f16ff64]{position:absolute;bottom:10px;right:10px;background:#000c;color:#fff;padding:.5rem;border-radius:4px;font-size:.7rem;max-width:300px}.debug-info pre[data-v-1f16ff64]{margin:0;white-space:pre-wrap}.container[data-v-a181d5f3]{width:100%;height:100%}.recursion-warning[data-v-a181d5f3]{padding:1rem;background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:4px;color:#856404;text-align:center}.recursion-details[data-v-a181d5f3]{font-size:.8em;margin-top:.5rem;opacity:.7}.page-widget-content[data-v-a181d5f3]{width:100%;height:100%;border:1px solid #e0e0e0;border-radius:4px;overflow:hidden;display:flex;flex-direction:column}.page-widget-content.scroll-mode[data-v-a181d5f3]{overflow:auto}.page-widget-content.scroll-mode .page-content-wrapper[data-v-a181d5f3]{min-height:fit-content;overflow:visible}.page-widget-content.responsive-mode[data-v-a181d5f3]{overflow:hidden}.page-widget-content.responsive-mode .page-content-wrapper[data-v-a181d5f3]{flex:1;overflow:hidden;position:relative}.page-info[data-v-a181d5f3]{background:#f8f9fa;padding:.5rem;font-size:.9em;color:#6c757d;border-bottom:1px solid #e0e0e0;flex-shrink:0}.page-content-wrapper[data-v-a181d5f3]{flex:1;position:relative;min-height:0;width:100%;overflow:auto}.page-content-wrapper[data-v-a181d5f3]>*{width:100%;height:100%}.settings-container[data-v-e6d159de]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.add-btn[data-v-e6d159de]{width:150px}.input[data-v-e6d159de]{width:100px}.loading[data-v-e6d159de]{height:100%;padding:50px;border-radius:4px;margin-bottom:1rem;background-color:var(--app-response-background)}\n";})();
import { component as $ } from "@eclipse-daanse/tsm";
import { defineComponent as A, inject as I, ref as w, shallowRef as K, onMounted as Z, onErrorCaptured as X, createElementBlock as h, openBlock as d, createCommentVNode as E, createElementVNode as v, toDisplayString as g, createBlock as R, resolveDynamicComponent as j, useModel as F, provide as W, computed as S, createTextVNode as L, normalizeStyle as q, normalizeClass as z, createVNode as N, resolveComponent as y, withCtx as D } from "vue";
import { useRouter as J, useRoute as B } from "vue-router";
import { identifier as Y } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { identifier as U } from "org.eclipse.daanse.board.app.lib.api.page";
import { BasicEFactory as Q, BasicEPackage as ee, EPackageRegistry as te, BasicEClass as ae, BasicEAttribute as b, getEcorePackage as P, BasicEObject as se } from "@emfts/core";
import { WIDGET_SERVICE_ID as oe } from "org.eclipse.daanse.board.app.lib.api.widget";
const re = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M72.8493%2032.89C69.3438%2031.2286%2065.5539%2030.2648%2061.6902%2030.0469C60.8631%2030.0002%2060.1953%2029.3283%2060.2006%2028.4999L60.2291%2024C60.2344%2023.1716%2060.9105%2022.5011%2061.7381%2022.5395C66.6971%2022.7695%2071.5664%2023.9822%2076.0614%2026.1127C81.0087%2028.4575%2085.3826%2031.8571%2088.8758%2036.0728C92.3689%2040.2885%2094.8967%2045.2179%2096.2814%2050.5147C97.6661%2055.8115%2097.8742%2061.3473%2096.891%2066.7332C95.9079%2072.119%2093.7574%2077.2243%2090.5906%2081.6903C87.4238%2086.1563%2083.3175%2089.8748%2078.5602%2092.5844C73.8029%2095.294%2068.51%2096.9291%2063.0533%2097.3748C58.0955%2097.7797%2053.1118%2097.1939%2048.3913%2095.657C47.6035%2095.4005%2047.2079%2094.5344%2047.4957%2093.7576L49.0588%2089.5378C49.3465%2088.761%2050.2086%2088.3683%2050.9989%2088.6169C54.6904%2089.778%2058.5764%2090.2155%2062.4428%2089.8997C66.8081%2089.5431%2071.0424%2088.2351%2074.8483%2086.0674C78.6541%2083.8997%2081.9392%2080.9249%2084.4726%2077.3521C87.0061%2073.7793%2088.7265%2069.6951%2089.513%2065.3864C90.2995%2061.0777%2090.133%2056.6491%2089.0252%2052.4116C87.9175%2048.1741%2085.8953%2044.2306%2083.1007%2040.8581C80.3062%2037.4856%2076.8071%2034.7658%2072.8493%2032.89Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M54.3529%2029.0093C54.5013%2029.8243%2053.9599%2030.6016%2053.1533%2030.7906C49.8368%2031.5678%2046.6767%2032.9043%2043.8089%2034.7425C43.1115%2035.1895%2042.1766%2035.0366%2041.6953%2034.3624L39.0806%2030.6999C38.5992%2030.0257%2038.754%2029.0862%2039.4469%2028.6322C43.2192%2026.1606%2047.4066%2024.3897%2051.8076%2023.4047C52.616%2023.2238%2053.3979%2023.7671%2053.5464%2024.5822L54.3529%2029.0093Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M36.5688%2038.9443C37.185%2039.498%2037.2324%2040.4441%2036.7101%2041.0872C34.5626%2043.7313%2032.8811%2046.7221%2031.7377%2049.9308C31.4597%2050.7112%2030.6267%2051.1623%2029.8334%2050.9236L25.5243%2049.6269C24.731%2049.3882%2024.2785%2048.5505%2024.5487%2047.7673C26.0199%2043.5042%2028.2481%2039.5412%2031.1261%2036.069C31.6548%2035.4312%2032.6057%2035.3825%2033.2219%2035.9363L36.5688%2038.9443Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.5877%2057.6524C29.4138%2057.7142%2030.0295%2058.4341%2030.0091%2059.2623C29.9252%2062.6676%2030.4219%2066.0625%2031.4779%2069.3011C31.7347%2070.0887%2031.3511%2070.9548%2030.5773%2071.2507L26.374%2072.8578C25.6003%2073.1536%2024.7301%2072.767%2024.4654%2071.982C23.0245%2067.7085%2022.3663%2063.2099%2022.5225%2058.7028C22.5512%2057.8748%2023.2741%2057.2552%2024.1002%2057.3169L28.5877%2057.6524Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M33.3378%2076.7775C34.039%2076.3362%2034.962%2076.5494%2035.4377%2077.2276C37.3939%2080.0162%2039.8108%2082.4515%2042.5846%2084.4287C43.2592%2084.9095%2043.4654%2085.8341%2043.0188%2086.5319L40.5933%2090.3222C40.1467%2091.02%2039.2171%2091.2262%2038.5378%2090.7521C34.8394%2088.1713%2031.6367%2084.9443%2029.0839%2081.2265C28.615%2080.5435%2028.8281%2079.6155%2029.5293%2079.1743L33.3378%2076.7775Z'%20fill='%23606060'/%3e%3cpath%20d='M62.7264%2071.7358C62.7256%2071.7369%2062.7253%2071.7382%2062.7255%2071.7394V71.7394V71.7394C62.7257%2071.7407%2062.7254%2071.742%2062.7246%2071.7431L59.2097%2076.6014C58.7241%2077.2726%2057.7863%2077.4231%2057.1152%2076.9375L41.3164%2065.5073C40.6452%2065.0217%2040.4947%2064.084%2040.9803%2063.4128L43.6181%2059.7669C44.1036%2059.0957%2045.0414%2058.9453%2045.7126%2059.4309L55.4326%2066.4631C56.1038%2066.9487%2057.0416%2066.7983%2057.5271%2066.1271L73.3534%2044.2521C73.839%2043.5809%2074.7767%2043.4304%2075.4479%2043.916L79.0938%2046.5537C79.765%2047.0393%2079.9154%2047.9771%2079.4298%2048.6483L62.7264%2071.7358Z'%20fill='%23606060'/%3e%3c/svg%3e", ne = { class: "page-layout-renderer" }, ie = {
  key: 0,
  class: "loading-state"
}, le = {
  key: 1,
  class: "error-state"
}, ue = {
  key: 2,
  class: "no-layout-state"
}, de = { key: 0 }, ce = { key: 1 }, pe = {
  key: 3,
  class: "layout-engine-container"
}, ge = /* @__PURE__ */ A({
  __name: "PageLayoutRenderer",
  props: {
    pageId: {},
    viewMode: { type: Boolean }
  },
  emits: ["openWidgetSettings", "removeWidget"],
  setup(c, { emit: e }) {
    const t = c, r = I(Y), o = I(U), u = w(null), l = w(null), f = K(null), _ = w(!0), p = w(null), C = () => {
      if (t.pageId && o) {
        const a = o.getPage(t.pageId);
        if (u.value = a || null, f.value = null, l.value = null, a?.layout && r) {
          const s = r.getLayout(a.layout.id);
          l.value = s || null, s?.component && (f.value = s.component, console.log(`PageLayoutRenderer: Loaded layout component for page ${t.pageId}`, {
            layoutId: s.id,
            component: s.component
          }));
        }
      }
    };
    return Z(async () => {
      try {
        _.value = !0, p.value = null, await new Promise((a) => setTimeout(a, 50)), C();
      } catch (a) {
        p.value = `Fehler beim Laden der Seite ${t.pageId}: ${a}`, console.error("PageLayoutRenderer error:", a);
      } finally {
        _.value = !1;
      }
    }), X((a) => (p.value = `Render-Fehler: ${a.message}`, console.error("PageLayoutRenderer render error:", a), !1)), (a, s) => (d(), h("div", ne, [
      _.value ? (d(), h("div", ie, [
        s[0] || (s[0] = v("div", { class: "loading-spinner" }, null, -1)),
        v("p", null, "Lade Seite " + g(c.pageId) + "...", 1)
      ])) : p.value ? (d(), h("div", le, [
        s[1] || (s[1] = v("div", { class: "error-icon" }, "⚠️", -1)),
        v("p", null, g(p.value), 1)
      ])) : !f.value && !p.value ? (d(), h("div", ue, [
        s[2] || (s[2] = v("div", { class: "warning-icon" }, "⚠️", -1)),
        v("p", null, "Kein Layout-System für Seite " + g(c.pageId) + " gefunden", 1),
        u.value ? (d(), h("small", de, "Page: " + g(u.value.name), 1)) : E("", !0),
        l.value ? (d(), h("small", ce, "Layout: " + g(l.value.id), 1)) : E("", !0)
      ])) : f.value ? (d(), h("div", pe, [
        (d(), R(j(f.value), {
          key: l.value?.id || "view",
          pageId: t.pageId
        }, null, 8, ["pageId"]))
      ])) : E("", !0)
    ]));
  }
}), O = (c, e) => {
  const t = c.__vccOpts || c;
  for (const [r, o] of e)
    t[r] = o;
  return t;
}, he = /* @__PURE__ */ O(ge, [["__scopeId", "data-v-1f16ff64"]]), ve = {
  key: 0,
  class: "container"
}, fe = {
  key: 0,
  class: "recursion-warning"
}, Ce = { class: "recursion-details" }, _e = {
  key: 1,
  style: { width: "100%", height: "100%" }
}, me = {
  key: 0,
  class: "page-info"
}, Te = { class: "page-content-wrapper" }, G = 3, Ee = /* @__PURE__ */ A({
  __name: "PageWidget",
  props: {
    configv: { required: !0 },
    configvModifiers: {}
  },
  emits: ["update:configv"],
  setup(c) {
    const e = F(c, "configv"), t = {
      path: "/page/abc",
      hideTitle: !1
    };
    J();
    const r = B(), u = I("pageWidgetDepth", 0) + 1;
    W("pageWidgetDepth", u);
    const l = I("pageWidgetPaths", []), f = `/page/${r.params.pageid}`, _ = [...l, f];
    W("pageWidgetPaths", _);
    const p = S(() => {
      const a = e.value.path;
      if (!a) return !1;
      if (u > G)
        return console.warn(`PageWidget: Max depth ${G} reached`, { currentDepth: u, targetPath: a }), !0;
      if (l.includes(a))
        return console.warn("PageWidget: Circular reference detected", { targetPath: a, parentPaths: l }), !0;
      const s = a.split("/").pop(), m = r.params.pageid;
      return s === m ? (console.warn("PageWidget: Self-reference detected", { targetPageId: s, currentPageId: m }), !0) : !1;
    });
    if (!e.value.path)
      for (const a of Object.keys(t)) {
        const s = t[a], m = e.value[a];
        m == null && (e.value[a] = s);
      }
    const C = S(() => e.value.path?.split("/").pop() || "abc");
    return (a, s) => e.value.path ? (d(), h("div", ve, [
      p.value ? (d(), h("div", fe, [
        L(" ⚠️ Rekursive Seitenverweis verhindert: " + g(e.value.path) + " ", 1),
        v("div", Ce, [
          L(" Tiefe: " + g(u) + "/" + g(G)),
          s[0] || (s[0] = v("br", null, null, -1)),
          L(" Aufrufkette: " + g(_.join(" → ")) + " → " + g(e.value.path), 1)
        ])
      ])) : (d(), h("div", _e, [
        v("div", {
          class: z(["page-widget-content", {}]),
          style: q({
            backgroundColor: e.value.backgroundColor || void 0
          })
        }, [
          e.value.hideTitle ? E("", !0) : (d(), h("div", me, " 📄 Seite: " + g(C.value), 1)),
          v("div", Te, [
            N(he, { pageId: C.value }, null, 8, ["pageId"])
          ])
        ], 4)
      ]))
    ])) : E("", !0);
  }
}), Ie = /* @__PURE__ */ O(Ee, [["__scopeId", "data-v-a181d5f3"]]), we = { class: "settings-container" }, Se = /* @__PURE__ */ A({
  __name: "PageWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(c) {
    const e = I("i18n"), t = (C) => e ? e.t(C) : C, r = w({
      widgetSection: !1,
      storeSection: !1
    }), o = F(c, "modelValue"), u = B(), l = I(U), f = S(() => u.params.pageid), _ = S(() => l.getAllPageIds().filter((a) => a !== f.value).map((a) => {
      const s = l.getPage(a);
      return {
        value: `/page/${a}`,
        text: s?.name || a,
        id: a
      };
    })), p = S(() => o.value.path ? o.value.path.split("/").pop() !== f.value : !0);
    return (C, a) => {
      const s = y("va-select"), m = y("va-alert"), M = y("va-input"), V = y("va-collapse");
      return d(), R(V, {
        modelValue: r.value.widgetSection,
        "onUpdate:modelValue": a[3] || (a[3] = (T) => r.value.widgetSection = T),
        header: "Seite wählen",
        icon: "tab"
      }, {
        default: D(() => [
          v("div", we, [
            N(s, {
              modelValue: o.value.path,
              "onUpdate:modelValue": a[0] || (a[0] = (T) => o.value.path = T),
              label: t("page:pageWidget.selectPage"),
              options: _.value,
              "value-by": "value",
              "text-by": "text",
              placeholder: t("page:pageWidget.selectPagePlaceholder"),
              color: p.value ? "primary" : "danger"
            }, null, 8, ["modelValue", "label", "options", "placeholder", "color"]),
            p.value ? E("", !0) : (d(), R(m, {
              key: 0,
              color: "warning",
              border: !1,
              icon: "warning"
            }, {
              default: D(() => [
                L(g(t("page:pageWidget.selfReferenceWarning")), 1)
              ]),
              _: 1
            })),
            N(V, {
              modelValue: r.value.storeSection,
              "onUpdate:modelValue": a[2] || (a[2] = (T) => r.value.storeSection = T),
              header: t("page:pageWidget.manualPath"),
              icon: "edit"
            }, {
              default: D(() => [
                N(M, {
                  modelValue: o.value.path,
                  "onUpdate:modelValue": a[1] || (a[1] = (T) => o.value.path = T),
                  label: t("page:pageWidget.path"),
                  color: p.value ? "primary" : "danger"
                }, null, 8, ["modelValue", "label", "color"])
              ]),
              _: 1
            }, 8, ["modelValue", "header"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), ye = /* @__PURE__ */ O(Se, [["__scopeId", "data-v-e6d159de"]]);
class k extends Q {
  // Lazy singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new k()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(i.eINSTANCE);
  }
  /**
   * Create a new PageWidgetSettings instance
   */
  createPageWidgetSettings() {
    return new n();
  }
  /**
   * Create an instance of the given class
   */
  create(e) {
    switch (e.getName()) {
      case "PageWidgetSettings":
        return this.createPageWidgetSettings();
      default:
        throw new Error(`Unknown class: ${e.getName()}`);
    }
  }
}
class i extends ee {
  static eNAME = "pagesettings";
  static eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.page";
  static eNS_PREFIX = "pagesettings";
  // Singleton instance
  static _instance;
  static get eINSTANCE() {
    return this._instance || (this._instance = new i(), this._instance.init()), this._instance;
  }
  /**
   * Literals for quick access to metaclasses and features
   */
  static Literals = {
    PAGE_WIDGET_SETTINGS: null,
    PAGE_WIDGET_SETTINGS__PATH: null,
    PAGE_WIDGET_SETTINGS__HIDE_TITLE: null,
    PAGE_WIDGET_SETTINGS__BACKGROUND_COLOR: null
  };
  constructor() {
    super(), this.setName(i.eNAME), this.setNsURI(i.eNS_URI), this.setNsPrefix(i.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    te.INSTANCE.set(i.eNS_URI, this), this.setEFactoryInstance(k.eINSTANCE);
    const e = new ae();
    e.setName("PageWidgetSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), i.Literals.PAGE_WIDGET_SETTINGS = e;
    const t = new b();
    t.setName("path"), t.setLowerBound(0), t.setUpperBound(1), e.getEStructuralFeatures().push(t), i.Literals.PAGE_WIDGET_SETTINGS__PATH = t;
    const r = new b();
    r.setName("hideTitle"), r.setLowerBound(0), r.setUpperBound(1), e.getEStructuralFeatures().push(r), i.Literals.PAGE_WIDGET_SETTINGS__HIDE_TITLE = r;
    const o = new b();
    o.setName("backgroundColor"), o.setLowerBound(0), o.setUpperBound(1), e.getEStructuralFeatures().push(o), i.Literals.PAGE_WIDGET_SETTINGS__BACKGROUND_COLOR = o, i.Literals.PAGE_WIDGET_SETTINGS__PATH.setEType(P().getEClassifier("EString")), i.Literals.PAGE_WIDGET_SETTINGS__HIDE_TITLE.setEType(P().getEClassifier("EBoolean")), i.Literals.PAGE_WIDGET_SETTINGS__BACKGROUND_COLOR.setEType(P().getEClassifier("EString"));
  }
}
class n extends se {
  // Feature ID Constants (eLiterals)
  static PATH = 0;
  static HIDE_TITLE = 1;
  static BACKGROUND_COLOR = 2;
  // Private fields
  _path;
  _hideTitle = !1;
  _backgroundColor;
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return i.Literals.PAGE_WIDGET_SETTINGS;
  }
  // Getters and Setters
  get path() {
    return this._path;
  }
  set path(e) {
    const t = this._path;
    this._path = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(n.PATH),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.PATH,
      merge: () => !1
    });
  }
  get hideTitle() {
    return this._hideTitle;
  }
  set hideTitle(e) {
    const t = this._hideTitle;
    this._hideTitle = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(n.HIDE_TITLE),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.HIDE_TITLE,
      merge: () => !1
    });
  }
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(e) {
    const t = this._backgroundColor;
    this._backgroundColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(n.BACKGROUND_COLOR),
      getOldValue: () => t,
      getNewValue: () => e,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => n.BACKGROUND_COLOR,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case n.PATH:
        return this.path;
      case n.HIDE_TITLE:
        return this.hideTitle;
      case n.BACKGROUND_COLOR:
        return this.backgroundColor;
      default:
        return super.eGet(e);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(e, t) {
    switch (this.eClass().getFeatureID(e)) {
      case n.PATH:
        this.path = t, super.eSet(e, t);
        break;
      case n.HIDE_TITLE:
        this.hideTitle = t, super.eSet(e, t);
        break;
      case n.BACKGROUND_COLOR:
        this.backgroundColor = t, super.eSet(e, t);
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
      case n.PATH:
        return this._path !== void 0;
      case n.HIDE_TITLE:
        return this._hideTitle !== !1;
      case n.BACKGROUND_COLOR:
        return this._backgroundColor !== void 0;
      default:
        return super.eIsSet(e);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(e) {
    switch (this.eClass().getFeatureID(e)) {
      case n.PATH:
        this._path = void 0;
        return;
      case n.HIDE_TITLE:
        this._hideTitle = !1;
        return;
      case n.BACKGROUND_COLOR:
        this._backgroundColor = void 0;
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
      path: this.path,
      hideTitle: this.hideTitle,
      backgroundColor: this.backgroundColor
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

The form for the page widget: how the nested page is framed.

Which page it is stays with the hand-written picker beside this - the
choices are the pages that exist right now, which a written list cannot say.

The title switch has been read by the widget all along and was never
offered anywhere; it is offered here.
-->
<uimodel:UIModel
    xmlns:xmi="http://www.omg.org/XMI"
    xmi:version="2.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xmlns:uimodel="http://uimodel/1.0"
    name="PageWidgetSettingsForm">

  <targetClasses href="http://org.eclipse.daanse.board.app.ui.vue.widget.page#//PageWidgetSettings"/>

  <components xsi:type="uimodel:FormView" name="PageWidgetSettingsFormView">
    <fields xsi:type="uimodel:CheckboxWidget" name="hideTitle"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.page#//PageWidgetSettings/hideTitle" label="Titel der Seite verbergen"/>
    <fields xsi:type="uimodel:InputWidget" name="backgroundColor"
        feature="http://org.eclipse.daanse.board.app.ui.vue.widget.page#//PageWidgetSettings/backgroundColor" label="Hintergrundfarbe"/>
  </components>
</uimodel:UIModel>
`;
var Ne = Object.getOwnPropertyDescriptor, De = (c, e, t, r) => {
  for (var o = r > 1 ? void 0 : r ? Ne(e, t) : e, u = c.length - 1, l; u >= 0; u--)
    (l = c[u]) && (o = l(o) || o);
  return o;
};
i.eINSTANCE;
const H = "PageWidget";
let x = class {
  type = H;
  component = Ie;
  settingsComponent = ye;
  supportedDSTypes = [];
  icon = re;
  name = "Page";
  /*
   * The settings form, as a model. Carried on the registration like the
   * icon, so whoever shows the settings does not have to know this widget
   * exists - and the shell needs no dependency on this bundle.
   */
  settingsForm = {
    xmi: Le,
    uri: "/page-settings.ui.xmi",
    ePackage: () => i.eINSTANCE,
    create: () => new n(),
    /*
     * Picking the page is not a field: the choices are the pages that exist
     * right now, and it refuses the page it is sitting on. Named so that
     * what is modelled is not offered twice.
     */
    unmodelledSections: ["Seite wählen"]
  };
};
x = De([
  $({
    service: [oe],
    properties: { "widget.type": H }
  })
], x);
export {
  Ie as PageWidget,
  x as PageWidgetProvider,
  ye as PageWidgetSettings,
  n as PageWidgetSettingsImpl,
  i as PagesettingsPackage,
  Le as pageSettingsFormXmi
};
