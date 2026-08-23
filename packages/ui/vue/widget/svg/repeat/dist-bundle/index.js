(function(){var i="ui.vue.widget.svg.repeat",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.repeatable-svg-container[data-v-2371f225] {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: row;\n    object-fit: contain;\n}\n\n.settings-container[data-v-20524639] {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n}\n.colors[data-v-20524639] {\n    display: flex;\n    justify-content: space-between;\n}\n.color-input[data-v-20524639] {\n    width: 49%;\n}\n.loading[data-v-20524639] {\n    height: 100%;\n    padding: 50px;\n    border-radius: 4px;\n    margin-bottom: 1rem;\n    background-color: var(--app-response-background);\n}\n";})();
import { EVENT_ACTIONS_REGISTRY, EVENT_REGISTRY_ID, EVENT_ACTIONS_REGISTRY_ID } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate, deactivate, component, inject as inject$1 } from "@eclipse-daanse/tsm";
import { defineComponent, mergeModels, toRefs, useModel, inject, ref, onMounted, onUnmounted, watch, computed, createElementBlock, openBlock, withModifiers, createElementVNode, Fragment, renderList, resolveComponent, createBlock, withCtx, createVNode, unref } from "vue";
import { VariableWrapper } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { Reference, Documentation, Attribute, ModelClass } from "org.eclipse.daanse.board.app.lib.annotations";
import { useRoute } from "vue-router";
const { identifiers } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
import { WidgetAction, WidgetActionInterface, Payload } from "org.eclipse.daanse.board.app.lib.events";
import { VariableInput } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { WIDGET_SERVICE_ID } from "org.eclipse.daanse.board.app.lib.api.widget";
var __defProp$3 = Object.defineProperty;
var __getOwnPropDesc$3 = Object.getOwnPropertyDescriptor;
var __decorateClass$3 = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc$3(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp$3(target, key, result);
  return result;
};
let SVGItemStyles = class {
  fill = new VariableWrapper();
  stroke = new VariableWrapper();
  className;
};
__decorateClass$3([
  Reference("VariableWrapper")
], SVGItemStyles.prototype, "fill", 2);
__decorateClass$3([
  Reference("VariableWrapper")
], SVGItemStyles.prototype, "stroke", 2);
__decorateClass$3([
  Documentation("The CSS class name to apply to the SVG item."),
  Attribute()
], SVGItemStyles.prototype, "className", 2);
SVGItemStyles = __decorateClass$3([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat#//SVGItemStyles" })
], SVGItemStyles);
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
let RepeatableSVGSettings = class {
  src = new VariableWrapper();
  activeItemStyles = new SVGItemStyles();
  defaultItemStyles = new SVGItemStyles();
  repetitions = new VariableWrapper();
  progress = new VariableWrapper();
};
__decorateClass$2([
  Reference("VariableWrapper")
], RepeatableSVGSettings.prototype, "src", 2);
__decorateClass$2([
  Reference("SVGItemStyles")
], RepeatableSVGSettings.prototype, "activeItemStyles", 2);
__decorateClass$2([
  Reference("SVGItemStyles")
], RepeatableSVGSettings.prototype, "defaultItemStyles", 2);
__decorateClass$2([
  Reference("VariableWrapper")
], RepeatableSVGSettings.prototype, "repetitions", 2);
__decorateClass$2([
  Reference("VariableWrapper")
], RepeatableSVGSettings.prototype, "progress", 2);
RepeatableSVGSettings = __decorateClass$2([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.svg.repeat#//RepeatableSVGSettings" })
], RepeatableSVGSettings);
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
class RepeatableSvgWidgetInterface extends WidgetActionInterface {
  zoom(level) {
    throw new Error("zoom not implemented");
  }
  resetZoom() {
    throw new Error("resetZoom not implemented");
  }
}
__decorateClass$1([
  WidgetAction({ eventType: "svgRepeat.zoom" })
], RepeatableSvgWidgetInterface.prototype, "zoom");
__decorateClass$1([
  WidgetAction({ eventType: "svgRepeat.resetZoom" })
], RepeatableSvgWidgetInterface.prototype, "resetZoom");
const _hoisted_1$1 = ["viewBox"];
const _hoisted_2 = { id: "bubbleKenseo" };
const _hoisted_3 = ["width"];
const _hoisted_4 = ["fill", "stroke"];
const _hoisted_5 = ["innerHTML", "transform"];
const _hoisted_6 = ["fill", "stroke"];
const _hoisted_7 = ["innerHTML", "transform"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "RepeatableSvgWidget",
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
    const rsvgZoomLevel = ref(1);
    const rsvgContainerRef = ref(null);
    class RepeatableSvgWidgetApi extends RepeatableSvgWidgetInterface {
      zoom(level) {
        rsvgZoomLevel.value = Math.max(0.1, Math.min(10, level));
        const el = rsvgContainerRef.value;
        if (el) {
          el.style.transform = `scale(${rsvgZoomLevel.value})`;
          el.style.transformOrigin = "top left";
        }
      }
      resetZoom() {
        rsvgZoomLevel.value = 1;
        const el = rsvgContainerRef.value;
        if (el) {
          el.style.transform = "";
          el.style.transformOrigin = "";
        }
      }
    }
    const api = new RepeatableSvgWidgetApi();
    __expose(api);
    const emitClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:RepeatableSVGWidget:click", {
        type: "widget:RepeatableSVGWidget:click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const emitRightClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:RepeatableSVGWidget:right_click", {
        type: "widget:RepeatableSVGWidget:right_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const svgSource = ref("");
    new RepeatableSVGSettings();
    const loadSvg = async (srcWrapper) => {
      const src = srcWrapper?.value || srcWrapper;
      if (src && typeof src === "string") {
        try {
          const req = await fetch(src);
          const svgObject = await req.text();
          svgSource.value = svgObject;
        } catch (error) {
          console.error("Failed to load SVG:", error);
          svgSource.value = "";
        }
      } else {
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
    const ensureStyles = (styles) => {
      if (!styles) return;
      ensureWrapper(styles, "fill", "#000000");
      ensureWrapper(styles, "stroke", "none");
    };
    onMounted(async () => {
      if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, "RepeatableSVGWidget", pageId);
      if (!config.value) {
        config.value = new RepeatableSVGSettings();
      }
      ensureWrapper(config.value, "src", "");
      ensureWrapper(config.value, "repetitions", "1");
      ensureWrapper(config.value, "progress", "0");
      if (!config.value.activeItemStyles) config.value.activeItemStyles = new SVGItemStyles();
      ensureStyles(config.value.activeItemStyles);
      if (!config.value.defaultItemStyles) config.value.defaultItemStyles = new SVGItemStyles();
      ensureStyles(config.value.defaultItemStyles);
      await loadSvg(config.value.src);
    });
    onUnmounted(() => {
      if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value);
    });
    watch(
      () => config.value?.src?.value,
      (newSrc) => {
        loadSvg(newSrc);
      }
    );
    const repeationsToNumber = computed(() => {
      const repetitions = config.value?.repetitions?.value ?? "1";
      return !isNaN(parseFloat(repetitions)) ? Math.floor(Number(repetitions)) : 1;
    });
    const progressToNumber = computed(() => {
      const progress = config.value?.progress?.value ?? "0";
      return !isNaN(parseFloat(progress)) ? Number(progress) : 0;
    });
    const activeFill = computed(() => config.value?.activeItemStyles?.fill?.value);
    const activeStroke = computed(() => config.value?.activeItemStyles?.stroke?.value);
    const defaultFill = computed(() => config.value?.defaultItemStyles?.fill?.value);
    const defaultStroke = computed(() => config.value?.defaultItemStyles?.stroke?.value);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "repeatable-svg-container",
        onClick: emitClick,
        onContextmenu: withModifiers(emitRightClick, ["prevent"]),
        ref_key: "rsvgContainerRef",
        ref: rsvgContainerRef
      }, [
        (openBlock(), createElementBlock("svg", {
          fill: "#000000",
          version: "1.1",
          id: "Layer_1",
          xmlns: "http://www.w3.org/2000/svg",
          "xmlns:xlink": "http://www.w3.org/1999/xlink",
          viewBox: `0 0 ${100 * repeationsToNumber.value} 100`,
          "enable-background": "new 0 0 100 100",
          "xml:space": "preserve"
        }, [
          createElementVNode("defs", null, [
            createElementVNode("mask", _hoisted_2, [
              createElementVNode("rect", {
                x: "0",
                y: "0",
                style: { "fill": "#adadad" },
                width: 100 * repeationsToNumber.value * progressToNumber.value,
                height: "100"
              }, null, 8, _hoisted_3)
            ])
          ]),
          createElementVNode("g", {
            fill: defaultFill.value,
            stroke: defaultStroke.value
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(repeationsToNumber.value, (index) => {
              return openBlock(), createElementBlock("g", {
                innerHTML: svgSource.value,
                transform: `translate(${100 * (index - 1)}, 0)`,
                key: index
              }, null, 8, _hoisted_5);
            }), 128))
          ], 8, _hoisted_4),
          createElementVNode("g", {
            mask: "url(#bubbleKenseo)",
            fill: activeFill.value,
            stroke: activeStroke.value
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(repeationsToNumber.value, (index) => {
              return openBlock(), createElementBlock("g", {
                innerHTML: svgSource.value,
                transform: `translate(${100 * (index - 1)}, 0)`,
                key: index
              }, null, 8, _hoisted_7);
            }), 128))
          ], 8, _hoisted_6)
        ], 8, _hoisted_1$1))
      ], 544);
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
const RepeatableSvgWidget = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-2371f225"]]);
const _hoisted_1 = { class: "settings-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "RepeatableSvgWidgetSettings",
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
    return (_ctx, _cache) => {
      const _component_va_input = resolveComponent("va-input");
      const _component_va_color_input = resolveComponent("va-color-input");
      const _component_va_collapse = resolveComponent("va-collapse");
      return openBlock(), createBlock(_component_va_collapse, {
        modelValue: opened.value.widgetSection,
        "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => opened.value.widgetSection = $event),
        icon: "settings",
        header: t("svgRepeat:RepeatableSvgWidget.title")
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.src,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => widgetSettings.value.src = $event),
              label: t("svgRepeat:RepeatableSvgWidget.svgSrc")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  label: t("svgRepeat:RepeatableSvgWidget.svgSrc")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.repetitions,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => widgetSettings.value.repetitions = $event),
              label: t("svgRepeat:RepeatableSvgWidget.repeations")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  label: t("svgRepeat:RepeatableSvgWidget.repeations")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.progress,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => widgetSettings.value.progress = $event),
              label: t("svgRepeat:RepeatableSvgWidget.progress")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  label: t("svgRepeat:RepeatableSvgWidget.progress")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.activeItemStyles.fill,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => widgetSettings.value.activeItemStyles.fill = $event),
              label: t("svgRepeat:RepeatableSvgWidget.activeItemFill"),
              class: "color-input"
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_color_input, {
                  "model-value": value,
                  onInput: change,
                  class: "width-100",
                  label: t("svgRepeat:RepeatableSvgWidget.activeItemFill")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.activeItemStyles.stroke,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => widgetSettings.value.activeItemStyles.stroke = $event),
              label: t("svgRepeat:RepeatableSvgWidget.activeItemStroke"),
              class: "color-input"
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_color_input, {
                  "model-value": value,
                  onInput: change,
                  class: "width-100",
                  label: t("svgRepeat:RepeatableSvgWidget.activeItemStroke")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.defaultItemStyles.fill,
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => widgetSettings.value.defaultItemStyles.fill = $event),
              label: t("svgRepeat:RepeatableSvgWidget.defaultItemFill"),
              class: "color-input"
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_color_input, {
                  "model-value": value,
                  onInput: change,
                  class: "width-100",
                  label: t("svgRepeat:RepeatableSvgWidget.defaultItemFill")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.defaultItemStyles.stroke,
              "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => widgetSettings.value.defaultItemStyles.stroke = $event),
              label: t("svgRepeat:RepeatableSvgWidget.defaultItemStroke"),
              class: "color-input"
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_color_input, {
                  "model-value": value,
                  onInput: change,
                  class: "width-100",
                  label: t("svgRepeat:RepeatableSvgWidget.defaultItemStroke")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "header"]);
    };
  }
});
const RepeatableSvgWidgetSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-20524639"]]);
const Icon = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M46.8924%2066.198C46.4124%2066.198%2045.9084%2066.162%2045.3804%2066.09C44.8644%2066.03%2044.3724%2065.934%2043.9044%2065.802C43.4364%2065.67%2043.0164%2065.514%2042.6444%2065.334C42.3204%2065.178%2042.0924%2064.974%2041.9604%2064.722C41.8284%2064.458%2041.7804%2064.182%2041.8164%2063.894C41.8524%2063.606%2041.9544%2063.354%2042.1224%2063.138C42.2904%2062.91%2042.5124%2062.76%2042.7884%2062.688C43.0644%2062.604%2043.3764%2062.64%2043.7244%2062.796C44.1804%2063.012%2044.6964%2063.18%2045.2724%2063.3C45.8484%2063.42%2046.3884%2063.48%2046.8924%2063.48C47.6844%2063.48%2048.2364%2063.378%2048.5484%2063.174C48.8724%2062.958%2049.0344%2062.694%2049.0344%2062.382C49.0344%2062.106%2048.9204%2061.884%2048.6924%2061.716C48.4764%2061.548%2048.0864%2061.404%2047.5224%2061.284L45.4164%2060.834C44.2644%2060.594%2043.4064%2060.174%2042.8424%2059.574C42.2784%2058.974%2041.9964%2058.2%2041.9964%2057.252C41.9964%2056.628%2042.1224%2056.064%2042.3744%2055.56C42.6384%2055.044%2043.0044%2054.606%2043.4724%2054.246C43.9524%2053.886%2044.5164%2053.61%2045.1644%2053.418C45.8244%2053.214%2046.5564%2053.112%2047.3604%2053.112C47.9844%2053.112%2048.6144%2053.184%2049.2504%2053.328C49.8984%2053.46%2050.4564%2053.664%2050.9244%2053.94C51.2004%2054.084%2051.3984%2054.282%2051.5184%2054.534C51.6384%2054.786%2051.6864%2055.05%2051.6624%2055.326C51.6384%2055.59%2051.5424%2055.824%2051.3744%2056.028C51.2184%2056.232%2051.0024%2056.37%2050.7264%2056.442C50.4624%2056.502%2050.1444%2056.454%2049.7724%2056.298C49.4244%2056.142%2049.0284%2056.028%2048.5844%2055.956C48.1524%2055.872%2047.7324%2055.83%2047.3244%2055.83C46.8804%2055.83%2046.5024%2055.884%2046.1904%2055.992C45.8784%2056.088%2045.6384%2056.232%2045.4704%2056.424C45.3144%2056.616%2045.2364%2056.838%2045.2364%2057.09C45.2364%2057.342%2045.3384%2057.558%2045.5424%2057.738C45.7584%2057.906%2046.1484%2058.05%2046.7124%2058.17L48.8004%2058.62C49.9644%2058.872%2050.8344%2059.286%2051.4104%2059.862C51.9864%2060.438%2052.2744%2061.188%2052.2744%2062.112C52.2744%2062.736%2052.1484%2063.3%2051.8964%2063.804C51.6444%2064.308%2051.2844%2064.74%2050.8164%2065.1C50.3484%2065.448%2049.7844%2065.718%2049.1244%2065.91C48.4644%2066.102%2047.7204%2066.198%2046.8924%2066.198Z'%20fill='%23606060'/%3e%3cpath%20d='M59.1989%2066.162C58.7429%2066.162%2058.3709%2066.066%2058.0829%2065.874C57.8069%2065.682%2057.5729%2065.376%2057.3809%2064.956L53.0249%2055.344C52.8329%2054.924%2052.7729%2054.546%2052.8449%2054.21C52.9169%2053.874%2053.0849%2053.616%2053.3489%2053.436C53.6129%2053.244%2053.9429%2053.148%2054.3389%2053.148C54.8309%2053.148%2055.1969%2053.256%2055.4369%2053.472C55.6889%2053.688%2055.9049%2054.006%2056.0849%2054.426L59.7569%2062.922H58.7489L62.4209%2054.408C62.6009%2053.988%2062.8169%2053.676%2063.0689%2053.472C63.3209%2053.256%2063.6749%2053.148%2064.1309%2053.148C64.5029%2053.148%2064.8149%2053.244%2065.0669%2053.436C65.3189%2053.616%2065.4749%2053.874%2065.5349%2054.21C65.6069%2054.546%2065.5469%2054.924%2065.3549%2055.344L60.9809%2064.956C60.8009%2065.376%2060.5729%2065.682%2060.2969%2065.874C60.0209%2066.066%2059.6549%2066.162%2059.1989%2066.162Z'%20fill='%23606060'/%3e%3cpath%20d='M73.1603%2066.198C71.7083%2066.198%2070.4723%2065.928%2069.4523%2065.388C68.4443%2064.848%2067.6763%2064.092%2067.1483%2063.12C66.6203%2062.148%2066.3563%2061.014%2066.3563%2059.718C66.3563%2058.71%2066.5123%2057.804%2066.8243%2057C67.1483%2056.184%2067.6103%2055.488%2068.2103%2054.912C68.8103%2054.324%2069.5423%2053.88%2070.4063%2053.58C71.2823%2053.268%2072.2723%2053.112%2073.3763%2053.112C73.9763%2053.112%2074.5883%2053.172%2075.2123%2053.292C75.8363%2053.4%2076.4483%2053.61%2077.0483%2053.922C77.3603%2054.066%2077.5703%2054.27%2077.6783%2054.534C77.7983%2054.786%2077.8343%2055.056%2077.7863%2055.344C77.7503%2055.62%2077.6483%2055.878%2077.4803%2056.118C77.3243%2056.346%2077.1083%2056.502%2076.8323%2056.586C76.5563%2056.658%2076.2443%2056.616%2075.8963%2056.46C75.5363%2056.292%2075.1463%2056.166%2074.7263%2056.082C74.3063%2055.986%2073.8623%2055.938%2073.3943%2055.938C72.5903%2055.938%2071.9183%2056.082%2071.3783%2056.37C70.8503%2056.658%2070.4543%2057.084%2070.1903%2057.648C69.9263%2058.212%2069.7943%2058.902%2069.7943%2059.718C69.7943%2060.942%2070.0943%2061.866%2070.6943%2062.49C71.2943%2063.114%2072.1823%2063.426%2073.3583%2063.426C73.7183%2063.426%2074.1083%2063.39%2074.5283%2063.318C74.9603%2063.246%2075.3923%2063.144%2075.8243%2063.012L75.2123%2064.254V61.176H73.9523C73.5443%2061.176%2073.2263%2061.074%2072.9983%2060.87C72.7823%2060.666%2072.6743%2060.378%2072.6743%2060.006C72.6743%2059.634%2072.7823%2059.352%2072.9983%2059.16C73.2263%2058.956%2073.5443%2058.854%2073.9523%2058.854H76.6163C77.0363%2058.854%2077.3543%2058.968%2077.5703%2059.196C77.7983%2059.412%2077.9123%2059.73%2077.9123%2060.15V64.128C77.9123%2064.488%2077.8343%2064.794%2077.6783%2065.046C77.5343%2065.298%2077.3003%2065.478%2076.9763%2065.586C76.4123%2065.778%2075.8003%2065.928%2075.1403%2066.036C74.4803%2066.144%2073.8203%2066.198%2073.1603%2066.198Z'%20fill='%23606060'/%3e%3cpath%20d='M30%2030C30%2025.8579%2033.3579%2022.5%2037.5%2022.5H82.5C86.6421%2022.5%2090%2025.8579%2090%2030V36C90%2036.8284%2090.6716%2037.5%2091.5%2037.5H94.5C95.7361%2037.5%2096.4416%2038.9111%2095.7%2039.9L87.45%2050.9C86.85%2051.7%2085.65%2051.7%2085.05%2050.9L76.8%2039.9C76.0584%2038.9111%2076.7639%2037.5%2078%2037.5H81.25C81.9404%2037.5%2082.5%2036.9404%2082.5%2036.25C82.5%2032.7982%2079.7018%2030%2076.25%2030H45C40.8579%2030%2037.5%2033.3579%2037.5%2037.5V43.5C37.5%2044.3284%2036.8284%2045%2036%2045H31.5C30.6716%2045%2030%2044.3284%2030%2043.5V30Z'%20fill='%23606060'/%3e%3cpath%20d='M90%2090C90%2094.1421%2086.6421%2097.5%2082.5%2097.5H37.5C33.3579%2097.5%2030%2094.1421%2030%2090V84C30%2083.1716%2029.3284%2082.5%2028.5%2082.5H25.5C24.2639%2082.5%2023.5584%2081.0889%2024.3%2080.1L32.55%2069.1C33.15%2068.3%2034.35%2068.3%2034.95%2069.1L43.2%2080.1C43.9416%2081.0889%2043.2361%2082.5%2042%2082.5H38.75C38.0596%2082.5%2037.5%2083.0596%2037.5%2083.75C37.5%2087.2018%2040.2982%2090%2043.75%2090H75C79.1421%2090%2082.5%2086.6421%2082.5%2082.5V76.5C82.5%2075.6716%2083.1716%2075%2084%2075H88.5C89.3284%2075%2090%2075.6716%2090%2076.5V90Z'%20fill='%23606060'/%3e%3c/svg%3e";
const RepeatableSVGWidgetEvents = [
  { name: "Repeatable SVG Clicked", type: "click", description: "Triggered when the Repeatable SVG widget is clicked", payloadType: Payload },
  { name: "Repeatable SVG Right Clicked", type: "right_click", description: "Triggered when the Repeatable SVG widget is right-clicked", payloadType: Payload }
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
const WIDGET_TYPE = "RepeatableSVGWidget";
let RepeatableSVGWidgetProvider = class {
  constructor(events, actions) {
    this.events = events;
    this.actions = actions;
  }
  type = WIDGET_TYPE;
  component = RepeatableSvgWidget;
  settingsComponent = RepeatableSvgWidgetSettings;
  supportedDSTypes = [];
  icon = Icon;
  name = "RepeatableSVG";
  register() {
    this.events.registerWidget(WIDGET_TYPE, RepeatableSVGWidgetEvents);
    this.actions.registerWidgetType(WIDGET_TYPE, RepeatableSvgWidgetInterface, "widget");
  }
  unregister() {
    this.events.unregisterWidget(WIDGET_TYPE);
    this.actions.unregisterWidgetType(WIDGET_TYPE);
  }
};
__decorateClass([
  activate()
], RepeatableSVGWidgetProvider.prototype, "register", 1);
__decorateClass([
  deactivate()
], RepeatableSVGWidgetProvider.prototype, "unregister", 1);
RepeatableSVGWidgetProvider = __decorateClass([
  component({
    service: [WIDGET_SERVICE_ID],
    properties: { "widget.type": WIDGET_TYPE }
  }),
  __decorateParam(0, inject$1(EVENT_REGISTRY_ID)),
  __decorateParam(1, inject$1(EVENT_ACTIONS_REGISTRY_ID))
], RepeatableSVGWidgetProvider);
export {
  RepeatableSVGWidgetProvider,
  RepeatableSvgWidget,
  RepeatableSvgWidgetSettings
};
