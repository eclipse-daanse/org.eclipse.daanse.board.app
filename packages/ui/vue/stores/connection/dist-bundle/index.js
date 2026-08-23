import { CONNECTION_REPOSITORY as c } from "org.eclipse.daanse.board.app.lib.api.connection";
import { ref as d } from "vue";
import { defineStore as p } from "pinia";
let r;
function f(n) {
  r = n;
}
function l() {
  if (!r)
    throw new Error("ConnectionRepository not provided - is the ui.vue.stores.connection module active?");
  return r;
}
const m = p("connections", () => {
  const n = d([
    {
      uid: "test",
      name: "Test Connection 01",
      type: "rest",
      config: {
        url: "https://jsonplaceholder.typicode.com/"
      }
    }
  ]), o = l();
  return { connections: n, createConnection: (i, e = {}) => {
    const t = Math.random().toString(36).substring(7), s = "Connection " + t;
    return e.name = s, e.type = i, e.uid = t, o.registerConnection(t, i, e), n.value.push({ uid: t, type: i, name: s, config: e }), t;
  }, removeConnection: (i) => {
    const e = n.value.findIndex((t) => t.uid === i);
    e > -1 && n.value.splice(e, 1);
  }, updateConnection: (i, e) => {
    const t = n.value.find((s) => s.uid === i);
    t && (t.uid = e.uid, t.type = e.type, t.name = e.name, t.config = e.config, t.config.name = e.name, t.config.type = e.type, t.config.uid = e.uid, o.registerConnection(i, t.type, t.config), console.log(o));
  }, updateConnections: (i) => {
    n.value.splice(0), i.forEach((e) => {
      n.value.push(e), e.config.name = e.name, e.config.type = e.type, e.config.uid = e.uid, o.registerConnection(
        e.uid,
        e.type,
        e.config
      );
    });
  } };
});
function a({ services: n }) {
  f(n.getRequired(c));
}
const g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: a,
  useConnectionsStore: m
}, Symbol.toStringTag, { value: "Module" })), u = "org.eclipse.daanse.board.app.ui.vue.stores.connection", v = "0.0.1-next.1";
async function w(n) {
  const o = globalThis.__tsm__;
  if (!o)
    throw new Error(`${u}: tsm runtime is not initialized`);
  o.register(u, g, v, "ui.vue.stores.connection"), await a?.(n);
}
async function E(n) {
  await void 0;
}
export {
  w as activate,
  E as deactivate,
  m as useConnectionsStore
};
