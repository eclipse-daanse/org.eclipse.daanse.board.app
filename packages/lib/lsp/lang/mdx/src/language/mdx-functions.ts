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

export type MdxFunctionCategory =
  | 'aggregation'
  | 'statistics'
  | 'navigation'
  | 'set'
  | 'member'
  | 'tuple'
  | 'metadata'
  | 'numeric'
  | 'string'
  | 'logical'
  | 'kpi'
  | 'time'
  | 'subcube'

export interface MdxFunctionSignature {
  readonly minArgs: number
  readonly maxArgs?: number
  readonly category: MdxFunctionCategory
  readonly discouraged?: string
}

const SIGNATURES: Record<string, MdxFunctionSignature> = {
  // -- Aggregation ---------------------------------------------------------
  // Aggregate delegates the method to the measure's metadata and runs with a
  // systematically downgraded solve order (MDX-specs.md, "Scope Isolation").
  AGGREGATE: { minArgs: 1, maxArgs: 2, category: 'aggregation' },
  SUM: { minArgs: 1, maxArgs: 2, category: 'aggregation' },
  COUNT: { minArgs: 1, maxArgs: 2, category: 'aggregation' },
  DISTINCTCOUNT: { minArgs: 1, maxArgs: 1, category: 'aggregation' },
  AVG: { minArgs: 1, maxArgs: 2, category: 'aggregation' },
  MAX: { minArgs: 1, maxArgs: 2, category: 'aggregation' },
  MIN: { minArgs: 1, maxArgs: 2, category: 'aggregation' },
  MEDIAN: { minArgs: 1, maxArgs: 2, category: 'aggregation' },

  // -- Statistics and regression -------------------------------------------
  STDEV: { minArgs: 1, maxArgs: 2, category: 'statistics' },
  STDEVP: { minArgs: 1, maxArgs: 2, category: 'statistics' },
  VAR: { minArgs: 1, maxArgs: 2, category: 'statistics' },
  VARP: { minArgs: 1, maxArgs: 2, category: 'statistics' },
  COVARIANCE: { minArgs: 2, maxArgs: 3, category: 'statistics' },
  COVARIANCEN: { minArgs: 2, maxArgs: 3, category: 'statistics' },
  CORRELATION: { minArgs: 2, maxArgs: 3, category: 'statistics' },
  LINREGINTERCEPT: { minArgs: 2, maxArgs: 3, category: 'statistics' },
  LINREGSLOPE: { minArgs: 2, maxArgs: 3, category: 'statistics' },
  LINREGR2: { minArgs: 2, maxArgs: 3, category: 'statistics' },
  LINREGPOINT: { minArgs: 3, maxArgs: 4, category: 'statistics' },
  LINREGVARIANCE: { minArgs: 2, maxArgs: 3, category: 'statistics' },
  RANK: { minArgs: 2, maxArgs: 3, category: 'statistics' },

  // -- Hierarchy navigation ------------------------------------------------
  ANCESTOR: { minArgs: 2, maxArgs: 2, category: 'navigation' },
  ANCESTORS: { minArgs: 2, maxArgs: 2, category: 'navigation' },
  CHILDREN: { minArgs: 0, maxArgs: 0, category: 'navigation' },
  COUSIN: { minArgs: 2, maxArgs: 2, category: 'navigation' },
  FIRSTCHILD: { minArgs: 0, maxArgs: 0, category: 'navigation' },
  FIRSTSIBLING: { minArgs: 0, maxArgs: 0, category: 'navigation' },
  LASTCHILD: { minArgs: 0, maxArgs: 0, category: 'navigation' },
  LASTSIBLING: { minArgs: 0, maxArgs: 0, category: 'navigation' },
  LEAD: { minArgs: 1, maxArgs: 1, category: 'navigation' },
  LAG: { minArgs: 1, maxArgs: 1, category: 'navigation' },
  NEXTMEMBER: { minArgs: 0, maxArgs: 0, category: 'navigation' },
  PREVMEMBER: { minArgs: 0, maxArgs: 0, category: 'navigation' },
  PARENT: { minArgs: 0, maxArgs: 0, category: 'navigation' },
  SIBLINGS: { minArgs: 0, maxArgs: 0, category: 'navigation' },

  // -- Set construction and manipulation -----------------------------------
  CROSSJOIN: { minArgs: 2, category: 'set' },
  NONEMPTYCROSSJOIN: { minArgs: 1, category: 'set' },
  UNION: { minArgs: 2, category: 'set' },
  INTERSECT: { minArgs: 2, maxArgs: 3, category: 'set' },
  EXCEPT: { minArgs: 2, maxArgs: 3, category: 'set' },
  EXISTS: { minArgs: 2, maxArgs: 3, category: 'set' },
  DISTINCT: { minArgs: 1, maxArgs: 1, category: 'set' },
  FILTER: { minArgs: 2, maxArgs: 2, category: 'set' },
  GENERATE: { minArgs: 2, maxArgs: 3, category: 'set' },
  HEAD: { minArgs: 1, maxArgs: 2, category: 'set' },
  TAIL: { minArgs: 1, maxArgs: 2, category: 'set' },
  SUBSET: { minArgs: 2, maxArgs: 3, category: 'set' },
  TOPCOUNT: { minArgs: 2, maxArgs: 3, category: 'set' },
  BOTTOMCOUNT: { minArgs: 2, maxArgs: 3, category: 'set' },
  TOPPERCENT: { minArgs: 3, maxArgs: 3, category: 'set' },
  BOTTOMPERCENT: { minArgs: 3, maxArgs: 3, category: 'set' },
  TOPSUM: { minArgs: 3, maxArgs: 3, category: 'set' },
  BOTTOMSUM: { minArgs: 3, maxArgs: 3, category: 'set' },
  HIERARCHIZE: { minArgs: 1, maxArgs: 2, category: 'set' },
  MEMBERS: { minArgs: 0, maxArgs: 1, category: 'set' },
  ADDCALCULATEDMEMBERS: { minArgs: 1, maxArgs: 1, category: 'set' },
  STRIPCALCULATEDMEMBERS: { minArgs: 1, maxArgs: 1, category: 'set' },
  // Recalculates parent totals from the members actually present in the set.
  VISUALTOTALS: { minArgs: 1, maxArgs: 2, category: 'set' },
  UNORDER: { minArgs: 1, maxArgs: 1, category: 'set' },
  EXTRACT: { minArgs: 2, category: 'set' },
  DRILLDOWNLEVEL: { minArgs: 1, maxArgs: 3, category: 'set' },
  DRILLUPLEVEL: { minArgs: 1, maxArgs: 2, category: 'set' },
  DRILLDOWNMEMBER: { minArgs: 2, maxArgs: 3, category: 'set' },
  DRILLUPMEMBER: { minArgs: 2, maxArgs: 2, category: 'set' },
  EXISTING: { minArgs: 1, maxArgs: 1, category: 'set' },
  ROLLUPCHILDREN: { minArgs: 2, maxArgs: 2, category: 'set' },

  // -- Members and tuples --------------------------------------------------
  CURRENTMEMBER: { minArgs: 0, maxArgs: 0, category: 'member' },
  DEFAULTMEMBER: { minArgs: 0, maxArgs: 0, category: 'member' },
  DATAMEMBER: { minArgs: 0, maxArgs: 0, category: 'member' },
  STRTOMEMBER: { minArgs: 1, maxArgs: 2, category: 'member' },
  STRTOSET: { minArgs: 1, maxArgs: 2, category: 'set' },
  STRTOTUPLE: { minArgs: 1, maxArgs: 2, category: 'tuple' },
  STRTOVALUE: { minArgs: 1, maxArgs: 2, category: 'numeric' },
  ITEM: { minArgs: 1, category: 'tuple' },
  VALIDMEASURE: { minArgs: 1, maxArgs: 1, category: 'member' },
  UNKNOWNMEMBER: { minArgs: 0, maxArgs: 0, category: 'member' },

  // -- Metadata ------------------------------------------------------------
  PROPERTIES: { minArgs: 1, maxArgs: 2, category: 'metadata' },
  NAME: { minArgs: 0, maxArgs: 0, category: 'metadata' },
  UNIQUENAME: { minArgs: 0, maxArgs: 0, category: 'metadata' },
  LEVEL: { minArgs: 0, maxArgs: 0, category: 'metadata' },
  LEVELS: { minArgs: 1, maxArgs: 1, category: 'metadata' },
  ORDINAL: { minArgs: 0, maxArgs: 0, category: 'metadata' },
  DIMENSION: { minArgs: 0, maxArgs: 0, category: 'metadata' },
  HIERARCHY: { minArgs: 0, maxArgs: 0, category: 'metadata' },
  VALUE: { minArgs: 0, maxArgs: 0, category: 'metadata' },

  // -- Time intelligence ---------------------------------------------------
  PARALLELPERIOD: { minArgs: 0, maxArgs: 3, category: 'time' },
  PERIODSTODATE: { minArgs: 0, maxArgs: 2, category: 'time' },
  OPENINGPERIOD: { minArgs: 0, maxArgs: 2, category: 'time' },
  CLOSINGPERIOD: { minArgs: 0, maxArgs: 2, category: 'time' },
  LASTPERIODS: { minArgs: 1, maxArgs: 2, category: 'time' },
  MTD: { minArgs: 0, maxArgs: 1, category: 'time' },
  QTD: { minArgs: 0, maxArgs: 1, category: 'time' },
  YTD: { minArgs: 0, maxArgs: 1, category: 'time' },
  WTD: { minArgs: 0, maxArgs: 1, category: 'time' },

  // -- KPIs ----------------------------------------------------------------
  KPIVALUE: { minArgs: 1, maxArgs: 1, category: 'kpi' },
  KPIGOAL: { minArgs: 1, maxArgs: 1, category: 'kpi' },
  KPISTATUS: { minArgs: 1, maxArgs: 1, category: 'kpi' },
  KPITREND: { minArgs: 1, maxArgs: 1, category: 'kpi' },
  KPIWEIGHT: { minArgs: 1, maxArgs: 1, category: 'kpi' },
  KPICURRENTTIMEMEMBER: { minArgs: 1, maxArgs: 1, category: 'kpi' },

  // -- Calculation passes and subcubes -------------------------------------
  CALCULATIONCURRENTPASS: { minArgs: 0, maxArgs: 0, category: 'subcube' },
  CALCULATIONPASSVALUE: { minArgs: 2, maxArgs: 3, category: 'subcube' },
  ROOT: { minArgs: 0, maxArgs: 1, category: 'subcube' },
  LEAVES: { minArgs: 0, maxArgs: 1, category: 'subcube' },
  THIS: { minArgs: 0, maxArgs: 0, category: 'subcube' },
  // Context is not translated into the target cube and the Storage Engine
  // cache is bypassed entirely; Microsoft recommends restructuring the model.
  LOOKUPCUBE: {
    minArgs: 2,
    maxArgs: 2,
    category: 'subcube',
    discouraged:
      'LookupCube bypasses the Storage Engine cache and forces row-by-row Formula Engine evaluation. Prefer placing the measure in the same cube.',
  },

  // -- Logical and scalar --------------------------------------------------
  IIF: { minArgs: 3, maxArgs: 3, category: 'logical' },
  ISEMPTY: { minArgs: 1, maxArgs: 1, category: 'logical' },
  ISANCESTOR: { minArgs: 2, maxArgs: 2, category: 'logical' },
  ISGENERATION: { minArgs: 2, maxArgs: 2, category: 'logical' },
  ISLEAF: { minArgs: 1, maxArgs: 1, category: 'logical' },
  ISSIBLING: { minArgs: 2, maxArgs: 2, category: 'logical' },
  COALESCEEMPTY: { minArgs: 1, category: 'logical' },
  ABS: { minArgs: 1, maxArgs: 1, category: 'numeric' },
  ROUND: { minArgs: 1, maxArgs: 2, category: 'numeric' },
  INT: { minArgs: 1, maxArgs: 1, category: 'numeric' },
  SIGN: { minArgs: 1, maxArgs: 1, category: 'numeric' },
  FORMAT: { minArgs: 1, maxArgs: 2, category: 'string' },
  CAPTION: { minArgs: 0, maxArgs: 0, category: 'string' },
  GENERATESTRING: { minArgs: 2, maxArgs: 3, category: 'string' },
  SETTOSTR: { minArgs: 1, maxArgs: 1, category: 'string' },
  TUPLETOSTR: { minArgs: 1, maxArgs: 1, category: 'string' },
  MEMBERTOSTR: { minArgs: 1, maxArgs: 1, category: 'string' },
  USERNAME: { minArgs: 0, maxArgs: 0, category: 'string' },
  CUSTOMDATA: { minArgs: 0, maxArgs: 0, category: 'string' },
  ERROR: { minArgs: 1, maxArgs: 1, category: 'string' },

  // -- Special-cased in the grammar, listed for completion and arity --------
  DESCENDANTS: { minArgs: 1, maxArgs: 3, category: 'navigation' },
  ORDER: { minArgs: 2, maxArgs: 3, category: 'set' },
}

export function lookupFunction(name: string): MdxFunctionSignature | undefined {
  return SIGNATURES[name.toUpperCase()]
}

export function functionNames(): string[] {
  return Object.keys(SIGNATURES)
}

/**
 * Canonical spelling, for anything a human reads.
 *
 * `SIGNATURES` is keyed in upper case because MDX identifiers are
 * case-insensitive and lookup has to be too. Completion needs the casing
 * Microsoft's reference uses — the same casing every file in `examples/` uses
 * — and it cannot be derived: `TOPCOUNT` title-cases to `Topcount`, not
 * `TopCount`. Hence a second table, kept in step with the first by
 * `test/language/functions.test.ts`.
 */
const DISPLAY_NAMES: Record<string, string> = {
  AGGREGATE: 'Aggregate',
  SUM: 'Sum',
  COUNT: 'Count',
  DISTINCTCOUNT: 'DistinctCount',
  AVG: 'Avg',
  MAX: 'Max',
  MIN: 'Min',
  MEDIAN: 'Median',

  STDEV: 'Stdev',
  STDEVP: 'StdevP',
  VAR: 'Var',
  VARP: 'VarP',
  COVARIANCE: 'Covariance',
  COVARIANCEN: 'CovarianceN',
  CORRELATION: 'Correlation',
  LINREGINTERCEPT: 'LinRegIntercept',
  LINREGSLOPE: 'LinRegSlope',
  LINREGR2: 'LinRegR2',
  LINREGPOINT: 'LinRegPoint',
  LINREGVARIANCE: 'LinRegVariance',
  RANK: 'Rank',

  ANCESTOR: 'Ancestor',
  ANCESTORS: 'Ancestors',
  CHILDREN: 'Children',
  COUSIN: 'Cousin',
  FIRSTCHILD: 'FirstChild',
  FIRSTSIBLING: 'FirstSibling',
  LASTCHILD: 'LastChild',
  LASTSIBLING: 'LastSibling',
  LEAD: 'Lead',
  LAG: 'Lag',
  NEXTMEMBER: 'NextMember',
  PREVMEMBER: 'PrevMember',
  PARENT: 'Parent',
  SIBLINGS: 'Siblings',

  CROSSJOIN: 'Crossjoin',
  NONEMPTYCROSSJOIN: 'NonEmptyCrossjoin',
  UNION: 'Union',
  INTERSECT: 'Intersect',
  EXCEPT: 'Except',
  EXISTS: 'Exists',
  DISTINCT: 'Distinct',
  FILTER: 'Filter',
  GENERATE: 'Generate',
  HEAD: 'Head',
  TAIL: 'Tail',
  SUBSET: 'Subset',
  TOPCOUNT: 'TopCount',
  BOTTOMCOUNT: 'BottomCount',
  TOPPERCENT: 'TopPercent',
  BOTTOMPERCENT: 'BottomPercent',
  TOPSUM: 'TopSum',
  BOTTOMSUM: 'BottomSum',
  HIERARCHIZE: 'Hierarchize',
  MEMBERS: 'Members',
  ADDCALCULATEDMEMBERS: 'AddCalculatedMembers',
  STRIPCALCULATEDMEMBERS: 'StripCalculatedMembers',
  VISUALTOTALS: 'VisualTotals',
  UNORDER: 'Unorder',
  EXTRACT: 'Extract',

  DRILLDOWNLEVEL: 'DrilldownLevel',
  DRILLUPLEVEL: 'DrillupLevel',
  DRILLDOWNMEMBER: 'DrilldownMember',
  DRILLUPMEMBER: 'DrillupMember',
  EXISTING: 'Existing',
  ROLLUPCHILDREN: 'RollupChildren',

  CURRENTMEMBER: 'CurrentMember',
  DEFAULTMEMBER: 'DefaultMember',
  DATAMEMBER: 'DataMember',
  STRTOMEMBER: 'StrToMember',
  STRTOSET: 'StrToSet',
  STRTOTUPLE: 'StrToTuple',
  STRTOVALUE: 'StrToValue',
  ITEM: 'Item',
  VALIDMEASURE: 'ValidMeasure',
  UNKNOWNMEMBER: 'UnknownMember',

  PROPERTIES: 'Properties',
  NAME: 'Name',
  UNIQUENAME: 'UniqueName',
  LEVEL: 'Level',
  LEVELS: 'Levels',
  ORDINAL: 'Ordinal',
  DIMENSION: 'Dimension',
  HIERARCHY: 'Hierarchy',
  VALUE: 'Value',

  PARALLELPERIOD: 'ParallelPeriod',
  PERIODSTODATE: 'PeriodsToDate',
  OPENINGPERIOD: 'OpeningPeriod',
  CLOSINGPERIOD: 'ClosingPeriod',
  LASTPERIODS: 'LastPeriods',
  MTD: 'Mtd',
  QTD: 'Qtd',
  YTD: 'Ytd',
  WTD: 'Wtd',

  KPIVALUE: 'KpiValue',
  KPIGOAL: 'KpiGoal',
  KPISTATUS: 'KpiStatus',
  KPITREND: 'KpiTrend',
  KPIWEIGHT: 'KpiWeight',
  KPICURRENTTIMEMEMBER: 'KpiCurrentTimeMember',

  CALCULATIONCURRENTPASS: 'CalculationCurrentPass',
  CALCULATIONPASSVALUE: 'CalculationPassValue',
  ROOT: 'Root',
  LEAVES: 'Leaves',
  THIS: 'This',
  LOOKUPCUBE: 'LookupCube',

  IIF: 'IIf',
  ISEMPTY: 'IsEmpty',
  ISANCESTOR: 'IsAncestor',
  ISGENERATION: 'IsGeneration',
  ISLEAF: 'IsLeaf',
  ISSIBLING: 'IsSibling',
  COALESCEEMPTY: 'CoalesceEmpty',

  ABS: 'Abs',
  ROUND: 'Round',
  INT: 'Int',
  SIGN: 'Sign',
  FORMAT: 'Format',
  CAPTION: 'Caption',
  GENERATESTRING: 'GenerateString',
  SETTOSTR: 'SetToStr',
  TUPLETOSTR: 'TupleToStr',
  MEMBERTOSTR: 'MemberToStr',
  USERNAME: 'UserName',
  CUSTOMDATA: 'CustomData',
  ERROR: 'Error',

  DESCENDANTS: 'Descendants',
  ORDER: 'Order',
}

export function functionDisplayName(name: string): string {
  return DISPLAY_NAMES[name.toUpperCase()] ?? name
}

export const INTRINSIC_MEMBER_PROPERTIES = new Set([
  'MEMBER_CAPTION',
  'MEMBER_NAME',
  'MEMBER_UNIQUE_NAME',
  'MEMBER_TYPE',
  'MEMBER_VALUE',
  'LEVEL_NUMBER',
  'LEVEL_UNIQUE_NAME',
  'CHILDREN_CARDINALITY',
  'PARENT_UNIQUE_NAME',
  'PARENT_LEVEL',
  'PARENT_COUNT',
  'IS_DATAMEMBER',
  'IS_PLACEHOLDERMEMBER',
  'DIMENSION_UNIQUE_NAME',
  'HIERARCHY_UNIQUE_NAME',
  'CATALOG_NAME',
  'CUBE_NAME',
  'DESCRIPTION',
])

export const CELL_PROPERTIES = new Set([
  'VALUE',
  'FORMATTED_VALUE',
  'FORMAT_STRING',
  'LANGUAGE',
  'BACK_COLOR',
  'FORE_COLOR',
  'FONT_NAME',
  'FONT_SIZE',
  'FONT_FLAGS',
  'CELL_ORDINAL',
  'ACTION_TYPE',
  'UPDATEABLE',
])

export const CALCULATED_MEMBER_PROPERTIES = new Set([
  'SOLVE_ORDER',
  'FORMAT_STRING',
  'VISIBLE',
  'NON_EMPTY_BEHAVIOR',
  'CAPTION',
  'DISPLAY_FOLDER',
  'ASSOCIATED_MEASURE_GROUP',
  'SCOPE_ISOLATION',
  'LANGUAGE',
  'BACK_COLOR',
  'FORE_COLOR',
  'FONT_NAME',
  'FONT_SIZE',
  'FONT_FLAGS',
  'MEASURE_NAME',
  'DESCRIPTION',
  'GOAL',
  'STATUS',
  'TREND',
  'STATUS_GRAPHIC',
  'TREND_GRAPHIC',
  'CURRENT_TIME_MEMBER',
  'PARENT_KPI_NAME',
  'WEIGHT',
])

export const DEPRECATED_MEMBER_PROPERTIES = new Set(['NON_EMPTY_BEHAVIOR'])
