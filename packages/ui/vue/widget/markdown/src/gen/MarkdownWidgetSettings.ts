/*
* This is generated code! Please note, that on code generation, these line are erased and generated again.
* If you modify this file, it is possible that you changes will be lost!!!
*
* This method uses JSON playload, to load an EPackage.
*
* @generated
*/

/*
* Generate classes and enums for TypeScript
* Default values are set. The '_type' parameter is generated for the
* Serialization to a backend.
*/
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'org.eclipse.daanse.board.app.ui.vue.widget.markdown#//MarkdownWidgetSettings'})
export class MarkdownWidgetSettings{
      
  @Documentation("The Markdown content to be displayed or edited in the widget.")
  @Attribute() value?: string;
}
