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

  console.log('Measures Group', measuresGroup)
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
      const sets = getSetsForDimensions(dimension, storage)
      const hierarchies = getChildHierarchies(dimension, storage)

      const childElements = reorderTree([...sets, ...hierarchies])
      dimensionDesc.children = [...childElements]
    }

    return dimensionDesc
  })
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
          // const childLevels = getChildLevels(hierarchy, storage);
          // parsedHierarchy.children = [...childLevels];
          parsedHierarchy.children = []

          foldersCursor.push(parsedHierarchy)
        }

        depth++
      }
    } else {
      const parsedHierarchy = TreeViewItems.getHierarchyDesc(hierarchy)
      // const childLevels = getChildLevels(hierarchy, storage);

      // parsedHierarchy.children = [...childLevels];
      parsedHierarchy.children = []

      parsedHierarchies.push(parsedHierarchy)
    }
  })

  return parsedHierarchies
}

export function reorderTree(tree: any[]) {
  return tree.sort((a, b) => {
    console.log('Reorder tree items', a, b);
    if (a.isMeasureDimension) return -2;
    else if (a.type === 8) return -1;
    else return 1;
  });
}
