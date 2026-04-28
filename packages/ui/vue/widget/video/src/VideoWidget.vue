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

import { computed, onMounted, onUnmounted, ref } from "vue";
import { useRoute } from "vue-router";
import { VideoSettings } from './gen/VideoSettings'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'
// import { useDatasourceRepository } from "../composables/datasourceRepository";

const props = defineProps<{ datasourceId: string; id?: string }>();
import { toRefs } from 'vue';
const { id: widgetId } = toRefs(props);
const config = defineModel<VideoSettings>('configv', { required: true });

import { container as coreContainer, identifiers } from 'org.eclipse.daanse.board.app.lib.core';
import type { TinyEmitter } from 'tiny-emitter';
import { EventActionsRegistry, EVENT_ACTIONS_REGISTRY } from 'org.eclipse.daanse.board.app.lib.events';
import { VideoWidgetInterface } from './api/VideoWidgetInterface';

const eventBus = coreContainer.get<TinyEmitter>(identifiers.TINY_EMITTER);
const actionsRegistry = coreContainer.get<EventActionsRegistry>(EVENT_ACTIONS_REGISTRY);

const route = useRoute();
const pageId = (route.params.pageid as string) || '';

const videoElement = ref<HTMLVideoElement | null>(null);

class VideoWidgetApi extends VideoWidgetInterface {
    play(): void {
        if (videoElement.value) {
            videoElement.value.play();
        }
    }

    pause(): void {
        if (videoElement.value) {
            videoElement.value.pause();
        }
    }

    stop(): void {
        if (videoElement.value) {
            videoElement.value.pause();
            videoElement.value.currentTime = 0;
        }
    }

    seek(time: number): void {
        if (videoElement.value) {
            videoElement.value.currentTime = time;
        }
    }

    mute(): void {
        if (videoElement.value) {
            videoElement.value.muted = true;
        }
    }

    unmute(): void {
        if (videoElement.value) {
            videoElement.value.muted = false;
        }
    }

    setVolume(volume: number): void {
        if (videoElement.value) {
            videoElement.value.volume = Math.max(0, Math.min(1, volume));
        }
    }
}

const api = new VideoWidgetApi();
defineExpose<VideoWidgetInterface>(api);

const emitClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:VideoWidget:click', {
        type: 'widget:VideoWidget:click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitRightClick = () => {
    if (!widgetId?.value) return;
    eventBus.emit('widget:VideoWidget:right_click', {
        type: 'widget:VideoWidget:right_click',
        widgetId: widgetId.value,
        payload: { widgetId: widgetId.value, timestamp: Date.now() }
    });
};

const emitVideoEvent = (eventType: string, event: Event) => {
    if (!widgetId?.value) return;
    let payloadData: any = { widgetId: widgetId.value, timestamp: Date.now() };

    if (eventType === 'timeupdate') {
        const target = event.target as HTMLVideoElement;
        payloadData.currentTime = target.currentTime;
        payloadData.duration = target.duration;
    } else if (eventType === 'error') {
        const target = event.target as HTMLVideoElement;
        payloadData.error = target.error?.message || target.error?.code || 'Unknown Error';
    }

    eventBus.emit(`widget:VideoWidget:${eventType}`, {
        type: `widget:VideoWidget:${eventType}`,
        widgetId: widgetId.value,
        payload: payloadData
    });
};

console.log(config);

// const { data } = useDatasourceRepository(datasourceId, "object");

const defaultConfig = {
    videoUrl: "",
    videoFitSettings: {
        fit: "cover"
    }
};

onMounted(() => {
    if (widgetId?.value) {
        actionsRegistry.registerInstance(widgetId.value, api, 'VideoWidget', pageId);
    }

    if (!config.value) {
        config.value = new VideoSettings();
    }

    // Handle Video URL Wrapper
    const currentUrl = config.value.videoUrl;
    if (currentUrl === undefined || currentUrl === null) {
        (config.value as any).videoUrl = new VariableWrapper(defaultConfig.videoUrl);
    } else if ((currentUrl as any) instanceof VariableWrapper) {
        // Already correct instance
    } else if (typeof currentUrl === 'object' && 'value' in (currentUrl as any)) {
        const v = new VariableWrapper((currentUrl as any).value);
        if ('variable' in (currentUrl as any)) v.variable = (currentUrl as any).variable;
        (config.value as any).videoUrl = v;
    } else {
        (config.value as any).videoUrl = new VariableWrapper(currentUrl);
    }

    if (config.value && !config.value.videoFitSettings) {
        config.value.videoFitSettings = defaultConfig.videoFitSettings;
    }
});

onUnmounted(() => {
    if (widgetId?.value) {
        actionsRegistry.unregisterInstance(widgetId.value);
    }
});

const videoFit = computed(() => {
    return config.value.videoFitSettings?.fit;
});

const videoUrlParced = computed(() => {
    // Access .value and cast to any because TS thinks it is string
    let processedString = (config.value.videoUrl as any)?.value;
    return processedString;
});
</script>

<template>
    <div class="container" @click="emitClick" @contextmenu.prevent="emitRightClick">
        <video controls :src="videoUrlParced" ref="videoElement"
            @play="emitVideoEvent('play', $event)"
            @pause="emitVideoEvent('pause', $event)"
            @timeupdate="emitVideoEvent('timeupdate', $event)"
            @ended="emitVideoEvent('ended', $event)"
            @error="emitVideoEvent('error', $event)">
            Your browser does not support embedded videos.
        </video>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container video {
    width: 100%;
    height: 100%;
    border-radius: 3px;
    object-fit: v-bind(videoFit);
}
</style>
