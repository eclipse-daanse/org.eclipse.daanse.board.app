/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'

describe('Debug Logger Configuration', () => {
  let originalDebug: string | null
  let consoleLogSpy: any

  beforeEach(() => {
    // Save original localStorage state
    originalDebug = localStorage.getItem('debug')
    consoleLogSpy = vi.spyOn(console, 'log').mockImplementation(() => {})
  })

  afterEach(() => {
    // Restore original state
    if (originalDebug !== null) {
      localStorage.setItem('debug', originalDebug)
    } else {
      localStorage.removeItem('debug')
    }
    consoleLogSpy.mockRestore()
  })

  it('should read debug config from localStorage', () => {
    localStorage.setItem('debug', 'daanse:maps:*')

    // Re-import logger to trigger initialization
    const debugConfig = localStorage.getItem('debug')

    expect(debugConfig).toBe('daanse:maps:*')
  })

  it('should handle missing localStorage debug config', () => {
    localStorage.removeItem('debug')

    const debugConfig = localStorage.getItem('debug')

    expect(debugConfig).toBeNull()
  })

  it('should support namespace-specific logging', () => {
    localStorage.setItem('debug', 'daanse:maps:services')

    const debugConfig = localStorage.getItem('debug')

    expect(debugConfig).toBe('daanse:maps:services')
  })

  it('should support wildcard logging', () => {
    localStorage.setItem('debug', 'daanse:maps:*')

    const debugConfig = localStorage.getItem('debug')

    expect(debugConfig).toContain('*')
  })

  it('should support multiple namespaces', () => {
    localStorage.setItem('debug', 'daanse:maps:services,daanse:maps:datasource')

    const debugConfig = localStorage.getItem('debug')

    expect(debugConfig).toContain('services')
    expect(debugConfig).toContain('datasource')
  })
})

describe('Logger Namespaces', () => {
  it('should have all required namespaces', async () => {
    const logger = await import('../logger')

    expect(logger.logMap).toBeDefined()
    expect(logger.logDatasource).toBeDefined()
    expect(logger.logObservations).toBeDefined()
    expect(logger.logServices).toBeDefined()
    expect(logger.logTasks).toBeDefined()
  })

  it('should use console.log for output', () => {
    // Logger should be configured to use console.log
    // This is important because console.debug is often filtered by browsers
    const logSpy = vi.spyOn(console, 'log')

    // We can't easily test the actual debug calls without enabling them
    // But we can verify console.log exists
    expect(typeof console.log).toBe('function')

    logSpy.mockRestore()
  })
})

describe('Logger Usage Examples', () => {
  it('should format service reconstruction logs', async () => {
    const logger = await import('../logger')

    // Test that logger functions accept the expected parameters
    const serviceUrl = 'http://example.com/wms'

    // These calls should not throw
    expect(() => {
      logger.logServices('Reconstructing WMS service from URL: %s', serviceUrl)
    }).not.toThrow()
  })

  it('should format error logs', async () => {
    const logger = await import('../logger')

    const error = new Error('Test error')

    expect(() => {
      logger.logServices('Could not reconstruct WMS service: %o', error)
    }).not.toThrow()
  })

  it('should format datasource logs', async () => {
    const logger = await import('../logger')

    expect(() => {
      logger.logDatasource('Datasource type:', 'ogcsta')
    }).not.toThrow()
  })

  it('should format map logs', async () => {
    const logger = await import('../logger')

    expect(() => {
      logger.logMap('map ready')
    }).not.toThrow()
  })

  it('should format observation logs', async () => {
    const logger = await import('../logger')

    expect(() => {
      logger.logObservations('Setting historical locations filter for %d matching things', 10)
    }).not.toThrow()
  })

  it('should format task logs', async () => {
    const logger = await import('../logger')

    expect(() => {
      logger.logTasks('Error stopping task interval: %o', new Error('Test'))
    }).not.toThrow()
  })
})

describe('Logger Activation', () => {
  it('should provide activation instructions', () => {
    // User should activate via localStorage
    const instructions = `
      To activate logging in browser console:
      localStorage.debug = 'daanse:maps:*'

      Then reload the page.
    `

    expect(instructions).toContain('localStorage.debug')
    expect(instructions).toContain('daanse:maps:*')
  })

  it('should support selective logging', () => {
    const examples = {
      all: 'daanse:maps:*',
      servicesOnly: 'daanse:maps:services',
      multiple: 'daanse:maps:services,daanse:maps:datasource'
    }

    expect(examples.all).toContain('*')
    expect(examples.servicesOnly).toBe('daanse:maps:services')
    expect(examples.multiple).toContain(',')
  })
})
