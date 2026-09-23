import { DATASOURCE_REPOSITORY as u } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as m, ref as p, watch as c, shallowRef as g, createElementBlock as S, createCommentVNode as v, openBlock as d, createVNode as K, unref as i, computed as y, createBlock as C } from "vue";
import { useTemporaryStore as _, useTranslation as b } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { KpiTable as w } from "org.eclipse.daanse.board.app.ui.vue.common.kpi";
import { DSelect as D } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { KpiComposer as P } from "org.eclipse.daanse.board.app.lib.composer.kpi";
import { component as T } from "@eclipse-daanse/tsm";
const h = {
  key: 0,
  style: { overflow: "hidden", height: "100%", width: "100%" }
}, R = /* @__PURE__ */ m({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const r = e, n = p(null);
    c(r.dataSource, () => {
      s();
    }, { deep: !0 });
    const o = g(null), t = p(r.dataSource), { update: s } = _(r.dataSource.type, t, o);
    return c(o, async () => {
      console.log("tempStore changed", o.value), n.value = await o.value.getData("DataTable");
    }, { deep: !0 }), (a, U) => o.value && n.value ? (d(), S("div", h, [
      K(i(w), { tableData: n.value }, null, 8, ["tableData"])
    ])) : v("", !0);
  }
}), k = /* @__PURE__ */ m({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const { t: r } = b("composerKpi"), n = y(() => e.dataSources.filter((o) => P.availableTypes.includes(o.type)));
    return (o, t) => (d(), C(i(D), {
      modelValue: e.config.connectedDatasources,
      "onUpdate:modelValue": t[0] || (t[0] = (s) => e.config.connectedDatasources = s),
      label: i(r)("Kpi.sources"),
      options: n.value,
      multiple: "",
      "label-key": "name",
      "value-key": "uid"
    }, null, 8, ["modelValue", "label", "options"]));
  }
}), O = { sources: "KPI-Quellen" }, E = {
  Kpi: O
}, V = { sources: "KPI sources" }, A = {
  Kpi: V
};
var I = Object.getOwnPropertyDescriptor, x = (e, r, n, o) => {
  for (var t = o > 1 ? void 0 : o ? I(r, n) : r, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (t = a(t) || t);
  return t;
};
const f = "composerKpi";
let l = class {
  namespace = f;
  resources = {
    de: E,
    en: A
  };
};
l = x([
  T({
    service: ["Translations"],
    properties: { "i18n.namespace": f }
  })
], l);
const B = Symbol.for("KpiComposer"), N = Symbol.for("KpiComposerPreview"), q = Symbol.for("KpiComposerSettings");
function G({ services: e }) {
  e.register("KpiComposerPreview", R), e.register("KpiComposerSettings", k), e.getRequired(u).registerDatasourceType("KpiComposer", {
    icon: "speed",
    kind: "composer",
    Store: B,
    Preview: N,
    Settings: q
  });
}
function H({ services: e }) {
  e.getRequired(u).unregisterDatasourceType("KpiComposer"), e.unregister("KpiComposerPreview"), e.unregister("KpiComposerSettings");
}
export {
  l as ComposerKpiTranslations,
  G as activate,
  H as deactivate
};
