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
import type { Locations } from "./Locations";

/**
 * Backup
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Backup {
  /** Object */
  Object?: ParentObject;
  /** xsd:string */
  File?: string;
  /** xsd:string|SkipMembership,CopyAll,IgnoreSecurity */
  Security?: string;
  /** xsd:boolean */
  ApplyCompression?: string;
  /** xsd:boolean */
  AllowOverwrite?: string;
  /** xsd:string */
  Password?: string;
  /** xsd:boolean */
  BackupRemotePartitions?: string;
  /** Locations */
  Locations?: Locations;
}
