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

import { serviceId, type ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { REPOSITORY_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.persistence'
import FileSystemRepositoryImpl from './classes/FileSystemRepositoryImpl'
import {
  ensurePermission,
  filesystemAvailable,
  recallDirectory,
  rememberedKeys,
} from './classes/handleStore'

export const FILESYSTEM_REPOSITORY = serviceId<FileSystemRepositoryImpl>('FileSystemRepository')

const identifier = Symbol.for(FILESYSTEM_REPOSITORY)

export { default as FileSystemRepositoryImpl } from './classes/FileSystemRepositoryImpl'
export { filesystemAvailable, ensurePermission } from './classes/handleStore'

/*
 * Held from activation, so the caller of chooseDirectory does not have to
 * carry the context into a click handler.
 */
let context: ActivationContext['services'] | undefined

/**
 * Opens the folder picker and hands back a place for what was chosen.
 *
 * Has to be called straight out of a click: the picker throws if no user
 * gesture is in flight, and so does the permission request behind it.
 * Returns undefined where the browser has no picker, and throws nothing
 * when the user closes it - a cancelled choice is not a failure.
 */
export async function chooseDirectory(): Promise<FileSystemRepositoryImpl | undefined> {
  const services = context
  if (!services) throw new Error('lib.persistence.filesystem is not active')
  if (!filesystemAvailable()) return undefined
  let handle: FileSystemDirectoryHandle
  try {
    handle = await (globalThis as any).showDirectoryPicker({ id: 'daanse-boards', mode: 'readwrite' })
  } catch (error) {
    if ((error as DOMException)?.name === 'AbortError') return undefined
    throw error
  }
  const repository = services.construct(FileSystemRepositoryImpl)
  /*
   * folder:, not file:. A file: URL keeps no host, so every folder would
   * carry the same empty one and a place could not tell its own boards from
   * another's. An unknown scheme keeps the name as written.
   */
  repository.init(new URL(`folder://${encodeURIComponent(handle.name)}/`), handle.name)
  await repository.adopt(handle)

  const registry = services.getRequired(REPOSITORY_REGISTRY)
  registry.register(repository)
  return repository
}

/**
 * Brings back the folders that were picked before.
 *
 * Only those whose permission is still granted: asking again needs a user
 * gesture, and start-up is not one. A folder that has gone quiet stays
 * remembered and comes back the next time the user opens it.
 */
export async function activate({ services, log }: ActivationContext) {
  context = services
  const registry = services.getRequired(REPOSITORY_REGISTRY)
  registry.registerRepoType(FileSystemRepositoryImpl.type, identifier)

  if (!filesystemAvailable()) {
    log.info('this browser cannot open a folder - the file places stay hidden')
    return
  }

  for (const key of await rememberedKeys()) {
    const handle = await recallDirectory(key)
    if (!handle) continue
    if (!(await ensurePermission(handle, false))) {
      log.info(`folder "${handle.name}" needs its permission granted again`)
      continue
    }
    try {
      const repository = services.construct(FileSystemRepositoryImpl)
      repository.init(new URL(key), handle.name, { handle })
      registry.register(repository)
    } catch (error) {
      log.warn(`folder "${handle.name}" not restored`, error)
    }
  }
}

export function deactivate({ services }: ActivationContext) {
  context = undefined
  services.unregister(FILESYSTEM_REPOSITORY)
}
