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
                                                                                                                                                                                                                                                import {VariableWrapper} from 'org.eclipse.daanse.board.app.ui.vue.composables'
import {Documentation, Attribute, ModelClass, Reference, Enum} from 'org.eclipse.daanse.board.app.lib.annotations'

@ModelClass({type:'http://www.example.org/textsettings#//TextSettings'})
export class TextSettings{
      @Reference('VariableWrapper') text: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') fontSize: VariableWrapper<number> = new VariableWrapper<number>();
  @Reference('VariableWrapper') fontColor: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') fontWeight: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') fontStyle: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') textDecoration: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') horizontalAlign: VariableWrapper<string> = new VariableWrapper<string>();
  @Reference('VariableWrapper') verticalAlign: VariableWrapper<string> = new VariableWrapper<string>();
}
