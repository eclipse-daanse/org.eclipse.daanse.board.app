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
import type { Keys } from "./Keys";
import type { Translations18 } from "./Translations18";

/**
 * Attribute
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Attribute7 {
  /** xsd:string */
  AttributeName?: string;
  /** xsd:string */
  Name?: string;
  /** Keys */
  Keys?: Keys;
  /** Translations */
  Translations?: Translations18;
  /** xsd:string */
  Value?: string;
  /** xsd:string */
  CUSTOM_ROLLUP?: string;
  /** xsd:string */
  CUSTOM_ROLLUP_PROPERTIES?: string;
  /** xsd:string */
  UNARY_OPERATOR?: string;
  /** xsd:integer */
  SKIPPED_LEVELS?: string;
}
