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
import type { Annotations39 } from "./Annotations39";
import type { Translations9 } from "./Translations9";

/**
 * AttributeRelationship
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface AttributeRelationship {
  /** xsd:string */
  AttributeID?: string;
  /** xsd:string|Rigid,Flexible */
  RelationshipType?: string;
  /** xsd:string|Many,One */
  Cardinality?: string;
  /** xsd:string|Mandatory,Optional */
  Optionality?: string;
  /** xsd:string|None,Strong */
  OverrideBehavior?: string;
  /** Annotations */
  Annotations?: Annotations39;
  /** xsd:string */
  Name?: string;
  /** xsd:boolean */
  Visible?: string;
  /** Translations */
  Translations?: Translations9;
}
