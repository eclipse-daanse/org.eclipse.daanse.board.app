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
import type { Annotations44 } from "./Annotations44";
import type { Source1 } from "./Source1";
import type { Translations13 } from "./Translations13";
import type { ErrorConfiguration } from "./ErrorConfiguration";
import type { Columns } from "./Columns";
import type { MiningStructurePermissions } from "./MiningStructurePermissions";
import type { MiningModels } from "./MiningModels";

/**
 * MiningStructure
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface MiningStructure {
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
  Annotations?: Annotations44;
  /** Source */
  Source?: Source1;
  /** xsd:dateTime */
  LastProcessed?: string;
  /** Translations */
  Translations?: Translations13;
  /** xsd:integer */
  Language?: string;
  /** xsd:string */
  Collation?: string;
  /** ErrorConfiguration */
  ErrorConfiguration?: ErrorConfiguration;
  /** xsd:string|KeepTrainingCases,ClearAfterProcessing */
  CacheMode?: string;
  /** xsd:int */
  HoldoutMaxPercent?: string;
  /** xsd:int */
  HoldoutMaxCases?: string;
  /** xsd:int */
  HoldoutSeed?: string;
  /** xsd:int */
  HoldoutActualSize?: string;
  /** Columns */
  Columns?: Columns;
  /** xsd:string|Processed,Unprocessed */
  State?: string;
  /** MiningStructurePermissions */
  MiningStructurePermissions?: MiningStructurePermissions;
  /** MiningModels */
  MiningModels?: MiningModels;
}
