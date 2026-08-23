/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
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

/**
 * The logging contract.
 *
 * The contract and nothing else - the OSGi API bundle. Implementations
 * and consumers both depend on this package; neither depends on the other.
 */

import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'

export interface ILogger {
    (message?: any, ...args: any[]): void;
    extend(namespace: string): ILogger;
    enabled: boolean;
}

export interface LoggerFactory {
  /**
  * Create a namespaced logger
  * @param namespace The namespace for the logger (e.g., 'daanse:ogcsta:mqtt')
  */
  createLogger(namespace: string): ILogger;
  /**
  * Enable specific debug namespaces
  * @param namespaces Comma-separated list of namespaces (e.g., 'daanse:*,express:*')
  */
  enable(namespaces: string): void;
  /**
  * Disable all debug logging
  */
  disable(): void;
  /**
  * Check if a namespace is enabled
  * @param namespace The namespace to check
  */
  isEnabled(namespace: string): boolean;
}

export const LOGGER_FACTORY = serviceId<LoggerFactory>('LoggerFactory')
export const identifier = Symbol.for(LOGGER_FACTORY)
