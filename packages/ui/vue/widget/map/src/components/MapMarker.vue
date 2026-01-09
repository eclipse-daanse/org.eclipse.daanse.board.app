<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>
import { IconWidget } from 'org.eclipse.daanse.board.app.ui.vue.widget.icon'
import { IconSettings } from '../gen/IconSettings'

interface MapMarkerProps {
  renderAs: 'icon' | 'prop' | 'image' | 'none'
  backgroundColor?: string
  iconConfig?: IconSettings
  propertyValue?: string | number
  imageUrl?: string
  imageSize?: number
  isRound?: boolean
  isSelected?: boolean
  selectionColor?: string
}

const props = withDefaults(defineProps<MapMarkerProps>(), {
  isRound: false,
  imageSize: 32,
  isSelected: false,
  selectionColor: '#ff0000'
})
</script>

<template>
  <template v-if="renderAs === 'icon'">
    <div
      :style="{
        background: isSelected ? selectionColor : backgroundColor
      }"
      :class="['pin', 'icon', { round: isRound }]"
    >
      <div class="inner">
        <IconWidget
          v-if="iconConfig"
          :configv="iconConfig"
        />
      </div>
      <slot name="observation" />
    </div>
  </template>

  <template v-if="renderAs === 'prop'">
    <div
      :style="{
        background: isSelected ? selectionColor : backgroundColor
      }"
      :class="['pin', 'contain', 'marker', { round: isRound }]"
    >
      <div class="inner">
        {{ propertyValue }}
      </div>
      <slot name="observation" />
    </div>
  </template>

  <template v-if="renderAs === 'image'">
    <div
      class="image-marker"
      :style="{
        width: `${imageSize}px`,
        height: `${imageSize}px`,
        background: isSelected ? selectionColor : undefined,
        borderRadius: isSelected ? '50%' : undefined,
        padding: isSelected ? '4px' : undefined
      }"
    >
      <img
        v-if="imageUrl"
        :src="imageUrl"
        :style="{ width: '100%', height: '100%', objectFit: 'contain' }"
      />
    </div>
    <slot name="observation" />
  </template>

  <template v-if="renderAs === 'none'">
    <slot name="observation" />
  </template>
</template>

<style scoped>
.pin {
  width: 45px;
  height: 45px;
  border-radius: 50% 50% 50% 0;
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -15px 71px 0 -15px;
  box-shadow: -4px -6px 8px #0000005c;

  &.round {
    border-radius: 50% 50% 50% 50%;
  }

  &.contain {
    width: auto;
    height: auto;
    border-radius: 25%;
    display: inline-block;
    transform: rotate(0deg);
    padding: 4px;
    margin: 0px;

    .inner {
      width: auto;
      height: auto;
      margin: 0;
      position: relative;
      transform: rotate(0deg);
      border-radius: 17%;
      display: inline-block;
      font-size: 13px;
      padding: 3px;
    }
  }

  .datapoint {
    transform: rotate(45deg);
    position: absolute;
    top: 50px;
    left: 0;
    margin: 0;
  }

  &.marker {
    &::before {
      content: " ";
      width: 20px;
      height: 20px;
      display: block;
      position: absolute;
      transform: rotate(-45deg);
      border-radius: 50% 50% 50% 0;
      top: 14px;
      left: 5px;
      z-index: -24;
    }
  }

  .inner {
    padding: 5px 0 0 0;
    width: 37px;
    height: 37px;
    margin: 3px 0 0 4px;
    background: #fff;
    position: absolute;
    transform: rotate(45deg);
    border-radius: 50%;
  }
}

.image-marker {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -50%;
  margin-top: -50%;
}
</style>
