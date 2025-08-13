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
        <template v-if="statusVisualType === 'Lights'">
            <span>
                {{ statusValue > 0.5 ? '🟢' : '🛑' }}
            </span>
        </template>
        <template v-else-if="statusVisualType === 'Emoji'">
            <span>
                {{ statusValue > 0.5 ? '😊' : '☹️' }}
            </span>
        </template>
        <template v-else>
            <VaBadge :color="statusValue > 0.5 ? 'success' : 'danger'" :text="statusValue"></VaBadge>
        </template>
    </td>
</template>

<script lang="ts" setup>
import { computed, inject } from 'vue'

const props = defineProps<{
    status: any
}>()

const statusValue = computed(() => {
    if (props.status == null) return null
    return typeof props.status === 'string' ? parseInt(props.status) : props.status
})

const statusVisualType = inject('statusVisualType', 'badge') as 'Badge' | 'Lights' | 'Emoji'
</script>
