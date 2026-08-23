import { SETTINGS_MANAGER as u } from "org.eclipse.daanse.board.app.lib.api.settings";
import { REPOSITORY_REGISTRY as d } from "org.eclipse.daanse.board.app.lib.api.persistence";
async function l({ services: e, log: t }) {
  const a = e.get(u);
  if (!a) {
    t.info("SettingsManager nicht vorhanden - nichts wiederherzustellen");
    return;
  }
  const s = e.getRequired(d), c = await a.getSettings(["persistanceRepositories"]);
  if (c)
    for (const [i, f] of Object.entries(c)) {
      const r = s.availableRepoTypes.get(i);
      if (!r) {
        t.warn(`Repository-Typ "${i}" ist nicht angemeldet`);
        continue;
      }
      const o = e.get(String(r.description ?? r));
      if (!o) {
        t.warn(`keine Umsetzung fuer Repository-Typ "${i}"`);
        continue;
      }
      for (const n of f)
        if (!(!n.name || !n.url))
          try {
            o.init(new URL(n.url), n.name, n), s.register(o);
          } catch (g) {
            t.warn(`Repository "${n.name}" (${i}) nicht wiederhergestellt`, g);
          }
    }
}
const y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: l
}, Symbol.toStringTag, { value: "Module" })), p = "org.eclipse.daanse.board.app.lib.persistence.loader", R = "0.0.1-next.1";
async function b(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${p}: tsm runtime is not initialized`);
  t.register(p, y, R, "lib.persistence.loader"), await l?.(e);
}
async function w(e) {
  await void 0;
}
export {
  b as activate,
  w as deactivate
};
