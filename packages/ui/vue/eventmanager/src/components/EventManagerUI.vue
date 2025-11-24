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
import { ref, computed, onMounted } from 'vue'
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { EventManager, EVENT_MANAGER, type EventActionMapping, EventRegistry, EVENT_REGISTRY, type WidgetEventDefinition, EventActionsRegistry, EVENT_ACTIONS_REGISTRY, type EventActionContext, type WidgetTypeRegistration, Condition, Comperator } from 'org.eclipse.daanse.board.app.lib.events'
import { type PageRegistryI, identifier as PageIdentifier } from 'org.eclipse.daanse.board.app.lib.repository.page'

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
const newMapping = ref<Partial<EventActionMapping>>({
  context: 'widget',
  targetContext: 'widget',
  conditions: [],
  payloadMapping: []
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
  { key: 'targetContext', label: 'Action Context', sortable: true },
  { key: 'actionName', label: 'Action', sortable: true },
  { key: 'conditions', label: 'Conditions' },
  { key: 'actions', label: 'Actions', width: 100 }
]

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
  if (!newMapping.value.targetContext) return []

  if (newMapping.value.targetContext === 'widget') {
    const actions: { text: string; value: string; parameters?: string[]; widgetType?: string }[] = []
    for (const widgetType of availableWidgetTypes.value) {
      for (const action of widgetType.actions) {
        actions.push({
          text: `${widgetType.widgetType}.${action.methodName}`,
          value: action.methodName,
          parameters: action.parameters,
          widgetType: widgetType.widgetType
        })
      }
    }
    return actions
  }

  if (newMapping.value.targetContext === 'system') {
    // Get system actions from all registered action types
    const actions: { text: string; value: string; parameters?: string[]; widgetType?: string }[] = []

    // Collect from all *SystemActions or *SystemVariableActions types
    for (const widgetType of availableWidgetTypes.value) {
      if (widgetType.widgetType.includes('System')) {
        for (const action of widgetType.actions) {
          actions.push({
            text: `${action.methodName}`,
            value: action.methodName,
            parameters: action.parameters,
            widgetType: widgetType.widgetType
          })
        }
      }
    }
    return actions
  }

  if (newMapping.value.targetContext === 'page') {
    // Get page actions from all registered action types
    const actions: { text: string; value: string; parameters?: string[]; widgetType?: string }[] = []

    // Collect from all *PageActions or *PageVariableActions types
    for (const widgetType of availableWidgetTypes.value) {
      if (widgetType.widgetType.includes('Page')) {
        for (const action of widgetType.actions) {
          actions.push({
            text: `${action.methodName}`,
            value: action.methodName,
            parameters: action.parameters,
            widgetType: widgetType.widgetType
          })
        }
      }
    }
    return actions
  }

  return []
})

interface ActionParameterInfo {
  name: string
  type: string
  optional: boolean
  index: number
}

const selectedActionParameters = computed<ActionParameterInfo[]>(() => {
  if (!newMapping.value.actionName || !newMapping.value.targetContext) return []

  // Determine which widget type to search based on target context
  let searchWidgetTypes: WidgetTypeRegistration[] = availableWidgetTypes.value

  if (newMapping.value.targetContext === 'system') {
    // Search all types containing "System"
    searchWidgetTypes = availableWidgetTypes.value.filter(wt => wt.widgetType.includes('System'))
  } else if (newMapping.value.targetContext === 'page') {
    // Search all types containing "Page"
    searchWidgetTypes = availableWidgetTypes.value.filter(wt => wt.widgetType.includes('Page'))
  }

  for (const widgetType of searchWidgetTypes) {
    const action = widgetType.actions.find(a => a.methodName === newMapping.value.actionName)
    console.log('🎯 Looking for action:', newMapping.value.actionName, 'in', widgetType.widgetType)
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

const getActionSignature = (mapping: EventActionMapping): string => {
  if (mapping.targetContext === 'widget') {
    // Find the widget type and action to get parameter information
    for (const widgetType of availableWidgetTypes.value) {
      const action = widgetType.actions.find(a => a.methodName === mapping.actionName)
      if (action) {
        const paramsText = action.parameters?.length
          ? `(${action.parameters.join(', ')})`
          : '()'
        return `${mapping.actionName}${paramsText}`
      }
    }
  }
  // For system/page actions or if not found, just return the action name
  return mapping.actionName
}

const addMapping = () => {
  if (!newMapping.value.eventType || !newMapping.value.actionName) {
    return
  }

  const mapping: EventActionMapping = {
    id: editingMappingId.value || `mapping-${Date.now()}`,
    context: newMapping.value.context as EventActionContext,
    contextId: newMapping.value.contextId,
    eventType: newMapping.value.eventType,
    conditions: newMapping.value.conditions || [],
    targetContext: newMapping.value.targetContext as EventActionContext,
    targetContextId: newMapping.value.targetContextId,
    actionName: newMapping.value.actionName,
    actionArgs: newMapping.value.actionArgs,
    payloadMapping: newMapping.value.payloadMapping || []
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
  newMapping.value = {
    context: mapping.context,
    contextId: mapping.contextId,
    eventType: mapping.eventType,
    targetContext: mapping.targetContext,
    targetContextId: mapping.targetContextId,
    actionName: mapping.actionName,
    actionArgs: mapping.actionArgs,
    conditions: mapping.conditions || [],
    payloadMapping: mapping.payloadMapping || []
  }

  // Restore parameter sources and manual values
  parameterValueSources.value.clear()
  manualParameterValues.value.clear()

  if (mapping.payloadMapping) {
    mapping.payloadMapping.forEach(pm => {
      parameterValueSources.value.set(pm.argIndex, 'payload')
    })
  }

  if (mapping.actionArgs) {
    mapping.actionArgs.forEach((arg, index) => {
      if (arg !== undefined && !mapping.payloadMapping?.some(pm => pm.argIndex === index)) {
        parameterValueSources.value.set(index, 'manual')
        manualParameterValues.value.set(index, String(arg))
      }
    })
  }

  showEditDialog.value = true
}

const removeMapping = (mappingId: string) => {
  eventManager.unregisterMapping(mappingId)
  loadMappings()
}

const resetForm = () => {
  newMapping.value = {
    context: 'widget',
    targetContext: 'widget',
    conditions: [],
    payloadMapping: []
  }
  editingMappingId.value = null
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
  if (!newMapping.value.payloadMapping) {
    newMapping.value.payloadMapping = []
  }

  // Remove existing mapping for this parameter index
  newMapping.value.payloadMapping = newMapping.value.payloadMapping.filter(
    pm => pm.argIndex !== paramIndex
  )

  // Add new mapping if a payload path is selected
  if (payloadPath) {
    newMapping.value.payloadMapping.push({
      payloadPath,
      argIndex: paramIndex
    })
  }
}

const updateManualParameterValue = (paramIndex: number, value: string) => {
  manualParameterValues.value.set(paramIndex, value)

  // Also store in actionArgs if using manual values
  if (!newMapping.value.actionArgs) {
    newMapping.value.actionArgs = []
  }
  // Ensure array is large enough
  while (newMapping.value.actionArgs.length <= paramIndex) {
    newMapping.value.actionArgs.push(undefined)
  }

  // Parse value based on type
  const param = selectedActionParameters.value.find(p => p.index === paramIndex)
  if (param) {
    if (param.type === 'number' || param.type.includes('number')) {
      newMapping.value.actionArgs[paramIndex] = parseFloat(value) || 0
    } else if (param.type === 'boolean') {
      newMapping.value.actionArgs[paramIndex] = value === 'true'
    } else {
      newMapping.value.actionArgs[paramIndex] = value
    }
  }
}

const getParameterValueSource = (paramIndex: number): 'payload' | 'manual' => {
  return parameterValueSources.value.get(paramIndex) || 'payload'
}

const setParameterValueSource = (paramIndex: number, source: 'payload' | 'manual') => {
  parameterValueSources.value.set(paramIndex, source)

  if (source === 'manual') {
    // Clear payload mapping
    if (newMapping.value.payloadMapping) {
      newMapping.value.payloadMapping = newMapping.value.payloadMapping.filter(
        pm => pm.argIndex !== paramIndex
      )
    }
  } else {
    // Clear manual value
    manualParameterValues.value.delete(paramIndex)
    if (newMapping.value.actionArgs && newMapping.value.actionArgs[paramIndex] !== undefined) {
      newMapping.value.actionArgs[paramIndex] = undefined
    }
  }
}

const getPayloadPathForParameter = (paramIndex: number): string => {
  if (!newMapping.value.payloadMapping) return ''
  const mapping = newMapping.value.payloadMapping.find(pm => pm.argIndex === paramIndex)
  return mapping?.payloadPath || ''
}

const getManualValueForParameter = (paramIndex: number): string => {
  return manualParameterValues.value.get(paramIndex) || ''
}

const formatConditions = (conditions?: Condition[]) => {
  if (!conditions || conditions.length === 0) return '-'
  return conditions.map(c => `${c.prop} ${c.comperator} ${c.value}`).join(' AND ')
}

onMounted(() => {
  // Get container instances after mount, when EventRegistry is registered
  eventManager = container.get<EventManager>(EVENT_MANAGER)
  eventRegistry = container.get<EventRegistry>(EVENT_REGISTRY)
  actionsRegistry = container.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY)
  pageRegistry = container.get<PageRegistryI>(PageIdentifier)

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
      <VaButton @click="showAddDialog = true" icon="add">Add Mapping</VaButton>
    </div>

    <div class="flex flex-col border border-gray-300 rounded-lg overflow-hidden w-full table-wrapper">
      <div class="w-full overflow-auto flex flex-col bg-white">
        <VaDataTable
          :items="mappings"
          :columns="columns"
          :hoverable="true"
          class="w-full"
        >
          <template #cell(id)="{ rowData }">
            <span class="text-xs text-gray-600">{{ rowData.id }}</span>
          </template>
          <template #cell(context)="{ rowData }">
            {{ rowData.context }}{{ rowData.contextId ? `:${rowData.contextId}` : '' }}
          </template>
          <template #cell(targetContext)="{ rowData }">
            {{ rowData.targetContext }}{{ rowData.targetContextId ? `:${rowData.targetContextId}` : '' }}
          </template>
          <template #cell(actionName)="{ rowData }">
            {{ getActionSignature(rowData) }}
          </template>
          <template #cell(conditions)="{ rowData }">
            <span class="text-xs">{{ formatConditions(rowData.conditions) }}</span>
          </template>
          <template #cell(actions)="{ rowData }">
            <div class="flex gap-2">
              <VaButton
                @click="editMapping(rowData)"
                preset="plain"
                icon="edit"
                size="small"
              />
              <VaButton
                @click="removeMapping(rowData.id)"
                preset="plain"
                icon="delete"
                color="danger"
                size="small"
              />
            </div>
          </template>
        </VaDataTable>
      </div>
    </div>

    <!-- Add Modal Dialog -->
    <VaModal
      v-model="showAddDialog"
      title="Add Event-Action Mapping"
      size="large"
      class="event-manager-ui_modal"
      @ok="addMapping"
      @cancel="resetForm"
      ok-text="Add"
      cancel-text="Cancel"
    >
      <div class="space-y-4">
        <!-- Event Source Section -->
        <VaCard class="card-section">
          <VaCardTitle class="section-title">Event Source</VaCardTitle>
          <VaCardContent>
            <VaSelect
              v-model="newMapping.context"
              label="Event Context"
              :options="contextOptions"
              text-by="text"
              value-by="value"
            />

            <VaSelect
              v-if="newMapping.context === 'page'"
              v-model="newMapping.contextId"
              label="Page ID"
              :options="[{ text: 'Any page', value: '' }, ...availablePages.map(p => ({ text: p, value: p }))]"
              text-by="text"
              value-by="value"
              clearable
            />

            <VaInput
              v-else-if="newMapping.context === 'widget'"
              v-model="newMapping.contextId"
              label="Widget ID (optional)"
              placeholder="e.g., specific widgetId"
              clearable
            />

            <VaSelect
              v-model="newMapping.eventType"
              label="Event Type"
              :options="availableEvents"
              text-by="type"
              value-by="type"
            />
          </VaCardContent>
        </VaCard>

        <!-- Action Target Section -->
        <VaCard class="card-section">
          <VaCardTitle class="section-title">Action Target</VaCardTitle>
          <VaCardContent>
            <VaSelect
              v-model="newMapping.targetContext"
              label="Action Context"
              :options="contextOptions"
              text-by="text"
              value-by="value"
            />

            <VaSelect
              v-if="newMapping.targetContext === 'page'"
              v-model="newMapping.targetContextId"
              label="Target Page ID"
              :options="[{ text: 'Any page', value: '' }, ...availablePages.map(p => ({ text: p, value: p }))]"
              text-by="text"
              value-by="value"
              clearable
            />

            <VaInput
              v-else-if="newMapping.targetContext === 'widget'"
              v-model="newMapping.targetContextId"
              label="Target Widget ID (optional)"
              placeholder="e.g., specific widgetId"
              clearable
            />

            <VaSelect
              v-model="newMapping.actionName"
              label="Action"
              :options="availableActions"
              text-by="text"
              value-by="value"
            />
          </VaCardContent>
        </VaCard>

        <!-- Conditions Section -->
        <VaCard class="card-section">
          <VaCardTitle class="flex justify-between items-center">
            <span class="section-title">Conditions</span>
            <VaButton @click="addCondition" size="small" icon="add">Add Condition</VaButton>
          </VaCardTitle>
          <VaCardContent>
            <div v-if="newMapping.conditions && newMapping.conditions.length > 0" class="space-y-2">
              <div v-for="(condition, index) in newMapping.conditions" :key="index" class="condition-row">
                <VaSelect
                  v-model="condition.prop"
                  placeholder="Select property"
                  :options="availablePayloadProperties"
                  text-by="text"
                  value-by="value"
                  class="flex-1"
                />
                <VaSelect
                  v-model="condition.comperator"
                  :options="comperatorOptions"
                  text-by="text"
                  value-by="value"
                  class="w-24"
                />
                <VaInput
                  v-model="condition.value"
                  placeholder="Value"
                  class="flex-1"
                />
                <VaButton
                  @click="removeCondition(index)"
                  preset="plain"
                  icon="delete"
                  color="danger"
                  size="small"
                />
              </div>
            </div>
            <div v-else class="text-gray-500 italic text-sm">
              No conditions - action will always execute
            </div>
          </VaCardContent>
        </VaCard>

        <!-- Function Parameters Section -->
        <VaCard v-if="selectedActionParameters.length > 0" class="card-section">
          <VaCardTitle class="section-title">Function Parameters</VaCardTitle>
          <VaCardContent>
            <div class="space-y-3">
              <div v-for="param in selectedActionParameters" :key="param.index" class="parameter-wrapper">
                <div class="parameter-header">
                  <span class="parameter-info">
                    <span class="parameter-name">{{ param.name }}</span>
                    <span v-if="param.optional" class="parameter-optional">?</span>
                    <span class="parameter-separator">:</span>
                    <span class="parameter-type">{{ param.type }}</span>
                  </span>
                </div>

                <div class="flex gap-4 mb-2">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      :name="`source-${param.index}`"
                      value="payload"
                      :checked="getParameterValueSource(param.index) === 'payload'"
                      @change="setParameterValueSource(param.index, 'payload')"
                    />
                    <span class="text-sm">From Event Payload</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      :name="`source-${param.index}`"
                      value="manual"
                      :checked="getParameterValueSource(param.index) === 'manual'"
                      @change="setParameterValueSource(param.index, 'manual')"
                    />
                    <span class="text-sm">Manual Value</span>
                  </label>
                </div>

                <VaSelect
                  v-if="getParameterValueSource(param.index) === 'payload'"
                  :model-value="getPayloadPathForParameter(param.index)"
                  @update:model-value="updateParameterMapping(param.index, $event)"
                  :placeholder="param.optional ? '(optional)' : 'Select payload property'"
                  :options="availablePayloadProperties"
                  text-by="text"
                  value-by="value"
                  clearable
                />

                <VaInput
                  v-else
                  :model-value="getManualValueForParameter(param.index)"
                  @update:model-value="updateManualParameterValue(param.index, $event)"
                  :placeholder="`Enter ${param.type} value`"
                  :messages="[`Type: ${param.type}`]"
                />
              </div>
            </div>
          </VaCardContent>
        </VaCard>
      </div>
    </VaModal>

    <!-- Edit Modal Dialog -->
    <VaModal
      v-model="showEditDialog"
      title="Edit Event-Action Mapping"
      size="large"
      @ok="addMapping"
      @cancel="resetForm"
      ok-text="Save"
      cancel-text="Cancel"
    >
      <div class="space-y-4">
        <!-- Event Source Section -->
        <VaCard class="card-section">
          <VaCardTitle class="section-title">Event Source</VaCardTitle>
          <VaCardContent>
            <VaSelect
              v-model="newMapping.context"
              label="Event Context"
              :options="contextOptions"
              text-by="text"
              value-by="value"
            />

            <VaSelect
              v-if="newMapping.context === 'page'"
              v-model="newMapping.contextId"
              label="Page ID"
              :options="[{ text: 'Any page', value: '' }, ...availablePages.map(p => ({ text: p, value: p }))]"
              text-by="text"
              value-by="value"
              clearable
            />

            <VaInput
              v-else-if="newMapping.context === 'widget'"
              v-model="newMapping.contextId"
              label="Widget ID (optional)"
              placeholder="e.g., specific widgetId"
              clearable
            />

            <VaSelect
              v-model="newMapping.eventType"
              label="Event Type"
              :options="availableEvents"
              text-by="type"
              value-by="type"
            />
          </VaCardContent>
        </VaCard>

        <!-- Action Target Section -->
        <VaCard class="card-section">
          <VaCardTitle class="section-title">Action Target</VaCardTitle>
          <VaCardContent>
            <VaSelect
              v-model="newMapping.targetContext"
              label="Action Context"
              :options="contextOptions"
              text-by="text"
              value-by="value"
            />

            <VaSelect
              v-if="newMapping.targetContext === 'page'"
              v-model="newMapping.targetContextId"
              label="Target Page ID"
              :options="[{ text: 'Any page', value: '' }, ...availablePages.map(p => ({ text: p, value: p }))]"
              text-by="text"
              value-by="value"
              clearable
            />

            <VaInput
              v-else-if="newMapping.targetContext === 'widget'"
              v-model="newMapping.targetContextId"
              label="Target Widget ID (optional)"
              placeholder="e.g., specific widgetId"
              clearable
            />

            <VaSelect
              v-model="newMapping.actionName"
              label="Action"
              :options="availableActions"
              text-by="text"
              value-by="value"
            />
          </VaCardContent>
        </VaCard>

        <!-- Conditions Section -->
        <VaCard class="card-section">
          <VaCardTitle class="flex justify-between items-center">
            <span class="section-title">Conditions</span>
            <VaButton @click="addCondition" size="small" icon="add">Add Condition</VaButton>
          </VaCardTitle>
          <VaCardContent>
            <div v-if="newMapping.conditions && newMapping.conditions.length > 0" class="space-y-2">
              <div v-for="(condition, index) in newMapping.conditions" :key="index" class="condition-row">
                <VaSelect
                  v-model="condition.prop"
                  placeholder="Select property"
                  :options="availablePayloadProperties"
                  text-by="text"
                  value-by="value"
                  class="flex-1"
                />
                <VaSelect
                  v-model="condition.comperator"
                  :options="comperatorOptions"
                  text-by="text"
                  value-by="value"
                  class="w-24"
                />
                <VaInput
                  v-model="condition.value"
                  placeholder="Value"
                  class="flex-1"
                />
                <VaButton
                  @click="removeCondition(index)"
                  preset="plain"
                  icon="delete"
                  color="danger"
                  size="small"
                />
              </div>
            </div>
            <div v-else class="text-gray-500 italic text-sm">
              No conditions - action will always execute
            </div>
          </VaCardContent>
        </VaCard>

        <!-- Function Parameters Section -->
        <VaCard v-if="selectedActionParameters.length > 0" class="card-section">
          <VaCardTitle class="section-title">Function Parameters</VaCardTitle>
          <VaCardContent>
            <div class="space-y-3">
              <div v-for="param in selectedActionParameters" :key="param.index" class="parameter-wrapper">
                <div class="parameter-header">
                  <span class="parameter-info">
                    <span class="parameter-name">{{ param.name }}</span>
                    <span v-if="param.optional" class="parameter-optional">?</span>
                    <span class="parameter-separator">:</span>
                    <span class="parameter-type">{{ param.type }}</span>
                  </span>
                </div>

                <div class="flex gap-4 mb-2">
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      :name="`source-${param.index}`"
                      value="payload"
                      :checked="getParameterValueSource(param.index) === 'payload'"
                      @change="setParameterValueSource(param.index, 'payload')"
                    />
                    <span class="text-sm">From Event Payload</span>
                  </label>
                  <label class="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      :name="`source-${param.index}`"
                      value="manual"
                      :checked="getParameterValueSource(param.index) === 'manual'"
                      @change="setParameterValueSource(param.index, 'manual')"
                    />
                    <span class="text-sm">Manual Value</span>
                  </label>
                </div>

                <VaSelect
                  v-if="getParameterValueSource(param.index) === 'payload'"
                  :model-value="getPayloadPathForParameter(param.index)"
                  @update:model-value="updateParameterMapping(param.index, $event)"
                  :placeholder="param.optional ? '(optional)' : 'Select payload property'"
                  :options="availablePayloadProperties"
                  text-by="text"
                  value-by="value"
                  clearable
                />

                <VaInput
                  v-else
                  :model-value="getManualValueForParameter(param.index)"
                  @update:model-value="updateManualParameterValue(param.index, $event)"
                  :placeholder="`Enter ${param.type} value`"
                  :messages="[`Type: ${param.type}`]"
                />
              </div>
            </div>
          </VaCardContent>
        </VaCard>
      </div>
    </VaModal>
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
  background: rgba(255, 255, 255, 0.6);
  border-radius: 12px;
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(213, 213, 213, 0.3);
}

:deep(.card-section.va-card) {
  box-shadow: none !important;
}

:deep(.card-section .va-card__inner) {
  box-shadow: none !important;
}

.section-title {
  font-size: 1rem;
  font-weight: 500;
  color: #262824;
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
  font-weight: 600;
  color: #0066cc;
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

/* Modal overlay styling to match feature_menustrckt */
:deep(.va-modal__overlay) {
  opacity: 1 !important;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: rgb(204 204 204 / 55%) !important;
}

:deep(.va-modal) {
  z-index: 3000000 !important;
}

:deep(.va-modal__inner) {
  background: rgb(247 243 243 / 85%) !important;
  border-radius: 16px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

:deep(.va-modal__dialog) {
  background: transparent !important;
}

:deep(.va-modal__container) {
  background: transparent !important;
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

:deep(.table-content .va-data-table) {
  background: transparent;
}

:deep(.table-content .va-data-table__table) {
  background: white;
}

/* Event Mapping Grid Layout */
.event-mapping-grid {
  display: grid;
  grid-template-columns: 200px 120px 150px 120px 180px 150px 80px;
}

/* VaDataTable header styling */
:deep(.va-data-table__table-thead) {
  background: #f9fafb;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* Table wrapper - constrain height */
.table-wrapper {
  height: calc(100vh - 130px);
  background: #fff;
}
</style>
