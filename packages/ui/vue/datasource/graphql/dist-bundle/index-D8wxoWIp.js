import { g as s } from "./index-CyJGxwMM.js";
import { r as c } from "./index-BI4R-8Ee.js";
function i(t, n) {
  for (var o = 0; o < n.length; o++) {
    const e = n[o];
    if (typeof e != "string" && !Array.isArray(e)) {
      for (const r in e)
        if (r !== "default" && !(r in t)) {
          const a = Object.getOwnPropertyDescriptor(e, r);
          a && Object.defineProperty(t, r, a.get ? a : {
            enumerable: !0,
            get: () => e[r]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
var f = c();
const p = /* @__PURE__ */ s(f), l = /* @__PURE__ */ i({
  __proto__: null,
  default: p
}, [f]);
export {
  p as G,
  f as r,
  l as t
};
