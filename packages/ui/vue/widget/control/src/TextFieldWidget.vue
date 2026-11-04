<!--
Copyright (c) 2026 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script setup lang="ts">
/**
 * A text field: what is typed is written into the variable once it is
 * committed - Enter, or leaving the field - and sent with change. While
 * typing it sends input, throttled; Enter sends submit as well.
 */
import { toRefs } from 'vue'
import type { TextFieldSettings } from './gen/TextFieldSettings'
import { TextFieldSettingsImpl } from './gen/TextFieldSettingsImpl'
import { TextFieldWidgetInterface } from './api/TextFieldWidgetInterface'
import { textOf, useControl } from './support/useControl'
import { useField } from './support/useField'
import FieldFrame from './support/FieldFrame.vue'

const props = defineProps<{ id?: string }>()
const { id: widgetId } = toRefs(props)

const config = defineModel<TextFieldSettings>('configv', { required: true })

class TextFieldWidgetApi extends TextFieldWidgetInterface {
  setValue(value: unknown): void {
    write(textOf(value))
  }

  enable(): void {
    put('disabled', 'false')
  }

  disable(): void {
    put('disabled', 'true')
  }
}
const api = new TextFieldWidgetApi()
defineExpose<TextFieldWidgetInterface>(api)

/* No name stands in for an empty label: the label is a heading above the field. */
const { held, current, label, look, disabled, put, write, operate, send } = useControl(config, widgetId, {
  type: 'TextFieldWidget',
  wrapped: { target: '', placeholder: '' },
  create: () => new TextFieldSettingsImpl(),
  api,
})

const { text, typing, commit, submit, drop } = useField({
  current: () => current(),
  display: (value) => textOf(value),
  parse: (typed) => ({ ok: true, value: typed }),
  disabled,
  operate,
  send,
})
</script>

<template>
  <FieldFrame :id="widgetId" :label="label" :look="look">
    <input
      :id="`${widgetId ?? 'field'}-input`"
      class="control-field__input"
      type="text"
      :value="text"
      :placeholder="held('placeholder') || undefined"
      :disabled="disabled"
      @input="typing"
      @blur="commit"
      @keydown.enter.prevent="submit"
      @keydown.esc="drop"
    />
  </FieldFrame>
</template>
