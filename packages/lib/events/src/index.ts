/*
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

*/

import { Payload } from './gen/Payload';
import { WidgetActionInterface } from './gen/WidgetActionInterface';
import { SystemActionInterface } from './gen/SystemActionInterface';
import { PageActionInterface } from './gen/PageActionInterface';
import { Condition } from './manager/Condition';
import { Comperator } from './manager/Comperator';
import { EventRegistry, EVENT_REGISTRY, type MetadataEntry, type PayloadMetadata, type PayloadPropertyInfo, type WidgetEventDefinition } from './registry/EventRegistry';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY, type EventAction, type EventActionContext, type WidgetTypeRegistration } from './registry/EventActionsRegistry';
import { EventManager, EVENT_MANAGER, type EventActionMapping, type ActionDefinition, type PayloadToArgMapping } from './manager/EventManager';
import { EventBusBridge, EVENT_BUS_BRIDGE } from './bridge/EventBusBridge';
import { WidgetAction, ActionParameter, getWidgetActions, type WidgetActionMetadata, type ActionParameterMetadata } from './decorators/WidgetAction';
import { EcoreMetadataService, ECORE_METADATA_SERVICE, type EcoreActionMetadata, type EcoreParameterMetadata } from './registry/EcoreMetadataService';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { loggerFactory } from 'org.eclipse.daanse.board.app.lib.logger';

const log = loggerFactory.createLogger('daanse:events:registry');

const identifier = EVENT_REGISTRY;
const actionsIdentifier = EVENT_ACTIONS_REGISTRY;
const managerIdentifier = EVENT_MANAGER;
const bridgeIdentifier = EVENT_BUS_BRIDGE;
const ecoreServiceIdentifier = ECORE_METADATA_SERVICE;

log('Registering EventRegistry, container: %o', container);
if (!container.isBound(identifier)) {
  container
    .bind<EventRegistry>(identifier)
    .to(EventRegistry)
    .inSingletonScope();
  log('EventRegistry bound to %s', identifier.toString());
}

if (!container.isBound(actionsIdentifier)) {
  container
    .bind<EventActionsRegistry>(actionsIdentifier)
    .to(EventActionsRegistry)
    .inSingletonScope();
  log('EventActionsRegistry bound to %s', actionsIdentifier.toString());
}

if (!container.isBound(managerIdentifier)) {
  container
    .bind<EventManager>(managerIdentifier)
    .to(EventManager)
    .inSingletonScope();
  log('EventManager bound to %s', managerIdentifier.toString());
}

if (!container.isBound(bridgeIdentifier)) {
  container
    .bind<EventBusBridge>(bridgeIdentifier)
    .to(EventBusBridge)
    .inSingletonScope();
  log('EventBusBridge bound to %s', bridgeIdentifier.toString());

  // Setup Bridge nach Registrierung
  const bridge = container.get<EventBusBridge>(bridgeIdentifier);
  bridge.setup(container);
}

if (!container.isBound(ecoreServiceIdentifier)) {
  container
    .bind<EcoreMetadataService>(ecoreServiceIdentifier)
    .to(EcoreMetadataService)
    .inSingletonScope();
  log('EcoreMetadataService bound to %s', ecoreServiceIdentifier.toString());

  // Connect EcoreMetadataService with EventActionsRegistry and EventRegistry
  const ecoreService = container.get<EcoreMetadataService>(ecoreServiceIdentifier);
  const actionsRegistry = container.get<EventActionsRegistry>(actionsIdentifier);
  const eventRegistry = container.get<EventRegistry>(identifier);

  actionsRegistry.setEcoreMetadataService(ecoreService);
  eventRegistry.setEcoreMetadataService(ecoreService);

  log('EcoreMetadataService connected to EventActionsRegistry and EventRegistry');
}

export {
  Payload,
  WidgetActionInterface,
  SystemActionInterface,
  PageActionInterface,
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
  EVENT_ACTIONS_REGISTRY,
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
  type EventActionMapping,
  type ActionDefinition,
  type PayloadToArgMapping
};
