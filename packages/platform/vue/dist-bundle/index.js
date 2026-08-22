const VERSIONS = {
  vue: "3.5.24",
  "vue-router": "5.0.6",
  pinia: "3.0.4",
  vuedraggable: "4.1.0"
};
async function activate({ log }) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error("platform.vue: tsm runtime is not initialized");
  }
  const [vue, vueRouter, pinia, vuedraggable] = await Promise.all([
    import("./vue.js"),
    import("./vue-router.js"),
    import("./pinia.js"),
    import("./vuedraggable.js")
  ]);
  runtime.register("vue", vue, VERSIONS.vue, "platform.vue");
  runtime.register("vue-router", vueRouter, VERSIONS["vue-router"], "platform.vue");
  runtime.register("pinia", pinia, VERSIONS.pinia, "platform.vue");
  runtime.register("vuedraggable", vuedraggable, VERSIONS.vuedraggable, "platform.vue");
  log.info(
    `shared libraries ready: vue@${VERSIONS.vue}, vue-router@${VERSIONS["vue-router"]}, pinia@${VERSIONS.pinia}`
  );
}
export {
  VERSIONS,
  activate
};
