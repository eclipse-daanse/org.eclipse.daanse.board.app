(function(){var i="ui.vue.widget.svg.base",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.svg[data-v-bd90a97f] {\n    width: 100%;\n    height: 100%;\n}\n.fallback[data-v-bd90a97f] {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: #666;\n    font-style: italic;\n}\n\n.settings-container[data-v-932707bc] {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1.5rem;\n}\n.class-config-header[data-v-932707bc] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n.class-config-header h3[data-v-932707bc] {\n    margin: 0;\n    font-size: 1rem;\n    color: var(--va-text-primary);\n}\n.class-list[data-v-932707bc] {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n.class-item[data-v-932707bc] {\n    border: 1px solid var(--va-background-element);\n    border-radius: 8px;\n    padding: 1rem;\n    background-color: var(--va-background-primary);\n}\n.class-item-header[data-v-932707bc] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 1rem;\n    gap: 1rem;\n}\n.input-class-name[data-v-932707bc] {\n    flex-grow: 1;\n}\n.class-item-properties[data-v-932707bc] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding-left: 0.5rem;\n    border-left: 2px solid var(--va-primary);\n}\n.width-100[data-v-932707bc] {\n    width: 100%;\n}\n";})();
import { WidgetAction, WidgetActionInterface, EVENT_ACTIONS_REGISTRY, Payload, EVENT_REGISTRY_ID, EVENT_ACTIONS_REGISTRY_ID } from "org.eclipse.daanse.board.app.lib.events";
import { activate, deactivate, component, inject as inject$1 } from "@eclipse-daanse/tsm";
import { defineComponent, mergeModels, toRefs, useModel, inject, ref, getCurrentInstance, onMounted, onUnmounted, watch, computed, createElementBlock, openBlock, Fragment, createElementVNode, createCommentVNode, mergeProps, withModifiers, resolveComponent, createBlock, withCtx, createVNode, unref, createTextVNode, toDisplayString, renderList, markRaw } from "vue";
import { VariableWrapper } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { Reference, ModelClass, Documentation, Attribute } from "org.eclipse.daanse.board.app.lib.annotations";
import { useRoute } from "vue-router";
const { identifiers } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
import { VariableInput } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
var __defProp$4 = Object.defineProperty;
var __getOwnPropDesc$4 = Object.getOwnPropertyDescriptor;
var __decorateClass$4 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$4(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$4(target, key, result);
  return result;
};
let SvgSettings = class {
  src = new VariableWrapper();
  classesConfig = [];
};
__decorateClass$4([
  Reference("VariableWrapper")
], SvgSettings.prototype, "src", 2);
__decorateClass$4([
  Reference("SvgClassConfigMapEntry")
], SvgSettings.prototype, "classesConfig", 2);
SvgSettings = __decorateClass$4([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgSettings" })
], SvgSettings);
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = __getOwnPropDesc$3(target, key);
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(target, key, result) || result;
  if (result) __defProp$3(target, key, result);
  return result;
};
class SvgWidgetInterface extends WidgetActionInterface {
  zoom(level) {
    throw new Error("zoom not implemented");
  }
  resetZoom() {
    throw new Error("resetZoom not implemented");
  }
}
__decorateClass$3([
  WidgetAction({ eventType: "svg.zoom" })
], SvgWidgetInterface.prototype, "zoom");
__decorateClass$3([
  WidgetAction({ eventType: "svg.resetZoom" })
], SvgWidgetInterface.prototype, "resetZoom");
const _hoisted_1$1 = ["innerHTML"];
const _hoisted_2$1 = ["innerHTML"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SvgWidget",
  props: /* @__PURE__ */ mergeModels({
    datasourceId: {},
    id: {}
  }, {
    "configv": { required: true },
    "configvModifiers": {}
  }),
  emits: ["update:configv"],
  setup(__props, { expose: __expose }) {
    const props = __props;
    const { id: widgetId } = toRefs(props);
    const config = useModel(__props, "configv");
    const eventBus = inject(identifiers.TINY_EMITTER);
    const actionsRegistry = inject(EVENT_ACTIONS_REGISTRY);
    const route = useRoute();
    const pageId = route.params.pageid || "";
    const svgZoomLevel = ref(1);
    const svgContainerRef = ref(null);
    class SvgWidgetApi extends SvgWidgetInterface {
      zoom(level) {
        svgZoomLevel.value = Math.max(0.1, Math.min(10, level));
        const el = svgContainerRef.value;
        if (el) {
          el.style.transform = `scale(${svgZoomLevel.value})`;
          el.style.transformOrigin = "top left";
        }
      }
      resetZoom() {
        svgZoomLevel.value = 1;
        const el = svgContainerRef.value;
        if (el) {
          el.style.transform = "";
          el.style.transformOrigin = "";
        }
      }
    }
    const api = new SvgWidgetApi();
    __expose(api);
    const emitClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:SVGWidget:click", {
        type: "widget:SVGWidget:click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const emitRightClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:SVGWidget:right_click", {
        type: "widget:SVGWidget:right_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const svgSource = ref("");
    const inst = getCurrentInstance();
    const scope = (inst?.type).__scopeId;
    const defaultConfig = new SvgSettings();
    const loadSvg = async (srcWrapper) => {
      const src = srcWrapper?.value || srcWrapper;
      if (src && typeof src === "string") {
        console.log("Loading SVG from:", src);
        try {
          const req = await fetch(src);
          const svgObject = await req.text();
          svgSource.value = svgObject;
          console.log("SVG loaded successfully, length:", svgObject.length);
        } catch (error) {
          console.error("Failed to load SVG:", error);
          svgSource.value = "";
        }
      } else {
        console.warn("No SVG src provided");
        svgSource.value = "";
      }
    };
    const ensureWrapper = (obj, key, defaultVal) => {
      const current = obj[key];
      if (current === void 0 || current === null) {
        obj[key] = new VariableWrapper(defaultVal);
      } else if (current instanceof VariableWrapper) ;
      else if (typeof current === "object" && "value" in current) {
        const v = new VariableWrapper(current.value);
        if ("variable" in current) v.variable = current.variable;
        obj[key] = v;
      } else {
        obj[key] = new VariableWrapper(current);
      }
    };
    onMounted(async () => {
      if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, "SVGWidget", pageId);
      if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
        console.log("SVG config:", config.value);
        console.log("SVG config.value.src:", config.value.src);
        console.log("SVG config.value (as any).settings:", config.value.settings);
        if (!config.value.src && config.value.settings?.src) {
          console.log("Using legacy settings structure");
          config.value.src = config.value.settings.src;
          if (config.value.settings.classesConfig) {
            config.value.classesConfig = config.value.settings.classesConfig;
          }
        }
        ensureWrapper(config.value, "src", "");
        if (config.value.classesConfig) {
          config.value.classesConfig.forEach((entry) => {
            if (entry.value) {
              ensureWrapper(entry.value, "fill", "");
              ensureWrapper(entry.value, "stroke", "");
              ensureWrapper(entry.value, "strokeWidth", "");
            }
          });
        }
        await loadSvg(config.value.src);
      }
    });
    onUnmounted(() => {
      if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value);
    });
    watch(
      () => config.value?.src?.value,
      (newSrc) => {
        console.log("SVG src changed to:", newSrc);
        loadSvg(newSrc);
      }
    );
    const styles = computed(() => {
      let string = "";
      if (config.value?.classesConfig && config.value.classesConfig.length > 0) {
        string += "<style>";
        config.value.classesConfig.forEach((classConfig) => {
          if (classConfig.value?.className) {
            const fill = classConfig.value.fill?.value || "";
            const stroke = classConfig.value.stroke?.value || "";
            const strokeWidth = classConfig.value.strokeWidth?.value || "";
            string += `[${scope || ""}] .${classConfig.value.className} {
                    stroke: ${stroke};
                    fill: ${fill};
                    stroke-width: ${strokeWidth};
                }`;
          }
        });
        string += "</style>";
      }
      return string;
    });
    const svgSourceParced = computed(() => {
      let processedString = svgSource.value;
      return processedString;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", { innerHTML: styles.value }, null, 8, _hoisted_1$1),
        createElementVNode("div", mergeProps(_ctx.$attrs, {
          class: "svg",
          innerHTML: svgSourceParced.value,
          onClick: emitClick,
          onContextmenu: withModifiers(emitRightClick, ["prevent"]),
          ref_key: "svgContainerRef",
          ref: svgContainerRef
        }), null, 16, _hoisted_2$1),
        !svgSourceParced.value && !config.value?.src?.value ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "fallback",
          onClick: emitClick,
          onContextmenu: withModifiers(emitRightClick, ["prevent"])
        }, " No SVG configured ", 32)) : createCommentVNode("", true)
      ], 64);
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
const SvgWidget = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bd90a97f"]]);
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
let SvgConfigItem = class {
  fill = new VariableWrapper();
  stroke = new VariableWrapper();
  strokeWidth = new VariableWrapper();
  className;
};
__decorateClass$2([
  Reference("VariableWrapper")
], SvgConfigItem.prototype, "fill", 2);
__decorateClass$2([
  Reference("VariableWrapper")
], SvgConfigItem.prototype, "stroke", 2);
__decorateClass$2([
  Reference("VariableWrapper")
], SvgConfigItem.prototype, "strokeWidth", 2);
__decorateClass$2([
  Documentation("The CSS class name associated with this SVG styling configuration."),
  Attribute()
], SvgConfigItem.prototype, "className", 2);
SvgConfigItem = __decorateClass$2([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgConfigItem" })
], SvgConfigItem);
var __defProp$1 = Object.defineProperty;
var __getOwnPropDesc$1 = Object.getOwnPropertyDescriptor;
var __decorateClass$1 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$1(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$1(target, key, result);
  return result;
};
let SvgClassConfigMapEntry = class {
  key;
  value = new SvgConfigItem();
};
__decorateClass$1([
  Documentation("The name of the SVG class."),
  Attribute()
], SvgClassConfigMapEntry.prototype, "key", 2);
__decorateClass$1([
  Reference("SvgConfigItem")
], SvgClassConfigMapEntry.prototype, "value", 2);
SvgClassConfigMapEntry = __decorateClass$1([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.svg.base#//SvgClassConfigMapEntry" })
], SvgClassConfigMapEntry);
const _hoisted_1 = { class: "settings-container" };
const _hoisted_2 = { class: "class-config-header" };
const _hoisted_3 = { class: "class-list" };
const _hoisted_4 = { class: "class-item-header" };
const _hoisted_5 = { class: "class-item-properties" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SvgWidgetSettings",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const i18n = inject("i18n");
    const t = (key) => i18n ? i18n.t(key) : key;
    const widgetSettings = useModel(__props, "modelValue");
    const opened = ref({
      widgetSection: false,
      storeSection: false
    });
    const initializeFields = () => {
      if (widgetSettings.value && widgetSettings.value.classesConfig) {
        return widgetSettings.value.classesConfig.map((entry) => {
          return {
            className: entry.key || "",
            fill: markRaw(entry.value?.fill instanceof VariableWrapper ? entry.value.fill : new VariableWrapper(entry.value?.fill || "")),
            stroke: markRaw(entry.value?.stroke instanceof VariableWrapper ? entry.value.stroke : new VariableWrapper(entry.value?.stroke || "")),
            strokeWidth: markRaw(entry.value?.strokeWidth instanceof VariableWrapper ? entry.value.strokeWidth : new VariableWrapper(entry.value?.strokeWidth || ""))
          };
        });
      }
      return [
        {
          className: "primary",
          fill: markRaw(new VariableWrapper("#ff5733")),
          stroke: markRaw(new VariableWrapper("#1e8449")),
          strokeWidth: markRaw(new VariableWrapper("5"))
        }
      ];
    };
    const fields = ref(initializeFields());
    const addItems = () => {
      fields.value.push({
        className: "",
        fill: markRaw(new VariableWrapper("")),
        stroke: markRaw(new VariableWrapper("")),
        strokeWidth: markRaw(new VariableWrapper(""))
      });
    };
    const removeItem = (index) => {
      fields.value.splice(index, 1);
    };
    watch(
      fields,
      () => {
        widgetSettings.value.classesConfig = fields.value.filter((f) => f.className).map((f) => {
          const entry = new SvgClassConfigMapEntry();
          entry.key = f.className;
          entry.value = new SvgConfigItem();
          entry.value.fill = f.fill;
          entry.value.stroke = f.stroke;
          entry.value.strokeWidth = f.strokeWidth;
          entry.value.className = f.className;
          return entry;
        });
      },
      { deep: true }
    );
    return (_ctx, _cache) => {
      const _component_va_input = resolveComponent("va-input");
      const _component_va_button = resolveComponent("va-button");
      const _component_va_color_input = resolveComponent("va-color-input");
      const _component_va_collapse = resolveComponent("va-collapse");
      return openBlock(), createBlock(_component_va_collapse, {
        modelValue: opened.value.widgetSection,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => opened.value.widgetSection = $event),
        icon: "settings",
        header: t("svgBase:SvgWidget.title")
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.src,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => widgetSettings.value.src = $event),
              label: t("svgBase:SvgWidget.svgSrc")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  label: t("svgBase:SvgWidget.svgSrc")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createElementVNode("div", _hoisted_2, [
              _cache[2] || (_cache[2] = createElementVNode("h3", null, "Classes Configuration", -1)),
              createVNode(_component_va_button, {
                class: "add-button",
                onClick: addItems,
                size: "small"
              }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(t("svgBase:SvgWidget.addButton")), 1)
                ]),
                _: 1
              })
            ]),
            createElementVNode("div", _hoisted_3, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(fields.value, (field, index) => {
                return openBlock(), createElementBlock("div", {
                  key: index,
                  class: "class-item"
                }, [
                  createElementVNode("div", _hoisted_4, [
                    createVNode(_component_va_input, {
                      class: "input-class-name",
                      modelValue: field.className,
                      "onUpdate:modelValue": ($event) => field.className = $event,
                      label: "Class Name"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_va_button, {
                      preset: "plain",
                      icon: "delete",
                      color: "danger",
                      onClick: ($event) => removeItem(index),
                      size: "small"
                    }, null, 8, ["onClick"])
                  ]),
                  createElementVNode("div", _hoisted_5, [
                    createVNode(unref(VariableInput), {
                      modelValue: field.fill,
                      "onUpdate:modelValue": ($event) => field.fill = $event,
                      label: "Fill Color"
                    }, {
                      default: withCtx(({ value, change }) => [
                        createVNode(_component_va_color_input, {
                          "model-value": value,
                          label: t("svgBase:SvgWidget.fillColor"),
                          onInput: change,
                          class: "width-100"
                        }, null, 8, ["model-value", "label", "onInput"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(VariableInput), {
                      modelValue: field.stroke,
                      "onUpdate:modelValue": ($event) => field.stroke = $event,
                      label: "Stroke Color"
                    }, {
                      default: withCtx(({ value, change }) => [
                        createVNode(_component_va_color_input, {
                          "model-value": value,
                          label: t("svgBase:SvgWidget.strokeColor"),
                          onInput: change,
                          class: "width-100"
                        }, null, 8, ["model-value", "label", "onInput"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(unref(VariableInput), {
                      modelValue: field.strokeWidth,
                      "onUpdate:modelValue": ($event) => field.strokeWidth = $event,
                      label: "Stroke Width"
                    }, {
                      default: withCtx(({ value, change }) => [
                        createVNode(_component_va_input, {
                          "model-value": value,
                          onInput: change,
                          label: t("svgBase:SvgWidget.strokeWidth")
                        }, null, 8, ["model-value", "onInput", "label"])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]);
              }), 128))
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "header"]);
    };
  }
});
const SvgWidgetSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-932707bc"]]);
const Icon = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M32.6925%2072.4125C31.6925%2072.4125%2030.6425%2072.3375%2029.5425%2072.1875C28.4675%2072.0625%2027.4425%2071.8625%2026.4675%2071.5875C25.4925%2071.3125%2024.6175%2070.9875%2023.8425%2070.6125C23.1675%2070.2875%2022.6925%2069.8625%2022.4175%2069.3375C22.1425%2068.7875%2022.0425%2068.2125%2022.1175%2067.6125C22.1925%2067.0125%2022.405%2066.4875%2022.755%2066.0375C23.105%2065.5625%2023.5675%2065.25%2024.1425%2065.1C24.7175%2064.925%2025.3675%2065%2026.0925%2065.325C27.0425%2065.775%2028.1175%2066.125%2029.3175%2066.375C30.5175%2066.625%2031.6425%2066.75%2032.6925%2066.75C34.3425%2066.75%2035.4925%2066.5375%2036.1425%2066.1125C36.8175%2065.6625%2037.155%2065.1125%2037.155%2064.4625C37.155%2063.8875%2036.9175%2063.425%2036.4425%2063.075C35.9925%2062.725%2035.18%2062.425%2034.005%2062.175L29.6175%2061.2375C27.2175%2060.7375%2025.43%2059.8625%2024.255%2058.6125C23.08%2057.3625%2022.4925%2055.75%2022.4925%2053.775C22.4925%2052.475%2022.755%2051.3%2023.28%2050.25C23.83%2049.175%2024.5925%2048.2625%2025.5675%2047.5125C26.5675%2046.7625%2027.7425%2046.1875%2029.0925%2045.7875C30.4675%2045.3625%2031.9925%2045.15%2033.6675%2045.15C34.9675%2045.15%2036.28%2045.3%2037.605%2045.6C38.955%2045.875%2040.1175%2046.3%2041.0925%2046.875C41.6675%2047.175%2042.08%2047.5875%2042.33%2048.1125C42.58%2048.6375%2042.68%2049.1875%2042.63%2049.7625C42.58%2050.3125%2042.38%2050.8%2042.03%2051.225C41.705%2051.65%2041.255%2051.9375%2040.68%2052.0875C40.13%2052.2125%2039.4675%2052.1125%2038.6925%2051.7875C37.9675%2051.4625%2037.1425%2051.225%2036.2175%2051.075C35.3175%2050.9%2034.4425%2050.8125%2033.5925%2050.8125C32.6675%2050.8125%2031.88%2050.925%2031.23%2051.15C30.58%2051.35%2030.08%2051.65%2029.73%2052.05C29.405%2052.45%2029.2425%2052.9125%2029.2425%2053.4375C29.2425%2053.9625%2029.455%2054.4125%2029.88%2054.7875C30.33%2055.1375%2031.1425%2055.4375%2032.3175%2055.6875L36.6675%2056.625C39.0925%2057.15%2040.905%2058.0125%2042.105%2059.2125C43.305%2060.4125%2043.905%2061.975%2043.905%2063.9C43.905%2065.2%2043.6425%2066.375%2043.1175%2067.425C42.5925%2068.475%2041.8425%2069.375%2040.8675%2070.125C39.8925%2070.85%2038.7175%2071.4125%2037.3425%2071.8125C35.9675%2072.2125%2034.4175%2072.4125%2032.6925%2072.4125Z'%20fill='%23606060'/%3e%3cpath%20d='M58.3311%2072.3375C57.3811%2072.3375%2056.6061%2072.1375%2056.0061%2071.7375C55.4311%2071.3375%2054.9436%2070.7%2054.5436%2069.825L45.4686%2049.8C45.0686%2048.925%2044.9436%2048.1375%2045.0936%2047.4375C45.2436%2046.7375%2045.5936%2046.2%2046.1436%2045.825C46.6936%2045.425%2047.3811%2045.225%2048.2061%2045.225C49.2311%2045.225%2049.9936%2045.45%2050.4936%2045.9C51.0186%2046.35%2051.4686%2047.0125%2051.8436%2047.8875L59.4936%2065.5875H57.3936L65.0436%2047.85C65.4186%2046.975%2065.8686%2046.325%2066.3936%2045.9C66.9186%2045.45%2067.6561%2045.225%2068.6061%2045.225C69.3811%2045.225%2070.0311%2045.425%2070.5561%2045.825C71.0811%2046.2%2071.4061%2046.7375%2071.5311%2047.4375C71.6811%2048.1375%2071.5561%2048.925%2071.1561%2049.8L62.0436%2069.825C61.6686%2070.7%2061.1936%2071.3375%2060.6186%2071.7375C60.0436%2072.1375%2059.2811%2072.3375%2058.3311%2072.3375Z'%20fill='%23606060'/%3e%3cpath%20d='M87.4173%2072.4125C84.3923%2072.4125%2081.8173%2071.85%2079.6923%2070.725C77.5923%2069.6%2075.9923%2068.025%2074.8923%2066C73.7923%2063.975%2073.2423%2061.6125%2073.2423%2058.9125C73.2423%2056.8125%2073.5673%2054.925%2074.2173%2053.25C74.8923%2051.55%2075.8548%2050.1%2077.1048%2048.9C78.3548%2047.675%2079.8798%2046.75%2081.6798%2046.125C83.5048%2045.475%2085.5673%2045.15%2087.8673%2045.15C89.1173%2045.15%2090.3923%2045.275%2091.6923%2045.525C92.9923%2045.75%2094.2673%2046.1875%2095.5173%2046.8375C96.1673%2047.1375%2096.6048%2047.5625%2096.8298%2048.1125C97.0798%2048.6375%2097.1548%2049.2%2097.0548%2049.8C96.9798%2050.375%2096.7673%2050.9125%2096.4173%2051.4125C96.0923%2051.8875%2095.6423%2052.2125%2095.0673%2052.3875C94.4923%2052.5375%2093.8423%2052.45%2093.1173%2052.125C92.3673%2051.775%2091.5548%2051.5125%2090.6798%2051.3375C89.8048%2051.1375%2088.8798%2051.0375%2087.9048%2051.0375C86.2298%2051.0375%2084.8298%2051.3375%2083.7048%2051.9375C82.6048%2052.5375%2081.7798%2053.425%2081.2298%2054.6C80.6798%2055.775%2080.4048%2057.2125%2080.4048%2058.9125C80.4048%2061.4625%2081.0298%2063.3875%2082.2798%2064.6875C83.5298%2065.9875%2085.3798%2066.6375%2087.8298%2066.6375C88.5798%2066.6375%2089.3923%2066.5625%2090.2673%2066.4125C91.1673%2066.2625%2092.0673%2066.05%2092.9673%2065.775L91.6923%2068.3625V61.95H89.0673C88.2173%2061.95%2087.5548%2061.7375%2087.0798%2061.3125C86.6298%2060.8875%2086.4048%2060.2875%2086.4048%2059.5125C86.4048%2058.7375%2086.6298%2058.15%2087.0798%2057.75C87.5548%2057.325%2088.2173%2057.1125%2089.0673%2057.1125H94.6173C95.4923%2057.1125%2096.1548%2057.35%2096.6048%2057.825C97.0798%2058.275%2097.3173%2058.9375%2097.3173%2059.8125V68.1C97.3173%2068.85%2097.1548%2069.4875%2096.8298%2070.0125C96.5298%2070.5375%2096.0423%2070.9125%2095.3673%2071.1375C94.1923%2071.5375%2092.9173%2071.85%2091.5423%2072.075C90.1673%2072.3%2088.7923%2072.4125%2087.4173%2072.4125Z'%20fill='%23606060'/%3e%3c/svg%3e";
const SVGWidgetEvents = [
  { name: "SVG Clicked", type: "click", description: "Triggered when the SVG widget is clicked", payloadType: Payload },
  { name: "SVG Right Clicked", type: "right_click", description: "Triggered when the SVG widget is right-clicked", payloadType: Payload }
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
const WIDGET_SERVICE = "daanse.widget";
const WIDGET_TYPE = "SVGWidget";
let SVGWidgetProvider = class {
  constructor(events, actions) {
    this.events = events;
    this.actions = actions;
  }
  type = WIDGET_TYPE;
  component = SvgWidget;
  settingsComponent = SvgWidgetSettings;
  supportedDSTypes = [];
  icon = Icon;
  name = "SVG";
  register() {
    this.events.registerWidget(WIDGET_TYPE, SVGWidgetEvents);
    this.actions.registerWidgetType(WIDGET_TYPE, SvgWidgetInterface, "widget");
  }
  unregister() {
    this.events.unregisterWidget(WIDGET_TYPE);
    this.actions.unregisterWidgetType(WIDGET_TYPE);
  }
};
__decorateClass([
  activate()
], SVGWidgetProvider.prototype, "register", 1);
__decorateClass([
  deactivate()
], SVGWidgetProvider.prototype, "unregister", 1);
SVGWidgetProvider = __decorateClass([
  component({
    service: [WIDGET_SERVICE],
    properties: { "widget.type": WIDGET_TYPE }
  }),
  __decorateParam(0, inject$1(EVENT_REGISTRY_ID)),
  __decorateParam(1, inject$1(EVENT_ACTIONS_REGISTRY_ID))
], SVGWidgetProvider);
export {
  SVGWidgetProvider,
  SvgWidget,
  SvgWidgetSettings
};
