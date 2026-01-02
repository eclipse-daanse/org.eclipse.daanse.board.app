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


/* eslint-disable @typescript-eslint/no-unused-vars */
import { ref, watch } from "vue";
import { MDSchemaHierarchy } from "../MetadataTree/TreeViewItems";
import { c } from "vite/dist/node/moduleRunnerTransport.d-DJ_mE5sf";

function optionalArrayToArray(el: any): any[] {
  if (Array.isArray(el)) return el
  if (el) {
    return [el]
  }
  return []
}

interface SelectionItem {
  timestamp: number;
  UName: string;
}

const MDDISPINFO_CHILD_COUNT = 65535;

function getTreeItem(e: any, parentSelected: boolean = false) {
  const treeItem = {
    ...e.Member,
    id: e.Member.UName,
    loaded: false,
    selected: parentSelected,
    partiallySelected: false,
  };

  const childCount = treeItem.DisplayInfo & MDDISPINFO_CHILD_COUNT;

  if (childCount) {
    treeItem.children = [
      {
        isLoading: true,
        id: `Loading_${e.Member.UName}`,
        children: [],
      },
    ];
  }

  return treeItem;
}

export async function useFilterTreeDataSource(element: {
  item: MDSchemaHierarchy;
  filters: any;
}, api: any, catalog: any) {
    console.log('useFilterTreeDataSource called with element:', element);
    console.log('useFilterTreeDataSource called with api:', api);
    console.log('useFilterTreeDataSource called with catalog:', catalog);

  const tree = ref([] as any[]);
  const selectedItems = ref([] as SelectionItem[]);
  const deselectedItems = ref([] as SelectionItem[]);
  const selectAll = ref(false);
  let treeSelection = [] as any[];

  if (element.filters) {
    selectAll.value = element.filters.selectAll ?? selectAll.value;
    selectedItems.value = element.filters.selectedItems ?? selectedItems.value;
    deselectedItems.value =
      element.filters.deselectedItems ?? deselectedItems.value;
  }

  try {
    const mdx = `
        SELECT {AddCalculatedMembers({${element.item.HIERARCHY_UNIQUE_NAME}.Levels(0).Members})} DIMENSION PROPERTIES MEMBER_TYPE ON 0, {} ON 1 FROM [${element.item.CUBE_NAME}] CELL PROPERTIES CELL_ORDINAL
      `;

    const childMembersResponce = await api.getMDX(mdx, catalog);
    console.log('childMembersResponce in <useFilterTreeDataSource>', childMembersResponce.Body.ExecuteResponse.return.root.Axes.Axis[0]);
    const childMembers = optionalArrayToArray(
      childMembersResponce.Body.ExecuteResponse.return.root.Axes.Axis[0].Tuples
        .Tuple
    ).map((e) => getTreeItem(e));
    console.log('childMembers in <useFilterTreeDataSource>', childMembers);

    if (selectedItems.value.length || deselectedItems.value.length) {
      let joinedMembers = "";
      if (selectedItems.value.length) {
        joinedMembers =
          joinedMembers + selectedItems.value.map((e) => e.UName).join(", ");
      }
      if (joinedMembers.length && deselectedItems.value.length) {
        joinedMembers = joinedMembers + " ,";
      }
      if (deselectedItems.value.length) {
        joinedMembers =
          joinedMembers + deselectedItems.value.map((e) => e.UName).join(", ");
      }
      const selectedTreeMdx = `
        WITH
        Set FilteredMembers As {
          ${joinedMembers}
        }
        Select { } on 1,
        Hierarchize(Generate(FilteredMembers, Ascendants(${element.item.HIERARCHY_UNIQUE_NAME}.currentmember))) DIMENSION PROPERTIES PARENT_UNIQUE_NAME, MEMBER_TYPE ON 0 FROM [${element.item.CUBE_NAME}]
      `;

      const treeSelectionResponce = await api.getMDX(selectedTreeMdx, catalog);
      const treeSelectionTupples = optionalArrayToArray(
        treeSelectionResponce.Body.ExecuteResponse.return.root.Axes.Axis[0]
          .Tuples.Tuple
      );
      treeSelection = treeSelectionTupples.map((e) => {
        return {
          ...e.Member,
          UName: e.Member.UName,
          hasChild: treeSelectionTupples.some(
            (member) => member.Member.PARENT_UNIQUE_NAME === e.Member.UName
          ),
        };
      });
    }

    tree.value = childMembers;
  } catch (e) {
    console.log(e);
  }

  async function loadChildrenRecursive(treeNode: any, expandedIds: string[]) {
    if (expandedIds.includes(treeNode.id)) {
      if (!treeNode.loaded) {
        treeNode.loaded = true;

        try {
          const mdx = `
            SELECT {AddCalculatedMembers({${treeNode.UName}.Children})} DIMENSION PROPERTIES MEMBER_TYPE ON 0, {} ON 1 FROM [${element.item.CUBE_NAME}] CELL PROPERTIES CELL_ORDINAL
          `;
          const childrenResponce = await api.getMDX(mdx, catalog);
          const children = optionalArrayToArray(
            childrenResponce.Body.ExecuteResponse.return.root.Axes.Axis[0]
              .Tuples.Tuple
          ).map((e) => getTreeItem(e, treeNode.selected));

          treeNode.children = [...children];
        } catch (e) {
          console.log(e);
        }
      }

      const openResponces = treeNode.children.map((childNode: any) => {
        return loadChildrenRecursive(childNode, expandedIds);
      });
      await Promise.all(openResponces);
    }
  }

  function computeSelection(treeNode: any, parentSelected: boolean) {
    treeNode.selected = parentSelected;

    if (parentSelected) {
      if (deselectedItems.value.some((e) => treeNode.UName === e.UName)) {
        treeNode.selected = false;
      } else {
        treeNode.selected = true;
      }
    } else {
      if (selectedItems.value.some((e) => treeNode.UName === e.UName)) {
        treeNode.selected = true;
      } else {
        treeNode.selected = false;
      }
    }

    if (!treeNode.children) return;

    treeNode.children.forEach((childNode: any) => {
      computeSelection(childNode, treeNode.selected);
    });
  }

  function computePartialSelection(treeNode: any) {
    if (!treeNode.children?.some((e: any) => !e.isLoading)) {
      const currentSelectionDesc = treeSelection.find(
        (s) => s.UName === treeNode.UName
      );
      if (currentSelectionDesc?.hasChild) {
        treeNode.partiallySelected = true;
      }
      return;
    }

    treeNode.children.forEach((childNode: any) => {
      computePartialSelection(childNode);
    });

    const hasChildSelected = treeNode.children.some(
      (e: any) => e.selected || e.partiallySelected
    );
    const hasChildDeselected = treeNode.children.some((e: any) => !e.selected);

    if (hasChildSelected && !hasChildDeselected) {
      treeNode.selected = true;
      treeNode.partiallySelected = false;
    } else if (hasChildSelected && hasChildDeselected) {
      treeNode.selected = false;
      treeNode.partiallySelected = true;
    } else {
      treeNode.selected = false;
      treeNode.partiallySelected = false;
    }
  }

  function optimizeSelection(treeNode: any) {
    if (!treeNode.children?.some((e: any) => !e.isLoading)) return;
    treeNode.children.forEach((childNode: any) => {
      optimizeSelection(childNode);
    });

    const hasChildSelected = treeNode.children.some(
      (e: any) => e.selected || e.partiallySelected
    );
    const hasChildDeselected = treeNode.children.some((e: any) => !e.selected);

    if (hasChildSelected && !hasChildDeselected) {
      let childsRemoved = false;

      treeNode.children.forEach((e: any) => {
        if (selectedItems.value.some((item) => item.UName === e.UName)) {
          childsRemoved = true;
          selectedItems.value = selectedItems.value.filter(
            (item) => item.UName !== e.UName
          );
        }
      });

      if (childsRemoved) {
        if (
          deselectedItems.value.some((item) => item.UName === treeNode.UName)
        ) {
          deselectedItems.value = deselectedItems.value.filter(
            (item) => item.UName !== treeNode.UName
          );
        } else {
          selectedItems.value = [
            ...selectedItems.value,
            { UName: treeNode.UName, ...treeNode, timestamp: Date.now() },
          ];
        }
      }
    } else if (!hasChildSelected && hasChildDeselected) {
      let childsRemoved = false;

      treeNode.children.forEach((e: any) => {
        if (deselectedItems.value.some((item) => item.UName === e.UName)) {
          childsRemoved = true;
          deselectedItems.value = deselectedItems.value.filter(
            (item) => item.UName !== e.UName
          );
        }
      });

      if (childsRemoved) {
        if (selectedItems.value.some((item) => item.UName === treeNode.UName)) {
          selectedItems.value = selectedItems.value.filter(
            (item) => item.UName !== treeNode.UName
          );
        } else {
          deselectedItems.value = [
            ...deselectedItems.value,
            { UName: treeNode.UName, ...treeNode, timestamp: Date.now() },
          ];
        }
      }
    }
  }

  function runCalculations() {
    tree.value.forEach((treeNode) => {
      computeSelection(treeNode, selectAll.value);
      optimizeSelection(treeNode);
      computePartialSelection(treeNode);
    });

    let rootNodeSelectedCount = 0;
    tree.value.forEach((treeNode) => {
      if (selectedItems.value.some((item) => item.UName === treeNode.UName)) {
        rootNodeSelectedCount++;
      }
    });

    let hasSelection = false;
    tree.value.forEach((treeNode: any) => {
      if (treeNode.selected || treeNode.partiallySelected) hasSelection = true;
    });

    if (rootNodeSelectedCount === tree.value.length) {
      selectedItems.value = [];
      selectAll.value = true;
    }

    if (!hasSelection) {
      selectAll.value = false;
      // deselectedItems.value = [];
    }
  }

  watch(deselectedItems, () => {
    runCalculations();
  });

  watch(selectedItems, () => {
    runCalculations();
  });

  watch(selectAll, () => {
    deselectedItems.value = [];
    selectedItems.value = [];
  });

  const triggerExpanded = async (expandedIds: string[]) => {
    const currentTreeState = tree.value;
    const openResponces = currentTreeState.map((treeNode: any) => {
      return loadChildrenRecursive(treeNode, expandedIds);
    });

    await Promise.all(openResponces);
    runCalculations();
  };

  const changeSelection = (node: any) => {
    const unique_name = node.UName;
    if (node.selected) {
      const isSelected = selectedItems.value.find(
        (e) => e.UName === unique_name
      );
      if (isSelected) {
        selectedItems.value = selectedItems.value.filter(
          (e) => e.UName !== unique_name
        );
      } else {
        deselectedItems.value = [
          ...deselectedItems.value,
          { UName: unique_name, ...node, timestamp: Date.now() },
        ];
      }
    } else {
      const isDeselected = deselectedItems.value.find(
        (e) => e.UName === unique_name
      );
      if (isDeselected) {
        deselectedItems.value = deselectedItems.value.filter(
          (e) => e.UName !== unique_name
        );
      } else {
        selectedItems.value = [
          ...selectedItems.value,
          { UName: unique_name, ...node, timestamp: Date.now() },
        ];
      }
    }
  };

  const setSelectAll = () => {
    deselectedItems.value = [];
    selectedItems.value = [];
  };

  runCalculations();

  return {
    tree,
    triggerExpanded,
    selectAll,
    deselectedItems,
    selectedItems,
    changeSelection,
    setSelectAll,
  };
}
