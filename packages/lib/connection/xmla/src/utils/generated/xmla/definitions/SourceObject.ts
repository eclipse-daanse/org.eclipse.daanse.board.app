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
import type { WarningColumn } from "./WarningColumn";
import type { WarningMeasure } from "./WarningMeasure";

/**
 * SourceObject
 * @targetNSAlias `eng200`
 * @targetNamespace `http://schemas.microsoft.com/analysisservices/2010/engine/200`
 */
export interface SourceObject {
  /** WarningColumn */
  WarningColumn?: WarningColumn;
  /** WarningMeasure */
  WarningMeasure?: WarningMeasure;
}
