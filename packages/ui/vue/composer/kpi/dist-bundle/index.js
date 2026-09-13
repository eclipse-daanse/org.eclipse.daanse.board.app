import { DATASOURCE_REPOSITORY as s } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as l, ref as n, watch as i, shallowRef as m, createElementBlock as d, createCommentVNode as f, openBlock as p, createVNode as S, unref as c, computed as g, createBlock as y } from "vue";
import { useTemporaryStore as v } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { KpiTable as C } from "org.eclipse.daanse.board.app.ui.vue.common.kpi";
import { DSelect as K } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { KpiComposer as b } from "org.eclipse.daanse.board.app.lib.composer.kpi";
const w = {
  key: 0,
  style: { overflow: "hidden", height: "100%", width: "100%" }
}, D = /* @__PURE__ */ l({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const r = e, o = n(null);
    i(r.dataSource, () => {
      u();
    }, { deep: !0 });
    const t = m(null), a = n(r.dataSource), { update: u } = v(r.dataSource.type, a, t);
    return i(t, async () => {
      console.log("tempStore changed", t.value), o.value = await t.value.getData("DataTable");
    }, { deep: !0 }), (R, k) => t.value && o.value ? (p(), d("div", w, [
      S(c(C), { tableData: o.value }, null, 8, ["tableData"])
    ])) : f("", !0);
  }
}), _ = /* @__PURE__ */ l({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const r = g(() => e.dataSources.filter((o) => b.availableTypes.includes(o.type)));
    return (o, t) => (p(), y(c(K), {
      modelValue: e.config.connectedDatasources,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.config.connectedDatasources = a),
      label: "KPI Sources",
      options: r.value,
      multiple: "",
      "label-key": "name",
      "value-key": "uid"
    }, null, 8, ["modelValue", "options"]));
  }
}), h = Symbol.for("KpiComposer"), T = Symbol.for("KpiComposerPreview"), P = Symbol.for("KpiComposerSettings");
function q({ services: e }) {
  e.register("KpiComposerPreview", D), e.register("KpiComposerSettings", _), e.getRequired(s).registerDatasourceType("KpiComposer", {
    Store: h,
    Preview: T,
    Settings: P
  });
}
function A({ services: e }) {
  e.getRequired(s).unregisterDatasourceType("KpiComposer"), e.unregister("KpiComposerPreview"), e.unregister("KpiComposerSettings");
}
export {
  q as activate,
  A as deactivate
};
