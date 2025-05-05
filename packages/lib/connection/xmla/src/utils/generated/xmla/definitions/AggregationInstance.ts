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
import type { Source4 } from "./Source4";
import type { Dimensions5 } from "./Dimensions5";
import type { Measures2 } from "./Measures2";
import type { Annotations29 } from "./Annotations29";

/**
 * AggregationInstance
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface AggregationInstance {
  /** xsd:string */
  ID?: string;
  /** xsd:string */
  Name?: string;
  /** xsd:string|IndexedView,Table,UserDefined */
  AggregationType?: string;
  /** Source */
  Source?: Source4;
  /** Dimensions */
  Dimensions?: Dimensions5;
  /** Measures */
  Measures?: Measures2;
  /** Annotations */
  Annotations?: Annotations29;
  /** xsd:string */
  Description?: string;
}
