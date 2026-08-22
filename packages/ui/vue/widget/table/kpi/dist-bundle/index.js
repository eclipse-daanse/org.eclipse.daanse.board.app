(function(){var i="ui.vue.widget.table.kpi",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.filters[data-v-c3bbb8e6] {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 1rem;\n    padding: 1rem;\n    flex-grow: 0;\n}\n.table_container[data-v-c3bbb8e6] {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n.table_container .pagination[data-v-c3bbb8e6] {\n    flex-grow: 0;\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;\n    align-items: end;\n}\n.table_container .pagination .page_input[data-v-c3bbb8e6] {\n    justify-self: start;\n}\n.table_container .table[data-v-c3bbb8e6] {\n    flex-grow: 1;\n    flex-shrink: 1;\n}\n.loading[data-v-c3bbb8e6] {\n    display: flex;\n    height: 100%;\n}\n\n.settings-container[data-v-21aafe5f] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 1rem;\n}\n";})();
const { WidgetAction, WidgetActionInterface, EVENT_ACTIONS_REGISTRY, Payload, EVENT_REGISTRY_ID, EVENT_ACTIONS_REGISTRY_ID } = __tsm__.require("org.eclipse.daanse.board.app.lib.events");
import { activate, deactivate, component, inject as inject$1 } from "@eclipse-daanse/tsm";
import { defineComponent, toRefs, inject, onUnmounted, ref, watch, onMounted, computed, provide, createElementBlock, openBlock, withModifiers, createVNode, unref, useModel, markRaw, resolveComponent, createBlock, withCtx, createElementVNode } from "vue";
const { useVariableRepository, useDatasourceRepository, VariableWrapper } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.composables");
import { useRoute } from "vue-router";
const { KpiTable } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.common.kpi");
const { identifiers } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const { VariableInput } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.variable.components");
const Icon = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2025.5C22.5%2023.8431%2023.8431%2022.5%2025.5%2022.5H34.5C36.1569%2022.5%2037.5%2023.8431%2037.5%2025.5V34.5C37.5%2036.1569%2036.1569%2037.5%2034.5%2037.5H25.5C23.8431%2037.5%2022.5%2036.1569%2022.5%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2048C22.5%2046.3431%2023.8431%2045%2025.5%2045H34.5C36.1569%2045%2037.5%2046.3431%2037.5%2048V94.5C37.5%2096.1569%2036.1569%2097.5%2034.5%2097.5H25.5C23.8431%2097.5%2022.5%2096.1569%2022.5%2094.5V48Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2025.5C45%2023.8431%2046.3431%2022.5%2048%2022.5H94.5C96.1569%2022.5%2097.5%2023.8431%2097.5%2025.5V34.5C97.5%2036.1569%2096.1569%2037.5%2094.5%2037.5H48C46.3431%2037.5%2045%2036.1569%2045%2034.5V25.5Z'%20fill='%23606060'/%3e%3cpath%20d='M45%2048C45%2046.3431%2046.3431%2045%2048%2045H94.5C96.1569%2045%2097.5%2046.3431%2097.5%2048V94.5C97.5%2096.1569%2096.1569%2097.5%2094.5%2097.5H48C46.3431%2097.5%2045%2096.1569%2045%2094.5V48Z'%20fill='%23606060'/%3e%3c/svg%3e";
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
class KpiTableWidgetInterface extends WidgetActionInterface {
  refresh() {
    throw new Error("refresh not implemented");
  }
}
__decorateClass$1([
  WidgetAction({ eventType: "kpiTable.refresh" })
], KpiTableWidgetInterface.prototype, "refresh");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "KpiTableWidget",
  props: {
    datasourceId: {},
    config: {},
    id: {}
  },
  setup(__props, { expose: __expose }) {
    const { wrapParameters } = useVariableRepository();
    const props = __props;
    const { datasourceId, config, id: widgetId } = toRefs(props);
    const eventBus = inject(identifiers.TINY_EMITTER);
    const actionsRegistry = inject(EVENT_ACTIONS_REGISTRY);
    const route = useRoute();
    const pageId = route.params.pageid || "";
    class KpiTableWidgetApi extends KpiTableWidgetInterface {
      refresh() {
        update(datasourceId.value, datasourceId.value);
      }
    }
    const api = new KpiTableWidgetApi();
    __expose(api);
    onUnmounted(() => {
      if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value);
    });
    const emitClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:KpiTableWidget:click", {
        type: "widget:KpiTableWidget:click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const emitRightClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:KpiTableWidget:right_click", {
        type: "widget:KpiTableWidget:right_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const data = ref(null);
    watch(datasourceId, (newVal, oldVal) => {
      update(newVal, oldVal);
    });
    onMounted(() => {
      if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, "KpiTableWidget", pageId);
      if (!config.value) return;
      const upgradeFields = {
        headerBackground: "#f0f0f0"
      };
      for (const [key, defaultVal] of Object.entries(upgradeFields)) {
        const current = config.value[key];
        let valToUse = current;
        if (Array.isArray(current)) {
          valToUse = current[0] || defaultVal;
        }
        if (valToUse === void 0 || valToUse === null) {
          config.value[key] = new VariableWrapper(defaultVal);
        } else if (valToUse instanceof VariableWrapper) ;
        else if (typeof valToUse === "object" && "value" in valToUse) {
          const v = new VariableWrapper(valToUse.value);
          if ("variable" in valToUse) v.variable = valToUse.variable;
          config.value[key] = v;
        } else {
          config.value[key] = new VariableWrapper(valToUse);
        }
      }
    });
    const {
      showParentChild,
      showFolders
    } = wrapParameters({
      showParentChild: computed(() => config.value.showParentChild ?? false),
      showFolders: computed(() => config.value.showFolders ?? false)
    });
    const statusVisualType = computed(() => {
      const val = config.value.statusVisualType;
      return Array.isArray(val) ? val[0] || "Badge" : val || "Badge";
    });
    const trendVisualType = computed(() => {
      const val = config.value.trendVisualType;
      return Array.isArray(val) ? val[0] || "Badge" : val || "Badge";
    });
    provide("statusVisualType", statusVisualType);
    provide("trendVisualType", trendVisualType);
    const { update } = useDatasourceRepository(datasourceId, "DataTable", data);
    const parsedTableData = computed(() => {
      if (!data.value) return null;
      let result = data.value;
      if (!(config.value.showFolders ?? false)) {
        result = flattenFolders(result);
      }
      if (!(config.value.showParentChild ?? false)) {
        result = flattenParentChild(result);
      }
      return result;
    });
    function flattenFolders(items) {
      const flattened = [];
      function extractItems(items2) {
        items2.forEach((item) => {
          if (item.type === "Folder") {
            extractItems(item.children || []);
          } else {
            flattened.push(item);
          }
        });
      }
      extractItems(items);
      return flattened;
    }
    function flattenParentChild(items) {
      const flattened = [];
      function extractItems(items2) {
        items2.forEach((item) => {
          if (item.type === "Folder") {
            flattened.push({
              ...item,
              children: item.children ? extractItemsFromChildren(item.children) : []
            });
          } else {
            flattened.push({
              ...item,
              children: []
              // Remove children to flatten hierarchy
            });
            if (item.children && item.children.length > 0) {
              flattened.push(...extractItemsFromChildren(item.children));
            }
          }
        });
      }
      function extractItemsFromChildren(children) {
        const result = [];
        children.forEach((child) => {
          result.push({
            ...child,
            children: []
            // Remove children to flatten hierarchy
          });
          if (child.children && child.children.length > 0) {
            result.push(...extractItemsFromChildren(child.children));
          }
        });
        return result;
      }
      extractItems(items);
      return flattened;
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "w-full h-full",
        onClick: emitClick,
        onContextmenu: withModifiers(emitRightClick, ["prevent"])
      }, [
        createVNode(unref(KpiTable), { tableData: parsedTableData.value }, null, 8, ["tableData"])
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
const KpiTableWidget = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-c3bbb8e6"]]);
const _hoisted_1 = { class: "settings-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "KpiTableWidgetSettings",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const i18n = inject("i18n");
    const t = (key) => i18n ? i18n.t(key) : key;
    const widgetSettings = useModel(__props, "modelValue");
    const trendVisualTypes = ["Emoji", "Arrow", "Chart", "Badge"];
    const statusVisualTypes = ["Emoji", "Lights", "Badge"];
    const opened = ref(false);
    watch(() => widgetSettings.value, (newVal) => {
      if (newVal) {
        if (!(newVal.headerBackground instanceof VariableWrapper)) {
          newVal.headerBackground = markRaw(new VariableWrapper(newVal.headerBackground || "#f0f0f0"));
        }
      }
    }, { immediate: true, deep: true });
    return (_ctx, _cache) => {
      const _component_va_color_input = resolveComponent("va-color-input");
      const _component_va_select = resolveComponent("va-select");
      const _component_va_checkbox = resolveComponent("va-checkbox");
      const _component_va_collapse = resolveComponent("va-collapse");
      return openBlock(), createBlock(_component_va_collapse, {
        modelValue: opened.value,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => opened.value = $event),
        header: "Kpi Table Settings",
        icon: "settings"
      }, {
        default: withCtx(() => [
          createElementVNode("div", _hoisted_1, [
            createVNode(unref(VariableInput), {
              modelValue: widgetSettings.value.headerBackground,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => widgetSettings.value.headerBackground = $event),
              label: "Header Color"
            }, {
              default: withCtx(({ value, change }) => [
                createVNode(_component_va_color_input, {
                  class: "text-color",
                  label: "Header Color",
                  "model-value": value,
                  onInput: change
                }, null, 8, ["model-value", "onInput"])
              ]),
              _: 1
            }, 8, ["modelValue"]),
            createVNode(_component_va_select, {
              modelValue: widgetSettings.value.trendVisualType,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => widgetSettings.value.trendVisualType = $event),
              options: trendVisualTypes,
              placeholder: "Trend Visual Type"
            }, null, 8, ["modelValue"]),
            createVNode(_component_va_select, {
              modelValue: widgetSettings.value.statusVisualType,
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => widgetSettings.value.statusVisualType = $event),
              options: statusVisualTypes,
              placeholder: "Status Visual Type"
            }, null, 8, ["modelValue"]),
            createVNode(_component_va_checkbox, {
              modelValue: widgetSettings.value.showFolders,
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => widgetSettings.value.showFolders = $event),
              label: t("Show Folders")
            }, null, 8, ["modelValue", "label"]),
            createVNode(_component_va_checkbox, {
              modelValue: widgetSettings.value.showParentChild,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => widgetSettings.value.showParentChild = $event),
              label: t("Show Parent-Child")
            }, null, 8, ["modelValue", "label"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const KpiTableWidgetSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-21aafe5f"]]);
const KpiTableWidgetEvents = [
  { name: "KpiTable Clicked", type: "click", description: "Triggered when the kpi table widget is clicked", payloadType: Payload },
  { name: "KpiTable Right Clicked", type: "right_click", description: "Triggered when the kpi table widget is right-clicked", payloadType: Payload }
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
const WIDGET_TYPE = "KpiTableWidget";
let KpiTableWidgetProvider = class {
  constructor(events, actions) {
    this.events = events;
    this.actions = actions;
  }
  type = WIDGET_TYPE;
  component = KpiTableWidget;
  settingsComponent = KpiTableWidgetSettings;
  supportedDSTypes = ["csv", "rest"];
  icon = Icon;
  name = "KpiTable";
  register() {
    this.events.registerWidget(WIDGET_TYPE, KpiTableWidgetEvents);
    this.actions.registerWidgetType(WIDGET_TYPE, KpiTableWidgetInterface, "widget");
  }
  unregister() {
    this.events.unregisterWidget(WIDGET_TYPE);
    this.actions.unregisterWidgetType(WIDGET_TYPE);
  }
};
__decorateClass([
  activate()
], KpiTableWidgetProvider.prototype, "register", 1);
__decorateClass([
  deactivate()
], KpiTableWidgetProvider.prototype, "unregister", 1);
KpiTableWidgetProvider = __decorateClass([
  component({
    service: [WIDGET_SERVICE],
    properties: { "widget.type": WIDGET_TYPE }
  }),
  __decorateParam(0, inject$1(EVENT_REGISTRY_ID)),
  __decorateParam(1, inject$1(EVENT_ACTIONS_REGISTRY_ID))
], KpiTableWidgetProvider);
export {
  KpiTableWidget,
  KpiTableWidgetProvider,
  KpiTableWidgetSettings
};
