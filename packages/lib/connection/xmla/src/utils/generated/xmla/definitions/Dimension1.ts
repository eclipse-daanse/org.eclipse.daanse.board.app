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
import type { Attributes1 } from "./Attributes1";
import type { Annotations3 } from "./Annotations3";

/**
 * Dimension
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Dimension1 {
  /** xsd:string */
  CubeDimensionID?: string;
  /** Attributes */
  Attributes?: Attributes1;
  /** Annotations */
  Annotations?: Annotations3;
}
