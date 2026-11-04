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
 * The workspace model, and the one instance of it an application has.
 *
 * Everything a board application holds hangs under a single root by
 * containment. That is what lets one EContentAdapter at the root hear every
 * change anywhere below - the reactivity the Pinia stores used to provide
 * by copying state and writing both halves by hand.
 *
 * The root is a service like the repositories are, so a bundle asks for it
 * instead of importing a module-level singleton that each bundle would get
 * its own copy of.
 */

import { EPackageRegistry } from '@emfts/core'
import { serviceId } from 'org.eclipse.daanse.board.app.lib.core'
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core'
import { WorkspacePackage } from './gen/WorkspacePackage'
import { WorkspaceImpl } from './gen/WorkspaceImpl'
import type { Workspace } from './gen/Workspace'

/*
 * Building the EPackage on load: until it exists the class literals are
 * null, an instance cannot say what it is, and nothing can resolve a
 * feature by name.
 */
void WorkspacePackage.eINSTANCE

/*
 * And into the registry, which is what lets a stored workspace resolve its
 * own eClass on the way back in. Generated packages resolve foreign types
 * through EPackageRegistry.INSTANCE but do not enter themselves into it,
 * so whoever owns the package has to. Reported as emf.ts.codegen#36.
 */
EPackageRegistry.INSTANCE.registerPackage(WorkspacePackage.eINSTANCE)

export type { Workspace } from './gen/Workspace'
export type { Connection } from './gen/Connection'
export type { Datasource } from './gen/Datasource'
export type { Board } from './gen/Board'
export type { Page } from './gen/Page'
export type { Widget } from './gen/Widget'
export type { LayoutItem } from './gen/LayoutItem'
export type { Weather } from './gen/Weather'
export type { RegionShape } from './gen/RegionShape'
export type { BoxShape } from './gen/BoxShape'
export type { RectangleShape } from './gen/RectangleShape'
export type { EllipseShape } from './gen/EllipseShape'
export type { PolygonShape } from './gen/PolygonShape'
export type { RegionPoint } from './gen/RegionPoint'
export type { Variable } from './gen/Variable'
export type { EventMapping } from './gen/EventMapping'
export type { DataSelection } from './gen/DataSelection'
export type { DataFilter } from './gen/DataFilter'
export { SelectionPick } from './gen/SelectionPick'
export { FilterOperator } from './gen/FilterOperator'
export { WeatherKind } from './gen/WeatherKind'
export { WeatherRegion } from './gen/WeatherRegion'
export {
  createWeather,
  weatherKindOf,
  weatherRegionOf,
  affectsWidgetsOf,
  WEATHER_DEFAULTS,
  WEATHER_KINDS,
  WEATHER_REGIONS,
  readShapes,
  writeShapes,
  shapeSpecOf,
  shapeFromSpec,
  liftTypedWeatherRegions,
  DRAW_WEATHER_REGION,
  type DrawWeatherRegionEvent,
  type ShapeSpec,
} from './weather'
/* The Ecore as text, for the sentences a form shows beside its fields. */
export { default as workspaceEcore } from '../model/workspace.ecore?raw'
export { WorkspaceImpl } from './gen/WorkspaceImpl'
export { ConnectionImpl } from './gen/ConnectionImpl'
export { DatasourceImpl } from './gen/DatasourceImpl'
export { BoardImpl } from './gen/BoardImpl'
export { PageImpl } from './gen/PageImpl'
export { WidgetImpl } from './gen/WidgetImpl'
export { LayoutItemImpl } from './gen/LayoutItemImpl'
export { WeatherImpl } from './gen/WeatherImpl'
export { RectangleShapeImpl } from './gen/RectangleShapeImpl'
export { EllipseShapeImpl } from './gen/EllipseShapeImpl'
export { PolygonShapeImpl } from './gen/PolygonShapeImpl'
export { RegionPointImpl } from './gen/RegionPointImpl'
export { VariableImpl } from './gen/VariableImpl'
export { EventMappingImpl } from './gen/EventMappingImpl'
export { DataSelectionImpl } from './gen/DataSelectionImpl'
export { DataFilterImpl } from './gen/DataFilterImpl'
export { WorkspacePackage } from './gen/WorkspacePackage'
export { WorkspaceFactory } from './gen/WorkspaceFactory'

/** Typed service id - the name and the contract declared once, here. */
export const WORKSPACE = serviceId<Workspace>('Workspace')

/** The matching symbol for Vue-side injection (Symbol.for of the id). */
export const identifier = Symbol.for(WORKSPACE)

export function activate({ services }: ActivationContext) {
  services.register(WORKSPACE, new WorkspaceImpl())
}

export function deactivate({ services }: ActivationContext) {
  services.unregister(WORKSPACE)
}
