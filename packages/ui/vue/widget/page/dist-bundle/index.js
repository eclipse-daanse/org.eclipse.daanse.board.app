(function(){var i="ui.vue.widget.page",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".page-layout-renderer[data-v-1f16ff64]{width:100%;height:100%;position:relative;min-height:300px}.loading-state[data-v-1f16ff64],.error-state[data-v-1f16ff64],.empty-state[data-v-1f16ff64],.no-layout-state[data-v-1f16ff64]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;padding:2rem;text-align:center}.loading-spinner[data-v-1f16ff64]{width:32px;height:32px;border:3px solid #f3f3f3;border-top:3px solid #007bff;border-radius:50%;animation:spin-1f16ff64 1s linear infinite}@keyframes spin-1f16ff64{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.error-state[data-v-1f16ff64]{color:#dc3545}.error-icon[data-v-1f16ff64],.empty-icon[data-v-1f16ff64],.warning-icon[data-v-1f16ff64]{font-size:2rem;margin-bottom:1rem}.no-layout-state[data-v-1f16ff64]{color:#ffc107}.layout-engine-container[data-v-1f16ff64]{width:100%;height:100%;position:relative}.empty-state[data-v-1f16ff64]{color:#6c757d}.layout-container[data-v-1f16ff64]{position:relative;width:100%;height:100%;background:#f8f9fa;min-height:400px}.layout-container.view-mode[data-v-1f16ff64]{background:transparent}.layout-item[data-v-1f16ff64]{border:1px solid #e9ecef;border-radius:4px;background:#fff;box-shadow:0 2px 4px #0000001a;overflow:hidden}.view-mode .layout-item[data-v-1f16ff64]{border-color:transparent;box-shadow:none}.missing-widget[data-v-1f16ff64]{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;color:#6c757d;background:#f8f9fa;text-align:center;font-size:.8rem}.missing-widget-icon[data-v-1f16ff64]{font-size:1.5rem;margin-bottom:.5rem}.debug-info[data-v-1f16ff64]{position:absolute;bottom:10px;right:10px;background:#000c;color:#fff;padding:.5rem;border-radius:4px;font-size:.7rem;max-width:300px}.debug-info pre[data-v-1f16ff64]{margin:0;white-space:pre-wrap}.container[data-v-a181d5f3]{width:100%;height:100%}.recursion-warning[data-v-a181d5f3]{padding:1rem;background-color:#fff3cd;border:1px solid #ffeaa7;border-radius:4px;color:#856404;text-align:center}.recursion-details[data-v-a181d5f3]{font-size:.8em;margin-top:.5rem;opacity:.7}.page-widget-content[data-v-a181d5f3]{width:100%;height:100%;border:1px solid #e0e0e0;border-radius:4px;overflow:hidden;display:flex;flex-direction:column}.page-widget-content.scroll-mode[data-v-a181d5f3]{overflow:auto}.page-widget-content.scroll-mode .page-content-wrapper[data-v-a181d5f3]{min-height:fit-content;overflow:visible}.page-widget-content.responsive-mode[data-v-a181d5f3]{overflow:hidden}.page-widget-content.responsive-mode .page-content-wrapper[data-v-a181d5f3]{flex:1;overflow:hidden;position:relative}.page-info[data-v-a181d5f3]{background:#f8f9fa;padding:.5rem;font-size:.9em;color:#6c757d;border-bottom:1px solid #e0e0e0;flex-shrink:0}.page-content-wrapper[data-v-a181d5f3]{flex:1;position:relative;min-height:0;width:100%;overflow:auto}.page-content-wrapper[data-v-a181d5f3]>*{width:100%;height:100%}.settings-container[data-v-0d08680e]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.add-btn[data-v-0d08680e]{width:150px}.input[data-v-0d08680e]{width:100px}.loading[data-v-0d08680e]{height:100%;padding:50px;border-radius:4px;margin-bottom:1rem;background-color:var(--app-response-background)}\n";})();
import { component as U } from "@eclipse-daanse/tsm";
import { defineComponent as b, inject as y, ref as V, shallowRef as j, onMounted as H, onErrorCaptured as N, createElementBlock as p, openBlock as s, createCommentVNode as h, createElementVNode as g, toDisplayString as c, createBlock as S, resolveDynamicComponent as q, useModel as M, provide as x, computed as L, createTextVNode as I, normalizeStyle as z, normalizeClass as A, createVNode as w, resolveComponent as P, withCtx as W } from "vue";
import { useRouter as F, useRoute as T } from "vue-router";
import { identifier as G } from "org.eclipse.daanse.board.app.lib.api.layout.page";
import { identifier as E } from "org.eclipse.daanse.board.app.lib.api.page";
import { WIDGET_SERVICE_ID as K } from "org.eclipse.daanse.board.app.lib.api.widget";
const Y = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M72.8493%2032.89C69.3438%2031.2286%2065.5539%2030.2648%2061.6902%2030.0469C60.8631%2030.0002%2060.1953%2029.3283%2060.2006%2028.4999L60.2291%2024C60.2344%2023.1716%2060.9105%2022.5011%2061.7381%2022.5395C66.6971%2022.7695%2071.5664%2023.9822%2076.0614%2026.1127C81.0087%2028.4575%2085.3826%2031.8571%2088.8758%2036.0728C92.3689%2040.2885%2094.8967%2045.2179%2096.2814%2050.5147C97.6661%2055.8115%2097.8742%2061.3473%2096.891%2066.7332C95.9079%2072.119%2093.7574%2077.2243%2090.5906%2081.6903C87.4238%2086.1563%2083.3175%2089.8748%2078.5602%2092.5844C73.8029%2095.294%2068.51%2096.9291%2063.0533%2097.3748C58.0955%2097.7797%2053.1118%2097.1939%2048.3913%2095.657C47.6035%2095.4005%2047.2079%2094.5344%2047.4957%2093.7576L49.0588%2089.5378C49.3465%2088.761%2050.2086%2088.3683%2050.9989%2088.6169C54.6904%2089.778%2058.5764%2090.2155%2062.4428%2089.8997C66.8081%2089.5431%2071.0424%2088.2351%2074.8483%2086.0674C78.6541%2083.8997%2081.9392%2080.9249%2084.4726%2077.3521C87.0061%2073.7793%2088.7265%2069.6951%2089.513%2065.3864C90.2995%2061.0777%2090.133%2056.6491%2089.0252%2052.4116C87.9175%2048.1741%2085.8953%2044.2306%2083.1007%2040.8581C80.3062%2037.4856%2076.8071%2034.7658%2072.8493%2032.89Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M54.3529%2029.0093C54.5013%2029.8243%2053.9599%2030.6016%2053.1533%2030.7906C49.8368%2031.5678%2046.6767%2032.9043%2043.8089%2034.7425C43.1115%2035.1895%2042.1766%2035.0366%2041.6953%2034.3624L39.0806%2030.6999C38.5992%2030.0257%2038.754%2029.0862%2039.4469%2028.6322C43.2192%2026.1606%2047.4066%2024.3897%2051.8076%2023.4047C52.616%2023.2238%2053.3979%2023.7671%2053.5464%2024.5822L54.3529%2029.0093Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M36.5688%2038.9443C37.185%2039.498%2037.2324%2040.4441%2036.7101%2041.0872C34.5626%2043.7313%2032.8811%2046.7221%2031.7377%2049.9308C31.4597%2050.7112%2030.6267%2051.1623%2029.8334%2050.9236L25.5243%2049.6269C24.731%2049.3882%2024.2785%2048.5505%2024.5487%2047.7673C26.0199%2043.5042%2028.2481%2039.5412%2031.1261%2036.069C31.6548%2035.4312%2032.6057%2035.3825%2033.2219%2035.9363L36.5688%2038.9443Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.5877%2057.6524C29.4138%2057.7142%2030.0295%2058.4341%2030.0091%2059.2623C29.9252%2062.6676%2030.4219%2066.0625%2031.4779%2069.3011C31.7347%2070.0887%2031.3511%2070.9548%2030.5773%2071.2507L26.374%2072.8578C25.6003%2073.1536%2024.7301%2072.767%2024.4654%2071.982C23.0245%2067.7085%2022.3663%2063.2099%2022.5225%2058.7028C22.5512%2057.8748%2023.2741%2057.2552%2024.1002%2057.3169L28.5877%2057.6524Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M33.3378%2076.7775C34.039%2076.3362%2034.962%2076.5494%2035.4377%2077.2276C37.3939%2080.0162%2039.8108%2082.4515%2042.5846%2084.4287C43.2592%2084.9095%2043.4654%2085.8341%2043.0188%2086.5319L40.5933%2090.3222C40.1467%2091.02%2039.2171%2091.2262%2038.5378%2090.7521C34.8394%2088.1713%2031.6367%2084.9443%2029.0839%2081.2265C28.615%2080.5435%2028.8281%2079.6155%2029.5293%2079.1743L33.3378%2076.7775Z'%20fill='%23606060'/%3e%3cpath%20d='M62.7264%2071.7358C62.7256%2071.7369%2062.7253%2071.7382%2062.7255%2071.7394V71.7394V71.7394C62.7257%2071.7407%2062.7254%2071.742%2062.7246%2071.7431L59.2097%2076.6014C58.7241%2077.2726%2057.7863%2077.4231%2057.1152%2076.9375L41.3164%2065.5073C40.6452%2065.0217%2040.4947%2064.084%2040.9803%2063.4128L43.6181%2059.7669C44.1036%2059.0957%2045.0414%2058.9453%2045.7126%2059.4309L55.4326%2066.4631C56.1038%2066.9487%2057.0416%2066.7983%2057.5271%2066.1271L73.3534%2044.2521C73.839%2043.5809%2074.7767%2043.4304%2075.4479%2043.916L79.0938%2046.5537C79.765%2047.0393%2079.9154%2047.9771%2079.4298%2048.6483L62.7264%2071.7358Z'%20fill='%23606060'/%3e%3c/svg%3e", J = { class: "page-layout-renderer" }, Q = {
  key: 0,
  class: "loading-state"
}, X = {
  key: 1,
  class: "error-state"
}, ee = {
  key: 2,
  class: "no-layout-state"
}, te = { key: 0 }, ae = { key: 1 }, oe = {
  key: 3,
  class: "layout-engine-container"
}, le = /* @__PURE__ */ b({
  __name: "PageLayoutRenderer",
  props: {
    pageId: {},
    viewMode: { type: Boolean }
  },
  emits: ["openWidgetSettings", "removeWidget"],
  setup(d, { emit: o }) {
    const a = d, n = y(G), l = y(E), i = V(null), r = V(null), v = j(null), C = V(!0), u = V(null), m = () => {
      if (a.pageId && l) {
        const e = l.getPage(a.pageId);
        if (i.value = e || null, v.value = null, r.value = null, e?.layout && n) {
          const t = n.getLayout(e.layout.id);
          r.value = t || null, t?.component && (v.value = t.component, console.log(`PageLayoutRenderer: Loaded layout component for page ${a.pageId}`, {
            layoutId: t.id,
            component: t.component
          }));
        }
      }
    };
    return H(async () => {
      try {
        C.value = !0, u.value = null, await new Promise((e) => setTimeout(e, 50)), m();
      } catch (e) {
        u.value = `Fehler beim Laden der Seite ${a.pageId}: ${e}`, console.error("PageLayoutRenderer error:", e);
      } finally {
        C.value = !1;
      }
    }), N((e) => (u.value = `Render-Fehler: ${e.message}`, console.error("PageLayoutRenderer render error:", e), !1)), (e, t) => (s(), p("div", J, [
      C.value ? (s(), p("div", Q, [
        t[0] || (t[0] = g("div", { class: "loading-spinner" }, null, -1)),
        g("p", null, "Lade Seite " + c(d.pageId) + "...", 1)
      ])) : u.value ? (s(), p("div", X, [
        t[1] || (t[1] = g("div", { class: "error-icon" }, "⚠️", -1)),
        g("p", null, c(u.value), 1)
      ])) : !v.value && !u.value ? (s(), p("div", ee, [
        t[2] || (t[2] = g("div", { class: "warning-icon" }, "⚠️", -1)),
        g("p", null, "Kein Layout-System für Seite " + c(d.pageId) + " gefunden", 1),
        i.value ? (s(), p("small", te, "Page: " + c(i.value.name), 1)) : h("", !0),
        r.value ? (s(), p("small", ae, "Layout: " + c(r.value.id), 1)) : h("", !0)
      ])) : v.value ? (s(), p("div", oe, [
        (s(), S(q(v.value), {
          key: r.value?.id || "view",
          pageId: a.pageId
        }, null, 8, ["pageId"]))
      ])) : h("", !0)
    ]));
  }
}), R = (d, o) => {
  const a = d.__vccOpts || d;
  for (const [n, l] of o)
    a[n] = l;
  return a;
}, ne = /* @__PURE__ */ R(le, [["__scopeId", "data-v-1f16ff64"]]), re = {
  key: 0,
  class: "container"
}, ie = {
  key: 0,
  class: "recursion-warning"
}, se = { class: "recursion-details" }, de = {
  key: 1,
  style: { width: "100%", height: "100%" }
}, ue = {
  key: 0,
  class: "page-info"
}, ce = { class: "page-content-wrapper" }, k = 3, pe = /* @__PURE__ */ b({
  __name: "PageWidget",
  props: {
    configv: { required: !0 },
    configvModifiers: {}
  },
  emits: ["update:configv"],
  setup(d) {
    const o = M(d, "configv"), a = {
      path: "/page/abc",
      hideTitle: !1
    };
    F();
    const n = T(), i = y("pageWidgetDepth", 0) + 1;
    x("pageWidgetDepth", i);
    const r = y("pageWidgetPaths", []), v = `/page/${n.params.pageid}`, C = [...r, v];
    x("pageWidgetPaths", C);
    const u = L(() => {
      const e = o.value.path;
      if (!e) return !1;
      if (i > k)
        return console.warn(`PageWidget: Max depth ${k} reached`, { currentDepth: i, targetPath: e }), !0;
      if (r.includes(e))
        return console.warn("PageWidget: Circular reference detected", { targetPath: e, parentPaths: r }), !0;
      const t = e.split("/").pop(), _ = n.params.pageid;
      return t === _ ? (console.warn("PageWidget: Self-reference detected", { targetPageId: t, currentPageId: _ }), !0) : !1;
    });
    if (!o.value.path)
      for (const e of Object.keys(a)) {
        const t = a[e], _ = o.value[e];
        _ == null && (o.value[e] = t);
      }
    const m = L(() => o.value.path?.split("/").pop() || "abc");
    return (e, t) => o.value.path ? (s(), p("div", re, [
      u.value ? (s(), p("div", ie, [
        I(" ⚠️ Rekursive Seitenverweis verhindert: " + c(o.value.path) + " ", 1),
        g("div", se, [
          I(" Tiefe: " + c(i) + "/" + c(k)),
          t[0] || (t[0] = g("br", null, null, -1)),
          I(" Aufrufkette: " + c(C.join(" → ")) + " → " + c(o.value.path), 1)
        ])
      ])) : (s(), p("div", de, [
        g("div", {
          class: A(["page-widget-content", {}]),
          style: z({
            backgroundColor: o.value.backgroundColor || void 0
          })
        }, [
          o.value.hideTitle ? h("", !0) : (s(), p("div", ue, " 📄 Seite: " + c(m.value), 1)),
          g("div", ce, [
            w(ne, { pageId: m.value }, null, 8, ["pageId"])
          ])
        ], 4)
      ]))
    ])) : h("", !0);
  }
}), ge = /* @__PURE__ */ R(pe, [["__scopeId", "data-v-a181d5f3"]]), ve = { class: "settings-container" }, me = /* @__PURE__ */ b({
  __name: "PageWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(d) {
    const o = y("i18n"), a = (m) => o ? o.t(m) : m, n = V({
      widgetSection: !1,
      storeSection: !1
    }), l = M(d, "modelValue"), i = T(), r = y(E), v = L(() => i.params.pageid), C = L(() => r.getAllPageIds().filter((e) => e !== v.value).map((e) => {
      const t = r.getPage(e);
      return {
        value: `/page/${e}`,
        text: t?.name || e,
        id: e
      };
    })), u = L(() => l.value.path ? l.value.path.split("/").pop() !== v.value : !0);
    return (m, e) => {
      const t = P("va-select"), _ = P("va-alert"), B = P("va-color-input"), O = P("va-input"), $ = P("va-collapse");
      return s(), S($, {
        modelValue: n.value.widgetSection,
        "onUpdate:modelValue": e[4] || (e[4] = (f) => n.value.widgetSection = f),
        header: a("page:pageWidget.title"),
        icon: "settings"
      }, {
        default: W(() => [
          g("div", ve, [
            w(t, {
              modelValue: l.value.path,
              "onUpdate:modelValue": e[0] || (e[0] = (f) => l.value.path = f),
              label: a("page:pageWidget.selectPage"),
              options: C.value,
              "value-by": "value",
              "text-by": "text",
              placeholder: a("page:pageWidget.selectPagePlaceholder"),
              color: u.value ? "primary" : "danger"
            }, null, 8, ["modelValue", "label", "options", "placeholder", "color"]),
            u.value ? h("", !0) : (s(), S(_, {
              key: 0,
              color: "warning",
              border: !1,
              icon: "warning"
            }, {
              default: W(() => [
                I(c(a("page:pageWidget.selfReferenceWarning")), 1)
              ]),
              _: 1
            })),
            w(B, {
              modelValue: l.value.backgroundColor,
              "onUpdate:modelValue": e[1] || (e[1] = (f) => l.value.backgroundColor = f),
              label: a("page:pageWidget.backgroundColor")
            }, null, 8, ["modelValue", "label"]),
            w($, {
              modelValue: n.value.storeSection,
              "onUpdate:modelValue": e[3] || (e[3] = (f) => n.value.storeSection = f),
              header: a("page:pageWidget.manualPath"),
              icon: "edit"
            }, {
              default: W(() => [
                w(O, {
                  modelValue: l.value.path,
                  "onUpdate:modelValue": e[2] || (e[2] = (f) => l.value.path = f),
                  label: a("page:pageWidget.path"),
                  color: u.value ? "primary" : "danger"
                }, null, 8, ["modelValue", "label", "color"])
              ]),
              _: 1
            }, 8, ["modelValue", "header"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "header"]);
    };
  }
}), fe = /* @__PURE__ */ R(me, [["__scopeId", "data-v-0d08680e"]]);
var Ce = Object.getOwnPropertyDescriptor, _e = (d, o, a, n) => {
  for (var l = n > 1 ? void 0 : n ? Ce(o, a) : o, i = d.length - 1, r; i >= 0; i--)
    (r = d[i]) && (l = r(l) || l);
  return l;
};
const Z = "PageWidget";
let D = class {
  type = Z;
  component = ge;
  settingsComponent = fe;
  supportedDSTypes = [];
  icon = Y;
  name = "Page";
};
D = _e([
  U({
    service: [K],
    properties: { "widget.type": Z }
  })
], D);
export {
  D as PageWidgetProvider
};
