const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
const DATASOURCE_REPOSITORY = serviceId("DatasourceRepository");
const identifier = Symbol.for(DATASOURCE_REPOSITORY);
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DATASOURCE_REPOSITORY,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.api.datasource";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.api.datasource");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  DATASOURCE_REPOSITORY,
  activate,
  deactivate,
  identifier
};
