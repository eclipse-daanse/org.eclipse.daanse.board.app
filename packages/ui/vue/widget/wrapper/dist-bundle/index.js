(function(){var i="ui.vue.widget.wrapper",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".absolute[data-v-81a272a9]{position:absolute}.wrapper-container[data-v-81a272a9]{background-color:var(--v6a72535e);border-color:var(--v776491f8);border-width:var(--v0d088b26);border-style:solid;width:100%;height:100%;box-Shadow:var(--v17af03c3);border-radius:var(--v407e3708);backdrop-filter:blur(var(--blur-amount))}.sub[data-v-81a272a9]{border-radius:var(--v407e3708);padding:var(--bd9ee602)}.wrapper-container:hover .hover[data-v-81a272a9]{display:block}.wrapper-container .hover[data-v-81a272a9]{display:none}.hightz[data-v-81a272a9]{z-index:3000}.settings-container[data-v-b90249f7]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.pad_bottom[data-v-b90249f7]{padding-top:30px;padding-bottom:10px}\n";})();
import { defineComponent as J, useCssVars as le, computed as W, inject as K, ref as Y, onUnmounted as ae, resolveComponent as I, createElementBlock as O, openBlock as D, normalizeStyle as E, createCommentVNode as q, createVNode as o, toDisplayString as B, Fragment as oe, createElementVNode as C, withCtx as p, createBlock as Q, resolveDynamicComponent as te, createTextVNode as G, useModel as re, unref as l } from "vue";
import { identifier as ne } from "org.eclipse.daanse.board.app.lib.api.widget";
import { VariableWrapper as s } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { VariableInput as w } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { Reference as b, ModelClass as de } from "org.eclipse.daanse.board.app.lib.annotations";
const ie = {
  key: 0,
  class: "hover absolute top-[25px] right-0 flex justify-end z-3000 hightz"
}, ue = { key: 2 }, pe = { style: { "text-align": "center", padding: "1rem" } }, se = { style: { display: "flex", "justify-content": "flex-end", gap: "0.5rem" } }, ge = /* @__PURE__ */ J({
  __name: "WidgetWrapper",
  props: {
    widget: {},
    editEnabled: { type: Boolean }
  },
  emits: ["openSettings", "removeWidget"],
  setup(a, { emit: r }) {
    le((d) => ({
      v6a72535e: M.value,
      v776491f8: e.value,
      v0d088b26: u.value + "px",
      v17af03c3: R.value,
      v407e3708: g.value + "px",
      bd9ee602: L.value + "px"
    }));
    const V = r, t = K(ne), f = Y(0), $ = t.onChange?.(() => {
      f.value++;
    });
    ae(() => $?.());
    const x = W(() => (f.value, t.getWidget(a.widget.type))), h = W(() => (f.value, t.getAllWidgets())), y = Y(!1), n = Y(null), k = (d) => {
      n.value = d, y.value = !0;
    }, z = () => {
      n.value && V("removeWidget", n.value), y.value = !1, n.value = null;
    }, j = (d) => {
      V("openSettings", d);
    }, U = {
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
    Object.keys(U).forEach((d) => {
      const i = a.widget.wrapperConfig[d];
      if (i == null)
        a.widget.wrapperConfig[d] = new s(U[d]);
      else if (typeof i != "object")
        a.widget.wrapperConfig[d] = new s(i);
      else if (!(i instanceof s))
        if ("value" in i) {
          const c = new s(i.value);
          "variable" in i && (c.variable = i.variable), a.widget.wrapperConfig[d] = c;
        } else
          a.widget.wrapperConfig[d] = new s(U[d]);
    });
    const R = W(() => {
      let d = "";
      const i = a.widget.wrapperConfig.shadowTransparence?.value;
      N(i) && (d = i.toString(16));
      let c = (a.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      return c.length == 3 && (c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2]), `${a.widget.wrapperConfig.shadowX?.value}px ${a.widget.wrapperConfig.shadowY?.value}px ${a.widget.wrapperConfig.shadowBlur?.value}px #${c}${d}`;
    }), M = W(() => {
      let d = 255;
      const i = a.widget.wrapperConfig.backgroundColorTransparence?.value;
      N(i) && (d = i);
      const c = a.widget.wrapperConfig.transparency?.value;
      N(c) && (d = Math.round(d * (c / 255)));
      const T = a.widget.wrapperConfig.backgroundColor?.value;
      if (!T) return "var(--color-pane)";
      let S = T.replace("#", "");
      S.length == 3 && (S = S[0] + S[0] + S[1] + S[1] + S[2] + S[2]);
      const X = d < 255 ? d.toString(16).padStart(2, "0") : "";
      return `#${S}${X}`;
    }), e = W(() => a.widget.wrapperConfig.borderColor?.value || "var(--color-divider)"), u = W(() => a.widget.wrapperConfig.borderSize?.value || 0), g = W(() => a.widget.wrapperConfig.borderRadius?.value || 0), A = W(() => {
      const d = a.widget.wrapperConfig.transparency?.value;
      return N(d) ? d / 255 : 1;
    }), _ = W(() => a.widget.wrapperConfig.titleFontSize?.value || 16), P = W(() => a.widget.wrapperConfig.titleColor?.value || "var(--color-divider)");
    W(() => {
      let d = (a.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      d.length == 3 && (d = d[0] + d[0] + d[1] + d[1] + d[2] + d[2]);
      const i = a.widget.wrapperConfig.shadowTransparence?.value;
      return d + (N(i) ? i.toString(16) : "");
    });
    function N(d) {
      const i = parseInt(d);
      return isNaN(i) ? !1 : i >= 0 && i <= 255;
    }
    const ee = W(() => {
      const d = a.widget.wrapperConfig.blur?.value;
      return N(d) ? d : "";
    }), L = W(() => {
      console.log(a.widget.wrapperConfig.padding);
      const d = parseInt(a.widget.wrapperConfig.padding?.value);
      return isNaN(d) ? 0 : d;
    });
    return (d, i) => {
      const c = I("VaScrollContainer"), T = I("VaButton"), S = I("VaIcon"), X = I("VaModal");
      return D(), O("div", {
        class: "flex relative flex-col w-full h-full wrapper-container",
        style: E({ "--blur-amount": ee.value + "px", "--title-color": P.value })
      }, [
        a.widget.wrapperConfig.title?.value ? (D(), O("div", {
          key: 0,
          class: "font-semibold capitalize",
          style: E({
            fontSize: _.value + "px",
            color: P.value,
            padding: L.value + "px",
            paddingBottom: 0,
            opacity: A.value
          })
        }, B(a.widget.wrapperConfig.title.value), 5)) : q("", !0),
        x.value ? (D(), O(oe, { key: 1 }, [
          C("div", {
            class: "w-full h-full box-border cursor-pointer overflow-hidden sub",
            style: E({ position: "relative", opacity: A.value })
          }, [
            o(c, {
              color: "var(--color-outline)",
              vertical: "",
              horizontal: ""
            }, {
              default: p(() => [
                (D(), Q(te(h.value[a.widget.type].component), {
                  config: a.widget.config,
                  configv: a.widget.config,
                  "onUpdate:configv": i[0] || (i[0] = (F) => a.widget.config = F),
                  datasourceId: a.widget.config.datasourceId,
                  id: a.widget.uid || a.widget.id,
                  class: "widget_component"
                }, null, 40, ["config", "configv", "datasourceId", "id"]))
              ]),
              _: 1
            })
          ], 4),
          a.editEnabled ? (D(), O("div", ie, [
            o(T, {
              class: "control-button",
              onClick: i[1] || (i[1] = (F) => j(a.widget.uid)),
              icon: "settings",
              size: "small"
            }),
            o(T, {
              class: "control-button",
              onClick: i[2] || (i[2] = (F) => k(a.widget.uid)),
              icon: "close",
              color: "danger",
              size: "small"
            })
          ])) : q("", !0)
        ], 64)) : (D(), O("div", ue, [
          C("p", null, "Widget type " + B(a.widget.type) + " is not registered.", 1)
        ])),
        o(X, {
          modelValue: y.value,
          "onUpdate:modelValue": i[5] || (i[5] = (F) => y.value = F),
          size: "small",
          "hide-default-actions": "",
          "overlay-opacity": "0.3"
        }, {
          footer: p(() => [
            C("div", se, [
              o(T, {
                preset: "secondary",
                onClick: i[3] || (i[3] = (F) => {
                  y.value = !1, n.value = null;
                })
              }, {
                default: p(() => [...i[8] || (i[8] = [
                  G(" Abbrechen ", -1)
                ])]),
                _: 1
              }),
              o(T, {
                color: "danger",
                icon: "delete",
                onClick: i[4] || (i[4] = (F) => z())
              }, {
                default: p(() => [...i[9] || (i[9] = [
                  G(" Löschen ", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: p(() => [
            C("div", pe, [
              o(S, {
                name: "warning",
                color: "danger",
                size: "2rem"
              }),
              i[6] || (i[6] = C("h5", { style: { margin: "0.5rem 0" } }, "Widget löschen", -1)),
              i[7] || (i[7] = C("p", null, "Möchtest du dieses Widget wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.", -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 4);
    };
  }
}), Z = (a, r) => {
  const V = a.__vccOpts || a;
  for (const [t, f] of r)
    V[t] = f;
  return V;
}, me = /* @__PURE__ */ Z(ge, [["__scopeId", "data-v-81a272a9"]]), ve = { class: "settings-container" }, ce = { class: "px-2" }, be = { class: "px-2" }, fe = { class: "px-2" }, we = { class: "px-2" }, We = { class: "px-2" }, Ce = { class: "px-2" }, Ve = /* @__PURE__ */ J({
  __name: "WidgetWrapperSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(a) {
    const r = re(a, "modelValue"), V = K("i18n"), t = V ? (y) => V.t("wrapper:" + y) : (y) => y, f = Y(!1), $ = Y(!1), x = W(() => $.value ? "#ffffff" : ""), h = (y, n) => {
      console.log("onValueChange", n), y({
        target: {
          value: n
        }
      });
    };
    return (y, n) => {
      const k = I("VaDivider"), z = I("va-input"), j = I("va-color-input"), U = I("VaCounter"), R = I("VaSlider"), M = I("va-collapse");
      return D(), Q(M, {
        modelValue: f.value,
        "onUpdate:modelValue": n[16] || (n[16] = (e) => f.value = e),
        header: "Widget wrapper settings",
        icon: "style"
      }, {
        default: p(() => [
          C("div", ve, [
            o(k, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                C("span", ce, B(l(t)("WidgetWrapper.title")), 1)
              ]),
              _: 1
            }),
            o(l(w), {
              modelValue: r.value.title,
              "onUpdate:modelValue": n[0] || (n[0] = (e) => r.value.title = e),
              label: l(t)("WidgetWrapper.label")
            }, {
              default: p(({ value: e, change: u }) => [
                o(z, {
                  "model-value": e,
                  onInput: u,
                  label: l(t)("WidgetWrapper.label")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            o(l(w), {
              modelValue: r.value.titleFontSize,
              "onUpdate:modelValue": n[1] || (n[1] = (e) => r.value.titleFontSize = e),
              label: l(t)("WidgetWrapper.fontSize")
            }, {
              default: p(({ value: e, change: u }) => [
                o(z, {
                  "model-value": e,
                  onInput: u,
                  label: l(t)("WidgetWrapper.fontSize")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            o(l(w), {
              modelValue: r.value.titleColor,
              "onUpdate:modelValue": n[2] || (n[2] = (e) => r.value.titleColor = e),
              label: l(t)("WidgetWrapper.fontColor")
            }, {
              default: p(({ value: e, change: u }) => [
                o(j, {
                  "model-value": e,
                  onInput: u,
                  label: l(t)("WidgetWrapper.fontColor")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            o(k, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                C("span", be, B(l(t)("WidgetWrapper.padding")), 1)
              ]),
              _: 1
            }),
            o(l(w), {
              modelValue: r.value.padding,
              "onUpdate:modelValue": n[3] || (n[3] = (e) => r.value.padding = e),
              label: l(t)("WidgetWrapper.padding")
            }, {
              default: p(({ value: e, change: u }) => [
                o(R, {
                  labelColor: x.value,
                  stateful: "",
                  "model-value": e,
                  onChange: (g) => h(u, g),
                  label: l(t)("WidgetWrapper.padding"),
                  min: 0,
                  max: 20
                }, {
                  append: p(() => [
                    o(U, {
                      "model-value": e,
                      "onUpdate:modelValue": (g) => h(u, g),
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
            o(k, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                C("span", fe, B(l(t)("WidgetWrapper.background")), 1)
              ]),
              _: 1
            }),
            o(l(w), {
              modelValue: r.value.backgroundColor,
              "onUpdate:modelValue": n[4] || (n[4] = (e) => r.value.backgroundColor = e),
              label: l(t)("WidgetWrapper.backgroundColor")
            }, {
              default: p(({ value: e, change: u }) => [
                o(j, {
                  autofocus: "",
                  label: l(t)("WidgetWrapper.backgroundColor"),
                  class: "color-fill",
                  "model-value": e,
                  onInput: u
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            o(l(w), {
              modelValue: r.value.backgroundColorTransparence,
              "onUpdate:modelValue": n[5] || (n[5] = (e) => r.value.backgroundColorTransparence = e),
              label: l(t)("WidgetWrapper.backgroundColorTransparence")
            }, {
              default: p(({ value: e, change: u }) => [
                o(R, {
                  "model-value": e,
                  stateful: "",
                  onChange: (g) => h(u, g),
                  label: l(t)("WidgetWrapper.backgroundColorTrancparency"),
                  labelColor: x.value,
                  min: 0,
                  max: 255
                }, {
                  append: p(() => [
                    o(U, {
                      "model-value": e,
                      "onUpdate:modelValue": (g) => h(u, g),
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
            o(l(w), {
              modelValue: r.value.blur,
              "onUpdate:modelValue": n[6] || (n[6] = (e) => r.value.blur = e),
              label: l(t)("WidgetWrapper.blur")
            }, {
              default: p(({ value: e, change: u }) => [
                o(R, {
                  "model-value": e,
                  stateful: "",
                  onChange: (g) => h(u, g),
                  label: l(t)("WidgetWrapper.blur"),
                  labelColor: x.value,
                  min: 0,
                  max: 10
                }, {
                  append: p(() => [
                    o(U, {
                      "model-value": e,
                      "onUpdate:modelValue": (g) => h(u, g),
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
            o(k, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                C("span", we, B(l(t)("WidgetWrapper.border")), 1)
              ]),
              _: 1
            }),
            o(l(w), {
              modelValue: r.value.borderSize,
              "onUpdate:modelValue": n[7] || (n[7] = (e) => r.value.borderSize = e),
              label: l(t)("WidgetWrapper.borderSize")
            }, {
              default: p(({ value: e, change: u }) => [
                o(z, {
                  "model-value": e,
                  onInput: u,
                  label: l(t)("WidgetWrapper.borderSize")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            o(l(w), {
              modelValue: r.value.borderColor,
              "onUpdate:modelValue": n[8] || (n[8] = (e) => r.value.borderColor = e),
              label: l(t)("WidgetWrapper.borderColor")
            }, {
              default: p(({ value: e, change: u }) => [
                o(j, {
                  autofocus: "",
                  label: l(t)("WidgetWrapper.borderColor"),
                  class: "color-fill",
                  "model-value": e,
                  onInput: u
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            o(l(w), {
              modelValue: r.value.borderRadius,
              "onUpdate:modelValue": n[9] || (n[9] = (e) => r.value.borderRadius = e),
              label: l(t)("WidgetWrapper.borderRadius")
            }, {
              default: p(({ value: e, change: u }) => [
                o(z, {
                  "model-value": e,
                  onInput: u,
                  label: l(t)("WidgetWrapper.borderRadius")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            o(k, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                C("span", We, B(l(t)("WidgetWrapper.shadow")), 1)
              ]),
              _: 1
            }),
            o(l(w), {
              modelValue: r.value.shadowX,
              "onUpdate:modelValue": n[10] || (n[10] = (e) => r.value.shadowX = e),
              label: l(t)("WidgetWrapper.shadowX")
            }, {
              default: p(({ value: e, change: u }) => [
                o(z, {
                  "model-value": e,
                  onInput: u,
                  label: l(t)("WidgetWrapper.shadowX")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            o(l(w), {
              modelValue: r.value.shadowY,
              "onUpdate:modelValue": n[11] || (n[11] = (e) => r.value.shadowY = e),
              label: l(t)("WidgetWrapper.shadowY")
            }, {
              default: p(({ value: e, change: u }) => [
                o(z, {
                  "model-value": e,
                  onInput: u,
                  label: l(t)("WidgetWrapper.shadowY")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            o(l(w), {
              modelValue: r.value.shadowBlur,
              "onUpdate:modelValue": n[12] || (n[12] = (e) => r.value.shadowBlur = e),
              label: l(t)("WidgetWrapper.shadowBlur")
            }, {
              default: p(({ value: e, change: u }) => [
                o(z, {
                  "model-value": e,
                  onInput: u,
                  label: l(t)("WidgetWrapper.shadowBlur")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            o(l(w), {
              modelValue: r.value.shadowColor,
              "onUpdate:modelValue": n[13] || (n[13] = (e) => r.value.shadowColor = e),
              label: l(t)("WidgetWrapper.shadowColor")
            }, {
              default: p(({ value: e, change: u }) => [
                o(j, {
                  autofocus: "",
                  label: l(t)("WidgetWrapper.shadowColor"),
                  class: "color-fill",
                  "model-value": e,
                  onInput: u
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            o(l(w), {
              modelValue: r.value.shadowTransparence,
              "onUpdate:modelValue": n[14] || (n[14] = (e) => r.value.shadowTransparence = e),
              label: l(t)("WidgetWrapper.shadowTransparence")
            }, {
              default: p(({ value: e, change: u }) => [
                o(R, {
                  labelColor: x.value,
                  stateful: "",
                  "model-value": e,
                  onChange: (g) => h(u, g),
                  label: l(t)("WidgetWrapper.shadowTransparence"),
                  min: 0,
                  max: 255
                }, {
                  append: p(() => [
                    o(U, {
                      "model-value": e,
                      "onUpdate:modelValue": (g) => h(u, g),
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
            o(k, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                C("span", Ce, B(l(t)("WidgetWrapper.transparence")), 1)
              ]),
              _: 1
            }),
            o(l(w), {
              modelValue: r.value.transparency,
              "onUpdate:modelValue": n[15] || (n[15] = (e) => r.value.transparency = e),
              label: l(t)("WidgetWrapper.transparency")
            }, {
              default: p(({ value: e, change: u }) => [
                o(R, {
                  labelColor: x.value,
                  stateful: "",
                  "model-value": e,
                  onChange: (g) => h(u, g),
                  label: l(t)("WidgetWrapper.transparency"),
                  min: 0,
                  max: 255,
                  step: 1
                }, {
                  append: p(() => [
                    o(U, {
                      "model-value": e,
                      "onUpdate:modelValue": (g) => h(u, g),
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
}), he = /* @__PURE__ */ Z(Ve, [["__scopeId", "data-v-b90249f7"]]);
var ye = Object.defineProperty, xe = Object.getOwnPropertyDescriptor, v = (a, r, V, t) => {
  for (var f = t > 1 ? void 0 : t ? xe(r, V) : r, $ = a.length - 1, x; $ >= 0; $--)
    (x = a[$]) && (f = (t ? x(r, V, f) : x(f)) || f);
  return t && f && ye(r, V, f), f;
};
let m = class {
  constructor() {
    this.title = new s(), this.backgroundColor = new s(), this.backgroundColorTransparence = new s(), this.titleColor = new s(), this.padding = new s(), this.titleFontSize = new s(), this.borderSize = new s(), this.borderColor = new s(), this.borderRadius = new s(), this.blur = new s(), this.fullscreen = new s(), this.shadowColor = new s(), this.shadowBlur = new s(), this.shadowX = new s(), this.shadowY = new s(), this.shadowTransparence = new s(), this.transparency = new s();
  }
};
v([
  b("VariableWrapper")
], m.prototype, "title", 2);
v([
  b("VariableWrapper")
], m.prototype, "backgroundColor", 2);
v([
  b("VariableWrapper")
], m.prototype, "backgroundColorTransparence", 2);
v([
  b("VariableWrapper")
], m.prototype, "titleColor", 2);
v([
  b("VariableWrapper")
], m.prototype, "padding", 2);
v([
  b("VariableWrapper")
], m.prototype, "titleFontSize", 2);
v([
  b("VariableWrapper")
], m.prototype, "borderSize", 2);
v([
  b("VariableWrapper")
], m.prototype, "borderColor", 2);
v([
  b("VariableWrapper")
], m.prototype, "borderRadius", 2);
v([
  b("VariableWrapper")
], m.prototype, "blur", 2);
v([
  b("VariableWrapper")
], m.prototype, "fullscreen", 2);
v([
  b("VariableWrapper")
], m.prototype, "shadowColor", 2);
v([
  b("VariableWrapper")
], m.prototype, "shadowBlur", 2);
v([
  b("VariableWrapper")
], m.prototype, "shadowX", 2);
v([
  b("VariableWrapper")
], m.prototype, "shadowY", 2);
v([
  b("VariableWrapper")
], m.prototype, "shadowTransparence", 2);
v([
  b("VariableWrapper")
], m.prototype, "transparency", 2);
m = v([
  de({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings" })
], m);
const Se = new m(), Ie = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WidgetWrapper: me,
  WidgetWrapperSettings: he,
  defaultConfig: Se
}, Symbol.toStringTag, { value: "Module" })), H = "org.eclipse.daanse.board.app.ui.vue.widget.wrapper", ze = "0.0.1-next.1";
async function $e(a) {
  const r = globalThis.__tsm__;
  if (!r)
    throw new Error(`${H}: tsm runtime is not initialized`);
  r.register(H, Ie, ze, "ui.vue.widget.wrapper"), await void 0;
}
async function Re(a) {
  await void 0;
}
export {
  me as WidgetWrapper,
  he as WidgetWrapperSettings,
  $e as activate,
  Re as deactivate,
  Se as defaultConfig
};
