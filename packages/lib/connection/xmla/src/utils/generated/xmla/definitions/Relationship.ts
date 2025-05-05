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
import type { FromRelationshipEnd } from "./FromRelationshipEnd";

/**
 * Relationship
 * @targetNSAlias `__tns__`
 * @targetNamespace `http://schemas.microsoft.com/analysisservices/2011/engine/300/300`
 */
export interface Relationship {
  /** xsd:string */
  ID?: string;
  /** xsd:boolean */
  Visible?: string;
  /** FromRelationshipEnd */
  FromRelationshipEnd?: FromRelationshipEnd;
  /** ToRelationshipEnd */
  ToRelationshipEnd?: FromRelationshipEnd;
}
