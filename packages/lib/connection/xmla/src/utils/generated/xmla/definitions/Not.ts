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
import type { Or } from "./Or";
import type { Equal } from "./Equal";

/**
 * Not
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis`
 */
export interface Not {
  /** Not */
  Not?: Not;
  /** Or */
  Or?: Or;
  /** And */
  And?: Or;
  /** Equal */
  Equal?: Equal;
  /** NotEqual */
  NotEqual?: Equal;
  /** Less */
  Less?: Equal;
  /** LessOrEqual */
  LessOrEqual?: Equal;
  /** Greater */
  Greater?: Equal;
  /** GreaterOrEqual */
  GreaterOrEqual?: Equal;
  /** Like */
  Like?: Equal;
  /** NotLike */
  NotLike?: Equal;
}
