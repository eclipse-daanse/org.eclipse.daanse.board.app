(function(){var i="ui.vue.widget.progress",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".container[data-v-2f35b34c]{width:100%;height:100%;display:flex;justify-content:center;align-items:center}.grid-layout[data-v-2f35b34c]{display:grid;grid-template-columns:auto 1fr auto;grid-template-rows:1fr auto 1fr;gap:.5em;width:100%;height:100%;position:relative}.grid-layout.vertical[data-v-2f35b34c]{grid-template-columns:1fr auto 1fr;grid-template-rows:auto 1fr auto}.progress-bar[data-v-2f35b34c]{grid-column:2;grid-row:2;background:var(--v2eeb6fee);border-radius:var(--v75e282b9);justify-self:center;position:relative;display:flex;align-items:end;justify-content:start;height:var(--e8645acc);width:var(--v08112608)}.progress-percent[data-v-2f35b34c]{height:var(--v08e6ed4a);width:var(--v4a1f0289);background:var(--v0bade3dc);transition:var(--v4e602ba1);border-radius:var(--v75e282b9)}.progress-value[data-v-2f35b34c]{font-weight:600;white-space:nowrap;align-self:center;justify-self:center;color:var(--v1001132c);z-index:1000}.align-left[data-v-2f35b34c]{grid-column:1}.align-center[data-v-2f35b34c]{grid-column:2}.align-right[data-v-2f35b34c]{grid-column:3}.justify-top[data-v-2f35b34c]{grid-row:1}.justify-center[data-v-2f35b34c]{grid-row:2}.justify-bottom[data-v-2f35b34c]{grid-row:3}.settings-container[data-v-e12619d5]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.add-btn[data-v-e12619d5]{width:150px}.input[data-v-e12619d5]{width:100px}.loading[data-v-e12619d5]{height:100%;padding:50px;border-radius:4px;margin-bottom:1rem;background-color:var(--app-response-background)}\n";})();
import { EVENT_ACTIONS_REGISTRY as xe, EVENT_REGISTRY_ID as We, EVENT_ACTIONS_REGISTRY_ID as Ie } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as Te, deactivate as ke, component as Ee, inject as Y } from "@eclipse-daanse/tsm";
import { defineComponent as X, mergeModels as Re, useCssVars as Me, computed as c, toRefs as Ae, inject as j, onUnmounted as Se, useModel as ee, ref as $, watch as G, onMounted as Oe, createElementBlock as le, openBlock as N, withModifiers as De, createElementVNode as E, normalizeClass as H, toDisplayString as te, resolveComponent as T, createBlock as Fe, withCtx as b, createCommentVNode as Le, createVNode as n, unref as h, createTextVNode as Ue } from "vue";
import { useRoute as je } from "vue-router";
import { VariableWrapper as V, useDatasourceRepository as $e } from "org.eclipse.daanse.board.app.ui.vue.composables";
import q from "org.eclipse.daanse.board.app.lib.utils.helpers";
import { Reference as y, Documentation as O, Attribute as oe, Enum as ae, ModelClass as Ge } from "org.eclipse.daanse.board.app.lib.annotations";
import { WidgetAction as re, WidgetActionInterface as Be, Payload as K } from "org.eclipse.daanse.board.app.lib.events";
import { VariableInput as x } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID as Ze } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Ne } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var se = /* @__PURE__ */ ((s) => (s.LEFT = "left", s.CENTER = "center", s.RIGHT = "right", s))(se || {}), ne = /* @__PURE__ */ ((s) => (s.TOP = "top", s.CENTER = "center", s.BOTTOM = "bottom", s))(ne || {}), ze = Object.defineProperty, Je = Object.getOwnPropertyDescriptor, f = (s, i, o, d) => {
  for (var t = d > 1 ? void 0 : d ? Je(i, o) : i, l = s.length - 1, m; l >= 0; l--)
    (m = s[l]) && (t = (d ? m(i, o, t) : m(t)) || t);
  return d && t && ze(i, o, t), t;
};
let v = class {
  progress = new V();
  fillColor = new V();
  gradientColor = new V();
  backgroundColor = new V();
  isGradient = !1;
  isVertical = !1;
  rotation = new V();
  min = new V();
  max = new V();
  textColor = new V();
  barThickness = new V();
  borderRadius = new V();
  valueAlign = se.LEFT;
  valueJustify = ne.TOP;
};
f([
  y("VariableWrapper")
], v.prototype, "progress", 2);
f([
  y("VariableWrapper")
], v.prototype, "fillColor", 2);
f([
  y("VariableWrapper")
], v.prototype, "gradientColor", 2);
f([
  y("VariableWrapper")
], v.prototype, "backgroundColor", 2);
f([
  O("A flag indicating whether the progress bar should use a gradient color."),
  oe()
], v.prototype, "isGradient", 2);
f([
  O("A flag indicating whether the progress bar is oriented vertically."),
  oe()
], v.prototype, "isVertical", 2);
f([
  y("VariableWrapper")
], v.prototype, "rotation", 2);
f([
  y("VariableWrapper")
], v.prototype, "min", 2);
f([
  y("VariableWrapper")
], v.prototype, "max", 2);
f([
  y("VariableWrapper")
], v.prototype, "textColor", 2);
f([
  y("VariableWrapper")
], v.prototype, "barThickness", 2);
f([
  y("VariableWrapper")
], v.prototype, "borderRadius", 2);
f([
  O("The horizontal alignment of the value text."),
  ae("HorizontalAlign")
], v.prototype, "valueAlign", 2);
f([
  O("The vertical alignment of the value text."),
  ae("VerticalAlign")
], v.prototype, "valueJustify", 2);
v = f([
  Ge({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings" })
], v);
var Ye = Object.defineProperty, He = Object.getOwnPropertyDescriptor, ie = (s, i, o, d) => {
  for (var t = He(i, o), l = s.length - 1, m; l >= 0; l--)
    (m = s[l]) && (t = m(i, o, t) || t);
  return t && Ye(i, o, t), t;
};
class D extends Be {
  setValue(i) {
    throw new Error("setValue not implemented");
  }
  reset() {
    throw new Error("reset not implemented");
  }
}
ie([
  re({ eventType: "progress.setValue" })
], D.prototype, "setValue");
ie([
  re({ eventType: "progress.reset" })
], D.prototype, "reset");
const qe = /* @__PURE__ */ X({
  __name: "ProgressWidget",
  props: /* @__PURE__ */ Re({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(s, { expose: i }) {
    Me((p) => ({
      v2eeb6fee: u.value,
      v75e282b9: Ve.value,
      e8645acc: be.value,
      v08112608: Ce.value,
      v08e6ed4a: me.value,
      v4a1f0289: fe.value,
      v0bade3dc: ve.value,
      v4e602ba1: ge.value,
      v1001132c: _e.value
    }));
    const o = s, { datasourceId: d, id: t } = Ae(o), l = j(Ne.TINY_EMITTER), m = j(xe), P = je().params.pageid || "";
    class a extends D {
      setValue(g) {
        r.value?.progress && (r.value.progress.value = String(g));
      }
      setMax(g) {
        r.value?.max && (r.value.max.value = String(g));
      }
      reset() {
        r.value?.progress && (r.value.progress.value = "0");
      }
    }
    const C = new a();
    i(C), Se(() => {
      t?.value && m.unregisterInstance(t.value);
    });
    const w = () => {
      t?.value && l.emit("widget:ProgressWidget:click", {
        type: "widget:ProgressWidget:click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, I = () => {
      t?.value && l.emit("widget:ProgressWidget:right_click", {
        type: "widget:ProgressWidget:right_click",
        widgetId: t.value,
        payload: { widgetId: t.value, timestamp: Date.now() }
      });
    }, r = ee(s, "configv"), R = $(null), { update: F } = $e(d, "object", R);
    G(d, (p, g) => {
      F(p, g);
    });
    const L = {
      isGradient: !1,
      isVertical: !1,
      valueAlign: "center",
      valueJustify: "center"
    }, e = {
      progress: "",
      fillColor: "#00FF00",
      gradientColor: "",
      backgroundColor: "#D3D3D3",
      rotation: 90,
      min: 0,
      max: 100,
      textColor: "#000000",
      barThickness: "20px",
      borderRadius: "10px"
    };
    Oe(() => {
      t?.value && m.registerInstance(t.value, C, "ProgressWidget", P), r.value || (r.value = new v());
      for (const [p, g] of Object.entries(e)) {
        const _ = r.value[p];
        if (_ == null)
          r.value[p] = new V(g);
        else if (!(_ instanceof V)) if (typeof _ == "object" && "value" in _) {
          const M = new V(_.value);
          "variable" in _ && (M.variable = _.variable), r.value[p] = M;
        } else
          r.value[p] = new V(_);
      }
      for (const [p, g] of Object.entries(L))
        (r.value[p] === void 0 || r.value[p] === null) && (r.value[p] = g);
    });
    const u = c(() => r.value.backgroundColor?.value), de = c(() => {
      const p = r.value.rotation?.value;
      return parseFloat(p) || 0;
    }), pe = c(() => r.value.gradientColor?.value), ve = c(
      () => r.value.isGradient ? `linear-gradient(${de.value}deg, ${pe.value})` : r.value.fillColor?.value
    ), ge = c(
      () => r.value.isVertical ? "height .7s ease" : "width .7s ease"
    ), ce = c(() => parseFloat(r.value.min?.value) || 0), U = c(() => parseFloat(r.value.max?.value) || 100), me = c(
      () => r.value.isVertical && W.value !== null ? `${W.value / U.value * 100}%` : "35px"
    ), fe = c(
      () => !r.value.isVertical && W.value !== null ? `${W.value / U.value * 100}%` : "35px"
    ), Ce = c(
      () => r.value.isVertical && W.value !== null ? "35px" : "100%"
    ), be = c(
      () => !r.value.isVertical && W.value !== null ? "35px" : "100%"
    ), Ve = c(() => r.value.borderRadius?.value || "10px"), W = c(() => {
      const p = r.value.progress;
      if (!p) return null;
      const g = p.value;
      if (!g && g !== 0) return null;
      const { parts: _ } = q.widget.extractValuesAndFullObject(String(g));
      let M = "";
      for (const A of _) {
        const J = A.path || A.path === null ? q.widget.getValueByPath(R.value, A.path) : void 0;
        M += J !== void 0 ? J : A.text;
      }
      const z = parseFloat(M);
      if (isNaN(z)) return null;
      const we = ce.value, he = U.value;
      return Math.max(we, Math.min(he, z));
    }), Pe = c(() => {
      switch (r.value?.valueAlign) {
        case "left":
          return "align-left";
        case "right":
          return "align-right";
        default:
          return "align-center";
      }
    }), _e = c(() => r.value.textColor?.value || "#000000"), ye = c(() => {
      switch (r.value?.valueJustify) {
        case "top":
          return "justify-top";
        case "bottom":
          return "justify-bottom";
        default:
          return "justify-center";
      }
    });
    return (p, g) => (N(), le("div", {
      class: "container",
      onClick: w,
      onContextmenu: De(I, ["prevent"])
    }, [
      E("div", {
        class: H(["grid-layout", { vertical: r.value.isVertical }])
      }, [
        E("div", {
          class: H(["progress-value", [ye.value, Pe.value]])
        }, te(W.value !== null ? W.value : "n/a"), 3),
        g[0] || (g[0] = E("div", { class: "progress-bar" }, [
          E("div", { class: "progress-percent" })
        ], -1))
      ], 2)
    ], 32));
  }
}), ue = (s, i) => {
  const o = s.__vccOpts || s;
  for (const [d, t] of i)
    o[d] = t;
  return o;
}, Ke = /* @__PURE__ */ ue(qe, [["__scopeId", "data-v-2f35b34c"]]), Qe = { class: "settings-container" }, Xe = {
  key: 0,
  class: "mt-3"
}, el = /* @__PURE__ */ X({
  __name: "ProgressWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(s) {
    const i = j("i18n"), o = (P) => i ? i.t(P) : P, d = $({
      widgetSection: !1,
      storeSection: !1
    }), t = $([]), l = ee(s, "modelValue"), m = () => t.value.push({
      color: "#" + ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-6),
      location: Math.floor(Math.random() * 101)
    });
    G(
      [() => l.value.fillColor, () => t.value],
      ([P, a]) => {
        const C = P?.value || P;
        if (l.value.isGradient) {
          const w = a.length < 1 ? `${C} 0%, #FAFAFA 85%` : a.map((I) => `${I.color} ${I.location}%`).join(", ");
          l.value.gradientColor && "value" in l.value.gradientColor ? l.value.gradientColor.value = w : l.value.gradientColor = w;
        }
      },
      { deep: !0 }
    ), G(
      () => l.value.isGradient,
      (P) => {
        const a = l.value.fillColor?.value || l.value.fillColor;
        P ? t.value.push(
          { color: `${a}`, location: 0 },
          { color: "#FAFAFA", location: 85 }
        ) : t.value = [];
      }
    );
    const Z = (P) => {
      t.value = t.value.filter((a, C) => C !== P);
    };
    return (P, a) => {
      const C = T("va-input"), w = T("va-color-input"), I = T("va-select"), r = T("va-checkbox"), R = T("va-button"), F = T("va-data-table"), L = T("va-collapse");
      return N(), Fe(L, {
        modelValue: d.value.widgetSection,
        "onUpdate:modelValue": a[13] || (a[13] = (e) => d.value.widgetSection = e),
        header: o("progress:ProgressWidget.title"),
        icon: "settings"
      }, {
        default: b(() => [
          E("div", Qe, [
            n(h(x), {
              modelValue: l.value.progress,
              "onUpdate:modelValue": a[0] || (a[0] = (e) => l.value.progress = e),
              label: o("progress:ProgressWidget.progress")
            }, {
              default: b(({ value: e, change: u }) => [
                n(C, {
                  "model-value": e,
                  onInput: u,
                  label: o("progress:ProgressWidget.progress")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(h(x), {
              modelValue: l.value.min,
              "onUpdate:modelValue": a[1] || (a[1] = (e) => l.value.min = e),
              label: o("progress:ProgressWidget.min")
            }, {
              default: b(({ value: e, change: u }) => [
                n(C, {
                  "model-value": e,
                  onInput: u,
                  type: "number",
                  label: o("progress:ProgressWidget.min")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(h(x), {
              modelValue: l.value.max,
              "onUpdate:modelValue": a[2] || (a[2] = (e) => l.value.max = e),
              label: o("progress:ProgressWidget.max")
            }, {
              default: b(({ value: e, change: u }) => [
                n(C, {
                  "model-value": e,
                  onInput: u,
                  type: "number",
                  label: o("progress:ProgressWidget.max")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(h(x), {
              modelValue: l.value.fillColor,
              "onUpdate:modelValue": a[3] || (a[3] = (e) => l.value.fillColor = e),
              label: o("progress:ProgressWidget.fillColor")
            }, {
              default: b(({ value: e, change: u }) => [
                n(w, {
                  "model-value": e,
                  onInput: u,
                  label: o("progress:ProgressWidget.fillColor")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(h(x), {
              modelValue: l.value.backgroundColor,
              "onUpdate:modelValue": a[4] || (a[4] = (e) => l.value.backgroundColor = e),
              label: o("progress:ProgressWidget.backgroundColor")
            }, {
              default: b(({ value: e, change: u }) => [
                n(w, {
                  "model-value": e,
                  onInput: u,
                  label: o("progress:ProgressWidget.backgroundColor")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(h(x), {
              modelValue: l.value.textColor,
              "onUpdate:modelValue": a[5] || (a[5] = (e) => l.value.textColor = e),
              label: o("progress:ProgressWidget.textColor")
            }, {
              default: b(({ value: e, change: u }) => [
                n(w, {
                  "model-value": e,
                  onInput: u,
                  label: o("progress:ProgressWidget.textColor")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(h(x), {
              modelValue: l.value.barThickness,
              "onUpdate:modelValue": a[6] || (a[6] = (e) => l.value.barThickness = e),
              label: o("progress:ProgressWidget.barThickness")
            }, {
              default: b(({ value: e, change: u }) => [
                n(C, {
                  "model-value": e,
                  onInput: u,
                  label: o("progress:ProgressWidget.barThickness"),
                  placeholder: "z.B. 20px"
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(h(x), {
              modelValue: l.value.borderRadius,
              "onUpdate:modelValue": a[7] || (a[7] = (e) => l.value.borderRadius = e),
              label: o("progress:ProgressWidget.borderRadius")
            }, {
              default: b(({ value: e, change: u }) => [
                n(C, {
                  "model-value": e,
                  onInput: u,
                  label: o("progress:ProgressWidget.borderRadius"),
                  placeholder: "z.B. 10px"
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(I, {
              modelValue: l.value.valueAlign,
              "onUpdate:modelValue": a[8] || (a[8] = (e) => l.value.valueAlign = e),
              label: o("progress:ProgressWidget.valueAlign"),
              options: [
                { text: "alignStart", value: "left" },
                { text: "alignCenter", value: "center" },
                { text: "alignEnd", value: "right" }
              ],
              "value-by": "value",
              "text-by": "text"
            }, null, 8, ["modelValue", "label"]),
            n(I, {
              modelValue: l.value.valueJustify,
              "onUpdate:modelValue": a[9] || (a[9] = (e) => l.value.valueJustify = e),
              label: o("progress:ProgressWidget.valueAlign"),
              options: [
                { text: "alignStart", value: "top" },
                { text: "alignCenter", value: "center" },
                { text: "alignEnd", value: "bottom" }
              ],
              "value-by": "value",
              "text-by": "text"
            }, null, 8, ["modelValue", "label"]),
            n(r, {
              modelValue: l.value.isVertical,
              "onUpdate:modelValue": a[10] || (a[10] = (e) => l.value.isVertical = e),
              label: o("progress:ProgressWidget.isVertical")
            }, null, 8, ["modelValue", "label"]),
            n(r, {
              modelValue: l.value.isGradient,
              "onUpdate:modelValue": a[11] || (a[11] = (e) => l.value.isGradient = e),
              label: o("progress:ProgressWidget.isGradient")
            }, null, 8, ["modelValue", "label"])
          ]),
          l.value.isGradient ? (N(), le("div", Xe, [
            n(R, {
              class: "add-btn",
              onClick: m
            }, {
              default: b(() => [
                Ue(te(o("progress:ProgressWidget.addButton")), 1)
              ]),
              _: 1
            }),
            E("div", null, [
              n(h(x), {
                modelValue: l.value.rotation,
                "onUpdate:modelValue": a[12] || (a[12] = (e) => l.value.rotation = e),
                label: o("progress:ProgressWidget.rotation")
              }, {
                default: b(({ value: e, change: u }) => [
                  n(C, {
                    class: "mt-2",
                    "model-value": e,
                    onInput: u,
                    label: o("progress:ProgressWidget.rotation")
                  }, null, 8, ["model-value", "onInput", "label"])
                ]),
                _: 1
              }, 8, ["modelValue", "label"]),
              n(F, {
                class: "table-config",
                items: t.value,
                columns: [
                  { key: "color" },
                  { key: "location" },
                  { key: "actions" }
                ]
              }, {
                "cell(color)": b(({ rowIndex: e }) => [
                  n(w, {
                    class: "input-color",
                    modelValue: t.value[e].color,
                    "onUpdate:modelValue": (u) => t.value[e].color = u
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "cell(location)": b(({ rowIndex: e }) => [
                  n(C, {
                    class: "input",
                    modelValue: t.value[e].location,
                    "onUpdate:modelValue": (u) => t.value[e].location = u
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "cell(actions)": b(({ rowIndex: e }) => [
                  n(R, {
                    icon: "delete",
                    color: "danger",
                    onClick: (u) => Z(e)
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              }, 8, ["items"])
            ])
          ])) : Le("", !0)
        ]),
        _: 1
      }, 8, ["modelValue", "header"]);
    };
  }
}), ll = /* @__PURE__ */ ue(el, [["__scopeId", "data-v-e12619d5"]]), tl = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M72.8493%2032.89C69.3438%2031.2286%2065.5539%2030.2648%2061.6902%2030.0469C60.8631%2030.0002%2060.1953%2029.3283%2060.2006%2028.4999L60.2291%2024C60.2344%2023.1716%2060.9105%2022.5011%2061.7381%2022.5395C66.6971%2022.7695%2071.5664%2023.9822%2076.0614%2026.1127C81.0087%2028.4575%2085.3826%2031.8571%2088.8758%2036.0728C92.3689%2040.2885%2094.8967%2045.2179%2096.2814%2050.5147C97.6661%2055.8115%2097.8742%2061.3473%2096.891%2066.7332C95.9079%2072.119%2093.7574%2077.2243%2090.5906%2081.6903C87.4238%2086.1563%2083.3175%2089.8748%2078.5602%2092.5844C73.8029%2095.294%2068.51%2096.9291%2063.0533%2097.3748C58.0955%2097.7797%2053.1118%2097.1939%2048.3913%2095.657C47.6035%2095.4005%2047.2079%2094.5344%2047.4957%2093.7576L49.0588%2089.5378C49.3465%2088.761%2050.2086%2088.3683%2050.9989%2088.6169C54.6904%2089.778%2058.5764%2090.2155%2062.4428%2089.8997C66.8081%2089.5431%2071.0424%2088.2351%2074.8483%2086.0674C78.6541%2083.8997%2081.9392%2080.9249%2084.4726%2077.3521C87.0061%2073.7793%2088.7265%2069.6951%2089.513%2065.3864C90.2995%2061.0777%2090.133%2056.6491%2089.0252%2052.4116C87.9175%2048.1741%2085.8953%2044.2306%2083.1007%2040.8581C80.3062%2037.4856%2076.8071%2034.7658%2072.8493%2032.89Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M54.3529%2029.0093C54.5013%2029.8243%2053.9599%2030.6016%2053.1533%2030.7906C49.8368%2031.5678%2046.6767%2032.9043%2043.8089%2034.7425C43.1115%2035.1895%2042.1766%2035.0366%2041.6953%2034.3624L39.0806%2030.6999C38.5992%2030.0257%2038.754%2029.0862%2039.4469%2028.6322C43.2192%2026.1606%2047.4066%2024.3897%2051.8076%2023.4047C52.616%2023.2238%2053.3979%2023.7671%2053.5464%2024.5822L54.3529%2029.0093Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M36.5688%2038.9443C37.185%2039.498%2037.2324%2040.4441%2036.7101%2041.0872C34.5626%2043.7313%2032.8811%2046.7221%2031.7377%2049.9308C31.4597%2050.7112%2030.6267%2051.1623%2029.8334%2050.9236L25.5243%2049.6269C24.731%2049.3882%2024.2785%2048.5505%2024.5487%2047.7673C26.0199%2043.5042%2028.2481%2039.5412%2031.1261%2036.069C31.6548%2035.4312%2032.6057%2035.3825%2033.2219%2035.9363L36.5688%2038.9443Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.5877%2057.6524C29.4138%2057.7142%2030.0295%2058.4341%2030.0091%2059.2623C29.9252%2062.6676%2030.4219%2066.0625%2031.4779%2069.3011C31.7347%2070.0887%2031.3511%2070.9548%2030.5773%2071.2507L26.374%2072.8578C25.6003%2073.1536%2024.7301%2072.767%2024.4654%2071.982C23.0245%2067.7085%2022.3663%2063.2099%2022.5225%2058.7028C22.5512%2057.8748%2023.2741%2057.2552%2024.1002%2057.3169L28.5877%2057.6524Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M33.3378%2076.7775C34.039%2076.3362%2034.962%2076.5494%2035.4377%2077.2276C37.3939%2080.0162%2039.8108%2082.4515%2042.5846%2084.4287C43.2592%2084.9095%2043.4654%2085.8341%2043.0188%2086.5319L40.5933%2090.3222C40.1467%2091.02%2039.2171%2091.2262%2038.5378%2090.7521C34.8394%2088.1713%2031.6367%2084.9443%2029.0839%2081.2265C28.615%2080.5435%2028.8281%2079.6155%2029.5293%2079.1743L33.3378%2076.7775Z'%20fill='%23606060'/%3e%3cpath%20d='M62.7264%2071.7358C62.7256%2071.7369%2062.7253%2071.7382%2062.7255%2071.7394V71.7394V71.7394C62.7257%2071.7407%2062.7254%2071.742%2062.7246%2071.7431L59.2097%2076.6014C58.7241%2077.2726%2057.7863%2077.4231%2057.1152%2076.9375L41.3164%2065.5073C40.6452%2065.0217%2040.4947%2064.084%2040.9803%2063.4128L43.6181%2059.7669C44.1036%2059.0957%2045.0414%2058.9453%2045.7126%2059.4309L55.4326%2066.4631C56.1038%2066.9487%2057.0416%2066.7983%2057.5271%2066.1271L73.3534%2044.2521C73.839%2043.5809%2074.7767%2043.4304%2075.4479%2043.916L79.0938%2046.5537C79.765%2047.0393%2079.9154%2047.9771%2079.4298%2048.6483L62.7264%2071.7358Z'%20fill='%23606060'/%3e%3c/svg%3e", ol = [
  { name: "Progress Clicked", type: "click", description: "Triggered when the progress widget is clicked", payloadType: K },
  { name: "Progress Right Clicked", type: "right_click", description: "Triggered when the progress widget is right-clicked", payloadType: K }
];
var al = Object.defineProperty, rl = Object.getOwnPropertyDescriptor, B = (s, i, o, d) => {
  for (var t = d > 1 ? void 0 : d ? rl(i, o) : i, l = s.length - 1, m; l >= 0; l--)
    (m = s[l]) && (t = (d ? m(i, o, t) : m(t)) || t);
  return d && t && al(i, o, t), t;
}, Q = (s, i) => (o, d) => i(o, d, s);
const k = "ProgressWidget";
let S = class {
  constructor(s, i) {
    this.events = s, this.actions = i;
  }
  type = k;
  name = "Progress";
  icon = tl;
  supportedDSTypes = [];
  component = Ke;
  settingsComponent = ll;
  register() {
    this.events.registerWidget(k, ol), this.actions.registerWidgetType(k, D, "widget");
  }
  unregister() {
    this.events.unregisterWidget(k), this.actions.unregisterWidgetType(k);
  }
};
B([
  Te()
], S.prototype, "register", 1);
B([
  ke()
], S.prototype, "unregister", 1);
S = B([
  Ee({
    service: [Ze],
    properties: { "widget.type": k }
  }),
  Q(0, Y(We)),
  Q(1, Y(Ie))
], S);
export {
  Ke as ProgressWidget,
  S as ProgressWidgetProvider,
  ll as ProgressWidgetSettings
};
