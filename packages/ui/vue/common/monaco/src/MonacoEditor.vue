<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script setup lang="ts">
import { DSelect } from 'org.eclipse.daanse.board.app.ui.vue.controls'
interface IMonacoEditorProps {
    modelValue?: string;
    language?: 'sql' | 'msdax' | 'mdx';
    theme?: 'vs-dark' | 'vs-light' | 'hc-black';
    supportedLanguages?: string[];
    showToolbar?: boolean;
    metadata: any;
    // supportedThemes?: string[];
    // editorOptions?: monaco.editor.IStandaloneEditorConstructionOptions;
}

import * as monaco from 'monaco-editor';
import { ref, onMounted, onBeforeUnmount, watch, nextTick } from 'vue';
import "./autoCompletion";
import { initMDXCompletionProvider } from "./autoCompletion";
import { setupSqlIntellisense } from './autoComplete/sql';

const editorContainer = ref<HTMLDivElement | null>(null);
let editorInstance: monaco.editor.IStandaloneCodeEditor | null = null;
const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

const props = withDefaults(defineProps<IMonacoEditorProps>(), {
    modelValue: '',
    language: 'sql',
    theme: 'vs-dark',
    showToolbar: true,
    supportedLanguages: () => ['sql', 'msdax', 'mdx'],
    // supportedThemes: () => ['vs-dark', 'vs-light', 'hc-black'],
});

console.log(props.metadata);

const selectedLanguage = ref(props.language);
// const selectedTheme = ref(props.theme);

const initEditor = async () => {
    try {
        // if (props.supportedLanguages.indexOf('mdx') !== -1) {
        //     const cubes = await XmlaConnection.getCubes(props.metadata.connection.url, props.metadata.connection.catalogName);
        //     initMDXCompletionProvider(cubes, props.metadata.metadataStore);
        // }

        if (editorContainer.value && !editorInstance) {
            const container = editorContainer.value;

            console.log(monaco.languages.getLanguages());

            editorInstance = monaco?.editor?.create(container, {
                // ...props.editorOptions,
                value: props.modelValue,
                language: props.language,
                wordWrap: 'on',
                // wordWrapColumn: 80,
                // theme: props.theme,
                automaticLayout: true,
                dropIntoEditor: {
                    enabled: true,
                },
                suggestOnTriggerCharacters: true,
                quickSuggestions: { other: true, comments: true, strings: true },
                wordBasedSuggestions: 'currentDocument',
                parameterHints: { enabled: true },
                snippetSuggestions: 'top',
            });

            container.addEventListener('dragover', (event) => {
                event.preventDefault();
            });

            container.addEventListener('drop', (event) => {
                event.preventDefault();
                const text = event.dataTransfer?.getData('text/plain');

                if (text && editorInstance) {
                    const position = editorInstance.getPosition();

                    if (position) {
                        const range = new monaco.Range(
                            position.lineNumber,
                            position.column,
                            position.lineNumber,
                            position.column
                        );

                        editorInstance.executeEdits('', [
                            {
                                range,
                                text,
                            },
                        ]);
                    }
                }
            });

            // monaco.editor.setTheme(selectedTheme.value);
            editorInstance.onDidChangeModelContent((e) => {
                if (typeof editorInstance?.getValue() === 'string') {
                    emit('update:modelValue', editorInstance.getValue());
                }
            });
        }
    } catch (e) {
        console.error('Error initializing Monaco editor:', e);
    }

};

watch(() => props.metadata, async (newMetadata) => {
    console.log('Metadata changed:', newMetadata);
    if (props.supportedLanguages.indexOf('sql') !== -1) {
        setupSqlIntellisense(monaco, newMetadata);
    }
}, { deep: true });

const disposeEditor = () => {
    if (editorInstance) {
        editorInstance.dispose();
        editorInstance = null;
    }
};

onMounted(() => {
    initEditor();
});

onBeforeUnmount(() => {
    disposeEditor();
});

watch(() => selectedLanguage.value, (newLang) => {
    if (editorInstance) {
        const model = editorInstance.getModel();
        if (model) {
            monaco.editor.setModelLanguage(model, newLang);
        }
    }
});

// watch(() => selectedTheme.value, (newTheme) => {
//   if (editorInstance) {
//     monaco.editor.setTheme(newTheme);
//   }
// });

watch(() => props.modelValue, (newValue) => {
    if (editorInstance && editorInstance.getValue() !== newValue) {
        editorInstance.setValue(newValue);
    }
});
</script>

<template>
    <div class="editor-page">
        <div class="header-container">
            <div class="toolbar" v-if="props.showToolbar">
                <DSelect v-model="selectedLanguage" label="Sprache" :options="supportedLanguages" size="sm" />
            </div>
            <slot name="actions">
                <!-- Additional action buttons can be inserted here -->
            </slot>
        </div>
        <!-- Not called monaco-editor: that is Monaco's own class, and its
             stylesheet would style this as if it were the editor. -->
        <div ref="editorContainer" class="editor-surface mt-2"></div>
    </div>
</template>

<style scoped>
.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/*
 * The caller gives this a height - 500px, h-full, whatever fits where it
 * sits - and the editor takes what is left of it under the toolbar.
 *
 * It used to be a column with a header in it and height:100% on the editor
 * below, which together are taller than the box they are in; with overflow
 * visible the editor then hung out of its container and, in the widget
 * settings, over the dialog's own footer. min-height:0 is what lets a flex
 * item shrink at all - without it the editor keeps its content height and
 * pushes the column open from the inside.
 */
.editor-page {
    display: flex;
    flex-direction: column;
    min-height: 0;
    overflow: hidden;
}

/*
 * The box Monaco is mounted into, and deliberately not called
 * monaco-editor: that is Monaco's own class, and its stylesheet sets
 * position:absolute on it. Named that, this stopped being a flex item
 * altogether - which is why it used to need height:100% to have any size
 * at all, and why it then hung out of the dialog it was in.
 *
 * flex-basis 0, not auto: auto asks the content how tall it wants to be,
 * and Monaco answers with the size of the box it was given - this one.
 * A basis of 0 hands it whatever the column has left over from the
 * toolbar, and Monaco lays out to that.
 */
.editor-surface {
    flex: 1 1 0;
    min-height: 0;
    /*
     * Monaco positions its own parts absolutely - the gutter, the overflow
     * guard, the overlay widgets - and they resolve against the nearest
     * positioned ancestor. Without one here they escaped to the dialog and
     * drew a full-height band across it. Monaco's own class used to supply
     * this by accident, being position:absolute itself.
     */
    position: relative;
    overflow: hidden;
    border: 1px solid var(--color-divider);
}

.visual-editor-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.toolbar {
    margin-bottom: 10px;
}
</style>
