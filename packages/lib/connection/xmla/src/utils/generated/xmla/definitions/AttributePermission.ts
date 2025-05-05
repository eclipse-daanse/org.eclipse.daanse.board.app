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
import type { Annotations12 } from "./Annotations12";

/**
 * AttributePermission
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface AttributePermission {
  /** xsd:string */
  AttributeID?: string;
  /** xsd:string */
  Description?: string;
  /** xsd:string */
  DefaultMember?: string;
  /** xsd:string */
  VisualTotals?: string;
  /** xsd:string */
  AllowedSet?: string;
  /** xsd:string */
  DeniedSet?: string;
  /** Annotations */
  Annotations?: Annotations12;
}
