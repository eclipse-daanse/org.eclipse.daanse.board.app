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
import { onMounted, ref } from 'vue';
import { IMarkdownWidgetSettings } from '.';
import EasyMDE from 'easymde';
import "easymde/dist/easymde.min.css";
import { MarkdownWidgetSettings } from './gen/MarkdownWidgetSettings'

const widgetSettings = defineModel<MarkdownWidgetSettings>({ required: true });
const container = ref<HTMLTextAreaElement | null>(null);

onMounted(() => {
    const simpleMDE = new EasyMDE({
        element: container.value as HTMLTextAreaElement,
    })

    simpleMDE.codemirror.on('change', () => {
        widgetSettings.value.value = simpleMDE.value();
    });
})
</script>

<template>
    <div class="settings_container">
        <textarea ref="container"></textarea>
    </div>
</template>
<style scoped>
.settings_container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.5rem;
}
</style>
