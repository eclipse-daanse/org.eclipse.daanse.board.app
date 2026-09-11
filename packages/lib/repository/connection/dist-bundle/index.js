import { WORKSPACE as p, ConnectionImpl as c } from "org.eclipse.daanse.board.app.lib.model.workspace";
import { CONNECTION_REPOSITORY as s, identifier as C } from "org.eclipse.daanse.board.app.lib.api.connection";
import { CONNECTION_REPOSITORY as k, identifier as R } from "org.eclipse.daanse.board.app.lib.api.connection";
const r = /* @__PURE__ */ new Map();
class f {
  constructor(e) {
    this.resolver = e;
  }
  /*
   * Resolved on first use, not in the constructor: this repository is
   * created while its own module activates, and the workspace may not be
   * registered yet at that point.
   */
  workspaceHeld;
  get workspace() {
    return this.workspaceHeld || (this.workspaceHeld = this.resolver.getRequired(p)), this.workspaceHeld;
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
  /**
   * Takes a connection out of the workspace and lets go of its live object.
   *
   * Both halves, because both existed: the live object used to be left
   * registered when a connection was deleted, since the removal happened in
   * a store that knew nothing about it.
   */
  removeConnection(e) {
    r.delete(e), this.connectionsByType[e] = void 0;
    const n = this.workspace.connections, t = n.toArray().findIndex((o) => o.uid === e);
    t > -1 && n.removeAt(t);
  }
  getConnections() {
    return this.workspace.connections.toArray();
  }
  getConnectionModel(e) {
    return this.getConnections().find((n) => n.uid === e);
  }
  createConnection(e, n = {}) {
    const t = new c();
    return t.uid = Math.random().toString(36).substring(7), t.name = "Connection " + t.uid, t.type = e, t.config = n, this.workspace.connections.push(t), this.saveConnection(t), t;
  }
  /**
   * Rebuilds the live object from a connection that was changed.
   *
   * The uid, name and type are copied into the config because that is where
   * a connection's own init() reads them - the one place that happens now,
   * rather than at each caller.
   */
  saveConnection(e) {
    const n = e.config ?? {};
    n.uid = e.uid, n.name = e.name, n.type = e.type, e.config = n, e.type && this.registerConnection(
      e.uid,
      e.type,
      n
    );
  }
  setConnections(e) {
    const n = this.workspace.connections;
    for (const t of n.toArray())
      this.removeConnection(t.uid);
    n.clear();
    for (const t of e) {
      const o = new c();
      o.uid = t.uid, o.name = t.name, o.type = t.type, o.config = t.config ?? {}, n.push(o), this.saveConnection(o);
    }
  }
  getConnection(e) {
    const n = r.get(e);
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
    return r.forEach((t, o) => {
      e === t && (n = o);
    }), n;
  }
  getConnectionTypeFromConnection(e) {
    const n = this.getConnectionId(e);
    if (n)
      return this.getConnectionType(n);
  }
  registerConnection(e, n, t) {
    const o = this.availableConnections[n];
    if (!o) {
      console.warn(
        `Connection "${e}" not registered: no connection type "${n}". Known types: ${Object.keys(this.availableConnections).join(", ") || "none"}`
      );
      return;
    }
    const d = this.resolveIdentifier(o.Connection)(t);
    r.set(e, d), this.connectionsByType[e] = n;
  }
}
function l({ services: i }) {
  i.register(s, new f(i));
}
function u({ services: i }) {
  i.unregister(s);
}
const h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CONNECTION_REPOSITORY: s,
  activate: l,
  deactivate: u,
  identifier: C
}, Symbol.toStringTag, { value: "Module" })), a = "org.eclipse.daanse.board.app.lib.repository.connection", y = "0.0.1-next.1";
async function b(i) {
  const e = globalThis.__tsm__;
  if (!e)
    throw new Error(`${a}: tsm runtime is not initialized`);
  e.register(a, h, y, "lib.repository.connection"), await l?.(i);
}
async function m(i) {
  await u?.(i);
}
export {
  k as CONNECTION_REPOSITORY,
  b as activate,
  m as deactivate,
  R as identifier
};
