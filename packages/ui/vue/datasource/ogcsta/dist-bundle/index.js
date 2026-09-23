(function(){var i="ui.vue.datasource.ogcsta",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".vjs-tree-brackets{cursor:pointer}.vjs-tree-brackets:hover{color:#1890ff}.vjs-check-controller{position:absolute;left:0}.vjs-check-controller.is-checked .vjs-check-controller-inner{background-color:#1890ff;border-color:#0076e4}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-checkbox:after{transform:rotate(45deg) scaleY(1)}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-radio:after{transform:translate(-50%,-50%) scale(1)}.vjs-check-controller .vjs-check-controller-inner{display:inline-block;position:relative;border:1px solid #bfcbd9;border-radius:2px;vertical-align:middle;box-sizing:border-box;width:16px;height:16px;background-color:#fff;z-index:1;cursor:pointer;transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46)}.vjs-check-controller .vjs-check-controller-inner:after{box-sizing:content-box;content:\"\";border:2px solid #fff;border-left:0;border-top:0;height:8px;left:4px;position:absolute;top:1px;transform:rotate(45deg) scaleY(0);width:4px;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transform-origin:center}.vjs-check-controller .vjs-check-controller-inner.is-radio{border-radius:100%}.vjs-check-controller .vjs-check-controller-inner.is-radio:after{border-radius:100%;height:4px;background-color:#fff;left:50%;top:50%}.vjs-check-controller .vjs-check-controller-original{opacity:0;outline:none;position:absolute;z-index:-1;inset:0;margin:0}.vjs-carets{position:absolute;right:0;cursor:pointer}.vjs-carets svg{transition:transform .3s}.vjs-carets:hover{color:#1890ff}.vjs-carets-close{transform:rotate(-90deg)}.vjs-tree-node{display:flex;position:relative;line-height:20px}.vjs-tree-node.has-carets{padding-left:15px}.vjs-tree-node.has-carets.has-selector,.vjs-tree-node.has-selector{padding-left:30px}.vjs-tree-node.is-highlight,.vjs-tree-node:hover{background-color:#e6f7ff;border-radius:4px}.vjs-tree-node.is-highlight .vjs-tree-node-actions,.vjs-tree-node:hover .vjs-tree-node-actions{display:block}.vjs-tree-node .vjs-indent{display:flex;position:relative}.vjs-tree-node .vjs-indent-unit.has-line{border-left:1px dashed #bfcbd9}.vjs-tree-node .vjs-tree-node-actions{display:none;position:absolute;right:0;top:0;padding:0 4px;background-color:#e6f7ff;border-radius:4px}.vjs-tree-node .vjs-tree-node-actions .vjs-tree-node-actions-item{cursor:pointer}.vjs-tree-node .vjs-tree-node-actions .vjs-tree-node-actions-item:hover{color:#1890ff}.vjs-tree-node.dark.is-highlight,.vjs-tree-node.dark .vjs-tree-node-actions,.vjs-tree-node.dark:hover{background-color:#2e4558}.vjs-node-index{position:absolute;right:100%;margin-right:4px;user-select:none}.vjs-colon{white-space:pre}.vjs-comment{color:#bfcbd9}.vjs-key{white-space:nowrap}.vjs-value{word-break:break-word}.vjs-tree-node.dynamic-height .vjs-value{white-space:pre-wrap}.vjs-value-null,.vjs-value-undefined{color:#d55fde}.vjs-value-boolean,.vjs-value-number{color:#1d8ce0}.vjs-value-string{color:#13ce66}.vjs-tree{font-family:Monaco,Menlo,Consolas,Bitstream Vera Sans Mono,monospace;font-size:14px;text-align:left}.vjs-tree.is-virtual{overflow:auto}.vjs-tree.is-virtual .vjs-tree-node{white-space:nowrap}.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:\"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:\"\"}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}.tree-view[data-v-065dabfc]{flex:1;overflow:auto;padding:.5rem}.json-view[data-v-065dabfc]{flex:1;overflow:auto;padding:1rem;border:1px solid #e5e7eb;border-radius:.5rem;margin:.5rem}.tree-node[data-v-065dabfc]{display:flex;align-items:center;gap:.35rem;padding:.3rem .5rem;cursor:pointer;border-radius:.25rem;transition:background-color .15s;font-size:.9em}.tree-node[data-v-065dabfc]:hover{background-color:#f3f4f6}.thing-node[data-v-065dabfc]{font-weight:600;color:#111827;font-size:.95em}.thing-item.thing-selected>.thing-node[data-v-065dabfc]{background-color:#fef3c7;border-left:3px solid #f59e0b}.datastream-node[data-v-065dabfc]{font-weight:500;color:#374151;font-size:.95em}.node-label[data-v-065dabfc]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.node-count[data-v-065dabfc]{color:#6b7280;font-size:.8em;font-weight:400}.unit-badge[data-v-065dabfc]{background-color:#e0f2fe;color:#0369a1;padding:.1rem .4rem;border-radius:.25rem;font-size:.75em;font-weight:500}.children[data-v-065dabfc]{margin-left:1.5rem;border-left:2px solid #e5e7eb;padding-left:.5rem}.thing-info[data-v-065dabfc],.ds-info[data-v-065dabfc]{padding:.25rem .5rem;font-size:.85em;color:#6b7280;display:flex;flex-wrap:wrap;gap:.25rem;align-items:flex-start}.info-label[data-v-065dabfc]{font-weight:500;color:#374151;min-width:80px}.info-label-small[data-v-065dabfc]{font-weight:500;color:#6b7280;font-size:.9em}.info-value[data-v-065dabfc]{color:#4b5563;flex:1}.info-value-small[data-v-065dabfc]{color:#6b7280;font-size:.9em}.properties-list[data-v-065dabfc]{display:flex;flex-wrap:wrap;gap:.25rem}.property-tag[data-v-065dabfc]{background-color:#f3f4f6;color:#374151;padding:.1rem .4rem;border-radius:.25rem;font-size:.8em}.observation-item[data-v-065dabfc]{display:flex;align-items:center;gap:.5rem;padding:.25rem .5rem;font-size:.9em;color:#4b5563}.observation-item.empty[data-v-065dabfc]{color:#9ca3af;font-style:italic}.observation-item.more[data-v-065dabfc]{color:#6b7280;font-style:italic;font-size:.85em}.observation-time[data-v-065dabfc]{color:#6b7280;font-size:.8em;min-width:120px}.observation-result[data-v-065dabfc]{font-weight:500;color:#059669}.right-panel[data-v-065dabfc]{flex:1;display:flex;flex-direction:column;border-left:1px solid #e5e7eb;overflow:hidden;min-width:300px}.map-panel[data-v-065dabfc]{flex:1;min-height:200px;overflow:hidden}.map-panel.half-height[data-v-065dabfc]{flex:0 0 50%;border-bottom:1px solid #e5e7eb}.no-locations[data-v-065dabfc]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#9ca3af;gap:.5rem;background:#f9fafb}.map-popup[data-v-065dabfc]{min-width:150px}.map-popup strong[data-v-065dabfc]{display:block;margin-bottom:.25rem}.map-popup p[data-v-065dabfc]{margin:.25rem 0;font-size:.9em;color:#6b7280}.map-popup small[data-v-065dabfc]{color:#9ca3af}.datastream-node.selected[data-v-065dabfc]{background-color:#dbeafe;border-left:3px solid #3b82f6}.chart-panel[data-v-065dabfc]{flex:1;display:flex;flex-direction:column;background:#fff;overflow:hidden;min-height:200px}.chart-panel.half-height[data-v-065dabfc]{flex:0 0 50%}.chart-header[data-v-065dabfc]{display:flex;justify-content:space-between;align-items:flex-start;padding:1rem;border-bottom:1px solid #e5e7eb}.chart-header h3[data-v-065dabfc]{margin:0;font-size:1.1rem;font-weight:600;color:#111827}.chart-header p[data-v-065dabfc]{margin:.25rem 0 0;font-size:.85rem;color:#6b7280}.chart-container[data-v-065dabfc]{flex:1;padding:.5rem;overflow:hidden;min-height:150px}.no-chart-data[data-v-065dabfc]{display:flex;align-items:center;justify-content:center;height:100%;color:#9ca3af;font-style:italic}.ogcsta-settings-wrapper[data-v-bab3bfb5]{position:relative;height:100%}.ogcsta-scroll-container[data-v-bab3bfb5]{position:absolute;inset:0}.ogcsta-settings[data-v-bab3bfb5]{display:flex;flex-direction:column;gap:1rem;padding:.5rem}.history-settings[data-v-bab3bfb5]{display:flex;flex-direction:column;gap:1.5rem;padding:.5rem}.setting-group[data-v-bab3bfb5]{display:flex;flex-direction:column;gap:.75rem;min-width:0}.filter-header[data-v-bab3bfb5]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--color-divider);padding-bottom:.5rem}.filter-header h4[data-v-bab3bfb5]{margin:0;border-bottom:none;padding-bottom:0}.setting-group h4[data-v-bab3bfb5]{margin:0;font-size:.9rem;font-weight:600;color:var(--color-fg);border-bottom:1px solid var(--color-divider);padding-bottom:.5rem}.w-full[data-v-bab3bfb5]{width:100%}.datetime-picker-group[data-v-bab3bfb5]{display:flex;flex-direction:column;gap:.5rem;width:100%}.datetime-picker-group[data-v-bab3bfb5]>*{flex:1;min-width:0}.history[data-v-bab3bfb5]{border-top:1px solid var(--color-divider);padding-top:8px}.history__head[data-v-bab3bfb5]{display:flex;align-items:center;gap:6px;cursor:pointer;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}\n";})();
import { DATASOURCE_REPOSITORY as jo } from "org.eclipse.daanse.board.app.lib.api.datasource";
import * as zt from "vue";
import { defineComponent as ht, h as Se, ref as W, reactive as Wo, provide as Bt, computed as Ft, onMounted as gt, markRaw as yt, nextTick as st, onBeforeUnmount as ln, inject as ut, watch as Kt, onUnmounted as Ei, render as Mr, shallowRef as ss, createElementBlock as tt, createCommentVNode as _t, openBlock as Z, createElementVNode as z, createVNode as $, unref as M, withCtx as Ot, createTextVNode as $e, toDisplayString as X, normalizeStyle as Cr, Fragment as Fe, renderList as Be, normalizeClass as bn, createBlock as yn, resolveComponent as Tr, withModifiers as Pr } from "vue";
import { DButton as Te, DDivider as Lr, DCheckbox as Ho, DIcon as Ut, DSelect as ii, DDateInput as Et, DInput as Dr } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useTranslation as $o, useFormat as Ar, useTemporaryStore as Rr, VariableWrapper as ke } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as Er } from "org.eclipse.daanse.board.app.lib.api.variable";
import { VariableInput as Oe } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
import { component as Ir } from "@eclipse-daanse/tsm";
const Vr = `<?xml version="1.0" encoding="UTF-8"?>
<!--
/*********************************************************************
* Copyright (c) 2024 Contributors to the Eclipse Foundation.
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
**********************************************************************/
-->
<ecore:EPackage xmi:version="2.0"
                xmlns:xmi="http://www.omg.org/XMI" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore" name="ogcsta"
                nsURI="http://org.eclipse.daanse.board.app.lib.datasource.ogcsta" nsPrefix="ogcsta">

    <eSubpackages href="http://org.eclipse.daanse.board.app.lib.datasource.base#/"/>

    <eClassifiers xsi:type="ecore:EClass" name="IOGCSTAConfiguration">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Configuration for an OGC SensorThings API (OGCSTA) data source, extending the base connection configuration."/>
        </eAnnotations>
        <eSuperTypes href="http://org.eclipse.daanse.board.app.lib.datasource.base#//IBaseConnectionConfiguration"/>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="connection" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A reference or ID to a specific OGCSTA connection endpoint."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

</ecore:EPackage>
`;
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function cn(n) {
  return n + 0.5 | 0;
}
const ne = (n, t, e) => Math.max(Math.min(n, e), t);
function Ue(n) {
  return ne(cn(n * 2.55), 0, 255);
}
function ae(n) {
  return ne(cn(n * 255), 0, 255);
}
function qt(n) {
  return ne(cn(n / 2.55) / 100, 0, 1);
}
function os(n) {
  return ne(cn(n * 100), 0, 100);
}
const It = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, vi = [..."0123456789ABCDEF"], Fr = (n) => vi[n & 15], Br = (n) => vi[(n & 240) >> 4] + vi[n & 15], vn = (n) => (n & 240) >> 4 === (n & 15), Nr = (n) => vn(n.r) && vn(n.g) && vn(n.b) && vn(n.a);
function zr(n) {
  var t = n.length, e;
  return n[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & It[n[1]] * 17,
    g: 255 & It[n[2]] * 17,
    b: 255 & It[n[3]] * 17,
    a: t === 5 ? It[n[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: It[n[1]] << 4 | It[n[2]],
    g: It[n[3]] << 4 | It[n[4]],
    b: It[n[5]] << 4 | It[n[6]],
    a: t === 9 ? It[n[7]] << 4 | It[n[8]] : 255
  })), e;
}
const jr = (n, t) => n < 255 ? t(n) : "";
function Wr(n) {
  var t = Nr(n) ? Fr : Br;
  return n ? "#" + t(n.r) + t(n.g) + t(n.b) + jr(n.a, t) : void 0;
}
const Hr = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Uo(n, t, e) {
  const i = t * Math.min(e, 1 - e), s = (o, a = (o + n / 30) % 12) => e - i * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [s(0), s(8), s(4)];
}
function $r(n, t, e) {
  const i = (s, o = (s + n / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [i(5), i(3), i(1)];
}
function Ur(n, t, e) {
  const i = Uo(n, 1, 0.5);
  let s;
  for (t + e > 1 && (s = 1 / (t + e), t *= s, e *= s), s = 0; s < 3; s++)
    i[s] *= 1 - t - e, i[s] += t;
  return i;
}
function Yr(n, t, e, i, s) {
  return n === s ? (t - e) / i + (t < e ? 6 : 0) : t === s ? (e - n) / i + 2 : (n - t) / i + 4;
}
function Ii(n) {
  const e = n.r / 255, i = n.g / 255, s = n.b / 255, o = Math.max(e, i, s), a = Math.min(e, i, s), r = (o + a) / 2;
  let l, c, h;
  return o !== a && (h = o - a, c = r > 0.5 ? h / (2 - o - a) : h / (o + a), l = Yr(e, i, s, h, o), l = l * 60 + 0.5), [l | 0, c || 0, r];
}
function Vi(n, t, e, i) {
  return (Array.isArray(t) ? n(t[0], t[1], t[2]) : n(t, e, i)).map(ae);
}
function Fi(n, t, e) {
  return Vi(Uo, n, t, e);
}
function Xr(n, t, e) {
  return Vi(Ur, n, t, e);
}
function Gr(n, t, e) {
  return Vi($r, n, t, e);
}
function Yo(n) {
  return (n % 360 + 360) % 360;
}
function qr(n) {
  const t = Hr.exec(n);
  let e = 255, i;
  if (!t)
    return;
  t[5] !== i && (e = t[6] ? Ue(+t[5]) : ae(+t[5]));
  const s = Yo(+t[2]), o = +t[3] / 100, a = +t[4] / 100;
  return t[1] === "hwb" ? i = Xr(s, o, a) : t[1] === "hsv" ? i = Gr(s, o, a) : i = Fi(s, o, a), {
    r: i[0],
    g: i[1],
    b: i[2],
    a: e
  };
}
function Kr(n, t) {
  var e = Ii(n);
  e[0] = Yo(e[0] + t), e = Fi(e), n.r = e[0], n.g = e[1], n.b = e[2];
}
function Zr(n) {
  if (!n)
    return;
  const t = Ii(n), e = t[0], i = os(t[1]), s = os(t[2]);
  return n.a < 255 ? `hsla(${e}, ${i}%, ${s}%, ${qt(n.a)})` : `hsl(${e}, ${i}%, ${s}%)`;
}
const as = {
  x: "dark",
  Z: "light",
  Y: "re",
  X: "blu",
  W: "gr",
  V: "medium",
  U: "slate",
  A: "ee",
  T: "ol",
  S: "or",
  B: "ra",
  C: "lateg",
  D: "ights",
  R: "in",
  Q: "turquois",
  E: "hi",
  P: "ro",
  O: "al",
  N: "le",
  M: "de",
  L: "yello",
  F: "en",
  K: "ch",
  G: "arks",
  H: "ea",
  I: "ightg",
  J: "wh"
}, rs = {
  OiceXe: "f0f8ff",
  antiquewEte: "faebd7",
  aqua: "ffff",
  aquamarRe: "7fffd4",
  azuY: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "0",
  blanKedOmond: "ffebcd",
  Xe: "ff",
  XeviTet: "8a2be2",
  bPwn: "a52a2a",
  burlywood: "deb887",
  caMtXe: "5f9ea0",
  KartYuse: "7fff00",
  KocTate: "d2691e",
  cSO: "ff7f50",
  cSnflowerXe: "6495ed",
  cSnsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "ffff",
  xXe: "8b",
  xcyan: "8b8b",
  xgTMnPd: "b8860b",
  xWay: "a9a9a9",
  xgYF: "6400",
  xgYy: "a9a9a9",
  xkhaki: "bdb76b",
  xmagFta: "8b008b",
  xTivegYF: "556b2f",
  xSange: "ff8c00",
  xScEd: "9932cc",
  xYd: "8b0000",
  xsOmon: "e9967a",
  xsHgYF: "8fbc8f",
  xUXe: "483d8b",
  xUWay: "2f4f4f",
  xUgYy: "2f4f4f",
  xQe: "ced1",
  xviTet: "9400d3",
  dAppRk: "ff1493",
  dApskyXe: "bfff",
  dimWay: "696969",
  dimgYy: "696969",
  dodgerXe: "1e90ff",
  fiYbrick: "b22222",
  flSOwEte: "fffaf0",
  foYstWAn: "228b22",
  fuKsia: "ff00ff",
  gaRsbSo: "dcdcdc",
  ghostwEte: "f8f8ff",
  gTd: "ffd700",
  gTMnPd: "daa520",
  Way: "808080",
  gYF: "8000",
  gYFLw: "adff2f",
  gYy: "808080",
  honeyMw: "f0fff0",
  hotpRk: "ff69b4",
  RdianYd: "cd5c5c",
  Rdigo: "4b0082",
  ivSy: "fffff0",
  khaki: "f0e68c",
  lavFMr: "e6e6fa",
  lavFMrXsh: "fff0f5",
  lawngYF: "7cfc00",
  NmoncEffon: "fffacd",
  ZXe: "add8e6",
  ZcSO: "f08080",
  Zcyan: "e0ffff",
  ZgTMnPdLw: "fafad2",
  ZWay: "d3d3d3",
  ZgYF: "90ee90",
  ZgYy: "d3d3d3",
  ZpRk: "ffb6c1",
  ZsOmon: "ffa07a",
  ZsHgYF: "20b2aa",
  ZskyXe: "87cefa",
  ZUWay: "778899",
  ZUgYy: "778899",
  ZstAlXe: "b0c4de",
  ZLw: "ffffe0",
  lime: "ff00",
  limegYF: "32cd32",
  lRF: "faf0e6",
  magFta: "ff00ff",
  maPon: "800000",
  VaquamarRe: "66cdaa",
  VXe: "cd",
  VScEd: "ba55d3",
  VpurpN: "9370db",
  VsHgYF: "3cb371",
  VUXe: "7b68ee",
  VsprRggYF: "fa9a",
  VQe: "48d1cc",
  VviTetYd: "c71585",
  midnightXe: "191970",
  mRtcYam: "f5fffa",
  mistyPse: "ffe4e1",
  moccasR: "ffe4b5",
  navajowEte: "ffdead",
  navy: "80",
  Tdlace: "fdf5e6",
  Tive: "808000",
  TivedBb: "6b8e23",
  Sange: "ffa500",
  SangeYd: "ff4500",
  ScEd: "da70d6",
  pOegTMnPd: "eee8aa",
  pOegYF: "98fb98",
  pOeQe: "afeeee",
  pOeviTetYd: "db7093",
  papayawEp: "ffefd5",
  pHKpuff: "ffdab9",
  peru: "cd853f",
  pRk: "ffc0cb",
  plum: "dda0dd",
  powMrXe: "b0e0e6",
  purpN: "800080",
  YbeccapurpN: "663399",
  Yd: "ff0000",
  Psybrown: "bc8f8f",
  PyOXe: "4169e1",
  saddNbPwn: "8b4513",
  sOmon: "fa8072",
  sandybPwn: "f4a460",
  sHgYF: "2e8b57",
  sHshell: "fff5ee",
  siFna: "a0522d",
  silver: "c0c0c0",
  skyXe: "87ceeb",
  UXe: "6a5acd",
  UWay: "708090",
  UgYy: "708090",
  snow: "fffafa",
  sprRggYF: "ff7f",
  stAlXe: "4682b4",
  tan: "d2b48c",
  teO: "8080",
  tEstN: "d8bfd8",
  tomato: "ff6347",
  Qe: "40e0d0",
  viTet: "ee82ee",
  JHt: "f5deb3",
  wEte: "ffffff",
  wEtesmoke: "f5f5f5",
  Lw: "ffff00",
  LwgYF: "9acd32"
};
function Jr() {
  const n = {}, t = Object.keys(rs), e = Object.keys(as);
  let i, s, o, a, r;
  for (i = 0; i < t.length; i++) {
    for (a = r = t[i], s = 0; s < e.length; s++)
      o = e[s], r = r.replace(o, as[o]);
    o = parseInt(rs[a], 16), n[r] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return n;
}
let xn;
function Qr(n) {
  xn || (xn = Jr(), xn.transparent = [0, 0, 0, 0]);
  const t = xn[n.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const tl = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function el(n) {
  const t = tl.exec(n);
  let e = 255, i, s, o;
  if (t) {
    if (t[7] !== i) {
      const a = +t[7];
      e = t[8] ? Ue(a) : ne(a * 255, 0, 255);
    }
    return i = +t[1], s = +t[3], o = +t[5], i = 255 & (t[2] ? Ue(i) : ne(i, 0, 255)), s = 255 & (t[4] ? Ue(s) : ne(s, 0, 255)), o = 255 & (t[6] ? Ue(o) : ne(o, 0, 255)), {
      r: i,
      g: s,
      b: o,
      a: e
    };
  }
}
function nl(n) {
  return n && (n.a < 255 ? `rgba(${n.r}, ${n.g}, ${n.b}, ${qt(n.a)})` : `rgb(${n.r}, ${n.g}, ${n.b})`);
}
const si = (n) => n <= 31308e-7 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055, Me = (n) => n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
function il(n, t, e) {
  const i = Me(qt(n.r)), s = Me(qt(n.g)), o = Me(qt(n.b));
  return {
    r: ae(si(i + e * (Me(qt(t.r)) - i))),
    g: ae(si(s + e * (Me(qt(t.g)) - s))),
    b: ae(si(o + e * (Me(qt(t.b)) - o))),
    a: n.a + e * (t.a - n.a)
  };
}
function _n(n, t, e) {
  if (n) {
    let i = Ii(n);
    i[t] = Math.max(0, Math.min(i[t] + i[t] * e, t === 0 ? 360 : 1)), i = Fi(i), n.r = i[0], n.g = i[1], n.b = i[2];
  }
}
function Xo(n, t) {
  return n && Object.assign(t || {}, n);
}
function ls(n) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(n) ? n.length >= 3 && (t = { r: n[0], g: n[1], b: n[2], a: 255 }, n.length > 3 && (t.a = ae(n[3]))) : (t = Xo(n, { r: 0, g: 0, b: 0, a: 1 }), t.a = ae(t.a)), t;
}
function sl(n) {
  return n.charAt(0) === "r" ? el(n) : qr(n);
}
class Qe {
  constructor(t) {
    if (t instanceof Qe)
      return t;
    const e = typeof t;
    let i;
    e === "object" ? i = ls(t) : e === "string" && (i = zr(t) || Qr(t) || sl(t)), this._rgb = i, this._valid = !!i;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = Xo(this._rgb);
    return t && (t.a = qt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = ls(t);
  }
  rgbString() {
    return this._valid ? nl(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Wr(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Zr(this._rgb) : void 0;
  }
  mix(t, e) {
    if (t) {
      const i = this.rgb, s = t.rgb;
      let o;
      const a = e === o ? 0.5 : e, r = 2 * a - 1, l = i.a - s.a, c = ((r * l === -1 ? r : (r + l) / (1 + r * l)) + 1) / 2;
      o = 1 - c, i.r = 255 & c * i.r + o * s.r + 0.5, i.g = 255 & c * i.g + o * s.g + 0.5, i.b = 255 & c * i.b + o * s.b + 0.5, i.a = a * i.a + (1 - a) * s.a, this.rgb = i;
    }
    return this;
  }
  interpolate(t, e) {
    return t && (this._rgb = il(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Qe(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = ae(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = cn(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return t.r = t.g = t.b = e, this;
  }
  opaquer(t) {
    const e = this._rgb;
    return e.a *= 1 + t, this;
  }
  negate() {
    const t = this._rgb;
    return t.r = 255 - t.r, t.g = 255 - t.g, t.b = 255 - t.b, this;
  }
  lighten(t) {
    return _n(this._rgb, 2, t), this;
  }
  darken(t) {
    return _n(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return _n(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return _n(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Kr(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function Yt() {
}
const ol = /* @__PURE__ */ (() => {
  let n = 0;
  return () => n++;
})();
function G(n) {
  return n == null;
}
function rt(n) {
  if (Array.isArray && Array.isArray(n))
    return !0;
  const t = Object.prototype.toString.call(n);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function K(n) {
  return n !== null && Object.prototype.toString.call(n) === "[object Object]";
}
function ft(n) {
  return (typeof n == "number" || n instanceof Number) && isFinite(+n);
}
function Rt(n, t) {
  return ft(n) ? n : t;
}
function U(n, t) {
  return typeof n > "u" ? t : n;
}
const al = (n, t) => typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 : +n / t, Go = (n, t) => typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 * t : +n;
function it(n, t, e) {
  if (n && typeof n.call == "function")
    return n.apply(e, t);
}
function et(n, t, e, i) {
  let s, o, a;
  if (rt(n))
    for (o = n.length, s = 0; s < o; s++)
      t.call(e, n[s], s);
  else if (K(n))
    for (a = Object.keys(n), o = a.length, s = 0; s < o; s++)
      t.call(e, n[a[s]], a[s]);
}
function Vn(n, t) {
  let e, i, s, o;
  if (!n || !t || n.length !== t.length)
    return !1;
  for (e = 0, i = n.length; e < i; ++e)
    if (s = n[e], o = t[e], s.datasetIndex !== o.datasetIndex || s.index !== o.index)
      return !1;
  return !0;
}
function Fn(n) {
  if (rt(n))
    return n.map(Fn);
  if (K(n)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(n), i = e.length;
    let s = 0;
    for (; s < i; ++s)
      t[e[s]] = Fn(n[e[s]]);
    return t;
  }
  return n;
}
function qo(n) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(n) === -1;
}
function rl(n, t, e, i) {
  if (!qo(n))
    return;
  const s = t[n], o = e[n];
  K(s) && K(o) ? tn(s, o, i) : t[n] = Fn(o);
}
function tn(n, t, e) {
  const i = rt(t) ? t : [
    t
  ], s = i.length;
  if (!K(n))
    return n;
  e = e || {};
  const o = e.merger || rl;
  let a;
  for (let r = 0; r < s; ++r) {
    if (a = i[r], !K(a))
      continue;
    const l = Object.keys(a);
    for (let c = 0, h = l.length; c < h; ++c)
      o(l[c], n, a, e);
  }
  return n;
}
function qe(n, t) {
  return tn(n, t, {
    merger: ll
  });
}
function ll(n, t, e) {
  if (!qo(n))
    return;
  const i = t[n], s = e[n];
  K(i) && K(s) ? qe(i, s) : Object.prototype.hasOwnProperty.call(t, n) || (t[n] = Fn(s));
}
const cs = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (n) => n,
  // default resolvers
  x: (n) => n.x,
  y: (n) => n.y
};
function cl(n) {
  const t = n.split("."), e = [];
  let i = "";
  for (const s of t)
    i += s, i.endsWith("\\") ? i = i.slice(0, -1) + "." : (e.push(i), i = "");
  return e;
}
function hl(n) {
  const t = cl(n);
  return (e) => {
    for (const i of t) {
      if (i === "")
        break;
      e = e && e[i];
    }
    return e;
  };
}
function re(n, t) {
  return (cs[t] || (cs[t] = hl(t)))(n);
}
function Bi(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const en = (n) => typeof n < "u", le = (n) => typeof n == "function", hs = (n, t) => {
  if (n.size !== t.size)
    return !1;
  for (const e of n)
    if (!t.has(e))
      return !1;
  return !0;
};
function ul(n) {
  return n.type === "mouseup" || n.type === "click" || n.type === "contextmenu";
}
const J = Math.PI, at = 2 * J, dl = at + J, Bn = Number.POSITIVE_INFINITY, fl = J / 180, bt = J / 2, ue = J / 4, us = J * 2 / 3, ie = Math.log10, Ht = Math.sign;
function Ke(n, t, e) {
  return Math.abs(n - t) < e;
}
function ds(n) {
  const t = Math.round(n);
  n = Ke(n, t, n / 1e3) ? t : n;
  const e = Math.pow(10, Math.floor(ie(n))), i = n / e;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * e;
}
function gl(n) {
  const t = [], e = Math.sqrt(n);
  let i;
  for (i = 1; i < e; i++)
    n % i === 0 && (t.push(i), t.push(n / i));
  return e === (e | 0) && t.push(e), t.sort((s, o) => s - o).pop(), t;
}
function pl(n) {
  return typeof n == "symbol" || typeof n == "object" && n !== null && !(Symbol.toPrimitive in n || "toString" in n || "valueOf" in n);
}
function Le(n) {
  return !pl(n) && !isNaN(parseFloat(n)) && isFinite(n);
}
function ml(n, t) {
  const e = Math.round(n);
  return e - t <= n && e + t >= n;
}
function Ko(n, t, e) {
  let i, s, o;
  for (i = 0, s = n.length; i < s; i++)
    o = n[i][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function Nt(n) {
  return n * (J / 180);
}
function Ni(n) {
  return n * (180 / J);
}
function fs(n) {
  if (!ft(n))
    return;
  let t = 1, e = 0;
  for (; Math.round(n * t) / t !== n; )
    t *= 10, e++;
  return e;
}
function Zo(n, t) {
  const e = t.x - n.x, i = t.y - n.y, s = Math.sqrt(e * e + i * i);
  let o = Math.atan2(i, e);
  return o < -0.5 * J && (o += at), {
    angle: o,
    distance: s
  };
}
function xi(n, t) {
  return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2));
}
function bl(n, t) {
  return (n - t + dl) % at - J;
}
function Mt(n) {
  return (n % at + at) % at;
}
function nn(n, t, e, i) {
  const s = Mt(n), o = Mt(t), a = Mt(e), r = Mt(o - s), l = Mt(a - s), c = Mt(s - o), h = Mt(s - a);
  return s === o || s === a || i && o === a || r > l && c < h;
}
function St(n, t, e) {
  return Math.max(t, Math.min(e, n));
}
function yl(n) {
  return St(n, -32768, 32767);
}
function Zt(n, t, e, i = 1e-6) {
  return n >= Math.min(t, e) - i && n <= Math.max(t, e) + i;
}
function zi(n, t, e) {
  e = e || ((a) => n[a] < t);
  let i = n.length - 1, s = 0, o;
  for (; i - s > 1; )
    o = s + i >> 1, e(o) ? s = o : i = o;
  return {
    lo: s,
    hi: i
  };
}
const Jt = (n, t, e, i) => zi(n, e, i ? (s) => {
  const o = n[s][t];
  return o < e || o === e && n[s + 1][t] === e;
} : (s) => n[s][t] < e), vl = (n, t, e) => zi(n, e, (i) => n[i][t] >= e);
function xl(n, t, e) {
  let i = 0, s = n.length;
  for (; i < s && n[i] < t; )
    i++;
  for (; s > i && n[s - 1] > e; )
    s--;
  return i > 0 || s < n.length ? n.slice(i, s) : n;
}
const Jo = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function _l(n, t) {
  if (n._chartjs) {
    n._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(n, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: {
      listeners: [
        t
      ]
    }
  }), Jo.forEach((e) => {
    const i = "_onData" + Bi(e), s = n[e];
    Object.defineProperty(n, e, {
      configurable: !0,
      enumerable: !1,
      value(...o) {
        const a = s.apply(this, o);
        return n._chartjs.listeners.forEach((r) => {
          typeof r[i] == "function" && r[i](...o);
        }), a;
      }
    });
  });
}
function gs(n, t) {
  const e = n._chartjs;
  if (!e)
    return;
  const i = e.listeners, s = i.indexOf(t);
  s !== -1 && i.splice(s, 1), !(i.length > 0) && (Jo.forEach((o) => {
    delete n[o];
  }), delete n._chartjs);
}
function Qo(n) {
  const t = new Set(n);
  return t.size === n.length ? n : Array.from(t);
}
const ta = (function() {
  return typeof window > "u" ? function(n) {
    return n();
  } : window.requestAnimationFrame;
})();
function ea(n, t) {
  let e = [], i = !1;
  return function(...s) {
    e = s, i || (i = !0, ta.call(window, () => {
      i = !1, n.apply(t, e);
    }));
  };
}
function Sl(n, t) {
  let e;
  return function(...i) {
    return t ? (clearTimeout(e), e = setTimeout(n, t, i)) : n.apply(this, i), t;
  };
}
const ji = (n) => n === "start" ? "left" : n === "end" ? "right" : "center", kt = (n, t, e) => n === "start" ? t : n === "end" ? e : (t + e) / 2, wl = (n, t, e, i) => n === (i ? "left" : "right") ? e : n === "center" ? (t + e) / 2 : t;
function na(n, t, e) {
  const i = t.length;
  let s = 0, o = i;
  if (n._sorted) {
    const { iScale: a, vScale: r, _parsed: l } = n, c = n.dataset && n.dataset.options ? n.dataset.options.spanGaps : null, h = a.axis, { min: u, max: d, minDefined: f, maxDefined: g } = a.getUserBounds();
    if (f) {
      if (s = Math.min(
        // @ts-expect-error Need to type _parsed
        Jt(l, h, u).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? i : Jt(t, h, a.getPixelForValue(u)).lo
      ), c) {
        const p = l.slice(0, s + 1).reverse().findIndex((m) => !G(m[r.axis]));
        s -= Math.max(0, p);
      }
      s = St(s, 0, i - 1);
    }
    if (g) {
      let p = Math.max(
        // @ts-expect-error Need to type _parsed
        Jt(l, a.axis, d, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : Jt(t, h, a.getPixelForValue(d), !0).hi + 1
      );
      if (c) {
        const m = l.slice(p - 1).findIndex((b) => !G(b[r.axis]));
        p += Math.max(0, m);
      }
      o = St(p, s, i) - s;
    } else
      o = i - s;
  }
  return {
    start: s,
    count: o
  };
}
function ia(n) {
  const { xScale: t, yScale: e, _scaleRanges: i } = n, s = {
    xmin: t.min,
    xmax: t.max,
    ymin: e.min,
    ymax: e.max
  };
  if (!i)
    return n._scaleRanges = s, !0;
  const o = i.xmin !== t.min || i.xmax !== t.max || i.ymin !== e.min || i.ymax !== e.max;
  return Object.assign(i, s), o;
}
const Sn = (n) => n === 0 || n === 1, ps = (n, t, e) => -(Math.pow(2, 10 * (n -= 1)) * Math.sin((n - t) * at / e)), ms = (n, t, e) => Math.pow(2, -10 * n) * Math.sin((n - t) * at / e) + 1, Ze = {
  linear: (n) => n,
  easeInQuad: (n) => n * n,
  easeOutQuad: (n) => -n * (n - 2),
  easeInOutQuad: (n) => (n /= 0.5) < 1 ? 0.5 * n * n : -0.5 * (--n * (n - 2) - 1),
  easeInCubic: (n) => n * n * n,
  easeOutCubic: (n) => (n -= 1) * n * n + 1,
  easeInOutCubic: (n) => (n /= 0.5) < 1 ? 0.5 * n * n * n : 0.5 * ((n -= 2) * n * n + 2),
  easeInQuart: (n) => n * n * n * n,
  easeOutQuart: (n) => -((n -= 1) * n * n * n - 1),
  easeInOutQuart: (n) => (n /= 0.5) < 1 ? 0.5 * n * n * n * n : -0.5 * ((n -= 2) * n * n * n - 2),
  easeInQuint: (n) => n * n * n * n * n,
  easeOutQuint: (n) => (n -= 1) * n * n * n * n + 1,
  easeInOutQuint: (n) => (n /= 0.5) < 1 ? 0.5 * n * n * n * n * n : 0.5 * ((n -= 2) * n * n * n * n + 2),
  easeInSine: (n) => -Math.cos(n * bt) + 1,
  easeOutSine: (n) => Math.sin(n * bt),
  easeInOutSine: (n) => -0.5 * (Math.cos(J * n) - 1),
  easeInExpo: (n) => n === 0 ? 0 : Math.pow(2, 10 * (n - 1)),
  easeOutExpo: (n) => n === 1 ? 1 : -Math.pow(2, -10 * n) + 1,
  easeInOutExpo: (n) => Sn(n) ? n : n < 0.5 ? 0.5 * Math.pow(2, 10 * (n * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (n * 2 - 1)) + 2),
  easeInCirc: (n) => n >= 1 ? n : -(Math.sqrt(1 - n * n) - 1),
  easeOutCirc: (n) => Math.sqrt(1 - (n -= 1) * n),
  easeInOutCirc: (n) => (n /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - n * n) - 1) : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1),
  easeInElastic: (n) => Sn(n) ? n : ps(n, 0.075, 0.3),
  easeOutElastic: (n) => Sn(n) ? n : ms(n, 0.075, 0.3),
  easeInOutElastic(n) {
    return Sn(n) ? n : n < 0.5 ? 0.5 * ps(n * 2, 0.1125, 0.45) : 0.5 + 0.5 * ms(n * 2 - 1, 0.1125, 0.45);
  },
  easeInBack(n) {
    return n * n * ((1.70158 + 1) * n - 1.70158);
  },
  easeOutBack(n) {
    return (n -= 1) * n * ((1.70158 + 1) * n + 1.70158) + 1;
  },
  easeInOutBack(n) {
    let t = 1.70158;
    return (n /= 0.5) < 1 ? 0.5 * (n * n * (((t *= 1.525) + 1) * n - t)) : 0.5 * ((n -= 2) * n * (((t *= 1.525) + 1) * n + t) + 2);
  },
  easeInBounce: (n) => 1 - Ze.easeOutBounce(1 - n),
  easeOutBounce(n) {
    return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375 : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
  },
  easeInOutBounce: (n) => n < 0.5 ? Ze.easeInBounce(n * 2) * 0.5 : Ze.easeOutBounce(n * 2 - 1) * 0.5 + 0.5
};
function Wi(n) {
  if (n && typeof n == "object") {
    const t = n.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function bs(n) {
  return Wi(n) ? n : new Qe(n);
}
function oi(n) {
  return Wi(n) ? n : new Qe(n).saturate(0.5).darken(0.1).hexString();
}
const kl = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], Ol = [
  "color",
  "borderColor",
  "backgroundColor"
];
function Ml(n) {
  n.set("animation", {
    delay: void 0,
    duration: 1e3,
    easing: "easeOutQuart",
    fn: void 0,
    from: void 0,
    loop: void 0,
    to: void 0,
    type: void 0
  }), n.describe("animation", {
    _fallback: !1,
    _indexable: !1,
    _scriptable: (t) => t !== "onProgress" && t !== "onComplete" && t !== "fn"
  }), n.set("animations", {
    colors: {
      type: "color",
      properties: Ol
    },
    numbers: {
      type: "number",
      properties: kl
    }
  }), n.describe("animations", {
    _fallback: "animation"
  }), n.set("transitions", {
    active: {
      animation: {
        duration: 400
      }
    },
    resize: {
      animation: {
        duration: 0
      }
    },
    show: {
      animations: {
        colors: {
          from: "transparent"
        },
        visible: {
          type: "boolean",
          duration: 0
        }
      }
    },
    hide: {
      animations: {
        colors: {
          to: "transparent"
        },
        visible: {
          type: "boolean",
          easing: "linear",
          fn: (t) => t | 0
        }
      }
    }
  });
}
function Cl(n) {
  n.set("layout", {
    autoPadding: !0,
    padding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  });
}
const ys = /* @__PURE__ */ new Map();
function Tl(n, t) {
  t = t || {};
  const e = n + JSON.stringify(t);
  let i = ys.get(e);
  return i || (i = new Intl.NumberFormat(n, t), ys.set(e, i)), i;
}
function hn(n, t, e) {
  return Tl(t, e).format(n);
}
const sa = {
  values(n) {
    return rt(n) ? n : "" + n;
  },
  numeric(n, t, e) {
    if (n === 0)
      return "0";
    const i = this.chart.options.locale;
    let s, o = n;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), o = Pl(n, e);
    }
    const a = ie(Math.abs(o)), r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0), l = {
      notation: s,
      minimumFractionDigits: r,
      maximumFractionDigits: r
    };
    return Object.assign(l, this.options.ticks.format), hn(n, i, l);
  },
  logarithmic(n, t, e) {
    if (n === 0)
      return "0";
    const i = e[t].significand || n / Math.pow(10, Math.floor(ie(n)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(i) || t > 0.8 * e.length ? sa.numeric.call(this, n, t, e) : "";
  }
};
function Pl(n, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && n !== Math.floor(n) && (e = n - Math.floor(n)), e;
}
var Yn = {
  formatters: sa
};
function Ll(n) {
  n.set("scale", {
    display: !0,
    offset: !1,
    reverse: !1,
    beginAtZero: !1,
    bounds: "ticks",
    clip: !0,
    grace: 0,
    grid: {
      display: !0,
      lineWidth: 1,
      drawOnChartArea: !0,
      drawTicks: !0,
      tickLength: 8,
      tickWidth: (t, e) => e.lineWidth,
      tickColor: (t, e) => e.color,
      offset: !1
    },
    border: {
      display: !0,
      dash: [],
      dashOffset: 0,
      width: 1
    },
    title: {
      display: !1,
      text: "",
      padding: {
        top: 4,
        bottom: 4
      }
    },
    ticks: {
      minRotation: 0,
      maxRotation: 50,
      mirror: !1,
      textStrokeWidth: 0,
      textStrokeColor: "",
      padding: 3,
      display: !0,
      autoSkip: !0,
      autoSkipPadding: 3,
      labelOffset: 0,
      callback: Yn.formatters.values,
      minor: {},
      major: {},
      align: "center",
      crossAlign: "near",
      showLabelBackdrop: !1,
      backdropColor: "rgba(255, 255, 255, 0.75)",
      backdropPadding: 2
    }
  }), n.route("scale.ticks", "color", "", "color"), n.route("scale.grid", "color", "", "borderColor"), n.route("scale.border", "color", "", "borderColor"), n.route("scale.title", "color", "", "color"), n.describe("scale", {
    _fallback: !1,
    _scriptable: (t) => !t.startsWith("before") && !t.startsWith("after") && t !== "callback" && t !== "parser",
    _indexable: (t) => t !== "borderDash" && t !== "tickBorderDash" && t !== "dash"
  }), n.describe("scales", {
    _fallback: "scale"
  }), n.describe("scale.ticks", {
    _scriptable: (t) => t !== "backdropPadding" && t !== "callback",
    _indexable: (t) => t !== "backdropPadding"
  });
}
const xe = /* @__PURE__ */ Object.create(null), _i = /* @__PURE__ */ Object.create(null);
function Je(n, t) {
  if (!t)
    return n;
  const e = t.split(".");
  for (let i = 0, s = e.length; i < s; ++i) {
    const o = e[i];
    n = n[o] || (n[o] = /* @__PURE__ */ Object.create(null));
  }
  return n;
}
function ai(n, t, e) {
  return typeof t == "string" ? tn(Je(n, t), e) : tn(Je(n, ""), t);
}
class Dl {
  constructor(t, e) {
    this.animation = void 0, this.backgroundColor = "rgba(0,0,0,0.1)", this.borderColor = "rgba(0,0,0,0.1)", this.color = "#666", this.datasets = {}, this.devicePixelRatio = (i) => i.chart.platform.getDevicePixelRatio(), this.elements = {}, this.events = [
      "mousemove",
      "mouseout",
      "click",
      "touchstart",
      "touchmove"
    ], this.font = {
      family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
      size: 12,
      style: "normal",
      lineHeight: 1.2,
      weight: null
    }, this.hover = {}, this.hoverBackgroundColor = (i, s) => oi(s.backgroundColor), this.hoverBorderColor = (i, s) => oi(s.borderColor), this.hoverColor = (i, s) => oi(s.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return ai(this, t, e);
  }
  get(t) {
    return Je(this, t);
  }
  describe(t, e) {
    return ai(_i, t, e);
  }
  override(t, e) {
    return ai(xe, t, e);
  }
  route(t, e, i, s) {
    const o = Je(this, t), a = Je(this, i), r = "_" + e;
    Object.defineProperties(o, {
      [r]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[r], c = a[s];
          return K(l) ? Object.assign({}, c, l) : U(l, c);
        },
        set(l) {
          this[r] = l;
        }
      }
    });
  }
  apply(t) {
    t.forEach((e) => e(this));
  }
}
var lt = /* @__PURE__ */ new Dl({
  _scriptable: (n) => !n.startsWith("on"),
  _indexable: (n) => n !== "events",
  hover: {
    _fallback: "interaction"
  },
  interaction: {
    _scriptable: !1,
    _indexable: !1
  }
}, [
  Ml,
  Cl,
  Ll
]);
function Al(n) {
  return !n || G(n.size) || G(n.family) ? null : (n.style ? n.style + " " : "") + (n.weight ? n.weight + " " : "") + n.size + "px " + n.family;
}
function Nn(n, t, e, i, s) {
  let o = t[s];
  return o || (o = t[s] = n.measureText(s).width, e.push(s)), o > i && (i = o), i;
}
function Rl(n, t, e, i) {
  i = i || {};
  let s = i.data = i.data || {}, o = i.garbageCollect = i.garbageCollect || [];
  i.font !== t && (s = i.data = {}, o = i.garbageCollect = [], i.font = t), n.save(), n.font = t;
  let a = 0;
  const r = e.length;
  let l, c, h, u, d;
  for (l = 0; l < r; l++)
    if (u = e[l], u != null && !rt(u))
      a = Nn(n, s, o, a, u);
    else if (rt(u))
      for (c = 0, h = u.length; c < h; c++)
        d = u[c], d != null && !rt(d) && (a = Nn(n, s, o, a, d));
  n.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++)
      delete s[o[l]];
    o.splice(0, f);
  }
  return a;
}
function de(n, t, e) {
  const i = n.currentDevicePixelRatio, s = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - s) * i) / i + s;
}
function vs(n, t) {
  !t && !n || (t = t || n.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, n.width, n.height), t.restore());
}
function Si(n, t, e, i) {
  oa(n, t, e, i, null);
}
function oa(n, t, e, i, s) {
  let o, a, r, l, c, h, u, d;
  const f = t.pointStyle, g = t.rotation, p = t.radius;
  let m = (g || 0) * fl;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    n.save(), n.translate(e, i), n.rotate(m), n.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), n.restore();
    return;
  }
  if (!(isNaN(p) || p <= 0)) {
    switch (n.beginPath(), f) {
      // Default includes circle
      default:
        s ? n.ellipse(e, i, s / 2, p, 0, 0, at) : n.arc(e, i, p, 0, at), n.closePath();
        break;
      case "triangle":
        h = s ? s / 2 : p, n.moveTo(e + Math.sin(m) * h, i - Math.cos(m) * p), m += us, n.lineTo(e + Math.sin(m) * h, i - Math.cos(m) * p), m += us, n.lineTo(e + Math.sin(m) * h, i - Math.cos(m) * p), n.closePath();
        break;
      case "rectRounded":
        c = p * 0.516, l = p - c, a = Math.cos(m + ue) * l, u = Math.cos(m + ue) * (s ? s / 2 - c : l), r = Math.sin(m + ue) * l, d = Math.sin(m + ue) * (s ? s / 2 - c : l), n.arc(e - u, i - r, c, m - J, m - bt), n.arc(e + d, i - a, c, m - bt, m), n.arc(e + u, i + r, c, m, m + bt), n.arc(e - d, i + a, c, m + bt, m + J), n.closePath();
        break;
      case "rect":
        if (!g) {
          l = Math.SQRT1_2 * p, h = s ? s / 2 : l, n.rect(e - h, i - l, 2 * h, 2 * l);
          break;
        }
        m += ue;
      /* falls through */
      case "rectRot":
        u = Math.cos(m) * (s ? s / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, d = Math.sin(m) * (s ? s / 2 : p), n.moveTo(e - u, i - r), n.lineTo(e + d, i - a), n.lineTo(e + u, i + r), n.lineTo(e - d, i + a), n.closePath();
        break;
      case "crossRot":
        m += ue;
      /* falls through */
      case "cross":
        u = Math.cos(m) * (s ? s / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, d = Math.sin(m) * (s ? s / 2 : p), n.moveTo(e - u, i - r), n.lineTo(e + u, i + r), n.moveTo(e + d, i - a), n.lineTo(e - d, i + a);
        break;
      case "star":
        u = Math.cos(m) * (s ? s / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, d = Math.sin(m) * (s ? s / 2 : p), n.moveTo(e - u, i - r), n.lineTo(e + u, i + r), n.moveTo(e + d, i - a), n.lineTo(e - d, i + a), m += ue, u = Math.cos(m) * (s ? s / 2 : p), a = Math.cos(m) * p, r = Math.sin(m) * p, d = Math.sin(m) * (s ? s / 2 : p), n.moveTo(e - u, i - r), n.lineTo(e + u, i + r), n.moveTo(e + d, i - a), n.lineTo(e - d, i + a);
        break;
      case "line":
        a = s ? s / 2 : Math.cos(m) * p, r = Math.sin(m) * p, n.moveTo(e - a, i - r), n.lineTo(e + a, i + r);
        break;
      case "dash":
        n.moveTo(e, i), n.lineTo(e + Math.cos(m) * (s ? s / 2 : p), i + Math.sin(m) * p);
        break;
      case !1:
        n.closePath();
        break;
    }
    n.fill(), t.borderWidth > 0 && n.stroke();
  }
}
function Qt(n, t, e) {
  return e = e || 0.5, !t || n && n.x > t.left - e && n.x < t.right + e && n.y > t.top - e && n.y < t.bottom + e;
}
function Xn(n, t) {
  n.save(), n.beginPath(), n.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), n.clip();
}
function Gn(n) {
  n.restore();
}
function El(n, t, e, i, s) {
  if (!t)
    return n.lineTo(e.x, e.y);
  if (s === "middle") {
    const o = (t.x + e.x) / 2;
    n.lineTo(o, t.y), n.lineTo(o, e.y);
  } else s === "after" != !!i ? n.lineTo(t.x, e.y) : n.lineTo(e.x, t.y);
  n.lineTo(e.x, e.y);
}
function Il(n, t, e, i) {
  if (!t)
    return n.lineTo(e.x, e.y);
  n.bezierCurveTo(i ? t.cp1x : t.cp2x, i ? t.cp1y : t.cp2y, i ? e.cp2x : e.cp1x, i ? e.cp2y : e.cp1y, e.x, e.y);
}
function Vl(n, t) {
  t.translation && n.translate(t.translation[0], t.translation[1]), G(t.rotation) || n.rotate(t.rotation), t.color && (n.fillStyle = t.color), t.textAlign && (n.textAlign = t.textAlign), t.textBaseline && (n.textBaseline = t.textBaseline);
}
function Fl(n, t, e, i, s) {
  if (s.strikethrough || s.underline) {
    const o = n.measureText(i), a = t - o.actualBoundingBoxLeft, r = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, h = s.strikethrough ? (l + c) / 2 : c;
    n.strokeStyle = n.fillStyle, n.beginPath(), n.lineWidth = s.decorationWidth || 2, n.moveTo(a, h), n.lineTo(r, h), n.stroke();
  }
}
function Bl(n, t) {
  const e = n.fillStyle;
  n.fillStyle = t.color, n.fillRect(t.left, t.top, t.width, t.height), n.fillStyle = e;
}
function _e(n, t, e, i, s, o = {}) {
  const a = rt(t) ? t : [
    t
  ], r = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (n.save(), n.font = s.string, Vl(n, o), l = 0; l < a.length; ++l)
    c = a[l], o.backdrop && Bl(n, o.backdrop), r && (o.strokeColor && (n.strokeStyle = o.strokeColor), G(o.strokeWidth) || (n.lineWidth = o.strokeWidth), n.strokeText(c, e, i, o.maxWidth)), n.fillText(c, e, i, o.maxWidth), Fl(n, e, i, c, o), i += Number(s.lineHeight);
  n.restore();
}
function sn(n, t) {
  const { x: e, y: i, w: s, h: o, radius: a } = t;
  n.arc(e + a.topLeft, i + a.topLeft, a.topLeft, 1.5 * J, J, !0), n.lineTo(e, i + o - a.bottomLeft), n.arc(e + a.bottomLeft, i + o - a.bottomLeft, a.bottomLeft, J, bt, !0), n.lineTo(e + s - a.bottomRight, i + o), n.arc(e + s - a.bottomRight, i + o - a.bottomRight, a.bottomRight, bt, 0, !0), n.lineTo(e + s, i + a.topRight), n.arc(e + s - a.topRight, i + a.topRight, a.topRight, 0, -bt, !0), n.lineTo(e + a.topLeft, i);
}
const Nl = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, zl = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function jl(n, t) {
  const e = ("" + n).match(Nl);
  if (!e || e[1] === "normal")
    return t * 1.2;
  switch (n = +e[2], e[3]) {
    case "px":
      return n;
    case "%":
      n /= 100;
      break;
  }
  return t * n;
}
const Wl = (n) => +n || 0;
function Hi(n, t) {
  const e = {}, i = K(t), s = i ? Object.keys(t) : t, o = K(n) ? i ? (a) => U(n[a], n[t[a]]) : (a) => n[a] : () => n;
  for (const a of s)
    e[a] = Wl(o(a));
  return e;
}
function aa(n) {
  return Hi(n, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function ye(n) {
  return Hi(n, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Tt(n) {
  const t = aa(n);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function vt(n, t) {
  n = n || {}, t = t || lt.font;
  let e = U(n.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let i = U(n.style, t.style);
  i && !("" + i).match(zl) && (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
  const s = {
    family: U(n.family, t.family),
    lineHeight: jl(U(n.lineHeight, t.lineHeight), e),
    size: e,
    style: i,
    weight: U(n.weight, t.weight),
    string: ""
  };
  return s.string = Al(s), s;
}
function Ye(n, t, e, i) {
  let s, o, a;
  for (s = 0, o = n.length; s < o; ++s)
    if (a = n[s], a !== void 0 && a !== void 0)
      return a;
}
function Hl(n, t, e) {
  const { min: i, max: s } = n, o = Go(t, (s - i) / 2), a = (r, l) => e && r === 0 ? 0 : r + l;
  return {
    min: a(i, -Math.abs(o)),
    max: a(s, o)
  };
}
function ce(n, t) {
  return Object.assign(Object.create(n), t);
}
function $i(n, t = [
  ""
], e, i, s = () => n[0]) {
  const o = e || n;
  typeof i > "u" && (i = ha("_fallback", n));
  const a = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: n,
    _rootScopes: o,
    _fallback: i,
    _getTarget: s,
    override: (r) => $i([
      r,
      ...n
    ], t, o, i)
  };
  return new Proxy(a, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(r, l) {
      return delete r[l], delete r._keys, delete n[0][l], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(r, l) {
      return la(r, l, () => Zl(l, t, n, r));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(r, l) {
      return Reflect.getOwnPropertyDescriptor(r._scopes[0], l);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n[0]);
    },
    /**
    * A trap for the in operator.
    */
    has(r, l) {
      return _s(r).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(r) {
      return _s(r);
    },
    /**
    * A trap for setting property values.
    */
    set(r, l, c) {
      const h = r._storage || (r._storage = s());
      return r[l] = h[l] = c, delete r._keys, !0;
    }
  });
}
function De(n, t, e, i) {
  const s = {
    _cacheable: !1,
    _proxy: n,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: ra(n, i),
    setContext: (o) => De(n, o, e, i),
    override: (o) => De(n.override(o), t, e, i)
  };
  return new Proxy(s, {
    /**
    * A trap for the delete operator.
    */
    deleteProperty(o, a) {
      return delete o[a], delete n[a], !0;
    },
    /**
    * A trap for getting property values.
    */
    get(o, a, r) {
      return la(o, a, () => Ul(o, a, r));
    },
    /**
    * A trap for Object.getOwnPropertyDescriptor.
    * Also used by Object.hasOwnProperty.
    */
    getOwnPropertyDescriptor(o, a) {
      return o._descriptors.allKeys ? Reflect.has(n, a) ? {
        enumerable: !0,
        configurable: !0
      } : void 0 : Reflect.getOwnPropertyDescriptor(n, a);
    },
    /**
    * A trap for Object.getPrototypeOf.
    */
    getPrototypeOf() {
      return Reflect.getPrototypeOf(n);
    },
    /**
    * A trap for the in operator.
    */
    has(o, a) {
      return Reflect.has(n, a);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys() {
      return Reflect.ownKeys(n);
    },
    /**
    * A trap for setting property values.
    */
    set(o, a, r) {
      return n[a] = r, delete o[a], !0;
    }
  });
}
function ra(n, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: i = t.indexable, _allKeys: s = t.allKeys } = n;
  return {
    allKeys: s,
    scriptable: e,
    indexable: i,
    isScriptable: le(e) ? e : () => e,
    isIndexable: le(i) ? i : () => i
  };
}
const $l = (n, t) => n ? n + Bi(t) : t, Ui = (n, t) => K(t) && n !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function la(n, t, e) {
  if (Object.prototype.hasOwnProperty.call(n, t) || t === "constructor")
    return n[t];
  const i = e();
  return n[t] = i, i;
}
function Ul(n, t, e) {
  const { _proxy: i, _context: s, _subProxy: o, _descriptors: a } = n;
  let r = i[t];
  return le(r) && a.isScriptable(t) && (r = Yl(t, r, n, e)), rt(r) && r.length && (r = Xl(t, r, n, a.isIndexable)), Ui(t, r) && (r = De(r, s, o && o[t], a)), r;
}
function Yl(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: a, _stack: r } = e;
  if (r.has(n))
    throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + n);
  r.add(n);
  let l = t(o, a || i);
  return r.delete(n), Ui(n, l) && (l = Yi(s._scopes, s, n, l)), l;
}
function Xl(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: a, _descriptors: r } = e;
  if (typeof o.index < "u" && i(n))
    return t[o.index % t.length];
  if (K(t[0])) {
    const l = t, c = s._scopes.filter((h) => h !== l);
    t = [];
    for (const h of l) {
      const u = Yi(c, s, n, h);
      t.push(De(u, o, a && a[n], r));
    }
  }
  return t;
}
function ca(n, t, e) {
  return le(n) ? n(t, e) : n;
}
const Gl = (n, t) => n === !0 ? t : typeof n == "string" ? re(t, n) : void 0;
function ql(n, t, e, i, s) {
  for (const o of t) {
    const a = Gl(e, o);
    if (a) {
      n.add(a);
      const r = ca(a._fallback, e, s);
      if (typeof r < "u" && r !== e && r !== i)
        return r;
    } else if (a === !1 && typeof i < "u" && e !== i)
      return null;
  }
  return !1;
}
function Yi(n, t, e, i) {
  const s = t._rootScopes, o = ca(t._fallback, e, i), a = [
    ...n,
    ...s
  ], r = /* @__PURE__ */ new Set();
  r.add(i);
  let l = xs(r, a, e, o || e, i);
  return l === null || typeof o < "u" && o !== e && (l = xs(r, a, o, l, i), l === null) ? !1 : $i(Array.from(r), [
    ""
  ], s, o, () => Kl(t, e, i));
}
function xs(n, t, e, i, s) {
  for (; e; )
    e = ql(n, t, e, i, s);
  return e;
}
function Kl(n, t, e) {
  const i = n._getTarget();
  t in i || (i[t] = {});
  const s = i[t];
  return rt(s) && K(e) ? e : s || {};
}
function Zl(n, t, e, i) {
  let s;
  for (const o of t)
    if (s = ha($l(o, n), e), typeof s < "u")
      return Ui(n, s) ? Yi(e, i, n, s) : s;
}
function ha(n, t) {
  for (const e of t) {
    if (!e)
      continue;
    const i = e[n];
    if (typeof i < "u")
      return i;
  }
}
function _s(n) {
  let t = n._keys;
  return t || (t = n._keys = Jl(n._scopes)), t;
}
function Jl(n) {
  const t = /* @__PURE__ */ new Set();
  for (const e of n)
    for (const i of Object.keys(e).filter((s) => !s.startsWith("_")))
      t.add(i);
  return Array.from(t);
}
function ua(n, t, e, i) {
  const { iScale: s } = n, { key: o = "r" } = this._parsing, a = new Array(i);
  let r, l, c, h;
  for (r = 0, l = i; r < l; ++r)
    c = r + e, h = t[c], a[r] = {
      r: s.parse(re(h, o), c)
    };
  return a;
}
const Ql = Number.EPSILON || 1e-14, Ae = (n, t) => t < n.length && !n[t].skip && n[t], da = (n) => n === "x" ? "y" : "x";
function tc(n, t, e, i) {
  const s = n.skip ? t : n, o = t, a = e.skip ? t : e, r = xi(o, s), l = xi(a, o);
  let c = r / (r + l), h = l / (r + l);
  c = isNaN(c) ? 0 : c, h = isNaN(h) ? 0 : h;
  const u = i * c, d = i * h;
  return {
    previous: {
      x: o.x - u * (a.x - s.x),
      y: o.y - u * (a.y - s.y)
    },
    next: {
      x: o.x + d * (a.x - s.x),
      y: o.y + d * (a.y - s.y)
    }
  };
}
function ec(n, t, e) {
  const i = n.length;
  let s, o, a, r, l, c = Ae(n, 0);
  for (let h = 0; h < i - 1; ++h)
    if (l = c, c = Ae(n, h + 1), !(!l || !c)) {
      if (Ke(t[h], 0, Ql)) {
        e[h] = e[h + 1] = 0;
        continue;
      }
      s = e[h] / t[h], o = e[h + 1] / t[h], r = Math.pow(s, 2) + Math.pow(o, 2), !(r <= 9) && (a = 3 / Math.sqrt(r), e[h] = s * a * t[h], e[h + 1] = o * a * t[h]);
    }
}
function nc(n, t, e = "x") {
  const i = da(e), s = n.length;
  let o, a, r, l = Ae(n, 0);
  for (let c = 0; c < s; ++c) {
    if (a = r, r = l, l = Ae(n, c + 1), !r)
      continue;
    const h = r[e], u = r[i];
    a && (o = (h - a[e]) / 3, r[`cp1${e}`] = h - o, r[`cp1${i}`] = u - o * t[c]), l && (o = (l[e] - h) / 3, r[`cp2${e}`] = h + o, r[`cp2${i}`] = u + o * t[c]);
  }
}
function ic(n, t = "x") {
  const e = da(t), i = n.length, s = Array(i).fill(0), o = Array(i);
  let a, r, l, c = Ae(n, 0);
  for (a = 0; a < i; ++a)
    if (r = l, l = c, c = Ae(n, a + 1), !!l) {
      if (c) {
        const h = c[t] - l[t];
        s[a] = h !== 0 ? (c[e] - l[e]) / h : 0;
      }
      o[a] = r ? c ? Ht(s[a - 1]) !== Ht(s[a]) ? 0 : (s[a - 1] + s[a]) / 2 : s[a - 1] : s[a];
    }
  ec(n, s, o), nc(n, o, t);
}
function wn(n, t, e) {
  return Math.max(Math.min(n, e), t);
}
function sc(n, t) {
  let e, i, s, o, a, r = Qt(n[0], t);
  for (e = 0, i = n.length; e < i; ++e)
    a = o, o = r, r = e < i - 1 && Qt(n[e + 1], t), o && (s = n[e], a && (s.cp1x = wn(s.cp1x, t.left, t.right), s.cp1y = wn(s.cp1y, t.top, t.bottom)), r && (s.cp2x = wn(s.cp2x, t.left, t.right), s.cp2y = wn(s.cp2y, t.top, t.bottom)));
}
function oc(n, t, e, i, s) {
  let o, a, r, l;
  if (t.spanGaps && (n = n.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    ic(n, s);
  else {
    let c = i ? n[n.length - 1] : n[0];
    for (o = 0, a = n.length; o < a; ++o)
      r = n[o], l = tc(c, r, n[Math.min(o + 1, a - (i ? 0 : 1)) % a], t.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, c = r;
  }
  t.capBezierPoints && sc(n, e);
}
function Xi() {
  return typeof window < "u" && typeof document < "u";
}
function Gi(n) {
  let t = n.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function zn(n, t, e) {
  let i;
  return typeof n == "string" ? (i = parseInt(n, 10), n.indexOf("%") !== -1 && (i = i / 100 * t.parentNode[e])) : i = n, i;
}
const qn = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null);
function ac(n, t) {
  return qn(n).getPropertyValue(t);
}
const rc = [
  "top",
  "right",
  "bottom",
  "left"
];
function ve(n, t, e) {
  const i = {};
  e = e ? "-" + e : "";
  for (let s = 0; s < 4; s++) {
    const o = rc[s];
    i[o] = parseFloat(n[t + "-" + o + e]) || 0;
  }
  return i.width = i.left + i.right, i.height = i.top + i.bottom, i;
}
const lc = (n, t, e) => (n > 0 || t > 0) && (!e || !e.shadowRoot);
function cc(n, t) {
  const e = n.touches, i = e && e.length ? e[0] : n, { offsetX: s, offsetY: o } = i;
  let a = !1, r, l;
  if (lc(s, o, n.target))
    r = s, l = o;
  else {
    const c = t.getBoundingClientRect();
    r = i.clientX - c.left, l = i.clientY - c.top, a = !0;
  }
  return {
    x: r,
    y: l,
    box: a
  };
}
function pe(n, t) {
  if ("native" in n)
    return n;
  const { canvas: e, currentDevicePixelRatio: i } = t, s = qn(e), o = s.boxSizing === "border-box", a = ve(s, "padding"), r = ve(s, "border", "width"), { x: l, y: c, box: h } = cc(n, e), u = a.left + (h && r.left), d = a.top + (h && r.top);
  let { width: f, height: g } = t;
  return o && (f -= a.width + r.width, g -= a.height + r.height), {
    x: Math.round((l - u) / f * e.width / i),
    y: Math.round((c - d) / g * e.height / i)
  };
}
function hc(n, t, e) {
  let i, s;
  if (t === void 0 || e === void 0) {
    const o = n && Gi(n);
    if (!o)
      t = n.clientWidth, e = n.clientHeight;
    else {
      const a = o.getBoundingClientRect(), r = qn(o), l = ve(r, "border", "width"), c = ve(r, "padding");
      t = a.width - c.width - l.width, e = a.height - c.height - l.height, i = zn(r.maxWidth, o, "clientWidth"), s = zn(r.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: i || Bn,
    maxHeight: s || Bn
  };
}
const se = (n) => Math.round(n * 10) / 10;
function uc(n, t, e, i) {
  const s = qn(n), o = ve(s, "margin"), a = zn(s.maxWidth, n, "clientWidth") || Bn, r = zn(s.maxHeight, n, "clientHeight") || Bn, l = hc(n, t, e);
  let { width: c, height: h } = l;
  if (s.boxSizing === "content-box") {
    const d = ve(s, "border", "width"), f = ve(s, "padding");
    c -= f.width + d.width, h -= f.height + d.height;
  }
  return c = Math.max(0, c - o.width), h = Math.max(0, i ? c / i : h - o.height), c = se(Math.min(c, a, l.maxWidth)), h = se(Math.min(h, r, l.maxHeight)), c && !h && (h = se(c / 2)), (t !== void 0 || e !== void 0) && i && l.height && h > l.height && (h = l.height, c = se(Math.floor(h * i))), {
    width: c,
    height: h
  };
}
function Ss(n, t, e) {
  const i = t || 1, s = se(n.height * i), o = se(n.width * i);
  n.height = se(n.height), n.width = se(n.width);
  const a = n.canvas;
  return a.style && (e || !a.style.height && !a.style.width) && (a.style.height = `${n.height}px`, a.style.width = `${n.width}px`), n.currentDevicePixelRatio !== i || a.height !== s || a.width !== o ? (n.currentDevicePixelRatio = i, a.height = s, a.width = o, n.ctx.setTransform(i, 0, 0, i, 0, 0), !0) : !1;
}
const dc = (function() {
  let n = !1;
  try {
    const t = {
      get passive() {
        return n = !0, !1;
      }
    };
    Xi() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return n;
})();
function ws(n, t) {
  const e = ac(n, t), i = e && e.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function me(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y: n.y + e * (t.y - n.y)
  };
}
function fc(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y: i === "middle" ? e < 0.5 ? n.y : t.y : i === "after" ? e < 1 ? n.y : t.y : e > 0 ? t.y : n.y
  };
}
function gc(n, t, e, i) {
  const s = {
    x: n.cp2x,
    y: n.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, a = me(n, s, e), r = me(s, o, e), l = me(o, t, e), c = me(a, r, e), h = me(r, l, e);
  return me(c, h, e);
}
const pc = function(n, t) {
  return {
    x(e) {
      return n + n + t - e;
    },
    setWidth(e) {
      t = e;
    },
    textAlign(e) {
      return e === "center" ? e : e === "right" ? "left" : "right";
    },
    xPlus(e, i) {
      return e - i;
    },
    leftForLtr(e, i) {
      return e - i;
    }
  };
}, mc = function() {
  return {
    x(n) {
      return n;
    },
    setWidth(n) {
    },
    textAlign(n) {
      return n;
    },
    xPlus(n, t) {
      return n + t;
    },
    leftForLtr(n, t) {
      return n;
    }
  };
};
function Pe(n, t, e) {
  return n ? pc(t, e) : mc();
}
function fa(n, t) {
  let e, i;
  (t === "ltr" || t === "rtl") && (e = n.canvas.style, i = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), n.prevTextDirection = i);
}
function ga(n, t) {
  t !== void 0 && (delete n.prevTextDirection, n.canvas.style.setProperty("direction", t[0], t[1]));
}
function pa(n) {
  return n === "angle" ? {
    between: nn,
    compare: bl,
    normalize: Mt
  } : {
    between: Zt,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function ks({ start: n, end: t, count: e, loop: i, style: s }) {
  return {
    start: n % e,
    end: t % e,
    loop: i && (t - n + 1) % e === 0,
    style: s
  };
}
function bc(n, t, e) {
  const { property: i, start: s, end: o } = e, { between: a, normalize: r } = pa(i), l = t.length;
  let { start: c, end: h, loop: u } = n, d, f;
  if (u) {
    for (c += l, h += l, d = 0, f = l; d < f && a(r(t[c % l][i]), s, o); ++d)
      c--, h--;
    c %= l, h %= l;
  }
  return h < c && (h += l), {
    start: c,
    end: h,
    loop: u,
    style: n.style
  };
}
function ma(n, t, e) {
  if (!e)
    return [
      n
    ];
  const { property: i, start: s, end: o } = e, a = t.length, { compare: r, between: l, normalize: c } = pa(i), { start: h, end: u, loop: d, style: f } = bc(n, t, e), g = [];
  let p = !1, m = null, b, _, P;
  const k = () => l(s, P, b) && r(s, P) !== 0, v = () => r(o, b) === 0 || l(o, P, b), C = () => p || k(), w = () => !p || v();
  for (let T = h, O = h; T <= u; ++T)
    _ = t[T % a], !_.skip && (b = c(_[i]), b !== P && (p = l(b, s, o), m === null && C() && (m = r(b, s) === 0 ? T : O), m !== null && w() && (g.push(ks({
      start: m,
      end: T,
      loop: d,
      count: a,
      style: f
    })), m = null), O = T, P = b));
  return m !== null && g.push(ks({
    start: m,
    end: u,
    loop: d,
    count: a,
    style: f
  })), g;
}
function ba(n, t) {
  const e = [], i = n.segments;
  for (let s = 0; s < i.length; s++) {
    const o = ma(i[s], n.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function yc(n, t, e, i) {
  let s = 0, o = t - 1;
  if (e && !i)
    for (; s < t && !n[s].skip; )
      s++;
  for (; s < t && n[s].skip; )
    s++;
  for (s %= t, e && (o += s); o > s && n[o % t].skip; )
    o--;
  return o %= t, {
    start: s,
    end: o
  };
}
function vc(n, t, e, i) {
  const s = n.length, o = [];
  let a = t, r = n[t], l;
  for (l = t + 1; l <= e; ++l) {
    const c = n[l % s];
    c.skip || c.stop ? r.skip || (i = !1, o.push({
      start: t % s,
      end: (l - 1) % s,
      loop: i
    }), t = a = c.stop ? l : null) : (a = l, r.skip && (t = l)), r = c;
  }
  return a !== null && o.push({
    start: t % s,
    end: a % s,
    loop: i
  }), o;
}
function xc(n, t) {
  const e = n.points, i = n.options.spanGaps, s = e.length;
  if (!s)
    return [];
  const o = !!n._loop, { start: a, end: r } = yc(e, s, o, i);
  if (i === !0)
    return Os(n, [
      {
        start: a,
        end: r,
        loop: o
      }
    ], e, t);
  const l = r < a ? r + s : r, c = !!n._fullLoop && a === 0 && r === s - 1;
  return Os(n, vc(e, a, l, c), e, t);
}
function Os(n, t, e, i) {
  return !i || !i.setContext || !e ? t : _c(n, t, e, i);
}
function _c(n, t, e, i) {
  const s = n._chart.getContext(), o = Ms(n.options), { _datasetIndex: a, options: { spanGaps: r } } = n, l = e.length, c = [];
  let h = o, u = t[0].start, d = u;
  function f(g, p, m, b) {
    const _ = r ? -1 : 1;
    if (g !== p) {
      for (g += l; e[g % l].skip; )
        g -= _;
      for (; e[p % l].skip; )
        p += _;
      g % l !== p % l && (c.push({
        start: g % l,
        end: p % l,
        loop: m,
        style: b
      }), h = b, u = p % l);
    }
  }
  for (const g of t) {
    u = r ? u : g.start;
    let p = e[u % l], m;
    for (d = u + 1; d <= g.end; d++) {
      const b = e[d % l];
      m = Ms(i.setContext(ce(s, {
        type: "segment",
        p0: p,
        p1: b,
        p0DataIndex: (d - 1) % l,
        p1DataIndex: d % l,
        datasetIndex: a
      }))), Sc(m, h) && f(u, d - 1, g.loop, h), p = b, h = m;
    }
    u < d - 1 && f(u, d - 1, g.loop, h);
  }
  return c;
}
function Ms(n) {
  return {
    backgroundColor: n.backgroundColor,
    borderCapStyle: n.borderCapStyle,
    borderDash: n.borderDash,
    borderDashOffset: n.borderDashOffset,
    borderJoinStyle: n.borderJoinStyle,
    borderWidth: n.borderWidth,
    borderColor: n.borderColor
  };
}
function Sc(n, t) {
  if (!t)
    return !1;
  const e = [], i = function(s, o) {
    return Wi(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
  };
  return JSON.stringify(n, i) !== JSON.stringify(t, i);
}
function kn(n, t, e) {
  return n.options.clip ? n[e] : t[e];
}
function wc(n, t) {
  const { xScale: e, yScale: i } = n;
  return e && i ? {
    left: kn(e, t, "left"),
    right: kn(e, t, "right"),
    top: kn(i, t, "top"),
    bottom: kn(i, t, "bottom")
  } : t;
}
function ya(n, t) {
  const e = t._clip;
  if (e.disabled)
    return !1;
  const i = wc(t, n.chartArea);
  return {
    left: e.left === !1 ? 0 : i.left - (e.left === !0 ? 0 : e.left),
    right: e.right === !1 ? n.width : i.right + (e.right === !0 ? 0 : e.right),
    top: e.top === !1 ? 0 : i.top - (e.top === !0 ? 0 : e.top),
    bottom: e.bottom === !1 ? n.height : i.bottom + (e.bottom === !0 ? 0 : e.bottom)
  };
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
class kc {
  constructor() {
    this._request = null, this._charts = /* @__PURE__ */ new Map(), this._running = !1, this._lastDate = void 0;
  }
  _notify(t, e, i, s) {
    const o = e.listeners[s], a = e.duration;
    o.forEach((r) => r({
      chart: t,
      initial: e.initial,
      numSteps: a,
      currentStep: Math.min(i - e.start, a)
    }));
  }
  _refresh() {
    this._request || (this._running = !0, this._request = ta.call(window, () => {
      this._update(), this._request = null, this._running && this._refresh();
    }));
  }
  _update(t = Date.now()) {
    let e = 0;
    this._charts.forEach((i, s) => {
      if (!i.running || !i.items.length)
        return;
      const o = i.items;
      let a = o.length - 1, r = !1, l;
      for (; a >= 0; --a)
        l = o[a], l._active ? (l._total > i.duration && (i.duration = l._total), l.tick(t), r = !0) : (o[a] = o[o.length - 1], o.pop());
      r && (s.draw(), this._notify(s, i, t, "progress")), o.length || (i.running = !1, this._notify(s, i, t, "complete"), i.initial = !1), e += o.length;
    }), this._lastDate = t, e === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const e = this._charts;
    let i = e.get(t);
    return i || (i = {
      running: !1,
      initial: !0,
      items: [],
      listeners: {
        complete: [],
        progress: []
      }
    }, e.set(t, i)), i;
  }
  listen(t, e, i) {
    this._getAnims(t).listeners[e].push(i);
  }
  add(t, e) {
    !e || !e.length || this._getAnims(t).items.push(...e);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const e = this._charts.get(t);
    e && (e.running = !0, e.start = Date.now(), e.duration = e.items.reduce((i, s) => Math.max(i, s._duration), 0), this._refresh());
  }
  running(t) {
    if (!this._running)
      return !1;
    const e = this._charts.get(t);
    return !(!e || !e.running || !e.items.length);
  }
  stop(t) {
    const e = this._charts.get(t);
    if (!e || !e.items.length)
      return;
    const i = e.items;
    let s = i.length - 1;
    for (; s >= 0; --s)
      i[s].cancel();
    e.items = [], this._notify(t, e, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Xt = /* @__PURE__ */ new kc();
const Cs = "transparent", Oc = {
  boolean(n, t, e) {
    return e > 0.5 ? t : n;
  },
  color(n, t, e) {
    const i = bs(n || Cs), s = i.valid && bs(t || Cs);
    return s && s.valid ? s.mix(i, e).hexString() : t;
  },
  number(n, t, e) {
    return n + (t - n) * e;
  }
};
class Mc {
  constructor(t, e, i, s) {
    const o = e[i];
    s = Ye([
      t.to,
      s,
      o,
      t.from
    ]);
    const a = Ye([
      t.from,
      o,
      s
    ]);
    this._active = !0, this._fn = t.fn || Oc[t.type || typeof a], this._easing = Ze[t.easing] || Ze.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = a, this._to = s, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, i) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop], o = i - this._start, a = this._duration - o;
      this._start = i, this._duration = Math.floor(Math.max(a, t.duration)), this._total += o, this._loop = !!t.loop, this._to = Ye([
        t.to,
        e,
        s,
        t.from
      ]), this._from = Ye([
        t.from,
        s,
        e
      ]);
    }
  }
  cancel() {
    this._active && (this.tick(Date.now()), this._active = !1, this._notify(!1));
  }
  tick(t) {
    const e = t - this._start, i = this._duration, s = this._prop, o = this._from, a = this._loop, r = this._to;
    let l;
    if (this._active = o !== r && (a || e < i), !this._active) {
      this._target[s] = r, this._notify(!0);
      return;
    }
    if (e < 0) {
      this._target[s] = o;
      return;
    }
    l = e / i % 2, l = a && l > 1 ? 2 - l : l, l = this._easing(Math.min(1, Math.max(0, l))), this._target[s] = this._fn(o, r, l);
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((e, i) => {
      t.push({
        res: e,
        rej: i
      });
    });
  }
  _notify(t) {
    const e = t ? "res" : "rej", i = this._promises || [];
    for (let s = 0; s < i.length; s++)
      i[s][e]();
  }
}
class va {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!K(t))
      return;
    const e = Object.keys(lt.animation), i = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!K(o))
        return;
      const a = {};
      for (const r of e)
        a[r] = o[r];
      (rt(o.properties) && o.properties || [
        s
      ]).forEach((r) => {
        (r === s || !i.has(r)) && i.set(r, a);
      });
    });
  }
  _animateOptions(t, e) {
    const i = e.options, s = Tc(t, i);
    if (!s)
      return [];
    const o = this._createAnimations(s, i);
    return i.$shared && Cc(t.options.$animations, i).then(() => {
      t.options = i;
    }, () => {
    }), o;
  }
  _createAnimations(t, e) {
    const i = this._properties, s = [], o = t.$animations || (t.$animations = {}), a = Object.keys(e), r = Date.now();
    let l;
    for (l = a.length - 1; l >= 0; --l) {
      const c = a[l];
      if (c.charAt(0) === "$")
        continue;
      if (c === "options") {
        s.push(...this._animateOptions(t, e));
        continue;
      }
      const h = e[c];
      let u = o[c];
      const d = i.get(c);
      if (u)
        if (d && u.active()) {
          u.update(d, h, r);
          continue;
        } else
          u.cancel();
      if (!d || !d.duration) {
        t[c] = h;
        continue;
      }
      o[c] = u = new Mc(d, t, c, h), s.push(u);
    }
    return s;
  }
  update(t, e) {
    if (this._properties.size === 0) {
      Object.assign(t, e);
      return;
    }
    const i = this._createAnimations(t, e);
    if (i.length)
      return Xt.add(this._chart, i), !0;
  }
}
function Cc(n, t) {
  const e = [], i = Object.keys(t);
  for (let s = 0; s < i.length; s++) {
    const o = n[i[s]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function Tc(n, t) {
  if (!t)
    return;
  let e = n.options;
  if (!e) {
    n.options = t;
    return;
  }
  return e.$shared && (n.options = e = Object.assign({}, e, {
    $shared: !1,
    $animations: {}
  })), e;
}
function Ts(n, t) {
  const e = n && n.options || {}, i = e.reverse, s = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: i ? o : s,
    end: i ? s : o
  };
}
function Pc(n, t, e) {
  if (e === !1)
    return !1;
  const i = Ts(n, e), s = Ts(t, e);
  return {
    top: s.end,
    right: i.end,
    bottom: s.start,
    left: i.start
  };
}
function Lc(n) {
  let t, e, i, s;
  return K(n) ? (t = n.top, e = n.right, i = n.bottom, s = n.left) : t = e = i = s = n, {
    top: t,
    right: e,
    bottom: i,
    left: s,
    disabled: n === !1
  };
}
function xa(n, t) {
  const e = [], i = n._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = i.length; s < o; ++s)
    e.push(i[s].index);
  return e;
}
function Ps(n, t, e, i = {}) {
  const s = n.keys, o = i.mode === "single";
  let a, r, l, c;
  if (t === null)
    return;
  let h = !1;
  for (a = 0, r = s.length; a < r; ++a) {
    if (l = +s[a], l === e) {
      if (h = !0, i.all)
        continue;
      break;
    }
    c = n.values[l], ft(c) && (o || t === 0 || Ht(t) === Ht(c)) && (t += c);
  }
  return !h && !i.all ? 0 : t;
}
function Dc(n, t) {
  const { iScale: e, vScale: i } = t, s = e.axis === "x" ? "x" : "y", o = i.axis === "x" ? "x" : "y", a = Object.keys(n), r = new Array(a.length);
  let l, c, h;
  for (l = 0, c = a.length; l < c; ++l)
    h = a[l], r[l] = {
      [s]: h,
      [o]: n[h]
    };
  return r;
}
function ri(n, t) {
  const e = n && n.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function Ac(n, t, e) {
  return `${n.id}.${t.id}.${e.stack || e.type}`;
}
function Rc(n) {
  const { min: t, max: e, minDefined: i, maxDefined: s } = n.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: s ? e : Number.POSITIVE_INFINITY
  };
}
function Ec(n, t, e) {
  const i = n[t] || (n[t] = {});
  return i[e] || (i[e] = {});
}
function Ls(n, t, e, i) {
  for (const s of t.getMatchingVisibleMetas(i).reverse()) {
    const o = n[s.index];
    if (e && o > 0 || !e && o < 0)
      return s.index;
  }
  return null;
}
function Ds(n, t) {
  const { chart: e, _cachedMeta: i } = n, s = e._stacks || (e._stacks = {}), { iScale: o, vScale: a, index: r } = i, l = o.axis, c = a.axis, h = Ac(o, a, i), u = t.length;
  let d;
  for (let f = 0; f < u; ++f) {
    const g = t[f], { [l]: p, [c]: m } = g, b = g._stacks || (g._stacks = {});
    d = b[c] = Ec(s, h, p), d[r] = m, d._top = Ls(d, a, !0, i.type), d._bottom = Ls(d, a, !1, i.type);
    const _ = d._visualValues || (d._visualValues = {});
    _[r] = m;
  }
}
function li(n, t) {
  const e = n.scales;
  return Object.keys(e).filter((i) => e[i].axis === t).shift();
}
function Ic(n, t) {
  return ce(n, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Vc(n, t, e) {
  return ce(n, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: e,
    index: t,
    mode: "default",
    type: "data"
  });
}
function Ne(n, t) {
  const e = n.controller.index, i = n.vScale && n.vScale.axis;
  if (i) {
    t = t || n._parsed;
    for (const s of t) {
      const o = s._stacks;
      if (!o || o[i] === void 0 || o[i][e] === void 0)
        return;
      delete o[i][e], o[i]._visualValues !== void 0 && o[i]._visualValues[e] !== void 0 && delete o[i]._visualValues[e];
    }
  }
}
const ci = (n) => n === "reset" || n === "none", As = (n, t) => t ? n : Object.assign({}, n), Fc = (n, t, e) => n && !t.hidden && t._stacked && {
  keys: xa(e, !0),
  values: null
};
class he {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = ri(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Ne(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, i = this.getDataset(), s = (u, d, f, g) => u === "x" ? d : u === "r" ? g : f, o = e.xAxisID = U(i.xAxisID, li(t, "x")), a = e.yAxisID = U(i.yAxisID, li(t, "y")), r = e.rAxisID = U(i.rAxisID, li(t, "r")), l = e.indexAxis, c = e.iAxisID = s(l, o, a, r), h = e.vAxisID = s(l, a, o, r);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(a), e.rScale = this.getScaleForId(r), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(h);
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const e = this._cachedMeta;
    return t === e.iScale ? e.vScale : e.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && gs(this._data, this), t._stacked && Ne(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), i = this._data;
    if (K(e)) {
      const s = this._cachedMeta;
      this._data = Dc(e, s);
    } else if (i !== e) {
      if (i) {
        gs(i, this);
        const s = this._cachedMeta;
        Ne(s), s._parsed = [];
      }
      e && Object.isExtensible(e) && _l(e, this), this._syncList = [], this._data = e;
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(), this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const e = this._cachedMeta, i = this.getDataset();
    let s = !1;
    this._dataCheck();
    const o = e._stacked;
    e._stacked = ri(e.vScale, e), e.stack !== i.stack && (s = !0, Ne(e), e.stack = i.stack), this._resyncElements(t), (s || o !== e._stacked) && (Ds(this, e._parsed), e._stacked = ri(e.vScale, e));
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), i = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: i, _data: s } = this, { iScale: o, _stacked: a } = i, r = o.axis;
    let l = t === 0 && e === s.length ? !0 : i._sorted, c = t > 0 && i._parsed[t - 1], h, u, d;
    if (this._parsing === !1)
      i._parsed = s, i._sorted = !0, d = s;
    else {
      rt(s[t]) ? d = this.parseArrayData(i, s, t, e) : K(s[t]) ? d = this.parseObjectData(i, s, t, e) : d = this.parsePrimitiveData(i, s, t, e);
      const f = () => u[r] === null || c && u[r] < c[r];
      for (h = 0; h < e; ++h)
        i._parsed[h + t] = u = d[h], l && (f() && (l = !1), c = u);
      i._sorted = l;
    }
    a && Ds(this, d);
  }
  parsePrimitiveData(t, e, i, s) {
    const { iScale: o, vScale: a } = t, r = o.axis, l = a.axis, c = o.getLabels(), h = o === a, u = new Array(s);
    let d, f, g;
    for (d = 0, f = s; d < f; ++d)
      g = d + i, u[d] = {
        [r]: h || o.parse(c[g], g),
        [l]: a.parse(e[g], g)
      };
    return u;
  }
  parseArrayData(t, e, i, s) {
    const { xScale: o, yScale: a } = t, r = new Array(s);
    let l, c, h, u;
    for (l = 0, c = s; l < c; ++l)
      h = l + i, u = e[h], r[l] = {
        x: o.parse(u[0], h),
        y: a.parse(u[1], h)
      };
    return r;
  }
  parseObjectData(t, e, i, s) {
    const { xScale: o, yScale: a } = t, { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(s);
    let h, u, d, f;
    for (h = 0, u = s; h < u; ++h)
      d = h + i, f = e[d], c[h] = {
        x: o.parse(re(f, r), d),
        y: a.parse(re(f, l), d)
      };
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, e, i) {
    const s = this.chart, o = this._cachedMeta, a = e[t.axis], r = {
      keys: xa(s, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Ps(r, a, o.index, {
      mode: i
    });
  }
  updateRangeFromParsed(t, e, i, s) {
    const o = i[e.axis];
    let a = o === null ? NaN : o;
    const r = s && i._stacks[e.axis];
    s && r && (s.values = r, a = Ps(s, o, this._cachedMeta.index)), t.min = Math.min(t.min, a), t.max = Math.max(t.max, a);
  }
  getMinMax(t, e) {
    const i = this._cachedMeta, s = i._parsed, o = i._sorted && t === i.iScale, a = s.length, r = this._getOtherScale(t), l = Fc(e, i, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: h, max: u } = Rc(r);
    let d, f;
    function g() {
      f = s[d];
      const p = f[r.axis];
      return !ft(f[t.axis]) || h > p || u < p;
    }
    for (d = 0; d < a && !(!g() && (this.updateRangeFromParsed(c, t, f, l), o)); ++d)
      ;
    if (o) {
      for (d = a - 1; d >= 0; --d)
        if (!g()) {
          this.updateRangeFromParsed(c, t, f, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const e = this._cachedMeta._parsed, i = [];
    let s, o, a;
    for (s = 0, o = e.length; s < o; ++s)
      a = e[s][t.axis], ft(a) && i.push(a);
    return i;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = e.iScale, s = e.vScale, o = this.getParsed(t);
    return {
      label: i ? "" + i.getLabelForValue(o[i.axis]) : "",
      value: s ? "" + s.getLabelForValue(o[s.axis]) : ""
    };
  }
  _update(t) {
    const e = this._cachedMeta;
    this.update(t || "default"), e._clip = Lc(U(this.options.clip, Pc(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, i = this._cachedMeta, s = i.data || [], o = e.chartArea, a = [], r = this._drawStart || 0, l = this._drawCount || s.length - r, c = this.options.drawActiveElementsOnTop;
    let h;
    for (i.dataset && i.dataset.draw(t, o, r, l), h = r; h < r + l; ++h) {
      const u = s[h];
      u.hidden || (u.active && c ? a.push(u) : u.draw(t, o));
    }
    for (h = 0; h < a.length; ++h)
      a[h].draw(t, o);
  }
  getStyle(t, e) {
    const i = e ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(i) : this.resolveDataElementOptions(t || 0, i);
  }
  getContext(t, e, i) {
    const s = this.getDataset();
    let o;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const a = this._cachedMeta.data[t];
      o = a.$context || (a.$context = Vc(this.getContext(), t, a)), o.parsed = this.getParsed(t), o.raw = s.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = Ic(this.chart.getContext(), this.index)), o.dataset = s, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = i, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", i) {
    const s = e === "active", o = this._cachedDataOpts, a = t + "-" + e, r = o[a], l = this.enableOptionSharing && en(i);
    if (r)
      return As(r, l);
    const c = this.chart.config, h = c.datasetElementScopeKeys(this._type, t), u = s ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], d = c.getOptionScopes(this.getDataset(), h), f = Object.keys(lt.elements[t]), g = () => this.getContext(i, s, e), p = c.resolveNamedOptions(d, f, g, u);
    return p.$shared && (p.$shared = l, o[a] = Object.freeze(As(p, l))), p;
  }
  _resolveAnimations(t, e, i) {
    const s = this.chart, o = this._cachedDataOpts, a = `animation-${e}`, r = o[a];
    if (r)
      return r;
    let l;
    if (s.options.animation !== !1) {
      const h = this.chart.config, u = h.datasetAnimationScopeKeys(this._type, e), d = h.getOptionScopes(this.getDataset(), u);
      l = h.createResolver(d, this.getContext(t, i, e));
    }
    const c = new va(s, l && l.animations);
    return l && l._cacheable && (o[a] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || ci(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const i = this.resolveDataElementOptions(t, e), s = this._sharedOptions, o = this.getSharedOptions(i), a = this.includeOptions(e, o) || o !== s;
    return this.updateSharedOptions(o, e, i), {
      sharedOptions: o,
      includeOptions: a
    };
  }
  updateElement(t, e, i, s) {
    ci(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
  }
  updateSharedOptions(t, e, i) {
    t && !ci(e) && this._resolveAnimations(void 0, e).update(t, i);
  }
  _setStyle(t, e, i, s) {
    t.active = s;
    const o = this.getStyle(e, s);
    this._resolveAnimations(e, i, s).update(t, {
      options: !s && this.getSharedOptions(o) || o
    });
  }
  removeHoverStyle(t, e, i) {
    this._setStyle(t, i, "active", !1);
  }
  setHoverStyle(t, e, i) {
    this._setStyle(t, i, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const e = this._data, i = this._cachedMeta.data;
    for (const [r, l, c] of this._syncList)
      this[r](l, c);
    this._syncList = [];
    const s = i.length, o = e.length, a = Math.min(o, s);
    a && this.parse(0, a), o > s ? this._insertElements(s, o - s, t) : o < s && this._removeElements(o, s - o);
  }
  _insertElements(t, e, i = !0) {
    const s = this._cachedMeta, o = s.data, a = t + e;
    let r;
    const l = (c) => {
      for (c.length += e, r = c.length - 1; r >= a; r--)
        c[r] = c[r - e];
    };
    for (l(o), r = t; r < a; ++r)
      o[r] = new this.dataElementType();
    this._parsing && l(s._parsed), this.parse(t, e), i && this.updateElements(o, t, e, "reset");
  }
  updateElements(t, e, i, s) {
  }
  _removeElements(t, e) {
    const i = this._cachedMeta;
    if (this._parsing) {
      const s = i._parsed.splice(t, e);
      i._stacked && Ne(i, s);
    }
    i.data.splice(t, e);
  }
  _sync(t) {
    if (this._parsing)
      this._syncList.push(t);
    else {
      const [e, i, s] = t;
      this[e](i, s);
    }
    this.chart._dataChanges.push([
      this.index,
      ...t
    ]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync([
      "_insertElements",
      this.getDataset().data.length - t,
      t
    ]);
  }
  _onDataPop() {
    this._sync([
      "_removeElements",
      this._cachedMeta.data.length - 1,
      1
    ]);
  }
  _onDataShift() {
    this._sync([
      "_removeElements",
      0,
      1
    ]);
  }
  _onDataSplice(t, e) {
    e && this._sync([
      "_removeElements",
      t,
      e
    ]);
    const i = arguments.length - 2;
    i && this._sync([
      "_insertElements",
      t,
      i
    ]);
  }
  _onDataUnshift() {
    this._sync([
      "_insertElements",
      0,
      arguments.length
    ]);
  }
}
function Bc(n, t) {
  if (!n._cache.$bar) {
    const e = n.getMatchingVisibleMetas(t);
    let i = [];
    for (let s = 0, o = e.length; s < o; s++)
      i = i.concat(e[s].controller.getAllParsedValues(n));
    n._cache.$bar = Qo(i.sort((s, o) => s - o));
  }
  return n._cache.$bar;
}
function Nc(n) {
  const t = n.iScale, e = Bc(t, n.type);
  let i = t._length, s, o, a, r;
  const l = () => {
    a === 32767 || a === -32768 || (en(r) && (i = Math.min(i, Math.abs(a - r) || i)), r = a);
  };
  for (s = 0, o = e.length; s < o; ++s)
    a = t.getPixelForValue(e[s]), l();
  for (r = void 0, s = 0, o = t.ticks.length; s < o; ++s)
    a = t.getPixelForTick(s), l();
  return i;
}
function zc(n, t, e, i) {
  const s = e.barThickness;
  let o, a;
  return G(s) ? (o = t.min * e.categoryPercentage, a = e.barPercentage) : (o = s * i, a = 1), {
    chunk: o / i,
    ratio: a,
    start: t.pixels[n] - o / 2
  };
}
function jc(n, t, e, i) {
  const s = t.pixels, o = s[n];
  let a = n > 0 ? s[n - 1] : null, r = n < s.length - 1 ? s[n + 1] : null;
  const l = e.categoryPercentage;
  a === null && (a = o - (r === null ? t.end - t.start : r - o)), r === null && (r = o + o - a);
  const c = o - (o - Math.min(a, r)) / 2 * l;
  return {
    chunk: Math.abs(r - a) / 2 * l / i,
    ratio: e.barPercentage,
    start: c
  };
}
function Wc(n, t, e, i) {
  const s = e.parse(n[0], i), o = e.parse(n[1], i), a = Math.min(s, o), r = Math.max(s, o);
  let l = a, c = r;
  Math.abs(a) > Math.abs(r) && (l = r, c = a), t[e.axis] = c, t._custom = {
    barStart: l,
    barEnd: c,
    start: s,
    end: o,
    min: a,
    max: r
  };
}
function _a(n, t, e, i) {
  return rt(n) ? Wc(n, t, e, i) : t[e.axis] = e.parse(n, i), t;
}
function Rs(n, t, e, i) {
  const s = n.iScale, o = n.vScale, a = s.getLabels(), r = s === o, l = [];
  let c, h, u, d;
  for (c = e, h = e + i; c < h; ++c)
    d = t[c], u = {}, u[s.axis] = r || s.parse(a[c], c), l.push(_a(d, u, o, c));
  return l;
}
function hi(n) {
  return n && n.barStart !== void 0 && n.barEnd !== void 0;
}
function Hc(n, t, e) {
  return n !== 0 ? Ht(n) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function $c(n) {
  let t, e, i, s, o;
  return n.horizontal ? (t = n.base > n.x, e = "left", i = "right") : (t = n.base < n.y, e = "bottom", i = "top"), t ? (s = "end", o = "start") : (s = "start", o = "end"), {
    start: e,
    end: i,
    reverse: t,
    top: s,
    bottom: o
  };
}
function Uc(n, t, e, i) {
  let s = t.borderSkipped;
  const o = {};
  if (!s) {
    n.borderSkipped = o;
    return;
  }
  if (s === !0) {
    n.borderSkipped = {
      top: !0,
      right: !0,
      bottom: !0,
      left: !0
    };
    return;
  }
  const { start: a, end: r, reverse: l, top: c, bottom: h } = $c(n);
  s === "middle" && e && (n.enableBorderRadius = !0, (e._top || 0) === i ? s = c : (e._bottom || 0) === i ? s = h : (o[Es(h, a, r, l)] = !0, s = c)), o[Es(s, a, r, l)] = !0, n.borderSkipped = o;
}
function Es(n, t, e, i) {
  return i ? (n = Yc(n, t, e), n = Is(n, e, t)) : n = Is(n, t, e), n;
}
function Yc(n, t, e) {
  return n === t ? e : n === e ? t : n;
}
function Is(n, t, e) {
  return n === "start" ? t : n === "end" ? e : n;
}
function Xc(n, { inflateAmount: t }, e) {
  n.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class Gc extends he {
  static id = "bar";
  static defaults = {
    datasetElementType: !1,
    dataElementType: "bar",
    categoryPercentage: 0.8,
    barPercentage: 0.9,
    grouped: !0,
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "base",
          "width",
          "height"
        ]
      }
    }
  };
  static overrides = {
    scales: {
      _index_: {
        type: "category",
        offset: !0,
        grid: {
          offset: !0
        }
      },
      _value_: {
        type: "linear",
        beginAtZero: !0
      }
    }
  };
  parsePrimitiveData(t, e, i, s) {
    return Rs(t, e, i, s);
  }
  parseArrayData(t, e, i, s) {
    return Rs(t, e, i, s);
  }
  parseObjectData(t, e, i, s) {
    const { iScale: o, vScale: a } = t, { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? r : l, h = a.axis === "x" ? r : l, u = [];
    let d, f, g, p;
    for (d = i, f = i + s; d < f; ++d)
      p = e[d], g = {}, g[o.axis] = o.parse(re(p, c), d), u.push(_a(re(p, h), g, a, d));
    return u;
  }
  updateRangeFromParsed(t, e, i, s) {
    super.updateRangeFromParsed(t, e, i, s);
    const o = i._custom;
    o && e === this._cachedMeta.vScale && (t.min = Math.min(t.min, o.min), t.max = Math.max(t.max, o.max));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, { iScale: i, vScale: s } = e, o = this.getParsed(t), a = o._custom, r = hi(a) ? "[" + a.start + ", " + a.end + "]" : "" + s.getLabelForValue(o[s.axis]);
    return {
      label: "" + i.getLabelForValue(o[i.axis]),
      value: r
    };
  }
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const e = this._cachedMeta;
    this.updateElements(e.data, 0, e.data.length, t);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", { index: a, _cachedMeta: { vScale: r } } = this, l = r.getBasePixel(), c = r.isHorizontal(), h = this._getRuler(), { sharedOptions: u, includeOptions: d } = this._getSharedOptions(e, s);
    for (let f = e; f < e + i; f++) {
      const g = this.getParsed(f), p = o || G(g[r.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, h), b = (g._stacks || {})[r.axis], _ = {
        horizontal: c,
        base: p.base,
        enableBorderRadius: !b || hi(g._custom) || a === b._top || a === b._bottom,
        x: c ? p.head : m.center,
        y: c ? m.center : p.head,
        height: c ? m.size : Math.abs(p.size),
        width: c ? Math.abs(p.size) : m.size
      };
      d && (_.options = u || this.resolveDataElementOptions(f, t[f].active ? "active" : s));
      const P = _.options || t[f].options;
      Uc(_, P, b, a), Xc(_, P, h.ratio), this.updateElement(t[f], f, _, s);
    }
  }
  _getStacks(t, e) {
    const { iScale: i } = this._cachedMeta, s = i.getMatchingVisibleMetas(this._type).filter((h) => h.controller.options.grouped), o = i.options.stacked, a = [], r = this._cachedMeta.controller.getParsed(e), l = r && r[i.axis], c = (h) => {
      const u = h._parsed.find((f) => f[i.axis] === l), d = u && u[h.vScale.axis];
      if (G(d) || isNaN(d))
        return !0;
    };
    for (const h of s)
      if (!(e !== void 0 && c(h)) && ((o === !1 || a.indexOf(h.stack) === -1 || o === void 0 && h.stack === void 0) && a.push(h.stack), h.index === t))
        break;
    return a.length || a.push(void 0), a;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getAxisCount() {
    return this._getAxis().length;
  }
  getFirstScaleIdForIndexAxis() {
    const t = this.chart.scales, e = this.chart.options.indexAxis;
    return Object.keys(t).filter((i) => t[i].axis === e).shift();
  }
  _getAxis() {
    const t = {}, e = this.getFirstScaleIdForIndexAxis();
    for (const i of this.chart.data.datasets)
      t[U(this.chart.options.indexAxis === "x" ? i.xAxisID : i.yAxisID, e)] = !0;
    return Object.keys(t);
  }
  _getStackIndex(t, e, i) {
    const s = this._getStacks(t, i), o = e !== void 0 ? s.indexOf(e) : -1;
    return o === -1 ? s.length - 1 : o;
  }
  _getRuler() {
    const t = this.options, e = this._cachedMeta, i = e.iScale, s = [];
    let o, a;
    for (o = 0, a = e.data.length; o < a; ++o)
      s.push(i.getPixelForValue(this.getParsed(o)[i.axis], o));
    const r = t.barThickness;
    return {
      min: r || Nc(e),
      pixels: s,
      start: i._startPixel,
      end: i._endPixel,
      stackCount: this._getStackCount(),
      scale: i,
      grouped: t.grouped,
      ratio: r ? 1 : t.categoryPercentage * t.barPercentage
    };
  }
  _calculateBarValuePixels(t) {
    const { _cachedMeta: { vScale: e, _stacked: i, index: s }, options: { base: o, minBarLength: a } } = this, r = o || 0, l = this.getParsed(t), c = l._custom, h = hi(c);
    let u = l[e.axis], d = 0, f = i ? this.applyStack(e, l, i) : u, g, p;
    f !== u && (d = f - u, f = u), h && (u = c.barStart, f = c.barEnd - c.barStart, u !== 0 && Ht(u) !== Ht(c.barEnd) && (d = 0), d += u);
    const m = !G(o) && !h ? o : d;
    let b = e.getPixelForValue(m);
    if (this.chart.getDataVisibility(t) ? g = e.getPixelForValue(d + f) : g = b, p = g - b, Math.abs(p) < a) {
      p = Hc(p, e, r) * a, u === r && (b -= p / 2);
      const _ = e.getPixelForDecimal(0), P = e.getPixelForDecimal(1), k = Math.min(_, P), v = Math.max(_, P);
      b = Math.max(Math.min(b, v), k), g = b + p, i && !h && (l._stacks[e.axis]._visualValues[s] = e.getValueForPixel(g) - e.getValueForPixel(b));
    }
    if (b === e.getPixelForValue(r)) {
      const _ = Ht(p) * e.getLineWidthForValue(r) / 2;
      b += _, p -= _;
    }
    return {
      size: p,
      base: b,
      head: g,
      center: g + p / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const i = e.scale, s = this.options, o = s.skipNull, a = U(s.maxBarThickness, 1 / 0);
    let r, l;
    const c = this._getAxisCount();
    if (e.grouped) {
      const h = o ? this._getStackCount(t) : e.stackCount, u = s.barThickness === "flex" ? jc(t, e, s, h * c) : zc(t, e, s, h * c), d = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, f = this._getAxis().indexOf(U(d, this.getFirstScaleIdForIndexAxis())), g = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0) + f;
      r = u.start + u.chunk * g + u.chunk / 2, l = Math.min(a, u.chunk * u.ratio);
    } else
      r = i.getPixelForValue(this.getParsed(t)[i.axis], t), l = Math.min(a, e.min * e.ratio);
    return {
      base: r - l / 2,
      head: r + l / 2,
      center: r,
      size: l
    };
  }
  draw() {
    const t = this._cachedMeta, e = t.vScale, i = t.data, s = i.length;
    let o = 0;
    for (; o < s; ++o)
      this.getParsed(o)[e.axis] !== null && !i[o].hidden && i[o].draw(this._ctx);
  }
}
class qc extends he {
  static id = "bubble";
  static defaults = {
    datasetElementType: !1,
    dataElementType: "point",
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "borderWidth",
          "radius"
        ]
      }
    }
  };
  static overrides = {
    scales: {
      x: {
        type: "linear"
      },
      y: {
        type: "linear"
      }
    }
  };
  initialize() {
    this.enableOptionSharing = !0, super.initialize();
  }
  parsePrimitiveData(t, e, i, s) {
    const o = super.parsePrimitiveData(t, e, i, s);
    for (let a = 0; a < o.length; a++)
      o[a]._custom = this.resolveDataElementOptions(a + i).radius;
    return o;
  }
  parseArrayData(t, e, i, s) {
    const o = super.parseArrayData(t, e, i, s);
    for (let a = 0; a < o.length; a++) {
      const r = e[i + a];
      o[a]._custom = U(r[2], this.resolveDataElementOptions(a + i).radius);
    }
    return o;
  }
  parseObjectData(t, e, i, s) {
    const o = super.parseObjectData(t, e, i, s);
    for (let a = 0; a < o.length; a++) {
      const r = e[i + a];
      o[a]._custom = U(r && r.r && +r.r, this.resolveDataElementOptions(a + i).radius);
    }
    return o;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let e = 0;
    for (let i = t.length - 1; i >= 0; --i)
      e = Math.max(e, t[i].size(this.resolveDataElementOptions(i)) / 2);
    return e > 0 && e;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart.data.labels || [], { xScale: s, yScale: o } = e, a = this.getParsed(t), r = s.getLabelForValue(a.x), l = o.getLabelForValue(a.y), c = a._custom;
    return {
      label: i[t] || "",
      value: "(" + r + ", " + l + (c ? ", " + c : "") + ")"
    };
  }
  update(t) {
    const e = this._cachedMeta.data;
    this.updateElements(e, 0, e.length, t);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", { iScale: a, vScale: r } = this._cachedMeta, { sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, s), h = a.axis, u = r.axis;
    for (let d = e; d < e + i; d++) {
      const f = t[d], g = !o && this.getParsed(d), p = {}, m = p[h] = o ? a.getPixelForDecimal(0.5) : a.getPixelForValue(g[h]), b = p[u] = o ? r.getBasePixel() : r.getPixelForValue(g[u]);
      p.skip = isNaN(m) || isNaN(b), c && (p.options = l || this.resolveDataElementOptions(d, f.active ? "active" : s), o && (p.options.radius = 0)), this.updateElement(f, d, p, s);
    }
  }
  resolveDataElementOptions(t, e) {
    const i = this.getParsed(t);
    let s = super.resolveDataElementOptions(t, e);
    s.$shared && (s = Object.assign({}, s, {
      $shared: !1
    }));
    const o = s.radius;
    return e !== "active" && (s.radius = 0), s.radius += U(i && i._custom, o), s;
  }
}
function Kc(n, t, e) {
  let i = 1, s = 1, o = 0, a = 0;
  if (t < at) {
    const r = n, l = r + t, c = Math.cos(r), h = Math.sin(r), u = Math.cos(l), d = Math.sin(l), f = (P, k, v) => nn(P, r, l, !0) ? 1 : Math.max(k, k * e, v, v * e), g = (P, k, v) => nn(P, r, l, !0) ? -1 : Math.min(k, k * e, v, v * e), p = f(0, c, u), m = f(bt, h, d), b = g(J, c, u), _ = g(J + bt, h, d);
    i = (p - b) / 2, s = (m - _) / 2, o = -(p + b) / 2, a = -(m + _) / 2;
  }
  return {
    ratioX: i,
    ratioY: s,
    offsetX: o,
    offsetY: a
  };
}
class qi extends he {
  static id = "doughnut";
  static defaults = {
    datasetElementType: !1,
    dataElementType: "arc",
    animation: {
      animateRotate: !0,
      animateScale: !1
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "circumference",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "startAngle",
          "x",
          "y",
          "offset",
          "borderWidth",
          "spacing"
        ]
      }
    },
    cutout: "50%",
    rotation: 0,
    circumference: 360,
    radius: "100%",
    spacing: 0,
    indexAxis: "r"
  };
  static descriptors = {
    _scriptable: (t) => t !== "spacing",
    _indexable: (t) => t !== "spacing" && !t.startsWith("borderDash") && !t.startsWith("hoverBorderDash")
  };
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data, { labels: { pointStyle: i, textAlign: s, color: o, useBorderRadius: a, borderRadius: r } } = t.legend.options;
            return e.labels.length && e.datasets.length ? e.labels.map((l, c) => {
              const u = t.getDatasetMeta(0).controller.getStyle(c);
              return {
                text: l,
                fillStyle: u.backgroundColor,
                fontColor: o,
                hidden: !t.getDataVisibility(c),
                lineDash: u.borderDash,
                lineDashOffset: u.borderDashOffset,
                lineJoin: u.borderJoinStyle,
                lineWidth: u.borderWidth,
                strokeStyle: u.borderColor,
                textAlign: s,
                pointStyle: i,
                borderRadius: a && (r || u.borderRadius),
                index: c
              };
            }) : [];
          }
        },
        onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        }
      }
    }
  };
  constructor(t, e) {
    super(t, e), this.enableOptionSharing = !0, this.innerRadius = void 0, this.outerRadius = void 0, this.offsetX = void 0, this.offsetY = void 0;
  }
  linkScales() {
  }
  parse(t, e) {
    const i = this.getDataset().data, s = this._cachedMeta;
    if (this._parsing === !1)
      s._parsed = i;
    else {
      let o = (l) => +i[l];
      if (K(i[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +re(i[c], l);
      }
      let a, r;
      for (a = t, r = t + e; a < r; ++a)
        s._parsed[a] = o(a);
    }
  }
  _getRotation() {
    return Nt(this.options.rotation - 90);
  }
  _getCircumference() {
    return Nt(this.options.circumference);
  }
  _getRotationExtents() {
    let t = at, e = -at;
    for (let i = 0; i < this.chart.data.datasets.length; ++i)
      if (this.chart.isDatasetVisible(i) && this.chart.getDatasetMeta(i).type === this._type) {
        const s = this.chart.getDatasetMeta(i).controller, o = s._getRotation(), a = s._getCircumference();
        t = Math.min(t, o), e = Math.max(e, o + a);
      }
    return {
      rotation: t,
      circumference: e - t
    };
  }
  update(t) {
    const e = this.chart, { chartArea: i } = e, s = this._cachedMeta, o = s.data, a = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, r = Math.max((Math.min(i.width, i.height) - a) / 2, 0), l = Math.min(al(this.options.cutout, r), 1), c = this._getRingWeight(this.index), { circumference: h, rotation: u } = this._getRotationExtents(), { ratioX: d, ratioY: f, offsetX: g, offsetY: p } = Kc(u, h, l), m = (i.width - a) / d, b = (i.height - a) / f, _ = Math.max(Math.min(m, b) / 2, 0), P = Go(this.options.radius, _), k = Math.max(P * l, 0), v = (P - k) / this._getVisibleDatasetWeightTotal();
    this.offsetX = g * P, this.offsetY = p * P, s.total = this.calculateTotal(), this.outerRadius = P - v * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - v * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const i = this.options, s = this._cachedMeta, o = this._getCircumference();
    return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || s._parsed[t] === null || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * o / at);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", a = this.chart, r = a.chartArea, c = a.options.animation, h = (r.left + r.right) / 2, u = (r.top + r.bottom) / 2, d = o && c.animateScale, f = d ? 0 : this.innerRadius, g = d ? 0 : this.outerRadius, { sharedOptions: p, includeOptions: m } = this._getSharedOptions(e, s);
    let b = this._getRotation(), _;
    for (_ = 0; _ < e; ++_)
      b += this._circumference(_, o);
    for (_ = e; _ < e + i; ++_) {
      const P = this._circumference(_, o), k = t[_], v = {
        x: h + this.offsetX,
        y: u + this.offsetY,
        startAngle: b,
        endAngle: b + P,
        circumference: P,
        outerRadius: g,
        innerRadius: f
      };
      m && (v.options = p || this.resolveDataElementOptions(_, k.active ? "active" : s)), b += P, this.updateElement(k, _, v, s);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta, e = t.data;
    let i = 0, s;
    for (s = 0; s < e.length; s++) {
      const o = t._parsed[s];
      o !== null && !isNaN(o) && this.chart.getDataVisibility(s) && !e[s].hidden && (i += Math.abs(o));
    }
    return i;
  }
  calculateCircumference(t) {
    const e = this._cachedMeta.total;
    return e > 0 && !isNaN(t) ? at * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = hn(e._parsed[t], i.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  getMaxBorderWidth(t) {
    let e = 0;
    const i = this.chart;
    let s, o, a, r, l;
    if (!t) {
      for (s = 0, o = i.data.datasets.length; s < o; ++s)
        if (i.isDatasetVisible(s)) {
          a = i.getDatasetMeta(s), t = a.data, r = a.controller;
          break;
        }
    }
    if (!t)
      return 0;
    for (s = 0, o = t.length; s < o; ++s)
      l = r.resolveDataElementOptions(s), l.borderAlign !== "inner" && (e = Math.max(e, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return e;
  }
  getMaxOffset(t) {
    let e = 0;
    for (let i = 0, s = t.length; i < s; ++i) {
      const o = this.resolveDataElementOptions(i);
      e = Math.max(e, o.offset || 0, o.hoverOffset || 0);
    }
    return e;
  }
  _getRingWeightOffset(t) {
    let e = 0;
    for (let i = 0; i < t; ++i)
      this.chart.isDatasetVisible(i) && (e += this._getRingWeight(i));
    return e;
  }
  _getRingWeight(t) {
    return Math.max(U(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
class Zc extends he {
  static id = "line";
  static defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    showLine: !0,
    spanGaps: !1
  };
  static overrides = {
    scales: {
      _index_: {
        type: "category"
      },
      _value_: {
        type: "linear"
      }
    }
  };
  initialize() {
    this.enableOptionSharing = !0, this.supportsDecimation = !0, super.initialize();
  }
  update(t) {
    const e = this._cachedMeta, { dataset: i, data: s = [], _dataset: o } = e, a = this.chart._animationsDisabled;
    let { start: r, count: l } = na(e, s, a);
    this._drawStart = r, this._drawCount = l, ia(e) && (r = 0, l = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!o._decimated, i.points = s;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(i, void 0, {
      animated: !a,
      options: c
    }, t), this.updateElements(s, r, l, t);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", { iScale: a, vScale: r, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: h, includeOptions: u } = this._getSharedOptions(e, s), d = a.axis, f = r.axis, { spanGaps: g, segment: p } = this.options, m = Le(g) ? g : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || s === "none", _ = e + i, P = t.length;
    let k = e > 0 && this.getParsed(e - 1);
    for (let v = 0; v < P; ++v) {
      const C = t[v], w = b ? C : {};
      if (v < e || v >= _) {
        w.skip = !0;
        continue;
      }
      const T = this.getParsed(v), O = G(T[f]), A = w[d] = a.getPixelForValue(T[d], v), B = w[f] = o || O ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, T, l) : T[f], v);
      w.skip = isNaN(A) || isNaN(B) || O, w.stop = v > 0 && Math.abs(T[d] - k[d]) > m, p && (w.parsed = T, w.raw = c.data[v]), u && (w.options = h || this.resolveDataElementOptions(v, C.active ? "active" : s)), b || this.updateElement(C, v, w, s), k = T;
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.dataset, i = e.options && e.options.borderWidth || 0, s = t.data || [];
    if (!s.length)
      return i;
    const o = s[0].size(this.resolveDataElementOptions(0)), a = s[s.length - 1].size(this.resolveDataElementOptions(s.length - 1));
    return Math.max(i, o, a) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis), super.draw();
  }
}
class Sa extends he {
  static id = "polarArea";
  static defaults = {
    dataElementType: "arc",
    animation: {
      animateRotate: !0,
      animateScale: !0
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius"
        ]
      }
    },
    indexAxis: "r",
    startAngle: 0
  };
  static overrides = {
    aspectRatio: 1,
    plugins: {
      legend: {
        labels: {
          generateLabels(t) {
            const e = t.data;
            if (e.labels.length && e.datasets.length) {
              const { labels: { pointStyle: i, color: s } } = t.legend.options;
              return e.labels.map((o, a) => {
                const l = t.getDatasetMeta(0).controller.getStyle(a);
                return {
                  text: o,
                  fillStyle: l.backgroundColor,
                  strokeStyle: l.borderColor,
                  fontColor: s,
                  lineWidth: l.borderWidth,
                  pointStyle: i,
                  hidden: !t.getDataVisibility(a),
                  index: a
                };
              });
            }
            return [];
          }
        },
        onClick(t, e, i) {
          i.chart.toggleDataVisibility(e.index), i.chart.update();
        }
      }
    },
    scales: {
      r: {
        type: "radialLinear",
        angleLines: {
          display: !1
        },
        beginAtZero: !0,
        grid: {
          circular: !0
        },
        pointLabels: {
          display: !1
        },
        startAngle: 0
      }
    }
  };
  constructor(t, e) {
    super(t, e), this.innerRadius = void 0, this.outerRadius = void 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = hn(e._parsed[t].r, i.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  parseObjectData(t, e, i, s) {
    return ua.bind(this)(t, e, i, s);
  }
  update(t) {
    const e = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(e, 0, e.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta, e = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    };
    return t.data.forEach((i, s) => {
      const o = this.getParsed(s).r;
      !isNaN(o) && this.chart.getDataVisibility(s) && (o < e.min && (e.min = o), o > e.max && (e.max = o));
    }), e;
  }
  _updateRadius() {
    const t = this.chart, e = t.chartArea, i = t.options, s = Math.min(e.right - e.left, e.bottom - e.top), o = Math.max(s / 2, 0), a = Math.max(i.cutoutPercentage ? o / 100 * i.cutoutPercentage : 1, 0), r = (o - a) / t.getVisibleDatasetCount();
    this.outerRadius = o - r * this.index, this.innerRadius = this.outerRadius - r;
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", a = this.chart, l = a.options.animation, c = this._cachedMeta.rScale, h = c.xCenter, u = c.yCenter, d = c.getIndexAngle(0) - 0.5 * J;
    let f = d, g;
    const p = 360 / this.countVisibleElements();
    for (g = 0; g < e; ++g)
      f += this._computeAngle(g, s, p);
    for (g = e; g < e + i; g++) {
      const m = t[g];
      let b = f, _ = f + this._computeAngle(g, s, p), P = a.getDataVisibility(g) ? c.getDistanceFromCenterForValue(this.getParsed(g).r) : 0;
      f = _, o && (l.animateScale && (P = 0), l.animateRotate && (b = _ = d));
      const k = {
        x: h,
        y: u,
        innerRadius: 0,
        outerRadius: P,
        startAngle: b,
        endAngle: _,
        options: this.resolveDataElementOptions(g, m.active ? "active" : s)
      };
      this.updateElement(m, g, k, s);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let e = 0;
    return t.data.forEach((i, s) => {
      !isNaN(this.getParsed(s).r) && this.chart.getDataVisibility(s) && e++;
    }), e;
  }
  _computeAngle(t, e, i) {
    return this.chart.getDataVisibility(t) ? Nt(this.resolveDataElementOptions(t, e).angle || i) : 0;
  }
}
class Jc extends qi {
  static id = "pie";
  static defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };
}
class Qc extends he {
  static id = "radar";
  static defaults = {
    datasetElementType: "line",
    dataElementType: "point",
    indexAxis: "r",
    showLine: !0,
    elements: {
      line: {
        fill: "start"
      }
    }
  };
  static overrides = {
    aspectRatio: 1,
    scales: {
      r: {
        type: "radialLinear"
      }
    }
  };
  getLabelAndValue(t) {
    const e = this._cachedMeta.vScale, i = this.getParsed(t);
    return {
      label: e.getLabels()[t],
      value: "" + e.getLabelForValue(i[e.axis])
    };
  }
  parseObjectData(t, e, i, s) {
    return ua.bind(this)(t, e, i, s);
  }
  update(t) {
    const e = this._cachedMeta, i = e.dataset, s = e.data || [], o = e.iScale.getLabels();
    if (i.points = s, t !== "resize") {
      const a = this.resolveDatasetElementOptions(t);
      this.options.showLine || (a.borderWidth = 0);
      const r = {
        _loop: !0,
        _fullLoop: o.length === s.length,
        options: a
      };
      this.updateElement(i, void 0, r, t);
    }
    this.updateElements(s, 0, s.length, t);
  }
  updateElements(t, e, i, s) {
    const o = this._cachedMeta.rScale, a = s === "reset";
    for (let r = e; r < e + i; r++) {
      const l = t[r], c = this.resolveDataElementOptions(r, l.active ? "active" : s), h = o.getPointPositionForValue(r, this.getParsed(r).r), u = a ? o.xCenter : h.x, d = a ? o.yCenter : h.y, f = {
        x: u,
        y: d,
        angle: h.angle,
        skip: isNaN(u) || isNaN(d),
        options: c
      };
      this.updateElement(l, r, f, s);
    }
  }
}
class th extends he {
  static id = "scatter";
  static defaults = {
    datasetElementType: !1,
    dataElementType: "point",
    showLine: !1,
    fill: !1
  };
  static overrides = {
    interaction: {
      mode: "point"
    },
    scales: {
      x: {
        type: "linear"
      },
      y: {
        type: "linear"
      }
    }
  };
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart.data.labels || [], { xScale: s, yScale: o } = e, a = this.getParsed(t), r = s.getLabelForValue(a.x), l = o.getLabelForValue(a.y);
    return {
      label: i[t] || "",
      value: "(" + r + ", " + l + ")"
    };
  }
  update(t) {
    const e = this._cachedMeta, { data: i = [] } = e, s = this.chart._animationsDisabled;
    let { start: o, count: a } = na(e, i, s);
    if (this._drawStart = o, this._drawCount = a, ia(e) && (o = 0, a = i.length), this.options.showLine) {
      this.datasetElementType || this.addElements();
      const { dataset: r, _dataset: l } = e;
      r._chart = this.chart, r._datasetIndex = this.index, r._decimated = !!l._decimated, r.points = i;
      const c = this.resolveDatasetElementOptions(t);
      c.segment = this.options.segment, this.updateElement(r, void 0, {
        animated: !s,
        options: c
      }, t);
    } else this.datasetElementType && (delete e.dataset, this.datasetElementType = !1);
    this.updateElements(i, o, a, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    !this.datasetElementType && t && (this.datasetElementType = this.chart.registry.getElement("line")), super.addElements();
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", { iScale: a, vScale: r, _stacked: l, _dataset: c } = this._cachedMeta, h = this.resolveDataElementOptions(e, s), u = this.getSharedOptions(h), d = this.includeOptions(s, u), f = a.axis, g = r.axis, { spanGaps: p, segment: m } = this.options, b = Le(p) ? p : Number.POSITIVE_INFINITY, _ = this.chart._animationsDisabled || o || s === "none";
    let P = e > 0 && this.getParsed(e - 1);
    for (let k = e; k < e + i; ++k) {
      const v = t[k], C = this.getParsed(k), w = _ ? v : {}, T = G(C[g]), O = w[f] = a.getPixelForValue(C[f], k), A = w[g] = o || T ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, C, l) : C[g], k);
      w.skip = isNaN(O) || isNaN(A) || T, w.stop = k > 0 && Math.abs(C[f] - P[f]) > b, m && (w.parsed = C, w.raw = c.data[k]), d && (w.options = u || this.resolveDataElementOptions(k, v.active ? "active" : s)), _ || this.updateElement(v, k, w, s), P = C;
    }
    this.updateSharedOptions(u, s, h);
  }
  getMaxOverflow() {
    const t = this._cachedMeta, e = t.data || [];
    if (!this.options.showLine) {
      let r = 0;
      for (let l = e.length - 1; l >= 0; --l)
        r = Math.max(r, e[l].size(this.resolveDataElementOptions(l)) / 2);
      return r > 0 && r;
    }
    const i = t.dataset, s = i.options && i.options.borderWidth || 0;
    if (!e.length)
      return s;
    const o = e[0].size(this.resolveDataElementOptions(0)), a = e[e.length - 1].size(this.resolveDataElementOptions(e.length - 1));
    return Math.max(s, o, a) / 2;
  }
}
var eh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BarController: Gc,
  BubbleController: qc,
  DoughnutController: qi,
  LineController: Zc,
  PieController: Jc,
  PolarAreaController: Sa,
  RadarController: Qc,
  ScatterController: th
});
function fe() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Ki {
  /**
  * Override default date adapter methods.
  * Accepts type parameter to define options type.
  * @example
  * Chart._adapters._date.override<{myAdapterOption: string}>({
  *   init() {
  *     console.log(this.options.myAdapterOption);
  *   }
  * })
  */
  static override(t) {
    Object.assign(Ki.prototype, t);
  }
  options;
  constructor(t) {
    this.options = t || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return fe();
  }
  parse() {
    return fe();
  }
  format() {
    return fe();
  }
  add() {
    return fe();
  }
  diff() {
    return fe();
  }
  startOf() {
    return fe();
  }
  endOf() {
    return fe();
  }
}
var nh = {
  _date: Ki
};
function ih(n, t, e, i) {
  const { controller: s, data: o, _sorted: a } = n, r = s._cachedMeta.iScale, l = n.dataset && n.dataset.options ? n.dataset.options.spanGaps : null;
  if (r && t === r.axis && t !== "r" && a && o.length) {
    const c = r._reversePixels ? vl : Jt;
    if (i) {
      if (s._sharedOptions) {
        const h = o[0], u = typeof h.getRange == "function" && h.getRange(t);
        if (u) {
          const d = c(o, t, e - u), f = c(o, t, e + u);
          return {
            lo: d.lo,
            hi: f.hi
          };
        }
      }
    } else {
      const h = c(o, t, e);
      if (l) {
        const { vScale: u } = s._cachedMeta, { _parsed: d } = n, f = d.slice(0, h.lo + 1).reverse().findIndex((p) => !G(p[u.axis]));
        h.lo -= Math.max(0, f);
        const g = d.slice(h.hi).findIndex((p) => !G(p[u.axis]));
        h.hi += Math.max(0, g);
      }
      return h;
    }
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function Kn(n, t, e, i, s) {
  const o = n.getSortedVisibleDatasetMetas(), a = e[t];
  for (let r = 0, l = o.length; r < l; ++r) {
    const { index: c, data: h } = o[r], { lo: u, hi: d } = ih(o[r], t, a, s);
    for (let f = u; f <= d; ++f) {
      const g = h[f];
      g.skip || i(g, c, f);
    }
  }
}
function sh(n) {
  const t = n.indexOf("x") !== -1, e = n.indexOf("y") !== -1;
  return function(i, s) {
    const o = t ? Math.abs(i.x - s.x) : 0, a = e ? Math.abs(i.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2));
  };
}
function ui(n, t, e, i, s) {
  const o = [];
  return !s && !n.isPointInArea(t) || Kn(n, e, t, function(r, l, c) {
    !s && !Qt(r, n.chartArea, 0) || r.inRange(t.x, t.y, i) && o.push({
      element: r,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function oh(n, t, e, i) {
  let s = [];
  function o(a, r, l) {
    const { startAngle: c, endAngle: h } = a.getProps([
      "startAngle",
      "endAngle"
    ], i), { angle: u } = Zo(a, {
      x: t.x,
      y: t.y
    });
    nn(u, c, h) && s.push({
      element: a,
      datasetIndex: r,
      index: l
    });
  }
  return Kn(n, e, t, o), s;
}
function ah(n, t, e, i, s, o) {
  let a = [];
  const r = sh(e);
  let l = Number.POSITIVE_INFINITY;
  function c(h, u, d) {
    const f = h.inRange(t.x, t.y, s);
    if (i && !f)
      return;
    const g = h.getCenterPoint(s);
    if (!(!!o || n.isPointInArea(g)) && !f)
      return;
    const m = r(t, g);
    m < l ? (a = [
      {
        element: h,
        datasetIndex: u,
        index: d
      }
    ], l = m) : m === l && a.push({
      element: h,
      datasetIndex: u,
      index: d
    });
  }
  return Kn(n, e, t, c), a;
}
function di(n, t, e, i, s, o) {
  return !o && !n.isPointInArea(t) ? [] : e === "r" && !i ? oh(n, t, e, s) : ah(n, t, e, i, s, o);
}
function Vs(n, t, e, i, s) {
  const o = [], a = e === "x" ? "inXRange" : "inYRange";
  let r = !1;
  return Kn(n, e, t, (l, c, h) => {
    l[a] && l[a](t[e], s) && (o.push({
      element: l,
      datasetIndex: c,
      index: h
    }), r = r || l.inRange(t.x, t.y, s));
  }), i && !r ? [] : o;
}
var rh = {
  modes: {
    index(n, t, e, i) {
      const s = pe(t, n), o = e.axis || "x", a = e.includeInvisible || !1, r = e.intersect ? ui(n, s, o, i, a) : di(n, s, o, !1, i, a), l = [];
      return r.length ? (n.getSortedVisibleDatasetMetas().forEach((c) => {
        const h = r[0].index, u = c.data[h];
        u && !u.skip && l.push({
          element: u,
          datasetIndex: c.index,
          index: h
        });
      }), l) : [];
    },
    dataset(n, t, e, i) {
      const s = pe(t, n), o = e.axis || "xy", a = e.includeInvisible || !1;
      let r = e.intersect ? ui(n, s, o, i, a) : di(n, s, o, !1, i, a);
      if (r.length > 0) {
        const l = r[0].datasetIndex, c = n.getDatasetMeta(l).data;
        r = [];
        for (let h = 0; h < c.length; ++h)
          r.push({
            element: c[h],
            datasetIndex: l,
            index: h
          });
      }
      return r;
    },
    point(n, t, e, i) {
      const s = pe(t, n), o = e.axis || "xy", a = e.includeInvisible || !1;
      return ui(n, s, o, i, a);
    },
    nearest(n, t, e, i) {
      const s = pe(t, n), o = e.axis || "xy", a = e.includeInvisible || !1;
      return di(n, s, o, e.intersect, i, a);
    },
    x(n, t, e, i) {
      const s = pe(t, n);
      return Vs(n, s, "x", e.intersect, i);
    },
    y(n, t, e, i) {
      const s = pe(t, n);
      return Vs(n, s, "y", e.intersect, i);
    }
  }
};
const wa = [
  "left",
  "top",
  "right",
  "bottom"
];
function ze(n, t) {
  return n.filter((e) => e.pos === t);
}
function Fs(n, t) {
  return n.filter((e) => wa.indexOf(e.pos) === -1 && e.box.axis === t);
}
function je(n, t) {
  return n.sort((e, i) => {
    const s = t ? i : e, o = t ? e : i;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function lh(n) {
  const t = [];
  let e, i, s, o, a, r;
  for (e = 0, i = (n || []).length; e < i; ++e)
    s = n[e], { position: o, options: { stack: a, stackWeight: r = 1 } } = s, t.push({
      index: e,
      box: s,
      pos: o,
      horizontal: s.isHorizontal(),
      weight: s.weight,
      stack: a && o + a,
      stackWeight: r
    });
  return t;
}
function ch(n) {
  const t = {};
  for (const e of n) {
    const { stack: i, pos: s, stackWeight: o } = e;
    if (!i || !wa.includes(s))
      continue;
    const a = t[i] || (t[i] = {
      count: 0,
      placed: 0,
      weight: 0,
      size: 0
    });
    a.count++, a.weight += o;
  }
  return t;
}
function hh(n, t) {
  const e = ch(n), { vBoxMaxWidth: i, hBoxMaxHeight: s } = t;
  let o, a, r;
  for (o = 0, a = n.length; o < a; ++o) {
    r = n[o];
    const { fullSize: l } = r.box, c = e[r.stack], h = c && r.stackWeight / c.weight;
    r.horizontal ? (r.width = h ? h * i : l && t.availableWidth, r.height = s) : (r.width = i, r.height = h ? h * s : l && t.availableHeight);
  }
  return e;
}
function uh(n) {
  const t = lh(n), e = je(t.filter((c) => c.box.fullSize), !0), i = je(ze(t, "left"), !0), s = je(ze(t, "right")), o = je(ze(t, "top"), !0), a = je(ze(t, "bottom")), r = Fs(t, "x"), l = Fs(t, "y");
  return {
    fullSize: e,
    leftAndTop: i.concat(o),
    rightAndBottom: s.concat(l).concat(a).concat(r),
    chartArea: ze(t, "chartArea"),
    vertical: i.concat(s).concat(l),
    horizontal: o.concat(a).concat(r)
  };
}
function Bs(n, t, e, i) {
  return Math.max(n[e], t[e]) + Math.max(n[i], t[i]);
}
function ka(n, t) {
  n.top = Math.max(n.top, t.top), n.left = Math.max(n.left, t.left), n.bottom = Math.max(n.bottom, t.bottom), n.right = Math.max(n.right, t.right);
}
function dh(n, t, e, i) {
  const { pos: s, box: o } = e, a = n.maxPadding;
  if (!K(s)) {
    e.size && (n[s] -= e.size);
    const u = i[e.stack] || {
      size: 0,
      count: 1
    };
    u.size = Math.max(u.size, e.horizontal ? o.height : o.width), e.size = u.size / u.count, n[s] += e.size;
  }
  o.getPadding && ka(a, o.getPadding());
  const r = Math.max(0, t.outerWidth - Bs(a, n, "left", "right")), l = Math.max(0, t.outerHeight - Bs(a, n, "top", "bottom")), c = r !== n.w, h = l !== n.h;
  return n.w = r, n.h = l, e.horizontal ? {
    same: c,
    other: h
  } : {
    same: h,
    other: c
  };
}
function fh(n) {
  const t = n.maxPadding;
  function e(i) {
    const s = Math.max(t[i] - n[i], 0);
    return n[i] += s, s;
  }
  n.y += e("top"), n.x += e("left"), e("right"), e("bottom");
}
function gh(n, t) {
  const e = t.maxPadding;
  function i(s) {
    const o = {
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
    return s.forEach((a) => {
      o[a] = Math.max(t[a], e[a]);
    }), o;
  }
  return i(n ? [
    "left",
    "right"
  ] : [
    "top",
    "bottom"
  ]);
}
function Xe(n, t, e, i) {
  const s = [];
  let o, a, r, l, c, h;
  for (o = 0, a = n.length, c = 0; o < a; ++o) {
    r = n[o], l = r.box, l.update(r.width || t.w, r.height || t.h, gh(r.horizontal, t));
    const { same: u, other: d } = dh(t, e, r, i);
    c |= u && s.length, h = h || d, l.fullSize || s.push(r);
  }
  return c && Xe(s, t, e, i) || h;
}
function On(n, t, e, i, s) {
  n.top = e, n.left = t, n.right = t + i, n.bottom = e + s, n.width = i, n.height = s;
}
function Ns(n, t, e, i) {
  const s = e.padding;
  let { x: o, y: a } = t;
  for (const r of n) {
    const l = r.box, c = i[r.stack] || {
      placed: 0,
      weight: 1
    }, h = r.stackWeight / c.weight || 1;
    if (r.horizontal) {
      const u = t.w * h, d = c.size || l.height;
      en(c.start) && (a = c.start), l.fullSize ? On(l, s.left, a, e.outerWidth - s.right - s.left, d) : On(l, t.left + c.placed, a, u, d), c.start = a, c.placed += u, a = l.bottom;
    } else {
      const u = t.h * h, d = c.size || l.width;
      en(c.start) && (o = c.start), l.fullSize ? On(l, o, s.top, d, e.outerHeight - s.bottom - s.top) : On(l, o, t.top + c.placed, d, u), c.start = o, c.placed += u, o = l.right;
    }
  }
  t.x = o, t.y = a;
}
var Ct = {
  addBox(n, t) {
    n.boxes || (n.boxes = []), t.fullSize = t.fullSize || !1, t.position = t.position || "top", t.weight = t.weight || 0, t._layers = t._layers || function() {
      return [
        {
          z: 0,
          draw(e) {
            t.draw(e);
          }
        }
      ];
    }, n.boxes.push(t);
  },
  removeBox(n, t) {
    const e = n.boxes ? n.boxes.indexOf(t) : -1;
    e !== -1 && n.boxes.splice(e, 1);
  },
  configure(n, t, e) {
    t.fullSize = e.fullSize, t.position = e.position, t.weight = e.weight;
  },
  update(n, t, e, i) {
    if (!n)
      return;
    const s = Tt(n.options.layout.padding), o = Math.max(t - s.width, 0), a = Math.max(e - s.height, 0), r = uh(n.boxes), l = r.vertical, c = r.horizontal;
    et(n.boxes, (p) => {
      typeof p.beforeLayout == "function" && p.beforeLayout();
    });
    const h = l.reduce((p, m) => m.box.options && m.box.options.display === !1 ? p : p + 1, 0) || 1, u = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: s,
      availableWidth: o,
      availableHeight: a,
      vBoxMaxWidth: o / 2 / h,
      hBoxMaxHeight: a / 2
    }), d = Object.assign({}, s);
    ka(d, Tt(i));
    const f = Object.assign({
      maxPadding: d,
      w: o,
      h: a,
      x: s.left,
      y: s.top
    }, s), g = hh(l.concat(c), u);
    Xe(r.fullSize, f, u, g), Xe(l, f, u, g), Xe(c, f, u, g) && Xe(l, f, u, g), fh(f), Ns(r.leftAndTop, f, u, g), f.x += f.w, f.y += f.h, Ns(r.rightAndBottom, f, u, g), n.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, et(r.chartArea, (p) => {
      const m = p.box;
      Object.assign(m, n.chartArea), m.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class Oa {
  acquireContext(t, e) {
  }
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, e, i) {
  }
  removeEventListener(t, e, i) {
  }
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, e, i, s) {
    return e = Math.max(0, e || t.width), i = i || t.height, {
      width: e,
      height: Math.max(0, s ? Math.floor(e / s) : i)
    };
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {
  }
}
class ph extends Oa {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const En = "$chartjs", mh = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, zs = (n) => n === null || n === "";
function bh(n, t) {
  const e = n.style, i = n.getAttribute("height"), s = n.getAttribute("width");
  if (n[En] = {
    initial: {
      height: i,
      width: s,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", zs(s)) {
    const o = ws(n, "width");
    o !== void 0 && (n.width = o);
  }
  if (zs(i))
    if (n.style.height === "")
      n.height = n.width / (t || 2);
    else {
      const o = ws(n, "height");
      o !== void 0 && (n.height = o);
    }
  return n;
}
const Ma = dc ? {
  passive: !0
} : !1;
function yh(n, t, e) {
  n && n.addEventListener(t, e, Ma);
}
function vh(n, t, e) {
  n && n.canvas && n.canvas.removeEventListener(t, e, Ma);
}
function xh(n, t) {
  const e = mh[n.type] || n.type, { x: i, y: s } = pe(n, t);
  return {
    type: e,
    chart: t,
    native: n,
    x: i !== void 0 ? i : null,
    y: s !== void 0 ? s : null
  };
}
function jn(n, t) {
  for (const e of n)
    if (e === t || e.contains(t))
      return !0;
}
function _h(n, t, e) {
  const i = n.canvas, s = new MutationObserver((o) => {
    let a = !1;
    for (const r of o)
      a = a || jn(r.addedNodes, i), a = a && !jn(r.removedNodes, i);
    a && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
function Sh(n, t, e) {
  const i = n.canvas, s = new MutationObserver((o) => {
    let a = !1;
    for (const r of o)
      a = a || jn(r.removedNodes, i), a = a && !jn(r.addedNodes, i);
    a && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
const on = /* @__PURE__ */ new Map();
let js = 0;
function Ca() {
  const n = window.devicePixelRatio;
  n !== js && (js = n, on.forEach((t, e) => {
    e.currentDevicePixelRatio !== n && t();
  }));
}
function wh(n, t) {
  on.size || window.addEventListener("resize", Ca), on.set(n, t);
}
function kh(n) {
  on.delete(n), on.size || window.removeEventListener("resize", Ca);
}
function Oh(n, t, e) {
  const i = n.canvas, s = i && Gi(i);
  if (!s)
    return;
  const o = ea((r, l) => {
    const c = s.clientWidth;
    e(r, l), c < s.clientWidth && e();
  }, window), a = new ResizeObserver((r) => {
    const l = r[0], c = l.contentRect.width, h = l.contentRect.height;
    c === 0 && h === 0 || o(c, h);
  });
  return a.observe(s), wh(n, o), a;
}
function fi(n, t, e) {
  e && e.disconnect(), t === "resize" && kh(n);
}
function Mh(n, t, e) {
  const i = n.canvas, s = ea((o) => {
    n.ctx !== null && e(xh(o, n));
  }, n);
  return yh(i, t, s), s;
}
class Ch extends Oa {
  acquireContext(t, e) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (bh(t, e), i) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[En])
      return !1;
    const i = e[En].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const a = i[o];
      G(a) ? e.removeAttribute(o) : e.setAttribute(o, a);
    });
    const s = i.style || {};
    return Object.keys(s).forEach((o) => {
      e.style[o] = s[o];
    }), e.width = e.width, delete e[En], !0;
  }
  addEventListener(t, e, i) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}), a = {
      attach: _h,
      detach: Sh,
      resize: Oh
    }[e] || Mh;
    s[e] = a(t, e, i);
  }
  removeEventListener(t, e) {
    const i = t.$proxies || (t.$proxies = {}), s = i[e];
    if (!s)
      return;
    ({
      attach: fi,
      detach: fi,
      resize: fi
    }[e] || vh)(t, e, s), i[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, i, s) {
    return uc(t, e, i, s);
  }
  isAttached(t) {
    const e = t && Gi(t);
    return !!(e && e.isConnected);
  }
}
function Th(n) {
  return !Xi() || typeof OffscreenCanvas < "u" && n instanceof OffscreenCanvas ? ph : Ch;
}
class te {
  static defaults = {};
  static defaultRoutes = void 0;
  x;
  y;
  active = !1;
  options;
  $animations;
  tooltipPosition(t) {
    const { x: e, y: i } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: i
    };
  }
  hasValue() {
    return Le(this.x) && Le(this.y);
  }
  getProps(t, e) {
    const i = this.$animations;
    if (!e || !i)
      return this;
    const s = {};
    return t.forEach((o) => {
      s[o] = i[o] && i[o].active() ? i[o]._to : this[o];
    }), s;
  }
}
function Ph(n, t) {
  const e = n.options.ticks, i = Lh(n), s = Math.min(e.maxTicksLimit || i, i), o = e.major.enabled ? Ah(t) : [], a = o.length, r = o[0], l = o[a - 1], c = [];
  if (a > s)
    return Rh(t, c, o, a / s), c;
  const h = Dh(o, t, s);
  if (a > 0) {
    let u, d;
    const f = a > 1 ? Math.round((l - r) / (a - 1)) : null;
    for (Mn(t, c, h, G(f) ? 0 : r - f, r), u = 0, d = a - 1; u < d; u++)
      Mn(t, c, h, o[u], o[u + 1]);
    return Mn(t, c, h, l, G(f) ? t.length : l + f), c;
  }
  return Mn(t, c, h), c;
}
function Lh(n) {
  const t = n.options.offset, e = n._tickSize(), i = n._length / e + (t ? 0 : 1), s = n._maxLength / e;
  return Math.floor(Math.min(i, s));
}
function Dh(n, t, e) {
  const i = Eh(n), s = t.length / e;
  if (!i)
    return Math.max(s, 1);
  const o = gl(i);
  for (let a = 0, r = o.length - 1; a < r; a++) {
    const l = o[a];
    if (l > s)
      return l;
  }
  return Math.max(s, 1);
}
function Ah(n) {
  const t = [];
  let e, i;
  for (e = 0, i = n.length; e < i; e++)
    n[e].major && t.push(e);
  return t;
}
function Rh(n, t, e, i) {
  let s = 0, o = e[0], a;
  for (i = Math.ceil(i), a = 0; a < n.length; a++)
    a === o && (t.push(n[a]), s++, o = e[s * i]);
}
function Mn(n, t, e, i, s) {
  const o = U(i, 0), a = Math.min(U(s, n.length), n.length);
  let r = 0, l, c, h;
  for (e = Math.ceil(e), s && (l = s - i, e = l / Math.floor(l / e)), h = o; h < 0; )
    r++, h = Math.round(o + r * e);
  for (c = Math.max(o, 0); c < a; c++)
    c === h && (t.push(n[c]), r++, h = Math.round(o + r * e));
}
function Eh(n) {
  const t = n.length;
  let e, i;
  if (t < 2)
    return !1;
  for (i = n[0], e = 1; e < t; ++e)
    if (n[e] - n[e - 1] !== i)
      return !1;
  return i;
}
const Ih = (n) => n === "left" ? "right" : n === "right" ? "left" : n, Ws = (n, t, e) => t === "top" || t === "left" ? n[t] + e : n[t] - e, Hs = (n, t) => Math.min(t || n, n);
function $s(n, t) {
  const e = [], i = n.length / t, s = n.length;
  let o = 0;
  for (; o < s; o += i)
    e.push(n[Math.floor(o)]);
  return e;
}
function Vh(n, t, e) {
  const i = n.ticks.length, s = Math.min(t, i - 1), o = n._startPixel, a = n._endPixel, r = 1e-6;
  let l = n.getPixelForTick(s), c;
  if (!(e && (i === 1 ? c = Math.max(l - o, a - l) : t === 0 ? c = (n.getPixelForTick(1) - l) / 2 : c = (l - n.getPixelForTick(s - 1)) / 2, l += s < t ? c : -c, l < o - r || l > a + r)))
    return l;
}
function Fh(n, t) {
  et(n, (e) => {
    const i = e.gc, s = i.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o)
        delete e.data[i[o]];
      i.splice(0, s);
    }
  });
}
function We(n) {
  return n.drawTicks ? n.tickLength : 0;
}
function Us(n, t) {
  if (!n.display)
    return 0;
  const e = vt(n.font, t), i = Tt(n.padding);
  return (rt(n.text) ? n.text.length : 1) * e.lineHeight + i.height;
}
function Bh(n, t) {
  return ce(n, {
    scale: t,
    type: "scale"
  });
}
function Nh(n, t, e) {
  return ce(n, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function zh(n, t, e) {
  let i = ji(n);
  return (e && t !== "right" || !e && t === "right") && (i = Ih(i)), i;
}
function jh(n, t, e, i) {
  const { top: s, left: o, bottom: a, right: r, chart: l } = n, { chartArea: c, scales: h } = l;
  let u = 0, d, f, g;
  const p = a - s, m = r - o;
  if (n.isHorizontal()) {
    if (f = kt(i, o, r), K(e)) {
      const b = Object.keys(e)[0], _ = e[b];
      g = h[b].getPixelForValue(_) + p - t;
    } else e === "center" ? g = (c.bottom + c.top) / 2 + p - t : g = Ws(n, e, t);
    d = r - o;
  } else {
    if (K(e)) {
      const b = Object.keys(e)[0], _ = e[b];
      f = h[b].getPixelForValue(_) - m + t;
    } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = Ws(n, e, t);
    g = kt(i, a, s), u = e === "left" ? -bt : bt;
  }
  return {
    titleX: f,
    titleY: g,
    maxWidth: d,
    rotation: u
  };
}
class we extends te {
  constructor(t) {
    super(), this.id = t.id, this.type = t.type, this.options = void 0, this.ctx = t.ctx, this.chart = t.chart, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this._margins = {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, this.maxWidth = void 0, this.maxHeight = void 0, this.paddingTop = void 0, this.paddingBottom = void 0, this.paddingLeft = void 0, this.paddingRight = void 0, this.axis = void 0, this.labelRotation = void 0, this.min = void 0, this.max = void 0, this._range = void 0, this.ticks = [], this._gridLineItems = null, this._labelItems = null, this._labelSizes = null, this._length = 0, this._maxLength = 0, this._longestTextCache = {}, this._startPixel = void 0, this._endPixel = void 0, this._reversePixels = !1, this._userMax = void 0, this._userMin = void 0, this._suggestedMax = void 0, this._suggestedMin = void 0, this._ticksLength = 0, this._borderValue = 0, this._cache = {}, this._dataLimitsCached = !1, this.$context = void 0;
  }
  init(t) {
    this.options = t.setContext(this.getContext()), this.axis = t.axis, this._userMin = this.parse(t.min), this._userMax = this.parse(t.max), this._suggestedMin = this.parse(t.suggestedMin), this._suggestedMax = this.parse(t.suggestedMax);
  }
  parse(t, e) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: e, _suggestedMin: i, _suggestedMax: s } = this;
    return t = Rt(t, Number.POSITIVE_INFINITY), e = Rt(e, Number.NEGATIVE_INFINITY), i = Rt(i, Number.POSITIVE_INFINITY), s = Rt(s, Number.NEGATIVE_INFINITY), {
      min: Rt(t, i),
      max: Rt(e, s),
      minDefined: ft(t),
      maxDefined: ft(e)
    };
  }
  getMinMax(t) {
    let { min: e, max: i, minDefined: s, maxDefined: o } = this.getUserBounds(), a;
    if (s && o)
      return {
        min: e,
        max: i
      };
    const r = this.getMatchingVisibleMetas();
    for (let l = 0, c = r.length; l < c; ++l)
      a = r[l].controller.getMinMax(this, t), s || (e = Math.min(e, a.min)), o || (i = Math.max(i, a.max));
    return e = o && e > i ? i : e, i = s && e > i ? e : i, {
      min: Rt(e, Rt(i, e)),
      max: Rt(i, Rt(e, i))
    };
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return this.options.labels || (this.isHorizontal() ? t.xLabels : t.yLabels) || t.labels || [];
  }
  getLabelItems(t = this.chart.chartArea) {
    return this._labelItems || (this._labelItems = this._computeLabelItems(t));
  }
  beforeLayout() {
    this._cache = {}, this._dataLimitsCached = !1;
  }
  beforeUpdate() {
    it(this.options.beforeUpdate, [
      this
    ]);
  }
  update(t, e, i) {
    const { beginAtZero: s, grace: o, ticks: a } = this.options, r = a.sampleSize;
    this.beforeUpdate(), this.maxWidth = t, this.maxHeight = e, this._margins = i = Object.assign({
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Hl(this, o, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = r < this.ticks.length;
    this._convertTicksToLabels(l ? $s(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a.display && (a.autoSkip || a.source === "auto") && (this.ticks = Ph(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, i;
    this.isHorizontal() ? (e = this.left, i = this.right) : (e = this.top, i = this.bottom, t = !t), this._startPixel = e, this._endPixel = i, this._reversePixels = t, this._length = i - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    it(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    it(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    it(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), it(this.options[t], [
      this
    ]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {
  }
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    it(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let i, s, o;
    for (i = 0, s = t.length; i < s; i++)
      o = t[i], o.label = it(e.callback, [
        o.value,
        i,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    it(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    it(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, i = Hs(this.ticks.length, t.ticks.maxTicksLimit), s = e.minRotation || 0, o = e.maxRotation;
    let a = s, r, l, c;
    if (!this._isVisible() || !e.display || s >= o || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = s;
      return;
    }
    const h = this._getLabelSizes(), u = h.widest.width, d = h.highest.height, f = St(this.chart.width - u, 0, this.maxWidth);
    r = t.offset ? this.maxWidth / i : f / (i - 1), u + 6 > r && (r = f / (i - (t.offset ? 0.5 : 1)), l = this.maxHeight - We(t.grid) - e.padding - Us(t.title, this.chart.options.font), c = Math.sqrt(u * u + d * d), a = Ni(Math.min(Math.asin(St((h.highest.height + 6) / r, -1, 1)), Math.asin(St(l / c, -1, 1)) - Math.asin(St(d / c, -1, 1)))), a = Math.max(s, Math.min(o, a))), this.labelRotation = a;
  }
  afterCalculateLabelRotation() {
    it(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    it(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: i, title: s, grid: o } } = this, a = this._isVisible(), r = this.isHorizontal();
    if (a) {
      const l = Us(s, e.options.font);
      if (r ? (t.width = this.maxWidth, t.height = We(o) + l) : (t.height = this.maxHeight, t.width = We(o) + l), i.display && this.ticks.length) {
        const { first: c, last: h, widest: u, highest: d } = this._getLabelSizes(), f = i.padding * 2, g = Nt(this.labelRotation), p = Math.cos(g), m = Math.sin(g);
        if (r) {
          const b = i.mirror ? 0 : m * u.width + p * d.height;
          t.height = Math.min(this.maxHeight, t.height + b + f);
        } else {
          const b = i.mirror ? 0 : p * u.width + m * d.height;
          t.width = Math.min(this.maxWidth, t.width + b + f);
        }
        this._calculatePadding(c, h, m, p);
      }
    }
    this._handleMargins(), r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, i, s) {
    const { ticks: { align: o, padding: a }, position: r } = this.options, l = this.labelRotation !== 0, c = r !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const h = this.getPixelForTick(0) - this.left, u = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0, f = 0;
      l ? c ? (d = s * t.width, f = i * e.height) : (d = i * t.height, f = s * e.width) : o === "start" ? f = e.width : o === "end" ? d = t.width : o !== "inner" && (d = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((d - h + a) * this.width / (this.width - h), 0), this.paddingRight = Math.max((f - u + a) * this.width / (this.width - u), 0);
    } else {
      let h = e.height / 2, u = t.height / 2;
      o === "start" ? (h = 0, u = t.height) : o === "end" && (h = e.height, u = 0), this.paddingTop = h + a, this.paddingBottom = u + a;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    it(this.options.afterFit, [
      this
    ]);
  }
  isHorizontal() {
    const { axis: t, position: e } = this.options;
    return e === "top" || e === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let e, i;
    for (e = 0, i = t.length; e < i; e++)
      G(t[e].label) && (t.splice(e, 1), i--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let i = this.ticks;
      e < i.length && (i = $s(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, i) {
    const { ctx: s, _longestTextCache: o } = this, a = [], r = [], l = Math.floor(e / Hs(e, i));
    let c = 0, h = 0, u, d, f, g, p, m, b, _, P, k, v;
    for (u = 0; u < e; u += l) {
      if (g = t[u].label, p = this._resolveTickFontOptions(u), s.font = m = p.string, b = o[m] = o[m] || {
        data: {},
        gc: []
      }, _ = p.lineHeight, P = k = 0, !G(g) && !rt(g))
        P = Nn(s, b.data, b.gc, P, g), k = _;
      else if (rt(g))
        for (d = 0, f = g.length; d < f; ++d)
          v = g[d], !G(v) && !rt(v) && (P = Nn(s, b.data, b.gc, P, v), k += _);
      a.push(P), r.push(k), c = Math.max(P, c), h = Math.max(k, h);
    }
    Fh(o, e);
    const C = a.indexOf(c), w = r.indexOf(h), T = (O) => ({
      width: a[O] || 0,
      height: r[O] || 0
    });
    return {
      first: T(0),
      last: T(e - 1),
      widest: T(C),
      highest: T(w),
      widths: a,
      heights: r
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, e) {
    return NaN;
  }
  getValueForPixel(t) {
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const e = this._startPixel + t * this._length;
    return yl(this._alignToPixels ? de(this.chart, e, 0) : e);
  }
  getDecimalForPixel(t) {
    const e = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - e : e;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: e } = this;
    return t < 0 && e < 0 ? e : t > 0 && e > 0 ? t : 0;
  }
  getContext(t) {
    const e = this.ticks || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return i.$context || (i.$context = Nh(this.getContext(), t, i));
    }
    return this.$context || (this.$context = Bh(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = Nt(this.labelRotation), i = Math.abs(Math.cos(e)), s = Math.abs(Math.sin(e)), o = this._getLabelSizes(), a = t.autoSkipPadding || 0, r = o ? o.widest.width + a : 0, l = o ? o.highest.height + a : 0;
    return this.isHorizontal() ? l * i > r * s ? r / i : l / s : l * s < r * i ? l / i : r / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, i = this.chart, s = this.options, { grid: o, position: a, border: r } = s, l = o.offset, c = this.isHorizontal(), u = this.ticks.length + (l ? 1 : 0), d = We(o), f = [], g = r.setContext(this.getContext()), p = g.display ? g.width : 0, m = p / 2, b = function(F) {
      return de(i, F, p);
    };
    let _, P, k, v, C, w, T, O, A, B, N, D;
    if (a === "top")
      _ = b(this.bottom), w = this.bottom - d, O = _ - m, B = b(t.top) + m, D = t.bottom;
    else if (a === "bottom")
      _ = b(this.top), B = t.top, D = b(t.bottom) - m, w = _ + m, O = this.top + d;
    else if (a === "left")
      _ = b(this.right), C = this.right - d, T = _ - m, A = b(t.left) + m, N = t.right;
    else if (a === "right")
      _ = b(this.left), A = t.left, N = b(t.right) - m, C = _ + m, T = this.left + d;
    else if (e === "x") {
      if (a === "center")
        _ = b((t.top + t.bottom) / 2 + 0.5);
      else if (K(a)) {
        const F = Object.keys(a)[0], y = a[F];
        _ = b(this.chart.scales[F].getPixelForValue(y));
      }
      B = t.top, D = t.bottom, w = _ + m, O = w + d;
    } else if (e === "y") {
      if (a === "center")
        _ = b((t.left + t.right) / 2);
      else if (K(a)) {
        const F = Object.keys(a)[0], y = a[F];
        _ = b(this.chart.scales[F].getPixelForValue(y));
      }
      C = _ - m, T = C - d, A = t.left, N = t.right;
    }
    const I = U(s.ticks.maxTicksLimit, u), E = Math.max(1, Math.ceil(u / I));
    for (P = 0; P < u; P += E) {
      const F = this.getContext(P), y = o.setContext(F), S = r.setContext(F), x = y.lineWidth, L = y.color, R = S.dash || [], H = S.dashOffset, Y = y.tickWidth, q = y.tickColor, Q = y.tickBorderDash || [], j = y.tickBorderDashOffset;
      k = Vh(this, P, l), k !== void 0 && (v = de(i, k, x), c ? C = T = A = N = v : w = O = B = D = v, f.push({
        tx1: C,
        ty1: w,
        tx2: T,
        ty2: O,
        x1: A,
        y1: B,
        x2: N,
        y2: D,
        width: x,
        color: L,
        borderDash: R,
        borderDashOffset: H,
        tickWidth: Y,
        tickColor: q,
        tickBorderDash: Q,
        tickBorderDashOffset: j
      }));
    }
    return this._ticksLength = u, this._borderValue = _, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, i = this.options, { position: s, ticks: o } = i, a = this.isHorizontal(), r = this.ticks, { align: l, crossAlign: c, padding: h, mirror: u } = o, d = We(i.grid), f = d + h, g = u ? -h : f, p = -Nt(this.labelRotation), m = [];
    let b, _, P, k, v, C, w, T, O, A, B, N, D = "middle";
    if (s === "top")
      C = this.bottom - g, w = this._getXAxisLabelAlignment();
    else if (s === "bottom")
      C = this.top + g, w = this._getXAxisLabelAlignment();
    else if (s === "left") {
      const E = this._getYAxisLabelAlignment(d);
      w = E.textAlign, v = E.x;
    } else if (s === "right") {
      const E = this._getYAxisLabelAlignment(d);
      w = E.textAlign, v = E.x;
    } else if (e === "x") {
      if (s === "center")
        C = (t.top + t.bottom) / 2 + f;
      else if (K(s)) {
        const E = Object.keys(s)[0], F = s[E];
        C = this.chart.scales[E].getPixelForValue(F) + f;
      }
      w = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (s === "center")
        v = (t.left + t.right) / 2 - f;
      else if (K(s)) {
        const E = Object.keys(s)[0], F = s[E];
        v = this.chart.scales[E].getPixelForValue(F);
      }
      w = this._getYAxisLabelAlignment(d).textAlign;
    }
    e === "y" && (l === "start" ? D = "top" : l === "end" && (D = "bottom"));
    const I = this._getLabelSizes();
    for (b = 0, _ = r.length; b < _; ++b) {
      P = r[b], k = P.label;
      const E = o.setContext(this.getContext(b));
      T = this.getPixelForTick(b) + o.labelOffset, O = this._resolveTickFontOptions(b), A = O.lineHeight, B = rt(k) ? k.length : 1;
      const F = B / 2, y = E.color, S = E.textStrokeColor, x = E.textStrokeWidth;
      let L = w;
      a ? (v = T, w === "inner" && (b === _ - 1 ? L = this.options.reverse ? "left" : "right" : b === 0 ? L = this.options.reverse ? "right" : "left" : L = "center"), s === "top" ? c === "near" || p !== 0 ? N = -B * A + A / 2 : c === "center" ? N = -I.highest.height / 2 - F * A + A : N = -I.highest.height + A / 2 : c === "near" || p !== 0 ? N = A / 2 : c === "center" ? N = I.highest.height / 2 - F * A : N = I.highest.height - B * A, u && (N *= -1), p !== 0 && !E.showLabelBackdrop && (v += A / 2 * Math.sin(p))) : (C = T, N = (1 - B) * A / 2);
      let R;
      if (E.showLabelBackdrop) {
        const H = Tt(E.backdropPadding), Y = I.heights[b], q = I.widths[b];
        let Q = N - H.top, j = 0 - H.left;
        switch (D) {
          case "middle":
            Q -= Y / 2;
            break;
          case "bottom":
            Q -= Y;
            break;
        }
        switch (w) {
          case "center":
            j -= q / 2;
            break;
          case "right":
            j -= q;
            break;
          case "inner":
            b === _ - 1 ? j -= q : b > 0 && (j -= q / 2);
            break;
        }
        R = {
          left: j,
          top: Q,
          width: q + H.width,
          height: Y + H.height,
          color: E.backdropColor
        };
      }
      m.push({
        label: k,
        font: O,
        textOffset: N,
        options: {
          rotation: p,
          color: y,
          strokeColor: S,
          strokeWidth: x,
          textAlign: L,
          textBaseline: D,
          translation: [
            v,
            C
          ],
          backdrop: R
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-Nt(this.labelRotation))
      return t === "top" ? "left" : "right";
    let s = "center";
    return e.align === "start" ? s = "left" : e.align === "end" ? s = "right" : e.align === "inner" && (s = "inner"), s;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: i, mirror: s, padding: o } } = this.options, a = this._getLabelSizes(), r = t + o, l = a.widest.width;
    let c, h;
    return e === "left" ? s ? (h = this.right + o, i === "near" ? c = "left" : i === "center" ? (c = "center", h += l / 2) : (c = "right", h += l)) : (h = this.right - r, i === "near" ? c = "right" : i === "center" ? (c = "center", h -= l / 2) : (c = "left", h = this.left)) : e === "right" ? s ? (h = this.left + o, i === "near" ? c = "right" : i === "center" ? (c = "center", h -= l / 2) : (c = "left", h -= l)) : (h = this.left + r, i === "near" ? c = "left" : i === "center" ? (c = "center", h += l / 2) : (c = "right", h = this.right)) : c = "right", {
      textAlign: c,
      x: h
    };
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror)
      return;
    const t = this.chart, e = this.options.position;
    if (e === "left" || e === "right")
      return {
        top: 0,
        left: this.left,
        bottom: t.height,
        right: this.right
      };
    if (e === "top" || e === "bottom")
      return {
        top: this.top,
        left: 0,
        bottom: this.bottom,
        right: t.width
      };
  }
  drawBackground() {
    const { ctx: t, options: { backgroundColor: e }, left: i, top: s, width: o, height: a } = this;
    e && (t.save(), t.fillStyle = e, t.fillRect(i, s, o, a), t.restore());
  }
  getLineWidthForValue(t) {
    const e = this.options.grid;
    if (!this._isVisible() || !e.display)
      return 0;
    const s = this.ticks.findIndex((o) => o.value === t);
    return s >= 0 ? e.setContext(this.getContext(s)).lineWidth : 0;
  }
  drawGrid(t) {
    const e = this.options.grid, i = this.ctx, s = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(t));
    let o, a;
    const r = (l, c, h) => {
      !h.width || !h.color || (i.save(), i.lineWidth = h.width, i.strokeStyle = h.color, i.setLineDash(h.borderDash || []), i.lineDashOffset = h.borderDashOffset, i.beginPath(), i.moveTo(l.x, l.y), i.lineTo(c.x, c.y), i.stroke(), i.restore());
    };
    if (e.display)
      for (o = 0, a = s.length; o < a; ++o) {
        const l = s[o];
        e.drawOnChartArea && r({
          x: l.x1,
          y: l.y1
        }, {
          x: l.x2,
          y: l.y2
        }, l), e.drawTicks && r({
          x: l.tx1,
          y: l.ty1
        }, {
          x: l.tx2,
          y: l.ty2
        }, {
          color: l.tickColor,
          width: l.tickWidth,
          borderDash: l.tickBorderDash,
          borderDashOffset: l.tickBorderDashOffset
        });
      }
  }
  drawBorder() {
    const { chart: t, ctx: e, options: { border: i, grid: s } } = this, o = i.setContext(this.getContext()), a = i.display ? o.width : 0;
    if (!a)
      return;
    const r = s.setContext(this.getContext(0)).lineWidth, l = this._borderValue;
    let c, h, u, d;
    this.isHorizontal() ? (c = de(t, this.left, a) - a / 2, h = de(t, this.right, r) + r / 2, u = d = l) : (u = de(t, this.top, a) - a / 2, d = de(t, this.bottom, r) + r / 2, c = h = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, u), e.lineTo(h, d), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const i = this.ctx, s = this._computeLabelArea();
    s && Xn(i, s);
    const o = this.getLabelItems(t);
    for (const a of o) {
      const r = a.options, l = a.font, c = a.label, h = a.textOffset;
      _e(i, c, 0, h, l, r);
    }
    s && Gn(i);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: i, reverse: s } } = this;
    if (!i.display)
      return;
    const o = vt(i.font), a = Tt(i.padding), r = i.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || K(e) ? (l += a.bottom, rt(i.text) && (l += o.lineHeight * (i.text.length - 1))) : l += a.top;
    const { titleX: c, titleY: h, maxWidth: u, rotation: d } = jh(this, l, e, r);
    _e(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: u,
      rotation: d,
      textAlign: zh(r, e, s),
      textBaseline: "middle",
      translation: [
        c,
        h
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, i = U(t.grid && t.grid.z, -1), s = U(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== we.prototype.draw ? [
      {
        z: e,
        draw: (o) => {
          this.draw(o);
        }
      }
    ] : [
      {
        z: i,
        draw: (o) => {
          this.drawBackground(), this.drawGrid(o), this.drawTitle();
        }
      },
      {
        z: s,
        draw: () => {
          this.drawBorder();
        }
      },
      {
        z: e,
        draw: (o) => {
          this.drawLabels(o);
        }
      }
    ];
  }
  getMatchingVisibleMetas(t) {
    const e = this.chart.getSortedVisibleDatasetMetas(), i = this.axis + "AxisID", s = [];
    let o, a;
    for (o = 0, a = e.length; o < a; ++o) {
      const r = e[o];
      r[i] === this.id && (!t || r.type === t) && s.push(r);
    }
    return s;
  }
  _resolveTickFontOptions(t) {
    const e = this.options.ticks.setContext(this.getContext(t));
    return vt(e.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class Cn {
  constructor(t, e, i) {
    this.type = t, this.scope = e, this.override = i, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let i;
    $h(e) && (i = this.register(e));
    const s = this.items, o = t.id, a = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in s || (s[o] = t, Wh(t, a, i), this.override && lt.override(t.id, t.overrides)), a;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, i = t.id, s = this.scope;
    i in e && delete e[i], s && i in lt[s] && (delete lt[s][i], this.override && delete xe[i]);
  }
}
function Wh(n, t, e) {
  const i = tn(/* @__PURE__ */ Object.create(null), [
    e ? lt.get(e) : {},
    lt.get(t),
    n.defaults
  ]);
  lt.set(t, i), n.defaultRoutes && Hh(t, n.defaultRoutes), n.descriptors && lt.describe(t, n.descriptors);
}
function Hh(n, t) {
  Object.keys(t).forEach((e) => {
    const i = e.split("."), s = i.pop(), o = [
      n
    ].concat(i).join("."), a = t[e].split("."), r = a.pop(), l = a.join(".");
    lt.route(o, s, l, r);
  });
}
function $h(n) {
  return "id" in n && "defaults" in n;
}
class Uh {
  constructor() {
    this.controllers = new Cn(he, "datasets", !0), this.elements = new Cn(te, "elements"), this.plugins = new Cn(Object, "plugins"), this.scales = new Cn(we, "scales"), this._typedRegistries = [
      this.controllers,
      this.scales,
      this.elements
    ];
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, e, i) {
    [
      ...e
    ].forEach((s) => {
      const o = i || this._getRegistryForType(s);
      i || o.isForType(s) || o === this.plugins && s.id ? this._exec(t, o, s) : et(s, (a) => {
        const r = i || this._getRegistryForType(a);
        this._exec(t, r, a);
      });
    });
  }
  _exec(t, e, i) {
    const s = Bi(t);
    it(i["before" + s], [], i), e[t](i), it(i["after" + s], [], i);
  }
  _getRegistryForType(t) {
    for (let e = 0; e < this._typedRegistries.length; e++) {
      const i = this._typedRegistries[e];
      if (i.isForType(t))
        return i;
    }
    return this.plugins;
  }
  _get(t, e, i) {
    const s = e.get(t);
    if (s === void 0)
      throw new Error('"' + t + '" is not a registered ' + i + ".");
    return s;
  }
}
var Wt = /* @__PURE__ */ new Uh();
class Yh {
  constructor() {
    this._init = void 0;
  }
  notify(t, e, i, s) {
    if (e === "beforeInit" && (this._init = this._createDescriptors(t, !0), this._notify(this._init, t, "install")), this._init === void 0)
      return;
    const o = s ? this._descriptors(t).filter(s) : this._descriptors(t), a = this._notify(o, t, e, i);
    return e === "afterDestroy" && (this._notify(o, t, "stop"), this._notify(this._init, t, "uninstall"), this._init = void 0), a;
  }
  _notify(t, e, i, s) {
    s = s || {};
    for (const o of t) {
      const a = o.plugin, r = a[i], l = [
        e,
        s,
        o.options
      ];
      if (it(r, l, a) === !1 && s.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    G(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const i = t && t.config, s = U(i.options && i.options.plugins, {}), o = Xh(i);
    return s === !1 && !e ? [] : qh(t, o, s, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], i = this._cache, s = (o, a) => o.filter((r) => !a.some((l) => r.plugin.id === l.plugin.id));
    this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
  }
}
function Xh(n) {
  const t = {}, e = [], i = Object.keys(Wt.plugins.items);
  for (let o = 0; o < i.length; o++)
    e.push(Wt.getPlugin(i[o]));
  const s = n.plugins || [];
  for (let o = 0; o < s.length; o++) {
    const a = s[o];
    e.indexOf(a) === -1 && (e.push(a), t[a.id] = !0);
  }
  return {
    plugins: e,
    localIds: t
  };
}
function Gh(n, t) {
  return !t && n === !1 ? null : n === !0 ? {} : n;
}
function qh(n, { plugins: t, localIds: e }, i, s) {
  const o = [], a = n.getContext();
  for (const r of t) {
    const l = r.id, c = Gh(i[l], s);
    c !== null && o.push({
      plugin: r,
      options: Kh(n.config, {
        plugin: r,
        local: e[l]
      }, c, a)
    });
  }
  return o;
}
function Kh(n, { plugin: t, local: e }, i, s) {
  const o = n.pluginScopeKeys(t), a = n.getOptionScopes(i, o);
  return e && t.defaults && a.push(t.defaults), n.createResolver(a, s, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function wi(n, t) {
  const e = lt.datasets[n] || {};
  return ((t.datasets || {})[n] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function Zh(n, t) {
  let e = n;
  return n === "_index_" ? e = t : n === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function Jh(n, t) {
  return n === t ? "_index_" : "_value_";
}
function Ys(n) {
  if (n === "x" || n === "y" || n === "r")
    return n;
}
function Qh(n) {
  if (n === "top" || n === "bottom")
    return "x";
  if (n === "left" || n === "right")
    return "y";
}
function ki(n, ...t) {
  if (Ys(n))
    return n;
  for (const e of t) {
    const i = e.axis || Qh(e.position) || n.length > 1 && Ys(n[0].toLowerCase());
    if (i)
      return i;
  }
  throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`);
}
function Xs(n, t, e) {
  if (e[t + "AxisID"] === n)
    return {
      axis: t
    };
}
function tu(n, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((i) => i.xAxisID === n || i.yAxisID === n);
    if (e.length)
      return Xs(n, "x", e[0]) || Xs(n, "y", e[0]);
  }
  return {};
}
function eu(n, t) {
  const e = xe[n.type] || {
    scales: {}
  }, i = t.scales || {}, s = wi(n.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(i).forEach((a) => {
    const r = i[a];
    if (!K(r))
      return console.error(`Invalid scale configuration for scale: ${a}`);
    if (r._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${a}`);
    const l = ki(a, r, tu(a, n), lt.scales[r.type]), c = Jh(l, s), h = e.scales || {};
    o[a] = qe(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      r,
      h[l],
      h[c]
    ]);
  }), n.data.datasets.forEach((a) => {
    const r = a.type || n.type, l = a.indexAxis || wi(r, t), h = (xe[r] || {}).scales || {};
    Object.keys(h).forEach((u) => {
      const d = Zh(u, l), f = a[d + "AxisID"] || d;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), qe(o[f], [
        {
          axis: d
        },
        i[f],
        h[u]
      ]);
    });
  }), Object.keys(o).forEach((a) => {
    const r = o[a];
    qe(r, [
      lt.scales[r.type],
      lt.scale
    ]);
  }), o;
}
function Ta(n) {
  const t = n.options || (n.options = {});
  t.plugins = U(t.plugins, {}), t.scales = eu(n, t);
}
function Pa(n) {
  return n = n || {}, n.datasets = n.datasets || [], n.labels = n.labels || [], n;
}
function nu(n) {
  return n = n || {}, n.data = Pa(n.data), Ta(n), n;
}
const Gs = /* @__PURE__ */ new Map(), La = /* @__PURE__ */ new Set();
function Tn(n, t) {
  let e = Gs.get(n);
  return e || (e = t(), Gs.set(n, e), La.add(e)), e;
}
const He = (n, t, e) => {
  const i = re(t, e);
  i !== void 0 && n.add(i);
};
class iu {
  constructor(t) {
    this._config = nu(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = Pa(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), Ta(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Tn(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Tn(`${t}.transition.${e}`, () => [
      [
        `datasets.${t}.transitions.${e}`,
        `transitions.${e}`
      ],
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetElementScopeKeys(t, e) {
    return Tn(`${t}-${e}`, () => [
      [
        `datasets.${t}.elements.${e}`,
        `datasets.${t}`,
        `elements.${e}`,
        ""
      ]
    ]);
  }
  pluginScopeKeys(t) {
    const e = t.id, i = this.type;
    return Tn(`${i}-plugin-${e}`, () => [
      [
        `plugins.${e}`,
        ...t.additionalOptionScopes || []
      ]
    ]);
  }
  _cachedScopes(t, e) {
    const i = this._scopeCache;
    let s = i.get(t);
    return (!s || e) && (s = /* @__PURE__ */ new Map(), i.set(t, s)), s;
  }
  getOptionScopes(t, e, i) {
    const { options: s, type: o } = this, a = this._cachedScopes(t, i), r = a.get(e);
    if (r)
      return r;
    const l = /* @__PURE__ */ new Set();
    e.forEach((h) => {
      t && (l.add(t), h.forEach((u) => He(l, t, u))), h.forEach((u) => He(l, s, u)), h.forEach((u) => He(l, xe[o] || {}, u)), h.forEach((u) => He(l, lt, u)), h.forEach((u) => He(l, _i, u));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), La.has(e) && a.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      xe[e] || {},
      lt.datasets[e] || {},
      {
        type: e
      },
      lt,
      _i
    ];
  }
  resolveNamedOptions(t, e, i, s = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: a, subPrefixes: r } = qs(this._resolverCache, t, s);
    let l = a;
    if (ou(a, e)) {
      o.$shared = !1, i = le(i) ? i() : i;
      const c = this.createResolver(t, i, r);
      l = De(a, i, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, i = [
    ""
  ], s) {
    const { resolver: o } = qs(this._resolverCache, t, i);
    return K(e) ? De(o, e, void 0, s) : o;
  }
}
function qs(n, t, e) {
  let i = n.get(t);
  i || (i = /* @__PURE__ */ new Map(), n.set(t, i));
  const s = e.join();
  let o = i.get(s);
  return o || (o = {
    resolver: $i(t, e),
    subPrefixes: e.filter((r) => !r.toLowerCase().includes("hover"))
  }, i.set(s, o)), o;
}
const su = (n) => K(n) && Object.getOwnPropertyNames(n).some((t) => le(n[t]));
function ou(n, t) {
  const { isScriptable: e, isIndexable: i } = ra(n);
  for (const s of t) {
    const o = e(s), a = i(s), r = (a || o) && n[s];
    if (o && (le(r) || su(r)) || a && rt(r))
      return !0;
  }
  return !1;
}
var au = "4.5.1";
const ru = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Ks(n, t) {
  return n === "top" || n === "bottom" || ru.indexOf(n) === -1 && t === "x";
}
function Zs(n, t) {
  return function(e, i) {
    return e[n] === i[n] ? e[t] - i[t] : e[n] - i[n];
  };
}
function Js(n) {
  const t = n.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), it(e && e.onComplete, [
    n
  ], t);
}
function lu(n) {
  const t = n.chart, e = t.options.animation;
  it(e && e.onProgress, [
    n
  ], t);
}
function Da(n) {
  return Xi() && typeof n == "string" ? n = document.getElementById(n) : n && n.length && (n = n[0]), n && n.canvas && (n = n.canvas), n;
}
const In = {}, Qs = (n) => {
  const t = Da(n);
  return Object.values(In).filter((e) => e.canvas === t).pop();
};
function cu(n, t, e) {
  const i = Object.keys(n);
  for (const s of i) {
    const o = +s;
    if (o >= t) {
      const a = n[s];
      delete n[s], (e > 0 || o > t) && (n[o + e] = a);
    }
  }
}
function hu(n, t, e, i) {
  return !e || n.type === "mouseout" ? null : i ? t : n;
}
class Oi {
  static defaults = lt;
  static instances = In;
  static overrides = xe;
  static registry = Wt;
  static version = au;
  static getChart = Qs;
  static register(...t) {
    Wt.add(...t), to();
  }
  static unregister(...t) {
    Wt.remove(...t), to();
  }
  constructor(t, e) {
    const i = this.config = new iu(e), s = Da(t), o = Qs(s);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const a = i.createResolver(i.chartOptionScopes(), this.getContext());
    this.platform = new (i.platform || Th(s))(), this.platform.updateConfig(i);
    const r = this.platform.acquireContext(s, a.aspectRatio), l = r && r.canvas, c = l && l.height, h = l && l.width;
    if (this.id = ol(), this.ctx = r, this.canvas = l, this.width = h, this.height = c, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Yh(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = Sl((u) => this.update(u), a.resizeDelay || 0), this._dataChanges = [], In[this.id] = this, !r || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Xt.listen(this, "complete", Js), Xt.listen(this, "progress", lu), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: i, height: s, _aspectRatio: o } = this;
    return G(t) ? e && o ? o : s ? i / s : null : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  get registry() {
    return Wt;
  }
  _initialize() {
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : Ss(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return vs(this.canvas, this.ctx), this;
  }
  stop() {
    return Xt.stop(this), this;
  }
  resize(t, e) {
    Xt.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const i = this.options, s = this.canvas, o = i.maintainAspectRatio && this.aspectRatio, a = this.platform.getMaximumSize(s, t, e, o), r = i.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = a.width, this.height = a.height, this._aspectRatio = this.aspectRatio, Ss(this, r, !0) && (this.notifyPlugins("resize", {
      size: a
    }), it(i.onResize, [
      this,
      a
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    et(e, (i, s) => {
      i.id = s;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, i = this.scales, s = Object.keys(i).reduce((a, r) => (a[r] = !1, a), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((a) => {
      const r = e[a], l = ki(a, r), c = l === "r", h = l === "x";
      return {
        options: r,
        dposition: c ? "chartArea" : h ? "bottom" : "left",
        dtype: c ? "radialLinear" : h ? "category" : "linear"
      };
    }))), et(o, (a) => {
      const r = a.options, l = r.id, c = ki(l, r), h = U(r.type, a.dtype);
      (r.position === void 0 || Ks(r.position, c) !== Ks(a.dposition)) && (r.position = a.dposition), s[l] = !0;
      let u = null;
      if (l in i && i[l].type === h)
        u = i[l];
      else {
        const d = Wt.getScale(h);
        u = new d({
          id: l,
          type: h,
          ctx: this.ctx,
          chart: this
        }), i[u.id] = u;
      }
      u.init(r, t);
    }), et(s, (a, r) => {
      a || delete i[r];
    }), et(i, (a) => {
      Ct.configure(this, a, a.options), Ct.addBox(this, a);
    });
  }
  _updateMetasets() {
    const t = this._metasets, e = this.data.datasets.length, i = t.length;
    if (t.sort((s, o) => s.index - o.index), i > e) {
      for (let s = e; s < i; ++s)
        this._destroyDatasetMeta(s);
      t.splice(e, i - e);
    }
    this._sortedMetasets = t.slice(0).sort(Zs("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const { _metasets: t, data: { datasets: e } } = this;
    t.length > e.length && delete this._stacks, t.forEach((i, s) => {
      e.filter((o) => o === i._dataset).length === 0 && this._destroyDatasetMeta(s);
    });
  }
  buildOrUpdateControllers() {
    const t = [], e = this.data.datasets;
    let i, s;
    for (this._removeUnreferencedMetasets(), i = 0, s = e.length; i < s; i++) {
      const o = e[i];
      let a = this.getDatasetMeta(i);
      const r = o.type || this.config.type;
      if (a.type && a.type !== r && (this._destroyDatasetMeta(i), a = this.getDatasetMeta(i)), a.type = r, a.indexAxis = o.indexAxis || wi(r, this.options), a.order = o.order || 0, a.index = i, a.label = "" + o.label, a.visible = this.isDatasetVisible(i), a.controller)
        a.controller.updateIndex(i), a.controller.linkScales();
      else {
        const l = Wt.getController(r), { datasetElementType: c, dataElementType: h } = lt.datasets[r];
        Object.assign(l, {
          dataElementType: Wt.getElement(h),
          datasetElementType: c && Wt.getElement(c)
        }), a.controller = new l(this, i), t.push(a.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    et(this.data.datasets, (t, e) => {
      this.getDatasetMeta(e).controller.reset();
    }, this);
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const e = this.config;
    e.update();
    const i = this._options = e.createResolver(e.chartOptionScopes(), this.getContext()), s = this._animationsDisabled = !i.animation;
    if (this._updateScales(), this._checkEventBindings(), this._updateHiddenIndices(), this._plugins.invalidate(), this.notifyPlugins("beforeUpdate", {
      mode: t,
      cancelable: !0
    }) === !1)
      return;
    const o = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let a = 0;
    for (let c = 0, h = this.data.datasets.length; c < h; c++) {
      const { controller: u } = this.getDatasetMeta(c), d = !s && o.indexOf(u) === -1;
      u.buildOrUpdateElements(d), a = Math.max(+u.getMaxOverflow(), a);
    }
    a = this._minPadding = i.layout.autoPadding ? a : 0, this._updateLayout(a), s || et(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Zs("z", "_idx"));
    const { _active: r, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render();
  }
  _updateScales() {
    et(this.scales, (t) => {
      Ct.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), i = new Set(t.events);
    (!hs(e, i) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: i, start: s, count: o } of e) {
      const a = i === "_removeElements" ? -o : o;
      cu(t, s, a);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, i = (o) => new Set(t.filter((a) => a[0] === o).map((a, r) => r + "," + a.splice(1).join(","))), s = i(0);
    for (let o = 1; o < e; o++)
      if (!hs(s, i(o)))
        return;
    return Array.from(s).map((o) => o.split(",")).map((o) => ({
      method: o[1],
      start: +o[2],
      count: +o[3]
    }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", {
      cancelable: !0
    }) === !1)
      return;
    Ct.update(this, this.width, this.height, t);
    const e = this.chartArea, i = e.width <= 0 || e.height <= 0;
    this._layers = [], et(this.boxes, (s) => {
      i && s.position === "chartArea" || (s.configure && s.configure(), this._layers.push(...s._layers()));
    }, this), this._layers.forEach((s, o) => {
      s._idx = o;
    }), this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (this.notifyPlugins("beforeDatasetsUpdate", {
      mode: t,
      cancelable: !0
    }) !== !1) {
      for (let e = 0, i = this.data.datasets.length; e < i; ++e)
        this.getDatasetMeta(e).controller.configure();
      for (let e = 0, i = this.data.datasets.length; e < i; ++e)
        this._updateDataset(e, le(t) ? t({
          datasetIndex: e
        }) : t);
      this.notifyPlugins("afterDatasetsUpdate", {
        mode: t
      });
    }
  }
  _updateDataset(t, e) {
    const i = this.getDatasetMeta(t), s = {
      meta: i,
      index: t,
      mode: e,
      cancelable: !0
    };
    this.notifyPlugins("beforeDatasetUpdate", s) !== !1 && (i.controller._update(e), s.cancelable = !1, this.notifyPlugins("afterDatasetUpdate", s));
  }
  render() {
    this.notifyPlugins("beforeRender", {
      cancelable: !0
    }) !== !1 && (Xt.has(this) ? this.attached && !Xt.running(this) && Xt.start(this) : (this.draw(), Js({
      chart: this
    })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: i, height: s } = this._resizeBeforeDraw;
      this._resizeBeforeDraw = null, this._resize(i, s);
    }
    if (this.clear(), this.width <= 0 || this.height <= 0 || this.notifyPlugins("beforeDraw", {
      cancelable: !0
    }) === !1)
      return;
    const e = this._layers;
    for (t = 0; t < e.length && e[t].z <= 0; ++t)
      e[t].draw(this.chartArea);
    for (this._drawDatasets(); t < e.length; ++t)
      e[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const e = this._sortedMetasets, i = [];
    let s, o;
    for (s = 0, o = e.length; s < o; ++s) {
      const a = e[s];
      (!t || a.visible) && i.push(a);
    }
    return i;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", {
      cancelable: !0
    }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let e = t.length - 1; e >= 0; --e)
      this._drawDataset(t[e]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const e = this.ctx, i = {
      meta: t,
      index: t.index,
      cancelable: !0
    }, s = ya(this, t);
    this.notifyPlugins("beforeDatasetDraw", i) !== !1 && (s && Xn(e, s), t.controller.draw(), s && Gn(e), i.cancelable = !1, this.notifyPlugins("afterDatasetDraw", i));
  }
  isPointInArea(t) {
    return Qt(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, i, s) {
    const o = rh.modes[e];
    return typeof o == "function" ? o(this, t, i, s) : [];
  }
  getDatasetMeta(t) {
    const e = this.data.datasets[t], i = this._metasets;
    let s = i.filter((o) => o && o._dataset === e).pop();
    return s || (s = {
      type: null,
      data: [],
      dataset: null,
      controller: null,
      hidden: null,
      xAxisID: null,
      yAxisID: null,
      order: e && e.order || 0,
      index: t,
      _dataset: e,
      _parsed: [],
      _sorted: !1
    }, i.push(s)), s;
  }
  getContext() {
    return this.$context || (this.$context = ce(null, {
      chart: this,
      type: "chart"
    }));
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const e = this.data.datasets[t];
    if (!e)
      return !1;
    const i = this.getDatasetMeta(t);
    return typeof i.hidden == "boolean" ? !i.hidden : !e.hidden;
  }
  setDatasetVisibility(t, e) {
    const i = this.getDatasetMeta(t);
    i.hidden = !e;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, e, i) {
    const s = i ? "show" : "hide", o = this.getDatasetMeta(t), a = o.controller._resolveAnimations(void 0, s);
    en(e) ? (o.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), a.update(o, {
      visible: i
    }), this.update((r) => r.datasetIndex === t ? s : void 0));
  }
  hide(t, e) {
    this._updateVisibility(t, e, !1);
  }
  show(t, e) {
    this._updateVisibility(t, e, !0);
  }
  _destroyDatasetMeta(t) {
    const e = this._metasets[t];
    e && e.controller && e.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, e;
    for (this.stop(), Xt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), vs(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete In[this.id], this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(), this.options.responsive ? this.bindResponsiveEvents() : this.attached = !0;
  }
  bindUserEvents() {
    const t = this._listeners, e = this.platform, i = (o, a) => {
      e.addEventListener(this, o, a), t[o] = a;
    }, s = (o, a, r) => {
      o.offsetX = a, o.offsetY = r, this._eventHandler(o);
    };
    et(this.options.events, (o) => i(o, s));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners, e = this.platform, i = (l, c) => {
      e.addEventListener(this, l, c), t[l] = c;
    }, s = (l, c) => {
      t[l] && (e.removeEventListener(this, l, c), delete t[l]);
    }, o = (l, c) => {
      this.canvas && this.resize(l, c);
    };
    let a;
    const r = () => {
      s("attach", r), this.attached = !0, this.resize(), i("resize", o), i("detach", a);
    };
    a = () => {
      this.attached = !1, s("resize", o), this._stop(), this._resize(0, 0), i("attach", r);
    }, e.isAttached(this.canvas) ? r() : a();
  }
  unbindEvents() {
    et(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, et(this._responsiveListeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._responsiveListeners = void 0;
  }
  updateHoverStyle(t, e, i) {
    const s = i ? "set" : "remove";
    let o, a, r, l;
    for (e === "dataset" && (o = this.getDatasetMeta(t[0].datasetIndex), o.controller["_" + s + "DatasetHoverStyle"]()), r = 0, l = t.length; r < l; ++r) {
      a = t[r];
      const c = a && this.getDatasetMeta(a.datasetIndex).controller;
      c && c[s + "HoverStyle"](a.element, a.datasetIndex, a.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const e = this._active || [], i = t.map(({ datasetIndex: o, index: a }) => {
      const r = this.getDatasetMeta(o);
      if (!r)
        throw new Error("No dataset found at index " + o);
      return {
        datasetIndex: o,
        element: r.data[a],
        index: a
      };
    });
    !Vn(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e));
  }
  notifyPlugins(t, e, i) {
    return this._plugins.notify(this, t, e, i);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, i) {
    const s = this.options.hover, o = (l, c) => l.filter((h) => !c.some((u) => h.datasetIndex === u.datasetIndex && h.index === u.index)), a = o(e, t), r = i ? t : o(t, e);
    a.length && this.updateHoverStyle(a, s.mode, !1), r.length && s.mode && this.updateHoverStyle(r, s.mode, !0);
  }
  _eventHandler(t, e) {
    const i = {
      event: t,
      replay: e,
      cancelable: !0,
      inChartArea: this.isPointInArea(t)
    }, s = (a) => (a.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", i, s) === !1)
      return;
    const o = this._handleEvent(t, e, i.inChartArea);
    return i.cancelable = !1, this.notifyPlugins("afterEvent", i, s), (o || i.changed) && this.render(), this;
  }
  _handleEvent(t, e, i) {
    const { _active: s = [], options: o } = this, a = e, r = this._getActiveElements(t, s, i, a), l = ul(t), c = hu(t, this._lastEvent, i, l);
    i && (this._lastEvent = null, it(o.onHover, [
      t,
      r,
      this
    ], this), l && it(o.onClick, [
      t,
      r,
      this
    ], this));
    const h = !Vn(r, s);
    return (h || e) && (this._active = r, this._updateHoverStyles(r, s, e)), this._lastEvent = c, h;
  }
  _getActiveElements(t, e, i, s) {
    if (t.type === "mouseout")
      return [];
    if (!i)
      return e;
    const o = this.options.hover;
    return this.getElementsAtEventForMode(t, o.mode, o, s);
  }
}
function to() {
  return et(Oi.instances, (n) => n._plugins.invalidate());
}
function uu(n, t, e) {
  const { startAngle: i, x: s, y: o, outerRadius: a, innerRadius: r, options: l } = t, { borderWidth: c, borderJoinStyle: h } = l, u = Math.min(c / a, Mt(i - e));
  if (n.beginPath(), n.arc(s, o, a - c / 2, i + u / 2, e - u / 2), r > 0) {
    const d = Math.min(c / r, Mt(i - e));
    n.arc(s, o, r + c / 2, e - d / 2, i + d / 2, !0);
  } else {
    const d = Math.min(c / 2, a * Mt(i - e));
    if (h === "round")
      n.arc(s, o, d, e - J / 2, i + J / 2, !0);
    else if (h === "bevel") {
      const f = 2 * d * d, g = -f * Math.cos(e + J / 2) + s, p = -f * Math.sin(e + J / 2) + o, m = f * Math.cos(i + J / 2) + s, b = f * Math.sin(i + J / 2) + o;
      n.lineTo(g, p), n.lineTo(m, b);
    }
  }
  n.closePath(), n.moveTo(0, 0), n.rect(0, 0, n.canvas.width, n.canvas.height), n.clip("evenodd");
}
function du(n, t, e) {
  const { startAngle: i, pixelMargin: s, x: o, y: a, outerRadius: r, innerRadius: l } = t;
  let c = s / r;
  n.beginPath(), n.arc(o, a, r, i - c, e + c), l > s ? (c = s / l, n.arc(o, a, l, e + c, i - c, !0)) : n.arc(o, a, s, e + bt, i - bt), n.closePath(), n.clip();
}
function fu(n) {
  return Hi(n, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function gu(n, t, e, i) {
  const s = fu(n.options.borderRadius), o = (e - t) / 2, a = Math.min(o, i * t / 2), r = (l) => {
    const c = (e - Math.min(o, l)) * i / 2;
    return St(l, 0, Math.min(o, c));
  };
  return {
    outerStart: r(s.outerStart),
    outerEnd: r(s.outerEnd),
    innerStart: St(s.innerStart, 0, a),
    innerEnd: St(s.innerEnd, 0, a)
  };
}
function Ce(n, t, e, i) {
  return {
    x: e + n * Math.cos(t),
    y: i + n * Math.sin(t)
  };
}
function Wn(n, t, e, i, s, o) {
  const { x: a, y: r, startAngle: l, pixelMargin: c, innerRadius: h } = t, u = Math.max(t.outerRadius + i + e - c, 0), d = h > 0 ? h + i + e + c : 0;
  let f = 0;
  const g = s - l;
  if (i) {
    const E = h > 0 ? h - i : 0, F = u > 0 ? u - i : 0, y = (E + F) / 2, S = y !== 0 ? g * y / (y + i) : g;
    f = (g - S) / 2;
  }
  const p = Math.max(1e-3, g * u - e / J) / u, m = (g - p) / 2, b = l + m + f, _ = s - m - f, { outerStart: P, outerEnd: k, innerStart: v, innerEnd: C } = gu(t, d, u, _ - b), w = u - P, T = u - k, O = b + P / w, A = _ - k / T, B = d + v, N = d + C, D = b + v / B, I = _ - C / N;
  if (n.beginPath(), o) {
    const E = (O + A) / 2;
    if (n.arc(a, r, u, O, E), n.arc(a, r, u, E, A), k > 0) {
      const x = Ce(T, A, a, r);
      n.arc(x.x, x.y, k, A, _ + bt);
    }
    const F = Ce(N, _, a, r);
    if (n.lineTo(F.x, F.y), C > 0) {
      const x = Ce(N, I, a, r);
      n.arc(x.x, x.y, C, _ + bt, I + Math.PI);
    }
    const y = (_ - C / d + (b + v / d)) / 2;
    if (n.arc(a, r, d, _ - C / d, y, !0), n.arc(a, r, d, y, b + v / d, !0), v > 0) {
      const x = Ce(B, D, a, r);
      n.arc(x.x, x.y, v, D + Math.PI, b - bt);
    }
    const S = Ce(w, b, a, r);
    if (n.lineTo(S.x, S.y), P > 0) {
      const x = Ce(w, O, a, r);
      n.arc(x.x, x.y, P, b - bt, O);
    }
  } else {
    n.moveTo(a, r);
    const E = Math.cos(O) * u + a, F = Math.sin(O) * u + r;
    n.lineTo(E, F);
    const y = Math.cos(A) * u + a, S = Math.sin(A) * u + r;
    n.lineTo(y, S);
  }
  n.closePath();
}
function pu(n, t, e, i, s) {
  const { fullCircles: o, startAngle: a, circumference: r } = t;
  let l = t.endAngle;
  if (o) {
    Wn(n, t, e, i, l, s);
    for (let c = 0; c < o; ++c)
      n.fill();
    isNaN(r) || (l = a + (r % at || at));
  }
  return Wn(n, t, e, i, l, s), n.fill(), l;
}
function mu(n, t, e, i, s) {
  const { fullCircles: o, startAngle: a, circumference: r, options: l } = t, { borderWidth: c, borderJoinStyle: h, borderDash: u, borderDashOffset: d, borderRadius: f } = l, g = l.borderAlign === "inner";
  if (!c)
    return;
  n.setLineDash(u || []), n.lineDashOffset = d, g ? (n.lineWidth = c * 2, n.lineJoin = h || "round") : (n.lineWidth = c, n.lineJoin = h || "bevel");
  let p = t.endAngle;
  if (o) {
    Wn(n, t, e, i, p, s);
    for (let m = 0; m < o; ++m)
      n.stroke();
    isNaN(r) || (p = a + (r % at || at));
  }
  g && du(n, t, p), l.selfJoin && p - a >= J && f === 0 && h !== "miter" && uu(n, t, p), o || (Wn(n, t, e, i, p, s), n.stroke());
}
class bu extends te {
  static id = "arc";
  static defaults = {
    borderAlign: "center",
    borderColor: "#fff",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: void 0,
    borderRadius: 0,
    borderWidth: 2,
    offset: 0,
    spacing: 0,
    angle: void 0,
    circular: !0,
    selfJoin: !1
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor"
  };
  static descriptors = {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash"
  };
  circumference;
  endAngle;
  fullCircles;
  innerRadius;
  outerRadius;
  pixelMargin;
  startAngle;
  constructor(t) {
    super(), this.options = void 0, this.circumference = void 0, this.startAngle = void 0, this.endAngle = void 0, this.innerRadius = void 0, this.outerRadius = void 0, this.pixelMargin = 0, this.fullCircles = 0, t && Object.assign(this, t);
  }
  inRange(t, e, i) {
    const s = this.getProps([
      "x",
      "y"
    ], i), { angle: o, distance: a } = Zo(s, {
      x: t,
      y: e
    }), { startAngle: r, endAngle: l, innerRadius: c, outerRadius: h, circumference: u } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], i), d = (this.options.spacing + this.options.borderWidth) / 2, f = U(u, l - r), g = nn(o, r, l) && r !== l, p = f >= at || g, m = Zt(a, c + d, h + d);
    return p && m;
  }
  getCenterPoint(t) {
    const { x: e, y: i, startAngle: s, endAngle: o, innerRadius: a, outerRadius: r } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], t), { offset: l, spacing: c } = this.options, h = (s + o) / 2, u = (a + r + c + l) / 2;
    return {
      x: e + Math.cos(h) * u,
      y: i + Math.sin(h) * u
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: e, circumference: i } = this, s = (e.offset || 0) / 4, o = (e.spacing || 0) / 2, a = e.circular;
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = i > at ? Math.floor(i / at) : 0, i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const r = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(r) * s, Math.sin(r) * s);
    const l = 1 - Math.sin(Math.min(J, i || 0)), c = s * l;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, pu(t, this, c, o, a), mu(t, this, c, o, a), t.restore();
  }
}
function Aa(n, t, e = t) {
  n.lineCap = U(e.borderCapStyle, t.borderCapStyle), n.setLineDash(U(e.borderDash, t.borderDash)), n.lineDashOffset = U(e.borderDashOffset, t.borderDashOffset), n.lineJoin = U(e.borderJoinStyle, t.borderJoinStyle), n.lineWidth = U(e.borderWidth, t.borderWidth), n.strokeStyle = U(e.borderColor, t.borderColor);
}
function yu(n, t, e) {
  n.lineTo(e.x, e.y);
}
function vu(n) {
  return n.stepped ? El : n.tension || n.cubicInterpolationMode === "monotone" ? Il : yu;
}
function Ra(n, t, e = {}) {
  const i = n.length, { start: s = 0, end: o = i - 1 } = e, { start: a, end: r } = t, l = Math.max(s, a), c = Math.min(o, r), h = s < a && o < a || s > r && o > r;
  return {
    count: i,
    start: l,
    loop: t.loop,
    ilen: c < l && !h ? i + c - l : c - l
  };
}
function xu(n, t, e, i) {
  const { points: s, options: o } = t, { count: a, start: r, loop: l, ilen: c } = Ra(s, e, i), h = vu(o);
  let { move: u = !0, reverse: d } = i || {}, f, g, p;
  for (f = 0; f <= c; ++f)
    g = s[(r + (d ? c - f : f)) % a], !g.skip && (u ? (n.moveTo(g.x, g.y), u = !1) : h(n, p, g, d, o.stepped), p = g);
  return l && (g = s[(r + (d ? c : 0)) % a], h(n, p, g, d, o.stepped)), !!l;
}
function _u(n, t, e, i) {
  const s = t.points, { count: o, start: a, ilen: r } = Ra(s, e, i), { move: l = !0, reverse: c } = i || {};
  let h = 0, u = 0, d, f, g, p, m, b;
  const _ = (k) => (a + (c ? r - k : k)) % o, P = () => {
    p !== m && (n.lineTo(h, m), n.lineTo(h, p), n.lineTo(h, b));
  };
  for (l && (f = s[_(0)], n.moveTo(f.x, f.y)), d = 0; d <= r; ++d) {
    if (f = s[_(d)], f.skip)
      continue;
    const k = f.x, v = f.y, C = k | 0;
    C === g ? (v < p ? p = v : v > m && (m = v), h = (u * h + k) / ++u) : (P(), n.lineTo(k, v), g = C, u = 0, p = m = v), b = v;
  }
  P();
}
function Mi(n) {
  const t = n.options, e = t.borderDash && t.borderDash.length;
  return !n._decimated && !n._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? _u : xu;
}
function Su(n) {
  return n.stepped ? fc : n.tension || n.cubicInterpolationMode === "monotone" ? gc : me;
}
function wu(n, t, e, i) {
  let s = t._path;
  s || (s = t._path = new Path2D(), t.path(s, e, i) && s.closePath()), Aa(n, t.options), n.stroke(s);
}
function ku(n, t, e, i) {
  const { segments: s, options: o } = t, a = Mi(t);
  for (const r of s)
    Aa(n, o, r.style), n.beginPath(), a(n, t, r, {
      start: e,
      end: e + i - 1
    }) && n.closePath(), n.stroke();
}
const Ou = typeof Path2D == "function";
function Mu(n, t, e, i) {
  Ou && !t.options.segment ? wu(n, t, e, i) : ku(n, t, e, i);
}
class Zn extends te {
  static id = "line";
  static defaults = {
    borderCapStyle: "butt",
    borderDash: [],
    borderDashOffset: 0,
    borderJoinStyle: "miter",
    borderWidth: 3,
    capBezierPoints: !0,
    cubicInterpolationMode: "default",
    fill: !1,
    spanGaps: !1,
    stepped: !1,
    tension: 0
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  static descriptors = {
    _scriptable: !0,
    _indexable: (t) => t !== "borderDash" && t !== "fill"
  };
  constructor(t) {
    super(), this.animated = !0, this.options = void 0, this._chart = void 0, this._loop = void 0, this._fullLoop = void 0, this._path = void 0, this._points = void 0, this._segments = void 0, this._decimated = !1, this._pointsUpdated = !1, this._datasetIndex = void 0, t && Object.assign(this, t);
  }
  updateControlPoints(t, e) {
    const i = this.options;
    if ((i.tension || i.cubicInterpolationMode === "monotone") && !i.stepped && !this._pointsUpdated) {
      const s = i.spanGaps ? this._loop : this._fullLoop;
      oc(this._points, i, t, s, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = xc(this, this.options.segment));
  }
  first() {
    const t = this.segments, e = this.points;
    return t.length && e[t[0].start];
  }
  last() {
    const t = this.segments, e = this.points, i = t.length;
    return i && e[t[i - 1].end];
  }
  interpolate(t, e) {
    const i = this.options, s = t[e], o = this.points, a = ba(this, {
      property: e,
      start: s,
      end: s
    });
    if (!a.length)
      return;
    const r = [], l = Su(i);
    let c, h;
    for (c = 0, h = a.length; c < h; ++c) {
      const { start: u, end: d } = a[c], f = o[u], g = o[d];
      if (f === g) {
        r.push(f);
        continue;
      }
      const p = Math.abs((s - f[e]) / (g[e] - f[e])), m = l(f, g, p, i.stepped);
      m[e] = t[e], r.push(m);
    }
    return r.length === 1 ? r[0] : r;
  }
  pathSegment(t, e, i) {
    return Mi(this)(t, this, e, i);
  }
  path(t, e, i) {
    const s = this.segments, o = Mi(this);
    let a = this._loop;
    e = e || 0, i = i || this.points.length - e;
    for (const r of s)
      a &= o(t, this, r, {
        start: e,
        end: e + i - 1
      });
    return !!a;
  }
  draw(t, e, i, s) {
    const o = this.options || {};
    (this.points || []).length && o.borderWidth && (t.save(), Mu(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
function eo(n, t, e, i) {
  const s = n.options, { [e]: o } = n.getProps([
    e
  ], i);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class Cu extends te {
  static id = "point";
  parsed;
  skip;
  stop;
  /**
  * @type {any}
  */
  static defaults = {
    borderWidth: 1,
    hitRadius: 1,
    hoverBorderWidth: 1,
    hoverRadius: 4,
    pointStyle: "circle",
    radius: 3,
    rotation: 0
  };
  /**
  * @type {any}
  */
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  constructor(t) {
    super(), this.options = void 0, this.parsed = void 0, this.skip = void 0, this.stop = void 0, t && Object.assign(this, t);
  }
  inRange(t, e, i) {
    const s = this.options, { x: o, y: a } = this.getProps([
      "x",
      "y"
    ], i);
    return Math.pow(t - o, 2) + Math.pow(e - a, 2) < Math.pow(s.hitRadius + s.radius, 2);
  }
  inXRange(t, e) {
    return eo(this, t, "x", e);
  }
  inYRange(t, e) {
    return eo(this, t, "y", e);
  }
  getCenterPoint(t) {
    const { x: e, y: i } = this.getProps([
      "x",
      "y"
    ], t);
    return {
      x: e,
      y: i
    };
  }
  size(t) {
    t = t || this.options || {};
    let e = t.radius || 0;
    e = Math.max(e, e && t.hoverRadius || 0);
    const i = e && t.borderWidth || 0;
    return (e + i) * 2;
  }
  draw(t, e) {
    const i = this.options;
    this.skip || i.radius < 0.1 || !Qt(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, Si(t, i, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
function Ea(n, t) {
  const { x: e, y: i, base: s, width: o, height: a } = n.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let r, l, c, h, u;
  return n.horizontal ? (u = a / 2, r = Math.min(e, s), l = Math.max(e, s), c = i - u, h = i + u) : (u = o / 2, r = e - u, l = e + u, c = Math.min(i, s), h = Math.max(i, s)), {
    left: r,
    top: c,
    right: l,
    bottom: h
  };
}
function oe(n, t, e, i) {
  return n ? 0 : St(t, e, i);
}
function Tu(n, t, e) {
  const i = n.options.borderWidth, s = n.borderSkipped, o = aa(i);
  return {
    t: oe(s.top, o.top, 0, e),
    r: oe(s.right, o.right, 0, t),
    b: oe(s.bottom, o.bottom, 0, e),
    l: oe(s.left, o.left, 0, t)
  };
}
function Pu(n, t, e) {
  const { enableBorderRadius: i } = n.getProps([
    "enableBorderRadius"
  ]), s = n.options.borderRadius, o = ye(s), a = Math.min(t, e), r = n.borderSkipped, l = i || K(s);
  return {
    topLeft: oe(!l || r.top || r.left, o.topLeft, 0, a),
    topRight: oe(!l || r.top || r.right, o.topRight, 0, a),
    bottomLeft: oe(!l || r.bottom || r.left, o.bottomLeft, 0, a),
    bottomRight: oe(!l || r.bottom || r.right, o.bottomRight, 0, a)
  };
}
function Lu(n) {
  const t = Ea(n), e = t.right - t.left, i = t.bottom - t.top, s = Tu(n, e / 2, i / 2), o = Pu(n, e / 2, i / 2);
  return {
    outer: {
      x: t.left,
      y: t.top,
      w: e,
      h: i,
      radius: o
    },
    inner: {
      x: t.left + s.l,
      y: t.top + s.t,
      w: e - s.l - s.r,
      h: i - s.t - s.b,
      radius: {
        topLeft: Math.max(0, o.topLeft - Math.max(s.t, s.l)),
        topRight: Math.max(0, o.topRight - Math.max(s.t, s.r)),
        bottomLeft: Math.max(0, o.bottomLeft - Math.max(s.b, s.l)),
        bottomRight: Math.max(0, o.bottomRight - Math.max(s.b, s.r))
      }
    }
  };
}
function gi(n, t, e, i) {
  const s = t === null, o = e === null, r = n && !(s && o) && Ea(n, i);
  return r && (s || Zt(t, r.left, r.right)) && (o || Zt(e, r.top, r.bottom));
}
function Du(n) {
  return n.topLeft || n.topRight || n.bottomLeft || n.bottomRight;
}
function Au(n, t) {
  n.rect(t.x, t.y, t.w, t.h);
}
function pi(n, t, e = {}) {
  const i = n.x !== e.x ? -t : 0, s = n.y !== e.y ? -t : 0, o = (n.x + n.w !== e.x + e.w ? t : 0) - i, a = (n.y + n.h !== e.y + e.h ? t : 0) - s;
  return {
    x: n.x + i,
    y: n.y + s,
    w: n.w + o,
    h: n.h + a,
    radius: n.radius
  };
}
class Ru extends te {
  static id = "bar";
  static defaults = {
    borderSkipped: "start",
    borderWidth: 0,
    borderRadius: 0,
    inflateAmount: "auto",
    pointStyle: void 0
  };
  static defaultRoutes = {
    backgroundColor: "backgroundColor",
    borderColor: "borderColor"
  };
  constructor(t) {
    super(), this.options = void 0, this.horizontal = void 0, this.base = void 0, this.width = void 0, this.height = void 0, this.inflateAmount = void 0, t && Object.assign(this, t);
  }
  draw(t) {
    const { inflateAmount: e, options: { borderColor: i, backgroundColor: s } } = this, { inner: o, outer: a } = Lu(this), r = Du(a.radius) ? sn : Au;
    t.save(), (a.w !== o.w || a.h !== o.h) && (t.beginPath(), r(t, pi(a, e, o)), t.clip(), r(t, pi(o, -e, a)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), r(t, pi(o, e)), t.fillStyle = s, t.fill(), t.restore();
  }
  inRange(t, e, i) {
    return gi(this, t, e, i);
  }
  inXRange(t, e) {
    return gi(this, t, null, e);
  }
  inYRange(t, e) {
    return gi(this, null, t, e);
  }
  getCenterPoint(t) {
    const { x: e, y: i, base: s, horizontal: o } = this.getProps([
      "x",
      "y",
      "base",
      "horizontal"
    ], t);
    return {
      x: o ? (e + s) / 2 : e,
      y: o ? i : (i + s) / 2
    };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
var Eu = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcElement: bu,
  BarElement: Ru,
  LineElement: Zn,
  PointElement: Cu
});
const Ci = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
  // grey
], no = /* @__PURE__ */ Ci.map((n) => n.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function Ia(n) {
  return Ci[n % Ci.length];
}
function Va(n) {
  return no[n % no.length];
}
function Iu(n, t) {
  return n.borderColor = Ia(t), n.backgroundColor = Va(t), ++t;
}
function Vu(n, t) {
  return n.backgroundColor = n.data.map(() => Ia(t++)), t;
}
function Fu(n, t) {
  return n.backgroundColor = n.data.map(() => Va(t++)), t;
}
function Bu(n) {
  let t = 0;
  return (e, i) => {
    const s = n.getDatasetMeta(i).controller;
    s instanceof qi ? t = Vu(e, t) : s instanceof Sa ? t = Fu(e, t) : s && (t = Iu(e, t));
  };
}
function io(n) {
  let t;
  for (t in n)
    if (n[t].borderColor || n[t].backgroundColor)
      return !0;
  return !1;
}
function Nu(n) {
  return n && (n.borderColor || n.backgroundColor);
}
function zu() {
  return lt.borderColor !== "rgba(0,0,0,0.1)" || lt.backgroundColor !== "rgba(0,0,0,0.1)";
}
var ju = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(n, t, e) {
    if (!e.enabled)
      return;
    const { data: { datasets: i }, options: s } = n.config, { elements: o } = s, a = io(i) || Nu(s) || o && io(o) || zu();
    if (!e.forceOverride && a)
      return;
    const r = Bu(n);
    i.forEach(r);
  }
};
function Wu(n, t, e, i, s) {
  const o = s.samples || i;
  if (o >= e)
    return n.slice(t, t + e);
  const a = [], r = (e - 2) / (o - 2);
  let l = 0;
  const c = t + e - 1;
  let h = t, u, d, f, g, p;
  for (a[l++] = n[h], u = 0; u < o - 2; u++) {
    let m = 0, b = 0, _;
    const P = Math.floor((u + 1) * r) + 1 + t, k = Math.min(Math.floor((u + 2) * r) + 1, e) + t, v = k - P;
    for (_ = P; _ < k; _++)
      m += n[_].x, b += n[_].y;
    m /= v, b /= v;
    const C = Math.floor(u * r) + 1 + t, w = Math.min(Math.floor((u + 1) * r) + 1, e) + t, { x: T, y: O } = n[h];
    for (f = g = -1, _ = C; _ < w; _++)
      g = 0.5 * Math.abs((T - m) * (n[_].y - O) - (T - n[_].x) * (b - O)), g > f && (f = g, d = n[_], p = _);
    a[l++] = d, h = p;
  }
  return a[l++] = n[c], a;
}
function Hu(n, t, e, i) {
  let s = 0, o = 0, a, r, l, c, h, u, d, f, g, p;
  const m = [], b = t + e - 1, _ = n[t].x, k = n[b].x - _;
  for (a = t; a < t + e; ++a) {
    r = n[a], l = (r.x - _) / k * i, c = r.y;
    const v = l | 0;
    if (v === h)
      c < g ? (g = c, u = a) : c > p && (p = c, d = a), s = (o * s + r.x) / ++o;
    else {
      const C = a - 1;
      if (!G(u) && !G(d)) {
        const w = Math.min(u, d), T = Math.max(u, d);
        w !== f && w !== C && m.push({
          ...n[w],
          x: s
        }), T !== f && T !== C && m.push({
          ...n[T],
          x: s
        });
      }
      a > 0 && C !== f && m.push(n[C]), m.push(r), h = v, o = 0, g = p = c, u = d = f = a;
    }
  }
  return m;
}
function Fa(n) {
  if (n._decimated) {
    const t = n._data;
    delete n._decimated, delete n._data, Object.defineProperty(n, "data", {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: t
    });
  }
}
function so(n) {
  n.data.datasets.forEach((t) => {
    Fa(t);
  });
}
function $u(n, t) {
  const e = t.length;
  let i = 0, s;
  const { iScale: o } = n, { min: a, max: r, minDefined: l, maxDefined: c } = o.getUserBounds();
  return l && (i = St(Jt(t, o.axis, a).lo, 0, e - 1)), c ? s = St(Jt(t, o.axis, r).hi + 1, i, e) - i : s = e - i, {
    start: i,
    count: s
  };
}
var Uu = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (n, t, e) => {
    if (!e.enabled) {
      so(n);
      return;
    }
    const i = n.width;
    n.data.datasets.forEach((s, o) => {
      const { _data: a, indexAxis: r } = s, l = n.getDatasetMeta(o), c = a || s.data;
      if (Ye([
        r,
        n.options.indexAxis
      ]) === "y" || !l.controller.supportsDecimation)
        return;
      const h = n.scales[l.xAxisID];
      if (h.type !== "linear" && h.type !== "time" || n.options.parsing)
        return;
      let { start: u, count: d } = $u(l, c);
      const f = e.threshold || 4 * i;
      if (d <= f) {
        Fa(s);
        return;
      }
      G(a) && (s._data = c, delete s.data, Object.defineProperty(s, "data", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this._decimated;
        },
        set: function(p) {
          this._data = p;
        }
      }));
      let g;
      switch (e.algorithm) {
        case "lttb":
          g = Wu(c, u, d, i, e);
          break;
        case "min-max":
          g = Hu(c, u, d, i);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      s._decimated = g;
    });
  },
  destroy(n) {
    so(n);
  }
};
function Yu(n, t, e) {
  const i = n.segments, s = n.points, o = t.points, a = [];
  for (const r of i) {
    let { start: l, end: c } = r;
    c = Jn(l, c, s);
    const h = Ti(e, s[l], s[c], r.loop);
    if (!t.segments) {
      a.push({
        source: r,
        target: h,
        start: s[l],
        end: s[c]
      });
      continue;
    }
    const u = ba(t, h);
    for (const d of u) {
      const f = Ti(e, o[d.start], o[d.end], d.loop), g = ma(r, s, f);
      for (const p of g)
        a.push({
          source: p,
          target: d,
          start: {
            [e]: oo(h, f, "start", Math.max)
          },
          end: {
            [e]: oo(h, f, "end", Math.min)
          }
        });
    }
  }
  return a;
}
function Ti(n, t, e, i) {
  if (i)
    return;
  let s = t[n], o = e[n];
  return n === "angle" && (s = Mt(s), o = Mt(o)), {
    property: n,
    start: s,
    end: o
  };
}
function Xu(n, t) {
  const { x: e = null, y: i = null } = n || {}, s = t.points, o = [];
  return t.segments.forEach(({ start: a, end: r }) => {
    r = Jn(a, r, s);
    const l = s[a], c = s[r];
    i !== null ? (o.push({
      x: l.x,
      y: i
    }), o.push({
      x: c.x,
      y: i
    })) : e !== null && (o.push({
      x: e,
      y: l.y
    }), o.push({
      x: e,
      y: c.y
    }));
  }), o;
}
function Jn(n, t, e) {
  for (; t > n; t--) {
    const i = e[t];
    if (!isNaN(i.x) && !isNaN(i.y))
      break;
  }
  return t;
}
function oo(n, t, e, i) {
  return n && t ? i(n[e], t[e]) : n ? n[e] : t ? t[e] : 0;
}
function Ba(n, t) {
  let e = [], i = !1;
  return rt(n) ? (i = !0, e = n) : e = Xu(n, t), e.length ? new Zn({
    points: e,
    options: {
      tension: 0
    },
    _loop: i,
    _fullLoop: i
  }) : null;
}
function ao(n) {
  return n && n.fill !== !1;
}
function Gu(n, t, e) {
  let s = n[t].fill;
  const o = [
    t
  ];
  let a;
  if (!e)
    return s;
  for (; s !== !1 && o.indexOf(s) === -1; ) {
    if (!ft(s))
      return s;
    if (a = n[s], !a)
      return !1;
    if (a.visible)
      return s;
    o.push(s), s = a.fill;
  }
  return !1;
}
function qu(n, t, e) {
  const i = Qu(n);
  if (K(i))
    return isNaN(i.value) ? !1 : i;
  let s = parseFloat(i);
  return ft(s) && Math.floor(s) === s ? Ku(i[0], t, s, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(i) >= 0 && i;
}
function Ku(n, t, e, i) {
  return (n === "-" || n === "+") && (e = t + e), e === t || e < 0 || e >= i ? !1 : e;
}
function Zu(n, t) {
  let e = null;
  return n === "start" ? e = t.bottom : n === "end" ? e = t.top : K(n) ? e = t.getPixelForValue(n.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function Ju(n, t, e) {
  let i;
  return n === "start" ? i = e : n === "end" ? i = t.options.reverse ? t.min : t.max : K(n) ? i = n.value : i = t.getBaseValue(), i;
}
function Qu(n) {
  const t = n.options, e = t.fill;
  let i = U(e && e.target, e);
  return i === void 0 && (i = !!t.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? "origin" : i;
}
function td(n) {
  const { scale: t, index: e, line: i } = n, s = [], o = i.segments, a = i.points, r = ed(t, e);
  r.push(Ba({
    x: null,
    y: t.bottom
  }, i));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let h = c.start; h <= c.end; h++)
      nd(s, a[h], r);
  }
  return new Zn({
    points: s,
    options: {}
  });
}
function ed(n, t) {
  const e = [], i = n.getMatchingVisibleMetas("line");
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function nd(n, t, e) {
  const i = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s], { first: a, last: r, point: l } = id(o, t, "x");
    if (!(!l || a && r)) {
      if (a)
        i.unshift(l);
      else if (n.push(l), !r)
        break;
    }
  }
  n.push(...i);
}
function id(n, t, e) {
  const i = n.interpolate(t, e);
  if (!i)
    return {};
  const s = i[e], o = n.segments, a = n.points;
  let r = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const h = o[c], u = a[h.start][e], d = a[h.end][e];
    if (Zt(s, u, d)) {
      r = s === u, l = s === d;
      break;
    }
  }
  return {
    first: r,
    last: l,
    point: i
  };
}
class Na {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, i) {
    const { x: s, y: o, radius: a } = this;
    return e = e || {
      start: 0,
      end: at
    }, t.arc(s, o, a, e.end, e.start, !0), !i.bounds;
  }
  interpolate(t) {
    const { x: e, y: i, radius: s } = this, o = t.angle;
    return {
      x: e + Math.cos(o) * s,
      y: i + Math.sin(o) * s,
      angle: o
    };
  }
}
function sd(n) {
  const { chart: t, fill: e, line: i } = n;
  if (ft(e))
    return od(t, e);
  if (e === "stack")
    return td(n);
  if (e === "shape")
    return !0;
  const s = ad(n);
  return s instanceof Na ? s : Ba(s, i);
}
function od(n, t) {
  const e = n.getDatasetMeta(t);
  return e && n.isDatasetVisible(t) ? e.dataset : null;
}
function ad(n) {
  return (n.scale || {}).getPointPositionForValue ? ld(n) : rd(n);
}
function rd(n) {
  const { scale: t = {}, fill: e } = n, i = Zu(e, t);
  if (ft(i)) {
    const s = t.isHorizontal();
    return {
      x: s ? i : null,
      y: s ? null : i
    };
  }
  return null;
}
function ld(n) {
  const { scale: t, fill: e } = n, i = t.options, s = t.getLabels().length, o = i.reverse ? t.max : t.min, a = Ju(e, t, o), r = [];
  if (i.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new Na({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(a)
    });
  }
  for (let l = 0; l < s; ++l)
    r.push(t.getPointPositionForValue(l, a));
  return r;
}
function mi(n, t, e) {
  const i = sd(t), { chart: s, index: o, line: a, scale: r, axis: l } = t, c = a.options, h = c.fill, u = c.backgroundColor, { above: d = u, below: f = u } = h || {}, g = s.getDatasetMeta(o), p = ya(s, g);
  i && a.points.length && (Xn(n, e), cd(n, {
    line: a,
    target: i,
    above: d,
    below: f,
    area: e,
    scale: r,
    axis: l,
    clip: p
  }), Gn(n));
}
function cd(n, t) {
  const { line: e, target: i, above: s, below: o, area: a, scale: r, clip: l } = t, c = e._loop ? "angle" : t.axis;
  n.save();
  let h = o;
  o !== s && (c === "x" ? (ro(n, i, a.top), bi(n, {
    line: e,
    target: i,
    color: s,
    scale: r,
    property: c,
    clip: l
  }), n.restore(), n.save(), ro(n, i, a.bottom)) : c === "y" && (lo(n, i, a.left), bi(n, {
    line: e,
    target: i,
    color: o,
    scale: r,
    property: c,
    clip: l
  }), n.restore(), n.save(), lo(n, i, a.right), h = s)), bi(n, {
    line: e,
    target: i,
    color: h,
    scale: r,
    property: c,
    clip: l
  }), n.restore();
}
function ro(n, t, e) {
  const { segments: i, points: s } = t;
  let o = !0, a = !1;
  n.beginPath();
  for (const r of i) {
    const { start: l, end: c } = r, h = s[l], u = s[Jn(l, c, s)];
    o ? (n.moveTo(h.x, h.y), o = !1) : (n.lineTo(h.x, e), n.lineTo(h.x, h.y)), a = !!t.pathSegment(n, r, {
      move: a
    }), a ? n.closePath() : n.lineTo(u.x, e);
  }
  n.lineTo(t.first().x, e), n.closePath(), n.clip();
}
function lo(n, t, e) {
  const { segments: i, points: s } = t;
  let o = !0, a = !1;
  n.beginPath();
  for (const r of i) {
    const { start: l, end: c } = r, h = s[l], u = s[Jn(l, c, s)];
    o ? (n.moveTo(h.x, h.y), o = !1) : (n.lineTo(e, h.y), n.lineTo(h.x, h.y)), a = !!t.pathSegment(n, r, {
      move: a
    }), a ? n.closePath() : n.lineTo(e, u.y);
  }
  n.lineTo(e, t.first().y), n.closePath(), n.clip();
}
function bi(n, t) {
  const { line: e, target: i, property: s, color: o, scale: a, clip: r } = t, l = Yu(e, i, s);
  for (const { source: c, target: h, start: u, end: d } of l) {
    const { style: { backgroundColor: f = o } = {} } = c, g = i !== !0;
    n.save(), n.fillStyle = f, hd(n, a, r, g && Ti(s, u, d)), n.beginPath();
    const p = !!e.pathSegment(n, c);
    let m;
    if (g) {
      p ? n.closePath() : co(n, i, d, s);
      const b = !!i.pathSegment(n, h, {
        move: p,
        reverse: !0
      });
      m = p && b, m || co(n, i, u, s);
    }
    n.closePath(), n.fill(m ? "evenodd" : "nonzero"), n.restore();
  }
}
function hd(n, t, e, i) {
  const s = t.chart.chartArea, { property: o, start: a, end: r } = i || {};
  if (o === "x" || o === "y") {
    let l, c, h, u;
    o === "x" ? (l = a, c = s.top, h = r, u = s.bottom) : (l = s.left, c = a, h = s.right, u = r), n.beginPath(), e && (l = Math.max(l, e.left), h = Math.min(h, e.right), c = Math.max(c, e.top), u = Math.min(u, e.bottom)), n.rect(l, c, h - l, u - c), n.clip();
  }
}
function co(n, t, e, i) {
  const s = t.interpolate(e, i);
  s && n.lineTo(s.x, s.y);
}
var ud = {
  id: "filler",
  afterDatasetsUpdate(n, t, e) {
    const i = (n.data.datasets || []).length, s = [];
    let o, a, r, l;
    for (a = 0; a < i; ++a)
      o = n.getDatasetMeta(a), r = o.dataset, l = null, r && r.options && r instanceof Zn && (l = {
        visible: n.isDatasetVisible(a),
        index: a,
        fill: qu(r, a, i),
        chart: n,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: r
      }), o.$filler = l, s.push(l);
    for (a = 0; a < i; ++a)
      l = s[a], !(!l || l.fill === !1) && (l.fill = Gu(s, a, e.propagate));
  },
  beforeDraw(n, t, e) {
    const i = e.drawTime === "beforeDraw", s = n.getSortedVisibleDatasetMetas(), o = n.chartArea;
    for (let a = s.length - 1; a >= 0; --a) {
      const r = s[a].$filler;
      r && (r.line.updateControlPoints(o, r.axis), i && r.fill && mi(n.ctx, r, o));
    }
  },
  beforeDatasetsDraw(n, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const i = n.getSortedVisibleDatasetMetas();
    for (let s = i.length - 1; s >= 0; --s) {
      const o = i[s].$filler;
      ao(o) && mi(n.ctx, o, n.chartArea);
    }
  },
  beforeDatasetDraw(n, t, e) {
    const i = t.meta.$filler;
    !ao(i) || e.drawTime !== "beforeDatasetDraw" || mi(n.ctx, i, n.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const ho = (n, t) => {
  let { boxHeight: e = t, boxWidth: i = t } = n;
  return n.usePointStyle && (e = Math.min(e, t), i = n.pointStyleWidth || Math.min(i, t)), {
    boxWidth: i,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, dd = (n, t) => n !== null && t !== null && n.datasetIndex === t.datasetIndex && n.index === t.index;
class uo extends te {
  constructor(t) {
    super(), this._added = !1, this.legendHitBoxes = [], this._hoveredItem = null, this.doughnutMode = !1, this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this.legendItems = void 0, this.columnSizes = void 0, this.lineWidths = void 0, this.maxHeight = void 0, this.maxWidth = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.height = void 0, this.width = void 0, this._margins = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e, i) {
    this.maxWidth = t, this.maxHeight = e, this._margins = i, this.setDimensions(), this.buildLabels(), this.fit();
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = this._margins.left, this.right = this.width) : (this.height = this.maxHeight, this.top = this._margins.top, this.bottom = this.height);
  }
  buildLabels() {
    const t = this.options.labels || {};
    let e = it(t.generateLabels, [
      this.chart
    ], this) || [];
    t.filter && (e = e.filter((i) => t.filter(i, this.chart.data))), t.sort && (e = e.sort((i, s) => t.sort(i, s, this.chart.data))), this.options.reverse && e.reverse(), this.legendItems = e;
  }
  fit() {
    const { options: t, ctx: e } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const i = t.labels, s = vt(i.font), o = s.size, a = this._computeTitleHeight(), { boxWidth: r, itemHeight: l } = ho(i, o);
    let c, h;
    e.font = s.string, this.isHorizontal() ? (c = this.maxWidth, h = this._fitRows(a, o, r, l) + 10) : (h = this.maxHeight, c = this._fitCols(a, s, r, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(h, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, i, s) {
    const { ctx: o, maxWidth: a, options: { labels: { padding: r } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], h = s + r;
    let u = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let d = -1, f = -h;
    return this.legendItems.forEach((g, p) => {
      const m = i + e / 2 + o.measureText(g.text).width;
      (p === 0 || c[c.length - 1] + m + 2 * r > a) && (u += h, c[c.length - (p > 0 ? 0 : 1)] = 0, f += h, d++), l[p] = {
        left: 0,
        top: f,
        row: d,
        width: m,
        height: s
      }, c[c.length - 1] += m + r;
    }), u;
  }
  _fitCols(t, e, i, s) {
    const { ctx: o, maxHeight: a, options: { labels: { padding: r } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], h = a - t;
    let u = r, d = 0, f = 0, g = 0, p = 0;
    return this.legendItems.forEach((m, b) => {
      const { itemWidth: _, itemHeight: P } = fd(i, e, o, m, s);
      b > 0 && f + P + 2 * r > h && (u += d + r, c.push({
        width: d,
        height: f
      }), g += d + r, p++, d = f = 0), l[b] = {
        left: g,
        top: f,
        col: p,
        width: _,
        height: P
      }, d = Math.max(d, _), f += P + r;
    }), u += d, c.push({
      width: d,
      height: f
    }), u;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: i, labels: { padding: s }, rtl: o } } = this, a = Pe(o, this.left, this.width);
    if (this.isHorizontal()) {
      let r = 0, l = kt(i, this.left + s, this.right - this.lineWidths[r]);
      for (const c of e)
        r !== c.row && (r = c.row, l = kt(i, this.left + s, this.right - this.lineWidths[r])), c.top += this.top + t + s, c.left = a.leftForLtr(a.x(l), c.width), l += c.width + s;
    } else {
      let r = 0, l = kt(i, this.top + t + s, this.bottom - this.columnSizes[r].height);
      for (const c of e)
        c.col !== r && (r = c.col, l = kt(i, this.top + t + s, this.bottom - this.columnSizes[r].height)), c.top = l, c.left += this.left + s, c.left = a.leftForLtr(a.x(c.left), c.width), l += c.height + s;
    }
  }
  isHorizontal() {
    return this.options.position === "top" || this.options.position === "bottom";
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      Xn(t, this), this._draw(), Gn(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this, { align: o, labels: a } = t, r = lt.color, l = Pe(t.rtl, this.left, this.width), c = vt(a.font), { padding: h } = a, u = c.size, d = u / 2;
    let f;
    this.drawTitle(), s.textAlign = l.textAlign("left"), s.textBaseline = "middle", s.lineWidth = 0.5, s.font = c.string;
    const { boxWidth: g, boxHeight: p, itemHeight: m } = ho(a, u), b = function(C, w, T) {
      if (isNaN(g) || g <= 0 || isNaN(p) || p < 0)
        return;
      s.save();
      const O = U(T.lineWidth, 1);
      if (s.fillStyle = U(T.fillStyle, r), s.lineCap = U(T.lineCap, "butt"), s.lineDashOffset = U(T.lineDashOffset, 0), s.lineJoin = U(T.lineJoin, "miter"), s.lineWidth = O, s.strokeStyle = U(T.strokeStyle, r), s.setLineDash(U(T.lineDash, [])), a.usePointStyle) {
        const A = {
          radius: p * Math.SQRT2 / 2,
          pointStyle: T.pointStyle,
          rotation: T.rotation,
          borderWidth: O
        }, B = l.xPlus(C, g / 2), N = w + d;
        oa(s, A, B, N, a.pointStyleWidth && g);
      } else {
        const A = w + Math.max((u - p) / 2, 0), B = l.leftForLtr(C, g), N = ye(T.borderRadius);
        s.beginPath(), Object.values(N).some((D) => D !== 0) ? sn(s, {
          x: B,
          y: A,
          w: g,
          h: p,
          radius: N
        }) : s.rect(B, A, g, p), s.fill(), O !== 0 && s.stroke();
      }
      s.restore();
    }, _ = function(C, w, T) {
      _e(s, T.text, C, w + m / 2, c, {
        strikethrough: T.hidden,
        textAlign: l.textAlign(T.textAlign)
      });
    }, P = this.isHorizontal(), k = this._computeTitleHeight();
    P ? f = {
      x: kt(o, this.left + h, this.right - i[0]),
      y: this.top + h + k,
      line: 0
    } : f = {
      x: this.left + h,
      y: kt(o, this.top + k + h, this.bottom - e[0].height),
      line: 0
    }, fa(this.ctx, t.textDirection);
    const v = m + h;
    this.legendItems.forEach((C, w) => {
      s.strokeStyle = C.fontColor, s.fillStyle = C.fontColor;
      const T = s.measureText(C.text).width, O = l.textAlign(C.textAlign || (C.textAlign = a.textAlign)), A = g + d + T;
      let B = f.x, N = f.y;
      l.setWidth(this.width), P ? w > 0 && B + A + h > this.right && (N = f.y += v, f.line++, B = f.x = kt(o, this.left + h, this.right - i[f.line])) : w > 0 && N + v > this.bottom && (B = f.x = B + e[f.line].width + h, f.line++, N = f.y = kt(o, this.top + k + h, this.bottom - e[f.line].height));
      const D = l.x(B);
      if (b(D, N, C), B = wl(O, B + g + d, P ? B + A : this.right, t.rtl), _(l.x(B), N, C), P)
        f.x += A + h;
      else if (typeof C.text != "string") {
        const I = c.lineHeight;
        f.y += za(C, I) + h;
      } else
        f.y += v;
    }), ga(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, i = vt(e.font), s = Tt(e.padding);
    if (!e.display)
      return;
    const o = Pe(t.rtl, this.left, this.width), a = this.ctx, r = e.position, l = i.size / 2, c = s.top + l;
    let h, u = this.left, d = this.width;
    if (this.isHorizontal())
      d = Math.max(...this.lineWidths), h = this.top + c, u = kt(t.align, u, this.right - d);
    else {
      const g = this.columnSizes.reduce((p, m) => Math.max(p, m.height), 0);
      h = c + kt(t.align, this.top, this.bottom - g - t.labels.padding - this._computeTitleHeight());
    }
    const f = kt(r, u, u + d);
    a.textAlign = o.textAlign(ji(r)), a.textBaseline = "middle", a.strokeStyle = e.color, a.fillStyle = e.color, a.font = i.string, _e(a, e.text, f, h, i);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = vt(t.font), i = Tt(t.padding);
    return t.display ? e.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, e) {
    let i, s, o;
    if (Zt(t, this.left, this.right) && Zt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
        if (s = o[i], Zt(t, s.left, s.left + s.width) && Zt(e, s.top, s.top + s.height))
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!md(t.type, e))
      return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem, o = dd(s, i);
      s && !o && it(e.onLeave, [
        t,
        s,
        this
      ], this), this._hoveredItem = i, i && !o && it(e.onHover, [
        t,
        i,
        this
      ], this);
    } else i && it(e.onClick, [
      t,
      i,
      this
    ], this);
  }
}
function fd(n, t, e, i, s) {
  const o = gd(i, n, t, e), a = pd(s, i, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: a
  };
}
function gd(n, t, e, i) {
  let s = n.text;
  return s && typeof s != "string" && (s = s.reduce((o, a) => o.length > a.length ? o : a)), t + e.size / 2 + i.measureText(s).width;
}
function pd(n, t, e) {
  let i = n;
  return typeof t.text != "string" && (i = za(t, e)), i;
}
function za(n, t) {
  const e = n.text ? n.text.length : 0;
  return t * e;
}
function md(n, t) {
  return !!((n === "mousemove" || n === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (n === "click" || n === "mouseup"));
}
var bd = {
  id: "legend",
  _element: uo,
  start(n, t, e) {
    const i = n.legend = new uo({
      ctx: n.ctx,
      options: e,
      chart: n
    });
    Ct.configure(n, i, e), Ct.addBox(n, i);
  },
  stop(n) {
    Ct.removeBox(n, n.legend), delete n.legend;
  },
  beforeUpdate(n, t, e) {
    const i = n.legend;
    Ct.configure(n, i, e), i.options = e;
  },
  afterUpdate(n) {
    const t = n.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(n, t) {
    t.replay || n.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(n, t, e) {
      const i = t.datasetIndex, s = e.chart;
      s.isDatasetVisible(i) ? (s.hide(i), t.hidden = !0) : (s.show(i), t.hidden = !1);
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (n) => n.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(n) {
        const t = n.data.datasets, { labels: { usePointStyle: e, pointStyle: i, textAlign: s, color: o, useBorderRadius: a, borderRadius: r } } = n.legend.options;
        return n._getSortedDatasetMetas().map((l) => {
          const c = l.controller.getStyle(e ? 0 : void 0), h = Tt(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (h.width + h.height) / 4,
            strokeStyle: c.borderColor,
            pointStyle: i || c.pointStyle,
            rotation: c.rotation,
            textAlign: s || c.textAlign,
            borderRadius: a && (r || c.borderRadius),
            datasetIndex: l.index
          };
        }, this);
      }
    },
    title: {
      color: (n) => n.chart.options.color,
      display: !1,
      position: "center",
      text: ""
    }
  },
  descriptors: {
    _scriptable: (n) => !n.startsWith("on"),
    labels: {
      _scriptable: (n) => ![
        "generateLabels",
        "filter",
        "sort"
      ].includes(n)
    }
  }
};
class Zi extends te {
  constructor(t) {
    super(), this.chart = t.chart, this.options = t.options, this.ctx = t.ctx, this._padding = void 0, this.top = void 0, this.bottom = void 0, this.left = void 0, this.right = void 0, this.width = void 0, this.height = void 0, this.position = void 0, this.weight = void 0, this.fullSize = void 0;
  }
  update(t, e) {
    const i = this.options;
    if (this.left = 0, this.top = 0, !i.display) {
      this.width = this.height = this.right = this.bottom = 0;
      return;
    }
    this.width = this.right = t, this.height = this.bottom = e;
    const s = rt(i.text) ? i.text.length : 1;
    this._padding = Tt(i.padding);
    const o = s * vt(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: i, bottom: s, right: o, options: a } = this, r = a.align;
    let l = 0, c, h, u;
    return this.isHorizontal() ? (h = kt(r, i, o), u = e + t, c = o - i) : (a.position === "left" ? (h = i + t, u = kt(r, s, e), l = J * -0.5) : (h = o - t, u = kt(r, e, s), l = J * 0.5), c = s - e), {
      titleX: h,
      titleY: u,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const i = vt(e.font), o = i.lineHeight / 2 + this._padding.top, { titleX: a, titleY: r, maxWidth: l, rotation: c } = this._drawArgs(o);
    _e(t, e.text, 0, 0, i, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: ji(e.align),
      textBaseline: "middle",
      translation: [
        a,
        r
      ]
    });
  }
}
function yd(n, t) {
  const e = new Zi({
    ctx: n.ctx,
    options: t,
    chart: n
  });
  Ct.configure(n, e, t), Ct.addBox(n, e), n.titleBlock = e;
}
var vd = {
  id: "title",
  _element: Zi,
  start(n, t, e) {
    yd(n, e);
  },
  stop(n) {
    const t = n.titleBlock;
    Ct.removeBox(n, t), delete n.titleBlock;
  },
  beforeUpdate(n, t, e) {
    const i = n.titleBlock;
    Ct.configure(n, i, e), i.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "bold"
    },
    fullSize: !0,
    padding: 10,
    position: "top",
    text: "",
    weight: 2e3
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const Pn = /* @__PURE__ */ new WeakMap();
var xd = {
  id: "subtitle",
  start(n, t, e) {
    const i = new Zi({
      ctx: n.ctx,
      options: e,
      chart: n
    });
    Ct.configure(n, i, e), Ct.addBox(n, i), Pn.set(n, i);
  },
  stop(n) {
    Ct.removeBox(n, Pn.get(n)), Pn.delete(n);
  },
  beforeUpdate(n, t, e) {
    const i = Pn.get(n);
    Ct.configure(n, i, e), i.options = e;
  },
  defaults: {
    align: "center",
    display: !1,
    font: {
      weight: "normal"
    },
    fullSize: !0,
    padding: 0,
    position: "top",
    text: "",
    weight: 1500
  },
  defaultRoutes: {
    color: "color"
  },
  descriptors: {
    _scriptable: !0,
    _indexable: !1
  }
};
const Ge = {
  average(n) {
    if (!n.length)
      return !1;
    let t, e, i = /* @__PURE__ */ new Set(), s = 0, o = 0;
    for (t = 0, e = n.length; t < e; ++t) {
      const r = n[t].element;
      if (r && r.hasValue()) {
        const l = r.tooltipPosition();
        i.add(l.x), s += l.y, ++o;
      }
    }
    return o === 0 || i.size === 0 ? !1 : {
      x: [
        ...i
      ].reduce((r, l) => r + l) / i.size,
      y: s / o
    };
  },
  nearest(n, t) {
    if (!n.length)
      return !1;
    let e = t.x, i = t.y, s = Number.POSITIVE_INFINITY, o, a, r;
    for (o = 0, a = n.length; o < a; ++o) {
      const l = n[o].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(), h = xi(t, c);
        h < s && (s = h, r = l);
      }
    }
    if (r) {
      const l = r.tooltipPosition();
      e = l.x, i = l.y;
    }
    return {
      x: e,
      y: i
    };
  }
};
function jt(n, t) {
  return t && (rt(t) ? Array.prototype.push.apply(n, t) : n.push(t)), n;
}
function Gt(n) {
  return (typeof n == "string" || n instanceof String) && n.indexOf(`
`) > -1 ? n.split(`
`) : n;
}
function _d(n, t) {
  const { element: e, datasetIndex: i, index: s } = t, o = n.getDatasetMeta(i).controller, { label: a, value: r } = o.getLabelAndValue(s);
  return {
    chart: n,
    label: a,
    parsed: o.getParsed(s),
    raw: n.data.datasets[i].data[s],
    formattedValue: r,
    dataset: o.getDataset(),
    dataIndex: s,
    datasetIndex: i,
    element: e
  };
}
function fo(n, t) {
  const e = n.chart.ctx, { body: i, footer: s, title: o } = n, { boxWidth: a, boxHeight: r } = t, l = vt(t.bodyFont), c = vt(t.titleFont), h = vt(t.footerFont), u = o.length, d = s.length, f = i.length, g = Tt(t.padding);
  let p = g.height, m = 0, b = i.reduce((k, v) => k + v.before.length + v.lines.length + v.after.length, 0);
  if (b += n.beforeBody.length + n.afterBody.length, u && (p += u * c.lineHeight + (u - 1) * t.titleSpacing + t.titleMarginBottom), b) {
    const k = t.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
    p += f * k + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  d && (p += t.footerMarginTop + d * h.lineHeight + (d - 1) * t.footerSpacing);
  let _ = 0;
  const P = function(k) {
    m = Math.max(m, e.measureText(k).width + _);
  };
  return e.save(), e.font = c.string, et(n.title, P), e.font = l.string, et(n.beforeBody.concat(n.afterBody), P), _ = t.displayColors ? a + 2 + t.boxPadding : 0, et(i, (k) => {
    et(k.before, P), et(k.lines, P), et(k.after, P);
  }), _ = 0, e.font = h.string, et(n.footer, P), e.restore(), m += g.width, {
    width: m,
    height: p
  };
}
function Sd(n, t) {
  const { y: e, height: i } = t;
  return e < i / 2 ? "top" : e > n.height - i / 2 ? "bottom" : "center";
}
function wd(n, t, e, i) {
  const { x: s, width: o } = i, a = e.caretSize + e.caretPadding;
  if (n === "left" && s + o + a > t.width || n === "right" && s - o - a < 0)
    return !0;
}
function kd(n, t, e, i) {
  const { x: s, width: o } = e, { width: a, chartArea: { left: r, right: l } } = n;
  let c = "center";
  return i === "center" ? c = s <= (r + l) / 2 ? "left" : "right" : s <= o / 2 ? c = "left" : s >= a - o / 2 && (c = "right"), wd(c, n, t, e) && (c = "center"), c;
}
function go(n, t, e) {
  const i = e.yAlign || t.yAlign || Sd(n, e);
  return {
    xAlign: e.xAlign || t.xAlign || kd(n, t, e, i),
    yAlign: i
  };
}
function Od(n, t) {
  let { x: e, width: i } = n;
  return t === "right" ? e -= i : t === "center" && (e -= i / 2), e;
}
function Md(n, t, e) {
  let { y: i, height: s } = n;
  return t === "top" ? i += e : t === "bottom" ? i -= s + e : i -= s / 2, i;
}
function po(n, t, e, i) {
  const { caretSize: s, caretPadding: o, cornerRadius: a } = n, { xAlign: r, yAlign: l } = e, c = s + o, { topLeft: h, topRight: u, bottomLeft: d, bottomRight: f } = ye(a);
  let g = Od(t, r);
  const p = Md(t, l, c);
  return l === "center" ? r === "left" ? g += c : r === "right" && (g -= c) : r === "left" ? g -= Math.max(h, d) + s : r === "right" && (g += Math.max(u, f) + s), {
    x: St(g, 0, i.width - t.width),
    y: St(p, 0, i.height - t.height)
  };
}
function Ln(n, t, e) {
  const i = Tt(e.padding);
  return t === "center" ? n.x + n.width / 2 : t === "right" ? n.x + n.width - i.right : n.x + i.left;
}
function mo(n) {
  return jt([], Gt(n));
}
function Cd(n, t, e) {
  return ce(n, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function bo(n, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? n.override(e) : n;
}
const ja = {
  beforeTitle: Yt,
  title(n) {
    if (n.length > 0) {
      const t = n[0], e = t.chart.data.labels, i = e ? e.length : 0;
      if (this && this.options && this.options.mode === "dataset")
        return t.dataset.label || "";
      if (t.label)
        return t.label;
      if (i > 0 && t.dataIndex < i)
        return e[t.dataIndex];
    }
    return "";
  },
  afterTitle: Yt,
  beforeBody: Yt,
  beforeLabel: Yt,
  label(n) {
    if (this && this.options && this.options.mode === "dataset")
      return n.label + ": " + n.formattedValue || n.formattedValue;
    let t = n.dataset.label || "";
    t && (t += ": ");
    const e = n.formattedValue;
    return G(e) || (t += e), t;
  },
  labelColor(n) {
    const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);
    return {
      borderColor: e.borderColor,
      backgroundColor: e.backgroundColor,
      borderWidth: e.borderWidth,
      borderDash: e.borderDash,
      borderDashOffset: e.borderDashOffset,
      borderRadius: 0
    };
  },
  labelTextColor() {
    return this.options.bodyColor;
  },
  labelPointStyle(n) {
    const e = n.chart.getDatasetMeta(n.datasetIndex).controller.getStyle(n.dataIndex);
    return {
      pointStyle: e.pointStyle,
      rotation: e.rotation
    };
  },
  afterLabel: Yt,
  afterBody: Yt,
  beforeFooter: Yt,
  footer: Yt,
  afterFooter: Yt
};
function Lt(n, t, e, i) {
  const s = n[t].call(e, i);
  return typeof s > "u" ? ja[t].call(e, i) : s;
}
class yo extends te {
  static positioners = Ge;
  constructor(t) {
    super(), this.opacity = 0, this._active = [], this._eventPosition = void 0, this._size = void 0, this._cachedAnimations = void 0, this._tooltipItems = [], this.$animations = void 0, this.$context = void 0, this.chart = t.chart, this.options = t.options, this.dataPoints = void 0, this.title = void 0, this.beforeBody = void 0, this.body = void 0, this.afterBody = void 0, this.footer = void 0, this.xAlign = void 0, this.yAlign = void 0, this.x = void 0, this.y = void 0, this.height = void 0, this.width = void 0, this.caretX = void 0, this.caretY = void 0, this.labelColors = void 0, this.labelPointStyles = void 0, this.labelTextColors = void 0;
  }
  initialize(t) {
    this.options = t, this._cachedAnimations = void 0, this.$context = void 0;
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t)
      return t;
    const e = this.chart, i = this.options.setContext(this.getContext()), s = i.enabled && e.options.animation && i.animations, o = new va(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = Cd(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: i } = e, s = Lt(i, "beforeTitle", this, t), o = Lt(i, "title", this, t), a = Lt(i, "afterTitle", this, t);
    let r = [];
    return r = jt(r, Gt(s)), r = jt(r, Gt(o)), r = jt(r, Gt(a)), r;
  }
  getBeforeBody(t, e) {
    return mo(Lt(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: i } = e, s = [];
    return et(t, (o) => {
      const a = {
        before: [],
        lines: [],
        after: []
      }, r = bo(i, o);
      jt(a.before, Gt(Lt(r, "beforeLabel", this, o))), jt(a.lines, Lt(r, "label", this, o)), jt(a.after, Gt(Lt(r, "afterLabel", this, o))), s.push(a);
    }), s;
  }
  getAfterBody(t, e) {
    return mo(Lt(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: i } = e, s = Lt(i, "beforeFooter", this, t), o = Lt(i, "footer", this, t), a = Lt(i, "afterFooter", this, t);
    let r = [];
    return r = jt(r, Gt(s)), r = jt(r, Gt(o)), r = jt(r, Gt(a)), r;
  }
  _createItems(t) {
    const e = this._active, i = this.chart.data, s = [], o = [], a = [];
    let r = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      r.push(_d(this.chart, e[l]));
    return t.filter && (r = r.filter((h, u, d) => t.filter(h, u, d, i))), t.itemSort && (r = r.sort((h, u) => t.itemSort(h, u, i))), et(r, (h) => {
      const u = bo(t.callbacks, h);
      s.push(Lt(u, "labelColor", this, h)), o.push(Lt(u, "labelPointStyle", this, h)), a.push(Lt(u, "labelTextColor", this, h));
    }), this.labelColors = s, this.labelPointStyles = o, this.labelTextColors = a, this.dataPoints = r, r;
  }
  update(t, e) {
    const i = this.options.setContext(this.getContext()), s = this._active;
    let o, a = [];
    if (!s.length)
      this.opacity !== 0 && (o = {
        opacity: 0
      });
    else {
      const r = Ge[i.position].call(this, s, this._eventPosition);
      a = this._createItems(i), this.title = this.getTitle(a, i), this.beforeBody = this.getBeforeBody(a, i), this.body = this.getBody(a, i), this.afterBody = this.getAfterBody(a, i), this.footer = this.getFooter(a, i);
      const l = this._size = fo(this, i), c = Object.assign({}, r, l), h = go(this.chart, i, c), u = po(i, c, h, this.chart);
      this.xAlign = h.xAlign, this.yAlign = h.yAlign, o = {
        opacity: 1,
        x: u.x,
        y: u.y,
        width: l.width,
        height: l.height,
        caretX: r.x,
        caretY: r.y
      };
    }
    this._tooltipItems = a, this.$context = void 0, o && this._resolveAnimations().update(this, o), t && i.external && i.external.call(this, {
      chart: this.chart,
      tooltip: this,
      replay: e
    });
  }
  drawCaret(t, e, i, s) {
    const o = this.getCaretPosition(t, i, s);
    e.lineTo(o.x1, o.y1), e.lineTo(o.x2, o.y2), e.lineTo(o.x3, o.y3);
  }
  getCaretPosition(t, e, i) {
    const { xAlign: s, yAlign: o } = this, { caretSize: a, cornerRadius: r } = i, { topLeft: l, topRight: c, bottomLeft: h, bottomRight: u } = ye(r), { x: d, y: f } = t, { width: g, height: p } = e;
    let m, b, _, P, k, v;
    return o === "center" ? (k = f + p / 2, s === "left" ? (m = d, b = m - a, P = k + a, v = k - a) : (m = d + g, b = m + a, P = k - a, v = k + a), _ = m) : (s === "left" ? b = d + Math.max(l, h) + a : s === "right" ? b = d + g - Math.max(c, u) - a : b = this.caretX, o === "top" ? (P = f, k = P - a, m = b - a, _ = b + a) : (P = f + p, k = P + a, m = b + a, _ = b - a), v = P), {
      x1: m,
      x2: b,
      x3: _,
      y1: P,
      y2: k,
      y3: v
    };
  }
  drawTitle(t, e, i) {
    const s = this.title, o = s.length;
    let a, r, l;
    if (o) {
      const c = Pe(i.rtl, this.x, this.width);
      for (t.x = Ln(this, i.titleAlign, i), e.textAlign = c.textAlign(i.titleAlign), e.textBaseline = "middle", a = vt(i.titleFont), r = i.titleSpacing, e.fillStyle = i.titleColor, e.font = a.string, l = 0; l < o; ++l)
        e.fillText(s[l], c.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + r, l + 1 === o && (t.y += i.titleMarginBottom - r);
    }
  }
  _drawColorBox(t, e, i, s, o) {
    const a = this.labelColors[i], r = this.labelPointStyles[i], { boxHeight: l, boxWidth: c } = o, h = vt(o.bodyFont), u = Ln(this, "left", o), d = s.x(u), f = l < h.lineHeight ? (h.lineHeight - l) / 2 : 0, g = e.y + f;
    if (o.usePointStyle) {
      const p = {
        radius: Math.min(c, l) / 2,
        pointStyle: r.pointStyle,
        rotation: r.rotation,
        borderWidth: 1
      }, m = s.leftForLtr(d, c) + c / 2, b = g + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, Si(t, p, m, b), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, Si(t, p, m, b);
    } else {
      t.lineWidth = K(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
      const p = s.leftForLtr(d, c), m = s.leftForLtr(s.xPlus(d, 1), c - 2), b = ye(a.borderRadius);
      Object.values(b).some((_) => _ !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, sn(t, {
        x: p,
        y: g,
        w: c,
        h: l,
        radius: b
      }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), sn(t, {
        x: m,
        y: g + 1,
        w: c - 2,
        h: l - 2,
        radius: b
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(p, g, c, l), t.strokeRect(p, g, c, l), t.fillStyle = a.backgroundColor, t.fillRect(m, g + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, e, i) {
    const { body: s } = this, { bodySpacing: o, bodyAlign: a, displayColors: r, boxHeight: l, boxWidth: c, boxPadding: h } = i, u = vt(i.bodyFont);
    let d = u.lineHeight, f = 0;
    const g = Pe(i.rtl, this.x, this.width), p = function(T) {
      e.fillText(T, g.x(t.x + f), t.y + d / 2), t.y += d + o;
    }, m = g.textAlign(a);
    let b, _, P, k, v, C, w;
    for (e.textAlign = a, e.textBaseline = "middle", e.font = u.string, t.x = Ln(this, m, i), e.fillStyle = i.bodyColor, et(this.beforeBody, p), f = r && m !== "right" ? a === "center" ? c / 2 + h : c + 2 + h : 0, k = 0, C = s.length; k < C; ++k) {
      for (b = s[k], _ = this.labelTextColors[k], e.fillStyle = _, et(b.before, p), P = b.lines, r && P.length && (this._drawColorBox(e, t, k, g, i), d = Math.max(u.lineHeight, l)), v = 0, w = P.length; v < w; ++v)
        p(P[v]), d = u.lineHeight;
      et(b.after, p);
    }
    f = 0, d = u.lineHeight, et(this.afterBody, p), t.y -= o;
  }
  drawFooter(t, e, i) {
    const s = this.footer, o = s.length;
    let a, r;
    if (o) {
      const l = Pe(i.rtl, this.x, this.width);
      for (t.x = Ln(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = l.textAlign(i.footerAlign), e.textBaseline = "middle", a = vt(i.footerFont), e.fillStyle = i.footerColor, e.font = a.string, r = 0; r < o; ++r)
        e.fillText(s[r], l.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + i.footerSpacing;
    }
  }
  drawBackground(t, e, i, s) {
    const { xAlign: o, yAlign: a } = this, { x: r, y: l } = t, { width: c, height: h } = i, { topLeft: u, topRight: d, bottomLeft: f, bottomRight: g } = ye(s.cornerRadius);
    e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(r + u, l), a === "top" && this.drawCaret(t, e, i, s), e.lineTo(r + c - d, l), e.quadraticCurveTo(r + c, l, r + c, l + d), a === "center" && o === "right" && this.drawCaret(t, e, i, s), e.lineTo(r + c, l + h - g), e.quadraticCurveTo(r + c, l + h, r + c - g, l + h), a === "bottom" && this.drawCaret(t, e, i, s), e.lineTo(r + f, l + h), e.quadraticCurveTo(r, l + h, r, l + h - f), a === "center" && o === "left" && this.drawCaret(t, e, i, s), e.lineTo(r, l + u), e.quadraticCurveTo(r, l, r + u, l), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, i = this.$animations, s = i && i.x, o = i && i.y;
    if (s || o) {
      const a = Ge[t.position].call(this, this._active, this._eventPosition);
      if (!a)
        return;
      const r = this._size = fo(this, t), l = Object.assign({}, a, this._size), c = go(e, t, l), h = po(t, l, c, e);
      (s._to !== h.x || o._to !== h.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = r.width, this.height = r.height, this.caretX = a.x, this.caretY = a.y, this._resolveAnimations().update(this, h));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const e = this.options.setContext(this.getContext());
    let i = this.opacity;
    if (!i)
      return;
    this._updateAnimationTarget(e);
    const s = {
      width: this.width,
      height: this.height
    }, o = {
      x: this.x,
      y: this.y
    };
    i = Math.abs(i) < 1e-3 ? 0 : i;
    const a = Tt(e.padding), r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && r && (t.save(), t.globalAlpha = i, this.drawBackground(o, t, s, e), fa(t, e.textDirection), o.y += a.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), ga(t, e.textDirection), t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, e) {
    const i = this._active, s = t.map(({ datasetIndex: r, index: l }) => {
      const c = this.chart.getDatasetMeta(r);
      if (!c)
        throw new Error("Cannot find a dataset at index " + r);
      return {
        datasetIndex: r,
        element: c.data[l],
        index: l
      };
    }), o = !Vn(i, s), a = this._positionChanged(s, e);
    (o || a) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, i = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options, o = this._active || [], a = this._getActiveElements(t, o, e, i), r = this._positionChanged(a, t), l = e || !Vn(a, o) || r;
    return l && (this._active = a, (s.enabled || s.external) && (this._eventPosition = {
      x: t.x,
      y: t.y
    }, this.update(!0, e))), l;
  }
  _getActiveElements(t, e, i, s) {
    const o = this.options;
    if (t.type === "mouseout")
      return [];
    if (!s)
      return e.filter((r) => this.chart.data.datasets[r.datasetIndex] && this.chart.getDatasetMeta(r.datasetIndex).controller.getParsed(r.index) !== void 0);
    const a = this.chart.getElementsAtEventForMode(t, o.mode, o, i);
    return o.reverse && a.reverse(), a;
  }
  _positionChanged(t, e) {
    const { caretX: i, caretY: s, options: o } = this, a = Ge[o.position].call(this, t, e);
    return a !== !1 && (i !== a.x || s !== a.y);
  }
}
var Td = {
  id: "tooltip",
  _element: yo,
  positioners: Ge,
  afterInit(n, t, e) {
    e && (n.tooltip = new yo({
      chart: n,
      options: e
    }));
  },
  beforeUpdate(n, t, e) {
    n.tooltip && n.tooltip.initialize(e);
  },
  reset(n, t, e) {
    n.tooltip && n.tooltip.initialize(e);
  },
  afterDraw(n) {
    const t = n.tooltip;
    if (t && t._willRender()) {
      const e = {
        tooltip: t
      };
      if (n.notifyPlugins("beforeTooltipDraw", {
        ...e,
        cancelable: !0
      }) === !1)
        return;
      t.draw(n.ctx), n.notifyPlugins("afterTooltipDraw", e);
    }
  },
  afterEvent(n, t) {
    if (n.tooltip) {
      const e = t.replay;
      n.tooltip.handleEvent(t.event, e, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: {
      weight: "bold"
    },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: {
      weight: "bold"
    },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (n, t) => t.bodyFont.size,
    boxWidth: (n, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: {
      duration: 400,
      easing: "easeOutQuart"
    },
    animations: {
      numbers: {
        type: "number",
        properties: [
          "x",
          "y",
          "width",
          "height",
          "caretX",
          "caretY"
        ]
      },
      opacity: {
        easing: "linear",
        duration: 200
      }
    },
    callbacks: ja
  },
  defaultRoutes: {
    bodyFont: "font",
    footerFont: "font",
    titleFont: "font"
  },
  descriptors: {
    _scriptable: (n) => n !== "filter" && n !== "itemSort" && n !== "external",
    _indexable: !1,
    callbacks: {
      _scriptable: !1,
      _indexable: !1
    },
    animation: {
      _fallback: !1
    },
    animations: {
      _fallback: "animation"
    }
  },
  additionalOptionScopes: [
    "interaction"
  ]
}, Pd = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Colors: ju,
  Decimation: Uu,
  Filler: ud,
  Legend: bd,
  SubTitle: xd,
  Title: vd,
  Tooltip: Td
});
const Ld = (n, t, e, i) => (typeof t == "string" ? (e = n.push(t) - 1, i.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function Dd(n, t, e, i) {
  const s = n.indexOf(t);
  if (s === -1)
    return Ld(n, t, e, i);
  const o = n.lastIndexOf(t);
  return s !== o ? e : s;
}
const Ad = (n, t) => n === null ? null : St(Math.round(n), 0, t);
function vo(n) {
  const t = this.getLabels();
  return n >= 0 && n < t.length ? t[n] : n;
}
class Rd extends we {
  static id = "category";
  static defaults = {
    ticks: {
      callback: vo
    }
  };
  constructor(t) {
    super(t), this._startValue = void 0, this._valueRange = 0, this._addedLabels = [];
  }
  init(t) {
    const e = this._addedLabels;
    if (e.length) {
      const i = this.getLabels();
      for (const { index: s, label: o } of e)
        i[s] === o && i.splice(s, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, e) {
    if (G(t))
      return null;
    const i = this.getLabels();
    return e = isFinite(e) && i[e] === t ? e : Dd(i, t, U(e, t), this._addedLabels), Ad(e, i.length - 1);
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let { min: i, max: s } = this.getMinMax(!0);
    this.options.bounds === "ticks" && (t || (i = 0), e || (s = this.getLabels().length - 1)), this.min = i, this.max = s;
  }
  buildTicks() {
    const t = this.min, e = this.max, i = this.options.offset, s = [];
    let o = this.getLabels();
    o = t === 0 && e === o.length - 1 ? o : o.slice(t, e + 1), this._valueRange = Math.max(o.length - (i ? 0 : 1), 1), this._startValue = this.min - (i ? 0.5 : 0);
    for (let a = t; a <= e; a++)
      s.push({
        value: a
      });
    return s;
  }
  getLabelForValue(t) {
    return vo.call(this, t);
  }
  configure() {
    super.configure(), this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return typeof t != "number" && (t = this.parse(t)), t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getPixelForTick(t) {
    const e = this.ticks;
    return t < 0 || t > e.length - 1 ? null : this.getPixelForValue(e[t].value);
  }
  getValueForPixel(t) {
    return Math.round(this._startValue + this.getDecimalForPixel(t) * this._valueRange);
  }
  getBasePixel() {
    return this.bottom;
  }
}
function Ed(n, t) {
  const e = [], { bounds: s, step: o, min: a, max: r, precision: l, count: c, maxTicks: h, maxDigits: u, includeBounds: d } = n, f = o || 1, g = h - 1, { min: p, max: m } = t, b = !G(a), _ = !G(r), P = !G(c), k = (m - p) / (u + 1);
  let v = ds((m - p) / g / f) * f, C, w, T, O;
  if (v < 1e-14 && !b && !_)
    return [
      {
        value: p
      },
      {
        value: m
      }
    ];
  O = Math.ceil(m / v) - Math.floor(p / v), O > g && (v = ds(O * v / g / f) * f), G(l) || (C = Math.pow(10, l), v = Math.ceil(v * C) / C), s === "ticks" ? (w = Math.floor(p / v) * v, T = Math.ceil(m / v) * v) : (w = p, T = m), b && _ && o && ml((r - a) / o, v / 1e3) ? (O = Math.round(Math.min((r - a) / v, h)), v = (r - a) / O, w = a, T = r) : P ? (w = b ? a : w, T = _ ? r : T, O = c - 1, v = (T - w) / O) : (O = (T - w) / v, Ke(O, Math.round(O), v / 1e3) ? O = Math.round(O) : O = Math.ceil(O));
  const A = Math.max(fs(v), fs(w));
  C = Math.pow(10, G(l) ? A : l), w = Math.round(w * C) / C, T = Math.round(T * C) / C;
  let B = 0;
  for (b && (d && w !== a ? (e.push({
    value: a
  }), w < a && B++, Ke(Math.round((w + B * v) * C) / C, a, xo(a, k, n)) && B++) : w < a && B++); B < O; ++B) {
    const N = Math.round((w + B * v) * C) / C;
    if (_ && N > r)
      break;
    e.push({
      value: N
    });
  }
  return _ && d && T !== r ? e.length && Ke(e[e.length - 1].value, r, xo(r, k, n)) ? e[e.length - 1].value = r : e.push({
    value: r
  }) : (!_ || T === r) && e.push({
    value: T
  }), e;
}
function xo(n, t, { horizontal: e, minRotation: i }) {
  const s = Nt(i), o = (e ? Math.sin(s) : Math.cos(s)) || 1e-3, a = 0.75 * t * ("" + n).length;
  return Math.min(t / o, a);
}
class Hn extends we {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return G(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options, { minDefined: e, maxDefined: i } = this.getUserBounds();
    let { min: s, max: o } = this;
    const a = (l) => s = e ? s : l, r = (l) => o = i ? o : l;
    if (t) {
      const l = Ht(s), c = Ht(o);
      l < 0 && c < 0 ? r(0) : l > 0 && c > 0 && a(0);
    }
    if (s === o) {
      let l = o === 0 ? 1 : Math.abs(o * 0.05);
      r(o + l), t || a(s - l);
    }
    this.min = s, this.max = o;
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: e, stepSize: i } = t, s;
    return i ? (s = Math.ceil(this.max / i) - Math.floor(this.min / i) + 1, s > 1e3 && (console.warn(`scales.${this.id}.ticks.stepSize: ${i} would result generating up to ${s} ticks. Limiting to 1000.`), s = 1e3)) : (s = this.computeTickLimit(), e = e || 11), e && (s = Math.min(e, s)), s;
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options, e = t.ticks;
    let i = this.getTickLimit();
    i = Math.max(2, i);
    const s = {
      maxTicks: i,
      bounds: t.bounds,
      min: t.min,
      max: t.max,
      precision: e.precision,
      step: e.stepSize,
      count: e.count,
      maxDigits: this._maxDigits(),
      horizontal: this.isHorizontal(),
      minRotation: e.minRotation || 0,
      includeBounds: e.includeBounds !== !1
    }, o = this._range || this, a = Ed(s, o);
    return t.bounds === "ticks" && Ko(a, this, "value"), t.reverse ? (a.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), a;
  }
  configure() {
    const t = this.ticks;
    let e = this.min, i = this.max;
    if (super.configure(), this.options.offset && t.length) {
      const s = (i - e) / Math.max(t.length - 1, 1) / 2;
      e -= s, i += s;
    }
    this._startValue = e, this._endValue = i, this._valueRange = i - e;
  }
  getLabelForValue(t) {
    return hn(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class Id extends Hn {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: Yn.formatters.numeric
    }
  };
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = ft(t) ? t : 0, this.max = ft(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, i = Nt(this.options.ticks.minRotation), s = (t ? Math.sin(i) : Math.cos(i)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
const an = (n) => Math.floor(ie(n)), ge = (n, t) => Math.pow(10, an(n) + t);
function _o(n) {
  return n / Math.pow(10, an(n)) === 1;
}
function So(n, t, e) {
  const i = Math.pow(10, e), s = Math.floor(n / i);
  return Math.ceil(t / i) - s;
}
function Vd(n, t) {
  const e = t - n;
  let i = an(e);
  for (; So(n, t, i) > 10; )
    i++;
  for (; So(n, t, i) < 10; )
    i--;
  return Math.min(i, an(n));
}
function Fd(n, { min: t, max: e }) {
  t = Rt(n.min, t);
  const i = [], s = an(t);
  let o = Vd(t, e), a = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const r = Math.pow(10, o), l = s > o ? Math.pow(10, s) : 0, c = Math.round((t - l) * a) / a, h = Math.floor((t - l) / r / 10) * r * 10;
  let u = Math.floor((c - h) / Math.pow(10, o)), d = Rt(n.min, Math.round((l + h + u * Math.pow(10, o)) * a) / a);
  for (; d < e; )
    i.push({
      value: d,
      major: _o(d),
      significand: u
    }), u >= 10 ? u = u < 15 ? 15 : 20 : u++, u >= 20 && (o++, u = 2, a = o >= 0 ? 1 : a), d = Math.round((l + h + u * Math.pow(10, o)) * a) / a;
  const f = Rt(n.max, d);
  return i.push({
    value: f,
    major: _o(f),
    significand: u
  }), i;
}
class Bd extends we {
  static id = "logarithmic";
  static defaults = {
    ticks: {
      callback: Yn.formatters.logarithmic,
      major: {
        enabled: !0
      }
    }
  };
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    const i = Hn.prototype.parse.apply(this, [
      t,
      e
    ]);
    if (i === 0) {
      this._zero = !0;
      return;
    }
    return ft(i) && i > 0 ? i : null;
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = ft(t) ? Math.max(0, t) : null, this.max = ft(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !ft(this._userMin) && (this.min = t === ge(this.min, 0) ? ge(this.min, -1) : ge(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let i = this.min, s = this.max;
    const o = (r) => i = t ? i : r, a = (r) => s = e ? s : r;
    i === s && (i <= 0 ? (o(1), a(10)) : (o(ge(i, -1)), a(ge(s, 1)))), i <= 0 && o(ge(s, -1)), s <= 0 && a(ge(i, 1)), this.min = i, this.max = s;
  }
  buildTicks() {
    const t = this.options, e = {
      min: this._userMin,
      max: this._userMax
    }, i = Fd(e, this);
    return t.bounds === "ticks" && Ko(i, this, "value"), t.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), i;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : hn(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = ie(t), this._valueRange = ie(this.max) - ie(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (ie(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
function Pi(n) {
  const t = n.ticks;
  if (t.display && n.display) {
    const e = Tt(t.backdropPadding);
    return U(t.font && t.font.size, lt.font.size) + e.height;
  }
  return 0;
}
function Nd(n, t, e) {
  return e = rt(e) ? e : [
    e
  ], {
    w: Rl(n, t.string, e),
    h: e.length * t.lineHeight
  };
}
function wo(n, t, e, i, s) {
  return n === i || n === s ? {
    start: t - e / 2,
    end: t + e / 2
  } : n < i || n > s ? {
    start: t - e,
    end: t
  } : {
    start: t,
    end: t + e
  };
}
function zd(n) {
  const t = {
    l: n.left + n._padding.left,
    r: n.right - n._padding.right,
    t: n.top + n._padding.top,
    b: n.bottom - n._padding.bottom
  }, e = Object.assign({}, t), i = [], s = [], o = n._pointLabels.length, a = n.options.pointLabels, r = a.centerPointLabels ? J / o : 0;
  for (let l = 0; l < o; l++) {
    const c = a.setContext(n.getPointLabelContext(l));
    s[l] = c.padding;
    const h = n.getPointPosition(l, n.drawingArea + s[l], r), u = vt(c.font), d = Nd(n.ctx, u, n._pointLabels[l]);
    i[l] = d;
    const f = Mt(n.getIndexAngle(l) + r), g = Math.round(Ni(f)), p = wo(g, h.x, d.w, 0, 180), m = wo(g, h.y, d.h, 90, 270);
    jd(e, t, f, p, m);
  }
  n.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), n._pointLabelItems = $d(n, i, s);
}
function jd(n, t, e, i, s) {
  const o = Math.abs(Math.sin(e)), a = Math.abs(Math.cos(e));
  let r = 0, l = 0;
  i.start < t.l ? (r = (t.l - i.start) / o, n.l = Math.min(n.l, t.l - r)) : i.end > t.r && (r = (i.end - t.r) / o, n.r = Math.max(n.r, t.r + r)), s.start < t.t ? (l = (t.t - s.start) / a, n.t = Math.min(n.t, t.t - l)) : s.end > t.b && (l = (s.end - t.b) / a, n.b = Math.max(n.b, t.b + l));
}
function Wd(n, t, e) {
  const i = n.drawingArea, { extra: s, additionalAngle: o, padding: a, size: r } = e, l = n.getPointPosition(t, i + s + a, o), c = Math.round(Ni(Mt(l.angle + bt))), h = Xd(l.y, r.h, c), u = Ud(c), d = Yd(l.x, r.w, u);
  return {
    visible: !0,
    x: l.x,
    y: h,
    textAlign: u,
    left: d,
    top: h,
    right: d + r.w,
    bottom: h + r.h
  };
}
function Hd(n, t) {
  if (!t)
    return !0;
  const { left: e, top: i, right: s, bottom: o } = n;
  return !(Qt({
    x: e,
    y: i
  }, t) || Qt({
    x: e,
    y: o
  }, t) || Qt({
    x: s,
    y: i
  }, t) || Qt({
    x: s,
    y: o
  }, t));
}
function $d(n, t, e) {
  const i = [], s = n._pointLabels.length, o = n.options, { centerPointLabels: a, display: r } = o.pointLabels, l = {
    extra: Pi(o) / 2,
    additionalAngle: a ? J / s : 0
  };
  let c;
  for (let h = 0; h < s; h++) {
    l.padding = e[h], l.size = t[h];
    const u = Wd(n, h, l);
    i.push(u), r === "auto" && (u.visible = Hd(u, c), u.visible && (c = u));
  }
  return i;
}
function Ud(n) {
  return n === 0 || n === 180 ? "center" : n < 180 ? "left" : "right";
}
function Yd(n, t, e) {
  return e === "right" ? n -= t : e === "center" && (n -= t / 2), n;
}
function Xd(n, t, e) {
  return e === 90 || e === 270 ? n -= t / 2 : (e > 270 || e < 90) && (n -= t), n;
}
function Gd(n, t, e) {
  const { left: i, top: s, right: o, bottom: a } = e, { backdropColor: r } = t;
  if (!G(r)) {
    const l = ye(t.borderRadius), c = Tt(t.backdropPadding);
    n.fillStyle = r;
    const h = i - c.left, u = s - c.top, d = o - i + c.width, f = a - s + c.height;
    Object.values(l).some((g) => g !== 0) ? (n.beginPath(), sn(n, {
      x: h,
      y: u,
      w: d,
      h: f,
      radius: l
    }), n.fill()) : n.fillRect(h, u, d, f);
  }
}
function qd(n, t) {
  const { ctx: e, options: { pointLabels: i } } = n;
  for (let s = t - 1; s >= 0; s--) {
    const o = n._pointLabelItems[s];
    if (!o.visible)
      continue;
    const a = i.setContext(n.getPointLabelContext(s));
    Gd(e, a, o);
    const r = vt(a.font), { x: l, y: c, textAlign: h } = o;
    _e(e, n._pointLabels[s], l, c + r.lineHeight / 2, r, {
      color: a.color,
      textAlign: h,
      textBaseline: "middle"
    });
  }
}
function Wa(n, t, e, i) {
  const { ctx: s } = n;
  if (e)
    s.arc(n.xCenter, n.yCenter, t, 0, at);
  else {
    let o = n.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let a = 1; a < i; a++)
      o = n.getPointPosition(a, t), s.lineTo(o.x, o.y);
  }
}
function Kd(n, t, e, i, s) {
  const o = n.ctx, a = t.circular, { color: r, lineWidth: l } = t;
  !a && !i || !r || !l || e < 0 || (o.save(), o.strokeStyle = r, o.lineWidth = l, o.setLineDash(s.dash || []), o.lineDashOffset = s.dashOffset, o.beginPath(), Wa(n, e, a, i), o.closePath(), o.stroke(), o.restore());
}
function Zd(n, t, e) {
  return ce(n, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class Jd extends Hn {
  static id = "radialLinear";
  static defaults = {
    display: !0,
    animate: !0,
    position: "chartArea",
    angleLines: {
      display: !0,
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0
    },
    grid: {
      circular: !1
    },
    startAngle: 0,
    ticks: {
      showLabelBackdrop: !0,
      callback: Yn.formatters.numeric
    },
    pointLabels: {
      backdropColor: void 0,
      backdropPadding: 2,
      display: !0,
      font: {
        size: 10
      },
      callback(t) {
        return t;
      },
      padding: 5,
      centerPointLabels: !1
    }
  };
  static defaultRoutes = {
    "angleLines.color": "borderColor",
    "pointLabels.color": "color",
    "ticks.color": "color"
  };
  static descriptors = {
    angleLines: {
      _fallback: "grid"
    }
  };
  constructor(t) {
    super(t), this.xCenter = void 0, this.yCenter = void 0, this.drawingArea = void 0, this._pointLabels = [], this._pointLabelItems = [];
  }
  setDimensions() {
    const t = this._padding = Tt(Pi(this.options) / 2), e = this.width = this.maxWidth - t.width, i = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = ft(t) && !isNaN(t) ? t : 0, this.max = ft(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Pi(this.options));
  }
  generateTickLabels(t) {
    Hn.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, i) => {
      const s = it(this.options.pointLabels.callback, [
        e,
        i
      ], this);
      return s || s === 0 ? s : "";
    }).filter((e, i) => this.chart.getDataVisibility(i));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? zd(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, i, s) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s));
  }
  getIndexAngle(t) {
    const e = at / (this._pointLabels.length || 1), i = this.options.startAngle || 0;
    return Mt(t * e + Nt(i));
  }
  getDistanceFromCenterForValue(t) {
    if (G(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (G(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return Zd(this.getContext(), t, i);
    }
  }
  getPointPosition(t, e, i = 0) {
    const s = this.getIndexAngle(t) - bt + i;
    return {
      x: Math.cos(s) * e + this.xCenter,
      y: Math.sin(s) * e + this.yCenter,
      angle: s
    };
  }
  getPointPositionForValue(t, e) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(e));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: e, top: i, right: s, bottom: o } = this._pointLabelItems[t];
    return {
      left: e,
      top: i,
      right: s,
      bottom: o
    };
  }
  drawBackground() {
    const { backgroundColor: t, grid: { circular: e } } = this.options;
    if (t) {
      const i = this.ctx;
      i.save(), i.beginPath(), Wa(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: i, grid: s, border: o } = e, a = this._pointLabels.length;
    let r, l, c;
    if (e.pointLabels.display && qd(this, a), s.display && this.ticks.forEach((h, u) => {
      if (u !== 0 || u === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(h.value);
        const d = this.getContext(u), f = s.setContext(d), g = o.setContext(d);
        Kd(this, f, l, a, g);
      }
    }), i.display) {
      for (t.save(), r = a - 1; r >= 0; r--) {
        const h = i.setContext(this.getPointLabelContext(r)), { color: u, lineWidth: d } = h;
        !d || !u || (t.lineWidth = d, t.strokeStyle = u, t.setLineDash(h.borderDash), t.lineDashOffset = h.borderDashOffset, l = this.getDistanceFromCenterForValue(e.reverse ? this.min : this.max), c = this.getPointPosition(r, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {
  }
  drawLabels() {
    const t = this.ctx, e = this.options, i = e.ticks;
    if (!i.display)
      return;
    const s = this.getIndexAngle(0);
    let o, a;
    t.save(), t.translate(this.xCenter, this.yCenter), t.rotate(s), t.textAlign = "center", t.textBaseline = "middle", this.ticks.forEach((r, l) => {
      if (l === 0 && this.min >= 0 && !e.reverse)
        return;
      const c = i.setContext(this.getContext(l)), h = vt(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = h.string, a = t.measureText(r.label).width, t.fillStyle = c.backdropColor;
        const u = Tt(c.backdropPadding);
        t.fillRect(-a / 2 - u.left, -o - h.size / 2 - u.top, a + u.width, h.size + u.height);
      }
      _e(t, r.label, 0, -o, h, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
const Qn = {
  millisecond: {
    common: !0,
    size: 1,
    steps: 1e3
  },
  second: {
    common: !0,
    size: 1e3,
    steps: 60
  },
  minute: {
    common: !0,
    size: 6e4,
    steps: 60
  },
  hour: {
    common: !0,
    size: 36e5,
    steps: 24
  },
  day: {
    common: !0,
    size: 864e5,
    steps: 30
  },
  week: {
    common: !1,
    size: 6048e5,
    steps: 4
  },
  month: {
    common: !0,
    size: 2628e6,
    steps: 12
  },
  quarter: {
    common: !1,
    size: 7884e6,
    steps: 4
  },
  year: {
    common: !0,
    size: 3154e7
  }
}, Dt = /* @__PURE__ */ Object.keys(Qn);
function ko(n, t) {
  return n - t;
}
function Oo(n, t) {
  if (G(t))
    return null;
  const e = n._adapter, { parser: i, round: s, isoWeekday: o } = n._parseOpts;
  let a = t;
  return typeof i == "function" && (a = i(a)), ft(a) || (a = typeof i == "string" ? e.parse(a, i) : e.parse(a)), a === null ? null : (s && (a = s === "week" && (Le(o) || o === !0) ? e.startOf(a, "isoWeek", o) : e.startOf(a, s)), +a);
}
function Mo(n, t, e, i) {
  const s = Dt.length;
  for (let o = Dt.indexOf(n); o < s - 1; ++o) {
    const a = Qn[Dt[o]], r = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
    if (a.common && Math.ceil((e - t) / (r * a.size)) <= i)
      return Dt[o];
  }
  return Dt[s - 1];
}
function Qd(n, t, e, i, s) {
  for (let o = Dt.length - 1; o >= Dt.indexOf(e); o--) {
    const a = Dt[o];
    if (Qn[a].common && n._adapter.diff(s, i, a) >= t - 1)
      return a;
  }
  return Dt[e ? Dt.indexOf(e) : 0];
}
function tf(n) {
  for (let t = Dt.indexOf(n) + 1, e = Dt.length; t < e; ++t)
    if (Qn[Dt[t]].common)
      return Dt[t];
}
function Co(n, t, e) {
  if (!e)
    n[t] = !0;
  else if (e.length) {
    const { lo: i, hi: s } = zi(e, t), o = e[i] >= t ? e[i] : e[s];
    n[o] = !0;
  }
}
function ef(n, t, e, i) {
  const s = n._adapter, o = +s.startOf(t[0].value, i), a = t[t.length - 1].value;
  let r, l;
  for (r = o; r <= a; r = +s.add(r, 1, i))
    l = e[r], l >= 0 && (t[l].major = !0);
  return t;
}
function To(n, t, e) {
  const i = [], s = {}, o = t.length;
  let a, r;
  for (a = 0; a < o; ++a)
    r = t[a], s[r] = a, i.push({
      value: r,
      major: !1
    });
  return o === 0 || !e ? i : ef(n, i, s, e);
}
class Li extends we {
  static id = "time";
  static defaults = {
    bounds: "data",
    adapters: {},
    time: {
      parser: !1,
      unit: !1,
      round: !1,
      isoWeekday: !1,
      minUnit: "millisecond",
      displayFormats: {}
    },
    ticks: {
      source: "auto",
      callback: !1,
      major: {
        enabled: !1
      }
    }
  };
  constructor(t) {
    super(t), this._cache = {
      data: [],
      labels: [],
      all: []
    }, this._unit = "day", this._majorUnit = void 0, this._offsets = {}, this._normalized = !1, this._parseOpts = void 0;
  }
  init(t, e = {}) {
    const i = t.time || (t.time = {}), s = this._adapter = new nh._date(t.adapters.date);
    s.init(e), qe(i.displayFormats, s.formats()), this._parseOpts = {
      parser: i.parser,
      round: i.round,
      isoWeekday: i.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : Oo(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), this._cache = {
      data: [],
      labels: [],
      all: []
    };
  }
  determineDataLimits() {
    const t = this.options, e = this._adapter, i = t.time.unit || "day";
    let { min: s, max: o, minDefined: a, maxDefined: r } = this.getUserBounds();
    function l(c) {
      !a && !isNaN(c.min) && (s = Math.min(s, c.min)), !r && !isNaN(c.max) && (o = Math.max(o, c.max));
    }
    (!a || !r) && (l(this._getLabelBounds()), (t.bounds !== "ticks" || t.ticks.source !== "labels") && l(this.getMinMax(!1))), s = ft(s) && !isNaN(s) ? s : +e.startOf(Date.now(), i), o = ft(o) && !isNaN(o) ? o : +e.endOf(Date.now(), i) + 1, this.min = Math.min(s, o - 1), this.max = Math.max(s + 1, o);
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let e = Number.POSITIVE_INFINITY, i = Number.NEGATIVE_INFINITY;
    return t.length && (e = t[0], i = t[t.length - 1]), {
      min: e,
      max: i
    };
  }
  buildTicks() {
    const t = this.options, e = t.time, i = t.ticks, s = i.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" && s.length && (this.min = this._userMin || s[0], this.max = this._userMax || s[s.length - 1]);
    const o = this.min, a = this.max, r = xl(s, o, a);
    return this._unit = e.unit || (i.autoSkip ? Mo(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Qd(this, r.length, e.minUnit, this.min, this.max)), this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : tf(this._unit), this.initOffsets(s), t.reverse && r.reverse(), To(this, r, this._majorUnit);
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip && this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t = []) {
    let e = 0, i = 0, s, o;
    this.options.offset && t.length && (s = this.getDecimalForValue(t[0]), t.length === 1 ? e = 1 - s : e = (this.getDecimalForValue(t[1]) - s) / 2, o = this.getDecimalForValue(t[t.length - 1]), t.length === 1 ? i = o : i = (o - this.getDecimalForValue(t[t.length - 2])) / 2);
    const a = t.length < 3 ? 0.5 : 0.25;
    e = St(e, 0, a), i = St(i, 0, a), this._offsets = {
      start: e,
      end: i,
      factor: 1 / (e + 1 + i)
    };
  }
  _generate() {
    const t = this._adapter, e = this.min, i = this.max, s = this.options, o = s.time, a = o.unit || Mo(o.minUnit, e, i, this._getLabelCapacity(e)), r = U(s.ticks.stepSize, 1), l = a === "week" ? o.isoWeekday : !1, c = Le(l) || l === !0, h = {};
    let u = e, d, f;
    if (c && (u = +t.startOf(u, "isoWeek", l)), u = +t.startOf(u, c ? "day" : a), t.diff(i, e, a) > 1e5 * r)
      throw new Error(e + " and " + i + " are too far apart with stepSize of " + r + " " + a);
    const g = s.ticks.source === "data" && this.getDataTimestamps();
    for (d = u, f = 0; d < i; d = +t.add(d, r, a), f++)
      Co(h, d, g);
    return (d === i || s.bounds === "ticks" || f === 1) && Co(h, d, g), Object.keys(h).sort(ko).map((p) => +p);
  }
  getLabelForValue(t) {
    const e = this._adapter, i = this.options.time;
    return i.tooltipFormat ? e.format(t, i.tooltipFormat) : e.format(t, i.displayFormats.datetime);
  }
  format(t, e) {
    const s = this.options.time.displayFormats, o = this._unit, a = e || s[o];
    return this._adapter.format(t, a);
  }
  _tickFormatFunction(t, e, i, s) {
    const o = this.options, a = o.ticks.callback;
    if (a)
      return it(a, [
        t,
        e,
        i
      ], this);
    const r = o.time.displayFormats, l = this._unit, c = this._majorUnit, h = l && r[l], u = c && r[c], d = i[e], f = c && u && d && d.major;
    return this._adapter.format(t, s || (f ? u : h));
  }
  generateTickLabels(t) {
    let e, i, s;
    for (e = 0, i = t.length; e < i; ++e)
      s = t[e], s.label = this._tickFormatFunction(s.value, e, t);
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const e = this._offsets, i = this.getDecimalForValue(t);
    return this.getPixelForDecimal((e.start + i) * e.factor);
  }
  getValueForPixel(t) {
    const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end;
    return this.min + i * (this.max - this.min);
  }
  _getLabelSize(t) {
    const e = this.options.ticks, i = this.ctx.measureText(t).width, s = Nt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(s), a = Math.sin(s), r = this._resolveTickFontOptions(0).size;
    return {
      w: i * o + r * a,
      h: i * a + r * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, i = e.displayFormats, s = i[e.unit] || i.millisecond, o = this._tickFormatFunction(t, 0, To(this, [
      t
    ], this._majorUnit), s), a = this._getLabelSize(o), r = Math.floor(this.isHorizontal() ? this.width / a.w : this.height / a.h) - 1;
    return r > 0 ? r : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [], e, i;
    if (t.length)
      return t;
    const s = this.getMatchingVisibleMetas();
    if (this._normalized && s.length)
      return this._cache.data = s[0].controller.getAllParsedValues(this);
    for (e = 0, i = s.length; e < i; ++e)
      t = t.concat(s[e].controller.getAllParsedValues(this));
    return this._cache.data = this.normalize(t);
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let e, i;
    if (t.length)
      return t;
    const s = this.getLabels();
    for (e = 0, i = s.length; e < i; ++e)
      t.push(Oo(this, s[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return Qo(t.sort(ko));
  }
}
function Dn(n, t, e) {
  let i = 0, s = n.length - 1, o, a, r, l;
  e ? (t >= n[i].pos && t <= n[s].pos && ({ lo: i, hi: s } = Jt(n, "pos", t)), { pos: o, time: r } = n[i], { pos: a, time: l } = n[s]) : (t >= n[i].time && t <= n[s].time && ({ lo: i, hi: s } = Jt(n, "time", t)), { time: o, pos: r } = n[i], { time: a, pos: l } = n[s]);
  const c = a - o;
  return c ? r + (l - r) * (t - o) / c : r;
}
class nf extends Li {
  static id = "timeseries";
  static defaults = Li.defaults;
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Dn(e, this.min), this._tableRange = Dn(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: i } = this, s = [], o = [];
    let a, r, l, c, h;
    for (a = 0, r = t.length; a < r; ++a)
      c = t[a], c >= e && c <= i && s.push(c);
    if (s.length < 2)
      return [
        {
          time: e,
          pos: 0
        },
        {
          time: i,
          pos: 1
        }
      ];
    for (a = 0, r = s.length; a < r; ++a)
      h = s[a + 1], l = s[a - 1], c = s[a], Math.round((h + l) / 2) !== c && o.push({
        time: c,
        pos: a / (r - 1)
      });
    return o;
  }
  _generate() {
    const t = this.min, e = this.max;
    let i = super.getDataTimestamps();
    return (!i.includes(t) || !i.length) && i.splice(0, 0, t), (!i.includes(e) || i.length === 1) && i.push(e), i.sort((s, o) => s - o);
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length)
      return t;
    const e = this.getDataTimestamps(), i = this.getLabelTimestamps();
    return e.length && i.length ? t = this.normalize(e.concat(i)) : t = e.length ? e : i, t = this._cache.all = t, t;
  }
  getDecimalForValue(t) {
    return (Dn(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end;
    return Dn(this._table, i * this._tableRange + this._minPos, !0);
  }
}
var sf = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CategoryScale: Rd,
  LinearScale: Id,
  LogarithmicScale: Bd,
  RadialLinearScale: Jd,
  TimeScale: Li,
  TimeSeriesScale: nf
});
const of = [
  eh,
  Eu,
  Pd,
  sf
], Po = (n, t) => {
  for (const e of Object.keys(t))
    n.on(e, t[e]);
}, Ha = (n) => {
  for (const t of Object.keys(n)) {
    const e = n[t];
    e && ee(e.cancel) && e.cancel();
  }
}, af = (n) => !n || typeof n.charAt != "function" ? n : n.charAt(0).toUpperCase() + n.slice(1), ee = (n) => typeof n == "function", pt = (n, t, e) => {
  for (const i in e) {
    const s = "set" + af(i);
    n[s] ? Kt(
      () => e[i],
      (o, a) => {
        n[s](o, a);
      }
    ) : t[s] && Kt(
      () => e[i],
      (o) => {
        t[s](o);
      }
    );
  }
}, dt = (n, t, e = {}) => {
  const i = { ...e };
  for (const s in n) {
    const o = t[s], a = n[s];
    o && (o && o.custom === !0 || a !== void 0 && (i[s] = a));
  }
  return i;
}, wt = (n) => {
  const t = {}, e = {};
  for (const i in n)
    if (i.startsWith("on") && !i.startsWith("onUpdate") && i !== "onReady") {
      const s = i.slice(2).toLocaleLowerCase();
      t[s] = n[i];
    } else
      e[i] = n[i];
  return { listeners: t, attrs: e };
}, rf = async (n) => {
  const t = await Promise.all([
    import("./marker-icon-2x-DVSLMKfE.js"),
    import("./marker-icon-DbhCZIpd.js"),
    import("./marker-shadow-ZZvxUwqf.js")
  ]);
  delete n.Default.prototype._getIconUrl, n.Default.mergeOptions({
    iconRetinaUrl: t[0].default,
    iconUrl: t[1].default,
    shadowUrl: t[2].default
  });
}, An = (n) => {
  const t = W(
    (...i) => console.warn(`Method ${n} has been invoked without being replaced`)
  ), e = (...i) => t.value(...i);
  return e.wrapped = t, Bt(n, e), e;
}, Rn = (n, t) => n.wrapped.value = t, ct = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, nt = (n) => {
  const t = ut(n);
  if (t === void 0)
    throw new Error(
      `Attempt to inject ${n.description} before it was provided.`
    );
  return t;
}, mt = Symbol(
  "useGlobalLeaflet"
), Pt = Symbol("addLayer"), ti = Symbol("removeLayer"), un = Symbol(
  "registerControl"
), $a = Symbol(
  "registerLayerControl"
), Ua = Symbol(
  "canSetParentHtml"
), Ya = Symbol("setParentHtml"), Xa = Symbol("setIcon"), Ga = Symbol("bindPopup"), qa = Symbol("bindTooltip"), Ka = Symbol("unbindPopup"), Za = Symbol("unbindTooltip"), dn = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, fn = (n) => ({ options: n.options, methods: {} }), Re = {
  ...dn,
  pane: {
    type: String
  },
  attribution: {
    type: String
  },
  name: {
    type: String,
    custom: !0
  },
  layerType: {
    type: String,
    custom: !0
  },
  visible: {
    type: Boolean,
    custom: !0,
    default: !0
  }
}, gn = (n, t, e) => {
  const i = nt(Pt), s = nt(ti), { options: o, methods: a } = fn(n), r = dt(
    n,
    Re,
    o
  ), l = () => i({ leafletObject: t.value }), c = () => s({ leafletObject: t.value }), h = {
    ...a,
    setAttribution(u) {
      c(), t.value.options.attribution = u, n.visible && l();
    },
    setName() {
      c(), n.visible && l();
    },
    setLayerType() {
      c(), n.visible && l();
    },
    setVisible(u) {
      t.value && (u ? l() : c());
    },
    bindPopup(u) {
      if (!t.value || !ee(t.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      t.value.bindPopup(u);
    },
    bindTooltip(u) {
      if (!t.value || !ee(t.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      t.value.bindTooltip(u);
    },
    unbindTooltip() {
      t.value && (ee(t.value.closeTooltip) && t.value.closeTooltip(), ee(t.value.unbindTooltip) && t.value.unbindTooltip());
    },
    unbindPopup() {
      t.value && (ee(t.value.closePopup) && t.value.closePopup(), ee(t.value.unbindPopup) && t.value.unbindPopup());
    },
    updateVisibleProp(u) {
      e.emit("update:visible", u);
    }
  };
  return Bt(Ga, h.bindPopup), Bt(qa, h.bindTooltip), Bt(Ka, h.unbindPopup), Bt(Za, h.unbindTooltip), Ei(() => {
    h.unbindPopup(), h.unbindTooltip(), c();
  }), { options: r, methods: h };
}, $t = (n, t) => {
  if (n && t.default)
    return Se("div", { style: { display: "none" } }, t.default());
}, Ja = {
  ...Re,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, lf = (n, t, e) => {
  const { options: i, methods: s } = gn(
    n,
    t,
    e
  );
  return { options: dt(
    n,
    Ja,
    i
  ), methods: s };
}, Ji = {
  ...Ja,
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
}, Qa = (n, t, e) => {
  const { options: i, methods: s } = lf(n, t, e), o = dt(
    n,
    Ji,
    i
  ), a = nt(ti), r = {
    ...s,
    setStroke(l) {
      t.value.setStyle({ stroke: l });
    },
    setColor(l) {
      t.value.setStyle({ color: l });
    },
    setWeight(l) {
      t.value.setStyle({ weight: l });
    },
    setOpacity(l) {
      t.value.setStyle({ opacity: l });
    },
    setLineCap(l) {
      t.value.setStyle({ lineCap: l });
    },
    setLineJoin(l) {
      t.value.setStyle({ lineJoin: l });
    },
    setDashArray(l) {
      t.value.setStyle({ dashArray: l });
    },
    setDashOffset(l) {
      t.value.setStyle({ dashOffset: l });
    },
    setFill(l) {
      t.value.setStyle({ fill: l });
    },
    setFillColor(l) {
      t.value.setStyle({ fillColor: l });
    },
    setFillOpacity(l) {
      t.value.setStyle({ fillOpacity: l });
    },
    setFillRule(l) {
      t.value.setStyle({ fillRule: l });
    },
    setClassName(l) {
      t.value.setStyle({ className: l });
    }
  };
  return ln(() => {
    a({ leafletObject: t.value });
  }), { options: o, methods: r };
}, Qi = {
  ...Ji,
  /**
   * Radius of the marker in pixels.
   */
  radius: {
    type: Number
  },
  latLng: {
    type: [Object, Array],
    required: !0,
    custom: !0
  }
}, tr = (n, t, e) => {
  const { options: i, methods: s } = Qa(
    n,
    t,
    e
  ), o = dt(
    n,
    Qi,
    i
  ), a = {
    ...s,
    setRadius(r) {
      t.value.setRadius(r);
    },
    setLatLng(r) {
      t.value.setLatLng(r);
    }
  };
  return { options: o, methods: a };
}, er = {
  ...Qi,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, cf = (n, t, e) => {
  const { options: i, methods: s } = tr(n, t, e), o = dt(
    n,
    er,
    i
  ), a = {
    ...s
  };
  return { options: o, methods: a };
};
ht({
  name: "LCircle",
  props: er,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = nt(Pt), { options: a, methods: r } = cf(n, e, t);
    return gt(async () => {
      const { circle: l } = s ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(l(n.latLng, a));
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), pt(r, e.value, n), o({
        ...n,
        ...r,
        leafletObject: e.value
      }), i.value = !0, st(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
const hf = ht({
  name: "LCircleMarker",
  props: Qi,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = nt(Pt), { options: a, methods: r } = tr(
      n,
      e,
      t
    );
    return gt(async () => {
      const { circleMarker: l } = s ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        l(n.latLng, a)
      );
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), pt(r, e.value, n), o({
        ...n,
        ...r,
        leafletObject: e.value
      }), i.value = !0, st(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
}), Ee = {
  ...dn,
  position: {
    type: String
  }
}, pn = (n, t) => {
  const { options: e, methods: i } = fn(n), s = dt(
    n,
    Ee,
    e
  ), o = {
    ...i,
    setPosition(a) {
      t.value && t.value.setPosition(a);
    }
  };
  return Ei(() => {
    t.value && t.value.remove();
  }), { options: s, methods: o };
}, uf = (n) => n.default ? Se("div", { ref: "root" }, n.default()) : null;
ht({
  name: "LControl",
  props: {
    ...Ee,
    disableClickPropagation: {
      type: Boolean,
      custom: !0,
      default: !0
    },
    disableScrollPropagation: {
      type: Boolean,
      custom: !0,
      default: !1
    }
  },
  setup(n, t) {
    const e = W(), i = W(), s = ut(mt), o = nt(un), { options: a, methods: r } = pn(n, e);
    return gt(async () => {
      const { Control: l, DomEvent: c } = s ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js"), h = l.extend({
        onAdd() {
          return i.value;
        }
      });
      e.value = yt(new h(a)), pt(r, e.value, n), o({ leafletObject: e.value }), n.disableClickPropagation && i.value && c.disableClickPropagation(i.value), n.disableScrollPropagation && i.value && c.disableScrollPropagation(i.value), st(() => t.emit("ready", e.value));
    }), { root: i, leafletObject: e };
  },
  render() {
    return uf(this.$slots);
  }
});
const nr = {
  ...Ee,
  prefix: {
    type: String
  }
}, df = (n, t) => {
  const { options: e, methods: i } = pn(
    n,
    t
  ), s = dt(
    n,
    nr,
    e
  ), o = {
    ...i,
    setPrefix(a) {
      t.value.setPrefix(a);
    }
  };
  return { options: s, methods: o };
};
ht({
  name: "LControlAttribution",
  props: nr,
  setup(n, t) {
    const e = W(), i = ut(mt), s = nt(un), { options: o, methods: a } = df(n, e);
    return gt(async () => {
      const { control: r } = i ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        r.attribution(o)
      ), pt(a, e.value, n), s({ leafletObject: e.value }), st(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const ir = {
  ...Ee,
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
}, ff = (n, t) => {
  const { options: e } = pn(n, t);
  return { options: dt(
    n,
    ir,
    e
  ), methods: {
    addLayer(i) {
      i.layerType === "base" ? t.value.addBaseLayer(i.leafletObject, i.name) : i.layerType === "overlay" && t.value.addOverlay(i.leafletObject, i.name);
    },
    removeLayer(i) {
      t.value.removeLayer(i.leafletObject);
    }
  } };
};
ht({
  name: "LControlLayers",
  props: ir,
  setup(n, t) {
    const e = W(), i = ut(mt), s = nt($a), { options: o, methods: a } = ff(n, e);
    return gt(async () => {
      const { control: r } = i ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        r.layers(void 0, void 0, o)
      ), pt(a, e.value, n), s({
        ...n,
        ...a,
        leafletObject: e.value
      }), st(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const sr = {
  ...Ee,
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
}, gf = (n, t) => {
  const { options: e, methods: i } = pn(
    n,
    t
  );
  return { options: dt(
    n,
    sr,
    e
  ), methods: i };
};
ht({
  name: "LControlScale",
  props: sr,
  setup(n, t) {
    const e = W(), i = ut(mt), s = nt(un), { options: o, methods: a } = gf(n, e);
    return gt(async () => {
      const { control: r } = i ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(r.scale(o)), pt(a, e.value, n), s({ leafletObject: e.value }), st(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const or = {
  ...Ee,
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
}, pf = (n, t) => {
  const { options: e, methods: i } = pn(
    n,
    t
  );
  return { options: dt(
    n,
    or,
    e
  ), methods: i };
};
ht({
  name: "LControlZoom",
  props: or,
  setup(n, t) {
    const e = W(), i = ut(mt), s = nt(un), { options: o, methods: a } = pf(n, e);
    return gt(async () => {
      const { control: r } = i ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(r.zoom(o)), pt(a, e.value, n), s({ leafletObject: e.value }), st(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const ei = {
  ...Re
}, ts = (n, t, e) => {
  const { options: i, methods: s } = gn(
    n,
    t,
    e
  ), o = dt(
    n,
    ei,
    i
  ), a = {
    ...s,
    addLayer(r) {
      t.value.addLayer(r.leafletObject);
    },
    removeLayer(r) {
      t.value.removeLayer(r.leafletObject);
    }
  };
  return Bt(Pt, a.addLayer), Bt(ti, a.removeLayer), { options: o, methods: a };
}, ar = {
  ...ei
}, mf = (n, t, e) => {
  const { options: i, methods: s } = ts(
    n,
    t,
    e
  ), o = dt(
    n,
    ar,
    i
  ), a = {
    ...s
  };
  return { options: o, methods: a };
};
ht({
  props: ar,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = nt(Pt), { methods: a, options: r } = mf(
      n,
      e,
      t
    );
    return gt(async () => {
      const { featureGroup: l } = s ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        l(void 0, r)
      );
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), pt(a, e.value, n), o({
        ...n,
        ...a,
        leafletObject: e.value
      }), i.value = !0, st(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
const rr = {
  ...ei,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, bf = (n, t, e) => {
  const { options: i, methods: s } = ts(
    n,
    t,
    e
  ), o = dt(
    n,
    rr,
    i
  );
  Object.prototype.hasOwnProperty.call(n, "optionsStyle") && (o.style = n.optionsStyle);
  const a = {
    ...s,
    setGeojson(r) {
      t.value.clearLayers(), t.value.addData(r);
    },
    setOptionsStyle(r) {
      t.value.setStyle(r);
    },
    getGeoJSONData() {
      return t.value.toGeoJSON();
    },
    getBounds() {
      return t.value.getBounds();
    }
  };
  return { options: o, methods: a };
};
ht({
  props: rr,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = nt(Pt), { methods: a, options: r } = bf(n, e, t);
    return gt(async () => {
      const { geoJSON: l } = s ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(l(n.geojson, r));
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), pt(a, e.value, n), o({
        ...n,
        ...a,
        leafletObject: e.value
      }), i.value = !0, st(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
const es = {
  ...Re,
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
}, lr = (n, t, e) => {
  const { options: i, methods: s } = gn(
    n,
    t,
    e
  ), o = dt(
    n,
    es,
    i
  ), a = {
    ...s,
    setTileComponent() {
      var r;
      (r = t.value) == null || r.redraw();
    }
  };
  return Ei(() => {
    t.value.off();
  }), { options: o, methods: a };
}, yf = (n, t, e, i) => n.extend({
  initialize(s) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), e.setOptions(this, s);
  },
  createTile(s) {
    const o = this._tileCoordsToKey(s);
    this.tileComponents[o] = t.create("div");
    const a = Se({ setup: i, props: ["coords"] }, { coords: s });
    return Mr(a, this.tileComponents[o]), this.tileComponents[o];
  },
  _unloadTile(s) {
    const o = this._tileCoordsToKey(s.coords);
    this.tileComponents[o] && (this.tileComponents[o].innerHTML = "", this.tileComponents[o] = void 0);
  }
});
ht({
  props: {
    ...es,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(n, t) {
    const e = W(), i = W(null), s = W(!1), o = ut(mt), a = nt(Pt), { options: r, methods: l } = lr(n, e, t);
    return gt(async () => {
      const { GridLayer: c, DomUtil: h, Util: u } = o ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js"), d = yf(
        c,
        h,
        u,
        n.childRender
      );
      e.value = yt(new d(r));
      const { listeners: f } = wt(t.attrs);
      e.value.on(f), pt(l, e.value, n), a({
        ...n,
        ...l,
        leafletObject: e.value
      }), s.value = !0, st(() => t.emit("ready", e.value));
    }), { root: i, ready: s, leafletObject: e };
  },
  render() {
    return this.ready ? Se("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const Lo = {
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
ht({
  name: "LIcon",
  props: {
    ...Lo,
    ...dn
  },
  setup(n, t) {
    const e = W(), i = ut(mt), s = nt(Ua), o = nt(Ya), a = nt(Xa);
    let r, l, c, h, u;
    const d = (m, b, _) => {
      const P = m && m.innerHTML;
      if (!b) {
        _ && u && s() && o(P);
        return;
      }
      const { listeners: k } = wt(t.attrs);
      u && l(u, k);
      const { options: v } = fn(n), C = dt(
        n,
        Lo,
        v
      );
      P && (C.html = P), u = C.html ? c(C) : h(C), r(u, k), a(u);
    }, f = () => {
      st(() => d(e.value, !0, !1));
    }, g = () => {
      st(() => d(e.value, !1, !0));
    }, p = {
      setIconUrl: f,
      setIconRetinaUrl: f,
      setIconSize: f,
      setIconAnchor: f,
      setPopupAnchor: f,
      setTooltipAnchor: f,
      setShadowUrl: f,
      setShadowRetinaUrl: f,
      setShadowAnchor: f,
      setBgPos: f,
      setClassName: f,
      setHtml: f
    };
    return gt(async () => {
      const {
        DomEvent: m,
        divIcon: b,
        icon: _
      } = i ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r = m.on, l = m.off, c = b, h = _, pt(p, {}, n), new MutationObserver(g).observe(e.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), f();
    }), { root: e };
  },
  render() {
    const n = this.$slots.default ? this.$slots.default() : void 0;
    return Se("div", { ref: "root" }, n);
  }
});
const cr = {
  ...Re,
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
    required: !0,
    custom: !0
  },
  bounds: {
    type: [Array, Object],
    required: !0,
    custom: !0
  }
}, vf = (n, t, e) => {
  const { options: i, methods: s } = gn(
    n,
    t,
    e
  ), o = dt(
    n,
    cr,
    i
  ), a = {
    ...s,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(r) {
      return t.value.setOpacity(r);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(r) {
      return t.value.setUrl(r);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(r) {
      return t.value.setBounds(r);
    },
    /**
     * Get the bounds that this ImageOverlay covers
     * @returns {LatLngBounds}
     */
    getBounds() {
      return t.value.getBounds();
    },
    /**
     * Returns the instance of HTMLImageElement used by this overlay.
     * @returns {HTMLElement}
     */
    getElement() {
      return t.value.getElement();
    },
    /**
     * Brings the layer to the top of all overlays.
     */
    bringToFront() {
      return t.value.bringToFront();
    },
    /**
     * Brings the layer to the bottom of all overlays.
     */
    bringToBack() {
      return t.value.bringToBack();
    },
    /**
     * Changes the zIndex of the image overlay.
     * @param {number} zIndex
     */
    setZIndex(r) {
      return t.value.setZIndex(r);
    }
  };
  return { options: o, methods: a };
};
ht({
  name: "LImageOverlay",
  props: cr,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = nt(Pt), { options: a, methods: r } = vf(
      n,
      e,
      t
    );
    return gt(async () => {
      const { imageOverlay: l } = s ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        l(n.url, n.bounds, a)
      );
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), pt(r, e.value, n), o({
        ...n,
        ...r,
        leafletObject: e.value
      }), i.value = !0, st(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
ht({
  props: ei,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = nt(Pt), { methods: a } = ts(n, e, t);
    return gt(async () => {
      const { layerGroup: r } = s ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        r(void 0, n.options)
      );
      const { listeners: l } = wt(t.attrs);
      e.value.on(l), pt(a, e.value, n), o({
        ...n,
        ...a,
        leafletObject: e.value
      }), i.value = !0, st(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
function hr(n, t, e) {
  var i, s, o;
  t === void 0 && (t = 50), e === void 0 && (e = {});
  var a = (i = e.isImmediate) != null && i, r = (s = e.callback) != null && s, l = e.maxWait, c = Date.now(), h = [];
  function u() {
    if (l !== void 0) {
      var f = Date.now() - c;
      if (f + t >= l)
        return l - f;
    }
    return t;
  }
  var d = function() {
    var f = [].slice.call(arguments), g = this;
    return new Promise(function(p, m) {
      var b = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, c = Date.now(), !a) {
          var P = n.apply(g, f);
          r && r(P), h.forEach(function(k) {
            return (0, k.resolve)(P);
          }), h = [];
        }
      }, u()), b) {
        var _ = n.apply(g, f);
        return r && r(_), p(_);
      }
      h.push({ resolve: p, reject: m });
    });
  };
  return d.cancel = function(f) {
    o !== void 0 && clearTimeout(o), h.forEach(function(g) {
      return (0, g.reject)(f);
    }), h = [];
  }, d;
}
const Do = {
  ...dn,
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
    default: !0,
    custom: !0
  }
}, xf = ht({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: Do,
  setup(n, t) {
    const e = W(), i = Wo({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: s } = fn(n), o = dt(
      n,
      Do,
      s
    ), { listeners: a, attrs: r } = wt(t.attrs), l = An(Pt), c = An(ti), h = An(un), u = An(
      $a
    );
    Bt(mt, n.useGlobalLeaflet);
    const d = Ft(() => {
      const b = {};
      return n.noBlockingAnimations && (b.animate = !1), b;
    }), f = Ft(() => {
      const b = d.value;
      return n.padding && (b.padding = n.padding), n.paddingTopLeft && (b.paddingTopLeft = n.paddingTopLeft), n.paddingBottomRight && (b.paddingBottomRight = n.paddingBottomRight), b;
    }), g = {
      moveend: hr((b) => {
        i.leafletRef && (t.emit("update:zoom", i.leafletRef.getZoom()), t.emit("update:center", i.leafletRef.getCenter()), t.emit("update:bounds", i.leafletRef.getBounds()));
      }),
      overlayadd(b) {
        const _ = i.layersInControl.find((P) => P.name === b.name);
        _ && _.updateVisibleProp(!0);
      },
      overlayremove(b) {
        const _ = i.layersInControl.find((P) => P.name === b.name);
        _ && _.updateVisibleProp(!1);
      }
    };
    gt(async () => {
      n.useGlobalLeaflet && (ct.L = ct.L || await import("./leaflet-src-BDi_6Owi.js").then((O) => O.l));
      const { map: b, CRS: _, Icon: P, latLngBounds: k, latLng: v, stamp: C } = n.useGlobalLeaflet ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        o.beforeMapMount && await o.beforeMapMount();
      } catch (O) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${O.message}`
        );
      }
      await rf(P);
      const w = typeof o.crs == "string" ? _[o.crs] : o.crs;
      o.crs = w || _.EPSG3857;
      const T = {
        addLayer(O) {
          O.layerType !== void 0 && (i.layerControl === void 0 ? i.layersToAdd.push(O) : i.layersInControl.find(
            (A) => C(A.leafletObject) === C(O.leafletObject)
          ) || (i.layerControl.addLayer(O), i.layersInControl.push(O))), O.visible !== !1 && i.leafletRef.addLayer(O.leafletObject);
        },
        removeLayer(O) {
          O.layerType !== void 0 && (i.layerControl === void 0 ? i.layersToAdd = i.layersToAdd.filter(
            (A) => A.name !== O.name
          ) : (i.layerControl.removeLayer(O.leafletObject), i.layersInControl = i.layersInControl.filter(
            (A) => C(A.leafletObject) !== C(O.leafletObject)
          ))), i.leafletRef.removeLayer(O.leafletObject);
        },
        registerLayerControl(O) {
          i.layerControl = O, i.layersToAdd.forEach((A) => {
            i.layerControl.addLayer(A);
          }), i.layersToAdd = [], h(O);
        },
        registerControl(O) {
          i.leafletRef.addControl(O.leafletObject);
        },
        setZoom(O) {
          const A = i.leafletRef.getZoom();
          O !== A && i.leafletRef.setZoom(O, d.value);
        },
        setCrs(O) {
          const A = i.leafletRef.getBounds();
          i.leafletRef.options.crs = O, i.leafletRef.fitBounds(A, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(O) {
          i.leafletRef.fitBounds(O, f.value);
        },
        setBounds(O) {
          if (!O)
            return;
          const A = k(O);
          A.isValid() && !(i.lastSetBounds || i.leafletRef.getBounds()).equals(A, 0) && (i.lastSetBounds = A, i.leafletRef.fitBounds(A));
        },
        setCenter(O) {
          if (O == null)
            return;
          const A = v(O), B = i.lastSetCenter || i.leafletRef.getCenter();
          (B.lat !== A.lat || B.lng !== A.lng) && (i.lastSetCenter = A, i.leafletRef.panTo(A, d.value));
        }
      };
      Rn(l, T.addLayer), Rn(c, T.removeLayer), Rn(h, T.registerControl), Rn(u, T.registerLayerControl), i.leafletRef = yt(b(e.value, o)), pt(T, i.leafletRef, n), Po(i.leafletRef, g), Po(i.leafletRef, a), i.ready = !0, st(() => t.emit("ready", i.leafletRef));
    }), ln(() => {
      Ha(g), i.leafletRef && (i.leafletRef.off(), i.leafletRef.remove());
    });
    const p = Ft(() => i.leafletRef), m = Ft(() => i.ready);
    return { root: e, ready: m, leafletObject: p, attrs: r };
  },
  render({ attrs: n }) {
    return n.style || (n.style = {}), n.style.width || (n.style.width = "100%"), n.style.height || (n.style.height = "100%"), Se(
      "div",
      {
        ...n,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), _f = ["Symbol(Comment)", "Symbol(Text)"], Sf = ["LTooltip", "LPopup"], ur = {
  ...Re,
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
    custom: !0,
    required: !0
  }
}, wf = (n, t, e) => {
  const { options: i, methods: s } = gn(
    n,
    t,
    e
  ), o = dt(
    n,
    ur,
    i
  ), a = {
    ...s,
    setDraggable(r) {
      t.value.dragging && (r ? t.value.dragging.enable() : t.value.dragging.disable());
    },
    latLngSync(r) {
      e.emit("update:latLng", r.latlng), e.emit("update:lat-lng", r.latlng);
    },
    setLatLng(r) {
      if (r != null && t.value) {
        const l = t.value.getLatLng();
        (!l || !l.equals(r)) && t.value.setLatLng(r);
      }
    }
  };
  return { options: o, methods: a };
}, kf = (n, t) => {
  const e = t.slots.default && t.slots.default();
  return e && e.length && e.some(Of);
};
function Of(n) {
  return !(_f.includes(n.type.toString()) || Sf.includes(n.type.name));
}
const Mf = ht({
  name: "LMarker",
  props: ur,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = nt(Pt);
    Bt(
      Ua,
      () => {
        var c;
        return !!((c = e.value) != null && c.getElement());
      }
    ), Bt(Ya, (c) => {
      var h, u;
      const d = ee((h = e.value) == null ? void 0 : h.getElement) && ((u = e.value) == null ? void 0 : u.getElement());
      d && (d.innerHTML = c);
    }), Bt(
      Xa,
      (c) => {
        var h;
        return ((h = e.value) == null ? void 0 : h.setIcon) && e.value.setIcon(c);
      }
    );
    const { options: a, methods: r } = wf(n, e, t), l = {
      moveHandler: hr(r.latLngSync)
    };
    return gt(async () => {
      const { marker: c, divIcon: h } = s ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      kf(a, t) && (a.icon = h({ className: "" })), e.value = yt(c(n.latLng, a));
      const { listeners: u } = wt(t.attrs);
      e.value.on(u), e.value.on("move", l.moveHandler), pt(r, e.value, n), o({
        ...n,
        ...r,
        leafletObject: e.value
      }), i.value = !0, st(() => t.emit("ready", e.value));
    }), ln(() => Ha(l)), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
}), ns = {
  ...Ji,
  smoothFactor: {
    type: Number
  },
  noClip: {
    type: Boolean,
    default: void 0
  },
  latLngs: {
    type: Array,
    required: !0,
    custom: !0
  }
}, dr = (n, t, e) => {
  const { options: i, methods: s } = Qa(
    n,
    t,
    e
  ), o = dt(
    n,
    ns,
    i
  ), a = {
    ...s,
    setSmoothFactor(r) {
      t.value.setStyle({ smoothFactor: r });
    },
    setNoClip(r) {
      t.value.setStyle({ noClip: r });
    },
    addLatLng(r) {
      t.value.addLatLng(r);
    }
  };
  return { options: o, methods: a };
}, $n = {
  ...ns
}, fr = (n, t, e) => {
  const { options: i, methods: s } = dr(
    n,
    t,
    e
  ), o = dt(
    n,
    $n,
    i
  ), a = {
    ...s,
    toGeoJSON(r) {
      return t.value.toGeoJSON(r);
    }
  };
  return { options: o, methods: a };
};
ht({
  name: "LPolygon",
  props: $n,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = nt(Pt), { options: a, methods: r } = fr(n, e, t);
    return gt(async () => {
      const { polygon: l } = s ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(l(n.latLngs, a));
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), pt(r, e.value, n), o({
        ...n,
        ...r,
        leafletObject: e.value
      }), i.value = !0, st(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
ht({
  name: "LPolyline",
  props: ns,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = nt(Pt), { options: a, methods: r } = dr(n, e, t);
    return gt(async () => {
      const { polyline: l } = s ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        l(n.latLngs, a)
      );
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), pt(r, e.value, n), o({
        ...n,
        ...r,
        leafletObject: e.value
      }), i.value = !0, st(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
const gr = {
  ...dn,
  content: {
    type: String,
    default: null
  }
}, pr = (n, t) => {
  const { options: e, methods: i } = fn(n), s = {
    ...i,
    setContent(o) {
      t.value && o !== null && o !== void 0 && t.value.setContent(o);
    }
  };
  return { options: e, methods: s };
}, mr = (n) => n.default ? Se("div", { ref: "root" }, n.default()) : null, Cf = {
  ...gr,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, Tf = (n, t) => {
  const { options: e, methods: i } = pr(n, t);
  return { options: e, methods: i };
}, Pf = ht({
  name: "LPopup",
  props: Cf,
  setup(n, t) {
    const e = W(), i = W(null), s = ut(mt), o = nt(Ga), a = nt(Ka), { options: r, methods: l } = Tf(n, e);
    return gt(async () => {
      const { popup: c } = s ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(c(r)), n.latLng !== void 0 && e.value.setLatLng(n.latLng), pt(l, e.value, n);
      const { listeners: h } = wt(t.attrs);
      e.value.on(h), e.value.setContent(n.content || i.value || ""), o(e.value), st(() => t.emit("ready", e.value));
    }), ln(() => {
      a();
    }), { root: i, leafletObject: e };
  },
  render() {
    return mr(this.$slots);
  }
}), br = {
  ...$n,
  latLngs: {
    ...$n.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, Lf = (n, t, e) => {
  const { options: i, methods: s } = fr(
    n,
    t,
    e
  ), o = dt(
    n,
    br,
    i
  ), a = {
    ...s,
    setBounds(r) {
      t.value.setBounds(r);
    },
    setLatLngs(r) {
      t.value.setBounds(r);
    }
  };
  return { options: o, methods: a };
};
ht({
  name: "LRectangle",
  props: br,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = nt(Pt), { options: a, methods: r } = Lf(n, e, t);
    return gt(async () => {
      const { rectangle: l, latLngBounds: c } = s ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js"), h = n.bounds ? c(n.bounds) : c(n.latLngs || []);
      e.value = yt(l(h, a));
      const { listeners: u } = wt(t.attrs);
      e.value.on(u), pt(r, e.value, n), o({
        ...n,
        ...r,
        leafletObject: e.value
      }), i.value = !0, st(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
const is = {
  ...es,
  tms: {
    type: Boolean,
    default: void 0
  },
  subdomains: {
    type: [String, Array],
    validator: (n) => typeof n == "string" ? !0 : Array.isArray(n) ? n.every((t) => typeof t == "string") : !1
  },
  detectRetina: {
    type: Boolean,
    default: void 0
  },
  url: {
    type: String,
    required: !0,
    custom: !0
  }
}, yr = (n, t, e) => {
  const { options: i, methods: s } = lr(n, t, e), o = dt(
    n,
    is,
    i
  ), a = {
    ...s
  };
  return { options: o, methods: a };
}, Df = ht({
  props: is,
  setup(n, t) {
    const e = W(), i = ut(mt), s = nt(Pt), { options: o, methods: a } = yr(n, e, t);
    return gt(async () => {
      const { tileLayer: r } = i ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(r(n.url, o));
      const { listeners: l } = wt(t.attrs);
      e.value.on(l), pt(a, e.value, n), s({
        ...n,
        ...a,
        leafletObject: e.value
      }), st(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), Af = {
  ...gr
}, Rf = (n, t) => {
  const { options: e, methods: i } = pr(n, t), s = nt(Za);
  return ln(() => {
    s();
  }), { options: e, methods: i };
};
ht({
  name: "LTooltip",
  props: Af,
  setup(n, t) {
    const e = W(), i = W(null), s = ut(mt), o = nt(qa), { options: a, methods: r } = Rf(n, e);
    return gt(async () => {
      const { tooltip: l } = s ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(l(a)), pt(r, e.value, n);
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), e.value.setContent(n.content || i.value || ""), o(e.value), st(() => t.emit("ready", e.value));
    }), { root: i, leafletObject: e };
  },
  render() {
    return mr(this.$slots);
  }
});
const vr = {
  ...is,
  layers: {
    type: String,
    required: !0
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
}, Ef = (n, t, e) => {
  const { options: i, methods: s } = yr(n, t, e);
  return {
    options: dt(
      n,
      vr,
      i
    ),
    methods: {
      ...s
    }
  };
};
ht({
  props: vr,
  setup(n, t) {
    const e = W(), i = ut(mt), s = nt(Pt), { options: o, methods: a } = Ef(
      n,
      e,
      t
    );
    return gt(async () => {
      const { tileLayer: r } = i ? ct.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        r.wms(n.url, o)
      );
      const { listeners: l } = wt(t.attrs);
      e.value.on(l), pt(a, e.value, n), s({
        ...n,
        ...a,
        leafletObject: e.value
      }), st(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
var If = { 207: (n, t, e) => {
  n.exports = e(452);
}, 452: (n) => {
  var t = (function(e) {
    var i, s = Object.prototype, o = s.hasOwnProperty, a = typeof Symbol == "function" ? Symbol : {}, r = a.iterator || "@@iterator", l = a.asyncIterator || "@@asyncIterator", c = a.toStringTag || "@@toStringTag";
    function h(y, S, x) {
      return Object.defineProperty(y, S, { value: x, enumerable: !0, configurable: !0, writable: !0 }), y[S];
    }
    try {
      h({}, "");
    } catch {
      h = function(S, x, L) {
        return S[x] = L;
      };
    }
    function u(y, S, x, L) {
      var R = S && S.prototype instanceof _ ? S : _, H = Object.create(R.prototype), Y = new I(L || []);
      return H._invoke = /* @__PURE__ */ (function(q, Q, j) {
        var ot = f;
        return function(xt, Ie) {
          if (ot === p) throw new Error("Generator is already running");
          if (ot === m) {
            if (xt === "throw") throw Ie;
            return F();
          }
          for (j.method = xt, j.arg = Ie; ; ) {
            var mn = j.delegate;
            if (mn) {
              var ni = B(mn, j);
              if (ni) {
                if (ni === b) continue;
                return ni;
              }
            }
            if (j.method === "next") j.sent = j._sent = j.arg;
            else if (j.method === "throw") {
              if (ot === f) throw ot = m, j.arg;
              j.dispatchException(j.arg);
            } else j.method === "return" && j.abrupt("return", j.arg);
            ot = p;
            var Ve = d(q, Q, j);
            if (Ve.type === "normal") {
              if (ot = j.done ? m : g, Ve.arg === b) continue;
              return { value: Ve.arg, done: j.done };
            }
            Ve.type === "throw" && (ot = m, j.method = "throw", j.arg = Ve.arg);
          }
        };
      })(y, x, Y), H;
    }
    function d(y, S, x) {
      try {
        return { type: "normal", arg: y.call(S, x) };
      } catch (L) {
        return { type: "throw", arg: L };
      }
    }
    e.wrap = u;
    var f = "suspendedStart", g = "suspendedYield", p = "executing", m = "completed", b = {};
    function _() {
    }
    function P() {
    }
    function k() {
    }
    var v = {};
    h(v, r, (function() {
      return this;
    }));
    var C = Object.getPrototypeOf, w = C && C(C(E([])));
    w && w !== s && o.call(w, r) && (v = w);
    var T = k.prototype = _.prototype = Object.create(v);
    function O(y) {
      ["next", "throw", "return"].forEach((function(S) {
        h(y, S, (function(x) {
          return this._invoke(S, x);
        }));
      }));
    }
    function A(y, S) {
      function x(R, H, Y, q) {
        var Q = d(y[R], y, H);
        if (Q.type !== "throw") {
          var j = Q.arg, ot = j.value;
          return ot && typeof ot == "object" && o.call(ot, "__await") ? S.resolve(ot.__await).then((function(xt) {
            x("next", xt, Y, q);
          }), (function(xt) {
            x("throw", xt, Y, q);
          })) : S.resolve(ot).then((function(xt) {
            j.value = xt, Y(j);
          }), (function(xt) {
            return x("throw", xt, Y, q);
          }));
        }
        q(Q.arg);
      }
      var L;
      this._invoke = function(R, H) {
        function Y() {
          return new S((function(q, Q) {
            x(R, H, q, Q);
          }));
        }
        return L = L ? L.then(Y, Y) : Y();
      };
    }
    function B(y, S) {
      var x = y.iterator[S.method];
      if (x === i) {
        if (S.delegate = null, S.method === "throw") {
          if (y.iterator.return && (S.method = "return", S.arg = i, B(y, S), S.method === "throw")) return b;
          S.method = "throw", S.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return b;
      }
      var L = d(x, y.iterator, S.arg);
      if (L.type === "throw") return S.method = "throw", S.arg = L.arg, S.delegate = null, b;
      var R = L.arg;
      return R ? R.done ? (S[y.resultName] = R.value, S.next = y.nextLoc, S.method !== "return" && (S.method = "next", S.arg = i), S.delegate = null, b) : R : (S.method = "throw", S.arg = new TypeError("iterator result is not an object"), S.delegate = null, b);
    }
    function N(y) {
      var S = { tryLoc: y[0] };
      1 in y && (S.catchLoc = y[1]), 2 in y && (S.finallyLoc = y[2], S.afterLoc = y[3]), this.tryEntries.push(S);
    }
    function D(y) {
      var S = y.completion || {};
      S.type = "normal", delete S.arg, y.completion = S;
    }
    function I(y) {
      this.tryEntries = [{ tryLoc: "root" }], y.forEach(N, this), this.reset(!0);
    }
    function E(y) {
      if (y) {
        var S = y[r];
        if (S) return S.call(y);
        if (typeof y.next == "function") return y;
        if (!isNaN(y.length)) {
          var x = -1, L = function R() {
            for (; ++x < y.length; ) if (o.call(y, x)) return R.value = y[x], R.done = !1, R;
            return R.value = i, R.done = !0, R;
          };
          return L.next = L;
        }
      }
      return { next: F };
    }
    function F() {
      return { value: i, done: !0 };
    }
    return P.prototype = k, h(T, "constructor", k), h(k, "constructor", P), P.displayName = h(k, c, "GeneratorFunction"), e.isGeneratorFunction = function(y) {
      var S = typeof y == "function" && y.constructor;
      return !!S && (S === P || (S.displayName || S.name) === "GeneratorFunction");
    }, e.mark = function(y) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(y, k) : (y.__proto__ = k, h(y, c, "GeneratorFunction")), y.prototype = Object.create(T), y;
    }, e.awrap = function(y) {
      return { __await: y };
    }, O(A.prototype), h(A.prototype, l, (function() {
      return this;
    })), e.AsyncIterator = A, e.async = function(y, S, x, L, R) {
      R === void 0 && (R = Promise);
      var H = new A(u(y, S, x, L), R);
      return e.isGeneratorFunction(S) ? H : H.next().then((function(Y) {
        return Y.done ? Y.value : H.next();
      }));
    }, O(T), h(T, c, "Generator"), h(T, r, (function() {
      return this;
    })), h(T, "toString", (function() {
      return "[object Generator]";
    })), e.keys = function(y) {
      var S = [];
      for (var x in y) S.push(x);
      return S.reverse(), function L() {
        for (; S.length; ) {
          var R = S.pop();
          if (R in y) return L.value = R, L.done = !1, L;
        }
        return L.done = !0, L;
      };
    }, e.values = E, I.prototype = { constructor: I, reset: function(y) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = i, this.done = !1, this.delegate = null, this.method = "next", this.arg = i, this.tryEntries.forEach(D), !y) for (var S in this) S.charAt(0) === "t" && o.call(this, S) && !isNaN(+S.slice(1)) && (this[S] = i);
    }, stop: function() {
      this.done = !0;
      var y = this.tryEntries[0].completion;
      if (y.type === "throw") throw y.arg;
      return this.rval;
    }, dispatchException: function(y) {
      if (this.done) throw y;
      var S = this;
      function x(Q, j) {
        return H.type = "throw", H.arg = y, S.next = Q, j && (S.method = "next", S.arg = i), !!j;
      }
      for (var L = this.tryEntries.length - 1; L >= 0; --L) {
        var R = this.tryEntries[L], H = R.completion;
        if (R.tryLoc === "root") return x("end");
        if (R.tryLoc <= this.prev) {
          var Y = o.call(R, "catchLoc"), q = o.call(R, "finallyLoc");
          if (Y && q) {
            if (this.prev < R.catchLoc) return x(R.catchLoc, !0);
            if (this.prev < R.finallyLoc) return x(R.finallyLoc);
          } else if (Y) {
            if (this.prev < R.catchLoc) return x(R.catchLoc, !0);
          } else {
            if (!q) throw new Error("try statement without catch or finally");
            if (this.prev < R.finallyLoc) return x(R.finallyLoc);
          }
        }
      }
    }, abrupt: function(y, S) {
      for (var x = this.tryEntries.length - 1; x >= 0; --x) {
        var L = this.tryEntries[x];
        if (L.tryLoc <= this.prev && o.call(L, "finallyLoc") && this.prev < L.finallyLoc) {
          var R = L;
          break;
        }
      }
      R && (y === "break" || y === "continue") && R.tryLoc <= S && S <= R.finallyLoc && (R = null);
      var H = R ? R.completion : {};
      return H.type = y, H.arg = S, R ? (this.method = "next", this.next = R.finallyLoc, b) : this.complete(H);
    }, complete: function(y, S) {
      if (y.type === "throw") throw y.arg;
      return y.type === "break" || y.type === "continue" ? this.next = y.arg : y.type === "return" ? (this.rval = this.arg = y.arg, this.method = "return", this.next = "end") : y.type === "normal" && S && (this.next = S), b;
    }, finish: function(y) {
      for (var S = this.tryEntries.length - 1; S >= 0; --S) {
        var x = this.tryEntries[S];
        if (x.finallyLoc === y) return this.complete(x.completion, x.afterLoc), D(x), b;
      }
    }, catch: function(y) {
      for (var S = this.tryEntries.length - 1; S >= 0; --S) {
        var x = this.tryEntries[S];
        if (x.tryLoc === y) {
          var L = x.completion;
          if (L.type === "throw") {
            var R = L.arg;
            D(x);
          }
          return R;
        }
      }
      throw new Error("illegal catch attempt");
    }, delegateYield: function(y, S, x) {
      return this.delegate = { iterator: E(y), resultName: S, nextLoc: x }, this.method === "next" && (this.arg = i), b;
    } }, e;
  })(n.exports);
  try {
    regeneratorRuntime = t;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t);
  }
} }, Ao = {};
function Vt(n) {
  var t = Ao[n];
  if (t !== void 0) return t.exports;
  var e = Ao[n] = { exports: {} };
  return If[n](e, e.exports, Vt), e.exports;
}
Vt.n = (n) => {
  var t = n && n.__esModule ? () => n.default : () => n;
  return Vt.d(t, { a: t }), t;
}, Vt.d = (n, t) => {
  for (var e in t) Vt.o(t, e) && !Vt.o(n, e) && Object.defineProperty(n, e, { enumerable: !0, get: t[e] });
}, Vt.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t);
var xr = {};
function Di(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, i = new Array(t); e < t; e++) i[e] = n[e];
  return i;
}
function _r(n, t) {
  if (n) {
    if (typeof n == "string") return Di(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    return e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set" ? Array.from(n) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Di(n, t) : void 0;
  }
}
function Un(n) {
  return (function(t) {
    if (Array.isArray(t)) return Di(t);
  })(n) || (function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
  })(n) || _r(n) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function rn(n, t, e) {
  return t in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
Vt.d(xr, { A: () => jf });
const V = (Ro = { Fragment: () => zt.Fragment, computed: () => zt.computed, createTextVNode: () => zt.createTextVNode, createVNode: () => zt.createVNode, defineComponent: () => zt.defineComponent, nextTick: () => zt.nextTick, reactive: () => zt.reactive, ref: () => zt.ref, watch: () => zt.watch, watchEffect: () => zt.watchEffect }, yi = {}, Vt.d(yi, Ro), yi), Vf = (0, V.defineComponent)({ props: { data: { required: !0, type: String }, onClick: Function }, render: function() {
  var n = this.data, t = this.onClick;
  return (0, V.createVNode)("span", { class: "vjs-tree-brackets", onClick: t }, [n]);
} }), Ff = (0, V.defineComponent)({ emits: ["change", "update:modelValue"], props: { checked: { type: Boolean, default: !1 }, isMultiple: Boolean, onChange: Function }, setup: function(n, t) {
  var e = t.emit;
  return { uiType: (0, V.computed)((function() {
    return n.isMultiple ? "checkbox" : "radio";
  })), model: (0, V.computed)({ get: function() {
    return n.checked;
  }, set: function(i) {
    return e("update:modelValue", i);
  } }) };
}, render: function() {
  var n = this.uiType, t = this.model, e = this.$emit;
  return (0, V.createVNode)("label", { class: ["vjs-check-controller", t ? "is-checked" : ""], onClick: function(i) {
    return i.stopPropagation();
  } }, [(0, V.createVNode)("span", { class: "vjs-check-controller-inner is-".concat(n) }, null), (0, V.createVNode)("input", { checked: t, class: "vjs-check-controller-original is-".concat(n), type: n, onChange: function() {
    return e("change", t);
  } }, null)]);
} }), Bf = (0, V.defineComponent)({ props: { nodeType: { required: !0, type: String }, onClick: Function }, render: function() {
  var n = this.nodeType, t = this.onClick, e = n === "objectStart" || n === "arrayStart";
  return e || n === "objectCollapsed" || n === "arrayCollapsed" ? (0, V.createVNode)("span", { class: "vjs-carets vjs-carets-".concat(e ? "open" : "close"), onClick: t }, [(0, V.createVNode)("svg", { viewBox: "0 0 1024 1024", focusable: "false", "data-icon": "caret-down", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" }, [(0, V.createVNode)("path", { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" }, null)])]) : null;
} });
var Ro, yi;
function Ai(n) {
  return Ai = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ai(n);
}
function Sr(n) {
  return Object.prototype.toString.call(n).slice(8, -1).toLowerCase();
}
function be(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "root", e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = (arguments.length > 3 ? arguments[3] : void 0) || {}, s = i.key, o = i.index, a = i.type, r = a === void 0 ? "content" : a, l = i.showComma, c = l !== void 0 && l, h = i.length, u = h === void 0 ? 1 : h, d = Sr(n);
  if (d === "array") {
    var f = Eo(n.map((function(m, b, _) {
      return be(m, "".concat(t, "[").concat(b, "]"), e + 1, { index: b, showComma: b !== _.length - 1, length: u, type: r });
    })));
    return [be("[", t, e, { showComma: !1, key: s, length: n.length, type: "arrayStart" })[0]].concat(f, be("]", t, e, { showComma: c, length: n.length, type: "arrayEnd" })[0]);
  }
  if (d === "object") {
    var g = Object.keys(n), p = Eo(g.map((function(m, b, _) {
      return be(n[m], /^[a-zA-Z_]\w*$/.test(m) ? "".concat(t, ".").concat(m) : "".concat(t, '["').concat(m, '"]'), e + 1, { key: m, showComma: b !== _.length - 1, length: u, type: r });
    })));
    return [be("{", t, e, { showComma: !1, key: s, index: o, length: g.length, type: "objectStart" })[0]].concat(p, be("}", t, e, { showComma: c, length: g.length, type: "objectEnd" })[0]);
  }
  return [{ content: n, level: e, key: s, index: o, path: t, showComma: c, length: u, type: r }];
}
function Eo(n) {
  if (typeof Array.prototype.flat == "function") return n.flat();
  for (var t = Un(n), e = []; t.length; ) {
    var i = t.shift();
    Array.isArray(i) ? t.unshift.apply(t, Un(i)) : e.push(i);
  }
  return e;
}
function Ri(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new WeakMap();
  if (n == null) return n;
  if (n instanceof Date) return new Date(n);
  if (n instanceof RegExp) return new RegExp(n);
  if (Ai(n) !== "object") return n;
  if (t.get(n)) return t.get(n);
  if (Array.isArray(n)) {
    var e = n.map((function(o) {
      return Ri(o, t);
    }));
    return t.set(n, e), e;
  }
  var i = {};
  for (var s in n) i[s] = Ri(n[s], t);
  return t.set(n, i), i;
}
function Io(n, t, e, i, s, o, a) {
  try {
    var r = n[o](a), l = r.value;
  } catch (c) {
    return void e(c);
  }
  r.done ? t(l) : Promise.resolve(l).then(i, s);
}
var Nf = Vt(207), Vo = Vt.n(Nf);
function Fo(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    t && (i = i.filter((function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    }))), e.push.apply(e, i);
  }
  return e;
}
function Bo(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Fo(Object(e), !0).forEach((function(i) {
      rn(n, i, e[i]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Fo(Object(e)).forEach((function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(e, i));
    }));
  }
  return n;
}
var wr = { data: { type: [String, Number, Boolean, Array, Object], default: null }, rootPath: { type: String, default: "root" }, indent: { type: Number, default: 2 }, showLength: { type: Boolean, default: !1 }, showDoubleQuotes: { type: Boolean, default: !0 }, renderNodeKey: Function, renderNodeValue: Function, renderNodeActions: { type: [Boolean, Function], default: void 0 }, selectableType: String, showSelectController: { type: Boolean, default: !1 }, showLine: { type: Boolean, default: !0 }, showLineNumber: { type: Boolean, default: !1 }, selectOnClickNode: { type: Boolean, default: !0 }, nodeSelectable: { type: Function, default: function() {
  return !0;
} }, highlightSelectedNode: { type: Boolean, default: !0 }, showIcon: { type: Boolean, default: !1 }, theme: { type: String, default: "light" }, showKeyValueSpace: { type: Boolean, default: !0 }, editable: { type: Boolean, default: !1 }, editableTrigger: { type: String, default: "click" }, onNodeClick: { type: Function }, onNodeMouseover: { type: Function }, onBracketsClick: { type: Function }, onIconClick: { type: Function }, onValueChange: { type: Function } };
const zf = (0, V.defineComponent)({ name: "TreeNode", props: Bo(Bo({}, wr), {}, { node: { type: Object, required: !0 }, collapsed: Boolean, checked: Boolean, style: Object, onSelectedChange: { type: Function } }), emits: ["nodeClick", "nodeMouseover", "bracketsClick", "iconClick", "selectedChange", "valueChange"], setup: function(n, t) {
  var e = t.emit, i = (0, V.computed)((function() {
    return Sr(n.node.content);
  })), s = (0, V.computed)((function() {
    return "vjs-value vjs-value-".concat(i.value);
  })), o = (0, V.computed)((function() {
    return n.showDoubleQuotes ? '"'.concat(n.node.key, '"') : n.node.key;
  })), a = (0, V.computed)((function() {
    return n.selectableType === "multiple";
  })), r = (0, V.computed)((function() {
    return n.selectableType === "single";
  })), l = (0, V.computed)((function() {
    return n.nodeSelectable(n.node) && (a.value || r.value);
  })), c = (0, V.reactive)({ editing: !1 }), h = function(C) {
    var w, T, O = (T = (w = C.target) === null || w === void 0 ? void 0 : w.value) === "null" ? null : T === "undefined" ? void 0 : T === "true" || T !== "false" && (T[0] + T[T.length - 1] === '""' || T[0] + T[T.length - 1] === "''" ? T.slice(1, -1) : typeof Number(T) == "number" && !isNaN(Number(T)) || T === "NaN" ? Number(T) : T);
    e("valueChange", O, n.node.path);
  }, u = (0, V.computed)((function() {
    var C, w = (C = n.node) === null || C === void 0 ? void 0 : C.content;
    return w === null ? w = "null" : w === void 0 && (w = "undefined"), i.value === "string" ? '"'.concat(w, '"') : w + "";
  })), d = function() {
    var C = n.renderNodeValue;
    return C ? C({ node: n.node, defaultValue: u.value }) : u.value;
  }, f = function() {
    e("bracketsClick", !n.collapsed, n.node);
  }, g = function() {
    e("iconClick", !n.collapsed, n.node);
  }, p = function() {
    e("selectedChange", n.node);
  }, m = function() {
    e("nodeClick", n.node), l.value && n.selectOnClickNode && e("selectedChange", n.node);
  }, b = function() {
    e("nodeMouseover", n.node);
  }, _ = function(C) {
    if (n.editable && !c.editing) {
      c.editing = !0;
      var w = function T(O) {
        var A;
        O.target !== C.target && ((A = O.target) === null || A === void 0 ? void 0 : A.parentElement) !== C.target && (c.editing = !1, document.removeEventListener("click", T));
      };
      document.removeEventListener("click", w), document.addEventListener("click", w);
    }
  }, P = (function() {
    var C = (0, V.ref)(!1), w = (function() {
      var T, O = (T = Vo().mark((function A(B) {
        return Vo().wrap((function(N) {
          for (; ; ) switch (N.prev = N.next) {
            case 0:
              return N.prev = 0, N.next = 3, navigator.clipboard.writeText(B);
            case 3:
              C.value = !0, setTimeout((function() {
                C.value = !1;
              }), 300), N.next = 10;
              break;
            case 7:
              N.prev = 7, N.t0 = N.catch(0), console.error("[vue-json-pretty] Copy failed: ", N.t0);
            case 10:
            case "end":
              return N.stop();
          }
        }), A, null, [[0, 7]]);
      })), function() {
        var A = this, B = arguments;
        return new Promise((function(N, D) {
          var I = T.apply(A, B);
          function E(y) {
            Io(I, N, D, E, F, "next", y);
          }
          function F(y) {
            Io(I, N, D, E, F, "throw", y);
          }
          E(void 0);
        }));
      });
      return function(A) {
        return O.apply(this, arguments);
      };
    })();
    return { copy: w };
  })().copy, k = function() {
    var C = n.node, w = C.key, T = C.path, O = n.rootPath, A = new Function("data", "return data".concat(T.slice(O.length)))(n.data), B = JSON.stringify(w ? rn({}, w, A) : A, null, 2);
    P(B);
  }, v = function() {
    var C = n.renderNodeActions;
    if (!C) return null;
    var w = { copy: k };
    return typeof C == "function" ? C({ node: n.node, defaultActions: w }) : (0, V.createVNode)("span", { onClick: k, class: "vjs-tree-node-actions-item" }, [(0, V.createTextVNode)("copy")]);
  };
  return function() {
    var C, w = n.node;
    return (0, V.createVNode)("div", { class: { "vjs-tree-node": !0, "has-selector": n.showSelectController, "has-carets": n.showIcon, "is-highlight": n.highlightSelectedNode && n.checked, dark: n.theme === "dark" }, onClick: m, onMouseover: b, style: n.style }, [n.showLineNumber && (0, V.createVNode)("span", { class: "vjs-node-index" }, [w.id + 1]), n.showSelectController && l.value && w.type !== "objectEnd" && w.type !== "arrayEnd" && (0, V.createVNode)(Ff, { isMultiple: a.value, checked: n.checked, onChange: p }, null), (0, V.createVNode)("div", { class: "vjs-indent" }, [Array.from(Array(w.level)).map((function(T, O) {
      return (0, V.createVNode)("div", { key: O, class: { "vjs-indent-unit": !0, "has-line": n.showLine } }, [Array.from(Array(n.indent)).map((function() {
        return (0, V.createVNode)(V.Fragment, null, [(0, V.createTextVNode)(" ")]);
      }))]);
    })), n.showIcon && (0, V.createVNode)(Bf, { nodeType: w.type, onClick: g }, null)]), w.key && (0, V.createVNode)("span", { class: "vjs-key" }, [(C = n.renderNodeKey, C ? C({ node: n.node, defaultKey: o.value || "" }) : o.value), (0, V.createVNode)("span", { class: "vjs-colon" }, [":".concat(n.showKeyValueSpace ? " " : "")])]), (0, V.createVNode)("span", null, [w.type !== "content" && w.content ? (0, V.createVNode)(Vf, { data: w.content.toString(), onClick: f }, null) : (0, V.createVNode)("span", { class: s.value, onClick: !n.editable || n.editableTrigger && n.editableTrigger !== "click" ? void 0 : _, onDblclick: n.editable && n.editableTrigger === "dblclick" ? _ : void 0 }, [n.editable && c.editing ? (0, V.createVNode)("input", { value: u.value, onChange: h, style: { padding: "3px 8px", border: "1px solid #eee", boxShadow: "none", boxSizing: "border-box", borderRadius: 5, fontFamily: "inherit" } }, null) : d()]), w.showComma && (0, V.createVNode)("span", null, [","]), n.showLength && n.collapsed && (0, V.createVNode)("span", { class: "vjs-comment" }, [(0, V.createTextVNode)(" // "), w.length, (0, V.createTextVNode)(" items ")])]), n.renderNodeActions && (0, V.createVNode)("span", { class: "vjs-tree-node-actions" }, [v()])]);
  };
} });
function No(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    t && (i = i.filter((function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    }))), e.push.apply(e, i);
  }
  return e;
}
function At(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? No(Object(e), !0).forEach((function(i) {
      rn(n, i, e[i]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : No(Object(e)).forEach((function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(e, i));
    }));
  }
  return n;
}
const jf = (0, V.defineComponent)({ name: "Tree", props: At(At({}, wr), {}, { collapsedNodeLength: { type: Number, default: 1 / 0 }, deep: { type: Number, default: 1 / 0 }, pathCollapsible: { type: Function, default: function() {
  return !1;
} }, virtual: { type: Boolean, default: !1 }, height: { type: Number, default: 400 }, itemHeight: { type: Number, default: 20 }, dynamicHeight: { type: Boolean, default: !0 }, selectedValue: { type: [String, Array], default: function() {
  return "";
} }, collapsedOnClickBrackets: { type: Boolean, default: !0 }, style: Object, onSelectedChange: { type: Function }, theme: { type: String, default: "light" } }), slots: ["renderNodeKey", "renderNodeValue", "renderNodeActions"], emits: ["nodeClick", "nodeMouseover", "bracketsClick", "iconClick", "selectedChange", "update:selectedValue", "update:data"], setup: function(n, t) {
  var e = t.emit, i = t.slots, s = (0, V.ref)(), o = (0, V.computed)((function() {
    return be(n.data, n.rootPath);
  })), a = function(D, I) {
    return o.value.reduce((function(E, F) {
      var y, S = F.level >= D || F.length >= I, x = (y = n.pathCollapsible) === null || y === void 0 ? void 0 : y.call(n, F);
      return F.type !== "objectStart" && F.type !== "arrayStart" || !S && !x ? E : At(At({}, E), {}, rn({}, F.path, 1));
    }), {});
  }, r = (0, V.reactive)({ translateY: 0, visibleData: null, hiddenPaths: a(n.deep, n.collapsedNodeLength), startIndex: 0, endIndex: 0 }), l = [], c = [], h = 0, u = {}, d = function(D) {
    l = Array(D).fill(0).map((function() {
      return n.itemHeight || 20;
    })), (c = new Array(D + 1))[0] = 0;
    for (var I = 0; I < D; I++) c[I + 1] = c[I] + l[I];
    h = c[D] || 0;
  }, f = function(D) {
    var I = l.length;
    D < 0 && (D = 0), D > I && (D = I);
    for (var E = D; E < I; E++) c[E + 1] = c[E] + l[E];
    h = c[I] || 0;
  }, g = function(D, I) {
    for (var E = 0, F = D.length - 1; E < F; ) {
      var y = E + F >>> 1;
      D[y] < I ? E = y + 1 : F = y;
    }
    return E;
  }, p = (0, V.computed)((function() {
    for (var D = null, I = [], E = o.value.length, F = 0; F < E; F++) {
      var y = At(At({}, o.value[F]), {}, { id: F }), S = r.hiddenPaths[y.path];
      if (D && D.path === y.path) {
        var x = D.type === "objectStart", L = At(At(At({}, y), D), {}, { showComma: y.showComma, content: x ? "{...}" : "[...]", type: x ? "objectCollapsed" : "arrayCollapsed" });
        D = null, I.push(L);
      } else {
        if (S && !D) {
          D = y;
          continue;
        }
        if (D) continue;
        I.push(y);
      }
    }
    return I;
  })), m = (0, V.computed)((function() {
    var D = n.selectedValue;
    return D && n.selectableType === "multiple" && Array.isArray(D) ? D : [D];
  })), b = (0, V.computed)((function() {
    return !n.selectableType || n.selectOnClickNode || n.showSelectController ? "" : "When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail.";
  })), _ = (0, V.computed)((function() {
    return n.dynamicHeight ? h || 0 : p.value.length * n.itemHeight;
  })), P = function D() {
    var I = p.value;
    if (I) if (n.virtual) {
      var E, F = ((E = s.value) === null || E === void 0 ? void 0 : E.scrollTop) || 0;
      if (n.dynamicHeight) {
        l.length !== I.length && d(I.length);
        var y = (function(Q) {
          var j = g(c, Q + 1e-4);
          return Math.max(0, Math.min(j - 1, l.length - 1));
        })(F), S = (function(Q, j) {
          var ot = g(c, Q + j);
          return Math.max(0, Math.min(ot + 1, l.length));
        })(F, n.height), x = Math.max(0, y - 5), L = Math.min(I.length, S + 5);
        r.startIndex = x, r.endIndex = L, r.translateY = c[x] || 0, r.visibleData = I.slice(x, L), (0, V.nextTick)().then((function() {
          for (var Q = !1, j = r.startIndex; j < r.endIndex; j++) {
            var ot = u[j];
            if (ot) {
              var xt = ot.offsetHeight;
              xt && l[j] !== xt && (l[j] = xt, c[j + 1] = c[j] + l[j], f(j + 1), Q = !0);
            }
          }
          Q && D();
        }));
      } else {
        var R = n.height / n.itemHeight, H = Math.floor(F / n.itemHeight), Y = H < 0 ? 0 : H + R > I.length ? I.length - R : H;
        Y < 0 && (Y = 0);
        var q = Y + R;
        r.translateY = Y * n.itemHeight, r.startIndex = Y, r.endIndex = q, r.visibleData = I.slice(Y, q);
      }
    } else r.translateY = 0, r.startIndex = 0, r.endIndex = I.length, r.visibleData = I;
  }, k = null, v = function() {
    k && cancelAnimationFrame(k), k = requestAnimationFrame((function() {
      P();
    }));
  }, C = function(D) {
    var I, E, F = D.path, y = n.selectableType;
    if (y === "multiple") {
      var S = m.value.findIndex((function(H) {
        return H === F;
      })), x = Un(m.value);
      S !== -1 ? x.splice(S, 1) : x.push(F), e("update:selectedValue", x), e("selectedChange", x, Un(m.value));
    } else if (y === "single" && m.value[0] !== F) {
      var L = (I = m.value, E = 1, (function(H) {
        if (Array.isArray(H)) return H;
      })(I) || (function(H, Y) {
        var q = H == null ? null : typeof Symbol < "u" && H[Symbol.iterator] || H["@@iterator"];
        if (q != null) {
          var Q, j, ot = [], xt = !0, Ie = !1;
          try {
            for (q = q.call(H); !(xt = (Q = q.next()).done) && (ot.push(Q.value), !Y || ot.length !== Y); xt = !0) ;
          } catch (mn) {
            Ie = !0, j = mn;
          } finally {
            try {
              xt || q.return == null || q.return();
            } finally {
              if (Ie) throw j;
            }
          }
          return ot;
        }
      })(I, E) || _r(I, E) || (function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      })())[0], R = F;
      e("update:selectedValue", R), e("selectedChange", R, L);
    }
  }, w = function(D) {
    e("nodeClick", D);
  }, T = function(D) {
    e("nodeMouseover", D);
  }, O = function(D, I) {
    if (D) r.hiddenPaths = At(At({}, r.hiddenPaths), {}, rn({}, I, 1));
    else {
      var E = At({}, r.hiddenPaths);
      delete E[I], r.hiddenPaths = E;
    }
  }, A = function(D, I) {
    n.collapsedOnClickBrackets && O(D, I.path), e("bracketsClick", D, I);
  }, B = function(D, I) {
    O(D, I.path), e("iconClick", D, I);
  }, N = function(D, I) {
    var E = Ri(n.data), F = n.rootPath;
    new Function("data", "val", "data".concat(I.slice(F.length), "=val"))(E, D), e("update:data", E);
  };
  return (0, V.watchEffect)((function() {
    b.value && (function(D) {
      throw new Error("[VueJSONPretty] ".concat(D));
    })(b.value);
  })), (0, V.watchEffect)((function() {
    p.value && (n.virtual && n.dynamicHeight && l.length !== p.value.length && d(p.value.length), P());
  })), (0, V.watch)((function() {
    return [n.dynamicHeight, n.itemHeight, o.value.length];
  }), (function() {
    n.virtual && n.dynamicHeight && (d(p.value.length), (0, V.nextTick)(P));
  })), (0, V.watch)((function() {
    return n.deep;
  }), (function(D) {
    D && (r.hiddenPaths = a(D, n.collapsedNodeLength));
  })), (0, V.watch)((function() {
    return n.collapsedNodeLength;
  }), (function(D) {
    D && (r.hiddenPaths = a(n.deep, D));
  })), function() {
    var D, I, E, F, y, S = (D = n.renderNodeKey) !== null && D !== void 0 ? D : i.renderNodeKey, x = (I = n.renderNodeValue) !== null && I !== void 0 ? I : i.renderNodeValue, L = (E = (F = n.renderNodeActions) !== null && F !== void 0 ? F : i.renderNodeActions) !== null && E !== void 0 && E, R = (y = r.visibleData) === null || y === void 0 ? void 0 : y.map((function(H, Y) {
      var q = r.startIndex + Y;
      return (0, V.createVNode)("div", { key: H.id, ref: function(Q) {
        return (function(j, ot) {
          ot ? u[j] = ot : delete u[j];
        })(q, Q || null);
      } }, [(0, V.createVNode)(zf, { data: n.data, rootPath: n.rootPath, indent: n.indent, node: H, collapsed: !!r.hiddenPaths[H.path], theme: n.theme, showDoubleQuotes: n.showDoubleQuotes, showLength: n.showLength, checked: m.value.includes(H.path), selectableType: n.selectableType, showLine: n.showLine, showLineNumber: n.showLineNumber, showSelectController: n.showSelectController, selectOnClickNode: n.selectOnClickNode, nodeSelectable: n.nodeSelectable, highlightSelectedNode: n.highlightSelectedNode, editable: n.editable, editableTrigger: n.editableTrigger, showIcon: n.showIcon, showKeyValueSpace: n.showKeyValueSpace, renderNodeKey: S, renderNodeValue: x, renderNodeActions: L, onNodeClick: w, onNodeMouseover: T, onBracketsClick: A, onIconClick: B, onSelectedChange: C, onValueChange: N, class: n.dynamicHeight ? "dynamic-height" : void 0, style: n.dynamicHeight ? {} : n.itemHeight && n.itemHeight !== 20 ? { lineHeight: "".concat(n.itemHeight, "px") } : {} }, null)]);
    }));
    return (0, V.createVNode)("div", { ref: s, class: { "vjs-tree": !0, "is-virtual": n.virtual, dark: n.theme === "dark" }, onScroll: n.virtual ? v : void 0, style: n.showLineNumber ? At({ paddingLeft: "".concat(12 * Number(o.value.length.toString().length), "px") }, n.style) : n.style }, [n.virtual ? (0, V.createVNode)("div", { class: "vjs-tree-list", style: { height: "".concat(n.height, "px") } }, [(0, V.createVNode)("div", { class: "vjs-tree-list-holder", style: { height: "".concat(_.value, "px") } }, [(0, V.createVNode)("div", { class: "vjs-tree-list-holder-inner", style: { transform: "translateY(".concat(r.translateY, "px)") } }, [R])])]) : R]);
  };
} });
var Wf = xr.A;
const Hf = {
  key: 0,
  style: { overflow: "hidden", height: "100%", width: "100%", display: "flex", "flex-direction": "column" }
}, $f = { style: { padding: "0.5rem", "border-bottom": "1px solid #e5e7eb", display: "flex", gap: "0.5rem", "align-items": "center" } }, Uf = { style: { "margin-left": "auto", display: "flex", gap: "1rem", "font-size": "0.85rem", color: "#6b7280" } }, Yf = {
  key: 0,
  style: { display: "flex", flex: "1", overflow: "hidden", gap: "0.5rem" }
}, Xf = {
  key: 0,
  style: { padding: "1rem", color: "#6b7280" }
}, Gf = ["data-thing-id"], qf = ["onClick"], Kf = { class: "node-label" }, Zf = { class: "node-count" }, Jf = {
  key: 0,
  class: "children"
}, Qf = {
  key: 0,
  class: "thing-info"
}, tg = { class: "info-label" }, eg = { class: "info-value" }, ng = {
  key: 1,
  class: "thing-info"
}, ig = { class: "info-label" }, sg = { class: "properties-list" }, og = ["onClick"], ag = { class: "node-label" }, rg = {
  key: 0,
  class: "unit-badge"
}, lg = { class: "node-count" }, cg = {
  key: 0,
  class: "children"
}, hg = {
  key: 0,
  class: "ds-info"
}, ug = { class: "info-value-small" }, dg = {
  key: 1,
  class: "ds-info"
}, fg = { class: "info-label-small" }, gg = { class: "info-value-small" }, pg = {
  key: 2,
  class: "observation-item empty"
}, mg = { class: "observation-time" }, bg = { class: "observation-result" }, yg = {
  key: 3,
  class: "observation-item more"
}, vg = { class: "right-panel" }, xg = { class: "map-popup" }, _g = { key: 0 }, Sg = {
  key: 1,
  class: "no-locations"
}, wg = { class: "chart-header" }, kg = { key: 0 }, Og = { class: "chart-container" }, Mg = {
  key: 1,
  class: "no-chart-data"
}, Cg = {
  key: 1,
  class: "json-view"
}, Tg = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", Pg = /* @__PURE__ */ ht({
  __name: "MapPreview",
  props: {
    dataSource: {}
  },
  setup(n) {
    Oi.register(...of);
    const t = n, { t: e } = $o("datasourceOgcsta"), i = Ar(), s = W(null), o = W(null), a = W("tree"), r = W(null);
    console.log(t.dataSource), Kt(t.dataSource, () => {
      h();
    }, { deep: !0 });
    const l = ss(null), c = W(t.dataSource), { update: h } = Rr(t.dataSource.type, c, l);
    Kt(l, async () => {
      console.log("tempStore changed", l.value), s.value = await l.value.getData("OGCSTAData"), o.value = await l.value.getOriginalData(), l.value && typeof l.value.subscribe == "function" && l.value.subscribe(async () => {
        console.log("Datasource updated, refreshing data"), s.value = await l.value.getData("OGCSTAData"), console.log("Updated data after subscribe callback:", s.value);
      });
    }, { deep: !0 });
    const u = Ft(() => {
      const y = [];
      return JSON.stringify(s.value, (S, x) => {
        if (typeof x == "object" && x !== null) {
          if (y.includes(x)) return;
          y.push(x);
        }
        return x;
      }, 2);
    }), d = Ft(() => s.value?.things ? s.value.things.map((y) => ({
      ...y,
      datastreams: y.datastreams?.map((S) => ({
        ...S,
        observations: S.observations || []
      })) || []
    })) : []), f = W(/* @__PURE__ */ new Set()), g = W(/* @__PURE__ */ new Set()), p = W(null), m = W(!0), b = W([50.93115286, 11.60392726]), _ = W(10), P = (y) => {
      const S = [
        y.Locations?.[0]?.location,
        y.location,
        y.Locations?.[0],
        y.locations?.[0]?.location,
        y.locations?.[0]
      ];
      for (const x of S)
        if (x) {
          if (x.coordinates && Array.isArray(x.coordinates)) {
            const L = x.coordinates;
            if (L.length >= 2 && typeof L[0] == "number")
              return [L[1], L[0]];
          }
          if (Array.isArray(x) && x.length >= 2 && typeof x[0] == "number")
            return [x[1], x[0]];
          if (typeof x.lat == "number" && typeof x.lng == "number")
            return [x.lat, x.lng];
          if (typeof x.latitude == "number" && typeof x.longitude == "number")
            return [x.latitude, x.longitude];
        }
      return null;
    }, k = Ft(() => {
      if (!d.value) return [];
      const y = [];
      for (const S of d.value) {
        const x = P(S);
        x && y.push({
          id: S.iotId || S["@iot.id"],
          name: S.name,
          description: S.description,
          latLng: x,
          properties: S.properties,
          datastreamCount: S.datastreams?.length || 0
        });
      }
      return console.log("Found locations:", y.length, "of", d.value.length, "things"), y.length === 0 && d.value.length > 0 && console.log("Sample thing structure:", JSON.stringify(d.value[0], null, 2).slice(0, 500)), y;
    });
    Kt(k, (y) => {
      if (y.length > 0) {
        const S = y.reduce((L, R) => L + R.latLng[0], 0), x = y.reduce((L, R) => L + R.latLng[1], 0);
        b.value = [S / y.length, x / y.length];
      }
    }, { immediate: !0 }), Kt(() => r.value, async () => {
      await st(), setTimeout(() => {
        if (D.value?.leafletObject && (D.value.leafletObject.invalidateSize(), p.value?.id)) {
          const y = k.value.find((S) => S.id === p.value.id);
          y && D.value.leafletObject.setView(y.latLng, D.value.leafletObject.getZoom(), { animate: !1 });
        }
      }, 100);
    });
    const v = async (y) => {
      p.value = y;
      const S = y.id || y.iotId || y["@iot.id"];
      f.value.add(S), C(S), await st();
      const x = document.querySelector(`[data-thing-id="${S}"]`);
      x && x.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, C = (y) => {
      const S = k.value.find((x) => x.id === y);
      S && D.value?.leafletObject && D.value.leafletObject.setView(S.latLng, 14, { animate: !0 });
    }, w = (y) => {
      const S = y.iotId || y["@iot.id"];
      p.value = { id: S, ...y }, C(S);
    }, T = (y, S) => {
      f.value.has(y) ? (f.value.delete(y), p.value = null) : (f.value.add(y), S && w(S));
    }, O = (y, S, x) => {
      x.stopPropagation(), g.value.has(y) ? g.value.delete(y) : g.value.add(y);
    }, A = W(!1), B = W(null), N = ss(null), D = W(null), I = async (y, S) => {
      S.stopPropagation(), r.value = y;
      const x = y.iotId || y["@iot.id"];
      console.log("Loading observations for datastream:", x), A.value = !0;
      try {
        if (l.value) {
          console.log("Calling getData with filter option");
          const L = await l.value.getData("OGCSTAData", {
            filter: {
              observations: [y]
            }
          });
          if (console.log("Filtered data received:", L), L?.observations && L.observations.length > 0) {
            console.log(`Found ${L.observations.length} observations in filtered data`);
            const R = L.observations.filter(
              (Y) => Y.ds_source === x || Y.Datastream?.["@iot.id"] === x
            );
            console.log(`Found ${R.length} observations for datastream ${x}`);
            let H = !1;
            if (s.value?.things) {
              for (const Y of s.value.things)
                if (Y.datastreams) {
                  const q = Y.datastreams.find(
                    (Q) => (Q.iotId || Q["@iot.id"]) === x
                  );
                  if (q) {
                    q.observations = R, console.log("Updated observations in existing data structure"), console.log("First observation:", R[0]), console.log("ExistingDs after update:", q), s.value = { ...s.value }, r.value = q, console.log("selectedDatastream set to:", r.value), console.log("selectedDatastream.observations:", r.value?.observations?.length), H = !0;
                    break;
                  }
                }
            }
            if (!H) {
              console.log("Creating datastream object with observations");
              const Y = {
                ...y,
                observations: R
              };
              r.value = Y;
            }
          } else
            console.warn("No observations in filtered data"), r.value = y;
        } else
          console.error("tempStore not available");
      } catch (L) {
        console.error("Error loading observations:", L);
      } finally {
        A.value = !1;
      }
    }, E = Ft(() => {
      if (console.log("Computing chartData, selectedDatastream:", r.value), console.log("selectedDatastream.value?.observations:", r.value?.observations?.length), !r.value?.observations || r.value.observations.length === 0)
        return console.log("No observations, returning null"), null;
      const y = [...r.value.observations].sort((x, L) => new Date(x.phenomenonTime).getTime() - new Date(L.phenomenonTime).getTime()), S = {
        labels: y.map((x) => i.date(x.phenomenonTime, {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        })),
        datasets: [{
          label: r.value.name || e("Ogcsta.preview.observations"),
          data: y.map((x) => x.result),
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          tension: 0.3,
          fill: !0
        }]
      };
      return console.log("Chart data computed:", S), console.log("Number of data points:", S.datasets[0].data.length), S;
    }), F = Ft(() => ({
      responsive: !0,
      maintainAspectRatio: !1,
      plugins: {
        legend: {
          display: !0,
          position: "top"
        },
        title: {
          display: !0,
          text: r.value?.name || "Datastream Observations"
        }
      },
      scales: {
        y: {
          beginAtZero: !1,
          title: {
            display: !0,
            text: r.value?.unitOfMeasurement?.name || "Value"
          }
        },
        x: {
          title: {
            display: !0,
            text: "Time"
          },
          ticks: {
            maxRotation: 45,
            minRotation: 45
          }
        }
      }
    }));
    return Kt([E, B], async () => {
      if (!B.value || !E.value) {
        N.value && (N.value.destroy(), N.value = null);
        return;
      }
      await st(), N.value && N.value.destroy();
      const y = B.value.getContext("2d");
      y && (N.value = new Oi(y, {
        type: "line",
        data: E.value,
        options: F.value
      }));
    }), (y, S) => l.value && s.value ? (Z(), tt("div", Hf, [
      z("div", $f, [
        $(M(Te), {
          intent: a.value === "tree" ? "primary" : "default",
          size: "sm",
          onClick: S[0] || (S[0] = (x) => a.value = "tree")
        }, {
          default: Ot(() => [
            $e(X(M(e)("Ogcsta.preview.tree")), 1)
          ]),
          _: 1
        }, 8, ["intent"]),
        $(M(Te), {
          intent: a.value === "json" ? "primary" : "default",
          size: "sm",
          onClick: S[1] || (S[1] = (x) => a.value = "json")
        }, {
          default: Ot(() => [
            $e(X(M(e)("Ogcsta.preview.json")), 1)
          ]),
          _: 1
        }, 8, ["intent"]),
        $(M(Lr), { vertical: "" }),
        $(M(Ho), {
          modelValue: m.value,
          "onUpdate:modelValue": S[2] || (S[2] = (x) => m.value = x),
          label: M(e)("Ogcsta.preview.showMap"),
          size: "sm"
        }, null, 8, ["modelValue", "label"]),
        z("div", Uf, [
          z("span", null, [
            z("strong", null, X(d.value.length), 1),
            $e(" " + X(M(e)("Ogcsta.preview.things")), 1)
          ]),
          z("span", null, [
            z("strong", null, X(k.value.length), 1),
            $e(" " + X(M(e)("Ogcsta.preview.withLocation")), 1)
          ])
        ])
      ]),
      a.value === "tree" ? (Z(), tt("div", Yf, [
        z("div", {
          class: "tree-view",
          style: Cr({ width: m.value || r.value ? "45%" : "100%", minWidth: "300px" })
        }, [
          d.value.length === 0 ? (Z(), tt("div", Xf, X(M(e)("Ogcsta.preview.noData")), 1)) : _t("", !0),
          (Z(!0), tt(Fe, null, Be(d.value, (x) => (Z(), tt("div", {
            key: x.iotId || x["@iot.id"],
            "data-thing-id": x.iotId || x["@iot.id"],
            class: bn(["thing-item", { "thing-selected": p.value?.id === (x.iotId || x["@iot.id"]) }])
          }, [
            z("div", {
              class: "tree-node thing-node",
              onClick: (L) => T(x.iotId || x["@iot.id"], x)
            }, [
              $(M(Ut), {
                name: f.value.has(x.iotId || x["@iot.id"]) ? "expand_more" : "chevron_right",
                size: "sm"
              }, null, 8, ["name"]),
              $(M(Ut), {
                name: "sensors",
                size: "sm",
                tone: "color-accent"
              }),
              z("span", Kf, X(x.name || x.iotId || x["@iot.id"]), 1),
              x.Locations?.[0]?.location || x.location ? (Z(), yn(M(Ut), {
                key: 0,
                name: "location_on",
                size: "sm",
                tone: "color-warn",
                title: M(e)("Ogcsta.preview.hasLocation")
              }, null, 8, ["title"])) : _t("", !0),
              z("span", Zf, "(" + X(M(e)("Ogcsta.preview.dsShort", { count: x.datastreams?.length || 0 })) + ")", 1)
            ], 8, qf),
            f.value.has(x.iotId || x["@iot.id"]) ? (Z(), tt("div", Jf, [
              x.description ? (Z(), tt("div", Qf, [
                z("span", tg, X(M(e)("Ogcsta.preview.description")), 1),
                z("span", eg, X(x.description), 1)
              ])) : _t("", !0),
              x.properties && Object.keys(x.properties).length > 0 ? (Z(), tt("div", ng, [
                z("span", ig, X(M(e)("Ogcsta.preview.properties")), 1),
                z("div", sg, [
                  (Z(!0), tt(Fe, null, Be(x.properties, (L, R) => (Z(), tt("span", {
                    key: R,
                    class: "property-tag"
                  }, X(R) + ": " + X(typeof L == "object" ? JSON.stringify(L) : L), 1))), 128))
                ])
              ])) : _t("", !0),
              (Z(!0), tt(Fe, null, Be(x.datastreams, (L) => (Z(), tt("div", {
                key: L.iotId || L["@iot.id"],
                class: "datastream-item"
              }, [
                z("div", {
                  class: bn(["tree-node datastream-node", { selected: r.value && (r.value.iotId || r.value["@iot.id"]) === (L.iotId || L["@iot.id"]) }]),
                  onClick: (R) => I(L, R)
                }, [
                  $(M(Ut), {
                    name: g.value.has(L.iotId || L["@iot.id"]) ? "expand_more" : "chevron_right",
                    size: "sm",
                    onClick: (R) => O(L.iotId || L["@iot.id"], L, R)
                  }, null, 8, ["name", "onClick"]),
                  $(M(Ut), {
                    name: "timeline",
                    size: "sm",
                    tone: "color-ok"
                  }),
                  z("span", ag, X(L.name || L.iotId || L["@iot.id"]), 1),
                  L.unitOfMeasurement?.symbol ? (Z(), tt("span", rg, X(L.unitOfMeasurement.symbol), 1)) : _t("", !0),
                  z("span", lg, "(" + X(M(e)("Ogcsta.preview.obsShort", { count: L.observations?.length || 0 })) + ")", 1),
                  L.observations && L.observations.length > 0 ? (Z(), yn(M(Ut), {
                    key: 1,
                    name: "show_chart",
                    size: "small",
                    color: "info",
                    title: M(e)("Ogcsta.preview.viewChart")
                  }, null, 8, ["title"])) : _t("", !0)
                ], 10, og),
                g.value.has(L.iotId || L["@iot.id"]) ? (Z(), tt("div", cg, [
                  L.description ? (Z(), tt("div", hg, [
                    z("span", ug, X(L.description), 1)
                  ])) : _t("", !0),
                  L.unitOfMeasurement ? (Z(), tt("div", dg, [
                    z("span", fg, X(M(e)("Ogcsta.preview.unit")), 1),
                    z("span", gg, X(L.unitOfMeasurement.name) + " (" + X(L.unitOfMeasurement.symbol) + ")", 1)
                  ])) : _t("", !0),
                  !L.observations || L.observations.length === 0 ? (Z(), tt("div", pg, X(M(e)("Ogcsta.preview.noObservations")), 1)) : _t("", !0),
                  (Z(!0), tt(Fe, null, Be((L.observations || []).slice(0, 10), (R, H) => (Z(), tt("div", {
                    key: R["@iot.id"] || H,
                    class: "observation-item"
                  }, [
                    $(M(Ut), {
                      name: "circle",
                      size: "12px",
                      tone: "color-accent"
                    }),
                    z("span", mg, X(M(i).date(R.phenomenonTime, { dateStyle: "short", timeStyle: "medium" })), 1),
                    z("span", bg, X(R.result) + " " + X(L.unitOfMeasurement?.symbol || ""), 1)
                  ]))), 128)),
                  L.observations && L.observations.length > 10 ? (Z(), tt("div", yg, X(M(e)("Ogcsta.preview.more", { count: L.observations.length - 10 })), 1)) : _t("", !0)
                ])) : _t("", !0)
              ]))), 128))
            ])) : _t("", !0)
          ], 10, Gf))), 128))
        ], 4),
        z("div", vg, [
          m.value && k.value.length > 0 ? (Z(), tt("div", {
            key: 0,
            class: bn(["map-panel", { "half-height": r.value }])
          }, [
            $(M(xf), {
              ref_key: "mapRef",
              ref: D,
              center: b.value,
              zoom: _.value,
              style: { height: "100%", width: "100%" }
            }, {
              default: Ot(() => [
                $(M(Df), {
                  url: Tg,
                  options: { maxNativeZoom: 19, maxZoom: 21 }
                }),
                p.value ? (Z(), yn(M(hf), {
                  key: 0,
                  "lat-lng": k.value.find((x) => x.id === p.value?.id)?.latLng,
                  radius: 20,
                  fillOpacity: 0.3,
                  fillColor: "#f59e0b",
                  color: "#f59e0b",
                  weight: 3
                }, null, 8, ["lat-lng"])) : _t("", !0),
                (Z(!0), tt(Fe, null, Be(k.value, (x) => (Z(), yn(M(Mf), {
                  key: x.id,
                  "lat-lng": x.latLng,
                  onClick: (L) => v(x)
                }, {
                  default: Ot(() => [
                    $(M(Pf), null, {
                      default: Ot(() => [
                        z("div", xg, [
                          z("strong", null, X(x.name), 1),
                          x.description ? (Z(), tt("p", _g, X(x.description), 1)) : _t("", !0),
                          z("small", null, X(M(e)("Ogcsta.preview.datastreams", { count: x.datastreamCount })), 1)
                        ])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["lat-lng", "onClick"]))), 128))
              ]),
              _: 1
            }, 8, ["center", "zoom"])
          ], 2)) : m.value && k.value.length === 0 ? (Z(), tt("div", Sg, [
            $(M(Ut), {
              name: "location_off",
              size: "lg",
              tone: "color-dim"
            }),
            z("p", null, X(M(e)("Ogcsta.preview.noLocations")), 1)
          ])) : _t("", !0),
          r.value ? (Z(), tt("div", {
            key: 2,
            class: bn(["chart-panel", { "half-height": m.value && k.value.length > 0 }])
          }, [
            z("div", wg, [
              z("div", null, [
                z("h3", null, X(r.value.name || M(e)("Ogcsta.preview.datastream")), 1),
                r.value.description ? (Z(), tt("p", kg, X(r.value.description), 1)) : _t("", !0)
              ]),
              $(M(Te), {
                intent: "quiet",
                size: "sm",
                onClick: S[3] || (S[3] = (x) => r.value = null)
              }, {
                default: Ot(() => [
                  $(M(Ut), {
                    name: "close",
                    size: "sm"
                  })
                ]),
                _: 1
              })
            ]),
            z("div", Og, [
              E.value ? (Z(), tt("canvas", {
                key: 0,
                ref_key: "chartCanvas",
                ref: B
              }, null, 512)) : (Z(), tt("div", Mg, [
                z("p", null, X(M(e)("Ogcsta.preview.noObservationData")), 1),
                z("small", null, X(M(e)("Ogcsta.preview.clickDatastream")), 1)
              ]))
            ])
          ], 2)) : _t("", !0)
        ])
      ])) : (Z(), tt("div", Cg, [
        $(M(Wf), { data: u.value }, null, 8, ["data"])
      ]))
    ])) : _t("", !0);
  }
}), kr = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, s] of t)
    e[i] = s;
  return e;
}, Lg = /* @__PURE__ */ kr(Pg, [["__scopeId", "data-v-065dabfc"]]), Dg = { class: "ogcsta-settings-wrapper" }, Ag = { class: "ogcsta-scroll-container" }, Rg = { class: "ogcsta-settings" }, Eg = { class: "setting-group" }, Ig = { class: "setting-group" }, Vg = ["open"], Fg = { class: "history-settings" }, Bg = { class: "setting-group" }, Ng = { class: "filter-header" }, zg = { class: "datetime-picker-group" }, jg = { class: "datetime-picker-group" }, Wg = { class: "setting-group" }, Hg = { class: "filter-header" }, $g = { class: "datetime-picker-group" }, Ug = { class: "datetime-picker-group" }, Yg = { class: "setting-group" }, Xg = { class: "filter-header" }, Gg = { class: "datetime-picker-group" }, qg = { class: "datetime-picker-group" }, Kg = { class: "setting-group" }, Zg = { style: { "font-size": "0.75rem", color: "var(--color-dim)", "margin-top": "0.25rem" } }, Jg = /* @__PURE__ */ ht({
  __name: "OGCSTAStoreSettings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(n) {
    const { t } = $o("datasourceOgcsta"), e = Ft(() => n.connections.filter((k) => k.type === "rest")), i = Ft(() => n.connections.filter((k) => k.type === "mqtt")), s = ut(Er) ?? null;
    if (s || console.warn("VariableRepository not provided"), n.config.history || (n.config.history = {
      enabled: !1,
      timeRange: {},
      resultTime: {},
      phenomenonTime: {}
    }), n.config.history.timeRange || (n.config.history.timeRange = {}), n.config.history.resultTime || (n.config.history.resultTime = {}), n.config.history.phenomenonTime || (n.config.history.phenomenonTime = {}), n.config.history.enabled === void 0) {
      const k = n.config.history.timeRange?.start || n.config.history.timeRange?.startVariable || n.config.history.timeRange?.end || n.config.history.timeRange?.endVariable || n.config.history.phenomenonTime?.start || n.config.history.phenomenonTime?.startVariable || n.config.history.phenomenonTime?.end || n.config.history.phenomenonTime?.endVariable || n.config.history.resultTime?.start || n.config.history.resultTime?.startVariable || n.config.history.resultTime?.end || n.config.history.resultTime?.endVariable;
      n.config.history.enabled = !!k;
    }
    const o = (k, v, C) => {
      if (C && s) {
        const w = s.getVariable(C);
        if (w) {
          k.setTo(w);
          return;
        }
      }
      v && (k.value = v);
    }, a = Wo({
      timeRangeStart: new ke(),
      timeRangeEnd: new ke(),
      phenomenonTimeStart: new ke(),
      phenomenonTimeEnd: new ke(),
      resultTimeStart: new ke(),
      resultTimeEnd: new ke()
    });
    o(a.timeRangeStart, n.config.history.timeRange?.start, n.config.history.timeRange?.startVariable), o(a.timeRangeEnd, n.config.history.timeRange?.end, n.config.history.timeRange?.endVariable), o(a.phenomenonTimeStart, n.config.history.phenomenonTime?.start, n.config.history.phenomenonTime?.startVariable), o(a.phenomenonTimeEnd, n.config.history.phenomenonTime?.end, n.config.history.phenomenonTime?.endVariable), o(a.resultTimeStart, n.config.history.resultTime?.start, n.config.history.resultTime?.startVariable), o(a.resultTimeEnd, n.config.history.resultTime?.end, n.config.history.resultTime?.endVariable);
    const r = (k, v, C, w) => {
      Kt(k, (T) => {
        const O = v();
        T.isSet && T.variable ? (O[w] = T.variable, O[C] = void 0) : (O[C] = T.value, O[w] = void 0);
      }, { deep: !0 });
    };
    r(() => a.timeRangeStart, () => n.config.history.timeRange, "start", "startVariable"), r(() => a.timeRangeEnd, () => n.config.history.timeRange, "end", "endVariable"), r(() => a.phenomenonTimeStart, () => n.config.history.phenomenonTime, "start", "startVariable"), r(() => a.phenomenonTimeEnd, () => n.config.history.phenomenonTime, "end", "endVariable"), r(() => a.resultTimeStart, () => n.config.history.resultTime, "start", "startVariable"), r(() => a.resultTimeEnd, () => n.config.history.resultTime, "end", "endVariable");
    const l = () => {
      a.timeRangeStart.value = "", a.timeRangeEnd.value = "", n.config.history.timeRange = {};
    }, c = () => {
      a.phenomenonTimeStart.value = "", a.phenomenonTimeEnd.value = "", n.config.history.phenomenonTime = {};
    }, h = () => {
      a.resultTimeStart.value = "", a.resultTimeEnd.value = "", n.config.history.resultTime = {};
    }, u = (k) => {
      if (!k) return null;
      const v = new Date(k);
      return isNaN(v.getTime()) ? null : v;
    }, d = (k, v) => {
      if (!k) return "";
      const C = k.getFullYear(), w = (k.getMonth() + 1).toString().padStart(2, "0"), T = k.getDate().toString().padStart(2, "0"), O = (v?.getHours() || 0).toString().padStart(2, "0"), A = (v?.getMinutes() || 0).toString().padStart(2, "0"), B = (v?.getSeconds() || 0).toString().padStart(2, "0");
      return `${C}-${w}-${T}T${O}:${A}:${B}Z`;
    }, f = (k) => {
      const v = W(u(k().value)), C = W(u(k().value));
      return Kt(() => k().value, (T) => {
        v.value = u(T), C.value = u(T);
      }), { dateValue: v, timeValue: C, updateWrapper: () => {
        k().value = d(v.value, C.value);
      } };
    }, g = f(() => a.timeRangeStart), p = f(() => a.timeRangeEnd), m = f(() => a.phenomenonTimeStart), b = f(() => a.phenomenonTimeEnd), _ = f(() => a.resultTimeStart), P = f(() => a.resultTimeEnd);
    return (k, v) => {
      const C = Tr("DIcon");
      return Z(), tt("div", Dg, [
        z("div", Ag, [
          z("div", Rg, [
            z("div", Eg, [
              $(M(ii), {
                modelValue: n.config.connection,
                "onUpdate:modelValue": v[0] || (v[0] = (w) => n.config.connection = w),
                label: M(t)("Settings.connection"),
                options: e.value,
                "label-key": "name",
                "value-key": "uid",
                clearable: ""
              }, null, 8, ["modelValue", "label", "options"])
            ]),
            z("div", Ig, [
              $(M(ii), {
                modelValue: n.config.mqttConnection,
                "onUpdate:modelValue": v[1] || (v[1] = (w) => n.config.mqttConnection = w),
                label: M(t)("Ogcsta.mqtt"),
                options: i.value,
                "label-key": "name",
                "value-key": "uid",
                clearable: ""
              }, null, 8, ["modelValue", "label", "options"])
            ]),
            z("details", {
              class: "history",
              open: n.config.history.enabled
            }, [
              z("summary", {
                class: "history__head",
                onClick: v[2] || (v[2] = Pr((w) => n.config.history.enabled = !n.config.history.enabled, ["prevent"]))
              }, [
                $(C, {
                  name: "history",
                  size: "sm",
                  tone: "color-dim"
                }),
                $e(X(M(t)("Ogcsta.history")), 1)
              ]),
              z("div", Fg, [
                z("div", Bg, [
                  z("div", Ng, [
                    z("h4", null, X(M(t)("Ogcsta.timeRange")), 1),
                    $(M(Te), {
                      intent: "danger",
                      size: "sm",
                      onClick: l,
                      title: M(t)("Ogcsta.clearTimeRange")
                    }, {
                      default: Ot(() => [
                        $(C, {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["title"])
                  ]),
                  $(M(Oe), {
                    modelValue: a.timeRangeStart,
                    "onUpdate:modelValue": v[5] || (v[5] = (w) => a.timeRangeStart = w),
                    label: M(t)("Ogcsta.startTime")
                  }, {
                    default: Ot(({ value: w, change: T }) => [
                      z("div", zg, [
                        $(M(Et), {
                          modelValue: M(g).dateValue.value,
                          "onUpdate:modelValue": [
                            (O) => M(g).dateValue.value = O,
                            v[3] || (v[3] = (O) => M(g).updateWrapper())
                          ],
                          label: M(t)("Ogcsta.startDate")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                        $(M(Et), {
                          mode: "time",
                          modelValue: M(g).timeValue.value,
                          "onUpdate:modelValue": [
                            (O) => M(g).timeValue.value = O,
                            v[4] || (v[4] = (O) => M(g).updateWrapper())
                          ],
                          label: M(t)("Ogcsta.startTime")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "label"]),
                  $(M(Oe), {
                    modelValue: a.timeRangeEnd,
                    "onUpdate:modelValue": v[8] || (v[8] = (w) => a.timeRangeEnd = w),
                    label: M(t)("Ogcsta.endTime")
                  }, {
                    default: Ot(({ value: w, change: T }) => [
                      z("div", jg, [
                        $(M(Et), {
                          modelValue: M(p).dateValue.value,
                          "onUpdate:modelValue": [
                            (O) => M(p).dateValue.value = O,
                            v[6] || (v[6] = (O) => M(p).updateWrapper())
                          ],
                          label: M(t)("Ogcsta.endDate")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                        $(M(Et), {
                          mode: "time",
                          modelValue: M(p).timeValue.value,
                          "onUpdate:modelValue": [
                            (O) => M(p).timeValue.value = O,
                            v[7] || (v[7] = (O) => M(p).updateWrapper())
                          ],
                          label: M(t)("Ogcsta.endTime")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "label"])
                ]),
                z("div", Wg, [
                  z("div", Hg, [
                    z("h4", null, X(M(t)("Ogcsta.phenomenonTime")), 1),
                    $(M(Te), {
                      intent: "danger",
                      size: "sm",
                      onClick: c,
                      title: M(t)("Ogcsta.clearPhenomenonTime")
                    }, {
                      default: Ot(() => [
                        $(C, {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["title"])
                  ]),
                  $(M(Oe), {
                    modelValue: a.phenomenonTimeStart,
                    "onUpdate:modelValue": v[11] || (v[11] = (w) => a.phenomenonTimeStart = w),
                    label: M(t)("Ogcsta.startTime")
                  }, {
                    default: Ot(({ value: w, change: T }) => [
                      z("div", $g, [
                        $(M(Et), {
                          modelValue: M(m).dateValue.value,
                          "onUpdate:modelValue": [
                            (O) => M(m).dateValue.value = O,
                            v[9] || (v[9] = (O) => M(m).updateWrapper())
                          ],
                          label: M(t)("Ogcsta.startDate")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                        $(M(Et), {
                          mode: "time",
                          modelValue: M(m).timeValue.value,
                          "onUpdate:modelValue": [
                            (O) => M(m).timeValue.value = O,
                            v[10] || (v[10] = (O) => M(m).updateWrapper())
                          ],
                          label: M(t)("Ogcsta.startTime")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "label"]),
                  $(M(Oe), {
                    modelValue: a.phenomenonTimeEnd,
                    "onUpdate:modelValue": v[14] || (v[14] = (w) => a.phenomenonTimeEnd = w),
                    label: M(t)("Ogcsta.endTime")
                  }, {
                    default: Ot(({ value: w, change: T }) => [
                      z("div", Ug, [
                        $(M(Et), {
                          modelValue: M(b).dateValue.value,
                          "onUpdate:modelValue": [
                            (O) => M(b).dateValue.value = O,
                            v[12] || (v[12] = (O) => M(b).updateWrapper())
                          ],
                          label: M(t)("Ogcsta.endDate")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                        $(M(Et), {
                          mode: "time",
                          modelValue: M(b).timeValue.value,
                          "onUpdate:modelValue": [
                            (O) => M(b).timeValue.value = O,
                            v[13] || (v[13] = (O) => M(b).updateWrapper())
                          ],
                          label: M(t)("Ogcsta.endTime")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "label"])
                ]),
                z("div", Yg, [
                  z("div", Xg, [
                    z("h4", null, X(M(t)("Ogcsta.resultTime")), 1),
                    $(M(Te), {
                      intent: "danger",
                      size: "sm",
                      onClick: h,
                      title: M(t)("Ogcsta.clearResultTime")
                    }, {
                      default: Ot(() => [
                        $(C, {
                          name: "delete",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["title"])
                  ]),
                  $(M(Oe), {
                    modelValue: a.resultTimeStart,
                    "onUpdate:modelValue": v[17] || (v[17] = (w) => a.resultTimeStart = w),
                    label: M(t)("Ogcsta.startTime")
                  }, {
                    default: Ot(({ value: w, change: T }) => [
                      z("div", Gg, [
                        $(M(Et), {
                          modelValue: M(_).dateValue.value,
                          "onUpdate:modelValue": [
                            (O) => M(_).dateValue.value = O,
                            v[15] || (v[15] = (O) => M(_).updateWrapper())
                          ],
                          label: M(t)("Ogcsta.startDate")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                        $(M(Et), {
                          mode: "time",
                          modelValue: M(_).timeValue.value,
                          "onUpdate:modelValue": [
                            (O) => M(_).timeValue.value = O,
                            v[16] || (v[16] = (O) => M(_).updateWrapper())
                          ],
                          label: M(t)("Ogcsta.startTime")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "label"]),
                  $(M(Oe), {
                    modelValue: a.resultTimeEnd,
                    "onUpdate:modelValue": v[20] || (v[20] = (w) => a.resultTimeEnd = w),
                    label: M(t)("Ogcsta.endTime")
                  }, {
                    default: Ot(({ value: w, change: T }) => [
                      z("div", qg, [
                        $(M(Et), {
                          modelValue: M(P).dateValue.value,
                          "onUpdate:modelValue": [
                            (O) => M(P).dateValue.value = O,
                            v[18] || (v[18] = (O) => M(P).updateWrapper())
                          ],
                          label: M(t)("Ogcsta.endDate")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"]),
                        $(M(Et), {
                          mode: "time",
                          modelValue: M(P).timeValue.value,
                          "onUpdate:modelValue": [
                            (O) => M(P).timeValue.value = O,
                            v[19] || (v[19] = (O) => M(P).updateWrapper())
                          ],
                          label: M(t)("Ogcsta.endTime")
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["modelValue", "label"])
                ]),
                z("div", Kg, [
                  z("h4", null, X(M(t)("Ogcsta.query")), 1),
                  $(M(ii), {
                    modelValue: n.config.history.orderBy,
                    "onUpdate:modelValue": v[21] || (v[21] = (w) => n.config.history.orderBy = w),
                    options: [
                      { text: M(t)("Ogcsta.order.phenomenonDesc"), value: "phenomenonTime desc" },
                      { text: M(t)("Ogcsta.order.phenomenonAsc"), value: "phenomenonTime asc" },
                      { text: M(t)("Ogcsta.order.resultDesc"), value: "resultTime desc" },
                      { text: M(t)("Ogcsta.order.resultAsc"), value: "resultTime asc" }
                    ],
                    label: M(t)("Ogcsta.orderBy"),
                    clearable: ""
                  }, null, 8, ["modelValue", "options", "label"]),
                  $(M(Dr), {
                    modelValue: n.config.history.limit,
                    "onUpdate:modelValue": v[22] || (v[22] = (w) => n.config.history.limit = w),
                    modelModifiers: { number: !0 },
                    label: M(t)("Ogcsta.limit"),
                    type: "number",
                    min: 1,
                    max: 1e4,
                    placeholder: "100"
                  }, null, 8, ["modelValue", "label"]),
                  $(M(Ho), {
                    modelValue: n.config.useCurrentLocationInsteadOfHistorical,
                    "onUpdate:modelValue": v[23] || (v[23] = (w) => n.config.useCurrentLocationInsteadOfHistorical = w),
                    label: M(t)("Ogcsta.currentLocations")
                  }, {
                    label: Ot(() => [
                      z("span", null, X(M(t)("Ogcsta.currentLocationsLong")), 1),
                      z("div", Zg, X(M(t)("Ogcsta.currentLocationsHint")), 1)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "label"])
                ])
              ])
            ], 8, Vg)
          ])
        ])
      ]);
    };
  }
}), Qg = /* @__PURE__ */ kr(Jg, [["__scopeId", "data-v-bab3bfb5"]]), tp = { connection: "Verbindung" }, ep = { mqtt: "MQTT-Verbindung (optional, für Echtzeit-Aktualisierungen)", history: "Verlaufsdaten", timeRange: "Zeitraum-Filter", clearTimeRange: "Zeitraum-Filter leeren", phenomenonTime: "Filter nach Messzeit", clearPhenomenonTime: "Messzeit-Filter leeren", resultTime: "Filter nach Ergebniszeit", clearResultTime: "Ergebniszeit-Filter leeren", query: "Abfrage-Einstellungen", order: { phenomenonDesc: "Messzeit (absteigend)", phenomenonAsc: "Messzeit (aufsteigend)", resultDesc: "Ergebniszeit (absteigend)", resultAsc: "Ergebniszeit (aufsteigend)" }, orderBy: "Sortieren nach", limit: "Limit (max. Datensätze)", currentLocations: "Aktuelle statt historische Orte", currentLocationsLong: "Aktuelle Orte statt historischer Orte verwenden", currentLocationsHint: "Bereits geladene aktuelle Orte wiederverwenden, statt historische Orte über die API abzurufen", startTime: "Startzeit", startDate: "Startdatum", endTime: "Endzeit", endDate: "Enddatum", preview: { observations: "Beobachtungen", tree: "Baumansicht", json: "JSON-Ansicht", showMap: "Karte zeigen", things: "Things", withLocation: "mit Ort", hasLocation: "Hat einen Ort", description: "Beschreibung:", properties: "Eigenschaften:", viewChart: "Diagramm zeigen", unit: "Einheit:", noObservations: "Keine Beobachtungen geladen", more_one: "… und {{count}} weitere Beobachtung", more_other: "… und {{count}} weitere Beobachtungen", datastreams_one: "{{count}} Datastream", datastreams_other: "{{count}} Datastreams", noLocations: "Keine Ortsdaten vorhanden", datastream: "Datastream", noObservationData: "Keine Beobachtungsdaten vorhanden", clickDatastream: "Klicke auf einen Datastream, um Beobachtungen zu laden", noData: "Keine Daten vorhanden", dsShort: "{{count}} DS", obsShort: "{{count}} Beob." } }, np = {
  Settings: tp,
  Ogcsta: ep
}, ip = { connection: "Connection" }, sp = { mqtt: "MQTT connection (optional, for real-time updates)", history: "History data", timeRange: "Time range filter", clearTimeRange: "Clear time range filter", phenomenonTime: "Phenomenon time filter", clearPhenomenonTime: "Clear phenomenon time filter", resultTime: "Result time filter", clearResultTime: "Clear result time filter", query: "Query settings", order: { phenomenonDesc: "Phenomenon time (descending)", phenomenonAsc: "Phenomenon time (ascending)", resultDesc: "Result time (descending)", resultAsc: "Result time (ascending)" }, orderBy: "Sort by", limit: "Limit (max records)", currentLocations: "Current instead of historical locations", currentLocationsLong: "Use current locations instead of historical locations", currentLocationsHint: "Reuse already loaded current locations instead of fetching historical locations via API", startTime: "Start time", startDate: "Start date", endTime: "End time", endDate: "End date", preview: { observations: "Observations", tree: "Tree view", json: "JSON view", showMap: "Show map", things: "Things", withLocation: "with location", hasLocation: "Has a location", description: "Description:", properties: "Properties:", viewChart: "View chart", unit: "Unit:", noObservations: "No observations loaded", more_one: "… and {{count}} more observation", more_other: "… and {{count}} more observations", datastreams_one: "{{count}} datastream", datastreams_other: "{{count}} datastreams", noLocations: "No location data available", datastream: "Datastream", noObservationData: "No observation data available", clickDatastream: "Click on a datastream to load observations", noData: "No data available", dsShort: "{{count}} DS", obsShort: "{{count}} obs" } }, op = {
  Settings: ip,
  Ogcsta: sp
};
var ap = Object.getOwnPropertyDescriptor, rp = (n, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? ap(t, e) : t, o = n.length - 1, a; o >= 0; o--)
    (a = n[o]) && (s = a(s) || s);
  return s;
};
const Or = "datasourceOgcsta";
let zo = class {
  namespace = Or;
  resources = {
    de: np,
    en: op
  };
};
zo = rp([
  Ir({
    service: ["Translations"],
    properties: { "i18n.namespace": Or }
  })
], zo);
const lp = Symbol.for("OgcStaStoreFactory"), cp = Symbol.for("OgcStaPreview"), hp = Symbol.for("OgcStaSettings");
function yp({ services: n }) {
  n.register("OgcStaPreview", Lg), n.register("OgcStaSettings", Qg), n.getRequired(jo).registerDatasourceType("ogcsta", {
    icon: "sensors",
    connections: ["rest"],
    Model: Vr,
    Store: lp,
    Preview: cp,
    Settings: hp
  });
}
function vp({ services: n }) {
  n.getRequired(jo).unregisterDatasourceType("ogcsta"), n.unregister("OgcStaPreview"), n.unregister("OgcStaSettings");
}
export {
  zo as DatasourceOgcstaTranslations,
  yp as activate,
  vp as deactivate,
  cp as symbolForOgcStaPreview,
  hp as symbolForOgcStaSettings
};
