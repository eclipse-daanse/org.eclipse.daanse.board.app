import { DATASOURCE_REPOSITORY as d } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as g, shallowRef as f, ref as s, watch as m, createElementBlock as p, createCommentVNode as y, openBlock as S, toDisplayString as v, computed as V, resolveComponent as u, Fragment as w, createVNode as i } from "vue";
import { useTemporaryStore as b } from "org.eclipse.daanse.board.app.ui.vue.composables";
const W = {
  key: 0,
  style: { overflow: "hidden", height: "100%" }
}, D = /* @__PURE__ */ g({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const l = e, t = f(null), o = s(l.dataSource);
    m(l.dataSource, () => {
      r();
    }, { deep: !0 });
    const { update: r } = b(l.dataSource.type, o, t), n = s(null);
    return m(t, async () => {
      console.log("tempStore changed", t.value), n.value = await t.value.getData("object"), t.value.subscribe(async () => {
        const c = await t.value.getData("object");
        n.value = c;
      });
    }, { deep: !0 }), (c, a) => t.value && n.value ? (S(), p("div", W, v(n.value), 1)) : y("", !0);
  }
}), R = /* @__PURE__ */ g({
  __name: "Settings",
  props: {
    config: {},
    connections: {},
    dataSources: {}
  },
  setup(e) {
    const l = V(() => e.connections.filter((t) => t.type === "ws" || t.type === "mqtt"));
    return (t, o) => {
      const r = u("VaSelect"), n = u("VaSwitch"), c = u("VaInput");
      return S(), p(w, null, [
        i(r, {
          modelValue: e.config.connection,
          "onUpdate:modelValue": o[0] || (o[0] = (a) => e.config.connection = a),
          label: "Connection",
          options: l.value,
          "text-by": "name",
          "value-by": "uid"
        }, null, 8, ["modelValue", "options"]),
        i(n, {
          modelValue: e.config.accumulate,
          "onUpdate:modelValue": o[1] || (o[1] = (a) => e.config.accumulate = a),
          label: "Accumulate messages in array"
        }, null, 8, ["modelValue"]),
        i(c, {
          modelValue: e.config.topic,
          "onUpdate:modelValue": o[2] || (o[2] = (a) => e.config.topic = a),
          label: "Topic"
        }, null, 8, ["modelValue"])
      ], 64);
    };
  }
}), P = Symbol.for("WSStoreFactory"), T = Symbol.for("WsPreview"), h = Symbol.for("WsSettings");
function I({ services: e }) {
  e.register("WsPreview", D), e.register("WsSettings", R), e.getRequired(d).registerDatasourceType("ws", {
    Store: P,
    Preview: T,
    Settings: h
  });
}
function U({ services: e }) {
  e.getRequired(d).unregisterDatasourceType("ws"), e.unregister("WsPreview"), e.unregister("WsSettings");
}
export {
  I as activate,
  U as deactivate
};
