import { inject as w } from "@eclipse-daanse/tsm";
import { BaseDatasource as R } from "org.eclipse.daanse.board.app.lib.datasource.base";
import { CONNECTION_REPOSITORY as y } from "org.eclipse.daanse.board.app.lib.api.connection";
import m from "org.eclipse.daanse.board.app.lib.utils.helpers";
const { serviceId: g } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
var _ = Object.defineProperty, b = (r, t, n, a) => {
  for (var s = void 0, e = r.length - 1, o; e >= 0; e--)
    (o = r[e]) && (s = o(t, n, s) || s);
  return s && _(t, n, s), s;
};
class d extends R {
  connection;
  resourceUrl = null;
  parseOptions = null;
  skipRowsFromStart = 0;
  skipRowsFromEnd = 0;
  connectionRepository;
  init(t) {
    super.init(t), this.connection = t.connection, this.parseOptions = {
      separators: t.separators
    }, this.skipRowsFromStart = t.skipRowsFromStart ?? 0, this.skipRowsFromEnd = t.skipRowsFromEnd ?? 0, this.resourceUrl = super.initVariable(t.resourceUrl), this.pollingInterval = t.pollingInterval ?? 5e3, this.pollingEnabled && this.startPolling(this.pollingInterval);
  }
  async getOriginalData() {
    const n = await this.connectionRepository.getConnection(
      this.connection
    ).fetch({ url: this.resourceUrl?.value || "" });
    if (!n.ok) return [];
    const a = await n.text();
    return m.csv.parse(a, this.parseOptions || {});
  }
  async getData(t) {
    const a = await this.connectionRepository.getConnection(
      this.connection
    ).fetch({ url: this.resourceUrl?.value || "" });
    if (!a.ok) return null;
    let s = await a.text();
    if (this.skipRowsFromStart > 0 || this.skipRowsFromEnd > 0) {
      const o = s.split(`
`), i = this.skipRowsFromStart, c = this.skipRowsFromEnd > 0 ? o.length - this.skipRowsFromEnd : o.length;
      s = o.slice(i, c).join(`
`);
    }
    const e = m.csv.parse(
      s,
      this.parseOptions || {}
    );
    return e.header = e.header.map((o) => typeof o == "string" ? o.trim() : o), e.rows = e.rows.map(
      (o) => o.map((i) => typeof i == "string" ? i.trim() : i)
    ), e.mappedRows = e.mappedRows.map((o) => {
      const i = {};
      for (const [c, p] of Object.entries(o)) {
        const v = typeof c == "string" ? c.trim() : c;
        i[v] = typeof p == "string" ? p.trim() : p;
      }
      return i;
    }), console.log(e), t === "DataTable" ? {
      headers: e.header,
      items: e.mappedRows,
      rows: e.rows
    } : t == "string" ? JSON.stringify(e) : (console.warn("Invalid data type"), null);
  }
  callEvent(t, n) {
    console.warn(
      `Event "${t}" is not available for this type of store`,
      n
    );
  }
  destroy() {
    this.stopPolling();
  }
  static validateConfiguration(t) {
    return !(!t.connection || !t.resourceUrl);
  }
}
b([
  w(y)
], d.prototype, "connectionRepository");
const l = g("CsvStoreFactory"), O = Symbol.for(l);
function f({ services: r }) {
  r.register(l, (t) => {
    if (!d.validateConfiguration(t))
      throw new Error(
        "Invalid CsvStore configuration. Please provide a valid configuration."
      );
    const n = r.construct(d);
    return n.init(t), n;
  });
}
function h({ services: r }) {
  r.unregister(l);
}
const S = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  CSV_STORE_FACTORY: l,
  activate: f,
  deactivate: h,
  factorySymbol: O
}, Symbol.toStringTag, { value: "Module" })), u = "org.eclipse.daanse.board.app.lib.datasource.csv", E = "0.0.1-next.1";
async function x(r) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${u}: tsm runtime is not initialized`);
  t.register(u, S, E, "lib.datasource.csv"), await f?.(r);
}
async function P(r) {
  await h?.(r);
}
export {
  l as CSV_STORE_FACTORY,
  x as activate,
  P as deactivate,
  O as factorySymbol
};
