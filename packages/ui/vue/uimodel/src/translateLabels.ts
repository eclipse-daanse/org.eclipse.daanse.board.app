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
 * Labels in a UI model, translated.
 *
 * A form's labels live in its .xmi as plain strings, which made the widget
 * settings German whatever language was chosen. They can be translation
 * keys instead - "icon:IconWidget.color" - and this turns them into words.
 *
 * WORKAROUND (emf.ts.ui#12): done on the model rather than where a label
 * is drawn. The composer draws group headings itself and takes a finished
 * string - it has no hook to translate through, and it is not ours to
 * change. Setting the attribute is something both it and our own field
 * components already read, so one pass covers every label there is. This
 * goes away once the composer can be handed a translate function.
 *
 * The key is kept beside the widget, because after the first pass the
 * attribute holds a word, and the next language has to start from the key
 * again.
 */

interface Labelled {
  label?: string
  /** The composer's containment features, whatever this node happens to be. */
  fields?: { toArray?: () => Labelled[] } | Labelled[]
  components?: { toArray?: () => Labelled[] } | Labelled[]
}

/**
 * What a key looks like: a namespace, a colon, then dotted names.
 *
 * A label that is already a word never has this shape - it has spaces, or
 * no colon - so a model written before any of this keeps working untouched.
 */
const KEY = /^[a-z][\w-]*:[A-Za-z][\w.]*$/

/* Per widget, the key it was written with. */
const keys = new WeakMap<object, string>()

function children(node: Labelled): Labelled[] {
  const out: Labelled[] = []
  for (const held of [node.fields, node.components]) {
    if (!held) continue
    const list = Array.isArray(held) ? held : (held.toArray?.() ?? [])
    out.push(...list)
  }
  return out
}

/** Every node of the model, the root included. */
function walk(root: Labelled): Labelled[] {
  const all: Labelled[] = [root]
  for (let at = 0; at < all.length; at += 1) all.push(...children(all[at]))
  return all
}

/**
 * Remembers which labels are keys, so the model can be translated again.
 *
 * Call once, when the model is loaded.
 */
export function noteLabelKeys(model: unknown): void {
  if (!model) return
  for (const node of walk(model as Labelled)) {
    const label = node.label
    if (typeof label === 'string' && KEY.test(label)) keys.set(node as object, label)
  }
}

/**
 * Writes the current language's words into the model's labels.
 *
 * Only touches what was written as a key; a label that was always a word
 * is left as the author wrote it. A key with no translation yet falls back
 * to the key's last segment, which reads better than the whole key.
 */
export function translateLabels(
  model: unknown,
  t: (key: string) => string,
): void {
  if (!model) return
  for (const node of walk(model as Labelled)) {
    const key = keys.get(node as object)
    if (!key) continue
    const text = t(key)
    node.label = text === key ? (key.split('.').pop() ?? key) : text
  }
}

/** Whether this model has any labels to translate at all. */
export function hasLabelKeys(model: unknown): boolean {
  if (!model) return false
  return walk(model as Labelled).some((node) => keys.has(node as object))
}
