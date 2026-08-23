const { serviceId: o } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), n = o("PageRepository"), a = Symbol.for(n), r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PAGE_REPOSITORY: n,
  identifier: a
}, Symbol.toStringTag, { value: "Module" })), t = "org.eclipse.daanse.board.app.lib.api.page", s = "0.0.1-next.1";
async function c(e) {
  const i = globalThis.__tsm__;
  if (!i)
    throw new Error(`${t}: tsm runtime is not initialized`);
  i.register(t, r, s, "lib.api.page"), await void 0;
}
async function l(e) {
  await void 0;
}
export {
  n as PAGE_REPOSITORY,
  c as activate,
  l as deactivate,
  a as identifier
};
