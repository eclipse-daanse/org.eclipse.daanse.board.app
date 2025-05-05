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
import type { Annotations25 } from "./Annotations25";
import type { Translations4 } from "./Translations4";
import type { Measures1 } from "./Measures1";
import type { Source2 } from "./Source2";
import type { ProactiveCaching } from "./ProactiveCaching";
import type { ErrorConfiguration } from "./ErrorConfiguration";
import type { Dimensions4 } from "./Dimensions4";
import type { Partitions } from "./Partitions";
import type { AggregationDesigns } from "./AggregationDesigns";

/**
 * MeasureGroup
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface MeasureGroup1 {
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
  Annotations?: Annotations25;
  /** xsd:dateTime */
  LastProcessed?: string;
  /** Translations */
  Translations?: Translations4;
  /** xsd:string|Regular,ExchangeRate,Sales,Budget,FinancialReporting,Marketing,Inventory */
  Type?: string;
  /** xsd:string|Processed,PartiallyProcessed,Unprocessed */
  State?: string;
  /** Measures */
  Measures?: Measures1;
  /** xsd:string|None,DataAggregatable,CacheAggregatable,DataAndCacheAggregatable */
  DataAggregation?: string;
  /** Source */
  Source?: Source2;
  /** MeasureGroupStorageModeEnumType|xsd:string|Molap,Rolap,Holap,InMemory */
  StorageMode?: string;
  /** xsd:string */
  StorageLocation?: string;
  /** xsd:boolean */
  IgnoreUnrelatedDimensions?: string;
  /** ProactiveCaching */
  ProactiveCaching?: ProactiveCaching;
  /** xsd:long */
  EstimatedRows?: string;
  /** ErrorConfiguration */
  ErrorConfiguration?: ErrorConfiguration;
  /** xsd:long */
  EstimatedSize?: string;
  /** xsd:string|Regular,LazyAggregations */
  ProcessingMode?: string;
  /** Dimensions */
  Dimensions?: Dimensions4;
  /** Partitions */
  Partitions?: Partitions;
  /** xsd:string */
  AggregationPrefix?: string;
  /** xsd:integer */
  ProcessingPriority?: string;
  /** AggregationDesigns */
  AggregationDesigns?: AggregationDesigns;
}
