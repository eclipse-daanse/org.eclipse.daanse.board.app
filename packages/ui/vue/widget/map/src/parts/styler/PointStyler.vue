<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
-->
<script lang="ts" setup>

import { LIcon, LMarker } from '@vue-leaflet/vue-leaflet'
import MapPreviewPoint from './../../parts/MapPreviewPoint.vue'
import { type ModelRef, reactive } from 'vue'

import { Comperator, type ICondition, type IPointAndAreaSettings, type IRenderer } from './../../api/Renderer'
import {IconWidgetSettings,IconWidget}  from 'org.eclipse.daanse.board.app.ui.vue.widget.icon'

const model: ModelRef<IPointAndAreaSettings> = defineModel<IPointAndAreaSettings>({
  default: () => {
    return reactive({

      show_SubElements: false,
      point_render_as: 'icon',
      point_prop: 'name',
      point: {
        currentIcon: '10k',
        iconColor: '#545050',
        iconSize: 48,
        isIconFilled: false,
        strokeWeight: 2,
        opticSize: 24,
        grade: 1
      } /*as IIconSettings*/,
      pointPin: {
        color: '#ccc'
      }
    })
  }
})

const thingsPropOptions = [{
  text: 'id',
  selector: '@iot\\.id'
},
  {
    text: 'name',
    selector: 'name'
  },
  {
    text: 'decription',
    selector: 'description'
  },
  {
    text: 'property',
    selector: 'property'
  },
  {
    text: 'all',
    selector: '*'
  }]

const pointSelectorOptions = [
  { label: 'Icon', value: 'icon' },
  { label: 'Property', value: 'prop' },
  { label: 'Image', value: 'image' },
  { label: 'None', value: 'none' }
]
</script>

<template>

  <div class="flex flex-col md6 pa-3">
    <VaButtonToggle
      v-model="model.point_render_as"
      :options="pointSelectorOptions"
      border-color="primary"
      preset="secondary"
    />
    <template v-if="model.point_render_as=='icon'">
      <IconWidgetSettings v-model="model.point"></IconWidgetSettings>
    </template>
    <template v-if="model.point_render_as=='prop'">
      <VaSelect
        v-model="model.point_prop"
        :options="thingsPropOptions"
        label="DataStream Prop"
        placeholder="Select an option"
        text-by="text"
        value-by="selector"
      />
    </template>
    <template v-if="model.point_render_as=='image'">
      <VaInput
        v-model="model.point_image_url"
        label="Image URL"
        placeholder="https://example.com/image.png"
      />
      <VaInput
        v-model.number="model.point_image_size"
        type="number"
        label="Image Size (px)"
        placeholder="32"
      />
    </template>
    <template v-if="model.point_render_as!='none'">
      <VaDivider class="mb15" />

      <va-color-input
        v-model="model.pointPin.color"
        class="pin-color"
        label="Pin Color"

      />
      <VaCheckbox
        v-model="model.pointPin.solid"
        label="Solid (vollflächig)"
      />
    </template>
  </div>
  <div class="flex flex-col md6 pa-3">
    <MapPreviewPoint ref="MapPrev2" v-bind="model.point">
      <l-marker
        :lat-lng="[50.92828047934907,11.587408017353823]">
        <l-icon class-name="someExtraClass">


          <template v-if="model.point_render_as=='icon'">
            <div :class="['pin', 'icon', { solid: model.pointPin.solid }]">
              <div class="inner">

                <IconWidget :config="model.point" v-model:configv="model.point"></IconWidget>
              </div>
            </div>


          </template>
          <template v-if="model.point_render_as=='prop'">
            <div :class="['pin', 'contain', 'marker', { solid: model.pointPin.solid }]">
              <div class="inner">
                {{ model.point_prop }}
              </div>
            </div>
          </template>
          <template v-if="model.point_render_as=='image'">
            <div class="image-marker" :style="{width: (model.point_image_size || 32) + 'px', height: (model.point_image_size || 32) + 'px'}">
              <img v-if="model.point_image_url" :src="model.point_image_url" :style="{width: '100%', height: '100%', objectFit: 'contain'}" />
              <div v-else class="placeholder">No Image</div>
            </div>
          </template>
        </l-icon>
      </l-marker>

    </MapPreviewPoint>
  </div>
</template>

<style scoped>
.pin {
  width: 45px;
  height: 45px;
  border-radius: 50% 50% 50% 0;

  background: v-bind('model.pointPin.color');
  transform: rotate(-45deg);
  left: 50%;
  top: 50%;
  margin: -15px 71px 0 -15px;
  box-shadow: -4px -6px 8px #00000008;

  &.round {
    border-radius: 50% 50% 50% 50%;
  }

  &.solid {
    .inner {
      background: transparent;
    }
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

  &.marker {
    &::before {

      content: " ";
      width: 20px;
      height: 20px;
      display: block;
      position: absolute;
      background: v-bind('model.pointPin.color');
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

.flex {
  display: flex;
}

.image-marker {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -50%;
  margin-top: -50%;
}

.placeholder {
  background: #ccc;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  border: 1px dashed #999;
}
</style>
