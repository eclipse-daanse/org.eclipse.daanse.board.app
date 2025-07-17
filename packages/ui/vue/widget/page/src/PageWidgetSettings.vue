<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script setup lang="ts">

import { inject, onMounted, ref, watch } from 'vue'
import type {i18n} from "org.eclipse.daanse.board.app.lib.i18next"
import { PageI } from './interface/PageI'

const i18n:i18n|undefined = inject('i18n');
const t = (key:string)=>(i18n)?i18n.t(key):key;



const opened = ref({
  widgetSection: false,
  storeSection: false,
});

const widgetSettings = defineModel<PageI>({ required: true });



</script>

<template>
<va-collapse
        v-model="opened.widgetSection"
        :header="t('progress:ProgressWidget.title')"
        icon="settings"
    >
        <div class="settings-container">
            <va-input
                v-model="widgetSettings.path"
                :label="t('page:pageWidget.path')"
            />
        </div>
    </va-collapse>
</template>

<style scoped>
.settings-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 1rem;
}
.add-btn {
  width: 150px;
}
.input {
  width: 100px;
}

.loading {
  height: 100%;
  padding: 50px;
  border-radius: 4px;
  margin-bottom: 1rem;
  background-color: var(--app-response-background);
}
</style>
