import { DATASOURCE_REPOSITORY as c } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { ref as p } from "vue";
import { defineStore as f } from "pinia";
let r;
function m(i) {
  r = i;
}
function l() {
  if (!r)
    throw new Error("DatasourceRepository not provided - is the ui.vue.stores.datasouce module active?");
  return r;
}
const g = f("datasource", () => {
  const i = p([
    {
      uid: "test_ds",
      name: "Test DataSource 01",
      type: "rest",
      config: {
        resourceUrl: "posts",
        connection: "test"
      }
    }
  ]), o = l();
  return { dataSources: i, createDataSource: (n, e = {}) => {
    const t = Math.random().toString(36).substring(7), s = "DataSource " + t;
    return e.name = s, e.type = n, e.uid = t, o.registerDatasource(t, n, e), i.value.push({ uid: t, type: n, name: s, config: e }), t;
  }, removeDataSource: (n) => {
    const e = i.value.findIndex((t) => t.uid === n);
    o.removeDatasource(n), e > -1 && i.value.splice(e, 1);
  }, updateDataSource: (n, e) => {
    const t = i.value.find((s) => s.uid === n);
    t && (o.removeDatasource(n), t.uid = e.uid, t.type = e.type, t.name = e.name, t.config = e.config ?? {}, t.config.name = e.name, t.config.type = e.type, t.config.uid = e.uid, o.registerDatasource(n, t.type, t.config), console.log(o));
  }, updateDataSources: (n) => {
    i.value.splice(0), n.forEach((e) => {
      i.value.push(e), e.config || (e.config = {}), e.config.name = e.name, e.config.type = e.type, e.config.uid = e.uid, o.registerDatasource(
        e.uid,
        e.type,
        e.config
      );
    });
  } };
});
function u({ services: i }) {
  m(i.getRequired(c));
}
const v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: u,
  useDataSourcesStore: g
}, Symbol.toStringTag, { value: "Module" })), a = "org.eclipse.daanse.board.app.ui.vue.stores.datasouce", d = "0.0.1-next.1";
async function O(i) {
  const o = globalThis.__tsm__;
  if (!o)
    throw new Error(`${a}: tsm runtime is not initialized`);
  o.register(a, v, d, "ui.vue.stores.datasouce"), await u?.(i);
}
async function T(i) {
  await void 0;
}
export {
  O as activate,
  T as deactivate,
  g as useDataSourcesStore
};
