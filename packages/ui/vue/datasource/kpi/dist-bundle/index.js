(function(){var i="ui.vue.datasource.kpi",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".add_kpi[data-v-869dc0ea]{display:flex;flex-direction:row;gap:10px;margin-bottom:10px;align-items:end}.added_kpis[data-v-869dc0ea]{display:flex;flex-direction:row;gap:10px;margin-bottom:10px;align-items:center}\n";})();
import { DATASOURCE_REPOSITORY as v } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as y, shallowRef as K, ref as r, computed as s, watch as u, createElementBlock as S, createCommentVNode as k, openBlock as b, createElementVNode as P, createVNode as d, unref as f, inject as V, onMounted as D, Fragment as I } from "vue";
import { useTemporaryStore as h } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { KpiTable as E } from "org.eclipse.daanse.board.app.ui.vue.common.kpi";
import { DSelect as g } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { XmlaStore as p } from "org.eclipse.daanse.board.app.lib.datasource.xmla";
import { identifier as R } from "org.eclipse.daanse.board.app.lib.api.connection";
const T = {
  key: 0,
  style: { overflow: "hidden", height: "100%", width: "100%" },
  class: "flex flex-col gap-4"
}, x = { class: "h-full" }, C = /* @__PURE__ */ y({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const n = e, t = K(null), o = r(n.dataSource), { update: a } = h(n.dataSource.type, o, t);
    s(() => o.value.config.kpis ? i.value.items.filter((l) => o.value.config.kpis.includes(l.name)) : []), u(() => n.dataSource.config, () => {
      a();
    }, { deep: !0 });
    const i = r(null), c = s({
      get: () => o.value.config.kpis || [],
      set: (l) => {
        o.value.config.kpis = l, console.log("Updated selected KPIs:", l);
      }
    });
    return u(t, async () => {
      i.value = await t.value.getOriginalData("DataTable");
    }, { deep: !0 }), (l, m) => t.value ? (b(), S("div", T, [
      P("div", x, [
        d(f(E), {
          tableData: i.value,
          selectedItems: c.value,
          "onUpdate:selectedItems": m[0] || (m[0] = (w) => c.value = w),
          "show-selection": !0
        }, null, 8, ["tableData", "selectedItems"])
      ])
    ])) : k("", !0);
  }
}), U = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, a] of n)
    t[o] = a;
  return t;
}, N = /* @__PURE__ */ U(C, [["__scopeId", "data-v-869dc0ea"]]), O = /* @__PURE__ */ y({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const n = V(R), t = r([]), o = s(() => e.connections.filter((a) => a.type === "xmla"));
    return u(async () => e.config.connection, async () => {
      e.config.connection && (t.value = await p.fetchCubes(e.config.connection, n));
    }), D(async () => {
      e.config.connection && (t.value = await p.fetchCubes(e.config.connection, n));
    }), (a, i) => (b(), S(I, null, [
      d(f(g), {
        modelValue: e.config.connection,
        "onUpdate:modelValue": i[0] || (i[0] = (c) => e.config.connection = c),
        label: "Verbindung",
        options: o.value,
        "label-key": "name",
        "value-key": "uid"
      }, null, 8, ["modelValue", "options"]),
      d(f(g), {
        modelValue: e.config.cube,
        "onUpdate:modelValue": i[1] || (i[1] = (c) => e.config.cube = c),
        label: "Würfel",
        options: t.value,
        "label-key": "CUBE_NAME",
        "value-key": "CUBE_NAME"
      }, null, 8, ["modelValue", "options"])
    ], 64));
  }
}), A = Symbol.for("KpiStoreFactory"), B = Symbol.for("KpiPreview"), F = Symbol.for("KpiSettings");
function $({ services: e }) {
  e.register("KpiPreview", N), e.register("KpiSettings", O), e.getRequired(v).registerDatasourceType("KPI", {
    Store: A,
    Preview: B,
    Settings: F
  });
}
function z({ services: e }) {
  e.getRequired(v).unregisterDatasourceType("KPI"), e.unregister("KpiPreview"), e.unregister("KpiSettings");
}
export {
  $ as activate,
  z as deactivate
};
