(function(){var i="ui.vue.datasource.valhalla",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent="/* required styles */\r\n\r\n.leaflet-pane,\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-tile-container,\r\n.leaflet-pane > svg,\r\n.leaflet-pane > canvas,\r\n.leaflet-zoom-box,\r\n.leaflet-image-layer,\r\n.leaflet-layer {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\t}\r\n.leaflet-container {\r\n\toverflow: hidden;\r\n\t}\r\n.leaflet-tile,\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\t-webkit-user-select: none;\r\n\t   -moz-user-select: none;\r\n\t        user-select: none;\r\n\t  -webkit-user-drag: none;\r\n\t}\r\n/* Prevents IE11 from highlighting tiles in blue */\r\n.leaflet-tile::selection {\r\n\tbackground: transparent;\r\n}\r\n/* Safari renders non-retina tile on retina better with this, but Chrome is worse */\r\n.leaflet-safari .leaflet-tile {\r\n\timage-rendering: -webkit-optimize-contrast;\r\n\t}\r\n/* hack that prevents hw layers \"stretching\" when loading new tiles */\r\n.leaflet-safari .leaflet-tile-container {\r\n\twidth: 1600px;\r\n\theight: 1600px;\r\n\t-webkit-transform-origin: 0 0;\r\n\t}\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow {\r\n\tdisplay: block;\r\n\t}\r\n/* .leaflet-container svg: reset svg max-width decleration shipped in Joomla! (joomla.org) 3.x */\r\n/* .leaflet-container img: map is broken in FF if you have max-width: 100% on tiles */\r\n.leaflet-container .leaflet-overlay-pane svg {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\t}\r\n.leaflet-container .leaflet-marker-pane img,\r\n.leaflet-container .leaflet-shadow-pane img,\r\n.leaflet-container .leaflet-tile-pane img,\r\n.leaflet-container img.leaflet-image-layer,\r\n.leaflet-container .leaflet-tile {\r\n\tmax-width: none !important;\r\n\tmax-height: none !important;\r\n\twidth: auto;\r\n\tpadding: 0;\r\n\t}\r\n\r\n.leaflet-container img.leaflet-tile {\r\n\t/* See: https://bugs.chromium.org/p/chromium/issues/detail?id=600120 */\r\n\tmix-blend-mode: plus-lighter;\r\n}\r\n\r\n.leaflet-container.leaflet-touch-zoom {\r\n\t-ms-touch-action: pan-x pan-y;\r\n\ttouch-action: pan-x pan-y;\r\n\t}\r\n.leaflet-container.leaflet-touch-drag {\r\n\t-ms-touch-action: pinch-zoom;\r\n\t/* Fallback for FF which doesn't support pinch-zoom */\r\n\ttouch-action: none;\r\n\ttouch-action: pinch-zoom;\r\n}\r\n.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom {\r\n\t-ms-touch-action: none;\r\n\ttouch-action: none;\r\n}\r\n.leaflet-container {\r\n\t-webkit-tap-highlight-color: transparent;\r\n}\r\n.leaflet-container a {\r\n\t-webkit-tap-highlight-color: rgba(51, 181, 229, 0.4);\r\n}\r\n.leaflet-tile {\r\n\tfilter: inherit;\r\n\tvisibility: hidden;\r\n\t}\r\n.leaflet-tile-loaded {\r\n\tvisibility: inherit;\r\n\t}\r\n.leaflet-zoom-box {\r\n\twidth: 0;\r\n\theight: 0;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tz-index: 800;\r\n\t}\r\n/* workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=888319 */\r\n.leaflet-overlay-pane svg {\r\n\t-moz-user-select: none;\r\n\t}\r\n\r\n.leaflet-pane         { z-index: 400; }\r\n\r\n.leaflet-tile-pane    { z-index: 200; }\r\n.leaflet-overlay-pane { z-index: 400; }\r\n.leaflet-shadow-pane  { z-index: 500; }\r\n.leaflet-marker-pane  { z-index: 600; }\r\n.leaflet-tooltip-pane   { z-index: 650; }\r\n.leaflet-popup-pane   { z-index: 700; }\r\n\r\n.leaflet-map-pane canvas { z-index: 100; }\r\n.leaflet-map-pane svg    { z-index: 200; }\r\n\r\n.leaflet-vml-shape {\r\n\twidth: 1px;\r\n\theight: 1px;\r\n\t}\r\n.lvml {\r\n\tbehavior: url(#default#VML);\r\n\tdisplay: inline-block;\r\n\tposition: absolute;\r\n\t}\r\n\r\n\r\n/* control positioning */\r\n\r\n.leaflet-control {\r\n\tposition: relative;\r\n\tz-index: 800;\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-top,\r\n.leaflet-bottom {\r\n\tposition: absolute;\r\n\tz-index: 1000;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-top {\r\n\ttop: 0;\r\n\t}\r\n.leaflet-right {\r\n\tright: 0;\r\n\t}\r\n.leaflet-bottom {\r\n\tbottom: 0;\r\n\t}\r\n.leaflet-left {\r\n\tleft: 0;\r\n\t}\r\n.leaflet-control {\r\n\tfloat: left;\r\n\tclear: both;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tfloat: right;\r\n\t}\r\n.leaflet-top .leaflet-control {\r\n\tmargin-top: 10px;\r\n\t}\r\n.leaflet-bottom .leaflet-control {\r\n\tmargin-bottom: 10px;\r\n\t}\r\n.leaflet-left .leaflet-control {\r\n\tmargin-left: 10px;\r\n\t}\r\n.leaflet-right .leaflet-control {\r\n\tmargin-right: 10px;\r\n\t}\r\n\r\n\r\n/* zoom and fade animations */\r\n\r\n.leaflet-fade-anim .leaflet-popup {\r\n\topacity: 0;\r\n\t-webkit-transition: opacity 0.2s linear;\r\n\t   -moz-transition: opacity 0.2s linear;\r\n\t        transition: opacity 0.2s linear;\r\n\t}\r\n.leaflet-fade-anim .leaflet-map-pane .leaflet-popup {\r\n\topacity: 1;\r\n\t}\r\n.leaflet-zoom-animated {\r\n\t-webkit-transform-origin: 0 0;\r\n\t    -ms-transform-origin: 0 0;\r\n\t        transform-origin: 0 0;\r\n\t}\r\nsvg.leaflet-zoom-animated {\r\n\twill-change: transform;\r\n}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-animated {\r\n\t-webkit-transition: -webkit-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t   -moz-transition:    -moz-transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t        transition:         transform 0.25s cubic-bezier(0,0,0.25,1);\r\n\t}\r\n.leaflet-zoom-anim .leaflet-tile,\r\n.leaflet-pan-anim .leaflet-tile {\r\n\t-webkit-transition: none;\r\n\t   -moz-transition: none;\r\n\t        transition: none;\r\n\t}\r\n\r\n.leaflet-zoom-anim .leaflet-zoom-hide {\r\n\tvisibility: hidden;\r\n\t}\r\n\r\n\r\n/* cursors */\r\n\r\n.leaflet-interactive {\r\n\tcursor: pointer;\r\n\t}\r\n.leaflet-grab {\r\n\tcursor: -webkit-grab;\r\n\tcursor:    -moz-grab;\r\n\tcursor:         grab;\r\n\t}\r\n.leaflet-crosshair,\r\n.leaflet-crosshair .leaflet-interactive {\r\n\tcursor: crosshair;\r\n\t}\r\n.leaflet-popup-pane,\r\n.leaflet-control {\r\n\tcursor: auto;\r\n\t}\r\n.leaflet-dragging .leaflet-grab,\r\n.leaflet-dragging .leaflet-grab .leaflet-interactive,\r\n.leaflet-dragging .leaflet-marker-draggable {\r\n\tcursor: move;\r\n\tcursor: -webkit-grabbing;\r\n\tcursor:    -moz-grabbing;\r\n\tcursor:         grabbing;\r\n\t}\r\n\r\n/* marker & overlays interactivity */\r\n.leaflet-marker-icon,\r\n.leaflet-marker-shadow,\r\n.leaflet-image-layer,\r\n.leaflet-pane > svg path,\r\n.leaflet-tile-container {\r\n\tpointer-events: none;\r\n\t}\r\n\r\n.leaflet-marker-icon.leaflet-interactive,\r\n.leaflet-image-layer.leaflet-interactive,\r\n.leaflet-pane > svg path.leaflet-interactive,\r\nsvg.leaflet-image-layer.leaflet-interactive path {\r\n\tpointer-events: visiblePainted; /* IE 9-10 doesn't have auto */\r\n\tpointer-events: auto;\r\n\t}\r\n\r\n/* visual tweaks */\r\n\r\n.leaflet-container {\r\n\tbackground: #ddd;\r\n\toutline-offset: 1px;\r\n\t}\r\n.leaflet-container a {\r\n\tcolor: #0078A8;\r\n\t}\r\n.leaflet-zoom-box {\r\n\tborder: 2px dotted #38f;\r\n\tbackground: rgba(255,255,255,0.5);\r\n\t}\r\n\r\n\r\n/* general typography */\r\n.leaflet-container {\r\n\tfont-family: \"Helvetica Neue\", Arial, Helvetica, sans-serif;\r\n\tfont-size: 12px;\r\n\tfont-size: 0.75rem;\r\n\tline-height: 1.5;\r\n\t}\r\n\r\n\r\n/* general toolbar styles */\r\n\r\n.leaflet-bar {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.65);\r\n\tborder-radius: 4px;\r\n\t}\r\n.leaflet-bar a {\r\n\tbackground-color: #fff;\r\n\tborder-bottom: 1px solid #ccc;\r\n\twidth: 26px;\r\n\theight: 26px;\r\n\tline-height: 26px;\r\n\tdisplay: block;\r\n\ttext-align: center;\r\n\ttext-decoration: none;\r\n\tcolor: black;\r\n\t}\r\n.leaflet-bar a,\r\n.leaflet-control-layers-toggle {\r\n\tbackground-position: 50% 50%;\r\n\tbackground-repeat: no-repeat;\r\n\tdisplay: block;\r\n\t}\r\n.leaflet-bar a:hover,\r\n.leaflet-bar a:focus {\r\n\tbackground-color: #f4f4f4;\r\n\t}\r\n.leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 4px;\r\n\tborder-top-right-radius: 4px;\r\n\t}\r\n.leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 4px;\r\n\tborder-bottom-right-radius: 4px;\r\n\tborder-bottom: none;\r\n\t}\r\n.leaflet-bar a.leaflet-disabled {\r\n\tcursor: default;\r\n\tbackground-color: #f4f4f4;\r\n\tcolor: #bbb;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-bar a {\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tline-height: 30px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:first-child {\r\n\tborder-top-left-radius: 2px;\r\n\tborder-top-right-radius: 2px;\r\n\t}\r\n.leaflet-touch .leaflet-bar a:last-child {\r\n\tborder-bottom-left-radius: 2px;\r\n\tborder-bottom-right-radius: 2px;\r\n\t}\r\n\r\n/* zoom control */\r\n\r\n.leaflet-control-zoom-in,\r\n.leaflet-control-zoom-out {\r\n\tfont: bold 18px 'Lucida Console', Monaco, monospace;\r\n\ttext-indent: 1px;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-zoom-in, .leaflet-touch .leaflet-control-zoom-out  {\r\n\tfont-size: 22px;\r\n\t}\r\n\r\n\r\n/* layers control */\r\n\r\n.leaflet-control-layers {\r\n\tbox-shadow: 0 1px 5px rgba(0,0,0,0.4);\r\n\tbackground: #fff;\r\n\tborder-radius: 5px;\r\n\t}\r\n.leaflet-control-layers-toggle {\r\n\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);\r\n\twidth: 36px;\r\n\theight: 36px;\r\n\t}\r\n.leaflet-retina .leaflet-control-layers-toggle {\r\n\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);\r\n\tbackground-size: 26px 26px;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers-toggle {\r\n\twidth: 44px;\r\n\theight: 44px;\r\n\t}\r\n.leaflet-control-layers .leaflet-control-layers-list,\r\n.leaflet-control-layers-expanded .leaflet-control-layers-toggle {\r\n\tdisplay: none;\r\n\t}\r\n.leaflet-control-layers-expanded .leaflet-control-layers-list {\r\n\tdisplay: block;\r\n\tposition: relative;\r\n\t}\r\n.leaflet-control-layers-expanded {\r\n\tpadding: 6px 10px 6px 6px;\r\n\tcolor: #333;\r\n\tbackground: #fff;\r\n\t}\r\n.leaflet-control-layers-scrollbar {\r\n\toverflow-y: scroll;\r\n\toverflow-x: hidden;\r\n\tpadding-right: 5px;\r\n\t}\r\n.leaflet-control-layers-selector {\r\n\tmargin-top: 2px;\r\n\tposition: relative;\r\n\ttop: 1px;\r\n\t}\r\n.leaflet-control-layers label {\r\n\tdisplay: block;\r\n\tfont-size: 13px;\r\n\tfont-size: 1.08333em;\r\n\t}\r\n.leaflet-control-layers-separator {\r\n\theight: 0;\r\n\tborder-top: 1px solid #ddd;\r\n\tmargin: 5px -10px 5px -6px;\r\n\t}\r\n\r\n/* Default icon URLs */\r\n.leaflet-default-icon-path { /* used only in path-guessing heuristic, see L.Icon.Default */\r\n\tbackground-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=);\r\n\t}\r\n\r\n\r\n/* attribution and scale controls */\r\n\r\n.leaflet-container .leaflet-control-attribution {\r\n\tbackground: #fff;\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\tmargin: 0;\r\n\t}\r\n.leaflet-control-attribution,\r\n.leaflet-control-scale-line {\r\n\tpadding: 0 5px;\r\n\tcolor: #333;\r\n\tline-height: 1.4;\r\n\t}\r\n.leaflet-control-attribution a {\r\n\ttext-decoration: none;\r\n\t}\r\n.leaflet-control-attribution a:hover,\r\n.leaflet-control-attribution a:focus {\r\n\ttext-decoration: underline;\r\n\t}\r\n.leaflet-attribution-flag {\r\n\tdisplay: inline !important;\r\n\tvertical-align: baseline !important;\r\n\twidth: 1em;\r\n\theight: 0.6669em;\r\n\t}\r\n.leaflet-left .leaflet-control-scale {\r\n\tmargin-left: 5px;\r\n\t}\r\n.leaflet-bottom .leaflet-control-scale {\r\n\tmargin-bottom: 5px;\r\n\t}\r\n.leaflet-control-scale-line {\r\n\tborder: 2px solid #777;\r\n\tborder-top: none;\r\n\tline-height: 1.1;\r\n\tpadding: 2px 5px 1px;\r\n\twhite-space: nowrap;\r\n\t-moz-box-sizing: border-box;\r\n\t     box-sizing: border-box;\r\n\tbackground: rgba(255, 255, 255, 0.8);\r\n\ttext-shadow: 1px 1px #fff;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child) {\r\n\tborder-top: 2px solid #777;\r\n\tborder-bottom: none;\r\n\tmargin-top: -2px;\r\n\t}\r\n.leaflet-control-scale-line:not(:first-child):not(:last-child) {\r\n\tborder-bottom: 2px solid #777;\r\n\t}\r\n\r\n.leaflet-touch .leaflet-control-attribution,\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tbox-shadow: none;\r\n\t}\r\n.leaflet-touch .leaflet-control-layers,\r\n.leaflet-touch .leaflet-bar {\r\n\tborder: 2px solid rgba(0,0,0,0.2);\r\n\tbackground-clip: padding-box;\r\n\t}\r\n\r\n\r\n/* popup */\r\n\r\n.leaflet-popup {\r\n\tposition: absolute;\r\n\ttext-align: center;\r\n\tmargin-bottom: 20px;\r\n\t}\r\n.leaflet-popup-content-wrapper {\r\n\tpadding: 1px;\r\n\ttext-align: left;\r\n\tborder-radius: 12px;\r\n\t}\r\n.leaflet-popup-content {\r\n\tmargin: 13px 24px 13px 20px;\r\n\tline-height: 1.3;\r\n\tfont-size: 13px;\r\n\tfont-size: 1.08333em;\r\n\tmin-height: 1px;\r\n\t}\r\n.leaflet-popup-content p {\r\n\tmargin: 17px 0;\r\n\tmargin: 1.3em 0;\r\n\t}\r\n.leaflet-popup-tip-container {\r\n\twidth: 40px;\r\n\theight: 20px;\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\tmargin-top: -1px;\r\n\tmargin-left: -20px;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\t}\r\n.leaflet-popup-tip {\r\n\twidth: 17px;\r\n\theight: 17px;\r\n\tpadding: 1px;\r\n\r\n\tmargin: -10px auto 0;\r\n\tpointer-events: auto;\r\n\r\n\t-webkit-transform: rotate(45deg);\r\n\t   -moz-transform: rotate(45deg);\r\n\t    -ms-transform: rotate(45deg);\r\n\t        transform: rotate(45deg);\r\n\t}\r\n.leaflet-popup-content-wrapper,\r\n.leaflet-popup-tip {\r\n\tbackground: white;\r\n\tcolor: #333;\r\n\tbox-shadow: 0 3px 14px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tborder: none;\r\n\ttext-align: center;\r\n\twidth: 24px;\r\n\theight: 24px;\r\n\tfont: 16px/24px Tahoma, Verdana, sans-serif;\r\n\tcolor: #757575;\r\n\ttext-decoration: none;\r\n\tbackground: transparent;\r\n\t}\r\n.leaflet-container a.leaflet-popup-close-button:hover,\r\n.leaflet-container a.leaflet-popup-close-button:focus {\r\n\tcolor: #585858;\r\n\t}\r\n.leaflet-popup-scrolled {\r\n\toverflow: auto;\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-popup-content-wrapper {\r\n\t-ms-zoom: 1;\r\n\t}\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\twidth: 24px;\r\n\tmargin: 0 auto;\r\n\r\n\t-ms-filter: \"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";\r\n\tfilter: progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678);\r\n\t}\r\n\r\n.leaflet-oldie .leaflet-control-zoom,\r\n.leaflet-oldie .leaflet-control-layers,\r\n.leaflet-oldie .leaflet-popup-content-wrapper,\r\n.leaflet-oldie .leaflet-popup-tip {\r\n\tborder: 1px solid #999;\r\n\t}\r\n\r\n\r\n/* div icon */\r\n\r\n.leaflet-div-icon {\r\n\tbackground: #fff;\r\n\tborder: 1px solid #666;\r\n\t}\r\n\r\n\r\n/* Tooltip */\r\n/* Base styles for the element that has a tooltip */\r\n.leaflet-tooltip {\r\n\tposition: absolute;\r\n\tpadding: 6px;\r\n\tbackground-color: #fff;\r\n\tborder: 1px solid #fff;\r\n\tborder-radius: 3px;\r\n\tcolor: #222;\r\n\twhite-space: nowrap;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\t-ms-user-select: none;\r\n\tuser-select: none;\r\n\tpointer-events: none;\r\n\tbox-shadow: 0 1px 3px rgba(0,0,0,0.4);\r\n\t}\r\n.leaflet-tooltip.leaflet-interactive {\r\n\tcursor: pointer;\r\n\tpointer-events: auto;\r\n\t}\r\n.leaflet-tooltip-top:before,\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\tposition: absolute;\r\n\tpointer-events: none;\r\n\tborder: 6px solid transparent;\r\n\tbackground: transparent;\r\n\tcontent: \"\";\r\n\t}\r\n\r\n/* Directions */\r\n\r\n.leaflet-tooltip-bottom {\r\n\tmargin-top: 6px;\r\n}\r\n.leaflet-tooltip-top {\r\n\tmargin-top: -6px;\r\n}\r\n.leaflet-tooltip-bottom:before,\r\n.leaflet-tooltip-top:before {\r\n\tleft: 50%;\r\n\tmargin-left: -6px;\r\n\t}\r\n.leaflet-tooltip-top:before {\r\n\tbottom: 0;\r\n\tmargin-bottom: -12px;\r\n\tborder-top-color: #fff;\r\n\t}\r\n.leaflet-tooltip-bottom:before {\r\n\ttop: 0;\r\n\tmargin-top: -12px;\r\n\tmargin-left: -6px;\r\n\tborder-bottom-color: #fff;\r\n\t}\r\n.leaflet-tooltip-left {\r\n\tmargin-left: -6px;\r\n}\r\n.leaflet-tooltip-right {\r\n\tmargin-left: 6px;\r\n}\r\n.leaflet-tooltip-left:before,\r\n.leaflet-tooltip-right:before {\r\n\ttop: 50%;\r\n\tmargin-top: -6px;\r\n\t}\r\n.leaflet-tooltip-left:before {\r\n\tright: 0;\r\n\tmargin-right: -12px;\r\n\tborder-left-color: #fff;\r\n\t}\r\n.leaflet-tooltip-right:before {\r\n\tleft: 0;\r\n\tmargin-left: -12px;\r\n\tborder-right-color: #fff;\r\n\t}\r\n\r\n/* Printing */\r\n\r\n@media print {\r\n\t/* Prevent printers from removing background-images of controls. */\r\n\t.leaflet-control {\r\n\t\t-webkit-print-color-adjust: exact;\r\n\t\tprint-color-adjust: exact;\r\n\t\t}\r\n\t}\r\n\n.valhalla-preview[data-v-5cc943b1] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n.sidebar[data-v-5cc943b1] {\n  width: 360px;\n  min-width: 300px;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid #e5e7eb;\n  overflow-y: auto;\n  background: #fafafa;\n}\n.search-section[data-v-5cc943b1] {\n  padding: 0.75rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: white;\n}\n.search-box[data-v-5cc943b1] {\n  position: relative;\n}\n.search-input[data-v-5cc943b1] {\n  width: 100%;\n}\n.search-results[data-v-5cc943b1] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 0 0 0.5rem 0.5rem;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  z-index: 1000;\n  max-height: 250px;\n  overflow-y: auto;\n}\n.search-result-item[data-v-5cc943b1] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  padding: 0.5rem 0.75rem;\n  cursor: pointer;\n  font-size: 0.85em;\n  border-bottom: 1px solid #f3f4f6;\n}\n.search-result-item[data-v-5cc943b1]:hover {\n  background-color: #f0f4ff;\n}\n.search-result-item[data-v-5cc943b1]:last-child {\n  border-bottom: none;\n}\n.controls-row[data-v-5cc943b1] {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  border-bottom: 1px solid #e5e7eb;\n  background: white;\n}\n.costing-select[data-v-5cc943b1] {\n  flex: 1;\n}\n.waypoints-list[data-v-5cc943b1] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0.5rem;\n}\n.waypoints-header[data-v-5cc943b1] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0.25rem 0.5rem 0.5rem;\n}\n.section-title[data-v-5cc943b1] {\n  font-weight: 600;\n  font-size: 0.9em;\n  color: #374151;\n}\n.hint[data-v-5cc943b1] {\n  font-size: 0.75em;\n  color: #9ca3af;\n}\n.waypoint-item[data-v-5cc943b1] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.4rem 0.5rem;\n  margin-bottom: 0.25rem;\n  background: white;\n  border-radius: 0.375rem;\n  border: 1px solid #e5e7eb;\n  cursor: grab;\n  transition: box-shadow 0.15s, opacity 0.15s;\n}\n.waypoint-item[data-v-5cc943b1]:hover {\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.waypoint-item.dragging[data-v-5cc943b1] {\n  opacity: 0.5;\n}\n.waypoint-grip[data-v-5cc943b1] {\n  cursor: grab;\n  display: flex;\n  align-items: center;\n}\n.waypoint-marker[data-v-5cc943b1] {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-size: 0.7em;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.waypoint-info[data-v-5cc943b1] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.waypoint-role[data-v-5cc943b1] {\n  font-size: 0.7em;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n}\n.waypoint-name[data-v-5cc943b1] {\n  font-size: 0.85em;\n  color: #374151;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.waypoint-actions[data-v-5cc943b1] {\n  display: flex;\n  gap: 0;\n  flex-shrink: 0;\n}\n.no-waypoints[data-v-5cc943b1] {\n  text-align: center;\n  color: #9ca3af;\n  font-size: 0.85em;\n  padding: 2rem 1rem;\n}\n.action-buttons[data-v-5cc943b1] {\n  display: flex;\n  gap: 0.5rem;\n  padding: 0.75rem;\n  border-top: 1px solid #e5e7eb;\n  background: white;\n}\n.route-summary[data-v-5cc943b1] {\n  border-top: 1px solid #e5e7eb;\n  padding: 0.75rem;\n  background: white;\n}\n.summary-header[data-v-5cc943b1] {\n  font-weight: 600;\n  font-size: 0.95em;\n  color: #111827;\n  margin-bottom: 0.5rem;\n}\n.summary-stats[data-v-5cc943b1] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 0.5rem;\n}\n.stat[data-v-5cc943b1] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.9em;\n  color: #374151;\n  font-weight: 500;\n}\n.maneuvers-list[data-v-5cc943b1] {\n  max-height: 200px;\n  overflow-y: auto;\n  border-top: 1px solid #f3f4f6;\n  padding-top: 0.5rem;\n  margin-top: 0.25rem;\n}\n.maneuver-item[data-v-5cc943b1] {\n  display: flex;\n  gap: 0.4rem;\n  padding: 0.2rem 0;\n  font-size: 0.8em;\n  color: #4b5563;\n  align-items: flex-start;\n}\n.maneuver-index[data-v-5cc943b1] {\n  color: #9ca3af;\n  min-width: 1.5em;\n  text-align: right;\n}\n.maneuver-text[data-v-5cc943b1] {\n  flex: 1;\n}\n.maneuver-dist[data-v-5cc943b1] {\n  color: #9ca3af;\n  flex-shrink: 0;\n}\n.map-container[data-v-5cc943b1] {\n  flex: 1;\n  min-width: 300px;\n}\n";})();
const { DATASOURCE_REPOSITORY } = __tsm__.require("org.eclipse.daanse.board.app.lib.repository.datasource");
import { defineComponent, h as h$1, ref, reactive, provide, computed, onMounted, markRaw, nextTick, onBeforeUnmount, inject, watch, onUnmounted, render, shallowRef, resolveComponent, createElementBlock, openBlock, createElementVNode, createCommentVNode, createVNode, withKeys, withCtx, Fragment, renderList, toDisplayString, createBlock, createTextVNode, normalizeClass, normalizeStyle, unref } from "vue";
const { useTemporaryStore } = __tsm__.require("org.eclipse.daanse.board.app.ui.vue.composables");
const ce = (e, o) => {
  for (const t of Object.keys(o))
    e.on(t, o[t]);
}, ye = (e) => {
  for (const o of Object.keys(e)) {
    const t = e[o];
    t && k(t.cancel) && t.cancel();
  }
}, Je = (e) => !e || typeof e.charAt != "function" ? e : e.charAt(0).toUpperCase() + e.slice(1), k = (e) => typeof e == "function", L = (e, o, t) => {
  for (const n in t) {
    const s = "set" + Je(n);
    e[s] ? watch(
      () => t[n],
      (r, l) => {
        e[s](r, l);
      }
    ) : o[s] && watch(
      () => t[n],
      (r) => {
        o[s](r);
      }
    );
  }
}, f = (e, o, t = {}) => {
  const n = { ...t };
  for (const s in e) {
    const r = o[s], l = e[s];
    r && (r && r.custom === true || l !== void 0 && (n[s] = l));
  }
  return n;
}, T = (e) => {
  const o = {}, t = {};
  for (const n in e)
    if (n.startsWith("on") && !n.startsWith("onUpdate") && n !== "onReady") {
      const s = n.slice(2).toLocaleLowerCase();
      o[s] = e[n];
    } else
      t[n] = e[n];
  return { listeners: o, attrs: t };
}, qe = async (e) => {
  const o = await Promise.all([
    import("./marker-icon-2x-DN7sBQTc.js"),
    import("./marker-icon-Dxo8DtlK.js"),
    import("./marker-shadow-BWlltkiu.js")
  ]);
  delete e.Default.prototype._getIconUrl, e.Default.mergeOptions({
    iconRetinaUrl: o[0].default,
    iconUrl: o[1].default,
    shadowUrl: o[2].default
  });
}, Y = (e) => {
  const o = ref(
    (...n) => console.warn(`Method ${e} has been invoked without being replaced`)
  ), t = (...n) => o.value(...n);
  return t.wrapped = o, provide(e, t), t;
}, V = (e, o) => e.wrapped.value = o, b = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, m = (e) => {
  const o = inject(e);
  if (o === void 0)
    throw new Error(
      `Attempt to inject ${e.description} before it was provided.`
    );
  return o;
}, h = Symbol(
  "useGlobalLeaflet"
), M = Symbol("addLayer"), ee = Symbol("removeLayer"), H = Symbol(
  "registerControl"
), me = Symbol(
  "registerLayerControl"
), ve = Symbol(
  "canSetParentHtml"
), be = Symbol("setParentHtml"), fe = Symbol("setIcon"), ge = Symbol("bindPopup"), Le = Symbol("bindTooltip"), he = Symbol("unbindPopup"), Oe = Symbol("unbindTooltip"), W = {
  options: {
    type: Object,
    default: () => ({}),
    custom: true
  }
}, J = (e) => ({ options: e.options, methods: {} }), D = {
  ...W,
  pane: {
    type: String
  },
  attribution: {
    type: String
  },
  name: {
    type: String,
    custom: true
  },
  layerType: {
    type: String,
    custom: true
  },
  visible: {
    type: Boolean,
    custom: true,
    default: true
  }
}, q = (e, o, t) => {
  const n = m(M), s = m(ee), { options: r, methods: l } = J(e), a = f(
    e,
    D,
    r
  ), i = () => n({ leafletObject: o.value }), u = () => s({ leafletObject: o.value }), d = {
    ...l,
    setAttribution(y) {
      u(), o.value.options.attribution = y, e.visible && i();
    },
    setName() {
      u(), e.visible && i();
    },
    setLayerType() {
      u(), e.visible && i();
    },
    setVisible(y) {
      o.value && (y ? i() : u());
    },
    bindPopup(y) {
      if (!o.value || !k(o.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      o.value.bindPopup(y);
    },
    bindTooltip(y) {
      if (!o.value || !k(o.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      o.value.bindTooltip(y);
    },
    unbindTooltip() {
      o.value && (k(o.value.closeTooltip) && o.value.closeTooltip(), k(o.value.unbindTooltip) && o.value.unbindTooltip());
    },
    unbindPopup() {
      o.value && (k(o.value.closePopup) && o.value.closePopup(), k(o.value.unbindPopup) && o.value.unbindPopup());
    },
    updateVisibleProp(y) {
      t.emit("update:visible", y);
    }
  };
  return provide(ge, d.bindPopup), provide(Le, d.bindTooltip), provide(he, d.unbindPopup), provide(Oe, d.unbindTooltip), onUnmounted(() => {
    d.unbindPopup(), d.unbindTooltip(), u();
  }), { options: a, methods: d };
}, G = (e, o) => {
  if (e && o.default)
    return h$1("div", { style: { display: "none" } }, o.default());
}, Se = {
  ...D,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, Ke = (e, o, t) => {
  const { options: n, methods: s } = q(
    e,
    o,
    t
  );
  return { options: f(
    e,
    Se,
    n
  ), methods: s };
}, ne = {
  ...Se,
  stroke: {
    type: Boolean,
    default: void 0
  },
  color: {
    type: String
  },
  weight: {
    type: Number
  },
  opacity: {
    type: Number
  },
  lineCap: {
    type: String
  },
  lineJoin: {
    type: String
  },
  dashArray: {
    type: String
  },
  dashOffset: {
    type: String
  },
  fill: {
    type: Boolean,
    default: void 0
  },
  fillColor: {
    type: String
  },
  fillOpacity: {
    type: Number
  },
  fillRule: {
    type: String
  },
  className: {
    type: String
  }
}, _e = (e, o, t) => {
  const { options: n, methods: s } = Ke(e, o, t), r = f(
    e,
    ne,
    n
  ), l = m(ee), a = {
    ...s,
    setStroke(i) {
      o.value.setStyle({ stroke: i });
    },
    setColor(i) {
      o.value.setStyle({ color: i });
    },
    setWeight(i) {
      o.value.setStyle({ weight: i });
    },
    setOpacity(i) {
      o.value.setStyle({ opacity: i });
    },
    setLineCap(i) {
      o.value.setStyle({ lineCap: i });
    },
    setLineJoin(i) {
      o.value.setStyle({ lineJoin: i });
    },
    setDashArray(i) {
      o.value.setStyle({ dashArray: i });
    },
    setDashOffset(i) {
      o.value.setStyle({ dashOffset: i });
    },
    setFill(i) {
      o.value.setStyle({ fill: i });
    },
    setFillColor(i) {
      o.value.setStyle({ fillColor: i });
    },
    setFillOpacity(i) {
      o.value.setStyle({ fillOpacity: i });
    },
    setFillRule(i) {
      o.value.setStyle({ fillRule: i });
    },
    setClassName(i) {
      o.value.setStyle({ className: i });
    }
  };
  return onBeforeUnmount(() => {
    l({ leafletObject: o.value });
  }), { options: r, methods: a };
}, re = {
  ...ne,
  /**
   * Radius of the marker in pixels.
   */
  radius: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    required: true,
    custom: true
  }
}, je = (e, o, t) => {
  const { options: n, methods: s } = _e(
    e,
    o,
    t
  ), r = f(
    e,
    re,
    n
  ), l = {
    ...s,
    setRadius(a) {
      o.value.setRadius(a);
    },
    setLatLng(a) {
      o.value.setLatLng(a);
    }
  };
  return { options: r, methods: l };
}, Pe = {
  ...re,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, Qe = (e, o, t) => {
  const { options: n, methods: s } = je(e, o, t), r = f(
    e,
    Pe,
    n
  ), l = {
    ...s
  };
  return { options: r, methods: l };
};
defineComponent({
  name: "LCircle",
  props: Pe,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = Qe(e, t, o);
    return onMounted(async () => {
      const { circle: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(i(e.latLng, l));
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
const Yt = defineComponent({
  name: "LCircleMarker",
  props: re,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = je(
      e,
      t,
      o
    );
    return onMounted(async () => {
      const { circleMarker: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        i(e.latLng, l)
      );
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
}), F = {
  ...W,
  position: {
    type: String
  }
}, K = (e, o) => {
  const { options: t, methods: n } = J(e), s = f(
    e,
    F,
    t
  ), r = {
    ...n,
    setPosition(l) {
      o.value && o.value.setPosition(l);
    }
  };
  return onUnmounted(() => {
    o.value && o.value.remove();
  }), { options: s, methods: r };
}, Xe = (e) => e.default ? h$1("div", { ref: "root" }, e.default()) : null;
defineComponent({
  name: "LControl",
  props: {
    ...F,
    disableClickPropagation: {
      type: Boolean,
      custom: true,
      default: true
    },
    disableScrollPropagation: {
      type: Boolean,
      custom: true,
      default: false
    }
  },
  setup(e, o) {
    const t = ref(), n = ref(), s = inject(h), r = m(H), { options: l, methods: a } = K(e, t);
    return onMounted(async () => {
      const { Control: i, DomEvent: u } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js"), d = i.extend({
        onAdd() {
          return n.value;
        }
      });
      t.value = markRaw(new d(l)), L(a, t.value, e), r({ leafletObject: t.value }), e.disableClickPropagation && n.value && u.disableClickPropagation(n.value), e.disableScrollPropagation && n.value && u.disableScrollPropagation(n.value), nextTick(() => o.emit("ready", t.value));
    }), { root: n, leafletObject: t };
  },
  render() {
    return Xe(this.$slots);
  }
});
const Ce = {
  ...F,
  prefix: {
    type: String
  }
}, Ye = (e, o) => {
  const { options: t, methods: n } = K(
    e,
    o
  ), s = f(
    e,
    Ce,
    t
  ), r = {
    ...n,
    setPrefix(l) {
      o.value.setPrefix(l);
    }
  };
  return { options: s, methods: r };
};
defineComponent({
  name: "LControlAttribution",
  props: Ce,
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(H), { options: r, methods: l } = Ye(e, t);
    return onMounted(async () => {
      const { control: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        a.attribution(r)
      ), L(l, t.value, e), s({ leafletObject: t.value }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const Te = {
  ...F,
  collapsed: {
    type: Boolean,
    default: void 0
  },
  autoZIndex: {
    type: Boolean,
    default: void 0
  },
  hideSingleBase: {
    type: Boolean,
    default: void 0
  },
  sortLayers: {
    type: Boolean,
    default: void 0
  },
  sortFunction: {
    type: Function
  }
}, Ve = (e, o) => {
  const { options: t } = K(e, o);
  return { options: f(
    e,
    Te,
    t
  ), methods: {
    addLayer(r) {
      r.layerType === "base" ? o.value.addBaseLayer(r.leafletObject, r.name) : r.layerType === "overlay" && o.value.addOverlay(r.leafletObject, r.name);
    },
    removeLayer(r) {
      o.value.removeLayer(r.leafletObject);
    }
  } };
};
defineComponent({
  name: "LControlLayers",
  props: Te,
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(me), { options: r, methods: l } = Ve(e, t);
    return onMounted(async () => {
      const { control: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        a.layers(void 0, void 0, r)
      ), L(l, t.value, e), s({
        ...e,
        ...l,
        leafletObject: t.value
      }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const Me = {
  ...F,
  maxWidth: {
    type: Number
  },
  metric: {
    type: Boolean,
    default: void 0
  },
  imperial: {
    type: Boolean,
    default: void 0
  },
  updateWhenIdle: {
    type: Boolean,
    default: void 0
  }
}, xe = (e, o) => {
  const { options: t, methods: n } = K(
    e,
    o
  );
  return { options: f(
    e,
    Me,
    t
  ), methods: n };
};
defineComponent({
  name: "LControlScale",
  props: Me,
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(H), { options: r, methods: l } = xe(e, t);
    return onMounted(async () => {
      const { control: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(a.scale(r)), L(l, t.value, e), s({ leafletObject: t.value }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const Be = {
  ...F,
  zoomInText: {
    type: String
  },
  zoomInTitle: {
    type: String
  },
  zoomOutText: {
    type: String
  },
  zoomOutTitle: {
    type: String
  }
}, Re = (e, o) => {
  const { options: t, methods: n } = K(
    e,
    o
  );
  return { options: f(
    e,
    Be,
    t
  ), methods: n };
};
defineComponent({
  name: "LControlZoom",
  props: Be,
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(H), { options: r, methods: l } = Re(e, t);
    return onMounted(async () => {
      const { control: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(a.zoom(r)), L(l, t.value, e), s({ leafletObject: t.value }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const te = {
  ...D
}, se = (e, o, t) => {
  const { options: n, methods: s } = q(
    e,
    o,
    t
  ), r = f(
    e,
    te,
    n
  ), l = {
    ...s,
    addLayer(a) {
      o.value.addLayer(a.leafletObject);
    },
    removeLayer(a) {
      o.value.removeLayer(a.leafletObject);
    }
  };
  return provide(M, l.addLayer), provide(ee, l.removeLayer), { options: r, methods: l };
}, we = {
  ...te
}, et = (e, o, t) => {
  const { options: n, methods: s } = se(
    e,
    o,
    t
  ), r = f(
    e,
    we,
    n
  ), l = {
    ...s
  };
  return { options: r, methods: l };
};
defineComponent({
  props: we,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { methods: l, options: a } = et(
      e,
      t,
      o
    );
    return onMounted(async () => {
      const { featureGroup: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        i(void 0, a)
      );
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(l, t.value, e), r({
        ...e,
        ...l,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
const Ie = {
  ...te,
  geojson: {
    type: [Object, Array],
    custom: true
  },
  optionsStyle: {
    type: Function,
    custom: true
  }
}, tt = (e, o, t) => {
  const { options: n, methods: s } = se(
    e,
    o,
    t
  ), r = f(
    e,
    Ie,
    n
  );
  Object.prototype.hasOwnProperty.call(e, "optionsStyle") && (r.style = e.optionsStyle);
  const l = {
    ...s,
    setGeojson(a) {
      o.value.clearLayers(), o.value.addData(a);
    },
    setOptionsStyle(a) {
      o.value.setStyle(a);
    },
    getGeoJSONData() {
      return o.value.toGeoJSON();
    },
    getBounds() {
      return o.value.getBounds();
    }
  };
  return { options: r, methods: l };
}, no = defineComponent({
  props: Ie,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { methods: l, options: a } = tt(e, t, o);
    return onMounted(async () => {
      const { geoJSON: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(i(e.geojson, a));
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(l, t.value, e), r({
        ...e,
        ...l,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
}), ae = {
  ...D,
  opacity: {
    type: Number
  },
  zIndex: {
    type: Number
  },
  tileSize: {
    type: [Number, Array, Object]
  },
  noWrap: {
    type: Boolean,
    default: void 0
  },
  minZoom: {
    type: Number
  },
  maxZoom: {
    type: Number
  },
  className: {
    type: String
  }
}, Ae = (e, o, t) => {
  const { options: n, methods: s } = q(
    e,
    o,
    t
  ), r = f(
    e,
    ae,
    n
  ), l = {
    ...s,
    setTileComponent() {
      var a;
      (a = o.value) == null || a.redraw();
    }
  };
  return onUnmounted(() => {
    o.value.off();
  }), { options: r, methods: l };
}, ot = (e, o, t, n) => e.extend({
  initialize(s) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), t.setOptions(this, s);
  },
  createTile(s) {
    const r = this._tileCoordsToKey(s);
    this.tileComponents[r] = o.create("div");
    const l = h$1({ setup: n, props: ["coords"] }, { coords: s });
    return render(l, this.tileComponents[r]), this.tileComponents[r];
  },
  _unloadTile(s) {
    const r = this._tileCoordsToKey(s.coords);
    this.tileComponents[r] && (this.tileComponents[r].innerHTML = "", this.tileComponents[r] = void 0);
  }
});
defineComponent({
  props: {
    ...ae,
    childRender: {
      type: Function,
      required: true
    }
  },
  setup(e, o) {
    const t = ref(), n = ref(null), s = ref(false), r = inject(h), l = m(M), { options: a, methods: i } = Ae(e, t, o);
    return onMounted(async () => {
      const { GridLayer: u, DomUtil: d, Util: y } = r ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js"), w = ot(
        u,
        d,
        y,
        e.childRender
      );
      t.value = markRaw(new w(a));
      const { listeners: v } = T(o.attrs);
      t.value.on(v), L(i, t.value, e), l({
        ...e,
        ...i,
        leafletObject: t.value
      }), s.value = true, nextTick(() => o.emit("ready", t.value));
    }), { root: n, ready: s, leafletObject: t };
  },
  render() {
    return this.ready ? h$1("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const de = {
  iconUrl: {
    type: String
  },
  iconRetinaUrl: {
    type: String
  },
  iconSize: {
    type: [Object, Array]
  },
  iconAnchor: {
    type: [Object, Array]
  },
  popupAnchor: {
    type: [Object, Array]
  },
  tooltipAnchor: {
    type: [Object, Array]
  },
  shadowUrl: {
    type: String
  },
  shadowRetinaUrl: {
    type: String
  },
  shadowSize: {
    type: [Object, Array]
  },
  shadowAnchor: {
    type: [Object, Array]
  },
  bgPos: {
    type: [Object, Array]
  },
  className: {
    type: String
  }
};
defineComponent({
  name: "LIcon",
  props: {
    ...de,
    ...W
  },
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(ve), r = m(be), l = m(fe);
    let a, i, u, d, y;
    const w = (N, P, B) => {
      const I = N && N.innerHTML;
      if (!P) {
        B && y && s() && r(I);
        return;
      }
      const { listeners: E } = T(o.attrs);
      y && i(y, E);
      const { options: ue } = J(e), $ = f(
        e,
        de,
        ue
      );
      I && ($.html = I), y = $.html ? u($) : d($), a(y, E), l(y);
    }, v = () => {
      nextTick(() => w(t.value, true, false));
    }, z = () => {
      nextTick(() => w(t.value, false, true));
    }, Z = {
      setIconUrl: v,
      setIconRetinaUrl: v,
      setIconSize: v,
      setIconAnchor: v,
      setPopupAnchor: v,
      setTooltipAnchor: v,
      setShadowUrl: v,
      setShadowRetinaUrl: v,
      setShadowAnchor: v,
      setBgPos: v,
      setClassName: v,
      setHtml: v
    };
    return onMounted(async () => {
      const {
        DomEvent: N,
        divIcon: P,
        icon: B
      } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      a = N.on, i = N.off, u = P, d = B, L(Z, {}, e), new MutationObserver(z).observe(t.value, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: true
      }), v();
    }), { root: t };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : void 0;
    return h$1("div", { ref: "root" }, e);
  }
});
const Ge = {
  ...D,
  opacity: {
    type: Number
  },
  alt: {
    type: String
  },
  interactive: {
    type: Boolean,
    default: void 0
  },
  crossOrigin: {
    type: Boolean,
    default: void 0
  },
  errorOverlayUrl: {
    type: String
  },
  zIndex: {
    type: Number
  },
  className: {
    type: String
  },
  url: {
    type: String,
    required: true,
    custom: true
  },
  bounds: {
    type: [Array, Object],
    required: true,
    custom: true
  }
}, nt = (e, o, t) => {
  const { options: n, methods: s } = q(
    e,
    o,
    t
  ), r = f(
    e,
    Ge,
    n
  ), l = {
    ...s,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(a) {
      return o.value.setOpacity(a);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(a) {
      return o.value.setUrl(a);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(a) {
      return o.value.setBounds(a);
    },
    /**
     * Get the bounds that this ImageOverlay covers
     * @returns {LatLngBounds}
     */
    getBounds() {
      return o.value.getBounds();
    },
    /**
     * Returns the instance of HTMLImageElement used by this overlay.
     * @returns {HTMLElement}
     */
    getElement() {
      return o.value.getElement();
    },
    /**
     * Brings the layer to the top of all overlays.
     */
    bringToFront() {
      return o.value.bringToFront();
    },
    /**
     * Brings the layer to the bottom of all overlays.
     */
    bringToBack() {
      return o.value.bringToBack();
    },
    /**
     * Changes the zIndex of the image overlay.
     * @param {number} zIndex
     */
    setZIndex(a) {
      return o.value.setZIndex(a);
    }
  };
  return { options: r, methods: l };
};
defineComponent({
  name: "LImageOverlay",
  props: Ge,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = nt(
      e,
      t,
      o
    );
    return onMounted(async () => {
      const { imageOverlay: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        i(e.url, e.bounds, l)
      );
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
defineComponent({
  props: te,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { methods: l } = se(e, t, o);
    return onMounted(async () => {
      const { layerGroup: a } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        a(void 0, e.options)
      );
      const { listeners: i } = T(o.attrs);
      t.value.on(i), L(l, t.value, e), r({
        ...e,
        ...l,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
function rt(e, o, t) {
  var n, s, r;
  o === void 0 && (o = 50), t === void 0 && (t = {});
  var l = (n = t.isImmediate) != null && n, a = (s = t.callback) != null && s, i = t.maxWait, u = Date.now(), d = [];
  function y() {
    if (i !== void 0) {
      var v = Date.now() - u;
      if (v + o >= i)
        return i - v;
    }
    return o;
  }
  var w = function() {
    var v = [].slice.call(arguments), z = this;
    return new Promise(function(Z, N) {
      var P = l && r === void 0;
      if (r !== void 0 && clearTimeout(r), r = setTimeout(function() {
        if (r = void 0, u = Date.now(), !l) {
          var I = e.apply(z, v);
          a && a(I), d.forEach(function(E) {
            return (0, E.resolve)(I);
          }), d = [];
        }
      }, y()), P) {
        var B = e.apply(z, v);
        return a && a(B), Z(B);
      }
      d.push({ resolve: Z, reject: N });
    });
  };
  return w.cancel = function(v) {
    r !== void 0 && clearTimeout(r), d.forEach(function(z) {
      return (0, z.reject)(v);
    }), d = [];
  }, w;
}
const We = {
  ...W,
  /**
   * The center of the map, supports .sync modifier
   */
  center: {
    type: [Object, Array]
  },
  /**
   * The bounds of the map, supports .sync modifier
   */
  bounds: {
    type: [Array, Object]
  },
  /**
   * The max bounds of the map
   */
  maxBounds: {
    type: [Array, Object]
  },
  /**
   * The zoom of the map, supports .sync modifier
   */
  zoom: {
    type: Number
  },
  /**
   * The minZoom of the map
   */
  minZoom: {
    type: Number
  },
  /**
   * The maxZoom of the map
   */
  maxZoom: {
    type: Number
  },
  /**
   * The paddingBottomRight of the map
   */
  paddingBottomRight: {
    type: [Object, Array]
  },
  /**
   * The paddingTopLeft of the map
   */
  paddingTopLeft: {
    type: Object
  },
  /**
   * The padding of the map
   */
  padding: {
    type: Object
  },
  /**
   * The worldCopyJump option for the map
   */
  worldCopyJump: {
    type: Boolean,
    default: void 0
  },
  /**
   * The CRS to use for the map. Can be an object that defines a coordinate reference
   * system for projecting geographical points into screen coordinates and back
   * (see https://leafletjs.com/reference-1.7.1.html#crs-l-crs-base), or a string
   * name identifying one of Leaflet's defined CRSs, such as "EPSG4326".
   */
  crs: {
    type: [String, Object]
  },
  maxBoundsViscosity: {
    type: Number
  },
  inertia: {
    type: Boolean,
    default: void 0
  },
  inertiaDeceleration: {
    type: Number
  },
  inertiaMaxSpeed: {
    type: Number
  },
  easeLinearity: {
    type: Number
  },
  zoomAnimation: {
    type: Boolean,
    default: void 0
  },
  zoomAnimationThreshold: {
    type: Number
  },
  fadeAnimation: {
    type: Boolean,
    default: void 0
  },
  markerZoomAnimation: {
    type: Boolean,
    default: void 0
  },
  noBlockingAnimations: {
    type: Boolean,
    default: void 0
  },
  useGlobalLeaflet: {
    type: Boolean,
    default: true,
    custom: true
  }
}, io = defineComponent({
  inheritAttrs: false,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: We,
  setup(e, o) {
    const t = ref(), n = reactive({
      ready: false,
      layersToAdd: [],
      layersInControl: []
    }), { options: s } = J(e), r = f(
      e,
      We,
      s
    ), { listeners: l, attrs: a } = T(o.attrs), i = Y(M), u = Y(ee), d = Y(H), y = Y(
      me
    );
    provide(h, e.useGlobalLeaflet);
    const w = computed(() => {
      const P = {};
      return e.noBlockingAnimations && (P.animate = false), P;
    }), v = computed(() => {
      const P = w.value;
      return e.padding && (P.padding = e.padding), e.paddingTopLeft && (P.paddingTopLeft = e.paddingTopLeft), e.paddingBottomRight && (P.paddingBottomRight = e.paddingBottomRight), P;
    }), z = {
      moveend: rt((P) => {
        n.leafletRef && (o.emit("update:zoom", n.leafletRef.getZoom()), o.emit("update:center", n.leafletRef.getCenter()), o.emit("update:bounds", n.leafletRef.getBounds()));
      }),
      overlayadd(P) {
        const B = n.layersInControl.find((I) => I.name === P.name);
        B && B.updateVisibleProp(true);
      },
      overlayremove(P) {
        const B = n.layersInControl.find((I) => I.name === P.name);
        B && B.updateVisibleProp(false);
      }
    };
    onMounted(async () => {
      e.useGlobalLeaflet && (b.L = b.L || await import("./leaflet-src-DK7vZj2f.js").then((n2) => n2.l));
      const { map: P, CRS: B, Icon: I, latLngBounds: E, latLng: ue, stamp: $ } = e.useGlobalLeaflet ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      try {
        r.beforeMapMount && await r.beforeMapMount();
      } catch (p) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${p.message}`
        );
      }
      await qe(I);
      const yt = typeof r.crs == "string" ? B[r.crs] : r.crs;
      r.crs = yt || B.EPSG3857;
      const Q = {
        addLayer(p) {
          p.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd.push(p) : n.layersInControl.find(
            (X) => $(X.leafletObject) === $(p.leafletObject)
          ) || (n.layerControl.addLayer(p), n.layersInControl.push(p))), p.visible !== false && n.leafletRef.addLayer(p.leafletObject);
        },
        removeLayer(p) {
          p.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd = n.layersToAdd.filter(
            (C) => C.name !== p.name
          ) : (n.layerControl.removeLayer(p.leafletObject), n.layersInControl = n.layersInControl.filter(
            (C) => $(C.leafletObject) !== $(p.leafletObject)
          ))), n.leafletRef.removeLayer(p.leafletObject);
        },
        registerLayerControl(p) {
          n.layerControl = p, n.layersToAdd.forEach((C) => {
            n.layerControl.addLayer(C);
          }), n.layersToAdd = [], d(p);
        },
        registerControl(p) {
          n.leafletRef.addControl(p.leafletObject);
        },
        setZoom(p) {
          const C = n.leafletRef.getZoom();
          p !== C && n.leafletRef.setZoom(p, w.value);
        },
        setCrs(p) {
          const C = n.leafletRef.getBounds();
          n.leafletRef.options.crs = p, n.leafletRef.fitBounds(C, {
            animate: false,
            padding: [0, 0]
          });
        },
        fitBounds(p) {
          n.leafletRef.fitBounds(p, v.value);
        },
        setBounds(p) {
          if (!p)
            return;
          const C = E(p);
          if (!C.isValid())
            return;
          !(n.lastSetBounds || n.leafletRef.getBounds()).equals(C, 0) && (n.lastSetBounds = C, n.leafletRef.fitBounds(C));
        },
        setCenter(p) {
          if (p == null)
            return;
          const C = ue(p), X = n.lastSetCenter || n.leafletRef.getCenter();
          (X.lat !== C.lat || X.lng !== C.lng) && (n.lastSetCenter = C, n.leafletRef.panTo(C, w.value));
        }
      };
      V(i, Q.addLayer), V(u, Q.removeLayer), V(d, Q.registerControl), V(y, Q.registerLayerControl), n.leafletRef = markRaw(P(t.value, r)), L(Q, n.leafletRef, e), ce(n.leafletRef, z), ce(n.leafletRef, l), n.ready = true, nextTick(() => o.emit("ready", n.leafletRef));
    }), onBeforeUnmount(() => {
      ye(z), n.leafletRef && (n.leafletRef.off(), n.leafletRef.remove());
    });
    const Z = computed(() => n.leafletRef), N = computed(() => n.ready);
    return { root: t, ready: N, leafletObject: Z, attrs: a };
  },
  render({ attrs: e }) {
    return e.style || (e.style = {}), e.style.width || (e.style.width = "100%"), e.style.height || (e.style.height = "100%"), h$1(
      "div",
      {
        ...e,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), Gt = ["Symbol(Comment)", "Symbol(Text)"], zt = ["LTooltip", "LPopup"], ze = {
  ...D,
  draggable: {
    type: Boolean,
    default: void 0
  },
  icon: {
    type: [Object]
  },
  zIndexOffset: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    custom: true,
    required: true
  }
}, st = (e, o, t) => {
  const { options: n, methods: s } = q(
    e,
    o,
    t
  ), r = f(
    e,
    ze,
    n
  ), l = {
    ...s,
    setDraggable(a) {
      o.value.dragging && (a ? o.value.dragging.enable() : o.value.dragging.disable());
    },
    latLngSync(a) {
      t.emit("update:latLng", a.latlng), t.emit("update:lat-lng", a.latlng);
    },
    setLatLng(a) {
      if (a != null && o.value) {
        const i = o.value.getLatLng();
        (!i || !i.equals(a)) && o.value.setLatLng(a);
      }
    }
  };
  return { options: r, methods: l };
}, at = (e, o) => {
  const t = o.slots.default && o.slots.default();
  return t && t.length && t.some(Nt);
};
function Nt(e) {
  return !(Gt.includes(e.type.toString()) || zt.includes(e.type.name));
}
defineComponent({
  name: "LMarker",
  props: ze,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M);
    provide(
      ve,
      () => {
        var u;
        return !!((u = t.value) != null && u.getElement());
      }
    ), provide(be, (u) => {
      var y, w;
      const d = k((y = t.value) == null ? void 0 : y.getElement) && ((w = t.value) == null ? void 0 : w.getElement());
      d && (d.innerHTML = u);
    }), provide(
      fe,
      (u) => {
        var d;
        return ((d = t.value) == null ? void 0 : d.setIcon) && t.value.setIcon(u);
      }
    );
    const { options: l, methods: a } = st(e, t, o), i = {
      moveHandler: rt(a.latLngSync)
    };
    return onMounted(async () => {
      const { marker: u, divIcon: d } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      at(l, o) && (l.icon = d({ className: "" })), t.value = markRaw(u(e.latLng, l));
      const { listeners: y } = T(o.attrs);
      t.value.on(y), t.value.on("move", i.moveHandler), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), onBeforeUnmount(() => ye(i)), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
const le = {
  ...ne,
  smoothFactor: {
    type: Number
  },
  noClip: {
    type: Boolean,
    default: void 0
  },
  latLngs: {
    type: Array,
    required: true,
    custom: true
  }
}, Ne = (e, o, t) => {
  const { options: n, methods: s } = _e(
    e,
    o,
    t
  ), r = f(
    e,
    le,
    n
  ), l = {
    ...s,
    setSmoothFactor(a) {
      o.value.setStyle({ smoothFactor: a });
    },
    setNoClip(a) {
      o.value.setStyle({ noClip: a });
    },
    addLatLng(a) {
      o.value.addLatLng(a);
    }
  };
  return { options: r, methods: l };
}, x = {
  ...le
}, $e = (e, o, t) => {
  const { options: n, methods: s } = Ne(
    e,
    o,
    t
  ), r = f(
    e,
    x,
    n
  ), l = {
    ...s,
    toGeoJSON(a) {
      return o.value.toGeoJSON(a);
    }
  };
  return { options: r, methods: l };
};
defineComponent({
  name: "LPolygon",
  props: x,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = $e(e, t, o);
    return onMounted(async () => {
      const { polygon: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(i(e.latLngs, l));
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
defineComponent({
  name: "LPolyline",
  props: le,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = Ne(e, t, o);
    return onMounted(async () => {
      const { polyline: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        i(e.latLngs, l)
      );
      const { listeners: u } = T(o.attrs);
      t.value.on(u), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
const ke = {
  ...W,
  content: {
    type: String,
    default: null
  }
}, Ue = (e, o) => {
  const { options: t, methods: n } = J(e), s = {
    ...n,
    setContent(r) {
      o.value && r !== null && r !== void 0 && o.value.setContent(r);
    }
  };
  return { options: t, methods: s };
}, De = (e) => e.default ? h$1("div", { ref: "root" }, e.default()) : null, lt = {
  ...ke,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, it = (e, o) => {
  const { options: t, methods: n } = Ue(e, o);
  return { options: t, methods: n };
}, yo = defineComponent({
  name: "LPopup",
  props: lt,
  setup(e, o) {
    const t = ref(), n = ref(null), s = inject(h), r = m(ge), l = m(he), { options: a, methods: i } = it(e, t);
    return onMounted(async () => {
      const { popup: u } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(u(a)), e.latLng !== void 0 && t.value.setLatLng(e.latLng), L(i, t.value, e);
      const { listeners: d } = T(o.attrs);
      t.value.on(d), t.value.setContent(e.content || n.value || ""), r(t.value), nextTick(() => o.emit("ready", t.value));
    }), onBeforeUnmount(() => {
      l();
    }), { root: n, leafletObject: t };
  },
  render() {
    return De(this.$slots);
  }
}), Fe = {
  ...x,
  latLngs: {
    ...x.latLngs,
    required: false
  },
  bounds: {
    type: Object,
    custom: true
  }
}, ut = (e, o, t) => {
  const { options: n, methods: s } = $e(
    e,
    o,
    t
  ), r = f(
    e,
    Fe,
    n
  ), l = {
    ...s,
    setBounds(a) {
      o.value.setBounds(a);
    },
    setLatLngs(a) {
      o.value.setBounds(a);
    }
  };
  return { options: r, methods: l };
};
defineComponent({
  name: "LRectangle",
  props: Fe,
  setup(e, o) {
    const t = ref(), n = ref(false), s = inject(h), r = m(M), { options: l, methods: a } = ut(e, t, o);
    return onMounted(async () => {
      const { rectangle: i, latLngBounds: u } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js"), d = e.bounds ? u(e.bounds) : u(e.latLngs || []);
      t.value = markRaw(i(d, l));
      const { listeners: y } = T(o.attrs);
      t.value.on(y), L(a, t.value, e), r({
        ...e,
        ...a,
        leafletObject: t.value
      }), n.value = true, nextTick(() => o.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return G(this.ready, this.$slots);
  }
});
const ie = {
  ...ae,
  tms: {
    type: Boolean,
    default: void 0
  },
  subdomains: {
    type: [String, Array],
    validator: (e) => typeof e == "string" ? true : Array.isArray(e) ? e.every((o) => typeof o == "string") : false
  },
  detectRetina: {
    type: Boolean,
    default: void 0
  },
  url: {
    type: String,
    required: true,
    custom: true
  }
}, Ze = (e, o, t) => {
  const { options: n, methods: s } = Ae(e, o, t), r = f(
    e,
    ie,
    n
  ), l = {
    ...s
  };
  return { options: r, methods: l };
}, vo = defineComponent({
  props: ie,
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(M), { options: r, methods: l } = Ze(e, t, o);
    return onMounted(async () => {
      const { tileLayer: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(a(e.url, r));
      const { listeners: i } = T(o.attrs);
      t.value.on(i), L(l, t.value, e), s({
        ...e,
        ...l,
        leafletObject: t.value
      }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
}), ct = {
  ...ke
}, dt = (e, o) => {
  const { options: t, methods: n } = Ue(e, o), s = m(Oe);
  return onBeforeUnmount(() => {
    s();
  }), { options: t, methods: n };
};
defineComponent({
  name: "LTooltip",
  props: ct,
  setup(e, o) {
    const t = ref(), n = ref(null), s = inject(h), r = m(Le), { options: l, methods: a } = dt(e, t);
    return onMounted(async () => {
      const { tooltip: i } = s ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(i(l)), L(a, t.value, e);
      const { listeners: u } = T(o.attrs);
      t.value.on(u), t.value.setContent(e.content || n.value || ""), r(t.value), nextTick(() => o.emit("ready", t.value));
    }), { root: n, leafletObject: t };
  },
  render() {
    return De(this.$slots);
  }
});
const Ee = {
  ...ie,
  layers: {
    type: String,
    required: true
  },
  styles: {
    type: String
  },
  format: {
    type: String
  },
  transparent: {
    type: Boolean,
    default: void 0
  },
  version: {
    type: String
  },
  crs: {
    type: Object
  },
  uppercase: {
    type: Boolean,
    default: void 0
  }
}, pt = (e, o, t) => {
  const { options: n, methods: s } = Ze(e, o, t);
  return {
    options: f(
      e,
      Ee,
      n
    ),
    methods: {
      ...s
    }
  };
};
defineComponent({
  props: Ee,
  setup(e, o) {
    const t = ref(), n = inject(h), s = m(M), { options: r, methods: l } = pt(
      e,
      t,
      o
    );
    return onMounted(async () => {
      const { tileLayer: a } = n ? b.L : await import("./leaflet-src.esm-CZdvXJH9.js");
      t.value = markRaw(
        a.wms(e.url, r)
      );
      const { listeners: i } = T(o.attrs);
      t.value.on(i), L(l, t.value, e), s({
        ...e,
        ...l,
        leafletObject: t.value
      }), nextTick(() => o.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const _hoisted_1 = { class: "valhalla-preview" };
const _hoisted_2 = { class: "sidebar" };
const _hoisted_3 = { class: "search-section" };
const _hoisted_4 = { class: "search-box" };
const _hoisted_5 = {
  key: 0,
  class: "search-results"
};
const _hoisted_6 = ["onClick"];
const _hoisted_7 = { class: "controls-row" };
const _hoisted_8 = { class: "waypoints-list" };
const _hoisted_9 = { class: "waypoints-header" };
const _hoisted_10 = { class: "section-title" };
const _hoisted_11 = ["onDragstart", "onDragover"];
const _hoisted_12 = { class: "waypoint-grip" };
const _hoisted_13 = { class: "waypoint-info" };
const _hoisted_14 = { class: "waypoint-role" };
const _hoisted_15 = { class: "waypoint-name" };
const _hoisted_16 = { class: "waypoint-actions" };
const _hoisted_17 = {
  key: 0,
  class: "no-waypoints"
};
const _hoisted_18 = {
  key: 0,
  class: "action-buttons"
};
const _hoisted_19 = {
  key: 1,
  class: "route-summary"
};
const _hoisted_20 = { class: "summary-stats" };
const _hoisted_21 = { class: "stat" };
const _hoisted_22 = { class: "stat" };
const _hoisted_23 = { class: "stat" };
const _hoisted_24 = {
  key: 0,
  class: "maneuvers-list"
};
const _hoisted_25 = { class: "maneuver-index" };
const _hoisted_26 = { class: "maneuver-text" };
const _hoisted_27 = { class: "maneuver-dist" };
const _hoisted_28 = { class: "map-container" };
const SET_WAYPOINTS = "SET_WAYPOINTS";
const OPTIMIZE_ROUTE = "OPTIMIZE_ROUTE";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(__props) {
    const props = __props;
    const data = ref(null);
    const tempStore = shallowRef(null);
    const settingsRef = ref(props.dataSource);
    const { update } = useTemporaryStore(props.dataSource.type, settingsRef, tempStore);
    const waypoints = ref([]);
    const costing = ref(props.dataSource.config?.costing || "auto");
    const searchQuery = ref("");
    const searchResults = ref([]);
    const searching = ref(false);
    let searchTimeout = null;
    const mapRef = ref(null);
    const mapCenter = ref([50.93, 11.59]);
    const mapZoom = ref(10);
    const draggingIndex = ref(null);
    const calculating = ref(false);
    const costingOptions = [
      { text: "Auto", value: "auto" },
      { text: "Fahrrad", value: "bicycle" },
      { text: "Fußgänger", value: "pedestrian" },
      { text: "LKW", value: "truck" },
      { text: "Bus", value: "bus" },
      { text: "Motorroller", value: "motor_scooter" },
      { text: "Motorrad", value: "motorcycle" }
    ];
    const lineFeatures = computed(() => {
      if (!data.value?.geojson?.features) return [];
      return data.value.geojson.features.filter((f2) => f2.geometry?.type === "LineString");
    });
    const lineGeoJson = computed(() => {
      if (lineFeatures.value.length === 0) return null;
      return { type: "FeatureCollection", features: lineFeatures.value };
    });
    const lineStyle = () => ({ color: "#c45e00", weight: 5, opacity: 0.8 });
    function waypointColor(index) {
      if (index === 0) return "#4caf50";
      if (index === waypoints.value.length - 1) return "#f44336";
      return "#2196f3";
    }
    function waypointLabel(index) {
      if (index === 0) return "Start";
      if (index === waypoints.value.length - 1) return "Ziel";
      return `Stop ${index}`;
    }
    watch(tempStore, async () => {
      if (tempStore.value) {
        data.value = await tempStore.value.getData("object");
        tempStore.value.subscribe(async () => {
          data.value = await tempStore.value.getData("object");
        });
      }
    }, { deep: true });
    watch(props.dataSource, () => update(), { deep: true });
    async function searchAddress() {
      const q2 = searchQuery.value.trim();
      if (q2.length < 3) {
        searchResults.value = [];
        return;
      }
      searching.value = true;
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(q2)}&limit=5&addressdetails=1`
        );
        searchResults.value = await res.json();
      } catch {
        searchResults.value = [];
      } finally {
        searching.value = false;
      }
    }
    function onSearchInput() {
      if (searchTimeout) clearTimeout(searchTimeout);
      searchTimeout = setTimeout(searchAddress, 400);
    }
    function selectSearchResult(result) {
      const wp = {
        lat: parseFloat(result.lat),
        lon: parseFloat(result.lon),
        name: result.display_name.split(",").slice(0, 2).join(", ")
      };
      waypoints.value.push(wp);
      searchQuery.value = "";
      searchResults.value = [];
      fitMapToWaypoints();
    }
    function onMapClick(e) {
      const { lat, lng } = e.latlng;
      waypoints.value.push({ lat, lon: lng, name: `${lat.toFixed(4)}, ${lng.toFixed(4)}` });
    }
    function removeWaypoint(index) {
      waypoints.value.splice(index, 1);
    }
    function clearAllWaypoints() {
      waypoints.value = [];
      data.value = null;
      if (tempStore.value) {
        tempStore.value.callEvent(SET_WAYPOINTS, { waypoints: [], costing: costing.value });
      }
    }
    function moveWaypoint(from, to) {
      if (to < 0 || to >= waypoints.value.length) return;
      const item = waypoints.value.splice(from, 1)[0];
      waypoints.value.splice(to, 0, item);
    }
    async function calculateRoute() {
      if (!tempStore.value || waypoints.value.length < 2) return;
      calculating.value = true;
      try {
        await tempStore.value.callEvent(SET_WAYPOINTS, {
          waypoints: waypoints.value.map((wp) => ({ lat: wp.lat, lon: wp.lon, name: wp.name })),
          costing: costing.value
        });
        fitMapToWaypoints();
      } finally {
        calculating.value = false;
      }
    }
    async function optimizeRoute() {
      if (!tempStore.value || waypoints.value.length < 3) return;
      calculating.value = true;
      try {
        await tempStore.value.callEvent(OPTIMIZE_ROUTE, {
          waypoints: waypoints.value.map((wp) => ({ lat: wp.lat, lon: wp.lon, name: wp.name })),
          costing: costing.value
        });
        const result = await tempStore.value.getData("object");
        if (result?.waypoints) {
          waypoints.value = result.waypoints.map((wp) => ({
            lat: wp.lat,
            lon: wp.lon,
            name: wp.name || `${wp.lat.toFixed(4)}, ${wp.lon.toFixed(4)}`
          }));
        }
        fitMapToWaypoints();
      } finally {
        calculating.value = false;
      }
    }
    function fitMapToWaypoints() {
      if (waypoints.value.length === 0) return;
      nextTick(() => {
        const map = mapRef.value?.leafletObject;
        if (!map) return;
        if (waypoints.value.length === 1) {
          map.setView([waypoints.value[0].lat, waypoints.value[0].lon], 14);
        } else {
          const lats = waypoints.value.map((wp) => wp.lat);
          const lons = waypoints.value.map((wp) => wp.lon);
          map.fitBounds(
            [[Math.min(...lats), Math.min(...lons)], [Math.max(...lats), Math.max(...lons)]],
            { padding: [40, 40] }
          );
        }
      });
    }
    function onDragStart(index) {
      draggingIndex.value = index;
    }
    function onDragOver(e, index) {
      e.preventDefault();
      if (draggingIndex.value === null || draggingIndex.value === index) return;
      const from = draggingIndex.value;
      const item = waypoints.value.splice(from, 1)[0];
      waypoints.value.splice(index, 0, item);
      draggingIndex.value = index;
    }
    function onDragEnd() {
      draggingIndex.value = null;
    }
    const maneuvers = computed(() => {
      if (!data.value?.legs) return [];
      return data.value.legs.flatMap((leg) => leg.maneuvers || []);
    });
    return (_ctx, _cache) => {
      const _component_va_icon = resolveComponent("va-icon");
      const _component_VaInput = resolveComponent("VaInput");
      const _component_VaSelect = resolveComponent("VaSelect");
      const _component_VaButton = resolveComponent("VaButton");
      const _component_va_button = resolveComponent("va-button");
      return openBlock(), createElementBlock("div", _hoisted_1, [
        createElementVNode("div", _hoisted_2, [
          createElementVNode("div", _hoisted_3, [
            createElementVNode("div", _hoisted_4, [
              createVNode(_component_VaInput, {
                modelValue: searchQuery.value,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchQuery.value = $event),
                placeholder: "Adresse suchen...",
                class: "search-input",
                onInput: onSearchInput,
                onKeydown: withKeys(searchAddress, ["enter"])
              }, {
                prependInner: withCtx(() => [
                  createVNode(_component_va_icon, {
                    name: "search",
                    size: "small"
                  })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              searchResults.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_5, [
                (openBlock(true), createElementBlock(Fragment, null, renderList(searchResults.value, (result) => {
                  return openBlock(), createElementBlock("div", {
                    key: result.place_id,
                    class: "search-result-item",
                    onClick: ($event) => selectSearchResult(result)
                  }, [
                    createVNode(_component_va_icon, {
                      name: "location_on",
                      size: "small",
                      color: "primary"
                    }),
                    createElementVNode("span", null, toDisplayString(result.display_name), 1)
                  ], 8, _hoisted_6);
                }), 128))
              ])) : createCommentVNode("", true)
            ])
          ]),
          createElementVNode("div", _hoisted_7, [
            createVNode(_component_VaSelect, {
              modelValue: costing.value,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => costing.value = $event),
              options: costingOptions,
              "text-by": "text",
              "value-by": "value",
              label: "Modus",
              class: "costing-select"
            }, null, 8, ["modelValue"]),
            waypoints.value.length > 0 ? (openBlock(), createBlock(_component_VaButton, {
              key: 0,
              preset: "secondary",
              size: "small",
              icon: "delete_sweep",
              onClick: clearAllWaypoints
            }, {
              default: withCtx(() => [..._cache[2] || (_cache[2] = [
                createTextVNode(" Alle löschen ", -1)
              ])]),
              _: 1
            })) : createCommentVNode("", true)
          ]),
          createElementVNode("div", _hoisted_8, [
            createElementVNode("div", _hoisted_9, [
              createElementVNode("span", _hoisted_10, "Wegpunkte (" + toDisplayString(waypoints.value.length) + ")", 1),
              _cache[3] || (_cache[3] = createElementVNode("span", { class: "hint" }, "Klick auf Karte = Wegpunkt hinzufügen", -1))
            ]),
            (openBlock(true), createElementBlock(Fragment, null, renderList(waypoints.value, (wp, i) => {
              return openBlock(), createElementBlock("div", {
                key: i,
                class: normalizeClass(["waypoint-item", { dragging: draggingIndex.value === i }]),
                draggable: "true",
                onDragstart: ($event) => onDragStart(i),
                onDragover: ($event) => onDragOver($event, i),
                onDragend: onDragEnd
              }, [
                createElementVNode("div", _hoisted_12, [
                  createVNode(_component_va_icon, {
                    name: "drag_indicator",
                    size: "small",
                    color: "secondary"
                  })
                ]),
                createElementVNode("div", {
                  class: "waypoint-marker",
                  style: normalizeStyle({ backgroundColor: waypointColor(i) })
                }, toDisplayString(i + 1), 5),
                createElementVNode("div", _hoisted_13, [
                  createElementVNode("span", _hoisted_14, toDisplayString(waypointLabel(i)), 1),
                  createElementVNode("span", _hoisted_15, toDisplayString(wp.name || `${wp.lat.toFixed(4)}, ${wp.lon.toFixed(4)}`), 1)
                ]),
                createElementVNode("div", _hoisted_16, [
                  createVNode(_component_va_button, {
                    preset: "plain",
                    size: "small",
                    icon: "arrow_upward",
                    disabled: i === 0,
                    onClick: ($event) => moveWaypoint(i, i - 1)
                  }, null, 8, ["disabled", "onClick"]),
                  createVNode(_component_va_button, {
                    preset: "plain",
                    size: "small",
                    icon: "arrow_downward",
                    disabled: i === waypoints.value.length - 1,
                    onClick: ($event) => moveWaypoint(i, i + 1)
                  }, null, 8, ["disabled", "onClick"]),
                  createVNode(_component_va_button, {
                    preset: "plain",
                    size: "small",
                    icon: "close",
                    color: "danger",
                    onClick: ($event) => removeWaypoint(i)
                  }, null, 8, ["onClick"])
                ])
              ], 42, _hoisted_11);
            }), 128)),
            waypoints.value.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_17, " Noch keine Wegpunkte. Klicke auf die Karte oder suche eine Adresse. ")) : createCommentVNode("", true)
          ]),
          waypoints.value.length >= 2 ? (openBlock(), createElementBlock("div", _hoisted_18, [
            createVNode(_component_VaButton, {
              disabled: calculating.value,
              loading: calculating.value,
              icon: "route",
              onClick: calculateRoute
            }, {
              default: withCtx(() => [..._cache[4] || (_cache[4] = [
                createTextVNode(" Route berechnen ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            waypoints.value.length >= 3 ? (openBlock(), createBlock(_component_VaButton, {
              key: 0,
              preset: "secondary",
              disabled: calculating.value,
              loading: calculating.value,
              icon: "auto_fix_high",
              onClick: optimizeRoute
            }, {
              default: withCtx(() => [..._cache[5] || (_cache[5] = [
                createTextVNode(" Route optimieren ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true),
          data.value?.summary ? (openBlock(), createElementBlock("div", _hoisted_19, [
            _cache[6] || (_cache[6] = createElementVNode("div", { class: "summary-header" }, "Route", -1)),
            createElementVNode("div", _hoisted_20, [
              createElementVNode("div", _hoisted_21, [
                createVNode(_component_va_icon, {
                  name: "straighten",
                  size: "small"
                }),
                createElementVNode("span", null, toDisplayString(data.value.summary.distance_km.toFixed(1)) + " km", 1)
              ]),
              createElementVNode("div", _hoisted_22, [
                createVNode(_component_va_icon, {
                  name: "schedule",
                  size: "small"
                }),
                createElementVNode("span", null, toDisplayString(data.value.summary.duration_min) + " min", 1)
              ]),
              createElementVNode("div", _hoisted_23, [
                createVNode(_component_va_icon, {
                  name: "turn_right",
                  size: "small"
                }),
                createElementVNode("span", null, toDisplayString(maneuvers.value.length) + " Manöver", 1)
              ])
            ]),
            maneuvers.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_24, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(maneuvers.value, (m2, i) => {
                return openBlock(), createElementBlock("div", {
                  key: i,
                  class: "maneuver-item"
                }, [
                  createElementVNode("span", _hoisted_25, toDisplayString(i + 1) + ".", 1),
                  createElementVNode("span", _hoisted_26, toDisplayString(m2.instruction), 1),
                  createElementVNode("span", _hoisted_27, toDisplayString(m2.length.toFixed(1)) + " km", 1)
                ]);
              }), 128))
            ])) : createCommentVNode("", true)
          ])) : createCommentVNode("", true)
        ]),
        createElementVNode("div", _hoisted_28, [
          createVNode(unref(io), {
            ref_key: "mapRef",
            ref: mapRef,
            center: mapCenter.value,
            zoom: mapZoom.value,
            style: { "height": "100%", "width": "100%" },
            onClick: onMapClick
          }, {
            default: withCtx(() => [
              createVNode(unref(vo), {
                url: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
                options: { maxNativeZoom: 19, maxZoom: 21 }
              }),
              lineGeoJson.value ? (openBlock(), createBlock(unref(no), {
                key: 0,
                geojson: lineGeoJson.value,
                "options-style": lineStyle
              }, null, 8, ["geojson"])) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList(waypoints.value, (wp, i) => {
                return openBlock(), createBlock(unref(Yt), {
                  key: "wp-" + i,
                  "lat-lng": [wp.lat, wp.lon],
                  radius: 10,
                  "fill-color": waypointColor(i),
                  color: "#fff",
                  weight: 3,
                  "fill-opacity": 1
                }, {
                  default: withCtx(() => [
                    createVNode(unref(yo), null, {
                      default: withCtx(() => [
                        createElementVNode("strong", null, toDisplayString(waypointLabel(i)), 1),
                        _cache[7] || (_cache[7] = createElementVNode("br", null, null, -1)),
                        createTextVNode(" " + toDisplayString(wp.name || `${wp.lat.toFixed(4)}, ${wp.lon.toFixed(4)}`), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["lat-lng", "fill-color"]);
              }), 128))
            ]),
            _: 1
          }, 8, ["center", "zoom"])
        ])
      ]);
    };
  }
});
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const Preview = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5cc943b1"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Settings",
  props: {
    config: {},
    connections: {},
    dataSources: {}
  },
  setup(__props) {
    const connectionsFiltered = computed(
      () => __props.connections.filter((c) => c.type === "rest")
    );
    const costingOptions = [
      { text: "Auto", value: "auto" },
      { text: "Bicycle", value: "bicycle" },
      { text: "Pedestrian", value: "pedestrian" },
      { text: "Truck", value: "truck" },
      { text: "Bus", value: "bus" },
      { text: "Motor Scooter", value: "motor_scooter" },
      { text: "Motorcycle", value: "motorcycle" }
    ];
    const unitOptions = [
      { text: "Kilometers", value: "kilometers" },
      { text: "Miles", value: "miles" }
    ];
    if (!__props.config.costing) __props.config.costing = "auto";
    if (!__props.config.units) __props.config.units = "kilometers";
    if (!__props.config.language) __props.config.language = "de-DE";
    return (_ctx, _cache) => {
      const _component_VaSelect = resolveComponent("VaSelect");
      const _component_VaInput = resolveComponent("VaInput");
      return openBlock(), createElementBlock(Fragment, null, [
        createVNode(_component_VaSelect, {
          modelValue: __props.config.connection,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => __props.config.connection = $event),
          label: "Valhalla Connection",
          options: connectionsFiltered.value,
          "text-by": "name",
          "value-by": "uid"
        }, null, 8, ["modelValue", "options"]),
        createVNode(_component_VaSelect, {
          modelValue: __props.config.costing,
          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => __props.config.costing = $event),
          label: "Default Costing",
          options: costingOptions,
          "text-by": "text",
          "value-by": "value"
        }, null, 8, ["modelValue"]),
        createVNode(_component_VaSelect, {
          modelValue: __props.config.units,
          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => __props.config.units = $event),
          label: "Units",
          options: unitOptions,
          "text-by": "text",
          "value-by": "value"
        }, null, 8, ["modelValue"]),
        createVNode(_component_VaInput, {
          modelValue: __props.config.language,
          "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => __props.config.language = $event),
          label: "Language (e.g. de-DE)"
        }, null, 8, ["modelValue"])
      ], 64);
    };
  }
});
const ValhallaDatasourceIdentifier = Symbol.for("ValhallaStoreFactory");
const previewSymbol = Symbol.for("ValhallaPreview");
const settingsSymbol = Symbol.for("ValhallaSettings");
function activate({ services }) {
  services.register("ValhallaPreview", Preview);
  services.register("ValhallaSettings", _sfc_main);
  services.getRequired(DATASOURCE_REPOSITORY).registerDatasourceType("valhalla", {
    Store: ValhallaDatasourceIdentifier,
    Preview: previewSymbol,
    Settings: settingsSymbol
  });
}
function deactivate({ services }) {
  services.getRequired(DATASOURCE_REPOSITORY).unregisterDatasourceType("valhalla");
  services.unregister("ValhallaPreview");
  services.unregister("ValhallaSettings");
}
export {
  activate,
  deactivate
};
