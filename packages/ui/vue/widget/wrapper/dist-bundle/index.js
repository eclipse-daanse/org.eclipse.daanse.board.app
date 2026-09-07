(function(){var i="ui.vue.widget.wrapper",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".absolute[data-v-a1cdbc32]{position:absolute}.wrapper-container[data-v-a1cdbc32]{background-color:var(--v360f3c5d);border-color:var(--b35f9fe0);border-width:var(--v1eca3a79);border-style:solid;width:100%;height:100%;box-Shadow:var(--v24576062);border-radius:var(--v2920dcf0);backdrop-filter:blur(var(--blur-amount))}.sub[data-v-a1cdbc32]{border-radius:var(--v2920dcf0);padding:var(--v7301e5ea)}.actions[data-v-a1cdbc32]{position:absolute;inset:0;z-index:3000;display:flex;align-items:center;justify-content:center;border-radius:inherit;background:color-mix(in srgb,var(--color-bg, #121820) 70%,transparent);opacity:0;transition:opacity .12s ease;pointer-events:none}.wrapper-container:hover .actions[data-v-a1cdbc32],.actions[data-v-a1cdbc32]:focus-within{opacity:1}.actions__row[data-v-a1cdbc32]{display:flex;flex-wrap:wrap;justify-content:center;gap:2px;max-width:100%;padding:0 4px;margin-bottom:6%}.action[data-v-a1cdbc32]{pointer-events:auto;position:relative;display:flex;align-items:center;justify-content:center;width:34px;height:34px;border:1px solid transparent;border-radius:var(--radius-md, 4px);background:transparent;color:var(--color-dim, #8b98a8);font:inherit;cursor:pointer;transition:color .1s ease,background-color .1s ease,border-color .1s ease}.action[data-v-a1cdbc32]:hover,.action[data-v-a1cdbc32]:focus-visible{color:var(--color-fg, #e6edf5);background:color-mix(in srgb,var(--color-pane, #1a222c) 88%,transparent);border-color:var(--color-divider, #2b3644)}.action[data-v-a1cdbc32]:focus-visible{outline:2px solid var(--color-accent, #4fa3d1);outline-offset:1px}.action--danger[data-v-a1cdbc32]:hover,.action--danger[data-v-a1cdbc32]:focus-visible{color:var(--color-err, #d1584f);border-color:color-mix(in srgb,var(--color-err, #d1584f) 40%,transparent)}.action__icon[data-v-a1cdbc32]{font-size:22px}.action__label[data-v-a1cdbc32]{position:absolute;top:calc(100% + 2px);left:50%;transform:translate(-50%);padding:2px 6px;border-radius:var(--radius-sm, 3px);background:var(--color-raised, #232d3a);color:var(--color-fg, #e6edf5);font-size:11px;line-height:1.4;letter-spacing:.01em;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity 90ms ease}.action:hover .action__label[data-v-a1cdbc32],.action:focus-visible .action__label[data-v-a1cdbc32]{opacity:1}.settings-container[data-v-cdb0042e]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.pad_bottom[data-v-cdb0042e]{padding-top:30px;padding-bottom:10px}\n";})();
import { defineComponent as J, useCssVars as le, computed as v, inject as Q, ref as k, onUnmounted as ie, resolveComponent as F, createElementBlock as U, openBlock as W, normalizeStyle as H, createCommentVNode as Z, createVNode as u, toDisplayString as I, Fragment as M, createElementVNode as O, withCtx as p, createBlock as ee, resolveDynamicComponent as ne, renderList as ue, withModifiers as de, normalizeClass as ce, createTextVNode as j, useModel as he, unref as o } from "vue";
import { identifier as ge } from "org.eclipse.daanse.board.app.lib.api.widget";
import { VariableWrapper as r } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { VariableInput as S } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { BasicEFactory as pe, BasicEPackage as Re, EPackageRegistry as te, BasicEClass as Ee, BasicEReference as f, BasicEObject as be } from "@emfts/core";
const we = {
  key: 0,
  class: "actions",
  "aria-hidden": "false"
}, fe = { class: "actions__row" }, Ce = ["title", "onClick"], Te = { class: "action__label" }, me = { key: 2 }, Se = { style: { "text-align": "center", padding: "1rem" } }, _e = { style: { display: "flex", "justify-content": "flex-end", gap: "0.5rem" } }, Ne = /* @__PURE__ */ J({
  __name: "WidgetWrapper",
  props: {
    widget: {},
    editEnabled: { type: Boolean },
    extraActions: {}
  },
  emits: ["openSettings", "removeWidget"],
  setup(i, { emit: e }) {
    le((h) => ({
      v360f3c5d: s.value,
      b35f9fe0: d.value,
      v1eca3a79: R.value + "px",
      v24576062: V.value,
      v2920dcf0: se.value + "px",
      v7301e5ea: K.value + "px"
    }));
    const a = e, l = Q(ge), _ = k(0), B = l.onChange?.(() => {
      _.value++;
    });
    ie(() => B?.());
    const A = v(() => (_.value, l.getWidget(i.widget.type))), E = v(() => (_.value, l.getAllWidgets())), b = k(!1), n = k(null), N = (h) => {
      n.value = h, b.value = !0;
    }, T = () => {
      n.value && a("removeWidget", n.value), b.value = !1, n.value = null;
    }, L = (h) => {
      a("openSettings", h);
    }, D = v(() => [
      {
        id: "settings",
        icon: "settings",
        label: "Einstellungen",
        run: () => L(i.widget.uid)
      },
      ...i.extraActions ?? [],
      {
        id: "delete",
        icon: "delete",
        label: "Löschen",
        danger: !0,
        run: () => N(i.widget.uid)
      }
    ]), m = {
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
    Object.keys(m).forEach((h) => {
      const g = i.widget.wrapperConfig[h];
      if (g == null)
        i.widget.wrapperConfig[h] = new r(m[h]);
      else if (typeof g != "object")
        i.widget.wrapperConfig[h] = new r(g);
      else if (!(g instanceof r))
        if ("value" in g) {
          const w = new r(g.value);
          "variable" in g && (w.variable = g.variable), i.widget.wrapperConfig[h] = w;
        } else
          i.widget.wrapperConfig[h] = new r(m[h]);
    });
    const V = v(() => {
      let h = "";
      const g = i.widget.wrapperConfig.shadowTransparence?.value;
      G(g) && (h = g.toString(16));
      let w = (i.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      return w.length == 3 && (w = w[0] + w[0] + w[1] + w[1] + w[2] + w[2]), `${i.widget.wrapperConfig.shadowX?.value}px ${i.widget.wrapperConfig.shadowY?.value}px ${i.widget.wrapperConfig.shadowBlur?.value}px #${w}${h}`;
    }), s = v(() => {
      let h = 255;
      const g = i.widget.wrapperConfig.backgroundColorTransparence?.value;
      G(g) && (h = g);
      const w = i.widget.wrapperConfig.transparency?.value;
      G(w) && (h = Math.round(h * (w / 255)));
      const x = i.widget.wrapperConfig.backgroundColor?.value;
      if (!x) return "var(--color-pane)";
      let P = x.replace("#", "");
      P.length == 3 && (P = P[0] + P[0] + P[1] + P[1] + P[2] + P[2]);
      const z = h < 255 ? h.toString(16).padStart(2, "0") : "";
      return `#${P}${z}`;
    }), d = v(() => i.widget.wrapperConfig.borderColor?.value || "var(--color-divider)"), R = v(() => i.widget.wrapperConfig.borderSize?.value || 0), se = v(() => i.widget.wrapperConfig.borderRadius?.value || 0), X = v(() => {
      const h = i.widget.wrapperConfig.transparency?.value;
      return G(h) ? h / 255 : 1;
    }), re = v(() => i.widget.wrapperConfig.titleFontSize?.value || 16), $ = v(() => i.widget.wrapperConfig.titleColor?.value || "var(--color-divider)");
    v(() => {
      let h = (i.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      h.length == 3 && (h = h[0] + h[0] + h[1] + h[1] + h[2] + h[2]);
      const g = i.widget.wrapperConfig.shadowTransparence?.value;
      return h + (G(g) ? g.toString(16) : "");
    });
    function G(h) {
      const g = parseInt(h);
      return isNaN(g) ? !1 : g >= 0 && g <= 255;
    }
    const oe = v(() => {
      const h = i.widget.wrapperConfig.blur?.value;
      return G(h) ? h : "";
    }), K = v(() => {
      console.log(i.widget.wrapperConfig.padding);
      const h = parseInt(i.widget.wrapperConfig.padding?.value);
      return isNaN(h) ? 0 : h;
    });
    return (h, g) => {
      const w = F("VaScrollContainer"), x = F("VaIcon"), P = F("VaButton"), z = F("VaModal");
      return W(), U("div", {
        class: "flex relative flex-col w-full h-full wrapper-container",
        style: H({ "--blur-amount": oe.value + "px", "--title-color": $.value })
      }, [
        i.widget.wrapperConfig.title?.value ? (W(), U("div", {
          key: 0,
          class: "font-semibold capitalize",
          style: H({
            fontSize: re.value + "px",
            color: $.value,
            padding: K.value + "px",
            paddingBottom: 0,
            opacity: X.value
          })
        }, I(i.widget.wrapperConfig.title.value), 5)) : Z("", !0),
        A.value ? (W(), U(M, { key: 1 }, [
          O("div", {
            class: "w-full h-full box-border cursor-pointer overflow-hidden sub",
            style: H({ position: "relative", opacity: X.value })
          }, [
            u(w, {
              color: "var(--color-outline)",
              vertical: "",
              horizontal: ""
            }, {
              default: p(() => [
                (W(), ee(ne(E.value[i.widget.type].component), {
                  config: i.widget.config,
                  configv: i.widget.config,
                  "onUpdate:configv": g[0] || (g[0] = (y) => i.widget.config = y),
                  datasourceId: i.widget.config.datasourceId,
                  id: i.widget.uid || i.widget.id,
                  class: "widget_component"
                }, null, 40, ["config", "configv", "datasourceId", "id"]))
              ]),
              _: 1
            })
          ], 4),
          i.editEnabled ? (W(), U("div", we, [
            O("div", fe, [
              (W(!0), U(M, null, ue(D.value, (y) => (W(), U("button", {
                key: y.id,
                type: "button",
                class: ce(["action", { "action--danger": y.danger }]),
                title: y.label,
                onClick: de((xe) => y.run(), ["stop"])
              }, [
                u(x, {
                  name: y.icon,
                  class: "action__icon"
                }, null, 8, ["name"]),
                O("span", Te, I(y.label), 1)
              ], 10, Ce))), 128))
            ])
          ])) : Z("", !0)
        ], 64)) : (W(), U("div", me, [
          O("p", null, "Widget type " + I(i.widget.type) + " is not registered.", 1)
        ])),
        u(z, {
          modelValue: b.value,
          "onUpdate:modelValue": g[3] || (g[3] = (y) => b.value = y),
          size: "small",
          "hide-default-actions": "",
          "overlay-opacity": "0.3"
        }, {
          footer: p(() => [
            O("div", _e, [
              u(P, {
                preset: "secondary",
                onClick: g[1] || (g[1] = (y) => {
                  b.value = !1, n.value = null;
                })
              }, {
                default: p(() => [...g[6] || (g[6] = [
                  j(" Abbrechen ", -1)
                ])]),
                _: 1
              }),
              u(P, {
                color: "danger",
                icon: "delete",
                onClick: g[2] || (g[2] = (y) => T())
              }, {
                default: p(() => [...g[7] || (g[7] = [
                  j(" Löschen ", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: p(() => [
            O("div", Se, [
              u(x, {
                name: "warning",
                color: "danger",
                size: "2rem"
              }),
              g[4] || (g[4] = O("h5", { style: { margin: "0.5rem 0" } }, "Widget löschen", -1)),
              g[5] || (g[5] = O("p", null, "Möchtest du dieses Widget wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.", -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 4);
    };
  }
}), ae = (i, e) => {
  const a = i.__vccOpts || i;
  for (const [l, _] of e)
    a[l] = _;
  return a;
}, ve = /* @__PURE__ */ ae(Ne, [["__scopeId", "data-v-a1cdbc32"]]), Oe = { class: "settings-container" }, Ae = { class: "px-2" }, De = { class: "px-2" }, Le = { class: "px-2" }, ye = { class: "px-2" }, Pe = { class: "px-2" }, Be = { class: "px-2" }, Ve = /* @__PURE__ */ J({
  __name: "WidgetWrapperSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(i) {
    const e = he(i, "modelValue"), a = Q("i18n"), l = a ? (b) => a.t("wrapper:" + b) : (b) => b, _ = k(!1), B = k(!1), A = v(() => B.value ? "#ffffff" : ""), E = (b, n) => {
      console.log("onValueChange", n), b({
        target: {
          value: n
        }
      });
    };
    return (b, n) => {
      const N = F("VaDivider"), T = F("va-input"), L = F("va-color-input"), D = F("VaCounter"), m = F("VaSlider"), V = F("va-collapse");
      return W(), ee(V, {
        modelValue: _.value,
        "onUpdate:modelValue": n[16] || (n[16] = (s) => _.value = s),
        header: "Widget wrapper settings",
        icon: "style"
      }, {
        default: p(() => [
          O("div", Oe, [
            u(N, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                O("span", Ae, I(o(l)("WidgetWrapper.title")), 1)
              ]),
              _: 1
            }),
            u(o(S), {
              modelValue: e.value.title,
              "onUpdate:modelValue": n[0] || (n[0] = (s) => e.value.title = s),
              label: o(l)("WidgetWrapper.label")
            }, {
              default: p(({ value: s, change: d }) => [
                u(T, {
                  "model-value": s,
                  onInput: d,
                  label: o(l)("WidgetWrapper.label")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(o(S), {
              modelValue: e.value.titleFontSize,
              "onUpdate:modelValue": n[1] || (n[1] = (s) => e.value.titleFontSize = s),
              label: o(l)("WidgetWrapper.fontSize")
            }, {
              default: p(({ value: s, change: d }) => [
                u(T, {
                  "model-value": s,
                  onInput: d,
                  label: o(l)("WidgetWrapper.fontSize")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(o(S), {
              modelValue: e.value.titleColor,
              "onUpdate:modelValue": n[2] || (n[2] = (s) => e.value.titleColor = s),
              label: o(l)("WidgetWrapper.fontColor")
            }, {
              default: p(({ value: s, change: d }) => [
                u(L, {
                  "model-value": s,
                  onInput: d,
                  label: o(l)("WidgetWrapper.fontColor")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(N, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                O("span", De, I(o(l)("WidgetWrapper.padding")), 1)
              ]),
              _: 1
            }),
            u(o(S), {
              modelValue: e.value.padding,
              "onUpdate:modelValue": n[3] || (n[3] = (s) => e.value.padding = s),
              label: o(l)("WidgetWrapper.padding")
            }, {
              default: p(({ value: s, change: d }) => [
                u(m, {
                  labelColor: A.value,
                  stateful: "",
                  "model-value": s,
                  onChange: (R) => E(d, R),
                  label: o(l)("WidgetWrapper.padding"),
                  min: 0,
                  max: 20
                }, {
                  append: p(() => [
                    u(D, {
                      "model-value": s,
                      "onUpdate:modelValue": (R) => E(d, R),
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
            u(N, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                O("span", Le, I(o(l)("WidgetWrapper.background")), 1)
              ]),
              _: 1
            }),
            u(o(S), {
              modelValue: e.value.backgroundColor,
              "onUpdate:modelValue": n[4] || (n[4] = (s) => e.value.backgroundColor = s),
              label: o(l)("WidgetWrapper.backgroundColor")
            }, {
              default: p(({ value: s, change: d }) => [
                u(L, {
                  autofocus: "",
                  label: o(l)("WidgetWrapper.backgroundColor"),
                  class: "color-fill",
                  "model-value": s,
                  onInput: d
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(o(S), {
              modelValue: e.value.backgroundColorTransparence,
              "onUpdate:modelValue": n[5] || (n[5] = (s) => e.value.backgroundColorTransparence = s),
              label: o(l)("WidgetWrapper.backgroundColorTransparence")
            }, {
              default: p(({ value: s, change: d }) => [
                u(m, {
                  "model-value": s,
                  stateful: "",
                  onChange: (R) => E(d, R),
                  label: o(l)("WidgetWrapper.backgroundColorTrancparency"),
                  labelColor: A.value,
                  min: 0,
                  max: 255
                }, {
                  append: p(() => [
                    u(D, {
                      "model-value": s,
                      "onUpdate:modelValue": (R) => E(d, R),
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
            u(o(S), {
              modelValue: e.value.blur,
              "onUpdate:modelValue": n[6] || (n[6] = (s) => e.value.blur = s),
              label: o(l)("WidgetWrapper.blur")
            }, {
              default: p(({ value: s, change: d }) => [
                u(m, {
                  "model-value": s,
                  stateful: "",
                  onChange: (R) => E(d, R),
                  label: o(l)("WidgetWrapper.blur"),
                  labelColor: A.value,
                  min: 0,
                  max: 10
                }, {
                  append: p(() => [
                    u(D, {
                      "model-value": s,
                      "onUpdate:modelValue": (R) => E(d, R),
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
            u(N, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                O("span", ye, I(o(l)("WidgetWrapper.border")), 1)
              ]),
              _: 1
            }),
            u(o(S), {
              modelValue: e.value.borderSize,
              "onUpdate:modelValue": n[7] || (n[7] = (s) => e.value.borderSize = s),
              label: o(l)("WidgetWrapper.borderSize")
            }, {
              default: p(({ value: s, change: d }) => [
                u(T, {
                  "model-value": s,
                  onInput: d,
                  label: o(l)("WidgetWrapper.borderSize")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(o(S), {
              modelValue: e.value.borderColor,
              "onUpdate:modelValue": n[8] || (n[8] = (s) => e.value.borderColor = s),
              label: o(l)("WidgetWrapper.borderColor")
            }, {
              default: p(({ value: s, change: d }) => [
                u(L, {
                  autofocus: "",
                  label: o(l)("WidgetWrapper.borderColor"),
                  class: "color-fill",
                  "model-value": s,
                  onInput: d
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(o(S), {
              modelValue: e.value.borderRadius,
              "onUpdate:modelValue": n[9] || (n[9] = (s) => e.value.borderRadius = s),
              label: o(l)("WidgetWrapper.borderRadius")
            }, {
              default: p(({ value: s, change: d }) => [
                u(T, {
                  "model-value": s,
                  onInput: d,
                  label: o(l)("WidgetWrapper.borderRadius")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(N, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                O("span", Pe, I(o(l)("WidgetWrapper.shadow")), 1)
              ]),
              _: 1
            }),
            u(o(S), {
              modelValue: e.value.shadowX,
              "onUpdate:modelValue": n[10] || (n[10] = (s) => e.value.shadowX = s),
              label: o(l)("WidgetWrapper.shadowX")
            }, {
              default: p(({ value: s, change: d }) => [
                u(T, {
                  "model-value": s,
                  onInput: d,
                  label: o(l)("WidgetWrapper.shadowX")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(o(S), {
              modelValue: e.value.shadowY,
              "onUpdate:modelValue": n[11] || (n[11] = (s) => e.value.shadowY = s),
              label: o(l)("WidgetWrapper.shadowY")
            }, {
              default: p(({ value: s, change: d }) => [
                u(T, {
                  "model-value": s,
                  onInput: d,
                  label: o(l)("WidgetWrapper.shadowY")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(o(S), {
              modelValue: e.value.shadowBlur,
              "onUpdate:modelValue": n[12] || (n[12] = (s) => e.value.shadowBlur = s),
              label: o(l)("WidgetWrapper.shadowBlur")
            }, {
              default: p(({ value: s, change: d }) => [
                u(T, {
                  "model-value": s,
                  onInput: d,
                  label: o(l)("WidgetWrapper.shadowBlur")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(o(S), {
              modelValue: e.value.shadowColor,
              "onUpdate:modelValue": n[13] || (n[13] = (s) => e.value.shadowColor = s),
              label: o(l)("WidgetWrapper.shadowColor")
            }, {
              default: p(({ value: s, change: d }) => [
                u(L, {
                  autofocus: "",
                  label: o(l)("WidgetWrapper.shadowColor"),
                  class: "color-fill",
                  "model-value": s,
                  onInput: d
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            u(o(S), {
              modelValue: e.value.shadowTransparence,
              "onUpdate:modelValue": n[14] || (n[14] = (s) => e.value.shadowTransparence = s),
              label: o(l)("WidgetWrapper.shadowTransparence")
            }, {
              default: p(({ value: s, change: d }) => [
                u(m, {
                  labelColor: A.value,
                  stateful: "",
                  "model-value": s,
                  onChange: (R) => E(d, R),
                  label: o(l)("WidgetWrapper.shadowTransparence"),
                  min: 0,
                  max: 255
                }, {
                  append: p(() => [
                    u(D, {
                      "model-value": s,
                      "onUpdate:modelValue": (R) => E(d, R),
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
            u(N, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: p(() => [
                O("span", Be, I(o(l)("WidgetWrapper.transparence")), 1)
              ]),
              _: 1
            }),
            u(o(S), {
              modelValue: e.value.transparency,
              "onUpdate:modelValue": n[15] || (n[15] = (s) => e.value.transparency = s),
              label: o(l)("WidgetWrapper.transparency")
            }, {
              default: p(({ value: s, change: d }) => [
                u(m, {
                  labelColor: A.value,
                  stateful: "",
                  "model-value": s,
                  onChange: (R) => E(d, R),
                  label: o(l)("WidgetWrapper.transparency"),
                  min: 0,
                  max: 255,
                  step: 1
                }, {
                  append: p(() => [
                    u(D, {
                      "model-value": s,
                      "onUpdate:modelValue": (R) => E(d, R),
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
}), Fe = /* @__PURE__ */ ae(Ve, [["__scopeId", "data-v-cdb0042e"]]);
class Y extends pe {
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
function C(i) {
  const e = te.INSTANCE.getEPackage(i);
  if (!e)
    throw new Error(`EPackage '${i}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing WrapperSettingsPackage.`);
  return e;
}
class c extends Re {
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
    te.INSTANCE.set(c.eNS_URI, this), this.setEFactoryInstance(Y.eINSTANCE);
    const e = new Ee();
    e.setName("WrapperSettings"), e.setAbstract(!1), e.setInterface(!1), this.getEClassifiers().push(e), e.setEPackage(this), c.Literals.WRAPPER_SETTINGS = e;
    const a = new f();
    a.setContainment(!1), a.setName("title"), a.setLowerBound(0), a.setUpperBound(1), e.getEStructuralFeatures().push(a), c.Literals.WRAPPER_SETTINGS__TITLE = a;
    const l = new f();
    l.setContainment(!1), l.setName("backgroundColor"), l.setLowerBound(0), l.setUpperBound(1), e.getEStructuralFeatures().push(l), c.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR = l;
    const _ = new f();
    _.setContainment(!1), _.setName("backgroundColorTransparence"), _.setLowerBound(0), _.setUpperBound(1), e.getEStructuralFeatures().push(_), c.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR_TRANSPARENCE = _;
    const B = new f();
    B.setContainment(!1), B.setName("titleColor"), B.setLowerBound(0), B.setUpperBound(1), e.getEStructuralFeatures().push(B), c.Literals.WRAPPER_SETTINGS__TITLE_COLOR = B;
    const A = new f();
    A.setContainment(!1), A.setName("padding"), A.setLowerBound(0), A.setUpperBound(1), e.getEStructuralFeatures().push(A), c.Literals.WRAPPER_SETTINGS__PADDING = A;
    const E = new f();
    E.setContainment(!1), E.setName("titleFontSize"), E.setLowerBound(0), E.setUpperBound(1), e.getEStructuralFeatures().push(E), c.Literals.WRAPPER_SETTINGS__TITLE_FONT_SIZE = E;
    const b = new f();
    b.setContainment(!1), b.setName("borderSize"), b.setLowerBound(0), b.setUpperBound(1), e.getEStructuralFeatures().push(b), c.Literals.WRAPPER_SETTINGS__BORDER_SIZE = b;
    const n = new f();
    n.setContainment(!1), n.setName("borderColor"), n.setLowerBound(0), n.setUpperBound(1), e.getEStructuralFeatures().push(n), c.Literals.WRAPPER_SETTINGS__BORDER_COLOR = n;
    const N = new f();
    N.setContainment(!1), N.setName("borderRadius"), N.setLowerBound(0), N.setUpperBound(1), e.getEStructuralFeatures().push(N), c.Literals.WRAPPER_SETTINGS__BORDER_RADIUS = N;
    const T = new f();
    T.setContainment(!1), T.setName("blur"), T.setLowerBound(0), T.setUpperBound(1), e.getEStructuralFeatures().push(T), c.Literals.WRAPPER_SETTINGS__BLUR = T;
    const L = new f();
    L.setContainment(!1), L.setName("fullscreen"), L.setLowerBound(0), L.setUpperBound(1), e.getEStructuralFeatures().push(L), c.Literals.WRAPPER_SETTINGS__FULLSCREEN = L;
    const D = new f();
    D.setContainment(!1), D.setName("shadowColor"), D.setLowerBound(0), D.setUpperBound(1), e.getEStructuralFeatures().push(D), c.Literals.WRAPPER_SETTINGS__SHADOW_COLOR = D;
    const m = new f();
    m.setContainment(!1), m.setName("shadowBlur"), m.setLowerBound(0), m.setUpperBound(1), e.getEStructuralFeatures().push(m), c.Literals.WRAPPER_SETTINGS__SHADOW_BLUR = m;
    const V = new f();
    V.setContainment(!1), V.setName("shadowX"), V.setLowerBound(0), V.setUpperBound(1), e.getEStructuralFeatures().push(V), c.Literals.WRAPPER_SETTINGS__SHADOW_X = V;
    const s = new f();
    s.setContainment(!1), s.setName("shadowY"), s.setLowerBound(0), s.setUpperBound(1), e.getEStructuralFeatures().push(s), c.Literals.WRAPPER_SETTINGS__SHADOW_Y = s;
    const d = new f();
    d.setContainment(!1), d.setName("shadowTransparence"), d.setLowerBound(0), d.setUpperBound(1), e.getEStructuralFeatures().push(d), c.Literals.WRAPPER_SETTINGS__SHADOW_TRANSPARENCE = d;
    const R = new f();
    R.setContainment(!1), R.setName("transparency"), R.setLowerBound(0), R.setUpperBound(1), e.getEStructuralFeatures().push(R), c.Literals.WRAPPER_SETTINGS__TRANSPARENCY = R, c.Literals.WRAPPER_SETTINGS__TITLE.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BACKGROUND_COLOR_TRANSPARENCE.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__TITLE_COLOR.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__PADDING.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__TITLE_FONT_SIZE.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BORDER_SIZE.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BORDER_COLOR.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BORDER_RADIUS.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__BLUR.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__FULLSCREEN.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__SHADOW_COLOR.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__SHADOW_BLUR.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__SHADOW_X.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__SHADOW_Y.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__SHADOW_TRANSPARENCE.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), c.Literals.WRAPPER_SETTINGS__TRANSPARENCY.setEType(C("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper"));
  }
}
class t extends be {
  constructor() {
    super(...arguments), this._title = new r(), this._backgroundColor = new r(), this._backgroundColorTransparence = new r(), this._titleColor = new r(), this._padding = new r(), this._titleFontSize = new r(), this._borderSize = new r(), this._borderColor = new r(), this._borderRadius = new r(), this._blur = new r(), this._fullscreen = new r(), this._shadowColor = new r(), this._shadowBlur = new r(), this._shadowX = new r(), this._shadowY = new r(), this._shadowTransparence = new r(), this._transparency = new r();
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
        return this._title !== new r();
      case t.BACKGROUND_COLOR:
        return this._backgroundColor !== new r();
      case t.BACKGROUND_COLOR_TRANSPARENCE:
        return this._backgroundColorTransparence !== new r();
      case t.TITLE_COLOR:
        return this._titleColor !== new r();
      case t.PADDING:
        return this._padding !== new r();
      case t.TITLE_FONT_SIZE:
        return this._titleFontSize !== new r();
      case t.BORDER_SIZE:
        return this._borderSize !== new r();
      case t.BORDER_COLOR:
        return this._borderColor !== new r();
      case t.BORDER_RADIUS:
        return this._borderRadius !== new r();
      case t.BLUR:
        return this._blur !== new r();
      case t.FULLSCREEN:
        return this._fullscreen !== new r();
      case t.SHADOW_COLOR:
        return this._shadowColor !== new r();
      case t.SHADOW_BLUR:
        return this._shadowBlur !== new r();
      case t.SHADOW_X:
        return this._shadowX !== new r();
      case t.SHADOW_Y:
        return this._shadowY !== new r();
      case t.SHADOW_TRANSPARENCE:
        return this._shadowTransparence !== new r();
      case t.TRANSPARENCY:
        return this._transparency !== new r();
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
        this._title = new r();
        return;
      case t.BACKGROUND_COLOR:
        this._backgroundColor = new r();
        return;
      case t.BACKGROUND_COLOR_TRANSPARENCE:
        this._backgroundColorTransparence = new r();
        return;
      case t.TITLE_COLOR:
        this._titleColor = new r();
        return;
      case t.PADDING:
        this._padding = new r();
        return;
      case t.TITLE_FONT_SIZE:
        this._titleFontSize = new r();
        return;
      case t.BORDER_SIZE:
        this._borderSize = new r();
        return;
      case t.BORDER_COLOR:
        this._borderColor = new r();
        return;
      case t.BORDER_RADIUS:
        this._borderRadius = new r();
        return;
      case t.BLUR:
        this._blur = new r();
        return;
      case t.FULLSCREEN:
        this._fullscreen = new r();
        return;
      case t.SHADOW_COLOR:
        this._shadowColor = new r();
        return;
      case t.SHADOW_BLUR:
        this._shadowBlur = new r();
        return;
      case t.SHADOW_X:
        this._shadowX = new r();
        return;
      case t.SHADOW_Y:
        this._shadowY = new r();
        return;
      case t.SHADOW_TRANSPARENCE:
        this._shadowTransparence = new r();
        return;
      case t.TRANSPARENCY:
        this._transparency = new r();
        return;
      default:
        super.eUnset(e);
    }
  }
}
const We = `<?xml version="1.0" encoding="UTF-8"?>
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
      <fields xsi:type="uimodel:NumberWidget"
          name="titleFontSize"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/titleFontSize"
          label="Schriftgröße" min="6" max="72" step="1"/>
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
      <fields xsi:type="uimodel:NumberWidget"
          name="backgroundColorTransparence"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/backgroundColorTransparence"
          label="Deckkraft" min="0" max="255" step="1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="transparency"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/transparency"
          label="Gesamtdeckkraft" min="0" max="255" step="1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="blur"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/blur"
          label="Weichzeichnen" min="0" max="50" step="1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="padding"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/padding"
          label="Innenabstand" min="0" max="200" step="1"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="borderGroup" layout="VERTICAL" label="Rand">
      <fields xsi:type="uimodel:NumberWidget"
          name="borderSize"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/borderSize"
          label="Stärke" min="0" max="40" step="1"/>
      <fields xsi:type="uimodel:InputWidget"
          name="borderColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/borderColor"
          label="Farbe"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="borderRadius"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/borderRadius"
          label="Eckenradius" min="0" max="100" step="1"/>
    </fields>

    <fields xsi:type="uimodel:GroupWidget" name="shadowGroup" layout="VERTICAL" label="Schatten">
      <fields xsi:type="uimodel:InputWidget"
          name="shadowColor"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/shadowColor"
          label="Farbe"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="shadowBlur"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/shadowBlur"
          label="Weichheit" min="0" max="100" step="1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="shadowX"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/shadowX"
          label="Versatz X" min="-100" max="100" step="1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="shadowY"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/shadowY"
          label="Versatz Y" min="-100" max="100" step="1"/>
      <fields xsi:type="uimodel:NumberWidget"
          name="shadowTransparence"
          feature="http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings/shadowTransparence"
          label="Deckkraft" min="0" max="255" step="1"/>
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
const Ie = new t(), Ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WidgetWrapper: ve,
  WidgetWrapperSettings: Fe,
  WrapperSettingsImpl: t,
  WrapperSettingsPackage: c,
  defaultConfig: Ie,
  wrapperSettingsFormXmi: We
}, Symbol.toStringTag, { value: "Module" })), q = "org.eclipse.daanse.board.app.ui.vue.widget.wrapper", Ge = "0.0.1-next.1";
async function $e(i) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${q}: tsm runtime is not initialized`);
  e.register(q, Ue, Ge, "ui.vue.widget.wrapper"), await void 0;
}
async function Ke(i) {
  await void 0;
}
export {
  ve as WidgetWrapper,
  Fe as WidgetWrapperSettings,
  t as WrapperSettingsImpl,
  c as WrapperSettingsPackage,
  $e as activate,
  Ke as deactivate,
  Ie as defaultConfig,
  We as wrapperSettingsFormXmi
};
