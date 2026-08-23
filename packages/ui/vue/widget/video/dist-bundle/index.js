(function(){var i="ui.vue.widget.video",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.container[data-v-c454c467] {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.container video[data-v-c454c467] {\n    width: 100%;\n    height: 100%;\n    border-radius: 3px;\n    object-fit: var(--v02309664);\n}\n\n.settings-container[data-v-71904cee] {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n}\n";})();
import { EVENT_ACTIONS_REGISTRY, EVENT_REGISTRY_ID, EVENT_ACTIONS_REGISTRY_ID } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate, deactivate, component, inject as inject$1 } from "@eclipse-daanse/tsm";
import { defineComponent, mergeModels, useCssVars, computed, toRefs, useModel, inject, ref, onMounted, onUnmounted, createElementBlock, openBlock, withModifiers, createElementVNode, resolveComponent, createBlock, withCtx, createVNode, unref } from "vue";
import { useRoute } from "vue-router";
import { Documentation, Attribute, ModelClass, Reference } from "org.eclipse.daanse.board.app.lib.annotations";
import { VariableWrapper } from "org.eclipse.daanse.board.app.ui.vue.composables";
const { identifiers } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
import { WidgetAction, WidgetActionInterface, Payload } from "org.eclipse.daanse.board.app.lib.events";
import { VariableInput } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
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
let ObjectFitSetting = class {
  fit;
};
__decorateClass$3([
  Documentation("The CSS 'object-fit' property value (e.g., 'fill', 'contain', 'cover', 'none', 'scale-down')."),
  Attribute()
], ObjectFitSetting.prototype, "fit", 2);
ObjectFitSetting = __decorateClass$3([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.video#//ObjectFitSetting" })
], ObjectFitSetting);
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
let VideoSettings = class {
  videoFitSettings = new ObjectFitSetting();
  videoUrl = new VariableWrapper();
};
__decorateClass$2([
  Reference("ObjectFitSetting")
], VideoSettings.prototype, "videoFitSettings", 2);
__decorateClass$2([
  Reference("VariableWrapper")
], VideoSettings.prototype, "videoUrl", 2);
VideoSettings = __decorateClass$2([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.video#//VideoSettings" })
], VideoSettings);
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
class VideoWidgetInterface extends WidgetActionInterface {
  play() {
    throw new Error("play not implemented");
  }
  pause() {
    throw new Error("pause not implemented");
  }
  stop() {
    throw new Error("stop not implemented");
  }
  seek(time) {
    throw new Error("seek not implemented");
  }
  mute() {
    throw new Error("mute not implemented");
  }
  unmute() {
    throw new Error("unmute not implemented");
  }
  setVolume(volume) {
    throw new Error("setVolume not implemented");
  }
}
__decorateClass$1([
  WidgetAction({ eventType: "video.play" })
], VideoWidgetInterface.prototype, "play");
__decorateClass$1([
  WidgetAction({ eventType: "video.pause" })
], VideoWidgetInterface.prototype, "pause");
__decorateClass$1([
  WidgetAction({ eventType: "video.stop" })
], VideoWidgetInterface.prototype, "stop");
__decorateClass$1([
  WidgetAction({ eventType: "video.seek" })
], VideoWidgetInterface.prototype, "seek");
__decorateClass$1([
  WidgetAction({ eventType: "video.mute" })
], VideoWidgetInterface.prototype, "mute");
__decorateClass$1([
  WidgetAction({ eventType: "video.unmute" })
], VideoWidgetInterface.prototype, "unmute");
__decorateClass$1([
  WidgetAction({ eventType: "video.setVolume" })
], VideoWidgetInterface.prototype, "setVolume");
const _hoisted_1$1 = ["src"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "VideoWidget",
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
      "v02309664": videoFit.value
    }));
    const props = __props;
    const { id: widgetId } = toRefs(props);
    const config = useModel(__props, "configv");
    const eventBus = inject(identifiers.TINY_EMITTER);
    const actionsRegistry = inject(EVENT_ACTIONS_REGISTRY);
    const route = useRoute();
    const pageId = route.params.pageid || "";
    const videoElement = ref(null);
    class VideoWidgetApi extends VideoWidgetInterface {
      play() {
        if (videoElement.value) {
          videoElement.value.play();
        }
      }
      pause() {
        if (videoElement.value) {
          videoElement.value.pause();
        }
      }
      stop() {
        if (videoElement.value) {
          videoElement.value.pause();
          videoElement.value.currentTime = 0;
        }
      }
      seek(time) {
        if (videoElement.value) {
          videoElement.value.currentTime = time;
        }
      }
      mute() {
        if (videoElement.value) {
          videoElement.value.muted = true;
        }
      }
      unmute() {
        if (videoElement.value) {
          videoElement.value.muted = false;
        }
      }
      setVolume(volume) {
        if (videoElement.value) {
          videoElement.value.volume = Math.max(0, Math.min(1, volume));
        }
      }
    }
    const api = new VideoWidgetApi();
    __expose(api);
    const emitClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:VideoWidget:click", {
        type: "widget:VideoWidget:click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const emitRightClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:VideoWidget:right_click", {
        type: "widget:VideoWidget:right_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const emitVideoEvent = (eventType, event) => {
      if (!widgetId?.value) return;
      let payloadData = { widgetId: widgetId.value, timestamp: Date.now() };
      if (eventType === "timeupdate") {
        const target = event.target;
        payloadData.currentTime = target.currentTime;
        payloadData.duration = target.duration;
      } else if (eventType === "error") {
        const target = event.target;
        payloadData.error = target.error?.message || target.error?.code || "Unknown Error";
      }
      eventBus.emit(`widget:VideoWidget:${eventType}`, {
        type: `widget:VideoWidget:${eventType}`,
        widgetId: widgetId.value,
        payload: payloadData
      });
    };
    console.log(config);
    const defaultConfig = {
      videoUrl: "",
      videoFitSettings: {
        fit: "cover"
      }
    };
    onMounted(() => {
      if (widgetId?.value) {
        actionsRegistry.registerInstance(widgetId.value, api, "VideoWidget", pageId);
      }
      if (!config.value) {
        config.value = new VideoSettings();
      }
      const currentUrl = config.value.videoUrl;
      if (currentUrl === void 0 || currentUrl === null) {
        config.value.videoUrl = new VariableWrapper(defaultConfig.videoUrl);
      } else if (currentUrl instanceof VariableWrapper) ;
      else if (typeof currentUrl === "object" && "value" in currentUrl) {
        const v = new VariableWrapper(currentUrl.value);
        if ("variable" in currentUrl) v.variable = currentUrl.variable;
        config.value.videoUrl = v;
      } else {
        config.value.videoUrl = new VariableWrapper(currentUrl);
      }
      if (config.value && !config.value.videoFitSettings) {
        config.value.videoFitSettings = defaultConfig.videoFitSettings;
      }
    });
    onUnmounted(() => {
      if (widgetId?.value) {
        actionsRegistry.unregisterInstance(widgetId.value);
      }
    });
    const videoFit = computed(() => {
      return config.value.videoFitSettings?.fit;
    });
    const videoUrlParced = computed(() => {
      let processedString = config.value.videoUrl?.value;
      return processedString;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "container",
        onClick: emitClick,
        onContextmenu: withModifiers(emitRightClick, ["prevent"])
      }, [
        createElementVNode("video", {
          controls: "",
          src: videoUrlParced.value,
          ref_key: "videoElement",
          ref: videoElement,
          onPlay: _cache[0] || (_cache[0] = ($event) => emitVideoEvent("play", $event)),
          onPause: _cache[1] || (_cache[1] = ($event) => emitVideoEvent("pause", $event)),
          onTimeupdate: _cache[2] || (_cache[2] = ($event) => emitVideoEvent("timeupdate", $event)),
          onEnded: _cache[3] || (_cache[3] = ($event) => emitVideoEvent("ended", $event)),
          onError: _cache[4] || (_cache[4] = ($event) => emitVideoEvent("error", $event))
        }, " Your browser does not support embedded videos. ", 40, _hoisted_1$1)
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
const VideoWidget = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c454c467"]]);
const _hoisted_1 = { class: "settings-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VideoWidgetSettings",
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
      const _component_va_select = resolveComponent("va-select");
      const _component_va_collapse = resolveComponent("va-collapse");
      return openBlock(), createBlock(_component_va_collapse, {
        modelValue: opened.value.widgetSection,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => opened.value.widgetSection = $event),
        icon: "settings",
        header: t("video:VideoWidget.title")
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.videoUrl,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => widgetSettings.value.videoUrl = $event),
              label: t("video:VideoWidget.videoUrl")
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_input, {
                  "model-value": value,
                  onInput: change,
                  label: t("video:VideoWidget.videoUrl")
                }, null, 8, ["model-value", "onInput", "label"])
              ]),
              _: 1
            }, 8, ["modelValue", "label"]),
            createVNode(_component_va_select, {
              class: "mt-2",
              modelValue: widgetSettings.value.videoFitSettings.fit,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => widgetSettings.value.videoFitSettings.fit = $event),
              label: t("video:VideoWidget.videoFit"),
              options: ["Cover", "Contain", "Stretch", "Fill", "None"],
              teleport: ".settings-container"
            }, null, 8, ["modelValue", "label"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "header"]);
    };
  }
});
const VideoWidgetSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-71904cee"]]);
const Icon = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M78.75%2056.1029C81.75%2057.8349%2081.75%2062.1651%2078.75%2063.8971L47.25%2082.0836C44.25%2083.8157%2040.5%2081.6506%2040.5%2078.1865L40.5%2041.8135C40.5%2038.3494%2044.25%2036.1843%2047.25%2037.9164L78.75%2056.1029Z'%20fill='%23606060'/%3e%3c/svg%3e";
const VideoWidgetEvents = [
  { name: "Video Clicked", type: "click", description: "Triggered when the video widget is clicked", payloadType: Payload },
  { name: "Video Right Clicked", type: "right_click", description: "Triggered when the video widget is right-clicked", payloadType: Payload },
  { name: "Video Played", type: "play", description: "Triggered when the video starts or resumes playing", payloadType: Payload },
  { name: "Video Paused", type: "pause", description: "Triggered when the video playback is paused", payloadType: Payload },
  { name: "Video Time Updated", type: "timeupdate", description: "Triggered when the video playback position changes", payloadType: Payload },
  { name: "Video Ended", type: "ended", description: "Triggered when the video reaches the end", payloadType: Payload },
  { name: "Video Error", type: "error", description: "Triggered when the video encounters an error", payloadType: Payload }
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
const WIDGET_TYPE = "VideoWidget";
let VideoWidgetProvider = class {
  constructor(events, actions) {
    this.events = events;
    this.actions = actions;
  }
  type = WIDGET_TYPE;
  component = VideoWidget;
  settingsComponent = VideoWidgetSettings;
  supportedDSTypes = [];
  icon = Icon;
  name = "Video";
  register() {
    this.events.registerWidget(WIDGET_TYPE, VideoWidgetEvents);
    this.actions.registerWidgetType(WIDGET_TYPE, VideoWidgetInterface, "widget");
  }
  unregister() {
    this.events.unregisterWidget(WIDGET_TYPE);
    this.actions.unregisterWidgetType(WIDGET_TYPE);
  }
};
__decorateClass([
  activate()
], VideoWidgetProvider.prototype, "register", 1);
__decorateClass([
  deactivate()
], VideoWidgetProvider.prototype, "unregister", 1);
VideoWidgetProvider = __decorateClass([
  component({
    service: [WIDGET_SERVICE],
    properties: { "widget.type": WIDGET_TYPE }
  }),
  __decorateParam(0, inject$1(EVENT_REGISTRY_ID)),
  __decorateParam(1, inject$1(EVENT_ACTIONS_REGISTRY_ID))
], VideoWidgetProvider);
export {
  VideoWidget,
  VideoWidgetProvider,
  VideoWidgetSettings
};
