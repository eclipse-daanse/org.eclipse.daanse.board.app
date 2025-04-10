/**
 * Copyright (c) 2023 Contributors to the  Eclipse Foundation.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors: Smart City Jena
 */

export const readme = (config)=> {

  let goUp ='';
  const parts = config.name.split('.');
  const steps = (parts.length);
  for(let a=0;a<=steps;a++){
    goUp+='../'
  }
  return `# org.eclipse.daanse.board.app.xxx
## Description
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.

## If Lib/Core Package
How to use the Package
describe EntryPoint

## If UI-Widget
### Widget

![Example Widget](${goUp}tools/assets/widget.png)

Describe what the Widget is showing in configured state.

### Widget Settings

![Example Widget Settings](${goUp}tools/assets/settings.png)



Describe what each Setting is doing.
Describe what minimal has to setted up for a working example.

eg:

| Field   | required | explanation                  | hints                            |
|---------|----------|------------------------------|----------------------------------|
| Name    | x        | Name of receiver             | less than 255 unicode-characters |
| Email   | x        | Emailaddress of reciver      | valid pattern aaa.bbb@ccc.dd     |
| Subject | x        | Short description of content | less than 255 unicode-characters |
| Message | x        | Text to send                 | less than 750 unicode-characters |
| Send    |          |if valid trys to send the Email |triggers the validation of above marked fields|

### Examples

Show Widget in Wildlife
`
}
