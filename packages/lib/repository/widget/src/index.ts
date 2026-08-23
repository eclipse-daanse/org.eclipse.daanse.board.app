/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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
 * The widget palette bundle.
 *
 * There is no activate and no hand-written tracker any more: the palette is
 * the TrackedWidgetRepository component, whose `@injectAll` reference does
 * what a ServiceTracker does in OSGi - the loader registers the component
 * under WidgetRepository, keeps its provider collection current, and
 * withdraws everything when the bundle stops.
 */

export {
  TrackedWidgetRepository,
  WIDGET_SERVICE_ID,
  WIDGET_REPOSITORY,
  identifier,
  type WidgetConfig,
  type WidgetProvider,
  type WidgetRepository,
} from './classes'
