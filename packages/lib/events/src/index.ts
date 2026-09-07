/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/

/*
 * The contract comes from the api package now - it owns EventModel.ecore.
 * Re-exported here so the many places that import these from the
 * implementation keep working while they are moved over one at a time.
 */
import type {
  Payload,
  WidgetActionInterface,
  SystemActionInterface,
  PageActionInterface,
} from 'org.eclipse.daanse.board.app.lib.api.events';
import { Condition } from './manager/Condition';
import { Comperator } from './manager/Comperator';
import { EventRegistry, EVENT_REGISTRY, EVENT_REGISTRY_ID, type MetadataEntry, type PayloadMetadata, type PayloadPropertyInfo, type WidgetEventDefinition } from './registry/EventRegistry';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY, EVENT_ACTIONS_REGISTRY_ID,
  type EventAction, type EventActionContext, type WidgetTypeRegistration, type RegisteredInstance } from './registry/EventActionsRegistry';
import { EventManager, EVENT_MANAGER, EVENT_MANAGER_ID, type EventActionMapping, type ActionDefinition, type PayloadToArgMapping } from './manager/EventManager';
import { EventBusBridge, EVENT_BUS_BRIDGE, EVENT_BUS_BRIDGE_ID } from './bridge/EventBusBridge';
import { WidgetAction, ActionParameter, getWidgetActions, type WidgetActionMetadata, type ActionParameterMetadata } from './decorators/WidgetAction';
import { EcoreMetadataService, ECORE_METADATA_SERVICE, ECORE_METADATA_SERVICE_ID, type EcoreActionMetadata, type EcoreParameterMetadata } from './registry/EcoreMetadataService';
import type { ActivationContext } from 'org.eclipse.daanse.board.app.lib.core';
import { loggerFactory } from 'org.eclipse.daanse.board.app.lib.logger';

// Export Ecore model content for external use
import SystemActionsEcoreContent from '../model/SystemActions.ecore?raw';

const log = loggerFactory.createLogger('daanse:events:registry');

const identifier = EVENT_REGISTRY;
const actionsIdentifier = EVENT_ACTIONS_REGISTRY;
const managerIdentifier = EVENT_MANAGER;
const bridgeIdentifier = EVENT_BUS_BRIDGE;
const ecoreServiceIdentifier = ECORE_METADATA_SERVICE;

/**
 * Meldet die Ereignis-Bausteine an und verdrahtet sie.
 *
 * Die Reihenfolge innerhalb der Funktion ist nicht beliebig: EventManager und
 * EventBusBridge loesen ihre Nachbarn ueber `@inject` auf, `construct` findet
 * sie also nur, wenn sie vorher registriert sind. Vorher ergab sich dieselbe
 * Reihenfolge aus der Abfolge der `if (!container.isBound(...))`-Bloecke -
 * sie stand da, war aber nirgends begruendet.
 */
export function activate({ services, log: ausgabe }: ActivationContext) {
  const eventRegistry = new EventRegistry()
  services.register(EVENT_REGISTRY_ID, eventRegistry)

  const actionsRegistry = new EventActionsRegistry()
  services.register(EVENT_ACTIONS_REGISTRY_ID, actionsRegistry)

  const eventManager = services.construct(EventManager)
  services.register(EVENT_MANAGER_ID, eventManager)

  const bridge = services.construct(EventBusBridge)
  services.register(EVENT_BUS_BRIDGE_ID, bridge)
  bridge.setup(services)

  const ecoreService = new EcoreMetadataService()
  services.register(ECORE_METADATA_SERVICE_ID, ecoreService)

  actionsRegistry.setEcoreMetadataService(ecoreService)
  eventRegistry.setEcoreMetadataService(ecoreService)

  ausgabe.info('Ereignis-Registries bereit')
}

export function deactivate({ services }: ActivationContext) {
  for (const id of [
    ECORE_METADATA_SERVICE_ID,
    EVENT_BUS_BRIDGE_ID,
    EVENT_MANAGER_ID,
    EVENT_ACTIONS_REGISTRY_ID,
    EVENT_REGISTRY_ID,
  ]) {
    services.unregister(id)
  }
}

/*
 * In emf mode these four are interfaces, so they carry no runtime value -
 * re-exporting them as values makes the bundle ask the api module for names
 * it does not have.
 */
export type {
  Payload,
  WidgetActionInterface,
  SystemActionInterface,
  PageActionInterface,
};

export {
  Condition,
  Comperator,
  EventRegistry,
  EventActionsRegistry,
  EventManager,
  EventBusBridge,
  EcoreMetadataService,
  WidgetAction,
  ActionParameter,
  getWidgetActions,
  identifier,
  actionsIdentifier,
  managerIdentifier,
  bridgeIdentifier,
  ecoreServiceIdentifier,
  EVENT_REGISTRY,
  EVENT_REGISTRY_ID,
  EVENT_ACTIONS_REGISTRY,
  EVENT_ACTIONS_REGISTRY_ID,
  EVENT_MANAGER,
  EVENT_BUS_BRIDGE,
  ECORE_METADATA_SERVICE,
  type MetadataEntry,
  type PayloadMetadata,
  type PayloadPropertyInfo,
  type WidgetEventDefinition,
  type EventAction,
  type EventActionContext,
  type WidgetActionMetadata,
  type ActionParameterMetadata,
  type EcoreActionMetadata,
  type EcoreParameterMetadata,
  type WidgetTypeRegistration,
  type RegisteredInstance,
  type EventActionMapping,
  type ActionDefinition,
  type PayloadToArgMapping,
  SystemActionsEcoreContent
};
