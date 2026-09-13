import { DATASOURCE_REPOSITORY as m } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as d, shallowRef as f, ref as c, watch as s, createElementBlock as g, createCommentVNode as p, openBlock as S, toDisplayString as y, computed as v, Fragment as w, createVNode as r, unref as u } from "vue";
import { useTemporaryStore as b } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DSelect as V, DSwitch as D, DInput as W } from "org.eclipse.daanse.board.app.ui.vue.controls";
const h = {
  key: 0,
  style: { overflow: "hidden", height: "100%" }
}, R = /* @__PURE__ */ d({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const a = e, t = f(null), o = c(a.dataSource);
    s(a.dataSource, () => {
      n();
    }, { deep: !0 });
    const { update: n } = b(a.dataSource.type, o, t), l = c(null);
    return s(t, async () => {
      console.log("tempStore changed", t.value), l.value = await t.value.getData("object"), t.value.subscribe(async () => {
        const i = await t.value.getData("object");
        l.value = i;
      });
    }, { deep: !0 }), (i, U) => t.value && l.value ? (S(), g("div", h, y(l.value), 1)) : p("", !0);
  }
}), P = /* @__PURE__ */ d({
  __name: "Settings",
  props: {
    config: {},
    connections: {},
    dataSources: {}
  },
  setup(e) {
    const a = v(() => e.connections.filter((t) => t.type === "ws" || t.type === "mqtt"));
    return (t, o) => (S(), g(w, null, [
      r(u(V), {
        modelValue: e.config.connection,
        "onUpdate:modelValue": o[0] || (o[0] = (n) => e.config.connection = n),
        label: "Verbindung",
        options: a.value,
        "label-key": "name",
        "value-key": "uid"
      }, null, 8, ["modelValue", "options"]),
      r(u(D), {
        modelValue: e.config.accumulate,
        "onUpdate:modelValue": o[1] || (o[1] = (n) => e.config.accumulate = n),
        label: "Nachrichten sammeln"
      }, null, 8, ["modelValue"]),
      r(u(W), {
        modelValue: e.config.topic,
        "onUpdate:modelValue": o[2] || (o[2] = (n) => e.config.topic = n),
        label: "Thema"
      }, null, 8, ["modelValue"])
    ], 64));
  }
}), T = Symbol.for("WSStoreFactory"), k = Symbol.for("WsPreview"), q = Symbol.for("WsSettings");
function I({ services: e }) {
  e.register("WsPreview", R), e.register("WsSettings", P), e.getRequired(m).registerDatasourceType("ws", {
    Store: T,
    Preview: k,
    Settings: q
  });
}
function N({ services: e }) {
  e.getRequired(m).unregisterDatasourceType("ws"), e.unregister("WsPreview"), e.unregister("WsSettings");
}
export {
  I as activate,
  N as deactivate
};
