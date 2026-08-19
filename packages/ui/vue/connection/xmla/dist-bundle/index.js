const { CONNECTION_REPOSITORY } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.connection");
const { XmlaConnection, factorySymbol } = __tsm__.require("org.eclipse.daanse.board.app.lib.connection.xmla");
const { defineComponent, ref, onMounted, watch, resolveComponent, createElementBlock, openBlock, Fragment, createVNode, createBlock, createCommentVNode } = __tsm__.require("vue");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    config: {}
  },
  setup(__props) {
    const catalogs = ref([]);
    onMounted(async () => {
      if (__props.config.url) {
        await fetchCatalogs();
      }
    });
    const fetchCatalogs = async () => {
      console.log("Fetching catalogs for URL", __props.config.url, "with security", __props.config.security);
      catalogs.value = await XmlaConnection.getCatalogs(__props.config.url, {
        type: __props.config.security,
        user: __props.config.user,
        password: __props.config.password
      });
    };
    watch(async () => __props.config.url, async () => {
      await fetchCatalogs();
    });
    watch(async () => __props.config.security, async () => {
      await fetchCatalogs();
    });
    watch(async () => __props.config.user, async () => {
      await fetchCatalogs();
    });
    watch(async () => __props.config.password, async () => {
      await fetchCatalogs();
    });
    return (_ctx, _cache) => {
      const _component_VaInput = resolveComponent("VaInput");
      const _component_VaSelect = resolveComponent("VaSelect");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VaInput, {
          modelValue: __props.config.url,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.config.url = $event),
          label: "URL"
        }, null, 8, ["modelValue"]),
        createVNode(_component_VaSelect, {
          modelValue: __props.config.catalogName,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => __props.config.catalogName = $event),
          label: "Catalog",
          options: catalogs.value,
          "text-by": "CATALOG_NAME",
          "value-by": "CATALOG_NAME"
        }, null, 8, ["modelValue", "options"]),
        createVNode(_component_VaSelect, {
          modelValue: __props.config.security,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => __props.config.security = $event),
          label: "Security",
          options: ["None", "Basic"]
        }, null, 8, ["modelValue"]),
        __props.config.security === "Basic" ? (openBlock(), createBlock(_component_VaInput, {
          key: 0,
          modelValue: __props.config.user,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => __props.config.user = $event),
          label: "User"
        }, null, 8, ["modelValue"])) : createCommentVNode("", true),
        __props.config.security === "Basic" ? (openBlock(), createBlock(_component_VaInput, {
          key: 1,
          type: "password",
          modelValue: __props.config.password,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => __props.config.password = $event),
          label: "Password"
        }, null, 8, ["modelValue"])) : createCommentVNode("", true)
      ], 64);
    };
  }
});
const settingsSymbol = Symbol.for("XmlaConnectionSettings");
function activate({ services }) {
  services.register("XmlaConnectionSettings", _sfc_main);
  services.getRequired(CONNECTION_REPOSITORY).registerConnectionType("xmla", {
    Connection: factorySymbol,
    Settings: settingsSymbol
  });
}
function deactivate({ services }) {
  services.getRequired(CONNECTION_REPOSITORY).unregisterConnectionType("xmla");
  services.unregister("XmlaConnectionSettings");
}
export {
  activate,
  deactivate
};
