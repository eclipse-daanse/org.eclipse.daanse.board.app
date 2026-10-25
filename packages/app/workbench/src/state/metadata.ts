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
/*
 * The cube as rows: what completion, the search, the inspector and the
 * function browser read. Asked one rowset after another - a real server
 * answers a burst of parallel Discovers with 503 - and members only for the
 * top level, since an unrestricted MDSCHEMA_MEMBERS on a large cube is tens
 * of megabytes. Deeper members arrive when a tree or completion asks.
 */

export interface CubeMetadata {
  catalog: string
  cube: string
  dimensions: any[]
  hierarchies: any[]
  levels: any[]
  measures: any[]
  measureGroups: any[]
  sets: any[]
  kpis: any[]
  properties: any[]
  members: any[]
  functions: any[]
  /** Rowsets the server says it has, from DISCOVER_SCHEMA_ROWSETS. */
  rowsets: any[]
}

export function emptyMetadata(): CubeMetadata {
  return {
    catalog: '',
    cube: '',
    dimensions: [],
    hierarchies: [],
    levels: [],
    measures: [],
    measureGroups: [],
    sets: [],
    kpis: [],
    properties: [],
    members: [],
    functions: [],
    rowsets: [],
  }
}

type Discover = (requestType: string, restrictions?: Record<string, unknown>) => Promise<any[]>

/* A rowset the server lacks is no metadata, not a failure. */
async function optional(discover: Discover, requestType: string, restrictions?: Record<string, unknown>) {
  try {
    return await discover(requestType, restrictions)
  } catch {
    return []
  }
}

export async function loadCubeMetadata(discover: Discover, catalog: string, cube: string): Promise<CubeMetadata> {
  const scope = { CATALOG_NAME: catalog, CUBE_NAME: cube }
  const result = emptyMetadata()
  result.catalog = catalog
  result.cube = cube
  result.dimensions = await discover('MDSCHEMA_DIMENSIONS', scope)
  result.hierarchies = await discover('MDSCHEMA_HIERARCHIES', scope)
  result.levels = await discover('MDSCHEMA_LEVELS', scope)
  result.measures = await discover('MDSCHEMA_MEASURES', scope)
  result.measureGroups = await optional(discover, 'MDSCHEMA_MEASUREGROUPS', scope)
  result.sets = await optional(discover, 'MDSCHEMA_SETS', scope)
  result.kpis = await optional(discover, 'MDSCHEMA_KPIS', scope)
  result.properties = await optional(discover, 'MDSCHEMA_PROPERTIES', scope)
  result.members = await optional(discover, 'MDSCHEMA_MEMBERS', { ...scope, LEVEL_NUMBER: 0 })
  result.functions = await optional(discover, 'MDSCHEMA_FUNCTIONS')
  result.rowsets = await optional(discover, 'DISCOVER_SCHEMA_ROWSETS')
  return result
}

/** One row per object, with what a search or an inspector shows of it. */
export interface MetadataEntry {
  kind: 'dimension' | 'hierarchy' | 'level' | 'member' | 'measure' | 'set' | 'kpi'
  uniqueName: string
  caption: string
  description?: string
  row: any
}

export function entriesOf(metadata: CubeMetadata): MetadataEntry[] {
  const entry = (kind: MetadataEntry['kind'], uniqueName: unknown, caption: unknown, description: unknown, row: any): MetadataEntry => ({
    kind,
    uniqueName: String(uniqueName ?? ''),
    caption: String(caption || uniqueName || ''),
    description: typeof description === 'string' && description ? description : undefined,
    row,
  })
  const measures = metadata.measures.map(r => entry('measure', r.MEASURE_UNIQUE_NAME, r.MEASURE_CAPTION, r.DESCRIPTION, r))
  /*
   * A measure is also a member of [Measures], and MDSCHEMA_MEMBERS lists it
   * as one: the same name twice, the second time with less to say. The
   * measure is kept.
   */
  const measureNames = new Set(measures.map(m => m.uniqueName.toLowerCase()))
  return [
    ...metadata.dimensions.map(r => entry('dimension', r.DIMENSION_UNIQUE_NAME, r.DIMENSION_CAPTION, r.DESCRIPTION, r)),
    ...metadata.hierarchies.map(r => entry('hierarchy', r.HIERARCHY_UNIQUE_NAME, r.HIERARCHY_CAPTION, r.DESCRIPTION, r)),
    ...metadata.levels.map(r => entry('level', r.LEVEL_UNIQUE_NAME, r.LEVEL_CAPTION, r.DESCRIPTION, r)),
    ...measures,
    ...metadata.sets.map(r => entry('set', `[${String(r.SET_NAME ?? '').replace(/^\[|\]$/g, '')}]`, r.SET_CAPTION ?? r.SET_NAME, r.DESCRIPTION, r)),
    ...metadata.kpis.map(r => entry('kpi', `KPIValue("${r.KPI_NAME}")`, r.KPI_CAPTION ?? r.KPI_NAME, r.KPI_DESCRIPTION, r)),
    ...metadata.members
      .filter(r => !measureNames.has(String(r.MEMBER_UNIQUE_NAME ?? '').toLowerCase()))
      .map(r => entry('member', r.MEMBER_UNIQUE_NAME, r.MEMBER_CAPTION, undefined, r)),
  ].filter(e => e.uniqueName)
}

/** Hits for a search of one letter; longer needles get the full list. */
export const SHORT_SEARCH_LIMIT = 50
export const SEARCH_LIMIT = 200

/*
 * How well an entry matches: the caption itself, then a caption that
 * starts with the needle, a word in it that does, a part of the unique
 * name that does, and last anything that merely contains it. Lower is
 * better; null is no match.
 */
function rankOf(entry: MetadataEntry, needle: string): number | null {
  const caption = entry.caption.toLowerCase()
  const name = entry.uniqueName.toLowerCase()
  /*
   * A cube has few measures and they are what a query starts from: one
   * letter anywhere in a caption or a name finds them ("F", "Profit"), and
   * by name too where the caption is a translation ("Gewinn-Wachstum").
   */
  if (entry.kind === 'measure') {
    const own = String(entry.row?.MEASURE_NAME ?? '').toLowerCase()
    if (caption === needle || name === needle || own === needle) return 0
    if (caption.startsWith(needle) || own.startsWith(needle)) return 1
    if (caption.includes(needle) || own.includes(needle)) return 2
    return null
  }
  if (caption === needle || name === needle) return 0
  if (caption.startsWith(needle)) return 1
  if (caption.split(/[\s_\-.]+/).some(word => word.startsWith(needle))) return 2
  if (name.split(/\]\.\[|\[|\]/).some(part => part.startsWith(needle))) return 3
  // One letter anywhere in a caption is nearly everything; it has to start something.
  if (needle.length > 1 && (caption.includes(needle) || name.includes(needle))) return 4
  return null
}

/**
 * The entries a search finds, best first, in the cube's order within a
 * rank. Every measure that matches is listed; the limit cuts the rest, so
 * a letter that starts a hundred members does not push the measures out.
 */
export function searchEntries(entries: MetadataEntry[], query: string): MetadataEntry[] {
  const needle = query.trim().toLowerCase()
  if (!needle) return []
  const limit = needle.length === 1 ? SHORT_SEARCH_LIMIT : SEARCH_LIMIT
  const hits = entries
    .map((entry, index) => ({ entry, index, rank: rankOf(entry, needle) }))
    .filter((hit): hit is { entry: MetadataEntry; index: number; rank: number } => hit.rank !== null)
    .sort((a, b) => a.rank - b.rank || a.index - b.index)
  const measures = hits.filter(hit => hit.entry.kind === 'measure')
  const rest = hits.filter(hit => hit.entry.kind !== 'measure').slice(0, Math.max(0, limit - measures.length))
  return [...measures, ...rest].sort((a, b) => a.rank - b.rank || a.index - b.index).map(hit => hit.entry)
}

/*
 * Members not loaded yet are found on the server. MDSCHEMA_MEMBERS has no
 * restriction by part of a name, and the cube's members are far too many
 * to fetch, so one statement asks every hierarchy at once: a calculated
 * measure per hierarchy that filters its members by caption and lists the
 * first few as text - one cell each, one request for the whole search.
 * eMondrian answers it for FoodMart's Sales, 46 hierarchies, in well under
 * a second.
 */

/** Members asked from each hierarchy at most. */
export const SERVER_SEARCH_PER_HIERARCHY = 50
/** Below this many members found among those loaded, the server is asked. */
export const SERVER_SEARCH_BELOW = 10
/** A shorter needle matches too much of a large cube to be worth the request. */
export const SERVER_SEARCH_MIN_LENGTH = 2

const FIELD = '\t'
const ROW = '\n'

/** A string literal in MDX: double quotes doubled. */
function mdxString(text: string): string {
  return `"${text.replace(/"/g, '""')}"`
}

/** The hierarchies a member search asks: all but the measures, which are loaded. */
export function searchableHierarchies(metadata: CubeMetadata): string[] {
  return metadata.hierarchies
    .filter(row => Number(row.DIMENSION_TYPE) !== 2 && String(row.HIERARCHY_UNIQUE_NAME ?? '').toLowerCase() !== '[measures]')
    .map(row => String(row.HIERARCHY_UNIQUE_NAME ?? ''))
    .filter(Boolean)
}

/**
 * The statement that finds members whose caption holds the needle, case
 * aside; null when there is nothing to ask. Each cell holds the members as
 * lines of unique name, a tab, caption.
 */
export function memberSearchStatement(cube: string, hierarchies: string[], needle: string, perHierarchy = SERVER_SEARCH_PER_HIERARCHY): string | null {
  const term = needle.trim().toUpperCase()
  if (!cube || !term || !hierarchies.length) return null
  const members = hierarchies.map((hierarchy, index) => {
    const current = `${hierarchy}.CurrentMember`
    const found = `Head(Filter(${hierarchy}.AllMembers, InStr(1, UCase(${current}.Caption), ${mdxString(term)}) > 0), ${perHierarchy})`
    return `  MEMBER [Measures].[__search ${index}] AS Generate(${found}, ${current}.UniqueName || "${FIELD}" || ${current}.Caption, "${ROW}")`
  })
  const columns = hierarchies.map((_, index) => `[Measures].[__search ${index}]`).join(', ')
  return `WITH\n${members.join('\n')}\nSELECT {${columns}} ON COLUMNS\nFROM [${cube.replace(/]/g, ']]')}]`
}

/** The members a cell of that statement lists, as MDSCHEMA_MEMBERS rows. */
export function membersFromSearchCell(text: string, hierarchy: string): any[] {
  return text
    .split(/\r?\n/)
    .map(line => {
      const tab = line.indexOf('\t')
      const uniqueName = (tab < 0 ? line : line.slice(0, tab)).trim()
      const caption = tab < 0 ? '' : line.slice(tab + 1)
      return { MEMBER_UNIQUE_NAME: uniqueName, MEMBER_CAPTION: caption || uniqueName, HIERARCHY_UNIQUE_NAME: hierarchy }
    })
    .filter(row => row.MEMBER_UNIQUE_NAME.startsWith('['))
}

/** Every overload a function has, by its lower-case name. */
export function functionsByName(functions: any[]): Map<string, any[]> {
  const byName = new Map<string, any[]>()
  for (const row of functions) {
    const name = String(row.FUNCTION_NAME ?? '').toLowerCase()
    if (!name) continue
    byName.set(name, [...(byName.get(name) ?? []), row])
  }
  return byName
}
