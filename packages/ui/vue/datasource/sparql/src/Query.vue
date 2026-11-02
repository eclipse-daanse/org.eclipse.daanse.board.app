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
  The query, and what it answers.

  Yasgui whole: the editor above, the result below. The two used to sit
  in different places - YASQE in the settings form, YASR in the preview -
  so writing a query and seeing what it returns were two visits to two
  screens (#1178).

  The query one writes here is the source's query. It is reported upward
  as a change to the configuration, the same as any field, so the Save
  above decides whether it is kept.
-->

<script setup lang="ts">
import { inject, onBeforeUnmount, onMounted, ref } from 'vue'
import Yasgui from '@triply/yasgui'
import '@triply/yasgui/build/yasgui.min.css'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import {
  identifier as CONNECTION_REPOSITORY,
  type ConnectionRepository,
} from 'org.eclipse.daanse.board.app.lib.api.connection'
import './yasgui-theme.css'

const props = defineProps<{ dataSource: any }>()
const emit = defineEmits<{ updateConfig: [config: any] }>()

const { t } = useTranslation('datasourceSparql')
const connections = inject<ConnectionRepository>(CONNECTION_REPOSITORY)!

const host = ref<HTMLElement | undefined>()
let yasgui: Yasgui | undefined

/**
 * The endpoint the query runs against.
 *
 * The source reads through a rest connection, and that connection's url
 * is the endpoint - the same address the catalogue asks. Yasgui sends
 * the query itself, which is what makes this an editor rather than a
 * text box, so it has to be told where.
 *
 * Through the repository by uid, the way the catalogue resolves it: the
 * configuration holds the uid, not the connection.
 */
function endpoint(): string {
  const uid = props.dataSource?.config?.connection
  if (!uid) return ''
  try {
    const live = connections.getConnection(uid) as any
    return (live?.url as string | undefined) ?? ''
  } catch {
    return ''
  }
}

onMounted(() => {
  if (!host.value) return

  yasgui = new Yasgui(host.value, {
    requestConfig: { endpoint: endpoint() },
    copyEndpointOnNewTab: false,
    /* One query belongs to one source, so there is one tab and no
      memory of other people's: persistence here would carry a query
      from one source into the next. */
    persistencyExpire: -1,
    autoAddOnInit: false,
    persistenceId: '-1',
    yasqe: {
      consumeShareLink: () => [],
      pluginButtons: () => [],
      persistencyExpire: 1,
      tabMode: 'sa',
    },
  })

  const tab = yasgui.addTab(true, { name: t('Query.tab') })
  if (props.dataSource?.config?.query) tab.setQuery(props.dataSource.config.query)

  tab.on('change', (_event: unknown, content: any) => {
    emit('updateConfig', { ...props.dataSource.config, query: content.yasqe.value })
  })
})

onBeforeUnmount(() => {
  yasgui = undefined
})
</script>

<template>
  <div class="query">
    <div ref="host" class="query__yasgui"></div>
  </div>
</template>

<style scoped>
/*
 * Yasgui's own furniture, switched off.
 *
 * A tab strip with a plus on it, and a field for the endpoint: both
 * offer to make this editor about something other than this source. The
 * query belongs to one source and runs against the connection that
 * source reads through, and saying so twice invites them to disagree.
 */
.query :deep(.tabsList),
.query :deep(.yasgui .autocompleteWrapper),
.query :deep(.yasgui .controlbar) {
  display: none !important;
}

.query {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 0;
}

/*
 * Yasgui sizes itself to its host, and its result half scrolls. Giving
 * the host the whole view is what puts the editor above the answer
 * rather than both in a strip.
 */
.query__yasgui {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
}
</style>
