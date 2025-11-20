/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

// Logger configurations
const LOGGERS = {
  mqtt: 'daanse:ogcsta:mqtt',
  data: 'daanse:ogcsta:data',
  history: 'daanse:ogcsta:history',
  core: 'daanse:ogcsta:core',
  ogcsta: 'daanse:ogcsta:*',
  map: 'daanse:maps:*',
  all: 'daanse:*'
};

// Get current debug configuration from the inspected page
function getCurrentDebugConfig(callback) {
  chrome.devtools.inspectedWindow.eval(
    'typeof localStorage !== "undefined" ? localStorage.getItem("debug") : null',
    (result, isException) => {
      if (isException) {
        // Silently fail if page context is not ready yet
        callback(null);
      } else {
        callback(result);
      }
    }
  );
}

// Set debug configuration in the inspected page
function setDebugConfig(value) {
  const code = value
    ? `
      localStorage.setItem("debug", ${JSON.stringify(value)});
      if (window.__daanseDebug) {
        window.__daanseDebug.enable(${JSON.stringify(value)});
      }
      ${JSON.stringify(value)}
    `
    : `
      localStorage.removeItem("debug");
      if (window.__daanseDebug) {
        window.__daanseDebug.disable();
      }
      null
    `;

  chrome.devtools.inspectedWindow.eval(code, (result, isException) => {
    if (isException) {
      console.error('Error setting debug config:', isException);
    } else {
      console.log('Debug config updated:', result);
      updateUI();
    }
  });
}

// Check if a logger is enabled
function isLoggerEnabled(debugConfig, logger) {
  if (!debugConfig) return false;

  const patterns = debugConfig.split(',').map(p => p.trim());

  // Exact match
  if (patterns.includes(logger)) return true;

  // Wildcard match
  if (logger.includes('*')) {
    const prefix = logger.replace('*', '');
    return patterns.some(p => p.startsWith(prefix));
  }

  // Check if logger is covered by a wildcard pattern
  return patterns.some(pattern => {
    if (pattern.includes('*')) {
      const prefix = pattern.replace('*', '');
      return logger.startsWith(prefix);
    }
    return false;
  });
}

// Add or remove a logger from the debug config
function toggleLogger(logger, enable) {
  getCurrentDebugConfig((currentConfig) => {
    let patterns = currentConfig ? currentConfig.split(',').map(p => p.trim()).filter(p => p) : [];

    if (enable) {
      // Add logger if not present
      if (!patterns.includes(logger)) {
        patterns.push(logger);
      }
    } else {
      // Remove logger
      patterns = patterns.filter(p => p !== logger);
    }

    const newConfig = patterns.length > 0 ? patterns.join(',') : null;
    setDebugConfig(newConfig);
  });
}

// Update UI based on current configuration
function updateUI() {
  getCurrentDebugConfig((debugConfig) => {
    // Update current config display
    document.getElementById('currentConfig').textContent = debugConfig || 'none';

    // Update each logger's status
    Object.keys(LOGGERS).forEach(key => {
      const logger = LOGGERS[key];
      const isEnabled = isLoggerEnabled(debugConfig, logger);

      const statusEl = document.getElementById(`status-${key}`);
      const toggleBtn = document.getElementById(`toggle-${key}`);

      if (isEnabled) {
        statusEl.classList.remove('off');
        statusEl.classList.add('on');
        toggleBtn.classList.add('active');
        toggleBtn.textContent = 'Disable';
      } else {
        statusEl.classList.remove('on');
        statusEl.classList.add('off');
        toggleBtn.classList.remove('active');
        toggleBtn.textContent = 'Enable';
      }
    });
  });
}

// Setup event listeners
document.addEventListener('DOMContentLoaded', () => {
  // Toggle buttons
  Object.keys(LOGGERS).forEach(key => {
    const logger = LOGGERS[key];
    const toggleBtn = document.getElementById(`toggle-${key}`);

    toggleBtn.addEventListener('click', () => {
      getCurrentDebugConfig((debugConfig) => {
        const isEnabled = isLoggerEnabled(debugConfig, logger);
        toggleLogger(logger, !isEnabled);
      });
    });
  });

  // Enable all
  document.getElementById('enableAll').addEventListener('click', () => {
    setDebugConfig('daanse:*');
  });

  // Disable all
  document.getElementById('disableAll').addEventListener('click', () => {
    setDebugConfig(null);
  });

  // Refresh
  document.getElementById('refresh').addEventListener('click', () => {
    updateUI();
  });

  // Initial UI update
  updateUI();

  // Listen for localStorage changes in the inspected window
  setInterval(() => {
    updateUI();
  }, 1000);
});

// Reload the page when loggers change (optional)
function reloadPage() {
  chrome.devtools.inspectedWindow.reload();
}
