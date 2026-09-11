import { DATASOURCE_REPOSITORY as f } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref as p } from "vue";
import { defineStore as d } from "pinia";
let a;
function m(t) {
  a = t;
}
function l() {
  if (!a)
    throw new Error("DatasourceRepository not provided - is the ui.vue.stores.datasouce module active?");
  return a;
}
const v = d("datasource", () => {
  const t = p([
    {
      uid: "test_ds",
      name: "Test DataSource 01",
      type: "rest",
      config: {
        resourceUrl: "posts",
        connection: "test"
      }
    }
  ]), n = l(), r = (e) => {
    e.config || (e.config = {}), e.config.name = e.name, e.config.type = e.type, e.config.uid = e.uid, n.registerDatasource(
      e.uid,
      e.type,
      e.config
    );
  };
  return t.value.forEach(r), { dataSources: t, createDataSource: (e, o = {}) => {
    const i = Math.random().toString(36).substring(7), s = { uid: i, type: e, name: "DataSource " + i, config: o };
    return t.value.push(s), r(s), i;
  }, removeDataSource: (e) => {
    const o = t.value.findIndex((i) => i.uid === e);
    n.removeDatasource(e), o > -1 && t.value.splice(o, 1);
  }, updateDataSource: (e, o) => {
    const i = t.value.find((s) => s.uid === e);
    i && (n.removeDatasource(e), i.uid = o.uid, i.type = o.type, i.name = o.name, i.config = o.config ?? {}, r(i));
  }, updateDataSources: (e) => {
    t.value.splice(0), e.forEach((o) => {
      t.value.push(o), r(o);
    });
  } };
});
function u({ services: t }) {
  m(t.getRequired(f));
}
const g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: u,
  useDataSourcesStore: v
}, Symbol.toStringTag, { value: "Module" })), c = "org.eclipse.daanse.board.app.ui.vue.stores.datasouce", D = "0.0.1-next.1";
async function O(t) {
  const n = globalThis.__tsm__;
  if (!n)
    throw new Error(`${c}: tsm runtime is not initialized`);
  n.register(c, g, D, "ui.vue.stores.datasouce"), await u?.(t);
}
async function S(t) {
  await void 0;
}
export {
  O as activate,
  S as deactivate,
  v as useDataSourcesStore
};
