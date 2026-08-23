const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const ROUTE_REGISTRY_ID = serviceId("RouteRegistry");
const ROUTE_REGISTRY = Symbol.for(ROUTE_REGISTRY_ID);
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ROUTE_REGISTRY,
  ROUTE_REGISTRY_ID
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.api.route";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.api.route");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  ROUTE_REGISTRY,
  ROUTE_REGISTRY_ID,
  activate,
  deactivate
};
