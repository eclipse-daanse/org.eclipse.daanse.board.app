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
import { inject, onMounted, ref, watch, type Ref, computed, toRefs, onBeforeUnmount, nextTick } from 'vue'
// @ts-ignore
import * as THREE from 'three'
// @ts-ignore
import CLOUDS from 'vanta/dist/vanta.clouds.min'
// @ts-ignore
import BIRDS from 'vanta/dist/vanta.birds.min'
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min'
// @ts-ignore
import TRUNK from 'vanta/dist/vanta.trunk.min'
// @ts-ignore
import p5 from 'p5'



const vantaContainer: Ref<HTMLElement | null> = ref(null)
const widgetContainer: Ref<HTMLElement | null> = ref(null)
const vantaEffect: Ref<any> = ref(null)

const props = defineProps<{ datasourceId: string; config: any; id?: string }>()
const { config, id: widgetId } = toRefs(props)

import { useEObject } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { VantaSettings } from './gen/VantaSettings'

/*
 * The settings, watched rather than read off the prop.
 *
 * Widget.config is an attribute, not a containment, so the adapter the
 * wrapper holds on the widget never hears a write inside this object - and
 * the wrapper hands this component the same instance on every change, which
 * is not a prop change Vue acts on. A setting changed in the open dialog
 * reached the background only once the dialog was reopened (#1203). The reads go
 * through `settings`; the writes still go to `config`.
 */
const settings = useEObject<VantaSettings>(() => config.value)

import { identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { TinyEmitter } from 'tiny-emitter';
const eventBus = inject<TinyEmitter>(identifiers.TINY_EMITTER)!;

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:VantaWidget:click', {
        type: 'widget:VantaWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:VantaWidget:right_click', {
        type: 'widget:VantaWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    if (vantaContainer.value) {
        initVanta()
    }
  }
});

/*
 * Started afresh on every change to the settings. The watched ref is
 * triggered by the adapter on the settings instance, which a deep watch
 * on the plain prop never was - the object is not reactive, so there was
 * nothing in it to track.
 */
watch(settings, async () => {
    if (vantaContainer.value) {
        if (vantaEffect.value) {
            vantaEffect.value.destroy()
            vantaEffect.value = null
        }
        await nextTick()
        initVanta()
    }
})

onMounted(() => {
    resizeObserver.observe(widgetContainer.value!);

    if (vantaContainer.value) {
        initVanta()
    }
})

const initVanta = () => {
    if (vantaEffect.value) {
        vantaEffect.value.destroy()
        vantaEffect.value = null
    }

    if (!vantaContainer.value) return

    let options = {
        el: vantaContainer.value,
        THREE: THREE,
    } as any

    try {
      switch (settings.value?.type) {
        case 'CLOUDS':
            if (settings.value?.backgroundColor) {
                options.backgroundColor = settings.value?.backgroundColor
            }
            if (settings.value?.skyColor) {
                options.skyColor = settings.value?.skyColor
            }
            if (settings.value?.cloudColor) {
                options.cloudColor = settings.value?.cloudColor
            }
            if (settings.value?.cloudShadowColor) {
                options.cloudShadowColor = settings.value?.cloudShadowColor
            }
            if (settings.value?.sunColor) {
                options.sunColor = settings.value?.sunColor
            }
            if (settings.value?.sunGlareColor) {
                options.sunGlareColor = settings.value?.sunGlareColor
            }
            if (settings.value?.sunlightColor) {
                options.sunlightColor = settings.value?.sunlightColor
            }
            if (settings.value?.speed) {
                options.speed = settings.value?.speed
            }

            vantaEffect.value = CLOUDS(options)
            break
        case 'BIRDS':
            options.p5 = p5
            if (settings.value?.quantity) {
                options.quantity = settings.value?.quantity
            }
            if (settings.value?.birdSize) {
                options.birdSize = settings.value?.birdSize
            }
            if (settings.value?.wingSpan) {
                options.wingSpan = settings.value?.wingSpan
            }
            if (settings.value?.speedLimit) {
                options.speedLimit = settings.value?.speedLimit
            }
            if (settings.value?.separation) {
                options.separation = settings.value?.separation
            }
            if (settings.value?.alignment) {
                options.alignment = settings.value?.alignment
            }
            /* The form has offered this all along and nothing passed it on */
            if (settings.value?.cohesion) {
                options.cohesion = settings.value?.cohesion
            }
            if (settings.value?.color1) {
                options.color1 = settings.value?.color1
            }
            if (settings.value?.color2) {
                options.color2 = settings.value?.color2
            }
            if (settings.value?.backgroundColor) {
                options.backgroundColor = settings.value?.backgroundColor
            }

            vantaEffect.value = BIRDS(options)
            break
        case 'NET':
            if (settings.value?.color) {
                options.color = settings.value?.color
            }
            if (settings.value?.backgroundColor) {
                options.backgroundColor = settings.value?.backgroundColor
            }
            if (settings.value?.points) {
                options.points = settings.value?.points
            }
            if (settings.value?.maxDistance) {
                options.maxDistance = settings.value?.maxDistance
            }
            if (settings.value?.spacing) {
                options.spacing = settings.value?.spacing
            }

            vantaEffect.value = NET(options)
            break
        case 'TRUNK':
            options.p5 = p5
            if (settings.value?.color) {
                options.color = settings.value?.color
            }

            if (settings.value?.backgroundColor) {
                options.backgroundColor = settings.value?.backgroundColor
            }

            if (settings.value?.chaos) {
                options.chaos = settings.value?.chaos
            }

            if (settings.value?.spacing) {
                options.spacing = settings.value?.spacing
            }

            vantaEffect.value = TRUNK(options)
            break
        default:
            vantaEffect.value = CLOUDS({
                el: vantaContainer.value,
                THREE: THREE,
            })
            break
      }
    } catch (e) {
      console.warn('[VantaWidget] Failed to init effect:', settings.value?.type, e)
      // Fallback to CLOUDS on error
      try {
        vantaEffect.value = CLOUDS({
          el: vantaContainer.value,
          THREE: THREE,
        })
      } catch (e2) {
        console.error('[VantaWidget] Fallback also failed:', e2)
      }
    }
}

onBeforeUnmount(() => {
    if (vantaEffect.value) {
      vantaEffect.value.destroy()
    }
})
</script>

<template>
    <div ref="widgetContainer" class="widget-container" @click="emitClick" @contextmenu.prevent="emitRightClick">
        <div ref="vantaContainer" class="vanta-container"></div>
    </div>
</template>

<style scoped lang="scss">
.vanta-container {
    width: 100%;
    height: 100%;
}

.widget-container {
    width: 100%;
    height: 100%;
    position: absolute;
}
</style>
