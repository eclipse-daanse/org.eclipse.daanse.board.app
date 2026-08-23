const e = {
  vue: "3.5.24",
  "vue-router": "5.0.6",
  pinia: "3.0.4",
  vuedraggable: "4.1.0"
};
async function v({ log: i }) {
  const r = globalThis.__tsm__;
  if (!r)
    throw new Error("platform.vue: tsm runtime is not initialized");
  const [t, a, u, o] = await Promise.all([
    import("./vue.js"),
    import("./vue-router.js"),
    import("./pinia.js"),
    import("./vuedraggable.js")
  ]);
  r.register("vue", t, e.vue, "platform.vue"), r.register("vue-router", a, e["vue-router"], "platform.vue"), r.register("pinia", u, e.pinia, "platform.vue"), r.register("vuedraggable", o, e.vuedraggable, "platform.vue"), i.info(
    `shared libraries ready: vue@${e.vue}, vue-router@${e["vue-router"]}, pinia@${e.pinia}`
  );
}
export {
  e as VERSIONS,
  v as activate
};
