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

import { BaseRepository } from 'org.eclipse.daanse.board.app.lib.repository.persistence'
import type { Entity, WritableRepository } from 'org.eclipse.daanse.board.app.lib.api.persistence'
import { VALIDITY_CHECK, type ValidityCheckI } from 'org.eclipse.daanse.board.app.lib.persistence.util'
import { injectable, inject } from '@eclipse-daanse/tsm'
import { ensurePermission, forgetDirectory, rememberDirectory } from './handleStore'

/**
 * A folder on the machine, as a place boards are kept in.
 *
 * Unlike the browser and git places, this one cannot be restored from a URL
 * in the configuration: the File System Access API hands out a handle, and
 * a handle is only obtainable from a user gesture. So the folder is picked
 * once and the handle remembered; `init` is given that handle back.
 *
 * Every board is one .json file in the folder. Nothing is written beside
 * them, and files that do not parse, or that hold something which is not a
 * board, are passed over rather than reported - a folder may hold other
 * things and that is not an error.
 */
@injectable()
export default class FileSystemRepositoryImpl extends BaseRepository implements WritableRepository {
  public static readonly type = 'fileSystemRepositories'

  /*
   * The base keeps these optional because they are only set by init, which
   * runs after construction. The contract wants them present, and by the
   * time a place is registered they are - so they are narrowed here rather
   * than every use carrying a non-null assertion.
   */
  declare name: string
  declare uri: URL

  @inject(VALIDITY_CHECK, { optional: true })
  private readonly validityCheck!: ValidityCheckI

  private directory?: FileSystemDirectoryHandle

  init(url: URL, name: string, options?: { handle?: FileSystemDirectoryHandle }) {
    super.init(url, name)
    if (options?.handle) this.directory = options.handle
  }

  /** The handle this place reads and writes through, once it has one. */
  get handle(): FileSystemDirectoryHandle | undefined {
    return this.directory
  }

  async adopt(handle: FileSystemDirectoryHandle): Promise<void> {
    this.directory = handle
    await rememberDirectory(this.uri.toString(), handle)
  }

  async release(): Promise<void> {
    this.directory = undefined
    await forgetDirectory(this.uri.toString())
  }

  sync(): Promise<Entity[]> {
    return this.findAll()
  }

  async findAll(): Promise<Entity[]> {
    const directory = this.directory
    if (!directory || !(await ensurePermission(directory, false))) return []

    const found: Entity[] = []
    for await (const [fileName, handle] of (directory as any).entries()) {
      if (handle.kind !== 'file' || !fileName.endsWith('.json')) continue
      const entity = await this.read(fileName, handle as FileSystemFileHandle)
      if (entity) found.push(entity)
    }
    return found
  }

  async getEntityByUri(uri: URL): Promise<Entity | null> {
    if (!this.belongsHere(uri)) return null
    const fileName = this.fileNameOf(uri)
    const directory = this.directory
    if (!directory || !(await ensurePermission(directory, false))) return null
    try {
      const handle = await directory.getFileHandle(fileName)
      return await this.read(fileName, handle)
    } catch {
      return null
    }
  }

  async create(e: Entity): Promise<unknown> {
    const fileName = this.fileNameOf(e.uri)
    const directory = await this.writable()
    try {
      await directory.getFileHandle(fileName)
      return Promise.reject('Entity allready exists! use update!')
    } catch {
      // not there yet, which is what create wants
    }
    return this.write(fileName, e.data)
  }

  async update(e: Entity): Promise<unknown> {
    const fileName = this.fileNameOf(e.uri)
    const directory = await this.writable()
    try {
      await directory.getFileHandle(fileName)
    } catch {
      return Promise.reject('Entity not exists! use create!')
    }
    return this.write(fileName, e.data)
  }

  async delete(e: Entity): Promise<unknown> {
    const fileName = this.fileNameOf(e.uri)
    const directory = await this.writable()
    await directory.removeEntry(fileName)
    return true
  }

  auth(): Promise<unknown> {
    const directory = this.directory
    if (!directory) return Promise.reject('no folder chosen')
    return ensurePermission(directory, true)
  }

  /* ------------------------------------------------------------- inside */

  private async writable(): Promise<FileSystemDirectoryHandle> {
    const directory = this.directory
    if (!directory) throw new Error('no folder chosen for ' + this.name)
    if (!(await ensurePermission(directory, true))) {
      throw new Error('no permission to write in ' + this.name)
    }
    return directory
  }

  private async write(fileName: string, data: unknown): Promise<unknown> {
    const directory = await this.writable()
    const handle = await directory.getFileHandle(fileName, { create: true })
    const stream = await handle.createWritable()
    await stream.write(typeof data === 'string' ? data : JSON.stringify(data, null, 2))
    await stream.close()
    return true
  }

  private async read(fileName: string, handle: FileSystemFileHandle): Promise<Entity | null> {
    try {
      const content = JSON.parse(await (await handle.getFile()).text())
      if (this.validityCheck && !this.validityCheck.checkContent(content)) return null
      const uri = new URL(this.uri.toString())
      uri.pathname = '/' + fileName
      return { name: fileName.replace(/\.json$/, ''), uri, data: content }
    } catch {
      /* Not every .json in a folder is a board; passing over one is normal. */
      return null
    }
  }

  private belongsHere(uri: URL): boolean {
    return uri.protocol === this.uri?.protocol && uri.hostname === this.uri?.hostname
  }

  private fileNameOf(uri: URL): string {
    const name = uri.pathname.replace(/^\//, '')
    return name.endsWith('.json') ? name : name + '.json'
  }
}
