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
import type { Annotations36 } from "./Annotations36";
import type { Source1 } from "./Source1";
import type { ErrorConfiguration } from "./ErrorConfiguration";
import type { DimensionPermissions1 } from "./DimensionPermissions1";
import type { UnknownMemberTranslations } from "./UnknownMemberTranslations";
import type { ProactiveCaching } from "./ProactiveCaching";
import type { Translations7 } from "./Translations7";
import type { Attributes5 } from "./Attributes5";
import type { AttributeAllMemberTranslations } from "./AttributeAllMemberTranslations";
import type { Hierarchies2 } from "./Hierarchies2";
import type { Relationships } from "./Relationships";

/**
 * Dimension
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Dimension6 {
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
  Annotations?: Annotations36;
  /** Source */
  Source?: Source1;
  /** xsd:string */
  MiningModelID?: string;
  /** xsd:string|Regular,Time,Geography,Organization,BillOfMaterials,Accounts,Customers,Products,Scenario,Quantitative,Utility,Currency,Rates,Channel,Promotion */
  Type?: string;
  /** UnknownMemberEnumType|xsd:string|Visible,Hidden,None,AutomaticNull */
  UnknownMember?: string;
  /** xsd:string|Default,Ignore,Error */
  MdxMissingMemberMode?: string;
  /** ErrorConfiguration */
  ErrorConfiguration?: ErrorConfiguration;
  /** xsd:string|Molap,Rolap,InMemory */
  StorageMode?: string;
  /** xsd:boolean */
  WriteEnabled?: string;
  /** xsd:integer */
  ProcessingPriority?: string;
  /** xsd:dateTime */
  LastProcessed?: string;
  /** DimensionPermissions */
  DimensionPermissions?: DimensionPermissions1;
  /** xsd:string */
  DependsOnDimensionID?: string;
  /** xsd:integer */
  Language?: string;
  /** xsd:string */
  Collation?: string;
  /** xsd:string */
  UnknownMemberName?: string;
  /** UnknownMemberTranslations */
  UnknownMemberTranslations?: UnknownMemberTranslations;
  /** xsd:string|Processed,Unprocessed,PartiallyProcessed */
  State?: string;
  /** ProactiveCaching */
  ProactiveCaching?: ProactiveCaching;
  /** xsd:string|Regular,LazyAggregations */
  ProcessingMode?: string;
  /** xsd:string|ByAttribute,ByTable */
  ProcessingGroup?: string;
  /** DimensionCurrentStorageModeEnumType|xsd:string|Molap,InMemory,Rolap */
  CurrentStorageMode?: string;
  /** Translations */
  Translations?: Translations7;
  /** Attributes */
  Attributes?: Attributes5;
  /** xsd:string */
  AttributeAllMemberName?: string;
  /** AttributeAllMemberTranslations */
  AttributeAllMemberTranslations?: AttributeAllMemberTranslations;
  /** Hierarchies */
  Hierarchies?: Hierarchies2;
  /** xsd:string|None,Stale */
  ProcessingRecommendation?: string;
  /** Relationships */
  Relationships?: Relationships;
  /** xsd:int|1050,1100 */
  StringStoresCompatibilityLevel?: string;
  /** xsd:int|1050,1100 */
  CurrentStringStoresCompatibilityLevel?: string;
}
