import { ref } from "vue";
import { defineStore } from "pinia";
const useLayoutStore = (pageId = "") => {
  const storeCaller = defineStore("layout" + pageId, () => {
    const layout = ref([]);
    const updateLayout = (updatedLayout) => {
      layout.value.splice(0, layout.value.length);
      layout.value = updatedLayout;
    };
    return {
      layout,
      updateLayout
    };
  });
  return storeCaller();
};
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  useLayoutStore
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.stores.layout";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.stores.layout");
  await void 0;
}
async function deactivate(context) {
  await void 0;
}
export {
  activate,
  deactivate,
  useLayoutStore
};
