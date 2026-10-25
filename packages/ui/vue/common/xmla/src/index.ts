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

import MetadataTree from './MetadataTree/MetadataTree.vue'
import QueryDesigner from './QueryDesigner/QueryDesigner.vue'
import PivotTable from './PivotTable/PivotTable.vue'
import FiltersModal from './Modals/FiltersModal.vue'
import SlicePicker from './SlicePicker/SlicePicker.vue'
import RowsetGrid from './RowsetGrid/RowsetGrid.vue'
import DiscoverExplorer from './DiscoverExplorer/DiscoverExplorer.vue'
import FunctionBrowser from './Functions/FunctionBrowser.vue'
import FunctionInfo from './Functions/FunctionInfo.vue'

export { MetadataTree, QueryDesigner, PivotTable, FiltersModal, SlicePicker, RowsetGrid, DiscoverExplorer, FunctionBrowser, FunctionInfo }
export {
  entryGroupLabel,
  groupFunctions,
  insertionOf,
  isDotFunction,
  parametersOf,
  representativeOf,
  returnTypeOf,
  signatureOf,
  textOf,
  type FunctionEntry,
  type FunctionParameter,
  type FunctionRow,
} from './Functions/functions'
export { dataTypeName, restrictionNames, rowLabel, scopesOf, type ExplorerNode, type ExplorerText } from './DiscoverExplorer/explorer'
export type { SlicePickerOption } from './SlicePicker/SlicePicker.vue'

/* Its texts - collected by lib.i18next, see src/i18n. */
export { XmlaTranslations } from './i18n'
