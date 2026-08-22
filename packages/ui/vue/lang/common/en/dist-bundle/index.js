const { I18NEXT } = __tsm__.require("org.eclipse.daanse.board.app.lib.i18next");
const MainLayout = { "loading": "Loading", "connect": "Connect to the cube" };
const DashboardNavigation = { "designer": "Designer", "dashboard": "Dashboard", "multilevelDashboard": "Multilevel Dashboard" };
const MultilevelDashboardNavigation = { "edit": "Edit Mode", "save": "Save", "loadLayout": "Load Layout", "storeList": "Store List", "appSettings": "App settings", "addWidgetButton": "Add", "dataSourceList": "Store list" };
const AppSidebarSettings = { "labelAppSettings": "App Settings", "backgroundColor": "Background Color", "selectedLanguage": "Selected Language", "switchButton": "Switch" };
const SidebarControlSettings = { "controlSettings": "Control settings" };
const SidebarWidgetSettings = { "widgetSettings": "Widget settings" };
const SidebarSettings = { "closeButton": "Close", "doneButton": "Done" };
const SidebarStoreSettings = { "storesTitle": "Stores", "addNewStore": "Add new", "addNewXMLAStore": "Add new XMLA" };
const SidebarStoreList = { "caption": "Caption", "dataEndpoint": "Data endpoint", "newStore": "New Store", "dataSourcesTitle": "Stores:", "noAvailableStores": "No stores available", "addDatasourceButton": "Add store", "storeListItem": { "params": "Params", "events": "Events", "addEventButton": "Add event" }, "XMLAStoreListItem": { "catalog": "Catalog", "cube": "Cube", "rowsHierarchy": "Rows hierarchy", "colsHierarchy": "Cols hierarchy", "measure": "Measure" }, "StoreLabels": { "caption": "Caption", "type": "Type", "url": "Url", "name": "Name", "value": "Value" }, "CSVAStoreListItem": { "header": "Header", "delimiter": "Delimiter", "header_in_fist_row": "Header in fist Row", "range": "Range", "from": "from Line", "to": "to Line", "skip": "Skip empty Lines", "datetime": "DateTime Fields", "preview": "Preview" } };
const SidebarDatasourceList = { "title": "Store List" };
const StoreConfigurationModal = { "datasourceSelection": "Store selection", "addNew": "Add new", "okButton": "Ok", "createButton": "Create", "cancelButton": "Cancel", "datasourceCaptionLabel": "Store caption", "datasourceURLLabel": "Store URL", "datasourceTypeLabel": "Store type" };
const StoreSelectionModal = { "storeSelection": "Store selection", "createNewStore": "Create new store", "createButton": "Create", "selectButton": "Select", "selectExisting": "Or select existing one" };
const LayoutMovingButtons = { "moveUp": "Move up", "moveDown": "Move down", "moveToTop": "Move to top", "moveToBottom": "Move to bottom" };
const Options = { "cover": "Cover", "contain": "Contain", "stretch": "Stretch", "fill": "Fill", "none": "None" };
const Widgets = { "selectStore": "Select store", "storeSettingsTitle": "Store settings", "ImageWidget": "Image Widget", "TextWidget": "Text Widget", "SvgWidget": "Svg Widget", "RepeatableSvgWidget": "Repeatable Svg Widget", "ProgressWidget": "Progress Widget", "VideoWidget": "Video Widget", "IconWidget": "Icon Widget", "RichTextWidget": "Rich Text Widget", "TableWidget": "Table Widget", "PivotTableWidget": "Pivot Table Widget", "BarChartWidget": "Bar Chart Widget", "SwitchControl": "Switch Control", "SelectControl": "Select Control", "DateControl": "Date Control", "TimeControl": "Time Control", "ColorControl": "Color Control", "ButtonControl": "Button Control", "InputControl": "Input Control" };
const Controls = { "eventsList": "Events list", "addButton": "Add event" };
const ImageWidget = { "title": "Image widget settings", "imageUrl": "Image src", "addButton": "Add image", "imageFit": "Fit", "imageDiashowInterval": "Diashow interval" };
const TextWidget = { "title": "Text widget settings", "label": "Title", "fontSize": "Font Size", "fontColor": "Font Color" };
const SvgWidget = { "title": "SVG widget settings", "svgSrc": "SVG src", "addButton": "Add items" };
const RepeatableSvgWidget = { "title": "Repeatable SVG widget settings", "svgSrc": "Svg src", "repeations": "Repeations", "progress": "Progress", "activeItemFill": "Active item fill", "activeItemStroke": "Active item stroke", "defaultItemFill": "Default item fill", "defaultItemStroke": "Default item stroke" };
const ProgressWidget = { "title": "Progress widget settings", "progress": "Progress", "fillColor": "Progress fill color", "backgroundColor": "Progress background color", "isVertical": "Vertical", "isGradient": "Gradient", "addButton": "Add color", "rotation": "Rotation" };
const VideoWidget = { "title": "Video widget settings", "videoUrl": "Video url", "videoFit": "Fit" };
const IconWidget = { "title": "Icon widget settings", "iconSearch": "Search icon", "iconFilled": "Icon filled", "iconColor": "Icon color", "iconSize": "Icon size", "strokeWeight": "Stroke weight", "opticSize": "Optic size", "grade": "Grade" };
const RichTextWidget = { "title": "Rich text widget settings", "bold": "Bold", "italic": "italic", "strike": "strike", "underline": "underline", "code": "code", "clearMarks": "clear marks", "clearNodes": "clear nodes", "paragraph": "paragraph", "bulletList": "bullet list", "orderedList": "ordered list", "codeBlock": "code block", "blockQuote": "block quote", "horizontalRule": "horizontal rule", "hardBreak": "hard break", "undo": "undo", "redo": "redo" };
const TableWidget = {};
const PivotTableWidget = { "selectCatalog": "Select catalog", "selectCube": "Select cube", "mdx": "MDX" };
const WidgetWrapper = { "title": "Title", "label": "Title", "fontSize": "Title Font size", "fontColor": "Font Color", "background": "Background", "backgroundColor": "Background Color", "backgroundColorTrancparency": "Shadow Color Transparency", "border": "Border", "borderSize": "Border Size", "borderColor": "Border Color", "borderRadius": "Border Radius", "fullScreen": "Full Screen", "showFullScreen": "Show fullscreen button", "shadow": "Shadow", "shadowX": "Shadow x", "shadowY": "Shadow y", "shadowBlur": "Shadow blur", "shadowColorTransparency": "Shadow Color Transparency", "transparence": "Transparence", "transparency": "Transparency" };
const SwitchControl = { "label": "Label text" };
const SelectControl = { "label": "Label text", "optionsList": "Options list", "addOptionButton": "Add option", "option": "Option" };
const DateControl = { "label": "Label text" };
const TimeControl = { "label": "Label text" };
const ColorControl = { "label": "Label text" };
const ButtonControl = { "label": "Label text" };
const InputControl = { "label": "Label text" };
const DataSource = { "dataSource": "Stores", "withoutDataSource": "No store available" };
const Modals = { "okButton": "Ok!", "cancelButton": "Cancel", "confirmButton": "Confirm", "saveButton": "Save button" };
const CatalogSelectionModal = { "selectCatalogAndCube": "Select catalog and cube:" };
const CellPropertiesModal = { "cellProperties": "Cell properties", "property": "Property", "value": "Value" };
const DrillThroughModal = { "dataReturned": "Data returned for cell:" };
const FilterModal = { "enableFilters": "Enable any filters:", "currentlySelection": "Currently selected:", "resetSelection": "Reset selection" };
const MemberPropertiesModal = { "memberProperties": "Member properties", "property": "Property", "value": "Value" };
const PivotTableSettingsModal = { "pivotTableSettings": "Pivot table settings", "pivotTableData": "Pivot Table data", "cellStyles": "Cell styles" };
const ServerSelectionModal = { "serverUrl": "Enter server url:" };
const PivotTable = { "openCellPropertiesButton": "Open Cell Properties", "drillthroughButton": "Drillthrough", "drillDownButton": "Drilldown", "drillUpButton": "Drillup", "openButton": "Open Member Properties", "hideButton": "Hide Hierarchy Properties", "showButton": "Show Hierarchy Properties" };
const QueryDesigner = { "updateButton": "Update", "filters": "Filters", "columns": "Columns", "rows": "Rows", "data": "Data" };
const Routes = { "addWidgetButton": "Add widget", "loading": "Loading...", "addRestDatasourceButton": "Add REST store" };
const vuestic = { "toggleDropdown": "toggle", "select": "select", "openColorPicker": "color", "noOptions": "No options", "selectRowByIndex": "select", "uploadFile": "upload File", "ok": "ok", "cancel": "cancel", "decreaseCounter": "Decrease", "increaseCounter": "Increase", "counterValue": "Value" };
const en = {
  MainLayout,
  DashboardNavigation,
  MultilevelDashboardNavigation,
  AppSidebarSettings,
  SidebarControlSettings,
  SidebarWidgetSettings,
  SidebarSettings,
  SidebarStoreSettings,
  SidebarStoreList,
  SidebarDatasourceList,
  StoreConfigurationModal,
  StoreSelectionModal,
  LayoutMovingButtons,
  Options,
  Widgets,
  Controls,
  ImageWidget,
  TextWidget,
  SvgWidget,
  RepeatableSvgWidget,
  ProgressWidget,
  VideoWidget,
  IconWidget,
  RichTextWidget,
  TableWidget,
  PivotTableWidget,
  WidgetWrapper,
  SwitchControl,
  SelectControl,
  DateControl,
  TimeControl,
  ColorControl,
  ButtonControl,
  InputControl,
  DataSource,
  Modals,
  CatalogSelectionModal,
  CellPropertiesModal,
  DrillThroughModal,
  FilterModal,
  MemberPropertiesModal,
  PivotTableSettingsModal,
  ServerSelectionModal,
  PivotTable,
  QueryDesigner,
  Routes,
  vuestic
};
const SPRACHE = "en";
const NAMENSRAUM = "common";
function activate$1({ services }) {
  services.getRequired(I18NEXT).addResourceBundle(SPRACHE, NAMENSRAUM, en);
}
function deactivate$1({ services }) {
  services.getRequired(I18NEXT).removeResourceBundle(SPRACHE, NAMENSRAUM);
}
const library = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  activate: activate$1,
  deactivate: deactivate$1
}, Symbol.toStringTag, { value: "Module" }));
const LIBRARY_ID = "org.eclipse.daanse.board.app.ui.vue.lang.common.en";
const VERSION = "0.0.1-next.1";
async function activate(context) {
  const runtime = globalThis.__tsm__;
  if (!runtime) {
    throw new Error(`${LIBRARY_ID}: tsm runtime is not initialized`);
  }
  runtime.register(LIBRARY_ID, library, VERSION, "ui.vue.lang.common.en");
  await activate$1?.(context);
}
async function deactivate(context) {
  await deactivate$1?.(context);
}
export {
  activate,
  deactivate
};
