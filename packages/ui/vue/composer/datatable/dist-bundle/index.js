import { DATASOURCE_REPOSITORY as d } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as p, ref as i, watch as c, shallowRef as y, resolveComponent as g, createElementBlock as f, createCommentVNode as D, openBlock as S, createVNode as u, inject as v, computed as w, Fragment as V } from "vue";
import { useTemporaryStore as T } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { DataTableComposer as m } from "org.eclipse.daanse.board.app.lib.composer.datatable";
import { identifier as h } from "org.eclipse.daanse.board.app.lib.repository.datasource";
const C = {
  key: 0,
  style: { overflow: "hidden", height: "100%", width: "100%" }
}, R = /* @__PURE__ */ p({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const n = e, l = i(null);
    c(n.dataSource, () => {
      a();
    }, { deep: !0 });
    const t = y(null), o = i(n.dataSource), { update: a } = T(n.dataSource.type, o, t);
    return c(t, async () => {
      console.log("tempStore changed", t.value), l.value = await t.value.getData("DataTable");
    }, { deep: !0 }), (s, r) => {
      const b = g("VaDataTable");
      return t.value && l.value ? (S(), f("div", C, [
        u(b, {
          items: l.value.items,
          stickyHeader: !0,
          style: { height: "100%" }
        }, null, 8, ["items"])
      ])) : D("", !0);
    };
  }
}), B = /* @__PURE__ */ p({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const n = v(h), l = w(() => e.dataSources.filter((o) => m.availableTypes.includes(o.type))), t = i([]);
    return c(() => e.config.connectedDatasources, async (o) => {
      console.log("newValue", o), t.value = await m.getHeaders(
        o,
        n
      );
    }), (o, a) => {
      const s = g("VaSelect");
      return S(), f(V, null, [
        u(s, {
          modelValue: e.config.connectedDatasources,
          "onUpdate:modelValue": a[0] || (a[0] = (r) => e.config.connectedDatasources = r),
          label: "Sources",
          options: l.value,
          multiple: "",
          "text-by": "name",
          "value-by": "uid"
        }, null, 8, ["modelValue", "options"]),
        u(s, {
          modelValue: e.config.composeBy,
          "onUpdate:modelValue": a[1] || (a[1] = (r) => e.config.composeBy = r),
          label: "Compose By",
          options: t.value
        }, null, 8, ["modelValue", "options"])
      ], 64);
    };
  }
}), P = Symbol.for("DataTableComposer"), _ = Symbol.for("DatatablePreview"), k = Symbol.for("DatatableSettings");
function A({ services: e }) {
  e.register("DatatablePreview", R), e.register("DatatableSettings", B), e.getRequired(d).registerDatasourceType("datatable", {
    Store: P,
    Preview: _,
    Settings: k
  });
}
function F({ services: e }) {
  e.getRequired(d).unregisterDatasourceType("datatable"), e.unregister("DatatablePreview"), e.unregister("DatatableSettings");
}
export {
  A as activate,
  F as deactivate
};
