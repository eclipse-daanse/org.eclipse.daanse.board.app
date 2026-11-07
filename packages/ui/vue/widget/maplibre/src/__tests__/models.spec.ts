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
 * The 3D model layer (#1281): where instances stand in the frame of the
 * model, how the frame meets web mercator, how a file is loaded and why it
 * may not be, and the instances as InstancedMeshes - with three itself, as
 * all of this is arithmetic; only the drawing needs WebGL.
 */
import { describe, it, expect, vi, beforeEach } from 'vitest'
import * as THREE from 'three'
import { localOf, nearestWithin, originOf, placementsOf } from '../models/placement'
import { failureOf, forgetModels, formatOf, loadModel, modelStatus } from '../models/modelLoader'
import { frameMatrix, instancedOf } from '../models/modelLayer'
import { colorOf, inPart, lengthOf, modelOf } from '../models/encodings'
import { symbolsByModel } from '../models/symbols'
import { migratedModelLayer } from '../settingsModel'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'
import { modelledSettings, newModelLayer } from '../settingsModel'
import { MaplibreFactory } from '../gen/MaplibreFactory'
import { EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { MaplibrePackage } from '../gen/MaplibrePackage'

void EventsPackage.eINSTANCE
void MaplibrePackage.eINSTANCE

const parsed = vi.fn((bytes: ArrayBuffer) => ({ parsedFrom: bytes.byteLength }))
vi.mock('three/examples/jsm/loaders/FBXLoader.js', () => ({
  FBXLoader: class {
    parse(bytes: ArrayBuffer) {
      if (bytes.byteLength === 3) throw new Error('not FBX')
      return parsed(bytes)
    }
  },
}))

describe('the places of model instances', () => {
  const origin = originOf([{ lon: 11.6, lat: 50.95 }])!

  it('are metres east and south of the middle of the instances', () => {
    expect(originOf([])).toBeNull()
    const middle = originOf([{ lon: 11.6, lat: 50.95 }, { lon: 11.62, lat: 50.95 }])!
    expect(localOf(11.61, 50.95, middle)[0]).toBeCloseTo(0, 6)
    // 0.001 degree of longitude at 50.95 N is 70.2 m, of latitude 111 m.
    const [east, south] = localOf(11.601, 50.949, origin)
    expect(east).toBeCloseTo(70.2, 0)
    expect(south).toBeCloseTo(111.2, 0)
  })

  it('turn clockwise from north, scale by layer and instance, and stand at the height of the layer', () => {
    const placed = placementsOf(
      { scale: 0.01, rotation: 90, altitudeOffset: 2, instances: [{ id: 'a', lon: 11.6, lat: 50.95, scale: 2, rotation: 10 }, { id: 'b' }] },
      origin,
    )
    // An instance without a place is left out.
    expect(placed).toHaveLength(1)
    expect(placed[0].position[0]).toBeCloseTo(0, 6)
    expect(placed[0].position[1]).toBe(2)
    expect(placed[0].rotation).toBeCloseTo((-100 * Math.PI) / 180, 9)
    expect(placed[0].scale).toBeCloseTo(0.02, 9)
  })

  it('are found under the pointer within a radius', () => {
    const candidates = [{ item: 'a', x: 10, y: 10 }, { item: 'b', x: 30, y: 10 }]
    expect(nearestWithin({ x: 27, y: 12 }, candidates, 14)).toBe('b')
    expect(nearestWithin({ x: 100, y: 100 }, candidates, 14)).toBeUndefined()
  })
})

describe('the frame of the models', () => {
  it('meets web mercator: x east, y up, z south, in metres', () => {
    const origin = originOf([{ lon: 11.6, lat: 50.95 }])!
    const m = frameMatrix(THREE, origin)
    const east = new THREE.Vector3(100, 0, 0).applyMatrix4(m)
    expect((east.x - origin.x) / origin.meter).toBeCloseTo(100, 6)
    const up = new THREE.Vector3(0, 10, 0).applyMatrix4(m)
    expect(up.z / origin.meter).toBeCloseTo(10, 6)
    const south = new THREE.Vector3(0, 0, 50).applyMatrix4(m)
    expect((south.y - origin.y) / origin.meter).toBeCloseTo(50, 6)
  })
})

describe('the instances of a model', () => {
  it('are one InstancedMesh per mesh, the model standing on the ground with its lowest point', () => {
    const source = new THREE.Group()
    const box = new THREE.Mesh(new THREE.BoxGeometry(1, 2, 1), new THREE.MeshBasicMaterial())
    source.add(box)
    const group = instancedOf(THREE, source, [
      { position: [10, 0, 0], rotation: 0, scale: 1 },
      { position: [0, 0, 20], rotation: Math.PI / 2, scale: 3 },
    ])
    expect(group.children).toHaveLength(1)
    const mesh = group.children[0]
    expect(mesh.count).toBe(2)
    const matrix = new THREE.Matrix4()
    mesh.getMatrixAt(0, matrix)
    // The box reaches from -1 to 1: lifted by 1 it stands on the ground.
    expect(new THREE.Vector3(0, -1, 0).applyMatrix4(matrix).toArray()).toEqual([10, 0, 0])
    mesh.getMatrixAt(1, matrix)
    const top = new THREE.Vector3(0, 1, 0).applyMatrix4(matrix)
    expect(top.y).toBeCloseTo(6, 9)
    expect(top.z).toBeCloseTo(20, 9)
  })
})

describe('a model file', () => {
  beforeEach(() => forgetModels())

  it('is told by its format or the ending of its address', () => {
    expect(formatOf('https://x/tree.fbx')).toBe('fbx')
    expect(formatOf('https://x/tree.GLB?v=1')).toBe('gltf')
    expect(formatOf('https://x/tree.gltf')).toBe('gltf')
    expect(formatOf('https://x/model', 'glb')).toBe('gltf')
    expect(formatOf('https://x/model.glb', 'fbx')).toBe('fbx')
  })

  it('says why it cannot be read: blocked, an HTTP error, or no model', async () => {
    expect(failureOf(new TypeError('Failed to fetch'))).toEqual({ error: 'blocked' })
    expect(failureOf(Object.assign(new Error('x'), { status: 404 }))).toEqual({ error: 'http', status: 404 })

    const blocked = vi.fn(async () => { throw new TypeError('Failed to fetch') })
    await expect(loadModel('http://localhost:8080/tree.fbx', '', blocked as any)).rejects.toBeTruthy()
    expect(modelStatus['http://localhost:8080/tree.fbx']).toEqual({ state: 'error', error: 'blocked' })

    const missing = vi.fn(async () => new Response('', { status: 404 }))
    await expect(loadModel('https://x/missing.fbx', '', missing as any)).rejects.toBeTruthy()
    expect(modelStatus['https://x/missing.fbx']).toEqual({ state: 'error', error: 'http', status: 404 })

    const junk = vi.fn(async () => new Response(new Uint8Array([1, 2, 3])))
    await expect(loadModel('https://x/junk.fbx', '', junk as any)).rejects.toBeTruthy()
    expect(modelStatus['https://x/junk.fbx']).toEqual({ state: 'error', error: 'format' })
  })

  it('is loaded once per address, and tried again after a failure', async () => {
    const fails = vi.fn(async () => { throw new TypeError('Failed to fetch') })
    await expect(loadModel('https://x/tree.fbx', '', fails as any)).rejects.toBeTruthy()
    const ok = vi.fn(async () => new Response(new Uint8Array(16)))
    const first = loadModel('https://x/tree.fbx', '', ok as any)
    const second = loadModel('https://x/tree.fbx', '', ok as any)
    expect(second).toBe(first)
    expect(await first).toEqual({ parsedFrom: 16 })
    expect(ok).toHaveBeenCalledTimes(1)
    expect(modelStatus['https://x/tree.fbx']).toEqual({ state: 'ready' })
  })
})

describe('the model layers of the settings', () => {
  it('are stored with their instances and come back the same', () => {
    const settings = modelledSettings({})
    const layer = newModelLayer('Trees')
    layer.url = 'http://localhost:8080/tree.fbx'
    layer.scale = 0.01
    const instance = MaplibreFactory.eINSTANCE.createModelInstance()
    instance.id = 'i1'
    instance.lon = 11.6
    instance.lat = 50.95
    layer.instances.add(instance)
    settings.modelLayers.add(layer)

    const json = JSON.parse(JSON.stringify(settings))
    expect(json.modelLayers[0]).toMatchObject({ name: 'Trees', url: 'http://localhost:8080/tree.fbx', scale: 0.01, format: '' })
    expect(json.modelLayers[0].instances).toEqual([{ id: 'i1', lon: 11.6, lat: 50.95, scale: 1, rotation: 0 }])
    const again = modelledSettings(json)
    expect(again.modelLayers.get(0).instances.get(0).lat).toBe(50.95)
  })
})

describe('the encodings of a symbol layer (#1296)', () => {
  it('give a length in metres from a field in its unit, through a scale, with a value where it has none', () => {
    expect(lengthOf({ field: 'h', unit: 'cm' }, { h: 1500 })).toBe(15)
    expect(lengthOf({ field: 'h' }, { h: 12 }, 'm')).toBe(12)
    expect(lengthOf({ field: 'h' }, { h: 1200 }, 'cm')).toBe(12)
    expect(lengthOf({ field: 'h', scaleType: 'linear', domainMin: 0, domainMax: 10, rangeMin: 5, rangeMax: 25 }, { h: 5 })).toBe(15)
    expect(lengthOf({ field: 'h', value: 10 }, { h: null })).toBe(10)
    expect(lengthOf({ field: 'h' }, {})).toBeUndefined()
    expect(lengthOf(undefined, { h: 1 })).toBeUndefined()
  })

  it('give a colour per value, a ramp over a domain, or the colour where none matches', () => {
    const nominal = { field: 'g', mappings: [{ code: 'Tilia', color: '#4caf50' }], color: '#5b8c3a' }
    expect(colorOf(nominal, { g: 'Tilia' })).toBe('#4caf50')
    expect(colorOf(nominal, { g: 'Acer' })).toBe('#5b8c3a')
    expect(colorOf({ ...nominal, color: '' }, { g: 'Acer' })).toBeUndefined()
    const ramp = { field: 'v', type: 'quantitative', domainMin: 0, domainMax: 100, lowColor: '#000000', highColor: '#ffffff' }
    expect(colorOf(ramp, { v: 50 })).toBe('#808080')
    expect(colorOf(ramp, { v: 500 })).toBe('#ffffff')
  })

  it('choose a model file by a value, and tell the meshes of a part by a pattern', () => {
    expect(modelOf({ field: 'g', mappings: [{ code: 'Quercus', url: 'oak.glb' }] }, { g: 'Quercus' }, 'tree.fbx')).toBe('oak.glb')
    expect(modelOf({ field: 'g', mappings: [] }, { g: 'Acer' }, 'tree.fbx')).toBe('tree.fbx')
    expect(inPart({ mesh: 'trunk|cylinder' }, 'Cylinder MeshPhong')).toBe(true)
    expect(inPart({ mesh: 'trunk' }, 'Icosphere')).toBe(false)
    expect(inPart({ mesh: '([' }, 'x')).toBe(false)
  })
})

describe('the instances of a symbol layer (#1296)', () => {
  const points = {
    features: [
      { id: 'b1', geometry: { type: 'Point', coordinates: [11.615, 50.958] }, properties: { Baumart: 'Tilia cordata, Winterlinde', Baumhöhe: 14, Kronendurchmesser: 9 } },
      { id: 'b2', geometry: { type: 'Point', coordinates: [11.616, 50.959] }, properties: { Baumart: 'Acer platanoides', Baumhöhe: null, Kronendurchmesser: 6 } },
      { id: 'b3', geometry: { type: 'Point', coordinates: [11.617, 50.96] }, properties: { Baumart: 'Quercus robur', Baumhöhe: 22 } },
      { id: 'b4', geometry: { type: 'Polygon', coordinates: [] }, properties: { Baumart: 'Tilia' } },
    ],
  }
  const layer = {
    id: 'trees',
    url: 'tree.fbx',
    transforms: [
      { kind: 'extract', field: 'Baumart', pattern: '^(\\S+)', as: 'genus' },
      { kind: 'filter', field: 'genus', op: 'neq', value: 'Acer' },
    ],
    size: { height: { field: 'Baumhöhe', value: 10 }, width: { field: 'Kronendurchmesser' } },
    color: { field: 'genus', mappings: [{ code: 'Tilia', color: '#4caf50' }], color: '#5b8c3a' },
    modelBy: { field: 'genus', mappings: [{ code: 'Quercus', url: 'oak.glb' }] },
    parts: [{ mesh: 'trunk|cylinder', color: { color: '#6b4f32' } }],
    instances: [{ id: 'hand', lon: 11.61, lat: 50.95 }],
  }

  it('are the points that pass the transforms and the ones placed by hand, encoded by their fields', () => {
    const byModel = symbolsByModel(layer, points)
    expect([...byModel.keys()]).toEqual(['tree.fbx', 'oak.glb'])
    expect(byModel.get('tree.fbx')).toEqual([
      { id: 'hand', lon: 11.61, lat: 50.95, scale: undefined, rotation: undefined, height: 10, color: '#5b8c3a', partColors: ['#6b4f32'] },
      { id: 'b1', lon: 11.615, lat: 50.958, height: 14, width: 9, color: '#4caf50', partColors: ['#6b4f32'] },
    ])
    expect(byModel.get('oak.glb')).toEqual([{ id: 'b3', lon: 11.617, lat: 50.96, height: 22, color: '#5b8c3a', partColors: ['#6b4f32'] }])
  })

  it('take the unit of a column type of the data source', () => {
    const inCm = { ...layer, transforms: [], size: { height: { field: 'Baumhöhe' } }, instances: [] }
    expect(symbolsByModel(inCm, points, { 'Baumhöhe': 'cm' }).get('tree.fbx')![0].height).toBeCloseTo(0.14, 9)
  })

  it('paint a part in its colour and the rest in theirs; without a colour, the colours of the file', () => {
    const source = new THREE.Group()
    const trunk = new THREE.Mesh(new THREE.BoxGeometry(1, 4, 1), new THREE.MeshPhongMaterial({ color: 0x795548 }))
    trunk.name = 'Cylinder'
    const crown = new THREE.Mesh(new THREE.SphereGeometry(2), new THREE.MeshPhongMaterial({ color: 0xcccccc }))
    crown.name = 'Icosphere'
    source.add(trunk, crown)
    const group = instancedOf(THREE, source, [
      { position: [0, 0, 0], rotation: 0, scale: 1, color: '#4caf50', partColors: ['#6b4f32'] },
      { position: [5, 0, 0], rotation: 0, scale: 1 },
    ], [{ mesh: 'trunk|cylinder' }])
    const [trunkMesh, crownMesh] = group.children
    const color = new THREE.Color()
    trunkMesh.getColorAt(0, color)
    expect(color.getHexString()).toBe('6b4f32')
    trunkMesh.getColorAt(1, color)
    expect(color.getHexString()).toBe('795548')
    crownMesh.getColorAt(0, color)
    expect(color.getHexString()).toBe('4caf50')
    crownMesh.getColorAt(1, color)
    expect(color.getHexString()).toBe('cccccc')
    expect(trunk.material.color.getHexString()).toBe('795548')
  })

  it('scale a model to the height and across to the width', () => {
    const source = new THREE.Group()
    source.add(new THREE.Mesh(new THREE.BoxGeometry(2, 4, 2), new THREE.MeshBasicMaterial()))
    const [mesh] = instancedOf(THREE, source, [{ position: [0, 0, 0], rotation: 0, scale: 1, height: 12, width: 8 }]).children
    const matrix = new THREE.Matrix4()
    mesh.getMatrixAt(0, matrix)
    const corner = new THREE.Vector3(1, 2, 1).applyMatrix4(matrix)
    expect(corner.y).toBeCloseTo(12, 9)
    expect(corner.x).toBeCloseTo(4, 9)
  })
})

describe('a symbol layer stored before #1296', () => {
  const stored = JSON.parse(readFileSync(join(__dirname, 'fixtures', 'ml_3dmap-model-layer.json'), 'utf-8'))

  it('is moved to the encodings: size, a first-word extract with a colour per genus, the default colour and the trunk as a part', () => {
    const layer = migratedModelLayer(stored)
    for (const key of ['heightProperty', 'widthProperty', 'defaultHeight', 'rules', 'trunkColor']) expect(layer).not.toHaveProperty(key)
    expect(layer.size).toEqual({
      height: { field: 'Baumhöhe', unit: 'm', scaleType: 'identity', value: 10 },
      width: { field: 'Kronendurchmesser', unit: 'm', scaleType: 'identity', value: 0 },
    })
    expect(layer.transforms).toEqual([{ kind: 'extract', field: 'Baumart', pattern: '^(\\S+)', as: 'Baumart (first word)' }])
    expect(layer.color).toMatchObject({ field: 'Baumart (first word)', type: 'nominal', color: '#5b8c3a' })
    expect((layer.color as any).mappings.map((m: any) => m.code)).toEqual(['Tilia', 'Acer', 'Quercus', 'Salix', 'Betula', 'Fraxinus', 'Pinus'])
    expect(layer.parts).toEqual([{ mesh: 'trunk|stem|bark|cylinder|stamm|rinde', color: { color: '#6b4f32' } }])
    expect(migratedModelLayer(layer)).toBe(layer)
  })

  it('names the field it adds in the reader\'s language, and keeps a name stored before', () => {
    const german = { firstWordOf: (field: string) => `${field} (erstes Wort)` }
    const layer = migratedModelLayer(stored, german)
    expect(layer.transforms).toEqual([{ kind: 'extract', field: 'Baumart', pattern: '^(\\S+)', as: 'Baumart (erstes Wort)' }])
    expect(layer.color).toMatchObject({ field: 'Baumart (erstes Wort)' })
    // Migrated before, in English: the stored name stays.
    const before = migratedModelLayer(stored)
    expect(migratedModelLayer(before, german)).toBe(before)
  })

  it('draws as before: the same colours and sizes for the same trees', () => {
    const settings = modelledSettings({ modelLayers: [stored] })
    const layer = settings.modelLayers.get(0)
    expect(layer.size?.height?.field).toBe('Baumhöhe')
    const byModel = symbolsByModel(layer, {
      features: [
        { id: 'a', geometry: { type: 'Point', coordinates: [11.6, 50.9] }, properties: { Baumart: 'Tilia cordata', Baumhöhe: 14, Kronendurchmesser: 9 } },
        { id: 'b', geometry: { type: 'Point', coordinates: [11.6, 50.9] }, properties: { Baumart: 'Robinia pseudoacacia', Baumhöhe: '', Kronendurchmesser: '' } },
      ],
    })
    expect(byModel.get('http://localhost:8080/tree.fbx')!.map((i) => [i.color, i.height, i.width, i.partColors])).toEqual([
      ['#4caf50', 14, 9, ['#6b4f32']],
      ['#5b8c3a', 10, undefined, ['#6b4f32']],
    ])
  })
})
