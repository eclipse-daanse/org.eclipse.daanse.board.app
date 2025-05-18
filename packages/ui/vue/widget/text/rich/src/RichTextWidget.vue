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
import type { IRichTextEditorSettings } from "./index";
import { computed, toRefs, onMounted, ref, watch } from "vue";
import { useDatasourceRepository } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import helpers from 'org.eclipse.daanse.board.app.lib.utils.helpers'

const props = defineProps<{ datasourceId: string, config: IRichTextEditorSettings }>();
const { datasourceId, config } = toRefs(props);

const data = ref(null as any);
const { update } = useDatasourceRepository(datasourceId, "object", data);

watch(datasourceId, (newVal, oldVal) => {
    update(newVal, oldVal);
})

const parsedEditorText = computed(() => {
    if (!config.value.editor) {
        return "";
    }

    const { parts } = helpers.widget.extractValuesAndFullObject(config.value.editor);
    let result = "";

    for (const part of parts) {
        if (part.path || part.path === null) {
            const value = helpers.widget.getValueByPath(data.value, part.path);
            result += value !== undefined ? JSON.stringify(value) : part.text;
        } else {
            result += part.text;
        }
    }

    return result;
});
</script>

<template>
    <div class="text-container">
        <div class="editor-content pl-6" v-html="parsedEditorText" />
    </div>
</template>

<style>
.text-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 1rem;
    align-items: stretch;
}

.editor-content {
    width: 100%;
    height: 100%;
    overflow-wrap: anywhere;
}

.editor-content h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.editor-content h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
}

.editor-content h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.editor-content h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
}

.editor-content h5 {
    font-size: 1.11rem;
    margin-bottom: 1rem;
}

.editor-content h6 {
    font-size: 0.9rem;
    margin-bottom: 1rem;
}
</style>
