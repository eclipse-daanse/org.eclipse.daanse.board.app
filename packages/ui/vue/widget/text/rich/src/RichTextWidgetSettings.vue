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
import { inject, ref, watch, onMounted } from 'vue'
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
import { container } from 'org.eclipse.daanse.board.app.lib.core'
import { identifier as varIdentifier, type VariableRepository } from 'org.eclipse.daanse.board.app.lib.repository.variable'
import { VariableInput } from 'org.eclipse.daanse.board.app.ui.vue.variable.components'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'

// Extend OrderedList to support listStyleType attribute
const CustomOrderedList = OrderedList.extend({
    addAttributes() {
        return {
            ...this.parent?.(),
            listStyleType: {
                default: 'decimal',
                parseHTML: (element: HTMLElement) => element.style.listStyleType || 'decimal',
                renderHTML: (attributes: any) => {
                    return { style: `list-style-type: ${attributes.listStyleType || 'decimal'}` }
                },
            },
        }
    },
})

// Extend BulletList to support listStyleType attribute
const CustomBulletList = BulletList.extend({
    addAttributes() {
        return {
            ...this.parent?.(),
            listStyleType: {
                default: 'disc',
                parseHTML: (element: HTMLElement) => element.style.listStyleType || 'disc',
                renderHTML: (attributes: any) => {
                    return { style: `list-style-type: ${attributes.listStyleType || 'disc'}` }
                },
            },
        }
    },
})

const i18n:i18n|undefined = inject('i18n');
const t = (key:string)=>(i18n)?i18n.t(key):key;

const fontSize = ref('16')
const fontColor = ref('#000000')
const showOlStyleMenu = ref(false)
const showUlStyleMenu = ref(false)
const showVariableMenu = ref(false)
const showSizeVarMenu = ref(false)
const showColorVarMenu = ref(false)
const availableVariables = ref<{ name: string; value: any }[]>([])

onMounted(() => {
    try {
        const repo = container.get<VariableRepository>(varIdentifier)
        availableVariables.value = repo.getAllVariables().map(([name]) => {
            const v = repo.getVariable(name)
            return { name: v.name, value: v.value }
        })
    } catch (e) {
        console.warn('VariableRepository not available:', e)
    }
})

const setSizeVariable = (varName: string) => {
    try {
        const repo = container.get<VariableRepository>(varIdentifier)
        const variable = repo.getVariable(varName)
        if (variable && widgetSettings.value.fontSize) {
            widgetSettings.value.fontSize.setTo(variable)
        }
    } catch (e) { console.warn(e) }
    showSizeVarMenu.value = false
}

const clearSizeVariable = () => {
    if (widgetSettings.value.fontSize) {
        widgetSettings.value.fontSize.value = fontSize.value
    }
    showSizeVarMenu.value = false
}

const setColorVariable = (varName: string) => {
    try {
        const repo = container.get<VariableRepository>(varIdentifier)
        const variable = repo.getVariable(varName)
        if (variable && widgetSettings.value.fontColor) {
            widgetSettings.value.fontColor.setTo(variable)
        }
    } catch (e) { console.warn(e) }
    showColorVarMenu.value = false
}

const clearColorVariable = () => {
    if (widgetSettings.value.fontColor) {
        widgetSettings.value.fontColor.value = fontColor.value
    }
    showColorVarMenu.value = false
}

const insertVariable = (varName: string) => {
    if (!editor.value) return
    editor.value.chain().focus().insertContent(`{${varName}}`).run()
    showVariableMenu.value = false
}

const olStyles = [
    { label: '1, 2, 3', value: 'decimal' },
    { label: 'a, b, c', value: 'lower-alpha' },
    { label: 'A, B, C', value: 'upper-alpha' },
    { label: 'i, ii, iii', value: 'lower-roman' },
    { label: 'I, II, III', value: 'upper-roman' },
]

const ulStyles = [
    { label: '●', value: 'disc' },
    { label: '○', value: 'circle' },
    { label: '■', value: 'square' },
]

const setOrderedListStyle = (style: string) => {
    if (!editor.value) return
    if (!editor.value.isActive('orderedList')) {
        editor.value.chain().focus().toggleOrderedList().run()
    }
    editor.value.chain().focus()
        .updateAttributes('orderedList', { listStyleType: style })
        .run()
    showOlStyleMenu.value = false
}

const setUnorderedListStyle = (style: string) => {
    if (!editor.value) return
    if (!editor.value.isActive('bulletList')) {
        editor.value.chain().focus().toggleBulletList().run()
    }
    editor.value.chain().focus()
        .updateAttributes('bulletList', { listStyleType: style })
        .run()
    showUlStyleMenu.value = false
}

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

// Initialize fontSize/fontColor if missing (older configs)
if (!widgetSettings.value.fontSize) {
    widgetSettings.value.fontSize = new VariableWrapper<string>('16');
}
if (!widgetSettings.value.fontColor) {
    widgetSettings.value.fontColor = new VariableWrapper<string>('#000000');
}

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
        CustomOrderedList.configure({
            HTMLAttributes: {
                class: "custom-ordered-list",
            },
        }),
        CustomBulletList.configure({
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
                    <div class="toolbar-dropdown-wrapper">
                        <va-button
                            class="toolbar-btn toolbar-btn--var" size="small" preset="secondary"
                            icon="tune"
                            @click.stop="showSizeVarMenu = !showSizeVarMenu; showColorVarMenu = false; showOlStyleMenu = false; showUlStyleMenu = false; showVariableMenu = false"
                            :class="{ 'is-active': widgetSettings.fontSize?.isSet }"
                            title="Font Size Variable"
                        />
                        <div v-if="showSizeVarMenu" class="toolbar-dropdown-menu toolbar-dropdown-menu--wide">
                            <button class="toolbar-dropdown-item" @click="clearSizeVariable()">
                                <span class="var-name">Manual</span>
                            </button>
                            <button
                                v-for="v in availableVariables" :key="'fs-'+v.name"
                                class="toolbar-dropdown-item"
                                @click="setSizeVariable(v.name)"
                            >
                                <span class="var-name">{{ v.name }}</span>
                                <span class="var-value">{{ v.value }}</span>
                            </button>
                        </div>
                    </div>
                    <input
                        type="color"
                        class="toolbar-color-input"
                        :value="fontColor"
                        @input="setFontColor(($event.target as HTMLInputElement).value)"
                        title="Font Color"
                    />
                    <div class="toolbar-dropdown-wrapper">
                        <va-button
                            class="toolbar-btn toolbar-btn--var" size="small" preset="secondary"
                            icon="tune"
                            @click.stop="showColorVarMenu = !showColorVarMenu; showSizeVarMenu = false; showOlStyleMenu = false; showUlStyleMenu = false; showVariableMenu = false"
                            :class="{ 'is-active': widgetSettings.fontColor?.isSet }"
                            title="Font Color Variable"
                        />
                        <div v-if="showColorVarMenu" class="toolbar-dropdown-menu toolbar-dropdown-menu--wide">
                            <button class="toolbar-dropdown-item" @click="clearColorVariable()">
                                <span class="var-name">Manual</span>
                            </button>
                            <button
                                v-for="v in availableVariables" :key="'fc-'+v.name"
                                class="toolbar-dropdown-item"
                                @click="setColorVariable(v.name)"
                            >
                                <span class="var-name">{{ v.name }}</span>
                                <span class="var-value">{{ v.value }}</span>
                            </button>
                        </div>
                    </div>
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
                    <div class="toolbar-dropdown-wrapper">
                        <va-button
                            class="toolbar-btn" size="small" preset="secondary"
                            icon="format_list_bulleted"
                            @click="editor.chain().focus().toggleBulletList().run()"
                            :class="{ 'is-active': editor.isActive('bulletList') }"
                            title="Bullet List"
                        />
                        <button class="toolbar-dropdown-arrow"
                            @click.stop="showUlStyleMenu = !showUlStyleMenu; showOlStyleMenu = false"
                        >▾</button>
                        <div v-if="showUlStyleMenu" class="toolbar-dropdown-menu">
                            <button
                                v-for="s in ulStyles" :key="s.value"
                                class="toolbar-dropdown-item"
                                @click="setUnorderedListStyle(s.value)"
                            >{{ s.label }}</button>
                        </div>
                    </div>
                    <div class="toolbar-dropdown-wrapper">
                        <va-button
                            class="toolbar-btn" size="small" preset="secondary"
                            icon="format_list_numbered"
                            @click="editor.chain().focus().toggleOrderedList().run()"
                            :class="{ 'is-active': editor.isActive('orderedList') }"
                            title="Ordered List"
                        />
                        <button class="toolbar-dropdown-arrow"
                            @click.stop="showOlStyleMenu = !showOlStyleMenu; showUlStyleMenu = false"
                        >▾</button>
                        <div v-if="showOlStyleMenu" class="toolbar-dropdown-menu">
                            <button
                                v-for="s in olStyles" :key="s.value"
                                class="toolbar-dropdown-item"
                                @click="setOrderedListStyle(s.value)"
                            >{{ s.label }}</button>
                        </div>
                    </div>
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="format_indent_decrease"
                        @click="editor.chain().focus().liftListItem('listItem').run()"
                        :disabled="!editor.can().liftListItem('listItem')"
                        title="Outdent"
                    />
                    <va-button
                        class="toolbar-btn" size="small" preset="secondary"
                        icon="format_indent_increase"
                        @click="editor.chain().focus().sinkListItem('listItem').run()"
                        :disabled="!editor.can().sinkListItem('listItem')"
                        title="Indent"
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

                <!-- Variables -->
                <div class="toolbar-group">
                    <div class="toolbar-dropdown-wrapper">
                        <va-button
                            class="toolbar-btn" size="small" preset="secondary"
                            icon="data_array"
                            @click.stop="showVariableMenu = !showVariableMenu; showOlStyleMenu = false; showUlStyleMenu = false"
                            title="Insert Variable"
                        />
                        <button class="toolbar-dropdown-arrow"
                            @click.stop="showVariableMenu = !showVariableMenu; showOlStyleMenu = false; showUlStyleMenu = false"
                        >▾</button>
                        <div v-if="showVariableMenu" class="toolbar-dropdown-menu toolbar-dropdown-menu--wide">
                            <button
                                v-for="v in availableVariables" :key="v.name"
                                class="toolbar-dropdown-item"
                                @click="insertVariable(v.name)"
                            >
                                <span class="var-name">{{ v.name }}</span>
                                <span class="var-value">{{ v.value }}</span>
                            </button>
                            <div v-if="availableVariables.length === 0" class="toolbar-dropdown-empty">
                                No variables defined
                            </div>
                        </div>
                    </div>
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
    padding-left: 1.5rem;
}

.custom-bullet-list {
    padding-left: 1.5rem;
}

.tiptap ol {
    padding-left: 1.5rem;
}

.tiptap ul {
    padding-left: 1.5rem;
}

.tiptap li {
    display: list-item;
}

.tiptap ol ol, .tiptap ul ul, .tiptap ol ul, .tiptap ul ol {
    padding-left: 1.5rem;
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
    gap: 3px;
}

.toolbar-btn--var {
    min-width: 22px !important;
    height: 22px !important;
    padding: 0 2px !important;
    font-size: 0.6rem !important;
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

.toolbar-dropdown-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.toolbar-dropdown-arrow {
    width: 14px;
    height: 28px;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 0.6rem;
    color: #6b7280;
    padding: 0;
    line-height: 1;
}

.toolbar-dropdown-arrow:hover {
    color: #111827;
}

.toolbar-dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
    background: white;
    border: 1px solid #e5e7eb;
    border-radius: 0.375rem;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    padding: 0.25rem;
    min-width: 90px;
}

.toolbar-dropdown-item {
    display: block;
    width: 100%;
    padding: 0.35rem 0.5rem;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 0.8rem;
    text-align: left;
    border-radius: 0.2rem;
    white-space: nowrap;
}

.toolbar-dropdown-item:hover {
    background-color: #fff3e0;
    color: #c45e00;
}

.toolbar-dropdown-empty {
    padding: 0.5rem;
    color: #9ca3af;
    font-size: 0.75rem;
    font-style: italic;
    text-align: center;
}

.toolbar-dropdown-menu--wide {
    min-width: 180px;
}

.var-name {
    font-weight: 500;
}

.var-value {
    margin-left: 0.5rem;
    color: #9ca3af;
    font-size: 0.7rem;
}

.loading {
    height: 100%;
    padding: 50px;
    border-radius: 4px;
    margin-bottom: 1rem;
    background-color: var(--app-response-background);
}
</style>
