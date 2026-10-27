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
/*
 * The settings of an XMLA connection - and the form a new one is created
 * with (see `Create` in its registration). The catalogue and the cube are
 * typed fields that offer what the server lists, not choices restricted to
 * it: a name typed at creation, or any name before the list has arrived or
 * while the server cannot be reached, has to stay what it is.
 */
import { computed, watch, onMounted, onBeforeUnmount, ref } from 'vue';
import { DEFAULT_TIMEOUT_SECONDS, XmlaConnection } from 'org.eclipse.daanse.board.app.lib.connection.xmla';
import { DInput, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls';
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const { config } = defineProps<{
  config: any;
}>();

const { t } = useTranslation('connectionXmla')

/* Typing a URL is many changes; the server is asked once it holds still. */
const DEBOUNCE_MS = 500

/* The stored values stay as they were; only what is shown is translated. */
const securityOptions = computed(() => [
  { uid: 'None', name: t('Xmla.security.none') },
  { uid: 'Basic', name: t('Xmla.security.basic') },
])

const catalogs = ref<string[]>([]);
/* Why the server could not list its catalogues - said, not swallowed. */
const catalogsFailed = ref<string | undefined>();
const cubes = ref<string[]>([]);

const security = () => ({
  type: config.security,
  user: config.user,
  password: config.password,
})

function reasonOf(error: unknown): string {
  return error instanceof Error ? error.message : String(error)
}

/*
 * Each request carries a number and only the latest one's answer is kept:
 * the list for a URL typed a moment ago must not replace the current one's.
 */
let catalogsAsked = 0
const fetchCatalogs = async () => {
  const asked = ++catalogsAsked
  if (!config.url) {
    catalogs.value = []
    catalogsFailed.value = undefined
    return
  }
  try {
    const found = await XmlaConnection.getCatalogs(config.url, security());
    if (asked !== catalogsAsked) return
    catalogs.value = (found ?? []).map((each: { CATALOG_NAME: string }) => each.CATALOG_NAME)
    catalogsFailed.value = undefined
  } catch (error) {
    if (asked !== catalogsAsked) return
    catalogs.value = []
    catalogsFailed.value = reasonOf(error)
  }
};

/*
 * After the catalogue has been changed, the cube stays only if the new
 * catalogue holds it - a cube of the previous one would be queried where
 * nobody has heard of it. What was stored is left alone until the
 * catalogue actually changes, and a server that cannot answer clears
 * nothing.
 */
let cubesAsked = 0
let catalogueChanged = false
const fetchCubes = async () => {
  const asked = ++cubesAsked
  const catalogue = config.catalogName
  if (!config.url || !catalogue) {
    cubes.value = []
    return
  }
  try {
    const found = await XmlaConnection.getCubes(config.url, security(), catalogue);
    if (asked !== cubesAsked || catalogue !== config.catalogName) return
    cubes.value = (found ?? []).map((each: { CUBE_NAME: string }) => each.CUBE_NAME)
    if (catalogueChanged && config.cubeName && !cubes.value.includes(config.cubeName)) {
      // eslint-disable-next-line vue/no-mutating-props
      config.cubeName = ''
    }
  } catch {
    if (asked !== cubesAsked) return
    cubes.value = []
  }
};

let timer: ReturnType<typeof setTimeout> | undefined
let due = { catalogs: false, cubes: false }
function later(what: { catalogs?: boolean; cubes?: boolean }) {
  due = { catalogs: due.catalogs || !!what.catalogs, cubes: due.cubes || !!what.cubes }
  if (timer) clearTimeout(timer)
  timer = setTimeout(async () => {
    timer = undefined
    const now = due
    due = { catalogs: false, cubes: false }
    if (now.catalogs) await fetchCatalogs()
    /* Another server, another login: the same catalogue name may hold other cubes. */
    await fetchCubes()
  }, DEBOUNCE_MS)
}

onMounted(async () => {
  if (config.url) {
    await fetchCatalogs();
    await fetchCubes();
  }
});

onBeforeUnmount(() => {
  if (timer) clearTimeout(timer)
})

watch(
  () => [config.url, config.security, config.user, config.password],
  () => later({ catalogs: true }),
);

watch(
  () => config.catalogName,
  () => {
    catalogueChanged = true
    later({ cubes: true })
  },
);

const urlError = computed(() =>
  catalogsFailed.value ? t('Xmla.unreachable', { reason: catalogsFailed.value }) : undefined,
)

/* Without one the connection cannot open - said here, where it is fixed. */
const catalogError = computed(() =>
  config.url && !config.catalogName ? t('Xmla.catalogRequired') : undefined,
)

const catalogHint = computed(() => (catalogs.value.length ? t('Xmla.catalogHint') : undefined))
</script>

<template>

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DInput v-model="config.url" label="URL" type="url" required :error="urlError" />

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DInput
    v-model="config.catalogName"
    :label="t('Xmla.catalog')"
    :suggestions="catalogs"
    :error="catalogError"
    :hint="catalogHint"
    required
  />

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DInput v-model="config.cubeName" :label="t('Xmla.cube')" :suggestions="cubes" />

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DSelect v-model="config.security" :label="t('Xmla.security.label')" :options="securityOptions" />
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DInput v-if="config.security === 'Basic'" v-model="config.user" :label="t('Xmla.user')" />
  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DInput
    v-if="config.security === 'Basic'"
    v-model="config.password"
    :label="t('Xmla.password')"
    type="password"
  />

  <!-- eslint-disable-next-line vue/no-mutating-props -->
  <DInput v-model="config.timeout"
    :label="t('Xmla.timeout')"
    type="number"
    :placeholder="String(DEFAULT_TIMEOUT_SECONDS)"
  />
</template>
