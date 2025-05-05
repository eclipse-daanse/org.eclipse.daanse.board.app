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
import type { Annotations28 } from "./Annotations28";
import type { Source4 } from "./Source4";
import type { ErrorConfiguration } from "./ErrorConfiguration";
import type { ProactiveCaching } from "./ProactiveCaching";
import type { AggregationInstances } from "./AggregationInstances";
import type { AggregationInstanceSource } from "./AggregationInstanceSource";

/**
 * Partition
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Partition {
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
  Annotations?: Annotations28;
  /** Source */
  Source?: Source4;
  /** xsd:integer */
  ProcessingPriority?: string;
  /** xsd:string */
  AggregationPrefix?: string;
  /** PartitionStorageModeEnumType|xsd:string|Molap,Rolap,Holap,InMemory */
  StorageMode?: string;
  /** xsd:string|Regular,LazyAggregations */
  ProcessingMode?: string;
  /** ErrorConfiguration */
  ErrorConfiguration?: ErrorConfiguration;
  /** xsd:string */
  StorageLocation?: string;
  /** xsd:string */
  RemoteDatasourceID?: string;
  /** xsd:string */
  Slice?: string;
  /** ProactiveCaching */
  ProactiveCaching?: ProactiveCaching;
  /** xsd:string|Data,Writeback */
  Type?: string;
  /** xsd:long */
  EstimatedSize?: string;
  /** xsd:long */
  EstimatedRows?: string;
  /** PartitionCurrentStorageModeEnumType|xsd:string|Molap,Rolap,Holap,InMemory */
  CurrentStorageMode?: string;
  /** xsd:string */
  AggregationDesignID?: string;
  /** AggregationInstances */
  AggregationInstances?: AggregationInstances;
  /** AggregationInstanceSource */
  AggregationInstanceSource?: AggregationInstanceSource;
  /** xsd:dateTime */
  LastProcessed?: string;
  /** xsd:string|Processed,Unprocessed */
  State?: string;
  /** xsd:int|1050,1100 */
  StringStoresCompatibilityLevel?: string;
  /** xsd:int|1050,1100 */
  CurrentStringStoresCompatibilityLevel?: string;
  /** xsd:string|InMemoryWithDirectQuery,DirectQueryOnly,InMemoryOnly */
  DirectQueryUsage?: string;
}
