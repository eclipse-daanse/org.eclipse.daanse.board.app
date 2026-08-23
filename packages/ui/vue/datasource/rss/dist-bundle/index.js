(function(){var i="ui.vue.datasource.rss",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".preview-container[data-v-99ea3482]{padding:8px;display:flex;flex-direction:column;gap:8px}.preview-item[data-v-99ea3482]{border:1px solid #000;border-radius:8px}.preview-item-title[data-v-99ea3482]{background-color:#f0f0f0;font-size:1.25rem;font-weight:700;padding:8px;border-radius:8px 8px 0 0}.preview-item-content[data-v-99ea3482]{padding:8px}\n";})();
import { DATASOURCE_REPOSITORY as p } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as m, ref as l, shallowRef as v, watch as u, createElementBlock as i, createCommentVNode as S, openBlock as s, Fragment as g, renderList as _, createElementVNode as d, toDisplayString as f, computed as y, resolveComponent as w, createBlock as R } from "vue";
import { useTemporaryStore as b } from "org.eclipse.daanse.board.app.ui.vue.composables";
const h = {
  key: 0,
  class: "preview-container",
  style: { overflow: "auto", height: "100%" }
}, P = { class: "preview-item" }, T = { class: "preview-item-title" }, V = ["innerHTML"], D = /* @__PURE__ */ m({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const n = e, t = l(null), o = v(null), r = l(n.dataSource), { update: c } = b(n.dataSource.type, r, o);
    return u(n.dataSource, () => {
      c();
    }, { deep: !0 }), u(o, async () => {
      t.value = await o.value.getData("object");
    }, { deep: !0 }), (F, I) => o.value && t.value ? (s(), i("div", h, [
      (s(!0), i(g, null, _(t.value.items, (a) => (s(), i("div", P, [
        d("div", T, f(a.title), 1),
        d("div", {
          innerHTML: a.content,
          class: "preview-item-content"
        }, null, 8, V)
      ]))), 256))
    ])) : S("", !0);
  }
}), k = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of n)
    t[o] = r;
  return t;
}, x = /* @__PURE__ */ k(D, [["__scopeId", "data-v-99ea3482"]]), C = /* @__PURE__ */ m({
  __name: "Settings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(e) {
    const n = y(() => e.connections.filter((t) => t.type === "rss"));
    return (t, o) => {
      const r = w("VaSelect");
      return s(), R(r, {
        modelValue: e.config.connection,
        "onUpdate:modelValue": o[0] || (o[0] = (c) => e.config.connection = c),
        label: "Connection",
        options: n.value,
        "text-by": "name",
        "value-by": "uid"
      }, null, 8, ["modelValue", "options"]);
    };
  }
}), E = Symbol.for("RssStoreFactory"), O = Symbol.for("RssPreview"), B = Symbol.for("RssSettings");
function H({ services: e }) {
  e.register("RssPreview", x), e.register("RssSettings", C), e.getRequired(p).registerDatasourceType("rss", {
    Store: E,
    Preview: O,
    Settings: B
  });
}
function M({ services: e }) {
  e.getRequired(p).unregisterDatasourceType("rss"), e.unregister("RssPreview"), e.unregister("RssSettings");
}
export {
  H as activate,
  M as deactivate
};
