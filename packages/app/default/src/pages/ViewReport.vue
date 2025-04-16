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
import { SampleWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.sample'
</script>

<template>
  <div class="w-full h-full relative overflow-hidden">
    <SampleWidget
      :datasourceId="'test'"
      class="absolute left-[200px] top-[200px] w-[800px] h-[600px] overflow-auto"
    />
  </div>
</template>
