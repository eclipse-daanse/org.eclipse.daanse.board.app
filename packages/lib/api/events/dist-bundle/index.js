const { serviceId: e } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), E = e("EventRegistry"), _ = Symbol.for(E), i = e("EventActionsRegistry"), a = Symbol.for(i), r = e("EventManager"), c = Symbol.for(r), s = e("EventBusBridge"), R = Symbol.for(s), l = e("EcoreMetadataService"), I = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ECORE_METADATA_SERVICE_ID: l,
  EVENT_ACTIONS_REGISTRY: a,
  EVENT_ACTIONS_REGISTRY_ID: i,
  EVENT_BUS_BRIDGE: R,
  EVENT_BUS_BRIDGE_ID: s,
  EVENT_MANAGER: c,
  EVENT_MANAGER_ID: r,
  EVENT_REGISTRY: _,
  EVENT_REGISTRY_ID: E
}, Symbol.toStringTag, { value: "Module" })), o = "org.eclipse.daanse.board.app.lib.api.events", T = "0.0.1-next.1";
async function S(t) {
  const n = globalThis.__tsm__;
  if (!n)
    throw new Error(`${o}: tsm runtime is not initialized`);
  n.register(o, I, T, "lib.api.events"), await void 0;
}
async function d(t) {
  await void 0;
}
export {
  l as ECORE_METADATA_SERVICE_ID,
  a as EVENT_ACTIONS_REGISTRY,
  i as EVENT_ACTIONS_REGISTRY_ID,
  R as EVENT_BUS_BRIDGE,
  s as EVENT_BUS_BRIDGE_ID,
  c as EVENT_MANAGER,
  r as EVENT_MANAGER_ID,
  _ as EVENT_REGISTRY,
  E as EVENT_REGISTRY_ID,
  S as activate,
  d as deactivate
};
