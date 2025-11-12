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


import { ref, watch } from "vue";

export function useMultipleSelection(tree: any, filters: any) {
  const selectAll = ref(false);
  const selectedItems = ref([] as any[]);
  const deselectedItems = ref([] as any[]);

  if (filters) {
    selectAll.value = filters.selectAll ?? selectAll.value;
    selectedItems.value = filters.selectedItems ?? selectedItems.value;
    deselectedItems.value = filters.deselectedItems ?? deselectedItems.value;
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
      return;
    }

    treeNode.children.forEach((childNode: any) => {
      computePartialSelection(childNode);
    });

    // const hasChildSelected = treeNode.children.some(
    //   (e: any) => e.selected || e.partiallySelected
    // );
    // const hasChildDeselected = treeNode.children.some((e: any) => !e.selected);

    // if (hasChildSelected && !hasChildDeselected) {
    //   treeNode.selected = true;
    //   treeNode.partiallySelected = false;
    // } else if (hasChildSelected && hasChildDeselected) {
    //   treeNode.selected = false;
    //   treeNode.partiallySelected = true;
    // } else {
    //   treeNode.selected = false;
    //   treeNode.partiallySelected = false;
    // }
  }

  function runCalculations() {
    tree.value.forEach((treeNode: any) => {
      computeSelection(treeNode, selectAll.value);
      computePartialSelection(treeNode);
    });

    let rootNodeSelectedCount = 0;
    tree.value.forEach((treeNode: any) => {
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
      deselectedItems.value = [];
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
          { UName: unique_name, timestamp: Date.now() },
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
          { UName: unique_name, timestamp: Date.now() },
        ];
      }
    }
  };

  const setSelectAll = () => {
    deselectedItems.value = [];
    selectedItems.value = [];
  };

  return {
    selectAll,
    selectedItems,
    deselectedItems,
    setSelectAll,
    changeSelection,
    runCalculations,
  };
}
