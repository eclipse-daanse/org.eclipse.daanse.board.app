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
import { ref, watch } from "vue";
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
// import { useI18n } from "vue-i18n";
import type { IRichTextEditorSettings } from "./index";

// const { t } = useI18n();
const t = (key:string) => key;
const widgetSettings = defineModel<IRichTextEditorSettings>({ required: true });

const opened = ref({
    widgetSection: false,
    storeSection: false,
});

const editor = useEditor({
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
    <va-collapse v-model="opened.widgetSection" :header="t('RichTextWidget.title')">
        <div class="settings-container">
            <div v-if="editor">
                <va-button class="editor-btn" @click="editor.chain().focus().toggleBold().run()"
                    :disabled="!editor.can().chain().focus().toggleBold().run()"
                    :class="{ 'is-active': editor.isActive('bold') }"
                >
                    {{ t("RichTextWidget.bold") }}
                </va-button>
                <va-button
                    class="editor-btn" @click="editor.chain().focus().toggleItalic().run()"
                    :disabled="!editor.can().chain().focus().toggleItalic().run()"
                    :class="{ 'is-active': editor.isActive('italic') }"
                >
                    {{ t("RichTextWidget.italic") }}
                </va-button>
                <va-button
                class="editor-btn"
                    @click="editor.chain().focus().toggleStrike().run()"
                    :disabled="!editor.can().chain().focus().toggleStrike().run()"
                    :class="{ 'is-active': editor.isActive('strike') }"
                >
                    {{ t("RichTextWidget.strike") }}
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().toggleUnderline().run()"
                    :disabled="!editor.can().chain().focus().toggleUnderline().run()"
                    :class="{ 'is-active': editor.isActive('underline') }"
                >
                    {{ t("RichTextWidget.underline") }}
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().toggleCode().run()"
                    :disabled="!editor.can().chain().focus().toggleCode().run()"
                    :class="{ 'is-active': editor.isActive('code') }"
                >
                    {{ t("RichTextWidget.code") }}
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().unsetAllMarks().run()"
                >
                    {{ t("RichTextWidget.clearMarks") }}
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().clearNodes().run()"
                >
                    {{ t("RichTextWidget.clearNodes") }}
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().setParagraph().run()"
                    :class="{ 'is-active': editor.isActive('paragraph') }"
                >
                    {{ t("RichTextWidget.paragraph") }}
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                    :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                    h1
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                    :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
                >
                    h2
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                    :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
                >
                    h3
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
                    :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
                >
                    h4
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
                    :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
                >
                    h5
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
                    :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
                >
                    h6
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().toggleBulletList().run()"
                    :class="{ 'is-active': editor.isActive('bulletList') }"
                >
                    {{ t("RichTextWidget.bulletList") }}
                </va-button>
                <va-button class="editor-btn"
                    @click="editor.chain().focus().toggleOrderedList().run()"
                    :class="{ 'is-active': editor.isActive('orderedList') }"
                >
                    {{ t("RichTextWidget.orderedList") }}
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().toggleCodeBlock().run()"
                    :class="{ 'is-active': editor.isActive('codeBlock') }"
                >
                    {{ t("RichTextWidget.codeBlock") }}
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().toggleBlockquote().run()"
                    :class="{ 'is-active': editor.isActive('blockquote') }"
                >
                    {{ t("RichTextWidget.blockQuote") }}
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().setHorizontalRule().run()"
                >
                    {{ t("RichTextWidget.horizontalRule") }}
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().setHardBreak().run()"
                >
                    {{ t("RichTextWidget.hardBreak") }}
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().undo().run()"
                    :disabled="!editor.can().chain().focus().undo().run()"
                >
                    {{ t("RichTextWidget.undo") }}
                </va-button>
                <va-button
                    class="editor-btn"
                    @click="editor.chain().focus().redo().run()"
                    :disabled="!editor.can().chain().focus().redo().run()"
                >
                    {{ t("RichTextWidget.redo") }}
                </va-button>
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

.editor-btn {
    margin: 0 4px 4px 0;
    border: 2px solid transparent;
}

.is-active {
    border: 2px solid rgb(22, 253, 22) !important;
}

.loading {
    height: 100%;
    padding: 50px;
    border-radius: 4px;
    margin-bottom: 1rem;
    background-color: var(--app-response-background);
}
</style>
