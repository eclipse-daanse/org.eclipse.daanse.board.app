/*
  Copyright (c) 2023 Contributors to the  Eclipse Foundation.
  This program and the accompanying materials are made
  available under the terms of the Eclipse Public License 2.0
  which is available at https://www.eclipse.org/legal/epl-2.0/
  SPDX-License-Identifier: EPL-2.0

  Contributors: Smart City Jena

*/

import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { useTaskManager, Task } from '../tasktimer'

describe('TaskManager Instance Isolation', () => {
  let taskManager1: ReturnType<typeof useTaskManager>
  let taskManager2: ReturnType<typeof useTaskManager>

  beforeEach(() => {
    vi.useFakeTimers()
    taskManager1 = useTaskManager()
    taskManager2 = useTaskManager()
  })

  afterEach(() => {
    vi.useRealTimers()
    taskManager1.clearAll()
    taskManager2.clearAll()
  })

  it('should create separate task instances', () => {
    expect(taskManager1).not.toBe(taskManager2)
  })

  it('should maintain separate task queues', () => {
    const task1 = new class extends Task {
      readonly id = 'task1'
      async run() {
        // Task 1 logic
      }
      invoke() {
        // Cleanup
      }
    }()

    const task2 = new class extends Task {
      readonly id = 'task2'
      async run() {
        // Task 2 logic
      }
      invoke() {
        // Cleanup
      }
    }()

    taskManager1.addTasksAndIvnoke([task1])
    taskManager2.addTasksAndIvnoke([task2])

    // Tasks should not interfere with each other
    expect(taskManager1.hasTask('task1')).toBe(true)
    expect(taskManager1.hasTask('task2')).toBe(false)

    expect(taskManager2.hasTask('task2')).toBe(true)
    expect(taskManager2.hasTask('task1')).toBe(false)
  })

  it('should clear only own tasks', () => {
    const task1 = new class extends Task {
      readonly id = 'task1'
      async run() {}
      invoke() {}
    }()

    const task2 = new class extends Task {
      readonly id = 'task2'
      async run() {}
      invoke() {}
    }()

    taskManager1.addTasksAndIvnoke([task1])
    taskManager2.addTasksAndIvnoke([task2])

    taskManager1.clearAll()

    expect(taskManager1.hasTask('task1')).toBe(false)
    expect(taskManager2.hasTask('task2')).toBe(true)
  })

  it('should prevent task ID collisions between instances', () => {
    const sharedTaskId = 'shared-task'

    const task1 = new class extends Task {
      readonly id = sharedTaskId
      async run() {}
      invoke() {}
    }()

    const task2 = new class extends Task {
      readonly id = sharedTaskId
      async run() {}
      invoke() {}
    }()

    taskManager1.addTasksAndIvnoke([task1])
    taskManager2.addTasksAndIvnoke([task2])

    // Both should have the task with the same ID, but in separate instances
    expect(taskManager1.hasTask(sharedTaskId)).toBe(true)
    expect(taskManager2.hasTask(sharedTaskId)).toBe(true)

    // Clearing one should not affect the other
    taskManager1.clearAll()
    expect(taskManager1.hasTask(sharedTaskId)).toBe(false)
    expect(taskManager2.hasTask(sharedTaskId)).toBe(true)
  })
})
