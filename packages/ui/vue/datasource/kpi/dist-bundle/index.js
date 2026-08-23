(function(){var i="ui.vue.datasource.kpi",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".add_kpi[data-v-869dc0ea]{display:flex;flex-direction:row;gap:10px;margin-bottom:10px;align-items:end}.added_kpis[data-v-869dc0ea]{display:flex;flex-direction:row;gap:10px;margin-bottom:10px;align-items:center}\n";})();
import { DATASOURCE_REPOSITORY as p } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as g, shallowRef as b, ref as r, computed as s, watch as u, createElementBlock as v, createCommentVNode as w, openBlock as S, createElementVNode as K, createVNode as d, unref as V, inject as C, onMounted as P, resolveComponent as x, Fragment as I } from "vue";
import { useTemporaryStore as h } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { KpiTable as k } from "org.eclipse.daanse.board.app.ui.vue.common.kpi";
import { XmlaStore as m } from "org.eclipse.daanse.board.app.lib.datasource.xmla";
import { identifier as D } from "org.eclipse.daanse.board.app.lib.api.connection";
const E = {
  key: 0,
  style: { overflow: "hidden", height: "100%", width: "100%" },
  class: "flex flex-col gap-4"
}, R = { class: "h-full" }, T = /* @__PURE__ */ g({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const i = e, t = b(null), o = r(i.dataSource), { update: a } = h(i.dataSource.type, o, t);
    s(() => o.value.config.kpis ? c.value.items.filter((n) => o.value.config.kpis.includes(n.name)) : []), u(() => i.dataSource.config, () => {
      a();
    }, { deep: !0 });
    const c = r(null), l = s({
      get: () => o.value.config.kpis || [],
      set: (n) => {
        o.value.config.kpis = n, console.log("Updated selected KPIs:", n);
      }
    });
    return u(t, async () => {
      c.value = await t.value.getOriginalData("DataTable");
    }, { deep: !0 }), (n, f) => t.value ? (S(), v("div", E, [
      K("div", R, [
        d(V(k), {
          tableData: c.value,
          selectedItems: l.value,
          "onUpdate:selectedItems": f[0] || (f[0] = (y) => l.value = y),
          "show-selection": !0
        }, null, 8, ["tableData", "selectedItems"])
      ])
    ])) : w("", !0);
  }
}), U = (e, i) => {
  const t = e.__vccOpts || e;
  for (const [o, a] of i)
    t[o] = a;
  return t;
}, N = /* @__PURE__ */ U(T, [["__scopeId", "data-v-869dc0ea"]]), O = /* @__PURE__ */ g({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const i = C(D), t = r([]), o = s(() => e.connections.filter((a) => a.type === "xmla"));
    return u(async () => e.config.connection, async () => {
      e.config.connection && (t.value = await m.fetchCubes(e.config.connection, i));
    }), P(async () => {
      e.config.connection && (t.value = await m.fetchCubes(e.config.connection, i));
    }), (a, c) => {
      const l = x("VaSelect");
      return S(), v(I, null, [
        d(l, {
          modelValue: e.config.connection,
          "onUpdate:modelValue": c[0] || (c[0] = (n) => e.config.connection = n),
          label: "Connection",
          options: o.value,
          "text-by": "name",
          "value-by": "uid"
        }, null, 8, ["modelValue", "options"]),
        d(l, {
          modelValue: e.config.cube,
          "onUpdate:modelValue": c[1] || (c[1] = (n) => e.config.cube = n),
          label: "Cube",
          options: t.value,
          "text-by": "CUBE_NAME",
          "value-by": "CUBE_NAME"
        }, null, 8, ["modelValue", "options"])
      ], 64);
    };
  }
}), A = Symbol.for("KpiStoreFactory"), B = Symbol.for("KpiPreview"), F = Symbol.for("KpiSettings");
function $({ services: e }) {
  e.register("KpiPreview", N), e.register("KpiSettings", O), e.getRequired(p).registerDatasourceType("KPI", {
    Store: A,
    Preview: B,
    Settings: F
  });
}
function z({ services: e }) {
  e.getRequired(p).unregisterDatasourceType("KPI"), e.unregister("KpiPreview"), e.unregister("KpiSettings");
}
export {
  $ as activate,
  z as deactivate
};
