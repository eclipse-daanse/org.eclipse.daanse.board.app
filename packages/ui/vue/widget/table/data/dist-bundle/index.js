(function(){var i="ui.vue.widget.table.data",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.filters[data-v-9476d2c4] {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr 1fr;\n    gap: 1rem;\n    padding: 1rem;\n    flex-grow: 0;\n}\n.table_container[data-v-9476d2c4] {\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n}\n.table_container .pagination[data-v-9476d2c4] {\n    flex-grow: 0;\n    padding: 1rem;\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    justify-items: center;\n    align-items: end;\n}\n.table_container .pagination .page_input[data-v-9476d2c4] {\n    justify-self: start;\n}\n.table_container .table[data-v-9476d2c4] {\n    flex-grow: 1;\n    flex-shrink: 1;\n}\n.loading[data-v-9476d2c4] {\n    display: flex;\n    height: 100%;\n}\n\n.settings-container[data-v-50bce613] {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 1rem;\n}\n";})();
const { WidgetAction, WidgetActionInterface, EVENT_ACTIONS_REGISTRY, Payload, EVENT_REGISTRY_ID, EVENT_ACTIONS_REGISTRY_ID } = __tsm__.require("org.eclipse.daanse.board.app.lib.events");
import { activate, deactivate, component, inject as inject$1 } from "@eclipse-daanse/tsm";
import { defineComponent, toRefs, inject, onUnmounted, ref, watch, onMounted, computed, resolveComponent, createElementBlock, openBlock, withModifiers, createVNode, normalizeStyle, unref, useModel, markRaw, createBlock, withCtx, createElementVNode } from "vue";
const { useVariableRepository, useDatasourceRepository, VariableWrapper } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.composables");
import { useRoute } from "vue-router";
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
class DataTableWidgetInterface extends WidgetActionInterface {
  refresh() {
    throw new Error("refresh not implemented");
  }
}
__decorateClass$1([
  WidgetAction({ eventType: "dataTable.refresh" })
], DataTableWidgetInterface.prototype, "refresh");
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DataTableWidget",
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
    class DataTableWidgetApi extends DataTableWidgetInterface {
      refresh() {
        update(datasourceId.value, datasourceId.value);
      }
    }
    const api = new DataTableWidgetApi();
    __expose(api);
    onUnmounted(() => {
      if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value);
    });
    const emitClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:DataTableWidget:click", {
        type: "widget:DataTableWidget:click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const emitRightClick = () => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:DataTableWidget:right_click", {
        type: "widget:DataTableWidget:right_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
      });
    };
    const emitRowClick = (rowId) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:DataTableWidget:row_click", {
        type: "widget:DataTableWidget:row_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), rowId }
      });
    };
    const emitRowRightClick = (rowId) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:DataTableWidget:row_right_click", {
        type: "widget:DataTableWidget:row_right_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), rowId }
      });
    };
    const emitColumnClick = (colId) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:DataTableWidget:col_click", {
        type: "widget:DataTableWidget:col_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), colId }
      });
    };
    const emitColumnRightClick = (colId) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:DataTableWidget:col_right_click", {
        type: "widget:DataTableWidget:col_right_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), colId }
      });
    };
    const emitCellClick = (rowId, colId) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:DataTableWidget:cell_click", {
        type: "widget:DataTableWidget:cell_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), rowId, colId }
      });
    };
    const emitCellRightClick = (rowId, colId) => {
      if (!widgetId?.value) return;
      eventBus.emit("widget:DataTableWidget:cell_right_click", {
        type: "widget:DataTableWidget:cell_right_click",
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now(), rowId, colId }
      });
    };
    const data = ref(null);
    watch(datasourceId, (newVal, oldVal) => {
      update(newVal, oldVal);
    });
    onMounted(() => {
      if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, "DataTableWidget", pageId);
      if (!config.value) return;
      const current = config.value.headerBackground;
      if (current === void 0 || current === null) {
        config.value.headerBackground = new VariableWrapper("#f0f0f0");
      } else if (current instanceof VariableWrapper) ;
      else if (typeof current === "object" && "value" in current) {
        const v = new VariableWrapper(current.value);
        if ("variable" in current) v.variable = current.variable;
        config.value.headerBackground = v;
      } else {
        config.value.headerBackground = new VariableWrapper(current);
      }
    });
    const {
      headerBackground
    } = wrapParameters({
      headerBackground: computed(() => config.value.headerBackground?.value || "#f0f0f0")
    });
    const { update } = useDatasourceRepository(datasourceId, "DataTable", data);
    const onRowClick = (e) => {
      emitRowClick(e.itemIndex?.toString() || "");
    };
    const onRowRightClick = (e) => {
      emitRowRightClick(e.itemIndex?.toString() || "");
    };
    const cellBind = (cell, row, column, rowIndex) => {
      return {
        onClick: (e) => {
          emitCellClick(rowIndex.toString(), column.key || column.name || "");
        },
        onContextmenu: (e) => {
          emitCellRightClick(rowIndex.toString(), column.key || column.name || "");
        }
      };
    };
    const extractColIdFromTh = (th) => {
      const tr = th.parentElement;
      if (!tr) return "";
      const colIndex = Array.prototype.indexOf.call(tr.children, th);
      const keys = data.value?.items?.[0] ? Object.keys(data.value.items[0]) : [];
      if (keys[colIndex]) {
        return keys[colIndex];
      }
      return th.textContent?.trim() || "";
    };
    const onWrapperClick = (e) => {
      const th = e.target.closest("th");
      if (th) {
        emitColumnClick(extractColIdFromTh(th));
      }
    };
    const onWrapperContextMenu = (e) => {
      const th = e.target.closest("th");
      if (th) {
        emitColumnRightClick(extractColIdFromTh(th));
      }
    };
    return (_ctx, _cache) => {
      const _component_va_data_table = resolveComponent("va-data-table");
      return openBlock(), createElementBlock("div", {
        class: "w-full h-full",
        onClick: emitClick,
        onContextmenu: withModifiers(emitRightClick, ["prevent"]),
        onClickCapture: onWrapperClick,
        onContextmenuCapture: onWrapperContextMenu
      }, [
        createVNode(_component_va_data_table, {
          class: "table",
          items: data.value ? data.value.items : [],
          "sticky-header": "",
          style: normalizeStyle(`--va-data-table-thead-background--computed: ${unref(headerBackground)};`),
          "onRow:click": onRowClick,
          "onRow:contextmenu": onRowRightClick,
          "cell-bind": cellBind
        }, null, 8, ["items", "style"])
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
const DataTableWidget = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-9476d2c4"]]);
const _hoisted_1 = { class: "settings-container" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "DataTableWidgetSettings",
  props: {
    "modelValue": { required: true },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const widgetSettings = useModel(__props, "modelValue");
    const opened = ref(false);
    watch(() => widgetSettings.value, (newVal) => {
      if (newVal) {
        if (!(newVal.headerBackground instanceof VariableWrapper)) {
          newVal.headerBackground = markRaw(new VariableWrapper(newVal.headerBackground || ""));
        }
      }
    }, { immediate: true, deep: true });
    return (_ctx, _cache) => {
      const _component_va_color_input = resolveComponent("va-color-input");
      const _component_va_collapse = resolveComponent("va-collapse");
      return openBlock(), createBlock(_component_va_collapse, {
        modelValue: opened.value,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => opened.value = $event),
        header: "Data Table Settings",
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
            }, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
});
const DataTableWidgetSettings = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-50bce613"]]);
const DataTableWidgetEvents = [
  { name: "DataTable Clicked", type: "click", description: "Triggered when the datatable widget is clicked", payloadType: Payload },
  { name: "DataTable Right Clicked", type: "right_click", description: "Triggered when the datatable widget is right-clicked", payloadType: Payload },
  { name: "DataTable Row Clicked", type: "row_click", description: "Triggered when a row is clicked", payloadType: Payload },
  { name: "DataTable Row Right Clicked", type: "row_right_click", description: "Triggered when a row is right-clicked", payloadType: Payload },
  { name: "DataTable Column Clicked", type: "col_click", description: "Triggered when a column header is clicked", payloadType: Payload },
  { name: "DataTable Column Right Clicked", type: "col_right_click", description: "Triggered when a column header is right-clicked", payloadType: Payload },
  { name: "DataTable Cell Clicked", type: "cell_click", description: "Triggered when a cell is clicked", payloadType: Payload },
  { name: "DataTable Cell Right Clicked", type: "cell_right_click", description: "Triggered when a cell is right-clicked", payloadType: Payload }
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
const WIDGET_TYPE = "DataTableWidget";
let DataTableWidgetProvider = class {
  constructor(events, actions) {
    this.events = events;
    this.actions = actions;
  }
  type = WIDGET_TYPE;
  component = DataTableWidget;
  settingsComponent = DataTableWidgetSettings;
  supportedDSTypes = ["csv", "rest"];
  icon = Icon;
  name = "DataTable";
  register() {
    this.events.registerWidget(WIDGET_TYPE, DataTableWidgetEvents);
    this.actions.registerWidgetType(WIDGET_TYPE, DataTableWidgetInterface, "widget");
  }
  unregister() {
    this.events.unregisterWidget(WIDGET_TYPE);
    this.actions.unregisterWidgetType(WIDGET_TYPE);
  }
};
__decorateClass([
  activate()
], DataTableWidgetProvider.prototype, "register", 1);
__decorateClass([
  deactivate()
], DataTableWidgetProvider.prototype, "unregister", 1);
DataTableWidgetProvider = __decorateClass([
  component({
    service: [WIDGET_SERVICE],
    properties: { "widget.type": WIDGET_TYPE }
  }),
  __decorateParam(0, inject$1(EVENT_REGISTRY_ID)),
  __decorateParam(1, inject$1(EVENT_ACTIONS_REGISTRY_ID))
], DataTableWidgetProvider);
export {
  DataTableWidget,
  DataTableWidgetProvider,
  DataTableWidgetSettings
};
