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

export { default as Editor } from './components/Editor.vue'
export { default as AstTreePanel } from './components/AstTreePanel.vue'
export { default as AstTreeNode } from './components/AstTreeNode.vue'
export { default as DiagnosticsPanel } from './components/DiagnosticsPanel.vue'

export { createEditor, type EditorHandle } from './editor/editor-service.js'
export { editorBaseTheme, editorTheme } from './editor/theme.js'

export {
  createEditorSession,
  provideEditorSession,
  useEditorSession,
  rangeContains,
  toFileUri,
  EDITOR_SESSION,
  type EditorSession,
} from './state/editor-session.js'

export {
  createAstTreeModel,
  provideAstTree,
  useAstTree,
  AST_TREE_MODEL,
  type AstTreeMode,
  type AstTreeModel,
  type AstTreeRow,
} from './composables/useAstTree.js'

export {
  useDiagnostics,
  type DiagnosticEntry,
} from './composables/useDiagnostics.js'
