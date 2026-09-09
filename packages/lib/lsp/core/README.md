# `org.eclipse.daanse.board.app.lib.lsp.core`

The LSP plumbing every language and every editor component sits on. Knows no
language and no editor.

## Two entry points, and why

The grammar, the parsers and the validators must never reach the main bundle —
they belong in the worker. So this package is split along that boundary:

| entry | contents | imported from |
| --- | --- | --- |
| `org.eclipse.daanse.board.app.lib.lsp.core` | the language-client registry, the worker transport, the `LanguageDescriptor` contract, the `langium/ast` wire types | the main bundle |
| `org.eclipse.daanse.board.app.lib.lsp.server` | the parse-tree serializer and the `langium/ast` request handler | inside a worker only |

`src/ast-protocol.ts` is what makes that split work: the request name and the
result types, importing nothing but LSP types, so both halves share one
definition. Before the split the client re-declared the request name by hand
with a comment explaining that importing it would drag Langium in.

You can check the boundary held. In a production build the only `langium`
string in the main chunk is `langium/ast`, and there is no `chevrotain`.

## `LanguageDescriptor`

The one contract between a language package and everything that renders it.
UI components take a descriptor as a prop and never import a language, so
adding a language is a new package plus one import in the consumer.

```ts
interface LanguageDescriptor {
    id: string                        // matches langium-config.json
    label: string
    description: string
    extensions: string[]              // the server resolves on these
    support: () => LanguageSupport    // CodeMirror highlighting
    createServerWorker: () => Worker  // spawns the language server
    examples?: LanguageExample[]
    hasOutline?: boolean              // is documentSymbol worth offering
}
```

`createServerWorker` is why this is an object of functions rather than data.
Worker URL resolution is bundler-specific; each language package owns that line
behind this call. The cost is that consumers must use Vite — deliberate, and
the alternative was every consumer knowing the `?worker&url` syntax.

`hasOutline` exists because Langium's default `documentSymbol` provider emits a
row per named node, which for some grammars is a flat list of every identifier
in the document — worse than no outline. A language opts in.

## The transport

`@codemirror/lsp-client` deals in **JSON strings**, headerless. Langium's
`BrowserMessageReader`/`BrowserMessageWriter` deal in **structured-cloned
objects**. That is the entire mismatch, and `worker-transport.ts` is the entire
fix: one `JSON.parse` outbound, one `JSON.stringify` inbound.

There is no `Content-Length` framing anywhere in this path — `postMessage`
already delimits messages, which is why neither side needs it.

## The client registry

One language server per language, each in its own worker, started on first use
and shared by every editor thereafter. Which languages exist is not known
here — a descriptor brings its own `createServerWorker()`, so this registry
holds no table of languages. That table was the thing that made adding a
language a change to shared code.

`startLanguageClient()` resolves only after `initialize`/`initialized` have been
exchanged, so the first document is opened against a server that has already
advertised its capabilities.

## The `langium/ast` request

Non-standard, and deliberately outside the LSP namespace so it collides with
nothing Langium binds. It returns the parse tree: which grammar rule produced
each node, and which property slot of its parent it landed in. No standard LSP
method can express both — `documentSymbol` has nowhere to put either.

Deliberately language-neutral: the servers run in separate workers and never
share a connection, so one name serves all of them and the client keeps a
single constant.

The AST cannot be sent as-is — `$container`, `$cstNode` and a `Reference`'s
`ref` are all cyclic — so every field is copied explicitly rather than filtered
out of a `JSON.stringify`. What differs per language goes in an
`AstTreeStrategy`.
