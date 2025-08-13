<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<template>
    <td>
        <template v-if="trendVisualType === 'Chart'">
            <span>
                {{ trendValue > 0.5 ? '📈' : '📉' }}
            </span>
        </template>
        <template v-else-if="trendVisualType === 'Emoji'">
            <span>
                {{ trendValue > 0.5 ? '😊' : '☹️' }}
            </span>
        </template>
        <template v-else-if="trendVisualType === 'Arrow'">
            <span>
                {{ trendValue > 0.5 ? '⬆️' : '⬇️' }}
            </span>
        </template>
        <template v-else>
            <VaBadge :color="trendValue > 0.5 ? 'success' : 'danger'" :text="trendValue"></VaBadge>
        </template>
    </td>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'

const props = defineProps<{
    trend: any
}>()

const trendValue = computed(() => {
    if (props.trend == null) return null
    return typeof props.trend === 'string' ? parseInt(props.trend) : props.trend
})

const trendVisualType = inject('trendVisualType', 'badge') as 'Badge' | 'Chart' | 'Emoji' | 'Arrow'
</script>
