const { serviceId: a } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), n = a("SettingsManager"), o = Symbol.for(n), r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SETTINGS_MANAGER: n,
  identifier: o
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.lib.api.settings", s = "0.0.1-next.1";
async function c(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${i}: tsm runtime is not initialized`);
  t.register(i, r, s, "lib.api.settings"), await void 0;
}
async function l(e) {
  await void 0;
}
export {
  n as SETTINGS_MANAGER,
  c as activate,
  l as deactivate,
  o as identifier
};
