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
import { inject, onMounted, ref, watch, type Ref, computed, toRefs } from 'vue'
import { useEObject, useTranslation, VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { ImageSettings } from './gen/ImageSettings'
import { GallerySettingsImpl } from './gen/GallerySettingsImpl'
import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter'
import { DButton, DIcon } from 'org.eclipse.daanse.board.app.ui.vue.controls'

const props = defineProps<{ datasourceId: string, id?: string }>()
const { t } = useTranslation('image')
const { id: widgetId } = toRefs(props)
const config = defineModel<ImageSettings>('configv', { required: true })

/*
 * The settings, watched rather than read off the model prop.
 *
 * Widget.config is an attribute, not a containment, so the adapter the
 * wrapper holds on the widget never hears a write inside this object - and
 * the wrapper hands this component the same instance on every change, which
 * is not a prop change Vue acts on. A setting changed in the open dialog
 * reached the gallery only once the dialog was reopened (#1203). The reads go
 * through `settings`; the writes still go to `config`.
 */
const settings = useEObject<ImageSettings>(() => config.value)

const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!

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

/*
 * Only what is unset, and never the list.
 *
 * This used to merge toJSON() of a fresh instance over the settings with
 * Object.assign. That writes `images` - and a generated instance has only
 * a getter for a list, so the assignment threw the moment the settings
 * were a generated instance (#1204). The one thing a fresh instance can
 * be missing is the contained gallery object; the model names its
 * defaults (fit "contain", no slideshow), and they are set here because
 * the generator emits no literal for a wrapper reference.
 */
onMounted(() => {
  if (config.value && !config.value.imagesSettings) {
    const gallery = new GallerySettingsImpl()
    gallery.fit = new VariableWrapper('contain')
    gallery.diashowInterval = new VariableWrapper(0)
    config.value.imagesSettings = gallery
  }
})

/*
 * Both are wrappers now, so they are read through .value - the setting is
 * either given in the form or taken from a variable, and the widget sees
 * only the resulting value either way.
 */
const fit = computed(() => settings.value?.imagesSettings?.fit?.value)
const intervalSeconds = computed(() => settings.value?.imagesSettings?.diashowInterval?.value)

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
      (fit.value?.toLowerCase() as keyof typeof fitMap) || 'none'
    ] || ''
  )
})

let interval = null as any
const currentImage: Ref<number> = ref(0)

const toNext = () => {
  if (currentImage.value < (settings.value?.images?.length ?? 0) - 1) {
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
  if ((intervalSeconds.value ?? 0) > 0) {
    interval = setInterval(() => {
      if (currentImage.value === (settings.value?.images?.length ?? 0) - 1) {
        currentImage.value = 0
        return
      }
      toNext()
    }, (intervalSeconds.value ?? 1) * 1000)
  }
}

onMounted(() => {
  initInterval()
})

watch(() => intervalSeconds.value, initInterval)

const parsedUrl = (url: string): string => {
  return url
}

watch(
  () => settings.value?.images?.length,
  (newLength, oldLength) => {
    if (oldLength > newLength) {
      if (currentImage.value >= newLength) {
        currentImage.value = newLength - 1
      }
    }
  },
)

const lastImageIndex = computed(() => {
  const count = settings.value?.images?.length ?? 0
  return count > 0 ? count - 1 : 0
})

watch(lastImageIndex, () => {
  currentImage.value = lastImageIndex.value
})
</script>

<template>
  <template v-if="(settings?.images?.length ?? 0) <= 1">
    <img
      class="w-full h-full cursor-pointer"
      :class="getObjectFit"
      :src="parsedUrl(settings?.images?.[0]?.url??'')"
      @click="handleClick(settings?.images?.[0]?.url??'')"
      @contextmenu.prevent="handleRightClick(settings?.images?.[0]?.url??'')"
    />
  </template>
  <template v-else>
    <div class="slideshow-container">
      <div class="slideshow-nav slideshow-nav--prev">
        <DButton
          intent="quiet"
          class="slideshow-nav__button"
          :title="t('Widget.previous')"
          :disabled="currentImage === 0"
          @click="toPrev()"
        >
          <DIcon name="chevron_left" />
        </DButton>
      </div>
      <div
        class="slideshow-track"
        :style="{ transform: `translateX(-${100 * currentImage}%)` }"
      >
        <div
          v-for="(image, i) in settings?.images"
          :key="image.id"
          class="slideshow-slide"
          :style="{ transform: `translateX(${100 * i}%)` }"
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

      <div class="slideshow-nav slideshow-nav--next">
        <DButton
          intent="quiet"
          class="slideshow-nav__button"
          :title="t('Widget.next')"
          :disabled="currentImage === (settings?.images?.length ?? 0) - 1"
          @click="toNext()"
        >
          <DIcon name="chevron_right" />
        </DButton>
      </div>
    </div>
  </template>
</template>

<style scoped>
.slideshow-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.slideshow-track {
  width: 100%;
  height: 100%;
  overflow: visible;
  position: relative;
  transition: transform 0.3s ease-in-out;
}

.slideshow-slide {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.slideshow-nav {
  position: absolute;
  top: 50%;
  width: 32px;
  height: 32px;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slideshow-nav--prev {
  left: 40px;
}

.slideshow-nav--next {
  right: 40px;
}

/*
 * White on the dark disc the arrow sits on, whatever the theme does - the
 * disc is over the picture, not over the page.
 */
.slideshow-nav__button {
  width: 100%;
  height: 100%;
  min-width: 0;
  padding: 0;
  color: #ffffff;
}

.slideshow-nav__button:hover:not(:disabled) {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.15);
}
</style>
