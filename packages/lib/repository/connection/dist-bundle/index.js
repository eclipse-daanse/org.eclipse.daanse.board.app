import { CONNECTION_REPOSITORY as c, identifier as u } from "org.eclipse.daanse.board.app.lib.api.connection";
import { CONNECTION_REPOSITORY as O, identifier as _ } from "org.eclipse.daanse.board.app.lib.api.connection";
const i = /* @__PURE__ */ new Map();
class f {
  constructor(e) {
    this.resolver = e;
  }
  /**
   * Resolves one of the identifiers a registered type entry carries
   * (Connection factory, Settings component). All of them are created with
   * Symbol.for, so the symbol's description IS the service id.
   */
  resolveIdentifier(e) {
    return this.resolver.getRequired(e.description);
  }
  availableConnections = {};
  connectionsByType = {};
  removeConnection(e) {
    i.has(e) && i.delete(e);
  }
  getConnection(e) {
    const n = i.get(e);
    if (!n)
      throw new Error(`Connection with id ${e} not found`);
    return n;
  }
  registerConnectionType(e, n) {
    this.availableConnections[e] = n;
  }
  /**
   * Nimmt die Registrierung eines Verbindungstyps zurück.
   *
   * Gegenstück zu registerConnectionType, damit ein Modul seine
   * Registrierung in deactivate() wieder aufheben kann. Betrifft nur den
   * Typ; bestehende Verbindungen werden über removeConnection entfernt.
   *
   * @returns ob der Typ registriert war
   */
  unregisterConnectionType(e) {
    return e in this.availableConnections ? (delete this.availableConnections[e], !0) : !1;
  }
  get registeredConnections() {
    return Object.keys(this.availableConnections);
  }
  getConnectionIdentifiers(e) {
    return this.availableConnections[e];
  }
  getRegisteredTypes() {
    return Object.keys(this.availableConnections);
  }
  getConnectionType(e) {
    return this.connectionsByType[e];
  }
  getConnectionId(e) {
    let n;
    return i.forEach((r, o) => {
      e === r && (n = o);
    }), n;
  }
  getConnectionTypeFromConnection(e) {
    const n = this.getConnectionId(e);
    if (n)
      return this.getConnectionType(n);
  }
  registerConnection(e, n, r) {
    const o = this.availableConnections[n];
    if (o) {
      const C = this.resolveIdentifier(o.Connection)(r);
      i.set(e, C), this.connectionsByType[e] = n;
    }
  }
}
function a({ services: t }) {
  t.register(c, new f(t));
}
function l({ services: t }) {
  t.unregister(c);
}
const y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONNECTION_REPOSITORY: c,
  activate: a,
  deactivate: l,
  identifier: u
}, Symbol.toStringTag, { value: "Module" })), s = "org.eclipse.daanse.board.app.lib.repository.connection", d = "0.0.1-next.1";
async function h(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${s}: tsm runtime is not initialized`);
  e.register(s, y, d, "lib.repository.connection"), await a?.(t);
}
async function v(t) {
  await l?.(t);
}
export {
  O as CONNECTION_REPOSITORY,
  h as activate,
  v as deactivate,
  _ as identifier
};
