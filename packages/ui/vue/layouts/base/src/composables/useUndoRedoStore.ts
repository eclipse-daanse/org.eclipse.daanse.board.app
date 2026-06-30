/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
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

import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { cloneDeep } from 'lodash'
import type { ILayoutItem } from 'org.eclipse.daanse.board.app.ui.vue.stores.layout'
import type { IWidget } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'

export interface IEditorSnapshot {
  widgets: IWidget[]
  layout: ILayoutItem[]
}

const MAX_HISTORY = 50

export const useUndoRedoStore = (pageId: string = '') => {
  const storeCaller = defineStore('undo-redo-' + pageId, () => {
    const undoStack = ref<IEditorSnapshot[]>([])
    const redoStack = ref<IEditorSnapshot[]>([])

    const canUndo = computed(() => undoStack.value.length > 0)
    const canRedo = computed(() => redoStack.value.length > 0)

    const pushSnapshot = (snapshot: IEditorSnapshot) => {
      undoStack.value.push(cloneDeep(snapshot))
      if (undoStack.value.length > MAX_HISTORY) {
        undoStack.value.shift()
      }
      redoStack.value = []
    }

    const undo = (currentState: IEditorSnapshot): IEditorSnapshot | null => {
      if (undoStack.value.length === 0) return null
      const snapshot = undoStack.value.pop()!
      redoStack.value.push(cloneDeep(currentState))
      return cloneDeep(snapshot)
    }

    const redo = (currentState: IEditorSnapshot): IEditorSnapshot | null => {
      if (redoStack.value.length === 0) return null
      const snapshot = redoStack.value.pop()!
      undoStack.value.push(cloneDeep(currentState))
      return cloneDeep(snapshot)
    }

    const clear = () => {
      undoStack.value = []
      redoStack.value = []
    }

    return { undoStack, redoStack, canUndo, canRedo, pushSnapshot, undo, redo, clear }
  })
  return storeCaller()
}
