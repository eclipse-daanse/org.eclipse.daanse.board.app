<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->
<script lang="ts" setup>


import { type Ref, onMounted, ref, watch, computed } from "vue";
import Yasgui from "@triply/yasgui";
import "@triply/yasgui/build/yasgui.min.css";
import type Tab from "@triply/yasgui/build/ts/src/Tab";
import { ISparqlStoreConfiguration } from 'org.eclipse.daanse.board.app.lib.datasource.sparql'


const { config, connections } = defineProps<{
  config: ISparqlStoreConfiguration;
  dataSources: any;
  connections: any;
}>();


const connectionsFiltered = computed(() => {
  return connections.filter((c: any) => c.type === 'rest');
});


const yasgui = ref(null);
let yasgui2:Yasgui;
let tab:Tab;


onMounted(() => {

  yasgui2 = new Yasgui( yasgui.value! as HTMLElement ,{
    requestConfig: { endpoint: "http://example.com/sparql" },
    copyEndpointOnNewTab: false,
    persistencyExpire:-1,
    autoAddOnInit:false,
    persistenceId:'-1',
    yasqe:{
      showQueryButton:false,
      consumeShareLink:()=> {
        return []
      },
      pluginButtons:()=> {
        return []
      },
      persistencyExpire:1,
      tabMode:'sa'
    },
    yasr: {
      // Leere Plugin-Liste: keine Ergebnisse anzeigen
      plugins: {},
    },
  });
  tab=yasgui2.addTab(
    true, // set as active tab
    { /*...Yasgui.Tab.getDefaults()*/...{}, name: "my new tab" }
  );
  if(config.query){
    tab.setQuery(config.query)
  }
  config.query = tab.getQuery()

  tab.on('change',(ev:any,content:any)=>{
    config.query = content.yasqe.value;
  });
});






</script>

<template>
  <div>
      <VaSelect v-model="config.connection" label="Connection1" :options="connectionsFiltered" text-by="name"
                value-by="uid" ></VaSelect>
    <div style="height: 5px"></div>
    <label aria-hidden="true" class="va-input-label va-input-wrapper__label va-input-wrapper__label--outer .mt-0.5" id="input-label-va-27" style="color: var(--va-primary);">Query <!----></label>
      <div ref="yasgui" id="yasgui"> </div>
  </div>
</template>
<style lang="scss">
.store-item {
  .flex {
    ul {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
  }
}
.pad {
  padding: 15px 0 25px;
}
.yasgui{
  .autocompleteWrapper {
    display: none !important;
  }
  .tabsList,.controlbar,.errorHeader,.tableControls,.yasr_btn.yasr_external_ref_btn {
    display: none;
  }
}
.yasgui .yasr,
.yasgui .yasgui__tabpanel,
.yasgui .yasgui__tabs {
  display: none !important;
}

/* Macht Editor fullscreen */
#yasgui .yasqe {
  height: 100% !important;
}
</style>
