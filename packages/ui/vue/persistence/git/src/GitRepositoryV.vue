<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->

<script setup lang="ts">
/*
 * What a git place adds to the storage view: where the repository is, which
 * branch and which commit are read, and whether a token is set.
 *
 * Only that. The storage view lists the entries, shows an entry and stores
 * the current workspace for every kind of place, git included (#1247). This
 * view had its own file table, load button and save input, teleported into
 * a modal that no longer exists.
 */
import { computed, ref, watch } from 'vue'
import { DButton, DChip, DIcon, DInput, DModal, DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'
import type { GitWritableRepository } from 'org.eclipse.daanse.board.app.lib.persistence.git'

/* Whether a token is set is newer than some builds of the library; a
  repository without it is taken as read only. */
type GitPlace = GitWritableRepository & { isAuthenticated?(): boolean }

const props = defineProps<{ repo: GitPlace }>()

/** The branch or the commit changed: what the place holds has to be read again. */
const emit = defineEmits<{ refresh: [] }>()

const { t } = useTranslation('persistence')

type CommitLike = { hash: string; creation_date: string; message?: string }

const branchNames = ref<string[]>([])
const branch = ref<string>('')
const commits = ref<CommitLike[]>([])
const commit = ref<string>('')
const authenticated = ref(false)

/* The date says when, the first line of the message says what. */
function when(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return date.toLocaleString(undefined, { dateStyle: 'medium', timeStyle: 'short' })
}

const commitChoices = computed(() =>
  commits.value.map((each) => {
    const line = (each.message ?? '').split('\n')[0] ?? ''
    const short = line.length > 48 ? `${line.slice(0, 47)}…` : line
    return { uid: each.hash, name: short ? `${when(each.creation_date)} · ${short}` : when(each.creation_date) }
  }),
)

const link = computed(() => String(props.repo.uri ?? ''))

/** Reads what the repository stands on now - the view may mount after it moved. */
async function readState() {
  const branches = (await props.repo.getBranches()) ?? []
  branchNames.value = branches.map((b) => b.name)
  branch.value = props.repo.getCurrentBranch()?.name ?? branchNames.value[0] ?? ''
  commits.value = ((await props.repo.getCommits()) ?? []) as CommitLike[]
  commit.value = props.repo.getCurrentCommit()?.hash ?? ''
  authenticated.value = props.repo.isAuthenticated?.() ?? false
}

watch(() => props.repo, readState, { immediate: true })

async function chooseBranch(name: unknown) {
  const chosen = ((await props.repo.getBranches()) ?? []).find((b) => b.name === name)
  if (!chosen) return
  branch.value = chosen.name
  props.repo.setBranch(chosen)
  /* A new branch starts at its newest commit, not at the old branch's. */
  commits.value = (await chosen.fetchCommits()) as CommitLike[]
  const newest = chosen.getCommits()[0]
  if (newest) props.repo.setCommit(newest)
  commit.value = newest?.hash ?? ''
  emit('refresh')
}

function chooseCommit(hash: unknown) {
  const chosen = props.repo.getCurrentBranch()?.getCommits().find((c: { hash: string }) => c.hash === hash)
  if (!chosen) return
  commit.value = chosen.hash
  props.repo.setCommit(chosen)
  emit('refresh')
}

/* --------------------------------------------------------------- token */

const asking = ref(false)
const token = ref('')

async function giveToken() {
  const value = token.value.trim()
  asking.value = false
  token.value = ''
  if (!value) return
  await props.repo.auth({ auth: value })
  authenticated.value = props.repo.isAuthenticated?.() ?? true
}
</script>

<template>
  <!-- Where it is and what access there is; under it, which branch and commit. -->
  <div class="git">
    <div class="git__top">
      <div class="git__field">
        <span class="git__label">{{ t('Git.repository') }}</span>
        <a class="git__link" :href="link" target="_blank" rel="noopener noreferrer" :title="t('Git.openRepository')">
          <DIcon name="open_in_new" size="xs" />{{ link.replace(/^https?:\/\//, '') }}
        </a>
      </div>

      <div class="git__access">
        <DChip :tone="authenticated ? 'ok' : 'neutral'">
          {{ authenticated ? t('Git.tokenSet') : t('Git.readOnly') }}
        </DChip>
        <DButton v-if="!authenticated" intent="quiet" size="sm" @click="asking = true">
          <DIcon name="key" size="sm" />{{ t('Git.setToken') }}
        </DButton>
      </div>
    </div>

    <div class="git__pick">
      <DSelect
        class="git__branch"
        :model-value="branch"
        :label="t('Git.branch')"
        :options="branchNames"
        size="sm"
        stacked
        @update:model-value="chooseBranch"
      />
      <DSelect
        class="git__commit"
        :model-value="commit"
        :label="t('Git.commit')"
        :options="commitChoices"
        size="sm"
        stacked
        @update:model-value="chooseCommit"
      />
    </div>

    <!-- Inside the one root, so the host's class lands on this view. -->
    <DModal v-model="asking" size="sm">
      <template #header>
        <h2 class="token__title">{{ t('Git.access') }}</h2>
      </template>

      <DInput v-model="token" :label="t('Git.token')" type="password" :hint="t('Git.tokenHint')" />

      <template #actions>
        <DButton intent="quiet" @click="() => { token = ''; asking = false }">{{ t('common:Action.cancel') }}</DButton>
        <DButton intent="primary" :disabled="!token.trim()" @click="giveToken">{{ t('Git.continue') }}</DButton>
      </template>
    </DModal>
  </div>
</template>

<style scoped>
/* A strip like the storage view's other boxes: pane ground, one border. */
.git {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 14px;
  background: var(--color-pane);
  border: 1px solid var(--color-divider);
  border-radius: var(--radius-sm);
}

/* The fields sit in a row here, not in a form: no gap under each. */
.git :deep(.field) {
  margin-bottom: 0;
}

.git__top,
.git__pick {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 8px 16px;
}

.git__top {
  justify-content: space-between;
}

.git__field {
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 0;
}

.git__label {
  font-family: var(--font-sans);
  font-size: var(--text-sm);
  color: var(--color-dim);
}

.git__link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  height: 22px;
  max-width: 420px;
  overflow: hidden;
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  color: var(--color-accent);
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.git__link:hover {
  text-decoration: underline;
}

.git__link:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 1px;
}

.git__branch {
  width: 140px;
}

.git__commit {
  flex: 0 1 380px;
  min-width: 220px;
}

.git__access {
  display: flex;
  align-items: center;
  gap: 6px;
  height: 22px;
}

.token__title {
  margin: 0;
  font-size: var(--text-lg);
  font-weight: 600;
}
</style>
