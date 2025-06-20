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
import { nextTick, onMounted, ref, watch } from 'vue';
import { IMarkdownWidgetSettings } from '.';
import "easymde/dist/easymde.min.css";
import "github-markdown-css/github-markdown.css";

// @ts-ignore
import EasyMDE from 'easymde';

const props = defineProps<{ config: IMarkdownWidgetSettings }>();

const container = ref<HTMLDivElement | null>(null);
let easyMDE: EasyMDE | null = null;

onMounted(() => {
    easyMDE = new EasyMDE({
        toolbar: false,
        element: container.value as HTMLDivElement,
        status: false,
        previewClass: 'markdown-body',
    })

    easyMDE.value(props.config.value || '');

    // @ts-ignore
    easyMDE.togglePreview();
})

watch(() => props.config.value, (newValue) => {
    if (container.value) {
        easyMDE?.value(newValue || '');
    }
}, { immediate: true });
</script>

<template>
    <textarea ref="container">
        {{ props.config.value }}
    </textarea>
</template>

<style scoped>
:global(.CodeMirror) {
    height: 100% !important;
    width: 100%;
}

:global(.EasyMDEContainer) {
    height: 100%;
    width: 100%;
}
</style>
