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
import type { Translations1 } from "./Translations1";
import type { Attributes2 } from "./Attributes2";
import type { Hierarchies } from "./Hierarchies";
import type { Annotations10 } from "./Annotations10";

/**
 * Dimension
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Dimension2 {
  /** xsd:string */
  ID?: string;
  /** xsd:string */
  Name?: string;
  /** xsd:string */
  Description?: string;
  /** Translations */
  Translations?: Translations1;
  /** xsd:string */
  DimensionID?: string;
  /** xsd:boolean */
  Visible?: string;
  /** xsd:string|Full,None,Unrestricted,Default */
  AllMemberAggregationUsage?: string;
  /** xsd:string|IncludeDimensionName,ExcludeDimensionName */
  HierarchyUniqueNameStyle?: string;
  /** xsd:string|Native,NamePath */
  MemberUniqueNameStyle?: string;
  /** Attributes */
  Attributes?: Attributes2;
  /** Hierarchies */
  Hierarchies?: Hierarchies;
  /** Annotations */
  Annotations?: Annotations10;
}
