// SPIKE ONLY — temporary consumer proving the language-server worker survives
// this application's bundle. Not for merge.
import { MDX_LANGUAGE } from 'org.eclipse.daanse.board.app.lib.lsp.lang.mdx'
import { Editor } from 'org.eclipse.daanse.board.app.ui.vue.common.lsp'

export function lspSpike() {
  console.log('[lsp-spike] language', MDX_LANGUAGE.id, 'editor', typeof Editor)
  const worker = MDX_LANGUAGE.createServerWorker()
  worker.addEventListener('message', (e) => console.log('[lsp-spike] worker replied', e.data))
  return worker
}
