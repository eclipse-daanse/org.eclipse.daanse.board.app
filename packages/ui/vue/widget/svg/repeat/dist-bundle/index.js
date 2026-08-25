(function(){var i="ui.vue.widget.svg.repeat",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".repeatable-svg-container[data-v-2371f225]{width:100%;height:100%;display:flex;flex-direction:row;object-fit:contain}.settings-container[data-v-20524639]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.colors[data-v-20524639]{display:flex;justify-content:space-between}.color-input[data-v-20524639]{width:49%}.loading[data-v-20524639]{height:100%;padding:50px;border-radius:4px;margin-bottom:1rem;background-color:var(--app-response-background)}\n";})();
import { EVENT_ACTIONS_REGISTRY as n2, EVENT_REGISTRY_ID as p2, EVENT_ACTIONS_REGISTRY_ID as u2 } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as v2, deactivate as d2, component as c2, inject as U } from "@eclipse-daanse/tsm";
import { defineComponent as Y, mergeModels as g2, toRefs as m2, useModel as K, inject as N, ref as E, onMounted as C2, onUnmounted as f2, watch as b2, computed as V, createElementBlock as y, openBlock as _, withModifiers as S2, createElementVNode as R, Fragment as B, renderList as A, resolveComponent as L, createBlock as _2, withCtx as f, createVNode as d, unref as b } from "vue";
import { VariableWrapper as g } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { Reference as w, Documentation as w2, Attribute as I2, ModelClass as J } from "org.eclipse.daanse.board.app.lib.annotations";
import { useRoute as V2 } from "vue-router";
import { WidgetAction as Q, WidgetActionInterface as R2, Payload as q } from "org.eclipse.daanse.board.app.lib.events";
import { VariableInput as S } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as h2 } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: y2 } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var W2 = Object.defineProperty, T2 = Object.getOwnPropertyDescriptor, x = (r, s, l, t) => {
  for (var e = t > 1 ? void 0 : t ? T2(s, l) : s, i = r.length - 1, a; i >= 0; i--)
    (a = r[i]) && (e = (t ? a(s, l, e) : a(e)) || e);
  return t && e && W2(s, l, e), e;
};
let m = class {
  fill = new g();
  stroke = new g();
  className;
};
x([
  w("VariableWrapper")
], m.prototype, "fill", 2);
x([
  w("VariableWrapper")
], m.prototype, "stroke", 2);
x([
  w2("The CSS class name to apply to the SVG item."),
  I2()
], m.prototype, "className", 2);
m = x([
  J({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat#//SVGItemStyles" })
], m);
var G2 = Object.defineProperty, k2 = Object.getOwnPropertyDescriptor, W = (r, s, l, t) => {
  for (var e = t > 1 ? void 0 : t ? k2(s, l) : s, i = r.length - 1, a; i >= 0; i--)
    (a = r[i]) && (e = (t ? a(s, l, e) : a(e)) || e);
  return t && e && G2(s, l, e), e;
};
let C = class {
  src = new g();
  activeItemStyles = new m();
  defaultItemStyles = new m();
  repetitions = new g();
  progress = new g();
};
W([
  w("VariableWrapper")
], C.prototype, "src", 2);
W([
  w("SVGItemStyles")
], C.prototype, "activeItemStyles", 2);
W([
  w("SVGItemStyles")
], C.prototype, "defaultItemStyles", 2);
W([
  w("VariableWrapper")
], C.prototype, "repetitions", 2);
W([
  w("VariableWrapper")
], C.prototype, "progress", 2);
C = W([
  J({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat#//RepeatableSVGSettings" })
], C);
var M2 = Object.defineProperty, O2 = Object.getOwnPropertyDescriptor, X = (r, s, l, t) => {
  for (var e = O2(s, l), i = r.length - 1, a; i >= 0; i--)
    (a = r[i]) && (e = a(s, l, e) || e);
  return e && M2(s, l, e), e;
};
class P extends R2 {
  zoom(s) {
    throw new Error("zoom not implemented");
  }
  resetZoom() {
    throw new Error("resetZoom not implemented");
  }
}
X([
  Q({ eventType: "svgRepeat.zoom" })
], P.prototype, "zoom");
X([
  Q({ eventType: "svgRepeat.resetZoom" })
], P.prototype, "resetZoom");
const E2 = ["viewBox"], H2 = { id: "bubbleKenseo" }, x2 = ["width"], P2 = ["fill", "stroke"], L2 = ["innerHTML", "transform"], N2 = ["fill", "stroke"], D2 = ["innerHTML", "transform"], $2 = /* @__PURE__ */ Y({
  __name: "RepeatableSvgWidget",
  props: /* @__PURE__ */ g2({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(r, { expose: s }) {
    const l = r, { id: t } = m2(l), e = K(r, "configv"), i = N(y2.TINY_EMITTER), a = N(n2), I = V2().params.pageid || "", T = E(1), o = E(null);
    class p extends P {
      zoom(u) {
        T.value = Math.max(0.1, Math.min(10, u));
        const v = o.value;
        v && (v.style.transform = `scale(${T.value})`, v.style.transformOrigin = "top left");
      }
      resetZoom() {
        T.value = 1;
        const u = o.value;
        u && (u.style.transform = "", u.style.transformOrigin = "");
      }
    }
    const $ = new p();
    s($);
    const t2 = () => {
      t?.value && i.emit("widget:RepeatableSVGWidget:click", {
        type: "widget:RepeatableSVGWidget:click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, l2 = () => {
      t?.value && i.emit("widget:RepeatableSVGWidget:right_click", {
        type: "widget:RepeatableSVGWidget:right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, G = E("");
    new C();
    const Z = async (n) => {
      const u = n?.value || n;
      if (u && typeof u == "string")
        try {
          const c = await (await fetch(u)).text();
          G.value = c;
        } catch (v) {
          console.error("Failed to load SVG:", v), G.value = "";
        }
      else
        G.value = "";
    }, k = (n, u, v) => {
      const c = n[u];
      if (c == null)
        n[u] = new g(v);
      else if (!(c instanceof g)) if (typeof c == "object" && "value" in c) {
        const F = new g(c.value);
        "variable" in c && (F.variable = c.variable), n[u] = F;
      } else
        n[u] = new g(c);
    }, j = (n) => {
      n && (k(n, "fill", "#000000"), k(n, "stroke", "none"));
    };
    C2(async () => {
      t?.value && a.registerInstance(t.value, $, "RepeatableSVGWidget", I), e.value || (e.value = new C()), k(e.value, "src", ""), k(e.value, "repetitions", "1"), k(e.value, "progress", "0"), e.value.activeItemStyles || (e.value.activeItemStyles = new m()), j(e.value.activeItemStyles), e.value.defaultItemStyles || (e.value.defaultItemStyles = new m()), j(e.value.defaultItemStyles), await Z(e.value.src);
    }), f2(() => {
      t?.value && a.unregisterInstance(t.value);
    }), b2(
      () => e.value?.src?.value,
      (n) => {
        Z(n);
      }
    );
    const O = V(() => {
      const n = e.value?.repetitions?.value ?? "1";
      return isNaN(parseFloat(n)) ? 1 : Math.floor(Number(n));
    }), a2 = V(() => {
      const n = e.value?.progress?.value ?? "0";
      return isNaN(parseFloat(n)) ? 0 : Number(n);
    }), o2 = V(() => e.value?.activeItemStyles?.fill?.value), s2 = V(() => e.value?.activeItemStyles?.stroke?.value), r2 = V(() => e.value?.defaultItemStyles?.fill?.value), i2 = V(() => e.value?.defaultItemStyles?.stroke?.value);
    return (n, u) => (_(), y("div", {
      class: "repeatable-svg-container",
      onClick: t2,
      onContextmenu: S2(l2, ["prevent"]),
      ref_key: "rsvgContainerRef",
      ref: o
    }, [
      (_(), y("svg", {
        fill: "#000000",
        version: "1.1",
        id: "Layer_1",
        xmlns: "http://www.w3.org/2000/svg",
        "xmlns:xlink": "http://www.w3.org/1999/xlink",
        viewBox: `0 0 ${100 * O.value} 100`,
        "enable-background": "new 0 0 100 100",
        "xml:space": "preserve"
      }, [
        R("defs", null, [
          R("mask", H2, [
            R("rect", {
              x: "0",
              y: "0",
              style: { fill: "#adadad" },
              width: 100 * O.value * a2.value,
              height: "100"
            }, null, 8, x2)
          ])
        ]),
        R("g", {
          fill: r2.value,
          stroke: i2.value
        }, [
          (_(!0), y(B, null, A(O.value, (v) => (_(), y("g", {
            innerHTML: G.value,
            transform: `translate(${100 * (v - 1)}, 0)`,
            key: v
          }, null, 8, L2))), 128))
        ], 8, P2),
        R("g", {
          mask: "url(#bubbleKenseo)",
          fill: o2.value,
          stroke: s2.value
        }, [
          (_(!0), y(B, null, A(O.value, (v) => (_(), y("g", {
            innerHTML: G.value,
            transform: `translate(${100 * (v - 1)}, 0)`,
            key: v
          }, null, 8, D2))), 128))
        ], 8, N2)
      ], 8, E2))
    ], 544));
  }
}), e2 = (r, s) => {
  const l = r.__vccOpts || r;
  for (const [t, e] of s)
    l[t] = e;
  return l;
}, Z2 = /* @__PURE__ */ e2($2, [["__scopeId", "data-v-2371f225"]]), j2 = { class: "settings-container" }, F2 = /* @__PURE__ */ Y({
  __name: "RepeatableSvgWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(r) {
    const s = N("i18n"), l = (i) => s ? s.t(i) : i, t = K(r, "modelValue"), e = E({
      widgetSection: !1,
      storeSection: !1
    });
    return (i, a) => {
      const M = L("va-input"), I = L("va-color-input"), T = L("va-collapse");
      return _(), _2(T, {
        modelValue: e.value.widgetSection,
        "onUpdate:modelValue": a[7] || (a[7] = (o) => e.value.widgetSection = o),
        icon: "settings",
        header: l("svgRepeat:RepeatableSvgWidget.title")
      }, {
        default: f(() => [
          R("div", j2, [
            d(b(S), {
              modelValue: t.value.src,
              "onUpdate:modelValue": a[0] || (a[0] = (o) => t.value.src = o),
              label: l("svgRepeat:RepeatableSvgWidget.svgSrc")
            }, {
              default: f(({ value: o, change: p }) => [
                d(M, {
                  "model-value": o,
                  onInput: p,
                  label: l("svgRepeat:RepeatableSvgWidget.svgSrc")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            d(b(S), {
              modelValue: t.value.repetitions,
              "onUpdate:modelValue": a[1] || (a[1] = (o) => t.value.repetitions = o),
              label: l("svgRepeat:RepeatableSvgWidget.repeations")
            }, {
              default: f(({ value: o, change: p }) => [
                d(M, {
                  "model-value": o,
                  onInput: p,
                  label: l("svgRepeat:RepeatableSvgWidget.repeations")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            d(b(S), {
              modelValue: t.value.progress,
              "onUpdate:modelValue": a[2] || (a[2] = (o) => t.value.progress = o),
              label: l("svgRepeat:RepeatableSvgWidget.progress")
            }, {
              default: f(({ value: o, change: p }) => [
                d(M, {
                  "model-value": o,
                  onInput: p,
                  label: l("svgRepeat:RepeatableSvgWidget.progress")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            d(b(S), {
              modelValue: t.value.activeItemStyles.fill,
              "onUpdate:modelValue": a[3] || (a[3] = (o) => t.value.activeItemStyles.fill = o),
              label: l("svgRepeat:RepeatableSvgWidget.activeItemFill"),
              class: "color-input"
            }, {
              default: f(({ value: o, change: p }) => [
                d(I, {
                  "model-value": o,
                  onInput: p,
                  class: "width-100",
                  label: l("svgRepeat:RepeatableSvgWidget.activeItemFill")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            d(b(S), {
              modelValue: t.value.activeItemStyles.stroke,
              "onUpdate:modelValue": a[4] || (a[4] = (o) => t.value.activeItemStyles.stroke = o),
              label: l("svgRepeat:RepeatableSvgWidget.activeItemStroke"),
              class: "color-input"
            }, {
              default: f(({ value: o, change: p }) => [
                d(I, {
                  "model-value": o,
                  onInput: p,
                  class: "width-100",
                  label: l("svgRepeat:RepeatableSvgWidget.activeItemStroke")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            d(b(S), {
              modelValue: t.value.defaultItemStyles.fill,
              "onUpdate:modelValue": a[5] || (a[5] = (o) => t.value.defaultItemStyles.fill = o),
              label: l("svgRepeat:RepeatableSvgWidget.defaultItemFill"),
              class: "color-input"
            }, {
              default: f(({ value: o, change: p }) => [
                d(I, {
                  "model-value": o,
                  onInput: p,
                  class: "width-100",
                  label: l("svgRepeat:RepeatableSvgWidget.defaultItemFill")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            d(b(S), {
              modelValue: t.value.defaultItemStyles.stroke,
              "onUpdate:modelValue": a[6] || (a[6] = (o) => t.value.defaultItemStyles.stroke = o),
              label: l("svgRepeat:RepeatableSvgWidget.defaultItemStroke"),
              class: "color-input"
            }, {
              default: f(({ value: o, change: p }) => [
                d(I, {
                  "model-value": o,
                  onInput: p,
                  class: "width-100",
                  label: l("svgRepeat:RepeatableSvgWidget.defaultItemStroke")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "header"]);
    };
  }
}), U2 = /* @__PURE__ */ e2(F2, [["__scopeId", "data-v-20524639"]]), B2 = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M46.8924%2066.198C46.4124%2066.198%2045.9084%2066.162%2045.3804%2066.09C44.8644%2066.03%2044.3724%2065.934%2043.9044%2065.802C43.4364%2065.67%2043.0164%2065.514%2042.6444%2065.334C42.3204%2065.178%2042.0924%2064.974%2041.9604%2064.722C41.8284%2064.458%2041.7804%2064.182%2041.8164%2063.894C41.8524%2063.606%2041.9544%2063.354%2042.1224%2063.138C42.2904%2062.91%2042.5124%2062.76%2042.7884%2062.688C43.0644%2062.604%2043.3764%2062.64%2043.7244%2062.796C44.1804%2063.012%2044.6964%2063.18%2045.2724%2063.3C45.8484%2063.42%2046.3884%2063.48%2046.8924%2063.48C47.6844%2063.48%2048.2364%2063.378%2048.5484%2063.174C48.8724%2062.958%2049.0344%2062.694%2049.0344%2062.382C49.0344%2062.106%2048.9204%2061.884%2048.6924%2061.716C48.4764%2061.548%2048.0864%2061.404%2047.5224%2061.284L45.4164%2060.834C44.2644%2060.594%2043.4064%2060.174%2042.8424%2059.574C42.2784%2058.974%2041.9964%2058.2%2041.9964%2057.252C41.9964%2056.628%2042.1224%2056.064%2042.3744%2055.56C42.6384%2055.044%2043.0044%2054.606%2043.4724%2054.246C43.9524%2053.886%2044.5164%2053.61%2045.1644%2053.418C45.8244%2053.214%2046.5564%2053.112%2047.3604%2053.112C47.9844%2053.112%2048.6144%2053.184%2049.2504%2053.328C49.8984%2053.46%2050.4564%2053.664%2050.9244%2053.94C51.2004%2054.084%2051.3984%2054.282%2051.5184%2054.534C51.6384%2054.786%2051.6864%2055.05%2051.6624%2055.326C51.6384%2055.59%2051.5424%2055.824%2051.3744%2056.028C51.2184%2056.232%2051.0024%2056.37%2050.7264%2056.442C50.4624%2056.502%2050.1444%2056.454%2049.7724%2056.298C49.4244%2056.142%2049.0284%2056.028%2048.5844%2055.956C48.1524%2055.872%2047.7324%2055.83%2047.3244%2055.83C46.8804%2055.83%2046.5024%2055.884%2046.1904%2055.992C45.8784%2056.088%2045.6384%2056.232%2045.4704%2056.424C45.3144%2056.616%2045.2364%2056.838%2045.2364%2057.09C45.2364%2057.342%2045.3384%2057.558%2045.5424%2057.738C45.7584%2057.906%2046.1484%2058.05%2046.7124%2058.17L48.8004%2058.62C49.9644%2058.872%2050.8344%2059.286%2051.4104%2059.862C51.9864%2060.438%2052.2744%2061.188%2052.2744%2062.112C52.2744%2062.736%2052.1484%2063.3%2051.8964%2063.804C51.6444%2064.308%2051.2844%2064.74%2050.8164%2065.1C50.3484%2065.448%2049.7844%2065.718%2049.1244%2065.91C48.4644%2066.102%2047.7204%2066.198%2046.8924%2066.198Z'%20fill='%23606060'/%3e%3cpath%20d='M59.1989%2066.162C58.7429%2066.162%2058.3709%2066.066%2058.0829%2065.874C57.8069%2065.682%2057.5729%2065.376%2057.3809%2064.956L53.0249%2055.344C52.8329%2054.924%2052.7729%2054.546%2052.8449%2054.21C52.9169%2053.874%2053.0849%2053.616%2053.3489%2053.436C53.6129%2053.244%2053.9429%2053.148%2054.3389%2053.148C54.8309%2053.148%2055.1969%2053.256%2055.4369%2053.472C55.6889%2053.688%2055.9049%2054.006%2056.0849%2054.426L59.7569%2062.922H58.7489L62.4209%2054.408C62.6009%2053.988%2062.8169%2053.676%2063.0689%2053.472C63.3209%2053.256%2063.6749%2053.148%2064.1309%2053.148C64.5029%2053.148%2064.8149%2053.244%2065.0669%2053.436C65.3189%2053.616%2065.4749%2053.874%2065.5349%2054.21C65.6069%2054.546%2065.5469%2054.924%2065.3549%2055.344L60.9809%2064.956C60.8009%2065.376%2060.5729%2065.682%2060.2969%2065.874C60.0209%2066.066%2059.6549%2066.162%2059.1989%2066.162Z'%20fill='%23606060'/%3e%3cpath%20d='M73.1603%2066.198C71.7083%2066.198%2070.4723%2065.928%2069.4523%2065.388C68.4443%2064.848%2067.6763%2064.092%2067.1483%2063.12C66.6203%2062.148%2066.3563%2061.014%2066.3563%2059.718C66.3563%2058.71%2066.5123%2057.804%2066.8243%2057C67.1483%2056.184%2067.6103%2055.488%2068.2103%2054.912C68.8103%2054.324%2069.5423%2053.88%2070.4063%2053.58C71.2823%2053.268%2072.2723%2053.112%2073.3763%2053.112C73.9763%2053.112%2074.5883%2053.172%2075.2123%2053.292C75.8363%2053.4%2076.4483%2053.61%2077.0483%2053.922C77.3603%2054.066%2077.5703%2054.27%2077.6783%2054.534C77.7983%2054.786%2077.8343%2055.056%2077.7863%2055.344C77.7503%2055.62%2077.6483%2055.878%2077.4803%2056.118C77.3243%2056.346%2077.1083%2056.502%2076.8323%2056.586C76.5563%2056.658%2076.2443%2056.616%2075.8963%2056.46C75.5363%2056.292%2075.1463%2056.166%2074.7263%2056.082C74.3063%2055.986%2073.8623%2055.938%2073.3943%2055.938C72.5903%2055.938%2071.9183%2056.082%2071.3783%2056.37C70.8503%2056.658%2070.4543%2057.084%2070.1903%2057.648C69.9263%2058.212%2069.7943%2058.902%2069.7943%2059.718C69.7943%2060.942%2070.0943%2061.866%2070.6943%2062.49C71.2943%2063.114%2072.1823%2063.426%2073.3583%2063.426C73.7183%2063.426%2074.1083%2063.39%2074.5283%2063.318C74.9603%2063.246%2075.3923%2063.144%2075.8243%2063.012L75.2123%2064.254V61.176H73.9523C73.5443%2061.176%2073.2263%2061.074%2072.9983%2060.87C72.7823%2060.666%2072.6743%2060.378%2072.6743%2060.006C72.6743%2059.634%2072.7823%2059.352%2072.9983%2059.16C73.2263%2058.956%2073.5443%2058.854%2073.9523%2058.854H76.6163C77.0363%2058.854%2077.3543%2058.968%2077.5703%2059.196C77.7983%2059.412%2077.9123%2059.73%2077.9123%2060.15V64.128C77.9123%2064.488%2077.8343%2064.794%2077.6783%2065.046C77.5343%2065.298%2077.3003%2065.478%2076.9763%2065.586C76.4123%2065.778%2075.8003%2065.928%2075.1403%2066.036C74.4803%2066.144%2073.8203%2066.198%2073.1603%2066.198Z'%20fill='%23606060'/%3e%3cpath%20d='M30%2030C30%2025.8579%2033.3579%2022.5%2037.5%2022.5H82.5C86.6421%2022.5%2090%2025.8579%2090%2030V36C90%2036.8284%2090.6716%2037.5%2091.5%2037.5H94.5C95.7361%2037.5%2096.4416%2038.9111%2095.7%2039.9L87.45%2050.9C86.85%2051.7%2085.65%2051.7%2085.05%2050.9L76.8%2039.9C76.0584%2038.9111%2076.7639%2037.5%2078%2037.5H81.25C81.9404%2037.5%2082.5%2036.9404%2082.5%2036.25C82.5%2032.7982%2079.7018%2030%2076.25%2030H45C40.8579%2030%2037.5%2033.3579%2037.5%2037.5V43.5C37.5%2044.3284%2036.8284%2045%2036%2045H31.5C30.6716%2045%2030%2044.3284%2030%2043.5V30Z'%20fill='%23606060'/%3e%3cpath%20d='M90%2090C90%2094.1421%2086.6421%2097.5%2082.5%2097.5H37.5C33.3579%2097.5%2030%2094.1421%2030%2090V84C30%2083.1716%2029.3284%2082.5%2028.5%2082.5H25.5C24.2639%2082.5%2023.5584%2081.0889%2024.3%2080.1L32.55%2069.1C33.15%2068.3%2034.35%2068.3%2034.95%2069.1L43.2%2080.1C43.9416%2081.0889%2043.2361%2082.5%2042%2082.5H38.75C38.0596%2082.5%2037.5%2083.0596%2037.5%2083.75C37.5%2087.2018%2040.2982%2090%2043.75%2090H75C79.1421%2090%2082.5%2086.6421%2082.5%2082.5V76.5C82.5%2075.6716%2083.1716%2075%2084%2075H88.5C89.3284%2075%2090%2075.6716%2090%2076.5V90Z'%20fill='%23606060'/%3e%3c/svg%3e", A2 = [
  { name: "Repeatable SVG Clicked", type: "click", description: "Triggered when the Repeatable SVG widget is clicked", payloadType: q },
  { name: "Repeatable SVG Right Clicked", type: "right_click", description: "Triggered when the Repeatable SVG widget is right-clicked", payloadType: q }
];
var q2 = Object.defineProperty, z2 = Object.getOwnPropertyDescriptor, D = (r, s, l, t) => {
  for (var e = t > 1 ? void 0 : t ? z2(s, l) : s, i = r.length - 1, a; i >= 0; i--)
    (a = r[i]) && (e = (t ? a(s, l, e) : a(e)) || e);
  return t && e && q2(s, l, e), e;
}, z = (r, s) => (l, t) => s(l, t, r);
const h = "RepeatableSVGWidget";
let H = class {
  constructor(r, s) {
    this.events = r, this.actions = s;
  }
  type = h;
  component = Z2;
  settingsComponent = U2;
  supportedDSTypes = [];
  icon = B2;
  name = "RepeatableSVG";
  register() {
    this.events.registerWidget(h, A2), this.actions.registerWidgetType(h, P, "widget");
  }
  unregister() {
    this.events.unregisterWidget(h), this.actions.unregisterWidgetType(h);
  }
};
D([
  v2()
], H.prototype, "register", 1);
D([
  d2()
], H.prototype, "unregister", 1);
H = D([
  c2({
    service: [h2],
    properties: { "widget.type": h }
  }),
  z(0, U(p2)),
  z(1, U(u2))
], H);
export {
  H as RepeatableSVGWidgetProvider,
  Z2 as RepeatableSvgWidget,
  U2 as RepeatableSvgWidgetSettings
};
