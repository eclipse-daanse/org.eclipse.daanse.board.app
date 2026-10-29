# PivotTableWidget

## Pages and chapters

A query with more than two axes - COLUMNS (0), ROWS (1), PAGES (2), CHAPTERS (3) -
is navigated, not flattened. The table always shows axes 0 and 1; axes 2 and 3
choose which slice of the cellset it shows. The whole cellset is loaded once;
moving between slices never asks the server again.

With two axes the widget is the plain table it always was. With three, every
mode leaves out the chapter level.

> A prototype for comparing ways through the data: virtualisation is replaced by
> a member limit with a search, and keyboard support covers the minimap, the
> tree and the tabs.

### Where the axes come from

- The query designer has two more areas, *Pages* (`ON 2`) and *Chapters* (`ON 3`).
  It refuses a hierarchy that is already on another axis (Mondrian: "appears in
  more than one independent axis") and the measures anywhere but rows or columns,
  and says when pages lack rows and columns or chapters lack pages.
- `getMdxRequest` puts each page or chapter hierarchy on its axis as its filter
  says, or by default as its first level below `(All)` with the level under it,
  so there are parents to step through. No drilldown on these axes.
- Hand-written MDX with `ON 2` / `ON 3` works the same way.
- `XmlaStore.getData('PivotTable')` answers as before, plus `cellset` (every axis
  and cell, see `lib/datasource/xmla/src/utils/Cellset.ts`), `sliceParams` and
  `axisMetadata` (the level and dimension rows that tell time from not-time).

### Modes

| Mode | What it is |
| --- | --- |
| Standard | The table, and over it a dropdown for the page and one for the chapter; child members indented under their parent. The default. The datasource designer's preview picks its slice the same way (`SlicePicker` in `ui.vue.common.xmla`). |
| Cascade | From the top down: a grid of chapters, then of pages, then the table. *By axes* takes each axis in one step; *By hierarchy* steps through an axis level by level (a year, its quarters) and offers a parent as a whole. Breadcrumbs go back to any level. Shift/Ctrl/Cmd-click adds a slice to the selection. |
| Map | The table, and beside it a minimap: pages across, chapters down, each slice coloured. Scale against all slices, per row or per column; two-sided around zero when values go negative. |
| Table | The minimap as the whole view, each slice's value in its cell. A click opens that slice's table in a popover beside the cell; Escape, the cross or a click elsewhere closes it. |
| Tree + tabs | Chapters as a tree (by `PARENT_UNIQUE_NAME`), pages as tabs. A time axis (level type with `MDLEVEL_TYPE_TIME`, or a time dimension) is a timeline instead: a ruler with a tick per period (years tall and named, quarters and months shorter), back, forward and play. The reader switches between timeline and tabs; `timeline` keeps the choice with the board. |
| Compare | Two slices, A and B, picked on the minimap. Side by side, side by side with the difference, or the difference alone; absolute (B − A), percent ((B − A) / \|A\|) or both. Rows and columns are matched by unique name over the union of both. With three or more slices selected, one is the baseline and the others are stepped through against it. |

A slice's colour is the cellset's own total for it where there is one; else its
visible leaf cells added up, marked `Σ`; else nothing - for an empty slice, or
a measure that does not add up (an average, a ratio). Empty cells stay empty,
are hatched rather than pale, and a difference with an empty side reads `n/a`.

### State

One store (`src/navigation/store.ts`) drives every mode, so switching modes keeps
the place:

```ts
{
  mode: 'standard' | 'cascade' | 'map' | 'matrix' | 'tree-tabs' | 'compare',   // kept with the board
  slice: { axis2: number, axis3: number },              // -1 where the axis is absent
  measure: string,                                      // unique name; kept with the board
  compare: { a: SliceRef | null, b: SliceRef | null, baseline: SliceRef | null },
  selection: SliceRef[],
}
```

The board keeps how the widget looks (`mode`, `cascadeDepth`, `measure`,
`compareLayout`, `diffType`, `scaleNormalization`, `divergingScale`,
`significanceThreshold`, `hideUnchanged`, `matrixLimit`); where it looks - the
slice, the pair, the selection - lasts as long as the page. When the data is
reloaded, the slice is found again by unique name.

### Events

On the board's event bus, members by unique name only
(`src/navigation/events.ts`):

| Event | Payload |
| --- | --- |
| `pivot:slice-changed` | `{ source?, target?, axis2: string \| null, axis3: string \| null }` |
| `pivot:selection-changed` | `{ source?, target?, slices: { axis2, axis3 }[] }` |
| `pivot:member-hover` | `{ source?, target?, axis: 2 \| 3, uniqueName: string \| null }` |

A pivot sends them with `source` set to its widget id, and follows
`slice-changed` and `selection-changed` from anyone else - all pivots, or only the
one named in `target`. A member not on its axes is ignored.

### Trying it

```bash
cd packages/ui/vue/test/widget/pivot
npx vite        # http://localhost:5181
```

The harness shows every mode on a cellset recorded from demo.emondrian.com
(FoodMart Sales: two measures × product families × years and quarters × countries
and states, with 1998, Canada and Mexico empty), as four axes or three, dark or
light.
