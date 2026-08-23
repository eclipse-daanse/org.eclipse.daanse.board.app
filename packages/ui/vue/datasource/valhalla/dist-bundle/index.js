(function(){var i="ui.vue.datasource.valhalla",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:\"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:\"\"}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}.valhalla-preview[data-v-5cc943b1]{display:flex;height:100%;width:100%;overflow:hidden}.sidebar[data-v-5cc943b1]{width:360px;min-width:300px;display:flex;flex-direction:column;border-right:1px solid #e5e7eb;overflow-y:auto;background:#fafafa}.search-section[data-v-5cc943b1]{padding:.75rem;border-bottom:1px solid #e5e7eb;background:#fff}.search-box[data-v-5cc943b1]{position:relative}.search-input[data-v-5cc943b1]{width:100%}.search-results[data-v-5cc943b1]{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #e5e7eb;border-radius:0 0 .5rem .5rem;box-shadow:0 4px 12px #00000026;z-index:1000;max-height:250px;overflow-y:auto}.search-result-item[data-v-5cc943b1]{display:flex;align-items:flex-start;gap:.5rem;padding:.5rem .75rem;cursor:pointer;font-size:.85em;border-bottom:1px solid #f3f4f6}.search-result-item[data-v-5cc943b1]:hover{background-color:#f0f4ff}.search-result-item[data-v-5cc943b1]:last-child{border-bottom:none}.controls-row[data-v-5cc943b1]{display:flex;align-items:flex-end;gap:.5rem;padding:.75rem;border-bottom:1px solid #e5e7eb;background:#fff}.costing-select[data-v-5cc943b1]{flex:1}.waypoints-list[data-v-5cc943b1]{flex:1;overflow-y:auto;padding:.5rem}.waypoints-header[data-v-5cc943b1]{display:flex;justify-content:space-between;align-items:center;padding:.25rem .5rem .5rem}.section-title[data-v-5cc943b1]{font-weight:600;font-size:.9em;color:#374151}.hint[data-v-5cc943b1]{font-size:.75em;color:#9ca3af}.waypoint-item[data-v-5cc943b1]{display:flex;align-items:center;gap:.4rem;padding:.4rem .5rem;margin-bottom:.25rem;background:#fff;border-radius:.375rem;border:1px solid #e5e7eb;cursor:grab;transition:box-shadow .15s,opacity .15s}.waypoint-item[data-v-5cc943b1]:hover{box-shadow:0 1px 4px #00000014}.waypoint-item.dragging[data-v-5cc943b1]{opacity:.5}.waypoint-grip[data-v-5cc943b1]{cursor:grab;display:flex;align-items:center}.waypoint-marker[data-v-5cc943b1]{width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7em;font-weight:700;flex-shrink:0}.waypoint-info[data-v-5cc943b1]{flex:1;min-width:0;display:flex;flex-direction:column}.waypoint-role[data-v-5cc943b1]{font-size:.7em;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.03em}.waypoint-name[data-v-5cc943b1]{font-size:.85em;color:#374151;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.waypoint-actions[data-v-5cc943b1]{display:flex;gap:0;flex-shrink:0}.no-waypoints[data-v-5cc943b1]{text-align:center;color:#9ca3af;font-size:.85em;padding:2rem 1rem}.action-buttons[data-v-5cc943b1]{display:flex;gap:.5rem;padding:.75rem;border-top:1px solid #e5e7eb;background:#fff}.route-summary[data-v-5cc943b1]{border-top:1px solid #e5e7eb;padding:.75rem;background:#fff}.summary-header[data-v-5cc943b1]{font-weight:600;font-size:.95em;color:#111827;margin-bottom:.5rem}.summary-stats[data-v-5cc943b1]{display:flex;gap:1rem;margin-bottom:.5rem}.stat[data-v-5cc943b1]{display:flex;align-items:center;gap:.3rem;font-size:.9em;color:#374151;font-weight:500}.maneuvers-list[data-v-5cc943b1]{max-height:200px;overflow-y:auto;border-top:1px solid #f3f4f6;padding-top:.5rem;margin-top:.25rem}.maneuver-item[data-v-5cc943b1]{display:flex;gap:.4rem;padding:.2rem 0;font-size:.8em;color:#4b5563;align-items:flex-start}.maneuver-index[data-v-5cc943b1]{color:#9ca3af;min-width:1.5em;text-align:right}.maneuver-text[data-v-5cc943b1]{flex:1}.maneuver-dist[data-v-5cc943b1]{color:#9ca3af;flex-shrink:0}.map-container[data-v-5cc943b1]{flex:1;min-width:300px}\n";})();
import { DATASOURCE_REPOSITORY as Ue } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as L, h as ae, ref as c, reactive as Bt, provide as G, computed as Y, onMounted as T, markRaw as x, nextTick as S, onBeforeUnmount as ue, inject as B, watch as Oe, onUnmounted as xe, render as _t, shallowRef as kt, resolveComponent as te, createElementBlock as U, openBlock as V, createElementVNode as f, createCommentVNode as K, createVNode as A, withKeys as xt, withCtx as ee, Fragment as ie, renderList as ge, toDisplayString as E, createBlock as he, createTextVNode as be, normalizeClass as Rt, normalizeStyle as At, unref as re } from "vue";
import { useTemporaryStore as Pt } from "org.eclipse.daanse.board.app.ui.vue.composables";
const $e = (e, a) => {
  for (const t of Object.keys(a))
    e.on(t, a[t]);
}, Ee = (e) => {
  for (const a of Object.keys(e)) {
    const t = e[a];
    t && H(t.cancel) && t.cancel();
  }
}, It = (e) => !e || typeof e.charAt != "function" ? e : e.charAt(0).toUpperCase() + e.slice(1), H = (e) => typeof e == "function", _ = (e, a, t) => {
  for (const o in t) {
    const r = "set" + It(o);
    e[r] ? Oe(
      () => t[o],
      (l, n) => {
        e[r](l, n);
      }
    ) : a[r] && Oe(
      () => t[o],
      (l) => {
        a[r](l);
      }
    );
  }
}, w = (e, a, t = {}) => {
  const o = { ...t };
  for (const r in e) {
    const l = a[r], n = e[r];
    l && (l && l.custom === !0 || n !== void 0 && (o[r] = n));
  }
  return o;
}, z = (e) => {
  const a = {}, t = {};
  for (const o in e)
    if (o.startsWith("on") && !o.startsWith("onUpdate") && o !== "onReady") {
      const r = o.slice(2).toLocaleLowerCase();
      a[r] = e[o];
    } else
      t[o] = e[o];
  return { listeners: a, attrs: t };
}, Vt = async (e) => {
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
}, Se = (e) => {
  const a = c(
    (...o) => console.warn(`Method ${e} has been invoked without being replaced`)
  ), t = (...o) => a.value(...o);
  return t.wrapped = a, G(e, t), t;
}, Le = (e, a) => e.wrapped.value = a, b = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, g = (e) => {
  const a = B(e);
  if (a === void 0)
    throw new Error(
      `Attempt to inject ${e.description} before it was provided.`
    );
  return a;
}, k = Symbol(
  "useGlobalLeaflet"
), D = Symbol("addLayer"), je = Symbol("removeLayer"), ce = Symbol(
  "registerControl"
), Ze = Symbol(
  "registerLayerControl"
), We = Symbol(
  "canSetParentHtml"
), Ge = Symbol("setParentHtml"), qe = Symbol("setIcon"), Je = Symbol("bindPopup"), Ke = Symbol("bindTooltip"), He = Symbol("unbindPopup"), Ye = Symbol("unbindTooltip"), de = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, pe = (e) => ({ options: e.options, methods: {} }), ne = {
  ...de,
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
}, ve = (e, a, t) => {
  const o = g(D), r = g(je), { options: l, methods: n } = pe(e), s = w(
    e,
    ne,
    l
  ), i = () => o({ leafletObject: a.value }), u = () => r({ leafletObject: a.value }), v = {
    ...n,
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
      if (!a.value || !H(a.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      a.value.bindPopup(y);
    },
    bindTooltip(y) {
      if (!a.value || !H(a.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      a.value.bindTooltip(y);
    },
    unbindTooltip() {
      a.value && (H(a.value.closeTooltip) && a.value.closeTooltip(), H(a.value.unbindTooltip) && a.value.unbindTooltip());
    },
    unbindPopup() {
      a.value && (H(a.value.closePopup) && a.value.closePopup(), H(a.value.unbindPopup) && a.value.unbindPopup());
    },
    updateVisibleProp(y) {
      t.emit("update:visible", y);
    }
  };
  return G(Je, v.bindPopup), G(Ke, v.bindTooltip), G(He, v.unbindPopup), G(Ye, v.unbindTooltip), xe(() => {
    v.unbindPopup(), v.unbindTooltip(), u();
  }), { options: s, methods: v };
}, q = (e, a) => {
  if (e && a.default)
    return ae("div", { style: { display: "none" } }, a.default());
}, Qe = {
  ...ne,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, Nt = (e, a, t) => {
  const { options: o, methods: r } = ve(
    e,
    a,
    t
  );
  return { options: w(
    e,
    Qe,
    o
  ), methods: r };
}, Re = {
  ...Qe,
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
}, Xe = (e, a, t) => {
  const { options: o, methods: r } = Nt(e, a, t), l = w(
    e,
    Re,
    o
  ), n = g(je), s = {
    ...r,
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
  return ue(() => {
    n({ leafletObject: a.value });
  }), { options: l, methods: s };
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
}, et = (e, a, t) => {
  const { options: o, methods: r } = Xe(
    e,
    a,
    t
  ), l = w(
    e,
    Ae,
    o
  ), n = {
    ...r,
    setRadius(s) {
      a.value.setRadius(s);
    },
    setLatLng(s) {
      a.value.setLatLng(s);
    }
  };
  return { options: l, methods: n };
}, tt = {
  ...Ae,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, zt = (e, a, t) => {
  const { options: o, methods: r } = et(e, a, t), l = w(
    e,
    tt,
    o
  ), n = {
    ...r
  };
  return { options: l, methods: n };
};
L({
  name: "LCircle",
  props: tt,
  setup(e, a) {
    const t = c(), o = c(!1), r = B(k), l = g(D), { options: n, methods: s } = zt(e, t, a);
    return T(async () => {
      const { circle: i } = r ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(i(e.latLng, n));
      const { listeners: u } = z(a.attrs);
      t.value.on(u), _(s, t.value, e), l({
        ...e,
        ...s,
        leafletObject: t.value
      }), o.value = !0, S(() => a.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return q(this.ready, this.$slots);
  }
});
const $t = L({
  name: "LCircleMarker",
  props: Ae,
  setup(e, a) {
    const t = c(), o = c(!1), r = B(k), l = g(D), { options: n, methods: s } = et(
      e,
      t,
      a
    );
    return T(async () => {
      const { circleMarker: i } = r ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(
        i(e.latLng, n)
      );
      const { listeners: u } = z(a.attrs);
      t.value.on(u), _(s, t.value, e), l({
        ...e,
        ...s,
        leafletObject: t.value
      }), o.value = !0, S(() => a.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return q(this.ready, this.$slots);
  }
}), le = {
  ...de,
  position: {
    type: String
  }
}, me = (e, a) => {
  const { options: t, methods: o } = pe(e), r = w(
    e,
    le,
    t
  ), l = {
    ...o,
    setPosition(n) {
      a.value && a.value.setPosition(n);
    }
  };
  return xe(() => {
    a.value && a.value.remove();
  }), { options: r, methods: l };
}, Dt = (e) => e.default ? ae("div", { ref: "root" }, e.default()) : null;
L({
  name: "LControl",
  props: {
    ...le,
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
    const t = c(), o = c(), r = B(k), l = g(ce), { options: n, methods: s } = me(e, t);
    return T(async () => {
      const { Control: i, DomEvent: u } = r ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js"), v = i.extend({
        onAdd() {
          return o.value;
        }
      });
      t.value = x(new v(n)), _(s, t.value, e), l({ leafletObject: t.value }), e.disableClickPropagation && o.value && u.disableClickPropagation(o.value), e.disableScrollPropagation && o.value && u.disableScrollPropagation(o.value), S(() => a.emit("ready", t.value));
    }), { root: o, leafletObject: t };
  },
  render() {
    return Dt(this.$slots);
  }
});
const at = {
  ...le,
  prefix: {
    type: String
  }
}, Mt = (e, a) => {
  const { options: t, methods: o } = me(
    e,
    a
  ), r = w(
    e,
    at,
    t
  ), l = {
    ...o,
    setPrefix(n) {
      a.value.setPrefix(n);
    }
  };
  return { options: r, methods: l };
};
L({
  name: "LControlAttribution",
  props: at,
  setup(e, a) {
    const t = c(), o = B(k), r = g(ce), { options: l, methods: n } = Mt(e, t);
    return T(async () => {
      const { control: s } = o ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(
        s.attribution(l)
      ), _(n, t.value, e), r({ leafletObject: t.value }), S(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const ot = {
  ...le,
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
}, Ft = (e, a) => {
  const { options: t } = me(e, a);
  return { options: w(
    e,
    ot,
    t
  ), methods: {
    addLayer(o) {
      o.layerType === "base" ? a.value.addBaseLayer(o.leafletObject, o.name) : o.layerType === "overlay" && a.value.addOverlay(o.leafletObject, o.name);
    },
    removeLayer(o) {
      a.value.removeLayer(o.leafletObject);
    }
  } };
};
L({
  name: "LControlLayers",
  props: ot,
  setup(e, a) {
    const t = c(), o = B(k), r = g(Ze), { options: l, methods: n } = Ft(e, t);
    return T(async () => {
      const { control: s } = o ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(
        s.layers(void 0, void 0, l)
      ), _(n, t.value, e), r({
        ...e,
        ...n,
        leafletObject: t.value
      }), S(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const nt = {
  ...le,
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
}, Ut = (e, a) => {
  const { options: t, methods: o } = me(
    e,
    a
  );
  return { options: w(
    e,
    nt,
    t
  ), methods: o };
};
L({
  name: "LControlScale",
  props: nt,
  setup(e, a) {
    const t = c(), o = B(k), r = g(ce), { options: l, methods: n } = Ut(e, t);
    return T(async () => {
      const { control: s } = o ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(s.scale(l)), _(n, t.value, e), r({ leafletObject: t.value }), S(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const lt = {
  ...le,
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
}, Et = (e, a) => {
  const { options: t, methods: o } = me(
    e,
    a
  );
  return { options: w(
    e,
    lt,
    t
  ), methods: o };
};
L({
  name: "LControlZoom",
  props: lt,
  setup(e, a) {
    const t = c(), o = B(k), r = g(ce), { options: l, methods: n } = Et(e, t);
    return T(async () => {
      const { control: s } = o ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(s.zoom(l)), _(n, t.value, e), r({ leafletObject: t.value }), S(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const Ce = {
  ...ne
}, Pe = (e, a, t) => {
  const { options: o, methods: r } = ve(
    e,
    a,
    t
  ), l = w(
    e,
    Ce,
    o
  ), n = {
    ...r,
    addLayer(s) {
      a.value.addLayer(s.leafletObject);
    },
    removeLayer(s) {
      a.value.removeLayer(s.leafletObject);
    }
  };
  return G(D, n.addLayer), G(je, n.removeLayer), { options: l, methods: n };
}, st = {
  ...Ce
}, Zt = (e, a, t) => {
  const { options: o, methods: r } = Pe(
    e,
    a,
    t
  ), l = w(
    e,
    st,
    o
  ), n = {
    ...r
  };
  return { options: l, methods: n };
};
L({
  props: st,
  setup(e, a) {
    const t = c(), o = c(!1), r = B(k), l = g(D), { methods: n, options: s } = Zt(
      e,
      t,
      a
    );
    return T(async () => {
      const { featureGroup: i } = r ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(
        i(void 0, s)
      );
      const { listeners: u } = z(a.attrs);
      t.value.on(u), _(n, t.value, e), l({
        ...e,
        ...n,
        leafletObject: t.value
      }), o.value = !0, S(() => a.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return q(this.ready, this.$slots);
  }
});
const rt = {
  ...Ce,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, Wt = (e, a, t) => {
  const { options: o, methods: r } = Pe(
    e,
    a,
    t
  ), l = w(
    e,
    rt,
    o
  );
  Object.prototype.hasOwnProperty.call(e, "optionsStyle") && (l.style = e.optionsStyle);
  const n = {
    ...r,
    setGeojson(s) {
      a.value.clearLayers(), a.value.addData(s);
    },
    setOptionsStyle(s) {
      a.value.setStyle(s);
    },
    getGeoJSONData() {
      return a.value.toGeoJSON();
    },
    getBounds() {
      return a.value.getBounds();
    }
  };
  return { options: l, methods: n };
}, Gt = L({
  props: rt,
  setup(e, a) {
    const t = c(), o = c(!1), r = B(k), l = g(D), { methods: n, options: s } = Wt(e, t, a);
    return T(async () => {
      const { geoJSON: i } = r ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(i(e.geojson, s));
      const { listeners: u } = z(a.attrs);
      t.value.on(u), _(n, t.value, e), l({
        ...e,
        ...n,
        leafletObject: t.value
      }), o.value = !0, S(() => a.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return q(this.ready, this.$slots);
  }
}), Ie = {
  ...ne,
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
}, it = (e, a, t) => {
  const { options: o, methods: r } = ve(
    e,
    a,
    t
  ), l = w(
    e,
    Ie,
    o
  ), n = {
    ...r,
    setTileComponent() {
      var s;
      (s = a.value) == null || s.redraw();
    }
  };
  return xe(() => {
    a.value.off();
  }), { options: l, methods: n };
}, qt = (e, a, t, o) => e.extend({
  initialize(r) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), t.setOptions(this, r);
  },
  createTile(r) {
    const l = this._tileCoordsToKey(r);
    this.tileComponents[l] = a.create("div");
    const n = ae({ setup: o, props: ["coords"] }, { coords: r });
    return _t(n, this.tileComponents[l]), this.tileComponents[l];
  },
  _unloadTile(r) {
    const l = this._tileCoordsToKey(r.coords);
    this.tileComponents[l] && (this.tileComponents[l].innerHTML = "", this.tileComponents[l] = void 0);
  }
});
L({
  props: {
    ...Ie,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(e, a) {
    const t = c(), o = c(null), r = c(!1), l = B(k), n = g(D), { options: s, methods: i } = it(e, t, a);
    return T(async () => {
      const { GridLayer: u, DomUtil: v, Util: y } = l ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js"), N = qt(
        u,
        v,
        y,
        e.childRender
      );
      t.value = x(new N(s));
      const { listeners: h } = z(a.attrs);
      t.value.on(h), _(i, t.value, e), n({
        ...e,
        ...i,
        leafletObject: t.value
      }), r.value = !0, S(() => a.emit("ready", t.value));
    }), { root: o, ready: r, leafletObject: t };
  },
  render() {
    return this.ready ? ae("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const De = {
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
L({
  name: "LIcon",
  props: {
    ...De,
    ...de
  },
  setup(e, a) {
    const t = c(), o = B(k), r = g(We), l = g(Ge), n = g(qe);
    let s, i, u, v, y;
    const N = (P, j, I) => {
      const M = P && P.innerHTML;
      if (!j) {
        I && y && r() && l(M);
        return;
      }
      const { listeners: J } = z(a.attrs);
      y && i(y, J);
      const { options: oe } = pe(e), Z = w(
        e,
        De,
        oe
      );
      M && (Z.html = M), y = Z.html ? u(Z) : v(Z), s(y, J), n(y);
    }, h = () => {
      S(() => N(t.value, !0, !1));
    }, W = () => {
      S(() => N(t.value, !1, !0));
    }, F = {
      setIconUrl: h,
      setIconRetinaUrl: h,
      setIconSize: h,
      setIconAnchor: h,
      setPopupAnchor: h,
      setTooltipAnchor: h,
      setShadowUrl: h,
      setShadowRetinaUrl: h,
      setShadowAnchor: h,
      setBgPos: h,
      setClassName: h,
      setHtml: h
    };
    return T(async () => {
      const {
        DomEvent: P,
        divIcon: j,
        icon: I
      } = o ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      s = P.on, i = P.off, u = j, v = I, _(F, {}, e), new MutationObserver(W).observe(t.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), h();
    }), { root: t };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : void 0;
    return ae("div", { ref: "root" }, e);
  }
});
const ut = {
  ...ne,
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
}, Jt = (e, a, t) => {
  const { options: o, methods: r } = ve(
    e,
    a,
    t
  ), l = w(
    e,
    ut,
    o
  ), n = {
    ...r,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(s) {
      return a.value.setOpacity(s);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(s) {
      return a.value.setUrl(s);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(s) {
      return a.value.setBounds(s);
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
    setZIndex(s) {
      return a.value.setZIndex(s);
    }
  };
  return { options: l, methods: n };
};
L({
  name: "LImageOverlay",
  props: ut,
  setup(e, a) {
    const t = c(), o = c(!1), r = B(k), l = g(D), { options: n, methods: s } = Jt(
      e,
      t,
      a
    );
    return T(async () => {
      const { imageOverlay: i } = r ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(
        i(e.url, e.bounds, n)
      );
      const { listeners: u } = z(a.attrs);
      t.value.on(u), _(s, t.value, e), l({
        ...e,
        ...s,
        leafletObject: t.value
      }), o.value = !0, S(() => a.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return q(this.ready, this.$slots);
  }
});
L({
  props: Ce,
  setup(e, a) {
    const t = c(), o = c(!1), r = B(k), l = g(D), { methods: n } = Pe(e, t, a);
    return T(async () => {
      const { layerGroup: s } = r ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(
        s(void 0, e.options)
      );
      const { listeners: i } = z(a.attrs);
      t.value.on(i), _(n, t.value, e), l({
        ...e,
        ...n,
        leafletObject: t.value
      }), o.value = !0, S(() => a.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return q(this.ready, this.$slots);
  }
});
function ct(e, a, t) {
  var o, r, l;
  a === void 0 && (a = 50), t === void 0 && (t = {});
  var n = (o = t.isImmediate) != null && o, s = (r = t.callback) != null && r, i = t.maxWait, u = Date.now(), v = [];
  function y() {
    if (i !== void 0) {
      var h = Date.now() - u;
      if (h + a >= i)
        return i - h;
    }
    return a;
  }
  var N = function() {
    var h = [].slice.call(arguments), W = this;
    return new Promise(function(F, P) {
      var j = n && l === void 0;
      if (l !== void 0 && clearTimeout(l), l = setTimeout(function() {
        if (l = void 0, u = Date.now(), !n) {
          var M = e.apply(W, h);
          s && s(M), v.forEach(function(J) {
            return (0, J.resolve)(M);
          }), v = [];
        }
      }, y()), j) {
        var I = e.apply(W, h);
        return s && s(I), F(I);
      }
      v.push({ resolve: F, reject: P });
    });
  };
  return N.cancel = function(h) {
    l !== void 0 && clearTimeout(l), v.forEach(function(W) {
      return (0, W.reject)(h);
    }), v = [];
  }, N;
}
const Me = {
  ...de,
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
}, Kt = L({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: Me,
  setup(e, a) {
    const t = c(), o = Bt({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: r } = pe(e), l = w(
      e,
      Me,
      r
    ), { listeners: n, attrs: s } = z(a.attrs), i = Se(D), u = Se(je), v = Se(ce), y = Se(
      Ze
    );
    G(k, e.useGlobalLeaflet);
    const N = Y(() => {
      const j = {};
      return e.noBlockingAnimations && (j.animate = !1), j;
    }), h = Y(() => {
      const j = N.value;
      return e.padding && (j.padding = e.padding), e.paddingTopLeft && (j.paddingTopLeft = e.paddingTopLeft), e.paddingBottomRight && (j.paddingBottomRight = e.paddingBottomRight), j;
    }), W = {
      moveend: ct((j) => {
        o.leafletRef && (a.emit("update:zoom", o.leafletRef.getZoom()), a.emit("update:center", o.leafletRef.getCenter()), a.emit("update:bounds", o.leafletRef.getBounds()));
      }),
      overlayadd(j) {
        const I = o.layersInControl.find((M) => M.name === j.name);
        I && I.updateVisibleProp(!0);
      },
      overlayremove(j) {
        const I = o.layersInControl.find((M) => M.name === j.name);
        I && I.updateVisibleProp(!1);
      }
    };
    T(async () => {
      e.useGlobalLeaflet && (b.L = b.L || await import("./leaflet-src-BDi_6Owi.js").then((m) => m.l));
      const { map: j, CRS: I, Icon: M, latLngBounds: J, latLng: oe, stamp: Z } = e.useGlobalLeaflet ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        l.beforeMapMount && await l.beforeMapMount();
      } catch (m) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${m.message}`
        );
      }
      await Vt(M);
      const ye = typeof l.crs == "string" ? I[l.crs] : l.crs;
      l.crs = ye || I.EPSG3857;
      const Q = {
        addLayer(m) {
          m.layerType !== void 0 && (o.layerControl === void 0 ? o.layersToAdd.push(m) : o.layersInControl.find(
            (O) => Z(O.leafletObject) === Z(m.leafletObject)
          ) || (o.layerControl.addLayer(m), o.layersInControl.push(m))), m.visible !== !1 && o.leafletRef.addLayer(m.leafletObject);
        },
        removeLayer(m) {
          m.layerType !== void 0 && (o.layerControl === void 0 ? o.layersToAdd = o.layersToAdd.filter(
            (O) => O.name !== m.name
          ) : (o.layerControl.removeLayer(m.leafletObject), o.layersInControl = o.layersInControl.filter(
            (O) => Z(O.leafletObject) !== Z(m.leafletObject)
          ))), o.leafletRef.removeLayer(m.leafletObject);
        },
        registerLayerControl(m) {
          o.layerControl = m, o.layersToAdd.forEach((O) => {
            o.layerControl.addLayer(O);
          }), o.layersToAdd = [], v(m);
        },
        registerControl(m) {
          o.leafletRef.addControl(m.leafletObject);
        },
        setZoom(m) {
          const O = o.leafletRef.getZoom();
          m !== O && o.leafletRef.setZoom(m, N.value);
        },
        setCrs(m) {
          const O = o.leafletRef.getBounds();
          o.leafletRef.options.crs = m, o.leafletRef.fitBounds(O, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(m) {
          o.leafletRef.fitBounds(m, h.value);
        },
        setBounds(m) {
          if (!m)
            return;
          const O = J(m);
          O.isValid() && !(o.lastSetBounds || o.leafletRef.getBounds()).equals(O, 0) && (o.lastSetBounds = O, o.leafletRef.fitBounds(O));
        },
        setCenter(m) {
          if (m == null)
            return;
          const O = oe(m), fe = o.lastSetCenter || o.leafletRef.getCenter();
          (fe.lat !== O.lat || fe.lng !== O.lng) && (o.lastSetCenter = O, o.leafletRef.panTo(O, N.value));
        }
      };
      Le(i, Q.addLayer), Le(u, Q.removeLayer), Le(v, Q.registerControl), Le(y, Q.registerLayerControl), o.leafletRef = x(j(t.value, l)), _(Q, o.leafletRef, e), $e(o.leafletRef, W), $e(o.leafletRef, n), o.ready = !0, S(() => a.emit("ready", o.leafletRef));
    }), ue(() => {
      Ee(W), o.leafletRef && (o.leafletRef.off(), o.leafletRef.remove());
    });
    const F = Y(() => o.leafletRef), P = Y(() => o.ready);
    return { root: t, ready: P, leafletObject: F, attrs: s };
  },
  render({ attrs: e }) {
    return e.style || (e.style = {}), e.style.width || (e.style.width = "100%"), e.style.height || (e.style.height = "100%"), ae(
      "div",
      {
        ...e,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), Ht = ["Symbol(Comment)", "Symbol(Text)"], Yt = ["LTooltip", "LPopup"], dt = {
  ...ne,
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
}, Qt = (e, a, t) => {
  const { options: o, methods: r } = ve(
    e,
    a,
    t
  ), l = w(
    e,
    dt,
    o
  ), n = {
    ...r,
    setDraggable(s) {
      a.value.dragging && (s ? a.value.dragging.enable() : a.value.dragging.disable());
    },
    latLngSync(s) {
      t.emit("update:latLng", s.latlng), t.emit("update:lat-lng", s.latlng);
    },
    setLatLng(s) {
      if (s != null && a.value) {
        const i = a.value.getLatLng();
        (!i || !i.equals(s)) && a.value.setLatLng(s);
      }
    }
  };
  return { options: l, methods: n };
}, Xt = (e, a) => {
  const t = a.slots.default && a.slots.default();
  return t && t.length && t.some(ea);
};
function ea(e) {
  return !(Ht.includes(e.type.toString()) || Yt.includes(e.type.name));
}
L({
  name: "LMarker",
  props: dt,
  setup(e, a) {
    const t = c(), o = c(!1), r = B(k), l = g(D);
    G(
      We,
      () => {
        var u;
        return !!((u = t.value) != null && u.getElement());
      }
    ), G(Ge, (u) => {
      var v, y;
      const N = H((v = t.value) == null ? void 0 : v.getElement) && ((y = t.value) == null ? void 0 : y.getElement());
      N && (N.innerHTML = u);
    }), G(
      qe,
      (u) => {
        var v;
        return ((v = t.value) == null ? void 0 : v.setIcon) && t.value.setIcon(u);
      }
    );
    const { options: n, methods: s } = Qt(e, t, a), i = {
      moveHandler: ct(s.latLngSync)
    };
    return T(async () => {
      const { marker: u, divIcon: v } = r ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      Xt(n, a) && (n.icon = v({ className: "" })), t.value = x(u(e.latLng, n));
      const { listeners: y } = z(a.attrs);
      t.value.on(y), t.value.on("move", i.moveHandler), _(s, t.value, e), l({
        ...e,
        ...s,
        leafletObject: t.value
      }), o.value = !0, S(() => a.emit("ready", t.value));
    }), ue(() => Ee(i)), { ready: o, leafletObject: t };
  },
  render() {
    return q(this.ready, this.$slots);
  }
});
const Ve = {
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
}, pt = (e, a, t) => {
  const { options: o, methods: r } = Xe(
    e,
    a,
    t
  ), l = w(
    e,
    Ve,
    o
  ), n = {
    ...r,
    setSmoothFactor(s) {
      a.value.setStyle({ smoothFactor: s });
    },
    setNoClip(s) {
      a.value.setStyle({ noClip: s });
    },
    addLatLng(s) {
      a.value.addLatLng(s);
    }
  };
  return { options: l, methods: n };
}, we = {
  ...Ve
}, vt = (e, a, t) => {
  const { options: o, methods: r } = pt(
    e,
    a,
    t
  ), l = w(
    e,
    we,
    o
  ), n = {
    ...r,
    toGeoJSON(s) {
      return a.value.toGeoJSON(s);
    }
  };
  return { options: l, methods: n };
};
L({
  name: "LPolygon",
  props: we,
  setup(e, a) {
    const t = c(), o = c(!1), r = B(k), l = g(D), { options: n, methods: s } = vt(e, t, a);
    return T(async () => {
      const { polygon: i } = r ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(i(e.latLngs, n));
      const { listeners: u } = z(a.attrs);
      t.value.on(u), _(s, t.value, e), l({
        ...e,
        ...s,
        leafletObject: t.value
      }), o.value = !0, S(() => a.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return q(this.ready, this.$slots);
  }
});
L({
  name: "LPolyline",
  props: Ve,
  setup(e, a) {
    const t = c(), o = c(!1), r = B(k), l = g(D), { options: n, methods: s } = pt(e, t, a);
    return T(async () => {
      const { polyline: i } = r ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(
        i(e.latLngs, n)
      );
      const { listeners: u } = z(a.attrs);
      t.value.on(u), _(s, t.value, e), l({
        ...e,
        ...s,
        leafletObject: t.value
      }), o.value = !0, S(() => a.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return q(this.ready, this.$slots);
  }
});
const mt = {
  ...de,
  content: {
    type: String,
    default: null
  }
}, yt = (e, a) => {
  const { options: t, methods: o } = pe(e), r = {
    ...o,
    setContent(l) {
      a.value && l !== null && l !== void 0 && a.value.setContent(l);
    }
  };
  return { options: t, methods: r };
}, ft = (e) => e.default ? ae("div", { ref: "root" }, e.default()) : null, ta = {
  ...mt,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, aa = (e, a) => {
  const { options: t, methods: o } = yt(e, a);
  return { options: t, methods: o };
}, oa = L({
  name: "LPopup",
  props: ta,
  setup(e, a) {
    const t = c(), o = c(null), r = B(k), l = g(Je), n = g(He), { options: s, methods: i } = aa(e, t);
    return T(async () => {
      const { popup: u } = r ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(u(s)), e.latLng !== void 0 && t.value.setLatLng(e.latLng), _(i, t.value, e);
      const { listeners: v } = z(a.attrs);
      t.value.on(v), t.value.setContent(e.content || o.value || ""), l(t.value), S(() => a.emit("ready", t.value));
    }), ue(() => {
      n();
    }), { root: o, leafletObject: t };
  },
  render() {
    return ft(this.$slots);
  }
}), gt = {
  ...we,
  latLngs: {
    ...we.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, na = (e, a, t) => {
  const { options: o, methods: r } = vt(
    e,
    a,
    t
  ), l = w(
    e,
    gt,
    o
  ), n = {
    ...r,
    setBounds(s) {
      a.value.setBounds(s);
    },
    setLatLngs(s) {
      a.value.setBounds(s);
    }
  };
  return { options: l, methods: n };
};
L({
  name: "LRectangle",
  props: gt,
  setup(e, a) {
    const t = c(), o = c(!1), r = B(k), l = g(D), { options: n, methods: s } = na(e, t, a);
    return T(async () => {
      const { rectangle: i, latLngBounds: u } = r ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js"), v = e.bounds ? u(e.bounds) : u(e.latLngs || []);
      t.value = x(i(v, n));
      const { listeners: y } = z(a.attrs);
      t.value.on(y), _(s, t.value, e), l({
        ...e,
        ...s,
        leafletObject: t.value
      }), o.value = !0, S(() => a.emit("ready", t.value));
    }), { ready: o, leafletObject: t };
  },
  render() {
    return q(this.ready, this.$slots);
  }
});
const Ne = {
  ...Ie,
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
}, ht = (e, a, t) => {
  const { options: o, methods: r } = it(e, a, t), l = w(
    e,
    Ne,
    o
  ), n = {
    ...r
  };
  return { options: l, methods: n };
}, la = L({
  props: Ne,
  setup(e, a) {
    const t = c(), o = B(k), r = g(D), { options: l, methods: n } = ht(e, t, a);
    return T(async () => {
      const { tileLayer: s } = o ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(s(e.url, l));
      const { listeners: i } = z(a.attrs);
      t.value.on(i), _(n, t.value, e), r({
        ...e,
        ...n,
        leafletObject: t.value
      }), S(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
}), sa = {
  ...mt
}, ra = (e, a) => {
  const { options: t, methods: o } = yt(e, a), r = g(Ye);
  return ue(() => {
    r();
  }), { options: t, methods: o };
};
L({
  name: "LTooltip",
  props: sa,
  setup(e, a) {
    const t = c(), o = c(null), r = B(k), l = g(Ke), { options: n, methods: s } = ra(e, t);
    return T(async () => {
      const { tooltip: i } = r ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(i(n)), _(s, t.value, e);
      const { listeners: u } = z(a.attrs);
      t.value.on(u), t.value.setContent(e.content || o.value || ""), l(t.value), S(() => a.emit("ready", t.value));
    }), { root: o, leafletObject: t };
  },
  render() {
    return ft(this.$slots);
  }
});
const bt = {
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
}, ia = (e, a, t) => {
  const { options: o, methods: r } = ht(e, a, t);
  return {
    options: w(
      e,
      bt,
      o
    ),
    methods: {
      ...r
    }
  };
};
L({
  props: bt,
  setup(e, a) {
    const t = c(), o = B(k), r = g(D), { options: l, methods: n } = ia(
      e,
      t,
      a
    );
    return T(async () => {
      const { tileLayer: s } = o ? b.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = x(
        s.wms(e.url, l)
      );
      const { listeners: i } = z(a.attrs);
      t.value.on(i), _(n, t.value, e), r({
        ...e,
        ...n,
        leafletObject: t.value
      }), S(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const ua = { class: "valhalla-preview" }, ca = { class: "sidebar" }, da = { class: "search-section" }, pa = { class: "search-box" }, va = {
  key: 0,
  class: "search-results"
}, ma = ["onClick"], ya = { class: "controls-row" }, fa = { class: "waypoints-list" }, ga = { class: "waypoints-header" }, ha = { class: "section-title" }, ba = ["onDragstart", "onDragover"], Sa = { class: "waypoint-grip" }, La = { class: "waypoint-info" }, Oa = { class: "waypoint-role" }, wa = { class: "waypoint-name" }, ja = { class: "waypoint-actions" }, Ca = {
  key: 0,
  class: "no-waypoints"
}, Ta = {
  key: 0,
  class: "action-buttons"
}, Ba = {
  key: 1,
  class: "route-summary"
}, _a = { class: "summary-stats" }, ka = { class: "stat" }, xa = { class: "stat" }, Ra = { class: "stat" }, Aa = {
  key: 0,
  class: "maneuvers-list"
}, Pa = { class: "maneuver-index" }, Ia = { class: "maneuver-text" }, Va = { class: "maneuver-dist" }, Na = { class: "map-container" }, Fe = "SET_WAYPOINTS", za = "OPTIMIZE_ROUTE", $a = /* @__PURE__ */ L({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const a = e, t = c(null), o = kt(null), r = c(a.dataSource), { update: l } = Pt(a.dataSource.type, r, o), n = c([]), s = c(a.dataSource.config?.costing || "auto"), i = c(""), u = c([]), v = c(!1);
    let y = null;
    const N = c(null), h = c([50.93, 11.59]), W = c(10), F = c(null), P = c(!1), j = [
      { text: "Auto", value: "auto" },
      { text: "Fahrrad", value: "bicycle" },
      { text: "Fußgänger", value: "pedestrian" },
      { text: "LKW", value: "truck" },
      { text: "Bus", value: "bus" },
      { text: "Motorroller", value: "motor_scooter" },
      { text: "Motorrad", value: "motorcycle" }
    ], I = Y(() => t.value?.geojson?.features ? t.value.geojson.features.filter((p) => p.geometry?.type === "LineString") : []), M = Y(() => I.value.length === 0 ? null : { type: "FeatureCollection", features: I.value }), J = () => ({ color: "#c45e00", weight: 5, opacity: 0.8 });
    function oe(p) {
      return p === 0 ? "#4caf50" : p === n.value.length - 1 ? "#f44336" : "#2196f3";
    }
    function Z(p) {
      return p === 0 ? "Start" : p === n.value.length - 1 ? "Ziel" : `Stop ${p}`;
    }
    Oe(o, async () => {
      o.value && (t.value = await o.value.getData("object"), o.value.subscribe(async () => {
        t.value = await o.value.getData("object");
      }));
    }, { deep: !0 }), Oe(a.dataSource, () => l(), { deep: !0 });
    async function ye() {
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
    function Q() {
      y && clearTimeout(y), y = setTimeout(ye, 400);
    }
    function m(p) {
      const d = {
        lat: parseFloat(p.lat),
        lon: parseFloat(p.lon),
        name: p.display_name.split(",").slice(0, 2).join(", ")
      };
      n.value.push(d), i.value = "", u.value = [], Te();
    }
    function O(p) {
      const { lat: d, lng: $ } = p.latlng;
      n.value.push({ lat: d, lon: $, name: `${d.toFixed(4)}, ${$.toFixed(4)}` });
    }
    function fe(p) {
      n.value.splice(p, 1);
    }
    function St() {
      n.value = [], t.value = null, o.value && o.value.callEvent(Fe, { waypoints: [], costing: s.value });
    }
    function ze(p, d) {
      if (d < 0 || d >= n.value.length) return;
      const $ = n.value.splice(p, 1)[0];
      n.value.splice(d, 0, $);
    }
    async function Lt() {
      if (!(!o.value || n.value.length < 2)) {
        P.value = !0;
        try {
          await o.value.callEvent(Fe, {
            waypoints: n.value.map((p) => ({ lat: p.lat, lon: p.lon, name: p.name })),
            costing: s.value
          }), Te();
        } finally {
          P.value = !1;
        }
      }
    }
    async function Ot() {
      if (!(!o.value || n.value.length < 3)) {
        P.value = !0;
        try {
          await o.value.callEvent(za, {
            waypoints: n.value.map((d) => ({ lat: d.lat, lon: d.lon, name: d.name })),
            costing: s.value
          });
          const p = await o.value.getData("object");
          p?.waypoints && (n.value = p.waypoints.map((d) => ({
            lat: d.lat,
            lon: d.lon,
            name: d.name || `${d.lat.toFixed(4)}, ${d.lon.toFixed(4)}`
          }))), Te();
        } finally {
          P.value = !1;
        }
      }
    }
    function Te() {
      n.value.length !== 0 && S(() => {
        const p = N.value?.leafletObject;
        if (p)
          if (n.value.length === 1)
            p.setView([n.value[0].lat, n.value[0].lon], 14);
          else {
            const d = n.value.map((X) => X.lat), $ = n.value.map((X) => X.lon);
            p.fitBounds(
              [[Math.min(...d), Math.min(...$)], [Math.max(...d), Math.max(...$)]],
              { padding: [40, 40] }
            );
          }
      });
    }
    function wt(p) {
      F.value = p;
    }
    function jt(p, d) {
      if (p.preventDefault(), F.value === null || F.value === d) return;
      const $ = F.value, X = n.value.splice($, 1)[0];
      n.value.splice(d, 0, X), F.value = d;
    }
    function Ct() {
      F.value = null;
    }
    const Be = Y(() => t.value?.legs ? t.value.legs.flatMap((p) => p.maneuvers || []) : []);
    return (p, d) => {
      const $ = te("va-icon"), X = te("VaInput"), Tt = te("VaSelect"), _e = te("VaButton"), ke = te("va-button");
      return V(), U("div", ua, [
        f("div", ca, [
          f("div", da, [
            f("div", pa, [
              A(X, {
                modelValue: i.value,
                "onUpdate:modelValue": d[0] || (d[0] = (R) => i.value = R),
                placeholder: "Adresse suchen...",
                class: "search-input",
                onInput: Q,
                onKeydown: xt(ye, ["enter"])
              }, {
                prependInner: ee(() => [
                  A($, {
                    name: "search",
                    size: "small"
                  })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              u.value.length > 0 ? (V(), U("div", va, [
                (V(!0), U(ie, null, ge(u.value, (R) => (V(), U("div", {
                  key: R.place_id,
                  class: "search-result-item",
                  onClick: (C) => m(R)
                }, [
                  A($, {
                    name: "location_on",
                    size: "small",
                    color: "primary"
                  }),
                  f("span", null, E(R.display_name), 1)
                ], 8, ma))), 128))
              ])) : K("", !0)
            ])
          ]),
          f("div", ya, [
            A(Tt, {
              modelValue: s.value,
              "onUpdate:modelValue": d[1] || (d[1] = (R) => s.value = R),
              options: j,
              "text-by": "text",
              "value-by": "value",
              label: "Modus",
              class: "costing-select"
            }, null, 8, ["modelValue"]),
            n.value.length > 0 ? (V(), he(_e, {
              key: 0,
              preset: "secondary",
              size: "small",
              icon: "delete_sweep",
              onClick: St
            }, {
              default: ee(() => [...d[2] || (d[2] = [
                be(" Alle löschen ", -1)
              ])]),
              _: 1
            })) : K("", !0)
          ]),
          f("div", fa, [
            f("div", ga, [
              f("span", ha, "Wegpunkte (" + E(n.value.length) + ")", 1),
              d[3] || (d[3] = f("span", { class: "hint" }, "Klick auf Karte = Wegpunkt hinzufügen", -1))
            ]),
            (V(!0), U(ie, null, ge(n.value, (R, C) => (V(), U("div", {
              key: C,
              class: Rt(["waypoint-item", { dragging: F.value === C }]),
              draggable: "true",
              onDragstart: (se) => wt(C),
              onDragover: (se) => jt(se, C),
              onDragend: Ct
            }, [
              f("div", Sa, [
                A($, {
                  name: "drag_indicator",
                  size: "small",
                  color: "secondary"
                })
              ]),
              f("div", {
                class: "waypoint-marker",
                style: At({ backgroundColor: oe(C) })
              }, E(C + 1), 5),
              f("div", La, [
                f("span", Oa, E(Z(C)), 1),
                f("span", wa, E(R.name || `${R.lat.toFixed(4)}, ${R.lon.toFixed(4)}`), 1)
              ]),
              f("div", ja, [
                A(ke, {
                  preset: "plain",
                  size: "small",
                  icon: "arrow_upward",
                  disabled: C === 0,
                  onClick: (se) => ze(C, C - 1)
                }, null, 8, ["disabled", "onClick"]),
                A(ke, {
                  preset: "plain",
                  size: "small",
                  icon: "arrow_downward",
                  disabled: C === n.value.length - 1,
                  onClick: (se) => ze(C, C + 1)
                }, null, 8, ["disabled", "onClick"]),
                A(ke, {
                  preset: "plain",
                  size: "small",
                  icon: "close",
                  color: "danger",
                  onClick: (se) => fe(C)
                }, null, 8, ["onClick"])
              ])
            ], 42, ba))), 128)),
            n.value.length === 0 ? (V(), U("div", Ca, " Noch keine Wegpunkte. Klicke auf die Karte oder suche eine Adresse. ")) : K("", !0)
          ]),
          n.value.length >= 2 ? (V(), U("div", Ta, [
            A(_e, {
              disabled: P.value,
              loading: P.value,
              icon: "route",
              onClick: Lt
            }, {
              default: ee(() => [...d[4] || (d[4] = [
                be(" Route berechnen ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"]),
            n.value.length >= 3 ? (V(), he(_e, {
              key: 0,
              preset: "secondary",
              disabled: P.value,
              loading: P.value,
              icon: "auto_fix_high",
              onClick: Ot
            }, {
              default: ee(() => [...d[5] || (d[5] = [
                be(" Route optimieren ", -1)
              ])]),
              _: 1
            }, 8, ["disabled", "loading"])) : K("", !0)
          ])) : K("", !0),
          t.value?.summary ? (V(), U("div", Ba, [
            d[6] || (d[6] = f("div", { class: "summary-header" }, "Route", -1)),
            f("div", _a, [
              f("div", ka, [
                A($, {
                  name: "straighten",
                  size: "small"
                }),
                f("span", null, E(t.value.summary.distance_km.toFixed(1)) + " km", 1)
              ]),
              f("div", xa, [
                A($, {
                  name: "schedule",
                  size: "small"
                }),
                f("span", null, E(t.value.summary.duration_min) + " min", 1)
              ]),
              f("div", Ra, [
                A($, {
                  name: "turn_right",
                  size: "small"
                }),
                f("span", null, E(Be.value.length) + " Manöver", 1)
              ])
            ]),
            Be.value.length > 0 ? (V(), U("div", Aa, [
              (V(!0), U(ie, null, ge(Be.value, (R, C) => (V(), U("div", {
                key: C,
                class: "maneuver-item"
              }, [
                f("span", Pa, E(C + 1) + ".", 1),
                f("span", Ia, E(R.instruction), 1),
                f("span", Va, E(R.length.toFixed(1)) + " km", 1)
              ]))), 128))
            ])) : K("", !0)
          ])) : K("", !0)
        ]),
        f("div", Na, [
          A(re(Kt), {
            ref_key: "mapRef",
            ref: N,
            center: h.value,
            zoom: W.value,
            style: { height: "100%", width: "100%" },
            onClick: O
          }, {
            default: ee(() => [
              A(re(la), {
                url: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
                options: { maxNativeZoom: 19, maxZoom: 21 }
              }),
              M.value ? (V(), he(re(Gt), {
                key: 0,
                geojson: M.value,
                "options-style": J
              }, null, 8, ["geojson"])) : K("", !0),
              (V(!0), U(ie, null, ge(n.value, (R, C) => (V(), he(re($t), {
                key: "wp-" + C,
                "lat-lng": [R.lat, R.lon],
                radius: 10,
                "fill-color": oe(C),
                color: "#fff",
                weight: 3,
                "fill-opacity": 1
              }, {
                default: ee(() => [
                  A(re(oa), null, {
                    default: ee(() => [
                      f("strong", null, E(Z(C)), 1),
                      d[7] || (d[7] = f("br", null, null, -1)),
                      be(" " + E(R.name || `${R.lat.toFixed(4)}, ${R.lon.toFixed(4)}`), 1)
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
      ]);
    };
  }
}), Da = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [o, r] of a)
    t[o] = r;
  return t;
}, Ma = /* @__PURE__ */ Da($a, [["__scopeId", "data-v-5cc943b1"]]), Fa = /* @__PURE__ */ L({
  __name: "Settings",
  props: {
    config: {},
    connections: {},
    dataSources: {}
  },
  setup(e) {
    const a = Y(
      () => e.connections.filter((r) => r.type === "rest")
    ), t = [
      { text: "Auto", value: "auto" },
      { text: "Bicycle", value: "bicycle" },
      { text: "Pedestrian", value: "pedestrian" },
      { text: "Truck", value: "truck" },
      { text: "Bus", value: "bus" },
      { text: "Motor Scooter", value: "motor_scooter" },
      { text: "Motorcycle", value: "motorcycle" }
    ], o = [
      { text: "Kilometers", value: "kilometers" },
      { text: "Miles", value: "miles" }
    ];
    return e.config.costing || (e.config.costing = "auto"), e.config.units || (e.config.units = "kilometers"), e.config.language || (e.config.language = "de-DE"), (r, l) => {
      const n = te("VaSelect"), s = te("VaInput");
      return V(), U(ie, null, [
        A(n, {
          modelValue: e.config.connection,
          "onUpdate:modelValue": l[0] || (l[0] = (i) => e.config.connection = i),
          label: "Valhalla Connection",
          options: a.value,
          "text-by": "name",
          "value-by": "uid"
        }, null, 8, ["modelValue", "options"]),
        A(n, {
          modelValue: e.config.costing,
          "onUpdate:modelValue": l[1] || (l[1] = (i) => e.config.costing = i),
          label: "Default Costing",
          options: t,
          "text-by": "text",
          "value-by": "value"
        }, null, 8, ["modelValue"]),
        A(n, {
          modelValue: e.config.units,
          "onUpdate:modelValue": l[2] || (l[2] = (i) => e.config.units = i),
          label: "Units",
          options: o,
          "text-by": "text",
          "value-by": "value"
        }, null, 8, ["modelValue"]),
        A(s, {
          modelValue: e.config.language,
          "onUpdate:modelValue": l[3] || (l[3] = (i) => e.config.language = i),
          label: "Language (e.g. de-DE)"
        }, null, 8, ["modelValue"])
      ], 64);
    };
  }
}), Ua = Symbol.for("ValhallaStoreFactory"), Ea = Symbol.for("ValhallaPreview"), Za = Symbol.for("ValhallaSettings");
function Ja({ services: e }) {
  e.register("ValhallaPreview", Ma), e.register("ValhallaSettings", Fa), e.getRequired(Ue).registerDatasourceType("valhalla", {
    Store: Ua,
    Preview: Ea,
    Settings: Za
  });
}
function Ka({ services: e }) {
  e.getRequired(Ue).unregisterDatasourceType("valhalla"), e.unregister("ValhallaPreview"), e.unregister("ValhallaSettings");
}
export {
  Ja as activate,
  Ka as deactivate
};
