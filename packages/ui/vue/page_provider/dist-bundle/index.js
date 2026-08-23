import { PAGE_CONTEXT } from "org.eclipse.daanse.board.app.lib.api.pagecontext";
const { serviceId } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
import { useRoute } from "vue-router";
class VuePageProvider {
  constructor() {
    this.currentPageId = void 0;
  }
  getCurrentPageId() {
    try {
      const route = useRoute();
      if (route && route.params && route.params.pageid) {
        this.currentPageId = route.params.pageid;
        return this.currentPageId;
      }
    } catch (error) {
    }
    try {
      const currentPath = window.location.pathname;
      const match = currentPath.match(/\/page\/([^\/]+)/);
      if (match && match[1]) {
        this.currentPageId = match[1];
        return this.currentPageId;
      }
    } catch (error) {
    }
    return this.currentPageId;
  }
  setCurrentPageId(pageId) {
    this.currentPageId = pageId;
  }
}
const VUE_PAGE_PROVIDER = serviceId("VuePageProvider");
const identifier = Symbol.for(VUE_PAGE_PROVIDER);
const vuePageProvider = new VuePageProvider();
function activate$1({ services }) {
  services.register(VUE_PAGE_PROVIDER, vuePageProvider);
  services.getRequired(PAGE_CONTEXT).setProvider(vuePageProvider);
}
function deactivate$1({ services }) {
  services.unregister(VUE_PAGE_PROVIDER);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  VUE_PAGE_PROVIDER,
  VuePageProvider,
  activate: activate$1,
  deactivate: deactivate$1,
  identifier,
  vuePageProvider
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.page_provider";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.page_provider");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  VUE_PAGE_PROVIDER,
  VuePageProvider,
  activate,
  deactivate,
  identifier,
  vuePageProvider
};
