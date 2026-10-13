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
export interface DrilldownPayload {
  area: string
  value: string
}

export class DrilldownHandler {
  public rowsExpandedMembers: any[] = []
  public rowsDrilldownMembers: any[] = []
  public columnsExpandedMembers: any[] = []
  public columnsDrilldownMembers: any[] = []
  public connection

  constructor(connection: any, state?: any) {
    this.connection = connection

    if (state) {
      this.rowsDrilldownMembers = state.rowsDrilldownMembers || []
      this.rowsExpandedMembers = state.rowsExpandedMembers || []
      this.columnsDrilldownMembers = state.columnsDrilldownMembers || []
      this.columnsExpandedMembers = state.columnsExpandedMembers || []
    }
  }

  public getDrilldownState() {
    return {
      rowsExpandedMembers: this.rowsExpandedMembers,
      rowsDrilldownMembers: this.rowsDrilldownMembers,
      columnsExpandedMembers: this.columnsExpandedMembers,
      columnsDrilldownMembers: this.columnsDrilldownMembers,
    }
  }

  public drilldownOnRows(member: any) {
    const expandedIndex = this.rowsExpandedMembers.findIndex(
      (e: any) => e.UName === member.UName,
    )

    if (expandedIndex >= 0) this.rowsExpandedMembers.splice(expandedIndex, 1)

    const sameHierarchyIndex = this.rowsDrilldownMembers.findIndex((e: any) => {
      return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME
    })

    /*
     * The top member is drilled into like any other: its children are what
     * the user asked to see. It used to be taken for "no drilldown", so on
     * a hierarchy showing only its (All) member the menu sent the query
     * again and nothing changed.
     */
    if (sameHierarchyIndex >= 0) {
      this.rowsDrilldownMembers.splice(sameHierarchyIndex, 1, member)
    } else {
      this.rowsDrilldownMembers.push(member)
    }
  }

  public drilldownOnColumns(member: any) {
    const expandedIndex = this.columnsExpandedMembers.findIndex(
      (e: any) => e.UName === member.UName,
    )

    if (expandedIndex >= 0) this.columnsExpandedMembers.splice(expandedIndex, 1)

    const sameHierarchyIndex = this.columnsDrilldownMembers.findIndex(
      (e: any) => {
        return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME
      },
    )

    /*
     * The top member is drilled into like any other: its children are what
     * the user asked to see. It used to be taken for "no drilldown", so on
     * a hierarchy showing only its (All) member the menu sent the query
     * again and nothing changed.
     */
    if (sameHierarchyIndex >= 0) {
      this.columnsDrilldownMembers.splice(sameHierarchyIndex, 1, member)
    } else {
      this.columnsDrilldownMembers.push(member)
    }
  }

  /*
   * Drilling up undoes a drilldown by one level: the member drilled into
   * gives way to its parent. It used to ask the connection for the levels
   * and the parent member, through methods the connection does not have,
   * so it failed before it did anything. The member drilled into came from
   * the table and carries its parent's name; the parent's level is the
   * metadata's. The top member is a drilldown of its own, so drilling up
   * from a country shows the countries again, and only drilling up from
   * the top - or where the parent is not known - drops the drilldown and
   * the hierarchy shows its top alone.
   */
  private drillup(drilldowns: any[], member: any, levels: any[]) {
    const index = drilldowns.findIndex(
      (e: any) => e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME,
    )
    if (index < 0) return

    const drilled = drilldowns[index]
    const parentNumber = parseInt(drilled.LNum) - 1
    const parentLevel = (levels ?? []).find(
      (e: any) =>
        e.HIERARCHY_UNIQUE_NAME === drilled.HIERARCHY_UNIQUE_NAME &&
        Number(e.LEVEL_NUMBER) === parentNumber,
    )

    // A parent drilled up to was made here and knows no parent of its own; the table's member does.
    const parent =
      drilled.PARENT_UNIQUE_NAME ||
      (member.UName === drilled.UName ? member.PARENT_UNIQUE_NAME : undefined)
    if (!parent || !parentLevel || parentNumber < 0) {
      drilldowns.splice(index, 1)
      return
    }

    drilldowns.splice(index, 1, {
      UName: parent,
      LName: parentLevel.LEVEL_UNIQUE_NAME,
      HIERARCHY_UNIQUE_NAME: drilled.HIERARCHY_UNIQUE_NAME,
      LNum: String(parentNumber),
    })
  }

  public drillupOnRows(member: any, levels: any[] = []) {
    this.drillup(this.rowsDrilldownMembers, member, levels)
  }

  public drillupOnColumns(member: any, levels: any[] = []) {
    this.drillup(this.columnsDrilldownMembers, member, levels)
  }

  expandOnRows(member: any) {
    // Once is enough: a second click while the first answer is on its way drilled it twice.
    if (this.rowsExpandedMembers.some((e: any) => e.UName === member.UName)) return
    const currentMemberHierarchyItems: any[] = this.rowsExpandedMembers.filter(
      (e: any) => {
        return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME
      },
    )
    currentMemberHierarchyItems.push(member)
    currentMemberHierarchyItems.sort(
      (a, b) => parseInt(a.LNum) - parseInt(b.LNum),
    )
    const indexInSorted = currentMemberHierarchyItems.indexOf(member)
    if (indexInSorted === 0) {
      if (currentMemberHierarchyItems.length > 1) {
        const nextItemIndex = this.rowsExpandedMembers.findIndex(
          e => e.UName === currentMemberHierarchyItems[1].UName,
        )
        this.rowsExpandedMembers.splice(nextItemIndex, 0, member)
      } else {
        this.rowsExpandedMembers.push(member)
      }
    } else {
      const prevItemIndex = this.rowsExpandedMembers.findIndex(
        e => e.UName === currentMemberHierarchyItems[indexInSorted - 1].UName,
      )
      this.rowsExpandedMembers.splice(prevItemIndex + 1, 0, member)
    }
  }

  collapseOnRows(member: any) {
    const itemIndex = this.rowsExpandedMembers.findIndex(
      e => e.UName === member.UName,
    )

    // Not there: nothing to close - splice(-1) would have closed the last one open.
    if (itemIndex >= 0) this.rowsExpandedMembers.splice(itemIndex, 1)
  }

  expandOnColumns(member: any) {
    // Once is enough: a second click while the first answer is on its way drilled it twice.
    if (this.columnsExpandedMembers.some((e: any) => e.UName === member.UName)) return
    const currentMemberHierarchyItems: any[] =
      this.columnsExpandedMembers.filter((e: any) => {
        return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME
      })
    currentMemberHierarchyItems.push(member)
    currentMemberHierarchyItems.sort(
      (a, b) => parseInt(a.LNum) - parseInt(b.LNum),
    )
    const indexInSorted = currentMemberHierarchyItems.indexOf(member)
    if (indexInSorted === 0) {
      if (currentMemberHierarchyItems.length > 1) {
        const nextItemIndex = this.columnsExpandedMembers.findIndex(
          e => e.UName === currentMemberHierarchyItems[1].UName,
        )
        this.columnsExpandedMembers.splice(nextItemIndex, 0, member)
      } else {
        this.columnsExpandedMembers.push(member)
      }
    } else {
      const prevItemIndex = this.columnsExpandedMembers.findIndex(
        e => e.UName === currentMemberHierarchyItems[indexInSorted - 1].UName,
      )
      this.columnsExpandedMembers.splice(prevItemIndex + 1, 0, member)
    }
  }

  collapseOnColumns(member: any) {
    const itemIndex = this.columnsExpandedMembers.findIndex(
      e => e.UName === member.UName,
    )

    // Not there: nothing to close - splice(-1) would have closed the last one open.
    if (itemIndex >= 0) this.columnsExpandedMembers.splice(itemIndex, 1)
  }

  flushExpands(columns: any[], rows: any[]) {
    const notUsedHierarchiesInDrilldownCols =
      this.columnsExpandedMembers.filter((e: any) => {
        return !columns.some(member => {
          return (
            member.originalItem.HIERARCHY_UNIQUE_NAME ===
            e.HIERARCHY_UNIQUE_NAME
          )
        })
      })

    notUsedHierarchiesInDrilldownCols.forEach((member: any) => {
      const itemIndex = this.columnsExpandedMembers.findIndex((e: any) => {
        return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME
      })

      this.columnsExpandedMembers.splice(itemIndex, 1)
    })

    const notUsedHierarchiesInDrilldownRows = this.rowsExpandedMembers.filter(
      (e: any) => {
        return !rows.some(member => {
          return (
            member.originalItem.HIERARCHY_UNIQUE_NAME ===
            e.HIERARCHY_UNIQUE_NAME
          )
        })
      },
    )

    notUsedHierarchiesInDrilldownRows.forEach((member: any) => {
      const itemIndex = this.rowsExpandedMembers.findIndex((e: any) => {
        return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME
      })

      this.rowsExpandedMembers.splice(itemIndex, 1)
    })
  }

  flushDrilldowns(columns: any[], rows: any[]) {
    const notUsedHierarchiesInDrilldownCols =
      this.columnsDrilldownMembers.filter((e: any) => {
        return !columns.some(member => {
          return (
            member.originalItem.HIERARCHY_UNIQUE_NAME ===
            e.HIERARCHY_UNIQUE_NAME
          )
        })
      })

    notUsedHierarchiesInDrilldownCols.forEach((member: any) => {
      const itemIndex = this.columnsDrilldownMembers.findIndex((e: any) => {
        return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME
      })

      this.columnsDrilldownMembers.splice(itemIndex, 1)
    })

    const notUsedHierarchiesInDrilldownRows = this.rowsDrilldownMembers.filter(
      (e: any) => {
        return !rows.some(member => {
          return (
            member.originalItem.HIERARCHY_UNIQUE_NAME ===
            e.HIERARCHY_UNIQUE_NAME
          )
        })
      },
    )

    notUsedHierarchiesInDrilldownRows.forEach((member: any) => {
      const itemIndex = this.rowsDrilldownMembers.findIndex((e: any) => {
        return e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME
      })

      this.rowsDrilldownMembers.splice(itemIndex, 1)
    })
  }

  handleDrilldown({ value, area }: DrilldownPayload) {
    if (area === 'rows') {
      this.drilldownOnRows(value)
    } else if (area === 'columns') {
      this.drilldownOnColumns(value)
    }
  }

  handleDrillup({ value, area }: DrilldownPayload, levels: any[] = []) {
    if (area === 'rows') {
      this.drillupOnRows(value, levels)
    } else if (area === 'columns') {
      this.drillupOnColumns(value, levels)
    }
  }

  handleExpand({ value, area }: DrilldownPayload) {
    if (area === 'rows') {
      this.expandOnRows(value)
    } else if (area === 'columns') {
      this.expandOnColumns(value)
    }
  }

  handleCollapse({ value, area }: DrilldownPayload) {
    if (area === 'rows') {
      this.collapseOnRows(value)
    } else if (area === 'columns') {
      this.collapseOnColumns(value)
    }
  }
}
