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
import type { Event1 } from "./Event1";
import type { Target } from "./Target";

/** event_session */
export interface EventSession {
  /** xsd:string */
  templateCategory?: string;
  /** xsd:string */
  templateName?: string;
  /** xsd:string */
  templateDescription?: string;
  /** event[] */
  event?: Array<Event1>;
  /** target[] */
  target?: Array<Target>;
}
