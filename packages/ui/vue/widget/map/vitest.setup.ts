/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { vi } from 'vitest'

// Mock localStorage for tests
const localStorageMock = (() => {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    }
  }
})()

global.localStorage = localStorageMock as Storage

// Mock window.setInterval and clearInterval
global.setInterval = vi.fn((callback, delay) => {
  return setTimeout(callback, delay) as any
}) as any

global.clearInterval = vi.fn((id) => {
  clearTimeout(id as any)
})

// Suppress console output in tests (but keep for debugging if needed)
const originalConsole = global.console
global.console = {
  ...console,
  log: vi.fn(),
  warn: vi.fn(),
  error: vi.fn(),
  // Keep debug for actual debugging
  debug: originalConsole.debug
}

// Suppress unhandled promise rejections during tests
// (they are expected in our service tests)
process.on('unhandledRejection', () => {
  // Silently ignore - tests handle these
})
