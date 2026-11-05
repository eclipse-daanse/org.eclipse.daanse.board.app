<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts" setup>
/**
 * Which columns the table shows.
 *
 * The one question about this table that a form cannot be generated for:
 * the model has no idea what columns an answer carries, and the choice is
 * "which of these" rather than a list typed out by hand. So the columns
 * are read from the source the widget is pointed at, the same way the
 * widget itself reads them, and offered as what they are (#1185).
 *
 * Everything else about the table - the page size, the sorting, the
 * header - renders from model/ui.xmi beside this.
 */
import { computed, ref, watch } from 'vue'
import type { EObject } from '@emfts/core'
import { useDatasourceRepository, useEObject, useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { DButton, DCheckbox, DColorInput, DIcon, DInput, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { DatatablesettingsFactory } from './gen/DatatablesettingsFactory'
import { DataTableCondition } from './gen/DataTableCondition'
import { DataTableColorTarget } from './gen/DataTableColorTarget'
import { DataTableFilterMatch } from './gen/DataTableFilterMatch'
import { conditionOf, listOf, matchOf, targetOf, type ColorRuleLike, type RuleLike } from './rules'

/**
 * The widget these settings belong to, as far as this section needs it.
 *
 * Named by shape rather than by the workspace model: all the section asks
 * is which source the widget reads from, and the shape says that without
 * a dependency on the model package.
 */
export interface SourceHolder {
  datasource?: { uid?: string }
  config?: { datasourceId?: string }
}

const props = defineProps<{
  /**
   * The widget itself. Which source it reads from is a reference on the
   * widget, not a value in its settings - see `datasourceId` below.
   */
  widget?: SourceHolder
  /** Every source there is, offered by whoever shows the settings; not needed here. */
  dataSources?: unknown
}>()

const widgetSettings = defineModel<any>({ required: true })

const { t } = useTranslation('tableData')

/*
 * Watched, not read off the prop: choosing a source in the "Data" tab sets
 * the reference on the widget while this section is open, and the widget
 * stays the same instance. The adapter sees the set; a plain read of the
 * prop would not.
 */
const watchedWidget = useEObject(() => props.widget as EObject | undefined)

/*
 * Which source the widget reads from - the same way the wrapper finds it.
 *
 * The model holds it as a reference on the widget; the picker in the
 * overlay sets only that. A board written before the reference existed
 * carries the id in the configuration instead, so that is asked second.
 * The settings object this section edits has no feature for it at all:
 * reading the id off it saw nothing for a widget whose source is the
 * reference, and the column list stayed empty (#1202).
 */
const datasourceId = computed<string>(() => {
  const widget = watchedWidget.value as SourceHolder | undefined
  return widget?.datasource?.uid ?? widget?.config?.datasourceId ?? widgetSettings.value?.datasourceId ?? ''
})

const data = ref<any>(null)
useDatasourceRepository(datasourceId, 'DataTable', data)

/** Every column the answer carries, which is what there is to choose from. */
const columns = computed<string[]>(() => {
  const first = data.value?.items?.[0]
  return first ? Object.keys(first) : []
})

/*
 * Held as the columns left out, so an answer that grows a column later
 * shows it rather than hiding it because nobody came back to tick it.
 *
 * Read from both shapes: a settings object built through the factory
 * keeps this as an EList, and one read back from a stored board as a
 * plain array.
 */
const hidden = computed<Set<string>>(() => {
  const held = widgetSettings.value?.hiddenColumns
  if (!held) return new Set()
  return new Set(Array.from(held as Iterable<string>))
})

/** Writes the list back into whichever of the two shapes is there. */
function keepHidden(names: string[]) {
  const held = widgetSettings.value?.hiddenColumns as any
  if (held && typeof held.clear === 'function') {
    held.clear()
    for (const name of names) {
      if (typeof held.add === 'function') held.add(name)
      else if (typeof held.push === 'function') held.push(name)
    }
    return
  }
  widgetSettings.value.hiddenColumns = names
}

function setShown(column: string, shown: boolean) {
  const names = new Set(hidden.value)
  if (shown) names.delete(column)
  else names.add(column)
  keepHidden([...names])
}

/*
 * A column that is no longer in the answer stops being hidden.
 *
 * Left in the list it would sit there invisibly and hide that column
 * again if the source ever answered it once more - a setting nobody can
 * see and nobody made.
 */
watch(columns, (there) => {
  if (!there.length) return
  const known = new Set(there)
  const stale = [...hidden.value].filter((name) => !known.has(name))
  if (stale.length) keepHidden([...hidden.value].filter((name) => known.has(name)))
})

/* ------------------------------------------------------------ rules (#1265) */

/*
 * The table's own rules. Kept in the settings as contained lists: the
 * dialog hands this section the modelled settings, whose lists are ELists
 * and want modelled rules; a test or an old board may hand over plain
 * arrays, which get plain objects. Either way the board stores the rules
 * by their feature names.
 */
type RuleKey = 'colorRules' | 'filterRules'

const isEList = (held: any) => !!held && typeof held.removeAt === 'function' && typeof held.move === 'function'

function rulesOf<T>(key: RuleKey): T[] {
  return listOf<T>(widgetSettings.value?.[key])
}

function addRule(key: RuleKey) {
  const held = widgetSettings.value?.[key]
  const column = columns.value[0] ?? ''
  if (isEList(held)) {
    const factory = DatatablesettingsFactory.eINSTANCE
    const rule: any = key === 'colorRules' ? factory.createDataTableColorRule() : factory.createDataTableFilterRule()
    rule.column = column
    if (key === 'colorRules') rule.color = '#43a047'
    held.push(rule)
    return
  }
  const rule: Record<string, string> = { column, condition: DataTableCondition.EQUALS, value: '', valueTo: '' }
  if (key === 'colorRules') Object.assign(rule, { color: '#43a047', textColor: '', target: DataTableColorTarget.CELL })
  widgetSettings.value[key] = [...listOf(held), rule]
}

function removeRule(key: RuleKey, at: number) {
  const held = widgetSettings.value?.[key]
  if (isEList(held)) held.removeAt(at)
  else widgetSettings.value[key] = listOf(held).filter((_, i) => i !== at)
}

/* Earlier rules win, so their order is a setting of its own. */
function moveRule(key: RuleKey, from: number, to: number) {
  const held = widgetSettings.value?.[key]
  const size = listOf(held).length
  if (to < 0 || to >= size) return
  if (isEList(held)) {
    held.move(to, from)
    return
  }
  const next = listOf(held)
  next.splice(to, 0, next.splice(from, 1)[0])
  widgetSettings.value[key] = next
}

/* Written through the rule itself, so a modelled rule notifies the table. */
function setRule(rule: any, feature: string, value: unknown) {
  rule[feature] = value === null || value === undefined ? '' : value
}

/* i18n-keys: tableData:Rules.condition.* */
const conditionOptions = computed(() =>
  Object.values(DataTableCondition).map((uid) => ({ uid, name: t(`Rules.condition.${uid}`) })),
)

const targetOptions = computed(() => [
  { uid: DataTableColorTarget.CELL, name: t('Rules.targetCell') },
  { uid: DataTableColorTarget.ROW, name: t('Rules.targetRow') },
])

const matchOptions = computed(() => [
  { uid: DataTableFilterMatch.ALL, name: t('Rules.matchAll') },
  { uid: DataTableFilterMatch.ANY, name: t('Rules.matchAny') },
])

const columnOptions = computed(() => columns.value.map((name) => ({ uid: name, name })))

const filterMatch = computed({
  get: () => matchOf(widgetSettings.value?.filterMatch),
  set: (value: string) => {
    widgetSettings.value.filterMatch = matchOf(value)
  },
})

const needsValue = (rule: RuleLike) => conditionOf(rule.condition) !== DataTableCondition.EMPTY
const needsValueTo = (rule: RuleLike) => conditionOf(rule.condition) === DataTableCondition.BETWEEN
</script>

<template>
  <section class="settings-section" data-section-id="columns" :data-section="t('Settings.columns')">
    <div class="settings_container">
      <p v-if="!datasourceId" class="note">{{ t('Settings.noSource') }}</p>
      <p v-else-if="!columns.length" class="note">{{ t('Settings.noColumns') }}</p>

      <template v-else>
        <p class="note">{{ t('Settings.columnsHint') }}</p>
        <DCheckbox
          v-for="column in columns"
          :key="column"
          :model-value="!hidden.has(column)"
          :label="column"
          @update:model-value="(shown: boolean) => setShown(column, shown)"
        />
      </template>
    </div>
  </section>
  <section class="settings-section" data-section-id="colorRules" :data-section="t('Rules.colorTitle')">
    <div class="settings_container">
      <p class="note">{{ t('Rules.colorHint') }}</p>
      <p v-if="datasourceId && !columns.length" class="note">{{ t('Settings.noColumns') }}</p>
      <div v-for="(rule, at) in rulesOf<ColorRuleLike>('colorRules')" :key="at" class="rule" data-color-rule>
          <DSelect
            :model-value="rule.column"
            :label="t('Rules.column')"
            :options="columnOptions"
            label-key="name"
            value-key="uid"
            @update:model-value="(v: unknown) => setRule(rule, 'column', v)"
          />
          <DSelect
            :model-value="conditionOf(rule.condition)"
            :label="t('Rules.conditionLabel')"
            :options="conditionOptions"
            label-key="name"
            value-key="uid"
            @update:model-value="(v: unknown) => setRule(rule, 'condition', v)"
          />
          <DInput
            v-if="needsValue(rule)"
            :model-value="rule.value ?? ''"
            :label="t('Rules.value')"
            :hint="t('Rules.valueHint')"
            @update:model-value="(v: unknown) => setRule(rule, 'value', v)"
          />
          <DInput
            v-if="needsValueTo(rule)"
            :model-value="rule.valueTo ?? ''"
            :label="t('Rules.valueTo')"
            @update:model-value="(v: unknown) => setRule(rule, 'valueTo', v)"
          />
          <DColorInput
            :model-value="rule.color ?? ''"
            :label="t('Rules.color')"
            @update:model-value="(v: unknown) => setRule(rule, 'color', v)"
          />
          <DColorInput
            :model-value="rule.textColor ?? ''"
            :label="t('Rules.textColor')"
            :hint="t('Rules.textColorHint')"
            @update:model-value="(v: unknown) => setRule(rule, 'textColor', v)"
          />
          <DSelect
            :model-value="targetOf(rule.target)"
            :label="t('Rules.target')"
            :options="targetOptions"
            label-key="name"
            value-key="uid"
            @update:model-value="(v: unknown) => setRule(rule, 'target', v)"
          />
          <div class="rule__actions">
            <DButton size="sm" :disabled="at === 0" :title="t('Rules.up')" @click="moveRule('colorRules', at, at - 1)">
              <DIcon name="arrow_upward" size="sm" />
            </DButton>
            <DButton size="sm" :disabled="at === rulesOf('colorRules').length - 1" :title="t('Rules.down')" @click="moveRule('colorRules', at, at + 1)">
              <DIcon name="arrow_downward" size="sm" />
            </DButton>
            <DButton intent="danger" size="sm" :title="t('Rules.remove')" @click="removeRule('colorRules', at)">
              <DIcon name="delete" size="sm" />
            </DButton>
          </div>
      </div>
      <DButton size="sm" data-add-color-rule @click="addRule('colorRules')">{{ t('Rules.addColor') }}</DButton>
    </div>
  </section>

  <section class="settings-section" data-section-id="filterRules" :data-section="t('Rules.filterTitle')">
    <div class="settings_container">
      <p class="note">{{ t('Rules.filterHint') }}</p>
      <DSelect
        v-model="filterMatch"
        :label="t('Rules.match')"
        :options="matchOptions"
        label-key="name"
        value-key="uid"
      />
      <div v-for="(rule, at) in rulesOf<RuleLike>('filterRules')" :key="at" class="rule" data-filter-rule>
          <DSelect
            :model-value="rule.column"
            :label="t('Rules.column')"
            :options="columnOptions"
            label-key="name"
            value-key="uid"
            @update:model-value="(v: unknown) => setRule(rule, 'column', v)"
          />
          <DSelect
            :model-value="conditionOf(rule.condition)"
            :label="t('Rules.conditionLabel')"
            :options="conditionOptions"
            label-key="name"
            value-key="uid"
            @update:model-value="(v: unknown) => setRule(rule, 'condition', v)"
          />
          <DInput
            v-if="needsValue(rule)"
            :model-value="rule.value ?? ''"
            :label="t('Rules.value')"
            :hint="t('Rules.valueHint')"
            @update:model-value="(v: unknown) => setRule(rule, 'value', v)"
          />
          <DInput
            v-if="needsValueTo(rule)"
            :model-value="rule.valueTo ?? ''"
            :label="t('Rules.valueTo')"
            @update:model-value="(v: unknown) => setRule(rule, 'valueTo', v)"
          />
          <div class="rule__actions">
            <DButton size="sm" :disabled="at === 0" :title="t('Rules.up')" @click="moveRule('filterRules', at, at - 1)">
              <DIcon name="arrow_upward" size="sm" />
            </DButton>
            <DButton size="sm" :disabled="at === rulesOf('filterRules').length - 1" :title="t('Rules.down')" @click="moveRule('filterRules', at, at + 1)">
              <DIcon name="arrow_downward" size="sm" />
            </DButton>
            <DButton intent="danger" size="sm" :title="t('Rules.remove')" @click="removeRule('filterRules', at)">
              <DIcon name="delete" size="sm" />
            </DButton>
          </div>
      </div>
      <DButton size="sm" data-add-filter-rule @click="addRule('filterRules')">{{ t('Rules.addFilter') }}</DButton>
    </div>
  </section>
</template>

<style scoped>
.rule {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 0;
  border-bottom: 1px solid var(--color-divider);
}

.rule__actions {
  display: flex;
  gap: 4px;
  justify-content: flex-end;
}

.settings_container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.note {
  margin: 0 0 4px;
  font-size: var(--text-sm);
  color: var(--color-dim);
}
</style>
