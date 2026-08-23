const { serviceId: a } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), o = a("LayoutRepository"), n = Symbol.for(o), r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LAYOUT_REPOSITORY: o,
  identifier: n
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.lib.api.layout.page", s = "0.0.1-next.1";
async function c(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${i}: tsm runtime is not initialized`);
  t.register(i, r, s, "lib.api.layout.page"), await void 0;
}
async function l(e) {
  await void 0;
}
export {
  o as LAYOUT_REPOSITORY,
  c as activate,
  l as deactivate,
  n as identifier
};
