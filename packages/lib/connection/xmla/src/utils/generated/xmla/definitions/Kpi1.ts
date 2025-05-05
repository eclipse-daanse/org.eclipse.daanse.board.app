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
import type { Translations6 } from "./Translations6";
import type { Annotations30 } from "./Annotations30";

/**
 * Kpi
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Kpi1 {
  /** xsd:string */
  Name?: string;
  /** xsd:string */
  ID?: string;
  /** xsd:string */
  Description?: string;
  /** Translations */
  Translations?: Translations6;
  /** xsd:string */
  DisplayFolder?: string;
  /** xsd:string */
  AssociatedMeasureGroupID?: string;
  /** xsd:string */
  Value?: string;
  /** xsd:string */
  Goal?: string;
  /** xsd:string */
  Status?: string;
  /** xsd:string */
  Trend?: string;
  /** xsd:string */
  Weight?: string;
  /** xsd:string */
  TrendGraphic?: string;
  /** xsd:string */
  StatusGraphic?: string;
  /** xsd:string */
  CurrentTimeMember?: string;
  /** xsd:string */
  ParentKpiID?: string;
  /** Annotations */
  Annotations?: Annotations30;
}
