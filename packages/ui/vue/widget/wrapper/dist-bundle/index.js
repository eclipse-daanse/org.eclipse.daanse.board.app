(function(){var i="ui.vue.widget.wrapper",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".absolute[data-v-81a272a9]{position:absolute}.wrapper-container[data-v-81a272a9]{background-color:var(--v6a72535e);border-color:var(--v776491f8);border-width:var(--v0d088b26);border-style:solid;width:100%;height:100%;box-Shadow:var(--v17af03c3);border-radius:var(--v407e3708);backdrop-filter:blur(var(--blur-amount))}.sub[data-v-81a272a9]{border-radius:var(--v407e3708);padding:var(--bd9ee602)}.wrapper-container:hover .hover[data-v-81a272a9]{display:block}.wrapper-container .hover[data-v-81a272a9]{display:none}.hightz[data-v-81a272a9]{z-index:3000}.settings-container[data-v-affddfef]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.pad_bottom[data-v-affddfef]{padding-top:30px;padding-bottom:10px}\n";})();
import { defineComponent as q, useCssVars as se, computed as D, inject as J, ref as x, onUnmounted as oe, resolveComponent as F, createElementBlock as k, openBlock as G, normalizeStyle as H, createCommentVNode as $, createVNode as n, toDisplayString as y, Fragment as le, createElementVNode as m, withCtx as h, createBlock as Q, resolveDynamicComponent as re, createTextVNode as M, useModel as ie, unref as l } from "vue";
import { identifier as ne } from "org.eclipse.daanse.board.app.lib.api.widget";
import { VariableWrapper as o } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { VariableInput as S } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { BasicEFactory as ue, BasicEPackage as de, BasicEClass as ce, BasicEReference as w, EPackageRegistry as b, BasicEObject as Ee } from "@emfts/core";
const Re = {
  key: 0,
  class: "hover absolute top-[25px] right-0 flex justify-end z-3000 hightz"
}, he = { key: 2 }, ge = { style: { "text-align": "center", padding: "1rem" } }, Ce = { style: { display: "flex", "justify-content": "flex-end", gap: "0.5rem" } }, Te = /* @__PURE__ */ q({
  __name: "WidgetWrapper",
  props: {
    widget: {},
    editEnabled: { type: Boolean }
  },
  emits: ["openSettings", "removeWidget"],
  setup(u, { emit: e }) {
    se((E) => ({
      v6a72535e: V.value,
      v776491f8: s.value,
      v0d088b26: d.value + "px",
      v17af03c3: v.value,
      v407e3708: g.value + "px",
      bd9ee602: Z.value + "px"
    }));
    const a = e, r = J(ne), A = x(0), B = r.onChange?.(() => {
      A.value++;
    });
    oe(() => B?.());
    const p = D(() => (A.value, r.getWidget(u.widget.type))), C = D(() => (A.value, r.getAllWidgets())), T = x(!1), i = x(null), O = (E) => {
      i.value = E, T.value = !0;
    }, N = () => {
      i.value && a("removeWidget", i.value), T.value = !1, i.value = null;
    }, L = (E) => {
      a("openSettings", E);
    }, _ = {
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
    Object.keys(_).forEach((E) => {
      const R = u.widget.wrapperConfig[E];
      if (R == null)
        u.widget.wrapperConfig[E] = new o(_[E]);
      else if (typeof R != "object")
        u.widget.wrapperConfig[E] = new o(R);
      else if (!(R instanceof o))
        if ("value" in R) {
          const f = new o(R.value);
          "variable" in R && (f.variable = R.variable), u.widget.wrapperConfig[E] = f;
        } else
          u.widget.wrapperConfig[E] = new o(_[E]);
    });
    const v = D(() => {
      let E = "";
      const R = u.widget.wrapperConfig.shadowTransparence?.value;
      W(R) && (E = R.toString(16));
      let f = (u.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      return f.length == 3 && (f = f[0] + f[0] + f[1] + f[1] + f[2] + f[2]), `${u.widget.wrapperConfig.shadowX?.value}px ${u.widget.wrapperConfig.shadowY?.value}px ${u.widget.wrapperConfig.shadowBlur?.value}px #${f}${E}`;
    }), V = D(() => {
      let E = 255;
      const R = u.widget.wrapperConfig.backgroundColorTransparence?.value;
      W(R) && (E = R);
      const f = u.widget.wrapperConfig.transparency?.value;
      W(f) && (E = Math.round(E * (f / 255)));
      const I = u.widget.wrapperConfig.backgroundColor?.value;
      if (!I) return "var(--color-pane)";
      let P = I.replace("#", "");
      P.length == 3 && (P = P[0] + P[0] + P[1] + P[1] + P[2] + P[2]);
      const z = E < 255 ? E.toString(16).padStart(2, "0") : "";
      return `#${P}${z}`;
    }), s = D(() => u.widget.wrapperConfig.borderColor?.value || "var(--color-divider)"), d = D(() => u.widget.wrapperConfig.borderSize?.value || 0), g = D(() => u.widget.wrapperConfig.borderRadius?.value || 0), X = D(() => {
      const E = u.widget.wrapperConfig.transparency?.value;
      return W(E) ? E / 255 : 1;
    }), te = D(() => u.widget.wrapperConfig.titleFontSize?.value || 16), K = D(() => u.widget.wrapperConfig.titleColor?.value || "var(--color-divider)");
    D(() => {
      let E = (u.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      E.length == 3 && (E = E[0] + E[0] + E[1] + E[1] + E[2] + E[2]);
      const R = u.widget.wrapperConfig.shadowTransparence?.value;
      return E + (W(R) ? R.toString(16) : "");
    });
    function W(E) {
      const R = parseInt(E);
      return isNaN(R) ? !1 : R >= 0 && R <= 255;
    }
    const ae = D(() => {
      const E = u.widget.wrapperConfig.blur?.value;
      return W(E) ? E : "";
    }), Z = D(() => {
      console.log(u.widget.wrapperConfig.padding);
      const E = parseInt(u.widget.wrapperConfig.padding?.value);
      return isNaN(E) ? 0 : E;
    });
    return (E, R) => {
      const f = F("VaScrollContainer"), I = F("VaButton"), P = F("VaIcon"), z = F("VaModal");
      return G(), k("div", {
        class: "flex relative flex-col w-full h-full wrapper-container",
        style: H({ "--blur-amount": ae.value + "px", "--title-color": K.value })
      }, [
        u.widget.wrapperConfig.title?.value ? (G(), k("div", {
          key: 0,
          class: "font-semibold capitalize",
          style: H({
            fontSize: te.value + "px",
            color: K.value,
            padding: Z.value + "px",
            paddingBottom: 0,
            opacity: X.value
          })
        }, y(u.widget.wrapperConfig.title.value), 5)) : $("", !0),
        p.value ? (G(), k(le, { key: 1 }, [
          m("div", {
            class: "w-full h-full box-border cursor-pointer overflow-hidden sub",
            style: H({ position: "relative", opacity: X.value })
          }, [
            n(f, {
              color: "var(--color-outline)",
              vertical: "",
              horizontal: ""
            }, {
              default: h(() => [
                (G(), Q(re(C.value[u.widget.type].component), {
                  config: u.widget.config,
                  configv: u.widget.config,
                  "onUpdate:configv": R[0] || (R[0] = (U) => u.widget.config = U),
                  datasourceId: u.widget.config.datasourceId,
                  id: u.widget.uid || u.widget.id,
                  class: "widget_component"
                }, null, 40, ["config", "configv", "datasourceId", "id"]))
              ]),
              _: 1
            })
          ], 4),
          u.editEnabled ? (G(), k("div", Re, [
            n(I, {
              class: "control-button",
              onClick: R[1] || (R[1] = (U) => L(u.widget.uid)),
              icon: "settings",
              size: "small"
            }),
            n(I, {
              class: "control-button",
              onClick: R[2] || (R[2] = (U) => O(u.widget.uid)),
              icon: "close",
              color: "danger",
              size: "small"
            })
          ])) : $("", !0)
        ], 64)) : (G(), k("div", he, [
          m("p", null, "Widget type " + y(u.widget.type) + " is not registered.", 1)
        ])),
        n(z, {
          modelValue: T.value,
          "onUpdate:modelValue": R[5] || (R[5] = (U) => T.value = U),
          size: "small",
          "hide-default-actions": "",
          "overlay-opacity": "0.3"
        }, {
          footer: h(() => [
            m("div", Ce, [
              n(I, {
                preset: "secondary",
                onClick: R[3] || (R[3] = (U) => {
                  T.value = !1, i.value = null;
                })
              }, {
                default: h(() => [...R[8] || (R[8] = [
                  M(" Abbrechen ", -1)
                ])]),
                _: 1
              }),
              n(I, {
                color: "danger",
                icon: "delete",
                onClick: R[4] || (R[4] = (U) => N())
              }, {
                default: h(() => [...R[9] || (R[9] = [
                  M(" Löschen ", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: h(() => [
            m("div", ge, [
              n(P, {
                name: "warning",
                color: "danger",
                size: "2rem"
              }),
              R[6] || (R[6] = m("h5", { style: { margin: "0.5rem 0" } }, "Widget löschen", -1)),
              R[7] || (R[7] = m("p", null, "Möchtest du dieses Widget wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.", -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 4);
    };
  }
}), ee = (u, e) => {
  const a = u.__vccOpts || u;
  for (const [r, A] of e)
    a[r] = A;
  return a;
}, fe = /* @__PURE__ */ ee(Te, [["__scopeId", "data-v-81a272a9"]]), we = { class: "settings-container" }, be = { class: "px-2" }, Ne = { class: "px-2" }, _e = { class: "px-2" }, Se = { class: "px-2" }, Ae = { class: "px-2" }, Oe = { class: "px-2" }, pe = /* @__PURE__ */ q({
  __name: "WidgetWrapperSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(u) {
    const e = ie(u, "modelValue"), a = J("i18n"), r = a ? (T) => a.t("wrapper:" + T) : (T) => T, A = x(!1), B = x(!1), p = D(() => B.value ? "#ffffff" : ""), C = (T, i) => {
      console.log("onValueChange", i), T({
        target: {
          value: i
        }
      });
    };
    return (T, i) => {
      const O = F("VaDivider"), N = F("va-input"), L = F("va-color-input"), _ = F("VaCounter"), v = F("VaSlider"), V = F("va-collapse");
      return G(), Q(V, {
        modelValue: A.value,
        "onUpdate:modelValue": i[16] || (i[16] = (s) => A.value = s),
        header: "Widget wrapper settings",
        icon: "style"
      }, {
        default: h(() => [
          m("div", we, [
            n(O, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: h(() => [
                m("span", be, y(l(r)("WidgetWrapper.title")), 1)
              ]),
              _: 1
            }),
            n(l(S), {
              modelValue: e.value.title,
              "onUpdate:modelValue": i[0] || (i[0] = (s) => e.value.title = s),
              label: l(r)("WidgetWrapper.label")
            }, {
              default: h(({ value: s, change: d }) => [
                n(N, {
                  "model-value": s,
                  onInput: d,
                  label: l(r)("WidgetWrapper.label")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(l(S), {
              modelValue: e.value.titleFontSize,
              "onUpdate:modelValue": i[1] || (i[1] = (s) => e.value.titleFontSize = s),
              label: l(r)("WidgetWrapper.fontSize")
            }, {
              default: h(({ value: s, change: d }) => [
                n(N, {
                  "model-value": s,
                  onInput: d,
                  label: l(r)("WidgetWrapper.fontSize")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(l(S), {
              modelValue: e.value.titleColor,
              "onUpdate:modelValue": i[2] || (i[2] = (s) => e.value.titleColor = s),
              label: l(r)("WidgetWrapper.fontColor")
            }, {
              default: h(({ value: s, change: d }) => [
                n(L, {
                  "model-value": s,
                  onInput: d,
                  label: l(r)("WidgetWrapper.fontColor")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(O, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: h(() => [
                m("span", Ne, y(l(r)("WidgetWrapper.padding")), 1)
              ]),
              _: 1
            }),
            n(l(S), {
              modelValue: e.value.padding,
              "onUpdate:modelValue": i[3] || (i[3] = (s) => e.value.padding = s),
              label: l(r)("WidgetWrapper.padding")
            }, {
              default: h(({ value: s, change: d }) => [
                n(v, {
                  labelColor: p.value,
                  stateful: "",
                  "model-value": s,
                  onChange: (g) => C(d, g),
                  label: l(r)("WidgetWrapper.padding"),
                  min: 0,
                  max: 20
                }, {
                  append: h(() => [
                    n(_, {
                      "model-value": s,
                      "onUpdate:modelValue": (g) => C(d, g),
                      min: 0,
                      max: 20,
                      class: "w-[110px]"
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["labelColor", "model-value", "onChange", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(O, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: h(() => [
                m("span", _e, y(l(r)("WidgetWrapper.background")), 1)
              ]),
              _: 1
            }),
            n(l(S), {
              modelValue: e.value.backgroundColor,
              "onUpdate:modelValue": i[4] || (i[4] = (s) => e.value.backgroundColor = s),
              label: l(r)("WidgetWrapper.backgroundColor")
            }, {
              default: h(({ value: s, change: d }) => [
                n(L, {
                  autofocus: "",
                  label: l(r)("WidgetWrapper.backgroundColor"),
                  class: "color-fill",
                  "model-value": s,
                  onInput: d
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(l(S), {
              modelValue: e.value.backgroundColorTransparence,
              "onUpdate:modelValue": i[5] || (i[5] = (s) => e.value.backgroundColorTransparence = s),
              label: l(r)("WidgetWrapper.backgroundColorTransparence")
            }, {
              default: h(({ value: s, change: d }) => [
                n(v, {
                  "model-value": s,
                  stateful: "",
                  onChange: (g) => C(d, g),
                  label: l(r)("WidgetWrapper.backgroundColorTrancparency"),
                  labelColor: p.value,
                  min: 0,
                  max: 255
                }, {
                  append: h(() => [
                    n(_, {
                      "model-value": s,
                      "onUpdate:modelValue": (g) => C(d, g),
                      min: 0,
                      max: 256,
                      class: "w-[110px]"
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["model-value", "onChange", "label", "labelColor"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(l(S), {
              modelValue: e.value.blur,
              "onUpdate:modelValue": i[6] || (i[6] = (s) => e.value.blur = s),
              label: l(r)("WidgetWrapper.blur")
            }, {
              default: h(({ value: s, change: d }) => [
                n(v, {
                  "model-value": s,
                  stateful: "",
                  onChange: (g) => C(d, g),
                  label: l(r)("WidgetWrapper.blur"),
                  labelColor: p.value,
                  min: 0,
                  max: 10
                }, {
                  append: h(() => [
                    n(_, {
                      "model-value": s,
                      "onUpdate:modelValue": (g) => C(d, g),
                      min: 0,
                      max: 10,
                      class: "w-[110px]"
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["model-value", "onChange", "label", "labelColor"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(O, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: h(() => [
                m("span", Se, y(l(r)("WidgetWrapper.border")), 1)
              ]),
              _: 1
            }),
            n(l(S), {
              modelValue: e.value.borderSize,
              "onUpdate:modelValue": i[7] || (i[7] = (s) => e.value.borderSize = s),
              label: l(r)("WidgetWrapper.borderSize")
            }, {
              default: h(({ value: s, change: d }) => [
                n(N, {
                  "model-value": s,
                  onInput: d,
                  label: l(r)("WidgetWrapper.borderSize")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(l(S), {
              modelValue: e.value.borderColor,
              "onUpdate:modelValue": i[8] || (i[8] = (s) => e.value.borderColor = s),
              label: l(r)("WidgetWrapper.borderColor")
            }, {
              default: h(({ value: s, change: d }) => [
                n(L, {
                  autofocus: "",
                  label: l(r)("WidgetWrapper.borderColor"),
                  class: "color-fill",
                  "model-value": s,
                  onInput: d
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(l(S), {
              modelValue: e.value.borderRadius,
              "onUpdate:modelValue": i[9] || (i[9] = (s) => e.value.borderRadius = s),
              label: l(r)("WidgetWrapper.borderRadius")
            }, {
              default: h(({ value: s, change: d }) => [
                n(N, {
                  "model-value": s,
                  onInput: d,
                  label: l(r)("WidgetWrapper.borderRadius")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(O, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: h(() => [
                m("span", Ae, y(l(r)("WidgetWrapper.shadow")), 1)
              ]),
              _: 1
            }),
            n(l(S), {
              modelValue: e.value.shadowX,
              "onUpdate:modelValue": i[10] || (i[10] = (s) => e.value.shadowX = s),
              label: l(r)("WidgetWrapper.shadowX")
            }, {
              default: h(({ value: s, change: d }) => [
                n(N, {
                  "model-value": s,
                  onInput: d,
                  label: l(r)("WidgetWrapper.shadowX")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(l(S), {
              modelValue: e.value.shadowY,
              "onUpdate:modelValue": i[11] || (i[11] = (s) => e.value.shadowY = s),
              label: l(r)("WidgetWrapper.shadowY")
            }, {
              default: h(({ value: s, change: d }) => [
                n(N, {
                  "model-value": s,
                  onInput: d,
                  label: l(r)("WidgetWrapper.shadowY")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(l(S), {
              modelValue: e.value.shadowBlur,
              "onUpdate:modelValue": i[12] || (i[12] = (s) => e.value.shadowBlur = s),
              label: l(r)("WidgetWrapper.shadowBlur")
            }, {
              default: h(({ value: s, change: d }) => [
                n(N, {
                  "model-value": s,
                  onInput: d,
                  label: l(r)("WidgetWrapper.shadowBlur")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(l(S), {
              modelValue: e.value.shadowColor,
              "onUpdate:modelValue": i[13] || (i[13] = (s) => e.value.shadowColor = s),
              label: l(r)("WidgetWrapper.shadowColor")
            }, {
              default: h(({ value: s, change: d }) => [
                n(L, {
                  autofocus: "",
                  label: l(r)("WidgetWrapper.shadowColor"),
                  class: "color-fill",
                  "model-value": s,
                  onInput: d
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(l(S), {
              modelValue: e.value.shadowTransparence,
              "onUpdate:modelValue": i[14] || (i[14] = (s) => e.value.shadowTransparence = s),
              label: l(r)("WidgetWrapper.shadowTransparence")
            }, {
              default: h(({ value: s, change: d }) => [
                n(v, {
                  labelColor: p.value,
                  stateful: "",
                  "model-value": s,
                  onChange: (g) => C(d, g),
                  label: l(r)("WidgetWrapper.shadowTransparence"),
                  min: 0,
                  max: 255
                }, {
                  append: h(() => [
                    n(_, {
                      "model-value": s,
                      "onUpdate:modelValue": (g) => C(d, g),
                      min: 0,
                      max: 255,
                      class: "w-[110px]"
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["labelColor", "model-value", "onChange", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(O, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: h(() => [
                m("span", Oe, y(l(r)("WidgetWrapper.transparence")), 1)
              ]),
              _: 1
            }),
            n(l(S), {
              modelValue: e.value.transparency,
              "onUpdate:modelValue": i[15] || (i[15] = (s) => e.value.transparency = s),
              label: l(r)("WidgetWrapper.transparency")
            }, {
              default: h(({ value: s, change: d }) => [
                n(v, {
                  labelColor: p.value,
                  stateful: "",
                  "model-value": s,
                  onChange: (g) => C(d, g),
                  label: l(r)("WidgetWrapper.transparency"),
                  min: 0,
                  max: 255,
                  step: 1
                }, {
                  append: h(() => [
                    n(_, {
                      "model-value": s,
                      "onUpdate:modelValue": (g) => C(d, g),
                      min: 0,
                      step: 1,
                      max: 255,
                      class: "w-[110px]"
                    }, null, 8, ["model-value", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["labelColor", "model-value", "onChange", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), ve = /* @__PURE__ */ ee(pe, [["__scopeId", "data-v-affddfef"]]);
class Y extends ue {
  static get eINSTANCE() {
    return this._instance || (this._instance = new Y()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(c.eINSTANCE);
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
class c extends de {
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
    return this._instance || (this._instance = new c(), this._instance.init()), this._instance;
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
    super(), this.setName(c.eNAME), this.setNsURI(c.eNS_URI), this.setNsPrefix(c.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    this.setEFactoryInstance(Y.eINSTANCE);
    const e = new ce();
    e.setName("WrapperSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), c.Literals.WRAPPER_SETTINGS = e;
    const a = new w();
    a.setContainment(!1), a.setName("title"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), c.Literals.WRAPPER_SETTINGS__TITLE = a;
    const r = new w();
    r.setContainment(!1), r.setName("backgroundColor"), r.setLowerBound(0), r.setUpperBound(1), e.getEStructuralFeatures().push(r), c.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR = r;
    const A = new w();
    A.setContainment(!1), A.setName("backgroundColorTransparence"), A.setLowerBound(0), A.setUpperBound(1), e.getEStructuralFeatures().push(A), c.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR_TRANSPARENCE = A;
    const B = new w();
    B.setContainment(!1), B.setName("titleColor"), B.setLowerBound(0), B.setUpperBound(1), e.getEStructuralFeatures().push(B), c.Literals.WRAPPER_SETTINGS__TITLE_COLOR = B;
    const p = new w();
    p.setContainment(!1), p.setName("padding"), p.setLowerBound(0), p.setUpperBound(1), e.getEStructuralFeatures().push(p), c.Literals.WRAPPER_SETTINGS__PADDING = p;
    const C = new w();
    C.setContainment(!1), C.setName("titleFontSize"), C.setLowerBound(0), C.setUpperBound(1), e.getEStructuralFeatures().push(C), c.Literals.WRAPPER_SETTINGS__TITLE_FONT_SIZE = C;
    const T = new w();
    T.setContainment(!1), T.setName("borderSize"), T.setLowerBound(0), T.setUpperBound(1), e.getEStructuralFeatures().push(T), c.Literals.WRAPPER_SETTINGS__BORDER_SIZE = T;
    const i = new w();
    i.setContainment(!1), i.setName("borderColor"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), c.Literals.WRAPPER_SETTINGS__BORDER_COLOR = i;
    const O = new w();
    O.setContainment(!1), O.setName("borderRadius"), O.setLowerBound(0), O.setUpperBound(1), e.getEStructuralFeatures().push(O), c.Literals.WRAPPER_SETTINGS__BORDER_RADIUS = O;
    const N = new w();
    N.setContainment(!1), N.setName("blur"), N.setLowerBound(0), N.setUpperBound(1), e.getEStructuralFeatures().push(N), c.Literals.WRAPPER_SETTINGS__BLUR = N;
    const L = new w();
    L.setContainment(!1), L.setName("fullscreen"), L.setLowerBound(0), L.setUpperBound(1), e.getEStructuralFeatures().push(L), c.Literals.WRAPPER_SETTINGS__FULLSCREEN = L;
    const _ = new w();
    _.setContainment(!1), _.setName("shadowColor"), _.setLowerBound(0), _.setUpperBound(1), e.getEStructuralFeatures().push(_), c.Literals.WRAPPER_SETTINGS__SHADOW_COLOR = _;
    const v = new w();
    v.setContainment(!1), v.setName("shadowBlur"), v.setLowerBound(0), v.setUpperBound(1), e.getEStructuralFeatures().push(v), c.Literals.WRAPPER_SETTINGS__SHADOW_BLUR = v;
    const V = new w();
    V.setContainment(!1), V.setName("shadowX"), V.setLowerBound(0), V.setUpperBound(1), e.getEStructuralFeatures().push(V), c.Literals.WRAPPER_SETTINGS__SHADOW_X = V;
    const s = new w();
    s.setContainment(!1), s.setName("shadowY"), s.setLowerBound(0), s.setUpperBound(1), e.getEStructuralFeatures().push(s), c.Literals.WRAPPER_SETTINGS__SHADOW_Y = s;
    const d = new w();
    d.setContainment(!1), d.setName("shadowTransparence"), d.setLowerBound(0), d.setUpperBound(1), e.getEStructuralFeatures().push(d), c.Literals.WRAPPER_SETTINGS__SHADOW_TRANSPARENCE = d;
    const g = new w();
    g.setContainment(!1), g.setName("transparency"), g.setLowerBound(0), g.setUpperBound(1), e.getEStructuralFeatures().push(g), c.Literals.WRAPPER_SETTINGS__TRANSPARENCY = g, c.Literals.WRAPPER_SETTINGS__TITLE.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR_TRANSPARENCE.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__TITLE_COLOR.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__PADDING.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__TITLE_FONT_SIZE.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BORDER_SIZE.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BORDER_COLOR.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BORDER_RADIUS.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BLUR.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__FULLSCREEN.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__SHADOW_COLOR.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__SHADOW_BLUR.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__SHADOW_X.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__SHADOW_Y.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__SHADOW_TRANSPARENCE.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__TRANSPARENCY.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class t extends Ee {
  constructor() {
    super(...arguments), this._title = new o(), this._backgroundColor = new o(), this._backgroundColorTransparence = new o(), this._titleColor = new o(), this._padding = new o(), this._titleFontSize = new o(), this._borderSize = new o(), this._borderColor = new o(), this._borderRadius = new o(), this._blur = new o(), this._fullscreen = new o(), this._shadowColor = new o(), this._shadowBlur = new o(), this._shadowX = new o(), this._shadowY = new o(), this._shadowTransparence = new o(), this._transparency = new o();
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
    return c.Literals.WRAPPER_SETTINGS;
  }
  // Getters and Setters
  get title() {
    return this._title;
  }
  set title(e) {
    const a = this._title;
    this._title = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.TITLE),
      getOldValue: () => a,
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
    const a = this._backgroundColor;
    this._backgroundColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BACKGROUND_COLOR),
      getOldValue: () => a,
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
    const a = this._backgroundColorTransparence;
    this._backgroundColorTransparence = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BACKGROUND_COLOR_TRANSPARENCE),
      getOldValue: () => a,
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
    const a = this._titleColor;
    this._titleColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.TITLE_COLOR),
      getOldValue: () => a,
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
    const a = this._padding;
    this._padding = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.PADDING),
      getOldValue: () => a,
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
    const a = this._titleFontSize;
    this._titleFontSize = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.TITLE_FONT_SIZE),
      getOldValue: () => a,
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
    const a = this._borderSize;
    this._borderSize = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BORDER_SIZE),
      getOldValue: () => a,
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
    const a = this._borderColor;
    this._borderColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BORDER_COLOR),
      getOldValue: () => a,
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
    const a = this._borderRadius;
    this._borderRadius = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BORDER_RADIUS),
      getOldValue: () => a,
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
    const a = this._blur;
    this._blur = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BLUR),
      getOldValue: () => a,
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
    const a = this._fullscreen;
    this._fullscreen = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.FULLSCREEN),
      getOldValue: () => a,
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
    const a = this._shadowColor;
    this._shadowColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.SHADOW_COLOR),
      getOldValue: () => a,
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
    const a = this._shadowBlur;
    this._shadowBlur = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.SHADOW_BLUR),
      getOldValue: () => a,
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
    const a = this._shadowX;
    this._shadowX = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.SHADOW_X),
      getOldValue: () => a,
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
    const a = this._shadowY;
    this._shadowY = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.SHADOW_Y),
      getOldValue: () => a,
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
    const a = this._shadowTransparence;
    this._shadowTransparence = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.SHADOW_TRANSPARENCE),
      getOldValue: () => a,
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
    const a = this._transparency;
    this._transparency = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.TRANSPARENCY),
      getOldValue: () => a,
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
  eSet(e, a) {
    switch (this.eClass().getFeatureID(e)) {
      case t.TITLE:
        this.title = a, super.eSet(e, a);
        break;
      case t.BACKGROUND_COLOR:
        this.backgroundColor = a, super.eSet(e, a);
        break;
      case t.BACKGROUND_COLOR_TRANSPARENCE:
        this.backgroundColorTransparence = a, super.eSet(e, a);
        break;
      case t.TITLE_COLOR:
        this.titleColor = a, super.eSet(e, a);
        break;
      case t.PADDING:
        this.padding = a, super.eSet(e, a);
        break;
      case t.TITLE_FONT_SIZE:
        this.titleFontSize = a, super.eSet(e, a);
        break;
      case t.BORDER_SIZE:
        this.borderSize = a, super.eSet(e, a);
        break;
      case t.BORDER_COLOR:
        this.borderColor = a, super.eSet(e, a);
        break;
      case t.BORDER_RADIUS:
        this.borderRadius = a, super.eSet(e, a);
        break;
      case t.BLUR:
        this.blur = a, super.eSet(e, a);
        break;
      case t.FULLSCREEN:
        this.fullscreen = a, super.eSet(e, a);
        break;
      case t.SHADOW_COLOR:
        this.shadowColor = a, super.eSet(e, a);
        break;
      case t.SHADOW_BLUR:
        this.shadowBlur = a, super.eSet(e, a);
        break;
      case t.SHADOW_X:
        this.shadowX = a, super.eSet(e, a);
        break;
      case t.SHADOW_Y:
        this.shadowY = a, super.eSet(e, a);
        break;
      case t.SHADOW_TRANSPARENCE:
        this.shadowTransparence = a, super.eSet(e, a);
        break;
      case t.TRANSPARENCY:
        this.transparency = a, super.eSet(e, a);
        break;
      default:
        super.eSet(e, a);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case t.TITLE:
        return this._title !== new o();
      case t.BACKGROUND_COLOR:
        return this._backgroundColor !== new o();
      case t.BACKGROUND_COLOR_TRANSPARENCE:
        return this._backgroundColorTransparence !== new o();
      case t.TITLE_COLOR:
        return this._titleColor !== new o();
      case t.PADDING:
        return this._padding !== new o();
      case t.TITLE_FONT_SIZE:
        return this._titleFontSize !== new o();
      case t.BORDER_SIZE:
        return this._borderSize !== new o();
      case t.BORDER_COLOR:
        return this._borderColor !== new o();
      case t.BORDER_RADIUS:
        return this._borderRadius !== new o();
      case t.BLUR:
        return this._blur !== new o();
      case t.FULLSCREEN:
        return this._fullscreen !== new o();
      case t.SHADOW_COLOR:
        return this._shadowColor !== new o();
      case t.SHADOW_BLUR:
        return this._shadowBlur !== new o();
      case t.SHADOW_X:
        return this._shadowX !== new o();
      case t.SHADOW_Y:
        return this._shadowY !== new o();
      case t.SHADOW_TRANSPARENCE:
        return this._shadowTransparence !== new o();
      case t.TRANSPARENCY:
        return this._transparency !== new o();
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
        this._title = new o();
        return;
      case t.BACKGROUND_COLOR:
        this._backgroundColor = new o();
        return;
      case t.BACKGROUND_COLOR_TRANSPARENCE:
        this._backgroundColorTransparence = new o();
        return;
      case t.TITLE_COLOR:
        this._titleColor = new o();
        return;
      case t.PADDING:
        this._padding = new o();
        return;
      case t.TITLE_FONT_SIZE:
        this._titleFontSize = new o();
        return;
      case t.BORDER_SIZE:
        this._borderSize = new o();
        return;
      case t.BORDER_COLOR:
        this._borderColor = new o();
        return;
      case t.BORDER_RADIUS:
        this._borderRadius = new o();
        return;
      case t.BLUR:
        this._blur = new o();
        return;
      case t.FULLSCREEN:
        this._fullscreen = new o();
        return;
      case t.SHADOW_COLOR:
        this._shadowColor = new o();
        return;
      case t.SHADOW_BLUR:
        this._shadowBlur = new o();
        return;
      case t.SHADOW_X:
        this._shadowX = new o();
        return;
      case t.SHADOW_Y:
        this._shadowY = new o();
        return;
      case t.SHADOW_TRANSPARENCE:
        this._shadowTransparence = new o();
        return;
      case t.TRANSPARENCY:
        this._transparency = new o();
        return;
      default:
        super.eUnset(e);
    }
  }
}
c.eINSTANCE;
const De = new t(), Le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WidgetWrapper: fe,
  WidgetWrapperSettings: ve,
  WrapperSettingsImpl: t,
  WrapperSettingsPackage: c,
  defaultConfig: De
}, Symbol.toStringTag, { value: "Module" })), j = "org.eclipse.daanse.board.app.ui.vue.widget.wrapper", me = "0.0.1-next.1";
async function Ue(u) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${j}: tsm runtime is not initialized`);
  e.register(j, Le, me, "ui.vue.widget.wrapper"), await void 0;
}
async function ye(u) {
  await void 0;
}
export {
  fe as WidgetWrapper,
  ve as WidgetWrapperSettings,
  t as WrapperSettingsImpl,
  c as WrapperSettingsPackage,
  Ue as activate,
  ye as deactivate,
  De as defaultConfig
};
