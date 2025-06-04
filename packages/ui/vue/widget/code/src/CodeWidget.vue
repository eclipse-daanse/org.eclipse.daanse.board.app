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
import { codeToHtml } from 'shiki'
import { ref, watch } from 'vue';
import { ICodeSettings } from '.';

const props = defineProps<{ config: ICodeSettings }>();

const htmlString = ref<string>('');

const renderCode = async () => {
    htmlString.value = await codeToHtml(props.config.code || '', {
        theme: props.config.theme || 'github-light',
        lang: props.config.language || 'typescript',
    });
};

watch(() => props.config.code, async () => {
    await renderCode();
}, { immediate: true });

watch(() => props.config.theme, async () => {
    await renderCode();
}, { immediate: true });

watch(() => props.config.language, async () => {
    await renderCode();
}, { immediate: true });
</script>

<template>
    <div v-html="htmlString" class="code_container"></div>
</template>

<style scoped>
.code_container {
    height: 100%;
    width: 100%;
    overflow: hidden;
}

.code_container :deep(.shiki) {
    padding: 1rem;
    height: 100%;
    width: 100%;
    overflow: auto;
}
</style>
