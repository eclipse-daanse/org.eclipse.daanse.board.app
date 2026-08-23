import { DATASOURCE_REPOSITORY as c } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as p, ref as i, watch as s, shallowRef as u, createElementBlock as m, createCommentVNode as d, openBlock as l, createVNode as S, unref as f, computed as g, resolveComponent as v, createBlock as y } from "vue";
import { useTemporaryStore as C } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { KpiTable as b } from "org.eclipse.daanse.board.app.ui.vue.common.kpi";
import { KpiComposer as K } from "org.eclipse.daanse.board.app.lib.composer.kpi";
const w = {
  key: 0,
  style: { overflow: "hidden", height: "100%", width: "100%" }
}, _ = /* @__PURE__ */ p({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const r = e, o = i(null);
    s(r.dataSource, () => {
      n();
    }, { deep: !0 });
    const t = u(null), a = i(r.dataSource), { update: n } = C(r.dataSource.type, a, t);
    return s(t, async () => {
      console.log("tempStore changed", t.value), o.value = await t.value.getData("DataTable");
    }, { deep: !0 }), (R, V) => t.value && o.value ? (l(), m("div", w, [
      S(f(b), { tableData: o.value }, null, 8, ["tableData"])
    ])) : d("", !0);
  }
}), D = /* @__PURE__ */ p({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const r = g(() => e.dataSources.filter((o) => K.availableTypes.includes(o.type)));
    return (o, t) => {
      const a = v("VaSelect");
      return l(), y(a, {
        modelValue: e.config.connectedDatasources,
        "onUpdate:modelValue": t[0] || (t[0] = (n) => e.config.connectedDatasources = n),
        label: "KPI Sources",
        options: r.value,
        multiple: "",
        "text-by": "name",
        "value-by": "uid"
      }, null, 8, ["modelValue", "options"]);
    };
  }
}), h = Symbol.for("KpiComposer"), T = Symbol.for("KpiComposerPreview"), P = Symbol.for("KpiComposerSettings");
function O({ services: e }) {
  e.register("KpiComposerPreview", _), e.register("KpiComposerSettings", D), e.getRequired(c).registerDatasourceType("KpiComposer", {
    Store: h,
    Preview: T,
    Settings: P
  });
}
function q({ services: e }) {
  e.getRequired(c).unregisterDatasourceType("KpiComposer"), e.unregister("KpiComposerPreview"), e.unregister("KpiComposerSettings");
}
export {
  O as activate,
  q as deactivate
};
