/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

/**
 * A text a form hands to a renderer, made readable.
 *
 * What reaches a renderer is either a key ("chart:Form.borderColor") or
 * words already: the composer translates labels and placeholders itself
 * since 0.0.2-next.2, a derived form writes words from the feature name,
 * and an option is the value it stores ("MMM yyyy"). The renderers used to
 * send all of it through t('uimodel'), which puts its own namespace in
 * front of a bare text - every word came back as "uimodel:Line and border
 * colour".
 *
 * Only a key is asked for. A key names its namespace and has no spaces,
 * which is how every form writes a text it means to be translated;
 * anything else is shown as it stands.
 */
import { useTranslation } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const KEY = /^[A-Za-z][\w-]*:[\w-]+(\.[\w-]+)*$/

/** Whether a text is a translation key rather than words. */
export function isTranslationKey(text: unknown): text is string {
  return typeof text === 'string' && KEY.test(text)
}

/** Translates a key, and hands anything else back unchanged. */
export function useLabel() {
  const { t } = useTranslation()
  return <T extends string | undefined>(text: T): T =>
    (isTranslationKey(text) ? t(text) : text) as T
}
