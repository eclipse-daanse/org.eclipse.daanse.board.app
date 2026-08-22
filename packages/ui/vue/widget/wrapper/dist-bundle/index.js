(function(){var i="ui.vue.widget.wrapper",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.absolute[data-v-4d1db270] {\n  position: absolute;\n}\n.wrapper-container[data-v-4d1db270] {\n\n  background-color: var(--v6fe95002);\n  border-color: var(--v5674e8f5);\n  border-width: var(--v1f1018c4);\n  border-style: solid;\n\n\n  width: 100%;\n  height: 100%;\n  box-Shadow: var(--v152bfdf4);\n  border-radius: var(--v0893956d);\n  backdrop-filter: blur(var(--blur-amount));\n}\n.sub[data-v-4d1db270] {\n  border-radius: var(--v0893956d);\n  padding: var(--cfa673a0);\n}\n.wrapper-container:hover .hover[data-v-4d1db270] {\n  display: block;\n}\n.wrapper-container .hover[data-v-4d1db270] {\n  display: none;\n}\n.hightz[data-v-4d1db270] {\n  z-index: 3000;\n}\n\n.settings-container[data-v-b90249f7] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 1rem;\n}\n.pad_bottom[data-v-b90249f7] {\n  padding-top: 30px;\n  padding-bottom: 10px;\n}\n";})();
import { defineComponent, useCssVars, computed, inject, ref, onUnmounted, resolveComponent, createElementBlock, openBlock, normalizeStyle, createCommentVNode, createVNode, toDisplayString, Fragment, createElementVNode, withCtx, createBlock, resolveDynamicComponent, createTextVNode, useModel, unref } from "vue";
const { identifier } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.widget");
const { VariableWrapper } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.composables");
const { VariableInput } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.variable.components");
const { Reference, ModelClass } = __tsm__.require("org.eclipse.daanse.board.app.lib.annotations");
const _hoisted_1$1 = {
  key: 0,
  class: "hover absolute top-[25px] right-0 flex justify-end bg-white z-3000 hightz"
};
const _hoisted_2$1 = { key: 2 };
const _hoisted_3$1 = { style: { "text-align": "center", "padding": "1rem" } };
const _hoisted_4$1 = { style: { "display": "flex", "justify-content": "flex-end", "gap": "0.5rem" } };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "WidgetWrapper",
  props: {
    widget: {},
    editEnabled: { type: Boolean }
  },
  emits: ["openSettings", "removeWidget"],
  setup(__props, { emit: __emit }) {
    useCssVars((_ctx) => ({
      "v6fe95002": getBackground.value,
      "v5674e8f5": borderColor.value,
      "v1f1018c4": borderSize.value + "px",
      "v152bfdf4": getShadow.value,
      "v0893956d": borderRadius.value + "px",
      "cfa673a0": getpadding.value + "px"
    }));
    const emit = __emit;
    const registeredWidgets = inject(identifier);
    const registryVersion = ref(0);
    const unsubscribe = registeredWidgets.onChange?.(() => {
      registryVersion.value++;
    });
    onUnmounted(() => unsubscribe?.());
    const isWidgetRegistered = computed(() => {
      void registryVersion.value;
      return registeredWidgets.getWidget(__props.widget.type);
    });
    const availableWidgets = computed(() => {
      void registryVersion.value;
      return registeredWidgets.getAllWidgets();
    });
    const showDeleteConfirm = ref(false);
    const widgetToDelete = ref(null);
    const deleteWidget = (id) => {
      widgetToDelete.value = id;
      showDeleteConfirm.value = true;
    };
    const confirmDelete = () => {
      if (widgetToDelete.value) {
        emit("removeWidget", widgetToDelete.value);
      }
      showDeleteConfirm.value = false;
      widgetToDelete.value = null;
    };
    const openSettings = (id) => {
      emit("openSettings", id);
    };
    const defaultConfig2 = {
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
      fullscreen: false,
      shadowColor: "#333",
      shadowBlur: 12,
      shadowX: 5,
      shadowY: 5,
      shadowTransparence: 25,
      transparency: 255
    };
    Object.keys(defaultConfig2).forEach((key) => {
      const val = __props.widget.wrapperConfig[key];
      if (val === void 0 || val === null) {
        __props.widget.wrapperConfig[key] = new VariableWrapper(defaultConfig2[key]);
      } else if (typeof val !== "object") {
        __props.widget.wrapperConfig[key] = new VariableWrapper(val);
      } else if (!(val instanceof VariableWrapper)) {
        if ("value" in val) {
          const v = new VariableWrapper(val.value);
          if ("variable" in val) v.variable = val.variable;
          __props.widget.wrapperConfig[key] = v;
        } else {
          __props.widget.wrapperConfig[key] = new VariableWrapper(defaultConfig2[key]);
        }
      }
    });
    const getShadow = computed(() => {
      let post = "";
      const shadowTransparence = __props.widget.wrapperConfig.shadowTransparence?.value;
      if (isByte(shadowTransparence)) {
        post = shadowTransparence.toString(16);
      }
      let color = (__props.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      if (color.length == 3) {
        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
      }
      const ret = `${__props.widget.wrapperConfig.shadowX?.value}px ${__props.widget.wrapperConfig.shadowY?.value}px ${__props.widget.wrapperConfig.shadowBlur?.value}px #${color}${post}`;
      return ret;
    });
    const getBackground = computed(() => {
      let bgAlpha = 255;
      const bgTransparence = __props.widget.wrapperConfig.backgroundColorTransparence?.value;
      if (isByte(bgTransparence)) {
        bgAlpha = bgTransparence;
      }
      const transparencyVal = __props.widget.wrapperConfig.transparency?.value;
      if (isByte(transparencyVal)) {
        bgAlpha = Math.round(bgAlpha * (transparencyVal / 255));
      }
      let color = (__props.widget.wrapperConfig.backgroundColor?.value || "#FFFFFF").replace(
        "#",
        ""
      );
      if (color.length == 3) {
        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
      }
      const post = bgAlpha < 255 ? bgAlpha.toString(16).padStart(2, "0") : "";
      const ret = `#${color}${post}`;
      return ret;
    });
    const borderColor = computed(() => {
      return __props.widget.wrapperConfig.borderColor?.value || "#000000";
    });
    const borderSize = computed(() => {
      return __props.widget.wrapperConfig.borderSize?.value || 0;
    });
    const borderRadius = computed(() => {
      return __props.widget.wrapperConfig.borderRadius?.value || 0;
    });
    const transparency = computed(() => {
      const t = __props.widget.wrapperConfig.transparency?.value;
      return isByte(t) ? t / 255 : 1;
    });
    const titleFontSize = computed(() => {
      return __props.widget.wrapperConfig.titleFontSize?.value || 16;
    });
    const titleColor = computed(() => {
      return __props.widget.wrapperConfig.titleColor?.value || "#000000";
    });
    computed(() => {
      let color = (__props.widget.wrapperConfig.shadowColor?.value || "#FFFFFF").replace("#", "");
      if (color.length == 3) {
        color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
      }
      const t = __props.widget.wrapperConfig.shadowTransparence?.value;
      return color + (isByte(t) ? t.toString(16) : "");
    });
    function isByte(value) {
      const parsedValue = parseInt(value);
      if (isNaN(parsedValue)) {
        return false;
      }
      return parsedValue >= 0 && parsedValue <= 255;
    }
    const getBlur = computed(() => {
      const b = __props.widget.wrapperConfig.blur?.value;
      return isByte(b) ? b : "";
    });
    const getpadding = computed(() => {
      console.log(__props.widget.wrapperConfig.padding);
      const int = parseInt(__props.widget.wrapperConfig.padding?.value);
      return isNaN(int) ? 0 : int;
    });
    return (_ctx, _cache) => {
      const _component_VaScrollContainer = resolveComponent("VaScrollContainer");
      const _component_VaButton = resolveComponent("VaButton");
      const _component_VaIcon = resolveComponent("VaIcon");
      const _component_VaModal = resolveComponent("VaModal");
      return openBlock(), createElementBlock("div", {
        class: "flex relative flex-col w-full h-full wrapper-container",
        style: normalizeStyle({ "--blur-amount": getBlur.value + "px", "--title-color": titleColor.value })
      }, [
        __props.widget.wrapperConfig.title?.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "font-semibold capitalize",
          style: normalizeStyle({
            fontSize: titleFontSize.value + "px",
            color: titleColor.value,
            padding: getpadding.value + "px",
            paddingBottom: 0,
            opacity: transparency.value
          })
        }, toDisplayString(__props.widget.wrapperConfig.title.value), 5)) : createCommentVNode("", true),
        isWidgetRegistered.value ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createElementVNode("div", {
            class: "w-full h-full box-border cursor-pointer overflow-hidden sub",
            style: normalizeStyle({ position: "relative", opacity: transparency.value })
          }, [
            createVNode(_component_VaScrollContainer, {
              color: "#cbcbcb",
              vertical: "",
              horizontal: ""
            }, {
              default: withCtx(() => [
                (openBlock(), createBlock(resolveDynamicComponent(availableWidgets.value[__props.widget.type].component), {
                  config: __props.widget.config,
                  configv: __props.widget.config,
                  "onUpdate:configv": _cache[0] || (_cache[0] = ($event) => __props.widget.config = $event),
                  datasourceId: __props.widget.config.datasourceId,
                  id: __props.widget.uid || __props.widget.id,
                  class: "widget_component"
                }, null, 40, ["config", "configv", "datasourceId", "id"]))
              ]),
              _: 1
            })
          ], 4),
          __props.editEnabled ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
            createVNode(_component_VaButton, {
              class: "control-button",
              onClick: _cache[1] || (_cache[1] = ($event) => openSettings(__props.widget.uid)),
              icon: "settings",
              size: "small"
            }),
            createVNode(_component_VaButton, {
              class: "control-button",
              onClick: _cache[2] || (_cache[2] = ($event) => deleteWidget(__props.widget.uid)),
              icon: "close",
              color: "danger",
              size: "small"
            })
          ])) : createCommentVNode("", true)
        ], 64)) : (openBlock(), createElementBlock("div", _hoisted_2$1, [
          createElementVNode("p", null, "Widget type " + toDisplayString(__props.widget.type) + " is not registered.", 1)
        ])),
        createVNode(_component_VaModal, {
          modelValue: showDeleteConfirm.value,
          "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => showDeleteConfirm.value = $event),
          size: "small",
          "hide-default-actions": "",
          "overlay-opacity": "0.3"
        }, {
          footer: withCtx(() => [
            createElementVNode("div", _hoisted_4$1, [
              createVNode(_component_VaButton, {
                preset: "secondary",
                onClick: _cache[3] || (_cache[3] = ($event) => {
                  showDeleteConfirm.value = false;
                  widgetToDelete.value = null;
                })
              }, {
                default: withCtx(() => [..._cache[8] || (_cache[8] = [
                  createTextVNode(" Abbrechen ", -1)
                ])]),
                _: 1
              }),
              createVNode(_component_VaButton, {
                color: "danger",
                icon: "delete",
                onClick: _cache[4] || (_cache[4] = ($event) => confirmDelete())
              }, {
                default: withCtx(() => [..._cache[9] || (_cache[9] = [
                  createTextVNode(" Löschen ", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: withCtx(() => [
            createElementVNode("div", _hoisted_3$1, [
              createVNode(_component_VaIcon, {
                name: "warning",
                color: "danger",
                size: "2rem"
              }),
              _cache[6] || (_cache[6] = createElementVNode("h5", { style: { "margin": "0.5rem 0" } }, "Widget löschen", -1)),
              _cache[7] || (_cache[7] = createElementVNode("p", null, "Möchtest du dieses Widget wirklich löschen? Diese Aktion kann nicht rückgängig gemacht werden.", -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 4);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const WidgetWrapper = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4d1db270"]]);
const _hoisted_1 = { class: "settings-container" };
const _hoisted_2 = { class: "px-2" };
const _hoisted_3 = { class: "px-2" };
const _hoisted_4 = { class: "px-2" };
const _hoisted_5 = { class: "px-2" };
const _hoisted_6 = { class: "px-2" };
const _hoisted_7 = { class: "px-2" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "WidgetWrapperSettings",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const wrapperSettings = useModel(__props, "modelValue");
    const i118n = inject("i18n");
    const t = i118n ? (key) => i118n.t("wrapper:" + key) : (s) => s;
    const opened = ref(false);
    const isDarkTheme = ref(false);
    const fontColor = computed(() => {
      return isDarkTheme.value ? "#ffffff" : "";
    });
    const onValueChange = (changeFn, val) => {
      console.log("onValueChange", val);
      changeFn({
        target: {
          value: val
        }
      });
    };
    return (_ctx, _cache) => {
      const _component_VaDivider = resolveComponent("VaDivider");
      const _component_va_input = resolveComponent("va-input");
      const _component_va_color_input = resolveComponent("va-color-input");
      const _component_VaCounter = resolveComponent("VaCounter");
      const _component_VaSlider = resolveComponent("VaSlider");
      const _component_va_collapse = resolveComponent("va-collapse");
      return openBlock(), createBlock(_component_va_collapse, {
        modelValue: opened.value,
        "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => opened.value = $event),
        header: "Widget wrapper settings",
        icon: "style"
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createVNode(_component_VaDivider, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_2, toDisplayString(unref(t)("WidgetWrapper.title")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.title,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => wrapperSettings.value.title = $event),
              label: unref(t)("WidgetWrapper.label")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  label: unref(t)("WidgetWrapper.label")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.titleFontSize,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => wrapperSettings.value.titleFontSize = $event),
              label: unref(t)("WidgetWrapper.fontSize")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  label: unref(t)("WidgetWrapper.fontSize")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.titleColor,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => wrapperSettings.value.titleColor = $event),
              label: unref(t)("WidgetWrapper.fontColor")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_color_input, {
                  "model-value": value,
                  onInput: change,
                  label: unref(t)("WidgetWrapper.fontColor")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(_component_VaDivider, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_3, toDisplayString(unref(t)("WidgetWrapper.padding")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.padding,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => wrapperSettings.value.padding = $event),
              label: unref(t)("WidgetWrapper.padding")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_VaSlider, {
                  labelColor: fontColor.value,
                  stateful: "",
                  "model-value": value,
                  onChange: ($event) => onValueChange(change, $event),
                  label: unref(t)("WidgetWrapper.padding"),
                  min: 0,
                  max: 20
                }, {
                  append: withCtx(() => [
                    createVNode(_component_VaCounter, {
                      "model-value": value,
                      "onUpdate:modelValue": ($event) => onValueChange(change, $event),
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
            createVNode(_component_VaDivider, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_4, toDisplayString(unref(t)("WidgetWrapper.background")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.backgroundColor,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => wrapperSettings.value.backgroundColor = $event),
              label: unref(t)("WidgetWrapper.backgroundColor")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_color_input, {
                  autofocus: "",
                  label: unref(t)("WidgetWrapper.backgroundColor"),
                  class: "color-fill",
                  "model-value": value,
                  onInput: change
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.backgroundColorTransparence,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => wrapperSettings.value.backgroundColorTransparence = $event),
              label: unref(t)("WidgetWrapper.backgroundColorTransparence")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_VaSlider, {
                  "model-value": value,
                  stateful: "",
                  onChange: ($event) => onValueChange(change, $event),
                  label: unref(t)("WidgetWrapper.backgroundColorTrancparency"),
                  labelColor: fontColor.value,
                  min: 0,
                  max: 255
                }, {
                  append: withCtx(() => [
                    createVNode(_component_VaCounter, {
                      "model-value": value,
                      "onUpdate:modelValue": ($event) => onValueChange(change, $event),
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
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.blur,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => wrapperSettings.value.blur = $event),
              label: unref(t)("WidgetWrapper.blur")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_VaSlider, {
                  "model-value": value,
                  stateful: "",
                  onChange: ($event) => onValueChange(change, $event),
                  label: unref(t)("WidgetWrapper.blur"),
                  labelColor: fontColor.value,
                  min: 0,
                  max: 10
                }, {
                  append: withCtx(() => [
                    createVNode(_component_VaCounter, {
                      "model-value": value,
                      "onUpdate:modelValue": ($event) => onValueChange(change, $event),
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
            createVNode(_component_VaDivider, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_5, toDisplayString(unref(t)("WidgetWrapper.border")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.borderSize,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => wrapperSettings.value.borderSize = $event),
              label: unref(t)("WidgetWrapper.borderSize")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  label: unref(t)("WidgetWrapper.borderSize")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.borderColor,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => wrapperSettings.value.borderColor = $event),
              label: unref(t)("WidgetWrapper.borderColor")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_color_input, {
                  autofocus: "",
                  label: unref(t)("WidgetWrapper.borderColor"),
                  class: "color-fill",
                  "model-value": value,
                  onInput: change
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.borderRadius,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => wrapperSettings.value.borderRadius = $event),
              label: unref(t)("WidgetWrapper.borderRadius")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  label: unref(t)("WidgetWrapper.borderRadius")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(_component_VaDivider, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_6, toDisplayString(unref(t)("WidgetWrapper.shadow")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.shadowX,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => wrapperSettings.value.shadowX = $event),
              label: unref(t)("WidgetWrapper.shadowX")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  label: unref(t)("WidgetWrapper.shadowX")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.shadowY,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => wrapperSettings.value.shadowY = $event),
              label: unref(t)("WidgetWrapper.shadowY")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  label: unref(t)("WidgetWrapper.shadowY")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.shadowBlur,
              "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => wrapperSettings.value.shadowBlur = $event),
              label: unref(t)("WidgetWrapper.shadowBlur")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  label: unref(t)("WidgetWrapper.shadowBlur")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.shadowColor,
              "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => wrapperSettings.value.shadowColor = $event),
              label: unref(t)("WidgetWrapper.shadowColor")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_color_input, {
                  autofocus: "",
                  label: unref(t)("WidgetWrapper.shadowColor"),
                  class: "color-fill",
                  "model-value": value,
                  onInput: change
                }, null, 8, ["label", "model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.shadowTransparence,
              "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => wrapperSettings.value.shadowTransparence = $event),
              label: unref(t)("WidgetWrapper.shadowTransparence")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_VaSlider, {
                  labelColor: fontColor.value,
                  stateful: "",
                  "model-value": value,
                  onChange: ($event) => onValueChange(change, $event),
                  label: unref(t)("WidgetWrapper.shadowTransparence"),
                  min: 0,
                  max: 255
                }, {
                  append: withCtx(() => [
                    createVNode(_component_VaCounter, {
                      "model-value": value,
                      "onUpdate:modelValue": ($event) => onValueChange(change, $event),
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
            createVNode(_component_VaDivider, {
              class: "pad_bottom",
              orientation: "center"
            }, {
              default: withCtx(() => [
                createElementVNode("span", _hoisted_7, toDisplayString(unref(t)("WidgetWrapper.transparence")), 1)
              ]),
              _: 1
            }),
            createVNode(unref(VariableInput), {
              modelValue: wrapperSettings.value.transparency,
              "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => wrapperSettings.value.transparency = $event),
              label: unref(t)("WidgetWrapper.transparency")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_VaSlider, {
                  labelColor: fontColor.value,
                  stateful: "",
                  "model-value": value,
                  onChange: ($event) => onValueChange(change, $event),
                  label: unref(t)("WidgetWrapper.transparency"),
                  min: 0,
                  max: 255,
                  step: 1
                }, {
                  append: withCtx(() => [
                    createVNode(_component_VaCounter, {
                      "model-value": value,
                      "onUpdate:modelValue": ($event) => onValueChange(change, $event),
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
});
const WidgetWrapperSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b90249f7"]]);
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let WrapperSettings = class {
  constructor() {
    this.title = new VariableWrapper();
    this.backgroundColor = new VariableWrapper();
    this.backgroundColorTransparence = new VariableWrapper();
    this.titleColor = new VariableWrapper();
    this.padding = new VariableWrapper();
    this.titleFontSize = new VariableWrapper();
    this.borderSize = new VariableWrapper();
    this.borderColor = new VariableWrapper();
    this.borderRadius = new VariableWrapper();
    this.blur = new VariableWrapper();
    this.fullscreen = new VariableWrapper();
    this.shadowColor = new VariableWrapper();
    this.shadowBlur = new VariableWrapper();
    this.shadowX = new VariableWrapper();
    this.shadowY = new VariableWrapper();
    this.shadowTransparence = new VariableWrapper();
    this.transparency = new VariableWrapper();
  }
};
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "title", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "backgroundColor", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "backgroundColorTransparence", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "titleColor", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "padding", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "titleFontSize", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "borderSize", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "borderColor", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "borderRadius", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "blur", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "fullscreen", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "shadowColor", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "shadowBlur", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "shadowX", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "shadowY", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "shadowTransparence", 2);
__decorateClass([
  Reference("VariableWrapper")
], WrapperSettings.prototype, "transparency", 2);
WrapperSettings = __decorateClass([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.wrapper#//WrapperSettings" })
], WrapperSettings);
const defaultConfig = new WrapperSettings();
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WidgetWrapper,
  WidgetWrapperSettings,
  defaultConfig
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.widget.wrapper";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.widget.wrapper");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  WidgetWrapper,
  WidgetWrapperSettings,
  activate,
  deactivate,
  defaultConfig
};
