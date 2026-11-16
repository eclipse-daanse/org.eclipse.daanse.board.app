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

import { inject, ref } from 'vue'
import {
  identifier as WORKSPACE,
  type Workspace,
} from 'org.eclipse.daanse.board.app.lib.model.workspace'
import {
  identifier as SETTINGS_MANAGER,
  type SettingsManagerI,
} from 'org.eclipse.daanse.board.app.lib.api.settings'
import { useLastOpenedState } from './useLastOpenedState'
import { readBoardFile, useWorkspaceFile, useWorkspaceOrigin } from './useWorkspaceFile'
import {
  boardParameter,
  boardUrl,
  fetchBoardText,
  initialBoard,
  nameFromUrl,
} from './boardTransfer'

/** A board that was asked for and could not be opened, and why. */
export interface OpenFailure {
  url: string
  reason: string
  /**
   * 'unkept': not opened, because the board this browser had open is kept
   * nowhere and opening another would lose it.
   */
  kind?: 'unkept'
}

/*
 * Module scope: the shell asks at start, and whatever screen is up shows
 * what went wrong.
 */
const failure = ref<OpenFailure | undefined>()

/**
 * Opening a board from an address (#1424).
 *
 * Two ways ask for one: `?board=<url>` in the address the app is opened
 * with, and `initWithConfigurationURI` in config.json, which a deployment
 * sets to the board it serves. The address wins - it is what someone
 * followed - and the deployment's board opens only where nothing else is
 * open, so a reload does not throw away the board one was working on.
 *
 * A board opened this way is kept nowhere yet. It is remembered as the
 * last opened, like any other, and saving it asks where to keep it.
 *
 * Call it from a setup: `load` reaches its repositories through inject.
 */
export function useOpenBoardFromUrl(
  options: { fetch?: typeof fetch } = {},
) {
  const workspace = inject<Workspace>(WORKSPACE)!
  const settings = inject<SettingsManagerI | undefined>(SETTINGS_MANAGER, undefined)
  const { load } = useWorkspaceFile()
  const origin = useWorkspaceOrigin()
  const { remember, recall } = useLastOpenedState()

  /**
   * Whether this browser holds a board that is kept nowhere else.
   *
   * Opening another replaces what it remembers, and for a board never
   * stored that is the only copy. One that is stored somewhere can be
   * opened again from there.
   */
  function holdsUnkeptBoard(): boolean {
    const last = recall()
    return !!last && !last.origin
  }

  async function setting(path: string[]): Promise<unknown> {
    try {
      return (await settings?.getSettings(path)) ?? undefined
    } catch {
      return undefined
    }
  }

  /**
   * Fetches the board at an address and opens it.
   *
   * @returns the id of the board now open.
   * @throws Error naming why, when the address is refused, the server
   *   does not hand the board over, or what it hands over is no board.
   */
  async function openFromUrl(raw: string, base: string): Promise<string | undefined> {
    const allowed = await setting(['boards', 'allowedOrigins'])
    /* A relative address means the site, where config.json is, not the
      screen one happens to be on: /board/<id> would put it under that. */
    const url = boardUrl(raw, new URL('/', base).href, allowed)
    const text = await fetchBoardText(url, options.fetch)
    /* Checked before anything is replaced: a bad file leaves what was open. */
    if (!readBoardFile(text)) throw new Error('not a board')

    const name = nameFromUrl(url) || undefined
    load(text, name)
    origin.value = undefined
    const boardId = workspace.board?.id as string | undefined
    if (boardId) remember({ boardId, name, data: text })
    return boardId
  }

  /**
   * Opens what the address or the deployment asks for, if anything.
   *
   * @param location the address the app was opened with.
   * @param nothingOpen whether a board is open already, restored or not.
   * @returns the id of the board opened, or undefined when none was
   *   asked for or it could not be opened - then `failure` says why.
   */
  async function openAtStart(location: string, nothingOpen: boolean): Promise<string | undefined> {
    failure.value = undefined
    const linked = boardParameter(location)
    if (linked && holdsUnkeptBoard()) {
      failure.value = { url: linked, reason: 'kept nowhere', kind: 'unkept' }
      return undefined
    }
    const asked =
      linked ??
      (nothingOpen ? initialBoard((await setting(['initWithConfigurationURI'])) as never) : undefined)
    if (!asked) return undefined

    try {
      return await openFromUrl(asked, location)
    } catch (error) {
      failure.value = {
        url: asked,
        reason: error instanceof Error ? error.message : String(error),
      }
      return undefined
    }
  }

  return { openFromUrl, openAtStart, holdsUnkeptBoard, failure }
}

/** What went wrong opening a board from an address, for any screen to show. */
export function useOpenFailure() {
  return failure
}
