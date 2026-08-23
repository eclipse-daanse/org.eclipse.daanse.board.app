(function(){var i="ui.vue.datasource.ogcsta",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".vjs-tree-brackets{cursor:pointer}.vjs-tree-brackets:hover{color:#1890ff}.vjs-check-controller{position:absolute;left:0}.vjs-check-controller.is-checked .vjs-check-controller-inner{background-color:#1890ff;border-color:#0076e4}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-checkbox:after{transform:rotate(45deg) scaleY(1)}.vjs-check-controller.is-checked .vjs-check-controller-inner.is-radio:after{transform:translate(-50%,-50%) scale(1)}.vjs-check-controller .vjs-check-controller-inner{display:inline-block;position:relative;border:1px solid #bfcbd9;border-radius:2px;vertical-align:middle;box-sizing:border-box;width:16px;height:16px;background-color:#fff;z-index:1;cursor:pointer;transition:border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46)}.vjs-check-controller .vjs-check-controller-inner:after{box-sizing:content-box;content:\"\";border:2px solid #fff;border-left:0;border-top:0;height:8px;left:4px;position:absolute;top:1px;transform:rotate(45deg) scaleY(0);width:4px;transition:transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;transform-origin:center}.vjs-check-controller .vjs-check-controller-inner.is-radio{border-radius:100%}.vjs-check-controller .vjs-check-controller-inner.is-radio:after{border-radius:100%;height:4px;background-color:#fff;left:50%;top:50%}.vjs-check-controller .vjs-check-controller-original{opacity:0;outline:none;position:absolute;z-index:-1;inset:0;margin:0}.vjs-carets{position:absolute;right:0;cursor:pointer}.vjs-carets svg{transition:transform .3s}.vjs-carets:hover{color:#1890ff}.vjs-carets-close{transform:rotate(-90deg)}.vjs-tree-node{display:flex;position:relative;line-height:20px}.vjs-tree-node.has-carets{padding-left:15px}.vjs-tree-node.has-carets.has-selector,.vjs-tree-node.has-selector{padding-left:30px}.vjs-tree-node.is-highlight,.vjs-tree-node:hover{background-color:#e6f7ff;border-radius:4px}.vjs-tree-node.is-highlight .vjs-tree-node-actions,.vjs-tree-node:hover .vjs-tree-node-actions{display:block}.vjs-tree-node .vjs-indent{display:flex;position:relative}.vjs-tree-node .vjs-indent-unit.has-line{border-left:1px dashed #bfcbd9}.vjs-tree-node .vjs-tree-node-actions{display:none;position:absolute;right:0;top:0;padding:0 4px;background-color:#e6f7ff;border-radius:4px}.vjs-tree-node .vjs-tree-node-actions .vjs-tree-node-actions-item{cursor:pointer}.vjs-tree-node .vjs-tree-node-actions .vjs-tree-node-actions-item:hover{color:#1890ff}.vjs-tree-node.dark.is-highlight,.vjs-tree-node.dark .vjs-tree-node-actions,.vjs-tree-node.dark:hover{background-color:#2e4558}.vjs-node-index{position:absolute;right:100%;margin-right:4px;user-select:none}.vjs-colon{white-space:pre}.vjs-comment{color:#bfcbd9}.vjs-key{white-space:nowrap}.vjs-value{word-break:break-word}.vjs-tree-node.dynamic-height .vjs-value{white-space:pre-wrap}.vjs-value-null,.vjs-value-undefined{color:#d55fde}.vjs-value-boolean,.vjs-value-number{color:#1d8ce0}.vjs-value-string{color:#13ce66}.vjs-tree{font-family:Monaco,Menlo,Consolas,Bitstream Vera Sans Mono,monospace;font-size:14px;text-align:left}.vjs-tree.is-virtual{overflow:auto}.vjs-tree.is-virtual .vjs-tree-node{white-space:nowrap}.leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:\"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:\"\"}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}.tree-view[data-v-dbdeb998]{flex:1;overflow:auto;padding:.5rem}.json-view[data-v-dbdeb998]{flex:1;overflow:auto;padding:1rem;border:1px solid #e5e7eb;border-radius:.5rem;margin:.5rem}.tree-node[data-v-dbdeb998]{display:flex;align-items:center;gap:.35rem;padding:.3rem .5rem;cursor:pointer;border-radius:.25rem;transition:background-color .15s;font-size:.9em}.tree-node[data-v-dbdeb998]:hover{background-color:#f3f4f6}.thing-node[data-v-dbdeb998]{font-weight:600;color:#111827;font-size:.95em}.thing-item.thing-selected>.thing-node[data-v-dbdeb998]{background-color:#fef3c7;border-left:3px solid #f59e0b}.datastream-node[data-v-dbdeb998]{font-weight:500;color:#374151;font-size:.95em}.node-label[data-v-dbdeb998]{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.node-count[data-v-dbdeb998]{color:#6b7280;font-size:.8em;font-weight:400}.unit-badge[data-v-dbdeb998]{background-color:#e0f2fe;color:#0369a1;padding:.1rem .4rem;border-radius:.25rem;font-size:.75em;font-weight:500}.children[data-v-dbdeb998]{margin-left:1.5rem;border-left:2px solid #e5e7eb;padding-left:.5rem}.thing-info[data-v-dbdeb998],.ds-info[data-v-dbdeb998]{padding:.25rem .5rem;font-size:.85em;color:#6b7280;display:flex;flex-wrap:wrap;gap:.25rem;align-items:flex-start}.info-label[data-v-dbdeb998]{font-weight:500;color:#374151;min-width:80px}.info-label-small[data-v-dbdeb998]{font-weight:500;color:#6b7280;font-size:.9em}.info-value[data-v-dbdeb998]{color:#4b5563;flex:1}.info-value-small[data-v-dbdeb998]{color:#6b7280;font-size:.9em}.properties-list[data-v-dbdeb998]{display:flex;flex-wrap:wrap;gap:.25rem}.property-tag[data-v-dbdeb998]{background-color:#f3f4f6;color:#374151;padding:.1rem .4rem;border-radius:.25rem;font-size:.8em}.observation-item[data-v-dbdeb998]{display:flex;align-items:center;gap:.5rem;padding:.25rem .5rem;font-size:.9em;color:#4b5563}.observation-item.empty[data-v-dbdeb998]{color:#9ca3af;font-style:italic}.observation-item.more[data-v-dbdeb998]{color:#6b7280;font-style:italic;font-size:.85em}.observation-time[data-v-dbdeb998]{color:#6b7280;font-size:.8em;min-width:120px}.observation-result[data-v-dbdeb998]{font-weight:500;color:#059669}.right-panel[data-v-dbdeb998]{flex:1;display:flex;flex-direction:column;border-left:1px solid #e5e7eb;overflow:hidden;min-width:300px}.map-panel[data-v-dbdeb998]{flex:1;min-height:200px;overflow:hidden}.map-panel.half-height[data-v-dbdeb998]{flex:0 0 50%;border-bottom:1px solid #e5e7eb}.no-locations[data-v-dbdeb998]{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#9ca3af;gap:.5rem;background:#f9fafb}.map-popup[data-v-dbdeb998]{min-width:150px}.map-popup strong[data-v-dbdeb998]{display:block;margin-bottom:.25rem}.map-popup p[data-v-dbdeb998]{margin:.25rem 0;font-size:.9em;color:#6b7280}.map-popup small[data-v-dbdeb998]{color:#9ca3af}.datastream-node.selected[data-v-dbdeb998]{background-color:#dbeafe;border-left:3px solid #3b82f6}.chart-panel[data-v-dbdeb998]{flex:1;display:flex;flex-direction:column;background:#fff;overflow:hidden;min-height:200px}.chart-panel.half-height[data-v-dbdeb998]{flex:0 0 50%}.chart-header[data-v-dbdeb998]{display:flex;justify-content:space-between;align-items:flex-start;padding:1rem;border-bottom:1px solid #e5e7eb}.chart-header h3[data-v-dbdeb998]{margin:0;font-size:1.1rem;font-weight:600;color:#111827}.chart-header p[data-v-dbdeb998]{margin:.25rem 0 0;font-size:.85rem;color:#6b7280}.chart-container[data-v-dbdeb998]{flex:1;padding:.5rem;overflow:hidden;min-height:150px}.no-chart-data[data-v-dbdeb998]{display:flex;align-items:center;justify-content:center;height:100%;color:#9ca3af;font-style:italic}.ogcsta-settings-wrapper[data-v-2d37fb9c]{position:relative;height:100%}.ogcsta-scroll-container[data-v-2d37fb9c]{position:absolute;inset:0}.ogcsta-settings[data-v-2d37fb9c]{display:flex;flex-direction:column;gap:1rem;padding:.5rem}.history-settings[data-v-2d37fb9c]{display:flex;flex-direction:column;gap:1.5rem;padding:.5rem}.setting-group[data-v-2d37fb9c]{display:flex;flex-direction:column;gap:.75rem;min-width:0}.filter-header[data-v-2d37fb9c]{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--va-background-border);padding-bottom:.5rem}.filter-header h4[data-v-2d37fb9c]{margin:0;border-bottom:none;padding-bottom:0}.setting-group h4[data-v-2d37fb9c]{margin:0;font-size:.9rem;font-weight:600;color:var(--va-text-primary);border-bottom:1px solid var(--va-background-border);padding-bottom:.5rem}.w-full[data-v-2d37fb9c]{width:100%}.datetime-picker-group[data-v-2d37fb9c]{display:flex;flex-direction:column;gap:.5rem;width:100%}[data-v-2d37fb9c] .va-collapse__body-wrapper{overflow:visible!important}.datetime-picker-group[data-v-2d37fb9c]>*{flex:1;min-width:0}\n";})();
import { DATASOURCE_REPOSITORY as Fo } from "org.eclipse.daanse.board.app.lib.api.datasource";
import * as jt from "vue";
import { defineComponent as ct, h as _e, ref as W, reactive as No, provide as Nt, computed as Ft, onMounted as pt, markRaw as yt, nextTick as it, onBeforeUnmount as on, inject as ut, watch as qt, onUnmounted as Di, render as vr, shallowRef as es, resolveComponent as Et, createElementBlock as J, createCommentVNode as _t, openBlock as q, createElementVNode as j, createVNode as Y, withCtx as Lt, createTextVNode as pn, toDisplayString as dt, normalizeStyle as xr, Fragment as Ve, renderList as Ie, normalizeClass as gn, createBlock as mn, unref as $ } from "vue";
import { useTemporaryStore as _r, VariableWrapper as we } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as Sr } from "org.eclipse.daanse.board.app.lib.api.variable";
import { VariableInput as ke } from "org.eclipse.daanse.board.app.ui.vue.variable.components";
/*!
 * @kurkle/color v0.3.4
 * https://github.com/kurkle/color#readme
 * (c) 2024 Jukka Kurkela
 * Released under the MIT License
 */
function an(n) {
  return n + 0.5 | 0;
}
const ee = (n, t, e) => Math.max(Math.min(n, e), t);
function We(n) {
  return ee(an(n * 2.55), 0, 255);
}
function oe(n) {
  return ee(an(n * 255), 0, 255);
}
function Gt(n) {
  return ee(an(n / 2.55) / 100, 0, 1);
}
function ns(n) {
  return ee(an(n * 100), 0, 100);
}
const Vt = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 }, mi = [..."0123456789ABCDEF"], wr = (n) => mi[n & 15], kr = (n) => mi[(n & 240) >> 4] + mi[n & 15], bn = (n) => (n & 240) >> 4 === (n & 15), Mr = (n) => bn(n.r) && bn(n.g) && bn(n.b) && bn(n.a);
function Cr(n) {
  var t = n.length, e;
  return n[0] === "#" && (t === 4 || t === 5 ? e = {
    r: 255 & Vt[n[1]] * 17,
    g: 255 & Vt[n[2]] * 17,
    b: 255 & Vt[n[3]] * 17,
    a: t === 5 ? Vt[n[4]] * 17 : 255
  } : (t === 7 || t === 9) && (e = {
    r: Vt[n[1]] << 4 | Vt[n[2]],
    g: Vt[n[3]] << 4 | Vt[n[4]],
    b: Vt[n[5]] << 4 | Vt[n[6]],
    a: t === 9 ? Vt[n[7]] << 4 | Vt[n[8]] : 255
  })), e;
}
const Or = (n, t) => n < 255 ? t(n) : "";
function Tr(n) {
  var t = Mr(n) ? wr : kr;
  return n ? "#" + t(n.r) + t(n.g) + t(n.b) + Or(n.a, t) : void 0;
}
const Pr = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Bo(n, t, e) {
  const i = t * Math.min(e, 1 - e), s = (o, a = (o + n / 30) % 12) => e - i * Math.max(Math.min(a - 3, 9 - a, 1), -1);
  return [s(0), s(8), s(4)];
}
function Lr(n, t, e) {
  const i = (s, o = (s + n / 60) % 6) => e - e * t * Math.max(Math.min(o, 4 - o, 1), 0);
  return [i(5), i(3), i(1)];
}
function Dr(n, t, e) {
  const i = Bo(n, 1, 0.5);
  let s;
  for (t + e > 1 && (s = 1 / (t + e), t *= s, e *= s), s = 0; s < 3; s++)
    i[s] *= 1 - t - e, i[s] += t;
  return i;
}
function Ar(n, t, e, i, s) {
  return n === s ? (t - e) / i + (t < e ? 6 : 0) : t === s ? (e - n) / i + 2 : (n - t) / i + 4;
}
function Ai(n) {
  const e = n.r / 255, i = n.g / 255, s = n.b / 255, o = Math.max(e, i, s), a = Math.min(e, i, s), r = (o + a) / 2;
  let l, c, u;
  return o !== a && (u = o - a, c = r > 0.5 ? u / (2 - o - a) : u / (o + a), l = Ar(e, i, s, u, o), l = l * 60 + 0.5), [l | 0, c || 0, r];
}
function Ri(n, t, e, i) {
  return (Array.isArray(t) ? n(t[0], t[1], t[2]) : n(t, e, i)).map(oe);
}
function Ei(n, t, e) {
  return Ri(Bo, n, t, e);
}
function Rr(n, t, e) {
  return Ri(Dr, n, t, e);
}
function Er(n, t, e) {
  return Ri(Lr, n, t, e);
}
function jo(n) {
  return (n % 360 + 360) % 360;
}
function Vr(n) {
  const t = Pr.exec(n);
  let e = 255, i;
  if (!t)
    return;
  t[5] !== i && (e = t[6] ? We(+t[5]) : oe(+t[5]));
  const s = jo(+t[2]), o = +t[3] / 100, a = +t[4] / 100;
  return t[1] === "hwb" ? i = Rr(s, o, a) : t[1] === "hsv" ? i = Er(s, o, a) : i = Ei(s, o, a), {
    r: i[0],
    g: i[1],
    b: i[2],
    a: e
  };
}
function Ir(n, t) {
  var e = Ai(n);
  e[0] = jo(e[0] + t), e = Ei(e), n.r = e[0], n.g = e[1], n.b = e[2];
}
function Fr(n) {
  if (!n)
    return;
  const t = Ai(n), e = t[0], i = ns(t[1]), s = ns(t[2]);
  return n.a < 255 ? `hsla(${e}, ${i}%, ${s}%, ${Gt(n.a)})` : `hsl(${e}, ${i}%, ${s}%)`;
}
const is = {
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
}, ss = {
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
function Nr() {
  const n = {}, t = Object.keys(ss), e = Object.keys(is);
  let i, s, o, a, r;
  for (i = 0; i < t.length; i++) {
    for (a = r = t[i], s = 0; s < e.length; s++)
      o = e[s], r = r.replace(o, is[o]);
    o = parseInt(ss[a], 16), n[r] = [o >> 16 & 255, o >> 8 & 255, o & 255];
  }
  return n;
}
let yn;
function Br(n) {
  yn || (yn = Nr(), yn.transparent = [0, 0, 0, 0]);
  const t = yn[n.toLowerCase()];
  return t && {
    r: t[0],
    g: t[1],
    b: t[2],
    a: t.length === 4 ? t[3] : 255
  };
}
const jr = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function zr(n) {
  const t = jr.exec(n);
  let e = 255, i, s, o;
  if (t) {
    if (t[7] !== i) {
      const a = +t[7];
      e = t[8] ? We(a) : ee(a * 255, 0, 255);
    }
    return i = +t[1], s = +t[3], o = +t[5], i = 255 & (t[2] ? We(i) : ee(i, 0, 255)), s = 255 & (t[4] ? We(s) : ee(s, 0, 255)), o = 255 & (t[6] ? We(o) : ee(o, 0, 255)), {
      r: i,
      g: s,
      b: o,
      a: e
    };
  }
}
function Wr(n) {
  return n && (n.a < 255 ? `rgba(${n.r}, ${n.g}, ${n.b}, ${Gt(n.a)})` : `rgb(${n.r}, ${n.g}, ${n.b})`);
}
const ei = (n) => n <= 31308e-7 ? n * 12.92 : Math.pow(n, 1 / 2.4) * 1.055 - 0.055, Me = (n) => n <= 0.04045 ? n / 12.92 : Math.pow((n + 0.055) / 1.055, 2.4);
function Hr(n, t, e) {
  const i = Me(Gt(n.r)), s = Me(Gt(n.g)), o = Me(Gt(n.b));
  return {
    r: oe(ei(i + e * (Me(Gt(t.r)) - i))),
    g: oe(ei(s + e * (Me(Gt(t.g)) - s))),
    b: oe(ei(o + e * (Me(Gt(t.b)) - o))),
    a: n.a + e * (t.a - n.a)
  };
}
function vn(n, t, e) {
  if (n) {
    let i = Ai(n);
    i[t] = Math.max(0, Math.min(i[t] + i[t] * e, t === 0 ? 360 : 1)), i = Ei(i), n.r = i[0], n.g = i[1], n.b = i[2];
  }
}
function zo(n, t) {
  return n && Object.assign(t || {}, n);
}
function os(n) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return Array.isArray(n) ? n.length >= 3 && (t = { r: n[0], g: n[1], b: n[2], a: 255 }, n.length > 3 && (t.a = oe(n[3]))) : (t = zo(n, { r: 0, g: 0, b: 0, a: 1 }), t.a = oe(t.a)), t;
}
function $r(n) {
  return n.charAt(0) === "r" ? zr(n) : Vr(n);
}
class Ke {
  constructor(t) {
    if (t instanceof Ke)
      return t;
    const e = typeof t;
    let i;
    e === "object" ? i = os(t) : e === "string" && (i = Cr(t) || Br(t) || $r(t)), this._rgb = i, this._valid = !!i;
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = zo(this._rgb);
    return t && (t.a = Gt(t.a)), t;
  }
  set rgb(t) {
    this._rgb = os(t);
  }
  rgbString() {
    return this._valid ? Wr(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Tr(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Fr(this._rgb) : void 0;
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
    return t && (this._rgb = Hr(this._rgb, t._rgb, e)), this;
  }
  clone() {
    return new Ke(this.rgb);
  }
  alpha(t) {
    return this._rgb.a = oe(t), this;
  }
  clearer(t) {
    const e = this._rgb;
    return e.a *= 1 - t, this;
  }
  greyscale() {
    const t = this._rgb, e = an(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
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
    return vn(this._rgb, 2, t), this;
  }
  darken(t) {
    return vn(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return vn(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return vn(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Ir(this._rgb, t), this;
  }
}
/*!
 * Chart.js v4.5.1
 * https://www.chartjs.org
 * (c) 2025 Chart.js Contributors
 * Released under the MIT License
 */
function Ut() {
}
const Ur = /* @__PURE__ */ (() => {
  let n = 0;
  return () => n++;
})();
function X(n) {
  return n == null;
}
function at(n) {
  if (Array.isArray && Array.isArray(n))
    return !0;
  const t = Object.prototype.toString.call(n);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function G(n) {
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
const Yr = (n, t) => typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 : +n / t, Wo = (n, t) => typeof n == "string" && n.endsWith("%") ? parseFloat(n) / 100 * t : +n;
function nt(n, t, e) {
  if (n && typeof n.call == "function")
    return n.apply(e, t);
}
function Q(n, t, e, i) {
  let s, o, a;
  if (at(n))
    for (o = n.length, s = 0; s < o; s++)
      t.call(e, n[s], s);
  else if (G(n))
    for (a = Object.keys(n), o = a.length, s = 0; s < o; s++)
      t.call(e, n[a[s]], a[s]);
}
function En(n, t) {
  let e, i, s, o;
  if (!n || !t || n.length !== t.length)
    return !1;
  for (e = 0, i = n.length; e < i; ++e)
    if (s = n[e], o = t[e], s.datasetIndex !== o.datasetIndex || s.index !== o.index)
      return !1;
  return !0;
}
function Vn(n) {
  if (at(n))
    return n.map(Vn);
  if (G(n)) {
    const t = /* @__PURE__ */ Object.create(null), e = Object.keys(n), i = e.length;
    let s = 0;
    for (; s < i; ++s)
      t[e[s]] = Vn(n[e[s]]);
    return t;
  }
  return n;
}
function Ho(n) {
  return [
    "__proto__",
    "prototype",
    "constructor"
  ].indexOf(n) === -1;
}
function Xr(n, t, e, i) {
  if (!Ho(n))
    return;
  const s = t[n], o = e[n];
  G(s) && G(o) ? Ze(s, o, i) : t[n] = Vn(o);
}
function Ze(n, t, e) {
  const i = at(t) ? t : [
    t
  ], s = i.length;
  if (!G(n))
    return n;
  e = e || {};
  const o = e.merger || Xr;
  let a;
  for (let r = 0; r < s; ++r) {
    if (a = i[r], !G(a))
      continue;
    const l = Object.keys(a);
    for (let c = 0, u = l.length; c < u; ++c)
      o(l[c], n, a, e);
  }
  return n;
}
function Ye(n, t) {
  return Ze(n, t, {
    merger: Gr
  });
}
function Gr(n, t, e) {
  if (!Ho(n))
    return;
  const i = t[n], s = e[n];
  G(i) && G(s) ? Ye(i, s) : Object.prototype.hasOwnProperty.call(t, n) || (t[n] = Vn(s));
}
const as = {
  // Chart.helpers.core resolveObjectKey should resolve empty key to root object
  "": (n) => n,
  // default resolvers
  x: (n) => n.x,
  y: (n) => n.y
};
function qr(n) {
  const t = n.split("."), e = [];
  let i = "";
  for (const s of t)
    i += s, i.endsWith("\\") ? i = i.slice(0, -1) + "." : (e.push(i), i = "");
  return e;
}
function Kr(n) {
  const t = qr(n);
  return (e) => {
    for (const i of t) {
      if (i === "")
        break;
      e = e && e[i];
    }
    return e;
  };
}
function ae(n, t) {
  return (as[t] || (as[t] = Kr(t)))(n);
}
function Vi(n) {
  return n.charAt(0).toUpperCase() + n.slice(1);
}
const Je = (n) => typeof n < "u", re = (n) => typeof n == "function", rs = (n, t) => {
  if (n.size !== t.size)
    return !1;
  for (const e of n)
    if (!t.has(e))
      return !1;
  return !0;
};
function Zr(n) {
  return n.type === "mouseup" || n.type === "click" || n.type === "contextmenu";
}
const Z = Math.PI, ot = 2 * Z, Jr = ot + Z, In = Number.POSITIVE_INFINITY, Qr = Z / 180, bt = Z / 2, ue = Z / 4, ls = Z * 2 / 3, ne = Math.log10, Ht = Math.sign;
function Xe(n, t, e) {
  return Math.abs(n - t) < e;
}
function cs(n) {
  const t = Math.round(n);
  n = Xe(n, t, n / 1e3) ? t : n;
  const e = Math.pow(10, Math.floor(ne(n))), i = n / e;
  return (i <= 1 ? 1 : i <= 2 ? 2 : i <= 5 ? 5 : 10) * e;
}
function tl(n) {
  const t = [], e = Math.sqrt(n);
  let i;
  for (i = 1; i < e; i++)
    n % i === 0 && (t.push(i), t.push(n / i));
  return e === (e | 0) && t.push(e), t.sort((s, o) => s - o).pop(), t;
}
function el(n) {
  return typeof n == "symbol" || typeof n == "object" && n !== null && !(Symbol.toPrimitive in n || "toString" in n || "valueOf" in n);
}
function Te(n) {
  return !el(n) && !isNaN(parseFloat(n)) && isFinite(n);
}
function nl(n, t) {
  const e = Math.round(n);
  return e - t <= n && e + t >= n;
}
function $o(n, t, e) {
  let i, s, o;
  for (i = 0, s = n.length; i < s; i++)
    o = n[i][e], isNaN(o) || (t.min = Math.min(t.min, o), t.max = Math.max(t.max, o));
}
function Bt(n) {
  return n * (Z / 180);
}
function Ii(n) {
  return n * (180 / Z);
}
function us(n) {
  if (!ft(n))
    return;
  let t = 1, e = 0;
  for (; Math.round(n * t) / t !== n; )
    t *= 10, e++;
  return e;
}
function Uo(n, t) {
  const e = t.x - n.x, i = t.y - n.y, s = Math.sqrt(e * e + i * i);
  let o = Math.atan2(i, e);
  return o < -0.5 * Z && (o += ot), {
    angle: o,
    distance: s
  };
}
function bi(n, t) {
  return Math.sqrt(Math.pow(t.x - n.x, 2) + Math.pow(t.y - n.y, 2));
}
function il(n, t) {
  return (n - t + Jr) % ot - Z;
}
function Mt(n) {
  return (n % ot + ot) % ot;
}
function Qe(n, t, e, i) {
  const s = Mt(n), o = Mt(t), a = Mt(e), r = Mt(o - s), l = Mt(a - s), c = Mt(s - o), u = Mt(s - a);
  return s === o || s === a || i && o === a || r > l && c < u;
}
function St(n, t, e) {
  return Math.max(t, Math.min(e, n));
}
function sl(n) {
  return St(n, -32768, 32767);
}
function Kt(n, t, e, i = 1e-6) {
  return n >= Math.min(t, e) - i && n <= Math.max(t, e) + i;
}
function Fi(n, t, e) {
  e = e || ((a) => n[a] < t);
  let i = n.length - 1, s = 0, o;
  for (; i - s > 1; )
    o = s + i >> 1, e(o) ? s = o : i = o;
  return {
    lo: s,
    hi: i
  };
}
const Zt = (n, t, e, i) => Fi(n, e, i ? (s) => {
  const o = n[s][t];
  return o < e || o === e && n[s + 1][t] === e;
} : (s) => n[s][t] < e), ol = (n, t, e) => Fi(n, e, (i) => n[i][t] >= e);
function al(n, t, e) {
  let i = 0, s = n.length;
  for (; i < s && n[i] < t; )
    i++;
  for (; s > i && n[s - 1] > e; )
    s--;
  return i > 0 || s < n.length ? n.slice(i, s) : n;
}
const Yo = [
  "push",
  "pop",
  "shift",
  "splice",
  "unshift"
];
function rl(n, t) {
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
  }), Yo.forEach((e) => {
    const i = "_onData" + Vi(e), s = n[e];
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
function hs(n, t) {
  const e = n._chartjs;
  if (!e)
    return;
  const i = e.listeners, s = i.indexOf(t);
  s !== -1 && i.splice(s, 1), !(i.length > 0) && (Yo.forEach((o) => {
    delete n[o];
  }), delete n._chartjs);
}
function Xo(n) {
  const t = new Set(n);
  return t.size === n.length ? n : Array.from(t);
}
const Go = (function() {
  return typeof window > "u" ? function(n) {
    return n();
  } : window.requestAnimationFrame;
})();
function qo(n, t) {
  let e = [], i = !1;
  return function(...s) {
    e = s, i || (i = !0, Go.call(window, () => {
      i = !1, n.apply(t, e);
    }));
  };
}
function ll(n, t) {
  let e;
  return function(...i) {
    return t ? (clearTimeout(e), e = setTimeout(n, t, i)) : n.apply(this, i), t;
  };
}
const Ni = (n) => n === "start" ? "left" : n === "end" ? "right" : "center", kt = (n, t, e) => n === "start" ? t : n === "end" ? e : (t + e) / 2, cl = (n, t, e, i) => n === (i ? "left" : "right") ? e : n === "center" ? (t + e) / 2 : t;
function Ko(n, t, e) {
  const i = t.length;
  let s = 0, o = i;
  if (n._sorted) {
    const { iScale: a, vScale: r, _parsed: l } = n, c = n.dataset && n.dataset.options ? n.dataset.options.spanGaps : null, u = a.axis, { min: h, max: d, minDefined: f, maxDefined: p } = a.getUserBounds();
    if (f) {
      if (s = Math.min(
        // @ts-expect-error Need to type _parsed
        Zt(l, u, h).lo,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? i : Zt(t, u, a.getPixelForValue(h)).lo
      ), c) {
        const g = l.slice(0, s + 1).reverse().findIndex((m) => !X(m[r.axis]));
        s -= Math.max(0, g);
      }
      s = St(s, 0, i - 1);
    }
    if (p) {
      let g = Math.max(
        // @ts-expect-error Need to type _parsed
        Zt(l, a.axis, d, !0).hi + 1,
        // @ts-expect-error Need to fix types on _lookupByKey
        e ? 0 : Zt(t, u, a.getPixelForValue(d), !0).hi + 1
      );
      if (c) {
        const m = l.slice(g - 1).findIndex((b) => !X(b[r.axis]));
        g += Math.max(0, m);
      }
      o = St(g, s, i) - s;
    } else
      o = i - s;
  }
  return {
    start: s,
    count: o
  };
}
function Zo(n) {
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
const xn = (n) => n === 0 || n === 1, ds = (n, t, e) => -(Math.pow(2, 10 * (n -= 1)) * Math.sin((n - t) * ot / e)), fs = (n, t, e) => Math.pow(2, -10 * n) * Math.sin((n - t) * ot / e) + 1, Ge = {
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
  easeInOutSine: (n) => -0.5 * (Math.cos(Z * n) - 1),
  easeInExpo: (n) => n === 0 ? 0 : Math.pow(2, 10 * (n - 1)),
  easeOutExpo: (n) => n === 1 ? 1 : -Math.pow(2, -10 * n) + 1,
  easeInOutExpo: (n) => xn(n) ? n : n < 0.5 ? 0.5 * Math.pow(2, 10 * (n * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (n * 2 - 1)) + 2),
  easeInCirc: (n) => n >= 1 ? n : -(Math.sqrt(1 - n * n) - 1),
  easeOutCirc: (n) => Math.sqrt(1 - (n -= 1) * n),
  easeInOutCirc: (n) => (n /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - n * n) - 1) : 0.5 * (Math.sqrt(1 - (n -= 2) * n) + 1),
  easeInElastic: (n) => xn(n) ? n : ds(n, 0.075, 0.3),
  easeOutElastic: (n) => xn(n) ? n : fs(n, 0.075, 0.3),
  easeInOutElastic(n) {
    return xn(n) ? n : n < 0.5 ? 0.5 * ds(n * 2, 0.1125, 0.45) : 0.5 + 0.5 * fs(n * 2 - 1, 0.1125, 0.45);
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
  easeInBounce: (n) => 1 - Ge.easeOutBounce(1 - n),
  easeOutBounce(n) {
    return n < 1 / 2.75 ? 7.5625 * n * n : n < 2 / 2.75 ? 7.5625 * (n -= 1.5 / 2.75) * n + 0.75 : n < 2.5 / 2.75 ? 7.5625 * (n -= 2.25 / 2.75) * n + 0.9375 : 7.5625 * (n -= 2.625 / 2.75) * n + 0.984375;
  },
  easeInOutBounce: (n) => n < 0.5 ? Ge.easeInBounce(n * 2) * 0.5 : Ge.easeOutBounce(n * 2 - 1) * 0.5 + 0.5
};
function Bi(n) {
  if (n && typeof n == "object") {
    const t = n.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function ps(n) {
  return Bi(n) ? n : new Ke(n);
}
function ni(n) {
  return Bi(n) ? n : new Ke(n).saturate(0.5).darken(0.1).hexString();
}
const ul = [
  "x",
  "y",
  "borderWidth",
  "radius",
  "tension"
], hl = [
  "color",
  "borderColor",
  "backgroundColor"
];
function dl(n) {
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
      properties: hl
    },
    numbers: {
      type: "number",
      properties: ul
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
function fl(n) {
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
const gs = /* @__PURE__ */ new Map();
function pl(n, t) {
  t = t || {};
  const e = n + JSON.stringify(t);
  let i = gs.get(e);
  return i || (i = new Intl.NumberFormat(n, t), gs.set(e, i)), i;
}
function rn(n, t, e) {
  return pl(t, e).format(n);
}
const Jo = {
  values(n) {
    return at(n) ? n : "" + n;
  },
  numeric(n, t, e) {
    if (n === 0)
      return "0";
    const i = this.chart.options.locale;
    let s, o = n;
    if (e.length > 1) {
      const c = Math.max(Math.abs(e[0].value), Math.abs(e[e.length - 1].value));
      (c < 1e-4 || c > 1e15) && (s = "scientific"), o = gl(n, e);
    }
    const a = ne(Math.abs(o)), r = isNaN(a) ? 1 : Math.max(Math.min(-1 * Math.floor(a), 20), 0), l = {
      notation: s,
      minimumFractionDigits: r,
      maximumFractionDigits: r
    };
    return Object.assign(l, this.options.ticks.format), rn(n, i, l);
  },
  logarithmic(n, t, e) {
    if (n === 0)
      return "0";
    const i = e[t].significand || n / Math.pow(10, Math.floor(ne(n)));
    return [
      1,
      2,
      3,
      5,
      10,
      15
    ].includes(i) || t > 0.8 * e.length ? Jo.numeric.call(this, n, t, e) : "";
  }
};
function gl(n, t) {
  let e = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(e) >= 1 && n !== Math.floor(n) && (e = n - Math.floor(n)), e;
}
var $n = {
  formatters: Jo
};
function ml(n) {
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
      callback: $n.formatters.values,
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
const ve = /* @__PURE__ */ Object.create(null), yi = /* @__PURE__ */ Object.create(null);
function qe(n, t) {
  if (!t)
    return n;
  const e = t.split(".");
  for (let i = 0, s = e.length; i < s; ++i) {
    const o = e[i];
    n = n[o] || (n[o] = /* @__PURE__ */ Object.create(null));
  }
  return n;
}
function ii(n, t, e) {
  return typeof t == "string" ? Ze(qe(n, t), e) : Ze(qe(n, ""), t);
}
class bl {
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
    }, this.hover = {}, this.hoverBackgroundColor = (i, s) => ni(s.backgroundColor), this.hoverBorderColor = (i, s) => ni(s.borderColor), this.hoverColor = (i, s) => ni(s.color), this.indexAxis = "x", this.interaction = {
      mode: "nearest",
      intersect: !0,
      includeInvisible: !1
    }, this.maintainAspectRatio = !0, this.onHover = null, this.onClick = null, this.parsing = !0, this.plugins = {}, this.responsive = !0, this.scale = void 0, this.scales = {}, this.showLine = !0, this.drawActiveElementsOnTop = !0, this.describe(t), this.apply(e);
  }
  set(t, e) {
    return ii(this, t, e);
  }
  get(t) {
    return qe(this, t);
  }
  describe(t, e) {
    return ii(yi, t, e);
  }
  override(t, e) {
    return ii(ve, t, e);
  }
  route(t, e, i, s) {
    const o = qe(this, t), a = qe(this, i), r = "_" + e;
    Object.defineProperties(o, {
      [r]: {
        value: o[e],
        writable: !0
      },
      [e]: {
        enumerable: !0,
        get() {
          const l = this[r], c = a[s];
          return G(l) ? Object.assign({}, c, l) : U(l, c);
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
var rt = /* @__PURE__ */ new bl({
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
  dl,
  fl,
  ml
]);
function yl(n) {
  return !n || X(n.size) || X(n.family) ? null : (n.style ? n.style + " " : "") + (n.weight ? n.weight + " " : "") + n.size + "px " + n.family;
}
function Fn(n, t, e, i, s) {
  let o = t[s];
  return o || (o = t[s] = n.measureText(s).width, e.push(s)), o > i && (i = o), i;
}
function vl(n, t, e, i) {
  i = i || {};
  let s = i.data = i.data || {}, o = i.garbageCollect = i.garbageCollect || [];
  i.font !== t && (s = i.data = {}, o = i.garbageCollect = [], i.font = t), n.save(), n.font = t;
  let a = 0;
  const r = e.length;
  let l, c, u, h, d;
  for (l = 0; l < r; l++)
    if (h = e[l], h != null && !at(h))
      a = Fn(n, s, o, a, h);
    else if (at(h))
      for (c = 0, u = h.length; c < u; c++)
        d = h[c], d != null && !at(d) && (a = Fn(n, s, o, a, d));
  n.restore();
  const f = o.length / 2;
  if (f > e.length) {
    for (l = 0; l < f; l++)
      delete s[o[l]];
    o.splice(0, f);
  }
  return a;
}
function he(n, t, e) {
  const i = n.currentDevicePixelRatio, s = e !== 0 ? Math.max(e / 2, 0.5) : 0;
  return Math.round((t - s) * i) / i + s;
}
function ms(n, t) {
  !t && !n || (t = t || n.getContext("2d"), t.save(), t.resetTransform(), t.clearRect(0, 0, n.width, n.height), t.restore());
}
function vi(n, t, e, i) {
  Qo(n, t, e, i, null);
}
function Qo(n, t, e, i, s) {
  let o, a, r, l, c, u, h, d;
  const f = t.pointStyle, p = t.rotation, g = t.radius;
  let m = (p || 0) * Qr;
  if (f && typeof f == "object" && (o = f.toString(), o === "[object HTMLImageElement]" || o === "[object HTMLCanvasElement]")) {
    n.save(), n.translate(e, i), n.rotate(m), n.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height), n.restore();
    return;
  }
  if (!(isNaN(g) || g <= 0)) {
    switch (n.beginPath(), f) {
      // Default includes circle
      default:
        s ? n.ellipse(e, i, s / 2, g, 0, 0, ot) : n.arc(e, i, g, 0, ot), n.closePath();
        break;
      case "triangle":
        u = s ? s / 2 : g, n.moveTo(e + Math.sin(m) * u, i - Math.cos(m) * g), m += ls, n.lineTo(e + Math.sin(m) * u, i - Math.cos(m) * g), m += ls, n.lineTo(e + Math.sin(m) * u, i - Math.cos(m) * g), n.closePath();
        break;
      case "rectRounded":
        c = g * 0.516, l = g - c, a = Math.cos(m + ue) * l, h = Math.cos(m + ue) * (s ? s / 2 - c : l), r = Math.sin(m + ue) * l, d = Math.sin(m + ue) * (s ? s / 2 - c : l), n.arc(e - h, i - r, c, m - Z, m - bt), n.arc(e + d, i - a, c, m - bt, m), n.arc(e + h, i + r, c, m, m + bt), n.arc(e - d, i + a, c, m + bt, m + Z), n.closePath();
        break;
      case "rect":
        if (!p) {
          l = Math.SQRT1_2 * g, u = s ? s / 2 : l, n.rect(e - u, i - l, 2 * u, 2 * l);
          break;
        }
        m += ue;
      /* falls through */
      case "rectRot":
        h = Math.cos(m) * (s ? s / 2 : g), a = Math.cos(m) * g, r = Math.sin(m) * g, d = Math.sin(m) * (s ? s / 2 : g), n.moveTo(e - h, i - r), n.lineTo(e + d, i - a), n.lineTo(e + h, i + r), n.lineTo(e - d, i + a), n.closePath();
        break;
      case "crossRot":
        m += ue;
      /* falls through */
      case "cross":
        h = Math.cos(m) * (s ? s / 2 : g), a = Math.cos(m) * g, r = Math.sin(m) * g, d = Math.sin(m) * (s ? s / 2 : g), n.moveTo(e - h, i - r), n.lineTo(e + h, i + r), n.moveTo(e + d, i - a), n.lineTo(e - d, i + a);
        break;
      case "star":
        h = Math.cos(m) * (s ? s / 2 : g), a = Math.cos(m) * g, r = Math.sin(m) * g, d = Math.sin(m) * (s ? s / 2 : g), n.moveTo(e - h, i - r), n.lineTo(e + h, i + r), n.moveTo(e + d, i - a), n.lineTo(e - d, i + a), m += ue, h = Math.cos(m) * (s ? s / 2 : g), a = Math.cos(m) * g, r = Math.sin(m) * g, d = Math.sin(m) * (s ? s / 2 : g), n.moveTo(e - h, i - r), n.lineTo(e + h, i + r), n.moveTo(e + d, i - a), n.lineTo(e - d, i + a);
        break;
      case "line":
        a = s ? s / 2 : Math.cos(m) * g, r = Math.sin(m) * g, n.moveTo(e - a, i - r), n.lineTo(e + a, i + r);
        break;
      case "dash":
        n.moveTo(e, i), n.lineTo(e + Math.cos(m) * (s ? s / 2 : g), i + Math.sin(m) * g);
        break;
      case !1:
        n.closePath();
        break;
    }
    n.fill(), t.borderWidth > 0 && n.stroke();
  }
}
function Jt(n, t, e) {
  return e = e || 0.5, !t || n && n.x > t.left - e && n.x < t.right + e && n.y > t.top - e && n.y < t.bottom + e;
}
function Un(n, t) {
  n.save(), n.beginPath(), n.rect(t.left, t.top, t.right - t.left, t.bottom - t.top), n.clip();
}
function Yn(n) {
  n.restore();
}
function xl(n, t, e, i, s) {
  if (!t)
    return n.lineTo(e.x, e.y);
  if (s === "middle") {
    const o = (t.x + e.x) / 2;
    n.lineTo(o, t.y), n.lineTo(o, e.y);
  } else s === "after" != !!i ? n.lineTo(t.x, e.y) : n.lineTo(e.x, t.y);
  n.lineTo(e.x, e.y);
}
function _l(n, t, e, i) {
  if (!t)
    return n.lineTo(e.x, e.y);
  n.bezierCurveTo(i ? t.cp1x : t.cp2x, i ? t.cp1y : t.cp2y, i ? e.cp2x : e.cp1x, i ? e.cp2y : e.cp1y, e.x, e.y);
}
function Sl(n, t) {
  t.translation && n.translate(t.translation[0], t.translation[1]), X(t.rotation) || n.rotate(t.rotation), t.color && (n.fillStyle = t.color), t.textAlign && (n.textAlign = t.textAlign), t.textBaseline && (n.textBaseline = t.textBaseline);
}
function wl(n, t, e, i, s) {
  if (s.strikethrough || s.underline) {
    const o = n.measureText(i), a = t - o.actualBoundingBoxLeft, r = t + o.actualBoundingBoxRight, l = e - o.actualBoundingBoxAscent, c = e + o.actualBoundingBoxDescent, u = s.strikethrough ? (l + c) / 2 : c;
    n.strokeStyle = n.fillStyle, n.beginPath(), n.lineWidth = s.decorationWidth || 2, n.moveTo(a, u), n.lineTo(r, u), n.stroke();
  }
}
function kl(n, t) {
  const e = n.fillStyle;
  n.fillStyle = t.color, n.fillRect(t.left, t.top, t.width, t.height), n.fillStyle = e;
}
function xe(n, t, e, i, s, o = {}) {
  const a = at(t) ? t : [
    t
  ], r = o.strokeWidth > 0 && o.strokeColor !== "";
  let l, c;
  for (n.save(), n.font = s.string, Sl(n, o), l = 0; l < a.length; ++l)
    c = a[l], o.backdrop && kl(n, o.backdrop), r && (o.strokeColor && (n.strokeStyle = o.strokeColor), X(o.strokeWidth) || (n.lineWidth = o.strokeWidth), n.strokeText(c, e, i, o.maxWidth)), n.fillText(c, e, i, o.maxWidth), wl(n, e, i, c, o), i += Number(s.lineHeight);
  n.restore();
}
function tn(n, t) {
  const { x: e, y: i, w: s, h: o, radius: a } = t;
  n.arc(e + a.topLeft, i + a.topLeft, a.topLeft, 1.5 * Z, Z, !0), n.lineTo(e, i + o - a.bottomLeft), n.arc(e + a.bottomLeft, i + o - a.bottomLeft, a.bottomLeft, Z, bt, !0), n.lineTo(e + s - a.bottomRight, i + o), n.arc(e + s - a.bottomRight, i + o - a.bottomRight, a.bottomRight, bt, 0, !0), n.lineTo(e + s, i + a.topRight), n.arc(e + s - a.topRight, i + a.topRight, a.topRight, 0, -bt, !0), n.lineTo(e + a.topLeft, i);
}
const Ml = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/, Cl = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
function Ol(n, t) {
  const e = ("" + n).match(Ml);
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
const Tl = (n) => +n || 0;
function ji(n, t) {
  const e = {}, i = G(t), s = i ? Object.keys(t) : t, o = G(n) ? i ? (a) => U(n[a], n[t[a]]) : (a) => n[a] : () => n;
  for (const a of s)
    e[a] = Tl(o(a));
  return e;
}
function ta(n) {
  return ji(n, {
    top: "y",
    right: "x",
    bottom: "y",
    left: "x"
  });
}
function be(n) {
  return ji(n, [
    "topLeft",
    "topRight",
    "bottomLeft",
    "bottomRight"
  ]);
}
function Ot(n) {
  const t = ta(n);
  return t.width = t.left + t.right, t.height = t.top + t.bottom, t;
}
function vt(n, t) {
  n = n || {}, t = t || rt.font;
  let e = U(n.size, t.size);
  typeof e == "string" && (e = parseInt(e, 10));
  let i = U(n.style, t.style);
  i && !("" + i).match(Cl) && (console.warn('Invalid font style specified: "' + i + '"'), i = void 0);
  const s = {
    family: U(n.family, t.family),
    lineHeight: Ol(U(n.lineHeight, t.lineHeight), e),
    size: e,
    style: i,
    weight: U(n.weight, t.weight),
    string: ""
  };
  return s.string = yl(s), s;
}
function He(n, t, e, i) {
  let s, o, a;
  for (s = 0, o = n.length; s < o; ++s)
    if (a = n[s], a !== void 0 && a !== void 0)
      return a;
}
function Pl(n, t, e) {
  const { min: i, max: s } = n, o = Wo(t, (s - i) / 2), a = (r, l) => e && r === 0 ? 0 : r + l;
  return {
    min: a(i, -Math.abs(o)),
    max: a(s, o)
  };
}
function le(n, t) {
  return Object.assign(Object.create(n), t);
}
function zi(n, t = [
  ""
], e, i, s = () => n[0]) {
  const o = e || n;
  typeof i > "u" && (i = sa("_fallback", n));
  const a = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: n,
    _rootScopes: o,
    _fallback: i,
    _getTarget: s,
    override: (r) => zi([
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
      return na(r, l, () => Fl(l, t, n, r));
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
      return ys(r).includes(l);
    },
    /**
    * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
    */
    ownKeys(r) {
      return ys(r);
    },
    /**
    * A trap for setting property values.
    */
    set(r, l, c) {
      const u = r._storage || (r._storage = s());
      return r[l] = u[l] = c, delete r._keys, !0;
    }
  });
}
function Pe(n, t, e, i) {
  const s = {
    _cacheable: !1,
    _proxy: n,
    _context: t,
    _subProxy: e,
    _stack: /* @__PURE__ */ new Set(),
    _descriptors: ea(n, i),
    setContext: (o) => Pe(n, o, e, i),
    override: (o) => Pe(n.override(o), t, e, i)
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
      return na(o, a, () => Dl(o, a, r));
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
function ea(n, t = {
  scriptable: !0,
  indexable: !0
}) {
  const { _scriptable: e = t.scriptable, _indexable: i = t.indexable, _allKeys: s = t.allKeys } = n;
  return {
    allKeys: s,
    scriptable: e,
    indexable: i,
    isScriptable: re(e) ? e : () => e,
    isIndexable: re(i) ? i : () => i
  };
}
const Ll = (n, t) => n ? n + Vi(t) : t, Wi = (n, t) => G(t) && n !== "adapters" && (Object.getPrototypeOf(t) === null || t.constructor === Object);
function na(n, t, e) {
  if (Object.prototype.hasOwnProperty.call(n, t) || t === "constructor")
    return n[t];
  const i = e();
  return n[t] = i, i;
}
function Dl(n, t, e) {
  const { _proxy: i, _context: s, _subProxy: o, _descriptors: a } = n;
  let r = i[t];
  return re(r) && a.isScriptable(t) && (r = Al(t, r, n, e)), at(r) && r.length && (r = Rl(t, r, n, a.isIndexable)), Wi(t, r) && (r = Pe(r, s, o && o[t], a)), r;
}
function Al(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: a, _stack: r } = e;
  if (r.has(n))
    throw new Error("Recursion detected: " + Array.from(r).join("->") + "->" + n);
  r.add(n);
  let l = t(o, a || i);
  return r.delete(n), Wi(n, l) && (l = Hi(s._scopes, s, n, l)), l;
}
function Rl(n, t, e, i) {
  const { _proxy: s, _context: o, _subProxy: a, _descriptors: r } = e;
  if (typeof o.index < "u" && i(n))
    return t[o.index % t.length];
  if (G(t[0])) {
    const l = t, c = s._scopes.filter((u) => u !== l);
    t = [];
    for (const u of l) {
      const h = Hi(c, s, n, u);
      t.push(Pe(h, o, a && a[n], r));
    }
  }
  return t;
}
function ia(n, t, e) {
  return re(n) ? n(t, e) : n;
}
const El = (n, t) => n === !0 ? t : typeof n == "string" ? ae(t, n) : void 0;
function Vl(n, t, e, i, s) {
  for (const o of t) {
    const a = El(e, o);
    if (a) {
      n.add(a);
      const r = ia(a._fallback, e, s);
      if (typeof r < "u" && r !== e && r !== i)
        return r;
    } else if (a === !1 && typeof i < "u" && e !== i)
      return null;
  }
  return !1;
}
function Hi(n, t, e, i) {
  const s = t._rootScopes, o = ia(t._fallback, e, i), a = [
    ...n,
    ...s
  ], r = /* @__PURE__ */ new Set();
  r.add(i);
  let l = bs(r, a, e, o || e, i);
  return l === null || typeof o < "u" && o !== e && (l = bs(r, a, o, l, i), l === null) ? !1 : zi(Array.from(r), [
    ""
  ], s, o, () => Il(t, e, i));
}
function bs(n, t, e, i, s) {
  for (; e; )
    e = Vl(n, t, e, i, s);
  return e;
}
function Il(n, t, e) {
  const i = n._getTarget();
  t in i || (i[t] = {});
  const s = i[t];
  return at(s) && G(e) ? e : s || {};
}
function Fl(n, t, e, i) {
  let s;
  for (const o of t)
    if (s = sa(Ll(o, n), e), typeof s < "u")
      return Wi(n, s) ? Hi(e, i, n, s) : s;
}
function sa(n, t) {
  for (const e of t) {
    if (!e)
      continue;
    const i = e[n];
    if (typeof i < "u")
      return i;
  }
}
function ys(n) {
  let t = n._keys;
  return t || (t = n._keys = Nl(n._scopes)), t;
}
function Nl(n) {
  const t = /* @__PURE__ */ new Set();
  for (const e of n)
    for (const i of Object.keys(e).filter((s) => !s.startsWith("_")))
      t.add(i);
  return Array.from(t);
}
function oa(n, t, e, i) {
  const { iScale: s } = n, { key: o = "r" } = this._parsing, a = new Array(i);
  let r, l, c, u;
  for (r = 0, l = i; r < l; ++r)
    c = r + e, u = t[c], a[r] = {
      r: s.parse(ae(u, o), c)
    };
  return a;
}
const Bl = Number.EPSILON || 1e-14, Le = (n, t) => t < n.length && !n[t].skip && n[t], aa = (n) => n === "x" ? "y" : "x";
function jl(n, t, e, i) {
  const s = n.skip ? t : n, o = t, a = e.skip ? t : e, r = bi(o, s), l = bi(a, o);
  let c = r / (r + l), u = l / (r + l);
  c = isNaN(c) ? 0 : c, u = isNaN(u) ? 0 : u;
  const h = i * c, d = i * u;
  return {
    previous: {
      x: o.x - h * (a.x - s.x),
      y: o.y - h * (a.y - s.y)
    },
    next: {
      x: o.x + d * (a.x - s.x),
      y: o.y + d * (a.y - s.y)
    }
  };
}
function zl(n, t, e) {
  const i = n.length;
  let s, o, a, r, l, c = Le(n, 0);
  for (let u = 0; u < i - 1; ++u)
    if (l = c, c = Le(n, u + 1), !(!l || !c)) {
      if (Xe(t[u], 0, Bl)) {
        e[u] = e[u + 1] = 0;
        continue;
      }
      s = e[u] / t[u], o = e[u + 1] / t[u], r = Math.pow(s, 2) + Math.pow(o, 2), !(r <= 9) && (a = 3 / Math.sqrt(r), e[u] = s * a * t[u], e[u + 1] = o * a * t[u]);
    }
}
function Wl(n, t, e = "x") {
  const i = aa(e), s = n.length;
  let o, a, r, l = Le(n, 0);
  for (let c = 0; c < s; ++c) {
    if (a = r, r = l, l = Le(n, c + 1), !r)
      continue;
    const u = r[e], h = r[i];
    a && (o = (u - a[e]) / 3, r[`cp1${e}`] = u - o, r[`cp1${i}`] = h - o * t[c]), l && (o = (l[e] - u) / 3, r[`cp2${e}`] = u + o, r[`cp2${i}`] = h + o * t[c]);
  }
}
function Hl(n, t = "x") {
  const e = aa(t), i = n.length, s = Array(i).fill(0), o = Array(i);
  let a, r, l, c = Le(n, 0);
  for (a = 0; a < i; ++a)
    if (r = l, l = c, c = Le(n, a + 1), !!l) {
      if (c) {
        const u = c[t] - l[t];
        s[a] = u !== 0 ? (c[e] - l[e]) / u : 0;
      }
      o[a] = r ? c ? Ht(s[a - 1]) !== Ht(s[a]) ? 0 : (s[a - 1] + s[a]) / 2 : s[a - 1] : s[a];
    }
  zl(n, s, o), Wl(n, o, t);
}
function _n(n, t, e) {
  return Math.max(Math.min(n, e), t);
}
function $l(n, t) {
  let e, i, s, o, a, r = Jt(n[0], t);
  for (e = 0, i = n.length; e < i; ++e)
    a = o, o = r, r = e < i - 1 && Jt(n[e + 1], t), o && (s = n[e], a && (s.cp1x = _n(s.cp1x, t.left, t.right), s.cp1y = _n(s.cp1y, t.top, t.bottom)), r && (s.cp2x = _n(s.cp2x, t.left, t.right), s.cp2y = _n(s.cp2y, t.top, t.bottom)));
}
function Ul(n, t, e, i, s) {
  let o, a, r, l;
  if (t.spanGaps && (n = n.filter((c) => !c.skip)), t.cubicInterpolationMode === "monotone")
    Hl(n, s);
  else {
    let c = i ? n[n.length - 1] : n[0];
    for (o = 0, a = n.length; o < a; ++o)
      r = n[o], l = jl(c, r, n[Math.min(o + 1, a - (i ? 0 : 1)) % a], t.tension), r.cp1x = l.previous.x, r.cp1y = l.previous.y, r.cp2x = l.next.x, r.cp2y = l.next.y, c = r;
  }
  t.capBezierPoints && $l(n, e);
}
function $i() {
  return typeof window < "u" && typeof document < "u";
}
function Ui(n) {
  let t = n.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Nn(n, t, e) {
  let i;
  return typeof n == "string" ? (i = parseInt(n, 10), n.indexOf("%") !== -1 && (i = i / 100 * t.parentNode[e])) : i = n, i;
}
const Xn = (n) => n.ownerDocument.defaultView.getComputedStyle(n, null);
function Yl(n, t) {
  return Xn(n).getPropertyValue(t);
}
const Xl = [
  "top",
  "right",
  "bottom",
  "left"
];
function ye(n, t, e) {
  const i = {};
  e = e ? "-" + e : "";
  for (let s = 0; s < 4; s++) {
    const o = Xl[s];
    i[o] = parseFloat(n[t + "-" + o + e]) || 0;
  }
  return i.width = i.left + i.right, i.height = i.top + i.bottom, i;
}
const Gl = (n, t, e) => (n > 0 || t > 0) && (!e || !e.shadowRoot);
function ql(n, t) {
  const e = n.touches, i = e && e.length ? e[0] : n, { offsetX: s, offsetY: o } = i;
  let a = !1, r, l;
  if (Gl(s, o, n.target))
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
  const { canvas: e, currentDevicePixelRatio: i } = t, s = Xn(e), o = s.boxSizing === "border-box", a = ye(s, "padding"), r = ye(s, "border", "width"), { x: l, y: c, box: u } = ql(n, e), h = a.left + (u && r.left), d = a.top + (u && r.top);
  let { width: f, height: p } = t;
  return o && (f -= a.width + r.width, p -= a.height + r.height), {
    x: Math.round((l - h) / f * e.width / i),
    y: Math.round((c - d) / p * e.height / i)
  };
}
function Kl(n, t, e) {
  let i, s;
  if (t === void 0 || e === void 0) {
    const o = n && Ui(n);
    if (!o)
      t = n.clientWidth, e = n.clientHeight;
    else {
      const a = o.getBoundingClientRect(), r = Xn(o), l = ye(r, "border", "width"), c = ye(r, "padding");
      t = a.width - c.width - l.width, e = a.height - c.height - l.height, i = Nn(r.maxWidth, o, "clientWidth"), s = Nn(r.maxHeight, o, "clientHeight");
    }
  }
  return {
    width: t,
    height: e,
    maxWidth: i || In,
    maxHeight: s || In
  };
}
const ie = (n) => Math.round(n * 10) / 10;
function Zl(n, t, e, i) {
  const s = Xn(n), o = ye(s, "margin"), a = Nn(s.maxWidth, n, "clientWidth") || In, r = Nn(s.maxHeight, n, "clientHeight") || In, l = Kl(n, t, e);
  let { width: c, height: u } = l;
  if (s.boxSizing === "content-box") {
    const d = ye(s, "border", "width"), f = ye(s, "padding");
    c -= f.width + d.width, u -= f.height + d.height;
  }
  return c = Math.max(0, c - o.width), u = Math.max(0, i ? c / i : u - o.height), c = ie(Math.min(c, a, l.maxWidth)), u = ie(Math.min(u, r, l.maxHeight)), c && !u && (u = ie(c / 2)), (t !== void 0 || e !== void 0) && i && l.height && u > l.height && (u = l.height, c = ie(Math.floor(u * i))), {
    width: c,
    height: u
  };
}
function vs(n, t, e) {
  const i = t || 1, s = ie(n.height * i), o = ie(n.width * i);
  n.height = ie(n.height), n.width = ie(n.width);
  const a = n.canvas;
  return a.style && (e || !a.style.height && !a.style.width) && (a.style.height = `${n.height}px`, a.style.width = `${n.width}px`), n.currentDevicePixelRatio !== i || a.height !== s || a.width !== o ? (n.currentDevicePixelRatio = i, a.height = s, a.width = o, n.ctx.setTransform(i, 0, 0, i, 0, 0), !0) : !1;
}
const Jl = (function() {
  let n = !1;
  try {
    const t = {
      get passive() {
        return n = !0, !1;
      }
    };
    $i() && (window.addEventListener("test", null, t), window.removeEventListener("test", null, t));
  } catch {
  }
  return n;
})();
function xs(n, t) {
  const e = Yl(n, t), i = e && e.match(/^(\d+)(\.\d+)?px$/);
  return i ? +i[1] : void 0;
}
function ge(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y: n.y + e * (t.y - n.y)
  };
}
function Ql(n, t, e, i) {
  return {
    x: n.x + e * (t.x - n.x),
    y: i === "middle" ? e < 0.5 ? n.y : t.y : i === "after" ? e < 1 ? n.y : t.y : e > 0 ? t.y : n.y
  };
}
function tc(n, t, e, i) {
  const s = {
    x: n.cp2x,
    y: n.cp2y
  }, o = {
    x: t.cp1x,
    y: t.cp1y
  }, a = ge(n, s, e), r = ge(s, o, e), l = ge(o, t, e), c = ge(a, r, e), u = ge(r, l, e);
  return ge(c, u, e);
}
const ec = function(n, t) {
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
}, nc = function() {
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
function Oe(n, t, e) {
  return n ? ec(t, e) : nc();
}
function ra(n, t) {
  let e, i;
  (t === "ltr" || t === "rtl") && (e = n.canvas.style, i = [
    e.getPropertyValue("direction"),
    e.getPropertyPriority("direction")
  ], e.setProperty("direction", t, "important"), n.prevTextDirection = i);
}
function la(n, t) {
  t !== void 0 && (delete n.prevTextDirection, n.canvas.style.setProperty("direction", t[0], t[1]));
}
function ca(n) {
  return n === "angle" ? {
    between: Qe,
    compare: il,
    normalize: Mt
  } : {
    between: Kt,
    compare: (t, e) => t - e,
    normalize: (t) => t
  };
}
function _s({ start: n, end: t, count: e, loop: i, style: s }) {
  return {
    start: n % e,
    end: t % e,
    loop: i && (t - n + 1) % e === 0,
    style: s
  };
}
function ic(n, t, e) {
  const { property: i, start: s, end: o } = e, { between: a, normalize: r } = ca(i), l = t.length;
  let { start: c, end: u, loop: h } = n, d, f;
  if (h) {
    for (c += l, u += l, d = 0, f = l; d < f && a(r(t[c % l][i]), s, o); ++d)
      c--, u--;
    c %= l, u %= l;
  }
  return u < c && (u += l), {
    start: c,
    end: u,
    loop: h,
    style: n.style
  };
}
function ua(n, t, e) {
  if (!e)
    return [
      n
    ];
  const { property: i, start: s, end: o } = e, a = t.length, { compare: r, between: l, normalize: c } = ca(i), { start: u, end: h, loop: d, style: f } = ic(n, t, e), p = [];
  let g = !1, m = null, b, x, S;
  const y = () => l(s, S, b) && r(s, S) !== 0, w = () => r(o, b) === 0 || l(o, S, b), O = () => g || y(), k = () => !g || w();
  for (let T = u, P = u; T <= h; ++T)
    x = t[T % a], !x.skip && (b = c(x[i]), b !== S && (g = l(b, s, o), m === null && O() && (m = r(b, s) === 0 ? T : P), m !== null && k() && (p.push(_s({
      start: m,
      end: T,
      loop: d,
      count: a,
      style: f
    })), m = null), P = T, S = b));
  return m !== null && p.push(_s({
    start: m,
    end: h,
    loop: d,
    count: a,
    style: f
  })), p;
}
function ha(n, t) {
  const e = [], i = n.segments;
  for (let s = 0; s < i.length; s++) {
    const o = ua(i[s], n.points, t);
    o.length && e.push(...o);
  }
  return e;
}
function sc(n, t, e, i) {
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
function oc(n, t, e, i) {
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
function ac(n, t) {
  const e = n.points, i = n.options.spanGaps, s = e.length;
  if (!s)
    return [];
  const o = !!n._loop, { start: a, end: r } = sc(e, s, o, i);
  if (i === !0)
    return Ss(n, [
      {
        start: a,
        end: r,
        loop: o
      }
    ], e, t);
  const l = r < a ? r + s : r, c = !!n._fullLoop && a === 0 && r === s - 1;
  return Ss(n, oc(e, a, l, c), e, t);
}
function Ss(n, t, e, i) {
  return !i || !i.setContext || !e ? t : rc(n, t, e, i);
}
function rc(n, t, e, i) {
  const s = n._chart.getContext(), o = ws(n.options), { _datasetIndex: a, options: { spanGaps: r } } = n, l = e.length, c = [];
  let u = o, h = t[0].start, d = h;
  function f(p, g, m, b) {
    const x = r ? -1 : 1;
    if (p !== g) {
      for (p += l; e[p % l].skip; )
        p -= x;
      for (; e[g % l].skip; )
        g += x;
      p % l !== g % l && (c.push({
        start: p % l,
        end: g % l,
        loop: m,
        style: b
      }), u = b, h = g % l);
    }
  }
  for (const p of t) {
    h = r ? h : p.start;
    let g = e[h % l], m;
    for (d = h + 1; d <= p.end; d++) {
      const b = e[d % l];
      m = ws(i.setContext(le(s, {
        type: "segment",
        p0: g,
        p1: b,
        p0DataIndex: (d - 1) % l,
        p1DataIndex: d % l,
        datasetIndex: a
      }))), lc(m, u) && f(h, d - 1, p.loop, u), g = b, u = m;
    }
    h < d - 1 && f(h, d - 1, p.loop, u);
  }
  return c;
}
function ws(n) {
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
function lc(n, t) {
  if (!t)
    return !1;
  const e = [], i = function(s, o) {
    return Bi(o) ? (e.includes(o) || e.push(o), e.indexOf(o)) : o;
  };
  return JSON.stringify(n, i) !== JSON.stringify(t, i);
}
function Sn(n, t, e) {
  return n.options.clip ? n[e] : t[e];
}
function cc(n, t) {
  const { xScale: e, yScale: i } = n;
  return e && i ? {
    left: Sn(e, t, "left"),
    right: Sn(e, t, "right"),
    top: Sn(i, t, "top"),
    bottom: Sn(i, t, "bottom")
  } : t;
}
function da(n, t) {
  const e = t._clip;
  if (e.disabled)
    return !1;
  const i = cc(t, n.chartArea);
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
class uc {
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
    this._request || (this._running = !0, this._request = Go.call(window, () => {
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
var Yt = /* @__PURE__ */ new uc();
const ks = "transparent", hc = {
  boolean(n, t, e) {
    return e > 0.5 ? t : n;
  },
  color(n, t, e) {
    const i = ps(n || ks), s = i.valid && ps(t || ks);
    return s && s.valid ? s.mix(i, e).hexString() : t;
  },
  number(n, t, e) {
    return n + (t - n) * e;
  }
};
class dc {
  constructor(t, e, i, s) {
    const o = e[i];
    s = He([
      t.to,
      s,
      o,
      t.from
    ]);
    const a = He([
      t.from,
      o,
      s
    ]);
    this._active = !0, this._fn = t.fn || hc[t.type || typeof a], this._easing = Ge[t.easing] || Ge.linear, this._start = Math.floor(Date.now() + (t.delay || 0)), this._duration = this._total = Math.floor(t.duration), this._loop = !!t.loop, this._target = e, this._prop = i, this._from = a, this._to = s, this._promises = void 0;
  }
  active() {
    return this._active;
  }
  update(t, e, i) {
    if (this._active) {
      this._notify(!1);
      const s = this._target[this._prop], o = i - this._start, a = this._duration - o;
      this._start = i, this._duration = Math.floor(Math.max(a, t.duration)), this._total += o, this._loop = !!t.loop, this._to = He([
        t.to,
        e,
        s,
        t.from
      ]), this._from = He([
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
class fa {
  constructor(t, e) {
    this._chart = t, this._properties = /* @__PURE__ */ new Map(), this.configure(e);
  }
  configure(t) {
    if (!G(t))
      return;
    const e = Object.keys(rt.animation), i = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const o = t[s];
      if (!G(o))
        return;
      const a = {};
      for (const r of e)
        a[r] = o[r];
      (at(o.properties) && o.properties || [
        s
      ]).forEach((r) => {
        (r === s || !i.has(r)) && i.set(r, a);
      });
    });
  }
  _animateOptions(t, e) {
    const i = e.options, s = pc(t, i);
    if (!s)
      return [];
    const o = this._createAnimations(s, i);
    return i.$shared && fc(t.options.$animations, i).then(() => {
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
      const u = e[c];
      let h = o[c];
      const d = i.get(c);
      if (h)
        if (d && h.active()) {
          h.update(d, u, r);
          continue;
        } else
          h.cancel();
      if (!d || !d.duration) {
        t[c] = u;
        continue;
      }
      o[c] = h = new dc(d, t, c, u), s.push(h);
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
      return Yt.add(this._chart, i), !0;
  }
}
function fc(n, t) {
  const e = [], i = Object.keys(t);
  for (let s = 0; s < i.length; s++) {
    const o = n[i[s]];
    o && o.active() && e.push(o.wait());
  }
  return Promise.all(e);
}
function pc(n, t) {
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
function Ms(n, t) {
  const e = n && n.options || {}, i = e.reverse, s = e.min === void 0 ? t : 0, o = e.max === void 0 ? t : 0;
  return {
    start: i ? o : s,
    end: i ? s : o
  };
}
function gc(n, t, e) {
  if (e === !1)
    return !1;
  const i = Ms(n, e), s = Ms(t, e);
  return {
    top: s.end,
    right: i.end,
    bottom: s.start,
    left: i.start
  };
}
function mc(n) {
  let t, e, i, s;
  return G(n) ? (t = n.top, e = n.right, i = n.bottom, s = n.left) : t = e = i = s = n, {
    top: t,
    right: e,
    bottom: i,
    left: s,
    disabled: n === !1
  };
}
function pa(n, t) {
  const e = [], i = n._getSortedDatasetMetas(t);
  let s, o;
  for (s = 0, o = i.length; s < o; ++s)
    e.push(i[s].index);
  return e;
}
function Cs(n, t, e, i = {}) {
  const s = n.keys, o = i.mode === "single";
  let a, r, l, c;
  if (t === null)
    return;
  let u = !1;
  for (a = 0, r = s.length; a < r; ++a) {
    if (l = +s[a], l === e) {
      if (u = !0, i.all)
        continue;
      break;
    }
    c = n.values[l], ft(c) && (o || t === 0 || Ht(t) === Ht(c)) && (t += c);
  }
  return !u && !i.all ? 0 : t;
}
function bc(n, t) {
  const { iScale: e, vScale: i } = t, s = e.axis === "x" ? "x" : "y", o = i.axis === "x" ? "x" : "y", a = Object.keys(n), r = new Array(a.length);
  let l, c, u;
  for (l = 0, c = a.length; l < c; ++l)
    u = a[l], r[l] = {
      [s]: u,
      [o]: n[u]
    };
  return r;
}
function si(n, t) {
  const e = n && n.options.stacked;
  return e || e === void 0 && t.stack !== void 0;
}
function yc(n, t, e) {
  return `${n.id}.${t.id}.${e.stack || e.type}`;
}
function vc(n) {
  const { min: t, max: e, minDefined: i, maxDefined: s } = n.getUserBounds();
  return {
    min: i ? t : Number.NEGATIVE_INFINITY,
    max: s ? e : Number.POSITIVE_INFINITY
  };
}
function xc(n, t, e) {
  const i = n[t] || (n[t] = {});
  return i[e] || (i[e] = {});
}
function Os(n, t, e, i) {
  for (const s of t.getMatchingVisibleMetas(i).reverse()) {
    const o = n[s.index];
    if (e && o > 0 || !e && o < 0)
      return s.index;
  }
  return null;
}
function Ts(n, t) {
  const { chart: e, _cachedMeta: i } = n, s = e._stacks || (e._stacks = {}), { iScale: o, vScale: a, index: r } = i, l = o.axis, c = a.axis, u = yc(o, a, i), h = t.length;
  let d;
  for (let f = 0; f < h; ++f) {
    const p = t[f], { [l]: g, [c]: m } = p, b = p._stacks || (p._stacks = {});
    d = b[c] = xc(s, u, g), d[r] = m, d._top = Os(d, a, !0, i.type), d._bottom = Os(d, a, !1, i.type);
    const x = d._visualValues || (d._visualValues = {});
    x[r] = m;
  }
}
function oi(n, t) {
  const e = n.scales;
  return Object.keys(e).filter((i) => e[i].axis === t).shift();
}
function _c(n, t) {
  return le(n, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset"
  });
}
function Sc(n, t, e) {
  return le(n, {
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
function Fe(n, t) {
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
const ai = (n) => n === "reset" || n === "none", Ps = (n, t) => t ? n : Object.assign({}, n), wc = (n, t, e) => n && !t.hidden && t._stacked && {
  keys: pa(e, !0),
  values: null
};
class ce {
  static defaults = {};
  static datasetElementType = null;
  static dataElementType = null;
  constructor(t, e) {
    this.chart = t, this._ctx = t.ctx, this.index = e, this._cachedDataOpts = {}, this._cachedMeta = this.getMeta(), this._type = this._cachedMeta.type, this.options = void 0, this._parsing = !1, this._data = void 0, this._objectData = void 0, this._sharedOptions = void 0, this._drawStart = void 0, this._drawCount = void 0, this.enableOptionSharing = !1, this.supportsDecimation = !1, this.$context = void 0, this._syncList = [], this.datasetElementType = new.target.datasetElementType, this.dataElementType = new.target.dataElementType, this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(), this.linkScales(), t._stacked = si(t.vScale, t), this.addElements(), this.options.fill && !this.chart.isPluginEnabled("filler") && console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
  }
  updateIndex(t) {
    this.index !== t && Fe(this._cachedMeta), this.index = t;
  }
  linkScales() {
    const t = this.chart, e = this._cachedMeta, i = this.getDataset(), s = (h, d, f, p) => h === "x" ? d : h === "r" ? p : f, o = e.xAxisID = U(i.xAxisID, oi(t, "x")), a = e.yAxisID = U(i.yAxisID, oi(t, "y")), r = e.rAxisID = U(i.rAxisID, oi(t, "r")), l = e.indexAxis, c = e.iAxisID = s(l, o, a, r), u = e.vAxisID = s(l, a, o, r);
    e.xScale = this.getScaleForId(o), e.yScale = this.getScaleForId(a), e.rScale = this.getScaleForId(r), e.iScale = this.getScaleForId(c), e.vScale = this.getScaleForId(u);
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
    this._data && hs(this._data, this), t._stacked && Fe(t);
  }
  _dataCheck() {
    const t = this.getDataset(), e = t.data || (t.data = []), i = this._data;
    if (G(e)) {
      const s = this._cachedMeta;
      this._data = bc(e, s);
    } else if (i !== e) {
      if (i) {
        hs(i, this);
        const s = this._cachedMeta;
        Fe(s), s._parsed = [];
      }
      e && Object.isExtensible(e) && rl(e, this), this._syncList = [], this._data = e;
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
    e._stacked = si(e.vScale, e), e.stack !== i.stack && (s = !0, Fe(e), e.stack = i.stack), this._resyncElements(t), (s || o !== e._stacked) && (Ts(this, e._parsed), e._stacked = si(e.vScale, e));
  }
  configure() {
    const t = this.chart.config, e = t.datasetScopeKeys(this._type), i = t.getOptionScopes(this.getDataset(), e, !0);
    this.options = t.createResolver(i, this.getContext()), this._parsing = this.options.parsing, this._cachedDataOpts = {};
  }
  parse(t, e) {
    const { _cachedMeta: i, _data: s } = this, { iScale: o, _stacked: a } = i, r = o.axis;
    let l = t === 0 && e === s.length ? !0 : i._sorted, c = t > 0 && i._parsed[t - 1], u, h, d;
    if (this._parsing === !1)
      i._parsed = s, i._sorted = !0, d = s;
    else {
      at(s[t]) ? d = this.parseArrayData(i, s, t, e) : G(s[t]) ? d = this.parseObjectData(i, s, t, e) : d = this.parsePrimitiveData(i, s, t, e);
      const f = () => h[r] === null || c && h[r] < c[r];
      for (u = 0; u < e; ++u)
        i._parsed[u + t] = h = d[u], l && (f() && (l = !1), c = h);
      i._sorted = l;
    }
    a && Ts(this, d);
  }
  parsePrimitiveData(t, e, i, s) {
    const { iScale: o, vScale: a } = t, r = o.axis, l = a.axis, c = o.getLabels(), u = o === a, h = new Array(s);
    let d, f, p;
    for (d = 0, f = s; d < f; ++d)
      p = d + i, h[d] = {
        [r]: u || o.parse(c[p], p),
        [l]: a.parse(e[p], p)
      };
    return h;
  }
  parseArrayData(t, e, i, s) {
    const { xScale: o, yScale: a } = t, r = new Array(s);
    let l, c, u, h;
    for (l = 0, c = s; l < c; ++l)
      u = l + i, h = e[u], r[l] = {
        x: o.parse(h[0], u),
        y: a.parse(h[1], u)
      };
    return r;
  }
  parseObjectData(t, e, i, s) {
    const { xScale: o, yScale: a } = t, { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing, c = new Array(s);
    let u, h, d, f;
    for (u = 0, h = s; u < h; ++u)
      d = u + i, f = e[d], c[u] = {
        x: o.parse(ae(f, r), d),
        y: a.parse(ae(f, l), d)
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
      keys: pa(s, !0),
      values: e._stacks[t.axis]._visualValues
    };
    return Cs(r, a, o.index, {
      mode: i
    });
  }
  updateRangeFromParsed(t, e, i, s) {
    const o = i[e.axis];
    let a = o === null ? NaN : o;
    const r = s && i._stacks[e.axis];
    s && r && (s.values = r, a = Cs(s, o, this._cachedMeta.index)), t.min = Math.min(t.min, a), t.max = Math.max(t.max, a);
  }
  getMinMax(t, e) {
    const i = this._cachedMeta, s = i._parsed, o = i._sorted && t === i.iScale, a = s.length, r = this._getOtherScale(t), l = wc(e, i, this.chart), c = {
      min: Number.POSITIVE_INFINITY,
      max: Number.NEGATIVE_INFINITY
    }, { min: u, max: h } = vc(r);
    let d, f;
    function p() {
      f = s[d];
      const g = f[r.axis];
      return !ft(f[t.axis]) || u > g || h < g;
    }
    for (d = 0; d < a && !(!p() && (this.updateRangeFromParsed(c, t, f, l), o)); ++d)
      ;
    if (o) {
      for (d = a - 1; d >= 0; --d)
        if (!p()) {
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
    this.update(t || "default"), e._clip = mc(U(this.options.clip, gc(e.xScale, e.yScale, this.getMaxOverflow())));
  }
  update(t) {
  }
  draw() {
    const t = this._ctx, e = this.chart, i = this._cachedMeta, s = i.data || [], o = e.chartArea, a = [], r = this._drawStart || 0, l = this._drawCount || s.length - r, c = this.options.drawActiveElementsOnTop;
    let u;
    for (i.dataset && i.dataset.draw(t, o, r, l), u = r; u < r + l; ++u) {
      const h = s[u];
      h.hidden || (h.active && c ? a.push(h) : h.draw(t, o));
    }
    for (u = 0; u < a.length; ++u)
      a[u].draw(t, o);
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
      o = a.$context || (a.$context = Sc(this.getContext(), t, a)), o.parsed = this.getParsed(t), o.raw = s.data[t], o.index = o.dataIndex = t;
    } else
      o = this.$context || (this.$context = _c(this.chart.getContext(), this.index)), o.dataset = s, o.index = o.datasetIndex = this.index;
    return o.active = !!e, o.mode = i, o;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, e) {
    return this._resolveElementOptions(this.dataElementType.id, e, t);
  }
  _resolveElementOptions(t, e = "default", i) {
    const s = e === "active", o = this._cachedDataOpts, a = t + "-" + e, r = o[a], l = this.enableOptionSharing && Je(i);
    if (r)
      return Ps(r, l);
    const c = this.chart.config, u = c.datasetElementScopeKeys(this._type, t), h = s ? [
      `${t}Hover`,
      "hover",
      t,
      ""
    ] : [
      t,
      ""
    ], d = c.getOptionScopes(this.getDataset(), u), f = Object.keys(rt.elements[t]), p = () => this.getContext(i, s, e), g = c.resolveNamedOptions(d, f, p, h);
    return g.$shared && (g.$shared = l, o[a] = Object.freeze(Ps(g, l))), g;
  }
  _resolveAnimations(t, e, i) {
    const s = this.chart, o = this._cachedDataOpts, a = `animation-${e}`, r = o[a];
    if (r)
      return r;
    let l;
    if (s.options.animation !== !1) {
      const u = this.chart.config, h = u.datasetAnimationScopeKeys(this._type, e), d = u.getOptionScopes(this.getDataset(), h);
      l = u.createResolver(d, this.getContext(t, i, e));
    }
    const c = new fa(s, l && l.animations);
    return l && l._cacheable && (o[a] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, t));
  }
  includeOptions(t, e) {
    return !e || ai(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, e) {
    const i = this.resolveDataElementOptions(t, e), s = this._sharedOptions, o = this.getSharedOptions(i), a = this.includeOptions(e, o) || o !== s;
    return this.updateSharedOptions(o, e, i), {
      sharedOptions: o,
      includeOptions: a
    };
  }
  updateElement(t, e, i, s) {
    ai(s) ? Object.assign(t, i) : this._resolveAnimations(e, s).update(t, i);
  }
  updateSharedOptions(t, e, i) {
    t && !ai(e) && this._resolveAnimations(void 0, e).update(t, i);
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
      i._stacked && Fe(i, s);
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
function kc(n, t) {
  if (!n._cache.$bar) {
    const e = n.getMatchingVisibleMetas(t);
    let i = [];
    for (let s = 0, o = e.length; s < o; s++)
      i = i.concat(e[s].controller.getAllParsedValues(n));
    n._cache.$bar = Xo(i.sort((s, o) => s - o));
  }
  return n._cache.$bar;
}
function Mc(n) {
  const t = n.iScale, e = kc(t, n.type);
  let i = t._length, s, o, a, r;
  const l = () => {
    a === 32767 || a === -32768 || (Je(r) && (i = Math.min(i, Math.abs(a - r) || i)), r = a);
  };
  for (s = 0, o = e.length; s < o; ++s)
    a = t.getPixelForValue(e[s]), l();
  for (r = void 0, s = 0, o = t.ticks.length; s < o; ++s)
    a = t.getPixelForTick(s), l();
  return i;
}
function Cc(n, t, e, i) {
  const s = e.barThickness;
  let o, a;
  return X(s) ? (o = t.min * e.categoryPercentage, a = e.barPercentage) : (o = s * i, a = 1), {
    chunk: o / i,
    ratio: a,
    start: t.pixels[n] - o / 2
  };
}
function Oc(n, t, e, i) {
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
function Tc(n, t, e, i) {
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
function ga(n, t, e, i) {
  return at(n) ? Tc(n, t, e, i) : t[e.axis] = e.parse(n, i), t;
}
function Ls(n, t, e, i) {
  const s = n.iScale, o = n.vScale, a = s.getLabels(), r = s === o, l = [];
  let c, u, h, d;
  for (c = e, u = e + i; c < u; ++c)
    d = t[c], h = {}, h[s.axis] = r || s.parse(a[c], c), l.push(ga(d, h, o, c));
  return l;
}
function ri(n) {
  return n && n.barStart !== void 0 && n.barEnd !== void 0;
}
function Pc(n, t, e) {
  return n !== 0 ? Ht(n) : (t.isHorizontal() ? 1 : -1) * (t.min >= e ? 1 : -1);
}
function Lc(n) {
  let t, e, i, s, o;
  return n.horizontal ? (t = n.base > n.x, e = "left", i = "right") : (t = n.base < n.y, e = "bottom", i = "top"), t ? (s = "end", o = "start") : (s = "start", o = "end"), {
    start: e,
    end: i,
    reverse: t,
    top: s,
    bottom: o
  };
}
function Dc(n, t, e, i) {
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
  const { start: a, end: r, reverse: l, top: c, bottom: u } = Lc(n);
  s === "middle" && e && (n.enableBorderRadius = !0, (e._top || 0) === i ? s = c : (e._bottom || 0) === i ? s = u : (o[Ds(u, a, r, l)] = !0, s = c)), o[Ds(s, a, r, l)] = !0, n.borderSkipped = o;
}
function Ds(n, t, e, i) {
  return i ? (n = Ac(n, t, e), n = As(n, e, t)) : n = As(n, t, e), n;
}
function Ac(n, t, e) {
  return n === t ? e : n === e ? t : n;
}
function As(n, t, e) {
  return n === "start" ? t : n === "end" ? e : n;
}
function Rc(n, { inflateAmount: t }, e) {
  n.inflateAmount = t === "auto" ? e === 1 ? 0.33 : 0 : t;
}
class Ec extends ce {
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
    return Ls(t, e, i, s);
  }
  parseArrayData(t, e, i, s) {
    return Ls(t, e, i, s);
  }
  parseObjectData(t, e, i, s) {
    const { iScale: o, vScale: a } = t, { xAxisKey: r = "x", yAxisKey: l = "y" } = this._parsing, c = o.axis === "x" ? r : l, u = a.axis === "x" ? r : l, h = [];
    let d, f, p, g;
    for (d = i, f = i + s; d < f; ++d)
      g = e[d], p = {}, p[o.axis] = o.parse(ae(g, c), d), h.push(ga(ae(g, u), p, a, d));
    return h;
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
    const e = this._cachedMeta, { iScale: i, vScale: s } = e, o = this.getParsed(t), a = o._custom, r = ri(a) ? "[" + a.start + ", " + a.end + "]" : "" + s.getLabelForValue(o[s.axis]);
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
    const o = s === "reset", { index: a, _cachedMeta: { vScale: r } } = this, l = r.getBasePixel(), c = r.isHorizontal(), u = this._getRuler(), { sharedOptions: h, includeOptions: d } = this._getSharedOptions(e, s);
    for (let f = e; f < e + i; f++) {
      const p = this.getParsed(f), g = o || X(p[r.axis]) ? {
        base: l,
        head: l
      } : this._calculateBarValuePixels(f), m = this._calculateBarIndexPixels(f, u), b = (p._stacks || {})[r.axis], x = {
        horizontal: c,
        base: g.base,
        enableBorderRadius: !b || ri(p._custom) || a === b._top || a === b._bottom,
        x: c ? g.head : m.center,
        y: c ? m.center : g.head,
        height: c ? m.size : Math.abs(g.size),
        width: c ? Math.abs(g.size) : m.size
      };
      d && (x.options = h || this.resolveDataElementOptions(f, t[f].active ? "active" : s));
      const S = x.options || t[f].options;
      Dc(x, S, b, a), Rc(x, S, u.ratio), this.updateElement(t[f], f, x, s);
    }
  }
  _getStacks(t, e) {
    const { iScale: i } = this._cachedMeta, s = i.getMatchingVisibleMetas(this._type).filter((u) => u.controller.options.grouped), o = i.options.stacked, a = [], r = this._cachedMeta.controller.getParsed(e), l = r && r[i.axis], c = (u) => {
      const h = u._parsed.find((f) => f[i.axis] === l), d = h && h[u.vScale.axis];
      if (X(d) || isNaN(d))
        return !0;
    };
    for (const u of s)
      if (!(e !== void 0 && c(u)) && ((o === !1 || a.indexOf(u.stack) === -1 || o === void 0 && u.stack === void 0) && a.push(u.stack), u.index === t))
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
      min: r || Mc(e),
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
    const { _cachedMeta: { vScale: e, _stacked: i, index: s }, options: { base: o, minBarLength: a } } = this, r = o || 0, l = this.getParsed(t), c = l._custom, u = ri(c);
    let h = l[e.axis], d = 0, f = i ? this.applyStack(e, l, i) : h, p, g;
    f !== h && (d = f - h, f = h), u && (h = c.barStart, f = c.barEnd - c.barStart, h !== 0 && Ht(h) !== Ht(c.barEnd) && (d = 0), d += h);
    const m = !X(o) && !u ? o : d;
    let b = e.getPixelForValue(m);
    if (this.chart.getDataVisibility(t) ? p = e.getPixelForValue(d + f) : p = b, g = p - b, Math.abs(g) < a) {
      g = Pc(g, e, r) * a, h === r && (b -= g / 2);
      const x = e.getPixelForDecimal(0), S = e.getPixelForDecimal(1), y = Math.min(x, S), w = Math.max(x, S);
      b = Math.max(Math.min(b, w), y), p = b + g, i && !u && (l._stacks[e.axis]._visualValues[s] = e.getValueForPixel(p) - e.getValueForPixel(b));
    }
    if (b === e.getPixelForValue(r)) {
      const x = Ht(g) * e.getLineWidthForValue(r) / 2;
      b += x, g -= x;
    }
    return {
      size: g,
      base: b,
      head: p,
      center: p + g / 2
    };
  }
  _calculateBarIndexPixels(t, e) {
    const i = e.scale, s = this.options, o = s.skipNull, a = U(s.maxBarThickness, 1 / 0);
    let r, l;
    const c = this._getAxisCount();
    if (e.grouped) {
      const u = o ? this._getStackCount(t) : e.stackCount, h = s.barThickness === "flex" ? Oc(t, e, s, u * c) : Cc(t, e, s, u * c), d = this.chart.options.indexAxis === "x" ? this.getDataset().xAxisID : this.getDataset().yAxisID, f = this._getAxis().indexOf(U(d, this.getFirstScaleIdForIndexAxis())), p = this._getStackIndex(this.index, this._cachedMeta.stack, o ? t : void 0) + f;
      r = h.start + h.chunk * p + h.chunk / 2, l = Math.min(a, h.chunk * h.ratio);
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
class Vc extends ce {
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
    const o = s === "reset", { iScale: a, vScale: r } = this._cachedMeta, { sharedOptions: l, includeOptions: c } = this._getSharedOptions(e, s), u = a.axis, h = r.axis;
    for (let d = e; d < e + i; d++) {
      const f = t[d], p = !o && this.getParsed(d), g = {}, m = g[u] = o ? a.getPixelForDecimal(0.5) : a.getPixelForValue(p[u]), b = g[h] = o ? r.getBasePixel() : r.getPixelForValue(p[h]);
      g.skip = isNaN(m) || isNaN(b), c && (g.options = l || this.resolveDataElementOptions(d, f.active ? "active" : s), o && (g.options.radius = 0)), this.updateElement(f, d, g, s);
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
function Ic(n, t, e) {
  let i = 1, s = 1, o = 0, a = 0;
  if (t < ot) {
    const r = n, l = r + t, c = Math.cos(r), u = Math.sin(r), h = Math.cos(l), d = Math.sin(l), f = (S, y, w) => Qe(S, r, l, !0) ? 1 : Math.max(y, y * e, w, w * e), p = (S, y, w) => Qe(S, r, l, !0) ? -1 : Math.min(y, y * e, w, w * e), g = f(0, c, h), m = f(bt, u, d), b = p(Z, c, h), x = p(Z + bt, u, d);
    i = (g - b) / 2, s = (m - x) / 2, o = -(g + b) / 2, a = -(m + x) / 2;
  }
  return {
    ratioX: i,
    ratioY: s,
    offsetX: o,
    offsetY: a
  };
}
class Yi extends ce {
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
              const h = t.getDatasetMeta(0).controller.getStyle(c);
              return {
                text: l,
                fillStyle: h.backgroundColor,
                fontColor: o,
                hidden: !t.getDataVisibility(c),
                lineDash: h.borderDash,
                lineDashOffset: h.borderDashOffset,
                lineJoin: h.borderJoinStyle,
                lineWidth: h.borderWidth,
                strokeStyle: h.borderColor,
                textAlign: s,
                pointStyle: i,
                borderRadius: a && (r || h.borderRadius),
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
      if (G(i[t])) {
        const { key: l = "value" } = this._parsing;
        o = (c) => +ae(i[c], l);
      }
      let a, r;
      for (a = t, r = t + e; a < r; ++a)
        s._parsed[a] = o(a);
    }
  }
  _getRotation() {
    return Bt(this.options.rotation - 90);
  }
  _getCircumference() {
    return Bt(this.options.circumference);
  }
  _getRotationExtents() {
    let t = ot, e = -ot;
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
    const e = this.chart, { chartArea: i } = e, s = this._cachedMeta, o = s.data, a = this.getMaxBorderWidth() + this.getMaxOffset(o) + this.options.spacing, r = Math.max((Math.min(i.width, i.height) - a) / 2, 0), l = Math.min(Yr(this.options.cutout, r), 1), c = this._getRingWeight(this.index), { circumference: u, rotation: h } = this._getRotationExtents(), { ratioX: d, ratioY: f, offsetX: p, offsetY: g } = Ic(h, u, l), m = (i.width - a) / d, b = (i.height - a) / f, x = Math.max(Math.min(m, b) / 2, 0), S = Wo(this.options.radius, x), y = Math.max(S * l, 0), w = (S - y) / this._getVisibleDatasetWeightTotal();
    this.offsetX = p * S, this.offsetY = g * S, s.total = this.calculateTotal(), this.outerRadius = S - w * this._getRingWeightOffset(this.index), this.innerRadius = Math.max(this.outerRadius - w * c, 0), this.updateElements(o, 0, o.length, t);
  }
  _circumference(t, e) {
    const i = this.options, s = this._cachedMeta, o = this._getCircumference();
    return e && i.animation.animateRotate || !this.chart.getDataVisibility(t) || s._parsed[t] === null || s.data[t].hidden ? 0 : this.calculateCircumference(s._parsed[t] * o / ot);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", a = this.chart, r = a.chartArea, c = a.options.animation, u = (r.left + r.right) / 2, h = (r.top + r.bottom) / 2, d = o && c.animateScale, f = d ? 0 : this.innerRadius, p = d ? 0 : this.outerRadius, { sharedOptions: g, includeOptions: m } = this._getSharedOptions(e, s);
    let b = this._getRotation(), x;
    for (x = 0; x < e; ++x)
      b += this._circumference(x, o);
    for (x = e; x < e + i; ++x) {
      const S = this._circumference(x, o), y = t[x], w = {
        x: u + this.offsetX,
        y: h + this.offsetY,
        startAngle: b,
        endAngle: b + S,
        circumference: S,
        outerRadius: p,
        innerRadius: f
      };
      m && (w.options = g || this.resolveDataElementOptions(x, y.active ? "active" : s)), b += S, this.updateElement(y, x, w, s);
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
    return e > 0 && !isNaN(t) ? ot * (Math.abs(t) / e) : 0;
  }
  getLabelAndValue(t) {
    const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = rn(e._parsed[t], i.options.locale);
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
class Fc extends ce {
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
    let { start: r, count: l } = Ko(e, s, a);
    this._drawStart = r, this._drawCount = l, Zo(e) && (r = 0, l = s.length), i._chart = this.chart, i._datasetIndex = this.index, i._decimated = !!o._decimated, i.points = s;
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0), c.segment = this.options.segment, this.updateElement(i, void 0, {
      animated: !a,
      options: c
    }, t), this.updateElements(s, r, l, t);
  }
  updateElements(t, e, i, s) {
    const o = s === "reset", { iScale: a, vScale: r, _stacked: l, _dataset: c } = this._cachedMeta, { sharedOptions: u, includeOptions: h } = this._getSharedOptions(e, s), d = a.axis, f = r.axis, { spanGaps: p, segment: g } = this.options, m = Te(p) ? p : Number.POSITIVE_INFINITY, b = this.chart._animationsDisabled || o || s === "none", x = e + i, S = t.length;
    let y = e > 0 && this.getParsed(e - 1);
    for (let w = 0; w < S; ++w) {
      const O = t[w], k = b ? O : {};
      if (w < e || w >= x) {
        k.skip = !0;
        continue;
      }
      const T = this.getParsed(w), P = X(T[f]), A = k[d] = a.getPixelForValue(T[d], w), N = k[f] = o || P ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, T, l) : T[f], w);
      k.skip = isNaN(A) || isNaN(N) || P, k.stop = w > 0 && Math.abs(T[d] - y[d]) > m, g && (k.parsed = T, k.raw = c.data[w]), h && (k.options = u || this.resolveDataElementOptions(w, O.active ? "active" : s)), b || this.updateElement(O, w, k, s), y = T;
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
class ma extends ce {
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
    const e = this._cachedMeta, i = this.chart, s = i.data.labels || [], o = rn(e._parsed[t].r, i.options.locale);
    return {
      label: s[t] || "",
      value: o
    };
  }
  parseObjectData(t, e, i, s) {
    return oa.bind(this)(t, e, i, s);
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
    const o = s === "reset", a = this.chart, l = a.options.animation, c = this._cachedMeta.rScale, u = c.xCenter, h = c.yCenter, d = c.getIndexAngle(0) - 0.5 * Z;
    let f = d, p;
    const g = 360 / this.countVisibleElements();
    for (p = 0; p < e; ++p)
      f += this._computeAngle(p, s, g);
    for (p = e; p < e + i; p++) {
      const m = t[p];
      let b = f, x = f + this._computeAngle(p, s, g), S = a.getDataVisibility(p) ? c.getDistanceFromCenterForValue(this.getParsed(p).r) : 0;
      f = x, o && (l.animateScale && (S = 0), l.animateRotate && (b = x = d));
      const y = {
        x: u,
        y: h,
        innerRadius: 0,
        outerRadius: S,
        startAngle: b,
        endAngle: x,
        options: this.resolveDataElementOptions(p, m.active ? "active" : s)
      };
      this.updateElement(m, p, y, s);
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
    return this.chart.getDataVisibility(t) ? Bt(this.resolveDataElementOptions(t, e).angle || i) : 0;
  }
}
class Nc extends Yi {
  static id = "pie";
  static defaults = {
    cutout: 0,
    rotation: 0,
    circumference: 360,
    radius: "100%"
  };
}
class Bc extends ce {
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
    return oa.bind(this)(t, e, i, s);
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
      const l = t[r], c = this.resolveDataElementOptions(r, l.active ? "active" : s), u = o.getPointPositionForValue(r, this.getParsed(r).r), h = a ? o.xCenter : u.x, d = a ? o.yCenter : u.y, f = {
        x: h,
        y: d,
        angle: u.angle,
        skip: isNaN(h) || isNaN(d),
        options: c
      };
      this.updateElement(l, r, f, s);
    }
  }
}
class jc extends ce {
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
    let { start: o, count: a } = Ko(e, i, s);
    if (this._drawStart = o, this._drawCount = a, Zo(e) && (o = 0, a = i.length), this.options.showLine) {
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
    const o = s === "reset", { iScale: a, vScale: r, _stacked: l, _dataset: c } = this._cachedMeta, u = this.resolveDataElementOptions(e, s), h = this.getSharedOptions(u), d = this.includeOptions(s, h), f = a.axis, p = r.axis, { spanGaps: g, segment: m } = this.options, b = Te(g) ? g : Number.POSITIVE_INFINITY, x = this.chart._animationsDisabled || o || s === "none";
    let S = e > 0 && this.getParsed(e - 1);
    for (let y = e; y < e + i; ++y) {
      const w = t[y], O = this.getParsed(y), k = x ? w : {}, T = X(O[p]), P = k[f] = a.getPixelForValue(O[f], y), A = k[p] = o || T ? r.getBasePixel() : r.getPixelForValue(l ? this.applyStack(r, O, l) : O[p], y);
      k.skip = isNaN(P) || isNaN(A) || T, k.stop = y > 0 && Math.abs(O[f] - S[f]) > b, m && (k.parsed = O, k.raw = c.data[y]), d && (k.options = h || this.resolveDataElementOptions(y, w.active ? "active" : s)), x || this.updateElement(w, y, k, s), S = O;
    }
    this.updateSharedOptions(h, s, u);
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
var zc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  BarController: Ec,
  BubbleController: Vc,
  DoughnutController: Yi,
  LineController: Fc,
  PieController: Nc,
  PolarAreaController: ma,
  RadarController: Bc,
  ScatterController: jc
});
function de() {
  throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
}
class Xi {
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
    Object.assign(Xi.prototype, t);
  }
  options;
  constructor(t) {
    this.options = t || {};
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  init() {
  }
  formats() {
    return de();
  }
  parse() {
    return de();
  }
  format() {
    return de();
  }
  add() {
    return de();
  }
  diff() {
    return de();
  }
  startOf() {
    return de();
  }
  endOf() {
    return de();
  }
}
var Wc = {
  _date: Xi
};
function Hc(n, t, e, i) {
  const { controller: s, data: o, _sorted: a } = n, r = s._cachedMeta.iScale, l = n.dataset && n.dataset.options ? n.dataset.options.spanGaps : null;
  if (r && t === r.axis && t !== "r" && a && o.length) {
    const c = r._reversePixels ? ol : Zt;
    if (i) {
      if (s._sharedOptions) {
        const u = o[0], h = typeof u.getRange == "function" && u.getRange(t);
        if (h) {
          const d = c(o, t, e - h), f = c(o, t, e + h);
          return {
            lo: d.lo,
            hi: f.hi
          };
        }
      }
    } else {
      const u = c(o, t, e);
      if (l) {
        const { vScale: h } = s._cachedMeta, { _parsed: d } = n, f = d.slice(0, u.lo + 1).reverse().findIndex((g) => !X(g[h.axis]));
        u.lo -= Math.max(0, f);
        const p = d.slice(u.hi).findIndex((g) => !X(g[h.axis]));
        u.hi += Math.max(0, p);
      }
      return u;
    }
  }
  return {
    lo: 0,
    hi: o.length - 1
  };
}
function Gn(n, t, e, i, s) {
  const o = n.getSortedVisibleDatasetMetas(), a = e[t];
  for (let r = 0, l = o.length; r < l; ++r) {
    const { index: c, data: u } = o[r], { lo: h, hi: d } = Hc(o[r], t, a, s);
    for (let f = h; f <= d; ++f) {
      const p = u[f];
      p.skip || i(p, c, f);
    }
  }
}
function $c(n) {
  const t = n.indexOf("x") !== -1, e = n.indexOf("y") !== -1;
  return function(i, s) {
    const o = t ? Math.abs(i.x - s.x) : 0, a = e ? Math.abs(i.y - s.y) : 0;
    return Math.sqrt(Math.pow(o, 2) + Math.pow(a, 2));
  };
}
function li(n, t, e, i, s) {
  const o = [];
  return !s && !n.isPointInArea(t) || Gn(n, e, t, function(r, l, c) {
    !s && !Jt(r, n.chartArea, 0) || r.inRange(t.x, t.y, i) && o.push({
      element: r,
      datasetIndex: l,
      index: c
    });
  }, !0), o;
}
function Uc(n, t, e, i) {
  let s = [];
  function o(a, r, l) {
    const { startAngle: c, endAngle: u } = a.getProps([
      "startAngle",
      "endAngle"
    ], i), { angle: h } = Uo(a, {
      x: t.x,
      y: t.y
    });
    Qe(h, c, u) && s.push({
      element: a,
      datasetIndex: r,
      index: l
    });
  }
  return Gn(n, e, t, o), s;
}
function Yc(n, t, e, i, s, o) {
  let a = [];
  const r = $c(e);
  let l = Number.POSITIVE_INFINITY;
  function c(u, h, d) {
    const f = u.inRange(t.x, t.y, s);
    if (i && !f)
      return;
    const p = u.getCenterPoint(s);
    if (!(!!o || n.isPointInArea(p)) && !f)
      return;
    const m = r(t, p);
    m < l ? (a = [
      {
        element: u,
        datasetIndex: h,
        index: d
      }
    ], l = m) : m === l && a.push({
      element: u,
      datasetIndex: h,
      index: d
    });
  }
  return Gn(n, e, t, c), a;
}
function ci(n, t, e, i, s, o) {
  return !o && !n.isPointInArea(t) ? [] : e === "r" && !i ? Uc(n, t, e, s) : Yc(n, t, e, i, s, o);
}
function Rs(n, t, e, i, s) {
  const o = [], a = e === "x" ? "inXRange" : "inYRange";
  let r = !1;
  return Gn(n, e, t, (l, c, u) => {
    l[a] && l[a](t[e], s) && (o.push({
      element: l,
      datasetIndex: c,
      index: u
    }), r = r || l.inRange(t.x, t.y, s));
  }), i && !r ? [] : o;
}
var Xc = {
  modes: {
    index(n, t, e, i) {
      const s = pe(t, n), o = e.axis || "x", a = e.includeInvisible || !1, r = e.intersect ? li(n, s, o, i, a) : ci(n, s, o, !1, i, a), l = [];
      return r.length ? (n.getSortedVisibleDatasetMetas().forEach((c) => {
        const u = r[0].index, h = c.data[u];
        h && !h.skip && l.push({
          element: h,
          datasetIndex: c.index,
          index: u
        });
      }), l) : [];
    },
    dataset(n, t, e, i) {
      const s = pe(t, n), o = e.axis || "xy", a = e.includeInvisible || !1;
      let r = e.intersect ? li(n, s, o, i, a) : ci(n, s, o, !1, i, a);
      if (r.length > 0) {
        const l = r[0].datasetIndex, c = n.getDatasetMeta(l).data;
        r = [];
        for (let u = 0; u < c.length; ++u)
          r.push({
            element: c[u],
            datasetIndex: l,
            index: u
          });
      }
      return r;
    },
    point(n, t, e, i) {
      const s = pe(t, n), o = e.axis || "xy", a = e.includeInvisible || !1;
      return li(n, s, o, i, a);
    },
    nearest(n, t, e, i) {
      const s = pe(t, n), o = e.axis || "xy", a = e.includeInvisible || !1;
      return ci(n, s, o, e.intersect, i, a);
    },
    x(n, t, e, i) {
      const s = pe(t, n);
      return Rs(n, s, "x", e.intersect, i);
    },
    y(n, t, e, i) {
      const s = pe(t, n);
      return Rs(n, s, "y", e.intersect, i);
    }
  }
};
const ba = [
  "left",
  "top",
  "right",
  "bottom"
];
function Ne(n, t) {
  return n.filter((e) => e.pos === t);
}
function Es(n, t) {
  return n.filter((e) => ba.indexOf(e.pos) === -1 && e.box.axis === t);
}
function Be(n, t) {
  return n.sort((e, i) => {
    const s = t ? i : e, o = t ? e : i;
    return s.weight === o.weight ? s.index - o.index : s.weight - o.weight;
  });
}
function Gc(n) {
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
function qc(n) {
  const t = {};
  for (const e of n) {
    const { stack: i, pos: s, stackWeight: o } = e;
    if (!i || !ba.includes(s))
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
function Kc(n, t) {
  const e = qc(n), { vBoxMaxWidth: i, hBoxMaxHeight: s } = t;
  let o, a, r;
  for (o = 0, a = n.length; o < a; ++o) {
    r = n[o];
    const { fullSize: l } = r.box, c = e[r.stack], u = c && r.stackWeight / c.weight;
    r.horizontal ? (r.width = u ? u * i : l && t.availableWidth, r.height = s) : (r.width = i, r.height = u ? u * s : l && t.availableHeight);
  }
  return e;
}
function Zc(n) {
  const t = Gc(n), e = Be(t.filter((c) => c.box.fullSize), !0), i = Be(Ne(t, "left"), !0), s = Be(Ne(t, "right")), o = Be(Ne(t, "top"), !0), a = Be(Ne(t, "bottom")), r = Es(t, "x"), l = Es(t, "y");
  return {
    fullSize: e,
    leftAndTop: i.concat(o),
    rightAndBottom: s.concat(l).concat(a).concat(r),
    chartArea: Ne(t, "chartArea"),
    vertical: i.concat(s).concat(l),
    horizontal: o.concat(a).concat(r)
  };
}
function Vs(n, t, e, i) {
  return Math.max(n[e], t[e]) + Math.max(n[i], t[i]);
}
function ya(n, t) {
  n.top = Math.max(n.top, t.top), n.left = Math.max(n.left, t.left), n.bottom = Math.max(n.bottom, t.bottom), n.right = Math.max(n.right, t.right);
}
function Jc(n, t, e, i) {
  const { pos: s, box: o } = e, a = n.maxPadding;
  if (!G(s)) {
    e.size && (n[s] -= e.size);
    const h = i[e.stack] || {
      size: 0,
      count: 1
    };
    h.size = Math.max(h.size, e.horizontal ? o.height : o.width), e.size = h.size / h.count, n[s] += e.size;
  }
  o.getPadding && ya(a, o.getPadding());
  const r = Math.max(0, t.outerWidth - Vs(a, n, "left", "right")), l = Math.max(0, t.outerHeight - Vs(a, n, "top", "bottom")), c = r !== n.w, u = l !== n.h;
  return n.w = r, n.h = l, e.horizontal ? {
    same: c,
    other: u
  } : {
    same: u,
    other: c
  };
}
function Qc(n) {
  const t = n.maxPadding;
  function e(i) {
    const s = Math.max(t[i] - n[i], 0);
    return n[i] += s, s;
  }
  n.y += e("top"), n.x += e("left"), e("right"), e("bottom");
}
function tu(n, t) {
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
function $e(n, t, e, i) {
  const s = [];
  let o, a, r, l, c, u;
  for (o = 0, a = n.length, c = 0; o < a; ++o) {
    r = n[o], l = r.box, l.update(r.width || t.w, r.height || t.h, tu(r.horizontal, t));
    const { same: h, other: d } = Jc(t, e, r, i);
    c |= h && s.length, u = u || d, l.fullSize || s.push(r);
  }
  return c && $e(s, t, e, i) || u;
}
function wn(n, t, e, i, s) {
  n.top = e, n.left = t, n.right = t + i, n.bottom = e + s, n.width = i, n.height = s;
}
function Is(n, t, e, i) {
  const s = e.padding;
  let { x: o, y: a } = t;
  for (const r of n) {
    const l = r.box, c = i[r.stack] || {
      placed: 0,
      weight: 1
    }, u = r.stackWeight / c.weight || 1;
    if (r.horizontal) {
      const h = t.w * u, d = c.size || l.height;
      Je(c.start) && (a = c.start), l.fullSize ? wn(l, s.left, a, e.outerWidth - s.right - s.left, d) : wn(l, t.left + c.placed, a, h, d), c.start = a, c.placed += h, a = l.bottom;
    } else {
      const h = t.h * u, d = c.size || l.width;
      Je(c.start) && (o = c.start), l.fullSize ? wn(l, o, s.top, d, e.outerHeight - s.bottom - s.top) : wn(l, o, t.top + c.placed, d, h), c.start = o, c.placed += h, o = l.right;
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
    const s = Ot(n.options.layout.padding), o = Math.max(t - s.width, 0), a = Math.max(e - s.height, 0), r = Zc(n.boxes), l = r.vertical, c = r.horizontal;
    Q(n.boxes, (g) => {
      typeof g.beforeLayout == "function" && g.beforeLayout();
    });
    const u = l.reduce((g, m) => m.box.options && m.box.options.display === !1 ? g : g + 1, 0) || 1, h = Object.freeze({
      outerWidth: t,
      outerHeight: e,
      padding: s,
      availableWidth: o,
      availableHeight: a,
      vBoxMaxWidth: o / 2 / u,
      hBoxMaxHeight: a / 2
    }), d = Object.assign({}, s);
    ya(d, Ot(i));
    const f = Object.assign({
      maxPadding: d,
      w: o,
      h: a,
      x: s.left,
      y: s.top
    }, s), p = Kc(l.concat(c), h);
    $e(r.fullSize, f, h, p), $e(l, f, h, p), $e(c, f, h, p) && $e(l, f, h, p), Qc(f), Is(r.leftAndTop, f, h, p), f.x += f.w, f.y += f.h, Is(r.rightAndBottom, f, h, p), n.chartArea = {
      left: f.left,
      top: f.top,
      right: f.left + f.w,
      bottom: f.top + f.h,
      height: f.h,
      width: f.w
    }, Q(r.chartArea, (g) => {
      const m = g.box;
      Object.assign(m, n.chartArea), m.update(f.w, f.h, {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      });
    });
  }
};
class va {
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
class eu extends va {
  acquireContext(t) {
    return t && t.getContext && t.getContext("2d") || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const An = "$chartjs", nu = {
  touchstart: "mousedown",
  touchmove: "mousemove",
  touchend: "mouseup",
  pointerenter: "mouseenter",
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointerleave: "mouseout",
  pointerout: "mouseout"
}, Fs = (n) => n === null || n === "";
function iu(n, t) {
  const e = n.style, i = n.getAttribute("height"), s = n.getAttribute("width");
  if (n[An] = {
    initial: {
      height: i,
      width: s,
      style: {
        display: e.display,
        height: e.height,
        width: e.width
      }
    }
  }, e.display = e.display || "block", e.boxSizing = e.boxSizing || "border-box", Fs(s)) {
    const o = xs(n, "width");
    o !== void 0 && (n.width = o);
  }
  if (Fs(i))
    if (n.style.height === "")
      n.height = n.width / (t || 2);
    else {
      const o = xs(n, "height");
      o !== void 0 && (n.height = o);
    }
  return n;
}
const xa = Jl ? {
  passive: !0
} : !1;
function su(n, t, e) {
  n && n.addEventListener(t, e, xa);
}
function ou(n, t, e) {
  n && n.canvas && n.canvas.removeEventListener(t, e, xa);
}
function au(n, t) {
  const e = nu[n.type] || n.type, { x: i, y: s } = pe(n, t);
  return {
    type: e,
    chart: t,
    native: n,
    x: i !== void 0 ? i : null,
    y: s !== void 0 ? s : null
  };
}
function Bn(n, t) {
  for (const e of n)
    if (e === t || e.contains(t))
      return !0;
}
function ru(n, t, e) {
  const i = n.canvas, s = new MutationObserver((o) => {
    let a = !1;
    for (const r of o)
      a = a || Bn(r.addedNodes, i), a = a && !Bn(r.removedNodes, i);
    a && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
function lu(n, t, e) {
  const i = n.canvas, s = new MutationObserver((o) => {
    let a = !1;
    for (const r of o)
      a = a || Bn(r.removedNodes, i), a = a && !Bn(r.addedNodes, i);
    a && e();
  });
  return s.observe(document, {
    childList: !0,
    subtree: !0
  }), s;
}
const en = /* @__PURE__ */ new Map();
let Ns = 0;
function _a() {
  const n = window.devicePixelRatio;
  n !== Ns && (Ns = n, en.forEach((t, e) => {
    e.currentDevicePixelRatio !== n && t();
  }));
}
function cu(n, t) {
  en.size || window.addEventListener("resize", _a), en.set(n, t);
}
function uu(n) {
  en.delete(n), en.size || window.removeEventListener("resize", _a);
}
function hu(n, t, e) {
  const i = n.canvas, s = i && Ui(i);
  if (!s)
    return;
  const o = qo((r, l) => {
    const c = s.clientWidth;
    e(r, l), c < s.clientWidth && e();
  }, window), a = new ResizeObserver((r) => {
    const l = r[0], c = l.contentRect.width, u = l.contentRect.height;
    c === 0 && u === 0 || o(c, u);
  });
  return a.observe(s), cu(n, o), a;
}
function ui(n, t, e) {
  e && e.disconnect(), t === "resize" && uu(n);
}
function du(n, t, e) {
  const i = n.canvas, s = qo((o) => {
    n.ctx !== null && e(au(o, n));
  }, n);
  return su(i, t, s), s;
}
class fu extends va {
  acquireContext(t, e) {
    const i = t && t.getContext && t.getContext("2d");
    return i && i.canvas === t ? (iu(t, e), i) : null;
  }
  releaseContext(t) {
    const e = t.canvas;
    if (!e[An])
      return !1;
    const i = e[An].initial;
    [
      "height",
      "width"
    ].forEach((o) => {
      const a = i[o];
      X(a) ? e.removeAttribute(o) : e.setAttribute(o, a);
    });
    const s = i.style || {};
    return Object.keys(s).forEach((o) => {
      e.style[o] = s[o];
    }), e.width = e.width, delete e[An], !0;
  }
  addEventListener(t, e, i) {
    this.removeEventListener(t, e);
    const s = t.$proxies || (t.$proxies = {}), a = {
      attach: ru,
      detach: lu,
      resize: hu
    }[e] || du;
    s[e] = a(t, e, i);
  }
  removeEventListener(t, e) {
    const i = t.$proxies || (t.$proxies = {}), s = i[e];
    if (!s)
      return;
    ({
      attach: ui,
      detach: ui,
      resize: ui
    }[e] || ou)(t, e, s), i[e] = void 0;
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, e, i, s) {
    return Zl(t, e, i, s);
  }
  isAttached(t) {
    const e = t && Ui(t);
    return !!(e && e.isConnected);
  }
}
function pu(n) {
  return !$i() || typeof OffscreenCanvas < "u" && n instanceof OffscreenCanvas ? eu : fu;
}
class Qt {
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
    return Te(this.x) && Te(this.y);
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
function gu(n, t) {
  const e = n.options.ticks, i = mu(n), s = Math.min(e.maxTicksLimit || i, i), o = e.major.enabled ? yu(t) : [], a = o.length, r = o[0], l = o[a - 1], c = [];
  if (a > s)
    return vu(t, c, o, a / s), c;
  const u = bu(o, t, s);
  if (a > 0) {
    let h, d;
    const f = a > 1 ? Math.round((l - r) / (a - 1)) : null;
    for (kn(t, c, u, X(f) ? 0 : r - f, r), h = 0, d = a - 1; h < d; h++)
      kn(t, c, u, o[h], o[h + 1]);
    return kn(t, c, u, l, X(f) ? t.length : l + f), c;
  }
  return kn(t, c, u), c;
}
function mu(n) {
  const t = n.options.offset, e = n._tickSize(), i = n._length / e + (t ? 0 : 1), s = n._maxLength / e;
  return Math.floor(Math.min(i, s));
}
function bu(n, t, e) {
  const i = xu(n), s = t.length / e;
  if (!i)
    return Math.max(s, 1);
  const o = tl(i);
  for (let a = 0, r = o.length - 1; a < r; a++) {
    const l = o[a];
    if (l > s)
      return l;
  }
  return Math.max(s, 1);
}
function yu(n) {
  const t = [];
  let e, i;
  for (e = 0, i = n.length; e < i; e++)
    n[e].major && t.push(e);
  return t;
}
function vu(n, t, e, i) {
  let s = 0, o = e[0], a;
  for (i = Math.ceil(i), a = 0; a < n.length; a++)
    a === o && (t.push(n[a]), s++, o = e[s * i]);
}
function kn(n, t, e, i, s) {
  const o = U(i, 0), a = Math.min(U(s, n.length), n.length);
  let r = 0, l, c, u;
  for (e = Math.ceil(e), s && (l = s - i, e = l / Math.floor(l / e)), u = o; u < 0; )
    r++, u = Math.round(o + r * e);
  for (c = Math.max(o, 0); c < a; c++)
    c === u && (t.push(n[c]), r++, u = Math.round(o + r * e));
}
function xu(n) {
  const t = n.length;
  let e, i;
  if (t < 2)
    return !1;
  for (i = n[0], e = 1; e < t; ++e)
    if (n[e] - n[e - 1] !== i)
      return !1;
  return i;
}
const _u = (n) => n === "left" ? "right" : n === "right" ? "left" : n, Bs = (n, t, e) => t === "top" || t === "left" ? n[t] + e : n[t] - e, js = (n, t) => Math.min(t || n, n);
function zs(n, t) {
  const e = [], i = n.length / t, s = n.length;
  let o = 0;
  for (; o < s; o += i)
    e.push(n[Math.floor(o)]);
  return e;
}
function Su(n, t, e) {
  const i = n.ticks.length, s = Math.min(t, i - 1), o = n._startPixel, a = n._endPixel, r = 1e-6;
  let l = n.getPixelForTick(s), c;
  if (!(e && (i === 1 ? c = Math.max(l - o, a - l) : t === 0 ? c = (n.getPixelForTick(1) - l) / 2 : c = (l - n.getPixelForTick(s - 1)) / 2, l += s < t ? c : -c, l < o - r || l > a + r)))
    return l;
}
function wu(n, t) {
  Q(n, (e) => {
    const i = e.gc, s = i.length / 2;
    let o;
    if (s > t) {
      for (o = 0; o < s; ++o)
        delete e.data[i[o]];
      i.splice(0, s);
    }
  });
}
function je(n) {
  return n.drawTicks ? n.tickLength : 0;
}
function Ws(n, t) {
  if (!n.display)
    return 0;
  const e = vt(n.font, t), i = Ot(n.padding);
  return (at(n.text) ? n.text.length : 1) * e.lineHeight + i.height;
}
function ku(n, t) {
  return le(n, {
    scale: t,
    type: "scale"
  });
}
function Mu(n, t, e) {
  return le(n, {
    tick: e,
    index: t,
    type: "tick"
  });
}
function Cu(n, t, e) {
  let i = Ni(n);
  return (e && t !== "right" || !e && t === "right") && (i = _u(i)), i;
}
function Ou(n, t, e, i) {
  const { top: s, left: o, bottom: a, right: r, chart: l } = n, { chartArea: c, scales: u } = l;
  let h = 0, d, f, p;
  const g = a - s, m = r - o;
  if (n.isHorizontal()) {
    if (f = kt(i, o, r), G(e)) {
      const b = Object.keys(e)[0], x = e[b];
      p = u[b].getPixelForValue(x) + g - t;
    } else e === "center" ? p = (c.bottom + c.top) / 2 + g - t : p = Bs(n, e, t);
    d = r - o;
  } else {
    if (G(e)) {
      const b = Object.keys(e)[0], x = e[b];
      f = u[b].getPixelForValue(x) - m + t;
    } else e === "center" ? f = (c.left + c.right) / 2 - m + t : f = Bs(n, e, t);
    p = kt(i, a, s), h = e === "left" ? -bt : bt;
  }
  return {
    titleX: f,
    titleY: p,
    maxWidth: d,
    rotation: h
  };
}
class Se extends Qt {
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
    nt(this.options.beforeUpdate, [
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
    }, i), this.ticks = null, this._labelSizes = null, this._gridLineItems = null, this._labelItems = null, this.beforeSetDimensions(), this.setDimensions(), this.afterSetDimensions(), this._maxLength = this.isHorizontal() ? this.width + i.left + i.right : this.height + i.top + i.bottom, this._dataLimitsCached || (this.beforeDataLimits(), this.determineDataLimits(), this.afterDataLimits(), this._range = Pl(this, o, s), this._dataLimitsCached = !0), this.beforeBuildTicks(), this.ticks = this.buildTicks() || [], this.afterBuildTicks();
    const l = r < this.ticks.length;
    this._convertTicksToLabels(l ? zs(this.ticks, r) : this.ticks), this.configure(), this.beforeCalculateLabelRotation(), this.calculateLabelRotation(), this.afterCalculateLabelRotation(), a.display && (a.autoSkip || a.source === "auto") && (this.ticks = gu(this, this.ticks), this._labelSizes = null, this.afterAutoSkip()), l && this._convertTicksToLabels(this.ticks), this.beforeFit(), this.fit(), this.afterFit(), this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse, e, i;
    this.isHorizontal() ? (e = this.left, i = this.right) : (e = this.top, i = this.bottom, t = !t), this._startPixel = e, this._endPixel = i, this._reversePixels = t, this._length = i - e, this._alignToPixels = this.options.alignToPixels;
  }
  afterUpdate() {
    nt(this.options.afterUpdate, [
      this
    ]);
  }
  beforeSetDimensions() {
    nt(this.options.beforeSetDimensions, [
      this
    ]);
  }
  setDimensions() {
    this.isHorizontal() ? (this.width = this.maxWidth, this.left = 0, this.right = this.width) : (this.height = this.maxHeight, this.top = 0, this.bottom = this.height), this.paddingLeft = 0, this.paddingTop = 0, this.paddingRight = 0, this.paddingBottom = 0;
  }
  afterSetDimensions() {
    nt(this.options.afterSetDimensions, [
      this
    ]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), nt(this.options[t], [
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
    nt(this.options.beforeTickToLabelConversion, [
      this
    ]);
  }
  generateTickLabels(t) {
    const e = this.options.ticks;
    let i, s, o;
    for (i = 0, s = t.length; i < s; i++)
      o = t[i], o.label = nt(e.callback, [
        o.value,
        i,
        t
      ], this);
  }
  afterTickToLabelConversion() {
    nt(this.options.afterTickToLabelConversion, [
      this
    ]);
  }
  beforeCalculateLabelRotation() {
    nt(this.options.beforeCalculateLabelRotation, [
      this
    ]);
  }
  calculateLabelRotation() {
    const t = this.options, e = t.ticks, i = js(this.ticks.length, t.ticks.maxTicksLimit), s = e.minRotation || 0, o = e.maxRotation;
    let a = s, r, l, c;
    if (!this._isVisible() || !e.display || s >= o || i <= 1 || !this.isHorizontal()) {
      this.labelRotation = s;
      return;
    }
    const u = this._getLabelSizes(), h = u.widest.width, d = u.highest.height, f = St(this.chart.width - h, 0, this.maxWidth);
    r = t.offset ? this.maxWidth / i : f / (i - 1), h + 6 > r && (r = f / (i - (t.offset ? 0.5 : 1)), l = this.maxHeight - je(t.grid) - e.padding - Ws(t.title, this.chart.options.font), c = Math.sqrt(h * h + d * d), a = Ii(Math.min(Math.asin(St((u.highest.height + 6) / r, -1, 1)), Math.asin(St(l / c, -1, 1)) - Math.asin(St(d / c, -1, 1)))), a = Math.max(s, Math.min(o, a))), this.labelRotation = a;
  }
  afterCalculateLabelRotation() {
    nt(this.options.afterCalculateLabelRotation, [
      this
    ]);
  }
  afterAutoSkip() {
  }
  beforeFit() {
    nt(this.options.beforeFit, [
      this
    ]);
  }
  fit() {
    const t = {
      width: 0,
      height: 0
    }, { chart: e, options: { ticks: i, title: s, grid: o } } = this, a = this._isVisible(), r = this.isHorizontal();
    if (a) {
      const l = Ws(s, e.options.font);
      if (r ? (t.width = this.maxWidth, t.height = je(o) + l) : (t.height = this.maxHeight, t.width = je(o) + l), i.display && this.ticks.length) {
        const { first: c, last: u, widest: h, highest: d } = this._getLabelSizes(), f = i.padding * 2, p = Bt(this.labelRotation), g = Math.cos(p), m = Math.sin(p);
        if (r) {
          const b = i.mirror ? 0 : m * h.width + g * d.height;
          t.height = Math.min(this.maxHeight, t.height + b + f);
        } else {
          const b = i.mirror ? 0 : g * h.width + m * d.height;
          t.width = Math.min(this.maxWidth, t.width + b + f);
        }
        this._calculatePadding(c, u, m, g);
      }
    }
    this._handleMargins(), r ? (this.width = this._length = e.width - this._margins.left - this._margins.right, this.height = t.height) : (this.width = t.width, this.height = this._length = e.height - this._margins.top - this._margins.bottom);
  }
  _calculatePadding(t, e, i, s) {
    const { ticks: { align: o, padding: a }, position: r } = this.options, l = this.labelRotation !== 0, c = r !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left, h = this.right - this.getPixelForTick(this.ticks.length - 1);
      let d = 0, f = 0;
      l ? c ? (d = s * t.width, f = i * e.height) : (d = i * t.height, f = s * e.width) : o === "start" ? f = e.width : o === "end" ? d = t.width : o !== "inner" && (d = t.width / 2, f = e.width / 2), this.paddingLeft = Math.max((d - u + a) * this.width / (this.width - u), 0), this.paddingRight = Math.max((f - h + a) * this.width / (this.width - h), 0);
    } else {
      let u = e.height / 2, h = t.height / 2;
      o === "start" ? (u = 0, h = t.height) : o === "end" && (u = e.height, h = 0), this.paddingTop = u + a, this.paddingBottom = h + a;
    }
  }
  _handleMargins() {
    this._margins && (this._margins.left = Math.max(this.paddingLeft, this._margins.left), this._margins.top = Math.max(this.paddingTop, this._margins.top), this._margins.right = Math.max(this.paddingRight, this._margins.right), this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom));
  }
  afterFit() {
    nt(this.options.afterFit, [
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
      X(t[e].label) && (t.splice(e, 1), i--, e--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const e = this.options.ticks.sampleSize;
      let i = this.ticks;
      e < i.length && (i = zs(i, e)), this._labelSizes = t = this._computeLabelSizes(i, i.length, this.options.ticks.maxTicksLimit);
    }
    return t;
  }
  _computeLabelSizes(t, e, i) {
    const { ctx: s, _longestTextCache: o } = this, a = [], r = [], l = Math.floor(e / js(e, i));
    let c = 0, u = 0, h, d, f, p, g, m, b, x, S, y, w;
    for (h = 0; h < e; h += l) {
      if (p = t[h].label, g = this._resolveTickFontOptions(h), s.font = m = g.string, b = o[m] = o[m] || {
        data: {},
        gc: []
      }, x = g.lineHeight, S = y = 0, !X(p) && !at(p))
        S = Fn(s, b.data, b.gc, S, p), y = x;
      else if (at(p))
        for (d = 0, f = p.length; d < f; ++d)
          w = p[d], !X(w) && !at(w) && (S = Fn(s, b.data, b.gc, S, w), y += x);
      a.push(S), r.push(y), c = Math.max(S, c), u = Math.max(y, u);
    }
    wu(o, e);
    const O = a.indexOf(c), k = r.indexOf(u), T = (P) => ({
      width: a[P] || 0,
      height: r[P] || 0
    });
    return {
      first: T(0),
      last: T(e - 1),
      widest: T(O),
      highest: T(k),
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
    return sl(this._alignToPixels ? he(this.chart, e, 0) : e);
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
      return i.$context || (i.$context = Mu(this.getContext(), t, i));
    }
    return this.$context || (this.$context = ku(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks, e = Bt(this.labelRotation), i = Math.abs(Math.cos(e)), s = Math.abs(Math.sin(e)), o = this._getLabelSizes(), a = t.autoSkipPadding || 0, r = o ? o.widest.width + a : 0, l = o ? o.highest.height + a : 0;
    return this.isHorizontal() ? l * i > r * s ? r / i : l / s : l * s < r * i ? l / i : r / s;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const e = this.axis, i = this.chart, s = this.options, { grid: o, position: a, border: r } = s, l = o.offset, c = this.isHorizontal(), h = this.ticks.length + (l ? 1 : 0), d = je(o), f = [], p = r.setContext(this.getContext()), g = p.display ? p.width : 0, m = g / 2, b = function(_) {
      return he(i, _, g);
    };
    let x, S, y, w, O, k, T, P, A, N, B, R;
    if (a === "top")
      x = b(this.bottom), k = this.bottom - d, P = x - m, N = b(t.top) + m, R = t.bottom;
    else if (a === "bottom")
      x = b(this.top), N = t.top, R = b(t.bottom) - m, k = x + m, P = this.top + d;
    else if (a === "left")
      x = b(this.right), O = this.right - d, T = x - m, A = b(t.left) + m, B = t.right;
    else if (a === "right")
      x = b(this.left), A = t.left, B = b(t.right) - m, O = x + m, T = this.left + d;
    else if (e === "x") {
      if (a === "center")
        x = b((t.top + t.bottom) / 2 + 0.5);
      else if (G(a)) {
        const _ = Object.keys(a)[0], v = a[_];
        x = b(this.chart.scales[_].getPixelForValue(v));
      }
      N = t.top, R = t.bottom, k = x + m, P = k + d;
    } else if (e === "y") {
      if (a === "center")
        x = b((t.left + t.right) / 2);
      else if (G(a)) {
        const _ = Object.keys(a)[0], v = a[_];
        x = b(this.chart.scales[_].getPixelForValue(v));
      }
      O = x - m, T = O - d, A = t.left, B = t.right;
    }
    const D = U(s.ticks.maxTicksLimit, h), M = Math.max(1, Math.ceil(h / D));
    for (S = 0; S < h; S += M) {
      const _ = this.getContext(S), v = o.setContext(_), C = r.setContext(_), E = v.lineWidth, F = v.color, L = C.dash || [], V = C.dashOffset, H = v.tickWidth, K = v.tickColor, et = v.tickBorderDash || [], z = v.tickBorderDashOffset;
      y = Su(this, S, l), y !== void 0 && (w = he(i, y, E), c ? O = T = A = B = w : k = P = N = R = w, f.push({
        tx1: O,
        ty1: k,
        tx2: T,
        ty2: P,
        x1: A,
        y1: N,
        x2: B,
        y2: R,
        width: E,
        color: F,
        borderDash: L,
        borderDashOffset: V,
        tickWidth: H,
        tickColor: K,
        tickBorderDash: et,
        tickBorderDashOffset: z
      }));
    }
    return this._ticksLength = h, this._borderValue = x, f;
  }
  _computeLabelItems(t) {
    const e = this.axis, i = this.options, { position: s, ticks: o } = i, a = this.isHorizontal(), r = this.ticks, { align: l, crossAlign: c, padding: u, mirror: h } = o, d = je(i.grid), f = d + u, p = h ? -u : f, g = -Bt(this.labelRotation), m = [];
    let b, x, S, y, w, O, k, T, P, A, N, B, R = "middle";
    if (s === "top")
      O = this.bottom - p, k = this._getXAxisLabelAlignment();
    else if (s === "bottom")
      O = this.top + p, k = this._getXAxisLabelAlignment();
    else if (s === "left") {
      const M = this._getYAxisLabelAlignment(d);
      k = M.textAlign, w = M.x;
    } else if (s === "right") {
      const M = this._getYAxisLabelAlignment(d);
      k = M.textAlign, w = M.x;
    } else if (e === "x") {
      if (s === "center")
        O = (t.top + t.bottom) / 2 + f;
      else if (G(s)) {
        const M = Object.keys(s)[0], _ = s[M];
        O = this.chart.scales[M].getPixelForValue(_) + f;
      }
      k = this._getXAxisLabelAlignment();
    } else if (e === "y") {
      if (s === "center")
        w = (t.left + t.right) / 2 - f;
      else if (G(s)) {
        const M = Object.keys(s)[0], _ = s[M];
        w = this.chart.scales[M].getPixelForValue(_);
      }
      k = this._getYAxisLabelAlignment(d).textAlign;
    }
    e === "y" && (l === "start" ? R = "top" : l === "end" && (R = "bottom"));
    const D = this._getLabelSizes();
    for (b = 0, x = r.length; b < x; ++b) {
      S = r[b], y = S.label;
      const M = o.setContext(this.getContext(b));
      T = this.getPixelForTick(b) + o.labelOffset, P = this._resolveTickFontOptions(b), A = P.lineHeight, N = at(y) ? y.length : 1;
      const _ = N / 2, v = M.color, C = M.textStrokeColor, E = M.textStrokeWidth;
      let F = k;
      a ? (w = T, k === "inner" && (b === x - 1 ? F = this.options.reverse ? "left" : "right" : b === 0 ? F = this.options.reverse ? "right" : "left" : F = "center"), s === "top" ? c === "near" || g !== 0 ? B = -N * A + A / 2 : c === "center" ? B = -D.highest.height / 2 - _ * A + A : B = -D.highest.height + A / 2 : c === "near" || g !== 0 ? B = A / 2 : c === "center" ? B = D.highest.height / 2 - _ * A : B = D.highest.height - N * A, h && (B *= -1), g !== 0 && !M.showLabelBackdrop && (w += A / 2 * Math.sin(g))) : (O = T, B = (1 - N) * A / 2);
      let L;
      if (M.showLabelBackdrop) {
        const V = Ot(M.backdropPadding), H = D.heights[b], K = D.widths[b];
        let et = B - V.top, z = 0 - V.left;
        switch (R) {
          case "middle":
            et -= H / 2;
            break;
          case "bottom":
            et -= H;
            break;
        }
        switch (k) {
          case "center":
            z -= K / 2;
            break;
          case "right":
            z -= K;
            break;
          case "inner":
            b === x - 1 ? z -= K : b > 0 && (z -= K / 2);
            break;
        }
        L = {
          left: z,
          top: et,
          width: K + V.width,
          height: H + V.height,
          color: M.backdropColor
        };
      }
      m.push({
        label: y,
        font: P,
        textOffset: B,
        options: {
          rotation: g,
          color: v,
          strokeColor: C,
          strokeWidth: E,
          textAlign: F,
          textBaseline: R,
          translation: [
            w,
            O
          ],
          backdrop: L
        }
      });
    }
    return m;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: e } = this.options;
    if (-Bt(this.labelRotation))
      return t === "top" ? "left" : "right";
    let s = "center";
    return e.align === "start" ? s = "left" : e.align === "end" ? s = "right" : e.align === "inner" && (s = "inner"), s;
  }
  _getYAxisLabelAlignment(t) {
    const { position: e, ticks: { crossAlign: i, mirror: s, padding: o } } = this.options, a = this._getLabelSizes(), r = t + o, l = a.widest.width;
    let c, u;
    return e === "left" ? s ? (u = this.right + o, i === "near" ? c = "left" : i === "center" ? (c = "center", u += l / 2) : (c = "right", u += l)) : (u = this.right - r, i === "near" ? c = "right" : i === "center" ? (c = "center", u -= l / 2) : (c = "left", u = this.left)) : e === "right" ? s ? (u = this.left + o, i === "near" ? c = "right" : i === "center" ? (c = "center", u -= l / 2) : (c = "left", u -= l)) : (u = this.left + r, i === "near" ? c = "left" : i === "center" ? (c = "center", u += l / 2) : (c = "right", u = this.right)) : c = "right", {
      textAlign: c,
      x: u
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
    const r = (l, c, u) => {
      !u.width || !u.color || (i.save(), i.lineWidth = u.width, i.strokeStyle = u.color, i.setLineDash(u.borderDash || []), i.lineDashOffset = u.borderDashOffset, i.beginPath(), i.moveTo(l.x, l.y), i.lineTo(c.x, c.y), i.stroke(), i.restore());
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
    let c, u, h, d;
    this.isHorizontal() ? (c = he(t, this.left, a) - a / 2, u = he(t, this.right, r) + r / 2, h = d = l) : (h = he(t, this.top, a) - a / 2, d = he(t, this.bottom, r) + r / 2, c = u = l), e.save(), e.lineWidth = o.width, e.strokeStyle = o.color, e.beginPath(), e.moveTo(c, h), e.lineTo(u, d), e.stroke(), e.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display)
      return;
    const i = this.ctx, s = this._computeLabelArea();
    s && Un(i, s);
    const o = this.getLabelItems(t);
    for (const a of o) {
      const r = a.options, l = a.font, c = a.label, u = a.textOffset;
      xe(i, c, 0, u, l, r);
    }
    s && Yn(i);
  }
  drawTitle() {
    const { ctx: t, options: { position: e, title: i, reverse: s } } = this;
    if (!i.display)
      return;
    const o = vt(i.font), a = Ot(i.padding), r = i.align;
    let l = o.lineHeight / 2;
    e === "bottom" || e === "center" || G(e) ? (l += a.bottom, at(i.text) && (l += o.lineHeight * (i.text.length - 1))) : l += a.top;
    const { titleX: c, titleY: u, maxWidth: h, rotation: d } = Ou(this, l, e, r);
    xe(t, i.text, 0, 0, o, {
      color: i.color,
      maxWidth: h,
      rotation: d,
      textAlign: Cu(r, e, s),
      textBaseline: "middle",
      translation: [
        c,
        u
      ]
    });
  }
  draw(t) {
    this._isVisible() && (this.drawBackground(), this.drawGrid(t), this.drawBorder(), this.drawTitle(), this.drawLabels(t));
  }
  _layers() {
    const t = this.options, e = t.ticks && t.ticks.z || 0, i = U(t.grid && t.grid.z, -1), s = U(t.border && t.border.z, 0);
    return !this._isVisible() || this.draw !== Se.prototype.draw ? [
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
class Mn {
  constructor(t, e, i) {
    this.type = t, this.scope = e, this.override = i, this.items = /* @__PURE__ */ Object.create(null);
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(this.type.prototype, t.prototype);
  }
  register(t) {
    const e = Object.getPrototypeOf(t);
    let i;
    Lu(e) && (i = this.register(e));
    const s = this.items, o = t.id, a = this.scope + "." + o;
    if (!o)
      throw new Error("class does not have id: " + t);
    return o in s || (s[o] = t, Tu(t, a, i), this.override && rt.override(t.id, t.overrides)), a;
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const e = this.items, i = t.id, s = this.scope;
    i in e && delete e[i], s && i in rt[s] && (delete rt[s][i], this.override && delete ve[i]);
  }
}
function Tu(n, t, e) {
  const i = Ze(/* @__PURE__ */ Object.create(null), [
    e ? rt.get(e) : {},
    rt.get(t),
    n.defaults
  ]);
  rt.set(t, i), n.defaultRoutes && Pu(t, n.defaultRoutes), n.descriptors && rt.describe(t, n.descriptors);
}
function Pu(n, t) {
  Object.keys(t).forEach((e) => {
    const i = e.split("."), s = i.pop(), o = [
      n
    ].concat(i).join("."), a = t[e].split("."), r = a.pop(), l = a.join(".");
    rt.route(o, s, l, r);
  });
}
function Lu(n) {
  return "id" in n && "defaults" in n;
}
class Du {
  constructor() {
    this.controllers = new Mn(ce, "datasets", !0), this.elements = new Mn(Qt, "elements"), this.plugins = new Mn(Object, "plugins"), this.scales = new Mn(Se, "scales"), this._typedRegistries = [
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
      i || o.isForType(s) || o === this.plugins && s.id ? this._exec(t, o, s) : Q(s, (a) => {
        const r = i || this._getRegistryForType(a);
        this._exec(t, r, a);
      });
    });
  }
  _exec(t, e, i) {
    const s = Vi(t);
    nt(i["before" + s], [], i), e[t](i), nt(i["after" + s], [], i);
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
var Wt = /* @__PURE__ */ new Du();
class Au {
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
      if (nt(r, l, a) === !1 && s.cancelable)
        return !1;
    }
    return !0;
  }
  invalidate() {
    X(this._cache) || (this._oldCache = this._cache, this._cache = void 0);
  }
  _descriptors(t) {
    if (this._cache)
      return this._cache;
    const e = this._cache = this._createDescriptors(t);
    return this._notifyStateChanges(t), e;
  }
  _createDescriptors(t, e) {
    const i = t && t.config, s = U(i.options && i.options.plugins, {}), o = Ru(i);
    return s === !1 && !e ? [] : Vu(t, o, s, e);
  }
  _notifyStateChanges(t) {
    const e = this._oldCache || [], i = this._cache, s = (o, a) => o.filter((r) => !a.some((l) => r.plugin.id === l.plugin.id));
    this._notify(s(e, i), t, "stop"), this._notify(s(i, e), t, "start");
  }
}
function Ru(n) {
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
function Eu(n, t) {
  return !t && n === !1 ? null : n === !0 ? {} : n;
}
function Vu(n, { plugins: t, localIds: e }, i, s) {
  const o = [], a = n.getContext();
  for (const r of t) {
    const l = r.id, c = Eu(i[l], s);
    c !== null && o.push({
      plugin: r,
      options: Iu(n.config, {
        plugin: r,
        local: e[l]
      }, c, a)
    });
  }
  return o;
}
function Iu(n, { plugin: t, local: e }, i, s) {
  const o = n.pluginScopeKeys(t), a = n.getOptionScopes(i, o);
  return e && t.defaults && a.push(t.defaults), n.createResolver(a, s, [
    ""
  ], {
    scriptable: !1,
    indexable: !1,
    allKeys: !0
  });
}
function xi(n, t) {
  const e = rt.datasets[n] || {};
  return ((t.datasets || {})[n] || {}).indexAxis || t.indexAxis || e.indexAxis || "x";
}
function Fu(n, t) {
  let e = n;
  return n === "_index_" ? e = t : n === "_value_" && (e = t === "x" ? "y" : "x"), e;
}
function Nu(n, t) {
  return n === t ? "_index_" : "_value_";
}
function Hs(n) {
  if (n === "x" || n === "y" || n === "r")
    return n;
}
function Bu(n) {
  if (n === "top" || n === "bottom")
    return "x";
  if (n === "left" || n === "right")
    return "y";
}
function _i(n, ...t) {
  if (Hs(n))
    return n;
  for (const e of t) {
    const i = e.axis || Bu(e.position) || n.length > 1 && Hs(n[0].toLowerCase());
    if (i)
      return i;
  }
  throw new Error(`Cannot determine type of '${n}' axis. Please provide 'axis' or 'position' option.`);
}
function $s(n, t, e) {
  if (e[t + "AxisID"] === n)
    return {
      axis: t
    };
}
function ju(n, t) {
  if (t.data && t.data.datasets) {
    const e = t.data.datasets.filter((i) => i.xAxisID === n || i.yAxisID === n);
    if (e.length)
      return $s(n, "x", e[0]) || $s(n, "y", e[0]);
  }
  return {};
}
function zu(n, t) {
  const e = ve[n.type] || {
    scales: {}
  }, i = t.scales || {}, s = xi(n.type, t), o = /* @__PURE__ */ Object.create(null);
  return Object.keys(i).forEach((a) => {
    const r = i[a];
    if (!G(r))
      return console.error(`Invalid scale configuration for scale: ${a}`);
    if (r._proxy)
      return console.warn(`Ignoring resolver passed as options for scale: ${a}`);
    const l = _i(a, r, ju(a, n), rt.scales[r.type]), c = Nu(l, s), u = e.scales || {};
    o[a] = Ye(/* @__PURE__ */ Object.create(null), [
      {
        axis: l
      },
      r,
      u[l],
      u[c]
    ]);
  }), n.data.datasets.forEach((a) => {
    const r = a.type || n.type, l = a.indexAxis || xi(r, t), u = (ve[r] || {}).scales || {};
    Object.keys(u).forEach((h) => {
      const d = Fu(h, l), f = a[d + "AxisID"] || d;
      o[f] = o[f] || /* @__PURE__ */ Object.create(null), Ye(o[f], [
        {
          axis: d
        },
        i[f],
        u[h]
      ]);
    });
  }), Object.keys(o).forEach((a) => {
    const r = o[a];
    Ye(r, [
      rt.scales[r.type],
      rt.scale
    ]);
  }), o;
}
function Sa(n) {
  const t = n.options || (n.options = {});
  t.plugins = U(t.plugins, {}), t.scales = zu(n, t);
}
function wa(n) {
  return n = n || {}, n.datasets = n.datasets || [], n.labels = n.labels || [], n;
}
function Wu(n) {
  return n = n || {}, n.data = wa(n.data), Sa(n), n;
}
const Us = /* @__PURE__ */ new Map(), ka = /* @__PURE__ */ new Set();
function Cn(n, t) {
  let e = Us.get(n);
  return e || (e = t(), Us.set(n, e), ka.add(e)), e;
}
const ze = (n, t, e) => {
  const i = ae(t, e);
  i !== void 0 && n.add(i);
};
class Hu {
  constructor(t) {
    this._config = Wu(t), this._scopeCache = /* @__PURE__ */ new Map(), this._resolverCache = /* @__PURE__ */ new Map();
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
    this._config.data = wa(t);
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
    this.clearCache(), Sa(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return Cn(t, () => [
      [
        `datasets.${t}`,
        ""
      ]
    ]);
  }
  datasetAnimationScopeKeys(t, e) {
    return Cn(`${t}.transition.${e}`, () => [
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
    return Cn(`${t}-${e}`, () => [
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
    return Cn(`${i}-plugin-${e}`, () => [
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
    e.forEach((u) => {
      t && (l.add(t), u.forEach((h) => ze(l, t, h))), u.forEach((h) => ze(l, s, h)), u.forEach((h) => ze(l, ve[o] || {}, h)), u.forEach((h) => ze(l, rt, h)), u.forEach((h) => ze(l, yi, h));
    });
    const c = Array.from(l);
    return c.length === 0 && c.push(/* @__PURE__ */ Object.create(null)), ka.has(e) && a.set(e, c), c;
  }
  chartOptionScopes() {
    const { options: t, type: e } = this;
    return [
      t,
      ve[e] || {},
      rt.datasets[e] || {},
      {
        type: e
      },
      rt,
      yi
    ];
  }
  resolveNamedOptions(t, e, i, s = [
    ""
  ]) {
    const o = {
      $shared: !0
    }, { resolver: a, subPrefixes: r } = Ys(this._resolverCache, t, s);
    let l = a;
    if (Uu(a, e)) {
      o.$shared = !1, i = re(i) ? i() : i;
      const c = this.createResolver(t, i, r);
      l = Pe(a, i, c);
    }
    for (const c of e)
      o[c] = l[c];
    return o;
  }
  createResolver(t, e, i = [
    ""
  ], s) {
    const { resolver: o } = Ys(this._resolverCache, t, i);
    return G(e) ? Pe(o, e, void 0, s) : o;
  }
}
function Ys(n, t, e) {
  let i = n.get(t);
  i || (i = /* @__PURE__ */ new Map(), n.set(t, i));
  const s = e.join();
  let o = i.get(s);
  return o || (o = {
    resolver: zi(t, e),
    subPrefixes: e.filter((r) => !r.toLowerCase().includes("hover"))
  }, i.set(s, o)), o;
}
const $u = (n) => G(n) && Object.getOwnPropertyNames(n).some((t) => re(n[t]));
function Uu(n, t) {
  const { isScriptable: e, isIndexable: i } = ea(n);
  for (const s of t) {
    const o = e(s), a = i(s), r = (a || o) && n[s];
    if (o && (re(r) || $u(r)) || a && at(r))
      return !0;
  }
  return !1;
}
var Yu = "4.5.1";
const Xu = [
  "top",
  "bottom",
  "left",
  "right",
  "chartArea"
];
function Xs(n, t) {
  return n === "top" || n === "bottom" || Xu.indexOf(n) === -1 && t === "x";
}
function Gs(n, t) {
  return function(e, i) {
    return e[n] === i[n] ? e[t] - i[t] : e[n] - i[n];
  };
}
function qs(n) {
  const t = n.chart, e = t.options.animation;
  t.notifyPlugins("afterRender"), nt(e && e.onComplete, [
    n
  ], t);
}
function Gu(n) {
  const t = n.chart, e = t.options.animation;
  nt(e && e.onProgress, [
    n
  ], t);
}
function Ma(n) {
  return $i() && typeof n == "string" ? n = document.getElementById(n) : n && n.length && (n = n[0]), n && n.canvas && (n = n.canvas), n;
}
const Rn = {}, Ks = (n) => {
  const t = Ma(n);
  return Object.values(Rn).filter((e) => e.canvas === t).pop();
};
function qu(n, t, e) {
  const i = Object.keys(n);
  for (const s of i) {
    const o = +s;
    if (o >= t) {
      const a = n[s];
      delete n[s], (e > 0 || o > t) && (n[o + e] = a);
    }
  }
}
function Ku(n, t, e, i) {
  return !e || n.type === "mouseout" ? null : i ? t : n;
}
class Si {
  static defaults = rt;
  static instances = Rn;
  static overrides = ve;
  static registry = Wt;
  static version = Yu;
  static getChart = Ks;
  static register(...t) {
    Wt.add(...t), Zs();
  }
  static unregister(...t) {
    Wt.remove(...t), Zs();
  }
  constructor(t, e) {
    const i = this.config = new Hu(e), s = Ma(t), o = Ks(s);
    if (o)
      throw new Error("Canvas is already in use. Chart with ID '" + o.id + "' must be destroyed before the canvas with ID '" + o.canvas.id + "' can be reused.");
    const a = i.createResolver(i.chartOptionScopes(), this.getContext());
    this.platform = new (i.platform || pu(s))(), this.platform.updateConfig(i);
    const r = this.platform.acquireContext(s, a.aspectRatio), l = r && r.canvas, c = l && l.height, u = l && l.width;
    if (this.id = Ur(), this.ctx = r, this.canvas = l, this.width = u, this.height = c, this._options = a, this._aspectRatio = this.aspectRatio, this._layers = [], this._metasets = [], this._stacks = void 0, this.boxes = [], this.currentDevicePixelRatio = void 0, this.chartArea = void 0, this._active = [], this._lastEvent = void 0, this._listeners = {}, this._responsiveListeners = void 0, this._sortedMetasets = [], this.scales = {}, this._plugins = new Au(), this.$proxies = {}, this._hiddenIndices = {}, this.attached = !1, this._animationsDisabled = void 0, this.$context = void 0, this._doResize = ll((h) => this.update(h), a.resizeDelay || 0), this._dataChanges = [], Rn[this.id] = this, !r || !l) {
      console.error("Failed to create chart: can't acquire context from the given item");
      return;
    }
    Yt.listen(this, "complete", qs), Yt.listen(this, "progress", Gu), this._initialize(), this.attached && this.update();
  }
  get aspectRatio() {
    const { options: { aspectRatio: t, maintainAspectRatio: e }, width: i, height: s, _aspectRatio: o } = this;
    return X(t) ? e && o ? o : s ? i / s : null : t;
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
    return this.notifyPlugins("beforeInit"), this.options.responsive ? this.resize() : vs(this, this.options.devicePixelRatio), this.bindEvents(), this.notifyPlugins("afterInit"), this;
  }
  clear() {
    return ms(this.canvas, this.ctx), this;
  }
  stop() {
    return Yt.stop(this), this;
  }
  resize(t, e) {
    Yt.running(this) ? this._resizeBeforeDraw = {
      width: t,
      height: e
    } : this._resize(t, e);
  }
  _resize(t, e) {
    const i = this.options, s = this.canvas, o = i.maintainAspectRatio && this.aspectRatio, a = this.platform.getMaximumSize(s, t, e, o), r = i.devicePixelRatio || this.platform.getDevicePixelRatio(), l = this.width ? "resize" : "attach";
    this.width = a.width, this.height = a.height, this._aspectRatio = this.aspectRatio, vs(this, r, !0) && (this.notifyPlugins("resize", {
      size: a
    }), nt(i.onResize, [
      this,
      a
    ], this), this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const e = this.options.scales || {};
    Q(e, (i, s) => {
      i.id = s;
    });
  }
  buildOrUpdateScales() {
    const t = this.options, e = t.scales, i = this.scales, s = Object.keys(i).reduce((a, r) => (a[r] = !1, a), {});
    let o = [];
    e && (o = o.concat(Object.keys(e).map((a) => {
      const r = e[a], l = _i(a, r), c = l === "r", u = l === "x";
      return {
        options: r,
        dposition: c ? "chartArea" : u ? "bottom" : "left",
        dtype: c ? "radialLinear" : u ? "category" : "linear"
      };
    }))), Q(o, (a) => {
      const r = a.options, l = r.id, c = _i(l, r), u = U(r.type, a.dtype);
      (r.position === void 0 || Xs(r.position, c) !== Xs(a.dposition)) && (r.position = a.dposition), s[l] = !0;
      let h = null;
      if (l in i && i[l].type === u)
        h = i[l];
      else {
        const d = Wt.getScale(u);
        h = new d({
          id: l,
          type: u,
          ctx: this.ctx,
          chart: this
        }), i[h.id] = h;
      }
      h.init(r, t);
    }), Q(s, (a, r) => {
      a || delete i[r];
    }), Q(i, (a) => {
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
    this._sortedMetasets = t.slice(0).sort(Gs("order", "index"));
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
      if (a.type && a.type !== r && (this._destroyDatasetMeta(i), a = this.getDatasetMeta(i)), a.type = r, a.indexAxis = o.indexAxis || xi(r, this.options), a.order = o.order || 0, a.index = i, a.label = "" + o.label, a.visible = this.isDatasetVisible(i), a.controller)
        a.controller.updateIndex(i), a.controller.linkScales();
      else {
        const l = Wt.getController(r), { datasetElementType: c, dataElementType: u } = rt.datasets[r];
        Object.assign(l, {
          dataElementType: Wt.getElement(u),
          datasetElementType: c && Wt.getElement(c)
        }), a.controller = new l(this, i), t.push(a.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    Q(this.data.datasets, (t, e) => {
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
    for (let c = 0, u = this.data.datasets.length; c < u; c++) {
      const { controller: h } = this.getDatasetMeta(c), d = !s && o.indexOf(h) === -1;
      h.buildOrUpdateElements(d), a = Math.max(+h.getMaxOverflow(), a);
    }
    a = this._minPadding = i.layout.autoPadding ? a : 0, this._updateLayout(a), s || Q(o, (c) => {
      c.reset();
    }), this._updateDatasets(t), this.notifyPlugins("afterUpdate", {
      mode: t
    }), this._layers.sort(Gs("z", "_idx"));
    const { _active: r, _lastEvent: l } = this;
    l ? this._eventHandler(l, !0) : r.length && this._updateHoverStyles(r, r, !0), this.render();
  }
  _updateScales() {
    Q(this.scales, (t) => {
      Ct.removeBox(this, t);
    }), this.ensureScalesHaveIDs(), this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options, e = new Set(Object.keys(this._listeners)), i = new Set(t.events);
    (!rs(e, i) || !!this._responsiveListeners !== t.responsive) && (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this, e = this._getUniformDataChanges() || [];
    for (const { method: i, start: s, count: o } of e) {
      const a = i === "_removeElements" ? -o : o;
      qu(t, s, a);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length)
      return;
    this._dataChanges = [];
    const e = this.data.datasets.length, i = (o) => new Set(t.filter((a) => a[0] === o).map((a, r) => r + "," + a.splice(1).join(","))), s = i(0);
    for (let o = 1; o < e; o++)
      if (!rs(s, i(o)))
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
    this._layers = [], Q(this.boxes, (s) => {
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
        this._updateDataset(e, re(t) ? t({
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
    }) !== !1 && (Yt.has(this) ? this.attached && !Yt.running(this) && Yt.start(this) : (this.draw(), qs({
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
    }, s = da(this, t);
    this.notifyPlugins("beforeDatasetDraw", i) !== !1 && (s && Un(e, s), t.controller.draw(), s && Yn(e), i.cancelable = !1, this.notifyPlugins("afterDatasetDraw", i));
  }
  isPointInArea(t) {
    return Jt(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, e, i, s) {
    const o = Xc.modes[e];
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
    return this.$context || (this.$context = le(null, {
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
    Je(e) ? (o.data[e].hidden = !i, this.update()) : (this.setDatasetVisibility(t, i), a.update(o, {
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
    for (this.stop(), Yt.remove(this), t = 0, e = this.data.datasets.length; t < e; ++t)
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: e } = this;
    this._stop(), this.config.clearCache(), t && (this.unbindEvents(), ms(t, e), this.platform.releaseContext(e), this.canvas = null, this.ctx = null), delete Rn[this.id], this.notifyPlugins("afterDestroy");
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
    Q(this.options.events, (o) => i(o, s));
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
    Q(this._listeners, (t, e) => {
      this.platform.removeEventListener(this, e, t);
    }), this._listeners = {}, Q(this._responsiveListeners, (t, e) => {
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
    !En(i, e) && (this._active = i, this._lastEvent = null, this._updateHoverStyles(i, e));
  }
  notifyPlugins(t, e, i) {
    return this._plugins.notify(this, t, e, i);
  }
  isPluginEnabled(t) {
    return this._plugins._cache.filter((e) => e.plugin.id === t).length === 1;
  }
  _updateHoverStyles(t, e, i) {
    const s = this.options.hover, o = (l, c) => l.filter((u) => !c.some((h) => u.datasetIndex === h.datasetIndex && u.index === h.index)), a = o(e, t), r = i ? t : o(t, e);
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
    const { _active: s = [], options: o } = this, a = e, r = this._getActiveElements(t, s, i, a), l = Zr(t), c = Ku(t, this._lastEvent, i, l);
    i && (this._lastEvent = null, nt(o.onHover, [
      t,
      r,
      this
    ], this), l && nt(o.onClick, [
      t,
      r,
      this
    ], this));
    const u = !En(r, s);
    return (u || e) && (this._active = r, this._updateHoverStyles(r, s, e)), this._lastEvent = c, u;
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
function Zs() {
  return Q(Si.instances, (n) => n._plugins.invalidate());
}
function Zu(n, t, e) {
  const { startAngle: i, x: s, y: o, outerRadius: a, innerRadius: r, options: l } = t, { borderWidth: c, borderJoinStyle: u } = l, h = Math.min(c / a, Mt(i - e));
  if (n.beginPath(), n.arc(s, o, a - c / 2, i + h / 2, e - h / 2), r > 0) {
    const d = Math.min(c / r, Mt(i - e));
    n.arc(s, o, r + c / 2, e - d / 2, i + d / 2, !0);
  } else {
    const d = Math.min(c / 2, a * Mt(i - e));
    if (u === "round")
      n.arc(s, o, d, e - Z / 2, i + Z / 2, !0);
    else if (u === "bevel") {
      const f = 2 * d * d, p = -f * Math.cos(e + Z / 2) + s, g = -f * Math.sin(e + Z / 2) + o, m = f * Math.cos(i + Z / 2) + s, b = f * Math.sin(i + Z / 2) + o;
      n.lineTo(p, g), n.lineTo(m, b);
    }
  }
  n.closePath(), n.moveTo(0, 0), n.rect(0, 0, n.canvas.width, n.canvas.height), n.clip("evenodd");
}
function Ju(n, t, e) {
  const { startAngle: i, pixelMargin: s, x: o, y: a, outerRadius: r, innerRadius: l } = t;
  let c = s / r;
  n.beginPath(), n.arc(o, a, r, i - c, e + c), l > s ? (c = s / l, n.arc(o, a, l, e + c, i - c, !0)) : n.arc(o, a, s, e + bt, i - bt), n.closePath(), n.clip();
}
function Qu(n) {
  return ji(n, [
    "outerStart",
    "outerEnd",
    "innerStart",
    "innerEnd"
  ]);
}
function th(n, t, e, i) {
  const s = Qu(n.options.borderRadius), o = (e - t) / 2, a = Math.min(o, i * t / 2), r = (l) => {
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
function jn(n, t, e, i, s, o) {
  const { x: a, y: r, startAngle: l, pixelMargin: c, innerRadius: u } = t, h = Math.max(t.outerRadius + i + e - c, 0), d = u > 0 ? u + i + e + c : 0;
  let f = 0;
  const p = s - l;
  if (i) {
    const M = u > 0 ? u - i : 0, _ = h > 0 ? h - i : 0, v = (M + _) / 2, C = v !== 0 ? p * v / (v + i) : p;
    f = (p - C) / 2;
  }
  const g = Math.max(1e-3, p * h - e / Z) / h, m = (p - g) / 2, b = l + m + f, x = s - m - f, { outerStart: S, outerEnd: y, innerStart: w, innerEnd: O } = th(t, d, h, x - b), k = h - S, T = h - y, P = b + S / k, A = x - y / T, N = d + w, B = d + O, R = b + w / N, D = x - O / B;
  if (n.beginPath(), o) {
    const M = (P + A) / 2;
    if (n.arc(a, r, h, P, M), n.arc(a, r, h, M, A), y > 0) {
      const E = Ce(T, A, a, r);
      n.arc(E.x, E.y, y, A, x + bt);
    }
    const _ = Ce(B, x, a, r);
    if (n.lineTo(_.x, _.y), O > 0) {
      const E = Ce(B, D, a, r);
      n.arc(E.x, E.y, O, x + bt, D + Math.PI);
    }
    const v = (x - O / d + (b + w / d)) / 2;
    if (n.arc(a, r, d, x - O / d, v, !0), n.arc(a, r, d, v, b + w / d, !0), w > 0) {
      const E = Ce(N, R, a, r);
      n.arc(E.x, E.y, w, R + Math.PI, b - bt);
    }
    const C = Ce(k, b, a, r);
    if (n.lineTo(C.x, C.y), S > 0) {
      const E = Ce(k, P, a, r);
      n.arc(E.x, E.y, S, b - bt, P);
    }
  } else {
    n.moveTo(a, r);
    const M = Math.cos(P) * h + a, _ = Math.sin(P) * h + r;
    n.lineTo(M, _);
    const v = Math.cos(A) * h + a, C = Math.sin(A) * h + r;
    n.lineTo(v, C);
  }
  n.closePath();
}
function eh(n, t, e, i, s) {
  const { fullCircles: o, startAngle: a, circumference: r } = t;
  let l = t.endAngle;
  if (o) {
    jn(n, t, e, i, l, s);
    for (let c = 0; c < o; ++c)
      n.fill();
    isNaN(r) || (l = a + (r % ot || ot));
  }
  return jn(n, t, e, i, l, s), n.fill(), l;
}
function nh(n, t, e, i, s) {
  const { fullCircles: o, startAngle: a, circumference: r, options: l } = t, { borderWidth: c, borderJoinStyle: u, borderDash: h, borderDashOffset: d, borderRadius: f } = l, p = l.borderAlign === "inner";
  if (!c)
    return;
  n.setLineDash(h || []), n.lineDashOffset = d, p ? (n.lineWidth = c * 2, n.lineJoin = u || "round") : (n.lineWidth = c, n.lineJoin = u || "bevel");
  let g = t.endAngle;
  if (o) {
    jn(n, t, e, i, g, s);
    for (let m = 0; m < o; ++m)
      n.stroke();
    isNaN(r) || (g = a + (r % ot || ot));
  }
  p && Ju(n, t, g), l.selfJoin && g - a >= Z && f === 0 && u !== "miter" && Zu(n, t, g), o || (jn(n, t, e, i, g, s), n.stroke());
}
class ih extends Qt {
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
    ], i), { angle: o, distance: a } = Uo(s, {
      x: t,
      y: e
    }), { startAngle: r, endAngle: l, innerRadius: c, outerRadius: u, circumference: h } = this.getProps([
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius",
      "circumference"
    ], i), d = (this.options.spacing + this.options.borderWidth) / 2, f = U(h, l - r), p = Qe(o, r, l) && r !== l, g = f >= ot || p, m = Kt(a, c + d, u + d);
    return g && m;
  }
  getCenterPoint(t) {
    const { x: e, y: i, startAngle: s, endAngle: o, innerRadius: a, outerRadius: r } = this.getProps([
      "x",
      "y",
      "startAngle",
      "endAngle",
      "innerRadius",
      "outerRadius"
    ], t), { offset: l, spacing: c } = this.options, u = (s + o) / 2, h = (a + r + c + l) / 2;
    return {
      x: e + Math.cos(u) * h,
      y: i + Math.sin(u) * h
    };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: e, circumference: i } = this, s = (e.offset || 0) / 4, o = (e.spacing || 0) / 2, a = e.circular;
    if (this.pixelMargin = e.borderAlign === "inner" ? 0.33 : 0, this.fullCircles = i > ot ? Math.floor(i / ot) : 0, i === 0 || this.innerRadius < 0 || this.outerRadius < 0)
      return;
    t.save();
    const r = (this.startAngle + this.endAngle) / 2;
    t.translate(Math.cos(r) * s, Math.sin(r) * s);
    const l = 1 - Math.sin(Math.min(Z, i || 0)), c = s * l;
    t.fillStyle = e.backgroundColor, t.strokeStyle = e.borderColor, eh(t, this, c, o, a), nh(t, this, c, o, a), t.restore();
  }
}
function Ca(n, t, e = t) {
  n.lineCap = U(e.borderCapStyle, t.borderCapStyle), n.setLineDash(U(e.borderDash, t.borderDash)), n.lineDashOffset = U(e.borderDashOffset, t.borderDashOffset), n.lineJoin = U(e.borderJoinStyle, t.borderJoinStyle), n.lineWidth = U(e.borderWidth, t.borderWidth), n.strokeStyle = U(e.borderColor, t.borderColor);
}
function sh(n, t, e) {
  n.lineTo(e.x, e.y);
}
function oh(n) {
  return n.stepped ? xl : n.tension || n.cubicInterpolationMode === "monotone" ? _l : sh;
}
function Oa(n, t, e = {}) {
  const i = n.length, { start: s = 0, end: o = i - 1 } = e, { start: a, end: r } = t, l = Math.max(s, a), c = Math.min(o, r), u = s < a && o < a || s > r && o > r;
  return {
    count: i,
    start: l,
    loop: t.loop,
    ilen: c < l && !u ? i + c - l : c - l
  };
}
function ah(n, t, e, i) {
  const { points: s, options: o } = t, { count: a, start: r, loop: l, ilen: c } = Oa(s, e, i), u = oh(o);
  let { move: h = !0, reverse: d } = i || {}, f, p, g;
  for (f = 0; f <= c; ++f)
    p = s[(r + (d ? c - f : f)) % a], !p.skip && (h ? (n.moveTo(p.x, p.y), h = !1) : u(n, g, p, d, o.stepped), g = p);
  return l && (p = s[(r + (d ? c : 0)) % a], u(n, g, p, d, o.stepped)), !!l;
}
function rh(n, t, e, i) {
  const s = t.points, { count: o, start: a, ilen: r } = Oa(s, e, i), { move: l = !0, reverse: c } = i || {};
  let u = 0, h = 0, d, f, p, g, m, b;
  const x = (y) => (a + (c ? r - y : y)) % o, S = () => {
    g !== m && (n.lineTo(u, m), n.lineTo(u, g), n.lineTo(u, b));
  };
  for (l && (f = s[x(0)], n.moveTo(f.x, f.y)), d = 0; d <= r; ++d) {
    if (f = s[x(d)], f.skip)
      continue;
    const y = f.x, w = f.y, O = y | 0;
    O === p ? (w < g ? g = w : w > m && (m = w), u = (h * u + y) / ++h) : (S(), n.lineTo(y, w), p = O, h = 0, g = m = w), b = w;
  }
  S();
}
function wi(n) {
  const t = n.options, e = t.borderDash && t.borderDash.length;
  return !n._decimated && !n._loop && !t.tension && t.cubicInterpolationMode !== "monotone" && !t.stepped && !e ? rh : ah;
}
function lh(n) {
  return n.stepped ? Ql : n.tension || n.cubicInterpolationMode === "monotone" ? tc : ge;
}
function ch(n, t, e, i) {
  let s = t._path;
  s || (s = t._path = new Path2D(), t.path(s, e, i) && s.closePath()), Ca(n, t.options), n.stroke(s);
}
function uh(n, t, e, i) {
  const { segments: s, options: o } = t, a = wi(t);
  for (const r of s)
    Ca(n, o, r.style), n.beginPath(), a(n, t, r, {
      start: e,
      end: e + i - 1
    }) && n.closePath(), n.stroke();
}
const hh = typeof Path2D == "function";
function dh(n, t, e, i) {
  hh && !t.options.segment ? ch(n, t, e, i) : uh(n, t, e, i);
}
class qn extends Qt {
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
      Ul(this._points, i, t, s, e), this._pointsUpdated = !0;
    }
  }
  set points(t) {
    this._points = t, delete this._segments, delete this._path, this._pointsUpdated = !1;
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = ac(this, this.options.segment));
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
    const i = this.options, s = t[e], o = this.points, a = ha(this, {
      property: e,
      start: s,
      end: s
    });
    if (!a.length)
      return;
    const r = [], l = lh(i);
    let c, u;
    for (c = 0, u = a.length; c < u; ++c) {
      const { start: h, end: d } = a[c], f = o[h], p = o[d];
      if (f === p) {
        r.push(f);
        continue;
      }
      const g = Math.abs((s - f[e]) / (p[e] - f[e])), m = l(f, p, g, i.stepped);
      m[e] = t[e], r.push(m);
    }
    return r.length === 1 ? r[0] : r;
  }
  pathSegment(t, e, i) {
    return wi(this)(t, this, e, i);
  }
  path(t, e, i) {
    const s = this.segments, o = wi(this);
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
    (this.points || []).length && o.borderWidth && (t.save(), dh(t, this, i, s), t.restore()), this.animated && (this._pointsUpdated = !1, this._path = void 0);
  }
}
function Js(n, t, e, i) {
  const s = n.options, { [e]: o } = n.getProps([
    e
  ], i);
  return Math.abs(t - o) < s.radius + s.hitRadius;
}
class fh extends Qt {
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
    return Js(this, t, "x", e);
  }
  inYRange(t, e) {
    return Js(this, t, "y", e);
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
    this.skip || i.radius < 0.1 || !Jt(this, e, this.size(i) / 2) || (t.strokeStyle = i.borderColor, t.lineWidth = i.borderWidth, t.fillStyle = i.backgroundColor, vi(t, i, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
function Ta(n, t) {
  const { x: e, y: i, base: s, width: o, height: a } = n.getProps([
    "x",
    "y",
    "base",
    "width",
    "height"
  ], t);
  let r, l, c, u, h;
  return n.horizontal ? (h = a / 2, r = Math.min(e, s), l = Math.max(e, s), c = i - h, u = i + h) : (h = o / 2, r = e - h, l = e + h, c = Math.min(i, s), u = Math.max(i, s)), {
    left: r,
    top: c,
    right: l,
    bottom: u
  };
}
function se(n, t, e, i) {
  return n ? 0 : St(t, e, i);
}
function ph(n, t, e) {
  const i = n.options.borderWidth, s = n.borderSkipped, o = ta(i);
  return {
    t: se(s.top, o.top, 0, e),
    r: se(s.right, o.right, 0, t),
    b: se(s.bottom, o.bottom, 0, e),
    l: se(s.left, o.left, 0, t)
  };
}
function gh(n, t, e) {
  const { enableBorderRadius: i } = n.getProps([
    "enableBorderRadius"
  ]), s = n.options.borderRadius, o = be(s), a = Math.min(t, e), r = n.borderSkipped, l = i || G(s);
  return {
    topLeft: se(!l || r.top || r.left, o.topLeft, 0, a),
    topRight: se(!l || r.top || r.right, o.topRight, 0, a),
    bottomLeft: se(!l || r.bottom || r.left, o.bottomLeft, 0, a),
    bottomRight: se(!l || r.bottom || r.right, o.bottomRight, 0, a)
  };
}
function mh(n) {
  const t = Ta(n), e = t.right - t.left, i = t.bottom - t.top, s = ph(n, e / 2, i / 2), o = gh(n, e / 2, i / 2);
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
function hi(n, t, e, i) {
  const s = t === null, o = e === null, r = n && !(s && o) && Ta(n, i);
  return r && (s || Kt(t, r.left, r.right)) && (o || Kt(e, r.top, r.bottom));
}
function bh(n) {
  return n.topLeft || n.topRight || n.bottomLeft || n.bottomRight;
}
function yh(n, t) {
  n.rect(t.x, t.y, t.w, t.h);
}
function di(n, t, e = {}) {
  const i = n.x !== e.x ? -t : 0, s = n.y !== e.y ? -t : 0, o = (n.x + n.w !== e.x + e.w ? t : 0) - i, a = (n.y + n.h !== e.y + e.h ? t : 0) - s;
  return {
    x: n.x + i,
    y: n.y + s,
    w: n.w + o,
    h: n.h + a,
    radius: n.radius
  };
}
class vh extends Qt {
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
    const { inflateAmount: e, options: { borderColor: i, backgroundColor: s } } = this, { inner: o, outer: a } = mh(this), r = bh(a.radius) ? tn : yh;
    t.save(), (a.w !== o.w || a.h !== o.h) && (t.beginPath(), r(t, di(a, e, o)), t.clip(), r(t, di(o, -e, a)), t.fillStyle = i, t.fill("evenodd")), t.beginPath(), r(t, di(o, e)), t.fillStyle = s, t.fill(), t.restore();
  }
  inRange(t, e, i) {
    return hi(this, t, e, i);
  }
  inXRange(t, e) {
    return hi(this, t, null, e);
  }
  inYRange(t, e) {
    return hi(this, null, t, e);
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
var xh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ArcElement: ih,
  BarElement: vh,
  LineElement: qn,
  PointElement: fh
});
const ki = [
  "rgb(54, 162, 235)",
  "rgb(255, 99, 132)",
  "rgb(255, 159, 64)",
  "rgb(255, 205, 86)",
  "rgb(75, 192, 192)",
  "rgb(153, 102, 255)",
  "rgb(201, 203, 207)"
  // grey
], Qs = /* @__PURE__ */ ki.map((n) => n.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
function Pa(n) {
  return ki[n % ki.length];
}
function La(n) {
  return Qs[n % Qs.length];
}
function _h(n, t) {
  return n.borderColor = Pa(t), n.backgroundColor = La(t), ++t;
}
function Sh(n, t) {
  return n.backgroundColor = n.data.map(() => Pa(t++)), t;
}
function wh(n, t) {
  return n.backgroundColor = n.data.map(() => La(t++)), t;
}
function kh(n) {
  let t = 0;
  return (e, i) => {
    const s = n.getDatasetMeta(i).controller;
    s instanceof Yi ? t = Sh(e, t) : s instanceof ma ? t = wh(e, t) : s && (t = _h(e, t));
  };
}
function to(n) {
  let t;
  for (t in n)
    if (n[t].borderColor || n[t].backgroundColor)
      return !0;
  return !1;
}
function Mh(n) {
  return n && (n.borderColor || n.backgroundColor);
}
function Ch() {
  return rt.borderColor !== "rgba(0,0,0,0.1)" || rt.backgroundColor !== "rgba(0,0,0,0.1)";
}
var Oh = {
  id: "colors",
  defaults: {
    enabled: !0,
    forceOverride: !1
  },
  beforeLayout(n, t, e) {
    if (!e.enabled)
      return;
    const { data: { datasets: i }, options: s } = n.config, { elements: o } = s, a = to(i) || Mh(s) || o && to(o) || Ch();
    if (!e.forceOverride && a)
      return;
    const r = kh(n);
    i.forEach(r);
  }
};
function Th(n, t, e, i, s) {
  const o = s.samples || i;
  if (o >= e)
    return n.slice(t, t + e);
  const a = [], r = (e - 2) / (o - 2);
  let l = 0;
  const c = t + e - 1;
  let u = t, h, d, f, p, g;
  for (a[l++] = n[u], h = 0; h < o - 2; h++) {
    let m = 0, b = 0, x;
    const S = Math.floor((h + 1) * r) + 1 + t, y = Math.min(Math.floor((h + 2) * r) + 1, e) + t, w = y - S;
    for (x = S; x < y; x++)
      m += n[x].x, b += n[x].y;
    m /= w, b /= w;
    const O = Math.floor(h * r) + 1 + t, k = Math.min(Math.floor((h + 1) * r) + 1, e) + t, { x: T, y: P } = n[u];
    for (f = p = -1, x = O; x < k; x++)
      p = 0.5 * Math.abs((T - m) * (n[x].y - P) - (T - n[x].x) * (b - P)), p > f && (f = p, d = n[x], g = x);
    a[l++] = d, u = g;
  }
  return a[l++] = n[c], a;
}
function Ph(n, t, e, i) {
  let s = 0, o = 0, a, r, l, c, u, h, d, f, p, g;
  const m = [], b = t + e - 1, x = n[t].x, y = n[b].x - x;
  for (a = t; a < t + e; ++a) {
    r = n[a], l = (r.x - x) / y * i, c = r.y;
    const w = l | 0;
    if (w === u)
      c < p ? (p = c, h = a) : c > g && (g = c, d = a), s = (o * s + r.x) / ++o;
    else {
      const O = a - 1;
      if (!X(h) && !X(d)) {
        const k = Math.min(h, d), T = Math.max(h, d);
        k !== f && k !== O && m.push({
          ...n[k],
          x: s
        }), T !== f && T !== O && m.push({
          ...n[T],
          x: s
        });
      }
      a > 0 && O !== f && m.push(n[O]), m.push(r), u = w, o = 0, p = g = c, h = d = f = a;
    }
  }
  return m;
}
function Da(n) {
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
function eo(n) {
  n.data.datasets.forEach((t) => {
    Da(t);
  });
}
function Lh(n, t) {
  const e = t.length;
  let i = 0, s;
  const { iScale: o } = n, { min: a, max: r, minDefined: l, maxDefined: c } = o.getUserBounds();
  return l && (i = St(Zt(t, o.axis, a).lo, 0, e - 1)), c ? s = St(Zt(t, o.axis, r).hi + 1, i, e) - i : s = e - i, {
    start: i,
    count: s
  };
}
var Dh = {
  id: "decimation",
  defaults: {
    algorithm: "min-max",
    enabled: !1
  },
  beforeElementsUpdate: (n, t, e) => {
    if (!e.enabled) {
      eo(n);
      return;
    }
    const i = n.width;
    n.data.datasets.forEach((s, o) => {
      const { _data: a, indexAxis: r } = s, l = n.getDatasetMeta(o), c = a || s.data;
      if (He([
        r,
        n.options.indexAxis
      ]) === "y" || !l.controller.supportsDecimation)
        return;
      const u = n.scales[l.xAxisID];
      if (u.type !== "linear" && u.type !== "time" || n.options.parsing)
        return;
      let { start: h, count: d } = Lh(l, c);
      const f = e.threshold || 4 * i;
      if (d <= f) {
        Da(s);
        return;
      }
      X(a) && (s._data = c, delete s.data, Object.defineProperty(s, "data", {
        configurable: !0,
        enumerable: !0,
        get: function() {
          return this._decimated;
        },
        set: function(g) {
          this._data = g;
        }
      }));
      let p;
      switch (e.algorithm) {
        case "lttb":
          p = Th(c, h, d, i, e);
          break;
        case "min-max":
          p = Ph(c, h, d, i);
          break;
        default:
          throw new Error(`Unsupported decimation algorithm '${e.algorithm}'`);
      }
      s._decimated = p;
    });
  },
  destroy(n) {
    eo(n);
  }
};
function Ah(n, t, e) {
  const i = n.segments, s = n.points, o = t.points, a = [];
  for (const r of i) {
    let { start: l, end: c } = r;
    c = Kn(l, c, s);
    const u = Mi(e, s[l], s[c], r.loop);
    if (!t.segments) {
      a.push({
        source: r,
        target: u,
        start: s[l],
        end: s[c]
      });
      continue;
    }
    const h = ha(t, u);
    for (const d of h) {
      const f = Mi(e, o[d.start], o[d.end], d.loop), p = ua(r, s, f);
      for (const g of p)
        a.push({
          source: g,
          target: d,
          start: {
            [e]: no(u, f, "start", Math.max)
          },
          end: {
            [e]: no(u, f, "end", Math.min)
          }
        });
    }
  }
  return a;
}
function Mi(n, t, e, i) {
  if (i)
    return;
  let s = t[n], o = e[n];
  return n === "angle" && (s = Mt(s), o = Mt(o)), {
    property: n,
    start: s,
    end: o
  };
}
function Rh(n, t) {
  const { x: e = null, y: i = null } = n || {}, s = t.points, o = [];
  return t.segments.forEach(({ start: a, end: r }) => {
    r = Kn(a, r, s);
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
function Kn(n, t, e) {
  for (; t > n; t--) {
    const i = e[t];
    if (!isNaN(i.x) && !isNaN(i.y))
      break;
  }
  return t;
}
function no(n, t, e, i) {
  return n && t ? i(n[e], t[e]) : n ? n[e] : t ? t[e] : 0;
}
function Aa(n, t) {
  let e = [], i = !1;
  return at(n) ? (i = !0, e = n) : e = Rh(n, t), e.length ? new qn({
    points: e,
    options: {
      tension: 0
    },
    _loop: i,
    _fullLoop: i
  }) : null;
}
function io(n) {
  return n && n.fill !== !1;
}
function Eh(n, t, e) {
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
function Vh(n, t, e) {
  const i = Bh(n);
  if (G(i))
    return isNaN(i.value) ? !1 : i;
  let s = parseFloat(i);
  return ft(s) && Math.floor(s) === s ? Ih(i[0], t, s, e) : [
    "origin",
    "start",
    "end",
    "stack",
    "shape"
  ].indexOf(i) >= 0 && i;
}
function Ih(n, t, e, i) {
  return (n === "-" || n === "+") && (e = t + e), e === t || e < 0 || e >= i ? !1 : e;
}
function Fh(n, t) {
  let e = null;
  return n === "start" ? e = t.bottom : n === "end" ? e = t.top : G(n) ? e = t.getPixelForValue(n.value) : t.getBasePixel && (e = t.getBasePixel()), e;
}
function Nh(n, t, e) {
  let i;
  return n === "start" ? i = e : n === "end" ? i = t.options.reverse ? t.min : t.max : G(n) ? i = n.value : i = t.getBaseValue(), i;
}
function Bh(n) {
  const t = n.options, e = t.fill;
  let i = U(e && e.target, e);
  return i === void 0 && (i = !!t.backgroundColor), i === !1 || i === null ? !1 : i === !0 ? "origin" : i;
}
function jh(n) {
  const { scale: t, index: e, line: i } = n, s = [], o = i.segments, a = i.points, r = zh(t, e);
  r.push(Aa({
    x: null,
    y: t.bottom
  }, i));
  for (let l = 0; l < o.length; l++) {
    const c = o[l];
    for (let u = c.start; u <= c.end; u++)
      Wh(s, a[u], r);
  }
  return new qn({
    points: s,
    options: {}
  });
}
function zh(n, t) {
  const e = [], i = n.getMatchingVisibleMetas("line");
  for (let s = 0; s < i.length; s++) {
    const o = i[s];
    if (o.index === t)
      break;
    o.hidden || e.unshift(o.dataset);
  }
  return e;
}
function Wh(n, t, e) {
  const i = [];
  for (let s = 0; s < e.length; s++) {
    const o = e[s], { first: a, last: r, point: l } = Hh(o, t, "x");
    if (!(!l || a && r)) {
      if (a)
        i.unshift(l);
      else if (n.push(l), !r)
        break;
    }
  }
  n.push(...i);
}
function Hh(n, t, e) {
  const i = n.interpolate(t, e);
  if (!i)
    return {};
  const s = i[e], o = n.segments, a = n.points;
  let r = !1, l = !1;
  for (let c = 0; c < o.length; c++) {
    const u = o[c], h = a[u.start][e], d = a[u.end][e];
    if (Kt(s, h, d)) {
      r = s === h, l = s === d;
      break;
    }
  }
  return {
    first: r,
    last: l,
    point: i
  };
}
class Ra {
  constructor(t) {
    this.x = t.x, this.y = t.y, this.radius = t.radius;
  }
  pathSegment(t, e, i) {
    const { x: s, y: o, radius: a } = this;
    return e = e || {
      start: 0,
      end: ot
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
function $h(n) {
  const { chart: t, fill: e, line: i } = n;
  if (ft(e))
    return Uh(t, e);
  if (e === "stack")
    return jh(n);
  if (e === "shape")
    return !0;
  const s = Yh(n);
  return s instanceof Ra ? s : Aa(s, i);
}
function Uh(n, t) {
  const e = n.getDatasetMeta(t);
  return e && n.isDatasetVisible(t) ? e.dataset : null;
}
function Yh(n) {
  return (n.scale || {}).getPointPositionForValue ? Gh(n) : Xh(n);
}
function Xh(n) {
  const { scale: t = {}, fill: e } = n, i = Fh(e, t);
  if (ft(i)) {
    const s = t.isHorizontal();
    return {
      x: s ? i : null,
      y: s ? null : i
    };
  }
  return null;
}
function Gh(n) {
  const { scale: t, fill: e } = n, i = t.options, s = t.getLabels().length, o = i.reverse ? t.max : t.min, a = Nh(e, t, o), r = [];
  if (i.grid.circular) {
    const l = t.getPointPositionForValue(0, o);
    return new Ra({
      x: l.x,
      y: l.y,
      radius: t.getDistanceFromCenterForValue(a)
    });
  }
  for (let l = 0; l < s; ++l)
    r.push(t.getPointPositionForValue(l, a));
  return r;
}
function fi(n, t, e) {
  const i = $h(t), { chart: s, index: o, line: a, scale: r, axis: l } = t, c = a.options, u = c.fill, h = c.backgroundColor, { above: d = h, below: f = h } = u || {}, p = s.getDatasetMeta(o), g = da(s, p);
  i && a.points.length && (Un(n, e), qh(n, {
    line: a,
    target: i,
    above: d,
    below: f,
    area: e,
    scale: r,
    axis: l,
    clip: g
  }), Yn(n));
}
function qh(n, t) {
  const { line: e, target: i, above: s, below: o, area: a, scale: r, clip: l } = t, c = e._loop ? "angle" : t.axis;
  n.save();
  let u = o;
  o !== s && (c === "x" ? (so(n, i, a.top), pi(n, {
    line: e,
    target: i,
    color: s,
    scale: r,
    property: c,
    clip: l
  }), n.restore(), n.save(), so(n, i, a.bottom)) : c === "y" && (oo(n, i, a.left), pi(n, {
    line: e,
    target: i,
    color: o,
    scale: r,
    property: c,
    clip: l
  }), n.restore(), n.save(), oo(n, i, a.right), u = s)), pi(n, {
    line: e,
    target: i,
    color: u,
    scale: r,
    property: c,
    clip: l
  }), n.restore();
}
function so(n, t, e) {
  const { segments: i, points: s } = t;
  let o = !0, a = !1;
  n.beginPath();
  for (const r of i) {
    const { start: l, end: c } = r, u = s[l], h = s[Kn(l, c, s)];
    o ? (n.moveTo(u.x, u.y), o = !1) : (n.lineTo(u.x, e), n.lineTo(u.x, u.y)), a = !!t.pathSegment(n, r, {
      move: a
    }), a ? n.closePath() : n.lineTo(h.x, e);
  }
  n.lineTo(t.first().x, e), n.closePath(), n.clip();
}
function oo(n, t, e) {
  const { segments: i, points: s } = t;
  let o = !0, a = !1;
  n.beginPath();
  for (const r of i) {
    const { start: l, end: c } = r, u = s[l], h = s[Kn(l, c, s)];
    o ? (n.moveTo(u.x, u.y), o = !1) : (n.lineTo(e, u.y), n.lineTo(u.x, u.y)), a = !!t.pathSegment(n, r, {
      move: a
    }), a ? n.closePath() : n.lineTo(e, h.y);
  }
  n.lineTo(e, t.first().y), n.closePath(), n.clip();
}
function pi(n, t) {
  const { line: e, target: i, property: s, color: o, scale: a, clip: r } = t, l = Ah(e, i, s);
  for (const { source: c, target: u, start: h, end: d } of l) {
    const { style: { backgroundColor: f = o } = {} } = c, p = i !== !0;
    n.save(), n.fillStyle = f, Kh(n, a, r, p && Mi(s, h, d)), n.beginPath();
    const g = !!e.pathSegment(n, c);
    let m;
    if (p) {
      g ? n.closePath() : ao(n, i, d, s);
      const b = !!i.pathSegment(n, u, {
        move: g,
        reverse: !0
      });
      m = g && b, m || ao(n, i, h, s);
    }
    n.closePath(), n.fill(m ? "evenodd" : "nonzero"), n.restore();
  }
}
function Kh(n, t, e, i) {
  const s = t.chart.chartArea, { property: o, start: a, end: r } = i || {};
  if (o === "x" || o === "y") {
    let l, c, u, h;
    o === "x" ? (l = a, c = s.top, u = r, h = s.bottom) : (l = s.left, c = a, u = s.right, h = r), n.beginPath(), e && (l = Math.max(l, e.left), u = Math.min(u, e.right), c = Math.max(c, e.top), h = Math.min(h, e.bottom)), n.rect(l, c, u - l, h - c), n.clip();
  }
}
function ao(n, t, e, i) {
  const s = t.interpolate(e, i);
  s && n.lineTo(s.x, s.y);
}
var Zh = {
  id: "filler",
  afterDatasetsUpdate(n, t, e) {
    const i = (n.data.datasets || []).length, s = [];
    let o, a, r, l;
    for (a = 0; a < i; ++a)
      o = n.getDatasetMeta(a), r = o.dataset, l = null, r && r.options && r instanceof qn && (l = {
        visible: n.isDatasetVisible(a),
        index: a,
        fill: Vh(r, a, i),
        chart: n,
        axis: o.controller.options.indexAxis,
        scale: o.vScale,
        line: r
      }), o.$filler = l, s.push(l);
    for (a = 0; a < i; ++a)
      l = s[a], !(!l || l.fill === !1) && (l.fill = Eh(s, a, e.propagate));
  },
  beforeDraw(n, t, e) {
    const i = e.drawTime === "beforeDraw", s = n.getSortedVisibleDatasetMetas(), o = n.chartArea;
    for (let a = s.length - 1; a >= 0; --a) {
      const r = s[a].$filler;
      r && (r.line.updateControlPoints(o, r.axis), i && r.fill && fi(n.ctx, r, o));
    }
  },
  beforeDatasetsDraw(n, t, e) {
    if (e.drawTime !== "beforeDatasetsDraw")
      return;
    const i = n.getSortedVisibleDatasetMetas();
    for (let s = i.length - 1; s >= 0; --s) {
      const o = i[s].$filler;
      io(o) && fi(n.ctx, o, n.chartArea);
    }
  },
  beforeDatasetDraw(n, t, e) {
    const i = t.meta.$filler;
    !io(i) || e.drawTime !== "beforeDatasetDraw" || fi(n.ctx, i, n.chartArea);
  },
  defaults: {
    propagate: !0,
    drawTime: "beforeDatasetDraw"
  }
};
const ro = (n, t) => {
  let { boxHeight: e = t, boxWidth: i = t } = n;
  return n.usePointStyle && (e = Math.min(e, t), i = n.pointStyleWidth || Math.min(i, t)), {
    boxWidth: i,
    boxHeight: e,
    itemHeight: Math.max(t, e)
  };
}, Jh = (n, t) => n !== null && t !== null && n.datasetIndex === t.datasetIndex && n.index === t.index;
class lo extends Qt {
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
    let e = nt(t.generateLabels, [
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
    const i = t.labels, s = vt(i.font), o = s.size, a = this._computeTitleHeight(), { boxWidth: r, itemHeight: l } = ro(i, o);
    let c, u;
    e.font = s.string, this.isHorizontal() ? (c = this.maxWidth, u = this._fitRows(a, o, r, l) + 10) : (u = this.maxHeight, c = this._fitCols(a, s, r, l) + 10), this.width = Math.min(c, t.maxWidth || this.maxWidth), this.height = Math.min(u, t.maxHeight || this.maxHeight);
  }
  _fitRows(t, e, i, s) {
    const { ctx: o, maxWidth: a, options: { labels: { padding: r } } } = this, l = this.legendHitBoxes = [], c = this.lineWidths = [
      0
    ], u = s + r;
    let h = t;
    o.textAlign = "left", o.textBaseline = "middle";
    let d = -1, f = -u;
    return this.legendItems.forEach((p, g) => {
      const m = i + e / 2 + o.measureText(p.text).width;
      (g === 0 || c[c.length - 1] + m + 2 * r > a) && (h += u, c[c.length - (g > 0 ? 0 : 1)] = 0, f += u, d++), l[g] = {
        left: 0,
        top: f,
        row: d,
        width: m,
        height: s
      }, c[c.length - 1] += m + r;
    }), h;
  }
  _fitCols(t, e, i, s) {
    const { ctx: o, maxHeight: a, options: { labels: { padding: r } } } = this, l = this.legendHitBoxes = [], c = this.columnSizes = [], u = a - t;
    let h = r, d = 0, f = 0, p = 0, g = 0;
    return this.legendItems.forEach((m, b) => {
      const { itemWidth: x, itemHeight: S } = Qh(i, e, o, m, s);
      b > 0 && f + S + 2 * r > u && (h += d + r, c.push({
        width: d,
        height: f
      }), p += d + r, g++, d = f = 0), l[b] = {
        left: p,
        top: f,
        col: g,
        width: x,
        height: S
      }, d = Math.max(d, x), f += S + r;
    }), h += d, c.push({
      width: d,
      height: f
    }), h;
  }
  adjustHitBoxes() {
    if (!this.options.display)
      return;
    const t = this._computeTitleHeight(), { legendHitBoxes: e, options: { align: i, labels: { padding: s }, rtl: o } } = this, a = Oe(o, this.left, this.width);
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
      Un(t, this), this._draw(), Yn(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: e, lineWidths: i, ctx: s } = this, { align: o, labels: a } = t, r = rt.color, l = Oe(t.rtl, this.left, this.width), c = vt(a.font), { padding: u } = a, h = c.size, d = h / 2;
    let f;
    this.drawTitle(), s.textAlign = l.textAlign("left"), s.textBaseline = "middle", s.lineWidth = 0.5, s.font = c.string;
    const { boxWidth: p, boxHeight: g, itemHeight: m } = ro(a, h), b = function(O, k, T) {
      if (isNaN(p) || p <= 0 || isNaN(g) || g < 0)
        return;
      s.save();
      const P = U(T.lineWidth, 1);
      if (s.fillStyle = U(T.fillStyle, r), s.lineCap = U(T.lineCap, "butt"), s.lineDashOffset = U(T.lineDashOffset, 0), s.lineJoin = U(T.lineJoin, "miter"), s.lineWidth = P, s.strokeStyle = U(T.strokeStyle, r), s.setLineDash(U(T.lineDash, [])), a.usePointStyle) {
        const A = {
          radius: g * Math.SQRT2 / 2,
          pointStyle: T.pointStyle,
          rotation: T.rotation,
          borderWidth: P
        }, N = l.xPlus(O, p / 2), B = k + d;
        Qo(s, A, N, B, a.pointStyleWidth && p);
      } else {
        const A = k + Math.max((h - g) / 2, 0), N = l.leftForLtr(O, p), B = be(T.borderRadius);
        s.beginPath(), Object.values(B).some((R) => R !== 0) ? tn(s, {
          x: N,
          y: A,
          w: p,
          h: g,
          radius: B
        }) : s.rect(N, A, p, g), s.fill(), P !== 0 && s.stroke();
      }
      s.restore();
    }, x = function(O, k, T) {
      xe(s, T.text, O, k + m / 2, c, {
        strikethrough: T.hidden,
        textAlign: l.textAlign(T.textAlign)
      });
    }, S = this.isHorizontal(), y = this._computeTitleHeight();
    S ? f = {
      x: kt(o, this.left + u, this.right - i[0]),
      y: this.top + u + y,
      line: 0
    } : f = {
      x: this.left + u,
      y: kt(o, this.top + y + u, this.bottom - e[0].height),
      line: 0
    }, ra(this.ctx, t.textDirection);
    const w = m + u;
    this.legendItems.forEach((O, k) => {
      s.strokeStyle = O.fontColor, s.fillStyle = O.fontColor;
      const T = s.measureText(O.text).width, P = l.textAlign(O.textAlign || (O.textAlign = a.textAlign)), A = p + d + T;
      let N = f.x, B = f.y;
      l.setWidth(this.width), S ? k > 0 && N + A + u > this.right && (B = f.y += w, f.line++, N = f.x = kt(o, this.left + u, this.right - i[f.line])) : k > 0 && B + w > this.bottom && (N = f.x = N + e[f.line].width + u, f.line++, B = f.y = kt(o, this.top + y + u, this.bottom - e[f.line].height));
      const R = l.x(N);
      if (b(R, B, O), N = cl(P, N + p + d, S ? N + A : this.right, t.rtl), x(l.x(N), B, O), S)
        f.x += A + u;
      else if (typeof O.text != "string") {
        const D = c.lineHeight;
        f.y += Ea(O, D) + u;
      } else
        f.y += w;
    }), la(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options, e = t.title, i = vt(e.font), s = Ot(e.padding);
    if (!e.display)
      return;
    const o = Oe(t.rtl, this.left, this.width), a = this.ctx, r = e.position, l = i.size / 2, c = s.top + l;
    let u, h = this.left, d = this.width;
    if (this.isHorizontal())
      d = Math.max(...this.lineWidths), u = this.top + c, h = kt(t.align, h, this.right - d);
    else {
      const p = this.columnSizes.reduce((g, m) => Math.max(g, m.height), 0);
      u = c + kt(t.align, this.top, this.bottom - p - t.labels.padding - this._computeTitleHeight());
    }
    const f = kt(r, h, h + d);
    a.textAlign = o.textAlign(Ni(r)), a.textBaseline = "middle", a.strokeStyle = e.color, a.fillStyle = e.color, a.font = i.string, xe(a, e.text, f, u, i);
  }
  _computeTitleHeight() {
    const t = this.options.title, e = vt(t.font), i = Ot(t.padding);
    return t.display ? e.lineHeight + i.height : 0;
  }
  _getLegendItemAt(t, e) {
    let i, s, o;
    if (Kt(t, this.left, this.right) && Kt(e, this.top, this.bottom)) {
      for (o = this.legendHitBoxes, i = 0; i < o.length; ++i)
        if (s = o[i], Kt(t, s.left, s.left + s.width) && Kt(e, s.top, s.top + s.height))
          return this.legendItems[i];
    }
    return null;
  }
  handleEvent(t) {
    const e = this.options;
    if (!nd(t.type, e))
      return;
    const i = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const s = this._hoveredItem, o = Jh(s, i);
      s && !o && nt(e.onLeave, [
        t,
        s,
        this
      ], this), this._hoveredItem = i, i && !o && nt(e.onHover, [
        t,
        i,
        this
      ], this);
    } else i && nt(e.onClick, [
      t,
      i,
      this
    ], this);
  }
}
function Qh(n, t, e, i, s) {
  const o = td(i, n, t, e), a = ed(s, i, t.lineHeight);
  return {
    itemWidth: o,
    itemHeight: a
  };
}
function td(n, t, e, i) {
  let s = n.text;
  return s && typeof s != "string" && (s = s.reduce((o, a) => o.length > a.length ? o : a)), t + e.size / 2 + i.measureText(s).width;
}
function ed(n, t, e) {
  let i = n;
  return typeof t.text != "string" && (i = Ea(t, e)), i;
}
function Ea(n, t) {
  const e = n.text ? n.text.length : 0;
  return t * e;
}
function nd(n, t) {
  return !!((n === "mousemove" || n === "mouseout") && (t.onHover || t.onLeave) || t.onClick && (n === "click" || n === "mouseup"));
}
var id = {
  id: "legend",
  _element: lo,
  start(n, t, e) {
    const i = n.legend = new lo({
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
          const c = l.controller.getStyle(e ? 0 : void 0), u = Ot(c.borderWidth);
          return {
            text: t[l.index].label,
            fillStyle: c.backgroundColor,
            fontColor: o,
            hidden: !l.visible,
            lineCap: c.borderCapStyle,
            lineDash: c.borderDash,
            lineDashOffset: c.borderDashOffset,
            lineJoin: c.borderJoinStyle,
            lineWidth: (u.width + u.height) / 4,
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
class Gi extends Qt {
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
    const s = at(i.text) ? i.text.length : 1;
    this._padding = Ot(i.padding);
    const o = s * vt(i.font).lineHeight + this._padding.height;
    this.isHorizontal() ? this.height = o : this.width = o;
  }
  isHorizontal() {
    const t = this.options.position;
    return t === "top" || t === "bottom";
  }
  _drawArgs(t) {
    const { top: e, left: i, bottom: s, right: o, options: a } = this, r = a.align;
    let l = 0, c, u, h;
    return this.isHorizontal() ? (u = kt(r, i, o), h = e + t, c = o - i) : (a.position === "left" ? (u = i + t, h = kt(r, s, e), l = Z * -0.5) : (u = o - t, h = kt(r, e, s), l = Z * 0.5), c = s - e), {
      titleX: u,
      titleY: h,
      maxWidth: c,
      rotation: l
    };
  }
  draw() {
    const t = this.ctx, e = this.options;
    if (!e.display)
      return;
    const i = vt(e.font), o = i.lineHeight / 2 + this._padding.top, { titleX: a, titleY: r, maxWidth: l, rotation: c } = this._drawArgs(o);
    xe(t, e.text, 0, 0, i, {
      color: e.color,
      maxWidth: l,
      rotation: c,
      textAlign: Ni(e.align),
      textBaseline: "middle",
      translation: [
        a,
        r
      ]
    });
  }
}
function sd(n, t) {
  const e = new Gi({
    ctx: n.ctx,
    options: t,
    chart: n
  });
  Ct.configure(n, e, t), Ct.addBox(n, e), n.titleBlock = e;
}
var od = {
  id: "title",
  _element: Gi,
  start(n, t, e) {
    sd(n, e);
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
const On = /* @__PURE__ */ new WeakMap();
var ad = {
  id: "subtitle",
  start(n, t, e) {
    const i = new Gi({
      ctx: n.ctx,
      options: e,
      chart: n
    });
    Ct.configure(n, i, e), Ct.addBox(n, i), On.set(n, i);
  },
  stop(n) {
    Ct.removeBox(n, On.get(n)), On.delete(n);
  },
  beforeUpdate(n, t, e) {
    const i = On.get(n);
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
const Ue = {
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
        const c = l.getCenterPoint(), u = bi(t, c);
        u < s && (s = u, r = l);
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
function zt(n, t) {
  return t && (at(t) ? Array.prototype.push.apply(n, t) : n.push(t)), n;
}
function Xt(n) {
  return (typeof n == "string" || n instanceof String) && n.indexOf(`
`) > -1 ? n.split(`
`) : n;
}
function rd(n, t) {
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
function co(n, t) {
  const e = n.chart.ctx, { body: i, footer: s, title: o } = n, { boxWidth: a, boxHeight: r } = t, l = vt(t.bodyFont), c = vt(t.titleFont), u = vt(t.footerFont), h = o.length, d = s.length, f = i.length, p = Ot(t.padding);
  let g = p.height, m = 0, b = i.reduce((y, w) => y + w.before.length + w.lines.length + w.after.length, 0);
  if (b += n.beforeBody.length + n.afterBody.length, h && (g += h * c.lineHeight + (h - 1) * t.titleSpacing + t.titleMarginBottom), b) {
    const y = t.displayColors ? Math.max(r, l.lineHeight) : l.lineHeight;
    g += f * y + (b - f) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  d && (g += t.footerMarginTop + d * u.lineHeight + (d - 1) * t.footerSpacing);
  let x = 0;
  const S = function(y) {
    m = Math.max(m, e.measureText(y).width + x);
  };
  return e.save(), e.font = c.string, Q(n.title, S), e.font = l.string, Q(n.beforeBody.concat(n.afterBody), S), x = t.displayColors ? a + 2 + t.boxPadding : 0, Q(i, (y) => {
    Q(y.before, S), Q(y.lines, S), Q(y.after, S);
  }), x = 0, e.font = u.string, Q(n.footer, S), e.restore(), m += p.width, {
    width: m,
    height: g
  };
}
function ld(n, t) {
  const { y: e, height: i } = t;
  return e < i / 2 ? "top" : e > n.height - i / 2 ? "bottom" : "center";
}
function cd(n, t, e, i) {
  const { x: s, width: o } = i, a = e.caretSize + e.caretPadding;
  if (n === "left" && s + o + a > t.width || n === "right" && s - o - a < 0)
    return !0;
}
function ud(n, t, e, i) {
  const { x: s, width: o } = e, { width: a, chartArea: { left: r, right: l } } = n;
  let c = "center";
  return i === "center" ? c = s <= (r + l) / 2 ? "left" : "right" : s <= o / 2 ? c = "left" : s >= a - o / 2 && (c = "right"), cd(c, n, t, e) && (c = "center"), c;
}
function uo(n, t, e) {
  const i = e.yAlign || t.yAlign || ld(n, e);
  return {
    xAlign: e.xAlign || t.xAlign || ud(n, t, e, i),
    yAlign: i
  };
}
function hd(n, t) {
  let { x: e, width: i } = n;
  return t === "right" ? e -= i : t === "center" && (e -= i / 2), e;
}
function dd(n, t, e) {
  let { y: i, height: s } = n;
  return t === "top" ? i += e : t === "bottom" ? i -= s + e : i -= s / 2, i;
}
function ho(n, t, e, i) {
  const { caretSize: s, caretPadding: o, cornerRadius: a } = n, { xAlign: r, yAlign: l } = e, c = s + o, { topLeft: u, topRight: h, bottomLeft: d, bottomRight: f } = be(a);
  let p = hd(t, r);
  const g = dd(t, l, c);
  return l === "center" ? r === "left" ? p += c : r === "right" && (p -= c) : r === "left" ? p -= Math.max(u, d) + s : r === "right" && (p += Math.max(h, f) + s), {
    x: St(p, 0, i.width - t.width),
    y: St(g, 0, i.height - t.height)
  };
}
function Tn(n, t, e) {
  const i = Ot(e.padding);
  return t === "center" ? n.x + n.width / 2 : t === "right" ? n.x + n.width - i.right : n.x + i.left;
}
function fo(n) {
  return zt([], Xt(n));
}
function fd(n, t, e) {
  return le(n, {
    tooltip: t,
    tooltipItems: e,
    type: "tooltip"
  });
}
function po(n, t) {
  const e = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return e ? n.override(e) : n;
}
const Va = {
  beforeTitle: Ut,
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
  afterTitle: Ut,
  beforeBody: Ut,
  beforeLabel: Ut,
  label(n) {
    if (this && this.options && this.options.mode === "dataset")
      return n.label + ": " + n.formattedValue || n.formattedValue;
    let t = n.dataset.label || "";
    t && (t += ": ");
    const e = n.formattedValue;
    return X(e) || (t += e), t;
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
  afterLabel: Ut,
  afterBody: Ut,
  beforeFooter: Ut,
  footer: Ut,
  afterFooter: Ut
};
function Pt(n, t, e, i) {
  const s = n[t].call(e, i);
  return typeof s > "u" ? Va[t].call(e, i) : s;
}
class go extends Qt {
  static positioners = Ue;
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
    const e = this.chart, i = this.options.setContext(this.getContext()), s = i.enabled && e.options.animation && i.animations, o = new fa(this.chart, s);
    return s._cacheable && (this._cachedAnimations = Object.freeze(o)), o;
  }
  getContext() {
    return this.$context || (this.$context = fd(this.chart.getContext(), this, this._tooltipItems));
  }
  getTitle(t, e) {
    const { callbacks: i } = e, s = Pt(i, "beforeTitle", this, t), o = Pt(i, "title", this, t), a = Pt(i, "afterTitle", this, t);
    let r = [];
    return r = zt(r, Xt(s)), r = zt(r, Xt(o)), r = zt(r, Xt(a)), r;
  }
  getBeforeBody(t, e) {
    return fo(Pt(e.callbacks, "beforeBody", this, t));
  }
  getBody(t, e) {
    const { callbacks: i } = e, s = [];
    return Q(t, (o) => {
      const a = {
        before: [],
        lines: [],
        after: []
      }, r = po(i, o);
      zt(a.before, Xt(Pt(r, "beforeLabel", this, o))), zt(a.lines, Pt(r, "label", this, o)), zt(a.after, Xt(Pt(r, "afterLabel", this, o))), s.push(a);
    }), s;
  }
  getAfterBody(t, e) {
    return fo(Pt(e.callbacks, "afterBody", this, t));
  }
  getFooter(t, e) {
    const { callbacks: i } = e, s = Pt(i, "beforeFooter", this, t), o = Pt(i, "footer", this, t), a = Pt(i, "afterFooter", this, t);
    let r = [];
    return r = zt(r, Xt(s)), r = zt(r, Xt(o)), r = zt(r, Xt(a)), r;
  }
  _createItems(t) {
    const e = this._active, i = this.chart.data, s = [], o = [], a = [];
    let r = [], l, c;
    for (l = 0, c = e.length; l < c; ++l)
      r.push(rd(this.chart, e[l]));
    return t.filter && (r = r.filter((u, h, d) => t.filter(u, h, d, i))), t.itemSort && (r = r.sort((u, h) => t.itemSort(u, h, i))), Q(r, (u) => {
      const h = po(t.callbacks, u);
      s.push(Pt(h, "labelColor", this, u)), o.push(Pt(h, "labelPointStyle", this, u)), a.push(Pt(h, "labelTextColor", this, u));
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
      const r = Ue[i.position].call(this, s, this._eventPosition);
      a = this._createItems(i), this.title = this.getTitle(a, i), this.beforeBody = this.getBeforeBody(a, i), this.body = this.getBody(a, i), this.afterBody = this.getAfterBody(a, i), this.footer = this.getFooter(a, i);
      const l = this._size = co(this, i), c = Object.assign({}, r, l), u = uo(this.chart, i, c), h = ho(i, c, u, this.chart);
      this.xAlign = u.xAlign, this.yAlign = u.yAlign, o = {
        opacity: 1,
        x: h.x,
        y: h.y,
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
    const { xAlign: s, yAlign: o } = this, { caretSize: a, cornerRadius: r } = i, { topLeft: l, topRight: c, bottomLeft: u, bottomRight: h } = be(r), { x: d, y: f } = t, { width: p, height: g } = e;
    let m, b, x, S, y, w;
    return o === "center" ? (y = f + g / 2, s === "left" ? (m = d, b = m - a, S = y + a, w = y - a) : (m = d + p, b = m + a, S = y - a, w = y + a), x = m) : (s === "left" ? b = d + Math.max(l, u) + a : s === "right" ? b = d + p - Math.max(c, h) - a : b = this.caretX, o === "top" ? (S = f, y = S - a, m = b - a, x = b + a) : (S = f + g, y = S + a, m = b + a, x = b - a), w = S), {
      x1: m,
      x2: b,
      x3: x,
      y1: S,
      y2: y,
      y3: w
    };
  }
  drawTitle(t, e, i) {
    const s = this.title, o = s.length;
    let a, r, l;
    if (o) {
      const c = Oe(i.rtl, this.x, this.width);
      for (t.x = Tn(this, i.titleAlign, i), e.textAlign = c.textAlign(i.titleAlign), e.textBaseline = "middle", a = vt(i.titleFont), r = i.titleSpacing, e.fillStyle = i.titleColor, e.font = a.string, l = 0; l < o; ++l)
        e.fillText(s[l], c.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + r, l + 1 === o && (t.y += i.titleMarginBottom - r);
    }
  }
  _drawColorBox(t, e, i, s, o) {
    const a = this.labelColors[i], r = this.labelPointStyles[i], { boxHeight: l, boxWidth: c } = o, u = vt(o.bodyFont), h = Tn(this, "left", o), d = s.x(h), f = l < u.lineHeight ? (u.lineHeight - l) / 2 : 0, p = e.y + f;
    if (o.usePointStyle) {
      const g = {
        radius: Math.min(c, l) / 2,
        pointStyle: r.pointStyle,
        rotation: r.rotation,
        borderWidth: 1
      }, m = s.leftForLtr(d, c) + c / 2, b = p + l / 2;
      t.strokeStyle = o.multiKeyBackground, t.fillStyle = o.multiKeyBackground, vi(t, g, m, b), t.strokeStyle = a.borderColor, t.fillStyle = a.backgroundColor, vi(t, g, m, b);
    } else {
      t.lineWidth = G(a.borderWidth) ? Math.max(...Object.values(a.borderWidth)) : a.borderWidth || 1, t.strokeStyle = a.borderColor, t.setLineDash(a.borderDash || []), t.lineDashOffset = a.borderDashOffset || 0;
      const g = s.leftForLtr(d, c), m = s.leftForLtr(s.xPlus(d, 1), c - 2), b = be(a.borderRadius);
      Object.values(b).some((x) => x !== 0) ? (t.beginPath(), t.fillStyle = o.multiKeyBackground, tn(t, {
        x: g,
        y: p,
        w: c,
        h: l,
        radius: b
      }), t.fill(), t.stroke(), t.fillStyle = a.backgroundColor, t.beginPath(), tn(t, {
        x: m,
        y: p + 1,
        w: c - 2,
        h: l - 2,
        radius: b
      }), t.fill()) : (t.fillStyle = o.multiKeyBackground, t.fillRect(g, p, c, l), t.strokeRect(g, p, c, l), t.fillStyle = a.backgroundColor, t.fillRect(m, p + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[i];
  }
  drawBody(t, e, i) {
    const { body: s } = this, { bodySpacing: o, bodyAlign: a, displayColors: r, boxHeight: l, boxWidth: c, boxPadding: u } = i, h = vt(i.bodyFont);
    let d = h.lineHeight, f = 0;
    const p = Oe(i.rtl, this.x, this.width), g = function(T) {
      e.fillText(T, p.x(t.x + f), t.y + d / 2), t.y += d + o;
    }, m = p.textAlign(a);
    let b, x, S, y, w, O, k;
    for (e.textAlign = a, e.textBaseline = "middle", e.font = h.string, t.x = Tn(this, m, i), e.fillStyle = i.bodyColor, Q(this.beforeBody, g), f = r && m !== "right" ? a === "center" ? c / 2 + u : c + 2 + u : 0, y = 0, O = s.length; y < O; ++y) {
      for (b = s[y], x = this.labelTextColors[y], e.fillStyle = x, Q(b.before, g), S = b.lines, r && S.length && (this._drawColorBox(e, t, y, p, i), d = Math.max(h.lineHeight, l)), w = 0, k = S.length; w < k; ++w)
        g(S[w]), d = h.lineHeight;
      Q(b.after, g);
    }
    f = 0, d = h.lineHeight, Q(this.afterBody, g), t.y -= o;
  }
  drawFooter(t, e, i) {
    const s = this.footer, o = s.length;
    let a, r;
    if (o) {
      const l = Oe(i.rtl, this.x, this.width);
      for (t.x = Tn(this, i.footerAlign, i), t.y += i.footerMarginTop, e.textAlign = l.textAlign(i.footerAlign), e.textBaseline = "middle", a = vt(i.footerFont), e.fillStyle = i.footerColor, e.font = a.string, r = 0; r < o; ++r)
        e.fillText(s[r], l.x(t.x), t.y + a.lineHeight / 2), t.y += a.lineHeight + i.footerSpacing;
    }
  }
  drawBackground(t, e, i, s) {
    const { xAlign: o, yAlign: a } = this, { x: r, y: l } = t, { width: c, height: u } = i, { topLeft: h, topRight: d, bottomLeft: f, bottomRight: p } = be(s.cornerRadius);
    e.fillStyle = s.backgroundColor, e.strokeStyle = s.borderColor, e.lineWidth = s.borderWidth, e.beginPath(), e.moveTo(r + h, l), a === "top" && this.drawCaret(t, e, i, s), e.lineTo(r + c - d, l), e.quadraticCurveTo(r + c, l, r + c, l + d), a === "center" && o === "right" && this.drawCaret(t, e, i, s), e.lineTo(r + c, l + u - p), e.quadraticCurveTo(r + c, l + u, r + c - p, l + u), a === "bottom" && this.drawCaret(t, e, i, s), e.lineTo(r + f, l + u), e.quadraticCurveTo(r, l + u, r, l + u - f), a === "center" && o === "left" && this.drawCaret(t, e, i, s), e.lineTo(r, l + h), e.quadraticCurveTo(r, l, r + h, l), e.closePath(), e.fill(), s.borderWidth > 0 && e.stroke();
  }
  _updateAnimationTarget(t) {
    const e = this.chart, i = this.$animations, s = i && i.x, o = i && i.y;
    if (s || o) {
      const a = Ue[t.position].call(this, this._active, this._eventPosition);
      if (!a)
        return;
      const r = this._size = co(this, t), l = Object.assign({}, a, this._size), c = uo(e, t, l), u = ho(t, l, c, e);
      (s._to !== u.x || o._to !== u.y) && (this.xAlign = c.xAlign, this.yAlign = c.yAlign, this.width = r.width, this.height = r.height, this.caretX = a.x, this.caretY = a.y, this._resolveAnimations().update(this, u));
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
    const a = Ot(e.padding), r = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
    e.enabled && r && (t.save(), t.globalAlpha = i, this.drawBackground(o, t, s, e), ra(t, e.textDirection), o.y += a.top, this.drawTitle(o, t, e), this.drawBody(o, t, e), this.drawFooter(o, t, e), la(t, e.textDirection), t.restore());
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
    }), o = !En(i, s), a = this._positionChanged(s, e);
    (o || a) && (this._active = s, this._eventPosition = e, this._ignoreReplayEvents = !0, this.update(!0));
  }
  handleEvent(t, e, i = !0) {
    if (e && this._ignoreReplayEvents)
      return !1;
    this._ignoreReplayEvents = !1;
    const s = this.options, o = this._active || [], a = this._getActiveElements(t, o, e, i), r = this._positionChanged(a, t), l = e || !En(a, o) || r;
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
    const { caretX: i, caretY: s, options: o } = this, a = Ue[o.position].call(this, t, e);
    return a !== !1 && (i !== a.x || s !== a.y);
  }
}
var pd = {
  id: "tooltip",
  _element: go,
  positioners: Ue,
  afterInit(n, t, e) {
    e && (n.tooltip = new go({
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
    callbacks: Va
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
}, gd = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  Colors: Oh,
  Decimation: Dh,
  Filler: Zh,
  Legend: id,
  SubTitle: ad,
  Title: od,
  Tooltip: pd
});
const md = (n, t, e, i) => (typeof t == "string" ? (e = n.push(t) - 1, i.unshift({
  index: e,
  label: t
})) : isNaN(t) && (e = null), e);
function bd(n, t, e, i) {
  const s = n.indexOf(t);
  if (s === -1)
    return md(n, t, e, i);
  const o = n.lastIndexOf(t);
  return s !== o ? e : s;
}
const yd = (n, t) => n === null ? null : St(Math.round(n), 0, t);
function mo(n) {
  const t = this.getLabels();
  return n >= 0 && n < t.length ? t[n] : n;
}
class vd extends Se {
  static id = "category";
  static defaults = {
    ticks: {
      callback: mo
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
    if (X(t))
      return null;
    const i = this.getLabels();
    return e = isFinite(e) && i[e] === t ? e : bd(i, t, U(e, t), this._addedLabels), yd(e, i.length - 1);
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
    return mo.call(this, t);
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
function xd(n, t) {
  const e = [], { bounds: s, step: o, min: a, max: r, precision: l, count: c, maxTicks: u, maxDigits: h, includeBounds: d } = n, f = o || 1, p = u - 1, { min: g, max: m } = t, b = !X(a), x = !X(r), S = !X(c), y = (m - g) / (h + 1);
  let w = cs((m - g) / p / f) * f, O, k, T, P;
  if (w < 1e-14 && !b && !x)
    return [
      {
        value: g
      },
      {
        value: m
      }
    ];
  P = Math.ceil(m / w) - Math.floor(g / w), P > p && (w = cs(P * w / p / f) * f), X(l) || (O = Math.pow(10, l), w = Math.ceil(w * O) / O), s === "ticks" ? (k = Math.floor(g / w) * w, T = Math.ceil(m / w) * w) : (k = g, T = m), b && x && o && nl((r - a) / o, w / 1e3) ? (P = Math.round(Math.min((r - a) / w, u)), w = (r - a) / P, k = a, T = r) : S ? (k = b ? a : k, T = x ? r : T, P = c - 1, w = (T - k) / P) : (P = (T - k) / w, Xe(P, Math.round(P), w / 1e3) ? P = Math.round(P) : P = Math.ceil(P));
  const A = Math.max(us(w), us(k));
  O = Math.pow(10, X(l) ? A : l), k = Math.round(k * O) / O, T = Math.round(T * O) / O;
  let N = 0;
  for (b && (d && k !== a ? (e.push({
    value: a
  }), k < a && N++, Xe(Math.round((k + N * w) * O) / O, a, bo(a, y, n)) && N++) : k < a && N++); N < P; ++N) {
    const B = Math.round((k + N * w) * O) / O;
    if (x && B > r)
      break;
    e.push({
      value: B
    });
  }
  return x && d && T !== r ? e.length && Xe(e[e.length - 1].value, r, bo(r, y, n)) ? e[e.length - 1].value = r : e.push({
    value: r
  }) : (!x || T === r) && e.push({
    value: T
  }), e;
}
function bo(n, t, { horizontal: e, minRotation: i }) {
  const s = Bt(i), o = (e ? Math.sin(s) : Math.cos(s)) || 1e-3, a = 0.75 * t * ("" + n).length;
  return Math.min(t / o, a);
}
class zn extends Se {
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._endValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    return X(t) || (typeof t == "number" || t instanceof Number) && !isFinite(+t) ? null : +t;
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
    }, o = this._range || this, a = xd(s, o);
    return t.bounds === "ticks" && $o(a, this, "value"), t.reverse ? (a.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), a;
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
    return rn(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class _d extends zn {
  static id = "linear";
  static defaults = {
    ticks: {
      callback: $n.formatters.numeric
    }
  };
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!0);
    this.min = ft(t) ? t : 0, this.max = ft(e) ? e : 1, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(), e = t ? this.width : this.height, i = Bt(this.options.ticks.minRotation), s = (t ? Math.sin(i) : Math.cos(i)) || 1e-3, o = this._resolveTickFontOptions(0);
    return Math.ceil(e / Math.min(40, o.lineHeight / s));
  }
  getPixelForValue(t) {
    return t === null ? NaN : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
const nn = (n) => Math.floor(ne(n)), fe = (n, t) => Math.pow(10, nn(n) + t);
function yo(n) {
  return n / Math.pow(10, nn(n)) === 1;
}
function vo(n, t, e) {
  const i = Math.pow(10, e), s = Math.floor(n / i);
  return Math.ceil(t / i) - s;
}
function Sd(n, t) {
  const e = t - n;
  let i = nn(e);
  for (; vo(n, t, i) > 10; )
    i++;
  for (; vo(n, t, i) < 10; )
    i--;
  return Math.min(i, nn(n));
}
function wd(n, { min: t, max: e }) {
  t = Rt(n.min, t);
  const i = [], s = nn(t);
  let o = Sd(t, e), a = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  const r = Math.pow(10, o), l = s > o ? Math.pow(10, s) : 0, c = Math.round((t - l) * a) / a, u = Math.floor((t - l) / r / 10) * r * 10;
  let h = Math.floor((c - u) / Math.pow(10, o)), d = Rt(n.min, Math.round((l + u + h * Math.pow(10, o)) * a) / a);
  for (; d < e; )
    i.push({
      value: d,
      major: yo(d),
      significand: h
    }), h >= 10 ? h = h < 15 ? 15 : 20 : h++, h >= 20 && (o++, h = 2, a = o >= 0 ? 1 : a), d = Math.round((l + u + h * Math.pow(10, o)) * a) / a;
  const f = Rt(n.max, d);
  return i.push({
    value: f,
    major: yo(f),
    significand: h
  }), i;
}
class kd extends Se {
  static id = "logarithmic";
  static defaults = {
    ticks: {
      callback: $n.formatters.logarithmic,
      major: {
        enabled: !0
      }
    }
  };
  constructor(t) {
    super(t), this.start = void 0, this.end = void 0, this._startValue = void 0, this._valueRange = 0;
  }
  parse(t, e) {
    const i = zn.prototype.parse.apply(this, [
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
    this.min = ft(t) ? Math.max(0, t) : null, this.max = ft(e) ? Math.max(0, e) : null, this.options.beginAtZero && (this._zero = !0), this._zero && this.min !== this._suggestedMin && !ft(this._userMin) && (this.min = t === fe(this.min, 0) ? fe(this.min, -1) : fe(this.min, 0)), this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: e } = this.getUserBounds();
    let i = this.min, s = this.max;
    const o = (r) => i = t ? i : r, a = (r) => s = e ? s : r;
    i === s && (i <= 0 ? (o(1), a(10)) : (o(fe(i, -1)), a(fe(s, 1)))), i <= 0 && o(fe(s, -1)), s <= 0 && a(fe(i, 1)), this.min = i, this.max = s;
  }
  buildTicks() {
    const t = this.options, e = {
      min: this._userMin,
      max: this._userMax
    }, i = wd(e, this);
    return t.bounds === "ticks" && $o(i, this, "value"), t.reverse ? (i.reverse(), this.start = this.max, this.end = this.min) : (this.start = this.min, this.end = this.max), i;
  }
  getLabelForValue(t) {
    return t === void 0 ? "0" : rn(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(), this._startValue = ne(t), this._valueRange = ne(this.max) - ne(t);
  }
  getPixelForValue(t) {
    return (t === void 0 || t === 0) && (t = this.min), t === null || isNaN(t) ? NaN : this.getPixelForDecimal(t === this.min ? 0 : (ne(t) - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    const e = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + e * this._valueRange);
  }
}
function Ci(n) {
  const t = n.ticks;
  if (t.display && n.display) {
    const e = Ot(t.backdropPadding);
    return U(t.font && t.font.size, rt.font.size) + e.height;
  }
  return 0;
}
function Md(n, t, e) {
  return e = at(e) ? e : [
    e
  ], {
    w: vl(n, t.string, e),
    h: e.length * t.lineHeight
  };
}
function xo(n, t, e, i, s) {
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
function Cd(n) {
  const t = {
    l: n.left + n._padding.left,
    r: n.right - n._padding.right,
    t: n.top + n._padding.top,
    b: n.bottom - n._padding.bottom
  }, e = Object.assign({}, t), i = [], s = [], o = n._pointLabels.length, a = n.options.pointLabels, r = a.centerPointLabels ? Z / o : 0;
  for (let l = 0; l < o; l++) {
    const c = a.setContext(n.getPointLabelContext(l));
    s[l] = c.padding;
    const u = n.getPointPosition(l, n.drawingArea + s[l], r), h = vt(c.font), d = Md(n.ctx, h, n._pointLabels[l]);
    i[l] = d;
    const f = Mt(n.getIndexAngle(l) + r), p = Math.round(Ii(f)), g = xo(p, u.x, d.w, 0, 180), m = xo(p, u.y, d.h, 90, 270);
    Od(e, t, f, g, m);
  }
  n.setCenterPoint(t.l - e.l, e.r - t.r, t.t - e.t, e.b - t.b), n._pointLabelItems = Ld(n, i, s);
}
function Od(n, t, e, i, s) {
  const o = Math.abs(Math.sin(e)), a = Math.abs(Math.cos(e));
  let r = 0, l = 0;
  i.start < t.l ? (r = (t.l - i.start) / o, n.l = Math.min(n.l, t.l - r)) : i.end > t.r && (r = (i.end - t.r) / o, n.r = Math.max(n.r, t.r + r)), s.start < t.t ? (l = (t.t - s.start) / a, n.t = Math.min(n.t, t.t - l)) : s.end > t.b && (l = (s.end - t.b) / a, n.b = Math.max(n.b, t.b + l));
}
function Td(n, t, e) {
  const i = n.drawingArea, { extra: s, additionalAngle: o, padding: a, size: r } = e, l = n.getPointPosition(t, i + s + a, o), c = Math.round(Ii(Mt(l.angle + bt))), u = Rd(l.y, r.h, c), h = Dd(c), d = Ad(l.x, r.w, h);
  return {
    visible: !0,
    x: l.x,
    y: u,
    textAlign: h,
    left: d,
    top: u,
    right: d + r.w,
    bottom: u + r.h
  };
}
function Pd(n, t) {
  if (!t)
    return !0;
  const { left: e, top: i, right: s, bottom: o } = n;
  return !(Jt({
    x: e,
    y: i
  }, t) || Jt({
    x: e,
    y: o
  }, t) || Jt({
    x: s,
    y: i
  }, t) || Jt({
    x: s,
    y: o
  }, t));
}
function Ld(n, t, e) {
  const i = [], s = n._pointLabels.length, o = n.options, { centerPointLabels: a, display: r } = o.pointLabels, l = {
    extra: Ci(o) / 2,
    additionalAngle: a ? Z / s : 0
  };
  let c;
  for (let u = 0; u < s; u++) {
    l.padding = e[u], l.size = t[u];
    const h = Td(n, u, l);
    i.push(h), r === "auto" && (h.visible = Pd(h, c), h.visible && (c = h));
  }
  return i;
}
function Dd(n) {
  return n === 0 || n === 180 ? "center" : n < 180 ? "left" : "right";
}
function Ad(n, t, e) {
  return e === "right" ? n -= t : e === "center" && (n -= t / 2), n;
}
function Rd(n, t, e) {
  return e === 90 || e === 270 ? n -= t / 2 : (e > 270 || e < 90) && (n -= t), n;
}
function Ed(n, t, e) {
  const { left: i, top: s, right: o, bottom: a } = e, { backdropColor: r } = t;
  if (!X(r)) {
    const l = be(t.borderRadius), c = Ot(t.backdropPadding);
    n.fillStyle = r;
    const u = i - c.left, h = s - c.top, d = o - i + c.width, f = a - s + c.height;
    Object.values(l).some((p) => p !== 0) ? (n.beginPath(), tn(n, {
      x: u,
      y: h,
      w: d,
      h: f,
      radius: l
    }), n.fill()) : n.fillRect(u, h, d, f);
  }
}
function Vd(n, t) {
  const { ctx: e, options: { pointLabels: i } } = n;
  for (let s = t - 1; s >= 0; s--) {
    const o = n._pointLabelItems[s];
    if (!o.visible)
      continue;
    const a = i.setContext(n.getPointLabelContext(s));
    Ed(e, a, o);
    const r = vt(a.font), { x: l, y: c, textAlign: u } = o;
    xe(e, n._pointLabels[s], l, c + r.lineHeight / 2, r, {
      color: a.color,
      textAlign: u,
      textBaseline: "middle"
    });
  }
}
function Ia(n, t, e, i) {
  const { ctx: s } = n;
  if (e)
    s.arc(n.xCenter, n.yCenter, t, 0, ot);
  else {
    let o = n.getPointPosition(0, t);
    s.moveTo(o.x, o.y);
    for (let a = 1; a < i; a++)
      o = n.getPointPosition(a, t), s.lineTo(o.x, o.y);
  }
}
function Id(n, t, e, i, s) {
  const o = n.ctx, a = t.circular, { color: r, lineWidth: l } = t;
  !a && !i || !r || !l || e < 0 || (o.save(), o.strokeStyle = r, o.lineWidth = l, o.setLineDash(s.dash || []), o.lineDashOffset = s.dashOffset, o.beginPath(), Ia(n, e, a, i), o.closePath(), o.stroke(), o.restore());
}
function Fd(n, t, e) {
  return le(n, {
    label: e,
    index: t,
    type: "pointLabel"
  });
}
class Nd extends zn {
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
      callback: $n.formatters.numeric
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
    const t = this._padding = Ot(Ci(this.options) / 2), e = this.width = this.maxWidth - t.width, i = this.height = this.maxHeight - t.height;
    this.xCenter = Math.floor(this.left + e / 2 + t.left), this.yCenter = Math.floor(this.top + i / 2 + t.top), this.drawingArea = Math.floor(Math.min(e, i) / 2);
  }
  determineDataLimits() {
    const { min: t, max: e } = this.getMinMax(!1);
    this.min = ft(t) && !isNaN(t) ? t : 0, this.max = ft(e) && !isNaN(e) ? e : 0, this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / Ci(this.options));
  }
  generateTickLabels(t) {
    zn.prototype.generateTickLabels.call(this, t), this._pointLabels = this.getLabels().map((e, i) => {
      const s = nt(this.options.pointLabels.callback, [
        e,
        i
      ], this);
      return s || s === 0 ? s : "";
    }).filter((e, i) => this.chart.getDataVisibility(i));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display ? Cd(this) : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, e, i, s) {
    this.xCenter += Math.floor((t - e) / 2), this.yCenter += Math.floor((i - s) / 2), this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(t, e, i, s));
  }
  getIndexAngle(t) {
    const e = ot / (this._pointLabels.length || 1), i = this.options.startAngle || 0;
    return Mt(t * e + Bt(i));
  }
  getDistanceFromCenterForValue(t) {
    if (X(t))
      return NaN;
    const e = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * e : (t - this.min) * e;
  }
  getValueForDistanceFromCenter(t) {
    if (X(t))
      return NaN;
    const e = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - e : this.min + e;
  }
  getPointLabelContext(t) {
    const e = this._pointLabels || [];
    if (t >= 0 && t < e.length) {
      const i = e[t];
      return Fd(this.getContext(), t, i);
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
      i.save(), i.beginPath(), Ia(this, this.getDistanceFromCenterForValue(this._endValue), e, this._pointLabels.length), i.closePath(), i.fillStyle = t, i.fill(), i.restore();
    }
  }
  drawGrid() {
    const t = this.ctx, e = this.options, { angleLines: i, grid: s, border: o } = e, a = this._pointLabels.length;
    let r, l, c;
    if (e.pointLabels.display && Vd(this, a), s.display && this.ticks.forEach((u, h) => {
      if (h !== 0 || h === 0 && this.min < 0) {
        l = this.getDistanceFromCenterForValue(u.value);
        const d = this.getContext(h), f = s.setContext(d), p = o.setContext(d);
        Id(this, f, l, a, p);
      }
    }), i.display) {
      for (t.save(), r = a - 1; r >= 0; r--) {
        const u = i.setContext(this.getPointLabelContext(r)), { color: h, lineWidth: d } = u;
        !d || !h || (t.lineWidth = d, t.strokeStyle = h, t.setLineDash(u.borderDash), t.lineDashOffset = u.borderDashOffset, l = this.getDistanceFromCenterForValue(e.reverse ? this.min : this.max), c = this.getPointPosition(r, l), t.beginPath(), t.moveTo(this.xCenter, this.yCenter), t.lineTo(c.x, c.y), t.stroke());
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
      const c = i.setContext(this.getContext(l)), u = vt(c.font);
      if (o = this.getDistanceFromCenterForValue(this.ticks[l].value), c.showLabelBackdrop) {
        t.font = u.string, a = t.measureText(r.label).width, t.fillStyle = c.backdropColor;
        const h = Ot(c.backdropPadding);
        t.fillRect(-a / 2 - h.left, -o - u.size / 2 - h.top, a + h.width, u.size + h.height);
      }
      xe(t, r.label, 0, -o, u, {
        color: c.color,
        strokeColor: c.textStrokeColor,
        strokeWidth: c.textStrokeWidth
      });
    }), t.restore();
  }
  drawTitle() {
  }
}
const Zn = {
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
}, Dt = /* @__PURE__ */ Object.keys(Zn);
function _o(n, t) {
  return n - t;
}
function So(n, t) {
  if (X(t))
    return null;
  const e = n._adapter, { parser: i, round: s, isoWeekday: o } = n._parseOpts;
  let a = t;
  return typeof i == "function" && (a = i(a)), ft(a) || (a = typeof i == "string" ? e.parse(a, i) : e.parse(a)), a === null ? null : (s && (a = s === "week" && (Te(o) || o === !0) ? e.startOf(a, "isoWeek", o) : e.startOf(a, s)), +a);
}
function wo(n, t, e, i) {
  const s = Dt.length;
  for (let o = Dt.indexOf(n); o < s - 1; ++o) {
    const a = Zn[Dt[o]], r = a.steps ? a.steps : Number.MAX_SAFE_INTEGER;
    if (a.common && Math.ceil((e - t) / (r * a.size)) <= i)
      return Dt[o];
  }
  return Dt[s - 1];
}
function Bd(n, t, e, i, s) {
  for (let o = Dt.length - 1; o >= Dt.indexOf(e); o--) {
    const a = Dt[o];
    if (Zn[a].common && n._adapter.diff(s, i, a) >= t - 1)
      return a;
  }
  return Dt[e ? Dt.indexOf(e) : 0];
}
function jd(n) {
  for (let t = Dt.indexOf(n) + 1, e = Dt.length; t < e; ++t)
    if (Zn[Dt[t]].common)
      return Dt[t];
}
function ko(n, t, e) {
  if (!e)
    n[t] = !0;
  else if (e.length) {
    const { lo: i, hi: s } = Fi(e, t), o = e[i] >= t ? e[i] : e[s];
    n[o] = !0;
  }
}
function zd(n, t, e, i) {
  const s = n._adapter, o = +s.startOf(t[0].value, i), a = t[t.length - 1].value;
  let r, l;
  for (r = o; r <= a; r = +s.add(r, 1, i))
    l = e[r], l >= 0 && (t[l].major = !0);
  return t;
}
function Mo(n, t, e) {
  const i = [], s = {}, o = t.length;
  let a, r;
  for (a = 0; a < o; ++a)
    r = t[a], s[r] = a, i.push({
      value: r,
      major: !1
    });
  return o === 0 || !e ? i : zd(n, i, s, e);
}
class Oi extends Se {
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
    const i = t.time || (t.time = {}), s = this._adapter = new Wc._date(t.adapters.date);
    s.init(e), Ye(i.displayFormats, s.formats()), this._parseOpts = {
      parser: i.parser,
      round: i.round,
      isoWeekday: i.isoWeekday
    }, super.init(t), this._normalized = e.normalized;
  }
  parse(t, e) {
    return t === void 0 ? null : So(this, t);
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
    const o = this.min, a = this.max, r = al(s, o, a);
    return this._unit = e.unit || (i.autoSkip ? wo(e.minUnit, this.min, this.max, this._getLabelCapacity(o)) : Bd(this, r.length, e.minUnit, this.min, this.max)), this._majorUnit = !i.major.enabled || this._unit === "year" ? void 0 : jd(this._unit), this.initOffsets(s), t.reverse && r.reverse(), Mo(this, r, this._majorUnit);
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
    const t = this._adapter, e = this.min, i = this.max, s = this.options, o = s.time, a = o.unit || wo(o.minUnit, e, i, this._getLabelCapacity(e)), r = U(s.ticks.stepSize, 1), l = a === "week" ? o.isoWeekday : !1, c = Te(l) || l === !0, u = {};
    let h = e, d, f;
    if (c && (h = +t.startOf(h, "isoWeek", l)), h = +t.startOf(h, c ? "day" : a), t.diff(i, e, a) > 1e5 * r)
      throw new Error(e + " and " + i + " are too far apart with stepSize of " + r + " " + a);
    const p = s.ticks.source === "data" && this.getDataTimestamps();
    for (d = h, f = 0; d < i; d = +t.add(d, r, a), f++)
      ko(u, d, p);
    return (d === i || s.bounds === "ticks" || f === 1) && ko(u, d, p), Object.keys(u).sort(_o).map((g) => +g);
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
      return nt(a, [
        t,
        e,
        i
      ], this);
    const r = o.time.displayFormats, l = this._unit, c = this._majorUnit, u = l && r[l], h = c && r[c], d = i[e], f = c && h && d && d.major;
    return this._adapter.format(t, s || (f ? h : u));
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
    const e = this.options.ticks, i = this.ctx.measureText(t).width, s = Bt(this.isHorizontal() ? e.maxRotation : e.minRotation), o = Math.cos(s), a = Math.sin(s), r = this._resolveTickFontOptions(0).size;
    return {
      w: i * o + r * a,
      h: i * a + r * o
    };
  }
  _getLabelCapacity(t) {
    const e = this.options.time, i = e.displayFormats, s = i[e.unit] || i.millisecond, o = this._tickFormatFunction(t, 0, Mo(this, [
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
      t.push(So(this, s[e]));
    return this._cache.labels = this._normalized ? t : this.normalize(t);
  }
  normalize(t) {
    return Xo(t.sort(_o));
  }
}
function Pn(n, t, e) {
  let i = 0, s = n.length - 1, o, a, r, l;
  e ? (t >= n[i].pos && t <= n[s].pos && ({ lo: i, hi: s } = Zt(n, "pos", t)), { pos: o, time: r } = n[i], { pos: a, time: l } = n[s]) : (t >= n[i].time && t <= n[s].time && ({ lo: i, hi: s } = Zt(n, "time", t)), { time: o, pos: r } = n[i], { time: a, pos: l } = n[s]);
  const c = a - o;
  return c ? r + (l - r) * (t - o) / c : r;
}
class Wd extends Oi {
  static id = "timeseries";
  static defaults = Oi.defaults;
  constructor(t) {
    super(t), this._table = [], this._minPos = void 0, this._tableRange = void 0;
  }
  initOffsets() {
    const t = this._getTimestampsForTable(), e = this._table = this.buildLookupTable(t);
    this._minPos = Pn(e, this.min), this._tableRange = Pn(e, this.max) - this._minPos, super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: e, max: i } = this, s = [], o = [];
    let a, r, l, c, u;
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
      u = s[a + 1], l = s[a - 1], c = s[a], Math.round((u + l) / 2) !== c && o.push({
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
    return (Pn(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const e = this._offsets, i = this.getDecimalForPixel(t) / e.factor - e.end;
    return Pn(this._table, i * this._tableRange + this._minPos, !0);
  }
}
var Hd = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CategoryScale: vd,
  LinearScale: _d,
  LogarithmicScale: kd,
  RadialLinearScale: Nd,
  TimeScale: Oi,
  TimeSeriesScale: Wd
});
const $d = [
  zc,
  xh,
  gd,
  Hd
], Co = (n, t) => {
  for (const e of Object.keys(t))
    n.on(e, t[e]);
}, Fa = (n) => {
  for (const t of Object.keys(n)) {
    const e = n[t];
    e && te(e.cancel) && e.cancel();
  }
}, Ud = (n) => !n || typeof n.charAt != "function" ? n : n.charAt(0).toUpperCase() + n.slice(1), te = (n) => typeof n == "function", gt = (n, t, e) => {
  for (const i in e) {
    const s = "set" + Ud(i);
    n[s] ? qt(
      () => e[i],
      (o, a) => {
        n[s](o, a);
      }
    ) : t[s] && qt(
      () => e[i],
      (o) => {
        t[s](o);
      }
    );
  }
}, ht = (n, t, e = {}) => {
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
}, Yd = async (n) => {
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
}, Ln = (n) => {
  const t = W(
    (...i) => console.warn(`Method ${n} has been invoked without being replaced`)
  ), e = (...i) => t.value(...i);
  return e.wrapped = t, Nt(n, e), e;
}, Dn = (n, t) => n.wrapped.value = t, lt = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, tt = (n) => {
  const t = ut(n);
  if (t === void 0)
    throw new Error(
      `Attempt to inject ${n.description} before it was provided.`
    );
  return t;
}, mt = Symbol(
  "useGlobalLeaflet"
), Tt = Symbol("addLayer"), Jn = Symbol("removeLayer"), ln = Symbol(
  "registerControl"
), Na = Symbol(
  "registerLayerControl"
), Ba = Symbol(
  "canSetParentHtml"
), ja = Symbol("setParentHtml"), za = Symbol("setIcon"), Wa = Symbol("bindPopup"), Ha = Symbol("bindTooltip"), $a = Symbol("unbindPopup"), Ua = Symbol("unbindTooltip"), cn = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, un = (n) => ({ options: n.options, methods: {} }), De = {
  ...cn,
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
}, hn = (n, t, e) => {
  const i = tt(Tt), s = tt(Jn), { options: o, methods: a } = un(n), r = ht(
    n,
    De,
    o
  ), l = () => i({ leafletObject: t.value }), c = () => s({ leafletObject: t.value }), u = {
    ...a,
    setAttribution(h) {
      c(), t.value.options.attribution = h, n.visible && l();
    },
    setName() {
      c(), n.visible && l();
    },
    setLayerType() {
      c(), n.visible && l();
    },
    setVisible(h) {
      t.value && (h ? l() : c());
    },
    bindPopup(h) {
      if (!t.value || !te(t.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      t.value.bindPopup(h);
    },
    bindTooltip(h) {
      if (!t.value || !te(t.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      t.value.bindTooltip(h);
    },
    unbindTooltip() {
      t.value && (te(t.value.closeTooltip) && t.value.closeTooltip(), te(t.value.unbindTooltip) && t.value.unbindTooltip());
    },
    unbindPopup() {
      t.value && (te(t.value.closePopup) && t.value.closePopup(), te(t.value.unbindPopup) && t.value.unbindPopup());
    },
    updateVisibleProp(h) {
      e.emit("update:visible", h);
    }
  };
  return Nt(Wa, u.bindPopup), Nt(Ha, u.bindTooltip), Nt($a, u.unbindPopup), Nt(Ua, u.unbindTooltip), Di(() => {
    u.unbindPopup(), u.unbindTooltip(), c();
  }), { options: r, methods: u };
}, $t = (n, t) => {
  if (n && t.default)
    return _e("div", { style: { display: "none" } }, t.default());
}, Ya = {
  ...De,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, Xd = (n, t, e) => {
  const { options: i, methods: s } = hn(
    n,
    t,
    e
  );
  return { options: ht(
    n,
    Ya,
    i
  ), methods: s };
}, qi = {
  ...Ya,
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
}, Xa = (n, t, e) => {
  const { options: i, methods: s } = Xd(n, t, e), o = ht(
    n,
    qi,
    i
  ), a = tt(Jn), r = {
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
  return on(() => {
    a({ leafletObject: t.value });
  }), { options: o, methods: r };
}, Ki = {
  ...qi,
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
}, Ga = (n, t, e) => {
  const { options: i, methods: s } = Xa(
    n,
    t,
    e
  ), o = ht(
    n,
    Ki,
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
}, qa = {
  ...Ki,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, Gd = (n, t, e) => {
  const { options: i, methods: s } = Ga(n, t, e), o = ht(
    n,
    qa,
    i
  ), a = {
    ...s
  };
  return { options: o, methods: a };
};
ct({
  name: "LCircle",
  props: qa,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = tt(Tt), { options: a, methods: r } = Gd(n, e, t);
    return pt(async () => {
      const { circle: l } = s ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(l(n.latLng, a));
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), gt(r, e.value, n), o({
        ...n,
        ...r,
        leafletObject: e.value
      }), i.value = !0, it(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
const qd = ct({
  name: "LCircleMarker",
  props: Ki,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = tt(Tt), { options: a, methods: r } = Ga(
      n,
      e,
      t
    );
    return pt(async () => {
      const { circleMarker: l } = s ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        l(n.latLng, a)
      );
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), gt(r, e.value, n), o({
        ...n,
        ...r,
        leafletObject: e.value
      }), i.value = !0, it(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
}), Ae = {
  ...cn,
  position: {
    type: String
  }
}, dn = (n, t) => {
  const { options: e, methods: i } = un(n), s = ht(
    n,
    Ae,
    e
  ), o = {
    ...i,
    setPosition(a) {
      t.value && t.value.setPosition(a);
    }
  };
  return Di(() => {
    t.value && t.value.remove();
  }), { options: s, methods: o };
}, Kd = (n) => n.default ? _e("div", { ref: "root" }, n.default()) : null;
ct({
  name: "LControl",
  props: {
    ...Ae,
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
    const e = W(), i = W(), s = ut(mt), o = tt(ln), { options: a, methods: r } = dn(n, e);
    return pt(async () => {
      const { Control: l, DomEvent: c } = s ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js"), u = l.extend({
        onAdd() {
          return i.value;
        }
      });
      e.value = yt(new u(a)), gt(r, e.value, n), o({ leafletObject: e.value }), n.disableClickPropagation && i.value && c.disableClickPropagation(i.value), n.disableScrollPropagation && i.value && c.disableScrollPropagation(i.value), it(() => t.emit("ready", e.value));
    }), { root: i, leafletObject: e };
  },
  render() {
    return Kd(this.$slots);
  }
});
const Ka = {
  ...Ae,
  prefix: {
    type: String
  }
}, Zd = (n, t) => {
  const { options: e, methods: i } = dn(
    n,
    t
  ), s = ht(
    n,
    Ka,
    e
  ), o = {
    ...i,
    setPrefix(a) {
      t.value.setPrefix(a);
    }
  };
  return { options: s, methods: o };
};
ct({
  name: "LControlAttribution",
  props: Ka,
  setup(n, t) {
    const e = W(), i = ut(mt), s = tt(ln), { options: o, methods: a } = Zd(n, e);
    return pt(async () => {
      const { control: r } = i ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        r.attribution(o)
      ), gt(a, e.value, n), s({ leafletObject: e.value }), it(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const Za = {
  ...Ae,
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
}, Jd = (n, t) => {
  const { options: e } = dn(n, t);
  return { options: ht(
    n,
    Za,
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
ct({
  name: "LControlLayers",
  props: Za,
  setup(n, t) {
    const e = W(), i = ut(mt), s = tt(Na), { options: o, methods: a } = Jd(n, e);
    return pt(async () => {
      const { control: r } = i ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        r.layers(void 0, void 0, o)
      ), gt(a, e.value, n), s({
        ...n,
        ...a,
        leafletObject: e.value
      }), it(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const Ja = {
  ...Ae,
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
}, Qd = (n, t) => {
  const { options: e, methods: i } = dn(
    n,
    t
  );
  return { options: ht(
    n,
    Ja,
    e
  ), methods: i };
};
ct({
  name: "LControlScale",
  props: Ja,
  setup(n, t) {
    const e = W(), i = ut(mt), s = tt(ln), { options: o, methods: a } = Qd(n, e);
    return pt(async () => {
      const { control: r } = i ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(r.scale(o)), gt(a, e.value, n), s({ leafletObject: e.value }), it(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const Qa = {
  ...Ae,
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
}, tf = (n, t) => {
  const { options: e, methods: i } = dn(
    n,
    t
  );
  return { options: ht(
    n,
    Qa,
    e
  ), methods: i };
};
ct({
  name: "LControlZoom",
  props: Qa,
  setup(n, t) {
    const e = W(), i = ut(mt), s = tt(ln), { options: o, methods: a } = tf(n, e);
    return pt(async () => {
      const { control: r } = i ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(r.zoom(o)), gt(a, e.value, n), s({ leafletObject: e.value }), it(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
const Qn = {
  ...De
}, Zi = (n, t, e) => {
  const { options: i, methods: s } = hn(
    n,
    t,
    e
  ), o = ht(
    n,
    Qn,
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
  return Nt(Tt, a.addLayer), Nt(Jn, a.removeLayer), { options: o, methods: a };
}, tr = {
  ...Qn
}, ef = (n, t, e) => {
  const { options: i, methods: s } = Zi(
    n,
    t,
    e
  ), o = ht(
    n,
    tr,
    i
  ), a = {
    ...s
  };
  return { options: o, methods: a };
};
ct({
  props: tr,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = tt(Tt), { methods: a, options: r } = ef(
      n,
      e,
      t
    );
    return pt(async () => {
      const { featureGroup: l } = s ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        l(void 0, r)
      );
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), gt(a, e.value, n), o({
        ...n,
        ...a,
        leafletObject: e.value
      }), i.value = !0, it(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
const er = {
  ...Qn,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, nf = (n, t, e) => {
  const { options: i, methods: s } = Zi(
    n,
    t,
    e
  ), o = ht(
    n,
    er,
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
ct({
  props: er,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = tt(Tt), { methods: a, options: r } = nf(n, e, t);
    return pt(async () => {
      const { geoJSON: l } = s ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(l(n.geojson, r));
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), gt(a, e.value, n), o({
        ...n,
        ...a,
        leafletObject: e.value
      }), i.value = !0, it(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
const Ji = {
  ...De,
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
}, nr = (n, t, e) => {
  const { options: i, methods: s } = hn(
    n,
    t,
    e
  ), o = ht(
    n,
    Ji,
    i
  ), a = {
    ...s,
    setTileComponent() {
      var r;
      (r = t.value) == null || r.redraw();
    }
  };
  return Di(() => {
    t.value.off();
  }), { options: o, methods: a };
}, sf = (n, t, e, i) => n.extend({
  initialize(s) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), e.setOptions(this, s);
  },
  createTile(s) {
    const o = this._tileCoordsToKey(s);
    this.tileComponents[o] = t.create("div");
    const a = _e({ setup: i, props: ["coords"] }, { coords: s });
    return vr(a, this.tileComponents[o]), this.tileComponents[o];
  },
  _unloadTile(s) {
    const o = this._tileCoordsToKey(s.coords);
    this.tileComponents[o] && (this.tileComponents[o].innerHTML = "", this.tileComponents[o] = void 0);
  }
});
ct({
  props: {
    ...Ji,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(n, t) {
    const e = W(), i = W(null), s = W(!1), o = ut(mt), a = tt(Tt), { options: r, methods: l } = nr(n, e, t);
    return pt(async () => {
      const { GridLayer: c, DomUtil: u, Util: h } = o ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js"), d = sf(
        c,
        u,
        h,
        n.childRender
      );
      e.value = yt(new d(r));
      const { listeners: f } = wt(t.attrs);
      e.value.on(f), gt(l, e.value, n), a({
        ...n,
        ...l,
        leafletObject: e.value
      }), s.value = !0, it(() => t.emit("ready", e.value));
    }), { root: i, ready: s, leafletObject: e };
  },
  render() {
    return this.ready ? _e("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const Oo = {
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
ct({
  name: "LIcon",
  props: {
    ...Oo,
    ...cn
  },
  setup(n, t) {
    const e = W(), i = ut(mt), s = tt(Ba), o = tt(ja), a = tt(za);
    let r, l, c, u, h;
    const d = (m, b, x) => {
      const S = m && m.innerHTML;
      if (!b) {
        x && h && s() && o(S);
        return;
      }
      const { listeners: y } = wt(t.attrs);
      h && l(h, y);
      const { options: w } = un(n), O = ht(
        n,
        Oo,
        w
      );
      S && (O.html = S), h = O.html ? c(O) : u(O), r(h, y), a(h);
    }, f = () => {
      it(() => d(e.value, !0, !1));
    }, p = () => {
      it(() => d(e.value, !1, !0));
    }, g = {
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
    return pt(async () => {
      const {
        DomEvent: m,
        divIcon: b,
        icon: x
      } = i ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r = m.on, l = m.off, c = b, u = x, gt(g, {}, n), new MutationObserver(p).observe(e.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), f();
    }), { root: e };
  },
  render() {
    const n = this.$slots.default ? this.$slots.default() : void 0;
    return _e("div", { ref: "root" }, n);
  }
});
const ir = {
  ...De,
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
}, of = (n, t, e) => {
  const { options: i, methods: s } = hn(
    n,
    t,
    e
  ), o = ht(
    n,
    ir,
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
ct({
  name: "LImageOverlay",
  props: ir,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = tt(Tt), { options: a, methods: r } = of(
      n,
      e,
      t
    );
    return pt(async () => {
      const { imageOverlay: l } = s ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        l(n.url, n.bounds, a)
      );
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), gt(r, e.value, n), o({
        ...n,
        ...r,
        leafletObject: e.value
      }), i.value = !0, it(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
ct({
  props: Qn,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = tt(Tt), { methods: a } = Zi(n, e, t);
    return pt(async () => {
      const { layerGroup: r } = s ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        r(void 0, n.options)
      );
      const { listeners: l } = wt(t.attrs);
      e.value.on(l), gt(a, e.value, n), o({
        ...n,
        ...a,
        leafletObject: e.value
      }), i.value = !0, it(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
function sr(n, t, e) {
  var i, s, o;
  t === void 0 && (t = 50), e === void 0 && (e = {});
  var a = (i = e.isImmediate) != null && i, r = (s = e.callback) != null && s, l = e.maxWait, c = Date.now(), u = [];
  function h() {
    if (l !== void 0) {
      var f = Date.now() - c;
      if (f + t >= l)
        return l - f;
    }
    return t;
  }
  var d = function() {
    var f = [].slice.call(arguments), p = this;
    return new Promise(function(g, m) {
      var b = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, c = Date.now(), !a) {
          var S = n.apply(p, f);
          r && r(S), u.forEach(function(y) {
            return (0, y.resolve)(S);
          }), u = [];
        }
      }, h()), b) {
        var x = n.apply(p, f);
        return r && r(x), g(x);
      }
      u.push({ resolve: g, reject: m });
    });
  };
  return d.cancel = function(f) {
    o !== void 0 && clearTimeout(o), u.forEach(function(p) {
      return (0, p.reject)(f);
    }), u = [];
  }, d;
}
const To = {
  ...cn,
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
}, af = ct({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: To,
  setup(n, t) {
    const e = W(), i = No({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: s } = un(n), o = ht(
      n,
      To,
      s
    ), { listeners: a, attrs: r } = wt(t.attrs), l = Ln(Tt), c = Ln(Jn), u = Ln(ln), h = Ln(
      Na
    );
    Nt(mt, n.useGlobalLeaflet);
    const d = Ft(() => {
      const b = {};
      return n.noBlockingAnimations && (b.animate = !1), b;
    }), f = Ft(() => {
      const b = d.value;
      return n.padding && (b.padding = n.padding), n.paddingTopLeft && (b.paddingTopLeft = n.paddingTopLeft), n.paddingBottomRight && (b.paddingBottomRight = n.paddingBottomRight), b;
    }), p = {
      moveend: sr((b) => {
        i.leafletRef && (t.emit("update:zoom", i.leafletRef.getZoom()), t.emit("update:center", i.leafletRef.getCenter()), t.emit("update:bounds", i.leafletRef.getBounds()));
      }),
      overlayadd(b) {
        const x = i.layersInControl.find((S) => S.name === b.name);
        x && x.updateVisibleProp(!0);
      },
      overlayremove(b) {
        const x = i.layersInControl.find((S) => S.name === b.name);
        x && x.updateVisibleProp(!1);
      }
    };
    pt(async () => {
      n.useGlobalLeaflet && (lt.L = lt.L || await import("./leaflet-src-BDi_6Owi.js").then((P) => P.l));
      const { map: b, CRS: x, Icon: S, latLngBounds: y, latLng: w, stamp: O } = n.useGlobalLeaflet ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        o.beforeMapMount && await o.beforeMapMount();
      } catch (P) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${P.message}`
        );
      }
      await Yd(S);
      const k = typeof o.crs == "string" ? x[o.crs] : o.crs;
      o.crs = k || x.EPSG3857;
      const T = {
        addLayer(P) {
          P.layerType !== void 0 && (i.layerControl === void 0 ? i.layersToAdd.push(P) : i.layersInControl.find(
            (A) => O(A.leafletObject) === O(P.leafletObject)
          ) || (i.layerControl.addLayer(P), i.layersInControl.push(P))), P.visible !== !1 && i.leafletRef.addLayer(P.leafletObject);
        },
        removeLayer(P) {
          P.layerType !== void 0 && (i.layerControl === void 0 ? i.layersToAdd = i.layersToAdd.filter(
            (A) => A.name !== P.name
          ) : (i.layerControl.removeLayer(P.leafletObject), i.layersInControl = i.layersInControl.filter(
            (A) => O(A.leafletObject) !== O(P.leafletObject)
          ))), i.leafletRef.removeLayer(P.leafletObject);
        },
        registerLayerControl(P) {
          i.layerControl = P, i.layersToAdd.forEach((A) => {
            i.layerControl.addLayer(A);
          }), i.layersToAdd = [], u(P);
        },
        registerControl(P) {
          i.leafletRef.addControl(P.leafletObject);
        },
        setZoom(P) {
          const A = i.leafletRef.getZoom();
          P !== A && i.leafletRef.setZoom(P, d.value);
        },
        setCrs(P) {
          const A = i.leafletRef.getBounds();
          i.leafletRef.options.crs = P, i.leafletRef.fitBounds(A, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(P) {
          i.leafletRef.fitBounds(P, f.value);
        },
        setBounds(P) {
          if (!P)
            return;
          const A = y(P);
          A.isValid() && !(i.lastSetBounds || i.leafletRef.getBounds()).equals(A, 0) && (i.lastSetBounds = A, i.leafletRef.fitBounds(A));
        },
        setCenter(P) {
          if (P == null)
            return;
          const A = w(P), N = i.lastSetCenter || i.leafletRef.getCenter();
          (N.lat !== A.lat || N.lng !== A.lng) && (i.lastSetCenter = A, i.leafletRef.panTo(A, d.value));
        }
      };
      Dn(l, T.addLayer), Dn(c, T.removeLayer), Dn(u, T.registerControl), Dn(h, T.registerLayerControl), i.leafletRef = yt(b(e.value, o)), gt(T, i.leafletRef, n), Co(i.leafletRef, p), Co(i.leafletRef, a), i.ready = !0, it(() => t.emit("ready", i.leafletRef));
    }), on(() => {
      Fa(p), i.leafletRef && (i.leafletRef.off(), i.leafletRef.remove());
    });
    const g = Ft(() => i.leafletRef), m = Ft(() => i.ready);
    return { root: e, ready: m, leafletObject: g, attrs: r };
  },
  render({ attrs: n }) {
    return n.style || (n.style = {}), n.style.width || (n.style.width = "100%"), n.style.height || (n.style.height = "100%"), _e(
      "div",
      {
        ...n,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), rf = ["Symbol(Comment)", "Symbol(Text)"], lf = ["LTooltip", "LPopup"], or = {
  ...De,
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
}, cf = (n, t, e) => {
  const { options: i, methods: s } = hn(
    n,
    t,
    e
  ), o = ht(
    n,
    or,
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
}, uf = (n, t) => {
  const e = t.slots.default && t.slots.default();
  return e && e.length && e.some(hf);
};
function hf(n) {
  return !(rf.includes(n.type.toString()) || lf.includes(n.type.name));
}
const df = ct({
  name: "LMarker",
  props: or,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = tt(Tt);
    Nt(
      Ba,
      () => {
        var c;
        return !!((c = e.value) != null && c.getElement());
      }
    ), Nt(ja, (c) => {
      var u, h;
      const d = te((u = e.value) == null ? void 0 : u.getElement) && ((h = e.value) == null ? void 0 : h.getElement());
      d && (d.innerHTML = c);
    }), Nt(
      za,
      (c) => {
        var u;
        return ((u = e.value) == null ? void 0 : u.setIcon) && e.value.setIcon(c);
      }
    );
    const { options: a, methods: r } = cf(n, e, t), l = {
      moveHandler: sr(r.latLngSync)
    };
    return pt(async () => {
      const { marker: c, divIcon: u } = s ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      uf(a, t) && (a.icon = u({ className: "" })), e.value = yt(c(n.latLng, a));
      const { listeners: h } = wt(t.attrs);
      e.value.on(h), e.value.on("move", l.moveHandler), gt(r, e.value, n), o({
        ...n,
        ...r,
        leafletObject: e.value
      }), i.value = !0, it(() => t.emit("ready", e.value));
    }), on(() => Fa(l)), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
}), Qi = {
  ...qi,
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
}, ar = (n, t, e) => {
  const { options: i, methods: s } = Xa(
    n,
    t,
    e
  ), o = ht(
    n,
    Qi,
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
}, Wn = {
  ...Qi
}, rr = (n, t, e) => {
  const { options: i, methods: s } = ar(
    n,
    t,
    e
  ), o = ht(
    n,
    Wn,
    i
  ), a = {
    ...s,
    toGeoJSON(r) {
      return t.value.toGeoJSON(r);
    }
  };
  return { options: o, methods: a };
};
ct({
  name: "LPolygon",
  props: Wn,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = tt(Tt), { options: a, methods: r } = rr(n, e, t);
    return pt(async () => {
      const { polygon: l } = s ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(l(n.latLngs, a));
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), gt(r, e.value, n), o({
        ...n,
        ...r,
        leafletObject: e.value
      }), i.value = !0, it(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
ct({
  name: "LPolyline",
  props: Qi,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = tt(Tt), { options: a, methods: r } = ar(n, e, t);
    return pt(async () => {
      const { polyline: l } = s ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        l(n.latLngs, a)
      );
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), gt(r, e.value, n), o({
        ...n,
        ...r,
        leafletObject: e.value
      }), i.value = !0, it(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
const lr = {
  ...cn,
  content: {
    type: String,
    default: null
  }
}, cr = (n, t) => {
  const { options: e, methods: i } = un(n), s = {
    ...i,
    setContent(o) {
      t.value && o !== null && o !== void 0 && t.value.setContent(o);
    }
  };
  return { options: e, methods: s };
}, ur = (n) => n.default ? _e("div", { ref: "root" }, n.default()) : null, ff = {
  ...lr,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, pf = (n, t) => {
  const { options: e, methods: i } = cr(n, t);
  return { options: e, methods: i };
}, gf = ct({
  name: "LPopup",
  props: ff,
  setup(n, t) {
    const e = W(), i = W(null), s = ut(mt), o = tt(Wa), a = tt($a), { options: r, methods: l } = pf(n, e);
    return pt(async () => {
      const { popup: c } = s ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(c(r)), n.latLng !== void 0 && e.value.setLatLng(n.latLng), gt(l, e.value, n);
      const { listeners: u } = wt(t.attrs);
      e.value.on(u), e.value.setContent(n.content || i.value || ""), o(e.value), it(() => t.emit("ready", e.value));
    }), on(() => {
      a();
    }), { root: i, leafletObject: e };
  },
  render() {
    return ur(this.$slots);
  }
}), hr = {
  ...Wn,
  latLngs: {
    ...Wn.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, mf = (n, t, e) => {
  const { options: i, methods: s } = rr(
    n,
    t,
    e
  ), o = ht(
    n,
    hr,
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
ct({
  name: "LRectangle",
  props: hr,
  setup(n, t) {
    const e = W(), i = W(!1), s = ut(mt), o = tt(Tt), { options: a, methods: r } = mf(n, e, t);
    return pt(async () => {
      const { rectangle: l, latLngBounds: c } = s ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js"), u = n.bounds ? c(n.bounds) : c(n.latLngs || []);
      e.value = yt(l(u, a));
      const { listeners: h } = wt(t.attrs);
      e.value.on(h), gt(r, e.value, n), o({
        ...n,
        ...r,
        leafletObject: e.value
      }), i.value = !0, it(() => t.emit("ready", e.value));
    }), { ready: i, leafletObject: e };
  },
  render() {
    return $t(this.ready, this.$slots);
  }
});
const ts = {
  ...Ji,
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
}, dr = (n, t, e) => {
  const { options: i, methods: s } = nr(n, t, e), o = ht(
    n,
    ts,
    i
  ), a = {
    ...s
  };
  return { options: o, methods: a };
}, bf = ct({
  props: ts,
  setup(n, t) {
    const e = W(), i = ut(mt), s = tt(Tt), { options: o, methods: a } = dr(n, e, t);
    return pt(async () => {
      const { tileLayer: r } = i ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(r(n.url, o));
      const { listeners: l } = wt(t.attrs);
      e.value.on(l), gt(a, e.value, n), s({
        ...n,
        ...a,
        leafletObject: e.value
      }), it(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
}), yf = {
  ...lr
}, vf = (n, t) => {
  const { options: e, methods: i } = cr(n, t), s = tt(Ua);
  return on(() => {
    s();
  }), { options: e, methods: i };
};
ct({
  name: "LTooltip",
  props: yf,
  setup(n, t) {
    const e = W(), i = W(null), s = ut(mt), o = tt(Ha), { options: a, methods: r } = vf(n, e);
    return pt(async () => {
      const { tooltip: l } = s ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(l(a)), gt(r, e.value, n);
      const { listeners: c } = wt(t.attrs);
      e.value.on(c), e.value.setContent(n.content || i.value || ""), o(e.value), it(() => t.emit("ready", e.value));
    }), { root: i, leafletObject: e };
  },
  render() {
    return ur(this.$slots);
  }
});
const fr = {
  ...ts,
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
}, xf = (n, t, e) => {
  const { options: i, methods: s } = dr(n, t, e);
  return {
    options: ht(
      n,
      fr,
      i
    ),
    methods: {
      ...s
    }
  };
};
ct({
  props: fr,
  setup(n, t) {
    const e = W(), i = ut(mt), s = tt(Tt), { options: o, methods: a } = xf(
      n,
      e,
      t
    );
    return pt(async () => {
      const { tileLayer: r } = i ? lt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      e.value = yt(
        r.wms(n.url, o)
      );
      const { listeners: l } = wt(t.attrs);
      e.value.on(l), gt(a, e.value, n), s({
        ...n,
        ...a,
        leafletObject: e.value
      }), it(() => t.emit("ready", e.value));
    }), { leafletObject: e };
  },
  render() {
    return null;
  }
});
var _f = { 207: (n, t, e) => {
  n.exports = e(452);
}, 452: (n) => {
  var t = (function(e) {
    var i, s = Object.prototype, o = s.hasOwnProperty, a = typeof Symbol == "function" ? Symbol : {}, r = a.iterator || "@@iterator", l = a.asyncIterator || "@@asyncIterator", c = a.toStringTag || "@@toStringTag";
    function u(v, C, E) {
      return Object.defineProperty(v, C, { value: E, enumerable: !0, configurable: !0, writable: !0 }), v[C];
    }
    try {
      u({}, "");
    } catch {
      u = function(C, E, F) {
        return C[E] = F;
      };
    }
    function h(v, C, E, F) {
      var L = C && C.prototype instanceof x ? C : x, V = Object.create(L.prototype), H = new D(F || []);
      return V._invoke = /* @__PURE__ */ (function(K, et, z) {
        var st = f;
        return function(xt, Re) {
          if (st === g) throw new Error("Generator is already running");
          if (st === m) {
            if (xt === "throw") throw Re;
            return _();
          }
          for (z.method = xt, z.arg = Re; ; ) {
            var fn = z.delegate;
            if (fn) {
              var ti = N(fn, z);
              if (ti) {
                if (ti === b) continue;
                return ti;
              }
            }
            if (z.method === "next") z.sent = z._sent = z.arg;
            else if (z.method === "throw") {
              if (st === f) throw st = m, z.arg;
              z.dispatchException(z.arg);
            } else z.method === "return" && z.abrupt("return", z.arg);
            st = g;
            var Ee = d(K, et, z);
            if (Ee.type === "normal") {
              if (st = z.done ? m : p, Ee.arg === b) continue;
              return { value: Ee.arg, done: z.done };
            }
            Ee.type === "throw" && (st = m, z.method = "throw", z.arg = Ee.arg);
          }
        };
      })(v, E, H), V;
    }
    function d(v, C, E) {
      try {
        return { type: "normal", arg: v.call(C, E) };
      } catch (F) {
        return { type: "throw", arg: F };
      }
    }
    e.wrap = h;
    var f = "suspendedStart", p = "suspendedYield", g = "executing", m = "completed", b = {};
    function x() {
    }
    function S() {
    }
    function y() {
    }
    var w = {};
    u(w, r, (function() {
      return this;
    }));
    var O = Object.getPrototypeOf, k = O && O(O(M([])));
    k && k !== s && o.call(k, r) && (w = k);
    var T = y.prototype = x.prototype = Object.create(w);
    function P(v) {
      ["next", "throw", "return"].forEach((function(C) {
        u(v, C, (function(E) {
          return this._invoke(C, E);
        }));
      }));
    }
    function A(v, C) {
      function E(L, V, H, K) {
        var et = d(v[L], v, V);
        if (et.type !== "throw") {
          var z = et.arg, st = z.value;
          return st && typeof st == "object" && o.call(st, "__await") ? C.resolve(st.__await).then((function(xt) {
            E("next", xt, H, K);
          }), (function(xt) {
            E("throw", xt, H, K);
          })) : C.resolve(st).then((function(xt) {
            z.value = xt, H(z);
          }), (function(xt) {
            return E("throw", xt, H, K);
          }));
        }
        K(et.arg);
      }
      var F;
      this._invoke = function(L, V) {
        function H() {
          return new C((function(K, et) {
            E(L, V, K, et);
          }));
        }
        return F = F ? F.then(H, H) : H();
      };
    }
    function N(v, C) {
      var E = v.iterator[C.method];
      if (E === i) {
        if (C.delegate = null, C.method === "throw") {
          if (v.iterator.return && (C.method = "return", C.arg = i, N(v, C), C.method === "throw")) return b;
          C.method = "throw", C.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return b;
      }
      var F = d(E, v.iterator, C.arg);
      if (F.type === "throw") return C.method = "throw", C.arg = F.arg, C.delegate = null, b;
      var L = F.arg;
      return L ? L.done ? (C[v.resultName] = L.value, C.next = v.nextLoc, C.method !== "return" && (C.method = "next", C.arg = i), C.delegate = null, b) : L : (C.method = "throw", C.arg = new TypeError("iterator result is not an object"), C.delegate = null, b);
    }
    function B(v) {
      var C = { tryLoc: v[0] };
      1 in v && (C.catchLoc = v[1]), 2 in v && (C.finallyLoc = v[2], C.afterLoc = v[3]), this.tryEntries.push(C);
    }
    function R(v) {
      var C = v.completion || {};
      C.type = "normal", delete C.arg, v.completion = C;
    }
    function D(v) {
      this.tryEntries = [{ tryLoc: "root" }], v.forEach(B, this), this.reset(!0);
    }
    function M(v) {
      if (v) {
        var C = v[r];
        if (C) return C.call(v);
        if (typeof v.next == "function") return v;
        if (!isNaN(v.length)) {
          var E = -1, F = function L() {
            for (; ++E < v.length; ) if (o.call(v, E)) return L.value = v[E], L.done = !1, L;
            return L.value = i, L.done = !0, L;
          };
          return F.next = F;
        }
      }
      return { next: _ };
    }
    function _() {
      return { value: i, done: !0 };
    }
    return S.prototype = y, u(T, "constructor", y), u(y, "constructor", S), S.displayName = u(y, c, "GeneratorFunction"), e.isGeneratorFunction = function(v) {
      var C = typeof v == "function" && v.constructor;
      return !!C && (C === S || (C.displayName || C.name) === "GeneratorFunction");
    }, e.mark = function(v) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(v, y) : (v.__proto__ = y, u(v, c, "GeneratorFunction")), v.prototype = Object.create(T), v;
    }, e.awrap = function(v) {
      return { __await: v };
    }, P(A.prototype), u(A.prototype, l, (function() {
      return this;
    })), e.AsyncIterator = A, e.async = function(v, C, E, F, L) {
      L === void 0 && (L = Promise);
      var V = new A(h(v, C, E, F), L);
      return e.isGeneratorFunction(C) ? V : V.next().then((function(H) {
        return H.done ? H.value : V.next();
      }));
    }, P(T), u(T, c, "Generator"), u(T, r, (function() {
      return this;
    })), u(T, "toString", (function() {
      return "[object Generator]";
    })), e.keys = function(v) {
      var C = [];
      for (var E in v) C.push(E);
      return C.reverse(), function F() {
        for (; C.length; ) {
          var L = C.pop();
          if (L in v) return F.value = L, F.done = !1, F;
        }
        return F.done = !0, F;
      };
    }, e.values = M, D.prototype = { constructor: D, reset: function(v) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = i, this.done = !1, this.delegate = null, this.method = "next", this.arg = i, this.tryEntries.forEach(R), !v) for (var C in this) C.charAt(0) === "t" && o.call(this, C) && !isNaN(+C.slice(1)) && (this[C] = i);
    }, stop: function() {
      this.done = !0;
      var v = this.tryEntries[0].completion;
      if (v.type === "throw") throw v.arg;
      return this.rval;
    }, dispatchException: function(v) {
      if (this.done) throw v;
      var C = this;
      function E(et, z) {
        return V.type = "throw", V.arg = v, C.next = et, z && (C.method = "next", C.arg = i), !!z;
      }
      for (var F = this.tryEntries.length - 1; F >= 0; --F) {
        var L = this.tryEntries[F], V = L.completion;
        if (L.tryLoc === "root") return E("end");
        if (L.tryLoc <= this.prev) {
          var H = o.call(L, "catchLoc"), K = o.call(L, "finallyLoc");
          if (H && K) {
            if (this.prev < L.catchLoc) return E(L.catchLoc, !0);
            if (this.prev < L.finallyLoc) return E(L.finallyLoc);
          } else if (H) {
            if (this.prev < L.catchLoc) return E(L.catchLoc, !0);
          } else {
            if (!K) throw new Error("try statement without catch or finally");
            if (this.prev < L.finallyLoc) return E(L.finallyLoc);
          }
        }
      }
    }, abrupt: function(v, C) {
      for (var E = this.tryEntries.length - 1; E >= 0; --E) {
        var F = this.tryEntries[E];
        if (F.tryLoc <= this.prev && o.call(F, "finallyLoc") && this.prev < F.finallyLoc) {
          var L = F;
          break;
        }
      }
      L && (v === "break" || v === "continue") && L.tryLoc <= C && C <= L.finallyLoc && (L = null);
      var V = L ? L.completion : {};
      return V.type = v, V.arg = C, L ? (this.method = "next", this.next = L.finallyLoc, b) : this.complete(V);
    }, complete: function(v, C) {
      if (v.type === "throw") throw v.arg;
      return v.type === "break" || v.type === "continue" ? this.next = v.arg : v.type === "return" ? (this.rval = this.arg = v.arg, this.method = "return", this.next = "end") : v.type === "normal" && C && (this.next = C), b;
    }, finish: function(v) {
      for (var C = this.tryEntries.length - 1; C >= 0; --C) {
        var E = this.tryEntries[C];
        if (E.finallyLoc === v) return this.complete(E.completion, E.afterLoc), R(E), b;
      }
    }, catch: function(v) {
      for (var C = this.tryEntries.length - 1; C >= 0; --C) {
        var E = this.tryEntries[C];
        if (E.tryLoc === v) {
          var F = E.completion;
          if (F.type === "throw") {
            var L = F.arg;
            R(E);
          }
          return L;
        }
      }
      throw new Error("illegal catch attempt");
    }, delegateYield: function(v, C, E) {
      return this.delegate = { iterator: M(v), resultName: C, nextLoc: E }, this.method === "next" && (this.arg = i), b;
    } }, e;
  })(n.exports);
  try {
    regeneratorRuntime = t;
  } catch {
    typeof globalThis == "object" ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t);
  }
} }, Po = {};
function It(n) {
  var t = Po[n];
  if (t !== void 0) return t.exports;
  var e = Po[n] = { exports: {} };
  return _f[n](e, e.exports, It), e.exports;
}
It.n = (n) => {
  var t = n && n.__esModule ? () => n.default : () => n;
  return It.d(t, { a: t }), t;
}, It.d = (n, t) => {
  for (var e in t) It.o(t, e) && !It.o(n, e) && Object.defineProperty(n, e, { enumerable: !0, get: t[e] });
}, It.o = (n, t) => Object.prototype.hasOwnProperty.call(n, t);
var pr = {};
function Ti(n, t) {
  (t == null || t > n.length) && (t = n.length);
  for (var e = 0, i = new Array(t); e < t; e++) i[e] = n[e];
  return i;
}
function gr(n, t) {
  if (n) {
    if (typeof n == "string") return Ti(n, t);
    var e = Object.prototype.toString.call(n).slice(8, -1);
    return e === "Object" && n.constructor && (e = n.constructor.name), e === "Map" || e === "Set" ? Array.from(n) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Ti(n, t) : void 0;
  }
}
function Hn(n) {
  return (function(t) {
    if (Array.isArray(t)) return Ti(t);
  })(n) || (function(t) {
    if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null) return Array.from(t);
  })(n) || gr(n) || (function() {
    throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  })();
}
function sn(n, t, e) {
  return t in n ? Object.defineProperty(n, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : n[t] = e, n;
}
It.d(pr, { A: () => Of });
const I = (Lo = { Fragment: () => jt.Fragment, computed: () => jt.computed, createTextVNode: () => jt.createTextVNode, createVNode: () => jt.createVNode, defineComponent: () => jt.defineComponent, nextTick: () => jt.nextTick, reactive: () => jt.reactive, ref: () => jt.ref, watch: () => jt.watch, watchEffect: () => jt.watchEffect }, gi = {}, It.d(gi, Lo), gi), Sf = (0, I.defineComponent)({ props: { data: { required: !0, type: String }, onClick: Function }, render: function() {
  var n = this.data, t = this.onClick;
  return (0, I.createVNode)("span", { class: "vjs-tree-brackets", onClick: t }, [n]);
} }), wf = (0, I.defineComponent)({ emits: ["change", "update:modelValue"], props: { checked: { type: Boolean, default: !1 }, isMultiple: Boolean, onChange: Function }, setup: function(n, t) {
  var e = t.emit;
  return { uiType: (0, I.computed)((function() {
    return n.isMultiple ? "checkbox" : "radio";
  })), model: (0, I.computed)({ get: function() {
    return n.checked;
  }, set: function(i) {
    return e("update:modelValue", i);
  } }) };
}, render: function() {
  var n = this.uiType, t = this.model, e = this.$emit;
  return (0, I.createVNode)("label", { class: ["vjs-check-controller", t ? "is-checked" : ""], onClick: function(i) {
    return i.stopPropagation();
  } }, [(0, I.createVNode)("span", { class: "vjs-check-controller-inner is-".concat(n) }, null), (0, I.createVNode)("input", { checked: t, class: "vjs-check-controller-original is-".concat(n), type: n, onChange: function() {
    return e("change", t);
  } }, null)]);
} }), kf = (0, I.defineComponent)({ props: { nodeType: { required: !0, type: String }, onClick: Function }, render: function() {
  var n = this.nodeType, t = this.onClick, e = n === "objectStart" || n === "arrayStart";
  return e || n === "objectCollapsed" || n === "arrayCollapsed" ? (0, I.createVNode)("span", { class: "vjs-carets vjs-carets-".concat(e ? "open" : "close"), onClick: t }, [(0, I.createVNode)("svg", { viewBox: "0 0 1024 1024", focusable: "false", "data-icon": "caret-down", width: "1em", height: "1em", fill: "currentColor", "aria-hidden": "true" }, [(0, I.createVNode)("path", { d: "M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z" }, null)])]) : null;
} });
var Lo, gi;
function Pi(n) {
  return Pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Pi(n);
}
function mr(n) {
  return Object.prototype.toString.call(n).slice(8, -1).toLowerCase();
}
function me(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "root", e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, i = (arguments.length > 3 ? arguments[3] : void 0) || {}, s = i.key, o = i.index, a = i.type, r = a === void 0 ? "content" : a, l = i.showComma, c = l !== void 0 && l, u = i.length, h = u === void 0 ? 1 : u, d = mr(n);
  if (d === "array") {
    var f = Do(n.map((function(m, b, x) {
      return me(m, "".concat(t, "[").concat(b, "]"), e + 1, { index: b, showComma: b !== x.length - 1, length: h, type: r });
    })));
    return [me("[", t, e, { showComma: !1, key: s, length: n.length, type: "arrayStart" })[0]].concat(f, me("]", t, e, { showComma: c, length: n.length, type: "arrayEnd" })[0]);
  }
  if (d === "object") {
    var p = Object.keys(n), g = Do(p.map((function(m, b, x) {
      return me(n[m], /^[a-zA-Z_]\w*$/.test(m) ? "".concat(t, ".").concat(m) : "".concat(t, '["').concat(m, '"]'), e + 1, { key: m, showComma: b !== x.length - 1, length: h, type: r });
    })));
    return [me("{", t, e, { showComma: !1, key: s, index: o, length: p.length, type: "objectStart" })[0]].concat(g, me("}", t, e, { showComma: c, length: p.length, type: "objectEnd" })[0]);
  }
  return [{ content: n, level: e, key: s, index: o, path: t, showComma: c, length: h, type: r }];
}
function Do(n) {
  if (typeof Array.prototype.flat == "function") return n.flat();
  for (var t = Hn(n), e = []; t.length; ) {
    var i = t.shift();
    Array.isArray(i) ? t.unshift.apply(t, Hn(i)) : e.push(i);
  }
  return e;
}
function Li(n) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : /* @__PURE__ */ new WeakMap();
  if (n == null) return n;
  if (n instanceof Date) return new Date(n);
  if (n instanceof RegExp) return new RegExp(n);
  if (Pi(n) !== "object") return n;
  if (t.get(n)) return t.get(n);
  if (Array.isArray(n)) {
    var e = n.map((function(o) {
      return Li(o, t);
    }));
    return t.set(n, e), e;
  }
  var i = {};
  for (var s in n) i[s] = Li(n[s], t);
  return t.set(n, i), i;
}
function Ao(n, t, e, i, s, o, a) {
  try {
    var r = n[o](a), l = r.value;
  } catch (c) {
    return void e(c);
  }
  r.done ? t(l) : Promise.resolve(l).then(i, s);
}
var Mf = It(207), Ro = It.n(Mf);
function Eo(n, t) {
  var e = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(n);
    t && (i = i.filter((function(s) {
      return Object.getOwnPropertyDescriptor(n, s).enumerable;
    }))), e.push.apply(e, i);
  }
  return e;
}
function Vo(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Eo(Object(e), !0).forEach((function(i) {
      sn(n, i, e[i]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Eo(Object(e)).forEach((function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(e, i));
    }));
  }
  return n;
}
var br = { data: { type: [String, Number, Boolean, Array, Object], default: null }, rootPath: { type: String, default: "root" }, indent: { type: Number, default: 2 }, showLength: { type: Boolean, default: !1 }, showDoubleQuotes: { type: Boolean, default: !0 }, renderNodeKey: Function, renderNodeValue: Function, renderNodeActions: { type: [Boolean, Function], default: void 0 }, selectableType: String, showSelectController: { type: Boolean, default: !1 }, showLine: { type: Boolean, default: !0 }, showLineNumber: { type: Boolean, default: !1 }, selectOnClickNode: { type: Boolean, default: !0 }, nodeSelectable: { type: Function, default: function() {
  return !0;
} }, highlightSelectedNode: { type: Boolean, default: !0 }, showIcon: { type: Boolean, default: !1 }, theme: { type: String, default: "light" }, showKeyValueSpace: { type: Boolean, default: !0 }, editable: { type: Boolean, default: !1 }, editableTrigger: { type: String, default: "click" }, onNodeClick: { type: Function }, onNodeMouseover: { type: Function }, onBracketsClick: { type: Function }, onIconClick: { type: Function }, onValueChange: { type: Function } };
const Cf = (0, I.defineComponent)({ name: "TreeNode", props: Vo(Vo({}, br), {}, { node: { type: Object, required: !0 }, collapsed: Boolean, checked: Boolean, style: Object, onSelectedChange: { type: Function } }), emits: ["nodeClick", "nodeMouseover", "bracketsClick", "iconClick", "selectedChange", "valueChange"], setup: function(n, t) {
  var e = t.emit, i = (0, I.computed)((function() {
    return mr(n.node.content);
  })), s = (0, I.computed)((function() {
    return "vjs-value vjs-value-".concat(i.value);
  })), o = (0, I.computed)((function() {
    return n.showDoubleQuotes ? '"'.concat(n.node.key, '"') : n.node.key;
  })), a = (0, I.computed)((function() {
    return n.selectableType === "multiple";
  })), r = (0, I.computed)((function() {
    return n.selectableType === "single";
  })), l = (0, I.computed)((function() {
    return n.nodeSelectable(n.node) && (a.value || r.value);
  })), c = (0, I.reactive)({ editing: !1 }), u = function(O) {
    var k, T, P = (T = (k = O.target) === null || k === void 0 ? void 0 : k.value) === "null" ? null : T === "undefined" ? void 0 : T === "true" || T !== "false" && (T[0] + T[T.length - 1] === '""' || T[0] + T[T.length - 1] === "''" ? T.slice(1, -1) : typeof Number(T) == "number" && !isNaN(Number(T)) || T === "NaN" ? Number(T) : T);
    e("valueChange", P, n.node.path);
  }, h = (0, I.computed)((function() {
    var O, k = (O = n.node) === null || O === void 0 ? void 0 : O.content;
    return k === null ? k = "null" : k === void 0 && (k = "undefined"), i.value === "string" ? '"'.concat(k, '"') : k + "";
  })), d = function() {
    var O = n.renderNodeValue;
    return O ? O({ node: n.node, defaultValue: h.value }) : h.value;
  }, f = function() {
    e("bracketsClick", !n.collapsed, n.node);
  }, p = function() {
    e("iconClick", !n.collapsed, n.node);
  }, g = function() {
    e("selectedChange", n.node);
  }, m = function() {
    e("nodeClick", n.node), l.value && n.selectOnClickNode && e("selectedChange", n.node);
  }, b = function() {
    e("nodeMouseover", n.node);
  }, x = function(O) {
    if (n.editable && !c.editing) {
      c.editing = !0;
      var k = function T(P) {
        var A;
        P.target !== O.target && ((A = P.target) === null || A === void 0 ? void 0 : A.parentElement) !== O.target && (c.editing = !1, document.removeEventListener("click", T));
      };
      document.removeEventListener("click", k), document.addEventListener("click", k);
    }
  }, S = (function() {
    var O = (0, I.ref)(!1), k = (function() {
      var T, P = (T = Ro().mark((function A(N) {
        return Ro().wrap((function(B) {
          for (; ; ) switch (B.prev = B.next) {
            case 0:
              return B.prev = 0, B.next = 3, navigator.clipboard.writeText(N);
            case 3:
              O.value = !0, setTimeout((function() {
                O.value = !1;
              }), 300), B.next = 10;
              break;
            case 7:
              B.prev = 7, B.t0 = B.catch(0), console.error("[vue-json-pretty] Copy failed: ", B.t0);
            case 10:
            case "end":
              return B.stop();
          }
        }), A, null, [[0, 7]]);
      })), function() {
        var A = this, N = arguments;
        return new Promise((function(B, R) {
          var D = T.apply(A, N);
          function M(v) {
            Ao(D, B, R, M, _, "next", v);
          }
          function _(v) {
            Ao(D, B, R, M, _, "throw", v);
          }
          M(void 0);
        }));
      });
      return function(A) {
        return P.apply(this, arguments);
      };
    })();
    return { copy: k };
  })().copy, y = function() {
    var O = n.node, k = O.key, T = O.path, P = n.rootPath, A = new Function("data", "return data".concat(T.slice(P.length)))(n.data), N = JSON.stringify(k ? sn({}, k, A) : A, null, 2);
    S(N);
  }, w = function() {
    var O = n.renderNodeActions;
    if (!O) return null;
    var k = { copy: y };
    return typeof O == "function" ? O({ node: n.node, defaultActions: k }) : (0, I.createVNode)("span", { onClick: y, class: "vjs-tree-node-actions-item" }, [(0, I.createTextVNode)("copy")]);
  };
  return function() {
    var O, k = n.node;
    return (0, I.createVNode)("div", { class: { "vjs-tree-node": !0, "has-selector": n.showSelectController, "has-carets": n.showIcon, "is-highlight": n.highlightSelectedNode && n.checked, dark: n.theme === "dark" }, onClick: m, onMouseover: b, style: n.style }, [n.showLineNumber && (0, I.createVNode)("span", { class: "vjs-node-index" }, [k.id + 1]), n.showSelectController && l.value && k.type !== "objectEnd" && k.type !== "arrayEnd" && (0, I.createVNode)(wf, { isMultiple: a.value, checked: n.checked, onChange: g }, null), (0, I.createVNode)("div", { class: "vjs-indent" }, [Array.from(Array(k.level)).map((function(T, P) {
      return (0, I.createVNode)("div", { key: P, class: { "vjs-indent-unit": !0, "has-line": n.showLine } }, [Array.from(Array(n.indent)).map((function() {
        return (0, I.createVNode)(I.Fragment, null, [(0, I.createTextVNode)(" ")]);
      }))]);
    })), n.showIcon && (0, I.createVNode)(kf, { nodeType: k.type, onClick: p }, null)]), k.key && (0, I.createVNode)("span", { class: "vjs-key" }, [(O = n.renderNodeKey, O ? O({ node: n.node, defaultKey: o.value || "" }) : o.value), (0, I.createVNode)("span", { class: "vjs-colon" }, [":".concat(n.showKeyValueSpace ? " " : "")])]), (0, I.createVNode)("span", null, [k.type !== "content" && k.content ? (0, I.createVNode)(Sf, { data: k.content.toString(), onClick: f }, null) : (0, I.createVNode)("span", { class: s.value, onClick: !n.editable || n.editableTrigger && n.editableTrigger !== "click" ? void 0 : x, onDblclick: n.editable && n.editableTrigger === "dblclick" ? x : void 0 }, [n.editable && c.editing ? (0, I.createVNode)("input", { value: h.value, onChange: u, style: { padding: "3px 8px", border: "1px solid #eee", boxShadow: "none", boxSizing: "border-box", borderRadius: 5, fontFamily: "inherit" } }, null) : d()]), k.showComma && (0, I.createVNode)("span", null, [","]), n.showLength && n.collapsed && (0, I.createVNode)("span", { class: "vjs-comment" }, [(0, I.createTextVNode)(" // "), k.length, (0, I.createTextVNode)(" items ")])]), n.renderNodeActions && (0, I.createVNode)("span", { class: "vjs-tree-node-actions" }, [w()])]);
  };
} });
function Io(n, t) {
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
    t % 2 ? Io(Object(e), !0).forEach((function(i) {
      sn(n, i, e[i]);
    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(e)) : Io(Object(e)).forEach((function(i) {
      Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(e, i));
    }));
  }
  return n;
}
const Of = (0, I.defineComponent)({ name: "Tree", props: At(At({}, br), {}, { collapsedNodeLength: { type: Number, default: 1 / 0 }, deep: { type: Number, default: 1 / 0 }, pathCollapsible: { type: Function, default: function() {
  return !1;
} }, virtual: { type: Boolean, default: !1 }, height: { type: Number, default: 400 }, itemHeight: { type: Number, default: 20 }, dynamicHeight: { type: Boolean, default: !0 }, selectedValue: { type: [String, Array], default: function() {
  return "";
} }, collapsedOnClickBrackets: { type: Boolean, default: !0 }, style: Object, onSelectedChange: { type: Function }, theme: { type: String, default: "light" } }), slots: ["renderNodeKey", "renderNodeValue", "renderNodeActions"], emits: ["nodeClick", "nodeMouseover", "bracketsClick", "iconClick", "selectedChange", "update:selectedValue", "update:data"], setup: function(n, t) {
  var e = t.emit, i = t.slots, s = (0, I.ref)(), o = (0, I.computed)((function() {
    return me(n.data, n.rootPath);
  })), a = function(R, D) {
    return o.value.reduce((function(M, _) {
      var v, C = _.level >= R || _.length >= D, E = (v = n.pathCollapsible) === null || v === void 0 ? void 0 : v.call(n, _);
      return _.type !== "objectStart" && _.type !== "arrayStart" || !C && !E ? M : At(At({}, M), {}, sn({}, _.path, 1));
    }), {});
  }, r = (0, I.reactive)({ translateY: 0, visibleData: null, hiddenPaths: a(n.deep, n.collapsedNodeLength), startIndex: 0, endIndex: 0 }), l = [], c = [], u = 0, h = {}, d = function(R) {
    l = Array(R).fill(0).map((function() {
      return n.itemHeight || 20;
    })), (c = new Array(R + 1))[0] = 0;
    for (var D = 0; D < R; D++) c[D + 1] = c[D] + l[D];
    u = c[R] || 0;
  }, f = function(R) {
    var D = l.length;
    R < 0 && (R = 0), R > D && (R = D);
    for (var M = R; M < D; M++) c[M + 1] = c[M] + l[M];
    u = c[D] || 0;
  }, p = function(R, D) {
    for (var M = 0, _ = R.length - 1; M < _; ) {
      var v = M + _ >>> 1;
      R[v] < D ? M = v + 1 : _ = v;
    }
    return M;
  }, g = (0, I.computed)((function() {
    for (var R = null, D = [], M = o.value.length, _ = 0; _ < M; _++) {
      var v = At(At({}, o.value[_]), {}, { id: _ }), C = r.hiddenPaths[v.path];
      if (R && R.path === v.path) {
        var E = R.type === "objectStart", F = At(At(At({}, v), R), {}, { showComma: v.showComma, content: E ? "{...}" : "[...]", type: E ? "objectCollapsed" : "arrayCollapsed" });
        R = null, D.push(F);
      } else {
        if (C && !R) {
          R = v;
          continue;
        }
        if (R) continue;
        D.push(v);
      }
    }
    return D;
  })), m = (0, I.computed)((function() {
    var R = n.selectedValue;
    return R && n.selectableType === "multiple" && Array.isArray(R) ? R : [R];
  })), b = (0, I.computed)((function() {
    return !n.selectableType || n.selectOnClickNode || n.showSelectController ? "" : "When selectableType is not null, selectOnClickNode and showSelectController cannot be false at the same time, because this will cause the selection to fail.";
  })), x = (0, I.computed)((function() {
    return n.dynamicHeight ? u || 0 : g.value.length * n.itemHeight;
  })), S = function R() {
    var D = g.value;
    if (D) if (n.virtual) {
      var M, _ = ((M = s.value) === null || M === void 0 ? void 0 : M.scrollTop) || 0;
      if (n.dynamicHeight) {
        l.length !== D.length && d(D.length);
        var v = (function(et) {
          var z = p(c, et + 1e-4);
          return Math.max(0, Math.min(z - 1, l.length - 1));
        })(_), C = (function(et, z) {
          var st = p(c, et + z);
          return Math.max(0, Math.min(st + 1, l.length));
        })(_, n.height), E = Math.max(0, v - 5), F = Math.min(D.length, C + 5);
        r.startIndex = E, r.endIndex = F, r.translateY = c[E] || 0, r.visibleData = D.slice(E, F), (0, I.nextTick)().then((function() {
          for (var et = !1, z = r.startIndex; z < r.endIndex; z++) {
            var st = h[z];
            if (st) {
              var xt = st.offsetHeight;
              xt && l[z] !== xt && (l[z] = xt, c[z + 1] = c[z] + l[z], f(z + 1), et = !0);
            }
          }
          et && R();
        }));
      } else {
        var L = n.height / n.itemHeight, V = Math.floor(_ / n.itemHeight), H = V < 0 ? 0 : V + L > D.length ? D.length - L : V;
        H < 0 && (H = 0);
        var K = H + L;
        r.translateY = H * n.itemHeight, r.startIndex = H, r.endIndex = K, r.visibleData = D.slice(H, K);
      }
    } else r.translateY = 0, r.startIndex = 0, r.endIndex = D.length, r.visibleData = D;
  }, y = null, w = function() {
    y && cancelAnimationFrame(y), y = requestAnimationFrame((function() {
      S();
    }));
  }, O = function(R) {
    var D, M, _ = R.path, v = n.selectableType;
    if (v === "multiple") {
      var C = m.value.findIndex((function(V) {
        return V === _;
      })), E = Hn(m.value);
      C !== -1 ? E.splice(C, 1) : E.push(_), e("update:selectedValue", E), e("selectedChange", E, Hn(m.value));
    } else if (v === "single" && m.value[0] !== _) {
      var F = (D = m.value, M = 1, (function(V) {
        if (Array.isArray(V)) return V;
      })(D) || (function(V, H) {
        var K = V == null ? null : typeof Symbol < "u" && V[Symbol.iterator] || V["@@iterator"];
        if (K != null) {
          var et, z, st = [], xt = !0, Re = !1;
          try {
            for (K = K.call(V); !(xt = (et = K.next()).done) && (st.push(et.value), !H || st.length !== H); xt = !0) ;
          } catch (fn) {
            Re = !0, z = fn;
          } finally {
            try {
              xt || K.return == null || K.return();
            } finally {
              if (Re) throw z;
            }
          }
          return st;
        }
      })(D, M) || gr(D, M) || (function() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      })())[0], L = _;
      e("update:selectedValue", L), e("selectedChange", L, F);
    }
  }, k = function(R) {
    e("nodeClick", R);
  }, T = function(R) {
    e("nodeMouseover", R);
  }, P = function(R, D) {
    if (R) r.hiddenPaths = At(At({}, r.hiddenPaths), {}, sn({}, D, 1));
    else {
      var M = At({}, r.hiddenPaths);
      delete M[D], r.hiddenPaths = M;
    }
  }, A = function(R, D) {
    n.collapsedOnClickBrackets && P(R, D.path), e("bracketsClick", R, D);
  }, N = function(R, D) {
    P(R, D.path), e("iconClick", R, D);
  }, B = function(R, D) {
    var M = Li(n.data), _ = n.rootPath;
    new Function("data", "val", "data".concat(D.slice(_.length), "=val"))(M, R), e("update:data", M);
  };
  return (0, I.watchEffect)((function() {
    b.value && (function(R) {
      throw new Error("[VueJSONPretty] ".concat(R));
    })(b.value);
  })), (0, I.watchEffect)((function() {
    g.value && (n.virtual && n.dynamicHeight && l.length !== g.value.length && d(g.value.length), S());
  })), (0, I.watch)((function() {
    return [n.dynamicHeight, n.itemHeight, o.value.length];
  }), (function() {
    n.virtual && n.dynamicHeight && (d(g.value.length), (0, I.nextTick)(S));
  })), (0, I.watch)((function() {
    return n.deep;
  }), (function(R) {
    R && (r.hiddenPaths = a(R, n.collapsedNodeLength));
  })), (0, I.watch)((function() {
    return n.collapsedNodeLength;
  }), (function(R) {
    R && (r.hiddenPaths = a(n.deep, R));
  })), function() {
    var R, D, M, _, v, C = (R = n.renderNodeKey) !== null && R !== void 0 ? R : i.renderNodeKey, E = (D = n.renderNodeValue) !== null && D !== void 0 ? D : i.renderNodeValue, F = (M = (_ = n.renderNodeActions) !== null && _ !== void 0 ? _ : i.renderNodeActions) !== null && M !== void 0 && M, L = (v = r.visibleData) === null || v === void 0 ? void 0 : v.map((function(V, H) {
      var K = r.startIndex + H;
      return (0, I.createVNode)("div", { key: V.id, ref: function(et) {
        return (function(z, st) {
          st ? h[z] = st : delete h[z];
        })(K, et || null);
      } }, [(0, I.createVNode)(Cf, { data: n.data, rootPath: n.rootPath, indent: n.indent, node: V, collapsed: !!r.hiddenPaths[V.path], theme: n.theme, showDoubleQuotes: n.showDoubleQuotes, showLength: n.showLength, checked: m.value.includes(V.path), selectableType: n.selectableType, showLine: n.showLine, showLineNumber: n.showLineNumber, showSelectController: n.showSelectController, selectOnClickNode: n.selectOnClickNode, nodeSelectable: n.nodeSelectable, highlightSelectedNode: n.highlightSelectedNode, editable: n.editable, editableTrigger: n.editableTrigger, showIcon: n.showIcon, showKeyValueSpace: n.showKeyValueSpace, renderNodeKey: C, renderNodeValue: E, renderNodeActions: F, onNodeClick: k, onNodeMouseover: T, onBracketsClick: A, onIconClick: N, onSelectedChange: O, onValueChange: B, class: n.dynamicHeight ? "dynamic-height" : void 0, style: n.dynamicHeight ? {} : n.itemHeight && n.itemHeight !== 20 ? { lineHeight: "".concat(n.itemHeight, "px") } : {} }, null)]);
    }));
    return (0, I.createVNode)("div", { ref: s, class: { "vjs-tree": !0, "is-virtual": n.virtual, dark: n.theme === "dark" }, onScroll: n.virtual ? w : void 0, style: n.showLineNumber ? At({ paddingLeft: "".concat(12 * Number(o.value.length.toString().length), "px") }, n.style) : n.style }, [n.virtual ? (0, I.createVNode)("div", { class: "vjs-tree-list", style: { height: "".concat(n.height, "px") } }, [(0, I.createVNode)("div", { class: "vjs-tree-list-holder", style: { height: "".concat(x.value, "px") } }, [(0, I.createVNode)("div", { class: "vjs-tree-list-holder-inner", style: { transform: "translateY(".concat(r.translateY, "px)") } }, [L])])]) : L]);
  };
} });
var Tf = pr.A;
const Pf = {
  key: 0,
  style: { overflow: "hidden", height: "100%", width: "100%", display: "flex", "flex-direction": "column" }
}, Lf = { style: { padding: "0.5rem", "border-bottom": "1px solid #e5e7eb", display: "flex", gap: "0.5rem", "align-items": "center" } }, Df = { style: { "margin-left": "auto", display: "flex", gap: "1rem", "font-size": "0.85rem", color: "#6b7280" } }, Af = {
  key: 0,
  style: { display: "flex", flex: "1", overflow: "hidden", gap: "0.5rem" }
}, Rf = {
  key: 0,
  style: { padding: "1rem", color: "#6b7280" }
}, Ef = ["data-thing-id"], Vf = ["onClick"], If = { class: "node-label" }, Ff = { class: "node-count" }, Nf = {
  key: 0,
  class: "children"
}, Bf = {
  key: 0,
  class: "thing-info"
}, jf = { class: "info-value" }, zf = {
  key: 1,
  class: "thing-info"
}, Wf = { class: "properties-list" }, Hf = ["onClick"], $f = { class: "node-label" }, Uf = {
  key: 0,
  class: "unit-badge"
}, Yf = { class: "node-count" }, Xf = {
  key: 0,
  class: "children"
}, Gf = {
  key: 0,
  class: "ds-info"
}, qf = { class: "info-value-small" }, Kf = {
  key: 1,
  class: "ds-info"
}, Zf = { class: "info-value-small" }, Jf = {
  key: 2,
  class: "observation-item empty"
}, Qf = { class: "observation-time" }, tp = { class: "observation-result" }, ep = {
  key: 3,
  class: "observation-item more"
}, np = { class: "right-panel" }, ip = { class: "map-popup" }, sp = { key: 0 }, op = {
  key: 1,
  class: "no-locations"
}, ap = { class: "chart-header" }, rp = { key: 0 }, lp = { class: "chart-container" }, cp = {
  key: 1,
  class: "no-chart-data"
}, up = {
  key: 1,
  class: "json-view"
}, hp = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", dp = /* @__PURE__ */ ct({
  __name: "MapPreview",
  props: {
    dataSource: {}
  },
  setup(n) {
    Si.register(...$d);
    const t = n, e = W(null), i = W(null), s = W("tree"), o = W(null);
    console.log(t.dataSource), qt(t.dataSource, () => {
      l();
    }, { deep: !0 });
    const a = es(null), r = W(t.dataSource), { update: l } = _r(t.dataSource.type, r, a);
    qt(a, async () => {
      console.log("tempStore changed", a.value), e.value = await a.value.getData("OGCSTAData"), i.value = await a.value.getOriginalData(), a.value && typeof a.value.subscribe == "function" && a.value.subscribe(async () => {
        console.log("Datasource updated, refreshing data"), e.value = await a.value.getData("OGCSTAData"), console.log("Updated data after subscribe callback:", e.value);
      });
    }, { deep: !0 });
    const c = Ft(() => {
      const M = [];
      return JSON.stringify(e.value, (_, v) => {
        if (typeof v == "object" && v !== null) {
          if (M.includes(v)) return;
          M.push(v);
        }
        return v;
      }, 2);
    }), u = Ft(() => e.value?.things ? e.value.things.map((M) => ({
      ...M,
      datastreams: M.datastreams?.map((_) => ({
        ..._,
        observations: _.observations || []
      })) || []
    })) : []), h = W(/* @__PURE__ */ new Set()), d = W(/* @__PURE__ */ new Set()), f = W(null), p = W(!0), g = W([50.93115286, 11.60392726]), m = W(10), b = (M) => {
      const _ = [
        M.Locations?.[0]?.location,
        M.location,
        M.Locations?.[0],
        M.locations?.[0]?.location,
        M.locations?.[0]
      ];
      for (const v of _)
        if (v) {
          if (v.coordinates && Array.isArray(v.coordinates)) {
            const C = v.coordinates;
            if (C.length >= 2 && typeof C[0] == "number")
              return [C[1], C[0]];
          }
          if (Array.isArray(v) && v.length >= 2 && typeof v[0] == "number")
            return [v[1], v[0]];
          if (typeof v.lat == "number" && typeof v.lng == "number")
            return [v.lat, v.lng];
          if (typeof v.latitude == "number" && typeof v.longitude == "number")
            return [v.latitude, v.longitude];
        }
      return null;
    }, x = Ft(() => {
      if (!u.value) return [];
      const M = [];
      for (const _ of u.value) {
        const v = b(_);
        v && M.push({
          id: _.iotId || _["@iot.id"],
          name: _.name,
          description: _.description,
          latLng: v,
          properties: _.properties,
          datastreamCount: _.datastreams?.length || 0
        });
      }
      return console.log("Found locations:", M.length, "of", u.value.length, "things"), M.length === 0 && u.value.length > 0 && console.log("Sample thing structure:", JSON.stringify(u.value[0], null, 2).slice(0, 500)), M;
    });
    qt(x, (M) => {
      if (M.length > 0) {
        const _ = M.reduce((C, E) => C + E.latLng[0], 0), v = M.reduce((C, E) => C + E.latLng[1], 0);
        g.value = [_ / M.length, v / M.length];
      }
    }, { immediate: !0 }), qt(() => o.value, async () => {
      await it(), setTimeout(() => {
        if (N.value?.leafletObject && (N.value.leafletObject.invalidateSize(), f.value?.id)) {
          const M = x.value.find((_) => _.id === f.value.id);
          M && N.value.leafletObject.setView(M.latLng, N.value.leafletObject.getZoom(), { animate: !1 });
        }
      }, 100);
    });
    const S = async (M) => {
      f.value = M;
      const _ = M.id || M.iotId || M["@iot.id"];
      h.value.add(_), y(_), await it();
      const v = document.querySelector(`[data-thing-id="${_}"]`);
      v && v.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, y = (M) => {
      const _ = x.value.find((v) => v.id === M);
      _ && N.value?.leafletObject && N.value.leafletObject.setView(_.latLng, 14, { animate: !0 });
    }, w = (M) => {
      const _ = M.iotId || M["@iot.id"];
      f.value = { id: _, ...M }, y(_);
    }, O = (M, _) => {
      h.value.has(M) ? (h.value.delete(M), f.value = null) : (h.value.add(M), _ && w(_));
    }, k = (M, _, v) => {
      v.stopPropagation(), d.value.has(M) ? d.value.delete(M) : d.value.add(M);
    }, T = W(!1), P = W(null), A = es(null), N = W(null), B = async (M, _) => {
      _.stopPropagation(), o.value = M;
      const v = M.iotId || M["@iot.id"];
      console.log("Loading observations for datastream:", v), T.value = !0;
      try {
        if (a.value) {
          console.log("Calling getData with filter option");
          const C = await a.value.getData("OGCSTAData", {
            filter: {
              observations: [M]
            }
          });
          if (console.log("Filtered data received:", C), C?.observations && C.observations.length > 0) {
            console.log(`Found ${C.observations.length} observations in filtered data`);
            const E = C.observations.filter(
              (L) => L.ds_source === v || L.Datastream?.["@iot.id"] === v
            );
            console.log(`Found ${E.length} observations for datastream ${v}`);
            let F = !1;
            if (e.value?.things) {
              for (const L of e.value.things)
                if (L.datastreams) {
                  const V = L.datastreams.find(
                    (H) => (H.iotId || H["@iot.id"]) === v
                  );
                  if (V) {
                    V.observations = E, console.log("Updated observations in existing data structure"), console.log("First observation:", E[0]), console.log("ExistingDs after update:", V), e.value = { ...e.value }, o.value = V, console.log("selectedDatastream set to:", o.value), console.log("selectedDatastream.observations:", o.value?.observations?.length), F = !0;
                    break;
                  }
                }
            }
            if (!F) {
              console.log("Creating datastream object with observations");
              const L = {
                ...M,
                observations: E
              };
              o.value = L;
            }
          } else
            console.warn("No observations in filtered data"), o.value = M;
        } else
          console.error("tempStore not available");
      } catch (C) {
        console.error("Error loading observations:", C);
      } finally {
        T.value = !1;
      }
    }, R = Ft(() => {
      if (console.log("Computing chartData, selectedDatastream:", o.value), console.log("selectedDatastream.value?.observations:", o.value?.observations?.length), !o.value?.observations || o.value.observations.length === 0)
        return console.log("No observations, returning null"), null;
      const M = [...o.value.observations].sort((v, C) => new Date(v.phenomenonTime).getTime() - new Date(C.phenomenonTime).getTime()), _ = {
        labels: M.map((v) => new Date(v.phenomenonTime).toLocaleString("de-DE", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        })),
        datasets: [{
          label: o.value.name || "Observations",
          data: M.map((v) => v.result),
          borderColor: "#3b82f6",
          backgroundColor: "rgba(59, 130, 246, 0.1)",
          tension: 0.3,
          fill: !0
        }]
      };
      return console.log("Chart data computed:", _), console.log("Number of data points:", _.datasets[0].data.length), _;
    }), D = Ft(() => ({
      responsive: !0,
      maintainAspectRatio: !1,
      plugins: {
        legend: {
          display: !0,
          position: "top"
        },
        title: {
          display: !0,
          text: o.value?.name || "Datastream Observations"
        }
      },
      scales: {
        y: {
          beginAtZero: !1,
          title: {
            display: !0,
            text: o.value?.unitOfMeasurement?.name || "Value"
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
    return qt([R, P], async () => {
      if (!P.value || !R.value) {
        A.value && (A.value.destroy(), A.value = null);
        return;
      }
      await it(), A.value && A.value.destroy();
      const M = P.value.getContext("2d");
      M && (A.value = new Si(M, {
        type: "line",
        data: R.value,
        options: D.value
      }));
    }), (M, _) => {
      const v = Et("va-button"), C = Et("va-divider"), E = Et("va-checkbox"), F = Et("va-icon");
      return a.value && e.value ? (q(), J("div", Pf, [
        j("div", Lf, [
          Y(v, {
            preset: s.value === "tree" ? "primary" : "secondary",
            size: "small",
            onClick: _[0] || (_[0] = (L) => s.value = "tree")
          }, {
            default: Lt(() => [..._[4] || (_[4] = [
              pn(" Tree View ", -1)
            ])]),
            _: 1
          }, 8, ["preset"]),
          Y(v, {
            preset: s.value === "json" ? "primary" : "secondary",
            size: "small",
            onClick: _[1] || (_[1] = (L) => s.value = "json")
          }, {
            default: Lt(() => [..._[5] || (_[5] = [
              pn(" JSON View ", -1)
            ])]),
            _: 1
          }, 8, ["preset"]),
          Y(C, { vertical: "" }),
          Y(E, {
            modelValue: p.value,
            "onUpdate:modelValue": _[2] || (_[2] = (L) => p.value = L),
            label: "Show Map",
            size: "small"
          }, null, 8, ["modelValue"]),
          j("div", Df, [
            j("span", null, [
              j("strong", null, dt(u.value.length), 1),
              _[6] || (_[6] = pn(" Things", -1))
            ]),
            j("span", null, [
              j("strong", null, dt(x.value.length), 1),
              _[7] || (_[7] = pn(" with Location", -1))
            ])
          ])
        ]),
        s.value === "tree" ? (q(), J("div", Af, [
          j("div", {
            class: "tree-view",
            style: xr({ width: p.value || o.value ? "45%" : "100%", minWidth: "300px" })
          }, [
            u.value.length === 0 ? (q(), J("div", Rf, " No data available ")) : _t("", !0),
            (q(!0), J(Ve, null, Ie(u.value, (L) => (q(), J("div", {
              key: L.iotId || L["@iot.id"],
              "data-thing-id": L.iotId || L["@iot.id"],
              class: gn(["thing-item", { "thing-selected": f.value?.id === (L.iotId || L["@iot.id"]) }])
            }, [
              j("div", {
                class: "tree-node thing-node",
                onClick: (V) => O(L.iotId || L["@iot.id"], L)
              }, [
                Y(F, {
                  name: h.value.has(L.iotId || L["@iot.id"]) ? "expand_more" : "chevron_right",
                  size: "small"
                }, null, 8, ["name"]),
                Y(F, {
                  name: "sensors",
                  size: "small",
                  color: "primary"
                }),
                j("span", If, dt(L.name || L.iotId || L["@iot.id"]), 1),
                L.Locations?.[0]?.location || L.location ? (q(), mn(F, {
                  key: 0,
                  name: "location_on",
                  size: "small",
                  color: "warning",
                  title: "Has location"
                })) : _t("", !0),
                j("span", Ff, "(" + dt(L.datastreams?.length || 0) + " DS)", 1)
              ], 8, Vf),
              h.value.has(L.iotId || L["@iot.id"]) ? (q(), J("div", Nf, [
                L.description ? (q(), J("div", Bf, [
                  _[8] || (_[8] = j("span", { class: "info-label" }, "Description:", -1)),
                  j("span", jf, dt(L.description), 1)
                ])) : _t("", !0),
                L.properties && Object.keys(L.properties).length > 0 ? (q(), J("div", zf, [
                  _[9] || (_[9] = j("span", { class: "info-label" }, "Properties:", -1)),
                  j("div", Wf, [
                    (q(!0), J(Ve, null, Ie(L.properties, (V, H) => (q(), J("span", {
                      key: H,
                      class: "property-tag"
                    }, dt(H) + ": " + dt(typeof V == "object" ? JSON.stringify(V) : V), 1))), 128))
                  ])
                ])) : _t("", !0),
                (q(!0), J(Ve, null, Ie(L.datastreams, (V) => (q(), J("div", {
                  key: V.iotId || V["@iot.id"],
                  class: "datastream-item"
                }, [
                  j("div", {
                    class: gn(["tree-node datastream-node", { selected: o.value && (o.value.iotId || o.value["@iot.id"]) === (V.iotId || V["@iot.id"]) }]),
                    onClick: (H) => B(V, H)
                  }, [
                    Y(F, {
                      name: d.value.has(V.iotId || V["@iot.id"]) ? "expand_more" : "chevron_right",
                      size: "small",
                      onClick: (H) => k(V.iotId || V["@iot.id"], V, H)
                    }, null, 8, ["name", "onClick"]),
                    Y(F, {
                      name: "timeline",
                      size: "small",
                      color: "success"
                    }),
                    j("span", $f, dt(V.name || V.iotId || V["@iot.id"]), 1),
                    V.unitOfMeasurement?.symbol ? (q(), J("span", Uf, dt(V.unitOfMeasurement.symbol), 1)) : _t("", !0),
                    j("span", Yf, "(" + dt(V.observations?.length || 0) + " obs)", 1),
                    V.observations && V.observations.length > 0 ? (q(), mn(F, {
                      key: 1,
                      name: "show_chart",
                      size: "small",
                      color: "info",
                      title: "View chart"
                    })) : _t("", !0)
                  ], 10, Hf),
                  d.value.has(V.iotId || V["@iot.id"]) ? (q(), J("div", Xf, [
                    V.description ? (q(), J("div", Gf, [
                      j("span", qf, dt(V.description), 1)
                    ])) : _t("", !0),
                    V.unitOfMeasurement ? (q(), J("div", Kf, [
                      _[10] || (_[10] = j("span", { class: "info-label-small" }, "Unit:", -1)),
                      j("span", Zf, dt(V.unitOfMeasurement.name) + " (" + dt(V.unitOfMeasurement.symbol) + ")", 1)
                    ])) : _t("", !0),
                    !V.observations || V.observations.length === 0 ? (q(), J("div", Jf, " No observations loaded ")) : _t("", !0),
                    (q(!0), J(Ve, null, Ie((V.observations || []).slice(0, 10), (H, K) => (q(), J("div", {
                      key: H["@iot.id"] || K,
                      class: "observation-item"
                    }, [
                      Y(F, {
                        name: "circle",
                        size: "12px",
                        color: "info"
                      }),
                      j("span", Qf, dt(new Date(H.phenomenonTime).toLocaleString("de-DE")), 1),
                      j("span", tp, dt(H.result) + " " + dt(V.unitOfMeasurement?.symbol || ""), 1)
                    ]))), 128)),
                    V.observations && V.observations.length > 10 ? (q(), J("div", ep, " ... and " + dt(V.observations.length - 10) + " more observations ", 1)) : _t("", !0)
                  ])) : _t("", !0)
                ]))), 128))
              ])) : _t("", !0)
            ], 10, Ef))), 128))
          ], 4),
          j("div", np, [
            p.value && x.value.length > 0 ? (q(), J("div", {
              key: 0,
              class: gn(["map-panel", { "half-height": o.value }])
            }, [
              Y($(af), {
                ref_key: "mapRef",
                ref: N,
                center: g.value,
                zoom: m.value,
                style: { height: "100%", width: "100%" }
              }, {
                default: Lt(() => [
                  Y($(bf), {
                    url: hp,
                    options: { maxNativeZoom: 19, maxZoom: 21 }
                  }),
                  f.value ? (q(), mn($(qd), {
                    key: 0,
                    "lat-lng": x.value.find((L) => L.id === f.value?.id)?.latLng,
                    radius: 20,
                    fillOpacity: 0.3,
                    fillColor: "#f59e0b",
                    color: "#f59e0b",
                    weight: 3
                  }, null, 8, ["lat-lng"])) : _t("", !0),
                  (q(!0), J(Ve, null, Ie(x.value, (L) => (q(), mn($(df), {
                    key: L.id,
                    "lat-lng": L.latLng,
                    onClick: (V) => S(L)
                  }, {
                    default: Lt(() => [
                      Y($(gf), null, {
                        default: Lt(() => [
                          j("div", ip, [
                            j("strong", null, dt(L.name), 1),
                            L.description ? (q(), J("p", sp, dt(L.description), 1)) : _t("", !0),
                            j("small", null, dt(L.datastreamCount) + " Datastreams", 1)
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
            ], 2)) : p.value && x.value.length === 0 ? (q(), J("div", op, [
              Y(F, {
                name: "location_off",
                size: "large",
                color: "secondary"
              }),
              _[11] || (_[11] = j("p", null, "No location data available", -1))
            ])) : _t("", !0),
            o.value ? (q(), J("div", {
              key: 2,
              class: gn(["chart-panel", { "half-height": p.value && x.value.length > 0 }])
            }, [
              j("div", ap, [
                j("div", null, [
                  j("h3", null, dt(o.value.name || "Datastream"), 1),
                  o.value.description ? (q(), J("p", rp, dt(o.value.description), 1)) : _t("", !0)
                ]),
                Y(v, {
                  icon: "close",
                  preset: "plain",
                  size: "small",
                  onClick: _[3] || (_[3] = (L) => o.value = null)
                })
              ]),
              j("div", lp, [
                R.value ? (q(), J("canvas", {
                  key: 0,
                  ref_key: "chartCanvas",
                  ref: P
                }, null, 512)) : (q(), J("div", cp, [..._[12] || (_[12] = [
                  j("p", null, "No observation data available", -1),
                  j("small", null, "Click on a datastream to load observations", -1)
                ])]))
              ])
            ], 2)) : _t("", !0)
          ])
        ])) : (q(), J("div", up, [
          Y($(Tf), { data: c.value }, null, 8, ["data"])
        ]))
      ])) : _t("", !0);
    };
  }
}), yr = (n, t) => {
  const e = n.__vccOpts || n;
  for (const [i, s] of t)
    e[i] = s;
  return e;
}, fp = /* @__PURE__ */ yr(dp, [["__scopeId", "data-v-dbdeb998"]]), pp = { class: "ogcsta-settings-wrapper" }, gp = { class: "ogcsta-settings" }, mp = { class: "setting-group" }, bp = { class: "setting-group" }, yp = { class: "history-settings" }, vp = { class: "setting-group" }, xp = { class: "filter-header" }, _p = { class: "datetime-picker-group" }, Sp = { class: "datetime-picker-group" }, wp = { class: "setting-group" }, kp = { class: "filter-header" }, Mp = { class: "datetime-picker-group" }, Cp = { class: "datetime-picker-group" }, Op = { class: "setting-group" }, Tp = { class: "filter-header" }, Pp = { class: "datetime-picker-group" }, Lp = { class: "datetime-picker-group" }, Dp = { class: "setting-group" }, Ap = /* @__PURE__ */ ct({
  __name: "OGCSTAStoreSettings",
  props: {
    config: {},
    dataSources: {},
    connections: {}
  },
  setup(n) {
    const t = Ft(() => n.connections.filter((S) => S.type === "rest")), e = Ft(() => n.connections.filter((S) => S.type === "mqtt")), i = ut(Sr) ?? null;
    if (i || console.warn("VariableRepository not provided"), n.config.history || (n.config.history = {
      enabled: !1,
      timeRange: {},
      resultTime: {},
      phenomenonTime: {}
    }), n.config.history.timeRange || (n.config.history.timeRange = {}), n.config.history.resultTime || (n.config.history.resultTime = {}), n.config.history.phenomenonTime || (n.config.history.phenomenonTime = {}), n.config.history.enabled === void 0) {
      const S = n.config.history.timeRange?.start || n.config.history.timeRange?.startVariable || n.config.history.timeRange?.end || n.config.history.timeRange?.endVariable || n.config.history.phenomenonTime?.start || n.config.history.phenomenonTime?.startVariable || n.config.history.phenomenonTime?.end || n.config.history.phenomenonTime?.endVariable || n.config.history.resultTime?.start || n.config.history.resultTime?.startVariable || n.config.history.resultTime?.end || n.config.history.resultTime?.endVariable;
      n.config.history.enabled = !!S;
    }
    const s = (S, y, w) => {
      if (w && i) {
        const O = i.getVariable(w);
        if (O) {
          S.setTo(O);
          return;
        }
      }
      y && (S.value = y);
    }, o = No({
      timeRangeStart: new we(),
      timeRangeEnd: new we(),
      phenomenonTimeStart: new we(),
      phenomenonTimeEnd: new we(),
      resultTimeStart: new we(),
      resultTimeEnd: new we()
    });
    s(o.timeRangeStart, n.config.history.timeRange?.start, n.config.history.timeRange?.startVariable), s(o.timeRangeEnd, n.config.history.timeRange?.end, n.config.history.timeRange?.endVariable), s(o.phenomenonTimeStart, n.config.history.phenomenonTime?.start, n.config.history.phenomenonTime?.startVariable), s(o.phenomenonTimeEnd, n.config.history.phenomenonTime?.end, n.config.history.phenomenonTime?.endVariable), s(o.resultTimeStart, n.config.history.resultTime?.start, n.config.history.resultTime?.startVariable), s(o.resultTimeEnd, n.config.history.resultTime?.end, n.config.history.resultTime?.endVariable);
    const a = (S, y, w, O) => {
      qt(S, (k) => {
        const T = y();
        k.isSet && k.variable ? (T[O] = k.variable, T[w] = void 0) : (T[w] = k.value, T[O] = void 0);
      }, { deep: !0 });
    };
    a(() => o.timeRangeStart, () => n.config.history.timeRange, "start", "startVariable"), a(() => o.timeRangeEnd, () => n.config.history.timeRange, "end", "endVariable"), a(() => o.phenomenonTimeStart, () => n.config.history.phenomenonTime, "start", "startVariable"), a(() => o.phenomenonTimeEnd, () => n.config.history.phenomenonTime, "end", "endVariable"), a(() => o.resultTimeStart, () => n.config.history.resultTime, "start", "startVariable"), a(() => o.resultTimeEnd, () => n.config.history.resultTime, "end", "endVariable");
    const r = () => {
      o.timeRangeStart.value = "", o.timeRangeEnd.value = "", n.config.history.timeRange = {};
    }, l = () => {
      o.phenomenonTimeStart.value = "", o.phenomenonTimeEnd.value = "", n.config.history.phenomenonTime = {};
    }, c = () => {
      o.resultTimeStart.value = "", o.resultTimeEnd.value = "", n.config.history.resultTime = {};
    }, u = (S) => {
      if (!S) return null;
      const y = new Date(S);
      return isNaN(y.getTime()) ? null : y;
    }, h = (S, y) => {
      if (!S) return "";
      const w = S.getFullYear(), O = (S.getMonth() + 1).toString().padStart(2, "0"), k = S.getDate().toString().padStart(2, "0"), T = (y?.getHours() || 0).toString().padStart(2, "0"), P = (y?.getMinutes() || 0).toString().padStart(2, "0"), A = (y?.getSeconds() || 0).toString().padStart(2, "0");
      return `${w}-${O}-${k}T${T}:${P}:${A}Z`;
    }, d = (S) => {
      const y = W(u(S().value)), w = W(u(S().value));
      return qt(() => S().value, (k) => {
        y.value = u(k), w.value = u(k);
      }), { dateValue: y, timeValue: w, updateWrapper: () => {
        S().value = h(y.value, w.value);
      } };
    }, f = d(() => o.timeRangeStart), p = d(() => o.timeRangeEnd), g = d(() => o.phenomenonTimeStart), m = d(() => o.phenomenonTimeEnd), b = d(() => o.resultTimeStart), x = d(() => o.resultTimeEnd);
    return (S, y) => {
      const w = Et("VaSelect"), O = Et("va-button"), k = Et("va-date-input"), T = Et("va-time-input"), P = Et("va-select"), A = Et("va-input"), N = Et("va-checkbox"), B = Et("va-collapse"), R = Et("va-scroll-container");
      return q(), J("div", pp, [
        Y(R, {
          class: "ogcsta-scroll-container",
          vertical: ""
        }, {
          default: Lt(() => [
            j("div", gp, [
              j("div", mp, [
                Y(w, {
                  modelValue: n.config.connection,
                  "onUpdate:modelValue": y[0] || (y[0] = (D) => n.config.connection = D),
                  label: "Connection",
                  options: t.value,
                  "text-by": "name",
                  "value-by": "uid",
                  clearable: ""
                }, null, 8, ["modelValue", "options"])
              ]),
              j("div", bp, [
                Y(w, {
                  modelValue: n.config.mqttConnection,
                  "onUpdate:modelValue": y[1] || (y[1] = (D) => n.config.mqttConnection = D),
                  label: "MQTT Connection (optional, for realtime updates)",
                  options: e.value,
                  "text-by": "name",
                  "value-by": "uid",
                  clearable: ""
                }, null, 8, ["modelValue", "options"])
              ]),
              Y(B, {
                modelValue: n.config.history.enabled,
                "onUpdate:modelValue": y[23] || (y[23] = (D) => n.config.history.enabled = D),
                icon: "history",
                header: "Historical Data Configuration"
              }, {
                default: Lt(() => [
                  j("div", yp, [
                    j("div", vp, [
                      j("div", xp, [
                        y[24] || (y[24] = j("h4", null, "Time Range Filter", -1)),
                        Y(O, {
                          preset: "plain",
                          icon: "delete",
                          size: "small",
                          color: "danger",
                          onClick: r,
                          title: "Clear Time Range Filter"
                        })
                      ]),
                      Y($(ke), {
                        modelValue: o.timeRangeStart,
                        "onUpdate:modelValue": y[4] || (y[4] = (D) => o.timeRangeStart = D),
                        label: "Start Time"
                      }, {
                        default: Lt(({ value: D, change: M }) => [
                          j("div", _p, [
                            Y(k, {
                              modelValue: $(f).dateValue.value,
                              "onUpdate:modelValue": [
                                (_) => $(f).dateValue.value = _,
                                y[2] || (y[2] = (_) => $(f).updateWrapper())
                              ],
                              label: "Start Date"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            Y(T, {
                              modelValue: $(f).timeValue.value,
                              "onUpdate:modelValue": [
                                (_) => $(f).timeValue.value = _,
                                y[3] || (y[3] = (_) => $(f).updateWrapper())
                              ],
                              label: "Start Time"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      Y($(ke), {
                        modelValue: o.timeRangeEnd,
                        "onUpdate:modelValue": y[7] || (y[7] = (D) => o.timeRangeEnd = D),
                        label: "End Time"
                      }, {
                        default: Lt(({ value: D, change: M }) => [
                          j("div", Sp, [
                            Y(k, {
                              modelValue: $(p).dateValue.value,
                              "onUpdate:modelValue": [
                                (_) => $(p).dateValue.value = _,
                                y[5] || (y[5] = (_) => $(p).updateWrapper())
                              ],
                              label: "End Date"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            Y(T, {
                              modelValue: $(p).timeValue.value,
                              "onUpdate:modelValue": [
                                (_) => $(p).timeValue.value = _,
                                y[6] || (y[6] = (_) => $(p).updateWrapper())
                              ],
                              label: "End Time"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    j("div", wp, [
                      j("div", kp, [
                        y[25] || (y[25] = j("h4", null, "Phenomenon Time Filter", -1)),
                        Y(O, {
                          preset: "plain",
                          icon: "delete",
                          size: "small",
                          color: "danger",
                          onClick: l,
                          title: "Clear Phenomenon Time Filter"
                        })
                      ]),
                      Y($(ke), {
                        modelValue: o.phenomenonTimeStart,
                        "onUpdate:modelValue": y[10] || (y[10] = (D) => o.phenomenonTimeStart = D),
                        label: "Start Time"
                      }, {
                        default: Lt(({ value: D, change: M }) => [
                          j("div", Mp, [
                            Y(k, {
                              modelValue: $(g).dateValue.value,
                              "onUpdate:modelValue": [
                                (_) => $(g).dateValue.value = _,
                                y[8] || (y[8] = (_) => $(g).updateWrapper())
                              ],
                              label: "Start Date"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            Y(T, {
                              modelValue: $(g).timeValue.value,
                              "onUpdate:modelValue": [
                                (_) => $(g).timeValue.value = _,
                                y[9] || (y[9] = (_) => $(g).updateWrapper())
                              ],
                              label: "Start Time"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      Y($(ke), {
                        modelValue: o.phenomenonTimeEnd,
                        "onUpdate:modelValue": y[13] || (y[13] = (D) => o.phenomenonTimeEnd = D),
                        label: "End Time"
                      }, {
                        default: Lt(({ value: D, change: M }) => [
                          j("div", Cp, [
                            Y(k, {
                              modelValue: $(m).dateValue.value,
                              "onUpdate:modelValue": [
                                (_) => $(m).dateValue.value = _,
                                y[11] || (y[11] = (_) => $(m).updateWrapper())
                              ],
                              label: "End Date"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            Y(T, {
                              modelValue: $(m).timeValue.value,
                              "onUpdate:modelValue": [
                                (_) => $(m).timeValue.value = _,
                                y[12] || (y[12] = (_) => $(m).updateWrapper())
                              ],
                              label: "End Time"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    j("div", Op, [
                      j("div", Tp, [
                        y[26] || (y[26] = j("h4", null, "Result Time Filter", -1)),
                        Y(O, {
                          preset: "plain",
                          icon: "delete",
                          size: "small",
                          color: "danger",
                          onClick: c,
                          title: "Clear Result Time Filter"
                        })
                      ]),
                      Y($(ke), {
                        modelValue: o.resultTimeStart,
                        "onUpdate:modelValue": y[16] || (y[16] = (D) => o.resultTimeStart = D),
                        label: "Start Time"
                      }, {
                        default: Lt(({ value: D, change: M }) => [
                          j("div", Pp, [
                            Y(k, {
                              modelValue: $(b).dateValue.value,
                              "onUpdate:modelValue": [
                                (_) => $(b).dateValue.value = _,
                                y[14] || (y[14] = (_) => $(b).updateWrapper())
                              ],
                              label: "Start Date"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            Y(T, {
                              modelValue: $(b).timeValue.value,
                              "onUpdate:modelValue": [
                                (_) => $(b).timeValue.value = _,
                                y[15] || (y[15] = (_) => $(b).updateWrapper())
                              ],
                              label: "Start Time"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue"]),
                      Y($(ke), {
                        modelValue: o.resultTimeEnd,
                        "onUpdate:modelValue": y[19] || (y[19] = (D) => o.resultTimeEnd = D),
                        label: "End Time"
                      }, {
                        default: Lt(({ value: D, change: M }) => [
                          j("div", Lp, [
                            Y(k, {
                              modelValue: $(x).dateValue.value,
                              "onUpdate:modelValue": [
                                (_) => $(x).dateValue.value = _,
                                y[17] || (y[17] = (_) => $(x).updateWrapper())
                              ],
                              label: "End Date"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            Y(T, {
                              modelValue: $(x).timeValue.value,
                              "onUpdate:modelValue": [
                                (_) => $(x).timeValue.value = _,
                                y[18] || (y[18] = (_) => $(x).updateWrapper())
                              ],
                              label: "End Time"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        _: 1
                      }, 8, ["modelValue"])
                    ]),
                    j("div", Dp, [
                      y[28] || (y[28] = j("h4", null, "Query Settings", -1)),
                      Y(P, {
                        modelValue: n.config.history.orderBy,
                        "onUpdate:modelValue": y[20] || (y[20] = (D) => n.config.history.orderBy = D),
                        options: [
                          { text: "Phenomenon Time (Descending)", value: "phenomenonTime desc" },
                          { text: "Phenomenon Time (Ascending)", value: "phenomenonTime asc" },
                          { text: "Result Time (Descending)", value: "resultTime desc" },
                          { text: "Result Time (Ascending)", value: "resultTime asc" }
                        ],
                        label: "Order By",
                        clearable: ""
                      }, null, 8, ["modelValue"]),
                      Y(A, {
                        modelValue: n.config.history.limit,
                        "onUpdate:modelValue": y[21] || (y[21] = (D) => n.config.history.limit = D),
                        modelModifiers: { number: !0 },
                        label: "Limit (max records)",
                        type: "number",
                        min: 1,
                        max: 1e4,
                        placeholder: "100"
                      }, null, 8, ["modelValue"]),
                      Y(N, {
                        modelValue: n.config.useCurrentLocationInsteadOfHistorical,
                        "onUpdate:modelValue": y[22] || (y[22] = (D) => n.config.useCurrentLocationInsteadOfHistorical = D),
                        label: "Use current locations instead of historical locations"
                      }, {
                        label: Lt(() => [...y[27] || (y[27] = [
                          j("span", null, "Use current locations instead of historical locations", -1),
                          j("div", { style: { "font-size": "0.75rem", color: "var(--va-text-secondary)", "margin-top": "0.25rem" } }, " Reuse already loaded current locations instead of fetching historical locations via API ", -1)
                        ])]),
                        _: 1
                      }, 8, ["modelValue"])
                    ])
                  ])
                ]),
                _: 1
              }, 8, ["modelValue"])
            ])
          ]),
          _: 1
        })
      ]);
    };
  }
}), Rp = /* @__PURE__ */ yr(Ap, [["__scopeId", "data-v-2d37fb9c"]]), Ep = Symbol.for("OgcStaStoreFactory"), Vp = Symbol.for("OgcStaPreview"), Ip = Symbol.for("OgcStaSettings");
function Wp({ services: n }) {
  n.register("OgcStaPreview", fp), n.register("OgcStaSettings", Rp), n.getRequired(Fo).registerDatasourceType("ogcsta", {
    Store: Ep,
    Preview: Vp,
    Settings: Ip
  });
}
function Hp({ services: n }) {
  n.getRequired(Fo).unregisterDatasourceType("ogcsta"), n.unregister("OgcStaPreview"), n.unregister("OgcStaSettings");
}
export {
  Wp as activate,
  Hp as deactivate,
  Vp as symbolForOgcStaPreview,
  Ip as symbolForOgcStaSettings
};
