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
import type { Data } from "./Data";

/**
 * ImageLoad
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface ImageLoad {
  /** xsd:string */
  ImagePath?: string;
  /** xsd:string */
  ImageUrl?: string;
  /** xsd:string */
  ImageUniqueID?: string;
  /** xsd:string */
  ImageVersion?: string;
  /** xsd:string|ReadWrite,ReadOnly,ReadOnlyExclusive */
  ReadWriteMode?: string;
  /** xsd:string */
  DbStorageLocation?: string;
  /** xsd:string */
  DatabaseName?: string;
  /** xsd:string */
  DatabaseID?: string;
  /** Data */
  Data?: Data;
}
