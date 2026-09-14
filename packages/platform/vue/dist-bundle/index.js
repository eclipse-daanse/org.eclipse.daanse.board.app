const e = {
  vue: "3.5.24",
  "vue-router": "5.0.6",
  "@emfts/core": "0.1.1-next.18",
  vuedraggable: "4.1.0"
};
async function v({ log: t }) {
  const r = globalThis.__tsm__;
  if (!r)
    throw new Error("platform.vue: tsm runtime is not initialized");
  const [o, u, a, i] = await Promise.all([
    import("./vue.js"),
    import("./vue-router.js"),
    import("./vuedraggable.js"),
    import("./emfts-core.js")
  ]);
  r.register("vue", o, e.vue, "platform.vue"), r.register("vue-router", u, e["vue-router"], "platform.vue"), r.register("vuedraggable", a, e.vuedraggable, "platform.vue"), r.register("@emfts/core", i, e["@emfts/core"], "platform.vue"), t.info(
    `shared libraries ready: vue@${e.vue}, vue-router@${e["vue-router"]}`
  );
}
export {
  e as VERSIONS,
  v as activate
};
