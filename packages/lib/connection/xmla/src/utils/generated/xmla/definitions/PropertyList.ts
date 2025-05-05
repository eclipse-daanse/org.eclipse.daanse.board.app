/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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
/**
 * PropertyList
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface PropertyList {
  /** xsd:string */
  DataSourceInfo?: string;
  /** xsd:integer */
  Timeout?: string;
  /** xsd:string */
  UserName?: string;
  /** xsd:string */
  Password?: string;
  /** xsd:integer */
  LocaleIdentifier?: string;
  /** xsd:string */
  Catalog?: string;
  /** xsd:string|None,Sessions */
  StateSupport?: string;
  /** xsd:string|None,Schema,Data,SchemaData,Metadata */
  Content?: string;
  /** xsd:string|Tabular,Multidimensional,Native */
  Format?: string;
  /** xsd:string|ClusterFormat,CustomFormat,TupleFormat */
  AxisFormat?: string;
  /** xsd:integer */
  BeginRange?: string;
  /** xsd:integer */
  EndRange?: string;
  /** xsd:string|Core */
  MDXSupport?: string;
  /** xsd:string */
  ProviderName?: string;
  /** xsd:string */
  ProviderVersion?: string;
  /** xsd:string */
  DBMSVersion?: string;
  /** xsd:integer|1,2,3,4 */
  ProviderType?: string;
  /** xsd:boolean */
  ShowHiddenCubes?: string;
  /** xsd:integer */
  SQLSupport?: string;
  /** xsd:integer */
  TransactionDDL?: string;
  /** xsd:integer */
  MaximumRows?: string;
  /** xsd:string */
  Roles?: string;
  /** xsd:integer|0,1,2 */
  VisualMode?: string;
  /** xsd:string */
  EffectiveRoles?: string;
  /** xsd:string */
  EffectiveUserName?: string;
  /** xsd:string */
  ServerName?: string;
  /** xsd:integer|1,2 */
  CatalogLocation?: string;
  /** xsd:string */
  DbpropCatalogTerm?: string;
  /** xsd:integer */
  DbpropCatalogUsage?: string;
  /** xsd:integer */
  DbpropColumnDefinition?: string;
  /** xsd:integer|1,2 */
  DbpropConcatNullBehavior?: string;
  /** xsd:boolean */
  DbpropDataSourceReadOnly?: string;
  /** xsd:integer */
  DbpropGroupBy?: string;
  /** xsd:integer */
  DbpropHeterogeneousTables?: string;
  /** xsd:integer */
  DbpropIdentifierCase?: string;
  /** xsd:integer */
  DbpropMaxIndexSize?: string;
  /** xsd:integer */
  DbpropMaxOpenChapters?: string;
  /** xsd:integer */
  DbpropMaxRowSize?: string;
  /** xsd:boolean */
  DbpropMaxRowSizeIncludeBlob?: string;
  /** xsd:integer */
  DbpropMaxTablesInSelect?: string;
  /** xsd:boolean */
  DbpropMultiTableUpdate?: string;
  /** xsd:integer|1,2,4,8 */
  DbpropNullCollation?: string;
  /** xsd:boolean */
  DbpropOrderByColumnsInSelect?: string;
  /** xsd:integer|1,2,4 */
  DbpropOutputParameterAvailable?: string;
  /** xsd:integer|1,2,4,8,16,32,64 */
  DbpropPersistentIdType?: string;
  /** xsd:integer|1,2 */
  DbpropPrepareAbortBehavior?: string;
  /** xsd:integer|1,2 */
  DbpropPrepareCommitBehavior?: string;
  /** xsd:string */
  DbpropProcedureTerm?: string;
  /** xsd:integer|1,2,4,8 */
  DbpropQuotedIdentifierCase?: string;
  /** xsd:integer */
  DbpropSchemaUsage?: string;
  /** xsd:integer */
  DbpropSqlSupport?: string;
  /** xsd:integer */
  DbpropSubqueries?: string;
  /** xsd:integer */
  DbpropSupportedTxnDdl?: string;
  /** xsd:integer */
  MdpropMdxSubqueries?: string;
  /** xsd:integer */
  DbpropSupportedTxnIsoLevels?: string;
  /** xsd:integer */
  DbpropSupportedTxnIsoRetain?: string;
  /** xsd:string */
  DbpropTableTerm?: string;
  /** xsd:integer|0,1,2 */
  MdpropAggregateCellUpdate?: string;
  /** xsd:integer */
  MdpropAxes?: string;
  /** xsd:integer|1,2,3,4 */
  MdpropFlatteningSupport?: string;
  /** xsd:integer */
  MdpropMdxCaseSupport?: string;
  /** xsd:integer */
  MdpropMdxDescFlags?: string;
  /** xsd:integer */
  MdpropMdxDrillFunctions?: string;
  /** xsd:integer */
  MdpropMdxFormulas?: string;
  /** xsd:integer */
  MdpropMdxJoinCubes?: string;
  /** xsd:integer */
  MdpropMdxMemberFunctions?: string;
  /** xsd:integer|0,1 */
  MdpropMdxNonMeasureExpressions?: string;
  /** xsd:integer */
  MdpropMdxNumericFunctions?: string;
  /** xsd:integer */
  MdpropMdxObjQualification?: string;
  /** xsd:integer */
  MdpropMdxOuterReference?: string;
  /** xsd:boolean */
  MdpropMdxQueryByProperty?: string;
  /** xsd:integer|1,2,4 */
  MdpropMdxRangeRowset?: string;
  /** xsd:integer */
  MdpropMdxSetFunctions?: string;
  /** xsd:integer|1,2 */
  MdpropMdxSlicer?: string;
  /** xsd:integer */
  MdpropMdxStringCompop?: string;
  /** xsd:integer */
  MdpropNamedLevels?: string;
  /** xsd:integer|0,1,2,3 */
  DbpropMsmdMDXCompatibility?: string;
  /** xsd:integer */
  DbpropMsmdSQLCompatibility?: string;
  /** xsd:integer */
  DbpropMsmdMDXUniqueNameStyle?: string;
  /** xsd:integer */
  DbpropMsmdCachePolicy?: string;
  /** xsd:integer */
  DbpropMsmdCacheRatio?: string;
  /** xsd:integer */
  DbpropMsmdCacheMode?: string;
  /** xsd:integer|1,2,16,256,4096,65536,1048576 */
  DbpropMsmdCompareCaseSensitiveStringFlags?: string;
  /** xsd:integer */
  DbpropMsmdCompareCaseNotSensitiveStringFlags?: string;
  /** xsd:boolean */
  DbpropMsmdFlattened2?: string;
  /** xsd:integer */
  DbpropInitMode?: string;
  /** xsd:string */
  SspropInitAppName?: string;
  /** xsd:string */
  SspropInitWsid?: string;
  /** xsd:integer */
  SspropInitPacketsize?: string;
  /** xsd:integer */
  ReadOnlySession?: string;
  /** xsd:integer|0,1,2,3,4,5 */
  SecuredCellValue?: string;
  /** xsd:integer */
  NonEmptyThreshold?: string;
  /** xsd:integer|0,1,2,3 */
  SafetyOptions?: string;
  /** xsd:double */
  DbpropMsmdCacheRatio2?: string;
  /** xsd:string */
  DbpropMsmdUseFormulaCache?: string;
  /** xsd:integer */
  DbpropMsmdDynamicDebugLimit?: string;
  /** xsd:string */
  DbpropMsmdDebugMode?: string;
  /** xsd:string|MDX,DMX,SQL */
  Dialect?: string;
  /** xsd:boolean */
  ImpactAnalysis?: string;
  /** xsd:string|Data,Calculated,IncludeEmpty,DataKeys */
  SQLQueryMode?: string;
  /** xsd:integer */
  ClientProcessID?: string;
  /** xsd:string */
  Cube?: string;
  /** xsd:boolean */
  ReturnCellProperties?: string;
  /** xsd:integer */
  CommitTimeout?: string;
  /** xsd:integer */
  ForceCommitTimeout?: string;
  /** xsd:string */
  ExecutionMode?: string;
  /** xsd:boolean */
  RealTimeOlap?: string;
  /** xsd:string|Default,Ignore,Error */
  MdxMissingMemberMode?: string;
  /** xsd:integer */
  MdpropMdxNamedSets?: string;
  /** xsd:integer|0,1,2 */
  DbpropMsmdSubqueries?: string;
  /** xsd:integer|0,1,2,3 */
  DbpropMsmdAutoExists?: string;
  /** xsd:string */
  CustomData?: string;
  /** xsd:boolean */
  DisablePrefetchFacts?: string;
  /** xsd:integer|1,2 */
  UpdateIsolationLevel?: string;
  /** xsd:integer */
  DbpropMsmdErrorMessageMode?: string;
  /** xsd:integer */
  MdpropMdxDdlExtensions?: string;
  /** xsd:string|Default,UTF-8,UTF-16 */
  ResponseEncoding?: string;
  /** xsd:integer|0,1 */
  MemoryLockingMode?: string;
  /** xsd:integer */
  DbpropMsmdOptimizeResponse?: string;
  /** xsd:string */
  DbpropMsmdActivityID?: string;
  /** xsd:string */
  DbpropMsmdRequestID?: string;
  /** xsd:integer */
  ReturnAffectedObjects?: string;
  /** xsd:integer */
  DbpropMsmdRequestMemoryLimit?: string;
  /** xsd:string */
  ApplicationContext?: string;
}
