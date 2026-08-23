import { PAGE_CONTEXT, identifier } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
import { PAGE_CONTEXT as PAGE_CONTEXT2, identifier as identifier2 } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
class PageContextService {
  setProvider(provider) {
    this.provider = provider;
  }
  getCurrentPageId() {
    return this.provider?.getCurrentPageId();
  }
}
function activate$1({ services }) {
  services.register(PAGE_CONTEXT, new PageContextService());
}
function deactivate$1({ services }) {
  services.unregister(PAGE_CONTEXT);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  PAGE_CONTEXT,
  activate: activate$1,
  deactivate: deactivate$1,
  identifier
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.lib.pagecontext.pagecontext_service";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "lib.pagecontext.pagecontext_service");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  PAGE_CONTEXT2 as PAGE_CONTEXT,
  activate,
  deactivate,
  identifier2 as identifier
};
