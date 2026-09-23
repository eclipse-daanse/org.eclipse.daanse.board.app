(function(){var i="ui.vue.datasource.kpi",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".add_kpi[data-v-869dc0ea]{display:flex;flex-direction:row;gap:10px;margin-bottom:10px;align-items:end}.added_kpis[data-v-869dc0ea]{display:flex;flex-direction:row;gap:10px;margin-bottom:10px;align-items:center}\n";})();
import { DATASOURCE_REPOSITORY as S } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as b, shallowRef as D, ref as l, computed as u, watch as d, createElementBlock as y, createCommentVNode as k, openBlock as w, createElementVNode as C, createVNode as f, unref as r, inject as T, onMounted as E, Fragment as V } from "vue";
import { useTemporaryStore as h, useTranslation as I } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { KpiTable as O } from "org.eclipse.daanse.board.app.ui.vue.common.kpi";
import { DSelect as p } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { XmlaStore as g } from "org.eclipse.daanse.board.app.lib.datasource.xmla";
import { identifier as R } from "org.eclipse.daanse.board.app.lib.api.connection";
import { component as x } from "@eclipse-daanse/tsm";
const U = {
  key: 0,
  style: { overflow: "hidden", height: "100%", width: "100%" },
  class: "flex flex-col gap-4"
}, _ = { class: "h-full" }, A = /* @__PURE__ */ b({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const o = e, n = D(null), t = l(o.dataSource), { update: i } = h(o.dataSource.type, t, n);
    u(() => t.value.config.kpis ? c.value.items.filter((s) => t.value.config.kpis.includes(s.name)) : []), d(() => o.dataSource.config, () => {
      i();
    }, { deep: !0 });
    const c = l(null), a = u({
      get: () => t.value.config.kpis || [],
      set: (s) => {
        t.value.config.kpis = s, console.log("Updated selected KPIs:", s);
      }
    });
    return d(n, async () => {
      c.value = await n.value.getOriginalData("DataTable");
    }, { deep: !0 }), (s, m) => n.value ? (w(), y("div", U, [
      C("div", _, [
        f(r(O), {
          tableData: c.value,
          selectedItems: a.value,
          "onUpdate:selectedItems": m[0] || (m[0] = (P) => a.value = P),
          "show-selection": !0
        }, null, 8, ["tableData", "selectedItems"])
      ])
    ])) : k("", !0);
  }
}), N = (e, o) => {
  const n = e.__vccOpts || e;
  for (const [t, i] of o)
    n[t] = i;
  return n;
}, B = /* @__PURE__ */ N(A, [["__scopeId", "data-v-869dc0ea"]]), M = /* @__PURE__ */ b({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const o = T(R), { t: n } = I("datasourceKpi"), t = l([]), i = u(() => e.connections.filter((c) => c.type === "xmla"));
    return d(async () => e.config.connection, async () => {
      e.config.connection && (t.value = await g.fetchCubes(e.config.connection, o));
    }), E(async () => {
      e.config.connection && (t.value = await g.fetchCubes(e.config.connection, o));
    }), (c, a) => (w(), y(V, null, [
      f(r(p), {
        modelValue: e.config.connection,
        "onUpdate:modelValue": a[0] || (a[0] = (s) => e.config.connection = s),
        label: r(n)("Settings.connection"),
        options: i.value,
        "label-key": "name",
        "value-key": "uid"
      }, null, 8, ["modelValue", "label", "options"]),
      f(r(p), {
        modelValue: e.config.cube,
        "onUpdate:modelValue": a[1] || (a[1] = (s) => e.config.cube = s),
        label: r(n)("Settings.cube"),
        options: t.value,
        "label-key": "CUBE_NAME",
        "value-key": "CUBE_NAME"
      }, null, 8, ["modelValue", "label", "options"])
    ], 64));
  }
}), F = { connection: "Verbindung", cube: "Würfel" }, j = {
  Settings: F
}, q = { connection: "Connection", cube: "Cube" }, $ = {
  Settings: q
};
var W = Object.getOwnPropertyDescriptor, X = (e, o, n, t) => {
  for (var i = t > 1 ? void 0 : t ? W(o, n) : o, c = e.length - 1, a; c >= 0; c--)
    (a = e[c]) && (i = a(i) || i);
  return i;
};
const K = "datasourceKpi";
let v = class {
  namespace = K;
  resources = {
    de: j,
    en: $
  };
};
v = X([
  x({
    service: ["Translations"],
    properties: { "i18n.namespace": K }
  })
], v);
const Y = Symbol.for("KpiStoreFactory"), z = Symbol.for("KpiPreview"), G = Symbol.for("KpiSettings");
function oe({ services: e }) {
  e.register("KpiPreview", B), e.register("KpiSettings", M), e.getRequired(S).registerDatasourceType("KPI", {
    icon: "speed",
    Store: Y,
    Preview: z,
    Settings: G
  });
}
function ie({ services: e }) {
  e.getRequired(S).unregisterDatasourceType("KPI"), e.unregister("KpiPreview"), e.unregister("KpiSettings");
}
export {
  v as DatasourceKpiTranslations,
  oe as activate,
  ie as deactivate
};
