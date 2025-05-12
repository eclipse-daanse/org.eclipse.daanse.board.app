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

export interface DBSchemaCatalog {
  CATALOG_NAME: string
  DESCRIPTION: string
}

export interface MDSchemaCube {
  CUBE_NAME: string
  CUBE_CAPTION: string
}

export interface MDSchemaDimension {
  CATALOG_NAME: string
  CUBE_NAME: string
  DIMENSION_NAME: string
  DIMENSION_UNIQUE_NAME: string
  DIMENSION_CAPTION: string
  DIMENSION_TYPE: string
}

export interface MDSchemaHierarchy {
  CATALOG_NAME: string
  CUBE_NAME: string
  DIMENSION_UNIQUE_NAME: string
  HIERARCHY_CAPTION: string
  HIERARCHY_NAME: string
  HIERARCHY_UNIQUE_NAME: string
  HIERARCHY_DISPLAY_FOLDER: string
  DEFAULT_MEMBER: string
}

export interface MDSchemaLevel {
  CATALOG_NAME: string
  CUBE_NAME: string
  DIMENSION_UNIQUE_NAME: string
  HIERARCHY_UNIQUE_NAME: string
  LEVEL_NAME: string
  LEVEL_UNIQUE_NAME: string
  LEVEL_CAPTION: string
  LEVEL_NUMBER: string
  PARENT_UNIQUE_NAME: string
}

export interface MDSchemaMeasureGroup {
  CATALOG_NAME: string
  CUBE_NAME: string
  MEASUREGROUP_NAME: string
  MEASUREGROUP_CAPTION: string
}

export interface MDSchemaMeasure {
  CATALOG_NAME: string
  CUBE_NAME: string
  MEASURE_NAME: string
  MEASURE_UNIQUE_NAME: string
  MEASURE_CAPTION: string
  MEASURE_DISPLAY_FOLDER: string
  MEASUREGROUP_NAME: string
}

export interface MDSchemaSet {
  CATALOG_NAME: string
  CUBE_NAME: string
  DIMENSIONS: string
  SET_NAME: string
  SET_CAPTION: string
  SET_DISPLAY_FOLDER: string
}

export interface MDSchemaProperty {
  CATALOG_NAME: string
  CUBE_NAME: string
  DIMENSION_UNIQUE_NAME: string
  HIERARCHY_UNIQUE_NAME: string
  LEVEL_UNIQUE_NAME: string
  MEMBER_UNIQUE_NAME: string
  PROPERTY_NAME: string
  PROPERTY_CAPTION: string
}

export interface MDSchemaMember {
  CATALOG_NAME: string
  CUBE_NAME: string
  DIMENSION_UNIQUE_NAME: string
  HIERARCHY_UNIQUE_NAME: string
  LEVEL_NAME: string
  LEVEL_UNIQUE_NAME: string
  LEVEL_CAPTION: string
  LEVEL_NUMBER: string
  MEMBER_NAME: string
  MEMBER_UNIQUE_NAME: string
  MEMBER_CAPTION: string
  HAS_CHILDREN: boolean
  PARENT_UNIQUE_NAME: string
}

export interface MetadataStorage {
  hierarchies: MDSchemaHierarchy[]
  dimensions: MDSchemaDimension[]
  levels: MDSchemaLevel[]
  measureGroups: MDSchemaMeasureGroup[]
  measures: MDSchemaMeasure[]
  sets: MDSchemaSet[]
  properties: MDSchemaProperty[]
}

export interface TreeItem {
  caption: string
  id: string
  type: number
  children?: TreeItem[] | undefined
}

export interface DimensionTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Dimension
  isMeasureDimension: boolean
  children: TreeItem[]
}

export interface HierarchyTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Hierarchy
  children: TreeItem[]
  originalItem: MDSchemaHierarchy
  filters: {
    enabled: boolean
  }
}

export interface FolderTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Folder
  name: string
  children: TreeItem[]
}

export interface LevelTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Level
  children: TreeItem[]
  originalItem: MDSchemaLevel
}

export interface SetsFolderTreeItem extends TreeItem {
  type: TreeItemTypesEnum.SetsFolder
  children: SetTreeItem[]
}

export interface SetTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Set
}

export interface MeasureGroupTreeItem extends TreeItem {
  type: TreeItemTypesEnum.MeasureGroup
  children: MeasureTreeItem[]
}

export interface MeasureTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Measure
  originalItem: MDSchemaMeasure
}

export interface PropertyTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Property
}

export interface LoadingTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Loading
  caption: ''
}

export interface LoadMoreTreeItem extends TreeItem {
  type: TreeItemTypesEnum.LoadMore
  caption: ''
  parentId: string
}

export interface MemberTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Member
  children: any[]
  hasChildren: boolean
  __MDSchemaMember: MDSchemaMember
}

export interface PivotTableData {
  rows: any[][]
  columns: any[]
  cells: any[]
  propertiesCols: any[]
  propertiesRows: any[]
}

export interface DrilldownPayload {
  area: string
  value: string
}

export const MDSchemaDimensionType = {
  MD_DIMTYPE_UNKNOWN: '0',
  MD_DIMTYPE_TIME: '1',
  MD_DIMTYPE_MEASURE: '2',
  MD_DIMTYPE_OTHER: '3',
  MD_DIMTYPE_QUANTITATIVE: '4',
  MD_DIMTYPE_ACCOUNTS: '5',
  MD_DIMTYPE_CUSTOMERS: '6',
  MD_DIMTYPE_PRODUCTS: '7',
  MD_DIMTYPE_SCENARIO: '8',
  MD_DIMTYPE_UTILIY: '9',
  MD_DIMTYPE_CURRENCY: '10',
  MD_DIMTYPE_RATES: '11',
  MD_DIMTYPE_CHANNEL: '12',
  MD_DIMTYPE_PROMOTION: '13',
  MD_DIMTYPE_ORGANIZATION: '14',
  MD_DIMTYPE_BILL_OF_MATERIALS: '15',
  MD_DIMTYPE_GEOGRAPHY: '16',
}

export enum TreeItemTypesEnum {
  Dimension,
  Hierarchy,
  Folder,
  Level,
  MeasureGroup,
  Measure,
  Set,
  Property,
  SetsFolder,
  Member,
  Loading,
  LoadMore,
  MeasuresFolder,
}

export interface TreeItem {
  caption: string
  id: string
  type: number
  children?: TreeItem[] | undefined
}

export interface DimensionTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Dimension
  isMeasureDimension: boolean
  children: TreeItem[]
}

export interface HierarchyTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Hierarchy
  children: TreeItem[]
  originalItem: MDSchemaHierarchy
  filters: {
    enabled: boolean
  }
}

export interface FolderTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Folder
  name: string
  children: TreeItem[]
}

export interface LevelTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Level
  children: TreeItem[]
  originalItem: MDSchemaLevel
}

export interface SetsFolderTreeItem extends TreeItem {
  type: TreeItemTypesEnum.SetsFolder
  children: SetTreeItem[]
}

export interface SetTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Set
}

export interface MeasureGroupTreeItem extends TreeItem {
  type: TreeItemTypesEnum.MeasureGroup
  children: MeasureTreeItem[]
}

export interface MeasureTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Measure
  originalItem: MDSchemaMeasure
}

export interface PropertyTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Property
}

export interface LoadingTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Loading
  caption: ''
}

export interface LoadMoreTreeItem extends TreeItem {
  type: TreeItemTypesEnum.LoadMore
  caption: ''
  parentId: string
}

export interface MemberTreeItem extends TreeItem {
  type: TreeItemTypesEnum.Member
  children: any[]
  hasChildren: boolean
  __MDSchemaMember: MDSchemaMember
}

export function getDimensionDesc(
  dimension: MDSchemaDimension,
): DimensionTreeItem {
  return {
    type: TreeItemTypesEnum.Dimension,
    isMeasureDimension:
      dimension.DIMENSION_TYPE === MDSchemaDimensionType.MD_DIMTYPE_MEASURE,
    children: [],
    id: `Dimension(${dimension.DIMENSION_UNIQUE_NAME})`,
    caption: dimension.DIMENSION_CAPTION,
  }
}

export function getHierarchyDesc(
  hierarchy: MDSchemaHierarchy,
): HierarchyTreeItem {
  return {
    type: TreeItemTypesEnum.Hierarchy,
    children: [],
    id: `Dimension(${hierarchy.DIMENSION_UNIQUE_NAME})_Hierarchy(${hierarchy.HIERARCHY_UNIQUE_NAME})`,
    caption: hierarchy.HIERARCHY_CAPTION,
    originalItem: hierarchy,
    filters: {
      enabled: false,
    },
  }
}

export function getFolderDesc(name: string, id: string): FolderTreeItem {
  return {
    type: TreeItemTypesEnum.Folder,
    name: name,
    children: [],
    caption: name,
    id: `Folder_${id}`,
  }
}

export function getLevelDesc(level: MDSchemaLevel): LevelTreeItem {
  return {
    type: TreeItemTypesEnum.Level,
    children: [],
    caption: level.LEVEL_CAPTION,
    id: `Dimension(${level.DIMENSION_UNIQUE_NAME})_Hierarchy(${level.HIERARCHY_UNIQUE_NAME})_Level(${level.LEVEL_UNIQUE_NAME})`,
    originalItem: level,
  }
}

export function getMeasureGroupDesc(
  measureGroup: MDSchemaMeasureGroup,
): MeasureGroupTreeItem {
  return {
    type: TreeItemTypesEnum.MeasureGroup,
    children: [],
    caption: measureGroup.MEASUREGROUP_CAPTION,
    id: `MeasureGroup(${measureGroup.MEASUREGROUP_NAME})`,
  }
}

export function getMeasureDesc(
  measure: MDSchemaMeasure,
  mg?: MDSchemaMeasureGroup,
): MeasureTreeItem {
  if (mg) {
    return {
      type: TreeItemTypesEnum.Measure,
      caption: measure.MEASURE_CAPTION,
      id: `MeasureGroup(${mg.MEASUREGROUP_NAME})_Measure(${measure.MEASURE_UNIQUE_NAME})`,
      originalItem: measure,
    }
  } else {
    return {
      type: TreeItemTypesEnum.Measure,
      caption: measure.MEASURE_CAPTION,
      id: `Measure(${measure.MEASURE_UNIQUE_NAME}_${measure.MEASURE_DISPLAY_FOLDER})`,
      originalItem: measure,
    }
  }
}

export function getSetsFolderDesc(
  dimension?: MDSchemaDimension,
): SetsFolderTreeItem {
  if (dimension) {
    return {
      type: TreeItemTypesEnum.SetsFolder,
      children: [],
      caption: 'Sets',
      id: `Dimension(${dimension.DIMENSION_UNIQUE_NAME})_SetsFolder`,
    }
  } else {
    return {
      type: TreeItemTypesEnum.SetsFolder,
      children: [],
      caption: 'Sets',
      id: `SetsFolder`,
    }
  }
}

export function getSetDesc(
  set: MDSchemaSet,
  dimension?: MDSchemaDimension,
): SetTreeItem {
  if (dimension) {
    return {
      type: TreeItemTypesEnum.Set,
      caption: set.SET_CAPTION,
      id: `Dimension(${dimension.DIMENSION_UNIQUE_NAME})_Set(${set.SET_NAME})`,
    }
  } else {
    return {
      type: TreeItemTypesEnum.Set,
      caption: set.SET_CAPTION,
      id: `Set(${set.SET_DISPLAY_FOLDER} ${set.SET_NAME})`,
    }
  }
}

export function getPropertyDesc(property: MDSchemaProperty): PropertyTreeItem {
  return {
    type: TreeItemTypesEnum.Property,
    caption: property.PROPERTY_CAPTION,
    id: `Dimemsion(${property.DIMENSION_UNIQUE_NAME})_Hierarchy(${property.HIERARCHY_UNIQUE_NAME})_Level(${property.LEVEL_UNIQUE_NAME})_Property(${property.PROPERTY_NAME})`,
  }
}

export function getLoadingItemDesc(parentId: string): LoadingTreeItem {
  return {
    type: TreeItemTypesEnum.Loading,
    caption: '',
    id: `${parentId}_Loading`,
  }
}
export function getLoadMoreItemDesc(parentId: string): LoadMoreTreeItem {
  return {
    type: TreeItemTypesEnum.LoadMore,
    caption: '',
    id: `${parentId}_LoadMore`,
    parentId: parentId,
  }
}

export function getMemberDesc(member: MDSchemaMember): MemberTreeItem {
  return {
    type: TreeItemTypesEnum.Member,
    caption: member.MEMBER_CAPTION,
    id: `Dimemsion(${member.DIMENSION_UNIQUE_NAME})_Hierarchy(${member.HIERARCHY_UNIQUE_NAME})_Level(${member.LEVEL_UNIQUE_NAME})_Member(${member.MEMBER_UNIQUE_NAME})`,
    children: [],
    hasChildren: member.HAS_CHILDREN,
    __MDSchemaMember: member,
  }
}
