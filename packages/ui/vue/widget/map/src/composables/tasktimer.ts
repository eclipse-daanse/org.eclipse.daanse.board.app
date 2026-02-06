/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { ref } from 'vue'


export interface TaskI {
  id: string;

  invoke(): void;

  run(): void

}

export abstract class Task implements TaskI {
  id: string = ''

  invoke(): void {
  }

  run(): void {
  }

}

export function useTaskManager() {
  // Create instance-specific timer to avoid shared state between widget instances
  const timer = ref<Map<string, TaskI>>(new Map<string, TaskI>())

  const addTasksAndIvnoke = async (tasks: TaskI[]) => {
    const newTaskIds = new Set(tasks.map(t => t.id))

    // Remove tasks that are no longer needed
    timer.value.forEach((task, key) => {
      if (!newTaskIds.has(key)) {
        task.invoke()
        timer.value.delete(key)
      }
    })

    // Add new tasks in batches, yielding to the browser between batches
    const BATCH_SIZE = 10
    let count = 0
    for (const t of tasks) {
      if (!timer.value.has(t.id)) {
        timer.value.set(t.id, t)
        t.run()
        count++
        if (count % BATCH_SIZE === 0) {
          await new Promise(resolve => setTimeout(resolve, 0))
        }
      }
    }
  }
  const invokeTask = (id: string): void => {
    timer.value.get(id)?.invoke()
    timer.value.delete(id)
  }
  const hasTask = (id: string) => {
    return timer.value.has(id)
  }

  const clearAll = () => {
    timer.value.forEach((task, key) => {
      try {
        task.invoke()
      } catch (e) {
        console.warn('Error invoking task during clearAll:', key, e)
      }
    })
    timer.value.clear()
  }

  return {
    addTasksAndIvnoke,
    invokeTask,
    hasTask,
    clearAll
  }
}
