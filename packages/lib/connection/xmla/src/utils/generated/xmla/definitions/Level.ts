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
import type { Translations11 } from "./Translations11";
import type { Annotations41 } from "./Annotations41";

/**
 * Level
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Level {
  /** xsd:string */
  Name?: string;
  /** xsd:string */
  ID?: string;
  /** xsd:string */
  Description?: string;
  /** xsd:string */
  SourceAttributeID?: string;
  /** xsd:string|Never,OnlyChildWithNoName,OnlyChildWithParentName,NoName,ParentName */
  HideMemberIf?: string;
  /** Translations */
  Translations?: Translations11;
  /** Annotations */
  Annotations?: Annotations41;
}
