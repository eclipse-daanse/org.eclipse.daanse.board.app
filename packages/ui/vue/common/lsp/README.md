# `org.eclipse.daanse.board.app.ui.vue.common.lsp`

Vue components over the LSP: the CodeMirror editor, the parse-tree panel, and
the diagnostics list.

**This package knows no language.** It imports no `@olap-editor/lang-*` and has
no table of languages anywhere. Everything language-specific arrives as a
[`LanguageDescriptor`](../core/src/language-descriptor.ts) prop, so a consumer
can mount the editor for a language this package has never heard of.

```vue
<Editor :language="MDX_LANGUAGE" :uri="uri" :text="text" :extensions="extra" />
```

It also knows nothing about cubes. The metadata tree, the connection toolbar
and the results grid are XMLA-shaped, and they live in `@olap-editor/app`.

## Adding behaviour from outside

`extensions` is how a consumer adds editor behaviour this package has no
business knowing about. The playground passes a cube-metadata completion source
that needs an XMLA connection; CodeMirror merges extra sources with the LSP's
own rather than replacing it, which is what keeps grammar keywords and cube
names in one list.

## The session

`createEditorSession()` returns one editing session: the document, the caret,
the parse tree, and the debounce that drives it. Components reach it by
injection rather than by import, so a recursive component (`AstTreeNode.vue`)
can read it without every level passing it down.

Per editor, not per module. Module-level refs are fine for a page with one
editor and wrong for a dashboard that may mount two, or mount one and unmount
it — the second editor would share the first one's caret and parse tree, and an
unmounted one would leave its state behind.

The session owns the `langium/ast` request and its debounce, because a consumer
may need the parse whether or not any panel is mounted.

## Swapping documents

`languageServerSupport` binds a URI at construction time, so changing document
rebuilds the editor rather than reconfiguring it. The server connection itself
is untouched — only `didClose`/`didOpen` are exchanged. Changing *language*
rebuilds too, and re-resolves the client from the new descriptor first, because
a different language means a different server.

The URI must carry one of the descriptor's extensions. Langium's
`ServiceRegistry` picks the language by file extension, not by the `languageId`
field, and a bare path parses to a URI with no scheme: no language is found and
the server silently ignores the document. The client still connects, so the
only symptom is that nothing ever produces a diagnostic or a completion.
`toFileUri` exists for that.

## The parse-tree panel

Two sources, one shape. **AST mode** renders the tree the session holds.
**Outline mode** asks for standard `documentSymbol`, and is offered only when
the descriptor says `hasOutline` — Langium's default provider emits a row per
named node, which for some grammars is worse than nothing. A language switch
that strands the panel in a mode the new language lacks falls back to AST
before the rebuild sees it.

Rows are matched to the caret by range, because document symbols carry nothing
else. Expansion and selection reset when the document or the mode changes, not
on every re-parse — otherwise typing would collapse the tree.

## Diagnostics

There is no second validation path. `@codemirror/lsp-client` feeds
`textDocument/publishDiagnostics` into `@codemirror/lint`'s state field, and
`useDiagnostics` reads that same field. What the panel lists is exactly what
produced the underlines.

Diagnostics arrive as a state-field change rather than a document change, so
the editor drives the refresh from its update listener rather than the panel
watching the text.
