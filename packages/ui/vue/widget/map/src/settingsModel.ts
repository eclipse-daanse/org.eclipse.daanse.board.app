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
 * A map's settings as the model's own object.
 *
 * The map has a hand-written settings component, so the settings form
 * never adopts its configuration, and a board hands it over as parsed JSON:
 * a plain object with plain arrays. Nothing listens to a plain array, so a
 * service or a layer added in the settings reached neither the list it was
 * added to, nor the preview, nor the board - until a mode switch mounted
 * everything again (#1262).
 *
 * Adopted into a MapSettings, every list is a containment EList, and one
 * useEObject on the settings hears every change below them. The settings,
 * the preview and the board all hold the same configuration, so the
 * adoption is cached by the stored object: whichever of them comes first
 * makes it, and the others get the same instance, before and after the
 * write-back reaches them.
 */

import type { EObject } from '@emfts/core'
import { adopt, isModelled } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { MapSettingsFactory } from './gen/MapSettingsFactory'
import type { MapSettings } from './gen/MapSettings'
import type { Layer } from './gen/Layer'
import { clientOf } from './serviceClient'

/* Read when used: the package needs the events package registered first */
const factory = () => MapSettingsFactory.eINSTANCE

/*
 * Where the map starts when nothing says otherwise.
 *
 * The model carries this as defaultValueLiteral on a many-valued feature,
 * which the generator cannot express: an EList is created empty by its
 * getter and takes no initialiser. So it is applied here, on adoption,
 * before anything is drawn - leaflet given an empty centre throws.
 */
export const DEFAULT_CENTER = [50.93115286, 11.60392726]

/** Adoptions already made, by the stored object they were made from. */
const adopted = new WeakMap<object, MapSettings>()

/** Whether a value is a client that talks to its service, not its stored form. */
function isLiveClient(value: unknown): boolean {
  const client = clientOf(value)
  if (!client || typeof client !== 'object') return false
  return [client.getOperationUrl, client.getLayers, client.getFeatureTypes, client.fetch]
    .some((method) => typeof method === 'function')
}

/** The names of a layer's features - everything else on a stored one is left behind. */
function layerFeatures(): Set<string> {
  return new Set(
    factory().createLayer().eClass().getEAllStructuralFeatures()
      .map((feature) => feature.getName())
      .filter((name): name is string => !!name),
  )
}

/**
 * What a layer keeps of its service.
 *
 * Only a WMS layer draws through a client of its own; a WFS layer names
 * its service by id, and the others read a data source by datasourceId.
 * A stored layer may hold the whole serialised client, or a data source
 * with its repositories inside (#1252): of a WMS client the address is
 * kept, to rebuild it from, and of the rest nothing.
 */
function storedService(type: unknown, service: unknown): unknown {
  if (service === null || service === undefined) return undefined
  if (type !== 'WMSLayer') return typeof service === 'string' ? service : undefined
  if (typeof service !== 'object') return service
  if (isLiveClient(service)) return service
  const client = clientOf(service)
  const url = client?._capabilitiesUrl || client?.url || client?.serviceUrl
  return url ? { url } : undefined
}

/**
 * A layer as the model has it.
 *
 * Takes a node of the service tree, a stored layer or a preset alike: only
 * the features of Layer are kept, a live client stays as it is, a stored
 * service is cut down to its address, and the nested child layers of a
 * tree node - an array, where the model holds one - are left behind.
 */
export function modelledLayer(entry: Record<string, unknown>): Layer {
  if (isModelled(entry)) return entry as unknown as Layer
  const features = layerFeatures()
  const kept: Record<string, unknown> = {}
  for (const [name, value] of Object.entries(entry)) {
    if (!features.has(name) || name === 'childs') continue
    if (value === null || value === undefined) continue
    kept[name] = name === 'service' ? storedService(entry.type, value) : value
  }
  if (kept.service === undefined) delete kept.service
  if (Array.isArray(kept.styleIds)) kept.styleIds = kept.styleIds.filter((id) => typeof id === 'string')
  return adopt(factory().createLayer(), kept)
}

/** A stored service: its stored client is junk once stored, the address is what counts. */
function storedServiceEntry(entry: Record<string, unknown>): Record<string, unknown> {
  if (isModelled(entry)) return entry
  const { service, ...rest } = entry
  return isLiveClient(service) ? { ...rest, service } : rest
}

/**
 * The settings of a map as a MapSettings, adopted once per stored object.
 *
 * Already modelled input is handed back as it is.
 */
export function modelledSettings(stored: unknown): MapSettings | undefined {
  if (!stored || typeof stored !== 'object') return undefined
  if (isModelled(stored)) return stored as unknown as MapSettings

  const held = adopted.get(stored)
  if (held) return held

  const source = stored as Record<string, unknown>
  const prepared: Record<string, unknown> = { ...source }
  if (Array.isArray(source.layers)) {
    prepared.layers = source.layers
      .filter((layer) => layer && typeof layer === 'object')
      .map((layer) => modelledLayer(layer as Record<string, unknown>))
  }
  if (Array.isArray(source.services)) {
    prepared.services = source.services
      .filter((service) => service && typeof service === 'object')
      .map((service) => storedServiceEntry(service as Record<string, unknown>))
  }
  if (Array.isArray(source.datasourceIds)) {
    prepared.datasourceIds = source.datasourceIds.filter((id) => typeof id === 'string')
  }

  const made = adopt(factory().createMapSettings(), prepared)
  if (made.center.size() === 0) for (const value of DEFAULT_CENTER) made.center.add(value)
  adopted.set(stored, made)
  return made
}

/**
 * A literal as the model's object of the class given - for the entries
 * the settings add to a style, a condition list or an observation list.
 * A containment list takes nothing else.
 */
export function modelled<T extends EObject>(create: () => T, literal: object): T {
  if (isModelled(literal)) return literal as unknown as T
  return adopt(create(), literal)
}
