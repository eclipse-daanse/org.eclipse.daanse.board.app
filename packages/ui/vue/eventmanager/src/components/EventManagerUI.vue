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
  DCard,
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
  { text: 'Page', value: 'page' },
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

const columns = [
  { key: 'id', label: 'ID', sortable: true },
  { key: 'context', label: 'Event Context', sortable: true },
  { key: 'eventType', label: 'Event Type', sortable: true },
  { key: 'actionsCount', label: 'Actions', sortable: true },
  { key: 'conditions', label: 'Conditions' },
  { key: 'tableActions', label: '', width: 100 }
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
  console.log('📋 Loaded widget types:', availableWidgetTypes.value)
}

const loadPages = () => {
  availablePages.value = pageRegistry.getAllPageIds()
  console.log('📄 Loaded pages:', availablePages.value)
}

const availablePayloadProperties = computed(() => {
  if (!newMapping.value.eventType) return []

  try {
    // Use EventRegistry's extractPayloadPropertiesForEvent which extracts from Ecore model
    const properties = eventRegistry.extractPayloadPropertiesForEvent(newMapping.value.eventType)
    console.log('📦 Payload properties from Ecore model:', properties)

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

const availableActions = computed(() => {
  if (!currentAction.value?.targetContext) return []

  const targetContext = currentAction.value.targetContext
  const actions: { text: string; value: string; parameters?: string[]; widgetType?: string }[] = []

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
        const prefix = targetContext === 'widget' ? `${widgetType.widgetType}.` : ''
        actions.push({
          text: `${prefix}${action.methodName}`,
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
    { text: 'All instances', value: '' },
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
    console.log('🎯 Looking for action:', currentAction.value?.actionName, 'in', widgetType.widgetType)
    console.log('   Found action:', action)

    if (action && action.parameters) {
      console.log('   Action parameters:', action.parameters)

      return action.parameters.map((param, index) => {
        // Parse parameter string like "thingId: string" or "zoom?: number"
        const match = param.match(/^(\w+)(\?)?:\s*(.+)$/)
        console.log('   Parsing param:', param, 'Match:', match)

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

const formatConditions = (conditions?: Condition[]) => {
  if (!conditions || conditions.length === 0) return '-'
  return conditions.map(c => `${c.prop} ${c.comperator} ${c.value}`).join(' AND ')
}

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
  <div class="event-manager-ui">
    <div class="header-section">
      <h2 class="page-title">Event Manager</h2>
      <DButton @click="showAddDialog = true"><DIcon name="add" size="sm" />Add Mapping</DButton>
    </div>

    <div class="flex flex-col border border-gray-300 rounded-lg overflow-hidden w-full table-wrapper">
      <div class="w-full overflow-auto flex flex-col bg-white">
        <table class="mappings">
          <thead>
            <tr>
              <th v-for="column in columns" :key="column.key">{{ column.label }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="mapping in mappings" :key="mapping.id">
              <td>
                <span class="mapping-id" :title="mapping.id">{{ mapping.id }}</span>
              </td>
              <td>
                <span>{{ mapping.context }}</span>
                <span v-if="mapping.contextId" class="uid-badge" :title="mapping.contextId">{{ mapping.contextId }}</span>
              </td>
              <td>{{ mapping.eventType }}</td>
              <td>
                <div class="actions-list">
                  <div v-for="(action, idx) in getMappingActions(mapping)" :key="idx" class="action-item">
                    <span class="action-context">{{ action.targetContext }}</span>
                    <span v-if="action.targetContextId" class="uid-badge" :title="action.targetContextId">{{ action.targetContextId }}</span>
                    <span class="action-separator">→</span>
                    <span class="action-name">{{ action.actionName }}</span>
                  </div>
                </div>
              </td>
              <td>
                <span class="text-xs">{{ formatConditions(mapping.conditions) }}</span>
              </td>
              <td class="mappings__actions">
                <DButton intent="quiet" size="sm" title="Edit mapping" @click="editMapping(mapping)">
                  <DIcon name="edit" size="sm" />
                </DButton>
                <DButton intent="danger" size="sm" title="Remove mapping" @click="removeMapping(mapping.id)">
                  <DIcon name="delete" size="sm" />
                </DButton>
              </td>
            </tr>
            <tr v-if="mappings.length === 0">
              <td class="mappings__empty" :colspan="columns.length">No mappings yet.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Add Modal Dialog -->
    <DModal
      v-model="showAddDialog"
      title="Add Event-Action Mapping"
      size="lg"
      class="event-manager-ui_modal"
      @cancel="resetForm"
    >
      <div class="space-y-4">
        <!-- 1. Event Source Section -->
        <DCard class="card-section">
          <template #header><h3 class="section-title">1. Event Source</h3></template>
            <div class="event-source-grid">
              <DSelect
                v-model="newMapping.context"
                label="Context"
                :options="contextOptions" label-key="text" value-key="value"></DSelect>

              <DSelect
                v-if="newMapping.context === 'page'"
                v-model="newMapping.contextId"
                label="Page ID"
                :options="[{ text: 'Any page', value: '' }, ...availablePages.map(p => ({ text: p, value: p }))]" label-key="text" value-key="value"
                clearable></DSelect>

              <DInput
                v-else-if="newMapping.context === 'widget'"
                v-model="newMapping.contextId"
                label="Widget ID (optional)"
                placeholder="e.g., specific widgetId"></DInput>

              <DSelect
                v-model="newMapping.eventType"
                label="Event Type"
                :options="availableEvents" label-key="type" value-key="type"></DSelect>
            </div>
                  </DCard>

        <!-- 2. Conditions Section -->
        <DCard class="card-section">
          <template #header><div class="card-section__head">
            <span class="section-title">2. Conditions</span>
            <DButton @click="addCondition" size="sm" intent="quiet"><DIcon name="add" size="sm" />Add</DButton>
          </div>
          </template>
            <div v-if="newMapping.conditions && newMapping.conditions.length > 0" class="space-y-2">
              <div v-for="(condition, index) in newMapping.conditions" :key="index" class="condition-row">
                <DSelect
                  v-model="condition.prop"
                  placeholder="Property"
                  :options="availablePayloadProperties" label-key="text" value-key="value"
                  class="flex-1"></DSelect>
                <DSelect
                  v-model="condition.comperator"
                  :options="comperatorOptions" label-key="text" value-key="value"
                  class="w-20"></DSelect>
                <DInput
                  v-model="condition.value"
                  placeholder="Value"
                  class="flex-1"></DInput>
                <DButton
                  @click="removeCondition(index)" intent="danger" size="sm"><DIcon name="delete" size="sm" /></DButton>
              </div>
            </div>
            <div v-else class="text-gray-500 italic text-sm">
              No conditions - action will always execute
            </div>
                  </DCard>

        <!-- 3. Actions Section -->
        <DCard class="card-section">
          <template #header><div class="card-section__head">
            <span class="section-title">3. Actions</span>
            <DButton @click="addAction" size="sm" intent="quiet"><DIcon name="add" size="sm" />Add Action</DButton>
          </div>
          </template>
            <div v-if="newMapping.actions && newMapping.actions.length > 0" class="actions-list-editor">
              <!-- Action Cards -->
              <div
                v-for="(action, idx) in newMapping.actions"
                :key="idx"
                :class="['action-card', { active: currentActionIndex === idx }]"
                @click="selectAction(idx)"
              >
                <div class="action-card-header">
                  <span class="action-number">{{ idx + 1 }}</span>
                  <span class="action-summary">
                    <span class="action-context-badge">{{ action.targetContext }}</span>
                    <span v-if="action.actionName" class="action-name-text">{{ action.actionName }}</span>
                    <span v-else class="action-empty">(select action)</span>
                  </span>
                  <DButton
                    v-if="newMapping.actions.length > 1"
                    @click.stop="removeAction(idx)" intent="danger" size="sm"><DIcon name="close" size="sm" /></DButton>
                </div>

                <!-- Expanded Action Editor (when selected) -->
                <div v-if="currentActionIndex === idx" class="action-card-body">
                  <div class="action-settings-row">
                    <DSelect
                      v-model="action.targetContext"
                      label="Context"
                      :options="contextOptions" label-key="text" value-key="value"></DSelect>

                    <DSelect
                      v-if="action.targetContext === 'page'"
                      v-model="action.targetContextId"
                      label="Target Page"
                      :options="[{ text: 'Any', value: '' }, ...availablePages.map(p => ({ text: p, value: p }))]" label-key="text" value-key="value"
                      clearable></DSelect>

                    <DSelect
                      v-else-if="action.targetContext === 'widget' || action.targetContext === 'system'"
                      v-model="action.targetContextId"
                      label="Target Instance"
                      :options="availableInstances" label-key="text" value-key="value"
                      clearable
                      :placeholder="availableInstances.length > 1 ? 'Select instance' : 'All instances'"></DSelect>

                    <DSelect
                      v-model="action.actionName"
                      label="Action"
                      :options="availableActions" label-key="text" value-key="value"></DSelect>
                  </div>

                  <!-- Parameters (inline) -->
                  <div v-if="selectedActionParameters.length > 0" class="action-parameters">
                    <div class="parameters-title">Parameters</div>
                    <div class="parameters-list">
                      <div v-for="param in selectedActionParameters" :key="param.index" class="parameter-item">
                        <div class="parameter-label">
                          <span class="parameter-name">{{ param.name }}</span>
                          <span v-if="param.optional" class="parameter-optional">?</span>
                          <span class="parameter-type-badge">{{ param.type }}</span>
                        </div>
                        <div class="parameter-input-row">
                          <div class="source-toggle">
                            <button
                              :class="['toggle-btn', { active: getParameterValueSource(param.index) === 'payload' }]"
                              @click.stop="setParameterValueSource(param.index, 'payload')"
                              type="button"
                            >Payload</button>
                            <button
                              :class="['toggle-btn', { active: getParameterValueSource(param.index) === 'manual' }]"
                              @click.stop="setParameterValueSource(param.index, 'manual')"
                              type="button"
                            >Manual</button>
                          </div>
                          <DSelect
                            v-if="getParameterValueSource(param.index) === 'payload'"
                            :model-value="getPayloadPathForParameter(param.index)"
                            @update:model-value="updateParameterMapping(param.index, String($event ?? ''))"
                            :placeholder="param.optional ? '(optional)' : 'Select property'"
                            :options="availablePayloadProperties" label-key="text" value-key="value"
                            clearable
                            class="parameter-value-input"></DSelect>
                          <DInput
                            v-else
                            :model-value="getManualValueForParameter(param.index)"
                            @update:model-value="updateManualParameterValue(param.index, String($event ?? ''))"
                            :placeholder="`Enter ${param.type}`"
                            class="parameter-value-input"></DInput>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                  </DCard>
      </div>
      <template #actions>
        <DButton intent="quiet" @click="showAddDialog = false; resetForm()">Cancel</DButton>
        <DButton intent="primary" @click="addMapping">Add</DButton>
      </template>
    </DModal>

    <!-- Edit Modal Dialog -->
    <DModal
      v-model="showEditDialog"
      title="Edit Event-Action Mapping"
      size="lg"
      @cancel="resetForm"
    >
      <div class="space-y-4">
        <!-- 1. Event Source Section -->
        <DCard class="card-section">
          <template #header><h3 class="section-title">1. Event Source</h3></template>
            <div class="event-source-grid">
              <DSelect
                v-model="newMapping.context"
                label="Context"
                :options="contextOptions" label-key="text" value-key="value"></DSelect>

              <DSelect
                v-if="newMapping.context === 'page'"
                v-model="newMapping.contextId"
                label="Page ID"
                :options="[{ text: 'Any page', value: '' }, ...availablePages.map(p => ({ text: p, value: p }))]" label-key="text" value-key="value"
                clearable></DSelect>

              <DInput
                v-else-if="newMapping.context === 'widget'"
                v-model="newMapping.contextId"
                label="Widget ID (optional)"
                placeholder="e.g., specific widgetId"></DInput>

              <DSelect
                v-model="newMapping.eventType"
                label="Event Type"
                :options="availableEvents" label-key="type" value-key="type"></DSelect>
            </div>
                  </DCard>

        <!-- 2. Conditions Section -->
        <DCard class="card-section">
          <template #header><div class="card-section__head">
            <span class="section-title">2. Conditions</span>
            <DButton @click="addCondition" size="sm" intent="quiet"><DIcon name="add" size="sm" />Add</DButton>
          </div>
          </template>
            <div v-if="newMapping.conditions && newMapping.conditions.length > 0" class="space-y-2">
              <div v-for="(condition, index) in newMapping.conditions" :key="index" class="condition-row">
                <DSelect
                  v-model="condition.prop"
                  placeholder="Property"
                  :options="availablePayloadProperties" label-key="text" value-key="value"
                  class="flex-1"></DSelect>
                <DSelect
                  v-model="condition.comperator"
                  :options="comperatorOptions" label-key="text" value-key="value"
                  class="w-20"></DSelect>
                <DInput
                  v-model="condition.value"
                  placeholder="Value"
                  class="flex-1"></DInput>
                <DButton
                  @click="removeCondition(index)" intent="danger" size="sm"><DIcon name="delete" size="sm" /></DButton>
              </div>
            </div>
            <div v-else class="text-gray-500 italic text-sm">
              No conditions - action will always execute
            </div>
                  </DCard>

        <!-- 3. Actions Section -->
        <DCard class="card-section">
          <template #header><div class="card-section__head">
            <span class="section-title">3. Actions</span>
            <DButton @click="addAction" size="sm" intent="quiet"><DIcon name="add" size="sm" />Add Action</DButton>
          </div>
          </template>
            <div v-if="newMapping.actions && newMapping.actions.length > 0" class="actions-list-editor">
              <!-- Action Cards -->
              <div
                v-for="(action, idx) in newMapping.actions"
                :key="idx"
                :class="['action-card', { active: currentActionIndex === idx }]"
                @click="selectAction(idx)"
              >
                <div class="action-card-header">
                  <span class="action-number">{{ idx + 1 }}</span>
                  <span class="action-summary">
                    <span class="action-context-badge">{{ action.targetContext }}</span>
                    <span v-if="action.actionName" class="action-name-text">{{ action.actionName }}</span>
                    <span v-else class="action-empty">(select action)</span>
                  </span>
                  <DButton
                    v-if="newMapping.actions.length > 1"
                    @click.stop="removeAction(idx)" intent="danger" size="sm"><DIcon name="close" size="sm" /></DButton>
                </div>

                <!-- Expanded Action Editor (when selected) -->
                <div v-if="currentActionIndex === idx" class="action-card-body">
                  <div class="action-settings-row">
                    <DSelect
                      v-model="action.targetContext"
                      label="Context"
                      :options="contextOptions" label-key="text" value-key="value"></DSelect>

                    <DSelect
                      v-if="action.targetContext === 'page'"
                      v-model="action.targetContextId"
                      label="Target Page"
                      :options="[{ text: 'Any', value: '' }, ...availablePages.map(p => ({ text: p, value: p }))]" label-key="text" value-key="value"
                      clearable></DSelect>

                    <DSelect
                      v-else-if="action.targetContext === 'widget' || action.targetContext === 'system'"
                      v-model="action.targetContextId"
                      label="Target Instance"
                      :options="availableInstances" label-key="text" value-key="value"
                      clearable
                      :placeholder="availableInstances.length > 1 ? 'Select instance' : 'All instances'"></DSelect>

                    <DSelect
                      v-model="action.actionName"
                      label="Action"
                      :options="availableActions" label-key="text" value-key="value"></DSelect>
                  </div>

                  <!-- Parameters (inline) -->
                  <div v-if="selectedActionParameters.length > 0" class="action-parameters">
                    <div class="parameters-title">Parameters</div>
                    <div class="parameters-list">
                      <div v-for="param in selectedActionParameters" :key="param.index" class="parameter-item">
                        <div class="parameter-label">
                          <span class="parameter-name">{{ param.name }}</span>
                          <span v-if="param.optional" class="parameter-optional">?</span>
                          <span class="parameter-type-badge">{{ param.type }}</span>
                        </div>
                        <div class="parameter-input-row">
                          <div class="source-toggle">
                            <button
                              :class="['toggle-btn', { active: getParameterValueSource(param.index) === 'payload' }]"
                              @click.stop="setParameterValueSource(param.index, 'payload')"
                              type="button"
                            >Payload</button>
                            <button
                              :class="['toggle-btn', { active: getParameterValueSource(param.index) === 'manual' }]"
                              @click.stop="setParameterValueSource(param.index, 'manual')"
                              type="button"
                            >Manual</button>
                          </div>
                          <DSelect
                            v-if="getParameterValueSource(param.index) === 'payload'"
                            :model-value="getPayloadPathForParameter(param.index)"
                            @update:model-value="updateParameterMapping(param.index, String($event ?? ''))"
                            :placeholder="param.optional ? '(optional)' : 'Select property'"
                            :options="availablePayloadProperties" label-key="text" value-key="value"
                            clearable
                            class="parameter-value-input"></DSelect>
                          <DInput
                            v-else
                            :model-value="getManualValueForParameter(param.index)"
                            @update:model-value="updateManualParameterValue(param.index, String($event ?? ''))"
                            :placeholder="`Enter ${param.type}`"
                            class="parameter-value-input"></DInput>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                  </DCard>
      </div>
      <template #actions>
        <DButton intent="quiet" @click="showEditDialog = false; resetForm()">Cancel</DButton>
        <DButton intent="primary" @click="addMapping">Save</DButton>
      </template>
    </DModal>

    <DModal v-model="showDeleteConfirm" size="sm" @cancel="cancelRemoveMapping">
      <template #header>
        <DIcon name="warning" size="lg" tone="color-err" />
        <h2 class="confirm__title">Event-Mapping löschen</h2>
      </template>
      <p class="confirm__text">
        Möchtest du dieses Event-Mapping wirklich löschen? Diese Aktion kann nicht rückgängig
        gemacht werden.
      </p>
      <template #actions>
        <DButton intent="quiet" @click="cancelRemoveMapping">Abbrechen</DButton>
        <DButton intent="danger" @click="confirmRemoveMapping()">Löschen</DButton>
      </template>
    </DModal>
  </div>
</template>

<style scoped>
.event-manager-ui {
  padding: 1.5rem;
  margin-left: 75px;
  width: 100%;
  min-height: 100vh;
  background: var(--color-backgroundPrimary, #f6f6f6);
}

.header-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.page-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #262824;
  margin: 0;
}

.ice {
  background: rgb(247 243 243 / 85%);
  border-radius: 16px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.space-y-4 > * + * {
  margin-top: 1rem;
}

.space-y-2 > * + * {
  margin-top: 0.5rem;
}

.space-y-3 > * + * {
  margin-top: 0.75rem;
}

.card-section {
  background: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-md, 4px);
}

.card-section__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.section-title {
  margin: 0;
  font-size: 1rem;
  font-weight: 500;
  color: var(--color-fg);
}

.confirm__title {
  margin: 0;
  font-family: var(--font-sans);
  font-size: var(--text-base);
  font-weight: 600;
  color: var(--color-fg);
}

.confirm__text {
  margin: 0;
  color: var(--color-dim);
  line-height: 1.5;
}

/* The mappings, written out: one row per mapping, one column per field */
.mappings {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-fg);
}

.mappings th {
  position: sticky;
  top: 0;
  z-index: 1;
  padding: 8px 10px;
  text-align: left;
  background: var(--color-raised);
  border-bottom: 1px solid var(--color-divider);
  font-size: var(--text-xs);
  font-weight: 500;
  color: var(--color-dim);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
}

.mappings td {
  padding: 6px 10px;
  border-bottom: 1px solid var(--color-divider);
  vertical-align: top;
}

.mappings tbody tr:hover {
  background: var(--color-raised);
}

.mappings__actions {
  display: flex;
  gap: 6px;
  justify-content: flex-end;
}

.mappings__empty {
  padding: 14px 10px;
  color: var(--color-dim);
}

.condition-row {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.parameter-wrapper {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 8px;
  border: 1px solid rgba(213, 213, 213, 0.4);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
}

.parameter-header {
  margin-bottom: 0.75rem;
}

.parameter-info {
  font-family: 'Monaco', 'Courier New', monospace;
  font-size: 0.9rem;
}

.parameter-name {
  /*font-weight: 600;
  color: #cc9100;*/
}

.parameter-optional {
  color: #666;
}

.parameter-separator {
  margin: 0 0.25rem;
  color: #666;
}

.parameter-type {
  color: #008080;
  font-weight: 500;
}

/* Table header styling */
.table-header {
  display: flex;
  width: 100%;
  padding: 1rem;
  border-bottom: 1px solid rgba(213, 213, 213, 0.4);
  background: rgba(255, 255, 255, 0.4);
  font-weight: 500;
  font-size: 0.875rem;
  color: #262824;
}

.header-cell {
  padding: 0 0.5rem;
  text-align: left;
}

.table-content {
  background: white;
}

/* Event Mapping Grid Layout */
.event-mapping-grid {
  display: grid;
  grid-template-columns: 200px 120px 150px 120px 180px 150px 80px;
}

/* Table wrapper - constrain height */
.table-wrapper {
  height: calc(100vh - 130px);
  background: #fff;
}

/* Actions list in table */
.actions-list {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.action-item {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
}

.mapping-id {
  font-size: 0.8rem;
  color: #374151;
  font-family: 'Monaco', 'Courier New', monospace;
  max-width: 220px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
}

.uid-badge {
  display: inline-block;
  font-size: 0.75rem;
  font-family: 'Monaco', 'Courier New', monospace;
  color: #1e40af;
  background-color: #dbeafe;
  padding: 0.1rem 0.4rem;
  border-radius: 0.25rem;
  max-width: 180px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  margin-left: 0.25rem;
}

.action-context {
  color: #6b7280;
  font-size: 0.8rem;
}

.action-separator {
  color: #9ca3af;
}

.action-name {
  /*font-weight: 500;
  color: #cc9100;*/
}

/* Action tabs styling */
.actions-tabs {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.action-tabs-header {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid rgba(213, 213, 213, 0.4);
}

.action-tab {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0.75rem;
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(213, 213, 213, 0.4);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.875rem;
}

.action-tab:hover {
  background: rgba(255, 255, 255, 0.9);
  border-color: rgba(205, 145, 0, 0.3);
}

.action-tab.active {
  background: rgba(0, 102, 204, 0.1);
  border-color: #cc9100;
  color: #cc9100;
}

.action-tab-label {
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.action-tab-remove {
  margin-left: 0.25rem;
}

.action-editor {
  padding: 1rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 8px;
  border: 1px solid rgba(213, 213, 213, 0.3);
}

/* New compact layout styles */
.event-source-grid {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* Action cards list */
.actions-list-editor {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.action-card {
  /* border: 1px solid rgba(213, 213, 213, 0.4);*/
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 1px 1px 5px #cccccc69;
}

.action-card:hover {
  border-color: rgba(149, 149, 149, 0.3);
}

.action-card.active {
  border-color: rgba(149, 149, 149, 0.3);
}

.action-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
}

.action-number {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  /* background: #cc9100; */
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 600;
  flex-shrink: 0;
  border: 1px solid #cc9100;
  color: #cc9100;
}

.action-summary {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  min-width: 0;
}

.action-context-badge {
  padding: 0.125rem 0.5rem;
  background: #e5e7eb;
  color: #4b5563;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  flex-shrink: 0;
}

.action-name-text {
  font-weight: 500;
  /*color: #cc9100;*/
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.action-empty {
  color: #9ca3af;
  font-style: italic;
}

.action-card-body {
  padding: 0 1rem 1rem 1rem;
  border-top: 1px solid rgba(213, 213, 213, 0.3);
  margin-top: 0;
}

/*
 * Stacked, because these fields carry their labels beside them now: three
 * label-and-control pairs side by side left each control a stub of what it
 * had to show.
 */
.action-settings-row {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-top: 0.75rem;
}

/* Inline parameters */
.action-parameters {
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 1px dashed rgba(213, 213, 213, 0.5);
}

.parameters-title {
  font-size: 0.75rem;
  font-weight: 600;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.5rem;
}

.parameters-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.parameter-item {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.5rem;
  /*background: rgba(248, 250, 252, 0.8);
  border-radius: 6px;
  border: 1px solid rgba(213, 213, 213, 0.3);*/
}

.parameter-label {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
}

.parameter-label .parameter-name {
  font-weight: 600;
  /*color: #cc9100;*/
}

.parameter-label .parameter-optional {
  color: #9ca3af;
}

.parameter-type-badge {
  margin-left: 0.25rem;
  padding: 0.0625rem 0.375rem;
  /* background: #dbeafe; */
  /* color: #cc9100; */
  border-radius: 3px;
  font-size: 0.65rem;
  font-weight: 500;
  /* border-color: #d9d9d9; */
  border: 1px solid #ddd;
}

.parameter-input-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.source-toggle {
  display: flex;
  border: 1px solid rgba(213, 213, 213, 0.5);
  border-radius: 4px;
  overflow: hidden;
  flex-shrink: 0;
}

.toggle-btn {
  padding: 0.25rem 0.5rem;
  font-size: 0.7rem;
  background: white;
  border: none;
  cursor: pointer;
  transition: all 0.15s ease;
  color: #6b7280;
}

.toggle-btn:first-child {
  border-right: 1px solid rgba(213, 213, 213, 0.5);
}

.toggle-btn:hover {
  background: #f3f4f6;
}

.toggle-btn.active {
  background: #6767676e;
  color: white;
}

.parameter-value-input {
  flex: 1;
  min-width: 150px;
}
</style>
