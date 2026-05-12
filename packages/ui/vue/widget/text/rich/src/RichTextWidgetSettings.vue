<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts" setup>
import { inject, ref, watch } from 'vue'
import StarterKit from "@tiptap/starter-kit";
import { useEditor, EditorContent } from "@tiptap/vue-3";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Heading from "@tiptap/extension-heading";
import Strike from "@tiptap/extension-strike";
import OrderedList from "@tiptap/extension-ordered-list";
import BulletList from "@tiptap/extension-bullet-list";
import Code from "@tiptap/extension-code";
import CodeBlock from "@tiptap/extension-code-block";
import Blockquote from "@tiptap/extension-blockquote";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import { TextStyleKit } from "@tiptap/extension-text-style";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { TextAlign } from "@tiptap/extension-text-align";
import type {i18n} from "org.eclipse.daanse.board.app.lib.i18next"
import { RichTextEditorSettings } from './gen/RichTextEditorSettings'

const i18n:i18n|undefined = inject('i18n');
const t = (key:string)=>(i18n)?i18n.t(key):key;

const fontSize = ref('16')
const fontColor = ref('#000000')

const setFontSize = () => {
    if (!editor.value) return;
    editor.value.chain().focus().setMark('textStyle', { fontSize: fontSize.value + 'px' }).run();
}

const setFontColor = (color: string) => {
    if (!editor.value) return;
    fontColor.value = color;
    editor.value.chain().focus().setColor(color).run();
}

const setLink = () => {
    if (!editor.value) return;
    const previousUrl = editor.value.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);
    if (url === null) return;
    if (url === '') {
        editor.value.chain().focus().extendMarkRange('link').unsetLink().run();
        return;
    }
    editor.value.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
}
const widgetSettings = defineModel<RichTextEditorSettings>({ required: true });

const opened = ref({
    widgetSection: false,
    storeSection: false,
});

const editor = useEditor({
    content: widgetSettings.value.editor || '',
    extensions: [
        StarterKit,
        Bold.configure({
            HTMLAttributes: {
                class: "custom-bold",
            },
        }),
        Italic.configure({
            HTMLAttributes: {
                class: "custom-italic",
            },
        }),
        Strike.configure({
            HTMLAttributes: {
                class: "custom-strike",
            },
        }),
        Heading.configure({
            levels: [1, 2, 3, 4, 5, 6],
        }),
        OrderedList.configure({
            HTMLAttributes: {
                class: "custom-ordered-list",
            },
        }),
        BulletList.configure({
            HTMLAttributes: {
                class: "custom-bullet-list",
            },
        }),
        Code.configure({
            HTMLAttributes: {
                class: "custom-code",
            },
        }),
        CodeBlock.configure({
            HTMLAttributes: {
                class: "custom-code-block",
            },
        }),
        Blockquote.configure({
            HTMLAttributes: {
                class: "custom-blockquote",
            },
        }),
        HorizontalRule.configure({
            HTMLAttributes: {
                class: "custom-horizontal-rule",
            },
        }),
        Underline.configure({
            HTMLAttributes: {
                class: "custom-underline",
            },
        }),
        Link.configure({
            openOnClick: false,
            HTMLAttributes: {
                class: "custom-link",
            },
        }),
        TextStyleKit,
        Subscript,
        Superscript,
        TextAlign.configure({
            types: ['heading', 'paragraph'],
        }),
    ],
});

watch(
    () => editor.value?.getHTML(),
    (newValue) => {
        if (newValue) {
            widgetSettings.value.editor = newValue;
        }
    },
);
</script>

<template>
    <va-collapse v-model="opened.widgetSection" icon="settings" :header="t('textRich:RichTextWidget.title')">
        <div class="settings-container">
            <div v-if="editor" class="toolbar">
                <!-- Font Size & Color -->
                <div class="toolbar-group toolbar-group--inputs">
                    <input
                        type="number"
                        class="toolbar-size-input"
                        v-model="fontSize"
                        @change="setFontSize()"
                        min="8" max="96" step="1"
                        title="Font Size"
                    />
                    <input
                        type="color"
                        class="toolbar-color-input"
                        :value="fontColor"
                        @input="setFontColor(($event.target as HTMLInputElement).value)"
                        title="Font Color"
                    />
                </div>

                <!-- Text Format -->
                <div class="toolbar-group">
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="format_bold"
                        @click="editor.chain().focus().toggleBold().run()"
                        :disabled="!editor.can().chain().focus().toggleBold().run()"
                        :class="{ 'is-active': editor.isActive('bold') }"
                        title="Bold"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="format_italic"
                        @click="editor.chain().focus().toggleItalic().run()"
                        :disabled="!editor.can().chain().focus().toggleItalic().run()"
                        :class="{ 'is-active': editor.isActive('italic') }"
                        title="Italic"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="format_underlined"
                        @click="editor.chain().focus().toggleUnderline().run()"
                        :disabled="!editor.can().chain().focus().toggleUnderline().run()"
                        :class="{ 'is-active': editor.isActive('underline') }"
                        title="Underline"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="strikethrough_s"
                        @click="editor.chain().focus().toggleStrike().run()"
                        :disabled="!editor.can().chain().focus().toggleStrike().run()"
                        :class="{ 'is-active': editor.isActive('strike') }"
                        title="Strikethrough"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="code"
                        @click="editor.chain().focus().toggleCode().run()"
                        :disabled="!editor.can().chain().focus().toggleCode().run()"
                        :class="{ 'is-active': editor.isActive('code') }"
                        title="Inline Code"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="superscript"
                        @click="editor.chain().focus().toggleSuperscript().run()"
                        :class="{ 'is-active': editor.isActive('superscript') }"
                        title="Superscript"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="subscript"
                        @click="editor.chain().focus().toggleSubscript().run()"
                        :class="{ 'is-active': editor.isActive('subscript') }"
                        title="Subscript"
                    />
                </div>

                <!-- Headings -->
                <div class="toolbar-group">
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        @click="editor.chain().focus().setParagraph().run()"
                        :class="{ 'is-active': editor.isActive('paragraph') }"
                        title="Paragraph"
                    >P</va-button>
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
                        title="Heading 1"
                    >H1</va-button>
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
                        title="Heading 2"
                    >H2</va-button>
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
                        title="Heading 3"
                    >H3</va-button>
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
                        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
                        title="Heading 4"
                    >H4</va-button>
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
                        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
                        title="Heading 5"
                    >H5</va-button>
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
                        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
                        title="Heading 6"
                    >H6</va-button>
                </div>

                <!-- Text Align -->
                <div class="toolbar-group">
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="format_align_left"
                        @click="editor.chain().focus().setTextAlign('left').run()"
                        :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
                        title="Align Left"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="format_align_center"
                        @click="editor.chain().focus().setTextAlign('center').run()"
                        :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
                        title="Align Center"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="format_align_right"
                        @click="editor.chain().focus().setTextAlign('right').run()"
                        :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
                        title="Align Right"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="format_align_justify"
                        @click="editor.chain().focus().setTextAlign('justify').run()"
                        :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
                        title="Justify"
                    />
                </div>

                <!-- Lists -->
                <div class="toolbar-group">
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="format_list_bulleted"
                        @click="editor.chain().focus().toggleBulletList().run()"
                        :class="{ 'is-active': editor.isActive('bulletList') }"
                        title="Bullet List"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="format_list_numbered"
                        @click="editor.chain().focus().toggleOrderedList().run()"
                        :class="{ 'is-active': editor.isActive('orderedList') }"
                        title="Ordered List"
                    />
                </div>

                <!-- Blocks -->
                <div class="toolbar-group">
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="data_object"
                        @click="editor.chain().focus().toggleCodeBlock().run()"
                        :class="{ 'is-active': editor.isActive('codeBlock') }"
                        title="Code Block"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="format_quote"
                        @click="editor.chain().focus().toggleBlockquote().run()"
                        :class="{ 'is-active': editor.isActive('blockquote') }"
                        title="Blockquote"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="horizontal_rule"
                        @click="editor.chain().focus().setHorizontalRule().run()"
                        title="Horizontal Rule"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="keyboard_return"
                        @click="editor.chain().focus().setHardBreak().run()"
                        title="Hard Break"
                    />
                </div>

                <!-- Links -->
                <div class="toolbar-group">
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="link"
                        @click="setLink()"
                        :class="{ 'is-active': editor.isActive('link') }"
                        title="Set Link"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="link_off"
                        @click="editor.chain().focus().unsetLink().run()"
                        :disabled="!editor.isActive('link')"
                        title="Remove Link"
                    />
                </div>

                <!-- Undo/Redo & Clear -->
                <div class="toolbar-group">
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="undo"
                        @click="editor.chain().focus().undo().run()"
                        :disabled="!editor.can().chain().focus().undo().run()"
                        title="Undo"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="redo"
                        @click="editor.chain().focus().redo().run()"
                        :disabled="!editor.can().chain().focus().redo().run()"
                        title="Redo"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="format_clear"
                        @click="editor.chain().focus().unsetAllMarks().run()"
                        title="Clear Formatting"
                    />
                </div>
            </div>
            <div class="editor">
                <editor-content class="ml-2" :editor="editor" />
            </div>
        </div>
    </va-collapse>
</template>

<style>
.settings-container {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 1rem;
}

.editor {
    border: 1px solid rgb(168, 157, 157);
    height: 200px;
    padding: 5px 10px;
    overflow: auto;
}

.editor .ml-2 {
    height: 100%;
}

.editor .tiptap.ProseMirror {
    height: 100%;
    outline: none;
}

.custom-ordered-list {
    list-style: decimal;
}

.custom-bullet-list {
    list-style: disc;
}

.tiptap h1 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.tiptap h2 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
}

.tiptap h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.tiptap h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
}

.tiptap h5 {
    font-size: 1.11rem;
    margin-bottom: 1rem;
}

.tiptap h6 {
    font-size: 0.9rem;
    margin-bottom: 1rem;
}

.custom-bold {
    font-weight: bold;
}

.custom-italic {
    font-weight: unset;
}

.custom-strike {
    font-weight: unset;
}

.custom-code {
    font-size: 0.9rem;
    padding: 0.25em;
    border-radius: 0.25em;
    background-color: rgba(97, 97, 97, 0.2);
    color: #616161;
}

.custom-code-block {
    background: #0d0d0d;
    color: #fff;
    font-family: "JetBrainsMono", monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
}

.custom-code-block code {
    color: inherit;
    padding: 0;
    background: none;
    font-size: 0.8rem;
}

.custom-blockquote {
    padding-left: 1rem;
    border-left: 3px solid rgba(#0d0d0d, 0.1);
}

.custom-horizontal-rule {
    border-top: 1px solid #68cef8;
}

.custom-underline {
    font-weight: unset;
}

.custom-link {
    color: #154EC2;
    text-decoration: underline;
    cursor: pointer;
}

.toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    padding: 0.5rem;
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
}

.toolbar-group {
    display: flex;
    gap: 2px;
    padding-right: 0.5rem;
    margin-right: 0.25rem;
    border-right: 1px solid #e5e7eb;
}

.toolbar-group:last-child {
    border-right: none;
    padding-right: 0;
    margin-right: 0;
}

.toolbar-btn {
    min-width: 28px !important;
    height: 28px !important;
    padding: 0 4px !important;
    border: 1px solid transparent !important;
    border-radius: 0.25rem !important;
    font-size: 0.7rem !important;
    font-weight: 600 !important;
}

.toolbar-btn:hover {
    background-color: #e5e7eb !important;
}

.is-active {
    background-color: #fff3e0 !important;
    border-color: rgb(236, 156, 29) !important;
    color: #c45e00 !important;
}

.toolbar-group--inputs {
    align-items: center;
    gap: 4px;
}

.toolbar-size-input {
    width: 45px;
    height: 26px;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    padding: 0 4px;
    font-size: 0.75rem;
    text-align: center;
    background: white;
}

.toolbar-size-input:focus {
    outline: none;
    border-color: rgb(236, 156, 29);
}

.toolbar-color-input {
    width: 26px;
    height: 26px;
    border: 1px solid #d1d5db;
    border-radius: 0.25rem;
    padding: 1px;
    cursor: pointer;
    background: white;
}

.toolbar-color-input::-webkit-color-swatch-wrapper {
    padding: 1px;
}

.toolbar-color-input::-webkit-color-swatch {
    border: none;
    border-radius: 2px;
}

.loading {
    height: 100%;
    padding: 50px;
    border-radius: 4px;
    margin-bottom: 1rem;
    background-color: var(--app-response-background);
}
</style>
