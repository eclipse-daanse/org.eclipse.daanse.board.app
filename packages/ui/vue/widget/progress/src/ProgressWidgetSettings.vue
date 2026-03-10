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
import type { IProgressSettings } from "./index";
import { inject, onMounted, ref, watch } from 'vue'
import type {i18n} from "org.eclipse.daanse.board.app.lib.i18next"
import { ProgressSettings } from './gen/ProgressSettings'
import { VariableInput } from 'org.eclipse.daanse.board.app.ui.vue.variable.components'

const i18n:i18n|undefined = inject('i18n');
const t = (key:string)=>(i18n)?i18n.t(key):key;

interface GradientPart {
  color: string;
  location: number;
};

const opened = ref({
  widgetSection: false,
  storeSection: false,
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

const onValueChange = (change: (e: any) => void) => (val: any) => {
    change({ target: { value: val } });
};

watch(
  [() => widgetSettings.value.fillColor, () => gradientFields.value],
  ([colorWrapper, fields]) => {
      // Access .value since it is now a VariableWrapper
      // We assume runtime object is wrapper, though type def might be old.
      const color = (colorWrapper as any)?.value || (colorWrapper as any);

      if (widgetSettings.value.isGradient) {
        const grad = fields.length < 1
          ? `${color} 0%, #FAFAFA 85%`
          : fields.map((v: GradientPart) => `${v.color} ${v.location}%`).join(", ");

          if (widgetSettings.value.gradientColor && 'value' in (widgetSettings.value.gradientColor as any)) {
            (widgetSettings.value.gradientColor as any).value = grad;
          } else {
            // Fallback if not initialized as wrapper yet (should not happen if Widget ensures it)
            (widgetSettings.value.gradientColor as any) = grad;
          }
      }
  },
  { deep: true },
);

watch(
    () => widgetSettings.value.isGradient,
    (newValue) => {
        const color = (widgetSettings.value.fillColor as any)?.value || widgetSettings.value.fillColor;
        newValue
            ? gradientFields.value.push(
                { color: `${color}`, location: 0 },
                { color: "#FAFAFA", location: 85 },
            )
            : (gradientFields.value = []);
    },
);

const deleteField = (id: number) => {
  gradientFields.value = gradientFields.value.filter((_, i) => i !== id);
};


</script>

<template>
<va-collapse
        v-model="opened.widgetSection"
        :header="t('progress:ProgressWidget.title')"
        icon="settings"
    >
        <div class="settings-container">
            <VariableInput v-model="widgetSettings.progress" :label="t('progress:ProgressWidget.progress')">
                <template #default="{ value, change }">
                    <va-input
                        :model-value="value"
                        @input="change"
                        :label="t('progress:ProgressWidget.progress')"
                    />
                </template>
            </VariableInput>
            <VariableInput v-model="widgetSettings.min" :label="t('progress:ProgressWidget.min')">
                <template #default="{ value, change }">
                  <va-input
                    :model-value="value"
                    @input="change"
                    type="number"
                    :label="t('progress:ProgressWidget.min')"
                  />
                </template>
            </VariableInput>
            <VariableInput v-model="widgetSettings.max" :label="t('progress:ProgressWidget.max')">
                <template #default="{ value, change }">
                  <va-input
                    :model-value="value"
                    @input="change"
                    type="number"
                    :label="t('progress:ProgressWidget.max')"
                  />
                </template>
            </VariableInput>
            <VariableInput v-model="widgetSettings.fillColor" :label="t('progress:ProgressWidget.fillColor')">
                <template #default="{ value, change }">
                    <va-color-input
                        :model-value="value"
                        @input="change"
                        :label="t('progress:ProgressWidget.fillColor')"
                    />
                </template>
            </VariableInput>
            <VariableInput v-model="widgetSettings.backgroundColor" :label="t('progress:ProgressWidget.backgroundColor')">
                <template #default="{ value, change }">
                    <va-color-input
                        :model-value="value"
                        @input="change"
                        :label="t('progress:ProgressWidget.backgroundColor')"
                    />
                </template>
            </VariableInput>
            <VariableInput v-model="widgetSettings.textColor" :label="t('progress:ProgressWidget.textColor')">
                <template #default="{ value, change }">
                  <va-color-input
                    :model-value="value"
                    @input="change"
                    :label="t('progress:ProgressWidget.textColor')"
                  />
                </template>
            </VariableInput>
            <VariableInput v-model="widgetSettings.barThickness" :label="t('progress:ProgressWidget.barThickness')">
                <template #default="{ value, change }">
                  <va-input
                    :model-value="value"
                    @input="change"
                    :label="t('progress:ProgressWidget.barThickness')"
                    placeholder="z.B. 20px"
                  />
                </template>
            </VariableInput>
            <VariableInput v-model="widgetSettings.borderRadius" :label="t('progress:ProgressWidget.borderRadius')">
                <template #default="{ value, change }">
                  <va-input
                    :model-value="value"
                    @input="change"
                    :label="t('progress:ProgressWidget.borderRadius')"
                    placeholder="z.B. 10px"
                  />
                </template>
            </VariableInput>

          <va-select
            v-model="widgetSettings.valueAlign"
            :label="t('progress:ProgressWidget.valueAlign')"
            :options="[
              { text: 'alignStart', value: 'left' },
              { text: 'alignCenter', value: 'center' },
              { text: 'alignEnd', value: 'right' },
              ]"
            value-by="value"
            text-by="text"
          />
          <va-select
            v-model="widgetSettings.valueJustify"
            :label="t('progress:ProgressWidget.valueAlign')"
            :options="[
              { text: 'alignStart', value: 'top' },
              { text: 'alignCenter', value: 'center' },
              { text: 'alignEnd', value: 'bottom' },
              ]"
            value-by="value"
            text-by="text"

          />
            <va-checkbox
                v-model="widgetSettings.isVertical"
                :label="t('progress:ProgressWidget.isVertical')"
            />
            <va-checkbox
                v-model="widgetSettings.isGradient"
                :label="t('progress:ProgressWidget.isGradient')"
            />
        </div>
        <div class="mt-3" v-if="widgetSettings.isGradient">
            <va-button class="add-btn" @click="addItem">
                {{ t("progress:ProgressWidget.addButton") }}
            </va-button>
            <div>
                <VariableInput v-model="widgetSettings.rotation" :label="t('progress:ProgressWidget.rotation')">
                    <template #default="{ value, change }">
                        <va-input
                            class="mt-2"
                            :model-value="value"
                            @input="change"
                            :label="t('progress:ProgressWidget.rotation')"
                        />
                    </template>
                </VariableInput>
                <va-data-table
                    class="table-config"
                    :items="gradientFields"
                    :columns="[
                        { key: 'color' },
                        { key: 'location' },
                        { key: 'actions' },
                    ]"
                >
                    <template #cell(color)="{ rowIndex }">
                        <va-color-input
                            class="input-color"
                            v-model="gradientFields[rowIndex].color"
                        />
                    </template>
                    <template #cell(location)="{ rowIndex }">
                        <va-input
                            class="input"
                            v-model="gradientFields[rowIndex].location"
                        />
                    </template>
                    <template #cell(actions)="{ rowIndex }">
                        <va-button
                            icon="delete"
                            color="danger"
                            @click="deleteField(rowIndex)"
                        />
                    </template>
                </va-data-table>
            </div>
        </div>
    </va-collapse>
</template>
<style scoped>
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
