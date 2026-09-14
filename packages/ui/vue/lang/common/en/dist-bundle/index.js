import { I18NEXT as r } from "org.eclipse.daanse.board.app.lib.i18next";
const s = { loading: "Loading", connect: "Connect to the cube" }, d = { designer: "Designer", dashboard: "Dashboard", multilevelDashboard: "Multilevel Dashboard" }, c = { edit: "Edit Mode", save: "Save", loadLayout: "Load Layout", storeList: "Store List", appSettings: "App settings", addWidgetButton: "Add", dataSourceList: "Store list" }, g = { labelAppSettings: "App Settings", backgroundColor: "Background Color", selectedLanguage: "Selected Language", switchButton: "Switch" }, u = { controlSettings: "Control settings" }, S = { widgetSettings: "Widget settings" }, p = { closeButton: "Close", doneButton: "Done" }, b = { storesTitle: "Stores", addNewStore: "Add new", addNewXMLAStore: "Add new XMLA" }, C = { caption: "Caption", dataEndpoint: "Data endpoint", newStore: "New Store", dataSourcesTitle: "Stores:", noAvailableStores: "No stores available", addDatasourceButton: "Add store", storeListItem: { params: "Params", events: "Events", addEventButton: "Add event" }, XMLAStoreListItem: { catalog: "Catalog", cube: "Cube", rowsHierarchy: "Rows hierarchy", colsHierarchy: "Cols hierarchy", measure: "Measure" }, StoreLabels: { caption: "Caption", type: "Type", url: "Url", name: "Name", value: "Value" }, CSVAStoreListItem: { header: "Header", delimiter: "Delimiter", header_in_fist_row: "Header in fist Row", range: "Range", from: "from Line", to: "to Line", skip: "Skip empty Lines", datetime: "DateTime Fields", preview: "Preview" } }, v = { title: "Store List" }, m = { datasourceSelection: "Store selection", addNew: "Add new", okButton: "Ok", createButton: "Create", cancelButton: "Cancel", datasourceCaptionLabel: "Store caption", datasourceURLLabel: "Store URL", datasourceTypeLabel: "Store type" }, h = { storeSelection: "Store selection", createNewStore: "Create new store", createButton: "Create", selectButton: "Select", selectExisting: "Or select existing one" }, w = { moveUp: "Move up", moveDown: "Move down", moveToTop: "Move to top", moveToBottom: "Move to bottom" }, B = { cover: "Cover", contain: "Contain", stretch: "Stretch", fill: "Fill", none: "None" }, T = { selectStore: "Select store", storeSettingsTitle: "Store settings", ImageWidget: "Image Widget", TextWidget: "Text Widget", SvgWidget: "Svg Widget", RepeatableSvgWidget: "Repeatable Svg Widget", ProgressWidget: "Progress Widget", VideoWidget: "Video Widget", IconWidget: "Icon Widget", RichTextWidget: "Rich Text Widget", TableWidget: "Table Widget", PivotTableWidget: "Pivot Table Widget", BarChartWidget: "Bar Chart Widget", SwitchControl: "Switch Control", SelectControl: "Select Control", DateControl: "Date Control", TimeControl: "Time Control", ColorControl: "Color Control", ButtonControl: "Button Control", InputControl: "Input Control" }, L = { eventsList: "Events list", addButton: "Add event" }, W = { title: "Image widget settings", imageUrl: "Image src", addButton: "Add image", imageFit: "Fit", imageDiashowInterval: "Diashow interval" }, y = { title: "Text widget settings", label: "Title", fontSize: "Font Size", fontColor: "Font Color" }, f = { title: "SVG widget settings", svgSrc: "SVG src", addButton: "Add items" }, D = { title: "Repeatable SVG widget settings", svgSrc: "Svg src", repeations: "Repeations", progress: "Progress", activeItemFill: "Active item fill", activeItemStroke: "Active item stroke", defaultItemFill: "Default item fill", defaultItemStroke: "Default item stroke" }, R = { title: "Progress widget settings", progress: "Progress", fillColor: "Progress fill color", backgroundColor: "Progress background color", isVertical: "Vertical", isGradient: "Gradient", addButton: "Add color", rotation: "Rotation" }, k = { title: "Video widget settings", videoUrl: "Video url", videoFit: "Fit" }, M = { title: "Icon widget settings", iconSearch: "Search icon", iconFilled: "Icon filled", iconColor: "Icon color", iconSize: "Icon size", strokeWeight: "Stroke weight", opticSize: "Optic size", grade: "Grade" }, P = { title: "Rich text widget settings", bold: "Bold", italic: "italic", strike: "strike", underline: "underline", code: "code", clearMarks: "clear marks", clearNodes: "clear nodes", paragraph: "paragraph", bulletList: "bullet list", orderedList: "ordered list", codeBlock: "code block", blockQuote: "block quote", horizontalRule: "horizontal rule", hardBreak: "hard break", undo: "undo", redo: "redo" }, A = {}, I = { selectCatalog: "Select catalog", selectCube: "Select cube", mdx: "MDX" }, x = { title: "Title", label: "Title", fontSize: "Title Font size", fontColor: "Font Color", background: "Background", backgroundColor: "Background Color", backgroundColorTrancparency: "Shadow Color Transparency", border: "Border", borderSize: "Border Size", borderColor: "Border Color", borderRadius: "Border Radius", fullScreen: "Full Screen", showFullScreen: "Show fullscreen button", shadow: "Shadow", shadowX: "Shadow x", shadowY: "Shadow y", shadowBlur: "Shadow blur", shadowColorTransparency: "Shadow Color Transparency", transparence: "Transparence", transparency: "Transparency" }, F = { label: "Label text" }, N = { label: "Label text", optionsList: "Options list", addOptionButton: "Add option", option: "Option" }, V = { label: "Label text" }, z = { label: "Label text" }, E = { label: "Label text" }, O = { label: "Label text" }, _ = { label: "Label text" }, U = { dataSource: "Stores", withoutDataSource: "No store available" }, H = { okButton: "Ok!", cancelButton: "Cancel", confirmButton: "Confirm", saveButton: "Save button" }, G = { selectCatalogAndCube: "Select catalog and cube:" }, X = { cellProperties: "Cell properties", property: "Property", value: "Value" }, q = { dataReturned: "Data returned for cell:" }, $ = { enableFilters: "Enable any filters:", currentlySelection: "Currently selected:", resetSelection: "Reset selection" }, j = { memberProperties: "Member properties", property: "Property", value: "Value" }, Q = { pivotTableSettings: "Pivot table settings", pivotTableData: "Pivot Table data", cellStyles: "Cell styles" }, Y = { serverUrl: "Enter server url:" }, J = { openCellPropertiesButton: "Open Cell Properties", drillthroughButton: "Drillthrough", drillDownButton: "Drilldown", drillUpButton: "Drillup", openButton: "Open Member Properties", hideButton: "Hide Hierarchy Properties", showButton: "Show Hierarchy Properties" }, K = { updateButton: "Update", filters: "Filters", columns: "Columns", rows: "Rows", data: "Data" }, Z = { addWidgetButton: "Add widget", loading: "Loading...", addRestDatasourceButton: "Add REST store" }, ee = {
  MainLayout: s,
  DashboardNavigation: d,
  MultilevelDashboardNavigation: c,
  AppSidebarSettings: g,
  SidebarControlSettings: u,
  SidebarWidgetSettings: S,
  SidebarSettings: p,
  SidebarStoreSettings: b,
  SidebarStoreList: C,
  SidebarDatasourceList: v,
  StoreConfigurationModal: m,
  StoreSelectionModal: h,
  LayoutMovingButtons: w,
  Options: B,
  Widgets: T,
  Controls: L,
  ImageWidget: W,
  TextWidget: y,
  SvgWidget: f,
  RepeatableSvgWidget: D,
  ProgressWidget: R,
  VideoWidget: k,
  IconWidget: M,
  RichTextWidget: P,
  TableWidget: A,
  PivotTableWidget: I,
  WidgetWrapper: x,
  SwitchControl: F,
  SelectControl: N,
  DateControl: V,
  TimeControl: z,
  ColorControl: E,
  ButtonControl: O,
  InputControl: _,
  DataSource: U,
  Modals: H,
  CatalogSelectionModal: G,
  CellPropertiesModal: X,
  DrillThroughModal: q,
  FilterModal: $,
  MemberPropertiesModal: j,
  PivotTableSettingsModal: Q,
  ServerSelectionModal: Y,
  PivotTable: J,
  QueryDesigner: K,
  Routes: Z
}, i = "en", a = "common";
function n({ services: e }) {
  e.getRequired(r).addResourceBundle(i, a, ee);
}
function l({ services: e }) {
  e.getRequired(r).removeResourceBundle(i, a);
}
const te = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: n,
  deactivate: l
}, Symbol.toStringTag, { value: "Module" })), o = "org.eclipse.daanse.board.app.ui.vue.lang.common.en", oe = "0.0.1-next.1";
async function ie(e) {
  const t = globalThis.__tsm__;
  if (!t)
    throw new Error(`${o}: tsm runtime is not initialized`);
  t.register(o, te, oe, "ui.vue.lang.common.en"), await n?.(e);
}
async function ae(e) {
  await l?.(e);
}
export {
  ie as activate,
  ae as deactivate
};
