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
import type { Command } from "./Command";
import type { Properties1 } from "./Properties1";
import type { Parameters } from "./Parameters";

/** Execute */
export interface Execute {
  /** Command */
  Command?: Command;
  /** Properties */
  Properties?: Properties1;
  /** Parameters */
  Parameters?: Parameters;
}
