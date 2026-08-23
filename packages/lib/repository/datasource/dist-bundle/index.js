import { DATASOURCE_REPOSITORY as i, identifier as D } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { DATASOURCE_REPOSITORY as O, identifier as R } from "org.eclipse.daanse.board.app.lib.api.datasource";
const a = /* @__PURE__ */ new Map();
class n {
  constructor(e) {
    this.resolver = e;
  }
  availableDatasources = {};
  datasourcesByType = {};
  /** See IdentifierResolver: symbol description is the service id. */
  resolveIdentifier(e) {
    return this.resolver.getRequired(e.description);
  }
  removeDatasource(e) {
    if (a.has(e)) {
      const t = a.get(e);
      console.log(t), t?.destroy(), a.delete(e);
    }
  }
  getDatasource(e) {
    const t = a.get(e);
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
  registerDatasource(e, t, o) {
    const s = this.availableDatasources[t];
    if (s) {
      const d = this.resolveIdentifier(s.Store)(o);
      a.set(e, d), this.datasourcesByType[e] = t;
    }
  }
  getDatasourceType(e) {
    return this.datasourcesByType[e];
  }
  getDatasourceId(e) {
    let t;
    return a.forEach((o, s) => {
      e === o && (t = s);
    }), t;
  }
  getDatasourceTypeFromDatasource(e) {
    const t = this.getDatasourceId(e);
    if (t)
      return this.getDatasourceType(t);
  }
}
function u({ services: r }) {
  r.register(i, new n(r));
}
function l({ services: r }) {
  r.unregister(i);
}
const y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  DATASOURCE_REPOSITORY: i,
  DatasourceRepository: n,
  activate: u,
  deactivate: l,
  identifier: D
}, Symbol.toStringTag, { value: "Module" })), c = "org.eclipse.daanse.board.app.lib.repository.datasource", f = "0.0.1-next.1";
async function h(r) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${c}: tsm runtime is not initialized`);
  e.register(c, y, f, "lib.repository.datasource"), await u?.(r);
}
async function v(r) {
  await l?.(r);
}
export {
  O as DATASOURCE_REPOSITORY,
  n as DatasourceRepository,
  h as activate,
  v as deactivate,
  R as identifier
};
