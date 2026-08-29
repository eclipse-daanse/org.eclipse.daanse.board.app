(function(){var i="ui.vue.widget.wrapper",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".absolute[data-v-81a272a9]{position:absolute}.wrapper-container[data-v-81a272a9]{background-color:var(--v6a72535e);border-color:var(--v776491f8);border-width:var(--v0d088b26);border-style:solid;width:100%;height:100%;box-Shadow:var(--v17af03c3);border-radius:var(--v407e3708);backdrop-filter:blur(var(--blur-amount))}.sub[data-v-81a272a9]{border-radius:var(--v407e3708);padding:var(--bd9ee602)}.wrapper-container:hover .hover[data-v-81a272a9]{display:block}.wrapper-container .hover[data-v-81a272a9]{display:none}.hightz[data-v-81a272a9]{z-index:3000}.settings-container[data-v-affddfef]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.pad_bottom[data-v-affddfef]{padding-top:30px;padding-bottom:10px}\n";})();
import { defineComponent as j, useCssVars as oe, computed as v, inject as q, ref as x, onUnmounted as se, resolveComponent as F, createElementBlock as W, openBlock as p, normalizeStyle as H, createCommentVNode as $, createVNode as u, toDisplayString as y, Fragment as le, createElementVNode as m, withCtx as h, createBlock as J, resolveDynamicComponent as ae, createTextVNode as k, useModel as re, unref as r } from "vue";
import { identifier as ne } from "org.eclipse.daanse.board.app.lib.api.widget";
import { VariableWrapper as a } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { VariableInput as N } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { BasicEFactory as ie, BasicEPackage as ue, BasicEClass as de, BasicEReference as _, BasicEObject as Re } from "@emfts/core";
const ce = {
  key: 0,
  class: "hover absolute top-[25px] right-0 flex justify-end z-3000 hightz"
}, Ee = { key: 2 }, he = { style: { "text-align": "center", padding: "1rem" } }, Ce = { style: { display: "flex", "justify-content": "flex-end", gap: "0.5rem" } }, we = /* @__PURE__ */ j({
  __name: "WidgetWrapper",
  props: {
    widget: {},
    editEnabled: { type: Boolean }
  },
  emits: ["openSettings", "removeWidget"],
  setup(d, { emit: e }) {
    oe((c) => ({
      v6a72535e: V.value,
      v776491f8: s.value,
      v0d088b26: R.value + "px",
      v17af03c3: L.value,
      v407e3708: C.value + "px",
      bd9ee602: Z.value + "px"
    }));
    const o = e, n = q(ne), b = x(0), P = n.onChange?.(() => {
      b.value++;
    });
    se(() => P?.());
    const O = v(() => (b.value, n.getWidget(d.widget.type))), w = v(() => (b.value, n.getAllWidgets())), T = x(!1), i = x(null), S = (c) => {
      i.value = c, T.value = !0;
    }, g = () => {
      i.value && o("removeWidget", i.value), T.value = !1, i.value = null;
    }, D = (c) => {
      o("openSettings", c);
    }, A = {
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
    Object.keys(A).forEach((c) => {
      const E = d.widget.wrapperConfig[c];
      if (E == null)
        d.widget.wrapperConfig[c] = new a(A[c]);
      else if (typeof E != "object")
        d.widget.wrapperConfig[c] = new a(E);
      else if (!(E instanceof a))
        if ("value" in E) {
          const f = new a(E.value);
          "variable" in E && (f.variable = E.variable), d.widget.wrapperConfig[c] = f;
        } else
          d.widget.wrapperConfig[c] = new a(A[c]);
    });
    const L = v(() => {
      let c = "";
      const E = d.widget.wrapperConfig.shadowTransparence?.value;
      G(E) && (c = E.toString(16));
      let f = (d.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      return f.length == 3 && (f = f[0] + f[0] + f[1] + f[1] + f[2] + f[2]), `${d.widget.wrapperConfig.shadowX?.value}px ${d.widget.wrapperConfig.shadowY?.value}px ${d.widget.wrapperConfig.shadowBlur?.value}px #${f}${c}`;
    }), V = v(() => {
      let c = 255;
      const E = d.widget.wrapperConfig.backgroundColorTransparence?.value;
      G(E) && (c = E);
      const f = d.widget.wrapperConfig.transparency?.value;
      G(f) && (c = Math.round(c * (f / 255)));
      const I = d.widget.wrapperConfig.backgroundColor?.value;
      if (!I) return "var(--color-pane)";
      let B = I.replace("#", "");
      B.length == 3 && (B = B[0] + B[0] + B[1] + B[1] + B[2] + B[2]);
      const z = c < 255 ? c.toString(16).padStart(2, "0") : "";
      return `#${B}${z}`;
    }), s = v(() => d.widget.wrapperConfig.borderColor?.value || "var(--color-divider)"), R = v(() => d.widget.wrapperConfig.borderSize?.value || 0), C = v(() => d.widget.wrapperConfig.borderRadius?.value || 0), X = v(() => {
      const c = d.widget.wrapperConfig.transparency?.value;
      return G(c) ? c / 255 : 1;
    }), ee = v(() => d.widget.wrapperConfig.titleFontSize?.value || 16), K = v(() => d.widget.wrapperConfig.titleColor?.value || "var(--color-divider)");
    v(() => {
      let c = (d.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      c.length == 3 && (c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2]);
      const E = d.widget.wrapperConfig.shadowTransparence?.value;
      return c + (G(E) ? E.toString(16) : "");
    });
    function G(c) {
      const E = parseInt(c);
      return isNaN(E) ? !1 : E >= 0 && E <= 255;
    }
    const te = v(() => {
      const c = d.widget.wrapperConfig.blur?.value;
      return G(c) ? c : "";
    }), Z = v(() => {
      console.log(d.widget.wrapperConfig.padding);
      const c = parseInt(d.widget.wrapperConfig.padding?.value);
      return isNaN(c) ? 0 : c;
    });
    return (c, E) => {
      const f = F("VaScrollContainer"), I = F("VaButton"), B = F("VaIcon"), z = F("VaModal");
      return p(), W("div", {
        class: "flex relative flex-col w-full h-full wrapper-container",
        style: H({ "--blur-amount": te.value + "px", "--title-color": K.value })
      }, [
        d.widget.wrapperConfig.title?.value ? (p(), W("div", {
          key: 0,
          class: "font-semibold capitalize",
          style: H({
            fontSize: ee.value + "px",
            color: K.value,
            padding: Z.value + "px",
            paddingBottom: 0,
            opacity: X.value
          })
        }, y(d.widget.wrapperConfig.title.value), 5)) : $("", !0),
        O.value ? (p(), W(le, { key: 1 }, [
          m("div", {
            class: "w-full h-full box-border cursor-pointer overflow-hidden sub",
            style: H({ position: "relative", opacity: X.value })
          }, [
            u(f, {
              color: "var(--color-outline)",
              vertical: "",
              horizontal: ""
            }, {
              default: h(() => [
                (p(), J(ae(w.value[d.widget.type].component), {
                  config: d.widget.config,
                  configv: d.widget.config,
                  "onUpdate:configv": E[0] || (E[0] = (U) => d.widget.config = U),
                  datasourceId: d.widget.config.datasourceId,
                  id: d.widget.uid || d.widget.id,
                  class: "widget_component"
                }, null, 40, ["config", "configv", "datasourceId", "id"]))
              ]),
              _: 1
            })
          ], 4),
          d.editEnabled ? (p(), W("div", ce, [
            u(I, {
              class: "control-button",
              onClick: E[1] || (E[1] = (U) => D(d.widget.uid)),
              icon: "settings",
              size: "small"
            }),
            u(I, {
              class: "control-button",
              onClick: E[2] || (E[2] = (U) => S(d.widget.uid)),
              icon: "close",
              color: "danger",
              size: "small"
            })
          ])) : $("", !0)
        ], 64)) : (p(), W("div", Ee, [
          m("p", null, "Widget type " + y(d.widget.type) + " is not registered.", 1)
        ])),
        u(z, {
          modelValue: T.value,
          "onUpdate:modelValue": E[5] || (E[5] = (U) => T.value = U),
          size: "small",
          "hide-default-actions": "",
          "overlay-opacity": "0.3"
        }, {
          footer: h(() => [
            m("div", Ce, [
              u(I, {
                preset: "secondary",
                onClick: E[3] || (E[3] = (U) => {
                  T.value = !1, i.value = null;
                })
              }, {
                default: h(() => [...E[8] || (E[8] = [
                  k(" Abbrechen ", -1)
                ])]),
                _: 1
              }),
              u(I, {
                color: "danger",
                icon: "delete",
                onClick: E[4] || (E[4] = (U) => g())
              }, {
                default: h(() => [...E[9] || (E[9] = [
                  k(" Löschen ", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: h(() => [
            m("div", he, [
              u(B, {
                name: "warning",
                color: "danger",
                size: "2rem"
              }),
              E[6] || (E[6] = m("h5", { style: { margin: "0.5rem 0" } }, "Widget löschen", -1)),
              E[7] || (E[7] = m("p", null, "Möchtest du dieses Widget wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.", -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 4);
    };
  }
}), Q = (d, e) => {
  const o = d.__vccOpts || d;
  for (const [n, b] of e)
    o[n] = b;
  return o;
}, Te = /* @__PURE__ */ Q(we, [["__scopeId", "data-v-81a272a9"]]), fe = { class: "settings-container" }, _e = { class: "px-2" }, ge = { class: "px-2" }, Ae = { class: "px-2" }, Ne = { class: "px-2" }, be = { class: "px-2" }, Se = { class: "px-2" }, Oe = /* @__PURE__ */ j({
  __name: "WidgetWrapperSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(d) {
    const e = re(d, "modelValue"), o = q("i18n"), n = o ? (T) => o.t("wrapper:" + T) : (T) => T, b = x(!1), P = x(!1), O = v(() => P.value ? "#ffffff" : ""), w = (T, i) => {
      console.log("onValueChange", i), T({
        target: {
          value: i
        }
      });
    };
    return (T, i) => {
      const S = F("VaDivider"), g = F("va-input"), D = F("va-color-input"), A = F("VaCounter"), L = F("VaSlider"), V = F("va-collapse");
      return p(), J(V, {
        modelValue: b.value,
        "onUpdate:modelValue": i[16] || (i[16] = (s) => b.value = s),
        header: "Widget wrapper settings",
        icon: "style"
      }, {
        default: h(() => [
          m("div", fe, [
            u(S, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: h(() => [
                m("span", _e, y(r(n)("WidgetWrapper.title")), 1)
              ]),
              _: 1
            }),
            u(r(N), {
              modelValue: e.value.title,
              "onUpdate:modelValue": i[0] || (i[0] = (s) => e.value.title = s),
              label: r(n)("WidgetWrapper.label")
            }, {
              default: h(({ value: s, change: R }) => [
                u(g, {
                  "model-value": s,
                  onInput: R,
                  label: r(n)("WidgetWrapper.label")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(r(N), {
              modelValue: e.value.titleFontSize,
              "onUpdate:modelValue": i[1] || (i[1] = (s) => e.value.titleFontSize = s),
              label: r(n)("WidgetWrapper.fontSize")
            }, {
              default: h(({ value: s, change: R }) => [
                u(g, {
                  "model-value": s,
                  onInput: R,
                  label: r(n)("WidgetWrapper.fontSize")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(r(N), {
              modelValue: e.value.titleColor,
              "onUpdate:modelValue": i[2] || (i[2] = (s) => e.value.titleColor = s),
              label: r(n)("WidgetWrapper.fontColor")
            }, {
              default: h(({ value: s, change: R }) => [
                u(D, {
                  "model-value": s,
                  onInput: R,
                  label: r(n)("WidgetWrapper.fontColor")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(S, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: h(() => [
                m("span", ge, y(r(n)("WidgetWrapper.padding")), 1)
              ]),
              _: 1
            }),
            u(r(N), {
              modelValue: e.value.padding,
              "onUpdate:modelValue": i[3] || (i[3] = (s) => e.value.padding = s),
              label: r(n)("WidgetWrapper.padding")
            }, {
              default: h(({ value: s, change: R }) => [
                u(L, {
                  labelColor: O.value,
                  stateful: "",
                  "model-value": s,
                  onChange: (C) => w(R, C),
                  label: r(n)("WidgetWrapper.padding"),
                  min: 0,
                  max: 20
                }, {
                  append: h(() => [
                    u(A, {
                      "model-value": s,
                      "onUpdate:modelValue": (C) => w(R, C),
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
            u(S, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: h(() => [
                m("span", Ae, y(r(n)("WidgetWrapper.background")), 1)
              ]),
              _: 1
            }),
            u(r(N), {
              modelValue: e.value.backgroundColor,
              "onUpdate:modelValue": i[4] || (i[4] = (s) => e.value.backgroundColor = s),
              label: r(n)("WidgetWrapper.backgroundColor")
            }, {
              default: h(({ value: s, change: R }) => [
                u(D, {
                  autofocus: "",
                  label: r(n)("WidgetWrapper.backgroundColor"),
                  class: "color-fill",
                  "model-value": s,
                  onInput: R
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(r(N), {
              modelValue: e.value.backgroundColorTransparence,
              "onUpdate:modelValue": i[5] || (i[5] = (s) => e.value.backgroundColorTransparence = s),
              label: r(n)("WidgetWrapper.backgroundColorTransparence")
            }, {
              default: h(({ value: s, change: R }) => [
                u(L, {
                  "model-value": s,
                  stateful: "",
                  onChange: (C) => w(R, C),
                  label: r(n)("WidgetWrapper.backgroundColorTrancparency"),
                  labelColor: O.value,
                  min: 0,
                  max: 255
                }, {
                  append: h(() => [
                    u(A, {
                      "model-value": s,
                      "onUpdate:modelValue": (C) => w(R, C),
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
            u(r(N), {
              modelValue: e.value.blur,
              "onUpdate:modelValue": i[6] || (i[6] = (s) => e.value.blur = s),
              label: r(n)("WidgetWrapper.blur")
            }, {
              default: h(({ value: s, change: R }) => [
                u(L, {
                  "model-value": s,
                  stateful: "",
                  onChange: (C) => w(R, C),
                  label: r(n)("WidgetWrapper.blur"),
                  labelColor: O.value,
                  min: 0,
                  max: 10
                }, {
                  append: h(() => [
                    u(A, {
                      "model-value": s,
                      "onUpdate:modelValue": (C) => w(R, C),
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
            u(S, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: h(() => [
                m("span", Ne, y(r(n)("WidgetWrapper.border")), 1)
              ]),
              _: 1
            }),
            u(r(N), {
              modelValue: e.value.borderSize,
              "onUpdate:modelValue": i[7] || (i[7] = (s) => e.value.borderSize = s),
              label: r(n)("WidgetWrapper.borderSize")
            }, {
              default: h(({ value: s, change: R }) => [
                u(g, {
                  "model-value": s,
                  onInput: R,
                  label: r(n)("WidgetWrapper.borderSize")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(r(N), {
              modelValue: e.value.borderColor,
              "onUpdate:modelValue": i[8] || (i[8] = (s) => e.value.borderColor = s),
              label: r(n)("WidgetWrapper.borderColor")
            }, {
              default: h(({ value: s, change: R }) => [
                u(D, {
                  autofocus: "",
                  label: r(n)("WidgetWrapper.borderColor"),
                  class: "color-fill",
                  "model-value": s,
                  onInput: R
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(r(N), {
              modelValue: e.value.borderRadius,
              "onUpdate:modelValue": i[9] || (i[9] = (s) => e.value.borderRadius = s),
              label: r(n)("WidgetWrapper.borderRadius")
            }, {
              default: h(({ value: s, change: R }) => [
                u(g, {
                  "model-value": s,
                  onInput: R,
                  label: r(n)("WidgetWrapper.borderRadius")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(S, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: h(() => [
                m("span", be, y(r(n)("WidgetWrapper.shadow")), 1)
              ]),
              _: 1
            }),
            u(r(N), {
              modelValue: e.value.shadowX,
              "onUpdate:modelValue": i[10] || (i[10] = (s) => e.value.shadowX = s),
              label: r(n)("WidgetWrapper.shadowX")
            }, {
              default: h(({ value: s, change: R }) => [
                u(g, {
                  "model-value": s,
                  onInput: R,
                  label: r(n)("WidgetWrapper.shadowX")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(r(N), {
              modelValue: e.value.shadowY,
              "onUpdate:modelValue": i[11] || (i[11] = (s) => e.value.shadowY = s),
              label: r(n)("WidgetWrapper.shadowY")
            }, {
              default: h(({ value: s, change: R }) => [
                u(g, {
                  "model-value": s,
                  onInput: R,
                  label: r(n)("WidgetWrapper.shadowY")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(r(N), {
              modelValue: e.value.shadowBlur,
              "onUpdate:modelValue": i[12] || (i[12] = (s) => e.value.shadowBlur = s),
              label: r(n)("WidgetWrapper.shadowBlur")
            }, {
              default: h(({ value: s, change: R }) => [
                u(g, {
                  "model-value": s,
                  onInput: R,
                  label: r(n)("WidgetWrapper.shadowBlur")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(r(N), {
              modelValue: e.value.shadowColor,
              "onUpdate:modelValue": i[13] || (i[13] = (s) => e.value.shadowColor = s),
              label: r(n)("WidgetWrapper.shadowColor")
            }, {
              default: h(({ value: s, change: R }) => [
                u(D, {
                  autofocus: "",
                  label: r(n)("WidgetWrapper.shadowColor"),
                  class: "color-fill",
                  "model-value": s,
                  onInput: R
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(r(N), {
              modelValue: e.value.shadowTransparence,
              "onUpdate:modelValue": i[14] || (i[14] = (s) => e.value.shadowTransparence = s),
              label: r(n)("WidgetWrapper.shadowTransparence")
            }, {
              default: h(({ value: s, change: R }) => [
                u(L, {
                  labelColor: O.value,
                  stateful: "",
                  "model-value": s,
                  onChange: (C) => w(R, C),
                  label: r(n)("WidgetWrapper.shadowTransparence"),
                  min: 0,
                  max: 255
                }, {
                  append: h(() => [
                    u(A, {
                      "model-value": s,
                      "onUpdate:modelValue": (C) => w(R, C),
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
            u(S, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: h(() => [
                m("span", Se, y(r(n)("WidgetWrapper.transparence")), 1)
              ]),
              _: 1
            }),
            u(r(N), {
              modelValue: e.value.transparency,
              "onUpdate:modelValue": i[15] || (i[15] = (s) => e.value.transparency = s),
              label: r(n)("WidgetWrapper.transparency")
            }, {
              default: h(({ value: s, change: R }) => [
                u(L, {
                  labelColor: O.value,
                  stateful: "",
                  "model-value": s,
                  onChange: (C) => w(R, C),
                  label: r(n)("WidgetWrapper.transparency"),
                  min: 0,
                  max: 255,
                  step: 1
                }, {
                  append: h(() => [
                    u(A, {
                      "model-value": s,
                      "onUpdate:modelValue": (C) => w(R, C),
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
}), Le = /* @__PURE__ */ Q(Oe, [["__scopeId", "data-v-affddfef"]]);
class Y extends ie {
  static get eINSTANCE() {
    return this._instance || (this._instance = new Y()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(l.eINSTANCE);
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
class l extends ue {
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
    return this._instance || (this._instance = new l(), this._instance.init()), this._instance;
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
    super(), this.setName(l.eNAME), this.setNsURI(l.eNS_URI), this.setNsPrefix(l.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    this.setEFactoryInstance(Y.eINSTANCE);
    const e = new de();
    e.setName("WrapperSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), l.Literals.WRAPPER_SETTINGS = e;
    const o = new _();
    o.setContainment(!1), o.setName("title"), o.setLowerBound(0), o.setUpperBound(1), e.getEStructuralFeatures().push(o), l.Literals.WRAPPER_SETTINGS__TITLE = o;
    const n = new _();
    n.setContainment(!1), n.setName("backgroundColor"), n.setLowerBound(0), n.setUpperBound(1), e.getEStructuralFeatures().push(n), l.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR = n;
    const b = new _();
    b.setContainment(!1), b.setName("backgroundColorTransparence"), b.setLowerBound(0), b.setUpperBound(1), e.getEStructuralFeatures().push(b), l.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR_TRANSPARENCE = b;
    const P = new _();
    P.setContainment(!1), P.setName("titleColor"), P.setLowerBound(0), P.setUpperBound(1), e.getEStructuralFeatures().push(P), l.Literals.WRAPPER_SETTINGS__TITLE_COLOR = P;
    const O = new _();
    O.setContainment(!1), O.setName("padding"), O.setLowerBound(0), O.setUpperBound(1), e.getEStructuralFeatures().push(O), l.Literals.WRAPPER_SETTINGS__PADDING = O;
    const w = new _();
    w.setContainment(!1), w.setName("titleFontSize"), w.setLowerBound(0), w.setUpperBound(1), e.getEStructuralFeatures().push(w), l.Literals.WRAPPER_SETTINGS__TITLE_FONT_SIZE = w;
    const T = new _();
    T.setContainment(!1), T.setName("borderSize"), T.setLowerBound(0), T.setUpperBound(1), e.getEStructuralFeatures().push(T), l.Literals.WRAPPER_SETTINGS__BORDER_SIZE = T;
    const i = new _();
    i.setContainment(!1), i.setName("borderColor"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), l.Literals.WRAPPER_SETTINGS__BORDER_COLOR = i;
    const S = new _();
    S.setContainment(!1), S.setName("borderRadius"), S.setLowerBound(0), S.setUpperBound(1), e.getEStructuralFeatures().push(S), l.Literals.WRAPPER_SETTINGS__BORDER_RADIUS = S;
    const g = new _();
    g.setContainment(!1), g.setName("blur"), g.setLowerBound(0), g.setUpperBound(1), e.getEStructuralFeatures().push(g), l.Literals.WRAPPER_SETTINGS__BLUR = g;
    const D = new _();
    D.setContainment(!1), D.setName("fullscreen"), D.setLowerBound(0), D.setUpperBound(1), e.getEStructuralFeatures().push(D), l.Literals.WRAPPER_SETTINGS__FULLSCREEN = D;
    const A = new _();
    A.setContainment(!1), A.setName("shadowColor"), A.setLowerBound(0), A.setUpperBound(1), e.getEStructuralFeatures().push(A), l.Literals.WRAPPER_SETTINGS__SHADOW_COLOR = A;
    const L = new _();
    L.setContainment(!1), L.setName("shadowBlur"), L.setLowerBound(0), L.setUpperBound(1), e.getEStructuralFeatures().push(L), l.Literals.WRAPPER_SETTINGS__SHADOW_BLUR = L;
    const V = new _();
    V.setContainment(!1), V.setName("shadowX"), V.setLowerBound(0), V.setUpperBound(1), e.getEStructuralFeatures().push(V), l.Literals.WRAPPER_SETTINGS__SHADOW_X = V;
    const s = new _();
    s.setContainment(!1), s.setName("shadowY"), s.setLowerBound(0), s.setUpperBound(1), e.getEStructuralFeatures().push(s), l.Literals.WRAPPER_SETTINGS__SHADOW_Y = s;
    const R = new _();
    R.setContainment(!1), R.setName("shadowTransparence"), R.setLowerBound(0), R.setUpperBound(1), e.getEStructuralFeatures().push(R), l.Literals.WRAPPER_SETTINGS__SHADOW_TRANSPARENCE = R;
    const C = new _();
    C.setContainment(!1), C.setName("transparency"), C.setLowerBound(0), C.setUpperBound(1), e.getEStructuralFeatures().push(C), l.Literals.WRAPPER_SETTINGS__TRANSPARENCY = C, l.Literals.WRAPPER_SETTINGS__TITLE.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR_TRANSPARENCE.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__TITLE_COLOR.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__PADDING.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__TITLE_FONT_SIZE.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__BORDER_SIZE.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__BORDER_COLOR.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__BORDER_RADIUS.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__BLUR.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__FULLSCREEN.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__SHADOW_COLOR.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__SHADOW_BLUR.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__SHADOW_X.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__SHADOW_Y.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__SHADOW_TRANSPARENCE.setEType(l.Literals.VARIABLE_WRAPPER), l.Literals.WRAPPER_SETTINGS__TRANSPARENCY.setEType(l.Literals.VARIABLE_WRAPPER);
  }
}
class t extends Re {
  constructor() {
    super(...arguments), this._title = new a(), this._backgroundColor = new a(), this._backgroundColorTransparence = new a(), this._titleColor = new a(), this._padding = new a(), this._titleFontSize = new a(), this._borderSize = new a(), this._borderColor = new a(), this._borderRadius = new a(), this._blur = new a(), this._fullscreen = new a(), this._shadowColor = new a(), this._shadowBlur = new a(), this._shadowX = new a(), this._shadowY = new a(), this._shadowTransparence = new a(), this._transparency = new a();
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
    return l.Literals.WRAPPER_SETTINGS;
  }
  // Getters and Setters
  get title() {
    return this._title;
  }
  set title(e) {
    const o = this._title;
    this._title = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.TITLE),
      getOldValue: () => o,
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
    const o = this._backgroundColor;
    this._backgroundColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BACKGROUND_COLOR),
      getOldValue: () => o,
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
    const o = this._backgroundColorTransparence;
    this._backgroundColorTransparence = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BACKGROUND_COLOR_TRANSPARENCE),
      getOldValue: () => o,
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
    const o = this._titleColor;
    this._titleColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.TITLE_COLOR),
      getOldValue: () => o,
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
    const o = this._padding;
    this._padding = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.PADDING),
      getOldValue: () => o,
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
    const o = this._titleFontSize;
    this._titleFontSize = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.TITLE_FONT_SIZE),
      getOldValue: () => o,
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
    const o = this._borderSize;
    this._borderSize = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BORDER_SIZE),
      getOldValue: () => o,
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
    const o = this._borderColor;
    this._borderColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BORDER_COLOR),
      getOldValue: () => o,
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
    const o = this._borderRadius;
    this._borderRadius = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BORDER_RADIUS),
      getOldValue: () => o,
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
    const o = this._blur;
    this._blur = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.BLUR),
      getOldValue: () => o,
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
    const o = this._fullscreen;
    this._fullscreen = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.FULLSCREEN),
      getOldValue: () => o,
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
    const o = this._shadowColor;
    this._shadowColor = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.SHADOW_COLOR),
      getOldValue: () => o,
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
    const o = this._shadowBlur;
    this._shadowBlur = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.SHADOW_BLUR),
      getOldValue: () => o,
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
    const o = this._shadowX;
    this._shadowX = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.SHADOW_X),
      getOldValue: () => o,
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
    const o = this._shadowY;
    this._shadowY = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.SHADOW_Y),
      getOldValue: () => o,
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
    const o = this._shadowTransparence;
    this._shadowTransparence = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.SHADOW_TRANSPARENCE),
      getOldValue: () => o,
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
    const o = this._transparency;
    this._transparency = e, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(t.TRANSPARENCY),
      getOldValue: () => o,
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
  eSet(e, o) {
    switch (this.eClass().getFeatureID(e)) {
      case t.TITLE:
        this.title = o, super.eSet(e, o);
        break;
      case t.BACKGROUND_COLOR:
        this.backgroundColor = o, super.eSet(e, o);
        break;
      case t.BACKGROUND_COLOR_TRANSPARENCE:
        this.backgroundColorTransparence = o, super.eSet(e, o);
        break;
      case t.TITLE_COLOR:
        this.titleColor = o, super.eSet(e, o);
        break;
      case t.PADDING:
        this.padding = o, super.eSet(e, o);
        break;
      case t.TITLE_FONT_SIZE:
        this.titleFontSize = o, super.eSet(e, o);
        break;
      case t.BORDER_SIZE:
        this.borderSize = o, super.eSet(e, o);
        break;
      case t.BORDER_COLOR:
        this.borderColor = o, super.eSet(e, o);
        break;
      case t.BORDER_RADIUS:
        this.borderRadius = o, super.eSet(e, o);
        break;
      case t.BLUR:
        this.blur = o, super.eSet(e, o);
        break;
      case t.FULLSCREEN:
        this.fullscreen = o, super.eSet(e, o);
        break;
      case t.SHADOW_COLOR:
        this.shadowColor = o, super.eSet(e, o);
        break;
      case t.SHADOW_BLUR:
        this.shadowBlur = o, super.eSet(e, o);
        break;
      case t.SHADOW_X:
        this.shadowX = o, super.eSet(e, o);
        break;
      case t.SHADOW_Y:
        this.shadowY = o, super.eSet(e, o);
        break;
      case t.SHADOW_TRANSPARENCE:
        this.shadowTransparence = o, super.eSet(e, o);
        break;
      case t.TRANSPARENCY:
        this.transparency = o, super.eSet(e, o);
        break;
      default:
        super.eSet(e, o);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(e) {
    switch (this.eClass().getFeatureID(e)) {
      case t.TITLE:
        return this._title !== new a();
      case t.BACKGROUND_COLOR:
        return this._backgroundColor !== new a();
      case t.BACKGROUND_COLOR_TRANSPARENCE:
        return this._backgroundColorTransparence !== new a();
      case t.TITLE_COLOR:
        return this._titleColor !== new a();
      case t.PADDING:
        return this._padding !== new a();
      case t.TITLE_FONT_SIZE:
        return this._titleFontSize !== new a();
      case t.BORDER_SIZE:
        return this._borderSize !== new a();
      case t.BORDER_COLOR:
        return this._borderColor !== new a();
      case t.BORDER_RADIUS:
        return this._borderRadius !== new a();
      case t.BLUR:
        return this._blur !== new a();
      case t.FULLSCREEN:
        return this._fullscreen !== new a();
      case t.SHADOW_COLOR:
        return this._shadowColor !== new a();
      case t.SHADOW_BLUR:
        return this._shadowBlur !== new a();
      case t.SHADOW_X:
        return this._shadowX !== new a();
      case t.SHADOW_Y:
        return this._shadowY !== new a();
      case t.SHADOW_TRANSPARENCE:
        return this._shadowTransparence !== new a();
      case t.TRANSPARENCY:
        return this._transparency !== new a();
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
        this._title = new a();
        return;
      case t.BACKGROUND_COLOR:
        this._backgroundColor = new a();
        return;
      case t.BACKGROUND_COLOR_TRANSPARENCE:
        this._backgroundColorTransparence = new a();
        return;
      case t.TITLE_COLOR:
        this._titleColor = new a();
        return;
      case t.PADDING:
        this._padding = new a();
        return;
      case t.TITLE_FONT_SIZE:
        this._titleFontSize = new a();
        return;
      case t.BORDER_SIZE:
        this._borderSize = new a();
        return;
      case t.BORDER_COLOR:
        this._borderColor = new a();
        return;
      case t.BORDER_RADIUS:
        this._borderRadius = new a();
        return;
      case t.BLUR:
        this._blur = new a();
        return;
      case t.FULLSCREEN:
        this._fullscreen = new a();
        return;
      case t.SHADOW_COLOR:
        this._shadowColor = new a();
        return;
      case t.SHADOW_BLUR:
        this._shadowBlur = new a();
        return;
      case t.SHADOW_X:
        this._shadowX = new a();
        return;
      case t.SHADOW_Y:
        this._shadowY = new a();
        return;
      case t.SHADOW_TRANSPARENCE:
        this._shadowTransparence = new a();
        return;
      case t.TRANSPARENCY:
        this._transparency = new a();
        return;
      default:
        super.eUnset(e);
    }
  }
}
l.eINSTANCE;
const ve = new t(), De = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WidgetWrapper: Te,
  WidgetWrapperSettings: Le,
  WrapperSettingsImpl: t,
  WrapperSettingsPackage: l,
  defaultConfig: ve
}, Symbol.toStringTag, { value: "Module" })), M = "org.eclipse.daanse.board.app.ui.vue.widget.wrapper", me = "0.0.1-next.1";
async function Ue(d) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${M}: tsm runtime is not initialized`);
  e.register(M, De, me, "ui.vue.widget.wrapper"), await void 0;
}
async function ye(d) {
  await void 0;
}
export {
  Te as WidgetWrapper,
  Le as WidgetWrapperSettings,
  t as WrapperSettingsImpl,
  l as WrapperSettingsPackage,
  Ue as activate,
  ye as deactivate,
  ve as defaultConfig
};
