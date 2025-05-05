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
import type { Source1 } from "./Source1";
import type { NameColumn } from "./NameColumn";
import type { SkippedLevelsColumn } from "./SkippedLevelsColumn";
import type { CustomRollupColumn } from "./CustomRollupColumn";
import type { CustomRollupPropertiesColumn } from "./CustomRollupPropertiesColumn";
import type { ValueColumn } from "./ValueColumn";
import type { UnaryOperatorColumn } from "./UnaryOperatorColumn";
import type { KeyColumns2 } from "./KeyColumns2";
import type { ForeignKeyColumns } from "./ForeignKeyColumns";
import type { Translations17 } from "./Translations17";

/**
 * Binding
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Binding {
  /** xsd:string */
  DatabaseID?: string;
  /** xsd:string */
  DimensionID?: string;
  /** xsd:string */
  CubeID?: string;
  /** xsd:string */
  MeasureGroupID?: string;
  /** xsd:string */
  PartitionID?: string;
  /** xsd:string */
  MiningModelID?: string;
  /** xsd:string */
  MiningStructureID?: string;
  /** xsd:string */
  AttributeID?: string;
  /** xsd:string */
  CubeDimensionID?: string;
  /** xsd:string */
  MeasureID?: string;
  /** xsd:string */
  ParentColumnID?: string;
  /** xsd:string */
  ColumnID?: string;
  /** Source */
  Source?: Source1;
  /** NameColumn */
  NameColumn?: NameColumn;
  /** SkippedLevelsColumn */
  SkippedLevelsColumn?: SkippedLevelsColumn;
  /** CustomRollupColumn */
  CustomRollupColumn?: CustomRollupColumn;
  /** CustomRollupPropertiesColumn */
  CustomRollupPropertiesColumn?: CustomRollupPropertiesColumn;
  /** ValueColumn */
  ValueColumn?: ValueColumn;
  /** UnaryOperatorColumn */
  UnaryOperatorColumn?: UnaryOperatorColumn;
  /** KeyColumns */
  KeyColumns?: KeyColumns2;
  /** ForeignKeyColumns */
  ForeignKeyColumns?: ForeignKeyColumns;
  /** Translations */
  Translations?: Translations17;
}
