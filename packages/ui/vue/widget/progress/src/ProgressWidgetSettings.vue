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
import { ref, watch } from "vue";
// import { useI18n } from "vue-i18n";

interface GradientPart {
  color: string;
  location: number;
};

const opened = ref({
  widgetSection: false,
  storeSection: false,
});

const gradientFields = ref<GradientPart[]>([]);
const widgetSettings = defineModel<IProgressSettings>({ required: true });

// const { t } = useI18n();
const t = (key:string) => key;

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

watch(
    () => widgetSettings.value.progress,
    (newValue) => {
        const progressValue = parseFloat(String(newValue));
        if (progressValue > 100) {
            widgetSettings.value.progress = "100";
        } else if (progressValue < 0) {
            widgetSettings.value.progress = "0";
        } else {
            widgetSettings.value.progress = newValue;
        }
    }
);
</script>

<template>
<va-collapse
        v-model="opened.widgetSection"
        :header="t('ProgressWidget.title')"
    >
        <div class="settings-container">
            <va-input
                v-model="widgetSettings.progress"
                :label="t('ProgressWidget.progress')"
            />
            <va-color-input
                v-model="widgetSettings.fillColor"
                :label="t('ProgressWidget.fillColor')"
            />
            <va-color-input
                v-model="widgetSettings.backgroundColor"
                :label="t('ProgressWidget.backgroundColor')"
            />
            <va-checkbox
                v-model="widgetSettings.isVertical"
                :label="t('ProgressWidget.isVertical')"
            />
            <va-checkbox
                v-model="widgetSettings.isGradient"
                :label="t('ProgressWidget.isGradient')"
            />
        </div>
        <div class="mt-3" v-if="widgetSettings.isGradient">
            <va-button class="add-btn" @click="addItem">
                {{ t("ProgressWidget.addButton") }}
            </va-button>
            <div>
                <va-input
                    class="mt-2"
                    v-model="widgetSettings.rotation"
                    :label="t('ProgressWidget.rotation')"
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
