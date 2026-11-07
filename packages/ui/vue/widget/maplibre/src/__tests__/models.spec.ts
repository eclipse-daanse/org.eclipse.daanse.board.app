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
import { heightFor, instancesByModel, ruleFor, widthFor } from '../models/modelRules'
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

describe('model instances from data (#1282)', () => {
  const trees = {
    type: 'FeatureCollection',
    features: [
      { type: 'Feature', id: 't1', geometry: { type: 'Point', coordinates: [13.448, 52.443] }, properties: { gattung_deutsch: 'Linde', baumhoehe: 15 } },
      { type: 'Feature', id: 't2', geometry: { type: 'Point', coordinates: [13.449, 52.444] }, properties: { gattung_deutsch: 'Ahorn', baumhoehe: null } },
      { type: 'Feature', id: 't3', geometry: { type: 'Point', coordinates: [13.45, 52.445] }, properties: { gattung_deutsch: 'Eiche', baumhoehe: '22.5' } },
      { type: 'Feature', id: 't4', geometry: { type: 'Polygon', coordinates: [] }, properties: {} },
    ],
  }
  const layer = {
    id: 'trees',
    url: 'https://x/tree.fbx',
    heightProperty: 'baumhoehe',
    defaultHeight: 8,
    rules: [
      { property: 'gattung_deutsch', value: 'Lind*', color: '#2e7d32' },
      { property: 'gattung_deutsch', value: 'Eiche', url: 'https://x/oak.glb', color: '#827717' },
    ],
  }

  it('take model and colour from the first rule that matches, and the height from a property', () => {
    expect(ruleFor(layer.rules, { gattung_deutsch: 'Linde' })?.color).toBe('#2e7d32')
    expect(ruleFor(layer.rules, { gattung_deutsch: 'Ahorn' })).toBeUndefined()
    expect(heightFor(layer, { baumhoehe: 15 })).toBe(15)
    expect(heightFor(layer, { baumhoehe: 0 })).toBe(8)
    expect(heightFor({ heightProperty: 'h' }, {})).toBeUndefined()
  })

  it('are one per point, by the model their rule gives', () => {
    const byModel = instancesByModel(layer, trees)
    expect([...byModel.keys()]).toEqual(['https://x/tree.fbx', 'https://x/oak.glb'])
    expect(byModel.get('https://x/tree.fbx')).toEqual([
      { id: 't1', lon: 13.448, lat: 52.443, height: 15, color: '#2e7d32' },
      { id: 't2', lon: 13.449, lat: 52.444, height: 8 },
    ])
    expect(byModel.get('https://x/oak.glb')).toEqual([{ id: 't3', lon: 13.45, lat: 52.445, height: 22.5, color: '#827717' }])
    expect(instancesByModel(layer, undefined).size).toBe(0)
  })

  it('are scaled to their height and painted in their colour, the trunk keeping its own', () => {
    const source = new THREE.Group()
    const trunk = new THREE.Mesh(new THREE.BoxGeometry(1, 4, 1), new THREE.MeshPhongMaterial({ color: 0x795548 }))
    trunk.name = 'Cylinder'
    trunk.position.y = 2
    const crown = new THREE.Mesh(new THREE.SphereGeometry(2), new THREE.MeshPhongMaterial({ color: 0xcccccc }))
    crown.name = 'Icosphere'
    crown.position.y = 6
    source.add(trunk, crown)
    // The model reaches from 0 to 8 units; 16 m tall is twice its size.
    const group = instancedOf(THREE, source, [
      { position: [0, 0, 0], rotation: 0, scale: 1, height: 16, color: '#ff0000' },
      { position: [5, 0, 0], rotation: 0, scale: 1 },
    ])
    const [trunkMesh, crownMesh] = group.children
    const matrix = new THREE.Matrix4()
    crownMesh.getMatrixAt(0, matrix)
    expect(new THREE.Vector3(0, 2, 0).applyMatrix4(matrix).y).toBeCloseTo(16, 6)
    expect(trunkMesh.instanceColor).toBeNull()
    const color = new THREE.Color()
    crownMesh.getColorAt(0, color)
    expect(color.getHexString()).toBe('ff0000')
    crownMesh.getColorAt(1, color)
    expect(color.getHexString()).toBe('cccccc')
    expect(crownMesh.material.color.getHexString()).toBe('ffffff')
  })
})

describe('the width of model instances (#1282)', () => {
  it('comes from a property in metres, as the crown of a Jena tree', () => {
    const layer = { id: 'b', url: 'https://x/tree.fbx', heightProperty: 'Baumhöhe', widthProperty: 'Kronendurchmesser', rules: [{ property: 'Baumart', value: 'Tilia*', color: '#4caf50' }] }
    expect(widthFor(layer, { Kronendurchmesser: 9 })).toBe(9)
    expect(widthFor(layer, { Kronendurchmesser: '' })).toBeUndefined()
    const byModel = instancesByModel(layer, {
      features: [{ id: 'Bäume.101', geometry: { type: 'Point', coordinates: [11.615, 50.958] }, properties: { Baumart: 'Tilia cordata, Winterlinde', Baumhöhe: 14, Kronendurchmesser: 9 } }],
    })
    expect(byModel.get('https://x/tree.fbx')).toEqual([{ id: 'Bäume.101', lon: 11.615, lat: 50.958, height: 14, width: 9, color: '#4caf50' }])
  })

  it('scales the model across to it, and up to its height', () => {
    const source = new THREE.Group()
    source.add(new THREE.Mesh(new THREE.BoxGeometry(2, 4, 2), new THREE.MeshBasicMaterial()))
    const [mesh] = instancedOf(THREE, source, [{ position: [0, 0, 0], rotation: 0, scale: 1, height: 12, width: 8 }]).children
    const matrix = new THREE.Matrix4()
    mesh.getMatrixAt(0, matrix)
    const corner = new THREE.Vector3(1, 2, 1).applyMatrix4(matrix)
    expect(corner.y).toBeCloseTo(12, 9)
    expect(corner.x).toBeCloseTo(4, 9)
    expect(corner.z).toBeCloseTo(4, 9)
  })
})

describe('the colours of a model layer (#1282)', () => {
  it('paint the model where no rule does, and the trunk in its own', () => {
    const source = new THREE.Group()
    const trunk = new THREE.Mesh(new THREE.BoxGeometry(1, 4, 1), new THREE.MeshPhongMaterial({ color: 0xcccccc }))
    trunk.name = 'Cylinder'
    const crown = new THREE.Mesh(new THREE.SphereGeometry(2), new THREE.MeshPhongMaterial({ color: 0xcccccc }))
    source.add(trunk, crown)
    const group = instancedOf(THREE, source, [
      { position: [0, 0, 0], rotation: 0, scale: 1 },
      { position: [5, 0, 0], rotation: 0, scale: 1, color: '#ff0000' },
    ], { color: '#5b8c3a', trunkColor: '#6b4f32' })
    const [trunkMesh, crownMesh] = group.children
    expect(trunkMesh.material.color.getHexString()).toBe('6b4f32')
    expect(trunk.material.color.getHexString()).toBe('cccccc')
    const color = new THREE.Color()
    crownMesh.getColorAt(0, color)
    expect(color.getHexString()).toBe('5b8c3a')
    crownMesh.getColorAt(1, color)
    expect(color.getHexString()).toBe('ff0000')
  })
})
