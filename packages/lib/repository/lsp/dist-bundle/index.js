import { injectAll as c, component as u } from "@eclipse-daanse/tsm";
import { LANGUAGE_SERVICE_ID as f, LANGUAGE_REPOSITORY as p } from "org.eclipse.daanse.board.app.lib.api.lsp";
var d = Object.defineProperty, h = Object.getOwnPropertyDescriptor, l = (e, t, s, n) => {
  for (var r = n > 1 ? void 0 : n ? h(t, s) : t, i = e.length - 1, o; i >= 0; i--)
    (o = e[i]) && (r = (n ? o(t, s, r) : o(r)) || r);
  return n && r && d(t, s, r), r;
};
let a = class {
  tracked = [];
  changeListeners = /* @__PURE__ */ new Set();
  set providers(e) {
    this.tracked = e, this.notifyChange();
  }
  get providers() {
    return this.tracked;
  }
  getLanguage(e) {
    return this.getAllLanguages()[e];
  }
  getAllLanguages() {
    const e = {};
    for (const t of this.tracked)
      t.id in e || (e[t.id] = t);
    return e;
  }
  /*
   * Extension matching is longest-first, so a language claiming `.mdxq` wins
   * over one claiming `.q` for the same file - the specific claim beats the
   * general one regardless of registration order.
   */
  languageForFile(e) {
    const t = e.toLowerCase();
    let s, n = -1;
    for (const r of Object.values(this.getAllLanguages()))
      for (const i of r.extensions) {
        const o = i.toLowerCase();
        t.endsWith(o) && o.length > n && (s = r, n = o.length);
      }
    return s;
  }
  onChange(e) {
    return this.changeListeners.add(e), () => this.changeListeners.delete(e);
  }
  notifyChange() {
    for (const e of this.changeListeners) e();
  }
};
l([
  c(f)
], a.prototype, "providers", 1);
a = l([
  u({
    service: [p]
  })
], a);
const _ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get TrackedLanguageRepository() {
    return a;
  }
}, Symbol.toStringTag, { value: "Module" })), g = "org.eclipse.daanse.board.app.lib.repository.lsp", L = "0.0.1-next.1";
async function y(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${g}: tsm runtime is not initialized`);
  t.register(g, _, L, "lib.repository.lsp"), await void 0;
}
async function m(e) {
  await void 0;
}
export {
  a as TrackedLanguageRepository,
  y as activate,
  m as deactivate
};
