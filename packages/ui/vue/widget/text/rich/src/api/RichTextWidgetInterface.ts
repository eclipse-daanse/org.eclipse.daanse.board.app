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

export abstract class RichTextWidgetInterface extends WidgetActionInterfaceImpl {

  @WidgetAction({ eventType: 'richText.clearContent' })
  clearContent(): void { throw new Error("clearContent not implemented"); }

  @WidgetAction({ eventType: 'richText.copyContent' })
  copyContent(): void { throw new Error("copyContent not implemented"); }
}
