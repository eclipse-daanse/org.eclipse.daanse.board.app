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
import { ref, inject, watch } from 'vue';
import { ICodeSettings } from '.';
import type {i18n} from "org.eclipse.daanse.board.app.lib.i18next"
import { MonacoEditor } from 'org.eclipse.daanse.board.app.ui.vue.common.monaco';

// @ts-ignore
import CodeEditor from "simple-code-editor/CodeEditor.vue";

const widgetSettings = defineModel<ICodeSettings>({ required: true });
const opened = ref(false);

const i18n:i18n|undefined = inject('i18n');
const t = (key:string)=>(i18n)?i18n.t(key):key;

const editorType = inject('codeEditorType', 'textarea') as 'simple' | 'textarea' | 'monaco';
const code = ref<string>(widgetSettings.value.code || '');

watch(() => code.value, (newCode: any) => {
    widgetSettings.value.code = newCode;
}, { immediate: true });
</script>

<template>
    <va-collapse v-model="opened" icon="settings" :header="t('textBase:TextWidget.title')">
        <div class="settings_container">
            <template v-if="editorType === 'textarea'">
                <VaTextarea v-model="widgetSettings.code" :minRows="10" />
            </template>
            <template v-else-if="editorType === 'simple'">
                <CodeEditor v-model="code" width="100%" height="500px" font-size="12px" :display-language="false" />
            </template>
            <template v-else-if="editorType === 'monaco'">
                <!-- @vue-ignore -->
                <MonacoEditor v-model="widgetSettings.code" style="height: 500px; width: 100%;" :showToolbar="false" :language="widgetSettings.language" :supportedLanguages="['typescript', 'vue', 'php']" />
            </template>
            <VaSelect label="theme" v-model="widgetSettings.theme" :options="[ 'github-light', 'vitesse-dark', 'catppuccin-mocha', 'min-dark' ]"/>
            <VaSelect label="language" v-model="widgetSettings.language" :options="[ 'typescript', 'vue', 'php' ]"/>
        </div>
    </va-collapse>
</template>

<style scoped>
.settings_container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}
</style>
