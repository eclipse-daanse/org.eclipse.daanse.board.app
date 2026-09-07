<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script setup lang="ts">
/*
 * What is left of the hand-written form: the gradient stops.
 *
 * Everything else - the value, the range, the colours, the alignment - is
 * rendered from model/ui.xmi now. A stop is a colour and a position that
 * get built up row by row into one CSS gradient, which is a table to edit,
 * not a value to type.
 */
import { inject, ref, watch } from 'vue'
import type { i18n } from 'org.eclipse.daanse.board.app.lib.i18next'
import type { ProgressSettings } from './gen/ProgressSettings'

const i18n: i18n | undefined = inject('i18n')
const t = (key: string) => (i18n ? i18n.t(key) : key)

interface GradientPart {
  color: string;
  location: number;
};

const opened = ref({
  /* The stops open first: it is the only thing left in this half */
  gradientSection: true,
});

const gradientFields = ref<GradientPart[]>([]);
const widgetSettings = defineModel<ProgressSettings>({ required: true });

// const { t } = useI18n();


const addItem = () => {
  return gradientFields.value.push({
    color: "#" + ("000000" + Math.floor(Math.random() * 16777215).toString(16)).slice(-6),
    location: Math.floor(Math.random() * 101),
  });
};

/*
 * The stops are what is edited; the gradient string is what is stored.
 *
 * It is written back into the wrapper rather than replacing it - the widget
 * holds a reference to that object and would not see a new one.
 */
watch(
  [() => widgetSettings.value.fillColor?.value, () => gradientFields.value],
  ([color, fields]) => {
    if (!widgetSettings.value.isGradient) return

    const stops =
      fields.length < 1
        ? `${color} 0%, #FAFAFA 85%`
        : fields.map((stop: GradientPart) => `${stop.color} ${stop.location}%`).join(', ')

    const wrapper = widgetSettings.value.gradientColor
    if (wrapper) wrapper.value = stops
  },
  { deep: true },
)

/*
 * Switching the gradient on gives it two stops to start from - an empty
 * table would leave the bar painted with the fallback above and no way to
 * see where it came from. Switching it off drops them.
 */
watch(
  () => widgetSettings.value.isGradient,
  (on) => {
    if (!on) {
      gradientFields.value = []
      return
    }
    const color = widgetSettings.value.fillColor?.value ?? '#00FF00'
    gradientFields.value.push({ color, location: 0 }, { color: '#FAFAFA', location: 85 })
  },
)

const deleteField = (id: number) => {
  gradientFields.value = gradientFields.value.filter((_, i) => i !== id);
};


</script>

<template>
  <!--
    The gradient stops are their own section, and their own kind of thing:
    a table of colours and positions that is built up row by row, not a
    value to type. Split out so the fields beside this can be rendered from
    the model - the same division the icon widget's symbol picker makes.

    Nothing is shown until the gradient is switched on, which is done in
    the form: there is no such thing as a stop without one.
  -->
  <va-collapse v-model="opened.gradientSection" header="Farbstopps" icon="gradient">
    <div class="settings-container">
      <p v-if="!widgetSettings.isGradient" class="hint">
        Der Farbverlauf ist ausgeschaltet. Er lässt sich unter „Darstellung“ einschalten.
      </p>

      <template v-else>
        <va-button class="add-btn" @click="addItem">
          {{ t("progress:ProgressWidget.addButton") }}
        </va-button>

        <va-data-table
          class="table-config"
          :items="gradientFields"
          :columns="[{ key: 'color' }, { key: 'location' }, { key: 'actions' }]"
        >
          <template #cell(color)="{ rowIndex }">
            <va-color-input class="input-color" v-model="gradientFields[rowIndex].color" />
          </template>
          <template #cell(location)="{ rowIndex }">
            <va-input class="input" v-model="gradientFields[rowIndex].location" />
          </template>
          <template #cell(actions)="{ rowIndex }">
            <va-button icon="delete" color="danger" @click="deleteField(rowIndex)" />
          </template>
        </va-data-table>
      </template>
    </div>
  </va-collapse>
</template>

<style scoped>
.hint {
  margin: 0;
  font-size: 12px;
  color: var(--color-fg-muted, #6b7280);
}

.settings-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
}
.add-btn {
  width: 150px;
}
.input {
  width: 100px;
}

.loading {
  height: 100%;
  padding: 50px;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: var(--app-response-background);
}
</style>
