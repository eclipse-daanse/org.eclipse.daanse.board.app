const { serviceId: s } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class o {
  /**
   * Whether stored content is a workspace.
   *
   * Two shapes are: a resource, which names the class it holds, and the
   * one written before the workspace was modelled, recognised by the keys
   * it always had - `conections` among them, misspelled since the first
   * board was ever saved.
   */
  checkContent(t) {
    if (!t || typeof t != "object") return !1;
    if (typeof t.eClass == "string" && t.eClass.includes("#//Workspace"))
      return !0;
    const c = Object.keys(t);
    return c.includes("datasources") && c.includes("conections");
  }
}
const i = s("ValidityCheck"), l = Symbol.for(i);
function n({ services: e }) {
  e.register(i, new o());
}
function a({ services: e }) {
  e.unregister(i);
}
const u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VALIDITY_CHECK: i,
  activate: n,
  deactivate: a,
  identifier: l
}, Symbol.toStringTag, { value: "Module" })), r = "org.eclipse.daanse.board.app.lib.persistence.util", d = "0.0.1-next.1";
async function f(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${r}: tsm runtime is not initialized`);
  t.register(r, u, d, "lib.persistence.util"), await n?.(e);
}
async function p(e) {
  await a?.(e);
}
export {
  i as VALIDITY_CHECK,
  f as activate,
  p as deactivate,
  l as identifier
};
