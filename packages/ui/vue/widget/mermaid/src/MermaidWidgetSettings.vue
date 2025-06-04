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
import { IMermaidWidgetSettings } from '.';

const widgetSettings = defineModel<IMermaidWidgetSettings>({ required: true });
</script>

<template>
    <div class="settings_container">
        <VaTextarea v-model="widgetSettings.value" :minRows="10" />
        <VaSelect v-model="widgetSettings.theme" :options="[ 'default', 'neutral', 'dark', 'forest', 'base' ]"/>
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
