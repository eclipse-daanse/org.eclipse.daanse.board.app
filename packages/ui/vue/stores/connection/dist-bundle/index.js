import { CONNECTION_REPOSITORY as d } from "org.eclipse.daanse.board.app.lib.api.connection";
import { ref as p } from "vue";
import { defineStore as f } from "pinia";
let c;
function l(t) {
  c = t;
}
function m() {
  if (!c)
    throw new Error("ConnectionRepository not provided - is the ui.vue.stores.connection module active?");
  return c;
}
const v = f("connections", () => {
  const t = p([
    {
      uid: "test",
      name: "Test Connection 01",
      type: "rest",
      config: {
        url: "https://jsonplaceholder.typicode.com/"
      }
    }
  ]), i = m(), r = (e) => {
    e.config.name = e.name, e.config.type = e.type, e.config.uid = e.uid, i.registerConnection(
      e.uid,
      e.type,
      e.config
    );
  };
  return t.value.forEach(r), { connections: t, createConnection: (e, n = {}) => {
    const o = Math.random().toString(36).substring(7), s = { uid: o, type: e, name: "Connection " + o, config: n };
    return t.value.push(s), r(s), o;
  }, removeConnection: (e) => {
    const n = t.value.findIndex((o) => o.uid === e);
    n > -1 && t.value.splice(n, 1);
  }, updateConnection: (e, n) => {
    const o = t.value.find((s) => s.uid === e);
    o && (o.uid = n.uid, o.type = n.type, o.name = n.name, o.config = n.config, r(o));
  }, updateConnections: (e) => {
    t.value.splice(0), e.forEach((n) => {
      t.value.push(n), r(n);
    });
  } };
});
function a({ services: t }) {
  l(t.getRequired(d));
}
const g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: a,
  useConnectionsStore: v
}, Symbol.toStringTag, { value: "Module" })), u = "org.eclipse.daanse.board.app.ui.vue.stores.connection", C = "0.0.1-next.1";
async function S(t) {
  const i = globalThis.__tsm__;
  if (!i)
    throw new Error(`${u}: tsm runtime is not initialized`);
  i.register(u, g, C, "ui.vue.stores.connection"), await a?.(t);
}
async function w(t) {
  await void 0;
}
export {
  S as activate,
  w as deactivate,
  v as useConnectionsStore
};
