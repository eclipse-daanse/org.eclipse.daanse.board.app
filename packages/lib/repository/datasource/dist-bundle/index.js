import { WORKSPACE as D, DatasourceImpl as l } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { DATASOURCE_REPOSITORY as u, identifier as g } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { DATASOURCE_REPOSITORY as E, identifier as _ } from "org.eclipse.daanse.board.app.lib.api.datasource";
function v(a) {
  return typeof a?.init == "function";
}
const n = /* @__PURE__ */ new Map(), c = ["chart", "datatable"];
class p {
  constructor(e) {
    this.resolver = e;
  }
  availableDatasources = {};
  datasourcesByType = {};
  /*
   * Resolved on first use, not in the constructor: this repository is
   * created while its own module activates, and the workspace may not be
   * registered yet at that point.
   */
  workspaceHeld;
  get workspace() {
    return this.workspaceHeld || (this.workspaceHeld = this.resolver.getRequired(D)), this.workspaceHeld;
  }
  /** See IdentifierResolver: symbol description is the service id. */
  resolveIdentifier(e) {
    return this.resolver.getRequired(e.description);
  }
  /** Lets go of the live store without touching the workspace. */
  dropLive(e) {
    const t = n.get(e);
    t && (t.destroy(), n.delete(e), delete this.datasourcesByType[e]);
  }
  /**
   * Takes a source out of the workspace and lets go of its live store.
   *
   * Both halves, because both existed: the live store used to be left
   * registered when a source was deleted, since the removal happened in a
   * store that knew nothing about it.
   */
  removeDatasource(e) {
    this.dropLive(e);
    const t = this.workspace.datasources, r = t.toArray().findIndex((o) => o.uid === e);
    r > -1 && t.removeAt(r);
  }
  getDatasources() {
    return this.workspace.datasources.toArray();
  }
  getDatasourceModel(e) {
    return this.getDatasources().find((t) => t.uid === e);
  }
  createDatasource(e, t = {}) {
    const r = new l();
    r.uid = Math.random().toString(36).substring(7), r.name = "DataSource " + r.uid, r.type = e, r.config = t, this.workspace.datasources.push(r);
    try {
      this.saveDatasource(r);
    } catch (o) {
      console.warn(`datasource ${r.uid} is not live yet:`, o);
    }
    return r;
  }
  saveDatasource(e) {
    const t = e.config ?? {};
    if (t.uid = e.uid, t.name = e.name, t.type = e.type, e.connection && (t.connection = e.connection.uid), e.config = t, !e.type) return;
    const r = e.uid, o = n.get(r);
    if (o && this.datasourcesByType[r] === e.type && v(o)) {
      o.init(t);
      return;
    }
    this.dropLive(r), this.registerDatasource(r, e.type, t);
  }
  /**
   * Builds a live store for every source the workspace holds.
   *
   * Plain sources first: a derived one resolves against the sources it
   * reads while it is being registered, so they have to be there.
   */
  rebuildLive() {
    const e = this.getDatasources();
    for (const t of e)
      c.includes(t.type) || this.saveDatasource(t);
    for (const t of e)
      c.includes(t.type) && this.saveDatasource(t);
  }
  setDatasources(e) {
    const t = this.workspace.datasources;
    for (const s of t.toArray()) this.dropLive(s.uid);
    t.clear();
    const r = (s) => this.workspace.connections.toArray().find((i) => i.uid === s), o = (s) => {
      const i = new l();
      i.uid = s.uid, i.name = s.name, i.type = s.type, i.config = s.config ?? {};
      const d = r((s.config ?? {}).connection);
      d && (i.connection = d), t.push(i), this.saveDatasource(i);
    };
    for (const s of e)
      c.includes(s.type) || o(s);
    for (const s of e)
      c.includes(s.type) && o(s);
  }
  getDatasource(e) {
    const t = n.get(e);
    if (!t) throw new Error(`Store with id ${e} not found`);
    return t;
  }
  registerDatasourceType(e, t) {
    this.availableDatasources[e] = t;
  }
  /**
   * Nimmt die Registrierung eines Datenquellen-Typs zurück.
   *
   * Gegenstück zu registerDatasourceType, damit ein Modul seine
   * Registrierung in deactivate() wieder aufheben kann. Betrifft nur den
   * Typ; bereits angelegte Instanzen werden über removeDatasource entfernt.
   *
   * @returns ob der Typ registriert war
   */
  unregisterDatasourceType(e) {
    return e in this.availableDatasources ? (delete this.availableDatasources[e], !0) : !1;
  }
  getDataSourceTypes() {
    return Object.keys(this.availableDatasources);
  }
  get registeredDatasources() {
    return Object.keys(this.availableDatasources);
  }
  getDatasourceIdentifiers(e) {
    return this.availableDatasources[e];
  }
  registerDatasource(e, t, r) {
    const o = this.availableDatasources[t];
    if (!o) {
      console.warn(
        `Datasource "${e}" not registered: no datasource type "${t}". Known types: ${Object.keys(this.availableDatasources).join(", ") || "none"}`
      );
      return;
    }
    const i = this.resolveIdentifier(o.Store)(r);
    n.set(e, i), this.datasourcesByType[e] = t;
  }
  getDatasourceType(e) {
    return this.datasourcesByType[e];
  }
  getDatasourceId(e) {
    let t;
    return n.forEach((r, o) => {
      e === r && (t = o);
    }), t;
  }
  getDatasourceTypeFromDatasource(e) {
    const t = this.getDatasourceId(e);
    if (t)
      return this.getDatasourceType(t);
  }
}
function h({ services: a }) {
  a.register(u, new p(a));
}
function y({ services: a }) {
  a.unregister(u);
}
const b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DATASOURCE_REPOSITORY: u,
  DatasourceRepository: p,
  activate: h,
  deactivate: y,
  identifier: g
}, Symbol.toStringTag, { value: "Module" })), f = "org.eclipse.daanse.board.app.lib.repository.datasource", w = "0.0.1-next.1";
async function R(a) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${f}: tsm runtime is not initialized`);
  e.register(f, b, w, "lib.repository.datasource"), await h?.(a);
}
async function O(a) {
  await y?.(a);
}
export {
  E as DATASOURCE_REPOSITORY,
  p as DatasourceRepository,
  R as activate,
  O as deactivate,
  _ as identifier
};
