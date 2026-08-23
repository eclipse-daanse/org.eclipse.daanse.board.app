(function(){var i="ui.vue.widget.wrapper",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".absolute[data-v-b0146fb0]{position:absolute}.wrapper-container[data-v-b0146fb0]{background-color:var(--v511583c2);border-color:var(--dd208b5c);border-width:var(--v9414e98a);border-style:solid;width:100%;height:100%;box-Shadow:var(--v0714fade);border-radius:var(--v6509b9ca);backdrop-filter:blur(var(--blur-amount))}.sub[data-v-b0146fb0]{border-radius:var(--v6509b9ca);padding:var(--v5daa5dcd)}.wrapper-container:hover .hover[data-v-b0146fb0]{display:block}.wrapper-container .hover[data-v-b0146fb0]{display:none}.hightz[data-v-b0146fb0]{z-index:3000}.settings-container[data-v-b90249f7]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.pad_bottom[data-v-b90249f7]{padding-top:30px;padding-bottom:10px}\n";})();
import { defineComponent as J, useCssVars as le, computed as C, inject as K, ref as O, onUnmounted as ae, resolveComponent as I, createElementBlock as N, openBlock as R, normalizeStyle as X, createCommentVNode as q, createVNode as o, toDisplayString as k, Fragment as oe, createElementVNode as V, withCtx as p, createBlock as Q, resolveDynamicComponent as te, createTextVNode as G, useModel as re, unref as l } from "vue";
import { identifier as ne } from "org.eclipse.daanse.board.app.lib.api.widget";
import { VariableWrapper as s } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { VariableInput as w } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { Reference as v, ModelClass as de } from "org.eclipse.daanse.board.app.lib.annotations";
const ie = {
  key: 0,
  class: "hover absolute top-[25px] right-0 flex justify-end bg-white z-3000 hightz"
}, ue = { key: 2 }, pe = { style: { "text-align": "center", padding: "1rem" } }, se = { style: { display: "flex", "justify-content": "flex-end", gap: "0.5rem" } }, ge = /* @__PURE__ */ J({
  __name: "WidgetWrapper",
  props: {
    widget: {},
    editEnabled: { type: Boolean }
  },
  emits: ["openSettings", "removeWidget"],
  setup(a, { emit: r }) {
    le((d) => ({
      v511583c2: Y.value,
      dd208b5c: e.value,
      v9414e98a: u.value + "px",
      v0714fade: B.value,
      v6509b9ca: g.value + "px",
      v5daa5dcd: P.value + "px"
    }));
    const h = r, t = K(ne), f = O(0), T = t.onChange?.(() => {
      f.value++;
    });
    ae(() => T?.());
    const S = C(() => (f.value, t.getWidget(a.widget.type))), y = C(() => (f.value, t.getAllWidgets())), x = O(!1), n = O(null), F = (d) => {
      n.value = d, x.value = !0;
    }, z = () => {
      n.value && h("removeWidget", n.value), x.value = !1, n.value = null;
    }, D = (d) => {
      h("openSettings", d);
    }, U = {
      title: "",
      backgroundColor: "#fff",
      backgroundColorTransparence: 255,
      titleColor: "#7c7c7c",
      padding: 0,
      titleFontSize: 15,
      borderSize: 0,
      borderColor: "#ccc",
      borderRadius: 15,
      blur: 0,
      fullscreen: !1,
      shadowColor: "#333",
      shadowBlur: 12,
      shadowX: 5,
      shadowY: 5,
      shadowTransparence: 25,
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
    const B = C(() => {
      let d = "";
      const i = a.widget.wrapperConfig.shadowTransparence?.value;
      j(i) && (d = i.toString(16));
      let c = (a.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      return c.length == 3 && (c = c[0] + c[0] + c[1] + c[1] + c[2] + c[2]), `${a.widget.wrapperConfig.shadowX?.value}px ${a.widget.wrapperConfig.shadowY?.value}px ${a.widget.wrapperConfig.shadowBlur?.value}px #${c}${d}`;
    }), Y = C(() => {
      let d = 255;
      const i = a.widget.wrapperConfig.backgroundColorTransparence?.value;
      j(i) && (d = i);
      const c = a.widget.wrapperConfig.transparency?.value;
      j(c) && (d = Math.round(d * (c / 255)));
      let W = (a.widget.wrapperConfig.backgroundColor?.value || "#FFFFFF").replace(
        "#",
        ""
      );
      W.length == 3 && (W = W[0] + W[0] + W[1] + W[1] + W[2] + W[2]);
      const M = d < 255 ? d.toString(16).padStart(2, "0") : "";
      return `#${W}${M}`;
    }), e = C(() => a.widget.wrapperConfig.borderColor?.value || "#000000"), u = C(() => a.widget.wrapperConfig.borderSize?.value || 0), g = C(() => a.widget.wrapperConfig.borderRadius?.value || 0), E = C(() => {
      const d = a.widget.wrapperConfig.transparency?.value;
      return j(d) ? d / 255 : 1;
    }), _ = C(() => a.widget.wrapperConfig.titleFontSize?.value || 16), A = C(() => a.widget.wrapperConfig.titleColor?.value || "#000000");
    C(() => {
      let d = (a.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      d.length == 3 && (d = d[0] + d[0] + d[1] + d[1] + d[2] + d[2]);
      const i = a.widget.wrapperConfig.shadowTransparence?.value;
      return d + (j(i) ? i.toString(16) : "");
    });
    function j(d) {
      const i = parseInt(d);
      return isNaN(i) ? !1 : i >= 0 && i <= 255;
    }
    const ee = C(() => {
      const d = a.widget.wrapperConfig.blur?.value;
      return j(d) ? d : "";
    }), P = C(() => {
      console.log(a.widget.wrapperConfig.padding);
      const d = parseInt(a.widget.wrapperConfig.padding?.value);
      return isNaN(d) ? 0 : d;
    });
    return (d, i) => {
      const c = I("VaScrollContainer"), W = I("VaButton"), M = I("VaIcon"), L = I("VaModal");
      return R(), N("div", {
        class: "flex relative flex-col w-full h-full wrapper-container",
        style: X({ "--blur-amount": ee.value + "px", "--title-color": A.value })
      }, [
        a.widget.wrapperConfig.title?.value ? (R(), N("div", {
          key: 0,
          class: "font-semibold capitalize",
          style: X({
            fontSize: _.value + "px",
            color: A.value,
            padding: P.value + "px",
            paddingBottom: 0,
            opacity: E.value
          })
        }, k(a.widget.wrapperConfig.title.value), 5)) : q("", !0),
        S.value ? (R(), N(oe, { key: 1 }, [
          V("div", {
            class: "w-full h-full box-border cursor-pointer overflow-hidden sub",
            style: X({ position: "relative", opacity: E.value })
          }, [
            o(c, {
              color: "#cbcbcb",
              vertical: "",
              horizontal: ""
            }, {
              default: p(() => [
                (R(), Q(te(y.value[a.widget.type].component), {
                  config: a.widget.config,
                  configv: a.widget.config,
                  "onUpdate:configv": i[0] || (i[0] = ($) => a.widget.config = $),
                  datasourceId: a.widget.config.datasourceId,
                  id: a.widget.uid || a.widget.id,
                  class: "widget_component"
                }, null, 40, ["config", "configv", "datasourceId", "id"]))
              ]),
              _: 1
            })
          ], 4),
          a.editEnabled ? (R(), N("div", ie, [
            o(W, {
              class: "control-button",
              onClick: i[1] || (i[1] = ($) => D(a.widget.uid)),
              icon: "settings",
              size: "small"
            }),
            o(W, {
              class: "control-button",
              onClick: i[2] || (i[2] = ($) => F(a.widget.uid)),
              icon: "close",
              color: "danger",
              size: "small"
            })
          ])) : q("", !0)
        ], 64)) : (R(), N("div", ue, [
          V("p", null, "Widget type " + k(a.widget.type) + " is not registered.", 1)
        ])),
        o(L, {
          modelValue: x.value,
          "onUpdate:modelValue": i[5] || (i[5] = ($) => x.value = $),
          size: "small",
          "hide-default-actions": "",
          "overlay-opacity": "0.3"
        }, {
          footer: p(() => [
            V("div", se, [
              o(W, {
                preset: "secondary",
                onClick: i[3] || (i[3] = ($) => {
                  x.value = !1, n.value = null;
                })
              }, {
                default: p(() => [...i[8] || (i[8] = [
                  G(" Abbrechen ", -1)
                ])]),
                _: 1
              }),
              o(W, {
                color: "danger",
                icon: "delete",
                onClick: i[4] || (i[4] = ($) => z())
              }, {
                default: p(() => [...i[9] || (i[9] = [
                  G(" Löschen ", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: p(() => [
            V("div", pe, [
              o(M, {
                name: "warning",
                color: "danger",
                size: "2rem"
              }),
              i[6] || (i[6] = V("h5", { style: { margin: "0.5rem 0" } }, "Widget löschen", -1)),
              i[7] || (i[7] = V("p", null, "Möchtest du dieses Widget wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.", -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 4);
    };
  }
}), Z = (a, r) => {
  const h = a.__vccOpts || a;
  for (const [t, f] of r)
    h[t] = f;
  return h;
}, me = /* @__PURE__ */ Z(ge, [["__scopeId", "data-v-b0146fb0"]]), be = { class: "settings-container" }, ce = { class: "px-2" }, ve = { class: "px-2" }, fe = { class: "px-2" }, we = { class: "px-2" }, We = { class: "px-2" }, Ce = { class: "px-2" }, Ve = /* @__PURE__ */ J({
  __name: "WidgetWrapperSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(a) {
    const r = re(a, "modelValue"), h = K("i18n"), t = h ? (x) => h.t("wrapper:" + x) : (x) => x, f = O(!1), T = O(!1), S = C(() => T.value ? "#ffffff" : ""), y = (x, n) => {
      console.log("onValueChange", n), x({
        target: {
          value: n
        }
      });
    };
    return (x, n) => {
      const F = I("VaDivider"), z = I("va-input"), D = I("va-color-input"), U = I("VaCounter"), B = I("VaSlider"), Y = I("va-collapse");
      return R(), Q(Y, {
        modelValue: f.value,
        "onUpdate:modelValue": n[16] || (n[16] = (e) => f.value = e),
        header: "Widget wrapper settings",
        icon: "style"
      }, {
        default: p(() => [
          V("div", be, [
            o(F, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                V("span", ce, k(l(t)("WidgetWrapper.title")), 1)
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
                o(D, {
                  "model-value": e,
                  onInput: u,
                  label: l(t)("WidgetWrapper.fontColor")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            o(F, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                V("span", ve, k(l(t)("WidgetWrapper.padding")), 1)
              ]),
              _: 1
            }),
            o(l(w), {
              modelValue: r.value.padding,
              "onUpdate:modelValue": n[3] || (n[3] = (e) => r.value.padding = e),
              label: l(t)("WidgetWrapper.padding")
            }, {
              default: p(({ value: e, change: u }) => [
                o(B, {
                  labelColor: S.value,
                  stateful: "",
                  "model-value": e,
                  onChange: (g) => y(u, g),
                  label: l(t)("WidgetWrapper.padding"),
                  min: 0,
                  max: 20
                }, {
                  append: p(() => [
                    o(U, {
                      "model-value": e,
                      "onUpdate:modelValue": (g) => y(u, g),
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
            o(F, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                V("span", fe, k(l(t)("WidgetWrapper.background")), 1)
              ]),
              _: 1
            }),
            o(l(w), {
              modelValue: r.value.backgroundColor,
              "onUpdate:modelValue": n[4] || (n[4] = (e) => r.value.backgroundColor = e),
              label: l(t)("WidgetWrapper.backgroundColor")
            }, {
              default: p(({ value: e, change: u }) => [
                o(D, {
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
                o(B, {
                  "model-value": e,
                  stateful: "",
                  onChange: (g) => y(u, g),
                  label: l(t)("WidgetWrapper.backgroundColorTrancparency"),
                  labelColor: S.value,
                  min: 0,
                  max: 255
                }, {
                  append: p(() => [
                    o(U, {
                      "model-value": e,
                      "onUpdate:modelValue": (g) => y(u, g),
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
                o(B, {
                  "model-value": e,
                  stateful: "",
                  onChange: (g) => y(u, g),
                  label: l(t)("WidgetWrapper.blur"),
                  labelColor: S.value,
                  min: 0,
                  max: 10
                }, {
                  append: p(() => [
                    o(U, {
                      "model-value": e,
                      "onUpdate:modelValue": (g) => y(u, g),
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
            o(F, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                V("span", we, k(l(t)("WidgetWrapper.border")), 1)
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
                o(D, {
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
            o(F, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                V("span", We, k(l(t)("WidgetWrapper.shadow")), 1)
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
                o(D, {
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
                o(B, {
                  labelColor: S.value,
                  stateful: "",
                  "model-value": e,
                  onChange: (g) => y(u, g),
                  label: l(t)("WidgetWrapper.shadowTransparence"),
                  min: 0,
                  max: 255
                }, {
                  append: p(() => [
                    o(U, {
                      "model-value": e,
                      "onUpdate:modelValue": (g) => y(u, g),
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
            o(F, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                V("span", Ce, k(l(t)("WidgetWrapper.transparence")), 1)
              ]),
              _: 1
            }),
            o(l(w), {
              modelValue: r.value.transparency,
              "onUpdate:modelValue": n[15] || (n[15] = (e) => r.value.transparency = e),
              label: l(t)("WidgetWrapper.transparency")
            }, {
              default: p(({ value: e, change: u }) => [
                o(B, {
                  labelColor: S.value,
                  stateful: "",
                  "model-value": e,
                  onChange: (g) => y(u, g),
                  label: l(t)("WidgetWrapper.transparency"),
                  min: 0,
                  max: 255,
                  step: 1
                }, {
                  append: p(() => [
                    o(U, {
                      "model-value": e,
                      "onUpdate:modelValue": (g) => y(u, g),
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
var ye = Object.defineProperty, xe = Object.getOwnPropertyDescriptor, b = (a, r, h, t) => {
  for (var f = t > 1 ? void 0 : t ? xe(r, h) : r, T = a.length - 1, S; T >= 0; T--)
    (S = a[T]) && (f = (t ? S(r, h, f) : S(f)) || f);
  return t && f && ye(r, h, f), f;
};
let m = class {
  constructor() {
    this.title = new s(), this.backgroundColor = new s(), this.backgroundColorTransparence = new s(), this.titleColor = new s(), this.padding = new s(), this.titleFontSize = new s(), this.borderSize = new s(), this.borderColor = new s(), this.borderRadius = new s(), this.blur = new s(), this.fullscreen = new s(), this.shadowColor = new s(), this.shadowBlur = new s(), this.shadowX = new s(), this.shadowY = new s(), this.shadowTransparence = new s(), this.transparency = new s();
  }
};
b([
  v("VariableWrapper")
], m.prototype, "title", 2);
b([
  v("VariableWrapper")
], m.prototype, "backgroundColor", 2);
b([
  v("VariableWrapper")
], m.prototype, "backgroundColorTransparence", 2);
b([
  v("VariableWrapper")
], m.prototype, "titleColor", 2);
b([
  v("VariableWrapper")
], m.prototype, "padding", 2);
b([
  v("VariableWrapper")
], m.prototype, "titleFontSize", 2);
b([
  v("VariableWrapper")
], m.prototype, "borderSize", 2);
b([
  v("VariableWrapper")
], m.prototype, "borderColor", 2);
b([
  v("VariableWrapper")
], m.prototype, "borderRadius", 2);
b([
  v("VariableWrapper")
], m.prototype, "blur", 2);
b([
  v("VariableWrapper")
], m.prototype, "fullscreen", 2);
b([
  v("VariableWrapper")
], m.prototype, "shadowColor", 2);
b([
  v("VariableWrapper")
], m.prototype, "shadowBlur", 2);
b([
  v("VariableWrapper")
], m.prototype, "shadowX", 2);
b([
  v("VariableWrapper")
], m.prototype, "shadowY", 2);
b([
  v("VariableWrapper")
], m.prototype, "shadowTransparence", 2);
b([
  v("VariableWrapper")
], m.prototype, "transparency", 2);
m = b([
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
