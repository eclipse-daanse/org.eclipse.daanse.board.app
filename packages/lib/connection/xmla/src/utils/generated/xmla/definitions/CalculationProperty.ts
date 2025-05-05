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
import type { Translations2 } from "./Translations2";
import type { VisualizationProperties } from "./VisualizationProperties";

/**
 * CalculationProperty
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface CalculationProperty {
  /** xsd:string */
  CalculationReference?: string;
  /** xsd:string|Member,Set,Cells */
  CalculationType?: string;
  /** Translations */
  Translations?: Translations2;
  /** xsd:string */
  Description?: string;
  /** xsd:boolean */
  Visible?: string;
  /** xsd:integer */
  SolveOrder?: string;
  /** xsd:string */
  FormatString?: string;
  /** xsd:string */
  ForeColor?: string;
  /** xsd:string */
  BackColor?: string;
  /** xsd:string */
  FontName?: string;
  /** xsd:string */
  FontSize?: string;
  /** xsd:string */
  FontFlags?: string;
  /** xsd:string */
  NonEmptyBehavior?: string;
  /** xsd:string */
  AssociatedMeasureGroupID?: string;
  /** xsd:string */
  DisplayFolder?: string;
  /** xsd:integer */
  Language?: string;
  /** VisualizationProperties */
  VisualizationProperties?: VisualizationProperties;
}
