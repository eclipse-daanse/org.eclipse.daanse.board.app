const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class LayoutRepository {
  constructor() {
    this.availableLayouts = /* @__PURE__ */ new Map();
  }
  addLayout(layout) {
    this.availableLayouts.set(layout.id, layout);
  }
  removeLayout(layoutId) {
    return this.availableLayouts.delete(layoutId);
  }
  getLayout(layoutId) {
    return this.availableLayouts.get(layoutId);
  }
  getAllLayouts() {
    return Array.from(this.availableLayouts.values());
  }
  hasLayout(layoutId) {
    return this.availableLayouts.has(layoutId);
  }
}
const LAYOUT_REPOSITORY = serviceId("LayoutRepository");
const identifier = Symbol.for(LAYOUT_REPOSITORY);
function activate$1({ services }) {
  services.register(
    LAYOUT_REPOSITORY,
    new LayoutRepository()
  );
}
function deactivate$1({ services }) {
  services.unregister(LAYOUT_REPOSITORY);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LAYOUT_REPOSITORY,
  activate: activate$1,
  deactivate: deactivate$1,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.repository.layout.page";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.repository.layout.page");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  LAYOUT_REPOSITORY,
  activate,
  deactivate,
  identifier
};
