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
import type { CodeSettings } from './gen/CodeSettings';
import { MonacoEditor } from 'org.eclipse.daanse.board.app.ui.vue.common.monaco';

// @ts-ignore
import CodeEditor from "simple-code-editor/CodeEditor.vue";
import {
  DInput,
} from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const widgetSettings = defineModel<CodeSettings>({ required: true });

const { t } = useTranslation('code');

const editorType = inject('codeEditorType', 'textarea') as 'simple' | 'textarea' | 'monaco';
const code = ref<string>(widgetSettings.value.code || '');

watch(() => code.value, (newCode: any) => {
    widgetSettings.value.code = newCode;
}, { immediate: true });
</script>

<template>
  <!--
    What is left of the hand-written form: writing the code.

    Which editor does the writing is decided at runtime - a plain text area,
    a small highlighting one, or Monaco - so a form cannot offer it. The
    language and the theme are rendered from model/ui.xmi beside this.
  -->
  <section class="settings-section" data-section-id="source" :data-section="t('Settings.source')">
    <div class="settings_container">
      <template v-if="editorType === 'textarea'">
        <DInput v-model="widgetSettings.code" :rows="10" />
      </template>
      <template v-else-if="editorType === 'simple'">
        <CodeEditor v-model="code" width="100%" height="500px" font-size="12px" :display-language="false" />
      </template>
      <template v-else-if="editorType === 'monaco'">
        <!-- @vue-ignore -->
        <MonacoEditor
          v-model="widgetSettings.code"
          style="height: 500px; width: 100%;"
          :showToolbar="false"
          :language="widgetSettings.language"
          :supportedLanguages="['typescript', 'vue', 'php']"
        />
      </template>
    </div>
  </section>
</template>

<style scoped>
.settings_container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}
</style>
