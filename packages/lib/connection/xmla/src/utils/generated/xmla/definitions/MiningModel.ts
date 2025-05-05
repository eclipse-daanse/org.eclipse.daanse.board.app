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
import type { Annotations46 } from "./Annotations46";
import type { AlgorithmParameters } from "./AlgorithmParameters";
import type { Translations14 } from "./Translations14";
import type { Columns1 } from "./Columns1";
import type { FoldingParameters } from "./FoldingParameters";
import type { MiningModelPermissions } from "./MiningModelPermissions";

/**
 * MiningModel
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface MiningModel {
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
  Annotations?: Annotations46;
  /** xsd:string|Microsoft_Naive_Bayes,Microsoft_Decision_Trees,Microsoft_Clustering,Microsoft_Neural_Network,Microsoft_Logistic_Regression,Microsoft_Linear_Regression,Microsoft_Association_Rules,Microsoft_Time_Series,Microsoft_Sequence_Clustering */
  Algorithm?: string;
  /** xsd:dateTime */
  LastProcessed?: string;
  /** AlgorithmParameters */
  AlgorithmParameters?: AlgorithmParameters;
  /** xsd:boolean */
  AllowDrillThrough?: string;
  /** Translations */
  Translations?: Translations14;
  /** Columns */
  Columns?: Columns1;
  /** xsd:string|Processed,Unprocessed */
  State?: string;
  /** FoldingParameters */
  FoldingParameters?: FoldingParameters;
  /** xsd:string */
  Filter?: string;
  /** MiningModelPermissions */
  MiningModelPermissions?: MiningModelPermissions;
  /** xsd:string */
  Language?: string;
  /** xsd:string */
  Collation?: string;
}
