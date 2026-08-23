const { serviceId: r } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), o = r("LoggerFactory"), n = Symbol.for(o), a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LOGGER_FACTORY: o,
  identifier: n
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.lib.api.logger", c = "0.0.1-next.1";
async function s(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${i}: tsm runtime is not initialized`);
  t.register(i, a, c, "lib.api.logger"), await void 0;
}
async function l(e) {
  await void 0;
}
export {
  o as LOGGER_FACTORY,
  s as activate,
  l as deactivate,
  n as identifier
};
