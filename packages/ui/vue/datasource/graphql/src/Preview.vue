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
import { onMounted, watch, ref, onBeforeUnmount, shallowRef } from 'vue';
import { useTemporaryStore } from 'org.eclipse.daanse.board.app.ui.vue.composables';
/*
 * GraphiQL is an embedded React IDE with its own monaco stack - megabytes
 * nobody needs at boot. Loaded on demand, the first time a preview mounts;
 * the static imports would put all of it into the module graph of every
 * board start.
 */
const editorStack = () =>
  Promise.all([
    import('react'),
    import('react-dom/client'),
    import('graphiql'),
    import('graphiql/style.css'),
  ]).then(([react, reactDom, graphiql]) => ({
    React: react.default,
    createRoot: reactDom.createRoot,
    GraphiQL: graphiql.GraphiQL,
  }))

const props = defineProps<{ dataSource: any }>();
const data = ref(null as any);


const tempStore = shallowRef(null as any)
const settingsRef = ref(props.dataSource);
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);



watch(props.dataSource, () => {
  update();
}, { deep: true });

watch(tempStore, async () => {
  console.log('tempStore changed', tempStore.value);
  data.value = await tempStore.value.getData('object');
}, { deep: true });


let isMounted = false;
watch(tempStore, async () => {
    if (isMounted) {
        return;
    }

    if (!tempStore.value) {
        return;
    }

    mountGraphiQL();
    isMounted = true;
}, { deep: true });

onMounted(() => {
    isMounted = false;
    if (!tempStore.value) {
        return;
    }

    mountGraphiQL();
    isMounted = true;
});

onBeforeUnmount(() => {
    console.log('GraphQLPreview unmounted');
});

const mountGraphiQL = async () => {
    const { React, createRoot, GraphiQL } = await editorStack();
    const container = document.getElementById('preview');
    const root = createRoot(container!);
    const graphiql = React.createElement(GraphiQL, {
        onTabChange: (tab: any) => {
            console.log('Tab changed', tab);
            props.dataSource.config.query = tab.tabs[0].query;
        },
        fetcher: tempStore.value.fetcher,
        defaultTheme: 'light',
        disableTabs: true,
        defaultQuery: props.dataSource.config?.query || `# Welcome to the GraphiQL editor! \n`,
        storage: null as unknown as Storage,
    });

    root.render(graphiql);
};
</script>
<template>
    <div class="h-full w-full" id="preview"></div>
</template>
