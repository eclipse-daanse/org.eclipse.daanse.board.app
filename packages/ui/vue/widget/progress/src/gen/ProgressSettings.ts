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

@ModelClass({type:'http://www.example.org/progresswidgets#//ProgressSettings'})
export class ProgressSettings{
              
  @Documentation("The current progress value, potentially as a percentage or numeric string.")
  @Attribute() progress?: string;
          
  @Documentation("The color representing the filled portion of the progress bar.")
  @Attribute() fillColor?: string;
          
  @Documentation("An optional secondary color used if a gradient fill is enabled for the progress bar.")
  @Attribute() gradientColor?: string;
          
  @Documentation("The background color of the progress bar, representing the unfilled portion.")
  @Attribute() backgroundColor?: string;
          
  @Documentation("A flag indicating whether the progress bar should use a gradient color.")
  @Attribute() isGradient?: boolean;
          
  @Documentation("A flag indicating whether the progress bar is oriented vertically.")
  @Attribute() isVertical?: boolean;
          
  @Documentation("The rotation angle of the progress bar in degrees.")
  @Attribute() rotation?: number;
}
