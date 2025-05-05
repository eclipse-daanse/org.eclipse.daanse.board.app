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
import type { ParentObject } from "./ParentObject";
import type { Queries } from "./Queries";

/**
 * DesignAggregations
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface DesignAggregations {
  /** Object */
  Object?: ParentObject;
  /** xsd:duration */
  Time?: string;
  /** xsd:integer */
  Steps?: string;
  /** xsd:double */
  Optimization?: string;
  /** xsd:long */
  Storage?: string;
  /** xsd:boolean */
  Materialize?: string;
  /** Queries */
  Queries?: Queries;
}
