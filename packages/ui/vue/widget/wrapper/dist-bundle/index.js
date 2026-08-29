(function(){var i="ui.vue.widget.wrapper",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".absolute[data-v-81a272a9]{position:absolute}.wrapper-container[data-v-81a272a9]{background-color:var(--v6a72535e);border-color:var(--v776491f8);border-width:var(--v0d088b26);border-style:solid;width:100%;height:100%;box-Shadow:var(--v17af03c3);border-radius:var(--v407e3708);backdrop-filter:blur(var(--blur-amount))}.sub[data-v-81a272a9]{border-radius:var(--v407e3708);padding:var(--bd9ee602)}.wrapper-container:hover .hover[data-v-81a272a9]{display:block}.wrapper-container .hover[data-v-81a272a9]{display:none}.hightz[data-v-81a272a9]{z-index:3000}.settings-container[data-v-affddfef]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.pad_bottom[data-v-affddfef]{padding-top:30px;padding-bottom:10px}\n";})();
import { defineComponent as q, useCssVars as se, computed as O, inject as J, ref as k, onUnmounted as oe, resolveComponent as B, createElementBlock as x, openBlock as U, normalizeStyle as H, createCommentVNode as $, createVNode as n, toDisplayString as W, Fragment as re, createElementVNode as L, withCtx as p, createBlock as Q, resolveDynamicComponent as le, createTextVNode as M, useModel as ie, unref as r } from "vue";
import { identifier as ne } from "org.eclipse.daanse.board.app.lib.api.widget";
import { VariableWrapper as o } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { VariableInput as N } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { BasicEFactory as ue, BasicEPackage as de, BasicEClass as ce, BasicEReference as C, EPackageRegistry as b, BasicEObject as ge } from "@emfts/core";
const he = {
  key: 0,
  class: "hover absolute top-[25px] right-0 flex justify-end z-3000 hightz"
}, pe = { key: 2 }, Ee = { style: { "text-align": "center", padding: "1rem" } }, Re = { style: { display: "flex", "justify-content": "flex-end", gap: "0.5rem" } }, we = /* @__PURE__ */ q({
  __name: "WidgetWrapper",
  props: {
    widget: {},
    editEnabled: { type: Boolean }
  },
  emits: ["openSettings", "removeWidget"],
  setup(u, { emit: e }) {
    se((g) => ({
      v6a72535e: I.value,
      v776491f8: s.value,
      v0d088b26: d.value + "px",
      v17af03c3: A.value,
      v407e3708: E.value + "px",
      bd9ee602: Z.value + "px"
    }));
    const a = e, l = J(ne), _ = k(0), y = l.onChange?.(() => {
      _.value++;
    });
    oe(() => y?.());
    const v = O(() => (_.value, l.getWidget(u.widget.type))), R = O(() => (_.value, l.getAllWidgets())), w = k(!1), i = k(null), m = (g) => {
      i.value = g, w.value = !0;
    }, T = () => {
      i.value && a("removeWidget", i.value), w.value = !1, i.value = null;
    }, D = (g) => {
      a("openSettings", g);
    }, S = {
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
    Object.keys(S).forEach((g) => {
      const h = u.widget.wrapperConfig[g];
      if (h == null)
        u.widget.wrapperConfig[g] = new o(S[g]);
      else if (typeof h != "object")
        u.widget.wrapperConfig[g] = new o(h);
      else if (!(h instanceof o))
        if ("value" in h) {
          const f = new o(h.value);
          "variable" in h && (f.variable = h.variable), u.widget.wrapperConfig[g] = f;
        } else
          u.widget.wrapperConfig[g] = new o(S[g]);
    });
    const A = O(() => {
      let g = "";
      const h = u.widget.wrapperConfig.shadowTransparence?.value;
      G(h) && (g = h.toString(16));
      let f = (u.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      return f.length == 3 && (f = f[0] + f[0] + f[1] + f[1] + f[2] + f[2]), `${u.widget.wrapperConfig.shadowX?.value}px ${u.widget.wrapperConfig.shadowY?.value}px ${u.widget.wrapperConfig.shadowBlur?.value}px #${f}${g}`;
    }), I = O(() => {
      let g = 255;
      const h = u.widget.wrapperConfig.backgroundColorTransparence?.value;
      G(h) && (g = h);
      const f = u.widget.wrapperConfig.transparency?.value;
      G(f) && (g = Math.round(g * (f / 255)));
      const V = u.widget.wrapperConfig.backgroundColor?.value;
      if (!V) return "var(--color-pane)";
      let P = V.replace("#", "");
      P.length == 3 && (P = P[0] + P[0] + P[1] + P[1] + P[2] + P[2]);
      const z = g < 255 ? g.toString(16).padStart(2, "0") : "";
      return `#${P}${z}`;
    }), s = O(() => u.widget.wrapperConfig.borderColor?.value || "var(--color-divider)"), d = O(() => u.widget.wrapperConfig.borderSize?.value || 0), E = O(() => u.widget.wrapperConfig.borderRadius?.value || 0), X = O(() => {
      const g = u.widget.wrapperConfig.transparency?.value;
      return G(g) ? g / 255 : 1;
    }), te = O(() => u.widget.wrapperConfig.titleFontSize?.value || 16), K = O(() => u.widget.wrapperConfig.titleColor?.value || "var(--color-divider)");
    O(() => {
      let g = (u.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      g.length == 3 && (g = g[0] + g[0] + g[1] + g[1] + g[2] + g[2]);
      const h = u.widget.wrapperConfig.shadowTransparence?.value;
      return g + (G(h) ? h.toString(16) : "");
    });
    function G(g) {
      const h = parseInt(g);
      return isNaN(h) ? !1 : h >= 0 && h <= 255;
    }
    const ae = O(() => {
      const g = u.widget.wrapperConfig.blur?.value;
      return G(g) ? g : "";
    }), Z = O(() => {
      console.log(u.widget.wrapperConfig.padding);
      const g = parseInt(u.widget.wrapperConfig.padding?.value);
      return isNaN(g) ? 0 : g;
    });
    return (g, h) => {
      const f = B("VaScrollContainer"), V = B("VaButton"), P = B("VaIcon"), z = B("VaModal");
      return U(), x("div", {
        class: "flex relative flex-col w-full h-full wrapper-container",
        style: H({ "--blur-amount": ae.value + "px", "--title-color": K.value })
      }, [
        u.widget.wrapperConfig.title?.value ? (U(), x("div", {
          key: 0,
          class: "font-semibold capitalize",
          style: H({
            fontSize: te.value + "px",
            color: K.value,
            padding: Z.value + "px",
            paddingBottom: 0,
            opacity: X.value
          })
        }, W(u.widget.wrapperConfig.title.value), 5)) : $("", !0),
        v.value ? (U(), x(re, { key: 1 }, [
          L("div", {
            class: "w-full h-full box-border cursor-pointer overflow-hidden sub",
            style: H({ position: "relative", opacity: X.value })
          }, [
            n(f, {
              color: "var(--color-outline)",
              vertical: "",
              horizontal: ""
            }, {
              default: p(() => [
                (U(), Q(le(R.value[u.widget.type].component), {
                  config: u.widget.config,
                  configv: u.widget.config,
                  "onUpdate:configv": h[0] || (h[0] = (F) => u.widget.config = F),
                  datasourceId: u.widget.config.datasourceId,
                  id: u.widget.uid || u.widget.id,
                  class: "widget_component"
                }, null, 40, ["config", "configv", "datasourceId", "id"]))
              ]),
              _: 1
            })
          ], 4),
          u.editEnabled ? (U(), x("div", he, [
            n(V, {
              class: "control-button",
              onClick: h[1] || (h[1] = (F) => D(u.widget.uid)),
              icon: "settings",
              size: "small"
            }),
            n(V, {
              class: "control-button",
              onClick: h[2] || (h[2] = (F) => m(u.widget.uid)),
              icon: "close",
              color: "danger",
              size: "small"
            })
          ])) : $("", !0)
        ], 64)) : (U(), x("div", pe, [
          L("p", null, "Widget type " + W(u.widget.type) + " is not registered.", 1)
        ])),
        n(z, {
          modelValue: w.value,
          "onUpdate:modelValue": h[5] || (h[5] = (F) => w.value = F),
          size: "small",
          "hide-default-actions": "",
          "overlay-opacity": "0.3"
        }, {
          footer: p(() => [
            L("div", Re, [
              n(V, {
                preset: "secondary",
                onClick: h[3] || (h[3] = (F) => {
                  w.value = !1, i.value = null;
                })
              }, {
                default: p(() => [...h[8] || (h[8] = [
                  M(" Abbrechen ", -1)
                ])]),
                _: 1
              }),
              n(V, {
                color: "danger",
                icon: "delete",
                onClick: h[4] || (h[4] = (F) => T())
              }, {
                default: p(() => [...h[9] || (h[9] = [
                  M(" Löschen ", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: p(() => [
            L("div", Ee, [
              n(P, {
                name: "warning",
                color: "danger",
                size: "2rem"
              }),
              h[6] || (h[6] = L("h5", { style: { margin: "0.5rem 0" } }, "Widget löschen", -1)),
              h[7] || (h[7] = L("p", null, "Möchtest du dieses Widget wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.", -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 4);
    };
  }
}), ee = (u, e) => {
  const a = u.__vccOpts || u;
  for (const [l, _] of e)
    a[l] = _;
  return a;
}, fe = /* @__PURE__ */ ee(we, [["__scopeId", "data-v-81a272a9"]]), Ce = { class: "settings-container" }, be = { class: "px-2" }, Te = { class: "px-2" }, Se = { class: "px-2" }, Ne = { class: "px-2" }, _e = { class: "px-2" }, me = { class: "px-2" }, ve = /* @__PURE__ */ q({
  __name: "WidgetWrapperSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(u) {
    const e = ie(u, "modelValue"), a = J("i18n"), l = a ? (w) => a.t("wrapper:" + w) : (w) => w, _ = k(!1), y = k(!1), v = O(() => y.value ? "#ffffff" : ""), R = (w, i) => {
      console.log("onValueChange", i), w({
        target: {
          value: i
        }
      });
    };
    return (w, i) => {
      const m = B("VaDivider"), T = B("va-input"), D = B("va-color-input"), S = B("VaCounter"), A = B("VaSlider"), I = B("va-collapse");
      return U(), Q(I, {
        modelValue: _.value,
        "onUpdate:modelValue": i[16] || (i[16] = (s) => _.value = s),
        header: "Widget wrapper settings",
        icon: "style"
      }, {
        default: p(() => [
          L("div", Ce, [
            n(m, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                L("span", be, W(r(l)("WidgetWrapper.title")), 1)
              ]),
              _: 1
            }),
            n(r(N), {
              modelValue: e.value.title,
              "onUpdate:modelValue": i[0] || (i[0] = (s) => e.value.title = s),
              label: r(l)("WidgetWrapper.label")
            }, {
              default: p(({ value: s, change: d }) => [
                n(T, {
                  "model-value": s,
                  onInput: d,
                  label: r(l)("WidgetWrapper.label")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(r(N), {
              modelValue: e.value.titleFontSize,
              "onUpdate:modelValue": i[1] || (i[1] = (s) => e.value.titleFontSize = s),
              label: r(l)("WidgetWrapper.fontSize")
            }, {
              default: p(({ value: s, change: d }) => [
                n(T, {
                  "model-value": s,
                  onInput: d,
                  label: r(l)("WidgetWrapper.fontSize")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(r(N), {
              modelValue: e.value.titleColor,
              "onUpdate:modelValue": i[2] || (i[2] = (s) => e.value.titleColor = s),
              label: r(l)("WidgetWrapper.fontColor")
            }, {
              default: p(({ value: s, change: d }) => [
                n(D, {
                  "model-value": s,
                  onInput: d,
                  label: r(l)("WidgetWrapper.fontColor")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(m, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                L("span", Te, W(r(l)("WidgetWrapper.padding")), 1)
              ]),
              _: 1
            }),
            n(r(N), {
              modelValue: e.value.padding,
              "onUpdate:modelValue": i[3] || (i[3] = (s) => e.value.padding = s),
              label: r(l)("WidgetWrapper.padding")
            }, {
              default: p(({ value: s, change: d }) => [
                n(A, {
                  labelColor: v.value,
                  stateful: "",
                  "model-value": s,
                  onChange: (E) => R(d, E),
                  label: r(l)("WidgetWrapper.padding"),
                  min: 0,
                  max: 20
                }, {
                  append: p(() => [
                    n(S, {
                      "model-value": s,
                      "onUpdate:modelValue": (E) => R(d, E),
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
            n(m, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                L("span", Se, W(r(l)("WidgetWrapper.background")), 1)
              ]),
              _: 1
            }),
            n(r(N), {
              modelValue: e.value.backgroundColor,
              "onUpdate:modelValue": i[4] || (i[4] = (s) => e.value.backgroundColor = s),
              label: r(l)("WidgetWrapper.backgroundColor")
            }, {
              default: p(({ value: s, change: d }) => [
                n(D, {
                  autofocus: "",
                  label: r(l)("WidgetWrapper.backgroundColor"),
                  class: "color-fill",
                  "model-value": s,
                  onInput: d
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(r(N), {
              modelValue: e.value.backgroundColorTransparence,
              "onUpdate:modelValue": i[5] || (i[5] = (s) => e.value.backgroundColorTransparence = s),
              label: r(l)("WidgetWrapper.backgroundColorTransparence")
            }, {
              default: p(({ value: s, change: d }) => [
                n(A, {
                  "model-value": s,
                  stateful: "",
                  onChange: (E) => R(d, E),
                  label: r(l)("WidgetWrapper.backgroundColorTrancparency"),
                  labelColor: v.value,
                  min: 0,
                  max: 255
                }, {
                  append: p(() => [
                    n(S, {
                      "model-value": s,
                      "onUpdate:modelValue": (E) => R(d, E),
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
            n(r(N), {
              modelValue: e.value.blur,
              "onUpdate:modelValue": i[6] || (i[6] = (s) => e.value.blur = s),
              label: r(l)("WidgetWrapper.blur")
            }, {
              default: p(({ value: s, change: d }) => [
                n(A, {
                  "model-value": s,
                  stateful: "",
                  onChange: (E) => R(d, E),
                  label: r(l)("WidgetWrapper.blur"),
                  labelColor: v.value,
                  min: 0,
                  max: 10
                }, {
                  append: p(() => [
                    n(S, {
                      "model-value": s,
                      "onUpdate:modelValue": (E) => R(d, E),
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
            n(m, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                L("span", Ne, W(r(l)("WidgetWrapper.border")), 1)
              ]),
              _: 1
            }),
            n(r(N), {
              modelValue: e.value.borderSize,
              "onUpdate:modelValue": i[7] || (i[7] = (s) => e.value.borderSize = s),
              label: r(l)("WidgetWrapper.borderSize")
            }, {
              default: p(({ value: s, change: d }) => [
                n(T, {
                  "model-value": s,
                  onInput: d,
                  label: r(l)("WidgetWrapper.borderSize")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(r(N), {
              modelValue: e.value.borderColor,
              "onUpdate:modelValue": i[8] || (i[8] = (s) => e.value.borderColor = s),
              label: r(l)("WidgetWrapper.borderColor")
            }, {
              default: p(({ value: s, change: d }) => [
                n(D, {
                  autofocus: "",
                  label: r(l)("WidgetWrapper.borderColor"),
                  class: "color-fill",
                  "model-value": s,
                  onInput: d
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(r(N), {
              modelValue: e.value.borderRadius,
              "onUpdate:modelValue": i[9] || (i[9] = (s) => e.value.borderRadius = s),
              label: r(l)("WidgetWrapper.borderRadius")
            }, {
              default: p(({ value: s, change: d }) => [
                n(T, {
                  "model-value": s,
                  onInput: d,
                  label: r(l)("WidgetWrapper.borderRadius")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(m, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                L("span", _e, W(r(l)("WidgetWrapper.shadow")), 1)
              ]),
              _: 1
            }),
            n(r(N), {
              modelValue: e.value.shadowX,
              "onUpdate:modelValue": i[10] || (i[10] = (s) => e.value.shadowX = s),
              label: r(l)("WidgetWrapper.shadowX")
            }, {
              default: p(({ value: s, change: d }) => [
                n(T, {
                  "model-value": s,
                  onInput: d,
                  label: r(l)("WidgetWrapper.shadowX")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(r(N), {
              modelValue: e.value.shadowY,
              "onUpdate:modelValue": i[11] || (i[11] = (s) => e.value.shadowY = s),
              label: r(l)("WidgetWrapper.shadowY")
            }, {
              default: p(({ value: s, change: d }) => [
                n(T, {
                  "model-value": s,
                  onInput: d,
                  label: r(l)("WidgetWrapper.shadowY")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(r(N), {
              modelValue: e.value.shadowBlur,
              "onUpdate:modelValue": i[12] || (i[12] = (s) => e.value.shadowBlur = s),
              label: r(l)("WidgetWrapper.shadowBlur")
            }, {
              default: p(({ value: s, change: d }) => [
                n(T, {
                  "model-value": s,
                  onInput: d,
                  label: r(l)("WidgetWrapper.shadowBlur")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(r(N), {
              modelValue: e.value.shadowColor,
              "onUpdate:modelValue": i[13] || (i[13] = (s) => e.value.shadowColor = s),
              label: r(l)("WidgetWrapper.shadowColor")
            }, {
              default: p(({ value: s, change: d }) => [
                n(D, {
                  autofocus: "",
                  label: r(l)("WidgetWrapper.shadowColor"),
                  class: "color-fill",
                  "model-value": s,
                  onInput: d
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            n(r(N), {
              modelValue: e.value.shadowTransparence,
              "onUpdate:modelValue": i[14] || (i[14] = (s) => e.value.shadowTransparence = s),
              label: r(l)("WidgetWrapper.shadowTransparence")
            }, {
              default: p(({ value: s, change: d }) => [
                n(A, {
                  labelColor: v.value,
                  stateful: "",
                  "model-value": s,
                  onChange: (E) => R(d, E),
                  label: r(l)("WidgetWrapper.shadowTransparence"),
                  min: 0,
                  max: 255
                }, {
                  append: p(() => [
                    n(S, {
                      "model-value": s,
                      "onUpdate:modelValue": (E) => R(d, E),
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
            n(m, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                L("span", me, W(r(l)("WidgetWrapper.transparence")), 1)
              ]),
              _: 1
            }),
            n(r(N), {
              modelValue: e.value.transparency,
              "onUpdate:modelValue": i[15] || (i[15] = (s) => e.value.transparency = s),
              label: r(l)("WidgetWrapper.transparency")
            }, {
              default: p(({ value: s, change: d }) => [
                n(A, {
                  labelColor: v.value,
                  stateful: "",
                  "model-value": s,
                  onChange: (E) => R(d, E),
                  label: r(l)("WidgetWrapper.transparency"),
                  min: 0,
                  max: 255,
                  step: 1
                }, {
                  append: p(() => [
                    n(S, {
                      "model-value": s,
                      "onUpdate:modelValue": (E) => R(d, E),
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
}), Ae = /* @__PURE__ */ ee(ve, [["__scopeId", "data-v-affddfef"]]);
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
    const a = new C();
    a.setContainment(!1), a.setName("title"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), c.Literals.WRAPPER_SETTINGS__TITLE = a;
    const l = new C();
    l.setContainment(!1), l.setName("backgroundColor"), l.setLowerBound(0), l.setUpperBound(1), e.getEStructuralFeatures().push(l), c.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR = l;
    const _ = new C();
    _.setContainment(!1), _.setName("backgroundColorTransparence"), _.setLowerBound(0), _.setUpperBound(1), e.getEStructuralFeatures().push(_), c.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR_TRANSPARENCE = _;
    const y = new C();
    y.setContainment(!1), y.setName("titleColor"), y.setLowerBound(0), y.setUpperBound(1), e.getEStructuralFeatures().push(y), c.Literals.WRAPPER_SETTINGS__TITLE_COLOR = y;
    const v = new C();
    v.setContainment(!1), v.setName("padding"), v.setLowerBound(0), v.setUpperBound(1), e.getEStructuralFeatures().push(v), c.Literals.WRAPPER_SETTINGS__PADDING = v;
    const R = new C();
    R.setContainment(!1), R.setName("titleFontSize"), R.setLowerBound(0), R.setUpperBound(1), e.getEStructuralFeatures().push(R), c.Literals.WRAPPER_SETTINGS__TITLE_FONT_SIZE = R;
    const w = new C();
    w.setContainment(!1), w.setName("borderSize"), w.setLowerBound(0), w.setUpperBound(1), e.getEStructuralFeatures().push(w), c.Literals.WRAPPER_SETTINGS__BORDER_SIZE = w;
    const i = new C();
    i.setContainment(!1), i.setName("borderColor"), i.setLowerBound(0), i.setUpperBound(1), e.getEStructuralFeatures().push(i), c.Literals.WRAPPER_SETTINGS__BORDER_COLOR = i;
    const m = new C();
    m.setContainment(!1), m.setName("borderRadius"), m.setLowerBound(0), m.setUpperBound(1), e.getEStructuralFeatures().push(m), c.Literals.WRAPPER_SETTINGS__BORDER_RADIUS = m;
    const T = new C();
    T.setContainment(!1), T.setName("blur"), T.setLowerBound(0), T.setUpperBound(1), e.getEStructuralFeatures().push(T), c.Literals.WRAPPER_SETTINGS__BLUR = T;
    const D = new C();
    D.setContainment(!1), D.setName("fullscreen"), D.setLowerBound(0), D.setUpperBound(1), e.getEStructuralFeatures().push(D), c.Literals.WRAPPER_SETTINGS__FULLSCREEN = D;
    const S = new C();
    S.setContainment(!1), S.setName("shadowColor"), S.setLowerBound(0), S.setUpperBound(1), e.getEStructuralFeatures().push(S), c.Literals.WRAPPER_SETTINGS__SHADOW_COLOR = S;
    const A = new C();
    A.setContainment(!1), A.setName("shadowBlur"), A.setLowerBound(0), A.setUpperBound(1), e.getEStructuralFeatures().push(A), c.Literals.WRAPPER_SETTINGS__SHADOW_BLUR = A;
    const I = new C();
    I.setContainment(!1), I.setName("shadowX"), I.setLowerBound(0), I.setUpperBound(1), e.getEStructuralFeatures().push(I), c.Literals.WRAPPER_SETTINGS__SHADOW_X = I;
    const s = new C();
    s.setContainment(!1), s.setName("shadowY"), s.setLowerBound(0), s.setUpperBound(1), e.getEStructuralFeatures().push(s), c.Literals.WRAPPER_SETTINGS__SHADOW_Y = s;
    const d = new C();
    d.setContainment(!1), d.setName("shadowTransparence"), d.setLowerBound(0), d.setUpperBound(1), e.getEStructuralFeatures().push(d), c.Literals.WRAPPER_SETTINGS__SHADOW_TRANSPARENCE = d;
    const E = new C();
    E.setContainment(!1), E.setName("transparency"), E.setLowerBound(0), E.setUpperBound(1), e.getEStructuralFeatures().push(E), c.Literals.WRAPPER_SETTINGS__TRANSPARENCY = E, c.Literals.WRAPPER_SETTINGS__TITLE.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR_TRANSPARENCE.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__TITLE_COLOR.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__PADDING.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__TITLE_FONT_SIZE.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BORDER_SIZE.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BORDER_COLOR.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BORDER_RADIUS.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BLUR.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__FULLSCREEN.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__SHADOW_COLOR.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__SHADOW_BLUR.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__SHADOW_X.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__SHADOW_Y.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__SHADOW_TRANSPARENCE.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__TRANSPARENCY.setEType(b.INSTANCE.getEPackage("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class t extends ge {
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
const Oe = `<?xml version="1.0" encoding="UTF-8"?>
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

    <fields xsi:type="uimodel:GroupWidget" name="titleGroup" layout="VERTICAL" label="Titel">
      <fields xsi:type="uimodel:InputWidget"
          name="title"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/title"
          label="Text"
          placeholder="Ohne Titel"/>
      <fields xsi:type="uimodel:InputWidget"
          name="titleFontSize"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/titleFontSize"
          label="Schriftgröße"/>
      <fields xsi:type="uimodel:InputWidget"
          name="titleColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/titleColor"
          label="Schriftfarbe"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="surfaceGroup" layout="VERTICAL" label="Fläche">
      <fields xsi:type="uimodel:InputWidget"
          name="backgroundColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/backgroundColor"
          label="Hintergrund"/>
      <fields xsi:type="uimodel:InputWidget"
          name="backgroundColorTransparence"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/backgroundColorTransparence"
          label="Deckkraft"/>
      <fields xsi:type="uimodel:InputWidget"
          name="transparency"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/transparency"
          label="Gesamtdeckkraft"/>
      <fields xsi:type="uimodel:InputWidget"
          name="blur"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/blur"
          label="Weichzeichnen"/>
      <fields xsi:type="uimodel:InputWidget"
          name="padding"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/padding"
          label="Innenabstand"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="borderGroup" layout="VERTICAL" label="Rand">
      <fields xsi:type="uimodel:InputWidget"
          name="borderSize"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/borderSize"
          label="Stärke"/>
      <fields xsi:type="uimodel:InputWidget"
          name="borderColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/borderColor"
          label="Farbe"/>
      <fields xsi:type="uimodel:InputWidget"
          name="borderRadius"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/borderRadius"
          label="Eckenradius"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="shadowGroup" layout="VERTICAL" label="Schatten">
      <fields xsi:type="uimodel:InputWidget"
          name="shadowColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/shadowColor"
          label="Farbe"/>
      <fields xsi:type="uimodel:InputWidget"
          name="shadowBlur"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/shadowBlur"
          label="Weichheit"/>
      <fields xsi:type="uimodel:InputWidget"
          name="shadowX"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/shadowX"
          label="Versatz X"/>
      <fields xsi:type="uimodel:InputWidget"
          name="shadowY"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/shadowY"
          label="Versatz Y"/>
      <fields xsi:type="uimodel:InputWidget"
          name="shadowTransparence"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/shadowTransparence"
          label="Deckkraft"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="behaviourGroup" layout="VERTICAL" label="Verhalten">
      <fields xsi:type="uimodel:CheckboxWidget"
          name="fullscreen"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/fullscreen"
          label="Vollbild erlauben"/>
    </fields>

  </components>
</uimodel:UIModel>
`;
c.eINSTANCE;
const De = new t(), Le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WidgetWrapper: fe,
  WidgetWrapperSettings: Ae,
  WrapperSettingsImpl: t,
  WrapperSettingsPackage: c,
  defaultConfig: De,
  wrapperSettingsFormXmi: Oe
}, Symbol.toStringTag, { value: "Module" })), j = "org.eclipse.daanse.board.app.ui.vue.widget.wrapper", Pe = "0.0.1-next.1";
async function We(u) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${j}: tsm runtime is not initialized`);
  e.register(j, Le, Pe, "ui.vue.widget.wrapper"), await void 0;
}
async function Ue(u) {
  await void 0;
}
export {
  fe as WidgetWrapper,
  Ae as WidgetWrapperSettings,
  t as WrapperSettingsImpl,
  c as WrapperSettingsPackage,
  We as activate,
  Ue as deactivate,
  De as defaultConfig,
  Oe as wrapperSettingsFormXmi
};
