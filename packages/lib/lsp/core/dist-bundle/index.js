import { AST_REQUEST as l } from "org.eclipse.daanse.board.app.lib.api.lsp";
import { AST_REQUEST as T } from "org.eclipse.daanse.board.app.lib.api.lsp";
import { LSPClient as f, languageServerExtensions as d } from "@codemirror/lsp-client";
function p(e) {
  const { serverWorkerUrl: n, ...t } = e;
  return {
    ...t,
    createServerWorker: () => new Worker(n, {
      type: "module",
      name: `${t.label} Language Server`
    })
  };
}
function u(e) {
  let n = [];
  return e.onmessage = (t) => {
    const r = JSON.stringify(t.data);
    for (const o of n.slice())
      o(r);
  }, {
    send(t) {
      e.postMessage(JSON.parse(t));
    },
    subscribe(t) {
      n.push(t);
    },
    unsubscribe(t) {
      n = n.filter((r) => r !== t);
    }
  };
}
const i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map();
function g(e) {
  const n = c.get(e.id);
  if (n)
    return n;
  const t = (async () => {
    const r = e.createServerWorker();
    s.set(e.id, r);
    const o = new f({
      rootUri: "file:///workspace",
      extensions: d()
    }).connect(u(r));
    return i.set(e.id, o), await o.initializing, o;
  })();
  return c.set(e.id, t), t;
}
function m(e) {
  return i.get(e);
}
function w(e) {
  return i.get(e)?.connected ?? !1;
}
function S() {
  for (const e of i.values())
    e.disconnect();
  for (const e of s.values())
    e.terminate();
  i.clear(), s.clear(), c.clear();
}
function b(e, n) {
  for (; !e.eol(); )
    if (e.next() === n) {
      if (e.peek() === n) {
        e.next();
        continue;
      }
      return !0;
    }
  return !1;
}
function _(e) {
  for (; !e.eol(); ) {
    if (e.match("*/")) return !0;
    e.next();
  }
  return !1;
}
const k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AST_REQUEST: l,
  consumeBlockComment: _,
  consumeDelimited: b,
  defineLanguage: p,
  getLanguageClient: m,
  isLanguageClientConnected: w,
  startLanguageClient: g,
  stopLanguageClients: S,
  workerTransport: u
}, Symbol.toStringTag, { value: "Module" })), a = "org.eclipse.daanse.board.app.lib.lsp.core", v = "0.0.1-next.1";
async function y(e) {
  const n = globalThis.__tsm__;
  if (!n)
    throw new Error(`${a}: tsm runtime is not initialized`);
  n.register(a, k, v, "lib.lsp.core"), await void 0;
}
async function L(e) {
  await void 0;
}
export {
  T as AST_REQUEST,
  y as activate,
  _ as consumeBlockComment,
  b as consumeDelimited,
  L as deactivate,
  p as defineLanguage,
  m as getLanguageClient,
  w as isLanguageClientConnected,
  g as startLanguageClient,
  S as stopLanguageClients,
  u as workerTransport
};
