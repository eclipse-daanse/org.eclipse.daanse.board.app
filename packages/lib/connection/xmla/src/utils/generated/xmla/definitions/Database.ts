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
import type { Annotations31 } from "./Annotations31";
import type { ImpersonationInfo } from "./ImpersonationInfo";
import type { Accounts } from "./Accounts";
import type { DataSources } from "./DataSources";
import type { DataSourceViews } from "./DataSourceViews";
import type { Dimensions6 } from "./Dimensions6";
import type { Cubes } from "./Cubes";
import type { MiningStructures } from "./MiningStructures";
import type { Roles } from "./Roles";
import type { Assemblies } from "./Assemblies";
import type { DatabasePermissions } from "./DatabasePermissions";
import type { Translations16 } from "./Translations16";

/**
 * Database
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Database {
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
  Annotations?: Annotations31;
  /** xsd:dateTime */
  LastUpdate?: string;
  /** xsd:string|Processed,PartiallyProcessed,Unprocessed */
  State?: string;
  /** xsd:string|ReadWrite,ReadOnly,ReadOnlyExclusive */
  ReadWriteMode?: string;
  /** xsd:string */
  DbStorageLocation?: string;
  /** xsd:string */
  AggregationPrefix?: string;
  /** xsd:integer */
  ProcessingPriority?: string;
  /** xsd:long */
  EstimatedSize?: string;
  /** xsd:dateTime */
  LastProcessed?: string;
  /** xsd:integer */
  Language?: string;
  /** xsd:string */
  Collation?: string;
  /** xsd:boolean */
  Visible?: string;
  /** xsd:string */
  MasterDataSourceID?: string;
  /** DataSourceImpersonationInfo */
  DataSourceImpersonationInfo?: ImpersonationInfo;
  /** Accounts */
  Accounts?: Accounts;
  /** DataSources */
  DataSources?: DataSources;
  /** DataSourceViews */
  DataSourceViews?: DataSourceViews;
  /** Dimensions */
  Dimensions?: Dimensions6;
  /** Cubes */
  Cubes?: Cubes;
  /** MiningStructures */
  MiningStructures?: MiningStructures;
  /** Roles */
  Roles?: Roles;
  /** Assemblies */
  Assemblies?: Assemblies;
  /** DatabasePermissions */
  DatabasePermissions?: DatabasePermissions;
  /** Translations */
  Translations?: Translations16;
  /** xsd:string|Traditional,InMemory,Mixed,TabularMetadata */
  StorageEngineUsed?: string;
  /** xsd:string */
  ImagePath?: string;
  /** xsd:string */
  ImageUrl?: string;
  /** xsd:string */
  ImageUniqueID?: string;
  /** xsd:string */
  ImageVersion?: string;
  /** xsd:string */
  Token?: string;
  /** xsd:integer */
  CompatibilityLevel?: string;
  /** xsd:string|InMemory,DirectQueryWithInMemory,InMemoryWithDirectQuery,DirectQuery */
  DirectQueryMode?: string;
}
