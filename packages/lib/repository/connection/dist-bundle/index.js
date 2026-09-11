import { CONNECTION_REPOSITORY as s, identifier as u } from "org.eclipse.daanse.board.app.lib.api.connection";
import { CONNECTION_REPOSITORY as O, identifier as w } from "org.eclipse.daanse.board.app.lib.api.connection";
const o = /* @__PURE__ */ new Map();
class y {
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
    o.has(e) && o.delete(e);
  }
  getConnection(e) {
    const n = o.get(e);
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
    return o.forEach((r, i) => {
      e === r && (n = i);
    }), n;
  }
  getConnectionTypeFromConnection(e) {
    const n = this.getConnectionId(e);
    if (n)
      return this.getConnectionType(n);
  }
  registerConnection(e, n, r) {
    const i = this.availableConnections[n];
    if (!i) {
      console.warn(
        `Connection "${e}" not registered: no connection type "${n}". Known types: ${Object.keys(this.availableConnections).join(", ") || "none"}`
      );
      return;
    }
    const C = this.resolveIdentifier(i.Connection)(r);
    o.set(e, C), this.connectionsByType[e] = n;
  }
}
function a({ services: t }) {
  t.register(s, new y(t));
}
function l({ services: t }) {
  t.unregister(s);
}
const f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONNECTION_REPOSITORY: s,
  activate: a,
  deactivate: l,
  identifier: u
}, Symbol.toStringTag, { value: "Module" })), c = "org.eclipse.daanse.board.app.lib.repository.connection", g = "0.0.1-next.1";
async function h(t) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${c}: tsm runtime is not initialized`);
  e.register(c, f, g, "lib.repository.connection"), await a?.(t);
}
async function v(t) {
  await l?.(t);
}
export {
  O as CONNECTION_REPOSITORY,
  h as activate,
  v as deactivate,
  w as identifier
};
