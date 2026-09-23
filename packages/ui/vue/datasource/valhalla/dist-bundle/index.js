(function(){var i="ui.vue.datasource.valhalla",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:\"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:\"\"}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}.valhalla-preview[data-v-58f9e834]{display:flex;height:100%;width:100%;overflow:hidden}.sidebar[data-v-58f9e834]{width:360px;min-width:300px;display:flex;flex-direction:column;border-right:1px solid #e5e7eb;overflow-y:auto;background:#fafafa}.search-section[data-v-58f9e834]{padding:.75rem;border-bottom:1px solid #e5e7eb;background:#fff}.search-box[data-v-58f9e834]{position:relative}.search-input[data-v-58f9e834]{width:100%}.search-results[data-v-58f9e834]{position:absolute;top:100%;left:0;right:0;background:#fff;border:1px solid #e5e7eb;border-radius:0 0 .5rem .5rem;box-shadow:0 4px 12px #00000026;z-index:1000;max-height:250px;overflow-y:auto}.search-result-item[data-v-58f9e834]{display:flex;align-items:flex-start;gap:.5rem;padding:.5rem .75rem;cursor:pointer;font-size:.85em;border-bottom:1px solid #f3f4f6}.search-result-item[data-v-58f9e834]:hover{background-color:#f0f4ff}.search-result-item[data-v-58f9e834]:last-child{border-bottom:none}.controls-row[data-v-58f9e834]{display:flex;align-items:flex-end;gap:.5rem;padding:.75rem;border-bottom:1px solid #e5e7eb;background:#fff}.costing-select[data-v-58f9e834]{flex:1}.waypoints-list[data-v-58f9e834]{flex:1;overflow-y:auto;padding:.5rem}.waypoints-header[data-v-58f9e834]{display:flex;justify-content:space-between;align-items:center;padding:.25rem .5rem .5rem}.section-title[data-v-58f9e834]{font-weight:600;font-size:.9em;color:#374151}.hint[data-v-58f9e834]{font-size:.75em;color:#9ca3af}.waypoint-item[data-v-58f9e834]{display:flex;align-items:center;gap:.4rem;padding:.4rem .5rem;margin-bottom:.25rem;background:#fff;border-radius:.375rem;border:1px solid #e5e7eb;cursor:grab;transition:box-shadow .15s,opacity .15s}.waypoint-item[data-v-58f9e834]:hover{box-shadow:0 1px 4px #00000014}.waypoint-item.dragging[data-v-58f9e834]{opacity:.5}.waypoint-grip[data-v-58f9e834]{cursor:grab;display:flex;align-items:center}.waypoint-marker[data-v-58f9e834]{width:22px;height:22px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7em;font-weight:700;flex-shrink:0}.waypoint-info[data-v-58f9e834]{flex:1;min-width:0;display:flex;flex-direction:column}.waypoint-role[data-v-58f9e834]{font-size:.7em;font-weight:600;color:#6b7280;text-transform:uppercase;letter-spacing:.03em}.waypoint-name[data-v-58f9e834]{font-size:.85em;color:#374151;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.waypoint-actions[data-v-58f9e834]{display:flex;gap:0;flex-shrink:0}.no-waypoints[data-v-58f9e834]{text-align:center;color:#9ca3af;font-size:.85em;padding:2rem 1rem}.action-buttons[data-v-58f9e834]{display:flex;gap:.5rem;padding:.75rem;border-top:1px solid #e5e7eb;background:#fff}.route-summary[data-v-58f9e834]{border-top:1px solid #e5e7eb;padding:.75rem;background:#fff}.summary-header[data-v-58f9e834]{font-weight:600;font-size:.95em;color:#111827;margin-bottom:.5rem}.summary-stats[data-v-58f9e834]{display:flex;gap:1rem;margin-bottom:.5rem}.stat[data-v-58f9e834]{display:flex;align-items:center;gap:.3rem;font-size:.9em;color:#374151;font-weight:500}.maneuvers-list[data-v-58f9e834]{max-height:200px;overflow-y:auto;border-top:1px solid #f3f4f6;padding-top:.5rem;margin-top:.25rem}.maneuver-item[data-v-58f9e834]{display:flex;gap:.4rem;padding:.2rem 0;font-size:.8em;color:#4b5563;align-items:flex-start}.maneuver-index[data-v-58f9e834]{color:#9ca3af;min-width:1.5em;text-align:right}.maneuver-text[data-v-58f9e834]{flex:1}.maneuver-dist[data-v-58f9e834]{color:#9ca3af;flex-shrink:0}.map-container[data-v-58f9e834]{flex:1;min-width:300px}\n";})();
import { DATASOURCE_REPOSITORY as Ee } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { defineComponent as k, h as te, ref as c, reactive as Bt, provide as q, computed as G, onMounted as B, markRaw as P, nextTick as j, onBeforeUnmount as ie, inject as V, watch as Oe, onUnmounted as _e, render as Vt, shallowRef as At, createElementBlock as F, openBlock as z, createElementVNode as g, createCommentVNode as X, createVNode as w, unref as d, withKeys as Rt, Fragment as re, renderList as fe, toDisplayString as N, createBlock as he, withCtx as J, createTextVNode as ge, normalizeClass as Pt, normalizeStyle as Nt } from "vue";
import { DInput as Fe, DIcon as Z, DSelect as Le, DButton as ae } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { useTranslation as Ue, useTemporaryStore as xt } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { component as zt } from "@eclipse-daanse/tsm";
const ze = (e, a) => {
  for (const t of Object.keys(a))
    e.on(t, a[t]);
}, We = (e) => {
  for (const a of Object.keys(e)) {
    const t = e[a];
    t && ee(t.cancel) && t.cancel();
  }
}, It = (e) => !e || typeof e.charAt != "function" ? e : e.charAt(0).toUpperCase() + e.slice(1), ee = (e) => typeof e == "function", A = (e, a, t) => {
  for (const l in t) {
    const n = "set" + It(l);
    e[n] ? Oe(
      () => t[l],
      (s, r) => {
        e[n](s, r);
      }
    ) : a[n] && Oe(
      () => t[l],
      (s) => {
        a[n](s);
      }
    );
  }
}, _ = (e, a, t = {}) => {
  const l = { ...t };
  for (const n in e) {
    const s = a[n], r = e[n];
    s && (s && s.custom === !0 || r !== void 0 && (l[n] = r));
  }
  return l;
}, $ = (e) => {
  const a = {}, t = {};
  for (const l in e)
    if (l.startsWith("on") && !l.startsWith("onUpdate") && l !== "onReady") {
      const n = l.slice(2).toLocaleLowerCase();
      a[n] = e[l];
    } else
      t[l] = e[l];
  return { listeners: a, attrs: t };
}, Dt = async (e) => {
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
    (...l) => console.warn(`Method ${e} has been invoked without being replaced`)
  ), t = (...l) => a.value(...l);
  return t.wrapped = a, q(e, t), t;
}, Se = (e, a) => e.wrapped.value = a, C = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, L = (e) => {
  const a = V(e);
  if (a === void 0)
    throw new Error(
      `Attempt to inject ${e.description} before it was provided.`
    );
  return a;
}, R = Symbol(
  "useGlobalLeaflet"
), M = Symbol("addLayer"), Ce = Symbol("removeLayer"), ue = Symbol(
  "registerControl"
), Ze = Symbol(
  "registerLayerControl"
), qe = Symbol(
  "canSetParentHtml"
), Ge = Symbol("setParentHtml"), Ke = Symbol("setIcon"), He = Symbol("bindPopup"), Je = Symbol("bindTooltip"), Ye = Symbol("unbindPopup"), Qe = Symbol("unbindTooltip"), ce = {
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
  const l = L(M), n = L(Ce), { options: s, methods: r } = de(e), o = _(
    e,
    le,
    s
  ), i = () => l({ leafletObject: a.value }), u = () => n({ leafletObject: a.value }), p = {
    ...r,
    setAttribution(f) {
      u(), a.value.options.attribution = f, e.visible && i();
    },
    setName() {
      u(), e.visible && i();
    },
    setLayerType() {
      u(), e.visible && i();
    },
    setVisible(f) {
      a.value && (f ? i() : u());
    },
    bindPopup(f) {
      if (!a.value || !ee(a.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      a.value.bindPopup(f);
    },
    bindTooltip(f) {
      if (!a.value || !ee(a.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      a.value.bindTooltip(f);
    },
    unbindTooltip() {
      a.value && (ee(a.value.closeTooltip) && a.value.closeTooltip(), ee(a.value.unbindTooltip) && a.value.unbindTooltip());
    },
    unbindPopup() {
      a.value && (ee(a.value.closePopup) && a.value.closePopup(), ee(a.value.unbindPopup) && a.value.unbindPopup());
    },
    updateVisibleProp(f) {
      t.emit("update:visible", f);
    }
  };
  return q(He, p.bindPopup), q(Je, p.bindTooltip), q(Ye, p.unbindPopup), q(Qe, p.unbindTooltip), _e(() => {
    p.unbindPopup(), p.unbindTooltip(), u();
  }), { options: o, methods: p };
}, K = (e, a) => {
  if (e && a.default)
    return te("div", { style: { display: "none" } }, a.default());
}, Xe = {
  ...le,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, $t = (e, a, t) => {
  const { options: l, methods: n } = pe(
    e,
    a,
    t
  );
  return { options: _(
    e,
    Xe,
    l
  ), methods: n };
}, Be = {
  ...Xe,
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
}, et = (e, a, t) => {
  const { options: l, methods: n } = $t(e, a, t), s = _(
    e,
    Be,
    l
  ), r = L(Ce), o = {
    ...n,
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
    r({ leafletObject: a.value });
  }), { options: s, methods: o };
}, Ve = {
  ...Be,
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
}, tt = (e, a, t) => {
  const { options: l, methods: n } = et(
    e,
    a,
    t
  ), s = _(
    e,
    Ve,
    l
  ), r = {
    ...n,
    setRadius(o) {
      a.value.setRadius(o);
    },
    setLatLng(o) {
      a.value.setLatLng(o);
    }
  };
  return { options: s, methods: r };
}, at = {
  ...Ve,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, Mt = (e, a, t) => {
  const { options: l, methods: n } = tt(e, a, t), s = _(
    e,
    at,
    l
  ), r = {
    ...n
  };
  return { options: s, methods: r };
};
k({
  name: "LCircle",
  props: at,
  setup(e, a) {
    const t = c(), l = c(!1), n = V(R), s = L(M), { options: r, methods: o } = Mt(e, t, a);
    return B(async () => {
      const { circle: i } = n ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(i(e.latLng, r));
      const { listeners: u } = $(a.attrs);
      t.value.on(u), A(o, t.value, e), s({
        ...e,
        ...o,
        leafletObject: t.value
      }), l.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: l, leafletObject: t };
  },
  render() {
    return K(this.ready, this.$slots);
  }
});
const Et = k({
  name: "LCircleMarker",
  props: Ve,
  setup(e, a) {
    const t = c(), l = c(!1), n = V(R), s = L(M), { options: r, methods: o } = tt(
      e,
      t,
      a
    );
    return B(async () => {
      const { circleMarker: i } = n ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        i(e.latLng, r)
      );
      const { listeners: u } = $(a.attrs);
      t.value.on(u), A(o, t.value, e), s({
        ...e,
        ...o,
        leafletObject: t.value
      }), l.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: l, leafletObject: t };
  },
  render() {
    return K(this.ready, this.$slots);
  }
}), oe = {
  ...ce,
  position: {
    type: String
  }
}, me = (e, a) => {
  const { options: t, methods: l } = de(e), n = _(
    e,
    oe,
    t
  ), s = {
    ...l,
    setPosition(r) {
      a.value && a.value.setPosition(r);
    }
  };
  return _e(() => {
    a.value && a.value.remove();
  }), { options: n, methods: s };
}, Ft = (e) => e.default ? te("div", { ref: "root" }, e.default()) : null;
k({
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
    const t = c(), l = c(), n = V(R), s = L(ue), { options: r, methods: o } = me(e, t);
    return B(async () => {
      const { Control: i, DomEvent: u } = n ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js"), p = i.extend({
        onAdd() {
          return l.value;
        }
      });
      t.value = P(new p(r)), A(o, t.value, e), s({ leafletObject: t.value }), e.disableClickPropagation && l.value && u.disableClickPropagation(l.value), e.disableScrollPropagation && l.value && u.disableScrollPropagation(l.value), j(() => a.emit("ready", t.value));
    }), { root: l, leafletObject: t };
  },
  render() {
    return Ft(this.$slots);
  }
});
const lt = {
  ...oe,
  prefix: {
    type: String
  }
}, Ut = (e, a) => {
  const { options: t, methods: l } = me(
    e,
    a
  ), n = _(
    e,
    lt,
    t
  ), s = {
    ...l,
    setPrefix(r) {
      a.value.setPrefix(r);
    }
  };
  return { options: n, methods: s };
};
k({
  name: "LControlAttribution",
  props: lt,
  setup(e, a) {
    const t = c(), l = V(R), n = L(ue), { options: s, methods: r } = Ut(e, t);
    return B(async () => {
      const { control: o } = l ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        o.attribution(s)
      ), A(r, t.value, e), n({ leafletObject: t.value }), j(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const ot = {
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
}, Wt = (e, a) => {
  const { options: t } = me(e, a);
  return { options: _(
    e,
    ot,
    t
  ), methods: {
    addLayer(l) {
      l.layerType === "base" ? a.value.addBaseLayer(l.leafletObject, l.name) : l.layerType === "overlay" && a.value.addOverlay(l.leafletObject, l.name);
    },
    removeLayer(l) {
      a.value.removeLayer(l.leafletObject);
    }
  } };
};
k({
  name: "LControlLayers",
  props: ot,
  setup(e, a) {
    const t = c(), l = V(R), n = L(Ze), { options: s, methods: r } = Wt(e, t);
    return B(async () => {
      const { control: o } = l ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        o.layers(void 0, void 0, s)
      ), A(r, t.value, e), n({
        ...e,
        ...r,
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
}, Zt = (e, a) => {
  const { options: t, methods: l } = me(
    e,
    a
  );
  return { options: _(
    e,
    nt,
    t
  ), methods: l };
};
k({
  name: "LControlScale",
  props: nt,
  setup(e, a) {
    const t = c(), l = V(R), n = L(ue), { options: s, methods: r } = Zt(e, t);
    return B(async () => {
      const { control: o } = l ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(o.scale(s)), A(r, t.value, e), n({ leafletObject: t.value }), j(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const st = {
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
}, qt = (e, a) => {
  const { options: t, methods: l } = me(
    e,
    a
  );
  return { options: _(
    e,
    st,
    t
  ), methods: l };
};
k({
  name: "LControlZoom",
  props: st,
  setup(e, a) {
    const t = c(), l = V(R), n = L(ue), { options: s, methods: r } = qt(e, t);
    return B(async () => {
      const { control: o } = l ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(o.zoom(s)), A(r, t.value, e), n({ leafletObject: t.value }), j(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const je = {
  ...le
}, Ae = (e, a, t) => {
  const { options: l, methods: n } = pe(
    e,
    a,
    t
  ), s = _(
    e,
    je,
    l
  ), r = {
    ...n,
    addLayer(o) {
      a.value.addLayer(o.leafletObject);
    },
    removeLayer(o) {
      a.value.removeLayer(o.leafletObject);
    }
  };
  return q(M, r.addLayer), q(Ce, r.removeLayer), { options: s, methods: r };
}, rt = {
  ...je
}, Gt = (e, a, t) => {
  const { options: l, methods: n } = Ae(
    e,
    a,
    t
  ), s = _(
    e,
    rt,
    l
  ), r = {
    ...n
  };
  return { options: s, methods: r };
};
k({
  props: rt,
  setup(e, a) {
    const t = c(), l = c(!1), n = V(R), s = L(M), { methods: r, options: o } = Gt(
      e,
      t,
      a
    );
    return B(async () => {
      const { featureGroup: i } = n ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        i(void 0, o)
      );
      const { listeners: u } = $(a.attrs);
      t.value.on(u), A(r, t.value, e), s({
        ...e,
        ...r,
        leafletObject: t.value
      }), l.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: l, leafletObject: t };
  },
  render() {
    return K(this.ready, this.$slots);
  }
});
const it = {
  ...je,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, Kt = (e, a, t) => {
  const { options: l, methods: n } = Ae(
    e,
    a,
    t
  ), s = _(
    e,
    it,
    l
  );
  Object.prototype.hasOwnProperty.call(e, "optionsStyle") && (s.style = e.optionsStyle);
  const r = {
    ...n,
    setGeojson(o) {
      a.value.clearLayers(), a.value.addData(o);
    },
    setOptionsStyle(o) {
      a.value.setStyle(o);
    },
    getGeoJSONData() {
      return a.value.toGeoJSON();
    },
    getBounds() {
      return a.value.getBounds();
    }
  };
  return { options: s, methods: r };
}, Ht = k({
  props: it,
  setup(e, a) {
    const t = c(), l = c(!1), n = V(R), s = L(M), { methods: r, options: o } = Kt(e, t, a);
    return B(async () => {
      const { geoJSON: i } = n ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(i(e.geojson, o));
      const { listeners: u } = $(a.attrs);
      t.value.on(u), A(r, t.value, e), s({
        ...e,
        ...r,
        leafletObject: t.value
      }), l.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: l, leafletObject: t };
  },
  render() {
    return K(this.ready, this.$slots);
  }
}), Re = {
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
}, ut = (e, a, t) => {
  const { options: l, methods: n } = pe(
    e,
    a,
    t
  ), s = _(
    e,
    Re,
    l
  ), r = {
    ...n,
    setTileComponent() {
      var o;
      (o = a.value) == null || o.redraw();
    }
  };
  return _e(() => {
    a.value.off();
  }), { options: s, methods: r };
}, Jt = (e, a, t, l) => e.extend({
  initialize(n) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), t.setOptions(this, n);
  },
  createTile(n) {
    const s = this._tileCoordsToKey(n);
    this.tileComponents[s] = a.create("div");
    const r = te({ setup: l, props: ["coords"] }, { coords: n });
    return Vt(r, this.tileComponents[s]), this.tileComponents[s];
  },
  _unloadTile(n) {
    const s = this._tileCoordsToKey(n.coords);
    this.tileComponents[s] && (this.tileComponents[s].innerHTML = "", this.tileComponents[s] = void 0);
  }
});
k({
  props: {
    ...Re,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(e, a) {
    const t = c(), l = c(null), n = c(!1), s = V(R), r = L(M), { options: o, methods: i } = ut(e, t, a);
    return B(async () => {
      const { GridLayer: u, DomUtil: p, Util: f } = s ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js"), x = Jt(
        u,
        p,
        f,
        e.childRender
      );
      t.value = P(new x(o));
      const { listeners: b } = $(a.attrs);
      t.value.on(b), A(i, t.value, e), r({
        ...e,
        ...i,
        leafletObject: t.value
      }), n.value = !0, j(() => a.emit("ready", t.value));
    }), { root: l, ready: n, leafletObject: t };
  },
  render() {
    return this.ready ? te("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const Ie = {
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
k({
  name: "LIcon",
  props: {
    ...Ie,
    ...ce
  },
  setup(e, a) {
    const t = c(), l = V(R), n = L(qe), s = L(Ge), r = L(Ke);
    let o, i, u, p, f;
    const x = (I, O, D) => {
      const E = I && I.innerHTML;
      if (!O) {
        D && f && n() && s(E);
        return;
      }
      const { listeners: H } = $(a.attrs);
      f && i(f, H);
      const { options: ne } = de(e), U = _(
        e,
        Ie,
        ne
      );
      E && (U.html = E), f = U.html ? u(U) : p(U), o(f, H), r(f);
    }, b = () => {
      j(() => x(t.value, !0, !1));
    }, W = () => {
      j(() => x(t.value, !1, !0));
    }, Y = {
      setIconUrl: b,
      setIconRetinaUrl: b,
      setIconSize: b,
      setIconAnchor: b,
      setPopupAnchor: b,
      setTooltipAnchor: b,
      setShadowUrl: b,
      setShadowRetinaUrl: b,
      setShadowAnchor: b,
      setBgPos: b,
      setClassName: b,
      setHtml: b
    };
    return B(async () => {
      const {
        DomEvent: I,
        divIcon: O,
        icon: D
      } = l ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o = I.on, i = I.off, u = O, p = D, A(Y, {}, e), new MutationObserver(W).observe(t.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), b();
    }), { root: t };
  },
  render() {
    const e = this.$slots.default ? this.$slots.default() : void 0;
    return te("div", { ref: "root" }, e);
  }
});
const ct = {
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
}, Yt = (e, a, t) => {
  const { options: l, methods: n } = pe(
    e,
    a,
    t
  ), s = _(
    e,
    ct,
    l
  ), r = {
    ...n,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(o) {
      return a.value.setOpacity(o);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(o) {
      return a.value.setUrl(o);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(o) {
      return a.value.setBounds(o);
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
    setZIndex(o) {
      return a.value.setZIndex(o);
    }
  };
  return { options: s, methods: r };
};
k({
  name: "LImageOverlay",
  props: ct,
  setup(e, a) {
    const t = c(), l = c(!1), n = V(R), s = L(M), { options: r, methods: o } = Yt(
      e,
      t,
      a
    );
    return B(async () => {
      const { imageOverlay: i } = n ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        i(e.url, e.bounds, r)
      );
      const { listeners: u } = $(a.attrs);
      t.value.on(u), A(o, t.value, e), s({
        ...e,
        ...o,
        leafletObject: t.value
      }), l.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: l, leafletObject: t };
  },
  render() {
    return K(this.ready, this.$slots);
  }
});
k({
  props: je,
  setup(e, a) {
    const t = c(), l = c(!1), n = V(R), s = L(M), { methods: r } = Ae(e, t, a);
    return B(async () => {
      const { layerGroup: o } = n ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        o(void 0, e.options)
      );
      const { listeners: i } = $(a.attrs);
      t.value.on(i), A(r, t.value, e), s({
        ...e,
        ...r,
        leafletObject: t.value
      }), l.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: l, leafletObject: t };
  },
  render() {
    return K(this.ready, this.$slots);
  }
});
function dt(e, a, t) {
  var l, n, s;
  a === void 0 && (a = 50), t === void 0 && (t = {});
  var r = (l = t.isImmediate) != null && l, o = (n = t.callback) != null && n, i = t.maxWait, u = Date.now(), p = [];
  function f() {
    if (i !== void 0) {
      var b = Date.now() - u;
      if (b + a >= i)
        return i - b;
    }
    return a;
  }
  var x = function() {
    var b = [].slice.call(arguments), W = this;
    return new Promise(function(Y, I) {
      var O = r && s === void 0;
      if (s !== void 0 && clearTimeout(s), s = setTimeout(function() {
        if (s = void 0, u = Date.now(), !r) {
          var E = e.apply(W, b);
          o && o(E), p.forEach(function(H) {
            return (0, H.resolve)(E);
          }), p = [];
        }
      }, f()), O) {
        var D = e.apply(W, b);
        return o && o(D), Y(D);
      }
      p.push({ resolve: Y, reject: I });
    });
  };
  return x.cancel = function(b) {
    s !== void 0 && clearTimeout(s), p.forEach(function(W) {
      return (0, W.reject)(b);
    }), p = [];
  }, x;
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
}, Qt = k({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: De,
  setup(e, a) {
    const t = c(), l = Bt({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: n } = de(e), s = _(
      e,
      De,
      n
    ), { listeners: r, attrs: o } = $(a.attrs), i = be(M), u = be(Ce), p = be(ue), f = be(
      Ze
    );
    q(R, e.useGlobalLeaflet);
    const x = G(() => {
      const O = {};
      return e.noBlockingAnimations && (O.animate = !1), O;
    }), b = G(() => {
      const O = x.value;
      return e.padding && (O.padding = e.padding), e.paddingTopLeft && (O.paddingTopLeft = e.paddingTopLeft), e.paddingBottomRight && (O.paddingBottomRight = e.paddingBottomRight), O;
    }), W = {
      moveend: dt((O) => {
        l.leafletRef && (a.emit("update:zoom", l.leafletRef.getZoom()), a.emit("update:center", l.leafletRef.getCenter()), a.emit("update:bounds", l.leafletRef.getBounds()));
      }),
      overlayadd(O) {
        const D = l.layersInControl.find((E) => E.name === O.name);
        D && D.updateVisibleProp(!0);
      },
      overlayremove(O) {
        const D = l.layersInControl.find((E) => E.name === O.name);
        D && D.updateVisibleProp(!1);
      }
    };
    B(async () => {
      e.useGlobalLeaflet && (C.L = C.L || await import("./leaflet-src-BDi_6Owi.js").then((v) => v.l));
      const { map: O, CRS: D, Icon: E, latLngBounds: H, latLng: ne, stamp: U } = e.useGlobalLeaflet ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        s.beforeMapMount && await s.beforeMapMount();
      } catch (v) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${v.message}`
        );
      }
      await Dt(E);
      const ve = typeof s.crs == "string" ? D[s.crs] : s.crs;
      s.crs = ve || D.EPSG3857;
      const Q = {
        addLayer(v) {
          v.layerType !== void 0 && (l.layerControl === void 0 ? l.layersToAdd.push(v) : l.layersInControl.find(
            (T) => U(T.leafletObject) === U(v.leafletObject)
          ) || (l.layerControl.addLayer(v), l.layersInControl.push(v))), v.visible !== !1 && l.leafletRef.addLayer(v.leafletObject);
        },
        removeLayer(v) {
          v.layerType !== void 0 && (l.layerControl === void 0 ? l.layersToAdd = l.layersToAdd.filter(
            (T) => T.name !== v.name
          ) : (l.layerControl.removeLayer(v.leafletObject), l.layersInControl = l.layersInControl.filter(
            (T) => U(T.leafletObject) !== U(v.leafletObject)
          ))), l.leafletRef.removeLayer(v.leafletObject);
        },
        registerLayerControl(v) {
          l.layerControl = v, l.layersToAdd.forEach((T) => {
            l.layerControl.addLayer(T);
          }), l.layersToAdd = [], p(v);
        },
        registerControl(v) {
          l.leafletRef.addControl(v.leafletObject);
        },
        setZoom(v) {
          const T = l.leafletRef.getZoom();
          v !== T && l.leafletRef.setZoom(v, x.value);
        },
        setCrs(v) {
          const T = l.leafletRef.getBounds();
          l.leafletRef.options.crs = v, l.leafletRef.fitBounds(T, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(v) {
          l.leafletRef.fitBounds(v, b.value);
        },
        setBounds(v) {
          if (!v)
            return;
          const T = H(v);
          T.isValid() && !(l.lastSetBounds || l.leafletRef.getBounds()).equals(T, 0) && (l.lastSetBounds = T, l.leafletRef.fitBounds(T));
        },
        setCenter(v) {
          if (v == null)
            return;
          const T = ne(v), ye = l.lastSetCenter || l.leafletRef.getCenter();
          (ye.lat !== T.lat || ye.lng !== T.lng) && (l.lastSetCenter = T, l.leafletRef.panTo(T, x.value));
        }
      };
      Se(i, Q.addLayer), Se(u, Q.removeLayer), Se(p, Q.registerControl), Se(f, Q.registerLayerControl), l.leafletRef = P(O(t.value, s)), A(Q, l.leafletRef, e), ze(l.leafletRef, W), ze(l.leafletRef, r), l.ready = !0, j(() => a.emit("ready", l.leafletRef));
    }), ie(() => {
      We(W), l.leafletRef && (l.leafletRef.off(), l.leafletRef.remove());
    });
    const Y = G(() => l.leafletRef), I = G(() => l.ready);
    return { root: t, ready: I, leafletObject: Y, attrs: o };
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
}), Xt = ["Symbol(Comment)", "Symbol(Text)"], ea = ["LTooltip", "LPopup"], pt = {
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
}, ta = (e, a, t) => {
  const { options: l, methods: n } = pe(
    e,
    a,
    t
  ), s = _(
    e,
    pt,
    l
  ), r = {
    ...n,
    setDraggable(o) {
      a.value.dragging && (o ? a.value.dragging.enable() : a.value.dragging.disable());
    },
    latLngSync(o) {
      t.emit("update:latLng", o.latlng), t.emit("update:lat-lng", o.latlng);
    },
    setLatLng(o) {
      if (o != null && a.value) {
        const i = a.value.getLatLng();
        (!i || !i.equals(o)) && a.value.setLatLng(o);
      }
    }
  };
  return { options: s, methods: r };
}, aa = (e, a) => {
  const t = a.slots.default && a.slots.default();
  return t && t.length && t.some(la);
};
function la(e) {
  return !(Xt.includes(e.type.toString()) || ea.includes(e.type.name));
}
k({
  name: "LMarker",
  props: pt,
  setup(e, a) {
    const t = c(), l = c(!1), n = V(R), s = L(M);
    q(
      qe,
      () => {
        var u;
        return !!((u = t.value) != null && u.getElement());
      }
    ), q(Ge, (u) => {
      var p, f;
      const x = ee((p = t.value) == null ? void 0 : p.getElement) && ((f = t.value) == null ? void 0 : f.getElement());
      x && (x.innerHTML = u);
    }), q(
      Ke,
      (u) => {
        var p;
        return ((p = t.value) == null ? void 0 : p.setIcon) && t.value.setIcon(u);
      }
    );
    const { options: r, methods: o } = ta(e, t, a), i = {
      moveHandler: dt(o.latLngSync)
    };
    return B(async () => {
      const { marker: u, divIcon: p } = n ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      aa(r, a) && (r.icon = p({ className: "" })), t.value = P(u(e.latLng, r));
      const { listeners: f } = $(a.attrs);
      t.value.on(f), t.value.on("move", i.moveHandler), A(o, t.value, e), s({
        ...e,
        ...o,
        leafletObject: t.value
      }), l.value = !0, j(() => a.emit("ready", t.value));
    }), ie(() => We(i)), { ready: l, leafletObject: t };
  },
  render() {
    return K(this.ready, this.$slots);
  }
});
const Pe = {
  ...Be,
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
}, mt = (e, a, t) => {
  const { options: l, methods: n } = et(
    e,
    a,
    t
  ), s = _(
    e,
    Pe,
    l
  ), r = {
    ...n,
    setSmoothFactor(o) {
      a.value.setStyle({ smoothFactor: o });
    },
    setNoClip(o) {
      a.value.setStyle({ noClip: o });
    },
    addLatLng(o) {
      a.value.addLatLng(o);
    }
  };
  return { options: s, methods: r };
}, we = {
  ...Pe
}, vt = (e, a, t) => {
  const { options: l, methods: n } = mt(
    e,
    a,
    t
  ), s = _(
    e,
    we,
    l
  ), r = {
    ...n,
    toGeoJSON(o) {
      return a.value.toGeoJSON(o);
    }
  };
  return { options: s, methods: r };
};
k({
  name: "LPolygon",
  props: we,
  setup(e, a) {
    const t = c(), l = c(!1), n = V(R), s = L(M), { options: r, methods: o } = vt(e, t, a);
    return B(async () => {
      const { polygon: i } = n ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(i(e.latLngs, r));
      const { listeners: u } = $(a.attrs);
      t.value.on(u), A(o, t.value, e), s({
        ...e,
        ...o,
        leafletObject: t.value
      }), l.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: l, leafletObject: t };
  },
  render() {
    return K(this.ready, this.$slots);
  }
});
k({
  name: "LPolyline",
  props: Pe,
  setup(e, a) {
    const t = c(), l = c(!1), n = V(R), s = L(M), { options: r, methods: o } = mt(e, t, a);
    return B(async () => {
      const { polyline: i } = n ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        i(e.latLngs, r)
      );
      const { listeners: u } = $(a.attrs);
      t.value.on(u), A(o, t.value, e), s({
        ...e,
        ...o,
        leafletObject: t.value
      }), l.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: l, leafletObject: t };
  },
  render() {
    return K(this.ready, this.$slots);
  }
});
const yt = {
  ...ce,
  content: {
    type: String,
    default: null
  }
}, ft = (e, a) => {
  const { options: t, methods: l } = de(e), n = {
    ...l,
    setContent(s) {
      a.value && s !== null && s !== void 0 && a.value.setContent(s);
    }
  };
  return { options: t, methods: n };
}, ht = (e) => e.default ? te("div", { ref: "root" }, e.default()) : null, oa = {
  ...yt,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, na = (e, a) => {
  const { options: t, methods: l } = ft(e, a);
  return { options: t, methods: l };
}, sa = k({
  name: "LPopup",
  props: oa,
  setup(e, a) {
    const t = c(), l = c(null), n = V(R), s = L(He), r = L(Ye), { options: o, methods: i } = na(e, t);
    return B(async () => {
      const { popup: u } = n ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(u(o)), e.latLng !== void 0 && t.value.setLatLng(e.latLng), A(i, t.value, e);
      const { listeners: p } = $(a.attrs);
      t.value.on(p), t.value.setContent(e.content || l.value || ""), s(t.value), j(() => a.emit("ready", t.value));
    }), ie(() => {
      r();
    }), { root: l, leafletObject: t };
  },
  render() {
    return ht(this.$slots);
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
}, ra = (e, a, t) => {
  const { options: l, methods: n } = vt(
    e,
    a,
    t
  ), s = _(
    e,
    gt,
    l
  ), r = {
    ...n,
    setBounds(o) {
      a.value.setBounds(o);
    },
    setLatLngs(o) {
      a.value.setBounds(o);
    }
  };
  return { options: s, methods: r };
};
k({
  name: "LRectangle",
  props: gt,
  setup(e, a) {
    const t = c(), l = c(!1), n = V(R), s = L(M), { options: r, methods: o } = ra(e, t, a);
    return B(async () => {
      const { rectangle: i, latLngBounds: u } = n ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js"), p = e.bounds ? u(e.bounds) : u(e.latLngs || []);
      t.value = P(i(p, r));
      const { listeners: f } = $(a.attrs);
      t.value.on(f), A(o, t.value, e), s({
        ...e,
        ...o,
        leafletObject: t.value
      }), l.value = !0, j(() => a.emit("ready", t.value));
    }), { ready: l, leafletObject: t };
  },
  render() {
    return K(this.ready, this.$slots);
  }
});
const Ne = {
  ...Re,
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
}, bt = (e, a, t) => {
  const { options: l, methods: n } = ut(e, a, t), s = _(
    e,
    Ne,
    l
  ), r = {
    ...n
  };
  return { options: s, methods: r };
}, ia = k({
  props: Ne,
  setup(e, a) {
    const t = c(), l = V(R), n = L(M), { options: s, methods: r } = bt(e, t, a);
    return B(async () => {
      const { tileLayer: o } = l ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(o(e.url, s));
      const { listeners: i } = $(a.attrs);
      t.value.on(i), A(r, t.value, e), n({
        ...e,
        ...r,
        leafletObject: t.value
      }), j(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
}), ua = {
  ...yt
}, ca = (e, a) => {
  const { options: t, methods: l } = ft(e, a), n = L(Qe);
  return ie(() => {
    n();
  }), { options: t, methods: l };
};
k({
  name: "LTooltip",
  props: ua,
  setup(e, a) {
    const t = c(), l = c(null), n = V(R), s = L(Je), { options: r, methods: o } = ca(e, t);
    return B(async () => {
      const { tooltip: i } = n ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(i(r)), A(o, t.value, e);
      const { listeners: u } = $(a.attrs);
      t.value.on(u), t.value.setContent(e.content || l.value || ""), s(t.value), j(() => a.emit("ready", t.value));
    }), { root: l, leafletObject: t };
  },
  render() {
    return ht(this.$slots);
  }
});
const St = {
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
}, da = (e, a, t) => {
  const { options: l, methods: n } = bt(e, a, t);
  return {
    options: _(
      e,
      St,
      l
    ),
    methods: {
      ...n
    }
  };
};
k({
  props: St,
  setup(e, a) {
    const t = c(), l = V(R), n = L(M), { options: s, methods: r } = da(
      e,
      t,
      a
    );
    return B(async () => {
      const { tileLayer: o } = l ? C.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      t.value = P(
        o.wms(e.url, s)
      );
      const { listeners: i } = $(a.attrs);
      t.value.on(i), A(r, t.value, e), n({
        ...e,
        ...r,
        leafletObject: t.value
      }), j(() => a.emit("ready", t.value));
    }), { leafletObject: t };
  },
  render() {
    return null;
  }
});
const pa = { class: "valhalla-preview" }, ma = { class: "sidebar" }, va = { class: "search-section" }, ya = { class: "search-box" }, fa = {
  key: 0,
  class: "search-results"
}, ha = ["onClick"], ga = { class: "controls-row" }, ba = { class: "waypoints-list" }, Sa = { class: "waypoints-header" }, La = { class: "section-title" }, Oa = { class: "hint" }, wa = ["onDragstart", "onDragover"], Ca = { class: "waypoint-grip" }, ja = { class: "waypoint-info" }, ka = { class: "waypoint-role" }, Ta = { class: "waypoint-name" }, _a = { class: "waypoint-actions" }, Ba = {
  key: 0,
  class: "no-waypoints"
}, Va = {
  key: 0,
  class: "action-buttons"
}, Aa = {
  key: 1,
  class: "route-summary"
}, Ra = { class: "summary-header" }, Pa = { class: "summary-stats" }, Na = { class: "stat" }, xa = { class: "stat" }, za = { class: "stat" }, Ia = {
  key: 0,
  class: "maneuvers-list"
}, Da = { class: "maneuver-index" }, $a = { class: "maneuver-text" }, Ma = { class: "maneuver-dist" }, Ea = { class: "map-container" }, $e = "SET_WAYPOINTS", Fa = "OPTIMIZE_ROUTE", Ua = /* @__PURE__ */ k({
  __name: "Preview",
  props: {
    dataSource: {}
  },
  setup(e) {
    const a = e, { t } = Ue("datasourceValhalla"), l = c(null), n = At(null), s = c(a.dataSource), { update: r } = xt(a.dataSource.type, s, n), o = c([]), i = c(a.dataSource.config?.costing || "auto"), u = c(""), p = c([]), f = c(!1);
    let x = null;
    const b = c(null), W = c([50.93, 11.59]), Y = c(10), I = c(null), O = c(!1), D = G(
      () => ["auto", "bicycle", "pedestrian", "truck", "bus", "motor_scooter", "motorcycle"].map((m) => ({
        // i18n-keys: datasourceValhalla:Valhalla.costing.*
        text: t(`Valhalla.costing.${m}`),
        value: m
      }))
    ), E = G(() => l.value?.geojson?.features ? l.value.geojson.features.filter((m) => m.geometry?.type === "LineString") : []), H = G(() => E.value.length === 0 ? null : { type: "FeatureCollection", features: E.value }), ne = () => ({ color: "#c45e00", weight: 5, opacity: 0.8 });
    function U(m) {
      return m === 0 ? "#4caf50" : m === o.value.length - 1 ? "#f44336" : "#2196f3";
    }
    function ve(m) {
      return m === 0 ? t("Valhalla.start") : m === o.value.length - 1 ? t("Valhalla.end") : t("Valhalla.stop", { n: m });
    }
    Oe(n, async () => {
      n.value && (l.value = await n.value.getData("object"), n.value.subscribe(async () => {
        l.value = await n.value.getData("object");
      }));
    }, { deep: !0 }), Oe(a.dataSource, () => r(), { deep: !0 });
    async function Q() {
      const m = u.value.trim();
      if (m.length < 3) {
        p.value = [];
        return;
      }
      f.value = !0;
      try {
        const y = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(m)}&limit=5&addressdetails=1`
        );
        p.value = await y.json();
      } catch {
        p.value = [];
      } finally {
        f.value = !1;
      }
    }
    function v() {
      x && clearTimeout(x), x = setTimeout(Q, 400);
    }
    function T(m) {
      const y = {
        lat: parseFloat(m.lat),
        lon: parseFloat(m.lon),
        name: m.display_name.split(",").slice(0, 2).join(", ")
      };
      o.value.push(y), u.value = "", p.value = [], ke();
    }
    function ye(m) {
      const { lat: y, lng: h } = m.latlng;
      o.value.push({ lat: y, lon: h, name: `${y.toFixed(4)}, ${h.toFixed(4)}` });
    }
    function Ot(m) {
      o.value.splice(m, 1);
    }
    function wt() {
      o.value = [], l.value = null, n.value && n.value.callEvent($e, { waypoints: [], costing: i.value });
    }
    function xe(m, y) {
      if (y < 0 || y >= o.value.length) return;
      const h = o.value.splice(m, 1)[0];
      o.value.splice(y, 0, h);
    }
    async function Ct() {
      if (!(!n.value || o.value.length < 2)) {
        O.value = !0;
        try {
          await n.value.callEvent($e, {
            waypoints: o.value.map((m) => ({ lat: m.lat, lon: m.lon, name: m.name })),
            costing: i.value
          }), ke();
        } finally {
          O.value = !1;
        }
      }
    }
    async function jt() {
      if (!(!n.value || o.value.length < 3)) {
        O.value = !0;
        try {
          await n.value.callEvent(Fa, {
            waypoints: o.value.map((y) => ({ lat: y.lat, lon: y.lon, name: y.name })),
            costing: i.value
          });
          const m = await n.value.getData("object");
          m?.waypoints && (o.value = m.waypoints.map((y) => ({
            lat: y.lat,
            lon: y.lon,
            name: y.name || `${y.lat.toFixed(4)}, ${y.lon.toFixed(4)}`
          }))), ke();
        } finally {
          O.value = !1;
        }
      }
    }
    function ke() {
      o.value.length !== 0 && j(() => {
        const m = b.value?.leafletObject;
        if (m)
          if (o.value.length === 1)
            m.setView([o.value[0].lat, o.value[0].lon], 14);
          else {
            const y = o.value.map((S) => S.lat), h = o.value.map((S) => S.lon);
            m.fitBounds(
              [[Math.min(...y), Math.min(...h)], [Math.max(...y), Math.max(...h)]],
              { padding: [40, 40] }
            );
          }
      });
    }
    function kt(m) {
      I.value = m;
    }
    function Tt(m, y) {
      if (m.preventDefault(), I.value === null || I.value === y) return;
      const h = I.value, S = o.value.splice(h, 1)[0];
      o.value.splice(y, 0, S), I.value = y;
    }
    function _t() {
      I.value = null;
    }
    const Te = G(() => l.value?.legs ? l.value.legs.flatMap((m) => m.maneuvers || []) : []);
    return (m, y) => (z(), F("div", pa, [
      g("div", ma, [
        g("div", va, [
          g("div", ya, [
            w(d(Fe), {
              modelValue: u.value,
              "onUpdate:modelValue": y[0] || (y[0] = (h) => u.value = h),
              placeholder: d(t)("Valhalla.search"),
              class: "search-input",
              onInput: v,
              onKeydown: Rt(Q, ["enter"])
            }, null, 8, ["modelValue", "placeholder"]),
            p.value.length > 0 ? (z(), F("div", fa, [
              (z(!0), F(re, null, fe(p.value, (h) => (z(), F("div", {
                key: h.place_id,
                class: "search-result-item",
                onClick: (S) => T(h)
              }, [
                w(d(Z), {
                  name: "location_on",
                  size: "sm",
                  tone: "color-accent"
                }),
                g("span", null, N(h.display_name), 1)
              ], 8, ha))), 128))
            ])) : X("", !0)
          ])
        ]),
        g("div", ga, [
          w(d(Le), {
            modelValue: i.value,
            "onUpdate:modelValue": y[1] || (y[1] = (h) => i.value = h),
            options: D.value,
            "label-key": "text",
            "value-key": "value",
            label: d(t)("Valhalla.mode"),
            class: "costing-select"
          }, null, 8, ["modelValue", "options", "label"]),
          o.value.length > 0 ? (z(), he(d(ae), {
            key: 0,
            size: "sm",
            onClick: wt
          }, {
            default: J(() => [
              w(d(Z), {
                name: "delete_sweep",
                size: "sm"
              }),
              ge(N(d(t)("Valhalla.clearAll")), 1)
            ]),
            _: 1
          })) : X("", !0)
        ]),
        g("div", ba, [
          g("div", Sa, [
            g("span", La, N(d(t)("Valhalla.waypoints", { count: o.value.length })), 1),
            g("span", Oa, N(d(t)("Valhalla.clickHint")), 1)
          ]),
          (z(!0), F(re, null, fe(o.value, (h, S) => (z(), F("div", {
            key: S,
            class: Pt(["waypoint-item", { dragging: I.value === S }]),
            draggable: "true",
            onDragstart: (se) => kt(S),
            onDragover: (se) => Tt(se, S),
            onDragend: _t
          }, [
            g("div", Ca, [
              w(d(Z), {
                name: "drag_indicator",
                size: "sm",
                tone: "color-dim"
              })
            ]),
            g("div", {
              class: "waypoint-marker",
              style: Nt({ backgroundColor: U(S) })
            }, N(S + 1), 5),
            g("div", ja, [
              g("span", ka, N(ve(S)), 1),
              g("span", Ta, N(h.name || `${h.lat.toFixed(4)}, ${h.lon.toFixed(4)}`), 1)
            ]),
            g("div", _a, [
              w(d(ae), {
                intent: "quiet",
                size: "sm",
                title: d(t)("Valhalla.up"),
                disabled: S === 0,
                onClick: (se) => xe(S, S - 1)
              }, {
                default: J(() => [
                  w(d(Z), {
                    name: "arrow_upward",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["title", "disabled", "onClick"]),
              w(d(ae), {
                intent: "quiet",
                size: "sm",
                title: d(t)("Valhalla.down"),
                disabled: S === o.value.length - 1,
                onClick: (se) => xe(S, S + 1)
              }, {
                default: J(() => [
                  w(d(Z), {
                    name: "arrow_downward",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["title", "disabled", "onClick"]),
              w(d(ae), {
                intent: "danger",
                size: "sm",
                title: d(t)("Valhalla.remove"),
                onClick: (se) => Ot(S)
              }, {
                default: J(() => [
                  w(d(Z), {
                    name: "close",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["title", "onClick"])
            ])
          ], 42, wa))), 128)),
          o.value.length === 0 ? (z(), F("div", Ba, N(d(t)("Valhalla.none")), 1)) : X("", !0)
        ]),
        o.value.length >= 2 ? (z(), F("div", Va, [
          w(d(ae), {
            intent: "primary",
            busy: O.value,
            onClick: Ct
          }, {
            default: J(() => [
              w(d(Z), {
                name: "route",
                size: "sm"
              }),
              ge(N(d(t)("Valhalla.calculate")), 1)
            ]),
            _: 1
          }, 8, ["busy"]),
          o.value.length >= 3 ? (z(), he(d(ae), {
            key: 0,
            busy: O.value,
            onClick: jt
          }, {
            default: J(() => [
              w(d(Z), {
                name: "auto_fix_high",
                size: "sm"
              }),
              ge(N(d(t)("Valhalla.optimize")), 1)
            ]),
            _: 1
          }, 8, ["busy"])) : X("", !0)
        ])) : X("", !0),
        l.value?.summary ? (z(), F("div", Aa, [
          g("div", Ra, N(d(t)("Valhalla.route")), 1),
          g("div", Pa, [
            g("div", Na, [
              w(d(Z), {
                name: "straighten",
                size: "sm"
              }),
              g("span", null, N(l.value.summary.distance_km.toFixed(1)) + " km", 1)
            ]),
            g("div", xa, [
              w(d(Z), {
                name: "schedule",
                size: "sm"
              }),
              g("span", null, N(l.value.summary.duration_min) + " min", 1)
            ]),
            g("div", za, [
              w(d(Z), {
                name: "turn_right",
                size: "sm"
              }),
              g("span", null, N(d(t)("Valhalla.maneuvers", { count: Te.value.length })), 1)
            ])
          ]),
          Te.value.length > 0 ? (z(), F("div", Ia, [
            (z(!0), F(re, null, fe(Te.value, (h, S) => (z(), F("div", {
              key: S,
              class: "maneuver-item"
            }, [
              g("span", Da, N(S + 1) + ".", 1),
              g("span", $a, N(h.instruction), 1),
              g("span", Ma, N(h.length.toFixed(1)) + " km", 1)
            ]))), 128))
          ])) : X("", !0)
        ])) : X("", !0)
      ]),
      g("div", Ea, [
        w(d(Qt), {
          ref_key: "mapRef",
          ref: b,
          center: W.value,
          zoom: Y.value,
          style: { height: "100%", width: "100%" },
          onClick: ye
        }, {
          default: J(() => [
            w(d(ia), {
              url: "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png",
              options: { maxNativeZoom: 19, maxZoom: 21 }
            }),
            H.value ? (z(), he(d(Ht), {
              key: 0,
              geojson: H.value,
              "options-style": ne
            }, null, 8, ["geojson"])) : X("", !0),
            (z(!0), F(re, null, fe(o.value, (h, S) => (z(), he(d(Et), {
              key: "wp-" + S,
              "lat-lng": [h.lat, h.lon],
              radius: 10,
              "fill-color": U(S),
              color: "#fff",
              weight: 3,
              "fill-opacity": 1
            }, {
              default: J(() => [
                w(d(sa), null, {
                  default: J(() => [
                    g("strong", null, N(ve(S)), 1),
                    y[2] || (y[2] = g("br", null, null, -1)),
                    ge(" " + N(h.name || `${h.lat.toFixed(4)}, ${h.lon.toFixed(4)}`), 1)
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
}), Wa = (e, a) => {
  const t = e.__vccOpts || e;
  for (const [l, n] of a)
    t[l] = n;
  return t;
}, Za = /* @__PURE__ */ Wa(Ua, [["__scopeId", "data-v-58f9e834"]]), qa = /* @__PURE__ */ k({
  __name: "Settings",
  props: {
    config: {},
    connections: {},
    dataSources: {}
  },
  setup(e) {
    const { t: a } = Ue("datasourceValhalla"), t = G(
      () => e.connections.filter((s) => s.type === "rest")
    ), l = G(
      () => ["auto", "bicycle", "pedestrian", "truck", "bus", "motor_scooter", "motorcycle"].map((s) => ({
        text: a(`Valhalla.costing.${s}`),
        value: s
      }))
    ), n = G(() => [
      { text: a("Valhalla.units.kilometers"), value: "kilometers" },
      { text: a("Valhalla.units.miles"), value: "miles" }
    ]);
    return e.config.costing || (e.config.costing = "auto"), e.config.units || (e.config.units = "kilometers"), e.config.language || (e.config.language = "de-DE"), (s, r) => (z(), F(re, null, [
      w(d(Le), {
        modelValue: e.config.connection,
        "onUpdate:modelValue": r[0] || (r[0] = (o) => e.config.connection = o),
        label: d(a)("Valhalla.connection"),
        options: t.value,
        "label-key": "name",
        "value-key": "uid"
      }, null, 8, ["modelValue", "label", "options"]),
      w(d(Le), {
        modelValue: e.config.costing,
        "onUpdate:modelValue": r[1] || (r[1] = (o) => e.config.costing = o),
        label: d(a)("Valhalla.defaultCosting"),
        options: l.value,
        "label-key": "text",
        "value-key": "value"
      }, null, 8, ["modelValue", "label", "options"]),
      w(d(Le), {
        modelValue: e.config.units,
        "onUpdate:modelValue": r[2] || (r[2] = (o) => e.config.units = o),
        label: d(a)("Valhalla.units.label"),
        options: n.value,
        "label-key": "text",
        "value-key": "value"
      }, null, 8, ["modelValue", "label", "options"]),
      w(d(Fe), {
        modelValue: e.config.language,
        "onUpdate:modelValue": r[3] || (r[3] = (o) => e.config.language = o),
        label: d(a)("Valhalla.language")
      }, null, 8, ["modelValue", "label"])
    ], 64));
  }
}), Ga = { costing: { auto: "Auto", bicycle: "Fahrrad", pedestrian: "Fußgänger", truck: "LKW", bus: "Bus", motor_scooter: "Motorroller", motorcycle: "Motorrad" }, start: "Start", end: "Ziel", stop: "Stopp {{n}}", search: "Adresse suchen…", mode: "Modus", clearAll: "Alle löschen", waypoints: "Wegpunkte ({{count}})", clickHint: "Klick auf Karte = Wegpunkt hinzufügen", up: "Nach oben", down: "Nach unten", remove: "Entfernen", none: "Noch keine Wegpunkte. Klicke auf die Karte oder suche eine Adresse.", calculate: "Route berechnen", optimize: "Route optimieren", route: "Route", maneuvers: "{{count}} Manöver", connection: "Valhalla-Verbindung", defaultCosting: "Standard-Fortbewegung", units: { label: "Einheiten", kilometers: "Kilometer", miles: "Meilen" }, language: "Sprache der Wegbeschreibung (z. B. de-DE)" }, Ka = {
  Valhalla: Ga
}, Ha = { costing: { auto: "Car", bicycle: "Bicycle", pedestrian: "Pedestrian", truck: "Truck", bus: "Bus", motor_scooter: "Motor scooter", motorcycle: "Motorcycle" }, start: "Start", end: "Destination", stop: "Stop {{n}}", search: "Search address…", mode: "Mode", clearAll: "Clear all", waypoints: "Waypoints ({{count}})", clickHint: "Click on the map = add waypoint", up: "Move up", down: "Move down", remove: "Remove", none: "No waypoints yet. Click on the map or search for an address.", calculate: "Calculate route", optimize: "Optimise route", route: "Route", maneuvers: "{{count}} manoeuvres", connection: "Valhalla connection", defaultCosting: "Default mode of travel", units: { label: "Units", kilometers: "Kilometres", miles: "Miles" }, language: "Language of the directions (e.g. de-DE)" }, Ja = {
  Valhalla: Ha
};
var Ya = Object.getOwnPropertyDescriptor, Qa = (e, a, t, l) => {
  for (var n = l > 1 ? void 0 : l ? Ya(a, t) : a, s = e.length - 1, r; s >= 0; s--)
    (r = e[s]) && (n = r(n) || n);
  return n;
};
const Lt = "datasourceValhalla";
let Me = class {
  namespace = Lt;
  resources = {
    de: Ka,
    en: Ja
  };
};
Me = Qa([
  zt({
    service: ["Translations"],
    properties: { "i18n.namespace": Lt }
  })
], Me);
const Xa = Symbol.for("ValhallaStoreFactory"), el = Symbol.for("ValhallaPreview"), tl = Symbol.for("ValhallaSettings");
function rl({ services: e }) {
  e.register("ValhallaPreview", Za), e.register("ValhallaSettings", qa), e.getRequired(Ee).registerDatasourceType("valhalla", {
    icon: "route",
    connections: ["rest"],
    Store: Xa,
    Preview: el,
    Settings: tl
  });
}
function il({ services: e }) {
  e.getRequired(Ee).unregisterDatasourceType("valhalla"), e.unregister("ValhallaPreview"), e.unregister("ValhallaSettings");
}
export {
  Me as DatasourceValhallaTranslations,
  rl as activate,
  il as deactivate
};
