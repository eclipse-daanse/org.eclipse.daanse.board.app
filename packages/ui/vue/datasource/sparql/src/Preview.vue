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
import { useTemporaryStore } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import { ref, watch, toRef, shallowRef, toRefs, onMounted } from 'vue'
import Yasr from '@triply/yasr';
import '@triply/yasr/build/yasr.min.css';

const props = defineProps<{ dataSource: any }>();
const data = ref(null as any);
const tempStore = shallowRef(null as any)

watch(props.dataSource, () => {
  console.log('update')
  update();
}, { deep: true });

const yasguiResult = ref(null);
const settingsRef = ref(props.dataSource);
const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);

let yasr:Yasr;
onMounted(() => {
    yasr = new Yasr(yasguiResult.value! as HTMLElement, {
    // Optional: spezifische Plugins definieren (table, rawResponse etc.)
    plugins: {
      table: {},
      response: {},
    },
  });
});
watch(tempStore, async () => {
  console.log('tempStore changed', tempStore.value);
  data.value = await tempStore.value.getData('sparql');
  yasr.setResponse(data.value);
})

</script>

<template class="bg-white">

  <div id="yasr" style="width: 100%; height: 100%;" ref="yasguiResult"></div>

</template>
<style>
#yasr table.dataTable tbody tr.odd {
  background-color: #f6f6f6;
}

</style>
