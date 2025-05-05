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
import type { Annotations17 } from "./Annotations17";

/**
 * Attribute
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Attribute3 {
  /** xsd:string */
  AttributeID?: string;
  /** xsd:boolean */
  AttributeHierarchyVisible?: string;
  /** xsd:string */
  DefaultMember?: string;
  /** Annotations */
  Annotations?: Annotations17;
}
