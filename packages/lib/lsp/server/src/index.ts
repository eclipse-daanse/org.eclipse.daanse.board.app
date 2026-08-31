/**
 * The server half of `org.eclipse.daanse.board.app.lib.lsp.core`, imported only from inside a worker.
 *
 * Pulls in Langium. Importing it from the main bundle would drag the grammar
 * runtime along with it, which is the thing the worker split exists to
 * prevent — see each language package's `main-browser.ts`.
 *
 * Environment-neutral: this runs in a worker in the browser and under Node in
 * the language packages' tests, so nothing here may import
 * `vscode-languageserver/browser`. The browser-only bootstrap that does is
 * `org.eclipse.daanse.board.app.lib.lsp.server/worker`.
 */
export {
    AST_REQUEST,
    buildAstTree,
    registerAstRequest,
    renderScalar
} from './ast-tree.js';
export type {
    AstRequestParams,
    AstTreeContext,
    AstTreeNode,
    AstTreeResult,
    AstTreeStrategy
} from './ast-tree.js';
