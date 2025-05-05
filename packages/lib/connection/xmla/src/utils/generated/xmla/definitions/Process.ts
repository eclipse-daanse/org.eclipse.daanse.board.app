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
import type { Bindings } from "./Bindings";
import type { DataSource } from "./DataSource";
import type { DataSourceView } from "./DataSourceView";
import type { ErrorConfiguration } from "./ErrorConfiguration";

/**
 * Process
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Process {
  /** xsd:string|ProcessFull,ProcessAdd,ProcessUpdate,ProcessIndexes,ProcessScriptCache,ProcessData,ProcessDefault,ProcessClear,ProcessStructure,ProcessClearStructureOnly,ProcessClearIndexes,ProcessDefrag */
  Type?: string;
  /** Object */
  Object?: ParentObject;
  /** Bindings */
  Bindings?: Bindings;
  /** DataSource */
  DataSource?: DataSource;
  /** DataSourceView */
  DataSourceView?: DataSourceView;
  /** ErrorConfiguration */
  ErrorConfiguration?: ErrorConfiguration;
  /** WriteBackTableCreation|xsd:string|Create,CreateAlways,UseExisting */
  WriteBackTableCreation?: string;
}
