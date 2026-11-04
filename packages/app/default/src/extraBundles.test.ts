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

import { describe, expect, it, vi } from 'vitest'
import { DefaultServiceRegistry, ModuleLoader, type ModuleManifest } from '@eclipse-daanse/tsm'
import { loadExtraManifests } from './extraBundles'

const BASE = 'https://board.example/'

function serving(files: Record<string, unknown>): typeof fetch {
  return (async (input: RequestInfo | URL) => {
    const url = String(input)
    if (!(url in files)) return new Response('not found', { status: 404 })
    const body = files[url]
    return new Response(typeof body === 'string' ? body : JSON.stringify(body), { status: 200 })
  }) as typeof fetch
}

const extra: ModuleManifest = {
  id: 'deployment.extra',
  version: '1.0.0',
  entry: 'index.js',
}

describe('extra bundles from config.json', () => {
  it('loads an extra manifest, and its module activates with the built-in ones', async () => {
    const { manifests, problems } = await loadExtraManifests(
      { manifests: ['/extras/manifest.json'] },
      { base: BASE, fetch: serving({ 'https://board.example/extras/manifest.json': extra }) },
    )
    expect(problems).toEqual([])
    expect(manifests.map((m) => m.id)).toEqual(['deployment.extra'])
    // A relative entry belongs to the manifest, not to the page
    expect(manifests[0]!.entry).toBe('https://board.example/extras/index.js')

    const activate = vi.fn()
    const builtIn: ModuleManifest = { id: 'built.in', version: '1.0.0', entry: '/bundles/built.in/index.js' }
    const containers: Record<string, unknown> = {
      'built.in': { activate: () => {} },
      'deployment.extra': { activate },
    }
    const loader = new ModuleLoader({
      serviceRegistry: new DefaultServiceRegistry(),
      entryResolver: (manifest) => containers[manifest.id],
    })
    loader.register([builtIn, ...manifests])
    await loader.loadAll()

    expect(activate).toHaveBeenCalledOnce()
    expect(loader.getModule('deployment.extra')?.state).toBe('active')
    expect(loader.getModule('built.in')?.state).toBe('active')
  })

  it('takes a manifest written inline', async () => {
    const { manifests, problems } = await loadExtraManifests(
      { manifests: [{ ...extra, entry: '/extras/inline.js' }] },
      { base: BASE, fetch: serving({}) },
    )
    expect(problems).toEqual([])
    expect(manifests[0]!.entry).toBe('https://board.example/extras/inline.js')
  })

  it('skips a broken manifest with a message and keeps the others', async () => {
    const { manifests, problems } = await loadExtraManifests(
      {
        manifests: [
          '/missing/manifest.json',
          '/garbled/manifest.json',
          '/incomplete/manifest.json',
          '/extras/manifest.json',
          { ...extra, id: 'built.in' },
        ],
      },
      {
        base: BASE,
        reserved: ['built.in'],
        fetch: serving({
          'https://board.example/garbled/manifest.json': '{ not json',
          'https://board.example/incomplete/manifest.json': { id: 'no.entry', version: '1.0.0' },
          'https://board.example/extras/manifest.json': extra,
        }),
      },
    )
    expect(manifests.map((m) => m.id)).toEqual(['deployment.extra'])
    expect(problems).toHaveLength(4)
    expect(problems[0]).toMatch(/^\/missing\/manifest\.json: HTTP 404/)
    expect(problems[1]).toMatch(/^\/garbled\/manifest\.json: /)
    expect(problems[2]).toMatch(/^\/incomplete\/manifest\.json: missing entry/)
    expect(problems[3]).toMatch(/^manifests\[4\]: id built\.in is already taken/)
  })

  it('refuses a foreign origin that is not listed, and takes it once listed', async () => {
    const fetchSpy = vi.fn(
      serving({
        'https://bundles.other.example/x/manifest.json': extra,
      }),
    )
    const foreign = 'https://bundles.other.example/x/manifest.json'

    const refused = await loadExtraManifests(
      { manifests: [foreign, { ...extra, id: 'inline.foreign', entry: 'https://bundles.other.example/y.js' }] },
      { base: BASE, fetch: fetchSpy as unknown as typeof fetch },
    )
    expect(refused.manifests).toEqual([])
    expect(refused.problems[0]).toMatch(/origin https:\/\/bundles\.other\.example is not allowed/)
    expect(refused.problems[1]).toMatch(/entry origin https:\/\/bundles\.other\.example is not allowed/)
    // Refused before anything is fetched from there
    expect(fetchSpy).not.toHaveBeenCalled()

    const allowed = await loadExtraManifests(
      { manifests: [foreign], allowedOrigins: ['https://bundles.other.example'] },
      { base: BASE, fetch: fetchSpy as unknown as typeof fetch },
    )
    expect(allowed.problems).toEqual([])
    expect(allowed.manifests[0]!.entry).toBe('https://bundles.other.example/x/index.js')
  })

  it('adds nothing when config.json has no extraBundles', async () => {
    expect(await loadExtraManifests(undefined, { base: BASE })).toEqual({ manifests: [], problems: [] })
  })
})
