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
import { onMounted, ref, watch, type Ref, computed, toRefs } from 'vue'
import { ImageSettings } from './gen/ImageSettings'
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'

const props = defineProps<{ datasourceId: string, id?: string }>()
const { id: widgetId } = toRefs(props)
const config = defineModel<ImageSettings>('configv', { required: true })

const eventBus = container.get<TinyEmitter>(identifiers.TINY_EMITTER)

const handleClick = (url: string) => {
  if (!widgetId?.value) return;
  eventBus.emit('widget:ImageWidget:click', {
    type: 'widget:ImageWidget:click',
    widgetId: widgetId.value,
    payload: { imageUrl: url, widgetId: widgetId.value, timestamp: Date.now() }
  });
};

const handleRightClick = (url: string) => {
  if (!widgetId?.value) return;
  eventBus.emit('widget:ImageWidget:right_click', {
    type: 'widget:ImageWidget:right_click',
    widgetId: widgetId.value,
    payload: { imageUrl: url, widgetId: widgetId.value, timestamp: Date.now() }
  });
};

const defaultConfig = new ImageSettings();

onMounted(() => {
  if (config.value) {
    Object.assign(config.value, { ...defaultConfig, ...config.value })
  }
})

// Map CSS object-fit values to Tailwind classes
const getObjectFit = computed(() => {
  const fitMap = {
    none: '',
    contain: 'object-contain',
    cover: 'object-cover',
    fill: 'object-fill',
    'scale-down': 'object-scale-down',
  }
  return (
    fitMap[
      (config.value.imagesSettings?.fit?.toLowerCase() as keyof typeof fitMap) ||
        'none'
    ] || ''
  )
})

let interval = null as any
const currentImage: Ref<number> = ref(0)

const toNext = () => {
  if (currentImage.value < config.value.images.length - 1) {
    currentImage.value++
  }
}

const toPrev = () => {
  if (currentImage.value > 0) {
    currentImage.value--
  }
}

const initInterval = () => {
  if (interval) {
    clearInterval(interval)
  }
  if (config.value.imagesSettings.diashowInterval??0 > 0) {
    interval = setInterval(() => {
      if (currentImage.value === config.value.images.length - 1) {
        currentImage.value = 0
        return
      }
      toNext()
    }, config.value.imagesSettings.diashowInterval??1 * 1000)
  }
}

onMounted(() => {
  initInterval()
})

watch(() => config.value.imagesSettings?.diashowInterval, initInterval)

const parsedUrl = (url: string): string => {
  return url
}

watch(
  () => config.value.images?.length,
  (newLength, oldLength) => {
    if (oldLength > newLength) {
      if (currentImage.value >= newLength) {
        currentImage.value = newLength - 1
      }
    }
  },
)

const lastImageIndex = computed(() => {
  return config.value.images?.length > 0 ? config.value.images.length - 1 : 0
})

watch(lastImageIndex, () => {
  currentImage.value = lastImageIndex.value
})
</script>

<template>
  <template v-if="config.images?.length <= 1">
    <img
      class="w-full h-full cursor-pointer"
      :class="getObjectFit"
      :src="parsedUrl(config.images[0]?.url??'')"
      @click="handleClick(config.images[0]?.url??'')"
      @contextmenu.prevent="handleRightClick(config.images[0]?.url??'')"
    />
  </template>
  <template v-else>
    <div class="w-full h-full overflow-hidden relative">
      <div
        class="absolute left-10 top-1/2 w-8 h-8 -translate-y-1/2 z-10 bg-black/60 rounded-full flex flex-row items-center justify-center"
      >
        <va-button
          @click="toPrev()"
          icon="chevron_left"
          preset="plain"
          text-color="#ffffff"
          :disabled="currentImage === 0"
        >
        </va-button>
      </div>
      <div
        class="w-full h-full overflow-visible relative transition-transform duration-300 ease-in-out"
        :style="`transform: translateX(-${100 * currentImage}%)`"
      >
        <div
          v-for="(image, i) in config.images"
          :key="image.id"
          class="w-full h-full absolute"
          :style="`transform: translateX(${100 * i}%)`"
        >
          <img
            class="w-full h-full cursor-pointer"
            :class="getObjectFit"
            :src="parsedUrl(image.url??'')"
            @click="handleClick(image.url??'')"
            @contextmenu.prevent="handleRightClick(image.url??'')"
          />
        </div>
      </div>

      <div
        class="absolute right-10 top-1/2 w-8 h-8 -translate-y-1/2 z-10 bg-black/60 rounded-full flex flex-row items-center justify-center"
      >
        <va-button
          @click="toNext()"
          icon="chevron_right"
          text-color="#ffffff"
          :disabled="currentImage === config.images?.length - 1"
          preset="plain"
        >
        </va-button>
      </div>
    </div>
  </template>
</template>
