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
import type { Aliases } from "./Aliases";
import type { Annotations32 } from "./Annotations32";

/**
 * Account
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Account {
  /** xsd:string */
  AccountType?: string;
  /** xsd:string|Sum,Count,Min,Max,DistinctCount,None,AverageOfChildren,FirstChild,LastChild,FirstNonEmpty,LastNonEmpty */
  AggregationFunction?: string;
  /** Aliases */
  Aliases?: Aliases;
  /** Annotations */
  Annotations?: Annotations32;
}
