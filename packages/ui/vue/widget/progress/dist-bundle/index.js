(function(){var i="ui.vue.widget.progress",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.container[data-v-2f35b34c] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.grid-layout[data-v-2f35b34c] {\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  grid-template-rows:  1fr auto 1fr;\n\n  gap: 0.5em;\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.grid-layout.vertical[data-v-2f35b34c] {\n  grid-template-columns: 1fr auto 1fr;\n  grid-template-rows: auto 1fr auto;\n}\n\n/* Zentrale Progressbar */\n.progress-bar[data-v-2f35b34c] {\n  grid-column: 2;\n  grid-row: 2;\n  background: var(--v2eeb6fee);\n  border-radius: var(--v75e282b9);\n  justify-self: center;\n  position: relative;\n  display: flex;\n  align-items: end;\n  justify-content: start;\n  height: var(--e8645acc);\n  width: var(--v08112608);\n}\n.progress-percent[data-v-2f35b34c] {\n  height: var(--v08e6ed4a);\n  width: var(--v4a1f0289);\n  background: var(--v0bade3dc);\n  transition: var(--v4e602ba1);\n  border-radius: var(--v75e282b9);\n}\n\n/* Text */\n.progress-value[data-v-2f35b34c] {\n  font-weight: 600;\n  white-space: nowrap;\n  align-self: center;\n  justify-self: center;\n  color: var(--v1001132c);\n  z-index: 1000;\n}\n\n/* Grid-Zuweisung */\n.align-left[data-v-2f35b34c]   { grid-column: 1;\n}\n.align-center[data-v-2f35b34c] { grid-column: 2;\n}\n.align-right[data-v-2f35b34c]  { grid-column: 3;\n}\n.justify-top[data-v-2f35b34c]    { grid-row: 1;\n}\n.justify-center[data-v-2f35b34c] { grid-row: 2;\n}\n.justify-bottom[data-v-2f35b34c] { grid-row: 3;\n}\n\n.settings-container[data-v-e12619d5] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 1rem;\n}\n.add-btn[data-v-e12619d5] {\n  width: 150px;\n}\n.input[data-v-e12619d5] {\n  width: 100px;\n}\n.loading[data-v-e12619d5] {\n  height: 100%;\n  padding: 50px;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n  background-color: var(--app-response-background);\n}\n";})();
import { EVENT_ACTIONS_REGISTRY, EVENT_REGISTRY_ID, EVENT_ACTIONS_REGISTRY_ID } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate, deactivate, component, inject as inject$1 } from "@eclipse-daanse/tsm";
import { defineComponent, mergeModels, useCssVars, computed, toRefs, inject, onUnmounted, useModel, ref, watch, onMounted, createElementBlock, openBlock, withModifiers, createElementVNode, normalizeClass, toDisplayString, resolveComponent, createBlock, withCtx, createCommentVNode, createVNode, unref, createTextVNode } from "vue";
import { useRoute } from "vue-router";
import { VariableWrapper, useDatasourceRepository } from "org.eclipse.daanse.board.app.ui.vue.composables";
import helpers from "org.eclipse.daanse.board.app.lib.utils.helpers";
import { Documentation, Reference, Attribute, Enum, ModelClass } from "org.eclipse.daanse.board.app.lib.annotations";
const { identifiers } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
import { WidgetAction, WidgetActionInterface, Payload } from "org.eclipse.daanse.board.app.lib.events";
import { VariableInput } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID } from "org.eclipse.daanse.board.app.lib.api.widget";
var HorizontalAlign = /* @__PURE__ */ ((HorizontalAlign2) => {
  HorizontalAlign2["LEFT"] = "left";
  HorizontalAlign2["CENTER"] = "center";
  HorizontalAlign2["RIGHT"] = "right";
  return HorizontalAlign2;
})(HorizontalAlign || {});
var VerticalAlign = /* @__PURE__ */ ((VerticalAlign2) => {
  VerticalAlign2["TOP"] = "top";
  VerticalAlign2["CENTER"] = "center";
  VerticalAlign2["BOTTOM"] = "bottom";
  return VerticalAlign2;
})(VerticalAlign || {});
var __defProp$2 = Object.defineProperty;
var __getOwnPropDesc$2 = Object.getOwnPropertyDescriptor;
var __decorateClass$2 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$2(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$2(target, key, result);
  return result;
};
let ProgressSettings = class {
  progress = new VariableWrapper();
  fillColor = new VariableWrapper();
  gradientColor = new VariableWrapper();
  backgroundColor = new VariableWrapper();
  isGradient = false;
  isVertical = false;
  rotation = new VariableWrapper();
  min = new VariableWrapper();
  max = new VariableWrapper();
  textColor = new VariableWrapper();
  barThickness = new VariableWrapper();
  borderRadius = new VariableWrapper();
  valueAlign = HorizontalAlign.CENTER;
  valueJustify = VerticalAlign.CENTER;
};
__decorateClass$2([
  Documentation("The current progress value, potentially as a percentage or numeric string."),
  Reference("VariableWrapper")
], ProgressSettings.prototype, "progress", 2);
__decorateClass$2([
  Documentation("The color representing the filled portion of the progress bar."),
  Reference("VariableWrapper")
], ProgressSettings.prototype, "fillColor", 2);
__decorateClass$2([
  Documentation("An optional secondary color used if a gradient fill is enabled for the progress bar."),
  Reference("VariableWrapper")
], ProgressSettings.prototype, "gradientColor", 2);
__decorateClass$2([
  Documentation("The background color of the progress bar, representing the unfilled portion."),
  Reference("VariableWrapper")
], ProgressSettings.prototype, "backgroundColor", 2);
__decorateClass$2([
  Documentation("A flag indicating whether the progress bar should use a gradient color."),
  Attribute()
], ProgressSettings.prototype, "isGradient", 2);
__decorateClass$2([
  Documentation("A flag indicating whether the progress bar is oriented vertically."),
  Attribute()
], ProgressSettings.prototype, "isVertical", 2);
__decorateClass$2([
  Documentation("The rotation angle of the progress bar in degrees."),
  Reference("VariableWrapper")
], ProgressSettings.prototype, "rotation", 2);
__decorateClass$2([
  Documentation("The minimum value for the progress bar."),
  Reference("VariableWrapper")
], ProgressSettings.prototype, "min", 2);
__decorateClass$2([
  Documentation("The maximum value for the progress bar."),
  Reference("VariableWrapper")
], ProgressSettings.prototype, "max", 2);
__decorateClass$2([
  Documentation("The color of the text displayed on the progress bar."),
  Reference("VariableWrapper")
], ProgressSettings.prototype, "textColor", 2);
__decorateClass$2([
  Documentation("The thickness of the progress bar (e.g., '20px')."),
  Reference("VariableWrapper")
], ProgressSettings.prototype, "barThickness", 2);
__decorateClass$2([
  Documentation("The border radius of the progress bar (e.g., '10px')."),
  Reference("VariableWrapper")
], ProgressSettings.prototype, "borderRadius", 2);
__decorateClass$2([
  Documentation("The horizontal alignment of the value text."),
  Enum("HorizontalAlign")
], ProgressSettings.prototype, "valueAlign", 2);
__decorateClass$2([
  Documentation("The vertical alignment of the value text."),
  Enum("VerticalAlign")
], ProgressSettings.prototype, "valueJustify", 2);
ProgressSettings = __decorateClass$2([
  Documentation("Represents the visual settings for a progress indicator or bar."),
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.progress#//ProgressSettings" })
], ProgressSettings);
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = __getOwnPropDesc$1(target, key);
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp$1(target, key, result);
  return result;
};
class ProgressWidgetInterface extends WidgetActionInterface {
  setValue(value) {
    throw new Error("setValue not implemented");
  }
  reset() {
    throw new Error("reset not implemented");
  }
}
__decorateClass$1([
  WidgetAction({ eventType: "progress.setValue" })
], ProgressWidgetInterface.prototype, "setValue");
__decorateClass$1([
  WidgetAction({ eventType: "progress.reset" })
], ProgressWidgetInterface.prototype, "reset");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ProgressWidget",
  props: /* @__PURE__ */ mergeModels({
    datasourceId: {},
    id: {}
  }, {
    "configv": { required: true },
    "configvModifiers": {}
  }),
  emits: ["update:configv"],
  setup(__props, { expose: __expose }) {
    useCssVars((_ctx) => ({
      "v2eeb6fee": backgroundColor.value,
      "v75e282b9": barRadius.value,
      "e8645acc": horizontalPositionWrapper.value,
      "v08112608": verticalPositionWrapper.value,
      "v08e6ed4a": verticalPositionFiller.value,
      "v4a1f0289": horizontalPositionFiller.value,
      "v0bade3dc": backgroundProgressColor.value,
      "v4e602ba1": transition.value,
      "v1001132c": textColor.value
    }));
    const props = __props;
    const { datasourceId, id: widgetId } = toRefs(props);
    const eventBus = inject(identifiers.TINY_EMITTER);
    const actionsRegistry = inject(EVENT_ACTIONS_REGISTRY);
    const route = useRoute();
    const pageId = route.params.pageid || "";
    class ProgressWidgetApi extends ProgressWidgetInterface {
      setValue(value) {
        if (config.value?.progress) {
          config.value.progress.value = String(value);
        }
      }
      setMax(max) {
        if (config.value?.max) {
          config.value.max.value = String(max);
        }
      }
      reset() {
        if (config.value?.progress) {
          config.value.progress.value = "0";
        }
      }
    }
    const api = new ProgressWidgetApi();
    __expose(api);
    onUnmounted(() => {
      if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value);
    });
    const emitClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:ProgressWidget:click", {
        type: "widget:ProgressWidget:click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const emitRightClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:ProgressWidget:right_click", {
        type: "widget:ProgressWidget:right_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const config = useModel(__props, "configv");
    const data = ref(null);
    const { update } = useDatasourceRepository(datasourceId, "object", data);
    watch(datasourceId, (newVal, oldVal) => {
      update(newVal, oldVal);
    });
    const primitives = {
      isGradient: false,
      isVertical: false,
      valueAlign: "center",
      valueJustify: "center"
    };
    const wrappedDefaults = {
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
    onMounted(() => {
      if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, "ProgressWidget", pageId);
      if (!config.value) {
        config.value = new ProgressSettings();
      }
      for (const [key, defaultVal] of Object.entries(wrappedDefaults)) {
        const current = config.value[key];
        if (current === void 0 || current === null) {
          config.value[key] = new VariableWrapper(defaultVal);
        } else if (current instanceof VariableWrapper) ;
        else if (typeof current === "object" && "value" in current) {
          const v = new VariableWrapper(current.value);
          if ("variable" in current) v.variable = current.variable;
          config.value[key] = v;
        } else {
          config.value[key] = new VariableWrapper(current);
        }
      }
      for (const [key, defaultVal] of Object.entries(primitives)) {
        if (config.value[key] === void 0 || config.value[key] === null) {
          config.value[key] = defaultVal;
        }
      }
    });
    const backgroundColor = computed(() => config.value.backgroundColor?.value);
    const rotationVal = computed(() => {
      const val = config.value.rotation?.value;
      return parseFloat(val) || 0;
    });
    const gradientColor = computed(() => config.value.gradientColor?.value);
    const backgroundProgressColor = computed(
      () => config.value.isGradient ? `linear-gradient(${rotationVal.value}deg, ${gradientColor.value})` : config.value.fillColor?.value
    );
    const transition = computed(
      () => config.value.isVertical ? "height .7s ease" : "width .7s ease"
    );
    const minVal = computed(() => parseFloat(config.value.min?.value) || 0);
    const maxVal = computed(() => parseFloat(config.value.max?.value) || 100);
    const verticalPositionFiller = computed(
      () => config.value.isVertical && parsedProgress.value !== null ? `${parsedProgress.value / maxVal.value * 100}%` : "35px"
    );
    const horizontalPositionFiller = computed(
      () => !config.value.isVertical && parsedProgress.value !== null ? `${parsedProgress.value / maxVal.value * 100}%` : "35px"
    );
    const verticalPositionWrapper = computed(
      () => config.value.isVertical && parsedProgress.value !== null ? `35px` : "100%"
    );
    const horizontalPositionWrapper = computed(
      () => !config.value.isVertical && parsedProgress.value !== null ? `35px` : "100%"
    );
    const barRadius = computed(() => config.value.borderRadius?.value || "10px");
    const parsedProgress = computed(() => {
      const progWrapper = config.value.progress;
      if (!progWrapper) return null;
      const rawValue = progWrapper.value;
      if (!rawValue && rawValue !== 0) return null;
      const { parts } = helpers.widget.extractValuesAndFullObject(String(rawValue));
      let result = "";
      for (const part of parts) {
        const value = part.path || part.path === null ? helpers.widget.getValueByPath(data.value, part.path) : void 0;
        result += value !== void 0 ? value : part.text;
      }
      const numeric = parseFloat(result);
      if (isNaN(numeric)) return null;
      const min = minVal.value;
      const max = maxVal.value;
      return Math.max(min, Math.min(max, numeric));
    });
    const horizontalAlignClass = computed(() => {
      switch (config.value?.valueAlign) {
        case "left":
          return "align-left";
        case "right":
          return "align-right";
        default:
          return "align-center";
      }
    });
    const textColor = computed(() => config.value.textColor?.value || "#000000");
    const verticalAlignClass = computed(() => {
      switch (config.value?.valueJustify) {
        case "top":
          return "justify-top";
        case "bottom":
          return "justify-bottom";
        default:
          return "justify-center";
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "container",
        onClick: emitClick,
        onContextmenu: withModifiers(emitRightClick, ["prevent"])
      }, [
        createElementVNode("div", {
          class: normalizeClass(["grid-layout", { vertical: config.value.isVertical }])
        }, [
          createElementVNode("div", {
            class: normalizeClass(["progress-value", [verticalAlignClass.value, horizontalAlignClass.value]])
          }, toDisplayString(parsedProgress.value !== null ? parsedProgress.value : "n/a"), 3),
          _cache[0] || (_cache[0] = createElementVNode("div", { class: "progress-bar" }, [
            createElementVNode("div", { class: "progress-percent" })
          ], -1))
        ], 2)
      ], 32);
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
const ProgressWidget = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2f35b34c"]]);
const _hoisted_1 = { class: "settings-container" };
const _hoisted_2 = {
  key: 0,
  class: "mt-3"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProgressWidgetSettings",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const i18n = inject("i18n");
    const t = (key) => i18n ? i18n.t(key) : key;
    const opened = ref({
      widgetSection: false,
      storeSection: false
    });
    const gradientFields = ref([]);
    const widgetSettings = useModel(__props, "modelValue");
    const addItem = () => {
      return gradientFields.value.push({
        color: "#" + ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-6),
        location: Math.floor(Math.random() * 101)
      });
    };
    watch(
      [() => widgetSettings.value.fillColor, () => gradientFields.value],
      ([colorWrapper, fields]) => {
        const color = colorWrapper?.value || colorWrapper;
        if (widgetSettings.value.isGradient) {
          const grad = fields.length < 1 ? `${color} 0%, #FAFAFA 85%` : fields.map((v) => `${v.color} ${v.location}%`).join(", ");
          if (widgetSettings.value.gradientColor && "value" in widgetSettings.value.gradientColor) {
            widgetSettings.value.gradientColor.value = grad;
          } else {
            widgetSettings.value.gradientColor = grad;
          }
        }
      },
      { deep: true }
    );
    watch(
      () => widgetSettings.value.isGradient,
      (newValue) => {
        const color = widgetSettings.value.fillColor?.value || widgetSettings.value.fillColor;
        newValue ? gradientFields.value.push(
          { color: `${color}`, location: 0 },
          { color: "#FAFAFA", location: 85 }
        ) : gradientFields.value = [];
      }
    );
    const deleteField = (id) => {
      gradientFields.value = gradientFields.value.filter((_, i) => i !== id);
    };
    return (_ctx, _cache) => {
      const _component_va_input = resolveComponent("va-input");
      const _component_va_color_input = resolveComponent("va-color-input");
      const _component_va_select = resolveComponent("va-select");
      const _component_va_checkbox = resolveComponent("va-checkbox");
      const _component_va_button = resolveComponent("va-button");
      const _component_va_data_table = resolveComponent("va-data-table");
      const _component_va_collapse = resolveComponent("va-collapse");
      return openBlock(), createBlock(_component_va_collapse, {
        modelValue: opened.value.widgetSection,
        "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => opened.value.widgetSection = $event),
        header: t("progress:ProgressWidget.title"),
        icon: "settings"
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.progress,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => widgetSettings.value.progress = $event),
              label: t("progress:ProgressWidget.progress")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  label: t("progress:ProgressWidget.progress")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.min,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => widgetSettings.value.min = $event),
              label: t("progress:ProgressWidget.min")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  type: "number",
                  label: t("progress:ProgressWidget.min")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.max,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => widgetSettings.value.max = $event),
              label: t("progress:ProgressWidget.max")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  type: "number",
                  label: t("progress:ProgressWidget.max")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.fillColor,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => widgetSettings.value.fillColor = $event),
              label: t("progress:ProgressWidget.fillColor")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_color_input, {
                  "model-value": value,
                  onInput: change,
                  label: t("progress:ProgressWidget.fillColor")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.backgroundColor,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => widgetSettings.value.backgroundColor = $event),
              label: t("progress:ProgressWidget.backgroundColor")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_color_input, {
                  "model-value": value,
                  onInput: change,
                  label: t("progress:ProgressWidget.backgroundColor")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.textColor,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => widgetSettings.value.textColor = $event),
              label: t("progress:ProgressWidget.textColor")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_color_input, {
                  "model-value": value,
                  onInput: change,
                  label: t("progress:ProgressWidget.textColor")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.barThickness,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => widgetSettings.value.barThickness = $event),
              label: t("progress:ProgressWidget.barThickness")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  label: t("progress:ProgressWidget.barThickness"),
                  placeholder: "z.B. 20px"
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.borderRadius,
              "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => widgetSettings.value.borderRadius = $event),
              label: t("progress:ProgressWidget.borderRadius")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  label: t("progress:ProgressWidget.borderRadius"),
                  placeholder: "z.B. 10px"
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(_component_va_select, {
              modelValue: widgetSettings.value.valueAlign,
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => widgetSettings.value.valueAlign = $event),
              label: t("progress:ProgressWidget.valueAlign"),
              options: [
                { text: "alignStart", value: "left" },
                { text: "alignCenter", value: "center" },
                { text: "alignEnd", value: "right" }
              ],
              "value-by": "value",
              "text-by": "text"
            }, null, 8, ["modelValue", "label"]),
            createVNode(_component_va_select, {
              modelValue: widgetSettings.value.valueJustify,
              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => widgetSettings.value.valueJustify = $event),
              label: t("progress:ProgressWidget.valueAlign"),
              options: [
                { text: "alignStart", value: "top" },
                { text: "alignCenter", value: "center" },
                { text: "alignEnd", value: "bottom" }
              ],
              "value-by": "value",
              "text-by": "text"
            }, null, 8, ["modelValue", "label"]),
            createVNode(_component_va_checkbox, {
              modelValue: widgetSettings.value.isVertical,
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => widgetSettings.value.isVertical = $event),
              label: t("progress:ProgressWidget.isVertical")
            }, null, 8, ["modelValue", "label"]),
            createVNode(_component_va_checkbox, {
              modelValue: widgetSettings.value.isGradient,
              "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => widgetSettings.value.isGradient = $event),
              label: t("progress:ProgressWidget.isGradient")
            }, null, 8, ["modelValue", "label"])
          ]),
          widgetSettings.value.isGradient ? (openBlock(), createElementBlock("div", _hoisted_2, [
            createVNode(_component_va_button, {
              class: "add-btn",
              onClick: addItem
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(t("progress:ProgressWidget.addButton")), 1)
              ]),
              _: 1
            }),
            createElementVNode("div", null, [
              createVNode(unref(VariableInput), {
                modelValue: widgetSettings.value.rotation,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => widgetSettings.value.rotation = $event),
                label: t("progress:ProgressWidget.rotation")
              }, {
                default: withCtx(({ value, change }) => [
                  createVNode(_component_va_input, {
                    class: "mt-2",
                    "model-value": value,
                    onInput: change,
                    label: t("progress:ProgressWidget.rotation")
                  }, null, 8, ["model-value", "onInput", "label"])
                ]),
                _: 1
              }, 8, ["modelValue", "label"]),
              createVNode(_component_va_data_table, {
                class: "table-config",
                items: gradientFields.value,
                columns: [
                  { key: "color" },
                  { key: "location" },
                  { key: "actions" }
                ]
              }, {
                "cell(color)": withCtx(({ rowIndex }) => [
                  createVNode(_component_va_color_input, {
                    class: "input-color",
                    modelValue: gradientFields.value[rowIndex].color,
                    "onUpdate:modelValue": ($event) => gradientFields.value[rowIndex].color = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "cell(location)": withCtx(({ rowIndex }) => [
                  createVNode(_component_va_input, {
                    class: "input",
                    modelValue: gradientFields.value[rowIndex].location,
                    "onUpdate:modelValue": ($event) => gradientFields.value[rowIndex].location = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                "cell(actions)": withCtx(({ rowIndex }) => [
                  createVNode(_component_va_button, {
                    icon: "delete",
                    color: "danger",
                    onClick: ($event) => deleteField(rowIndex)
                  }, null, 8, ["onClick"])
                ]),
                _: 1
              }, 8, ["items"])
            ])
          ])) : createCommentVNode("", true)
        ]),
        _: 1
      }, 8, ["modelValue", "header"]);
    };
  }
});
const ProgressWidgetSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e12619d5"]]);
const Icon = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M72.8493%2032.89C69.3438%2031.2286%2065.5539%2030.2648%2061.6902%2030.0469C60.8631%2030.0002%2060.1953%2029.3283%2060.2006%2028.4999L60.2291%2024C60.2344%2023.1716%2060.9105%2022.5011%2061.7381%2022.5395C66.6971%2022.7695%2071.5664%2023.9822%2076.0614%2026.1127C81.0087%2028.4575%2085.3826%2031.8571%2088.8758%2036.0728C92.3689%2040.2885%2094.8967%2045.2179%2096.2814%2050.5147C97.6661%2055.8115%2097.8742%2061.3473%2096.891%2066.7332C95.9079%2072.119%2093.7574%2077.2243%2090.5906%2081.6903C87.4238%2086.1563%2083.3175%2089.8748%2078.5602%2092.5844C73.8029%2095.294%2068.51%2096.9291%2063.0533%2097.3748C58.0955%2097.7797%2053.1118%2097.1939%2048.3913%2095.657C47.6035%2095.4005%2047.2079%2094.5344%2047.4957%2093.7576L49.0588%2089.5378C49.3465%2088.761%2050.2086%2088.3683%2050.9989%2088.6169C54.6904%2089.778%2058.5764%2090.2155%2062.4428%2089.8997C66.8081%2089.5431%2071.0424%2088.2351%2074.8483%2086.0674C78.6541%2083.8997%2081.9392%2080.9249%2084.4726%2077.3521C87.0061%2073.7793%2088.7265%2069.6951%2089.513%2065.3864C90.2995%2061.0777%2090.133%2056.6491%2089.0252%2052.4116C87.9175%2048.1741%2085.8953%2044.2306%2083.1007%2040.8581C80.3062%2037.4856%2076.8071%2034.7658%2072.8493%2032.89Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M54.3529%2029.0093C54.5013%2029.8243%2053.9599%2030.6016%2053.1533%2030.7906C49.8368%2031.5678%2046.6767%2032.9043%2043.8089%2034.7425C43.1115%2035.1895%2042.1766%2035.0366%2041.6953%2034.3624L39.0806%2030.6999C38.5992%2030.0257%2038.754%2029.0862%2039.4469%2028.6322C43.2192%2026.1606%2047.4066%2024.3897%2051.8076%2023.4047C52.616%2023.2238%2053.3979%2023.7671%2053.5464%2024.5822L54.3529%2029.0093Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M36.5688%2038.9443C37.185%2039.498%2037.2324%2040.4441%2036.7101%2041.0872C34.5626%2043.7313%2032.8811%2046.7221%2031.7377%2049.9308C31.4597%2050.7112%2030.6267%2051.1623%2029.8334%2050.9236L25.5243%2049.6269C24.731%2049.3882%2024.2785%2048.5505%2024.5487%2047.7673C26.0199%2043.5042%2028.2481%2039.5412%2031.1261%2036.069C31.6548%2035.4312%2032.6057%2035.3825%2033.2219%2035.9363L36.5688%2038.9443Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.5877%2057.6524C29.4138%2057.7142%2030.0295%2058.4341%2030.0091%2059.2623C29.9252%2062.6676%2030.4219%2066.0625%2031.4779%2069.3011C31.7347%2070.0887%2031.3511%2070.9548%2030.5773%2071.2507L26.374%2072.8578C25.6003%2073.1536%2024.7301%2072.767%2024.4654%2071.982C23.0245%2067.7085%2022.3663%2063.2099%2022.5225%2058.7028C22.5512%2057.8748%2023.2741%2057.2552%2024.1002%2057.3169L28.5877%2057.6524Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M33.3378%2076.7775C34.039%2076.3362%2034.962%2076.5494%2035.4377%2077.2276C37.3939%2080.0162%2039.8108%2082.4515%2042.5846%2084.4287C43.2592%2084.9095%2043.4654%2085.8341%2043.0188%2086.5319L40.5933%2090.3222C40.1467%2091.02%2039.2171%2091.2262%2038.5378%2090.7521C34.8394%2088.1713%2031.6367%2084.9443%2029.0839%2081.2265C28.615%2080.5435%2028.8281%2079.6155%2029.5293%2079.1743L33.3378%2076.7775Z'%20fill='%23606060'/%3e%3cpath%20d='M62.7264%2071.7358C62.7256%2071.7369%2062.7253%2071.7382%2062.7255%2071.7394V71.7394V71.7394C62.7257%2071.7407%2062.7254%2071.742%2062.7246%2071.7431L59.2097%2076.6014C58.7241%2077.2726%2057.7863%2077.4231%2057.1152%2076.9375L41.3164%2065.5073C40.6452%2065.0217%2040.4947%2064.084%2040.9803%2063.4128L43.6181%2059.7669C44.1036%2059.0957%2045.0414%2058.9453%2045.7126%2059.4309L55.4326%2066.4631C56.1038%2066.9487%2057.0416%2066.7983%2057.5271%2066.1271L73.3534%2044.2521C73.839%2043.5809%2074.7767%2043.4304%2075.4479%2043.916L79.0938%2046.5537C79.765%2047.0393%2079.9154%2047.9771%2079.4298%2048.6483L62.7264%2071.7358Z'%20fill='%23606060'/%3e%3c/svg%3e";
const ProgressWidgetEvents = [
  { name: "Progress Clicked", type: "click", description: "Triggered when the progress widget is clicked", payloadType: Payload },
  { name: "Progress Right Clicked", type: "right_click", description: "Triggered when the progress widget is right-clicked", payloadType: Payload }
];
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
var __decorateParam = (index, decorator) => (target, key) => decorator(target, key, index);
const WIDGET_TYPE = "ProgressWidget";
let ProgressWidgetProvider = class {
  constructor(events, actions) {
    this.events = events;
    this.actions = actions;
  }
  type = WIDGET_TYPE;
  name = "Progress";
  icon = Icon;
  supportedDSTypes = [];
  component = ProgressWidget;
  settingsComponent = ProgressWidgetSettings;
  register() {
    this.events.registerWidget(WIDGET_TYPE, ProgressWidgetEvents);
    this.actions.registerWidgetType(WIDGET_TYPE, ProgressWidgetInterface, "widget");
  }
  unregister() {
    this.events.unregisterWidget(WIDGET_TYPE);
    this.actions.unregisterWidgetType(WIDGET_TYPE);
  }
};
__decorateClass([
  activate()
], ProgressWidgetProvider.prototype, "register", 1);
__decorateClass([
  deactivate()
], ProgressWidgetProvider.prototype, "unregister", 1);
ProgressWidgetProvider = __decorateClass([
  component({
    service: [WIDGET_SERVICE_ID],
    properties: { "widget.type": WIDGET_TYPE }
  }),
  __decorateParam(0, inject$1(EVENT_REGISTRY_ID)),
  __decorateParam(1, inject$1(EVENT_ACTIONS_REGISTRY_ID))
], ProgressWidgetProvider);
export {
  ProgressWidget,
  ProgressWidgetProvider,
  ProgressWidgetSettings
};
