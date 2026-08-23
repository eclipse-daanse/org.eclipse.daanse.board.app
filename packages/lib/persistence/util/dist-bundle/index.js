const { serviceId: r } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class o {
  checkContent(t) {
    const i = Object.keys(t);
    return !!(i.includes("layout") && i.includes("datasources") && i.includes("conections") && i.includes("widgets"));
  }
}
const n = r("ValidityCheck"), l = Symbol.for(n);
function s({ services: e }) {
  e.register(n, new o());
}
function a({ services: e }) {
  e.unregister(n);
}
const u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VALIDITY_CHECK: n,
  activate: s,
  deactivate: a,
  identifier: l
}, Symbol.toStringTag, { value: "Module" })), c = "org.eclipse.daanse.board.app.lib.persistence.util", d = "0.0.1-next.1";
async function _(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${c}: tsm runtime is not initialized`);
  t.register(c, u, d, "lib.persistence.util"), await s?.(e);
}
async function b(e) {
  await a?.(e);
}
export {
  n as VALIDITY_CHECK,
  _ as activate,
  b as deactivate,
  l as identifier
};
