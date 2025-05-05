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
import type { Locations1 } from "./Locations1";

/**
 * Restore
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Restore {
  /** xsd:string */
  DatabaseName?: string;
  /** xsd:string */
  DatabaseID?: string;
  /** xsd:string */
  File?: string;
  /** xsd:string|SkipMembership,CopyAll,IgnoreSecurity */
  Security?: string;
  /** xsd:boolean */
  AllowOverwrite?: string;
  /** xsd:string */
  Password?: string;
  /** xsd:string */
  DbStorageLocation?: string;
  /** xsd:string|ReadWrite,ReadOnly,ReadOnlyExclusive */
  ReadWriteMode?: string;
  /** Locations */
  Locations?: Locations1;
}
