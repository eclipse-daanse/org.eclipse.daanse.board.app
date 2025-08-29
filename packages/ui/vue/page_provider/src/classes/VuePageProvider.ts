/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import { useRoute, useRouter } from 'vue-router'
import { type PageContextProviderI } from 'org.eclipse.daanse.board.app.lib.pagecontext.pagecontext_service'

export class VuePageProvider implements PageContextProviderI {
  private currentPageId: string | undefined = undefined;

  getCurrentPageId(): string | undefined {
    try {
      // Try to get route from Vue context first
      const route = useRoute();
      if (route && route.params && route.params.pageid) {
        this.currentPageId = route.params.pageid as string;
        return this.currentPageId;
      }
    } catch (error) {
      // If Vue context is not available, try alternative methods
    }

    // Fallback: try to get from current URL
    try {
      const currentPath = window.location.pathname;
      const match = currentPath.match(/\/page\/([^\/]+)/);
      if (match && match[1]) {
        this.currentPageId = match[1];
        return this.currentPageId;
      }
    } catch (error) {
      // Ignore errors if window is not available (SSR)
    }

    // Fallback: return last known page ID
    return this.currentPageId;
  }

  setCurrentPageId(pageId: string) {
    this.currentPageId = pageId;
  }
}
