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

/*
 * The boot screen as a bundle. Loaded explicitly before everything else, it
 * listens to the ModuleLoader's events and paints progress and errors while
 * the application starts.
 *
 * Deliberately plain DOM with inline styles: this bundle must not depend on
 * anything whose loading it is supposed to show - no Vue, no shared
 * libraries, no stylesheet from the shell.
 */

import { MODULE_LOADER } from 'org.eclipse.daanse.board.app.lib.core'
import type { ModuleLoader, ModuleEvent } from '@eclipse-daanse/tsm'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'

interface StartupError {
  moduleId: string
  message: string
}

let overlay: HTMLElement | undefined
let listener: { onModuleEvent(event: ModuleEvent): void } | undefined
let loaderRef: ModuleLoader | undefined

const css = `
  position: fixed; inset: 0; z-index: 99999;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  background: #121820; color: #dfe8ef;
  font: 14px/1.5 'Barlow', system-ui, sans-serif;
  transition: opacity .4s ease;
`

function render(total: number, done: number, current: string, errors: StartupError[]) {
  if (!overlay) return
  const percent = total > 0 ? Math.round((done / total) * 100) : 0
  const errorRows = errors
    .map(
      (e) =>
        `<div style="margin:2px 0"><strong>${e.moduleId}</strong>: ${e.message.replace(/</g, '&lt;')}</div>`,
    )
    .join('')
  overlay.innerHTML = `
    <div style="width:320px;text-align:center">
      <div style="font-size:18px;margin-bottom:14px">Daanse Board</div>
      <div style="height:6px;background:#232d39;border-radius:2px;overflow:hidden">
        <div style="height:100%;width:${percent}%;background:#d8a13c;transition:width .2s ease"></div>
      </div>
      <div style="margin-top:10px;color:#8b9bab;font-family:'JetBrains Mono',ui-monospace,monospace;font-size:12px">${done}/${total} modules · ${current || '…'}</div>
    </div>
    ${
      errors.length
        ? `<div style="margin-top:22px;max-width:560px;max-height:40vh;overflow:auto;
             background:#2a1c1c;border:1px solid #5c3330;border-radius:4px;
             padding:12px 16px;color:#e2766a;text-align:left">
             <div style="font-weight:600;margin-bottom:6px">${errors.length} module(s) failed to start</div>
             ${errorRows}
             <button id="tsm-boot-dismiss" style="margin-top:10px;padding:4px 14px;border:1px solid #5c3330;
               border-radius:3px;background:#232d39;color:#e2766a;cursor:pointer">Continue anyway</button>
           </div>`
        : ''
    }
  `
  overlay.querySelector('#tsm-boot-dismiss')?.addEventListener('click', hide)
}

function hide() {
  if (!overlay) return
  const el = overlay
  el.style.opacity = '0'
  setTimeout(() => el.remove(), 400)
  overlay = undefined
}

export function activate({ services }: ActivationContext) {
  const loader = services.getRequired(MODULE_LOADER)
  loaderRef = loader

  overlay = document.createElement('div')
  overlay.id = 'tsm-boot'
  overlay.setAttribute('style', css)
  document.body.appendChild(overlay)

  // The static #preloader from index.html has done its pre-JS duty
  document.getElementById('preloader')?.remove()

  const errors: StartupError[] = []
  let current = ''

  const update = () => {
    const manifests = loader.getManifests()
    const done = manifests.filter((m) => {
      const state = loader.getModule(m.id)?.state
      return state === 'active' || state === 'error'
    }).length
    render(manifests.length, done, current, errors)

    // Settled: nothing is pending anymore and the manifests are all known.
    // With errors the screen stays up until the user dismisses it - a build
    // that silently swallows its own startup failures is the disease this
    // bundle exists to cure.
    const pending = manifests.some((m) => {
      const state = loader.getModule(m.id)?.state
      return state === 'loading' || state === 'activating' || state === 'resolving'
    })
    if (manifests.length > 1 && done >= manifests.length && !pending) {
      if (errors.length === 0) hide()
    }
  }

  listener = {
    onModuleEvent(event: ModuleEvent) {
      if (event.type === 'loading' || event.type === 'activating') {
        current = event.moduleId
      }
      if (event.type === 'error') {
        errors.push({
          moduleId: event.moduleId,
          message: String((event as { error?: unknown }).error ?? 'unknown error'),
        })
      }
      update()
    },
  }
  loader.addEventListener(listener as Parameters<ModuleLoader['addEventListener']>[0])
  update()
}

export function deactivate() {
  if (listener && loaderRef) {
    loaderRef.removeEventListener(listener as Parameters<ModuleLoader['removeEventListener']>[0])
  }
  listener = undefined
  loaderRef = undefined
  hide()
}
