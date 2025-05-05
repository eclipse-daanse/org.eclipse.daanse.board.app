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
import type { Attributes6 } from "./Attributes6";
import type { Translations12 } from "./Translations12";
import type { VisualizationProperties3 } from "./VisualizationProperties3";

/**
 * FromRelationshipEnd
 * @targetNSAlias `__tns__`
 * @targetNamespace `http://schemas.microsoft.com/analysisservices/2011/engine/300/300`
 */
export interface FromRelationshipEnd {
  /** xsd:string */
  Role?: string;
  /** xsd:string|One,Many */
  Multiplicity?: string;
  /** xsd:string */
  DimensionID?: string;
  /** Attributes */
  Attributes?: Attributes6;
  /** Translations */
  Translations?: Translations12;
  /** VisualizationProperties */
  VisualizationProperties?: VisualizationProperties3;
}
