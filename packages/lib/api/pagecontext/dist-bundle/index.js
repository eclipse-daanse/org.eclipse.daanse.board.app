const { serviceId: o } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), n = o("PageContext"), a = Symbol.for(n), r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PAGE_CONTEXT: n,
  identifier: a
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.lib.api.pagecontext", c = "0.0.1-next.1";
async function s(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${i}: tsm runtime is not initialized`);
  t.register(i, r, c, "lib.api.pagecontext"), await void 0;
}
async function l(e) {
  await void 0;
}
export {
  n as PAGE_CONTEXT,
  s as activate,
  l as deactivate,
  a as identifier
};
