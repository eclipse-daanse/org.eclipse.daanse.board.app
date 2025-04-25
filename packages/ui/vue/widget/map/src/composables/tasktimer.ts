/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { ref } from 'vue'
import { difference, intersection, uniq } from 'lodash'


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

const timer = ref<Map<string, TaskI>>(new Map<string, TaskI>())

export function useTaskManager() {

  const addTasksAndIvnoke = (tasks: TaskI[]) => {

    let listofTasks = Array.from(timer.value.keys())
    let toHold = intersection(listofTasks, tasks.map(t => t.id))
    let toAdd = difference(tasks.map(t => t.id), listofTasks)
    timer.value.forEach((task, key) => {
      if (!toHold.includes(key)) {
        console.log('invoking Task:' + key)
        task.invoke()
        timer.value.delete(key)
      }
    })
    tasks.forEach(t => {
      if (toAdd.includes(t.id)) {
        if (!timer.value.has(t.id)) {
          console.log('adding Task:' + t.id)
          timer.value.set(t.id, t)
          t.run()
        }
      }
    })


  }
  const invokeTask = (id: string): void => {
    timer.value.get(id)?.invoke()
    timer.value.delete(id)
  }
  const hasTask = (id: string) => {
    return timer.value.has(id)
  }

  return {
    addTasksAndIvnoke,
    invokeTask,
    hasTask
  }
}
