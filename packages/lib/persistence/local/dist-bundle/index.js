import { REPOSITORY_REGISTRY as S } from "org.eclipse.daanse.board.app.lib.api.persistence";
import { BaseRepository as I } from "org.eclipse.daanse.board.app.lib.repository.persistence";
import { VALIDITY_CHECK as _ } from "org.eclipse.daanse.board.app.lib.persistence.util";
import { inject as b, injectable as O } from "@eclipse-daanse/tsm";
const { serviceId: R } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), { parse: k } = JSON, { keys: E } = Object, y = String, U = "string", h = {}, g = "object", w = (e, t) => t, B = (e) => e instanceof y ? y(e) : e, C = (e, t) => typeof t === U ? new y(t) : t, A = (e, t, i, n) => (r) => {
  for (let s = E(r), { length: a } = s, l = 0; l < a; l++) {
    const o = s[l], m = r[o];
    if (m instanceof y) {
      const c = e[+m];
      typeof c === g && !i.has(c) ? (i.add(c), r[o] = h, t.push({ o: r, k: o, r: c })) : r[o] = n.call(r, o, c);
    } else r[o] !== h && (r[o] = n.call(r, o, m));
  }
  return r;
}, u = (e, t) => {
  const i = k(e, C).map(B), n = w;
  let r = i[0];
  if (typeof r === g && r) {
    const s = [], a = A(i, s, /* @__PURE__ */ new Set(), n);
    r = a(r);
    let l = 0;
    for (; l < s.length; ) {
      const { o, k: m, r: c } = s[l++];
      o[m] = n.call(o, m, a(c));
    }
  }
  return n.call({ "": r }, "", r);
};
var L = Object.defineProperty, T = Object.getOwnPropertyDescriptor, j = (e, t, i, n) => {
  for (var r = n > 1 ? void 0 : n ? T(t, i) : t, s = e.length - 1, a; s >= 0; s--)
    (a = e[s]) && (r = (n ? a(t, i, r) : a(r)) || r);
  return n && r && L(t, i, r), r;
};
let p = class extends I {
  init(e, t) {
    super.init(e, t);
  }
  sync() {
    return Promise.resolve([]);
  }
  async findAll() {
    let e = [];
    return Object.keys(localStorage).forEach((t, i) => {
      try {
        let n = JSON.parse(localStorage.getItem(t) ?? "");
        if (Array.isArray(n) && (n = u(localStorage.getItem(t) ?? "")), this.ValidityCheck.checkContent(n)) {
          let r = new URL(this.uri ?? "");
          r.pathname = t + ".json", e.push({
            name: t,
            uri: r,
            data: n
          });
        }
      } catch (n) {
        console.log(n);
      }
    }), Promise.resolve(e);
  }
  test() {
    this.ValidityCheck.checkContent({});
  }
  findByFragment(e) {
    let t = e.charAt(0) == "/" ? e.slice(1) : e, i = [];
    if (Object.keys(localStorage).includes(t)) {
      let n = JSON.parse(localStorage.getItem(t) ?? "");
      if (Array.isArray(n) && (n = u(localStorage.getItem(t) ?? "")), this.ValidityCheck.checkContent(n)) {
        let r = new URL(this.uri ?? "");
        r.pathname = t + ".json", i.push({
          name: t,
          uri: r,
          data: localStorage.getItem(t)
        });
      }
    }
    return Promise.resolve(i);
  }
  findByName(e) {
    return this.findByFragment(e);
  }
  findByUri(e) {
    let t = e.pathname.replace(".json", "");
    return this.findByFragment(t);
  }
  async getEntityByUri(e) {
    if (e.protocol != this.uri?.protocol || e.hostname != this.uri?.hostname)
      return Promise.resolve(null);
    let t = e.pathname.replace(".json", ""), i = await this.findByFragment(t);
    return Promise.resolve(i[0]);
  }
  create(e) {
    if (this.checkURI(e))
      return Promise.reject("Entity Uri not set or not in Repo");
    const t = e.uri.pathname.replace(".json", "").replace("/", "");
    return Object.keys(localStorage).includes(t) ? Promise.reject("Entity allready exists! use update!") : e.name == null || e.name == "" ? Promise.reject("name not set in entity") : e.uri.pathname.includes(".json") ? (localStorage.setItem(t, e.data), Promise.resolve(!0)) : Promise.reject("name not contains a .json file type");
  }
  delete(e) {
    if (this.checkURI(e))
      return Promise.reject("Entity Uri not set or in Repo");
    if (e.name == null || e.name == "")
      return Promise.reject("name not set in entity");
    if (!e.uri.pathname.includes(".json"))
      return Promise.reject("name not contains a .json file type");
    const t = e.uri.pathname.replace(".json", "").replace("/", "");
    return localStorage.removeItem(t), Promise.resolve(!0);
  }
  update(e) {
    if (this.checkURI(e))
      return Promise.reject("Entity Uri not set or in Repo");
    if (e.name == null || e.name == "")
      return Promise.reject("name not set in entity");
    if (!e.uri.pathname.includes(".json"))
      return Promise.reject("name not contains a .json file type");
    const t = e.uri.pathname.replace(".json", "").replace("/", "");
    return Object.keys(localStorage).includes(t) ? (localStorage.setItem(t, e.data), Promise.resolve(!0)) : Promise.reject("Entity not exists! use create!");
  }
  checkURI(e) {
    return !e.uri || e.uri.protocol != this.uri?.protocol || e.uri.hostname != this.uri?.hostname;
  }
};
p.type = "localRepositories";
j([
  b(_, { optional: !0 })
], p.prototype, "ValidityCheck", 2);
p = j([
  O()
], p);
const f = R("LocalRepository"), V = Symbol.for(f);
function v({ services: e }) {
  e.register(f, e.construct(p)), e.getRequired(S).registerRepoType(p.type, V);
}
function P({ services: e }) {
  e.unregister(f);
}
const x = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  LOCAL_REPOSITORY: f,
  activate: v,
  deactivate: P
}, Symbol.toStringTag, { value: "Module" })), d = "org.eclipse.daanse.board.app.lib.persistence.local", N = "0.0.1-next.1";
async function z(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${d}: tsm runtime is not initialized`);
  t.register(d, x, N, "lib.persistence.local"), await v?.(e);
}
async function J(e) {
  await P?.(e);
}
export {
  f as LOCAL_REPOSITORY,
  z as activate,
  J as deactivate
};
