<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<!--
  One tree panel over one tree model: the panel finds its model by
  injection, so each model gets a provider of its own.
-->
<script setup lang="ts">
import { provide } from 'vue'
import { AST_TREE_MODEL, AstTreePanel, type AstTreeModel } from 'org.eclipse.daanse.board.app.ui.vue.common.lsp'

const props = defineProps<{ model: AstTreeModel; ready: boolean }>()
provide(AST_TREE_MODEL, props.model)
</script>

<template>
  <AstTreePanel class="provided-tree" :ready="ready" :modes="[model.mode.value]" :titled="false" />
</template>

<style scoped>
.provided-tree {
  --ast-panel-width: 100%;
  height: 100%;
  border-left: 0;
}
</style>
