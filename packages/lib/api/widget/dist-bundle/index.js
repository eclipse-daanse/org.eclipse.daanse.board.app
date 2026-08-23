const { serviceId: n } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), a = n("daanse.widget"), o = n("WidgetRepository"), r = Symbol.for(o), s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  WIDGET_REPOSITORY: o,
  WIDGET_SERVICE_ID: a,
  identifier: r
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.lib.api.widget", c = "0.0.1-next.1";
async function d(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${i}: tsm runtime is not initialized`);
  t.register(i, s, c, "lib.api.widget"), await void 0;
}
async function _(e) {
  await void 0;
}
export {
  o as WIDGET_REPOSITORY,
  a as WIDGET_SERVICE_ID,
  d as activate,
  _ as deactivate,
  r as identifier
};
