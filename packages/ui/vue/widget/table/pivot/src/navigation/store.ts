/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

import { computed, reactive, watch, type Ref } from 'vue'
import {
  measuresOf,
  positionsOf,
  sliceKeys,
  slicesOf,
  type Cellset,
  type SliceRef,
} from 'org.eclipse.daanse.board.app.lib.datasource.xmla'

export type NavigationMode = 'standard' | 'cascade' | 'map' | 'matrix' | 'tree-tabs' | 'compare'
export type CascadeDepth = 'axes' | 'hierarchy'
export type CompareLayout = 'side-by-side' | 'side-by-side-diff' | 'diff-only'
export type DiffType = 'absolute' | 'percent' | 'both'
export type ScaleNormalization = 'global' | 'row' | 'column'

export const MODES: NavigationMode[] = ['standard', 'cascade', 'map', 'matrix', 'tree-tabs', 'compare']

/**
 * What the board keeps: how the widget looks at its data. Where it looks -
 * the slice, the pair compared, the selection - lasts as long as the page.
 */
export interface NavigationSettings {
  mode?: string
  cascadeDepth?: string
  measure?: string
  compareLayout?: string
  diffType?: string
  scaleNormalization?: string
  divergingScale?: boolean
  significanceThreshold?: number
  hideUnchanged?: boolean
  matrixLimit?: number
  /** Tree + tabs: pages through time as a timeline rather than tabs. */
  timeline?: boolean
}

export const sliceId = (slice: SliceRef) => `${slice.axis2}:${slice.axis3}`

function oneOf<T extends string>(value: unknown, allowed: readonly T[], fallback: T): T {
  return allowed.includes(value as T) ? (value as T) : fallback
}

/**
 * The single source of truth for every mode: switching between them
 * changes how the place is shown, never the place.
 */
export function createNavigationStore(cellset: Ref<Cellset | null>, settings: Ref<NavigationSettings>) {
  const state = reactive({
    slice: { axis2: -1, axis3: -1 } as SliceRef,
    compare: {
      a: null as SliceRef | null,
      b: null as SliceRef | null,
      /** With three or more selected: the one the others are compared against. */
      baseline: null as SliceRef | null,
    },
    selection: [] as SliceRef[],
    /** Whether anyone has chosen a slice yet; until then the first one stands in. */
    touched: false,
  })

  const axes = computed(() => cellset.value?.axes.length ?? 0)
  const slices = computed(() => (cellset.value ? slicesOf(cellset.value) : []))
  const hasNavigation = computed(() => axes.value > 2)

  const mode = computed<NavigationMode>({
    get: () => oneOf(settings.value.mode, MODES, 'standard'),
    set: value => {
      settings.value.mode = value
    },
  })
  const cascadeDepth = computed<CascadeDepth>({
    get: () => oneOf(settings.value.cascadeDepth, ['axes', 'hierarchy'] as const, 'axes'),
    set: value => {
      settings.value.cascadeDepth = value
    },
  })
  const compareLayout = computed<CompareLayout>({
    get: () =>
      oneOf(settings.value.compareLayout, ['side-by-side', 'side-by-side-diff', 'diff-only'] as const, 'side-by-side'),
    set: value => {
      settings.value.compareLayout = value
    },
  })
  const diffType = computed<DiffType>({
    get: () => oneOf(settings.value.diffType, ['absolute', 'percent', 'both'] as const, 'absolute'),
    set: value => {
      settings.value.diffType = value
    },
  })
  const scaleNormalization = computed<ScaleNormalization>({
    get: () => oneOf(settings.value.scaleNormalization, ['global', 'row', 'column'] as const, 'global'),
    set: value => {
      settings.value.scaleNormalization = value
    },
  })

  const measures = computed(() => (cellset.value ? measuresOf(cellset.value) : []))
  /** The measure the colours follow: the configured one if the data has it, else the first. */
  const measure = computed<string | undefined>({
    get: () => {
      const configured = settings.value.measure
      if (configured && measures.value.some(m => m.uniqueName === configured)) return configured
      return measures.value[0]?.uniqueName
    },
    set: value => {
      settings.value.measure = value ?? ''
    },
  })

  const exists = (slice: SliceRef | null) =>
    !!slice && slices.value.some(s => s.axis2 === slice.axis2 && s.axis3 === slice.axis3)

  /*
   * New data may not have the slice the old data had. Kept where the same
   * members are still there, else back to the first slice.
   */
  let lastKeys: { axis2: string | null; axis3: string | null } | null = null
  watch(
    cellset,
    (next, previous) => {
      if (!next) return
      const keep = (slice: SliceRef | null): SliceRef | null => {
        if (!slice || !previous) return null
        const keys = sliceKeys(previous, slice)
        const axis2 = keys.axis2 === null ? -1 : positionsOf(next, 2).findIndex(p => p.key === keys.axis2)
        const axis3 = keys.axis3 === null ? -1 : positionsOf(next, 3).findIndex(p => p.key === keys.axis3)
        const moved = { axis2: next.axes.length > 2 ? axis2 : -1, axis3: next.axes.length > 3 ? axis3 : -1 }
        return exists(moved) ? moved : null
      }
      state.slice = keep(state.slice) ?? slices.value[0] ?? { axis2: -1, axis3: -1 }
      state.compare.a = keep(state.compare.a)
      state.compare.b = keep(state.compare.b)
      state.compare.baseline = keep(state.compare.baseline)
      state.selection = state.selection.map(keep).filter((s): s is SliceRef => !!s)
      lastKeys = sliceKeys(next, state.slice)
    },
    { immediate: true },
  )

  function select(slice: SliceRef) {
    if (!exists(slice)) return
    state.slice = { ...slice }
    state.touched = true
    if (cellset.value) lastKeys = sliceKeys(cellset.value, slice)
  }

  function isSelected(slice: SliceRef) {
    return state.selection.some(s => sliceId(s) === sliceId(slice))
  }

  /** Adds a slice or takes it out; at `limit` the oldest makes room. */
  function toggleSelection(slice: SliceRef, limit = Infinity) {
    if (!exists(slice)) return
    state.selection = isSelected(slice)
      ? state.selection.filter(s => sliceId(s) !== sliceId(slice))
      : [...state.selection, { ...slice }].slice(-limit)
  }

  /** Straight to compare with what is selected: two as A and B, more against the first. */
  function compareSelection() {
    const [a, b] = state.selection
    if (!a || !b) return
    state.compare.a = { ...a }
    state.compare.b = { ...b }
    state.compare.baseline = null
    mode.value = 'compare'
  }

  function clearSelection() {
    state.selection = []
  }

  /** A and B for compare: what was picked, else the first two selected, else the current slice and the next. */
  const comparePair = computed<{ a: SliceRef | null; b: SliceRef | null }>(() => {
    const a = state.compare.a ?? state.selection[0] ?? state.slice
    const others = slices.value.filter(s => sliceId(s) !== sliceId(a))
    const b = state.compare.b ?? state.selection.find(s => sliceId(s) !== sliceId(a)) ?? others[0] ?? null
    return { a: exists(a) ? a : null, b: exists(b) ? b : null }
  })

  function setCompare(side: 'a' | 'b', slice: SliceRef) {
    if (!exists(slice)) return
    state.compare[side] = { ...slice }
  }

  function swapCompare() {
    const { a, b } = comparePair.value
    state.compare.a = b
    state.compare.b = a
  }

  function setBaseline(slice: SliceRef | null) {
    state.compare.baseline = slice && exists(slice) ? { ...slice } : null
  }

  /* What the views call; a prop is not written to. */
  const setMode = (value: NavigationMode) => (mode.value = value)
  const setCascadeDepth = (value: CascadeDepth) => (cascadeDepth.value = value)
  const setCompareLayout = (value: CompareLayout) => (compareLayout.value = value)
  const setDiffType = (value: DiffType) => (diffType.value = value)
  const setScaleNormalization = (value: ScaleNormalization) => (scaleNormalization.value = value)
  const setMeasure = (value: string) => (measure.value = value)

  return {
    state,
    axes,
    slices,
    hasNavigation,
    mode,
    cascadeDepth,
    compareLayout,
    diffType,
    scaleNormalization,
    measures,
    measure,
    comparePair,
    select,
    isSelected,
    toggleSelection,
    clearSelection,
    compareSelection,
    setCompare,
    swapCompare,
    setBaseline,
    setMode,
    setCascadeDepth,
    setCompareLayout,
    setDiffType,
    setScaleNormalization,
    setMeasure,
    /** The current slice by unique name, for the outside world. */
    currentKeys: () => lastKeys,
  }
}

export type NavigationStore = ReturnType<typeof createNavigationStore>
