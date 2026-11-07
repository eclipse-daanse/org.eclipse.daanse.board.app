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
 * The 3D models of a map as one MapLibre custom layer, drawn with three.js
 * into MapLibre's own WebGL context (#1281). In the 3D pass it shares the
 * depth buffer with the buildings, so a building in front hides a tree and
 * a tree in front hides a building.
 *
 * Every model is drawn once per mesh of its file as an InstancedMesh: a
 * thousand trees are one draw call per mesh. The model stands with its
 * lowest point on the ground. three is loaded when the first model is,
 * not with the map.
 */

import type { CustomLayerInterface, CustomRenderMethodInput, Map as MapLibreMap } from 'maplibre-gl'
import { loadModel } from './modelLoader'
import { inPart, type PartEncodingLike } from './encodings'
import { originOf, placementsOf, type Origin, type PlacedLayer, type InstancePlacement } from './placement'

export const MODELS_ID = 'daanse:models'

/** A model layer as far as it is drawn - the model's names. */
export interface DrawnModelLayer extends PlacedLayer {
  id?: string
  visible?: boolean
  url?: string
  format?: string
  /** The parts of the model with colours of their own (#1296). */
  parts?: PartEncodingLike[]
}

/** The custom layer, and how the widget hands it the model layers. */
export interface ModelCustomLayer extends CustomLayerInterface {
  update(layers: DrawnModelLayer[]): void
}

/**
 * One InstancedMesh per mesh of the file, the instances placed: moved,
 * turned about the vertical and scaled in the frame, the model lifted so
 * that its lowest point is on the ground.
 */
export function instancedOf(THREE: any, source: any, placements: InstancePlacement[], parts: PartEncodingLike[] = []): any {
  const group = new THREE.Group()
  source.updateMatrixWorld(true)
  const box = new THREE.Box3().setFromObject(source)
  const lift = Number.isFinite(box.min.y) ? -box.min.y : 0
  const meshes: any[] = []
  source.traverse((node: any) => {
    if (node.isMesh) meshes.push(node)
  })
  const at = new THREE.Matrix4()
  const turn = new THREE.Matrix4()
  const size = new THREE.Matrix4()
  const ground = new THREE.Matrix4().makeTranslation(0, lift, 0)
  const tall = Number.isFinite(box.max.y - box.min.y) ? box.max.y - box.min.y : 0
  const wide = Math.max(box.max.x - box.min.x, box.max.z - box.min.z)
  for (const mesh of meshes) {
    // The part a mesh belongs to: the first whose pattern its names match (#1296).
    const part = parts.findIndex((each) => inPart(each, `${mesh.name ?? ''} ${materialNames(mesh)}`))
    const colorFor = (placement: InstancePlacement) => (part >= 0 ? placement.partColors?.[part] : placement.color)
    const paint = placements.some((placement) => !!colorFor(placement))
    const material = paint ? whiteCopyOf(mesh.material) : mesh.material
    const instanced = new THREE.InstancedMesh(mesh.geometry, material, placements.length)
    const own = new THREE.Color(firstColorOf(mesh.material))
    placements.forEach((placement, index) => {
      at.makeTranslation(...placement.position)
      turn.makeRotationY(placement.rotation)
      // A height in metres scales the model to it; otherwise the scale of layer and instance.
      const factor = placement.height && tall > 0 ? placement.height / tall : placement.scale
      // A width in metres scales across; without one, across as up.
      const across = placement.width && wide > 0 ? placement.width / wide : factor
      size.makeScale(across, factor, across)
      if (paint) {
        const color = colorFor(placement)
        instanced.setColorAt(index, color ? new THREE.Color(color) : own)
      }
      const matrix = new THREE.Matrix4().multiplyMatrices(at, turn).multiply(size).multiply(ground).multiply(mesh.matrixWorld)
      instanced.setMatrixAt(index, matrix)
    })
    instanced.instanceMatrix.needsUpdate = true
    if (instanced.instanceColor) instanced.instanceColor.needsUpdate = true
    instanced.frustumCulled = false
    group.add(instanced)
  }
  return group
}

const materialNames = (mesh: any) =>
  (Array.isArray(mesh.material) ? mesh.material : [mesh.material]).map((m: any) => m?.name ?? '').join(' ')

/** The colour a mesh is drawn in, to keep for an instance without a rule colour. */
const firstColorOf = (material: any) => (Array.isArray(material) ? material[0] : material)?.color?.getHex?.() ?? 0xffffff

/** The material in white, so that an instance colour shows as itself, not darkened by the model's. */
function whiteCopyOf(material: any): any {
  const copy = (one: any) => {
    const made = one?.clone?.() ?? one
    made?.color?.set?.(0xffffff)
    return made
  }
  return Array.isArray(material) ? material.map(copy) : copy(material)
}

/** The matrix from the frame (x east, y up, z south, metres) to web mercator units. */
export function frameMatrix(THREE: any, origin: Origin): any {
  return new THREE.Matrix4()
    .makeTranslation(origin.x, origin.y, 0)
    .scale(new THREE.Vector3(origin.meter, -origin.meter, origin.meter))
    .multiply(new THREE.Matrix4().makeRotationX(Math.PI / 2))
}

export function createModelLayer(): ModelCustomLayer {
  let THREE: any
  let renderer: any
  let scene: any
  let camera: any
  let root: any
  let map: MapLibreMap | undefined
  let origin: Origin | null = null
  let wanted: DrawnModelLayer[] = []
  let generation = 0

  const dispose = (group: any) =>
    group?.traverse?.((node: any) => {
      if (node.isInstancedMesh) node.dispose?.()
    })

  async function rebuild() {
    const run = ++generation
    if (!THREE || !scene) return
    const shown = wanted.filter((layer) => layer.visible !== false && String(layer.url ?? '').trim())
    const nextOrigin = originOf(shown.flatMap((layer) => [...(layer.instances ?? [])]))
    const next = new THREE.Group()
    if (nextOrigin) {
      for (const layer of shown) {
        let source: any
        try {
          source = await loadModel(String(layer.url).trim(), layer.format)
        } catch {
          continue // the settings say why
        }
        if (run !== generation) return
        const placements = placementsOf(layer, nextOrigin)
        if (placements.length) next.add(instancedOf(THREE, source, placements, layer.parts ?? []))
      }
    }
    if (run !== generation) return
    if (root) {
      scene.remove(root)
      dispose(root)
    }
    root = next
    origin = nextOrigin
    scene.add(root)
    map?.triggerRepaint()
  }

  return {
    id: MODELS_ID,
    type: 'custom',
    renderingMode: '3d',
    onAdd(added: MapLibreMap, gl: WebGLRenderingContext | WebGL2RenderingContext) {
      map = added
      void import('three').then((three) => {
        THREE = (three as any).default ?? three
        if (!map) return
        camera = new THREE.Camera()
        scene = new THREE.Scene()
        scene.add(new THREE.AmbientLight(0xffffff, 0.45))
        const sun = new THREE.DirectionalLight(0xffffff, 0.6)
        sun.position.set(-0.4, 1, 0.6).normalize()
        scene.add(sun)
        renderer = new THREE.WebGLRenderer({ canvas: map.getCanvas(), context: gl, antialias: true })
        renderer.autoClear = false
        void rebuild()
      })
    },
    onRemove() {
      generation++
      dispose(root)
      renderer?.dispose?.()
      renderer = scene = camera = root = undefined
      map = undefined
    },
    render(_gl: WebGLRenderingContext | WebGL2RenderingContext, options: CustomRenderMethodInput) {
      if (!renderer || !origin || !root?.children.length) return
      const main = new THREE.Matrix4().fromArray(Array.from((options as any).defaultProjectionData.mainMatrix as ArrayLike<number>))
      camera.projectionMatrix = main.multiply(frameMatrix(THREE, origin))
      renderer.resetState()
      renderer.render(scene, camera)
    },
    update(layers: DrawnModelLayer[]) {
      wanted = layers
      void rebuild()
    },
  }
}
