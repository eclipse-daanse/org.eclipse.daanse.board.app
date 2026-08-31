/**
 * The browser-only half of the server side: starting a Langium server on a
 * worker port.
 *
 * Separate from `org.eclipse.daanse.board.app.lib.lsp.server` because that one is
 * environment-neutral — the language packages' tests import the serializer
 * under Node, and `vscode-languageserver/browser` is not resolvable there.
 */
export { startWorkerLanguageServer } from './language-server.js';
export type { LanguageServerDefinition } from './language-server.js';
