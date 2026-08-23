const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const EVENT_REGISTRY_ID = serviceId("EventRegistry");
const EVENT_REGISTRY = Symbol.for(EVENT_REGISTRY_ID);
const EVENT_ACTIONS_REGISTRY_ID = serviceId("EventActionsRegistry");
const EVENT_ACTIONS_REGISTRY = Symbol.for(EVENT_ACTIONS_REGISTRY_ID);
const EVENT_MANAGER_ID = serviceId("EventManager");
const EVENT_MANAGER = Symbol.for(EVENT_MANAGER_ID);
const EVENT_BUS_BRIDGE_ID = serviceId("EventBusBridge");
const EVENT_BUS_BRIDGE = Symbol.for(EVENT_BUS_BRIDGE_ID);
const ECORE_METADATA_SERVICE_ID = serviceId("EcoreMetadataService");
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ECORE_METADATA_SERVICE_ID,
  EVENT_ACTIONS_REGISTRY,
  EVENT_ACTIONS_REGISTRY_ID,
  EVENT_BUS_BRIDGE,
  EVENT_BUS_BRIDGE_ID,
  EVENT_MANAGER,
  EVENT_MANAGER_ID,
  EVENT_REGISTRY,
  EVENT_REGISTRY_ID
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.api.events";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.api.events");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  ECORE_METADATA_SERVICE_ID,
  EVENT_ACTIONS_REGISTRY,
  EVENT_ACTIONS_REGISTRY_ID,
  EVENT_BUS_BRIDGE,
  EVENT_BUS_BRIDGE_ID,
  EVENT_MANAGER,
  EVENT_MANAGER_ID,
  EVENT_REGISTRY,
  EVENT_REGISTRY_ID,
  activate,
  deactivate
};
