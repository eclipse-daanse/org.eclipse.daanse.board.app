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
 * ********************************************************************/

// @vitest-environment jsdom

/*
 * The rule #1237 was about, end to end: "slider change -> set the global
 * variable Wind from the event's value". The control emits on the bus, the
 * bridge hands the event to the manager, the manager resolves the path in
 * the payload and calls the variable repository - all of them the real
 * ones, with the rule stored as the dialog writes it.
 */
import { describe, it, expect, vi } from 'vitest'
import { flushPromises, mount } from '@vue/test-utils'
import { TinyEmitter } from 'tiny-emitter'
import { EVENT_ACTIONS_REGISTRY, EventsPackage } from 'org.eclipse.daanse.board.app.lib.api.events'
import { identifiers, TINY_EMITTER } from 'org.eclipse.daanse.board.app.lib.core'
import {
  EcoreMetadataService,
  EventActionsRegistry,
  EventBusBridge,
  EventManager,
  EventRegistry,
} from 'org.eclipse.daanse.board.app.lib.events'
import {
  CONSTANT_VARIABLE,
  ConstantVariable,
  ConstantVariableSymbol,
  VariableEvents,
} from 'org.eclipse.daanse.board.app.lib.variables'
import { PageImpl, VariableImpl, WORKSPACE, WorkspaceImpl, BoardImpl } from 'org.eclipse.daanse.board.app.lib.model.workspace'
import { VariableRepository } from 'org.eclipse.daanse.board.app.lib.repository.variable'
/* The model the variable bundle registers its actions from, as it does. */
import variableActionsEcore from '../../../../../../lib/repository/variable/model/VariableActions.ecore?raw'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { ControlwidgetsPackage } from '../gen/ControlwidgetsPackage'
import SliderWidget from '../SliderWidget.vue'
import { SliderSettingsImpl } from '../gen/SliderSettingsImpl'
import { SliderWidgetEvents } from '../events/SliderWidgetEvents'
import ToggleWidget from '../ToggleWidget.vue'
import { ToggleSettingsImpl } from '../gen/ToggleSettingsImpl'
import { ToggleWidgetEvents } from '../events/ToggleWidgetEvents'
import { settingsOf } from './helpers'

vi.mock('vue-router', () => ({
  useRoute: () => ({ params: { pageid: 'page-1' } }),
  useRouter: () => ({ push: vi.fn(), replace: vi.fn() }),
}))

void EventsPackage.eINSTANCE
void ControlwidgetsPackage.eINSTANCE

/** Everything between the control and the variable, wired as the bundles wire it. */
interface Given {
  /** What Wind holds before the slider moves; it is created when this is set. */
  wind?: unknown
  /** A page variable of the same name on the slider's page, created first. */
  pageWind?: unknown
  /** Wind is in the loaded workspace before its type is registered. */
  typeLater?: boolean
}

async function board(given: Given = { wind: 0 }) {
  const bus = new TinyEmitter()
  const actions = new EventActionsRegistry()
  const events = new EventRegistry()
  const metadata = new EcoreMetadataService()
  actions.setEcoreMetadataService(metadata)
  events.setEcoreMetadataService(metadata)
  const manager = new EventManager(actions)
  const bridge = new EventBusBridge(manager, events, actions)

  const workspace = new WorkspaceImpl()
  workspace.board = new BoardImpl()
  const page = new PageImpl()
  page.id = 'page-1'
  workspace.board.pages.push(page)

  const services = new Map<string, unknown>([
    [TINY_EMITTER, bus],
    [WORKSPACE, workspace],
    [
      CONSTANT_VARIABLE,
      (name: string, config: any) => {
        const variable = new ConstantVariable()
        variable.eventBus = bus
        variable.init(name, config)
        return variable
      },
    ],
  ])
  const registry = {
    getRequired<T>(id: string): T {
      if (!services.has(id)) throw new Error(`no ${id}`)
      return services.get(id) as T
    },
  }
  bridge.setup(registry)

  const variables = new VariableRepository(registry)
  const registerType = () =>
    variables.registerVariableType(CONSTANT_VARIABLE, { Variable: ConstantVariableSymbol, Settings: undefined })
  if (given.typeLater) {
    /* As a stored workspace brings it: the model, and no running object yet. */
    const held = new VariableImpl()
    held.uid = 'wind-uid'
    held.name = 'Wind'
    held.type = CONSTANT_VARIABLE
    held.scope = 'global'
    held.definition = { value: given.wind }
    workspace.variables.push(held)
    variables.rebuildLive()
    registerType()
  } else {
    registerType()
    if (given.pageWind !== undefined) {
      variables.registerVariable('Wind', CONSTANT_VARIABLE, { value: given.pageWind, scope: 'page', pageId: 'page-1' })
    }
    /* Wind, defined as a global variable the way the variables page does. */
    if (given.wind !== undefined) {
      variables.registerVariable('Wind', CONSTANT_VARIABLE, {
        value: given.wind,
        scope: 'global',
        accessMode: 'external-writable',
      })
    }
  }
  /* What the variable bundle's activate does (registerVariableActions). */
  await actions.registerActionsFromEcoreString('SystemVariableActions', variableActionsEcore, 'system', 'VariableActions.ecore')
  actions.registerInstance('VariableRepository', variables)
  await flushPromises()

  events.registerWidget('SliderWidget', SliderWidgetEvents)
  events.registerWidget('ToggleWidget', ToggleWidgetEvents)

  return { bus, actions, events, manager, variables, workspace }
}

/**
 * The rule as the dialog stores it: scoped to the widget, the system
 * action chosen from the list the registry offers, its first parameter a
 * typed name, its second the payload's value - and through JSON, as the
 * workspace keeps it.
 */
function storedRule(actions: EventActionsRegistry, widgetId: string, eventType: string) {
  const system = actions.getWidgetTypes().find((type) => type.context === 'system'
    && type.actions.some((action) => action.methodName === 'setGlobalVariable'))!
  const declared = system.actions.find((action) => action.methodName === 'setGlobalVariable')!.parameters
  const nameAt = declared.findIndex((param) => param.name === 'variableName')
  const valueAt = declared.findIndex((param) => param.name === 'value')
  const actionArgs: unknown[] = []
  actionArgs[nameAt] = 'Wind'
  return JSON.parse(JSON.stringify({
    id: 'rule-1',
    context: 'widget',
    contextId: widgetId,
    eventType,
    conditions: [],
    actions: [
      {
        targetContext: 'system',
        actionName: 'setGlobalVariable',
        actionArgs,
        payloadMapping: [{ payloadPath: 'value', argIndex: valueAt }],
      },
    ],
  }))
}

/** Mounts the slider, scoped by the stored rule, and moves its thumb to 42. */
async function slideTo42(given?: Given) {
  const wired = await board(given)
  const { bus, actions, manager } = wired
  manager.setAllMappings([storedRule(actions, 'w1', 'SliderWidget:change')])

  const settings = settingsOf(() => new SliderSettingsImpl(), {
    target: new VariableWrapper(''),
    upperTarget: new VariableWrapper(''),
    min: new VariableWrapper('0'),
    max: new VariableWrapper('100'),
    step: new VariableWrapper('1'),
    unit: new VariableWrapper(''),
    markEvery: new VariableWrapper(''),
  })
  const wrapper = mount(SliderWidget, {
    props: { id: 'w1', configv: settings },
    attachTo: document.body,
    global: {
      provide: {
        [EVENT_ACTIONS_REGISTRY as unknown as symbol]: actions,
        [identifiers.TINY_EMITTER as unknown as symbol]: bus,
      },
    },
  })
  await flushPromises()

  const announced = vi.fn()
  bus.on(VariableEvents.VariableUpdated, announced)
  const input = wrapper.find('input[data-thumb="lower"]')
  ;(input.element as HTMLInputElement).value = '42'
  await input.trigger('input')
  await flushPromises()
  wrapper.unmount()
  return { ...wired, announced }
}

/** The global Wind's running object, by the model's scope - not the first of the name. */
function globalWind(variables: VariableRepository, workspace: WorkspaceImpl) {
  const winds = workspace.variables.toArray().filter((v) => v.name === 'Wind' && (v.scope ?? 'global') === 'global')
  expect(winds).toHaveLength(1)
  return variables.getVariableById(winds[0].uid as string)
}

describe('a rule "slider change -> set global variable from value"', () => {
  it('writes the slider’s new value into the global variable', async () => {
    const { variables, workspace } = await slideTo42()
    expect(globalWind(variables, workspace).value).toBe(42)
  })

  it('overwrites a global variable that already holds a value, and says so', async () => {
    const { variables, workspace, announced } = await slideTo42({ wind: 7 })
    expect(workspace.variables.toArray().filter((v) => v.name === 'Wind')).toHaveLength(1)
    expect(globalWind(variables, workspace).value).toBe(42)
    /* What the variables page re-reads a value on. */
    expect(announced).toHaveBeenCalled()
  })

  it('writes the global variable, not a page variable of the same name', async () => {
    const { variables, workspace } = await slideTo42({ wind: 7, pageWind: 3 })
    expect(globalWind(variables, workspace).value).toBe(42)
    const onPage = workspace.variables.toArray().find((v) => v.name === 'Wind' && v.scope === 'page')!
    expect(variables.getVariableById(onPage.uid as string).value).toBe(3)
  })

  it('writes into a stored variable whose type arrived after the workspace, instead of adding a second', async () => {
    const { variables, workspace } = await slideTo42({ wind: 7, typeLater: true })
    expect(workspace.variables.toArray().filter((v) => v.name === 'Wind')).toHaveLength(1)
    expect(globalWind(variables, workspace).value).toBe(42)
  })
})

/*
 * The other controls send change through the same code (useControl.send)
 * with the same payload; the toggle stands for them here, operated by a
 * press rather than a drag.
 */
describe('a rule "toggle change -> set global variable from value"', () => {
  it('overwrites the global variable with the state the toggle went to', async () => {
    const { bus, actions, manager, variables, workspace } = await board({ wind: 'false' })
    manager.setAllMappings([storedRule(actions, 'w2', 'ToggleWidget:change')])
    const settings = settingsOf(() => new ToggleSettingsImpl(), {
      onLabel: new VariableWrapper('On'),
      onColor: new VariableWrapper(''),
      onValue: new VariableWrapper('true'),
      offValue: new VariableWrapper('false'),
      target: new VariableWrapper(''),
    })
    const wrapper = mount(ToggleWidget, {
      props: { id: 'w2', configv: settings },
      attachTo: document.body,
      global: {
        provide: {
          [EVENT_ACTIONS_REGISTRY as unknown as symbol]: actions,
          [identifiers.TINY_EMITTER as unknown as symbol]: bus,
        },
      },
    })
    await flushPromises()
    await wrapper.find('button').trigger('click')
    await flushPromises()
    wrapper.unmount()

    expect(globalWind(variables, workspace).value).toBe(true)
  })
})
