const { serviceId: r } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), n = r("RepositoryRegistry"), o = Symbol.for(n), s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  REPOSITORY_REGISTRY: n,
  identifier: o
}, Symbol.toStringTag, { value: "Module" })), t = "org.eclipse.daanse.board.app.lib.api.persistence", a = "0.0.1-next.1";
async function c(e) {
  const i = globalThis.__tsm__;
  if (!i)
    throw new Error(`${t}: tsm runtime is not initialized`);
  i.register(t, s, a, "lib.api.persistence"), await void 0;
}
async function l(e) {
  await void 0;
}
export {
  n as REPOSITORY_REGISTRY,
  c as activate,
  l as deactivate,
  o as identifier
};
