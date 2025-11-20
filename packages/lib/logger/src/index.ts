/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import debug from 'debug'
import { injectable, type Container } from 'inversify'

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

@injectable()
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

// Export identifier for Inversify
export const identifier = Symbol.for('LoggerFactory')

// Initialize container bindings
const init = (container: Container) => {
  container.bind<LoggerFactory>(identifier).to(LoggerFactory).inSingletonScope()
}

// Make loggerFactory globally accessible for DevTools
if (typeof window !== 'undefined') {
  (window as any).__daanseLoggerFactory = loggerFactory;
  // Also expose debug instance for inspection
  (window as any).__daanseDebug = debug
}

export {
  init
}
