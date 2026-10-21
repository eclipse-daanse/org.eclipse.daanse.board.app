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
 * Where a picked folder is remembered.
 *
 * A FileSystemDirectoryHandle survives a reload only if it is stored, and it
 * cannot be serialised - it has to go into IndexedDB, which clones it
 * structurally. localStorage would silently turn it into "[object Object]".
 *
 * Remembering the handle is not the same as keeping permission: the browser
 * may still ask again on the next visit, which is why every read goes
 * through ensurePermission below.
 */

const DB_NAME = 'daanse.board.filesystem'
const STORE = 'directories'

function open(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1)
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains(STORE)) {
        request.result.createObjectStore(STORE)
      }
    }
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

function withStore<T>(mode: IDBTransactionMode, run: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return open().then(
    (db) =>
      new Promise<T>((resolve, reject) => {
        const request = run(db.transaction(STORE, mode).objectStore(STORE))
        request.onsuccess = () => resolve(request.result)
        request.onerror = () => reject(request.error)
      }),
  )
}

export function rememberDirectory(key: string, handle: FileSystemDirectoryHandle): Promise<unknown> {
  return withStore('readwrite', (store) => store.put(handle, key))
}

export function recallDirectory(key: string): Promise<FileSystemDirectoryHandle | undefined> {
  return withStore('readonly', (store) => store.get(key))
}

export function forgetDirectory(key: string): Promise<unknown> {
  return withStore('readwrite', (store) => store.delete(key))
}

export function rememberedKeys(): Promise<string[]> {
  return withStore('readonly', (store) => store.getAllKeys() as IDBRequest<any>).then((keys) =>
    (keys as IDBValidKey[]).map(String),
  )
}

/**
 * Whether the folder may be used, asking only where asking is allowed.
 *
 * `requestPermission` throws a SecurityError when no user gesture is in
 * flight - it does not quietly answer 'prompt'. So asking is something the
 * caller has to permit: a click may, start-up may not, and start-up asking
 * anyway is what made the module fail to load.
 */
export async function ensurePermission(
  handle: FileSystemDirectoryHandle,
  writable: boolean,
  mayAsk = false,
): Promise<boolean> {
  const options = { mode: writable ? 'readwrite' : 'read' }
  const held = await (handle as any).queryPermission?.(options)
  if (held === 'granted') return true
  if (!mayAsk) return false
  try {
    return (await (handle as any).requestPermission?.(options)) === 'granted'
  } catch {
    /*
     * Outside a gesture this throws; a refusal and an impossible question
     * are the same answer here.
     */
    return false
  }
}

/** Whether this browser can pick a directory at all. */
export function filesystemAvailable(): boolean {
  return typeof (globalThis as any).showDirectoryPicker === 'function'
}
