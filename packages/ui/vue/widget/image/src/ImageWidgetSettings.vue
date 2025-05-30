<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts" setup>

import { v4 } from 'uuid'
import { inject, ref } from 'vue'
import type { IImageSettings } from './index'
import type {i18n} from "org.eclipse.daanse.board.app.lib.i18next"


const i118n:i18n|undefined = inject('i18n');

const opened = ref({
  widgetSection: false,
  storeSection: false,
})

const widgetSettings = defineModel<IImageSettings>({ required: true })

const addNew = () => {
  if (!widgetSettings.value.images) {
    widgetSettings.value.images = []
  }
  const newImage = {
    id: v4(),
    url: 'Test',
  }
  widgetSettings.value.images?.splice(
    widgetSettings.value.images.length,
    0,
    newImage,
  )
}
</script>

<template>
  <va-collapse v-model="opened.widgetSection" icon="settings" header="Image widget settings">
    <div class="settings-container">
      <va-button @click="addNew">
        {{ i118n?.t('image:ImageWidget.addButton') }}
      </va-button>
      <div class="image-list-container">
        <div
          v-for="(image, index) in widgetSettings.images"
          :key="image.id"
          class="image-settings-container"
        >
          <va-input
            v-model="image.url"
            :label="i118n?.t('image:ImageWidget.imageUrl')"
            class="image-settings-remove-input"
          />
          <va-button
            @click="() => widgetSettings.images.splice(index, 1)"
            icon="clear"
            class="image-settings-remove-button"
          />
          <!-- {{ image.url }} -->
        </div>
      </div>
      <va-select
        v-model="widgetSettings.imagesSettings.fit"
        :label="i118n?.t('image:ImageWidget.imageFit')"
        :options="['none', 'contain', 'cover', 'fill', 'scale-down']"
        teleport=".settings-container"
      >
      </va-select>
      <va-input
        v-model="widgetSettings.imagesSettings.diashowInterval"
        :label="i118n?.t('image:ImageWidget.imageDiashowInterval')"
      >
      </va-input>
    </div>
  </va-collapse>
</template>
<style scoped>
.image-settings-container {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 1rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
}

.image-settings-remove-button {
  margin-bottom: 0.25rem;
}

.image-settings-remove-input {
  flex-grow: 1;
}

.settings-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.image-list-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 500px;
  overflow: auto;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.loading {
  height: 100%;
  padding: 50px;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: var(--app-response-background);
}
</style>
