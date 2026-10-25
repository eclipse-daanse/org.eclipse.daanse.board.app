# `org.eclipse.daanse.board.app.workbench`

The MDX workbench as a third frame of the board app: a full-screen tool for
working with an XMLA server directly - connect, explore the cube and the
server, write MDX, run it, read the answer, inspect the query's structure.
It follows the standalone MDX workbench feature by feature, built from the
bundles the board already has.

Open it at **`/workbench`**. The launcher (`packages/app/default/src/main.ts`)
registers either this bundle or `app.shell` - both create the Vue app, provide
it as `App` and mount `#app` - and every other bundle is shared.

## What it is made of

| Area | Comes from |
| --- | --- |
| Servers, catalogs, cubes | `XmlaConnection` through the connection repository; the connection form is the board's (`XmlaConnectionSettings`) |
| Request log | `XmlaTraffic` in `lib.connection.xmla`: every request and answer of the page |
| Cube tree, query designer, pivot table, slices, drillthrough, writeback | `ui.vue.common.xmla` (`MetadataTree`, `QueryDesigner`, `PivotTable`, `SlicePicker`) over an `XmlaStore` |
| Server explorer, functions, rowset grid | `ui.vue.common.xmla` (`DiscoverExplorer`, `FunctionBrowser`, `FunctionInfo`, `RowsetGrid`) |
| Editor, AST, CST, problems | `ui.vue.common.lsp` (`Editor`, `AstTreePanel`, `DiagnosticsPanel`) and the shared language server (`langium/ast`, `langium/cst`) |
| MDX: grammar, formatter, quick fixes | `lib.lsp.lang.mdx` |
| Completion, hover and colours of cube names, Alt+M alternatives | `mdxMetadata()` in `lib.lsp.lang.mdx`, fed from the open cube |
| Visual builder | `mdx-select-model.ts` in `lib.lsp.lang.mdx`: the SELECT read from the AST, every action one text edit |
| Cellset, CSV, axis rotation, tabular answers | `lib.datasource.xmla` (`Cellset.ts`, `Tabular.ts`) |
| Chart | the board's chart widget over the chart composer, fed the answer already on screen |
| Tokens and stylesheet | the shell's `main.css` |

## Features

- Servers: demo presets (eMondrian FoodMart and OnTime, four SSAS demo
  endpoints), servers of your own (stored in the browser), catalog and cube
  pickers, LocaleIdentifier sent with every request.
- Explorer: the cube tree with search; the server's rowsets - OLAP (catalogs,
  cubes, catalog rowsets), relational (tables, columns, indexes, keys,
  constraints) and every other Discover rowset `DISCOVER_SCHEMA_ROWSETS`
  declares; all columns of any row; the functions, grouped, with every
  overload.
- Editor: query tabs, Run (Ctrl+Enter) and Stop (Esc), Format, a shareable
  link (`#q=`), examples built from the open cube, completion of cube names
  down to members loaded from the server, hover, names in colour, problems
  with quick fixes.
- Structure: AST and CST kept in step with the caret, a depth to open them
  to, an inspector; the builder (axes, NON EMPTY, swap, WITH, WHERE,
  subcubes, cell properties, drag and drop); the reprint; the designer.
- Results: pivot, grid, chart, one line per cell, the raw answer; any number
  of axes, rotated by dragging; slices for pages and chapters; CSV;
  drillthrough and writeback from the pivot table; rows of DRILLTHROUGH and
  `$SYSTEM` statements.
- History of every run (stored, searchable, rerun, open in a tab) and the
  request log with both SOAP envelopes.

```bash
yarn bundles                                  # or: node scripts/build-bundles.mjs app/workbench
npm run dev --workspace=packages/app/default  # then open http://localhost:5174/workbench
npx vitest run packages/app/workbench
```
