/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import debug from 'debug'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { LOGGER_FACTORY, identifier } from 'org.eclipse.daanse.board.app.lib.api.logger'
export { LOGGER_FACTORY, identifier } from 'org.eclipse.daanse.board.app.lib.api.logger'

// Force debug to use console.log instead of console.debug
debug.log = console.log.bind(console)

// Enable debug based on localStorage
if (typeof localStorage !== 'undefined') {
  const debugConfig = localStorage.getItem('debug')
  if (debugConfig) {
    debug.enable(debugConfig)
  }
}

export interface ILogger {
  (message?: any, ...args: any[]): void
  extend(namespace: string): ILogger
  enabled: boolean
}

export class LoggerFactory {
  /**
   * Create a namespaced logger
   * @param namespace The namespace for the logger (e.g., 'daanse:ogcsta:mqtt')
   */
  createLogger(namespace: string): ILogger {
    return debug(namespace) as ILogger
  }

  /**
   * Enable specific debug namespaces
   * @param namespaces Comma-separated list of namespaces (e.g., 'daanse:*,express:*')
   */
  enable(namespaces: string): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem('debug', namespaces)
    }
    // Enable must be called to update internal state
    debug.enable(namespaces)
  }

  /**
   * Disable all debug logging
   */
  disable(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('debug')
    }
    debug.disable()
  }

  /**
   * Check if a namespace is enabled
   * @param namespace The namespace to check
   */
  isEnabled(namespace: string): boolean {
    const logger = debug(namespace)
    return logger.enabled
  }
}

// Export singleton instance for direct use (non-injectable)
export const loggerFactory = new LoggerFactory()



/**
 * Meldet die Logger-Fabrik als Dienst an.
 *
 * Vorher gab es dafuer ein exportiertes `init(container)`, das die Anwendung
 * in ihrer eigenen Startdatei aufrufen musste - eine Bindung, die das Paket
 * selbst nicht herstellen konnte. Registriert wird die bereits vorhandene
 * Singleton-Instanz statt einer zweiten ueber die Klassenbindung, damit
 * Direktnutzer (`loggerFactory`) und Injektionsnutzer (`@inject`) dieselbe
 * Fabrik sehen - vorher waren es zwei.
 */
export function activate({ services }: ActivationContext) {
  services.register(LOGGER_FACTORY, loggerFactory)
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(LOGGER_FACTORY)
}

// Make loggerFactory globally accessible for DevTools
if (typeof window !== 'undefined') {
  (window as any).__daanseLoggerFactory = loggerFactory;
  // Also expose debug instance for inspection
  (window as any).__daanseDebug = debug
}


