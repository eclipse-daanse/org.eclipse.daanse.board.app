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
import { computed } from "vue";
import * as icons from "./svg";

const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  primaryColor: {
    type: String,
    default: "#000",
  },
  secondaryColor: {
    type: String,
    default: "#000",
  },
  height: {
    type: [String, Number],
    default: 24,
  },
  width: {
    type: [String, Number],
    default: 24,
  },
});

const icon = computed(() => icons[props.icon as keyof typeof icons]);
const primaryColor = computed(() => props.primaryColor);
const secondaryColor = computed(() => props.secondaryColor);
const containerHeight = computed(() => typeof props.height === "number" ? props.height + "px" : props.height);
const containerWidth = computed(() => typeof props.width === "number" ? props.width + "px" : props.width);
</script>
<template>
  <div class="icon-container" v-if="icon">
    <component :is="icon"></component>
  </div>
  <va-icon v-else :name="props.icon" color="#000" :size="height" />
</template>
<style>
.icon-container {
  height: v-bind(containerHeight);
  width: v-bind(containerWidth);
}

.stPrimary {
  fill: v-bind(primaryColor);
}

.stSecondary {
  fill: v-bind(secondaryColor);
}

.st0 {
  fill: none;
}
</style>
