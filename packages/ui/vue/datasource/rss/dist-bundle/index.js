(function(){var i="ui.vue.datasource.rss",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="\n.preview-container[data-v-99ea3482] {\n    padding: 8px;\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n}\n.preview-item[data-v-99ea3482] {\n    border: 1px solid #000;\n    border-radius: 8px;\n}\n.preview-item-title[data-v-99ea3482] {\n    background-color: #f0f0f0;\n    font-size: 1.25rem;\n    font-weight: bold;\n    padding: 8px;\n    border-radius: 8px 8px 0 0;\n}\n.preview-item-content[data-v-99ea3482] {\n    padding: 8px;\n}\n";})();
import { DATASOURCE_REPOSITORY } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent, ref, shallowRef, watch, createElementBlock, createCommentVNode, openBlock, Fragment, renderList, createElementVNode, toDisplayString, computed, resolveComponent, createBlock } from "vue";
import { useTemporaryStore } from "org.eclipse.daanse.board.app.ui.vue.composables";
const _hoisted_1 = {
  key: 0,
  class: "preview-container",
  style: { "overflow": "auto", "height": "100%" }
};
const _hoisted_2 = { class: "preview-item" };
const _hoisted_3 = { class: "preview-item-title" };
const _hoisted_4 = ["innerHTML"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(__props) {
    const props = __props;
    const data = ref(null);
    const tempStore = shallowRef(null);
    const settingsRef = ref(props.dataSource);
    const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);
    watch(props.dataSource, () => {
      update();
    }, { deep: true });
    watch(tempStore, async () => {
      data.value = await tempStore.value.getData("object");
    }, { deep: true });
    return (_ctx, _cache) => {
      return tempStore.value && data.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(data.value.items, (item) => {
          return openBlock(), createElementBlock("div", _hoisted_2, [
            createElementVNode("div", _hoisted_3, toDisplayString(item.title), 1),
            createElementVNode("div", {
              innerHTML: item.content,
              class: "preview-item-content"
            }, null, 8, _hoisted_4)
          ]);
        }), 256))
      ])) : createCommentVNode("", true);
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
const Preview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-99ea3482"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(__props) {
    const connectionsFiltered = computed(() => {
      return __props.connections.filter((c) => c.type === "rss");
    });
    return (_ctx, _cache) => {
      const _component_VaSelect = resolveComponent("VaSelect");
      return openBlock(), createBlock(_component_VaSelect, {
        modelValue: __props.config.connection,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.config.connection = $event),
        label: "Connection",
        options: connectionsFiltered.value,
        "text-by": "name",
        "value-by": "uid"
      }, null, 8, ["modelValue", "options"]);
    };
  }
});
const RssDatasourceIdentifier = Symbol.for("RssStoreFactory");
const previewSymbol = Symbol.for("RssPreview");
const settingsSymbol = Symbol.for("RssSettings");
function activate({ services }) {
  services.register("RssPreview", Preview);
  services.register("RssSettings", _sfc_main);
  services.getRequired(DATASOURCE_REPOSITORY).registerDatasourceType("rss", {
    Store: RssDatasourceIdentifier,
    Preview: previewSymbol,
    Settings: settingsSymbol
  });
}
function deactivate({ services }) {
  services.getRequired(DATASOURCE_REPOSITORY).unregisterDatasourceType("rss");
  services.unregister("RssPreview");
  services.unregister("RssSettings");
}
export {
  activate,
  deactivate
};
