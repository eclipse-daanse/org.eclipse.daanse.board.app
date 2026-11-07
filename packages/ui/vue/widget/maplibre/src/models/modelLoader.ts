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
 * Model files, loaded once per address and shared by every map and every
 * settings form that names them (#1281). The file is fetched here, not by
 * three's loaders, so a failure can be told apart: a server that does not
 * let the board read it (no CORS header, or not reachable at all), an HTTP
 * error, or a file that is no model. The settings show which.
 */

import { reactive } from 'vue'

export type ModelFormat = 'fbx' | 'gltf'

/** What became of an address: loading, ready, or why not. */
export interface ModelStatus {
  state: 'loading' | 'ready' | 'error'
  /** blocked: CORS or network; http: the server answered an error; format: no model. */
  error?: 'blocked' | 'http' | 'format'
  /** The HTTP status, for an http error. */
  status?: number
}

/** The status of every address asked for, by address. Reactive: the settings show it. */
export const modelStatus = reactive<Record<string, ModelStatus>>({})

/** The format of a file: as set, or by the ending of its address; fbx where nothing says. */
export function formatOf(url: string, format?: string): ModelFormat {
  const set = String(format ?? '').trim().toLowerCase()
  if (set === 'fbx') return 'fbx'
  if (set === 'gltf' || set === 'glb') return 'gltf'
  const path = url.split(/[?#]/)[0].toLowerCase()
  return path.endsWith('.gltf') || path.endsWith('.glb') ? 'gltf' : 'fbx'
}

/** Why a fetch failed, as the settings tell it. */
export function failureOf(error: unknown): Pick<ModelStatus, 'error' | 'status'> {
  const status = (error as { status?: number } | undefined)?.status
  if (typeof status === 'number') return { error: 'http', status }
  if (error instanceof TypeError) return { error: 'blocked' }
  return { error: 'format' }
}

/** Reads the bytes of a model file; an HTTP error is thrown with its status. */
async function bytesOf(url: string, fetcher: typeof fetch): Promise<ArrayBuffer> {
  const response = await fetcher(url, { mode: 'cors' })
  if (!response.ok) throw Object.assign(new Error(`HTTP ${response.status}`), { status: response.status })
  return response.arrayBuffer()
}

/** Parses the bytes with three's loader for the format; the scene of the file. */
async function parse(bytes: ArrayBuffer, url: string, format: ModelFormat): Promise<unknown> {
  const base = url.slice(0, url.lastIndexOf('/') + 1)
  if (format === 'fbx') {
    const { FBXLoader } = await import('three/examples/jsm/loaders/FBXLoader.js')
    return new FBXLoader().parse(bytes, base)
  }
  const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js')
  return new Promise((resolve, reject) =>
    new GLTFLoader().parse(bytes, base, (gltf: { scene: unknown }) => resolve(gltf.scene), reject),
  )
}

const loaded = new Map<string, Promise<unknown>>()

/**
 * The scene of a model file, loaded once per address and format. A failed
 * load is forgotten, so it is tried again when asked again (a server that
 * was given a CORS header in between).
 */
export function loadModel(url: string, format?: string, fetcher: typeof fetch = (...a) => fetch(...a)): Promise<unknown> {
  const kind = formatOf(url, format)
  const key = `${kind}:${url}`
  const held = loaded.get(key)
  if (held) return held
  modelStatus[url] = { state: 'loading' }
  const made = bytesOf(url, fetcher)
    .catch((error) => {
      throw Object.assign(new Error('fetch'), failureOf(error))
    })
    .then((bytes) =>
      parse(bytes, url, kind).catch(() => {
        throw Object.assign(new Error('format'), { error: 'format' })
      }),
    )
    .then((scene) => {
      modelStatus[url] = { state: 'ready' }
      return scene
    })
    .catch((error) => {
      loaded.delete(key)
      modelStatus[url] = { state: 'error', error: error.error ?? 'format', ...(error.status ? { status: error.status } : {}) }
      throw error
    })
  loaded.set(key, made)
  return made
}

/** Forgets every loaded model - for tests. */
export function forgetModels(): void {
  loaded.clear()
  for (const key of Object.keys(modelStatus)) delete modelStatus[key]
}
