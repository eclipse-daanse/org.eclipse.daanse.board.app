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
import type { Source3 } from "./Source3";

/**
 * ProactiveCaching
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface ProactiveCaching {
  /** xsd:string|Immediate,OnCacheComplete */
  OnlineMode?: string;
  /** xsd:string|Regular,MolapOnly */
  AggregationStorage?: string;
  /** Source */
  Source?: Source3;
  /** xsd:duration */
  SilenceInterval?: string;
  /** xsd:duration */
  Latency?: string;
  /** xsd:duration */
  SilenceOverrideInterval?: string;
  /** xsd:duration */
  ForceRebuildInterval?: string;
  /** xsd:boolean */
  Enabled?: string;
}
