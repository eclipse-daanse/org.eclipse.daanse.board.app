const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const REPOSITORY_REGISTRY = serviceId("RepositoryRegistry");
const identifier = Symbol.for(REPOSITORY_REGISTRY);
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  REPOSITORY_REGISTRY,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.api.persistence";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.api.persistence");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  REPOSITORY_REGISTRY,
  activate,
  deactivate,
  identifier
};
