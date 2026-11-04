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

import { WidgetActionInterfaceImpl } from 'org.eclipse.daanse.board.app.lib.api.events'
import { WidgetAction } from 'org.eclipse.daanse.board.app.lib.events'

export abstract class CodeWidgetInterface extends WidgetActionInterfaceImpl {


  @WidgetAction({ eventType: 'code.copyContent', parameters: [] })
  copyContent(): void { throw new Error("copyContent not implemented"); }

  @WidgetAction({ eventType: 'code.clearCode', parameters: [] })
  clearCode(): void { throw new Error("clearCode not implemented"); }

  @WidgetAction({
    eventType: 'code.setCode',
    parameters: [
      { name: 'code', type: 'string', label: 'code:Action.code' },
    ],
  })
  setCode(code: string): void { throw new Error("setCode not implemented"); }

  @WidgetAction({
    eventType: 'code.setLanguage',
    parameters: [
      { name: 'lang', type: 'string', label: 'code:Action.language' },
    ],
  })
  setLanguage(lang: string): void { throw new Error("setLanguage not implemented"); }

  @WidgetAction({ eventType: 'code.refresh', parameters: [] })
  refresh(): void { throw new Error("refresh not implemented"); }
}
