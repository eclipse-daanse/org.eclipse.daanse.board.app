const { serviceId: o } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), t = o("ConnectionRepository"), r = Symbol.for(t), a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONNECTION_REPOSITORY: t,
  identifier: r
}, Symbol.toStringTag, { value: "Module" })), i = "org.eclipse.daanse.board.app.lib.api.connection", c = "0.0.1-next.1";
async function s(e) {
  const n = globalThis.__tsm__;
  if (!n)
    throw new Error(`${i}: tsm runtime is not initialized`);
  n.register(i, a, c, "lib.api.connection"), await void 0;
}
async function l(e) {
  await void 0;
}
export {
  t as CONNECTION_REPOSITORY,
  s as activate,
  l as deactivate,
  r as identifier
};
