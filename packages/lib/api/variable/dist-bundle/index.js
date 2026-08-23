const { serviceId: r } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), a = r("VariableRepository"), n = Symbol.for(a), o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VARIABLE_REPOSITORY: a,
  identifier: n
}, Symbol.toStringTag, { value: "Module" })), t = "org.eclipse.daanse.board.app.lib.api.variable", s = "0.0.1-next.1";
async function c(e) {
  const i = globalThis.__tsm__;
  if (!i)
    throw new Error(`${t}: tsm runtime is not initialized`);
  i.register(t, o, s, "lib.api.variable"), await void 0;
}
async function l(e) {
  await void 0;
}
export {
  a as VARIABLE_REPOSITORY,
  c as activate,
  l as deactivate,
  n as identifier
};
