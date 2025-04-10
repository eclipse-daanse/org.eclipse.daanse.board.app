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
import { computed, toRefs } from "vue";
// import { useDatasourceRepository } from "../composables/datasourceRepository";

const props = defineProps<{ datasourceId: string, config: IRichTextEditorSettings }>();
const { datasourceId, config } = toRefs(props);

// const { data } = useDatasourceRepository(datasourceId, "object");

const parsedEditorText = computed(() => {
    let processedString = config.value.editor;
    if (!processedString) return "";
    return processedString;

    // const regex = /{(.*?)}/g;
    // const parts = processedString.match(regex);

    // if (!parts || !data.value) return processedString;

    // parts.forEach((element: string) => {
    //     const trimmedString = element.replace("{", "").replace("}", "");

    //     if (trimmedString === "") {
    //         processedString = processedString.replace(element, JSON.stringify(data.value, null, 2));
    //     } else {
    //         const dataField = trimmedString.split(".");

    //         const res = dataField.reduce((acc: any, field) => {
    //             return acc ? acc[field] : undefined;
    //         }, data.value);

    //         processedString = processedString.replace(element, res !== undefined ? res : element);
    //     }
    // });

    // return processedString;
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
