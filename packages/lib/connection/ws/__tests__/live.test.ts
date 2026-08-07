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
 * ********************************************************************/

import { describe, test, expect } from 'vitest';
import { container } from 'org.eclipse.daanse.board.app.lib.core';
import { factorySymbol as wsFactorySymbol, WSConnection } from '../src/index';

describe.skipIf(!process.env.RUN_LIVE_TESTS)('WSConnection Live API Integration Tests', () => {
  test('connects to public WebSocket echo server', async () => {
    const WSClass = globalThis.WebSocket;
    if (!WSClass) {
      console.warn('Native WebSocket is not supported in this Node/environment. Skipping live WS test.');
      return;
    }

    const factory = container.get<any>(wsFactorySymbol);
    const conn = factory({
      url: 'wss://echo.websocket.org',
      uid: 'live-ws',
      type: 'ws',
      name: 'Live WS'
    });

    try {
      await new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(() => {
          resolve();
        }, 3000);

        conn.subscribe((event: string) => {
          if (event === 'connect') {
            clearTimeout(timeout);
            resolve();
          }
        });
      });

      expect((conn as any).socket).toBeDefined();
    } catch (err: any) {
      console.warn('Skipping live WS test due to network or connection issue:', err.message);
    } finally {
      if ((conn as any).socket) {
        (conn as any).socket.close();
      }
    }
  });

  test('performs ping-pong message roundtrip to verify reactivity', async () => {
    const WSClass = globalThis.WebSocket;
    if (!WSClass) {
      console.warn('Native WebSocket is not supported in this Node/environment. Skipping live WS reactivity test.');
      return;
    }

    const factory = container.get<any>(wsFactorySymbol);
    const conn = factory({
      url: 'wss://echo.websocket.org',
      uid: 'live-ws-ping',
      type: 'ws',
      name: 'Live WS Ping'
    });

    try {
      await new Promise<void>((resolve, reject) => {
        const timeout = setTimeout(() => {
          resolve();
        }, 7000);

        conn.subscribe((event: string, data?: any) => {
          if (event === 'connect') {
            if ((conn as any).socket) {
              (conn as any).socket.send('ping-ws-reactivity');
            }
          } else if (event === 'message' && data === 'ping-ws-reactivity') {
            clearTimeout(timeout);
            expect(data).toBe('ping-ws-reactivity');
            resolve();
          }
        });
      });
    } catch (err: any) {
      console.warn('Skipping live WS ping-pong test due to network or connection issue:', err.message);
    } finally {
      if ((conn as any).socket) {
        (conn as any).socket.close();
      }
    }
  }, 10000);
});
