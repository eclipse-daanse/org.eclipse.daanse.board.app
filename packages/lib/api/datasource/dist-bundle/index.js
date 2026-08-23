const { serviceId: a } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), o = a("DatasourceRepository"), r = Symbol.for(o), n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DATASOURCE_REPOSITORY: o,
  identifier: r
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.lib.api.datasource", s = "0.0.1-next.1";
async function c(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${i}: tsm runtime is not initialized`);
  t.register(i, n, s, "lib.api.datasource"), await void 0;
}
async function d(e) {
  await void 0;
}
export {
  o as DATASOURCE_REPOSITORY,
  c as activate,
  d as deactivate,
  r as identifier
};
