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
import type { Translations15 } from "./Translations15";
import type { Columns2 } from "./Columns2";
import type { ModelingFlags } from "./ModelingFlags";
import type { Annotations47 } from "./Annotations47";

/**
 * Column
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Column1 {
  /** xsd:string */
  Name?: string;
  /** xsd:string */
  ID?: string;
  /** xsd:string */
  Description?: string;
  /** xsd:string */
  SourceColumnID?: string;
  /** xsd:string|Key,Input,Predict,PredictOnly */
  Usage?: string;
  /** xsd:string */
  Filter?: string;
  /** Translations */
  Translations?: Translations15;
  /** Columns */
  Columns?: Columns2;
  /** ModelingFlags */
  ModelingFlags?: ModelingFlags;
  /** Annotations */
  Annotations?: Annotations47;
}
