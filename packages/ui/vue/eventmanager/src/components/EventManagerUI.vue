<!--
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

-->
<script lang="ts" setup>
import 'reflect-metadata'
import { inject, ref, computed, onMounted } from 'vue'
import { EventManager, EVENT_MANAGER, EventRegistry, EVENT_REGISTRY, EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.api.events'
import { type EventActionMapping, type ActionDefinition, type WidgetEventDefinition, type EventActionContext, type WidgetTypeRegistration } from 'org.eclipse.daanse.board.app.lib.events'
import { Comperator } from 'org.eclipse.daanse.board.app.lib.events'
import { Condition } from 'org.eclipse.daanse.board.app.lib.events'
import { type PageRegistryI, identifier as PageIdentifier } from 'org.eclipse.daanse.board.app.lib.api.page'
import {
  DButton,
  DIcon,
  DInput,
  DModal,
  DSelect,
} from 'org.eclipse.daanse.board.app.ui.vue.controls'

let eventManager: EventManager
let eventRegistry: EventRegistry
let actionsRegistry: EventActionsRegistry
let pageRegistry: PageRegistryI

const mappings = ref<EventActionMapping[]>([])
const availableEvents = ref<WidgetEventDefinition[]>([])
const availableWidgetTypes = ref<WidgetTypeRegistration[]>([])
const availablePages = ref<string[]>([])

const showAddDialog = ref(false)
const showEditDialog = ref(false)
const editingMappingId = ref<string | null>(null)
const currentActionIndex = ref(0)
const newMapping = ref<Partial<EventActionMapping>>({
  context: 'widget',
  conditions: [],
  actions: [{
    targetContext: 'widget',
    actionName: '',
    actionArgs: [],
    payloadMapping: []
  }]
})

const contextOptions = [
  { text: 'System', value: 'system' },
  { text: 'Seite', value: 'page' },
  { text: 'Widget', value: 'widget' }
]

const comperatorOptions = [
  { text: '==', value: Comperator.eq },
  { text: '!=', value: Comperator.neq },
  { text: '<', value: Comperator.lt },
  { text: '<=', value: Comperator.lte },
  { text: '>', value: Comperator.gt },
  { text: '>=', value: Comperator.gte }
]

// Get current action being edited
const currentAction = computed(() => {
  if (!newMapping.value.actions || newMapping.value.actions.length === 0) {
    return null
  }
  return newMapping.value.actions[currentActionIndex.value]
})

// Add a new action to the mapping
const addAction = () => {
  if (!newMapping.value.actions) {
    newMapping.value.actions = []
  }
  newMapping.value.actions.push({
    targetContext: 'widget',
    actionName: '',
    actionArgs: [],
    payloadMapping: []
  })
  currentActionIndex.value = newMapping.value.actions.length - 1
  // Reset parameter tracking for new action
  parameterValueSources.value.clear()
  manualParameterValues.value.clear()
}

// Remove an action from the mapping
const removeAction = (index: number) => {
  if (!newMapping.value.actions) return
  newMapping.value.actions.splice(index, 1)
  if (currentActionIndex.value >= newMapping.value.actions.length) {
    currentActionIndex.value = Math.max(0, newMapping.value.actions.length - 1)
  }
  // Reset parameter tracking
  parameterValueSources.value.clear()
  manualParameterValues.value.clear()
}

// Select an action for editing
const selectAction = (index: number) => {
  currentActionIndex.value = index
  // Restore parameter sources for this action
  parameterValueSources.value.clear()
  manualParameterValues.value.clear()

  const action = newMapping.value.actions?.[index]
  if (action) {
    if (action.payloadMapping) {
      action.payloadMapping.forEach(pm => {
        parameterValueSources.value.set(pm.argIndex, 'payload')
      })
    }
    if (action.actionArgs) {
      action.actionArgs.forEach((arg, idx) => {
        if (arg !== undefined && !action.payloadMapping?.some(pm => pm.argIndex === idx)) {
          parameterValueSources.value.set(idx, 'manual')
          manualParameterValues.value.set(idx, String(arg))
        }
      })
    }
  }
}

const loadMappings = () => {
  mappings.value = eventManager.getAllMappings()
}

const loadEvents = () => {
  availableEvents.value = eventRegistry.getAllEvents()
}

const loadWidgetTypes = () => {
  availableWidgetTypes.value = actionsRegistry.getWidgetTypes()
}

const loadPages = () => {
  availablePages.value = pageRegistry.getAllPageIds()
}

const availablePayloadProperties = computed(() => {
  if (!newMapping.value.eventType) return []

  try {
    // Use EventRegistry's extractPayloadPropertiesForEvent which extracts from Ecore model
    const properties = eventRegistry.extractPayloadPropertiesForEvent(newMapping.value.eventType)

    // Return options with text showing "name: type"
    return properties.map(prop => ({
      text: `${prop.name}: ${prop.type}${prop.optional ? '?' : ''}`,
      value: prop.name
    }))
  } catch (e) {
    console.error('❌ Error extracting properties from Ecore:', e)
    return []
  }
})

/**
 * The events, under the widget type that raises them.
 *
 * An event is named "WidgetType:what_happened", and a hundred of those in
 * one flat list is a hundred lines that all start with a word you are not
 * looking for. The two halves are split: the type becomes the heading, the
 * rest is the entry.
 */
const eventOptions = computed(() =>
  availableEvents.value.map((event) => {
    const at = event.type.indexOf(':')
    return {
      value: event.type,
      text: at > -1 ? event.type.slice(at + 1) : event.type,
      group: at > -1 ? event.type.slice(0, at) : 'Sonstige',
    }
  }),
)

const availableActions = computed(() => {
  if (!currentAction.value?.targetContext) return []

  const targetContext = currentAction.value.targetContext
  const actions: {
    text: string
    group: string
    value: string
    parameters?: string[]
    widgetType?: string
  }[] = []

  for (const widgetType of availableWidgetTypes.value) {
    // Filter by context field, fallback to name-based filtering only if context is not set
    const hasExplicitContext = widgetType.context !== undefined
    const typeContext = widgetType.context || 'widget'

    let matches = false
    if (hasExplicitContext) {
      // New way: use explicit context
      matches = typeContext === targetContext
    } else {
      // Legacy fallback: name-based filtering
      matches = (
        (targetContext === 'system' && widgetType.widgetType.includes('System')) ||
        (targetContext === 'page' && widgetType.widgetType.includes('Page')) ||
        (targetContext === 'widget' && !widgetType.widgetType.includes('System') && !widgetType.widgetType.includes('Page'))
      )
    }

    if (matches) {
      for (const action of widgetType.actions) {
        actions.push({
          /* The type is the heading now, so the entry is the method alone. */
          text: action.methodName,
          group: widgetType.widgetType,
          value: action.methodName,
          parameters: action.parameters,
          widgetType: widgetType.widgetType
        })
      }
    }
  }

  return actions
})

// Get available instances for the selected action's widget type
const availableInstances = computed(() => {
  if (!currentAction.value?.actionName) return []

  // Find the widget type for the selected action
  const selectedAction = availableActions.value.find(a => a.value === currentAction.value?.actionName)
  if (!selectedAction?.widgetType) return []

  // Get registered instances of this widget type
  const instances = actionsRegistry?.getRegisteredInstances(selectedAction.widgetType) || []

  return [
    { text: 'alle Instanzen', value: '' },
    ...instances.map(inst => ({
      text: `${inst.instanceId} (${inst.widgetType})`,
      value: inst.instanceId
    }))
  ]
})

interface ActionParameterInfo {
  name: string
  type: string
  optional: boolean
  index: number
}

const selectedActionParameters = computed<ActionParameterInfo[]>(() => {
  if (!currentAction.value?.actionName || !currentAction.value?.targetContext) return []

  const targetContext = currentAction.value.targetContext

  // Filter widget types by context field, fallback to name-based filtering only if context is not set
  const searchWidgetTypes = availableWidgetTypes.value.filter(wt => {
    const hasExplicitContext = wt.context !== undefined
    const typeContext = wt.context || 'widget'

    if (hasExplicitContext) {
      return typeContext === targetContext
    } else {
      // Legacy fallback
      return (
        (targetContext === 'system' && wt.widgetType.includes('System')) ||
        (targetContext === 'page' && wt.widgetType.includes('Page')) ||
        (targetContext === 'widget' && !wt.widgetType.includes('System') && !wt.widgetType.includes('Page'))
      )
    }
  })

  for (const widgetType of searchWidgetTypes) {
    const action = widgetType.actions.find(a => a.methodName === currentAction.value?.actionName)

    if (action && action.parameters) {
      return action.parameters.map((param, index) => {
        // Parse parameter string like "thingId: string" or "zoom?: number"
        const match = param.match(/^(\w+)(\?)?:\s*(.+)$/)
        if (match) {
          return {
            name: match[1],
            optional: !!match[2],
            type: match[3],
            index
          }
        }
        return {
          name: `arg${index}`,
          optional: false,
          type: 'any',
          index
        }
      })
    }
  }

  return []
})

// Get all actions from a mapping (handles legacy format)
const getMappingActions = (mapping: EventActionMapping): ActionDefinition[] => {
  if (mapping.actions && mapping.actions.length > 0) {
    return mapping.actions
  }
  // Legacy format: convert single action to array
  if (mapping.actionName) {
    return [{
      targetContext: mapping.targetContext!,
      targetContextId: mapping.targetContextId,
      actionName: mapping.actionName,
      actionArgs: mapping.actionArgs,
      payloadMapping: mapping.payloadMapping
    }]
  }
  return []
}

const addMapping = () => {
  // Validate: must have event type and at least one action with actionName
  if (!newMapping.value.eventType) {
    return
  }
  const validActions = newMapping.value.actions?.filter(a => a.actionName) || []
  if (validActions.length === 0) {
    return
  }

  const mapping: EventActionMapping = {
    id: editingMappingId.value || `mapping-${Date.now()}`,
    context: newMapping.value.context as EventActionContext,
    contextId: newMapping.value.contextId,
    eventType: newMapping.value.eventType,
    conditions: newMapping.value.conditions || [],
    actions: validActions
  }

  if (editingMappingId.value) {
    // Update existing mapping
    eventManager.unregisterMapping(editingMappingId.value)
  }

  eventManager.registerMapping(mapping)

  loadMappings()
  resetForm()
  showAddDialog.value = false
  showEditDialog.value = false
  editingMappingId.value = null
}

const editMapping = (mapping: EventActionMapping) => {
  editingMappingId.value = mapping.id

  // Convert legacy format to actions array
  const actions = getMappingActions(mapping)

  newMapping.value = {
    context: mapping.context,
    contextId: mapping.contextId,
    eventType: mapping.eventType,
    conditions: mapping.conditions || [],
    actions: actions.length > 0 ? actions : [{
      targetContext: 'widget',
      actionName: '',
      actionArgs: [],
      payloadMapping: []
    }]
  }

  // Reset to first action
  currentActionIndex.value = 0

  // Restore parameter sources and manual values for first action
  parameterValueSources.value.clear()
  manualParameterValues.value.clear()

  const firstAction = newMapping.value.actions?.[0]
  if (firstAction) {
    if (firstAction.payloadMapping) {
      firstAction.payloadMapping.forEach(pm => {
        parameterValueSources.value.set(pm.argIndex, 'payload')
      })
    }

    if (firstAction.actionArgs) {
      firstAction.actionArgs.forEach((arg, index) => {
        if (arg !== undefined && !firstAction.payloadMapping?.some(pm => pm.argIndex === index)) {
          parameterValueSources.value.set(index, 'manual')
          manualParameterValues.value.set(index, String(arg))
        }
      })
    }
  }

  showEditDialog.value = true
}

const showDeleteConfirm = ref(false)
const mappingToDelete = ref<string | null>(null)

const removeMapping = (mappingId: string) => {
  mappingToDelete.value = mappingId
  showDeleteConfirm.value = true
}

const confirmRemoveMapping = () => {
  if (mappingToDelete.value) {
    eventManager.unregisterMapping(mappingToDelete.value)
    loadMappings()
  }
  cancelRemoveMapping()
}

/*
 * Escape and a click on the scrim close the dialog as well as the button
 * does, so the mapping waiting to be deleted is dropped here - otherwise a
 * dismissed dialog leaves it pending and the next confirmation removes
 * something nobody asked about.
 */
const cancelRemoveMapping = () => {
  showDeleteConfirm.value = false
  mappingToDelete.value = null
}

const resetForm = () => {
  newMapping.value = {
    context: 'widget',
    conditions: [],
    actions: [{
      targetContext: 'widget',
      actionName: '',
      actionArgs: [],
      payloadMapping: []
    }]
  }
  editingMappingId.value = null
  currentActionIndex.value = 0
  parameterValueSources.value.clear()
  manualParameterValues.value.clear()
}

const addCondition = () => {
  if (!newMapping.value.conditions) {
    newMapping.value.conditions = []
  }
  newMapping.value.conditions.push(new Condition())
}

const removeCondition = (index: number) => {
  newMapping.value.conditions?.splice(index, 1)
}

// Track parameter value sources: 'payload' or 'manual'
const parameterValueSources = ref<Map<number, 'payload' | 'manual'>>(new Map())
const manualParameterValues = ref<Map<number, string>>(new Map())

const updateParameterMapping = (paramIndex: number, payloadPath: string) => {
  const action = currentAction.value
  if (!action) return

  if (!action.payloadMapping) {
    action.payloadMapping = []
  }

  // Remove existing mapping for this parameter index
  action.payloadMapping = action.payloadMapping.filter(
    pm => pm.argIndex !== paramIndex
  )

  // Add new mapping if a payload path is selected
  if (payloadPath) {
    action.payloadMapping.push({
      payloadPath,
      argIndex: paramIndex
    })
  }
}

const updateManualParameterValue = (paramIndex: number, value: string) => {
  manualParameterValues.value.set(paramIndex, value)

  const action = currentAction.value
  if (!action) return

  // Also store in actionArgs if using manual values
  if (!action.actionArgs) {
    action.actionArgs = []
  }
  // Ensure array is large enough
  while (action.actionArgs.length <= paramIndex) {
    action.actionArgs.push(undefined)
  }

  // Parse value based on type
  const param = selectedActionParameters.value.find(p => p.index === paramIndex)
  if (param) {
    if (param.type === 'number' || param.type.includes('number')) {
      action.actionArgs[paramIndex] = parseFloat(value) || 0
    } else if (param.type === 'boolean') {
      action.actionArgs[paramIndex] = value === 'true'
    } else {
      action.actionArgs[paramIndex] = value
    }
  }
}

const getParameterValueSource = (paramIndex: number): 'payload' | 'manual' => {
  return parameterValueSources.value.get(paramIndex) || 'payload'
}

const setParameterValueSource = (paramIndex: number, source: 'payload' | 'manual') => {
  parameterValueSources.value.set(paramIndex, source)

  const action = currentAction.value
  if (!action) return

  if (source === 'manual') {
    // Clear payload mapping
    if (action.payloadMapping) {
      action.payloadMapping = action.payloadMapping.filter(
        pm => pm.argIndex !== paramIndex
      )
    }
  } else {
    // Clear manual value
    manualParameterValues.value.delete(paramIndex)
    if (action.actionArgs && action.actionArgs[paramIndex] !== undefined) {
      action.actionArgs[paramIndex] = undefined
    }
  }
}

const getPayloadPathForParameter = (paramIndex: number): string => {
  const action = currentAction.value
  if (!action?.payloadMapping) return ''
  const mapping = action.payloadMapping.find(pm => pm.argIndex === paramIndex)
  return mapping?.payloadPath || ''
}

const getManualValueForParameter = (paramIndex: number): string => {
  return manualParameterValues.value.get(paramIndex) || ''
}

/**
 * The conditions as one phrase, or nothing at all.
 *
 * Nothing, not a dash: a rule without conditions has no "falls" line, and
 * a missing line says "always" better than a sentence explaining that no
 * conditions were set.
 */
const formatConditions = (conditions?: Condition[]) => {
  if (!conditions || conditions.length === 0) return ''
  return conditions
    .map(c => {
      /* The symbol the dialog offered, not the enum's name. */
      const operator = comperatorOptions.find(o => o.value === c.comperator)?.text ?? c.comperator
      return [c.prop, operator, c.value].filter(part => part !== undefined && part !== '').join(' ')
    })
    .join(' und ')
}

/** Where the event comes from, as the second half of the sentence. */
const sourcePhrase = (mapping: EventActionMapping) => {
  if (mapping.context === 'system') return 'im System'
  if (mapping.context === 'page') return mapping.contextId ? `auf Seite ${mapping.contextId}` : 'auf jeder Seite'
  return mapping.contextId ? `an ${mapping.contextId}` : 'an jedem Widget dieser Art'
}

/** Where the action lands, likewise. */
const targetPhrase = (action: ActionDefinition) => {
  if (action.targetContext === 'system') return 'im System'
  if (action.targetContext === 'page') return action.targetContextId ? `auf Seite ${action.targetContextId}` : 'auf jeder Seite'
  return action.targetContextId ? `an ${action.targetContextId}` : 'an allen Instanzen'
}

/*
 * One dialog for both. Adding and editing differ in their title and in the
 * word on the button, and in nothing else - they used to be two copies of
 * the same two hundred lines, which is two places to change a label in.
 */
const isEditing = computed(() => showEditDialog.value)
const dialogOpen = computed({
  get: () => showAddDialog.value || showEditDialog.value,
  set: (open: boolean) => {
    if (!open) {
      showAddDialog.value = false
      showEditDialog.value = false
    }
  },
})

const injectedEventManager = inject<EventManager>(EVENT_MANAGER)!
const injectedEventRegistry = inject<EventRegistry>(EVENT_REGISTRY)!
const injectedActionsRegistry = inject<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)!
const injectedPageRegistry = inject<PageRegistryI>(PageIdentifier)!

onMounted(() => {
  // Injected at setup below; by mount time the loader has long registered them
  eventManager = injectedEventManager
  eventRegistry = injectedEventRegistry
  actionsRegistry = injectedActionsRegistry
  pageRegistry = injectedPageRegistry

  loadMappings()
  loadEvents()
  loadWidgetTypes()
  loadPages()
})
</script>

<template>
  <div class="events">
    <header class="events__head">
      <div>
        <h1 class="events__title">Ereignisse</h1>
        <p class="events__lead">
          Eine Regel verbindet, was auf einem Board geschieht, mit dem, was daraufhin
          geschehen soll.
        </p>
      </div>
      <DButton intent="primary" @click="showAddDialog = true">
        <DIcon name="add" size="sm" />Regel anlegen
      </DButton>
    </header>

    <!--
      A rule is a conditional sentence, so it is set as one: the conjunction
      in the gutter, the clause beside it. It used to be five table columns
      with the uuid in the widest of them - to read one rule you read across
      and put the sentence back together yourself.
    -->
    <ul v-if="mappings.length" class="rules">
      <li v-for="mapping in mappings" :key="mapping.id" class="rule">
        <div class="rule__clauses">
          <p class="clause">
            <span class="clause__word">Wenn</span>
            <span class="clause__body">
              <span class="clause__subject">{{ mapping.eventType || 'irgendein Ereignis' }}</span>
              <span class="clause__place">{{ sourcePhrase(mapping) }}</span>
            </span>
          </p>

          <p v-if="formatConditions(mapping.conditions)" class="clause">
            <span class="clause__word">Falls</span>
            <span class="clause__body">
              <span class="clause__subject">{{ formatConditions(mapping.conditions) }}</span>
            </span>
          </p>

          <p v-for="(action, at) in getMappingActions(mapping)" :key="at" class="clause">
            <span class="clause__word">{{ at === 0 ? 'Dann' : 'und' }}</span>
            <span class="clause__body">
              <span class="clause__subject">{{ action.actionName || 'noch keine Aktion' }}</span>
              <span class="clause__place">{{ targetPhrase(action) }}</span>
            </span>
          </p>
        </div>

        <div class="rule__tools">
          <DButton intent="quiet" size="sm" title="Regel bearbeiten" @click="editMapping(mapping)">
            <DIcon name="edit" size="sm" />
          </DButton>
          <DButton intent="quiet" size="sm" title="Regel löschen" @click="removeMapping(mapping.id)">
            <DIcon name="delete" size="sm" />
          </DButton>
        </div>
      </li>
    </ul>

    <p v-else class="events__empty">
      Noch keine Regel. Eine beginnt mit einem Ereignis — ein Klick auf ein Widget, eine
      Zeile in einer Tabelle — und endet in einer Aktion auf einem anderen.
    </p>

    <DModal
      v-model="dialogOpen"
      :title="isEditing ? 'Regel bearbeiten' : 'Regel anlegen'"
      size="lg"
      @cancel="resetForm"
    >
      <!-- The same three words as the list, so both say the rule the same way -->
      <div class="form">
        <section class="part">
          <h3 class="part__word">Wenn</h3>
          <div class="part__body part__body--row">
            <DSelect
              v-model="newMapping.context"
              label="Kontext"
              stacked
              :options="contextOptions"
              label-key="text"
              value-key="value"
            />
            <DSelect
              v-if="newMapping.context === 'page'"
              v-model="newMapping.contextId"
              label="Seite"
              stacked
              :options="[{ text: 'jede Seite', value: '' }, ...availablePages.map(p => ({ text: p, value: p }))]"
              label-key="text"
              value-key="value"
              clearable
            />
            <DInput
              v-else-if="newMapping.context === 'widget'"
              v-model="newMapping.contextId"
              label="Widget"
              stacked
              placeholder="Kennung, leer für jedes"
            />
            <DSelect
              v-model="newMapping.eventType"
              label="Ereignis"
              stacked
              :options="eventOptions"
              label-key="text"
              value-key="value"
              group-key="group"
            />
          </div>
        </section>

        <section class="part">
          <h3 class="part__word">Falls</h3>
          <div class="part__body">
            <div v-if="newMapping.conditions && newMapping.conditions.length" class="conditions">
              <div
                v-for="(condition, index) in newMapping.conditions"
                :key="index"
                class="condition"
              >
                <DSelect
                  v-model="condition.prop"
                  placeholder="Eigenschaft"
                  :options="availablePayloadProperties"
                  label-key="text"
                  value-key="value"
                />
                <DSelect
                  v-model="condition.comperator"
                  :options="comperatorOptions"
                  label-key="text"
                  value-key="value"
                  class="condition__operator"
                />
                <DInput v-model="condition.value" placeholder="Wert" />
                <DButton intent="quiet" size="sm" title="Bedingung entfernen" @click="removeCondition(index)">
                  <DIcon name="delete" size="sm" />
                </DButton>
              </div>
            </div>
            <p v-else class="part__none">Ohne Bedingung läuft die Regel jedes Mal.</p>
            <DButton size="sm" intent="quiet" @click="addCondition">
              <DIcon name="add" size="sm" />Bedingung
            </DButton>
          </div>
        </section>

        <section class="part">
          <h3 class="part__word">Dann</h3>
          <div class="part__body">
            <div v-if="newMapping.actions && newMapping.actions.length" class="actions">
              <div
                v-for="(action, idx) in newMapping.actions"
                :key="idx"
                :class="['action', { 'action--open': currentActionIndex === idx }]"
              >
                <!-- A row to switch between, which a single action is not. -->
                <button
                  v-if="newMapping.actions.length > 1"
                  type="button"
                  class="action__head"
                  @click="selectAction(idx)"
                >
                  <span class="action__name">
                    {{ action.actionName || 'Aktion wählen' }}
                  </span>
                  <span class="action__place">{{ targetPhrase(action) }}</span>
                </button>
                <DButton
                  v-if="newMapping.actions.length > 1"
                  intent="quiet"
                  size="sm"
                  title="Aktion entfernen"
                  @click.stop="removeAction(idx)"
                >
                  <DIcon name="close" size="sm" />
                </DButton>

                <div v-if="currentActionIndex === idx" class="action__body">
                  <div class="part__body--row">
                    <DSelect
                      v-model="action.targetContext"
                      label="Kontext"
                      stacked
                      :options="contextOptions"
                      label-key="text"
                      value-key="value"
                    />
                    <DSelect
                      v-if="action.targetContext === 'page'"
                      v-model="action.targetContextId"
                      label="Seite"
                      stacked
                      :options="[{ text: 'jede Seite', value: '' }, ...availablePages.map(p => ({ text: p, value: p }))]"
                      label-key="text"
                      value-key="value"
                      clearable
                    />
                    <DSelect
                      v-else-if="action.targetContext === 'widget' || action.targetContext === 'system'"
                      v-model="action.targetContextId"
                      label="Ziel"
                      stacked
                      :options="availableInstances"
                      label-key="text"
                      value-key="value"
                      clearable
                      placeholder="alle Instanzen"
                    />
                    <DSelect
                      v-model="action.actionName"
                      label="Aktion"
                      stacked
                      :options="availableActions"
                      label-key="text"
                      value-key="value"
                      group-key="group"
                    />
                  </div>

                  <div v-if="selectedActionParameters.length" class="params">
                    <div v-for="param in selectedActionParameters" :key="param.index" class="param">
                      <span class="param__name">
                        {{ param.name }}<span v-if="param.optional" class="param__optional">, wahlweise</span>
                      </span>
                      <div class="param__value">
                        <div class="source" role="group" :aria-label="`Wert für ${param.name}`">
                          <button
                            type="button"
                            :class="['source__side', { 'source__side--on': getParameterValueSource(param.index) === 'payload' }]"
                            :aria-pressed="getParameterValueSource(param.index) === 'payload'"
                            @click.stop="setParameterValueSource(param.index, 'payload')"
                          >
                            aus dem Ereignis
                          </button>
                          <button
                            type="button"
                            :class="['source__side', { 'source__side--on': getParameterValueSource(param.index) === 'manual' }]"
                            :aria-pressed="getParameterValueSource(param.index) === 'manual'"
                            @click.stop="setParameterValueSource(param.index, 'manual')"
                          >
                            fester Wert
                          </button>
                        </div>
                        <DSelect
                          v-if="getParameterValueSource(param.index) === 'payload'"
                          :model-value="getPayloadPathForParameter(param.index)"
                          :options="availablePayloadProperties"
                          label-key="text"
                          value-key="value"
                          :placeholder="param.optional ? 'wahlweise' : 'Eigenschaft wählen'"
                          clearable
                          @update:model-value="updateParameterMapping(param.index, String($event ?? ''))"
                        />
                        <DInput
                          v-else
                          :model-value="getManualValueForParameter(param.index)"
                          :placeholder="param.type"
                          @update:model-value="updateManualParameterValue(param.index, String($event ?? ''))"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <DButton size="sm" intent="quiet" @click="addAction">
              <DIcon name="add" size="sm" />Aktion
            </DButton>
          </div>
        </section>
      </div>

      <template #actions>
        <DButton intent="quiet" @click="dialogOpen = false; resetForm()">Abbrechen</DButton>
        <DButton intent="primary" @click="addMapping">
          {{ isEditing ? 'Speichern' : 'Anlegen' }}
        </DButton>
      </template>
    </DModal>

    <DModal v-model="showDeleteConfirm" size="sm" @cancel="cancelRemoveMapping">
      <template #header>
        <DIcon name="warning" size="lg" tone="color-err" />
        <h2 class="confirm__title">Regel löschen</h2>
      </template>
      <p class="confirm__text">
        Die Regel wird entfernt. Das lässt sich nicht rückgängig machen.
      </p>
      <template #actions>
        <DButton intent="quiet" @click="cancelRemoveMapping">Abbrechen</DButton>
        <DButton intent="danger" @click="confirmRemoveMapping()">Löschen</DButton>
      </template>
    </DModal>
  </div>
</template>

<style scoped>
/*
 * Everything here is a token. The page used to set its own greys, its own
 * white table background and a 75px left margin on top of a full width,
 * which put a fifth of it past the right edge of the window.
 */
.events {
  display: flex;
  flex-direction: column;
  gap: 28px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 28px 32px 40px;
  font-family: var(--font-sans);
  color: var(--color-fg);
  background-color: var(--color-bg);
}

/*
 * A rule is a sentence, so the column it sits in is measured for reading
 * rather than stretched to whatever the window happens to be.
 */
.events__head,
.rules,
.events__empty {
  width: 100%;
  max-width: 940px;
}

.events__head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
}

.events__title {
  margin: 0 0 6px;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.01em;
}

.events__lead {
  margin: 0;
  max-width: 56ch;
  font-size: var(--text-base);
  line-height: 1.55;
  color: var(--color-dim);
}

.events__empty {
  max-width: 52ch;
  margin: 0;
  padding: 20px 0;
  border-top: 1px solid var(--color-divider);
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-dim);
}

/* -------------------------------------------------------------- the rules */

.rules {
  margin: 0;
  padding: 0;
  list-style: none;
  border-top: 1px solid var(--color-divider);
}

.rule {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: start;
  gap: 16px;
  padding: 14px 8px 16px 0;
  border-bottom: 1px solid var(--color-divider);
}

.rule:hover {
  background-color: color-mix(in srgb, var(--color-pane) 60%, transparent);
}

.rule__clauses {
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
}

/*
 * The conjunction sits in its own column, flush right against the clause,
 * so Wenn / Falls / Dann line up and the sentences start on one edge.
 */
.clause {
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr);
  gap: 12px;
  margin: 0;
  line-height: 1.5;
}

.clause__word {
  text-align: right;
  font-size: var(--text-sm);
  color: var(--color-dim);
  padding-top: 1px;
}

.clause__body {
  min-width: 0;
  font-size: var(--text-base);
}

/* The identifiers really are symbols picked from a registry, so they read as such. */
.clause__subject {
  font-family: var(--font-mono);
  overflow-wrap: anywhere;
}

.clause__place {
  margin-left: 10px;
  color: var(--color-dim);
}

.rule__tools {
  display: flex;
  gap: 2px;
}

/* ------------------------------------------------------------- the dialog */

.form {
  display: flex;
  flex-direction: column;
}

.part {
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr);
  gap: 12px;
  padding: 16px 0;
  border-top: 1px solid var(--color-divider);
}

.part:first-child {
  border-top: 0;
  padding-top: 4px;
}

.part__word {
  margin: 0;
  text-align: right;
  font-size: var(--text-sm);
  font-weight: 400;
  color: var(--color-dim);
  padding-top: 7px;
}

.part__body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  min-width: 0;
}

/* A modifier, so it has to undo the column the base class sets. */
.part__body--row {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 12px;
  width: 100%;
}

.part__body--row > * {
  flex: 1 1 180px;
  min-width: 0;
}

.part__none {
  margin: 0;
  font-size: var(--text-base);
  color: var(--color-dim);
}

.conditions {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.condition {
  display: flex;
  align-items: center;
  gap: 8px;
}

.condition > * {
  flex: 1 1 0;
  min-width: 0;
}

.condition__operator {
  flex: 0 0 5rem;
}

.condition > .btn,
.rule__tools .btn {
  flex: 0 0 auto;
}

/* ------------------------------------------------------------ the actions */

.actions {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid var(--color-divider);
}

.action {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  align-items: center;
  column-gap: 8px;
  border-bottom: 1px solid var(--color-divider);
}

.action__head {
  display: flex;
  align-items: baseline;
  gap: 10px;
  min-width: 0;
  padding: 10px 0;
  border: 0;
  background: none;
  text-align: left;
  cursor: pointer;
  color: inherit;
  font-family: inherit;
}

.action__name {
  font-family: var(--font-mono);
  font-size: var(--text-base);
  overflow-wrap: anywhere;
}

.action__place {
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.action__body {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 4px 0 16px;
}

/*
 * A rule down the side rather than a tint: on the pale themes the tint is
 * the same colour as the dialog and says nothing.
 */
.action--open {
  box-shadow: inset 2px 0 0 var(--color-accent);
  padding-left: 10px;
}

/* One action needs no rows to pick from, and so no rules to separate them. */
.actions:has(> .action:only-child) {
  border-top: 0;
}

.action:only-child {
  border-bottom: 0;
  box-shadow: none;
  padding-left: 0;
}

.action:only-child .action__body {
  padding-top: 0;
  padding-bottom: 0;
}

/* --------------------------------------------------------- the parameters */

.params {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.param {
  display: grid;
  grid-template-columns: 9rem minmax(0, 1fr);
  gap: 12px;
  align-items: center;
}

.param__name {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  overflow-wrap: anywhere;
}

.param__optional {
  font-family: var(--font-sans);
  color: var(--color-dim);
}

.param__value {
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.param__value > *:last-child {
  flex: 1 1 0;
  min-width: 0;
}

/* Where a value comes from is a choice between two, so it is shown as two. */
.source {
  display: inline-flex;
  flex: 0 0 auto;
  border: 1px solid var(--color-outline);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.source__side {
  padding: 5px 10px;
  border: 0;
  background-color: transparent;
  color: var(--color-dim);
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  cursor: pointer;
  transition: background-color 120ms ease, color 120ms ease;
}

.source__side + .source__side {
  border-left: 1px solid var(--color-outline);
}

.source__side:hover {
  color: var(--color-fg);
}

.source__side--on {
  background-color: var(--color-accent);
  color: var(--color-onAccent);
}

.source__side:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: -2px;
}

/* -------------------------------------------------------------- confirming */

.confirm__title {
  margin: 0;
  font-size: var(--text-lg);
  font-weight: 600;
}

.confirm__text {
  margin: 0;
  font-size: var(--text-base);
  line-height: 1.6;
  color: var(--color-dim);
}

@media (max-width: 640px) {
  .events {
    padding: 20px 16px 32px;
  }

  .clause,
  .part {
    grid-template-columns: minmax(0, 1fr);
    gap: 2px;
  }

  .clause__word,
  .part__word {
    text-align: left;
    padding-top: 0;
  }

  .param {
    grid-template-columns: minmax(0, 1fr);
    align-items: start;
  }
}
</style>
