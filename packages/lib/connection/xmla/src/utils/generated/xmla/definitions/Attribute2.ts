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
import type { Annotations8 } from "./Annotations8";

/**
 * Attribute
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Attribute2 {
  /** xsd:string */
  AttributeID?: string;
  /** xsd:string|Full,None,Unrestricted,Default */
  AggregationUsage?: string;
  /** xsd:string|FullyOptimized,NotOptimized */
  AttributeHierarchyOptimizedState?: string;
  /** xsd:boolean */
  AttributeHierarchyEnabled?: string;
  /** xsd:boolean */
  AttributeHierarchyVisible?: string;
  /** Annotations */
  Annotations?: Annotations8;
}
