(function(){var i="ui.vue.widget.svg.base",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".svg[data-v-7100b524]{width:100%;height:100%}.fallback[data-v-7100b524]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;color:#666;font-style:italic}.settings-container[data-v-932707bc]{display:flex;flex-direction:column;align-items:stretch;gap:1.5rem}.class-config-header[data-v-932707bc]{display:flex;justify-content:space-between;align-items:center}.class-config-header h3[data-v-932707bc]{margin:0;font-size:1rem;color:var(--va-text-primary)}.class-list[data-v-932707bc]{display:flex;flex-direction:column;gap:1rem}.class-item[data-v-932707bc]{border:1px solid var(--va-background-element);border-radius:8px;padding:1rem;background-color:var(--va-background-primary)}.class-item-header[data-v-932707bc]{display:flex;justify-content:space-between;align-items:center;margin-bottom:1rem;gap:1rem}.input-class-name[data-v-932707bc]{flex-grow:1}.class-item-properties[data-v-932707bc]{display:flex;flex-direction:column;gap:.75rem;padding-left:.5rem;border-left:2px solid var(--va-primary)}.width-100[data-v-932707bc]{width:100%}\n";})();
import { EVENT_ACTIONS_REGISTRY as d2, EVENT_REGISTRY_ID as p2, EVENT_ACTIONS_REGISTRY_ID as g2 } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as m2, deactivate as C2, component as f2, inject as K } from "@eclipse-daanse/tsm";
import { defineComponent as s2, mergeModels as _2, toRefs as h2, useModel as l2, inject as H, ref as T, getCurrentInstance as w2, onMounted as S2, onUnmounted as V2, watch as o2, computed as Q, createElementBlock as L, openBlock as G, Fragment as a2, createElementVNode as _, createCommentVNode as W2, mergeProps as y2, withModifiers as X, resolveComponent as D, createBlock as b2, withCtx as S, createVNode as m, unref as R, createTextVNode as I2, toDisplayString as k2, renderList as T2, markRaw as f } from "vue";
import { VariableWrapper as u } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { Reference as W, ModelClass as Z, Documentation as n2, Attribute as i2 } from "org.eclipse.daanse.board.app.lib.annotations";
import { useRoute as G2 } from "vue-router";
import { WidgetAction as r2, WidgetActionInterface as E2, Payload as e2 } from "org.eclipse.daanse.board.app.lib.events";
import { VariableInput as x } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as N2 } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: O2 } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var P2 = Object.defineProperty, $2 = Object.getOwnPropertyDescriptor, z = (a, s, l, t) => {
  for (var e = t > 1 ? void 0 : t ? $2(s, l) : s, r = a.length - 1, n; r >= 0; r--)
    (n = a[r]) && (e = (t ? n(s, l, e) : n(e)) || e);
  return t && e && P2(s, l, e), e;
};
let O = class {
  src = new u();
  classesConfig = [];
};
z([
  W("VariableWrapper")
], O.prototype, "src", 2);
z([
  W("SvgClassConfigMapEntry")
], O.prototype, "classesConfig", 2);
O = z([
  Z({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgSettings" })
], O);
var M2 = Object.defineProperty, D2 = Object.getOwnPropertyDescriptor, c2 = (a, s, l, t) => {
  for (var e = D2(s, l), r = a.length - 1, n; r >= 0; r--)
    (n = a[r]) && (e = n(s, l, e) || e);
  return e && M2(s, l, e), e;
};
class B extends E2 {
  zoom(s) {
    throw new Error("zoom not implemented");
  }
  resetZoom() {
    throw new Error("resetZoom not implemented");
  }
}
c2([
  r2({ eventType: "svg.zoom" })
], B.prototype, "zoom");
c2([
  r2({ eventType: "svg.resetZoom" })
], B.prototype, "resetZoom");
const R2 = ["innerHTML"], x2 = ["innerHTML"], L2 = /* @__PURE__ */ s2({
  __name: "SvgWidget",
  props: /* @__PURE__ */ _2({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(a, { expose: s }) {
    const l = a, { id: t } = h2(l), e = l2(a, "configv"), r = H(O2.TINY_EMITTER), n = H(d2), U = G2().params.pageid || "", o = T(1), d = T(null);
    class y extends B {
      zoom(c) {
        o.value = Math.max(0.1, Math.min(10, c));
        const C = d.value;
        C && (C.style.transform = `scale(${o.value})`, C.style.transformOrigin = "top left");
      }
      resetZoom() {
        o.value = 1;
        const c = d.value;
        c && (c.style.transform = "", c.style.transformOrigin = "");
      }
    }
    const b = new y();
    s(b);
    const I = () => {
      t?.value && r.emit("widget:SVGWidget:click", {
        type: "widget:SVGWidget:click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, P = () => {
      t?.value && r.emit("widget:SVGWidget:right_click", {
        type: "widget:SVGWidget:right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, v = T(""), p = (w2()?.type).__scopeId, w = new O(), Y = async (i) => {
      const c = i?.value || i;
      if (c && typeof c == "string") {
        console.log("Loading SVG from:", c);
        try {
          const g = await (await fetch(c)).text();
          v.value = g, console.log("SVG loaded successfully, length:", g.length);
        } catch (C) {
          console.error("Failed to load SVG:", C), v.value = "";
        }
      } else
        console.warn("No SVG src provided"), v.value = "";
    }, $ = (i, c, C) => {
      const g = i[c];
      if (g == null)
        i[c] = new u(C);
      else if (!(g instanceof u)) if (typeof g == "object" && "value" in g) {
        const M = new u(g.value);
        "variable" in g && (M.variable = g.variable), i[c] = M;
      } else
        i[c] = new u(g);
    };
    S2(async () => {
      t?.value && n.registerInstance(t.value, b, "SVGWidget", U), e.value && (Object.assign(e.value, { ...w, ...e.value }), console.log("SVG config:", e.value), console.log("SVG config.value.src:", e.value.src), console.log("SVG config.value (as any).settings:", e.value.settings), !e.value.src && e.value.settings?.src && (console.log("Using legacy settings structure"), e.value.src = e.value.settings.src, e.value.settings.classesConfig && (e.value.classesConfig = e.value.settings.classesConfig)), $(e.value, "src", ""), e.value.classesConfig && e.value.classesConfig.forEach((i) => {
        i.value && ($(i.value, "fill", ""), $(i.value, "stroke", ""), $(i.value, "strokeWidth", ""));
      }), await Y(e.value.src));
    }), V2(() => {
      t?.value && n.unregisterInstance(t.value);
    }), o2(
      () => e.value?.src?.value,
      (i) => {
        console.log("SVG src changed to:", i), Y(i);
      }
    );
    const v2 = Q(() => {
      let i = "";
      return e.value?.classesConfig && e.value.classesConfig.length > 0 && (i += "<style>", e.value.classesConfig.forEach((c) => {
        if (c.value?.className) {
          const C = c.value.fill?.value || "", g = c.value.stroke?.value || "", M = c.value.strokeWidth?.value || "";
          i += `[${p || ""}] .${c.value.className} {
                    stroke: ${g};
                    fill: ${C};
                    stroke-width: ${M};
                }`;
        }
      }), i += "</style>"), i;
    }), J = Q(() => v.value);
    return (i, c) => (G(), L(a2, null, [
      _("div", { innerHTML: v2.value }, null, 8, R2),
      _("div", y2(i.$attrs, {
        class: "svg",
        innerHTML: J.value,
        onClick: I,
        onContextmenu: X(P, ["prevent"]),
        ref_key: "svgContainerRef",
        ref: d
      }), null, 16, x2),
      !J.value && !e.value?.src?.value ? (G(), L("div", {
        key: 0,
        class: "fallback",
        onClick: I,
        onContextmenu: X(P, ["prevent"])
      }, " No SVG configured ", 32)) : W2("", !0)
    ], 64));
  }
}), u2 = (a, s) => {
  const l = a.__vccOpts || a;
  for (const [t, e] of s)
    l[t] = e;
  return l;
}, j2 = /* @__PURE__ */ u2(L2, [["__scopeId", "data-v-7100b524"]]);
var B2 = Object.defineProperty, U2 = Object.getOwnPropertyDescriptor, N = (a, s, l, t) => {
  for (var e = t > 1 ? void 0 : t ? U2(s, l) : s, r = a.length - 1, n; r >= 0; r--)
    (n = a[r]) && (e = (t ? n(s, l, e) : n(e)) || e);
  return t && e && B2(s, l, e), e;
};
let h = class {
  fill = new u();
  stroke = new u();
  strokeWidth = new u();
  className;
};
N([
  W("VariableWrapper")
], h.prototype, "fill", 2);
N([
  W("VariableWrapper")
], h.prototype, "stroke", 2);
N([
  W("VariableWrapper")
], h.prototype, "strokeWidth", 2);
N([
  n2("The CSS class name associated with this SVG styling configuration."),
  i2()
], h.prototype, "className", 2);
h = N([
  Z({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgConfigItem" })
], h);
var H2 = Object.defineProperty, Z2 = Object.getOwnPropertyDescriptor, A = (a, s, l, t) => {
  for (var e = t > 1 ? void 0 : t ? Z2(s, l) : s, r = a.length - 1, n; r >= 0; r--)
    (n = a[r]) && (e = (t ? n(s, l, e) : n(e)) || e);
  return t && e && H2(s, l, e), e;
};
let E = class {
  key;
  value = new h();
};
A([
  n2("The name of the SVG class."),
  i2()
], E.prototype, "key", 2);
A([
  W("SvgConfigItem")
], E.prototype, "value", 2);
E = A([
  Z({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgClassConfigMapEntry" })
], E);
const z2 = { class: "settings-container" }, A2 = { class: "class-config-header" }, q2 = { class: "class-list" }, F2 = { class: "class-item-header" }, Y2 = { class: "class-item-properties" }, J2 = /* @__PURE__ */ s2({
  __name: "SvgWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(a) {
    const s = H("i18n"), l = (o) => s ? s.t(o) : o, t = l2(a, "modelValue"), e = T({
      widgetSection: !1,
      storeSection: !1
    }), n = T(t.value && t.value.classesConfig ? t.value.classesConfig.map((o) => ({
      className: o.key || "",
      fill: f(o.value?.fill instanceof u ? o.value.fill : new u(o.value?.fill || "")),
      stroke: f(o.value?.stroke instanceof u ? o.value.stroke : new u(o.value?.stroke || "")),
      strokeWidth: f(o.value?.strokeWidth instanceof u ? o.value.strokeWidth : new u(o.value?.strokeWidth || ""))
    })) : [
      {
        className: "primary",
        fill: f(new u("#ff5733")),
        stroke: f(new u("#1e8449")),
        strokeWidth: f(new u("5"))
      }
    ]), F = () => {
      n.value.push({
        className: "",
        fill: f(new u("")),
        stroke: f(new u("")),
        strokeWidth: f(new u(""))
      });
    }, U = (o) => {
      n.value.splice(o, 1);
    };
    return o2(
      n,
      () => {
        t.value.classesConfig = n.value.filter((o) => o.className).map((o) => {
          const d = new E();
          return d.key = o.className, d.value = new h(), d.value.fill = o.fill, d.value.stroke = o.stroke, d.value.strokeWidth = o.strokeWidth, d.value.className = o.className, d;
        });
      },
      { deep: !0 }
    ), (o, d) => {
      const y = D("va-input"), b = D("va-button"), I = D("va-color-input"), P = D("va-collapse");
      return G(), b2(P, {
        modelValue: e.value.widgetSection,
        "onUpdate:modelValue": d[1] || (d[1] = (v) => e.value.widgetSection = v),
        icon: "settings",
        header: l("svgBase:SvgWidget.title")
      }, {
        default: S(() => [
          _("div", z2, [
            m(R(x), {
              modelValue: t.value.src,
              "onUpdate:modelValue": d[0] || (d[0] = (v) => t.value.src = v),
              label: l("svgBase:SvgWidget.svgSrc")
            }, {
              default: S(({ value: v, change: k }) => [
                m(y, {
                  "model-value": v,
                  onInput: k,
                  label: l("svgBase:SvgWidget.svgSrc")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            _("div", A2, [
              d[2] || (d[2] = _("h3", null, "Classes Configuration", -1)),
              m(b, {
                class: "add-button",
                onClick: F,
                size: "small"
              }, {
                default: S(() => [
                  I2(k2(l("svgBase:SvgWidget.addButton")), 1)
                ]),
                _: 1
              })
            ]),
            _("div", q2, [
              (G(!0), L(a2, null, T2(n.value, (v, k) => (G(), L("div", {
                key: k,
                class: "class-item"
              }, [
                _("div", F2, [
                  m(y, {
                    class: "input-class-name",
                    modelValue: v.className,
                    "onUpdate:modelValue": (p) => v.className = p,
                    label: "Class Name"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  m(b, {
                    preset: "plain",
                    icon: "delete",
                    color: "danger",
                    onClick: (p) => U(k),
                    size: "small"
                  }, null, 8, ["onClick"])
                ]),
                _("div", Y2, [
                  m(R(x), {
                    modelValue: v.fill,
                    "onUpdate:modelValue": (p) => v.fill = p,
                    label: "Fill Color"
                  }, {
                    default: S(({ value: p, change: w }) => [
                      m(I, {
                        "model-value": p,
                        label: l("svgBase:SvgWidget.fillColor"),
                        onInput: w,
                        class: "width-100"
                      }, null, 8, ["model-value", "label", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  m(R(x), {
                    modelValue: v.stroke,
                    "onUpdate:modelValue": (p) => v.stroke = p,
                    label: "Stroke Color"
                  }, {
                    default: S(({ value: p, change: w }) => [
                      m(I, {
                        "model-value": p,
                        label: l("svgBase:SvgWidget.strokeColor"),
                        onInput: w,
                        class: "width-100"
                      }, null, 8, ["model-value", "label", "onInput"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"]),
                  m(R(x), {
                    modelValue: v.strokeWidth,
                    "onUpdate:modelValue": (p) => v.strokeWidth = p,
                    label: "Stroke Width"
                  }, {
                    default: S(({ value: p, change: w }) => [
                      m(y, {
                        "model-value": p,
                        onInput: w,
                        label: l("svgBase:SvgWidget.strokeWidth")
                      }, null, 8, ["model-value", "onInput", "label"])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ]))), 128))
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "header"]);
    };
  }
}), K2 = /* @__PURE__ */ u2(J2, [["__scopeId", "data-v-932707bc"]]), Q2 = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M32.6925%2072.4125C31.6925%2072.4125%2030.6425%2072.3375%2029.5425%2072.1875C28.4675%2072.0625%2027.4425%2071.8625%2026.4675%2071.5875C25.4925%2071.3125%2024.6175%2070.9875%2023.8425%2070.6125C23.1675%2070.2875%2022.6925%2069.8625%2022.4175%2069.3375C22.1425%2068.7875%2022.0425%2068.2125%2022.1175%2067.6125C22.1925%2067.0125%2022.405%2066.4875%2022.755%2066.0375C23.105%2065.5625%2023.5675%2065.25%2024.1425%2065.1C24.7175%2064.925%2025.3675%2065%2026.0925%2065.325C27.0425%2065.775%2028.1175%2066.125%2029.3175%2066.375C30.5175%2066.625%2031.6425%2066.75%2032.6925%2066.75C34.3425%2066.75%2035.4925%2066.5375%2036.1425%2066.1125C36.8175%2065.6625%2037.155%2065.1125%2037.155%2064.4625C37.155%2063.8875%2036.9175%2063.425%2036.4425%2063.075C35.9925%2062.725%2035.18%2062.425%2034.005%2062.175L29.6175%2061.2375C27.2175%2060.7375%2025.43%2059.8625%2024.255%2058.6125C23.08%2057.3625%2022.4925%2055.75%2022.4925%2053.775C22.4925%2052.475%2022.755%2051.3%2023.28%2050.25C23.83%2049.175%2024.5925%2048.2625%2025.5675%2047.5125C26.5675%2046.7625%2027.7425%2046.1875%2029.0925%2045.7875C30.4675%2045.3625%2031.9925%2045.15%2033.6675%2045.15C34.9675%2045.15%2036.28%2045.3%2037.605%2045.6C38.955%2045.875%2040.1175%2046.3%2041.0925%2046.875C41.6675%2047.175%2042.08%2047.5875%2042.33%2048.1125C42.58%2048.6375%2042.68%2049.1875%2042.63%2049.7625C42.58%2050.3125%2042.38%2050.8%2042.03%2051.225C41.705%2051.65%2041.255%2051.9375%2040.68%2052.0875C40.13%2052.2125%2039.4675%2052.1125%2038.6925%2051.7875C37.9675%2051.4625%2037.1425%2051.225%2036.2175%2051.075C35.3175%2050.9%2034.4425%2050.8125%2033.5925%2050.8125C32.6675%2050.8125%2031.88%2050.925%2031.23%2051.15C30.58%2051.35%2030.08%2051.65%2029.73%2052.05C29.405%2052.45%2029.2425%2052.9125%2029.2425%2053.4375C29.2425%2053.9625%2029.455%2054.4125%2029.88%2054.7875C30.33%2055.1375%2031.1425%2055.4375%2032.3175%2055.6875L36.6675%2056.625C39.0925%2057.15%2040.905%2058.0125%2042.105%2059.2125C43.305%2060.4125%2043.905%2061.975%2043.905%2063.9C43.905%2065.2%2043.6425%2066.375%2043.1175%2067.425C42.5925%2068.475%2041.8425%2069.375%2040.8675%2070.125C39.8925%2070.85%2038.7175%2071.4125%2037.3425%2071.8125C35.9675%2072.2125%2034.4175%2072.4125%2032.6925%2072.4125Z'%20fill='%23606060'/%3e%3cpath%20d='M58.3311%2072.3375C57.3811%2072.3375%2056.6061%2072.1375%2056.0061%2071.7375C55.4311%2071.3375%2054.9436%2070.7%2054.5436%2069.825L45.4686%2049.8C45.0686%2048.925%2044.9436%2048.1375%2045.0936%2047.4375C45.2436%2046.7375%2045.5936%2046.2%2046.1436%2045.825C46.6936%2045.425%2047.3811%2045.225%2048.2061%2045.225C49.2311%2045.225%2049.9936%2045.45%2050.4936%2045.9C51.0186%2046.35%2051.4686%2047.0125%2051.8436%2047.8875L59.4936%2065.5875H57.3936L65.0436%2047.85C65.4186%2046.975%2065.8686%2046.325%2066.3936%2045.9C66.9186%2045.45%2067.6561%2045.225%2068.6061%2045.225C69.3811%2045.225%2070.0311%2045.425%2070.5561%2045.825C71.0811%2046.2%2071.4061%2046.7375%2071.5311%2047.4375C71.6811%2048.1375%2071.5561%2048.925%2071.1561%2049.8L62.0436%2069.825C61.6686%2070.7%2061.1936%2071.3375%2060.6186%2071.7375C60.0436%2072.1375%2059.2811%2072.3375%2058.3311%2072.3375Z'%20fill='%23606060'/%3e%3cpath%20d='M87.4173%2072.4125C84.3923%2072.4125%2081.8173%2071.85%2079.6923%2070.725C77.5923%2069.6%2075.9923%2068.025%2074.8923%2066C73.7923%2063.975%2073.2423%2061.6125%2073.2423%2058.9125C73.2423%2056.8125%2073.5673%2054.925%2074.2173%2053.25C74.8923%2051.55%2075.8548%2050.1%2077.1048%2048.9C78.3548%2047.675%2079.8798%2046.75%2081.6798%2046.125C83.5048%2045.475%2085.5673%2045.15%2087.8673%2045.15C89.1173%2045.15%2090.3923%2045.275%2091.6923%2045.525C92.9923%2045.75%2094.2673%2046.1875%2095.5173%2046.8375C96.1673%2047.1375%2096.6048%2047.5625%2096.8298%2048.1125C97.0798%2048.6375%2097.1548%2049.2%2097.0548%2049.8C96.9798%2050.375%2096.7673%2050.9125%2096.4173%2051.4125C96.0923%2051.8875%2095.6423%2052.2125%2095.0673%2052.3875C94.4923%2052.5375%2093.8423%2052.45%2093.1173%2052.125C92.3673%2051.775%2091.5548%2051.5125%2090.6798%2051.3375C89.8048%2051.1375%2088.8798%2051.0375%2087.9048%2051.0375C86.2298%2051.0375%2084.8298%2051.3375%2083.7048%2051.9375C82.6048%2052.5375%2081.7798%2053.425%2081.2298%2054.6C80.6798%2055.775%2080.4048%2057.2125%2080.4048%2058.9125C80.4048%2061.4625%2081.0298%2063.3875%2082.2798%2064.6875C83.5298%2065.9875%2085.3798%2066.6375%2087.8298%2066.6375C88.5798%2066.6375%2089.3923%2066.5625%2090.2673%2066.4125C91.1673%2066.2625%2092.0673%2066.05%2092.9673%2065.775L91.6923%2068.3625V61.95H89.0673C88.2173%2061.95%2087.5548%2061.7375%2087.0798%2061.3125C86.6298%2060.8875%2086.4048%2060.2875%2086.4048%2059.5125C86.4048%2058.7375%2086.6298%2058.15%2087.0798%2057.75C87.5548%2057.325%2088.2173%2057.1125%2089.0673%2057.1125H94.6173C95.4923%2057.1125%2096.1548%2057.35%2096.6048%2057.825C97.0798%2058.275%2097.3173%2058.9375%2097.3173%2059.8125V68.1C97.3173%2068.85%2097.1548%2069.4875%2096.8298%2070.0125C96.5298%2070.5375%2096.0423%2070.9125%2095.3673%2071.1375C94.1923%2071.5375%2092.9173%2071.85%2091.5423%2072.075C90.1673%2072.3%2088.7923%2072.4125%2087.4173%2072.4125Z'%20fill='%23606060'/%3e%3c/svg%3e", X2 = [
  { name: "SVG Clicked", type: "click", description: "Triggered when the SVG widget is clicked", payloadType: e2 },
  { name: "SVG Right Clicked", type: "right_click", description: "Triggered when the SVG widget is right-clicked", payloadType: e2 }
];
var ee = Object.defineProperty, te = Object.getOwnPropertyDescriptor, q = (a, s, l, t) => {
  for (var e = t > 1 ? void 0 : t ? te(s, l) : s, r = a.length - 1, n; r >= 0; r--)
    (n = a[r]) && (e = (t ? n(s, l, e) : n(e)) || e);
  return t && e && ee(s, l, e), e;
}, t2 = (a, s) => (l, t) => s(l, t, a);
const V = "SVGWidget";
let j = class {
  constructor(a, s) {
    this.events = a, this.actions = s;
  }
  type = V;
  component = j2;
  settingsComponent = K2;
  supportedDSTypes = [];
  icon = Q2;
  name = "SVG";
  register() {
    this.events.registerWidget(V, X2), this.actions.registerWidgetType(V, B, "widget");
  }
  unregister() {
    this.events.unregisterWidget(V), this.actions.unregisterWidgetType(V);
  }
};
q([
  m2()
], j.prototype, "register", 1);
q([
  C2()
], j.prototype, "unregister", 1);
j = q([
  f2({
    service: [N2],
    properties: { "widget.type": V }
  }),
  t2(0, K(p2)),
  t2(1, K(g2))
], j);
export {
  j as SVGWidgetProvider,
  j2 as SvgWidget,
  K2 as SvgWidgetSettings
};
