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
import type { AttributePermissions } from "./AttributePermissions";
import type { Annotations13 } from "./Annotations13";

/**
 * DimensionPermission
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface DimensionPermission {
  /** xsd:string */
  CubeDimensionID?: string;
  /** xsd:string */
  Description?: string;
  /** xsd:string|None,Allowed */
  Read?: string;
  /** xsd:string|None,Allowed */
  Write?: string;
  /** AttributePermissions */
  AttributePermissions?: AttributePermissions;
  /** Annotations */
  Annotations?: Annotations13;
}
