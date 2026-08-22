(function(){var i="ui.vue.widget.page",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.page-layout-renderer[data-v-49512bd0] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-height: 300px;\n}\n.loading-state[data-v-49512bd0], .error-state[data-v-49512bd0], .empty-state[data-v-49512bd0], .no-layout-state[data-v-49512bd0] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  padding: 2rem;\n  text-align: center;\n}\n.loading-spinner[data-v-49512bd0] {\n  width: 32px;\n  height: 32px;\n  border: 3px solid #f3f3f3;\n  border-top: 3px solid #007bff;\n  border-radius: 50%;\n  animation: spin-49512bd0 1s linear infinite;\n}\n@keyframes spin-49512bd0 {\n0% { transform: rotate(0deg);\n}\n100% { transform: rotate(360deg);\n}\n}\n.error-state[data-v-49512bd0] {\n  color: #dc3545;\n}\n.error-icon[data-v-49512bd0], .empty-icon[data-v-49512bd0], .warning-icon[data-v-49512bd0] {\n  font-size: 2rem;\n  margin-bottom: 1rem;\n}\n.no-layout-state[data-v-49512bd0] {\n  color: #ffc107;\n}\n.layout-engine-container[data-v-49512bd0] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n}\n.empty-state[data-v-49512bd0] {\n  color: #6c757d;\n}\n.layout-container[data-v-49512bd0] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #f8f9fa;\n  min-height: 400px;\n}\n.layout-container.view-mode[data-v-49512bd0] {\n  background: transparent;\n}\n.layout-item[data-v-49512bd0] {\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n  background: white;\n  box-shadow: 0 2px 4px rgba(0,0,0,0.1);\n  overflow: hidden;\n}\n.view-mode .layout-item[data-v-49512bd0] {\n  border-color: transparent;\n  box-shadow: none;\n}\n.missing-widget[data-v-49512bd0] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  color: #6c757d;\n  background: #f8f9fa;\n  text-align: center;\n  font-size: 0.8rem;\n}\n.missing-widget-icon[data-v-49512bd0] {\n  font-size: 1.5rem;\n  margin-bottom: 0.5rem;\n}\n.debug-info[data-v-49512bd0] {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n  background: rgba(0,0,0,0.8);\n  color: white;\n  padding: 0.5rem;\n  border-radius: 4px;\n  font-size: 0.7rem;\n  max-width: 300px;\n}\n.debug-info pre[data-v-49512bd0] {\n  margin: 0;\n  white-space: pre-wrap;\n}\n\n.container[data-v-a181d5f3] {\n  width: 100%;\n  height: 100%;\n}\n.recursion-warning[data-v-a181d5f3] {\n  padding: 1rem;\n  background-color: #fff3cd;\n  border: 1px solid #ffeaa7;\n  border-radius: 4px;\n  color: #856404;\n  text-align: center;\n}\n.recursion-details[data-v-a181d5f3] {\n  font-size: 0.8em;\n  margin-top: 0.5rem;\n  opacity: 0.7;\n}\n.page-widget-content[data-v-a181d5f3] {\n  width: 100%;\n  height: 100%;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n/* Scrollbar Mode - mit Scrollbalken */\n.page-widget-content.scroll-mode[data-v-a181d5f3] {\n  overflow: auto;\n}\n.page-widget-content.scroll-mode .page-content-wrapper[data-v-a181d5f3] {\n  min-height: fit-content;\n  overflow: visible;\n}\n\n/* Responsive Mode - ohne Scrollbalken */\n.page-widget-content.responsive-mode[data-v-a181d5f3] {\n  overflow: hidden;\n}\n.page-widget-content.responsive-mode .page-content-wrapper[data-v-a181d5f3] {\n  flex: 1;\n  overflow: hidden;\n  /* Layout-Engines brauchen oft absolute Positionierung */\n  position: relative;\n}\n.page-info[data-v-a181d5f3] {\n  background: #f8f9fa;\n  padding: 0.5rem;\n  font-size: 0.9em;\n  color: #6c757d;\n  border-bottom: 1px solid #e0e0e0;\n  flex-shrink: 0;\n}\n.page-content-wrapper[data-v-a181d5f3] {\n  flex: 1;\n  position: relative;\n  min-height: 0; /* Wichtig für Flex-Layout */\n  width: 100%;\n  overflow: auto;\n}\n\n/* Sicherstellen dass Layout-Engines korrekt funktionieren */\n.page-content-wrapper[data-v-a181d5f3] > * {\n  width: 100%;\n  height: 100%;\n}\n\n/* Cleanup: temp-fallback nicht mehr benötigt */\n\n.settings-container[data-v-3e9c7f6e] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 1rem;\n}\n.add-btn[data-v-3e9c7f6e] {\n  width: 150px;\n}\n.input[data-v-3e9c7f6e] {\n  width: 100px;\n}\n.loading[data-v-3e9c7f6e] {\n  height: 100%;\n  padding: 50px;\n  border-radius: 4px;\n  margin-bottom: 1rem;\n  background-color: var(--app-response-background);\n}\n";})();
import { component } from "@eclipse-daanse/tsm";
import { defineComponent, inject, ref, shallowRef, onMounted, onErrorCaptured, createElementBlock, openBlock, createCommentVNode, createElementVNode, toDisplayString, createBlock, resolveDynamicComponent, useModel, provide, computed, createTextVNode, normalizeStyle, normalizeClass, createVNode, resolveComponent, withCtx } from "vue";
import { useRouter, useRoute } from "vue-router";
const { identifier } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.layout.page");
const { identifier: identifier$1 } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.page");
const Icon = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M72.8493%2032.89C69.3438%2031.2286%2065.5539%2030.2648%2061.6902%2030.0469C60.8631%2030.0002%2060.1953%2029.3283%2060.2006%2028.4999L60.2291%2024C60.2344%2023.1716%2060.9105%2022.5011%2061.7381%2022.5395C66.6971%2022.7695%2071.5664%2023.9822%2076.0614%2026.1127C81.0087%2028.4575%2085.3826%2031.8571%2088.8758%2036.0728C92.3689%2040.2885%2094.8967%2045.2179%2096.2814%2050.5147C97.6661%2055.8115%2097.8742%2061.3473%2096.891%2066.7332C95.9079%2072.119%2093.7574%2077.2243%2090.5906%2081.6903C87.4238%2086.1563%2083.3175%2089.8748%2078.5602%2092.5844C73.8029%2095.294%2068.51%2096.9291%2063.0533%2097.3748C58.0955%2097.7797%2053.1118%2097.1939%2048.3913%2095.657C47.6035%2095.4005%2047.2079%2094.5344%2047.4957%2093.7576L49.0588%2089.5378C49.3465%2088.761%2050.2086%2088.3683%2050.9989%2088.6169C54.6904%2089.778%2058.5764%2090.2155%2062.4428%2089.8997C66.8081%2089.5431%2071.0424%2088.2351%2074.8483%2086.0674C78.6541%2083.8997%2081.9392%2080.9249%2084.4726%2077.3521C87.0061%2073.7793%2088.7265%2069.6951%2089.513%2065.3864C90.2995%2061.0777%2090.133%2056.6491%2089.0252%2052.4116C87.9175%2048.1741%2085.8953%2044.2306%2083.1007%2040.8581C80.3062%2037.4856%2076.8071%2034.7658%2072.8493%2032.89Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M54.3529%2029.0093C54.5013%2029.8243%2053.9599%2030.6016%2053.1533%2030.7906C49.8368%2031.5678%2046.6767%2032.9043%2043.8089%2034.7425C43.1115%2035.1895%2042.1766%2035.0366%2041.6953%2034.3624L39.0806%2030.6999C38.5992%2030.0257%2038.754%2029.0862%2039.4469%2028.6322C43.2192%2026.1606%2047.4066%2024.3897%2051.8076%2023.4047C52.616%2023.2238%2053.3979%2023.7671%2053.5464%2024.5822L54.3529%2029.0093Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M36.5688%2038.9443C37.185%2039.498%2037.2324%2040.4441%2036.7101%2041.0872C34.5626%2043.7313%2032.8811%2046.7221%2031.7377%2049.9308C31.4597%2050.7112%2030.6267%2051.1623%2029.8334%2050.9236L25.5243%2049.6269C24.731%2049.3882%2024.2785%2048.5505%2024.5487%2047.7673C26.0199%2043.5042%2028.2481%2039.5412%2031.1261%2036.069C31.6548%2035.4312%2032.6057%2035.3825%2033.2219%2035.9363L36.5688%2038.9443Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M28.5877%2057.6524C29.4138%2057.7142%2030.0295%2058.4341%2030.0091%2059.2623C29.9252%2062.6676%2030.4219%2066.0625%2031.4779%2069.3011C31.7347%2070.0887%2031.3511%2070.9548%2030.5773%2071.2507L26.374%2072.8578C25.6003%2073.1536%2024.7301%2072.767%2024.4654%2071.982C23.0245%2067.7085%2022.3663%2063.2099%2022.5225%2058.7028C22.5512%2057.8748%2023.2741%2057.2552%2024.1002%2057.3169L28.5877%2057.6524Z'%20fill='%23606060'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M33.3378%2076.7775C34.039%2076.3362%2034.962%2076.5494%2035.4377%2077.2276C37.3939%2080.0162%2039.8108%2082.4515%2042.5846%2084.4287C43.2592%2084.9095%2043.4654%2085.8341%2043.0188%2086.5319L40.5933%2090.3222C40.1467%2091.02%2039.2171%2091.2262%2038.5378%2090.7521C34.8394%2088.1713%2031.6367%2084.9443%2029.0839%2081.2265C28.615%2080.5435%2028.8281%2079.6155%2029.5293%2079.1743L33.3378%2076.7775Z'%20fill='%23606060'/%3e%3cpath%20d='M62.7264%2071.7358C62.7256%2071.7369%2062.7253%2071.7382%2062.7255%2071.7394V71.7394V71.7394C62.7257%2071.7407%2062.7254%2071.742%2062.7246%2071.7431L59.2097%2076.6014C58.7241%2077.2726%2057.7863%2077.4231%2057.1152%2076.9375L41.3164%2065.5073C40.6452%2065.0217%2040.4947%2064.084%2040.9803%2063.4128L43.6181%2059.7669C44.1036%2059.0957%2045.0414%2058.9453%2045.7126%2059.4309L55.4326%2066.4631C56.1038%2066.9487%2057.0416%2066.7983%2057.5271%2066.1271L73.3534%2044.2521C73.839%2043.5809%2074.7767%2043.4304%2075.4479%2043.916L79.0938%2046.5537C79.765%2047.0393%2079.9154%2047.9771%2079.4298%2048.6483L62.7264%2071.7358Z'%20fill='%23606060'/%3e%3c/svg%3e";
const _hoisted_1$2 = { class: "page-layout-renderer" };
const _hoisted_2$1 = {
  key: 0,
  class: "loading-state"
};
const _hoisted_3$1 = {
  key: 1,
  class: "error-state"
};
const _hoisted_4$1 = {
  key: 2,
  class: "no-layout-state"
};
const _hoisted_5$1 = { key: 0 };
const _hoisted_6$1 = { key: 1 };
const _hoisted_7 = {
  key: 3,
  class: "layout-engine-container"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PageLayoutRenderer",
  props: {
    pageId: {},
    viewMode: { type: Boolean }
  },
  emits: ["openWidgetSettings", "removeWidget"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const layoutRepo = inject(identifier);
    const pageRepo = inject(identifier$1);
    const currentPage = ref(null);
    const currentLayout = ref(null);
    const ViewComponent = shallowRef(null);
    const isLoading = ref(true);
    const error = ref(null);
    const loadLayout = () => {
      if (props.pageId && pageRepo) {
        const page = pageRepo.getPage(props.pageId);
        currentPage.value = page || null;
        ViewComponent.value = null;
        currentLayout.value = null;
        if (page?.layout && layoutRepo) {
          const layout = layoutRepo.getLayout(page.layout.id);
          currentLayout.value = layout || null;
          if (layout?.component) {
            ViewComponent.value = layout.component;
            console.log(`PageLayoutRenderer: Loaded layout component for page ${props.pageId}`, {
              layoutId: layout.id,
              component: layout.component
            });
          }
        }
      }
    };
    onMounted(async () => {
      try {
        isLoading.value = true;
        error.value = null;
        await new Promise((resolve) => setTimeout(resolve, 50));
        loadLayout();
      } catch (err) {
        error.value = `Fehler beim Laden der Seite ${props.pageId}: ${err}`;
        console.error("PageLayoutRenderer error:", err);
      } finally {
        isLoading.value = false;
      }
    });
    onErrorCaptured((err) => {
      error.value = `Render-Fehler: ${err.message}`;
      console.error("PageLayoutRenderer render error:", err);
      return false;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        isLoading.value ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
          _cache[0] || (_cache[0] = createElementVNode("div", { class: "loading-spinner" }, null, -1)),
          createElementVNode("p", null, "Lade Seite " + toDisplayString(__props.pageId) + "...", 1)
        ])) : error.value ? (openBlock(), createElementBlock("div", _hoisted_3$1, [
          _cache[1] || (_cache[1] = createElementVNode("div", { class: "error-icon" }, "⚠️", -1)),
          createElementVNode("p", null, toDisplayString(error.value), 1)
        ])) : !ViewComponent.value && !error.value ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
          _cache[2] || (_cache[2] = createElementVNode("div", { class: "warning-icon" }, "⚠️", -1)),
          createElementVNode("p", null, "Kein Layout-System für Seite " + toDisplayString(__props.pageId) + " gefunden", 1),
          currentPage.value ? (openBlock(), createElementBlock("small", _hoisted_5$1, "Page: " + toDisplayString(currentPage.value.name), 1)) : createCommentVNode("", true),
          currentLayout.value ? (openBlock(), createElementBlock("small", _hoisted_6$1, "Layout: " + toDisplayString(currentLayout.value.id), 1)) : createCommentVNode("", true)
        ])) : ViewComponent.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
          (openBlock(), createBlock(resolveDynamicComponent(ViewComponent.value), {
            key: currentLayout.value?.id || "view",
            pageId: props.pageId
          }, null, 8, ["pageId"]))
        ])) : createCommentVNode("", true)
      ]);
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
const PageLayoutRenderer = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-49512bd0"]]);
const _hoisted_1$1 = {
  key: 0,
  class: "container"
};
const _hoisted_2 = {
  key: 0,
  class: "recursion-warning"
};
const _hoisted_3 = { class: "recursion-details" };
const _hoisted_4 = {
  key: 1,
  style: { "width": "100%", "height": "100%" }
};
const _hoisted_5 = {
  key: 0,
  class: "page-info"
};
const _hoisted_6 = { class: "page-content-wrapper" };
const maxRecursionDepth = 3;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PageWidget",
  props: {
    "configv": { required: true },
    "configvModifiers": {}
  },
  emits: ["update:configv"],
  setup(__props) {
    const config = useModel(__props, "configv");
    const defaultConfig = {
      path: "/page/abc",
      hideTitle: false
    };
    useRouter();
    const currentRoute = useRoute();
    const parentDepth = inject("pageWidgetDepth", 0);
    const currentDepth = parentDepth + 1;
    provide("pageWidgetDepth", currentDepth);
    const parentPaths = inject("pageWidgetPaths", []);
    const currentPagePath = `/page/${currentRoute.params.pageid}`;
    const currentPaths = [...parentPaths, currentPagePath];
    provide("pageWidgetPaths", currentPaths);
    const isRecursive = computed(() => {
      const targetPath = config.value.path;
      if (!targetPath) return false;
      if (currentDepth > maxRecursionDepth) {
        console.warn(`PageWidget: Max depth ${maxRecursionDepth} reached`, { currentDepth, targetPath });
        return true;
      }
      if (parentPaths.includes(targetPath)) {
        console.warn(`PageWidget: Circular reference detected`, { targetPath, parentPaths });
        return true;
      }
      const targetPageId2 = targetPath.split("/").pop();
      const currentPageId = currentRoute.params.pageid;
      if (targetPageId2 === currentPageId) {
        console.warn(`PageWidget: Self-reference detected`, { targetPageId: targetPageId2, currentPageId });
        return true;
      }
      return false;
    });
    if (!config.value.path) {
      for (const key of Object.keys(defaultConfig)) {
        const defaultVal = defaultConfig[key];
        const currentVal = config.value[key];
        if (currentVal === void 0 || currentVal === null) {
          config.value[key] = defaultVal;
        }
      }
    }
    const targetPageId = computed(() => {
      return config.value.path?.split("/").pop() || "abc";
    });
    return (_ctx, _cache) => {
      return config.value.path ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
        isRecursive.value ? (openBlock(), createElementBlock("div", _hoisted_2, [
          createTextVNode(" ⚠️ Rekursive Seitenverweis verhindert: " + toDisplayString(config.value.path) + " ", 1),
          createElementVNode("div", _hoisted_3, [
            createTextVNode(" Tiefe: " + toDisplayString(currentDepth) + "/" + toDisplayString(maxRecursionDepth)),
            _cache[0] || (_cache[0] = createElementVNode("br", null, null, -1)),
            createTextVNode(" Aufrufkette: " + toDisplayString(currentPaths.join(" → ")) + " → " + toDisplayString(config.value.path), 1)
          ])
        ])) : (openBlock(), createElementBlock("div", _hoisted_4, [
          createElementVNode("div", {
            class: normalizeClass(["page-widget-content", {}]),
            style: normalizeStyle({
              backgroundColor: config.value.backgroundColor || void 0
            })
          }, [
            !config.value.hideTitle ? (openBlock(), createElementBlock("div", _hoisted_5, " 📄 Seite: " + toDisplayString(targetPageId.value), 1)) : createCommentVNode("", true),
            createElementVNode("div", _hoisted_6, [
              createVNode(PageLayoutRenderer, { pageId: targetPageId.value }, null, 8, ["pageId"])
            ])
          ], 4)
        ]))
      ])) : createCommentVNode("", true);
    };
  }
});
const PageWidget = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-a181d5f3"]]);
const _hoisted_1 = { class: "settings-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PageWidgetSettings",
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
    const widgetSettings = useModel(__props, "modelValue");
    const currentRoute = useRoute();
    const pageRegistry = inject(identifier$1);
    const currentPageId = computed(() => currentRoute.params.pageid);
    const availablePages = computed(() => {
      const allPageIds = pageRegistry.getAllPageIds();
      return allPageIds.filter((pageId) => pageId !== currentPageId.value).map((pageId) => {
        const page = pageRegistry.getPage(pageId);
        return {
          value: `/page/${pageId}`,
          text: page?.name || pageId,
          id: pageId
        };
      });
    });
    const isValidSelection = computed(() => {
      if (!widgetSettings.value.path) return true;
      const selectedPageId = widgetSettings.value.path.split("/").pop();
      return selectedPageId !== currentPageId.value;
    });
    return (_ctx, _cache) => {
      const _component_va_select = resolveComponent("va-select");
      const _component_va_alert = resolveComponent("va-alert");
      const _component_va_color_input = resolveComponent("va-color-input");
      const _component_va_input = resolveComponent("va-input");
      const _component_va_collapse = resolveComponent("va-collapse");
      return openBlock(), createBlock(_component_va_collapse, {
        modelValue: opened.value.widgetSection,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => opened.value.widgetSection = $event),
        header: t("page:pageWidget.title"),
        icon: "settings"
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createVNode(_component_va_select, {
              modelValue: widgetSettings.value.path,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => widgetSettings.value.path = $event),
              label: t("page:pageWidget.selectPage"),
              options: availablePages.value,
              "value-by": "value",
              "text-by": "text",
              placeholder: t("page:pageWidget.selectPagePlaceholder"),
              color: isValidSelection.value ? "primary" : "danger"
            }, null, 8, ["modelValue", "label", "options", "placeholder", "color"]),
            !isValidSelection.value ? (openBlock(), createBlock(_component_va_alert, {
              key: 0,
              color: "warning",
              border: false,
              icon: "warning"
            }, {
              default: withCtx(() => [
                createTextVNode(toDisplayString(t("page:pageWidget.selfReferenceWarning")), 1)
              ]),
              _: 1
            })) : createCommentVNode("", true),
            createVNode(_component_va_color_input, {
              modelValue: widgetSettings.value.backgroundColor,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => widgetSettings.value.backgroundColor = $event),
              label: t("page:pageWidget.backgroundColor")
            }, null, 8, ["modelValue", "label"]),
            createVNode(_component_va_collapse, {
              modelValue: opened.value.storeSection,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => opened.value.storeSection = $event),
              header: t("page:pageWidget.manualPath"),
              icon: "edit"
            }, {
              default: withCtx(() => [
                createVNode(_component_va_input, {
                  modelValue: widgetSettings.value.path,
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => widgetSettings.value.path = $event),
                  label: t("page:pageWidget.path"),
                  color: isValidSelection.value ? "primary" : "danger"
                }, null, 8, ["modelValue", "label", "color"])
              ]),
              _: 1
            }, 8, ["modelValue", "header"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "header"]);
    };
  }
});
const PageWidgetSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-3e9c7f6e"]]);
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
};
const WIDGET_SERVICE = "daanse.widget";
const WIDGET_TYPE = "PageWidget";
let PageWidgetProvider = class {
  type = WIDGET_TYPE;
  component = PageWidget;
  settingsComponent = PageWidgetSettings;
  supportedDSTypes = [];
  icon = Icon;
  name = "Page";
};
PageWidgetProvider = __decorateClass([
  component({
    service: [WIDGET_SERVICE],
    properties: { "widget.type": WIDGET_TYPE }
  })
], PageWidgetProvider);
export {
  PageWidgetProvider
};
