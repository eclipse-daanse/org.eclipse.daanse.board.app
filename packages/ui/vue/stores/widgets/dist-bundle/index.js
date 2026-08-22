import { ref } from "vue";
import { defineStore } from "pinia";
const useWidgetsStore = (pageid = "") => {
  const storecall = defineStore(`widget-${pageid}`, () => {
    const widgets = ref([]);
    const createWidget = (type, config = {}, wrapperConfig = {}) => {
      const uid = "li_" + Math.random().toString(36).substring(7);
      const widgetName = "widget_" + uid;
      widgets.value.push({
        uid,
        type,
        wrapperConfig,
        config: {
          datasourceId: config.datasourceId,
          settings: { name: widgetName }
        }
      });
      return uid;
    };
    const removeWidget = (widgetId) => {
      const index = widgets.value.findIndex((v) => v.uid === widgetId);
      if (index > -1) {
        widgets.value.splice(index, 1);
      }
    };
    const updateWidget = (widgetId, widgetProxy) => {
      const widget = widgets.value.find((c) => c.uid === widgetId);
      if (!widget) return;
      widget.uid = widgetProxy.uid;
      widget.type = widgetProxy.type;
      widget.wrapperConfig = widgetProxy.wrapperConfig;
      widget.config = widgetProxy.config;
    };
    const updateWidgets = (widgetsProxy) => {
      widgets.value.splice(0);
      widgetsProxy.forEach((widgetProxy) => {
        widgets.value.push(widgetProxy);
      });
    };
    return { widgets, createWidget, removeWidget, updateWidget, updateWidgets };
  });
  return storecall();
};
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useWidgetsStore
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.stores.widgets";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.stores.widgets");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  activate,
  deactivate,
  useWidgetsStore
};
