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
import type { Row } from "./Row";
import type { Exception } from "./Exception";
import type { Messages } from "./Messages";

/**
 * root
 * @targetNSAlias `__tns__`
 * @targetNamespace `urn:schemas-microsoft-com:xml-analysis:rowset`
 */
export interface Root {
  /** row[] */
  row?: Array<Row>;
  /** Exception */
  Exception?: Exception;
  /** Messages */
  Messages?: Messages;
}
