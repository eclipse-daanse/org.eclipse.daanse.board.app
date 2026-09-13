import { DATASOURCE_REPOSITORY as p } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as f, ref as i, watch as s, shallowRef as b, createElementBlock as g, createCommentVNode as y, openBlock as S, createVNode as u, unref as c, inject as D, computed as v, Fragment as w } from "vue";
import { DTable as T, DSelect as m } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useTemporaryStore as R } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DataTableComposer as d } from "org.eclipse.daanse.board.app.lib.composer.datatable";
import { identifier as V } from "org.eclipse.daanse.board.app.lib.repository.datasource";
const h = {
  key: 0,
  style: { overflow: "hidden", height: "100%", width: "100%" }
}, C = /* @__PURE__ */ f({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const n = e, l = i(null);
    s(n.dataSource, () => {
      o();
    }, { deep: !0 });
    const t = b(null), a = i(n.dataSource), { update: o } = R(n.dataSource.type, a, t);
    return s(t, async () => {
      console.log("tempStore changed", t.value), l.value = await t.value.getData("DataTable");
    }, { deep: !0 }), (r, x) => t.value && l.value ? (S(), g("div", h, [
      u(c(T), {
        items: l.value.items
      }, null, 8, ["items"])
    ])) : y("", !0);
  }
}), P = /* @__PURE__ */ f({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const n = D(V), l = v(() => e.dataSources.filter((a) => d.availableTypes.includes(a.type))), t = i([]);
    return s(() => e.config.connectedDatasources, async (a) => {
      console.log("newValue", a), t.value = await d.getHeaders(
        a,
        n
      );
    }), (a, o) => (S(), g(w, null, [
      u(c(m), {
        modelValue: e.config.connectedDatasources,
        "onUpdate:modelValue": o[0] || (o[0] = (r) => e.config.connectedDatasources = r),
        label: "Quellen",
        options: l.value,
        multiple: "",
        "label-key": "name",
        "value-key": "uid"
      }, null, 8, ["modelValue", "options"]),
      u(c(m), {
        modelValue: e.config.composeBy,
        "onUpdate:modelValue": o[1] || (o[1] = (r) => e.config.composeBy = r),
        label: "Zusammensetzen nach",
        options: t.value
      }, null, 8, ["modelValue", "options"])
    ], 64));
  }
}), k = Symbol.for("DataTableComposer"), B = Symbol.for("DatatablePreview"), O = Symbol.for("DatatableSettings");
function N({ services: e }) {
  e.register("DatatablePreview", C), e.register("DatatableSettings", P), e.getRequired(p).registerDatasourceType("datatable", {
    Store: k,
    Preview: B,
    Settings: O
  });
}
function j({ services: e }) {
  e.getRequired(p).unregisterDatasourceType("datatable"), e.unregister("DatatablePreview"), e.unregister("DatatableSettings");
}
export {
  N as activate,
  j as deactivate
};
