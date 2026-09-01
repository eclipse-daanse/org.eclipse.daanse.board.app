const h = {
  "@codemirror/state": "6.7.2",
  "@codemirror/view": "6.43.10",
  "@codemirror/language": "6.12.4",
  "@codemirror/commands": "6.9.0",
  "@codemirror/search": "6.5.11",
  "@codemirror/lint": "6.9.7",
  "@codemirror/autocomplete": "6.20.3",
  "@codemirror/lsp-client": "6.2.5",
  "@lezer/highlight": "1.2.3"
};
async function u({ log: e }) {
  const r = globalThis.__tsm__;
  if (!r)
    throw new Error("platform.codemirror: tsm runtime is not initialized");
  const [t, m, c, l, a, s, n, d, p] = await Promise.all([
    import("./codemirror-state.js"),
    import("./codemirror-view.js"),
    import("./codemirror-language.js"),
    import("./codemirror-commands.js"),
    import("./codemirror-search.js"),
    import("./codemirror-lint.js"),
    import("./codemirror-autocomplete.js"),
    import("./codemirror-lsp-client.js"),
    import("./lezer-highlight.js")
  ]), o = [
    ["@codemirror/state", t],
    ["@codemirror/view", m],
    ["@codemirror/language", c],
    ["@codemirror/commands", l],
    ["@codemirror/search", a],
    ["@codemirror/lint", s],
    ["@codemirror/autocomplete", n],
    ["@codemirror/lsp-client", d],
    ["@lezer/highlight", p]
  ];
  for (const [i, g] of o)
    r.register(i, g, h[i], "platform.codemirror");
  e.info(`registered ${o.length} CodeMirror libraries`);
}
export {
  u as activate
};
