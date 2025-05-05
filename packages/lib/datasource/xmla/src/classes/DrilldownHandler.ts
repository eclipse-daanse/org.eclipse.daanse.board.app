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

    if (member.LNum === '0') {
      this.rowsDrilldownMembers.splice(sameHierarchyIndex, 1)
    } else {
      if (sameHierarchyIndex >= 0) {
        this.rowsDrilldownMembers.splice(sameHierarchyIndex, 1, member)
      } else {
        this.rowsDrilldownMembers.push(member)
      }
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

    if (member.LNum === '0') {
      this.columnsDrilldownMembers.splice(sameHierarchyIndex, 1)
    } else {
      if (sameHierarchyIndex >= 0) {
        this.columnsDrilldownMembers.splice(sameHierarchyIndex, 1, member)
      } else {
        this.columnsDrilldownMembers.push(member)
      }
    }
  }

  public async drillupOnRows(member: any) {
    const levels = await this.connection.getLevels()

    const parentLevel = levels.find((e: any) => {
      return (
        e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME &&
        e.LEVEL_NUMBER === Math.max(parseInt(member.LNum) - 1, 0).toString()
      )
    })

    if (parentLevel) {
      const parentMember = await this.connection.getMember(
        parentLevel,
        member.PARENT_UNIQUE_NAME,
      )

      const requestParentLevel = levels.find((e: any) => {
        return (
          e.HIERARCHY_UNIQUE_NAME === parentMember.HIERARCHY_UNIQUE_NAME &&
          e.LEVEL_NUMBER ===
            Math.max(parseInt(parentMember.LEVEL_NUMBER) - 1, 0).toString()
        )
      })
      if (requestParentLevel) {
        const createdMember = {
          UName: parentMember.PARENT_UNIQUE_NAME,
          LName: requestParentLevel.LEVEL_UNIQUE_NAME,
          HIERARCHY_UNIQUE_NAME: requestParentLevel.HIERARCHY_UNIQUE_NAME,
          LNum: requestParentLevel.LEVEL_NUMBER,
        }

        this.drilldownOnRows(createdMember)
      }
    }
  }

  public async drillupOnColumns(member: any) {
    const levels = await this.connection.getLevels()

    const parentLevel = levels.find((e: any) => {
      return (
        e.HIERARCHY_UNIQUE_NAME === member.HIERARCHY_UNIQUE_NAME &&
        e.LEVEL_NUMBER === Math.max(parseInt(member.LNum) - 1, 0).toString()
      )
    })

    if (parentLevel) {
      const parentMember = await this.connection.getMember(
        parentLevel,
        member.PARENT_UNIQUE_NAME,
      )

      const requestParentLevel = levels.find((e: any) => {
        return (
          e.HIERARCHY_UNIQUE_NAME === parentMember.HIERARCHY_UNIQUE_NAME &&
          e.LEVEL_NUMBER ===
            Math.max(parseInt(parentMember.LEVEL_NUMBER) - 1, 0).toString()
        )
      })
      if (requestParentLevel) {
        const createdMember = {
          UName: parentMember.PARENT_UNIQUE_NAME,
          LName: requestParentLevel.LEVEL_UNIQUE_NAME,
          HIERARCHY_UNIQUE_NAME: requestParentLevel.HIERARCHY_UNIQUE_NAME,
          LNum: requestParentLevel.LEVEL_NUMBER,
        }

        this.drilldownOnColumns(createdMember)
      }
    }
  }

  expandOnRows(member: any) {
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

    this.rowsExpandedMembers.splice(itemIndex, 1)
  }

  expandOnColumns(member: any) {
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

    this.columnsExpandedMembers.splice(itemIndex, 1)
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

  handleDrillup({ value, area }: DrilldownPayload) {
    if (area === 'rows') {
      this.drillupOnRows(value)
    } else if (area === 'columns') {
      this.drillupOnColumns(value)
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
