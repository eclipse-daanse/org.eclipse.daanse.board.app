<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts" setup>
import { ref, computed } from "vue";
import { useToast } from "vuestic-ui";
import PivotTable from "./PivotTable.vue";

// Define the pivot data model (which implements IPivotTable)
const pivotData = defineModel<any>({ required: true });

const props = defineProps({
  propertiesRows: {
    required: false,
    type: Array,
    default: () => [],
  },
  propertiesCols: {
    required: false,
    type: Array,
    default: () => [],
  },
  cubeName: {
    required: false,
    type: String,
    default: "",
  },
});

// Component states
const showModal = ref(false);
const generatedMdx = ref("");

// Vuestic Toast composable for notifications
const { notify } = useToast();

/**
 * Handle cell clicks from PivotTable.vue.
 * Reconstructs the coordinate tuples (row and column members) using the unique identifiers
 * rowId and colId emitted from the child grid.
 */
const handleCellClicked = ({ rowId, colId }: { rowId: string; colId: string }) => {
  if (!pivotData.value) return;

  // 1. Locate the row tuple matching the rowId (fallback to index if it's a numeric offset)
  let rowTuple = pivotData.value.rows?.find(
    (row: any) => row[row.length - 1]?.UName === rowId
  );
  if (!rowTuple && !isNaN(Number(rowId))) {
    const rowIdx = Number(rowId) - (props.propertiesRows?.length || 0);
    rowTuple = pivotData.value.rows?.[rowIdx];
  }
  rowTuple = rowTuple || [];

  // 2. Locate the column tuple matching the colId (fallback to index if it's a numeric offset)
  let colTuple = pivotData.value.columns?.find(
    (col: any) => col[col.length - 1]?.UName === colId
  );
  if (!colTuple && !isNaN(Number(colId))) {
    const colIdx = Number(colId) - (props.propertiesCols?.length || 0);
    colTuple = pivotData.value.columns?.[colIdx];
  }
  colTuple = colTuple || [];

  // 3. Extract all unique names (UNames) from row/column intersection tuples
  const uNames = [...rowTuple, ...colTuple].map((member: any) => member.UName).filter(Boolean);

  // 4. Identify the target ClickedMeasure (typically members from the [Measures] dimension)
  const clickedMeasure = uNames.find((uName: string) => uName.startsWith("[Measures].")) || "[Measures].[Sales Amount]";

  // 5. Filter out the Measures from the slicer coordinates for the WHERE tuple
  const slicerMembers = uNames.filter((uName: string) => !uName.startsWith("[Measures]."));

  // 6. Generate the syntactically correct MDX Drillthrough Statement
  // Target format: "DRILLTHROUGH MAXROWS 100 SELECT { [Measures].[ClickedMeasure] } ON 0 FROM [CubeName] WHERE ( [RowDim].[Hierarchy].&[Value], [ColDim].[Hierarchy].&[Value] )"
  const selectClause = `{ ${clickedMeasure} }`;
  const whereClause = slicerMembers.length > 0 ? ` WHERE ( ${slicerMembers.join(", ")} )` : "";
  const cube = props.cubeName || "AccountingWb";

  generatedMdx.value = `DRILLTHROUGH MAXROWS 100 SELECT ${selectClause} ON 0 FROM [${cube}]${whereClause}`;

  // 7. Show the modal
  showModal.value = true;
};

/**
 * Copy generated MDX to the clipboard and show a success toast.
 */
const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(generatedMdx.value);
    notify({
      message: "MDX Drillthrough query copied to clipboard!",
      color: "success",
      position: "bottom-right",
      duration: 3000,
    });
  } catch (err) {
    notify({
      title: "Error",
      message: "Failed to copy to clipboard.",
      color: "danger",
      position: "bottom-right",
      duration: 3000,
    });
  }
};
</script>

<template>
  <div class="pivot-table-drillthrough-wrapper">
    <!-- Wrap and delegate to PivotTable.vue -->
    <PivotTable
      v-model="pivotData"
      v-bind="$attrs"
      :propertiesRows="props.propertiesRows"
      :propertiesCols="props.propertiesCols"
      :cubeName="props.cubeName"
      @cell_clicked="handleCellClicked"
    />

    <!-- Modal overlay utilizing Vuestic UI VAModal -->
    <va-modal
      v-model="showModal"
      hide-default-actions
      max-width="650px"
      class="drillthrough-modal"
    >
      <div class="glassy-card">
        <div class="modal-header">
          <div class="header-icon-wrapper">
            <va-icon name="analytics" color="#ffffff" size="24px" />
          </div>
          <div class="header-text">
            <h3 class="modal-title">Drillthrough Payload</h3>
            <span class="modal-subtitle">MDX Query Payload Generation</span>
          </div>
        </div>

        <div class="modal-body">
          <p class="description">
            The cell intersection coordinates have been successfully translated into a valid MDX drillthrough query.
          </p>

          <div class="mdx-code-container">
            <div class="mdx-code-header">
              <span class="language-tag">MDX</span>
              <va-button
                preset="plain"
                size="small"
                color="#ffffff"
                class="quick-copy-btn"
                @click="copyToClipboard"
              >
                <va-icon name="content_copy" size="16px" class="mr-1" />
                Copy
              </va-button>
            </div>
            <pre class="mdx-code"><code>{{ generatedMdx }}</code></pre>
          </div>
        </div>

        <div class="modal-actions">
          <va-button
            preset="secondary"
            color="danger"
            border-color="danger"
            plain
            class="action-btn"
            @click="showModal = false"
          >
            Close
          </va-button>
          <va-button
            color="primary"
            class="action-btn action-btn-primary"
            @click="copyToClipboard"
          >
            <va-icon name="content_copy" class="mr-2" size="18px" />
            Copy Query
          </va-button>
        </div>
      </div>
    </va-modal>
  </div>
</template>

<style scoped>
.pivot-table-drillthrough-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

/* Premium Glassmorphic Modal & Card styles */
.glassy-card {
  background: rgba(26, 28, 35, 0.95);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5), 0 1px 3px rgba(255, 255, 255, 0.05);
  font-family: 'Outfit', 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #f1f5f9;
}

.modal-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.header-icon-wrapper {
  background: linear-gradient(135deg, hsl(230, 80%, 60%) 0%, hsl(280, 80%, 50%) 100%);
  border-radius: 12px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

.modal-title {
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.025em;
}

.modal-subtitle {
  font-size: 0.75rem;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.modal-body {
  margin-bottom: 24px;
}

.description {
  color: #cbd5e1;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 16px;
}

/* Styled Code Block with HSL customized border hover effects */
.mdx-code-container {
  background: #0f172a;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mdx-code-container:hover {
  border-color: hsl(230, 80%, 60%);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.6), 0 0 16px rgba(99, 102, 241, 0.2);
}

.mdx-code-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.02);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.language-tag {
  font-size: 0.75rem;
  font-weight: 700;
  color: hsl(230, 80%, 70%);
  letter-spacing: 0.05em;
}

.quick-copy-btn {
  opacity: 0.8;
  transition: opacity 0.2s;
}

.quick-copy-btn:hover {
  opacity: 1;
}

.mdx-code {
  margin: 0;
  padding: 16px;
  font-family: 'Fira Code', 'Courier New', Courier, monospace;
  font-size: 0.85rem;
  color: #e2e8f0;
  overflow-x: auto;
  white-space: pre-wrap;
  word-break: break-all;
  line-height: 1.6;
}

.modal-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

.action-btn {
  font-weight: 600;
  border-radius: 8px;
  transition: all 0.2s;
}

.action-btn-primary {
  background: linear-gradient(135deg, hsl(230, 80%, 60%) 0%, hsl(280, 80%, 50%) 100%) !important;
  color: #ffffff;
  border: none;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.2);
}

.action-btn-primary:hover {
  background: linear-gradient(135deg, hsl(230, 85%, 65%) 0%, hsl(280, 85%, 55%) 100%) !important;
  transform: translateY(-1px);
  box-shadow: 0 6px 16px rgba(99, 102, 241, 0.3);
}

.action-btn-primary:active {
  transform: translateY(1px);
}
</style>
