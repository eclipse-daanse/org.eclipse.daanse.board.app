const e = [];
for (let n = 0; n < 256; ++n)
  e.push((n + 256).toString(16).slice(1));
function c(n, t = 0) {
  return (e[n[t + 0]] + e[n[t + 1]] + e[n[t + 2]] + e[n[t + 3]] + "-" + e[n[t + 4]] + e[n[t + 5]] + "-" + e[n[t + 6]] + e[n[t + 7]] + "-" + e[n[t + 8]] + e[n[t + 9]] + "-" + e[n[t + 10]] + e[n[t + 11]] + e[n[t + 12]] + e[n[t + 13]] + e[n[t + 14]] + e[n[t + 15]]).toLowerCase();
}
const r = new Uint8Array(16);
function b() {
  return crypto.getRandomValues(r);
}
function o(n, t, i) {
  return crypto.randomUUID ? crypto.randomUUID() : l(n);
}
function l(n, t, i) {
  n = n || {};
  const s = n.random ?? n.rng?.() ?? b();
  if (s.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return s[6] = s[6] & 15 | 64, s[8] = s[8] & 63 | 128, c(s);
}
class d {
  constructor() {
    this.subscribers = /* @__PURE__ */ new Map();
  }
  notify(t) {
    for (const i of this.subscribers.values())
      i(t);
  }
  subscribe(t) {
    const i = o();
    return this.subscribers.set(i, t), i;
  }
  unsubscribe(t) {
    this.subscribers.delete(t);
  }
}
const a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  SubscribeNotifyImpl: d
}, Symbol.toStringTag, { value: "Module" })), u = "org.eclipse.daanse.board.app.lib.utils.subscriber", y = "0.0.1-next.1";
async function g(n) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${u}: tsm runtime is not initialized`);
  t.register(u, a, y, "lib.utils.subscriber"), await void 0;
}
async function m(n) {
  await void 0;
}
export {
  d as SubscribeNotifyImpl,
  g as activate,
  m as deactivate
};
