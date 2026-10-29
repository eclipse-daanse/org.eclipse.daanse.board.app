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

import * as TreeViewItems from './TreeViewItems'

export function getTreeViewNodes(storage: MetadataStorage) {
  const dimensions = getDimensions(storage);
  const measuresGroup = dimensions.find(d => d.isMeasureDimension);

  const tree = [
    getSets(storage),
    measuresGroup,
    {
      caption: 'Dimensions',
      id: 'dimensions_folder',
      expanded: true,
      type: TreeViewItems.TreeItemTypesEnum.DimensionFolder,
      children: dimensions.filter(d => !d.isMeasureDimension),
    }
  ]
  return reorderTree(tree)
}

export function getSets(storage: MetadataStorage) {
  const setsFolder = TreeViewItems.getSetsFolderDesc()

  const sets = storage.sets.map((s: MDSchemaSet) => {
    return TreeViewItems.getSetDesc(s)
  })

  setsFolder.children = [...sets]
  return setsFolder
}

export function getDimensions(storage: MetadataStorage) {
  const dimensions = storage.dimensions

  return dimensions.map(dimension => {
    const dimensionDesc = TreeViewItems.getDimensionDesc(dimension)

    if (dimension.DIMENSION_UNIQUE_NAME === '[Measures]') {
      const measureGroups = getMeasureGroups(storage)
      dimensionDesc.expanded = true
      dimensionDesc.children = [...measureGroups]
    } else {
      // Its hierarchies come when it is opened: see dimensionChildren.
      dimensionDesc.children = getSetsForDimensions(dimension, storage)
      dimensionDesc.lazy = true
    }

    return dimensionDesc
  })
}

/** An opened dimension's branch: its sets and the hierarchies just loaded. */
export function dimensionChildren(
  dimension: Parameters<typeof getSetsForDimensions>[0],
  storage: Parameters<typeof getSetsForDimensions>[1],
) {
  return reorderTree([...getSetsForDimensions(dimension, storage), ...getChildHierarchies(dimension, storage)])
}

export function getMeasureGroups(storage: MetadataStorage) {
  const measureGroups = storage.measureGroups.map(mg => {
    const measureGroup = TreeViewItems.getMeasureGroupDesc(mg)

    const measures = storage.measures
      .filter(e => e.MEASUREGROUP_NAME === mg.MEASUREGROUP_NAME)
      .map(e => TreeViewItems.getMeasureDesc(e, mg))

    measureGroup.children = [...measures]

    return measureGroup
  })

  const folders = getMeasureFolders(storage)

  return [...measureGroups, ...folders]
}

function getMeasureFolders(storage: MetadataStorage) {
  const folders = [] as TreeViewItems.FolderTreeItem[]

  storage.measures.forEach(m => {
    if (
      m.MEASURE_DISPLAY_FOLDER &&
      typeof m.MEASURE_DISPLAY_FOLDER === 'string'
    ) {
      const path = m.MEASURE_DISPLAY_FOLDER.split('\\')

      let depth = 0
      let foldersCursor: TreeViewItems.TreeItem[] = folders

      while (depth < path.length) {
        const currentPath = path[depth]

        const folder = foldersCursor.find(
          e =>
            e.type === TreeViewItems.TreeItemTypesEnum.Folder &&
            (e as TreeViewItems.FolderTreeItem).name === currentPath,
        )

        if (folder) {
          foldersCursor = folder.children as TreeViewItems.TreeItem[]
        } else {
          const newFolder = TreeViewItems.getFolderDesc(
            currentPath,
            `Measures/${currentPath}`,
          )

          foldersCursor.push(newFolder)
          foldersCursor = foldersCursor[foldersCursor.length - 1]
            .children as TreeViewItems.TreeItem[]
        }

        if (depth === path.length - 1) {
          const measure = TreeViewItems.getMeasureDesc(m)
          foldersCursor.push(measure)
        }

        depth++
      }
    }
  })
  return folders
}

function getSetsForDimensions(
  dimension: MDSchemaDimension,
  storage: MetadataStorage,
) {
  const setsFolder = TreeViewItems.getSetsFolderDesc(dimension)

  const dimensionSets = storage.sets
    .filter(s => {
      const dimensions = s.DIMENSIONS.split(',')
      return dimensions.includes(dimension.DIMENSION_UNIQUE_NAME)
    })
    .map(set => {
      return TreeViewItems.getSetDesc(set, dimension)
    })

  if (dimensionSets.length) {
    setsFolder.children = [...dimensionSets]
    return [setsFolder]
  }
  return []
}

function getChildHierarchies(
  dimension: MDSchemaDimension,
  storage: MetadataStorage,
) {
  const parsedHierarchies: TreeViewItems.HierarchyTreeItem[] = []

  const childHierarchies = storage.hierarchies.filter(
    h => h.DIMENSION_UNIQUE_NAME === dimension.DIMENSION_UNIQUE_NAME,
  )

  childHierarchies.forEach(hierarchy => {
    if (
      hierarchy.HIERARCHY_DISPLAY_FOLDER &&
      typeof hierarchy.HIERARCHY_DISPLAY_FOLDER === 'string'
    ) {
      const path = hierarchy.HIERARCHY_DISPLAY_FOLDER.split('\\')

      let depth = 0
      let foldersCursor: TreeViewItems.TreeItem[] = parsedHierarchies
      while (depth < path.length) {
        const currentPath = path[depth]

        const folder = foldersCursor.find(
          e =>
            e.type === TreeViewItems.TreeItemTypesEnum.Folder &&
            (e as TreeViewItems.FolderTreeItem).name === currentPath,
        )

        if (folder) {
          foldersCursor = folder.children as TreeViewItems.TreeItem[]
        } else {
          const newFolder = TreeViewItems.getFolderDesc(
            currentPath,
            `Dimension(${hierarchy.DIMENSION_UNIQUE_NAME}) /${currentPath}`,
          )

          foldersCursor.push(newFolder)
          foldersCursor = foldersCursor[foldersCursor.length - 1]
            .children as TreeViewItems.TreeItem[]
        }

        if (depth === path.length - 1) {
          const parsedHierarchy = TreeViewItems.getHierarchyDesc(hierarchy)
          // Its levels come when it is opened: see hierarchyChildren.
          parsedHierarchy.lazy = true

          foldersCursor.push(parsedHierarchy)
        }

        depth++
      }
    } else {
      const parsedHierarchy = TreeViewItems.getHierarchyDesc(hierarchy)
      // Its levels come when it is opened: see hierarchyChildren.
      parsedHierarchy.lazy = true

      parsedHierarchies.push(parsedHierarchy)
    }
  })

  return parsedHierarchies
}

/*
 * Below a hierarchy the tree goes on as the store loads: a hierarchy's
 * levels when it is opened (MetadataStore.loadHierarchyLevels), a level's
 * members when that is opened, a page at a time, with a "load more" row
 * while the level has more. A level can hold millions of members, so none
 * of them is asked for before someone opens it.
 */
export const LEVEL_MEMBERS_PAGE_SIZE = 100

export type LevelMembersLoader = (
  level: TreeViewItems.MDSchemaLevel,
  start: number,
  amount: number,
) => Promise<{ members: TreeViewItems.MDSchemaMember[]; hasMore: boolean }>

/** An opened hierarchy's branch: its levels in level order, each to be opened in turn. */
export function hierarchyChildren(
  levels: TreeViewItems.MDSchemaLevel[],
): TreeViewItems.LevelTreeItem[] {
  return [...levels]
    .sort((a, b) => Number(a.LEVEL_NUMBER) - Number(b.LEVEL_NUMBER))
    .map(level => {
      const levelDesc = TreeViewItems.getLevelDesc(level)
      levelDesc.lazy = true
      levelDesc.loadedMembers = 0
      levelDesc.hasMore = true
      return levelDesc
    })
}

export function findTreeItem(
  nodes: TreeViewItems.TreeItem[],
  id: string,
): TreeViewItems.TreeItem | undefined {
  for (const node of nodes ?? []) {
    if (!node) continue
    if (node.id === id) return node
    const found = node.children ? findTreeItem(node.children, id) : undefined
    if (found) return found
  }
  return undefined
}

/**
 * Fetches the next page of a level's members and puts it behind those it
 * has, with a "load more" row last while the level has more. A level that
 * has all of its members, or one whose page is on its way, asks for nothing.
 */
export async function loadLevelMembers(
  level: TreeViewItems.LevelTreeItem,
  loader: LevelMembersLoader,
  pageSize: number = LEVEL_MEMBERS_PAGE_SIZE,
): Promise<void> {
  if (level.fetching || level.hasMore === false) return
  level.fetching = true
  try {
    const start = level.loadedMembers ?? 0
    const { members, hasMore } = await loader(level.originalItem, start, pageSize)
    const next: TreeViewItems.TreeItem[] = [
      ...(level.children ?? []).filter(c => c.type === TreeViewItems.TreeItemTypesEnum.Member),
      ...members.map(member => TreeViewItems.getMemberDesc(member)),
    ]
    if (hasMore) next.push(TreeViewItems.getLoadMoreItemDesc(level.id))
    level.loadedMembers = start + members.length
    level.hasMore = hasMore
    level.children = next
  } finally {
    level.fetching = false
  }
}

export function reorderTree(tree: any[]) {
  return tree.sort((a, b) => {
    if (a.isMeasureDimension) return -2;
    else if (a.type === 8) return -1;
    else return 1;
  });
}
