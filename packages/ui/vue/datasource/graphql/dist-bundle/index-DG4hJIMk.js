import { g as getDefaultExportFromCjs } from "./index-BKLwhkaH.js";
import { r as requireReact } from "./index-xy1wy5yW.js";
function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k in e) {
        if (k !== "default" && !(k in n)) {
          const d = Object.getOwnPropertyDescriptor(e, k);
          if (d) {
            Object.defineProperty(n, k, d.get ? d : {
              enumerable: true,
              get: () => e[k]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }));
}
var reactExports = requireReact();
const G = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const t = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: G
}, [reactExports]);
export {
  G,
  reactExports as r,
  t
};
