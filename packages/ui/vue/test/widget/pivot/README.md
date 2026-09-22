# Pivot Table Widget Dockyard

Runs the real `PivotTableWidget` against a synthetic datasource, for E2E and
performance tests without an XMLA server.

- `src/generator.ts` builds pivot data in the shape `lib.datasource.xmla`
  delivers: crossjoined hierarchies, expand/collapse of members, deterministic
  cell values.
- `src/syntheticDatasource.ts` stands in for the XMLA datasource
  (`getData`, `callEvent`, `subscribe`) and records every event it receives.
- `src/scenarios.ts` holds the tables: `tall` (10 000 x 20), `wide`
  (200 x 1 000), `formats` (2 000 x 200 with conditional formats), `expand`
  (50 members with 150 children each) and `edit` (small, with updateable cells).

The widget and `ui.vue.common.xmla` are loaded from source, so changes show up
without a build. The other packages are used from their `dist`.

## Usage

```bash
cd packages/ui/vue/test/widget/pivot
yarn dev                      # http://localhost:5181/?scenario=tall
                              # or  /?rows=5000&columns=40
yarn test:e2e                 # behaviour tests
PIVOT_PERF_LABEL=after yarn test:perf
```

`test:perf` writes `perf-results/perf-<label>.json`: first render, frame times
while scrolling, expand/collapse times, heap and DOM size after 20 toggles, and
first-render time for growing tables. Steps that take longer than
`PIVOT_PERF_CAP` ms (default 60 000) are recorded as `null`.

To compare against another version of the two packages, point
`PIVOT_SOURCES` at a directory holding `packages/ui/vue/common/xmla/src` and
`packages/ui/vue/widget/table/pivot/src` of that version, for example

```bash
mkdir .other && git archive main packages/ui/vue/common/xmla/src packages/ui/vue/widget/table/pivot/src | tar -x -C .other
PIVOT_SOURCES=.other PIVOT_PORT=5182 yarn dev
PIVOT_PORT=5182 PIVOT_PERF_LABEL=main yarn test:perf
```

The directory has to live inside the repository so that the copied sources
resolve their imports from the workspace `node_modules`.

Set `PW_CHANNEL=chrome` to run with an installed Chrome instead of the
Playwright browser.
