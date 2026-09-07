(function(){var i="ui.vue.widget.markdown",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="/**\n * easymde v2.20.0\n * Copyright Jeroen Akkerman\n * @link https://github.com/ionaru/easy-markdown-editor\n * @license MIT\n */.CodeMirror{font-family:monospace;height:300px;color:#000;direction:ltr}.CodeMirror-lines{padding:4px 0}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{padding:0 4px}.CodeMirror-gutter-filler,.CodeMirror-scrollbar-filler{background-color:#fff}.CodeMirror-gutters{border-right:1px solid #ddd;background-color:#f7f7f7;white-space:nowrap}.CodeMirror-linenumber{padding:0 3px 0 5px;min-width:20px;text-align:right;color:#999;white-space:nowrap}.CodeMirror-guttermarker{color:#000}.CodeMirror-guttermarker-subtle{color:#999}.CodeMirror-cursor{border-left:1px solid #000;border-right:none;width:0}.CodeMirror div.CodeMirror-secondarycursor{border-left:1px solid silver}.cm-fat-cursor .CodeMirror-cursor{width:auto;border:0!important;background:#7e7}.cm-fat-cursor div.CodeMirror-cursors{z-index:1}.cm-fat-cursor .CodeMirror-line::selection,.cm-fat-cursor .CodeMirror-line>span::selection,.cm-fat-cursor .CodeMirror-line>span>span::selection{background:0 0}.cm-fat-cursor .CodeMirror-line::-moz-selection,.cm-fat-cursor .CodeMirror-line>span::-moz-selection,.cm-fat-cursor .CodeMirror-line>span>span::-moz-selection{background:0 0}.cm-fat-cursor{caret-color:transparent}@-moz-keyframes blink{50%{background-color:transparent}}@-webkit-keyframes blink{50%{background-color:transparent}}@keyframes blink{50%{background-color:transparent}}.cm-tab{display:inline-block;text-decoration:inherit}.CodeMirror-rulers{position:absolute;inset:-50px 0 0;overflow:hidden}.CodeMirror-ruler{border-left:1px solid #ccc;top:0;bottom:0;position:absolute}.cm-s-default .cm-header{color:#00f}.cm-s-default .cm-quote{color:#090}.cm-negative{color:#d44}.cm-positive{color:#292}.cm-header,.cm-strong{font-weight:700}.cm-em{font-style:italic}.cm-link{text-decoration:underline}.cm-strikethrough{text-decoration:line-through}.cm-s-default .cm-keyword{color:#708}.cm-s-default .cm-atom{color:#219}.cm-s-default .cm-number{color:#164}.cm-s-default .cm-def{color:#00f}.cm-s-default .cm-variable-2{color:#05a}.cm-s-default .cm-type,.cm-s-default .cm-variable-3{color:#085}.cm-s-default .cm-comment{color:#a50}.cm-s-default .cm-string{color:#a11}.cm-s-default .cm-string-2{color:#f50}.cm-s-default .cm-meta,.cm-s-default .cm-qualifier{color:#555}.cm-s-default .cm-builtin{color:#30a}.cm-s-default .cm-bracket{color:#997}.cm-s-default .cm-tag{color:#170}.cm-s-default .cm-attribute{color:#00c}.cm-s-default .cm-hr{color:#999}.cm-s-default .cm-link{color:#00c}.cm-s-default .cm-error,.cm-invalidchar{color:red}.CodeMirror-composing{border-bottom:2px solid}div.CodeMirror span.CodeMirror-matchingbracket{color:#0b0}div.CodeMirror span.CodeMirror-nonmatchingbracket{color:#a22}.CodeMirror-matchingtag{background:#ff96004d}.CodeMirror-activeline-background{background:#e8f2ff}.CodeMirror{position:relative;overflow:hidden;background:#fff}.CodeMirror-scroll{overflow:scroll!important;margin-bottom:-50px;margin-right:-50px;padding-bottom:50px;height:100%;outline:0;position:relative;z-index:0}.CodeMirror-sizer{position:relative;border-right:50px solid transparent}.CodeMirror-gutter-filler,.CodeMirror-hscrollbar,.CodeMirror-scrollbar-filler,.CodeMirror-vscrollbar{position:absolute;z-index:6;display:none;outline:0}.CodeMirror-vscrollbar{right:0;top:0;overflow-x:hidden;overflow-y:scroll}.CodeMirror-hscrollbar{bottom:0;left:0;overflow-y:hidden;overflow-x:scroll}.CodeMirror-scrollbar-filler{right:0;bottom:0}.CodeMirror-gutter-filler{left:0;bottom:0}.CodeMirror-gutters{position:absolute;left:0;top:0;min-height:100%;z-index:3}.CodeMirror-gutter{white-space:normal;height:100%;display:inline-block;vertical-align:top;margin-bottom:-50px}.CodeMirror-gutter-wrapper{position:absolute;z-index:4;background:0 0!important;border:none!important}.CodeMirror-gutter-background{position:absolute;top:0;bottom:0;z-index:4}.CodeMirror-gutter-elt{position:absolute;cursor:default;z-index:4}.CodeMirror-gutter-wrapper ::selection{background-color:transparent}.CodeMirror-gutter-wrapper ::-moz-selection{background-color:transparent}.CodeMirror-lines{cursor:text;min-height:1px}.CodeMirror pre.CodeMirror-line,.CodeMirror pre.CodeMirror-line-like{-moz-border-radius:0;-webkit-border-radius:0;border-radius:0;border-width:0;background:0 0;font-family:inherit;font-size:inherit;margin:0;white-space:pre;word-wrap:normal;line-height:inherit;color:inherit;z-index:2;position:relative;overflow:visible;-webkit-tap-highlight-color:transparent;-webkit-font-variant-ligatures:contextual;font-variant-ligatures:contextual}.CodeMirror-wrap pre.CodeMirror-line,.CodeMirror-wrap pre.CodeMirror-line-like{word-wrap:break-word;white-space:pre-wrap;word-break:normal}.CodeMirror-linebackground{position:absolute;inset:0;z-index:0}.CodeMirror-linewidget{position:relative;z-index:2;padding:.1px}.CodeMirror-code{outline:0}.CodeMirror-gutter,.CodeMirror-gutters,.CodeMirror-linenumber,.CodeMirror-scroll,.CodeMirror-sizer{-moz-box-sizing:content-box;box-sizing:content-box}.CodeMirror-measure{position:absolute;width:100%;height:0;overflow:hidden;visibility:hidden}.CodeMirror-cursor{position:absolute;pointer-events:none}.CodeMirror-measure pre{position:static}div.CodeMirror-cursors{visibility:hidden;position:relative;z-index:3}div.CodeMirror-dragcursors,.CodeMirror-focused div.CodeMirror-cursors{visibility:visible}.CodeMirror-selected{background:#d9d9d9}.CodeMirror-focused .CodeMirror-selected{background:#d7d4f0}.CodeMirror-crosshair{cursor:crosshair}.CodeMirror-line::selection,.CodeMirror-line>span::selection,.CodeMirror-line>span>span::selection{background:#d7d4f0}.CodeMirror-line::-moz-selection,.CodeMirror-line>span::-moz-selection,.CodeMirror-line>span>span::-moz-selection{background:#d7d4f0}.cm-searching{background-color:#ffa;background-color:#ff06}.cm-force-border{padding-right:.1px}@media print{.CodeMirror div.CodeMirror-cursors{visibility:hidden}}.cm-tab-wrap-hack:after{content:\"\"}span.CodeMirror-selectedtext{background:0 0}.EasyMDEContainer{display:block}.CodeMirror-rtl pre{direction:rtl}.EasyMDEContainer.sided--no-fullscreen{display:flex;flex-direction:row;flex-wrap:wrap}.EasyMDEContainer .CodeMirror{box-sizing:border-box;height:auto;border:1px solid #ced4da;border-bottom-left-radius:4px;border-bottom-right-radius:4px;padding:10px;font:inherit;z-index:0;word-wrap:break-word}.EasyMDEContainer .CodeMirror-scroll{cursor:text}.EasyMDEContainer .CodeMirror-fullscreen{background:#fff;position:fixed!important;inset:50px 0 0;height:auto;z-index:8;border-right:none!important;border-bottom-right-radius:0!important}.EasyMDEContainer .CodeMirror-sided{width:50%!important}.EasyMDEContainer.sided--no-fullscreen .CodeMirror-sided{border-right:none!important;border-bottom-right-radius:0;position:relative;flex:1 1 auto}.EasyMDEContainer .CodeMirror-placeholder{opacity:.5}.EasyMDEContainer .CodeMirror-focused .CodeMirror-selected{background:#d9d9d9}.editor-toolbar{position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none;padding:9px 10px;border-top:1px solid #ced4da;border-left:1px solid #ced4da;border-right:1px solid #ced4da;border-top-left-radius:4px;border-top-right-radius:4px}.editor-toolbar.fullscreen{width:100%;height:50px;padding-top:10px;padding-bottom:10px;box-sizing:border-box;background:#fff;border:0;position:fixed;top:0;left:0;opacity:1;z-index:9}.editor-toolbar.fullscreen:before{width:20px;height:50px;background:-moz-linear-gradient(left,#fff 0,rgba(255,255,255,0) 100%);background:-webkit-gradient(linear,left top,right top,color-stop(0,#fff),color-stop(100%,rgba(255,255,255,0)));background:-webkit-linear-gradient(left,#fff 0,rgba(255,255,255,0) 100%);background:-o-linear-gradient(left,#fff 0,rgba(255,255,255,0) 100%);background:-ms-linear-gradient(left,#fff 0,rgba(255,255,255,0) 100%);background:linear-gradient(to right,#fff 0,#fff0);position:fixed;top:0;left:0;margin:0;padding:0}.editor-toolbar.fullscreen:after{width:20px;height:50px;background:-moz-linear-gradient(left,rgba(255,255,255,0) 0,#fff 100%);background:-webkit-gradient(linear,left top,right top,color-stop(0,rgba(255,255,255,0)),color-stop(100%,#fff));background:-webkit-linear-gradient(left,rgba(255,255,255,0) 0,#fff 100%);background:-o-linear-gradient(left,rgba(255,255,255,0) 0,#fff 100%);background:-ms-linear-gradient(left,rgba(255,255,255,0) 0,#fff 100%);background:linear-gradient(to right,#fff0 0,#fff);position:fixed;top:0;right:0;margin:0;padding:0}.EasyMDEContainer.sided--no-fullscreen .editor-toolbar{width:100%}.editor-toolbar .easymde-dropdown,.editor-toolbar button{background:0 0;display:inline-block;text-align:center;text-decoration:none!important;height:30px;margin:0;padding:0;border:1px solid transparent;border-radius:3px;cursor:pointer}.editor-toolbar button{font-weight:700;min-width:30px;padding:0 6px;white-space:nowrap}.editor-toolbar button.active,.editor-toolbar button:hover{background:#fcfcfc;border-color:#95a5a6}.editor-toolbar i.separator{display:inline-block;width:0;border-left:1px solid #d9d9d9;border-right:1px solid #fff;color:transparent;text-indent:-10px;margin:0 6px}.editor-toolbar button:after{font-family:Arial,Helvetica Neue,Helvetica,sans-serif;font-size:65%;vertical-align:text-bottom;position:relative;top:2px}.editor-toolbar button.heading-1:after{content:\"1\"}.editor-toolbar button.heading-2:after{content:\"2\"}.editor-toolbar button.heading-3:after{content:\"3\"}.editor-toolbar button.heading-bigger:after{content:\"▲\"}.editor-toolbar button.heading-smaller:after{content:\"▼\"}.editor-toolbar.disabled-for-preview button:not(.no-disable){opacity:.6;pointer-events:none}@media only screen and (max-width:700px){.editor-toolbar i.no-mobile{display:none}}.editor-statusbar{padding:8px 10px;font-size:12px;color:#959694;text-align:right}.EasyMDEContainer.sided--no-fullscreen .editor-statusbar{width:100%}.editor-statusbar span{display:inline-block;min-width:4em;margin-left:1em}.editor-statusbar .lines:before{content:\"lines: \"}.editor-statusbar .words:before{content:\"words: \"}.editor-statusbar .characters:before{content:\"characters: \"}.editor-preview-full{position:absolute;width:100%;height:100%;top:0;left:0;z-index:7;overflow:auto;display:none;box-sizing:border-box}.editor-preview-side{position:fixed;bottom:0;width:50%;top:50px;right:0;z-index:9;overflow:auto;display:none;box-sizing:border-box;border:1px solid #ddd;word-wrap:break-word}.editor-preview-active-side{display:block}.EasyMDEContainer.sided--no-fullscreen .editor-preview-active-side{flex:1 1 auto;height:auto;position:static}.editor-preview-active{display:block}.editor-preview{padding:10px;background:#fafafa}.editor-preview>p{margin-top:0}.editor-preview pre{background:#eee;margin-bottom:10px}.editor-preview table td,.editor-preview table th{border:1px solid #ddd;padding:5px}.cm-s-easymde .cm-tag{color:#63a35c}.cm-s-easymde .cm-attribute{color:#795da3}.cm-s-easymde .cm-string{color:#183691}.cm-s-easymde .cm-header-1{font-size:calc(1.375rem + 1.5vw)}.cm-s-easymde .cm-header-2{font-size:calc(1.325rem + .9vw)}.cm-s-easymde .cm-header-3{font-size:calc(1.3rem + .6vw)}.cm-s-easymde .cm-header-4{font-size:calc(1.275rem + .3vw)}.cm-s-easymde .cm-header-5{font-size:1.25rem}.cm-s-easymde .cm-header-6{font-size:1rem}.cm-s-easymde .cm-header-1,.cm-s-easymde .cm-header-2,.cm-s-easymde .cm-header-3,.cm-s-easymde .cm-header-4,.cm-s-easymde .cm-header-5,.cm-s-easymde .cm-header-6{margin-bottom:.5rem;line-height:1.2}.cm-s-easymde .cm-comment{background:#0000000d;border-radius:2px}.cm-s-easymde .cm-link{color:#7f8c8d}.cm-s-easymde .cm-url{color:#aab2b3}.cm-s-easymde .cm-quote{color:#7f8c8d;font-style:italic}.editor-toolbar .easymde-dropdown{position:relative;background:linear-gradient(to bottom right,#fff 0 84%,#333 50% 100%);border-radius:0;border:1px solid #fff}.editor-toolbar .easymde-dropdown:hover{background:linear-gradient(to bottom right,#fff 0 84%,#333 50% 100%)}.easymde-dropdown-content{display:block;visibility:hidden;position:absolute;background-color:#f9f9f9;box-shadow:0 8px 16px #0003;padding:8px;z-index:2;top:30px}.easymde-dropdown:active .easymde-dropdown-content,.easymde-dropdown:focus .easymde-dropdown-content,.easymde-dropdown:focus-within .easymde-dropdown-content{visibility:visible}.easymde-dropdown-content button{display:block}span[data-img-src]:after{content:\"\";background-image:var(--bg-image);display:block;max-height:100%;max-width:100%;background-size:contain;height:0;padding-top:var(--height);width:var(--width);background-repeat:no-repeat}.CodeMirror .cm-spell-error:not(.cm-url):not(.cm-comment):not(.cm-tag):not(.cm-word){background:#ff000026}.markdown-body{--base-size-4: .25rem;--base-size-8: .5rem;--base-size-16: 1rem;--base-size-24: 1.5rem;--base-size-40: 2.5rem;--base-text-weight-normal: 400;--base-text-weight-medium: 500;--base-text-weight-semibold: 600;--fontStack-monospace: ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace;--fgColor-accent: Highlight}@media(prefers-color-scheme:dark){.markdown-body,[data-theme=dark]{color-scheme:dark;--focus-outlineColor: #1f6feb;--fgColor-default: #f0f6fc;--fgColor-muted: #9198a1;--fgColor-accent: #4493f8;--fgColor-success: #3fb950;--fgColor-attention: #d29922;--fgColor-danger: #f85149;--fgColor-done: #ab7df8;--bgColor-default: #0d1117;--bgColor-muted: #151b23;--bgColor-neutral-muted: #656c7633;--bgColor-attention-muted: #bb800926;--borderColor-default: #3d444d;--borderColor-muted: #3d444db3;--borderColor-neutral-muted: #3d444db3;--borderColor-accent-emphasis: #1f6feb;--borderColor-success-emphasis: #238636;--borderColor-attention-emphasis: #9e6a03;--borderColor-danger-emphasis: #da3633;--borderColor-done-emphasis: #8957e5;--color-prettylights-syntax-comment: #9198a1;--color-prettylights-syntax-constant: #79c0ff;--color-prettylights-syntax-constant-other-reference-link: #a5d6ff;--color-prettylights-syntax-entity: #d2a8ff;--color-prettylights-syntax-storage-modifier-import: #f0f6fc;--color-prettylights-syntax-entity-tag: #7ee787;--color-prettylights-syntax-keyword: #ff7b72;--color-prettylights-syntax-string: #a5d6ff;--color-prettylights-syntax-variable: #ffa657;--color-prettylights-syntax-brackethighlighter-unmatched: #f85149;--color-prettylights-syntax-brackethighlighter-angle: #9198a1;--color-prettylights-syntax-invalid-illegal-text: #f0f6fc;--color-prettylights-syntax-invalid-illegal-bg: #8e1519;--color-prettylights-syntax-carriage-return-text: #f0f6fc;--color-prettylights-syntax-carriage-return-bg: #b62324;--color-prettylights-syntax-string-regexp: #7ee787;--color-prettylights-syntax-markup-list: #f2cc60;--color-prettylights-syntax-markup-heading: #1f6feb;--color-prettylights-syntax-markup-italic: #f0f6fc;--color-prettylights-syntax-markup-bold: #f0f6fc;--color-prettylights-syntax-markup-deleted-text: #ffdcd7;--color-prettylights-syntax-markup-deleted-bg: #67060c;--color-prettylights-syntax-markup-inserted-text: #aff5b4;--color-prettylights-syntax-markup-inserted-bg: #033a16;--color-prettylights-syntax-markup-changed-text: #ffdfb6;--color-prettylights-syntax-markup-changed-bg: #5a1e02;--color-prettylights-syntax-markup-ignored-text: #f0f6fc;--color-prettylights-syntax-markup-ignored-bg: #1158c7;--color-prettylights-syntax-meta-diff-range: #d2a8ff;--color-prettylights-syntax-sublimelinter-gutter-mark: #3d444d}}@media(prefers-color-scheme:light){.markdown-body,[data-theme=light]{color-scheme:light;--focus-outlineColor: #0969da;--fgColor-default: #1f2328;--fgColor-muted: #59636e;--fgColor-accent: #0969da;--fgColor-success: #1a7f37;--fgColor-attention: #9a6700;--fgColor-danger: #d1242f;--fgColor-done: #8250df;--bgColor-default: #ffffff;--bgColor-muted: #f6f8fa;--bgColor-neutral-muted: #818b981f;--bgColor-attention-muted: #fff8c5;--borderColor-default: #d1d9e0;--borderColor-muted: #d1d9e0b3;--borderColor-neutral-muted: #d1d9e0b3;--borderColor-accent-emphasis: #0969da;--borderColor-success-emphasis: #1a7f37;--borderColor-attention-emphasis: #9a6700;--borderColor-danger-emphasis: #cf222e;--borderColor-done-emphasis: #8250df;--color-prettylights-syntax-comment: #59636e;--color-prettylights-syntax-constant: #0550ae;--color-prettylights-syntax-constant-other-reference-link: #0a3069;--color-prettylights-syntax-entity: #6639ba;--color-prettylights-syntax-storage-modifier-import: #1f2328;--color-prettylights-syntax-entity-tag: #0550ae;--color-prettylights-syntax-keyword: #cf222e;--color-prettylights-syntax-string: #0a3069;--color-prettylights-syntax-variable: #953800;--color-prettylights-syntax-brackethighlighter-unmatched: #82071e;--color-prettylights-syntax-brackethighlighter-angle: #59636e;--color-prettylights-syntax-invalid-illegal-text: #f6f8fa;--color-prettylights-syntax-invalid-illegal-bg: #82071e;--color-prettylights-syntax-carriage-return-text: #f6f8fa;--color-prettylights-syntax-carriage-return-bg: #cf222e;--color-prettylights-syntax-string-regexp: #116329;--color-prettylights-syntax-markup-list: #3b2300;--color-prettylights-syntax-markup-heading: #0550ae;--color-prettylights-syntax-markup-italic: #1f2328;--color-prettylights-syntax-markup-bold: #1f2328;--color-prettylights-syntax-markup-deleted-text: #82071e;--color-prettylights-syntax-markup-deleted-bg: #ffebe9;--color-prettylights-syntax-markup-inserted-text: #116329;--color-prettylights-syntax-markup-inserted-bg: #dafbe1;--color-prettylights-syntax-markup-changed-text: #953800;--color-prettylights-syntax-markup-changed-bg: #ffd8b5;--color-prettylights-syntax-markup-ignored-text: #d1d9e0;--color-prettylights-syntax-markup-ignored-bg: #0550ae;--color-prettylights-syntax-meta-diff-range: #8250df;--color-prettylights-syntax-sublimelinter-gutter-mark: #818b98}}.markdown-body{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;margin:0;color:var(--fgColor-default);background-color:var(--bgColor-default);font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Noto Sans,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\";font-size:16px;line-height:1.5;word-wrap:break-word}.markdown-body .octicon{display:inline-block;fill:currentColor;vertical-align:text-bottom}.markdown-body h1:hover .anchor .octicon-link:before,.markdown-body h2:hover .anchor .octicon-link:before,.markdown-body h3:hover .anchor .octicon-link:before,.markdown-body h4:hover .anchor .octicon-link:before,.markdown-body h5:hover .anchor .octicon-link:before,.markdown-body h6:hover .anchor .octicon-link:before{width:16px;height:16px;content:\" \";display:inline-block;background-color:currentColor;-webkit-mask-image:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\");mask-image:url(\"data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' version='1.1' aria-hidden='true'><path fill-rule='evenodd' d='M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z'></path></svg>\")}.markdown-body details,.markdown-body figcaption,.markdown-body figure{display:block}.markdown-body summary{display:list-item}.markdown-body [hidden]{display:none!important}.markdown-body a{background-color:transparent;color:var(--fgColor-accent);text-decoration:none}.markdown-body abbr[title]{border-bottom:none;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}.markdown-body b,.markdown-body strong{font-weight:var(--base-text-weight-semibold, 600)}.markdown-body dfn{font-style:italic}.markdown-body h1{margin:.67em 0;font-weight:var(--base-text-weight-semibold, 600);padding-bottom:.3em;font-size:2em;border-bottom:1px solid var(--borderColor-muted)}.markdown-body mark{background-color:var(--bgColor-attention-muted);color:var(--fgColor-default)}.markdown-body small{font-size:90%}.markdown-body sub,.markdown-body sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}.markdown-body sub{bottom:-.25em}.markdown-body sup{top:-.5em}.markdown-body img{border-style:none;max-width:100%;box-sizing:content-box}.markdown-body code,.markdown-body kbd,.markdown-body pre,.markdown-body samp{font-family:monospace;font-size:1em}.markdown-body figure{margin:1em var(--base-size-40)}.markdown-body hr{box-sizing:content-box;overflow:hidden;background:transparent;border-bottom:1px solid var(--borderColor-muted);height:.25em;padding:0;margin:var(--base-size-24) 0;background-color:var(--borderColor-default);border:0}.markdown-body input{font:inherit;margin:0;overflow:visible;font-family:inherit;font-size:inherit;line-height:inherit}.markdown-body [type=button],.markdown-body [type=reset],.markdown-body [type=submit]{-webkit-appearance:button;appearance:button}.markdown-body [type=checkbox],.markdown-body [type=radio]{box-sizing:border-box;padding:0}.markdown-body [type=number]::-webkit-inner-spin-button,.markdown-body [type=number]::-webkit-outer-spin-button{height:auto}.markdown-body [type=search]::-webkit-search-cancel-button,.markdown-body [type=search]::-webkit-search-decoration{-webkit-appearance:none;appearance:none}.markdown-body ::-webkit-input-placeholder{color:inherit;opacity:.54}.markdown-body ::-webkit-file-upload-button{-webkit-appearance:button;appearance:button;font:inherit}.markdown-body a:hover{text-decoration:underline}.markdown-body ::placeholder{color:var(--fgColor-muted);opacity:1}.markdown-body hr:before{display:table;content:\"\"}.markdown-body hr:after{display:table;clear:both;content:\"\"}.markdown-body table{border-spacing:0;border-collapse:collapse;display:block;width:max-content;max-width:100%;overflow:auto;font-variant:tabular-nums}.markdown-body td,.markdown-body th{padding:0}.markdown-body details summary{cursor:pointer}.markdown-body a:focus,.markdown-body [role=button]:focus,.markdown-body input[type=radio]:focus,.markdown-body input[type=checkbox]:focus{outline:2px solid var(--focus-outlineColor);outline-offset:-2px;box-shadow:none}.markdown-body a:focus:not(:focus-visible),.markdown-body [role=button]:focus:not(:focus-visible),.markdown-body input[type=radio]:focus:not(:focus-visible),.markdown-body input[type=checkbox]:focus:not(:focus-visible){outline:solid 1px transparent}.markdown-body a:focus-visible,.markdown-body [role=button]:focus-visible,.markdown-body input[type=radio]:focus-visible,.markdown-body input[type=checkbox]:focus-visible{outline:2px solid var(--focus-outlineColor);outline-offset:-2px;box-shadow:none}.markdown-body a:not([class]):focus,.markdown-body a:not([class]):focus-visible,.markdown-body input[type=radio]:focus,.markdown-body input[type=radio]:focus-visible,.markdown-body input[type=checkbox]:focus,.markdown-body input[type=checkbox]:focus-visible{outline-offset:0}.markdown-body kbd{display:inline-block;padding:var(--base-size-4);font:11px var(--fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace);line-height:10px;color:var(--fgColor-default);vertical-align:middle;background-color:var(--bgColor-muted);border:solid 1px var(--borderColor-neutral-muted);border-bottom-color:var(--borderColor-neutral-muted);border-radius:6px;box-shadow:inset 0 -1px 0 var(--borderColor-neutral-muted)}.markdown-body h1,.markdown-body h2,.markdown-body h3,.markdown-body h4,.markdown-body h5,.markdown-body h6{margin-top:var(--base-size-24);margin-bottom:var(--base-size-16);font-weight:var(--base-text-weight-semibold, 600);line-height:1.25}.markdown-body h2{font-weight:var(--base-text-weight-semibold, 600);padding-bottom:.3em;font-size:1.5em;border-bottom:1px solid var(--borderColor-muted)}.markdown-body h3{font-weight:var(--base-text-weight-semibold, 600);font-size:1.25em}.markdown-body h4{font-weight:var(--base-text-weight-semibold, 600);font-size:1em}.markdown-body h5{font-weight:var(--base-text-weight-semibold, 600);font-size:.875em}.markdown-body h6{font-weight:var(--base-text-weight-semibold, 600);font-size:.85em;color:var(--fgColor-muted)}.markdown-body p{margin-top:0;margin-bottom:10px}.markdown-body blockquote{margin:0;padding:0 1em;color:var(--fgColor-muted);border-left:.25em solid var(--borderColor-default)}.markdown-body ul,.markdown-body ol{margin-top:0;margin-bottom:0;padding-left:2em}.markdown-body ol ol,.markdown-body ul ol{list-style-type:lower-roman}.markdown-body ul ul ol,.markdown-body ul ol ol,.markdown-body ol ul ol,.markdown-body ol ol ol{list-style-type:lower-alpha}.markdown-body dd{margin-left:0}.markdown-body tt,.markdown-body code,.markdown-body samp{font-family:var(--fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace);font-size:12px}.markdown-body pre{margin-top:0;margin-bottom:0;font-family:var(--fontStack-monospace, ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace);font-size:12px;word-wrap:normal}.markdown-body .octicon{display:inline-block;overflow:visible!important;vertical-align:text-bottom;fill:currentColor}.markdown-body input::-webkit-outer-spin-button,.markdown-body input::-webkit-inner-spin-button{margin:0;appearance:none}.markdown-body .mr-2{margin-right:var(--base-size-8, 8px)!important}.markdown-body:before{display:table;content:\"\"}.markdown-body:after{display:table;clear:both;content:\"\"}.markdown-body>*:first-child{margin-top:0!important}.markdown-body>*:last-child{margin-bottom:0!important}.markdown-body a:not([href]){color:inherit;text-decoration:none}.markdown-body .absent{color:var(--fgColor-danger)}.markdown-body .anchor{float:left;padding-right:var(--base-size-4);margin-left:-20px;line-height:1}.markdown-body .anchor:focus{outline:none}.markdown-body p,.markdown-body blockquote,.markdown-body ul,.markdown-body ol,.markdown-body dl,.markdown-body table,.markdown-body pre,.markdown-body details{margin-top:0;margin-bottom:var(--base-size-16)}.markdown-body blockquote>:first-child{margin-top:0}.markdown-body blockquote>:last-child{margin-bottom:0}.markdown-body h1 .octicon-link,.markdown-body h2 .octicon-link,.markdown-body h3 .octicon-link,.markdown-body h4 .octicon-link,.markdown-body h5 .octicon-link,.markdown-body h6 .octicon-link{color:var(--fgColor-default);vertical-align:middle;visibility:hidden}.markdown-body h1:hover .anchor,.markdown-body h2:hover .anchor,.markdown-body h3:hover .anchor,.markdown-body h4:hover .anchor,.markdown-body h5:hover .anchor,.markdown-body h6:hover .anchor{text-decoration:none}.markdown-body h1:hover .anchor .octicon-link,.markdown-body h2:hover .anchor .octicon-link,.markdown-body h3:hover .anchor .octicon-link,.markdown-body h4:hover .anchor .octicon-link,.markdown-body h5:hover .anchor .octicon-link,.markdown-body h6:hover .anchor .octicon-link{visibility:visible}.markdown-body h1 tt,.markdown-body h1 code,.markdown-body h2 tt,.markdown-body h2 code,.markdown-body h3 tt,.markdown-body h3 code,.markdown-body h4 tt,.markdown-body h4 code,.markdown-body h5 tt,.markdown-body h5 code,.markdown-body h6 tt,.markdown-body h6 code{padding:0 .2em;font-size:inherit}.markdown-body summary h1,.markdown-body summary h2,.markdown-body summary h3,.markdown-body summary h4,.markdown-body summary h5,.markdown-body summary h6{display:inline-block}.markdown-body summary h1 .anchor,.markdown-body summary h2 .anchor,.markdown-body summary h3 .anchor,.markdown-body summary h4 .anchor,.markdown-body summary h5 .anchor,.markdown-body summary h6 .anchor{margin-left:-40px}.markdown-body summary h1,.markdown-body summary h2{padding-bottom:0;border-bottom:0}.markdown-body ul.no-list,.markdown-body ol.no-list{padding:0;list-style-type:none}.markdown-body ol[type=\"a s\"]{list-style-type:lower-alpha}.markdown-body ol[type=\"A s\"]{list-style-type:upper-alpha}.markdown-body ol[type=\"i s\"]{list-style-type:lower-roman}.markdown-body ol[type=\"I s\"]{list-style-type:upper-roman}.markdown-body ol[type=\"1\"]{list-style-type:decimal}.markdown-body div>ol:not([type]){list-style-type:decimal}.markdown-body ul ul,.markdown-body ul ol,.markdown-body ol ol,.markdown-body ol ul{margin-top:0;margin-bottom:0}.markdown-body li>p{margin-top:var(--base-size-16)}.markdown-body li+li{margin-top:.25em}.markdown-body dl{padding:0}.markdown-body dl dt{padding:0;margin-top:var(--base-size-16);font-size:1em;font-style:italic;font-weight:var(--base-text-weight-semibold, 600)}.markdown-body dl dd{padding:0 var(--base-size-16);margin-bottom:var(--base-size-16)}.markdown-body table th{font-weight:var(--base-text-weight-semibold, 600)}.markdown-body table th,.markdown-body table td{padding:6px 13px;border:1px solid var(--borderColor-default)}.markdown-body table td>:last-child{margin-bottom:0}.markdown-body table tr{background-color:var(--bgColor-default);border-top:1px solid var(--borderColor-muted)}.markdown-body table tr:nth-child(2n){background-color:var(--bgColor-muted)}.markdown-body table img{background-color:transparent}.markdown-body img[align=right]{padding-left:20px}.markdown-body img[align=left]{padding-right:20px}.markdown-body .emoji{max-width:none;vertical-align:text-top;background-color:transparent}.markdown-body span.frame{display:block;overflow:hidden}.markdown-body span.frame>span{display:block;float:left;width:auto;padding:7px;margin:13px 0 0;overflow:hidden;border:1px solid var(--borderColor-default)}.markdown-body span.frame span img{display:block;float:left}.markdown-body span.frame span span{display:block;padding:5px 0 0;clear:both;color:var(--fgColor-default)}.markdown-body span.align-center{display:block;overflow:hidden;clear:both}.markdown-body span.align-center>span{display:block;margin:13px auto 0;overflow:hidden;text-align:center}.markdown-body span.align-center span img{margin:0 auto;text-align:center}.markdown-body span.align-right{display:block;overflow:hidden;clear:both}.markdown-body span.align-right>span{display:block;margin:13px 0 0;overflow:hidden;text-align:right}.markdown-body span.align-right span img{margin:0;text-align:right}.markdown-body span.float-left{display:block;float:left;margin-right:13px;overflow:hidden}.markdown-body span.float-left span{margin:13px 0 0}.markdown-body span.float-right{display:block;float:right;margin-left:13px;overflow:hidden}.markdown-body span.float-right>span{display:block;margin:13px auto 0;overflow:hidden;text-align:right}.markdown-body code,.markdown-body tt{padding:.2em .4em;margin:0;font-size:85%;white-space:break-spaces;background-color:var(--bgColor-neutral-muted);border-radius:6px}.markdown-body code br,.markdown-body tt br{display:none}.markdown-body del code{text-decoration:inherit}.markdown-body samp{font-size:85%}.markdown-body pre code{font-size:100%}.markdown-body pre>code{padding:0;margin:0;word-break:normal;white-space:pre;background:transparent;border:0}.markdown-body .highlight{margin-bottom:var(--base-size-16)}.markdown-body .highlight pre{margin-bottom:0;word-break:normal}.markdown-body .highlight pre,.markdown-body pre{padding:var(--base-size-16);overflow:auto;font-size:85%;line-height:1.45;color:var(--fgColor-default);background-color:var(--bgColor-muted);border-radius:6px}.markdown-body pre code,.markdown-body pre tt{display:inline;max-width:auto;padding:0;margin:0;overflow:visible;line-height:inherit;word-wrap:normal;background-color:transparent;border:0}.markdown-body .csv-data td,.markdown-body .csv-data th{padding:5px;overflow:hidden;font-size:12px;line-height:1;text-align:left;white-space:nowrap}.markdown-body .csv-data .blob-num{padding:10px var(--base-size-8) 9px;text-align:right;background:var(--bgColor-default);border:0}.markdown-body .csv-data tr{border-top:0}.markdown-body .csv-data th{font-weight:var(--base-text-weight-semibold, 600);background:var(--bgColor-muted);border-top:0}.markdown-body [data-footnote-ref]:before{content:\"[\"}.markdown-body [data-footnote-ref]:after{content:\"]\"}.markdown-body .footnotes{font-size:12px;color:var(--fgColor-muted);border-top:1px solid var(--borderColor-default)}.markdown-body .footnotes ol{padding-left:var(--base-size-16)}.markdown-body .footnotes ol ul{display:inline-block;padding-left:var(--base-size-16);margin-top:var(--base-size-16)}.markdown-body .footnotes li{position:relative}.markdown-body .footnotes li:target:before{position:absolute;top:calc(var(--base-size-8)*-1);right:calc(var(--base-size-8)*-1);bottom:calc(var(--base-size-8)*-1);left:calc(var(--base-size-24)*-1);pointer-events:none;content:\"\";border:2px solid var(--borderColor-accent-emphasis);border-radius:6px}.markdown-body .footnotes li:target{color:var(--fgColor-default)}.markdown-body .footnotes .data-footnote-backref g-emoji{font-family:monospace}.markdown-body body:has(:modal){padding-right:var(--dialog-scrollgutter)!important}.markdown-body .pl-c{color:var(--color-prettylights-syntax-comment)}.markdown-body .pl-c1,.markdown-body .pl-s .pl-v{color:var(--color-prettylights-syntax-constant)}.markdown-body .pl-e,.markdown-body .pl-en{color:var(--color-prettylights-syntax-entity)}.markdown-body .pl-smi,.markdown-body .pl-s .pl-s1{color:var(--color-prettylights-syntax-storage-modifier-import)}.markdown-body .pl-ent{color:var(--color-prettylights-syntax-entity-tag)}.markdown-body .pl-k{color:var(--color-prettylights-syntax-keyword)}.markdown-body .pl-s,.markdown-body .pl-pds,.markdown-body .pl-s .pl-pse .pl-s1,.markdown-body .pl-sr,.markdown-body .pl-sr .pl-cce,.markdown-body .pl-sr .pl-sre,.markdown-body .pl-sr .pl-sra{color:var(--color-prettylights-syntax-string)}.markdown-body .pl-v,.markdown-body .pl-smw{color:var(--color-prettylights-syntax-variable)}.markdown-body .pl-bu{color:var(--color-prettylights-syntax-brackethighlighter-unmatched)}.markdown-body .pl-ii{color:var(--color-prettylights-syntax-invalid-illegal-text);background-color:var(--color-prettylights-syntax-invalid-illegal-bg)}.markdown-body .pl-c2{color:var(--color-prettylights-syntax-carriage-return-text);background-color:var(--color-prettylights-syntax-carriage-return-bg)}.markdown-body .pl-sr .pl-cce{font-weight:700;color:var(--color-prettylights-syntax-string-regexp)}.markdown-body .pl-ml{color:var(--color-prettylights-syntax-markup-list)}.markdown-body .pl-mh,.markdown-body .pl-mh .pl-en,.markdown-body .pl-ms{font-weight:700;color:var(--color-prettylights-syntax-markup-heading)}.markdown-body .pl-mi{font-style:italic;color:var(--color-prettylights-syntax-markup-italic)}.markdown-body .pl-mb{font-weight:700;color:var(--color-prettylights-syntax-markup-bold)}.markdown-body .pl-md{color:var(--color-prettylights-syntax-markup-deleted-text);background-color:var(--color-prettylights-syntax-markup-deleted-bg)}.markdown-body .pl-mi1{color:var(--color-prettylights-syntax-markup-inserted-text);background-color:var(--color-prettylights-syntax-markup-inserted-bg)}.markdown-body .pl-mc{color:var(--color-prettylights-syntax-markup-changed-text);background-color:var(--color-prettylights-syntax-markup-changed-bg)}.markdown-body .pl-mi2{color:var(--color-prettylights-syntax-markup-ignored-text);background-color:var(--color-prettylights-syntax-markup-ignored-bg)}.markdown-body .pl-mdr{font-weight:700;color:var(--color-prettylights-syntax-meta-diff-range)}.markdown-body .pl-ba{color:var(--color-prettylights-syntax-brackethighlighter-angle)}.markdown-body .pl-sg{color:var(--color-prettylights-syntax-sublimelinter-gutter-mark)}.markdown-body .pl-corl{text-decoration:underline;color:var(--color-prettylights-syntax-constant-other-reference-link)}.markdown-body [role=button]:focus:not(:focus-visible),.markdown-body [role=tabpanel][tabindex=\"0\"]:focus:not(:focus-visible),.markdown-body button:focus:not(:focus-visible),.markdown-body summary:focus:not(:focus-visible),.markdown-body a:focus:not(:focus-visible){outline:none;box-shadow:none}.markdown-body [tabindex=\"0\"]:focus:not(:focus-visible),.markdown-body details-dialog:focus:not(:focus-visible){outline:none}.markdown-body g-emoji{display:inline-block;min-width:1ch;font-family:\"Apple Color Emoji\",\"Segoe UI Emoji\",Segoe UI Symbol;font-size:1em;font-style:normal!important;font-weight:var(--base-text-weight-normal, 400);line-height:1;vertical-align:-.075em}.markdown-body g-emoji img{width:1em;height:1em}.markdown-body .task-list-item{list-style-type:none}.markdown-body .task-list-item label{font-weight:var(--base-text-weight-normal, 400)}.markdown-body .task-list-item.enabled label{cursor:pointer}.markdown-body .task-list-item+.task-list-item{margin-top:var(--base-size-4)}.markdown-body .task-list-item .handle{display:none}.markdown-body .task-list-item-checkbox{margin:0 .2em .25em -1.4em;vertical-align:middle}.markdown-body ul:dir(rtl) .task-list-item-checkbox{margin:0 -1.6em .25em .2em}.markdown-body ol:dir(rtl) .task-list-item-checkbox{margin:0 -1.6em .25em .2em}.markdown-body .contains-task-list:hover .task-list-item-convert-container,.markdown-body .contains-task-list:focus-within .task-list-item-convert-container{display:block;width:auto;height:24px;overflow:visible;clip:auto}.markdown-body ::-webkit-calendar-picker-indicator{filter:invert(50%)}.markdown-body .markdown-alert{padding:var(--base-size-8) var(--base-size-16);margin-bottom:var(--base-size-16);color:inherit;border-left:.25em solid var(--borderColor-default)}.markdown-body .markdown-alert>:first-child{margin-top:0}.markdown-body .markdown-alert>:last-child{margin-bottom:0}.markdown-body .markdown-alert .markdown-alert-title{display:flex;font-weight:var(--base-text-weight-medium, 500);align-items:center;line-height:1}.markdown-body .markdown-alert.markdown-alert-note{border-left-color:var(--borderColor-accent-emphasis)}.markdown-body .markdown-alert.markdown-alert-note .markdown-alert-title{color:var(--fgColor-accent)}.markdown-body .markdown-alert.markdown-alert-important{border-left-color:var(--borderColor-done-emphasis)}.markdown-body .markdown-alert.markdown-alert-important .markdown-alert-title{color:var(--fgColor-done)}.markdown-body .markdown-alert.markdown-alert-warning{border-left-color:var(--borderColor-attention-emphasis)}.markdown-body .markdown-alert.markdown-alert-warning .markdown-alert-title{color:var(--fgColor-attention)}.markdown-body .markdown-alert.markdown-alert-tip{border-left-color:var(--borderColor-success-emphasis)}.markdown-body .markdown-alert.markdown-alert-tip .markdown-alert-title{color:var(--fgColor-success)}.markdown-body .markdown-alert.markdown-alert-caution{border-left-color:var(--borderColor-danger-emphasis)}.markdown-body .markdown-alert.markdown-alert-caution .markdown-alert-title{color:var(--fgColor-danger)}.markdown-body>*:first-child>.heading-element:first-child{margin-top:0!important}.markdown-body .highlight pre:has(+.zeroclipboard-container){min-height:52px}.CodeMirror{height:100%!important;width:100%}.EasyMDEContainer{height:100%;width:100%}.markdown-wrapper[data-v-73f402b4]{width:100%;height:100%}.settings_container[data-v-23d61fea]{display:flex;flex-direction:column;gap:.25rem;padding:.5rem}\n";})();
import { WidgetActionInterfaceImpl as pf, EVENT_ACTIONS_REGISTRY as gf, PayloadImpl as va, EVENT_REGISTRY_ID as vf, EVENT_ACTIONS_REGISTRY_ID as mf } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as yf, deactivate as xf, component as Df, inject as kl } from "@eclipse-daanse/tsm";
import { defineComponent as ru, mergeModels as bf, useModel as nu, toRefs as Cf, inject as Sl, ref as ba, onUnmounted as wf, onMounted as iu, watch as kf, createElementBlock as au, openBlock as ou, withModifiers as Sf, createElementVNode as lu, toDisplayString as Ff } from "vue";
import { useRoute as Af } from "vue-router";
import { WidgetAction as gi } from "org.eclipse.daanse.board.app.lib.events";
import { WIDGET_SERVICE_ID as Lf } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Ef } = __tsm__.require("org.eclipse.daanse.board.app.lib.core"), Tf = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2081C22.5%2077.6863%2025.1863%2075%2028.5%2075H76.5C79.8137%2075%2082.5%2077.6863%2082.5%2081V84C82.5%2087.3137%2079.8137%2090%2076.5%2090H28.5C25.1863%2090%2022.5%2087.3137%2022.5%2084V81Z'%20fill='%23606060'/%3e%3cpath%20d='M22.5%2058.5C22.5%2055.1863%2025.1863%2052.5%2028.5%2052.5H91.5C94.8137%2052.5%2097.5%2055.1863%2097.5%2058.5V61.5C97.5%2064.8137%2094.8137%2067.5%2091.5%2067.5H28.5C25.1863%2067.5%2022.5%2064.8137%2022.5%2061.5V58.5Z'%20fill='%23606060'/%3e%3cpath%20d='M43.5%2036C43.5%2032.6863%2046.1863%2030%2049.5%2030H91.5C94.8137%2030%2097.5%2032.6863%2097.5%2036V39C97.5%2042.3137%2094.8137%2045%2091.5%2045H49.5C46.1863%2045%2043.5%2042.3137%2043.5%2039V36Z'%20fill='%23606060'/%3e%3cpath%20d='M24.0287%2045.189C23.5947%2045.189%2023.2307%2045.091%2022.9367%2044.895C22.6427%2044.685%2022.4607%2044.405%2022.3907%2044.055C22.3207%2043.691%2022.3837%2043.285%2022.5797%2042.837L27.8087%2031.581C28.0607%2031.035%2028.3687%2030.636%2028.7327%2030.384C29.1107%2030.132%2029.5377%2030.006%2030.0137%2030.006C30.4897%2030.006%2030.9027%2030.132%2031.2527%2030.384C31.6167%2030.636%2031.9317%2031.035%2032.1977%2031.581L37.4267%2042.837C37.6507%2043.285%2037.7277%2043.691%2037.6577%2044.055C37.6017%2044.419%2037.4267%2044.699%2037.1327%2044.895C36.8527%2045.091%2036.5027%2045.189%2036.0827%2045.189C35.5227%2045.189%2035.0887%2045.063%2034.7807%2044.811C34.4867%2044.559%2034.2207%2044.153%2033.9827%2043.593L32.8487%2040.926L34.3187%2041.997H25.6667L27.1577%2040.926L26.0237%2043.593C25.7717%2044.153%2025.5127%2044.559%2025.2467%2044.811C24.9807%2045.063%2024.5747%2045.189%2024.0287%2045.189ZM29.9717%2034.227L27.5357%2040.044L26.9477%2039.036H33.0587L32.4707%2040.044L30.0137%2034.227H29.9717Z'%20fill='%23606060'/%3e%3c/svg%3e";
var Bf = Object.defineProperty, Mf = Object.getOwnPropertyDescriptor, vi = (ae, le, D, P) => {
  for (var S = Mf(le, D), N = ae.length - 1, O; N >= 0; N--)
    (O = ae[N]) && (S = O(le, D, S) || S);
  return S && Bf(le, D, S), S;
};
class en extends pf {
  scrollToTop() {
    throw new Error("scrollToTop not implemented");
  }
  scrollToHash(le) {
    throw new Error("scrollToHash not implemented");
  }
  refresh() {
    throw new Error("refresh not implemented");
  }
  copyContent() {
    throw new Error("copyContent not implemented");
  }
}
vi([
  gi({ eventType: "markdown.scrollToTop" })
], en.prototype, "scrollToTop");
vi([
  gi({ eventType: "markdown.scrollToHash" })
], en.prototype, "scrollToHash");
vi([
  gi({ eventType: "markdown.refresh" })
], en.prototype, "refresh");
vi([
  gi({ eventType: "markdown.copyContent" })
], en.prototype, "copyContent");
function If(ae) {
  return ae && ae.__esModule && Object.prototype.hasOwnProperty.call(ae, "default") ? ae.default : ae;
}
function Of(ae) {
  if (Object.prototype.hasOwnProperty.call(ae, "__esModule")) return ae;
  var le = ae.default;
  if (typeof le == "function") {
    var D = function P() {
      return this instanceof P ? Reflect.construct(le, arguments, this.constructor) : le.apply(this, arguments);
    };
    D.prototype = le.prototype;
  } else D = {};
  return Object.defineProperty(D, "__esModule", { value: !0 }), Object.keys(ae).forEach(function(P) {
    var S = Object.getOwnPropertyDescriptor(ae, P);
    Object.defineProperty(D, P, S.get ? S : {
      enumerable: !0,
      get: function() {
        return ae[P];
      }
    });
  }), D;
}
var di = { exports: {} }, Nf = di.exports, Fl;
function zt() {
  return Fl || (Fl = 1, (function(ae, le) {
    (function(D, P) {
      ae.exports = P();
    })(Nf, (function() {
      var D = navigator.userAgent, P = navigator.platform, S = /gecko\/\d/i.test(D), N = /MSIE \d/.test(D), O = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(D), W = /Edge\/(\d+)/.exec(D), B = N || O || W, _ = B && (N ? document.documentMode || 6 : +(W || O)[1]), ee = !W && /WebKit\//.test(D), Q = ee && /Qt\/\d+\.\d+/.test(D), K = !W && /Chrome\/(\d+)/.exec(D), ue = K && +K[1], ne = /Opera\//.test(D), Ce = /Apple Computer/.test(navigator.vendor), pe = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(D), oe = /PhantomJS/.test(D), z = Ce && (/Mobile\/\w+/.test(D) || navigator.maxTouchPoints > 2), X = /Android/.test(D), q = z || X || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(D), j = z || /Mac/.test(P), he = /\bCrOS\b/.test(D), Z = /win/i.test(P), de = ne && D.match(/Version\/(\d*\.\d*)/);
      de && (de = Number(de[1])), de && de >= 15 && (ne = !1, ee = !0);
      var xe = j && (Q || ne && (de == null || de < 12.11)), Ue = S || B && _ >= 9;
      function se(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*");
      }
      var Le = function(e, t) {
        var n = e.className, r = se(t).exec(n);
        if (r) {
          var i = n.slice(r.index + r[0].length);
          e.className = n.slice(0, r.index) + (i ? r[1] + i : "");
        }
      };
      function Ee(e) {
        for (var t = e.childNodes.length; t > 0; --t)
          e.removeChild(e.firstChild);
        return e;
      }
      function He(e, t) {
        return Ee(e).appendChild(t);
      }
      function L(e, t, n, r) {
        var i = document.createElement(e);
        if (n && (i.className = n), r && (i.style.cssText = r), typeof t == "string")
          i.appendChild(document.createTextNode(t));
        else if (t)
          for (var a = 0; a < t.length; ++a)
            i.appendChild(t[a]);
        return i;
      }
      function te(e, t, n, r) {
        var i = L(e, t, n, r);
        return i.setAttribute("role", "presentation"), i;
      }
      var $;
      document.createRange ? $ = function(e, t, n, r) {
        var i = document.createRange();
        return i.setEnd(r || e, n), i.setStart(e, t), i;
      } : $ = function(e, t, n) {
        var r = document.body.createTextRange();
        try {
          r.moveToElementText(e.parentNode);
        } catch {
          return r;
        }
        return r.collapse(!0), r.moveEnd("character", n), r.moveStart("character", t), r;
      };
      function be(e, t) {
        if (t.nodeType == 3 && (t = t.parentNode), e.contains)
          return e.contains(t);
        do
          if (t.nodeType == 11 && (t = t.host), t == e)
            return !0;
        while (t = t.parentNode);
      }
      function _e(e) {
        var t = e.ownerDocument || e, n;
        try {
          n = e.activeElement;
        } catch {
          n = t.body || null;
        }
        for (; n && n.shadowRoot && n.shadowRoot.activeElement; )
          n = n.shadowRoot.activeElement;
        return n;
      }
      function rt(e, t) {
        var n = e.className;
        se(t).test(n) || (e.className += (n ? " " : "") + t);
      }
      function Wt(e, t) {
        for (var n = e.split(" "), r = 0; r < n.length; r++)
          n[r] && !se(n[r]).test(t) && (t += " " + n[r]);
        return t;
      }
      var b = function(e) {
        e.select();
      };
      z ? b = function(e) {
        e.selectionStart = 0, e.selectionEnd = e.value.length;
      } : B && (b = function(e) {
        try {
          e.select();
        } catch {
        }
      });
      function p(e) {
        return e.display.wrapper.ownerDocument;
      }
      function G(e) {
        return ze(e.display.wrapper);
      }
      function ze(e) {
        return e.getRootNode ? e.getRootNode() : e.ownerDocument;
      }
      function Te(e) {
        return p(e).defaultView;
      }
      function $e(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function() {
          return e.apply(null, t);
        };
      }
      function Je(e, t, n) {
        t || (t = {});
        for (var r in e)
          e.hasOwnProperty(r) && (n !== !1 || !t.hasOwnProperty(r)) && (t[r] = e[r]);
        return t;
      }
      function Ke(e, t, n, r, i) {
        t == null && (t = e.search(/[^\s\u00a0]/), t == -1 && (t = e.length));
        for (var a = r || 0, o = i || 0; ; ) {
          var u = e.indexOf("	", a);
          if (u < 0 || u >= t)
            return o + (t - a);
          o += u - a, o += n - o % n, a = u + 1;
        }
      }
      var Ye = function() {
        this.id = null, this.f = null, this.time = 0, this.handler = $e(this.onTimeout, this);
      };
      Ye.prototype.onTimeout = function(e) {
        e.id = 0, e.time <= +/* @__PURE__ */ new Date() ? e.f() : setTimeout(e.handler, e.time - +/* @__PURE__ */ new Date());
      }, Ye.prototype.set = function(e, t) {
        this.f = t;
        var n = +/* @__PURE__ */ new Date() + e;
        (!this.id || n < this.time) && (clearTimeout(this.id), this.id = setTimeout(this.handler, e), this.time = n);
      };
      function Pe(e, t) {
        for (var n = 0; n < e.length; ++n)
          if (e[n] == t)
            return n;
        return -1;
      }
      var We = 50, Ve = { toString: function() {
        return "CodeMirror.Pass";
      } }, at = { scroll: !1 }, ke = { origin: "*mouse" }, Dt = { origin: "+move" };
      function At(e, t, n) {
        for (var r = 0, i = 0; ; ) {
          var a = e.indexOf("	", r);
          a == -1 && (a = e.length);
          var o = a - r;
          if (a == e.length || i + o >= t)
            return r + Math.min(o, t - i);
          if (i += a - r, i += n - i % n, r = a + 1, i >= t)
            return r;
        }
      }
      var nt = [""];
      function Ht(e) {
        for (; nt.length <= e; )
          nt.push(De(nt) + " ");
        return nt[e];
      }
      function De(e) {
        return e[e.length - 1];
      }
      function lt(e, t) {
        for (var n = [], r = 0; r < e.length; r++)
          n[r] = t(e[r], r);
        return n;
      }
      function _t(e, t, n) {
        for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; )
          r++;
        e.splice(r, 0, t);
      }
      function ar() {
      }
      function H(e, t) {
        var n;
        return Object.create ? n = Object.create(e) : (ar.prototype = e, n = new ar()), t && Je(t, n), n;
      }
      var R = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/;
      function A(e) {
        return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || R.test(e));
      }
      function d(e, t) {
        return t ? t.source.indexOf("\\w") > -1 && A(e) ? !0 : t.test(e) : A(e);
      }
      function h(e) {
        for (var t in e)
          if (e.hasOwnProperty(t) && e[t])
            return !1;
        return !0;
      }
      var w = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;
      function l(e) {
        return e.charCodeAt(0) >= 768 && w.test(e);
      }
      function f(e, t, n) {
        for (; (n < 0 ? t > 0 : t < e.length) && l(e.charAt(t)); )
          t += n;
        return t;
      }
      function v(e, t, n) {
        for (var r = t > n ? -1 : 1; ; ) {
          if (t == n)
            return t;
          var i = (t + n) / 2, a = r < 0 ? Math.ceil(i) : Math.floor(i);
          if (a == t)
            return e(a) ? t : n;
          e(a) ? n = a : t = a + r;
        }
      }
      function y(e, t, n, r) {
        if (!e)
          return r(t, n, "ltr", 0);
        for (var i = !1, a = 0; a < e.length; ++a) {
          var o = e[a];
          (o.from < n && o.to > t || t == n && o.to == t) && (r(Math.max(o.from, t), Math.min(o.to, n), o.level == 1 ? "rtl" : "ltr", a), i = !0);
        }
        i || r(t, n, "ltr");
      }
      var C = null;
      function I(e, t, n) {
        var r;
        C = null;
        for (var i = 0; i < e.length; ++i) {
          var a = e[i];
          if (a.from < t && a.to > t)
            return i;
          a.to == t && (a.from != a.to && n == "before" ? r = i : C = i), a.from == t && (a.from != a.to && n != "before" ? r = i : C = i);
        }
        return r ?? C;
      }
      var k = /* @__PURE__ */ (function() {
        var e = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN", t = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111";
        function n(c) {
          return c <= 247 ? e.charAt(c) : 1424 <= c && c <= 1524 ? "R" : 1536 <= c && c <= 1785 ? t.charAt(c - 1536) : 1774 <= c && c <= 2220 ? "r" : 8192 <= c && c <= 8203 ? "w" : c == 8204 ? "b" : "L";
        }
        var r = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/, i = /[stwN]/, a = /[LRr]/, o = /[Lb1n]/, u = /[1n]/;
        function s(c, g, m) {
          this.level = c, this.from = g, this.to = m;
        }
        return function(c, g) {
          var m = g == "ltr" ? "L" : "R";
          if (c.length == 0 || g == "ltr" && !r.test(c))
            return !1;
          for (var T = c.length, F = [], U = 0; U < T; ++U)
            F.push(n(c.charCodeAt(U)));
          for (var Y = 0, V = m; Y < T; ++Y) {
            var fe = F[Y];
            fe == "m" ? F[Y] = V : V = fe;
          }
          for (var ge = 0, ce = m; ge < T; ++ge) {
            var ve = F[ge];
            ve == "1" && ce == "r" ? F[ge] = "n" : a.test(ve) && (ce = ve, ve == "r" && (F[ge] = "R"));
          }
          for (var Fe = 1, Se = F[0]; Fe < T - 1; ++Fe) {
            var Re = F[Fe];
            Re == "+" && Se == "1" && F[Fe + 1] == "1" ? F[Fe] = "1" : Re == "," && Se == F[Fe + 1] && (Se == "1" || Se == "n") && (F[Fe] = Se), Se = Re;
          }
          for (var Qe = 0; Qe < T; ++Qe) {
            var vt = F[Qe];
            if (vt == ",")
              F[Qe] = "N";
            else if (vt == "%") {
              var tt = void 0;
              for (tt = Qe + 1; tt < T && F[tt] == "%"; ++tt)
                ;
              for (var Nt = Qe && F[Qe - 1] == "!" || tt < T && F[tt] == "1" ? "1" : "N", Tt = Qe; Tt < tt; ++Tt)
                F[Tt] = Nt;
              Qe = tt - 1;
            }
          }
          for (var ft = 0, Bt = m; ft < T; ++ft) {
            var xt = F[ft];
            Bt == "L" && xt == "1" ? F[ft] = "L" : a.test(xt) && (Bt = xt);
          }
          for (var ht = 0; ht < T; ++ht)
            if (i.test(F[ht])) {
              var ct = void 0;
              for (ct = ht + 1; ct < T && i.test(F[ct]); ++ct)
                ;
              for (var it = (ht ? F[ht - 1] : m) == "L", Mt = (ct < T ? F[ct] : m) == "L", $r = it == Mt ? it ? "L" : "R" : m, pr = ht; pr < ct; ++pr)
                F[pr] = $r;
              ht = ct - 1;
            }
          for (var wt = [], Jt, mt = 0; mt < T; )
            if (o.test(F[mt])) {
              var pa = mt;
              for (++mt; mt < T && o.test(F[mt]); ++mt)
                ;
              wt.push(new s(0, pa, mt));
            } else {
              var ir = mt, Ar = wt.length, Er = g == "rtl" ? 1 : 0;
              for (++mt; mt < T && F[mt] != "L"; ++mt)
                ;
              for (var Ft = ir; Ft < mt; )
                if (u.test(F[Ft])) {
                  ir < Ft && (wt.splice(Ar, 0, new s(1, ir, Ft)), Ar += Er);
                  var Jr = Ft;
                  for (++Ft; Ft < mt && u.test(F[Ft]); ++Ft)
                    ;
                  wt.splice(Ar, 0, new s(2, Jr, Ft)), Ar += Er, ir = Ft;
                } else
                  ++Ft;
              ir < mt && wt.splice(Ar, 0, new s(1, ir, mt));
            }
          return g == "ltr" && (wt[0].level == 1 && (Jt = c.match(/^\s+/)) && (wt[0].from = Jt[0].length, wt.unshift(new s(0, 0, Jt[0].length))), De(wt).level == 1 && (Jt = c.match(/\s+$/)) && (De(wt).to -= Jt[0].length, wt.push(new s(0, T - Jt[0].length, T)))), g == "rtl" ? wt.reverse() : wt;
        };
      })();
      function x(e, t) {
        var n = e.order;
        return n == null && (n = e.order = k(e.text, t)), n;
      }
      var M = [], E = function(e, t, n) {
        if (e.addEventListener)
          e.addEventListener(t, n, !1);
        else if (e.attachEvent)
          e.attachEvent("on" + t, n);
        else {
          var r = e._handlers || (e._handlers = {});
          r[t] = (r[t] || M).concat(n);
        }
      };
      function ie(e, t) {
        return e._handlers && e._handlers[t] || M;
      }
      function me(e, t, n) {
        if (e.removeEventListener)
          e.removeEventListener(t, n, !1);
        else if (e.detachEvent)
          e.detachEvent("on" + t, n);
        else {
          var r = e._handlers, i = r && r[t];
          if (i) {
            var a = Pe(i, n);
            a > -1 && (r[t] = i.slice(0, a).concat(i.slice(a + 1)));
          }
        }
      }
      function ye(e, t) {
        var n = ie(e, t);
        if (n.length)
          for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i)
            n[i].apply(null, r);
      }
      function re(e, t, n) {
        return typeof t == "string" && (t = { type: t, preventDefault: function() {
          this.defaultPrevented = !0;
        } }), ye(e, n || t.type, e, t), Ze(t) || t.codemirrorIgnore;
      }
      function Be(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (t)
          for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r)
            Pe(n, t[r]) == -1 && n.push(t[r]);
      }
      function Me(e, t) {
        return ie(e, t).length > 0;
      }
      function Ne(e) {
        e.prototype.on = function(t, n) {
          E(this, t, n);
        }, e.prototype.off = function(t, n) {
          me(this, t, n);
        };
      }
      function Ae(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
      }
      function Xe(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0;
      }
      function Ze(e) {
        return e.defaultPrevented != null ? e.defaultPrevented : e.returnValue == !1;
      }
      function ut(e) {
        Ae(e), Xe(e);
      }
      function kt(e) {
        return e.target || e.srcElement;
      }
      function bt(e) {
        var t = e.which;
        return t == null && (e.button & 1 ? t = 1 : e.button & 2 ? t = 3 : e.button & 4 && (t = 2)), j && e.ctrlKey && t == 1 && (t = 3), t;
      }
      var Lr = (function() {
        if (B && _ < 9)
          return !1;
        var e = L("div");
        return "draggable" in e || "dragDrop" in e;
      })(), Tr;
      function In(e) {
        if (Tr == null) {
          var t = L("span", "​");
          He(e, L("span", [t, document.createTextNode("x")])), e.firstChild.offsetHeight != 0 && (Tr = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(B && _ < 8));
        }
        var n = Tr ? L("span", "​") : L("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
        return n.setAttribute("cm-text", ""), n;
      }
      var tn;
      function rn(e) {
        if (tn != null)
          return tn;
        var t = He(e, document.createTextNode("AخA")), n = $(t, 0, 1).getBoundingClientRect(), r = $(t, 1, 2).getBoundingClientRect();
        return Ee(e), !n || n.left == n.right ? !1 : tn = r.right - n.right < 3;
      }
      var nn = `

b`.split(/\n/).length != 3 ? function(e) {
        for (var t = 0, n = [], r = e.length; t <= r; ) {
          var i = e.indexOf(`
`, t);
          i == -1 && (i = e.length);
          var a = e.slice(t, e.charAt(i - 1) == "\r" ? i - 1 : i), o = a.indexOf("\r");
          o != -1 ? (n.push(a.slice(0, o)), t += o + 1) : (n.push(a), t = i + 1);
        }
        return n;
      } : function(e) {
        return e.split(/\r\n?|\n/);
      }, mi = window.getSelection ? function(e) {
        try {
          return e.selectionStart != e.selectionEnd;
        } catch {
          return !1;
        }
      } : function(e) {
        var t;
        try {
          t = e.ownerDocument.selection.createRange();
        } catch {
        }
        return !t || t.parentElement() != e ? !1 : t.compareEndPoints("StartToEnd", t) != 0;
      }, yt = (function() {
        var e = L("div");
        return "oncopy" in e ? !0 : (e.setAttribute("oncopy", "return;"), typeof e.oncopy == "function");
      })(), Xt = null;
      function qt(e) {
        if (Xt != null)
          return Xt;
        var t = He(e, L("span", "x")), n = t.getBoundingClientRect(), r = $(t, 0, 1).getBoundingClientRect();
        return Xt = Math.abs(n.left - r.left) > 1;
      }
      var Rt = {}, It = {};
      function gr(e, t) {
        arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)), Rt[e] = t;
      }
      function On(e, t) {
        It[e] = t;
      }
      function Br(e) {
        if (typeof e == "string" && It.hasOwnProperty(e))
          e = It[e];
        else if (e && typeof e.name == "string" && It.hasOwnProperty(e.name)) {
          var t = It[e.name];
          typeof t == "string" && (t = { name: t }), e = H(t, e), e.name = t.name;
        } else {
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
            return Br("application/xml");
          if (typeof e == "string" && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
            return Br("application/json");
        }
        return typeof e == "string" ? { name: e } : e || { name: "null" };
      }
      function Mr(e, t) {
        t = Br(t);
        var n = Rt[t.name];
        if (!n)
          return Mr(e, "text/plain");
        var r = n(e, t);
        if (Ir.hasOwnProperty(t.name)) {
          var i = Ir[t.name];
          for (var a in i)
            i.hasOwnProperty(a) && (r.hasOwnProperty(a) && (r["_" + a] = r[a]), r[a] = i[a]);
        }
        if (r.name = t.name, t.helperType && (r.helperType = t.helperType), t.modeProps)
          for (var o in t.modeProps)
            r[o] = t.modeProps[o];
        return r;
      }
      var Ir = {};
      function du(e, t) {
        var n = Ir.hasOwnProperty(e) ? Ir[e] : Ir[e] = {};
        Je(t, n);
      }
      function vr(e, t) {
        if (t === !0)
          return t;
        if (e.copyState)
          return e.copyState(t);
        var n = {};
        for (var r in t) {
          var i = t[r];
          i instanceof Array && (i = i.concat([])), n[r] = i;
        }
        return n;
      }
      function yi(e, t) {
        for (var n; e.innerMode && (n = e.innerMode(t), !(!n || n.mode == e)); )
          t = n.state, e = n.mode;
        return n || { mode: e, state: t };
      }
      function wa(e, t, n) {
        return e.startState ? e.startState(t, n) : !0;
      }
      var st = function(e, t, n) {
        this.pos = this.start = 0, this.string = e, this.tabSize = t || 8, this.lastColumnPos = this.lastColumnValue = 0, this.lineStart = 0, this.lineOracle = n;
      };
      st.prototype.eol = function() {
        return this.pos >= this.string.length;
      }, st.prototype.sol = function() {
        return this.pos == this.lineStart;
      }, st.prototype.peek = function() {
        return this.string.charAt(this.pos) || void 0;
      }, st.prototype.next = function() {
        if (this.pos < this.string.length)
          return this.string.charAt(this.pos++);
      }, st.prototype.eat = function(e) {
        var t = this.string.charAt(this.pos), n;
        if (typeof e == "string" ? n = t == e : n = t && (e.test ? e.test(t) : e(t)), n)
          return ++this.pos, t;
      }, st.prototype.eatWhile = function(e) {
        for (var t = this.pos; this.eat(e); )
          ;
        return this.pos > t;
      }, st.prototype.eatSpace = function() {
        for (var e = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
          ++this.pos;
        return this.pos > e;
      }, st.prototype.skipToEnd = function() {
        this.pos = this.string.length;
      }, st.prototype.skipTo = function(e) {
        var t = this.string.indexOf(e, this.pos);
        if (t > -1)
          return this.pos = t, !0;
      }, st.prototype.backUp = function(e) {
        this.pos -= e;
      }, st.prototype.column = function() {
        return this.lastColumnPos < this.start && (this.lastColumnValue = Ke(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue), this.lastColumnPos = this.start), this.lastColumnValue - (this.lineStart ? Ke(this.string, this.lineStart, this.tabSize) : 0);
      }, st.prototype.indentation = function() {
        return Ke(this.string, null, this.tabSize) - (this.lineStart ? Ke(this.string, this.lineStart, this.tabSize) : 0);
      }, st.prototype.match = function(e, t, n) {
        if (typeof e == "string") {
          var r = function(o) {
            return n ? o.toLowerCase() : o;
          }, i = this.string.substr(this.pos, e.length);
          if (r(i) == r(e))
            return t !== !1 && (this.pos += e.length), !0;
        } else {
          var a = this.string.slice(this.pos).match(e);
          return a && a.index > 0 ? null : (a && t !== !1 && (this.pos += a[0].length), a);
        }
      }, st.prototype.current = function() {
        return this.string.slice(this.start, this.pos);
      }, st.prototype.hideFirstChars = function(e, t) {
        this.lineStart += e;
        try {
          return t();
        } finally {
          this.lineStart -= e;
        }
      }, st.prototype.lookAhead = function(e) {
        var t = this.lineOracle;
        return t && t.lookAhead(e);
      }, st.prototype.baseToken = function() {
        var e = this.lineOracle;
        return e && e.baseToken(this.pos);
      };
      function we(e, t) {
        if (t -= e.first, t < 0 || t >= e.size)
          throw new Error("There is no line " + (t + e.first) + " in the document.");
        for (var n = e; !n.lines; )
          for (var r = 0; ; ++r) {
            var i = n.children[r], a = i.chunkSize();
            if (t < a) {
              n = i;
              break;
            }
            t -= a;
          }
        return n.lines[t];
      }
      function mr(e, t, n) {
        var r = [], i = t.line;
        return e.iter(t.line, n.line + 1, function(a) {
          var o = a.text;
          i == n.line && (o = o.slice(0, n.ch)), i == t.line && (o = o.slice(t.ch)), r.push(o), ++i;
        }), r;
      }
      function xi(e, t, n) {
        var r = [];
        return e.iter(t, n, function(i) {
          r.push(i.text);
        }), r;
      }
      function Yt(e, t) {
        var n = t - e.height;
        if (n)
          for (var r = e; r; r = r.parent)
            r.height += n;
      }
      function Ge(e) {
        if (e.parent == null)
          return null;
        for (var t = e.parent, n = Pe(t.lines, e), r = t.parent; r; t = r, r = r.parent)
          for (var i = 0; r.children[i] != t; ++i)
            n += r.children[i].chunkSize();
        return n + t.first;
      }
      function yr(e, t) {
        var n = e.first;
        e: do {
          for (var r = 0; r < e.children.length; ++r) {
            var i = e.children[r], a = i.height;
            if (t < a) {
              e = i;
              continue e;
            }
            t -= a, n += i.chunkSize();
          }
          return n;
        } while (!e.lines);
        for (var o = 0; o < e.lines.length; ++o) {
          var u = e.lines[o], s = u.height;
          if (t < s)
            break;
          t -= s;
        }
        return n + o;
      }
      function an(e, t) {
        return t >= e.first && t < e.first + e.size;
      }
      function Di(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber));
      }
      function J(e, t, n) {
        if (n === void 0 && (n = null), !(this instanceof J))
          return new J(e, t, n);
        this.line = e, this.ch = t, this.sticky = n;
      }
      function Ie(e, t) {
        return e.line - t.line || e.ch - t.ch;
      }
      function bi(e, t) {
        return e.sticky == t.sticky && Ie(e, t) == 0;
      }
      function Ci(e) {
        return J(e.line, e.ch);
      }
      function Nn(e, t) {
        return Ie(e, t) < 0 ? t : e;
      }
      function Hn(e, t) {
        return Ie(e, t) < 0 ? e : t;
      }
      function ka(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1));
      }
      function Oe(e, t) {
        if (t.line < e.first)
          return J(e.first, 0);
        var n = e.first + e.size - 1;
        return t.line > n ? J(n, we(e, n).text.length) : pu(t, we(e, t.line).text.length);
      }
      function pu(e, t) {
        var n = e.ch;
        return n == null || n > t ? J(e.line, t) : n < 0 ? J(e.line, 0) : e;
      }
      function Sa(e, t) {
        for (var n = [], r = 0; r < t.length; r++)
          n[r] = Oe(e, t[r]);
        return n;
      }
      var Rn = function(e, t) {
        this.state = e, this.lookAhead = t;
      }, Zt = function(e, t, n, r) {
        this.state = t, this.doc = e, this.line = n, this.maxLookAhead = r || 0, this.baseTokens = null, this.baseTokenPos = 1;
      };
      Zt.prototype.lookAhead = function(e) {
        var t = this.doc.getLine(this.line + e);
        return t != null && e > this.maxLookAhead && (this.maxLookAhead = e), t;
      }, Zt.prototype.baseToken = function(e) {
        if (!this.baseTokens)
          return null;
        for (; this.baseTokens[this.baseTokenPos] <= e; )
          this.baseTokenPos += 2;
        var t = this.baseTokens[this.baseTokenPos + 1];
        return {
          type: t && t.replace(/( |^)overlay .*/, ""),
          size: this.baseTokens[this.baseTokenPos] - e
        };
      }, Zt.prototype.nextLine = function() {
        this.line++, this.maxLookAhead > 0 && this.maxLookAhead--;
      }, Zt.fromSaved = function(e, t, n) {
        return t instanceof Rn ? new Zt(e, vr(e.mode, t.state), n, t.lookAhead) : new Zt(e, vr(e.mode, t), n);
      }, Zt.prototype.save = function(e) {
        var t = e !== !1 ? vr(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new Rn(t, this.maxLookAhead) : t;
      };
      function Fa(e, t, n, r) {
        var i = [e.state.modeGen], a = {};
        Ma(
          e,
          t.text,
          e.doc.mode,
          n,
          function(c, g) {
            return i.push(c, g);
          },
          a,
          r
        );
        for (var o = n.state, u = function(c) {
          n.baseTokens = i;
          var g = e.state.overlays[c], m = 1, T = 0;
          n.state = !0, Ma(e, t.text, g.mode, n, function(F, U) {
            for (var Y = m; T < F; ) {
              var V = i[m];
              V > F && i.splice(m, 1, F, i[m + 1], V), m += 2, T = Math.min(F, V);
            }
            if (U)
              if (g.opaque)
                i.splice(Y, m - Y, F, "overlay " + U), m = Y + 2;
              else
                for (; Y < m; Y += 2) {
                  var fe = i[Y + 1];
                  i[Y + 1] = (fe ? fe + " " : "") + "overlay " + U;
                }
          }, a), n.state = o, n.baseTokens = null, n.baseTokenPos = 1;
        }, s = 0; s < e.state.overlays.length; ++s) u(s);
        return { styles: i, classes: a.bgClass || a.textClass ? a : null };
      }
      function Aa(e, t, n) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
          var r = on(e, Ge(t)), i = t.text.length > e.options.maxHighlightLength && vr(e.doc.mode, r.state), a = Fa(e, t, r);
          i && (r.state = i), t.stateAfter = r.save(!i), t.styles = a.styles, a.classes ? t.styleClasses = a.classes : t.styleClasses && (t.styleClasses = null), n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier));
        }
        return t.styles;
      }
      function on(e, t, n) {
        var r = e.doc, i = e.display;
        if (!r.mode.startState)
          return new Zt(r, !0, t);
        var a = gu(e, t, n), o = a > r.first && we(r, a - 1).stateAfter, u = o ? Zt.fromSaved(r, o, a) : new Zt(r, wa(r.mode), a);
        return r.iter(a, t, function(s) {
          wi(e, s.text, u);
          var c = u.line;
          s.stateAfter = c == t - 1 || c % 5 == 0 || c >= i.viewFrom && c < i.viewTo ? u.save() : null, u.nextLine();
        }), n && (r.modeFrontier = u.line), u;
      }
      function wi(e, t, n, r) {
        var i = e.doc.mode, a = new st(t, e.options.tabSize, n);
        for (a.start = a.pos = r || 0, t == "" && Ea(i, n.state); !a.eol(); )
          ki(i, a, n.state), a.start = a.pos;
      }
      function Ea(e, t) {
        if (e.blankLine)
          return e.blankLine(t);
        if (e.innerMode) {
          var n = yi(e, t);
          if (n.mode.blankLine)
            return n.mode.blankLine(n.state);
        }
      }
      function ki(e, t, n, r) {
        for (var i = 0; i < 10; i++) {
          r && (r[0] = yi(e, n).mode);
          var a = e.token(t, n);
          if (t.pos > t.start)
            return a;
        }
        throw new Error("Mode " + e.name + " failed to advance stream.");
      }
      var La = function(e, t, n) {
        this.start = e.start, this.end = e.pos, this.string = e.current(), this.type = t || null, this.state = n;
      };
      function Ta(e, t, n, r) {
        var i = e.doc, a = i.mode, o;
        t = Oe(i, t);
        var u = we(i, t.line), s = on(e, t.line, n), c = new st(u.text, e.options.tabSize, s), g;
        for (r && (g = []); (r || c.pos < t.ch) && !c.eol(); )
          c.start = c.pos, o = ki(a, c, s.state), r && g.push(new La(c, o, vr(i.mode, s.state)));
        return r ? g : new La(c, o, s.state);
      }
      function Ba(e, t) {
        if (e)
          for (; ; ) {
            var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
            if (!n)
              break;
            e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
            var r = n[1] ? "bgClass" : "textClass";
            t[r] == null ? t[r] = n[2] : new RegExp("(?:^|\\s)" + n[2] + "(?:$|\\s)").test(t[r]) || (t[r] += " " + n[2]);
          }
        return e;
      }
      function Ma(e, t, n, r, i, a, o) {
        var u = n.flattenSpans;
        u == null && (u = e.options.flattenSpans);
        var s = 0, c = null, g = new st(t, e.options.tabSize, r), m, T = e.options.addModeClass && [null];
        for (t == "" && Ba(Ea(n, r.state), a); !g.eol(); ) {
          if (g.pos > e.options.maxHighlightLength ? (u = !1, o && wi(e, t, r, g.pos), g.pos = t.length, m = null) : m = Ba(ki(n, g, r.state, T), a), T) {
            var F = T[0].name;
            F && (m = "m-" + (m ? F + " " + m : F));
          }
          if (!u || c != m) {
            for (; s < g.start; )
              s = Math.min(g.start, s + 5e3), i(s, c);
            c = m;
          }
          g.start = g.pos;
        }
        for (; s < g.pos; ) {
          var U = Math.min(g.pos, s + 5e3);
          i(U, c), s = U;
        }
      }
      function gu(e, t, n) {
        for (var r, i, a = e.doc, o = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), u = t; u > o; --u) {
          if (u <= a.first)
            return a.first;
          var s = we(a, u - 1), c = s.stateAfter;
          if (c && (!n || u + (c instanceof Rn ? c.lookAhead : 0) <= a.modeFrontier))
            return u;
          var g = Ke(s.text, null, e.options.tabSize);
          (i == null || r > g) && (i = u - 1, r = g);
        }
        return i;
      }
      function vu(e, t) {
        if (e.modeFrontier = Math.min(e.modeFrontier, t), !(e.highlightFrontier < t - 10)) {
          for (var n = e.first, r = t - 1; r > n; r--) {
            var i = we(e, r).stateAfter;
            if (i && (!(i instanceof Rn) || r + i.lookAhead < t)) {
              n = r + 1;
              break;
            }
          }
          e.highlightFrontier = Math.min(e.highlightFrontier, n);
        }
      }
      var Ia = !1, Vt = !1;
      function mu() {
        Ia = !0;
      }
      function yu() {
        Vt = !0;
      }
      function Pn(e, t, n) {
        this.marker = e, this.from = t, this.to = n;
      }
      function ln(e, t) {
        if (e)
          for (var n = 0; n < e.length; ++n) {
            var r = e[n];
            if (r.marker == t)
              return r;
          }
      }
      function xu(e, t) {
        for (var n, r = 0; r < e.length; ++r)
          e[r] != t && (n || (n = [])).push(e[r]);
        return n;
      }
      function Du(e, t, n) {
        var r = n && window.WeakSet && (n.markedSpans || (n.markedSpans = /* @__PURE__ */ new WeakSet()));
        r && e.markedSpans && r.has(e.markedSpans) ? e.markedSpans.push(t) : (e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t], r && r.add(e.markedSpans)), t.marker.attachLine(e);
      }
      function bu(e, t, n) {
        var r;
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var a = e[i], o = a.marker, u = a.from == null || (o.inclusiveLeft ? a.from <= t : a.from < t);
            if (u || a.from == t && o.type == "bookmark" && (!n || !a.marker.insertLeft)) {
              var s = a.to == null || (o.inclusiveRight ? a.to >= t : a.to > t);
              (r || (r = [])).push(new Pn(o, a.from, s ? null : a.to));
            }
          }
        return r;
      }
      function Cu(e, t, n) {
        var r;
        if (e)
          for (var i = 0; i < e.length; ++i) {
            var a = e[i], o = a.marker, u = a.to == null || (o.inclusiveRight ? a.to >= t : a.to > t);
            if (u || a.from == t && o.type == "bookmark" && (!n || a.marker.insertLeft)) {
              var s = a.from == null || (o.inclusiveLeft ? a.from <= t : a.from < t);
              (r || (r = [])).push(new Pn(
                o,
                s ? null : a.from - t,
                a.to == null ? null : a.to - t
              ));
            }
          }
        return r;
      }
      function Si(e, t) {
        if (t.full)
          return null;
        var n = an(e, t.from.line) && we(e, t.from.line).markedSpans, r = an(e, t.to.line) && we(e, t.to.line).markedSpans;
        if (!n && !r)
          return null;
        var i = t.from.ch, a = t.to.ch, o = Ie(t.from, t.to) == 0, u = bu(n, i, o), s = Cu(r, a, o), c = t.text.length == 1, g = De(t.text).length + (c ? i : 0);
        if (u)
          for (var m = 0; m < u.length; ++m) {
            var T = u[m];
            if (T.to == null) {
              var F = ln(s, T.marker);
              F ? c && (T.to = F.to == null ? null : F.to + g) : T.to = i;
            }
          }
        if (s)
          for (var U = 0; U < s.length; ++U) {
            var Y = s[U];
            if (Y.to != null && (Y.to += g), Y.from == null) {
              var V = ln(u, Y.marker);
              V || (Y.from = g, c && (u || (u = [])).push(Y));
            } else
              Y.from += g, c && (u || (u = [])).push(Y);
          }
        u && (u = Oa(u)), s && s != u && (s = Oa(s));
        var fe = [u];
        if (!c) {
          var ge = t.text.length - 2, ce;
          if (ge > 0 && u)
            for (var ve = 0; ve < u.length; ++ve)
              u[ve].to == null && (ce || (ce = [])).push(new Pn(u[ve].marker, null, null));
          for (var Fe = 0; Fe < ge; ++Fe)
            fe.push(ce);
          fe.push(s);
        }
        return fe;
      }
      function Oa(e) {
        for (var t = 0; t < e.length; ++t) {
          var n = e[t];
          n.from != null && n.from == n.to && n.marker.clearWhenEmpty !== !1 && e.splice(t--, 1);
        }
        return e.length ? e : null;
      }
      function wu(e, t, n) {
        var r = null;
        if (e.iter(t.line, n.line + 1, function(F) {
          if (F.markedSpans)
            for (var U = 0; U < F.markedSpans.length; ++U) {
              var Y = F.markedSpans[U].marker;
              Y.readOnly && (!r || Pe(r, Y) == -1) && (r || (r = [])).push(Y);
            }
        }), !r)
          return null;
        for (var i = [{ from: t, to: n }], a = 0; a < r.length; ++a)
          for (var o = r[a], u = o.find(0), s = 0; s < i.length; ++s) {
            var c = i[s];
            if (!(Ie(c.to, u.from) < 0 || Ie(c.from, u.to) > 0)) {
              var g = [s, 1], m = Ie(c.from, u.from), T = Ie(c.to, u.to);
              (m < 0 || !o.inclusiveLeft && !m) && g.push({ from: c.from, to: u.from }), (T > 0 || !o.inclusiveRight && !T) && g.push({ from: u.to, to: c.to }), i.splice.apply(i, g), s += g.length - 3;
            }
          }
        return i;
      }
      function Na(e) {
        var t = e.markedSpans;
        if (t) {
          for (var n = 0; n < t.length; ++n)
            t[n].marker.detachLine(e);
          e.markedSpans = null;
        }
      }
      function Ha(e, t) {
        if (t) {
          for (var n = 0; n < t.length; ++n)
            t[n].marker.attachLine(e);
          e.markedSpans = t;
        }
      }
      function zn(e) {
        return e.inclusiveLeft ? -1 : 0;
      }
      function _n(e) {
        return e.inclusiveRight ? 1 : 0;
      }
      function Fi(e, t) {
        var n = e.lines.length - t.lines.length;
        if (n != 0)
          return n;
        var r = e.find(), i = t.find(), a = Ie(r.from, i.from) || zn(e) - zn(t);
        if (a)
          return -a;
        var o = Ie(r.to, i.to) || _n(e) - _n(t);
        return o || t.id - e.id;
      }
      function Ra(e, t) {
        var n = Vt && e.markedSpans, r;
        if (n)
          for (var i = void 0, a = 0; a < n.length; ++a)
            i = n[a], i.marker.collapsed && (t ? i.from : i.to) == null && (!r || Fi(r, i.marker) < 0) && (r = i.marker);
        return r;
      }
      function Pa(e) {
        return Ra(e, !0);
      }
      function Wn(e) {
        return Ra(e, !1);
      }
      function ku(e, t) {
        var n = Vt && e.markedSpans, r;
        if (n)
          for (var i = 0; i < n.length; ++i) {
            var a = n[i];
            a.marker.collapsed && (a.from == null || a.from < t) && (a.to == null || a.to > t) && (!r || Fi(r, a.marker) < 0) && (r = a.marker);
          }
        return r;
      }
      function za(e, t, n, r, i) {
        var a = we(e, t), o = Vt && a.markedSpans;
        if (o)
          for (var u = 0; u < o.length; ++u) {
            var s = o[u];
            if (s.marker.collapsed) {
              var c = s.marker.find(0), g = Ie(c.from, n) || zn(s.marker) - zn(i), m = Ie(c.to, r) || _n(s.marker) - _n(i);
              if (!(g >= 0 && m <= 0 || g <= 0 && m >= 0) && (g <= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? Ie(c.to, n) >= 0 : Ie(c.to, n) > 0) || g >= 0 && (s.marker.inclusiveRight && i.inclusiveLeft ? Ie(c.from, r) <= 0 : Ie(c.from, r) < 0)))
                return !0;
            }
          }
      }
      function Ut(e) {
        for (var t; t = Pa(e); )
          e = t.find(-1, !0).line;
        return e;
      }
      function Su(e) {
        for (var t; t = Wn(e); )
          e = t.find(1, !0).line;
        return e;
      }
      function Fu(e) {
        for (var t, n; t = Wn(e); )
          e = t.find(1, !0).line, (n || (n = [])).push(e);
        return n;
      }
      function Ai(e, t) {
        var n = we(e, t), r = Ut(n);
        return n == r ? t : Ge(r);
      }
      function _a(e, t) {
        if (t > e.lastLine())
          return t;
        var n = we(e, t), r;
        if (!or(e, n))
          return t;
        for (; r = Wn(n); )
          n = r.find(1, !0).line;
        return Ge(n) + 1;
      }
      function or(e, t) {
        var n = Vt && t.markedSpans;
        if (n) {
          for (var r = void 0, i = 0; i < n.length; ++i)
            if (r = n[i], !!r.marker.collapsed) {
              if (r.from == null)
                return !0;
              if (!r.marker.widgetNode && r.from == 0 && r.marker.inclusiveLeft && Ei(e, t, r))
                return !0;
            }
        }
      }
      function Ei(e, t, n) {
        if (n.to == null) {
          var r = n.marker.find(1, !0);
          return Ei(e, r.line, ln(r.line.markedSpans, n.marker));
        }
        if (n.marker.inclusiveRight && n.to == t.text.length)
          return !0;
        for (var i = void 0, a = 0; a < t.markedSpans.length; ++a)
          if (i = t.markedSpans[a], i.marker.collapsed && !i.marker.widgetNode && i.from == n.to && (i.to == null || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && Ei(e, t, i))
            return !0;
      }
      function er(e) {
        e = Ut(e);
        for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
          var i = n.lines[r];
          if (i == e)
            break;
          t += i.height;
        }
        for (var a = n.parent; a; n = a, a = n.parent)
          for (var o = 0; o < a.children.length; ++o) {
            var u = a.children[o];
            if (u == n)
              break;
            t += u.height;
          }
        return t;
      }
      function qn(e) {
        if (e.height == 0)
          return 0;
        for (var t = e.text.length, n, r = e; n = Pa(r); ) {
          var i = n.find(0, !0);
          r = i.from.line, t += i.from.ch - i.to.ch;
        }
        for (r = e; n = Wn(r); ) {
          var a = n.find(0, !0);
          t -= r.text.length - a.from.ch, r = a.to.line, t += r.text.length - a.to.ch;
        }
        return t;
      }
      function Li(e) {
        var t = e.display, n = e.doc;
        t.maxLine = we(n, n.first), t.maxLineLength = qn(t.maxLine), t.maxLineChanged = !0, n.iter(function(r) {
          var i = qn(r);
          i > t.maxLineLength && (t.maxLineLength = i, t.maxLine = r);
        });
      }
      var Or = function(e, t, n) {
        this.text = e, Ha(this, t), this.height = n ? n(this) : 1;
      };
      Or.prototype.lineNo = function() {
        return Ge(this);
      }, Ne(Or);
      function Au(e, t, n, r) {
        e.text = t, e.stateAfter && (e.stateAfter = null), e.styles && (e.styles = null), e.order != null && (e.order = null), Na(e), Ha(e, n);
        var i = r ? r(e) : 1;
        i != e.height && Yt(e, i);
      }
      function Eu(e) {
        e.parent = null, Na(e);
      }
      var Lu = {}, Tu = {};
      function Wa(e, t) {
        if (!e || /^\s*$/.test(e))
          return null;
        var n = t.addModeClass ? Tu : Lu;
        return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"));
      }
      function qa(e, t) {
        var n = te("span", null, null, ee ? "padding-right: .1px" : null), r = {
          pre: te("pre", [n], "CodeMirror-line"),
          content: n,
          col: 0,
          pos: 0,
          cm: e,
          trailingSpace: !1,
          splitSpaces: e.getOption("lineWrapping")
        };
        t.measure = {};
        for (var i = 0; i <= (t.rest ? t.rest.length : 0); i++) {
          var a = i ? t.rest[i - 1] : t.line, o = void 0;
          r.pos = 0, r.addToken = Mu, rn(e.display.measure) && (o = x(a, e.doc.direction)) && (r.addToken = Ou(r.addToken, o)), r.map = [];
          var u = t != e.display.externalMeasured && Ge(a);
          Nu(a, r, Aa(e, a, u)), a.styleClasses && (a.styleClasses.bgClass && (r.bgClass = Wt(a.styleClasses.bgClass, r.bgClass || "")), a.styleClasses.textClass && (r.textClass = Wt(a.styleClasses.textClass, r.textClass || ""))), r.map.length == 0 && r.map.push(0, 0, r.content.appendChild(In(e.display.measure))), i == 0 ? (t.measure.map = r.map, t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map), (t.measure.caches || (t.measure.caches = [])).push({}));
        }
        if (ee) {
          var s = r.content.lastChild;
          (/\bcm-tab\b/.test(s.className) || s.querySelector && s.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack");
        }
        return ye(e, "renderLine", e, t.line, r.pre), r.pre.className && (r.textClass = Wt(r.pre.className, r.textClass || "")), r;
      }
      function Bu(e) {
        var t = L("span", "•", "cm-invalidchar");
        return t.title = "\\u" + e.charCodeAt(0).toString(16), t.setAttribute("aria-label", t.title), t;
      }
      function Mu(e, t, n, r, i, a, o) {
        if (t) {
          var u = e.splitSpaces ? Iu(t, e.trailingSpace) : t, s = e.cm.state.specialChars, c = !1, g;
          if (!s.test(t))
            e.col += t.length, g = document.createTextNode(u), e.map.push(e.pos, e.pos + t.length, g), B && _ < 9 && (c = !0), e.pos += t.length;
          else {
            g = document.createDocumentFragment();
            for (var m = 0; ; ) {
              s.lastIndex = m;
              var T = s.exec(t), F = T ? T.index - m : t.length - m;
              if (F) {
                var U = document.createTextNode(u.slice(m, m + F));
                B && _ < 9 ? g.appendChild(L("span", [U])) : g.appendChild(U), e.map.push(e.pos, e.pos + F, U), e.col += F, e.pos += F;
              }
              if (!T)
                break;
              m += F + 1;
              var Y = void 0;
              if (T[0] == "	") {
                var V = e.cm.options.tabSize, fe = V - e.col % V;
                Y = g.appendChild(L("span", Ht(fe), "cm-tab")), Y.setAttribute("role", "presentation"), Y.setAttribute("cm-text", "	"), e.col += fe;
              } else T[0] == "\r" || T[0] == `
` ? (Y = g.appendChild(L("span", T[0] == "\r" ? "␍" : "␤", "cm-invalidchar")), Y.setAttribute("cm-text", T[0]), e.col += 1) : (Y = e.cm.options.specialCharPlaceholder(T[0]), Y.setAttribute("cm-text", T[0]), B && _ < 9 ? g.appendChild(L("span", [Y])) : g.appendChild(Y), e.col += 1);
              e.map.push(e.pos, e.pos + 1, Y), e.pos++;
            }
          }
          if (e.trailingSpace = u.charCodeAt(t.length - 1) == 32, n || r || i || c || a || o) {
            var ge = n || "";
            r && (ge += r), i && (ge += i);
            var ce = L("span", [g], ge, a);
            if (o)
              for (var ve in o)
                o.hasOwnProperty(ve) && ve != "style" && ve != "class" && ce.setAttribute(ve, o[ve]);
            return e.content.appendChild(ce);
          }
          e.content.appendChild(g);
        }
      }
      function Iu(e, t) {
        if (e.length > 1 && !/  /.test(e))
          return e;
        for (var n = t, r = "", i = 0; i < e.length; i++) {
          var a = e.charAt(i);
          a == " " && n && (i == e.length - 1 || e.charCodeAt(i + 1) == 32) && (a = " "), r += a, n = a == " ";
        }
        return r;
      }
      function Ou(e, t) {
        return function(n, r, i, a, o, u, s) {
          i = i ? i + " cm-force-border" : "cm-force-border";
          for (var c = n.pos, g = c + r.length; ; ) {
            for (var m = void 0, T = 0; T < t.length && (m = t[T], !(m.to > c && m.from <= c)); T++)
              ;
            if (m.to >= g)
              return e(n, r, i, a, o, u, s);
            e(n, r.slice(0, m.to - c), i, a, null, u, s), a = null, r = r.slice(m.to - c), c = m.to;
          }
        };
      }
      function Ua(e, t, n, r) {
        var i = !r && n.widgetNode;
        i && e.map.push(e.pos, e.pos + t, i), !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))), i.setAttribute("cm-marker", n.id)), i && (e.cm.display.input.setUneditable(i), e.content.appendChild(i)), e.pos += t, e.trailingSpace = !1;
      }
      function Nu(e, t, n) {
        var r = e.markedSpans, i = e.text, a = 0;
        if (!r) {
          for (var o = 1; o < n.length; o += 2)
            t.addToken(t, i.slice(a, a = n[o]), Wa(n[o + 1], t.cm.options));
          return;
        }
        for (var u = i.length, s = 0, c = 1, g = "", m, T, F = 0, U, Y, V, fe, ge; ; ) {
          if (F == s) {
            U = Y = V = T = "", ge = null, fe = null, F = 1 / 0;
            for (var ce = [], ve = void 0, Fe = 0; Fe < r.length; ++Fe) {
              var Se = r[Fe], Re = Se.marker;
              if (Re.type == "bookmark" && Se.from == s && Re.widgetNode)
                ce.push(Re);
              else if (Se.from <= s && (Se.to == null || Se.to > s || Re.collapsed && Se.to == s && Se.from == s)) {
                if (Se.to != null && Se.to != s && F > Se.to && (F = Se.to, Y = ""), Re.className && (U += " " + Re.className), Re.css && (T = (T ? T + ";" : "") + Re.css), Re.startStyle && Se.from == s && (V += " " + Re.startStyle), Re.endStyle && Se.to == F && (ve || (ve = [])).push(Re.endStyle, Se.to), Re.title && ((ge || (ge = {})).title = Re.title), Re.attributes)
                  for (var Qe in Re.attributes)
                    (ge || (ge = {}))[Qe] = Re.attributes[Qe];
                Re.collapsed && (!fe || Fi(fe.marker, Re) < 0) && (fe = Se);
              } else Se.from > s && F > Se.from && (F = Se.from);
            }
            if (ve)
              for (var vt = 0; vt < ve.length; vt += 2)
                ve[vt + 1] == F && (Y += " " + ve[vt]);
            if (!fe || fe.from == s)
              for (var tt = 0; tt < ce.length; ++tt)
                Ua(t, 0, ce[tt]);
            if (fe && (fe.from || 0) == s) {
              if (Ua(
                t,
                (fe.to == null ? u + 1 : fe.to) - s,
                fe.marker,
                fe.from == null
              ), fe.to == null)
                return;
              fe.to == s && (fe = !1);
            }
          }
          if (s >= u)
            break;
          for (var Nt = Math.min(u, F); ; ) {
            if (g) {
              var Tt = s + g.length;
              if (!fe) {
                var ft = Tt > Nt ? g.slice(0, Nt - s) : g;
                t.addToken(
                  t,
                  ft,
                  m ? m + U : U,
                  V,
                  s + ft.length == F ? Y : "",
                  T,
                  ge
                );
              }
              if (Tt >= Nt) {
                g = g.slice(Nt - s), s = Nt;
                break;
              }
              s = Tt, V = "";
            }
            g = i.slice(a, a = n[c++]), m = Wa(n[c++], t.cm.options);
          }
        }
      }
      function Ga(e, t, n) {
        this.line = t, this.rest = Fu(t), this.size = this.rest ? Ge(De(this.rest)) - n + 1 : 1, this.node = this.text = null, this.hidden = or(e, t);
      }
      function Un(e, t, n) {
        for (var r = [], i, a = t; a < n; a = i) {
          var o = new Ga(e.doc, we(e.doc, a), a);
          i = a + o.size, r.push(o);
        }
        return r;
      }
      var Nr = null;
      function Hu(e) {
        Nr ? Nr.ops.push(e) : e.ownsGroup = Nr = {
          ops: [e],
          delayedCallbacks: []
        };
      }
      function Ru(e) {
        var t = e.delayedCallbacks, n = 0;
        do {
          for (; n < t.length; n++)
            t[n].call(null);
          for (var r = 0; r < e.ops.length; r++) {
            var i = e.ops[r];
            if (i.cursorActivityHandlers)
              for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
                i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm);
          }
        } while (n < t.length);
      }
      function Pu(e, t) {
        var n = e.ownsGroup;
        if (n)
          try {
            Ru(n);
          } finally {
            Nr = null, t(n);
          }
      }
      var un = null;
      function dt(e, t) {
        var n = ie(e, t);
        if (n.length) {
          var r = Array.prototype.slice.call(arguments, 2), i;
          Nr ? i = Nr.delayedCallbacks : un ? i = un : (i = un = [], setTimeout(zu, 0));
          for (var a = function(u) {
            i.push(function() {
              return n[u].apply(null, r);
            });
          }, o = 0; o < n.length; ++o)
            a(o);
        }
      }
      function zu() {
        var e = un;
        un = null;
        for (var t = 0; t < e.length; ++t)
          e[t]();
      }
      function ja(e, t, n, r) {
        for (var i = 0; i < t.changes.length; i++) {
          var a = t.changes[i];
          a == "text" ? Wu(e, t) : a == "gutter" ? Xa(e, t, n, r) : a == "class" ? Ti(e, t) : a == "widget" && qu(e, t, r);
        }
        t.changes = null;
      }
      function sn(e) {
        return e.node == e.text && (e.node = L("div", null, null, "position: relative"), e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text), e.node.appendChild(e.text), B && _ < 8 && (e.node.style.zIndex = 2)), e.node;
      }
      function _u(e, t) {
        var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
        if (n && (n += " CodeMirror-linebackground"), t.background)
          n ? t.background.className = n : (t.background.parentNode.removeChild(t.background), t.background = null);
        else if (n) {
          var r = sn(t);
          t.background = r.insertBefore(L("div", null, n), r.firstChild), e.display.input.setUneditable(t.background);
        }
      }
      function Ka(e, t) {
        var n = e.display.externalMeasured;
        return n && n.line == t.line ? (e.display.externalMeasured = null, t.measure = n.measure, n.built) : qa(e, t);
      }
      function Wu(e, t) {
        var n = t.text.className, r = Ka(e, t);
        t.text == t.node && (t.node = r.pre), t.text.parentNode.replaceChild(r.pre, t.text), t.text = r.pre, r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass, t.textClass = r.textClass, Ti(e, t)) : n && (t.text.className = n);
      }
      function Ti(e, t) {
        _u(e, t), t.line.wrapClass ? sn(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
        var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
        t.text.className = n || "";
      }
      function Xa(e, t, n, r) {
        if (t.gutter && (t.node.removeChild(t.gutter), t.gutter = null), t.gutterBackground && (t.node.removeChild(t.gutterBackground), t.gutterBackground = null), t.line.gutterClass) {
          var i = sn(t);
          t.gutterBackground = L(
            "div",
            null,
            "CodeMirror-gutter-background " + t.line.gutterClass,
            "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px; width: " + r.gutterTotalWidth + "px"
          ), e.display.input.setUneditable(t.gutterBackground), i.insertBefore(t.gutterBackground, t.text);
        }
        var a = t.line.gutterMarkers;
        if (e.options.lineNumbers || a) {
          var o = sn(t), u = t.gutter = L("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? r.fixedPos : -r.gutterTotalWidth) + "px");
          if (u.setAttribute("aria-hidden", "true"), e.display.input.setUneditable(u), o.insertBefore(u, t.text), t.line.gutterClass && (u.className += " " + t.line.gutterClass), e.options.lineNumbers && (!a || !a["CodeMirror-linenumbers"]) && (t.lineNumber = u.appendChild(
            L(
              "div",
              Di(e.options, n),
              "CodeMirror-linenumber CodeMirror-gutter-elt",
              "left: " + r.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"
            )
          )), a)
            for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
              var c = e.display.gutterSpecs[s].className, g = a.hasOwnProperty(c) && a[c];
              g && u.appendChild(L(
                "div",
                [g],
                "CodeMirror-gutter-elt",
                "left: " + r.gutterLeft[c] + "px; width: " + r.gutterWidth[c] + "px"
              ));
            }
        }
      }
      function qu(e, t, n) {
        t.alignable && (t.alignable = null);
        for (var r = se("CodeMirror-linewidget"), i = t.node.firstChild, a = void 0; i; i = a)
          a = i.nextSibling, r.test(i.className) && t.node.removeChild(i);
        Ya(e, t, n);
      }
      function Uu(e, t, n, r) {
        var i = Ka(e, t);
        return t.text = t.node = i.pre, i.bgClass && (t.bgClass = i.bgClass), i.textClass && (t.textClass = i.textClass), Ti(e, t), Xa(e, t, n, r), Ya(e, t, r), t.node;
      }
      function Ya(e, t, n) {
        if (Za(e, t.line, t, n, !0), t.rest)
          for (var r = 0; r < t.rest.length; r++)
            Za(e, t.rest[r], t, n, !1);
      }
      function Za(e, t, n, r, i) {
        if (t.widgets)
          for (var a = sn(n), o = 0, u = t.widgets; o < u.length; ++o) {
            var s = u[o], c = L("div", [s.node], "CodeMirror-linewidget" + (s.className ? " " + s.className : ""));
            s.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"), Gu(s, c, n, r), e.display.input.setUneditable(c), i && s.above ? a.insertBefore(c, n.gutter || n.text) : a.appendChild(c), dt(s, "redraw");
          }
      }
      function Gu(e, t, n, r) {
        if (e.noHScroll) {
          (n.alignable || (n.alignable = [])).push(t);
          var i = r.wrapperWidth;
          t.style.left = r.fixedPos + "px", e.coverGutter || (i -= r.gutterTotalWidth, t.style.paddingLeft = r.gutterTotalWidth + "px"), t.style.width = i + "px";
        }
        e.coverGutter && (t.style.zIndex = 5, t.style.position = "relative", e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"));
      }
      function fn(e) {
        if (e.height != null)
          return e.height;
        var t = e.doc.cm;
        if (!t)
          return 0;
        if (!be(document.body, e.node)) {
          var n = "position: relative;";
          e.coverGutter && (n += "margin-left: -" + t.display.gutters.offsetWidth + "px;"), e.noHScroll && (n += "width: " + t.display.wrapper.clientWidth + "px;"), He(t.display.measure, L("div", [e.node], null, n));
        }
        return e.height = e.node.parentNode.offsetHeight;
      }
      function tr(e, t) {
        for (var n = kt(t); n != e.wrapper; n = n.parentNode)
          if (!n || n.nodeType == 1 && n.getAttribute("cm-ignore-events") == "true" || n.parentNode == e.sizer && n != e.mover)
            return !0;
      }
      function Gn(e) {
        return e.lineSpace.offsetTop;
      }
      function Bi(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight;
      }
      function Qa(e) {
        if (e.cachedPaddingH)
          return e.cachedPaddingH;
        var t = He(e.measure, L("pre", "x", "CodeMirror-line-like")), n = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle, r = { left: parseInt(n.paddingLeft), right: parseInt(n.paddingRight) };
        return !isNaN(r.left) && !isNaN(r.right) && (e.cachedPaddingH = r), r;
      }
      function Qt(e) {
        return We - e.display.nativeBarWidth;
      }
      function xr(e) {
        return e.display.scroller.clientWidth - Qt(e) - e.display.barWidth;
      }
      function Mi(e) {
        return e.display.scroller.clientHeight - Qt(e) - e.display.barHeight;
      }
      function ju(e, t, n) {
        var r = e.options.lineWrapping, i = r && xr(e);
        if (!t.measure.heights || r && t.measure.width != i) {
          var a = t.measure.heights = [];
          if (r) {
            t.measure.width = i;
            for (var o = t.text.firstChild.getClientRects(), u = 0; u < o.length - 1; u++) {
              var s = o[u], c = o[u + 1];
              Math.abs(s.bottom - c.bottom) > 2 && a.push((s.bottom + c.top) / 2 - n.top);
            }
          }
          a.push(n.bottom - n.top);
        }
      }
      function $a(e, t, n) {
        if (e.line == t)
          return { map: e.measure.map, cache: e.measure.cache };
        if (e.rest) {
          for (var r = 0; r < e.rest.length; r++)
            if (e.rest[r] == t)
              return { map: e.measure.maps[r], cache: e.measure.caches[r] };
          for (var i = 0; i < e.rest.length; i++)
            if (Ge(e.rest[i]) > n)
              return { map: e.measure.maps[i], cache: e.measure.caches[i], before: !0 };
        }
      }
      function Ku(e, t) {
        t = Ut(t);
        var n = Ge(t), r = e.display.externalMeasured = new Ga(e.doc, t, n);
        r.lineN = n;
        var i = r.built = qa(e, r);
        return r.text = i.pre, He(e.display.lineMeasure, i.pre), r;
      }
      function Ja(e, t, n, r) {
        return $t(e, Hr(e, t), n, r);
      }
      function Ii(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
          return e.display.view[Cr(e, t)];
        var n = e.display.externalMeasured;
        if (n && t >= n.lineN && t < n.lineN + n.size)
          return n;
      }
      function Hr(e, t) {
        var n = Ge(t), r = Ii(e, n);
        r && !r.text ? r = null : r && r.changes && (ja(e, r, n, Pi(e)), e.curOp.forceUpdate = !0), r || (r = Ku(e, t));
        var i = $a(r, t, n);
        return {
          line: t,
          view: r,
          rect: null,
          map: i.map,
          cache: i.cache,
          before: i.before,
          hasHeights: !1
        };
      }
      function $t(e, t, n, r, i) {
        t.before && (n = -1);
        var a = n + (r || ""), o;
        return t.cache.hasOwnProperty(a) ? o = t.cache[a] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()), t.hasHeights || (ju(e, t.view, t.rect), t.hasHeights = !0), o = Yu(e, t, n, r), o.bogus || (t.cache[a] = o)), {
          left: o.left,
          right: o.right,
          top: i ? o.rtop : o.top,
          bottom: i ? o.rbottom : o.bottom
        };
      }
      var Va = { left: 0, right: 0, top: 0, bottom: 0 };
      function eo(e, t, n) {
        for (var r, i, a, o, u, s, c = 0; c < e.length; c += 3)
          if (u = e[c], s = e[c + 1], t < u ? (i = 0, a = 1, o = "left") : t < s ? (i = t - u, a = i + 1) : (c == e.length - 3 || t == s && e[c + 3] > t) && (a = s - u, i = a - 1, t >= s && (o = "right")), i != null) {
            if (r = e[c + 2], u == s && n == (r.insertLeft ? "left" : "right") && (o = n), n == "left" && i == 0)
              for (; c && e[c - 2] == e[c - 3] && e[c - 1].insertLeft; )
                r = e[(c -= 3) + 2], o = "left";
            if (n == "right" && i == s - u)
              for (; c < e.length - 3 && e[c + 3] == e[c + 4] && !e[c + 5].insertLeft; )
                r = e[(c += 3) + 2], o = "right";
            break;
          }
        return { node: r, start: i, end: a, collapse: o, coverStart: u, coverEnd: s };
      }
      function Xu(e, t) {
        var n = Va;
        if (t == "left")
          for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++)
            ;
        else
          for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--)
            ;
        return n;
      }
      function Yu(e, t, n, r) {
        var i = eo(t.map, n, r), a = i.node, o = i.start, u = i.end, s = i.collapse, c;
        if (a.nodeType == 3) {
          for (var g = 0; g < 4; g++) {
            for (; o && l(t.line.text.charAt(i.coverStart + o)); )
              --o;
            for (; i.coverStart + u < i.coverEnd && l(t.line.text.charAt(i.coverStart + u)); )
              ++u;
            if (B && _ < 9 && o == 0 && u == i.coverEnd - i.coverStart ? c = a.parentNode.getBoundingClientRect() : c = Xu($(a, o, u).getClientRects(), r), c.left || c.right || o == 0)
              break;
            u = o, o = o - 1, s = "right";
          }
          B && _ < 11 && (c = Zu(e.display.measure, c));
        } else {
          o > 0 && (s = r = "right");
          var m;
          e.options.lineWrapping && (m = a.getClientRects()).length > 1 ? c = m[r == "right" ? m.length - 1 : 0] : c = a.getBoundingClientRect();
        }
        if (B && _ < 9 && !o && (!c || !c.left && !c.right)) {
          var T = a.parentNode.getClientRects()[0];
          T ? c = { left: T.left, right: T.left + Pr(e.display), top: T.top, bottom: T.bottom } : c = Va;
        }
        for (var F = c.top - t.rect.top, U = c.bottom - t.rect.top, Y = (F + U) / 2, V = t.view.measure.heights, fe = 0; fe < V.length - 1 && !(Y < V[fe]); fe++)
          ;
        var ge = fe ? V[fe - 1] : 0, ce = V[fe], ve = {
          left: (s == "right" ? c.right : c.left) - t.rect.left,
          right: (s == "left" ? c.left : c.right) - t.rect.left,
          top: ge,
          bottom: ce
        };
        return !c.left && !c.right && (ve.bogus = !0), e.options.singleCursorHeightPerLine || (ve.rtop = F, ve.rbottom = U), ve;
      }
      function Zu(e, t) {
        if (!window.screen || screen.logicalXDPI == null || screen.logicalXDPI == screen.deviceXDPI || !qt(e))
          return t;
        var n = screen.logicalXDPI / screen.deviceXDPI, r = screen.logicalYDPI / screen.deviceYDPI;
        return {
          left: t.left * n,
          right: t.right * n,
          top: t.top * r,
          bottom: t.bottom * r
        };
      }
      function to(e) {
        if (e.measure && (e.measure.cache = {}, e.measure.heights = null, e.rest))
          for (var t = 0; t < e.rest.length; t++)
            e.measure.caches[t] = {};
      }
      function ro(e) {
        e.display.externalMeasure = null, Ee(e.display.lineMeasure);
        for (var t = 0; t < e.display.view.length; t++)
          to(e.display.view[t]);
      }
      function cn(e) {
        ro(e), e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null, e.options.lineWrapping || (e.display.maxLineChanged = !0), e.display.lineNumChars = null;
      }
      function no(e) {
        return K && X ? -(e.body.getBoundingClientRect().left - parseInt(getComputedStyle(e.body).marginLeft)) : e.defaultView.pageXOffset || (e.documentElement || e.body).scrollLeft;
      }
      function io(e) {
        return K && X ? -(e.body.getBoundingClientRect().top - parseInt(getComputedStyle(e.body).marginTop)) : e.defaultView.pageYOffset || (e.documentElement || e.body).scrollTop;
      }
      function Oi(e) {
        var t = Ut(e), n = t.widgets, r = 0;
        if (n)
          for (var i = 0; i < n.length; ++i)
            n[i].above && (r += fn(n[i]));
        return r;
      }
      function jn(e, t, n, r, i) {
        if (!i) {
          var a = Oi(t);
          n.top += a, n.bottom += a;
        }
        if (r == "line")
          return n;
        r || (r = "local");
        var o = er(t);
        if (r == "local" ? o += Gn(e.display) : o -= e.display.viewOffset, r == "page" || r == "window") {
          var u = e.display.lineSpace.getBoundingClientRect();
          o += u.top + (r == "window" ? 0 : io(p(e)));
          var s = u.left + (r == "window" ? 0 : no(p(e)));
          n.left += s, n.right += s;
        }
        return n.top += o, n.bottom += o, n;
      }
      function ao(e, t, n) {
        if (n == "div")
          return t;
        var r = t.left, i = t.top;
        if (n == "page")
          r -= no(p(e)), i -= io(p(e));
        else if (n == "local" || !n) {
          var a = e.display.sizer.getBoundingClientRect();
          r += a.left, i += a.top;
        }
        var o = e.display.lineSpace.getBoundingClientRect();
        return { left: r - o.left, top: i - o.top };
      }
      function Kn(e, t, n, r, i) {
        return r || (r = we(e.doc, t.line)), jn(e, r, Ja(e, r, t.ch, i), n);
      }
      function Gt(e, t, n, r, i, a) {
        r = r || we(e.doc, t.line), i || (i = Hr(e, r));
        function o(U, Y) {
          var V = $t(e, i, U, Y ? "right" : "left", a);
          return Y ? V.left = V.right : V.right = V.left, jn(e, r, V, n);
        }
        var u = x(r, e.doc.direction), s = t.ch, c = t.sticky;
        if (s >= r.text.length ? (s = r.text.length, c = "before") : s <= 0 && (s = 0, c = "after"), !u)
          return o(c == "before" ? s - 1 : s, c == "before");
        function g(U, Y, V) {
          var fe = u[Y], ge = fe.level == 1;
          return o(V ? U - 1 : U, ge != V);
        }
        var m = I(u, s, c), T = C, F = g(s, m, c == "before");
        return T != null && (F.other = g(s, T, c != "before")), F;
      }
      function oo(e, t) {
        var n = 0;
        t = Oe(e.doc, t), e.options.lineWrapping || (n = Pr(e.display) * t.ch);
        var r = we(e.doc, t.line), i = er(r) + Gn(e.display);
        return { left: n, right: n, top: i, bottom: i + r.height };
      }
      function Ni(e, t, n, r, i) {
        var a = J(e, t, n);
        return a.xRel = i, r && (a.outside = r), a;
      }
      function Hi(e, t, n) {
        var r = e.doc;
        if (n += e.display.viewOffset, n < 0)
          return Ni(r.first, 0, null, -1, -1);
        var i = yr(r, n), a = r.first + r.size - 1;
        if (i > a)
          return Ni(r.first + r.size - 1, we(r, a).text.length, null, 1, 1);
        t < 0 && (t = 0);
        for (var o = we(r, i); ; ) {
          var u = Qu(e, o, i, t, n), s = ku(o, u.ch + (u.xRel > 0 || u.outside > 0 ? 1 : 0));
          if (!s)
            return u;
          var c = s.find(1);
          if (c.line == i)
            return c;
          o = we(r, i = c.line);
        }
      }
      function lo(e, t, n, r) {
        r -= Oi(t);
        var i = t.text.length, a = v(function(o) {
          return $t(e, n, o - 1).bottom <= r;
        }, i, 0);
        return i = v(function(o) {
          return $t(e, n, o).top > r;
        }, a, i), { begin: a, end: i };
      }
      function uo(e, t, n, r) {
        n || (n = Hr(e, t));
        var i = jn(e, t, $t(e, n, r), "line").top;
        return lo(e, t, n, i);
      }
      function Ri(e, t, n, r) {
        return e.bottom <= n ? !1 : e.top > n ? !0 : (r ? e.left : e.right) > t;
      }
      function Qu(e, t, n, r, i) {
        i -= er(t);
        var a = Hr(e, t), o = Oi(t), u = 0, s = t.text.length, c = !0, g = x(t, e.doc.direction);
        if (g) {
          var m = (e.options.lineWrapping ? Ju : $u)(e, t, n, a, g, r, i);
          c = m.level != 1, u = c ? m.from : m.to - 1, s = c ? m.to : m.from - 1;
        }
        var T = null, F = null, U = v(function(Fe) {
          var Se = $t(e, a, Fe);
          return Se.top += o, Se.bottom += o, Ri(Se, r, i, !1) ? (Se.top <= i && Se.left <= r && (T = Fe, F = Se), !0) : !1;
        }, u, s), Y, V, fe = !1;
        if (F) {
          var ge = r - F.left < F.right - r, ce = ge == c;
          U = T + (ce ? 0 : 1), V = ce ? "after" : "before", Y = ge ? F.left : F.right;
        } else {
          !c && (U == s || U == u) && U++, V = U == 0 ? "after" : U == t.text.length ? "before" : $t(e, a, U - (c ? 1 : 0)).bottom + o <= i == c ? "after" : "before";
          var ve = Gt(e, J(n, U, V), "line", t, a);
          Y = ve.left, fe = i < ve.top ? -1 : i >= ve.bottom ? 1 : 0;
        }
        return U = f(t.text, U, 1), Ni(n, U, V, fe, r - Y);
      }
      function $u(e, t, n, r, i, a, o) {
        var u = v(function(m) {
          var T = i[m], F = T.level != 1;
          return Ri(Gt(
            e,
            J(n, F ? T.to : T.from, F ? "before" : "after"),
            "line",
            t,
            r
          ), a, o, !0);
        }, 0, i.length - 1), s = i[u];
        if (u > 0) {
          var c = s.level != 1, g = Gt(
            e,
            J(n, c ? s.from : s.to, c ? "after" : "before"),
            "line",
            t,
            r
          );
          Ri(g, a, o, !0) && g.top > o && (s = i[u - 1]);
        }
        return s;
      }
      function Ju(e, t, n, r, i, a, o) {
        var u = lo(e, t, r, o), s = u.begin, c = u.end;
        /\s/.test(t.text.charAt(c - 1)) && c--;
        for (var g = null, m = null, T = 0; T < i.length; T++) {
          var F = i[T];
          if (!(F.from >= c || F.to <= s)) {
            var U = F.level != 1, Y = $t(e, r, U ? Math.min(c, F.to) - 1 : Math.max(s, F.from)).right, V = Y < a ? a - Y + 1e9 : Y - a;
            (!g || m > V) && (g = F, m = V);
          }
        }
        return g || (g = i[i.length - 1]), g.from < s && (g = { from: s, to: g.to, level: g.level }), g.to > c && (g = { from: g.from, to: c, level: g.level }), g;
      }
      var Dr;
      function Rr(e) {
        if (e.cachedTextHeight != null)
          return e.cachedTextHeight;
        if (Dr == null) {
          Dr = L("pre", null, "CodeMirror-line-like");
          for (var t = 0; t < 49; ++t)
            Dr.appendChild(document.createTextNode("x")), Dr.appendChild(L("br"));
          Dr.appendChild(document.createTextNode("x"));
        }
        He(e.measure, Dr);
        var n = Dr.offsetHeight / 50;
        return n > 3 && (e.cachedTextHeight = n), Ee(e.measure), n || 1;
      }
      function Pr(e) {
        if (e.cachedCharWidth != null)
          return e.cachedCharWidth;
        var t = L("span", "xxxxxxxxxx"), n = L("pre", [t], "CodeMirror-line-like");
        He(e.measure, n);
        var r = t.getBoundingClientRect(), i = (r.right - r.left) / 10;
        return i > 2 && (e.cachedCharWidth = i), i || 10;
      }
      function Pi(e) {
        for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, a = t.gutters.firstChild, o = 0; a; a = a.nextSibling, ++o) {
          var u = e.display.gutterSpecs[o].className;
          n[u] = a.offsetLeft + a.clientLeft + i, r[u] = a.clientWidth;
        }
        return {
          fixedPos: zi(t),
          gutterTotalWidth: t.gutters.offsetWidth,
          gutterLeft: n,
          gutterWidth: r,
          wrapperWidth: t.wrapper.clientWidth
        };
      }
      function zi(e) {
        return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left;
      }
      function so(e) {
        var t = Rr(e.display), n = e.options.lineWrapping, r = n && Math.max(5, e.display.scroller.clientWidth / Pr(e.display) - 3);
        return function(i) {
          if (or(e.doc, i))
            return 0;
          var a = 0;
          if (i.widgets)
            for (var o = 0; o < i.widgets.length; o++)
              i.widgets[o].height && (a += i.widgets[o].height);
          return n ? a + (Math.ceil(i.text.length / r) || 1) * t : a + t;
        };
      }
      function _i(e) {
        var t = e.doc, n = so(e);
        t.iter(function(r) {
          var i = n(r);
          i != r.height && Yt(r, i);
        });
      }
      function br(e, t, n, r) {
        var i = e.display;
        if (!n && kt(t).getAttribute("cm-not-content") == "true")
          return null;
        var a, o, u = i.lineSpace.getBoundingClientRect();
        try {
          a = t.clientX - u.left, o = t.clientY - u.top;
        } catch {
          return null;
        }
        var s = Hi(e, a, o), c;
        if (r && s.xRel > 0 && (c = we(e.doc, s.line).text).length == s.ch) {
          var g = Ke(c, c.length, e.options.tabSize) - c.length;
          s = J(s.line, Math.max(0, Math.round((a - Qa(e.display).left) / Pr(e.display)) - g));
        }
        return s;
      }
      function Cr(e, t) {
        if (t >= e.display.viewTo || (t -= e.display.viewFrom, t < 0))
          return null;
        for (var n = e.display.view, r = 0; r < n.length; r++)
          if (t -= n[r].size, t < 0)
            return r;
      }
      function Et(e, t, n, r) {
        t == null && (t = e.doc.first), n == null && (n = e.doc.first + e.doc.size), r || (r = 0);
        var i = e.display;
        if (r && n < i.viewTo && (i.updateLineNumbers == null || i.updateLineNumbers > t) && (i.updateLineNumbers = t), e.curOp.viewChanged = !0, t >= i.viewTo)
          Vt && Ai(e.doc, t) < i.viewTo && ur(e);
        else if (n <= i.viewFrom)
          Vt && _a(e.doc, n + r) > i.viewFrom ? ur(e) : (i.viewFrom += r, i.viewTo += r);
        else if (t <= i.viewFrom && n >= i.viewTo)
          ur(e);
        else if (t <= i.viewFrom) {
          var a = Xn(e, n, n + r, 1);
          a ? (i.view = i.view.slice(a.index), i.viewFrom = a.lineN, i.viewTo += r) : ur(e);
        } else if (n >= i.viewTo) {
          var o = Xn(e, t, t, -1);
          o ? (i.view = i.view.slice(0, o.index), i.viewTo = o.lineN) : ur(e);
        } else {
          var u = Xn(e, t, t, -1), s = Xn(e, n, n + r, 1);
          u && s ? (i.view = i.view.slice(0, u.index).concat(Un(e, u.lineN, s.lineN)).concat(i.view.slice(s.index)), i.viewTo += r) : ur(e);
        }
        var c = i.externalMeasured;
        c && (n < c.lineN ? c.lineN += r : t < c.lineN + c.size && (i.externalMeasured = null));
      }
      function lr(e, t, n) {
        e.curOp.viewChanged = !0;
        var r = e.display, i = e.display.externalMeasured;
        if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null), !(t < r.viewFrom || t >= r.viewTo)) {
          var a = r.view[Cr(e, t)];
          if (a.node != null) {
            var o = a.changes || (a.changes = []);
            Pe(o, n) == -1 && o.push(n);
          }
        }
      }
      function ur(e) {
        e.display.viewFrom = e.display.viewTo = e.doc.first, e.display.view = [], e.display.viewOffset = 0;
      }
      function Xn(e, t, n, r) {
        var i = Cr(e, t), a, o = e.display.view;
        if (!Vt || n == e.doc.first + e.doc.size)
          return { index: i, lineN: n };
        for (var u = e.display.viewFrom, s = 0; s < i; s++)
          u += o[s].size;
        if (u != t) {
          if (r > 0) {
            if (i == o.length - 1)
              return null;
            a = u + o[i].size - t, i++;
          } else
            a = u - t;
          t += a, n += a;
        }
        for (; Ai(e.doc, n) != n; ) {
          if (i == (r < 0 ? 0 : o.length - 1))
            return null;
          n += r * o[i - (r < 0 ? 1 : 0)].size, i += r;
        }
        return { index: i, lineN: n };
      }
      function Vu(e, t, n) {
        var r = e.display, i = r.view;
        i.length == 0 || t >= r.viewTo || n <= r.viewFrom ? (r.view = Un(e, t, n), r.viewFrom = t) : (r.viewFrom > t ? r.view = Un(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(Cr(e, t))), r.viewFrom = t, r.viewTo < n ? r.view = r.view.concat(Un(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, Cr(e, n)))), r.viewTo = n;
      }
      function fo(e) {
        for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
          var i = t[r];
          !i.hidden && (!i.node || i.changes) && ++n;
        }
        return n;
      }
      function hn(e) {
        e.display.input.showSelection(e.display.input.prepareSelection());
      }
      function co(e, t) {
        t === void 0 && (t = !0);
        var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), a = r.selection = document.createDocumentFragment(), o = e.options.$customCursor;
        o && (t = !0);
        for (var u = 0; u < n.sel.ranges.length; u++)
          if (!(!t && u == n.sel.primIndex)) {
            var s = n.sel.ranges[u];
            if (!(s.from().line >= e.display.viewTo || s.to().line < e.display.viewFrom)) {
              var c = s.empty();
              if (o) {
                var g = o(e, s);
                g && Wi(e, g, i);
              } else (c || e.options.showCursorWhenSelecting) && Wi(e, s.head, i);
              c || es(e, s, a);
            }
          }
        return r;
      }
      function Wi(e, t, n) {
        var r = Gt(e, t, "div", null, null, !e.options.singleCursorHeightPerLine), i = n.appendChild(L("div", " ", "CodeMirror-cursor"));
        if (i.style.left = r.left + "px", i.style.top = r.top + "px", i.style.height = Math.max(0, r.bottom - r.top) * e.options.cursorHeight + "px", /\bcm-fat-cursor\b/.test(e.getWrapperElement().className)) {
          var a = Kn(e, t, "div", null, null), o = a.right - a.left;
          i.style.width = (o > 0 ? o : e.defaultCharWidth()) + "px";
        }
        if (r.other) {
          var u = n.appendChild(L("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
          u.style.display = "", u.style.left = r.other.left + "px", u.style.top = r.other.top + "px", u.style.height = (r.other.bottom - r.other.top) * 0.85 + "px";
        }
      }
      function Yn(e, t) {
        return e.top - t.top || e.left - t.left;
      }
      function es(e, t, n) {
        var r = e.display, i = e.doc, a = document.createDocumentFragment(), o = Qa(e.display), u = o.left, s = Math.max(r.sizerWidth, xr(e) - r.sizer.offsetLeft) - o.right, c = i.direction == "ltr";
        function g(ce, ve, Fe, Se) {
          ve < 0 && (ve = 0), ve = Math.round(ve), Se = Math.round(Se), a.appendChild(L("div", null, "CodeMirror-selected", "position: absolute; left: " + ce + `px;
                             top: ` + ve + "px; width: " + (Fe ?? s - ce) + `px;
                             height: ` + (Se - ve) + "px"));
        }
        function m(ce, ve, Fe) {
          var Se = we(i, ce), Re = Se.text.length, Qe, vt;
          function tt(ft, Bt) {
            return Kn(e, J(ce, ft), "div", Se, Bt);
          }
          function Nt(ft, Bt, xt) {
            var ht = uo(e, Se, null, ft), ct = Bt == "ltr" == (xt == "after") ? "left" : "right", it = xt == "after" ? ht.begin : ht.end - (/\s/.test(Se.text.charAt(ht.end - 1)) ? 2 : 1);
            return tt(it, ct)[ct];
          }
          var Tt = x(Se, i.direction);
          return y(Tt, ve || 0, Fe ?? Re, function(ft, Bt, xt, ht) {
            var ct = xt == "ltr", it = tt(ft, ct ? "left" : "right"), Mt = tt(Bt - 1, ct ? "right" : "left"), $r = ve == null && ft == 0, pr = Fe == null && Bt == Re, wt = ht == 0, Jt = !Tt || ht == Tt.length - 1;
            if (Mt.top - it.top <= 3) {
              var mt = (c ? $r : pr) && wt, pa = (c ? pr : $r) && Jt, ir = mt ? u : (ct ? it : Mt).left, Ar = pa ? s : (ct ? Mt : it).right;
              g(ir, it.top, Ar - ir, it.bottom);
            } else {
              var Er, Ft, Jr, ga;
              ct ? (Er = c && $r && wt ? u : it.left, Ft = c ? s : Nt(ft, xt, "before"), Jr = c ? u : Nt(Bt, xt, "after"), ga = c && pr && Jt ? s : Mt.right) : (Er = c ? Nt(ft, xt, "before") : u, Ft = !c && $r && wt ? s : it.right, Jr = !c && pr && Jt ? u : Mt.left, ga = c ? Nt(Bt, xt, "after") : s), g(Er, it.top, Ft - Er, it.bottom), it.bottom < Mt.top && g(u, it.bottom, null, Mt.top), g(Jr, Mt.top, ga - Jr, Mt.bottom);
            }
            (!Qe || Yn(it, Qe) < 0) && (Qe = it), Yn(Mt, Qe) < 0 && (Qe = Mt), (!vt || Yn(it, vt) < 0) && (vt = it), Yn(Mt, vt) < 0 && (vt = Mt);
          }), { start: Qe, end: vt };
        }
        var T = t.from(), F = t.to();
        if (T.line == F.line)
          m(T.line, T.ch, F.ch);
        else {
          var U = we(i, T.line), Y = we(i, F.line), V = Ut(U) == Ut(Y), fe = m(T.line, T.ch, V ? U.text.length + 1 : null).end, ge = m(F.line, V ? 0 : null, F.ch).start;
          V && (fe.top < ge.top - 2 ? (g(fe.right, fe.top, null, fe.bottom), g(u, ge.top, ge.left, ge.bottom)) : g(fe.right, fe.top, ge.left - fe.right, fe.bottom)), fe.bottom < ge.top && g(u, fe.bottom, null, ge.top);
        }
        n.appendChild(a);
      }
      function qi(e) {
        if (e.state.focused) {
          var t = e.display;
          clearInterval(t.blinker);
          var n = !0;
          t.cursorDiv.style.visibility = "", e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() {
            e.hasFocus() || zr(e), t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden";
          }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden");
        }
      }
      function ho(e) {
        e.hasFocus() || (e.display.input.focus(), e.state.focused || Gi(e));
      }
      function Ui(e) {
        e.state.delayingBlurEvent = !0, setTimeout(function() {
          e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1, e.state.focused && zr(e));
        }, 100);
      }
      function Gi(e, t) {
        e.state.delayingBlurEvent && !e.state.draggingText && (e.state.delayingBlurEvent = !1), e.options.readOnly != "nocursor" && (e.state.focused || (ye(e, "focus", e, t), e.state.focused = !0, rt(e.display.wrapper, "CodeMirror-focused"), !e.curOp && e.display.selForContextMenu != e.doc.sel && (e.display.input.reset(), ee && setTimeout(function() {
          return e.display.input.reset(!0);
        }, 20)), e.display.input.receivedFocus()), qi(e));
      }
      function zr(e, t) {
        e.state.delayingBlurEvent || (e.state.focused && (ye(e, "blur", e, t), e.state.focused = !1, Le(e.display.wrapper, "CodeMirror-focused")), clearInterval(e.display.blinker), setTimeout(function() {
          e.state.focused || (e.display.shift = !1);
        }, 150));
      }
      function Zn(e) {
        for (var t = e.display, n = t.lineDiv.offsetTop, r = Math.max(0, t.scroller.getBoundingClientRect().top), i = t.lineDiv.getBoundingClientRect().top, a = 0, o = 0; o < t.view.length; o++) {
          var u = t.view[o], s = e.options.lineWrapping, c = void 0, g = 0;
          if (!u.hidden) {
            if (i += u.line.height, B && _ < 8) {
              var m = u.node.offsetTop + u.node.offsetHeight;
              c = m - n, n = m;
            } else {
              var T = u.node.getBoundingClientRect();
              c = T.bottom - T.top, !s && u.text.firstChild && (g = u.text.firstChild.getBoundingClientRect().right - T.left - 1);
            }
            var F = u.line.height - c;
            if ((F > 5e-3 || F < -5e-3) && (i < r && (a -= F), Yt(u.line, c), po(u.line), u.rest))
              for (var U = 0; U < u.rest.length; U++)
                po(u.rest[U]);
            if (g > e.display.sizerWidth) {
              var Y = Math.ceil(g / Pr(e.display));
              Y > e.display.maxLineLength && (e.display.maxLineLength = Y, e.display.maxLine = u.line, e.display.maxLineChanged = !0);
            }
          }
        }
        Math.abs(a) > 2 && (t.scroller.scrollTop += a);
      }
      function po(e) {
        if (e.widgets)
          for (var t = 0; t < e.widgets.length; ++t) {
            var n = e.widgets[t], r = n.node.parentNode;
            r && (n.height = r.offsetHeight);
          }
      }
      function Qn(e, t, n) {
        var r = n && n.top != null ? Math.max(0, n.top) : e.scroller.scrollTop;
        r = Math.floor(r - Gn(e));
        var i = n && n.bottom != null ? n.bottom : r + e.wrapper.clientHeight, a = yr(t, r), o = yr(t, i);
        if (n && n.ensure) {
          var u = n.ensure.from.line, s = n.ensure.to.line;
          u < a ? (a = u, o = yr(t, er(we(t, u)) + e.wrapper.clientHeight)) : Math.min(s, t.lastLine()) >= o && (a = yr(t, er(we(t, s)) - e.wrapper.clientHeight), o = s);
        }
        return { from: a, to: Math.max(o, a + 1) };
      }
      function ts(e, t) {
        if (!re(e, "scrollCursorIntoView")) {
          var n = e.display, r = n.sizer.getBoundingClientRect(), i = null, a = n.wrapper.ownerDocument;
          if (t.top + r.top < 0 ? i = !0 : t.bottom + r.top > (a.defaultView.innerHeight || a.documentElement.clientHeight) && (i = !1), i != null && !oe) {
            var o = L("div", "​", null, `position: absolute;
                         top: ` + (t.top - n.viewOffset - Gn(e.display)) + `px;
                         height: ` + (t.bottom - t.top + Qt(e) + n.barHeight) + `px;
                         left: ` + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
            e.display.lineSpace.appendChild(o), o.scrollIntoView(i), e.display.lineSpace.removeChild(o);
          }
        }
      }
      function rs(e, t, n, r) {
        r == null && (r = 0);
        var i;
        !e.options.lineWrapping && t == n && (n = t.sticky == "before" ? J(t.line, t.ch + 1, "before") : t, t = t.ch ? J(t.line, t.sticky == "before" ? t.ch - 1 : t.ch, "after") : t);
        for (var a = 0; a < 5; a++) {
          var o = !1, u = Gt(e, t), s = !n || n == t ? u : Gt(e, n);
          i = {
            left: Math.min(u.left, s.left),
            top: Math.min(u.top, s.top) - r,
            right: Math.max(u.left, s.left),
            bottom: Math.max(u.bottom, s.bottom) + r
          };
          var c = ji(e, i), g = e.doc.scrollTop, m = e.doc.scrollLeft;
          if (c.scrollTop != null && (pn(e, c.scrollTop), Math.abs(e.doc.scrollTop - g) > 1 && (o = !0)), c.scrollLeft != null && (wr(e, c.scrollLeft), Math.abs(e.doc.scrollLeft - m) > 1 && (o = !0)), !o)
            break;
        }
        return i;
      }
      function ns(e, t) {
        var n = ji(e, t);
        n.scrollTop != null && pn(e, n.scrollTop), n.scrollLeft != null && wr(e, n.scrollLeft);
      }
      function ji(e, t) {
        var n = e.display, r = Rr(e.display);
        t.top < 0 && (t.top = 0);
        var i = e.curOp && e.curOp.scrollTop != null ? e.curOp.scrollTop : n.scroller.scrollTop, a = Mi(e), o = {};
        t.bottom - t.top > a && (t.bottom = t.top + a);
        var u = e.doc.height + Bi(n), s = t.top < r, c = t.bottom > u - r;
        if (t.top < i)
          o.scrollTop = s ? 0 : t.top;
        else if (t.bottom > i + a) {
          var g = Math.min(t.top, (c ? u : t.bottom) - a);
          g != i && (o.scrollTop = g);
        }
        var m = e.options.fixedGutter ? 0 : n.gutters.offsetWidth, T = e.curOp && e.curOp.scrollLeft != null ? e.curOp.scrollLeft : n.scroller.scrollLeft - m, F = xr(e) - n.gutters.offsetWidth, U = t.right - t.left > F;
        return U && (t.right = t.left + F), t.left < 10 ? o.scrollLeft = 0 : t.left < T ? o.scrollLeft = Math.max(0, t.left + m - (U ? 0 : 10)) : t.right > F + T - 3 && (o.scrollLeft = t.right + (U ? 0 : 10) - F), o;
      }
      function Ki(e, t) {
        t != null && ($n(e), e.curOp.scrollTop = (e.curOp.scrollTop == null ? e.doc.scrollTop : e.curOp.scrollTop) + t);
      }
      function _r(e) {
        $n(e);
        var t = e.getCursor();
        e.curOp.scrollToPos = { from: t, to: t, margin: e.options.cursorScrollMargin };
      }
      function dn(e, t, n) {
        (t != null || n != null) && $n(e), t != null && (e.curOp.scrollLeft = t), n != null && (e.curOp.scrollTop = n);
      }
      function is(e, t) {
        $n(e), e.curOp.scrollToPos = t;
      }
      function $n(e) {
        var t = e.curOp.scrollToPos;
        if (t) {
          e.curOp.scrollToPos = null;
          var n = oo(e, t.from), r = oo(e, t.to);
          go(e, n, r, t.margin);
        }
      }
      function go(e, t, n, r) {
        var i = ji(e, {
          left: Math.min(t.left, n.left),
          top: Math.min(t.top, n.top) - r,
          right: Math.max(t.right, n.right),
          bottom: Math.max(t.bottom, n.bottom) + r
        });
        dn(e, i.scrollLeft, i.scrollTop);
      }
      function pn(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 || (S || Yi(e, { top: t }), vo(e, t, !0), S && Yi(e), mn(e, 100));
      }
      function vo(e, t, n) {
        t = Math.max(0, Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t)), !(e.display.scroller.scrollTop == t && !n) && (e.doc.scrollTop = t, e.display.scrollbars.setScrollTop(t), e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t));
      }
      function wr(e, t, n, r) {
        t = Math.max(0, Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth)), !((n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) && !r) && (e.doc.scrollLeft = t, bo(e), e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t), e.display.scrollbars.setScrollLeft(t));
      }
      function gn(e) {
        var t = e.display, n = t.gutters.offsetWidth, r = Math.round(e.doc.height + Bi(e.display));
        return {
          clientHeight: t.scroller.clientHeight,
          viewHeight: t.wrapper.clientHeight,
          scrollWidth: t.scroller.scrollWidth,
          clientWidth: t.scroller.clientWidth,
          viewWidth: t.wrapper.clientWidth,
          barLeft: e.options.fixedGutter ? n : 0,
          docHeight: r,
          scrollHeight: r + Qt(e) + t.barHeight,
          nativeBarWidth: t.nativeBarWidth,
          gutterWidth: n
        };
      }
      var kr = function(e, t, n) {
        this.cm = n;
        var r = this.vert = L("div", [L("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar"), i = this.horiz = L("div", [L("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        r.tabIndex = i.tabIndex = -1, e(r), e(i), E(r, "scroll", function() {
          r.clientHeight && t(r.scrollTop, "vertical");
        }), E(i, "scroll", function() {
          i.clientWidth && t(i.scrollLeft, "horizontal");
        }), this.checkedZeroWidth = !1, B && _ < 8 && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px");
      };
      kr.prototype.update = function(e) {
        var t = e.scrollWidth > e.clientWidth + 1, n = e.scrollHeight > e.clientHeight + 1, r = e.nativeBarWidth;
        if (n) {
          this.vert.style.display = "block", this.vert.style.bottom = t ? r + "px" : "0";
          var i = e.viewHeight - (t ? r : 0);
          this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
        } else
          this.vert.scrollTop = 0, this.vert.style.display = "", this.vert.firstChild.style.height = "0";
        if (t) {
          this.horiz.style.display = "block", this.horiz.style.right = n ? r + "px" : "0", this.horiz.style.left = e.barLeft + "px";
          var a = e.viewWidth - e.barLeft - (n ? r : 0);
          this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + a) + "px";
        } else
          this.horiz.style.display = "", this.horiz.firstChild.style.width = "0";
        return !this.checkedZeroWidth && e.clientHeight > 0 && (r == 0 && this.zeroWidthHack(), this.checkedZeroWidth = !0), { right: n ? r : 0, bottom: t ? r : 0 };
      }, kr.prototype.setScrollLeft = function(e) {
        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e), this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz");
      }, kr.prototype.setScrollTop = function(e) {
        this.vert.scrollTop != e && (this.vert.scrollTop = e), this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert");
      }, kr.prototype.zeroWidthHack = function() {
        var e = j && !pe ? "12px" : "18px";
        this.horiz.style.height = this.vert.style.width = e, this.horiz.style.visibility = this.vert.style.visibility = "hidden", this.disableHoriz = new Ye(), this.disableVert = new Ye();
      }, kr.prototype.enableZeroWidthBar = function(e, t, n) {
        e.style.visibility = "";
        function r() {
          var i = e.getBoundingClientRect(), a = n == "vert" ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1);
          a != e ? e.style.visibility = "hidden" : t.set(1e3, r);
        }
        t.set(1e3, r);
      }, kr.prototype.clear = function() {
        var e = this.horiz.parentNode;
        e.removeChild(this.horiz), e.removeChild(this.vert);
      };
      var vn = function() {
      };
      vn.prototype.update = function() {
        return { bottom: 0, right: 0 };
      }, vn.prototype.setScrollLeft = function() {
      }, vn.prototype.setScrollTop = function() {
      }, vn.prototype.clear = function() {
      };
      function Wr(e, t) {
        t || (t = gn(e));
        var n = e.display.barWidth, r = e.display.barHeight;
        mo(e, t);
        for (var i = 0; i < 4 && n != e.display.barWidth || r != e.display.barHeight; i++)
          n != e.display.barWidth && e.options.lineWrapping && Zn(e), mo(e, gn(e)), n = e.display.barWidth, r = e.display.barHeight;
      }
      function mo(e, t) {
        var n = e.display, r = n.scrollbars.update(t);
        n.sizer.style.paddingRight = (n.barWidth = r.right) + "px", n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px", n.heightForcer.style.borderBottom = r.bottom + "px solid transparent", r.right && r.bottom ? (n.scrollbarFiller.style.display = "block", n.scrollbarFiller.style.height = r.bottom + "px", n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "", r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block", n.gutterFiller.style.height = r.bottom + "px", n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = "";
      }
      var yo = { native: kr, null: vn };
      function xo(e) {
        e.display.scrollbars && (e.display.scrollbars.clear(), e.display.scrollbars.addClass && Le(e.display.wrapper, e.display.scrollbars.addClass)), e.display.scrollbars = new yo[e.options.scrollbarStyle](function(t) {
          e.display.wrapper.insertBefore(t, e.display.scrollbarFiller), E(t, "mousedown", function() {
            e.state.focused && setTimeout(function() {
              return e.display.input.focus();
            }, 0);
          }), t.setAttribute("cm-not-content", "true");
        }, function(t, n) {
          n == "horizontal" ? wr(e, t) : pn(e, t);
        }, e), e.display.scrollbars.addClass && rt(e.display.wrapper, e.display.scrollbars.addClass);
      }
      var as = 0;
      function Sr(e) {
        e.curOp = {
          cm: e,
          viewChanged: !1,
          // Flag that indicates that lines might need to be redrawn
          startHeight: e.doc.height,
          // Used to detect need to update scrollbar
          forceUpdate: !1,
          // Used to force a redraw
          updateInput: 0,
          // Whether to reset the input textarea
          typing: !1,
          // Whether this reset should be careful to leave existing text (for compositing)
          changeObjs: null,
          // Accumulated changes, for firing change events
          cursorActivityHandlers: null,
          // Set of handlers to fire cursorActivity on
          cursorActivityCalled: 0,
          // Tracks which cursorActivity handlers have been called already
          selectionChanged: !1,
          // Whether the selection needs to be redrawn
          updateMaxLine: !1,
          // Set when the widest line needs to be determined anew
          scrollLeft: null,
          scrollTop: null,
          // Intermediate scroll position, not pushed to DOM yet
          scrollToPos: null,
          // Used to scroll to a specific position
          focus: !1,
          id: ++as,
          // Unique ID
          markArrays: null
          // Used by addMarkedSpan
        }, Hu(e.curOp);
      }
      function Fr(e) {
        var t = e.curOp;
        t && Pu(t, function(n) {
          for (var r = 0; r < n.ops.length; r++)
            n.ops[r].cm.curOp = null;
          os(n);
        });
      }
      function os(e) {
        for (var t = e.ops, n = 0; n < t.length; n++)
          ls(t[n]);
        for (var r = 0; r < t.length; r++)
          us(t[r]);
        for (var i = 0; i < t.length; i++)
          ss(t[i]);
        for (var a = 0; a < t.length; a++)
          fs(t[a]);
        for (var o = 0; o < t.length; o++)
          cs(t[o]);
      }
      function ls(e) {
        var t = e.cm, n = t.display;
        ds(t), e.updateMaxLine && Li(t), e.mustUpdate = e.viewChanged || e.forceUpdate || e.scrollTop != null || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping, e.update = e.mustUpdate && new Jn(t, e.mustUpdate && { top: e.scrollTop, ensure: e.scrollToPos }, e.forceUpdate);
      }
      function us(e) {
        e.updatedDisplay = e.mustUpdate && Xi(e.cm, e.update);
      }
      function ss(e) {
        var t = e.cm, n = t.display;
        e.updatedDisplay && Zn(t), e.barMeasure = gn(t), n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Ja(t, n.maxLine, n.maxLine.text.length).left + 3, t.display.sizerWidth = e.adjustWidthTo, e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Qt(t) + t.display.barWidth), e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - xr(t))), (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection());
      }
      function fs(e) {
        var t = e.cm;
        e.adjustWidthTo != null && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px", e.maxScrollLeft < t.doc.scrollLeft && wr(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0), t.display.maxLineChanged = !1);
        var n = e.focus && e.focus == _e(G(t));
        e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n), (e.updatedDisplay || e.startHeight != t.doc.height) && Wr(t, e.barMeasure), e.updatedDisplay && Qi(t, e.barMeasure), e.selectionChanged && qi(t), t.state.focused && e.updateInput && t.display.input.reset(e.typing), n && ho(e.cm);
      }
      function cs(e) {
        var t = e.cm, n = t.display, r = t.doc;
        if (e.updatedDisplay && Do(t, e.update), n.wheelStartX != null && (e.scrollTop != null || e.scrollLeft != null || e.scrollToPos) && (n.wheelStartX = n.wheelStartY = null), e.scrollTop != null && vo(t, e.scrollTop, e.forceScroll), e.scrollLeft != null && wr(t, e.scrollLeft, !0, !0), e.scrollToPos) {
          var i = rs(
            t,
            Oe(r, e.scrollToPos.from),
            Oe(r, e.scrollToPos.to),
            e.scrollToPos.margin
          );
          ts(t, i);
        }
        var a = e.maybeHiddenMarkers, o = e.maybeUnhiddenMarkers;
        if (a)
          for (var u = 0; u < a.length; ++u)
            a[u].lines.length || ye(a[u], "hide");
        if (o)
          for (var s = 0; s < o.length; ++s)
            o[s].lines.length && ye(o[s], "unhide");
        n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop), e.changeObjs && ye(t, "changes", t, e.changeObjs), e.update && e.update.finish();
      }
      function Ot(e, t) {
        if (e.curOp)
          return t();
        Sr(e);
        try {
          return t();
        } finally {
          Fr(e);
        }
      }
      function pt(e, t) {
        return function() {
          if (e.curOp)
            return t.apply(e, arguments);
          Sr(e);
          try {
            return t.apply(e, arguments);
          } finally {
            Fr(e);
          }
        };
      }
      function St(e) {
        return function() {
          if (this.curOp)
            return e.apply(this, arguments);
          Sr(this);
          try {
            return e.apply(this, arguments);
          } finally {
            Fr(this);
          }
        };
      }
      function gt(e) {
        return function() {
          var t = this.cm;
          if (!t || t.curOp)
            return e.apply(this, arguments);
          Sr(t);
          try {
            return e.apply(this, arguments);
          } finally {
            Fr(t);
          }
        };
      }
      function mn(e, t) {
        e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, $e(hs, e));
      }
      function hs(e) {
        var t = e.doc;
        if (!(t.highlightFrontier >= e.display.viewTo)) {
          var n = +/* @__PURE__ */ new Date() + e.options.workTime, r = on(e, t.highlightFrontier), i = [];
          t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function(a) {
            if (r.line >= e.display.viewFrom) {
              var o = a.styles, u = a.text.length > e.options.maxHighlightLength ? vr(t.mode, r.state) : null, s = Fa(e, a, r, !0);
              u && (r.state = u), a.styles = s.styles;
              var c = a.styleClasses, g = s.classes;
              g ? a.styleClasses = g : c && (a.styleClasses = null);
              for (var m = !o || o.length != a.styles.length || c != g && (!c || !g || c.bgClass != g.bgClass || c.textClass != g.textClass), T = 0; !m && T < o.length; ++T)
                m = o[T] != a.styles[T];
              m && i.push(r.line), a.stateAfter = r.save(), r.nextLine();
            } else
              a.text.length <= e.options.maxHighlightLength && wi(e, a.text, r), a.stateAfter = r.line % 5 == 0 ? r.save() : null, r.nextLine();
            if (+/* @__PURE__ */ new Date() > n)
              return mn(e, e.options.workDelay), !0;
          }), t.highlightFrontier = r.line, t.modeFrontier = Math.max(t.modeFrontier, r.line), i.length && Ot(e, function() {
            for (var a = 0; a < i.length; a++)
              lr(e, i[a], "text");
          });
        }
      }
      var Jn = function(e, t, n) {
        var r = e.display;
        this.viewport = t, this.visible = Qn(r, e.doc, t), this.editorIsHidden = !r.wrapper.offsetWidth, this.wrapperHeight = r.wrapper.clientHeight, this.wrapperWidth = r.wrapper.clientWidth, this.oldDisplayWidth = xr(e), this.force = n, this.dims = Pi(e), this.events = [];
      };
      Jn.prototype.signal = function(e, t) {
        Me(e, t) && this.events.push(arguments);
      }, Jn.prototype.finish = function() {
        for (var e = 0; e < this.events.length; e++)
          ye.apply(null, this.events[e]);
      };
      function ds(e) {
        var t = e.display;
        !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth, t.heightForcer.style.height = Qt(e) + "px", t.sizer.style.marginBottom = -t.nativeBarWidth + "px", t.sizer.style.borderRightWidth = Qt(e) + "px", t.scrollbarsClipped = !0);
      }
      function ps(e) {
        if (e.hasFocus())
          return null;
        var t = _e(G(e));
        if (!t || !be(e.display.lineDiv, t))
          return null;
        var n = { activeElt: t };
        if (window.getSelection) {
          var r = Te(e).getSelection();
          r.anchorNode && r.extend && be(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode, n.anchorOffset = r.anchorOffset, n.focusNode = r.focusNode, n.focusOffset = r.focusOffset);
        }
        return n;
      }
      function gs(e) {
        if (!(!e || !e.activeElt || e.activeElt == _e(ze(e.activeElt))) && (e.activeElt.focus(), !/^(INPUT|TEXTAREA)$/.test(e.activeElt.nodeName) && e.anchorNode && be(document.body, e.anchorNode) && be(document.body, e.focusNode))) {
          var t = e.activeElt.ownerDocument, n = t.defaultView.getSelection(), r = t.createRange();
          r.setEnd(e.anchorNode, e.anchorOffset), r.collapse(!1), n.removeAllRanges(), n.addRange(r), n.extend(e.focusNode, e.focusOffset);
        }
      }
      function Xi(e, t) {
        var n = e.display, r = e.doc;
        if (t.editorIsHidden)
          return ur(e), !1;
        if (!t.force && t.visible.from >= n.viewFrom && t.visible.to <= n.viewTo && (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo) && n.renderedView == n.view && fo(e) == 0)
          return !1;
        Co(e) && (ur(e), t.dims = Pi(e));
        var i = r.first + r.size, a = Math.max(t.visible.from - e.options.viewportMargin, r.first), o = Math.min(i, t.visible.to + e.options.viewportMargin);
        n.viewFrom < a && a - n.viewFrom < 20 && (a = Math.max(r.first, n.viewFrom)), n.viewTo > o && n.viewTo - o < 20 && (o = Math.min(i, n.viewTo)), Vt && (a = Ai(e.doc, a), o = _a(e.doc, o));
        var u = a != n.viewFrom || o != n.viewTo || n.lastWrapHeight != t.wrapperHeight || n.lastWrapWidth != t.wrapperWidth;
        Vu(e, a, o), n.viewOffset = er(we(e.doc, n.viewFrom)), e.display.mover.style.top = n.viewOffset + "px";
        var s = fo(e);
        if (!u && s == 0 && !t.force && n.renderedView == n.view && (n.updateLineNumbers == null || n.updateLineNumbers >= n.viewTo))
          return !1;
        var c = ps(e);
        return s > 4 && (n.lineDiv.style.display = "none"), vs(e, n.updateLineNumbers, t.dims), s > 4 && (n.lineDiv.style.display = ""), n.renderedView = n.view, gs(c), Ee(n.cursorDiv), Ee(n.selectionDiv), n.gutters.style.height = n.sizer.style.minHeight = 0, u && (n.lastWrapHeight = t.wrapperHeight, n.lastWrapWidth = t.wrapperWidth, mn(e, 400)), n.updateLineNumbers = null, !0;
      }
      function Do(e, t) {
        for (var n = t.viewport, r = !0; ; r = !1) {
          if (!r || !e.options.lineWrapping || t.oldDisplayWidth == xr(e)) {
            if (n && n.top != null && (n = { top: Math.min(e.doc.height + Bi(e.display) - Mi(e), n.top) }), t.visible = Qn(e.display, e.doc, n), t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo)
              break;
          } else r && (t.visible = Qn(e.display, e.doc, n));
          if (!Xi(e, t))
            break;
          Zn(e);
          var i = gn(e);
          hn(e), Wr(e, i), Qi(e, i), t.force = !1;
        }
        t.signal(e, "update", e), (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo), e.display.reportedViewFrom = e.display.viewFrom, e.display.reportedViewTo = e.display.viewTo);
      }
      function Yi(e, t) {
        var n = new Jn(e, t);
        if (Xi(e, n)) {
          Zn(e), Do(e, n);
          var r = gn(e);
          hn(e), Wr(e, r), Qi(e, r), n.finish();
        }
      }
      function vs(e, t, n) {
        var r = e.display, i = e.options.lineNumbers, a = r.lineDiv, o = a.firstChild;
        function u(U) {
          var Y = U.nextSibling;
          return ee && j && e.display.currentWheelTarget == U ? U.style.display = "none" : U.parentNode.removeChild(U), Y;
        }
        for (var s = r.view, c = r.viewFrom, g = 0; g < s.length; g++) {
          var m = s[g];
          if (!m.hidden) if (!m.node || m.node.parentNode != a) {
            var T = Uu(e, m, c, n);
            a.insertBefore(T, o);
          } else {
            for (; o != m.node; )
              o = u(o);
            var F = i && t != null && t <= c && m.lineNumber;
            m.changes && (Pe(m.changes, "gutter") > -1 && (F = !1), ja(e, m, c, n)), F && (Ee(m.lineNumber), m.lineNumber.appendChild(document.createTextNode(Di(e.options, c)))), o = m.node.nextSibling;
          }
          c += m.size;
        }
        for (; o; )
          o = u(o);
      }
      function Zi(e) {
        var t = e.gutters.offsetWidth;
        e.sizer.style.marginLeft = t + "px", dt(e, "gutterChanged", e);
      }
      function Qi(e, t) {
        e.display.sizer.style.minHeight = t.docHeight + "px", e.display.heightForcer.style.top = t.docHeight + "px", e.display.gutters.style.height = t.docHeight + e.display.barHeight + Qt(e) + "px";
      }
      function bo(e) {
        var t = e.display, n = t.view;
        if (!(!t.alignWidgets && (!t.gutters.firstChild || !e.options.fixedGutter))) {
          for (var r = zi(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, a = r + "px", o = 0; o < n.length; o++)
            if (!n[o].hidden) {
              e.options.fixedGutter && (n[o].gutter && (n[o].gutter.style.left = a), n[o].gutterBackground && (n[o].gutterBackground.style.left = a));
              var u = n[o].alignable;
              if (u)
                for (var s = 0; s < u.length; s++)
                  u[s].style.left = a;
            }
          e.options.fixedGutter && (t.gutters.style.left = r + i + "px");
        }
      }
      function Co(e) {
        if (!e.options.lineNumbers)
          return !1;
        var t = e.doc, n = Di(e.options, t.first + t.size - 1), r = e.display;
        if (n.length != r.lineNumChars) {
          var i = r.measure.appendChild(L(
            "div",
            [L("div", n)],
            "CodeMirror-linenumber CodeMirror-gutter-elt"
          )), a = i.firstChild.offsetWidth, o = i.offsetWidth - a;
          return r.lineGutter.style.width = "", r.lineNumInnerWidth = Math.max(a, r.lineGutter.offsetWidth - o) + 1, r.lineNumWidth = r.lineNumInnerWidth + o, r.lineNumChars = r.lineNumInnerWidth ? n.length : -1, r.lineGutter.style.width = r.lineNumWidth + "px", Zi(e.display), !0;
        }
        return !1;
      }
      function $i(e, t) {
        for (var n = [], r = !1, i = 0; i < e.length; i++) {
          var a = e[i], o = null;
          if (typeof a != "string" && (o = a.style, a = a.className), a == "CodeMirror-linenumbers")
            if (t)
              r = !0;
            else
              continue;
          n.push({ className: a, style: o });
        }
        return t && !r && n.push({ className: "CodeMirror-linenumbers", style: null }), n;
      }
      function wo(e) {
        var t = e.gutters, n = e.gutterSpecs;
        Ee(t), e.lineGutter = null;
        for (var r = 0; r < n.length; ++r) {
          var i = n[r], a = i.className, o = i.style, u = t.appendChild(L("div", null, "CodeMirror-gutter " + a));
          o && (u.style.cssText = o), a == "CodeMirror-linenumbers" && (e.lineGutter = u, u.style.width = (e.lineNumWidth || 1) + "px");
        }
        t.style.display = n.length ? "" : "none", Zi(e);
      }
      function yn(e) {
        wo(e.display), Et(e), bo(e);
      }
      function ms(e, t, n, r) {
        var i = this;
        this.input = n, i.scrollbarFiller = L("div", null, "CodeMirror-scrollbar-filler"), i.scrollbarFiller.setAttribute("cm-not-content", "true"), i.gutterFiller = L("div", null, "CodeMirror-gutter-filler"), i.gutterFiller.setAttribute("cm-not-content", "true"), i.lineDiv = te("div", null, "CodeMirror-code"), i.selectionDiv = L("div", null, null, "position: relative; z-index: 1"), i.cursorDiv = L("div", null, "CodeMirror-cursors"), i.measure = L("div", null, "CodeMirror-measure"), i.lineMeasure = L("div", null, "CodeMirror-measure"), i.lineSpace = te(
          "div",
          [i.measure, i.lineMeasure, i.selectionDiv, i.cursorDiv, i.lineDiv],
          null,
          "position: relative; outline: none"
        );
        var a = te("div", [i.lineSpace], "CodeMirror-lines");
        i.mover = L("div", [a], null, "position: relative"), i.sizer = L("div", [i.mover], "CodeMirror-sizer"), i.sizerWidth = null, i.heightForcer = L("div", null, null, "position: absolute; height: " + We + "px; width: 1px;"), i.gutters = L("div", null, "CodeMirror-gutters"), i.lineGutter = null, i.scroller = L("div", [i.sizer, i.heightForcer, i.gutters], "CodeMirror-scroll"), i.scroller.setAttribute("tabIndex", "-1"), i.wrapper = L("div", [i.scrollbarFiller, i.gutterFiller, i.scroller], "CodeMirror"), K && ue === 105 && (i.wrapper.style.clipPath = "inset(0px)"), i.wrapper.setAttribute("translate", "no"), B && _ < 8 && (i.gutters.style.zIndex = -1, i.scroller.style.paddingRight = 0), !ee && !(S && q) && (i.scroller.draggable = !0), e && (e.appendChild ? e.appendChild(i.wrapper) : e(i.wrapper)), i.viewFrom = i.viewTo = t.first, i.reportedViewFrom = i.reportedViewTo = t.first, i.view = [], i.renderedView = null, i.externalMeasured = null, i.viewOffset = 0, i.lastWrapHeight = i.lastWrapWidth = 0, i.updateLineNumbers = null, i.nativeBarWidth = i.barHeight = i.barWidth = 0, i.scrollbarsClipped = !1, i.lineNumWidth = i.lineNumInnerWidth = i.lineNumChars = null, i.alignWidgets = !1, i.cachedCharWidth = i.cachedTextHeight = i.cachedPaddingH = null, i.maxLine = null, i.maxLineLength = 0, i.maxLineChanged = !1, i.wheelDX = i.wheelDY = i.wheelStartX = i.wheelStartY = null, i.shift = !1, i.selForContextMenu = null, i.activeTouch = null, i.gutterSpecs = $i(r.gutters, r.lineNumbers), wo(i), n.init(i);
      }
      var Vn = 0, rr = null;
      B ? rr = -0.53 : S ? rr = 15 : K ? rr = -0.7 : Ce && (rr = -1 / 3);
      function ko(e) {
        var t = e.wheelDeltaX, n = e.wheelDeltaY;
        return t == null && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail), n == null && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : n == null && (n = e.wheelDelta), { x: t, y: n };
      }
      function ys(e) {
        var t = ko(e);
        return t.x *= rr, t.y *= rr, t;
      }
      function So(e, t) {
        K && ue == 102 && (e.display.chromeScrollHack == null ? e.display.sizer.style.pointerEvents = "none" : clearTimeout(e.display.chromeScrollHack), e.display.chromeScrollHack = setTimeout(function() {
          e.display.chromeScrollHack = null, e.display.sizer.style.pointerEvents = "";
        }, 100));
        var n = ko(t), r = n.x, i = n.y, a = rr;
        t.deltaMode === 0 && (r = t.deltaX, i = t.deltaY, a = 1);
        var o = e.display, u = o.scroller, s = u.scrollWidth > u.clientWidth, c = u.scrollHeight > u.clientHeight;
        if (r && s || i && c) {
          if (i && j && ee) {
            e: for (var g = t.target, m = o.view; g != u; g = g.parentNode)
              for (var T = 0; T < m.length; T++)
                if (m[T].node == g) {
                  e.display.currentWheelTarget = g;
                  break e;
                }
          }
          if (r && !S && !ne && a != null) {
            i && c && pn(e, Math.max(0, u.scrollTop + i * a)), wr(e, Math.max(0, u.scrollLeft + r * a)), (!i || i && c) && Ae(t), o.wheelStartX = null;
            return;
          }
          if (i && a != null) {
            var F = i * a, U = e.doc.scrollTop, Y = U + o.wrapper.clientHeight;
            F < 0 ? U = Math.max(0, U + F - 50) : Y = Math.min(e.doc.height, Y + F + 50), Yi(e, { top: U, bottom: Y });
          }
          Vn < 20 && t.deltaMode !== 0 && (o.wheelStartX == null ? (o.wheelStartX = u.scrollLeft, o.wheelStartY = u.scrollTop, o.wheelDX = r, o.wheelDY = i, setTimeout(function() {
            if (o.wheelStartX != null) {
              var V = u.scrollLeft - o.wheelStartX, fe = u.scrollTop - o.wheelStartY, ge = fe && o.wheelDY && fe / o.wheelDY || V && o.wheelDX && V / o.wheelDX;
              o.wheelStartX = o.wheelStartY = null, ge && (rr = (rr * Vn + ge) / (Vn + 1), ++Vn);
            }
          }, 200)) : (o.wheelDX += r, o.wheelDY += i));
        }
      }
      var Pt = function(e, t) {
        this.ranges = e, this.primIndex = t;
      };
      Pt.prototype.primary = function() {
        return this.ranges[this.primIndex];
      }, Pt.prototype.equals = function(e) {
        if (e == this)
          return !0;
        if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
          return !1;
        for (var t = 0; t < this.ranges.length; t++) {
          var n = this.ranges[t], r = e.ranges[t];
          if (!bi(n.anchor, r.anchor) || !bi(n.head, r.head))
            return !1;
        }
        return !0;
      }, Pt.prototype.deepCopy = function() {
        for (var e = [], t = 0; t < this.ranges.length; t++)
          e[t] = new qe(Ci(this.ranges[t].anchor), Ci(this.ranges[t].head));
        return new Pt(e, this.primIndex);
      }, Pt.prototype.somethingSelected = function() {
        for (var e = 0; e < this.ranges.length; e++)
          if (!this.ranges[e].empty())
            return !0;
        return !1;
      }, Pt.prototype.contains = function(e, t) {
        t || (t = e);
        for (var n = 0; n < this.ranges.length; n++) {
          var r = this.ranges[n];
          if (Ie(t, r.from()) >= 0 && Ie(e, r.to()) <= 0)
            return n;
        }
        return -1;
      };
      var qe = function(e, t) {
        this.anchor = e, this.head = t;
      };
      qe.prototype.from = function() {
        return Hn(this.anchor, this.head);
      }, qe.prototype.to = function() {
        return Nn(this.anchor, this.head);
      }, qe.prototype.empty = function() {
        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch;
      };
      function jt(e, t, n) {
        var r = e && e.options.selectionsMayTouch, i = t[n];
        t.sort(function(T, F) {
          return Ie(T.from(), F.from());
        }), n = Pe(t, i);
        for (var a = 1; a < t.length; a++) {
          var o = t[a], u = t[a - 1], s = Ie(u.to(), o.from());
          if (r && !o.empty() ? s > 0 : s >= 0) {
            var c = Hn(u.from(), o.from()), g = Nn(u.to(), o.to()), m = u.empty() ? o.from() == o.head : u.from() == u.head;
            a <= n && --n, t.splice(--a, 2, new qe(m ? g : c, m ? c : g));
          }
        }
        return new Pt(t, n);
      }
      function sr(e, t) {
        return new Pt([new qe(e, t || e)], 0);
      }
      function fr(e) {
        return e.text ? J(
          e.from.line + e.text.length - 1,
          De(e.text).length + (e.text.length == 1 ? e.from.ch : 0)
        ) : e.to;
      }
      function Fo(e, t) {
        if (Ie(e, t.from) < 0)
          return e;
        if (Ie(e, t.to) <= 0)
          return fr(t);
        var n = e.line + t.text.length - (t.to.line - t.from.line) - 1, r = e.ch;
        return e.line == t.to.line && (r += fr(t).ch - t.to.ch), J(n, r);
      }
      function Ji(e, t) {
        for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
          var i = e.sel.ranges[r];
          n.push(new qe(
            Fo(i.anchor, t),
            Fo(i.head, t)
          ));
        }
        return jt(e.cm, n, e.sel.primIndex);
      }
      function Ao(e, t, n) {
        return e.line == t.line ? J(n.line, e.ch - t.ch + n.ch) : J(n.line + (e.line - t.line), e.ch);
      }
      function xs(e, t, n) {
        for (var r = [], i = J(e.first, 0), a = i, o = 0; o < t.length; o++) {
          var u = t[o], s = Ao(u.from, i, a), c = Ao(fr(u), i, a);
          if (i = u.to, a = c, n == "around") {
            var g = e.sel.ranges[o], m = Ie(g.head, g.anchor) < 0;
            r[o] = new qe(m ? c : s, m ? s : c);
          } else
            r[o] = new qe(s, s);
        }
        return new Pt(r, e.sel.primIndex);
      }
      function Vi(e) {
        e.doc.mode = Mr(e.options, e.doc.modeOption), xn(e);
      }
      function xn(e) {
        e.doc.iter(function(t) {
          t.stateAfter && (t.stateAfter = null), t.styles && (t.styles = null);
        }), e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first, mn(e, 100), e.state.modeGen++, e.curOp && Et(e);
      }
      function Eo(e, t) {
        return t.from.ch == 0 && t.to.ch == 0 && De(t.text) == "" && (!e.cm || e.cm.options.wholeLineUpdateBefore);
      }
      function ea(e, t, n, r) {
        function i(ge) {
          return n ? n[ge] : null;
        }
        function a(ge, ce, ve) {
          Au(ge, ce, ve, r), dt(ge, "change", ge, t);
        }
        function o(ge, ce) {
          for (var ve = [], Fe = ge; Fe < ce; ++Fe)
            ve.push(new Or(c[Fe], i(Fe), r));
          return ve;
        }
        var u = t.from, s = t.to, c = t.text, g = we(e, u.line), m = we(e, s.line), T = De(c), F = i(c.length - 1), U = s.line - u.line;
        if (t.full)
          e.insert(0, o(0, c.length)), e.remove(c.length, e.size - c.length);
        else if (Eo(e, t)) {
          var Y = o(0, c.length - 1);
          a(m, m.text, F), U && e.remove(u.line, U), Y.length && e.insert(u.line, Y);
        } else if (g == m)
          if (c.length == 1)
            a(g, g.text.slice(0, u.ch) + T + g.text.slice(s.ch), F);
          else {
            var V = o(1, c.length - 1);
            V.push(new Or(T + g.text.slice(s.ch), F, r)), a(g, g.text.slice(0, u.ch) + c[0], i(0)), e.insert(u.line + 1, V);
          }
        else if (c.length == 1)
          a(g, g.text.slice(0, u.ch) + c[0] + m.text.slice(s.ch), i(0)), e.remove(u.line + 1, U);
        else {
          a(g, g.text.slice(0, u.ch) + c[0], i(0)), a(m, T + m.text.slice(s.ch), F);
          var fe = o(1, c.length - 1);
          U > 1 && e.remove(u.line + 1, U - 1), e.insert(u.line + 1, fe);
        }
        dt(e, "change", e, t);
      }
      function cr(e, t, n) {
        function r(i, a, o) {
          if (i.linked)
            for (var u = 0; u < i.linked.length; ++u) {
              var s = i.linked[u];
              if (s.doc != a) {
                var c = o && s.sharedHist;
                n && !c || (t(s.doc, c), r(s.doc, i, c));
              }
            }
        }
        r(e, null, !0);
      }
      function Lo(e, t) {
        if (t.cm)
          throw new Error("This document is already in use.");
        e.doc = t, t.cm = e, _i(e), Vi(e), To(e), e.options.direction = t.direction, e.options.lineWrapping || Li(e), e.options.mode = t.modeOption, Et(e);
      }
      function To(e) {
        (e.doc.direction == "rtl" ? rt : Le)(e.display.lineDiv, "CodeMirror-rtl");
      }
      function Ds(e) {
        Ot(e, function() {
          To(e), Et(e);
        });
      }
      function ei(e) {
        this.done = [], this.undone = [], this.undoDepth = e ? e.undoDepth : 1 / 0, this.lastModTime = this.lastSelTime = 0, this.lastOp = this.lastSelOp = null, this.lastOrigin = this.lastSelOrigin = null, this.generation = this.maxGeneration = e ? e.maxGeneration : 1;
      }
      function ta(e, t) {
        var n = { from: Ci(t.from), to: fr(t), text: mr(e, t.from, t.to) };
        return Io(e, n, t.from.line, t.to.line + 1), cr(e, function(r) {
          return Io(r, n, t.from.line, t.to.line + 1);
        }, !0), n;
      }
      function Bo(e) {
        for (; e.length; ) {
          var t = De(e);
          if (t.ranges)
            e.pop();
          else
            break;
        }
      }
      function bs(e, t) {
        if (t)
          return Bo(e.done), De(e.done);
        if (e.done.length && !De(e.done).ranges)
          return De(e.done);
        if (e.done.length > 1 && !e.done[e.done.length - 2].ranges)
          return e.done.pop(), De(e.done);
      }
      function Mo(e, t, n, r) {
        var i = e.history;
        i.undone.length = 0;
        var a = +/* @__PURE__ */ new Date(), o, u;
        if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && (t.origin.charAt(0) == "+" && i.lastModTime > a - (e.cm ? e.cm.options.historyEventDelay : 500) || t.origin.charAt(0) == "*")) && (o = bs(i, i.lastOp == r)))
          u = De(o.changes), Ie(t.from, t.to) == 0 && Ie(t.from, u.to) == 0 ? u.to = fr(t) : o.changes.push(ta(e, t));
        else {
          var s = De(i.done);
          for ((!s || !s.ranges) && ti(e.sel, i.done), o = {
            changes: [ta(e, t)],
            generation: i.generation
          }, i.done.push(o); i.done.length > i.undoDepth; )
            i.done.shift(), i.done[0].ranges || i.done.shift();
        }
        i.done.push(n), i.generation = ++i.maxGeneration, i.lastModTime = i.lastSelTime = a, i.lastOp = i.lastSelOp = r, i.lastOrigin = i.lastSelOrigin = t.origin, u || ye(e, "historyAdded");
      }
      function Cs(e, t, n, r) {
        var i = t.charAt(0);
        return i == "*" || i == "+" && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && /* @__PURE__ */ new Date() - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500);
      }
      function ws(e, t, n, r) {
        var i = e.history, a = r && r.origin;
        n == i.lastSelOp || a && i.lastSelOrigin == a && (i.lastModTime == i.lastSelTime && i.lastOrigin == a || Cs(e, a, De(i.done), t)) ? i.done[i.done.length - 1] = t : ti(t, i.done), i.lastSelTime = +/* @__PURE__ */ new Date(), i.lastSelOrigin = a, i.lastSelOp = n, r && r.clearRedo !== !1 && Bo(i.undone);
      }
      function ti(e, t) {
        var n = De(t);
        n && n.ranges && n.equals(e) || t.push(e);
      }
      function Io(e, t, n, r) {
        var i = t["spans_" + e.id], a = 0;
        e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(o) {
          o.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[a] = o.markedSpans), ++a;
        });
      }
      function ks(e) {
        if (!e)
          return null;
        for (var t, n = 0; n < e.length; ++n)
          e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
        return t ? t.length ? t : null : e;
      }
      function Ss(e, t) {
        var n = t["spans_" + e.id];
        if (!n)
          return null;
        for (var r = [], i = 0; i < t.text.length; ++i)
          r.push(ks(n[i]));
        return r;
      }
      function Oo(e, t) {
        var n = Ss(e, t), r = Si(e, t);
        if (!n)
          return r;
        if (!r)
          return n;
        for (var i = 0; i < n.length; ++i) {
          var a = n[i], o = r[i];
          if (a && o)
            e: for (var u = 0; u < o.length; ++u) {
              for (var s = o[u], c = 0; c < a.length; ++c)
                if (a[c].marker == s.marker)
                  continue e;
              a.push(s);
            }
          else o && (n[i] = o);
        }
        return n;
      }
      function qr(e, t, n) {
        for (var r = [], i = 0; i < e.length; ++i) {
          var a = e[i];
          if (a.ranges) {
            r.push(n ? Pt.prototype.deepCopy.call(a) : a);
            continue;
          }
          var o = a.changes, u = [];
          r.push({ changes: u });
          for (var s = 0; s < o.length; ++s) {
            var c = o[s], g = void 0;
            if (u.push({ from: c.from, to: c.to, text: c.text }), t)
              for (var m in c)
                (g = m.match(/^spans_(\d+)$/)) && Pe(t, Number(g[1])) > -1 && (De(u)[m] = c[m], delete c[m]);
          }
        }
        return r;
      }
      function ra(e, t, n, r) {
        if (r) {
          var i = e.anchor;
          if (n) {
            var a = Ie(t, i) < 0;
            a != Ie(n, i) < 0 ? (i = t, t = n) : a != Ie(t, n) < 0 && (t = n);
          }
          return new qe(i, t);
        } else
          return new qe(n || t, t);
      }
      function ri(e, t, n, r, i) {
        i == null && (i = e.cm && (e.cm.display.shift || e.extend)), Ct(e, new Pt([ra(e.sel.primary(), t, n, i)], 0), r);
      }
      function No(e, t, n) {
        for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), a = 0; a < e.sel.ranges.length; a++)
          r[a] = ra(e.sel.ranges[a], t[a], null, i);
        var o = jt(e.cm, r, e.sel.primIndex);
        Ct(e, o, n);
      }
      function na(e, t, n, r) {
        var i = e.sel.ranges.slice(0);
        i[t] = n, Ct(e, jt(e.cm, i, e.sel.primIndex), r);
      }
      function Ho(e, t, n, r) {
        Ct(e, sr(t, n), r);
      }
      function Fs(e, t, n) {
        var r = {
          ranges: t.ranges,
          update: function(i) {
            this.ranges = [];
            for (var a = 0; a < i.length; a++)
              this.ranges[a] = new qe(
                Oe(e, i[a].anchor),
                Oe(e, i[a].head)
              );
          },
          origin: n && n.origin
        };
        return ye(e, "beforeSelectionChange", e, r), e.cm && ye(e.cm, "beforeSelectionChange", e.cm, r), r.ranges != t.ranges ? jt(e.cm, r.ranges, r.ranges.length - 1) : t;
      }
      function Ro(e, t, n) {
        var r = e.history.done, i = De(r);
        i && i.ranges ? (r[r.length - 1] = t, ni(e, t, n)) : Ct(e, t, n);
      }
      function Ct(e, t, n) {
        ni(e, t, n), ws(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n);
      }
      function ni(e, t, n) {
        (Me(e, "beforeSelectionChange") || e.cm && Me(e.cm, "beforeSelectionChange")) && (t = Fs(e, t, n));
        var r = n && n.bias || (Ie(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        Po(e, _o(e, t, r, !0)), !(n && n.scroll === !1) && e.cm && e.cm.getOption("readOnly") != "nocursor" && _r(e.cm);
      }
      function Po(e, t) {
        t.equals(e.sel) || (e.sel = t, e.cm && (e.cm.curOp.updateInput = 1, e.cm.curOp.selectionChanged = !0, Be(e.cm)), dt(e, "cursorActivity", e));
      }
      function zo(e) {
        Po(e, _o(e, e.sel, null, !1));
      }
      function _o(e, t, n, r) {
        for (var i, a = 0; a < t.ranges.length; a++) {
          var o = t.ranges[a], u = t.ranges.length == e.sel.ranges.length && e.sel.ranges[a], s = ii(e, o.anchor, u && u.anchor, n, r), c = o.head == o.anchor ? s : ii(e, o.head, u && u.head, n, r);
          (i || s != o.anchor || c != o.head) && (i || (i = t.ranges.slice(0, a)), i[a] = new qe(s, c));
        }
        return i ? jt(e.cm, i, t.primIndex) : t;
      }
      function Ur(e, t, n, r, i) {
        var a = we(e, t.line);
        if (a.markedSpans)
          for (var o = 0; o < a.markedSpans.length; ++o) {
            var u = a.markedSpans[o], s = u.marker, c = "selectLeft" in s ? !s.selectLeft : s.inclusiveLeft, g = "selectRight" in s ? !s.selectRight : s.inclusiveRight;
            if ((u.from == null || (c ? u.from <= t.ch : u.from < t.ch)) && (u.to == null || (g ? u.to >= t.ch : u.to > t.ch))) {
              if (i && (ye(s, "beforeCursorEnter"), s.explicitlyCleared))
                if (a.markedSpans) {
                  --o;
                  continue;
                } else
                  break;
              if (!s.atomic)
                continue;
              if (n) {
                var m = s.find(r < 0 ? 1 : -1), T = void 0;
                if ((r < 0 ? g : c) && (m = Wo(e, m, -r, m && m.line == t.line ? a : null)), m && m.line == t.line && (T = Ie(m, n)) && (r < 0 ? T < 0 : T > 0))
                  return Ur(e, m, t, r, i);
              }
              var F = s.find(r < 0 ? -1 : 1);
              return (r < 0 ? c : g) && (F = Wo(e, F, r, F.line == t.line ? a : null)), F ? Ur(e, F, t, r, i) : null;
            }
          }
        return t;
      }
      function ii(e, t, n, r, i) {
        var a = r || 1, o = Ur(e, t, n, a, i) || !i && Ur(e, t, n, a, !0) || Ur(e, t, n, -a, i) || !i && Ur(e, t, n, -a, !0);
        return o || (e.cantEdit = !0, J(e.first, 0));
      }
      function Wo(e, t, n, r) {
        return n < 0 && t.ch == 0 ? t.line > e.first ? Oe(e, J(t.line - 1)) : null : n > 0 && t.ch == (r || we(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? J(t.line + 1, 0) : null : new J(t.line, t.ch + n);
      }
      function qo(e) {
        e.setSelection(J(e.firstLine(), 0), J(e.lastLine()), at);
      }
      function Uo(e, t, n) {
        var r = {
          canceled: !1,
          from: t.from,
          to: t.to,
          text: t.text,
          origin: t.origin,
          cancel: function() {
            return r.canceled = !0;
          }
        };
        return n && (r.update = function(i, a, o, u) {
          i && (r.from = Oe(e, i)), a && (r.to = Oe(e, a)), o && (r.text = o), u !== void 0 && (r.origin = u);
        }), ye(e, "beforeChange", e, r), e.cm && ye(e.cm, "beforeChange", e.cm, r), r.canceled ? (e.cm && (e.cm.curOp.updateInput = 2), null) : { from: r.from, to: r.to, text: r.text, origin: r.origin };
      }
      function Gr(e, t, n) {
        if (e.cm) {
          if (!e.cm.curOp)
            return pt(e.cm, Gr)(e, t, n);
          if (e.cm.state.suppressEdits)
            return;
        }
        if (!((Me(e, "beforeChange") || e.cm && Me(e.cm, "beforeChange")) && (t = Uo(e, t, !0), !t))) {
          var r = Ia && !n && wu(e, t.from, t.to);
          if (r)
            for (var i = r.length - 1; i >= 0; --i)
              Go(e, { from: r[i].from, to: r[i].to, text: i ? [""] : t.text, origin: t.origin });
          else
            Go(e, t);
        }
      }
      function Go(e, t) {
        if (!(t.text.length == 1 && t.text[0] == "" && Ie(t.from, t.to) == 0)) {
          var n = Ji(e, t);
          Mo(e, t, n, e.cm ? e.cm.curOp.id : NaN), Dn(e, t, n, Si(e, t));
          var r = [];
          cr(e, function(i, a) {
            !a && Pe(r, i.history) == -1 && (Yo(i.history, t), r.push(i.history)), Dn(i, t, null, Si(i, t));
          });
        }
      }
      function ai(e, t, n) {
        var r = e.cm && e.cm.state.suppressEdits;
        if (!(r && !n)) {
          for (var i = e.history, a, o = e.sel, u = t == "undo" ? i.done : i.undone, s = t == "undo" ? i.undone : i.done, c = 0; c < u.length && (a = u[c], !(n ? a.ranges && !a.equals(e.sel) : !a.ranges)); c++)
            ;
          if (c != u.length) {
            for (i.lastOrigin = i.lastSelOrigin = null; ; )
              if (a = u.pop(), a.ranges) {
                if (ti(a, s), n && !a.equals(e.sel)) {
                  Ct(e, a, { clearRedo: !1 });
                  return;
                }
                o = a;
              } else if (r) {
                u.push(a);
                return;
              } else
                break;
            var g = [];
            ti(o, s), s.push({ changes: g, generation: i.generation }), i.generation = a.generation || ++i.maxGeneration;
            for (var m = Me(e, "beforeChange") || e.cm && Me(e.cm, "beforeChange"), T = function(Y) {
              var V = a.changes[Y];
              if (V.origin = t, m && !Uo(e, V, !1))
                return u.length = 0, {};
              g.push(ta(e, V));
              var fe = Y ? Ji(e, V) : De(u);
              Dn(e, V, fe, Oo(e, V)), !Y && e.cm && e.cm.scrollIntoView({ from: V.from, to: fr(V) });
              var ge = [];
              cr(e, function(ce, ve) {
                !ve && Pe(ge, ce.history) == -1 && (Yo(ce.history, V), ge.push(ce.history)), Dn(ce, V, null, Oo(ce, V));
              });
            }, F = a.changes.length - 1; F >= 0; --F) {
              var U = T(F);
              if (U) return U.v;
            }
          }
        }
      }
      function jo(e, t) {
        if (t != 0 && (e.first += t, e.sel = new Pt(lt(e.sel.ranges, function(i) {
          return new qe(
            J(i.anchor.line + t, i.anchor.ch),
            J(i.head.line + t, i.head.ch)
          );
        }), e.sel.primIndex), e.cm)) {
          Et(e.cm, e.first, e.first - t, t);
          for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
            lr(e.cm, r, "gutter");
        }
      }
      function Dn(e, t, n, r) {
        if (e.cm && !e.cm.curOp)
          return pt(e.cm, Dn)(e, t, n, r);
        if (t.to.line < e.first) {
          jo(e, t.text.length - 1 - (t.to.line - t.from.line));
          return;
        }
        if (!(t.from.line > e.lastLine())) {
          if (t.from.line < e.first) {
            var i = t.text.length - 1 - (e.first - t.from.line);
            jo(e, i), t = {
              from: J(e.first, 0),
              to: J(t.to.line + i, t.to.ch),
              text: [De(t.text)],
              origin: t.origin
            };
          }
          var a = e.lastLine();
          t.to.line > a && (t = {
            from: t.from,
            to: J(a, we(e, a).text.length),
            text: [t.text[0]],
            origin: t.origin
          }), t.removed = mr(e, t.from, t.to), n || (n = Ji(e, t)), e.cm ? As(e.cm, t, r) : ea(e, t, r), ni(e, n, at), e.cantEdit && ii(e, J(e.firstLine(), 0)) && (e.cantEdit = !1);
        }
      }
      function As(e, t, n) {
        var r = e.doc, i = e.display, a = t.from, o = t.to, u = !1, s = a.line;
        e.options.lineWrapping || (s = Ge(Ut(we(r, a.line))), r.iter(s, o.line + 1, function(F) {
          if (F == i.maxLine)
            return u = !0, !0;
        })), r.sel.contains(t.from, t.to) > -1 && Be(e), ea(r, t, n, so(e)), e.options.lineWrapping || (r.iter(s, a.line + t.text.length, function(F) {
          var U = qn(F);
          U > i.maxLineLength && (i.maxLine = F, i.maxLineLength = U, i.maxLineChanged = !0, u = !1);
        }), u && (e.curOp.updateMaxLine = !0)), vu(r, a.line), mn(e, 400);
        var c = t.text.length - (o.line - a.line) - 1;
        t.full ? Et(e) : a.line == o.line && t.text.length == 1 && !Eo(e.doc, t) ? lr(e, a.line, "text") : Et(e, a.line, o.line + 1, c);
        var g = Me(e, "changes"), m = Me(e, "change");
        if (m || g) {
          var T = {
            from: a,
            to: o,
            text: t.text,
            removed: t.removed,
            origin: t.origin
          };
          m && dt(e, "change", e, T), g && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(T);
        }
        e.display.selForContextMenu = null;
      }
      function jr(e, t, n, r, i) {
        var a;
        r || (r = n), Ie(r, n) < 0 && (a = [r, n], n = a[0], r = a[1]), typeof t == "string" && (t = e.splitLines(t)), Gr(e, { from: n, to: r, text: t, origin: i });
      }
      function Ko(e, t, n, r) {
        n < e.line ? e.line += r : t < e.line && (e.line = t, e.ch = 0);
      }
      function Xo(e, t, n, r) {
        for (var i = 0; i < e.length; ++i) {
          var a = e[i], o = !0;
          if (a.ranges) {
            a.copied || (a = e[i] = a.deepCopy(), a.copied = !0);
            for (var u = 0; u < a.ranges.length; u++)
              Ko(a.ranges[u].anchor, t, n, r), Ko(a.ranges[u].head, t, n, r);
            continue;
          }
          for (var s = 0; s < a.changes.length; ++s) {
            var c = a.changes[s];
            if (n < c.from.line)
              c.from = J(c.from.line + r, c.from.ch), c.to = J(c.to.line + r, c.to.ch);
            else if (t <= c.to.line) {
              o = !1;
              break;
            }
          }
          o || (e.splice(0, i + 1), i = 0);
        }
      }
      function Yo(e, t) {
        var n = t.from.line, r = t.to.line, i = t.text.length - (r - n) - 1;
        Xo(e.done, n, r, i), Xo(e.undone, n, r, i);
      }
      function bn(e, t, n, r) {
        var i = t, a = t;
        return typeof t == "number" ? a = we(e, ka(e, t)) : i = Ge(t), i == null ? null : (r(a, i) && e.cm && lr(e.cm, i, n), a);
      }
      function Cn(e) {
        this.lines = e, this.parent = null;
        for (var t = 0, n = 0; n < e.length; ++n)
          e[n].parent = this, t += e[n].height;
        this.height = t;
      }
      Cn.prototype = {
        chunkSize: function() {
          return this.lines.length;
        },
        // Remove the n lines at offset 'at'.
        removeInner: function(e, t) {
          for (var n = e, r = e + t; n < r; ++n) {
            var i = this.lines[n];
            this.height -= i.height, Eu(i), dt(i, "delete");
          }
          this.lines.splice(e, t);
        },
        // Helper used to collapse a small branch into a single leaf.
        collapse: function(e) {
          e.push.apply(e, this.lines);
        },
        // Insert the given array of lines at offset 'at', count them as
        // having the given height.
        insertInner: function(e, t, n) {
          this.height += n, this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
          for (var r = 0; r < t.length; ++r)
            t[r].parent = this;
        },
        // Used to iterate over a part of the tree.
        iterN: function(e, t, n) {
          for (var r = e + t; e < r; ++e)
            if (n(this.lines[e]))
              return !0;
        }
      };
      function wn(e) {
        this.children = e;
        for (var t = 0, n = 0, r = 0; r < e.length; ++r) {
          var i = e[r];
          t += i.chunkSize(), n += i.height, i.parent = this;
        }
        this.size = t, this.height = n, this.parent = null;
      }
      wn.prototype = {
        chunkSize: function() {
          return this.size;
        },
        removeInner: function(e, t) {
          this.size -= t;
          for (var n = 0; n < this.children.length; ++n) {
            var r = this.children[n], i = r.chunkSize();
            if (e < i) {
              var a = Math.min(t, i - e), o = r.height;
              if (r.removeInner(e, a), this.height -= o - r.height, i == a && (this.children.splice(n--, 1), r.parent = null), (t -= a) == 0)
                break;
              e = 0;
            } else
              e -= i;
          }
          if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0] instanceof Cn))) {
            var u = [];
            this.collapse(u), this.children = [new Cn(u)], this.children[0].parent = this;
          }
        },
        collapse: function(e) {
          for (var t = 0; t < this.children.length; ++t)
            this.children[t].collapse(e);
        },
        insertInner: function(e, t, n) {
          this.size += t.length, this.height += n;
          for (var r = 0; r < this.children.length; ++r) {
            var i = this.children[r], a = i.chunkSize();
            if (e <= a) {
              if (i.insertInner(e, t, n), i.lines && i.lines.length > 50) {
                for (var o = i.lines.length % 25 + 25, u = o; u < i.lines.length; ) {
                  var s = new Cn(i.lines.slice(u, u += 25));
                  i.height -= s.height, this.children.splice(++r, 0, s), s.parent = this;
                }
                i.lines = i.lines.slice(0, o), this.maybeSpill();
              }
              break;
            }
            e -= a;
          }
        },
        // When a node has grown, check whether it should be split.
        maybeSpill: function() {
          if (!(this.children.length <= 10)) {
            var e = this;
            do {
              var t = e.children.splice(e.children.length - 5, 5), n = new wn(t);
              if (e.parent) {
                e.size -= n.size, e.height -= n.height;
                var i = Pe(e.parent.children, e);
                e.parent.children.splice(i + 1, 0, n);
              } else {
                var r = new wn(e.children);
                r.parent = e, e.children = [r, n], e = r;
              }
              n.parent = e.parent;
            } while (e.children.length > 10);
            e.parent.maybeSpill();
          }
        },
        iterN: function(e, t, n) {
          for (var r = 0; r < this.children.length; ++r) {
            var i = this.children[r], a = i.chunkSize();
            if (e < a) {
              var o = Math.min(t, a - e);
              if (i.iterN(e, o, n))
                return !0;
              if ((t -= o) == 0)
                break;
              e = 0;
            } else
              e -= a;
          }
        }
      };
      var kn = function(e, t, n) {
        if (n)
          for (var r in n)
            n.hasOwnProperty(r) && (this[r] = n[r]);
        this.doc = e, this.node = t;
      };
      kn.prototype.clear = function() {
        var e = this.doc.cm, t = this.line.widgets, n = this.line, r = Ge(n);
        if (!(r == null || !t)) {
          for (var i = 0; i < t.length; ++i)
            t[i] == this && t.splice(i--, 1);
          t.length || (n.widgets = null);
          var a = fn(this);
          Yt(n, Math.max(0, n.height - a)), e && (Ot(e, function() {
            Zo(e, n, -a), lr(e, r, "widget");
          }), dt(e, "lineWidgetCleared", e, this, r));
        }
      }, kn.prototype.changed = function() {
        var e = this, t = this.height, n = this.doc.cm, r = this.line;
        this.height = null;
        var i = fn(this) - t;
        i && (or(this.doc, r) || Yt(r, r.height + i), n && Ot(n, function() {
          n.curOp.forceUpdate = !0, Zo(n, r, i), dt(n, "lineWidgetChanged", n, e, Ge(r));
        }));
      }, Ne(kn);
      function Zo(e, t, n) {
        er(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && Ki(e, n);
      }
      function Es(e, t, n, r) {
        var i = new kn(e, n, r), a = e.cm;
        return a && i.noHScroll && (a.display.alignWidgets = !0), bn(e, t, "widget", function(o) {
          var u = o.widgets || (o.widgets = []);
          if (i.insertAt == null ? u.push(i) : u.splice(Math.min(u.length, Math.max(0, i.insertAt)), 0, i), i.line = o, a && !or(e, o)) {
            var s = er(o) < e.scrollTop;
            Yt(o, o.height + fn(i)), s && Ki(a, i.height), a.curOp.forceUpdate = !0;
          }
          return !0;
        }), a && dt(a, "lineWidgetAdded", a, i, typeof t == "number" ? t : Ge(t)), i;
      }
      var Qo = 0, hr = function(e, t) {
        this.lines = [], this.type = t, this.doc = e, this.id = ++Qo;
      };
      hr.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          var e = this.doc.cm, t = e && !e.curOp;
          if (t && Sr(e), Me(this, "clear")) {
            var n = this.find();
            n && dt(this, "clear", n.from, n.to);
          }
          for (var r = null, i = null, a = 0; a < this.lines.length; ++a) {
            var o = this.lines[a], u = ln(o.markedSpans, this);
            e && !this.collapsed ? lr(e, Ge(o), "text") : e && (u.to != null && (i = Ge(o)), u.from != null && (r = Ge(o))), o.markedSpans = xu(o.markedSpans, u), u.from == null && this.collapsed && !or(this.doc, o) && e && Yt(o, Rr(e.display));
          }
          if (e && this.collapsed && !e.options.lineWrapping)
            for (var s = 0; s < this.lines.length; ++s) {
              var c = Ut(this.lines[s]), g = qn(c);
              g > e.display.maxLineLength && (e.display.maxLine = c, e.display.maxLineLength = g, e.display.maxLineChanged = !0);
            }
          r != null && e && this.collapsed && Et(e, r, i + 1), this.lines.length = 0, this.explicitlyCleared = !0, this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1, e && zo(e.doc)), e && dt(e, "markerCleared", e, this, r, i), t && Fr(e), this.parent && this.parent.clear();
        }
      }, hr.prototype.find = function(e, t) {
        e == null && this.type == "bookmark" && (e = 1);
        for (var n, r, i = 0; i < this.lines.length; ++i) {
          var a = this.lines[i], o = ln(a.markedSpans, this);
          if (o.from != null && (n = J(t ? a : Ge(a), o.from), e == -1))
            return n;
          if (o.to != null && (r = J(t ? a : Ge(a), o.to), e == 1))
            return r;
        }
        return n && { from: n, to: r };
      }, hr.prototype.changed = function() {
        var e = this, t = this.find(-1, !0), n = this, r = this.doc.cm;
        !t || !r || Ot(r, function() {
          var i = t.line, a = Ge(t.line), o = Ii(r, a);
          if (o && (to(o), r.curOp.selectionChanged = r.curOp.forceUpdate = !0), r.curOp.updateMaxLine = !0, !or(n.doc, i) && n.height != null) {
            var u = n.height;
            n.height = null;
            var s = fn(n) - u;
            s && Yt(i, i.height + s);
          }
          dt(r, "markerChanged", r, e);
        });
      }, hr.prototype.attachLine = function(e) {
        if (!this.lines.length && this.doc.cm) {
          var t = this.doc.cm.curOp;
          (!t.maybeHiddenMarkers || Pe(t.maybeHiddenMarkers, this) == -1) && (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this);
        }
        this.lines.push(e);
      }, hr.prototype.detachLine = function(e) {
        if (this.lines.splice(Pe(this.lines, e), 1), !this.lines.length && this.doc.cm) {
          var t = this.doc.cm.curOp;
          (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this);
        }
      }, Ne(hr);
      function Kr(e, t, n, r, i) {
        if (r && r.shared)
          return Ls(e, t, n, r, i);
        if (e.cm && !e.cm.curOp)
          return pt(e.cm, Kr)(e, t, n, r, i);
        var a = new hr(e, i), o = Ie(t, n);
        if (r && Je(r, a, !1), o > 0 || o == 0 && a.clearWhenEmpty !== !1)
          return a;
        if (a.replacedWith && (a.collapsed = !0, a.widgetNode = te("span", [a.replacedWith], "CodeMirror-widget"), r.handleMouseEvents || a.widgetNode.setAttribute("cm-ignore-events", "true"), r.insertLeft && (a.widgetNode.insertLeft = !0)), a.collapsed) {
          if (za(e, t.line, t, n, a) || t.line != n.line && za(e, n.line, t, n, a))
            throw new Error("Inserting collapsed marker partially overlapping an existing one");
          yu();
        }
        a.addToHistory && Mo(e, { from: t, to: n, origin: "markText" }, e.sel, NaN);
        var u = t.line, s = e.cm, c;
        if (e.iter(u, n.line + 1, function(m) {
          s && a.collapsed && !s.options.lineWrapping && Ut(m) == s.display.maxLine && (c = !0), a.collapsed && u != t.line && Yt(m, 0), Du(m, new Pn(
            a,
            u == t.line ? t.ch : null,
            u == n.line ? n.ch : null
          ), e.cm && e.cm.curOp), ++u;
        }), a.collapsed && e.iter(t.line, n.line + 1, function(m) {
          or(e, m) && Yt(m, 0);
        }), a.clearOnEnter && E(a, "beforeCursorEnter", function() {
          return a.clear();
        }), a.readOnly && (mu(), (e.history.done.length || e.history.undone.length) && e.clearHistory()), a.collapsed && (a.id = ++Qo, a.atomic = !0), s) {
          if (c && (s.curOp.updateMaxLine = !0), a.collapsed)
            Et(s, t.line, n.line + 1);
          else if (a.className || a.startStyle || a.endStyle || a.css || a.attributes || a.title)
            for (var g = t.line; g <= n.line; g++)
              lr(s, g, "text");
          a.atomic && zo(s.doc), dt(s, "markerAdded", s, a);
        }
        return a;
      }
      var Sn = function(e, t) {
        this.markers = e, this.primary = t;
        for (var n = 0; n < e.length; ++n)
          e[n].parent = this;
      };
      Sn.prototype.clear = function() {
        if (!this.explicitlyCleared) {
          this.explicitlyCleared = !0;
          for (var e = 0; e < this.markers.length; ++e)
            this.markers[e].clear();
          dt(this, "clear");
        }
      }, Sn.prototype.find = function(e, t) {
        return this.primary.find(e, t);
      }, Ne(Sn);
      function Ls(e, t, n, r, i) {
        r = Je(r), r.shared = !1;
        var a = [Kr(e, t, n, r, i)], o = a[0], u = r.widgetNode;
        return cr(e, function(s) {
          u && (r.widgetNode = u.cloneNode(!0)), a.push(Kr(s, Oe(s, t), Oe(s, n), r, i));
          for (var c = 0; c < s.linked.length; ++c)
            if (s.linked[c].isParent)
              return;
          o = De(a);
        }), new Sn(a, o);
      }
      function $o(e) {
        return e.findMarks(J(e.first, 0), e.clipPos(J(e.lastLine())), function(t) {
          return t.parent;
        });
      }
      function Ts(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n], i = r.find(), a = e.clipPos(i.from), o = e.clipPos(i.to);
          if (Ie(a, o)) {
            var u = Kr(e, a, o, r.primary, r.primary.type);
            r.markers.push(u), u.parent = r;
          }
        }
      }
      function Bs(e) {
        for (var t = function(r) {
          var i = e[r], a = [i.primary.doc];
          cr(i.primary.doc, function(s) {
            return a.push(s);
          });
          for (var o = 0; o < i.markers.length; o++) {
            var u = i.markers[o];
            Pe(a, u.doc) == -1 && (u.parent = null, i.markers.splice(o--, 1));
          }
        }, n = 0; n < e.length; n++) t(n);
      }
      var Ms = 0, Lt = function(e, t, n, r, i) {
        if (!(this instanceof Lt))
          return new Lt(e, t, n, r, i);
        n == null && (n = 0), wn.call(this, [new Cn([new Or("", null)])]), this.first = n, this.scrollTop = this.scrollLeft = 0, this.cantEdit = !1, this.cleanGeneration = 1, this.modeFrontier = this.highlightFrontier = n;
        var a = J(n, 0);
        this.sel = sr(a), this.history = new ei(null), this.id = ++Ms, this.modeOption = t, this.lineSep = r, this.direction = i == "rtl" ? "rtl" : "ltr", this.extend = !1, typeof e == "string" && (e = this.splitLines(e)), ea(this, { from: a, to: a, text: e }), Ct(this, sr(a), at);
      };
      Lt.prototype = H(wn.prototype, {
        constructor: Lt,
        // Iterate over the document. Supports two forms -- with only one
        // argument, it calls that for each line in the document. With
        // three, it iterates over the range given by the first two (with
        // the second being non-inclusive).
        iter: function(e, t, n) {
          n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e);
        },
        // Non-public interface for adding and removing lines.
        insert: function(e, t) {
          for (var n = 0, r = 0; r < t.length; ++r)
            n += t[r].height;
          this.insertInner(e - this.first, t, n);
        },
        remove: function(e, t) {
          this.removeInner(e - this.first, t);
        },
        // From here, the methods are part of the public interface. Most
        // are also available from CodeMirror (editor) instances.
        getValue: function(e) {
          var t = xi(this, this.first, this.first + this.size);
          return e === !1 ? t : t.join(e || this.lineSeparator());
        },
        setValue: gt(function(e) {
          var t = J(this.first, 0), n = this.first + this.size - 1;
          Gr(this, {
            from: t,
            to: J(n, we(this, n).text.length),
            text: this.splitLines(e),
            origin: "setValue",
            full: !0
          }, !0), this.cm && dn(this.cm, 0, 0), Ct(this, sr(t), at);
        }),
        replaceRange: function(e, t, n, r) {
          t = Oe(this, t), n = n ? Oe(this, n) : t, jr(this, e, t, n, r);
        },
        getRange: function(e, t, n) {
          var r = mr(this, Oe(this, e), Oe(this, t));
          return n === !1 ? r : n === "" ? r.join("") : r.join(n || this.lineSeparator());
        },
        getLine: function(e) {
          var t = this.getLineHandle(e);
          return t && t.text;
        },
        getLineHandle: function(e) {
          if (an(this, e))
            return we(this, e);
        },
        getLineNumber: function(e) {
          return Ge(e);
        },
        getLineHandleVisualStart: function(e) {
          return typeof e == "number" && (e = we(this, e)), Ut(e);
        },
        lineCount: function() {
          return this.size;
        },
        firstLine: function() {
          return this.first;
        },
        lastLine: function() {
          return this.first + this.size - 1;
        },
        clipPos: function(e) {
          return Oe(this, e);
        },
        getCursor: function(e) {
          var t = this.sel.primary(), n;
          return e == null || e == "head" ? n = t.head : e == "anchor" ? n = t.anchor : e == "end" || e == "to" || e === !1 ? n = t.to() : n = t.from(), n;
        },
        listSelections: function() {
          return this.sel.ranges;
        },
        somethingSelected: function() {
          return this.sel.somethingSelected();
        },
        setCursor: gt(function(e, t, n) {
          Ho(this, Oe(this, typeof e == "number" ? J(e, t || 0) : e), null, n);
        }),
        setSelection: gt(function(e, t, n) {
          Ho(this, Oe(this, e), Oe(this, t || e), n);
        }),
        extendSelection: gt(function(e, t, n) {
          ri(this, Oe(this, e), t && Oe(this, t), n);
        }),
        extendSelections: gt(function(e, t) {
          No(this, Sa(this, e), t);
        }),
        extendSelectionsBy: gt(function(e, t) {
          var n = lt(this.sel.ranges, e);
          No(this, Sa(this, n), t);
        }),
        setSelections: gt(function(e, t, n) {
          if (e.length) {
            for (var r = [], i = 0; i < e.length; i++)
              r[i] = new qe(
                Oe(this, e[i].anchor),
                Oe(this, e[i].head || e[i].anchor)
              );
            t == null && (t = Math.min(e.length - 1, this.sel.primIndex)), Ct(this, jt(this.cm, r, t), n);
          }
        }),
        addSelection: gt(function(e, t, n) {
          var r = this.sel.ranges.slice(0);
          r.push(new qe(Oe(this, e), Oe(this, t || e))), Ct(this, jt(this.cm, r, r.length - 1), n);
        }),
        getSelection: function(e) {
          for (var t = this.sel.ranges, n, r = 0; r < t.length; r++) {
            var i = mr(this, t[r].from(), t[r].to());
            n = n ? n.concat(i) : i;
          }
          return e === !1 ? n : n.join(e || this.lineSeparator());
        },
        getSelections: function(e) {
          for (var t = [], n = this.sel.ranges, r = 0; r < n.length; r++) {
            var i = mr(this, n[r].from(), n[r].to());
            e !== !1 && (i = i.join(e || this.lineSeparator())), t[r] = i;
          }
          return t;
        },
        replaceSelection: function(e, t, n) {
          for (var r = [], i = 0; i < this.sel.ranges.length; i++)
            r[i] = e;
          this.replaceSelections(r, t, n || "+input");
        },
        replaceSelections: gt(function(e, t, n) {
          for (var r = [], i = this.sel, a = 0; a < i.ranges.length; a++) {
            var o = i.ranges[a];
            r[a] = { from: o.from(), to: o.to(), text: this.splitLines(e[a]), origin: n };
          }
          for (var u = t && t != "end" && xs(this, r, t), s = r.length - 1; s >= 0; s--)
            Gr(this, r[s]);
          u ? Ro(this, u) : this.cm && _r(this.cm);
        }),
        undo: gt(function() {
          ai(this, "undo");
        }),
        redo: gt(function() {
          ai(this, "redo");
        }),
        undoSelection: gt(function() {
          ai(this, "undo", !0);
        }),
        redoSelection: gt(function() {
          ai(this, "redo", !0);
        }),
        setExtending: function(e) {
          this.extend = e;
        },
        getExtending: function() {
          return this.extend;
        },
        historySize: function() {
          for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++)
            e.done[r].ranges || ++t;
          for (var i = 0; i < e.undone.length; i++)
            e.undone[i].ranges || ++n;
          return { undo: t, redo: n };
        },
        clearHistory: function() {
          var e = this;
          this.history = new ei(this.history), cr(this, function(t) {
            return t.history = e.history;
          }, !0);
        },
        markClean: function() {
          this.cleanGeneration = this.changeGeneration(!0);
        },
        changeGeneration: function(e) {
          return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null), this.history.generation;
        },
        isClean: function(e) {
          return this.history.generation == (e || this.cleanGeneration);
        },
        getHistory: function() {
          return {
            done: qr(this.history.done),
            undone: qr(this.history.undone)
          };
        },
        setHistory: function(e) {
          var t = this.history = new ei(this.history);
          t.done = qr(e.done.slice(0), null, !0), t.undone = qr(e.undone.slice(0), null, !0);
        },
        setGutterMarker: gt(function(e, t, n) {
          return bn(this, e, "gutter", function(r) {
            var i = r.gutterMarkers || (r.gutterMarkers = {});
            return i[t] = n, !n && h(i) && (r.gutterMarkers = null), !0;
          });
        }),
        clearGutter: gt(function(e) {
          var t = this;
          this.iter(function(n) {
            n.gutterMarkers && n.gutterMarkers[e] && bn(t, n, "gutter", function() {
              return n.gutterMarkers[e] = null, h(n.gutterMarkers) && (n.gutterMarkers = null), !0;
            });
          });
        }),
        lineInfo: function(e) {
          var t;
          if (typeof e == "number") {
            if (!an(this, e) || (t = e, e = we(this, e), !e))
              return null;
          } else if (t = Ge(e), t == null)
            return null;
          return {
            line: t,
            handle: e,
            text: e.text,
            gutterMarkers: e.gutterMarkers,
            textClass: e.textClass,
            bgClass: e.bgClass,
            wrapClass: e.wrapClass,
            widgets: e.widgets
          };
        },
        addLineClass: gt(function(e, t, n) {
          return bn(this, e, t == "gutter" ? "gutter" : "class", function(r) {
            var i = t == "text" ? "textClass" : t == "background" ? "bgClass" : t == "gutter" ? "gutterClass" : "wrapClass";
            if (!r[i])
              r[i] = n;
            else {
              if (se(n).test(r[i]))
                return !1;
              r[i] += " " + n;
            }
            return !0;
          });
        }),
        removeLineClass: gt(function(e, t, n) {
          return bn(this, e, t == "gutter" ? "gutter" : "class", function(r) {
            var i = t == "text" ? "textClass" : t == "background" ? "bgClass" : t == "gutter" ? "gutterClass" : "wrapClass", a = r[i];
            if (a)
              if (n == null)
                r[i] = null;
              else {
                var o = a.match(se(n));
                if (!o)
                  return !1;
                var u = o.index + o[0].length;
                r[i] = a.slice(0, o.index) + (!o.index || u == a.length ? "" : " ") + a.slice(u) || null;
              }
            else return !1;
            return !0;
          });
        }),
        addLineWidget: gt(function(e, t, n) {
          return Es(this, e, t, n);
        }),
        removeLineWidget: function(e) {
          e.clear();
        },
        markText: function(e, t, n) {
          return Kr(this, Oe(this, e), Oe(this, t), n, n && n.type || "range");
        },
        setBookmark: function(e, t) {
          var n = {
            replacedWith: t && (t.nodeType == null ? t.widget : t),
            insertLeft: t && t.insertLeft,
            clearWhenEmpty: !1,
            shared: t && t.shared,
            handleMouseEvents: t && t.handleMouseEvents
          };
          return e = Oe(this, e), Kr(this, e, e, n, "bookmark");
        },
        findMarksAt: function(e) {
          e = Oe(this, e);
          var t = [], n = we(this, e.line).markedSpans;
          if (n)
            for (var r = 0; r < n.length; ++r) {
              var i = n[r];
              (i.from == null || i.from <= e.ch) && (i.to == null || i.to >= e.ch) && t.push(i.marker.parent || i.marker);
            }
          return t;
        },
        findMarks: function(e, t, n) {
          e = Oe(this, e), t = Oe(this, t);
          var r = [], i = e.line;
          return this.iter(e.line, t.line + 1, function(a) {
            var o = a.markedSpans;
            if (o)
              for (var u = 0; u < o.length; u++) {
                var s = o[u];
                !(s.to != null && i == e.line && e.ch >= s.to || s.from == null && i != e.line || s.from != null && i == t.line && s.from >= t.ch) && (!n || n(s.marker)) && r.push(s.marker.parent || s.marker);
              }
            ++i;
          }), r;
        },
        getAllMarks: function() {
          var e = [];
          return this.iter(function(t) {
            var n = t.markedSpans;
            if (n)
              for (var r = 0; r < n.length; ++r)
                n[r].from != null && e.push(n[r].marker);
          }), e;
        },
        posFromIndex: function(e) {
          var t, n = this.first, r = this.lineSeparator().length;
          return this.iter(function(i) {
            var a = i.text.length + r;
            if (a > e)
              return t = e, !0;
            e -= a, ++n;
          }), Oe(this, J(n, t));
        },
        indexFromPos: function(e) {
          e = Oe(this, e);
          var t = e.ch;
          if (e.line < this.first || e.ch < 0)
            return 0;
          var n = this.lineSeparator().length;
          return this.iter(this.first, e.line, function(r) {
            t += r.text.length + n;
          }), t;
        },
        copy: function(e) {
          var t = new Lt(
            xi(this, this.first, this.first + this.size),
            this.modeOption,
            this.first,
            this.lineSep,
            this.direction
          );
          return t.scrollTop = this.scrollTop, t.scrollLeft = this.scrollLeft, t.sel = this.sel, t.extend = !1, e && (t.history.undoDepth = this.history.undoDepth, t.setHistory(this.getHistory())), t;
        },
        linkedDoc: function(e) {
          e || (e = {});
          var t = this.first, n = this.first + this.size;
          e.from != null && e.from > t && (t = e.from), e.to != null && e.to < n && (n = e.to);
          var r = new Lt(xi(this, t, n), e.mode || this.modeOption, t, this.lineSep, this.direction);
          return e.sharedHist && (r.history = this.history), (this.linked || (this.linked = [])).push({ doc: r, sharedHist: e.sharedHist }), r.linked = [{ doc: this, isParent: !0, sharedHist: e.sharedHist }], Ts(r, $o(this)), r;
        },
        unlinkDoc: function(e) {
          if (e instanceof et && (e = e.doc), this.linked)
            for (var t = 0; t < this.linked.length; ++t) {
              var n = this.linked[t];
              if (n.doc == e) {
                this.linked.splice(t, 1), e.unlinkDoc(this), Bs($o(this));
                break;
              }
            }
          if (e.history == this.history) {
            var r = [e.id];
            cr(e, function(i) {
              return r.push(i.id);
            }, !0), e.history = new ei(null), e.history.done = qr(this.history.done, r), e.history.undone = qr(this.history.undone, r);
          }
        },
        iterLinkedDocs: function(e) {
          cr(this, e);
        },
        getMode: function() {
          return this.mode;
        },
        getEditor: function() {
          return this.cm;
        },
        splitLines: function(e) {
          return this.lineSep ? e.split(this.lineSep) : nn(e);
        },
        lineSeparator: function() {
          return this.lineSep || `
`;
        },
        setDirection: gt(function(e) {
          e != "rtl" && (e = "ltr"), e != this.direction && (this.direction = e, this.iter(function(t) {
            return t.order = null;
          }), this.cm && Ds(this.cm));
        })
      }), Lt.prototype.eachLine = Lt.prototype.iter;
      var Jo = 0;
      function Is(e) {
        var t = this;
        if (Vo(t), !(re(t, e) || tr(t.display, e))) {
          Ae(e), B && (Jo = +/* @__PURE__ */ new Date());
          var n = br(t, e, !0), r = e.dataTransfer.files;
          if (!(!n || t.isReadOnly()))
            if (r && r.length && window.FileReader && window.File)
              for (var i = r.length, a = Array(i), o = 0, u = function() {
                ++o == i && pt(t, function() {
                  n = Oe(t.doc, n);
                  var F = {
                    from: n,
                    to: n,
                    text: t.doc.splitLines(
                      a.filter(function(U) {
                        return U != null;
                      }).join(t.doc.lineSeparator())
                    ),
                    origin: "paste"
                  };
                  Gr(t.doc, F), Ro(t.doc, sr(Oe(t.doc, n), Oe(t.doc, fr(F))));
                })();
              }, s = function(F, U) {
                if (t.options.allowDropFileTypes && Pe(t.options.allowDropFileTypes, F.type) == -1) {
                  u();
                  return;
                }
                var Y = new FileReader();
                Y.onerror = function() {
                  return u();
                }, Y.onload = function() {
                  var V = Y.result;
                  if (/[\x00-\x08\x0e-\x1f]{2}/.test(V)) {
                    u();
                    return;
                  }
                  a[U] = V, u();
                }, Y.readAsText(F);
              }, c = 0; c < r.length; c++)
                s(r[c], c);
            else {
              if (t.state.draggingText && t.doc.sel.contains(n) > -1) {
                t.state.draggingText(e), setTimeout(function() {
                  return t.display.input.focus();
                }, 20);
                return;
              }
              try {
                var g = e.dataTransfer.getData("Text");
                if (g) {
                  var m;
                  if (t.state.draggingText && !t.state.draggingText.copy && (m = t.listSelections()), ni(t.doc, sr(n, n)), m)
                    for (var T = 0; T < m.length; ++T)
                      jr(t.doc, "", m[T].anchor, m[T].head, "drag");
                  t.replaceSelection(g, "around", "paste"), t.display.input.focus();
                }
              } catch {
              }
            }
        }
      }
      function Os(e, t) {
        if (B && (!e.state.draggingText || +/* @__PURE__ */ new Date() - Jo < 100)) {
          ut(t);
          return;
        }
        if (!(re(e, t) || tr(e.display, t)) && (t.dataTransfer.setData("Text", e.getSelection()), t.dataTransfer.effectAllowed = "copyMove", t.dataTransfer.setDragImage && !Ce)) {
          var n = L("img", null, null, "position: fixed; left: 0; top: 0;");
          n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", ne && (n.width = n.height = 1, e.display.wrapper.appendChild(n), n._top = n.offsetTop), t.dataTransfer.setDragImage(n, 0, 0), ne && n.parentNode.removeChild(n);
        }
      }
      function Ns(e, t) {
        var n = br(e, t);
        if (n) {
          var r = document.createDocumentFragment();
          Wi(e, n, r), e.display.dragCursor || (e.display.dragCursor = L("div", null, "CodeMirror-cursors CodeMirror-dragcursors"), e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)), He(e.display.dragCursor, r);
        }
      }
      function Vo(e) {
        e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor), e.display.dragCursor = null);
      }
      function el(e) {
        if (document.getElementsByClassName) {
          for (var t = document.getElementsByClassName("CodeMirror"), n = [], r = 0; r < t.length; r++) {
            var i = t[r].CodeMirror;
            i && n.push(i);
          }
          n.length && n[0].operation(function() {
            for (var a = 0; a < n.length; a++)
              e(n[a]);
          });
        }
      }
      var tl = !1;
      function Hs() {
        tl || (Rs(), tl = !0);
      }
      function Rs() {
        var e;
        E(window, "resize", function() {
          e == null && (e = setTimeout(function() {
            e = null, el(Ps);
          }, 100));
        }), E(window, "blur", function() {
          return el(zr);
        });
      }
      function Ps(e) {
        var t = e.display;
        t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null, t.scrollbarsClipped = !1, e.setSize();
      }
      for (var dr = {
        3: "Pause",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        145: "ScrollLock",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        224: "Mod",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
      }, Fn = 0; Fn < 10; Fn++)
        dr[Fn + 48] = dr[Fn + 96] = String(Fn);
      for (var oi = 65; oi <= 90; oi++)
        dr[oi] = String.fromCharCode(oi);
      for (var An = 1; An <= 12; An++)
        dr[An + 111] = dr[An + 63235] = "F" + An;
      var nr = {};
      nr.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
      }, nr.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
      }, nr.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars",
        "Ctrl-O": "openLine"
      }, nr.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
      }, nr.default = j ? nr.macDefault : nr.pcDefault;
      function zs(e) {
        var t = e.split(/-(?!$)/);
        e = t[t.length - 1];
        for (var n, r, i, a, o = 0; o < t.length - 1; o++) {
          var u = t[o];
          if (/^(cmd|meta|m)$/i.test(u))
            a = !0;
          else if (/^a(lt)?$/i.test(u))
            n = !0;
          else if (/^(c|ctrl|control)$/i.test(u))
            r = !0;
          else if (/^s(hift)?$/i.test(u))
            i = !0;
          else
            throw new Error("Unrecognized modifier name: " + u);
        }
        return n && (e = "Alt-" + e), r && (e = "Ctrl-" + e), a && (e = "Cmd-" + e), i && (e = "Shift-" + e), e;
      }
      function _s(e) {
        var t = {};
        for (var n in e)
          if (e.hasOwnProperty(n)) {
            var r = e[n];
            if (/^(name|fallthrough|(de|at)tach)$/.test(n))
              continue;
            if (r == "...") {
              delete e[n];
              continue;
            }
            for (var i = lt(n.split(" "), zs), a = 0; a < i.length; a++) {
              var o = void 0, u = void 0;
              a == i.length - 1 ? (u = i.join(" "), o = r) : (u = i.slice(0, a + 1).join(" "), o = "...");
              var s = t[u];
              if (!s)
                t[u] = o;
              else if (s != o)
                throw new Error("Inconsistent bindings for " + u);
            }
            delete e[n];
          }
        for (var c in t)
          e[c] = t[c];
        return e;
      }
      function Xr(e, t, n, r) {
        t = li(t);
        var i = t.call ? t.call(e, r) : t[e];
        if (i === !1)
          return "nothing";
        if (i === "...")
          return "multi";
        if (i != null && n(i))
          return "handled";
        if (t.fallthrough) {
          if (Object.prototype.toString.call(t.fallthrough) != "[object Array]")
            return Xr(e, t.fallthrough, n, r);
          for (var a = 0; a < t.fallthrough.length; a++) {
            var o = Xr(e, t.fallthrough[a], n, r);
            if (o)
              return o;
          }
        }
      }
      function rl(e) {
        var t = typeof e == "string" ? e : dr[e.keyCode];
        return t == "Ctrl" || t == "Alt" || t == "Shift" || t == "Mod";
      }
      function nl(e, t, n) {
        var r = e;
        return t.altKey && r != "Alt" && (e = "Alt-" + e), (xe ? t.metaKey : t.ctrlKey) && r != "Ctrl" && (e = "Ctrl-" + e), (xe ? t.ctrlKey : t.metaKey) && r != "Mod" && (e = "Cmd-" + e), !n && t.shiftKey && r != "Shift" && (e = "Shift-" + e), e;
      }
      function il(e, t) {
        if (ne && e.keyCode == 34 && e.char)
          return !1;
        var n = dr[e.keyCode];
        return n == null || e.altGraphKey ? !1 : (e.keyCode == 3 && e.code && (n = e.code), nl(n, e, t));
      }
      function li(e) {
        return typeof e == "string" ? nr[e] : e;
      }
      function Yr(e, t) {
        for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
          for (var a = t(n[i]); r.length && Ie(a.from, De(r).to) <= 0; ) {
            var o = r.pop();
            if (Ie(o.from, a.from) < 0) {
              a.from = o.from;
              break;
            }
          }
          r.push(a);
        }
        Ot(e, function() {
          for (var u = r.length - 1; u >= 0; u--)
            jr(e.doc, "", r[u].from, r[u].to, "+delete");
          _r(e);
        });
      }
      function ia(e, t, n) {
        var r = f(e.text, t + n, n);
        return r < 0 || r > e.text.length ? null : r;
      }
      function aa(e, t, n) {
        var r = ia(e, t.ch, n);
        return r == null ? null : new J(t.line, r, n < 0 ? "after" : "before");
      }
      function oa(e, t, n, r, i) {
        if (e) {
          t.doc.direction == "rtl" && (i = -i);
          var a = x(n, t.doc.direction);
          if (a) {
            var o = i < 0 ? De(a) : a[0], u = i < 0 == (o.level == 1), s = u ? "after" : "before", c;
            if (o.level > 0 || t.doc.direction == "rtl") {
              var g = Hr(t, n);
              c = i < 0 ? n.text.length - 1 : 0;
              var m = $t(t, g, c).top;
              c = v(function(T) {
                return $t(t, g, T).top == m;
              }, i < 0 == (o.level == 1) ? o.from : o.to - 1, c), s == "before" && (c = ia(n, c, 1));
            } else
              c = i < 0 ? o.to : o.from;
            return new J(r, c, s);
          }
        }
        return new J(r, i < 0 ? n.text.length : 0, i < 0 ? "before" : "after");
      }
      function Ws(e, t, n, r) {
        var i = x(t, e.doc.direction);
        if (!i)
          return aa(t, n, r);
        n.ch >= t.text.length ? (n.ch = t.text.length, n.sticky = "before") : n.ch <= 0 && (n.ch = 0, n.sticky = "after");
        var a = I(i, n.ch, n.sticky), o = i[a];
        if (e.doc.direction == "ltr" && o.level % 2 == 0 && (r > 0 ? o.to > n.ch : o.from < n.ch))
          return aa(t, n, r);
        var u = function(fe, ge) {
          return ia(t, fe instanceof J ? fe.ch : fe, ge);
        }, s, c = function(fe) {
          return e.options.lineWrapping ? (s = s || Hr(e, t), uo(e, t, s, fe)) : { begin: 0, end: t.text.length };
        }, g = c(n.sticky == "before" ? u(n, -1) : n.ch);
        if (e.doc.direction == "rtl" || o.level == 1) {
          var m = o.level == 1 == r < 0, T = u(n, m ? 1 : -1);
          if (T != null && (m ? T <= o.to && T <= g.end : T >= o.from && T >= g.begin)) {
            var F = m ? "before" : "after";
            return new J(n.line, T, F);
          }
        }
        var U = function(fe, ge, ce) {
          for (var ve = function(Qe, vt) {
            return vt ? new J(n.line, u(Qe, 1), "before") : new J(n.line, Qe, "after");
          }; fe >= 0 && fe < i.length; fe += ge) {
            var Fe = i[fe], Se = ge > 0 == (Fe.level != 1), Re = Se ? ce.begin : u(ce.end, -1);
            if (Fe.from <= Re && Re < Fe.to || (Re = Se ? Fe.from : u(Fe.to, -1), ce.begin <= Re && Re < ce.end))
              return ve(Re, Se);
          }
        }, Y = U(a + r, r, g);
        if (Y)
          return Y;
        var V = r > 0 ? g.end : u(g.begin, -1);
        return V != null && !(r > 0 && V == t.text.length) && (Y = U(r > 0 ? 0 : i.length - 1, r, c(V)), Y) ? Y : null;
      }
      var En = {
        selectAll: qo,
        singleSelection: function(e) {
          return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), at);
        },
        killLine: function(e) {
          return Yr(e, function(t) {
            if (t.empty()) {
              var n = we(e.doc, t.head.line).text.length;
              return t.head.ch == n && t.head.line < e.lastLine() ? { from: t.head, to: J(t.head.line + 1, 0) } : { from: t.head, to: J(t.head.line, n) };
            } else
              return { from: t.from(), to: t.to() };
          });
        },
        deleteLine: function(e) {
          return Yr(e, function(t) {
            return {
              from: J(t.from().line, 0),
              to: Oe(e.doc, J(t.to().line + 1, 0))
            };
          });
        },
        delLineLeft: function(e) {
          return Yr(e, function(t) {
            return {
              from: J(t.from().line, 0),
              to: t.from()
            };
          });
        },
        delWrappedLineLeft: function(e) {
          return Yr(e, function(t) {
            var n = e.charCoords(t.head, "div").top + 5, r = e.coordsChar({ left: 0, top: n }, "div");
            return { from: r, to: t.from() };
          });
        },
        delWrappedLineRight: function(e) {
          return Yr(e, function(t) {
            var n = e.charCoords(t.head, "div").top + 5, r = e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div");
            return { from: t.from(), to: r };
          });
        },
        undo: function(e) {
          return e.undo();
        },
        redo: function(e) {
          return e.redo();
        },
        undoSelection: function(e) {
          return e.undoSelection();
        },
        redoSelection: function(e) {
          return e.redoSelection();
        },
        goDocStart: function(e) {
          return e.extendSelection(J(e.firstLine(), 0));
        },
        goDocEnd: function(e) {
          return e.extendSelection(J(e.lastLine()));
        },
        goLineStart: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return al(e, t.head.line);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineStartSmart: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return ol(e, t.head);
            },
            { origin: "+move", bias: 1 }
          );
        },
        goLineEnd: function(e) {
          return e.extendSelectionsBy(
            function(t) {
              return qs(e, t.head.line);
            },
            { origin: "+move", bias: -1 }
          );
        },
        goLineRight: function(e) {
          return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, "div").top + 5;
            return e.coordsChar({ left: e.display.lineDiv.offsetWidth + 100, top: n }, "div");
          }, Dt);
        },
        goLineLeft: function(e) {
          return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, "div").top + 5;
            return e.coordsChar({ left: 0, top: n }, "div");
          }, Dt);
        },
        goLineLeftSmart: function(e) {
          return e.extendSelectionsBy(function(t) {
            var n = e.cursorCoords(t.head, "div").top + 5, r = e.coordsChar({ left: 0, top: n }, "div");
            return r.ch < e.getLine(r.line).search(/\S/) ? ol(e, t.head) : r;
          }, Dt);
        },
        goLineUp: function(e) {
          return e.moveV(-1, "line");
        },
        goLineDown: function(e) {
          return e.moveV(1, "line");
        },
        goPageUp: function(e) {
          return e.moveV(-1, "page");
        },
        goPageDown: function(e) {
          return e.moveV(1, "page");
        },
        goCharLeft: function(e) {
          return e.moveH(-1, "char");
        },
        goCharRight: function(e) {
          return e.moveH(1, "char");
        },
        goColumnLeft: function(e) {
          return e.moveH(-1, "column");
        },
        goColumnRight: function(e) {
          return e.moveH(1, "column");
        },
        goWordLeft: function(e) {
          return e.moveH(-1, "word");
        },
        goGroupRight: function(e) {
          return e.moveH(1, "group");
        },
        goGroupLeft: function(e) {
          return e.moveH(-1, "group");
        },
        goWordRight: function(e) {
          return e.moveH(1, "word");
        },
        delCharBefore: function(e) {
          return e.deleteH(-1, "codepoint");
        },
        delCharAfter: function(e) {
          return e.deleteH(1, "char");
        },
        delWordBefore: function(e) {
          return e.deleteH(-1, "word");
        },
        delWordAfter: function(e) {
          return e.deleteH(1, "word");
        },
        delGroupBefore: function(e) {
          return e.deleteH(-1, "group");
        },
        delGroupAfter: function(e) {
          return e.deleteH(1, "group");
        },
        indentAuto: function(e) {
          return e.indentSelection("smart");
        },
        indentMore: function(e) {
          return e.indentSelection("add");
        },
        indentLess: function(e) {
          return e.indentSelection("subtract");
        },
        insertTab: function(e) {
          return e.replaceSelection("	");
        },
        insertSoftTab: function(e) {
          for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
            var a = n[i].from(), o = Ke(e.getLine(a.line), a.ch, r);
            t.push(Ht(r - o % r));
          }
          e.replaceSelections(t);
        },
        defaultTab: function(e) {
          e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab");
        },
        // Swap the two chars left and right of each selection's head.
        // Move cursor behind the two swapped characters afterwards.
        //
        // Doesn't consider line feeds a character.
        // Doesn't scan more than one line above to find a character.
        // Doesn't do anything on an empty line.
        // Doesn't do anything with non-empty selections.
        transposeChars: function(e) {
          return Ot(e, function() {
            for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
              if (t[r].empty()) {
                var i = t[r].head, a = we(e.doc, i.line).text;
                if (a) {
                  if (i.ch == a.length && (i = new J(i.line, i.ch - 1)), i.ch > 0)
                    i = new J(i.line, i.ch + 1), e.replaceRange(
                      a.charAt(i.ch - 1) + a.charAt(i.ch - 2),
                      J(i.line, i.ch - 2),
                      i,
                      "+transpose"
                    );
                  else if (i.line > e.doc.first) {
                    var o = we(e.doc, i.line - 1).text;
                    o && (i = new J(i.line, 1), e.replaceRange(
                      a.charAt(0) + e.doc.lineSeparator() + o.charAt(o.length - 1),
                      J(i.line - 1, o.length - 1),
                      i,
                      "+transpose"
                    ));
                  }
                }
                n.push(new qe(i, i));
              }
            e.setSelections(n);
          });
        },
        newlineAndIndent: function(e) {
          return Ot(e, function() {
            for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
              e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
            t = e.listSelections();
            for (var r = 0; r < t.length; r++)
              e.indentLine(t[r].from().line, null, !0);
            _r(e);
          });
        },
        openLine: function(e) {
          return e.replaceSelection(`
`, "start");
        },
        toggleOverwrite: function(e) {
          return e.toggleOverwrite();
        }
      };
      function al(e, t) {
        var n = we(e.doc, t), r = Ut(n);
        return r != n && (t = Ge(r)), oa(!0, e, r, t, 1);
      }
      function qs(e, t) {
        var n = we(e.doc, t), r = Su(n);
        return r != n && (t = Ge(r)), oa(!0, e, n, t, -1);
      }
      function ol(e, t) {
        var n = al(e, t.line), r = we(e.doc, n.line), i = x(r, e.doc.direction);
        if (!i || i[0].level == 0) {
          var a = Math.max(n.ch, r.text.search(/\S/)), o = t.line == n.line && t.ch <= a && t.ch;
          return J(n.line, o ? 0 : a, n.sticky);
        }
        return n;
      }
      function ui(e, t, n) {
        if (typeof t == "string" && (t = En[t], !t))
          return !1;
        e.display.input.ensurePolled();
        var r = e.display.shift, i = !1;
        try {
          e.isReadOnly() && (e.state.suppressEdits = !0), n && (e.display.shift = !1), i = t(e) != Ve;
        } finally {
          e.display.shift = r, e.state.suppressEdits = !1;
        }
        return i;
      }
      function Us(e, t, n) {
        for (var r = 0; r < e.state.keyMaps.length; r++) {
          var i = Xr(t, e.state.keyMaps[r], n, e);
          if (i)
            return i;
        }
        return e.options.extraKeys && Xr(t, e.options.extraKeys, n, e) || Xr(t, e.options.keyMap, n, e);
      }
      var Gs = new Ye();
      function Ln(e, t, n, r) {
        var i = e.state.keySeq;
        if (i) {
          if (rl(t))
            return "handled";
          if (/\'$/.test(t) ? e.state.keySeq = null : Gs.set(50, function() {
            e.state.keySeq == i && (e.state.keySeq = null, e.display.input.reset());
          }), ll(e, i + " " + t, n, r))
            return !0;
        }
        return ll(e, t, n, r);
      }
      function ll(e, t, n, r) {
        var i = Us(e, t, r);
        return i == "multi" && (e.state.keySeq = t), i == "handled" && dt(e, "keyHandled", e, t, n), (i == "handled" || i == "multi") && (Ae(n), qi(e)), !!i;
      }
      function ul(e, t) {
        var n = il(t, !0);
        return n ? t.shiftKey && !e.state.keySeq ? Ln(e, "Shift-" + n, t, function(r) {
          return ui(e, r, !0);
        }) || Ln(e, n, t, function(r) {
          if (typeof r == "string" ? /^go[A-Z]/.test(r) : r.motion)
            return ui(e, r);
        }) : Ln(e, n, t, function(r) {
          return ui(e, r);
        }) : !1;
      }
      function js(e, t, n) {
        return Ln(e, "'" + n + "'", t, function(r) {
          return ui(e, r, !0);
        });
      }
      var la = null;
      function sl(e) {
        var t = this;
        if (!(e.target && e.target != t.display.input.getField()) && (t.curOp.focus = _e(G(t)), !re(t, e))) {
          B && _ < 11 && e.keyCode == 27 && (e.returnValue = !1);
          var n = e.keyCode;
          t.display.shift = n == 16 || e.shiftKey;
          var r = ul(t, e);
          ne && (la = r ? n : null, !r && n == 88 && !yt && (j ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")), S && !j && !r && n == 46 && e.shiftKey && !e.ctrlKey && document.execCommand && document.execCommand("cut"), n == 18 && !/\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) && Ks(t);
        }
      }
      function Ks(e) {
        var t = e.display.lineDiv;
        rt(t, "CodeMirror-crosshair");
        function n(r) {
          (r.keyCode == 18 || !r.altKey) && (Le(t, "CodeMirror-crosshair"), me(document, "keyup", n), me(document, "mouseover", n));
        }
        E(document, "keyup", n), E(document, "mouseover", n);
      }
      function fl(e) {
        e.keyCode == 16 && (this.doc.sel.shift = !1), re(this, e);
      }
      function cl(e) {
        var t = this;
        if (!(e.target && e.target != t.display.input.getField()) && !(tr(t.display, e) || re(t, e) || e.ctrlKey && !e.altKey || j && e.metaKey)) {
          var n = e.keyCode, r = e.charCode;
          if (ne && n == la) {
            la = null, Ae(e);
            return;
          }
          if (!(ne && (!e.which || e.which < 10) && ul(t, e))) {
            var i = String.fromCharCode(r ?? n);
            i != "\b" && (js(t, e, i) || t.display.input.onKeyPress(e));
          }
        }
      }
      var Xs = 400, ua = function(e, t, n) {
        this.time = e, this.pos = t, this.button = n;
      };
      ua.prototype.compare = function(e, t, n) {
        return this.time + Xs > e && Ie(t, this.pos) == 0 && n == this.button;
      };
      var Tn, Bn;
      function Ys(e, t) {
        var n = +/* @__PURE__ */ new Date();
        return Bn && Bn.compare(n, e, t) ? (Tn = Bn = null, "triple") : Tn && Tn.compare(n, e, t) ? (Bn = new ua(n, e, t), Tn = null, "double") : (Tn = new ua(n, e, t), Bn = null, "single");
      }
      function hl(e) {
        var t = this, n = t.display;
        if (!(re(t, e) || n.activeTouch && n.input.supportsTouch())) {
          if (n.input.ensurePolled(), n.shift = e.shiftKey, tr(n, e)) {
            ee || (n.scroller.draggable = !1, setTimeout(function() {
              return n.scroller.draggable = !0;
            }, 100));
            return;
          }
          if (!sa(t, e)) {
            var r = br(t, e), i = bt(e), a = r ? Ys(r, i) : "single";
            Te(t).focus(), i == 1 && t.state.selectingText && t.state.selectingText(e), !(r && Zs(t, i, r, a, e)) && (i == 1 ? r ? $s(t, r, a, e) : kt(e) == n.scroller && Ae(e) : i == 2 ? (r && ri(t.doc, r), setTimeout(function() {
              return n.input.focus();
            }, 20)) : i == 3 && (Ue ? t.display.input.onContextMenu(e) : Ui(t)));
          }
        }
      }
      function Zs(e, t, n, r, i) {
        var a = "Click";
        return r == "double" ? a = "Double" + a : r == "triple" && (a = "Triple" + a), a = (t == 1 ? "Left" : t == 2 ? "Middle" : "Right") + a, Ln(e, nl(a, i), i, function(o) {
          if (typeof o == "string" && (o = En[o]), !o)
            return !1;
          var u = !1;
          try {
            e.isReadOnly() && (e.state.suppressEdits = !0), u = o(e, n) != Ve;
          } finally {
            e.state.suppressEdits = !1;
          }
          return u;
        });
      }
      function Qs(e, t, n) {
        var r = e.getOption("configureMouse"), i = r ? r(e, t, n) : {};
        if (i.unit == null) {
          var a = he ? n.shiftKey && n.metaKey : n.altKey;
          i.unit = a ? "rectangle" : t == "single" ? "char" : t == "double" ? "word" : "line";
        }
        return (i.extend == null || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey), i.addNew == null && (i.addNew = j ? n.metaKey : n.ctrlKey), i.moveOnDrag == null && (i.moveOnDrag = !(j ? n.altKey : n.ctrlKey)), i;
      }
      function $s(e, t, n, r) {
        B ? setTimeout($e(ho, e), 0) : e.curOp.focus = _e(G(e));
        var i = Qs(e, n, r), a = e.doc.sel, o;
        e.options.dragDrop && Lr && !e.isReadOnly() && n == "single" && (o = a.contains(t)) > -1 && (Ie((o = a.ranges[o]).from(), t) < 0 || t.xRel > 0) && (Ie(o.to(), t) > 0 || t.xRel < 0) ? Js(e, r, t, i) : Vs(e, r, t, i);
      }
      function Js(e, t, n, r) {
        var i = e.display, a = !1, o = pt(e, function(c) {
          ee && (i.scroller.draggable = !1), e.state.draggingText = !1, e.state.delayingBlurEvent && (e.hasFocus() ? e.state.delayingBlurEvent = !1 : Ui(e)), me(i.wrapper.ownerDocument, "mouseup", o), me(i.wrapper.ownerDocument, "mousemove", u), me(i.scroller, "dragstart", s), me(i.scroller, "drop", o), a || (Ae(c), r.addNew || ri(e.doc, n, null, null, r.extend), ee && !Ce || B && _ == 9 ? setTimeout(function() {
            i.wrapper.ownerDocument.body.focus({ preventScroll: !0 }), i.input.focus();
          }, 20) : i.input.focus());
        }), u = function(c) {
          a = a || Math.abs(t.clientX - c.clientX) + Math.abs(t.clientY - c.clientY) >= 10;
        }, s = function() {
          return a = !0;
        };
        ee && (i.scroller.draggable = !0), e.state.draggingText = o, o.copy = !r.moveOnDrag, E(i.wrapper.ownerDocument, "mouseup", o), E(i.wrapper.ownerDocument, "mousemove", u), E(i.scroller, "dragstart", s), E(i.scroller, "drop", o), e.state.delayingBlurEvent = !0, setTimeout(function() {
          return i.input.focus();
        }, 20), i.scroller.dragDrop && i.scroller.dragDrop();
      }
      function dl(e, t, n) {
        if (n == "char")
          return new qe(t, t);
        if (n == "word")
          return e.findWordAt(t);
        if (n == "line")
          return new qe(J(t.line, 0), Oe(e.doc, J(t.line + 1, 0)));
        var r = n(e, t);
        return new qe(r.from, r.to);
      }
      function Vs(e, t, n, r) {
        B && Ui(e);
        var i = e.display, a = e.doc;
        Ae(t);
        var o, u, s = a.sel, c = s.ranges;
        if (r.addNew && !r.extend ? (u = a.sel.contains(n), u > -1 ? o = c[u] : o = new qe(n, n)) : (o = a.sel.primary(), u = a.sel.primIndex), r.unit == "rectangle")
          r.addNew || (o = new qe(n, n)), n = br(e, t, !0, !0), u = -1;
        else {
          var g = dl(e, n, r.unit);
          r.extend ? o = ra(o, g.anchor, g.head, r.extend) : o = g;
        }
        r.addNew ? u == -1 ? (u = c.length, Ct(
          a,
          jt(e, c.concat([o]), u),
          { scroll: !1, origin: "*mouse" }
        )) : c.length > 1 && c[u].empty() && r.unit == "char" && !r.extend ? (Ct(
          a,
          jt(e, c.slice(0, u).concat(c.slice(u + 1)), 0),
          { scroll: !1, origin: "*mouse" }
        ), s = a.sel) : na(a, u, o, ke) : (u = 0, Ct(a, new Pt([o], 0), ke), s = a.sel);
        var m = n;
        function T(ce) {
          if (Ie(m, ce) != 0)
            if (m = ce, r.unit == "rectangle") {
              for (var ve = [], Fe = e.options.tabSize, Se = Ke(we(a, n.line).text, n.ch, Fe), Re = Ke(we(a, ce.line).text, ce.ch, Fe), Qe = Math.min(Se, Re), vt = Math.max(Se, Re), tt = Math.min(n.line, ce.line), Nt = Math.min(e.lastLine(), Math.max(n.line, ce.line)); tt <= Nt; tt++) {
                var Tt = we(a, tt).text, ft = At(Tt, Qe, Fe);
                Qe == vt ? ve.push(new qe(J(tt, ft), J(tt, ft))) : Tt.length > ft && ve.push(new qe(J(tt, ft), J(tt, At(Tt, vt, Fe))));
              }
              ve.length || ve.push(new qe(n, n)), Ct(
                a,
                jt(e, s.ranges.slice(0, u).concat(ve), u),
                { origin: "*mouse", scroll: !1 }
              ), e.scrollIntoView(ce);
            } else {
              var Bt = o, xt = dl(e, ce, r.unit), ht = Bt.anchor, ct;
              Ie(xt.anchor, ht) > 0 ? (ct = xt.head, ht = Hn(Bt.from(), xt.anchor)) : (ct = xt.anchor, ht = Nn(Bt.to(), xt.head));
              var it = s.ranges.slice(0);
              it[u] = ef(e, new qe(Oe(a, ht), ct)), Ct(a, jt(e, it, u), ke);
            }
        }
        var F = i.wrapper.getBoundingClientRect(), U = 0;
        function Y(ce) {
          var ve = ++U, Fe = br(e, ce, !0, r.unit == "rectangle");
          if (Fe)
            if (Ie(Fe, m) != 0) {
              e.curOp.focus = _e(G(e)), T(Fe);
              var Se = Qn(i, a);
              (Fe.line >= Se.to || Fe.line < Se.from) && setTimeout(pt(e, function() {
                U == ve && Y(ce);
              }), 150);
            } else {
              var Re = ce.clientY < F.top ? -20 : ce.clientY > F.bottom ? 20 : 0;
              Re && setTimeout(pt(e, function() {
                U == ve && (i.scroller.scrollTop += Re, Y(ce));
              }), 50);
            }
        }
        function V(ce) {
          e.state.selectingText = !1, U = 1 / 0, ce && (Ae(ce), i.input.focus()), me(i.wrapper.ownerDocument, "mousemove", fe), me(i.wrapper.ownerDocument, "mouseup", ge), a.history.lastSelOrigin = null;
        }
        var fe = pt(e, function(ce) {
          ce.buttons === 0 || !bt(ce) ? V(ce) : Y(ce);
        }), ge = pt(e, V);
        e.state.selectingText = ge, E(i.wrapper.ownerDocument, "mousemove", fe), E(i.wrapper.ownerDocument, "mouseup", ge);
      }
      function ef(e, t) {
        var n = t.anchor, r = t.head, i = we(e.doc, n.line);
        if (Ie(n, r) == 0 && n.sticky == r.sticky)
          return t;
        var a = x(i);
        if (!a)
          return t;
        var o = I(a, n.ch, n.sticky), u = a[o];
        if (u.from != n.ch && u.to != n.ch)
          return t;
        var s = o + (u.from == n.ch == (u.level != 1) ? 0 : 1);
        if (s == 0 || s == a.length)
          return t;
        var c;
        if (r.line != n.line)
          c = (r.line - n.line) * (e.doc.direction == "ltr" ? 1 : -1) > 0;
        else {
          var g = I(a, r.ch, r.sticky), m = g - o || (r.ch - n.ch) * (u.level == 1 ? -1 : 1);
          g == s - 1 || g == s ? c = m < 0 : c = m > 0;
        }
        var T = a[s + (c ? -1 : 0)], F = c == (T.level == 1), U = F ? T.from : T.to, Y = F ? "after" : "before";
        return n.ch == U && n.sticky == Y ? t : new qe(new J(n.line, U, Y), r);
      }
      function pl(e, t, n, r) {
        var i, a;
        if (t.touches)
          i = t.touches[0].clientX, a = t.touches[0].clientY;
        else
          try {
            i = t.clientX, a = t.clientY;
          } catch {
            return !1;
          }
        if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
          return !1;
        r && Ae(t);
        var o = e.display, u = o.lineDiv.getBoundingClientRect();
        if (a > u.bottom || !Me(e, n))
          return Ze(t);
        a -= u.top - o.viewOffset;
        for (var s = 0; s < e.display.gutterSpecs.length; ++s) {
          var c = o.gutters.childNodes[s];
          if (c && c.getBoundingClientRect().right >= i) {
            var g = yr(e.doc, a), m = e.display.gutterSpecs[s];
            return ye(e, n, e, g, m.className, t), Ze(t);
          }
        }
      }
      function sa(e, t) {
        return pl(e, t, "gutterClick", !0);
      }
      function gl(e, t) {
        tr(e.display, t) || tf(e, t) || re(e, t, "contextmenu") || Ue || e.display.input.onContextMenu(t);
      }
      function tf(e, t) {
        return Me(e, "gutterContextMenu") ? pl(e, t, "gutterContextMenu", !1) : !1;
      }
      function vl(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"), cn(e);
      }
      var Zr = { toString: function() {
        return "CodeMirror.Init";
      } }, ml = {}, si = {};
      function rf(e) {
        var t = e.optionHandlers;
        function n(r, i, a, o) {
          e.defaults[r] = i, a && (t[r] = o ? function(u, s, c) {
            c != Zr && a(u, s, c);
          } : a);
        }
        e.defineOption = n, e.Init = Zr, n("value", "", function(r, i) {
          return r.setValue(i);
        }, !0), n("mode", null, function(r, i) {
          r.doc.modeOption = i, Vi(r);
        }, !0), n("indentUnit", 2, Vi, !0), n("indentWithTabs", !1), n("smartIndent", !0), n("tabSize", 4, function(r) {
          xn(r), cn(r), Et(r);
        }, !0), n("lineSeparator", null, function(r, i) {
          if (r.doc.lineSep = i, !!i) {
            var a = [], o = r.doc.first;
            r.doc.iter(function(s) {
              for (var c = 0; ; ) {
                var g = s.text.indexOf(i, c);
                if (g == -1)
                  break;
                c = g + i.length, a.push(J(o, g));
              }
              o++;
            });
            for (var u = a.length - 1; u >= 0; u--)
              jr(r.doc, i, a[u], J(a[u].line, a[u].ch + i.length));
          }
        }), n("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b\u200e\u200f\u2028\u2029\u202d\u202e\u2066\u2067\u2069\ufeff\ufff9-\ufffc]/g, function(r, i, a) {
          r.state.specialChars = new RegExp(i.source + (i.test("	") ? "" : "|	"), "g"), a != Zr && r.refresh();
        }), n("specialCharPlaceholder", Bu, function(r) {
          return r.refresh();
        }, !0), n("electricChars", !0), n("inputStyle", q ? "contenteditable" : "textarea", function() {
          throw new Error("inputStyle can not (yet) be changed in a running editor");
        }, !0), n("spellcheck", !1, function(r, i) {
          return r.getInputField().spellcheck = i;
        }, !0), n("autocorrect", !1, function(r, i) {
          return r.getInputField().autocorrect = i;
        }, !0), n("autocapitalize", !1, function(r, i) {
          return r.getInputField().autocapitalize = i;
        }, !0), n("rtlMoveVisually", !Z), n("wholeLineUpdateBefore", !0), n("theme", "default", function(r) {
          vl(r), yn(r);
        }, !0), n("keyMap", "default", function(r, i, a) {
          var o = li(i), u = a != Zr && li(a);
          u && u.detach && u.detach(r, o), o.attach && o.attach(r, u || null);
        }), n("extraKeys", null), n("configureMouse", null), n("lineWrapping", !1, af, !0), n("gutters", [], function(r, i) {
          r.display.gutterSpecs = $i(i, r.options.lineNumbers), yn(r);
        }, !0), n("fixedGutter", !0, function(r, i) {
          r.display.gutters.style.left = i ? zi(r.display) + "px" : "0", r.refresh();
        }, !0), n("coverGutterNextToScrollbar", !1, function(r) {
          return Wr(r);
        }, !0), n("scrollbarStyle", "native", function(r) {
          xo(r), Wr(r), r.display.scrollbars.setScrollTop(r.doc.scrollTop), r.display.scrollbars.setScrollLeft(r.doc.scrollLeft);
        }, !0), n("lineNumbers", !1, function(r, i) {
          r.display.gutterSpecs = $i(r.options.gutters, i), yn(r);
        }, !0), n("firstLineNumber", 1, yn, !0), n("lineNumberFormatter", function(r) {
          return r;
        }, yn, !0), n("showCursorWhenSelecting", !1, hn, !0), n("resetSelectionOnContextMenu", !0), n("lineWiseCopyCut", !0), n("pasteLinesPerSelection", !0), n("selectionsMayTouch", !1), n("readOnly", !1, function(r, i) {
          i == "nocursor" && (zr(r), r.display.input.blur()), r.display.input.readOnlyChanged(i);
        }), n("screenReaderLabel", null, function(r, i) {
          i = i === "" ? null : i, r.display.input.screenReaderLabelChanged(i);
        }), n("disableInput", !1, function(r, i) {
          i || r.display.input.reset();
        }, !0), n("dragDrop", !0, nf), n("allowDropFileTypes", null), n("cursorBlinkRate", 530), n("cursorScrollMargin", 0), n("cursorHeight", 1, hn, !0), n("singleCursorHeightPerLine", !0, hn, !0), n("workTime", 100), n("workDelay", 100), n("flattenSpans", !0, xn, !0), n("addModeClass", !1, xn, !0), n("pollInterval", 100), n("undoDepth", 200, function(r, i) {
          return r.doc.history.undoDepth = i;
        }), n("historyEventDelay", 1250), n("viewportMargin", 10, function(r) {
          return r.refresh();
        }, !0), n("maxHighlightLength", 1e4, xn, !0), n("moveInputWithCursor", !0, function(r, i) {
          i || r.display.input.resetPosition();
        }), n("tabindex", null, function(r, i) {
          return r.display.input.getField().tabIndex = i || "";
        }), n("autofocus", null), n("direction", "ltr", function(r, i) {
          return r.doc.setDirection(i);
        }, !0), n("phrases", null);
      }
      function nf(e, t, n) {
        var r = n && n != Zr;
        if (!t != !r) {
          var i = e.display.dragFunctions, a = t ? E : me;
          a(e.display.scroller, "dragstart", i.start), a(e.display.scroller, "dragenter", i.enter), a(e.display.scroller, "dragover", i.over), a(e.display.scroller, "dragleave", i.leave), a(e.display.scroller, "drop", i.drop);
        }
      }
      function af(e) {
        e.options.lineWrapping ? (rt(e.display.wrapper, "CodeMirror-wrap"), e.display.sizer.style.minWidth = "", e.display.sizerWidth = null) : (Le(e.display.wrapper, "CodeMirror-wrap"), Li(e)), _i(e), Et(e), cn(e), setTimeout(function() {
          return Wr(e);
        }, 100);
      }
      function et(e, t) {
        var n = this;
        if (!(this instanceof et))
          return new et(e, t);
        this.options = t = t ? Je(t) : {}, Je(ml, t, !1);
        var r = t.value;
        typeof r == "string" ? r = new Lt(r, t.mode, null, t.lineSeparator, t.direction) : t.mode && (r.modeOption = t.mode), this.doc = r;
        var i = new et.inputStyles[t.inputStyle](this), a = this.display = new ms(e, r, i, t);
        a.wrapper.CodeMirror = this, vl(this), t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"), xo(this), this.state = {
          keyMaps: [],
          // stores maps added by addKeyMap
          overlays: [],
          // highlighting overlays, as added by addOverlay
          modeGen: 0,
          // bumped when mode/overlay changes, used to invalidate highlighting info
          overwrite: !1,
          delayingBlurEvent: !1,
          focused: !1,
          suppressEdits: !1,
          // used to disable editing during key handlers when in readOnly mode
          pasteIncoming: -1,
          cutIncoming: -1,
          // help recognize paste/cut edits in input.poll
          selectingText: !1,
          draggingText: !1,
          highlight: new Ye(),
          // stores highlight worker timeout
          keySeq: null,
          // Unfinished key sequence
          specialChars: null
        }, t.autofocus && !q && a.input.focus(), B && _ < 11 && setTimeout(function() {
          return n.display.input.reset(!0);
        }, 20), of(this), Hs(), Sr(this), this.curOp.forceUpdate = !0, Lo(this, r), t.autofocus && !q || this.hasFocus() ? setTimeout(function() {
          n.hasFocus() && !n.state.focused && Gi(n);
        }, 20) : zr(this);
        for (var o in si)
          si.hasOwnProperty(o) && si[o](this, t[o], Zr);
        Co(this), t.finishInit && t.finishInit(this);
        for (var u = 0; u < fa.length; ++u)
          fa[u](this);
        Fr(this), ee && t.lineWrapping && getComputedStyle(a.lineDiv).textRendering == "optimizelegibility" && (a.lineDiv.style.textRendering = "auto");
      }
      et.defaults = ml, et.optionHandlers = si;
      function of(e) {
        var t = e.display;
        E(t.scroller, "mousedown", pt(e, hl)), B && _ < 11 ? E(t.scroller, "dblclick", pt(e, function(s) {
          if (!re(e, s)) {
            var c = br(e, s);
            if (!(!c || sa(e, s) || tr(e.display, s))) {
              Ae(s);
              var g = e.findWordAt(c);
              ri(e.doc, g.anchor, g.head);
            }
          }
        })) : E(t.scroller, "dblclick", function(s) {
          return re(e, s) || Ae(s);
        }), E(t.scroller, "contextmenu", function(s) {
          return gl(e, s);
        }), E(t.input.getField(), "contextmenu", function(s) {
          t.scroller.contains(s.target) || gl(e, s);
        });
        var n, r = { end: 0 };
        function i() {
          t.activeTouch && (n = setTimeout(function() {
            return t.activeTouch = null;
          }, 1e3), r = t.activeTouch, r.end = +/* @__PURE__ */ new Date());
        }
        function a(s) {
          if (s.touches.length != 1)
            return !1;
          var c = s.touches[0];
          return c.radiusX <= 1 && c.radiusY <= 1;
        }
        function o(s, c) {
          if (c.left == null)
            return !0;
          var g = c.left - s.left, m = c.top - s.top;
          return g * g + m * m > 400;
        }
        E(t.scroller, "touchstart", function(s) {
          if (!re(e, s) && !a(s) && !sa(e, s)) {
            t.input.ensurePolled(), clearTimeout(n);
            var c = +/* @__PURE__ */ new Date();
            t.activeTouch = {
              start: c,
              moved: !1,
              prev: c - r.end <= 300 ? r : null
            }, s.touches.length == 1 && (t.activeTouch.left = s.touches[0].pageX, t.activeTouch.top = s.touches[0].pageY);
          }
        }), E(t.scroller, "touchmove", function() {
          t.activeTouch && (t.activeTouch.moved = !0);
        }), E(t.scroller, "touchend", function(s) {
          var c = t.activeTouch;
          if (c && !tr(t, s) && c.left != null && !c.moved && /* @__PURE__ */ new Date() - c.start < 300) {
            var g = e.coordsChar(t.activeTouch, "page"), m;
            !c.prev || o(c, c.prev) ? m = new qe(g, g) : !c.prev.prev || o(c, c.prev.prev) ? m = e.findWordAt(g) : m = new qe(J(g.line, 0), Oe(e.doc, J(g.line + 1, 0))), e.setSelection(m.anchor, m.head), e.focus(), Ae(s);
          }
          i();
        }), E(t.scroller, "touchcancel", i), E(t.scroller, "scroll", function() {
          t.scroller.clientHeight && (pn(e, t.scroller.scrollTop), wr(e, t.scroller.scrollLeft, !0), ye(e, "scroll", e));
        }), E(t.scroller, "mousewheel", function(s) {
          return So(e, s);
        }), E(t.scroller, "DOMMouseScroll", function(s) {
          return So(e, s);
        }), E(t.wrapper, "scroll", function() {
          return t.wrapper.scrollTop = t.wrapper.scrollLeft = 0;
        }), t.dragFunctions = {
          enter: function(s) {
            re(e, s) || ut(s);
          },
          over: function(s) {
            re(e, s) || (Ns(e, s), ut(s));
          },
          start: function(s) {
            return Os(e, s);
          },
          drop: pt(e, Is),
          leave: function(s) {
            re(e, s) || Vo(e);
          }
        };
        var u = t.input.getField();
        E(u, "keyup", function(s) {
          return fl.call(e, s);
        }), E(u, "keydown", pt(e, sl)), E(u, "keypress", pt(e, cl)), E(u, "focus", function(s) {
          return Gi(e, s);
        }), E(u, "blur", function(s) {
          return zr(e, s);
        });
      }
      var fa = [];
      et.defineInitHook = function(e) {
        return fa.push(e);
      };
      function Mn(e, t, n, r) {
        var i = e.doc, a;
        n == null && (n = "add"), n == "smart" && (i.mode.indent ? a = on(e, t).state : n = "prev");
        var o = e.options.tabSize, u = we(i, t), s = Ke(u.text, null, o);
        u.stateAfter && (u.stateAfter = null);
        var c = u.text.match(/^\s*/)[0], g;
        if (!r && !/\S/.test(u.text))
          g = 0, n = "not";
        else if (n == "smart" && (g = i.mode.indent(a, u.text.slice(c.length), u.text), g == Ve || g > 150)) {
          if (!r)
            return;
          n = "prev";
        }
        n == "prev" ? t > i.first ? g = Ke(we(i, t - 1).text, null, o) : g = 0 : n == "add" ? g = s + e.options.indentUnit : n == "subtract" ? g = s - e.options.indentUnit : typeof n == "number" && (g = s + n), g = Math.max(0, g);
        var m = "", T = 0;
        if (e.options.indentWithTabs)
          for (var F = Math.floor(g / o); F; --F)
            T += o, m += "	";
        if (T < g && (m += Ht(g - T)), m != c)
          return jr(i, m, J(t, 0), J(t, c.length), "+input"), u.stateAfter = null, !0;
        for (var U = 0; U < i.sel.ranges.length; U++) {
          var Y = i.sel.ranges[U];
          if (Y.head.line == t && Y.head.ch < c.length) {
            var V = J(t, c.length);
            na(i, U, new qe(V, V));
            break;
          }
        }
      }
      var Kt = null;
      function fi(e) {
        Kt = e;
      }
      function ca(e, t, n, r, i) {
        var a = e.doc;
        e.display.shift = !1, r || (r = a.sel);
        var o = +/* @__PURE__ */ new Date() - 200, u = i == "paste" || e.state.pasteIncoming > o, s = nn(t), c = null;
        if (u && r.ranges.length > 1)
          if (Kt && Kt.text.join(`
`) == t) {
            if (r.ranges.length % Kt.text.length == 0) {
              c = [];
              for (var g = 0; g < Kt.text.length; g++)
                c.push(a.splitLines(Kt.text[g]));
            }
          } else s.length == r.ranges.length && e.options.pasteLinesPerSelection && (c = lt(s, function(fe) {
            return [fe];
          }));
        for (var m = e.curOp.updateInput, T = r.ranges.length - 1; T >= 0; T--) {
          var F = r.ranges[T], U = F.from(), Y = F.to();
          F.empty() && (n && n > 0 ? U = J(U.line, U.ch - n) : e.state.overwrite && !u ? Y = J(Y.line, Math.min(we(a, Y.line).text.length, Y.ch + De(s).length)) : u && Kt && Kt.lineWise && Kt.text.join(`
`) == s.join(`
`) && (U = Y = J(U.line, 0)));
          var V = {
            from: U,
            to: Y,
            text: c ? c[T % c.length] : s,
            origin: i || (u ? "paste" : e.state.cutIncoming > o ? "cut" : "+input")
          };
          Gr(e.doc, V), dt(e, "inputRead", e, V);
        }
        t && !u && xl(e, t), _r(e), e.curOp.updateInput < 2 && (e.curOp.updateInput = m), e.curOp.typing = !0, e.state.pasteIncoming = e.state.cutIncoming = -1;
      }
      function yl(e, t) {
        var n = e.clipboardData && e.clipboardData.getData("Text");
        if (n)
          return e.preventDefault(), !t.isReadOnly() && !t.options.disableInput && t.hasFocus() && Ot(t, function() {
            return ca(t, n, 0, null, "paste");
          }), !0;
      }
      function xl(e, t) {
        if (!(!e.options.electricChars || !e.options.smartIndent))
          for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
            var i = n.ranges[r];
            if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
              var a = e.getModeAt(i.head), o = !1;
              if (a.electricChars) {
                for (var u = 0; u < a.electricChars.length; u++)
                  if (t.indexOf(a.electricChars.charAt(u)) > -1) {
                    o = Mn(e, i.head.line, "smart");
                    break;
                  }
              } else a.electricInput && a.electricInput.test(we(e.doc, i.head.line).text.slice(0, i.head.ch)) && (o = Mn(e, i.head.line, "smart"));
              o && dt(e, "electricInput", e, i.head.line);
            }
          }
      }
      function Dl(e) {
        for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
          var i = e.doc.sel.ranges[r].head.line, a = { anchor: J(i, 0), head: J(i + 1, 0) };
          n.push(a), t.push(e.getRange(a.anchor, a.head));
        }
        return { text: t, ranges: n };
      }
      function ha(e, t, n, r) {
        e.setAttribute("autocorrect", n ? "on" : "off"), e.setAttribute("autocapitalize", r ? "on" : "off"), e.setAttribute("spellcheck", !!t);
      }
      function bl() {
        var e = L("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; min-height: 1em; outline: none"), t = L("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return ee ? e.style.width = "1000px" : e.setAttribute("wrap", "off"), z && (e.style.border = "1px solid black"), t;
      }
      function lf(e) {
        var t = e.optionHandlers, n = e.helpers = {};
        e.prototype = {
          constructor: e,
          focus: function() {
            Te(this).focus(), this.display.input.focus();
          },
          setOption: function(r, i) {
            var a = this.options, o = a[r];
            a[r] == i && r != "mode" || (a[r] = i, t.hasOwnProperty(r) && pt(this, t[r])(this, i, o), ye(this, "optionChange", this, r));
          },
          getOption: function(r) {
            return this.options[r];
          },
          getDoc: function() {
            return this.doc;
          },
          addKeyMap: function(r, i) {
            this.state.keyMaps[i ? "push" : "unshift"](li(r));
          },
          removeKeyMap: function(r) {
            for (var i = this.state.keyMaps, a = 0; a < i.length; ++a)
              if (i[a] == r || i[a].name == r)
                return i.splice(a, 1), !0;
          },
          addOverlay: St(function(r, i) {
            var a = r.token ? r : e.getMode(this.options, r);
            if (a.startState)
              throw new Error("Overlays may not be stateful.");
            _t(
              this.state.overlays,
              {
                mode: a,
                modeSpec: r,
                opaque: i && i.opaque,
                priority: i && i.priority || 0
              },
              function(o) {
                return o.priority;
              }
            ), this.state.modeGen++, Et(this);
          }),
          removeOverlay: St(function(r) {
            for (var i = this.state.overlays, a = 0; a < i.length; ++a) {
              var o = i[a].modeSpec;
              if (o == r || typeof r == "string" && o.name == r) {
                i.splice(a, 1), this.state.modeGen++, Et(this);
                return;
              }
            }
          }),
          indentLine: St(function(r, i, a) {
            typeof i != "string" && typeof i != "number" && (i == null ? i = this.options.smartIndent ? "smart" : "prev" : i = i ? "add" : "subtract"), an(this.doc, r) && Mn(this, r, i, a);
          }),
          indentSelection: St(function(r) {
            for (var i = this.doc.sel.ranges, a = -1, o = 0; o < i.length; o++) {
              var u = i[o];
              if (u.empty())
                u.head.line > a && (Mn(this, u.head.line, r, !0), a = u.head.line, o == this.doc.sel.primIndex && _r(this));
              else {
                var s = u.from(), c = u.to(), g = Math.max(a, s.line);
                a = Math.min(this.lastLine(), c.line - (c.ch ? 0 : 1)) + 1;
                for (var m = g; m < a; ++m)
                  Mn(this, m, r);
                var T = this.doc.sel.ranges;
                s.ch == 0 && i.length == T.length && T[o].from().ch > 0 && na(this.doc, o, new qe(s, T[o].to()), at);
              }
            }
          }),
          // Fetch the parser token for a given character. Useful for hacks
          // that want to inspect the mode state (say, for completion).
          getTokenAt: function(r, i) {
            return Ta(this, r, i);
          },
          getLineTokens: function(r, i) {
            return Ta(this, J(r), i, !0);
          },
          getTokenTypeAt: function(r) {
            r = Oe(this.doc, r);
            var i = Aa(this, we(this.doc, r.line)), a = 0, o = (i.length - 1) / 2, u = r.ch, s;
            if (u == 0)
              s = i[2];
            else
              for (; ; ) {
                var c = a + o >> 1;
                if ((c ? i[c * 2 - 1] : 0) >= u)
                  o = c;
                else if (i[c * 2 + 1] < u)
                  a = c + 1;
                else {
                  s = i[c * 2 + 2];
                  break;
                }
              }
            var g = s ? s.indexOf("overlay ") : -1;
            return g < 0 ? s : g == 0 ? null : s.slice(0, g - 1);
          },
          getModeAt: function(r) {
            var i = this.doc.mode;
            return i.innerMode ? e.innerMode(i, this.getTokenAt(r).state).mode : i;
          },
          getHelper: function(r, i) {
            return this.getHelpers(r, i)[0];
          },
          getHelpers: function(r, i) {
            var a = [];
            if (!n.hasOwnProperty(i))
              return a;
            var o = n[i], u = this.getModeAt(r);
            if (typeof u[i] == "string")
              o[u[i]] && a.push(o[u[i]]);
            else if (u[i])
              for (var s = 0; s < u[i].length; s++) {
                var c = o[u[i][s]];
                c && a.push(c);
              }
            else u.helperType && o[u.helperType] ? a.push(o[u.helperType]) : o[u.name] && a.push(o[u.name]);
            for (var g = 0; g < o._global.length; g++) {
              var m = o._global[g];
              m.pred(u, this) && Pe(a, m.val) == -1 && a.push(m.val);
            }
            return a;
          },
          getStateAfter: function(r, i) {
            var a = this.doc;
            return r = ka(a, r ?? a.first + a.size - 1), on(this, r + 1, i).state;
          },
          cursorCoords: function(r, i) {
            var a, o = this.doc.sel.primary();
            return r == null ? a = o.head : typeof r == "object" ? a = Oe(this.doc, r) : a = r ? o.from() : o.to(), Gt(this, a, i || "page");
          },
          charCoords: function(r, i) {
            return Kn(this, Oe(this.doc, r), i || "page");
          },
          coordsChar: function(r, i) {
            return r = ao(this, r, i || "page"), Hi(this, r.left, r.top);
          },
          lineAtHeight: function(r, i) {
            return r = ao(this, { top: r, left: 0 }, i || "page").top, yr(this.doc, r + this.display.viewOffset);
          },
          heightAtLine: function(r, i, a) {
            var o = !1, u;
            if (typeof r == "number") {
              var s = this.doc.first + this.doc.size - 1;
              r < this.doc.first ? r = this.doc.first : r > s && (r = s, o = !0), u = we(this.doc, r);
            } else
              u = r;
            return jn(this, u, { top: 0, left: 0 }, i || "page", a || o).top + (o ? this.doc.height - er(u) : 0);
          },
          defaultTextHeight: function() {
            return Rr(this.display);
          },
          defaultCharWidth: function() {
            return Pr(this.display);
          },
          getViewport: function() {
            return { from: this.display.viewFrom, to: this.display.viewTo };
          },
          addWidget: function(r, i, a, o, u) {
            var s = this.display;
            r = Gt(this, Oe(this.doc, r));
            var c = r.bottom, g = r.left;
            if (i.style.position = "absolute", i.setAttribute("cm-ignore-events", "true"), this.display.input.setUneditable(i), s.sizer.appendChild(i), o == "over")
              c = r.top;
            else if (o == "above" || o == "near") {
              var m = Math.max(s.wrapper.clientHeight, this.doc.height), T = Math.max(s.sizer.clientWidth, s.lineSpace.clientWidth);
              (o == "above" || r.bottom + i.offsetHeight > m) && r.top > i.offsetHeight ? c = r.top - i.offsetHeight : r.bottom + i.offsetHeight <= m && (c = r.bottom), g + i.offsetWidth > T && (g = T - i.offsetWidth);
            }
            i.style.top = c + "px", i.style.left = i.style.right = "", u == "right" ? (g = s.sizer.clientWidth - i.offsetWidth, i.style.right = "0px") : (u == "left" ? g = 0 : u == "middle" && (g = (s.sizer.clientWidth - i.offsetWidth) / 2), i.style.left = g + "px"), a && ns(this, { left: g, top: c, right: g + i.offsetWidth, bottom: c + i.offsetHeight });
          },
          triggerOnKeyDown: St(sl),
          triggerOnKeyPress: St(cl),
          triggerOnKeyUp: fl,
          triggerOnMouseDown: St(hl),
          execCommand: function(r) {
            if (En.hasOwnProperty(r))
              return En[r].call(null, this);
          },
          triggerElectric: St(function(r) {
            xl(this, r);
          }),
          findPosH: function(r, i, a, o) {
            var u = 1;
            i < 0 && (u = -1, i = -i);
            for (var s = Oe(this.doc, r), c = 0; c < i && (s = da(this.doc, s, u, a, o), !s.hitSide); ++c)
              ;
            return s;
          },
          moveH: St(function(r, i) {
            var a = this;
            this.extendSelectionsBy(function(o) {
              return a.display.shift || a.doc.extend || o.empty() ? da(a.doc, o.head, r, i, a.options.rtlMoveVisually) : r < 0 ? o.from() : o.to();
            }, Dt);
          }),
          deleteH: St(function(r, i) {
            var a = this.doc.sel, o = this.doc;
            a.somethingSelected() ? o.replaceSelection("", null, "+delete") : Yr(this, function(u) {
              var s = da(o, u.head, r, i, !1);
              return r < 0 ? { from: s, to: u.head } : { from: u.head, to: s };
            });
          }),
          findPosV: function(r, i, a, o) {
            var u = 1, s = o;
            i < 0 && (u = -1, i = -i);
            for (var c = Oe(this.doc, r), g = 0; g < i; ++g) {
              var m = Gt(this, c, "div");
              if (s == null ? s = m.left : m.left = s, c = Cl(this, m, u, a), c.hitSide)
                break;
            }
            return c;
          },
          moveV: St(function(r, i) {
            var a = this, o = this.doc, u = [], s = !this.display.shift && !o.extend && o.sel.somethingSelected();
            if (o.extendSelectionsBy(function(g) {
              if (s)
                return r < 0 ? g.from() : g.to();
              var m = Gt(a, g.head, "div");
              g.goalColumn != null && (m.left = g.goalColumn), u.push(m.left);
              var T = Cl(a, m, r, i);
              return i == "page" && g == o.sel.primary() && Ki(a, Kn(a, T, "div").top - m.top), T;
            }, Dt), u.length)
              for (var c = 0; c < o.sel.ranges.length; c++)
                o.sel.ranges[c].goalColumn = u[c];
          }),
          // Find the word at the given position (as returned by coordsChar).
          findWordAt: function(r) {
            var i = this.doc, a = we(i, r.line).text, o = r.ch, u = r.ch;
            if (a) {
              var s = this.getHelper(r, "wordChars");
              (r.sticky == "before" || u == a.length) && o ? --o : ++u;
              for (var c = a.charAt(o), g = d(c, s) ? function(m) {
                return d(m, s);
              } : /\s/.test(c) ? function(m) {
                return /\s/.test(m);
              } : function(m) {
                return !/\s/.test(m) && !d(m);
              }; o > 0 && g(a.charAt(o - 1)); )
                --o;
              for (; u < a.length && g(a.charAt(u)); )
                ++u;
            }
            return new qe(J(r.line, o), J(r.line, u));
          },
          toggleOverwrite: function(r) {
            r != null && r == this.state.overwrite || ((this.state.overwrite = !this.state.overwrite) ? rt(this.display.cursorDiv, "CodeMirror-overwrite") : Le(this.display.cursorDiv, "CodeMirror-overwrite"), ye(this, "overwriteToggle", this, this.state.overwrite));
          },
          hasFocus: function() {
            return this.display.input.getField() == _e(G(this));
          },
          isReadOnly: function() {
            return !!(this.options.readOnly || this.doc.cantEdit);
          },
          scrollTo: St(function(r, i) {
            dn(this, r, i);
          }),
          getScrollInfo: function() {
            var r = this.display.scroller;
            return {
              left: r.scrollLeft,
              top: r.scrollTop,
              height: r.scrollHeight - Qt(this) - this.display.barHeight,
              width: r.scrollWidth - Qt(this) - this.display.barWidth,
              clientHeight: Mi(this),
              clientWidth: xr(this)
            };
          },
          scrollIntoView: St(function(r, i) {
            r == null ? (r = { from: this.doc.sel.primary().head, to: null }, i == null && (i = this.options.cursorScrollMargin)) : typeof r == "number" ? r = { from: J(r, 0), to: null } : r.from == null && (r = { from: r, to: null }), r.to || (r.to = r.from), r.margin = i || 0, r.from.line != null ? is(this, r) : go(this, r.from, r.to, r.margin);
          }),
          setSize: St(function(r, i) {
            var a = this, o = function(s) {
              return typeof s == "number" || /^\d+$/.test(String(s)) ? s + "px" : s;
            };
            r != null && (this.display.wrapper.style.width = o(r)), i != null && (this.display.wrapper.style.height = o(i)), this.options.lineWrapping && ro(this);
            var u = this.display.viewFrom;
            this.doc.iter(u, this.display.viewTo, function(s) {
              if (s.widgets) {
                for (var c = 0; c < s.widgets.length; c++)
                  if (s.widgets[c].noHScroll) {
                    lr(a, u, "widget");
                    break;
                  }
              }
              ++u;
            }), this.curOp.forceUpdate = !0, ye(this, "refresh", this);
          }),
          operation: function(r) {
            return Ot(this, r);
          },
          startOperation: function() {
            return Sr(this);
          },
          endOperation: function() {
            return Fr(this);
          },
          refresh: St(function() {
            var r = this.display.cachedTextHeight;
            Et(this), this.curOp.forceUpdate = !0, cn(this), dn(this, this.doc.scrollLeft, this.doc.scrollTop), Zi(this.display), (r == null || Math.abs(r - Rr(this.display)) > 0.5 || this.options.lineWrapping) && _i(this), ye(this, "refresh", this);
          }),
          swapDoc: St(function(r) {
            var i = this.doc;
            return i.cm = null, this.state.selectingText && this.state.selectingText(), Lo(this, r), cn(this), this.display.input.reset(), dn(this, r.scrollLeft, r.scrollTop), this.curOp.forceScroll = !0, dt(this, "swapDoc", this, i), i;
          }),
          phrase: function(r) {
            var i = this.options.phrases;
            return i && Object.prototype.hasOwnProperty.call(i, r) ? i[r] : r;
          },
          getInputField: function() {
            return this.display.input.getField();
          },
          getWrapperElement: function() {
            return this.display.wrapper;
          },
          getScrollerElement: function() {
            return this.display.scroller;
          },
          getGutterElement: function() {
            return this.display.gutters;
          }
        }, Ne(e), e.registerHelper = function(r, i, a) {
          n.hasOwnProperty(r) || (n[r] = e[r] = { _global: [] }), n[r][i] = a;
        }, e.registerGlobalHelper = function(r, i, a, o) {
          e.registerHelper(r, i, o), n[r]._global.push({ pred: a, val: o });
        };
      }
      function da(e, t, n, r, i) {
        var a = t, o = n, u = we(e, t.line), s = i && e.direction == "rtl" ? -n : n;
        function c() {
          var ge = t.line + s;
          return ge < e.first || ge >= e.first + e.size ? !1 : (t = new J(ge, t.ch, t.sticky), u = we(e, ge));
        }
        function g(ge) {
          var ce;
          if (r == "codepoint") {
            var ve = u.text.charCodeAt(t.ch + (n > 0 ? 0 : -1));
            if (isNaN(ve))
              ce = null;
            else {
              var Fe = n > 0 ? ve >= 55296 && ve < 56320 : ve >= 56320 && ve < 57343;
              ce = new J(t.line, Math.max(0, Math.min(u.text.length, t.ch + n * (Fe ? 2 : 1))), -n);
            }
          } else i ? ce = Ws(e.cm, u, t, n) : ce = aa(u, t, n);
          if (ce == null)
            if (!ge && c())
              t = oa(i, e.cm, u, t.line, s);
            else
              return !1;
          else
            t = ce;
          return !0;
        }
        if (r == "char" || r == "codepoint")
          g();
        else if (r == "column")
          g(!0);
        else if (r == "word" || r == "group")
          for (var m = null, T = r == "group", F = e.cm && e.cm.getHelper(t, "wordChars"), U = !0; !(n < 0 && !g(!U)); U = !1) {
            var Y = u.text.charAt(t.ch) || `
`, V = d(Y, F) ? "w" : T && Y == `
` ? "n" : !T || /\s/.test(Y) ? null : "p";
            if (T && !U && !V && (V = "s"), m && m != V) {
              n < 0 && (n = 1, g(), t.sticky = "after");
              break;
            }
            if (V && (m = V), n > 0 && !g(!U))
              break;
          }
        var fe = ii(e, t, a, o, !0);
        return bi(a, fe) && (fe.hitSide = !0), fe;
      }
      function Cl(e, t, n, r) {
        var i = e.doc, a = t.left, o;
        if (r == "page") {
          var u = Math.min(e.display.wrapper.clientHeight, Te(e).innerHeight || i(e).documentElement.clientHeight), s = Math.max(u - 0.5 * Rr(e.display), 3);
          o = (n > 0 ? t.bottom : t.top) + n * s;
        } else r == "line" && (o = n > 0 ? t.bottom + 3 : t.top - 3);
        for (var c; c = Hi(e, a, o), !!c.outside; ) {
          if (n < 0 ? o <= 0 : o >= i.height) {
            c.hitSide = !0;
            break;
          }
          o += n * 5;
        }
        return c;
      }
      var je = function(e) {
        this.cm = e, this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null, this.polling = new Ye(), this.composing = null, this.gracePeriod = !1, this.readDOMTimeout = null;
      };
      je.prototype.init = function(e) {
        var t = this, n = this, r = n.cm, i = n.div = e.lineDiv;
        i.contentEditable = !0, ha(i, r.options.spellcheck, r.options.autocorrect, r.options.autocapitalize);
        function a(u) {
          for (var s = u.target; s; s = s.parentNode) {
            if (s == i)
              return !0;
            if (/\bCodeMirror-(?:line)?widget\b/.test(s.className))
              break;
          }
          return !1;
        }
        E(i, "paste", function(u) {
          !a(u) || re(r, u) || yl(u, r) || _ <= 11 && setTimeout(pt(r, function() {
            return t.updateFromDOM();
          }), 20);
        }), E(i, "compositionstart", function(u) {
          t.composing = { data: u.data, done: !1 };
        }), E(i, "compositionupdate", function(u) {
          t.composing || (t.composing = { data: u.data, done: !1 });
        }), E(i, "compositionend", function(u) {
          t.composing && (u.data != t.composing.data && t.readFromDOMSoon(), t.composing.done = !0);
        }), E(i, "touchstart", function() {
          return n.forceCompositionEnd();
        }), E(i, "input", function() {
          t.composing || t.readFromDOMSoon();
        });
        function o(u) {
          if (!(!a(u) || re(r, u))) {
            if (r.somethingSelected())
              fi({ lineWise: !1, text: r.getSelections() }), u.type == "cut" && r.replaceSelection("", null, "cut");
            else if (r.options.lineWiseCopyCut) {
              var s = Dl(r);
              fi({ lineWise: !0, text: s.text }), u.type == "cut" && r.operation(function() {
                r.setSelections(s.ranges, 0, at), r.replaceSelection("", null, "cut");
              });
            } else
              return;
            if (u.clipboardData) {
              u.clipboardData.clearData();
              var c = Kt.text.join(`
`);
              if (u.clipboardData.setData("Text", c), u.clipboardData.getData("Text") == c) {
                u.preventDefault();
                return;
              }
            }
            var g = bl(), m = g.firstChild;
            ha(m), r.display.lineSpace.insertBefore(g, r.display.lineSpace.firstChild), m.value = Kt.text.join(`
`);
            var T = _e(ze(i));
            b(m), setTimeout(function() {
              r.display.lineSpace.removeChild(g), T.focus(), T == i && n.showPrimarySelection();
            }, 50);
          }
        }
        E(i, "copy", o), E(i, "cut", o);
      }, je.prototype.screenReaderLabelChanged = function(e) {
        e ? this.div.setAttribute("aria-label", e) : this.div.removeAttribute("aria-label");
      }, je.prototype.prepareSelection = function() {
        var e = co(this.cm, !1);
        return e.focus = _e(ze(this.div)) == this.div, e;
      }, je.prototype.showSelection = function(e, t) {
        !e || !this.cm.display.view.length || ((e.focus || t) && this.showPrimarySelection(), this.showMultipleSelections(e));
      }, je.prototype.getSelection = function() {
        return this.cm.display.wrapper.ownerDocument.getSelection();
      }, je.prototype.showPrimarySelection = function() {
        var e = this.getSelection(), t = this.cm, n = t.doc.sel.primary(), r = n.from(), i = n.to();
        if (t.display.viewTo == t.display.viewFrom || r.line >= t.display.viewTo || i.line < t.display.viewFrom) {
          e.removeAllRanges();
          return;
        }
        var a = ci(t, e.anchorNode, e.anchorOffset), o = ci(t, e.focusNode, e.focusOffset);
        if (!(a && !a.bad && o && !o.bad && Ie(Hn(a, o), r) == 0 && Ie(Nn(a, o), i) == 0)) {
          var u = t.display.view, s = r.line >= t.display.viewFrom && wl(t, r) || { node: u[0].measure.map[2], offset: 0 }, c = i.line < t.display.viewTo && wl(t, i);
          if (!c) {
            var g = u[u.length - 1].measure, m = g.maps ? g.maps[g.maps.length - 1] : g.map;
            c = { node: m[m.length - 1], offset: m[m.length - 2] - m[m.length - 3] };
          }
          if (!s || !c) {
            e.removeAllRanges();
            return;
          }
          var T = e.rangeCount && e.getRangeAt(0), F;
          try {
            F = $(s.node, s.offset, c.offset, c.node);
          } catch {
          }
          F && (!S && t.state.focused ? (e.collapse(s.node, s.offset), F.collapsed || (e.removeAllRanges(), e.addRange(F))) : (e.removeAllRanges(), e.addRange(F)), T && e.anchorNode == null ? e.addRange(T) : S && this.startGracePeriod()), this.rememberSelection();
        }
      }, je.prototype.startGracePeriod = function() {
        var e = this;
        clearTimeout(this.gracePeriod), this.gracePeriod = setTimeout(function() {
          e.gracePeriod = !1, e.selectionChanged() && e.cm.operation(function() {
            return e.cm.curOp.selectionChanged = !0;
          });
        }, 20);
      }, je.prototype.showMultipleSelections = function(e) {
        He(this.cm.display.cursorDiv, e.cursors), He(this.cm.display.selectionDiv, e.selection);
      }, je.prototype.rememberSelection = function() {
        var e = this.getSelection();
        this.lastAnchorNode = e.anchorNode, this.lastAnchorOffset = e.anchorOffset, this.lastFocusNode = e.focusNode, this.lastFocusOffset = e.focusOffset;
      }, je.prototype.selectionInEditor = function() {
        var e = this.getSelection();
        if (!e.rangeCount)
          return !1;
        var t = e.getRangeAt(0).commonAncestorContainer;
        return be(this.div, t);
      }, je.prototype.focus = function() {
        this.cm.options.readOnly != "nocursor" && ((!this.selectionInEditor() || _e(ze(this.div)) != this.div) && this.showSelection(this.prepareSelection(), !0), this.div.focus());
      }, je.prototype.blur = function() {
        this.div.blur();
      }, je.prototype.getField = function() {
        return this.div;
      }, je.prototype.supportsTouch = function() {
        return !0;
      }, je.prototype.receivedFocus = function() {
        var e = this, t = this;
        this.selectionInEditor() ? setTimeout(function() {
          return e.pollSelection();
        }, 20) : Ot(this.cm, function() {
          return t.cm.curOp.selectionChanged = !0;
        });
        function n() {
          t.cm.state.focused && (t.pollSelection(), t.polling.set(t.cm.options.pollInterval, n));
        }
        this.polling.set(this.cm.options.pollInterval, n);
      }, je.prototype.selectionChanged = function() {
        var e = this.getSelection();
        return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset;
      }, je.prototype.pollSelection = function() {
        if (!(this.readDOMTimeout != null || this.gracePeriod || !this.selectionChanged())) {
          var e = this.getSelection(), t = this.cm;
          if (X && K && this.cm.display.gutterSpecs.length && uf(e.anchorNode)) {
            this.cm.triggerOnKeyDown({ type: "keydown", keyCode: 8, preventDefault: Math.abs }), this.blur(), this.focus();
            return;
          }
          if (!this.composing) {
            this.rememberSelection();
            var n = ci(t, e.anchorNode, e.anchorOffset), r = ci(t, e.focusNode, e.focusOffset);
            n && r && Ot(t, function() {
              Ct(t.doc, sr(n, r), at), (n.bad || r.bad) && (t.curOp.selectionChanged = !0);
            });
          }
        }
      }, je.prototype.pollContent = function() {
        this.readDOMTimeout != null && (clearTimeout(this.readDOMTimeout), this.readDOMTimeout = null);
        var e = this.cm, t = e.display, n = e.doc.sel.primary(), r = n.from(), i = n.to();
        if (r.ch == 0 && r.line > e.firstLine() && (r = J(r.line - 1, we(e.doc, r.line - 1).length)), i.ch == we(e.doc, i.line).text.length && i.line < e.lastLine() && (i = J(i.line + 1, 0)), r.line < t.viewFrom || i.line > t.viewTo - 1)
          return !1;
        var a, o, u;
        r.line == t.viewFrom || (a = Cr(e, r.line)) == 0 ? (o = Ge(t.view[0].line), u = t.view[0].node) : (o = Ge(t.view[a].line), u = t.view[a - 1].node.nextSibling);
        var s = Cr(e, i.line), c, g;
        if (s == t.view.length - 1 ? (c = t.viewTo - 1, g = t.lineDiv.lastChild) : (c = Ge(t.view[s + 1].line) - 1, g = t.view[s + 1].node.previousSibling), !u)
          return !1;
        for (var m = e.doc.splitLines(sf(e, u, g, o, c)), T = mr(e.doc, J(o, 0), J(c, we(e.doc, c).text.length)); m.length > 1 && T.length > 1; )
          if (De(m) == De(T))
            m.pop(), T.pop(), c--;
          else if (m[0] == T[0])
            m.shift(), T.shift(), o++;
          else
            break;
        for (var F = 0, U = 0, Y = m[0], V = T[0], fe = Math.min(Y.length, V.length); F < fe && Y.charCodeAt(F) == V.charCodeAt(F); )
          ++F;
        for (var ge = De(m), ce = De(T), ve = Math.min(
          ge.length - (m.length == 1 ? F : 0),
          ce.length - (T.length == 1 ? F : 0)
        ); U < ve && ge.charCodeAt(ge.length - U - 1) == ce.charCodeAt(ce.length - U - 1); )
          ++U;
        if (m.length == 1 && T.length == 1 && o == r.line)
          for (; F && F > r.ch && ge.charCodeAt(ge.length - U - 1) == ce.charCodeAt(ce.length - U - 1); )
            F--, U++;
        m[m.length - 1] = ge.slice(0, ge.length - U).replace(/^\u200b+/, ""), m[0] = m[0].slice(F).replace(/\u200b+$/, "");
        var Fe = J(o, F), Se = J(c, T.length ? De(T).length - U : 0);
        if (m.length > 1 || m[0] || Ie(Fe, Se))
          return jr(e.doc, m, Fe, Se, "+input"), !0;
      }, je.prototype.ensurePolled = function() {
        this.forceCompositionEnd();
      }, je.prototype.reset = function() {
        this.forceCompositionEnd();
      }, je.prototype.forceCompositionEnd = function() {
        this.composing && (clearTimeout(this.readDOMTimeout), this.composing = null, this.updateFromDOM(), this.div.blur(), this.div.focus());
      }, je.prototype.readFromDOMSoon = function() {
        var e = this;
        this.readDOMTimeout == null && (this.readDOMTimeout = setTimeout(function() {
          if (e.readDOMTimeout = null, e.composing)
            if (e.composing.done)
              e.composing = null;
            else
              return;
          e.updateFromDOM();
        }, 80));
      }, je.prototype.updateFromDOM = function() {
        var e = this;
        (this.cm.isReadOnly() || !this.pollContent()) && Ot(this.cm, function() {
          return Et(e.cm);
        });
      }, je.prototype.setUneditable = function(e) {
        e.contentEditable = "false";
      }, je.prototype.onKeyPress = function(e) {
        e.charCode == 0 || this.composing || (e.preventDefault(), this.cm.isReadOnly() || pt(this.cm, ca)(this.cm, String.fromCharCode(e.charCode == null ? e.keyCode : e.charCode), 0));
      }, je.prototype.readOnlyChanged = function(e) {
        this.div.contentEditable = String(e != "nocursor");
      }, je.prototype.onContextMenu = function() {
      }, je.prototype.resetPosition = function() {
      }, je.prototype.needsContentAttribute = !0;
      function wl(e, t) {
        var n = Ii(e, t.line);
        if (!n || n.hidden)
          return null;
        var r = we(e.doc, t.line), i = $a(n, r, t.line), a = x(r, e.doc.direction), o = "left";
        if (a) {
          var u = I(a, t.ch);
          o = u % 2 ? "right" : "left";
        }
        var s = eo(i.map, t.ch, o);
        return s.offset = s.collapse == "right" ? s.end : s.start, s;
      }
      function uf(e) {
        for (var t = e; t; t = t.parentNode)
          if (/CodeMirror-gutter-wrapper/.test(t.className))
            return !0;
        return !1;
      }
      function Qr(e, t) {
        return t && (e.bad = !0), e;
      }
      function sf(e, t, n, r, i) {
        var a = "", o = !1, u = e.doc.lineSeparator(), s = !1;
        function c(F) {
          return function(U) {
            return U.id == F;
          };
        }
        function g() {
          o && (a += u, s && (a += u), o = s = !1);
        }
        function m(F) {
          F && (g(), a += F);
        }
        function T(F) {
          if (F.nodeType == 1) {
            var U = F.getAttribute("cm-text");
            if (U) {
              m(U);
              return;
            }
            var Y = F.getAttribute("cm-marker"), V;
            if (Y) {
              var fe = e.findMarks(J(r, 0), J(i + 1, 0), c(+Y));
              fe.length && (V = fe[0].find(0)) && m(mr(e.doc, V.from, V.to).join(u));
              return;
            }
            if (F.getAttribute("contenteditable") == "false")
              return;
            var ge = /^(pre|div|p|li|table|br)$/i.test(F.nodeName);
            if (!/^br$/i.test(F.nodeName) && F.textContent.length == 0)
              return;
            ge && g();
            for (var ce = 0; ce < F.childNodes.length; ce++)
              T(F.childNodes[ce]);
            /^(pre|p)$/i.test(F.nodeName) && (s = !0), ge && (o = !0);
          } else F.nodeType == 3 && m(F.nodeValue.replace(/\u200b/g, "").replace(/\u00a0/g, " "));
        }
        for (; T(t), t != n; )
          t = t.nextSibling, s = !1;
        return a;
      }
      function ci(e, t, n) {
        var r;
        if (t == e.display.lineDiv) {
          if (r = e.display.lineDiv.childNodes[n], !r)
            return Qr(e.clipPos(J(e.display.viewTo - 1)), !0);
          t = null, n = 0;
        } else
          for (r = t; ; r = r.parentNode) {
            if (!r || r == e.display.lineDiv)
              return null;
            if (r.parentNode && r.parentNode == e.display.lineDiv)
              break;
          }
        for (var i = 0; i < e.display.view.length; i++) {
          var a = e.display.view[i];
          if (a.node == r)
            return ff(a, t, n);
        }
      }
      function ff(e, t, n) {
        var r = e.text.firstChild, i = !1;
        if (!t || !be(r, t))
          return Qr(J(Ge(e.line), 0), !0);
        if (t == r && (i = !0, t = r.childNodes[n], n = 0, !t)) {
          var a = e.rest ? De(e.rest) : e.line;
          return Qr(J(Ge(a), a.text.length), i);
        }
        var o = t.nodeType == 3 ? t : null, u = t;
        for (!o && t.childNodes.length == 1 && t.firstChild.nodeType == 3 && (o = t.firstChild, n && (n = o.nodeValue.length)); u.parentNode != r; )
          u = u.parentNode;
        var s = e.measure, c = s.maps;
        function g(V, fe, ge) {
          for (var ce = -1; ce < (c ? c.length : 0); ce++)
            for (var ve = ce < 0 ? s.map : c[ce], Fe = 0; Fe < ve.length; Fe += 3) {
              var Se = ve[Fe + 2];
              if (Se == V || Se == fe) {
                var Re = Ge(ce < 0 ? e.line : e.rest[ce]), Qe = ve[Fe] + ge;
                return (ge < 0 || Se != V) && (Qe = ve[Fe + (ge ? 1 : 0)]), J(Re, Qe);
              }
            }
        }
        var m = g(o, u, n);
        if (m)
          return Qr(m, i);
        for (var T = u.nextSibling, F = o ? o.nodeValue.length - n : 0; T; T = T.nextSibling) {
          if (m = g(T, T.firstChild, 0), m)
            return Qr(J(m.line, m.ch - F), i);
          F += T.textContent.length;
        }
        for (var U = u.previousSibling, Y = n; U; U = U.previousSibling) {
          if (m = g(U, U.firstChild, -1), m)
            return Qr(J(m.line, m.ch + Y), i);
          Y += U.textContent.length;
        }
      }
      var ot = function(e) {
        this.cm = e, this.prevInput = "", this.pollingFast = !1, this.polling = new Ye(), this.hasSelection = !1, this.composing = null, this.resetting = !1;
      };
      ot.prototype.init = function(e) {
        var t = this, n = this, r = this.cm;
        this.createField(e);
        var i = this.textarea;
        e.wrapper.insertBefore(this.wrapper, e.wrapper.firstChild), z && (i.style.width = "0px"), E(i, "input", function() {
          B && _ >= 9 && t.hasSelection && (t.hasSelection = null), n.poll();
        }), E(i, "paste", function(o) {
          re(r, o) || yl(o, r) || (r.state.pasteIncoming = +/* @__PURE__ */ new Date(), n.fastPoll());
        });
        function a(o) {
          if (!re(r, o)) {
            if (r.somethingSelected())
              fi({ lineWise: !1, text: r.getSelections() });
            else if (r.options.lineWiseCopyCut) {
              var u = Dl(r);
              fi({ lineWise: !0, text: u.text }), o.type == "cut" ? r.setSelections(u.ranges, null, at) : (n.prevInput = "", i.value = u.text.join(`
`), b(i));
            } else
              return;
            o.type == "cut" && (r.state.cutIncoming = +/* @__PURE__ */ new Date());
          }
        }
        E(i, "cut", a), E(i, "copy", a), E(e.scroller, "paste", function(o) {
          if (!(tr(e, o) || re(r, o))) {
            if (!i.dispatchEvent) {
              r.state.pasteIncoming = +/* @__PURE__ */ new Date(), n.focus();
              return;
            }
            var u = new Event("paste");
            u.clipboardData = o.clipboardData, i.dispatchEvent(u);
          }
        }), E(e.lineSpace, "selectstart", function(o) {
          tr(e, o) || Ae(o);
        }), E(i, "compositionstart", function() {
          var o = r.getCursor("from");
          n.composing && n.composing.range.clear(), n.composing = {
            start: o,
            range: r.markText(o, r.getCursor("to"), { className: "CodeMirror-composing" })
          };
        }), E(i, "compositionend", function() {
          n.composing && (n.poll(), n.composing.range.clear(), n.composing = null);
        });
      }, ot.prototype.createField = function(e) {
        this.wrapper = bl(), this.textarea = this.wrapper.firstChild;
        var t = this.cm.options;
        ha(this.textarea, t.spellcheck, t.autocorrect, t.autocapitalize);
      }, ot.prototype.screenReaderLabelChanged = function(e) {
        e ? this.textarea.setAttribute("aria-label", e) : this.textarea.removeAttribute("aria-label");
      }, ot.prototype.prepareSelection = function() {
        var e = this.cm, t = e.display, n = e.doc, r = co(e);
        if (e.options.moveInputWithCursor) {
          var i = Gt(e, n.sel.primary().head, "div"), a = t.wrapper.getBoundingClientRect(), o = t.lineDiv.getBoundingClientRect();
          r.teTop = Math.max(0, Math.min(
            t.wrapper.clientHeight - 10,
            i.top + o.top - a.top
          )), r.teLeft = Math.max(0, Math.min(
            t.wrapper.clientWidth - 10,
            i.left + o.left - a.left
          ));
        }
        return r;
      }, ot.prototype.showSelection = function(e) {
        var t = this.cm, n = t.display;
        He(n.cursorDiv, e.cursors), He(n.selectionDiv, e.selection), e.teTop != null && (this.wrapper.style.top = e.teTop + "px", this.wrapper.style.left = e.teLeft + "px");
      }, ot.prototype.reset = function(e) {
        if (!(this.contextMenuPending || this.composing && e)) {
          var t = this.cm;
          if (this.resetting = !0, t.somethingSelected()) {
            this.prevInput = "";
            var n = t.getSelection();
            this.textarea.value = n, t.state.focused && b(this.textarea), B && _ >= 9 && (this.hasSelection = n);
          } else e || (this.prevInput = this.textarea.value = "", B && _ >= 9 && (this.hasSelection = null));
          this.resetting = !1;
        }
      }, ot.prototype.getField = function() {
        return this.textarea;
      }, ot.prototype.supportsTouch = function() {
        return !1;
      }, ot.prototype.focus = function() {
        if (this.cm.options.readOnly != "nocursor" && (!q || _e(ze(this.textarea)) != this.textarea))
          try {
            this.textarea.focus();
          } catch {
          }
      }, ot.prototype.blur = function() {
        this.textarea.blur();
      }, ot.prototype.resetPosition = function() {
        this.wrapper.style.top = this.wrapper.style.left = 0;
      }, ot.prototype.receivedFocus = function() {
        this.slowPoll();
      }, ot.prototype.slowPoll = function() {
        var e = this;
        this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
          e.poll(), e.cm.state.focused && e.slowPoll();
        });
      }, ot.prototype.fastPoll = function() {
        var e = !1, t = this;
        t.pollingFast = !0;
        function n() {
          var r = t.poll();
          !r && !e ? (e = !0, t.polling.set(60, n)) : (t.pollingFast = !1, t.slowPoll());
        }
        t.polling.set(20, n);
      }, ot.prototype.poll = function() {
        var e = this, t = this.cm, n = this.textarea, r = this.prevInput;
        if (this.contextMenuPending || this.resetting || !t.state.focused || mi(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq)
          return !1;
        var i = n.value;
        if (i == r && !t.somethingSelected())
          return !1;
        if (B && _ >= 9 && this.hasSelection === i || j && /[\uf700-\uf7ff]/.test(i))
          return t.display.input.reset(), !1;
        if (t.doc.sel == t.display.selForContextMenu) {
          var a = i.charCodeAt(0);
          if (a == 8203 && !r && (r = "​"), a == 8666)
            return this.reset(), this.cm.execCommand("undo");
        }
        for (var o = 0, u = Math.min(r.length, i.length); o < u && r.charCodeAt(o) == i.charCodeAt(o); )
          ++o;
        return Ot(t, function() {
          ca(
            t,
            i.slice(o),
            r.length - o,
            null,
            e.composing ? "*compose" : null
          ), i.length > 1e3 || i.indexOf(`
`) > -1 ? n.value = e.prevInput = "" : e.prevInput = i, e.composing && (e.composing.range.clear(), e.composing.range = t.markText(
            e.composing.start,
            t.getCursor("to"),
            { className: "CodeMirror-composing" }
          ));
        }), !0;
      }, ot.prototype.ensurePolled = function() {
        this.pollingFast && this.poll() && (this.pollingFast = !1);
      }, ot.prototype.onKeyPress = function() {
        B && _ >= 9 && (this.hasSelection = null), this.fastPoll();
      }, ot.prototype.onContextMenu = function(e) {
        var t = this, n = t.cm, r = n.display, i = t.textarea;
        t.contextMenuPending && t.contextMenuPending();
        var a = br(n, e), o = r.scroller.scrollTop;
        if (!a || ne)
          return;
        var u = n.options.resetSelectionOnContextMenu;
        u && n.doc.sel.contains(a) == -1 && pt(n, Ct)(n.doc, sr(a), at);
        var s = i.style.cssText, c = t.wrapper.style.cssText, g = t.wrapper.offsetParent.getBoundingClientRect();
        t.wrapper.style.cssText = "position: static", i.style.cssText = `position: absolute; width: 30px; height: 30px;
      top: ` + (e.clientY - g.top - 5) + "px; left: " + (e.clientX - g.left - 5) + `px;
      z-index: 1000; background: ` + (B ? "rgba(255, 255, 255, .05)" : "transparent") + `;
      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);`;
        var m;
        ee && (m = i.ownerDocument.defaultView.scrollY), r.input.focus(), ee && i.ownerDocument.defaultView.scrollTo(null, m), r.input.reset(), n.somethingSelected() || (i.value = t.prevInput = " "), t.contextMenuPending = F, r.selForContextMenu = n.doc.sel, clearTimeout(r.detectingSelectAll);
        function T() {
          if (i.selectionStart != null) {
            var Y = n.somethingSelected(), V = "​" + (Y ? i.value : "");
            i.value = "⇚", i.value = V, t.prevInput = Y ? "" : "​", i.selectionStart = 1, i.selectionEnd = V.length, r.selForContextMenu = n.doc.sel;
          }
        }
        function F() {
          if (t.contextMenuPending == F && (t.contextMenuPending = !1, t.wrapper.style.cssText = c, i.style.cssText = s, B && _ < 9 && r.scrollbars.setScrollTop(r.scroller.scrollTop = o), i.selectionStart != null)) {
            (!B || B && _ < 9) && T();
            var Y = 0, V = function() {
              r.selForContextMenu == n.doc.sel && i.selectionStart == 0 && i.selectionEnd > 0 && t.prevInput == "​" ? pt(n, qo)(n) : Y++ < 10 ? r.detectingSelectAll = setTimeout(V, 500) : (r.selForContextMenu = null, r.input.reset());
            };
            r.detectingSelectAll = setTimeout(V, 200);
          }
        }
        if (B && _ >= 9 && T(), Ue) {
          ut(e);
          var U = function() {
            me(window, "mouseup", U), setTimeout(F, 20);
          };
          E(window, "mouseup", U);
        } else
          setTimeout(F, 50);
      }, ot.prototype.readOnlyChanged = function(e) {
        e || this.reset(), this.textarea.disabled = e == "nocursor", this.textarea.readOnly = !!e;
      }, ot.prototype.setUneditable = function() {
      }, ot.prototype.needsContentAttribute = !1;
      function cf(e, t) {
        if (t = t ? Je(t) : {}, t.value = e.value, !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex), !t.placeholder && e.placeholder && (t.placeholder = e.placeholder), t.autofocus == null) {
          var n = _e(ze(e));
          t.autofocus = n == e || e.getAttribute("autofocus") != null && n == document.body;
        }
        function r() {
          e.value = u.getValue();
        }
        var i;
        if (e.form && (E(e.form, "submit", r), !t.leaveSubmitMethodAlone)) {
          var a = e.form;
          i = a.submit;
          try {
            var o = a.submit = function() {
              r(), a.submit = i, a.submit(), a.submit = o;
            };
          } catch {
          }
        }
        t.finishInit = function(s) {
          s.save = r, s.getTextArea = function() {
            return e;
          }, s.toTextArea = function() {
            s.toTextArea = isNaN, r(), e.parentNode.removeChild(s.getWrapperElement()), e.style.display = "", e.form && (me(e.form, "submit", r), !t.leaveSubmitMethodAlone && typeof e.form.submit == "function" && (e.form.submit = i));
          };
        }, e.style.display = "none";
        var u = et(
          function(s) {
            return e.parentNode.insertBefore(s, e.nextSibling);
          },
          t
        );
        return u;
      }
      function hf(e) {
        e.off = me, e.on = E, e.wheelEventPixels = ys, e.Doc = Lt, e.splitLines = nn, e.countColumn = Ke, e.findColumn = At, e.isWordChar = A, e.Pass = Ve, e.signal = ye, e.Line = Or, e.changeEnd = fr, e.scrollbarModel = yo, e.Pos = J, e.cmpPos = Ie, e.modes = Rt, e.mimeModes = It, e.resolveMode = Br, e.getMode = Mr, e.modeExtensions = Ir, e.extendMode = du, e.copyState = vr, e.startState = wa, e.innerMode = yi, e.commands = En, e.keyMap = nr, e.keyName = il, e.isModifierKey = rl, e.lookupKey = Xr, e.normalizeKeyMap = _s, e.StringStream = st, e.SharedTextMarker = Sn, e.TextMarker = hr, e.LineWidget = kn, e.e_preventDefault = Ae, e.e_stopPropagation = Xe, e.e_stop = ut, e.addClass = rt, e.contains = be, e.rmClass = Le, e.keyNames = dr;
      }
      rf(et), lf(et);
      var df = "iter insert remove copy getEditor constructor".split(" ");
      for (var hi in Lt.prototype)
        Lt.prototype.hasOwnProperty(hi) && Pe(df, hi) < 0 && (et.prototype[hi] = /* @__PURE__ */ (function(e) {
          return function() {
            return e.apply(this.doc, arguments);
          };
        })(Lt.prototype[hi]));
      return Ne(Lt), et.inputStyles = { textarea: ot, contenteditable: je }, et.defineMode = function(e) {
        !et.defaults.mode && e != "null" && (et.defaults.mode = e), gr.apply(this, arguments);
      }, et.defineMIME = On, et.defineMode("null", function() {
        return { token: function(e) {
          return e.skipToEnd();
        } };
      }), et.defineMIME("text/plain", "null"), et.defineExtension = function(e, t) {
        et.prototype[e] = t;
      }, et.defineDocExtension = function(e, t) {
        Lt.prototype[e] = t;
      }, et.fromTextArea = cf, hf(et), et.version = "5.65.20", et;
    }));
  })(di)), di.exports;
}
var Al = { exports: {} }, El;
function Hf() {
  return El || (El = 1, (function(ae, le) {
    (function(D) {
      D(zt());
    })(function(D) {
      var P = /^(\s*)(>[> ]*|[*+-] \[[x ]\]\s|[*+-]\s|(\d+)([.)]))(\s*)/, S = /^(\s*)(>[> ]*|[*+-] \[[x ]\]|[*+-]|(\d+)[.)])(\s*)$/, N = /[*+-]\s/;
      D.commands.newlineAndIndentContinueMarkdownList = function(W) {
        if (W.getOption("disableInput")) return D.Pass;
        for (var B = W.listSelections(), _ = [], ee = 0; ee < B.length; ee++) {
          var Q = B[ee].head, K = W.getStateAfter(Q.line), ue = D.innerMode(W.getMode(), K);
          if (ue.mode.name !== "markdown" && ue.mode.helperType !== "markdown") {
            W.execCommand("newlineAndIndent");
            return;
          } else
            K = ue.state;
          var ne = K.list !== !1, Ce = K.quote !== 0, pe = W.getLine(Q.line), oe = P.exec(pe), z = /^\s*$/.test(pe.slice(0, Q.ch));
          if (!B[ee].empty() || !ne && !Ce || !oe || z) {
            W.execCommand("newlineAndIndent");
            return;
          }
          if (S.test(pe)) {
            var X = Ce && />\s*$/.test(pe), q = !/>\s*$/.test(pe);
            (X || q) && W.replaceRange("", {
              line: Q.line,
              ch: 0
            }, {
              line: Q.line,
              ch: Q.ch + 1
            }), _[ee] = `
`;
          } else {
            var j = oe[1], he = oe[5], Z = !(N.test(oe[2]) || oe[2].indexOf(">") >= 0), de = Z ? parseInt(oe[3], 10) + 1 + oe[4] : oe[2].replace("x", " ");
            _[ee] = `
` + j + de + he, Z && O(W, Q);
          }
        }
        W.replaceSelections(_);
      };
      function O(W, B) {
        var _ = B.line, ee = 0, Q = 0, K = P.exec(W.getLine(_)), ue = K[1];
        do {
          ee += 1;
          var ne = _ + ee, Ce = W.getLine(ne), pe = P.exec(Ce);
          if (pe) {
            var oe = pe[1], z = parseInt(K[3], 10) + ee - Q, X = parseInt(pe[3], 10), q = X;
            if (ue === oe && !isNaN(X))
              z === X && (q = X + 1), z > X && (q = z + 1), W.replaceRange(
                Ce.replace(P, oe + q + pe[4] + pe[5]),
                {
                  line: ne,
                  ch: 0
                },
                {
                  line: ne,
                  ch: Ce.length
                }
              );
            else {
              if (ue.length > oe.length || ue.length < oe.length && ee === 1) return;
              Q += 1;
            }
          }
        } while (pe);
      }
    });
  })()), Al.exports;
}
var Ll = {}, Tl;
function Rf() {
  if (Tl) return Ll;
  Tl = 1;
  var ae = zt();
  return ae.commands.tabAndIndentMarkdownList = function(le) {
    var D = le.listSelections(), P = D[0].head, S = le.getStateAfter(P.line), N = S.list !== !1;
    if (N) {
      le.execCommand("indentMore");
      return;
    }
    if (le.options.indentWithTabs)
      le.execCommand("insertTab");
    else {
      var O = Array(le.options.tabSize + 1).join(" ");
      le.replaceSelection(O);
    }
  }, ae.commands.shiftTabAndUnindentMarkdownList = function(le) {
    var D = le.listSelections(), P = D[0].head, S = le.getStateAfter(P.line), N = S.list !== !1;
    if (N) {
      le.execCommand("indentLess");
      return;
    }
    if (le.options.indentWithTabs)
      le.execCommand("insertTab");
    else {
      var O = Array(le.options.tabSize + 1).join(" ");
      le.replaceSelection(O);
    }
  }, Ll;
}
var Bl = { exports: {} }, Ml;
function Pf() {
  return Ml || (Ml = 1, (function(ae, le) {
    (function(D) {
      D(zt());
    })(function(D) {
      D.defineOption("fullScreen", !1, function(N, O, W) {
        W == D.Init && (W = !1), !W != !O && (O ? P(N) : S(N));
      });
      function P(N) {
        var O = N.getWrapperElement();
        N.state.fullScreenRestore = {
          scrollTop: window.pageYOffset,
          scrollLeft: window.pageXOffset,
          width: O.style.width,
          height: O.style.height
        }, O.style.width = "", O.style.height = "auto", O.className += " CodeMirror-fullscreen", document.documentElement.style.overflow = "hidden", N.refresh();
      }
      function S(N) {
        var O = N.getWrapperElement();
        O.className = O.className.replace(/\s*CodeMirror-fullscreen\b/, ""), document.documentElement.style.overflow = "";
        var W = N.state.fullScreenRestore;
        O.style.width = W.width, O.style.height = W.height, window.scrollTo(W.scrollLeft, W.scrollTop), N.refresh();
      }
    });
  })()), Bl.exports;
}
var Il = { exports: {} }, Ol = { exports: {} }, Nl;
function uu() {
  return Nl || (Nl = 1, (function(ae, le) {
    (function(D) {
      D(zt());
    })(function(D) {
      var P = {
        autoSelfClosers: {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          command: !0,
          embed: !0,
          frame: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
          menuitem: !0
        },
        implicitlyClosed: {
          dd: !0,
          li: !0,
          optgroup: !0,
          option: !0,
          p: !0,
          rp: !0,
          rt: !0,
          tbody: !0,
          td: !0,
          tfoot: !0,
          th: !0,
          tr: !0
        },
        contextGrabbers: {
          dd: { dd: !0, dt: !0 },
          dt: { dd: !0, dt: !0 },
          li: { li: !0 },
          option: { option: !0, optgroup: !0 },
          optgroup: { optgroup: !0 },
          p: {
            address: !0,
            article: !0,
            aside: !0,
            blockquote: !0,
            dir: !0,
            div: !0,
            dl: !0,
            fieldset: !0,
            footer: !0,
            form: !0,
            h1: !0,
            h2: !0,
            h3: !0,
            h4: !0,
            h5: !0,
            h6: !0,
            header: !0,
            hgroup: !0,
            hr: !0,
            menu: !0,
            nav: !0,
            ol: !0,
            p: !0,
            pre: !0,
            section: !0,
            table: !0,
            ul: !0
          },
          rp: { rp: !0, rt: !0 },
          rt: { rp: !0, rt: !0 },
          tbody: { tbody: !0, tfoot: !0 },
          td: { td: !0, th: !0 },
          tfoot: { tbody: !0 },
          th: { td: !0, th: !0 },
          thead: { tbody: !0, tfoot: !0 },
          tr: { tr: !0 }
        },
        doNotIndent: { pre: !0 },
        allowUnquoted: !0,
        allowMissing: !0,
        caseFold: !0
      }, S = {
        autoSelfClosers: {},
        implicitlyClosed: {},
        contextGrabbers: {},
        doNotIndent: {},
        allowUnquoted: !1,
        allowMissing: !1,
        allowMissingTagName: !1,
        caseFold: !1
      };
      D.defineMode("xml", function(N, O) {
        var W = N.indentUnit, B = {}, _ = O.htmlMode ? P : S;
        for (var ee in _) B[ee] = _[ee];
        for (var ee in O) B[ee] = O[ee];
        var Q, K;
        function ue(L, te) {
          function $(rt) {
            return te.tokenize = rt, rt(L, te);
          }
          var be = L.next();
          if (be == "<")
            return L.eat("!") ? L.eat("[") ? L.match("CDATA[") ? $(pe("atom", "]]>")) : null : L.match("--") ? $(pe("comment", "-->")) : L.match("DOCTYPE", !0, !0) ? (L.eatWhile(/[\w\._\-]/), $(oe(1))) : null : L.eat("?") ? (L.eatWhile(/[\w\._\-]/), te.tokenize = pe("meta", "?>"), "meta") : (Q = L.eat("/") ? "closeTag" : "openTag", te.tokenize = ne, "tag bracket");
          if (be == "&") {
            var _e;
            return L.eat("#") ? L.eat("x") ? _e = L.eatWhile(/[a-fA-F\d]/) && L.eat(";") : _e = L.eatWhile(/[\d]/) && L.eat(";") : _e = L.eatWhile(/[\w\.\-:]/) && L.eat(";"), _e ? "atom" : "error";
          } else
            return L.eatWhile(/[^&<]/), null;
        }
        ue.isInText = !0;
        function ne(L, te) {
          var $ = L.next();
          if ($ == ">" || $ == "/" && L.eat(">"))
            return te.tokenize = ue, Q = $ == ">" ? "endTag" : "selfcloseTag", "tag bracket";
          if ($ == "=")
            return Q = "equals", null;
          if ($ == "<") {
            te.tokenize = ue, te.state = he, te.tagName = te.tagStart = null;
            var be = te.tokenize(L, te);
            return be ? be + " tag error" : "tag error";
          } else return /[\'\"]/.test($) ? (te.tokenize = Ce($), te.stringStartCol = L.column(), te.tokenize(L, te)) : (L.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/), "word");
        }
        function Ce(L) {
          var te = function($, be) {
            for (; !$.eol(); )
              if ($.next() == L) {
                be.tokenize = ne;
                break;
              }
            return "string";
          };
          return te.isInAttribute = !0, te;
        }
        function pe(L, te) {
          return function($, be) {
            for (; !$.eol(); ) {
              if ($.match(te)) {
                be.tokenize = ue;
                break;
              }
              $.next();
            }
            return L;
          };
        }
        function oe(L) {
          return function(te, $) {
            for (var be; (be = te.next()) != null; ) {
              if (be == "<")
                return $.tokenize = oe(L + 1), $.tokenize(te, $);
              if (be == ">")
                if (L == 1) {
                  $.tokenize = ue;
                  break;
                } else
                  return $.tokenize = oe(L - 1), $.tokenize(te, $);
            }
            return "meta";
          };
        }
        function z(L) {
          return L && L.toLowerCase();
        }
        function X(L, te, $) {
          this.prev = L.context, this.tagName = te || "", this.indent = L.indented, this.startOfLine = $, (B.doNotIndent.hasOwnProperty(te) || L.context && L.context.noIndent) && (this.noIndent = !0);
        }
        function q(L) {
          L.context && (L.context = L.context.prev);
        }
        function j(L, te) {
          for (var $; ; ) {
            if (!L.context || ($ = L.context.tagName, !B.contextGrabbers.hasOwnProperty(z($)) || !B.contextGrabbers[z($)].hasOwnProperty(z(te))))
              return;
            q(L);
          }
        }
        function he(L, te, $) {
          return L == "openTag" ? ($.tagStart = te.column(), Z) : L == "closeTag" ? de : he;
        }
        function Z(L, te, $) {
          return L == "word" ? ($.tagName = te.current(), K = "tag", se) : B.allowMissingTagName && L == "endTag" ? (K = "tag bracket", se(L, te, $)) : (K = "error", Z);
        }
        function de(L, te, $) {
          if (L == "word") {
            var be = te.current();
            return $.context && $.context.tagName != be && B.implicitlyClosed.hasOwnProperty(z($.context.tagName)) && q($), $.context && $.context.tagName == be || B.matchClosing === !1 ? (K = "tag", xe) : (K = "tag error", Ue);
          } else return B.allowMissingTagName && L == "endTag" ? (K = "tag bracket", xe(L, te, $)) : (K = "error", Ue);
        }
        function xe(L, te, $) {
          return L != "endTag" ? (K = "error", xe) : (q($), he);
        }
        function Ue(L, te, $) {
          return K = "error", xe(L, te, $);
        }
        function se(L, te, $) {
          if (L == "word")
            return K = "attribute", Le;
          if (L == "endTag" || L == "selfcloseTag") {
            var be = $.tagName, _e = $.tagStart;
            return $.tagName = $.tagStart = null, L == "selfcloseTag" || B.autoSelfClosers.hasOwnProperty(z(be)) ? j($, be) : (j($, be), $.context = new X($, be, _e == $.indented)), he;
          }
          return K = "error", se;
        }
        function Le(L, te, $) {
          return L == "equals" ? Ee : (B.allowMissing || (K = "error"), se(L, te, $));
        }
        function Ee(L, te, $) {
          return L == "string" ? He : L == "word" && B.allowUnquoted ? (K = "string", se) : (K = "error", se(L, te, $));
        }
        function He(L, te, $) {
          return L == "string" ? He : se(L, te, $);
        }
        return {
          startState: function(L) {
            var te = {
              tokenize: ue,
              state: he,
              indented: L || 0,
              tagName: null,
              tagStart: null,
              context: null
            };
            return L != null && (te.baseIndent = L), te;
          },
          token: function(L, te) {
            if (!te.tagName && L.sol() && (te.indented = L.indentation()), L.eatSpace()) return null;
            Q = null;
            var $ = te.tokenize(L, te);
            return ($ || Q) && $ != "comment" && (K = null, te.state = te.state(Q || $, L, te), K && ($ = K == "error" ? $ + " error" : K)), $;
          },
          indent: function(L, te, $) {
            var be = L.context;
            if (L.tokenize.isInAttribute)
              return L.tagStart == L.indented ? L.stringStartCol + 1 : L.indented + W;
            if (be && be.noIndent) return D.Pass;
            if (L.tokenize != ne && L.tokenize != ue)
              return $ ? $.match(/^(\s*)/)[0].length : 0;
            if (L.tagName)
              return B.multilineTagIndentPastTag !== !1 ? L.tagStart + L.tagName.length + 2 : L.tagStart + W * (B.multilineTagIndentFactor || 1);
            if (B.alignCDATA && /<!\[CDATA\[/.test(te)) return 0;
            var _e = te && /^<(\/)?([\w_:\.-]*)/.exec(te);
            if (_e && _e[1])
              for (; be; )
                if (be.tagName == _e[2]) {
                  be = be.prev;
                  break;
                } else if (B.implicitlyClosed.hasOwnProperty(z(be.tagName)))
                  be = be.prev;
                else
                  break;
            else if (_e)
              for (; be; ) {
                var rt = B.contextGrabbers[z(be.tagName)];
                if (rt && rt.hasOwnProperty(z(_e[2])))
                  be = be.prev;
                else
                  break;
              }
            for (; be && be.prev && !be.startOfLine; )
              be = be.prev;
            return be ? be.indent + W : L.baseIndent || 0;
          },
          electricInput: /<\/[\s\w:]+>$/,
          blockCommentStart: "<!--",
          blockCommentEnd: "-->",
          configuration: B.htmlMode ? "html" : "xml",
          helperType: B.htmlMode ? "html" : "xml",
          skipAttribute: function(L) {
            L.state == Ee && (L.state = se);
          },
          xmlCurrentTag: function(L) {
            return L.tagName ? { name: L.tagName, close: L.type == "closeTag" } : null;
          },
          xmlCurrentContext: function(L) {
            for (var te = [], $ = L.context; $; $ = $.prev)
              te.push($.tagName);
            return te.reverse();
          }
        };
      }), D.defineMIME("text/xml", "xml"), D.defineMIME("application/xml", "xml"), D.mimeModes.hasOwnProperty("text/html") || D.defineMIME("text/html", { name: "xml", htmlMode: !0 });
    });
  })()), Ol.exports;
}
var Hl = { exports: {} }, Rl;
function zf() {
  return Rl || (Rl = 1, (function(ae, le) {
    (function(D) {
      D(zt());
    })(function(D) {
      D.modeInfo = [
        { name: "APL", mime: "text/apl", mode: "apl", ext: ["dyalog", "apl"] },
        { name: "PGP", mimes: ["application/pgp", "application/pgp-encrypted", "application/pgp-keys", "application/pgp-signature"], mode: "asciiarmor", ext: ["asc", "pgp", "sig"] },
        { name: "ASN.1", mime: "text/x-ttcn-asn", mode: "asn.1", ext: ["asn", "asn1"] },
        { name: "Asterisk", mime: "text/x-asterisk", mode: "asterisk", file: /^extensions\.conf$/i },
        { name: "Brainfuck", mime: "text/x-brainfuck", mode: "brainfuck", ext: ["b", "bf"] },
        { name: "C", mime: "text/x-csrc", mode: "clike", ext: ["c", "h", "ino"] },
        { name: "C++", mime: "text/x-c++src", mode: "clike", ext: ["cpp", "c++", "cc", "cxx", "hpp", "h++", "hh", "hxx"], alias: ["cpp"] },
        { name: "Cobol", mime: "text/x-cobol", mode: "cobol", ext: ["cob", "cpy", "cbl"] },
        { name: "C#", mime: "text/x-csharp", mode: "clike", ext: ["cs"], alias: ["csharp", "cs"] },
        { name: "Clojure", mime: "text/x-clojure", mode: "clojure", ext: ["clj", "cljc", "cljx"] },
        { name: "ClojureScript", mime: "text/x-clojurescript", mode: "clojure", ext: ["cljs"] },
        { name: "Closure Stylesheets (GSS)", mime: "text/x-gss", mode: "css", ext: ["gss"] },
        { name: "CMake", mime: "text/x-cmake", mode: "cmake", ext: ["cmake", "cmake.in"], file: /^CMakeLists\.txt$/ },
        { name: "CoffeeScript", mimes: ["application/vnd.coffeescript", "text/coffeescript", "text/x-coffeescript"], mode: "coffeescript", ext: ["coffee"], alias: ["coffee", "coffee-script"] },
        { name: "Common Lisp", mime: "text/x-common-lisp", mode: "commonlisp", ext: ["cl", "lisp", "el"], alias: ["lisp"] },
        { name: "Cypher", mime: "application/x-cypher-query", mode: "cypher", ext: ["cyp", "cypher"] },
        { name: "Cython", mime: "text/x-cython", mode: "python", ext: ["pyx", "pxd", "pxi"] },
        { name: "Crystal", mime: "text/x-crystal", mode: "crystal", ext: ["cr"] },
        { name: "CSS", mime: "text/css", mode: "css", ext: ["css"] },
        { name: "CQL", mime: "text/x-cassandra", mode: "sql", ext: ["cql"] },
        { name: "D", mime: "text/x-d", mode: "d", ext: ["d"] },
        { name: "Dart", mimes: ["application/dart", "text/x-dart"], mode: "dart", ext: ["dart"] },
        { name: "diff", mime: "text/x-diff", mode: "diff", ext: ["diff", "patch"] },
        { name: "Django", mime: "text/x-django", mode: "django" },
        { name: "Dockerfile", mime: "text/x-dockerfile", mode: "dockerfile", file: /^Dockerfile$/ },
        { name: "DTD", mime: "application/xml-dtd", mode: "dtd", ext: ["dtd"] },
        { name: "Dylan", mime: "text/x-dylan", mode: "dylan", ext: ["dylan", "dyl", "intr"] },
        { name: "EBNF", mime: "text/x-ebnf", mode: "ebnf" },
        { name: "ECL", mime: "text/x-ecl", mode: "ecl", ext: ["ecl"] },
        { name: "edn", mime: "application/edn", mode: "clojure", ext: ["edn"] },
        { name: "Eiffel", mime: "text/x-eiffel", mode: "eiffel", ext: ["e"] },
        { name: "Elm", mime: "text/x-elm", mode: "elm", ext: ["elm"] },
        { name: "Embedded JavaScript", mime: "application/x-ejs", mode: "htmlembedded", ext: ["ejs"] },
        { name: "Embedded Ruby", mime: "application/x-erb", mode: "htmlembedded", ext: ["erb"] },
        { name: "Erlang", mime: "text/x-erlang", mode: "erlang", ext: ["erl"] },
        { name: "Esper", mime: "text/x-esper", mode: "sql" },
        { name: "Factor", mime: "text/x-factor", mode: "factor", ext: ["factor"] },
        { name: "FCL", mime: "text/x-fcl", mode: "fcl" },
        { name: "Forth", mime: "text/x-forth", mode: "forth", ext: ["forth", "fth", "4th"] },
        { name: "Fortran", mime: "text/x-fortran", mode: "fortran", ext: ["f", "for", "f77", "f90", "f95"] },
        { name: "F#", mime: "text/x-fsharp", mode: "mllike", ext: ["fs"], alias: ["fsharp"] },
        { name: "Gas", mime: "text/x-gas", mode: "gas", ext: ["s"] },
        { name: "Gherkin", mime: "text/x-feature", mode: "gherkin", ext: ["feature"] },
        { name: "GitHub Flavored Markdown", mime: "text/x-gfm", mode: "gfm", file: /^(readme|contributing|history)\.md$/i },
        { name: "Go", mime: "text/x-go", mode: "go", ext: ["go"] },
        { name: "Groovy", mime: "text/x-groovy", mode: "groovy", ext: ["groovy", "gradle"], file: /^Jenkinsfile$/ },
        { name: "HAML", mime: "text/x-haml", mode: "haml", ext: ["haml"] },
        { name: "Haskell", mime: "text/x-haskell", mode: "haskell", ext: ["hs"] },
        { name: "Haskell (Literate)", mime: "text/x-literate-haskell", mode: "haskell-literate", ext: ["lhs"] },
        { name: "Haxe", mime: "text/x-haxe", mode: "haxe", ext: ["hx"] },
        { name: "HXML", mime: "text/x-hxml", mode: "haxe", ext: ["hxml"] },
        { name: "ASP.NET", mime: "application/x-aspx", mode: "htmlembedded", ext: ["aspx"], alias: ["asp", "aspx"] },
        { name: "HTML", mime: "text/html", mode: "htmlmixed", ext: ["html", "htm", "handlebars", "hbs"], alias: ["xhtml"] },
        { name: "HTTP", mime: "message/http", mode: "http" },
        { name: "IDL", mime: "text/x-idl", mode: "idl", ext: ["pro"] },
        { name: "Pug", mime: "text/x-pug", mode: "pug", ext: ["jade", "pug"], alias: ["jade"] },
        { name: "Java", mime: "text/x-java", mode: "clike", ext: ["java"] },
        { name: "Java Server Pages", mime: "application/x-jsp", mode: "htmlembedded", ext: ["jsp"], alias: ["jsp"] },
        {
          name: "JavaScript",
          mimes: ["text/javascript", "text/ecmascript", "application/javascript", "application/x-javascript", "application/ecmascript"],
          mode: "javascript",
          ext: ["js"],
          alias: ["ecmascript", "js", "node"]
        },
        { name: "JSON", mimes: ["application/json", "application/x-json"], mode: "javascript", ext: ["json", "map"], alias: ["json5"] },
        { name: "JSON-LD", mime: "application/ld+json", mode: "javascript", ext: ["jsonld"], alias: ["jsonld"] },
        { name: "JSX", mime: "text/jsx", mode: "jsx", ext: ["jsx"] },
        { name: "Jinja2", mime: "text/jinja2", mode: "jinja2", ext: ["j2", "jinja", "jinja2"] },
        { name: "Julia", mime: "text/x-julia", mode: "julia", ext: ["jl"], alias: ["jl"] },
        { name: "Kotlin", mime: "text/x-kotlin", mode: "clike", ext: ["kt"] },
        { name: "LESS", mime: "text/x-less", mode: "css", ext: ["less"] },
        { name: "LiveScript", mime: "text/x-livescript", mode: "livescript", ext: ["ls"], alias: ["ls"] },
        { name: "Lua", mime: "text/x-lua", mode: "lua", ext: ["lua"] },
        { name: "Markdown", mime: "text/x-markdown", mode: "markdown", ext: ["markdown", "md", "mkd"] },
        { name: "mIRC", mime: "text/mirc", mode: "mirc" },
        { name: "MariaDB SQL", mime: "text/x-mariadb", mode: "sql" },
        { name: "Mathematica", mime: "text/x-mathematica", mode: "mathematica", ext: ["m", "nb", "wl", "wls"] },
        { name: "Modelica", mime: "text/x-modelica", mode: "modelica", ext: ["mo"] },
        { name: "MUMPS", mime: "text/x-mumps", mode: "mumps", ext: ["mps"] },
        { name: "MS SQL", mime: "text/x-mssql", mode: "sql" },
        { name: "mbox", mime: "application/mbox", mode: "mbox", ext: ["mbox"] },
        { name: "MySQL", mime: "text/x-mysql", mode: "sql" },
        { name: "Nginx", mime: "text/x-nginx-conf", mode: "nginx", file: /nginx.*\.conf$/i },
        { name: "NSIS", mime: "text/x-nsis", mode: "nsis", ext: ["nsh", "nsi"] },
        {
          name: "NTriples",
          mimes: ["application/n-triples", "application/n-quads", "text/n-triples"],
          mode: "ntriples",
          ext: ["nt", "nq"]
        },
        { name: "Objective-C", mime: "text/x-objectivec", mode: "clike", ext: ["m"], alias: ["objective-c", "objc"] },
        { name: "Objective-C++", mime: "text/x-objectivec++", mode: "clike", ext: ["mm"], alias: ["objective-c++", "objc++"] },
        { name: "OCaml", mime: "text/x-ocaml", mode: "mllike", ext: ["ml", "mli", "mll", "mly"] },
        { name: "Octave", mime: "text/x-octave", mode: "octave", ext: ["m"] },
        { name: "Oz", mime: "text/x-oz", mode: "oz", ext: ["oz"] },
        { name: "Pascal", mime: "text/x-pascal", mode: "pascal", ext: ["p", "pas"] },
        { name: "PEG.js", mime: "null", mode: "pegjs", ext: ["jsonld"] },
        { name: "Perl", mime: "text/x-perl", mode: "perl", ext: ["pl", "pm"] },
        { name: "PHP", mimes: ["text/x-php", "application/x-httpd-php", "application/x-httpd-php-open"], mode: "php", ext: ["php", "php3", "php4", "php5", "php7", "phtml"] },
        { name: "Pig", mime: "text/x-pig", mode: "pig", ext: ["pig"] },
        { name: "Plain Text", mime: "text/plain", mode: "null", ext: ["txt", "text", "conf", "def", "list", "log"] },
        { name: "PLSQL", mime: "text/x-plsql", mode: "sql", ext: ["pls"] },
        { name: "PostgreSQL", mime: "text/x-pgsql", mode: "sql" },
        { name: "PowerShell", mime: "application/x-powershell", mode: "powershell", ext: ["ps1", "psd1", "psm1"] },
        { name: "Properties files", mime: "text/x-properties", mode: "properties", ext: ["properties", "ini", "in"], alias: ["ini", "properties"] },
        { name: "ProtoBuf", mime: "text/x-protobuf", mode: "protobuf", ext: ["proto"] },
        { name: "Python", mime: "text/x-python", mode: "python", ext: ["BUILD", "bzl", "py", "pyw"], file: /^(BUCK|BUILD)$/ },
        { name: "Puppet", mime: "text/x-puppet", mode: "puppet", ext: ["pp"] },
        { name: "Q", mime: "text/x-q", mode: "q", ext: ["q"] },
        { name: "R", mime: "text/x-rsrc", mode: "r", ext: ["r", "R"], alias: ["rscript"] },
        { name: "reStructuredText", mime: "text/x-rst", mode: "rst", ext: ["rst"], alias: ["rst"] },
        { name: "RPM Changes", mime: "text/x-rpm-changes", mode: "rpm" },
        { name: "RPM Spec", mime: "text/x-rpm-spec", mode: "rpm", ext: ["spec"] },
        { name: "Ruby", mime: "text/x-ruby", mode: "ruby", ext: ["rb"], alias: ["jruby", "macruby", "rake", "rb", "rbx"] },
        { name: "Rust", mime: "text/x-rustsrc", mode: "rust", ext: ["rs"] },
        { name: "SAS", mime: "text/x-sas", mode: "sas", ext: ["sas"] },
        { name: "Sass", mime: "text/x-sass", mode: "sass", ext: ["sass"] },
        { name: "Scala", mime: "text/x-scala", mode: "clike", ext: ["scala"] },
        { name: "Scheme", mime: "text/x-scheme", mode: "scheme", ext: ["scm", "ss"] },
        { name: "SCSS", mime: "text/x-scss", mode: "css", ext: ["scss"] },
        { name: "Shell", mimes: ["text/x-sh", "application/x-sh"], mode: "shell", ext: ["sh", "ksh", "bash"], alias: ["bash", "sh", "zsh"], file: /^PKGBUILD$/ },
        { name: "Sieve", mime: "application/sieve", mode: "sieve", ext: ["siv", "sieve"] },
        { name: "Slim", mimes: ["text/x-slim", "application/x-slim"], mode: "slim", ext: ["slim"] },
        { name: "Smalltalk", mime: "text/x-stsrc", mode: "smalltalk", ext: ["st"] },
        { name: "Smarty", mime: "text/x-smarty", mode: "smarty", ext: ["tpl"] },
        { name: "Solr", mime: "text/x-solr", mode: "solr" },
        { name: "SML", mime: "text/x-sml", mode: "mllike", ext: ["sml", "sig", "fun", "smackspec"] },
        { name: "Soy", mime: "text/x-soy", mode: "soy", ext: ["soy"], alias: ["closure template"] },
        { name: "SPARQL", mime: "application/sparql-query", mode: "sparql", ext: ["rq", "sparql"], alias: ["sparul"] },
        { name: "Spreadsheet", mime: "text/x-spreadsheet", mode: "spreadsheet", alias: ["excel", "formula"] },
        { name: "SQL", mime: "text/x-sql", mode: "sql", ext: ["sql"] },
        { name: "SQLite", mime: "text/x-sqlite", mode: "sql" },
        { name: "Squirrel", mime: "text/x-squirrel", mode: "clike", ext: ["nut"] },
        { name: "Stylus", mime: "text/x-styl", mode: "stylus", ext: ["styl"] },
        { name: "Swift", mime: "text/x-swift", mode: "swift", ext: ["swift"] },
        { name: "sTeX", mime: "text/x-stex", mode: "stex" },
        { name: "LaTeX", mime: "text/x-latex", mode: "stex", ext: ["text", "ltx", "tex"], alias: ["tex"] },
        { name: "SystemVerilog", mime: "text/x-systemverilog", mode: "verilog", ext: ["v", "sv", "svh"] },
        { name: "Tcl", mime: "text/x-tcl", mode: "tcl", ext: ["tcl"] },
        { name: "Textile", mime: "text/x-textile", mode: "textile", ext: ["textile"] },
        { name: "TiddlyWiki", mime: "text/x-tiddlywiki", mode: "tiddlywiki" },
        { name: "Tiki wiki", mime: "text/tiki", mode: "tiki" },
        { name: "TOML", mime: "text/x-toml", mode: "toml", ext: ["toml"] },
        { name: "Tornado", mime: "text/x-tornado", mode: "tornado" },
        { name: "troff", mime: "text/troff", mode: "troff", ext: ["1", "2", "3", "4", "5", "6", "7", "8", "9"] },
        { name: "TTCN", mime: "text/x-ttcn", mode: "ttcn", ext: ["ttcn", "ttcn3", "ttcnpp"] },
        { name: "TTCN_CFG", mime: "text/x-ttcn-cfg", mode: "ttcn-cfg", ext: ["cfg"] },
        { name: "Turtle", mime: "text/turtle", mode: "turtle", ext: ["ttl"] },
        { name: "TypeScript", mime: "application/typescript", mode: "javascript", ext: ["ts"], alias: ["ts"] },
        { name: "TypeScript-JSX", mime: "text/typescript-jsx", mode: "jsx", ext: ["tsx"], alias: ["tsx"] },
        { name: "Twig", mime: "text/x-twig", mode: "twig" },
        { name: "Web IDL", mime: "text/x-webidl", mode: "webidl", ext: ["webidl"] },
        { name: "VB.NET", mime: "text/x-vb", mode: "vb", ext: ["vb"] },
        { name: "VBScript", mime: "text/vbscript", mode: "vbscript", ext: ["vbs"] },
        { name: "Velocity", mime: "text/velocity", mode: "velocity", ext: ["vtl"] },
        { name: "Verilog", mime: "text/x-verilog", mode: "verilog", ext: ["v"] },
        { name: "VHDL", mime: "text/x-vhdl", mode: "vhdl", ext: ["vhd", "vhdl"] },
        { name: "Vue.js Component", mimes: ["script/x-vue", "text/x-vue"], mode: "vue", ext: ["vue"] },
        { name: "XML", mimes: ["application/xml", "text/xml"], mode: "xml", ext: ["xml", "xsl", "xsd", "svg"], alias: ["rss", "wsdl", "xsd"] },
        { name: "XQuery", mime: "application/xquery", mode: "xquery", ext: ["xy", "xquery"] },
        { name: "Yacas", mime: "text/x-yacas", mode: "yacas", ext: ["ys"] },
        { name: "YAML", mimes: ["text/x-yaml", "text/yaml"], mode: "yaml", ext: ["yaml", "yml"], alias: ["yml"] },
        { name: "Z80", mime: "text/x-z80", mode: "z80", ext: ["z80"] },
        { name: "mscgen", mime: "text/x-mscgen", mode: "mscgen", ext: ["mscgen", "mscin", "msc"] },
        { name: "xu", mime: "text/x-xu", mode: "mscgen", ext: ["xu"] },
        { name: "msgenny", mime: "text/x-msgenny", mode: "mscgen", ext: ["msgenny"] },
        { name: "WebAssembly", mime: "text/webassembly", mode: "wast", ext: ["wat", "wast"] }
      ];
      for (var P = 0; P < D.modeInfo.length; P++) {
        var S = D.modeInfo[P];
        S.mimes && (S.mime = S.mimes[0]);
      }
      D.findModeByMIME = function(N) {
        N = N.toLowerCase();
        for (var O = 0; O < D.modeInfo.length; O++) {
          var W = D.modeInfo[O];
          if (W.mime == N) return W;
          if (W.mimes) {
            for (var B = 0; B < W.mimes.length; B++)
              if (W.mimes[B] == N) return W;
          }
        }
        if (/\+xml$/.test(N)) return D.findModeByMIME("application/xml");
        if (/\+json$/.test(N)) return D.findModeByMIME("application/json");
      }, D.findModeByExtension = function(N) {
        N = N.toLowerCase();
        for (var O = 0; O < D.modeInfo.length; O++) {
          var W = D.modeInfo[O];
          if (W.ext) {
            for (var B = 0; B < W.ext.length; B++)
              if (W.ext[B] == N) return W;
          }
        }
      }, D.findModeByFileName = function(N) {
        for (var O = 0; O < D.modeInfo.length; O++) {
          var W = D.modeInfo[O];
          if (W.file && W.file.test(N)) return W;
        }
        var B = N.lastIndexOf("."), _ = B > -1 && N.substring(B + 1, N.length);
        if (_) return D.findModeByExtension(_);
      }, D.findModeByName = function(N) {
        N = N.toLowerCase();
        for (var O = 0; O < D.modeInfo.length; O++) {
          var W = D.modeInfo[O];
          if (W.name.toLowerCase() == N) return W;
          if (W.alias) {
            for (var B = 0; B < W.alias.length; B++)
              if (W.alias[B].toLowerCase() == N) return W;
          }
        }
      };
    });
  })()), Hl.exports;
}
var Pl;
function su() {
  return Pl || (Pl = 1, (function(ae, le) {
    (function(D) {
      D(zt(), uu(), zf());
    })(function(D) {
      D.defineMode("markdown", function(P, S) {
        var N = D.getMode(P, "text/html"), O = N.name == "null";
        function W(b) {
          if (D.findModeByName) {
            var p = D.findModeByName(b);
            p && (b = p.mime || p.mimes[0]);
          }
          var G = D.getMode(P, b);
          return G.name == "null" ? null : G;
        }
        S.highlightFormatting === void 0 && (S.highlightFormatting = !1), S.maxBlockquoteDepth === void 0 && (S.maxBlockquoteDepth = 0), S.taskLists === void 0 && (S.taskLists = !1), S.strikethrough === void 0 && (S.strikethrough = !1), S.emoji === void 0 && (S.emoji = !1), S.fencedCodeBlockHighlighting === void 0 && (S.fencedCodeBlockHighlighting = !0), S.fencedCodeBlockDefaultMode === void 0 && (S.fencedCodeBlockDefaultMode = "text/plain"), S.xml === void 0 && (S.xml = !0), S.tokenTypeOverrides === void 0 && (S.tokenTypeOverrides = {});
        var B = {
          header: "header",
          code: "comment",
          quote: "quote",
          list1: "variable-2",
          list2: "variable-3",
          list3: "keyword",
          hr: "hr",
          image: "image",
          imageAltText: "image-alt-text",
          imageMarker: "image-marker",
          formatting: "formatting",
          linkInline: "link",
          linkEmail: "link",
          linkText: "link",
          linkHref: "string",
          em: "em",
          strong: "strong",
          strikethrough: "strikethrough",
          emoji: "builtin"
        };
        for (var _ in B)
          B.hasOwnProperty(_) && S.tokenTypeOverrides[_] && (B[_] = S.tokenTypeOverrides[_]);
        var ee = /^([*\-_])(?:\s*\1){2,}\s*$/, Q = /^(?:[*\-+]|^[0-9]+([.)]))\s+/, K = /^\[(x| )\](?=\s)/i, ue = S.allowAtxHeaderWithoutSpace ? /^(#+)/ : /^(#+)(?: |$)/, ne = /^ {0,3}(?:\={1,}|-{2,})\s*$/, Ce = /^[^#!\[\]*_\\<>` "'(~:]+/, pe = /^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/, oe = /^\s*\[[^\]]+?\]:.*$/, z = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/, X = "    ";
        function q(b, p, G) {
          return p.f = p.inline = G, G(b, p);
        }
        function j(b, p, G) {
          return p.f = p.block = G, G(b, p);
        }
        function he(b) {
          return !b || !/\S/.test(b.string);
        }
        function Z(b) {
          if (b.linkTitle = !1, b.linkHref = !1, b.linkText = !1, b.em = !1, b.strong = !1, b.strikethrough = !1, b.quote = 0, b.indentedCode = !1, b.f == xe) {
            var p = O;
            if (!p) {
              var G = D.innerMode(N, b.htmlState);
              p = G.mode.name == "xml" && G.state.tagStart === null && !G.state.context && G.state.tokenize.isInText;
            }
            p && (b.f = Ee, b.block = de, b.htmlState = null);
          }
          return b.trailingSpace = 0, b.trailingSpaceNewLine = !1, b.prevLine = b.thisLine, b.thisLine = { stream: null }, null;
        }
        function de(b, p) {
          var G = b.column() === p.indentation, ze = he(p.prevLine.stream), Te = p.indentedCode, $e = p.prevLine.hr, Je = p.list !== !1, Ke = (p.listStack[p.listStack.length - 1] || 0) + 3;
          p.indentedCode = !1;
          var Ye = p.indentation;
          if (p.indentationDiff === null && (p.indentationDiff = p.indentation, Je)) {
            for (p.list = null; Ye < p.listStack[p.listStack.length - 1]; )
              p.listStack.pop(), p.listStack.length ? p.indentation = p.listStack[p.listStack.length - 1] : p.list = !1;
            p.list !== !1 && (p.indentationDiff = Ye - p.listStack[p.listStack.length - 1]);
          }
          var Pe = !ze && !$e && !p.prevLine.header && (!Je || !Te) && !p.prevLine.fencedCodeEnd, We = (p.list === !1 || $e || ze) && p.indentation <= Ke && b.match(ee), Ve = null;
          if (p.indentationDiff >= 4 && (Te || p.prevLine.fencedCodeEnd || p.prevLine.header || ze))
            return b.skipToEnd(), p.indentedCode = !0, B.code;
          if (b.eatSpace())
            return null;
          if (G && p.indentation <= Ke && (Ve = b.match(ue)) && Ve[1].length <= 6)
            return p.quote = 0, p.header = Ve[1].length, p.thisLine.header = !0, S.highlightFormatting && (p.formatting = "header"), p.f = p.inline, se(p);
          if (p.indentation <= Ke && b.eat(">"))
            return p.quote = G ? 1 : p.quote + 1, S.highlightFormatting && (p.formatting = "quote"), b.eatSpace(), se(p);
          if (!We && !p.setext && G && p.indentation <= Ke && (Ve = b.match(Q))) {
            var at = Ve[1] ? "ol" : "ul";
            return p.indentation = Ye + b.current().length, p.list = !0, p.quote = 0, p.listStack.push(p.indentation), p.em = !1, p.strong = !1, p.code = !1, p.strikethrough = !1, S.taskLists && b.match(K, !1) && (p.taskList = !0), p.f = p.inline, S.highlightFormatting && (p.formatting = ["list", "list-" + at]), se(p);
          } else {
            if (G && p.indentation <= Ke && (Ve = b.match(pe, !0)))
              return p.quote = 0, p.fencedEndRE = new RegExp(Ve[1] + "+ *$"), p.localMode = S.fencedCodeBlockHighlighting && W(Ve[2] || S.fencedCodeBlockDefaultMode), p.localMode && (p.localState = D.startState(p.localMode)), p.f = p.block = Ue, S.highlightFormatting && (p.formatting = "code-block"), p.code = -1, se(p);
            if (
              // if setext set, indicates line after ---/===
              p.setext || // line before ---/===
              (!Pe || !Je) && !p.quote && p.list === !1 && !p.code && !We && !oe.test(b.string) && (Ve = b.lookAhead(1)) && (Ve = Ve.match(ne))
            )
              return p.setext ? (p.header = p.setext, p.setext = 0, b.skipToEnd(), S.highlightFormatting && (p.formatting = "header")) : (p.header = Ve[0].charAt(0) == "=" ? 1 : 2, p.setext = p.header), p.thisLine.header = !0, p.f = p.inline, se(p);
            if (We)
              return b.skipToEnd(), p.hr = !0, p.thisLine.hr = !0, B.hr;
            if (b.peek() === "[")
              return q(b, p, be);
          }
          return q(b, p, p.inline);
        }
        function xe(b, p) {
          var G = N.token(b, p.htmlState);
          if (!O) {
            var ze = D.innerMode(N, p.htmlState);
            (ze.mode.name == "xml" && ze.state.tagStart === null && !ze.state.context && ze.state.tokenize.isInText || p.md_inside && b.current().indexOf(">") > -1) && (p.f = Ee, p.block = de, p.htmlState = null);
          }
          return G;
        }
        function Ue(b, p) {
          var G = p.listStack[p.listStack.length - 1] || 0, ze = p.indentation < G, Te = G + 3;
          if (p.fencedEndRE && p.indentation <= Te && (ze || b.match(p.fencedEndRE))) {
            S.highlightFormatting && (p.formatting = "code-block");
            var $e;
            return ze || ($e = se(p)), p.localMode = p.localState = null, p.block = de, p.f = Ee, p.fencedEndRE = null, p.code = 0, p.thisLine.fencedCodeEnd = !0, ze ? j(b, p, p.block) : $e;
          } else return p.localMode ? p.localMode.token(b, p.localState) : (b.skipToEnd(), B.code);
        }
        function se(b) {
          var p = [];
          if (b.formatting) {
            p.push(B.formatting), typeof b.formatting == "string" && (b.formatting = [b.formatting]);
            for (var G = 0; G < b.formatting.length; G++)
              p.push(B.formatting + "-" + b.formatting[G]), b.formatting[G] === "header" && p.push(B.formatting + "-" + b.formatting[G] + "-" + b.header), b.formatting[G] === "quote" && (!S.maxBlockquoteDepth || S.maxBlockquoteDepth >= b.quote ? p.push(B.formatting + "-" + b.formatting[G] + "-" + b.quote) : p.push("error"));
          }
          if (b.taskOpen)
            return p.push("meta"), p.length ? p.join(" ") : null;
          if (b.taskClosed)
            return p.push("property"), p.length ? p.join(" ") : null;
          if (b.linkHref ? p.push(B.linkHref, "url") : (b.strong && p.push(B.strong), b.em && p.push(B.em), b.strikethrough && p.push(B.strikethrough), b.emoji && p.push(B.emoji), b.linkText && p.push(B.linkText), b.code && p.push(B.code), b.image && p.push(B.image), b.imageAltText && p.push(B.imageAltText, "link"), b.imageMarker && p.push(B.imageMarker)), b.header && p.push(B.header, B.header + "-" + b.header), b.quote && (p.push(B.quote), !S.maxBlockquoteDepth || S.maxBlockquoteDepth >= b.quote ? p.push(B.quote + "-" + b.quote) : p.push(B.quote + "-" + S.maxBlockquoteDepth)), b.list !== !1) {
            var ze = (b.listStack.length - 1) % 3;
            ze ? ze === 1 ? p.push(B.list2) : p.push(B.list3) : p.push(B.list1);
          }
          return b.trailingSpaceNewLine ? p.push("trailing-space-new-line") : b.trailingSpace && p.push("trailing-space-" + (b.trailingSpace % 2 ? "a" : "b")), p.length ? p.join(" ") : null;
        }
        function Le(b, p) {
          if (b.match(Ce, !0))
            return se(p);
        }
        function Ee(b, p) {
          var G = p.text(b, p);
          if (typeof G < "u")
            return G;
          if (p.list)
            return p.list = null, se(p);
          if (p.taskList) {
            var ze = b.match(K, !0)[1] === " ";
            return ze ? p.taskOpen = !0 : p.taskClosed = !0, S.highlightFormatting && (p.formatting = "task"), p.taskList = !1, se(p);
          }
          if (p.taskOpen = !1, p.taskClosed = !1, p.header && b.match(/^#+$/, !0))
            return S.highlightFormatting && (p.formatting = "header"), se(p);
          var Te = b.next();
          if (p.linkTitle) {
            p.linkTitle = !1;
            var $e = Te;
            Te === "(" && ($e = ")"), $e = ($e + "").replace(/([.?*+^\[\]\\(){}|-])/g, "\\$1");
            var Je = "^\\s*(?:[^" + $e + "\\\\]+|\\\\\\\\|\\\\.)" + $e;
            if (b.match(new RegExp(Je), !0))
              return B.linkHref;
          }
          if (Te === "`") {
            var Ke = p.formatting;
            S.highlightFormatting && (p.formatting = "code"), b.eatWhile("`");
            var Ye = b.current().length;
            if (p.code == 0 && (!p.quote || Ye == 1))
              return p.code = Ye, se(p);
            if (Ye == p.code) {
              var Pe = se(p);
              return p.code = 0, Pe;
            } else
              return p.formatting = Ke, se(p);
          } else if (p.code)
            return se(p);
          if (Te === "\\" && (b.next(), S.highlightFormatting)) {
            var We = se(p), Ve = B.formatting + "-escape";
            return We ? We + " " + Ve : Ve;
          }
          if (Te === "!" && b.match(/\[[^\]]*\] ?(?:\(|\[)/, !1))
            return p.imageMarker = !0, p.image = !0, S.highlightFormatting && (p.formatting = "image"), se(p);
          if (Te === "[" && p.imageMarker && b.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1))
            return p.imageMarker = !1, p.imageAltText = !0, S.highlightFormatting && (p.formatting = "image"), se(p);
          if (Te === "]" && p.imageAltText) {
            S.highlightFormatting && (p.formatting = "image");
            var We = se(p);
            return p.imageAltText = !1, p.image = !1, p.inline = p.f = L, We;
          }
          if (Te === "[" && !p.image)
            return p.linkText && b.match(/^.*?\]/) || (p.linkText = !0, S.highlightFormatting && (p.formatting = "link")), se(p);
          if (Te === "]" && p.linkText) {
            S.highlightFormatting && (p.formatting = "link");
            var We = se(p);
            return p.linkText = !1, p.inline = p.f = b.match(/\(.*?\)| ?\[.*?\]/, !1) ? L : Ee, We;
          }
          if (Te === "<" && b.match(/^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/, !1)) {
            p.f = p.inline = He, S.highlightFormatting && (p.formatting = "link");
            var We = se(p);
            return We ? We += " " : We = "", We + B.linkInline;
          }
          if (Te === "<" && b.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)) {
            p.f = p.inline = He, S.highlightFormatting && (p.formatting = "link");
            var We = se(p);
            return We ? We += " " : We = "", We + B.linkEmail;
          }
          if (S.xml && Te === "<" && b.match(/^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i, !1)) {
            var at = b.string.indexOf(">", b.pos);
            if (at != -1) {
              var ke = b.string.substring(b.start, at);
              /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(ke) && (p.md_inside = !0);
            }
            return b.backUp(1), p.htmlState = D.startState(N), j(b, p, xe);
          }
          if (S.xml && Te === "<" && b.match(/^\/\w*?>/))
            return p.md_inside = !1, "tag";
          if (Te === "*" || Te === "_") {
            for (var Dt = 1, At = b.pos == 1 ? " " : b.string.charAt(b.pos - 2); Dt < 3 && b.eat(Te); ) Dt++;
            var nt = b.peek() || " ", Ht = !/\s/.test(nt) && (!z.test(nt) || /\s/.test(At) || z.test(At)), De = !/\s/.test(At) && (!z.test(At) || /\s/.test(nt) || z.test(nt)), lt = null, _t = null;
            if (Dt % 2 && (!p.em && Ht && (Te === "*" || !De || z.test(At)) ? lt = !0 : p.em == Te && De && (Te === "*" || !Ht || z.test(nt)) && (lt = !1)), Dt > 1 && (!p.strong && Ht && (Te === "*" || !De || z.test(At)) ? _t = !0 : p.strong == Te && De && (Te === "*" || !Ht || z.test(nt)) && (_t = !1)), _t != null || lt != null) {
              S.highlightFormatting && (p.formatting = lt == null ? "strong" : _t == null ? "em" : "strong em"), lt === !0 && (p.em = Te), _t === !0 && (p.strong = Te);
              var Pe = se(p);
              return lt === !1 && (p.em = !1), _t === !1 && (p.strong = !1), Pe;
            }
          } else if (Te === " " && (b.eat("*") || b.eat("_"))) {
            if (b.peek() === " ")
              return se(p);
            b.backUp(1);
          }
          if (S.strikethrough) {
            if (Te === "~" && b.eatWhile(Te)) {
              if (p.strikethrough) {
                S.highlightFormatting && (p.formatting = "strikethrough");
                var Pe = se(p);
                return p.strikethrough = !1, Pe;
              } else if (b.match(/^[^\s]/, !1))
                return p.strikethrough = !0, S.highlightFormatting && (p.formatting = "strikethrough"), se(p);
            } else if (Te === " " && b.match("~~", !0)) {
              if (b.peek() === " ")
                return se(p);
              b.backUp(2);
            }
          }
          if (S.emoji && Te === ":" && b.match(/^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/)) {
            p.emoji = !0, S.highlightFormatting && (p.formatting = "emoji");
            var ar = se(p);
            return p.emoji = !1, ar;
          }
          return Te === " " && (b.match(/^ +$/, !1) ? p.trailingSpace++ : p.trailingSpace && (p.trailingSpaceNewLine = !0)), se(p);
        }
        function He(b, p) {
          var G = b.next();
          if (G === ">") {
            p.f = p.inline = Ee, S.highlightFormatting && (p.formatting = "link");
            var ze = se(p);
            return ze ? ze += " " : ze = "", ze + B.linkInline;
          }
          return b.match(/^[^>]+/, !0), B.linkInline;
        }
        function L(b, p) {
          if (b.eatSpace())
            return null;
          var G = b.next();
          return G === "(" || G === "[" ? (p.f = p.inline = $(G === "(" ? ")" : "]"), S.highlightFormatting && (p.formatting = "link-string"), p.linkHref = !0, se(p)) : "error";
        }
        var te = {
          ")": /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
          "]": /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/
        };
        function $(b) {
          return function(p, G) {
            var ze = p.next();
            if (ze === b) {
              G.f = G.inline = Ee, S.highlightFormatting && (G.formatting = "link-string");
              var Te = se(G);
              return G.linkHref = !1, Te;
            }
            return p.match(te[b]), G.linkHref = !0, se(G);
          };
        }
        function be(b, p) {
          return b.match(/^([^\]\\]|\\.)*\]:/, !1) ? (p.f = _e, b.next(), S.highlightFormatting && (p.formatting = "link"), p.linkText = !0, se(p)) : q(b, p, Ee);
        }
        function _e(b, p) {
          if (b.match("]:", !0)) {
            p.f = p.inline = rt, S.highlightFormatting && (p.formatting = "link");
            var G = se(p);
            return p.linkText = !1, G;
          }
          return b.match(/^([^\]\\]|\\.)+/, !0), B.linkText;
        }
        function rt(b, p) {
          return b.eatSpace() ? null : (b.match(/^[^\s]+/, !0), b.peek() === void 0 ? p.linkTitle = !0 : b.match(/^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/, !0), p.f = p.inline = Ee, B.linkHref + " url");
        }
        var Wt = {
          startState: function() {
            return {
              f: de,
              prevLine: { stream: null },
              thisLine: { stream: null },
              block: de,
              htmlState: null,
              indentation: 0,
              inline: Ee,
              text: Le,
              formatting: !1,
              linkText: !1,
              linkHref: !1,
              linkTitle: !1,
              code: 0,
              em: !1,
              strong: !1,
              header: 0,
              setext: 0,
              hr: !1,
              taskList: !1,
              list: !1,
              listStack: [],
              quote: 0,
              trailingSpace: 0,
              trailingSpaceNewLine: !1,
              strikethrough: !1,
              emoji: !1,
              fencedEndRE: null
            };
          },
          copyState: function(b) {
            return {
              f: b.f,
              prevLine: b.prevLine,
              thisLine: b.thisLine,
              block: b.block,
              htmlState: b.htmlState && D.copyState(N, b.htmlState),
              indentation: b.indentation,
              localMode: b.localMode,
              localState: b.localMode ? D.copyState(b.localMode, b.localState) : null,
              inline: b.inline,
              text: b.text,
              formatting: !1,
              linkText: b.linkText,
              linkTitle: b.linkTitle,
              linkHref: b.linkHref,
              code: b.code,
              em: b.em,
              strong: b.strong,
              strikethrough: b.strikethrough,
              emoji: b.emoji,
              header: b.header,
              setext: b.setext,
              hr: b.hr,
              taskList: b.taskList,
              list: b.list,
              listStack: b.listStack.slice(0),
              quote: b.quote,
              indentedCode: b.indentedCode,
              trailingSpace: b.trailingSpace,
              trailingSpaceNewLine: b.trailingSpaceNewLine,
              md_inside: b.md_inside,
              fencedEndRE: b.fencedEndRE
            };
          },
          token: function(b, p) {
            if (p.formatting = !1, b != p.thisLine.stream) {
              if (p.header = 0, p.hr = !1, b.match(/^\s*$/, !0))
                return Z(p), null;
              if (p.prevLine = p.thisLine, p.thisLine = { stream: b }, p.taskList = !1, p.trailingSpace = 0, p.trailingSpaceNewLine = !1, !p.localState && (p.f = p.block, p.f != xe)) {
                var G = b.match(/^\s*/, !0)[0].replace(/\t/g, X).length;
                if (p.indentation = G, p.indentationDiff = null, G > 0) return null;
              }
            }
            return p.f(b, p);
          },
          innerMode: function(b) {
            return b.block == xe ? { state: b.htmlState, mode: N } : b.localState ? { state: b.localState, mode: b.localMode } : { state: b, mode: Wt };
          },
          indent: function(b, p, G) {
            return b.block == xe && N.indent ? N.indent(b.htmlState, p, G) : b.localState && b.localMode.indent ? b.localMode.indent(b.localState, p, G) : D.Pass;
          },
          blankLine: Z,
          getType: se,
          blockCommentStart: "<!--",
          blockCommentEnd: "-->",
          closeBrackets: "()[]{}''\"\"``",
          fold: "markdown"
        };
        return Wt;
      }, "xml"), D.defineMIME("text/markdown", "markdown"), D.defineMIME("text/x-markdown", "markdown");
    });
  })()), Il.exports;
}
var zl = { exports: {} }, _l;
function fu() {
  return _l || (_l = 1, (function(ae, le) {
    (function(D) {
      D(zt());
    })(function(D) {
      D.overlayMode = function(P, S, N) {
        return {
          startState: function() {
            return {
              base: D.startState(P),
              overlay: D.startState(S),
              basePos: 0,
              baseCur: null,
              overlayPos: 0,
              overlayCur: null,
              streamSeen: null
            };
          },
          copyState: function(O) {
            return {
              base: D.copyState(P, O.base),
              overlay: D.copyState(S, O.overlay),
              basePos: O.basePos,
              baseCur: null,
              overlayPos: O.overlayPos,
              overlayCur: null
            };
          },
          token: function(O, W) {
            return (O != W.streamSeen || Math.min(W.basePos, W.overlayPos) < O.start) && (W.streamSeen = O, W.basePos = W.overlayPos = O.start), O.start == W.basePos && (W.baseCur = P.token(O, W.base), W.basePos = O.pos), O.start == W.overlayPos && (O.pos = O.start, W.overlayCur = S.token(O, W.overlay), W.overlayPos = O.pos), O.pos = Math.min(W.basePos, W.overlayPos), W.overlayCur == null ? W.baseCur : W.baseCur != null && W.overlay.combineTokens || N && W.overlay.combineTokens == null ? W.baseCur + " " + W.overlayCur : W.overlayCur;
          },
          indent: P.indent && function(O, W, B) {
            return P.indent(O.base, W, B);
          },
          electricChars: P.electricChars,
          innerMode: function(O) {
            return { state: O.base, mode: P };
          },
          blankLine: function(O) {
            var W, B;
            return P.blankLine && (W = P.blankLine(O.base)), S.blankLine && (B = S.blankLine(O.overlay)), B == null ? W : N && W != null ? W + " " + B : B;
          }
        };
      };
    });
  })()), zl.exports;
}
var Wl = { exports: {} }, ql;
function _f() {
  return ql || (ql = 1, (function(ae, le) {
    (function(D) {
      D(zt());
    })(function(D) {
      D.defineOption("placeholder", "", function(_, ee, Q) {
        var K = Q && Q != D.Init;
        if (ee && !K)
          _.on("blur", O), _.on("change", W), _.on("swapDoc", W), D.on(_.getInputField(), "compositionupdate", _.state.placeholderCompose = function() {
            N(_);
          }), W(_);
        else if (!ee && K) {
          _.off("blur", O), _.off("change", W), _.off("swapDoc", W), D.off(_.getInputField(), "compositionupdate", _.state.placeholderCompose), P(_);
          var ue = _.getWrapperElement();
          ue.className = ue.className.replace(" CodeMirror-empty", "");
        }
        ee && !_.hasFocus() && O(_);
      });
      function P(_) {
        _.state.placeholder && (_.state.placeholder.parentNode.removeChild(_.state.placeholder), _.state.placeholder = null);
      }
      function S(_) {
        P(_);
        var ee = _.state.placeholder = document.createElement("pre");
        ee.style.cssText = "height: 0; overflow: visible", ee.style.direction = _.getOption("direction"), ee.className = "CodeMirror-placeholder CodeMirror-line-like";
        var Q = _.getOption("placeholder");
        typeof Q == "string" && (Q = document.createTextNode(Q)), ee.appendChild(Q), _.display.lineSpace.insertBefore(ee, _.display.lineSpace.firstChild);
      }
      function N(_) {
        setTimeout(function() {
          var ee = !1;
          if (_.lineCount() == 1) {
            var Q = _.getInputField();
            ee = Q.nodeName == "TEXTAREA" ? !_.getLine(0).length : !/[^\u200b]/.test(Q.querySelector(".CodeMirror-line").textContent);
          }
          ee ? S(_) : P(_);
        }, 20);
      }
      function O(_) {
        B(_) && S(_);
      }
      function W(_) {
        var ee = _.getWrapperElement(), Q = B(_);
        ee.className = ee.className.replace(" CodeMirror-empty", "") + (Q ? " CodeMirror-empty" : ""), Q ? S(_) : P(_);
      }
      function B(_) {
        return _.lineCount() === 1 && _.getLine(0) === "";
      }
    });
  })()), Wl.exports;
}
var Ul = { exports: {} }, Gl;
function Wf() {
  return Gl || (Gl = 1, (function(ae, le) {
    (function(D) {
      D(zt());
    })(function(D) {
      D.defineOption("autoRefresh", !1, function(N, O) {
        N.state.autoRefresh && (S(N, N.state.autoRefresh), N.state.autoRefresh = null), O && N.display.wrapper.offsetHeight == 0 && P(N, N.state.autoRefresh = { delay: O.delay || 250 });
      });
      function P(N, O) {
        function W() {
          N.display.wrapper.offsetHeight ? (S(N, O), N.display.lastWrapHeight != N.display.wrapper.clientHeight && N.refresh()) : O.timeout = setTimeout(W, O.delay);
        }
        O.timeout = setTimeout(W, O.delay), O.hurry = function() {
          clearTimeout(O.timeout), O.timeout = setTimeout(W, 50);
        }, D.on(window, "mouseup", O.hurry), D.on(window, "keyup", O.hurry);
      }
      function S(N, O) {
        clearTimeout(O.timeout), D.off(window, "mouseup", O.hurry), D.off(window, "keyup", O.hurry);
      }
    });
  })()), Ul.exports;
}
var jl = { exports: {} }, Kl;
function qf() {
  return Kl || (Kl = 1, (function(ae, le) {
    (function(D) {
      D(zt());
    })(function(D) {
      D.defineOption("styleSelectedText", !1, function(K, ue, ne) {
        var Ce = ne && ne != D.Init;
        ue && !Ce ? (K.state.markedSelection = [], K.state.markedSelectionStyle = typeof ue == "string" ? ue : "CodeMirror-selectedtext", ee(K), K.on("cursorActivity", P), K.on("change", S)) : !ue && Ce && (K.off("cursorActivity", P), K.off("change", S), _(K), K.state.markedSelection = K.state.markedSelectionStyle = null);
      });
      function P(K) {
        K.state.markedSelection && K.operation(function() {
          Q(K);
        });
      }
      function S(K) {
        K.state.markedSelection && K.state.markedSelection.length && K.operation(function() {
          _(K);
        });
      }
      var N = 8, O = D.Pos, W = D.cmpPos;
      function B(K, ue, ne, Ce) {
        if (W(ue, ne) != 0)
          for (var pe = K.state.markedSelection, oe = K.state.markedSelectionStyle, z = ue.line; ; ) {
            var X = z == ue.line ? ue : O(z, 0), q = z + N, j = q >= ne.line, he = j ? ne : O(q, 0), Z = K.markText(X, he, { className: oe });
            if (Ce == null ? pe.push(Z) : pe.splice(Ce++, 0, Z), j) break;
            z = q;
          }
      }
      function _(K) {
        for (var ue = K.state.markedSelection, ne = 0; ne < ue.length; ++ne) ue[ne].clear();
        ue.length = 0;
      }
      function ee(K) {
        _(K);
        for (var ue = K.listSelections(), ne = 0; ne < ue.length; ne++)
          B(K, ue[ne].from(), ue[ne].to());
      }
      function Q(K) {
        if (!K.somethingSelected()) return _(K);
        if (K.listSelections().length > 1) return ee(K);
        var ue = K.getCursor("start"), ne = K.getCursor("end"), Ce = K.state.markedSelection;
        if (!Ce.length) return B(K, ue, ne);
        var pe = Ce[0].find(), oe = Ce[Ce.length - 1].find();
        if (!pe || !oe || ne.line - ue.line <= N || W(ue, oe.to) >= 0 || W(ne, pe.from) <= 0)
          return ee(K);
        for (; W(ue, pe.from) > 0; )
          Ce.shift().clear(), pe = Ce[0].find();
        for (W(ue, pe.from) < 0 && (pe.to.line - ue.line < N ? (Ce.shift().clear(), B(K, ue, pe.to, 0)) : B(K, ue, pe.from, 0)); W(ne, oe.to) < 0; )
          Ce.pop().clear(), oe = Ce[Ce.length - 1].find();
        W(ne, oe.to) > 0 && (ne.line - oe.from.line < N ? (Ce.pop().clear(), B(K, oe.from, ne)) : B(K, oe.to, ne));
      }
    });
  })()), jl.exports;
}
var Xl = { exports: {} }, Yl;
function Uf() {
  return Yl || (Yl = 1, (function(ae, le) {
    (function(D) {
      D(zt());
    })(function(D) {
      var P = D.Pos;
      function S(z) {
        var X = z.flags;
        return X ?? (z.ignoreCase ? "i" : "") + (z.global ? "g" : "") + (z.multiline ? "m" : "");
      }
      function N(z, X) {
        for (var q = S(z), j = q, he = 0; he < X.length; he++) j.indexOf(X.charAt(he)) == -1 && (j += X.charAt(he));
        return q == j ? z : new RegExp(z.source, j);
      }
      function O(z) {
        return /\\s|\\n|\n|\\W|\\D|\[\^/.test(z.source);
      }
      function W(z, X, q) {
        X = N(X, "g");
        for (var j = q.line, he = q.ch, Z = z.lastLine(); j <= Z; j++, he = 0) {
          X.lastIndex = he;
          var de = z.getLine(j), xe = X.exec(de);
          if (xe)
            return {
              from: P(j, xe.index),
              to: P(j, xe.index + xe[0].length),
              match: xe
            };
        }
      }
      function B(z, X, q) {
        if (!O(X)) return W(z, X, q);
        X = N(X, "gm");
        for (var j, he = 1, Z = q.line, de = z.lastLine(); Z <= de; ) {
          for (var xe = 0; xe < he && !(Z > de); xe++) {
            var Ue = z.getLine(Z++);
            j = j == null ? Ue : j + `
` + Ue;
          }
          he = he * 2, X.lastIndex = q.ch;
          var se = X.exec(j);
          if (se) {
            var Le = j.slice(0, se.index).split(`
`), Ee = se[0].split(`
`), He = q.line + Le.length - 1, L = Le[Le.length - 1].length;
            return {
              from: P(He, L),
              to: P(
                He + Ee.length - 1,
                Ee.length == 1 ? L + Ee[0].length : Ee[Ee.length - 1].length
              ),
              match: se
            };
          }
        }
      }
      function _(z, X, q) {
        for (var j, he = 0; he <= z.length; ) {
          X.lastIndex = he;
          var Z = X.exec(z);
          if (!Z) break;
          var de = Z.index + Z[0].length;
          if (de > z.length - q) break;
          (!j || de > j.index + j[0].length) && (j = Z), he = Z.index + 1;
        }
        return j;
      }
      function ee(z, X, q) {
        X = N(X, "g");
        for (var j = q.line, he = q.ch, Z = z.firstLine(); j >= Z; j--, he = -1) {
          var de = z.getLine(j), xe = _(de, X, he < 0 ? 0 : de.length - he);
          if (xe)
            return {
              from: P(j, xe.index),
              to: P(j, xe.index + xe[0].length),
              match: xe
            };
        }
      }
      function Q(z, X, q) {
        if (!O(X)) return ee(z, X, q);
        X = N(X, "gm");
        for (var j, he = 1, Z = z.getLine(q.line).length - q.ch, de = q.line, xe = z.firstLine(); de >= xe; ) {
          for (var Ue = 0; Ue < he && de >= xe; Ue++) {
            var se = z.getLine(de--);
            j = j == null ? se : se + `
` + j;
          }
          he *= 2;
          var Le = _(j, X, Z);
          if (Le) {
            var Ee = j.slice(0, Le.index).split(`
`), He = Le[0].split(`
`), L = de + Ee.length, te = Ee[Ee.length - 1].length;
            return {
              from: P(L, te),
              to: P(
                L + He.length - 1,
                He.length == 1 ? te + He[0].length : He[He.length - 1].length
              ),
              match: Le
            };
          }
        }
      }
      var K, ue;
      String.prototype.normalize ? (K = function(z) {
        return z.normalize("NFD").toLowerCase();
      }, ue = function(z) {
        return z.normalize("NFD");
      }) : (K = function(z) {
        return z.toLowerCase();
      }, ue = function(z) {
        return z;
      });
      function ne(z, X, q, j) {
        if (z.length == X.length) return q;
        for (var he = 0, Z = q + Math.max(0, z.length - X.length); ; ) {
          if (he == Z) return he;
          var de = he + Z >> 1, xe = j(z.slice(0, de)).length;
          if (xe == q) return de;
          xe > q ? Z = de : he = de + 1;
        }
      }
      function Ce(z, X, q, j) {
        if (!X.length) return null;
        var he = j ? K : ue, Z = he(X).split(/\r|\n\r?/);
        e: for (var de = q.line, xe = q.ch, Ue = z.lastLine() + 1 - Z.length; de <= Ue; de++, xe = 0) {
          var se = z.getLine(de).slice(xe), Le = he(se);
          if (Z.length == 1) {
            var Ee = Le.indexOf(Z[0]);
            if (Ee == -1) continue e;
            var q = ne(se, Le, Ee, he) + xe;
            return {
              from: P(de, ne(se, Le, Ee, he) + xe),
              to: P(de, ne(se, Le, Ee + Z[0].length, he) + xe)
            };
          } else {
            var He = Le.length - Z[0].length;
            if (Le.slice(He) != Z[0]) continue e;
            for (var L = 1; L < Z.length - 1; L++)
              if (he(z.getLine(de + L)) != Z[L]) continue e;
            var te = z.getLine(de + Z.length - 1), $ = he(te), be = Z[Z.length - 1];
            if ($.slice(0, be.length) != be) continue e;
            return {
              from: P(de, ne(se, Le, He, he) + xe),
              to: P(de + Z.length - 1, ne(te, $, be.length, he))
            };
          }
        }
      }
      function pe(z, X, q, j) {
        if (!X.length) return null;
        var he = j ? K : ue, Z = he(X).split(/\r|\n\r?/);
        e: for (var de = q.line, xe = q.ch, Ue = z.firstLine() - 1 + Z.length; de >= Ue; de--, xe = -1) {
          var se = z.getLine(de);
          xe > -1 && (se = se.slice(0, xe));
          var Le = he(se);
          if (Z.length == 1) {
            var Ee = Le.lastIndexOf(Z[0]);
            if (Ee == -1) continue e;
            return {
              from: P(de, ne(se, Le, Ee, he)),
              to: P(de, ne(se, Le, Ee + Z[0].length, he))
            };
          } else {
            var He = Z[Z.length - 1];
            if (Le.slice(0, He.length) != He) continue e;
            for (var L = 1, q = de - Z.length + 1; L < Z.length - 1; L++)
              if (he(z.getLine(q + L)) != Z[L]) continue e;
            var te = z.getLine(de + 1 - Z.length), $ = he(te);
            if ($.slice($.length - Z[0].length) != Z[0]) continue e;
            return {
              from: P(de + 1 - Z.length, ne(te, $, te.length - Z[0].length, he)),
              to: P(de, ne(se, Le, He.length, he))
            };
          }
        }
      }
      function oe(z, X, q, j) {
        this.atOccurrence = !1, this.afterEmptyMatch = !1, this.doc = z, q = q ? z.clipPos(q) : P(0, 0), this.pos = { from: q, to: q };
        var he;
        typeof j == "object" ? he = j.caseFold : (he = j, j = null), typeof X == "string" ? (he == null && (he = !1), this.matches = function(Z, de) {
          return (Z ? pe : Ce)(z, X, de, he);
        }) : (X = N(X, "gm"), !j || j.multiline !== !1 ? this.matches = function(Z, de) {
          return (Z ? Q : B)(z, X, de);
        } : this.matches = function(Z, de) {
          return (Z ? ee : W)(z, X, de);
        });
      }
      oe.prototype = {
        findNext: function() {
          return this.find(!1);
        },
        findPrevious: function() {
          return this.find(!0);
        },
        find: function(z) {
          var X = this.doc.clipPos(z ? this.pos.from : this.pos.to);
          if (this.afterEmptyMatch && this.atOccurrence && (X = P(X.line, X.ch), z ? (X.ch--, X.ch < 0 && (X.line--, X.ch = (this.doc.getLine(X.line) || "").length)) : (X.ch++, X.ch > (this.doc.getLine(X.line) || "").length && (X.ch = 0, X.line++)), D.cmpPos(X, this.doc.clipPos(X)) != 0))
            return this.atOccurrence = !1;
          var q = this.matches(z, X);
          if (this.afterEmptyMatch = q && D.cmpPos(q.from, q.to) == 0, q)
            return this.pos = q, this.atOccurrence = !0, this.pos.match || !0;
          var j = P(z ? this.doc.firstLine() : this.doc.lastLine() + 1, 0);
          return this.pos = { from: j, to: j }, this.atOccurrence = !1;
        },
        from: function() {
          if (this.atOccurrence) return this.pos.from;
        },
        to: function() {
          if (this.atOccurrence) return this.pos.to;
        },
        replace: function(z, X) {
          if (this.atOccurrence) {
            var q = D.splitLines(z);
            this.doc.replaceRange(q, this.pos.from, this.pos.to, X), this.pos.to = P(
              this.pos.from.line + q.length - 1,
              q[q.length - 1].length + (q.length == 1 ? this.pos.from.ch : 0)
            );
          }
        }
      }, D.defineExtension("getSearchCursor", function(z, X, q) {
        return new oe(this.doc, z, X, q);
      }), D.defineDocExtension("getSearchCursor", function(z, X, q) {
        return new oe(this, z, X, q);
      }), D.defineExtension("selectMatches", function(z, X) {
        for (var q = [], j = this.getSearchCursor(z, this.getCursor("from"), X); j.findNext() && !(D.cmpPos(j.to(), this.getCursor("to")) > 0); )
          q.push({ anchor: j.from(), head: j.to() });
        q.length && this.setSelections(q, 0);
      });
    });
  })()), Xl.exports;
}
var Zl = { exports: {} }, Ql;
function Gf() {
  return Ql || (Ql = 1, (function(ae, le) {
    (function(D) {
      D(zt(), su(), fu());
    })(function(D) {
      var P = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;
      D.defineMode("gfm", function(S, N) {
        var O = 0;
        function W(Q) {
          return Q.code = !1, null;
        }
        var B = {
          startState: function() {
            return {
              code: !1,
              codeBlock: !1,
              ateSpace: !1
            };
          },
          copyState: function(Q) {
            return {
              code: Q.code,
              codeBlock: Q.codeBlock,
              ateSpace: Q.ateSpace
            };
          },
          token: function(Q, K) {
            if (K.combineTokens = null, K.codeBlock)
              return Q.match(/^```+/) ? (K.codeBlock = !1, null) : (Q.skipToEnd(), null);
            if (Q.sol() && (K.code = !1), Q.sol() && Q.match(/^```+/))
              return Q.skipToEnd(), K.codeBlock = !0, null;
            if (Q.peek() === "`") {
              Q.next();
              var ue = Q.pos;
              Q.eatWhile("`");
              var ne = 1 + Q.pos - ue;
              return K.code ? ne === O && (K.code = !1) : (O = ne, K.code = !0), null;
            } else if (K.code)
              return Q.next(), null;
            if (Q.eatSpace())
              return K.ateSpace = !0, null;
            if ((Q.sol() || K.ateSpace) && (K.ateSpace = !1, N.gitHubSpice !== !1)) {
              if (Q.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/))
                return K.combineTokens = !0, "link";
              if (Q.match(/^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/))
                return K.combineTokens = !0, "link";
            }
            return Q.match(P) && Q.string.slice(Q.start - 2, Q.start) != "](" && (Q.start == 0 || /\W/.test(Q.string.charAt(Q.start - 1))) ? (K.combineTokens = !0, "link") : (Q.next(), null);
          },
          blankLine: W
        }, _ = {
          taskLists: !0,
          strikethrough: !0,
          emoji: !0
        };
        for (var ee in N)
          _[ee] = N[ee];
        return _.name = "markdown", D.overlayMode(D.getMode(S, _), B);
      }, "markdown"), D.defineMIME("text/x-gfm", "gfm");
    });
  })()), Zl.exports;
}
function jf(ae) {
  throw new Error('Could not dynamically require "' + ae + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var ma = { exports: {} };
const Kf = {}, Xf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kf
}, Symbol.toStringTag, { value: "Module" })), Yf = /* @__PURE__ */ Of(Xf);
var $l;
function Zf() {
  return $l || ($l = 1, (function(ae) {
    var le;
    (function() {
      le = function(D, P, S, N) {
        N = N || {}, this.dictionary = null, this.rules = {}, this.dictionaryTable = {}, this.compoundRules = [], this.compoundRuleCodes = {}, this.replacementTable = [], this.flags = N.flags || {}, this.memoized = {}, this.loaded = !1;
        var O = this, W, B, _, ee, Q;
        if (D)
          if (O.dictionary = D, P && S)
            pe();
          else if (typeof window < "u" && (window.chrome && window.chrome.runtime || window.browser && window.browser.runtime)) {
            var K = window.chrome && window.chrome.runtime ? window.chrome.runtime : window.browser.runtime;
            N.dictionaryPath ? W = N.dictionaryPath : W = "typo/dictionaries", P || ue(K.getURL(W + "/" + D + "/" + D + ".aff"), ne), S || ue(K.getURL(W + "/" + D + "/" + D + ".dic"), Ce);
          } else
            N.dictionaryPath ? W = N.dictionaryPath : typeof __dirname < "u" ? W = __dirname + "/dictionaries" : W = "./dictionaries", P || ue(W + "/" + D + "/" + D + ".aff", ne), S || ue(W + "/" + D + "/" + D + ".dic", Ce);
        function ue(oe, z) {
          var X = O._readFile(oe, null, N?.asyncLoad);
          N?.asyncLoad ? X.then(function(q) {
            z(q);
          }) : z(X);
        }
        function ne(oe) {
          P = oe, S && pe();
        }
        function Ce(oe) {
          S = oe, P && pe();
        }
        function pe() {
          for (O.rules = O._parseAFF(P), O.compoundRuleCodes = {}, B = 0, ee = O.compoundRules.length; B < ee; B++) {
            var oe = O.compoundRules[B];
            for (_ = 0, Q = oe.length; _ < Q; _++)
              O.compoundRuleCodes[oe[_]] = [];
          }
          "ONLYINCOMPOUND" in O.flags && (O.compoundRuleCodes[O.flags.ONLYINCOMPOUND] = []), O.dictionaryTable = O._parseDIC(S);
          for (B in O.compoundRuleCodes)
            O.compoundRuleCodes[B].length === 0 && delete O.compoundRuleCodes[B];
          for (B = 0, ee = O.compoundRules.length; B < ee; B++) {
            var z = O.compoundRules[B], X = "";
            for (_ = 0, Q = z.length; _ < Q; _++) {
              var q = z[_];
              q in O.compoundRuleCodes ? X += "(" + O.compoundRuleCodes[q].join("|") + ")" : X += q;
            }
            O.compoundRules[B] = new RegExp("^" + X + "$", "i");
          }
          O.loaded = !0, N?.asyncLoad && N?.loadedCallback && N.loadedCallback(O);
        }
        return this;
      }, le.prototype = {
        /**
         * Loads a Typo instance from a hash of all of the Typo properties.
         *
         * @param {object} obj A hash of Typo properties, probably gotten from a JSON.parse(JSON.stringify(typo_instance)).
         */
        load: function(D) {
          for (var P in D)
            D.hasOwnProperty(P) && (this[P] = D[P]);
          return this;
        },
        /**
         * Read the contents of a file.
         *
         * @param {string} path The path (relative) to the file.
         * @param {string} [charset="ISO8859-1"] The expected charset of the file
         * @param {boolean} async If true, the file will be read asynchronously. For node.js this does nothing, all
         *        files are read synchronously.
         * @returns {string} The file data if async is false, otherwise a promise object. If running node.js, the data is
         *          always returned.
         */
        _readFile: function(D, P, S) {
          var N;
          if (P = P || "utf8", typeof XMLHttpRequest < "u") {
            var O = new XMLHttpRequest();
            if (O.open("GET", D, !!S), (N = O.overrideMimeType) === null || N === void 0 || N.call(O, "text/plain; charset=" + P), S) {
              var W = new Promise(function(_, ee) {
                O.onload = function() {
                  O.status === 200 ? _(O.responseText) : ee(O.statusText);
                }, O.onerror = function() {
                  ee(O.statusText);
                };
              });
              return O.send(null), W;
            } else
              return O.send(null), O.responseText;
          } else if (typeof jf < "u") {
            var B = Yf;
            try {
              if (B.existsSync(D))
                return B.readFileSync(D, P);
              console.log("Path " + D + " does not exist.");
            } catch (_) {
              console.log(_);
            }
            return "";
          }
          return "";
        },
        /**
         * Parse the rules out from a .aff file.
         *
         * @param {string} data The contents of the affix file.
         * @returns object The rules from the file.
         */
        _parseAFF: function(D) {
          var P = {}, S, N, O, W, B, _, ee, Q, K = D.split(/\r?\n/);
          for (B = 0, ee = K.length; B < ee; B++)
            if (S = this._removeAffixComments(K[B]), S = S.trim(), !!S) {
              var ue = S.split(/\s+/), ne = ue[0];
              if (ne === "PFX" || ne === "SFX") {
                var Ce = ue[1], pe = ue[2];
                O = parseInt(ue[3], 10);
                var oe = [];
                for (_ = B + 1, Q = B + 1 + O; _ < Q; _++) {
                  N = K[_], W = N.split(/\s+/);
                  var z = W[2], X = W[3].split("/"), q = X[0];
                  q === "0" && (q = "");
                  var j = this.parseRuleCodes(X[1]), he = W[4], Z = {
                    add: q
                  };
                  j.length > 0 && (Z.continuationClasses = j), he !== "." && (ne === "SFX" ? Z.match = new RegExp(he + "$") : Z.match = new RegExp("^" + he)), z != "0" && (ne === "SFX" ? Z.remove = new RegExp(z + "$") : Z.remove = z), oe.push(Z);
                }
                P[Ce] = { type: ne, combineable: pe === "Y", entries: oe }, B += O;
              } else if (ne === "COMPOUNDRULE") {
                for (O = parseInt(ue[1], 10), _ = B + 1, Q = B + 1 + O; _ < Q; _++)
                  S = K[_], W = S.split(/\s+/), this.compoundRules.push(W[1]);
                B += O;
              } else ne === "REP" ? (W = S.split(/\s+/), W.length === 3 && this.replacementTable.push([W[1], W[2]])) : this.flags[ne] = ue[1];
            }
          return P;
        },
        /**
         * Removes comments.
         *
         * @param {string} data A line from an affix file.
         * @return {string} The cleaned-up line.
         */
        _removeAffixComments: function(D) {
          return D.match(/^\s*#/) ? "" : D;
        },
        /**
         * Parses the words out from the .dic file.
         *
         * @param {string} data The data from the dictionary file.
         * @returns HashMap The lookup table containing all of the words and
         *                 word forms from the dictionary.
         */
        _parseDIC: function(D) {
          D = this._removeDicComments(D);
          var P = D.split(/\r?\n/), S = {};
          function N(Le, Ee) {
            S.hasOwnProperty(Le) || (S[Le] = null), Ee.length > 0 && (S[Le] === null && (S[Le] = []), S[Le].push(Ee));
          }
          for (var O = 1, W = P.length; O < W; O++) {
            var B = P[O];
            if (B) {
              var _ = B.replace(/\s.*$/, ""), ee = _.split("/", 2), Q = ee[0];
              if (ee.length > 1) {
                var K = this.parseRuleCodes(ee[1]);
                (!("NEEDAFFIX" in this.flags) || K.indexOf(this.flags.NEEDAFFIX) === -1) && N(Q, K);
                for (var ue = 0, ne = K.length; ue < ne; ue++) {
                  var Ce = K[ue], pe = this.rules[Ce];
                  if (pe)
                    for (var oe = this._applyRule(Q, pe), z = 0, X = oe.length; z < X; z++) {
                      var q = oe[z];
                      if (N(q, []), pe.combineable)
                        for (var j = ue + 1; j < ne; j++) {
                          var he = K[j], Z = this.rules[he];
                          if (Z && Z.combineable && pe.type != Z.type)
                            for (var de = this._applyRule(q, Z), xe = 0, Ue = de.length; xe < Ue; xe++) {
                              var se = de[xe];
                              N(se, []);
                            }
                        }
                    }
                  Ce in this.compoundRuleCodes && this.compoundRuleCodes[Ce].push(Q);
                }
              } else
                N(Q.trim(), []);
            }
          }
          return S;
        },
        /**
         * Removes comment lines and then cleans up blank lines and trailing whitespace.
         *
         * @param {string} data The data from a .dic file.
         * @return {string} The cleaned-up data.
         */
        _removeDicComments: function(D) {
          return D = D.replace(/^\t.*$/mg, ""), D;
        },
        parseRuleCodes: function(D) {
          if (D)
            if ("FLAG" in this.flags)
              if (this.flags.FLAG === "long") {
                for (var P = [], S = 0, N = D.length; S < N; S += 2)
                  P.push(D.substr(S, 2));
                return P;
              } else return this.flags.FLAG === "num" ? D.split(",") : this.flags.FLAG === "UTF-8" ? Array.from(D) : D.split("");
            else return D.split("");
          else return [];
        },
        /**
         * Applies an affix rule to a word.
         *
         * @param {string} word The base word.
         * @param {Object} rule The affix rule.
         * @returns {string[]} The new words generated by the rule.
         */
        _applyRule: function(D, P) {
          for (var S = P.entries, N = [], O = 0, W = S.length; O < W; O++) {
            var B = S[O];
            if (!B.match || D.match(B.match)) {
              var _ = D;
              if (B.remove && (_ = _.replace(B.remove, "")), P.type === "SFX" ? _ = _ + B.add : _ = B.add + _, N.push(_), "continuationClasses" in B)
                for (var ee = 0, Q = B.continuationClasses.length; ee < Q; ee++) {
                  var K = this.rules[B.continuationClasses[ee]];
                  K && (N = N.concat(this._applyRule(_, K)));
                }
            }
          }
          return N;
        },
        /**
         * Checks whether a word or a capitalization variant exists in the current dictionary.
         * The word is trimmed and several variations of capitalizations are checked.
         * If you want to check a word without any changes made to it, call checkExact()
         *
         * @see http://blog.stevenlevithan.com/archives/faster-trim-javascript re:trimming function
         *
         * @param {string} aWord The word to check.
         * @returns {boolean}
         */
        check: function(D) {
          if (!this.loaded)
            throw "Dictionary not loaded.";
          if (!D)
            return !1;
          var P = D.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
          if (this.checkExact(P))
            return !0;
          if (P.toUpperCase() === P) {
            var S = P[0] + P.substring(1).toLowerCase();
            if (this.hasFlag(S, "KEEPCASE"))
              return !1;
            if (this.checkExact(S) || this.checkExact(P.toLowerCase()))
              return !0;
          }
          var N = P[0].toLowerCase() + P.substring(1);
          if (N !== P) {
            if (this.hasFlag(N, "KEEPCASE"))
              return !1;
            if (this.checkExact(N))
              return !0;
          }
          return !1;
        },
        /**
         * Checks whether a word exists in the current dictionary.
         *
         * @param {string} word The word to check.
         * @returns {boolean}
         */
        checkExact: function(D) {
          if (!this.loaded)
            throw "Dictionary not loaded.";
          var P = this.dictionaryTable[D], S, N;
          if (typeof P > "u") {
            if ("COMPOUNDMIN" in this.flags && D.length >= this.flags.COMPOUNDMIN) {
              for (S = 0, N = this.compoundRules.length; S < N; S++)
                if (D.match(this.compoundRules[S]))
                  return !0;
            }
          } else {
            if (P === null)
              return !0;
            if (typeof P == "object") {
              for (S = 0, N = P.length; S < N; S++)
                if (!this.hasFlag(D, "ONLYINCOMPOUND", P[S]))
                  return !0;
            }
          }
          return !1;
        },
        /**
         * Looks up whether a given word is flagged with a given flag.
         *
         * @param {string} word The word in question.
         * @param {string} flag The flag in question.
         * @return {boolean}
         */
        hasFlag: function(D, P, S) {
          if (!this.loaded)
            throw "Dictionary not loaded.";
          return !!(P in this.flags && (typeof S > "u" && (S = Array.prototype.concat.apply([], this.dictionaryTable[D])), S && S.indexOf(this.flags[P]) !== -1));
        },
        /**
         * Returns a list of suggestions for a misspelled word.
         *
         * @see http://www.norvig.com/spell-correct.html for the basis of this suggestor.
         * This suggestor is primitive, but it works.
         *
         * @param {string} word The misspelling.
         * @param {number} [limit=5] The maximum number of suggestions to return.
         * @returns {string[]} The array of suggestions.
         */
        alphabet: "",
        suggest: function(D, P) {
          if (!this.loaded)
            throw "Dictionary not loaded.";
          if (P = P || 5, this.memoized.hasOwnProperty(D)) {
            var S = this.memoized[D].limit;
            if (P <= S || this.memoized[D].suggestions.length < S)
              return this.memoized[D].suggestions.slice(0, P);
          }
          if (this.check(D))
            return [];
          for (var N = 0, O = this.replacementTable.length; N < O; N++) {
            var W = this.replacementTable[N];
            if (D.indexOf(W[0]) !== -1) {
              var B = D.replace(W[0], W[1]);
              if (this.check(B))
                return [B];
            }
          }
          if (!this.alphabet) {
            this.alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", "TRY" in this.flags && (this.alphabet += this.flags.TRY), "WORDCHARS" in this.flags && (this.alphabet += this.flags.WORDCHARS);
            var _ = this.alphabet.split("");
            _.sort();
            for (var ee = {}, N = 0; N < _.length; N++)
              ee[_[N]] = !0;
            this.alphabet = "";
            for (var N in ee)
              this.alphabet += N;
          }
          var Q = this;
          function K(ne, Ce) {
            var pe = {}, oe, z, X, q, j = Q.alphabet.length;
            for (var he in ne)
              for (oe = 0, X = he.length + 1; oe < X; oe++) {
                var Z = [he.substring(0, oe), he.substring(oe)];
                if (Z[1] && (q = Z[0] + Z[1].substring(1), (!Ce || Q.check(q)) && (q in pe ? pe[q] += 1 : pe[q] = 1)), Z[1].length > 1 && Z[1][1] !== Z[1][0] && (q = Z[0] + Z[1][1] + Z[1][0] + Z[1].substring(2), (!Ce || Q.check(q)) && (q in pe ? pe[q] += 1 : pe[q] = 1)), Z[1]) {
                  var de = Z[1].substring(0, 1).toUpperCase() === Z[1].substring(0, 1) ? "uppercase" : "lowercase";
                  for (z = 0; z < j; z++) {
                    var xe = Q.alphabet[z];
                    de === "uppercase" && (xe = xe.toUpperCase()), xe != Z[1].substring(0, 1) && (q = Z[0] + xe + Z[1].substring(1), (!Ce || Q.check(q)) && (q in pe ? pe[q] += 1 : pe[q] = 1));
                  }
                }
                if (Z[1])
                  for (z = 0; z < j; z++) {
                    var de = Z[0].substring(-1).toUpperCase() === Z[0].substring(-1) && Z[1].substring(0, 1).toUpperCase() === Z[1].substring(0, 1) ? "uppercase" : "lowercase", xe = Q.alphabet[z];
                    de === "uppercase" && (xe = xe.toUpperCase()), q = Z[0] + xe + Z[1], (!Ce || Q.check(q)) && (q in pe ? pe[q] += 1 : pe[q] = 1);
                  }
              }
            return pe;
          }
          function ue(ne) {
            var Ce, pe = K((Ce = {}, Ce[ne] = !0, Ce)), oe = K(pe, !0), z = oe;
            for (var X in pe)
              Q.check(X) && (X in z ? z[X] += pe[X] : z[X] = pe[X]);
            var q, j = [];
            for (q in z)
              z.hasOwnProperty(q) && (Q.hasFlag(q, "PRIORITYSUGGEST") && (z[q] += 1e3), j.push([q, z[q]]));
            function he(Ue, se) {
              var Le = Ue[1], Ee = se[1];
              return Le < Ee ? -1 : Le > Ee ? 1 : se[0].localeCompare(Ue[0]);
            }
            j.sort(he).reverse();
            var Z = [], de = "lowercase";
            ne.toUpperCase() === ne ? de = "uppercase" : ne.substr(0, 1).toUpperCase() + ne.substr(1).toLowerCase() === ne && (de = "capitalized");
            var xe = P;
            for (q = 0; q < Math.min(xe, j.length); q++)
              de === "uppercase" ? j[q][0] = j[q][0].toUpperCase() : de === "capitalized" && (j[q][0] = j[q][0].substr(0, 1).toUpperCase() + j[q][0].substr(1)), !Q.hasFlag(j[q][0], "NOSUGGEST") && Z.indexOf(j[q][0]) === -1 ? Z.push(j[q][0]) : xe++;
            return Z;
          }
          return this.memoized[D] = {
            suggestions: ue(D),
            limit: P
          }, this.memoized[D].suggestions;
        }
      };
    })(), ae.exports = le;
  })(ma)), ma.exports;
}
var ya, Jl;
function Qf() {
  if (Jl) return ya;
  Jl = 1;
  var ae = Zf();
  function le(D) {
    if (D = D || {}, typeof D.codeMirrorInstance != "function" || typeof D.codeMirrorInstance.defineMode != "function") {
      console.log("CodeMirror Spell Checker: You must provide an instance of CodeMirror via the option `codeMirrorInstance`");
      return;
    }
    String.prototype.includes || (String.prototype.includes = function() {
      return String.prototype.indexOf.apply(this, arguments) !== -1;
    }), D.codeMirrorInstance.defineMode("spell-checker", function(P) {
      if (!le.aff_loading) {
        le.aff_loading = !0;
        var S = new XMLHttpRequest();
        S.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.aff", !0), S.onload = function() {
          S.readyState === 4 && S.status === 200 && (le.aff_data = S.responseText, le.num_loaded++, le.num_loaded == 2 && (le.typo = new ae("en_US", le.aff_data, le.dic_data, {
            platform: "any"
          })));
        }, S.send(null);
      }
      if (!le.dic_loading) {
        le.dic_loading = !0;
        var N = new XMLHttpRequest();
        N.open("GET", "https://cdn.jsdelivr.net/codemirror.spell-checker/latest/en_US.dic", !0), N.onload = function() {
          N.readyState === 4 && N.status === 200 && (le.dic_data = N.responseText, le.num_loaded++, le.num_loaded == 2 && (le.typo = new ae("en_US", le.aff_data, le.dic_data, {
            platform: "any"
          })));
        }, N.send(null);
      }
      var O = '!"#$%&()*+,-./:;<=>?@[\\]^_`{|}~ ', W = {
        token: function(_) {
          var ee = _.peek(), Q = "";
          if (O.includes(ee))
            return _.next(), null;
          for (; (ee = _.peek()) != null && !O.includes(ee); )
            Q += ee, _.next();
          return le.typo && !le.typo.check(Q) ? "spell-error" : null;
        }
      }, B = D.codeMirrorInstance.getMode(
        P,
        P.backdrop || "text/plain"
      );
      return D.codeMirrorInstance.overlayMode(B, W, !0);
    });
  }
  return le.num_loaded = 0, le.aff_loading = !1, le.dic_loading = !1, le.aff_data = "", le.dic_data = "", le.typo, ya = le, ya;
}
var xa = {}, Vl;
function $f() {
  return Vl || (Vl = 1, (function(ae) {
    function le(H, R) {
      for (var A = 0; A < R.length; A++) {
        var d = R[A];
        d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(H, B(d.key), d);
      }
    }
    function D(H, R, A) {
      return A && le(H, A), Object.defineProperty(H, "prototype", {
        writable: !1
      }), H;
    }
    function P() {
      return P = Object.assign ? Object.assign.bind() : function(H) {
        for (var R = 1; R < arguments.length; R++) {
          var A = arguments[R];
          for (var d in A)
            Object.prototype.hasOwnProperty.call(A, d) && (H[d] = A[d]);
        }
        return H;
      }, P.apply(this, arguments);
    }
    function S(H, R) {
      if (H) {
        if (typeof H == "string") return N(H, R);
        var A = Object.prototype.toString.call(H).slice(8, -1);
        if (A === "Object" && H.constructor && (A = H.constructor.name), A === "Map" || A === "Set") return Array.from(H);
        if (A === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(A)) return N(H, R);
      }
    }
    function N(H, R) {
      (R == null || R > H.length) && (R = H.length);
      for (var A = 0, d = new Array(R); A < R; A++) d[A] = H[A];
      return d;
    }
    function O(H, R) {
      var A = typeof Symbol < "u" && H[Symbol.iterator] || H["@@iterator"];
      if (A) return (A = A.call(H)).next.bind(A);
      if (Array.isArray(H) || (A = S(H)) || R) {
        A && (H = A);
        var d = 0;
        return function() {
          return d >= H.length ? {
            done: !0
          } : {
            done: !1,
            value: H[d++]
          };
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function W(H, R) {
      if (typeof H != "object" || H === null) return H;
      var A = H[Symbol.toPrimitive];
      if (A !== void 0) {
        var d = A.call(H, R);
        if (typeof d != "object") return d;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return String(H);
    }
    function B(H) {
      var R = W(H, "string");
      return typeof R == "symbol" ? R : String(R);
    }
    function _() {
      return {
        async: !1,
        baseUrl: null,
        breaks: !1,
        extensions: null,
        gfm: !0,
        headerIds: !0,
        headerPrefix: "",
        highlight: null,
        hooks: null,
        langPrefix: "language-",
        mangle: !0,
        pedantic: !1,
        renderer: null,
        sanitize: !1,
        sanitizer: null,
        silent: !1,
        smartypants: !1,
        tokenizer: null,
        walkTokens: null,
        xhtml: !1
      };
    }
    ae.defaults = _();
    function ee(H) {
      ae.defaults = H;
    }
    var Q = /[&<>"']/, K = new RegExp(Q.source, "g"), ue = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/, ne = new RegExp(ue.source, "g"), Ce = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, pe = function(R) {
      return Ce[R];
    };
    function oe(H, R) {
      if (R) {
        if (Q.test(H))
          return H.replace(K, pe);
      } else if (ue.test(H))
        return H.replace(ne, pe);
      return H;
    }
    var z = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
    function X(H) {
      return H.replace(z, function(R, A) {
        return A = A.toLowerCase(), A === "colon" ? ":" : A.charAt(0) === "#" ? A.charAt(1) === "x" ? String.fromCharCode(parseInt(A.substring(2), 16)) : String.fromCharCode(+A.substring(1)) : "";
      });
    }
    var q = /(^|[^\[])\^/g;
    function j(H, R) {
      H = typeof H == "string" ? H : H.source, R = R || "";
      var A = {
        replace: function(h, w) {
          return w = w.source || w, w = w.replace(q, "$1"), H = H.replace(h, w), A;
        },
        getRegex: function() {
          return new RegExp(H, R);
        }
      };
      return A;
    }
    var he = /[^\w:]/g, Z = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
    function de(H, R, A) {
      if (H) {
        var d;
        try {
          d = decodeURIComponent(X(A)).replace(he, "").toLowerCase();
        } catch {
          return null;
        }
        if (d.indexOf("javascript:") === 0 || d.indexOf("vbscript:") === 0 || d.indexOf("data:") === 0)
          return null;
      }
      R && !Z.test(A) && (A = Ee(R, A));
      try {
        A = encodeURI(A).replace(/%25/g, "%");
      } catch {
        return null;
      }
      return A;
    }
    var xe = {}, Ue = /^[^:]+:\/*[^/]*$/, se = /^([^:]+:)[\s\S]*$/, Le = /^([^:]+:\/*[^/]*)[\s\S]*$/;
    function Ee(H, R) {
      xe[" " + H] || (Ue.test(H) ? xe[" " + H] = H + "/" : xe[" " + H] = te(H, "/", !0)), H = xe[" " + H];
      var A = H.indexOf(":") === -1;
      return R.substring(0, 2) === "//" ? A ? R : H.replace(se, "$1") + R : R.charAt(0) === "/" ? A ? R : H.replace(Le, "$1") + R : H + R;
    }
    var He = {
      exec: function() {
      }
    };
    function L(H, R) {
      var A = H.replace(/\|/g, function(w, l, f) {
        for (var v = !1, y = l; --y >= 0 && f[y] === "\\"; )
          v = !v;
        return v ? "|" : " |";
      }), d = A.split(/ \|/), h = 0;
      if (d[0].trim() || d.shift(), d.length > 0 && !d[d.length - 1].trim() && d.pop(), d.length > R)
        d.splice(R);
      else
        for (; d.length < R; )
          d.push("");
      for (; h < d.length; h++)
        d[h] = d[h].trim().replace(/\\\|/g, "|");
      return d;
    }
    function te(H, R, A) {
      var d = H.length;
      if (d === 0)
        return "";
      for (var h = 0; h < d; ) {
        var w = H.charAt(d - h - 1);
        if (w === R && !A)
          h++;
        else if (w !== R && A)
          h++;
        else
          break;
      }
      return H.slice(0, d - h);
    }
    function $(H, R) {
      if (H.indexOf(R[1]) === -1)
        return -1;
      for (var A = H.length, d = 0, h = 0; h < A; h++)
        if (H[h] === "\\")
          h++;
        else if (H[h] === R[0])
          d++;
        else if (H[h] === R[1] && (d--, d < 0))
          return h;
      return -1;
    }
    function be(H) {
      H && H.sanitize && !H.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options");
    }
    function _e(H, R) {
      if (R < 1)
        return "";
      for (var A = ""; R > 1; )
        R & 1 && (A += H), R >>= 1, H += H;
      return A + H;
    }
    function rt(H, R, A, d) {
      var h = R.href, w = R.title ? oe(R.title) : null, l = H[1].replace(/\\([\[\]])/g, "$1");
      if (H[0].charAt(0) !== "!") {
        d.state.inLink = !0;
        var f = {
          type: "link",
          raw: A,
          href: h,
          title: w,
          text: l,
          tokens: d.inlineTokens(l)
        };
        return d.state.inLink = !1, f;
      }
      return {
        type: "image",
        raw: A,
        href: h,
        title: w,
        text: oe(l)
      };
    }
    function Wt(H, R) {
      var A = H.match(/^(\s+)(?:```)/);
      if (A === null)
        return R;
      var d = A[1];
      return R.split(`
`).map(function(h) {
        var w = h.match(/^\s+/);
        if (w === null)
          return h;
        var l = w[0];
        return l.length >= d.length ? h.slice(d.length) : h;
      }).join(`
`);
    }
    var b = /* @__PURE__ */ (function() {
      function H(A) {
        this.options = A || ae.defaults;
      }
      var R = H.prototype;
      return R.space = function(d) {
        var h = this.rules.block.newline.exec(d);
        if (h && h[0].length > 0)
          return {
            type: "space",
            raw: h[0]
          };
      }, R.code = function(d) {
        var h = this.rules.block.code.exec(d);
        if (h) {
          var w = h[0].replace(/^ {1,4}/gm, "");
          return {
            type: "code",
            raw: h[0],
            codeBlockStyle: "indented",
            text: this.options.pedantic ? w : te(w, `
`)
          };
        }
      }, R.fences = function(d) {
        var h = this.rules.block.fences.exec(d);
        if (h) {
          var w = h[0], l = Wt(w, h[3] || "");
          return {
            type: "code",
            raw: w,
            lang: h[2] ? h[2].trim().replace(this.rules.inline._escapes, "$1") : h[2],
            text: l
          };
        }
      }, R.heading = function(d) {
        var h = this.rules.block.heading.exec(d);
        if (h) {
          var w = h[2].trim();
          if (/#$/.test(w)) {
            var l = te(w, "#");
            (this.options.pedantic || !l || / $/.test(l)) && (w = l.trim());
          }
          return {
            type: "heading",
            raw: h[0],
            depth: h[1].length,
            text: w,
            tokens: this.lexer.inline(w)
          };
        }
      }, R.hr = function(d) {
        var h = this.rules.block.hr.exec(d);
        if (h)
          return {
            type: "hr",
            raw: h[0]
          };
      }, R.blockquote = function(d) {
        var h = this.rules.block.blockquote.exec(d);
        if (h) {
          var w = h[0].replace(/^ *>[ \t]?/gm, ""), l = this.lexer.state.top;
          this.lexer.state.top = !0;
          var f = this.lexer.blockTokens(w);
          return this.lexer.state.top = l, {
            type: "blockquote",
            raw: h[0],
            tokens: f,
            text: w
          };
        }
      }, R.list = function(d) {
        var h = this.rules.block.list.exec(d);
        if (h) {
          var w, l, f, v, y, C, I, k, x, M, E, ie, me = h[1].trim(), ye = me.length > 1, re = {
            type: "list",
            raw: "",
            ordered: ye,
            start: ye ? +me.slice(0, -1) : "",
            loose: !1,
            items: []
          };
          me = ye ? "\\d{1,9}\\" + me.slice(-1) : "\\" + me, this.options.pedantic && (me = ye ? me : "[*+-]");
          for (var Be = new RegExp("^( {0,3}" + me + ")((?:[	 ][^\\n]*)?(?:\\n|$))"); d && (ie = !1, !(!(h = Be.exec(d)) || this.rules.block.hr.test(d))); ) {
            if (w = h[0], d = d.substring(w.length), k = h[2].split(`
`, 1)[0].replace(/^\t+/, function(bt) {
              return " ".repeat(3 * bt.length);
            }), x = d.split(`
`, 1)[0], this.options.pedantic ? (v = 2, E = k.trimLeft()) : (v = h[2].search(/[^ ]/), v = v > 4 ? 1 : v, E = k.slice(v), v += h[1].length), C = !1, !k && /^ *$/.test(x) && (w += x + `
`, d = d.substring(x.length + 1), ie = !0), !ie)
              for (var Me = new RegExp("^ {0," + Math.min(3, v - 1) + "}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))"), Ne = new RegExp("^ {0," + Math.min(3, v - 1) + "}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)"), Ae = new RegExp("^ {0," + Math.min(3, v - 1) + "}(?:```|~~~)"), Xe = new RegExp("^ {0," + Math.min(3, v - 1) + "}#"); d && (M = d.split(`
`, 1)[0], x = M, this.options.pedantic && (x = x.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !(Ae.test(x) || Xe.test(x) || Me.test(x) || Ne.test(d))); ) {
                if (x.search(/[^ ]/) >= v || !x.trim())
                  E += `
` + x.slice(v);
                else {
                  if (C || k.search(/[^ ]/) >= 4 || Ae.test(k) || Xe.test(k) || Ne.test(k))
                    break;
                  E += `
` + x;
                }
                !C && !x.trim() && (C = !0), w += M + `
`, d = d.substring(M.length + 1), k = x.slice(v);
              }
            re.loose || (I ? re.loose = !0 : /\n *\n *$/.test(w) && (I = !0)), this.options.gfm && (l = /^\[[ xX]\] /.exec(E), l && (f = l[0] !== "[ ] ", E = E.replace(/^\[[ xX]\] +/, ""))), re.items.push({
              type: "list_item",
              raw: w,
              task: !!l,
              checked: f,
              loose: !1,
              text: E
            }), re.raw += w;
          }
          re.items[re.items.length - 1].raw = w.trimRight(), re.items[re.items.length - 1].text = E.trimRight(), re.raw = re.raw.trimRight();
          var Ze = re.items.length;
          for (y = 0; y < Ze; y++)
            if (this.lexer.state.top = !1, re.items[y].tokens = this.lexer.blockTokens(re.items[y].text, []), !re.loose) {
              var ut = re.items[y].tokens.filter(function(bt) {
                return bt.type === "space";
              }), kt = ut.length > 0 && ut.some(function(bt) {
                return /\n.*\n/.test(bt.raw);
              });
              re.loose = kt;
            }
          if (re.loose)
            for (y = 0; y < Ze; y++)
              re.items[y].loose = !0;
          return re;
        }
      }, R.html = function(d) {
        var h = this.rules.block.html.exec(d);
        if (h) {
          var w = {
            type: "html",
            raw: h[0],
            pre: !this.options.sanitizer && (h[1] === "pre" || h[1] === "script" || h[1] === "style"),
            text: h[0]
          };
          if (this.options.sanitize) {
            var l = this.options.sanitizer ? this.options.sanitizer(h[0]) : oe(h[0]);
            w.type = "paragraph", w.text = l, w.tokens = this.lexer.inline(l);
          }
          return w;
        }
      }, R.def = function(d) {
        var h = this.rules.block.def.exec(d);
        if (h) {
          var w = h[1].toLowerCase().replace(/\s+/g, " "), l = h[2] ? h[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "", f = h[3] ? h[3].substring(1, h[3].length - 1).replace(this.rules.inline._escapes, "$1") : h[3];
          return {
            type: "def",
            tag: w,
            raw: h[0],
            href: l,
            title: f
          };
        }
      }, R.table = function(d) {
        var h = this.rules.block.table.exec(d);
        if (h) {
          var w = {
            type: "table",
            header: L(h[1]).map(function(I) {
              return {
                text: I
              };
            }),
            align: h[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
            rows: h[3] && h[3].trim() ? h[3].replace(/\n[ \t]*$/, "").split(`
`) : []
          };
          if (w.header.length === w.align.length) {
            w.raw = h[0];
            var l = w.align.length, f, v, y, C;
            for (f = 0; f < l; f++)
              /^ *-+: *$/.test(w.align[f]) ? w.align[f] = "right" : /^ *:-+: *$/.test(w.align[f]) ? w.align[f] = "center" : /^ *:-+ *$/.test(w.align[f]) ? w.align[f] = "left" : w.align[f] = null;
            for (l = w.rows.length, f = 0; f < l; f++)
              w.rows[f] = L(w.rows[f], w.header.length).map(function(I) {
                return {
                  text: I
                };
              });
            for (l = w.header.length, v = 0; v < l; v++)
              w.header[v].tokens = this.lexer.inline(w.header[v].text);
            for (l = w.rows.length, v = 0; v < l; v++)
              for (C = w.rows[v], y = 0; y < C.length; y++)
                C[y].tokens = this.lexer.inline(C[y].text);
            return w;
          }
        }
      }, R.lheading = function(d) {
        var h = this.rules.block.lheading.exec(d);
        if (h)
          return {
            type: "heading",
            raw: h[0],
            depth: h[2].charAt(0) === "=" ? 1 : 2,
            text: h[1],
            tokens: this.lexer.inline(h[1])
          };
      }, R.paragraph = function(d) {
        var h = this.rules.block.paragraph.exec(d);
        if (h) {
          var w = h[1].charAt(h[1].length - 1) === `
` ? h[1].slice(0, -1) : h[1];
          return {
            type: "paragraph",
            raw: h[0],
            text: w,
            tokens: this.lexer.inline(w)
          };
        }
      }, R.text = function(d) {
        var h = this.rules.block.text.exec(d);
        if (h)
          return {
            type: "text",
            raw: h[0],
            text: h[0],
            tokens: this.lexer.inline(h[0])
          };
      }, R.escape = function(d) {
        var h = this.rules.inline.escape.exec(d);
        if (h)
          return {
            type: "escape",
            raw: h[0],
            text: oe(h[1])
          };
      }, R.tag = function(d) {
        var h = this.rules.inline.tag.exec(d);
        if (h)
          return !this.lexer.state.inLink && /^<a /i.test(h[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(h[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(h[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(h[0]) && (this.lexer.state.inRawBlock = !1), {
            type: this.options.sanitize ? "text" : "html",
            raw: h[0],
            inLink: this.lexer.state.inLink,
            inRawBlock: this.lexer.state.inRawBlock,
            text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(h[0]) : oe(h[0]) : h[0]
          };
      }, R.link = function(d) {
        var h = this.rules.inline.link.exec(d);
        if (h) {
          var w = h[2].trim();
          if (!this.options.pedantic && /^</.test(w)) {
            if (!/>$/.test(w))
              return;
            var l = te(w.slice(0, -1), "\\");
            if ((w.length - l.length) % 2 === 0)
              return;
          } else {
            var f = $(h[2], "()");
            if (f > -1) {
              var v = h[0].indexOf("!") === 0 ? 5 : 4, y = v + h[1].length + f;
              h[2] = h[2].substring(0, f), h[0] = h[0].substring(0, y).trim(), h[3] = "";
            }
          }
          var C = h[2], I = "";
          if (this.options.pedantic) {
            var k = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(C);
            k && (C = k[1], I = k[3]);
          } else
            I = h[3] ? h[3].slice(1, -1) : "";
          return C = C.trim(), /^</.test(C) && (this.options.pedantic && !/>$/.test(w) ? C = C.slice(1) : C = C.slice(1, -1)), rt(h, {
            href: C && C.replace(this.rules.inline._escapes, "$1"),
            title: I && I.replace(this.rules.inline._escapes, "$1")
          }, h[0], this.lexer);
        }
      }, R.reflink = function(d, h) {
        var w;
        if ((w = this.rules.inline.reflink.exec(d)) || (w = this.rules.inline.nolink.exec(d))) {
          var l = (w[2] || w[1]).replace(/\s+/g, " ");
          if (l = h[l.toLowerCase()], !l) {
            var f = w[0].charAt(0);
            return {
              type: "text",
              raw: f,
              text: f
            };
          }
          return rt(w, l, w[0], this.lexer);
        }
      }, R.emStrong = function(d, h, w) {
        w === void 0 && (w = "");
        var l = this.rules.inline.emStrong.lDelim.exec(d);
        if (l && !(l[3] && w.match(/(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDD70-\uDD7A\uDD7C-\uDD8A\uDD8C-\uDD92\uDD94\uDD95\uDD97-\uDDA1\uDDA3-\uDDB1\uDDB3-\uDDB9\uDDBB\uDDBC\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67\uDF80-\uDF85\uDF87-\uDFB0\uDFB2-\uDFBA]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDF70-\uDF81\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC71\uDC72\uDC75\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B\uDF40-\uDF46]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEB0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|\uD80B[\uDF90-\uDFF0]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDE70-\uDEBE\uDEC0-\uDEC9\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82B[\uDFF0-\uDFF3\uDFF5-\uDFFB\uDFFD\uDFFE]|\uD82C[\uDC00-\uDD22\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD837[\uDF00-\uDF1E]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDE90-\uDEAD\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD839[\uDFE0-\uDFE6\uDFE8-\uDFEB\uDFED\uDFEE\uDFF0-\uDFFE]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDF\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF38\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/))) {
          var f = l[1] || l[2] || "";
          if (!f || f && (w === "" || this.rules.inline.punctuation.exec(w))) {
            var v = l[0].length - 1, y, C, I = v, k = 0, x = l[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
            for (x.lastIndex = 0, h = h.slice(-1 * d.length + v); (l = x.exec(h)) != null; )
              if (y = l[1] || l[2] || l[3] || l[4] || l[5] || l[6], !!y) {
                if (C = y.length, l[3] || l[4]) {
                  I += C;
                  continue;
                } else if ((l[5] || l[6]) && v % 3 && !((v + C) % 3)) {
                  k += C;
                  continue;
                }
                if (I -= C, !(I > 0)) {
                  C = Math.min(C, C + I + k);
                  var M = d.slice(0, v + l.index + (l[0].length - y.length) + C);
                  if (Math.min(v, C) % 2) {
                    var E = M.slice(1, -1);
                    return {
                      type: "em",
                      raw: M,
                      text: E,
                      tokens: this.lexer.inlineTokens(E)
                    };
                  }
                  var ie = M.slice(2, -2);
                  return {
                    type: "strong",
                    raw: M,
                    text: ie,
                    tokens: this.lexer.inlineTokens(ie)
                  };
                }
              }
          }
        }
      }, R.codespan = function(d) {
        var h = this.rules.inline.code.exec(d);
        if (h) {
          var w = h[2].replace(/\n/g, " "), l = /[^ ]/.test(w), f = /^ /.test(w) && / $/.test(w);
          return l && f && (w = w.substring(1, w.length - 1)), w = oe(w, !0), {
            type: "codespan",
            raw: h[0],
            text: w
          };
        }
      }, R.br = function(d) {
        var h = this.rules.inline.br.exec(d);
        if (h)
          return {
            type: "br",
            raw: h[0]
          };
      }, R.del = function(d) {
        var h = this.rules.inline.del.exec(d);
        if (h)
          return {
            type: "del",
            raw: h[0],
            text: h[2],
            tokens: this.lexer.inlineTokens(h[2])
          };
      }, R.autolink = function(d, h) {
        var w = this.rules.inline.autolink.exec(d);
        if (w) {
          var l, f;
          return w[2] === "@" ? (l = oe(this.options.mangle ? h(w[1]) : w[1]), f = "mailto:" + l) : (l = oe(w[1]), f = l), {
            type: "link",
            raw: w[0],
            text: l,
            href: f,
            tokens: [{
              type: "text",
              raw: l,
              text: l
            }]
          };
        }
      }, R.url = function(d, h) {
        var w;
        if (w = this.rules.inline.url.exec(d)) {
          var l, f;
          if (w[2] === "@")
            l = oe(this.options.mangle ? h(w[0]) : w[0]), f = "mailto:" + l;
          else {
            var v;
            do
              v = w[0], w[0] = this.rules.inline._backpedal.exec(w[0])[0];
            while (v !== w[0]);
            l = oe(w[0]), w[1] === "www." ? f = "http://" + w[0] : f = w[0];
          }
          return {
            type: "link",
            raw: w[0],
            text: l,
            href: f,
            tokens: [{
              type: "text",
              raw: l,
              text: l
            }]
          };
        }
      }, R.inlineText = function(d, h) {
        var w = this.rules.inline.text.exec(d);
        if (w) {
          var l;
          return this.lexer.state.inRawBlock ? l = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(w[0]) : oe(w[0]) : w[0] : l = oe(this.options.smartypants ? h(w[0]) : w[0]), {
            type: "text",
            raw: w[0],
            text: l
          };
        }
      }, H;
    })(), p = {
      newline: /^(?: *(?:\n|$))+/,
      code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
      fences: /^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
      hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
      heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
      blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
      list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
      html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
      def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
      table: He,
      lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      // regex template, placeholders will be replaced according to different paragraph
      // interruption rules of commonmark and the original markdown spec:
      _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
      text: /^[^\n]+/
    };
    p._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/, p._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/, p.def = j(p.def).replace("label", p._label).replace("title", p._title).getRegex(), p.bullet = /(?:[*+-]|\d{1,9}[.)])/, p.listItemStart = j(/^( *)(bull) */).replace("bull", p.bullet).getRegex(), p.list = j(p.list).replace(/bull/g, p.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + p.def.source + ")").getRegex(), p._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", p._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, p.html = j(p.html, "i").replace("comment", p._comment).replace("tag", p._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), p.paragraph = j(p._paragraph).replace("hr", p.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", p._tag).getRegex(), p.blockquote = j(p.blockquote).replace("paragraph", p.paragraph).getRegex(), p.normal = P({}, p), p.gfm = P({}, p.normal, {
      table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
      // Cells
    }), p.gfm.table = j(p.gfm.table).replace("hr", p.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", p._tag).getRegex(), p.gfm.paragraph = j(p._paragraph).replace("hr", p.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", p.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", p._tag).getRegex(), p.pedantic = P({}, p.normal, {
      html: j(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", p._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: He,
      // fences not supported
      lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
      paragraph: j(p.normal._paragraph).replace("hr", p.hr).replace("heading", ` *#{1,6} *[^
]`).replace("lheading", p.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
    });
    var G = {
      escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
      autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
      url: He,
      tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
      // CDATA section
      link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
      reflink: /^!?\[(label)\]\[(ref)\]/,
      nolink: /^!?\[(ref)\](?:\[\])?/,
      reflinkSearch: "reflink|nolink(?!\\()",
      emStrong: {
        lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
        //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
        //          () Skip orphan inside strong                                      () Consume to delim     (1) #***                (2) a***#, a***                             (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
        rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
        rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
        // ^- Not allowed for _
      },
      code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
      br: /^( {2,}|\\)\n(?!\s*$)/,
      del: He,
      text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
      punctuation: /^([\spunctuation])/
    };
    G._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", G.punctuation = j(G.punctuation).replace(/punctuation/g, G._punctuation).getRegex(), G.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, G.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g, G._comment = j(p._comment).replace("(?:-->|$)", "-->").getRegex(), G.emStrong.lDelim = j(G.emStrong.lDelim).replace(/punct/g, G._punctuation).getRegex(), G.emStrong.rDelimAst = j(G.emStrong.rDelimAst, "g").replace(/punct/g, G._punctuation).getRegex(), G.emStrong.rDelimUnd = j(G.emStrong.rDelimUnd, "g").replace(/punct/g, G._punctuation).getRegex(), G._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, G._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, G._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, G.autolink = j(G.autolink).replace("scheme", G._scheme).replace("email", G._email).getRegex(), G._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, G.tag = j(G.tag).replace("comment", G._comment).replace("attribute", G._attribute).getRegex(), G._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, G._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, G._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, G.link = j(G.link).replace("label", G._label).replace("href", G._href).replace("title", G._title).getRegex(), G.reflink = j(G.reflink).replace("label", G._label).replace("ref", p._label).getRegex(), G.nolink = j(G.nolink).replace("ref", p._label).getRegex(), G.reflinkSearch = j(G.reflinkSearch, "g").replace("reflink", G.reflink).replace("nolink", G.nolink).getRegex(), G.normal = P({}, G), G.pedantic = P({}, G.normal, {
      strong: {
        start: /^__|\*\*/,
        middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        endAst: /\*\*(?!\*)/g,
        endUnd: /__(?!_)/g
      },
      em: {
        start: /^_|\*/,
        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
        endAst: /\*(?!\*)/g,
        endUnd: /_(?!_)/g
      },
      link: j(/^!?\[(label)\]\((.*?)\)/).replace("label", G._label).getRegex(),
      reflink: j(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", G._label).getRegex()
    }), G.gfm = P({}, G.normal, {
      escape: j(G.escape).replace("])", "~|])").getRegex(),
      _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
    }), G.gfm.url = j(G.gfm.url, "i").replace("email", G.gfm._extended_email).getRegex(), G.breaks = P({}, G.gfm, {
      br: j(G.br).replace("{2,}", "*").getRegex(),
      text: j(G.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
    });
    function ze(H) {
      return H.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…");
    }
    function Te(H) {
      var R = "", A, d, h = H.length;
      for (A = 0; A < h; A++)
        d = H.charCodeAt(A), Math.random() > 0.5 && (d = "x" + d.toString(16)), R += "&#" + d + ";";
      return R;
    }
    var $e = /* @__PURE__ */ (function() {
      function H(A) {
        this.tokens = [], this.tokens.links = /* @__PURE__ */ Object.create(null), this.options = A || ae.defaults, this.options.tokenizer = this.options.tokenizer || new b(), this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
          inLink: !1,
          inRawBlock: !1,
          top: !0
        };
        var d = {
          block: p.normal,
          inline: G.normal
        };
        this.options.pedantic ? (d.block = p.pedantic, d.inline = G.pedantic) : this.options.gfm && (d.block = p.gfm, this.options.breaks ? d.inline = G.breaks : d.inline = G.gfm), this.tokenizer.rules = d;
      }
      H.lex = function(d, h) {
        var w = new H(h);
        return w.lex(d);
      }, H.lexInline = function(d, h) {
        var w = new H(h);
        return w.inlineTokens(d);
      };
      var R = H.prototype;
      return R.lex = function(d) {
        d = d.replace(/\r\n|\r/g, `
`), this.blockTokens(d, this.tokens);
        for (var h; h = this.inlineQueue.shift(); )
          this.inlineTokens(h.src, h.tokens);
        return this.tokens;
      }, R.blockTokens = function(d, h) {
        var w = this;
        h === void 0 && (h = []), this.options.pedantic ? d = d.replace(/\t/g, "    ").replace(/^ +$/gm, "") : d = d.replace(/^( *)(\t+)/gm, function(I, k, x) {
          return k + "    ".repeat(x.length);
        });
        for (var l, f, v, y; d; )
          if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some(function(I) {
            return (l = I.call({
              lexer: w
            }, d, h)) ? (d = d.substring(l.raw.length), h.push(l), !0) : !1;
          }))) {
            if (l = this.tokenizer.space(d)) {
              d = d.substring(l.raw.length), l.raw.length === 1 && h.length > 0 ? h[h.length - 1].raw += `
` : h.push(l);
              continue;
            }
            if (l = this.tokenizer.code(d)) {
              d = d.substring(l.raw.length), f = h[h.length - 1], f && (f.type === "paragraph" || f.type === "text") ? (f.raw += `
` + l.raw, f.text += `
` + l.text, this.inlineQueue[this.inlineQueue.length - 1].src = f.text) : h.push(l);
              continue;
            }
            if (l = this.tokenizer.fences(d)) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (l = this.tokenizer.heading(d)) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (l = this.tokenizer.hr(d)) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (l = this.tokenizer.blockquote(d)) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (l = this.tokenizer.list(d)) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (l = this.tokenizer.html(d)) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (l = this.tokenizer.def(d)) {
              d = d.substring(l.raw.length), f = h[h.length - 1], f && (f.type === "paragraph" || f.type === "text") ? (f.raw += `
` + l.raw, f.text += `
` + l.raw, this.inlineQueue[this.inlineQueue.length - 1].src = f.text) : this.tokens.links[l.tag] || (this.tokens.links[l.tag] = {
                href: l.href,
                title: l.title
              });
              continue;
            }
            if (l = this.tokenizer.table(d)) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (l = this.tokenizer.lheading(d)) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (v = d, this.options.extensions && this.options.extensions.startBlock && (function() {
              var I = 1 / 0, k = d.slice(1), x = void 0;
              w.options.extensions.startBlock.forEach(function(M) {
                x = M.call({
                  lexer: this
                }, k), typeof x == "number" && x >= 0 && (I = Math.min(I, x));
              }), I < 1 / 0 && I >= 0 && (v = d.substring(0, I + 1));
            })(), this.state.top && (l = this.tokenizer.paragraph(v))) {
              f = h[h.length - 1], y && f.type === "paragraph" ? (f.raw += `
` + l.raw, f.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = f.text) : h.push(l), y = v.length !== d.length, d = d.substring(l.raw.length);
              continue;
            }
            if (l = this.tokenizer.text(d)) {
              d = d.substring(l.raw.length), f = h[h.length - 1], f && f.type === "text" ? (f.raw += `
` + l.raw, f.text += `
` + l.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = f.text) : h.push(l);
              continue;
            }
            if (d) {
              var C = "Infinite loop on byte: " + d.charCodeAt(0);
              if (this.options.silent) {
                console.error(C);
                break;
              } else
                throw new Error(C);
            }
          }
        return this.state.top = !0, h;
      }, R.inline = function(d, h) {
        return h === void 0 && (h = []), this.inlineQueue.push({
          src: d,
          tokens: h
        }), h;
      }, R.inlineTokens = function(d, h) {
        var w = this;
        h === void 0 && (h = []);
        var l, f, v, y = d, C, I, k;
        if (this.tokens.links) {
          var x = Object.keys(this.tokens.links);
          if (x.length > 0)
            for (; (C = this.tokenizer.rules.inline.reflinkSearch.exec(y)) != null; )
              x.includes(C[0].slice(C[0].lastIndexOf("[") + 1, -1)) && (y = y.slice(0, C.index) + "[" + _e("a", C[0].length - 2) + "]" + y.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex));
        }
        for (; (C = this.tokenizer.rules.inline.blockSkip.exec(y)) != null; )
          y = y.slice(0, C.index) + "[" + _e("a", C[0].length - 2) + "]" + y.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
        for (; (C = this.tokenizer.rules.inline.escapedEmSt.exec(y)) != null; )
          y = y.slice(0, C.index + C[0].length - 2) + "++" + y.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
        for (; d; )
          if (I || (k = ""), I = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some(function(E) {
            return (l = E.call({
              lexer: w
            }, d, h)) ? (d = d.substring(l.raw.length), h.push(l), !0) : !1;
          }))) {
            if (l = this.tokenizer.escape(d)) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (l = this.tokenizer.tag(d)) {
              d = d.substring(l.raw.length), f = h[h.length - 1], f && l.type === "text" && f.type === "text" ? (f.raw += l.raw, f.text += l.text) : h.push(l);
              continue;
            }
            if (l = this.tokenizer.link(d)) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (l = this.tokenizer.reflink(d, this.tokens.links)) {
              d = d.substring(l.raw.length), f = h[h.length - 1], f && l.type === "text" && f.type === "text" ? (f.raw += l.raw, f.text += l.text) : h.push(l);
              continue;
            }
            if (l = this.tokenizer.emStrong(d, y, k)) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (l = this.tokenizer.codespan(d)) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (l = this.tokenizer.br(d)) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (l = this.tokenizer.del(d)) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (l = this.tokenizer.autolink(d, Te)) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (!this.state.inLink && (l = this.tokenizer.url(d, Te))) {
              d = d.substring(l.raw.length), h.push(l);
              continue;
            }
            if (v = d, this.options.extensions && this.options.extensions.startInline && (function() {
              var E = 1 / 0, ie = d.slice(1), me = void 0;
              w.options.extensions.startInline.forEach(function(ye) {
                me = ye.call({
                  lexer: this
                }, ie), typeof me == "number" && me >= 0 && (E = Math.min(E, me));
              }), E < 1 / 0 && E >= 0 && (v = d.substring(0, E + 1));
            })(), l = this.tokenizer.inlineText(v, ze)) {
              d = d.substring(l.raw.length), l.raw.slice(-1) !== "_" && (k = l.raw.slice(-1)), I = !0, f = h[h.length - 1], f && f.type === "text" ? (f.raw += l.raw, f.text += l.text) : h.push(l);
              continue;
            }
            if (d) {
              var M = "Infinite loop on byte: " + d.charCodeAt(0);
              if (this.options.silent) {
                console.error(M);
                break;
              } else
                throw new Error(M);
            }
          }
        return h;
      }, D(H, null, [{
        key: "rules",
        get: function() {
          return {
            block: p,
            inline: G
          };
        }
      }]), H;
    })(), Je = /* @__PURE__ */ (function() {
      function H(A) {
        this.options = A || ae.defaults;
      }
      var R = H.prototype;
      return R.code = function(d, h, w) {
        var l = (h || "").match(/\S*/)[0];
        if (this.options.highlight) {
          var f = this.options.highlight(d, l);
          f != null && f !== d && (w = !0, d = f);
        }
        return d = d.replace(/\n$/, "") + `
`, l ? '<pre><code class="' + this.options.langPrefix + oe(l) + '">' + (w ? d : oe(d, !0)) + `</code></pre>
` : "<pre><code>" + (w ? d : oe(d, !0)) + `</code></pre>
`;
      }, R.blockquote = function(d) {
        return `<blockquote>
` + d + `</blockquote>
`;
      }, R.html = function(d) {
        return d;
      }, R.heading = function(d, h, w, l) {
        if (this.options.headerIds) {
          var f = this.options.headerPrefix + l.slug(w);
          return "<h" + h + ' id="' + f + '">' + d + "</h" + h + `>
`;
        }
        return "<h" + h + ">" + d + "</h" + h + `>
`;
      }, R.hr = function() {
        return this.options.xhtml ? `<hr/>
` : `<hr>
`;
      }, R.list = function(d, h, w) {
        var l = h ? "ol" : "ul", f = h && w !== 1 ? ' start="' + w + '"' : "";
        return "<" + l + f + `>
` + d + "</" + l + `>
`;
      }, R.listitem = function(d) {
        return "<li>" + d + `</li>
`;
      }, R.checkbox = function(d) {
        return "<input " + (d ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
      }, R.paragraph = function(d) {
        return "<p>" + d + `</p>
`;
      }, R.table = function(d, h) {
        return h && (h = "<tbody>" + h + "</tbody>"), `<table>
<thead>
` + d + `</thead>
` + h + `</table>
`;
      }, R.tablerow = function(d) {
        return `<tr>
` + d + `</tr>
`;
      }, R.tablecell = function(d, h) {
        var w = h.header ? "th" : "td", l = h.align ? "<" + w + ' align="' + h.align + '">' : "<" + w + ">";
        return l + d + ("</" + w + `>
`);
      }, R.strong = function(d) {
        return "<strong>" + d + "</strong>";
      }, R.em = function(d) {
        return "<em>" + d + "</em>";
      }, R.codespan = function(d) {
        return "<code>" + d + "</code>";
      }, R.br = function() {
        return this.options.xhtml ? "<br/>" : "<br>";
      }, R.del = function(d) {
        return "<del>" + d + "</del>";
      }, R.link = function(d, h, w) {
        if (d = de(this.options.sanitize, this.options.baseUrl, d), d === null)
          return w;
        var l = '<a href="' + d + '"';
        return h && (l += ' title="' + h + '"'), l += ">" + w + "</a>", l;
      }, R.image = function(d, h, w) {
        if (d = de(this.options.sanitize, this.options.baseUrl, d), d === null)
          return w;
        var l = '<img src="' + d + '" alt="' + w + '"';
        return h && (l += ' title="' + h + '"'), l += this.options.xhtml ? "/>" : ">", l;
      }, R.text = function(d) {
        return d;
      }, H;
    })(), Ke = /* @__PURE__ */ (function() {
      function H() {
      }
      var R = H.prototype;
      return R.strong = function(d) {
        return d;
      }, R.em = function(d) {
        return d;
      }, R.codespan = function(d) {
        return d;
      }, R.del = function(d) {
        return d;
      }, R.html = function(d) {
        return d;
      }, R.text = function(d) {
        return d;
      }, R.link = function(d, h, w) {
        return "" + w;
      }, R.image = function(d, h, w) {
        return "" + w;
      }, R.br = function() {
        return "";
      }, H;
    })(), Ye = /* @__PURE__ */ (function() {
      function H() {
        this.seen = {};
      }
      var R = H.prototype;
      return R.serialize = function(d) {
        return d.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
      }, R.getNextSafeSlug = function(d, h) {
        var w = d, l = 0;
        if (this.seen.hasOwnProperty(w)) {
          l = this.seen[d];
          do
            l++, w = d + "-" + l;
          while (this.seen.hasOwnProperty(w));
        }
        return h || (this.seen[d] = l, this.seen[w] = 0), w;
      }, R.slug = function(d, h) {
        h === void 0 && (h = {});
        var w = this.serialize(d);
        return this.getNextSafeSlug(w, h.dryrun);
      }, H;
    })(), Pe = /* @__PURE__ */ (function() {
      function H(A) {
        this.options = A || ae.defaults, this.options.renderer = this.options.renderer || new Je(), this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Ke(), this.slugger = new Ye();
      }
      H.parse = function(d, h) {
        var w = new H(h);
        return w.parse(d);
      }, H.parseInline = function(d, h) {
        var w = new H(h);
        return w.parseInline(d);
      };
      var R = H.prototype;
      return R.parse = function(d, h) {
        h === void 0 && (h = !0);
        var w = "", l, f, v, y, C, I, k, x, M, E, ie, me, ye, re, Be, Me, Ne, Ae, Xe, Ze = d.length;
        for (l = 0; l < Ze; l++) {
          if (E = d[l], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[E.type] && (Xe = this.options.extensions.renderers[E.type].call({
            parser: this
          }, E), Xe !== !1 || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(E.type))) {
            w += Xe || "";
            continue;
          }
          switch (E.type) {
            case "space":
              continue;
            case "hr": {
              w += this.renderer.hr();
              continue;
            }
            case "heading": {
              w += this.renderer.heading(this.parseInline(E.tokens), E.depth, X(this.parseInline(E.tokens, this.textRenderer)), this.slugger);
              continue;
            }
            case "code": {
              w += this.renderer.code(E.text, E.lang, E.escaped);
              continue;
            }
            case "table": {
              for (x = "", k = "", y = E.header.length, f = 0; f < y; f++)
                k += this.renderer.tablecell(this.parseInline(E.header[f].tokens), {
                  header: !0,
                  align: E.align[f]
                });
              for (x += this.renderer.tablerow(k), M = "", y = E.rows.length, f = 0; f < y; f++) {
                for (I = E.rows[f], k = "", C = I.length, v = 0; v < C; v++)
                  k += this.renderer.tablecell(this.parseInline(I[v].tokens), {
                    header: !1,
                    align: E.align[v]
                  });
                M += this.renderer.tablerow(k);
              }
              w += this.renderer.table(x, M);
              continue;
            }
            case "blockquote": {
              M = this.parse(E.tokens), w += this.renderer.blockquote(M);
              continue;
            }
            case "list": {
              for (ie = E.ordered, me = E.start, ye = E.loose, y = E.items.length, M = "", f = 0; f < y; f++)
                Be = E.items[f], Me = Be.checked, Ne = Be.task, re = "", Be.task && (Ae = this.renderer.checkbox(Me), ye ? Be.tokens.length > 0 && Be.tokens[0].type === "paragraph" ? (Be.tokens[0].text = Ae + " " + Be.tokens[0].text, Be.tokens[0].tokens && Be.tokens[0].tokens.length > 0 && Be.tokens[0].tokens[0].type === "text" && (Be.tokens[0].tokens[0].text = Ae + " " + Be.tokens[0].tokens[0].text)) : Be.tokens.unshift({
                  type: "text",
                  text: Ae
                }) : re += Ae), re += this.parse(Be.tokens, ye), M += this.renderer.listitem(re, Ne, Me);
              w += this.renderer.list(M, ie, me);
              continue;
            }
            case "html": {
              w += this.renderer.html(E.text);
              continue;
            }
            case "paragraph": {
              w += this.renderer.paragraph(this.parseInline(E.tokens));
              continue;
            }
            case "text": {
              for (M = E.tokens ? this.parseInline(E.tokens) : E.text; l + 1 < Ze && d[l + 1].type === "text"; )
                E = d[++l], M += `
` + (E.tokens ? this.parseInline(E.tokens) : E.text);
              w += h ? this.renderer.paragraph(M) : M;
              continue;
            }
            default: {
              var ut = 'Token with "' + E.type + '" type was not found.';
              if (this.options.silent) {
                console.error(ut);
                return;
              } else
                throw new Error(ut);
            }
          }
        }
        return w;
      }, R.parseInline = function(d, h) {
        h = h || this.renderer;
        var w = "", l, f, v, y = d.length;
        for (l = 0; l < y; l++) {
          if (f = d[l], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[f.type] && (v = this.options.extensions.renderers[f.type].call({
            parser: this
          }, f), v !== !1 || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(f.type))) {
            w += v || "";
            continue;
          }
          switch (f.type) {
            case "escape": {
              w += h.text(f.text);
              break;
            }
            case "html": {
              w += h.html(f.text);
              break;
            }
            case "link": {
              w += h.link(f.href, f.title, this.parseInline(f.tokens, h));
              break;
            }
            case "image": {
              w += h.image(f.href, f.title, f.text);
              break;
            }
            case "strong": {
              w += h.strong(this.parseInline(f.tokens, h));
              break;
            }
            case "em": {
              w += h.em(this.parseInline(f.tokens, h));
              break;
            }
            case "codespan": {
              w += h.codespan(f.text);
              break;
            }
            case "br": {
              w += h.br();
              break;
            }
            case "del": {
              w += h.del(this.parseInline(f.tokens, h));
              break;
            }
            case "text": {
              w += h.text(f.text);
              break;
            }
            default: {
              var C = 'Token with "' + f.type + '" type was not found.';
              if (this.options.silent) {
                console.error(C);
                return;
              } else
                throw new Error(C);
            }
          }
        }
        return w;
      }, H;
    })(), We = /* @__PURE__ */ (function() {
      function H(A) {
        this.options = A || ae.defaults;
      }
      var R = H.prototype;
      return R.preprocess = function(d) {
        return d;
      }, R.postprocess = function(d) {
        return d;
      }, H;
    })();
    We.passThroughHooks = /* @__PURE__ */ new Set(["preprocess", "postprocess"]);
    function Ve(H, R, A) {
      return function(d) {
        if (d.message += `
Please report this to https://github.com/markedjs/marked.`, H) {
          var h = "<p>An error occurred:</p><pre>" + oe(d.message + "", !0) + "</pre>";
          if (R)
            return Promise.resolve(h);
          if (A) {
            A(null, h);
            return;
          }
          return h;
        }
        if (R)
          return Promise.reject(d);
        if (A) {
          A(d);
          return;
        }
        throw d;
      };
    }
    function at(H, R) {
      return function(A, d, h) {
        typeof d == "function" && (h = d, d = null);
        var w = P({}, d);
        d = P({}, ke.defaults, w);
        var l = Ve(d.silent, d.async, h);
        if (typeof A > "u" || A === null)
          return l(new Error("marked(): input parameter is undefined or null"));
        if (typeof A != "string")
          return l(new Error("marked(): input parameter is of type " + Object.prototype.toString.call(A) + ", string expected"));
        if (be(d), d.hooks && (d.hooks.options = d), h) {
          var f = d.highlight, v;
          try {
            d.hooks && (A = d.hooks.preprocess(A)), v = H(A, d);
          } catch (x) {
            return l(x);
          }
          var y = function(M) {
            var E;
            if (!M)
              try {
                d.walkTokens && ke.walkTokens(v, d.walkTokens), E = R(v, d), d.hooks && (E = d.hooks.postprocess(E));
              } catch (ie) {
                M = ie;
              }
            return d.highlight = f, M ? l(M) : h(null, E);
          };
          if (!f || f.length < 3 || (delete d.highlight, !v.length)) return y();
          var C = 0;
          ke.walkTokens(v, function(x) {
            x.type === "code" && (C++, setTimeout(function() {
              f(x.text, x.lang, function(M, E) {
                if (M)
                  return y(M);
                E != null && E !== x.text && (x.text = E, x.escaped = !0), C--, C === 0 && y();
              });
            }, 0));
          }), C === 0 && y();
          return;
        }
        if (d.async)
          return Promise.resolve(d.hooks ? d.hooks.preprocess(A) : A).then(function(x) {
            return H(x, d);
          }).then(function(x) {
            return d.walkTokens ? Promise.all(ke.walkTokens(x, d.walkTokens)).then(function() {
              return x;
            }) : x;
          }).then(function(x) {
            return R(x, d);
          }).then(function(x) {
            return d.hooks ? d.hooks.postprocess(x) : x;
          }).catch(l);
        try {
          d.hooks && (A = d.hooks.preprocess(A));
          var I = H(A, d);
          d.walkTokens && ke.walkTokens(I, d.walkTokens);
          var k = R(I, d);
          return d.hooks && (k = d.hooks.postprocess(k)), k;
        } catch (x) {
          return l(x);
        }
      };
    }
    function ke(H, R, A) {
      return at($e.lex, Pe.parse)(H, R, A);
    }
    ke.options = ke.setOptions = function(H) {
      return ke.defaults = P({}, ke.defaults, H), ee(ke.defaults), ke;
    }, ke.getDefaults = _, ke.defaults = ae.defaults, ke.use = function() {
      for (var H = ke.defaults.extensions || {
        renderers: {},
        childTokens: {}
      }, R = arguments.length, A = new Array(R), d = 0; d < R; d++)
        A[d] = arguments[d];
      A.forEach(function(h) {
        var w = P({}, h);
        if (w.async = ke.defaults.async || w.async || !1, h.extensions && (h.extensions.forEach(function(f) {
          if (!f.name)
            throw new Error("extension name required");
          if (f.renderer) {
            var v = H.renderers[f.name];
            v ? H.renderers[f.name] = function() {
              for (var y = arguments.length, C = new Array(y), I = 0; I < y; I++)
                C[I] = arguments[I];
              var k = f.renderer.apply(this, C);
              return k === !1 && (k = v.apply(this, C)), k;
            } : H.renderers[f.name] = f.renderer;
          }
          if (f.tokenizer) {
            if (!f.level || f.level !== "block" && f.level !== "inline")
              throw new Error("extension level must be 'block' or 'inline'");
            H[f.level] ? H[f.level].unshift(f.tokenizer) : H[f.level] = [f.tokenizer], f.start && (f.level === "block" ? H.startBlock ? H.startBlock.push(f.start) : H.startBlock = [f.start] : f.level === "inline" && (H.startInline ? H.startInline.push(f.start) : H.startInline = [f.start]));
          }
          f.childTokens && (H.childTokens[f.name] = f.childTokens);
        }), w.extensions = H), h.renderer && (function() {
          var f = ke.defaults.renderer || new Je(), v = function(I) {
            var k = f[I];
            f[I] = function() {
              for (var x = arguments.length, M = new Array(x), E = 0; E < x; E++)
                M[E] = arguments[E];
              var ie = h.renderer[I].apply(f, M);
              return ie === !1 && (ie = k.apply(f, M)), ie;
            };
          };
          for (var y in h.renderer)
            v(y);
          w.renderer = f;
        })(), h.tokenizer && (function() {
          var f = ke.defaults.tokenizer || new b(), v = function(I) {
            var k = f[I];
            f[I] = function() {
              for (var x = arguments.length, M = new Array(x), E = 0; E < x; E++)
                M[E] = arguments[E];
              var ie = h.tokenizer[I].apply(f, M);
              return ie === !1 && (ie = k.apply(f, M)), ie;
            };
          };
          for (var y in h.tokenizer)
            v(y);
          w.tokenizer = f;
        })(), h.hooks && (function() {
          var f = ke.defaults.hooks || new We(), v = function(I) {
            var k = f[I];
            We.passThroughHooks.has(I) ? f[I] = function(x) {
              if (ke.defaults.async)
                return Promise.resolve(h.hooks[I].call(f, x)).then(function(E) {
                  return k.call(f, E);
                });
              var M = h.hooks[I].call(f, x);
              return k.call(f, M);
            } : f[I] = function() {
              for (var x = arguments.length, M = new Array(x), E = 0; E < x; E++)
                M[E] = arguments[E];
              var ie = h.hooks[I].apply(f, M);
              return ie === !1 && (ie = k.apply(f, M)), ie;
            };
          };
          for (var y in h.hooks)
            v(y);
          w.hooks = f;
        })(), h.walkTokens) {
          var l = ke.defaults.walkTokens;
          w.walkTokens = function(f) {
            var v = [];
            return v.push(h.walkTokens.call(this, f)), l && (v = v.concat(l.call(this, f))), v;
          };
        }
        ke.setOptions(w);
      });
    }, ke.walkTokens = function(H, R) {
      for (var A = [], d = function() {
        var f = w.value;
        switch (A = A.concat(R.call(ke, f)), f.type) {
          case "table": {
            for (var v = O(f.header), y; !(y = v()).done; ) {
              var C = y.value;
              A = A.concat(ke.walkTokens(C.tokens, R));
            }
            for (var I = O(f.rows), k; !(k = I()).done; )
              for (var x = k.value, M = O(x), E; !(E = M()).done; ) {
                var ie = E.value;
                A = A.concat(ke.walkTokens(ie.tokens, R));
              }
            break;
          }
          case "list": {
            A = A.concat(ke.walkTokens(f.items, R));
            break;
          }
          default:
            ke.defaults.extensions && ke.defaults.extensions.childTokens && ke.defaults.extensions.childTokens[f.type] ? ke.defaults.extensions.childTokens[f.type].forEach(function(me) {
              A = A.concat(ke.walkTokens(f[me], R));
            }) : f.tokens && (A = A.concat(ke.walkTokens(f.tokens, R)));
        }
      }, h = O(H), w; !(w = h()).done; )
        d();
      return A;
    }, ke.parseInline = at($e.lexInline, Pe.parseInline), ke.Parser = Pe, ke.parser = Pe.parse, ke.Renderer = Je, ke.TextRenderer = Ke, ke.Lexer = $e, ke.lexer = $e.lex, ke.Tokenizer = b, ke.Slugger = Ye, ke.Hooks = We, ke.parse = ke;
    var Dt = ke.options, At = ke.setOptions, nt = ke.use, Ht = ke.walkTokens, De = ke.parseInline, lt = ke, _t = Pe.parse, ar = $e.lex;
    ae.Hooks = We, ae.Lexer = $e, ae.Parser = Pe, ae.Renderer = Je, ae.Slugger = Ye, ae.TextRenderer = Ke, ae.Tokenizer = b, ae.getDefaults = _, ae.lexer = ar, ae.marked = ke, ae.options = Dt, ae.parse = lt, ae.parseInline = De, ae.parser = _t, ae.setOptions = At, ae.use = nt, ae.walkTokens = Ht;
  })(xa)), xa;
}
var Da, eu;
function Jf() {
  if (eu) return Da;
  eu = 1;
  var ae = zt();
  Hf(), Rf(), Pf(), su(), fu(), _f(), Wf(), qf(), Uf(), Gf(), uu();
  var le = Qf(), D = $f().marked, P = /Mac/.test(navigator.platform), S = new RegExp(/(<a.*?https?:\/\/.*?[^a]>)+?/g), N = {
    toggleBold: X,
    toggleItalic: q,
    drawLink: _e,
    toggleHeadingSmaller: de,
    toggleHeadingBigger: xe,
    drawImage: rt,
    toggleBlockquote: Z,
    toggleOrderedList: $,
    toggleUnorderedList: te,
    toggleCodeBlock: he,
    togglePreview: Ke,
    toggleStrikethrough: j,
    toggleHeading1: Ue,
    toggleHeading2: se,
    toggleHeading3: Le,
    toggleHeading4: Ee,
    toggleHeading5: He,
    toggleHeading6: L,
    cleanBlock: be,
    drawTable: G,
    drawHorizontalRule: ze,
    undo: Te,
    redo: $e,
    toggleSideBySide: Je,
    toggleFullScreen: z
  }, O = {
    toggleBold: "Cmd-B",
    toggleItalic: "Cmd-I",
    drawLink: "Cmd-K",
    toggleHeadingSmaller: "Cmd-H",
    toggleHeadingBigger: "Shift-Cmd-H",
    toggleHeading1: "Ctrl+Alt+1",
    toggleHeading2: "Ctrl+Alt+2",
    toggleHeading3: "Ctrl+Alt+3",
    toggleHeading4: "Ctrl+Alt+4",
    toggleHeading5: "Ctrl+Alt+5",
    toggleHeading6: "Ctrl+Alt+6",
    cleanBlock: "Cmd-E",
    drawImage: "Cmd-Alt-I",
    toggleBlockquote: "Cmd-'",
    toggleOrderedList: "Cmd-Alt-L",
    toggleUnorderedList: "Cmd-L",
    toggleCodeBlock: "Cmd-Alt-C",
    togglePreview: "Cmd-P",
    toggleSideBySide: "F9",
    toggleFullScreen: "F11"
  }, W = function(l) {
    for (var f in N)
      if (N[f] === l)
        return f;
    return null;
  }, B = function() {
    var l = !1;
    return (function(f) {
      (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(f) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(f.substr(0, 4))) && (l = !0);
    })(navigator.userAgent || navigator.vendor || window.opera), l;
  };
  function _(l) {
    for (var f; (f = S.exec(l)) !== null; ) {
      var v = f[0];
      if (v.indexOf("target=") === -1) {
        var y = v.replace(/>$/, ' target="_blank">');
        l = l.replace(v, y);
      }
    }
    return l;
  }
  function ee(l) {
    for (var f = new DOMParser(), v = f.parseFromString(l, "text/html"), y = v.getElementsByTagName("li"), C = 0; C < y.length; C++)
      for (var I = y[C], k = 0; k < I.children.length; k++) {
        var x = I.children[k];
        x instanceof HTMLInputElement && x.type === "checkbox" && (I.style.marginLeft = "-1.5em", I.style.listStyleType = "none");
      }
    return v.documentElement.innerHTML;
  }
  function Q(l) {
    return P ? l = l.replace("Ctrl", "Cmd") : l = l.replace("Cmd", "Ctrl"), l;
  }
  function K(l, f, v, y) {
    var C = ue(l, !1, f, v, "button", y);
    C.classList.add("easymde-dropdown"), C.onclick = function() {
      C.focus();
    };
    var I = document.createElement("div");
    I.className = "easymde-dropdown-content";
    for (var k = 0; k < l.children.length; k++) {
      var x = l.children[k], M;
      typeof x == "string" && x in lt ? M = ue(lt[x], !0, f, v, "button", y) : M = ue(x, !0, f, v, "button", y), M.addEventListener("click", function(E) {
        E.stopPropagation();
      }, !1), I.appendChild(M);
    }
    return C.appendChild(I), C;
  }
  function ue(l, f, v, y, C, I) {
    l = l || {};
    var k = document.createElement(C);
    if (l.attributes)
      for (var x in l.attributes)
        Object.prototype.hasOwnProperty.call(l.attributes, x) && k.setAttribute(x, l.attributes[x]);
    var M = I.options.toolbarButtonClassPrefix ? I.options.toolbarButtonClassPrefix + "-" : "";
    k.className = M + l.name, k.setAttribute("type", C), v = v ?? !0, l.text && (k.innerText = l.text), l.name && l.name in y && (N[l.name] = l.action), l.title && v && (k.title = Ce(l.title, l.action, y), P && (k.title = k.title.replace("Ctrl", "⌘"), k.title = k.title.replace("Alt", "⌥"))), l.title && k.setAttribute("aria-label", l.title), l.noDisable && k.classList.add("no-disable"), l.noMobile && k.classList.add("no-mobile");
    var E = [];
    typeof l.className < "u" && (E = l.className.split(" "));
    for (var ie = [], me = 0; me < E.length; me++) {
      var ye = E[me];
      ye.match(/^fa([srlb]|(-[\w-]*)|$)/) ? ie.push(ye) : k.classList.add(ye);
    }
    if (k.tabIndex = -1, ie.length > 0) {
      for (var re = document.createElement("i"), Be = 0; Be < ie.length; Be++) {
        var Me = ie[Be];
        re.classList.add(Me);
      }
      k.appendChild(re);
    }
    return typeof l.icon < "u" && (k.innerHTML = l.icon), l.action && f && (typeof l.action == "function" ? k.onclick = function(Ne) {
      Ne.preventDefault(), l.action(I);
    } : typeof l.action == "string" && (k.onclick = function(Ne) {
      Ne.preventDefault(), window.open(l.action, "_blank");
    })), k;
  }
  function ne() {
    var l = document.createElement("i");
    return l.className = "separator", l.innerHTML = "|", l;
  }
  function Ce(l, f, v) {
    var y, C = l;
    return f && (y = W(f), v[y] && (C += " (" + Q(v[y]) + ")")), C;
  }
  function pe(l, f) {
    f = f || l.getCursor("start");
    var v = l.getTokenAt(f);
    if (!v.type) return {};
    for (var y = v.type.split(" "), C = {}, I, k, x = 0; x < y.length; x++)
      I = y[x], I === "strong" ? C.bold = !0 : I === "variable-2" ? (k = l.getLine(f.line), /^\s*\d+\.\s/.test(k) ? C["ordered-list"] = !0 : C["unordered-list"] = !0) : I === "atom" ? C.quote = !0 : I === "em" ? C.italic = !0 : I === "quote" ? C.quote = !0 : I === "strikethrough" ? C.strikethrough = !0 : I === "comment" ? C.code = !0 : I === "link" && !C.image ? C.link = !0 : I === "image" ? C.image = !0 : I.match(/^header(-[1-6])?$/) && (C[I.replace("header", "heading")] = !0);
    return C;
  }
  var oe = "";
  function z(l) {
    var f = l.codemirror;
    f.setOption("fullScreen", !f.getOption("fullScreen")), f.getOption("fullScreen") ? (oe = document.body.style.overflow, document.body.style.overflow = "hidden") : document.body.style.overflow = oe;
    var v = f.getWrapperElement(), y = v.nextSibling;
    if (y.classList.contains("editor-preview-active-side"))
      if (l.options.sideBySideFullscreen === !1) {
        var C = v.parentNode;
        f.getOption("fullScreen") ? C.classList.remove("sided--no-fullscreen") : C.classList.add("sided--no-fullscreen");
      } else
        Je(l);
    if (l.options.onToggleFullScreen && l.options.onToggleFullScreen(f.getOption("fullScreen") || !1), typeof l.options.maxHeight < "u" && (f.getOption("fullScreen") ? (f.getScrollerElement().style.removeProperty("height"), y.style.removeProperty("height")) : (f.getScrollerElement().style.height = l.options.maxHeight, l.setPreviewMaxHeight())), l.toolbar_div.classList.toggle("fullscreen"), l.toolbarElements && l.toolbarElements.fullscreen) {
      var I = l.toolbarElements.fullscreen;
      I.classList.toggle("active");
    }
  }
  function X(l) {
    at(l, "bold", l.options.blockStyles.bold);
  }
  function q(l) {
    at(l, "italic", l.options.blockStyles.italic);
  }
  function j(l) {
    at(l, "strikethrough", "~~");
  }
  function he(l) {
    var f = l.options.blockStyles.code;
    function v(yt) {
      if (typeof yt != "object")
        throw "fencing_line() takes a 'line' object (not a line number, or line text).  Got: " + typeof yt + ": " + yt;
      return yt.styles && yt.styles[2] && yt.styles[2].indexOf("formatting-code-block") !== -1;
    }
    function y(yt) {
      return yt.state.base.base || yt.state.base;
    }
    function C(yt, Xt, qt, Rt, It) {
      qt = qt || yt.getLineHandle(Xt), Rt = Rt || yt.getTokenAt({
        line: Xt,
        ch: 1
      }), It = It || !!qt.text && yt.getTokenAt({
        line: Xt,
        ch: qt.text.length - 1
      });
      var gr = Rt.type ? Rt.type.split(" ") : [];
      return It && y(It).indentedCode ? "indented" : gr.indexOf("comment") === -1 ? !1 : y(Rt).fencedChars || y(It).fencedChars || v(qt) ? "fenced" : "single";
    }
    function I(yt, Xt, qt, Rt) {
      var It = Xt.line + 1, gr = qt.line + 1, On = Xt.line !== qt.line, Br = Rt + `
`, Mr = `
` + Rt;
      On && gr++, On && qt.ch === 0 && (Mr = Rt + `
`, gr--), Ye(yt, !1, [Br, Mr]), yt.setSelection({
        line: It,
        ch: 0
      }, {
        line: gr,
        ch: 0
      });
    }
    var k = l.codemirror, x = k.getCursor("start"), M = k.getCursor("end"), E = k.getTokenAt({
      line: x.line,
      ch: x.ch || 1
    }), ie = k.getLineHandle(x.line), me = C(k, x.line, ie, E), ye, re, Be;
    if (me === "single") {
      var Me = ie.text.slice(0, x.ch).replace("`", ""), Ne = ie.text.slice(x.ch).replace("`", "");
      k.replaceRange(Me + Ne, {
        line: x.line,
        ch: 0
      }, {
        line: x.line,
        ch: 99999999999999
      }), x.ch--, x !== M && M.ch--, k.setSelection(x, M), k.focus();
    } else if (me === "fenced")
      if (x.line !== M.line || x.ch !== M.ch) {
        for (ye = x.line; ye >= 0 && (ie = k.getLineHandle(ye), !v(ie)); ye--)
          ;
        var Ae = k.getTokenAt({
          line: ye,
          ch: 1
        }), Xe = y(Ae).fencedChars, Ze, ut, kt, bt;
        v(k.getLineHandle(x.line)) ? (Ze = "", ut = x.line) : v(k.getLineHandle(x.line - 1)) ? (Ze = "", ut = x.line - 1) : (Ze = Xe + `
`, ut = x.line), v(k.getLineHandle(M.line)) ? (kt = "", bt = M.line, M.ch === 0 && (bt += 1)) : M.ch !== 0 && v(k.getLineHandle(M.line + 1)) ? (kt = "", bt = M.line + 1) : (kt = Xe + `
`, bt = M.line + 1), M.ch === 0 && (bt -= 1), k.operation(function() {
          k.replaceRange(kt, {
            line: bt,
            ch: 0
          }, {
            line: bt + (kt ? 0 : 1),
            ch: 0
          }), k.replaceRange(Ze, {
            line: ut,
            ch: 0
          }, {
            line: ut + (Ze ? 0 : 1),
            ch: 0
          });
        }), k.setSelection({
          line: ut + (Ze ? 1 : 0),
          ch: 0
        }, {
          line: bt + (Ze ? 1 : -1),
          ch: 0
        }), k.focus();
      } else {
        var Lr = x.line;
        if (v(k.getLineHandle(x.line)) && (C(k, x.line + 1) === "fenced" ? (ye = x.line, Lr = x.line + 1) : (re = x.line, Lr = x.line - 1)), ye === void 0)
          for (ye = Lr; ye >= 0 && (ie = k.getLineHandle(ye), !v(ie)); ye--)
            ;
        if (re === void 0)
          for (Be = k.lineCount(), re = Lr; re < Be && (ie = k.getLineHandle(re), !v(ie)); re++)
            ;
        k.operation(function() {
          k.replaceRange("", {
            line: ye,
            ch: 0
          }, {
            line: ye + 1,
            ch: 0
          }), k.replaceRange("", {
            line: re - 1,
            ch: 0
          }, {
            line: re,
            ch: 0
          });
        }), k.focus();
      }
    else if (me === "indented") {
      if (x.line !== M.line || x.ch !== M.ch)
        ye = x.line, re = M.line, M.ch === 0 && re--;
      else {
        for (ye = x.line; ye >= 0; ye--)
          if (ie = k.getLineHandle(ye), !ie.text.match(/^\s*$/) && C(k, ye, ie) !== "indented") {
            ye += 1;
            break;
          }
        for (Be = k.lineCount(), re = x.line; re < Be; re++)
          if (ie = k.getLineHandle(re), !ie.text.match(/^\s*$/) && C(k, re, ie) !== "indented") {
            re -= 1;
            break;
          }
      }
      var Tr = k.getLineHandle(re + 1), In = Tr && k.getTokenAt({
        line: re + 1,
        ch: Tr.text.length - 1
      }), tn = In && y(In).indentedCode;
      tn && k.replaceRange(`
`, {
        line: re + 1,
        ch: 0
      });
      for (var rn = ye; rn <= re; rn++)
        k.indentLine(rn, "subtract");
      k.focus();
    } else {
      var nn = x.line === M.line && x.ch === M.ch && x.ch === 0, mi = x.line !== M.line;
      nn || mi ? I(k, x, M, f) : Ye(k, !1, ["`", "`"]);
    }
  }
  function Z(l) {
    We(l.codemirror, "quote");
  }
  function de(l) {
    Pe(l.codemirror, "smaller");
  }
  function xe(l) {
    Pe(l.codemirror, "bigger");
  }
  function Ue(l) {
    Pe(l.codemirror, void 0, 1);
  }
  function se(l) {
    Pe(l.codemirror, void 0, 2);
  }
  function Le(l) {
    Pe(l.codemirror, void 0, 3);
  }
  function Ee(l) {
    Pe(l.codemirror, void 0, 4);
  }
  function He(l) {
    Pe(l.codemirror, void 0, 5);
  }
  function L(l) {
    Pe(l.codemirror, void 0, 6);
  }
  function te(l) {
    var f = l.codemirror, v = "*";
    ["-", "+", "*"].includes(l.options.unorderedListStyle) && (v = l.options.unorderedListStyle), We(f, "unordered-list", v);
  }
  function $(l) {
    We(l.codemirror, "ordered-list");
  }
  function be(l) {
    ke(l.codemirror);
  }
  function _e(l) {
    var f = l.options, v = "https://";
    if (f.promptURLs) {
      var y = prompt(f.promptTexts.link, v);
      if (!y)
        return !1;
      v = Wt(y);
    }
    Ve(l, "link", f.insertTexts.link, v);
  }
  function rt(l) {
    var f = l.options, v = "https://";
    if (f.promptURLs) {
      var y = prompt(f.promptTexts.image, v);
      if (!y)
        return !1;
      v = Wt(y);
    }
    Ve(l, "image", f.insertTexts.image, v);
  }
  function Wt(l) {
    return encodeURI(l).replace(/([\\()])/g, "\\$1");
  }
  function b(l) {
    l.openBrowseFileWindow();
  }
  function p(l, f) {
    var v = l.codemirror, y = pe(v), C = l.options, I = f.substr(f.lastIndexOf("/") + 1), k = I.substring(I.lastIndexOf(".") + 1).replace(/\?.*$/, "").toLowerCase();
    if (["png", "jpg", "jpeg", "gif", "svg", "apng", "avif", "webp"].includes(k))
      Ye(v, y.image, C.insertTexts.uploadedImage, f);
    else {
      var x = C.insertTexts.link;
      x[0] = "[" + I, Ye(v, y.link, x, f);
    }
    l.updateStatusBar("upload-image", l.options.imageTexts.sbOnUploaded.replace("#image_name#", I)), setTimeout(function() {
      l.updateStatusBar("upload-image", l.options.imageTexts.sbInit);
    }, 1e3);
  }
  function G(l) {
    var f = l.codemirror, v = pe(f), y = l.options;
    Ye(f, v.table, y.insertTexts.table);
  }
  function ze(l) {
    var f = l.codemirror, v = pe(f), y = l.options;
    Ye(f, v.image, y.insertTexts.horizontalRule);
  }
  function Te(l) {
    var f = l.codemirror;
    f.undo(), f.focus();
  }
  function $e(l) {
    var f = l.codemirror;
    f.redo(), f.focus();
  }
  function Je(l) {
    var f = l.codemirror, v = f.getWrapperElement(), y = v.nextSibling, C = l.toolbarElements && l.toolbarElements["side-by-side"], I = !1, k = v.parentNode;
    y.classList.contains("editor-preview-active-side") ? (l.options.sideBySideFullscreen === !1 && k.classList.remove("sided--no-fullscreen"), y.classList.remove("editor-preview-active-side"), C && C.classList.remove("active"), v.classList.remove("CodeMirror-sided")) : (setTimeout(function() {
      f.getOption("fullScreen") || (l.options.sideBySideFullscreen === !1 ? k.classList.add("sided--no-fullscreen") : z(l)), y.classList.add("editor-preview-active-side");
    }, 1), C && C.classList.add("active"), v.classList.add("CodeMirror-sided"), I = !0);
    var x = v.lastChild;
    if (x.classList.contains("editor-preview-active")) {
      x.classList.remove("editor-preview-active");
      var M = l.toolbarElements.preview, E = l.toolbar_div;
      M.classList.remove("active"), E.classList.remove("disabled-for-preview");
    }
    var ie = function() {
      var ye = l.options.previewRender(l.value(), y);
      ye != null && (y.innerHTML = ye);
    };
    if (f.sideBySideRenderingFunction || (f.sideBySideRenderingFunction = ie), I) {
      var me = l.options.previewRender(l.value(), y);
      me != null && (y.innerHTML = me), f.on("update", f.sideBySideRenderingFunction);
    } else
      f.off("update", f.sideBySideRenderingFunction);
    f.refresh();
  }
  function Ke(l) {
    var f = l.codemirror, v = f.getWrapperElement(), y = l.toolbar_div, C = l.options.toolbar ? l.toolbarElements.preview : !1, I = v.lastChild, k = f.getWrapperElement().nextSibling;
    if (k.classList.contains("editor-preview-active-side") && Je(l), !I || !I.classList.contains("editor-preview-full")) {
      if (I = document.createElement("div"), I.className = "editor-preview-full", l.options.previewClass)
        if (Array.isArray(l.options.previewClass))
          for (var x = 0; x < l.options.previewClass.length; x++)
            I.classList.add(l.options.previewClass[x]);
        else typeof l.options.previewClass == "string" && I.classList.add(l.options.previewClass);
      v.appendChild(I);
    }
    I.classList.contains("editor-preview-active") ? (I.classList.remove("editor-preview-active"), C && (C.classList.remove("active"), y.classList.remove("disabled-for-preview"))) : (setTimeout(function() {
      I.classList.add("editor-preview-active");
    }, 1), C && (C.classList.add("active"), y.classList.add("disabled-for-preview")));
    var M = l.options.previewRender(l.value(), I);
    M !== null && (I.innerHTML = M);
  }
  function Ye(l, f, v, y) {
    if (!l.getWrapperElement().lastChild.classList.contains("editor-preview-active")) {
      var C, I = v[0], k = v[1], x = {}, M = {};
      Object.assign(x, l.getCursor("start")), Object.assign(M, l.getCursor("end")), y && (I = I.replace("#url#", y), k = k.replace("#url#", y)), f ? (C = l.getLine(x.line), I = C.slice(0, x.ch), k = C.slice(x.ch), l.replaceRange(I + k, {
        line: x.line,
        ch: 0
      })) : (C = l.getSelection(), l.replaceSelection(I + C + k), x.ch += I.length, x !== M && (M.ch += I.length)), l.setSelection(x, M), l.focus();
    }
  }
  function Pe(l, f, v) {
    if (!l.getWrapperElement().lastChild.classList.contains("editor-preview-active")) {
      for (var y = l.getCursor("start"), C = l.getCursor("end"), I = y.line; I <= C.line; I++)
        (function(k) {
          var x = l.getLine(k), M = x.search(/[^#]/);
          f !== void 0 ? M <= 0 ? f == "bigger" ? x = "###### " + x : x = "# " + x : M == 6 && f == "smaller" ? x = x.substr(7) : M == 1 && f == "bigger" ? x = x.substr(2) : f == "bigger" ? x = x.substr(1) : x = "#" + x : M <= 0 ? x = "#".repeat(v) + " " + x : M == v ? x = x.substr(M + 1) : x = "#".repeat(v) + " " + x.substr(M + 1), l.replaceRange(x, {
            line: k,
            ch: 0
          }, {
            line: k,
            ch: 99999999999999
          });
        })(I);
      l.focus();
    }
  }
  function We(l, f, v) {
    if (!l.getWrapperElement().lastChild.classList.contains("editor-preview-active")) {
      for (var y = /^(\s*)(\*|-|\+|\d*\.)(\s+)/, C = /^\s*/, I = pe(l), k = l.getCursor("start"), x = l.getCursor("end"), M = {
        quote: /^(\s*)>\s+/,
        "unordered-list": y,
        "ordered-list": y
      }, E = function(Be, Me) {
        var Ne = {
          quote: ">",
          "unordered-list": v,
          "ordered-list": "%%i."
        };
        return Ne[Be].replace("%%i", Me);
      }, ie = function(Be, Me) {
        var Ne = {
          quote: ">",
          "unordered-list": "\\" + v,
          "ordered-list": "\\d+."
        }, Ae = new RegExp(Ne[Be]);
        return Me && Ae.test(Me);
      }, me = function(Be, Me, Ne) {
        var Ae = y.exec(Me), Xe = E(Be, ye);
        return Ae !== null ? (ie(Be, Ae[2]) && (Xe = ""), Me = Ae[1] + Xe + Ae[3] + Me.replace(C, "").replace(M[Be], "$1")) : Ne == !1 && (Me = Xe + " " + Me), Me;
      }, ye = 1, re = k.line; re <= x.line; re++)
        (function(Be) {
          var Me = l.getLine(Be);
          I[f] ? Me = Me.replace(M[f], "$1") : (f == "unordered-list" && (Me = me("ordered-list", Me, !0)), Me = me(f, Me, !1), ye += 1), l.replaceRange(Me, {
            line: Be,
            ch: 0
          }, {
            line: Be,
            ch: 99999999999999
          });
        })(re);
      l.focus();
    }
  }
  function Ve(l, f, v, y) {
    if (!(!l.codemirror || l.isPreviewActive())) {
      var C = l.codemirror, I = pe(C), k = I[f];
      if (!k) {
        Ye(C, k, v, y);
        return;
      }
      var x = C.getCursor("start"), M = C.getCursor("end"), E = C.getLine(x.line), ie = E.slice(0, x.ch), me = E.slice(x.ch);
      f == "link" ? ie = ie.replace(/(.*)[^!]\[/, "$1") : f == "image" && (ie = ie.replace(/(.*)!\[$/, "$1")), me = me.replace(/]\(.*?\)/, ""), C.replaceRange(ie + me, {
        line: x.line,
        ch: 0
      }, {
        line: x.line,
        ch: 99999999999999
      }), x.ch -= v[0].length, x !== M && (M.ch -= v[0].length), C.setSelection(x, M), C.focus();
    }
  }
  function at(l, f, v, y) {
    if (!(!l.codemirror || l.isPreviewActive())) {
      y = typeof y > "u" ? v : y;
      var C = l.codemirror, I = pe(C), k, x = v, M = y, E = C.getCursor("start"), ie = C.getCursor("end");
      I[f] ? (k = C.getLine(E.line), x = k.slice(0, E.ch), M = k.slice(E.ch), f == "bold" ? (x = x.replace(/(\*\*|__)(?![\s\S]*(\*\*|__))/, ""), M = M.replace(/(\*\*|__)/, "")) : f == "italic" ? (x = x.replace(/(\*|_)(?![\s\S]*(\*|_))/, ""), M = M.replace(/(\*|_)/, "")) : f == "strikethrough" && (x = x.replace(/(\*\*|~~)(?![\s\S]*(\*\*|~~))/, ""), M = M.replace(/(\*\*|~~)/, "")), C.replaceRange(x + M, {
        line: E.line,
        ch: 0
      }, {
        line: E.line,
        ch: 99999999999999
      }), f == "bold" || f == "strikethrough" ? (E.ch -= 2, E !== ie && (ie.ch -= 2)) : f == "italic" && (E.ch -= 1, E !== ie && (ie.ch -= 1))) : (k = C.getSelection(), f == "bold" ? (k = k.split("**").join(""), k = k.split("__").join("")) : f == "italic" ? (k = k.split("*").join(""), k = k.split("_").join("")) : f == "strikethrough" && (k = k.split("~~").join("")), C.replaceSelection(x + k + M), E.ch += v.length, ie.ch = E.ch + k.length), C.setSelection(E, ie), C.focus();
    }
  }
  function ke(l) {
    if (!l.getWrapperElement().lastChild.classList.contains("editor-preview-active"))
      for (var f = l.getCursor("start"), v = l.getCursor("end"), y, C = f.line; C <= v.line; C++)
        y = l.getLine(C), y = y.replace(/^[ ]*([# ]+|\*|-|[> ]+|[0-9]+(.|\)))[ ]*/, ""), l.replaceRange(y, {
          line: C,
          ch: 0
        }, {
          line: C,
          ch: 99999999999999
        });
  }
  function Dt(l, f) {
    if (Math.abs(l) < 1024)
      return "" + l + f[0];
    var v = 0;
    do
      l /= 1024, ++v;
    while (Math.abs(l) >= 1024 && v < f.length);
    return "" + l.toFixed(1) + f[v];
  }
  function At(l, f) {
    for (var v in f)
      Object.prototype.hasOwnProperty.call(f, v) && (f[v] instanceof Array ? l[v] = f[v].concat(l[v] instanceof Array ? l[v] : []) : f[v] !== null && typeof f[v] == "object" && f[v].constructor === Object ? l[v] = At(l[v] || {}, f[v]) : l[v] = f[v]);
    return l;
  }
  function nt(l) {
    for (var f = 1; f < arguments.length; f++)
      l = At(l, arguments[f]);
    return l;
  }
  function Ht(l) {
    var f = /[a-zA-Z0-9_\u00A0-\u02AF\u0392-\u03c9\u0410-\u04F9]+|[\u4E00-\u9FFF\u3400-\u4dbf\uf900-\ufaff\u3040-\u309f\uac00-\ud7af]+/g, v = l.match(f), y = 0;
    if (v === null) return y;
    for (var C = 0; C < v.length; C++)
      v[C].charCodeAt(0) >= 19968 ? y += v[C].length : y += 1;
    return y;
  }
  var De = {
    bold: "fa fa-bold",
    italic: "fa fa-italic",
    strikethrough: "fa fa-strikethrough",
    heading: "fa fa-header fa-heading",
    "heading-smaller": "fa fa-header fa-heading header-smaller",
    "heading-bigger": "fa fa-header fa-heading header-bigger",
    "heading-1": "fa fa-header fa-heading header-1",
    "heading-2": "fa fa-header fa-heading header-2",
    "heading-3": "fa fa-header fa-heading header-3",
    code: "fa fa-code",
    quote: "fa fa-quote-left",
    "ordered-list": "fa fa-list-ol",
    "unordered-list": "fa fa-list-ul",
    "clean-block": "fa fa-eraser",
    link: "fa fa-link",
    image: "fa fa-image",
    "upload-image": "fa fa-image",
    table: "fa fa-table",
    "horizontal-rule": "fa fa-minus",
    preview: "fa fa-eye",
    "side-by-side": "fa fa-columns",
    fullscreen: "fa fa-arrows-alt",
    guide: "fa fa-question-circle",
    undo: "fa fa-undo",
    redo: "fa fa-repeat fa-redo"
  }, lt = {
    bold: {
      name: "bold",
      action: X,
      className: De.bold,
      title: "Bold",
      default: !0
    },
    italic: {
      name: "italic",
      action: q,
      className: De.italic,
      title: "Italic",
      default: !0
    },
    strikethrough: {
      name: "strikethrough",
      action: j,
      className: De.strikethrough,
      title: "Strikethrough"
    },
    heading: {
      name: "heading",
      action: de,
      className: De.heading,
      title: "Heading",
      default: !0
    },
    "heading-smaller": {
      name: "heading-smaller",
      action: de,
      className: De["heading-smaller"],
      title: "Smaller Heading"
    },
    "heading-bigger": {
      name: "heading-bigger",
      action: xe,
      className: De["heading-bigger"],
      title: "Bigger Heading"
    },
    "heading-1": {
      name: "heading-1",
      action: Ue,
      className: De["heading-1"],
      title: "Big Heading"
    },
    "heading-2": {
      name: "heading-2",
      action: se,
      className: De["heading-2"],
      title: "Medium Heading"
    },
    "heading-3": {
      name: "heading-3",
      action: Le,
      className: De["heading-3"],
      title: "Small Heading"
    },
    "separator-1": {
      name: "separator-1"
    },
    code: {
      name: "code",
      action: he,
      className: De.code,
      title: "Code"
    },
    quote: {
      name: "quote",
      action: Z,
      className: De.quote,
      title: "Quote",
      default: !0
    },
    "unordered-list": {
      name: "unordered-list",
      action: te,
      className: De["unordered-list"],
      title: "Generic List",
      default: !0
    },
    "ordered-list": {
      name: "ordered-list",
      action: $,
      className: De["ordered-list"],
      title: "Numbered List",
      default: !0
    },
    "clean-block": {
      name: "clean-block",
      action: be,
      className: De["clean-block"],
      title: "Clean block"
    },
    "separator-2": {
      name: "separator-2"
    },
    link: {
      name: "link",
      action: _e,
      className: De.link,
      title: "Create Link",
      default: !0
    },
    image: {
      name: "image",
      action: rt,
      className: De.image,
      title: "Insert Image",
      default: !0
    },
    "upload-image": {
      name: "upload-image",
      action: b,
      className: De["upload-image"],
      title: "Import an image"
    },
    table: {
      name: "table",
      action: G,
      className: De.table,
      title: "Insert Table"
    },
    "horizontal-rule": {
      name: "horizontal-rule",
      action: ze,
      className: De["horizontal-rule"],
      title: "Insert Horizontal Line"
    },
    "separator-3": {
      name: "separator-3"
    },
    preview: {
      name: "preview",
      action: Ke,
      className: De.preview,
      noDisable: !0,
      title: "Toggle Preview",
      default: !0
    },
    "side-by-side": {
      name: "side-by-side",
      action: Je,
      className: De["side-by-side"],
      noDisable: !0,
      noMobile: !0,
      title: "Toggle Side by Side",
      default: !0
    },
    fullscreen: {
      name: "fullscreen",
      action: z,
      className: De.fullscreen,
      noDisable: !0,
      noMobile: !0,
      title: "Toggle Fullscreen",
      default: !0
    },
    "separator-4": {
      name: "separator-4"
    },
    guide: {
      name: "guide",
      action: "https://www.markdownguide.org/basic-syntax/",
      className: De.guide,
      noDisable: !0,
      title: "Markdown Guide",
      default: !0
    },
    "separator-5": {
      name: "separator-5"
    },
    undo: {
      name: "undo",
      action: Te,
      className: De.undo,
      noDisable: !0,
      title: "Undo"
    },
    redo: {
      name: "redo",
      action: $e,
      className: De.redo,
      noDisable: !0,
      title: "Redo"
    }
  }, _t = {
    link: ["[", "](#url#)"],
    image: ["![", "](#url#)"],
    uploadedImage: ["![](#url#)", ""],
    // uploadedImage: ['![](#url#)\n', ''], // TODO: New line insertion doesn't work here.
    table: ["", `

| Column 1 | Column 2 | Column 3 |
| -------- | -------- | -------- |
| Text     | Text     | Text     |

`],
    horizontalRule: ["", `

-----

`]
  }, ar = {
    link: "URL for the link:",
    image: "URL of the image:"
  }, H = {
    locale: "en-US",
    format: {
      hour: "2-digit",
      minute: "2-digit"
    }
  }, R = {
    bold: "**",
    code: "```",
    italic: "*"
  }, A = {
    sbInit: "Attach files by drag and dropping or pasting from clipboard.",
    sbOnDragEnter: "Drop image to upload it.",
    sbOnDrop: "Uploading image #images_names#...",
    sbProgress: "Uploading #file_name#: #progress#%",
    sbOnUploaded: "Uploaded #image_name#",
    sizeUnits: " B, KB, MB"
  }, d = {
    noFileGiven: "You must select a file.",
    typeNotAllowed: "This image type is not allowed.",
    fileTooLarge: `Image #image_name# is too big (#image_size#).
Maximum file size is #image_max_size#.`,
    importError: "Something went wrong when uploading the image #image_name#."
  };
  function h(l) {
    l = l || {}, l.parent = this;
    var f = !0;
    if (l.autoDownloadFontAwesome === !1 && (f = !1), l.autoDownloadFontAwesome !== !0)
      for (var v = document.styleSheets, y = 0; y < v.length; y++)
        v[y].href && v[y].href.indexOf("//maxcdn.bootstrapcdn.com/font-awesome/") > -1 && (f = !1);
    if (f) {
      var C = document.createElement("link");
      C.rel = "stylesheet", C.href = "https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css", document.getElementsByTagName("head")[0].appendChild(C);
    }
    if (l.element)
      this.element = l.element;
    else if (l.element === null) {
      console.log("EasyMDE: Error. No element was found.");
      return;
    }
    if (l.toolbar === void 0) {
      l.toolbar = [];
      for (var I in lt)
        Object.prototype.hasOwnProperty.call(lt, I) && (I.indexOf("separator-") != -1 && l.toolbar.push("|"), (lt[I].default === !0 || l.showIcons && l.showIcons.constructor === Array && l.showIcons.indexOf(I) != -1) && l.toolbar.push(I));
    }
    if (Object.prototype.hasOwnProperty.call(l, "previewClass") || (l.previewClass = "editor-preview"), Object.prototype.hasOwnProperty.call(l, "status") || (l.status = ["autosave", "lines", "words", "cursor"], l.uploadImage && l.status.unshift("upload-image")), l.previewRender || (l.previewRender = function(x) {
      return this.parent.markdown(x);
    }), l.parsingConfig = nt({
      highlightFormatting: !0
      // needed for toggleCodeBlock to detect types of code
    }, l.parsingConfig || {}), l.insertTexts = nt({}, _t, l.insertTexts || {}), l.promptTexts = nt({}, ar, l.promptTexts || {}), l.blockStyles = nt({}, R, l.blockStyles || {}), l.autosave != null && (l.autosave.timeFormat = nt({}, H, l.autosave.timeFormat || {})), l.iconClassMap = nt({}, De, l.iconClassMap || {}), l.shortcuts = nt({}, O, l.shortcuts || {}), l.maxHeight = l.maxHeight || void 0, l.direction = l.direction || "ltr", typeof l.maxHeight < "u" ? l.minHeight = l.maxHeight : l.minHeight = l.minHeight || "300px", l.errorCallback = l.errorCallback || function(x) {
      alert(x);
    }, l.uploadImage = l.uploadImage || !1, l.imageMaxSize = l.imageMaxSize || 2097152, l.imageAccept = l.imageAccept || "image/png, image/jpeg, image/gif, image/avif", l.imageTexts = nt({}, A, l.imageTexts || {}), l.errorMessages = nt({}, d, l.errorMessages || {}), l.imagePathAbsolute = l.imagePathAbsolute || !1, l.imageCSRFName = l.imageCSRFName || "csrfmiddlewaretoken", l.imageCSRFHeader = l.imageCSRFHeader || !1, l.imageInputName = l.imageInputName || "image", l.autosave != null && l.autosave.unique_id != null && l.autosave.unique_id != "" && (l.autosave.uniqueId = l.autosave.unique_id), l.overlayMode && l.overlayMode.combine === void 0 && (l.overlayMode.combine = !0), this.options = l, this.render(), l.initialValue && (!this.options.autosave || this.options.autosave.foundSavedValue !== !0) && this.value(l.initialValue), l.uploadImage) {
      var k = this;
      this.codemirror.on("dragenter", function(x, M) {
        k.updateStatusBar("upload-image", k.options.imageTexts.sbOnDragEnter), M.stopPropagation(), M.preventDefault();
      }), this.codemirror.on("dragend", function(x, M) {
        k.updateStatusBar("upload-image", k.options.imageTexts.sbInit), M.stopPropagation(), M.preventDefault();
      }), this.codemirror.on("dragleave", function(x, M) {
        k.updateStatusBar("upload-image", k.options.imageTexts.sbInit), M.stopPropagation(), M.preventDefault();
      }), this.codemirror.on("dragover", function(x, M) {
        k.updateStatusBar("upload-image", k.options.imageTexts.sbOnDragEnter), M.stopPropagation(), M.preventDefault();
      }), this.codemirror.on("drop", function(x, M) {
        M.stopPropagation(), M.preventDefault(), l.imageUploadFunction ? k.uploadImagesUsingCustomFunction(l.imageUploadFunction, M.dataTransfer.files) : k.uploadImages(M.dataTransfer.files);
      }), this.codemirror.on("paste", function(x, M) {
        l.imageUploadFunction ? k.uploadImagesUsingCustomFunction(l.imageUploadFunction, M.clipboardData.files) : k.uploadImages(M.clipboardData.files);
      });
    }
  }
  h.prototype.uploadImages = function(l, f, v) {
    if (l.length !== 0) {
      for (var y = [], C = 0; C < l.length; C++)
        y.push(l[C].name), this.uploadImage(l[C], f, v);
      this.updateStatusBar("upload-image", this.options.imageTexts.sbOnDrop.replace("#images_names#", y.join(", ")));
    }
  }, h.prototype.uploadImagesUsingCustomFunction = function(l, f) {
    if (f.length !== 0) {
      for (var v = [], y = 0; y < f.length; y++)
        v.push(f[y].name), this.uploadImageUsingCustomFunction(l, f[y]);
      this.updateStatusBar("upload-image", this.options.imageTexts.sbOnDrop.replace("#images_names#", v.join(", ")));
    }
  }, h.prototype.updateStatusBar = function(l, f) {
    if (this.gui.statusbar) {
      var v = this.gui.statusbar.getElementsByClassName(l);
      v.length === 1 ? this.gui.statusbar.getElementsByClassName(l)[0].textContent = f : v.length === 0 ? console.log("EasyMDE: status bar item " + l + " was not found.") : console.log("EasyMDE: Several status bar items named " + l + " was found.");
    }
  }, h.prototype.markdown = function(l) {
    if (D) {
      var f;
      if (this.options && this.options.renderingConfig && this.options.renderingConfig.markedOptions ? f = this.options.renderingConfig.markedOptions : f = {}, this.options && this.options.renderingConfig && this.options.renderingConfig.singleLineBreaks === !1 ? f.breaks = !1 : f.breaks = !0, this.options && this.options.renderingConfig && this.options.renderingConfig.codeSyntaxHighlighting === !0) {
        var v = this.options.renderingConfig.hljs || window.hljs;
        v && (f.highlight = function(C, I) {
          return I && v.getLanguage(I) ? v.highlight(I, C).value : v.highlightAuto(C).value;
        });
      }
      D.use(f);
      var y = D.parse(l);
      return this.options.renderingConfig && typeof this.options.renderingConfig.sanitizerFunction == "function" && (y = this.options.renderingConfig.sanitizerFunction.call(this, y)), y = _(y), y = ee(y), y;
    }
  }, h.prototype.render = function(l) {
    if (l || (l = this.element || document.getElementsByTagName("textarea")[0]), this._rendered && this._rendered === l)
      return;
    this.element = l;
    var f = this.options, v = this, y = {};
    for (var C in f.shortcuts)
      f.shortcuts[C] !== null && N[C] !== null && (function(Ne) {
        y[Q(f.shortcuts[Ne])] = function() {
          var Ae = N[Ne];
          typeof Ae == "function" ? Ae(v) : typeof Ae == "string" && window.open(Ae, "_blank");
        };
      })(C);
    y.Enter = "newlineAndIndentContinueMarkdownList", y.Tab = "tabAndIndentMarkdownList", y["Shift-Tab"] = "shiftTabAndUnindentMarkdownList", y.Esc = function(Ne) {
      Ne.getOption("fullScreen") && z(v);
    }, this.documentOnKeyDown = function(Ne) {
      Ne = Ne || window.event, Ne.keyCode == 27 && v.codemirror.getOption("fullScreen") && z(v);
    }, document.addEventListener("keydown", this.documentOnKeyDown, !1);
    var I, k;
    f.overlayMode ? (ae.defineMode("overlay-mode", function(Ne) {
      return ae.overlayMode(ae.getMode(Ne, f.spellChecker !== !1 ? "spell-checker" : "gfm"), f.overlayMode.mode, f.overlayMode.combine);
    }), I = "overlay-mode", k = f.parsingConfig, k.gitHubSpice = !1) : (I = f.parsingConfig, I.name = "gfm", I.gitHubSpice = !1), f.spellChecker !== !1 && (I = "spell-checker", k = f.parsingConfig, k.name = "gfm", k.gitHubSpice = !1, typeof f.spellChecker == "function" ? f.spellChecker({
      codeMirrorInstance: ae
    }) : le({
      codeMirrorInstance: ae
    }));
    function x(Ne, Ae, Xe) {
      return {
        addNew: !1
      };
    }
    if (this.codemirror = ae.fromTextArea(l, {
      mode: I,
      backdrop: k,
      theme: f.theme != null ? f.theme : "easymde",
      tabSize: f.tabSize != null ? f.tabSize : 2,
      indentUnit: f.tabSize != null ? f.tabSize : 2,
      indentWithTabs: f.indentWithTabs !== !1,
      lineNumbers: f.lineNumbers === !0,
      autofocus: f.autofocus === !0,
      extraKeys: y,
      direction: f.direction,
      lineWrapping: f.lineWrapping !== !1,
      allowDropFileTypes: ["text/plain"],
      placeholder: f.placeholder || l.getAttribute("placeholder") || "",
      styleSelectedText: f.styleSelectedText != null ? f.styleSelectedText : !B(),
      scrollbarStyle: f.scrollbarStyle != null ? f.scrollbarStyle : "native",
      configureMouse: x,
      inputStyle: f.inputStyle != null ? f.inputStyle : B() ? "contenteditable" : "textarea",
      spellcheck: f.nativeSpellcheck != null ? f.nativeSpellcheck : !0,
      autoRefresh: f.autoRefresh != null ? f.autoRefresh : !1
    }), this.codemirror.getScrollerElement().style.minHeight = f.minHeight, typeof f.maxHeight < "u" && (this.codemirror.getScrollerElement().style.height = f.maxHeight), f.forceSync === !0) {
      var M = this.codemirror;
      M.on("change", function() {
        M.save();
      });
    }
    this.gui = {};
    var E = document.createElement("div");
    E.classList.add("EasyMDEContainer"), E.setAttribute("role", "application");
    var ie = this.codemirror.getWrapperElement();
    ie.parentNode.insertBefore(E, ie), E.appendChild(ie), f.toolbar !== !1 && (this.gui.toolbar = this.createToolbar()), f.status !== !1 && (this.gui.statusbar = this.createStatusbar()), f.autosave != null && f.autosave.enabled === !0 && (this.autosave(), this.codemirror.on("change", function() {
      clearTimeout(v._autosave_timeout), v._autosave_timeout = setTimeout(function() {
        v.autosave();
      }, v.options.autosave.submit_delay || v.options.autosave.delay || 1e3);
    }));
    function me(Ne, Ae) {
      var Xe, Ze = window.getComputedStyle(document.querySelector(".CodeMirror-sizer")).width.replace("px", "");
      return Ne < Ze ? Xe = Ae + "px" : Xe = Ae / Ne * 100 + "%", Xe;
    }
    var ye = this;
    function re(Ne, Ae) {
      var Xe = new URL(Ae.url, document.baseURI).href;
      Ne.setAttribute("data-img-src", Xe), Ne.setAttribute("style", "--bg-image:url(" + Xe + ");--width:" + Ae.naturalWidth + "px;--height:" + me(Ae.naturalWidth, Ae.naturalHeight)), ye.codemirror.setSize();
    }
    function Be() {
      f.previewImagesInEditor && E.querySelectorAll(".cm-image-marker").forEach(function(Ne) {
        var Ae = Ne.parentElement;
        if (Ae.innerText.match(/^!\[.*?\]\(.*\)/g) && !Ae.hasAttribute("data-img-src")) {
          var Xe = Ae.innerText.match(/!\[.*?\]\((.*?)\)/);
          if (window.EMDEimagesCache || (window.EMDEimagesCache = {}), Xe && Xe.length >= 2) {
            var Ze = Xe[1];
            if (f.imagesPreviewHandler) {
              var ut = f.imagesPreviewHandler(Xe[1]);
              typeof ut == "string" && (Ze = ut);
            }
            if (window.EMDEimagesCache[Ze])
              re(Ae, window.EMDEimagesCache[Ze]);
            else {
              window.EMDEimagesCache[Ze] = {};
              var kt = document.createElement("img");
              kt.onload = function() {
                window.EMDEimagesCache[Ze] = {
                  naturalWidth: kt.naturalWidth,
                  naturalHeight: kt.naturalHeight,
                  url: Ze
                }, re(Ae, window.EMDEimagesCache[Ze]);
              }, kt.src = Ze;
            }
          }
        }
      });
    }
    this.codemirror.on("update", function() {
      Be();
    }), this.gui.sideBySide = this.createSideBySide(), this._rendered = this.element, (f.autofocus === !0 || l.autofocus) && this.codemirror.focus();
    var Me = this.codemirror;
    setTimeout(function() {
      Me.refresh();
    }.bind(Me), 0);
  }, h.prototype.cleanup = function() {
    document.removeEventListener("keydown", this.documentOnKeyDown);
  };
  function w() {
    if (typeof localStorage == "object")
      try {
        localStorage.setItem("smde_localStorage", 1), localStorage.removeItem("smde_localStorage");
      } catch {
        return !1;
      }
    else
      return !1;
    return !0;
  }
  return h.prototype.autosave = function() {
    if (w()) {
      var l = this;
      if (this.options.autosave.uniqueId == null || this.options.autosave.uniqueId == "") {
        console.log("EasyMDE: You must set a uniqueId to use the autosave feature");
        return;
      }
      this.options.autosave.binded !== !0 && (l.element.form != null && l.element.form != null && l.element.form.addEventListener("submit", function() {
        clearTimeout(l.autosaveTimeoutId), l.autosaveTimeoutId = void 0, localStorage.removeItem("smde_" + l.options.autosave.uniqueId);
      }), this.options.autosave.binded = !0), this.options.autosave.loaded !== !0 && (typeof localStorage.getItem("smde_" + this.options.autosave.uniqueId) == "string" && localStorage.getItem("smde_" + this.options.autosave.uniqueId) != "" && (this.codemirror.setValue(localStorage.getItem("smde_" + this.options.autosave.uniqueId)), this.options.autosave.foundSavedValue = !0), this.options.autosave.loaded = !0);
      var f = l.value();
      f !== "" ? localStorage.setItem("smde_" + this.options.autosave.uniqueId, f) : localStorage.removeItem("smde_" + this.options.autosave.uniqueId);
      var v = document.getElementById("autosaved");
      if (v != null && v != null && v != "") {
        var y = /* @__PURE__ */ new Date(), C = new Intl.DateTimeFormat([this.options.autosave.timeFormat.locale, "en-US"], this.options.autosave.timeFormat.format).format(y), I = this.options.autosave.text == null ? "Autosaved: " : this.options.autosave.text;
        v.innerHTML = I + C;
      }
    } else
      console.log("EasyMDE: localStorage not available, cannot autosave");
  }, h.prototype.clearAutosavedValue = function() {
    if (w()) {
      if (this.options.autosave == null || this.options.autosave.uniqueId == null || this.options.autosave.uniqueId == "") {
        console.log("EasyMDE: You must set a uniqueId to clear the autosave value");
        return;
      }
      localStorage.removeItem("smde_" + this.options.autosave.uniqueId);
    } else
      console.log("EasyMDE: localStorage not available, cannot autosave");
  }, h.prototype.openBrowseFileWindow = function(l, f) {
    var v = this, y = this.gui.toolbar.getElementsByClassName("imageInput")[0];
    y.click();
    function C(I) {
      v.options.imageUploadFunction ? v.uploadImagesUsingCustomFunction(v.options.imageUploadFunction, I.target.files) : v.uploadImages(I.target.files, l, f), y.removeEventListener("change", C);
    }
    y.addEventListener("change", C);
  }, h.prototype.uploadImage = function(l, f, v) {
    var y = this;
    f = f || function(E) {
      p(y, E);
    };
    function C(M) {
      y.updateStatusBar("upload-image", M), setTimeout(function() {
        y.updateStatusBar("upload-image", y.options.imageTexts.sbInit);
      }, 1e4), v && typeof v == "function" && v(M), y.options.errorCallback(M);
    }
    function I(M) {
      var E = y.options.imageTexts.sizeUnits.split(",");
      return M.replace("#image_name#", l.name).replace("#image_size#", Dt(l.size, E)).replace("#image_max_size#", Dt(y.options.imageMaxSize, E));
    }
    if (l.size > this.options.imageMaxSize) {
      C(I(this.options.errorMessages.fileTooLarge));
      return;
    }
    var k = new FormData();
    k.append("image", l), y.options.imageCSRFToken && !y.options.imageCSRFHeader && k.append(y.options.imageCSRFName, y.options.imageCSRFToken);
    var x = new XMLHttpRequest();
    x.upload.onprogress = function(M) {
      if (M.lengthComputable) {
        var E = "" + Math.round(M.loaded * 100 / M.total);
        y.updateStatusBar("upload-image", y.options.imageTexts.sbProgress.replace("#file_name#", l.name).replace("#progress#", E));
      }
    }, x.open("POST", this.options.imageUploadEndpoint), y.options.imageCSRFToken && y.options.imageCSRFHeader && x.setRequestHeader(y.options.imageCSRFName, y.options.imageCSRFToken), x.onload = function() {
      try {
        var M = JSON.parse(this.responseText);
      } catch {
        console.error("EasyMDE: The server did not return a valid json."), C(I(y.options.errorMessages.importError));
        return;
      }
      this.status === 200 && M && !M.error && M.data && M.data.filePath ? f((y.options.imagePathAbsolute ? "" : window.location.origin + "/") + M.data.filePath) : M.error && M.error in y.options.errorMessages ? C(I(y.options.errorMessages[M.error])) : M.error ? C(I(M.error)) : (console.error("EasyMDE: Received an unexpected response after uploading the image." + this.status + " (" + this.statusText + ")"), C(I(y.options.errorMessages.importError)));
    }, x.onerror = function(M) {
      console.error("EasyMDE: An unexpected error occurred when trying to upload the image." + M.target.status + " (" + M.target.statusText + ")"), C(y.options.errorMessages.importError);
    }, x.send(k);
  }, h.prototype.uploadImageUsingCustomFunction = function(l, f) {
    var v = this;
    function y(k) {
      p(v, k);
    }
    function C(k) {
      var x = I(k);
      v.updateStatusBar("upload-image", x), setTimeout(function() {
        v.updateStatusBar("upload-image", v.options.imageTexts.sbInit);
      }, 1e4), v.options.errorCallback(x);
    }
    function I(k) {
      var x = v.options.imageTexts.sizeUnits.split(",");
      return k.replace("#image_name#", f.name).replace("#image_size#", Dt(f.size, x)).replace("#image_max_size#", Dt(v.options.imageMaxSize, x));
    }
    l.apply(this, [f, y, C]);
  }, h.prototype.setPreviewMaxHeight = function() {
    var l = this.codemirror, f = l.getWrapperElement(), v = f.nextSibling, y = parseInt(window.getComputedStyle(f).paddingTop), C = parseInt(window.getComputedStyle(f).borderTopWidth), I = parseInt(this.options.maxHeight), k = I + y * 2 + C * 2, x = k.toString() + "px";
    v.style.height = x;
  }, h.prototype.createSideBySide = function() {
    var l = this.codemirror, f = l.getWrapperElement(), v = f.nextSibling;
    if (!v || !v.classList.contains("editor-preview-side")) {
      if (v = document.createElement("div"), v.className = "editor-preview-side", this.options.previewClass)
        if (Array.isArray(this.options.previewClass))
          for (var y = 0; y < this.options.previewClass.length; y++)
            v.classList.add(this.options.previewClass[y]);
        else typeof this.options.previewClass == "string" && v.classList.add(this.options.previewClass);
      f.parentNode.insertBefore(v, f.nextSibling);
    }
    if (typeof this.options.maxHeight < "u" && this.setPreviewMaxHeight(), this.options.syncSideBySidePreviewScroll === !1) return v;
    var C = !1, I = !1;
    return l.on("scroll", function(k) {
      if (C) {
        C = !1;
        return;
      }
      I = !0;
      var x = k.getScrollInfo().height - k.getScrollInfo().clientHeight, M = parseFloat(k.getScrollInfo().top) / x, E = (v.scrollHeight - v.clientHeight) * M;
      v.scrollTop = E;
    }), v.onscroll = function() {
      if (I) {
        I = !1;
        return;
      }
      C = !0;
      var k = v.scrollHeight - v.clientHeight, x = parseFloat(v.scrollTop) / k, M = (l.getScrollInfo().height - l.getScrollInfo().clientHeight) * x;
      l.scrollTo(0, M);
    }, v;
  }, h.prototype.createToolbar = function(l) {
    if (l = l || this.options.toolbar, !(!l || l.length === 0)) {
      var f;
      for (f = 0; f < l.length; f++)
        lt[l[f]] != null && (l[f] = lt[l[f]]);
      var v = document.createElement("div");
      v.className = "editor-toolbar", v.setAttribute("role", "toolbar");
      var y = this, C = {};
      for (y.toolbar = l, f = 0; f < l.length; f++)
        if (!(l[f].name == "guide" && y.options.toolbarGuideIcon === !1) && !(y.options.hideIcons && y.options.hideIcons.indexOf(l[f].name) != -1) && !((l[f].name == "fullscreen" || l[f].name == "side-by-side") && B())) {
          if (l[f] === "|") {
            for (var I = !1, k = f + 1; k < l.length; k++)
              l[k] !== "|" && (!y.options.hideIcons || y.options.hideIcons.indexOf(l[k].name) == -1) && (I = !0);
            if (!I)
              continue;
          }
          (function(E) {
            var ie;
            if (E === "|" ? ie = ne() : E.children ? ie = K(E, y.options.toolbarTips, y.options.shortcuts, y) : ie = ue(E, !0, y.options.toolbarTips, y.options.shortcuts, "button", y), C[E.name || E] = ie, v.appendChild(ie), E.name === "upload-image") {
              var me = document.createElement("input");
              me.className = "imageInput", me.type = "file", me.multiple = !0, me.name = y.options.imageInputName, me.accept = y.options.imageAccept, me.style.display = "none", me.style.opacity = 0, v.appendChild(me);
            }
          })(l[f]);
        }
      y.toolbar_div = v, y.toolbarElements = C;
      var x = this.codemirror;
      x.on("cursorActivity", function() {
        var E = pe(x);
        for (var ie in C)
          (function(me) {
            var ye = C[me];
            E[me] ? ye.classList.add("active") : me != "fullscreen" && me != "side-by-side" && ye.classList.remove("active");
          })(ie);
      });
      var M = x.getWrapperElement();
      return M.parentNode.insertBefore(v, M), v;
    }
  }, h.prototype.createStatusbar = function(l) {
    l = l || this.options.status;
    var f = this.options, v = this.codemirror;
    if (!(!l || l.length === 0)) {
      var y = [], C, I, k, x;
      for (C = 0; C < l.length; C++)
        if (I = void 0, k = void 0, x = void 0, typeof l[C] == "object")
          y.push({
            className: l[C].className,
            defaultValue: l[C].defaultValue,
            onUpdate: l[C].onUpdate,
            onActivity: l[C].onActivity
          });
        else {
          var M = l[C];
          M === "words" ? (x = function(re) {
            re.innerHTML = Ht(v.getValue());
          }, I = function(re) {
            re.innerHTML = Ht(v.getValue());
          }) : M === "lines" ? (x = function(re) {
            re.innerHTML = v.lineCount();
          }, I = function(re) {
            re.innerHTML = v.lineCount();
          }) : M === "cursor" ? (x = function(re) {
            re.innerHTML = "1:1";
          }, k = function(re) {
            var Be = v.getCursor(), Me = Be.line + 1, Ne = Be.ch + 1;
            re.innerHTML = Me + ":" + Ne;
          }) : M === "autosave" ? x = function(re) {
            f.autosave != null && f.autosave.enabled === !0 && re.setAttribute("id", "autosaved");
          } : M === "upload-image" && (x = function(re) {
            re.innerHTML = f.imageTexts.sbInit;
          }), y.push({
            className: M,
            defaultValue: x,
            onUpdate: I,
            onActivity: k
          });
        }
      var E = document.createElement("div");
      for (E.className = "editor-statusbar", C = 0; C < y.length; C++) {
        var ie = y[C], me = document.createElement("span");
        me.className = ie.className, typeof ie.defaultValue == "function" && ie.defaultValue(me), typeof ie.onUpdate == "function" && this.codemirror.on("update", /* @__PURE__ */ (function(re, Be) {
          return function() {
            Be.onUpdate(re);
          };
        })(me, ie)), typeof ie.onActivity == "function" && this.codemirror.on("cursorActivity", /* @__PURE__ */ (function(re, Be) {
          return function() {
            Be.onActivity(re);
          };
        })(me, ie)), E.appendChild(me);
      }
      var ye = this.codemirror.getWrapperElement();
      return ye.parentNode.insertBefore(E, ye.nextSibling), E;
    }
  }, h.prototype.value = function(l) {
    var f = this.codemirror;
    if (l === void 0)
      return f.getValue();
    if (f.getDoc().setValue(l), this.isPreviewActive()) {
      var v = f.getWrapperElement(), y = v.lastChild, C = this.options.previewRender(l, y);
      C !== null && (y.innerHTML = C);
    }
    return this;
  }, h.toggleBold = X, h.toggleItalic = q, h.toggleStrikethrough = j, h.toggleBlockquote = Z, h.toggleHeadingSmaller = de, h.toggleHeadingBigger = xe, h.toggleHeading1 = Ue, h.toggleHeading2 = se, h.toggleHeading3 = Le, h.toggleHeading4 = Ee, h.toggleHeading5 = He, h.toggleHeading6 = L, h.toggleCodeBlock = he, h.toggleUnorderedList = te, h.toggleOrderedList = $, h.cleanBlock = be, h.drawLink = _e, h.drawImage = rt, h.drawUploadedImage = b, h.drawTable = G, h.drawHorizontalRule = ze, h.undo = Te, h.redo = $e, h.togglePreview = Ke, h.toggleSideBySide = Je, h.toggleFullScreen = z, h.prototype.toggleBold = function() {
    X(this);
  }, h.prototype.toggleItalic = function() {
    q(this);
  }, h.prototype.toggleStrikethrough = function() {
    j(this);
  }, h.prototype.toggleBlockquote = function() {
    Z(this);
  }, h.prototype.toggleHeadingSmaller = function() {
    de(this);
  }, h.prototype.toggleHeadingBigger = function() {
    xe(this);
  }, h.prototype.toggleHeading1 = function() {
    Ue(this);
  }, h.prototype.toggleHeading2 = function() {
    se(this);
  }, h.prototype.toggleHeading3 = function() {
    Le(this);
  }, h.prototype.toggleHeading4 = function() {
    Ee(this);
  }, h.prototype.toggleHeading5 = function() {
    He(this);
  }, h.prototype.toggleHeading6 = function() {
    L(this);
  }, h.prototype.toggleCodeBlock = function() {
    he(this);
  }, h.prototype.toggleUnorderedList = function() {
    te(this);
  }, h.prototype.toggleOrderedList = function() {
    $(this);
  }, h.prototype.cleanBlock = function() {
    be(this);
  }, h.prototype.drawLink = function() {
    _e(this);
  }, h.prototype.drawImage = function() {
    rt(this);
  }, h.prototype.drawUploadedImage = function() {
    b(this);
  }, h.prototype.drawTable = function() {
    G(this);
  }, h.prototype.drawHorizontalRule = function() {
    ze(this);
  }, h.prototype.undo = function() {
    Te(this);
  }, h.prototype.redo = function() {
    $e(this);
  }, h.prototype.togglePreview = function() {
    Ke(this);
  }, h.prototype.toggleSideBySide = function() {
    Je(this);
  }, h.prototype.toggleFullScreen = function() {
    z(this);
  }, h.prototype.isPreviewActive = function() {
    var l = this.codemirror, f = l.getWrapperElement(), v = f.lastChild;
    return v.classList.contains("editor-preview-active");
  }, h.prototype.isSideBySideActive = function() {
    var l = this.codemirror, f = l.getWrapperElement(), v = f.nextSibling;
    return v.classList.contains("editor-preview-active-side");
  }, h.prototype.isFullscreenActive = function() {
    var l = this.codemirror;
    return l.getOption("fullScreen");
  }, h.prototype.getState = function() {
    var l = this.codemirror;
    return pe(l);
  }, h.prototype.toTextArea = function() {
    var l = this.codemirror, f = l.getWrapperElement(), v = f.parentNode;
    v && (this.gui.toolbar && v.removeChild(this.gui.toolbar), this.gui.statusbar && v.removeChild(this.gui.statusbar), this.gui.sideBySide && v.removeChild(this.gui.sideBySide)), v.parentNode.insertBefore(f, v), v.remove(), l.toTextArea(), this.autosaveTimeoutId && (clearTimeout(this.autosaveTimeoutId), this.autosaveTimeoutId = void 0, this.clearAutosavedValue());
  }, Da = h, Da;
}
var Vf = Jf();
const cu = /* @__PURE__ */ If(Vf), ec = /* @__PURE__ */ ru({
  __name: "MarkdownWidget",
  props: /* @__PURE__ */ bf({
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(ae, { expose: le }) {
    const D = nu(ae, "configv"), P = ae, { id: S } = Cf(P), N = Sl(Ef.TINY_EMITTER), O = Sl(gf), B = Af().params.pageid || "", _ = ba(null);
    class ee extends en {
      refresh() {
        if (pe) {
          const z = D.value?.value || "";
          pe.value(""), pe.value(z);
        }
      }
      copyContent() {
        const z = D.value?.value || "";
        navigator.clipboard?.writeText(z).catch(() => {
        });
      }
      scrollToTop() {
        if (_.value) {
          const z = _.value.querySelector(".editor-preview");
          z ? z.scrollTop = 0 : _.value.scrollTop = 0;
        }
      }
      scrollToHash(z) {
        if (_.value) {
          const X = _.value.querySelector(`#${z}`);
          X && X.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
    const Q = new ee();
    le(Q), wf(() => {
      S?.value && O.unregisterInstance(S.value);
    });
    const K = () => {
      S?.value && N.emit("widget:MarkdownWidget:click", {
        type: "widget:MarkdownWidget:click",
        widgetId: S.value,
        payload: { widgetId: S.value, timestamp: Date.now() }
      });
    }, ue = () => {
      S?.value && N.emit("widget:MarkdownWidget:right_click", {
        type: "widget:MarkdownWidget:right_click",
        widgetId: S.value,
        payload: { widgetId: S.value, timestamp: Date.now() }
      });
    }, ne = (oe) => {
      S?.value && N.emit("widget:MarkdownWidget:text_change", {
        type: "widget:MarkdownWidget:text_change",
        widgetId: S.value,
        payload: { widgetId: S.value, text: oe, timestamp: Date.now() }
      });
    }, Ce = ba(null);
    let pe = null;
    return iu(() => {
      S?.value && O.registerInstance(S.value, Q, "MarkdownWidget", B), pe = new cu({
        toolbar: !1,
        element: Ce.value,
        status: !1,
        previewClass: "markdown-body"
      }), pe.value(D.value?.value || ""), pe.togglePreview();
    }), kf(() => D.value?.value, (oe, z) => {
      oe !== z && ne(oe || ""), Ce.value && pe?.value(oe || "");
    }, { immediate: !0 }), (oe, z) => (ou(), au("div", {
      class: "markdown-wrapper",
      onClick: K,
      onContextmenu: Sf(ue, ["prevent"]),
      ref_key: "wrapperRef",
      ref: _
    }, [
      lu("textarea", {
        ref_key: "container",
        ref: Ce
      }, "            " + Ff(D.value.value) + `
        `, 513)
    ], 544));
  }
}), hu = (ae, le) => {
  const D = ae.__vccOpts || ae;
  for (const [P, S] of le)
    D[P] = S;
  return D;
}, tc = /* @__PURE__ */ hu(ec, [["__scopeId", "data-v-73f402b4"]]), rc = { class: "settings_container" }, nc = /* @__PURE__ */ ru({
  __name: "MarkdownWidgetSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(ae) {
    const le = nu(ae, "modelValue"), D = ba(null);
    return iu(() => {
      const P = new cu({
        element: D.value
      });
      P.codemirror.on("change", () => {
        le.value.value = P.value();
      });
    }), (P, S) => (ou(), au("div", rc, [
      lu("textarea", {
        ref_key: "container",
        ref: D
      }, null, 512)
    ]));
  }
}), ic = /* @__PURE__ */ hu(nc, [["__scopeId", "data-v-23d61fea"]]), ac = [
  {
    name: "Markdown Clicked",
    type: "click",
    description: "Triggered when the markdown widget is clicked",
    payloadType: va
  },
  {
    name: "Markdown Right Clicked",
    type: "right_click",
    description: "Triggered when the markdown widget is right-clicked",
    payloadType: va
  },
  {
    name: "Markdown Text Changed",
    type: "text_change",
    description: "Triggered when the markdown text changes",
    payloadType: va
  }
];
var oc = Object.defineProperty, lc = Object.getOwnPropertyDescriptor, Ca = (ae, le, D, P) => {
  for (var S = P > 1 ? void 0 : P ? lc(le, D) : le, N = ae.length - 1, O; N >= 0; N--)
    (O = ae[N]) && (S = (P ? O(le, D, S) : O(S)) || S);
  return P && S && oc(le, D, S), S;
}, tu = (ae, le) => (D, P) => le(D, P, ae);
const Vr = "MarkdownWidget";
let pi = class {
  constructor(ae, le) {
    this.events = ae, this.actions = le;
  }
  type = Vr;
  component = tc;
  settingsComponent = ic;
  supportedDSTypes = [];
  icon = Tf;
  name = "Markdown";
  register() {
    this.events.registerWidget(Vr, ac), this.actions.registerWidgetType(Vr, en, "widget");
  }
  unregister() {
    this.events.unregisterWidget(Vr), this.actions.unregisterWidgetType(Vr);
  }
};
Ca([
  yf()
], pi.prototype, "register", 1);
Ca([
  xf()
], pi.prototype, "unregister", 1);
pi = Ca([
  Df({
    service: [Lf],
    properties: { "widget.type": Vr }
  }),
  tu(0, kl(vf)),
  tu(1, kl(mf))
], pi);
export {
  tc as MarkdownWidget,
  pi as MarkdownWidgetProvider,
  ic as MarkdownWidgetSettings
};
