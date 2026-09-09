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
 * The language-server contract - and nothing else. The client plumbing, the
 * worker half, the editor components and every language bundle depend on this
 * bundle; none of them depends on another. The OSGi analogue is the API
 * bundle: a package without behaviour that names the services, so a language
 * can be added or reloaded without touching anything that renders it.
 */

import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import type { LanguageSupport } from '@codemirror/language'
import type { Range } from 'vscode-languageserver-types'

/* The langium/ast wire contract - shared by the client and the worker. */

export interface AstTreeNode {
  id: string
  kind: 'node' | 'scalar' | 'reference' | 'empty'
  label: string
  property?: string
  index?: number
  value?: string
  range?: Range
  offset?: number
  length?: number
  children: AstTreeNode[]
}

export interface AstTreeResult {
  uri: string
  root?: AstTreeNode
  parserErrors: number
}

export const AST_REQUEST = 'langium/ast'

export interface AstRequestParams {
  textDocument: { uri: string }
}

/* What a language is, to everything that is not that language. */

export interface LanguageExample {
  id: string
  label: string
  description: string
  fileName: string
  text: string
}

export interface LanguageDescriptor {
  id: string
  label: string
  description: string
  extensions: string[]
  support: () => LanguageSupport
  createServerWorker: () => Worker
  examples?: LanguageExample[]
  hasOutline?: boolean
}

/**
 * What a language bundle offers as a service (the OSGi whiteboard): a bundle
 * that registers one appears in every language picker, one that goes away
 * disappears from them.
 */
export type LanguageProvider = LanguageDescriptor

export const LANGUAGE_SERVICE_ID = serviceId<LanguageProvider>('daanse.lsp.language')

/** The editor's registry of available languages. */
export interface LanguageRepository {
  getLanguage(id: string): LanguageDescriptor | undefined
  getAllLanguages(): Record<string, LanguageDescriptor>
  /** The language claiming this file name's extension, if any. */
  languageForFile(fileName: string): LanguageDescriptor | undefined
  /** Subscribes to registration changes; returns the unsubscribe function. */
  onChange(listener: () => void): () => void
}

export const LANGUAGE_REPOSITORY = serviceId<LanguageRepository>('LanguageRepository')

/** The Vue-side injection key, matching the host's Symbol.for(id) bridge. */
export const identifier = Symbol.for('LanguageRepository')
