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
import type { Source } from "./Source";
import type { Translations5 } from "./Translations5";
import type { Annotations27 } from "./Annotations27";

/**
 * Measure
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Measure1 {
  /** xsd:string */
  Name?: string;
  /** xsd:string */
  ID?: string;
  /** xsd:string */
  Description?: string;
  /** xsd:string|Sum,Count,Min,Max,DistinctCount,None,ByAccount,AverageOfChildren,FirstChild,LastChild,FirstNonEmpty,LastNonEmpty */
  AggregateFunction?: string;
  /** xsd:string|WChar,Integer,BigInt,Single,Double,Date,Currency,UnsignedTinyInt,UnsignedSmallInt,UnsignedInt,UnsignedBigInt,Bool,Smallint,Tinyint,Variant */
  DataType?: string;
  /** Source */
  Source?: Source;
  /** xsd:boolean */
  Visible?: string;
  /** xsd:string */
  MeasureExpression?: string;
  /** xsd:string */
  DisplayFolder?: string;
  /** xsd:string */
  FormatString?: string;
  /** xsd:string */
  BackColor?: string;
  /** xsd:string */
  ForeColor?: string;
  /** xsd:string */
  FontName?: string;
  /** xsd:string */
  FontSize?: string;
  /** xsd:string */
  FontFlags?: string;
  /** Translations */
  Translations?: Translations5;
  /** Annotations */
  Annotations?: Annotations27;
}
