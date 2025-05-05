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
import type { Source6 } from "./Source6";
import type { Locations2 } from "./Locations2";

/**
 * Synchronize
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Synchronize {
  /** Source */
  Source?: Source6;
  /** xsd:string|SkipMembership,CopyAll,IgnoreSecurity */
  SynchronizeSecurity?: string;
  /** xsd:boolean */
  ApplyCompression?: string;
  /** xsd:string */
  DbStorageLocation?: string;
  /** Locations */
  Locations?: Locations2;
}
