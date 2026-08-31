/**
 * Vue components over the LSP.
 *
 * This package knows no language. Everything language-specific arrives as a
 * `LanguageDescriptor` prop, so a consumer can mount the editor for a language
 * this package has never heard of.
 */
export { default as Editor } from './components/Editor.vue';
export { default as AstTreePanel } from './components/AstTreePanel.vue';
export { default as AstTreeNode } from './components/AstTreeNode.vue';
export { default as DiagnosticsPanel } from './components/DiagnosticsPanel.vue';

export { createEditor, type EditorHandle } from './editor/editor-service.js';
export { editorBaseTheme, editorTheme } from './editor/theme.js';

export {
    createEditorSession,
    provideEditorSession,
    useEditorSession,
    rangeContains,
    toFileUri,
    EDITOR_SESSION,
    type EditorSession
} from './state/editor-session.js';

export {
    createAstTreeModel,
    provideAstTree,
    useAstTree,
    AST_TREE_MODEL,
    type AstTreeMode,
    type AstTreeModel,
    type AstTreeRow
} from './composables/useAstTree.js';

export { useDiagnostics, type DiagnosticEntry } from './composables/useDiagnostics.js';
