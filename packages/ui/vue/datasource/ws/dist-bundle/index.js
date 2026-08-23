import { DATASOURCE_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent, shallowRef, ref, watch, createElementBlock, createCommentVNode, openBlock, toDisplayString, computed, resolveComponent, Fragment, createVNode } from "vue";
import { useTemporaryStore } from "org.eclipse.daanse.board.app.ui.vue.composables";
const _hoisted_1 = {
  key: 0,
  style: { "overflow": "hidden", "height": "100%" }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(__props) {
    const props = __props;
    const tempStore = shallowRef(null);
    const settingsRef = ref(props.dataSource);
    watch(props.dataSource, () => {
      update();
    }, { deep: true });
    const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);
    const data = ref(null);
    watch(tempStore, async () => {
      console.log("tempStore changed", tempStore.value);
      data.value = await tempStore.value.getData("object");
      tempStore.value.subscribe(async () => {
        const req = await tempStore.value.getData("object");
        data.value = req;
      });
    }, { deep: true });
    return (_ctx, _cache) => {
      return tempStore.value && data.value ? (openBlock(), createElementBlock("div", _hoisted_1, toDisplayString(data.value), 1)) : createCommentVNode("", true);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    config: {},
    connections: {},
    dataSources: {}
  },
  setup(__props) {
    const connectionsFiltered = computed(() => {
      return __props.connections.filter((c) => c.type === "ws" || c.type === "mqtt");
    });
    return (_ctx, _cache) => {
      const _component_VaSelect = resolveComponent("VaSelect");
      const _component_VaSwitch = resolveComponent("VaSwitch");
      const _component_VaInput = resolveComponent("VaInput");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VaSelect, {
          modelValue: __props.config.connection,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.config.connection = $event),
          label: "Connection",
          options: connectionsFiltered.value,
          "text-by": "name",
          "value-by": "uid"
        }, null, 8, ["modelValue", "options"]),
        createVNode(_component_VaSwitch, {
          modelValue: __props.config.accumulate,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => __props.config.accumulate = $event),
          label: "Accumulate messages in array"
        }, null, 8, ["modelValue"]),
        createVNode(_component_VaInput, {
          modelValue: __props.config.topic,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => __props.config.topic = $event),
          label: "Topic"
        }, null, 8, ["modelValue"])
      ], 64);
    };
  }
});
const WSDatasourceIdentifier = Symbol.for("WSStoreFactory");
const previewSymbol = Symbol.for("WsPreview");
const settingsSymbol = Symbol.for("WsSettings");
function activate({ services }) {
  services.register("WsPreview", _sfc_main$1);
  services.register("WsSettings", _sfc_main);
  services.getRequired(DATASOURCE_REPOSITORY).registerDatasourceType("ws", {
    Store: WSDatasourceIdentifier,
    Preview: previewSymbol,
    Settings: settingsSymbol
  });
}
function deactivate({ services }) {
  services.getRequired(DATASOURCE_REPOSITORY).unregisterDatasourceType("ws");
  services.unregister("WsPreview");
  services.unregister("WsSettings");
}
export {
  activate,
  deactivate
};
