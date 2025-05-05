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
import type { Dimensions1 } from "./Dimensions1";
import type { Annotations4 } from "./Annotations4";

/**
 * Aggregation
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Aggregation {
  /** xsd:string */
  ID?: string;
  /** xsd:string */
  Name?: string;
  /** Dimensions */
  Dimensions?: Dimensions1;
  /** Annotations */
  Annotations?: Annotations4;
  /** xsd:string */
  Description?: string;
}
