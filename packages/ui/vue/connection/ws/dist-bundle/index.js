const { CONNECTION_REPOSITORY } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.connection");
import { defineComponent, resolveComponent, createBlock, openBlock } from "vue";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    config: {}
  },
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_VaInput = resolveComponent("VaInput");
      return openBlock(), createBlock(_component_VaInput, {
        modelValue: __props.config.url,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.config.url = $event),
        label: "URL"
      }, null, 8, ["modelValue"]);
    };
  }
});
const WSConnectionIdentifier = Symbol.for("WSConnectionFactory");
const settingsSymbol = Symbol.for("WsConnectionSettings");
function activate({ services }) {
  services.register("WsConnectionSettings", _sfc_main);
  services.getRequired(CONNECTION_REPOSITORY).registerConnectionType("ws", {
    Connection: WSConnectionIdentifier,
    Settings: settingsSymbol
  });
}
function deactivate({ services }) {
  services.getRequired(CONNECTION_REPOSITORY).unregisterConnectionType("ws");
  services.unregister("WsConnectionSettings");
}
export {
  activate,
  deactivate
};
