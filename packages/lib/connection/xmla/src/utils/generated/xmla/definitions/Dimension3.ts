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
import type { Attributes3 } from "./Attributes3";
import type { Hierarchies1 } from "./Hierarchies1";
import type { Annotations19 } from "./Annotations19";

/**
 * Dimension
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Dimension3 {
  /** xsd:string */
  CubeDimensionID?: string;
  /** Attributes */
  Attributes?: Attributes3;
  /** Hierarchies */
  Hierarchies?: Hierarchies1;
  /** Annotations */
  Annotations?: Annotations19;
}
