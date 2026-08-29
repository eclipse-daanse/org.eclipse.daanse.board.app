const e = {
  vue: "3.5.24",
  "vue-router": "5.0.6",
  pinia: "3.0.4",
  "@emfts/core": "0.1.1-next.18",
  vuedraggable: "4.1.0"
};
async function m({ log: t }) {
  const r = globalThis.__tsm__;
  if (!r)
    throw new Error("platform.vue: tsm runtime is not initialized");
  const [i, o, a, u, v] = await Promise.all([
    import("./vue.js"),
    import("./vue-router.js"),
    import("./pinia.js"),
    import("./vuedraggable.js"),
    import("./emfts-core.js")
  ]);
  r.register("vue", i, e.vue, "platform.vue"), r.register("vue-router", o, e["vue-router"], "platform.vue"), r.register("pinia", a, e.pinia, "platform.vue"), r.register("vuedraggable", u, e.vuedraggable, "platform.vue"), r.register("@emfts/core", v, e["@emfts/core"], "platform.vue"), t.info(
    `shared libraries ready: vue@${e.vue}, vue-router@${e["vue-router"]}, pinia@${e.pinia}`
  );
}
export {
  e as VERSIONS,
  m as activate
};
