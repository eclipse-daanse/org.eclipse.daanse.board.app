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
import type { Annotations } from "./Annotations";
import type { Dimensions } from "./Dimensions";
import type { Aggregations } from "./Aggregations";

/**
 * AggregationDesign
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface AggregationDesign {
  /** xsd:string */
  Name?: string;
  /** xsd:string */
  ID?: string;
  /** xsd:dateTime */
  CreatedTimestamp?: string;
  /** xsd:dateTime */
  LastSchemaUpdate?: string;
  /** xsd:string */
  Description?: string;
  /** Annotations */
  Annotations?: Annotations;
  /** xsd:long */
  EstimatedRows?: string;
  /** Dimensions */
  Dimensions?: Dimensions;
  /** Aggregations */
  Aggregations?: Aggregations;
  /** xsd:integer */
  EstimatedPerformanceGain?: string;
}
