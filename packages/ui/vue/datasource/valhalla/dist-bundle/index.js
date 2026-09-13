(function(){var i="ui.vue.datasource.valhalla",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:\"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:\"\"}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}.valhalla-preview[data-v-e6b8f6de]{display:flex;height:100%;width:100%;overflow:hidden}.sidebar[data-v-e6b8f6de]{width:360px;min-width:300px;display:flex;flex-direction:column;border-right:1px solid #e5e7eb;overflow-y:auto;background:#fafafa}.search-section[data-v-e6b8f6de]{padding:.75rem;border-bottom:1px solid #e5e7eb;background:#fff}.search-box[data-v-e6b8f6de]{position:relative}.search-input[data-v-e6b8f6de]{width:100%}.search-results[data-v-e6b8f6de]{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #e5e7eb;border-radius:0 0 .5rem .5rem;box-shadow:0 4px 12px #00000026;z-index:1000;max-height:250px;overflow-y:auto}.search-result-item[data-v-e6b8f6de]{display:flex;align-items:flex-start;gap:.5rem;padding:.5rem .75rem;cursor:pointer;font-size:.85em;border-bottom:1px solid #f3f4f6}.search-result-item[data-v-e6b8f6de]:hover{background-color:#f0f4ff}.search-result-item[data-v-e6b8f6de]:last-child{border-bottom:none}.controls-row[data-v-e6b8f6de]{display:flex;align-items:flex-end;gap:.5rem;padding:.75rem;border-bottom:1px solid #e5e7eb;background:#fff}.costing-select[data-v-e6b8f6de]{flex:1}.waypoints-list[data-v-e6b8f6de]{flex:1;overflow-y:auto;padding:.5rem}.waypoints-header[data-v-e6b8f6de]{display:flex;justify-content:space-between;align-items:center;padding:.25rem .5rem .5rem}.section-title[data-v-e6b8f6de]{font-weight:600;font-size:.9em;color:#374151}.hint[data-v-e6b8f6de]{font-size:.75em;color:#9ca3af}.waypoint-item[data-v-e6b8f6de]{display:flex;align-items:center;gap:.4rem;padding:.4rem .5rem;margin-bottom:.25rem;background:#fff;border-radius:.375rem;border:1px solid #e5e7eb;cursor:grab;transition:box-shadow .15s,opacity .15s}.waypoint-item[data-v-e6b8f6de]:hover{box-shadow:0 1px 4px #00000014}.waypoint-item.dragging[data-v-e6b8f6de]{opacity:.5}.waypoint-grip[data-v-e6b8f6de]{cursor:grab;display:flex;align-items:center}.waypoint-marker[data-v-e6b8f6de]{width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7em;font-weight:700;flex-shrink:0}.waypoint-info[data-v-e6b8f6de]{flex:1;min-width:0;display:flex;flex-direction:column}.waypoint-role[data-v-e6b8f6de]{font-size:.7em;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.03em}.waypoint-name[data-v-e6b8f6de]{font-size:.85em;color:#374151;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.waypoint-actions[data-v-e6b8f6de]{display:flex;gap:0;flex-shrink:0}.no-waypoints[data-v-e6b8f6de]{text-align:center;color:#9ca3af;font-size:.85em;padding:2rem 1rem}.action-buttons[data-v-e6b8f6de]{display:flex;gap:.5rem;padding:.75rem;border-top:1px solid #e5e7eb;background:#fff}.route-summary[data-v-e6b8f6de]{border-top:1px solid #e5e7eb;padding:.75rem;background:#fff}.summary-header[data-v-e6b8f6de]{font-weight:600;font-size:.95em;color:#111827;margin-bottom:.5rem}.summary-stats[data-v-e6b8f6de]{display:flex;gap:1rem;margin-bottom:.5rem}.stat[data-v-e6b8f6de]{display:flex;align-items:center;gap:.3rem;font-size:.9em;color:#374151;font-weight:500}.maneuvers-list[data-v-e6b8f6de]{max-height:200px;overflow-y:auto;border-top:1px solid #f3f4f6;padding-top:.5rem;margin-top:.25rem}.maneuver-item[data-v-e6b8f6de]{display:flex;gap:.4rem;padding:.2rem 0;font-size:.8em;color:#4b5563;align-items:flex-start}.maneuver-index[data-v-e6b8f6de]{color:#9ca3af;min-width:1.5em;text-align:right}.maneuver-text[data-v-e6b8f6de]{flex:1}.maneuver-dist[data-v-e6b8f6de]{color:#9ca3af;flex-shrink:0}.map-container[data-v-e6b8f6de]{flex:1;min-width:300px}\n";})();
import { DATASOURCE_REPOSITORY as Fe } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as C, h as te, ref as c, reactive as Ct, provide as G, computed as X, onMounted as R, markRaw as _, nextTick as j, onBeforeUnmount as ie, inject as A, watch as Oe, onUnmounted as Be, render as Tt, shallowRef as kt, createElementBlock as E, openBlock as I, createElementVNode as g, createCommentVNode as Y, createVNode as O, unref as b, withKeys as Bt, Fragment as re, renderList as fe, toDisplayString as U, createBlock as ge, withCtx as K, createTextVNode as he, normalizeClass as Rt, normalizeStyle as At } from "vue";
import { DInput as Me, DIcon as W, DSelect as Le, DButton as ne } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useTemporaryStore as xt } from "org.eclipse.daanse.board.app.ui.vue.composables";
const ze = (e, a) => {
  for (const t of Object.keys(a))
    e.on(t, a[t]);
}, Ee = (e) => {
  for (const a of Object.keys(e)) {
    const t = e[a];
    t && Q(t.cancel) && t.cancel();
  }
}, Pt = (e) => !e || typeof e.charAt != "function" ? e : e.charAt(0).toUpperCase() + e.slice(1), Q = (e) => typeof e == "function", x = (e, a, t) => {
  for (const n in t) {
    const s = "set" + Pt(n);
    e[s] ? Oe(
      () => t[n],
      (o, l) => {
        e[s](o, l);
      }
    ) : a[s] && Oe(
      () => t[n],
      (o) => {
        a[s](o);
      }
    );
  }
}, k = (e, a, t = {}) => {
  const n = { ...t };
  for (const s in e) {
    const o = a[s], l = e[s];
    o && (o && o.custom === !0 || l !== void 0 && (n[s] = l));
  }
  return n;
}, V = (e) => {
  const a = {}, t = {};
  for (const n in e)
    if (n.startsWith("on") && !n.startsWith("onUpdate") && n !== "onReady") {
      const s = n.slice(2).toLocaleLowerCase();
      a[s] = e[n];
    } else
      t[n] = e[n];
  return { listeners: a, attrs: t };
}, _t = async (e) => {
  const a = await Promise.all([
    import("./marker-icon-2x-DVSLMKfE.js"),
    import("./marker-icon-DbhCZIpd.js"),
    import("./marker-shadow-ZZvxUwqf.js")
  ]);
  delete e.Default.prototype._getIconUrl, e.Default.mergeOptions({
    iconRetinaUrl: a[0].default,
    iconUrl: a[1].default,
    shadowUrl: a[2].default
  });
}, be = (e) => {
  const a = c(
    (...n) => console.warn(`Method ${e} has been invoked without being replaced`)
  ), t = (...n) => a.value(...n);
  return t.wrapped = a, G(e, t), t;
}, Se = (e, a) => e.wrapped.value = a, w = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, S = (e) => {
  const a = A(e);
  if (a === void 0)
    throw new Error(
      `Attempt to inject ${e.description} before it was provided.`
    );
  return a;
}, P = Symbol(
  "useGlobalLeaflet"
), $ = Symbol("addLayer"), je = Symbol("removeLayer"), ue = Symbol(
  "registerControl"
), Ue = Symbol(
  "registerLayerControl"
), Ze = Symbol(
  "canSetParentHtml"
), qe = Symbol("setParentHtml"), We = Symbol("setIcon"), Ge = Symbol("bindPopup"), Je = Symbol("bindTooltip"), Ke = Symbol("unbindPopup"), He = Symbol("unbindTooltip"), ce = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, de = (e) => ({ options: e.options, methods: {} }), le = {
  ...ce,
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
}, pe = (e, a, t) => {
  const n = S($), s = S(je), { options: o, methods: l } = de(e), r = k(
    e,
    le,
    o
  ), i = () => n({ leafletObject: a.value }), u = () => s({ leafletObject: a.value }), v = {
    ...l,
    setAttribution(y) {
      u(), a.value.options.attribution = y, e.visible && i();
    },
    setName() {
      u(), e.visible && i();
    },
    setLayerType() {
      u(), e.visible && i();
    },
    setVisible(y) {
      a.value && (y ? i() : u());
    },
    bindPopup(y) {
      if (!a.value || !Q(a.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      a.value.bindPopup(y);
    },
    bindTooltip(y) {
      if (!a.value || !Q(a.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      a.value.bindTooltip(y);
    },
    unbindTooltip() {
      a.value && (Q(a.value.closeTooltip) && a.value.closeTooltip(), Q(a.value.unbindTooltip) && a.value.unbindTooltip());
    },
    unbindPopup() {
      a.value && (Q(a.value.closePopup) && a.value.closePopup(), Q(a.value.unbindPopup) && a.value.unbindPopup());
    },
    updateVisibleProp(y) {
      t.emit("update:visible", y);
    }
  };
  return G(Ge, v.bindPopup), G(Je, v.bindTooltip), G(Ke, v.unbindPopup), G(He, v.unbindTooltip), Be(() => {
    v.unbindPopup(), v.unbindTooltip(), u();
  }), { options: r, methods: v };
}, J = (e, a) => {
  if (e && a.default)
    return te("div", { style: { display: "none" } }, a.default());
}, Ye = {
  ...le,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, Nt = (e, a, t) => {
  const { options: n, methods: s } = pe(
    e,
    a,
    t
  );
  return { options: k(
    e,
    Ye,
    n
  ), methods: s };
}, Re = {
  ...Ye,
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
}, Qe = (e, a, t) => {
  const { options: n, methods: s } = Nt(e, a, t), o = k(
    e,
    Re,
    n
  ), l = S(je), r = {
    ...s,
    setStroke(i) {
      a.value.setStyle({ stroke: i });
    },
    setColor(i) {
      a.value.setStyle({ color: i });
    },
    setWeight(i) {
      a.value.setStyle({ weight: i });
    },
    setOpacity(i) {
      a.value.setStyle({ opacity: i });
    },
    setLineCap(i) {
      a.value.setStyle({ lineCap: i });
    },
    setLineJoin(i) {
      a.value.setStyle({ lineJoin: i });
    },
    setDashArray(i) {
      a.value.setStyle({ dashArray: i });
    },
    setDashOffset(i) {
      a.value.setStyle({ dashOffset: i });
    },
    setFill(i) {
      a.value.setStyle({ fill: i });
    },
    setFillColor(i) {
      a.value.setStyle({ fillColor: i });
    },
    setFillOpacity(i) {
      a.value.setStyle({ fillOpacity: i });
    },
    setFillRule(i) {
      a.value.setStyle({ fillRule: i });
    },
    setClassName(i) {
      a.value.setStyle({ className: i });
    }
  };
  return ie(() => {
    l({ leafletObject: a.value });
  }), { options: o, methods: r };
}, Ae = {
  ...Re,
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
}, Xe = (e, a, t) => {
  const { options: n, methods: s } = Qe(
    e,
    a,
    t
  ), o = k(
    e,
    Ae,
    n
  ), l = {
    ...s,
    setRadius(r) {
      a.value.setRadius(r);
    },
    setLatLng(r) {
      a.value.setLatLng(r);
    }
  };
  return { options: o, methods: l };
}, et = {
  ...Ae,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, It = (e, a, t) => {
  const { options: n, methods: s } = Xe(e, a, t), o = k(
    e,
    et,
    n
  ), l = {
    ...s
  };
  return { options: o, methods: l };
};
C({
  name: "LCircle",
  props: et,
  setup(e, a) {
    const t = c(), n = c(!1), s = A(P), o = S($), { options: l, methods: r } = It(e, t, a);
    return R(async () => {
      const { circle: i } = s ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(i(e.latLng, l));
      const { listeners: u } = V(a.attrs);
      t.value.on(u), x(r, t.value, e), o({
        ...e,
        ...r,
        leafletObject: t.value
      }), n.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return J(this.ready, this.$slots);
  }
});
const zt = C({
  name: "LCircleMarker",
  props: Ae,
  setup(e, a) {
    const t = c(), n = c(!1), s = A(P), o = S($), { options: l, methods: r } = Xe(
      e,
      t,
      a
    );
    return R(async () => {
      const { circleMarker: i } = s ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(
        i(e.latLng, l)
      );
      const { listeners: u } = V(a.attrs);
      t.value.on(u), x(r, t.value, e), o({
        ...e,
        ...r,
        leafletObject: t.value
      }), n.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return J(this.ready, this.$slots);
  }
}), oe = {
  ...ce,
  position: {
    type: String
  }
}, ve = (e, a) => {
  const { options: t, methods: n } = de(e), s = k(
    e,
    oe,
    t
  ), o = {
    ...n,
    setPosition(l) {
      a.value && a.value.setPosition(l);
    }
  };
  return Be(() => {
    a.value && a.value.remove();
  }), { options: s, methods: o };
}, Vt = (e) => e.default ? te("div", { ref: "root" }, e.default()) : null;
C({
  name: "LControl",
  props: {
    ...oe,
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
  setup(e, a) {
    const t = c(), n = c(), s = A(P), o = S(ue), { options: l, methods: r } = ve(e, t);
    return R(async () => {
      const { Control: i, DomEvent: u } = s ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js"), v = i.extend({
        onAdd() {
          return n.value;
        }
      });
      t.value = _(new v(l)), x(r, t.value, e), o({ leafletObject: t.value }), e.disableClickPropagation && n.value && u.disableClickPropagation(n.value), e.disableScrollPropagation && n.value && u.disableScrollPropagation(n.value), j(() => a.emit("ready", t.value));
    }), { root: n, leafletObject: t };
  },
  render() {
    return Vt(this.$slots);
  }
});
const tt = {
  ...oe,
  prefix: {
    type: String
  }
}, Dt = (e, a) => {
  const { options: t, methods: n } = ve(
    e,
    a
  ), s = k(
    e,
    tt,
    t
  ), o = {
    ...n,
    setPrefix(l) {
      a.value.setPrefix(l);
    }
  };
  return { options: s, methods: o };
};
C({
  name: "LControlAttribution",
  props: tt,
  setup(e, a) {
    const t = c(), n = A(P), s = S(ue), { options: o, methods: l } = Dt(e, t);
    return R(async () => {
      const { control: r } = n ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(
        r.attribution(o)
      ), x(l, t.value, e), s({ leafletObject: t.value }), j(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const at = {
  ...oe,
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
}, $t = (e, a) => {
  const { options: t } = ve(e, a);
  return { options: k(
    e,
    at,
    t
  ), methods: {
    addLayer(n) {
      n.layerType === "base" ? a.value.addBaseLayer(n.leafletObject, n.name) : n.layerType === "overlay" && a.value.addOverlay(n.leafletObject, n.name);
    },
    removeLayer(n) {
      a.value.removeLayer(n.leafletObject);
    }
  } };
};
C({
  name: "LControlLayers",
  props: at,
  setup(e, a) {
    const t = c(), n = A(P), s = S(Ue), { options: o, methods: l } = $t(e, t);
    return R(async () => {
      const { control: r } = n ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(
        r.layers(void 0, void 0, o)
      ), x(l, t.value, e), s({
        ...e,
        ...l,
        leafletObject: t.value
      }), j(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const nt = {
  ...oe,
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
}, Ft = (e, a) => {
  const { options: t, methods: n } = ve(
    e,
    a
  );
  return { options: k(
    e,
    nt,
    t
  ), methods: n };
};
C({
  name: "LControlScale",
  props: nt,
  setup(e, a) {
    const t = c(), n = A(P), s = S(ue), { options: o, methods: l } = Ft(e, t);
    return R(async () => {
      const { control: r } = n ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(r.scale(o)), x(l, t.value, e), s({ leafletObject: t.value }), j(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const lt = {
  ...oe,
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
}, Mt = (e, a) => {
  const { options: t, methods: n } = ve(
    e,
    a
  );
  return { options: k(
    e,
    lt,
    t
  ), methods: n };
};
C({
  name: "LControlZoom",
  props: lt,
  setup(e, a) {
    const t = c(), n = A(P), s = S(ue), { options: o, methods: l } = Mt(e, t);
    return R(async () => {
      const { control: r } = n ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(r.zoom(o)), x(l, t.value, e), s({ leafletObject: t.value }), j(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const Ce = {
  ...le
}, xe = (e, a, t) => {
  const { options: n, methods: s } = pe(
    e,
    a,
    t
  ), o = k(
    e,
    Ce,
    n
  ), l = {
    ...s,
    addLayer(r) {
      a.value.addLayer(r.leafletObject);
    },
    removeLayer(r) {
      a.value.removeLayer(r.leafletObject);
    }
  };
  return G($, l.addLayer), G(je, l.removeLayer), { options: o, methods: l };
}, ot = {
  ...Ce
}, Et = (e, a, t) => {
  const { options: n, methods: s } = xe(
    e,
    a,
    t
  ), o = k(
    e,
    ot,
    n
  ), l = {
    ...s
  };
  return { options: o, methods: l };
};
C({
  props: ot,
  setup(e, a) {
    const t = c(), n = c(!1), s = A(P), o = S($), { methods: l, options: r } = Et(
      e,
      t,
      a
    );
    return R(async () => {
      const { featureGroup: i } = s ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(
        i(void 0, r)
      );
      const { listeners: u } = V(a.attrs);
      t.value.on(u), x(l, t.value, e), o({
        ...e,
        ...l,
        leafletObject: t.value
      }), n.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return J(this.ready, this.$slots);
  }
});
const st = {
  ...Ce,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, Ut = (e, a, t) => {
  const { options: n, methods: s } = xe(
    e,
    a,
    t
  ), o = k(
    e,
    st,
    n
  );
  Object.prototype.hasOwnProperty.call(e, "optionsStyle") && (o.style = e.optionsStyle);
  const l = {
    ...s,
    setGeojson(r) {
      a.value.clearLayers(), a.value.addData(r);
    },
    setOptionsStyle(r) {
      a.value.setStyle(r);
    },
    getGeoJSONData() {
      return a.value.toGeoJSON();
    },
    getBounds() {
      return a.value.getBounds();
    }
  };
  return { options: o, methods: l };
}, Zt = C({
  props: st,
  setup(e, a) {
    const t = c(), n = c(!1), s = A(P), o = S($), { methods: l, options: r } = Ut(e, t, a);
    return R(async () => {
      const { geoJSON: i } = s ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(i(e.geojson, r));
      const { listeners: u } = V(a.attrs);
      t.value.on(u), x(l, t.value, e), o({
        ...e,
        ...l,
        leafletObject: t.value
      }), n.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return J(this.ready, this.$slots);
  }
}), Pe = {
  ...le,
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
}, rt = (e, a, t) => {
  const { options: n, methods: s } = pe(
    e,
    a,
    t
  ), o = k(
    e,
    Pe,
    n
  ), l = {
    ...s,
    setTileComponent() {
      var r;
      (r = a.value) == null || r.redraw();
    }
  };
  return Be(() => {
    a.value.off();
  }), { options: o, methods: l };
}, qt = (e, a, t, n) => e.extend({
  initialize(s) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), t.setOptions(this, s);
  },
  createTile(s) {
    const o = this._tileCoordsToKey(s);
    this.tileComponents[o] = a.create("div");
    const l = te({ setup: n, props: ["coords"] }, { coords: s });
    return Tt(l, this.tileComponents[o]), this.tileComponents[o];
  },
  _unloadTile(s) {
    const o = this._tileCoordsToKey(s.coords);
    this.tileComponents[o] && (this.tileComponents[o].innerHTML = "", this.tileComponents[o] = void 0);
  }
});
C({
  props: {
    ...Pe,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(e, a) {
    const t = c(), n = c(null), s = c(!1), o = A(P), l = S($), { options: r, methods: i } = rt(e, t, a);
    return R(async () => {
      const { GridLayer: u, DomUtil: v, Util: y } = o ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js"), z = qt(
        u,
        v,
        y,
        e.childRender
      );
      t.value = _(new z(r));
      const { listeners: L } = V(a.attrs);
      t.value.on(L), x(i, t.value, e), l({
        ...e,
        ...i,
        leafletObject: t.value
      }), s.value = !0, j(() => a.emit("ready", t.value));
    }), { root: n, ready: s, leafletObject: t };
  },
  render() {
    return this.ready ? te("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const Ve = {
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
C({
  name: "LIcon",
  props: {
    ...Ve,
    ...ce
  },
  setup(e, a) {
    const t = c(), n = A(P), s = S(Ze), o = S(qe), l = S(We);
    let r, i, u, v, y;
    const z = (D, B, N) => {
      const F = D && D.innerHTML;
      if (!B) {
        N && y && s() && o(F);
        return;
      }
      const { listeners: H } = V(a.attrs);
      y && i(y, H);
      const { options: ae } = de(e), Z = k(
        e,
        Ve,
        ae
      );
      F && (Z.html = F), y = Z.html ? u(Z) : v(Z), r(y, H), l(y);
    }, L = () => {
      j(() => z(t.value, !0, !1));
    }, q = () => {
      j(() => z(t.value, !1, !0));
    }, M = {
      setIconUrl: L,
      setIconRetinaUrl: L,
      setIconSize: L,
      setIconAnchor: L,
      setPopupAnchor: L,
      setTooltipAnchor: L,
      setShadowUrl: L,
      setShadowRetinaUrl: L,
      setShadowAnchor: L,
      setBgPos: L,
      setClassName: L,
      setHtml: L
    };
    return R(async () => {
      const {
        DomEvent: D,
        divIcon: B,
        icon: N
      } = n ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r = D.on, i = D.off, u = B, v = N, x(M, {}, e), new MutationObserver(q).observe(t.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), L();
    }), { root: t };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : void 0;
    return te("div", { ref: "root" }, e);
  }
});
const it = {
  ...le,
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
}, Wt = (e, a, t) => {
  const { options: n, methods: s } = pe(
    e,
    a,
    t
  ), o = k(
    e,
    it,
    n
  ), l = {
    ...s,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(r) {
      return a.value.setOpacity(r);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(r) {
      return a.value.setUrl(r);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(r) {
      return a.value.setBounds(r);
    },
    /**
     * Get the bounds that this ImageOverlay covers
     * @returns {LatLngBounds}
     */
    getBounds() {
      return a.value.getBounds();
    },
    /**
     * Returns the instance of HTMLImageElement used by this overlay.
     * @returns {HTMLElement}
     */
    getElement() {
      return a.value.getElement();
    },
    /**
     * Brings the layer to the top of all overlays.
     */
    bringToFront() {
      return a.value.bringToFront();
    },
    /**
     * Brings the layer to the bottom of all overlays.
     */
    bringToBack() {
      return a.value.bringToBack();
    },
    /**
     * Changes the zIndex of the image overlay.
     * @param {number} zIndex
     */
    setZIndex(r) {
      return a.value.setZIndex(r);
    }
  };
  return { options: o, methods: l };
};
C({
  name: "LImageOverlay",
  props: it,
  setup(e, a) {
    const t = c(), n = c(!1), s = A(P), o = S($), { options: l, methods: r } = Wt(
      e,
      t,
      a
    );
    return R(async () => {
      const { imageOverlay: i } = s ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(
        i(e.url, e.bounds, l)
      );
      const { listeners: u } = V(a.attrs);
      t.value.on(u), x(r, t.value, e), o({
        ...e,
        ...r,
        leafletObject: t.value
      }), n.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return J(this.ready, this.$slots);
  }
});
C({
  props: Ce,
  setup(e, a) {
    const t = c(), n = c(!1), s = A(P), o = S($), { methods: l } = xe(e, t, a);
    return R(async () => {
      const { layerGroup: r } = s ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(
        r(void 0, e.options)
      );
      const { listeners: i } = V(a.attrs);
      t.value.on(i), x(l, t.value, e), o({
        ...e,
        ...l,
        leafletObject: t.value
      }), n.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return J(this.ready, this.$slots);
  }
});
function ut(e, a, t) {
  var n, s, o;
  a === void 0 && (a = 50), t === void 0 && (t = {});
  var l = (n = t.isImmediate) != null && n, r = (s = t.callback) != null && s, i = t.maxWait, u = Date.now(), v = [];
  function y() {
    if (i !== void 0) {
      var L = Date.now() - u;
      if (L + a >= i)
        return i - L;
    }
    return a;
  }
  var z = function() {
    var L = [].slice.call(arguments), q = this;
    return new Promise(function(M, D) {
      var B = l && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, u = Date.now(), !l) {
          var F = e.apply(q, L);
          r && r(F), v.forEach(function(H) {
            return (0, H.resolve)(F);
          }), v = [];
        }
      }, y()), B) {
        var N = e.apply(q, L);
        return r && r(N), M(N);
      }
      v.push({ resolve: M, reject: D });
    });
  };
  return z.cancel = function(L) {
    o !== void 0 && clearTimeout(o), v.forEach(function(q) {
      return (0, q.reject)(L);
    }), v = [];
  }, z;
}
const De = {
  ...ce,
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
}, Gt = C({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: De,
  setup(e, a) {
    const t = c(), n = Ct({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: s } = de(e), o = k(
      e,
      De,
      s
    ), { listeners: l, attrs: r } = V(a.attrs), i = be($), u = be(je), v = be(ue), y = be(
      Ue
    );
    G(P, e.useGlobalLeaflet);
    const z = X(() => {
      const B = {};
      return e.noBlockingAnimations && (B.animate = !1), B;
    }), L = X(() => {
      const B = z.value;
      return e.padding && (B.padding = e.padding), e.paddingTopLeft && (B.paddingTopLeft = e.paddingTopLeft), e.paddingBottomRight && (B.paddingBottomRight = e.paddingBottomRight), B;
    }), q = {
      moveend: ut((B) => {
        n.leafletRef && (a.emit("update:zoom", n.leafletRef.getZoom()), a.emit("update:center", n.leafletRef.getCenter()), a.emit("update:bounds", n.leafletRef.getBounds()));
      }),
      overlayadd(B) {
        const N = n.layersInControl.find((F) => F.name === B.name);
        N && N.updateVisibleProp(!0);
      },
      overlayremove(B) {
        const N = n.layersInControl.find((F) => F.name === B.name);
        N && N.updateVisibleProp(!1);
      }
    };
    R(async () => {
      e.useGlobalLeaflet && (w.L = w.L || await import("./leaflet-src-BDi_6Owi.js").then((m) => m.l));
      const { map: B, CRS: N, Icon: F, latLngBounds: H, latLng: ae, stamp: Z } = e.useGlobalLeaflet ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        o.beforeMapMount && await o.beforeMapMount();
      } catch (m) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${m.message}`
        );
      }
      await _t(F);
      const me = typeof o.crs == "string" ? N[o.crs] : o.crs;
      o.crs = me || N.EPSG3857;
      const ee = {
        addLayer(m) {
          m.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd.push(m) : n.layersInControl.find(
            (T) => Z(T.leafletObject) === Z(m.leafletObject)
          ) || (n.layerControl.addLayer(m), n.layersInControl.push(m))), m.visible !== !1 && n.leafletRef.addLayer(m.leafletObject);
        },
        removeLayer(m) {
          m.layerType !== void 0 && (n.layerControl === void 0 ? n.layersToAdd = n.layersToAdd.filter(
            (T) => T.name !== m.name
          ) : (n.layerControl.removeLayer(m.leafletObject), n.layersInControl = n.layersInControl.filter(
            (T) => Z(T.leafletObject) !== Z(m.leafletObject)
          ))), n.leafletRef.removeLayer(m.leafletObject);
        },
        registerLayerControl(m) {
          n.layerControl = m, n.layersToAdd.forEach((T) => {
            n.layerControl.addLayer(T);
          }), n.layersToAdd = [], v(m);
        },
        registerControl(m) {
          n.leafletRef.addControl(m.leafletObject);
        },
        setZoom(m) {
          const T = n.leafletRef.getZoom();
          m !== T && n.leafletRef.setZoom(m, z.value);
        },
        setCrs(m) {
          const T = n.leafletRef.getBounds();
          n.leafletRef.options.crs = m, n.leafletRef.fitBounds(T, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(m) {
          n.leafletRef.fitBounds(m, L.value);
        },
        setBounds(m) {
          if (!m)
            return;
          const T = H(m);
          T.isValid() && !(n.lastSetBounds || n.leafletRef.getBounds()).equals(T, 0) && (n.lastSetBounds = T, n.leafletRef.fitBounds(T));
        },
        setCenter(m) {
          if (m == null)
            return;
          const T = ae(m), ye = n.lastSetCenter || n.leafletRef.getCenter();
          (ye.lat !== T.lat || ye.lng !== T.lng) && (n.lastSetCenter = T, n.leafletRef.panTo(T, z.value));
        }
      };
      Se(i, ee.addLayer), Se(u, ee.removeLayer), Se(v, ee.registerControl), Se(y, ee.registerLayerControl), n.leafletRef = _(B(t.value, o)), x(ee, n.leafletRef, e), ze(n.leafletRef, q), ze(n.leafletRef, l), n.ready = !0, j(() => a.emit("ready", n.leafletRef));
    }), ie(() => {
      Ee(q), n.leafletRef && (n.leafletRef.off(), n.leafletRef.remove());
    });
    const M = X(() => n.leafletRef), D = X(() => n.ready);
    return { root: t, ready: D, leafletObject: M, attrs: r };
  },
  render({ attrs: e }) {
    return e.style || (e.style = {}), e.style.width || (e.style.width = "100%"), e.style.height || (e.style.height = "100%"), te(
      "div",
      {
        ...e,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), Jt = ["Symbol(Comment)", "Symbol(Text)"], Kt = ["LTooltip", "LPopup"], ct = {
  ...le,
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
}, Ht = (e, a, t) => {
  const { options: n, methods: s } = pe(
    e,
    a,
    t
  ), o = k(
    e,
    ct,
    n
  ), l = {
    ...s,
    setDraggable(r) {
      a.value.dragging && (r ? a.value.dragging.enable() : a.value.dragging.disable());
    },
    latLngSync(r) {
      t.emit("update:latLng", r.latlng), t.emit("update:lat-lng", r.latlng);
    },
    setLatLng(r) {
      if (r != null && a.value) {
        const i = a.value.getLatLng();
        (!i || !i.equals(r)) && a.value.setLatLng(r);
      }
    }
  };
  return { options: o, methods: l };
}, Yt = (e, a) => {
  const t = a.slots.default && a.slots.default();
  return t && t.length && t.some(Qt);
};
function Qt(e) {
  return !(Jt.includes(e.type.toString()) || Kt.includes(e.type.name));
}
C({
  name: "LMarker",
  props: ct,
  setup(e, a) {
    const t = c(), n = c(!1), s = A(P), o = S($);
    G(
      Ze,
      () => {
        var u;
        return !!((u = t.value) != null && u.getElement());
      }
    ), G(qe, (u) => {
      var v, y;
      const z = Q((v = t.value) == null ? void 0 : v.getElement) && ((y = t.value) == null ? void 0 : y.getElement());
      z && (z.innerHTML = u);
    }), G(
      We,
      (u) => {
        var v;
        return ((v = t.value) == null ? void 0 : v.setIcon) && t.value.setIcon(u);
      }
    );
    const { options: l, methods: r } = Ht(e, t, a), i = {
      moveHandler: ut(r.latLngSync)
    };
    return R(async () => {
      const { marker: u, divIcon: v } = s ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      Yt(l, a) && (l.icon = v({ className: "" })), t.value = _(u(e.latLng, l));
      const { listeners: y } = V(a.attrs);
      t.value.on(y), t.value.on("move", i.moveHandler), x(r, t.value, e), o({
        ...e,
        ...r,
        leafletObject: t.value
      }), n.value = !0, j(() => a.emit("ready", t.value));
    }), ie(() => Ee(i)), { ready: n, leafletObject: t };
  },
  render() {
    return J(this.ready, this.$slots);
  }
});
const _e = {
  ...Re,
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
}, dt = (e, a, t) => {
  const { options: n, methods: s } = Qe(
    e,
    a,
    t
  ), o = k(
    e,
    _e,
    n
  ), l = {
    ...s,
    setSmoothFactor(r) {
      a.value.setStyle({ smoothFactor: r });
    },
    setNoClip(r) {
      a.value.setStyle({ noClip: r });
    },
    addLatLng(r) {
      a.value.addLatLng(r);
    }
  };
  return { options: o, methods: l };
}, we = {
  ..._e
}, pt = (e, a, t) => {
  const { options: n, methods: s } = dt(
    e,
    a,
    t
  ), o = k(
    e,
    we,
    n
  ), l = {
    ...s,
    toGeoJSON(r) {
      return a.value.toGeoJSON(r);
    }
  };
  return { options: o, methods: l };
};
C({
  name: "LPolygon",
  props: we,
  setup(e, a) {
    const t = c(), n = c(!1), s = A(P), o = S($), { options: l, methods: r } = pt(e, t, a);
    return R(async () => {
      const { polygon: i } = s ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(i(e.latLngs, l));
      const { listeners: u } = V(a.attrs);
      t.value.on(u), x(r, t.value, e), o({
        ...e,
        ...r,
        leafletObject: t.value
      }), n.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return J(this.ready, this.$slots);
  }
});
C({
  name: "LPolyline",
  props: _e,
  setup(e, a) {
    const t = c(), n = c(!1), s = A(P), o = S($), { options: l, methods: r } = dt(e, t, a);
    return R(async () => {
      const { polyline: i } = s ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(
        i(e.latLngs, l)
      );
      const { listeners: u } = V(a.attrs);
      t.value.on(u), x(r, t.value, e), o({
        ...e,
        ...r,
        leafletObject: t.value
      }), n.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return J(this.ready, this.$slots);
  }
});
const vt = {
  ...ce,
  content: {
    type: String,
    default: null
  }
}, mt = (e, a) => {
  const { options: t, methods: n } = de(e), s = {
    ...n,
    setContent(o) {
      a.value && o !== null && o !== void 0 && a.value.setContent(o);
    }
  };
  return { options: t, methods: s };
}, yt = (e) => e.default ? te("div", { ref: "root" }, e.default()) : null, Xt = {
  ...vt,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, ea = (e, a) => {
  const { options: t, methods: n } = mt(e, a);
  return { options: t, methods: n };
}, ta = C({
  name: "LPopup",
  props: Xt,
  setup(e, a) {
    const t = c(), n = c(null), s = A(P), o = S(Ge), l = S(Ke), { options: r, methods: i } = ea(e, t);
    return R(async () => {
      const { popup: u } = s ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(u(r)), e.latLng !== void 0 && t.value.setLatLng(e.latLng), x(i, t.value, e);
      const { listeners: v } = V(a.attrs);
      t.value.on(v), t.value.setContent(e.content || n.value || ""), o(t.value), j(() => a.emit("ready", t.value));
    }), ie(() => {
      l();
    }), { root: n, leafletObject: t };
  },
  render() {
    return yt(this.$slots);
  }
}), ft = {
  ...we,
  latLngs: {
    ...we.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, aa = (e, a, t) => {
  const { options: n, methods: s } = pt(
    e,
    a,
    t
  ), o = k(
    e,
    ft,
    n
  ), l = {
    ...s,
    setBounds(r) {
      a.value.setBounds(r);
    },
    setLatLngs(r) {
      a.value.setBounds(r);
    }
  };
  return { options: o, methods: l };
};
C({
  name: "LRectangle",
  props: ft,
  setup(e, a) {
    const t = c(), n = c(!1), s = A(P), o = S($), { options: l, methods: r } = aa(e, t, a);
    return R(async () => {
      const { rectangle: i, latLngBounds: u } = s ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js"), v = e.bounds ? u(e.bounds) : u(e.latLngs || []);
      t.value = _(i(v, l));
      const { listeners: y } = V(a.attrs);
      t.value.on(y), x(r, t.value, e), o({
        ...e,
        ...r,
        leafletObject: t.value
      }), n.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: n, leafletObject: t };
  },
  render() {
    return J(this.ready, this.$slots);
  }
});
const Ne = {
  ...Pe,
  tms: {
    type: Boolean,
    default: void 0
  },
  subdomains: {
    type: [String, Array],
    validator: (e) => typeof e == "string" ? !0 : Array.isArray(e) ? e.every((a) => typeof a == "string") : !1
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
}, gt = (e, a, t) => {
  const { options: n, methods: s } = rt(e, a, t), o = k(
    e,
    Ne,
    n
  ), l = {
    ...s
  };
  return { options: o, methods: l };
}, na = C({
  props: Ne,
  setup(e, a) {
    const t = c(), n = A(P), s = S($), { options: o, methods: l } = gt(e, t, a);
    return R(async () => {
      const { tileLayer: r } = n ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(r(e.url, o));
      const { listeners: i } = V(a.attrs);
      t.value.on(i), x(l, t.value, e), s({
        ...e,
        ...l,
        leafletObject: t.value
      }), j(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
}), la = {
  ...vt
}, oa = (e, a) => {
  const { options: t, methods: n } = mt(e, a), s = S(He);
  return ie(() => {
    s();
  }), { options: t, methods: n };
};
C({
  name: "LTooltip",
  props: la,
  setup(e, a) {
    const t = c(), n = c(null), s = A(P), o = S(Je), { options: l, methods: r } = oa(e, t);
    return R(async () => {
      const { tooltip: i } = s ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(i(l)), x(r, t.value, e);
      const { listeners: u } = V(a.attrs);
      t.value.on(u), t.value.setContent(e.content || n.value || ""), o(t.value), j(() => a.emit("ready", t.value));
    }), { root: n, leafletObject: t };
  },
  render() {
    return yt(this.$slots);
  }
});
const ht = {
  ...Ne,
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
}, sa = (e, a, t) => {
  const { options: n, methods: s } = gt(e, a, t);
  return {
    options: k(
      e,
      ht,
      n
    ),
    methods: {
      ...s
    }
  };
};
C({
  props: ht,
  setup(e, a) {
    const t = c(), n = A(P), s = S($), { options: o, methods: l } = sa(
      e,
      t,
      a
    );
    return R(async () => {
      const { tileLayer: r } = n ? w.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = _(
        r.wms(e.url, o)
      );
      const { listeners: i } = V(a.attrs);
      t.value.on(i), x(l, t.value, e), s({
        ...e,
        ...l,
        leafletObject: t.value
      }), j(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const ra = { class: "valhalla-preview" }, ia = { class: "sidebar" }, ua = { class: "search-section" }, ca = { class: "search-box" }, da = {
  key: 0,
  class: "search-results"
}, pa = ["onClick"], va = { class: "controls-row" }, ma = { class: "waypoints-list" }, ya = { class: "waypoints-header" }, fa = { class: "section-title" }, ga = ["onDragstart", "onDragover"], ha = { class: "waypoint-grip" }, ba = { class: "waypoint-info" }, Sa = { class: "waypoint-role" }, La = { class: "waypoint-name" }, Oa = { class: "waypoint-actions" }, wa = {
  key: 0,
  class: "no-waypoints"
}, ja = {
  key: 0,
  class: "action-buttons"
}, Ca = {
  key: 1,
  class: "route-summary"
}, Ta = { class: "summary-stats" }, ka = { class: "stat" }, Ba = { class: "stat" }, Ra = { class: "stat" }, Aa = {
  key: 0,
  class: "maneuvers-list"
}, xa = { class: "maneuver-index" }, Pa = { class: "maneuver-text" }, _a = { class: "maneuver-dist" }, Na = { class: "map-container" }, $e = "SET_WAYPOINTS", Ia = "OPTIMIZE_ROUTE", za = /* @__PURE__ */ C({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const a = e, t = c(null), n = kt(null), s = c(a.dataSource), { update: o } = xt(a.dataSource.type, s, n), l = c([]), r = c(a.dataSource.config?.costing || "auto"), i = c(""), u = c([]), v = c(!1);
    let y = null;
    const z = c(null), L = c([50.93, 11.59]), q = c(10), M = c(null), D = c(!1), B = [
      { text: "Auto", value: "auto" },
      { text: "Fahrrad", value: "bicycle" },
      { text: "Fußgänger", value: "pedestrian" },
      { text: "LKW", value: "truck" },
      { text: "Bus", value: "bus" },
      { text: "Motorroller", value: "motor_scooter" },
      { text: "Motorrad", value: "motorcycle" }
    ], N = X(() => t.value?.geojson?.features ? t.value.geojson.features.filter((p) => p.geometry?.type === "LineString") : []), F = X(() => N.value.length === 0 ? null : { type: "FeatureCollection", features: N.value }), H = () => ({ color: "#c45e00", weight: 5, opacity: 0.8 });
    function ae(p) {
      return p === 0 ? "#4caf50" : p === l.value.length - 1 ? "#f44336" : "#2196f3";
    }
    function Z(p) {
      return p === 0 ? "Start" : p === l.value.length - 1 ? "Ziel" : `Stop ${p}`;
    }
    Oe(n, async () => {
      n.value && (t.value = await n.value.getData("object"), n.value.subscribe(async () => {
        t.value = await n.value.getData("object");
      }));
    }, { deep: !0 }), Oe(a.dataSource, () => o(), { deep: !0 });
    async function me() {
      const p = i.value.trim();
      if (p.length < 3) {
        u.value = [];
        return;
      }
      v.value = !0;
      try {
        const d = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(p)}&limit=5&addressdetails=1`
        );
        u.value = await d.json();
      } catch {
        u.value = [];
      } finally {
        v.value = !1;
      }
    }
    function ee() {
      y && clearTimeout(y), y = setTimeout(me, 400);
    }
    function m(p) {
      const d = {
        lat: parseFloat(p.lat),
        lon: parseFloat(p.lon),
        name: p.display_name.split(",").slice(0, 2).join(", ")
      };
      l.value.push(d), i.value = "", u.value = [], Te();
    }
    function T(p) {
      const { lat: d, lng: f } = p.latlng;
      l.value.push({ lat: d, lon: f, name: `${d.toFixed(4)}, ${f.toFixed(4)}` });
    }
    function ye(p) {
      l.value.splice(p, 1);
    }
    function bt() {
      l.value = [], t.value = null, n.value && n.value.callEvent($e, { waypoints: [], costing: r.value });
    }
    function Ie(p, d) {
      if (d < 0 || d >= l.value.length) return;
      const f = l.value.splice(p, 1)[0];
      l.value.splice(d, 0, f);
    }
    async function St() {
      if (!(!n.value || l.value.length < 2)) {
        D.value = !0;
        try {
          await n.value.callEvent($e, {
            waypoints: l.value.map((p) => ({ lat: p.lat, lon: p.lon, name: p.name })),
            costing: r.value
          }), Te();
        } finally {
          D.value = !1;
        }
      }
    }
    async function Lt() {
      if (!(!n.value || l.value.length < 3)) {
        D.value = !0;
        try {
          await n.value.callEvent(Ia, {
            waypoints: l.value.map((d) => ({ lat: d.lat, lon: d.lon, name: d.name })),
            costing: r.value
          });
          const p = await n.value.getData("object");
          p?.waypoints && (l.value = p.waypoints.map((d) => ({
            lat: d.lat,
            lon: d.lon,
            name: d.name || `${d.lat.toFixed(4)}, ${d.lon.toFixed(4)}`
          }))), Te();
        } finally {
          D.value = !1;
        }
      }
    }
    function Te() {
      l.value.length !== 0 && j(() => {
        const p = z.value?.leafletObject;
        if (p)
          if (l.value.length === 1)
            p.setView([l.value[0].lat, l.value[0].lon], 14);
          else {
            const d = l.value.map((h) => h.lat), f = l.value.map((h) => h.lon);
            p.fitBounds(
              [[Math.min(...d), Math.min(...f)], [Math.max(...d), Math.max(...f)]],
              { padding: [40, 40] }
            );
          }
      });
    }
    function Ot(p) {
      M.value = p;
    }
    function wt(p, d) {
      if (p.preventDefault(), M.value === null || M.value === d) return;
      const f = M.value, h = l.value.splice(f, 1)[0];
      l.value.splice(d, 0, h), M.value = d;
    }
    function jt() {
      M.value = null;
    }
    const ke = X(() => t.value?.legs ? t.value.legs.flatMap((p) => p.maneuvers || []) : []);
    return (p, d) => (I(), E("div", ra, [
      g("div", ia, [
        g("div", ua, [
          g("div", ca, [
            O(b(Me), {
              modelValue: i.value,
              "onUpdate:modelValue": d[0] || (d[0] = (f) => i.value = f),
              placeholder: "Adresse suchen…",
              class: "search-input",
              onInput: ee,
              onKeydown: Bt(me, ["enter"])
            }, null, 8, ["modelValue"]),
            u.value.length > 0 ? (I(), E("div", da, [
              (I(!0), E(re, null, fe(u.value, (f) => (I(), E("div", {
                key: f.place_id,
                class: "search-result-item",
                onClick: (h) => m(f)
              }, [
                O(b(W), {
                  name: "location_on",
                  size: "sm",
                  tone: "color-accent"
                }),
                g("span", null, U(f.display_name), 1)
              ], 8, pa))), 128))
            ])) : Y("", !0)
          ])
        ]),
        g("div", va, [
          O(b(Le), {
            modelValue: r.value,
            "onUpdate:modelValue": d[1] || (d[1] = (f) => r.value = f),
            options: B,
            "label-key": "text",
            "value-key": "value",
            label: "Modus",
            class: "costing-select"
          }, null, 8, ["modelValue"]),
          l.value.length > 0 ? (I(), ge(b(ne), {
            key: 0,
            size: "sm",
            onClick: bt
          }, {
            default: K(() => [
              O(b(W), {
                name: "delete_sweep",
                size: "sm"
              }),
              d[2] || (d[2] = he("Alle löschen ", -1))
            ]),
            _: 1
          })) : Y("", !0)
        ]),
        g("div", ma, [
          g("div", ya, [
            g("span", fa, "Wegpunkte (" + U(l.value.length) + ")", 1),
            d[3] || (d[3] = g("span", { class: "hint" }, "Klick auf Karte = Wegpunkt hinzufügen", -1))
          ]),
          (I(!0), E(re, null, fe(l.value, (f, h) => (I(), E("div", {
            key: h,
            class: Rt(["waypoint-item", { dragging: M.value === h }]),
            draggable: "true",
            onDragstart: (se) => Ot(h),
            onDragover: (se) => wt(se, h),
            onDragend: jt
          }, [
            g("div", ha, [
              O(b(W), {
                name: "drag_indicator",
                size: "sm",
                tone: "color-dim"
              })
            ]),
            g("div", {
              class: "waypoint-marker",
              style: At({ backgroundColor: ae(h) })
            }, U(h + 1), 5),
            g("div", ba, [
              g("span", Sa, U(Z(h)), 1),
              g("span", La, U(f.name || `${f.lat.toFixed(4)}, ${f.lon.toFixed(4)}`), 1)
            ]),
            g("div", Oa, [
              O(b(ne), {
                intent: "quiet",
                size: "sm",
                title: "Nach oben",
                disabled: h === 0,
                onClick: (se) => Ie(h, h - 1)
              }, {
                default: K(() => [
                  O(b(W), {
                    name: "arrow_upward",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["disabled", "onClick"]),
              O(b(ne), {
                intent: "quiet",
                size: "sm",
                title: "Nach unten",
                disabled: h === l.value.length - 1,
                onClick: (se) => Ie(h, h + 1)
              }, {
                default: K(() => [
                  O(b(W), {
                    name: "arrow_downward",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["disabled", "onClick"]),
              O(b(ne), {
                intent: "danger",
                size: "sm",
                title: "Entfernen",
                onClick: (se) => ye(h)
              }, {
                default: K(() => [
                  O(b(W), {
                    name: "close",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["onClick"])
            ])
          ], 42, ga))), 128)),
          l.value.length === 0 ? (I(), E("div", wa, " Noch keine Wegpunkte. Klicke auf die Karte oder suche eine Adresse. ")) : Y("", !0)
        ]),
        l.value.length >= 2 ? (I(), E("div", ja, [
          O(b(ne), {
            intent: "primary",
            busy: D.value,
            onClick: St
          }, {
            default: K(() => [
              O(b(W), {
                name: "route",
                size: "sm"
              }),
              d[4] || (d[4] = he("Route berechnen ", -1))
            ]),
            _: 1
          }, 8, ["busy"]),
          l.value.length >= 3 ? (I(), ge(b(ne), {
            key: 0,
            busy: D.value,
            onClick: Lt
          }, {
            default: K(() => [
              O(b(W), {
                name: "auto_fix_high",
                size: "sm"
              }),
              d[5] || (d[5] = he("Route optimieren ", -1))
            ]),
            _: 1
          }, 8, ["busy"])) : Y("", !0)
        ])) : Y("", !0),
        t.value?.summary ? (I(), E("div", Ca, [
          d[6] || (d[6] = g("div", { class: "summary-header" }, "Route", -1)),
          g("div", Ta, [
            g("div", ka, [
              O(b(W), {
                name: "straighten",
                size: "sm"
              }),
              g("span", null, U(t.value.summary.distance_km.toFixed(1)) + " km", 1)
            ]),
            g("div", Ba, [
              O(b(W), {
                name: "schedule",
                size: "sm"
              }),
              g("span", null, U(t.value.summary.duration_min) + " min", 1)
            ]),
            g("div", Ra, [
              O(b(W), {
                name: "turn_right",
                size: "sm"
              }),
              g("span", null, U(ke.value.length) + " Manöver", 1)
            ])
          ]),
          ke.value.length > 0 ? (I(), E("div", Aa, [
            (I(!0), E(re, null, fe(ke.value, (f, h) => (I(), E("div", {
              key: h,
              class: "maneuver-item"
            }, [
              g("span", xa, U(h + 1) + ".", 1),
              g("span", Pa, U(f.instruction), 1),
              g("span", _a, U(f.length.toFixed(1)) + " km", 1)
            ]))), 128))
          ])) : Y("", !0)
        ])) : Y("", !0)
      ]),
      g("div", Na, [
        O(b(Gt), {
          ref_key: "mapRef",
          ref: z,
          center: L.value,
          zoom: q.value,
          style: { height: "100%", width: "100%" },
          onClick: T
        }, {
          default: K(() => [
            O(b(na), {
              url: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
              options: { maxNativeZoom: 19, maxZoom: 21 }
            }),
            F.value ? (I(), ge(b(Zt), {
              key: 0,
              geojson: F.value,
              "options-style": H
            }, null, 8, ["geojson"])) : Y("", !0),
            (I(!0), E(re, null, fe(l.value, (f, h) => (I(), ge(b(zt), {
              key: "wp-" + h,
              "lat-lng": [f.lat, f.lon],
              radius: 10,
              "fill-color": ae(h),
              color: "#fff",
              weight: 3,
              "fill-opacity": 1
            }, {
              default: K(() => [
                O(b(ta), null, {
                  default: K(() => [
                    g("strong", null, U(Z(h)), 1),
                    d[7] || (d[7] = g("br", null, null, -1)),
                    he(" " + U(f.name || `${f.lat.toFixed(4)}, ${f.lon.toFixed(4)}`), 1)
                  ]),
                  _: 2
                }, 1024)
              ]),
              _: 2
            }, 1032, ["lat-lng", "fill-color"]))), 128))
          ]),
          _: 1
        }, 8, ["center", "zoom"])
      ])
    ]));
  }
}), Va = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [n, s] of a)
    t[n] = s;
  return t;
}, Da = /* @__PURE__ */ Va(za, [["__scopeId", "data-v-e6b8f6de"]]), $a = /* @__PURE__ */ C({
  __name: "Settings",
  props: {
    config: {},
    connections: {},
    dataSources: {}
  },
  setup(e) {
    const a = X(
      () => e.connections.filter((s) => s.type === "rest")
    ), t = [
      { text: "Auto", value: "auto" },
      { text: "Bicycle", value: "bicycle" },
      { text: "Pedestrian", value: "pedestrian" },
      { text: "Truck", value: "truck" },
      { text: "Bus", value: "bus" },
      { text: "Motor Scooter", value: "motor_scooter" },
      { text: "Motorcycle", value: "motorcycle" }
    ], n = [
      { text: "Kilometers", value: "kilometers" },
      { text: "Miles", value: "miles" }
    ];
    return e.config.costing || (e.config.costing = "auto"), e.config.units || (e.config.units = "kilometers"), e.config.language || (e.config.language = "de-DE"), (s, o) => (I(), E(re, null, [
      O(b(Le), {
        modelValue: e.config.connection,
        "onUpdate:modelValue": o[0] || (o[0] = (l) => e.config.connection = l),
        label: "Valhalla-Verbindung",
        options: a.value,
        "label-key": "name",
        "value-key": "uid"
      }, null, 8, ["modelValue", "options"]),
      O(b(Le), {
        modelValue: e.config.costing,
        "onUpdate:modelValue": o[1] || (o[1] = (l) => e.config.costing = l),
        label: "Standard-Fortbewegung",
        options: t,
        "label-key": "text",
        "value-key": "value"
      }, null, 8, ["modelValue"]),
      O(b(Le), {
        modelValue: e.config.units,
        "onUpdate:modelValue": o[2] || (o[2] = (l) => e.config.units = l),
        label: "Einheiten",
        options: n,
        "label-key": "text",
        "value-key": "value"
      }, null, 8, ["modelValue"]),
      O(b(Me), {
        modelValue: e.config.language,
        "onUpdate:modelValue": o[3] || (o[3] = (l) => e.config.language = l),
        label: "Language (e.g. de-DE)"
      }, null, 8, ["modelValue"])
    ], 64));
  }
}), Fa = Symbol.for("ValhallaStoreFactory"), Ma = Symbol.for("ValhallaPreview"), Ea = Symbol.for("ValhallaSettings");
function Ga({ services: e }) {
  e.register("ValhallaPreview", Da), e.register("ValhallaSettings", $a), e.getRequired(Fe).registerDatasourceType("valhalla", {
    Store: Fa,
    Preview: Ma,
    Settings: Ea
  });
}
function Ja({ services: e }) {
  e.getRequired(Fe).unregisterDatasourceType("valhalla"), e.unregister("ValhallaPreview"), e.unregister("ValhallaSettings");
}
export {
  Ga as activate,
  Ja as deactivate
};
