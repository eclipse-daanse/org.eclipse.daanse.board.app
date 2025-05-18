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
import { onMounted, ref, watch, type Ref, computed, toRefs, onBeforeUnmount } from 'vue'
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

const props = defineProps<{ datasourceId: string; config: any }>()
const { config } = toRefs(props)

const resizeObserver = new ResizeObserver(entries => {
  for (let entry of entries) {
    if (vantaContainer.value) {
        initVanta()
    }
  }
});

watch(() => config.value, () => {
    if (vantaContainer.value) {
        initVanta()
    }
}, { deep: true })

onMounted(() => {
    resizeObserver.observe(widgetContainer.value!);

    if (vantaContainer.value) {
        initVanta()
    }
})

const initVanta = () => {
    if (vantaEffect.value) {
        vantaEffect.value.destroy()
    }

    let options = {
        el: vantaContainer.value,
        THREE: THREE,
        p5: p5,
    } as any

    switch (config.value.type) {
        case 'CLOUDS':
            if (config.value.backgroundColor) {
                options.backgroundColor = config.value.backgroundColor
            }
            if (config.value.skyColor) {
                options.skyColor = config.value.skyColor
            }
            if (config.value.cloudColor) {
                options.cloudColor = config.value.cloudColor
            }
            if (config.value.cloudShadowColor) {
                options.cloudShadowColor = config.value.cloudShadowColor
            }
            if (config.value.sunColor) {
                options.sunColor = config.value.sunColor
            }
            if (config.value.sunGlareColor) {
                options.sunGlareColor = config.value.sunGlareColor
            }
            if (config.value.sunlightColor) {
                options.sunlightColor = config.value.sunlightColor
            }
            if (config.value.speed) {
                options.speed = config.value.speed
            }

            vantaEffect.value = CLOUDS(options)
            break
        case 'BIRDS':
            if (config.value.quantity) {
                options.quantity = config.value.quantity
            }
            if (config.value.birdSize) {
                options.birdSize = config.value.birdSize
            }
            if (config.value.wingSpan) {
                options.wingSpan = config.value.wingSpan
            }
            if (config.value.speedLimit) {
                options.speedLimit = config.value.speedLimit
            }
            if (config.value.separation) {
                options.separation = config.value.separation
            }
            if (config.value.alignment) {
                options.alignment = config.value.alignment
            }
            if (config.value.color1) {
                options.color1 = config.value.color1
            }
            if (config.value.color2) {
                options.color2 = config.value.color2
            }
            if (config.value.backgroundColor) {
                options.backgroundColor = config.value.backgroundColor
            }

            vantaEffect.value = BIRDS(options)
            break
        case 'NET':
            if (config.value.color) {
                options.color = config.value.color
            }
            if (config.value.backgroundColor) {
                options.backgroundColor = config.value.backgroundColor
            }
            if (config.value.points) {
                options.points = config.value.points
            }
            if (config.value.maxDistance) {
                options.maxDistance = config.value.maxDistance
            }
            if (config.value.spacing) {
                options.spacing = config.value.spacing
            }

            vantaEffect.value = NET(options)
            break
        case 'TRUNK':
            if (config.value.color) {
                options.color = config.value.color
            }

            if (config.value.backgroundColor) {
                options.backgroundColor = config.value.backgroundColor
            }

            if (config.value.chaos) {
                options.chaos = config.value.chaos
            }

            if (config.value.spacing) {
                options.spacing = config.value.spacing
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
}

onBeforeUnmount(() => {
    if (vantaEffect.value) {
      vantaEffect.value.destroy()
    }
})
</script>

<template>
    <div ref="widgetContainer" class="widget-container">
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
