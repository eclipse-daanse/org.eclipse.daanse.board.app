<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script lang="ts" setup>
import { useDatasourceRepository, useEObject, useTranslation, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { inject, toRefs, ref, watch, computed, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';
import { useVariableRepository } from "org.eclipse.daanse.board.app.ui.vue.composables"

const { wrapParameters } = useVariableRepository();
const { t } = useTranslation('tableData');

const props = defineProps<{ datasourceId: string, config: any, id?: string }>();
const { datasourceId, config, id: widgetId } = toRefs(props);


/*
 * The settings, watched rather than read off the prop.
 *
 * Widget.config is an attribute, not a containment, so the adapter the
 * wrapper holds on the widget never hears a write inside this object - and
 * the wrapper hands this component the same instance on every change, which
 * is not a prop change Vue acts on. A setting ticked in the open dialog
 * reached the table only once the dialog was reopened (#1203). Watching the
 * instance itself is what makes a write inside it a change here; the reads
 * below go through `settings`, the writes on mount still go to `config`.
 */
const settings = useEObject<DataTableSettings>(() => config.value)

import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events';
import {
    DataTableWidgetInterface,
    type DataTableColumnMatch,
    type DataTableRowMatch,
} from './api/DataTableWidgetInterface';
import type { DataTableSettings } from './gen/DataTableSettings';
import { DataTableRowPayloadImpl } from './gen/DataTableRowPayloadImpl';
import { DataTableCellPayloadImpl } from './gen/DataTableCellPayloadImpl';
import { DataTableColumnPayloadImpl } from './gen/DataTableColumnPayloadImpl';

const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!;
const actionsRegistry = inject<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)!;

const route = useRoute();
const pageId = (route.params.pageid as string) || '';

class DataTableWidgetApi extends DataTableWidgetInterface {
    refresh(): void {
        update(datasourceId.value, datasourceId.value);
    }

    highlightRow(match: DataTableRowMatch | string, value?: unknown): void {
        const row = rowMarkOf(match, value);
        if (row) marks.value = { ...marks.value, row };
    }

    highlightColumn(column: DataTableColumnMatch): void {
        if (isGiven(column)) marks.value = { ...marks.value, column };
    }

    highlightCell(row: DataTableRowMatch | string, column: DataTableColumnMatch, value?: unknown): void {
        const where = rowMarkOf(row, value);
        if (where && isGiven(column)) marks.value = { ...marks.value, cell: { row: where, column } };
    }

    clearHighlight(): void {
        marks.value = {};
    }
}
const api = new DataTableWidgetApi();
defineExpose<DataTableWidgetInterface>(api);

onUnmounted(() => { if (widgetId?.value) actionsRegistry.unregisterInstance(widgetId.value); });

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:DataTableWidget:click', {
        type: 'widget:DataTableWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:DataTableWidget:right_click', {
        type: 'widget:DataTableWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

/*
 * What a row, a cell or a header click hands on: the record and where it
 * sits, as the modelled payloads declare them (#1221). A rule on a row
 * click wants a value of that row, and an id it would have to look up
 * again gave it none.
 *
 * Both indices count the answer as it came - see the model for why a sort
 * or a hidden column moves neither.
 */
const rowPayload = (row: Record<string, unknown>) => {
    const payload = new DataTableRowPayloadImpl();
    payload.widgetId = widgetId!.value!;
    payload.timestamp = Date.now();
    payload.row = row;
    payload.rowIndex = rows.value.indexOf(row);
    return payload;
};

const cellPayload = (row: Record<string, unknown>, column: string) => {
    const payload = new DataTableCellPayloadImpl();
    payload.widgetId = widgetId!.value!;
    payload.timestamp = Date.now();
    payload.row = row;
    payload.rowIndex = rows.value.indexOf(row);
    payload.column = column;
    payload.columnIndex = allColumns.value.indexOf(column);
    payload.value = row[column];
    return payload;
};

const columnPayload = (column: string) => {
    const payload = new DataTableColumnPayloadImpl();
    payload.widgetId = widgetId!.value!;
    payload.timestamp = Date.now();
    payload.column = column;
    payload.columnIndex = allColumns.value.indexOf(column);
    return payload;
};

const emitWith = (event: string, payload: object) => {
    const type = `widget:DataTableWidget:${event}`;
    eventBus.emit(type, { type, widgetId: widgetId!.value, payload });
};

const emitRowClick = (row: Record<string, unknown>) => {
    if (!widgetId?.value) return;
    emitWith('row_click', rowPayload(row));
};

const emitRowRightClick = (row: Record<string, unknown>) => {
    if (!widgetId?.value) return;
    emitWith('row_right_click', rowPayload(row));
};

const emitColumnClick = (column: string) => {
    if (!widgetId?.value) return;
    emitWith('col_click', columnPayload(column));
};

const emitColumnRightClick = (column: string) => {
    if (!widgetId?.value) return;
    emitWith('col_right_click', columnPayload(column));
};

const emitCellClick = (row: Record<string, unknown>, column: string) => {
    if (!widgetId?.value) return;
    emitWith('cell_click', cellPayload(row, column));
};

const emitCellRightClick = (row: Record<string, unknown>, column: string) => {
    if (!widgetId?.value) return;
    emitWith('cell_right_click', cellPayload(row, column));
};

const data = ref(null as any);

watch(datasourceId, (newVal, oldVal) => {
  update(newVal, oldVal);
})

onMounted(() => {
    if (widgetId?.value) actionsRegistry.registerInstance(widgetId.value, api, 'DataTableWidget', pageId);
    if (!config.value) return;
    const current = config.value.headerBackground;
    if (current === undefined || current === null) {
        config.value.headerBackground = new VariableWrapper('var(--color-raised)');
    } else if (current instanceof VariableWrapper) {
        // Already correct instance
    } else if (typeof current === 'object' && 'value' in current) {
        // Rehydrate from JSON object
        const v = new VariableWrapper(current.value);
        if ('variable' in current) v.variable = current.variable;
        config.value.headerBackground = v;
    } else {
        // Upgrade primitive to wrapper
        config.value.headerBackground = new VariableWrapper(current);
    }
});

const {
    headerBackground,
} = wrapParameters({
    headerBackground: computed(() => (settings.value?.headerBackground as any)?.value || 'var(--color-raised)'),
});

const { update } = useDatasourceRepository(datasourceId, 'DataTable', data)

/**
 * The rows as they arrive, and the columns their first row names.
 *
 * The datasource hands back plain records; which columns there are is what
 * the first one has. Writing the table out means a cell knows its row and
 * its column - the events below say which was clicked without anything
 * having to count table cells afterwards.
 */
const rows = computed<Record<string, unknown>[]>(() => data.value?.items ?? [])

/*
 * Named by what is left out, not by what is kept.
 *
 * An answer that grows a column later shows it, rather than quietly
 * dropping it because nobody went back to tick it. A stored board holds
 * the list as a plain array and a live settings object as an EList;
 * both are iterable.
 */
const hidden = computed<Set<string>>(() => {
    const held = settings.value?.hiddenColumns
    if (!held) return new Set()
    return new Set(Array.from(held as Iterable<string>))
})

const allColumns = computed<string[]>(() => Object.keys(rows.value[0] ?? {}))
const columns = computed<string[]>(() => allColumns.value.filter((column) => !hidden.value.has(column)))

/*
 * The marks a rule has set (#1222).
 *
 * Runtime state, held here and nowhere else: a mark says what somebody on
 * the board is pointing at right now, which is not something a saved board
 * should remember. Each is kept as it was asked for - an index or a key -
 * and resolved against the rows as they are, so a new answer is searched
 * again rather than marking whatever now sits at the old place.
 */
type RowMark = { index: number } | { column: string; value: unknown };

const marks = ref<{
    row?: RowMark;
    column?: DataTableColumnMatch;
    cell?: { row: RowMark; column: DataTableColumnMatch };
}>({});

/* An argument a rule left empty arrives as undefined, or as '' from a typed field. */
const isGiven = (value: unknown) => value !== undefined && value !== null && value !== '';

/*
 * The two forms of a row, from whatever a rule hands over: an object with a
 * key, a key column followed by its value, or an index - typed into the
 * rule dialog, an index is a string, and is read as a number.
 */
const rowMarkOf = (match: unknown, value?: unknown): RowMark | undefined => {
    if (match && typeof match === 'object' && 'column' in match) {
        const key = match as { column: unknown; value?: unknown };
        return { column: String(key.column), value: key.value };
    }
    if (isGiven(value) && typeof match === 'string') return { column: match, value };
    if (!isGiven(match)) return undefined;
    const index = Number(match);
    return Number.isInteger(index) && index >= 0 ? { index } : undefined;
};

/*
 * Equal as the screen shows them: a value typed into a rule is a string,
 * and the cell it is meant to find may hold the number.
 */
const sameValue = (left: unknown, right: unknown) =>
    left === right || (isGiven(left) && isGiven(right) && String(left) === String(right));

/** The records a row mark means, in the answer as it came. */
const rowsMarkedBy = (mark: RowMark | undefined): Set<Record<string, unknown>> => {
    if (!mark) return new Set();
    if ('index' in mark) {
        const row = rows.value[mark.index];
        return new Set(row ? [row] : []);
    }
    return new Set(rows.value.filter((row) => sameValue(row[mark.column], mark.value)));
};

/*
 * A column by name where the answer has one by that name, otherwise by its
 * index among all columns - hidden ones counted, as columnIndex counts them.
 */
const columnMarkedBy = (mark: DataTableColumnMatch | undefined): string | undefined => {
    if (!isGiven(mark)) return undefined;
    const name = String(mark);
    if (allColumns.value.includes(name)) return name;
    const index = Number(mark);
    return Number.isInteger(index) ? allColumns.value[index] : undefined;
};

const markedRows = computed(() => rowsMarkedBy(marks.value.row));
const markedColumn = computed(() => columnMarkedBy(marks.value.column));
const markedCellRows = computed(() => rowsMarkedBy(marks.value.cell?.row));
const markedCellColumn = computed(() => columnMarkedBy(marks.value.cell?.column));

/* A cell is marked when it is asked for, and where a marked row crosses a marked column. */
const isMarkedCell = (row: Record<string, unknown>, column: string) =>
    (markedCellColumn.value === column && markedCellRows.value.has(row)) ||
    (markedColumn.value === column && markedRows.value.has(row));

const showHeader = computed<boolean>(() => settings.value?.showHeader !== false)
const sortable = computed<boolean>(() => settings.value?.sortable === true)
const pageSize = computed<number>(() => Math.max(0, Math.floor(Number(settings.value?.pageSize) || 0)))

/** Which column the rows are ordered by, and which way. Nothing, until asked. */
const sortedBy = ref<{ column: string; descending: boolean } | undefined>(undefined)

/*
 * A header click sorts and still announces itself.
 *
 * The event was there first and a board may be built on it, so sorting is
 * added beside it rather than in its place - and only where the setting
 * says so, which is why it is off by default.
 */
const onHeaderClick = (column: string) => {
    emitColumnClick(column)
    if (!sortable.value) return
    const held = sortedBy.value
    sortedBy.value =
        held?.column === column && !held.descending
            ? { column, descending: true }
            : held?.column === column
              ? undefined
              : { column, descending: false }
}

/*
 * Numbers by size, everything else as text.
 *
 * A column of counts sorted as text puts 100 before 99, which is the one
 * thing someone sorting a column of counts is trying to find out.
 */
const compare = (left: unknown, right: unknown): number => {
    if (left === right) return 0
    if (left === undefined || left === null) return -1
    if (right === undefined || right === null) return 1

    const asNumbers = [Number(left), Number(right)]
    if (asNumbers.every((value) => !Number.isNaN(value)) && String(left).trim() !== '' && String(right).trim() !== '') {
        return asNumbers[0] - asNumbers[1]
    }
    return String(left).localeCompare(String(right), undefined, { numeric: true })
}

const ordered = computed<Record<string, unknown>[]>(() => {
    const by = sortedBy.value
    if (!sortable.value || !by) return rows.value
    /* Copied before sorting: the array is the store's answer, and the
      other readers of it did not ask for a new order. */
    const sorted = [...rows.value].sort((a, b) => compare(a[by.column], b[by.column]))
    return by.descending ? sorted.reverse() : sorted
})

const page = ref(0)

const pageCount = computed(() =>
    pageSize.value > 0 ? Math.max(1, Math.ceil(ordered.value.length / pageSize.value)) : 1,
)

/* A page that is no longer there - a smaller answer, a larger page size -
  lands on the last one rather than on nothing. */
watch([pageCount, pageSize], () => {
    if (page.value > pageCount.value - 1) page.value = pageCount.value - 1
})

/* A new answer is read from the top. */
watch(rows, () => {
    page.value = 0
})

const shownRows = computed<Record<string, unknown>[]>(() => {
    if (pageSize.value <= 0) return ordered.value
    const from = page.value * pageSize.value
    return ordered.value.slice(from, from + pageSize.value)
})

/** The row's place in the shown order, which keeps a key stable across pages. */
const rowIdOf = (indexOnPage: number) => String(page.value * pageSize.value + indexOnPage)

const firstShown = computed(() => (ordered.value.length ? page.value * pageSize.value + 1 : 0))
const lastShown = computed(() => Math.min((page.value + 1) * pageSize.value, ordered.value.length))
</script>
<template>
    <div class="table_container" @click="emitClick" @contextmenu.prevent="emitRightClick">
        <!-- The rows scroll, the pager below them does not. -->
        <div class="table_scroll">
            <table class="table" :style="{ '--header-background': headerBackground }">
                <thead v-if="showHeader">
                    <tr>
                        <th
                            v-for="column in columns"
                            :key="column"
                            :class="{ sortable, sorted: sortedBy?.column === column, marked_column: markedColumn === column }"
                            :aria-sort="
                                sortedBy?.column === column
                                    ? sortedBy.descending
                                        ? 'descending'
                                        : 'ascending'
                                    : sortable
                                      ? 'none'
                                      : undefined
                            "
                            @click="onHeaderClick(column)"
                            @contextmenu.prevent="emitColumnRightClick(column)"
                        >
                            {{ column }}
                            <span v-if="sortable" class="mark" aria-hidden="true">{{
                                sortedBy?.column === column ? (sortedBy.descending ? '▾' : '▴') : '·'
                            }}</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-for="(row, rowIndex) in shownRows"
                        :key="rowIdOf(rowIndex)"
                        :class="{ marked_row: markedRows.has(row) }"
                        @click="emitRowClick(row)"
                        @contextmenu.prevent="emitRowRightClick(row)"
                    >
                        <td
                            v-for="column in columns"
                            :key="column"
                            :class="{ marked_column: markedColumn === column, marked_cell: isMarkedCell(row, column) }"
                            @click="emitCellClick(row, column)"
                            @contextmenu.prevent="emitCellRightClick(row, column)"
                        >
                            {{ row[column] }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Only where a page size says there are pages at all. -->
        <nav v-if="pageSize > 0" class="pagination" :aria-label="t('Pager.label')">
            <span class="page_input">{{
                t('Pager.showing', { from: firstShown, to: lastShown, total: ordered.length })
            }}</span>
            <span>{{ t('Pager.page', { page: page + 1, pages: pageCount }) }}</span>
            <span class="page_steps">
                <button
                    type="button"
                    :disabled="page <= 0"
                    :aria-label="t('Pager.previous')"
                    @click.stop="page = Math.max(0, page - 1)"
                >
                    ‹
                </button>
                <button
                    type="button"
                    :disabled="page >= pageCount - 1"
                    :aria-label="t('Pager.next')"
                    @click.stop="page = Math.min(pageCount - 1, page + 1)"
                >
                    ›
                </button>
            </span>
        </nav>
    </div>
</template>

<style scoped>
.filters {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 1rem;
    padding: 1rem;
    flex-grow: 0;
}

.table_container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.table_container .pagination {
    flex-grow: 0;
    padding: 1rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    align-items: end;
}

.table_container .pagination .page_input {
    justify-self: start;
}

/*
 * The rows scroll, not the widget.
 *
 * A table taller than the widget used to push the pager off the bottom,
 * where it could neither be seen nor pressed. Named rather than put on
 * the table itself: `overflow` does not apply to a table box.
 */
.table_scroll {
    flex: 1 1 auto;
    min-height: 0;
    overflow: auto;
}

.table {
    width: 100%;
    border-collapse: collapse;
    font-family: var(--font-sans);
    font-size: var(--text-sm);
    color: var(--color-fg);
}

/* The header stays put while the rows go past it */
.table th {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 6px 10px;
    text-align: left;
    font-weight: 600;
    background: var(--header-background, var(--color-raised));
    border-bottom: 1px solid var(--color-divider);
    cursor: pointer;
    white-space: nowrap;
}

.table td {
    padding: 5px 10px;
    border-bottom: 1px solid var(--color-divider);
}

.table tbody tr:hover {
    background: var(--color-raised);
}

/*
 * What a rule marked. The row's colour sits on the row, the column's and
 * the cell's on the cells, so the cell where both cross shows its own.
 */
.table tbody tr.marked_row {
    background: var(--marked-row, color-mix(in srgb, var(--color-accent) 18%, transparent));
}

.table td.marked_column {
    background: var(--marked-column, color-mix(in srgb, var(--color-accent) 12%, transparent));
}

.table th.marked_column {
    box-shadow: inset 0 -2px 0 var(--color-accent);
}

.table td.marked_cell {
    background: var(--marked-cell, color-mix(in srgb, var(--color-accent) 40%, transparent));
}

/* A column that cannot be sorted does not offer to be. */
.table th {
    cursor: default;
}

.table th.sortable {
    cursor: pointer;
}

.table th .mark {
    margin-left: 4px;
    opacity: 0.35;
}

.table th.sorted .mark {
    opacity: 1;
    color: var(--color-accent);
}

.table_container .pagination .page_steps {
    justify-self: end;
    display: flex;
    gap: 4px;
}

.table_container .pagination button {
    min-width: 28px;
    padding: 2px 8px;
    font-size: var(--text-sm);
    color: var(--color-fg);
    background: var(--color-raised);
    border: 1px solid var(--color-divider);
    border-radius: var(--radius-xs, 4px);
    cursor: pointer;
}

.table_container .pagination button:disabled {
    opacity: 0.4;
    cursor: default;
}

.loading {
    display: flex;
    height: 100%;
}
</style>
