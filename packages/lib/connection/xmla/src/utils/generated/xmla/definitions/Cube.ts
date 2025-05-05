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
import type { Annotations6 } from "./Annotations6";
import type { Translations } from "./Translations";
import type { Dimensions2 } from "./Dimensions2";
import type { CubePermissions } from "./CubePermissions";
import type { MdxScripts } from "./MdxScripts";
import type { Perspectives } from "./Perspectives";
import type { MeasureGroups1 } from "./MeasureGroups1";
import type { AggregationInstanceSource } from "./AggregationInstanceSource";
import type { ProactiveCaching } from "./ProactiveCaching";
import type { Kpis1 } from "./Kpis1";
import type { ErrorConfiguration } from "./ErrorConfiguration";
import type { Actions1 } from "./Actions1";

/**
 * Cube
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Cube {
  /** xsd:string */
  Name?: string;
  /** xsd:string */
  ID?: string;
  /** xsd:dateTime */
  CreatedTimestamp?: string;
  /** xsd:dateTime */
  LastSchemaUpdate?: string;
  /** xsd:string */
  Description?: string;
  /** Annotations */
  Annotations?: Annotations6;
  /** xsd:integer */
  Language?: string;
  /** xsd:string */
  Collation?: string;
  /** Translations */
  Translations?: Translations;
  /** Dimensions */
  Dimensions?: Dimensions2;
  /** CubePermissions */
  CubePermissions?: CubePermissions;
  /** MdxScripts */
  MdxScripts?: MdxScripts;
  /** Perspectives */
  Perspectives?: Perspectives;
  /** xsd:string|Processed,PartiallyProcessed,Unprocessed */
  State?: string;
  /** xsd:string */
  DefaultMeasure?: string;
  /** xsd:boolean */
  Visible?: string;
  /** MeasureGroups */
  MeasureGroups?: MeasureGroups1;
  /** Source */
  Source?: AggregationInstanceSource;
  /** xsd:string */
  AggregationPrefix?: string;
  /** xsd:integer */
  ProcessingPriority?: string;
  /** CubeStorageModeEnumType|xsd:string|Molap,Rolap,Holap,InMemory */
  StorageMode?: string;
  /** xsd:string|Regular,LazyAggregations */
  ProcessingMode?: string;
  /** xsd:string|Regular,Lazy */
  ScriptCacheProcessingMode?: string;
  /** xsd:string|IgnoreNone,IgnoreAll */
  ScriptErrorHandlingMode?: string;
  /** xsd:string|1,0 */
  DaxOptimizationMode?: string;
  /** ProactiveCaching */
  ProactiveCaching?: ProactiveCaching;
  /** Kpis */
  Kpis?: Kpis1;
  /** ErrorConfiguration */
  ErrorConfiguration?: ErrorConfiguration;
  /** Actions */
  Actions?: Actions1;
  /** xsd:string */
  StorageLocation?: string;
  /** xsd:long */
  EstimatedRows?: string;
  /** xsd:dateTime */
  LastProcessed?: string;
}
