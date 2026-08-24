(function(){var i="ui.vue.widget.image",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.slideshow-container[data-v-88857e63] {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: relative;\n}\n.slideshow-track[data-v-88857e63] {\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n  position: relative;\n  transition: transform 0.3s ease-in-out;\n}\n.slideshow-slide[data-v-88857e63] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.slideshow-nav[data-v-88857e63] {\n  position: absolute;\n  top: 50%;\n  width: 32px;\n  height: 32px;\n  transform: translateY(-50%);\n  z-index: 10;\n  background: rgba(0, 0, 0, 0.6);\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.slideshow-nav--prev[data-v-88857e63] {\n  left: 40px;\n}\n.slideshow-nav--next[data-v-88857e63] {\n  right: 40px;\n}\n\n.image-settings-container[data-v-e2074a09] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-end;\n  gap: 1rem;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n}\n.image-settings-remove-button[data-v-e2074a09] {\n  margin-bottom: 0.25rem;\n}\n.image-settings-remove-input[data-v-e2074a09] {\n  flex-grow: 1;\n}\n.settings-container[data-v-e2074a09] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.image-list-container[data-v-e2074a09] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  height: 500px;\n  overflow: auto;\n  padding: 0.5rem;\n  border-radius: 0.5rem;\n}\n.loading[data-v-e2074a09] {\n  height: 100%;\n  padding: 50px;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n  background-color: var(--app-response-background);\n}\n";})();
import { EVENT_REGISTRY_ID } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate, deactivate, component, inject as inject$1 } from "@eclipse-daanse/tsm";
import { defineComponent, mergeModels, toRefs, useModel, inject, onMounted, computed, ref, watch, resolveComponent, createElementBlock, openBlock, withModifiers, normalizeClass, createElementVNode, createVNode, normalizeStyle, Fragment, renderList, createBlock, withCtx, createTextVNode, toDisplayString, unref } from "vue";
import { Reference, ModelClass, Documentation, Attribute } from "org.eclipse.daanse.board.app.lib.annotations";
const { identifiers } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
import { Payload } from "org.eclipse.daanse.board.app.lib.events";
import { WIDGET_SERVICE_ID } from "org.eclipse.daanse.board.app.lib.api.widget";
const Icon = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2061.5C22.5%2060.6716%2023.1716%2060%2024%2060H29.5458C29.842%2060%2030.1315%2059.9123%2030.3779%2059.7481L40.4179%2053.0547C40.9218%2052.7188%2041.5782%2052.7188%2042.0821%2053.0547L51.5874%2059.3916C52.1309%2059.7539%2052.8464%2059.7229%2053.3565%2059.3148L70.28%2045.776C70.8427%2045.3258%2071.646%2045.3395%2072.1932%2045.8085L96.9762%2067.051C97.3087%2067.336%2097.5%2067.752%2097.5%2068.1899V90.75C97.5%2094.0637%2094.8137%2096.75%2091.5%2096.75H28.5C25.1863%2096.75%2022.5%2094.0637%2022.5%2090.75V61.5Z'%20fill='%23606060'/%3e%3cpath%20d='M37.5%2030C37.5%2034.1421%2034.1421%2037.5%2030%2037.5C25.8579%2037.5%2022.5%2034.1421%2022.5%2030C22.5%2025.8579%2025.8579%2022.5%2030%2022.5C34.1421%2022.5%2037.5%2025.8579%2037.5%2030Z'%20fill='%23606060'/%3e%3c/svg%3e";
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
let ImageSettings = class {
  imagesSettings;
  images = [];
};
__decorateClass$3([
  Reference("GallerySettings")
], ImageSettings.prototype, "imagesSettings", 2);
__decorateClass$3([
  Reference("ImageGalleryItem")
], ImageSettings.prototype, "images", 2);
ImageSettings = __decorateClass$3([
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.image#//ImageSettings" })
], ImageSettings);
const _hoisted_1$1 = ["src"];
const _hoisted_2$1 = {
  key: 1,
  class: "slideshow-container"
};
const _hoisted_3 = { class: "slideshow-nav slideshow-nav--prev" };
const _hoisted_4 = ["src", "onClick", "onContextmenu"];
const _hoisted_5 = { class: "slideshow-nav slideshow-nav--next" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ImageWidget",
  props: /* @__PURE__ */ mergeModels({
    datasourceId: {},
    id: {}
  }, {
    "configv": { required: true },
    "configvModifiers": {}
  }),
  emits: ["update:configv"],
  setup(__props) {
    const props = __props;
    const { id: widgetId } = toRefs(props);
    const config = useModel(__props, "configv");
    const eventBus = inject(identifiers.TINY_EMITTER);
    const handleClick = (url) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:ImageWidget:click", {
        type: "widget:ImageWidget:click",
        widgetId: widgetId.value,
        payload: { imageUrl: url, widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const handleRightClick = (url) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:ImageWidget:right_click", {
        type: "widget:ImageWidget:right_click",
        widgetId: widgetId.value,
        payload: { imageUrl: url, widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const defaultConfig = new ImageSettings();
    onMounted(() => {
      if (config.value) {
        Object.assign(config.value, { ...defaultConfig, ...config.value });
      }
    });
    const getObjectFit = computed(() => {
      const fitMap = {
        none: "",
        contain: "object-contain",
        cover: "object-cover",
        fill: "object-fill",
        "scale-down": "object-scale-down"
      };
      return fitMap[config.value.imagesSettings?.fit?.toLowerCase() || "none"] || "";
    });
    let interval = null;
    const currentImage = ref(0);
    const toNext = () => {
      if (currentImage.value < config.value.images.length - 1) {
        currentImage.value++;
      }
    };
    const toPrev = () => {
      if (currentImage.value > 0) {
        currentImage.value--;
      }
    };
    const initInterval = () => {
      if (interval) {
        clearInterval(interval);
      }
      if ((config.value.imagesSettings?.diashowInterval ?? 0) > 0) {
        interval = setInterval(() => {
          if (currentImage.value === config.value.images.length - 1) {
            currentImage.value = 0;
            return;
          }
          toNext();
        }, (config.value.imagesSettings?.diashowInterval ?? 1) * 1e3);
      }
    };
    onMounted(() => {
      initInterval();
    });
    watch(() => config.value.imagesSettings?.diashowInterval, initInterval);
    const parsedUrl = (url) => {
      return url;
    };
    watch(
      () => config.value.images?.length,
      (newLength, oldLength) => {
        if (oldLength > newLength) {
          if (currentImage.value >= newLength) {
            currentImage.value = newLength - 1;
          }
        }
      }
    );
    const lastImageIndex = computed(() => {
      return config.value.images?.length > 0 ? config.value.images.length - 1 : 0;
    });
    watch(lastImageIndex, () => {
      currentImage.value = lastImageIndex.value;
    });
    return (_ctx, _cache) => {
      const _component_va_button = resolveComponent("va-button");
      return config.value.images?.length <= 1 ? (openBlock(), createElementBlock("img", {
        key: 0,
        class: normalizeClass(["w-full h-full cursor-pointer", getObjectFit.value]),
        src: parsedUrl(config.value.images[0]?.url ?? ""),
        onClick: _cache[0] || (_cache[0] = ($event) => handleClick(config.value.images[0]?.url ?? "")),
        onContextmenu: _cache[1] || (_cache[1] = withModifiers(($event) => handleRightClick(config.value.images[0]?.url ?? ""), ["prevent"]))
      }, null, 42, _hoisted_1$1)) : (openBlock(), createElementBlock("div", _hoisted_2$1, [
        createElementVNode("div", _hoisted_3, [
          createVNode(_component_va_button, {
            onClick: _cache[2] || (_cache[2] = ($event) => toPrev()),
            icon: "chevron_left",
            preset: "plain",
            "text-color": "#ffffff",
            disabled: currentImage.value === 0
          }, null, 8, ["disabled"])
        ]),
        createElementVNode("div", {
          class: "slideshow-track",
          style: normalizeStyle({ transform: `translateX(-${100 * currentImage.value}%)` })
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(config.value.images, (image, i) => {
            return openBlock(), createElementBlock("div", {
              key: image.id,
              class: "slideshow-slide",
              style: normalizeStyle({ transform: `translateX(${100 * i}%)` })
            }, [
              createElementVNode("img", {
                class: normalizeClass(["w-full h-full cursor-pointer", getObjectFit.value]),
                src: parsedUrl(image.url ?? ""),
                onClick: ($event) => handleClick(image.url ?? ""),
                onContextmenu: withModifiers(($event) => handleRightClick(image.url ?? ""), ["prevent"])
              }, null, 42, _hoisted_4)
            ], 4);
          }), 128))
        ], 4),
        createElementVNode("div", _hoisted_5, [
          createVNode(_component_va_button, {
            onClick: _cache[3] || (_cache[3] = ($event) => toNext()),
            icon: "chevron_right",
            "text-color": "#ffffff",
            disabled: currentImage.value === config.value.images?.length - 1,
            preset: "plain"
          }, null, 8, ["disabled"])
        ])
      ]));
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
const ImageWidget = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-88857e63"]]);
const byteToHex = [];
for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 256).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
  return (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + "-" + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + "-" + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + "-" + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + "-" + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase();
}
const rnds8 = new Uint8Array(16);
function rng() {
  return crypto.getRandomValues(rnds8);
}
function v4(options, buf, offset) {
  if (crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return _v4(options);
}
function _v4(options, buf, offset) {
  options = options || {};
  const rnds = options.random ?? options.rng?.() ?? rng();
  if (rnds.length < 16) {
    throw new Error("Random bytes length must be >= 16");
  }
  rnds[6] = rnds[6] & 15 | 64;
  rnds[8] = rnds[8] & 63 | 128;
  return unsafeStringify(rnds);
}
const _hoisted_1 = { class: "settings-container" };
const _hoisted_2 = { class: "image-list-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ImageWidgetSettings",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const i118n = inject("i18n");
    const opened = ref({
      widgetSection: false,
      storeSection: false
    });
    const widgetSettings = useModel(__props, "modelValue");
    const addNew = () => {
      if (!widgetSettings.value.images) {
        widgetSettings.value.images = [];
      }
      const newImage = {
        id: v4(),
        url: "Test"
      };
      widgetSettings.value.images?.splice(
        widgetSettings.value.images.length,
        0,
        newImage
      );
    };
    return (_ctx, _cache) => {
      const _component_va_button = resolveComponent("va-button");
      const _component_va_input = resolveComponent("va-input");
      const _component_va_select = resolveComponent("va-select");
      const _component_va_collapse = resolveComponent("va-collapse");
      return openBlock(), createBlock(_component_va_collapse, {
        modelValue: opened.value.widgetSection,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => opened.value.widgetSection = $event),
        icon: "settings",
        header: "Image widget settings"
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createVNode(_component_va_button, { onClick: addNew }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(unref(i118n)?.t("image:ImageWidget.addButton")), 1)
              ]),
              _: 1
            }),
            createElementVNode("div", _hoisted_2, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(widgetSettings.value.images, (image, index) => {
                return openBlock(), createElementBlock("div", {
                  key: image.id,
                  class: "image-settings-container"
                }, [
                  createVNode(_component_va_input, {
                    modelValue: image.url,
                    "onUpdate:modelValue": ($event) => image.url = $event,
                    label: unref(i118n)?.t("image:ImageWidget.imageUrl"),
                    class: "image-settings-remove-input"
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                  createVNode(_component_va_button, {
                    onClick: () => widgetSettings.value.images.splice(index, 1),
                    icon: "clear",
                    class: "image-settings-remove-button"
                  }, null, 8, ["onClick"])
                ]);
              }), 128))
            ]),
            createVNode(_component_va_select, {
              modelValue: widgetSettings.value.imagesSettings.fit,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => widgetSettings.value.imagesSettings.fit = $event),
              label: unref(i118n)?.t("image:ImageWidget.imageFit"),
              options: ["none", "contain", "cover", "fill", "scale-down"],
              teleport: ".settings-container"
            }, null, 8, ["modelValue", "label"]),
            createVNode(_component_va_input, {
              modelValue: widgetSettings.value.imagesSettings.diashowInterval,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => widgetSettings.value.imagesSettings.diashowInterval = $event),
              label: unref(i118n)?.t("image:ImageWidget.imageDiashowInterval")
            }, null, 8, ["modelValue", "label"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const ImageWidgetSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e2074a09"]]);
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
let ImageClickPayload = class extends Payload {
  imageUrl;
};
__decorateClass$2([
  Documentation("URL or ID of the clicked image."),
  Attribute()
], ImageClickPayload.prototype, "imageUrl", 2);
ImageClickPayload = __decorateClass$2([
  Documentation("Payload emitted when an image is clicked."),
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.image#//ImageClickPayload" })
], ImageClickPayload);
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
let ImageRightClickPayload = class extends Payload {
  imageUrl;
};
__decorateClass$1([
  Documentation("URL or ID of the right-clicked image."),
  Attribute()
], ImageRightClickPayload.prototype, "imageUrl", 2);
ImageRightClickPayload = __decorateClass$1([
  Documentation("Payload emitted when an image is right-clicked."),
  ModelClass({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.image#//ImageRightClickPayload" })
], ImageRightClickPayload);
const ImageWidgetEvents = [
  {
    name: "Image Clicked",
    type: "click",
    description: "Triggered when the image is clicked",
    payloadType: ImageClickPayload
  },
  {
    name: "Image Right Clicked",
    type: "right_click",
    description: "Triggered when the image is right-clicked",
    payloadType: ImageRightClickPayload
  }
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
const WIDGET_TYPE = "ImageWidget";
let ImageWidgetProvider = class {
  constructor(events) {
    this.events = events;
  }
  type = WIDGET_TYPE;
  component = ImageWidget;
  settingsComponent = ImageWidgetSettings;
  supportedDSTypes = [];
  icon = Icon;
  name = "Image";
  register() {
    this.events.registerWidget(WIDGET_TYPE, ImageWidgetEvents);
  }
  unregister() {
    this.events.unregisterWidget(WIDGET_TYPE);
  }
};
__decorateClass([
  activate()
], ImageWidgetProvider.prototype, "register", 1);
__decorateClass([
  deactivate()
], ImageWidgetProvider.prototype, "unregister", 1);
ImageWidgetProvider = __decorateClass([
  component({
    service: [WIDGET_SERVICE_ID],
    properties: { "widget.type": WIDGET_TYPE }
  }),
  __decorateParam(0, inject$1(EVENT_REGISTRY_ID))
], ImageWidgetProvider);
export {
  ImageWidget,
  ImageWidgetProvider,
  ImageWidgetSettings
};
