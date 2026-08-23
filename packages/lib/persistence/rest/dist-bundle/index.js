import { REPOSITORY_REGISTRY as l } from "org.eclipse.daanse.board.app.lib.api.persistence";
import { BaseRepository as u } from "org.eclipse.daanse.board.app.lib.repository.persistence";
const { serviceId: p } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
class s extends u {
  static {
    this.type = "restRepositories";
  }
  init(e, t, n = {
    updateEndpointPath: ":id",
    deleteEndpointPath: ":id",
    findAllEndpointPath: "",
    createEndpointPath: ":id",
    findEndpointPath: ":id",
    syncEndpointPath: ""
  }) {
    super.init(e, t), this.updateEndpointPath = n.updateEndpointPath || ":id", this.deleteEndpointPath = n.deleteEndpointPath || ":id", this.findAllEndpointPath = n.findEndpointPath || "", this.createEndpointPath = n.createEndpointPath || ":id", this.findEndpointPath = n.findEndpointPath || ":id", this.syncEndpointPath = n.syncEndpointPath || "";
  }
  async sync() {
    try {
      const e = new URL(this.uri ?? "");
      e.pathname = e.pathname + "/" + this.findAllEndpointPath;
      const t = await fetch(e, { method: "HEAD" });
      if (t.ok) {
        const n = [], r = await t.json();
        for (const a of r)
          n.push({
            name: a.name,
            uri: new URL(a.url),
            data: null
          });
        return n;
      } else
        throw new Error(t.statusText);
    } catch (e) {
      throw console.log(e), new Error("Resource could not find entities");
    }
  }
  async create(e) {
    try {
      const t = new URL(this.uri ?? ""), n = e.uri.pathname;
      t.pathname = t.pathname + "/" + this.createEndpointPath?.replace(":id", n);
      const r = await fetch(t, { method: "GET", body: e.data });
      if (r.ok)
        return !0;
      throw new Error(r.statusText);
    } catch (t) {
      return console.log(t), new Error("Resource could not created");
    }
  }
  async delete(e) {
    try {
      const t = new URL(this.uri ?? ""), n = e.uri.pathname;
      t.pathname = t.pathname + "/" + this.deleteEndpointPath?.replace(":id", n);
      const r = await fetch(t, { method: "DELETE" });
      if (r.ok)
        return !0;
      throw new Error(r.statusText);
    } catch (t) {
      return console.log(t), new Error("Resource could not deleted");
    }
  }
  async findAll() {
    try {
      const e = new URL(this.uri ?? "");
      e.pathname = e.pathname + "/" + this.findAllEndpointPath;
      const t = await fetch(e, { method: "GET" });
      if (t.ok) {
        const n = [], r = await t.json();
        for (const a of r)
          n.push({
            name: a.name,
            uri: new URL(a.url),
            data: null
          });
        return n;
      } else
        throw new Error(t.statusText);
    } catch (e) {
      throw console.log(e), new Error("Resource could not find entities");
    }
  }
  async getEntityByUri(e) {
    try {
      const t = new URL(this.uri ?? ""), n = e.pathname;
      t.pathname = t.pathname + "/" + this.findEndpointPath?.replace(":id", n);
      const r = await fetch(t, { method: "GET" });
      if (r.ok) {
        const a = await r.json();
        return {
          name: n,
          uri: t,
          data: a
        };
      } else
        throw new Error(r.statusText);
    } catch (t) {
      throw console.log(t), new Error("Resource could not find entities");
    }
  }
  async update(e) {
    try {
      const t = new URL(this.uri ?? ""), n = e.uri.pathname;
      t.pathname = t.pathname + "/" + this.updateEndpointPath?.replace(":id", n);
      const r = await fetch(t, { method: "DELETE" });
      if (r.ok)
        return !0;
      throw new Error(r.statusText);
    } catch (t) {
      return console.log(t), new Error("Resource could not deleted");
    }
  }
}
const i = p("RestRepository"), E = Symbol.for(i);
function d({ services: o }) {
  o.register(i, new s()), o.getRequired(l).registerRepoType(s.type, E);
}
function h({ services: o }) {
  o.unregister(i);
}
const w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  REST_REPOSITORY: i,
  activate: d,
  deactivate: h
}, Symbol.toStringTag, { value: "Module" })), c = "org.eclipse.daanse.board.app.lib.persistence.rest", f = "0.0.1-next.1";
async function P(o) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${c}: tsm runtime is not initialized`);
  e.register(c, w, f, "lib.persistence.rest"), await d?.(o);
}
async function T(o) {
  await h?.(o);
}
export {
  i as REST_REPOSITORY,
  P as activate,
  T as deactivate
};
