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
import type { Annotations53 } from "./Annotations53";
import type { Filter } from "./Filter";
import type { EventType } from "./EventType";

/**
 * Trace
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Trace {
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
  Annotations?: Annotations53;
  /** xsd:string */
  LogFileName?: string;
  /** xsd:boolean */
  LogFileAppend?: string;
  /** xsd:long */
  LogFileSize?: string;
  /** xsd:boolean */
  Audit?: string;
  /** xsd:boolean */
  LogFileRollover?: string;
  /** xsd:boolean */
  AutoRestart?: string;
  /** xsd:dateTime */
  StopTime?: string;
  /** Filter */
  Filter?: Filter;
  /** EventType */
  EventType?: EventType;
}
