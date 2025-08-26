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

watch(
  [() => widgetSettings.value.fillColor, () => gradientFields.value],
  ([color, fields]) => {
      if (widgetSettings.value.isGradient) {
        fields.length < 1
          ? widgetSettings.value.gradientColor = `${color} 0%, #FAFAFA 85%`
          : widgetSettings.value.gradientColor = fields.map((v: GradientPart) => `${v.color} ${v.location}%`).join(", ")
      }
  },
  { deep: true },
);

watch(
    () => widgetSettings.value.isGradient,
    (newValue) => {
        newValue
            ? gradientFields.value.push(
                { color: `${widgetSettings.value.fillColor}`, location: 0 },
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
            <va-input
                v-model="widgetSettings.progress"
                :label="t('progress:ProgressWidget.progress')"
            />
          <va-input
            v-model="widgetSettings.min"
            type="number"
            :label="t('progress:ProgressWidget.min')"
          />
          <va-input
            v-model="widgetSettings.max"
            type="number"
            :label="t('progress:ProgressWidget.max')"
          />
            <va-color-input
                v-model="widgetSettings.fillColor"
                :label="t('progress:ProgressWidget.fillColor')"
            />
            <va-color-input
                v-model="widgetSettings.backgroundColor"
                :label="t('progress:ProgressWidget.backgroundColor')"
            />
          <va-color-input
            v-model="widgetSettings.textColor"
            :label="t('progress:ProgressWidget.textColor')"
          />
          <va-input
            v-model="widgetSettings.barThickness"
            :label="t('progress:ProgressWidget.barThickness')"
            placeholder="z.B. 20px"
          />
          <va-input
            v-model="widgetSettings.borderRadius"
            :label="t('progress:ProgressWidget.borderRadius')"
            placeholder="z.B. 10px"
          />
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
                <va-input
                    class="mt-2"
                    v-model="widgetSettings.rotation"
                    :label="t('progress:ProgressWidget.rotation')"
                />
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
