const { serviceId: n } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), a = "langium/ast", o = n("daanse.lsp.language"), s = n("LanguageRepository"), r = Symbol.for("LanguageRepository"), c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AST_REQUEST: a,
  LANGUAGE_REPOSITORY: s,
  LANGUAGE_SERVICE_ID: o,
  identifier: r
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.lib.api.lsp", l = "0.0.1-next.1";
async function _(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${i}: tsm runtime is not initialized`);
  t.register(i, c, l, "lib.api.lsp"), await void 0;
}
async function p(e) {
  await void 0;
}
export {
  a as AST_REQUEST,
  s as LANGUAGE_REPOSITORY,
  o as LANGUAGE_SERVICE_ID,
  _ as activate,
  p as deactivate,
  r as identifier
};
