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
import type { Start } from "./Start";
import type { End } from "./End";
import type { SourceObject } from "./SourceObject";

/**
 * Location
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis:exception`
 */
export interface Location {
  /** Start */
  Start?: Start;
  /** End */
  End?: End;
  /** xsd:int */
  LineOffset?: string;
  /** xsd:int */
  TextLength?: string;
  /** SourceObject */
  SourceObject?: SourceObject;
  /** DependsOnObject */
  DependsOnObject?: SourceObject;
  /** xsd:int */
  RowNumber?: string;
}
