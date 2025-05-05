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
import type { Warning } from "./Warning";
import type { Error } from "./Error";

/**
 * Messages
 * @targetNSAlias `ana-x`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis:exception`
 */
export interface Messages {
  /** Warning */
  Warning?: Warning;
  /** Error */
  Error?: Error;
}
