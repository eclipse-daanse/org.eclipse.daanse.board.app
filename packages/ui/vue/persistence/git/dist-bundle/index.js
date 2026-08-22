(function(){var i="ui.vue.persistence.git",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=":root,\n:host {\n  --va-icon-vertical-align: middle;\n  --va-icon-user-select: none;\n}\n.va-icon {\n  vertical-align: var(--va-icon-vertical-align);\n  -webkit-user-select: var(--va-icon-user-select);\n     -moz-user-select: var(--va-icon-user-select);\n          user-select: var(--va-icon-user-select);\n}\n.va-icon[role^=button][tabindex]:not([tabindex^=\"-\"]) {\n  cursor: pointer;\n}\n.va-icon[role^=button][tabindex]:not([tabindex^=\"-\"]):focus-visible {\n  outline: 2px solid var(--va-focus) !important;\n  border-radius: 2px;\n}\n.va-icon.va-icon {\n  font-style: normal;\n}\n.va-icon--spin {\n  animation: va-icon--spin-animation 1500ms linear infinite;\n}\n.va-icon--spin-reverse {\n  animation: va-icon--spin-animation 1500ms linear infinite;\n  animation-direction: reverse;\n}\n@keyframes va-icon--spin-animation {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(360deg);\n}\n}\n.va-icon svg {\n  fill: currentColor;\n  height: 100%;\n}:root,\n:host {\n  --va-toast-display: flex;\n  --va-toast-width: 330px;\n  --va-toast-padding: 14px 1.25rem 14px 1.25rem;\n  --va-toast-border-radius: 8px;\n  --va-toast-border-color: transparent;\n  --va-toast-border: 1px solid var(--va-toast-border-color);\n  --va-toast-background-color: var(--va-background-secondary);\n  --va-toast-box-shadow: 0 2px 12px 0 var(--va-shadow);\n  --va-toast-transition: opacity 0.3s, transform 0.3s, left 0.3s, right 0.3s, top 0.4s, bottom 0.3s;\n  --va-toast-z-index: calc(var(--va-z-index-teleport-overlay) + 100);\n  /* Title */\n  --va-toast-title-font-weight: bold;\n  --va-toast-title-font-size: 1rem;\n  --va-toast-title-color: #303133;\n  --va-toast-title-margin: 0 0 6px;\n  /* Content */\n  --va-toast-content-font-size: 1rem;\n  --va-toast-content-line-height: 1.3125;\n  --va-toast-content-padding-right: 20px;\n  /* Icon */\n  --va-toast-icon-height: 24px;\n  --va-toast-icon-width: 24px;\n  --va-toast-icon-font-size: 24px;\n  /* Icon Close */\n  --va-toast-close-icon-top: 18px;\n  --va-toast-close-icon-right: 15px;\n  --va-toast-close-icon-font-size: 1rem;\n}\n.va-toast {\n  --va-toast-x-shift: 0px;\n  --va-toast-animation-x-shift: 0px;\n  --va-toast-animation-y-shift: 100%;\n  position: fixed;\n  box-sizing: border-box;\n  width: var(--va-toast-width);\n  padding: var(--va-toast-padding);\n  display: flex;\n  align-items: center;\n  border-radius: var(--va-toast-border-radius);\n  border: var(--va-toast-border);\n  background-color: var(--va-toast-background-color);\n  box-shadow: var(--va-toast-box-shadow);\n  transition: var(--va-toast-transition);\n  overflow: hidden;\n  z-index: var(--va-toast-z-index);\n  font-family: var(--va-font-family);\n  transform: translateX(var(--va-toast-x-shift));\n}\n.va-toast--top-right, .va-toast--bottom-right {\n  --va-toast-animation-x-shift: 100%;\n}\n.va-toast--top-left, .va-toast--bottom-left {\n  --va-toast-animation-x-shift: -100%;\n}\n.va-toast--top-left, .va-toast--top-center, .va-toast--top-right {\n  --va-toast-animation-y-shift: -100%;\n}\n.va-toast--inline {\n  position: static;\n}\n.va-toast--multiline {\n  min-height: 70px;\n}\n.va-toast__title {\n  font-weight: var(--va-toast-title-font-weight);\n  font-size: var(--va-toast-title-font-size);\n  margin: var(--va-toast-title-margin);\n  font-size: 0.625rem;\n  letter-spacing: 0.6px;\n  line-height: 1.2;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.va-toast__content {\n  font-size: var(--va-toast-content-font-size);\n  line-height: var(--va-toast-content-line-height);\n  padding-right: var(--va-toast-content-padding-right);\n}\n.va-toast__content p,\n.va-toast__content div {\n  margin: 0;\n}\n.va-toast__icon {\n  height: var(--va-toast-icon-height);\n  width: var(--va-toast-icon-width);\n  font-size: var(--va-toast-icon-font-size);\n}\n.va-toast__close-icon {\n  position: absolute;\n  top: 50%;\n  right: var(--va-toast-close-icon-right);\n  cursor: pointer;\n  transform: translateY(-50%);\n  font-size: var(--va-toast-close-icon-font-siz);\n  opacity: 0.7;\n}\n.va-toast__close-icon:hover {\n  opacity: 1;\n}\n.va-toast-fade-enter-from {\n  transform: translateX(calc(var(--va-toast-animation-x-shift) + var(--va-toast-x-shift)));\n}\n.va-toast-fade-leave-to {\n  transform: translateY(var(--va-toast-animation-y-shift));\n  opacity: 0;\n}.table[data-v-c3bbf3f4] {\n  min-height: 100px;\n}\n.table[data-v-c3bbf3f4] th {\n  /* border: 1px solid var(--va-background-border);*/\n}\n.table[data-v-c3bbf3f4] tr {\n  border-bottom: 1px solid var(--va-background-border);\n}\n.table[data-v-c3bbf3f4] tr td {\n  /*height: 4rem;*/\n  white-space: normal;\n}\n[data-v-c3bbf3f4] .additional-class {\n  font-weight: bolder;\n}\n.space[data-v-c3bbf3f4] {\n  width: 25px;\n}\n.flex-nowrap[data-v-c3bbf3f4] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  align-content: center;\n  align-items: center;\n}\n.minwidth100[data-v-c3bbf3f4] {\n  min-width: 100%;\n}\n[data-v-c3bbf3f4] .selected {\n  font-weight: bolder;\n  background-color: var(--va-css-variables-hover-color) !important;\n}\n.va-inner-loading--active {\n  height: auto !important;\n}\n";})();
const { REPOSITORY_REGISTRY } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.persistence");
const { AuthentificationError, type } = __tsm__.require("org.eclipse.daanse.board.app.lib.persistence.git");
import { isRef, shallowRef, ref, watchEffect, computed, withCtx, h, Text, createBlock, isVNode, getCurrentInstance, inject as inject$1, normalizeClass, normalizeStyle, shallowReadonly, unref, reactive, capitalize as capitalize$1, defineComponent, useAttrs, openBlock, resolveDynamicComponent, mergeProps, renderSlot, createElementBlock, createCommentVNode, Fragment, createTextVNode, toDisplayString, onMounted, onBeforeUnmount, Transition, withDirectives, createElementVNode, vShow, createVNode, withKeys, withModifiers, render, resolveComponent, Teleport, watch } from "vue";
const { usePromisifiedModal } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.composables");
typeof WorkerGlobalScope !== "undefined" && globalThis instanceof WorkerGlobalScope;
const noop = () => {
};
function computedAsync(evaluationCallback, initialState, optionsOrRef) {
  var _globalThis$reportErr;
  let options;
  if (isRef(optionsOrRef)) options = { evaluating: optionsOrRef };
  else options = optionsOrRef || {};
  const { lazy = false, flush = "sync", evaluating = void 0, shallow = true, onError = (_globalThis$reportErr = globalThis.reportError) !== null && _globalThis$reportErr !== void 0 ? _globalThis$reportErr : noop } = options;
  const started = shallowRef(!lazy);
  const current = shallow ? shallowRef(initialState) : ref(initialState);
  let counter = 0;
  watchEffect(async (onInvalidate) => {
    if (!started.value) return;
    counter++;
    const counterAtBeginning = counter;
    let hasFinished = false;
    if (evaluating) Promise.resolve().then(() => {
      evaluating.value = true;
    });
    try {
      const result = await evaluationCallback((cancelCallback) => {
        onInvalidate(() => {
          if (evaluating) evaluating.value = false;
          if (!hasFinished) cancelCallback();
        });
      });
      if (counterAtBeginning === counter) current.value = result;
    } catch (e) {
      onError(e);
    } finally {
      if (evaluating && counterAtBeginning === counter) evaluating.value = false;
      hasFinished = true;
    }
  }, { flush });
  if (lazy) return computed(() => {
    started.value = true;
    return current.value;
  });
  else return current;
}
const asyncComputed = computedAsync;
const presets = {
  light: {
    // Accent
    primary: "#154EC1",
    secondary: "#767C88",
    success: "#3D9209",
    info: "#158DE3",
    danger: "#E42222",
    warning: "#FFD43A",
    // Background Colors
    backgroundPrimary: "#f6f6f6",
    backgroundSecondary: "#FFFFFF",
    backgroundElement: "#ECF0F1",
    backgroundBorder: "#DEE5F2",
    // Text Colors
    textPrimary: "#262824",
    textInverted: "#FFFFFF",
    // Misc
    shadow: "rgba(0, 0, 0, 0.12)",
    focus: "#49A8FF",
    transparent: "rgba(0, 0, 0, 0)"
  },
  dark: {
    // Accent
    primary: "#3472F0",
    secondary: "#767C88",
    success: "#66BE33",
    info: "#3EAAF8",
    danger: "#F34030",
    warning: "#FFD952",
    // Background Colors
    backgroundPrimary: "#050A10",
    backgroundSecondary: "#1F262F",
    backgroundElement: "#131A22",
    backgroundBorder: "#3D4C58",
    // Text Colors
    textPrimary: "#F1F1F1",
    textInverted: "#0B121A",
    // Misc
    shadow: "rgba(255, 255, 255, 0.12)",
    focus: "#49A8FF",
    transparent: "rgba(0, 0, 0, 0)"
  }
};
const defaultThresholds = {
  xs: 0,
  sm: 640,
  md: 1024,
  lg: 1440,
  xl: 1920
};
const getBreakpointDefaultConfig = () => ({
  enabled: true,
  bodyClass: true,
  thresholds: defaultThresholds
});
const renderSlotNode = (node, ctx = null) => {
  return withCtx(() => [node], ctx);
};
const makeVNode = (node) => {
  if (typeof node === "string") {
    return h(Text, node);
  }
  return isVNode(node) ? node : createBlock(node);
};
const renderSlots = (slots, ctx = null) => {
  return Object.keys(slots).reduce((acc, slotName) => {
    const slot = slots[slotName];
    acc[slotName] = typeof slot === "function" ? slot : renderSlotNode(slot, ctx);
    return acc;
  }, {});
};
const createRenderFn = (component) => {
  const originalRenderFn = component.render || component.ssrRender;
  if (!originalRenderFn) {
    return void 0;
  }
  const compiledRenderedFn = originalRenderFn.name === "_sfc_render" || originalRenderFn.name === "_sfc_ssrRender";
  return function(...args) {
    const ctx = args[0];
    const slots = ctx.$.slots;
    const customCtx = new Proxy(ctx, {
      get(target, key) {
        if (key === "$slots") {
          return renderSlots(slots);
        }
        return target[key];
      }
    });
    const thisArg = compiledRenderedFn ? void 0 : customCtx;
    return originalRenderFn.call(thisArg, customCtx, ...args.slice(1));
  };
};
const omit = (o, keys) => {
  return Object.keys(o).filter((key) => !keys.includes(key)).reduce((acc, key) => {
    acc[key] = o[key];
    return acc;
  }, {});
};
const CHILD_COMPONENTS_INJECT_KEY = "$va:childComponents";
const injectChildPropsFromParent = () => {
  var _a;
  const childName = (_a = getCurrentInstance()) == null ? void 0 : _a.attrs["va-child"];
  if (!childName) {
    return null;
  }
  const childProps = inject$1(CHILD_COMPONENTS_INJECT_KEY);
  if (!(childProps == null ? void 0 : childProps.value)) {
    return null;
  }
  return computed(() => childProps.value[childName]);
};
const KEBAB_CASE_REGEX = /([a-z0-9])([A-Z])/g;
const toKebabCase = (str) => str.replace(KEBAB_CASE_REGEX, "$1-$2").toLowerCase();
const findCamelCased = (obj, key) => {
  if (key in obj) {
    return obj[key];
  }
  return obj[toKebabCase(key)];
};
const createProps = (instance, propsFromConfig) => {
  const instanceProps = instance.props;
  const childPropsFromParent = injectChildPropsFromParent();
  return new Proxy(instanceProps, {
    get: (target, key) => {
      var _a, _b;
      if (typeof key !== "string") {
        return target[key];
      }
      const childProp = (_a = childPropsFromParent == null ? void 0 : childPropsFromParent.value) == null ? void 0 : _a[key];
      if (childProp !== void 0) {
        return childProp;
      }
      const incomingProps = instance.vnode.props || {};
      const originalProp = target[key];
      const incomingProp = findCamelCased(incomingProps, key);
      if (incomingProp !== void 0) {
        return originalProp;
      }
      const propFromConfig = (_b = propsFromConfig.value) == null ? void 0 : _b[key];
      if (propFromConfig !== void 0) {
        return propFromConfig;
      }
      return originalProp;
    }
  });
};
const createAttrs = (instance, propsFromConfig) => {
  const instanceAttrs = instance.attrs;
  return new Proxy(instanceAttrs, {
    get: (target, key) => {
      var _a;
      if (typeof key !== "string") {
        return target[key];
      }
      if (key === "class") {
        return normalizeClass([propsFromConfig.value.class, instanceAttrs.class]);
      }
      if (key === "style") {
        return normalizeStyle([propsFromConfig.value.style, instanceAttrs.style]);
      }
      const attrFromConfig = (_a = propsFromConfig.value) == null ? void 0 : _a[key];
      if (attrFromConfig !== void 0) {
        return attrFromConfig;
      }
      return target[key];
    },
    ownKeys(target) {
      return [.../* @__PURE__ */ new Set([...Object.keys(instanceAttrs), ...Object.keys(propsFromConfig.value)])];
    },
    getOwnPropertyDescriptor(target, key) {
      return Reflect.getOwnPropertyDescriptor(propsFromConfig.value, key) ?? Reflect.getOwnPropertyDescriptor(instanceAttrs, key);
    }
  });
};
const SLOT_PREFIX = "slot:";
const createSlots = (instance, propsFromConfig) => {
  const instanceSlots = instance.slots;
  const childPropsFromParent = injectChildPropsFromParent();
  const slotsFromConfig = computed(() => {
    return Object.keys(propsFromConfig.value).reduce((acc, key) => {
      if (key.startsWith(SLOT_PREFIX)) {
        acc[key.slice(SLOT_PREFIX.length)] = propsFromConfig.value[key];
      }
      return acc;
    }, {});
  });
  return new Proxy(instanceSlots, {
    get: (target, key) => {
      var _a, _b;
      if (typeof key !== "string") {
        return target[key];
      }
      const prefixedKey = `${SLOT_PREFIX}${key}`;
      const childSlot = (_a = childPropsFromParent == null ? void 0 : childPropsFromParent.value) == null ? void 0 : _a[prefixedKey];
      if (childSlot !== void 0) {
        return renderSlotNode(makeVNode(childSlot));
      }
      const originalSlot = target[key];
      if (originalSlot !== void 0) {
        return originalSlot;
      }
      const propFromConfig = (_b = slotsFromConfig.value) == null ? void 0 : _b[key];
      if (propFromConfig !== void 0) {
        return renderSlotNode(makeVNode(propFromConfig));
      }
      return originalSlot;
    },
    ownKeys(target) {
      return [.../* @__PURE__ */ new Set([...Object.keys(instanceSlots), ...Object.keys(slotsFromConfig.value)])];
    },
    getOwnPropertyDescriptor(target, key) {
      return Reflect.getOwnPropertyDescriptor(slotsFromConfig.value, key) ?? Reflect.getOwnPropertyDescriptor(instanceSlots, key);
    }
  });
};
const LocalConfigKey = "VaLocalConfig";
const CONFIGS_DEFAULT = computed(() => []);
function useLocalConfig() {
  return inject$1(LocalConfigKey, CONFIGS_DEFAULT);
}
const nilValues = [null, void 0, ""];
const isNilValue = (value) => {
  return nilValues.includes(value);
};
const notNil = (value) => !isNilValue(value);
const processShim = typeof process !== "undefined" ? process : {};
const envShim = processShim.env || {};
const nodeEnv = envShim.NODE_ENV || "";
const isDev = typeof __DEV__ !== "undefined" ? __DEV__ : !["prod", "production"].includes(nodeEnv);
const warn = (...attrs) => {
  if (isDev) {
    console.warn(...attrs);
  }
  return false;
};
const throwError = (message) => {
  throw new Error(`[Vuestic] ${message}`);
};
let currentApp = null;
const getCurrentApp = () => currentApp;
const inject = (key, value = void 0) => {
  var _a;
  const injectedFromApp = (_a = getCurrentApp()) == null ? void 0 : _a._context.provides[key];
  const vm = getCurrentInstance();
  if (vm) {
    return inject$1(key, value);
  }
  return injectedFromApp ?? throwError("You're using Vuestic composable outside Vue app. Since you registered Vuestic in multiple apps, composables can not be used outside setup function anymore.");
};
const isObject$1 = (obj) => {
  return obj !== null && typeof obj === "object";
};
const cloneDeep = (source) => {
  if (source === null || typeof source !== "object") {
    return source;
  }
  if (Array.isArray(source)) {
    return source.map(cloneDeep);
  }
  if (source instanceof Date) {
    return new Date(source.getTime());
  }
  if (source instanceof RegExp) {
    return new RegExp(source.source, source.flags);
  }
  if (source instanceof Map) {
    return new Map(Array.from(source.entries()).map(([key, value]) => [key, cloneDeep(value)]));
  }
  if (source instanceof Set) {
    return new Set(Array.from(source.values()).map(cloneDeep));
  }
  if (isObject$1(source)) {
    return Object.keys(source).reduce((acc, key) => {
      acc[key] = cloneDeep(source[key]);
      return acc;
    }, {});
  }
  if (typeof source === "function") {
    return source;
  }
  return source;
};
const isObject = (obj) => obj && typeof obj === "object" && !Array.isArray(obj);
const mergeDeep = (target, source) => {
  if (!isObject(target)) {
    target = {};
  }
  Object.keys(source).forEach((key) => {
    const targetValue = target[key];
    const sourceValue = source[key];
    if (sourceValue instanceof RegExp || sourceValue instanceof Date) {
      target[key] = sourceValue;
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = mergeDeep(Object.create(
        Object.getPrototypeOf(targetValue),
        Object.getOwnPropertyDescriptors(targetValue)
      ), sourceValue);
    } else {
      target[key] = sourceValue;
    }
  });
  return target;
};
const ColorsClassesPresets = [
  {
    prefix: "bg",
    property: "background-color"
  },
  {
    prefix: "text",
    property: ["color", "fill"]
  }
];
const getColorsClassesDefaultConfig = () => ColorsClassesPresets;
const makeColorsConfig = (values) => ({
  ...values,
  get variables() {
    return this.presets[this.currentPresetName];
  },
  set variables(value) {
    this.presets[this.currentPresetName] = value;
  }
});
const getColorDefaultConfig = () => makeColorsConfig({
  threshold: 150,
  presets: {
    light: presets.light,
    dark: presets.dark
  },
  currentPresetName: "light"
});
const defineIconAliases = (aliases) => aliases;
const VuesticIconAliases = defineIconAliases([
  {
    name: "va-unsorted",
    to: "swap_vert"
  },
  {
    name: "va-sort-asc",
    to: "va-arrow-up"
  },
  {
    name: "va-sort-desc",
    to: "va-arrow-down"
  },
  {
    name: "va-arrow-first",
    to: "mi-first_page"
  },
  {
    name: "va-arrow-last",
    to: "mi-last_page"
  },
  {
    name: "va-arrow-right",
    to: "mi-chevron_right"
  },
  {
    name: "va-arrow-left",
    to: "mi-chevron_left"
  },
  {
    name: "va-arrow-down",
    to: "mi-expand_more"
  },
  {
    name: "va-arrow-up",
    to: "mi-expand_less"
  },
  {
    name: "va-calendar",
    to: "mi-calendar_today"
  },
  {
    name: "va-delete",
    to: "mi-delete_outline"
  },
  {
    name: "va-check",
    to: "mi-check"
  },
  {
    name: "va-check-circle",
    to: "mi-check_circle"
  },
  {
    name: "va-warning",
    to: "mi-warning"
  },
  {
    name: "va-clear",
    to: "mi-highlight_off"
  },
  {
    name: "va-close",
    to: "mi-close"
  },
  {
    name: "va-loading",
    to: "mi-loop"
  },
  {
    name: "va-plus",
    to: "mi-add"
  },
  {
    name: "va-minus",
    to: "mi-remove"
  }
]);
const VuesticIconFonts = [
  {
    name: "mi-{icon}",
    class: "material-icons",
    resolve: ({ icon }) => ({ content: icon })
  },
  // Fallback
  {
    name: "{icon}",
    class: "material-icons",
    resolve: ({ icon }) => ({ content: icon })
  }
];
const createIconsConfig = (config) => {
  config.aliases = config.aliases || [];
  config.fonts = config.fonts || [];
  return [
    ...config.aliases,
    ...VuesticIconAliases,
    ...config.fonts,
    ...VuesticIconFonts
  ];
};
const getIconDefaultConfig = () => createIconsConfig({});
const getComponentsDefaultConfig = () => (
  // TODO: Should be handled in size service
  {
    VaIcon: {
      sizesConfig: {
        defaultSize: 18,
        sizes: {
          small: 14,
          medium: 18,
          large: 24
        }
      }
    },
    VaRating: {
      sizesConfig: {
        defaultSize: 18,
        sizes: {
          small: 14,
          medium: 18,
          large: 24
        }
      }
    },
    all: {},
    presets: {
      VaButton: {
        default: {
          backgroundOpacity: 1,
          hoverBehavior: "mask",
          hoverOpacity: 0.15,
          pressedBehavior: "mask",
          pressedOpacity: 0.13
        },
        primary: {
          backgroundOpacity: 0.1,
          hoverBehavior: "opacity",
          hoverOpacity: 0.07,
          pressedBehavior: "opacity",
          pressedOpacity: 0.13
        },
        secondary: {
          backgroundOpacity: 0,
          hoverBehavior: "opacity",
          hoverOpacity: 0.07,
          pressedBehavior: "opacity",
          pressedOpacity: 0.13
        },
        plain: {
          plain: true,
          hoverBehavior: "mask",
          hoverOpacity: 0.15,
          pressedBehavior: "mask",
          pressedOpacity: 0.13
        },
        plainOpacity: {
          plain: true,
          textOpacity: 0.6,
          hoverBehavior: "opacity",
          hoverOpacity: 1,
          pressedBehavior: "opacity",
          pressedOpacity: 0.9
        }
      },
      VaInputWrapper: {
        solid: {
          background: "backgroundElement"
        },
        bordered: {
          class: "va-input-wrapper--bordered",
          background: "backgroundElement"
        }
      },
      VaCheckbox: {
        solid: {
          style: "--va-checkbox-background: var(--va-background-element)"
        }
      },
      VaRadio: {
        solid: {
          style: "--va-radio-background: var(--va-background-element)"
        }
      },
      VaMenu: {
        context: {
          cursor: true,
          placement: "right-start",
          trigger: "right-click"
        }
      }
    }
  }
);
const getI18nConfigDefaults = () => ({
  // PROPS
  /** Select search field default text */
  search: "Search",
  /** Select no options text */
  noOptions: "Items not found",
  /** Modal Ok button default text */
  ok: "OK",
  /** Modal Cancel button default text */
  cancel: "Cancel",
  /** FileUpload default button text */
  uploadFile: "Upload file",
  /** FileUpload default undo button text */
  undo: "Undo",
  /** FileUpload default dropzone text */
  dropzone: "Drop files here to upload",
  /** FileUpload default file deleted alert text */
  fileDeleted: "File deleted",
  // Aria attributes
  /** Alert close button aria-label */
  closeAlert: "close alert",
  backToTop: "back to top",
  toggleDropdown: "toggle dropdown",
  carousel: "carousel",
  goPreviousSlide: "go previous slide",
  goNextSlide: "go next slide",
  goSlide: "go slide {index}",
  slideOf: "slide {index} of {length}",
  close: "close",
  openColorPicker: "open color picker",
  colorSelection: "color selection",
  colorName: "color {color}",
  decreaseCounter: "decrease counter",
  increaseCounter: "increase counter",
  selectAllRows: "select all rows",
  sortColumnBy: "sort column by {name}",
  selectRowByIndex: "select row {index}",
  resetDate: "reset date",
  nextPeriod: "next period",
  switchView: "switch view",
  previousPeriod: "previous period",
  removeFile: "remove file",
  reset: "reset",
  pagination: "pagination",
  goToTheFirstPage: "go to the first page",
  goToPreviousPage: "go to the previous page",
  goToSpecificPage: "go to the {page} page",
  goToSpecificPageInput: "enter the page number to go",
  goNextPage: "go next page",
  goLastPage: "go last page",
  /** Rating aria-label */
  currentRating: "current rating {value} of {max}",
  /** Rating item aria-label */
  voteRating: "vote rating {value} of {max}",
  /** Select search input aria-label */
  optionsFilter: "options filter",
  splitPanels: "split panels",
  movePaginationLeft: "move pagination left",
  movePaginationRight: "move pagination right",
  resetTime: "reset time",
  closeToast: "close toast",
  /**
   * Select aria-label selected option prefix
   *
   * @example
   *
   * `Selected option: {option}` or `Selected option: Animal`
   */
  selectedOption: "Selected option",
  /** Select aria-label if no option is selected */
  noSelectedOption: "Option is not selected",
  breadcrumbs: "breadcrumbs",
  counterValue: "counter value",
  selectedDate: "selected date",
  selectedTime: "selected time",
  progressState: "progress state",
  color: "color",
  /** Stepper next button text */
  next: "Next",
  /** Stepper previous button text */
  back: "Previous",
  /** Stepper finish button text */
  finish: "Finish",
  step: "step",
  progress: "progress",
  /** Skeleton aria label */
  loading: "Loading",
  /** Slider aria label */
  sliderValue: "Current slider value is {value}",
  /** Switch aria label */
  switch: "Switch",
  /** Input aria label */
  inputField: "Input field",
  /** File Input message when file type is incorrect */
  fileTypeIncorrect: "File type is incorrect",
  /** Select aria label */
  select: "Select an option"
});
const GLOBAL_CONFIG = Symbol("GLOBAL_CONFIG");
const getDefaultConfig = () => ({
  colors: getColorDefaultConfig(),
  icons: getIconDefaultConfig(),
  components: getComponentsDefaultConfig(),
  breakpoint: getBreakpointDefaultConfig(),
  i18n: getI18nConfigDefaults(),
  colorsClasses: getColorsClassesDefaultConfig(),
  /**
   * global config variable to pass nuxt-link component to vuestic-ui via @vuestic/nuxt
   * TODO: give a try to integrate inertia js router components via this option
   * TODO: if this try won't be success, may be remake to provide/inject
   */
  routerComponent: void 0
});
const createGlobalConfig = (defaultConfig = {}) => {
  const globalConfig = ref(mergeDeep(getDefaultConfig(), defaultConfig));
  const getGlobalConfig = () => globalConfig.value;
  const setGlobalConfig = (updater) => {
    const config = typeof updater === "function" ? updater(globalConfig.value) : updater;
    globalConfig.value = cloneDeep(config);
  };
  const mergeGlobalConfig = (updater) => {
    const config = typeof updater === "function" ? updater(globalConfig.value) : updater;
    globalConfig.value = mergeDeep(cloneDeep(globalConfig.value), config);
  };
  return {
    getGlobalConfig,
    setGlobalConfig,
    mergeGlobalConfig,
    globalConfig
  };
};
const provideForCurrentApp = (provide) => {
  var _a, _b;
  const provides = ((_a = getCurrentInstance()) == null ? void 0 : _a.appContext.provides) || ((_b = getCurrentApp()) == null ? void 0 : _b._context.provides);
  if (!provides) {
    throw new Error("Vue app not found for provide");
  }
  provides[GLOBAL_CONFIG] = provide;
  return provide;
};
function useGlobalConfig() {
  let injected = inject(GLOBAL_CONFIG);
  if (!injected) {
    injected = createGlobalConfig();
    provideForCurrentApp(injected);
  }
  return injected;
}
const withPresetProp = (props) => "preset" in props;
const getPresetProp = (props) => withPresetProp(props) ? props.preset : void 0;
const useComponentConfigProps = (component, originalProps) => {
  const localConfig = useLocalConfig();
  const { globalConfig } = useGlobalConfig();
  const componentName = component.name;
  const getPresetProps = (presetPropValue) => {
    return (presetPropValue instanceof Array ? presetPropValue : [presetPropValue]).reduce((acc, presetName) => {
      var _a, _b, _c;
      const presetProps = (_c = (_b = (_a = globalConfig.value.components) == null ? void 0 : _a.presets) == null ? void 0 : _b[componentName]) == null ? void 0 : _c[presetName];
      if (!presetProps) {
        return acc;
      }
      const extendedPresets = getPresetProp(presetProps);
      return {
        ...acc,
        ...extendedPresets ? getPresetProps(extendedPresets) : void 0,
        ...presetProps
      };
    }, {});
  };
  const parentInjectedProps = injectChildPropsFromParent();
  return computed(() => {
    var _a, _b;
    const globalConfigProps = {
      ...(_a = globalConfig.value.components) == null ? void 0 : _a.all,
      ...(_b = globalConfig.value.components) == null ? void 0 : _b[componentName]
    };
    const localConfigProps = localConfig.value.reduce((finalConfig, config) => {
      const componentConfigProps = config[componentName];
      return componentConfigProps ? { ...finalConfig, ...componentConfigProps } : finalConfig;
    }, {});
    const presetProp = [
      originalProps,
      parentInjectedProps == null ? void 0 : parentInjectedProps.value,
      localConfigProps,
      globalConfigProps
    ].filter(notNil).map(getPresetProp).filter(notNil).at(0);
    const presetProps = presetProp ? getPresetProps(presetProp) : void 0;
    return { ...globalConfigProps, ...localConfigProps, ...presetProps };
  });
};
const createSetupFn = (component) => {
  return (originalProps, ctx) => {
    var _a;
    const instance = getCurrentInstance();
    const propsFromConfig = useComponentConfigProps(component, originalProps);
    const attrsFromConfig = computed(() => {
      return omit(propsFromConfig.value, Object.keys(originalProps));
    });
    const props = createProps(instance, propsFromConfig);
    const attrs = createAttrs(instance, attrsFromConfig);
    const slots = createSlots(instance, propsFromConfig);
    instance.props = props;
    instance.attrs = attrs;
    instance.slots = slots;
    const setupState = (_a = component.setup) == null ? void 0 : _a.call(component, shallowReadonly(props), {
      ...ctx,
      attrs,
      slots
    });
    if (typeof setupState === "object" && !instance.exposed) {
      ctx.expose(setupState);
    }
    return setupState;
  };
};
const createProxyComponent = (component) => {
  const setupFn = createSetupFn(component);
  const renderFn = createRenderFn(component);
  return new Proxy(component, {
    get(target, key) {
      if (!(key in component)) {
        return Reflect.get(target, key);
      }
      if (key === "setup") {
        return setupFn;
      }
      if (key === "render" || key === "ssrRender") {
        return renderFn;
      }
      return Reflect.get(target, key);
    }
  });
};
const CLASS_COMPONENT_KEY = "__c";
const patchClassComponent = (component) => {
  component[CLASS_COMPONENT_KEY] = createProxyComponent(component[CLASS_COMPONENT_KEY]);
  return component;
};
const withConfigTransport = (component) => {
  if ("setup" in component) {
    return createProxyComponent(component);
  } else if (CLASS_COMPONENT_KEY in component) {
    return patchClassComponent(component);
  } else {
    component.setup = () => ({
      /* Fake setup function */
    });
    return createProxyComponent(component);
  }
};
const sizesConfig = {
  defaultSize: 48,
  sizes: {
    small: 32,
    medium: 48,
    large: 64
  }
};
const fontSizesConfig = {
  defaultSize: 1,
  sizes: {
    small: 0.75,
    medium: 1,
    large: 1.25
  }
};
const useSizeProps = {
  size: {
    type: [String, Number],
    default: "",
    validator: (size) => {
      return typeof size === "string" || typeof size === "number";
    }
  },
  sizesConfig: {
    type: Object,
    default: () => sizesConfig
  },
  fontSizesConfig: {
    type: Object,
    default: () => fontSizesConfig
  }
};
const fontRegex = /(?<fontSize>\d+)(?<extension>px|rem)/i;
const convertToRem = (px) => px / 16 - 0.5;
const useSize = (props, componentName = ((_a) => (_a = getCurrentInstance()) == null ? void 0 : _a.type.name)()) => {
  const { getGlobalConfig } = useGlobalConfig();
  const sizesConfigGlobal = computed(() => {
    var _a2, _b;
    return componentName ? (_b = (_a2 = getGlobalConfig().components) == null ? void 0 : _a2[componentName]) == null ? void 0 : _b.sizesConfig : void 0;
  });
  const sizeComputed = computed(() => {
    var _a2, _b, _c;
    const { defaultSize, sizes } = props.sizesConfig;
    const defaultSizeGlobal = (_a2 = sizesConfigGlobal.value) == null ? void 0 : _a2.defaultSize;
    if (!props.size) {
      return `${defaultSize || defaultSizeGlobal}px`;
    }
    if (typeof props.size === "string") {
      const sizeFromGlobalConfig = (_c = (_b = sizesConfigGlobal.value) == null ? void 0 : _b.sizes) == null ? void 0 : _c[props.size];
      const sizeFromProps = sizes[props.size];
      if (sizeFromProps) {
        return `${sizeFromProps}px`;
      }
      if (sizeFromGlobalConfig) {
        return `${sizeFromGlobalConfig}px`;
      }
      return props.size;
    }
    return `${props.size}px`;
  });
  const fontSizeInRem = computed(() => {
    const { defaultSize, sizes } = props.fontSizesConfig;
    if (!props.size) {
      return defaultSize;
    }
    if (typeof props.size === "string") {
      if (props.size in sizes) {
        return sizes[props.size];
      }
      const fontSizeParsed = props.size.match(fontRegex);
      if (!fontSizeParsed || !fontSizeParsed.groups) {
        throw new Error("Size prop should be either valid string or number");
      }
      const { extension, fontSize } = fontSizeParsed.groups;
      return extension === "rem" ? +fontSize : convertToRem(+fontSize);
    }
    return convertToRem(props.size);
  });
  const fontSizeComputed = computed(() => `${fontSizeInRem.value}rem`);
  return {
    sizeComputed,
    fontSizeComputed,
    fontSizeInRem
  };
};
const useComponentPresetProp = {
  preset: {
    type: [String, Array],
    default: void 0
  }
};
const isMatchRegex = (str, regex) => {
  return regex.test(str);
};
const regexGroupsValues = (str, regex) => {
  if (typeof regex !== "string" && regex.global) {
    return [...str.matchAll(regex)].map((g) => g.slice(1));
  }
  const match = str.match(regex) || [];
  if (!match) {
    return [];
  }
  if (match.length > 1) {
    return match.slice(1);
  }
  return match;
};
const dynamicSegmentRegex = /{[^}]*}/g;
const dynamicSegmentStringToRegex = (template) => {
  return template.replace(dynamicSegmentRegex, "(.*)");
};
const dynamicSegmentsNames = (template) => {
  return (template.match(dynamicSegmentRegex) || []).map((g) => g.replace(/{|}/g, ""));
};
const dynamicSegmentsValues = (str, template) => {
  return regexGroupsValues(str, dynamicSegmentStringToRegex(template));
};
const dynamicSegments = (str, template) => {
  const params = dynamicSegmentsNames(template);
  const values = dynamicSegmentsValues(str, template);
  return params.reduce((acc, paramValue, i) => ({ ...acc, [paramValue]: values[i] }), {});
};
const strictMatch = (str, regex) => {
  return (str.match(regex) || [])[0] === str;
};
const isMatchDynamicSegments = (str, template) => {
  const templateRegex = dynamicSegmentStringToRegex(template);
  return strictMatch(str, new RegExp(templateRegex));
};
const isIconConfigurationString = (config) => {
  return typeof config.name === "string";
};
const isIconConfigurationRegex = (config) => {
  return config.name instanceof RegExp;
};
const isMatchConfiguration = (iconName, iconConfiguration) => {
  if (isIconConfigurationString(iconConfiguration)) {
    return isMatchDynamicSegments(iconName, iconConfiguration.name);
  }
  if (isIconConfigurationRegex(iconConfiguration)) {
    return isMatchRegex(iconName, iconConfiguration.name);
  }
  return false;
};
const resolveIconConfigurationString = (iconName, iconConfiguration) => {
  const args = dynamicSegments(iconName, iconConfiguration.name);
  return iconConfiguration.resolve && iconConfiguration.resolve(args);
};
const resolveIconConfigurationRegex = (iconName, iconConfig) => {
  if (iconConfig.name.global) {
    throw new Error(`Bad icon config with name ${iconConfig.name}. Please, don't use global regex as name.`);
  }
  const args = regexGroupsValues(iconName, iconConfig.name);
  return iconConfig.resolveFromRegex && iconConfig.resolveFromRegex(...args);
};
const resolveIconConfiguration = (iconName, iconConfiguration) => {
  if (isIconConfigurationString(iconConfiguration)) {
    return resolveIconConfigurationString(iconName, iconConfiguration);
  }
  if (isIconConfigurationRegex(iconConfiguration)) {
    return resolveIconConfigurationRegex(iconName, iconConfiguration);
  }
  throw Error("Unknown icon config");
};
const findMatchedIconConfiguration = (iconName, globalIconConfig, namesToIgnore = []) => {
  const matchedConfig = globalIconConfig.find((config) => {
    if (namesToIgnore.includes(config.name.toString())) {
      return false;
    }
    return isMatchConfiguration(iconName, config);
  });
  if (!matchedConfig) {
    throw new Error(`Can not find icon config from ${iconName}. Please provide default config.`);
  }
  return matchedConfig;
};
const findIconConfiguration = (iconName, globalIconConfig, namesToIgnore = []) => {
  if (!iconName) {
    return;
  }
  const matchedIconConfiguration = findMatchedIconConfiguration(iconName, globalIconConfig, namesToIgnore);
  const resolvedIconConfiguration = mergeDeep(resolveIconConfiguration(iconName, matchedIconConfiguration), matchedIconConfiguration);
  namesToIgnore = [...namesToIgnore, matchedIconConfiguration.name.toString()];
  return mergeDeep(
    findIconConfiguration(resolvedIconConfiguration.to, globalIconConfig, namesToIgnore),
    resolvedIconConfiguration
  );
};
const iconPropsFromIconConfiguration = (iconConfiguration) => {
  const junkKeys = ["name", "to", "resolve", "resolveFromRegex"];
  const configuration = iconConfiguration;
  junkKeys.forEach((key) => {
    delete configuration[key];
  });
  return configuration;
};
const getIconConfiguration = (name, iconConfig) => {
  const configuration = findIconConfiguration(name, iconConfig);
  if (configuration === void 0) {
    return {};
  }
  return iconPropsFromIconConfiguration(configuration);
};
const useIcon = () => {
  const { globalConfig } = useGlobalConfig();
  return {
    getIcon: (name) => getIconConfiguration(name, globalConfig.value.icons)
  };
};
const VaAppCachePluginKey = Symbol("VaAppCachePlugin");
const useCache = () => {
  const cache = inject(VaAppCachePluginKey);
  if (!cache) {
    return {
      colorContrast: {}
    };
  }
  return cache;
};
const useReactiveComputed = (obj) => {
  const objectRef = typeof obj === "function" ? computed(obj) : computed(obj);
  const proxy = new Proxy(objectRef, {
    get(target, p, receiver) {
      if (typeof objectRef.value !== "object") {
        return void 0;
      }
      return unref(Reflect.get(objectRef.value, p, receiver));
    },
    set(target, p, value) {
      if (isRef(objectRef.value[p]) && !isRef(value)) {
        objectRef.value[p].value = value;
      } else {
        objectRef.value[p] = value;
      }
      return true;
    },
    deleteProperty(target, p) {
      return Reflect.deleteProperty(objectRef.value, p);
    },
    has(target, p) {
      if (typeof objectRef.value !== "object") {
        return false;
      }
      return Reflect.has(objectRef.value, p);
    },
    ownKeys() {
      if (typeof objectRef.value !== "object") {
        return [];
      }
      return Object.keys(objectRef.value);
    },
    getOwnPropertyDescriptor() {
      return {
        enumerable: true,
        configurable: true
      };
    }
  });
  return reactive(proxy);
};
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
const wordsRegex = /[A-Z0-9]*(?:[^\-_|A-Z|\s.])*/gm;
const getWords = (str) => {
  var _a;
  return ((_a = str.match(wordsRegex)) == null ? void 0 : _a.map((word) => word.trim().split(/([0-9]+)|([a-zA-Z]+)/g)).flat().filter(Boolean)) || [];
};
const camelCaseToKebabCase = (str) => {
  return getWords(str).map((word) => word.toLowerCase()).join("-");
};
const kebabCaseToCamelCase = (str) => {
  return getWords(str).map((word, index) => index === 0 ? word.toLowerCase() : capitalize(word)).join("");
};
const HEX_TEST_REGEX = /^#([A-Fa-f0-9]{3,4}|[A-Fa-f0-9]{6,8})$/;
const RGB_TEST_REGEX = /^rgba?\(([\d.]+, ?){2}[\d.]+(, ?[\d.]+)?\)$/;
const HSL_TEST_REGEX = /hsla?\([\d.]+(deg|rad|turn|grad)?(,?\s?[\d.]+%?){2}(,?\s?(\/\s?)?[\d.]+%?)?\)/;
const isColor = (strColor) => {
  return HEX_TEST_REGEX.test(strColor) || RGB_TEST_REGEX.test(strColor) || HSL_TEST_REGEX.test(strColor);
};
const isHSLObject = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  return "h" in obj && "s" in obj && "l" in obj;
};
const isRGBObject = (obj) => {
  if (typeof obj !== "object" || obj === null) {
    return false;
  }
  return "r" in obj && "g" in obj && "b" in obj;
};
const tryParseHex = (color) => {
  if (!HEX_TEST_REGEX.test(color)) {
    return null;
  }
  const hex = color.replace("#", "");
  const isShort = hex.length < 6;
  const [r, g, b, a] = isShort ? hex.split("").map((char) => parseInt(char + char, 16)) : hex.match(/.{2}/g).map((hex2) => parseInt(hex2, 16));
  return { r, g, b, a: a ?? 1 };
};
const tryParseRgb = (color) => {
  if (!RGB_TEST_REGEX.test(color)) {
    return null;
  }
  const [r, g, b, a = 1] = color.match(/[\d.]+/g).map(Number);
  return { r, g, b, a };
};
const tryParseHsla = (color) => {
  if (!HSL_TEST_REGEX.test(color)) {
    return null;
  }
  const [h2, s, l, a = "1"] = color.match(/[\d.]+%?/g);
  return {
    h: Number(h2),
    s: Number(s.replace("%", "")),
    l: Number(l.replace("%", "")),
    a: a.endsWith("%") ? Number(a.replace("%", "")) / 100 : Number(a)
  };
};
const rgbaToHsla = (rgba) => {
  const r = rgba.r / 255;
  const g = rgba.g / 255;
  const b = rgba.b / 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h2 = 0;
  let s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h2 = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h2 = (b - r) / d + 2;
        break;
      case b:
        h2 = (r - g) / d + 4;
        break;
    }
    h2 *= 60;
  }
  return { h: Math.round(h2), s: Math.round(s * 100), l: Math.round(l * 100), a: rgba.a };
};
const hueToRgb = (p, q, t) => {
  if (t < 0) {
    t += 1;
  }
  if (t > 1) {
    t -= 1;
  }
  if (t < 1 / 6) {
    return p + (q - p) * 6 * t;
  }
  if (t < 1 / 2) {
    return q;
  }
  if (t < 2 / 3) {
    return p + (q - p) * (2 / 3 - t) * 6;
  }
  return p;
};
const hslaToRgba = (hsla) => {
  const h2 = hsla.h / 360;
  const s = hsla.s / 100;
  const l = hsla.l / 100;
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hueToRgb(p, q, h2 + 1 / 3);
  const g = hueToRgb(p, q, h2);
  const b = hueToRgb(p, q, h2 - 1 / 3);
  return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255), a: hsla.a };
};
const parseColorToHSL = (color) => {
  if (isHSLObject(color)) {
    return { ...color };
  }
  if (isRGBObject(color)) {
    return rgbaToHsla(color);
  }
  const rgb = tryParseHex(color) ?? tryParseRgb(color);
  if (rgb) {
    return rgbaToHsla(rgb);
  }
  const hsl = tryParseHsla(color);
  if (hsl) {
    return hsl;
  }
  throw new Error(`Color ${color} is not valid. Please, provide valid color.`);
};
const hslToString = ({ h: h2, s, l, a }) => {
  return `hsla(${h2},${s}%,${l}%,${a ?? 1})`;
};
const parseColorToRGB = (color) => {
  if (isRGBObject(color)) {
    return { ...color };
  }
  if (isHSLObject(color)) {
    return hslaToRgba(color);
  }
  const hsl = tryParseHsla(color);
  if (hsl) {
    return hslaToRgba(hsl);
  }
  const rgb = tryParseHex(color) ?? tryParseRgb(color);
  if (rgb) {
    return rgb;
  }
  throw new Error(`Color ${color} is not valid. Please, provide valid color.`);
};
const rgbToString = ({ r, g, b, a }) => {
  if (a === 1) {
    return `rgb(${r},${g},${b})`;
  }
  return `rgba(${r},${g},${b},${a ?? 1})`;
};
const colorToString = (color) => {
  if (isHSLObject(color)) {
    return hslToString(color);
  }
  if (isRGBObject(color)) {
    return rgbToString(color);
  }
  if (typeof color === "string") {
    return color;
  }
  throw new Error(`Color ${color} is not valid. Please, provide valid color.`);
};
const setHSLA = (color, { h: h2, s, l, a }) => {
  const parsedColor = parseColorToHSL(color);
  parsedColor.a = parsedColor.a ?? 1;
  parsedColor.h = h2 ?? parsedColor.h;
  parsedColor.s = s ?? parsedColor.s;
  parsedColor.l = l ?? parsedColor.l;
  parsedColor.a = a ?? parsedColor.a;
  if (parsedColor.h < 0) {
    parsedColor.h = 360 + parsedColor.h;
  }
  if (parsedColor.h > 360) {
    parsedColor.h = parsedColor.h - 360;
  }
  parsedColor.s = Math.max(0, Math.min(100, parsedColor.s));
  parsedColor.l = Math.max(0, Math.min(100, parsedColor.l));
  parsedColor.a = Math.max(0, Math.min(1, parsedColor.a));
  return parsedColor;
};
const shiftHSLA = (color, { h: h2, s, l, a }) => {
  const parsedColor = parseColorToHSL(color);
  parsedColor.a = parsedColor.a ?? 1;
  parsedColor.h += h2 ?? 0;
  parsedColor.s += s ?? 0;
  parsedColor.l += l ?? 0;
  parsedColor.a += a ?? 0;
  if (parsedColor.h < 0) {
    parsedColor.h = 360 + parsedColor.h;
  }
  if (parsedColor.h > 360) {
    parsedColor.h = parsedColor.h - 360;
  }
  parsedColor.s = Math.max(0, Math.min(100, parsedColor.s));
  parsedColor.l = Math.max(0, Math.min(100, parsedColor.l));
  parsedColor.a = Math.max(0, Math.min(1, parsedColor.a));
  return parsedColor;
};
const isCSSVariable = (strColor) => /var\(--.+\)/.test(strColor);
const cssVariableName = (colorName) => `--va-${camelCaseToKebabCase(colorName)}`;
const normalizeColorName = (colorName) => kebabCaseToCamelCase(colorName);
const colorToRgba = (color, opacity) => {
  const { r, g, b } = parseColorToRGB(color);
  return rgbToString({ r, g, b, a: opacity });
};
const getColorLightness = (color) => {
  const { r, g, b } = parseColorToRGB(color);
  return Math.sqrt(r * r * 0.241 + g * g * 0.691 + b * b * 0.068);
};
const getBoxShadowColor = (color, opacity = 0.4) => {
  return colorToRgba(color, opacity);
};
const getBoxShadowColorFromBg = (background, opacity = 0.4) => {
  return colorToRgba(background, opacity);
};
const getHoverColor = (color, opacity = 0.2) => {
  return colorToRgba(color, opacity);
};
const getFocusColor = (color, opacity = 0.3) => {
  return colorToRgba(color, opacity);
};
const shiftHSLAColor = (color, shift) => {
  return hslToString(shiftHSLA(parseColorToHSL(color), shift));
};
const setHSLAColor = (color, shift) => {
  return hslToString(setHSLA(parseColorToHSL(color), shift));
};
const shiftGradientColor = (color) => {
  const newColor = parseColorToHSL(color);
  if (newColor.s < 10) {
    return shiftHSLAColor(newColor, { h: 2, s: 5, l: 10 });
  }
  if (newColor.s < 30) {
    return shiftHSLAColor(newColor, { s: -14, l: 11 });
  }
  if (newColor.h >= 0 && newColor.h < 44 || newColor.h >= 285) {
    return shiftHSLAColor(newColor, { h: 11, s: 27, l: 8 });
  }
  if (newColor.h >= 44 && newColor.h < 85) {
    return shiftHSLAColor(newColor, { h: 3, l: 9 });
  }
  if (newColor.h >= 85 && newColor.h < 165) {
    return shiftHSLAColor(newColor, { h: 16, l: 14 });
  }
  if (newColor.h >= 165 && newColor.h < 285) {
    return shiftHSLAColor(newColor, { h: -15, s: 3, l: 2 });
  }
  throw new Error("This method should handle all colors. But it didn't for some reason.");
};
const getGradientBackground = (color) => {
  const colorLeft = shiftGradientColor(color);
  return `linear-gradient(to right, ${colorLeft}, ${colorToString(color)})`;
};
const getStateMaskGradientBackground = (color, maskColor, maskOpacity) => {
  const mask = colorToRgba(maskColor, maskOpacity);
  return `linear-gradient(0deg, ${mask}, ${mask}), ${color}`;
};
const isColorTransparent = (color) => {
  if (!color) {
    return false;
  }
  if (color === "transparent") {
    return true;
  }
  return parseColorToRGB(color).a <= 0.1;
};
const useColors = () => {
  const gc = useGlobalConfig();
  if (!gc) {
    throw new Error("useColors must be used in setup function or Vuestic GlobalConfigPlugin is not registered!");
  }
  const { globalConfig } = gc;
  const colors = useReactiveComputed({
    get: () => globalConfig.value.colors.presets[globalConfig.value.colors.currentPresetName],
    set: (v) => {
      setColors(v);
    }
  });
  const setColors = (colors2) => {
    globalConfig.value.colors.presets[globalConfig.value.colors.currentPresetName] = {
      ...globalConfig.value.colors.variables,
      ...colors2
    };
  };
  const getColors = () => {
    return colors;
  };
  const getColor = (prop, defaultColor, preferVariables) => {
    if (!defaultColor) {
      defaultColor = colors.primary;
    }
    if (prop === "transparent") {
      return "#ffffff00";
    }
    if (prop === "currentColor") {
      return prop;
    }
    if (prop == null ? void 0 : prop.startsWith("on")) {
      const colorName = prop.slice(2);
      if (colors[normalizeColorName(colorName)]) {
        return getColor(getTextColor(getColor(colorName)), void 0, preferVariables);
      }
    }
    if (!prop) {
      prop = getColor(defaultColor);
    }
    const colorValue = colors[prop] || colors[normalizeColorName(prop)];
    if (colorValue) {
      return preferVariables ? `var(${cssVariableName(prop)})` : colorValue;
    }
    if (isColor(prop)) {
      return prop;
    }
    if (preferVariables && isCSSVariable(prop)) {
      return prop;
    }
    warn(`'${prop}' is not a proper color! Use HEX or default color themes
      names (https://vuestic.dev/en/styles/colors#default-color-themes)`);
    return getColor(defaultColor);
  };
  const getComputedColor = (color) => {
    return computed({
      get() {
        return getColor(color);
      },
      set(v) {
        setColors({ [color]: v });
      }
    });
  };
  const colorsToCSSVariable = (colors2, prefix = "va") => {
    return Object.keys(colors2).filter((key) => colors2[key] !== void 0).reduce((acc, colorName) => {
      acc[`--${prefix}-${camelCaseToKebabCase(colorName)}`] = getColor(colors2[colorName], void 0, true);
      acc[`--${prefix}-on-${camelCaseToKebabCase(colorName)}`] = getColor(getTextColor(getColor(colors2[colorName])), void 0, true);
      return acc;
    }, {});
  };
  const cache = useCache();
  const getColorLightnessFromCache = (color) => {
    if (typeof color !== "string") {
      return getColorLightness(color);
    }
    if (!cache.colorContrast[color]) {
      cache.colorContrast[color] = getColorLightness(color);
    }
    return cache.colorContrast[color];
  };
  const computedDarkColor = computed(() => {
    return getColorLightnessFromCache(getColor("textPrimary")) > 255 / 2 ? "textInverted" : "textPrimary";
  });
  const computedLightColor = computed(() => {
    return getColorLightnessFromCache(getColor("textPrimary")) > 255 / 2 ? "textPrimary" : "textInverted";
  });
  const getTextColor = (color, darkColor, lightColor) => {
    const onColorName = `on${capitalize$1(String(color))}`;
    if (colors[onColorName]) {
      return colors[onColorName];
    }
    darkColor = darkColor || computedDarkColor.value;
    lightColor = lightColor || computedLightColor.value;
    return getColorLightnessFromCache(color) > globalConfig.value.colors.threshold ? darkColor : lightColor;
  };
  const currentPresetName = computed({
    get: () => globalConfig.value.colors.currentPresetName,
    set: (v) => {
      applyPreset(v);
    }
  });
  const presets2 = computed(() => globalConfig.value.colors.presets);
  const applyPreset = (presetName) => {
    globalConfig.value.colors.currentPresetName = presetName;
    if (!globalConfig.value.colors.presets[presetName]) {
      return warn(`Preset ${presetName} does not exist`);
    }
  };
  return {
    colors,
    currentPresetName,
    presets: presets2,
    applyPreset,
    setColors,
    getColors,
    getColor,
    getComputedColor,
    getBoxShadowColor,
    getBoxShadowColorFromBg,
    getHoverColor,
    getFocusColor,
    getGradientBackground,
    getTextColor,
    shiftHSLAColor,
    setHSLAColor,
    colorsToCSSVariable,
    colorToRgba,
    getStateMaskGradientBackground
  };
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...{
    name: "VaIcon"
  },
  __name: "VaIcon",
  props: {
    ...useSizeProps,
    ...useComponentPresetProp,
    name: { type: String, default: "" },
    tag: { type: String },
    component: { type: Object },
    color: { type: String },
    rotation: { type: [String, Number] },
    spin: { type: [String, Boolean] },
    flip: {
      type: String,
      default: "off",
      validator: (value) => ["off", "horizontal", "vertical", "both"].includes(value)
    }
  },
  setup(__props) {
    const props = __props;
    const { getColor } = useColors();
    const { sizeComputed } = useSize(props);
    const { getIcon } = useIcon();
    const iconConfig = computed(() => getIcon(props.name));
    const computedTag = computed(() => props.component || props.tag || iconConfig.value.component || iconConfig.value.tag || "i");
    const attrs = useAttrs();
    const computedAttrs = computed(() => ({ ...iconConfig.value.attrs, ...omit(attrs, ["class"]) }));
    const getSpinClass = (spin) => {
      if (spin === void 0 || spin === false) {
        return;
      }
      return spin === "counter-clockwise" ? "va-icon--spin-reverse" : "va-icon--spin";
    };
    const computedClass = computed(() => [
      iconConfig.value.class,
      getSpinClass(props.spin ?? iconConfig.value.spin)
    ]);
    const transformStyle = computed(() => {
      const rotation = props.rotation ? `rotate(${props.rotation}deg)` : "";
      const flipY = props.flip === "vertical" || props.flip === "both" ? -1 : 1;
      const flipX = props.flip === "horizontal" || props.flip === "both" ? -1 : 1;
      const scale = props.flip === "off" ? "" : `scale(${flipY}, ${flipX})`;
      return `${scale} ${rotation}`.trim();
    });
    const computedStyle = computed(() => ({
      transform: transformStyle.value,
      cursor: attrs.onClick ? "pointer" : null,
      color: props.color ? getColor(props.color, void 0, true) : iconConfig.value.color,
      fontSize: sizeComputed.value,
      height: sizeComputed.value,
      lineHeight: sizeComputed.value
    }));
    const tabindexComputed = computed(() => attrs.tabindex ?? -1);
    const ariaHiddenComputed = computed(() => attrs.role !== "button" || tabindexComputed.value < 0);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(computedTag.value), mergeProps({
        class: ["va-icon", computedClass.value],
        style: computedStyle.value,
        "aria-hidden": ariaHiddenComputed.value,
        notranslate: ""
      }, computedAttrs.value), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            iconConfig.value.content ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString(iconConfig.value.content), 1)
            ], 64)) : createCommentVNode("", true)
          ])
        ]),
        _: 3
      }, 16, ["class", "style", "aria-hidden"]);
    };
  }
});
const useNumericProp = (key) => {
  const props = getCurrentInstance().props;
  const numericComputed = computed(() => {
    const numeric = props == null ? void 0 : props[key];
    if (numeric === void 0) {
      return numeric;
    }
    return Number(numeric);
  });
  return numericComputed;
};
const isServer = () => typeof window === "undefined";
const fakeGlobal = {};
const getGlobal = () => {
  if (isServer()) {
    if (typeof globalThis === "undefined") {
      return fakeGlobal;
    }
    return globalThis;
  } else {
    return window;
  }
};
const GAP = 5;
const toastInstances = ref([]);
const getNodeProps$1 = (vNode) => {
  var _a;
  return ((_a = vNode.component) == null ? void 0 : _a.props) || {};
};
const getTranslateValue = (item) => {
  if (item.el) {
    return item.el.offsetHeight + GAP;
  }
  return 0;
};
const useToastService = (props) => {
  const currentInstance = getCurrentInstance();
  const yOffset = computed(() => {
    const currentIndex = toastInstances.value.findIndex((instance) => instance === currentInstance.vnode);
    if (currentIndex === -1) {
      return 0;
    }
    return toastInstances.value.slice(currentIndex + 1).reduce((acc, instance) => {
      const {
        position: itemPosition
      } = getNodeProps$1(instance);
      const { position } = props;
      if (position === itemPosition) {
        return getTranslateValue(instance) + acc;
      }
      return acc;
    }, 0);
  });
  onMounted(() => {
    toastInstances.value.unshift(currentInstance.vnode);
  });
  onBeforeUnmount(() => {
    toastInstances.value = toastInstances.value.filter((item) => item !== currentInstance.vnode);
  });
  return {
    yOffset,
    updateYOffset: () => {
      toastInstances.value = toastInstances.value.filter((item) => item !== currentInstance.vnode);
    }
  };
};
const useTimer = () => {
  let timer;
  const start = (...args) => {
    timer = window.setTimeout(...args);
    return timer;
  };
  const clear = () => timer && window.clearTimeout(timer);
  return {
    start,
    clear
  };
};
const isTranslationKey = (value) => value.startsWith("$t:");
const useTranslationProp = (defaultValue) => {
  return { type: String, default: defaultValue };
};
const applyI18nTemplate = (key, values) => {
  if (!values) {
    return key;
  }
  Object.keys(values).forEach((valueKey) => {
    key = key.replace(`{${valueKey}}`, String(values[valueKey]));
  });
  return key;
};
const useTranslation = () => {
  const { globalConfig } = useGlobalConfig();
  const config = computed(() => globalConfig.value.i18n);
  function t(key, values) {
    var _a;
    const $t = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.config.globalProperties.$t;
    if (typeof $t === "function") {
      const translated2 = $t(`vuestic.${key}`, values);
      if (translated2) {
        return translated2;
      }
    }
    const translated = config.value[key];
    if (!translated) {
      warn(`${key} not found in VuesticUI i18n config`);
      return key;
    }
    return applyI18nTemplate(translated, values) || key;
  }
  function tp(key, values) {
    if (!key) {
      return "";
    }
    if (isTranslationKey(key)) {
      return t(key.slice(3), values);
    }
    return applyI18nTemplate(key, values) || key;
  }
  return {
    tp,
    t
  };
};
const useTextColor = (componentColor, isTransparent = false) => {
  const { props } = getCurrentInstance();
  const { getColor, getTextColor } = useColors();
  const textColorComputed = computed(() => {
    if (props.textColor) {
      return getColor(props.textColor);
    }
    const bg = componentColor ? unref(componentColor) : props.color;
    if (!bg) {
      return "currentColor";
    }
    const componentColorHex = getColor(bg);
    if (isColorTransparent(componentColorHex)) {
      return "currentColor";
    }
    return unref(isTransparent) ? componentColorHex : getColor(getTextColor(componentColorHex));
  });
  return { textColorComputed };
};
const _hoisted_1$2 = ["role", "aria-live"];
const _hoisted_2$1 = { class: "va-toast__group" };
const _hoisted_3$1 = ["textContent"];
const _hoisted_4 = { class: "va-toast__content" };
const _hoisted_5 = ["innerHTML"];
const _hoisted_6 = ["textContent"];
const _hoisted_7 = {
  key: 1,
  class: "va-toast__content"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...{
    name: "VaToast"
  },
  __name: "VaToast",
  props: {
    ...useComponentPresetProp,
    title: { type: String, default: "" },
    offsetY: { type: [Number, String], default: 16 },
    offsetX: { type: [Number, String], default: 16 },
    message: { type: [String, Function], default: "" },
    dangerouslyUseHtmlString: { type: Boolean, default: false },
    icon: { type: String, default: "close" },
    customClass: { type: String, default: "" },
    duration: { type: [Number, String], default: 5e3 },
    color: { type: String, default: "primary" },
    closeable: { type: Boolean, default: true },
    onClose: { type: Function },
    onClick: { type: Function },
    multiLine: { type: Boolean, default: false },
    position: {
      type: String,
      default: "top-right",
      validator: (value) => ["top-right", "top-center", "top-left", "bottom-right", "bottom-center", "bottom-left"].includes(value)
    },
    render: { type: Function },
    ariaCloseLabel: useTranslationProp("$t:close"),
    role: { type: String, default: void 0 },
    inline: { type: Boolean, default: false }
  },
  emits: ["on-click", "on-close"],
  setup(__props, { emit: __emit }) {
    const VaToastRenderer = defineComponent({
      name: "VaToastRenderer",
      props: {
        render: { type: Function, required: true }
      },
      setup: (props2) => () => props2.render()
    });
    const { tp } = useTranslation();
    const props = __props;
    const emit = __emit;
    const rootElement = shallowRef();
    const { getColor } = useColors();
    const { textColorComputed } = useTextColor(computed(() => getColor(props.color)));
    const offsetYComputed = useNumericProp("offsetY");
    const offsetXComputed = useNumericProp("offsetX");
    const durationComputed = useNumericProp("duration");
    const visible = ref(false);
    const {
      yOffset,
      updateYOffset
    } = useToastService(props);
    const positionObject = computed(() => ({
      vertical: props.position.includes("top") ? "top" : "bottom",
      horizontal: props.position.includes("center") ? "center" : props.position.includes("right") ? "right" : "left"
    }));
    const getPositionStyle = () => {
      const vertical = positionObject.value.vertical;
      const horizontal = positionObject.value.horizontal;
      if (horizontal === "center") {
        return {
          [vertical]: `${offsetYComputed.value + yOffset.value}px`,
          left: "50%",
          "--va-toast-x-shift": "-50%"
        };
      }
      return {
        [vertical]: `${offsetYComputed.value + yOffset.value}px`,
        [horizontal]: `${offsetXComputed.value}px`
      };
    };
    const toastClasses = computed(() => [
      props.customClass,
      props.multiLine ? "va-toast--multiline" : "",
      props.inline ? "va-toast--inline" : "",
      [`va-toast--${props.position}`]
    ]);
    const toastStyles = computed(() => ({
      ...getPositionStyle(),
      backgroundColor: getColor(props.color),
      color: textColorComputed.value
    }));
    const computedAriaLive = computed(() => {
      if (props.role === "status") {
        return "polite";
      } else {
        return "assertive";
      }
    });
    const computedMessage = computed(() => typeof props.message === "function" ? props.message() : props.message);
    const destroyElement = () => {
      var _a, _b;
      (_a = rootElement.value) == null ? void 0 : _a.removeEventListener("transitionend", destroyElement);
      (_b = rootElement.value) == null ? void 0 : _b.remove();
    };
    const onToastClick = () => {
      if (typeof props.onClick === "function") {
        props.onClick();
      } else {
        emit("on-click");
      }
    };
    const onToastClose = () => {
      visible.value = false;
      updateYOffset();
    };
    const onHidden = () => {
      if (typeof props.onClose === "function") {
        props.onClose();
      } else {
        emit("on-close");
      }
      destroyElement();
    };
    const timer = useTimer();
    const clearTimer = timer.clear;
    const startTimer = () => {
      if (durationComputed.value > 0) {
        timer.start(() => visible.value && onToastClose(), durationComputed.value);
      }
    };
    onMounted(() => {
      visible.value = true;
      startTimer();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: "va-toast-fade",
        onAfterLeave: onHidden
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            ref_key: "rootElement",
            ref: rootElement,
            role: _ctx.$props.role ?? _ctx.$props.closeable ? "alertdialog" : "alert",
            "aria-live": computedAriaLive.value,
            "aria-atomic": "true",
            class: normalizeClass(["va-toast", toastClasses.value]),
            style: normalizeStyle(toastStyles.value),
            onMouseenter: _cache[0] || (_cache[0] = //@ts-ignore
            (...args) => unref(clearTimer) && unref(clearTimer)(...args)),
            onMouseleave: startTimer,
            onClick: onToastClick
          }, [
            createElementVNode("div", _hoisted_2$1, [
              _ctx.$props.title ? (openBlock(), createElementBlock("h2", {
                key: 0,
                class: "va-toast__title",
                textContent: toDisplayString(_ctx.$props.title)
              }, null, 8, _hoisted_3$1)) : createCommentVNode("", true),
              withDirectives(createElementVNode("div", _hoisted_4, [
                _ctx.$props.dangerouslyUseHtmlString ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  innerHTML: computedMessage.value
                }, null, 8, _hoisted_5)) : (openBlock(), createElementBlock("p", {
                  key: 1,
                  textContent: toDisplayString(computedMessage.value)
                }, null, 8, _hoisted_6))
              ], 512), [
                [vShow, _ctx.$props.message]
              ]),
              _ctx.$props.render ? (openBlock(), createElementBlock("div", _hoisted_7, [
                createVNode(unref(VaToastRenderer), {
                  render: _ctx.$props.render
                }, null, 8, ["render"])
              ])) : createCommentVNode("", true),
              _ctx.$props.closeable ? (openBlock(), createBlock(_sfc_main$3, {
                key: 2,
                class: "va-toast__close-icon",
                role: "button",
                "aria-label": unref(tp)(_ctx.$props.ariaCloseLabel),
                tabindex: "0",
                size: "1rem",
                name: _ctx.$props.icon,
                onClick: withModifiers(onToastClose, ["stop"]),
                onKeydown: withKeys(withModifiers(onToastClose, ["stop"]), ["enter"])
              }, null, 8, ["aria-label", "name", "onKeydown"])) : createCommentVNode("", true)
            ])
          ], 46, _hoisted_1$2), [
            [vShow, visible.value]
          ])
        ]),
        _: 1
      });
    };
  }
});
const VaToast = withConfigTransport(_sfc_main$2);
let seed = 1;
getGlobal().vaToastInstances = [];
const getNodeProps = (vNode) => {
  var _a;
  return ((_a = vNode.component) == null ? void 0 : _a.props) || {};
};
const closeNotification = (targetInstance, destroyElementFn) => {
  if (!targetInstance) {
    return;
  }
  if (!getGlobal().vaToastInstances.length) {
    seed = 1;
    return;
  }
  const targetInstanceIndex = getGlobal().vaToastInstances.findIndex((instance) => instance === targetInstance);
  if (targetInstanceIndex < 0) {
    return;
  }
  destroyElementFn();
  getGlobal().vaToastInstances = getGlobal().vaToastInstances.reduce((acc, instance, index) => {
    if (instance === targetInstance) {
      return acc;
    }
    return [...acc, instance];
  }, []);
  if (!getGlobal().vaToastInstances.length) {
    seed = 1;
  }
};
const destroy = (el, node) => {
  if (el) {
    render(null, el);
    el.remove();
  }
  el = null;
};
const mount = (component, {
  props,
  children,
  element,
  appContext
} = {}) => {
  let el = element;
  let vNode;
  const onClose = () => {
    closeNotification(vNode, () => destroy(el));
    if (props == null ? void 0 : props.onClose) {
      props.onClose();
    }
  };
  vNode = createVNode(component, { ...props, onClose }, children);
  if (appContext) {
    vNode.appContext = appContext;
  }
  if (el) {
    render(vNode, el);
  } else if (typeof document !== "undefined") {
    render(vNode, el = document.createElement("div"));
  }
  return { vNode, el };
};
const closeAllNotifications = (appContext) => {
  if (!getGlobal().vaToastInstances.length) {
    seed = 1;
    return;
  }
  getGlobal().vaToastInstances.forEach((instance) => {
    if (appContext && instance.appContext !== appContext) {
      return;
    }
    getNodeProps(instance).onClose();
  });
};
const closeById = (id) => {
  const targetInstance = getGlobal().vaToastInstances.find((instance) => {
    var _a;
    return ((_a = instance.el) == null ? void 0 : _a.id) === id;
  });
  if (targetInstance) {
    const nodeProps = getNodeProps(targetInstance);
    nodeProps.onClose();
  }
};
const getToastOptions = (options) => {
  if (typeof options === "string") {
    return {
      message: options
    };
  }
  return options;
};
const createToastInstance = (customProps, appContext) => {
  const { vNode, el } = mount(VaToast, { appContext, props: getToastOptions(customProps) });
  const nodeProps = getNodeProps(vNode);
  if (el && vNode.el && nodeProps) {
    document.body.appendChild(el.childNodes[0]);
    vNode.el.id = "notification_" + seed;
    seed += 1;
    getGlobal().vaToastInstances.push(vNode);
    return vNode.el.id;
  }
  return null;
};
const useAppContext = () => {
  const currentInstance = getCurrentInstance();
  return computed(() => {
    var _a;
    return ((_a = getCurrentApp()) == null ? void 0 : _a._context) || (currentInstance == null ? void 0 : currentInstance.appContext);
  });
};
const useToast = () => {
  const appContext = useAppContext();
  const createdInThisSetupContext = [];
  const notify = (options) => {
    const id = createToastInstance(options, appContext.value);
    if (id) {
      createdInThisSetupContext.push(id);
    }
    return id;
  };
  const init = (options) => {
    return notify(options);
  };
  const close = (id) => closeById(id);
  const closeAll = (allApps = false) => closeAllNotifications(allApps ? void 0 : appContext.value);
  const closeAllCreatedInThisHook = () => {
    createdInThisSetupContext.forEach((id) => closeById(id));
  };
  return {
    init,
    notify,
    close,
    closeAll,
    closeAllCreatedInThisHook
  };
};
const _hoisted_1$1 = { class: "flex-nowrap" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SaveInputGit",
  props: {
    repo: {}
  },
  emits: ["save", "override"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const emits = __emit;
    const props = __props;
    const nameForSaving = ref("newFile");
    const isDisabled = computed(() => {
      return nameForSaving.value == "";
    });
    onMounted(async () => {
      files.value = await props.repo.findAll();
    });
    const files = ref();
    const isSameName = computed(() => {
      if (files.value == void 0) return false;
      return files.value.find((f) => f.name == nameForSaving.value) != void 0;
    });
    const save = () => {
      const fu = new URL(props.repo.uri);
      fu.pathname = nameForSaving.value + ".json";
      emits("save", {
        name: nameForSaving.value,
        uri: fu
      });
    };
    const override = () => {
      const en = files.value.find((f) => f.name == nameForSaving.value);
      emits("override", en);
    };
    const setNameSuggestion = (name) => {
      nameForSaving.value = name;
    };
    __expose({ setNameSuggestion });
    return (_ctx, _cache) => {
      const _component_VaInput = resolveComponent("VaInput");
      const _component_VaButton = resolveComponent("VaButton");
      return openBlock(), createBlock(Teleport, {
        defer: "",
        to: "#loadSaveModalFooter"
      }, [
        createElementVNode("div", _hoisted_1$1, [
          _cache[1] || (_cache[1] = createElementVNode("span", { class: "va-title" }, "Name: ", -1)),
          createVNode(_component_VaInput, {
            modelValue: nameForSaving.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => nameForSaving.value = $event),
            placeholder: "Name"
          }, null, 8, ["modelValue"])
        ]),
        isSameName.value ? (openBlock(), createBlock(_component_VaButton, {
          key: 0,
          color: "danger",
          onClick: override,
          disabled: isDisabled.value,
          "border-color": "primary",
          preset: "secondary",
          icon: "save"
        }, {
          default: withCtx(() => [..._cache[2] || (_cache[2] = [
            createTextVNode(" override ", -1)
          ])]),
          _: 1
        }, 8, ["disabled"])) : (openBlock(), createBlock(_component_VaButton, {
          key: 1,
          onClick: save,
          disabled: isDisabled.value,
          "border-color": "primary",
          preset: "secondary",
          icon: "save"
        }, {
          default: withCtx(() => [..._cache[3] || (_cache[3] = [
            createTextVNode(" save", -1)
          ])]),
          _: 1
        }, 8, ["disabled"]))
      ]);
    };
  }
});
const _hoisted_1 = { class: "flex-nowrap" };
const _hoisted_2 = { class: "commit" };
const _hoisted_3 = { class: "deleteDailog" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "GitRepositoryV",
  props: {
    repo: {},
    context: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emts = __emit;
    const columns = ref([
      { key: "icon", label: "icon" },
      { key: "name", label: "file" },
      { key: "date", label: "date" },
      { key: "size", label: "size" },
      { key: "options", label: "options" }
    ]);
    const savedData = ref([]);
    const branch = ref("main");
    const commit = ref("");
    const isTableLoading = ref(false);
    ref(false);
    const token = ref(void 0);
    const selectedRow = ref(null);
    watch(() => props.repo, async (_new) => {
      await getFiles();
    }, { immediate: true });
    watch(branch, async (name) => {
      const branch2 = (await props.repo.getBranches()).find((b) => b.name == name);
      if (branch2) {
        props.repo.setBranch(branch2);
        props.repo.getCommits();
        getFiles();
      }
    });
    watch(commit, async (date) => {
      const commit2 = (await props.repo.getCommits()).find((c) => c.creation_date == date);
      if (commit2) {
        props.repo.setCommit(commit2);
        getFiles();
      }
    });
    const rowClick = async (row) => {
      selectedRow.value = row;
    };
    const branch_options = asyncComputed(async () => {
      return (await props.repo.getBranches()).map((b) => b.name);
    });
    const commit_options = asyncComputed(async () => {
      console.log("updated");
      return (await props.repo.getCommits()).map((c) => c.creation_date);
    });
    async function getFiles() {
      console.log("update");
      if (props.repo != void 0) {
        try {
          isTableLoading.value = true;
          savedData.value = await props.repo.findAll();
        } catch (e) {
          savedData.value = [];
        } finally {
          isTableLoading.value = false;
        }
      } else savedData.value = [];
    }
    const override = async (e) => {
      if (!props.context?.state) {
        console.log("no context");
        return false;
      }
      e.data = props.context.state;
      try {
        await props.repo.update(e);
        notify({ message: "File saved", color: "#dee5f2", position: "bottom-right", duration: 2e3 });
      } catch (ee) {
        let token2 = await run(null);
        if (!token2) {
          notify({ title: "Error on saving File", message: ee, color: "#d23a1f", position: "bottom-right", duration: 2e3 });
        } else {
          await props.repo.auth({ auth: token2 });
          override(e);
        }
      } finally {
      }
    };
    const save = async (e) => {
      if (!props.context?.state) {
        console.log("no context");
        return false;
      }
      e.data = props.context.state;
      try {
        await props.repo.create(e);
        notify({ message: "File saved", color: "#dee5f2", position: "bottom-right", duration: 2e3 });
      } catch (ee) {
        if (ee instanceof AuthentificationError) {
          let token2 = await run(null);
          if (!token2) {
            notify({ title: "Error on saving File", message: ee, color: "#d23a1f", position: "bottom-right", duration: 2e3 });
          } else {
            await props.repo.auth({ auth: token2 });
            await save(e);
          }
        } else {
          notify({ title: "Error on saving File", message: ee, color: "#d23a1f", position: "bottom-right", duration: 2e3 });
          console.log(e);
        }
      } finally {
        await getFiles();
      }
    };
    const auth = () => {
      return token.value;
    };
    const { notify } = useToast();
    const { isOpened, run, close } = usePromisifiedModal(auth);
    const getRowClass = (item) => {
      if (!selectedRow.value) return "";
      return item.name === selectedRow.value.item.name ? { class: ["selected bg-gray-200"] } : "";
    };
    const loadFile = async () => {
      const row = selectedRow.value;
      try {
        let entity = await props.repo.getEntityByUri(row.item.uri);
        if (entity && entity.data) {
          emts("close", entity?.data);
        }
        notify({
          message: "File loaded",
          color: "#dee5f2",
          position: "bottom-right",
          duration: 2e3
        });
      } catch (e) {
        console.log(e);
      }
    };
    return (_ctx, _cache) => {
      const _component_VaMenuList = resolveComponent("VaMenuList");
      const _component_VaButtonDropdown = resolveComponent("VaButtonDropdown");
      const _component_VaButton = resolveComponent("VaButton");
      const _component_VaIcon = resolveComponent("VaIcon");
      const _component_VaDataTable = resolveComponent("VaDataTable");
      const _component_VaInput = resolveComponent("VaInput");
      const _component_VaModal = resolveComponent("VaModal");
      return openBlock(), createElementBlock(Fragment, null, [
        createElementVNode("div", _hoisted_1, [
          (openBlock(), createBlock(Teleport, {
            defer: "",
            to: "#loadSaveModalFooter"
          }, [
            _cache[9] || (_cache[9] = createElementVNode("span", { class: "va-title" }, "Branch: ", -1)),
            createVNode(_component_VaButtonDropdown, {
              label: branch.value,
              preset: "secondary",
              "border-color": "primary"
            }, {
              default: withCtx(() => [
                createVNode(_component_VaMenuList, {
                  options: unref(branch_options),
                  onSelected: _cache[0] || (_cache[0] = (v) => {
                    branch.value = v;
                  })
                }, null, 8, ["options"])
              ]),
              _: 1
            }, 8, ["label"]),
            _cache[10] || (_cache[10] = createElementVNode("div", { class: "space" }, null, -1)),
            createElementVNode("div", _hoisted_2, [
              _cache[8] || (_cache[8] = createElementVNode("span", { class: "va-title" }, "Commit: ", -1)),
              createVNode(_component_VaButtonDropdown, {
                label: commit.value,
                preset: "secondary",
                "border-color": "primary"
              }, {
                default: withCtx(() => [
                  createVNode(_component_VaMenuList, {
                    options: unref(commit_options),
                    onSelected: _cache[1] || (_cache[1] = (v) => {
                      commit.value = v;
                    })
                  }, null, 8, ["options"])
                ]),
                _: 1
              }, 8, ["label"])
            ])
          ])),
          createVNode(_sfc_main$1, {
            repo: __props.repo,
            onSave: save,
            onOverride: override
          }, null, 8, ["repo"]),
          (openBlock(), createBlock(Teleport, {
            defer: "",
            to: "#loadSaveModalFooter"
          }, [
            createVNode(_component_VaButton, {
              onClick: loadFile,
              disabled: !selectedRow.value,
              icon: "task",
              "border-color": "primary",
              preset: "secondary"
            }, {
              default: withCtx(() => [..._cache[11] || (_cache[11] = [
                createTextVNode(" load", -1)
              ])]),
              _: 1
            }, 8, ["disabled"])
          ]))
        ]),
        createVNode(_component_VaDataTable, {
          class: "table",
          striped: "",
          "virtual-scroller": "",
          loading: isTableLoading.value,
          items: savedData.value,
          columns: columns.value,
          hoverable: "",
          "onRow:click": rowClick,
          "row-bind": getRowClass
        }, {
          "cell(options)": withCtx(({ rowIndex, row }) => [
            createVNode(_component_VaButton, {
              preset: "plain",
              icon: "download",
              class: "ml-3",
              onClick: _cache[2] || (_cache[2] = (ev) => {
                ev.stopImmediatePropagation();
              })
            }),
            createVNode(_component_VaButton, {
              preset: "plain",
              icon: "delete",
              class: "ml-3",
              onClick: _cache[3] || (_cache[3] = (ev) => {
                ev.stopImmediatePropagation();
              })
            })
          ]),
          "cell(icon)": withCtx(({ rowIndex, row }) => [
            createVNode(_component_VaIcon, { name: "newspaper" })
          ]),
          _: 1
        }, 8, ["loading", "items", "columns"]),
        createVNode(_component_VaModal, {
          size: "auto",
          "hide-default-actions": "",
          modelValue: unref(isOpened),
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(isOpened) ? isOpened.value = $event : null)
        }, {
          footer: withCtx(() => [
            createVNode(_component_VaButton, {
              preset: "secondary",
              onClick: _cache[5] || (_cache[5] = () => {
                token.value = void 0;
                unref(close)(null);
              })
            }, {
              default: withCtx(() => [..._cache[15] || (_cache[15] = [
                createTextVNode(" cancel ", -1)
              ])]),
              _: 1
            }),
            createVNode(_component_VaButton, {
              preset: "secondary",
              onClick: _cache[6] || (_cache[6] = () => {
                unref(close)(token.value);
              })
            }, {
              default: withCtx(() => [..._cache[16] || (_cache[16] = [
                createTextVNode(" ok", -1)
              ])]),
              _: 1
            })
          ]),
          default: withCtx(() => [
            createElementVNode("div", _hoisted_3, [
              _cache[12] || (_cache[12] = createElementVNode("span", { class: "va-h5" }, " Please provide a token to access the Repo: ", -1)),
              _cache[13] || (_cache[13] = createElementVNode("br", null, null, -1)),
              _cache[14] || (_cache[14] = createElementVNode("br", null, null, -1)),
              createVNode(_component_VaInput, {
                modelValue: token.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => token.value = $event),
                class: "minwidth100",
                placeholder: "Token"
              }, null, 8, ["modelValue"])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
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
const GitRepositoryV = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c3bbf3f4"]]);
function activate$1({ services }) {
  services.getRequired(REPOSITORY_REGISTRY).registerViewForRepoType(type, GitRepositoryV);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: activate$1
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.persistence.git";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.persistence.git");
  await activate$1?.(context);
}
async function deactivate(context) {
  await void 0;
}
export {
  activate,
  deactivate
};
