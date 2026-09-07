(function(){var i="ui.vue.widget.map",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:\"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:\"\"}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}.pin{&[data-v-dc572ab0]{width:45px;height:45px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #00000008}&.round[data-v-dc572ab0]{border-radius:50%}&.solid{.inner[data-v-dc572ab0]{background:transparent}}&.contain{&[data-v-dc572ab0]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.inner[data-v-dc572ab0]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}}.datapoint[data-v-dc572ab0]{transform:rotate(45deg);position:absolute;top:50px;left:0;margin:0}.observation-slot[data-v-dc572ab0]{transform:rotate(45deg);position:absolute;top:0;left:0}&.marker{&[data-v-dc572ab0]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}}.inner[data-v-dc572ab0]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}}.image-marker[data-v-dc572ab0]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.text-container[data-v-3a425ddc]{display:flex;flex-direction:column;width:100%;height:100%;gap:1rem;align-items:stretch}.pin{&[data-v-3a425ddc]{width:45px;height:45px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #0000005c}&.round[data-v-3a425ddc]{border-radius:50%}&.contain{&[data-v-3a425ddc]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.inner[data-v-3a425ddc]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}}.datapoint[data-v-3a425ddc]{transform:rotate(45deg);position:absolute;top:50px;left:0;margin:0}&.marker{&[data-v-3a425ddc]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}}.inner[data-v-3a425ddc]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}}.component[data-v-3a425ddc]{overflow:hidden}.cmap_container[data-v-3a425ddc]{width:100%;height:100%;position:relative}.image-marker[data-v-3a425ddc]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.row{align-items:flex-start;display:flex;flex:1 1 auto;flex-wrap:wrap;min-width:0;flex-direction:row}.table-inline__cell{padding:0}#proptableConditions{.va-data-table__table-td{padding:0;margin:7px 0}}.pmap_container[data-v-c72cb17a]{width:100%;min-height:250px}.pin{&[data-v-c2a66398]{width:45px;height:45px;border-radius:50% 50% 50% 0;background:var(--v62137916);transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #00000008}&.round[data-v-c2a66398]{border-radius:50%}&.solid{.inner[data-v-c2a66398]{background:transparent}}&.contain{&[data-v-c2a66398]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.inner[data-v-c2a66398]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}}&.marker{&[data-v-c2a66398]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;background:var(--v62137916);transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}}.inner[data-v-c2a66398]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}}.flex[data-v-c2a66398]{display:flex}.image-marker[data-v-c2a66398]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.placeholder[data-v-c2a66398]{background:#ccc;width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:10px;border:1px dashed #999}.pmap_container[data-v-77cbf15c]{width:100%;height:250px}.settings-container[data-v-65a760a2]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-65a760a2]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-65a760a2]{font-family:Material Symbols Outlined sans-serif;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-65a760a2]:hover{transform:scale(1.1)}.active-icon[data-v-65a760a2]{border:2px solid rgb(0,121,0)}.slider[data-v-65a760a2]{padding:0 10px}.auto-update-settings[data-v-bf0c06f4]{padding:1rem;display:flex;flex-direction:column;gap:1.5rem}.auto-update-settings h3[data-v-bf0c06f4]{margin:0;color:var(--va-text-primary);font-size:1.1rem;font-weight:600}.refresh-setting[data-v-bf0c06f4]{display:flex;flex-direction:column;gap:1rem}.refresh-setting label[data-v-bf0c06f4]{font-weight:500;color:var(--va-text-primary);font-size:.9rem}.refresh-slider[data-v-bf0c06f4]{margin:.5rem 0}.slider-labels[data-v-bf0c06f4]{display:flex;justify-content:space-between;font-size:.8rem;color:var(--va-text-secondary);margin-top:.5rem}.refresh-info[data-v-bf0c06f4]{background:var(--va-background-secondary);border:1px solid var(--va-background-border);border-radius:6px;padding:1rem;display:flex;flex-direction:column;gap:.5rem}.info-item[data-v-bf0c06f4]{display:flex;justify-content:space-between;align-items:center}.info-item .label[data-v-bf0c06f4]{font-weight:500;color:var(--va-text-secondary);font-size:.9rem}.info-item .value[data-v-bf0c06f4]{font-weight:600;color:var(--va-text-primary);font-size:.9rem}.full[data-v-c5967ed8]{position:relative}.tree_detail[data-v-c5967ed8]{display:flex;flex-direction:row;align-items:flex-start;align-content:flex-start;gap:5px}.tree[data-v-c5967ed8]{width:300px;max-height:500px;overflow-y:auto}.detail[data-v-c5967ed8]{border-left:1px solid #ccc}.menuitem{&[data-v-c5967ed8]{display:grid;grid-template-columns:25px 35px 1fr min-content;align-items:center;padding-top:2px;padding-bottom:2px;padding-left:5px;cursor:pointer}.checked[data-v-c5967ed8]{margin-top:-5px}&.active[data-v-c5967ed8]{background-color:#e5e7eb}.options[data-v-c5967ed8]{display:flex;flex-direction:row}}.childs[data-v-c5967ed8]{grid-column:span 4;padding-left:15px}.content{&[data-v-c5967ed8]{width:846px;height:500px;padding:0 0 0 15px}.scroller[data-v-c5967ed8]{min-height:100%}&.center[data-v-c5967ed8]{display:flex;flex-direction:column;align-content:center;justify-content:center;align-items:center;color:#8f8f8f}}.underline[data-v-c5967ed8]{cursor:pointer}.blue[data-v-c5967ed8]{color:#133370}.rowlayout[data-v-c5967ed8]{display:grid;flex-direction:row;flex-wrap:nowrap;width:100%;grid-template-columns:66% 1fr;gap:15px}.settings-container[data-v-5f2599d9]{display:flex;flex-direction:column;gap:1rem;padding:15px}.hint-text[data-v-5f2599d9]{font-size:12px;color:var(--va-text-secondary);margin:-8px 0 0;padding-left:4px}.list-group-item{&[data-v-5f2599d9]{display:flex;flex-direction:column;align-items:flex-start;cursor:move;padding:var(--va-tree-node-padding);list-style:none}.row[data-v-5f2599d9]{display:flex;flex-direction:row;flex-wrap:nowrap;gap:6px;align-items:center}&[data-v-5f2599d9]:hover{background-color:#d6dde3;border-radius:var(--va-tree-node-border-radius)}}.empty[data-v-5f2599d9]{display:block;width:100%;vertical-align:middle;text-align:center;font-variant:small-caps;font-style:italic;color:#5d5d5d}.bottomframe[data-v-5f2599d9]{border-bottom:1px solid var(--va-background-border)}#header-va-4[data-v-5f2599d9]{padding:6px 12px}.options[data-v-5f2599d9]{padding-top:6px;padding-left:12px;border-top:1px dotted #00000047}.row.nhidden[data-v-5f2599d9]{display:none}.dragIcon[data-v-5f2599d9]{cursor:n-resize}.button{margin-top:35px}.flip-list-move{transition:transform .5s}.no-move{transition:transform 0s}.ghost{opacity:.5;background:#c8ebfb}.list-group{min-height:20px}.list-group-item{cursor:move}.list-group-item i{cursor:pointer}.nhidden,.row.nhidden{display:none}.va-tree-node-root{&:hover{cursor:pointer;.nhidden{display:inline}.nsee{display:none}}}.list-group-item{&:hover{cursor:pointer;.nhidden{display:flex}}}.sliderPopOver{padding:2px 7px;.va-slider__handler{left:51%;background-color:#fff!important;border-color:#99a9c8!important;border-radius:6px!important;border-width:1px!important;width:11px;height:20px;.va-slider__handler__dot--focus{margin-top:4px}}}.mt4{margin-top:4px}.datapoint-wrapper[data-v-2eb55b7f]{position:relative;display:inline-block}.tlc[data-v-2eb55b7f]{position:absolute;border:4px solid #f8f6f6;background:#6a6a6a;padding:3px;border-radius:12px;text-wrap:nowrap;top:100%;left:50%;transform:translate(-50%) rotate(-90deg);margin-top:5px;box-shadow:-3px 5px 6px #1919192b;font-size:12px;white-space:nowrap}.settings-container[data-v-ca2b9f21]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-ca2b9f21]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-ca2b9f21]{font-family:Material Symbols Outlined sans-serif;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-ca2b9f21]:hover{transform:scale(1.1)}.active-icon[data-v-ca2b9f21]{border:2px solid rgb(0,121,0)}.slider[data-v-ca2b9f21]{padding:0 10px}.datapoint-wrapper[data-v-a78b518d]{position:relative;display:inline-block}.datapoint[data-v-a78b518d]{display:inline-block;text-wrap:nowrap;position:absolute;border:1px solid #ccc;background:#fff;padding:4px;top:100%;left:50%;transform:translate(-50%);margin-top:5px;border-radius:21px;white-space:nowrap}.settings-container[data-v-39ec496f]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-39ec496f]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-39ec496f]{font-family:Material Symbols Outlined sans-serif;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-39ec496f]:hover{transform:scale(1.1)}.active-icon[data-v-39ec496f]{border:2px solid rgb(0,121,0)}.slider[data-v-39ec496f]{padding:0 10px}\n";})();
import { PayloadImpl as El, WidgetActionInterfaceImpl as TE, EVENT_ACTIONS_REGISTRY as wE, EVENT_REGISTRY_ID as SE, EVENT_ACTIONS_REGISTRY_ID as AE } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as CE, deactivate as bE, component as OE, inject as Df, initTsmRuntime as LE } from "@eclipse-daanse/tsm";
import { defineComponent as st, h as Ns, ref as pe, reactive as xo, provide as Yr, computed as Yn, onMounted as qt, markRaw as Rn, nextTick as Xt, onBeforeUnmount as Tl, inject as Ot, watch as ki, onUnmounted as wl, render as IE, createElementBlock as ie, openBlock as V, Fragment as Re, renderList as Yt, createBlock as Ze, createCommentVNode as Ge, unref as Oe, renderSlot as el, normalizeClass as as, normalizeStyle as fa, createElementVNode as ue, toDisplayString as yt, withCtx as Ae, createVNode as le, createTextVNode as Rt, resolveDynamicComponent as Sh, mergeModels as Rh, toRefs as Sl, useModel as _r, toRaw as Qa, resolveComponent as ut, TransitionGroup as NE, useCssVars as DE, mergeProps as xu, isRef as Ep, shallowRef as Rf, watchEffect as RE, withDirectives as Pf, vModelText as xf, getCurrentInstance as PE, withModifiers as Ff } from "vue";
import { FILTER as oa, UPDATE_MQTT_SUBSCRIPTIONS as Mf, MQTT_UNSUBSCRIBE_ALL as Bf } from "org.eclipse.daanse.board.app.lib.datasource.ogcsta";
import { VariableWrapper as oh, useDatasourceRepository as xE } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as Os } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { IconWidget as wp, IconWidgetSettings as FE } from "org.eclipse.daanse.board.app.ui.vue.widget.icon";
import { BasicEObject as gr, createBasicEList as Vu, createContainmentEList as os, BasicEFactory as ME, BasicEPackage as BE, EPackageRegistry as Sp, BasicEClass as Zn, BasicEAttribute as he, BasicEReference as Xn, getEcorePackage as fe } from "@emfts/core";
import { loggerFactory as GE } from "org.eclipse.daanse.board.app.lib.logger";
import { useRoute as kE } from "vue-router";
import { WIDGET_SERVICE_ID as UE } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Tp } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
function VE(o, i) {
  for (var n = 0; n < i.length; n++) {
    const l = i[n];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const d in l)
        if (d !== "default" && !(d in o)) {
          const p = Object.getOwnPropertyDescriptor(l, d);
          p && Object.defineProperty(o, d, p.get ? p : {
            enumerable: !0,
            get: () => l[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
const zE = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M60%2020C45.088%2020%2033%2031.588%2033%2045.88C33%2065.16%2060%20100%2060%20100C60%20100%2087%2065.16%2087%2045.88C87%2031.588%2074.912%2020%2060%2020ZM60%2056.2C54.036%2056.2%2049.2%2051.484%2049.2%2045.68C49.2%2039.876%2054.036%2035.16%2060%2035.16C65.964%2035.16%2070.8%2039.876%2070.8%2045.68C70.8%2051.484%2065.964%2056.2%2060%2056.2Z'%20fill='%23606060'/%3e%3c/svg%3e", Gf = (o, i) => {
  for (const n of Object.keys(i))
    o.on(n, i[n]);
}, Ap = (o) => {
  for (const i of Object.keys(o)) {
    const n = o[i];
    n && Js(n.cancel) && n.cancel();
  }
}, WE = (o) => !o || typeof o.charAt != "function" ? o : o.charAt(0).toUpperCase() + o.slice(1), Js = (o) => typeof o == "function", wn = (o, i, n) => {
  for (const l in n) {
    const d = "set" + WE(l);
    o[d] ? ki(
      () => n[l],
      (p, _) => {
        o[d](p, _);
      }
    ) : i[d] && ki(
      () => n[l],
      (p) => {
        i[d](p);
      }
    );
  }
}, pn = (o, i, n = {}) => {
  const l = { ...n };
  for (const d in o) {
    const p = i[d], _ = o[d];
    p && (p && p.custom === !0 || _ !== void 0 && (l[d] = _));
  }
  return l;
}, hi = (o) => {
  const i = {}, n = {};
  for (const l in o)
    if (l.startsWith("on") && !l.startsWith("onUpdate") && l !== "onReady") {
      const d = l.slice(2).toLocaleLowerCase();
      i[d] = o[l];
    } else
      n[l] = o[l];
  return { listeners: i, attrs: n };
}, ZE = async (o) => {
  const i = await Promise.all([
    import("./marker-icon-2x-DVSLMKfE.js"),
    import("./marker-icon-DbhCZIpd.js"),
    import("./marker-shadow-ZZvxUwqf.js")
  ]);
  delete o.Default.prototype._getIconUrl, o.Default.mergeOptions({
    iconRetinaUrl: i[0].default,
    iconUrl: i[1].default,
    shadowUrl: i[2].default
  });
}, Au = (o) => {
  const i = pe(
    (...l) => console.warn(`Method ${o} has been invoked without being replaced`)
  ), n = (...l) => i.value(...l);
  return n.wrapped = i, Yr(o, n), n;
}, Cu = (o, i) => o.wrapped.value = i, an = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, kt = (o) => {
  const i = Ot(o);
  if (i === void 0)
    throw new Error(
      `Attempt to inject ${o.description} before it was provided.`
    );
  return i;
}, Sn = Symbol(
  "useGlobalLeaflet"
), Ci = Symbol("addLayer"), ju = Symbol("removeLayer"), Al = Symbol(
  "registerControl"
), Cp = Symbol(
  "registerLayerControl"
), bp = Symbol(
  "canSetParentHtml"
), Op = Symbol("setParentHtml"), Lp = Symbol("setIcon"), Ip = Symbol("bindPopup"), Np = Symbol("bindTooltip"), Dp = Symbol("unbindPopup"), Rp = Symbol("unbindTooltip"), Cl = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, bl = (o) => ({ options: o.options, methods: {} }), ma = {
  ...Cl,
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
}, Ol = (o, i, n) => {
  const l = kt(Ci), d = kt(ju), { options: p, methods: _ } = bl(o), v = pn(
    o,
    ma,
    p
  ), m = () => l({ leafletObject: i.value }), E = () => d({ leafletObject: i.value }), A = {
    ..._,
    setAttribution(w) {
      E(), i.value.options.attribution = w, o.visible && m();
    },
    setName() {
      E(), o.visible && m();
    },
    setLayerType() {
      E(), o.visible && m();
    },
    setVisible(w) {
      i.value && (w ? m() : E());
    },
    bindPopup(w) {
      if (!i.value || !Js(i.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      i.value.bindPopup(w);
    },
    bindTooltip(w) {
      if (!i.value || !Js(i.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      i.value.bindTooltip(w);
    },
    unbindTooltip() {
      i.value && (Js(i.value.closeTooltip) && i.value.closeTooltip(), Js(i.value.unbindTooltip) && i.value.unbindTooltip());
    },
    unbindPopup() {
      i.value && (Js(i.value.closePopup) && i.value.closePopup(), Js(i.value.unbindPopup) && i.value.unbindPopup());
    },
    updateVisibleProp(w) {
      n.emit("update:visible", w);
    }
  };
  return Yr(Ip, A.bindPopup), Yr(Np, A.bindTooltip), Yr(Dp, A.unbindPopup), Yr(Rp, A.unbindTooltip), wl(() => {
    A.unbindPopup(), A.unbindTooltip(), E();
  }), { options: v, methods: A };
}, cs = (o, i) => {
  if (o && i.default)
    return Ns("div", { style: { display: "none" } }, i.default());
}, Pp = {
  ...ma,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, HE = (o, i, n) => {
  const { options: l, methods: d } = Ol(
    o,
    i,
    n
  );
  return { options: pn(
    o,
    Pp,
    l
  ), methods: d };
}, Ph = {
  ...Pp,
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
}, xp = (o, i, n) => {
  const { options: l, methods: d } = HE(o, i, n), p = pn(
    o,
    Ph,
    l
  ), _ = kt(ju), v = {
    ...d,
    setStroke(m) {
      i.value.setStyle({ stroke: m });
    },
    setColor(m) {
      i.value.setStyle({ color: m });
    },
    setWeight(m) {
      i.value.setStyle({ weight: m });
    },
    setOpacity(m) {
      i.value.setStyle({ opacity: m });
    },
    setLineCap(m) {
      i.value.setStyle({ lineCap: m });
    },
    setLineJoin(m) {
      i.value.setStyle({ lineJoin: m });
    },
    setDashArray(m) {
      i.value.setStyle({ dashArray: m });
    },
    setDashOffset(m) {
      i.value.setStyle({ dashOffset: m });
    },
    setFill(m) {
      i.value.setStyle({ fill: m });
    },
    setFillColor(m) {
      i.value.setStyle({ fillColor: m });
    },
    setFillOpacity(m) {
      i.value.setStyle({ fillOpacity: m });
    },
    setFillRule(m) {
      i.value.setStyle({ fillRule: m });
    },
    setClassName(m) {
      i.value.setStyle({ className: m });
    }
  };
  return Tl(() => {
    _({ leafletObject: i.value });
  }), { options: p, methods: v };
}, xh = {
  ...Ph,
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
}, Fp = (o, i, n) => {
  const { options: l, methods: d } = xp(
    o,
    i,
    n
  ), p = pn(
    o,
    xh,
    l
  ), _ = {
    ...d,
    setRadius(v) {
      i.value.setRadius(v);
    },
    setLatLng(v) {
      i.value.setLatLng(v);
    }
  };
  return { options: p, methods: _ };
}, Mp = {
  ...xh,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, YE = (o, i, n) => {
  const { options: l, methods: d } = Fp(o, i, n), p = pn(
    o,
    Mp,
    l
  ), _ = {
    ...d
  };
  return { options: p, methods: _ };
};
st({
  name: "LCircle",
  props: Mp,
  setup(o, i) {
    const n = pe(), l = pe(!1), d = Ot(Sn), p = kt(Ci), { options: _, methods: v } = YE(o, n, i);
    return qt(async () => {
      const { circle: m } = d ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(m(o.latLng, _));
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Xt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return cs(this.ready, this.$slots);
  }
});
const qE = st({
  name: "LCircleMarker",
  props: xh,
  setup(o, i) {
    const n = pe(), l = pe(!1), d = Ot(Sn), p = kt(Ci), { options: _, methods: v } = Fp(
      o,
      n,
      i
    );
    return qt(async () => {
      const { circleMarker: m } = d ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        m(o.latLng, _)
      );
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Xt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return cs(this.ready, this.$slots);
  }
}), va = {
  ...Cl,
  position: {
    type: String
  }
}, Ll = (o, i) => {
  const { options: n, methods: l } = bl(o), d = pn(
    o,
    va,
    n
  ), p = {
    ...l,
    setPosition(_) {
      i.value && i.value.setPosition(_);
    }
  };
  return wl(() => {
    i.value && i.value.remove();
  }), { options: d, methods: p };
}, KE = (o) => o.default ? Ns("div", { ref: "root" }, o.default()) : null;
st({
  name: "LControl",
  props: {
    ...va,
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
  setup(o, i) {
    const n = pe(), l = pe(), d = Ot(Sn), p = kt(Al), { options: _, methods: v } = Ll(o, n);
    return qt(async () => {
      const { Control: m, DomEvent: E } = d ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js"), A = m.extend({
        onAdd() {
          return l.value;
        }
      });
      n.value = Rn(new A(_)), wn(v, n.value, o), p({ leafletObject: n.value }), o.disableClickPropagation && l.value && E.disableClickPropagation(l.value), o.disableScrollPropagation && l.value && E.disableScrollPropagation(l.value), Xt(() => i.emit("ready", n.value));
    }), { root: l, leafletObject: n };
  },
  render() {
    return KE(this.$slots);
  }
});
const Bp = {
  ...va,
  prefix: {
    type: String
  }
}, $E = (o, i) => {
  const { options: n, methods: l } = Ll(
    o,
    i
  ), d = pn(
    o,
    Bp,
    n
  ), p = {
    ...l,
    setPrefix(_) {
      i.value.setPrefix(_);
    }
  };
  return { options: d, methods: p };
};
st({
  name: "LControlAttribution",
  props: Bp,
  setup(o, i) {
    const n = pe(), l = Ot(Sn), d = kt(Al), { options: p, methods: _ } = $E(o, n);
    return qt(async () => {
      const { control: v } = l ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        v.attribution(p)
      ), wn(_, n.value, o), d({ leafletObject: n.value }), Xt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const Gp = {
  ...va,
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
}, JE = (o, i) => {
  const { options: n } = Ll(o, i);
  return { options: pn(
    o,
    Gp,
    n
  ), methods: {
    addLayer(l) {
      l.layerType === "base" ? i.value.addBaseLayer(l.leafletObject, l.name) : l.layerType === "overlay" && i.value.addOverlay(l.leafletObject, l.name);
    },
    removeLayer(l) {
      i.value.removeLayer(l.leafletObject);
    }
  } };
};
st({
  name: "LControlLayers",
  props: Gp,
  setup(o, i) {
    const n = pe(), l = Ot(Sn), d = kt(Cp), { options: p, methods: _ } = JE(o, n);
    return qt(async () => {
      const { control: v } = l ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        v.layers(void 0, void 0, p)
      ), wn(_, n.value, o), d({
        ...o,
        ..._,
        leafletObject: n.value
      }), Xt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const kp = {
  ...va,
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
}, jE = (o, i) => {
  const { options: n, methods: l } = Ll(
    o,
    i
  );
  return { options: pn(
    o,
    kp,
    n
  ), methods: l };
};
st({
  name: "LControlScale",
  props: kp,
  setup(o, i) {
    const n = pe(), l = Ot(Sn), d = kt(Al), { options: p, methods: _ } = jE(o, n);
    return qt(async () => {
      const { control: v } = l ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(v.scale(p)), wn(_, n.value, o), d({ leafletObject: n.value }), Xt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const Up = {
  ...va,
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
}, XE = (o, i) => {
  const { options: n, methods: l } = Ll(
    o,
    i
  );
  return { options: pn(
    o,
    Up,
    n
  ), methods: l };
};
st({
  name: "LControlZoom",
  props: Up,
  setup(o, i) {
    const n = pe(), l = Ot(Sn), d = kt(Al), { options: p, methods: _ } = XE(o, n);
    return qt(async () => {
      const { control: v } = l ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(v.zoom(p)), wn(_, n.value, o), d({ leafletObject: n.value }), Xt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const Xu = {
  ...ma
}, Fh = (o, i, n) => {
  const { options: l, methods: d } = Ol(
    o,
    i,
    n
  ), p = pn(
    o,
    Xu,
    l
  ), _ = {
    ...d,
    addLayer(v) {
      i.value.addLayer(v.leafletObject);
    },
    removeLayer(v) {
      i.value.removeLayer(v.leafletObject);
    }
  };
  return Yr(Ci, _.addLayer), Yr(ju, _.removeLayer), { options: p, methods: _ };
}, Vp = {
  ...Xu
}, QE = (o, i, n) => {
  const { options: l, methods: d } = Fh(
    o,
    i,
    n
  ), p = pn(
    o,
    Vp,
    l
  ), _ = {
    ...d
  };
  return { options: p, methods: _ };
};
st({
  props: Vp,
  setup(o, i) {
    const n = pe(), l = pe(!1), d = Ot(Sn), p = kt(Ci), { methods: _, options: v } = QE(
      o,
      n,
      i
    );
    return qt(async () => {
      const { featureGroup: m } = d ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        m(void 0, v)
      );
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(_, n.value, o), p({
        ...o,
        ..._,
        leafletObject: n.value
      }), l.value = !0, Xt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return cs(this.ready, this.$slots);
  }
});
const zp = {
  ...Xu,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, e1 = (o, i, n) => {
  const { options: l, methods: d } = Fh(
    o,
    i,
    n
  ), p = pn(
    o,
    zp,
    l
  );
  Object.prototype.hasOwnProperty.call(o, "optionsStyle") && (p.style = o.optionsStyle);
  const _ = {
    ...d,
    setGeojson(v) {
      i.value.clearLayers(), i.value.addData(v);
    },
    setOptionsStyle(v) {
      i.value.setStyle(v);
    },
    getGeoJSONData() {
      return i.value.toGeoJSON();
    },
    getBounds() {
      return i.value.getBounds();
    }
  };
  return { options: p, methods: _ };
}, Fo = st({
  props: zp,
  setup(o, i) {
    const n = pe(), l = pe(!1), d = Ot(Sn), p = kt(Ci), { methods: _, options: v } = e1(o, n, i);
    return qt(async () => {
      const { geoJSON: m } = d ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(m(o.geojson, v));
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(_, n.value, o), p({
        ...o,
        ..._,
        leafletObject: n.value
      }), l.value = !0, Xt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return cs(this.ready, this.$slots);
  }
}), Mh = {
  ...ma,
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
}, Wp = (o, i, n) => {
  const { options: l, methods: d } = Ol(
    o,
    i,
    n
  ), p = pn(
    o,
    Mh,
    l
  ), _ = {
    ...d,
    setTileComponent() {
      var v;
      (v = i.value) == null || v.redraw();
    }
  };
  return wl(() => {
    i.value.off();
  }), { options: p, methods: _ };
}, t1 = (o, i, n, l) => o.extend({
  initialize(d) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), n.setOptions(this, d);
  },
  createTile(d) {
    const p = this._tileCoordsToKey(d);
    this.tileComponents[p] = i.create("div");
    const _ = Ns({ setup: l, props: ["coords"] }, { coords: d });
    return IE(_, this.tileComponents[p]), this.tileComponents[p];
  },
  _unloadTile(d) {
    const p = this._tileCoordsToKey(d.coords);
    this.tileComponents[p] && (this.tileComponents[p].innerHTML = "", this.tileComponents[p] = void 0);
  }
});
st({
  props: {
    ...Mh,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(o, i) {
    const n = pe(), l = pe(null), d = pe(!1), p = Ot(Sn), _ = kt(Ci), { options: v, methods: m } = Wp(o, n, i);
    return qt(async () => {
      const { GridLayer: E, DomUtil: A, Util: w } = p ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js"), b = t1(
        E,
        A,
        w,
        o.childRender
      );
      n.value = Rn(new b(v));
      const { listeners: N } = hi(i.attrs);
      n.value.on(N), wn(m, n.value, o), _({
        ...o,
        ...m,
        leafletObject: n.value
      }), d.value = !0, Xt(() => i.emit("ready", n.value));
    }), { root: l, ready: d, leafletObject: n };
  },
  render() {
    return this.ready ? Ns("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const kf = {
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
}, _l = st({
  name: "LIcon",
  props: {
    ...kf,
    ...Cl
  },
  setup(o, i) {
    const n = pe(), l = Ot(Sn), d = kt(bp), p = kt(Op), _ = kt(Lp);
    let v, m, E, A, w;
    const b = (X, x, z) => {
      const Y = X && X.innerHTML;
      if (!x) {
        z && w && d() && p(Y);
        return;
      }
      const { listeners: R } = hi(i.attrs);
      w && m(w, R);
      const { options: q } = bl(o), ce = pn(
        o,
        kf,
        q
      );
      Y && (ce.html = Y), w = ce.html ? E(ce) : A(ce), v(w, R), _(w);
    }, N = () => {
      Xt(() => b(n.value, !0, !1));
    }, k = () => {
      Xt(() => b(n.value, !1, !0));
    }, G = {
      setIconUrl: N,
      setIconRetinaUrl: N,
      setIconSize: N,
      setIconAnchor: N,
      setPopupAnchor: N,
      setTooltipAnchor: N,
      setShadowUrl: N,
      setShadowRetinaUrl: N,
      setShadowAnchor: N,
      setBgPos: N,
      setClassName: N,
      setHtml: N
    };
    return qt(async () => {
      const {
        DomEvent: X,
        divIcon: x,
        icon: z
      } = l ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      v = X.on, m = X.off, E = x, A = z, wn(G, {}, o), new MutationObserver(k).observe(n.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), N();
    }), { root: n };
  },
  render() {
    const o = this.$slots.default ? this.$slots.default() : void 0;
    return Ns("div", { ref: "root" }, o);
  }
}), Zp = {
  ...ma,
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
}, n1 = (o, i, n) => {
  const { options: l, methods: d } = Ol(
    o,
    i,
    n
  ), p = pn(
    o,
    Zp,
    l
  ), _ = {
    ...d,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(v) {
      return i.value.setOpacity(v);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(v) {
      return i.value.setUrl(v);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(v) {
      return i.value.setBounds(v);
    },
    /**
     * Get the bounds that this ImageOverlay covers
     * @returns {LatLngBounds}
     */
    getBounds() {
      return i.value.getBounds();
    },
    /**
     * Returns the instance of HTMLImageElement used by this overlay.
     * @returns {HTMLElement}
     */
    getElement() {
      return i.value.getElement();
    },
    /**
     * Brings the layer to the top of all overlays.
     */
    bringToFront() {
      return i.value.bringToFront();
    },
    /**
     * Brings the layer to the bottom of all overlays.
     */
    bringToBack() {
      return i.value.bringToBack();
    },
    /**
     * Changes the zIndex of the image overlay.
     * @param {number} zIndex
     */
    setZIndex(v) {
      return i.value.setZIndex(v);
    }
  };
  return { options: p, methods: _ };
};
st({
  name: "LImageOverlay",
  props: Zp,
  setup(o, i) {
    const n = pe(), l = pe(!1), d = Ot(Sn), p = kt(Ci), { options: _, methods: v } = n1(
      o,
      n,
      i
    );
    return qt(async () => {
      const { imageOverlay: m } = d ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        m(o.url, o.bounds, _)
      );
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Xt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return cs(this.ready, this.$slots);
  }
});
st({
  props: Xu,
  setup(o, i) {
    const n = pe(), l = pe(!1), d = Ot(Sn), p = kt(Ci), { methods: _ } = Fh(o, n, i);
    return qt(async () => {
      const { layerGroup: v } = d ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        v(void 0, o.options)
      );
      const { listeners: m } = hi(i.attrs);
      n.value.on(m), wn(_, n.value, o), p({
        ...o,
        ..._,
        leafletObject: n.value
      }), l.value = !0, Xt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return cs(this.ready, this.$slots);
  }
});
function Hp(o, i, n) {
  var l, d, p;
  i === void 0 && (i = 50), n === void 0 && (n = {});
  var _ = (l = n.isImmediate) != null && l, v = (d = n.callback) != null && d, m = n.maxWait, E = Date.now(), A = [];
  function w() {
    if (m !== void 0) {
      var N = Date.now() - E;
      if (N + i >= m)
        return m - N;
    }
    return i;
  }
  var b = function() {
    var N = [].slice.call(arguments), k = this;
    return new Promise(function(G, X) {
      var x = _ && p === void 0;
      if (p !== void 0 && clearTimeout(p), p = setTimeout(function() {
        if (p = void 0, E = Date.now(), !_) {
          var Y = o.apply(k, N);
          v && v(Y), A.forEach(function(R) {
            return (0, R.resolve)(Y);
          }), A = [];
        }
      }, w()), x) {
        var z = o.apply(k, N);
        return v && v(z), G(z);
      }
      A.push({ resolve: G, reject: X });
    });
  };
  return b.cancel = function(N) {
    p !== void 0 && clearTimeout(p), A.forEach(function(k) {
      return (0, k.reject)(N);
    }), A = [];
  }, b;
}
const Uf = {
  ...Cl,
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
}, Bh = st({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: Uf,
  setup(o, i) {
    const n = pe(), l = xo({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: d } = bl(o), p = pn(
      o,
      Uf,
      d
    ), { listeners: _, attrs: v } = hi(i.attrs), m = Au(Ci), E = Au(ju), A = Au(Al), w = Au(
      Cp
    );
    Yr(Sn, o.useGlobalLeaflet);
    const b = Yn(() => {
      const x = {};
      return o.noBlockingAnimations && (x.animate = !1), x;
    }), N = Yn(() => {
      const x = b.value;
      return o.padding && (x.padding = o.padding), o.paddingTopLeft && (x.paddingTopLeft = o.paddingTopLeft), o.paddingBottomRight && (x.paddingBottomRight = o.paddingBottomRight), x;
    }), k = {
      moveend: Hp((x) => {
        l.leafletRef && (i.emit("update:zoom", l.leafletRef.getZoom()), i.emit("update:center", l.leafletRef.getCenter()), i.emit("update:bounds", l.leafletRef.getBounds()));
      }),
      overlayadd(x) {
        const z = l.layersInControl.find((Y) => Y.name === x.name);
        z && z.updateVisibleProp(!0);
      },
      overlayremove(x) {
        const z = l.layersInControl.find((Y) => Y.name === x.name);
        z && z.updateVisibleProp(!1);
      }
    };
    qt(async () => {
      o.useGlobalLeaflet && (an.L = an.L || await Promise.resolve().then(() => w1));
      const { map: x, CRS: z, Icon: Y, latLngBounds: R, latLng: q, stamp: ce } = o.useGlobalLeaflet ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        p.beforeMapMount && await p.beforeMapMount();
      } catch (te) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${te.message}`
        );
      }
      await ZE(Y);
      const we = typeof p.crs == "string" ? z[p.crs] : p.crs;
      p.crs = we || z.EPSG3857;
      const Le = {
        addLayer(te) {
          te.layerType !== void 0 && (l.layerControl === void 0 ? l.layersToAdd.push(te) : l.layersInControl.find(
            (Z) => ce(Z.leafletObject) === ce(te.leafletObject)
          ) || (l.layerControl.addLayer(te), l.layersInControl.push(te))), te.visible !== !1 && l.leafletRef.addLayer(te.leafletObject);
        },
        removeLayer(te) {
          te.layerType !== void 0 && (l.layerControl === void 0 ? l.layersToAdd = l.layersToAdd.filter(
            (Z) => Z.name !== te.name
          ) : (l.layerControl.removeLayer(te.leafletObject), l.layersInControl = l.layersInControl.filter(
            (Z) => ce(Z.leafletObject) !== ce(te.leafletObject)
          ))), l.leafletRef.removeLayer(te.leafletObject);
        },
        registerLayerControl(te) {
          l.layerControl = te, l.layersToAdd.forEach((Z) => {
            l.layerControl.addLayer(Z);
          }), l.layersToAdd = [], A(te);
        },
        registerControl(te) {
          l.leafletRef.addControl(te.leafletObject);
        },
        setZoom(te) {
          const Z = l.leafletRef.getZoom();
          te !== Z && l.leafletRef.setZoom(te, b.value);
        },
        setCrs(te) {
          const Z = l.leafletRef.getBounds();
          l.leafletRef.options.crs = te, l.leafletRef.fitBounds(Z, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(te) {
          l.leafletRef.fitBounds(te, N.value);
        },
        setBounds(te) {
          if (!te)
            return;
          const Z = R(te);
          Z.isValid() && !(l.lastSetBounds || l.leafletRef.getBounds()).equals(Z, 0) && (l.lastSetBounds = Z, l.leafletRef.fitBounds(Z));
        },
        setCenter(te) {
          if (te == null)
            return;
          const Z = q(te), j = l.lastSetCenter || l.leafletRef.getCenter();
          (j.lat !== Z.lat || j.lng !== Z.lng) && (l.lastSetCenter = Z, l.leafletRef.panTo(Z, b.value));
        }
      };
      Cu(m, Le.addLayer), Cu(E, Le.removeLayer), Cu(A, Le.registerControl), Cu(w, Le.registerLayerControl), l.leafletRef = Rn(x(n.value, p)), wn(Le, l.leafletRef, o), Gf(l.leafletRef, k), Gf(l.leafletRef, _), l.ready = !0, Xt(() => i.emit("ready", l.leafletRef));
    }), Tl(() => {
      Ap(k), l.leafletRef && (l.leafletRef.off(), l.leafletRef.remove());
    });
    const G = Yn(() => l.leafletRef), X = Yn(() => l.ready);
    return { root: n, ready: X, leafletObject: G, attrs: v };
  },
  render({ attrs: o }) {
    return o.style || (o.style = {}), o.style.width || (o.style.width = "100%"), o.style.height || (o.style.height = "100%"), Ns(
      "div",
      {
        ...o,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), i1 = ["Symbol(Comment)", "Symbol(Text)"], r1 = ["LTooltip", "LPopup"], Yp = {
  ...ma,
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
}, s1 = (o, i, n) => {
  const { options: l, methods: d } = Ol(
    o,
    i,
    n
  ), p = pn(
    o,
    Yp,
    l
  ), _ = {
    ...d,
    setDraggable(v) {
      i.value.dragging && (v ? i.value.dragging.enable() : i.value.dragging.disable());
    },
    latLngSync(v) {
      n.emit("update:latLng", v.latlng), n.emit("update:lat-lng", v.latlng);
    },
    setLatLng(v) {
      if (v != null && i.value) {
        const m = i.value.getLatLng();
        (!m || !m.equals(v)) && i.value.setLatLng(v);
      }
    }
  };
  return { options: p, methods: _ };
}, o1 = (o, i) => {
  const n = i.slots.default && i.slots.default();
  return n && n.length && n.some(a1);
};
function a1(o) {
  return !(i1.includes(o.type.toString()) || r1.includes(o.type.name));
}
const gl = st({
  name: "LMarker",
  props: Yp,
  setup(o, i) {
    const n = pe(), l = pe(!1), d = Ot(Sn), p = kt(Ci);
    Yr(
      bp,
      () => {
        var E;
        return !!((E = n.value) != null && E.getElement());
      }
    ), Yr(Op, (E) => {
      var A, w;
      const b = Js((A = n.value) == null ? void 0 : A.getElement) && ((w = n.value) == null ? void 0 : w.getElement());
      b && (b.innerHTML = E);
    }), Yr(
      Lp,
      (E) => {
        var A;
        return ((A = n.value) == null ? void 0 : A.setIcon) && n.value.setIcon(E);
      }
    );
    const { options: _, methods: v } = s1(o, n, i), m = {
      moveHandler: Hp(v.latLngSync)
    };
    return qt(async () => {
      const { marker: E, divIcon: A } = d ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      o1(_, i) && (_.icon = A({ className: "" })), n.value = Rn(E(o.latLng, _));
      const { listeners: w } = hi(i.attrs);
      n.value.on(w), n.value.on("move", m.moveHandler), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Xt(() => i.emit("ready", n.value));
    }), Tl(() => Ap(m)), { ready: l, leafletObject: n };
  },
  render() {
    return cs(this.ready, this.$slots);
  }
}), Gh = {
  ...Ph,
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
}, qp = (o, i, n) => {
  const { options: l, methods: d } = xp(
    o,
    i,
    n
  ), p = pn(
    o,
    Gh,
    l
  ), _ = {
    ...d,
    setSmoothFactor(v) {
      i.value.setStyle({ smoothFactor: v });
    },
    setNoClip(v) {
      i.value.setStyle({ noClip: v });
    },
    addLatLng(v) {
      i.value.addLatLng(v);
    }
  };
  return { options: p, methods: _ };
}, zu = {
  ...Gh
}, Kp = (o, i, n) => {
  const { options: l, methods: d } = qp(
    o,
    i,
    n
  ), p = pn(
    o,
    zu,
    l
  ), _ = {
    ...d,
    toGeoJSON(v) {
      return i.value.toGeoJSON(v);
    }
  };
  return { options: p, methods: _ };
};
st({
  name: "LPolygon",
  props: zu,
  setup(o, i) {
    const n = pe(), l = pe(!1), d = Ot(Sn), p = kt(Ci), { options: _, methods: v } = Kp(o, n, i);
    return qt(async () => {
      const { polygon: m } = d ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(m(o.latLngs, _));
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Xt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return cs(this.ready, this.$slots);
  }
});
st({
  name: "LPolyline",
  props: Gh,
  setup(o, i) {
    const n = pe(), l = pe(!1), d = Ot(Sn), p = kt(Ci), { options: _, methods: v } = qp(o, n, i);
    return qt(async () => {
      const { polyline: m } = d ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        m(o.latLngs, _)
      );
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Xt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return cs(this.ready, this.$slots);
  }
});
const $p = {
  ...Cl,
  content: {
    type: String,
    default: null
  }
}, Jp = (o, i) => {
  const { options: n, methods: l } = bl(o), d = {
    ...l,
    setContent(p) {
      i.value && p !== null && p !== void 0 && i.value.setContent(p);
    }
  };
  return { options: n, methods: d };
}, jp = (o) => o.default ? Ns("div", { ref: "root" }, o.default()) : null, l1 = {
  ...$p,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, u1 = (o, i) => {
  const { options: n, methods: l } = Jp(o, i);
  return { options: n, methods: l };
};
st({
  name: "LPopup",
  props: l1,
  setup(o, i) {
    const n = pe(), l = pe(null), d = Ot(Sn), p = kt(Ip), _ = kt(Dp), { options: v, methods: m } = u1(o, n);
    return qt(async () => {
      const { popup: E } = d ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(E(v)), o.latLng !== void 0 && n.value.setLatLng(o.latLng), wn(m, n.value, o);
      const { listeners: A } = hi(i.attrs);
      n.value.on(A), n.value.setContent(o.content || l.value || ""), p(n.value), Xt(() => i.emit("ready", n.value));
    }), Tl(() => {
      _();
    }), { root: l, leafletObject: n };
  },
  render() {
    return jp(this.$slots);
  }
});
const Xp = {
  ...zu,
  latLngs: {
    ...zu.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, c1 = (o, i, n) => {
  const { options: l, methods: d } = Kp(
    o,
    i,
    n
  ), p = pn(
    o,
    Xp,
    l
  ), _ = {
    ...d,
    setBounds(v) {
      i.value.setBounds(v);
    },
    setLatLngs(v) {
      i.value.setBounds(v);
    }
  };
  return { options: p, methods: _ };
};
st({
  name: "LRectangle",
  props: Xp,
  setup(o, i) {
    const n = pe(), l = pe(!1), d = Ot(Sn), p = kt(Ci), { options: _, methods: v } = c1(o, n, i);
    return qt(async () => {
      const { rectangle: m, latLngBounds: E } = d ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js"), A = o.bounds ? E(o.bounds) : E(o.latLngs || []);
      n.value = Rn(m(A, _));
      const { listeners: w } = hi(i.attrs);
      n.value.on(w), wn(v, n.value, o), p({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Xt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return cs(this.ready, this.$slots);
  }
});
const kh = {
  ...Mh,
  tms: {
    type: Boolean,
    default: void 0
  },
  subdomains: {
    type: [String, Array],
    validator: (o) => typeof o == "string" ? !0 : Array.isArray(o) ? o.every((i) => typeof i == "string") : !1
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
}, Qp = (o, i, n) => {
  const { options: l, methods: d } = Wp(o, i, n), p = pn(
    o,
    kh,
    l
  ), _ = {
    ...d
  };
  return { options: p, methods: _ };
}, Uh = st({
  props: kh,
  setup(o, i) {
    const n = pe(), l = Ot(Sn), d = kt(Ci), { options: p, methods: _ } = Qp(o, n, i);
    return qt(async () => {
      const { tileLayer: v } = l ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(v(o.url, p));
      const { listeners: m } = hi(i.attrs);
      n.value.on(m), wn(_, n.value, o), d({
        ...o,
        ..._,
        leafletObject: n.value
      }), Xt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
}), h1 = {
  ...$p
}, d1 = (o, i) => {
  const { options: n, methods: l } = Jp(o, i), d = kt(Rp);
  return Tl(() => {
    d();
  }), { options: n, methods: l };
}, Vf = st({
  name: "LTooltip",
  props: h1,
  setup(o, i) {
    const n = pe(), l = pe(null), d = Ot(Sn), p = kt(Np), { options: _, methods: v } = d1(o, n);
    return qt(async () => {
      const { tooltip: m } = d ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(m(_)), wn(v, n.value, o);
      const { listeners: E } = hi(i.attrs);
      n.value.on(E), n.value.setContent(o.content || l.value || ""), p(n.value), Xt(() => i.emit("ready", n.value));
    }), { root: l, leafletObject: n };
  },
  render() {
    return jp(this.$slots);
  }
}), e_ = {
  ...kh,
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
}, f1 = (o, i, n) => {
  const { options: l, methods: d } = Qp(o, i, n);
  return {
    options: pn(
      o,
      e_,
      l
    ),
    methods: {
      ...d
    }
  };
}, p1 = st({
  props: e_,
  setup(o, i) {
    const n = pe(), l = Ot(Sn), d = kt(Ci), { options: p, methods: _ } = f1(
      o,
      n,
      i
    );
    return qt(async () => {
      const { tileLayer: v } = l ? an.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Rn(
        v.wms(o.url, p)
      );
      const { listeners: m } = hi(i.attrs);
      n.value.on(m), wn(_, n.value, o), d({
        ...o,
        ..._,
        leafletObject: n.value
      }), Xt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
var bu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function t_(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var tl = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var _1 = tl.exports, zf;
function g1() {
  return zf || (zf = 1, (function(o, i) {
    (function() {
      var n, l = "4.17.21", d = 200, p = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", _ = "Expected a function", v = "Invalid `variable` option passed into `_.template`", m = "__lodash_hash_undefined__", E = 500, A = "__lodash_placeholder__", w = 1, b = 2, N = 4, k = 1, G = 2, X = 1, x = 2, z = 4, Y = 8, R = 16, q = 32, ce = 64, we = 128, Le = 256, te = 512, Z = 30, j = "...", U = 800, se = 16, ge = 1, Je = 2, De = 3, Pe = 1 / 0, _e = 9007199254740991, St = 17976931348623157e292, J = NaN, de = 4294967295, He = de - 1, gt = de >>> 1, re = [
        ["ary", we],
        ["bind", X],
        ["bindKey", x],
        ["curry", Y],
        ["curryRight", R],
        ["flip", te],
        ["partial", q],
        ["partialRight", ce],
        ["rearg", Le]
      ], ke = "[object Arguments]", xe = "[object Array]", Kt = "[object AsyncFunction]", Qt = "[object Boolean]", Pn = "[object Date]", ln = "[object DOMException]", qn = "[object Error]", Un = "[object Function]", Ui = "[object GeneratorFunction]", _n = "[object Map]", zt = "[object Number]", Vi = "[object Null]", un = "[object Object]", cn = "[object Promise]", vr = "[object Proxy]", Kn = "[object RegExp]", en = "[object Set]", Qn = "[object String]", xn = "[object Symbol]", zi = "[object Undefined]", Vn = "[object WeakMap]", er = "[object WeakSet]", gn = "[object ArrayBuffer]", ei = "[object DataView]", bi = "[object Float32Array]", Oi = "[object Float64Array]", di = "[object Int8Array]", Fn = "[object Int16Array]", Wi = "[object Int32Array]", fi = "[object Uint8Array]", ti = "[object Uint8ClampedArray]", An = "[object Uint16Array]", ni = "[object Uint32Array]", Li = /\b__p \+= '';/g, Ii = /\b(__p \+=) '' \+/g, ii = /(__e\(.*?\)|\b__t\)) \+\n'';/g, tr = /&(?:amp|lt|gt|quot|#39);/g, Zi = /[&<>"']/g, F = RegExp(tr.source), ae = RegExp(Zi.source), K = /<%-([\s\S]+?)%>/g, ve = /<%([\s\S]+?)%>/g, Be = /<%=([\s\S]+?)%>/g, Fe = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, tt = /^\w*$/, mt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xt = /[\\^$.*+?()[\]{}|]/g, Ut = RegExp(xt.source), tn = /^\s+/, Et = /\s/, me = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, ri = /\{\n\/\* \[wrapped with (.+)\] \*/, Hi = /,? & /, pi = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, yr = /[()=,{}\[\]\/\s]/, Ft = /\\(\\)?/g, Cn = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, ct = /\w*$/, Wt = /^[-+]0x[0-9a-f]+$/i, bn = /^0b[01]+$/i, si = /^\[object .+?Constructor\]$/, mn = /^0o[0-7]+$/i, On = /^(?:0|[1-9]\d*)$/, oi = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, hn = /($^)/, $t = /['\n\r\u2028\u2029\\]/g, $n = "\\ud800-\\udfff", Pr = "\\u0300-\\u036f", hs = "\\ufe20-\\ufe2f", ds = "\\u20d0-\\u20ff", _i = Pr + hs + ds, Er = "\\u2700-\\u27bf", Yi = "a-z\\xdf-\\xf6\\xf8-\\xff", qr = "\\xac\\xb1\\xd7\\xf7", Kr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", nr = "\\u2000-\\u206f", nt = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Nt = "A-Z\\xc0-\\xd6\\xd8-\\xde", ir = "\\ufe0e\\ufe0f", Mn = qr + Kr + nr + nt, gi = "['’]", xr = "[" + $n + "]", We = "[" + Mn + "]", Dt = "[" + _i + "]", Mo = "\\d+", Bo = "[" + Er + "]", Ni = "[" + Yi + "]", Pl = "[^" + $n + Mn + Mo + Er + Yi + Nt + "]", Ps = "\\ud83c[\\udffb-\\udfff]", fs = "(?:" + Dt + "|" + Ps + ")", dn = "[^" + $n + "]", Fr = "(?:\\ud83c[\\udde6-\\uddff]){2}", ps = "[\\ud800-\\udbff][\\udc00-\\udfff]", Tr = "[" + Nt + "]", Go = "\\u200d", xs = "(?:" + Ni + "|" + Pl + ")", ya = "(?:" + Tr + "|" + Pl + ")", ko = "(?:" + gi + "(?:d|ll|m|re|s|t|ve))?", io = "(?:" + gi + "(?:D|LL|M|RE|S|T|VE))?", Uo = fs + "?", Vo = "[" + ir + "]?", zo = "(?:" + Go + "(?:" + [dn, Fr, ps].join("|") + ")" + Vo + Uo + ")*", xl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Ea = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Fl = Vo + Uo + zo, Qe = "(?:" + [Bo, Fr, ps].join("|") + ")" + Fl, wr = "(?:" + [dn + Dt + "?", Dt, Fr, ps, xr].join("|") + ")", Gt = RegExp(gi, "g"), Ml = RegExp(Dt, "g"), ro = RegExp(Ps + "(?=" + Ps + ")|" + wr + Fl, "g"), Ta = RegExp([
        Tr + "?" + Ni + "+" + ko + "(?=" + [We, Tr, "$"].join("|") + ")",
        ya + "+" + io + "(?=" + [We, Tr + xs, "$"].join("|") + ")",
        Tr + "?" + xs + "+" + ko,
        Tr + "+" + io,
        Ea,
        xl,
        Mo,
        Qe
      ].join("|"), "g"), wa = RegExp("[" + Go + $n + _i + ir + "]"), _s = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Sa = [
        "Array",
        "Buffer",
        "DataView",
        "Date",
        "Error",
        "Float32Array",
        "Float64Array",
        "Function",
        "Int8Array",
        "Int16Array",
        "Int32Array",
        "Map",
        "Math",
        "Object",
        "Promise",
        "RegExp",
        "Set",
        "String",
        "Symbol",
        "TypeError",
        "Uint8Array",
        "Uint8ClampedArray",
        "Uint16Array",
        "Uint32Array",
        "WeakMap",
        "_",
        "clearTimeout",
        "isFinite",
        "parseInt",
        "setTimeout"
      ], so = -1, it = {};
      it[bi] = it[Oi] = it[di] = it[Fn] = it[Wi] = it[fi] = it[ti] = it[An] = it[ni] = !0, it[ke] = it[xe] = it[gn] = it[Qt] = it[ei] = it[Pn] = it[qn] = it[Un] = it[_n] = it[zt] = it[un] = it[Kn] = it[en] = it[Qn] = it[Vn] = !1;
      var At = {};
      At[ke] = At[xe] = At[gn] = At[ei] = At[Qt] = At[Pn] = At[bi] = At[Oi] = At[di] = At[Fn] = At[Wi] = At[_n] = At[zt] = At[un] = At[Kn] = At[en] = At[Qn] = At[xn] = At[fi] = At[ti] = At[An] = At[ni] = !0, At[qn] = At[Un] = At[Vn] = !1;
      var Bl = {
        // Latin-1 Supplement block.
        À: "A",
        Á: "A",
        Â: "A",
        Ã: "A",
        Ä: "A",
        Å: "A",
        à: "a",
        á: "a",
        â: "a",
        ã: "a",
        ä: "a",
        å: "a",
        Ç: "C",
        ç: "c",
        Ð: "D",
        ð: "d",
        È: "E",
        É: "E",
        Ê: "E",
        Ë: "E",
        è: "e",
        é: "e",
        ê: "e",
        ë: "e",
        Ì: "I",
        Í: "I",
        Î: "I",
        Ï: "I",
        ì: "i",
        í: "i",
        î: "i",
        ï: "i",
        Ñ: "N",
        ñ: "n",
        Ò: "O",
        Ó: "O",
        Ô: "O",
        Õ: "O",
        Ö: "O",
        Ø: "O",
        ò: "o",
        ó: "o",
        ô: "o",
        õ: "o",
        ö: "o",
        ø: "o",
        Ù: "U",
        Ú: "U",
        Û: "U",
        Ü: "U",
        ù: "u",
        ú: "u",
        û: "u",
        ü: "u",
        Ý: "Y",
        ý: "y",
        ÿ: "y",
        Æ: "Ae",
        æ: "ae",
        Þ: "Th",
        þ: "th",
        ß: "ss",
        // Latin Extended-A block.
        Ā: "A",
        Ă: "A",
        Ą: "A",
        ā: "a",
        ă: "a",
        ą: "a",
        Ć: "C",
        Ĉ: "C",
        Ċ: "C",
        Č: "C",
        ć: "c",
        ĉ: "c",
        ċ: "c",
        č: "c",
        Ď: "D",
        Đ: "D",
        ď: "d",
        đ: "d",
        Ē: "E",
        Ĕ: "E",
        Ė: "E",
        Ę: "E",
        Ě: "E",
        ē: "e",
        ĕ: "e",
        ė: "e",
        ę: "e",
        ě: "e",
        Ĝ: "G",
        Ğ: "G",
        Ġ: "G",
        Ģ: "G",
        ĝ: "g",
        ğ: "g",
        ġ: "g",
        ģ: "g",
        Ĥ: "H",
        Ħ: "H",
        ĥ: "h",
        ħ: "h",
        Ĩ: "I",
        Ī: "I",
        Ĭ: "I",
        Į: "I",
        İ: "I",
        ĩ: "i",
        ī: "i",
        ĭ: "i",
        į: "i",
        ı: "i",
        Ĵ: "J",
        ĵ: "j",
        Ķ: "K",
        ķ: "k",
        ĸ: "k",
        Ĺ: "L",
        Ļ: "L",
        Ľ: "L",
        Ŀ: "L",
        Ł: "L",
        ĺ: "l",
        ļ: "l",
        ľ: "l",
        ŀ: "l",
        ł: "l",
        Ń: "N",
        Ņ: "N",
        Ň: "N",
        Ŋ: "N",
        ń: "n",
        ņ: "n",
        ň: "n",
        ŋ: "n",
        Ō: "O",
        Ŏ: "O",
        Ő: "O",
        ō: "o",
        ŏ: "o",
        ő: "o",
        Ŕ: "R",
        Ŗ: "R",
        Ř: "R",
        ŕ: "r",
        ŗ: "r",
        ř: "r",
        Ś: "S",
        Ŝ: "S",
        Ş: "S",
        Š: "S",
        ś: "s",
        ŝ: "s",
        ş: "s",
        š: "s",
        Ţ: "T",
        Ť: "T",
        Ŧ: "T",
        ţ: "t",
        ť: "t",
        ŧ: "t",
        Ũ: "U",
        Ū: "U",
        Ŭ: "U",
        Ů: "U",
        Ű: "U",
        Ų: "U",
        ũ: "u",
        ū: "u",
        ŭ: "u",
        ů: "u",
        ű: "u",
        ų: "u",
        Ŵ: "W",
        ŵ: "w",
        Ŷ: "Y",
        ŷ: "y",
        Ÿ: "Y",
        Ź: "Z",
        Ż: "Z",
        Ž: "Z",
        ź: "z",
        ż: "z",
        ž: "z",
        Ĳ: "IJ",
        ĳ: "ij",
        Œ: "Oe",
        œ: "oe",
        ŉ: "'n",
        ſ: "s"
      }, Gl = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, ec = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, kl = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Aa = parseFloat, tc = parseInt, Ca = typeof bu == "object" && bu && bu.Object === Object && bu, vt = typeof self == "object" && self && self.Object === Object && self, zn = Ca || vt || Function("return this")(), Di = i && !i.nodeType && i, rr = Di && !0 && o && !o.nodeType && o, ba = rr && rr.exports === Di, Oa = ba && Ca.process, mi = (function() {
        try {
          var P = rr && rr.require && rr.require("util").types;
          return P || Oa && Oa.binding && Oa.binding("util");
        } catch {
        }
      })(), Ul = mi && mi.isArrayBuffer, La = mi && mi.isDate, Vl = mi && mi.isMap, zl = mi && mi.isRegExp, Wo = mi && mi.isSet, Wl = mi && mi.isTypedArray;
      function nn(P, $, H) {
        switch (H.length) {
          case 0:
            return P.call($);
          case 1:
            return P.call($, H[0]);
          case 2:
            return P.call($, H[0], H[1]);
          case 3:
            return P.call($, H[0], H[1], H[2]);
        }
        return P.apply($, H);
      }
      function nc(P, $, H, Ce) {
        for (var je = -1, Ct = P == null ? 0 : P.length; ++je < Ct; ) {
          var Ln = P[je];
          $(Ce, Ln, H(Ln), P);
        }
        return Ce;
      }
      function Ri(P, $) {
        for (var H = -1, Ce = P == null ? 0 : P.length; ++H < Ce && $(P[H], H, P) !== !1; )
          ;
        return P;
      }
      function $r(P, $) {
        for (var H = P == null ? 0 : P.length; H-- && $(P[H], H, P) !== !1; )
          ;
        return P;
      }
      function Ia(P, $) {
        for (var H = -1, Ce = P == null ? 0 : P.length; ++H < Ce; )
          if (!$(P[H], H, P))
            return !1;
        return !0;
      }
      function Mr(P, $) {
        for (var H = -1, Ce = P == null ? 0 : P.length, je = 0, Ct = []; ++H < Ce; ) {
          var Ln = P[H];
          $(Ln, H, P) && (Ct[je++] = Ln);
        }
        return Ct;
      }
      function Fs(P, $) {
        var H = P == null ? 0 : P.length;
        return !!H && Ms(P, $, 0) > -1;
      }
      function Na(P, $, H) {
        for (var Ce = -1, je = P == null ? 0 : P.length; ++Ce < je; )
          if (H($, P[Ce]))
            return !0;
        return !1;
      }
      function Vt(P, $) {
        for (var H = -1, Ce = P == null ? 0 : P.length, je = Array(Ce); ++H < Ce; )
          je[H] = $(P[H], H, P);
        return je;
      }
      function Br(P, $) {
        for (var H = -1, Ce = $.length, je = P.length; ++H < Ce; )
          P[je + H] = $[H];
        return P;
      }
      function Da(P, $, H, Ce) {
        var je = -1, Ct = P == null ? 0 : P.length;
        for (Ce && Ct && (H = P[++je]); ++je < Ct; )
          H = $(H, P[je], je, P);
        return H;
      }
      function ic(P, $, H, Ce) {
        var je = P == null ? 0 : P.length;
        for (Ce && je && (H = P[--je]); je--; )
          H = $(H, P[je], je, P);
        return H;
      }
      function oo(P, $) {
        for (var H = -1, Ce = P == null ? 0 : P.length; ++H < Ce; )
          if ($(P[H], H, P))
            return !0;
        return !1;
      }
      var rc = Zo("length");
      function Zl(P) {
        return P.split("");
      }
      function Hl(P) {
        return P.match(pi) || [];
      }
      function ao(P, $, H) {
        var Ce;
        return H(P, function(je, Ct, Ln) {
          if ($(je, Ct, Ln))
            return Ce = Ct, !1;
        }), Ce;
      }
      function Sr(P, $, H, Ce) {
        for (var je = P.length, Ct = H + (Ce ? 1 : -1); Ce ? Ct-- : ++Ct < je; )
          if ($(P[Ct], Ct, P))
            return Ct;
        return -1;
      }
      function Ms(P, $, H) {
        return $ === $ ? ks(P, $, H) : Sr(P, Pi, H);
      }
      function lo(P, $, H, Ce) {
        for (var je = H - 1, Ct = P.length; ++je < Ct; )
          if (Ce(P[je], $))
            return je;
        return -1;
      }
      function Pi(P) {
        return P !== P;
      }
      function Ra(P, $) {
        var H = P == null ? 0 : P.length;
        return H ? Fa(P, $) / H : J;
      }
      function Zo(P) {
        return function($) {
          return $ == null ? n : $[P];
        };
      }
      function Pa(P) {
        return function($) {
          return P == null ? n : P[$];
        };
      }
      function Ho(P, $, H, Ce, je) {
        return je(P, function(Ct, Ln, Mt) {
          H = Ce ? (Ce = !1, Ct) : $(H, Ct, Ln, Mt);
        }), H;
      }
      function xa(P, $) {
        var H = P.length;
        for (P.sort($); H--; )
          P[H] = P[H].value;
        return P;
      }
      function Fa(P, $) {
        for (var H, Ce = -1, je = P.length; ++Ce < je; ) {
          var Ct = $(P[Ce]);
          Ct !== n && (H = H === n ? Ct : H + Ct);
        }
        return H;
      }
      function Ma(P, $) {
        for (var H = -1, Ce = Array(P); ++H < P; )
          Ce[H] = $(H);
        return Ce;
      }
      function Yl(P, $) {
        return Vt($, function(H) {
          return [H, P[H]];
        });
      }
      function ql(P) {
        return P && P.slice(0, Ga(P) + 1).replace(tn, "");
      }
      function Jt(P) {
        return function($) {
          return P($);
        };
      }
      function Jr(P, $) {
        return Vt($, function(H) {
          return P[H];
        });
      }
      function uo(P, $) {
        return P.has($);
      }
      function Ar(P, $) {
        for (var H = -1, Ce = P.length; ++H < Ce && Ms($, P[H], 0) > -1; )
          ;
        return H;
      }
      function Kl(P, $) {
        for (var H = P.length; H-- && Ms($, P[H], 0) > -1; )
          ;
        return H;
      }
      function Bs(P, $) {
        for (var H = P.length, Ce = 0; H--; )
          P[H] === $ && ++Ce;
        return Ce;
      }
      var sc = Pa(Bl), co = Pa(Gl);
      function $l(P) {
        return "\\" + kl[P];
      }
      function Yo(P, $) {
        return P == null ? n : P[$];
      }
      function Gs(P) {
        return wa.test(P);
      }
      function jr(P) {
        return _s.test(P);
      }
      function qo(P) {
        for (var $, H = []; !($ = P.next()).done; )
          H.push($.value);
        return H;
      }
      function Ba(P) {
        var $ = -1, H = Array(P.size);
        return P.forEach(function(Ce, je) {
          H[++$] = [je, Ce];
        }), H;
      }
      function Ko(P, $) {
        return function(H) {
          return P($(H));
        };
      }
      function Xr(P, $) {
        for (var H = -1, Ce = P.length, je = 0, Ct = []; ++H < Ce; ) {
          var Ln = P[H];
          (Ln === $ || Ln === A) && (P[H] = A, Ct[je++] = H);
        }
        return Ct;
      }
      function qi(P) {
        var $ = -1, H = Array(P.size);
        return P.forEach(function(Ce) {
          H[++$] = Ce;
        }), H;
      }
      function oc(P) {
        var $ = -1, H = Array(P.size);
        return P.forEach(function(Ce) {
          H[++$] = [Ce, Ce];
        }), H;
      }
      function ks(P, $, H) {
        for (var Ce = H - 1, je = P.length; ++Ce < je; )
          if (P[Ce] === $)
            return Ce;
        return -1;
      }
      function ac(P, $, H) {
        for (var Ce = H + 1; Ce--; )
          if (P[Ce] === $)
            return Ce;
        return Ce;
      }
      function vi(P) {
        return Gs(P) ? $o(P) : rc(P);
      }
      function yi(P) {
        return Gs(P) ? Ua(P) : Zl(P);
      }
      function Ga(P) {
        for (var $ = P.length; $-- && Et.test(P.charAt($)); )
          ;
        return $;
      }
      var ka = Pa(ec);
      function $o(P) {
        for (var $ = ro.lastIndex = 0; ro.test(P); )
          ++$;
        return $;
      }
      function Ua(P) {
        return P.match(ro) || [];
      }
      function Jo(P) {
        return P.match(Ta) || [];
      }
      var Us = (function P($) {
        $ = $ == null ? zn : Gr.defaults(zn.Object(), $, Gr.pick(zn, Sa));
        var H = $.Array, Ce = $.Date, je = $.Error, Ct = $.Function, Ln = $.Math, Mt = $.Object, Va = $.RegExp, Cr = $.String, ai = $.TypeError, jo = H.prototype, Xo = Ct.prototype, Vs = Mt.prototype, ho = $["__core-js_shared__"], Qo = Xo.toString, Tt = Vs.hasOwnProperty, lc = 0, gs = (function() {
          var t = /[^.]+$/.exec(ho && ho.keys && ho.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        })(), fo = Vs.toString, Jl = Qo.call(Mt), uc = zn._, kr = Va(
          "^" + Qo.call(Tt).replace(xt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), po = ba ? $.Buffer : n, Ur = $.Symbol, Qr = $.Uint8Array, jl = po ? po.allocUnsafe : n, ms = Ko(Mt.getPrototypeOf, Mt), zs = Mt.create, za = Vs.propertyIsEnumerable, _o = jo.splice, Xl = Ur ? Ur.isConcatSpreadable : n, Ws = Ur ? Ur.iterator : n, es = Ur ? Ur.toStringTag : n, go = (function() {
          try {
            var t = Co(Mt, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        })(), Ql = $.clearTimeout !== zn.clearTimeout && $.clearTimeout, eu = Ce && Ce.now !== zn.Date.now && Ce.now, cc = $.setTimeout !== zn.setTimeout && $.setTimeout, mo = Ln.ceil, vo = Ln.floor, Wa = Mt.getOwnPropertySymbols, e = po ? po.isBuffer : n, r = $.isFinite, a = jo.join, c = Ko(Mt.keys, Mt), f = Ln.max, y = Ln.min, I = Ce.now, B = $.parseInt, W = Ln.random, ne = jo.reverse, Se = Co($, "DataView"), Me = Co($, "Map"), ot = Co($, "Promise"), vn = Co($, "Set"), rn = Co($, "WeakMap"), Jn = Co(Mt, "create"), Wn = rn && new rn(), sr = {}, hc = bo(Se), dc = bo(Me), fc = bo(ot), tu = bo(vn), pc = bo(rn), yo = Ur ? Ur.prototype : n, Zt = yo ? yo.valueOf : n, Eo = yo ? yo.toString : n;
        function T(t) {
          if (yn(t) && !rt(t) && !(t instanceof ft)) {
            if (t instanceof Ei)
              return t;
            if (Tt.call(t, "__wrapped__"))
              return $d(t);
          }
          return new Ei(t);
        }
        var Zs = /* @__PURE__ */ (function() {
          function t() {
          }
          return function(s) {
            if (!fn(s))
              return {};
            if (zs)
              return zs(s);
            t.prototype = s;
            var u = new t();
            return t.prototype = n, u;
          };
        })();
        function ea() {
        }
        function Ei(t, s) {
          this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = n;
        }
        T.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: K,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: ve,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Be,
          /**
           * Used to reference the data object in the template text.
           *
           * @memberOf _.templateSettings
           * @type {string}
           */
          variable: "",
          /**
           * Used to import variables into the compiled template.
           *
           * @memberOf _.templateSettings
           * @type {Object}
           */
          imports: {
            /**
             * A reference to the `lodash` function.
             *
             * @memberOf _.templateSettings.imports
             * @type {Function}
             */
            _: T
          }
        }, T.prototype = ea.prototype, T.prototype.constructor = T, Ei.prototype = Zs(ea.prototype), Ei.prototype.constructor = Ei;
        function ft(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = de, this.__views__ = [];
        }
        function _c() {
          var t = new ft(this.__wrapped__);
          return t.__actions__ = Ki(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Ki(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Ki(this.__views__), t;
        }
        function F_() {
          if (this.__filtered__) {
            var t = new ft(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function M_() {
          var t = this.__wrapped__.value(), s = this.__dir__, u = rt(t), h = s < 0, g = u ? t.length : 0, S = Kg(0, g, this.__views__), O = S.start, D = S.end, M = D - O, Q = h ? D : O - 1, ee = this.__iteratees__, oe = ee.length, Ee = 0, Ne = y(M, this.__takeCount__);
          if (!u || !h && g == M && Ne == M)
            return vd(t, this.__actions__);
          var Ve = [];
          e:
            for (; M-- && Ee < Ne; ) {
              Q += s;
              for (var ht = -1, ze = t[Q]; ++ht < oe; ) {
                var _t = ee[ht], wt = _t.iteratee, lr = _t.type, Mi = wt(ze);
                if (lr == Je)
                  ze = Mi;
                else if (!Mi) {
                  if (lr == ge)
                    continue e;
                  break e;
                }
              }
              Ve[Ee++] = ze;
            }
          return Ve;
        }
        ft.prototype = Zs(ea.prototype), ft.prototype.constructor = ft;
        function To(t) {
          var s = -1, u = t == null ? 0 : t.length;
          for (this.clear(); ++s < u; ) {
            var h = t[s];
            this.set(h[0], h[1]);
          }
        }
        function B_() {
          this.__data__ = Jn ? Jn(null) : {}, this.size = 0;
        }
        function G_(t) {
          var s = this.has(t) && delete this.__data__[t];
          return this.size -= s ? 1 : 0, s;
        }
        function k_(t) {
          var s = this.__data__;
          if (Jn) {
            var u = s[t];
            return u === m ? n : u;
          }
          return Tt.call(s, t) ? s[t] : n;
        }
        function U_(t) {
          var s = this.__data__;
          return Jn ? s[t] !== n : Tt.call(s, t);
        }
        function V_(t, s) {
          var u = this.__data__;
          return this.size += this.has(t) ? 0 : 1, u[t] = Jn && s === n ? m : s, this;
        }
        To.prototype.clear = B_, To.prototype.delete = G_, To.prototype.get = k_, To.prototype.has = U_, To.prototype.set = V_;
        function vs(t) {
          var s = -1, u = t == null ? 0 : t.length;
          for (this.clear(); ++s < u; ) {
            var h = t[s];
            this.set(h[0], h[1]);
          }
        }
        function z_() {
          this.__data__ = [], this.size = 0;
        }
        function W_(t) {
          var s = this.__data__, u = nu(s, t);
          if (u < 0)
            return !1;
          var h = s.length - 1;
          return u == h ? s.pop() : _o.call(s, u, 1), --this.size, !0;
        }
        function Z_(t) {
          var s = this.__data__, u = nu(s, t);
          return u < 0 ? n : s[u][1];
        }
        function H_(t) {
          return nu(this.__data__, t) > -1;
        }
        function Y_(t, s) {
          var u = this.__data__, h = nu(u, t);
          return h < 0 ? (++this.size, u.push([t, s])) : u[h][1] = s, this;
        }
        vs.prototype.clear = z_, vs.prototype.delete = W_, vs.prototype.get = Z_, vs.prototype.has = H_, vs.prototype.set = Y_;
        function ys(t) {
          var s = -1, u = t == null ? 0 : t.length;
          for (this.clear(); ++s < u; ) {
            var h = t[s];
            this.set(h[0], h[1]);
          }
        }
        function q_() {
          this.size = 0, this.__data__ = {
            hash: new To(),
            map: new (Me || vs)(),
            string: new To()
          };
        }
        function K_(t) {
          var s = pu(this, t).delete(t);
          return this.size -= s ? 1 : 0, s;
        }
        function $_(t) {
          return pu(this, t).get(t);
        }
        function J_(t) {
          return pu(this, t).has(t);
        }
        function j_(t, s) {
          var u = pu(this, t), h = u.size;
          return u.set(t, s), this.size += u.size == h ? 0 : 1, this;
        }
        ys.prototype.clear = q_, ys.prototype.delete = K_, ys.prototype.get = $_, ys.prototype.has = J_, ys.prototype.set = j_;
        function wo(t) {
          var s = -1, u = t == null ? 0 : t.length;
          for (this.__data__ = new ys(); ++s < u; )
            this.add(t[s]);
        }
        function X_(t) {
          return this.__data__.set(t, m), this;
        }
        function Q_(t) {
          return this.__data__.has(t);
        }
        wo.prototype.add = wo.prototype.push = X_, wo.prototype.has = Q_;
        function Vr(t) {
          var s = this.__data__ = new vs(t);
          this.size = s.size;
        }
        function eg() {
          this.__data__ = new vs(), this.size = 0;
        }
        function tg(t) {
          var s = this.__data__, u = s.delete(t);
          return this.size = s.size, u;
        }
        function ng(t) {
          return this.__data__.get(t);
        }
        function ig(t) {
          return this.__data__.has(t);
        }
        function rg(t, s) {
          var u = this.__data__;
          if (u instanceof vs) {
            var h = u.__data__;
            if (!Me || h.length < d - 1)
              return h.push([t, s]), this.size = ++u.size, this;
            u = this.__data__ = new ys(h);
          }
          return u.set(t, s), this.size = u.size, this;
        }
        Vr.prototype.clear = eg, Vr.prototype.delete = tg, Vr.prototype.get = ng, Vr.prototype.has = ig, Vr.prototype.set = rg;
        function $h(t, s) {
          var u = rt(t), h = !u && Oo(t), g = !u && !h && $s(t), S = !u && !h && !g && ra(t), O = u || h || g || S, D = O ? Ma(t.length, Cr) : [], M = D.length;
          for (var Q in t)
            (s || Tt.call(t, Q)) && !(O && // Safari 9 has enumerable `arguments.length` in strict mode.
            (Q == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            g && (Q == "offset" || Q == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            S && (Q == "buffer" || Q == "byteLength" || Q == "byteOffset") || // Skip index properties.
            Ss(Q, M))) && D.push(Q);
          return D;
        }
        function Jh(t) {
          var s = t.length;
          return s ? t[bc(0, s - 1)] : n;
        }
        function sg(t, s) {
          return _u(Ki(t), So(s, 0, t.length));
        }
        function og(t) {
          return _u(Ki(t));
        }
        function gc(t, s, u) {
          (u !== n && !zr(t[s], u) || u === n && !(s in t)) && Es(t, s, u);
        }
        function Za(t, s, u) {
          var h = t[s];
          (!(Tt.call(t, s) && zr(h, u)) || u === n && !(s in t)) && Es(t, s, u);
        }
        function nu(t, s) {
          for (var u = t.length; u--; )
            if (zr(t[u][0], s))
              return u;
          return -1;
        }
        function ag(t, s, u, h) {
          return Hs(t, function(g, S, O) {
            s(h, g, u(g), O);
          }), h;
        }
        function jh(t, s) {
          return t && ns(s, jn(s), t);
        }
        function lg(t, s) {
          return t && ns(s, Ji(s), t);
        }
        function Es(t, s, u) {
          s == "__proto__" && go ? go(t, s, {
            configurable: !0,
            enumerable: !0,
            value: u,
            writable: !0
          }) : t[s] = u;
        }
        function mc(t, s) {
          for (var u = -1, h = s.length, g = H(h), S = t == null; ++u < h; )
            g[u] = S ? n : jc(t, s[u]);
          return g;
        }
        function So(t, s, u) {
          return t === t && (u !== n && (t = t <= u ? t : u), s !== n && (t = t >= s ? t : s)), t;
        }
        function br(t, s, u, h, g, S) {
          var O, D = s & w, M = s & b, Q = s & N;
          if (u && (O = g ? u(t, h, g, S) : u(t)), O !== n)
            return O;
          if (!fn(t))
            return t;
          var ee = rt(t);
          if (ee) {
            if (O = Jg(t), !D)
              return Ki(t, O);
          } else {
            var oe = Ti(t), Ee = oe == Un || oe == Ui;
            if ($s(t))
              return Td(t, D);
            if (oe == un || oe == ke || Ee && !g) {
              if (O = M || Ee ? {} : Ud(t), !D)
                return M ? kg(t, lg(O, t)) : Gg(t, jh(O, t));
            } else {
              if (!At[oe])
                return g ? t : {};
              O = jg(t, oe, D);
            }
          }
          S || (S = new Vr());
          var Ne = S.get(t);
          if (Ne)
            return Ne;
          S.set(t, O), gf(t) ? t.forEach(function(ze) {
            O.add(br(ze, s, u, ze, t, S));
          }) : pf(t) && t.forEach(function(ze, _t) {
            O.set(_t, br(ze, s, u, _t, t, S));
          });
          var Ve = Q ? M ? Bc : Mc : M ? Ji : jn, ht = ee ? n : Ve(t);
          return Ri(ht || t, function(ze, _t) {
            ht && (_t = ze, ze = t[_t]), Za(O, _t, br(ze, s, u, _t, t, S));
          }), O;
        }
        function ug(t) {
          var s = jn(t);
          return function(u) {
            return Xh(u, t, s);
          };
        }
        function Xh(t, s, u) {
          var h = u.length;
          if (t == null)
            return !h;
          for (t = Mt(t); h--; ) {
            var g = u[h], S = s[g], O = t[g];
            if (O === n && !(g in t) || !S(O))
              return !1;
          }
          return !0;
        }
        function Qh(t, s, u) {
          if (typeof t != "function")
            throw new ai(_);
          return ja(function() {
            t.apply(n, u);
          }, s);
        }
        function Ha(t, s, u, h) {
          var g = -1, S = Fs, O = !0, D = t.length, M = [], Q = s.length;
          if (!D)
            return M;
          u && (s = Vt(s, Jt(u))), h ? (S = Na, O = !1) : s.length >= d && (S = uo, O = !1, s = new wo(s));
          e:
            for (; ++g < D; ) {
              var ee = t[g], oe = u == null ? ee : u(ee);
              if (ee = h || ee !== 0 ? ee : 0, O && oe === oe) {
                for (var Ee = Q; Ee--; )
                  if (s[Ee] === oe)
                    continue e;
                M.push(ee);
              } else S(s, oe, h) || M.push(ee);
            }
          return M;
        }
        var Hs = bd(ts), ed = bd(yc, !0);
        function cg(t, s) {
          var u = !0;
          return Hs(t, function(h, g, S) {
            return u = !!s(h, g, S), u;
          }), u;
        }
        function iu(t, s, u) {
          for (var h = -1, g = t.length; ++h < g; ) {
            var S = t[h], O = s(S);
            if (O != null && (D === n ? O === O && !ar(O) : u(O, D)))
              var D = O, M = S;
          }
          return M;
        }
        function hg(t, s, u, h) {
          var g = t.length;
          for (u = lt(u), u < 0 && (u = -u > g ? 0 : g + u), h = h === n || h > g ? g : lt(h), h < 0 && (h += g), h = u > h ? 0 : vf(h); u < h; )
            t[u++] = s;
          return t;
        }
        function td(t, s) {
          var u = [];
          return Hs(t, function(h, g, S) {
            s(h, g, S) && u.push(h);
          }), u;
        }
        function li(t, s, u, h, g) {
          var S = -1, O = t.length;
          for (u || (u = Qg), g || (g = []); ++S < O; ) {
            var D = t[S];
            s > 0 && u(D) ? s > 1 ? li(D, s - 1, u, h, g) : Br(g, D) : h || (g[g.length] = D);
          }
          return g;
        }
        var vc = Od(), nd = Od(!0);
        function ts(t, s) {
          return t && vc(t, s, jn);
        }
        function yc(t, s) {
          return t && nd(t, s, jn);
        }
        function ru(t, s) {
          return Mr(s, function(u) {
            return As(t[u]);
          });
        }
        function Ao(t, s) {
          s = qs(s, t);
          for (var u = 0, h = s.length; t != null && u < h; )
            t = t[is(s[u++])];
          return u && u == h ? t : n;
        }
        function id(t, s, u) {
          var h = s(t);
          return rt(t) ? h : Br(h, u(t));
        }
        function xi(t) {
          return t == null ? t === n ? zi : Vi : es && es in Mt(t) ? qg(t) : om(t);
        }
        function Ec(t, s) {
          return t > s;
        }
        function dg(t, s) {
          return t != null && Tt.call(t, s);
        }
        function fg(t, s) {
          return t != null && s in Mt(t);
        }
        function pg(t, s, u) {
          return t >= y(s, u) && t < f(s, u);
        }
        function Tc(t, s, u) {
          for (var h = u ? Na : Fs, g = t[0].length, S = t.length, O = S, D = H(S), M = 1 / 0, Q = []; O--; ) {
            var ee = t[O];
            O && s && (ee = Vt(ee, Jt(s))), M = y(ee.length, M), D[O] = !u && (s || g >= 120 && ee.length >= 120) ? new wo(O && ee) : n;
          }
          ee = t[0];
          var oe = -1, Ee = D[0];
          e:
            for (; ++oe < g && Q.length < M; ) {
              var Ne = ee[oe], Ve = s ? s(Ne) : Ne;
              if (Ne = u || Ne !== 0 ? Ne : 0, !(Ee ? uo(Ee, Ve) : h(Q, Ve, u))) {
                for (O = S; --O; ) {
                  var ht = D[O];
                  if (!(ht ? uo(ht, Ve) : h(t[O], Ve, u)))
                    continue e;
                }
                Ee && Ee.push(Ve), Q.push(Ne);
              }
            }
          return Q;
        }
        function _g(t, s, u, h) {
          return ts(t, function(g, S, O) {
            s(h, u(g), S, O);
          }), h;
        }
        function Ya(t, s, u) {
          s = qs(s, t), t = Zd(t, s);
          var h = t == null ? t : t[is(Lr(s))];
          return h == null ? n : nn(h, t, u);
        }
        function rd(t) {
          return yn(t) && xi(t) == ke;
        }
        function gg(t) {
          return yn(t) && xi(t) == gn;
        }
        function mg(t) {
          return yn(t) && xi(t) == Pn;
        }
        function qa(t, s, u, h, g) {
          return t === s ? !0 : t == null || s == null || !yn(t) && !yn(s) ? t !== t && s !== s : vg(t, s, u, h, qa, g);
        }
        function vg(t, s, u, h, g, S) {
          var O = rt(t), D = rt(s), M = O ? xe : Ti(t), Q = D ? xe : Ti(s);
          M = M == ke ? un : M, Q = Q == ke ? un : Q;
          var ee = M == un, oe = Q == un, Ee = M == Q;
          if (Ee && $s(t)) {
            if (!$s(s))
              return !1;
            O = !0, ee = !1;
          }
          if (Ee && !ee)
            return S || (S = new Vr()), O || ra(t) ? Bd(t, s, u, h, g, S) : Hg(t, s, M, u, h, g, S);
          if (!(u & k)) {
            var Ne = ee && Tt.call(t, "__wrapped__"), Ve = oe && Tt.call(s, "__wrapped__");
            if (Ne || Ve) {
              var ht = Ne ? t.value() : t, ze = Ve ? s.value() : s;
              return S || (S = new Vr()), g(ht, ze, u, h, S);
            }
          }
          return Ee ? (S || (S = new Vr()), Yg(t, s, u, h, g, S)) : !1;
        }
        function yg(t) {
          return yn(t) && Ti(t) == _n;
        }
        function wc(t, s, u, h) {
          var g = u.length, S = g, O = !h;
          if (t == null)
            return !S;
          for (t = Mt(t); g--; ) {
            var D = u[g];
            if (O && D[2] ? D[1] !== t[D[0]] : !(D[0] in t))
              return !1;
          }
          for (; ++g < S; ) {
            D = u[g];
            var M = D[0], Q = t[M], ee = D[1];
            if (O && D[2]) {
              if (Q === n && !(M in t))
                return !1;
            } else {
              var oe = new Vr();
              if (h)
                var Ee = h(Q, ee, M, t, s, oe);
              if (!(Ee === n ? qa(ee, Q, k | G, h, oe) : Ee))
                return !1;
            }
          }
          return !0;
        }
        function sd(t) {
          if (!fn(t) || tm(t))
            return !1;
          var s = As(t) ? kr : si;
          return s.test(bo(t));
        }
        function Eg(t) {
          return yn(t) && xi(t) == Kn;
        }
        function Tg(t) {
          return yn(t) && Ti(t) == en;
        }
        function wg(t) {
          return yn(t) && Tu(t.length) && !!it[xi(t)];
        }
        function od(t) {
          return typeof t == "function" ? t : t == null ? ji : typeof t == "object" ? rt(t) ? ud(t[0], t[1]) : ld(t) : If(t);
        }
        function Sc(t) {
          if (!Ja(t))
            return c(t);
          var s = [];
          for (var u in Mt(t))
            Tt.call(t, u) && u != "constructor" && s.push(u);
          return s;
        }
        function Sg(t) {
          if (!fn(t))
            return sm(t);
          var s = Ja(t), u = [];
          for (var h in t)
            h == "constructor" && (s || !Tt.call(t, h)) || u.push(h);
          return u;
        }
        function Ac(t, s) {
          return t < s;
        }
        function ad(t, s) {
          var u = -1, h = $i(t) ? H(t.length) : [];
          return Hs(t, function(g, S, O) {
            h[++u] = s(g, S, O);
          }), h;
        }
        function ld(t) {
          var s = kc(t);
          return s.length == 1 && s[0][2] ? zd(s[0][0], s[0][1]) : function(u) {
            return u === t || wc(u, t, s);
          };
        }
        function ud(t, s) {
          return Vc(t) && Vd(s) ? zd(is(t), s) : function(u) {
            var h = jc(u, t);
            return h === n && h === s ? Xc(u, t) : qa(s, h, k | G);
          };
        }
        function su(t, s, u, h, g) {
          t !== s && vc(s, function(S, O) {
            if (g || (g = new Vr()), fn(S))
              Ag(t, s, O, u, su, h, g);
            else {
              var D = h ? h(Wc(t, O), S, O + "", t, s, g) : n;
              D === n && (D = S), gc(t, O, D);
            }
          }, Ji);
        }
        function Ag(t, s, u, h, g, S, O) {
          var D = Wc(t, u), M = Wc(s, u), Q = O.get(M);
          if (Q) {
            gc(t, u, Q);
            return;
          }
          var ee = S ? S(D, M, u + "", t, s, O) : n, oe = ee === n;
          if (oe) {
            var Ee = rt(M), Ne = !Ee && $s(M), Ve = !Ee && !Ne && ra(M);
            ee = M, Ee || Ne || Ve ? rt(D) ? ee = D : In(D) ? ee = Ki(D) : Ne ? (oe = !1, ee = Td(M, !0)) : Ve ? (oe = !1, ee = wd(M, !0)) : ee = [] : Xa(M) || Oo(M) ? (ee = D, Oo(D) ? ee = yf(D) : (!fn(D) || As(D)) && (ee = Ud(M))) : oe = !1;
          }
          oe && (O.set(M, ee), g(ee, M, h, S, O), O.delete(M)), gc(t, u, ee);
        }
        function cd(t, s) {
          var u = t.length;
          if (u)
            return s += s < 0 ? u : 0, Ss(s, u) ? t[s] : n;
        }
        function hd(t, s, u) {
          s.length ? s = Vt(s, function(S) {
            return rt(S) ? function(O) {
              return Ao(O, S.length === 1 ? S[0] : S);
            } : S;
          }) : s = [ji];
          var h = -1;
          s = Vt(s, Jt(Ue()));
          var g = ad(t, function(S, O, D) {
            var M = Vt(s, function(Q) {
              return Q(S);
            });
            return { criteria: M, index: ++h, value: S };
          });
          return xa(g, function(S, O) {
            return Bg(S, O, u);
          });
        }
        function Cg(t, s) {
          return dd(t, s, function(u, h) {
            return Xc(t, h);
          });
        }
        function dd(t, s, u) {
          for (var h = -1, g = s.length, S = {}; ++h < g; ) {
            var O = s[h], D = Ao(t, O);
            u(D, O) && Ka(S, qs(O, t), D);
          }
          return S;
        }
        function bg(t) {
          return function(s) {
            return Ao(s, t);
          };
        }
        function Cc(t, s, u, h) {
          var g = h ? lo : Ms, S = -1, O = s.length, D = t;
          for (t === s && (s = Ki(s)), u && (D = Vt(t, Jt(u))); ++S < O; )
            for (var M = 0, Q = s[S], ee = u ? u(Q) : Q; (M = g(D, ee, M, h)) > -1; )
              D !== t && _o.call(D, M, 1), _o.call(t, M, 1);
          return t;
        }
        function fd(t, s) {
          for (var u = t ? s.length : 0, h = u - 1; u--; ) {
            var g = s[u];
            if (u == h || g !== S) {
              var S = g;
              Ss(g) ? _o.call(t, g, 1) : Ic(t, g);
            }
          }
          return t;
        }
        function bc(t, s) {
          return t + vo(W() * (s - t + 1));
        }
        function Og(t, s, u, h) {
          for (var g = -1, S = f(mo((s - t) / (u || 1)), 0), O = H(S); S--; )
            O[h ? S : ++g] = t, t += u;
          return O;
        }
        function Oc(t, s) {
          var u = "";
          if (!t || s < 1 || s > _e)
            return u;
          do
            s % 2 && (u += t), s = vo(s / 2), s && (t += t);
          while (s);
          return u;
        }
        function pt(t, s) {
          return Zc(Wd(t, s, ji), t + "");
        }
        function Lg(t) {
          return Jh(sa(t));
        }
        function Ig(t, s) {
          var u = sa(t);
          return _u(u, So(s, 0, u.length));
        }
        function Ka(t, s, u, h) {
          if (!fn(t))
            return t;
          s = qs(s, t);
          for (var g = -1, S = s.length, O = S - 1, D = t; D != null && ++g < S; ) {
            var M = is(s[g]), Q = u;
            if (M === "__proto__" || M === "constructor" || M === "prototype")
              return t;
            if (g != O) {
              var ee = D[M];
              Q = h ? h(ee, M, D) : n, Q === n && (Q = fn(ee) ? ee : Ss(s[g + 1]) ? [] : {});
            }
            Za(D, M, Q), D = D[M];
          }
          return t;
        }
        var pd = Wn ? function(t, s) {
          return Wn.set(t, s), t;
        } : ji, Ng = go ? function(t, s) {
          return go(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: eh(s),
            writable: !0
          });
        } : ji;
        function Dg(t) {
          return _u(sa(t));
        }
        function Or(t, s, u) {
          var h = -1, g = t.length;
          s < 0 && (s = -s > g ? 0 : g + s), u = u > g ? g : u, u < 0 && (u += g), g = s > u ? 0 : u - s >>> 0, s >>>= 0;
          for (var S = H(g); ++h < g; )
            S[h] = t[h + s];
          return S;
        }
        function Rg(t, s) {
          var u;
          return Hs(t, function(h, g, S) {
            return u = s(h, g, S), !u;
          }), !!u;
        }
        function ou(t, s, u) {
          var h = 0, g = t == null ? h : t.length;
          if (typeof s == "number" && s === s && g <= gt) {
            for (; h < g; ) {
              var S = h + g >>> 1, O = t[S];
              O !== null && !ar(O) && (u ? O <= s : O < s) ? h = S + 1 : g = S;
            }
            return g;
          }
          return Lc(t, s, ji, u);
        }
        function Lc(t, s, u, h) {
          var g = 0, S = t == null ? 0 : t.length;
          if (S === 0)
            return 0;
          s = u(s);
          for (var O = s !== s, D = s === null, M = ar(s), Q = s === n; g < S; ) {
            var ee = vo((g + S) / 2), oe = u(t[ee]), Ee = oe !== n, Ne = oe === null, Ve = oe === oe, ht = ar(oe);
            if (O)
              var ze = h || Ve;
            else Q ? ze = Ve && (h || Ee) : D ? ze = Ve && Ee && (h || !Ne) : M ? ze = Ve && Ee && !Ne && (h || !ht) : Ne || ht ? ze = !1 : ze = h ? oe <= s : oe < s;
            ze ? g = ee + 1 : S = ee;
          }
          return y(S, He);
        }
        function _d(t, s) {
          for (var u = -1, h = t.length, g = 0, S = []; ++u < h; ) {
            var O = t[u], D = s ? s(O) : O;
            if (!u || !zr(D, M)) {
              var M = D;
              S[g++] = O === 0 ? 0 : O;
            }
          }
          return S;
        }
        function gd(t) {
          return typeof t == "number" ? t : ar(t) ? J : +t;
        }
        function or(t) {
          if (typeof t == "string")
            return t;
          if (rt(t))
            return Vt(t, or) + "";
          if (ar(t))
            return Eo ? Eo.call(t) : "";
          var s = t + "";
          return s == "0" && 1 / t == -Pe ? "-0" : s;
        }
        function Ys(t, s, u) {
          var h = -1, g = Fs, S = t.length, O = !0, D = [], M = D;
          if (u)
            O = !1, g = Na;
          else if (S >= d) {
            var Q = s ? null : Wg(t);
            if (Q)
              return qi(Q);
            O = !1, g = uo, M = new wo();
          } else
            M = s ? [] : D;
          e:
            for (; ++h < S; ) {
              var ee = t[h], oe = s ? s(ee) : ee;
              if (ee = u || ee !== 0 ? ee : 0, O && oe === oe) {
                for (var Ee = M.length; Ee--; )
                  if (M[Ee] === oe)
                    continue e;
                s && M.push(oe), D.push(ee);
              } else g(M, oe, u) || (M !== D && M.push(oe), D.push(ee));
            }
          return D;
        }
        function Ic(t, s) {
          return s = qs(s, t), t = Zd(t, s), t == null || delete t[is(Lr(s))];
        }
        function md(t, s, u, h) {
          return Ka(t, s, u(Ao(t, s)), h);
        }
        function au(t, s, u, h) {
          for (var g = t.length, S = h ? g : -1; (h ? S-- : ++S < g) && s(t[S], S, t); )
            ;
          return u ? Or(t, h ? 0 : S, h ? S + 1 : g) : Or(t, h ? S + 1 : 0, h ? g : S);
        }
        function vd(t, s) {
          var u = t;
          return u instanceof ft && (u = u.value()), Da(s, function(h, g) {
            return g.func.apply(g.thisArg, Br([h], g.args));
          }, u);
        }
        function Nc(t, s, u) {
          var h = t.length;
          if (h < 2)
            return h ? Ys(t[0]) : [];
          for (var g = -1, S = H(h); ++g < h; )
            for (var O = t[g], D = -1; ++D < h; )
              D != g && (S[g] = Ha(S[g] || O, t[D], s, u));
          return Ys(li(S, 1), s, u);
        }
        function yd(t, s, u) {
          for (var h = -1, g = t.length, S = s.length, O = {}; ++h < g; ) {
            var D = h < S ? s[h] : n;
            u(O, t[h], D);
          }
          return O;
        }
        function Dc(t) {
          return In(t) ? t : [];
        }
        function Rc(t) {
          return typeof t == "function" ? t : ji;
        }
        function qs(t, s) {
          return rt(t) ? t : Vc(t, s) ? [t] : Kd(Bt(t));
        }
        var Pg = pt;
        function Ks(t, s, u) {
          var h = t.length;
          return u = u === n ? h : u, !s && u >= h ? t : Or(t, s, u);
        }
        var Ed = Ql || function(t) {
          return zn.clearTimeout(t);
        };
        function Td(t, s) {
          if (s)
            return t.slice();
          var u = t.length, h = jl ? jl(u) : new t.constructor(u);
          return t.copy(h), h;
        }
        function Pc(t) {
          var s = new t.constructor(t.byteLength);
          return new Qr(s).set(new Qr(t)), s;
        }
        function xg(t, s) {
          var u = s ? Pc(t.buffer) : t.buffer;
          return new t.constructor(u, t.byteOffset, t.byteLength);
        }
        function Fg(t) {
          var s = new t.constructor(t.source, ct.exec(t));
          return s.lastIndex = t.lastIndex, s;
        }
        function Mg(t) {
          return Zt ? Mt(Zt.call(t)) : {};
        }
        function wd(t, s) {
          var u = s ? Pc(t.buffer) : t.buffer;
          return new t.constructor(u, t.byteOffset, t.length);
        }
        function Sd(t, s) {
          if (t !== s) {
            var u = t !== n, h = t === null, g = t === t, S = ar(t), O = s !== n, D = s === null, M = s === s, Q = ar(s);
            if (!D && !Q && !S && t > s || S && O && M && !D && !Q || h && O && M || !u && M || !g)
              return 1;
            if (!h && !S && !Q && t < s || Q && u && g && !h && !S || D && u && g || !O && g || !M)
              return -1;
          }
          return 0;
        }
        function Bg(t, s, u) {
          for (var h = -1, g = t.criteria, S = s.criteria, O = g.length, D = u.length; ++h < O; ) {
            var M = Sd(g[h], S[h]);
            if (M) {
              if (h >= D)
                return M;
              var Q = u[h];
              return M * (Q == "desc" ? -1 : 1);
            }
          }
          return t.index - s.index;
        }
        function Ad(t, s, u, h) {
          for (var g = -1, S = t.length, O = u.length, D = -1, M = s.length, Q = f(S - O, 0), ee = H(M + Q), oe = !h; ++D < M; )
            ee[D] = s[D];
          for (; ++g < O; )
            (oe || g < S) && (ee[u[g]] = t[g]);
          for (; Q--; )
            ee[D++] = t[g++];
          return ee;
        }
        function Cd(t, s, u, h) {
          for (var g = -1, S = t.length, O = -1, D = u.length, M = -1, Q = s.length, ee = f(S - D, 0), oe = H(ee + Q), Ee = !h; ++g < ee; )
            oe[g] = t[g];
          for (var Ne = g; ++M < Q; )
            oe[Ne + M] = s[M];
          for (; ++O < D; )
            (Ee || g < S) && (oe[Ne + u[O]] = t[g++]);
          return oe;
        }
        function Ki(t, s) {
          var u = -1, h = t.length;
          for (s || (s = H(h)); ++u < h; )
            s[u] = t[u];
          return s;
        }
        function ns(t, s, u, h) {
          var g = !u;
          u || (u = {});
          for (var S = -1, O = s.length; ++S < O; ) {
            var D = s[S], M = h ? h(u[D], t[D], D, u, t) : n;
            M === n && (M = t[D]), g ? Es(u, D, M) : Za(u, D, M);
          }
          return u;
        }
        function Gg(t, s) {
          return ns(t, Uc(t), s);
        }
        function kg(t, s) {
          return ns(t, Gd(t), s);
        }
        function lu(t, s) {
          return function(u, h) {
            var g = rt(u) ? nc : ag, S = s ? s() : {};
            return g(u, t, Ue(h, 2), S);
          };
        }
        function ta(t) {
          return pt(function(s, u) {
            var h = -1, g = u.length, S = g > 1 ? u[g - 1] : n, O = g > 2 ? u[2] : n;
            for (S = t.length > 3 && typeof S == "function" ? (g--, S) : n, O && Fi(u[0], u[1], O) && (S = g < 3 ? n : S, g = 1), s = Mt(s); ++h < g; ) {
              var D = u[h];
              D && t(s, D, h, S);
            }
            return s;
          });
        }
        function bd(t, s) {
          return function(u, h) {
            if (u == null)
              return u;
            if (!$i(u))
              return t(u, h);
            for (var g = u.length, S = s ? g : -1, O = Mt(u); (s ? S-- : ++S < g) && h(O[S], S, O) !== !1; )
              ;
            return u;
          };
        }
        function Od(t) {
          return function(s, u, h) {
            for (var g = -1, S = Mt(s), O = h(s), D = O.length; D--; ) {
              var M = O[t ? D : ++g];
              if (u(S[M], M, S) === !1)
                break;
            }
            return s;
          };
        }
        function Ug(t, s, u) {
          var h = s & X, g = $a(t);
          function S() {
            var O = this && this !== zn && this instanceof S ? g : t;
            return O.apply(h ? u : this, arguments);
          }
          return S;
        }
        function Ld(t) {
          return function(s) {
            s = Bt(s);
            var u = Gs(s) ? yi(s) : n, h = u ? u[0] : s.charAt(0), g = u ? Ks(u, 1).join("") : s.slice(1);
            return h[t]() + g;
          };
        }
        function na(t) {
          return function(s) {
            return Da(Of(bf(s).replace(Gt, "")), t, "");
          };
        }
        function $a(t) {
          return function() {
            var s = arguments;
            switch (s.length) {
              case 0:
                return new t();
              case 1:
                return new t(s[0]);
              case 2:
                return new t(s[0], s[1]);
              case 3:
                return new t(s[0], s[1], s[2]);
              case 4:
                return new t(s[0], s[1], s[2], s[3]);
              case 5:
                return new t(s[0], s[1], s[2], s[3], s[4]);
              case 6:
                return new t(s[0], s[1], s[2], s[3], s[4], s[5]);
              case 7:
                return new t(s[0], s[1], s[2], s[3], s[4], s[5], s[6]);
            }
            var u = Zs(t.prototype), h = t.apply(u, s);
            return fn(h) ? h : u;
          };
        }
        function Vg(t, s, u) {
          var h = $a(t);
          function g() {
            for (var S = arguments.length, O = H(S), D = S, M = ia(g); D--; )
              O[D] = arguments[D];
            var Q = S < 3 && O[0] !== M && O[S - 1] !== M ? [] : Xr(O, M);
            if (S -= Q.length, S < u)
              return Pd(
                t,
                s,
                uu,
                g.placeholder,
                n,
                O,
                Q,
                n,
                n,
                u - S
              );
            var ee = this && this !== zn && this instanceof g ? h : t;
            return nn(ee, this, O);
          }
          return g;
        }
        function Id(t) {
          return function(s, u, h) {
            var g = Mt(s);
            if (!$i(s)) {
              var S = Ue(u, 3);
              s = jn(s), u = function(D) {
                return S(g[D], D, g);
              };
            }
            var O = t(s, u, h);
            return O > -1 ? g[S ? s[O] : O] : n;
          };
        }
        function Nd(t) {
          return ws(function(s) {
            var u = s.length, h = u, g = Ei.prototype.thru;
            for (t && s.reverse(); h--; ) {
              var S = s[h];
              if (typeof S != "function")
                throw new ai(_);
              if (g && !O && fu(S) == "wrapper")
                var O = new Ei([], !0);
            }
            for (h = O ? h : u; ++h < u; ) {
              S = s[h];
              var D = fu(S), M = D == "wrapper" ? Gc(S) : n;
              M && zc(M[0]) && M[1] == (we | Y | q | Le) && !M[4].length && M[9] == 1 ? O = O[fu(M[0])].apply(O, M[3]) : O = S.length == 1 && zc(S) ? O[D]() : O.thru(S);
            }
            return function() {
              var Q = arguments, ee = Q[0];
              if (O && Q.length == 1 && rt(ee))
                return O.plant(ee).value();
              for (var oe = 0, Ee = u ? s[oe].apply(this, Q) : ee; ++oe < u; )
                Ee = s[oe].call(this, Ee);
              return Ee;
            };
          });
        }
        function uu(t, s, u, h, g, S, O, D, M, Q) {
          var ee = s & we, oe = s & X, Ee = s & x, Ne = s & (Y | R), Ve = s & te, ht = Ee ? n : $a(t);
          function ze() {
            for (var _t = arguments.length, wt = H(_t), lr = _t; lr--; )
              wt[lr] = arguments[lr];
            if (Ne)
              var Mi = ia(ze), ur = Bs(wt, Mi);
            if (h && (wt = Ad(wt, h, g, Ne)), S && (wt = Cd(wt, S, O, Ne)), _t -= ur, Ne && _t < Q) {
              var Nn = Xr(wt, Mi);
              return Pd(
                t,
                s,
                uu,
                ze.placeholder,
                u,
                wt,
                Nn,
                D,
                M,
                Q - _t
              );
            }
            var Wr = oe ? u : this, bs = Ee ? Wr[t] : t;
            return _t = wt.length, D ? wt = am(wt, D) : Ve && _t > 1 && wt.reverse(), ee && M < _t && (wt.length = M), this && this !== zn && this instanceof ze && (bs = ht || $a(bs)), bs.apply(Wr, wt);
          }
          return ze;
        }
        function Dd(t, s) {
          return function(u, h) {
            return _g(u, t, s(h), {});
          };
        }
        function cu(t, s) {
          return function(u, h) {
            var g;
            if (u === n && h === n)
              return s;
            if (u !== n && (g = u), h !== n) {
              if (g === n)
                return h;
              typeof u == "string" || typeof h == "string" ? (u = or(u), h = or(h)) : (u = gd(u), h = gd(h)), g = t(u, h);
            }
            return g;
          };
        }
        function xc(t) {
          return ws(function(s) {
            return s = Vt(s, Jt(Ue())), pt(function(u) {
              var h = this;
              return t(s, function(g) {
                return nn(g, h, u);
              });
            });
          });
        }
        function hu(t, s) {
          s = s === n ? " " : or(s);
          var u = s.length;
          if (u < 2)
            return u ? Oc(s, t) : s;
          var h = Oc(s, mo(t / vi(s)));
          return Gs(s) ? Ks(yi(h), 0, t).join("") : h.slice(0, t);
        }
        function zg(t, s, u, h) {
          var g = s & X, S = $a(t);
          function O() {
            for (var D = -1, M = arguments.length, Q = -1, ee = h.length, oe = H(ee + M), Ee = this && this !== zn && this instanceof O ? S : t; ++Q < ee; )
              oe[Q] = h[Q];
            for (; M--; )
              oe[Q++] = arguments[++D];
            return nn(Ee, g ? u : this, oe);
          }
          return O;
        }
        function Rd(t) {
          return function(s, u, h) {
            return h && typeof h != "number" && Fi(s, u, h) && (u = h = n), s = Cs(s), u === n ? (u = s, s = 0) : u = Cs(u), h = h === n ? s < u ? 1 : -1 : Cs(h), Og(s, u, h, t);
          };
        }
        function du(t) {
          return function(s, u) {
            return typeof s == "string" && typeof u == "string" || (s = Ir(s), u = Ir(u)), t(s, u);
          };
        }
        function Pd(t, s, u, h, g, S, O, D, M, Q) {
          var ee = s & Y, oe = ee ? O : n, Ee = ee ? n : O, Ne = ee ? S : n, Ve = ee ? n : S;
          s |= ee ? q : ce, s &= ~(ee ? ce : q), s & z || (s &= -4);
          var ht = [
            t,
            s,
            g,
            Ne,
            oe,
            Ve,
            Ee,
            D,
            M,
            Q
          ], ze = u.apply(n, ht);
          return zc(t) && Hd(ze, ht), ze.placeholder = h, Yd(ze, t, s);
        }
        function Fc(t) {
          var s = Ln[t];
          return function(u, h) {
            if (u = Ir(u), h = h == null ? 0 : y(lt(h), 292), h && r(u)) {
              var g = (Bt(u) + "e").split("e"), S = s(g[0] + "e" + (+g[1] + h));
              return g = (Bt(S) + "e").split("e"), +(g[0] + "e" + (+g[1] - h));
            }
            return s(u);
          };
        }
        var Wg = vn && 1 / qi(new vn([, -0]))[1] == Pe ? function(t) {
          return new vn(t);
        } : ih;
        function xd(t) {
          return function(s) {
            var u = Ti(s);
            return u == _n ? Ba(s) : u == en ? oc(s) : Yl(s, t(s));
          };
        }
        function Ts(t, s, u, h, g, S, O, D) {
          var M = s & x;
          if (!M && typeof t != "function")
            throw new ai(_);
          var Q = h ? h.length : 0;
          if (Q || (s &= -97, h = g = n), O = O === n ? O : f(lt(O), 0), D = D === n ? D : lt(D), Q -= g ? g.length : 0, s & ce) {
            var ee = h, oe = g;
            h = g = n;
          }
          var Ee = M ? n : Gc(t), Ne = [
            t,
            s,
            u,
            h,
            g,
            ee,
            oe,
            S,
            O,
            D
          ];
          if (Ee && rm(Ne, Ee), t = Ne[0], s = Ne[1], u = Ne[2], h = Ne[3], g = Ne[4], D = Ne[9] = Ne[9] === n ? M ? 0 : t.length : f(Ne[9] - Q, 0), !D && s & (Y | R) && (s &= -25), !s || s == X)
            var Ve = Ug(t, s, u);
          else s == Y || s == R ? Ve = Vg(t, s, D) : (s == q || s == (X | q)) && !g.length ? Ve = zg(t, s, u, h) : Ve = uu.apply(n, Ne);
          var ht = Ee ? pd : Hd;
          return Yd(ht(Ve, Ne), t, s);
        }
        function Fd(t, s, u, h) {
          return t === n || zr(t, Vs[u]) && !Tt.call(h, u) ? s : t;
        }
        function Md(t, s, u, h, g, S) {
          return fn(t) && fn(s) && (S.set(s, t), su(t, s, n, Md, S), S.delete(s)), t;
        }
        function Zg(t) {
          return Xa(t) ? n : t;
        }
        function Bd(t, s, u, h, g, S) {
          var O = u & k, D = t.length, M = s.length;
          if (D != M && !(O && M > D))
            return !1;
          var Q = S.get(t), ee = S.get(s);
          if (Q && ee)
            return Q == s && ee == t;
          var oe = -1, Ee = !0, Ne = u & G ? new wo() : n;
          for (S.set(t, s), S.set(s, t); ++oe < D; ) {
            var Ve = t[oe], ht = s[oe];
            if (h)
              var ze = O ? h(ht, Ve, oe, s, t, S) : h(Ve, ht, oe, t, s, S);
            if (ze !== n) {
              if (ze)
                continue;
              Ee = !1;
              break;
            }
            if (Ne) {
              if (!oo(s, function(_t, wt) {
                if (!uo(Ne, wt) && (Ve === _t || g(Ve, _t, u, h, S)))
                  return Ne.push(wt);
              })) {
                Ee = !1;
                break;
              }
            } else if (!(Ve === ht || g(Ve, ht, u, h, S))) {
              Ee = !1;
              break;
            }
          }
          return S.delete(t), S.delete(s), Ee;
        }
        function Hg(t, s, u, h, g, S, O) {
          switch (u) {
            case ei:
              if (t.byteLength != s.byteLength || t.byteOffset != s.byteOffset)
                return !1;
              t = t.buffer, s = s.buffer;
            case gn:
              return !(t.byteLength != s.byteLength || !S(new Qr(t), new Qr(s)));
            case Qt:
            case Pn:
            case zt:
              return zr(+t, +s);
            case qn:
              return t.name == s.name && t.message == s.message;
            case Kn:
            case Qn:
              return t == s + "";
            case _n:
              var D = Ba;
            case en:
              var M = h & k;
              if (D || (D = qi), t.size != s.size && !M)
                return !1;
              var Q = O.get(t);
              if (Q)
                return Q == s;
              h |= G, O.set(t, s);
              var ee = Bd(D(t), D(s), h, g, S, O);
              return O.delete(t), ee;
            case xn:
              if (Zt)
                return Zt.call(t) == Zt.call(s);
          }
          return !1;
        }
        function Yg(t, s, u, h, g, S) {
          var O = u & k, D = Mc(t), M = D.length, Q = Mc(s), ee = Q.length;
          if (M != ee && !O)
            return !1;
          for (var oe = M; oe--; ) {
            var Ee = D[oe];
            if (!(O ? Ee in s : Tt.call(s, Ee)))
              return !1;
          }
          var Ne = S.get(t), Ve = S.get(s);
          if (Ne && Ve)
            return Ne == s && Ve == t;
          var ht = !0;
          S.set(t, s), S.set(s, t);
          for (var ze = O; ++oe < M; ) {
            Ee = D[oe];
            var _t = t[Ee], wt = s[Ee];
            if (h)
              var lr = O ? h(wt, _t, Ee, s, t, S) : h(_t, wt, Ee, t, s, S);
            if (!(lr === n ? _t === wt || g(_t, wt, u, h, S) : lr)) {
              ht = !1;
              break;
            }
            ze || (ze = Ee == "constructor");
          }
          if (ht && !ze) {
            var Mi = t.constructor, ur = s.constructor;
            Mi != ur && "constructor" in t && "constructor" in s && !(typeof Mi == "function" && Mi instanceof Mi && typeof ur == "function" && ur instanceof ur) && (ht = !1);
          }
          return S.delete(t), S.delete(s), ht;
        }
        function ws(t) {
          return Zc(Wd(t, n, Xd), t + "");
        }
        function Mc(t) {
          return id(t, jn, Uc);
        }
        function Bc(t) {
          return id(t, Ji, Gd);
        }
        var Gc = Wn ? function(t) {
          return Wn.get(t);
        } : ih;
        function fu(t) {
          for (var s = t.name + "", u = sr[s], h = Tt.call(sr, s) ? u.length : 0; h--; ) {
            var g = u[h], S = g.func;
            if (S == null || S == t)
              return g.name;
          }
          return s;
        }
        function ia(t) {
          var s = Tt.call(T, "placeholder") ? T : t;
          return s.placeholder;
        }
        function Ue() {
          var t = T.iteratee || th;
          return t = t === th ? od : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function pu(t, s) {
          var u = t.__data__;
          return em(s) ? u[typeof s == "string" ? "string" : "hash"] : u.map;
        }
        function kc(t) {
          for (var s = jn(t), u = s.length; u--; ) {
            var h = s[u], g = t[h];
            s[u] = [h, g, Vd(g)];
          }
          return s;
        }
        function Co(t, s) {
          var u = Yo(t, s);
          return sd(u) ? u : n;
        }
        function qg(t) {
          var s = Tt.call(t, es), u = t[es];
          try {
            t[es] = n;
            var h = !0;
          } catch {
          }
          var g = fo.call(t);
          return h && (s ? t[es] = u : delete t[es]), g;
        }
        var Uc = Wa ? function(t) {
          return t == null ? [] : (t = Mt(t), Mr(Wa(t), function(s) {
            return za.call(t, s);
          }));
        } : rh, Gd = Wa ? function(t) {
          for (var s = []; t; )
            Br(s, Uc(t)), t = ms(t);
          return s;
        } : rh, Ti = xi;
        (Se && Ti(new Se(new ArrayBuffer(1))) != ei || Me && Ti(new Me()) != _n || ot && Ti(ot.resolve()) != cn || vn && Ti(new vn()) != en || rn && Ti(new rn()) != Vn) && (Ti = function(t) {
          var s = xi(t), u = s == un ? t.constructor : n, h = u ? bo(u) : "";
          if (h)
            switch (h) {
              case hc:
                return ei;
              case dc:
                return _n;
              case fc:
                return cn;
              case tu:
                return en;
              case pc:
                return Vn;
            }
          return s;
        });
        function Kg(t, s, u) {
          for (var h = -1, g = u.length; ++h < g; ) {
            var S = u[h], O = S.size;
            switch (S.type) {
              case "drop":
                t += O;
                break;
              case "dropRight":
                s -= O;
                break;
              case "take":
                s = y(s, t + O);
                break;
              case "takeRight":
                t = f(t, s - O);
                break;
            }
          }
          return { start: t, end: s };
        }
        function $g(t) {
          var s = t.match(ri);
          return s ? s[1].split(Hi) : [];
        }
        function kd(t, s, u) {
          s = qs(s, t);
          for (var h = -1, g = s.length, S = !1; ++h < g; ) {
            var O = is(s[h]);
            if (!(S = t != null && u(t, O)))
              break;
            t = t[O];
          }
          return S || ++h != g ? S : (g = t == null ? 0 : t.length, !!g && Tu(g) && Ss(O, g) && (rt(t) || Oo(t)));
        }
        function Jg(t) {
          var s = t.length, u = new t.constructor(s);
          return s && typeof t[0] == "string" && Tt.call(t, "index") && (u.index = t.index, u.input = t.input), u;
        }
        function Ud(t) {
          return typeof t.constructor == "function" && !Ja(t) ? Zs(ms(t)) : {};
        }
        function jg(t, s, u) {
          var h = t.constructor;
          switch (s) {
            case gn:
              return Pc(t);
            case Qt:
            case Pn:
              return new h(+t);
            case ei:
              return xg(t, u);
            case bi:
            case Oi:
            case di:
            case Fn:
            case Wi:
            case fi:
            case ti:
            case An:
            case ni:
              return wd(t, u);
            case _n:
              return new h();
            case zt:
            case Qn:
              return new h(t);
            case Kn:
              return Fg(t);
            case en:
              return new h();
            case xn:
              return Mg(t);
          }
        }
        function Xg(t, s) {
          var u = s.length;
          if (!u)
            return t;
          var h = u - 1;
          return s[h] = (u > 1 ? "& " : "") + s[h], s = s.join(u > 2 ? ", " : " "), t.replace(me, `{
/* [wrapped with ` + s + `] */
`);
        }
        function Qg(t) {
          return rt(t) || Oo(t) || !!(Xl && t && t[Xl]);
        }
        function Ss(t, s) {
          var u = typeof t;
          return s = s ?? _e, !!s && (u == "number" || u != "symbol" && On.test(t)) && t > -1 && t % 1 == 0 && t < s;
        }
        function Fi(t, s, u) {
          if (!fn(u))
            return !1;
          var h = typeof s;
          return (h == "number" ? $i(u) && Ss(s, u.length) : h == "string" && s in u) ? zr(u[s], t) : !1;
        }
        function Vc(t, s) {
          if (rt(t))
            return !1;
          var u = typeof t;
          return u == "number" || u == "symbol" || u == "boolean" || t == null || ar(t) ? !0 : tt.test(t) || !Fe.test(t) || s != null && t in Mt(s);
        }
        function em(t) {
          var s = typeof t;
          return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? t !== "__proto__" : t === null;
        }
        function zc(t) {
          var s = fu(t), u = T[s];
          if (typeof u != "function" || !(s in ft.prototype))
            return !1;
          if (t === u)
            return !0;
          var h = Gc(u);
          return !!h && t === h[0];
        }
        function tm(t) {
          return !!gs && gs in t;
        }
        var nm = ho ? As : sh;
        function Ja(t) {
          var s = t && t.constructor, u = typeof s == "function" && s.prototype || Vs;
          return t === u;
        }
        function Vd(t) {
          return t === t && !fn(t);
        }
        function zd(t, s) {
          return function(u) {
            return u == null ? !1 : u[t] === s && (s !== n || t in Mt(u));
          };
        }
        function im(t) {
          var s = yu(t, function(h) {
            return u.size === E && u.clear(), h;
          }), u = s.cache;
          return s;
        }
        function rm(t, s) {
          var u = t[1], h = s[1], g = u | h, S = g < (X | x | we), O = h == we && u == Y || h == we && u == Le && t[7].length <= s[8] || h == (we | Le) && s[7].length <= s[8] && u == Y;
          if (!(S || O))
            return t;
          h & X && (t[2] = s[2], g |= u & X ? 0 : z);
          var D = s[3];
          if (D) {
            var M = t[3];
            t[3] = M ? Ad(M, D, s[4]) : D, t[4] = M ? Xr(t[3], A) : s[4];
          }
          return D = s[5], D && (M = t[5], t[5] = M ? Cd(M, D, s[6]) : D, t[6] = M ? Xr(t[5], A) : s[6]), D = s[7], D && (t[7] = D), h & we && (t[8] = t[8] == null ? s[8] : y(t[8], s[8])), t[9] == null && (t[9] = s[9]), t[0] = s[0], t[1] = g, t;
        }
        function sm(t) {
          var s = [];
          if (t != null)
            for (var u in Mt(t))
              s.push(u);
          return s;
        }
        function om(t) {
          return fo.call(t);
        }
        function Wd(t, s, u) {
          return s = f(s === n ? t.length - 1 : s, 0), function() {
            for (var h = arguments, g = -1, S = f(h.length - s, 0), O = H(S); ++g < S; )
              O[g] = h[s + g];
            g = -1;
            for (var D = H(s + 1); ++g < s; )
              D[g] = h[g];
            return D[s] = u(O), nn(t, this, D);
          };
        }
        function Zd(t, s) {
          return s.length < 2 ? t : Ao(t, Or(s, 0, -1));
        }
        function am(t, s) {
          for (var u = t.length, h = y(s.length, u), g = Ki(t); h--; ) {
            var S = s[h];
            t[h] = Ss(S, u) ? g[S] : n;
          }
          return t;
        }
        function Wc(t, s) {
          if (!(s === "constructor" && typeof t[s] == "function") && s != "__proto__")
            return t[s];
        }
        var Hd = qd(pd), ja = cc || function(t, s) {
          return zn.setTimeout(t, s);
        }, Zc = qd(Ng);
        function Yd(t, s, u) {
          var h = s + "";
          return Zc(t, Xg(h, lm($g(h), u)));
        }
        function qd(t) {
          var s = 0, u = 0;
          return function() {
            var h = I(), g = se - (h - u);
            if (u = h, g > 0) {
              if (++s >= U)
                return arguments[0];
            } else
              s = 0;
            return t.apply(n, arguments);
          };
        }
        function _u(t, s) {
          var u = -1, h = t.length, g = h - 1;
          for (s = s === n ? h : s; ++u < s; ) {
            var S = bc(u, g), O = t[S];
            t[S] = t[u], t[u] = O;
          }
          return t.length = s, t;
        }
        var Kd = im(function(t) {
          var s = [];
          return t.charCodeAt(0) === 46 && s.push(""), t.replace(mt, function(u, h, g, S) {
            s.push(g ? S.replace(Ft, "$1") : h || u);
          }), s;
        });
        function is(t) {
          if (typeof t == "string" || ar(t))
            return t;
          var s = t + "";
          return s == "0" && 1 / t == -Pe ? "-0" : s;
        }
        function bo(t) {
          if (t != null) {
            try {
              return Qo.call(t);
            } catch {
            }
            try {
              return t + "";
            } catch {
            }
          }
          return "";
        }
        function lm(t, s) {
          return Ri(re, function(u) {
            var h = "_." + u[0];
            s & u[1] && !Fs(t, h) && t.push(h);
          }), t.sort();
        }
        function $d(t) {
          if (t instanceof ft)
            return t.clone();
          var s = new Ei(t.__wrapped__, t.__chain__);
          return s.__actions__ = Ki(t.__actions__), s.__index__ = t.__index__, s.__values__ = t.__values__, s;
        }
        function um(t, s, u) {
          (u ? Fi(t, s, u) : s === n) ? s = 1 : s = f(lt(s), 0);
          var h = t == null ? 0 : t.length;
          if (!h || s < 1)
            return [];
          for (var g = 0, S = 0, O = H(mo(h / s)); g < h; )
            O[S++] = Or(t, g, g += s);
          return O;
        }
        function cm(t) {
          for (var s = -1, u = t == null ? 0 : t.length, h = 0, g = []; ++s < u; ) {
            var S = t[s];
            S && (g[h++] = S);
          }
          return g;
        }
        function hm() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var s = H(t - 1), u = arguments[0], h = t; h--; )
            s[h - 1] = arguments[h];
          return Br(rt(u) ? Ki(u) : [u], li(s, 1));
        }
        var dm = pt(function(t, s) {
          return In(t) ? Ha(t, li(s, 1, In, !0)) : [];
        }), fm = pt(function(t, s) {
          var u = Lr(s);
          return In(u) && (u = n), In(t) ? Ha(t, li(s, 1, In, !0), Ue(u, 2)) : [];
        }), pm = pt(function(t, s) {
          var u = Lr(s);
          return In(u) && (u = n), In(t) ? Ha(t, li(s, 1, In, !0), n, u) : [];
        });
        function _m(t, s, u) {
          var h = t == null ? 0 : t.length;
          return h ? (s = u || s === n ? 1 : lt(s), Or(t, s < 0 ? 0 : s, h)) : [];
        }
        function gm(t, s, u) {
          var h = t == null ? 0 : t.length;
          return h ? (s = u || s === n ? 1 : lt(s), s = h - s, Or(t, 0, s < 0 ? 0 : s)) : [];
        }
        function mm(t, s) {
          return t && t.length ? au(t, Ue(s, 3), !0, !0) : [];
        }
        function vm(t, s) {
          return t && t.length ? au(t, Ue(s, 3), !0) : [];
        }
        function ym(t, s, u, h) {
          var g = t == null ? 0 : t.length;
          return g ? (u && typeof u != "number" && Fi(t, s, u) && (u = 0, h = g), hg(t, s, u, h)) : [];
        }
        function Jd(t, s, u) {
          var h = t == null ? 0 : t.length;
          if (!h)
            return -1;
          var g = u == null ? 0 : lt(u);
          return g < 0 && (g = f(h + g, 0)), Sr(t, Ue(s, 3), g);
        }
        function jd(t, s, u) {
          var h = t == null ? 0 : t.length;
          if (!h)
            return -1;
          var g = h - 1;
          return u !== n && (g = lt(u), g = u < 0 ? f(h + g, 0) : y(g, h - 1)), Sr(t, Ue(s, 3), g, !0);
        }
        function Xd(t) {
          var s = t == null ? 0 : t.length;
          return s ? li(t, 1) : [];
        }
        function Em(t) {
          var s = t == null ? 0 : t.length;
          return s ? li(t, Pe) : [];
        }
        function Tm(t, s) {
          var u = t == null ? 0 : t.length;
          return u ? (s = s === n ? 1 : lt(s), li(t, s)) : [];
        }
        function wm(t) {
          for (var s = -1, u = t == null ? 0 : t.length, h = {}; ++s < u; ) {
            var g = t[s];
            h[g[0]] = g[1];
          }
          return h;
        }
        function Qd(t) {
          return t && t.length ? t[0] : n;
        }
        function Sm(t, s, u) {
          var h = t == null ? 0 : t.length;
          if (!h)
            return -1;
          var g = u == null ? 0 : lt(u);
          return g < 0 && (g = f(h + g, 0)), Ms(t, s, g);
        }
        function Am(t) {
          var s = t == null ? 0 : t.length;
          return s ? Or(t, 0, -1) : [];
        }
        var Cm = pt(function(t) {
          var s = Vt(t, Dc);
          return s.length && s[0] === t[0] ? Tc(s) : [];
        }), bm = pt(function(t) {
          var s = Lr(t), u = Vt(t, Dc);
          return s === Lr(u) ? s = n : u.pop(), u.length && u[0] === t[0] ? Tc(u, Ue(s, 2)) : [];
        }), Om = pt(function(t) {
          var s = Lr(t), u = Vt(t, Dc);
          return s = typeof s == "function" ? s : n, s && u.pop(), u.length && u[0] === t[0] ? Tc(u, n, s) : [];
        });
        function Lm(t, s) {
          return t == null ? "" : a.call(t, s);
        }
        function Lr(t) {
          var s = t == null ? 0 : t.length;
          return s ? t[s - 1] : n;
        }
        function Im(t, s, u) {
          var h = t == null ? 0 : t.length;
          if (!h)
            return -1;
          var g = h;
          return u !== n && (g = lt(u), g = g < 0 ? f(h + g, 0) : y(g, h - 1)), s === s ? ac(t, s, g) : Sr(t, Pi, g, !0);
        }
        function Nm(t, s) {
          return t && t.length ? cd(t, lt(s)) : n;
        }
        var Dm = pt(ef);
        function ef(t, s) {
          return t && t.length && s && s.length ? Cc(t, s) : t;
        }
        function Rm(t, s, u) {
          return t && t.length && s && s.length ? Cc(t, s, Ue(u, 2)) : t;
        }
        function Pm(t, s, u) {
          return t && t.length && s && s.length ? Cc(t, s, n, u) : t;
        }
        var xm = ws(function(t, s) {
          var u = t == null ? 0 : t.length, h = mc(t, s);
          return fd(t, Vt(s, function(g) {
            return Ss(g, u) ? +g : g;
          }).sort(Sd)), h;
        });
        function Fm(t, s) {
          var u = [];
          if (!(t && t.length))
            return u;
          var h = -1, g = [], S = t.length;
          for (s = Ue(s, 3); ++h < S; ) {
            var O = t[h];
            s(O, h, t) && (u.push(O), g.push(h));
          }
          return fd(t, g), u;
        }
        function Hc(t) {
          return t == null ? t : ne.call(t);
        }
        function Mm(t, s, u) {
          var h = t == null ? 0 : t.length;
          return h ? (u && typeof u != "number" && Fi(t, s, u) ? (s = 0, u = h) : (s = s == null ? 0 : lt(s), u = u === n ? h : lt(u)), Or(t, s, u)) : [];
        }
        function Bm(t, s) {
          return ou(t, s);
        }
        function Gm(t, s, u) {
          return Lc(t, s, Ue(u, 2));
        }
        function km(t, s) {
          var u = t == null ? 0 : t.length;
          if (u) {
            var h = ou(t, s);
            if (h < u && zr(t[h], s))
              return h;
          }
          return -1;
        }
        function Um(t, s) {
          return ou(t, s, !0);
        }
        function Vm(t, s, u) {
          return Lc(t, s, Ue(u, 2), !0);
        }
        function zm(t, s) {
          var u = t == null ? 0 : t.length;
          if (u) {
            var h = ou(t, s, !0) - 1;
            if (zr(t[h], s))
              return h;
          }
          return -1;
        }
        function Wm(t) {
          return t && t.length ? _d(t) : [];
        }
        function Zm(t, s) {
          return t && t.length ? _d(t, Ue(s, 2)) : [];
        }
        function Hm(t) {
          var s = t == null ? 0 : t.length;
          return s ? Or(t, 1, s) : [];
        }
        function Ym(t, s, u) {
          return t && t.length ? (s = u || s === n ? 1 : lt(s), Or(t, 0, s < 0 ? 0 : s)) : [];
        }
        function qm(t, s, u) {
          var h = t == null ? 0 : t.length;
          return h ? (s = u || s === n ? 1 : lt(s), s = h - s, Or(t, s < 0 ? 0 : s, h)) : [];
        }
        function Km(t, s) {
          return t && t.length ? au(t, Ue(s, 3), !1, !0) : [];
        }
        function $m(t, s) {
          return t && t.length ? au(t, Ue(s, 3)) : [];
        }
        var Jm = pt(function(t) {
          return Ys(li(t, 1, In, !0));
        }), jm = pt(function(t) {
          var s = Lr(t);
          return In(s) && (s = n), Ys(li(t, 1, In, !0), Ue(s, 2));
        }), Xm = pt(function(t) {
          var s = Lr(t);
          return s = typeof s == "function" ? s : n, Ys(li(t, 1, In, !0), n, s);
        });
        function Qm(t) {
          return t && t.length ? Ys(t) : [];
        }
        function ev(t, s) {
          return t && t.length ? Ys(t, Ue(s, 2)) : [];
        }
        function tv(t, s) {
          return s = typeof s == "function" ? s : n, t && t.length ? Ys(t, n, s) : [];
        }
        function Yc(t) {
          if (!(t && t.length))
            return [];
          var s = 0;
          return t = Mr(t, function(u) {
            if (In(u))
              return s = f(u.length, s), !0;
          }), Ma(s, function(u) {
            return Vt(t, Zo(u));
          });
        }
        function tf(t, s) {
          if (!(t && t.length))
            return [];
          var u = Yc(t);
          return s == null ? u : Vt(u, function(h) {
            return nn(s, n, h);
          });
        }
        var nv = pt(function(t, s) {
          return In(t) ? Ha(t, s) : [];
        }), iv = pt(function(t) {
          return Nc(Mr(t, In));
        }), rv = pt(function(t) {
          var s = Lr(t);
          return In(s) && (s = n), Nc(Mr(t, In), Ue(s, 2));
        }), sv = pt(function(t) {
          var s = Lr(t);
          return s = typeof s == "function" ? s : n, Nc(Mr(t, In), n, s);
        }), ov = pt(Yc);
        function av(t, s) {
          return yd(t || [], s || [], Za);
        }
        function lv(t, s) {
          return yd(t || [], s || [], Ka);
        }
        var uv = pt(function(t) {
          var s = t.length, u = s > 1 ? t[s - 1] : n;
          return u = typeof u == "function" ? (t.pop(), u) : n, tf(t, u);
        });
        function nf(t) {
          var s = T(t);
          return s.__chain__ = !0, s;
        }
        function cv(t, s) {
          return s(t), t;
        }
        function gu(t, s) {
          return s(t);
        }
        var hv = ws(function(t) {
          var s = t.length, u = s ? t[0] : 0, h = this.__wrapped__, g = function(S) {
            return mc(S, t);
          };
          return s > 1 || this.__actions__.length || !(h instanceof ft) || !Ss(u) ? this.thru(g) : (h = h.slice(u, +u + (s ? 1 : 0)), h.__actions__.push({
            func: gu,
            args: [g],
            thisArg: n
          }), new Ei(h, this.__chain__).thru(function(S) {
            return s && !S.length && S.push(n), S;
          }));
        });
        function dv() {
          return nf(this);
        }
        function fv() {
          return new Ei(this.value(), this.__chain__);
        }
        function pv() {
          this.__values__ === n && (this.__values__ = mf(this.value()));
          var t = this.__index__ >= this.__values__.length, s = t ? n : this.__values__[this.__index__++];
          return { done: t, value: s };
        }
        function _v() {
          return this;
        }
        function gv(t) {
          for (var s, u = this; u instanceof ea; ) {
            var h = $d(u);
            h.__index__ = 0, h.__values__ = n, s ? g.__wrapped__ = h : s = h;
            var g = h;
            u = u.__wrapped__;
          }
          return g.__wrapped__ = t, s;
        }
        function mv() {
          var t = this.__wrapped__;
          if (t instanceof ft) {
            var s = t;
            return this.__actions__.length && (s = new ft(this)), s = s.reverse(), s.__actions__.push({
              func: gu,
              args: [Hc],
              thisArg: n
            }), new Ei(s, this.__chain__);
          }
          return this.thru(Hc);
        }
        function vv() {
          return vd(this.__wrapped__, this.__actions__);
        }
        var yv = lu(function(t, s, u) {
          Tt.call(t, u) ? ++t[u] : Es(t, u, 1);
        });
        function Ev(t, s, u) {
          var h = rt(t) ? Ia : cg;
          return u && Fi(t, s, u) && (s = n), h(t, Ue(s, 3));
        }
        function Tv(t, s) {
          var u = rt(t) ? Mr : td;
          return u(t, Ue(s, 3));
        }
        var wv = Id(Jd), Sv = Id(jd);
        function Av(t, s) {
          return li(mu(t, s), 1);
        }
        function Cv(t, s) {
          return li(mu(t, s), Pe);
        }
        function bv(t, s, u) {
          return u = u === n ? 1 : lt(u), li(mu(t, s), u);
        }
        function rf(t, s) {
          var u = rt(t) ? Ri : Hs;
          return u(t, Ue(s, 3));
        }
        function sf(t, s) {
          var u = rt(t) ? $r : ed;
          return u(t, Ue(s, 3));
        }
        var Ov = lu(function(t, s, u) {
          Tt.call(t, u) ? t[u].push(s) : Es(t, u, [s]);
        });
        function Lv(t, s, u, h) {
          t = $i(t) ? t : sa(t), u = u && !h ? lt(u) : 0;
          var g = t.length;
          return u < 0 && (u = f(g + u, 0)), wu(t) ? u <= g && t.indexOf(s, u) > -1 : !!g && Ms(t, s, u) > -1;
        }
        var Iv = pt(function(t, s, u) {
          var h = -1, g = typeof s == "function", S = $i(t) ? H(t.length) : [];
          return Hs(t, function(O) {
            S[++h] = g ? nn(s, O, u) : Ya(O, s, u);
          }), S;
        }), Nv = lu(function(t, s, u) {
          Es(t, u, s);
        });
        function mu(t, s) {
          var u = rt(t) ? Vt : ad;
          return u(t, Ue(s, 3));
        }
        function Dv(t, s, u, h) {
          return t == null ? [] : (rt(s) || (s = s == null ? [] : [s]), u = h ? n : u, rt(u) || (u = u == null ? [] : [u]), hd(t, s, u));
        }
        var Rv = lu(function(t, s, u) {
          t[u ? 0 : 1].push(s);
        }, function() {
          return [[], []];
        });
        function Pv(t, s, u) {
          var h = rt(t) ? Da : Ho, g = arguments.length < 3;
          return h(t, Ue(s, 4), u, g, Hs);
        }
        function xv(t, s, u) {
          var h = rt(t) ? ic : Ho, g = arguments.length < 3;
          return h(t, Ue(s, 4), u, g, ed);
        }
        function Fv(t, s) {
          var u = rt(t) ? Mr : td;
          return u(t, Eu(Ue(s, 3)));
        }
        function Mv(t) {
          var s = rt(t) ? Jh : Lg;
          return s(t);
        }
        function Bv(t, s, u) {
          (u ? Fi(t, s, u) : s === n) ? s = 1 : s = lt(s);
          var h = rt(t) ? sg : Ig;
          return h(t, s);
        }
        function Gv(t) {
          var s = rt(t) ? og : Dg;
          return s(t);
        }
        function kv(t) {
          if (t == null)
            return 0;
          if ($i(t))
            return wu(t) ? vi(t) : t.length;
          var s = Ti(t);
          return s == _n || s == en ? t.size : Sc(t).length;
        }
        function Uv(t, s, u) {
          var h = rt(t) ? oo : Rg;
          return u && Fi(t, s, u) && (s = n), h(t, Ue(s, 3));
        }
        var Vv = pt(function(t, s) {
          if (t == null)
            return [];
          var u = s.length;
          return u > 1 && Fi(t, s[0], s[1]) ? s = [] : u > 2 && Fi(s[0], s[1], s[2]) && (s = [s[0]]), hd(t, li(s, 1), []);
        }), vu = eu || function() {
          return zn.Date.now();
        };
        function zv(t, s) {
          if (typeof s != "function")
            throw new ai(_);
          return t = lt(t), function() {
            if (--t < 1)
              return s.apply(this, arguments);
          };
        }
        function of(t, s, u) {
          return s = u ? n : s, s = t && s == null ? t.length : s, Ts(t, we, n, n, n, n, s);
        }
        function af(t, s) {
          var u;
          if (typeof s != "function")
            throw new ai(_);
          return t = lt(t), function() {
            return --t > 0 && (u = s.apply(this, arguments)), t <= 1 && (s = n), u;
          };
        }
        var qc = pt(function(t, s, u) {
          var h = X;
          if (u.length) {
            var g = Xr(u, ia(qc));
            h |= q;
          }
          return Ts(t, h, s, u, g);
        }), lf = pt(function(t, s, u) {
          var h = X | x;
          if (u.length) {
            var g = Xr(u, ia(lf));
            h |= q;
          }
          return Ts(s, h, t, u, g);
        });
        function uf(t, s, u) {
          s = u ? n : s;
          var h = Ts(t, Y, n, n, n, n, n, s);
          return h.placeholder = uf.placeholder, h;
        }
        function cf(t, s, u) {
          s = u ? n : s;
          var h = Ts(t, R, n, n, n, n, n, s);
          return h.placeholder = cf.placeholder, h;
        }
        function hf(t, s, u) {
          var h, g, S, O, D, M, Q = 0, ee = !1, oe = !1, Ee = !0;
          if (typeof t != "function")
            throw new ai(_);
          s = Ir(s) || 0, fn(u) && (ee = !!u.leading, oe = "maxWait" in u, S = oe ? f(Ir(u.maxWait) || 0, s) : S, Ee = "trailing" in u ? !!u.trailing : Ee);
          function Ne(Nn) {
            var Wr = h, bs = g;
            return h = g = n, Q = Nn, O = t.apply(bs, Wr), O;
          }
          function Ve(Nn) {
            return Q = Nn, D = ja(_t, s), ee ? Ne(Nn) : O;
          }
          function ht(Nn) {
            var Wr = Nn - M, bs = Nn - Q, Nf = s - Wr;
            return oe ? y(Nf, S - bs) : Nf;
          }
          function ze(Nn) {
            var Wr = Nn - M, bs = Nn - Q;
            return M === n || Wr >= s || Wr < 0 || oe && bs >= S;
          }
          function _t() {
            var Nn = vu();
            if (ze(Nn))
              return wt(Nn);
            D = ja(_t, ht(Nn));
          }
          function wt(Nn) {
            return D = n, Ee && h ? Ne(Nn) : (h = g = n, O);
          }
          function lr() {
            D !== n && Ed(D), Q = 0, h = M = g = D = n;
          }
          function Mi() {
            return D === n ? O : wt(vu());
          }
          function ur() {
            var Nn = vu(), Wr = ze(Nn);
            if (h = arguments, g = this, M = Nn, Wr) {
              if (D === n)
                return Ve(M);
              if (oe)
                return Ed(D), D = ja(_t, s), Ne(M);
            }
            return D === n && (D = ja(_t, s)), O;
          }
          return ur.cancel = lr, ur.flush = Mi, ur;
        }
        var Wv = pt(function(t, s) {
          return Qh(t, 1, s);
        }), Zv = pt(function(t, s, u) {
          return Qh(t, Ir(s) || 0, u);
        });
        function Hv(t) {
          return Ts(t, te);
        }
        function yu(t, s) {
          if (typeof t != "function" || s != null && typeof s != "function")
            throw new ai(_);
          var u = function() {
            var h = arguments, g = s ? s.apply(this, h) : h[0], S = u.cache;
            if (S.has(g))
              return S.get(g);
            var O = t.apply(this, h);
            return u.cache = S.set(g, O) || S, O;
          };
          return u.cache = new (yu.Cache || ys)(), u;
        }
        yu.Cache = ys;
        function Eu(t) {
          if (typeof t != "function")
            throw new ai(_);
          return function() {
            var s = arguments;
            switch (s.length) {
              case 0:
                return !t.call(this);
              case 1:
                return !t.call(this, s[0]);
              case 2:
                return !t.call(this, s[0], s[1]);
              case 3:
                return !t.call(this, s[0], s[1], s[2]);
            }
            return !t.apply(this, s);
          };
        }
        function Yv(t) {
          return af(2, t);
        }
        var qv = Pg(function(t, s) {
          s = s.length == 1 && rt(s[0]) ? Vt(s[0], Jt(Ue())) : Vt(li(s, 1), Jt(Ue()));
          var u = s.length;
          return pt(function(h) {
            for (var g = -1, S = y(h.length, u); ++g < S; )
              h[g] = s[g].call(this, h[g]);
            return nn(t, this, h);
          });
        }), Kc = pt(function(t, s) {
          var u = Xr(s, ia(Kc));
          return Ts(t, q, n, s, u);
        }), df = pt(function(t, s) {
          var u = Xr(s, ia(df));
          return Ts(t, ce, n, s, u);
        }), Kv = ws(function(t, s) {
          return Ts(t, Le, n, n, n, s);
        });
        function $v(t, s) {
          if (typeof t != "function")
            throw new ai(_);
          return s = s === n ? s : lt(s), pt(t, s);
        }
        function Jv(t, s) {
          if (typeof t != "function")
            throw new ai(_);
          return s = s == null ? 0 : f(lt(s), 0), pt(function(u) {
            var h = u[s], g = Ks(u, 0, s);
            return h && Br(g, h), nn(t, this, g);
          });
        }
        function jv(t, s, u) {
          var h = !0, g = !0;
          if (typeof t != "function")
            throw new ai(_);
          return fn(u) && (h = "leading" in u ? !!u.leading : h, g = "trailing" in u ? !!u.trailing : g), hf(t, s, {
            leading: h,
            maxWait: s,
            trailing: g
          });
        }
        function Xv(t) {
          return of(t, 1);
        }
        function Qv(t, s) {
          return Kc(Rc(s), t);
        }
        function e0() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return rt(t) ? t : [t];
        }
        function t0(t) {
          return br(t, N);
        }
        function n0(t, s) {
          return s = typeof s == "function" ? s : n, br(t, N, s);
        }
        function i0(t) {
          return br(t, w | N);
        }
        function r0(t, s) {
          return s = typeof s == "function" ? s : n, br(t, w | N, s);
        }
        function s0(t, s) {
          return s == null || Xh(t, s, jn(s));
        }
        function zr(t, s) {
          return t === s || t !== t && s !== s;
        }
        var o0 = du(Ec), a0 = du(function(t, s) {
          return t >= s;
        }), Oo = rd(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? rd : function(t) {
          return yn(t) && Tt.call(t, "callee") && !za.call(t, "callee");
        }, rt = H.isArray, l0 = Ul ? Jt(Ul) : gg;
        function $i(t) {
          return t != null && Tu(t.length) && !As(t);
        }
        function In(t) {
          return yn(t) && $i(t);
        }
        function u0(t) {
          return t === !0 || t === !1 || yn(t) && xi(t) == Qt;
        }
        var $s = e || sh, c0 = La ? Jt(La) : mg;
        function h0(t) {
          return yn(t) && t.nodeType === 1 && !Xa(t);
        }
        function d0(t) {
          if (t == null)
            return !0;
          if ($i(t) && (rt(t) || typeof t == "string" || typeof t.splice == "function" || $s(t) || ra(t) || Oo(t)))
            return !t.length;
          var s = Ti(t);
          if (s == _n || s == en)
            return !t.size;
          if (Ja(t))
            return !Sc(t).length;
          for (var u in t)
            if (Tt.call(t, u))
              return !1;
          return !0;
        }
        function f0(t, s) {
          return qa(t, s);
        }
        function p0(t, s, u) {
          u = typeof u == "function" ? u : n;
          var h = u ? u(t, s) : n;
          return h === n ? qa(t, s, n, u) : !!h;
        }
        function $c(t) {
          if (!yn(t))
            return !1;
          var s = xi(t);
          return s == qn || s == ln || typeof t.message == "string" && typeof t.name == "string" && !Xa(t);
        }
        function _0(t) {
          return typeof t == "number" && r(t);
        }
        function As(t) {
          if (!fn(t))
            return !1;
          var s = xi(t);
          return s == Un || s == Ui || s == Kt || s == vr;
        }
        function ff(t) {
          return typeof t == "number" && t == lt(t);
        }
        function Tu(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= _e;
        }
        function fn(t) {
          var s = typeof t;
          return t != null && (s == "object" || s == "function");
        }
        function yn(t) {
          return t != null && typeof t == "object";
        }
        var pf = Vl ? Jt(Vl) : yg;
        function g0(t, s) {
          return t === s || wc(t, s, kc(s));
        }
        function m0(t, s, u) {
          return u = typeof u == "function" ? u : n, wc(t, s, kc(s), u);
        }
        function v0(t) {
          return _f(t) && t != +t;
        }
        function y0(t) {
          if (nm(t))
            throw new je(p);
          return sd(t);
        }
        function E0(t) {
          return t === null;
        }
        function T0(t) {
          return t == null;
        }
        function _f(t) {
          return typeof t == "number" || yn(t) && xi(t) == zt;
        }
        function Xa(t) {
          if (!yn(t) || xi(t) != un)
            return !1;
          var s = ms(t);
          if (s === null)
            return !0;
          var u = Tt.call(s, "constructor") && s.constructor;
          return typeof u == "function" && u instanceof u && Qo.call(u) == Jl;
        }
        var Jc = zl ? Jt(zl) : Eg;
        function w0(t) {
          return ff(t) && t >= -_e && t <= _e;
        }
        var gf = Wo ? Jt(Wo) : Tg;
        function wu(t) {
          return typeof t == "string" || !rt(t) && yn(t) && xi(t) == Qn;
        }
        function ar(t) {
          return typeof t == "symbol" || yn(t) && xi(t) == xn;
        }
        var ra = Wl ? Jt(Wl) : wg;
        function S0(t) {
          return t === n;
        }
        function A0(t) {
          return yn(t) && Ti(t) == Vn;
        }
        function C0(t) {
          return yn(t) && xi(t) == er;
        }
        var b0 = du(Ac), O0 = du(function(t, s) {
          return t <= s;
        });
        function mf(t) {
          if (!t)
            return [];
          if ($i(t))
            return wu(t) ? yi(t) : Ki(t);
          if (Ws && t[Ws])
            return qo(t[Ws]());
          var s = Ti(t), u = s == _n ? Ba : s == en ? qi : sa;
          return u(t);
        }
        function Cs(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = Ir(t), t === Pe || t === -Pe) {
            var s = t < 0 ? -1 : 1;
            return s * St;
          }
          return t === t ? t : 0;
        }
        function lt(t) {
          var s = Cs(t), u = s % 1;
          return s === s ? u ? s - u : s : 0;
        }
        function vf(t) {
          return t ? So(lt(t), 0, de) : 0;
        }
        function Ir(t) {
          if (typeof t == "number")
            return t;
          if (ar(t))
            return J;
          if (fn(t)) {
            var s = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = fn(s) ? s + "" : s;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = ql(t);
          var u = bn.test(t);
          return u || mn.test(t) ? tc(t.slice(2), u ? 2 : 8) : Wt.test(t) ? J : +t;
        }
        function yf(t) {
          return ns(t, Ji(t));
        }
        function L0(t) {
          return t ? So(lt(t), -_e, _e) : t === 0 ? t : 0;
        }
        function Bt(t) {
          return t == null ? "" : or(t);
        }
        var I0 = ta(function(t, s) {
          if (Ja(s) || $i(s)) {
            ns(s, jn(s), t);
            return;
          }
          for (var u in s)
            Tt.call(s, u) && Za(t, u, s[u]);
        }), Ef = ta(function(t, s) {
          ns(s, Ji(s), t);
        }), Su = ta(function(t, s, u, h) {
          ns(s, Ji(s), t, h);
        }), N0 = ta(function(t, s, u, h) {
          ns(s, jn(s), t, h);
        }), D0 = ws(mc);
        function R0(t, s) {
          var u = Zs(t);
          return s == null ? u : jh(u, s);
        }
        var P0 = pt(function(t, s) {
          t = Mt(t);
          var u = -1, h = s.length, g = h > 2 ? s[2] : n;
          for (g && Fi(s[0], s[1], g) && (h = 1); ++u < h; )
            for (var S = s[u], O = Ji(S), D = -1, M = O.length; ++D < M; ) {
              var Q = O[D], ee = t[Q];
              (ee === n || zr(ee, Vs[Q]) && !Tt.call(t, Q)) && (t[Q] = S[Q]);
            }
          return t;
        }), x0 = pt(function(t) {
          return t.push(n, Md), nn(Tf, n, t);
        });
        function F0(t, s) {
          return ao(t, Ue(s, 3), ts);
        }
        function M0(t, s) {
          return ao(t, Ue(s, 3), yc);
        }
        function B0(t, s) {
          return t == null ? t : vc(t, Ue(s, 3), Ji);
        }
        function G0(t, s) {
          return t == null ? t : nd(t, Ue(s, 3), Ji);
        }
        function k0(t, s) {
          return t && ts(t, Ue(s, 3));
        }
        function U0(t, s) {
          return t && yc(t, Ue(s, 3));
        }
        function V0(t) {
          return t == null ? [] : ru(t, jn(t));
        }
        function z0(t) {
          return t == null ? [] : ru(t, Ji(t));
        }
        function jc(t, s, u) {
          var h = t == null ? n : Ao(t, s);
          return h === n ? u : h;
        }
        function W0(t, s) {
          return t != null && kd(t, s, dg);
        }
        function Xc(t, s) {
          return t != null && kd(t, s, fg);
        }
        var Z0 = Dd(function(t, s, u) {
          s != null && typeof s.toString != "function" && (s = fo.call(s)), t[s] = u;
        }, eh(ji)), H0 = Dd(function(t, s, u) {
          s != null && typeof s.toString != "function" && (s = fo.call(s)), Tt.call(t, s) ? t[s].push(u) : t[s] = [u];
        }, Ue), Y0 = pt(Ya);
        function jn(t) {
          return $i(t) ? $h(t) : Sc(t);
        }
        function Ji(t) {
          return $i(t) ? $h(t, !0) : Sg(t);
        }
        function q0(t, s) {
          var u = {};
          return s = Ue(s, 3), ts(t, function(h, g, S) {
            Es(u, s(h, g, S), h);
          }), u;
        }
        function K0(t, s) {
          var u = {};
          return s = Ue(s, 3), ts(t, function(h, g, S) {
            Es(u, g, s(h, g, S));
          }), u;
        }
        var $0 = ta(function(t, s, u) {
          su(t, s, u);
        }), Tf = ta(function(t, s, u, h) {
          su(t, s, u, h);
        }), J0 = ws(function(t, s) {
          var u = {};
          if (t == null)
            return u;
          var h = !1;
          s = Vt(s, function(S) {
            return S = qs(S, t), h || (h = S.length > 1), S;
          }), ns(t, Bc(t), u), h && (u = br(u, w | b | N, Zg));
          for (var g = s.length; g--; )
            Ic(u, s[g]);
          return u;
        });
        function j0(t, s) {
          return wf(t, Eu(Ue(s)));
        }
        var X0 = ws(function(t, s) {
          return t == null ? {} : Cg(t, s);
        });
        function wf(t, s) {
          if (t == null)
            return {};
          var u = Vt(Bc(t), function(h) {
            return [h];
          });
          return s = Ue(s), dd(t, u, function(h, g) {
            return s(h, g[0]);
          });
        }
        function Q0(t, s, u) {
          s = qs(s, t);
          var h = -1, g = s.length;
          for (g || (g = 1, t = n); ++h < g; ) {
            var S = t == null ? n : t[is(s[h])];
            S === n && (h = g, S = u), t = As(S) ? S.call(t) : S;
          }
          return t;
        }
        function ey(t, s, u) {
          return t == null ? t : Ka(t, s, u);
        }
        function ty(t, s, u, h) {
          return h = typeof h == "function" ? h : n, t == null ? t : Ka(t, s, u, h);
        }
        var Sf = xd(jn), Af = xd(Ji);
        function ny(t, s, u) {
          var h = rt(t), g = h || $s(t) || ra(t);
          if (s = Ue(s, 4), u == null) {
            var S = t && t.constructor;
            g ? u = h ? new S() : [] : fn(t) ? u = As(S) ? Zs(ms(t)) : {} : u = {};
          }
          return (g ? Ri : ts)(t, function(O, D, M) {
            return s(u, O, D, M);
          }), u;
        }
        function iy(t, s) {
          return t == null ? !0 : Ic(t, s);
        }
        function ry(t, s, u) {
          return t == null ? t : md(t, s, Rc(u));
        }
        function sy(t, s, u, h) {
          return h = typeof h == "function" ? h : n, t == null ? t : md(t, s, Rc(u), h);
        }
        function sa(t) {
          return t == null ? [] : Jr(t, jn(t));
        }
        function oy(t) {
          return t == null ? [] : Jr(t, Ji(t));
        }
        function ay(t, s, u) {
          return u === n && (u = s, s = n), u !== n && (u = Ir(u), u = u === u ? u : 0), s !== n && (s = Ir(s), s = s === s ? s : 0), So(Ir(t), s, u);
        }
        function ly(t, s, u) {
          return s = Cs(s), u === n ? (u = s, s = 0) : u = Cs(u), t = Ir(t), pg(t, s, u);
        }
        function uy(t, s, u) {
          if (u && typeof u != "boolean" && Fi(t, s, u) && (s = u = n), u === n && (typeof s == "boolean" ? (u = s, s = n) : typeof t == "boolean" && (u = t, t = n)), t === n && s === n ? (t = 0, s = 1) : (t = Cs(t), s === n ? (s = t, t = 0) : s = Cs(s)), t > s) {
            var h = t;
            t = s, s = h;
          }
          if (u || t % 1 || s % 1) {
            var g = W();
            return y(t + g * (s - t + Aa("1e-" + ((g + "").length - 1))), s);
          }
          return bc(t, s);
        }
        var cy = na(function(t, s, u) {
          return s = s.toLowerCase(), t + (u ? Cf(s) : s);
        });
        function Cf(t) {
          return Qc(Bt(t).toLowerCase());
        }
        function bf(t) {
          return t = Bt(t), t && t.replace(oi, sc).replace(Ml, "");
        }
        function hy(t, s, u) {
          t = Bt(t), s = or(s);
          var h = t.length;
          u = u === n ? h : So(lt(u), 0, h);
          var g = u;
          return u -= s.length, u >= 0 && t.slice(u, g) == s;
        }
        function dy(t) {
          return t = Bt(t), t && ae.test(t) ? t.replace(Zi, co) : t;
        }
        function fy(t) {
          return t = Bt(t), t && Ut.test(t) ? t.replace(xt, "\\$&") : t;
        }
        var py = na(function(t, s, u) {
          return t + (u ? "-" : "") + s.toLowerCase();
        }), _y = na(function(t, s, u) {
          return t + (u ? " " : "") + s.toLowerCase();
        }), gy = Ld("toLowerCase");
        function my(t, s, u) {
          t = Bt(t), s = lt(s);
          var h = s ? vi(t) : 0;
          if (!s || h >= s)
            return t;
          var g = (s - h) / 2;
          return hu(vo(g), u) + t + hu(mo(g), u);
        }
        function vy(t, s, u) {
          t = Bt(t), s = lt(s);
          var h = s ? vi(t) : 0;
          return s && h < s ? t + hu(s - h, u) : t;
        }
        function yy(t, s, u) {
          t = Bt(t), s = lt(s);
          var h = s ? vi(t) : 0;
          return s && h < s ? hu(s - h, u) + t : t;
        }
        function Ey(t, s, u) {
          return u || s == null ? s = 0 : s && (s = +s), B(Bt(t).replace(tn, ""), s || 0);
        }
        function Ty(t, s, u) {
          return (u ? Fi(t, s, u) : s === n) ? s = 1 : s = lt(s), Oc(Bt(t), s);
        }
        function wy() {
          var t = arguments, s = Bt(t[0]);
          return t.length < 3 ? s : s.replace(t[1], t[2]);
        }
        var Sy = na(function(t, s, u) {
          return t + (u ? "_" : "") + s.toLowerCase();
        });
        function Ay(t, s, u) {
          return u && typeof u != "number" && Fi(t, s, u) && (s = u = n), u = u === n ? de : u >>> 0, u ? (t = Bt(t), t && (typeof s == "string" || s != null && !Jc(s)) && (s = or(s), !s && Gs(t)) ? Ks(yi(t), 0, u) : t.split(s, u)) : [];
        }
        var Cy = na(function(t, s, u) {
          return t + (u ? " " : "") + Qc(s);
        });
        function by(t, s, u) {
          return t = Bt(t), u = u == null ? 0 : So(lt(u), 0, t.length), s = or(s), t.slice(u, u + s.length) == s;
        }
        function Oy(t, s, u) {
          var h = T.templateSettings;
          u && Fi(t, s, u) && (s = n), t = Bt(t), s = Su({}, s, h, Fd);
          var g = Su({}, s.imports, h.imports, Fd), S = jn(g), O = Jr(g, S), D, M, Q = 0, ee = s.interpolate || hn, oe = "__p += '", Ee = Va(
            (s.escape || hn).source + "|" + ee.source + "|" + (ee === Be ? Cn : hn).source + "|" + (s.evaluate || hn).source + "|$",
            "g"
          ), Ne = "//# sourceURL=" + (Tt.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++so + "]") + `
`;
          t.replace(Ee, function(ze, _t, wt, lr, Mi, ur) {
            return wt || (wt = lr), oe += t.slice(Q, ur).replace($t, $l), _t && (D = !0, oe += `' +
__e(` + _t + `) +
'`), Mi && (M = !0, oe += `';
` + Mi + `;
__p += '`), wt && (oe += `' +
((__t = (` + wt + `)) == null ? '' : __t) +
'`), Q = ur + ze.length, ze;
          }), oe += `';
`;
          var Ve = Tt.call(s, "variable") && s.variable;
          if (!Ve)
            oe = `with (obj) {
` + oe + `
}
`;
          else if (yr.test(Ve))
            throw new je(v);
          oe = (M ? oe.replace(Li, "") : oe).replace(Ii, "$1").replace(ii, "$1;"), oe = "function(" + (Ve || "obj") + `) {
` + (Ve ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (D ? ", __e = _.escape" : "") + (M ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + oe + `return __p
}`;
          var ht = Lf(function() {
            return Ct(S, Ne + "return " + oe).apply(n, O);
          });
          if (ht.source = oe, $c(ht))
            throw ht;
          return ht;
        }
        function Ly(t) {
          return Bt(t).toLowerCase();
        }
        function Iy(t) {
          return Bt(t).toUpperCase();
        }
        function Ny(t, s, u) {
          if (t = Bt(t), t && (u || s === n))
            return ql(t);
          if (!t || !(s = or(s)))
            return t;
          var h = yi(t), g = yi(s), S = Ar(h, g), O = Kl(h, g) + 1;
          return Ks(h, S, O).join("");
        }
        function Dy(t, s, u) {
          if (t = Bt(t), t && (u || s === n))
            return t.slice(0, Ga(t) + 1);
          if (!t || !(s = or(s)))
            return t;
          var h = yi(t), g = Kl(h, yi(s)) + 1;
          return Ks(h, 0, g).join("");
        }
        function Ry(t, s, u) {
          if (t = Bt(t), t && (u || s === n))
            return t.replace(tn, "");
          if (!t || !(s = or(s)))
            return t;
          var h = yi(t), g = Ar(h, yi(s));
          return Ks(h, g).join("");
        }
        function Py(t, s) {
          var u = Z, h = j;
          if (fn(s)) {
            var g = "separator" in s ? s.separator : g;
            u = "length" in s ? lt(s.length) : u, h = "omission" in s ? or(s.omission) : h;
          }
          t = Bt(t);
          var S = t.length;
          if (Gs(t)) {
            var O = yi(t);
            S = O.length;
          }
          if (u >= S)
            return t;
          var D = u - vi(h);
          if (D < 1)
            return h;
          var M = O ? Ks(O, 0, D).join("") : t.slice(0, D);
          if (g === n)
            return M + h;
          if (O && (D += M.length - D), Jc(g)) {
            if (t.slice(D).search(g)) {
              var Q, ee = M;
              for (g.global || (g = Va(g.source, Bt(ct.exec(g)) + "g")), g.lastIndex = 0; Q = g.exec(ee); )
                var oe = Q.index;
              M = M.slice(0, oe === n ? D : oe);
            }
          } else if (t.indexOf(or(g), D) != D) {
            var Ee = M.lastIndexOf(g);
            Ee > -1 && (M = M.slice(0, Ee));
          }
          return M + h;
        }
        function xy(t) {
          return t = Bt(t), t && F.test(t) ? t.replace(tr, ka) : t;
        }
        var Fy = na(function(t, s, u) {
          return t + (u ? " " : "") + s.toUpperCase();
        }), Qc = Ld("toUpperCase");
        function Of(t, s, u) {
          return t = Bt(t), s = u ? n : s, s === n ? jr(t) ? Jo(t) : Hl(t) : t.match(s) || [];
        }
        var Lf = pt(function(t, s) {
          try {
            return nn(t, n, s);
          } catch (u) {
            return $c(u) ? u : new je(u);
          }
        }), My = ws(function(t, s) {
          return Ri(s, function(u) {
            u = is(u), Es(t, u, qc(t[u], t));
          }), t;
        });
        function By(t) {
          var s = t == null ? 0 : t.length, u = Ue();
          return t = s ? Vt(t, function(h) {
            if (typeof h[1] != "function")
              throw new ai(_);
            return [u(h[0]), h[1]];
          }) : [], pt(function(h) {
            for (var g = -1; ++g < s; ) {
              var S = t[g];
              if (nn(S[0], this, h))
                return nn(S[1], this, h);
            }
          });
        }
        function Gy(t) {
          return ug(br(t, w));
        }
        function eh(t) {
          return function() {
            return t;
          };
        }
        function ky(t, s) {
          return t == null || t !== t ? s : t;
        }
        var Uy = Nd(), Vy = Nd(!0);
        function ji(t) {
          return t;
        }
        function th(t) {
          return od(typeof t == "function" ? t : br(t, w));
        }
        function zy(t) {
          return ld(br(t, w));
        }
        function Wy(t, s) {
          return ud(t, br(s, w));
        }
        var Zy = pt(function(t, s) {
          return function(u) {
            return Ya(u, t, s);
          };
        }), Hy = pt(function(t, s) {
          return function(u) {
            return Ya(t, u, s);
          };
        });
        function nh(t, s, u) {
          var h = jn(s), g = ru(s, h);
          u == null && !(fn(s) && (g.length || !h.length)) && (u = s, s = t, t = this, g = ru(s, jn(s)));
          var S = !(fn(u) && "chain" in u) || !!u.chain, O = As(t);
          return Ri(g, function(D) {
            var M = s[D];
            t[D] = M, O && (t.prototype[D] = function() {
              var Q = this.__chain__;
              if (S || Q) {
                var ee = t(this.__wrapped__), oe = ee.__actions__ = Ki(this.__actions__);
                return oe.push({ func: M, args: arguments, thisArg: t }), ee.__chain__ = Q, ee;
              }
              return M.apply(t, Br([this.value()], arguments));
            });
          }), t;
        }
        function Yy() {
          return zn._ === this && (zn._ = uc), this;
        }
        function ih() {
        }
        function qy(t) {
          return t = lt(t), pt(function(s) {
            return cd(s, t);
          });
        }
        var Ky = xc(Vt), $y = xc(Ia), Jy = xc(oo);
        function If(t) {
          return Vc(t) ? Zo(is(t)) : bg(t);
        }
        function jy(t) {
          return function(s) {
            return t == null ? n : Ao(t, s);
          };
        }
        var Xy = Rd(), Qy = Rd(!0);
        function rh() {
          return [];
        }
        function sh() {
          return !1;
        }
        function eE() {
          return {};
        }
        function tE() {
          return "";
        }
        function nE() {
          return !0;
        }
        function iE(t, s) {
          if (t = lt(t), t < 1 || t > _e)
            return [];
          var u = de, h = y(t, de);
          s = Ue(s), t -= de;
          for (var g = Ma(h, s); ++u < t; )
            s(u);
          return g;
        }
        function rE(t) {
          return rt(t) ? Vt(t, is) : ar(t) ? [t] : Ki(Kd(Bt(t)));
        }
        function sE(t) {
          var s = ++lc;
          return Bt(t) + s;
        }
        var oE = cu(function(t, s) {
          return t + s;
        }, 0), aE = Fc("ceil"), lE = cu(function(t, s) {
          return t / s;
        }, 1), uE = Fc("floor");
        function cE(t) {
          return t && t.length ? iu(t, ji, Ec) : n;
        }
        function hE(t, s) {
          return t && t.length ? iu(t, Ue(s, 2), Ec) : n;
        }
        function dE(t) {
          return Ra(t, ji);
        }
        function fE(t, s) {
          return Ra(t, Ue(s, 2));
        }
        function pE(t) {
          return t && t.length ? iu(t, ji, Ac) : n;
        }
        function _E(t, s) {
          return t && t.length ? iu(t, Ue(s, 2), Ac) : n;
        }
        var gE = cu(function(t, s) {
          return t * s;
        }, 1), mE = Fc("round"), vE = cu(function(t, s) {
          return t - s;
        }, 0);
        function yE(t) {
          return t && t.length ? Fa(t, ji) : 0;
        }
        function EE(t, s) {
          return t && t.length ? Fa(t, Ue(s, 2)) : 0;
        }
        return T.after = zv, T.ary = of, T.assign = I0, T.assignIn = Ef, T.assignInWith = Su, T.assignWith = N0, T.at = D0, T.before = af, T.bind = qc, T.bindAll = My, T.bindKey = lf, T.castArray = e0, T.chain = nf, T.chunk = um, T.compact = cm, T.concat = hm, T.cond = By, T.conforms = Gy, T.constant = eh, T.countBy = yv, T.create = R0, T.curry = uf, T.curryRight = cf, T.debounce = hf, T.defaults = P0, T.defaultsDeep = x0, T.defer = Wv, T.delay = Zv, T.difference = dm, T.differenceBy = fm, T.differenceWith = pm, T.drop = _m, T.dropRight = gm, T.dropRightWhile = mm, T.dropWhile = vm, T.fill = ym, T.filter = Tv, T.flatMap = Av, T.flatMapDeep = Cv, T.flatMapDepth = bv, T.flatten = Xd, T.flattenDeep = Em, T.flattenDepth = Tm, T.flip = Hv, T.flow = Uy, T.flowRight = Vy, T.fromPairs = wm, T.functions = V0, T.functionsIn = z0, T.groupBy = Ov, T.initial = Am, T.intersection = Cm, T.intersectionBy = bm, T.intersectionWith = Om, T.invert = Z0, T.invertBy = H0, T.invokeMap = Iv, T.iteratee = th, T.keyBy = Nv, T.keys = jn, T.keysIn = Ji, T.map = mu, T.mapKeys = q0, T.mapValues = K0, T.matches = zy, T.matchesProperty = Wy, T.memoize = yu, T.merge = $0, T.mergeWith = Tf, T.method = Zy, T.methodOf = Hy, T.mixin = nh, T.negate = Eu, T.nthArg = qy, T.omit = J0, T.omitBy = j0, T.once = Yv, T.orderBy = Dv, T.over = Ky, T.overArgs = qv, T.overEvery = $y, T.overSome = Jy, T.partial = Kc, T.partialRight = df, T.partition = Rv, T.pick = X0, T.pickBy = wf, T.property = If, T.propertyOf = jy, T.pull = Dm, T.pullAll = ef, T.pullAllBy = Rm, T.pullAllWith = Pm, T.pullAt = xm, T.range = Xy, T.rangeRight = Qy, T.rearg = Kv, T.reject = Fv, T.remove = Fm, T.rest = $v, T.reverse = Hc, T.sampleSize = Bv, T.set = ey, T.setWith = ty, T.shuffle = Gv, T.slice = Mm, T.sortBy = Vv, T.sortedUniq = Wm, T.sortedUniqBy = Zm, T.split = Ay, T.spread = Jv, T.tail = Hm, T.take = Ym, T.takeRight = qm, T.takeRightWhile = Km, T.takeWhile = $m, T.tap = cv, T.throttle = jv, T.thru = gu, T.toArray = mf, T.toPairs = Sf, T.toPairsIn = Af, T.toPath = rE, T.toPlainObject = yf, T.transform = ny, T.unary = Xv, T.union = Jm, T.unionBy = jm, T.unionWith = Xm, T.uniq = Qm, T.uniqBy = ev, T.uniqWith = tv, T.unset = iy, T.unzip = Yc, T.unzipWith = tf, T.update = ry, T.updateWith = sy, T.values = sa, T.valuesIn = oy, T.without = nv, T.words = Of, T.wrap = Qv, T.xor = iv, T.xorBy = rv, T.xorWith = sv, T.zip = ov, T.zipObject = av, T.zipObjectDeep = lv, T.zipWith = uv, T.entries = Sf, T.entriesIn = Af, T.extend = Ef, T.extendWith = Su, nh(T, T), T.add = oE, T.attempt = Lf, T.camelCase = cy, T.capitalize = Cf, T.ceil = aE, T.clamp = ay, T.clone = t0, T.cloneDeep = i0, T.cloneDeepWith = r0, T.cloneWith = n0, T.conformsTo = s0, T.deburr = bf, T.defaultTo = ky, T.divide = lE, T.endsWith = hy, T.eq = zr, T.escape = dy, T.escapeRegExp = fy, T.every = Ev, T.find = wv, T.findIndex = Jd, T.findKey = F0, T.findLast = Sv, T.findLastIndex = jd, T.findLastKey = M0, T.floor = uE, T.forEach = rf, T.forEachRight = sf, T.forIn = B0, T.forInRight = G0, T.forOwn = k0, T.forOwnRight = U0, T.get = jc, T.gt = o0, T.gte = a0, T.has = W0, T.hasIn = Xc, T.head = Qd, T.identity = ji, T.includes = Lv, T.indexOf = Sm, T.inRange = ly, T.invoke = Y0, T.isArguments = Oo, T.isArray = rt, T.isArrayBuffer = l0, T.isArrayLike = $i, T.isArrayLikeObject = In, T.isBoolean = u0, T.isBuffer = $s, T.isDate = c0, T.isElement = h0, T.isEmpty = d0, T.isEqual = f0, T.isEqualWith = p0, T.isError = $c, T.isFinite = _0, T.isFunction = As, T.isInteger = ff, T.isLength = Tu, T.isMap = pf, T.isMatch = g0, T.isMatchWith = m0, T.isNaN = v0, T.isNative = y0, T.isNil = T0, T.isNull = E0, T.isNumber = _f, T.isObject = fn, T.isObjectLike = yn, T.isPlainObject = Xa, T.isRegExp = Jc, T.isSafeInteger = w0, T.isSet = gf, T.isString = wu, T.isSymbol = ar, T.isTypedArray = ra, T.isUndefined = S0, T.isWeakMap = A0, T.isWeakSet = C0, T.join = Lm, T.kebabCase = py, T.last = Lr, T.lastIndexOf = Im, T.lowerCase = _y, T.lowerFirst = gy, T.lt = b0, T.lte = O0, T.max = cE, T.maxBy = hE, T.mean = dE, T.meanBy = fE, T.min = pE, T.minBy = _E, T.stubArray = rh, T.stubFalse = sh, T.stubObject = eE, T.stubString = tE, T.stubTrue = nE, T.multiply = gE, T.nth = Nm, T.noConflict = Yy, T.noop = ih, T.now = vu, T.pad = my, T.padEnd = vy, T.padStart = yy, T.parseInt = Ey, T.random = uy, T.reduce = Pv, T.reduceRight = xv, T.repeat = Ty, T.replace = wy, T.result = Q0, T.round = mE, T.runInContext = P, T.sample = Mv, T.size = kv, T.snakeCase = Sy, T.some = Uv, T.sortedIndex = Bm, T.sortedIndexBy = Gm, T.sortedIndexOf = km, T.sortedLastIndex = Um, T.sortedLastIndexBy = Vm, T.sortedLastIndexOf = zm, T.startCase = Cy, T.startsWith = by, T.subtract = vE, T.sum = yE, T.sumBy = EE, T.template = Oy, T.times = iE, T.toFinite = Cs, T.toInteger = lt, T.toLength = vf, T.toLower = Ly, T.toNumber = Ir, T.toSafeInteger = L0, T.toString = Bt, T.toUpper = Iy, T.trim = Ny, T.trimEnd = Dy, T.trimStart = Ry, T.truncate = Py, T.unescape = xy, T.uniqueId = sE, T.upperCase = Fy, T.upperFirst = Qc, T.each = rf, T.eachRight = sf, T.first = Qd, nh(T, (function() {
          var t = {};
          return ts(T, function(s, u) {
            Tt.call(T.prototype, u) || (t[u] = s);
          }), t;
        })(), { chain: !1 }), T.VERSION = l, Ri(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          T[t].placeholder = T;
        }), Ri(["drop", "take"], function(t, s) {
          ft.prototype[t] = function(u) {
            u = u === n ? 1 : f(lt(u), 0);
            var h = this.__filtered__ && !s ? new ft(this) : this.clone();
            return h.__filtered__ ? h.__takeCount__ = y(u, h.__takeCount__) : h.__views__.push({
              size: y(u, de),
              type: t + (h.__dir__ < 0 ? "Right" : "")
            }), h;
          }, ft.prototype[t + "Right"] = function(u) {
            return this.reverse()[t](u).reverse();
          };
        }), Ri(["filter", "map", "takeWhile"], function(t, s) {
          var u = s + 1, h = u == ge || u == De;
          ft.prototype[t] = function(g) {
            var S = this.clone();
            return S.__iteratees__.push({
              iteratee: Ue(g, 3),
              type: u
            }), S.__filtered__ = S.__filtered__ || h, S;
          };
        }), Ri(["head", "last"], function(t, s) {
          var u = "take" + (s ? "Right" : "");
          ft.prototype[t] = function() {
            return this[u](1).value()[0];
          };
        }), Ri(["initial", "tail"], function(t, s) {
          var u = "drop" + (s ? "" : "Right");
          ft.prototype[t] = function() {
            return this.__filtered__ ? new ft(this) : this[u](1);
          };
        }), ft.prototype.compact = function() {
          return this.filter(ji);
        }, ft.prototype.find = function(t) {
          return this.filter(t).head();
        }, ft.prototype.findLast = function(t) {
          return this.reverse().find(t);
        }, ft.prototype.invokeMap = pt(function(t, s) {
          return typeof t == "function" ? new ft(this) : this.map(function(u) {
            return Ya(u, t, s);
          });
        }), ft.prototype.reject = function(t) {
          return this.filter(Eu(Ue(t)));
        }, ft.prototype.slice = function(t, s) {
          t = lt(t);
          var u = this;
          return u.__filtered__ && (t > 0 || s < 0) ? new ft(u) : (t < 0 ? u = u.takeRight(-t) : t && (u = u.drop(t)), s !== n && (s = lt(s), u = s < 0 ? u.dropRight(-s) : u.take(s - t)), u);
        }, ft.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, ft.prototype.toArray = function() {
          return this.take(de);
        }, ts(ft.prototype, function(t, s) {
          var u = /^(?:filter|find|map|reject)|While$/.test(s), h = /^(?:head|last)$/.test(s), g = T[h ? "take" + (s == "last" ? "Right" : "") : s], S = h || /^find/.test(s);
          g && (T.prototype[s] = function() {
            var O = this.__wrapped__, D = h ? [1] : arguments, M = O instanceof ft, Q = D[0], ee = M || rt(O), oe = function(_t) {
              var wt = g.apply(T, Br([_t], D));
              return h && Ee ? wt[0] : wt;
            };
            ee && u && typeof Q == "function" && Q.length != 1 && (M = ee = !1);
            var Ee = this.__chain__, Ne = !!this.__actions__.length, Ve = S && !Ee, ht = M && !Ne;
            if (!S && ee) {
              O = ht ? O : new ft(this);
              var ze = t.apply(O, D);
              return ze.__actions__.push({ func: gu, args: [oe], thisArg: n }), new Ei(ze, Ee);
            }
            return Ve && ht ? t.apply(this, D) : (ze = this.thru(oe), Ve ? h ? ze.value()[0] : ze.value() : ze);
          });
        }), Ri(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var s = jo[t], u = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", h = /^(?:pop|shift)$/.test(t);
          T.prototype[t] = function() {
            var g = arguments;
            if (h && !this.__chain__) {
              var S = this.value();
              return s.apply(rt(S) ? S : [], g);
            }
            return this[u](function(O) {
              return s.apply(rt(O) ? O : [], g);
            });
          };
        }), ts(ft.prototype, function(t, s) {
          var u = T[s];
          if (u) {
            var h = u.name + "";
            Tt.call(sr, h) || (sr[h] = []), sr[h].push({ name: s, func: u });
          }
        }), sr[uu(n, x).name] = [{
          name: "wrapper",
          func: n
        }], ft.prototype.clone = _c, ft.prototype.reverse = F_, ft.prototype.value = M_, T.prototype.at = hv, T.prototype.chain = dv, T.prototype.commit = fv, T.prototype.next = pv, T.prototype.plant = gv, T.prototype.reverse = mv, T.prototype.toJSON = T.prototype.valueOf = T.prototype.value = vv, T.prototype.first = T.prototype.head, Ws && (T.prototype[Ws] = _v), T;
      }), Gr = Us();
      rr ? ((rr.exports = Gr)._ = Gr, Di._ = Gr) : zn._ = Gr;
    }).call(_1);
  })(tl, tl.exports)), tl.exports;
}
var nl = g1();
function m1(o, ...i) {
  return [].slice.call(arguments, 1).reduce(function(n, l) {
    return n && n[l];
  }, o);
}
function ah(o, i) {
  const n = i.replace("\\.", "<|>");
  try {
    return n.split(".").reduce((l, d) => {
      const p = parseInt(d);
      return isFinite(p) && Array.isArray(l) ? l[p] : l[d.replace("<|>", ".")];
    }, o);
  } catch {
    return null;
  }
}
const rs = {
  eq: "eq",
  lt: "lt",
  gt: "gt",
  lte: "lte",
  gte: "gte",
  neq: "neq"
};
function v1() {
  const o = (p, _) => !_.thing || _.thing.length == 0 || !p ? !1 : _.thing.map(
    (m) => {
      if (m.value == "*")
        return !0;
      {
        const E = ah(p, m.prop ?? "");
        return !E || !m.comperator ? !1 : d(m.comperator, E, m.value);
      }
    }
  ).reduce(
    (m, E) => m && E,
    !0
  ), i = (p, _) => !_.datastream || _.datastream.length == 0 || !p ? !1 : _.datastream.map(
    (m) => {
      if (m.value == "*")
        return !0;
      {
        const E = ah(p, m.prop ?? "");
        return E == null ? m.comperator === rs.neq : m.comperator ? d(m.comperator, E, m.value) : !1;
      }
    }
  ).reduce(
    (m, E) => m && E,
    !0
  ), n = (p, _) => {
    if (!_.datastream || _.datastream.length == 0)
      return p;
    if (!p) return { type: "FeatureCollection", features: [] };
    const v = { ...p }, m = [];
    for (const E of p.features)
      for (const A of _.datastream)
        if (A.value == "*") {
          m.push(E);
          break;
        } else {
          const w = ah(E.properties, A.prop ?? "");
          if (!w)
            continue;
          if (A.comperator && d(A.comperator, w, A.value)) {
            m.push(E);
            break;
          }
        }
    return v.features = m, v;
  }, l = (p, _) => {
    const v = _.startsWith("*"), m = _.endsWith("*");
    if (v && m) {
      const E = _.slice(1, -1);
      return p.includes(E);
    } else if (v) {
      const E = _.slice(1);
      return p.endsWith(E);
    } else if (m) {
      const E = _.slice(0, -1);
      return p.startsWith(E);
    }
    return !1;
  }, d = (p, _, v) => {
    const m = String(_), E = String(v), A = E.includes("*");
    switch (p) {
      case rs.eq:
        return A ? l(m, E) : m === E;
      case rs.neq:
        return A ? !l(m, E) : m !== E;
      case rs.gt:
        return Number(_) > Number(v);
      case rs.gte:
        return Number(_) >= Number(v);
      case rs.lt:
        return Number(_) < Number(v);
      case rs.lte:
        return Number(_) <= Number(v);
      default:
        return !1;
    }
  };
  return {
    compareThing: o,
    compareDatastream: i,
    filterFeatureCollection: n
  };
}
function y1() {
  return {
    isFeature: (d) => !(!d || !d.type || d.type !== "Feature"),
    isFeatureCollection: (d) => !(!d || !d.type || d.type !== "FeatureCollection"),
    isPoint: (d) => !(!d || !d.type || d.type !== "Point" || !d.coordinates || !nl.isArray(d.coordinates) || d.coordinates.length < 2),
    transformToGeoJson: (d) => d ? d.type == "Feature" || d.type == "FeatureCollection" ? d : ["Polygon", "MultiPolygon", "Line", "MultiLine", "Point", "MultiPoint"].includes(d.type) ? {
      type: "Feature",
      properties: {},
      geometry: d
    } : null : null
  };
}
var il = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var E1 = il.exports, Wf;
function T1() {
  return Wf || (Wf = 1, (function(o, i) {
    (function(n, l) {
      l(i);
    })(E1, (function(n) {
      var l = "1.9.4";
      function d(e) {
        var r, a, c, f;
        for (a = 1, c = arguments.length; a < c; a++) {
          f = arguments[a];
          for (r in f)
            e[r] = f[r];
        }
        return e;
      }
      var p = Object.create || /* @__PURE__ */ (function() {
        function e() {
        }
        return function(r) {
          return e.prototype = r, new e();
        };
      })();
      function _(e, r) {
        var a = Array.prototype.slice;
        if (e.bind)
          return e.bind.apply(e, a.call(arguments, 1));
        var c = a.call(arguments, 2);
        return function() {
          return e.apply(r, c.length ? c.concat(a.call(arguments)) : arguments);
        };
      }
      var v = 0;
      function m(e) {
        return "_leaflet_id" in e || (e._leaflet_id = ++v), e._leaflet_id;
      }
      function E(e, r, a) {
        var c, f, y, I;
        return I = function() {
          c = !1, f && (y.apply(a, f), f = !1);
        }, y = function() {
          c ? f = arguments : (e.apply(a, arguments), setTimeout(I, r), c = !0);
        }, y;
      }
      function A(e, r, a) {
        var c = r[1], f = r[0], y = c - f;
        return e === c && a ? e : ((e - f) % y + y) % y + f;
      }
      function w() {
        return !1;
      }
      function b(e, r) {
        if (r === !1)
          return e;
        var a = Math.pow(10, r === void 0 ? 6 : r);
        return Math.round(e * a) / a;
      }
      function N(e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
      }
      function k(e) {
        return N(e).split(/\s+/);
      }
      function G(e, r) {
        Object.prototype.hasOwnProperty.call(e, "options") || (e.options = e.options ? p(e.options) : {});
        for (var a in r)
          e.options[a] = r[a];
        return e.options;
      }
      function X(e, r, a) {
        var c = [];
        for (var f in e)
          c.push(encodeURIComponent(a ? f.toUpperCase() : f) + "=" + encodeURIComponent(e[f]));
        return (!r || r.indexOf("?") === -1 ? "?" : "&") + c.join("&");
      }
      var x = /\{ *([\w_ -]+) *\}/g;
      function z(e, r) {
        return e.replace(x, function(a, c) {
          var f = r[c];
          if (f === void 0)
            throw new Error("No value provided for variable " + a);
          return typeof f == "function" && (f = f(r)), f;
        });
      }
      var Y = Array.isArray || function(e) {
        return Object.prototype.toString.call(e) === "[object Array]";
      };
      function R(e, r) {
        for (var a = 0; a < e.length; a++)
          if (e[a] === r)
            return a;
        return -1;
      }
      var q = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function ce(e) {
        return window["webkit" + e] || window["moz" + e] || window["ms" + e];
      }
      var we = 0;
      function Le(e) {
        var r = +/* @__PURE__ */ new Date(), a = Math.max(0, 16 - (r - we));
        return we = r + a, window.setTimeout(e, a);
      }
      var te = window.requestAnimationFrame || ce("RequestAnimationFrame") || Le, Z = window.cancelAnimationFrame || ce("CancelAnimationFrame") || ce("CancelRequestAnimationFrame") || function(e) {
        window.clearTimeout(e);
      };
      function j(e, r, a) {
        if (a && te === Le)
          e.call(r);
        else
          return te.call(window, _(e, r));
      }
      function U(e) {
        e && Z.call(window, e);
      }
      var se = {
        __proto__: null,
        extend: d,
        create: p,
        bind: _,
        get lastId() {
          return v;
        },
        stamp: m,
        throttle: E,
        wrapNum: A,
        falseFn: w,
        formatNum: b,
        trim: N,
        splitWords: k,
        setOptions: G,
        getParamString: X,
        template: z,
        isArray: Y,
        indexOf: R,
        emptyImageUrl: q,
        requestFn: te,
        cancelFn: Z,
        requestAnimFrame: j,
        cancelAnimFrame: U
      };
      function ge() {
      }
      ge.extend = function(e) {
        var r = function() {
          G(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, a = r.__super__ = this.prototype, c = p(a);
        c.constructor = r, r.prototype = c;
        for (var f in this)
          Object.prototype.hasOwnProperty.call(this, f) && f !== "prototype" && f !== "__super__" && (r[f] = this[f]);
        return e.statics && d(r, e.statics), e.includes && (Je(e.includes), d.apply(null, [c].concat(e.includes))), d(c, e), delete c.statics, delete c.includes, c.options && (c.options = a.options ? p(a.options) : {}, d(c.options, e.options)), c._initHooks = [], c.callInitHooks = function() {
          if (!this._initHooksCalled) {
            a.callInitHooks && a.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var y = 0, I = c._initHooks.length; y < I; y++)
              c._initHooks[y].call(this);
          }
        }, r;
      }, ge.include = function(e) {
        var r = this.prototype.options;
        return d(this.prototype, e), e.options && (this.prototype.options = r, this.mergeOptions(e.options)), this;
      }, ge.mergeOptions = function(e) {
        return d(this.prototype.options, e), this;
      }, ge.addInitHook = function(e) {
        var r = Array.prototype.slice.call(arguments, 1), a = typeof e == "function" ? e : function() {
          this[e].apply(this, r);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(a), this;
      };
      function Je(e) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          e = Y(e) ? e : [e];
          for (var r = 0; r < e.length; r++)
            e[r] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var De = {
        /* @method on(type: String, fn: Function, context?: Object): this
         * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
         *
         * @alternative
         * @method on(eventMap: Object): this
         * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
         */
        on: function(e, r, a) {
          if (typeof e == "object")
            for (var c in e)
              this._on(c, e[c], r);
          else {
            e = k(e);
            for (var f = 0, y = e.length; f < y; f++)
              this._on(e[f], r, a);
          }
          return this;
        },
        /* @method off(type: String, fn?: Function, context?: Object): this
         * Removes a previously added listener function. If no function is specified, it will remove all the listeners of that particular event from the object. Note that if you passed a custom context to `on`, you must pass the same context to `off` in order to remove the listener.
         *
         * @alternative
         * @method off(eventMap: Object): this
         * Removes a set of type/listener pairs.
         *
         * @alternative
         * @method off: this
         * Removes all listeners to all events on the object. This includes implicitly attached events.
         */
        off: function(e, r, a) {
          if (!arguments.length)
            delete this._events;
          else if (typeof e == "object")
            for (var c in e)
              this._off(c, e[c], r);
          else {
            e = k(e);
            for (var f = arguments.length === 1, y = 0, I = e.length; y < I; y++)
              f ? this._off(e[y]) : this._off(e[y], r, a);
          }
          return this;
        },
        // attach listener (without syntactic sugar now)
        _on: function(e, r, a, c) {
          if (typeof r != "function") {
            console.warn("wrong listener type: " + typeof r);
            return;
          }
          if (this._listens(e, r, a) === !1) {
            a === this && (a = void 0);
            var f = { fn: r, ctx: a };
            c && (f.once = !0), this._events = this._events || {}, this._events[e] = this._events[e] || [], this._events[e].push(f);
          }
        },
        _off: function(e, r, a) {
          var c, f, y;
          if (this._events && (c = this._events[e], !!c)) {
            if (arguments.length === 1) {
              if (this._firingCount)
                for (f = 0, y = c.length; f < y; f++)
                  c[f].fn = w;
              delete this._events[e];
              return;
            }
            if (typeof r != "function") {
              console.warn("wrong listener type: " + typeof r);
              return;
            }
            var I = this._listens(e, r, a);
            if (I !== !1) {
              var B = c[I];
              this._firingCount && (B.fn = w, this._events[e] = c = c.slice()), c.splice(I, 1);
            }
          }
        },
        // @method fire(type: String, data?: Object, propagate?: Boolean): this
        // Fires an event of the specified type. You can optionally provide a data
        // object — the first argument of the listener function will contain its
        // properties. The event can optionally be propagated to event parents.
        fire: function(e, r, a) {
          if (!this.listens(e, a))
            return this;
          var c = d({}, r, {
            type: e,
            target: this,
            sourceTarget: r && r.sourceTarget || this
          });
          if (this._events) {
            var f = this._events[e];
            if (f) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var y = 0, I = f.length; y < I; y++) {
                var B = f[y], W = B.fn;
                B.once && this.off(e, W, B.ctx), W.call(B.ctx || this, c);
              }
              this._firingCount--;
            }
          }
          return a && this._propagateEvent(c), this;
        },
        // @method listens(type: String, propagate?: Boolean): Boolean
        // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
        // Returns `true` if a particular event type has any listeners attached to it.
        // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
        listens: function(e, r, a, c) {
          typeof e != "string" && console.warn('"string" type argument expected');
          var f = r;
          typeof r != "function" && (c = !!r, f = void 0, a = void 0);
          var y = this._events && this._events[e];
          if (y && y.length && this._listens(e, f, a) !== !1)
            return !0;
          if (c) {
            for (var I in this._eventParents)
              if (this._eventParents[I].listens(e, r, a, c))
                return !0;
          }
          return !1;
        },
        // returns the index (number) or false
        _listens: function(e, r, a) {
          if (!this._events)
            return !1;
          var c = this._events[e] || [];
          if (!r)
            return !!c.length;
          a === this && (a = void 0);
          for (var f = 0, y = c.length; f < y; f++)
            if (c[f].fn === r && c[f].ctx === a)
              return f;
          return !1;
        },
        // @method once(…): this
        // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
        once: function(e, r, a) {
          if (typeof e == "object")
            for (var c in e)
              this._on(c, e[c], r, !0);
          else {
            e = k(e);
            for (var f = 0, y = e.length; f < y; f++)
              this._on(e[f], r, a, !0);
          }
          return this;
        },
        // @method addEventParent(obj: Evented): this
        // Adds an event parent - an `Evented` that will receive propagated events
        addEventParent: function(e) {
          return this._eventParents = this._eventParents || {}, this._eventParents[m(e)] = e, this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(e) {
          return this._eventParents && delete this._eventParents[m(e)], this;
        },
        _propagateEvent: function(e) {
          for (var r in this._eventParents)
            this._eventParents[r].fire(e.type, d({
              layer: e.target,
              propagatedFrom: e.target
            }, e), !0);
        }
      };
      De.addEventListener = De.on, De.removeEventListener = De.clearAllEventListeners = De.off, De.addOneTimeEventListener = De.once, De.fireEvent = De.fire, De.hasEventListeners = De.listens;
      var Pe = ge.extend(De);
      function _e(e, r, a) {
        this.x = a ? Math.round(e) : e, this.y = a ? Math.round(r) : r;
      }
      var St = Math.trunc || function(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
      };
      _e.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new _e(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(e) {
          return this.clone()._add(J(e));
        },
        _add: function(e) {
          return this.x += e.x, this.y += e.y, this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(e) {
          return this.clone()._subtract(J(e));
        },
        _subtract: function(e) {
          return this.x -= e.x, this.y -= e.y, this;
        },
        // @method divideBy(num: Number): Point
        // Returns the result of division of the current point by the given number.
        divideBy: function(e) {
          return this.clone()._divideBy(e);
        },
        _divideBy: function(e) {
          return this.x /= e, this.y /= e, this;
        },
        // @method multiplyBy(num: Number): Point
        // Returns the result of multiplication of the current point by the given number.
        multiplyBy: function(e) {
          return this.clone()._multiplyBy(e);
        },
        _multiplyBy: function(e) {
          return this.x *= e, this.y *= e, this;
        },
        // @method scaleBy(scale: Point): Point
        // Multiply each coordinate of the current point by each coordinate of
        // `scale`. In linear algebra terms, multiply the point by the
        // [scaling matrix](https://en.wikipedia.org/wiki/Scaling_%28geometry%29#Matrix_representation)
        // defined by `scale`.
        scaleBy: function(e) {
          return new _e(this.x * e.x, this.y * e.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(e) {
          return new _e(this.x / e.x, this.y / e.y);
        },
        // @method round(): Point
        // Returns a copy of the current point with rounded coordinates.
        round: function() {
          return this.clone()._round();
        },
        _round: function() {
          return this.x = Math.round(this.x), this.y = Math.round(this.y), this;
        },
        // @method floor(): Point
        // Returns a copy of the current point with floored coordinates (rounded down).
        floor: function() {
          return this.clone()._floor();
        },
        _floor: function() {
          return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this;
        },
        // @method ceil(): Point
        // Returns a copy of the current point with ceiled coordinates (rounded up).
        ceil: function() {
          return this.clone()._ceil();
        },
        _ceil: function() {
          return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this;
        },
        // @method trunc(): Point
        // Returns a copy of the current point with truncated coordinates (rounded towards zero).
        trunc: function() {
          return this.clone()._trunc();
        },
        _trunc: function() {
          return this.x = St(this.x), this.y = St(this.y), this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(e) {
          e = J(e);
          var r = e.x - this.x, a = e.y - this.y;
          return Math.sqrt(r * r + a * a);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(e) {
          return e = J(e), e.x === this.x && e.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(e) {
          return e = J(e), Math.abs(e.x) <= Math.abs(this.x) && Math.abs(e.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
          return "Point(" + b(this.x) + ", " + b(this.y) + ")";
        }
      };
      function J(e, r, a) {
        return e instanceof _e ? e : Y(e) ? new _e(e[0], e[1]) : e == null ? e : typeof e == "object" && "x" in e && "y" in e ? new _e(e.x, e.y) : new _e(e, r, a);
      }
      function de(e, r) {
        if (e)
          for (var a = r ? [e, r] : e, c = 0, f = a.length; c < f; c++)
            this.extend(a[c]);
      }
      de.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(e) {
          var r, a;
          if (!e)
            return this;
          if (e instanceof _e || typeof e[0] == "number" || "x" in e)
            r = a = J(e);
          else if (e = He(e), r = e.min, a = e.max, !r || !a)
            return this;
          return !this.min && !this.max ? (this.min = r.clone(), this.max = a.clone()) : (this.min.x = Math.min(r.x, this.min.x), this.max.x = Math.max(a.x, this.max.x), this.min.y = Math.min(r.y, this.min.y), this.max.y = Math.max(a.y, this.max.y)), this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(e) {
          return J(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            e
          );
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
          return J(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
          return J(this.max.x, this.min.y);
        },
        // @method getTopLeft(): Point
        // Returns the top-left point of the bounds (i.e. [`this.min`](#bounds-min)).
        getTopLeft: function() {
          return this.min;
        },
        // @method getBottomRight(): Point
        // Returns the bottom-right point of the bounds (i.e. [`this.max`](#bounds-max)).
        getBottomRight: function() {
          return this.max;
        },
        // @method getSize(): Point
        // Returns the size of the given bounds
        getSize: function() {
          return this.max.subtract(this.min);
        },
        // @method contains(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains(point: Point): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(e) {
          var r, a;
          return typeof e[0] == "number" || e instanceof _e ? e = J(e) : e = He(e), e instanceof de ? (r = e.min, a = e.max) : r = a = e, r.x >= this.min.x && a.x <= this.max.x && r.y >= this.min.y && a.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(e) {
          e = He(e);
          var r = this.min, a = this.max, c = e.min, f = e.max, y = f.x >= r.x && c.x <= a.x, I = f.y >= r.y && c.y <= a.y;
          return y && I;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(e) {
          e = He(e);
          var r = this.min, a = this.max, c = e.min, f = e.max, y = f.x > r.x && c.x < a.x, I = f.y > r.y && c.y < a.y;
          return y && I;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this.min && this.max);
        },
        // @method pad(bufferRatio: Number): Bounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(e) {
          var r = this.min, a = this.max, c = Math.abs(r.x - a.x) * e, f = Math.abs(r.y - a.y) * e;
          return He(
            J(r.x - c, r.y - f),
            J(a.x + c, a.y + f)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(e) {
          return e ? (e = He(e), this.min.equals(e.getTopLeft()) && this.max.equals(e.getBottomRight())) : !1;
        }
      };
      function He(e, r) {
        return !e || e instanceof de ? e : new de(e, r);
      }
      function gt(e, r) {
        if (e)
          for (var a = r ? [e, r] : e, c = 0, f = a.length; c < f; c++)
            this.extend(a[c]);
      }
      gt.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(e) {
          var r = this._southWest, a = this._northEast, c, f;
          if (e instanceof ke)
            c = e, f = e;
          else if (e instanceof gt) {
            if (c = e._southWest, f = e._northEast, !c || !f)
              return this;
          } else
            return e ? this.extend(xe(e) || re(e)) : this;
          return !r && !a ? (this._southWest = new ke(c.lat, c.lng), this._northEast = new ke(f.lat, f.lng)) : (r.lat = Math.min(c.lat, r.lat), r.lng = Math.min(c.lng, r.lng), a.lat = Math.max(f.lat, a.lat), a.lng = Math.max(f.lng, a.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(e) {
          var r = this._southWest, a = this._northEast, c = Math.abs(r.lat - a.lat) * e, f = Math.abs(r.lng - a.lng) * e;
          return new gt(
            new ke(r.lat - c, r.lng - f),
            new ke(a.lat + c, a.lng + f)
          );
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
          return new ke(
            (this._southWest.lat + this._northEast.lat) / 2,
            (this._southWest.lng + this._northEast.lng) / 2
          );
        },
        // @method getSouthWest(): LatLng
        // Returns the south-west point of the bounds.
        getSouthWest: function() {
          return this._southWest;
        },
        // @method getNorthEast(): LatLng
        // Returns the north-east point of the bounds.
        getNorthEast: function() {
          return this._northEast;
        },
        // @method getNorthWest(): LatLng
        // Returns the north-west point of the bounds.
        getNorthWest: function() {
          return new ke(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
          return new ke(this.getSouth(), this.getEast());
        },
        // @method getWest(): Number
        // Returns the west longitude of the bounds
        getWest: function() {
          return this._southWest.lng;
        },
        // @method getSouth(): Number
        // Returns the south latitude of the bounds
        getSouth: function() {
          return this._southWest.lat;
        },
        // @method getEast(): Number
        // Returns the east longitude of the bounds
        getEast: function() {
          return this._northEast.lng;
        },
        // @method getNorth(): Number
        // Returns the north latitude of the bounds
        getNorth: function() {
          return this._northEast.lat;
        },
        // @method contains(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle contains the given one.
        // @alternative
        // @method contains (latlng: LatLng): Boolean
        // Returns `true` if the rectangle contains the given point.
        contains: function(e) {
          typeof e[0] == "number" || e instanceof ke || "lat" in e ? e = xe(e) : e = re(e);
          var r = this._southWest, a = this._northEast, c, f;
          return e instanceof gt ? (c = e.getSouthWest(), f = e.getNorthEast()) : c = f = e, c.lat >= r.lat && f.lat <= a.lat && c.lng >= r.lng && f.lng <= a.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(e) {
          e = re(e);
          var r = this._southWest, a = this._northEast, c = e.getSouthWest(), f = e.getNorthEast(), y = f.lat >= r.lat && c.lat <= a.lat, I = f.lng >= r.lng && c.lng <= a.lng;
          return y && I;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(e) {
          e = re(e);
          var r = this._southWest, a = this._northEast, c = e.getSouthWest(), f = e.getNorthEast(), y = f.lat > r.lat && c.lat < a.lat, I = f.lng > r.lng && c.lng < a.lng;
          return y && I;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(e, r) {
          return e ? (e = re(e), this._southWest.equals(e.getSouthWest(), r) && this._northEast.equals(e.getNorthEast(), r)) : !1;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this._southWest && this._northEast);
        }
      };
      function re(e, r) {
        return e instanceof gt ? e : new gt(e, r);
      }
      function ke(e, r, a) {
        if (isNaN(e) || isNaN(r))
          throw new Error("Invalid LatLng object: (" + e + ", " + r + ")");
        this.lat = +e, this.lng = +r, a !== void 0 && (this.alt = +a);
      }
      ke.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(e, r) {
          if (!e)
            return !1;
          e = xe(e);
          var a = Math.max(
            Math.abs(this.lat - e.lat),
            Math.abs(this.lng - e.lng)
          );
          return a <= (r === void 0 ? 1e-9 : r);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(e) {
          return "LatLng(" + b(this.lat, e) + ", " + b(this.lng, e) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(e) {
          return Qt.distance(this, xe(e));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return Qt.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(e) {
          var r = 180 * e / 40075017, a = r / Math.cos(Math.PI / 180 * this.lat);
          return re(
            [this.lat - r, this.lng - a],
            [this.lat + r, this.lng + a]
          );
        },
        clone: function() {
          return new ke(this.lat, this.lng, this.alt);
        }
      };
      function xe(e, r, a) {
        return e instanceof ke ? e : Y(e) && typeof e[0] != "object" ? e.length === 3 ? new ke(e[0], e[1], e[2]) : e.length === 2 ? new ke(e[0], e[1]) : null : e == null ? e : typeof e == "object" && "lat" in e ? new ke(e.lat, "lng" in e ? e.lng : e.lon, e.alt) : r === void 0 ? null : new ke(e, r, a);
      }
      var Kt = {
        // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
        // Projects geographical coordinates into pixel coordinates for a given zoom.
        latLngToPoint: function(e, r) {
          var a = this.projection.project(e), c = this.scale(r);
          return this.transformation._transform(a, c);
        },
        // @method pointToLatLng(point: Point, zoom: Number): LatLng
        // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
        // zoom into geographical coordinates.
        pointToLatLng: function(e, r) {
          var a = this.scale(r), c = this.transformation.untransform(e, a);
          return this.projection.unproject(c);
        },
        // @method project(latlng: LatLng): Point
        // Projects geographical coordinates into coordinates in units accepted for
        // this CRS (e.g. meters for EPSG:3857, for passing it to WMS services).
        project: function(e) {
          return this.projection.project(e);
        },
        // @method unproject(point: Point): LatLng
        // Given a projected coordinate returns the corresponding LatLng.
        // The inverse of `project`.
        unproject: function(e) {
          return this.projection.unproject(e);
        },
        // @method scale(zoom: Number): Number
        // Returns the scale used when transforming projected coordinates into
        // pixel coordinates for a particular zoom. For example, it returns
        // `256 * 2^zoom` for Mercator-based CRS.
        scale: function(e) {
          return 256 * Math.pow(2, e);
        },
        // @method zoom(scale: Number): Number
        // Inverse of `scale()`, returns the zoom level corresponding to a scale
        // factor of `scale`.
        zoom: function(e) {
          return Math.log(e / 256) / Math.LN2;
        },
        // @method getProjectedBounds(zoom: Number): Bounds
        // Returns the projection's bounds scaled and transformed for the provided `zoom`.
        getProjectedBounds: function(e) {
          if (this.infinite)
            return null;
          var r = this.projection.bounds, a = this.scale(e), c = this.transformation.transform(r.min, a), f = this.transformation.transform(r.max, a);
          return new de(c, f);
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates.
        // @property code: String
        // Standard code name of the CRS passed into WMS services (e.g. `'EPSG:3857'`)
        //
        // @property wrapLng: Number[]
        // An array of two numbers defining whether the longitude (horizontal) coordinate
        // axis wraps around a given range and how. Defaults to `[-180, 180]` in most
        // geographical CRSs. If `undefined`, the longitude axis does not wrap around.
        //
        // @property wrapLat: Number[]
        // Like `wrapLng`, but for the latitude (vertical) axis.
        // wrapLng: [min, max],
        // wrapLat: [min, max],
        // @property infinite: Boolean
        // If true, the coordinate space will be unbounded (infinite in both axes)
        infinite: !1,
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where lat and lng has been wrapped according to the
        // CRS's `wrapLat` and `wrapLng` properties, if they are outside the CRS's bounds.
        wrapLatLng: function(e) {
          var r = this.wrapLng ? A(e.lng, this.wrapLng, !0) : e.lng, a = this.wrapLat ? A(e.lat, this.wrapLat, !0) : e.lat, c = e.alt;
          return new ke(a, r, c);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(e) {
          var r = e.getCenter(), a = this.wrapLatLng(r), c = r.lat - a.lat, f = r.lng - a.lng;
          if (c === 0 && f === 0)
            return e;
          var y = e.getSouthWest(), I = e.getNorthEast(), B = new ke(y.lat - c, y.lng - f), W = new ke(I.lat - c, I.lng - f);
          return new gt(B, W);
        }
      }, Qt = d({}, Kt, {
        wrapLng: [-180, 180],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371e3,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(e, r) {
          var a = Math.PI / 180, c = e.lat * a, f = r.lat * a, y = Math.sin((r.lat - e.lat) * a / 2), I = Math.sin((r.lng - e.lng) * a / 2), B = y * y + Math.cos(c) * Math.cos(f) * I * I, W = 2 * Math.atan2(Math.sqrt(B), Math.sqrt(1 - B));
          return this.R * W;
        }
      }), Pn = 6378137, ln = {
        R: Pn,
        MAX_LATITUDE: 85.0511287798,
        project: function(e) {
          var r = Math.PI / 180, a = this.MAX_LATITUDE, c = Math.max(Math.min(a, e.lat), -a), f = Math.sin(c * r);
          return new _e(
            this.R * e.lng * r,
            this.R * Math.log((1 + f) / (1 - f)) / 2
          );
        },
        unproject: function(e) {
          var r = 180 / Math.PI;
          return new ke(
            (2 * Math.atan(Math.exp(e.y / this.R)) - Math.PI / 2) * r,
            e.x * r / this.R
          );
        },
        bounds: (function() {
          var e = Pn * Math.PI;
          return new de([-e, -e], [e, e]);
        })()
      };
      function qn(e, r, a, c) {
        if (Y(e)) {
          this._a = e[0], this._b = e[1], this._c = e[2], this._d = e[3];
          return;
        }
        this._a = e, this._b = r, this._c = a, this._d = c;
      }
      qn.prototype = {
        // @method transform(point: Point, scale?: Number): Point
        // Returns a transformed point, optionally multiplied by the given scale.
        // Only accepts actual `L.Point` instances, not arrays.
        transform: function(e, r) {
          return this._transform(e.clone(), r);
        },
        // destructive transform (faster)
        _transform: function(e, r) {
          return r = r || 1, e.x = r * (this._a * e.x + this._b), e.y = r * (this._c * e.y + this._d), e;
        },
        // @method untransform(point: Point, scale?: Number): Point
        // Returns the reverse transformation of the given point, optionally divided
        // by the given scale. Only accepts actual `L.Point` instances, not arrays.
        untransform: function(e, r) {
          return r = r || 1, new _e(
            (e.x / r - this._b) / this._a,
            (e.y / r - this._d) / this._c
          );
        }
      };
      function Un(e, r, a, c) {
        return new qn(e, r, a, c);
      }
      var Ui = d({}, Qt, {
        code: "EPSG:3857",
        projection: ln,
        transformation: (function() {
          var e = 0.5 / (Math.PI * ln.R);
          return Un(e, 0.5, -e, 0.5);
        })()
      }), _n = d({}, Ui, {
        code: "EPSG:900913"
      });
      function zt(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e);
      }
      function Vi(e, r) {
        var a = "", c, f, y, I, B, W;
        for (c = 0, y = e.length; c < y; c++) {
          for (B = e[c], f = 0, I = B.length; f < I; f++)
            W = B[f], a += (f ? "L" : "M") + W.x + " " + W.y;
          a += r ? me.svg ? "z" : "x" : "";
        }
        return a || "M0 0";
      }
      var un = document.documentElement.style, cn = "ActiveXObject" in window, vr = cn && !document.addEventListener, Kn = "msLaunchUri" in navigator && !("documentMode" in document), en = Et("webkit"), Qn = Et("android"), xn = Et("android 2") || Et("android 3"), zi = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Vn = Qn && Et("Google") && zi < 537 && !("AudioNode" in window), er = !!window.opera, gn = !Kn && Et("chrome"), ei = Et("gecko") && !en && !er && !cn, bi = !gn && Et("safari"), Oi = Et("phantom"), di = "OTransition" in un, Fn = navigator.platform.indexOf("Win") === 0, Wi = cn && "transition" in un, fi = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !xn, ti = "MozPerspective" in un, An = !window.L_DISABLE_3D && (Wi || fi || ti) && !di && !Oi, ni = typeof orientation < "u" || Et("mobile"), Li = ni && en, Ii = ni && fi, ii = !window.PointerEvent && window.MSPointerEvent, tr = !!(window.PointerEvent || ii), Zi = "ontouchstart" in window || !!window.TouchEvent, F = !window.L_NO_TOUCH && (Zi || tr), ae = ni && er, K = ni && ei, ve = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Be = (function() {
        var e = !1;
        try {
          var r = Object.defineProperty({}, "passive", {
            get: function() {
              e = !0;
            }
          });
          window.addEventListener("testPassiveEventSupport", w, r), window.removeEventListener("testPassiveEventSupport", w, r);
        } catch {
        }
        return e;
      })(), Fe = (function() {
        return !!document.createElement("canvas").getContext;
      })(), tt = !!(document.createElementNS && zt("svg").createSVGRect), mt = !!tt && (function() {
        var e = document.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      })(), xt = !tt && (function() {
        try {
          var e = document.createElement("div");
          e.innerHTML = '<v:shape adj="1"/>';
          var r = e.firstChild;
          return r.style.behavior = "url(#default#VML)", r && typeof r.adj == "object";
        } catch {
          return !1;
        }
      })(), Ut = navigator.platform.indexOf("Mac") === 0, tn = navigator.platform.indexOf("Linux") === 0;
      function Et(e) {
        return navigator.userAgent.toLowerCase().indexOf(e) >= 0;
      }
      var me = {
        ie: cn,
        ielt9: vr,
        edge: Kn,
        webkit: en,
        android: Qn,
        android23: xn,
        androidStock: Vn,
        opera: er,
        chrome: gn,
        gecko: ei,
        safari: bi,
        phantom: Oi,
        opera12: di,
        win: Fn,
        ie3d: Wi,
        webkit3d: fi,
        gecko3d: ti,
        any3d: An,
        mobile: ni,
        mobileWebkit: Li,
        mobileWebkit3d: Ii,
        msPointer: ii,
        pointer: tr,
        touch: F,
        touchNative: Zi,
        mobileOpera: ae,
        mobileGecko: K,
        retina: ve,
        passiveEvents: Be,
        canvas: Fe,
        svg: tt,
        vml: xt,
        inlineSvg: mt,
        mac: Ut,
        linux: tn
      }, ri = me.msPointer ? "MSPointerDown" : "pointerdown", Hi = me.msPointer ? "MSPointerMove" : "pointermove", pi = me.msPointer ? "MSPointerUp" : "pointerup", yr = me.msPointer ? "MSPointerCancel" : "pointercancel", Ft = {
        touchstart: ri,
        touchmove: Hi,
        touchend: pi,
        touchcancel: yr
      }, Cn = {
        touchstart: $n,
        touchmove: $t,
        touchend: $t,
        touchcancel: $t
      }, ct = {}, Wt = !1;
      function bn(e, r, a) {
        return r === "touchstart" && hn(), Cn[r] ? (a = Cn[r].bind(this, a), e.addEventListener(Ft[r], a, !1), a) : (console.warn("wrong event specified:", r), w);
      }
      function si(e, r, a) {
        if (!Ft[r]) {
          console.warn("wrong event specified:", r);
          return;
        }
        e.removeEventListener(Ft[r], a, !1);
      }
      function mn(e) {
        ct[e.pointerId] = e;
      }
      function On(e) {
        ct[e.pointerId] && (ct[e.pointerId] = e);
      }
      function oi(e) {
        delete ct[e.pointerId];
      }
      function hn() {
        Wt || (document.addEventListener(ri, mn, !0), document.addEventListener(Hi, On, !0), document.addEventListener(pi, oi, !0), document.addEventListener(yr, oi, !0), Wt = !0);
      }
      function $t(e, r) {
        if (r.pointerType !== (r.MSPOINTER_TYPE_MOUSE || "mouse")) {
          r.touches = [];
          for (var a in ct)
            r.touches.push(ct[a]);
          r.changedTouches = [r], e(r);
        }
      }
      function $n(e, r) {
        r.MSPOINTER_TYPE_TOUCH && r.pointerType === r.MSPOINTER_TYPE_TOUCH && it(r), $t(e, r);
      }
      function Pr(e) {
        var r = {}, a, c;
        for (c in e)
          a = e[c], r[c] = a && a.bind ? a.bind(e) : a;
        return e = r, r.type = "dblclick", r.detail = 2, r.isTrusted = !1, r._simulated = !0, r;
      }
      var hs = 200;
      function ds(e, r) {
        e.addEventListener("dblclick", r);
        var a = 0, c;
        function f(y) {
          if (y.detail !== 1) {
            c = y.detail;
            return;
          }
          if (!(y.pointerType === "mouse" || y.sourceCapabilities && !y.sourceCapabilities.firesTouchEvents)) {
            var I = Bl(y);
            if (!(I.some(function(W) {
              return W instanceof HTMLLabelElement && W.attributes.for;
            }) && !I.some(function(W) {
              return W instanceof HTMLInputElement || W instanceof HTMLSelectElement;
            }))) {
              var B = Date.now();
              B - a <= hs ? (c++, c === 2 && r(Pr(y))) : c = 1, a = B;
            }
          }
        }
        return e.addEventListener("click", f), {
          dblclick: r,
          simDblclick: f
        };
      }
      function _i(e, r) {
        e.removeEventListener("dblclick", r.dblclick), e.removeEventListener("click", r.simDblclick);
      }
      var Er = Ps(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), Yi = Ps(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), qr = Yi === "webkitTransition" || Yi === "OTransition" ? Yi + "End" : "transitionend";
      function Kr(e) {
        return typeof e == "string" ? document.getElementById(e) : e;
      }
      function nr(e, r) {
        var a = e.style[r] || e.currentStyle && e.currentStyle[r];
        if ((!a || a === "auto") && document.defaultView) {
          var c = document.defaultView.getComputedStyle(e, null);
          a = c ? c[r] : null;
        }
        return a === "auto" ? null : a;
      }
      function nt(e, r, a) {
        var c = document.createElement(e);
        return c.className = r || "", a && a.appendChild(c), c;
      }
      function Nt(e) {
        var r = e.parentNode;
        r && r.removeChild(e);
      }
      function ir(e) {
        for (; e.firstChild; )
          e.removeChild(e.firstChild);
      }
      function Mn(e) {
        var r = e.parentNode;
        r && r.lastChild !== e && r.appendChild(e);
      }
      function gi(e) {
        var r = e.parentNode;
        r && r.firstChild !== e && r.insertBefore(e, r.firstChild);
      }
      function xr(e, r) {
        if (e.classList !== void 0)
          return e.classList.contains(r);
        var a = Bo(e);
        return a.length > 0 && new RegExp("(^|\\s)" + r + "(\\s|$)").test(a);
      }
      function We(e, r) {
        if (e.classList !== void 0)
          for (var a = k(r), c = 0, f = a.length; c < f; c++)
            e.classList.add(a[c]);
        else if (!xr(e, r)) {
          var y = Bo(e);
          Mo(e, (y ? y + " " : "") + r);
        }
      }
      function Dt(e, r) {
        e.classList !== void 0 ? e.classList.remove(r) : Mo(e, N((" " + Bo(e) + " ").replace(" " + r + " ", " ")));
      }
      function Mo(e, r) {
        e.className.baseVal === void 0 ? e.className = r : e.className.baseVal = r;
      }
      function Bo(e) {
        return e.correspondingElement && (e = e.correspondingElement), e.className.baseVal === void 0 ? e.className : e.className.baseVal;
      }
      function Ni(e, r) {
        "opacity" in e.style ? e.style.opacity = r : "filter" in e.style && Pl(e, r);
      }
      function Pl(e, r) {
        var a = !1, c = "DXImageTransform.Microsoft.Alpha";
        try {
          a = e.filters.item(c);
        } catch {
          if (r === 1)
            return;
        }
        r = Math.round(r * 100), a ? (a.Enabled = r !== 100, a.Opacity = r) : e.style.filter += " progid:" + c + "(opacity=" + r + ")";
      }
      function Ps(e) {
        for (var r = document.documentElement.style, a = 0; a < e.length; a++)
          if (e[a] in r)
            return e[a];
        return !1;
      }
      function fs(e, r, a) {
        var c = r || new _e(0, 0);
        e.style[Er] = (me.ie3d ? "translate(" + c.x + "px," + c.y + "px)" : "translate3d(" + c.x + "px," + c.y + "px,0)") + (a ? " scale(" + a + ")" : "");
      }
      function dn(e, r) {
        e._leaflet_pos = r, me.any3d ? fs(e, r) : (e.style.left = r.x + "px", e.style.top = r.y + "px");
      }
      function Fr(e) {
        return e._leaflet_pos || new _e(0, 0);
      }
      var ps, Tr, Go;
      if ("onselectstart" in document)
        ps = function() {
          Qe(window, "selectstart", it);
        }, Tr = function() {
          Gt(window, "selectstart", it);
        };
      else {
        var xs = Ps(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        ps = function() {
          if (xs) {
            var e = document.documentElement.style;
            Go = e[xs], e[xs] = "none";
          }
        }, Tr = function() {
          xs && (document.documentElement.style[xs] = Go, Go = void 0);
        };
      }
      function ya() {
        Qe(window, "dragstart", it);
      }
      function ko() {
        Gt(window, "dragstart", it);
      }
      var io, Uo;
      function Vo(e) {
        for (; e.tabIndex === -1; )
          e = e.parentNode;
        e.style && (zo(), io = e, Uo = e.style.outlineStyle, e.style.outlineStyle = "none", Qe(window, "keydown", zo));
      }
      function zo() {
        io && (io.style.outlineStyle = Uo, io = void 0, Uo = void 0, Gt(window, "keydown", zo));
      }
      function xl(e) {
        do
          e = e.parentNode;
        while ((!e.offsetWidth || !e.offsetHeight) && e !== document.body);
        return e;
      }
      function Ea(e) {
        var r = e.getBoundingClientRect();
        return {
          x: r.width / e.offsetWidth || 1,
          y: r.height / e.offsetHeight || 1,
          boundingClientRect: r
        };
      }
      var Fl = {
        __proto__: null,
        TRANSFORM: Er,
        TRANSITION: Yi,
        TRANSITION_END: qr,
        get: Kr,
        getStyle: nr,
        create: nt,
        remove: Nt,
        empty: ir,
        toFront: Mn,
        toBack: gi,
        hasClass: xr,
        addClass: We,
        removeClass: Dt,
        setClass: Mo,
        getClass: Bo,
        setOpacity: Ni,
        testProp: Ps,
        setTransform: fs,
        setPosition: dn,
        getPosition: Fr,
        get disableTextSelection() {
          return ps;
        },
        get enableTextSelection() {
          return Tr;
        },
        disableImageDrag: ya,
        enableImageDrag: ko,
        preventOutline: Vo,
        restoreOutline: zo,
        getSizedParentNode: xl,
        getScale: Ea
      };
      function Qe(e, r, a, c) {
        if (r && typeof r == "object")
          for (var f in r)
            Ta(e, f, r[f], a);
        else {
          r = k(r);
          for (var y = 0, I = r.length; y < I; y++)
            Ta(e, r[y], a, c);
        }
        return this;
      }
      var wr = "_leaflet_events";
      function Gt(e, r, a, c) {
        if (arguments.length === 1)
          Ml(e), delete e[wr];
        else if (r && typeof r == "object")
          for (var f in r)
            wa(e, f, r[f], a);
        else if (r = k(r), arguments.length === 2)
          Ml(e, function(B) {
            return R(r, B) !== -1;
          });
        else
          for (var y = 0, I = r.length; y < I; y++)
            wa(e, r[y], a, c);
        return this;
      }
      function Ml(e, r) {
        for (var a in e[wr]) {
          var c = a.split(/\d/)[0];
          (!r || r(c)) && wa(e, c, null, null, a);
        }
      }
      var ro = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function Ta(e, r, a, c) {
        var f = r + m(a) + (c ? "_" + m(c) : "");
        if (e[wr] && e[wr][f])
          return this;
        var y = function(B) {
          return a.call(c || e, B || window.event);
        }, I = y;
        !me.touchNative && me.pointer && r.indexOf("touch") === 0 ? y = bn(e, r, y) : me.touch && r === "dblclick" ? y = ds(e, y) : "addEventListener" in e ? r === "touchstart" || r === "touchmove" || r === "wheel" || r === "mousewheel" ? e.addEventListener(ro[r] || r, y, me.passiveEvents ? { passive: !1 } : !1) : r === "mouseenter" || r === "mouseleave" ? (y = function(B) {
          B = B || window.event, Aa(e, B) && I(B);
        }, e.addEventListener(ro[r], y, !1)) : e.addEventListener(r, I, !1) : e.attachEvent("on" + r, y), e[wr] = e[wr] || {}, e[wr][f] = y;
      }
      function wa(e, r, a, c, f) {
        f = f || r + m(a) + (c ? "_" + m(c) : "");
        var y = e[wr] && e[wr][f];
        if (!y)
          return this;
        !me.touchNative && me.pointer && r.indexOf("touch") === 0 ? si(e, r, y) : me.touch && r === "dblclick" ? _i(e, y) : "removeEventListener" in e ? e.removeEventListener(ro[r] || r, y, !1) : e.detachEvent("on" + r, y), e[wr][f] = null;
      }
      function _s(e) {
        return e.stopPropagation ? e.stopPropagation() : e.originalEvent ? e.originalEvent._stopped = !0 : e.cancelBubble = !0, this;
      }
      function Sa(e) {
        return Ta(e, "wheel", _s), this;
      }
      function so(e) {
        return Qe(e, "mousedown touchstart dblclick contextmenu", _s), e._leaflet_disable_click = !0, this;
      }
      function it(e) {
        return e.preventDefault ? e.preventDefault() : e.returnValue = !1, this;
      }
      function At(e) {
        return it(e), _s(e), this;
      }
      function Bl(e) {
        if (e.composedPath)
          return e.composedPath();
        for (var r = [], a = e.target; a; )
          r.push(a), a = a.parentNode;
        return r;
      }
      function Gl(e, r) {
        if (!r)
          return new _e(e.clientX, e.clientY);
        var a = Ea(r), c = a.boundingClientRect;
        return new _e(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (e.clientX - c.left) / a.x - r.clientLeft,
          (e.clientY - c.top) / a.y - r.clientTop
        );
      }
      var ec = me.linux && me.chrome ? window.devicePixelRatio : me.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function kl(e) {
        return me.edge ? e.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          e.deltaY && e.deltaMode === 0 ? -e.deltaY / ec : (
            // Pixels
            e.deltaY && e.deltaMode === 1 ? -e.deltaY * 20 : (
              // Lines
              e.deltaY && e.deltaMode === 2 ? -e.deltaY * 60 : (
                // Pages
                e.deltaX || e.deltaZ ? 0 : (
                  // Skip horizontal/depth wheel events
                  e.wheelDelta ? (e.wheelDeltaY || e.wheelDelta) / 2 : (
                    // Legacy IE pixels
                    e.detail && Math.abs(e.detail) < 32765 ? -e.detail * 20 : (
                      // Legacy Moz lines
                      e.detail ? e.detail / -32765 * 60 : (
                        // Legacy Moz pages
                        0
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
      function Aa(e, r) {
        var a = r.relatedTarget;
        if (!a)
          return !0;
        try {
          for (; a && a !== e; )
            a = a.parentNode;
        } catch {
          return !1;
        }
        return a !== e;
      }
      var tc = {
        __proto__: null,
        on: Qe,
        off: Gt,
        stopPropagation: _s,
        disableScrollPropagation: Sa,
        disableClickPropagation: so,
        preventDefault: it,
        stop: At,
        getPropagationPath: Bl,
        getMousePosition: Gl,
        getWheelDelta: kl,
        isExternalTarget: Aa,
        addListener: Qe,
        removeListener: Gt
      }, Ca = Pe.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(e, r, a, c) {
          this.stop(), this._el = e, this._inProgress = !0, this._duration = a || 0.25, this._easeOutPower = 1 / Math.max(c || 0.5, 0.2), this._startPos = Fr(e), this._offset = r.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function() {
          this._animId = j(this._animate, this), this._step();
        },
        _step: function(e) {
          var r = +/* @__PURE__ */ new Date() - this._startTime, a = this._duration * 1e3;
          r < a ? this._runFrame(this._easeOut(r / a), e) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(e, r) {
          var a = this._startPos.add(this._offset.multiplyBy(e));
          r && a._round(), dn(this._el, a), this.fire("step");
        },
        _complete: function() {
          U(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function(e) {
          return 1 - Math.pow(1 - e, this._easeOutPower);
        }
      }), vt = Pe.extend({
        options: {
          // @section Map State Options
          // @option crs: CRS = L.CRS.EPSG3857
          // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
          // sure what it means.
          crs: Ui,
          // @option center: LatLng = undefined
          // Initial geographic center of the map
          center: void 0,
          // @option zoom: Number = undefined
          // Initial map zoom level
          zoom: void 0,
          // @option minZoom: Number = *
          // Minimum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the lowest of their `minZoom` options will be used instead.
          minZoom: void 0,
          // @option maxZoom: Number = *
          // Maximum zoom level of the map.
          // If not specified and at least one `GridLayer` or `TileLayer` is in the map,
          // the highest of their `maxZoom` options will be used instead.
          maxZoom: void 0,
          // @option layers: Layer[] = []
          // Array of layers that will be added to the map initially
          layers: [],
          // @option maxBounds: LatLngBounds = null
          // When this option is set, the map restricts the view to the given
          // geographical bounds, bouncing the user back if the user tries to pan
          // outside the view. To set the restriction dynamically, use
          // [`setMaxBounds`](#map-setmaxbounds) method.
          maxBounds: void 0,
          // @option renderer: Renderer = *
          // The default method for drawing vector layers on the map. `L.SVG`
          // or `L.Canvas` by default depending on browser support.
          renderer: void 0,
          // @section Animation Options
          // @option zoomAnimation: Boolean = true
          // Whether the map zoom animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          zoomAnimation: !0,
          // @option zoomAnimationThreshold: Number = 4
          // Won't animate zoom if the zoom difference exceeds this value.
          zoomAnimationThreshold: 4,
          // @option fadeAnimation: Boolean = true
          // Whether the tile fade animation is enabled. By default it's enabled
          // in all browsers that support CSS3 Transitions except Android.
          fadeAnimation: !0,
          // @option markerZoomAnimation: Boolean = true
          // Whether markers animate their zoom with the zoom animation, if disabled
          // they will disappear for the length of the animation. By default it's
          // enabled in all browsers that support CSS3 Transitions except Android.
          markerZoomAnimation: !0,
          // @option transform3DLimit: Number = 2^23
          // Defines the maximum size of a CSS translation transform. The default
          // value should not be changed unless a web browser positions layers in
          // the wrong place after doing a large `panBy`.
          transform3DLimit: 8388608,
          // Precision limit of a 32-bit float
          // @section Interaction Options
          // @option zoomSnap: Number = 1
          // Forces the map's zoom level to always be a multiple of this, particularly
          // right after a [`fitBounds()`](#map-fitbounds) or a pinch-zoom.
          // By default, the zoom level snaps to the nearest integer; lower values
          // (e.g. `0.5` or `0.1`) allow for greater granularity. A value of `0`
          // means the zoom level will not be snapped after `fitBounds` or a pinch-zoom.
          zoomSnap: 1,
          // @option zoomDelta: Number = 1
          // Controls how much the map's zoom level will change after a
          // [`zoomIn()`](#map-zoomin), [`zoomOut()`](#map-zoomout), pressing `+`
          // or `-` on the keyboard, or using the [zoom controls](#control-zoom).
          // Values smaller than `1` (e.g. `0.5`) allow for greater granularity.
          zoomDelta: 1,
          // @option trackResize: Boolean = true
          // Whether the map automatically handles browser window resize to update itself.
          trackResize: !0
        },
        initialize: function(e, r) {
          r = G(this, r), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(e), this._initLayout(), this._onResize = _(this._onResize, this), this._initEvents(), r.maxBounds && this.setMaxBounds(r.maxBounds), r.zoom !== void 0 && (this._zoom = this._limitZoom(r.zoom)), r.center && r.zoom !== void 0 && this.setView(xe(r.center), r.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = Yi && me.any3d && !me.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Qe(this._proxy, qr, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(e, r, a) {
          if (r = r === void 0 ? this._zoom : this._limitZoom(r), e = this._limitCenter(xe(e), r, this.options.maxBounds), a = a || {}, this._stop(), this._loaded && !a.reset && a !== !0) {
            a.animate !== void 0 && (a.zoom = d({ animate: a.animate }, a.zoom), a.pan = d({ animate: a.animate, duration: a.duration }, a.pan));
            var c = this._zoom !== r ? this._tryAnimatedZoom && this._tryAnimatedZoom(e, r, a.zoom) : this._tryAnimatedPan(e, a.pan);
            if (c)
              return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(e, r, a.pan && a.pan.noMoveStart), this;
        },
        // @method setZoom(zoom: Number, options?: Zoom/pan options): this
        // Sets the zoom of the map.
        setZoom: function(e, r) {
          return this._loaded ? this.setView(this.getCenter(), e, { zoom: r }) : (this._zoom = e, this);
        },
        // @method zoomIn(delta?: Number, options?: Zoom options): this
        // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomIn: function(e, r) {
          return e = e || (me.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + e, r);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(e, r) {
          return e = e || (me.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - e, r);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(e, r, a) {
          var c = this.getZoomScale(r), f = this.getSize().divideBy(2), y = e instanceof _e ? e : this.latLngToContainerPoint(e), I = y.subtract(f).multiplyBy(1 - 1 / c), B = this.containerPointToLatLng(f.add(I));
          return this.setView(B, r, { zoom: a });
        },
        _getBoundsCenterZoom: function(e, r) {
          r = r || {}, e = e.getBounds ? e.getBounds() : re(e);
          var a = J(r.paddingTopLeft || r.padding || [0, 0]), c = J(r.paddingBottomRight || r.padding || [0, 0]), f = this.getBoundsZoom(e, !1, a.add(c));
          if (f = typeof r.maxZoom == "number" ? Math.min(r.maxZoom, f) : f, f === 1 / 0)
            return {
              center: e.getCenter(),
              zoom: f
            };
          var y = c.subtract(a).divideBy(2), I = this.project(e.getSouthWest(), f), B = this.project(e.getNorthEast(), f), W = this.unproject(I.add(B).divideBy(2).add(y), f);
          return {
            center: W,
            zoom: f
          };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(e, r) {
          if (e = re(e), !e.isValid())
            throw new Error("Bounds are not valid.");
          var a = this._getBoundsCenterZoom(e, r);
          return this.setView(a.center, a.zoom, r);
        },
        // @method fitWorld(options?: fitBounds options): this
        // Sets a map view that mostly contains the whole world with the maximum
        // zoom level possible.
        fitWorld: function(e) {
          return this.fitBounds([[-90, -180], [90, 180]], e);
        },
        // @method panTo(latlng: LatLng, options?: Pan options): this
        // Pans the map to a given center.
        panTo: function(e, r) {
          return this.setView(e, this._zoom, { pan: r });
        },
        // @method panBy(offset: Point, options?: Pan options): this
        // Pans the map by a given number of pixels (animated).
        panBy: function(e, r) {
          if (e = J(e).round(), r = r || {}, !e.x && !e.y)
            return this.fire("moveend");
          if (r.animate !== !0 && !this.getSize().contains(e))
            return this._resetView(this.unproject(this.project(this.getCenter()).add(e)), this.getZoom()), this;
          if (this._panAnim || (this._panAnim = new Ca(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), r.noMoveStart || this.fire("movestart"), r.animate !== !1) {
            We(this._mapPane, "leaflet-pan-anim");
            var a = this._getMapPanePos().subtract(e).round();
            this._panAnim.run(this._mapPane, a, r.duration || 0.25, r.easeLinearity);
          } else
            this._rawPanBy(e), this.fire("move").fire("moveend");
          return this;
        },
        // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) performing a smooth
        // pan-zoom animation.
        flyTo: function(e, r, a) {
          if (a = a || {}, a.animate === !1 || !me.any3d)
            return this.setView(e, r, a);
          this._stop();
          var c = this.project(this.getCenter()), f = this.project(e), y = this.getSize(), I = this._zoom;
          e = xe(e), r = r === void 0 ? I : r;
          var B = Math.max(y.x, y.y), W = B * this.getZoomScale(I, r), ne = f.distanceTo(c) || 1, Se = 1.42, Me = Se * Se;
          function ot(Zt) {
            var Eo = Zt ? -1 : 1, T = Zt ? W : B, Zs = W * W - B * B + Eo * Me * Me * ne * ne, ea = 2 * T * Me * ne, Ei = Zs / ea, ft = Math.sqrt(Ei * Ei + 1) - Ei, _c = ft < 1e-9 ? -18 : Math.log(ft);
            return _c;
          }
          function vn(Zt) {
            return (Math.exp(Zt) - Math.exp(-Zt)) / 2;
          }
          function rn(Zt) {
            return (Math.exp(Zt) + Math.exp(-Zt)) / 2;
          }
          function Jn(Zt) {
            return vn(Zt) / rn(Zt);
          }
          var Wn = ot(0);
          function sr(Zt) {
            return B * (rn(Wn) / rn(Wn + Se * Zt));
          }
          function hc(Zt) {
            return B * (rn(Wn) * Jn(Wn + Se * Zt) - vn(Wn)) / Me;
          }
          function dc(Zt) {
            return 1 - Math.pow(1 - Zt, 1.5);
          }
          var fc = Date.now(), tu = (ot(1) - Wn) / Se, pc = a.duration ? 1e3 * a.duration : 1e3 * tu * 0.8;
          function yo() {
            var Zt = (Date.now() - fc) / pc, Eo = dc(Zt) * tu;
            Zt <= 1 ? (this._flyToFrame = j(yo, this), this._move(
              this.unproject(c.add(f.subtract(c).multiplyBy(hc(Eo) / ne)), I),
              this.getScaleZoom(B / sr(Eo), I),
              { flyTo: !0 }
            )) : this._move(e, r)._moveEnd(!0);
          }
          return this._moveStart(!0, a.noMoveStart), yo.call(this), this;
        },
        // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
        // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
        flyToBounds: function(e, r) {
          var a = this._getBoundsCenterZoom(e, r);
          return this.flyTo(a.center, a.zoom, r);
        },
        // @method setMaxBounds(bounds: LatLngBounds): this
        // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
        setMaxBounds: function(e) {
          return e = re(e), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), e.isValid() ? (this.options.maxBounds = e, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
        },
        // @method setMinZoom(zoom: Number): this
        // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
        setMinZoom: function(e) {
          var r = this.options.minZoom;
          return this.options.minZoom = e, this._loaded && r !== e && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(e) : this;
        },
        // @method setMaxZoom(zoom: Number): this
        // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
        setMaxZoom: function(e) {
          var r = this.options.maxZoom;
          return this.options.maxZoom = e, this._loaded && r !== e && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(e) : this;
        },
        // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
        // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
        panInsideBounds: function(e, r) {
          this._enforcingBounds = !0;
          var a = this.getCenter(), c = this._limitCenter(a, this._zoom, re(e));
          return a.equals(c) || this.panTo(c, r), this._enforcingBounds = !1, this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(e, r) {
          r = r || {};
          var a = J(r.paddingTopLeft || r.padding || [0, 0]), c = J(r.paddingBottomRight || r.padding || [0, 0]), f = this.project(this.getCenter()), y = this.project(e), I = this.getPixelBounds(), B = He([I.min.add(a), I.max.subtract(c)]), W = B.getSize();
          if (!B.contains(y)) {
            this._enforcingBounds = !0;
            var ne = y.subtract(B.getCenter()), Se = B.extend(y).getSize().subtract(W);
            f.x += ne.x < 0 ? -Se.x : Se.x, f.y += ne.y < 0 ? -Se.y : Se.y, this.panTo(this.unproject(f), r), this._enforcingBounds = !1;
          }
          return this;
        },
        // @method invalidateSize(options: Zoom/pan options): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default. If `options.pan` is `false`, panning will not occur.
        // If `options.debounceMoveend` is `true`, it will delay `moveend` event so
        // that it doesn't happen often even if the method is called many
        // times in a row.
        // @alternative
        // @method invalidateSize(animate: Boolean): this
        // Checks if the map container size changed and updates the map if so —
        // call it after you've changed the map size dynamically, also animating
        // pan by default.
        invalidateSize: function(e) {
          if (!this._loaded)
            return this;
          e = d({
            animate: !1,
            pan: !0
          }, e === !0 ? { animate: !0 } : e);
          var r = this.getSize();
          this._sizeChanged = !0, this._lastCenter = null;
          var a = this.getSize(), c = r.divideBy(2).round(), f = a.divideBy(2).round(), y = c.subtract(f);
          return !y.x && !y.y ? this : (e.animate && e.pan ? this.panBy(y) : (e.pan && this._rawPanBy(y), this.fire("move"), e.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(_(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
            oldSize: r,
            newSize: a
          }));
        },
        // @section Methods for modifying map state
        // @method stop(): this
        // Stops the currently running `panTo` or `flyTo` animation, if any.
        stop: function() {
          return this.setZoom(this._limitZoom(this._zoom)), this.options.zoomSnap || this.fire("viewreset"), this._stop();
        },
        // @section Geolocation methods
        // @method locate(options?: Locate options): this
        // Tries to locate the user using the Geolocation API, firing a [`locationfound`](#map-locationfound)
        // event with location data on success or a [`locationerror`](#map-locationerror) event on failure,
        // and optionally sets the map view to the user's location with respect to
        // detection accuracy (or to the world view if geolocation failed).
        // Note that, if your page doesn't use HTTPS, this method will fail in
        // modern browsers ([Chrome 50 and newer](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins))
        // See `Locate options` for more details.
        locate: function(e) {
          if (e = this._locateOptions = d({
            timeout: 1e4,
            watch: !1
            // setView: false
            // maxZoom: <Number>
            // maximumAge: 0
            // enableHighAccuracy: false
          }, e), !("geolocation" in navigator))
            return this._handleGeolocationError({
              code: 0,
              message: "Geolocation not supported."
            }), this;
          var r = _(this._handleGeolocationResponse, this), a = _(this._handleGeolocationError, this);
          return e.watch ? this._locationWatchId = navigator.geolocation.watchPosition(r, a, e) : navigator.geolocation.getCurrentPosition(r, a, e), this;
        },
        // @method stopLocate(): this
        // Stops watching location previously initiated by `map.locate({watch: true})`
        // and aborts resetting the map view if map.locate was called with
        // `{setView: true}`.
        stopLocate: function() {
          return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this;
        },
        _handleGeolocationError: function(e) {
          if (this._container._leaflet_id) {
            var r = e.code, a = e.message || (r === 1 ? "permission denied" : r === 2 ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
              code: r,
              message: "Geolocation error: " + a + "."
            });
          }
        },
        _handleGeolocationResponse: function(e) {
          if (this._container._leaflet_id) {
            var r = e.coords.latitude, a = e.coords.longitude, c = new ke(r, a), f = c.toBounds(e.coords.accuracy * 2), y = this._locateOptions;
            if (y.setView) {
              var I = this.getBoundsZoom(f);
              this.setView(c, y.maxZoom ? Math.min(I, y.maxZoom) : I);
            }
            var B = {
              latlng: c,
              bounds: f,
              timestamp: e.timestamp
            };
            for (var W in e.coords)
              typeof e.coords[W] == "number" && (B[W] = e.coords[W]);
            this.fire("locationfound", B);
          }
        },
        // TODO Appropriate docs section?
        // @section Other Methods
        // @method addHandler(name: String, HandlerClass: Function): this
        // Adds a new `Handler` to the map, given its name and constructor function.
        addHandler: function(e, r) {
          if (!r)
            return this;
          var a = this[e] = new r(this);
          return this._handlers.push(a), this.options[e] && a.enable(), this;
        },
        // @method remove(): this
        // Destroys the map and clears all related event listeners.
        remove: function() {
          if (this._initEvents(!0), this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._containerId !== this._container._leaflet_id)
            throw new Error("Map container is being reused by another instance");
          try {
            delete this._container._leaflet_id, delete this._containerId;
          } catch {
            this._container._leaflet_id = void 0, this._containerId = void 0;
          }
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), Nt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (U(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
          var e;
          for (e in this._layers)
            this._layers[e].remove();
          for (e in this._panes)
            Nt(this._panes[e]);
          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(e, r) {
          var a = "leaflet-pane" + (e ? " leaflet-" + e.replace("Pane", "") + "-pane" : ""), c = nt("div", a, r || this._mapPane);
          return e && (this._panes[e] = c), c;
        },
        // @section Methods for Getting Map State
        // @method getCenter(): LatLng
        // Returns the geographical center of the map view
        getCenter: function() {
          return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter.clone() : this.layerPointToLatLng(this._getCenterLayerPoint());
        },
        // @method getZoom(): Number
        // Returns the current zoom level of the map view
        getZoom: function() {
          return this._zoom;
        },
        // @method getBounds(): LatLngBounds
        // Returns the geographical bounds visible in the current map view
        getBounds: function() {
          var e = this.getPixelBounds(), r = this.unproject(e.getBottomLeft()), a = this.unproject(e.getTopRight());
          return new gt(r, a);
        },
        // @method getMinZoom(): Number
        // Returns the minimum zoom level of the map (if set in the `minZoom` option of the map or of any layers), or `0` by default.
        getMinZoom: function() {
          return this.options.minZoom === void 0 ? this._layersMinZoom || 0 : this.options.minZoom;
        },
        // @method getMaxZoom(): Number
        // Returns the maximum zoom level of the map (if set in the `maxZoom` option of the map or of any layers).
        getMaxZoom: function() {
          return this.options.maxZoom === void 0 ? this._layersMaxZoom === void 0 ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom;
        },
        // @method getBoundsZoom(bounds: LatLngBounds, inside?: Boolean, padding?: Point): Number
        // Returns the maximum zoom level on which the given bounds fit to the map
        // view in its entirety. If `inside` (optional) is set to `true`, the method
        // instead returns the minimum zoom level on which the map view fits into
        // the given bounds in its entirety.
        getBoundsZoom: function(e, r, a) {
          e = re(e), a = J(a || [0, 0]);
          var c = this.getZoom() || 0, f = this.getMinZoom(), y = this.getMaxZoom(), I = e.getNorthWest(), B = e.getSouthEast(), W = this.getSize().subtract(a), ne = He(this.project(B, c), this.project(I, c)).getSize(), Se = me.any3d ? this.options.zoomSnap : 1, Me = W.x / ne.x, ot = W.y / ne.y, vn = r ? Math.max(Me, ot) : Math.min(Me, ot);
          return c = this.getScaleZoom(vn, c), Se && (c = Math.round(c / (Se / 100)) * (Se / 100), c = r ? Math.ceil(c / Se) * Se : Math.floor(c / Se) * Se), Math.max(f, Math.min(y, c));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new _e(
            this._container.clientWidth || 0,
            this._container.clientHeight || 0
          ), this._sizeChanged = !1), this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(e, r) {
          var a = this._getTopLeftPoint(e, r);
          return new de(a, a.add(this.getSize()));
        },
        // TODO: Check semantics - isn't the pixel origin the 0,0 coord relative to
        // the map pane? "left point of the map layer" can be confusing, specially
        // since there can be negative offsets.
        // @method getPixelOrigin(): Point
        // Returns the projected pixel coordinates of the top left point of
        // the map layer (useful in custom layer and overlay implementations).
        getPixelOrigin: function() {
          return this._checkIfLoaded(), this._pixelOrigin;
        },
        // @method getPixelWorldBounds(zoom?: Number): Bounds
        // Returns the world's bounds in pixel coordinates for zoom level `zoom`.
        // If `zoom` is omitted, the map's current zoom level is used.
        getPixelWorldBounds: function(e) {
          return this.options.crs.getProjectedBounds(e === void 0 ? this.getZoom() : e);
        },
        // @section Other Methods
        // @method getPane(pane: String|HTMLElement): HTMLElement
        // Returns a [map pane](#map-pane), given its name or its HTML element (its identity).
        getPane: function(e) {
          return typeof e == "string" ? this._panes[e] : e;
        },
        // @method getPanes(): Object
        // Returns a plain object containing the names of all [panes](#map-pane) as keys and
        // the panes as values.
        getPanes: function() {
          return this._panes;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the map.
        getContainer: function() {
          return this._container;
        },
        // @section Conversion Methods
        // @method getZoomScale(toZoom: Number, fromZoom: Number): Number
        // Returns the scale factor to be applied to a map transition from zoom level
        // `fromZoom` to `toZoom`. Used internally to help with zoom animations.
        getZoomScale: function(e, r) {
          var a = this.options.crs;
          return r = r === void 0 ? this._zoom : r, a.scale(e) / a.scale(r);
        },
        // @method getScaleZoom(scale: Number, fromZoom: Number): Number
        // Returns the zoom level that the map would end up at, if it is at `fromZoom`
        // level and everything is scaled by a factor of `scale`. Inverse of
        // [`getZoomScale`](#map-getZoomScale).
        getScaleZoom: function(e, r) {
          var a = this.options.crs;
          r = r === void 0 ? this._zoom : r;
          var c = a.zoom(e * a.scale(r));
          return isNaN(c) ? 1 / 0 : c;
        },
        // @method project(latlng: LatLng, zoom: Number): Point
        // Projects a geographical coordinate `LatLng` according to the projection
        // of the map's CRS, then scales it according to `zoom` and the CRS's
        // `Transformation`. The result is pixel coordinate relative to
        // the CRS origin.
        project: function(e, r) {
          return r = r === void 0 ? this._zoom : r, this.options.crs.latLngToPoint(xe(e), r);
        },
        // @method unproject(point: Point, zoom: Number): LatLng
        // Inverse of [`project`](#map-project).
        unproject: function(e, r) {
          return r = r === void 0 ? this._zoom : r, this.options.crs.pointToLatLng(J(e), r);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(e) {
          var r = J(e).add(this.getPixelOrigin());
          return this.unproject(r);
        },
        // @method latLngToLayerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the [origin pixel](#map-getpixelorigin).
        latLngToLayerPoint: function(e) {
          var r = this.project(xe(e))._round();
          return r._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(e) {
          return this.options.crs.wrapLatLng(xe(e));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(e) {
          return this.options.crs.wrapLatLngBounds(re(e));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(e, r) {
          return this.options.crs.distance(xe(e), xe(r));
        },
        // @method containerPointToLayerPoint(point: Point): Point
        // Given a pixel coordinate relative to the map container, returns the corresponding
        // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
        containerPointToLayerPoint: function(e) {
          return J(e).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(e) {
          return J(e).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(e) {
          var r = this.containerPointToLayerPoint(J(e));
          return this.layerPointToLatLng(r);
        },
        // @method latLngToContainerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the map container.
        latLngToContainerPoint: function(e) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(xe(e)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(e) {
          return Gl(e, this._container);
        },
        // @method mouseEventToLayerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to
        // the [origin pixel](#map-getpixelorigin) where the event took place.
        mouseEventToLayerPoint: function(e) {
          return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(e));
        },
        // @method mouseEventToLatLng(ev: MouseEvent): LatLng
        // Given a MouseEvent object, returns geographical coordinate where the
        // event took place.
        mouseEventToLatLng: function(e) {
          return this.layerPointToLatLng(this.mouseEventToLayerPoint(e));
        },
        // map initialization methods
        _initContainer: function(e) {
          var r = this._container = Kr(e);
          if (r) {
            if (r._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          Qe(r, "scroll", this._onScroll, this), this._containerId = m(r);
        },
        _initLayout: function() {
          var e = this._container;
          this._fadeAnimated = this.options.fadeAnimation && me.any3d, We(e, "leaflet-container" + (me.touch ? " leaflet-touch" : "") + (me.retina ? " leaflet-retina" : "") + (me.ielt9 ? " leaflet-oldie" : "") + (me.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var r = nr(e, "position");
          r !== "absolute" && r !== "relative" && r !== "fixed" && r !== "sticky" && (e.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var e = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), dn(this._mapPane, new _e(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (We(e.markerPane, "leaflet-zoom-hide"), We(e.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(e, r, a) {
          dn(this._mapPane, new _e(0, 0));
          var c = !this._loaded;
          this._loaded = !0, r = this._limitZoom(r), this.fire("viewprereset");
          var f = this._zoom !== r;
          this._moveStart(f, a)._move(e, r)._moveEnd(f), this.fire("viewreset"), c && this.fire("load");
        },
        _moveStart: function(e, r) {
          return e && this.fire("zoomstart"), r || this.fire("movestart"), this;
        },
        _move: function(e, r, a, c) {
          r === void 0 && (r = this._zoom);
          var f = this._zoom !== r;
          return this._zoom = r, this._lastCenter = e, this._pixelOrigin = this._getNewPixelOrigin(e), c ? a && a.pinch && this.fire("zoom", a) : ((f || a && a.pinch) && this.fire("zoom", a), this.fire("move", a)), this;
        },
        _moveEnd: function(e) {
          return e && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function() {
          return U(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(e) {
          dn(this._mapPane, this._getMapPanePos().subtract(e));
        },
        _getZoomSpan: function() {
          return this.getMaxZoom() - this.getMinZoom();
        },
        _panInsideMaxBounds: function() {
          this._enforcingBounds || this.panInsideBounds(this.options.maxBounds);
        },
        _checkIfLoaded: function() {
          if (!this._loaded)
            throw new Error("Set map center and zoom first.");
        },
        // DOM event handling
        // @section Interaction events
        _initEvents: function(e) {
          this._targets = {}, this._targets[m(this._container)] = this;
          var r = e ? Gt : Qe;
          r(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && r(window, "resize", this._onResize, this), me.any3d && this.options.transform3DLimit && (e ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
          U(this._resizeRequest), this._resizeRequest = j(
            function() {
              this.invalidateSize({ debounceMoveend: !0 });
            },
            this
          );
        },
        _onScroll: function() {
          this._container.scrollTop = 0, this._container.scrollLeft = 0;
        },
        _onMoveEnd: function() {
          var e = this._getMapPanePos();
          Math.max(Math.abs(e.x), Math.abs(e.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom());
        },
        _findEventTargets: function(e, r) {
          for (var a = [], c, f = r === "mouseout" || r === "mouseover", y = e.target || e.srcElement, I = !1; y; ) {
            if (c = this._targets[m(y)], c && (r === "click" || r === "preclick") && this._draggableMoved(c)) {
              I = !0;
              break;
            }
            if (c && c.listens(r, !0) && (f && !Aa(y, e) || (a.push(c), f)) || y === this._container)
              break;
            y = y.parentNode;
          }
          return !a.length && !I && !f && this.listens(r, !0) && (a = [this]), a;
        },
        _isClickDisabled: function(e) {
          for (; e && e !== this._container; ) {
            if (e._leaflet_disable_click)
              return !0;
            e = e.parentNode;
          }
        },
        _handleDOMEvent: function(e) {
          var r = e.target || e.srcElement;
          if (!(!this._loaded || r._leaflet_disable_events || e.type === "click" && this._isClickDisabled(r))) {
            var a = e.type;
            a === "mousedown" && Vo(r), this._fireDOMEvent(e, a);
          }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(e, r, a) {
          if (e.type === "click") {
            var c = d({}, e);
            c.type = "preclick", this._fireDOMEvent(c, c.type, a);
          }
          var f = this._findEventTargets(e, r);
          if (a) {
            for (var y = [], I = 0; I < a.length; I++)
              a[I].listens(r, !0) && y.push(a[I]);
            f = y.concat(f);
          }
          if (f.length) {
            r === "contextmenu" && it(e);
            var B = f[0], W = {
              originalEvent: e
            };
            if (e.type !== "keypress" && e.type !== "keydown" && e.type !== "keyup") {
              var ne = B.getLatLng && (!B._radius || B._radius <= 10);
              W.containerPoint = ne ? this.latLngToContainerPoint(B.getLatLng()) : this.mouseEventToContainerPoint(e), W.layerPoint = this.containerPointToLayerPoint(W.containerPoint), W.latlng = ne ? B.getLatLng() : this.layerPointToLatLng(W.layerPoint);
            }
            for (I = 0; I < f.length; I++)
              if (f[I].fire(r, W, !0), W.originalEvent._stopped || f[I].options.bubblingMouseEvents === !1 && R(this._mouseEvents, r) !== -1)
                return;
          }
        },
        _draggableMoved: function(e) {
          return e = e.dragging && e.dragging.enabled() ? e : this, e.dragging && e.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        },
        _clearHandlers: function() {
          for (var e = 0, r = this._handlers.length; e < r; e++)
            this._handlers[e].disable();
        },
        // @section Other Methods
        // @method whenReady(fn: Function, context?: Object): this
        // Runs the given function `fn` when the map gets initialized with
        // a view (center and zoom) and at least one layer, or immediately
        // if it's already initialized, optionally passing a function context.
        whenReady: function(e, r) {
          return this._loaded ? e.call(r || this, { target: this }) : this.on("load", e, r), this;
        },
        // private methods for getting map state
        _getMapPanePos: function() {
          return Fr(this._mapPane) || new _e(0, 0);
        },
        _moved: function() {
          var e = this._getMapPanePos();
          return e && !e.equals([0, 0]);
        },
        _getTopLeftPoint: function(e, r) {
          var a = e && r !== void 0 ? this._getNewPixelOrigin(e, r) : this.getPixelOrigin();
          return a.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function(e, r) {
          var a = this.getSize()._divideBy(2);
          return this.project(e, r)._subtract(a)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function(e, r, a) {
          var c = this._getNewPixelOrigin(a, r);
          return this.project(e, r)._subtract(c);
        },
        _latLngBoundsToNewLayerBounds: function(e, r, a) {
          var c = this._getNewPixelOrigin(a, r);
          return He([
            this.project(e.getSouthWest(), r)._subtract(c),
            this.project(e.getNorthWest(), r)._subtract(c),
            this.project(e.getSouthEast(), r)._subtract(c),
            this.project(e.getNorthEast(), r)._subtract(c)
          ]);
        },
        // layer point of the current center
        _getCenterLayerPoint: function() {
          return this.containerPointToLayerPoint(this.getSize()._divideBy(2));
        },
        // offset of the specified place to the current center in pixels
        _getCenterOffset: function(e) {
          return this.latLngToLayerPoint(e).subtract(this._getCenterLayerPoint());
        },
        // adjust center for view to get inside bounds
        _limitCenter: function(e, r, a) {
          if (!a)
            return e;
          var c = this.project(e, r), f = this.getSize().divideBy(2), y = new de(c.subtract(f), c.add(f)), I = this._getBoundsOffset(y, a, r);
          return Math.abs(I.x) <= 1 && Math.abs(I.y) <= 1 ? e : this.unproject(c.add(I), r);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(e, r) {
          if (!r)
            return e;
          var a = this.getPixelBounds(), c = new de(a.min.add(e), a.max.add(e));
          return e.add(this._getBoundsOffset(c, r));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(e, r, a) {
          var c = He(
            this.project(r.getNorthEast(), a),
            this.project(r.getSouthWest(), a)
          ), f = c.min.subtract(e.min), y = c.max.subtract(e.max), I = this._rebound(f.x, -y.x), B = this._rebound(f.y, -y.y);
          return new _e(I, B);
        },
        _rebound: function(e, r) {
          return e + r > 0 ? Math.round(e - r) / 2 : Math.max(0, Math.ceil(e)) - Math.max(0, Math.floor(r));
        },
        _limitZoom: function(e) {
          var r = this.getMinZoom(), a = this.getMaxZoom(), c = me.any3d ? this.options.zoomSnap : 1;
          return c && (e = Math.round(e / c) * c), Math.max(r, Math.min(a, e));
        },
        _onPanTransitionStep: function() {
          this.fire("move");
        },
        _onPanTransitionEnd: function() {
          Dt(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function(e, r) {
          var a = this._getCenterOffset(e)._trunc();
          return (r && r.animate) !== !0 && !this.getSize().contains(a) ? !1 : (this.panBy(a, r), !0);
        },
        _createAnimProxy: function() {
          var e = this._proxy = nt("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(e), this.on("zoomanim", function(r) {
            var a = Er, c = this._proxy.style[a];
            fs(this._proxy, this.project(r.center, r.zoom), this.getZoomScale(r.zoom, 1)), c === this._proxy.style[a] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          Nt(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
          var e = this.getCenter(), r = this.getZoom();
          fs(this._proxy, this.project(e, r), this.getZoomScale(r, 1));
        },
        _catchTransitionEnd: function(e) {
          this._animatingZoom && e.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function() {
          return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        },
        _tryAnimatedZoom: function(e, r, a) {
          if (this._animatingZoom)
            return !0;
          if (a = a || {}, !this._zoomAnimated || a.animate === !1 || this._nothingToAnimate() || Math.abs(r - this._zoom) > this.options.zoomAnimationThreshold)
            return !1;
          var c = this.getZoomScale(r), f = this._getCenterOffset(e)._divideBy(1 - 1 / c);
          return a.animate !== !0 && !this.getSize().contains(f) ? !1 : (j(function() {
            this._moveStart(!0, a.noMoveStart || !1)._animateZoom(e, r, !0);
          }, this), !0);
        },
        _animateZoom: function(e, r, a, c) {
          this._mapPane && (a && (this._animatingZoom = !0, this._animateToCenter = e, this._animateToZoom = r, We(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: e,
            zoom: r,
            noUpdate: c
          }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(_(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && Dt(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
        }
      });
      function zn(e, r) {
        return new vt(e, r);
      }
      var Di = ge.extend({
        // @section
        // @aka Control Options
        options: {
          // @option position: String = 'topright'
          // The position of the control (one of the map corners). Possible values are `'topleft'`,
          // `'topright'`, `'bottomleft'` or `'bottomright'`
          position: "topright"
        },
        initialize: function(e) {
          G(this, e);
        },
        /* @section
         * Classes extending L.Control will inherit the following methods:
         *
         * @method getPosition: string
         * Returns the position of the control.
         */
        getPosition: function() {
          return this.options.position;
        },
        // @method setPosition(position: string): this
        // Sets the position of the control.
        setPosition: function(e) {
          var r = this._map;
          return r && r.removeControl(this), this.options.position = e, r && r.addControl(this), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTMLElement that contains the control.
        getContainer: function() {
          return this._container;
        },
        // @method addTo(map: Map): this
        // Adds the control to the given map.
        addTo: function(e) {
          this.remove(), this._map = e;
          var r = this._container = this.onAdd(e), a = this.getPosition(), c = e._controlCorners[a];
          return We(r, "leaflet-control"), a.indexOf("bottom") !== -1 ? c.insertBefore(r, c.firstChild) : c.appendChild(r), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (Nt(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(e) {
          this._map && e && e.screenX > 0 && e.screenY > 0 && this._map.getContainer().focus();
        }
      }), rr = function(e) {
        return new Di(e);
      };
      vt.include({
        // @method addControl(control: Control): this
        // Adds the given control to the map
        addControl: function(e) {
          return e.addTo(this), this;
        },
        // @method removeControl(control: Control): this
        // Removes the given control from the map
        removeControl: function(e) {
          return e.remove(), this;
        },
        _initControlPos: function() {
          var e = this._controlCorners = {}, r = "leaflet-", a = this._controlContainer = nt("div", r + "control-container", this._container);
          function c(f, y) {
            var I = r + f + " " + r + y;
            e[f + y] = nt("div", I, a);
          }
          c("top", "left"), c("top", "right"), c("bottom", "left"), c("bottom", "right");
        },
        _clearControlPos: function() {
          for (var e in this._controlCorners)
            Nt(this._controlCorners[e]);
          Nt(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var ba = Di.extend({
        // @section
        // @aka Control.Layers options
        options: {
          // @option collapsed: Boolean = true
          // If `true`, the control will be collapsed into an icon and expanded on mouse hover, touch, or keyboard activation.
          collapsed: !0,
          position: "topright",
          // @option autoZIndex: Boolean = true
          // If `true`, the control will assign zIndexes in increasing order to all of its layers so that the order is preserved when switching them on/off.
          autoZIndex: !0,
          // @option hideSingleBase: Boolean = false
          // If `true`, the base layers in the control will be hidden when there is only one.
          hideSingleBase: !1,
          // @option sortLayers: Boolean = false
          // Whether to sort the layers. When `false`, layers will keep the order
          // in which they were added to the control.
          sortLayers: !1,
          // @option sortFunction: Function = *
          // A [compare function](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
          // that will be used for sorting the layers, when `sortLayers` is `true`.
          // The function receives both the `L.Layer` instances and their names, as in
          // `sortFunction(layerA, layerB, nameA, nameB)`.
          // By default, it sorts layers alphabetically by their name.
          sortFunction: function(e, r, a, c) {
            return a < c ? -1 : c < a ? 1 : 0;
          }
        },
        initialize: function(e, r, a) {
          G(this, a), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
          for (var c in e)
            this._addLayer(e[c], c);
          for (c in r)
            this._addLayer(r[c], c, !0);
        },
        onAdd: function(e) {
          this._initLayout(), this._update(), this._map = e, e.on("zoomend", this._checkDisabledLayers, this);
          for (var r = 0; r < this._layers.length; r++)
            this._layers[r].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function(e) {
          return Di.prototype.addTo.call(this, e), this._expandIfNotCollapsed();
        },
        onRemove: function() {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var e = 0; e < this._layers.length; e++)
            this._layers[e].layer.off("add remove", this._onLayerChange, this);
        },
        // @method addBaseLayer(layer: Layer, name: String): this
        // Adds a base layer (radio button entry) with the given name to the control.
        addBaseLayer: function(e, r) {
          return this._addLayer(e, r), this._map ? this._update() : this;
        },
        // @method addOverlay(layer: Layer, name: String): this
        // Adds an overlay (checkbox entry) with the given name to the control.
        addOverlay: function(e, r) {
          return this._addLayer(e, r, !0), this._map ? this._update() : this;
        },
        // @method removeLayer(layer: Layer): this
        // Remove the given layer from the control.
        removeLayer: function(e) {
          e.off("add remove", this._onLayerChange, this);
          var r = this._getLayer(m(e));
          return r && this._layers.splice(this._layers.indexOf(r), 1), this._map ? this._update() : this;
        },
        // @method expand(): this
        // Expand the control container if collapsed.
        expand: function() {
          We(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var e = this._map.getSize().y - (this._container.offsetTop + 50);
          return e < this._section.clientHeight ? (We(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = e + "px") : Dt(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return Dt(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var e = "leaflet-control-layers", r = this._container = nt("div", e), a = this.options.collapsed;
          r.setAttribute("aria-haspopup", !0), so(r), Sa(r);
          var c = this._section = nt("section", e + "-list");
          a && (this._map.on("click", this.collapse, this), Qe(r, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this));
          var f = this._layersLink = nt("a", e + "-toggle", r);
          f.href = "#", f.title = "Layers", f.setAttribute("role", "button"), Qe(f, {
            keydown: function(y) {
              y.keyCode === 13 && this._expandSafely();
            },
            // Certain screen readers intercept the key event and instead send a click event
            click: function(y) {
              it(y), this._expandSafely();
            }
          }, this), a || this.expand(), this._baseLayersList = nt("div", e + "-base", c), this._separator = nt("div", e + "-separator", c), this._overlaysList = nt("div", e + "-overlays", c), r.appendChild(c);
        },
        _getLayer: function(e) {
          for (var r = 0; r < this._layers.length; r++)
            if (this._layers[r] && m(this._layers[r].layer) === e)
              return this._layers[r];
        },
        _addLayer: function(e, r, a) {
          this._map && e.on("add remove", this._onLayerChange, this), this._layers.push({
            layer: e,
            name: r,
            overlay: a
          }), this.options.sortLayers && this._layers.sort(_(function(c, f) {
            return this.options.sortFunction(c.layer, f.layer, c.name, f.name);
          }, this)), this.options.autoZIndex && e.setZIndex && (this._lastZIndex++, e.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function() {
          if (!this._container)
            return this;
          ir(this._baseLayersList), ir(this._overlaysList), this._layerControlInputs = [];
          var e, r, a, c, f = 0;
          for (a = 0; a < this._layers.length; a++)
            c = this._layers[a], this._addItem(c), r = r || c.overlay, e = e || !c.overlay, f += c.overlay ? 0 : 1;
          return this.options.hideSingleBase && (e = e && f > 1, this._baseLayersList.style.display = e ? "" : "none"), this._separator.style.display = r && e ? "" : "none", this;
        },
        _onLayerChange: function(e) {
          this._handlingClick || this._update();
          var r = this._getLayer(m(e.target)), a = r.overlay ? e.type === "add" ? "overlayadd" : "overlayremove" : e.type === "add" ? "baselayerchange" : null;
          a && this._map.fire(a, r);
        },
        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
        _createRadioElement: function(e, r) {
          var a = '<input type="radio" class="leaflet-control-layers-selector" name="' + e + '"' + (r ? ' checked="checked"' : "") + "/>", c = document.createElement("div");
          return c.innerHTML = a, c.firstChild;
        },
        _addItem: function(e) {
          var r = document.createElement("label"), a = this._map.hasLayer(e.layer), c;
          e.overlay ? (c = document.createElement("input"), c.type = "checkbox", c.className = "leaflet-control-layers-selector", c.defaultChecked = a) : c = this._createRadioElement("leaflet-base-layers_" + m(this), a), this._layerControlInputs.push(c), c.layerId = m(e.layer), Qe(c, "click", this._onInputClick, this);
          var f = document.createElement("span");
          f.innerHTML = " " + e.name;
          var y = document.createElement("span");
          r.appendChild(y), y.appendChild(c), y.appendChild(f);
          var I = e.overlay ? this._overlaysList : this._baseLayersList;
          return I.appendChild(r), this._checkDisabledLayers(), r;
        },
        _onInputClick: function() {
          if (!this._preventClick) {
            var e = this._layerControlInputs, r, a, c = [], f = [];
            this._handlingClick = !0;
            for (var y = e.length - 1; y >= 0; y--)
              r = e[y], a = this._getLayer(r.layerId).layer, r.checked ? c.push(a) : r.checked || f.push(a);
            for (y = 0; y < f.length; y++)
              this._map.hasLayer(f[y]) && this._map.removeLayer(f[y]);
            for (y = 0; y < c.length; y++)
              this._map.hasLayer(c[y]) || this._map.addLayer(c[y]);
            this._handlingClick = !1, this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function() {
          for (var e = this._layerControlInputs, r, a, c = this._map.getZoom(), f = e.length - 1; f >= 0; f--)
            r = e[f], a = this._getLayer(r.layerId).layer, r.disabled = a.options.minZoom !== void 0 && c < a.options.minZoom || a.options.maxZoom !== void 0 && c > a.options.maxZoom;
        },
        _expandIfNotCollapsed: function() {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function() {
          var e = this._section;
          this._preventClick = !0, Qe(e, "click", it), this.expand();
          var r = this;
          setTimeout(function() {
            Gt(e, "click", it), r._preventClick = !1;
          });
        }
      }), Oa = function(e, r, a) {
        return new ba(e, r, a);
      }, mi = Di.extend({
        // @section
        // @aka Control.Zoom options
        options: {
          position: "topleft",
          // @option zoomInText: String = '<span aria-hidden="true">+</span>'
          // The text set on the 'zoom in' button.
          zoomInText: '<span aria-hidden="true">+</span>',
          // @option zoomInTitle: String = 'Zoom in'
          // The title set on the 'zoom in' button.
          zoomInTitle: "Zoom in",
          // @option zoomOutText: String = '<span aria-hidden="true">&#x2212;</span>'
          // The text set on the 'zoom out' button.
          zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
          // @option zoomOutTitle: String = 'Zoom out'
          // The title set on the 'zoom out' button.
          zoomOutTitle: "Zoom out"
        },
        onAdd: function(e) {
          var r = "leaflet-control-zoom", a = nt("div", r + " leaflet-bar"), c = this.options;
          return this._zoomInButton = this._createButton(
            c.zoomInText,
            c.zoomInTitle,
            r + "-in",
            a,
            this._zoomIn
          ), this._zoomOutButton = this._createButton(
            c.zoomOutText,
            c.zoomOutTitle,
            r + "-out",
            a,
            this._zoomOut
          ), this._updateDisabled(), e.on("zoomend zoomlevelschange", this._updateDisabled, this), a;
        },
        onRemove: function(e) {
          e.off("zoomend zoomlevelschange", this._updateDisabled, this);
        },
        disable: function() {
          return this._disabled = !0, this._updateDisabled(), this;
        },
        enable: function() {
          return this._disabled = !1, this._updateDisabled(), this;
        },
        _zoomIn: function(e) {
          !this._disabled && this._map._zoom < this._map.getMaxZoom() && this._map.zoomIn(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
        },
        _zoomOut: function(e) {
          !this._disabled && this._map._zoom > this._map.getMinZoom() && this._map.zoomOut(this._map.options.zoomDelta * (e.shiftKey ? 3 : 1));
        },
        _createButton: function(e, r, a, c, f) {
          var y = nt("a", a, c);
          return y.innerHTML = e, y.href = "#", y.title = r, y.setAttribute("role", "button"), y.setAttribute("aria-label", r), so(y), Qe(y, "click", At), Qe(y, "click", f, this), Qe(y, "click", this._refocusOnMap, this), y;
        },
        _updateDisabled: function() {
          var e = this._map, r = "leaflet-disabled";
          Dt(this._zoomInButton, r), Dt(this._zoomOutButton, r), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || e._zoom === e.getMinZoom()) && (We(this._zoomOutButton, r), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || e._zoom === e.getMaxZoom()) && (We(this._zoomInButton, r), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      vt.mergeOptions({
        zoomControl: !0
      }), vt.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new mi(), this.addControl(this.zoomControl));
      });
      var Ul = function(e) {
        return new mi(e);
      }, La = Di.extend({
        // @section
        // @aka Control.Scale options
        options: {
          position: "bottomleft",
          // @option maxWidth: Number = 100
          // Maximum width of the control in pixels. The width is set dynamically to show round values (e.g. 100, 200, 500).
          maxWidth: 100,
          // @option metric: Boolean = True
          // Whether to show the metric scale line (m/km).
          metric: !0,
          // @option imperial: Boolean = True
          // Whether to show the imperial scale line (mi/ft).
          imperial: !0
          // @option updateWhenIdle: Boolean = false
          // If `true`, the control is updated on [`moveend`](#map-moveend), otherwise it's always up-to-date (updated on [`move`](#map-move)).
        },
        onAdd: function(e) {
          var r = "leaflet-control-scale", a = nt("div", r), c = this.options;
          return this._addScales(c, r + "-line", a), e.on(c.updateWhenIdle ? "moveend" : "move", this._update, this), e.whenReady(this._update, this), a;
        },
        onRemove: function(e) {
          e.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(e, r, a) {
          e.metric && (this._mScale = nt("div", r, a)), e.imperial && (this._iScale = nt("div", r, a));
        },
        _update: function() {
          var e = this._map, r = e.getSize().y / 2, a = e.distance(
            e.containerPointToLatLng([0, r]),
            e.containerPointToLatLng([this.options.maxWidth, r])
          );
          this._updateScales(a);
        },
        _updateScales: function(e) {
          this.options.metric && e && this._updateMetric(e), this.options.imperial && e && this._updateImperial(e);
        },
        _updateMetric: function(e) {
          var r = this._getRoundNum(e), a = r < 1e3 ? r + " m" : r / 1e3 + " km";
          this._updateScale(this._mScale, a, r / e);
        },
        _updateImperial: function(e) {
          var r = e * 3.2808399, a, c, f;
          r > 5280 ? (a = r / 5280, c = this._getRoundNum(a), this._updateScale(this._iScale, c + " mi", c / a)) : (f = this._getRoundNum(r), this._updateScale(this._iScale, f + " ft", f / r));
        },
        _updateScale: function(e, r, a) {
          e.style.width = Math.round(this.options.maxWidth * a) + "px", e.innerHTML = r;
        },
        _getRoundNum: function(e) {
          var r = Math.pow(10, (Math.floor(e) + "").length - 1), a = e / r;
          return a = a >= 10 ? 10 : a >= 5 ? 5 : a >= 3 ? 3 : a >= 2 ? 2 : 1, r * a;
        }
      }), Vl = function(e) {
        return new La(e);
      }, zl = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Wo = Di.extend({
        // @section
        // @aka Control.Attribution options
        options: {
          position: "bottomright",
          // @option prefix: String|false = 'Leaflet'
          // The HTML text shown before the attributions. Pass `false` to disable.
          prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (me.inlineSvg ? zl + " " : "") + "Leaflet</a>"
        },
        initialize: function(e) {
          G(this, e), this._attributions = {};
        },
        onAdd: function(e) {
          e.attributionControl = this, this._container = nt("div", "leaflet-control-attribution"), so(this._container);
          for (var r in e._layers)
            e._layers[r].getAttribution && this.addAttribution(e._layers[r].getAttribution());
          return this._update(), e.on("layeradd", this._addAttribution, this), this._container;
        },
        onRemove: function(e) {
          e.off("layeradd", this._addAttribution, this);
        },
        _addAttribution: function(e) {
          e.layer.getAttribution && (this.addAttribution(e.layer.getAttribution()), e.layer.once("remove", function() {
            this.removeAttribution(e.layer.getAttribution());
          }, this));
        },
        // @method setPrefix(prefix: String|false): this
        // The HTML text shown before the attributions. Pass `false` to disable.
        setPrefix: function(e) {
          return this.options.prefix = e, this._update(), this;
        },
        // @method addAttribution(text: String): this
        // Adds an attribution text (e.g. `'&copy; OpenStreetMap contributors'`).
        addAttribution: function(e) {
          return e ? (this._attributions[e] || (this._attributions[e] = 0), this._attributions[e]++, this._update(), this) : this;
        },
        // @method removeAttribution(text: String): this
        // Removes an attribution text.
        removeAttribution: function(e) {
          return e ? (this._attributions[e] && (this._attributions[e]--, this._update()), this) : this;
        },
        _update: function() {
          if (this._map) {
            var e = [];
            for (var r in this._attributions)
              this._attributions[r] && e.push(r);
            var a = [];
            this.options.prefix && a.push(this.options.prefix), e.length && a.push(e.join(", ")), this._container.innerHTML = a.join(' <span aria-hidden="true">|</span> ');
          }
        }
      });
      vt.mergeOptions({
        attributionControl: !0
      }), vt.addInitHook(function() {
        this.options.attributionControl && new Wo().addTo(this);
      });
      var Wl = function(e) {
        return new Wo(e);
      };
      Di.Layers = ba, Di.Zoom = mi, Di.Scale = La, Di.Attribution = Wo, rr.layers = Oa, rr.zoom = Ul, rr.scale = Vl, rr.attribution = Wl;
      var nn = ge.extend({
        initialize: function(e) {
          this._map = e;
        },
        // @method enable(): this
        // Enables the handler
        enable: function() {
          return this._enabled ? this : (this._enabled = !0, this.addHooks(), this);
        },
        // @method disable(): this
        // Disables the handler
        disable: function() {
          return this._enabled ? (this._enabled = !1, this.removeHooks(), this) : this;
        },
        // @method enabled(): Boolean
        // Returns `true` if the handler is enabled
        enabled: function() {
          return !!this._enabled;
        }
        // @section Extension methods
        // Classes inheriting from `Handler` must implement the two following methods:
        // @method addHooks()
        // Called when the handler is enabled, should add event hooks.
        // @method removeHooks()
        // Called when the handler is disabled, should remove the event hooks added previously.
      });
      nn.addTo = function(e, r) {
        return e.addHandler(r, this), this;
      };
      var nc = { Events: De }, Ri = me.touch ? "touchstart mousedown" : "mousedown", $r = Pe.extend({
        options: {
          // @section
          // @aka Draggable options
          // @option clickTolerance: Number = 3
          // The max number of pixels a user can shift the mouse pointer during a click
          // for it to be considered a valid click (as opposed to a mouse drag).
          clickTolerance: 3
        },
        // @constructor L.Draggable(el: HTMLElement, dragHandle?: HTMLElement, preventOutline?: Boolean, options?: Draggable options)
        // Creates a `Draggable` object for moving `el` when you start dragging the `dragHandle` element (equals `el` itself by default).
        initialize: function(e, r, a, c) {
          G(this, c), this._element = e, this._dragStartTarget = r || e, this._preventOutline = a;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
          this._enabled || (Qe(this._dragStartTarget, Ri, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && ($r._dragging === this && this.finishDrag(!0), Gt(this._dragStartTarget, Ri, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(e) {
          if (this._enabled && (this._moved = !1, !xr(this._element, "leaflet-zoom-anim"))) {
            if (e.touches && e.touches.length !== 1) {
              $r._dragging === this && this.finishDrag();
              return;
            }
            if (!($r._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) && ($r._dragging = this, this._preventOutline && Vo(this._element), ya(), ps(), !this._moving)) {
              this.fire("down");
              var r = e.touches ? e.touches[0] : e, a = xl(this._element);
              this._startPoint = new _e(r.clientX, r.clientY), this._startPos = Fr(this._element), this._parentScale = Ea(a);
              var c = e.type === "mousedown";
              Qe(document, c ? "mousemove" : "touchmove", this._onMove, this), Qe(document, c ? "mouseup" : "touchend touchcancel", this._onUp, this);
            }
          }
        },
        _onMove: function(e) {
          if (this._enabled) {
            if (e.touches && e.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var r = e.touches && e.touches.length === 1 ? e.touches[0] : e, a = new _e(r.clientX, r.clientY)._subtract(this._startPoint);
            !a.x && !a.y || Math.abs(a.x) + Math.abs(a.y) < this.options.clickTolerance || (a.x /= this._parentScale.x, a.y /= this._parentScale.y, it(e), this._moved || (this.fire("dragstart"), this._moved = !0, We(document.body, "leaflet-dragging"), this._lastTarget = e.target || e.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), We(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(a), this._moving = !0, this._lastEvent = e, this._updatePosition());
          }
        },
        _updatePosition: function() {
          var e = { originalEvent: this._lastEvent };
          this.fire("predrag", e), dn(this._element, this._newPos), this.fire("drag", e);
        },
        _onUp: function() {
          this._enabled && this.finishDrag();
        },
        finishDrag: function(e) {
          Dt(document.body, "leaflet-dragging"), this._lastTarget && (Dt(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Gt(document, "mousemove touchmove", this._onMove, this), Gt(document, "mouseup touchend touchcancel", this._onUp, this), ko(), Tr();
          var r = this._moved && this._moving;
          this._moving = !1, $r._dragging = !1, r && this.fire("dragend", {
            noInertia: e,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function Ia(e, r, a) {
        var c, f = [1, 4, 2, 8], y, I, B, W, ne, Se, Me, ot;
        for (y = 0, Se = e.length; y < Se; y++)
          e[y]._code = Sr(e[y], r);
        for (B = 0; B < 4; B++) {
          for (Me = f[B], c = [], y = 0, Se = e.length, I = Se - 1; y < Se; I = y++)
            W = e[y], ne = e[I], W._code & Me ? ne._code & Me || (ot = ao(ne, W, Me, r, a), ot._code = Sr(ot, r), c.push(ot)) : (ne._code & Me && (ot = ao(ne, W, Me, r, a), ot._code = Sr(ot, r), c.push(ot)), c.push(W));
          e = c;
        }
        return e;
      }
      function Mr(e, r) {
        var a, c, f, y, I, B, W, ne, Se;
        if (!e || e.length === 0)
          throw new Error("latlngs not passed");
        Pi(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
        var Me = xe([0, 0]), ot = re(e), vn = ot.getNorthWest().distanceTo(ot.getSouthWest()) * ot.getNorthEast().distanceTo(ot.getNorthWest());
        vn < 1700 && (Me = Fs(e));
        var rn = e.length, Jn = [];
        for (a = 0; a < rn; a++) {
          var Wn = xe(e[a]);
          Jn.push(r.project(xe([Wn.lat - Me.lat, Wn.lng - Me.lng])));
        }
        for (B = W = ne = 0, a = 0, c = rn - 1; a < rn; c = a++)
          f = Jn[a], y = Jn[c], I = f.y * y.x - y.y * f.x, W += (f.x + y.x) * I, ne += (f.y + y.y) * I, B += I * 3;
        B === 0 ? Se = Jn[0] : Se = [W / B, ne / B];
        var sr = r.unproject(J(Se));
        return xe([sr.lat + Me.lat, sr.lng + Me.lng]);
      }
      function Fs(e) {
        for (var r = 0, a = 0, c = 0, f = 0; f < e.length; f++) {
          var y = xe(e[f]);
          r += y.lat, a += y.lng, c++;
        }
        return xe([r / c, a / c]);
      }
      var Na = {
        __proto__: null,
        clipPolygon: Ia,
        polygonCenter: Mr,
        centroid: Fs
      };
      function Vt(e, r) {
        if (!r || !e.length)
          return e.slice();
        var a = r * r;
        return e = rc(e, a), e = ic(e, a), e;
      }
      function Br(e, r, a) {
        return Math.sqrt(lo(e, r, a, !0));
      }
      function Da(e, r, a) {
        return lo(e, r, a);
      }
      function ic(e, r) {
        var a = e.length, c = typeof Uint8Array < "u" ? Uint8Array : Array, f = new c(a);
        f[0] = f[a - 1] = 1, oo(e, f, r, 0, a - 1);
        var y, I = [];
        for (y = 0; y < a; y++)
          f[y] && I.push(e[y]);
        return I;
      }
      function oo(e, r, a, c, f) {
        var y = 0, I, B, W;
        for (B = c + 1; B <= f - 1; B++)
          W = lo(e[B], e[c], e[f], !0), W > y && (I = B, y = W);
        y > a && (r[I] = 1, oo(e, r, a, c, I), oo(e, r, a, I, f));
      }
      function rc(e, r) {
        for (var a = [e[0]], c = 1, f = 0, y = e.length; c < y; c++)
          Ms(e[c], e[f]) > r && (a.push(e[c]), f = c);
        return f < y - 1 && a.push(e[y - 1]), a;
      }
      var Zl;
      function Hl(e, r, a, c, f) {
        var y = c ? Zl : Sr(e, a), I = Sr(r, a), B, W, ne;
        for (Zl = I; ; ) {
          if (!(y | I))
            return [e, r];
          if (y & I)
            return !1;
          B = y || I, W = ao(e, r, B, a, f), ne = Sr(W, a), B === y ? (e = W, y = ne) : (r = W, I = ne);
        }
      }
      function ao(e, r, a, c, f) {
        var y = r.x - e.x, I = r.y - e.y, B = c.min, W = c.max, ne, Se;
        return a & 8 ? (ne = e.x + y * (W.y - e.y) / I, Se = W.y) : a & 4 ? (ne = e.x + y * (B.y - e.y) / I, Se = B.y) : a & 2 ? (ne = W.x, Se = e.y + I * (W.x - e.x) / y) : a & 1 && (ne = B.x, Se = e.y + I * (B.x - e.x) / y), new _e(ne, Se, f);
      }
      function Sr(e, r) {
        var a = 0;
        return e.x < r.min.x ? a |= 1 : e.x > r.max.x && (a |= 2), e.y < r.min.y ? a |= 4 : e.y > r.max.y && (a |= 8), a;
      }
      function Ms(e, r) {
        var a = r.x - e.x, c = r.y - e.y;
        return a * a + c * c;
      }
      function lo(e, r, a, c) {
        var f = r.x, y = r.y, I = a.x - f, B = a.y - y, W = I * I + B * B, ne;
        return W > 0 && (ne = ((e.x - f) * I + (e.y - y) * B) / W, ne > 1 ? (f = a.x, y = a.y) : ne > 0 && (f += I * ne, y += B * ne)), I = e.x - f, B = e.y - y, c ? I * I + B * B : new _e(f, y);
      }
      function Pi(e) {
        return !Y(e[0]) || typeof e[0][0] != "object" && typeof e[0][0] < "u";
      }
      function Ra(e) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Pi(e);
      }
      function Zo(e, r) {
        var a, c, f, y, I, B, W, ne;
        if (!e || e.length === 0)
          throw new Error("latlngs not passed");
        Pi(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
        var Se = xe([0, 0]), Me = re(e), ot = Me.getNorthWest().distanceTo(Me.getSouthWest()) * Me.getNorthEast().distanceTo(Me.getNorthWest());
        ot < 1700 && (Se = Fs(e));
        var vn = e.length, rn = [];
        for (a = 0; a < vn; a++) {
          var Jn = xe(e[a]);
          rn.push(r.project(xe([Jn.lat - Se.lat, Jn.lng - Se.lng])));
        }
        for (a = 0, c = 0; a < vn - 1; a++)
          c += rn[a].distanceTo(rn[a + 1]) / 2;
        if (c === 0)
          ne = rn[0];
        else
          for (a = 0, y = 0; a < vn - 1; a++)
            if (I = rn[a], B = rn[a + 1], f = I.distanceTo(B), y += f, y > c) {
              W = (y - c) / f, ne = [
                B.x - W * (B.x - I.x),
                B.y - W * (B.y - I.y)
              ];
              break;
            }
        var Wn = r.unproject(J(ne));
        return xe([Wn.lat + Se.lat, Wn.lng + Se.lng]);
      }
      var Pa = {
        __proto__: null,
        simplify: Vt,
        pointToSegmentDistance: Br,
        closestPointOnSegment: Da,
        clipSegment: Hl,
        _getEdgeIntersection: ao,
        _getBitCode: Sr,
        _sqClosestPointOnSegment: lo,
        isFlat: Pi,
        _flat: Ra,
        polylineCenter: Zo
      }, Ho = {
        project: function(e) {
          return new _e(e.lng, e.lat);
        },
        unproject: function(e) {
          return new ke(e.y, e.x);
        },
        bounds: new de([-180, -90], [180, 90])
      }, xa = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new de([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(e) {
          var r = Math.PI / 180, a = this.R, c = e.lat * r, f = this.R_MINOR / a, y = Math.sqrt(1 - f * f), I = y * Math.sin(c), B = Math.tan(Math.PI / 4 - c / 2) / Math.pow((1 - I) / (1 + I), y / 2);
          return c = -a * Math.log(Math.max(B, 1e-10)), new _e(e.lng * r * a, c);
        },
        unproject: function(e) {
          for (var r = 180 / Math.PI, a = this.R, c = this.R_MINOR / a, f = Math.sqrt(1 - c * c), y = Math.exp(-e.y / a), I = Math.PI / 2 - 2 * Math.atan(y), B = 0, W = 0.1, ne; B < 15 && Math.abs(W) > 1e-7; B++)
            ne = f * Math.sin(I), ne = Math.pow((1 - ne) / (1 + ne), f / 2), W = Math.PI / 2 - 2 * Math.atan(y * ne) - I, I += W;
          return new ke(I * r, e.x * r / a);
        }
      }, Fa = {
        __proto__: null,
        LonLat: Ho,
        Mercator: xa,
        SphericalMercator: ln
      }, Ma = d({}, Qt, {
        code: "EPSG:3395",
        projection: xa,
        transformation: (function() {
          var e = 0.5 / (Math.PI * xa.R);
          return Un(e, 0.5, -e, 0.5);
        })()
      }), Yl = d({}, Qt, {
        code: "EPSG:4326",
        projection: Ho,
        transformation: Un(1 / 180, 1, -1 / 180, 0.5)
      }), ql = d({}, Kt, {
        projection: Ho,
        transformation: Un(1, 0, -1, 0),
        scale: function(e) {
          return Math.pow(2, e);
        },
        zoom: function(e) {
          return Math.log(e) / Math.LN2;
        },
        distance: function(e, r) {
          var a = r.lng - e.lng, c = r.lat - e.lat;
          return Math.sqrt(a * a + c * c);
        },
        infinite: !0
      });
      Kt.Earth = Qt, Kt.EPSG3395 = Ma, Kt.EPSG3857 = Ui, Kt.EPSG900913 = _n, Kt.EPSG4326 = Yl, Kt.Simple = ql;
      var Jt = Pe.extend({
        // Classes extending `L.Layer` will inherit the following options:
        options: {
          // @option pane: String = 'overlayPane'
          // By default the layer will be added to the map's [overlay pane](#map-overlaypane). Overriding this option will cause the layer to be placed on another pane by default.
          pane: "overlayPane",
          // @option attribution: String = null
          // String to be shown in the attribution control, e.g. "© OpenStreetMap contributors". It describes the layer data and is often a legal obligation towards copyright holders and tile providers.
          attribution: null,
          bubblingMouseEvents: !0
        },
        /* @section
         * Classes extending `L.Layer` will inherit the following methods:
         *
         * @method addTo(map: Map|LayerGroup): this
         * Adds the layer to the given map or layer group.
         */
        addTo: function(e) {
          return e.addLayer(this), this;
        },
        // @method remove: this
        // Removes the layer from the map it is currently active on.
        remove: function() {
          return this.removeFrom(this._map || this._mapToAdd);
        },
        // @method removeFrom(map: Map): this
        // Removes the layer from the given map
        //
        // @alternative
        // @method removeFrom(group: LayerGroup): this
        // Removes the layer from the given `LayerGroup`
        removeFrom: function(e) {
          return e && e.removeLayer(this), this;
        },
        // @method getPane(name? : String): HTMLElement
        // Returns the `HTMLElement` representing the named pane on the map. If `name` is omitted, returns the pane for this layer.
        getPane: function(e) {
          return this._map.getPane(e ? this.options[e] || e : this.options.pane);
        },
        addInteractiveTarget: function(e) {
          return this._map._targets[m(e)] = this, this;
        },
        removeInteractiveTarget: function(e) {
          return delete this._map._targets[m(e)], this;
        },
        // @method getAttribution: String
        // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
        getAttribution: function() {
          return this.options.attribution;
        },
        _layerAdd: function(e) {
          var r = e.target;
          if (r.hasLayer(this)) {
            if (this._map = r, this._zoomAnimated = r._zoomAnimated, this.getEvents) {
              var a = this.getEvents();
              r.on(a, this), this.once("remove", function() {
                r.off(a, this);
              }, this);
            }
            this.onAdd(r), this.fire("add"), r.fire("layeradd", { layer: this });
          }
        }
      });
      vt.include({
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the map
        addLayer: function(e) {
          if (!e._layerAdd)
            throw new Error("The provided object is not a Layer.");
          var r = m(e);
          return this._layers[r] ? this : (this._layers[r] = e, e._mapToAdd = this, e.beforeAdd && e.beforeAdd(this), this.whenReady(e._layerAdd, e), this);
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the map.
        removeLayer: function(e) {
          var r = m(e);
          return this._layers[r] ? (this._loaded && e.onRemove(this), delete this._layers[r], this._loaded && (this.fire("layerremove", { layer: e }), e.fire("remove")), e._map = e._mapToAdd = null, this) : this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the map
        hasLayer: function(e) {
          return m(e) in this._layers;
        },
        /* @method eachLayer(fn: Function, context?: Object): this
         * Iterates over the layers of the map, optionally specifying context of the iterator function.
         * ```
         * map.eachLayer(function(layer){
         *     layer.bindPopup('Hello');
         * });
         * ```
         */
        eachLayer: function(e, r) {
          for (var a in this._layers)
            e.call(r, this._layers[a]);
          return this;
        },
        _addLayers: function(e) {
          e = e ? Y(e) ? e : [e] : [];
          for (var r = 0, a = e.length; r < a; r++)
            this.addLayer(e[r]);
        },
        _addZoomLimit: function(e) {
          (!isNaN(e.options.maxZoom) || !isNaN(e.options.minZoom)) && (this._zoomBoundLayers[m(e)] = e, this._updateZoomLevels());
        },
        _removeZoomLimit: function(e) {
          var r = m(e);
          this._zoomBoundLayers[r] && (delete this._zoomBoundLayers[r], this._updateZoomLevels());
        },
        _updateZoomLevels: function() {
          var e = 1 / 0, r = -1 / 0, a = this._getZoomSpan();
          for (var c in this._zoomBoundLayers) {
            var f = this._zoomBoundLayers[c].options;
            e = f.minZoom === void 0 ? e : Math.min(e, f.minZoom), r = f.maxZoom === void 0 ? r : Math.max(r, f.maxZoom);
          }
          this._layersMaxZoom = r === -1 / 0 ? void 0 : r, this._layersMinZoom = e === 1 / 0 ? void 0 : e, a !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        }
      });
      var Jr = Jt.extend({
        initialize: function(e, r) {
          G(this, r), this._layers = {};
          var a, c;
          if (e)
            for (a = 0, c = e.length; a < c; a++)
              this.addLayer(e[a]);
        },
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the group.
        addLayer: function(e) {
          var r = this.getLayerId(e);
          return this._layers[r] = e, this._map && this._map.addLayer(e), this;
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the group.
        // @alternative
        // @method removeLayer(id: Number): this
        // Removes the layer with the given internal ID from the group.
        removeLayer: function(e) {
          var r = e in this._layers ? e : this.getLayerId(e);
          return this._map && this._layers[r] && this._map.removeLayer(this._layers[r]), delete this._layers[r], this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the group.
        // @alternative
        // @method hasLayer(id: Number): Boolean
        // Returns `true` if the given internal ID is currently added to the group.
        hasLayer: function(e) {
          var r = typeof e == "number" ? e : this.getLayerId(e);
          return r in this._layers;
        },
        // @method clearLayers(): this
        // Removes all the layers from the group.
        clearLayers: function() {
          return this.eachLayer(this.removeLayer, this);
        },
        // @method invoke(methodName: String, …): this
        // Calls `methodName` on every layer contained in this group, passing any
        // additional parameters. Has no effect if the layers contained do not
        // implement `methodName`.
        invoke: function(e) {
          var r = Array.prototype.slice.call(arguments, 1), a, c;
          for (a in this._layers)
            c = this._layers[a], c[e] && c[e].apply(c, r);
          return this;
        },
        onAdd: function(e) {
          this.eachLayer(e.addLayer, e);
        },
        onRemove: function(e) {
          this.eachLayer(e.removeLayer, e);
        },
        // @method eachLayer(fn: Function, context?: Object): this
        // Iterates over the layers of the group, optionally specifying context of the iterator function.
        // ```js
        // group.eachLayer(function (layer) {
        // 	layer.bindPopup('Hello');
        // });
        // ```
        eachLayer: function(e, r) {
          for (var a in this._layers)
            e.call(r, this._layers[a]);
          return this;
        },
        // @method getLayer(id: Number): Layer
        // Returns the layer with the given internal ID.
        getLayer: function(e) {
          return this._layers[e];
        },
        // @method getLayers(): Layer[]
        // Returns an array of all the layers added to the group.
        getLayers: function() {
          var e = [];
          return this.eachLayer(e.push, e), e;
        },
        // @method setZIndex(zIndex: Number): this
        // Calls `setZIndex` on every layer contained in this group, passing the z-index.
        setZIndex: function(e) {
          return this.invoke("setZIndex", e);
        },
        // @method getLayerId(layer: Layer): Number
        // Returns the internal ID for a layer
        getLayerId: function(e) {
          return m(e);
        }
      }), uo = function(e, r) {
        return new Jr(e, r);
      }, Ar = Jr.extend({
        addLayer: function(e) {
          return this.hasLayer(e) ? this : (e.addEventParent(this), Jr.prototype.addLayer.call(this, e), this.fire("layeradd", { layer: e }));
        },
        removeLayer: function(e) {
          return this.hasLayer(e) ? (e in this._layers && (e = this._layers[e]), e.removeEventParent(this), Jr.prototype.removeLayer.call(this, e), this.fire("layerremove", { layer: e })) : this;
        },
        // @method setStyle(style: Path options): this
        // Sets the given path options to each layer of the group that has a `setStyle` method.
        setStyle: function(e) {
          return this.invoke("setStyle", e);
        },
        // @method bringToFront(): this
        // Brings the layer group to the top of all other layers
        bringToFront: function() {
          return this.invoke("bringToFront");
        },
        // @method bringToBack(): this
        // Brings the layer group to the back of all other layers
        bringToBack: function() {
          return this.invoke("bringToBack");
        },
        // @method getBounds(): LatLngBounds
        // Returns the LatLngBounds of the Feature Group (created from bounds and coordinates of its children).
        getBounds: function() {
          var e = new gt();
          for (var r in this._layers) {
            var a = this._layers[r];
            e.extend(a.getBounds ? a.getBounds() : a.getLatLng());
          }
          return e;
        }
      }), Kl = function(e, r) {
        return new Ar(e, r);
      }, Bs = ge.extend({
        /* @section
         * @aka Icon options
         *
         * @option iconUrl: String = null
         * **(required)** The URL to the icon image (absolute or relative to your script path).
         *
         * @option iconRetinaUrl: String = null
         * The URL to a retina sized version of the icon image (absolute or relative to your
         * script path). Used for Retina screen devices.
         *
         * @option iconSize: Point = null
         * Size of the icon image in pixels.
         *
         * @option iconAnchor: Point = null
         * The coordinates of the "tip" of the icon (relative to its top left corner). The icon
         * will be aligned so that this point is at the marker's geographical location. Centered
         * by default if size is specified, also can be set in CSS with negative margins.
         *
         * @option popupAnchor: Point = [0, 0]
         * The coordinates of the point from which popups will "open", relative to the icon anchor.
         *
         * @option tooltipAnchor: Point = [0, 0]
         * The coordinates of the point from which tooltips will "open", relative to the icon anchor.
         *
         * @option shadowUrl: String = null
         * The URL to the icon shadow image. If not specified, no shadow image will be created.
         *
         * @option shadowRetinaUrl: String = null
         *
         * @option shadowSize: Point = null
         * Size of the shadow image in pixels.
         *
         * @option shadowAnchor: Point = null
         * The coordinates of the "tip" of the shadow (relative to its top left corner) (the same
         * as iconAnchor if not specified).
         *
         * @option className: String = ''
         * A custom class name to assign to both icon and shadow images. Empty by default.
         */
        options: {
          popupAnchor: [0, 0],
          tooltipAnchor: [0, 0],
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1
        },
        initialize: function(e) {
          G(this, e);
        },
        // @method createIcon(oldIcon?: HTMLElement): HTMLElement
        // Called internally when the icon has to be shown, returns a `<img>` HTML element
        // styled according to the options.
        createIcon: function(e) {
          return this._createIcon("icon", e);
        },
        // @method createShadow(oldIcon?: HTMLElement): HTMLElement
        // As `createIcon`, but for the shadow beneath it.
        createShadow: function(e) {
          return this._createIcon("shadow", e);
        },
        _createIcon: function(e, r) {
          var a = this._getIconUrl(e);
          if (!a) {
            if (e === "icon")
              throw new Error("iconUrl not set in Icon options (see the docs).");
            return null;
          }
          var c = this._createImg(a, r && r.tagName === "IMG" ? r : null);
          return this._setIconStyles(c, e), (this.options.crossOrigin || this.options.crossOrigin === "") && (c.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), c;
        },
        _setIconStyles: function(e, r) {
          var a = this.options, c = a[r + "Size"];
          typeof c == "number" && (c = [c, c]);
          var f = J(c), y = J(r === "shadow" && a.shadowAnchor || a.iconAnchor || f && f.divideBy(2, !0));
          e.className = "leaflet-marker-" + r + " " + (a.className || ""), y && (e.style.marginLeft = -y.x + "px", e.style.marginTop = -y.y + "px"), f && (e.style.width = f.x + "px", e.style.height = f.y + "px");
        },
        _createImg: function(e, r) {
          return r = r || document.createElement("img"), r.src = e, r;
        },
        _getIconUrl: function(e) {
          return me.retina && this.options[e + "RetinaUrl"] || this.options[e + "Url"];
        }
      });
      function sc(e) {
        return new Bs(e);
      }
      var co = Bs.extend({
        options: {
          iconUrl: "marker-icon.png",
          iconRetinaUrl: "marker-icon-2x.png",
          shadowUrl: "marker-shadow.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          tooltipAnchor: [16, -28],
          shadowSize: [41, 41]
        },
        _getIconUrl: function(e) {
          return typeof co.imagePath != "string" && (co.imagePath = this._detectIconPath()), (this.options.imagePath || co.imagePath) + Bs.prototype._getIconUrl.call(this, e);
        },
        _stripUrl: function(e) {
          var r = function(a, c, f) {
            var y = c.exec(a);
            return y && y[f];
          };
          return e = r(e, /^url\((['"])?(.+)\1\)$/, 2), e && r(e, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var e = nt("div", "leaflet-default-icon-path", document.body), r = nr(e, "background-image") || nr(e, "backgroundImage");
          if (document.body.removeChild(e), r = this._stripUrl(r), r)
            return r;
          var a = document.querySelector('link[href$="leaflet.css"]');
          return a ? a.href.substring(0, a.href.length - 11 - 1) : "";
        }
      }), $l = nn.extend({
        initialize: function(e) {
          this._marker = e;
        },
        addHooks: function() {
          var e = this._marker._icon;
          this._draggable || (this._draggable = new $r(e, e, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), We(e, "leaflet-marker-draggable");
        },
        removeHooks: function() {
          this._draggable.off({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).disable(), this._marker._icon && Dt(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(e) {
          var r = this._marker, a = r._map, c = this._marker.options.autoPanSpeed, f = this._marker.options.autoPanPadding, y = Fr(r._icon), I = a.getPixelBounds(), B = a.getPixelOrigin(), W = He(
            I.min._subtract(B).add(f),
            I.max._subtract(B).subtract(f)
          );
          if (!W.contains(y)) {
            var ne = J(
              (Math.max(W.max.x, y.x) - W.max.x) / (I.max.x - W.max.x) - (Math.min(W.min.x, y.x) - W.min.x) / (I.min.x - W.min.x),
              (Math.max(W.max.y, y.y) - W.max.y) / (I.max.y - W.max.y) - (Math.min(W.min.y, y.y) - W.min.y) / (I.min.y - W.min.y)
            ).multiplyBy(c);
            a.panBy(ne, { animate: !1 }), this._draggable._newPos._add(ne), this._draggable._startPos._add(ne), dn(r._icon, this._draggable._newPos), this._onDrag(e), this._panRequest = j(this._adjustPan.bind(this, e));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(e) {
          this._marker.options.autoPan && (U(this._panRequest), this._panRequest = j(this._adjustPan.bind(this, e)));
        },
        _onDrag: function(e) {
          var r = this._marker, a = r._shadow, c = Fr(r._icon), f = r._map.layerPointToLatLng(c);
          a && dn(a, c), r._latlng = f, e.latlng = f, e.oldLatLng = this._oldLatLng, r.fire("move", e).fire("drag", e);
        },
        _onDragEnd: function(e) {
          U(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", e);
        }
      }), Yo = Jt.extend({
        // @section
        // @aka Marker options
        options: {
          // @option icon: Icon = *
          // Icon instance to use for rendering the marker.
          // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
          // If not specified, a common instance of `L.Icon.Default` is used.
          icon: new co(),
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option keyboard: Boolean = true
          // Whether the marker can be tabbed to with a keyboard and clicked by pressing enter.
          keyboard: !0,
          // @option title: String = ''
          // Text for the browser tooltip that appear on marker hover (no tooltip by default).
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          title: "",
          // @option alt: String = 'Marker'
          // Text for the `alt` attribute of the icon image.
          // [Useful for accessibility](https://leafletjs.com/examples/accessibility/#markers-must-be-labelled).
          alt: "Marker",
          // @option zIndexOffset: Number = 0
          // By default, marker images zIndex is set automatically based on its latitude. Use this option if you want to put the marker on top of all others (or below), specifying a high value like `1000` (or high negative value, respectively).
          zIndexOffset: 0,
          // @option opacity: Number = 1.0
          // The opacity of the marker.
          opacity: 1,
          // @option riseOnHover: Boolean = false
          // If `true`, the marker will get on top of others when you hover the mouse over it.
          riseOnHover: !1,
          // @option riseOffset: Number = 250
          // The z-index offset used for the `riseOnHover` feature.
          riseOffset: 250,
          // @option pane: String = 'markerPane'
          // `Map pane` where the markers icon will be added.
          pane: "markerPane",
          // @option shadowPane: String = 'shadowPane'
          // `Map pane` where the markers shadow will be added.
          shadowPane: "shadowPane",
          // @option bubblingMouseEvents: Boolean = false
          // When `true`, a mouse event on this marker will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !1,
          // @option autoPanOnFocus: Boolean = true
          // When `true`, the map will pan whenever the marker is focused (via
          // e.g. pressing `tab` on the keyboard) to ensure the marker is
          // visible within the map's bounds
          autoPanOnFocus: !0,
          // @section Draggable marker options
          // @option draggable: Boolean = false
          // Whether the marker is draggable with mouse/touch or not.
          draggable: !1,
          // @option autoPan: Boolean = false
          // Whether to pan the map when dragging this marker near its edge or not.
          autoPan: !1,
          // @option autoPanPadding: Point = Point(50, 50)
          // Distance (in pixels to the left/right and to the top/bottom) of the
          // map edge to start panning the map.
          autoPanPadding: [50, 50],
          // @option autoPanSpeed: Number = 10
          // Number of pixels the map should pan by.
          autoPanSpeed: 10
        },
        /* @section
         *
         * In addition to [shared layer methods](#Layer) like `addTo()` and `remove()` and [popup methods](#Popup) like bindPopup() you can also use the following methods:
         */
        initialize: function(e, r) {
          G(this, r), this._latlng = xe(e);
        },
        onAdd: function(e) {
          this._zoomAnimated = this._zoomAnimated && e.options.markerZoomAnimation, this._zoomAnimated && e.on("zoomanim", this._animateZoom, this), this._initIcon(), this.update();
        },
        onRemove: function(e) {
          this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), delete this.dragging, this._zoomAnimated && e.off("zoomanim", this._animateZoom, this), this._removeIcon(), this._removeShadow();
        },
        getEvents: function() {
          return {
            zoom: this.update,
            viewreset: this.update
          };
        },
        // @method getLatLng: LatLng
        // Returns the current geographical position of the marker.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Changes the marker position to the given point.
        setLatLng: function(e) {
          var r = this._latlng;
          return this._latlng = xe(e), this.update(), this.fire("move", { oldLatLng: r, latlng: this._latlng });
        },
        // @method setZIndexOffset(offset: Number): this
        // Changes the [zIndex offset](#marker-zindexoffset) of the marker.
        setZIndexOffset: function(e) {
          return this.options.zIndexOffset = e, this.update();
        },
        // @method getIcon: Icon
        // Returns the current icon used by the marker
        getIcon: function() {
          return this.options.icon;
        },
        // @method setIcon(icon: Icon): this
        // Changes the marker icon.
        setIcon: function(e) {
          return this.options.icon = e, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this;
        },
        getElement: function() {
          return this._icon;
        },
        update: function() {
          if (this._icon && this._map) {
            var e = this._map.latLngToLayerPoint(this._latlng).round();
            this._setPos(e);
          }
          return this;
        },
        _initIcon: function() {
          var e = this.options, r = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), a = e.icon.createIcon(this._icon), c = !1;
          a !== this._icon && (this._icon && this._removeIcon(), c = !0, e.title && (a.title = e.title), a.tagName === "IMG" && (a.alt = e.alt || "")), We(a, r), e.keyboard && (a.tabIndex = "0", a.setAttribute("role", "button")), this._icon = a, e.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && Qe(a, "focus", this._panOnFocus, this);
          var f = e.icon.createShadow(this._shadow), y = !1;
          f !== this._shadow && (this._removeShadow(), y = !0), f && (We(f, r), f.alt = ""), this._shadow = f, e.opacity < 1 && this._updateOpacity(), c && this.getPane().appendChild(this._icon), this._initInteraction(), f && y && this.getPane(e.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && Gt(this._icon, "focus", this._panOnFocus, this), Nt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && Nt(this._shadow), this._shadow = null;
        },
        _setPos: function(e) {
          this._icon && dn(this._icon, e), this._shadow && dn(this._shadow, e), this._zIndex = e.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(e) {
          this._icon && (this._icon.style.zIndex = this._zIndex + e);
        },
        _animateZoom: function(e) {
          var r = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center).round();
          this._setPos(r);
        },
        _initInteraction: function() {
          if (this.options.interactive && (We(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), $l)) {
            var e = this.options.draggable;
            this.dragging && (e = this.dragging.enabled(), this.dragging.disable()), this.dragging = new $l(this), e && this.dragging.enable();
          }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(e) {
          return this.options.opacity = e, this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function() {
          var e = this.options.opacity;
          this._icon && Ni(this._icon, e), this._shadow && Ni(this._shadow, e);
        },
        _bringToFront: function() {
          this._updateZIndex(this.options.riseOffset);
        },
        _resetZIndex: function() {
          this._updateZIndex(0);
        },
        _panOnFocus: function() {
          var e = this._map;
          if (e) {
            var r = this.options.icon.options, a = r.iconSize ? J(r.iconSize) : J(0, 0), c = r.iconAnchor ? J(r.iconAnchor) : J(0, 0);
            e.panInside(this._latlng, {
              paddingTopLeft: c,
              paddingBottomRight: a.subtract(c)
            });
          }
        },
        _getPopupAnchor: function() {
          return this.options.icon.options.popupAnchor;
        },
        _getTooltipAnchor: function() {
          return this.options.icon.options.tooltipAnchor;
        }
      });
      function Gs(e, r) {
        return new Yo(e, r);
      }
      var jr = Jt.extend({
        // @section
        // @aka Path options
        options: {
          // @option stroke: Boolean = true
          // Whether to draw stroke along the path. Set it to `false` to disable borders on polygons or circles.
          stroke: !0,
          // @option color: String = '#3388ff'
          // Stroke color
          color: "#3388ff",
          // @option weight: Number = 3
          // Stroke width in pixels
          weight: 3,
          // @option opacity: Number = 1.0
          // Stroke opacity
          opacity: 1,
          // @option lineCap: String= 'round'
          // A string that defines [shape to be used at the end](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linecap) of the stroke.
          lineCap: "round",
          // @option lineJoin: String = 'round'
          // A string that defines [shape to be used at the corners](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-linejoin) of the stroke.
          lineJoin: "round",
          // @option dashArray: String = null
          // A string that defines the stroke [dash pattern](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dasharray). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashArray: null,
          // @option dashOffset: String = null
          // A string that defines the [distance into the dash pattern to start the dash](https://developer.mozilla.org/docs/Web/SVG/Attribute/stroke-dashoffset). Doesn't work on `Canvas`-powered layers in [some old browsers](https://developer.mozilla.org/docs/Web/API/CanvasRenderingContext2D/setLineDash#Browser_compatibility).
          dashOffset: null,
          // @option fill: Boolean = depends
          // Whether to fill the path with color. Set it to `false` to disable filling on polygons or circles.
          fill: !1,
          // @option fillColor: String = *
          // Fill color. Defaults to the value of the [`color`](#path-color) option
          fillColor: null,
          // @option fillOpacity: Number = 0.2
          // Fill opacity.
          fillOpacity: 0.2,
          // @option fillRule: String = 'evenodd'
          // A string that defines [how the inside of a shape](https://developer.mozilla.org/docs/Web/SVG/Attribute/fill-rule) is determined.
          fillRule: "evenodd",
          // className: '',
          // Option inherited from "Interactive layer" abstract class
          interactive: !0,
          // @option bubblingMouseEvents: Boolean = true
          // When `true`, a mouse event on this path will trigger the same event on the map
          // (unless [`L.DomEvent.stopPropagation`](#domevent-stoppropagation) is used).
          bubblingMouseEvents: !0
        },
        beforeAdd: function(e) {
          this._renderer = e.getRenderer(this);
        },
        onAdd: function() {
          this._renderer._initPath(this), this._reset(), this._renderer._addPath(this);
        },
        onRemove: function() {
          this._renderer._removePath(this);
        },
        // @method redraw(): this
        // Redraws the layer. Sometimes useful after you changed the coordinates that the path uses.
        redraw: function() {
          return this._map && this._renderer._updatePath(this), this;
        },
        // @method setStyle(style: Path options): this
        // Changes the appearance of a Path based on the options in the `Path options` object.
        setStyle: function(e) {
          return G(this, e), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && e && Object.prototype.hasOwnProperty.call(e, "weight") && this._updateBounds()), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all path layers.
        bringToFront: function() {
          return this._renderer && this._renderer._bringToFront(this), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all path layers.
        bringToBack: function() {
          return this._renderer && this._renderer._bringToBack(this), this;
        },
        getElement: function() {
          return this._path;
        },
        _reset: function() {
          this._project(), this._update();
        },
        _clickTolerance: function() {
          return (this.options.stroke ? this.options.weight / 2 : 0) + (this._renderer.options.tolerance || 0);
        }
      }), qo = jr.extend({
        // @section
        // @aka CircleMarker options
        options: {
          fill: !0,
          // @option radius: Number = 10
          // Radius of the circle marker, in pixels
          radius: 10
        },
        initialize: function(e, r) {
          G(this, r), this._latlng = xe(e), this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(e) {
          var r = this._latlng;
          return this._latlng = xe(e), this.redraw(), this.fire("move", { oldLatLng: r, latlng: this._latlng });
        },
        // @method getLatLng(): LatLng
        // Returns the current geographical position of the circle marker
        getLatLng: function() {
          return this._latlng;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle marker. Units are in pixels.
        setRadius: function(e) {
          return this.options.radius = this._radius = e, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of the circle
        getRadius: function() {
          return this._radius;
        },
        setStyle: function(e) {
          var r = e && e.radius || this._radius;
          return jr.prototype.setStyle.call(this, e), this.setRadius(r), this;
        },
        _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function() {
          var e = this._radius, r = this._radiusY || e, a = this._clickTolerance(), c = [e + a, r + a];
          this._pxBounds = new de(this._point.subtract(c), this._point.add(c));
        },
        _update: function() {
          this._map && this._updatePath();
        },
        _updatePath: function() {
          this._renderer._updateCircle(this);
        },
        _empty: function() {
          return this._radius && !this._renderer._bounds.intersects(this._pxBounds);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(e) {
          return e.distanceTo(this._point) <= this._radius + this._clickTolerance();
        }
      });
      function Ba(e, r) {
        return new qo(e, r);
      }
      var Ko = qo.extend({
        initialize: function(e, r, a) {
          if (typeof r == "number" && (r = d({}, a, { radius: r })), G(this, r), this._latlng = xe(e), isNaN(this.options.radius))
            throw new Error("Circle radius cannot be NaN");
          this._mRadius = this.options.radius;
        },
        // @method setRadius(radius: Number): this
        // Sets the radius of a circle. Units are in meters.
        setRadius: function(e) {
          return this._mRadius = e, this.redraw();
        },
        // @method getRadius(): Number
        // Returns the current radius of a circle. Units are in meters.
        getRadius: function() {
          return this._mRadius;
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          var e = [this._radius, this._radiusY || this._radius];
          return new gt(
            this._map.layerPointToLatLng(this._point.subtract(e)),
            this._map.layerPointToLatLng(this._point.add(e))
          );
        },
        setStyle: jr.prototype.setStyle,
        _project: function() {
          var e = this._latlng.lng, r = this._latlng.lat, a = this._map, c = a.options.crs;
          if (c.distance === Qt.distance) {
            var f = Math.PI / 180, y = this._mRadius / Qt.R / f, I = a.project([r + y, e]), B = a.project([r - y, e]), W = I.add(B).divideBy(2), ne = a.unproject(W).lat, Se = Math.acos((Math.cos(y * f) - Math.sin(r * f) * Math.sin(ne * f)) / (Math.cos(r * f) * Math.cos(ne * f))) / f;
            (isNaN(Se) || Se === 0) && (Se = y / Math.cos(Math.PI / 180 * r)), this._point = W.subtract(a.getPixelOrigin()), this._radius = isNaN(Se) ? 0 : W.x - a.project([ne, e - Se]).x, this._radiusY = W.y - I.y;
          } else {
            var Me = c.unproject(c.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = a.latLngToLayerPoint(this._latlng), this._radius = this._point.x - a.latLngToLayerPoint(Me).x;
          }
          this._updateBounds();
        }
      });
      function Xr(e, r, a) {
        return new Ko(e, r, a);
      }
      var qi = jr.extend({
        // @section
        // @aka Polyline options
        options: {
          // @option smoothFactor: Number = 1.0
          // How much to simplify the polyline on each zoom level. More means
          // better performance and smoother look, and less means more accurate representation.
          smoothFactor: 1,
          // @option noClip: Boolean = false
          // Disable polyline clipping.
          noClip: !1
        },
        initialize: function(e, r) {
          G(this, r), this._setLatLngs(e);
        },
        // @method getLatLngs(): LatLng[]
        // Returns an array of the points in the path, or nested arrays of points in case of multi-polyline.
        getLatLngs: function() {
          return this._latlngs;
        },
        // @method setLatLngs(latlngs: LatLng[]): this
        // Replaces all the points in the polyline with the given array of geographical points.
        setLatLngs: function(e) {
          return this._setLatLngs(e), this.redraw();
        },
        // @method isEmpty(): Boolean
        // Returns `true` if the Polyline has no LatLngs.
        isEmpty: function() {
          return !this._latlngs.length;
        },
        // @method closestLayerPoint(p: Point): Point
        // Returns the point closest to `p` on the Polyline.
        closestLayerPoint: function(e) {
          for (var r = 1 / 0, a = null, c = lo, f, y, I = 0, B = this._parts.length; I < B; I++)
            for (var W = this._parts[I], ne = 1, Se = W.length; ne < Se; ne++) {
              f = W[ne - 1], y = W[ne];
              var Me = c(e, f, y, !0);
              Me < r && (r = Me, a = c(e, f, y));
            }
          return a && (a.distance = Math.sqrt(r)), a;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return Zo(this._defaultShape(), this._map.options.crs);
        },
        // @method getBounds(): LatLngBounds
        // Returns the `LatLngBounds` of the path.
        getBounds: function() {
          return this._bounds;
        },
        // @method addLatLng(latlng: LatLng, latlngs?: LatLng[]): this
        // Adds a given point to the polyline. By default, adds to the first ring of
        // the polyline in case of a multi-polyline, but can be overridden by passing
        // a specific ring as a LatLng array (that you can earlier access with [`getLatLngs`](#polyline-getlatlngs)).
        addLatLng: function(e, r) {
          return r = r || this._defaultShape(), e = xe(e), r.push(e), this._bounds.extend(e), this.redraw();
        },
        _setLatLngs: function(e) {
          this._bounds = new gt(), this._latlngs = this._convertLatLngs(e);
        },
        _defaultShape: function() {
          return Pi(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(e) {
          for (var r = [], a = Pi(e), c = 0, f = e.length; c < f; c++)
            a ? (r[c] = xe(e[c]), this._bounds.extend(r[c])) : r[c] = this._convertLatLngs(e[c]);
          return r;
        },
        _project: function() {
          var e = new de();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, e), this._bounds.isValid() && e.isValid() && (this._rawPxBounds = e, this._updateBounds());
        },
        _updateBounds: function() {
          var e = this._clickTolerance(), r = new _e(e, e);
          this._rawPxBounds && (this._pxBounds = new de([
            this._rawPxBounds.min.subtract(r),
            this._rawPxBounds.max.add(r)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(e, r, a) {
          var c = e[0] instanceof ke, f = e.length, y, I;
          if (c) {
            for (I = [], y = 0; y < f; y++)
              I[y] = this._map.latLngToLayerPoint(e[y]), a.extend(I[y]);
            r.push(I);
          } else
            for (y = 0; y < f; y++)
              this._projectLatlngs(e[y], r, a);
        },
        // clip polyline by renderer bounds so that we have less to render for performance
        _clipPoints: function() {
          var e = this._renderer._bounds;
          if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(e))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            var r = this._parts, a, c, f, y, I, B, W;
            for (a = 0, f = 0, y = this._rings.length; a < y; a++)
              for (W = this._rings[a], c = 0, I = W.length; c < I - 1; c++)
                B = Hl(W[c], W[c + 1], e, c, !0), B && (r[f] = r[f] || [], r[f].push(B[0]), (B[1] !== W[c + 1] || c === I - 2) && (r[f].push(B[1]), f++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var e = this._parts, r = this.options.smoothFactor, a = 0, c = e.length; a < c; a++)
            e[a] = Vt(e[a], r);
        },
        _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
          this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(e, r) {
          var a, c, f, y, I, B, W = this._clickTolerance();
          if (!this._pxBounds || !this._pxBounds.contains(e))
            return !1;
          for (a = 0, y = this._parts.length; a < y; a++)
            for (B = this._parts[a], c = 0, I = B.length, f = I - 1; c < I; f = c++)
              if (!(!r && c === 0) && Br(e, B[f], B[c]) <= W)
                return !0;
          return !1;
        }
      });
      function oc(e, r) {
        return new qi(e, r);
      }
      qi._flat = Ra;
      var ks = qi.extend({
        options: {
          fill: !0
        },
        isEmpty: function() {
          return !this._latlngs.length || !this._latlngs[0].length;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](http://en.wikipedia.org/wiki/Centroid)) of the Polygon.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return Mr(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(e) {
          var r = qi.prototype._convertLatLngs.call(this, e), a = r.length;
          return a >= 2 && r[0] instanceof ke && r[0].equals(r[a - 1]) && r.pop(), r;
        },
        _setLatLngs: function(e) {
          qi.prototype._setLatLngs.call(this, e), Pi(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return Pi(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var e = this._renderer._bounds, r = this.options.weight, a = new _e(r, r);
          if (e = new de(e.min.subtract(a), e.max.add(a)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(e))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var c = 0, f = this._rings.length, y; c < f; c++)
              y = Ia(this._rings[c], e, !0), y.length && this._parts.push(y);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(e) {
          var r = !1, a, c, f, y, I, B, W, ne;
          if (!this._pxBounds || !this._pxBounds.contains(e))
            return !1;
          for (y = 0, W = this._parts.length; y < W; y++)
            for (a = this._parts[y], I = 0, ne = a.length, B = ne - 1; I < ne; B = I++)
              c = a[I], f = a[B], c.y > e.y != f.y > e.y && e.x < (f.x - c.x) * (e.y - c.y) / (f.y - c.y) + c.x && (r = !r);
          return r || qi.prototype._containsPoint.call(this, e, !0);
        }
      });
      function ac(e, r) {
        return new ks(e, r);
      }
      var vi = Ar.extend({
        /* @section
         * @aka GeoJSON options
         *
         * @option pointToLayer: Function = *
         * A `Function` defining how GeoJSON points spawn Leaflet layers. It is internally
         * called when data is added, passing the GeoJSON point feature and its `LatLng`.
         * The default is to spawn a default `Marker`:
         * ```js
         * function(geoJsonPoint, latlng) {
         * 	return L.marker(latlng);
         * }
         * ```
         *
         * @option style: Function = *
         * A `Function` defining the `Path options` for styling GeoJSON lines and polygons,
         * called internally when data is added.
         * The default value is to not override any defaults:
         * ```js
         * function (geoJsonFeature) {
         * 	return {}
         * }
         * ```
         *
         * @option onEachFeature: Function = *
         * A `Function` that will be called once for each created `Feature`, after it has
         * been created and styled. Useful for attaching events and popups to features.
         * The default is to do nothing with the newly created layers:
         * ```js
         * function (feature, layer) {}
         * ```
         *
         * @option filter: Function = *
         * A `Function` that will be used to decide whether to include a feature or not.
         * The default is to include all features:
         * ```js
         * function (geoJsonFeature) {
         * 	return true;
         * }
         * ```
         * Note: dynamically changing the `filter` option will have effect only on newly
         * added data. It will _not_ re-evaluate already included features.
         *
         * @option coordsToLatLng: Function = *
         * A `Function` that will be used for converting GeoJSON coordinates to `LatLng`s.
         * The default is the `coordsToLatLng` static method.
         *
         * @option markersInheritOptions: Boolean = false
         * Whether default Markers for "Point" type Features inherit from group options.
         */
        initialize: function(e, r) {
          G(this, r), this._layers = {}, e && this.addData(e);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(e) {
          var r = Y(e) ? e : e.features, a, c, f;
          if (r) {
            for (a = 0, c = r.length; a < c; a++)
              f = r[a], (f.geometries || f.geometry || f.features || f.coordinates) && this.addData(f);
            return this;
          }
          var y = this.options;
          if (y.filter && !y.filter(e))
            return this;
          var I = yi(e, y);
          return I ? (I.feature = Gr(e), I.defaultOptions = I.options, this.resetStyle(I), y.onEachFeature && y.onEachFeature(e, I), this.addLayer(I)) : this;
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(e) {
          return e === void 0 ? this.eachLayer(this.resetStyle, this) : (e.options = d({}, e.defaultOptions), this._setLayerStyle(e, this.options.style), this);
        },
        // @method setStyle( <Function> style ): this
        // Changes styles of GeoJSON vector layers with the given style function.
        setStyle: function(e) {
          return this.eachLayer(function(r) {
            this._setLayerStyle(r, e);
          }, this);
        },
        _setLayerStyle: function(e, r) {
          e.setStyle && (typeof r == "function" && (r = r(e.feature)), e.setStyle(r));
        }
      });
      function yi(e, r) {
        var a = e.type === "Feature" ? e.geometry : e, c = a ? a.coordinates : null, f = [], y = r && r.pointToLayer, I = r && r.coordsToLatLng || ka, B, W, ne, Se;
        if (!c && !a)
          return null;
        switch (a.type) {
          case "Point":
            return B = I(c), Ga(y, e, B, r);
          case "MultiPoint":
            for (ne = 0, Se = c.length; ne < Se; ne++)
              B = I(c[ne]), f.push(Ga(y, e, B, r));
            return new Ar(f);
          case "LineString":
          case "MultiLineString":
            return W = $o(c, a.type === "LineString" ? 0 : 1, I), new qi(W, r);
          case "Polygon":
          case "MultiPolygon":
            return W = $o(c, a.type === "Polygon" ? 1 : 2, I), new ks(W, r);
          case "GeometryCollection":
            for (ne = 0, Se = a.geometries.length; ne < Se; ne++) {
              var Me = yi({
                geometry: a.geometries[ne],
                type: "Feature",
                properties: e.properties
              }, r);
              Me && f.push(Me);
            }
            return new Ar(f);
          case "FeatureCollection":
            for (ne = 0, Se = a.features.length; ne < Se; ne++) {
              var ot = yi(a.features[ne], r);
              ot && f.push(ot);
            }
            return new Ar(f);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function Ga(e, r, a, c) {
        return e ? e(r, a) : new Yo(a, c && c.markersInheritOptions && c);
      }
      function ka(e) {
        return new ke(e[1], e[0], e[2]);
      }
      function $o(e, r, a) {
        for (var c = [], f = 0, y = e.length, I; f < y; f++)
          I = r ? $o(e[f], r - 1, a) : (a || ka)(e[f]), c.push(I);
        return c;
      }
      function Ua(e, r) {
        return e = xe(e), e.alt !== void 0 ? [b(e.lng, r), b(e.lat, r), b(e.alt, r)] : [b(e.lng, r), b(e.lat, r)];
      }
      function Jo(e, r, a, c) {
        for (var f = [], y = 0, I = e.length; y < I; y++)
          f.push(r ? Jo(e[y], Pi(e[y]) ? 0 : r - 1, a, c) : Ua(e[y], c));
        return !r && a && f.length > 0 && f.push(f[0].slice()), f;
      }
      function Us(e, r) {
        return e.feature ? d({}, e.feature, { geometry: r }) : Gr(r);
      }
      function Gr(e) {
        return e.type === "Feature" || e.type === "FeatureCollection" ? e : {
          type: "Feature",
          properties: {},
          geometry: e
        };
      }
      var P = {
        toGeoJSON: function(e) {
          return Us(this, {
            type: "Point",
            coordinates: Ua(this.getLatLng(), e)
          });
        }
      };
      Yo.include(P), Ko.include(P), qo.include(P), qi.include({
        toGeoJSON: function(e) {
          var r = !Pi(this._latlngs), a = Jo(this._latlngs, r ? 1 : 0, !1, e);
          return Us(this, {
            type: (r ? "Multi" : "") + "LineString",
            coordinates: a
          });
        }
      }), ks.include({
        toGeoJSON: function(e) {
          var r = !Pi(this._latlngs), a = r && !Pi(this._latlngs[0]), c = Jo(this._latlngs, a ? 2 : r ? 1 : 0, !0, e);
          return r || (c = [c]), Us(this, {
            type: (a ? "Multi" : "") + "Polygon",
            coordinates: c
          });
        }
      }), Jr.include({
        toMultiPoint: function(e) {
          var r = [];
          return this.eachLayer(function(a) {
            r.push(a.toGeoJSON(e).geometry.coordinates);
          }), Us(this, {
            type: "MultiPoint",
            coordinates: r
          });
        },
        // @method toGeoJSON(precision?: Number|false): Object
        // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
        // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
        toGeoJSON: function(e) {
          var r = this.feature && this.feature.geometry && this.feature.geometry.type;
          if (r === "MultiPoint")
            return this.toMultiPoint(e);
          var a = r === "GeometryCollection", c = [];
          return this.eachLayer(function(f) {
            if (f.toGeoJSON) {
              var y = f.toGeoJSON(e);
              if (a)
                c.push(y.geometry);
              else {
                var I = Gr(y);
                I.type === "FeatureCollection" ? c.push.apply(c, I.features) : c.push(I);
              }
            }
          }), a ? Us(this, {
            geometries: c,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: c
          };
        }
      });
      function $(e, r) {
        return new vi(e, r);
      }
      var H = $, Ce = Jt.extend({
        // @section
        // @aka ImageOverlay options
        options: {
          // @option opacity: Number = 1.0
          // The opacity of the image overlay.
          opacity: 1,
          // @option alt: String = ''
          // Text for the `alt` attribute of the image (useful for accessibility).
          alt: "",
          // @option interactive: Boolean = false
          // If `true`, the image overlay will emit [mouse events](#interactive-layer) when clicked or hovered.
          interactive: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the image.
          // If a String is provided, the image will have its crossOrigin attribute set to the String provided. This is needed if you want to access image pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option errorOverlayUrl: String = ''
          // URL to the overlay image to show in place of the overlay that failed to load.
          errorOverlayUrl: "",
          // @option zIndex: Number = 1
          // The explicit [zIndex](https://developer.mozilla.org/docs/Web/CSS/CSS_Positioning/Understanding_z_index) of the overlay layer.
          zIndex: 1,
          // @option className: String = ''
          // A custom class name to assign to the image. Empty by default.
          className: ""
        },
        initialize: function(e, r, a) {
          this._url = e, this._bounds = re(r), G(this, a);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (We(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function() {
          Nt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
        },
        // @method setOpacity(opacity: Number): this
        // Sets the opacity of the overlay.
        setOpacity: function(e) {
          return this.options.opacity = e, this._image && this._updateOpacity(), this;
        },
        setStyle: function(e) {
          return e.opacity && this.setOpacity(e.opacity), this;
        },
        // @method bringToFront(): this
        // Brings the layer to the top of all overlays.
        bringToFront: function() {
          return this._map && Mn(this._image), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
          return this._map && gi(this._image), this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(e) {
          return this._url = e, this._image && (this._image.src = e), this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(e) {
          return this._bounds = re(e), this._map && this._reset(), this;
        },
        getEvents: function() {
          var e = {
            zoom: this._reset,
            viewreset: this._reset
          };
          return this._zoomAnimated && (e.zoomanim = this._animateZoom), e;
        },
        // @method setZIndex(value: Number): this
        // Changes the [zIndex](#imageoverlay-zindex) of the image overlay.
        setZIndex: function(e) {
          return this.options.zIndex = e, this._updateZIndex(), this;
        },
        // @method getBounds(): LatLngBounds
        // Get the bounds that this ImageOverlay covers
        getBounds: function() {
          return this._bounds;
        },
        // @method getElement(): HTMLElement
        // Returns the instance of [`HTMLImageElement`](https://developer.mozilla.org/docs/Web/API/HTMLImageElement)
        // used by this overlay.
        getElement: function() {
          return this._image;
        },
        _initImage: function() {
          var e = this._url.tagName === "IMG", r = this._image = e ? this._url : nt("img");
          if (We(r, "leaflet-image-layer"), this._zoomAnimated && We(r, "leaflet-zoom-animated"), this.options.className && We(r, this.options.className), r.onselectstart = w, r.onmousemove = w, r.onload = _(this.fire, this, "load"), r.onerror = _(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (r.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), e) {
            this._url = r.src;
            return;
          }
          r.src = this._url, r.alt = this.options.alt;
        },
        _animateZoom: function(e) {
          var r = this._map.getZoomScale(e.zoom), a = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;
          fs(this._image, a, r);
        },
        _reset: function() {
          var e = this._image, r = new de(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ), a = r.getSize();
          dn(e, r.min), e.style.width = a.x + "px", e.style.height = a.y + "px";
        },
        _updateOpacity: function() {
          Ni(this._image, this.options.opacity);
        },
        _updateZIndex: function() {
          this._image && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._image.style.zIndex = this.options.zIndex);
        },
        _overlayOnError: function() {
          this.fire("error");
          var e = this.options.errorOverlayUrl;
          e && this._url !== e && (this._url = e, this._image.src = e);
        },
        // @method getCenter(): LatLng
        // Returns the center of the ImageOverlay.
        getCenter: function() {
          return this._bounds.getCenter();
        }
      }), je = function(e, r, a) {
        return new Ce(e, r, a);
      }, Ct = Ce.extend({
        // @section
        // @aka VideoOverlay options
        options: {
          // @option autoplay: Boolean = true
          // Whether the video starts playing automatically when loaded.
          // On some browsers autoplay will only work with `muted: true`
          autoplay: !0,
          // @option loop: Boolean = true
          // Whether the video will loop back to the beginning when played.
          loop: !0,
          // @option keepAspectRatio: Boolean = true
          // Whether the video will save aspect ratio after the projection.
          // Relevant for supported browsers. See [browser compatibility](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)
          keepAspectRatio: !0,
          // @option muted: Boolean = false
          // Whether the video starts on mute when loaded.
          muted: !1,
          // @option playsInline: Boolean = true
          // Mobile browsers will play the video right where it is instead of open it up in fullscreen mode.
          playsInline: !0
        },
        _initImage: function() {
          var e = this._url.tagName === "VIDEO", r = this._image = e ? this._url : nt("video");
          if (We(r, "leaflet-image-layer"), this._zoomAnimated && We(r, "leaflet-zoom-animated"), this.options.className && We(r, this.options.className), r.onselectstart = w, r.onmousemove = w, r.onloadeddata = _(this.fire, this, "load"), e) {
            for (var a = r.getElementsByTagName("source"), c = [], f = 0; f < a.length; f++)
              c.push(a[f].src);
            this._url = a.length > 0 ? c : [r.src];
            return;
          }
          Y(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(r.style, "objectFit") && (r.style.objectFit = "fill"), r.autoplay = !!this.options.autoplay, r.loop = !!this.options.loop, r.muted = !!this.options.muted, r.playsInline = !!this.options.playsInline;
          for (var y = 0; y < this._url.length; y++) {
            var I = nt("source");
            I.src = this._url[y], r.appendChild(I);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function Ln(e, r, a) {
        return new Ct(e, r, a);
      }
      var Mt = Ce.extend({
        _initImage: function() {
          var e = this._image = this._url;
          We(e, "leaflet-image-layer"), this._zoomAnimated && We(e, "leaflet-zoom-animated"), this.options.className && We(e, this.options.className), e.onselectstart = w, e.onmousemove = w;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function Va(e, r, a) {
        return new Mt(e, r, a);
      }
      var Cr = Jt.extend({
        // @section
        // @aka DivOverlay options
        options: {
          // @option interactive: Boolean = false
          // If true, the popup/tooltip will listen to the mouse events.
          interactive: !1,
          // @option offset: Point = Point(0, 0)
          // The offset of the overlay position.
          offset: [0, 0],
          // @option className: String = ''
          // A custom CSS class name to assign to the overlay.
          className: "",
          // @option pane: String = undefined
          // `Map pane` where the overlay will be added.
          pane: void 0,
          // @option content: String|HTMLElement|Function = ''
          // Sets the HTML content of the overlay while initializing. If a function is passed the source layer will be
          // passed to the function. The function should return a `String` or `HTMLElement` to be used in the overlay.
          content: ""
        },
        initialize: function(e, r) {
          e && (e instanceof ke || Y(e)) ? (this._latlng = xe(e), G(this, r)) : (G(this, e), this._source = r), this.options.content && (this._content = this.options.content);
        },
        // @method openOn(map: Map): this
        // Adds the overlay to the map.
        // Alternative to `map.openPopup(popup)`/`.openTooltip(tooltip)`.
        openOn: function(e) {
          return e = arguments.length ? e : this._source._map, e.hasLayer(this) || e.addLayer(this), this;
        },
        // @method close(): this
        // Closes the overlay.
        // Alternative to `map.closePopup(popup)`/`.closeTooltip(tooltip)`
        // and `layer.closePopup()`/`.closeTooltip()`.
        close: function() {
          return this._map && this._map.removeLayer(this), this;
        },
        // @method toggle(layer?: Layer): this
        // Opens or closes the overlay bound to layer depending on its current state.
        // Argument may be omitted only for overlay bound to layer.
        // Alternative to `layer.togglePopup()`/`.toggleTooltip()`.
        toggle: function(e) {
          return this._map ? this.close() : (arguments.length ? this._source = e : e = this._source, this._prepareOpen(), this.openOn(e._map)), this;
        },
        onAdd: function(e) {
          this._zoomAnimated = e._zoomAnimated, this._container || this._initLayout(), e._fadeAnimated && Ni(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), e._fadeAnimated && Ni(this._container, 1), this.bringToFront(), this.options.interactive && (We(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(e) {
          e._fadeAnimated ? (Ni(this._container, 0), this._removeTimeout = setTimeout(_(Nt, void 0, this._container), 200)) : Nt(this._container), this.options.interactive && (Dt(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
        },
        // @namespace DivOverlay
        // @method getLatLng: LatLng
        // Returns the geographical point of the overlay.
        getLatLng: function() {
          return this._latlng;
        },
        // @method setLatLng(latlng: LatLng): this
        // Sets the geographical point where the overlay will open.
        setLatLng: function(e) {
          return this._latlng = xe(e), this._map && (this._updatePosition(), this._adjustPan()), this;
        },
        // @method getContent: String|HTMLElement
        // Returns the content of the overlay.
        getContent: function() {
          return this._content;
        },
        // @method setContent(htmlContent: String|HTMLElement|Function): this
        // Sets the HTML content of the overlay. If a function is passed the source layer will be passed to the function.
        // The function should return a `String` or `HTMLElement` to be used in the overlay.
        setContent: function(e) {
          return this._content = e, this.update(), this;
        },
        // @method getElement: String|HTMLElement
        // Returns the HTML container of the overlay.
        getElement: function() {
          return this._container;
        },
        // @method update: null
        // Updates the overlay content, layout and position. Useful for updating the overlay after something inside changed, e.g. image loaded.
        update: function() {
          this._map && (this._container.style.visibility = "hidden", this._updateContent(), this._updateLayout(), this._updatePosition(), this._container.style.visibility = "", this._adjustPan());
        },
        getEvents: function() {
          var e = {
            zoom: this._updatePosition,
            viewreset: this._updatePosition
          };
          return this._zoomAnimated && (e.zoomanim = this._animateZoom), e;
        },
        // @method isOpen: Boolean
        // Returns `true` when the overlay is visible on the map.
        isOpen: function() {
          return !!this._map && this._map.hasLayer(this);
        },
        // @method bringToFront: this
        // Brings this overlay in front of other overlays (in the same map pane).
        bringToFront: function() {
          return this._map && Mn(this._container), this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
          return this._map && gi(this._container), this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(e) {
          var r = this._source;
          if (!r._map)
            return !1;
          if (r instanceof Ar) {
            r = null;
            var a = this._source._layers;
            for (var c in a)
              if (a[c]._map) {
                r = a[c];
                break;
              }
            if (!r)
              return !1;
            this._source = r;
          }
          if (!e)
            if (r.getCenter)
              e = r.getCenter();
            else if (r.getLatLng)
              e = r.getLatLng();
            else if (r.getBounds)
              e = r.getBounds().getCenter();
            else
              throw new Error("Unable to get source layer LatLng.");
          return this.setLatLng(e), this._map && this.update(), !0;
        },
        _updateContent: function() {
          if (this._content) {
            var e = this._contentNode, r = typeof this._content == "function" ? this._content(this._source || this) : this._content;
            if (typeof r == "string")
              e.innerHTML = r;
            else {
              for (; e.hasChildNodes(); )
                e.removeChild(e.firstChild);
              e.appendChild(r);
            }
            this.fire("contentupdate");
          }
        },
        _updatePosition: function() {
          if (this._map) {
            var e = this._map.latLngToLayerPoint(this._latlng), r = J(this.options.offset), a = this._getAnchor();
            this._zoomAnimated ? dn(this._container, e.add(a)) : r = r.add(e).add(a);
            var c = this._containerBottom = -r.y, f = this._containerLeft = -Math.round(this._containerWidth / 2) + r.x;
            this._container.style.bottom = c + "px", this._container.style.left = f + "px";
          }
        },
        _getAnchor: function() {
          return [0, 0];
        }
      });
      vt.include({
        _initOverlay: function(e, r, a, c) {
          var f = r;
          return f instanceof e || (f = new e(c).setContent(r)), a && f.setLatLng(a), f;
        }
      }), Jt.include({
        _initOverlay: function(e, r, a, c) {
          var f = a;
          return f instanceof e ? (G(f, c), f._source = this) : (f = r && !c ? r : new e(c, this), f.setContent(a)), f;
        }
      });
      var ai = Cr.extend({
        // @section
        // @aka Popup options
        options: {
          // @option pane: String = 'popupPane'
          // `Map pane` where the popup will be added.
          pane: "popupPane",
          // @option offset: Point = Point(0, 7)
          // The offset of the popup position.
          offset: [0, 7],
          // @option maxWidth: Number = 300
          // Max width of the popup, in pixels.
          maxWidth: 300,
          // @option minWidth: Number = 50
          // Min width of the popup, in pixels.
          minWidth: 50,
          // @option maxHeight: Number = null
          // If set, creates a scrollable container of the given height
          // inside a popup if its content exceeds it.
          // The scrollable container can be styled using the
          // `leaflet-popup-scrolled` CSS class selector.
          maxHeight: null,
          // @option autoPan: Boolean = true
          // Set it to `false` if you don't want the map to do panning animation
          // to fit the opened popup.
          autoPan: !0,
          // @option autoPanPaddingTopLeft: Point = null
          // The margin between the popup and the top left corner of the map
          // view after autopanning was performed.
          autoPanPaddingTopLeft: null,
          // @option autoPanPaddingBottomRight: Point = null
          // The margin between the popup and the bottom right corner of the map
          // view after autopanning was performed.
          autoPanPaddingBottomRight: null,
          // @option autoPanPadding: Point = Point(5, 5)
          // Equivalent of setting both top left and bottom right autopan padding to the same value.
          autoPanPadding: [5, 5],
          // @option keepInView: Boolean = false
          // Set it to `true` if you want to prevent users from panning the popup
          // off of the screen while it is open.
          keepInView: !1,
          // @option closeButton: Boolean = true
          // Controls the presence of a close button in the popup.
          closeButton: !0,
          // @option autoClose: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the popup closing when another popup is opened.
          autoClose: !0,
          // @option closeOnEscapeKey: Boolean = true
          // Set it to `false` if you want to override the default behavior of
          // the ESC key for closing of the popup.
          closeOnEscapeKey: !0,
          // @option closeOnClick: Boolean = *
          // Set it if you want to override the default behavior of the popup closing when user clicks
          // on the map. Defaults to the map's [`closePopupOnClick`](#map-closepopuponclick) option.
          // @option className: String = ''
          // A custom CSS class name to assign to the popup.
          className: ""
        },
        // @namespace Popup
        // @method openOn(map: Map): this
        // Alternative to `map.openPopup(popup)`.
        // Adds the popup to the map and closes the previous one.
        openOn: function(e) {
          return e = arguments.length ? e : this._source._map, !e.hasLayer(this) && e._popup && e._popup.options.autoClose && e.removeLayer(e._popup), e._popup = this, Cr.prototype.openOn.call(this, e);
        },
        onAdd: function(e) {
          Cr.prototype.onAdd.call(this, e), e.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof jr || this._source.on("preclick", _s));
        },
        onRemove: function(e) {
          Cr.prototype.onRemove.call(this, e), e.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof jr || this._source.off("preclick", _s));
        },
        getEvents: function() {
          var e = Cr.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (e.preclick = this.close), this.options.keepInView && (e.moveend = this._adjustPan), e;
        },
        _initLayout: function() {
          var e = "leaflet-popup", r = this._container = nt(
            "div",
            e + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), a = this._wrapper = nt("div", e + "-content-wrapper", r);
          if (this._contentNode = nt("div", e + "-content", a), so(r), Sa(this._contentNode), Qe(r, "contextmenu", _s), this._tipContainer = nt("div", e + "-tip-container", r), this._tip = nt("div", e + "-tip", this._tipContainer), this.options.closeButton) {
            var c = this._closeButton = nt("a", e + "-close-button", r);
            c.setAttribute("role", "button"), c.setAttribute("aria-label", "Close popup"), c.href = "#close", c.innerHTML = '<span aria-hidden="true">&#215;</span>', Qe(c, "click", function(f) {
              it(f), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var e = this._contentNode, r = e.style;
          r.width = "", r.whiteSpace = "nowrap";
          var a = e.offsetWidth;
          a = Math.min(a, this.options.maxWidth), a = Math.max(a, this.options.minWidth), r.width = a + 1 + "px", r.whiteSpace = "", r.height = "";
          var c = e.offsetHeight, f = this.options.maxHeight, y = "leaflet-popup-scrolled";
          f && c > f ? (r.height = f + "px", We(e, y)) : Dt(e, y), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(e) {
          var r = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center), a = this._getAnchor();
          dn(this._container, r.add(a));
        },
        _adjustPan: function() {
          if (this.options.autoPan) {
            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
              this._autopanning = !1;
              return;
            }
            var e = this._map, r = parseInt(nr(this._container, "marginBottom"), 10) || 0, a = this._container.offsetHeight + r, c = this._containerWidth, f = new _e(this._containerLeft, -a - this._containerBottom);
            f._add(Fr(this._container));
            var y = e.layerPointToContainerPoint(f), I = J(this.options.autoPanPadding), B = J(this.options.autoPanPaddingTopLeft || I), W = J(this.options.autoPanPaddingBottomRight || I), ne = e.getSize(), Se = 0, Me = 0;
            y.x + c + W.x > ne.x && (Se = y.x + c - ne.x + W.x), y.x - Se - B.x < 0 && (Se = y.x - B.x), y.y + a + W.y > ne.y && (Me = y.y + a - ne.y + W.y), y.y - Me - B.y < 0 && (Me = y.y - B.y), (Se || Me) && (this.options.keepInView && (this._autopanning = !0), e.fire("autopanstart").panBy([Se, Me]));
          }
        },
        _getAnchor: function() {
          return J(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), jo = function(e, r) {
        return new ai(e, r);
      };
      vt.mergeOptions({
        closePopupOnClick: !0
      }), vt.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(e, r, a) {
          return this._initOverlay(ai, e, r, a).openOn(this), this;
        },
        // @method closePopup(popup?: Popup): this
        // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
        closePopup: function(e) {
          return e = arguments.length ? e : this._popup, e && e.close(), this;
        }
      }), Jt.include({
        // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
        // Binds a popup to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindPopup: function(e, r) {
          return this._popup = this._initOverlay(ai, this._popup, e, r), this._popupHandlersAdded || (this.on({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !0), this;
        },
        // @method unbindPopup(): this
        // Removes the popup previously bound with `bindPopup`.
        unbindPopup: function() {
          return this._popup && (this.off({
            click: this._openPopup,
            keypress: this._onKeyPress,
            remove: this.closePopup,
            move: this._movePopup
          }), this._popupHandlersAdded = !1, this._popup = null), this;
        },
        // @method openPopup(latlng?: LatLng): this
        // Opens the bound popup at the specified `latlng` or at the default popup anchor if no `latlng` is passed.
        openPopup: function(e) {
          return this._popup && (this instanceof Ar || (this._popup._source = this), this._popup._prepareOpen(e || this._latlng) && this._popup.openOn(this._map)), this;
        },
        // @method closePopup(): this
        // Closes the popup bound to this layer if it is open.
        closePopup: function() {
          return this._popup && this._popup.close(), this;
        },
        // @method togglePopup(): this
        // Opens or closes the popup bound to this layer depending on its current state.
        togglePopup: function() {
          return this._popup && this._popup.toggle(this), this;
        },
        // @method isPopupOpen(): boolean
        // Returns `true` if the popup bound to this layer is currently open.
        isPopupOpen: function() {
          return this._popup ? this._popup.isOpen() : !1;
        },
        // @method setPopupContent(content: String|HTMLElement|Popup): this
        // Sets the content of the popup bound to this layer.
        setPopupContent: function(e) {
          return this._popup && this._popup.setContent(e), this;
        },
        // @method getPopup(): Popup
        // Returns the popup bound to this layer.
        getPopup: function() {
          return this._popup;
        },
        _openPopup: function(e) {
          if (!(!this._popup || !this._map)) {
            At(e);
            var r = e.layer || e.target;
            if (this._popup._source === r && !(r instanceof jr)) {
              this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(e.latlng);
              return;
            }
            this._popup._source = r, this.openPopup(e.latlng);
          }
        },
        _movePopup: function(e) {
          this._popup.setLatLng(e.latlng);
        },
        _onKeyPress: function(e) {
          e.originalEvent.keyCode === 13 && this._openPopup(e);
        }
      });
      var Xo = Cr.extend({
        // @section
        // @aka Tooltip options
        options: {
          // @option pane: String = 'tooltipPane'
          // `Map pane` where the tooltip will be added.
          pane: "tooltipPane",
          // @option offset: Point = Point(0, 0)
          // Optional offset of the tooltip position.
          offset: [0, 0],
          // @option direction: String = 'auto'
          // Direction where to open the tooltip. Possible values are: `right`, `left`,
          // `top`, `bottom`, `center`, `auto`.
          // `auto` will dynamically switch between `right` and `left` according to the tooltip
          // position on the map.
          direction: "auto",
          // @option permanent: Boolean = false
          // Whether to open the tooltip permanently or only on mouseover.
          permanent: !1,
          // @option sticky: Boolean = false
          // If true, the tooltip will follow the mouse instead of being fixed at the feature center.
          sticky: !1,
          // @option opacity: Number = 0.9
          // Tooltip container opacity.
          opacity: 0.9
        },
        onAdd: function(e) {
          Cr.prototype.onAdd.call(this, e), this.setOpacity(this.options.opacity), e.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function(e) {
          Cr.prototype.onRemove.call(this, e), e.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function() {
          var e = Cr.prototype.getEvents.call(this);
          return this.options.permanent || (e.preclick = this.close), e;
        },
        _initLayout: function() {
          var e = "leaflet-tooltip", r = e + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = nt("div", r), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + m(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(e) {
          var r, a, c = this._map, f = this._container, y = c.latLngToContainerPoint(c.getCenter()), I = c.layerPointToContainerPoint(e), B = this.options.direction, W = f.offsetWidth, ne = f.offsetHeight, Se = J(this.options.offset), Me = this._getAnchor();
          B === "top" ? (r = W / 2, a = ne) : B === "bottom" ? (r = W / 2, a = 0) : B === "center" ? (r = W / 2, a = ne / 2) : B === "right" ? (r = 0, a = ne / 2) : B === "left" ? (r = W, a = ne / 2) : I.x < y.x ? (B = "right", r = 0, a = ne / 2) : (B = "left", r = W + (Se.x + Me.x) * 2, a = ne / 2), e = e.subtract(J(r, a, !0)).add(Se).add(Me), Dt(f, "leaflet-tooltip-right"), Dt(f, "leaflet-tooltip-left"), Dt(f, "leaflet-tooltip-top"), Dt(f, "leaflet-tooltip-bottom"), We(f, "leaflet-tooltip-" + B), dn(f, e);
        },
        _updatePosition: function() {
          var e = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(e);
        },
        setOpacity: function(e) {
          this.options.opacity = e, this._container && Ni(this._container, e);
        },
        _animateZoom: function(e) {
          var r = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
          this._setPosition(r);
        },
        _getAnchor: function() {
          return J(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      }), Vs = function(e, r) {
        return new Xo(e, r);
      };
      vt.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(e, r, a) {
          return this._initOverlay(Xo, e, r, a).openOn(this), this;
        },
        // @method closeTooltip(tooltip: Tooltip): this
        // Closes the tooltip given as parameter.
        closeTooltip: function(e) {
          return e.close(), this;
        }
      }), Jt.include({
        // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
        // Binds a tooltip to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindTooltip: function(e, r) {
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Xo, this._tooltip, e, r), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
        },
        // @method unbindTooltip(): this
        // Removes the tooltip previously bound with `bindTooltip`.
        unbindTooltip: function() {
          return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
        },
        _initTooltipInteractions: function(e) {
          if (!(!e && this._tooltipHandlersAdded)) {
            var r = e ? "off" : "on", a = {
              remove: this.closeTooltip,
              move: this._moveTooltip
            };
            this._tooltip.options.permanent ? a.add = this._openTooltip : (a.mouseover = this._openTooltip, a.mouseout = this.closeTooltip, a.click = this._openTooltip, this._map ? this._addFocusListeners() : a.add = this._addFocusListeners), this._tooltip.options.sticky && (a.mousemove = this._moveTooltip), this[r](a), this._tooltipHandlersAdded = !e;
          }
        },
        // @method openTooltip(latlng?: LatLng): this
        // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
        openTooltip: function(e) {
          return this._tooltip && (this instanceof Ar || (this._tooltip._source = this), this._tooltip._prepareOpen(e) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
        },
        // @method closeTooltip(): this
        // Closes the tooltip bound to this layer if it is open.
        closeTooltip: function() {
          if (this._tooltip)
            return this._tooltip.close();
        },
        // @method toggleTooltip(): this
        // Opens or closes the tooltip bound to this layer depending on its current state.
        toggleTooltip: function() {
          return this._tooltip && this._tooltip.toggle(this), this;
        },
        // @method isTooltipOpen(): boolean
        // Returns `true` if the tooltip bound to this layer is currently open.
        isTooltipOpen: function() {
          return this._tooltip.isOpen();
        },
        // @method setTooltipContent(content: String|HTMLElement|Tooltip): this
        // Sets the content of the tooltip bound to this layer.
        setTooltipContent: function(e) {
          return this._tooltip && this._tooltip.setContent(e), this;
        },
        // @method getTooltip(): Tooltip
        // Returns the tooltip bound to this layer.
        getTooltip: function() {
          return this._tooltip;
        },
        _addFocusListeners: function() {
          this.getElement ? this._addFocusListenersOnLayer(this) : this.eachLayer && this.eachLayer(this._addFocusListenersOnLayer, this);
        },
        _addFocusListenersOnLayer: function(e) {
          var r = typeof e.getElement == "function" && e.getElement();
          r && (Qe(r, "focus", function() {
            this._tooltip._source = e, this.openTooltip();
          }, this), Qe(r, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function(e) {
          var r = typeof e.getElement == "function" && e.getElement();
          r && r.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function(e) {
          if (!(!this._tooltip || !this._map)) {
            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
              this._openOnceFlag = !0;
              var r = this;
              this._map.once("moveend", function() {
                r._openOnceFlag = !1, r._openTooltip(e);
              });
              return;
            }
            this._tooltip._source = e.layer || e.target, this.openTooltip(this._tooltip.options.sticky ? e.latlng : void 0);
          }
        },
        _moveTooltip: function(e) {
          var r = e.latlng, a, c;
          this._tooltip.options.sticky && e.originalEvent && (a = this._map.mouseEventToContainerPoint(e.originalEvent), c = this._map.containerPointToLayerPoint(a), r = this._map.layerPointToLatLng(c)), this._tooltip.setLatLng(r);
        }
      });
      var ho = Bs.extend({
        options: {
          // @section
          // @aka DivIcon options
          iconSize: [12, 12],
          // also can be set through CSS
          // iconAnchor: (Point),
          // popupAnchor: (Point),
          // @option html: String|HTMLElement = ''
          // Custom HTML code to put inside the div element, empty by default. Alternatively,
          // an instance of `HTMLElement`.
          html: !1,
          // @option bgPos: Point = [0, 0]
          // Optional relative position of the background, in pixels
          bgPos: null,
          className: "leaflet-div-icon"
        },
        createIcon: function(e) {
          var r = e && e.tagName === "DIV" ? e : document.createElement("div"), a = this.options;
          if (a.html instanceof Element ? (ir(r), r.appendChild(a.html)) : r.innerHTML = a.html !== !1 ? a.html : "", a.bgPos) {
            var c = J(a.bgPos);
            r.style.backgroundPosition = -c.x + "px " + -c.y + "px";
          }
          return this._setIconStyles(r, "icon"), r;
        },
        createShadow: function() {
          return null;
        }
      });
      function Qo(e) {
        return new ho(e);
      }
      Bs.Default = co;
      var Tt = Jt.extend({
        // @section
        // @aka GridLayer options
        options: {
          // @option tileSize: Number|Point = 256
          // Width and height of tiles in the grid. Use a number if width and height are equal, or `L.point(width, height)` otherwise.
          tileSize: 256,
          // @option opacity: Number = 1.0
          // Opacity of the tiles. Can be used in the `createTile()` function.
          opacity: 1,
          // @option updateWhenIdle: Boolean = (depends)
          // Load new tiles only when panning ends.
          // `true` by default on mobile browsers, in order to avoid too many requests and keep smooth navigation.
          // `false` otherwise in order to display new tiles _during_ panning, since it is easy to pan outside the
          // [`keepBuffer`](#gridlayer-keepbuffer) option in desktop browsers.
          updateWhenIdle: me.mobile,
          // @option updateWhenZooming: Boolean = true
          // By default, a smooth zoom animation (during a [touch zoom](#map-touchzoom) or a [`flyTo()`](#map-flyto)) will update grid layers every integer zoom level. Setting this option to `false` will update the grid layer only when the smooth animation ends.
          updateWhenZooming: !0,
          // @option updateInterval: Number = 200
          // Tiles will not update more than once every `updateInterval` milliseconds when panning.
          updateInterval: 200,
          // @option zIndex: Number = 1
          // The explicit zIndex of the tile layer.
          zIndex: 1,
          // @option bounds: LatLngBounds = undefined
          // If set, tiles will only be loaded inside the set `LatLngBounds`.
          bounds: null,
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = undefined
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: void 0,
          // @option maxNativeZoom: Number = undefined
          // Maximum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels higher than `maxNativeZoom` will be loaded
          // from `maxNativeZoom` level and auto-scaled.
          maxNativeZoom: void 0,
          // @option minNativeZoom: Number = undefined
          // Minimum zoom number the tile source has available. If it is specified,
          // the tiles on all zoom levels lower than `minNativeZoom` will be loaded
          // from `minNativeZoom` level and auto-scaled.
          minNativeZoom: void 0,
          // @option noWrap: Boolean = false
          // Whether the layer is wrapped around the antimeridian. If `true`, the
          // GridLayer will only be displayed once at low zoom levels. Has no
          // effect when the [map CRS](#map-crs) doesn't wrap around. Can be used
          // in combination with [`bounds`](#gridlayer-bounds) to prevent requesting
          // tiles outside the CRS limits.
          noWrap: !1,
          // @option pane: String = 'tilePane'
          // `Map pane` where the grid layer will be added.
          pane: "tilePane",
          // @option className: String = ''
          // A custom class name to assign to the tile layer. Empty by default.
          className: "",
          // @option keepBuffer: Number = 2
          // When panning the map, keep this many rows and columns of tiles before unloading them.
          keepBuffer: 2
        },
        initialize: function(e) {
          G(this, e);
        },
        onAdd: function() {
          this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
        },
        beforeAdd: function(e) {
          e._addZoomLimit(this);
        },
        onRemove: function(e) {
          this._removeAllTiles(), Nt(this._container), e._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
          return this._map && (Mn(this._container), this._setAutoZIndex(Math.max)), this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
          return this._map && (gi(this._container), this._setAutoZIndex(Math.min)), this;
        },
        // @method getContainer: HTMLElement
        // Returns the HTML element that contains the tiles for this layer.
        getContainer: function() {
          return this._container;
        },
        // @method setOpacity(opacity: Number): this
        // Changes the [opacity](#gridlayer-opacity) of the grid layer.
        setOpacity: function(e) {
          return this.options.opacity = e, this._updateOpacity(), this;
        },
        // @method setZIndex(zIndex: Number): this
        // Changes the [zIndex](#gridlayer-zindex) of the grid layer.
        setZIndex: function(e) {
          return this.options.zIndex = e, this._updateZIndex(), this;
        },
        // @method isLoading: Boolean
        // Returns `true` if any tile in the grid layer has not finished loading.
        isLoading: function() {
          return this._loading;
        },
        // @method redraw: this
        // Causes the layer to clear all the tiles and request them again.
        redraw: function() {
          if (this._map) {
            this._removeAllTiles();
            var e = this._clampZoom(this._map.getZoom());
            e !== this._tileZoom && (this._tileZoom = e, this._updateLevels()), this._update();
          }
          return this;
        },
        getEvents: function() {
          var e = {
            viewprereset: this._invalidateAll,
            viewreset: this._resetView,
            zoom: this._resetView,
            moveend: this._onMoveEnd
          };
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = E(this._onMoveEnd, this.options.updateInterval, this)), e.move = this._onMove), this._zoomAnimated && (e.zoomanim = this._animateZoom), e;
        },
        // @section Extension methods
        // Layers extending `GridLayer` shall reimplement the following method.
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, must be overridden by classes extending `GridLayer`.
        // Returns the `HTMLElement` corresponding to the given `coords`. If the `done` callback
        // is specified, it must be called when the tile has finished loading and drawing.
        createTile: function() {
          return document.createElement("div");
        },
        // @section
        // @method getTileSize: Point
        // Normalizes the [tileSize option](#gridlayer-tilesize) into a point. Used by the `createTile()` method.
        getTileSize: function() {
          var e = this.options.tileSize;
          return e instanceof _e ? e : new _e(e, e);
        },
        _updateZIndex: function() {
          this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
        },
        _setAutoZIndex: function(e) {
          for (var r = this.getPane().children, a = -e(-1 / 0, 1 / 0), c = 0, f = r.length, y; c < f; c++)
            y = r[c].style.zIndex, r[c] !== this._container && y && (a = e(a, +y));
          isFinite(a) && (this.options.zIndex = a + e(-1, 1), this._updateZIndex());
        },
        _updateOpacity: function() {
          if (this._map && !me.ielt9) {
            Ni(this._container, this.options.opacity);
            var e = +/* @__PURE__ */ new Date(), r = !1, a = !1;
            for (var c in this._tiles) {
              var f = this._tiles[c];
              if (!(!f.current || !f.loaded)) {
                var y = Math.min(1, (e - f.loaded) / 200);
                Ni(f.el, y), y < 1 ? r = !0 : (f.active ? a = !0 : this._onOpaqueTile(f), f.active = !0);
              }
            }
            a && !this._noPrune && this._pruneTiles(), r && (U(this._fadeFrame), this._fadeFrame = j(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: w,
        _initContainer: function() {
          this._container || (this._container = nt("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var e = this._tileZoom, r = this.options.maxZoom;
          if (e !== void 0) {
            for (var a in this._levels)
              a = Number(a), this._levels[a].el.children.length || a === e ? (this._levels[a].el.style.zIndex = r - Math.abs(e - a), this._onUpdateLevel(a)) : (Nt(this._levels[a].el), this._removeTilesAtZoom(a), this._onRemoveLevel(a), delete this._levels[a]);
            var c = this._levels[e], f = this._map;
            return c || (c = this._levels[e] = {}, c.el = nt("div", "leaflet-tile-container leaflet-zoom-animated", this._container), c.el.style.zIndex = r, c.origin = f.project(f.unproject(f.getPixelOrigin()), e).round(), c.zoom = e, this._setZoomTransform(c, f.getCenter(), f.getZoom()), w(c.el.offsetWidth), this._onCreateLevel(c)), this._level = c, c;
          }
        },
        _onUpdateLevel: w,
        _onRemoveLevel: w,
        _onCreateLevel: w,
        _pruneTiles: function() {
          if (this._map) {
            var e, r, a = this._map.getZoom();
            if (a > this.options.maxZoom || a < this.options.minZoom) {
              this._removeAllTiles();
              return;
            }
            for (e in this._tiles)
              r = this._tiles[e], r.retain = r.current;
            for (e in this._tiles)
              if (r = this._tiles[e], r.current && !r.active) {
                var c = r.coords;
                this._retainParent(c.x, c.y, c.z, c.z - 5) || this._retainChildren(c.x, c.y, c.z, c.z + 2);
              }
            for (e in this._tiles)
              this._tiles[e].retain || this._removeTile(e);
          }
        },
        _removeTilesAtZoom: function(e) {
          for (var r in this._tiles)
            this._tiles[r].coords.z === e && this._removeTile(r);
        },
        _removeAllTiles: function() {
          for (var e in this._tiles)
            this._removeTile(e);
        },
        _invalidateAll: function() {
          for (var e in this._levels)
            Nt(this._levels[e].el), this._onRemoveLevel(Number(e)), delete this._levels[e];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(e, r, a, c) {
          var f = Math.floor(e / 2), y = Math.floor(r / 2), I = a - 1, B = new _e(+f, +y);
          B.z = +I;
          var W = this._tileCoordsToKey(B), ne = this._tiles[W];
          return ne && ne.active ? (ne.retain = !0, !0) : (ne && ne.loaded && (ne.retain = !0), I > c ? this._retainParent(f, y, I, c) : !1);
        },
        _retainChildren: function(e, r, a, c) {
          for (var f = 2 * e; f < 2 * e + 2; f++)
            for (var y = 2 * r; y < 2 * r + 2; y++) {
              var I = new _e(f, y);
              I.z = a + 1;
              var B = this._tileCoordsToKey(I), W = this._tiles[B];
              if (W && W.active) {
                W.retain = !0;
                continue;
              } else W && W.loaded && (W.retain = !0);
              a + 1 < c && this._retainChildren(f, y, a + 1, c);
            }
        },
        _resetView: function(e) {
          var r = e && (e.pinch || e.flyTo);
          this._setView(this._map.getCenter(), this._map.getZoom(), r, r);
        },
        _animateZoom: function(e) {
          this._setView(e.center, e.zoom, !0, e.noUpdate);
        },
        _clampZoom: function(e) {
          var r = this.options;
          return r.minNativeZoom !== void 0 && e < r.minNativeZoom ? r.minNativeZoom : r.maxNativeZoom !== void 0 && r.maxNativeZoom < e ? r.maxNativeZoom : e;
        },
        _setView: function(e, r, a, c) {
          var f = Math.round(r);
          this.options.maxZoom !== void 0 && f > this.options.maxZoom || this.options.minZoom !== void 0 && f < this.options.minZoom ? f = void 0 : f = this._clampZoom(f);
          var y = this.options.updateWhenZooming && f !== this._tileZoom;
          (!c || y) && (this._tileZoom = f, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), f !== void 0 && this._update(e), a || this._pruneTiles(), this._noPrune = !!a), this._setZoomTransforms(e, r);
        },
        _setZoomTransforms: function(e, r) {
          for (var a in this._levels)
            this._setZoomTransform(this._levels[a], e, r);
        },
        _setZoomTransform: function(e, r, a) {
          var c = this._map.getZoomScale(a, e.zoom), f = e.origin.multiplyBy(c).subtract(this._map._getNewPixelOrigin(r, a)).round();
          me.any3d ? fs(e.el, f, c) : dn(e.el, f);
        },
        _resetGrid: function() {
          var e = this._map, r = e.options.crs, a = this._tileSize = this.getTileSize(), c = this._tileZoom, f = this._map.getPixelWorldBounds(this._tileZoom);
          f && (this._globalTileRange = this._pxBoundsToTileRange(f)), this._wrapX = r.wrapLng && !this.options.noWrap && [
            Math.floor(e.project([0, r.wrapLng[0]], c).x / a.x),
            Math.ceil(e.project([0, r.wrapLng[1]], c).x / a.y)
          ], this._wrapY = r.wrapLat && !this.options.noWrap && [
            Math.floor(e.project([r.wrapLat[0], 0], c).y / a.x),
            Math.ceil(e.project([r.wrapLat[1], 0], c).y / a.y)
          ];
        },
        _onMoveEnd: function() {
          !this._map || this._map._animatingZoom || this._update();
        },
        _getTiledPixelBounds: function(e) {
          var r = this._map, a = r._animatingZoom ? Math.max(r._animateToZoom, r.getZoom()) : r.getZoom(), c = r.getZoomScale(a, this._tileZoom), f = r.project(e, this._tileZoom).floor(), y = r.getSize().divideBy(c * 2);
          return new de(f.subtract(y), f.add(y));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(e) {
          var r = this._map;
          if (r) {
            var a = this._clampZoom(r.getZoom());
            if (e === void 0 && (e = r.getCenter()), this._tileZoom !== void 0) {
              var c = this._getTiledPixelBounds(e), f = this._pxBoundsToTileRange(c), y = f.getCenter(), I = [], B = this.options.keepBuffer, W = new de(
                f.getBottomLeft().subtract([B, -B]),
                f.getTopRight().add([B, -B])
              );
              if (!(isFinite(f.min.x) && isFinite(f.min.y) && isFinite(f.max.x) && isFinite(f.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var ne in this._tiles) {
                var Se = this._tiles[ne].coords;
                (Se.z !== this._tileZoom || !W.contains(new _e(Se.x, Se.y))) && (this._tiles[ne].current = !1);
              }
              if (Math.abs(a - this._tileZoom) > 1) {
                this._setView(e, a);
                return;
              }
              for (var Me = f.min.y; Me <= f.max.y; Me++)
                for (var ot = f.min.x; ot <= f.max.x; ot++) {
                  var vn = new _e(ot, Me);
                  if (vn.z = this._tileZoom, !!this._isValidTile(vn)) {
                    var rn = this._tiles[this._tileCoordsToKey(vn)];
                    rn ? rn.current = !0 : I.push(vn);
                  }
                }
              if (I.sort(function(Wn, sr) {
                return Wn.distanceTo(y) - sr.distanceTo(y);
              }), I.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var Jn = document.createDocumentFragment();
                for (ot = 0; ot < I.length; ot++)
                  this._addTile(I[ot], Jn);
                this._level.el.appendChild(Jn);
              }
            }
          }
        },
        _isValidTile: function(e) {
          var r = this._map.options.crs;
          if (!r.infinite) {
            var a = this._globalTileRange;
            if (!r.wrapLng && (e.x < a.min.x || e.x > a.max.x) || !r.wrapLat && (e.y < a.min.y || e.y > a.max.y))
              return !1;
          }
          if (!this.options.bounds)
            return !0;
          var c = this._tileCoordsToBounds(e);
          return re(this.options.bounds).overlaps(c);
        },
        _keyToBounds: function(e) {
          return this._tileCoordsToBounds(this._keyToTileCoords(e));
        },
        _tileCoordsToNwSe: function(e) {
          var r = this._map, a = this.getTileSize(), c = e.scaleBy(a), f = c.add(a), y = r.unproject(c, e.z), I = r.unproject(f, e.z);
          return [y, I];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(e) {
          var r = this._tileCoordsToNwSe(e), a = new gt(r[0], r[1]);
          return this.options.noWrap || (a = this._map.wrapLatLngBounds(a)), a;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(e) {
          return e.x + ":" + e.y + ":" + e.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(e) {
          var r = e.split(":"), a = new _e(+r[0], +r[1]);
          return a.z = +r[2], a;
        },
        _removeTile: function(e) {
          var r = this._tiles[e];
          r && (Nt(r.el), delete this._tiles[e], this.fire("tileunload", {
            tile: r.el,
            coords: this._keyToTileCoords(e)
          }));
        },
        _initTile: function(e) {
          We(e, "leaflet-tile");
          var r = this.getTileSize();
          e.style.width = r.x + "px", e.style.height = r.y + "px", e.onselectstart = w, e.onmousemove = w, me.ielt9 && this.options.opacity < 1 && Ni(e, this.options.opacity);
        },
        _addTile: function(e, r) {
          var a = this._getTilePos(e), c = this._tileCoordsToKey(e), f = this.createTile(this._wrapCoords(e), _(this._tileReady, this, e));
          this._initTile(f), this.createTile.length < 2 && j(_(this._tileReady, this, e, null, f)), dn(f, a), this._tiles[c] = {
            el: f,
            coords: e,
            current: !0
          }, r.appendChild(f), this.fire("tileloadstart", {
            tile: f,
            coords: e
          });
        },
        _tileReady: function(e, r, a) {
          r && this.fire("tileerror", {
            error: r,
            tile: a,
            coords: e
          });
          var c = this._tileCoordsToKey(e);
          a = this._tiles[c], a && (a.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Ni(a.el, 0), U(this._fadeFrame), this._fadeFrame = j(this._updateOpacity, this)) : (a.active = !0, this._pruneTiles()), r || (We(a.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: a.el,
            coords: e
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), me.ielt9 || !this._map._fadeAnimated ? j(this._pruneTiles, this) : setTimeout(_(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(e) {
          return e.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(e) {
          var r = new _e(
            this._wrapX ? A(e.x, this._wrapX) : e.x,
            this._wrapY ? A(e.y, this._wrapY) : e.y
          );
          return r.z = e.z, r;
        },
        _pxBoundsToTileRange: function(e) {
          var r = this.getTileSize();
          return new de(
            e.min.unscaleBy(r).floor(),
            e.max.unscaleBy(r).ceil().subtract([1, 1])
          );
        },
        _noTilesToLoad: function() {
          for (var e in this._tiles)
            if (!this._tiles[e].loaded)
              return !1;
          return !0;
        }
      });
      function lc(e) {
        return new Tt(e);
      }
      var gs = Tt.extend({
        // @section
        // @aka TileLayer options
        options: {
          // @option minZoom: Number = 0
          // The minimum zoom level down to which this layer will be displayed (inclusive).
          minZoom: 0,
          // @option maxZoom: Number = 18
          // The maximum zoom level up to which this layer will be displayed (inclusive).
          maxZoom: 18,
          // @option subdomains: String|String[] = 'abc'
          // Subdomains of the tile service. Can be passed in the form of one string (where each letter is a subdomain name) or an array of strings.
          subdomains: "abc",
          // @option errorTileUrl: String = ''
          // URL to the tile image to show in place of the tile that failed to load.
          errorTileUrl: "",
          // @option zoomOffset: Number = 0
          // The zoom number used in tile URLs will be offset with this value.
          zoomOffset: 0,
          // @option tms: Boolean = false
          // If `true`, inverses Y axis numbering for tiles (turn this on for [TMS](https://en.wikipedia.org/wiki/Tile_Map_Service) services).
          tms: !1,
          // @option zoomReverse: Boolean = false
          // If set to true, the zoom number used in tile URLs will be reversed (`maxZoom - zoom` instead of `zoom`)
          zoomReverse: !1,
          // @option detectRetina: Boolean = false
          // If `true` and user is on a retina display, it will request four tiles of half the specified size and a bigger zoom level in place of one to utilize the high resolution.
          detectRetina: !1,
          // @option crossOrigin: Boolean|String = false
          // Whether the crossOrigin attribute will be added to the tiles.
          // If a String is provided, all tiles will have their crossOrigin attribute set to the String provided. This is needed if you want to access tile pixel data.
          // Refer to [CORS Settings](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes) for valid String values.
          crossOrigin: !1,
          // @option referrerPolicy: Boolean|String = false
          // Whether the referrerPolicy attribute will be added to the tiles.
          // If a String is provided, all tiles will have their referrerPolicy attribute set to the String provided.
          // This may be needed if your map's rendering context has a strict default but your tile provider expects a valid referrer
          // (e.g. to validate an API token).
          // Refer to [HTMLImageElement.referrerPolicy](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy) for valid String values.
          referrerPolicy: !1
        },
        initialize: function(e, r) {
          this._url = e, r = G(this, r), r.detectRetina && me.retina && r.maxZoom > 0 ? (r.tileSize = Math.floor(r.tileSize / 2), r.zoomReverse ? (r.zoomOffset--, r.minZoom = Math.min(r.maxZoom, r.minZoom + 1)) : (r.zoomOffset++, r.maxZoom = Math.max(r.minZoom, r.maxZoom - 1)), r.minZoom = Math.max(0, r.minZoom)) : r.zoomReverse ? r.minZoom = Math.min(r.maxZoom, r.minZoom) : r.maxZoom = Math.max(r.minZoom, r.maxZoom), typeof r.subdomains == "string" && (r.subdomains = r.subdomains.split("")), this.on("tileunload", this._onTileRemove);
        },
        // @method setUrl(url: String, noRedraw?: Boolean): this
        // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
        // If the URL does not change, the layer will not be redrawn unless
        // the noRedraw parameter is set to false.
        setUrl: function(e, r) {
          return this._url === e && r === void 0 && (r = !0), this._url = e, r || this.redraw(), this;
        },
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
        // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
        // callback is called when the tile has been loaded.
        createTile: function(e, r) {
          var a = document.createElement("img");
          return Qe(a, "load", _(this._tileOnLoad, this, r, a)), Qe(a, "error", _(this._tileOnError, this, r, a)), (this.options.crossOrigin || this.options.crossOrigin === "") && (a.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (a.referrerPolicy = this.options.referrerPolicy), a.alt = "", a.src = this.getTileUrl(e), a;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(e) {
          var r = {
            r: me.retina ? "@2x" : "",
            s: this._getSubdomain(e),
            x: e.x,
            y: e.y,
            z: this._getZoomForUrl()
          };
          if (this._map && !this._map.options.crs.infinite) {
            var a = this._globalTileRange.max.y - e.y;
            this.options.tms && (r.y = a), r["-y"] = a;
          }
          return z(this._url, d(r, this.options));
        },
        _tileOnLoad: function(e, r) {
          me.ielt9 ? setTimeout(_(e, this, null, r), 0) : e(null, r);
        },
        _tileOnError: function(e, r, a) {
          var c = this.options.errorTileUrl;
          c && r.getAttribute("src") !== c && (r.src = c), e(a, r);
        },
        _onTileRemove: function(e) {
          e.tile.onload = null;
        },
        _getZoomForUrl: function() {
          var e = this._tileZoom, r = this.options.maxZoom, a = this.options.zoomReverse, c = this.options.zoomOffset;
          return a && (e = r - e), e + c;
        },
        _getSubdomain: function(e) {
          var r = Math.abs(e.x + e.y) % this.options.subdomains.length;
          return this.options.subdomains[r];
        },
        // stops loading all tiles in the background layer
        _abortLoading: function() {
          var e, r;
          for (e in this._tiles)
            if (this._tiles[e].coords.z !== this._tileZoom && (r = this._tiles[e].el, r.onload = w, r.onerror = w, !r.complete)) {
              r.src = q;
              var a = this._tiles[e].coords;
              Nt(r), delete this._tiles[e], this.fire("tileabort", {
                tile: r,
                coords: a
              });
            }
        },
        _removeTile: function(e) {
          var r = this._tiles[e];
          if (r)
            return r.el.setAttribute("src", q), Tt.prototype._removeTile.call(this, e);
        },
        _tileReady: function(e, r, a) {
          if (!(!this._map || a && a.getAttribute("src") === q))
            return Tt.prototype._tileReady.call(this, e, r, a);
        }
      });
      function fo(e, r) {
        return new gs(e, r);
      }
      var Jl = gs.extend({
        // @section
        // @aka TileLayer.WMS options
        // If any custom options not documented here are used, they will be sent to the
        // WMS server as extra parameters in each request URL. This can be useful for
        // [non-standard vendor WMS parameters](https://docs.geoserver.org/stable/en/user/services/wms/vendor.html).
        defaultWmsParams: {
          service: "WMS",
          request: "GetMap",
          // @option layers: String = ''
          // **(required)** Comma-separated list of WMS layers to show.
          layers: "",
          // @option styles: String = ''
          // Comma-separated list of WMS styles.
          styles: "",
          // @option format: String = 'image/jpeg'
          // WMS image format (use `'image/png'` for layers with transparency).
          format: "image/jpeg",
          // @option transparent: Boolean = false
          // If `true`, the WMS service will return images with transparency.
          transparent: !1,
          // @option version: String = '1.1.1'
          // Version of the WMS service to use
          version: "1.1.1"
        },
        options: {
          // @option crs: CRS = null
          // Coordinate Reference System to use for the WMS requests, defaults to
          // map CRS. Don't change this if you're not sure what it means.
          crs: null,
          // @option uppercase: Boolean = false
          // If `true`, WMS request parameter keys will be uppercase.
          uppercase: !1
        },
        initialize: function(e, r) {
          this._url = e;
          var a = d({}, this.defaultWmsParams);
          for (var c in r)
            c in this.options || (a[c] = r[c]);
          r = G(this, r);
          var f = r.detectRetina && me.retina ? 2 : 1, y = this.getTileSize();
          a.width = y.x * f, a.height = y.y * f, this.wmsParams = a;
        },
        onAdd: function(e) {
          this._crs = this.options.crs || e.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var r = this._wmsVersion >= 1.3 ? "crs" : "srs";
          this.wmsParams[r] = this._crs.code, gs.prototype.onAdd.call(this, e);
        },
        getTileUrl: function(e) {
          var r = this._tileCoordsToNwSe(e), a = this._crs, c = He(a.project(r[0]), a.project(r[1])), f = c.min, y = c.max, I = (this._wmsVersion >= 1.3 && this._crs === Yl ? [f.y, f.x, y.y, y.x] : [f.x, f.y, y.x, y.y]).join(","), B = gs.prototype.getTileUrl.call(this, e);
          return B + X(this.wmsParams, B, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + I;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(e, r) {
          return d(this.wmsParams, e), r || this.redraw(), this;
        }
      });
      function uc(e, r) {
        return new Jl(e, r);
      }
      gs.WMS = Jl, fo.wms = uc;
      var kr = Jt.extend({
        // @section
        // @aka Renderer options
        options: {
          // @option padding: Number = 0.1
          // How much to extend the clip area around the map view (relative to its size)
          // e.g. 0.1 would be 10% of map view in each direction
          padding: 0.1
        },
        initialize: function(e) {
          G(this, e), m(this), this._layers = this._layers || {};
        },
        onAdd: function() {
          this._container || (this._initContainer(), We(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
        },
        onRemove: function() {
          this.off("update", this._updatePaths, this), this._destroyContainer();
        },
        getEvents: function() {
          var e = {
            viewreset: this._reset,
            zoom: this._onZoom,
            moveend: this._update,
            zoomend: this._onZoomEnd
          };
          return this._zoomAnimated && (e.zoomanim = this._onAnimZoom), e;
        },
        _onAnimZoom: function(e) {
          this._updateTransform(e.center, e.zoom);
        },
        _onZoom: function() {
          this._updateTransform(this._map.getCenter(), this._map.getZoom());
        },
        _updateTransform: function(e, r) {
          var a = this._map.getZoomScale(r, this._zoom), c = this._map.getSize().multiplyBy(0.5 + this.options.padding), f = this._map.project(this._center, r), y = c.multiplyBy(-a).add(f).subtract(this._map._getNewPixelOrigin(e, r));
          me.any3d ? fs(this._container, y, a) : dn(this._container, y);
        },
        _reset: function() {
          this._update(), this._updateTransform(this._center, this._zoom);
          for (var e in this._layers)
            this._layers[e]._reset();
        },
        _onZoomEnd: function() {
          for (var e in this._layers)
            this._layers[e]._project();
        },
        _updatePaths: function() {
          for (var e in this._layers)
            this._layers[e]._update();
        },
        _update: function() {
          var e = this.options.padding, r = this._map.getSize(), a = this._map.containerPointToLayerPoint(r.multiplyBy(-e)).round();
          this._bounds = new de(a, a.add(r.multiplyBy(1 + e * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }), po = kr.extend({
        // @section
        // @aka Canvas options
        options: {
          // @option tolerance: Number = 0
          // How much to extend the click tolerance around a path/object on the map.
          tolerance: 0
        },
        getEvents: function() {
          var e = kr.prototype.getEvents.call(this);
          return e.viewprereset = this._onViewPreReset, e;
        },
        _onViewPreReset: function() {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function() {
          kr.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function() {
          var e = this._container = document.createElement("canvas");
          Qe(e, "mousemove", this._onMouseMove, this), Qe(e, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Qe(e, "mouseout", this._handleMouseOut, this), e._leaflet_disable_events = !0, this._ctx = e.getContext("2d");
        },
        _destroyContainer: function() {
          U(this._redrawRequest), delete this._ctx, Nt(this._container), Gt(this._container), delete this._container;
        },
        _updatePaths: function() {
          if (!this._postponeUpdatePaths) {
            var e;
            this._redrawBounds = null;
            for (var r in this._layers)
              e = this._layers[r], e._update();
            this._redraw();
          }
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            kr.prototype._update.call(this);
            var e = this._bounds, r = this._container, a = e.getSize(), c = me.retina ? 2 : 1;
            dn(r, e.min), r.width = c * a.x, r.height = c * a.y, r.style.width = a.x + "px", r.style.height = a.y + "px", me.retina && this._ctx.scale(2, 2), this._ctx.translate(-e.min.x, -e.min.y), this.fire("update");
          }
        },
        _reset: function() {
          kr.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
        },
        _initPath: function(e) {
          this._updateDashArray(e), this._layers[m(e)] = e;
          var r = e._order = {
            layer: e,
            prev: this._drawLast,
            next: null
          };
          this._drawLast && (this._drawLast.next = r), this._drawLast = r, this._drawFirst = this._drawFirst || this._drawLast;
        },
        _addPath: function(e) {
          this._requestRedraw(e);
        },
        _removePath: function(e) {
          var r = e._order, a = r.next, c = r.prev;
          a ? a.prev = c : this._drawLast = c, c ? c.next = a : this._drawFirst = a, delete e._order, delete this._layers[m(e)], this._requestRedraw(e);
        },
        _updatePath: function(e) {
          this._extendRedrawBounds(e), e._project(), e._update(), this._requestRedraw(e);
        },
        _updateStyle: function(e) {
          this._updateDashArray(e), this._requestRedraw(e);
        },
        _updateDashArray: function(e) {
          if (typeof e.options.dashArray == "string") {
            var r = e.options.dashArray.split(/[, ]+/), a = [], c, f;
            for (f = 0; f < r.length; f++) {
              if (c = Number(r[f]), isNaN(c))
                return;
              a.push(c);
            }
            e.options._dashArray = a;
          } else
            e.options._dashArray = e.options.dashArray;
        },
        _requestRedraw: function(e) {
          this._map && (this._extendRedrawBounds(e), this._redrawRequest = this._redrawRequest || j(this._redraw, this));
        },
        _extendRedrawBounds: function(e) {
          if (e._pxBounds) {
            var r = (e.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new de(), this._redrawBounds.extend(e._pxBounds.min.subtract([r, r])), this._redrawBounds.extend(e._pxBounds.max.add([r, r]));
          }
        },
        _redraw: function() {
          this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
        },
        _clear: function() {
          var e = this._redrawBounds;
          if (e) {
            var r = e.getSize();
            this._ctx.clearRect(e.min.x, e.min.y, r.x, r.y);
          } else
            this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
        },
        _draw: function() {
          var e, r = this._redrawBounds;
          if (this._ctx.save(), r) {
            var a = r.getSize();
            this._ctx.beginPath(), this._ctx.rect(r.min.x, r.min.y, a.x, a.y), this._ctx.clip();
          }
          this._drawing = !0;
          for (var c = this._drawFirst; c; c = c.next)
            e = c.layer, (!r || e._pxBounds && e._pxBounds.intersects(r)) && e._updatePath();
          this._drawing = !1, this._ctx.restore();
        },
        _updatePoly: function(e, r) {
          if (this._drawing) {
            var a, c, f, y, I = e._parts, B = I.length, W = this._ctx;
            if (B) {
              for (W.beginPath(), a = 0; a < B; a++) {
                for (c = 0, f = I[a].length; c < f; c++)
                  y = I[a][c], W[c ? "lineTo" : "moveTo"](y.x, y.y);
                r && W.closePath();
              }
              this._fillStroke(W, e);
            }
          }
        },
        _updateCircle: function(e) {
          if (!(!this._drawing || e._empty())) {
            var r = e._point, a = this._ctx, c = Math.max(Math.round(e._radius), 1), f = (Math.max(Math.round(e._radiusY), 1) || c) / c;
            f !== 1 && (a.save(), a.scale(1, f)), a.beginPath(), a.arc(r.x, r.y / f, c, 0, Math.PI * 2, !1), f !== 1 && a.restore(), this._fillStroke(a, e);
          }
        },
        _fillStroke: function(e, r) {
          var a = r.options;
          a.fill && (e.globalAlpha = a.fillOpacity, e.fillStyle = a.fillColor || a.color, e.fill(a.fillRule || "evenodd")), a.stroke && a.weight !== 0 && (e.setLineDash && e.setLineDash(r.options && r.options._dashArray || []), e.globalAlpha = a.opacity, e.lineWidth = a.weight, e.strokeStyle = a.color, e.lineCap = a.lineCap, e.lineJoin = a.lineJoin, e.stroke());
        },
        // Canvas obviously doesn't have mouse events for individual drawn objects,
        // so we emulate that by calculating what's under the mouse on mousemove/click manually
        _onClick: function(e) {
          for (var r = this._map.mouseEventToLayerPoint(e), a, c, f = this._drawFirst; f; f = f.next)
            a = f.layer, a.options.interactive && a._containsPoint(r) && (!(e.type === "click" || e.type === "preclick") || !this._map._draggableMoved(a)) && (c = a);
          this._fireEvent(c ? [c] : !1, e);
        },
        _onMouseMove: function(e) {
          if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
            var r = this._map.mouseEventToLayerPoint(e);
            this._handleMouseHover(e, r);
          }
        },
        _handleMouseOut: function(e) {
          var r = this._hoveredLayer;
          r && (Dt(this._container, "leaflet-interactive"), this._fireEvent([r], e, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
        },
        _handleMouseHover: function(e, r) {
          if (!this._mouseHoverThrottled) {
            for (var a, c, f = this._drawFirst; f; f = f.next)
              a = f.layer, a.options.interactive && a._containsPoint(r) && (c = a);
            c !== this._hoveredLayer && (this._handleMouseOut(e), c && (We(this._container, "leaflet-interactive"), this._fireEvent([c], e, "mouseover"), this._hoveredLayer = c)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, e), this._mouseHoverThrottled = !0, setTimeout(_(function() {
              this._mouseHoverThrottled = !1;
            }, this), 32);
          }
        },
        _fireEvent: function(e, r, a) {
          this._map._fireDOMEvent(r, a || r.type, e);
        },
        _bringToFront: function(e) {
          var r = e._order;
          if (r) {
            var a = r.next, c = r.prev;
            if (a)
              a.prev = c;
            else
              return;
            c ? c.next = a : a && (this._drawFirst = a), r.prev = this._drawLast, this._drawLast.next = r, r.next = null, this._drawLast = r, this._requestRedraw(e);
          }
        },
        _bringToBack: function(e) {
          var r = e._order;
          if (r) {
            var a = r.next, c = r.prev;
            if (c)
              c.next = a;
            else
              return;
            a ? a.prev = c : c && (this._drawLast = c), r.prev = null, r.next = this._drawFirst, this._drawFirst.prev = r, this._drawFirst = r, this._requestRedraw(e);
          }
        }
      });
      function Ur(e) {
        return me.canvas ? new po(e) : null;
      }
      var Qr = (function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(e) {
            return document.createElement("<lvml:" + e + ' class="lvml">');
          };
        } catch {
        }
        return function(e) {
          return document.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      })(), jl = {
        _initContainer: function() {
          this._container = nt("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (kr.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(e) {
          var r = e._container = Qr("shape");
          We(r, "leaflet-vml-shape " + (this.options.className || "")), r.coordsize = "1 1", e._path = Qr("path"), r.appendChild(e._path), this._updateStyle(e), this._layers[m(e)] = e;
        },
        _addPath: function(e) {
          var r = e._container;
          this._container.appendChild(r), e.options.interactive && e.addInteractiveTarget(r);
        },
        _removePath: function(e) {
          var r = e._container;
          Nt(r), e.removeInteractiveTarget(r), delete this._layers[m(e)];
        },
        _updateStyle: function(e) {
          var r = e._stroke, a = e._fill, c = e.options, f = e._container;
          f.stroked = !!c.stroke, f.filled = !!c.fill, c.stroke ? (r || (r = e._stroke = Qr("stroke")), f.appendChild(r), r.weight = c.weight + "px", r.color = c.color, r.opacity = c.opacity, c.dashArray ? r.dashStyle = Y(c.dashArray) ? c.dashArray.join(" ") : c.dashArray.replace(/( *, *)/g, " ") : r.dashStyle = "", r.endcap = c.lineCap.replace("butt", "flat"), r.joinstyle = c.lineJoin) : r && (f.removeChild(r), e._stroke = null), c.fill ? (a || (a = e._fill = Qr("fill")), f.appendChild(a), a.color = c.fillColor || c.color, a.opacity = c.fillOpacity) : a && (f.removeChild(a), e._fill = null);
        },
        _updateCircle: function(e) {
          var r = e._point.round(), a = Math.round(e._radius), c = Math.round(e._radiusY || a);
          this._setPath(e, e._empty() ? "M0 0" : "AL " + r.x + "," + r.y + " " + a + "," + c + " 0," + 65535 * 360);
        },
        _setPath: function(e, r) {
          e._path.v = r;
        },
        _bringToFront: function(e) {
          Mn(e._container);
        },
        _bringToBack: function(e) {
          gi(e._container);
        }
      }, ms = me.vml ? Qr : zt, zs = kr.extend({
        _initContainer: function() {
          this._container = ms("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = ms("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          Nt(this._container), Gt(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            kr.prototype._update.call(this);
            var e = this._bounds, r = e.getSize(), a = this._container;
            (!this._svgSize || !this._svgSize.equals(r)) && (this._svgSize = r, a.setAttribute("width", r.x), a.setAttribute("height", r.y)), dn(a, e.min), a.setAttribute("viewBox", [e.min.x, e.min.y, r.x, r.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(e) {
          var r = e._path = ms("path");
          e.options.className && We(r, e.options.className), e.options.interactive && We(r, "leaflet-interactive"), this._updateStyle(e), this._layers[m(e)] = e;
        },
        _addPath: function(e) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(e._path), e.addInteractiveTarget(e._path);
        },
        _removePath: function(e) {
          Nt(e._path), e.removeInteractiveTarget(e._path), delete this._layers[m(e)];
        },
        _updatePath: function(e) {
          e._project(), e._update();
        },
        _updateStyle: function(e) {
          var r = e._path, a = e.options;
          r && (a.stroke ? (r.setAttribute("stroke", a.color), r.setAttribute("stroke-opacity", a.opacity), r.setAttribute("stroke-width", a.weight), r.setAttribute("stroke-linecap", a.lineCap), r.setAttribute("stroke-linejoin", a.lineJoin), a.dashArray ? r.setAttribute("stroke-dasharray", a.dashArray) : r.removeAttribute("stroke-dasharray"), a.dashOffset ? r.setAttribute("stroke-dashoffset", a.dashOffset) : r.removeAttribute("stroke-dashoffset")) : r.setAttribute("stroke", "none"), a.fill ? (r.setAttribute("fill", a.fillColor || a.color), r.setAttribute("fill-opacity", a.fillOpacity), r.setAttribute("fill-rule", a.fillRule || "evenodd")) : r.setAttribute("fill", "none"));
        },
        _updatePoly: function(e, r) {
          this._setPath(e, Vi(e._parts, r));
        },
        _updateCircle: function(e) {
          var r = e._point, a = Math.max(Math.round(e._radius), 1), c = Math.max(Math.round(e._radiusY), 1) || a, f = "a" + a + "," + c + " 0 1,0 ", y = e._empty() ? "M0 0" : "M" + (r.x - a) + "," + r.y + f + a * 2 + ",0 " + f + -a * 2 + ",0 ";
          this._setPath(e, y);
        },
        _setPath: function(e, r) {
          e._path.setAttribute("d", r);
        },
        // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
        _bringToFront: function(e) {
          Mn(e._path);
        },
        _bringToBack: function(e) {
          gi(e._path);
        }
      });
      me.vml && zs.include(jl);
      function za(e) {
        return me.svg || me.vml ? new zs(e) : null;
      }
      vt.include({
        // @namespace Map; @method getRenderer(layer: Path): Renderer
        // Returns the instance of `Renderer` that should be used to render the given
        // `Path`. It will ensure that the `renderer` options of the map and paths
        // are respected, and that the renderers do exist on the map.
        getRenderer: function(e) {
          var r = e.options.renderer || this._getPaneRenderer(e.options.pane) || this.options.renderer || this._renderer;
          return r || (r = this._renderer = this._createRenderer()), this.hasLayer(r) || this.addLayer(r), r;
        },
        _getPaneRenderer: function(e) {
          if (e === "overlayPane" || e === void 0)
            return !1;
          var r = this._paneRenderers[e];
          return r === void 0 && (r = this._createRenderer({ pane: e }), this._paneRenderers[e] = r), r;
        },
        _createRenderer: function(e) {
          return this.options.preferCanvas && Ur(e) || za(e);
        }
      });
      var _o = ks.extend({
        initialize: function(e, r) {
          ks.prototype.initialize.call(this, this._boundsToLatLngs(e), r);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(e) {
          return this.setLatLngs(this._boundsToLatLngs(e));
        },
        _boundsToLatLngs: function(e) {
          return e = re(e), [
            e.getSouthWest(),
            e.getNorthWest(),
            e.getNorthEast(),
            e.getSouthEast()
          ];
        }
      });
      function Xl(e, r) {
        return new _o(e, r);
      }
      zs.create = ms, zs.pointsToPath = Vi, vi.geometryToLayer = yi, vi.coordsToLatLng = ka, vi.coordsToLatLngs = $o, vi.latLngToCoords = Ua, vi.latLngsToCoords = Jo, vi.getFeature = Us, vi.asFeature = Gr, vt.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var Ws = nn.extend({
        initialize: function(e) {
          this._map = e, this._container = e._container, this._pane = e._panes.overlayPane, this._resetStateTimeout = 0, e.on("unload", this._destroy, this);
        },
        addHooks: function() {
          Qe(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          Gt(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
          return this._moved;
        },
        _destroy: function() {
          Nt(this._pane), delete this._pane;
        },
        _resetState: function() {
          this._resetStateTimeout = 0, this._moved = !1;
        },
        _clearDeferredResetState: function() {
          this._resetStateTimeout !== 0 && (clearTimeout(this._resetStateTimeout), this._resetStateTimeout = 0);
        },
        _onMouseDown: function(e) {
          if (!e.shiftKey || e.which !== 1 && e.button !== 1)
            return !1;
          this._clearDeferredResetState(), this._resetState(), ps(), ya(), this._startPoint = this._map.mouseEventToContainerPoint(e), Qe(document, {
            contextmenu: At,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(e) {
          this._moved || (this._moved = !0, this._box = nt("div", "leaflet-zoom-box", this._container), We(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(e);
          var r = new de(this._point, this._startPoint), a = r.getSize();
          dn(this._box, r.min), this._box.style.width = a.x + "px", this._box.style.height = a.y + "px";
        },
        _finish: function() {
          this._moved && (Nt(this._box), Dt(this._container, "leaflet-crosshair")), Tr(), ko(), Gt(document, {
            contextmenu: At,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(e) {
          if (!(e.which !== 1 && e.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(_(this._resetState, this), 0);
            var r = new gt(
              this._map.containerPointToLatLng(this._startPoint),
              this._map.containerPointToLatLng(this._point)
            );
            this._map.fitBounds(r).fire("boxzoomend", { boxZoomBounds: r });
          }
        },
        _onKeyDown: function(e) {
          e.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
        }
      });
      vt.addInitHook("addHandler", "boxZoom", Ws), vt.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: !0
      });
      var es = nn.extend({
        addHooks: function() {
          this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function() {
          this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function(e) {
          var r = this._map, a = r.getZoom(), c = r.options.zoomDelta, f = e.originalEvent.shiftKey ? a - c : a + c;
          r.options.doubleClickZoom === "center" ? r.setZoom(f) : r.setZoomAround(e.containerPoint, f);
        }
      });
      vt.addInitHook("addHandler", "doubleClickZoom", es), vt.mergeOptions({
        // @option dragging: Boolean = true
        // Whether the map is draggable with mouse/touch or not.
        dragging: !0,
        // @section Panning Inertia Options
        // @option inertia: Boolean = *
        // If enabled, panning of the map will have an inertia effect where
        // the map builds momentum while dragging and continues moving in
        // the same direction for some time. Feels especially nice on touch
        // devices. Enabled by default.
        inertia: !0,
        // @option inertiaDeceleration: Number = 3000
        // The rate with which the inertial movement slows down, in pixels/second².
        inertiaDeceleration: 3400,
        // px/s^2
        // @option inertiaMaxSpeed: Number = Infinity
        // Max speed of the inertial movement, in pixels/second.
        inertiaMaxSpeed: 1 / 0,
        // px/s
        // @option easeLinearity: Number = 0.2
        easeLinearity: 0.2,
        // TODO refactor, move to CRS
        // @option worldCopyJump: Boolean = false
        // With this option enabled, the map tracks when you pan to another "copy"
        // of the world and seamlessly jumps to the original one so that all overlays
        // like markers and vector layers are still visible.
        worldCopyJump: !1,
        // @option maxBoundsViscosity: Number = 0.0
        // If `maxBounds` is set, this option will control how solid the bounds
        // are when dragging the map around. The default value of `0.0` allows the
        // user to drag outside the bounds at normal speed, higher values will
        // slow down map dragging outside bounds, and `1.0` makes the bounds fully
        // solid, preventing the user from dragging outside the bounds.
        maxBoundsViscosity: 0
      });
      var go = nn.extend({
        addHooks: function() {
          if (!this._draggable) {
            var e = this._map;
            this._draggable = new $r(e._mapPane, e._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), e.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), e.on("zoomend", this._onZoomEnd, this), e.whenReady(this._onZoomEnd, this));
          }
          We(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function() {
          Dt(this._map._container, "leaflet-grab"), Dt(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        moving: function() {
          return this._draggable && this._draggable._moving;
        },
        _onDragStart: function() {
          var e = this._map;
          if (e._stop(), this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
            var r = re(this._map.options.maxBounds);
            this._offsetLimit = He(
              this._map.latLngToContainerPoint(r.getNorthWest()).multiplyBy(-1),
              this._map.latLngToContainerPoint(r.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
            ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
          } else
            this._offsetLimit = null;
          e.fire("movestart").fire("dragstart"), e.options.inertia && (this._positions = [], this._times = []);
        },
        _onDrag: function(e) {
          if (this._map.options.inertia) {
            var r = this._lastTime = +/* @__PURE__ */ new Date(), a = this._lastPos = this._draggable._absPos || this._draggable._newPos;
            this._positions.push(a), this._times.push(r), this._prunePositions(r);
          }
          this._map.fire("move", e).fire("drag", e);
        },
        _prunePositions: function(e) {
          for (; this._positions.length > 1 && e - this._times[0] > 50; )
            this._positions.shift(), this._times.shift();
        },
        _onZoomEnd: function() {
          var e = this._map.getSize().divideBy(2), r = this._map.latLngToLayerPoint([0, 0]);
          this._initialWorldOffset = r.subtract(e).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        },
        _viscousLimit: function(e, r) {
          return e - (e - r) * this._viscosity;
        },
        _onPreDragLimit: function() {
          if (!(!this._viscosity || !this._offsetLimit)) {
            var e = this._draggable._newPos.subtract(this._draggable._startPos), r = this._offsetLimit;
            e.x < r.min.x && (e.x = this._viscousLimit(e.x, r.min.x)), e.y < r.min.y && (e.y = this._viscousLimit(e.y, r.min.y)), e.x > r.max.x && (e.x = this._viscousLimit(e.x, r.max.x)), e.y > r.max.y && (e.y = this._viscousLimit(e.y, r.max.y)), this._draggable._newPos = this._draggable._startPos.add(e);
          }
        },
        _onPreDragWrap: function() {
          var e = this._worldWidth, r = Math.round(e / 2), a = this._initialWorldOffset, c = this._draggable._newPos.x, f = (c - r + a) % e + r - a, y = (c + r + a) % e - r - a, I = Math.abs(f + a) < Math.abs(y + a) ? f : y;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = I;
        },
        _onDragEnd: function(e) {
          var r = this._map, a = r.options, c = !a.inertia || e.noInertia || this._times.length < 2;
          if (r.fire("dragend", e), c)
            r.fire("moveend");
          else {
            this._prunePositions(+/* @__PURE__ */ new Date());
            var f = this._lastPos.subtract(this._positions[0]), y = (this._lastTime - this._times[0]) / 1e3, I = a.easeLinearity, B = f.multiplyBy(I / y), W = B.distanceTo([0, 0]), ne = Math.min(a.inertiaMaxSpeed, W), Se = B.multiplyBy(ne / W), Me = ne / (a.inertiaDeceleration * I), ot = Se.multiplyBy(-Me / 2).round();
            !ot.x && !ot.y ? r.fire("moveend") : (ot = r._limitOffset(ot, r.options.maxBounds), j(function() {
              r.panBy(ot, {
                duration: Me,
                easeLinearity: I,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      vt.addInitHook("addHandler", "dragging", go), vt.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: !0,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
      });
      var Ql = nn.extend({
        keyCodes: {
          left: [37],
          right: [39],
          down: [40],
          up: [38],
          zoomIn: [187, 107, 61, 171],
          zoomOut: [189, 109, 54, 173]
        },
        initialize: function(e) {
          this._map = e, this._setPanDelta(e.options.keyboardPanDelta), this._setZoomDelta(e.options.zoomDelta);
        },
        addHooks: function() {
          var e = this._map._container;
          e.tabIndex <= 0 && (e.tabIndex = "0"), Qe(e, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.on({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        removeHooks: function() {
          this._removeHooks(), Gt(this._map._container, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.off({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        _onMouseDown: function() {
          if (!this._focused) {
            var e = document.body, r = document.documentElement, a = e.scrollTop || r.scrollTop, c = e.scrollLeft || r.scrollLeft;
            this._map._container.focus(), window.scrollTo(c, a);
          }
        },
        _onFocus: function() {
          this._focused = !0, this._map.fire("focus");
        },
        _onBlur: function() {
          this._focused = !1, this._map.fire("blur");
        },
        _setPanDelta: function(e) {
          var r = this._panKeys = {}, a = this.keyCodes, c, f;
          for (c = 0, f = a.left.length; c < f; c++)
            r[a.left[c]] = [-1 * e, 0];
          for (c = 0, f = a.right.length; c < f; c++)
            r[a.right[c]] = [e, 0];
          for (c = 0, f = a.down.length; c < f; c++)
            r[a.down[c]] = [0, e];
          for (c = 0, f = a.up.length; c < f; c++)
            r[a.up[c]] = [0, -1 * e];
        },
        _setZoomDelta: function(e) {
          var r = this._zoomKeys = {}, a = this.keyCodes, c, f;
          for (c = 0, f = a.zoomIn.length; c < f; c++)
            r[a.zoomIn[c]] = e;
          for (c = 0, f = a.zoomOut.length; c < f; c++)
            r[a.zoomOut[c]] = -e;
        },
        _addHooks: function() {
          Qe(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
          Gt(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(e) {
          if (!(e.altKey || e.ctrlKey || e.metaKey)) {
            var r = e.keyCode, a = this._map, c;
            if (r in this._panKeys) {
              if (!a._panAnim || !a._panAnim._inProgress)
                if (c = this._panKeys[r], e.shiftKey && (c = J(c).multiplyBy(3)), a.options.maxBounds && (c = a._limitOffset(J(c), a.options.maxBounds)), a.options.worldCopyJump) {
                  var f = a.wrapLatLng(a.unproject(a.project(a.getCenter()).add(c)));
                  a.panTo(f);
                } else
                  a.panBy(c);
            } else if (r in this._zoomKeys)
              a.setZoom(a.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[r]);
            else if (r === 27 && a._popup && a._popup.options.closeOnEscapeKey)
              a.closePopup();
            else
              return;
            At(e);
          }
        }
      });
      vt.addInitHook("addHandler", "keyboard", Ql), vt.mergeOptions({
        // @section Mouse wheel options
        // @option scrollWheelZoom: Boolean|String = true
        // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,
        // it will zoom to the center of the view regardless of where the mouse was.
        scrollWheelZoom: !0,
        // @option wheelDebounceTime: Number = 40
        // Limits the rate at which a wheel can fire (in milliseconds). By default
        // user can't zoom via wheel more often than once per 40 ms.
        wheelDebounceTime: 40,
        // @option wheelPxPerZoomLevel: Number = 60
        // How many scroll pixels (as reported by [L.DomEvent.getWheelDelta](#domevent-getwheeldelta))
        // mean a change of one full zoom level. Smaller values will make wheel-zooming
        // faster (and vice versa).
        wheelPxPerZoomLevel: 60
      });
      var eu = nn.extend({
        addHooks: function() {
          Qe(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          Gt(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(e) {
          var r = kl(e), a = this._map.options.wheelDebounceTime;
          this._delta += r, this._lastMousePos = this._map.mouseEventToContainerPoint(e), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var c = Math.max(a - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(_(this._performZoom, this), c), At(e);
        },
        _performZoom: function() {
          var e = this._map, r = e.getZoom(), a = this._map.options.zoomSnap || 0;
          e._stop();
          var c = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), f = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(c)))) / Math.LN2, y = a ? Math.ceil(f / a) * a : f, I = e._limitZoom(r + (this._delta > 0 ? y : -y)) - r;
          this._delta = 0, this._startTime = null, I && (e.options.scrollWheelZoom === "center" ? e.setZoom(r + I) : e.setZoomAround(this._lastMousePos, r + I));
        }
      });
      vt.addInitHook("addHandler", "scrollWheelZoom", eu);
      var cc = 600;
      vt.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: me.touchNative && me.safari && me.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var mo = nn.extend({
        addHooks: function() {
          Qe(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          Gt(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(e) {
          if (clearTimeout(this._holdTimeout), e.touches.length === 1) {
            var r = e.touches[0];
            this._startPos = this._newPos = new _e(r.clientX, r.clientY), this._holdTimeout = setTimeout(_(function() {
              this._cancel(), this._isTapValid() && (Qe(document, "touchend", it), Qe(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", r));
            }, this), cc), Qe(document, "touchend touchcancel contextmenu", this._cancel, this), Qe(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function e() {
          Gt(document, "touchend", it), Gt(document, "touchend touchcancel", e);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), Gt(document, "touchend touchcancel contextmenu", this._cancel, this), Gt(document, "touchmove", this._onMove, this);
        },
        _onMove: function(e) {
          var r = e.touches[0];
          this._newPos = new _e(r.clientX, r.clientY);
        },
        _isTapValid: function() {
          return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _simulateEvent: function(e, r) {
          var a = new MouseEvent(e, {
            bubbles: !0,
            cancelable: !0,
            view: window,
            // detail: 1,
            screenX: r.screenX,
            screenY: r.screenY,
            clientX: r.clientX,
            clientY: r.clientY
            // button: 2,
            // buttons: 2
          });
          a._simulated = !0, r.target.dispatchEvent(a);
        }
      });
      vt.addInitHook("addHandler", "tapHold", mo), vt.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: me.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: !0
      });
      var vo = nn.extend({
        addHooks: function() {
          We(this._map._container, "leaflet-touch-zoom"), Qe(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          Dt(this._map._container, "leaflet-touch-zoom"), Gt(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(e) {
          var r = this._map;
          if (!(!e.touches || e.touches.length !== 2 || r._animatingZoom || this._zooming)) {
            var a = r.mouseEventToContainerPoint(e.touches[0]), c = r.mouseEventToContainerPoint(e.touches[1]);
            this._centerPoint = r.getSize()._divideBy(2), this._startLatLng = r.containerPointToLatLng(this._centerPoint), r.options.touchZoom !== "center" && (this._pinchStartLatLng = r.containerPointToLatLng(a.add(c)._divideBy(2))), this._startDist = a.distanceTo(c), this._startZoom = r.getZoom(), this._moved = !1, this._zooming = !0, r._stop(), Qe(document, "touchmove", this._onTouchMove, this), Qe(document, "touchend touchcancel", this._onTouchEnd, this), it(e);
          }
        },
        _onTouchMove: function(e) {
          if (!(!e.touches || e.touches.length !== 2 || !this._zooming)) {
            var r = this._map, a = r.mouseEventToContainerPoint(e.touches[0]), c = r.mouseEventToContainerPoint(e.touches[1]), f = a.distanceTo(c) / this._startDist;
            if (this._zoom = r.getScaleZoom(f, this._startZoom), !r.options.bounceAtZoomLimits && (this._zoom < r.getMinZoom() && f < 1 || this._zoom > r.getMaxZoom() && f > 1) && (this._zoom = r._limitZoom(this._zoom)), r.options.touchZoom === "center") {
              if (this._center = this._startLatLng, f === 1)
                return;
            } else {
              var y = a._add(c)._divideBy(2)._subtract(this._centerPoint);
              if (f === 1 && y.x === 0 && y.y === 0)
                return;
              this._center = r.unproject(r.project(this._pinchStartLatLng, this._zoom).subtract(y), this._zoom);
            }
            this._moved || (r._moveStart(!0, !1), this._moved = !0), U(this._animRequest);
            var I = _(r._move, r, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = j(I, this, !0), it(e);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, U(this._animRequest), Gt(document, "touchmove", this._onTouchMove, this), Gt(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      vt.addInitHook("addHandler", "touchZoom", vo), vt.BoxZoom = Ws, vt.DoubleClickZoom = es, vt.Drag = go, vt.Keyboard = Ql, vt.ScrollWheelZoom = eu, vt.TapHold = mo, vt.TouchZoom = vo, n.Bounds = de, n.Browser = me, n.CRS = Kt, n.Canvas = po, n.Circle = Ko, n.CircleMarker = qo, n.Class = ge, n.Control = Di, n.DivIcon = ho, n.DivOverlay = Cr, n.DomEvent = tc, n.DomUtil = Fl, n.Draggable = $r, n.Evented = Pe, n.FeatureGroup = Ar, n.GeoJSON = vi, n.GridLayer = Tt, n.Handler = nn, n.Icon = Bs, n.ImageOverlay = Ce, n.LatLng = ke, n.LatLngBounds = gt, n.Layer = Jt, n.LayerGroup = Jr, n.LineUtil = Pa, n.Map = vt, n.Marker = Yo, n.Mixin = nc, n.Path = jr, n.Point = _e, n.PolyUtil = Na, n.Polygon = ks, n.Polyline = qi, n.Popup = ai, n.PosAnimation = Ca, n.Projection = Fa, n.Rectangle = _o, n.Renderer = kr, n.SVG = zs, n.SVGOverlay = Mt, n.TileLayer = gs, n.Tooltip = Xo, n.Transformation = qn, n.Util = se, n.VideoOverlay = Ct, n.bind = _, n.bounds = He, n.canvas = Ur, n.circle = Xr, n.circleMarker = Ba, n.control = rr, n.divIcon = Qo, n.extend = d, n.featureGroup = Kl, n.geoJSON = $, n.geoJson = H, n.gridLayer = lc, n.icon = sc, n.imageOverlay = je, n.latLng = xe, n.latLngBounds = re, n.layerGroup = uo, n.map = zn, n.marker = Gs, n.point = J, n.polygon = ac, n.polyline = oc, n.popup = jo, n.rectangle = Xl, n.setOptions = G, n.stamp = m, n.svg = za, n.svgOverlay = Va, n.tileLayer = fo, n.tooltip = Vs, n.transformation = Un, n.version = l, n.videoOverlay = Ln;
      var Wa = window.L;
      n.noConflict = function() {
        return window.L = Wa, this;
      }, window.L = n;
    }));
  })(il, il.exports)), il.exports;
}
var n_ = T1();
const ca = /* @__PURE__ */ t_(n_), w1 = /* @__PURE__ */ VE({
  __proto__: null,
  default: ca
}, [n_]);
class S1 {
  constructor() {
    this.id = "";
  }
  invoke() {
  }
  run() {
  }
}
function A1() {
  const o = pe(/* @__PURE__ */ new Map());
  return {
    addTasksAndIvnoke: async (p) => {
      const _ = new Set(p.map((E) => E.id));
      o.value.forEach((E, A) => {
        _.has(A) || (E.invoke(), o.value.delete(A));
      });
      const v = 10;
      let m = 0;
      for (const E of p)
        o.value.has(E.id) || (o.value.set(E.id, E), E.run(), m++, m % v === 0 && await new Promise((A) => setTimeout(A, 0)));
    },
    invokeTask: (p) => {
      o.value.get(p)?.invoke(), o.value.delete(p);
    },
    hasTask: (p) => o.value.has(p),
    clearAll: () => {
      o.value.forEach((p, _) => {
        try {
          p.invoke();
        } catch (v) {
          console.warn("Error invoking task during clearAll:", _, v);
        }
      }), o.value.clear();
    }
  };
}
var cr = 63710088e-1, C1 = {
  centimeters: cr * 100,
  centimetres: cr * 100,
  degrees: 360 / (2 * Math.PI),
  feet: cr * 3.28084,
  inches: cr * 39.37,
  kilometers: cr / 1e3,
  kilometres: cr / 1e3,
  meters: cr,
  metres: cr,
  miles: cr / 1609.344,
  millimeters: cr * 1e3,
  millimetres: cr * 1e3,
  nauticalmiles: cr / 1852,
  radians: 1,
  yards: cr * 1.0936
};
function Vh(o, i, n = {}) {
  const l = { type: "Feature" };
  return (n.id === 0 || n.id) && (l.id = n.id), n.bbox && (l.bbox = n.bbox), l.properties = i || {}, l.geometry = o, l;
}
function al(o, i, n = {}) {
  if (!o)
    throw new Error("coordinates is required");
  if (!Array.isArray(o))
    throw new Error("coordinates must be an Array");
  if (o.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!Zf(o[0]) || !Zf(o[1]))
    throw new Error("coordinates must contain numbers");
  return Vh({
    type: "Point",
    coordinates: o
  }, i, n);
}
function Wu(o, i = {}) {
  const n = { type: "FeatureCollection" };
  return i.id && (n.id = i.id), i.bbox && (n.bbox = i.bbox), n.features = o, n;
}
function b1(o, i = "kilometers") {
  const n = C1[i];
  if (!n)
    throw new Error(i + " units is invalid");
  return o * n;
}
function Ou(o) {
  return o % 360 * Math.PI / 180;
}
function Zf(o) {
  return !isNaN(o) && o !== null && !Array.isArray(o);
}
function ll(o, i, n) {
  if (o !== null)
    for (var l, d, p, _, v, m, E, A = 0, w = 0, b, N = o.type, k = N === "FeatureCollection", G = N === "Feature", X = k ? o.features.length : 1, x = 0; x < X; x++) {
      E = k ? o.features[x].geometry : G ? o.geometry : o, b = E ? E.type === "GeometryCollection" : !1, v = b ? E.geometries.length : 1;
      for (var z = 0; z < v; z++) {
        var Y = 0, R = 0;
        if (_ = b ? E.geometries[z] : E, _ !== null) {
          m = _.coordinates;
          var q = _.type;
          switch (A = 0, q) {
            case null:
              break;
            case "Point":
              if (i(
                m,
                w,
                x,
                Y,
                R
              ) === !1)
                return !1;
              w++, Y++;
              break;
            case "LineString":
            case "MultiPoint":
              for (l = 0; l < m.length; l++) {
                if (i(
                  m[l],
                  w,
                  x,
                  Y,
                  R
                ) === !1)
                  return !1;
                w++, q === "MultiPoint" && Y++;
              }
              q === "LineString" && Y++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (l = 0; l < m.length; l++) {
                for (d = 0; d < m[l].length - A; d++) {
                  if (i(
                    m[l][d],
                    w,
                    x,
                    Y,
                    R
                  ) === !1)
                    return !1;
                  w++;
                }
                q === "MultiLineString" && Y++, q === "Polygon" && R++;
              }
              q === "Polygon" && Y++;
              break;
            case "MultiPolygon":
              for (l = 0; l < m.length; l++) {
                for (R = 0, d = 0; d < m[l].length; d++) {
                  for (p = 0; p < m[l][d].length - A; p++) {
                    if (i(
                      m[l][d][p],
                      w,
                      x,
                      Y,
                      R
                    ) === !1)
                      return !1;
                    w++;
                  }
                  R++;
                }
                Y++;
              }
              break;
            case "GeometryCollection":
              for (l = 0; l < _.geometries.length; l++)
                if (ll(_.geometries[l], i) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function i_(o, i) {
  if (o.type === "Feature")
    i(o, 0);
  else if (o.type === "FeatureCollection")
    for (var n = 0; n < o.features.length && i(o.features[n], n) !== !1; n++)
      ;
}
function ml(o, i = {}) {
  if (o.bbox != null && i.recompute !== !0)
    return o.bbox;
  const n = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return ll(o, (l) => {
    n[0] > l[0] && (n[0] = l[0]), n[1] > l[1] && (n[1] = l[1]), n[2] < l[0] && (n[2] = l[0]), n[3] < l[1] && (n[3] = l[1]);
  }), n;
}
const Ls = 11102230246251565e-32, wi = 134217729, O1 = (3 + 8 * Ls) * Ls;
function lh(o, i, n, l, d) {
  let p, _, v, m, E = i[0], A = l[0], w = 0, b = 0;
  A > E == A > -E ? (p = E, E = i[++w]) : (p = A, A = l[++b]);
  let N = 0;
  if (w < o && b < n)
    for (A > E == A > -E ? (_ = E + p, v = p - (_ - E), E = i[++w]) : (_ = A + p, v = p - (_ - A), A = l[++b]), p = _, v !== 0 && (d[N++] = v); w < o && b < n; )
      A > E == A > -E ? (_ = p + E, m = _ - p, v = p - (_ - m) + (E - m), E = i[++w]) : (_ = p + A, m = _ - p, v = p - (_ - m) + (A - m), A = l[++b]), p = _, v !== 0 && (d[N++] = v);
  for (; w < o; )
    _ = p + E, m = _ - p, v = p - (_ - m) + (E - m), E = i[++w], p = _, v !== 0 && (d[N++] = v);
  for (; b < n; )
    _ = p + A, m = _ - p, v = p - (_ - m) + (A - m), A = l[++b], p = _, v !== 0 && (d[N++] = v);
  return (p !== 0 || N === 0) && (d[N++] = p), N;
}
function L1(o, i) {
  let n = i[0];
  for (let l = 1; l < o; l++) n += i[l];
  return n;
}
function Il(o) {
  return new Float64Array(o);
}
const I1 = (3 + 16 * Ls) * Ls, N1 = (2 + 12 * Ls) * Ls, D1 = (9 + 64 * Ls) * Ls * Ls, aa = Il(4), Hf = Il(8), Yf = Il(12), qf = Il(16), Bi = Il(4);
function R1(o, i, n, l, d, p, _) {
  let v, m, E, A, w, b, N, k, G, X, x, z, Y, R, q, ce, we, Le;
  const te = o - d, Z = n - d, j = i - p, U = l - p;
  R = te * U, b = wi * te, N = b - (b - te), k = te - N, b = wi * U, G = b - (b - U), X = U - G, q = k * X - (R - N * G - k * G - N * X), ce = j * Z, b = wi * j, N = b - (b - j), k = j - N, b = wi * Z, G = b - (b - Z), X = Z - G, we = k * X - (ce - N * G - k * G - N * X), x = q - we, w = q - x, aa[0] = q - (x + w) + (w - we), z = R + x, w = z - R, Y = R - (z - w) + (x - w), x = Y - ce, w = Y - x, aa[1] = Y - (x + w) + (w - ce), Le = z + x, w = Le - z, aa[2] = z - (Le - w) + (x - w), aa[3] = Le;
  let se = L1(4, aa), ge = N1 * _;
  if (se >= ge || -se >= ge || (w = o - te, v = o - (te + w) + (w - d), w = n - Z, E = n - (Z + w) + (w - d), w = i - j, m = i - (j + w) + (w - p), w = l - U, A = l - (U + w) + (w - p), v === 0 && m === 0 && E === 0 && A === 0) || (ge = D1 * _ + O1 * Math.abs(se), se += te * A + U * v - (j * E + Z * m), se >= ge || -se >= ge)) return se;
  R = v * U, b = wi * v, N = b - (b - v), k = v - N, b = wi * U, G = b - (b - U), X = U - G, q = k * X - (R - N * G - k * G - N * X), ce = m * Z, b = wi * m, N = b - (b - m), k = m - N, b = wi * Z, G = b - (b - Z), X = Z - G, we = k * X - (ce - N * G - k * G - N * X), x = q - we, w = q - x, Bi[0] = q - (x + w) + (w - we), z = R + x, w = z - R, Y = R - (z - w) + (x - w), x = Y - ce, w = Y - x, Bi[1] = Y - (x + w) + (w - ce), Le = z + x, w = Le - z, Bi[2] = z - (Le - w) + (x - w), Bi[3] = Le;
  const Je = lh(4, aa, 4, Bi, Hf);
  R = te * A, b = wi * te, N = b - (b - te), k = te - N, b = wi * A, G = b - (b - A), X = A - G, q = k * X - (R - N * G - k * G - N * X), ce = j * E, b = wi * j, N = b - (b - j), k = j - N, b = wi * E, G = b - (b - E), X = E - G, we = k * X - (ce - N * G - k * G - N * X), x = q - we, w = q - x, Bi[0] = q - (x + w) + (w - we), z = R + x, w = z - R, Y = R - (z - w) + (x - w), x = Y - ce, w = Y - x, Bi[1] = Y - (x + w) + (w - ce), Le = z + x, w = Le - z, Bi[2] = z - (Le - w) + (x - w), Bi[3] = Le;
  const De = lh(Je, Hf, 4, Bi, Yf);
  R = v * A, b = wi * v, N = b - (b - v), k = v - N, b = wi * A, G = b - (b - A), X = A - G, q = k * X - (R - N * G - k * G - N * X), ce = m * E, b = wi * m, N = b - (b - m), k = m - N, b = wi * E, G = b - (b - E), X = E - G, we = k * X - (ce - N * G - k * G - N * X), x = q - we, w = q - x, Bi[0] = q - (x + w) + (w - we), z = R + x, w = z - R, Y = R - (z - w) + (x - w), x = Y - ce, w = Y - x, Bi[1] = Y - (x + w) + (w - ce), Le = z + x, w = Le - z, Bi[2] = z - (Le - w) + (x - w), Bi[3] = Le;
  const Pe = lh(De, Yf, 4, Bi, qf);
  return qf[Pe - 1];
}
function P1(o, i, n, l, d, p) {
  const _ = (i - p) * (n - d), v = (o - d) * (l - p), m = _ - v, E = Math.abs(_ + v);
  return Math.abs(m) >= I1 * E ? m : -R1(o, i, n, l, d, p, E);
}
function x1(o, i) {
  var n, l, d = 0, p, _, v, m, E, A, w, b = o[0], N = o[1], k = i.length;
  for (n = 0; n < k; n++) {
    l = 0;
    var G = i[n], X = G.length - 1;
    if (A = G[0], A[0] !== G[X][0] && A[1] !== G[X][1])
      throw new Error("First and last coordinates in a ring must be the same");
    for (_ = A[0] - b, v = A[1] - N, l; l < X; l++) {
      if (w = G[l + 1], m = w[0] - b, E = w[1] - N, v === 0 && E === 0) {
        if (m <= 0 && _ >= 0 || _ <= 0 && m >= 0)
          return 0;
      } else if (E >= 0 && v <= 0 || E <= 0 && v >= 0) {
        if (p = P1(_, m, v, E, 0, 0), p === 0)
          return 0;
        (p > 0 && E > 0 && v <= 0 || p < 0 && E <= 0 && v > 0) && d++;
      }
      A = w, v = E, _ = m;
    }
  }
  return d % 2 !== 0;
}
function F1(o) {
  if (!o)
    throw new Error("coord is required");
  if (!Array.isArray(o)) {
    if (o.type === "Feature" && o.geometry !== null && o.geometry.type === "Point")
      return [...o.geometry.coordinates];
    if (o.type === "Point")
      return [...o.coordinates];
  }
  if (Array.isArray(o) && o.length >= 2 && !Array.isArray(o[0]) && !Array.isArray(o[1]))
    return [...o];
  throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
function M1(o) {
  return o.type === "Feature" ? o.geometry : o;
}
function Nl(o, i, n = {}) {
  if (!o)
    throw new Error("point is required");
  if (!i)
    throw new Error("polygon is required");
  const l = F1(o), d = M1(i), p = d.type, _ = i.bbox;
  let v = d.coordinates;
  if (_ && B1(l, _) === !1)
    return !1;
  p === "Polygon" && (v = [v]);
  let m = !1;
  for (var E = 0; E < v.length; ++E) {
    const A = x1(l, v[E]);
    if (A === 0) return !n.ignoreBoundary;
    A && (m = !0);
  }
  return m;
}
function B1(o, i) {
  return i[0] <= o[0] && i[1] <= o[1] && i[2] >= o[0] && i[3] >= o[1];
}
function Ah(o) {
  if (!o)
    throw new Error("coord is required");
  if (!Array.isArray(o)) {
    if (o.type === "Feature" && o.geometry !== null && o.geometry.type === "Point")
      return [...o.geometry.coordinates];
    if (o.type === "Point")
      return [...o.coordinates];
  }
  if (Array.isArray(o) && o.length >= 2 && !Array.isArray(o[0]) && !Array.isArray(o[1]))
    return [...o];
  throw new Error("coord must be GeoJSON Point or an Array of numbers");
}
function G1(o) {
  if (Array.isArray(o))
    return o;
  if (o.type === "Feature") {
    if (o.geometry !== null)
      return o.geometry.coordinates;
  } else if (o.coordinates)
    return o.coordinates;
  throw new Error(
    "coords must be GeoJSON Feature, Geometry Object or an Array"
  );
}
function Ch(o) {
  return o.type === "Feature" ? o.geometry : o;
}
function vl(o, i, n = {}) {
  const l = Ah(o), d = G1(i);
  for (let p = 0; p < d.length - 1; p++) {
    let _ = !1;
    if (n.ignoreEndVertices && (p === 0 && (_ = "start"), p === d.length - 2 && (_ = "end"), p === 0 && p + 1 === d.length - 1 && (_ = "both")), k1(
      d[p],
      d[p + 1],
      l,
      _,
      typeof n.epsilon > "u" ? null : n.epsilon
    ))
      return !0;
  }
  return !1;
}
function k1(o, i, n, l, d) {
  const p = n[0], _ = n[1], v = o[0], m = o[1], E = i[0], A = i[1], w = n[0] - v, b = n[1] - m, N = E - v, k = A - m, G = w * k - b * N;
  if (d !== null) {
    if (Math.abs(G) > d)
      return !1;
  } else if (G !== 0)
    return !1;
  if (Math.abs(N) === Math.abs(k) && Math.abs(N) === 0)
    return l ? !1 : n[0] === o[0] && n[1] === o[1];
  if (l) {
    if (l === "start")
      return Math.abs(N) >= Math.abs(k) ? N > 0 ? v < p && p <= E : E <= p && p < v : k > 0 ? m < _ && _ <= A : A <= _ && _ < m;
    if (l === "end")
      return Math.abs(N) >= Math.abs(k) ? N > 0 ? v <= p && p < E : E < p && p <= v : k > 0 ? m <= _ && _ < A : A < _ && _ <= m;
    if (l === "both")
      return Math.abs(N) >= Math.abs(k) ? N > 0 ? v < p && p < E : E < p && p < v : k > 0 ? m < _ && _ < A : A < _ && _ < m;
  } else return Math.abs(N) >= Math.abs(k) ? N > 0 ? v <= p && p <= E : E <= p && p <= v : k > 0 ? m <= _ && _ <= A : A <= _ && _ <= m;
  return !1;
}
function U1(o, i) {
  const n = Ch(o), l = Ch(i), d = n.type, p = l.type, _ = n.coordinates, v = l.coordinates;
  switch (d) {
    case "Point":
      switch (p) {
        case "Point":
          return zh(_, v);
        default:
          throw new Error("feature2 " + p + " geometry not supported");
      }
    case "MultiPoint":
      switch (p) {
        case "Point":
          return z1(n, l);
        case "MultiPoint":
          return W1(n, l);
        default:
          throw new Error("feature2 " + p + " geometry not supported");
      }
    case "LineString":
      switch (p) {
        case "Point":
          return vl(l, n, { ignoreEndVertices: !0 });
        case "LineString":
          return Y1(n, l);
        case "MultiPoint":
          return Z1(n, l);
        default:
          throw new Error("feature2 " + p + " geometry not supported");
      }
    case "Polygon":
      switch (p) {
        case "Point":
          return Nl(l, n, { ignoreBoundary: !0 });
        case "LineString":
          return q1(n, l);
        case "Polygon":
          return r_(n, l);
        case "MultiPoint":
          return H1(n, l);
        default:
          throw new Error("feature2 " + p + " geometry not supported");
      }
    case "MultiPolygon":
      switch (p) {
        case "Polygon":
          return V1(n, l);
        default:
          throw new Error("feature2 " + p + " geometry not supported");
      }
    default:
      throw new Error("feature1 " + d + " geometry not supported");
  }
}
function V1(o, i) {
  return o.coordinates.some(
    (n) => r_({ type: "Polygon", coordinates: n }, i)
  );
}
function z1(o, i) {
  let n, l = !1;
  for (n = 0; n < o.coordinates.length; n++)
    if (zh(o.coordinates[n], i.coordinates)) {
      l = !0;
      break;
    }
  return l;
}
function W1(o, i) {
  for (const n of i.coordinates) {
    let l = !1;
    for (const d of o.coordinates)
      if (zh(n, d)) {
        l = !0;
        break;
      }
    if (!l)
      return !1;
  }
  return !0;
}
function Z1(o, i) {
  let n = !1;
  for (const l of i.coordinates)
    if (vl(l, o, { ignoreEndVertices: !0 }) && (n = !0), !vl(l, o))
      return !1;
  return !!n;
}
function H1(o, i) {
  for (const n of i.coordinates)
    if (!Nl(n, o, { ignoreBoundary: !0 }))
      return !1;
  return !0;
}
function Y1(o, i) {
  let n = !1;
  for (const l of i.coordinates)
    if (vl({ type: "Point", coordinates: l }, o, {
      ignoreEndVertices: !0
    }) && (n = !0), !vl({ type: "Point", coordinates: l }, o, {
      ignoreEndVertices: !1
    }))
      return !1;
  return n;
}
function q1(o, i) {
  let n = !1, l = 0;
  const d = ml(o), p = ml(i);
  if (!s_(d, p))
    return !1;
  for (l; l < i.coordinates.length - 1; l++) {
    const _ = K1(
      i.coordinates[l],
      i.coordinates[l + 1]
    );
    if (Nl({ type: "Point", coordinates: _ }, o, {
      ignoreBoundary: !0
    })) {
      n = !0;
      break;
    }
  }
  return n;
}
function r_(o, i) {
  if (o.type === "Feature" && o.geometry === null || i.type === "Feature" && i.geometry === null)
    return !1;
  const n = ml(o), l = ml(i);
  if (!s_(n, l))
    return !1;
  const d = Ch(i).coordinates;
  for (const p of d)
    for (const _ of p)
      if (!Nl(_, o))
        return !1;
  return !0;
}
function s_(o, i) {
  return !(o[0] > i[0] || o[2] < i[2] || o[1] > i[1] || o[3] < i[3]);
}
function zh(o, i) {
  return o[0] === i[0] && o[1] === i[1];
}
function K1(o, i) {
  return [(o[0] + i[0]) / 2, (o[1] + i[1]) / 2];
}
var $1 = U1;
function J1(o) {
  const i = [];
  return o.type === "FeatureCollection" ? i_(o, function(n) {
    ll(n, function(l) {
      i.push(al(l, n.properties));
    });
  }) : o.type === "Feature" ? ll(o, function(n) {
    i.push(al(n, o.properties));
  }) : ll(o, function(n) {
    i.push(al(n));
  }), Wu(i);
}
function j1(o, i = {}) {
  const n = ml(o), l = (n[0] + n[2]) / 2, d = (n[1] + n[3]) / 2;
  return al([l, d], i.properties, i);
}
function X1(o) {
  if (!o)
    throw new Error("geojson is required");
  switch (o.type) {
    case "Feature":
      return o_(o);
    case "FeatureCollection":
      return Q1(o);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return Wh(o);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function o_(o) {
  const i = { type: "Feature" };
  return Object.keys(o).forEach((n) => {
    switch (n) {
      case "type":
      case "properties":
      case "geometry":
        return;
      default:
        i[n] = o[n];
    }
  }), i.properties = a_(o.properties), o.geometry == null ? i.geometry = null : i.geometry = Wh(o.geometry), i;
}
function a_(o) {
  const i = {};
  return o && Object.keys(o).forEach((n) => {
    const l = o[n];
    typeof l == "object" ? l === null ? i[n] = null : Array.isArray(l) ? i[n] = l.map((d) => d) : i[n] = a_(l) : i[n] = l;
  }), i;
}
function Q1(o) {
  const i = { type: "FeatureCollection" };
  return Object.keys(o).forEach((n) => {
    switch (n) {
      case "type":
      case "features":
        return;
      default:
        i[n] = o[n];
    }
  }), i.features = o.features.map((n) => o_(n)), i;
}
function Wh(o) {
  const i = { type: o.type };
  return o.bbox && (i.bbox = o.bbox), o.type === "GeometryCollection" ? (i.geometries = o.geometries.map((n) => Wh(n)), i) : (i.coordinates = l_(o.coordinates), i);
}
function l_(o) {
  const i = o;
  return typeof i[0] != "object" ? i.slice() : i.map((n) => l_(n));
}
function eT(o, i, n = {}) {
  var l = Ah(o), d = Ah(i), p = Ou(d[1] - l[1]), _ = Ou(d[0] - l[0]), v = Ou(l[1]), m = Ou(d[1]), E = Math.pow(Math.sin(p / 2), 2) + Math.pow(Math.sin(_ / 2), 2) * Math.cos(v) * Math.cos(m);
  return b1(
    2 * Math.atan2(Math.sqrt(E), Math.sqrt(1 - E)),
    n.units
  );
}
var tT = Object.defineProperty, nT = Object.defineProperties, iT = Object.getOwnPropertyDescriptors, Kf = Object.getOwnPropertySymbols, rT = Object.prototype.hasOwnProperty, sT = Object.prototype.propertyIsEnumerable, $f = (o, i, n) => i in o ? tT(o, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[i] = n, Jf = (o, i) => {
  for (var n in i || (i = {}))
    rT.call(i, n) && $f(o, n, i[n]);
  if (Kf)
    for (var n of Kf(i))
      sT.call(i, n) && $f(o, n, i[n]);
  return o;
}, jf = (o, i) => nT(o, iT(i));
function oT(o, i, n = {}) {
  if (!o) throw new Error("targetPoint is required");
  if (!i) throw new Error("points is required");
  let l = 1 / 0, d = 0;
  i_(i, (_, v) => {
    const m = eT(o, _, n);
    m < l && (d = v, l = m);
  });
  const p = X1(i.features[d]);
  return jf(Jf({}, p), {
    properties: jf(Jf({}, p.properties), {
      featureIndex: d,
      distanceToPoint: l
    })
  });
}
function aT(o) {
  const i = lT(o), n = j1(i);
  let l = !1, d = 0;
  for (; !l && d < i.features.length; ) {
    const p = i.features[d].geometry;
    let _, v, m, E, A, w, b = !1;
    if (p.type === "Point")
      n.geometry.coordinates[0] === p.coordinates[0] && n.geometry.coordinates[1] === p.coordinates[1] && (l = !0);
    else if (p.type === "MultiPoint") {
      let N = !1, k = 0;
      for (; !N && k < p.coordinates.length; )
        n.geometry.coordinates[0] === p.coordinates[k][0] && n.geometry.coordinates[1] === p.coordinates[k][1] && (l = !0, N = !0), k++;
    } else if (p.type === "LineString") {
      let N = 0;
      for (; !b && N < p.coordinates.length - 1; )
        _ = n.geometry.coordinates[0], v = n.geometry.coordinates[1], m = p.coordinates[N][0], E = p.coordinates[N][1], A = p.coordinates[N + 1][0], w = p.coordinates[N + 1][1], Xf(_, v, m, E, A, w) && (b = !0, l = !0), N++;
    } else if (p.type === "MultiLineString") {
      let N = 0;
      for (; N < p.coordinates.length; ) {
        b = !1;
        let k = 0;
        const G = p.coordinates[N];
        for (; !b && k < G.length - 1; )
          _ = n.geometry.coordinates[0], v = n.geometry.coordinates[1], m = G[k][0], E = G[k][1], A = G[k + 1][0], w = G[k + 1][1], Xf(_, v, m, E, A, w) && (b = !0, l = !0), k++;
        N++;
      }
    } else (p.type === "Polygon" || p.type === "MultiPolygon") && Nl(n, p) && (l = !0);
    d++;
  }
  if (l)
    return n;
  {
    const p = Wu([]);
    for (let _ = 0; _ < i.features.length; _++)
      p.features = p.features.concat(
        J1(i.features[_]).features
      );
    return al(oT(n, p).geometry.coordinates);
  }
}
function lT(o) {
  return o.type !== "FeatureCollection" ? o.type !== "Feature" ? Wu([Vh(o)]) : Wu([o]) : o;
}
function Xf(o, i, n, l, d, p) {
  const _ = Math.sqrt((d - n) * (d - n) + (p - l) * (p - l)), v = Math.sqrt((o - n) * (o - n) + (i - l) * (i - l)), m = Math.sqrt((d - o) * (d - o) + (p - i) * (p - i));
  return _ === v + m;
}
var Qf = aT;
const Lu = /* @__PURE__ */ new Map();
function ul() {
  return {
    registerDataPointRenderer: (d) => {
      Lu.set(d.namespace + d.qualifiedName, d);
    },
    unregisterDataPointrender: (d) => {
      Lu.delete(d.namespace + d.qualifiedName);
    },
    getAll: () => Lu,
    getById: (d) => Lu.get(d)
  };
}
const uT = /* @__PURE__ */ st({
  __name: "WFSLayer",
  props: {
    geoJson: {},
    styleIds: {},
    layerOptions: {},
    filterFeatureCollection: { type: Function },
    getStyleById: { type: Function },
    isPoint: { type: Function }
  },
  setup(o) {
    return (i, n) => (V(!0), ie(Re, null, Yt(o.styleIds, (l) => (V(), ie(Re, { key: l }, [
      o.isPoint(o.geoJson) ? Ge("", !0) : (V(), Ze(Oe(Fo), {
        key: 0,
        ref_for: !0,
        ref: "thingsLayer",
        geojson: o.filterFeatureCollection(o.geoJson, o.getStyleById(l)),
        options: o.layerOptions,
        "options-style": () => o.getStyleById(l)?.renderer.area
      }, null, 8, ["geojson", "options", "options-style"]))
    ], 64))), 128));
  }
}), cT = { class: "inner" }, hT = { class: "observation-slot" }, dT = { class: "inner" }, fT = { class: "observation-slot" }, pT = ["src"], _T = /* @__PURE__ */ st({
  __name: "MapMarker",
  props: {
    renderAs: {},
    backgroundColor: {},
    iconConfig: {},
    propertyValue: {},
    imageUrl: {},
    imageSize: { default: 32 },
    isRound: { type: Boolean, default: !1 },
    isSolid: { type: Boolean, default: !1 },
    isSelected: { type: Boolean, default: !1 },
    selectionColor: { default: "#ff0000" }
  },
  setup(o) {
    return (i, n) => (V(), ie(Re, null, [
      o.renderAs === "icon" ? (V(), ie("div", {
        key: 0,
        style: fa({
          background: o.isSelected ? o.selectionColor : o.backgroundColor
        }),
        class: as(["pin", "icon", { round: o.isRound, solid: o.isSolid }])
      }, [
        ue("div", cT, [
          o.iconConfig ? (V(), Ze(Oe(wp), {
            key: 0,
            configv: o.iconConfig
          }, null, 8, ["configv"])) : Ge("", !0)
        ]),
        ue("div", hT, [
          el(i.$slots, "observation", {}, void 0, !0)
        ])
      ], 6)) : Ge("", !0),
      o.renderAs === "prop" ? (V(), ie("div", {
        key: 1,
        style: fa({
          background: o.isSelected ? o.selectionColor : o.backgroundColor
        }),
        class: as(["pin", "contain", "marker", { round: o.isRound, solid: o.isSolid }])
      }, [
        ue("div", dT, yt(o.propertyValue), 1),
        ue("div", fT, [
          el(i.$slots, "observation", {}, void 0, !0)
        ])
      ], 6)) : Ge("", !0),
      o.renderAs === "image" ? (V(), ie(Re, { key: 2 }, [
        ue("div", {
          class: "image-marker",
          style: fa({
            width: `${o.imageSize}px`,
            height: `${o.imageSize}px`,
            background: o.isSelected ? o.selectionColor : void 0,
            borderRadius: o.isSelected ? "50%" : void 0,
            padding: o.isSelected ? "4px" : void 0
          })
        }, [
          o.imageUrl ? (V(), ie("img", {
            key: 0,
            src: o.imageUrl,
            style: { width: "100%", height: "100%", objectFit: "contain" }
          }, null, 8, pT)) : Ge("", !0)
        ], 4),
        el(i.$slots, "observation", {}, void 0, !0)
      ], 64)) : Ge("", !0),
      o.renderAs === "none" ? el(i.$slots, "observation", { key: 3 }, void 0, !0) : Ge("", !0)
    ], 64));
  }
}), mr = (o, i) => {
  const n = o.__vccOpts || o;
  for (const [l, d] of i)
    n[l] = d;
  return n;
}, yl = /* @__PURE__ */ mr(_T, [["__scopeId", "data-v-dc572ab0"]]), gT = /* @__PURE__ */ st({
  __name: "GeoJsonLayer",
  props: {
    layerData: {},
    styleIds: {},
    layerOptions: {},
    markerPane: {},
    filterFeatureCollection: { type: Function },
    getStyleById: { type: Function },
    isPoint: { type: Function },
    getPoint: { type: Function }
  },
  setup(o) {
    return (i, n) => (V(!0), ie(Re, null, Yt(o.styleIds, (l) => (V(), ie(Re, { key: l }, [
      (V(!0), ie(Re, null, Yt(o.filterFeatureCollection(o.layerData, o.getStyleById(l)).features, (d) => (V(), ie(Re, {
        key: d.id
      }, [
        o.isPoint(d.geometry) ? Ge("", !0) : (V(), Ze(Oe(Fo), {
          key: 0,
          ref_for: !0,
          ref: "geojsonLayer",
          geojson: d,
          options: o.layerOptions,
          "options-style": () => o.getStyleById(l)?.renderer.area
        }, null, 8, ["geojson", "options", "options-style"])),
        o.getPoint(d.geometry) ? (V(), Ze(Oe(gl), {
          key: 1,
          "lat-lng": o.getPoint(d.geometry),
          options: { pane: o.markerPane }
        }, {
          default: Ae(() => [
            le(Oe(_l), { "class-name": "someExtraClass" }, {
              default: Ae(() => [
                le(yl, {
                  "render-as": o.getStyleById(l)?.renderer.point_render_as,
                  "background-color": o.getStyleById(l)?.renderer.pointPin?.color,
                  "icon-config": o.getStyleById(l)?.renderer.point,
                  "property-value": d.properties?.[o.getStyleById(l)?.renderer.point_prop ?? ""],
                  "image-url": o.getStyleById(l)?.renderer.point_image_url,
                  "image-size": o.getStyleById(l)?.renderer.point_image_size || 32,
                  "is-solid": o.getStyleById(l)?.renderer.pointPin?.solid
                }, null, 8, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size", "is-solid"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["lat-lng", "options"])) : Ge("", !0)
      ], 64))), 128))
    ], 64))), 128));
  }
}), mT = /* @__PURE__ */ st({
  __name: "RestGeoJsonLayer",
  props: {
    layerData: {},
    styleIds: {},
    layerOptions: {},
    markerPane: {},
    filterFeatureCollection: { type: Function },
    getStyleById: { type: Function },
    isPoint: { type: Function },
    getPoint: { type: Function }
  },
  setup(o) {
    return (i, n) => (V(!0), ie(Re, null, Yt(o.styleIds, (l) => (V(), ie(Re, { key: l }, [
      o.layerData && o.layerData.features ? (V(), ie(Re, { key: 0 }, [
        (V(!0), ie(Re, null, Yt(o.filterFeatureCollection(o.layerData, o.getStyleById(l)).features, (d) => (V(), ie(Re, {
          key: "area-" + d.id
        }, [
          d.geometry && !o.isPoint(d.geometry) ? (V(), Ze(Oe(Fo), {
            key: 0,
            ref_for: !0,
            ref: "restGeojsonLayer",
            geojson: d,
            options: o.layerOptions,
            "options-style": () => o.getStyleById(l)?.renderer.area
          }, null, 8, ["geojson", "options", "options-style"])) : Ge("", !0)
        ], 64))), 128)),
        (V(!0), ie(Re, null, Yt(o.filterFeatureCollection(o.layerData, o.getStyleById(l)).features, (d) => (V(), ie(Re, {
          key: "point-" + d.id
        }, [
          d.geometry && o.isPoint(d.geometry) && o.getPoint(d.geometry) ? (V(), Ze(Oe(gl), {
            key: 0,
            "lat-lng": o.getPoint(d.geometry),
            options: { pane: o.markerPane }
          }, {
            default: Ae(() => [
              le(Oe(_l), { "class-name": "someExtraClass" }, {
                default: Ae(() => [
                  le(yl, {
                    "render-as": o.getStyleById(l)?.renderer.point_render_as,
                    "background-color": o.getStyleById(l)?.renderer.pointPin?.color,
                    "icon-config": o.getStyleById(l)?.renderer.point,
                    "property-value": d.properties?.[o.getStyleById(l)?.renderer.point_prop ?? ""],
                    "image-url": o.getStyleById(l)?.renderer.point_image_url,
                    "image-size": o.getStyleById(l)?.renderer.point_image_size || 32,
                    "is-solid": o.getStyleById(l)?.renderer.pointPin?.solid
                  }, null, 8, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size", "is-solid"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["lat-lng", "options"])) : Ge("", !0)
        ], 64))), 128))
      ], 64)) : Ge("", !0)
    ], 64))), 128));
  }
});
var Po = /* @__PURE__ */ ((o) => (o.Thing = "Thing", o.OberservedArea = "OberservedArea", o))(Po || {}), Rr = /* @__PURE__ */ ((o) => (o.equals = "eq", o.lessThen = "lt", o.greaterThen = "gt", o.lessThenEquals = "lte", o.greaterThenEquals = "gte", o.notEQuals = "neq", o))(Rr || {});
class Te extends gr {
  constructor() {
    super(...arguments), this._baseMapUrl = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", this._zoom = 14, this._selectionHighlightColor = "#ff0000";
  }
  static {
    this.DATASOURCE_ID = 0;
  }
  static {
    this.DATASOURCE_IDS = 1;
  }
  static {
    this.BASE_MAP_URL = 2;
  }
  static {
    this.ZOOM = 3;
  }
  static {
    this.CENTER = 4;
  }
  static {
    this.ATTRIBUTION = 5;
  }
  static {
    this.LAYERS = 6;
  }
  static {
    this.STYLES = 7;
  }
  static {
    this.O_G_C_SSTYLES = 8;
  }
  static {
    this.SERVICES = 9;
  }
  static {
    this.FIXED = 10;
  }
  static {
    this.ENABLE_CLUSTERING = 11;
  }
  static {
    this.SELECTION_HIGHLIGHT_COLOR = 12;
  }
  static {
    this.SELECTED_THING_ID = 13;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.MAP_SETTINGS;
  }
  // Getters and Setters
  get datasourceId() {
    return this._datasourceId;
  }
  set datasourceId(i) {
    const n = this._datasourceId;
    this._datasourceId = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Te.DATASOURCE_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Te.DATASOURCE_ID,
      merge: () => !1
    });
  }
  get datasourceIds() {
    return this._datasourceIds || (this._datasourceIds = Vu(this, this.eClass().getEStructuralFeature("datasourceIds"))), this._datasourceIds;
  }
  get baseMapUrl() {
    return this._baseMapUrl;
  }
  set baseMapUrl(i) {
    const n = this._baseMapUrl;
    this._baseMapUrl = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Te.BASE_MAP_URL),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Te.BASE_MAP_URL,
      merge: () => !1
    });
  }
  get zoom() {
    return this._zoom;
  }
  set zoom(i) {
    const n = this._zoom;
    this._zoom = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Te.ZOOM),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Te.ZOOM,
      merge: () => !1
    });
  }
  get center() {
    return this._center || (this._center = Vu(this, this.eClass().getEStructuralFeature("center"))), this._center;
  }
  get attribution() {
    return this._attribution;
  }
  set attribution(i) {
    const n = this._attribution;
    this._attribution = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Te.ATTRIBUTION),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Te.ATTRIBUTION,
      merge: () => !1
    });
  }
  get layers() {
    return this._layers || (this._layers = os(this, this.eClass().getEStructuralFeature("layers"))), this._layers;
  }
  get styles() {
    return this._styles || (this._styles = os(this, this.eClass().getEStructuralFeature("styles"))), this._styles;
  }
  get OGCSstyles() {
    return this._OGCSstyles || (this._OGCSstyles = os(this, this.eClass().getEStructuralFeature("OGCSstyles"))), this._OGCSstyles;
  }
  get services() {
    return this._services || (this._services = os(this, this.eClass().getEStructuralFeature("services"))), this._services;
  }
  get fixed() {
    return this._fixed;
  }
  set fixed(i) {
    const n = this._fixed;
    this._fixed = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Te.FIXED),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Te.FIXED,
      merge: () => !1
    });
  }
  get enableClustering() {
    return this._enableClustering;
  }
  set enableClustering(i) {
    const n = this._enableClustering;
    this._enableClustering = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Te.ENABLE_CLUSTERING),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Te.ENABLE_CLUSTERING,
      merge: () => !1
    });
  }
  get selectionHighlightColor() {
    return this._selectionHighlightColor;
  }
  set selectionHighlightColor(i) {
    const n = this._selectionHighlightColor;
    this._selectionHighlightColor = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Te.SELECTION_HIGHLIGHT_COLOR),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Te.SELECTION_HIGHLIGHT_COLOR,
      merge: () => !1
    });
  }
  get selectedThingId() {
    return this._selectedThingId;
  }
  set selectedThingId(i) {
    const n = this._selectedThingId;
    this._selectedThingId = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Te.SELECTED_THING_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Te.SELECTED_THING_ID,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Te.DATASOURCE_ID:
        return this.datasourceId;
      case Te.DATASOURCE_IDS:
        return this.datasourceIds;
      case Te.BASE_MAP_URL:
        return this.baseMapUrl;
      case Te.ZOOM:
        return this.zoom;
      case Te.CENTER:
        return this.center;
      case Te.ATTRIBUTION:
        return this.attribution;
      case Te.LAYERS:
        return this.layers;
      case Te.STYLES:
        return this.styles;
      case Te.O_G_C_SSTYLES:
        return this.OGCSstyles;
      case Te.SERVICES:
        return this.services;
      case Te.FIXED:
        return this.fixed;
      case Te.ENABLE_CLUSTERING:
        return this.enableClustering;
      case Te.SELECTION_HIGHLIGHT_COLOR:
        return this.selectionHighlightColor;
      case Te.SELECTED_THING_ID:
        return this.selectedThingId;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case Te.DATASOURCE_ID:
        this.datasourceId = n, super.eSet(i, n);
        break;
      case Te.DATASOURCE_IDS:
        this.datasourceIds.clear(), this.datasourceIds.addAll(n), super.eSet(i, n);
        break;
      case Te.BASE_MAP_URL:
        this.baseMapUrl = n, super.eSet(i, n);
        break;
      case Te.ZOOM:
        this.zoom = n, super.eSet(i, n);
        break;
      case Te.CENTER:
        this.center.clear(), this.center.addAll(n), super.eSet(i, n);
        break;
      case Te.ATTRIBUTION:
        this.attribution = n, super.eSet(i, n);
        break;
      case Te.LAYERS:
        this.layers.clear(), this.layers.addAll(n), super.eSet(i, n);
        break;
      case Te.STYLES:
        this.styles.clear(), this.styles.addAll(n), super.eSet(i, n);
        break;
      case Te.O_G_C_SSTYLES:
        this.OGCSstyles.clear(), this.OGCSstyles.addAll(n), super.eSet(i, n);
        break;
      case Te.SERVICES:
        this.services.clear(), this.services.addAll(n), super.eSet(i, n);
        break;
      case Te.FIXED:
        this.fixed = n, super.eSet(i, n);
        break;
      case Te.ENABLE_CLUSTERING:
        this.enableClustering = n, super.eSet(i, n);
        break;
      case Te.SELECTION_HIGHLIGHT_COLOR:
        this.selectionHighlightColor = n, super.eSet(i, n);
        break;
      case Te.SELECTED_THING_ID:
        this.selectedThingId = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Te.DATASOURCE_ID:
        return this._datasourceId !== void 0;
      case Te.DATASOURCE_IDS:
        return this._datasourceIds !== void 0 && !this._datasourceIds.isEmpty();
      case Te.BASE_MAP_URL:
        return this._baseMapUrl !== "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
      case Te.ZOOM:
        return this._zoom !== 14;
      case Te.CENTER:
        return this._center !== void 0 && !this._center.isEmpty();
      case Te.ATTRIBUTION:
        return this._attribution !== void 0;
      case Te.LAYERS:
        return this._layers !== void 0 && !this._layers.isEmpty();
      case Te.STYLES:
        return this._styles !== void 0 && !this._styles.isEmpty();
      case Te.O_G_C_SSTYLES:
        return this._OGCSstyles !== void 0 && !this._OGCSstyles.isEmpty();
      case Te.SERVICES:
        return this._services !== void 0 && !this._services.isEmpty();
      case Te.FIXED:
        return this._fixed !== void 0;
      case Te.ENABLE_CLUSTERING:
        return this._enableClustering !== void 0;
      case Te.SELECTION_HIGHLIGHT_COLOR:
        return this._selectionHighlightColor !== "#ff0000";
      case Te.SELECTED_THING_ID:
        return this._selectedThingId !== void 0;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Te.DATASOURCE_ID:
        this._datasourceId = void 0;
        return;
      case Te.DATASOURCE_IDS:
        this._datasourceIds && this._datasourceIds.clear();
        return;
      case Te.BASE_MAP_URL:
        this._baseMapUrl = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
        return;
      case Te.ZOOM:
        this._zoom = 14;
        return;
      case Te.CENTER:
        this._center && this._center.clear();
        return;
      case Te.ATTRIBUTION:
        this._attribution = void 0;
        return;
      case Te.LAYERS:
        this._layers && this._layers.clear();
        return;
      case Te.STYLES:
        this._styles && this._styles.clear();
        return;
      case Te.O_G_C_SSTYLES:
        this._OGCSstyles && this._OGCSstyles.clear();
        return;
      case Te.SERVICES:
        this._services && this._services.clear();
        return;
      case Te.FIXED:
        this._fixed = void 0;
        return;
      case Te.ENABLE_CLUSTERING:
        this._enableClustering = void 0;
        return;
      case Te.SELECTION_HIGHLIGHT_COLOR:
        this._selectionHighlightColor = "#ff0000";
        return;
      case Te.SELECTED_THING_ID:
        this._selectedThingId = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
}
class be extends gr {
  static {
    this.DATASOURCE_ID = 0;
  }
  static {
    this.SERVICE = 1;
  }
  static {
    this.TYPE = 2;
  }
  static {
    this.CHILDS = 3;
  }
  static {
    this.LEVEL = 4;
  }
  static {
    this.STYLE_IDS = 5;
  }
  static {
    this.NAME = 6;
  }
  static {
    this.TITLE = 7;
  }
  static {
    this.ATTRIBUTION = 8;
  }
  static {
    this.GEO_JSON = 9;
  }
  static {
    this.WFS_SERVICE = 10;
  }
  static {
    this.OPACITY = 11;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.LAYER;
  }
  // Getters and Setters
  get datasourceId() {
    return this._datasourceId;
  }
  set datasourceId(i) {
    const n = this._datasourceId;
    this._datasourceId = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(be.DATASOURCE_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => be.DATASOURCE_ID,
      merge: () => !1
    });
  }
  get service() {
    return this._service;
  }
  set service(i) {
    const n = this._service;
    this._service = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(be.SERVICE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => be.SERVICE,
      merge: () => !1
    });
  }
  get type() {
    return this._type;
  }
  set type(i) {
    const n = this._type;
    this._type = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(be.TYPE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => be.TYPE,
      merge: () => !1
    });
  }
  get childs() {
    return this._childs;
  }
  set childs(i) {
    const n = this._childs;
    this._childs = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(be.CHILDS),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => be.CHILDS,
      merge: () => !1
    });
  }
  get level() {
    return this._level;
  }
  set level(i) {
    const n = this._level;
    this._level = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(be.LEVEL),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => be.LEVEL,
      merge: () => !1
    });
  }
  get styleIds() {
    return this._styleIds || (this._styleIds = Vu(this, this.eClass().getEStructuralFeature("styleIds"))), this._styleIds;
  }
  get name() {
    return this._name;
  }
  set name(i) {
    const n = this._name;
    this._name = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(be.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => be.NAME,
      merge: () => !1
    });
  }
  get title() {
    return this._title;
  }
  set title(i) {
    const n = this._title;
    this._title = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(be.TITLE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => be.TITLE,
      merge: () => !1
    });
  }
  get attribution() {
    return this._attribution;
  }
  set attribution(i) {
    const n = this._attribution;
    this._attribution = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(be.ATTRIBUTION),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => be.ATTRIBUTION,
      merge: () => !1
    });
  }
  get geoJson() {
    return this._geoJson;
  }
  set geoJson(i) {
    const n = this._geoJson;
    this._geoJson = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(be.GEO_JSON),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => be.GEO_JSON,
      merge: () => !1
    });
  }
  get wfs_service() {
    return this._wfs_service;
  }
  set wfs_service(i) {
    const n = this._wfs_service;
    this._wfs_service = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(be.WFS_SERVICE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => be.WFS_SERVICE,
      merge: () => !1
    });
  }
  get opacity() {
    return this._opacity;
  }
  set opacity(i) {
    const n = this._opacity;
    this._opacity = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(be.OPACITY),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => be.OPACITY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case be.DATASOURCE_ID:
        return this.datasourceId;
      case be.SERVICE:
        return this.service;
      case be.TYPE:
        return this.type;
      case be.CHILDS:
        return this.childs;
      case be.LEVEL:
        return this.level;
      case be.STYLE_IDS:
        return this.styleIds;
      case be.NAME:
        return this.name;
      case be.TITLE:
        return this.title;
      case be.ATTRIBUTION:
        return this.attribution;
      case be.GEO_JSON:
        return this.geoJson;
      case be.WFS_SERVICE:
        return this.wfs_service;
      case be.OPACITY:
        return this.opacity;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case be.DATASOURCE_ID:
        this.datasourceId = n, super.eSet(i, n);
        break;
      case be.SERVICE:
        this.service = n, super.eSet(i, n);
        break;
      case be.TYPE:
        this.type = n, super.eSet(i, n);
        break;
      case be.CHILDS:
        this.childs = n, super.eSet(i, n);
        break;
      case be.LEVEL:
        this.level = n, super.eSet(i, n);
        break;
      case be.STYLE_IDS:
        this.styleIds.clear(), this.styleIds.addAll(n), super.eSet(i, n);
        break;
      case be.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case be.TITLE:
        this.title = n, super.eSet(i, n);
        break;
      case be.ATTRIBUTION:
        this.attribution = n, super.eSet(i, n);
        break;
      case be.GEO_JSON:
        this.geoJson = n, super.eSet(i, n);
        break;
      case be.WFS_SERVICE:
        this.wfs_service = n, super.eSet(i, n);
        break;
      case be.OPACITY:
        this.opacity = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case be.DATASOURCE_ID:
        return this._datasourceId !== void 0;
      case be.SERVICE:
        return this._service !== void 0;
      case be.TYPE:
        return this._type !== void 0;
      case be.CHILDS:
        return this._childs !== void 0;
      case be.LEVEL:
        return this._level !== void 0;
      case be.STYLE_IDS:
        return this._styleIds !== void 0 && !this._styleIds.isEmpty();
      case be.NAME:
        return this._name !== void 0;
      case be.TITLE:
        return this._title !== void 0;
      case be.ATTRIBUTION:
        return this._attribution !== void 0;
      case be.GEO_JSON:
        return this._geoJson !== void 0;
      case be.WFS_SERVICE:
        return this._wfs_service !== void 0;
      case be.OPACITY:
        return this._opacity !== void 0;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case be.DATASOURCE_ID:
        this._datasourceId = void 0;
        return;
      case be.SERVICE:
        this._service = void 0;
        return;
      case be.TYPE:
        this._type = void 0;
        return;
      case be.CHILDS:
        this._childs = void 0;
        return;
      case be.LEVEL:
        this._level = void 0;
        return;
      case be.STYLE_IDS:
        this._styleIds && this._styleIds.clear();
        return;
      case be.NAME:
        this._name = void 0;
        return;
      case be.TITLE:
        this._title = void 0;
        return;
      case be.ATTRIBUTION:
        this._attribution = void 0;
        return;
      case be.GEO_JSON:
        this._geoJson = void 0;
        return;
      case be.WFS_SERVICE:
        this._wfs_service = void 0;
        return;
      case be.OPACITY:
        this._opacity = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
}
class Ht extends gr {
  static {
    this.TYPE = 0;
  }
  static {
    this.URL = 1;
  }
  static {
    this.SERVICE = 2;
  }
  static {
    this.ID = 3;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.SERVICE;
  }
  // Getters and Setters
  get type() {
    return this._type;
  }
  set type(i) {
    const n = this._type;
    this._type = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ht.TYPE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ht.TYPE,
      merge: () => !1
    });
  }
  get url() {
    return this._url;
  }
  set url(i) {
    const n = this._url;
    this._url = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ht.URL),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ht.URL,
      merge: () => !1
    });
  }
  get service() {
    return this._service;
  }
  set service(i) {
    const n = this._service;
    this._service = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ht.SERVICE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ht.SERVICE,
      merge: () => !1
    });
  }
  get id() {
    return this._id;
  }
  set id(i) {
    const n = this._id;
    this._id = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ht.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ht.ID,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ht.TYPE:
        return this.type;
      case Ht.URL:
        return this.url;
      case Ht.SERVICE:
        return this.service;
      case Ht.ID:
        return this.id;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case Ht.TYPE:
        this.type = n, super.eSet(i, n);
        break;
      case Ht.URL:
        this.url = n, super.eSet(i, n);
        break;
      case Ht.SERVICE:
        this.service = n, super.eSet(i, n);
        break;
      case Ht.ID:
        this.id = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ht.TYPE:
        return this._type !== void 0;
      case Ht.URL:
        return this._url !== void 0;
      case Ht.SERVICE:
        return this._service !== void 0;
      case Ht.ID:
        return this._id !== void 0;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ht.TYPE:
        this._type = void 0;
        return;
      case Ht.URL:
        this._url = void 0;
        return;
      case Ht.SERVICE:
        this._service = void 0;
        return;
      case Ht.ID:
        this._id = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
}
class $e extends gr {
  constructor() {
    super(...arguments), this._iconColor = new oh();
  }
  static {
    this.CURRENT_ICON = 0;
  }
  static {
    this.ICON_COLOR = 1;
  }
  static {
    this.ICON_SIZE = 2;
  }
  static {
    this.IS_ICON_FILLED = 3;
  }
  static {
    this.STROKE_WEIGHT = 4;
  }
  static {
    this.OPTIC_SIZE = 5;
  }
  static {
    this.GRADE = 6;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.ICON_SETTINGS;
  }
  // Getters and Setters
  get currentIcon() {
    return this._currentIcon;
  }
  set currentIcon(i) {
    const n = this._currentIcon;
    this._currentIcon = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($e.CURRENT_ICON),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $e.CURRENT_ICON,
      merge: () => !1
    });
  }
  get iconColor() {
    return this._iconColor;
  }
  set iconColor(i) {
    const n = this._iconColor;
    this._iconColor = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($e.ICON_COLOR),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $e.ICON_COLOR,
      merge: () => !1
    });
  }
  get iconSize() {
    return this._iconSize;
  }
  set iconSize(i) {
    const n = this._iconSize;
    this._iconSize = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($e.ICON_SIZE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $e.ICON_SIZE,
      merge: () => !1
    });
  }
  get isIconFilled() {
    return this._isIconFilled;
  }
  set isIconFilled(i) {
    const n = this._isIconFilled;
    this._isIconFilled = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($e.IS_ICON_FILLED),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $e.IS_ICON_FILLED,
      merge: () => !1
    });
  }
  get strokeWeight() {
    return this._strokeWeight;
  }
  set strokeWeight(i) {
    const n = this._strokeWeight;
    this._strokeWeight = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($e.STROKE_WEIGHT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $e.STROKE_WEIGHT,
      merge: () => !1
    });
  }
  get opticSize() {
    return this._opticSize;
  }
  set opticSize(i) {
    const n = this._opticSize;
    this._opticSize = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($e.OPTIC_SIZE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $e.OPTIC_SIZE,
      merge: () => !1
    });
  }
  get grade() {
    return this._grade;
  }
  set grade(i) {
    const n = this._grade;
    this._grade = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature($e.GRADE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => $e.GRADE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case $e.CURRENT_ICON:
        return this.currentIcon;
      case $e.ICON_COLOR:
        return this.iconColor;
      case $e.ICON_SIZE:
        return this.iconSize;
      case $e.IS_ICON_FILLED:
        return this.isIconFilled;
      case $e.STROKE_WEIGHT:
        return this.strokeWeight;
      case $e.OPTIC_SIZE:
        return this.opticSize;
      case $e.GRADE:
        return this.grade;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case $e.CURRENT_ICON:
        this.currentIcon = n, super.eSet(i, n);
        break;
      case $e.ICON_COLOR:
        this.iconColor = n, super.eSet(i, n);
        break;
      case $e.ICON_SIZE:
        this.iconSize = n, super.eSet(i, n);
        break;
      case $e.IS_ICON_FILLED:
        this.isIconFilled = n, super.eSet(i, n);
        break;
      case $e.STROKE_WEIGHT:
        this.strokeWeight = n, super.eSet(i, n);
        break;
      case $e.OPTIC_SIZE:
        this.opticSize = n, super.eSet(i, n);
        break;
      case $e.GRADE:
        this.grade = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case $e.CURRENT_ICON:
        return this._currentIcon !== void 0;
      case $e.ICON_COLOR:
        return this._iconColor !== new oh();
      case $e.ICON_SIZE:
        return this._iconSize !== void 0;
      case $e.IS_ICON_FILLED:
        return this._isIconFilled !== void 0;
      case $e.STROKE_WEIGHT:
        return this._strokeWeight !== void 0;
      case $e.OPTIC_SIZE:
        return this._opticSize !== void 0;
      case $e.GRADE:
        return this._grade !== void 0;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case $e.CURRENT_ICON:
        this._currentIcon = void 0;
        return;
      case $e.ICON_COLOR:
        this._iconColor = new oh();
        return;
      case $e.ICON_SIZE:
        this._iconSize = void 0;
        return;
      case $e.IS_ICON_FILLED:
        this._isIconFilled = void 0;
        return;
      case $e.STROKE_WEIGHT:
        this._strokeWeight = void 0;
        return;
      case $e.OPTIC_SIZE:
        this._opticSize = void 0;
        return;
      case $e.GRADE:
        this._grade = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
}
class Qi extends gr {
  static {
    this.COLOR = 0;
  }
  static {
    this.SOLID = 1;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.POINT_PIN;
  }
  // Getters and Setters
  get color() {
    return this._color;
  }
  set color(i) {
    const n = this._color;
    this._color = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Qi.COLOR),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Qi.COLOR,
      merge: () => !1
    });
  }
  get solid() {
    return this._solid;
  }
  set solid(i) {
    const n = this._solid;
    this._solid = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Qi.SOLID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Qi.SOLID,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Qi.COLOR:
        return this.color;
      case Qi.SOLID:
        return this.solid;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case Qi.COLOR:
        this.color = n, super.eSet(i, n);
        break;
      case Qi.SOLID:
        this.solid = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Qi.COLOR:
        return this._color !== void 0;
      case Qi.SOLID:
        return this._solid !== void 0;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Qi.COLOR:
        this._color = void 0;
        return;
      case Qi.SOLID:
        this._solid = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
}
class et extends gr {
  static {
    this.SHOW__SUB_ELEMENTS = 0;
  }
  static {
    this.POINT_RENDER_AS = 1;
  }
  static {
    this.POINT_PROP = 2;
  }
  static {
    this.POINT = 3;
  }
  static {
    this.POINT_PIN = 4;
  }
  static {
    this.AREA = 5;
  }
  static {
    this.LABEL = 6;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.POINT_AND_AREA_SETTINGS;
  }
  // Getters and Setters
  get show_SubElements() {
    return this._show_SubElements;
  }
  set show_SubElements(i) {
    const n = this._show_SubElements;
    this._show_SubElements = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(et.SHOW__SUB_ELEMENTS),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => et.SHOW__SUB_ELEMENTS,
      merge: () => !1
    });
  }
  get point_render_as() {
    return this._point_render_as;
  }
  set point_render_as(i) {
    const n = this._point_render_as;
    this._point_render_as = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(et.POINT_RENDER_AS),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => et.POINT_RENDER_AS,
      merge: () => !1
    });
  }
  get point_prop() {
    return this._point_prop;
  }
  set point_prop(i) {
    const n = this._point_prop;
    this._point_prop = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(et.POINT_PROP),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => et.POINT_PROP,
      merge: () => !1
    });
  }
  get point() {
    return this._point;
  }
  set point(i) {
    const n = this._point;
    this._point = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(et.POINT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => et.POINT,
      merge: () => !1
    });
  }
  get pointPin() {
    return this._pointPin;
  }
  set pointPin(i) {
    const n = this._pointPin;
    this._pointPin = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(et.POINT_PIN),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => et.POINT_PIN,
      merge: () => !1
    });
  }
  get area() {
    return this._area;
  }
  set area(i) {
    const n = this._area;
    this._area = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(et.AREA),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => et.AREA,
      merge: () => !1
    });
  }
  get label() {
    return this._label;
  }
  set label(i) {
    const n = this._label;
    this._label = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(et.LABEL),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => et.LABEL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case et.SHOW__SUB_ELEMENTS:
        return this.show_SubElements;
      case et.POINT_RENDER_AS:
        return this.point_render_as;
      case et.POINT_PROP:
        return this.point_prop;
      case et.POINT:
        return this.point;
      case et.POINT_PIN:
        return this.pointPin;
      case et.AREA:
        return this.area;
      case et.LABEL:
        return this.label;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case et.SHOW__SUB_ELEMENTS:
        this.show_SubElements = n, super.eSet(i, n);
        break;
      case et.POINT_RENDER_AS:
        this.point_render_as = n, super.eSet(i, n);
        break;
      case et.POINT_PROP:
        this.point_prop = n, super.eSet(i, n);
        break;
      case et.POINT:
        this.point = n, super.eSet(i, n);
        break;
      case et.POINT_PIN:
        this.pointPin = n, super.eSet(i, n);
        break;
      case et.AREA:
        this.area = n, super.eSet(i, n);
        break;
      case et.LABEL:
        this.label = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case et.SHOW__SUB_ELEMENTS:
        return this._show_SubElements !== void 0;
      case et.POINT_RENDER_AS:
        return this._point_render_as !== void 0;
      case et.POINT_PROP:
        return this._point_prop !== void 0;
      case et.POINT:
        return this._point !== void 0;
      case et.POINT_PIN:
        return this._pointPin !== void 0;
      case et.AREA:
        return this._area !== void 0;
      case et.LABEL:
        return this._label !== void 0;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case et.SHOW__SUB_ELEMENTS:
        this._show_SubElements = void 0;
        return;
      case et.POINT_RENDER_AS:
        this._point_render_as = void 0;
        return;
      case et.POINT_PROP:
        this._point_prop = void 0;
        return;
      case et.POINT:
        this._point = void 0;
        return;
      case et.POINT_PIN:
        this._pointPin = void 0;
        return;
      case et.AREA:
        this._area = void 0;
        return;
      case et.LABEL:
        this._label = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
}
const pa = {
  Thing: "Thing"
};
class bt extends gr {
  constructor() {
    super(...arguments), this._placement = pa.Thing;
  }
  static {
    this.NAME = 0;
  }
  static {
    this.DATASTREAM = 1;
  }
  static {
    this.OBSERVATIONS = 2;
  }
  static {
    this.RENDERER = 3;
  }
  static {
    this.ID = 4;
  }
  static {
    this.PLACEMENT = 5;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.D_S_RENDERER;
  }
  // Getters and Setters
  get name() {
    return this._name;
  }
  set name(i) {
    const n = this._name;
    this._name = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(bt.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => bt.NAME,
      merge: () => !1
    });
  }
  get datastream() {
    return this._datastream || (this._datastream = os(this, this.eClass().getEStructuralFeature("datastream"))), this._datastream;
  }
  get observations() {
    return this._observations || (this._observations = os(this, this.eClass().getEStructuralFeature("observations"))), this._observations;
  }
  get renderer() {
    return this._renderer;
  }
  set renderer(i) {
    const n = this._renderer;
    this._renderer = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(bt.RENDERER),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => bt.RENDERER,
      merge: () => !1
    });
  }
  get id() {
    return this._id;
  }
  set id(i) {
    const n = this._id;
    this._id = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(bt.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => bt.ID,
      merge: () => !1
    });
  }
  get placement() {
    return this._placement;
  }
  set placement(i) {
    const n = this._placement;
    this._placement = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(bt.PLACEMENT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => bt.PLACEMENT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case bt.NAME:
        return this.name;
      case bt.DATASTREAM:
        return this.datastream;
      case bt.OBSERVATIONS:
        return this.observations;
      case bt.RENDERER:
        return this.renderer;
      case bt.ID:
        return this.id;
      case bt.PLACEMENT:
        return this.placement;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case bt.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case bt.DATASTREAM:
        this.datastream.clear(), this.datastream.addAll(n), super.eSet(i, n);
        break;
      case bt.OBSERVATIONS:
        this.observations.clear(), this.observations.addAll(n), super.eSet(i, n);
        break;
      case bt.RENDERER:
        this.renderer = n, super.eSet(i, n);
        break;
      case bt.ID:
        this.id = n, super.eSet(i, n);
        break;
      case bt.PLACEMENT:
        this.placement = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case bt.NAME:
        return this._name !== void 0;
      case bt.DATASTREAM:
        return this._datastream !== void 0 && !this._datastream.isEmpty();
      case bt.OBSERVATIONS:
        return this._observations !== void 0 && !this._observations.isEmpty();
      case bt.RENDERER:
        return this._renderer !== void 0;
      case bt.ID:
        return this._id !== void 0;
      case bt.PLACEMENT:
        return this._placement !== pa.Thing;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case bt.NAME:
        this._name = void 0;
        return;
      case bt.DATASTREAM:
        this._datastream && this._datastream.clear();
        return;
      case bt.OBSERVATIONS:
        this._observations && this._observations.clear();
        return;
      case bt.RENDERER:
        this._renderer = void 0;
        return;
      case bt.ID:
        this._id = void 0;
        return;
      case bt.PLACEMENT:
        this._placement = pa.Thing;
        return;
      default:
        super.eUnset(i);
    }
  }
}
class js extends gr {
  constructor() {
    super(...arguments), this._placement = pa.Thing;
  }
  static {
    this.PLACEMENT = 0;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.PLACEMENT;
  }
  // Getters and Setters
  get placement() {
    return this._placement;
  }
  set placement(i) {
    const n = this._placement;
    this._placement = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(js.PLACEMENT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => js.PLACEMENT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case js.PLACEMENT:
        return this.placement;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case js.PLACEMENT:
        this.placement = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case js.PLACEMENT:
        return this._placement !== pa.Thing;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case js.PLACEMENT:
        this._placement = pa.Thing;
        return;
      default:
        super.eUnset(i);
    }
  }
}
class sn extends gr {
  static {
    this.SETTING = 0;
  }
  static {
    this.COMPONENT = 1;
  }
  static {
    this.RENDERER = 2;
  }
  static {
    this.CONDITIONS = 3;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.OBSERVATION;
  }
  // Getters and Setters
  get setting() {
    return this._setting;
  }
  set setting(i) {
    const n = this._setting;
    this._setting = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(sn.SETTING),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => sn.SETTING,
      merge: () => !1
    });
  }
  get component() {
    return this._component;
  }
  set component(i) {
    const n = this._component;
    this._component = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(sn.COMPONENT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => sn.COMPONENT,
      merge: () => !1
    });
  }
  get renderer() {
    return this._renderer;
  }
  set renderer(i) {
    const n = this._renderer;
    this._renderer = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(sn.RENDERER),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => sn.RENDERER,
      merge: () => !1
    });
  }
  get conditions() {
    return this._conditions || (this._conditions = os(this, this.eClass().getEStructuralFeature("conditions"))), this._conditions;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case sn.SETTING:
        return this.setting;
      case sn.COMPONENT:
        return this.component;
      case sn.RENDERER:
        return this.renderer;
      case sn.CONDITIONS:
        return this.conditions;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case sn.SETTING:
        this.setting = n, super.eSet(i, n);
        break;
      case sn.COMPONENT:
        this.component = n, super.eSet(i, n);
        break;
      case sn.RENDERER:
        this.renderer = n, super.eSet(i, n);
        break;
      case sn.CONDITIONS:
        this.conditions.clear(), this.conditions.addAll(n), super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case sn.SETTING:
        return this._setting !== void 0;
      case sn.COMPONENT:
        return this._component !== void 0;
      case sn.RENDERER:
        return this._renderer !== void 0;
      case sn.CONDITIONS:
        return this._conditions !== void 0 && !this._conditions.isEmpty();
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case sn.SETTING:
        this._setting = void 0;
        return;
      case sn.COMPONENT:
        this._component = void 0;
        return;
      case sn.RENDERER:
        this._renderer = void 0;
        return;
      case sn.CONDITIONS:
        this._conditions && this._conditions.clear();
        return;
      default:
        super.eUnset(i);
    }
  }
}
class Bn extends gr {
  constructor() {
    super(...arguments), this._comperator = rs.eq;
  }
  static {
    this.PROP = 0;
  }
  static {
    this.COMPERATOR = 1;
  }
  static {
    this.VALUE = 2;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.CONDITION;
  }
  // Getters and Setters
  get prop() {
    return this._prop;
  }
  set prop(i) {
    const n = this._prop;
    this._prop = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Bn.PROP),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Bn.PROP,
      merge: () => !1
    });
  }
  get comperator() {
    return this._comperator;
  }
  set comperator(i) {
    const n = this._comperator;
    this._comperator = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Bn.COMPERATOR),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Bn.COMPERATOR,
      merge: () => !1
    });
  }
  get value() {
    return this._value;
  }
  set value(i) {
    const n = this._value;
    this._value = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Bn.VALUE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Bn.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Bn.PROP:
        return this.prop;
      case Bn.COMPERATOR:
        return this.comperator;
      case Bn.VALUE:
        return this.value;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case Bn.PROP:
        this.prop = n, super.eSet(i, n);
        break;
      case Bn.COMPERATOR:
        this.comperator = n, super.eSet(i, n);
        break;
      case Bn.VALUE:
        this.value = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Bn.PROP:
        return this._prop !== void 0;
      case Bn.COMPERATOR:
        return this._comperator !== rs.eq;
      case Bn.VALUE:
        return this._value !== void 0;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Bn.PROP:
        this._prop = void 0;
        return;
      case Bn.COMPERATOR:
        this._comperator = rs.eq;
        return;
      case Bn.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
}
class dt extends gr {
  static {
    this.NAME = 0;
  }
  static {
    this.THING = 1;
  }
  static {
    this.RENDERER = 2;
  }
  static {
    this.DS_RENDERER = 3;
  }
  static {
    this.OBSERVATIONREFRESH_TIME = 4;
  }
  static {
    this.LAST_UPDATE = 5;
  }
  static {
    this.ID = 6;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.RENDERER;
  }
  // Getters and Setters
  get name() {
    return this._name;
  }
  set name(i) {
    const n = this._name;
    this._name = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(dt.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => dt.NAME,
      merge: () => !1
    });
  }
  get thing() {
    return this._thing || (this._thing = os(this, this.eClass().getEStructuralFeature("thing"))), this._thing;
  }
  get renderer() {
    return this._renderer;
  }
  set renderer(i) {
    const n = this._renderer;
    this._renderer = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(dt.RENDERER),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => dt.RENDERER,
      merge: () => !1
    });
  }
  get ds_renderer() {
    return this._ds_renderer || (this._ds_renderer = os(this, this.eClass().getEStructuralFeature("ds_renderer"))), this._ds_renderer;
  }
  get ObservationrefreshTime() {
    return this._ObservationrefreshTime;
  }
  set ObservationrefreshTime(i) {
    const n = this._ObservationrefreshTime;
    this._ObservationrefreshTime = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(dt.OBSERVATIONREFRESH_TIME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => dt.OBSERVATIONREFRESH_TIME,
      merge: () => !1
    });
  }
  get lastUpdate() {
    return this._lastUpdate;
  }
  set lastUpdate(i) {
    const n = this._lastUpdate;
    this._lastUpdate = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(dt.LAST_UPDATE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => dt.LAST_UPDATE,
      merge: () => !1
    });
  }
  get id() {
    return this._id;
  }
  set id(i) {
    const n = this._id;
    this._id = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(dt.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => dt.ID,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case dt.NAME:
        return this.name;
      case dt.THING:
        return this.thing;
      case dt.RENDERER:
        return this.renderer;
      case dt.DS_RENDERER:
        return this.ds_renderer;
      case dt.OBSERVATIONREFRESH_TIME:
        return this.ObservationrefreshTime;
      case dt.LAST_UPDATE:
        return this.lastUpdate;
      case dt.ID:
        return this.id;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case dt.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case dt.THING:
        this.thing.clear(), this.thing.addAll(n), super.eSet(i, n);
        break;
      case dt.RENDERER:
        this.renderer = n, super.eSet(i, n);
        break;
      case dt.DS_RENDERER:
        this.ds_renderer.clear(), this.ds_renderer.addAll(n), super.eSet(i, n);
        break;
      case dt.OBSERVATIONREFRESH_TIME:
        this.ObservationrefreshTime = n, super.eSet(i, n);
        break;
      case dt.LAST_UPDATE:
        this.lastUpdate = n, super.eSet(i, n);
        break;
      case dt.ID:
        this.id = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case dt.NAME:
        return this._name !== void 0;
      case dt.THING:
        return this._thing !== void 0 && !this._thing.isEmpty();
      case dt.RENDERER:
        return this._renderer !== void 0;
      case dt.DS_RENDERER:
        return this._ds_renderer !== void 0 && !this._ds_renderer.isEmpty();
      case dt.OBSERVATIONREFRESH_TIME:
        return this._ObservationrefreshTime !== void 0;
      case dt.LAST_UPDATE:
        return this._lastUpdate !== void 0;
      case dt.ID:
        return this._id !== void 0;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case dt.NAME:
        this._name = void 0;
        return;
      case dt.THING:
        this._thing && this._thing.clear();
        return;
      case dt.RENDERER:
        this._renderer = void 0;
        return;
      case dt.DS_RENDERER:
        this._ds_renderer && this._ds_renderer.clear();
        return;
      case dt.OBSERVATIONREFRESH_TIME:
        this._ObservationrefreshTime = void 0;
        return;
      case dt.LAST_UPDATE:
        this._lastUpdate = void 0;
        return;
      case dt.ID:
        this._id = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
}
class Ie extends gr {
  static {
    this.STROKE = 0;
  }
  static {
    this.COLOR = 1;
  }
  static {
    this.WEIGHT = 2;
  }
  static {
    this.OPACITY = 3;
  }
  static {
    this.LINE_CAP = 4;
  }
  static {
    this.DASH_OFFSET = 5;
  }
  static {
    this.FILL = 6;
  }
  static {
    this.FILL_OPACITY = 7;
  }
  static {
    this.FILL_COLOR = 8;
  }
  static {
    this.CLASS_NAME = 9;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.MAP_PROPS;
  }
  // Getters and Setters
  get stroke() {
    return this._stroke;
  }
  set stroke(i) {
    const n = this._stroke;
    this._stroke = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ie.STROKE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ie.STROKE,
      merge: () => !1
    });
  }
  get color() {
    return this._color;
  }
  set color(i) {
    const n = this._color;
    this._color = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ie.COLOR),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ie.COLOR,
      merge: () => !1
    });
  }
  get weight() {
    return this._weight;
  }
  set weight(i) {
    const n = this._weight;
    this._weight = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ie.WEIGHT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ie.WEIGHT,
      merge: () => !1
    });
  }
  get opacity() {
    return this._opacity;
  }
  set opacity(i) {
    const n = this._opacity;
    this._opacity = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ie.OPACITY),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ie.OPACITY,
      merge: () => !1
    });
  }
  get lineCap() {
    return this._lineCap;
  }
  set lineCap(i) {
    const n = this._lineCap;
    this._lineCap = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ie.LINE_CAP),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ie.LINE_CAP,
      merge: () => !1
    });
  }
  get dashOffset() {
    return this._dashOffset;
  }
  set dashOffset(i) {
    const n = this._dashOffset;
    this._dashOffset = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ie.DASH_OFFSET),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ie.DASH_OFFSET,
      merge: () => !1
    });
  }
  get fill() {
    return this._fill;
  }
  set fill(i) {
    const n = this._fill;
    this._fill = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ie.FILL),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ie.FILL,
      merge: () => !1
    });
  }
  get fillOpacity() {
    return this._fillOpacity;
  }
  set fillOpacity(i) {
    const n = this._fillOpacity;
    this._fillOpacity = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ie.FILL_OPACITY),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ie.FILL_OPACITY,
      merge: () => !1
    });
  }
  get fillColor() {
    return this._fillColor;
  }
  set fillColor(i) {
    const n = this._fillColor;
    this._fillColor = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ie.FILL_COLOR),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ie.FILL_COLOR,
      merge: () => !1
    });
  }
  get className() {
    return this._className;
  }
  set className(i) {
    const n = this._className;
    this._className = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ie.CLASS_NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ie.CLASS_NAME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ie.STROKE:
        return this.stroke;
      case Ie.COLOR:
        return this.color;
      case Ie.WEIGHT:
        return this.weight;
      case Ie.OPACITY:
        return this.opacity;
      case Ie.LINE_CAP:
        return this.lineCap;
      case Ie.DASH_OFFSET:
        return this.dashOffset;
      case Ie.FILL:
        return this.fill;
      case Ie.FILL_OPACITY:
        return this.fillOpacity;
      case Ie.FILL_COLOR:
        return this.fillColor;
      case Ie.CLASS_NAME:
        return this.className;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case Ie.STROKE:
        this.stroke = n, super.eSet(i, n);
        break;
      case Ie.COLOR:
        this.color = n, super.eSet(i, n);
        break;
      case Ie.WEIGHT:
        this.weight = n, super.eSet(i, n);
        break;
      case Ie.OPACITY:
        this.opacity = n, super.eSet(i, n);
        break;
      case Ie.LINE_CAP:
        this.lineCap = n, super.eSet(i, n);
        break;
      case Ie.DASH_OFFSET:
        this.dashOffset = n, super.eSet(i, n);
        break;
      case Ie.FILL:
        this.fill = n, super.eSet(i, n);
        break;
      case Ie.FILL_OPACITY:
        this.fillOpacity = n, super.eSet(i, n);
        break;
      case Ie.FILL_COLOR:
        this.fillColor = n, super.eSet(i, n);
        break;
      case Ie.CLASS_NAME:
        this.className = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ie.STROKE:
        return this._stroke !== void 0;
      case Ie.COLOR:
        return this._color !== void 0;
      case Ie.WEIGHT:
        return this._weight !== void 0;
      case Ie.OPACITY:
        return this._opacity !== void 0;
      case Ie.LINE_CAP:
        return this._lineCap !== void 0;
      case Ie.DASH_OFFSET:
        return this._dashOffset !== void 0;
      case Ie.FILL:
        return this._fill !== void 0;
      case Ie.FILL_OPACITY:
        return this._fillOpacity !== void 0;
      case Ie.FILL_COLOR:
        return this._fillColor !== void 0;
      case Ie.CLASS_NAME:
        return this._className !== void 0;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ie.STROKE:
        this._stroke = void 0;
        return;
      case Ie.COLOR:
        this._color = void 0;
        return;
      case Ie.WEIGHT:
        this._weight = void 0;
        return;
      case Ie.OPACITY:
        this._opacity = void 0;
        return;
      case Ie.LINE_CAP:
        this._lineCap = void 0;
        return;
      case Ie.DASH_OFFSET:
        this._dashOffset = void 0;
        return;
      case Ie.FILL:
        this._fill = void 0;
        return;
      case Ie.FILL_OPACITY:
        this._fillOpacity = void 0;
        return;
      case Ie.FILL_COLOR:
        this._fillColor = void 0;
        return;
      case Ie.CLASS_NAME:
        this._className = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
}
class Dn extends gr {
  static {
    this.ID = 0;
  }
  static {
    this.NAME = 1;
  }
  static {
    this.OBSERVED_PROPERTY = 2;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.DATASTREAM_SUMMARY;
  }
  // Getters and Setters
  get id() {
    return this._id;
  }
  set id(i) {
    const n = this._id;
    this._id = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Dn.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Dn.ID,
      merge: () => !1
    });
  }
  get name() {
    return this._name;
  }
  set name(i) {
    const n = this._name;
    this._name = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Dn.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Dn.NAME,
      merge: () => !1
    });
  }
  get observedProperty() {
    return this._observedProperty;
  }
  set observedProperty(i) {
    const n = this._observedProperty;
    this._observedProperty = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Dn.OBSERVED_PROPERTY),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Dn.OBSERVED_PROPERTY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Dn.ID:
        return this.id;
      case Dn.NAME:
        return this.name;
      case Dn.OBSERVED_PROPERTY:
        return this.observedProperty;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case Dn.ID:
        this.id = n, super.eSet(i, n);
        break;
      case Dn.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case Dn.OBSERVED_PROPERTY:
        this.observedProperty = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Dn.ID:
        return this._id !== void 0;
      case Dn.NAME:
        return this._name !== void 0;
      case Dn.OBSERVED_PROPERTY:
        return this._observedProperty !== void 0;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Dn.ID:
        this._id = void 0;
        return;
      case Dn.NAME:
        this._name = void 0;
        return;
      case Dn.OBSERVED_PROPERTY:
        this._observedProperty = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
}
class Ye extends El {
  static {
    this.ID = 4;
  }
  static {
    this.NAME = 5;
  }
  static {
    this.THING_ID = 6;
  }
  static {
    this.UNIT_OF_MEASUREMENT = 7;
  }
  static {
    this.OBSERVED_PROPERTY = 8;
  }
  static {
    this.LATEST_OBSERVATION_RESULT = 9;
  }
  static {
    this.LATEST_OBSERVATION_TIME = 10;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.DATASTREAM_CLICK_PAYLOAD;
  }
  // Getters and Setters
  get id() {
    return this._id;
  }
  set id(i) {
    const n = this._id;
    this._id = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ye.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ye.ID,
      merge: () => !1
    });
  }
  get name() {
    return this._name;
  }
  set name(i) {
    const n = this._name;
    this._name = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ye.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ye.NAME,
      merge: () => !1
    });
  }
  get thingId() {
    return this._thingId;
  }
  set thingId(i) {
    const n = this._thingId;
    this._thingId = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ye.THING_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ye.THING_ID,
      merge: () => !1
    });
  }
  get unitOfMeasurement() {
    return this._unitOfMeasurement;
  }
  set unitOfMeasurement(i) {
    const n = this._unitOfMeasurement;
    this._unitOfMeasurement = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ye.UNIT_OF_MEASUREMENT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ye.UNIT_OF_MEASUREMENT,
      merge: () => !1
    });
  }
  get observedProperty() {
    return this._observedProperty;
  }
  set observedProperty(i) {
    const n = this._observedProperty;
    this._observedProperty = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ye.OBSERVED_PROPERTY),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ye.OBSERVED_PROPERTY,
      merge: () => !1
    });
  }
  get latestObservationResult() {
    return this._latestObservationResult;
  }
  set latestObservationResult(i) {
    const n = this._latestObservationResult;
    this._latestObservationResult = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ye.LATEST_OBSERVATION_RESULT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ye.LATEST_OBSERVATION_RESULT,
      merge: () => !1
    });
  }
  get latestObservationTime() {
    return this._latestObservationTime;
  }
  set latestObservationTime(i) {
    const n = this._latestObservationTime;
    this._latestObservationTime = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ye.LATEST_OBSERVATION_TIME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ye.LATEST_OBSERVATION_TIME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ye.ID:
        return this.id;
      case Ye.NAME:
        return this.name;
      case Ye.THING_ID:
        return this.thingId;
      case Ye.UNIT_OF_MEASUREMENT:
        return this.unitOfMeasurement;
      case Ye.OBSERVED_PROPERTY:
        return this.observedProperty;
      case Ye.LATEST_OBSERVATION_RESULT:
        return this.latestObservationResult;
      case Ye.LATEST_OBSERVATION_TIME:
        return this.latestObservationTime;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case Ye.ID:
        this.id = n, super.eSet(i, n);
        break;
      case Ye.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case Ye.THING_ID:
        this.thingId = n, super.eSet(i, n);
        break;
      case Ye.UNIT_OF_MEASUREMENT:
        this.unitOfMeasurement = n, super.eSet(i, n);
        break;
      case Ye.OBSERVED_PROPERTY:
        this.observedProperty = n, super.eSet(i, n);
        break;
      case Ye.LATEST_OBSERVATION_RESULT:
        this.latestObservationResult = n, super.eSet(i, n);
        break;
      case Ye.LATEST_OBSERVATION_TIME:
        this.latestObservationTime = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ye.ID:
        return this._id !== void 0;
      case Ye.NAME:
        return this._name !== void 0;
      case Ye.THING_ID:
        return this._thingId !== void 0;
      case Ye.UNIT_OF_MEASUREMENT:
        return this._unitOfMeasurement !== void 0;
      case Ye.OBSERVED_PROPERTY:
        return this._observedProperty !== void 0;
      case Ye.LATEST_OBSERVATION_RESULT:
        return this._latestObservationResult !== void 0;
      case Ye.LATEST_OBSERVATION_TIME:
        return this._latestObservationTime !== void 0;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ye.ID:
        this._id = void 0;
        return;
      case Ye.NAME:
        this._name = void 0;
        return;
      case Ye.THING_ID:
        this._thingId = void 0;
        return;
      case Ye.UNIT_OF_MEASUREMENT:
        this._unitOfMeasurement = void 0;
        return;
      case Ye.OBSERVED_PROPERTY:
        this._observedProperty = void 0;
        return;
      case Ye.LATEST_OBSERVATION_RESULT:
        this._latestObservationResult = void 0;
        return;
      case Ye.LATEST_OBSERVATION_TIME:
        this._latestObservationTime = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
}
class Lt extends El {
  static {
    this.ID = 4;
  }
  static {
    this.DATASTREAM_ID = 5;
  }
  static {
    this.PHENOMENON_TIME = 6;
  }
  static {
    this.RESULT = 7;
  }
  static {
    this.RESULT_TIME = 8;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.OBSERVATION_CLICK_PAYLOAD;
  }
  // Getters and Setters
  get id() {
    return this._id;
  }
  set id(i) {
    const n = this._id;
    this._id = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Lt.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Lt.ID,
      merge: () => !1
    });
  }
  get datastreamId() {
    return this._datastreamId;
  }
  set datastreamId(i) {
    const n = this._datastreamId;
    this._datastreamId = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Lt.DATASTREAM_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Lt.DATASTREAM_ID,
      merge: () => !1
    });
  }
  get phenomenonTime() {
    return this._phenomenonTime;
  }
  set phenomenonTime(i) {
    const n = this._phenomenonTime;
    this._phenomenonTime = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Lt.PHENOMENON_TIME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Lt.PHENOMENON_TIME,
      merge: () => !1
    });
  }
  get result() {
    return this._result;
  }
  set result(i) {
    const n = this._result;
    this._result = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Lt.RESULT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Lt.RESULT,
      merge: () => !1
    });
  }
  get resultTime() {
    return this._resultTime;
  }
  set resultTime(i) {
    const n = this._resultTime;
    this._resultTime = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Lt.RESULT_TIME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Lt.RESULT_TIME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Lt.ID:
        return this.id;
      case Lt.DATASTREAM_ID:
        return this.datastreamId;
      case Lt.PHENOMENON_TIME:
        return this.phenomenonTime;
      case Lt.RESULT:
        return this.result;
      case Lt.RESULT_TIME:
        return this.resultTime;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case Lt.ID:
        this.id = n, super.eSet(i, n);
        break;
      case Lt.DATASTREAM_ID:
        this.datastreamId = n, super.eSet(i, n);
        break;
      case Lt.PHENOMENON_TIME:
        this.phenomenonTime = n, super.eSet(i, n);
        break;
      case Lt.RESULT:
        this.result = n, super.eSet(i, n);
        break;
      case Lt.RESULT_TIME:
        this.resultTime = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Lt.ID:
        return this._id !== void 0;
      case Lt.DATASTREAM_ID:
        return this._datastreamId !== void 0;
      case Lt.PHENOMENON_TIME:
        return this._phenomenonTime !== void 0;
      case Lt.RESULT:
        return this._result !== void 0;
      case Lt.RESULT_TIME:
        return this._resultTime !== void 0;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Lt.ID:
        this._id = void 0;
        return;
      case Lt.DATASTREAM_ID:
        this._datastreamId = void 0;
        return;
      case Lt.PHENOMENON_TIME:
        this._phenomenonTime = void 0;
        return;
      case Lt.RESULT:
        this._result = void 0;
        return;
      case Lt.RESULT_TIME:
        this._resultTime = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
}
class Ai extends El {
  static {
    this.LAT = 4;
  }
  static {
    this.LON = 5;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.MAP_CLICK_PAYLOAD;
  }
  // Getters and Setters
  get lat() {
    return this._lat;
  }
  set lat(i) {
    const n = this._lat;
    this._lat = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ai.LAT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ai.LAT,
      merge: () => !1
    });
  }
  get lon() {
    return this._lon;
  }
  set lon(i) {
    const n = this._lon;
    this._lon = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Ai.LON),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ai.LON,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ai.LAT:
        return this.lat;
      case Ai.LON:
        return this.lon;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case Ai.LAT:
        this.lat = n, super.eSet(i, n);
        break;
      case Ai.LON:
        this.lon = n, super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ai.LAT:
        return this._lat !== void 0;
      case Ai.LON:
        return this._lon !== void 0;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ai.LAT:
        this._lat = void 0;
        return;
      case Ai.LON:
        this._lon = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
}
class jt extends El {
  static {
    this.ID = 4;
  }
  static {
    this.NAME = 5;
  }
  static {
    this.GEOMETRY = 6;
  }
  static {
    this.THING_IDS = 7;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.LOCATION_CLICK_PAYLOAD;
  }
  // Getters and Setters
  get id() {
    return this._id;
  }
  set id(i) {
    const n = this._id;
    this._id = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(jt.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => jt.ID,
      merge: () => !1
    });
  }
  get name() {
    return this._name;
  }
  set name(i) {
    const n = this._name;
    this._name = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(jt.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => jt.NAME,
      merge: () => !1
    });
  }
  get geometry() {
    return this._geometry;
  }
  set geometry(i) {
    const n = this._geometry;
    this._geometry = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(jt.GEOMETRY),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => jt.GEOMETRY,
      merge: () => !1
    });
  }
  get thingIds() {
    return this._thingIds || (this._thingIds = Vu(this, this.eClass().getEStructuralFeature("thingIds"))), this._thingIds;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case jt.ID:
        return this.id;
      case jt.NAME:
        return this.name;
      case jt.GEOMETRY:
        return this.geometry;
      case jt.THING_IDS:
        return this.thingIds;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case jt.ID:
        this.id = n, super.eSet(i, n);
        break;
      case jt.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case jt.GEOMETRY:
        this.geometry = n, super.eSet(i, n);
        break;
      case jt.THING_IDS:
        this.thingIds.clear(), this.thingIds.addAll(n), super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case jt.ID:
        return this._id !== void 0;
      case jt.NAME:
        return this._name !== void 0;
      case jt.GEOMETRY:
        return this._geometry !== void 0;
      case jt.THING_IDS:
        return this._thingIds !== void 0 && !this._thingIds.isEmpty();
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case jt.ID:
        this._id = void 0;
        return;
      case jt.NAME:
        this._name = void 0;
        return;
      case jt.GEOMETRY:
        this._geometry = void 0;
        return;
      case jt.THING_IDS:
        this._thingIds && this._thingIds.clear();
        return;
      default:
        super.eUnset(i);
    }
  }
}
class Zh extends ME {
  static get eINSTANCE() {
    return this._instance || (this._instance = new Zh()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(C.eINSTANCE);
  }
  /**
   * Create a new MapSettings instance
   */
  createMapSettings() {
    return new Te();
  }
  /**
   * Create a new Layer instance
   */
  createLayer() {
    return new be();
  }
  /**
   * Create a new Service instance
   */
  createService() {
    return new Ht();
  }
  /**
   * Create a new IconSettings instance
   */
  createIconSettings() {
    return new $e();
  }
  /**
   * Create a new PointPin instance
   */
  createPointPin() {
    return new Qi();
  }
  /**
   * Create a new PointAndAreaSettings instance
   */
  createPointAndAreaSettings() {
    return new et();
  }
  /**
   * Create a new DSRenderer instance
   */
  createDSRenderer() {
    return new bt();
  }
  /**
   * Create a new Placement instance
   */
  createPlacement() {
    return new js();
  }
  /**
   * Create a new Observation instance
   */
  createObservation() {
    return new sn();
  }
  /**
   * Create a new Condition instance
   */
  createCondition() {
    return new Bn();
  }
  /**
   * Create a new Renderer instance
   */
  createRenderer() {
    return new dt();
  }
  /**
   * Create a new MapProps instance
   */
  createMapProps() {
    return new Ie();
  }
  /**
   * Create a new ThingClickPayload instance
   */
  createThingClickPayload() {
    return new Xe();
  }
  /**
   * Create a new DatastreamSummary instance
   */
  createDatastreamSummary() {
    return new Dn();
  }
  /**
   * Create a new DatastreamClickPayload instance
   */
  createDatastreamClickPayload() {
    return new Ye();
  }
  /**
   * Create a new ObservationClickPayload instance
   */
  createObservationClickPayload() {
    return new Lt();
  }
  /**
   * Create a new MapClickPayload instance
   */
  createMapClickPayload() {
    return new Ai();
  }
  /**
   * Create a new LocationClickPayload instance
   */
  createLocationClickPayload() {
    return new jt();
  }
  /**
   * Create an instance of the given class
   */
  create(i) {
    switch (i.getName()) {
      case "MapSettings":
        return this.createMapSettings();
      case "Layer":
        return this.createLayer();
      case "Service":
        return this.createService();
      case "IconSettings":
        return this.createIconSettings();
      case "PointPin":
        return this.createPointPin();
      case "PointAndAreaSettings":
        return this.createPointAndAreaSettings();
      case "DSRenderer":
        return this.createDSRenderer();
      case "Placement":
        return this.createPlacement();
      case "Observation":
        return this.createObservation();
      case "Condition":
        return this.createCondition();
      case "Renderer":
        return this.createRenderer();
      case "MapProps":
        return this.createMapProps();
      case "ThingClickPayload":
        return this.createThingClickPayload();
      case "DatastreamSummary":
        return this.createDatastreamSummary();
      case "DatastreamClickPayload":
        return this.createDatastreamClickPayload();
      case "ObservationClickPayload":
        return this.createObservationClickPayload();
      case "MapClickPayload":
        return this.createMapClickPayload();
      case "LocationClickPayload":
        return this.createLocationClickPayload();
      default:
        throw new Error(`Unknown class: ${i.getName()}`);
    }
  }
}
function Lo(o) {
  const i = Sp.INSTANCE.getEPackage(o);
  if (!i)
    throw new Error(`EPackage '${o}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing MapSettingsPackage.`);
  return i;
}
class C extends BE {
  static {
    this.eNAME = "MapSettings";
  }
  static {
    this.eNS_URI = "http://org.eclipse.daanse.board.app.ui.vue.widget.map";
  }
  static {
    this.eNS_PREFIX = "MapSettings";
  }
  static get eINSTANCE() {
    return this._instance || (this._instance = new C(), this._instance.init()), this._instance;
  }
  static {
    this.Literals = {
      MAP_WIDGET_INTERFACE: null,
      MAP_SETTINGS: null,
      MAP_SETTINGS__DATASOURCE_ID: null,
      MAP_SETTINGS__DATASOURCE_IDS: null,
      MAP_SETTINGS__BASE_MAP_URL: null,
      MAP_SETTINGS__ZOOM: null,
      MAP_SETTINGS__CENTER: null,
      MAP_SETTINGS__ATTRIBUTION: null,
      MAP_SETTINGS__LAYERS: null,
      MAP_SETTINGS__STYLES: null,
      MAP_SETTINGS__O_G_C_SSTYLES: null,
      MAP_SETTINGS__SERVICES: null,
      MAP_SETTINGS__FIXED: null,
      MAP_SETTINGS__ENABLE_CLUSTERING: null,
      MAP_SETTINGS__SELECTION_HIGHLIGHT_COLOR: null,
      MAP_SETTINGS__SELECTED_THING_ID: null,
      LAYER: null,
      LAYER__DATASOURCE_ID: null,
      LAYER__SERVICE: null,
      LAYER__TYPE: null,
      LAYER__CHILDS: null,
      LAYER__LEVEL: null,
      LAYER__STYLE_IDS: null,
      LAYER__NAME: null,
      LAYER__TITLE: null,
      LAYER__ATTRIBUTION: null,
      LAYER__GEO_JSON: null,
      LAYER__WFS_SERVICE: null,
      LAYER__OPACITY: null,
      SERVICE: null,
      SERVICE__TYPE: null,
      SERVICE__URL: null,
      SERVICE__SERVICE: null,
      SERVICE__ID: null,
      ICON_SETTINGS: null,
      ICON_SETTINGS__CURRENT_ICON: null,
      ICON_SETTINGS__ICON_COLOR: null,
      ICON_SETTINGS__ICON_SIZE: null,
      ICON_SETTINGS__IS_ICON_FILLED: null,
      ICON_SETTINGS__STROKE_WEIGHT: null,
      ICON_SETTINGS__OPTIC_SIZE: null,
      ICON_SETTINGS__GRADE: null,
      POINT_PIN: null,
      POINT_PIN__COLOR: null,
      POINT_PIN__SOLID: null,
      POINT_AND_AREA_SETTINGS: null,
      POINT_AND_AREA_SETTINGS__SHOW__SUB_ELEMENTS: null,
      POINT_AND_AREA_SETTINGS__POINT_RENDER_AS: null,
      POINT_AND_AREA_SETTINGS__POINT_PROP: null,
      POINT_AND_AREA_SETTINGS__POINT: null,
      POINT_AND_AREA_SETTINGS__POINT_PIN: null,
      POINT_AND_AREA_SETTINGS__AREA: null,
      POINT_AND_AREA_SETTINGS__LABEL: null,
      D_S_RENDERER: null,
      D_S_RENDERER__NAME: null,
      D_S_RENDERER__DATASTREAM: null,
      D_S_RENDERER__OBSERVATIONS: null,
      D_S_RENDERER__RENDERER: null,
      D_S_RENDERER__ID: null,
      D_S_RENDERER__PLACEMENT: null,
      PLACEMENT: null,
      PLACEMENT__PLACEMENT: null,
      OBSERVATION: null,
      OBSERVATION__SETTING: null,
      OBSERVATION__COMPONENT: null,
      OBSERVATION__RENDERER: null,
      OBSERVATION__CONDITIONS: null,
      CONDITION: null,
      CONDITION__PROP: null,
      CONDITION__COMPERATOR: null,
      CONDITION__VALUE: null,
      RENDERER: null,
      RENDERER__NAME: null,
      RENDERER__THING: null,
      RENDERER__RENDERER: null,
      RENDERER__DS_RENDERER: null,
      RENDERER__OBSERVATIONREFRESH_TIME: null,
      RENDERER__LAST_UPDATE: null,
      RENDERER__ID: null,
      MAP_PROPS: null,
      MAP_PROPS__STROKE: null,
      MAP_PROPS__COLOR: null,
      MAP_PROPS__WEIGHT: null,
      MAP_PROPS__OPACITY: null,
      MAP_PROPS__LINE_CAP: null,
      MAP_PROPS__DASH_OFFSET: null,
      MAP_PROPS__FILL: null,
      MAP_PROPS__FILL_OPACITY: null,
      MAP_PROPS__FILL_COLOR: null,
      MAP_PROPS__CLASS_NAME: null,
      THING_CLICK_PAYLOAD: null,
      THING_CLICK_PAYLOAD__ID: null,
      THING_CLICK_PAYLOAD__NAME: null,
      THING_CLICK_PAYLOAD__DESCRIPTION: null,
      THING_CLICK_PAYLOAD__PROPERTIES: null,
      THING_CLICK_PAYLOAD__LOCATION: null,
      THING_CLICK_PAYLOAD__RENDERER_ID: null,
      THING_CLICK_PAYLOAD__DATASTREAMS: null,
      DATASTREAM_SUMMARY: null,
      DATASTREAM_SUMMARY__ID: null,
      DATASTREAM_SUMMARY__NAME: null,
      DATASTREAM_SUMMARY__OBSERVED_PROPERTY: null,
      DATASTREAM_CLICK_PAYLOAD: null,
      DATASTREAM_CLICK_PAYLOAD__ID: null,
      DATASTREAM_CLICK_PAYLOAD__NAME: null,
      DATASTREAM_CLICK_PAYLOAD__THING_ID: null,
      DATASTREAM_CLICK_PAYLOAD__UNIT_OF_MEASUREMENT: null,
      DATASTREAM_CLICK_PAYLOAD__OBSERVED_PROPERTY: null,
      DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_RESULT: null,
      DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_TIME: null,
      OBSERVATION_CLICK_PAYLOAD: null,
      OBSERVATION_CLICK_PAYLOAD__ID: null,
      OBSERVATION_CLICK_PAYLOAD__DATASTREAM_ID: null,
      OBSERVATION_CLICK_PAYLOAD__PHENOMENON_TIME: null,
      OBSERVATION_CLICK_PAYLOAD__RESULT: null,
      OBSERVATION_CLICK_PAYLOAD__RESULT_TIME: null,
      MAP_CLICK_PAYLOAD: null,
      MAP_CLICK_PAYLOAD__LAT: null,
      MAP_CLICK_PAYLOAD__LON: null,
      LOCATION_CLICK_PAYLOAD: null,
      LOCATION_CLICK_PAYLOAD__ID: null,
      LOCATION_CLICK_PAYLOAD__NAME: null,
      LOCATION_CLICK_PAYLOAD__GEOMETRY: null,
      LOCATION_CLICK_PAYLOAD__THING_IDS: null
    };
  }
  constructor() {
    super(), this.setName(C.eNAME), this.setNsURI(C.eNS_URI), this.setNsPrefix(C.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    Sp.INSTANCE.set(C.eNS_URI, this), this.setEFactoryInstance(Zh.eINSTANCE);
    const i = new Zn();
    i.setName("MapWidgetInterface"), i.setAbstract(!0), i.setInterface(!1), this.getEClassifiers().push(i), i.setEPackage(this), C.Literals.MAP_WIDGET_INTERFACE = i;
    const n = new Zn();
    n.setName("MapSettings"), n.setAbstract(!1), n.setInterface(!1), this.getEClassifiers().push(n), n.setEPackage(this), C.Literals.MAP_SETTINGS = n;
    const l = new he();
    l.setName("datasourceId"), l.setLowerBound(0), l.setUpperBound(1), n.getEStructuralFeatures().push(l), C.Literals.MAP_SETTINGS__DATASOURCE_ID = l;
    const d = new he();
    d.setName("datasourceIds"), d.setLowerBound(0), d.setUpperBound(-1), n.getEStructuralFeatures().push(d), C.Literals.MAP_SETTINGS__DATASOURCE_IDS = d;
    const p = new he();
    p.setName("baseMapUrl"), p.setLowerBound(0), p.setUpperBound(1), n.getEStructuralFeatures().push(p), C.Literals.MAP_SETTINGS__BASE_MAP_URL = p;
    const _ = new he();
    _.setName("zoom"), _.setLowerBound(0), _.setUpperBound(1), n.getEStructuralFeatures().push(_), C.Literals.MAP_SETTINGS__ZOOM = _;
    const v = new he();
    v.setName("center"), v.setLowerBound(0), v.setUpperBound(-1), n.getEStructuralFeatures().push(v), C.Literals.MAP_SETTINGS__CENTER = v;
    const m = new he();
    m.setName("attribution"), m.setLowerBound(0), m.setUpperBound(1), n.getEStructuralFeatures().push(m), C.Literals.MAP_SETTINGS__ATTRIBUTION = m;
    const E = new Xn();
    E.setContainment(!0), E.setName("layers"), E.setLowerBound(0), E.setUpperBound(-1), n.getEStructuralFeatures().push(E), C.Literals.MAP_SETTINGS__LAYERS = E;
    const A = new Xn();
    A.setContainment(!0), A.setName("styles"), A.setLowerBound(0), A.setUpperBound(-1), n.getEStructuralFeatures().push(A), C.Literals.MAP_SETTINGS__STYLES = A;
    const w = new Xn();
    w.setContainment(!0), w.setName("OGCSstyles"), w.setLowerBound(0), w.setUpperBound(-1), n.getEStructuralFeatures().push(w), C.Literals.MAP_SETTINGS__O_G_C_SSTYLES = w;
    const b = new Xn();
    b.setContainment(!0), b.setName("services"), b.setLowerBound(0), b.setUpperBound(-1), n.getEStructuralFeatures().push(b), C.Literals.MAP_SETTINGS__SERVICES = b;
    const N = new he();
    N.setName("fixed"), N.setLowerBound(0), N.setUpperBound(1), n.getEStructuralFeatures().push(N), C.Literals.MAP_SETTINGS__FIXED = N;
    const k = new he();
    k.setName("enableClustering"), k.setLowerBound(0), k.setUpperBound(1), n.getEStructuralFeatures().push(k), C.Literals.MAP_SETTINGS__ENABLE_CLUSTERING = k;
    const G = new he();
    G.setName("selectionHighlightColor"), G.setLowerBound(0), G.setUpperBound(1), n.getEStructuralFeatures().push(G), C.Literals.MAP_SETTINGS__SELECTION_HIGHLIGHT_COLOR = G;
    const X = new he();
    X.setName("selectedThingId"), X.setLowerBound(0), X.setUpperBound(1), n.getEStructuralFeatures().push(X), C.Literals.MAP_SETTINGS__SELECTED_THING_ID = X;
    const x = new Zn();
    x.setName("Layer"), x.setAbstract(!1), x.setInterface(!1), this.getEClassifiers().push(x), x.setEPackage(this), C.Literals.LAYER = x;
    const z = new he();
    z.setName("datasourceId"), z.setLowerBound(0), z.setUpperBound(1), x.getEStructuralFeatures().push(z), C.Literals.LAYER__DATASOURCE_ID = z;
    const Y = new he();
    Y.setName("service"), Y.setLowerBound(0), Y.setUpperBound(1), x.getEStructuralFeatures().push(Y), C.Literals.LAYER__SERVICE = Y;
    const R = new he();
    R.setName("type"), R.setLowerBound(0), R.setUpperBound(1), x.getEStructuralFeatures().push(R), C.Literals.LAYER__TYPE = R;
    const q = new Xn();
    q.setContainment(!0), q.setName("childs"), q.setLowerBound(0), q.setUpperBound(1), x.getEStructuralFeatures().push(q), C.Literals.LAYER__CHILDS = q;
    const ce = new he();
    ce.setName("level"), ce.setLowerBound(0), ce.setUpperBound(1), x.getEStructuralFeatures().push(ce), C.Literals.LAYER__LEVEL = ce;
    const we = new he();
    we.setName("styleIds"), we.setLowerBound(0), we.setUpperBound(-1), x.getEStructuralFeatures().push(we), C.Literals.LAYER__STYLE_IDS = we;
    const Le = new he();
    Le.setName("name"), Le.setLowerBound(0), Le.setUpperBound(1), x.getEStructuralFeatures().push(Le), C.Literals.LAYER__NAME = Le;
    const te = new he();
    te.setName("title"), te.setLowerBound(0), te.setUpperBound(1), x.getEStructuralFeatures().push(te), C.Literals.LAYER__TITLE = te;
    const Z = new he();
    Z.setName("attribution"), Z.setLowerBound(0), Z.setUpperBound(1), x.getEStructuralFeatures().push(Z), C.Literals.LAYER__ATTRIBUTION = Z;
    const j = new he();
    j.setName("geoJson"), j.setLowerBound(0), j.setUpperBound(1), x.getEStructuralFeatures().push(j), C.Literals.LAYER__GEO_JSON = j;
    const U = new he();
    U.setName("wfs_service"), U.setLowerBound(0), U.setUpperBound(1), x.getEStructuralFeatures().push(U), C.Literals.LAYER__WFS_SERVICE = U;
    const se = new he();
    se.setName("opacity"), se.setLowerBound(0), se.setUpperBound(1), x.getEStructuralFeatures().push(se), C.Literals.LAYER__OPACITY = se;
    const ge = new Zn();
    ge.setName("Service"), ge.setAbstract(!1), ge.setInterface(!1), this.getEClassifiers().push(ge), ge.setEPackage(this), C.Literals.SERVICE = ge;
    const Je = new he();
    Je.setName("type"), Je.setLowerBound(0), Je.setUpperBound(1), ge.getEStructuralFeatures().push(Je), C.Literals.SERVICE__TYPE = Je;
    const De = new he();
    De.setName("url"), De.setLowerBound(0), De.setUpperBound(1), ge.getEStructuralFeatures().push(De), C.Literals.SERVICE__URL = De;
    const Pe = new he();
    Pe.setName("service"), Pe.setLowerBound(0), Pe.setUpperBound(1), ge.getEStructuralFeatures().push(Pe), C.Literals.SERVICE__SERVICE = Pe;
    const _e = new he();
    _e.setName("id"), _e.setLowerBound(0), _e.setUpperBound(1), ge.getEStructuralFeatures().push(_e), C.Literals.SERVICE__ID = _e;
    const St = new Zn();
    St.setName("IconSettings"), St.setAbstract(!1), St.setInterface(!1), this.getEClassifiers().push(St), St.setEPackage(this), C.Literals.ICON_SETTINGS = St;
    const J = new he();
    J.setName("currentIcon"), J.setLowerBound(0), J.setUpperBound(1), St.getEStructuralFeatures().push(J), C.Literals.ICON_SETTINGS__CURRENT_ICON = J;
    const de = new Xn();
    de.setContainment(!1), de.setName("iconColor"), de.setLowerBound(0), de.setUpperBound(1), St.getEStructuralFeatures().push(de), C.Literals.ICON_SETTINGS__ICON_COLOR = de;
    const He = new he();
    He.setName("iconSize"), He.setLowerBound(0), He.setUpperBound(1), St.getEStructuralFeatures().push(He), C.Literals.ICON_SETTINGS__ICON_SIZE = He;
    const gt = new he();
    gt.setName("isIconFilled"), gt.setLowerBound(0), gt.setUpperBound(1), St.getEStructuralFeatures().push(gt), C.Literals.ICON_SETTINGS__IS_ICON_FILLED = gt;
    const re = new he();
    re.setName("strokeWeight"), re.setLowerBound(0), re.setUpperBound(1), St.getEStructuralFeatures().push(re), C.Literals.ICON_SETTINGS__STROKE_WEIGHT = re;
    const ke = new he();
    ke.setName("opticSize"), ke.setLowerBound(0), ke.setUpperBound(1), St.getEStructuralFeatures().push(ke), C.Literals.ICON_SETTINGS__OPTIC_SIZE = ke;
    const xe = new he();
    xe.setName("grade"), xe.setLowerBound(0), xe.setUpperBound(1), St.getEStructuralFeatures().push(xe), C.Literals.ICON_SETTINGS__GRADE = xe;
    const Kt = new Zn();
    Kt.setName("PointPin"), Kt.setAbstract(!1), Kt.setInterface(!1), this.getEClassifiers().push(Kt), Kt.setEPackage(this), C.Literals.POINT_PIN = Kt;
    const Qt = new he();
    Qt.setName("color"), Qt.setLowerBound(0), Qt.setUpperBound(1), Kt.getEStructuralFeatures().push(Qt), C.Literals.POINT_PIN__COLOR = Qt;
    const Pn = new he();
    Pn.setName("solid"), Pn.setLowerBound(0), Pn.setUpperBound(1), Kt.getEStructuralFeatures().push(Pn), C.Literals.POINT_PIN__SOLID = Pn;
    const ln = new Zn();
    ln.setName("PointAndAreaSettings"), ln.setAbstract(!1), ln.setInterface(!1), this.getEClassifiers().push(ln), ln.setEPackage(this), C.Literals.POINT_AND_AREA_SETTINGS = ln;
    const qn = new he();
    qn.setName("show_SubElements"), qn.setLowerBound(0), qn.setUpperBound(1), ln.getEStructuralFeatures().push(qn), C.Literals.POINT_AND_AREA_SETTINGS__SHOW__SUB_ELEMENTS = qn;
    const Un = new he();
    Un.setName("point_render_as"), Un.setLowerBound(0), Un.setUpperBound(1), ln.getEStructuralFeatures().push(Un), C.Literals.POINT_AND_AREA_SETTINGS__POINT_RENDER_AS = Un;
    const Ui = new he();
    Ui.setName("point_prop"), Ui.setLowerBound(0), Ui.setUpperBound(1), ln.getEStructuralFeatures().push(Ui), C.Literals.POINT_AND_AREA_SETTINGS__POINT_PROP = Ui;
    const _n = new Xn();
    _n.setContainment(!0), _n.setName("point"), _n.setLowerBound(0), _n.setUpperBound(1), ln.getEStructuralFeatures().push(_n), C.Literals.POINT_AND_AREA_SETTINGS__POINT = _n;
    const zt = new Xn();
    zt.setContainment(!0), zt.setName("pointPin"), zt.setLowerBound(0), zt.setUpperBound(1), ln.getEStructuralFeatures().push(zt), C.Literals.POINT_AND_AREA_SETTINGS__POINT_PIN = zt;
    const Vi = new Xn();
    Vi.setContainment(!0), Vi.setName("area"), Vi.setLowerBound(0), Vi.setUpperBound(1), ln.getEStructuralFeatures().push(Vi), C.Literals.POINT_AND_AREA_SETTINGS__AREA = Vi;
    const un = new he();
    un.setName("label"), un.setLowerBound(0), un.setUpperBound(1), ln.getEStructuralFeatures().push(un), C.Literals.POINT_AND_AREA_SETTINGS__LABEL = un;
    const cn = new Zn();
    cn.setName("DSRenderer"), cn.setAbstract(!1), cn.setInterface(!1), this.getEClassifiers().push(cn), cn.setEPackage(this), C.Literals.D_S_RENDERER = cn;
    const vr = new he();
    vr.setName("name"), vr.setLowerBound(0), vr.setUpperBound(1), cn.getEStructuralFeatures().push(vr), C.Literals.D_S_RENDERER__NAME = vr;
    const Kn = new Xn();
    Kn.setContainment(!0), Kn.setName("datastream"), Kn.setLowerBound(0), Kn.setUpperBound(-1), cn.getEStructuralFeatures().push(Kn), C.Literals.D_S_RENDERER__DATASTREAM = Kn;
    const en = new Xn();
    en.setContainment(!0), en.setName("observations"), en.setLowerBound(0), en.setUpperBound(-1), cn.getEStructuralFeatures().push(en), C.Literals.D_S_RENDERER__OBSERVATIONS = en;
    const Qn = new Xn();
    Qn.setContainment(!0), Qn.setName("renderer"), Qn.setLowerBound(0), Qn.setUpperBound(1), cn.getEStructuralFeatures().push(Qn), C.Literals.D_S_RENDERER__RENDERER = Qn;
    const xn = new he();
    xn.setName("id"), xn.setLowerBound(0), xn.setUpperBound(1), cn.getEStructuralFeatures().push(xn), C.Literals.D_S_RENDERER__ID = xn;
    const zi = new he();
    zi.setName("placement"), zi.setLowerBound(0), zi.setUpperBound(1), cn.getEStructuralFeatures().push(zi), C.Literals.D_S_RENDERER__PLACEMENT = zi;
    const Vn = new Zn();
    Vn.setName("Placement"), Vn.setAbstract(!1), Vn.setInterface(!1), this.getEClassifiers().push(Vn), Vn.setEPackage(this), C.Literals.PLACEMENT = Vn;
    const er = new he();
    er.setName("placement"), er.setLowerBound(0), er.setUpperBound(1), Vn.getEStructuralFeatures().push(er), C.Literals.PLACEMENT__PLACEMENT = er;
    const gn = new Zn();
    gn.setName("Observation"), gn.setAbstract(!1), gn.setInterface(!1), this.getEClassifiers().push(gn), gn.setEPackage(this), C.Literals.OBSERVATION = gn;
    const ei = new he();
    ei.setName("setting"), ei.setLowerBound(0), ei.setUpperBound(1), gn.getEStructuralFeatures().push(ei), C.Literals.OBSERVATION__SETTING = ei;
    const bi = new he();
    bi.setName("component"), bi.setLowerBound(0), bi.setUpperBound(1), gn.getEStructuralFeatures().push(bi), C.Literals.OBSERVATION__COMPONENT = bi;
    const Oi = new Xn();
    Oi.setContainment(!0), Oi.setName("renderer"), Oi.setLowerBound(0), Oi.setUpperBound(1), gn.getEStructuralFeatures().push(Oi), C.Literals.OBSERVATION__RENDERER = Oi;
    const di = new Xn();
    di.setContainment(!0), di.setName("conditions"), di.setLowerBound(0), di.setUpperBound(-1), gn.getEStructuralFeatures().push(di), C.Literals.OBSERVATION__CONDITIONS = di;
    const Fn = new Zn();
    Fn.setName("Condition"), Fn.setAbstract(!1), Fn.setInterface(!1), this.getEClassifiers().push(Fn), Fn.setEPackage(this), C.Literals.CONDITION = Fn;
    const Wi = new he();
    Wi.setName("prop"), Wi.setLowerBound(0), Wi.setUpperBound(1), Fn.getEStructuralFeatures().push(Wi), C.Literals.CONDITION__PROP = Wi;
    const fi = new he();
    fi.setName("comperator"), fi.setLowerBound(0), fi.setUpperBound(1), Fn.getEStructuralFeatures().push(fi), C.Literals.CONDITION__COMPERATOR = fi;
    const ti = new he();
    ti.setName("value"), ti.setLowerBound(0), ti.setUpperBound(1), Fn.getEStructuralFeatures().push(ti), C.Literals.CONDITION__VALUE = ti;
    const An = new Zn();
    An.setName("Renderer"), An.setAbstract(!1), An.setInterface(!1), this.getEClassifiers().push(An), An.setEPackage(this), C.Literals.RENDERER = An;
    const ni = new he();
    ni.setName("name"), ni.setLowerBound(0), ni.setUpperBound(1), An.getEStructuralFeatures().push(ni), C.Literals.RENDERER__NAME = ni;
    const Li = new Xn();
    Li.setContainment(!0), Li.setName("thing"), Li.setLowerBound(0), Li.setUpperBound(-1), An.getEStructuralFeatures().push(Li), C.Literals.RENDERER__THING = Li;
    const Ii = new Xn();
    Ii.setContainment(!0), Ii.setName("renderer"), Ii.setLowerBound(0), Ii.setUpperBound(1), An.getEStructuralFeatures().push(Ii), C.Literals.RENDERER__RENDERER = Ii;
    const ii = new Xn();
    ii.setContainment(!0), ii.setName("ds_renderer"), ii.setLowerBound(0), ii.setUpperBound(-1), An.getEStructuralFeatures().push(ii), C.Literals.RENDERER__DS_RENDERER = ii;
    const tr = new he();
    tr.setName("ObservationrefreshTime"), tr.setLowerBound(0), tr.setUpperBound(1), An.getEStructuralFeatures().push(tr), C.Literals.RENDERER__OBSERVATIONREFRESH_TIME = tr;
    const Zi = new he();
    Zi.setName("lastUpdate"), Zi.setLowerBound(0), Zi.setUpperBound(1), An.getEStructuralFeatures().push(Zi), C.Literals.RENDERER__LAST_UPDATE = Zi;
    const F = new he();
    F.setName("id"), F.setLowerBound(0), F.setUpperBound(1), An.getEStructuralFeatures().push(F), C.Literals.RENDERER__ID = F;
    const ae = new Zn();
    ae.setName("MapProps"), ae.setAbstract(!1), ae.setInterface(!1), this.getEClassifiers().push(ae), ae.setEPackage(this), C.Literals.MAP_PROPS = ae;
    const K = new he();
    K.setName("stroke"), K.setLowerBound(0), K.setUpperBound(1), ae.getEStructuralFeatures().push(K), C.Literals.MAP_PROPS__STROKE = K;
    const ve = new he();
    ve.setName("color"), ve.setLowerBound(0), ve.setUpperBound(1), ae.getEStructuralFeatures().push(ve), C.Literals.MAP_PROPS__COLOR = ve;
    const Be = new he();
    Be.setName("weight"), Be.setLowerBound(0), Be.setUpperBound(1), ae.getEStructuralFeatures().push(Be), C.Literals.MAP_PROPS__WEIGHT = Be;
    const Fe = new he();
    Fe.setName("opacity"), Fe.setLowerBound(0), Fe.setUpperBound(1), ae.getEStructuralFeatures().push(Fe), C.Literals.MAP_PROPS__OPACITY = Fe;
    const tt = new he();
    tt.setName("lineCap"), tt.setLowerBound(0), tt.setUpperBound(1), ae.getEStructuralFeatures().push(tt), C.Literals.MAP_PROPS__LINE_CAP = tt;
    const mt = new he();
    mt.setName("dashOffset"), mt.setLowerBound(0), mt.setUpperBound(1), ae.getEStructuralFeatures().push(mt), C.Literals.MAP_PROPS__DASH_OFFSET = mt;
    const xt = new he();
    xt.setName("fill"), xt.setLowerBound(0), xt.setUpperBound(1), ae.getEStructuralFeatures().push(xt), C.Literals.MAP_PROPS__FILL = xt;
    const Ut = new he();
    Ut.setName("fillOpacity"), Ut.setLowerBound(0), Ut.setUpperBound(1), ae.getEStructuralFeatures().push(Ut), C.Literals.MAP_PROPS__FILL_OPACITY = Ut;
    const tn = new he();
    tn.setName("fillColor"), tn.setLowerBound(0), tn.setUpperBound(1), ae.getEStructuralFeatures().push(tn), C.Literals.MAP_PROPS__FILL_COLOR = tn;
    const Et = new he();
    Et.setName("className"), Et.setLowerBound(0), Et.setUpperBound(1), ae.getEStructuralFeatures().push(Et), C.Literals.MAP_PROPS__CLASS_NAME = Et;
    const me = new Zn();
    me.setName("ThingClickPayload"), me.setAbstract(!1), me.setInterface(!1), this.getEClassifiers().push(me), me.setEPackage(this), C.Literals.THING_CLICK_PAYLOAD = me;
    const ri = new he();
    ri.setName("id"), ri.setLowerBound(0), ri.setUpperBound(1), me.getEStructuralFeatures().push(ri), C.Literals.THING_CLICK_PAYLOAD__ID = ri;
    const Hi = new he();
    Hi.setName("name"), Hi.setLowerBound(0), Hi.setUpperBound(1), me.getEStructuralFeatures().push(Hi), C.Literals.THING_CLICK_PAYLOAD__NAME = Hi;
    const pi = new he();
    pi.setName("description"), pi.setLowerBound(0), pi.setUpperBound(1), me.getEStructuralFeatures().push(pi), C.Literals.THING_CLICK_PAYLOAD__DESCRIPTION = pi;
    const yr = new he();
    yr.setName("properties"), yr.setLowerBound(0), yr.setUpperBound(1), me.getEStructuralFeatures().push(yr), C.Literals.THING_CLICK_PAYLOAD__PROPERTIES = yr;
    const Ft = new he();
    Ft.setName("location"), Ft.setLowerBound(0), Ft.setUpperBound(1), me.getEStructuralFeatures().push(Ft), C.Literals.THING_CLICK_PAYLOAD__LOCATION = Ft;
    const Cn = new he();
    Cn.setName("rendererId"), Cn.setLowerBound(0), Cn.setUpperBound(1), me.getEStructuralFeatures().push(Cn), C.Literals.THING_CLICK_PAYLOAD__RENDERER_ID = Cn;
    const ct = new Xn();
    ct.setContainment(!0), ct.setName("datastreams"), ct.setLowerBound(0), ct.setUpperBound(-1), me.getEStructuralFeatures().push(ct), C.Literals.THING_CLICK_PAYLOAD__DATASTREAMS = ct;
    const Wt = new Zn();
    Wt.setName("DatastreamSummary"), Wt.setAbstract(!1), Wt.setInterface(!1), this.getEClassifiers().push(Wt), Wt.setEPackage(this), C.Literals.DATASTREAM_SUMMARY = Wt;
    const bn = new he();
    bn.setName("id"), bn.setLowerBound(0), bn.setUpperBound(1), Wt.getEStructuralFeatures().push(bn), C.Literals.DATASTREAM_SUMMARY__ID = bn;
    const si = new he();
    si.setName("name"), si.setLowerBound(0), si.setUpperBound(1), Wt.getEStructuralFeatures().push(si), C.Literals.DATASTREAM_SUMMARY__NAME = si;
    const mn = new he();
    mn.setName("observedProperty"), mn.setLowerBound(0), mn.setUpperBound(1), Wt.getEStructuralFeatures().push(mn), C.Literals.DATASTREAM_SUMMARY__OBSERVED_PROPERTY = mn;
    const On = new Zn();
    On.setName("DatastreamClickPayload"), On.setAbstract(!1), On.setInterface(!1), this.getEClassifiers().push(On), On.setEPackage(this), C.Literals.DATASTREAM_CLICK_PAYLOAD = On;
    const oi = new he();
    oi.setName("id"), oi.setLowerBound(0), oi.setUpperBound(1), On.getEStructuralFeatures().push(oi), C.Literals.DATASTREAM_CLICK_PAYLOAD__ID = oi;
    const hn = new he();
    hn.setName("name"), hn.setLowerBound(0), hn.setUpperBound(1), On.getEStructuralFeatures().push(hn), C.Literals.DATASTREAM_CLICK_PAYLOAD__NAME = hn;
    const $t = new he();
    $t.setName("thingId"), $t.setLowerBound(0), $t.setUpperBound(1), On.getEStructuralFeatures().push($t), C.Literals.DATASTREAM_CLICK_PAYLOAD__THING_ID = $t;
    const $n = new he();
    $n.setName("unitOfMeasurement"), $n.setLowerBound(0), $n.setUpperBound(1), On.getEStructuralFeatures().push($n), C.Literals.DATASTREAM_CLICK_PAYLOAD__UNIT_OF_MEASUREMENT = $n;
    const Pr = new he();
    Pr.setName("observedProperty"), Pr.setLowerBound(0), Pr.setUpperBound(1), On.getEStructuralFeatures().push(Pr), C.Literals.DATASTREAM_CLICK_PAYLOAD__OBSERVED_PROPERTY = Pr;
    const hs = new he();
    hs.setName("latestObservationResult"), hs.setLowerBound(0), hs.setUpperBound(1), On.getEStructuralFeatures().push(hs), C.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_RESULT = hs;
    const ds = new he();
    ds.setName("latestObservationTime"), ds.setLowerBound(0), ds.setUpperBound(1), On.getEStructuralFeatures().push(ds), C.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_TIME = ds;
    const _i = new Zn();
    _i.setName("ObservationClickPayload"), _i.setAbstract(!1), _i.setInterface(!1), this.getEClassifiers().push(_i), _i.setEPackage(this), C.Literals.OBSERVATION_CLICK_PAYLOAD = _i;
    const Er = new he();
    Er.setName("id"), Er.setLowerBound(0), Er.setUpperBound(1), _i.getEStructuralFeatures().push(Er), C.Literals.OBSERVATION_CLICK_PAYLOAD__ID = Er;
    const Yi = new he();
    Yi.setName("datastreamId"), Yi.setLowerBound(0), Yi.setUpperBound(1), _i.getEStructuralFeatures().push(Yi), C.Literals.OBSERVATION_CLICK_PAYLOAD__DATASTREAM_ID = Yi;
    const qr = new he();
    qr.setName("phenomenonTime"), qr.setLowerBound(0), qr.setUpperBound(1), _i.getEStructuralFeatures().push(qr), C.Literals.OBSERVATION_CLICK_PAYLOAD__PHENOMENON_TIME = qr;
    const Kr = new he();
    Kr.setName("result"), Kr.setLowerBound(0), Kr.setUpperBound(1), _i.getEStructuralFeatures().push(Kr), C.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT = Kr;
    const nr = new he();
    nr.setName("resultTime"), nr.setLowerBound(0), nr.setUpperBound(1), _i.getEStructuralFeatures().push(nr), C.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT_TIME = nr;
    const nt = new Zn();
    nt.setName("MapClickPayload"), nt.setAbstract(!1), nt.setInterface(!1), this.getEClassifiers().push(nt), nt.setEPackage(this), C.Literals.MAP_CLICK_PAYLOAD = nt;
    const Nt = new he();
    Nt.setName("lat"), Nt.setLowerBound(0), Nt.setUpperBound(1), nt.getEStructuralFeatures().push(Nt), C.Literals.MAP_CLICK_PAYLOAD__LAT = Nt;
    const ir = new he();
    ir.setName("lon"), ir.setLowerBound(0), ir.setUpperBound(1), nt.getEStructuralFeatures().push(ir), C.Literals.MAP_CLICK_PAYLOAD__LON = ir;
    const Mn = new Zn();
    Mn.setName("LocationClickPayload"), Mn.setAbstract(!1), Mn.setInterface(!1), this.getEClassifiers().push(Mn), Mn.setEPackage(this), C.Literals.LOCATION_CLICK_PAYLOAD = Mn;
    const gi = new he();
    gi.setName("id"), gi.setLowerBound(0), gi.setUpperBound(1), Mn.getEStructuralFeatures().push(gi), C.Literals.LOCATION_CLICK_PAYLOAD__ID = gi;
    const xr = new he();
    xr.setName("name"), xr.setLowerBound(0), xr.setUpperBound(1), Mn.getEStructuralFeatures().push(xr), C.Literals.LOCATION_CLICK_PAYLOAD__NAME = xr;
    const We = new he();
    We.setName("geometry"), We.setLowerBound(0), We.setUpperBound(1), Mn.getEStructuralFeatures().push(We), C.Literals.LOCATION_CLICK_PAYLOAD__GEOMETRY = We;
    const Dt = new he();
    Dt.setName("thingIds"), Dt.setLowerBound(0), Dt.setUpperBound(-1), Mn.getEStructuralFeatures().push(Dt), C.Literals.LOCATION_CLICK_PAYLOAD__THING_IDS = Dt, C.Literals.MAP_WIDGET_INTERFACE.getESuperTypes().push(Lo("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("WidgetActionInterface")), C.Literals.THING_CLICK_PAYLOAD.getESuperTypes().push(Lo("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.DATASTREAM_CLICK_PAYLOAD.getESuperTypes().push(Lo("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.OBSERVATION_CLICK_PAYLOAD.getESuperTypes().push(Lo("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.MAP_CLICK_PAYLOAD.getESuperTypes().push(Lo("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.LOCATION_CLICK_PAYLOAD.getESuperTypes().push(Lo("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), C.Literals.MAP_SETTINGS__DATASOURCE_ID.setEType(fe().getEClassifier("EString")), C.Literals.MAP_SETTINGS__DATASOURCE_IDS.setEType(fe().getEClassifier("EString")), C.Literals.MAP_SETTINGS__BASE_MAP_URL.setEType(fe().getEClassifier("EString")), C.Literals.MAP_SETTINGS__ZOOM.setEType(fe().getEClassifier("EInt")), C.Literals.MAP_SETTINGS__CENTER.setEType(fe().getEClassifier("EDouble")), C.Literals.MAP_SETTINGS__ATTRIBUTION.setEType(fe().getEClassifier("EString")), C.Literals.MAP_SETTINGS__LAYERS.setEType(C.Literals.LAYER), C.Literals.MAP_SETTINGS__STYLES.setEType(C.Literals.D_S_RENDERER), C.Literals.MAP_SETTINGS__O_G_C_SSTYLES.setEType(C.Literals.RENDERER), C.Literals.MAP_SETTINGS__SERVICES.setEType(C.Literals.SERVICE), C.Literals.MAP_SETTINGS__FIXED.setEType(fe().getEClassifier("EBoolean")), C.Literals.MAP_SETTINGS__ENABLE_CLUSTERING.setEType(fe().getEClassifier("EBoolean")), C.Literals.MAP_SETTINGS__SELECTION_HIGHLIGHT_COLOR.setEType(fe().getEClassifier("EString")), C.Literals.MAP_SETTINGS__SELECTED_THING_ID.setEType(fe().getEClassifier("EString")), C.Literals.LAYER__DATASOURCE_ID.setEType(fe().getEClassifier("EString")), C.Literals.LAYER__SERVICE.setEType(fe().getEClassifier("EJavaObject")), C.Literals.LAYER__TYPE.setEType(fe().getEClassifier("EString")), C.Literals.LAYER__CHILDS.setEType(C.Literals.LAYER), C.Literals.LAYER__LEVEL.setEType(fe().getEClassifier("EInt")), C.Literals.LAYER__STYLE_IDS.setEType(fe().getEClassifier("EString")), C.Literals.LAYER__NAME.setEType(fe().getEClassifier("EString")), C.Literals.LAYER__TITLE.setEType(fe().getEClassifier("EString")), C.Literals.LAYER__ATTRIBUTION.setEType(fe().getEClassifier("EString")), C.Literals.LAYER__GEO_JSON.setEType(fe().getEClassifier("EJavaObject")), C.Literals.LAYER__WFS_SERVICE.setEType(fe().getEClassifier("EJavaObject")), C.Literals.LAYER__OPACITY.setEType(fe().getEClassifier("EDouble")), C.Literals.SERVICE__TYPE.setEType(fe().getEClassifier("EString")), C.Literals.SERVICE__URL.setEType(fe().getEClassifier("EString")), C.Literals.SERVICE__SERVICE.setEType(fe().getEClassifier("EJavaObject")), C.Literals.SERVICE__ID.setEType(fe().getEClassifier("EString")), C.Literals.ICON_SETTINGS__CURRENT_ICON.setEType(fe().getEClassifier("EString")), C.Literals.ICON_SETTINGS__ICON_COLOR.setEType(Lo("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), C.Literals.ICON_SETTINGS__ICON_SIZE.setEType(fe().getEClassifier("EInt")), C.Literals.ICON_SETTINGS__IS_ICON_FILLED.setEType(fe().getEClassifier("EBoolean")), C.Literals.ICON_SETTINGS__STROKE_WEIGHT.setEType(fe().getEClassifier("EInt")), C.Literals.ICON_SETTINGS__OPTIC_SIZE.setEType(fe().getEClassifier("EInt")), C.Literals.ICON_SETTINGS__GRADE.setEType(fe().getEClassifier("EInt")), C.Literals.POINT_PIN__COLOR.setEType(fe().getEClassifier("EString")), C.Literals.POINT_PIN__SOLID.setEType(fe().getEClassifier("EBoolean")), C.Literals.POINT_AND_AREA_SETTINGS__SHOW__SUB_ELEMENTS.setEType(fe().getEClassifier("EBoolean")), C.Literals.POINT_AND_AREA_SETTINGS__POINT_RENDER_AS.setEType(fe().getEClassifier("EString")), C.Literals.POINT_AND_AREA_SETTINGS__POINT_PROP.setEType(fe().getEClassifier("EString")), C.Literals.POINT_AND_AREA_SETTINGS__POINT.setEType(C.Literals.ICON_SETTINGS), C.Literals.POINT_AND_AREA_SETTINGS__POINT_PIN.setEType(C.Literals.POINT_PIN), C.Literals.POINT_AND_AREA_SETTINGS__AREA.setEType(C.Literals.MAP_PROPS), C.Literals.POINT_AND_AREA_SETTINGS__LABEL.setEType(fe().getEClassifier("EJavaObject")), C.Literals.D_S_RENDERER__NAME.setEType(fe().getEClassifier("EString")), C.Literals.D_S_RENDERER__DATASTREAM.setEType(C.Literals.CONDITION), C.Literals.D_S_RENDERER__OBSERVATIONS.setEType(C.Literals.OBSERVATION), C.Literals.D_S_RENDERER__RENDERER.setEType(C.Literals.POINT_AND_AREA_SETTINGS), C.Literals.D_S_RENDERER__ID.setEType(fe().getEClassifier("EString")), C.Literals.OBSERVATION__SETTING.setEType(fe().getEClassifier("EJavaObject")), C.Literals.OBSERVATION__COMPONENT.setEType(fe().getEClassifier("EString")), C.Literals.OBSERVATION__RENDERER.setEType(C.Literals.POINT_AND_AREA_SETTINGS), C.Literals.OBSERVATION__CONDITIONS.setEType(C.Literals.CONDITION), C.Literals.CONDITION__PROP.setEType(fe().getEClassifier("EString")), C.Literals.CONDITION__VALUE.setEType(fe().getEClassifier("EString")), C.Literals.RENDERER__NAME.setEType(fe().getEClassifier("EString")), C.Literals.RENDERER__THING.setEType(C.Literals.CONDITION), C.Literals.RENDERER__RENDERER.setEType(C.Literals.POINT_AND_AREA_SETTINGS), C.Literals.RENDERER__DS_RENDERER.setEType(C.Literals.D_S_RENDERER), C.Literals.RENDERER__OBSERVATIONREFRESH_TIME.setEType(fe().getEClassifier("EInt")), C.Literals.RENDERER__LAST_UPDATE.setEType(fe().getEClassifier("EInt")), C.Literals.RENDERER__ID.setEType(fe().getEClassifier("EString")), C.Literals.MAP_PROPS__STROKE.setEType(fe().getEClassifier("EBoolean")), C.Literals.MAP_PROPS__COLOR.setEType(fe().getEClassifier("EString")), C.Literals.MAP_PROPS__WEIGHT.setEType(fe().getEClassifier("EInt")), C.Literals.MAP_PROPS__OPACITY.setEType(fe().getEClassifier("EDouble")), C.Literals.MAP_PROPS__LINE_CAP.setEType(fe().getEClassifier("EString")), C.Literals.MAP_PROPS__DASH_OFFSET.setEType(fe().getEClassifier("EString")), C.Literals.MAP_PROPS__FILL.setEType(fe().getEClassifier("EBoolean")), C.Literals.MAP_PROPS__FILL_OPACITY.setEType(fe().getEClassifier("EDouble")), C.Literals.MAP_PROPS__FILL_COLOR.setEType(fe().getEClassifier("EString")), C.Literals.MAP_PROPS__CLASS_NAME.setEType(fe().getEClassifier("EString")), C.Literals.THING_CLICK_PAYLOAD__ID.setEType(fe().getEClassifier("EString")), C.Literals.THING_CLICK_PAYLOAD__NAME.setEType(fe().getEClassifier("EString")), C.Literals.THING_CLICK_PAYLOAD__DESCRIPTION.setEType(fe().getEClassifier("EString")), C.Literals.THING_CLICK_PAYLOAD__PROPERTIES.setEType(fe().getEClassifier("EJavaObject")), C.Literals.THING_CLICK_PAYLOAD__LOCATION.setEType(fe().getEClassifier("EJavaObject")), C.Literals.THING_CLICK_PAYLOAD__RENDERER_ID.setEType(fe().getEClassifier("EString")), C.Literals.THING_CLICK_PAYLOAD__DATASTREAMS.setEType(C.Literals.DATASTREAM_SUMMARY), C.Literals.DATASTREAM_SUMMARY__ID.setEType(fe().getEClassifier("EString")), C.Literals.DATASTREAM_SUMMARY__NAME.setEType(fe().getEClassifier("EString")), C.Literals.DATASTREAM_SUMMARY__OBSERVED_PROPERTY.setEType(fe().getEClassifier("EString")), C.Literals.DATASTREAM_CLICK_PAYLOAD__ID.setEType(fe().getEClassifier("EString")), C.Literals.DATASTREAM_CLICK_PAYLOAD__NAME.setEType(fe().getEClassifier("EString")), C.Literals.DATASTREAM_CLICK_PAYLOAD__THING_ID.setEType(fe().getEClassifier("EString")), C.Literals.DATASTREAM_CLICK_PAYLOAD__UNIT_OF_MEASUREMENT.setEType(fe().getEClassifier("EJavaObject")), C.Literals.DATASTREAM_CLICK_PAYLOAD__OBSERVED_PROPERTY.setEType(fe().getEClassifier("EString")), C.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_RESULT.setEType(fe().getEClassifier("EJavaObject")), C.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_TIME.setEType(fe().getEClassifier("EString")), C.Literals.OBSERVATION_CLICK_PAYLOAD__ID.setEType(fe().getEClassifier("EString")), C.Literals.OBSERVATION_CLICK_PAYLOAD__DATASTREAM_ID.setEType(fe().getEClassifier("EString")), C.Literals.OBSERVATION_CLICK_PAYLOAD__PHENOMENON_TIME.setEType(fe().getEClassifier("EString")), C.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT.setEType(fe().getEClassifier("EJavaObject")), C.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT_TIME.setEType(fe().getEClassifier("EString")), C.Literals.MAP_CLICK_PAYLOAD__LAT.setEType(fe().getEClassifier("EDouble")), C.Literals.MAP_CLICK_PAYLOAD__LON.setEType(fe().getEClassifier("EDouble")), C.Literals.LOCATION_CLICK_PAYLOAD__ID.setEType(fe().getEClassifier("EString")), C.Literals.LOCATION_CLICK_PAYLOAD__NAME.setEType(fe().getEClassifier("EString")), C.Literals.LOCATION_CLICK_PAYLOAD__GEOMETRY.setEType(fe().getEClassifier("EJavaObject")), C.Literals.LOCATION_CLICK_PAYLOAD__THING_IDS.setEType(fe().getEClassifier("EString"));
  }
}
class Xe extends El {
  static {
    this.ID = 4;
  }
  static {
    this.NAME = 5;
  }
  static {
    this.DESCRIPTION = 6;
  }
  static {
    this.PROPERTIES = 7;
  }
  static {
    this.LOCATION = 8;
  }
  static {
    this.RENDERER_ID = 9;
  }
  static {
    this.DATASTREAMS = 10;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.THING_CLICK_PAYLOAD;
  }
  // Getters and Setters
  get id() {
    return this._id;
  }
  set id(i) {
    const n = this._id;
    this._id = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Xe.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xe.ID,
      merge: () => !1
    });
  }
  get name() {
    return this._name;
  }
  set name(i) {
    const n = this._name;
    this._name = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Xe.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xe.NAME,
      merge: () => !1
    });
  }
  get description() {
    return this._description;
  }
  set description(i) {
    const n = this._description;
    this._description = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Xe.DESCRIPTION),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xe.DESCRIPTION,
      merge: () => !1
    });
  }
  get properties() {
    return this._properties;
  }
  set properties(i) {
    const n = this._properties;
    this._properties = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Xe.PROPERTIES),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xe.PROPERTIES,
      merge: () => !1
    });
  }
  get location() {
    return this._location;
  }
  set location(i) {
    const n = this._location;
    this._location = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Xe.LOCATION),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xe.LOCATION,
      merge: () => !1
    });
  }
  get rendererId() {
    return this._rendererId;
  }
  set rendererId(i) {
    const n = this._rendererId;
    this._rendererId = i, this.eDeliver() && this.eNotify({
      getNotifier: () => this,
      getEventType: () => 1,
      // SET
      getFeature: () => this.eClass().getEStructuralFeature(Xe.RENDERER_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xe.RENDERER_ID,
      merge: () => !1
    });
  }
  get datastreams() {
    return this._datastreams || (this._datastreams = os(this, this.eClass().getEStructuralFeature("datastreams"))), this._datastreams;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Xe.ID:
        return this.id;
      case Xe.NAME:
        return this.name;
      case Xe.DESCRIPTION:
        return this.description;
      case Xe.PROPERTIES:
        return this.properties;
      case Xe.LOCATION:
        return this.location;
      case Xe.RENDERER_ID:
        return this.rendererId;
      case Xe.DATASTREAMS:
        return this.datastreams;
      default:
        return super.eGet(i);
    }
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    switch (this.eClass().getFeatureID(i)) {
      case Xe.ID:
        this.id = n, super.eSet(i, n);
        break;
      case Xe.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case Xe.DESCRIPTION:
        this.description = n, super.eSet(i, n);
        break;
      case Xe.PROPERTIES:
        this.properties = n, super.eSet(i, n);
        break;
      case Xe.LOCATION:
        this.location = n, super.eSet(i, n);
        break;
      case Xe.RENDERER_ID:
        this.rendererId = n, super.eSet(i, n);
        break;
      case Xe.DATASTREAMS:
        this.datastreams.clear(), this.datastreams.addAll(n), super.eSet(i, n);
        break;
      default:
        super.eSet(i, n);
    }
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Xe.ID:
        return this._id !== void 0;
      case Xe.NAME:
        return this._name !== void 0;
      case Xe.DESCRIPTION:
        return this._description !== void 0;
      case Xe.PROPERTIES:
        return this._properties !== void 0;
      case Xe.LOCATION:
        return this._location !== void 0;
      case Xe.RENDERER_ID:
        return this._rendererId !== void 0;
      case Xe.DATASTREAMS:
        return this._datastreams !== void 0 && !this._datastreams.isEmpty();
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Xe.ID:
        this._id = void 0;
        return;
      case Xe.NAME:
        this._name = void 0;
        return;
      case Xe.DESCRIPTION:
        this._description = void 0;
        return;
      case Xe.PROPERTIES:
        this._properties = void 0;
        return;
      case Xe.LOCATION:
        this._location = void 0;
        return;
      case Xe.RENDERER_ID:
        this._rendererId = void 0;
        return;
      case Xe.DATASTREAMS:
        this._datastreams && this._datastreams.clear();
        return;
      default:
        super.eUnset(i);
    }
  }
}
const vT = /* @__PURE__ */ st({
  __name: "OGCSTALayer",
  props: {
    locations: {},
    renderers: {},
    layerOptions: {},
    markerPane: {},
    areaPane: {},
    widgetId: {},
    compareThing: { type: Function },
    compareDatastream: { type: Function },
    isFeatureCollection: { type: Function },
    isPoint: { type: Function },
    getPoint: { type: Function },
    getPointformArea: { type: Function },
    transformToGeoJson: { type: Function },
    getById: { type: Function },
    selectedThingId: {},
    selectionHighlightColor: {},
    tooltipThingId: {},
    tooltipContent: {}
  },
  setup(o) {
    const i = GE.createLogger("daanse:maps:click"), n = o, l = pe({}), d = Ot(Tp.TINY_EMITTER), p = Yn(() => {
      const z = [], Y = [];
      for (const R of n.renderers)
        for (const q of n.locations) {
          const ce = q.things ?? [];
          for (const we of ce) {
            if (!n.compareThing(we, R)) continue;
            const Le = we["@iot.id"] || we.iotId || "", te = q["@iot.id"] || "", Z = n.getPoint(q.location), j = n.isFeatureCollection(q.location), U = n.isPoint(q.location);
            z.push({
              key: `${R.id}-${te}-${Le}`,
              thing: we,
              location: q,
              renderer: R,
              point: Z,
              geoJson: j && !U ? q.location : null,
              isArea: j && !U
            });
            const se = we.datastreams ?? [];
            for (const ge of se) {
              const Je = ge.iotId || "";
              for (const De of R.ds_renderer) {
                if (!n.compareDatastream(ge, De)) continue;
                const Pe = ge.observedArea ? n.transformToGeoJson(ge.observedArea) : null, _e = De.placement === Po.Thing ? Z : Pe ? n.getPointformArea(Pe) : null, St = De.observations?.some(
                  (de) => !n.getById(de.component)?.isLayerRenderer
                ), J = (De.renderer.point_render_as !== "none" || St) && !!_e;
                Y.push({
                  key: `${R.id}-${De.id}-${Je}`,
                  datastream: ge,
                  thing: we,
                  location: q,
                  renderer: R,
                  subrenderer: De,
                  point: _e,
                  observedAreaGeoJson: Pe,
                  showMarker: J
                });
              }
            }
          }
        }
      return { things: z, datastreams: Y };
    }), _ = (z, Y, R) => {
      if (!n.widgetId) return;
      const q = new Xe();
      q.id = (z["@iot.id"] || z.iotId) ?? "", q.name = z.name ?? "", q.description = z.description ?? "", q.properties = z.properties, q.location = Y.location, q.rendererId = R.id ?? "";
      const ce = z.datastreams || z.Datastreams || [];
      for (const Le of ce) {
        const te = new Dn();
        te.id = Le["@iot.id"] || Le.iotId || "", te.name = Le.name ?? "", te.observedProperty = Le.ObservedProperty?.name || Le.observedProperty?.name || "", q.datastreams.add(te);
      }
      const we = {
        type: "widget:MapWidget:click_on_thing",
        widgetId: n.widgetId,
        payload: q,
        timestamp: Date.now()
      };
      console.log("🗺️ Map Widget: Emitting thing click event", we), d.emit("widget:MapWidget:click_on_thing", we);
    }, v = (z, Y, R) => {
      if (i("Emitting datastream click, widgetId: %s", n.widgetId), !n.widgetId) {
        i("⚠️ widgetId is undefined, not emitting event");
        return;
      }
      const q = new Ye();
      q.id = (z.iotId || z["@iot.id"]) ?? "", q.name = z.name ?? "", q.thingId = (Y["@iot.id"] || Y.iotId) ?? "", q.unitOfMeasurement = z.unitOfMeasurement ?? "", q.observedProperty = z.observedProperty?.name ?? "";
      const ce = z.observations || [];
      if (ce.length > 0) {
        const we = ce[ce.length - 1];
        q.latestObservationResult = we.result ?? "", q.latestObservationTime = we.phenomenonTime ?? "";
      }
      d.emit("widget:MapWidget:click_on_datastream", {
        type: "widget:MapWidget:click_on_datastream",
        widgetId: n.widgetId,
        payload: q,
        timestamp: Date.now()
      });
    }, m = (z, Y, R) => {
      i("🖱️ Thing clicked: %o", z), l.value[z.iotId ?? "null"] = !l.value[z.iotId ?? "null"], _(z, Y, R);
    }, E = (z, Y, R) => {
      i("🖱️ Datastream marker clicked: %o", z), v(z, Y);
    }, A = (z, Y, R) => {
      if (!n.widgetId) return;
      const q = new Xe();
      q.id = (z["@iot.id"] || z.iotId) ?? "", q.name = z.name ?? "", q.description = z.description ?? "", q.properties = z.properties, q.location = Y.location, q.rendererId = R.id ?? "", d.emit("widget:MapWidget:hover_on_thing", {
        type: "widget:MapWidget:hover_on_thing",
        widgetId: n.widgetId,
        payload: q,
        timestamp: Date.now()
      });
    }, w = (z, Y) => {
      if (!n.widgetId) return;
      const R = new Ye();
      R.id = (z.iotId || z["@iot.id"]) ?? "", R.name = z.name ?? "", R.thingId = (Y["@iot.id"] || Y.iotId) ?? "", R.unitOfMeasurement = z.unitOfMeasurement ?? "", R.observedProperty = z.observedProperty?.name ?? "";
      const q = z.observations || [];
      if (q.length > 0) {
        const ce = q[q.length - 1];
        R.latestObservationResult = ce.result ?? "", R.latestObservationTime = ce.phenomenonTime ?? "";
      }
      d.emit("widget:MapWidget:hover_on_datastream", {
        type: "widget:MapWidget:hover_on_datastream",
        widgetId: n.widgetId,
        payload: R,
        timestamp: Date.now()
      });
    }, b = (z) => n.tooltipThingId ? (z["@iot.id"] || z.iotId) === n.tooltipThingId : !1, N = (z) => b(z) && n.tooltipContent || null, k = (z) => z.name || z.description || z.iotId || "", G = (z, Y) => {
      const R = [];
      Y.name && R.push(Y.name), z.name && R.push(z.name);
      const q = z.observations || [];
      if (q.length > 0) {
        const ce = q[q.length - 1], we = z.unitOfMeasurement?.symbol || "";
        R.push(`${ce.result} ${we}`);
      }
      return R.join(" - ");
    }, X = (z) => n.selectedThingId ? (z["@iot.id"] || z.iotId) === n.selectedThingId : !1, x = Yn(() => n.selectionHighlightColor || "#ff0000");
    return (z, Y) => (V(), ie(Re, null, [
      (V(!0), ie(Re, null, Yt(p.value.things, (R) => (V(), ie(Re, {
        key: R.key + "area"
      }, [
        R.isArea ? (V(), Ze(Oe(Fo), {
          key: 0,
          ref_for: !0,
          ref: "thingsLayer",
          geojson: R.location.location,
          options: o.layerOptions,
          "options-style": () => X(R.thing) ? { ...R.renderer.renderer.area, fillColor: x.value, color: x.value, fillOpacity: 0.5, weight: 3 } : R.renderer.renderer.area
        }, null, 8, ["geojson", "options", "options-style"])) : Ge("", !0)
      ], 64))), 128)),
      (V(!0), ie(Re, null, Yt(p.value.things, (R) => (V(), ie(Re, {
        key: R.key + "marker"
      }, [
        R.point ? (V(), Ze(Oe(gl), {
          key: 0,
          "lat-lng": R.point,
          options: { pane: o.markerPane },
          onClick: (q) => m(R.thing, R.location, R.renderer),
          onMouseenter: (q) => A(R.thing, R.location, R.renderer)
        }, {
          default: Ae(() => [
            le(Oe(_l), { "class-name": "someExtraClass" }, {
              default: Ae(() => [
                le(yl, {
                  "render-as": R.renderer.renderer.point_render_as,
                  "background-color": R.renderer.renderer.pointPin?.color,
                  "icon-config": R.renderer.renderer.point,
                  "property-value": R.thing[R.renderer.renderer.point_prop ?? ""],
                  "image-url": R.renderer.renderer.point_image_url,
                  "image-size": R.renderer.renderer.point_image_size || 32,
                  "is-solid": R.renderer.renderer.pointPin?.solid,
                  "is-selected": X(R.thing),
                  "selection-color": x.value
                }, null, 8, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size", "is-solid", "is-selected", "selection-color"])
              ]),
              _: 2
            }, 1024),
            le(Oe(Vf), {
              options: {
                permanent: b(R.thing),
                direction: "top",
                offset: [0, -20]
              }
            }, {
              default: Ae(() => [
                Rt(yt(N(R.thing) || k(R.thing)), 1)
              ]),
              _: 2
            }, 1032, ["options"])
          ]),
          _: 2
        }, 1032, ["lat-lng", "options", "onClick", "onMouseenter"])) : Ge("", !0)
      ], 64))), 128)),
      (V(!0), ie(Re, null, Yt(p.value.datastreams, (R) => (V(), ie(Re, {
        key: R.key + "dsarea"
      }, [
        R.observedAreaGeoJson ? (V(), Ze(Oe(Fo), {
          key: 0,
          ref_for: !0,
          ref: "thingsLayer",
          geojson: R.observedAreaGeoJson,
          options: { ...o.layerOptions, pane: o.areaPane || "overlayPane" },
          "options-style": () => R.subrenderer.renderer.area
        }, null, 8, ["geojson", "options", "options-style"])) : Ge("", !0)
      ], 64))), 128)),
      (V(!0), ie(Re, null, Yt(p.value.datastreams, (R) => (V(), ie(Re, {
        key: R.key + "dslayer"
      }, [
        R.subrenderer.observations && R.datastream.observations ? (V(!0), ie(Re, { key: 0 }, Yt(R.subrenderer.observations, (q) => (V(), ie(Re, {
          key: q.component
        }, [
          o.getById(q.component)?.isLayerRenderer ? (V(!0), ie(Re, { key: 0 }, Yt(R.datastream.observations, (ce) => (V(), ie(Re, {
            key: ce.iotId
          }, [
            o.getById(q.component) && ce.result ? (V(), Ze(Sh(o.getById(q.component)?.component), {
              key: 0,
              config: q.setting,
              data: ce.result,
              "marker-size": 0
            }, null, 8, ["config", "data"])) : Ge("", !0)
          ], 64))), 128)) : Ge("", !0)
        ], 64))), 128)) : Ge("", !0)
      ], 64))), 128)),
      (V(!0), ie(Re, null, Yt(p.value.datastreams, (R) => (V(), ie(Re, {
        key: R.key + "dsmarker"
      }, [
        R.showMarker ? (V(), Ze(Oe(gl), {
          key: 0,
          "lat-lng": R.point,
          options: { pane: o.markerPane },
          onClick: (q) => E(R.datastream, R.thing, R.subrenderer),
          onMouseenter: (q) => w(R.datastream, R.thing)
        }, {
          default: Ae(() => [
            le(Oe(Vf), null, {
              default: Ae(() => [
                Rt(yt(G(R.datastream, R.thing)), 1)
              ]),
              _: 2
            }, 1024),
            le(Oe(_l), { "class-name": "someExtraClass" }, {
              default: Ae(() => [
                le(yl, {
                  "render-as": R.subrenderer.renderer.point_render_as,
                  "background-color": R.subrenderer.renderer.pointPin?.color,
                  "icon-config": R.subrenderer.renderer.point,
                  "property-value": R.datastream[R.subrenderer.renderer.point_prop ?? ""],
                  "image-url": R.subrenderer.renderer.point_image_url,
                  "image-size": R.subrenderer.renderer.point_image_size || 32,
                  "is-solid": R.subrenderer.renderer.pointPin?.solid,
                  "is-round": !0,
                  "is-selected": X(R.thing),
                  "selection-color": x.value
                }, {
                  observation: Ae(() => [
                    R.datastream.observations ? (V(!0), ie(Re, { key: 0 }, Yt(R.subrenderer.observations, (q) => (V(), ie(Re, {
                      key: q.component
                    }, [
                      o.getById(q.component) && !o.getById(q.component)?.isLayerRenderer ? (V(), Ze(Sh(o.getById(q.component)?.component), {
                        config: q.setting,
                        data: R.datastream.observations[R.subrenderer.renderer.point_render_as === "none" ? 0 : R.datastream.observations.length - 1]?.result,
                        key: R.datastream.observations[R.subrenderer.renderer.point_render_as === "none" ? 0 : R.datastream.observations.length - 1]?.phenomenonTime,
                        "marker-size": R.subrenderer.renderer.point_render_as === "image" ? 0 : R.subrenderer.renderer.point_render_as === "none" ? R.renderer.renderer.point_image_size || 32 : 45
                      }, null, 8, ["config", "data", "marker-size"])) : Ge("", !0)
                    ], 64))), 128)) : Ge("", !0)
                  ]),
                  _: 2
                }, 1032, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size", "is-solid", "is-selected", "selection-color"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["lat-lng", "options", "onClick", "onMouseenter"])) : Ge("", !0)
      ], 64))), 128))
    ], 64));
  }
}), yT = /* @__PURE__ */ st({
  __name: "RouteLayer",
  props: {
    datasourceId: {}
  },
  setup(o) {
    const i = o, n = pe(null);
    let l = null;
    const d = Yn(() => n.value?.geojson?.features ? n.value.geojson.features.filter(
      (w) => w.geometry?.type === "LineString"
    ) : []), p = Yn(() => n.value?.geojson?.features ? n.value.geojson.features.filter(
      (w) => w.geometry?.type === "Point"
    ) : []), _ = Yn(() => d.value.length === 0 ? null : {
      type: "FeatureCollection",
      features: d.value
    });
    function v(w) {
      const [b, N] = w.geometry.coordinates;
      return [N, b];
    }
    function m(w) {
      const b = w.properties?.role;
      return b === "start" ? "#4caf50" : b === "end" ? "#f44336" : "#2196f3";
    }
    const E = () => ({
      color: "#c45e00",
      weight: 5,
      opacity: 0.8
    });
    async function A() {
      if (i.datasourceId)
        try {
          const b = Ot(Os).getDatasource(
            i.datasourceId
          ), N = await b.getData("object");
          n.value = N, l && l(), l = b.subscribe(async () => {
            const k = await b.getData("object");
            n.value = k;
          });
        } catch (w) {
          console.warn("RouteLayer: Could not load route data:", w);
        }
    }
    return qt(() => {
      A();
    }), ki(
      () => i.datasourceId,
      () => A()
    ), wl(() => {
      l && l();
    }), (w, b) => (V(), ie(Re, null, [
      _.value ? (V(), Ze(Oe(Fo), {
        key: 0,
        geojson: _.value,
        "options-style": E
      }, null, 8, ["geojson"])) : Ge("", !0),
      (V(!0), ie(Re, null, Yt(p.value, (N, k) => (V(), Ze(Oe(qE), {
        key: "wp-" + k,
        "lat-lng": v(N),
        radius: 8,
        "fill-color": m(N),
        color: "#fff",
        weight: 2,
        "fill-opacity": 1
      }, null, 8, ["lat-lng", "fill-color"]))), 128))
    ], 64));
  }
}), u_ = () => {
  const o = async (p, _) => {
    const v = new AbortController(), m = setTimeout(() => v.abort(), _);
    try {
      const E = await fetch(p, { signal: v.signal });
      return clearTimeout(m), E;
    } catch (E) {
      throw clearTimeout(m), E.name === "AbortError" ? new Error(`Timeout after ${_}ms`) : E;
    }
  }, i = (p, _) => {
    const v = {
      _capabilitiesUrl: _,
      _info: {},
      _layers: [],
      _operationUrls: {}
    }, m = p.querySelector("Service");
    m && (v._info.title = m.querySelector("Title")?.textContent || "", v._info.name = m.querySelector("Name")?.textContent || "", v._info.abstract = m.querySelector("Abstract")?.textContent || "");
    const E = p.querySelector("Capability > Request");
    E && ["GetMap", "GetCapabilities", "GetFeatureInfo", "GetLegendGraphic"].forEach((N) => {
      const k = E.querySelector(N);
      if (k) {
        const G = k.querySelector("DCPType > HTTP > Get > OnlineResource");
        if (G) {
          const X = G.getAttribute("xlink:href") || G.getAttribute("href");
          X && (v._operationUrls[N] = X);
        }
      }
    }), v._operationUrls.GetMap || (v._operationUrls.GetMap = _.split("?")[0]);
    const A = (b, N = []) => {
      b.querySelectorAll(":scope > Layer").forEach((G) => {
        const X = {
          name: G.querySelector(":scope > Name")?.textContent || "",
          title: G.querySelector(":scope > Title")?.textContent || "",
          abstract: G.querySelector(":scope > Abstract")?.textContent || "",
          children: []
        }, x = G.querySelector(":scope > BoundingBox, :scope > LatLonBoundingBox, :scope > EX_GeographicBoundingBox");
        x && (X.boundingBox = {
          minx: parseFloat(x.getAttribute("minx") || x.querySelector("westBoundLongitude")?.textContent || "0"),
          miny: parseFloat(x.getAttribute("miny") || x.querySelector("southBoundLatitude")?.textContent || "0"),
          maxx: parseFloat(x.getAttribute("maxx") || x.querySelector("eastBoundLongitude")?.textContent || "0"),
          maxy: parseFloat(x.getAttribute("maxy") || x.querySelector("northBoundLatitude")?.textContent || "0")
        }), A(G, X.children), N.push(X);
      });
    }, w = p.querySelector("Capability");
    return w && A(w, v._layers), v.getLayers = () => {
      const b = (N) => {
        const k = [];
        return N.forEach((G) => {
          k.push(G), G.children && G.children.length > 0 && k.push(...b(G.children));
        }), k;
      };
      return b(v._layers);
    }, v.getOperationUrl = (b) => v._operationUrls[b] || v._operationUrls.GetMap || _.split("?")[0], v;
  }, n = (p, _) => {
    const v = {
      _capabilitiesUrl: _,
      _info: {},
      _featureTypes: []
    }, m = p.querySelector("ServiceIdentification, Service");
    return m && (v._info.title = m.querySelector("Title")?.textContent || "", v._info.name = m.querySelector("Name, ServiceType")?.textContent || "", v._info.abstract = m.querySelector("Abstract")?.textContent || ""), p.querySelectorAll("FeatureType").forEach((A) => {
      v._featureTypes.push({
        name: A.querySelector("Name")?.textContent || "",
        title: A.querySelector("Title")?.textContent || "",
        abstract: A.querySelector("Abstract")?.textContent || ""
      });
    }), v.getFeatureTypes = () => v._featureTypes, v;
  };
  return {
    createServiceWMS: async (p) => {
      try {
        const _ = p.includes("?") ? `${p}&SERVICE=WMS&REQUEST=GetCapabilities` : `${p}?SERVICE=WMS&REQUEST=GetCapabilities`;
        console.log("[Service.ts] Fetching WMS capabilities from:", _);
        const v = await o(_, 15e3);
        if (!v.ok)
          throw new Error(`HTTP ${v.status}: ${v.statusText}`);
        const m = await v.text(), A = new DOMParser().parseFromString(m, "text/xml");
        if (A.querySelector("parsererror"))
          throw new Error("Invalid XML response");
        const b = A.documentElement;
        if (!b.tagName.includes("Capabilities") && b.tagName !== "WMT_MS_Capabilities")
          throw new Error("Not a valid WMS GetCapabilities response");
        const N = i(A, p);
        return console.log("[Service.ts] WMS service parsed:", N), console.log("[Service.ts] WMS _info:", N._info), console.log("[Service.ts] WMS _layers:", N._layers), console.log("[Service.ts] WMS getLayers:", typeof N.getLayers), console.log("[Service.ts] WMS getLayers():", N.getLayers()), console.log("[Service.ts] WMS getOperationUrl:", typeof N.getOperationUrl), console.log("[Service.ts] WMS getOperationUrl(GetMap):", N.getOperationUrl("GetMap")), console.log("[Service.ts] WMS _operationUrls:", N._operationUrls), N;
      } catch (_) {
        throw console.log("not a WMS Service:", _), _;
      }
    },
    createServiceWFS: async (p) => {
      try {
        const _ = p.includes("?") ? `${p}&SERVICE=WFS&REQUEST=GetCapabilities` : `${p}?SERVICE=WFS&REQUEST=GetCapabilities`;
        console.log("[Service.ts] Fetching WFS capabilities from:", _);
        const v = await o(_, 15e3);
        if (!v.ok)
          throw new Error(`HTTP ${v.status}: ${v.statusText}`);
        const m = await v.text(), A = new DOMParser().parseFromString(m, "text/xml");
        if (A.querySelector("parsererror"))
          throw new Error("Invalid XML response");
        if (!A.documentElement.tagName.includes("Capabilities"))
          throw new Error("Not a valid WFS GetCapabilities response");
        const N = n(A, p);
        return console.log("[Service.ts] WFS service parsed:", N), N;
      } catch (_) {
        throw console.log("not a WFS Service:", _), _;
      }
    }
  };
};
var Iu = { exports: {} }, uh, ep;
function ET() {
  if (ep) return uh;
  ep = 1;
  var o = 1e3, i = o * 60, n = i * 60, l = n * 24, d = l * 7, p = l * 365.25;
  uh = function(A, w) {
    w = w || {};
    var b = typeof A;
    if (b === "string" && A.length > 0)
      return _(A);
    if (b === "number" && isFinite(A))
      return w.long ? m(A) : v(A);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(A)
    );
  };
  function _(A) {
    if (A = String(A), !(A.length > 100)) {
      var w = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        A
      );
      if (w) {
        var b = parseFloat(w[1]), N = (w[2] || "ms").toLowerCase();
        switch (N) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return b * p;
          case "weeks":
          case "week":
          case "w":
            return b * d;
          case "days":
          case "day":
          case "d":
            return b * l;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return b * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return b * i;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return b * o;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return b;
          default:
            return;
        }
      }
    }
  }
  function v(A) {
    var w = Math.abs(A);
    return w >= l ? Math.round(A / l) + "d" : w >= n ? Math.round(A / n) + "h" : w >= i ? Math.round(A / i) + "m" : w >= o ? Math.round(A / o) + "s" : A + "ms";
  }
  function m(A) {
    var w = Math.abs(A);
    return w >= l ? E(A, w, l, "day") : w >= n ? E(A, w, n, "hour") : w >= i ? E(A, w, i, "minute") : w >= o ? E(A, w, o, "second") : A + " ms";
  }
  function E(A, w, b, N) {
    var k = w >= b * 1.5;
    return Math.round(A / b) + " " + N + (k ? "s" : "");
  }
  return uh;
}
var ch, tp;
function TT() {
  if (tp) return ch;
  tp = 1;
  function o(i) {
    l.debug = l, l.default = l, l.coerce = E, l.disable = v, l.enable = p, l.enabled = m, l.humanize = ET(), l.destroy = A, Object.keys(i).forEach((w) => {
      l[w] = i[w];
    }), l.names = [], l.skips = [], l.formatters = {};
    function n(w) {
      let b = 0;
      for (let N = 0; N < w.length; N++)
        b = (b << 5) - b + w.charCodeAt(N), b |= 0;
      return l.colors[Math.abs(b) % l.colors.length];
    }
    l.selectColor = n;
    function l(w) {
      let b, N = null, k, G;
      function X(...x) {
        if (!X.enabled)
          return;
        const z = X, Y = Number(/* @__PURE__ */ new Date()), R = Y - (b || Y);
        z.diff = R, z.prev = b, z.curr = Y, b = Y, x[0] = l.coerce(x[0]), typeof x[0] != "string" && x.unshift("%O");
        let q = 0;
        x[0] = x[0].replace(/%([a-zA-Z%])/g, (we, Le) => {
          if (we === "%%")
            return "%";
          q++;
          const te = l.formatters[Le];
          if (typeof te == "function") {
            const Z = x[q];
            we = te.call(z, Z), x.splice(q, 1), q--;
          }
          return we;
        }), l.formatArgs.call(z, x), (z.log || l.log).apply(z, x);
      }
      return X.namespace = w, X.useColors = l.useColors(), X.color = l.selectColor(w), X.extend = d, X.destroy = l.destroy, Object.defineProperty(X, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => N !== null ? N : (k !== l.namespaces && (k = l.namespaces, G = l.enabled(w)), G),
        set: (x) => {
          N = x;
        }
      }), typeof l.init == "function" && l.init(X), X;
    }
    function d(w, b) {
      const N = l(this.namespace + (typeof b > "u" ? ":" : b) + w);
      return N.log = this.log, N;
    }
    function p(w) {
      l.save(w), l.namespaces = w, l.names = [], l.skips = [];
      const b = (typeof w == "string" ? w : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const N of b)
        N[0] === "-" ? l.skips.push(N.slice(1)) : l.names.push(N);
    }
    function _(w, b) {
      let N = 0, k = 0, G = -1, X = 0;
      for (; N < w.length; )
        if (k < b.length && (b[k] === w[N] || b[k] === "*"))
          b[k] === "*" ? (G = k, X = N, k++) : (N++, k++);
        else if (G !== -1)
          k = G + 1, X++, N = X;
        else
          return !1;
      for (; k < b.length && b[k] === "*"; )
        k++;
      return k === b.length;
    }
    function v() {
      const w = [
        ...l.names,
        ...l.skips.map((b) => "-" + b)
      ].join(",");
      return l.enable(""), w;
    }
    function m(w) {
      for (const b of l.skips)
        if (_(w, b))
          return !1;
      for (const b of l.names)
        if (_(w, b))
          return !0;
      return !1;
    }
    function E(w) {
      return w instanceof Error ? w.stack || w.message : w;
    }
    function A() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return l.enable(l.load()), l;
  }
  return ch = o, ch;
}
var np;
function wT() {
  return np || (np = 1, (function(o, i) {
    var n = {};
    i.formatArgs = d, i.save = p, i.load = _, i.useColors = l, i.storage = v(), i.destroy = /* @__PURE__ */ (() => {
      let E = !1;
      return () => {
        E || (E = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), i.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function l() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let E;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (E = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(E[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function d(E) {
      if (E[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + E[0] + (this.useColors ? "%c " : " ") + "+" + o.exports.humanize(this.diff), !this.useColors)
        return;
      const A = "color: " + this.color;
      E.splice(1, 0, A, "color: inherit");
      let w = 0, b = 0;
      E[0].replace(/%[a-zA-Z%]/g, (N) => {
        N !== "%%" && (w++, N === "%c" && (b = w));
      }), E.splice(b, 0, A);
    }
    i.log = console.debug || console.log || (() => {
    });
    function p(E) {
      try {
        E ? i.storage.setItem("debug", E) : i.storage.removeItem("debug");
      } catch {
      }
    }
    function _() {
      let E;
      try {
        E = i.storage.getItem("debug") || i.storage.getItem("DEBUG");
      } catch {
      }
      return !E && typeof process < "u" && "env" in process && (E = n.DEBUG), E;
    }
    function v() {
      try {
        return localStorage;
      } catch {
      }
    }
    o.exports = TT()(i);
    const { formatters: m } = o.exports;
    m.j = function(E) {
      try {
        return JSON.stringify(E);
      } catch (A) {
        return "[UnexpectedJSONParseError]: " + A.message;
      }
    };
  })(Iu, Iu.exports)), Iu.exports;
}
var ST = wT();
const no = /* @__PURE__ */ t_(ST);
no.log = console.log.bind(console);
const Fu = localStorage.getItem("debug");
console.log("[Maps Widget] Logger module loaded. localStorage.debug =", Fu);
console.log("[Maps Widget] debug.enable exists:", typeof no.enable);
Fu && (no.enable(Fu), console.log("[Maps Widget] Called debug.enable with:", Fu));
const hr = no("daanse:maps:map"), Nr = no("daanse:maps:datasource"), hh = no("daanse:maps:observations"), kn = no("daanse:maps:services"), AT = no("daanse:maps:tasks");
class c_ extends TE {
  // Feature ID Constants (eLiterals)
  // Private fields
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return C.Literals.MAP_WIDGET_INTERFACE;
  }
  // Getters and Setters
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    const n = this.eClass().getFeatureID(i);
    return super.eGet(i);
  }
  /**
   * Sets the value of the given feature
   */
  eSet(i, n) {
    const l = this.eClass().getFeatureID(i);
    super.eSet(i, n);
  }
  /**
   * Returns whether the feature has been set
   */
  eIsSet(i) {
    const n = this.eClass().getFeatureID(i);
    return super.eIsSet(i);
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    const n = this.eClass().getFeatureID(i);
    super.eUnset(i);
  }
  zoomToThing(i, n, l) {
    throw new Error("zoomToThing not implemented");
  }
  selectThingById(i) {
    throw new Error("selectThingById not implemented");
  }
  zoomToLocation(i, n, l) {
    throw new Error("zoomToLocation not implemented");
  }
  showTooltip(i, n) {
    throw new Error("showTooltip not implemented");
  }
  hideTooltip() {
    throw new Error("hideTooltip not implemented");
  }
  displayRoute(i, n, l) {
    throw new Error("displayRoute not implemented");
  }
  clearRoute() {
    throw new Error("clearRoute not implemented");
  }
}
const CT = {
  id: "mapholder",
  class: "holder",
  style: { height: "100%" }
}, bT = /* @__PURE__ */ st({
  __name: "MapsWidget",
  props: /* @__PURE__ */ Rh({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(o, { expose: i }) {
    const n = (F) => {
      const ae = F;
      return typeof ae?.toArray == "function" ? ae.toArray() : Array.isArray(ae) ? ae : [];
    }, l = (F) => F ?? void 0, d = o, { datasourceId: p, id: _ } = Sl(d), m = kE().params.pageid || "", E = _r(o, "configv"), A = pe(null), w = new Te(), b = [50.93115286, 11.60392726];
    function N() {
      if (E.value.center.size() === 0)
        for (const F of b) E.value.center.add(F);
    }
    const k = Ot(wE), G = Ot(Tp.TINY_EMITTER);
    function X(F) {
      if (!_?.value) return;
      const { lat: ae, lng: K } = F.latlng, ve = new Ai();
      ve.lat = ae, ve.lon = K, G.emit("widget:MapWidget:click_on_map", {
        type: "widget:MapWidget:click_on_map",
        widgetId: _.value,
        payload: ve,
        timestamp: Date.now()
      });
    }
    const { filterFeatureCollection: x, compareDatastream: z, compareThing: Y } = v1(), { isPoint: R, isFeatureCollection: q, transformToGeoJson: ce, isFeature: we } = y1(), { createServiceWMS: Le, createServiceWFS: te } = u_(), Z = pe({}), j = pe(/* @__PURE__ */ new Map()), U = pe(!1), se = /* @__PURE__ */ new Set(), ge = /* @__PURE__ */ new Map(), Je = /* @__PURE__ */ new Set(), De = /* @__PURE__ */ new Map(), Pe = A1(), _e = /* @__PURE__ */ new WeakMap();
    let St = [], J = 0;
    const de = async () => {
      const F = ++J, ae = [], K = Qa(Z.value), ve = Qa(j.value), Be = [];
      K?.datastreams && Be.push([p.value, K.datastreams]);
      for (const [mt, xt] of ve.entries()) {
        const Ut = Qa(xt);
        Ut?.datastreams && Be.push([mt, Ut.datastreams]);
      }
      const Fe = 4;
      let tt = performance.now();
      for (const [mt, xt] of Be)
        for (let Ut = 0; Ut < xt.length; Ut++) {
          if (performance.now() - tt > Fe) {
            if (F !== J) return;
            await new Promise((me) => setTimeout(me, 0)), tt = performance.now();
          }
          const Et = xt[Ut];
          if (Et.observedArea)
            _e.has(Et.observedArea) || _e.set(Et.observedArea, ce(Qa(Et.observedArea))), ae.push({ lng: 0, lat: 0, dsId: mt, dataStream: Et, geoJsonFeature: _e.get(Et.observedArea) });
          else if (Et.thing?.locations?.[0]) {
            const me = Et.thing.locations[0].location, ri = An(me);
            ri ? ae.push({ lng: ri[0], lat: ri[1], dsId: mt, dataStream: Et, geoJsonFeature: null }) : (_e.has(me) || _e.set(me, ce(me)), ae.push({ lng: 0, lat: 0, dsId: mt, dataStream: Et, geoJsonFeature: _e.get(me) }));
          }
        }
      F === J && (St = ae, hr("Spatial index built:", ae.length, "entries"));
    }, He = Yn(() => {
      try {
        return p.value && Ot(Os).getDatasource(p.value).type || "ogcsta";
      } catch (F) {
        return Nr("Could not detect datasource type:", F), "ogcsta";
      }
    }), gt = {
      rest: "object",
      ogcsta: "OGCSTAData",
      "OGC Composer": "OGCSTAData"
    }, re = Yn(() => gt[He.value] || "OGCSTAData"), { update: ke, callEvent: xe } = xE(p, re.value, Z), Kt = async (F) => {
      if (F) {
        if (Je.has(F)) {
          Nr("Datasource", F, "is already loading, skipping");
          return;
        }
        Je.add(F);
        try {
          const ae = Ot(Os), K = ae.getDatasource(F), ve = ae.getDatasourceType(F), Be = gt[ve] || "OGCSTAData";
          if (K && typeof K.getData == "function") {
            const Fe = await K.getData(Be);
            if (j.value.set(F, Fe), !se.has(F) && typeof K.subscribe == "function") {
              se.add(F);
              const tt = async () => {
                const xt = await K.getData(Be);
                j.value.set(F, xt);
              }, mt = K.subscribe(tt);
              typeof mt == "function" && ge.set(F, mt);
            }
          }
        } catch (ae) {
          Nr("Could not get datasource data for", F, ae);
        } finally {
          Je.delete(F);
        }
      }
    };
    ki(() => [E.value?.datasourceIds, E.value?.layers], async () => {
      const F = /* @__PURE__ */ new Set();
      E.value?.datasourceIds && E.value.datasourceIds.forEach((K) => F.add(K)), E.value?.layers && E.value.layers.forEach((K) => {
        K.datasourceId && K.datasourceId !== p.value && F.add(K.datasourceId);
      });
      let ae = !1;
      for (const K of F)
        j.value.has(K) || (await Kt(K), ae = !0);
      ae && A.value && (await de(), Ii());
    }, { deep: !0, immediate: !0 }), ki(p, (F, ae, K) => {
      ke(F, ae);
    }), ki(() => E.value?.OGCSstyles, (F, ae, K) => {
      Ii(), vr();
    }, { deep: !0 });
    const { getById: Qt } = ul();
    pe({});
    const Pn = pe(E.value?.selectedThingId ?? null), ln = pe(null), qn = pe(null), Un = pe(null), Ui = pe("#c45e00"), _n = pe(5);
    let zt = null;
    ki(Pn, (F) => {
      E.value && (E.value.selectedThingId = F ?? void 0);
    }), pe(!1);
    let Vi = !1;
    const un = (F) => {
      if (F.datasourceId) {
        const ae = j.value.get(F.datasourceId);
        return ae || (Kt(F.datasourceId), {});
      }
      return Z.value;
    };
    qt(async () => {
      if (E.value) {
        if (Object.assign(E.value, { ...w, ...E.value }), N(), E.value.services) {
          for (const K of E.value.services)
            if (K.type === "WMS") {
              if (!(typeof l(K.service)?.getLayers == "function") && K.url) {
                kn("Reconstructing WMS service from URL: %s", K.url);
                try {
                  K.service = await Le(K.url), kn("WMS service reconstructed successfully"), K.reconstructionFailed = !1;
                } catch (Be) {
                  kn("Could not reconstruct WMS service: %o", Be), K.reconstructionFailed = !0;
                }
              }
            } else if (K.type === "WFS" && !(typeof l(K.service)?.getFeatureTypes == "function") && K.url) {
              kn("Reconstructing WFS service from URL: %s", K.url);
              try {
                K.service = await te(K.url), kn("WFS service reconstructed successfully"), K.reconstructionFailed = !1;
              } catch (Be) {
                kn("Could not reconstruct WFS service: %o", Be), K.reconstructionFailed = !0;
              }
            }
        }
        if (E.value.layers) {
          const K = [];
          for (const ve of E.value.layers)
            if (ve.type === "WMSLayer" && ve.service && !l(ve.service)?.getOperationUrl) {
              const Be = l(ve.service)?._capabilitiesUrl || l(ve.service)?.url || l(ve.service)?.serviceUrl;
              if (Be)
                try {
                  const Fe = await Le(Be);
                  K.push({ ...ve, service: Fe, reconstructionFailed: !1 });
                } catch (Fe) {
                  kn("Could not reconstruct WMS service for layer %s: %o", ve.name, Fe), K.push({ ...ve, reconstructionFailed: !0 });
                }
              else
                kn("WMS layer missing service URL: %s", ve.name), K.push({ ...ve, reconstructionFailed: !0 });
            } else if (ve.type === "WFSLayer" && ve.wfs_service)
              if (typeof l(ve.wfs_service)?.fetch != "function") {
                const Be = l(ve.wfs_service)?.url;
                if (Be)
                  try {
                    const Fe = (await Promise.resolve().then(() => Dw)).default, tt = new Fe(Be);
                    await tt.fetch(), K.push({ ...ve, wfs_service: tt, reconstructionFailed: !1 });
                  } catch (Fe) {
                    kn("Could not reconstruct WFS service for layer %s: %o", ve.name, Fe), K.push({ ...ve, reconstructionFailed: !0 });
                  }
                else
                  kn("WFS layer missing service URL: %s", ve.name), K.push({ ...ve, reconstructionFailed: !0 });
              } else
                K.push(ve);
            else
              K.push(ve);
          E.value.layers.clear();
          for (const ve of K) E.value.layers.add(ve);
        }
        U.value = !0;
      }
      const F = document.getElementById("mapholder"), ae = new ResizeObserver(() => {
        A.value && A.value.leafletObject && A.value.leafletObject.invalidateSize();
      });
      F && ae.observe(F);
    });
    let cn = 0;
    ki(() => Z.value?.locations?.length || 0, async (F) => {
      cn === 0 && F > 0 && (await de(), Ii(), vr()), cn = F;
    });
    const vr = () => {
      if (!E.value?.OGCSstyles || E.value.OGCSstyles.length === 0) {
        hh("No OGCSTA styles configured, skipping historical locations load");
        return;
      }
      const F = /* @__PURE__ */ new Map(), ae = Z.value?.things || [];
      for (const ve of ae)
        if (!(!ve || !ve.iotId)) {
          for (const Be of E.value.OGCSstyles)
            if (Y(ve, Be)) {
              F.set(ve.iotId, ve);
              break;
            }
        }
      for (const [ve, Be] of j.value.entries()) {
        const Fe = Be?.things || [];
        for (const tt of Fe)
          if (!(!tt || !tt.iotId)) {
            for (const mt of E.value.OGCSstyles)
              if (Y(tt, mt)) {
                F.set(tt.iotId, tt);
                break;
              }
          }
      }
      const K = Array.from(F.values());
      if (K.length > 0) {
        hh(`Setting historical locations filter for ${K.length} matching things`), xe(oa, { historicalLocations: K }, !1);
        for (const ve of j.value.keys())
          try {
            const Fe = Ot(Os).getDatasource(ve);
            Fe && typeof Fe.callEvent == "function" && Fe.callEvent(oa, { historicalLocations: K }, !1);
          } catch (Be) {
            Nr("Could not call event on datasource", ve, Be);
          }
      } else
        hh("No things match the configured style filters");
    }, Kn = () => {
      try {
        const F = A.value.leafletObject;
        E.value.fixed ? (F.dragging.disable(), F.scrollWheelZoom.disable(), F.doubleClickZoom.disable(), F.touchZoom.disable(), F.keyboard.disable(), F.zoomControl.remove()) : (F.dragging.enable(), F.scrollWheelZoom.enable(), F.doubleClickZoom.disable(), F.touchZoom.enable(), F.keyboard.enable(), F.zoomControl.addTo(F));
      } catch (F) {
        hr("Error in setFixed:", F);
      }
    };
    ki(() => E.value.fixed, (F, ae, K) => {
      Kn();
    }), Yn(() => Z.value?.locations ?? []);
    const en = (F) => (un(F)?.locations ?? []).filter((ve) => ve && (ve["@iot.id"] || ve.iotId));
    Yn(() => (F) => m1(E, "value", "renderer", 0, "renderer", "point") ? E.value?.renderer?.[0]?.renderer?.area ?? {} : {});
    const Qn = Yn(() => ({
      pointToLayer: (F, ae) => ca.circleMarker(ae, {
        radius: 0,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 0,
        fillOpacity: 0
      })
    })), xn = (F) => E.value.layers.findIndex((ae) => ae === F), zi = (F) => {
      const ae = xn(F);
      return {
        ...Qn.value,
        pane: `layer-pane-${ae}`
      };
    }, Vn = (F) => `layer-pane-${xn(F)}`, er = (F) => F ? `layer-area-pane-${xn(F)}` : "overlayPane", gn = pe(0), ei = Yn(() => {
      gn.value;
      const F = /* @__PURE__ */ new Map();
      if (E.value?.styles)
        for (const ae of E.value.styles)
          ae.id && F.set(ae.id, ae);
      return F;
    }), bi = (F) => ei.value.get(F), Oi = () => {
      gn.value++;
    };
    let di = "";
    ki(() => E.value?.styles, (F) => {
      if (!F) return;
      const ae = JSON.stringify(F);
      ae !== di && (di = ae, Oi());
    }, { deep: !0 });
    let Fn = !1;
    const Wi = () => {
      Vi = !0, hr("map ready"), Kn(), fi();
      const F = A.value?.leafletObject;
      F && (F.on("movestart", () => {
        Fn = !0, Li++;
      }), F.on("moveend", () => {
        Fn = !1;
      }));
    }, fi = () => {
      const F = A.value?.leafletObject;
      !F || !E.value.layers || E.value.layers.forEach((ae, K) => {
        const ve = `layer-pane-${K}`;
        let Be = F.getPane(ve);
        Be || (Be = F.createPane(ve));
        const Fe = 400 + (E.value.layers.length - K) * 2;
        Be.style.zIndex = String(Fe);
        const tt = `layer-area-pane-${K}`;
        let mt = F.getPane(tt);
        mt || (mt = F.createPane(tt)), mt.style.zIndex = String(Fe - 1);
      });
    };
    ki(() => E.value.layers, () => {
      Vi && fi();
    }, { deep: !0 });
    const ti = (F) => [F[1], F[0]], An = (F) => F ? F.type === "Point" && Array.isArray(F.coordinates) ? F.coordinates : F.type === "Feature" && F.geometry?.type === "Point" && Array.isArray(F.geometry.coordinates) ? F.geometry.coordinates : null : null, ni = nl.debounce(() => {
      if (Fn) return;
      const F = A.value?.leafletObject;
      if (F) {
        const ae = F.getCenter();
        E.value.center.clear(), E.value.center.add(ae.lat), E.value.center.add(ae.lng), E.value.zoom = F.getZoom();
      }
      Ii();
    }, 500, { leading: !1, trailing: !0 });
    let Li = 0;
    const Ii = async () => {
      if (hr("loadObservationsInView called"), !A.value || !A.value?.leafletObject) {
        hr("Map not ready");
        return;
      }
      let F = A.value?.leafletObject.getBounds();
      if (!F) {
        hr("No map bounds available yet");
        return;
      }
      const ae = ++Li, K = F._southWest.lng, ve = F._southWest.lat, Be = F._northEast.lng, Fe = F._northEast.lat;
      let tt = null;
      const mt = () => (tt || (tt = Vh({
        type: "Polygon",
        coordinates: [[[Be, Fe], [Be, ve], [K, ve], [K, Fe], [Be, Fe]]]
      })), tt), xt = Qa(E.value.OGCSstyles), Ut = /* @__PURE__ */ new Map();
      for (const Ft of xt) {
        const Cn = Ft.ObservationrefreshTime !== void 0 && Ft.ObservationrefreshTime !== null ? Ft.ObservationrefreshTime : 0;
        Ut.has(Cn) || Ut.set(Cn, []);
        for (const ct of Ft.ds_renderer)
          Ut.get(Cn).push({ renderer: Ft, subrender: ct });
      }
      const tn = {}, Et = St, me = 4;
      let ri = performance.now();
      for (let Ft = 0; Ft < Et.length; Ft++) {
        if (performance.now() - ri > me) {
          if (ae !== Li || Fn)
            return;
          await new Promise((mn) => setTimeout(mn, 0)), ri = performance.now();
        }
        const ct = Et[Ft];
        let Wt;
        if (ct.geoJsonFeature ? Wt = $1(mt(), ct.geoJsonFeature) : Wt = ct.lng >= K && ct.lng <= Be && ct.lat >= ve && ct.lat <= Fe, !Wt) continue;
        const { dsId: bn, dataStream: si } = ct;
        for (const [mn, On] of Ut.entries()) {
          let oi = !1;
          for (const { renderer: hn, subrender: $t } of On) {
            const $n = z(si, $t), Pr = si.thing ? Y(si.thing, hn) : !0;
            if ($n && Pr) {
              oi = !0;
              break;
            }
          }
          oi && (tn[mn] || (tn[mn] = {}), tn[mn][bn] || (tn[mn][bn] = []), tn[mn][bn].push(si));
        }
      }
      if (ae !== Li) {
        hr("Session invalidated after chunked processing, aborting");
        return;
      }
      const Hi = [];
      for (const [Ft, Cn] of Object.entries(tn))
        for (const [ct, Wt] of Object.entries(Cn)) {
          const bn = nl.uniqBy(Wt, "iotId");
          if (bn.length > 0) {
            const si = ct === p.value;
            let mn = 0;
            for (const hn of bn) {
              const $t = String(hn.iotId || hn["@iot.id"] || "");
              for (let $n = 0; $n < $t.length; $n++)
                mn = (mn << 5) - mn + $t.charCodeAt($n) | 0;
            }
            const On = `obs-${ct}-${Ft}-${bn.length}-${mn >>> 0}`, oi = new class extends S1 {
              constructor() {
                super(...arguments), this.id = On;
              }
              invoke() {
                window.clearInterval(this.handle);
              }
              async run() {
                if (si)
                  xe(oa, { observations: bn }, !1);
                else
                  try {
                    const $t = Ot(Os).getDatasource(ct);
                    $t && typeof $t.callEvent == "function" && $t.callEvent(oa, { observations: bn }, !1);
                  } catch (hn) {
                    Nr("Could not call event on datasource", ct, hn);
                  }
                parseInt(Ft) !== 0 && (this.handle = window.setInterval(async () => {
                  if (si)
                    xe(oa, { observations: bn }, !1);
                  else
                    try {
                      const $t = Ot(Os).getDatasource(ct);
                      $t && typeof $t.callEvent == "function" && $t.callEvent(oa, { observations: bn }, !1);
                    } catch (hn) {
                      Nr("Could not call event on datasource", ct, hn);
                    }
                }, parseInt(Ft) * 1e3));
              }
            }();
            Hi.push(oi), De.set(oi.id, oi);
          }
        }
      hr("Created", Hi.length, "tasks to invoke"), Pe.addTasksAndIvnoke(Hi);
      const pi = /* @__PURE__ */ new Map();
      for (const [Ft, Cn] of Object.entries(tn))
        for (const [ct, Wt] of Object.entries(Cn))
          pi.has(ct) || pi.set(ct, []), pi.get(ct).push(...Wt);
      const yr = pi.get(p.value) || [];
      xe(Mf, { observations: nl.uniqBy(yr, "iotId") });
      for (const Ft of j.value.keys()) {
        const Cn = pi.get(Ft) || [];
        try {
          const Wt = Ot(Os).getDatasource(Ft);
          Wt && typeof Wt.callEvent == "function" && Wt.callEvent(Mf, { observations: nl.uniqBy(Cn, "iotId") });
        } catch (ct) {
          Nr("Could not call UPDATE_MQTT_SUBSCRIPTIONS on datasource", Ft, ct);
        }
      }
    }, ii = (F) => {
      if (R(F))
        return ti(F.coordinates);
      if (q(F) || we(F))
        try {
          let ae = Qf(F);
          return ti(ae.geometry.coordinates);
        } catch {
          return null;
        }
      return null;
    }, tr = (F) => {
      if (R(F))
        return ti(F.coordinates);
      if (q(F) || we(F))
        try {
          let ae = Qf(F);
          return ti(ae.geometry.coordinates);
        } catch {
          return null;
        }
    };
    let Zi = new class extends c_ {
      constructor() {
        super(...arguments), this.zoomToThing = (F, ae = 16, K = 1e3) => {
          if (!A.value || !A.value.leafletObject) {
            console.warn("Map instance not available. Cannot zoom to thing.");
            return;
          }
          let ve = (Z.value?.things || []).find((xt) => xt.iotId === F || xt["@iot.id"] === F);
          if (!ve) {
            for (const [xt, Ut] of j.value.entries())
              if (ve = (Ut?.things || []).find((Et) => Et.iotId === F || Et["@iot.id"] === F), ve) break;
          }
          if (!ve) {
            console.warn(`Thing with ID "${F}" not found.`);
            return;
          }
          if (!ve.locations || !ve.locations[0]) {
            console.warn(`Thing with ID "${F}" has no location.`);
            return;
          }
          const Be = ve.locations[0].location, Fe = ce(Be), tt = ii(Fe);
          if (!tt) {
            console.warn("Could not extract coordinates from thing location.");
            return;
          }
          A.value.leafletObject.flyTo(tt, ae, {
            duration: K / 1e3,
            // Leaflet expects seconds
            easeLinearity: 0.25
          });
        }, this.selectThingById = (F) => {
          hr("selectThingById called with:", F), Pn.value === F ? (Pn.value = null, hr("Thing deselected")) : (Pn.value = F, hr("Thing selected:", F));
        }, this.zoomToLocation = async (F, ae = 16, K = 1e3) => {
          console.log("🎯 zoomToLocation called with:", { location: F, zoom: ae, duration: K });
          let ve = 0;
          for (; (!A.value || !A.value.leafletObject) && ve < 3e3; )
            console.log("🎯 Waiting for map to be ready..."), await new Promise((mt) => setTimeout(mt, 100)), ve += 100;
          if (!A.value || !A.value.leafletObject) {
            console.warn("🎯 Map instance not available after waiting. Cannot zoom to location.");
            return;
          }
          if (!F) {
            console.warn("🎯 zoomToLocation called without location");
            return;
          }
          console.log("🎯 Location type:", typeof F, "value:", F);
          const Be = ce(F);
          console.log("🎯 Transformed GeoJSON:", Be);
          const Fe = ii(Be);
          if (console.log("🎯 Extracted point:", Fe), !Fe) {
            console.warn("🎯 Could not extract coordinates from location. GeoJSON was:", Be);
            return;
          }
          const tt = A.value.leafletObject;
          console.log("🎯 Flying to", Fe, "with zoom", ae, "duration", K), tt.flyTo(Fe, ae, {
            duration: K / 1e3,
            // Leaflet expects seconds
            easeLinearity: 0.25
          }), console.log("🎯 flyTo called successfully");
        }, this.showTooltip = (F, ae) => {
          ln.value = F, qn.value = ae || null;
        }, this.hideTooltip = () => {
          ln.value = null, qn.value = null;
        }, this.displayRoute = (F, ae = "#c45e00", K = 5) => {
          if (!A.value || !A.value.leafletObject) {
            console.warn("Map not ready. Cannot display route.");
            return;
          }
          const ve = A.value.leafletObject;
          if (zt && (ve.removeLayer(zt), zt = null), !F || !F.features) return;
          zt = ca.layerGroup();
          for (const Fe of F.features)
            if (Fe.geometry.type === "LineString") {
              const tt = Fe.geometry.coordinates.map(
                (xt) => [xt[1], xt[0]]
              ), mt = ca.polyline(tt, {
                color: ae,
                weight: K,
                opacity: 0.8
              });
              zt.addLayer(mt);
            } else if (Fe.geometry.type === "Point") {
              const [tt, mt] = Fe.geometry.coordinates, xt = Fe.properties?.role;
              let Ut = "#2196f3";
              xt === "start" ? Ut = "#4caf50" : xt === "end" && (Ut = "#f44336");
              const tn = ca.circleMarker([mt, tt], {
                radius: 8,
                fillColor: Ut,
                color: "#fff",
                weight: 2,
                fillOpacity: 1
              });
              Fe.properties?.name && tn.bindTooltip(Fe.properties.name), zt.addLayer(tn);
            }
          zt.addTo(ve);
          const Be = F.features.filter(
            (Fe) => Fe.geometry.type === "LineString"
          );
          if (Be.length > 0) {
            const Fe = Be.flatMap(
              (tt) => tt.geometry.coordinates.map(
                (mt) => [mt[1], mt[0]]
              )
            );
            Fe.length > 0 && ve.fitBounds(ca.latLngBounds(Fe), {
              padding: [50, 50]
            });
          }
          Un.value = F, Ui.value = ae, _n.value = K;
        }, this.clearRoute = () => {
          zt && A.value && A.value.leafletObject && (A.value.leafletObject.removeLayer(zt), zt = null), Un.value = null;
        };
      }
    }();
    return i(Zi), qt(() => {
      k.registerInstance(_.value, Zi, "MapWidget", m), hr("Registered instance with EventActionsRegistry:", _.value, "on page:", m);
    }), wl(() => {
      k.unregisterInstance(_.value), hr("Unregistered instance from EventActionsRegistry:", _.value);
      for (const [F, ae] of De.entries())
        try {
          ae.invoke();
        } catch (K) {
          AT("Error stopping task interval:", K);
        }
      Pe.clearAll(), De.clear();
      try {
        xe(Bf, {});
      } catch (F) {
        Nr("Could not unsubscribe from MQTT for primary datasource on unmount:", F);
      }
      for (const F of j.value.keys())
        try {
          const K = Ot(Os).getDatasource(F);
          K && typeof K.callEvent == "function" && K.callEvent(Bf, {});
        } catch (ae) {
          Nr("Could not unsubscribe from MQTT for datasource", F, "on unmount:", ae);
        }
      for (const [F, ae] of ge.entries())
        try {
          ae();
        } catch (K) {
          Nr(`Error unsubscribing from datasource ${F}:`, K);
        }
      ge.clear(), se.clear(), j.value.clear();
    }), (F, ae) => (V(), ie("div", CT, [
      E.value.baseMapUrl ? (V(), Ze(Oe(Bh), {
        key: 0,
        id: "map",
        ref_key: "map",
        ref: A,
        center: n(E.value.center),
        "max-zoom": 21,
        "use-global-leaflet": !1,
        zoom: E.value.zoom,
        options: {
          zoomAnimation: !0,
          zoomSnap: 0,
          wheelPxPerZoomLevel: 120,
          wheelDebounceTime: 5,
          zoomAnimationThreshold: 4,
          zoomDelta: 0.25,
          scrollWheelZoom: !0
        },
        style: { height: "100%" },
        onMoveend: Oe(ni),
        onReady: Wi,
        onClick: X,
        dragging: !E.value.fixed
      }, {
        default: Ae(() => [
          le(Oe(Uh), {
            attribution: E.value.attribution,
            options: {
              maxNativeZoom: 19,
              maxZoom: 25
            },
            url: E.value.baseMapUrl
          }, null, 8, ["attribution", "url"]),
          (V(!0), ie(Re, null, Yt([...E.value.layers].reverse(), (K, ve) => (V(), ie(Re, {
            key: `${K.name}-${xn(K)}`
          }, [
            K.type == "WMSLayer" && K.service && typeof l(K.service)?.getOperationUrl == "function" ? (V(), Ze(Oe(p1), {
              key: 0,
              attribution: K.attribution,
              layers: K.name,
              name: K.name,
              opacity: K.opacity,
              transparent: !0,
              url: K.service.getOperationUrl("GetMap"),
              visible: K.checked,
              "z-index": xn(K),
              options: { pane: `layer-pane-${xn(K)}` },
              format: "image/png",
              "layer-type": "base"
            }, null, 8, ["attribution", "layers", "name", "opacity", "url", "visible", "z-index", "options"])) : Ge("", !0),
            K.type == "WFSLayer" ? (V(), Ze(uT, {
              key: 1,
              "geo-json": l(K.wfs_service)?.geoJson,
              "style-ids": n(K.styleIds),
              "layer-options": zi(K),
              "filter-feature-collection": Oe(x),
              "get-style-by-id": bi,
              "is-point": Oe(R)
            }, null, 8, ["geo-json", "style-ids", "layer-options", "filter-feature-collection", "is-point"])) : Ge("", !0),
            K.type == "GEOJSON" ? (V(), Ze(gT, {
              key: 2,
              "layer-data": un(K),
              "style-ids": n(K.styleIds),
              "layer-options": zi(K),
              "marker-pane": Vn(K),
              "filter-feature-collection": Oe(x),
              "get-style-by-id": bi,
              "is-point": Oe(R),
              "get-point": ii
            }, null, 8, ["layer-data", "style-ids", "layer-options", "marker-pane", "filter-feature-collection", "is-point"])) : Ge("", !0),
            K.type == "REST-GEOJSON" ? (V(), Ze(mT, {
              key: 3,
              "layer-data": un(K),
              "style-ids": n(K.styleIds),
              "layer-options": zi(K),
              "marker-pane": Vn(K),
              "filter-feature-collection": Oe(x),
              "get-style-by-id": bi,
              "is-point": Oe(R),
              "get-point": ii
            }, null, 8, ["layer-data", "style-ids", "layer-options", "marker-pane", "filter-feature-collection", "is-point"])) : Ge("", !0),
            K.type == "ROUTE" && K.datasourceId ? (V(), Ze(yT, {
              key: 4,
              "datasource-id": K.datasourceId
            }, null, 8, ["datasource-id"])) : Ge("", !0),
            K.type == "OGCSTA" ? (V(), Ze(vT, {
              key: 5,
              locations: en(K),
              renderers: n(E.value.OGCSstyles),
              "layer-options": zi(K),
              "marker-pane": Vn(K),
              "area-pane": er(K),
              "widget-id": Oe(_),
              "compare-thing": Oe(Y),
              "compare-datastream": Oe(z),
              "is-feature-collection": Oe(q),
              "is-point": Oe(R),
              "get-point": ii,
              "get-pointform-area": tr,
              "transform-to-geo-json": Oe(ce),
              "get-by-id": Oe(Qt),
              "selected-thing-id": Pn.value,
              "selection-highlight-color": E.value.selectionHighlightColor ?? "#ff0000",
              "tooltip-thing-id": ln.value,
              "tooltip-content": qn.value
            }, null, 8, ["locations", "renderers", "layer-options", "marker-pane", "area-pane", "widget-id", "compare-thing", "compare-datastream", "is-feature-collection", "is-point", "transform-to-geo-json", "get-by-id", "selected-thing-id", "selection-highlight-color", "tooltip-thing-id", "tooltip-content"])) : Ge("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 8, ["center", "zoom", "onMoveend", "dragging"])) : Ge("", !0)
    ]));
  }
}), ip = /* @__PURE__ */ mr(bT, [["__scopeId", "data-v-3a425ddc"]]);
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function rp(o, i) {
  var n = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(o);
    i && (l = l.filter(function(d) {
      return Object.getOwnPropertyDescriptor(o, d).enumerable;
    })), n.push.apply(n, l);
  }
  return n;
}
function us(o) {
  for (var i = 1; i < arguments.length; i++) {
    var n = arguments[i] != null ? arguments[i] : {};
    i % 2 ? rp(Object(n), !0).forEach(function(l) {
      OT(o, l, n[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : rp(Object(n)).forEach(function(l) {
      Object.defineProperty(o, l, Object.getOwnPropertyDescriptor(n, l));
    });
  }
  return o;
}
function Mu(o) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Mu = function(i) {
    return typeof i;
  } : Mu = function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, Mu(o);
}
function OT(o, i, n) {
  return i in o ? Object.defineProperty(o, i, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[i] = n, o;
}
function Ds() {
  return Ds = Object.assign || function(o) {
    for (var i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      for (var l in n)
        Object.prototype.hasOwnProperty.call(n, l) && (o[l] = n[l]);
    }
    return o;
  }, Ds.apply(this, arguments);
}
function LT(o, i) {
  if (o == null) return {};
  var n = {}, l = Object.keys(o), d, p;
  for (p = 0; p < l.length; p++)
    d = l[p], !(i.indexOf(d) >= 0) && (n[d] = o[d]);
  return n;
}
function IT(o, i) {
  if (o == null) return {};
  var n = LT(o, i), l, d;
  if (Object.getOwnPropertySymbols) {
    var p = Object.getOwnPropertySymbols(o);
    for (d = 0; d < p.length; d++)
      l = p[d], !(i.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(o, l) && (n[l] = o[l]);
  }
  return n;
}
var NT = "1.14.0";
function Is(o) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(o);
}
var Rs = Is(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Dl = Is(/Edge/i), sp = Is(/firefox/i), cl = Is(/safari/i) && !Is(/chrome/i) && !Is(/android/i), h_ = Is(/iP(ad|od|hone)/i), DT = Is(/chrome/i) && Is(/android/i), d_ = {
  capture: !1,
  passive: !1
};
function Pt(o, i, n) {
  o.addEventListener(i, n, !Rs && d_);
}
function It(o, i, n) {
  o.removeEventListener(i, n, !Rs && d_);
}
function Zu(o, i) {
  if (i) {
    if (i[0] === ">" && (i = i.substring(1)), o)
      try {
        if (o.matches)
          return o.matches(i);
        if (o.msMatchesSelector)
          return o.msMatchesSelector(i);
        if (o.webkitMatchesSelector)
          return o.webkitMatchesSelector(i);
      } catch {
        return !1;
      }
    return !1;
  }
}
function RT(o) {
  return o.host && o !== document && o.host.nodeType ? o.host : o.parentNode;
}
function ss(o, i, n, l) {
  if (o) {
    n = n || document;
    do {
      if (i != null && (i[0] === ">" ? o.parentNode === n && Zu(o, i) : Zu(o, i)) || l && o === n)
        return o;
      if (o === n) break;
    } while (o = RT(o));
  }
  return null;
}
var op = /\s+/g;
function dr(o, i, n) {
  if (o && i)
    if (o.classList)
      o.classList[n ? "add" : "remove"](i);
    else {
      var l = (" " + o.className + " ").replace(op, " ").replace(" " + i + " ", " ");
      o.className = (l + (n ? " " + i : "")).replace(op, " ");
    }
}
function qe(o, i, n) {
  var l = o && o.style;
  if (l) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(o, "") : o.currentStyle && (n = o.currentStyle), i === void 0 ? n : n[i];
    !(i in l) && i.indexOf("webkit") === -1 && (i = "-webkit-" + i), l[i] = n + (typeof n == "string" ? "" : "px");
  }
}
function _a(o, i) {
  var n = "";
  if (typeof o == "string")
    n = o;
  else
    do {
      var l = qe(o, "transform");
      l && l !== "none" && (n = l + " " + n);
    } while (!i && (o = o.parentNode));
  var d = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return d && new d(n);
}
function f_(o, i, n) {
  if (o) {
    var l = o.getElementsByTagName(i), d = 0, p = l.length;
    if (n)
      for (; d < p; d++)
        n(l[d], d);
    return l;
  }
  return [];
}
function ls() {
  var o = document.scrollingElement;
  return o || document.documentElement;
}
function Hn(o, i, n, l, d) {
  if (!(!o.getBoundingClientRect && o !== window)) {
    var p, _, v, m, E, A, w;
    if (o !== window && o.parentNode && o !== ls() ? (p = o.getBoundingClientRect(), _ = p.top, v = p.left, m = p.bottom, E = p.right, A = p.height, w = p.width) : (_ = 0, v = 0, m = window.innerHeight, E = window.innerWidth, A = window.innerHeight, w = window.innerWidth), (i || n) && o !== window && (d = d || o.parentNode, !Rs))
      do
        if (d && d.getBoundingClientRect && (qe(d, "transform") !== "none" || n && qe(d, "position") !== "static")) {
          var b = d.getBoundingClientRect();
          _ -= b.top + parseInt(qe(d, "border-top-width")), v -= b.left + parseInt(qe(d, "border-left-width")), m = _ + p.height, E = v + p.width;
          break;
        }
      while (d = d.parentNode);
    if (l && o !== window) {
      var N = _a(d || o), k = N && N.a, G = N && N.d;
      N && (_ /= G, v /= k, w /= k, A /= G, m = _ + A, E = v + w);
    }
    return {
      top: _,
      left: v,
      bottom: m,
      right: E,
      width: w,
      height: A
    };
  }
}
function ap(o, i, n) {
  for (var l = eo(o, !0), d = Hn(o)[i]; l; ) {
    var p = Hn(l)[n], _ = void 0;
    if (_ = d >= p, !_) return l;
    if (l === ls()) break;
    l = eo(l, !1);
  }
  return !1;
}
function ga(o, i, n, l) {
  for (var d = 0, p = 0, _ = o.children; p < _.length; ) {
    if (_[p].style.display !== "none" && _[p] !== Ke.ghost && (l || _[p] !== Ke.dragged) && ss(_[p], n.draggable, o, !1)) {
      if (d === i)
        return _[p];
      d++;
    }
    p++;
  }
  return null;
}
function Hh(o, i) {
  for (var n = o.lastElementChild; n && (n === Ke.ghost || qe(n, "display") === "none" || i && !Zu(n, i)); )
    n = n.previousElementSibling;
  return n || null;
}
function Dr(o, i) {
  var n = 0;
  if (!o || !o.parentNode)
    return -1;
  for (; o = o.previousElementSibling; )
    o.nodeName.toUpperCase() !== "TEMPLATE" && o !== Ke.clone && (!i || Zu(o, i)) && n++;
  return n;
}
function lp(o) {
  var i = 0, n = 0, l = ls();
  if (o)
    do {
      var d = _a(o), p = d.a, _ = d.d;
      i += o.scrollLeft * p, n += o.scrollTop * _;
    } while (o !== l && (o = o.parentNode));
  return [i, n];
}
function PT(o, i) {
  for (var n in o)
    if (o.hasOwnProperty(n)) {
      for (var l in i)
        if (i.hasOwnProperty(l) && i[l] === o[n][l]) return Number(n);
    }
  return -1;
}
function eo(o, i) {
  if (!o || !o.getBoundingClientRect) return ls();
  var n = o, l = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var d = qe(n);
      if (n.clientWidth < n.scrollWidth && (d.overflowX == "auto" || d.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (d.overflowY == "auto" || d.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return ls();
        if (l || i) return n;
        l = !0;
      }
    }
  while (n = n.parentNode);
  return ls();
}
function xT(o, i) {
  if (o && i)
    for (var n in i)
      i.hasOwnProperty(n) && (o[n] = i[n]);
  return o;
}
function dh(o, i) {
  return Math.round(o.top) === Math.round(i.top) && Math.round(o.left) === Math.round(i.left) && Math.round(o.height) === Math.round(i.height) && Math.round(o.width) === Math.round(i.width);
}
var hl;
function p_(o, i) {
  return function() {
    if (!hl) {
      var n = arguments, l = this;
      n.length === 1 ? o.call(l, n[0]) : o.apply(l, n), hl = setTimeout(function() {
        hl = void 0;
      }, i);
    }
  };
}
function FT() {
  clearTimeout(hl), hl = void 0;
}
function __(o, i, n) {
  o.scrollLeft += i, o.scrollTop += n;
}
function g_(o) {
  var i = window.Polymer, n = window.jQuery || window.Zepto;
  return i && i.dom ? i.dom(o).cloneNode(!0) : n ? n(o).clone(!0)[0] : o.cloneNode(!0);
}
var pr = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function MT() {
  var o = [], i;
  return {
    captureAnimationState: function() {
      if (o = [], !!this.options.animation) {
        var l = [].slice.call(this.el.children);
        l.forEach(function(d) {
          if (!(qe(d, "display") === "none" || d === Ke.ghost)) {
            o.push({
              target: d,
              rect: Hn(d)
            });
            var p = us({}, o[o.length - 1].rect);
            if (d.thisAnimationDuration) {
              var _ = _a(d, !0);
              _ && (p.top -= _.f, p.left -= _.e);
            }
            d.fromRect = p;
          }
        });
      }
    },
    addAnimationState: function(l) {
      o.push(l);
    },
    removeAnimationState: function(l) {
      o.splice(PT(o, {
        target: l
      }), 1);
    },
    animateAll: function(l) {
      var d = this;
      if (!this.options.animation) {
        clearTimeout(i), typeof l == "function" && l();
        return;
      }
      var p = !1, _ = 0;
      o.forEach(function(v) {
        var m = 0, E = v.target, A = E.fromRect, w = Hn(E), b = E.prevFromRect, N = E.prevToRect, k = v.rect, G = _a(E, !0);
        G && (w.top -= G.f, w.left -= G.e), E.toRect = w, E.thisAnimationDuration && dh(b, w) && !dh(A, w) && // Make sure animatingRect is on line between toRect & fromRect
        (k.top - w.top) / (k.left - w.left) === (A.top - w.top) / (A.left - w.left) && (m = GT(k, b, N, d.options)), dh(w, A) || (E.prevFromRect = A, E.prevToRect = w, m || (m = d.options.animation), d.animate(E, k, w, m)), m && (p = !0, _ = Math.max(_, m), clearTimeout(E.animationResetTimer), E.animationResetTimer = setTimeout(function() {
          E.animationTime = 0, E.prevFromRect = null, E.fromRect = null, E.prevToRect = null, E.thisAnimationDuration = null;
        }, m), E.thisAnimationDuration = m);
      }), clearTimeout(i), p ? i = setTimeout(function() {
        typeof l == "function" && l();
      }, _) : typeof l == "function" && l(), o = [];
    },
    animate: function(l, d, p, _) {
      if (_) {
        qe(l, "transition", ""), qe(l, "transform", "");
        var v = _a(this.el), m = v && v.a, E = v && v.d, A = (d.left - p.left) / (m || 1), w = (d.top - p.top) / (E || 1);
        l.animatingX = !!A, l.animatingY = !!w, qe(l, "transform", "translate3d(" + A + "px," + w + "px,0)"), this.forRepaintDummy = BT(l), qe(l, "transition", "transform " + _ + "ms" + (this.options.easing ? " " + this.options.easing : "")), qe(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          qe(l, "transition", ""), qe(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, _);
      }
    }
  };
}
function BT(o) {
  return o.offsetWidth;
}
function GT(o, i, n, l) {
  return Math.sqrt(Math.pow(i.top - o.top, 2) + Math.pow(i.left - o.left, 2)) / Math.sqrt(Math.pow(i.top - n.top, 2) + Math.pow(i.left - n.left, 2)) * l.animation;
}
var la = [], fh = {
  initializeByDefault: !0
}, Rl = {
  mount: function(i) {
    for (var n in fh)
      fh.hasOwnProperty(n) && !(n in i) && (i[n] = fh[n]);
    la.forEach(function(l) {
      if (l.pluginName === i.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(i.pluginName, " more than once");
    }), la.push(i);
  },
  pluginEvent: function(i, n, l) {
    var d = this;
    this.eventCanceled = !1, l.cancel = function() {
      d.eventCanceled = !0;
    };
    var p = i + "Global";
    la.forEach(function(_) {
      n[_.pluginName] && (n[_.pluginName][p] && n[_.pluginName][p](us({
        sortable: n
      }, l)), n.options[_.pluginName] && n[_.pluginName][i] && n[_.pluginName][i](us({
        sortable: n
      }, l)));
    });
  },
  initializePlugins: function(i, n, l, d) {
    la.forEach(function(v) {
      var m = v.pluginName;
      if (!(!i.options[m] && !v.initializeByDefault)) {
        var E = new v(i, n, i.options);
        E.sortable = i, E.options = i.options, i[m] = E, Ds(l, E.defaults);
      }
    });
    for (var p in i.options)
      if (i.options.hasOwnProperty(p)) {
        var _ = this.modifyOption(i, p, i.options[p]);
        typeof _ < "u" && (i.options[p] = _);
      }
  },
  getEventProperties: function(i, n) {
    var l = {};
    return la.forEach(function(d) {
      typeof d.eventProperties == "function" && Ds(l, d.eventProperties.call(n[d.pluginName], i));
    }), l;
  },
  modifyOption: function(i, n, l) {
    var d;
    return la.forEach(function(p) {
      i[p.pluginName] && p.optionListeners && typeof p.optionListeners[n] == "function" && (d = p.optionListeners[n].call(i[p.pluginName], l));
    }), d;
  }
};
function kT(o) {
  var i = o.sortable, n = o.rootEl, l = o.name, d = o.targetEl, p = o.cloneEl, _ = o.toEl, v = o.fromEl, m = o.oldIndex, E = o.newIndex, A = o.oldDraggableIndex, w = o.newDraggableIndex, b = o.originalEvent, N = o.putSortable, k = o.extraEventProperties;
  if (i = i || n && n[pr], !!i) {
    var G, X = i.options, x = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !Rs && !Dl ? G = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (G = document.createEvent("Event"), G.initEvent(l, !0, !0)), G.to = _ || n, G.from = v || n, G.item = d || n, G.clone = p, G.oldIndex = m, G.newIndex = E, G.oldDraggableIndex = A, G.newDraggableIndex = w, G.originalEvent = b, G.pullMode = N ? N.lastPutMode : void 0;
    var z = us(us({}, k), Rl.getEventProperties(l, i));
    for (var Y in z)
      G[Y] = z[Y];
    n && n.dispatchEvent(G), X[x] && X[x].call(i, G);
  }
}
var UT = ["evt"], Xi = function(i, n) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d = l.evt, p = IT(l, UT);
  Rl.pluginEvent.bind(Ke)(i, n, us({
    dragEl: ye,
    parentEl: En,
    ghostEl: at,
    rootEl: on,
    nextEl: Do,
    lastDownEl: Bu,
    cloneEl: Tn,
    cloneHidden: Qs,
    dragStarted: rl,
    putSortable: ci,
    activeSortable: Ke.active,
    originalEvent: d,
    oldIndex: da,
    oldDraggableIndex: dl,
    newIndex: fr,
    newDraggableIndex: Xs,
    hideGhostForTarget: E_,
    unhideGhostForTarget: T_,
    cloneNowHidden: function() {
      Qs = !0;
    },
    cloneNowShown: function() {
      Qs = !1;
    },
    dispatchSortableEvent: function(v) {
      Gi({
        sortable: n,
        name: v,
        originalEvent: d
      });
    }
  }, p));
};
function Gi(o) {
  kT(us({
    putSortable: ci,
    cloneEl: Tn,
    targetEl: ye,
    rootEl: on,
    oldIndex: da,
    oldDraggableIndex: dl,
    newIndex: fr,
    newDraggableIndex: Xs
  }, o));
}
var ye, En, at, on, Do, Bu, Tn, Qs, da, fr, dl, Xs, Nu, ci, ha = !1, Hu = !1, Yu = [], Io, Zr, ph, _h, up, cp, rl, ua, fl, pl = !1, Du = !1, Gu, Si, gh = [], bh = !1, qu = [], Qu = typeof document < "u", Ru = h_, hp = Dl || Rs ? "cssFloat" : "float", VT = Qu && !DT && !h_ && "draggable" in document.createElement("div"), m_ = (function() {
  if (Qu) {
    if (Rs)
      return !1;
    var o = document.createElement("x");
    return o.style.cssText = "pointer-events:auto", o.style.pointerEvents === "auto";
  }
})(), v_ = function(i, n) {
  var l = qe(i), d = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), p = ga(i, 0, n), _ = ga(i, 1, n), v = p && qe(p), m = _ && qe(_), E = v && parseInt(v.marginLeft) + parseInt(v.marginRight) + Hn(p).width, A = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + Hn(_).width;
  if (l.display === "flex")
    return l.flexDirection === "column" || l.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (l.display === "grid")
    return l.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (p && v.float && v.float !== "none") {
    var w = v.float === "left" ? "left" : "right";
    return _ && (m.clear === "both" || m.clear === w) ? "vertical" : "horizontal";
  }
  return p && (v.display === "block" || v.display === "flex" || v.display === "table" || v.display === "grid" || E >= d && l[hp] === "none" || _ && l[hp] === "none" && E + A > d) ? "vertical" : "horizontal";
}, zT = function(i, n, l) {
  var d = l ? i.left : i.top, p = l ? i.right : i.bottom, _ = l ? i.width : i.height, v = l ? n.left : n.top, m = l ? n.right : n.bottom, E = l ? n.width : n.height;
  return d === v || p === m || d + _ / 2 === v + E / 2;
}, WT = function(i, n) {
  var l;
  return Yu.some(function(d) {
    var p = d[pr].options.emptyInsertThreshold;
    if (!(!p || Hh(d))) {
      var _ = Hn(d), v = i >= _.left - p && i <= _.right + p, m = n >= _.top - p && n <= _.bottom + p;
      if (v && m)
        return l = d;
    }
  }), l;
}, y_ = function(i) {
  function n(p, _) {
    return function(v, m, E, A) {
      var w = v.options.group.name && m.options.group.name && v.options.group.name === m.options.group.name;
      if (p == null && (_ || w))
        return !0;
      if (p == null || p === !1)
        return !1;
      if (_ && p === "clone")
        return p;
      if (typeof p == "function")
        return n(p(v, m, E, A), _)(v, m, E, A);
      var b = (_ ? v : m).options.group.name;
      return p === !0 || typeof p == "string" && p === b || p.join && p.indexOf(b) > -1;
    };
  }
  var l = {}, d = i.group;
  (!d || Mu(d) != "object") && (d = {
    name: d
  }), l.name = d.name, l.checkPull = n(d.pull, !0), l.checkPut = n(d.put), l.revertClone = d.revertClone, i.group = l;
}, E_ = function() {
  !m_ && at && qe(at, "display", "none");
}, T_ = function() {
  !m_ && at && qe(at, "display", "");
};
Qu && document.addEventListener("click", function(o) {
  if (Hu)
    return o.preventDefault(), o.stopPropagation && o.stopPropagation(), o.stopImmediatePropagation && o.stopImmediatePropagation(), Hu = !1, !1;
}, !0);
var No = function(i) {
  if (ye) {
    i = i.touches ? i.touches[0] : i;
    var n = WT(i.clientX, i.clientY);
    if (n) {
      var l = {};
      for (var d in i)
        i.hasOwnProperty(d) && (l[d] = i[d]);
      l.target = l.rootEl = n, l.preventDefault = void 0, l.stopPropagation = void 0, n[pr]._onDragOver(l);
    }
  }
}, ZT = function(i) {
  ye && ye.parentNode[pr]._isOutsideThisEl(i.target);
};
function Ke(o, i) {
  if (!(o && o.nodeType && o.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(o));
  this.el = o, this.options = i = Ds({}, i), o[pr] = this;
  var n = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(o.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return v_(o, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(_, v) {
      _.setData("Text", v.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: Ke.supportPointer !== !1 && "PointerEvent" in window && !cl,
    emptyInsertThreshold: 5
  };
  Rl.initializePlugins(this, o, n);
  for (var l in n)
    !(l in i) && (i[l] = n[l]);
  y_(i);
  for (var d in this)
    d.charAt(0) === "_" && typeof this[d] == "function" && (this[d] = this[d].bind(this));
  this.nativeDraggable = i.forceFallback ? !1 : VT, this.nativeDraggable && (this.options.touchStartThreshold = 1), i.supportPointer ? Pt(o, "pointerdown", this._onTapStart) : (Pt(o, "mousedown", this._onTapStart), Pt(o, "touchstart", this._onTapStart)), this.nativeDraggable && (Pt(o, "dragover", this), Pt(o, "dragenter", this)), Yu.push(this.el), i.store && i.store.get && this.sort(i.store.get(this) || []), Ds(this, MT());
}
Ke.prototype = /** @lends Sortable.prototype */
{
  constructor: Ke,
  _isOutsideThisEl: function(i) {
    !this.el.contains(i) && i !== this.el && (ua = null);
  },
  _getDirection: function(i, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, i, n, ye) : this.options.direction;
  },
  _onTapStart: function(i) {
    if (i.cancelable) {
      var n = this, l = this.el, d = this.options, p = d.preventOnFilter, _ = i.type, v = i.touches && i.touches[0] || i.pointerType && i.pointerType === "touch" && i, m = (v || i).target, E = i.target.shadowRoot && (i.path && i.path[0] || i.composedPath && i.composedPath()[0]) || m, A = d.filter;
      if (XT(l), !ye && !(/mousedown|pointerdown/.test(_) && i.button !== 0 || d.disabled) && !E.isContentEditable && !(!this.nativeDraggable && cl && m && m.tagName.toUpperCase() === "SELECT") && (m = ss(m, d.draggable, l, !1), !(m && m.animated) && Bu !== m)) {
        if (da = Dr(m), dl = Dr(m, d.draggable), typeof A == "function") {
          if (A.call(this, i, m, this)) {
            Gi({
              sortable: n,
              rootEl: E,
              name: "filter",
              targetEl: m,
              toEl: l,
              fromEl: l
            }), Xi("filter", n, {
              evt: i
            }), p && i.cancelable && i.preventDefault();
            return;
          }
        } else if (A && (A = A.split(",").some(function(w) {
          if (w = ss(E, w.trim(), l, !1), w)
            return Gi({
              sortable: n,
              rootEl: w,
              name: "filter",
              targetEl: m,
              fromEl: l,
              toEl: l
            }), Xi("filter", n, {
              evt: i
            }), !0;
        }), A)) {
          p && i.cancelable && i.preventDefault();
          return;
        }
        d.handle && !ss(E, d.handle, l, !1) || this._prepareDragStart(i, v, m);
      }
    }
  },
  _prepareDragStart: function(i, n, l) {
    var d = this, p = d.el, _ = d.options, v = p.ownerDocument, m;
    if (l && !ye && l.parentNode === p) {
      var E = Hn(l);
      if (on = p, ye = l, En = ye.parentNode, Do = ye.nextSibling, Bu = l, Nu = _.group, Ke.dragged = ye, Io = {
        target: ye,
        clientX: (n || i).clientX,
        clientY: (n || i).clientY
      }, up = Io.clientX - E.left, cp = Io.clientY - E.top, this._lastX = (n || i).clientX, this._lastY = (n || i).clientY, ye.style["will-change"] = "all", m = function() {
        if (Xi("delayEnded", d, {
          evt: i
        }), Ke.eventCanceled) {
          d._onDrop();
          return;
        }
        d._disableDelayedDragEvents(), !sp && d.nativeDraggable && (ye.draggable = !0), d._triggerDragStart(i, n), Gi({
          sortable: d,
          name: "choose",
          originalEvent: i
        }), dr(ye, _.chosenClass, !0);
      }, _.ignore.split(",").forEach(function(A) {
        f_(ye, A.trim(), mh);
      }), Pt(v, "dragover", No), Pt(v, "mousemove", No), Pt(v, "touchmove", No), Pt(v, "mouseup", d._onDrop), Pt(v, "touchend", d._onDrop), Pt(v, "touchcancel", d._onDrop), sp && this.nativeDraggable && (this.options.touchStartThreshold = 4, ye.draggable = !0), Xi("delayStart", this, {
        evt: i
      }), _.delay && (!_.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Dl || Rs))) {
        if (Ke.eventCanceled) {
          this._onDrop();
          return;
        }
        Pt(v, "mouseup", d._disableDelayedDrag), Pt(v, "touchend", d._disableDelayedDrag), Pt(v, "touchcancel", d._disableDelayedDrag), Pt(v, "mousemove", d._delayedDragTouchMoveHandler), Pt(v, "touchmove", d._delayedDragTouchMoveHandler), _.supportPointer && Pt(v, "pointermove", d._delayedDragTouchMoveHandler), d._dragStartTimer = setTimeout(m, _.delay);
      } else
        m();
    }
  },
  _delayedDragTouchMoveHandler: function(i) {
    var n = i.touches ? i.touches[0] : i;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ye && mh(ye), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var i = this.el.ownerDocument;
    It(i, "mouseup", this._disableDelayedDrag), It(i, "touchend", this._disableDelayedDrag), It(i, "touchcancel", this._disableDelayedDrag), It(i, "mousemove", this._delayedDragTouchMoveHandler), It(i, "touchmove", this._delayedDragTouchMoveHandler), It(i, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(i, n) {
    n = n || i.pointerType == "touch" && i, !this.nativeDraggable || n ? this.options.supportPointer ? Pt(document, "pointermove", this._onTouchMove) : n ? Pt(document, "touchmove", this._onTouchMove) : Pt(document, "mousemove", this._onTouchMove) : (Pt(ye, "dragend", this), Pt(on, "dragstart", this._onDragStart));
    try {
      document.selection ? ku(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(i, n) {
    if (ha = !1, on && ye) {
      Xi("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && Pt(document, "dragover", ZT);
      var l = this.options;
      !i && dr(ye, l.dragClass, !1), dr(ye, l.ghostClass, !0), Ke.active = this, i && this._appendGhost(), Gi({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Zr) {
      this._lastX = Zr.clientX, this._lastY = Zr.clientY, E_();
      for (var i = document.elementFromPoint(Zr.clientX, Zr.clientY), n = i; i && i.shadowRoot && (i = i.shadowRoot.elementFromPoint(Zr.clientX, Zr.clientY), i !== n); )
        n = i;
      if (ye.parentNode[pr]._isOutsideThisEl(i), n)
        do {
          if (n[pr]) {
            var l = void 0;
            if (l = n[pr]._onDragOver({
              clientX: Zr.clientX,
              clientY: Zr.clientY,
              target: i,
              rootEl: n
            }), l && !this.options.dragoverBubble)
              break;
          }
          i = n;
        } while (n = n.parentNode);
      T_();
    }
  },
  _onTouchMove: function(i) {
    if (Io) {
      var n = this.options, l = n.fallbackTolerance, d = n.fallbackOffset, p = i.touches ? i.touches[0] : i, _ = at && _a(at, !0), v = at && _ && _.a, m = at && _ && _.d, E = Ru && Si && lp(Si), A = (p.clientX - Io.clientX + d.x) / (v || 1) + (E ? E[0] - gh[0] : 0) / (v || 1), w = (p.clientY - Io.clientY + d.y) / (m || 1) + (E ? E[1] - gh[1] : 0) / (m || 1);
      if (!Ke.active && !ha) {
        if (l && Math.max(Math.abs(p.clientX - this._lastX), Math.abs(p.clientY - this._lastY)) < l)
          return;
        this._onDragStart(i, !0);
      }
      if (at) {
        _ ? (_.e += A - (ph || 0), _.f += w - (_h || 0)) : _ = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: A,
          f: w
        };
        var b = "matrix(".concat(_.a, ",").concat(_.b, ",").concat(_.c, ",").concat(_.d, ",").concat(_.e, ",").concat(_.f, ")");
        qe(at, "webkitTransform", b), qe(at, "mozTransform", b), qe(at, "msTransform", b), qe(at, "transform", b), ph = A, _h = w, Zr = p;
      }
      i.cancelable && i.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!at) {
      var i = this.options.fallbackOnBody ? document.body : on, n = Hn(ye, !0, Ru, !0, i), l = this.options;
      if (Ru) {
        for (Si = i; qe(Si, "position") === "static" && qe(Si, "transform") === "none" && Si !== document; )
          Si = Si.parentNode;
        Si !== document.body && Si !== document.documentElement ? (Si === document && (Si = ls()), n.top += Si.scrollTop, n.left += Si.scrollLeft) : Si = ls(), gh = lp(Si);
      }
      at = ye.cloneNode(!0), dr(at, l.ghostClass, !1), dr(at, l.fallbackClass, !0), dr(at, l.dragClass, !0), qe(at, "transition", ""), qe(at, "transform", ""), qe(at, "box-sizing", "border-box"), qe(at, "margin", 0), qe(at, "top", n.top), qe(at, "left", n.left), qe(at, "width", n.width), qe(at, "height", n.height), qe(at, "opacity", "0.8"), qe(at, "position", Ru ? "absolute" : "fixed"), qe(at, "zIndex", "100000"), qe(at, "pointerEvents", "none"), Ke.ghost = at, i.appendChild(at), qe(at, "transform-origin", up / parseInt(at.style.width) * 100 + "% " + cp / parseInt(at.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(i, n) {
    var l = this, d = i.dataTransfer, p = l.options;
    if (Xi("dragStart", this, {
      evt: i
    }), Ke.eventCanceled) {
      this._onDrop();
      return;
    }
    Xi("setupClone", this), Ke.eventCanceled || (Tn = g_(ye), Tn.draggable = !1, Tn.style["will-change"] = "", this._hideClone(), dr(Tn, this.options.chosenClass, !1), Ke.clone = Tn), l.cloneId = ku(function() {
      Xi("clone", l), !Ke.eventCanceled && (l.options.removeCloneOnHide || on.insertBefore(Tn, ye), l._hideClone(), Gi({
        sortable: l,
        name: "clone"
      }));
    }), !n && dr(ye, p.dragClass, !0), n ? (Hu = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : (It(document, "mouseup", l._onDrop), It(document, "touchend", l._onDrop), It(document, "touchcancel", l._onDrop), d && (d.effectAllowed = "move", p.setData && p.setData.call(l, d, ye)), Pt(document, "drop", l), qe(ye, "transform", "translateZ(0)")), ha = !0, l._dragStartId = ku(l._dragStarted.bind(l, n, i)), Pt(document, "selectstart", l), rl = !0, cl && qe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(i) {
    var n = this.el, l = i.target, d, p, _, v = this.options, m = v.group, E = Ke.active, A = Nu === m, w = v.sort, b = ci || E, N, k = this, G = !1;
    if (bh) return;
    function X(_e, St) {
      Xi(_e, k, us({
        evt: i,
        isOwner: A,
        axis: N ? "vertical" : "horizontal",
        revert: _,
        dragRect: d,
        targetRect: p,
        canSort: w,
        fromSortable: b,
        target: l,
        completed: z,
        onMove: function(de, He) {
          return Pu(on, n, ye, d, de, Hn(de), i, He);
        },
        changed: Y
      }, St));
    }
    function x() {
      X("dragOverAnimationCapture"), k.captureAnimationState(), k !== b && b.captureAnimationState();
    }
    function z(_e) {
      return X("dragOverCompleted", {
        insertion: _e
      }), _e && (A ? E._hideClone() : E._showClone(k), k !== b && (dr(ye, ci ? ci.options.ghostClass : E.options.ghostClass, !1), dr(ye, v.ghostClass, !0)), ci !== k && k !== Ke.active ? ci = k : k === Ke.active && ci && (ci = null), b === k && (k._ignoreWhileAnimating = l), k.animateAll(function() {
        X("dragOverAnimationComplete"), k._ignoreWhileAnimating = null;
      }), k !== b && (b.animateAll(), b._ignoreWhileAnimating = null)), (l === ye && !ye.animated || l === n && !l.animated) && (ua = null), !v.dragoverBubble && !i.rootEl && l !== document && (ye.parentNode[pr]._isOutsideThisEl(i.target), !_e && No(i)), !v.dragoverBubble && i.stopPropagation && i.stopPropagation(), G = !0;
    }
    function Y() {
      fr = Dr(ye), Xs = Dr(ye, v.draggable), Gi({
        sortable: k,
        name: "change",
        toEl: n,
        newIndex: fr,
        newDraggableIndex: Xs,
        originalEvent: i
      });
    }
    if (i.preventDefault !== void 0 && i.cancelable && i.preventDefault(), l = ss(l, v.draggable, n, !0), X("dragOver"), Ke.eventCanceled) return G;
    if (ye.contains(i.target) || l.animated && l.animatingX && l.animatingY || k._ignoreWhileAnimating === l)
      return z(!1);
    if (Hu = !1, E && !v.disabled && (A ? w || (_ = En !== on) : ci === this || (this.lastPutMode = Nu.checkPull(this, E, ye, i)) && m.checkPut(this, E, ye, i))) {
      if (N = this._getDirection(i, l) === "vertical", d = Hn(ye), X("dragOverValid"), Ke.eventCanceled) return G;
      if (_)
        return En = on, x(), this._hideClone(), X("revert"), Ke.eventCanceled || (Do ? on.insertBefore(ye, Do) : on.appendChild(ye)), z(!0);
      var R = Hh(n, v.draggable);
      if (!R || KT(i, N, this) && !R.animated) {
        if (R === ye)
          return z(!1);
        if (R && n === i.target && (l = R), l && (p = Hn(l)), Pu(on, n, ye, d, l, p, i, !!l) !== !1)
          return x(), n.appendChild(ye), En = n, Y(), z(!0);
      } else if (R && qT(i, N, this)) {
        var q = ga(n, 0, v, !0);
        if (q === ye)
          return z(!1);
        if (l = q, p = Hn(l), Pu(on, n, ye, d, l, p, i, !1) !== !1)
          return x(), n.insertBefore(ye, q), En = n, Y(), z(!0);
      } else if (l.parentNode === n) {
        p = Hn(l);
        var ce = 0, we, Le = ye.parentNode !== n, te = !zT(ye.animated && ye.toRect || d, l.animated && l.toRect || p, N), Z = N ? "top" : "left", j = ap(l, "top", "top") || ap(ye, "top", "top"), U = j ? j.scrollTop : void 0;
        ua !== l && (we = p[Z], pl = !1, Du = !te && v.invertSwap || Le), ce = $T(i, l, p, N, te ? 1 : v.swapThreshold, v.invertedSwapThreshold == null ? v.swapThreshold : v.invertedSwapThreshold, Du, ua === l);
        var se;
        if (ce !== 0) {
          var ge = Dr(ye);
          do
            ge -= ce, se = En.children[ge];
          while (se && (qe(se, "display") === "none" || se === at));
        }
        if (ce === 0 || se === l)
          return z(!1);
        ua = l, fl = ce;
        var Je = l.nextElementSibling, De = !1;
        De = ce === 1;
        var Pe = Pu(on, n, ye, d, l, p, i, De);
        if (Pe !== !1)
          return (Pe === 1 || Pe === -1) && (De = Pe === 1), bh = !0, setTimeout(YT, 30), x(), De && !Je ? n.appendChild(ye) : l.parentNode.insertBefore(ye, De ? Je : l), j && __(j, 0, U - j.scrollTop), En = ye.parentNode, we !== void 0 && !Du && (Gu = Math.abs(we - Hn(l)[Z])), Y(), z(!0);
      }
      if (n.contains(ye))
        return z(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    It(document, "mousemove", this._onTouchMove), It(document, "touchmove", this._onTouchMove), It(document, "pointermove", this._onTouchMove), It(document, "dragover", No), It(document, "mousemove", No), It(document, "touchmove", No);
  },
  _offUpEvents: function() {
    var i = this.el.ownerDocument;
    It(i, "mouseup", this._onDrop), It(i, "touchend", this._onDrop), It(i, "pointerup", this._onDrop), It(i, "touchcancel", this._onDrop), It(document, "selectstart", this);
  },
  _onDrop: function(i) {
    var n = this.el, l = this.options;
    if (fr = Dr(ye), Xs = Dr(ye, l.draggable), Xi("drop", this, {
      evt: i
    }), En = ye && ye.parentNode, fr = Dr(ye), Xs = Dr(ye, l.draggable), Ke.eventCanceled) {
      this._nulling();
      return;
    }
    ha = !1, Du = !1, pl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Oh(this.cloneId), Oh(this._dragStartId), this.nativeDraggable && (It(document, "drop", this), It(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), cl && qe(document.body, "user-select", ""), qe(ye, "transform", ""), i && (rl && (i.cancelable && i.preventDefault(), !l.dropBubble && i.stopPropagation()), at && at.parentNode && at.parentNode.removeChild(at), (on === En || ci && ci.lastPutMode !== "clone") && Tn && Tn.parentNode && Tn.parentNode.removeChild(Tn), ye && (this.nativeDraggable && It(ye, "dragend", this), mh(ye), ye.style["will-change"] = "", rl && !ha && dr(ye, ci ? ci.options.ghostClass : this.options.ghostClass, !1), dr(ye, this.options.chosenClass, !1), Gi({
      sortable: this,
      name: "unchoose",
      toEl: En,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: i
    }), on !== En ? (fr >= 0 && (Gi({
      rootEl: En,
      name: "add",
      toEl: En,
      fromEl: on,
      originalEvent: i
    }), Gi({
      sortable: this,
      name: "remove",
      toEl: En,
      originalEvent: i
    }), Gi({
      rootEl: En,
      name: "sort",
      toEl: En,
      fromEl: on,
      originalEvent: i
    }), Gi({
      sortable: this,
      name: "sort",
      toEl: En,
      originalEvent: i
    })), ci && ci.save()) : fr !== da && fr >= 0 && (Gi({
      sortable: this,
      name: "update",
      toEl: En,
      originalEvent: i
    }), Gi({
      sortable: this,
      name: "sort",
      toEl: En,
      originalEvent: i
    })), Ke.active && ((fr == null || fr === -1) && (fr = da, Xs = dl), Gi({
      sortable: this,
      name: "end",
      toEl: En,
      originalEvent: i
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Xi("nulling", this), on = ye = En = at = Do = Tn = Bu = Qs = Io = Zr = rl = fr = Xs = da = dl = ua = fl = ci = Nu = Ke.dragged = Ke.ghost = Ke.clone = Ke.active = null, qu.forEach(function(i) {
      i.checked = !0;
    }), qu.length = ph = _h = 0;
  },
  handleEvent: function(i) {
    switch (i.type) {
      case "drop":
      case "dragend":
        this._onDrop(i);
        break;
      case "dragenter":
      case "dragover":
        ye && (this._onDragOver(i), HT(i));
        break;
      case "selectstart":
        i.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var i = [], n, l = this.el.children, d = 0, p = l.length, _ = this.options; d < p; d++)
      n = l[d], ss(n, _.draggable, this.el, !1) && i.push(n.getAttribute(_.dataIdAttr) || jT(n));
    return i;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(i, n) {
    var l = {}, d = this.el;
    this.toArray().forEach(function(p, _) {
      var v = d.children[_];
      ss(v, this.options.draggable, d, !1) && (l[p] = v);
    }, this), n && this.captureAnimationState(), i.forEach(function(p) {
      l[p] && (d.removeChild(l[p]), d.appendChild(l[p]));
    }), n && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var i = this.options.store;
    i && i.set && i.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(i, n) {
    return ss(i, n || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(i, n) {
    var l = this.options;
    if (n === void 0)
      return l[i];
    var d = Rl.modifyOption(this, i, n);
    typeof d < "u" ? l[i] = d : l[i] = n, i === "group" && y_(l);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Xi("destroy", this);
    var i = this.el;
    i[pr] = null, It(i, "mousedown", this._onTapStart), It(i, "touchstart", this._onTapStart), It(i, "pointerdown", this._onTapStart), this.nativeDraggable && (It(i, "dragover", this), It(i, "dragenter", this)), Array.prototype.forEach.call(i.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Yu.splice(Yu.indexOf(this.el), 1), this.el = i = null;
  },
  _hideClone: function() {
    if (!Qs) {
      if (Xi("hideClone", this), Ke.eventCanceled) return;
      qe(Tn, "display", "none"), this.options.removeCloneOnHide && Tn.parentNode && Tn.parentNode.removeChild(Tn), Qs = !0;
    }
  },
  _showClone: function(i) {
    if (i.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Qs) {
      if (Xi("showClone", this), Ke.eventCanceled) return;
      ye.parentNode == on && !this.options.group.revertClone ? on.insertBefore(Tn, ye) : Do ? on.insertBefore(Tn, Do) : on.appendChild(Tn), this.options.group.revertClone && this.animate(ye, Tn), qe(Tn, "display", ""), Qs = !1;
    }
  }
};
function HT(o) {
  o.dataTransfer && (o.dataTransfer.dropEffect = "move"), o.cancelable && o.preventDefault();
}
function Pu(o, i, n, l, d, p, _, v) {
  var m, E = o[pr], A = E.options.onMove, w;
  return window.CustomEvent && !Rs && !Dl ? m = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (m = document.createEvent("Event"), m.initEvent("move", !0, !0)), m.to = i, m.from = o, m.dragged = n, m.draggedRect = l, m.related = d || i, m.relatedRect = p || Hn(i), m.willInsertAfter = v, m.originalEvent = _, o.dispatchEvent(m), A && (w = A.call(E, m, _)), w;
}
function mh(o) {
  o.draggable = !1;
}
function YT() {
  bh = !1;
}
function qT(o, i, n) {
  var l = Hn(ga(n.el, 0, n.options, !0)), d = 10;
  return i ? o.clientX < l.left - d || o.clientY < l.top && o.clientX < l.right : o.clientY < l.top - d || o.clientY < l.bottom && o.clientX < l.left;
}
function KT(o, i, n) {
  var l = Hn(Hh(n.el, n.options.draggable)), d = 10;
  return i ? o.clientX > l.right + d || o.clientX <= l.right && o.clientY > l.bottom && o.clientX >= l.left : o.clientX > l.right && o.clientY > l.top || o.clientX <= l.right && o.clientY > l.bottom + d;
}
function $T(o, i, n, l, d, p, _, v) {
  var m = l ? o.clientY : o.clientX, E = l ? n.height : n.width, A = l ? n.top : n.left, w = l ? n.bottom : n.right, b = !1;
  if (!_) {
    if (v && Gu < E * d) {
      if (!pl && (fl === 1 ? m > A + E * p / 2 : m < w - E * p / 2) && (pl = !0), pl)
        b = !0;
      else if (fl === 1 ? m < A + Gu : m > w - Gu)
        return -fl;
    } else if (m > A + E * (1 - d) / 2 && m < w - E * (1 - d) / 2)
      return JT(i);
  }
  return b = b || _, b && (m < A + E * p / 2 || m > w - E * p / 2) ? m > A + E / 2 ? 1 : -1 : 0;
}
function JT(o) {
  return Dr(ye) < Dr(o) ? 1 : -1;
}
function jT(o) {
  for (var i = o.tagName + o.className + o.src + o.href + o.textContent, n = i.length, l = 0; n--; )
    l += i.charCodeAt(n);
  return l.toString(36);
}
function XT(o) {
  qu.length = 0;
  for (var i = o.getElementsByTagName("input"), n = i.length; n--; ) {
    var l = i[n];
    l.checked && qu.push(l);
  }
}
function ku(o) {
  return setTimeout(o, 0);
}
function Oh(o) {
  return clearTimeout(o);
}
Qu && Pt(document, "touchmove", function(o) {
  (Ke.active || ha) && o.cancelable && o.preventDefault();
});
Ke.utils = {
  on: Pt,
  off: It,
  css: qe,
  find: f_,
  is: function(i, n) {
    return !!ss(i, n, i, !1);
  },
  extend: xT,
  throttle: p_,
  closest: ss,
  toggleClass: dr,
  clone: g_,
  index: Dr,
  nextTick: ku,
  cancelNextTick: Oh,
  detectDirection: v_,
  getChild: ga
};
Ke.get = function(o) {
  return o[pr];
};
Ke.mount = function() {
  for (var o = arguments.length, i = new Array(o), n = 0; n < o; n++)
    i[n] = arguments[n];
  i[0].constructor === Array && (i = i[0]), i.forEach(function(l) {
    if (!l.prototype || !l.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));
    l.utils && (Ke.utils = us(us({}, Ke.utils), l.utils)), Rl.mount(l);
  });
};
Ke.create = function(o, i) {
  return new Ke(o, i);
};
Ke.version = NT;
var Gn = [], sl, Lh, Ih = !1, vh, yh, Ku, ol;
function QT() {
  function o() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var i in this)
      i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  }
  return o.prototype = {
    dragStarted: function(n) {
      var l = n.originalEvent;
      this.sortable.nativeDraggable ? Pt(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Pt(document, "pointermove", this._handleFallbackAutoScroll) : l.touches ? Pt(document, "touchmove", this._handleFallbackAutoScroll) : Pt(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var l = n.originalEvent;
      !this.options.dragOverBubble && !l.rootEl && this._handleAutoScroll(l);
    },
    drop: function() {
      this.sortable.nativeDraggable ? It(document, "dragover", this._handleAutoScroll) : (It(document, "pointermove", this._handleFallbackAutoScroll), It(document, "touchmove", this._handleFallbackAutoScroll), It(document, "mousemove", this._handleFallbackAutoScroll)), dp(), Uu(), FT();
    },
    nulling: function() {
      Ku = Lh = sl = Ih = ol = vh = yh = null, Gn.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, l) {
      var d = this, p = (n.touches ? n.touches[0] : n).clientX, _ = (n.touches ? n.touches[0] : n).clientY, v = document.elementFromPoint(p, _);
      if (Ku = n, l || this.options.forceAutoScrollFallback || Dl || Rs || cl) {
        Eh(n, this.options, v, l);
        var m = eo(v, !0);
        Ih && (!ol || p !== vh || _ !== yh) && (ol && dp(), ol = setInterval(function() {
          var E = eo(document.elementFromPoint(p, _), !0);
          E !== m && (m = E, Uu()), Eh(n, d.options, E, l);
        }, 10), vh = p, yh = _);
      } else {
        if (!this.options.bubbleScroll || eo(v, !0) === ls()) {
          Uu();
          return;
        }
        Eh(n, this.options, eo(v, !1), !1);
      }
    }
  }, Ds(o, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Uu() {
  Gn.forEach(function(o) {
    clearInterval(o.pid);
  }), Gn = [];
}
function dp() {
  clearInterval(ol);
}
var Eh = p_(function(o, i, n, l) {
  if (i.scroll) {
    var d = (o.touches ? o.touches[0] : o).clientX, p = (o.touches ? o.touches[0] : o).clientY, _ = i.scrollSensitivity, v = i.scrollSpeed, m = ls(), E = !1, A;
    Lh !== n && (Lh = n, Uu(), sl = i.scroll, A = i.scrollFn, sl === !0 && (sl = eo(n, !0)));
    var w = 0, b = sl;
    do {
      var N = b, k = Hn(N), G = k.top, X = k.bottom, x = k.left, z = k.right, Y = k.width, R = k.height, q = void 0, ce = void 0, we = N.scrollWidth, Le = N.scrollHeight, te = qe(N), Z = N.scrollLeft, j = N.scrollTop;
      N === m ? (q = Y < we && (te.overflowX === "auto" || te.overflowX === "scroll" || te.overflowX === "visible"), ce = R < Le && (te.overflowY === "auto" || te.overflowY === "scroll" || te.overflowY === "visible")) : (q = Y < we && (te.overflowX === "auto" || te.overflowX === "scroll"), ce = R < Le && (te.overflowY === "auto" || te.overflowY === "scroll"));
      var U = q && (Math.abs(z - d) <= _ && Z + Y < we) - (Math.abs(x - d) <= _ && !!Z), se = ce && (Math.abs(X - p) <= _ && j + R < Le) - (Math.abs(G - p) <= _ && !!j);
      if (!Gn[w])
        for (var ge = 0; ge <= w; ge++)
          Gn[ge] || (Gn[ge] = {});
      (Gn[w].vx != U || Gn[w].vy != se || Gn[w].el !== N) && (Gn[w].el = N, Gn[w].vx = U, Gn[w].vy = se, clearInterval(Gn[w].pid), (U != 0 || se != 0) && (E = !0, Gn[w].pid = setInterval(function() {
        l && this.layer === 0 && Ke.active._onTouchMove(Ku);
        var Je = Gn[this.layer].vy ? Gn[this.layer].vy * v : 0, De = Gn[this.layer].vx ? Gn[this.layer].vx * v : 0;
        typeof A == "function" && A.call(Ke.dragged.parentNode[pr], De, Je, o, Ku, Gn[this.layer].el) !== "continue" || __(Gn[this.layer].el, De, Je);
      }.bind({
        layer: w
      }), 24))), w++;
    } while (i.bubbleScroll && b !== m && (b = eo(b, !1)));
    Ih = E;
  }
}, 30), w_ = function(i) {
  var n = i.originalEvent, l = i.putSortable, d = i.dragEl, p = i.activeSortable, _ = i.dispatchSortableEvent, v = i.hideGhostForTarget, m = i.unhideGhostForTarget;
  if (n) {
    var E = l || p;
    v();
    var A = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, w = document.elementFromPoint(A.clientX, A.clientY);
    m(), E && !E.el.contains(w) && (_("spill"), this.onSpill({
      dragEl: d,
      putSortable: l
    }));
  }
};
function Yh() {
}
Yh.prototype = {
  startIndex: null,
  dragStart: function(i) {
    var n = i.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(i) {
    var n = i.dragEl, l = i.putSortable;
    this.sortable.captureAnimationState(), l && l.captureAnimationState();
    var d = ga(this.sortable.el, this.startIndex, this.options);
    d ? this.sortable.el.insertBefore(n, d) : this.sortable.el.appendChild(n), this.sortable.animateAll(), l && l.animateAll();
  },
  drop: w_
};
Ds(Yh, {
  pluginName: "revertOnSpill"
});
function qh() {
}
qh.prototype = {
  onSpill: function(i) {
    var n = i.dragEl, l = i.putSortable, d = l || this.sortable;
    d.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), d.animateAll();
  },
  drop: w_
};
Ds(qh, {
  pluginName: "removeOnSpill"
});
Ke.mount(new QT());
Ke.mount(qh, Yh);
var ew = Object.defineProperty, tw = Object.defineProperties, nw = Object.getOwnPropertyDescriptors, fp = Object.getOwnPropertySymbols, iw = Object.prototype.hasOwnProperty, rw = Object.prototype.propertyIsEnumerable, pp = (o, i, n) => i in o ? ew(o, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[i] = n, to = (o, i) => {
  for (var n in i || (i = {}))
    iw.call(i, n) && pp(o, n, i[n]);
  if (fp)
    for (var n of fp(i))
      rw.call(i, n) && pp(o, n, i[n]);
  return o;
}, $u = (o, i) => tw(o, nw(i));
function Th(o) {
  o.parentElement !== null && o.parentElement.removeChild(o);
}
function _p(o, i, n) {
  const l = n === 0 ? o.children[0] : o.children[n - 1].nextSibling;
  o.insertBefore(i, l);
}
function sw() {
  return typeof window < "u" ? window.console : global.console;
}
const ow = sw();
function aw(o) {
  const i = /* @__PURE__ */ Object.create(null);
  return function(l) {
    return i[l] || (i[l] = o(l));
  };
}
const lw = /-(\w)/g, uw = aw((o) => o.replace(lw, (i, n) => n.toUpperCase())), S_ = ["Start", "Add", "Remove", "Update", "End"], A_ = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], C_ = ["Move"], cw = [C_, S_, A_].flatMap((o) => o).map((o) => `on${o}`), Nh = {
  manage: C_,
  manageAndEmit: S_,
  emit: A_
};
function hw(o) {
  return cw.indexOf(o) !== -1;
}
const dw = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "math",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rb",
  "rp",
  "rt",
  "rtc",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "svg",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"
];
function fw(o) {
  return dw.includes(o);
}
function pw(o) {
  return ["transition-group", "TransitionGroup"].includes(o);
}
function b_(o) {
  return ["id", "class", "role", "style"].includes(o) || o.startsWith("data-") || o.startsWith("aria-") || o.startsWith("on");
}
function O_(o) {
  return o.reduce((i, [n, l]) => (i[n] = l, i), {});
}
function _w({ $attrs: o, componentData: i = {} }) {
  const n = O_(Object.entries(o).filter(([l, d]) => b_(l)));
  return to(to({}, n), i);
}
function gw({ $attrs: o, callBackBuilder: i }) {
  const n = O_(L_(o));
  Object.entries(i).forEach(([d, p]) => {
    Nh[d].forEach((_) => {
      n[`on${_}`] = p(_);
    });
  });
  const l = `[data-draggable]${n.draggable || ""}`;
  return $u(to({}, n), {
    draggable: l
  });
}
function L_(o) {
  return Object.entries(o).filter(([i, n]) => !b_(i)).map(([i, n]) => [uw(i), n]).filter(([i, n]) => !hw(i));
}
const gp = (o) => {
  const i = o.el || Array.isArray(o.children) && o.children[0].el.parentNode;
  return i || console.error("使用 transition-group , 需要在slot中template内至少2层html标签"), i || {};
}, mw = (o, i) => o.__draggable_context = i, mp = (o) => o.__draggable_context;
class vw {
  constructor({
    nodes: { header: i, default: n, footer: l },
    root: d,
    realList: p
  }) {
    this.defaultNodes = n, this.children = [...i, ...n, ...l], this.externalComponent = d.externalComponent, this.rootTransition = d.transition, this.tag = d.tag, this.realList = p;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(i, n) {
    const { tag: l, children: d, _isRootComponent: p } = this;
    return i(l, n, p ? { default: () => d } : d);
  }
  updated() {
    const { defaultNodes: i, realList: n } = this;
    i.forEach((l, d) => {
      mw(gp(l), {
        element: n[d],
        index: d
      });
    });
  }
  getUnderlyingVm(i) {
    return mp(i);
  }
  getVmIndexFromDomIndex(i, n) {
    const { defaultNodes: l } = this, { length: d } = l, p = n.children, _ = p.item(i);
    if (_ === null)
      return d;
    const v = mp(_);
    if (v)
      return v.index;
    if (d === 0)
      return 0;
    const m = gp(l[0]), E = [...p].findIndex((A) => A === m);
    return i < E ? 0 : d;
  }
}
function yw(o, i) {
  const n = o[i];
  return n ? n() : [];
}
function Ew({ $slots: o, realList: i, getKey: n }) {
  const l = i || [], [d, p] = ["header", "footer"].map((m) => yw(o, m)), { item: _ } = o;
  if (!_)
    throw new Error("draggable element must have an item slot");
  const v = l.flatMap((m, E) => _({ element: m, index: E }).map((A) => (A.key = n(m), A.props = $u(to({}, A.props || {}), { "data-draggable": !0 }), A)));
  if (v.length !== l.length)
    throw new Error("Item slot must have only one child");
  return {
    header: d,
    footer: p,
    default: v
  };
}
function Tw(o) {
  const i = pw(o), n = !fw(o) && !i;
  return {
    transition: i,
    externalComponent: n,
    tag: n ? ut(o) : i ? NE : o
  };
}
function ww({ $slots: o, tag: i, realList: n, getKey: l }) {
  const d = Ew({ $slots: o, realList: n, getKey: l }), p = Tw(i);
  return new vw({ nodes: d, root: p, realList: n });
}
function I_(o, i) {
  Xt(() => this.$emit(o.toLowerCase(), i));
}
function N_(o) {
  return (i, n) => {
    if (this.realList !== null)
      return this[`onDrag${o}`](i, n);
  };
}
function Sw(o) {
  const i = N_.call(this, o);
  return (n, l) => {
    i.call(this, n, l), I_.call(this, o, n);
  };
}
let wh = null;
const Aw = {
  list: {
    type: Array,
    required: !1,
    default: null
  },
  modelValue: {
    type: Array,
    required: !1,
    default: null
  },
  itemKey: {
    type: [String, Function],
    required: !0
  },
  clone: {
    type: Function,
    default: (o) => o
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: !1,
    default: null
  }
}, Cw = [
  "update:modelValue",
  "change",
  ...[...Nh.manageAndEmit, ...Nh.emit].map((o) => o.toLowerCase())
], bw = st({
  name: "draggable",
  inheritAttrs: !1,
  props: Aw,
  emits: Cw,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: o, $attrs: i, tag: n, componentData: l, realList: d, getKey: p } = this, _ = ww({
        $slots: o,
        tag: n,
        realList: d,
        getKey: p
      });
      this.componentStructure = _;
      const v = _w({ $attrs: i, componentData: l });
      return _.render(Ns, v);
    } catch (o) {
      return this.error = !0, Ns("pre", { style: { color: "red" } }, o.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && ow.error("modelValue and list props are mutually exclusive! Please set one or another.");
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: o, $el: i, componentStructure: n } = this;
    n.updated();
    const l = gw({
      $attrs: o,
      callBackBuilder: {
        manageAndEmit: (p) => Sw.call(this, p),
        emit: (p) => I_.bind(this, p),
        manage: (p) => N_.call(this, p)
      }
    }), d = i.nodeType === 1 ? i : i.parentElement;
    this._sortable = new Ke(d, l), this.targetDomElement = d, d.__draggable_component__ = this;
  },
  updated() {
    this.componentStructure.updated();
  },
  beforeUnmount() {
    this._sortable !== void 0 && this._sortable.destroy();
  },
  computed: {
    realList() {
      const { list: o } = this;
      return o || this.modelValue;
    },
    getKey() {
      const { itemKey: o } = this;
      return typeof o == "function" ? o : (i) => i[o];
    }
  },
  watch: {
    $attrs: {
      handler(o) {
        const { _sortable: i } = this;
        i && L_(o).forEach(([n, l]) => {
          i.option(n, l);
        });
      },
      deep: !0
    }
  },
  methods: {
    getUnderlyingVm(o) {
      return this.componentStructure.getUnderlyingVm(o) || null;
    },
    getUnderlyingPotencialDraggableComponent(o) {
      return o.__draggable_component__;
    },
    emitChanges(o) {
      Xt(() => this.$emit("change", o));
    },
    alterList(o) {
      if (this.list) {
        o(this.list);
        return;
      }
      const i = [...this.modelValue];
      o(i), this.$emit("update:modelValue", i);
    },
    spliceList() {
      const o = (i) => i.splice(...arguments);
      this.alterList(o);
    },
    updatePosition(o, i) {
      const n = (l) => l.splice(i, 0, l.splice(o, 1)[0]);
      this.alterList(n);
    },
    getRelatedContextFromMoveEvent({ to: o, related: i }) {
      const n = this.getUnderlyingPotencialDraggableComponent(o);
      if (!n)
        return { component: n };
      const l = n.realList, d = { list: l, component: n };
      if (o !== i && l) {
        const p = n.getUnderlyingVm(i) || {};
        return to(to({}, p), d);
      }
      return d;
    },
    getVmIndexFromDomIndex(o) {
      return this.componentStructure.getVmIndexFromDomIndex(o, this.targetDomElement);
    },
    onDragStart(o) {
      this.context = this.getUnderlyingVm(o.item), o.item._underlying_vm_ = this.clone(this.context.element), wh = o.item;
    },
    onDragAdd(o) {
      const i = o.item._underlying_vm_;
      if (i === void 0)
        return;
      Th(o.item);
      const n = this.getVmIndexFromDomIndex(o.newIndex);
      this.spliceList(n, 0, i);
      const l = { element: i, newIndex: n };
      this.emitChanges({ added: l });
    },
    onDragRemove(o) {
      if (_p(this.$el, o.item, o.oldIndex), o.pullMode === "clone") {
        Th(o.clone);
        return;
      }
      const { index: i, element: n } = this.context;
      this.spliceList(i, 1);
      const l = { element: n, oldIndex: i };
      this.emitChanges({ removed: l });
    },
    onDragUpdate(o) {
      Th(o.item), _p(o.from, o.item, o.oldIndex);
      const i = this.context.index, n = this.getVmIndexFromDomIndex(o.newIndex);
      this.updatePosition(i, n);
      const l = { element: this.context.element, oldIndex: i, newIndex: n };
      this.emitChanges({ moved: l });
    },
    computeFutureIndex(o, i) {
      if (!o.element)
        return 0;
      const n = [...i.to.children].filter((_) => _.style.display !== "none"), l = n.indexOf(i.related), d = o.component.getVmIndexFromDomIndex(l);
      return n.indexOf(wh) !== -1 || !i.willInsertAfter ? d : d + 1;
    },
    onDragMove(o, i) {
      const { move: n, realList: l } = this;
      if (!n || !l)
        return !0;
      const d = this.getRelatedContextFromMoveEvent(o), p = this.computeFutureIndex(d, o), _ = $u(to({}, this.context), {
        futureIndex: p
      }), v = $u(to({}, o), {
        relatedContext: d,
        draggedContext: _
      });
      return n(v, i);
    },
    onDragEnd() {
      wh = null;
    }
  }
}), ui = [];
for (let o = 0; o < 256; ++o)
  ui.push((o + 256).toString(16).slice(1));
function Ow(o, i = 0) {
  return (ui[o[i + 0]] + ui[o[i + 1]] + ui[o[i + 2]] + ui[o[i + 3]] + "-" + ui[o[i + 4]] + ui[o[i + 5]] + "-" + ui[o[i + 6]] + ui[o[i + 7]] + "-" + ui[o[i + 8]] + ui[o[i + 9]] + "-" + ui[o[i + 10]] + ui[o[i + 11]] + ui[o[i + 12]] + ui[o[i + 13]] + ui[o[i + 14]] + ui[o[i + 15]]).toLowerCase();
}
const Lw = new Uint8Array(16);
function Iw() {
  return crypto.getRandomValues(Lw);
}
function Hr(o, i, n) {
  return crypto.randomUUID ? crypto.randomUUID() : Nw(o);
}
function Nw(o, i, n) {
  o = o || {};
  const l = o.random ?? o.rng?.() ?? Iw();
  if (l.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return l[6] = l[6] & 15 | 64, l[8] = l[8] & 63 | 128, Ow(l);
}
class D_ {
  constructor(i) {
    this.geoJson = {}, this.url = i;
  }
  async fetch() {
    return this.geoJson = await (await fetch(this.url)).json(), this.geoJson;
  }
}
const Dw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: D_
}, Symbol.toStringTag, { value: "Module" })), Rw = { class: "table-crud__slot" }, Pw = { class: "p-1" }, xw = { class: "p-1" }, Fw = { class: "p-1" }, Mw = { class: "p-1" }, Bw = { class: "table-inline__cell" }, Gw = ["onClick"], kw = { class: "table-inline__cell" }, Uw = ["onClick"], Vw = { class: "table-inline__cell" }, zw = ["onClick"], Dh = /* @__PURE__ */ st({
  __name: "ConditionSettings",
  props: {
    modelValue: {
      default: () => xo([])
    },
    modelModifiers: {},
    thingProps: {
      default: () => xo(
        [
          {
            text: "id",
            selector: "@iot.id"
          },
          {
            text: "name",
            selector: "name"
          },
          {
            text: "decription",
            selector: "description"
          },
          {
            text: "property",
            selector: "property"
          },
          {
            text: "observation",
            selector: "Observations.0.result"
          },
          {
            text: "all",
            selector: "*"
          }
        ]
      )
    },
    thingPropsModifiers: {}
  },
  emits: ["update:modelValue", "update:thingProps"],
  setup(o) {
    const i = _r(o, "modelValue"), n = pe(), l = pe(), d = pe({
      text: "==",
      selector: Rr.equals
    }), p = _r(o, "thingProps"), _ = [
      {
        text: "==",
        selector: Rr.equals
      },
      {
        text: ">",
        selector: Rr.greaterThen
      },
      {
        text: ">=",
        selector: Rr.greaterThenEquals
      },
      {
        text: "<",
        selector: Rr.lessThen
      },
      {
        text: "<=",
        selector: Rr.lessThenEquals
      },
      {
        text: "!=",
        selector: Rr.notEQuals
      }
    ], v = [
      { key: "prop", sortable: !0 },
      { key: "comperator", sortable: !0 },
      { key: "value", sortable: !0 },
      { key: "actions", width: 80 }
    ], m = (A) => {
      const w = {
        text: A,
        selector: A
      };
      return p.value.push(w), w;
    }, E = () => {
      i.value.push({
        comperator: d.value.selector,
        value: l.value,
        prop: n.value.selector
      }), d.value = {
        text: "==",
        selector: Rr.equals
      }, l.value = "", n.value = "";
    };
    return (A, w) => {
      const b = ut("VaSelect"), N = ut("VaInput"), k = ut("VaButton"), G = ut("VaValue"), X = ut("VaDataTable");
      return V(), Ze(X, {
        columns: v,
        items: i.value,
        class: "table-crud ds prop",
        striped: "",
        id: "proptableConditions"
      }, {
        headerAppend: Ae(() => [
          ue("tr", Rw, [
            ue("th", Pw, [
              le(b, {
                width: "230px",
                modelValue: n.value,
                "onUpdate:modelValue": w[0] || (w[0] = (x) => n.value = x),
                options: p.value,
                "track-by": (x) => x.selector,
                "allow-create": "",
                placeholder: "Select an option",
                onCreateNew: w[1] || (w[1] = (x) => {
                  n.value = m(x);
                })
              }, null, 8, ["modelValue", "options", "track-by"])
            ]),
            ue("th", xw, [
              le(b, {
                width: "230px",
                modelValue: d.value,
                "onUpdate:modelValue": w[2] || (w[2] = (x) => d.value = x),
                options: _,
                "track-by": (x) => x.selector
              }, null, 8, ["modelValue", "track-by"])
            ]),
            ue("th", Fw, [
              p.value.find((x) => x.selector == n.value?.selector)?.suggestions ? (V(), Ze(b, {
                key: 0,
                width: "230px",
                modelValue: l.value,
                "onUpdate:modelValue": w[3] || (w[3] = (x) => l.value = x),
                options: p.value.find((x) => x.selector == n.value?.selector)?.suggestions,
                "track-by": (x) => x.selector,
                "allow-create": "",
                placeholder: "Select an option",
                onCreateNew: w[4] || (w[4] = (x) => {
                  l.value = x;
                })
              }, null, 8, ["modelValue", "options", "track-by"])) : (V(), Ze(N, {
                key: 1,
                modelValue: l.value,
                "onUpdate:modelValue": w[5] || (w[5] = (x) => l.value = x),
                width: "230px",
                placeholder: "Enter value"
              }, null, 8, ["modelValue"]))
            ]),
            ue("th", Mw, [
              le(k, {
                disabled: !n.value || !l.value,
                block: "",
                style: { "min-width": "40px", float: "right" },
                onClick: E
              }, {
                default: Ae(() => [...w[6] || (w[6] = [
                  Rt(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ]),
        "cell(actions)": Ae(({ rowIndex: x }) => [
          le(k, {
            class: "ml-3",
            icon: "delete",
            preset: "plain",
            style: { "min-width": "40px", float: "right" },
            onClick: () => {
              i.value.splice(x, 1);
            }
          }, null, 8, ["onClick"])
        ]),
        "cell(prop)": Ae(({ value: x, row: z }) => [
          ue("div", Bw, [
            le(G, null, {
              default: Ae((Y) => [
                Y.value ? (V(), Ze(b, {
                  key: 0,
                  "model-value": x,
                  options: p.value,
                  "track-by": (R) => R.selector,
                  "allow-create": "",
                  placeholder: "Select an option",
                  onCreateNew: (R) => {
                    const q = m(R);
                    z.rowData.prop = q.selector, Y.value = !1;
                  },
                  "onUpdate:modelValue": (R) => {
                    z.rowData.prop = R.selector, Y.value = !1;
                  }
                }, null, 8, ["model-value", "options", "track-by", "onCreateNew", "onUpdate:modelValue"])) : (V(), ie("span", {
                  key: 1,
                  class: as([Y.value ? "table-inline__item--hidden" : "", "table-inline__item"]),
                  onClick: (R) => Y.value = !0
                }, yt(x), 11, Gw))
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        "cell(comperator)": Ae(({ value: x, row: z }) => [
          ue("div", kw, [
            le(G, null, {
              default: Ae((Y) => [
                Y.value ? (V(), Ze(b, {
                  key: 0,
                  "model-value": { text: _.filter((R) => R.selector == x)[0].text, selector: x },
                  options: _,
                  "track-by": (R) => R.selector,
                  "onUpdate:modelValue": (R) => {
                    z.rowData.comperator = R.selector, Y.value = !1;
                  }
                }, null, 8, ["model-value", "track-by", "onUpdate:modelValue"])) : (V(), ie("span", {
                  key: 1,
                  class: as([Y.value ? "table-inline__item--hidden" : "", "table-inline__item"]),
                  onClick: (R) => Y.value = !0
                }, yt(_.filter((R) => R.selector == x)[0].text), 11, Uw))
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        "cell(value)": Ae(({ value: x, row: z }) => [
          ue("div", Vw, [
            le(G, null, {
              default: Ae((Y) => [
                Y.value ? (V(), Ze(N, {
                  key: 0,
                  "model-value": x,
                  onBlur: (R) => Y.value = !1,
                  onChange: (R) => {
                    z.rowData.value = R.target.value, Y.value = !1;
                  }
                }, null, 8, ["model-value", "onBlur", "onChange"])) : (V(), ie("span", {
                  key: 1,
                  class: as([Y.value ? "table-inline__item--hidden" : "", "table-inline__item"]),
                  onClick: (R) => Y.value = !0
                }, yt(x), 11, zw))
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        _: 1
      }, 8, ["items"]);
    };
  }
}), Ww = { class: "pmap_container" }, Zw = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", Hw = 5, Yw = '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', qw = /* @__PURE__ */ st({
  __name: "MapPreviewPoint",
  setup(o) {
    const i = [50.93115286, 11.60392726], n = pe(null);
    return qt(() => {
      n.value && n.value.leafletObject && n.value.leafletObject.invalidateSize();
    }), (l, d) => (V(), ie("div", Ww, [
      le(Oe(Bh), {
        id: "map_t",
        ref_key: "map",
        ref: n,
        center: i,
        "max-zoom": 21,
        zoom: Hw,
        style: { height: "100%" }
      }, {
        default: Ae(() => [
          le(Oe(Uh), {
            attribution: Yw,
            options: {
              maxNativeZoom: 19,
              maxZoom: 25
            },
            url: Zw
          }),
          el(l.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["center"])
    ]));
  }
}), Kw = /* @__PURE__ */ mr(qw, [["__scopeId", "data-v-c72cb17a"]]), $w = { class: "flex flex-col md6 pa-3" }, Jw = { class: "flex flex-col md6 pa-3" }, jw = { class: "inner" }, Xw = { class: "inner" }, Qw = ["src"], e2 = {
  key: 1,
  class: "placeholder"
}, t2 = /* @__PURE__ */ st({
  __name: "PointStyler",
  props: {
    modelValue: {
      default: () => xo({
        show_SubElements: !1,
        point_render_as: "icon",
        point_prop: "name",
        point: {
          currentIcon: "10k",
          iconColor: "#545050",
          iconSize: 48,
          isIconFilled: !1,
          strokeWeight: 2,
          opticSize: 24,
          grade: 1
        },
        pointPin: {
          color: "#ccc"
        }
      })
    },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    DE((d) => ({
      v62137916: i.value.pointPin.color
    }));
    const i = _r(o, "modelValue"), n = [
      {
        text: "id",
        selector: "@iot\\.id"
      },
      {
        text: "name",
        selector: "name"
      },
      {
        text: "decription",
        selector: "description"
      },
      {
        text: "property",
        selector: "property"
      },
      {
        text: "all",
        selector: "*"
      }
    ], l = [
      { label: "Icon", value: "icon" },
      { label: "Property", value: "prop" },
      { label: "Image", value: "image" },
      { label: "None", value: "none" }
    ];
    return (d, p) => {
      const _ = ut("VaButtonToggle"), v = ut("VaSelect"), m = ut("VaInput"), E = ut("VaDivider"), A = ut("va-color-input"), w = ut("VaCheckbox");
      return V(), ie(Re, null, [
        ue("div", $w, [
          le(_, {
            modelValue: i.value.point_render_as,
            "onUpdate:modelValue": p[0] || (p[0] = (b) => i.value.point_render_as = b),
            options: l,
            "border-color": "primary",
            preset: "secondary"
          }, null, 8, ["modelValue"]),
          i.value.point_render_as == "icon" ? (V(), Ze(Oe(FE), {
            key: 0,
            modelValue: i.value.point,
            "onUpdate:modelValue": p[1] || (p[1] = (b) => i.value.point = b)
          }, null, 8, ["modelValue"])) : Ge("", !0),
          i.value.point_render_as == "prop" ? (V(), Ze(v, {
            key: 1,
            modelValue: i.value.point_prop,
            "onUpdate:modelValue": p[2] || (p[2] = (b) => i.value.point_prop = b),
            options: n,
            label: "DataStream Prop",
            placeholder: "Select an option",
            "text-by": "text",
            "value-by": "selector"
          }, null, 8, ["modelValue"])) : Ge("", !0),
          i.value.point_render_as == "image" ? (V(), ie(Re, { key: 2 }, [
            le(m, {
              modelValue: i.value.point_image_url,
              "onUpdate:modelValue": p[3] || (p[3] = (b) => i.value.point_image_url = b),
              label: "Image URL",
              placeholder: "https://example.com/image.png"
            }, null, 8, ["modelValue"]),
            le(m, {
              modelValue: i.value.point_image_size,
              "onUpdate:modelValue": p[4] || (p[4] = (b) => i.value.point_image_size = b),
              modelModifiers: { number: !0 },
              type: "number",
              label: "Image Size (px)",
              placeholder: "32"
            }, null, 8, ["modelValue"])
          ], 64)) : Ge("", !0),
          i.value.point_render_as != "none" ? (V(), ie(Re, { key: 3 }, [
            le(E, { class: "mb15" }),
            le(A, {
              modelValue: i.value.pointPin.color,
              "onUpdate:modelValue": p[5] || (p[5] = (b) => i.value.pointPin.color = b),
              class: "pin-color",
              label: "Pin Color"
            }, null, 8, ["modelValue"]),
            le(w, {
              modelValue: i.value.pointPin.solid,
              "onUpdate:modelValue": p[6] || (p[6] = (b) => i.value.pointPin.solid = b),
              label: "Solid (vollflächig)"
            }, null, 8, ["modelValue"])
          ], 64)) : Ge("", !0)
        ]),
        ue("div", Jw, [
          le(Kw, xu({ ref: "MapPrev2" }, i.value.point), {
            default: Ae(() => [
              le(Oe(gl), { "lat-lng": [50.92828047934907, 11.587408017353823] }, {
                default: Ae(() => [
                  le(Oe(_l), { "class-name": "someExtraClass" }, {
                    default: Ae(() => [
                      i.value.point_render_as == "icon" ? (V(), ie("div", {
                        key: 0,
                        class: as(["pin", "icon", { solid: i.value.pointPin.solid }])
                      }, [
                        ue("div", jw, [
                          le(Oe(wp), {
                            config: i.value.point,
                            configv: i.value.point,
                            "onUpdate:configv": p[7] || (p[7] = (b) => i.value.point = b)
                          }, null, 8, ["config", "configv"])
                        ])
                      ], 2)) : Ge("", !0),
                      i.value.point_render_as == "prop" ? (V(), ie("div", {
                        key: 1,
                        class: as(["pin", "contain", "marker", { solid: i.value.pointPin.solid }])
                      }, [
                        ue("div", Xw, yt(i.value.point_prop), 1)
                      ], 2)) : Ge("", !0),
                      i.value.point_render_as == "image" ? (V(), ie("div", {
                        key: 2,
                        class: "image-marker",
                        style: fa({ width: (i.value.point_image_size || 32) + "px", height: (i.value.point_image_size || 32) + "px" })
                      }, [
                        i.value.point_image_url ? (V(), ie("img", {
                          key: 0,
                          src: i.value.point_image_url,
                          style: { width: "100%", height: "100%", objectFit: "contain" }
                        }, null, 8, Qw)) : (V(), ie("div", e2, "No Image"))
                      ], 4)) : Ge("", !0)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })
            ]),
            _: 1
          }, 16)
        ])
      ], 64);
    };
  }
}), R_ = /* @__PURE__ */ mr(t2, [["__scopeId", "data-v-c2a66398"]]), n2 = "FeatureCollection", i2 = /* @__PURE__ */ JSON.parse('[{"type":"Feature","id":0,"properties":{"ID_0":86,"ISO":"DEU","NAME_ENGLI":"Germany","NAME_ISO":"GERMANY","NAME_FAO":"Germany","NAME_LOCAL":"Deutschland","NAME_OBSOL":null,"NAME_VARIA":"Germany","NAME_NONLA":null,"NAME_FRENC":"Allemagne","NAME_SPANI":"Alemania","NAME_RUSSI":"????????","NAME_ARABI":"???????","NAME_CHINE":"??","WASPARTOF":null,"CONTAINS":"East Germany|West Germany|DDR","SOVEREIGN":"Germany","ISO2":"DE","WWW":null,"FIPS":"GM","ISON":276,"VALIDFR":"Unknown","VALIDTO":"Present","EUmember":1},"geometry":{"type":"MultiPolygon","coordinates":[[[[8.407297932191138,55.04395228653645],[8.442500114441145,55.0159721374514],[8.353609085083235,54.967361450195654],[8.366944313049544,54.90236282348644],[8.429720878601302,54.87763977050787],[8.812039375305233,54.9167366027832],[9.224779129028263,54.85595321655279],[9.282591819763411,54.80223464965832],[9.408679962158317,54.841171264648494],[9.435277938842773,54.788471221923885],[9.613611221313704,54.87597274780296],[9.603055953979776,54.83152770996105],[9.84305572509794,54.756248474121094],[9.955279350281046,54.780139923095646],[10.034722328186263,54.67235946655285],[9.983054161071891,54.701248168945426],[9.963891689870369,54.67303628596345],[10.034166336059798,54.66986083984375],[10.02750015258789,54.55041503906284],[9.840277671813965,54.46736145019537],[10.199167251587141,54.45597076416027],[10.13194561004633,54.311248779296875],[10.228056907653865,54.413471221923885],[10.318612098693961,54.43569564819353],[10.704722404479924,54.304862976074276],[10.928610801696777,54.381805419922216],[11.128055572509766,54.39069366455084],[11.058609962463436,54.35430526733438],[11.093610763550032,54.19791793823248],[10.75416564941412,54.05486297607433],[10.890831947326603,53.955696105956974],[11.179167747497502,54.01569366455084],[11.258610725403116,53.98485946655296],[11.258610725403116,53.93402862548851],[11.335276603698844,53.95847320556646],[11.45472240447998,53.900417327881144],[11.483610153198242,53.968471527099666],[11.378055572509936,53.997360229492244],[11.492501258850325,54.02291488647472],[11.490279197693042,53.968193054199276],[11.62583255767845,54.08958435058588],[11.525277137756348,54.07180404663086],[11.682498931884766,54.15319442749018],[12.087498664856184,54.18319320678711],[12.124721527099894,54.150138854980526],[12.09527778625494,54.18097305297857],[12.339165687561263,54.2979164123538],[12.519721031188965,54.484306335449276],[12.962499618530387,54.437637329101676],[12.68351455577495,54.40644354068151],[12.715277671814022,54.404304504394474],[12.678054809570312,54.37014007568371],[12.786945343017862,54.3962516784668],[12.810278892517147,54.3451385498048],[13.019721984863338,54.43902587890659],[13.093609809875716,54.366806030273665],[13.105833053588867,54.281806945800895],[13.286388397216797,54.235137939453296],[13.346388816833723,54.18041610717819],[13.318054199219034,54.15986251831066],[13.415834426880224,54.17514038085943],[13.382498741150187,54.14236068725586],[13.456945419311523,54.090694427490234],[13.696389198303223,54.17180633544956],[13.806944847107104,54.10319519042969],[13.74416637420677,54.029304504394645],[13.914167404174805,53.92235946655302],[13.824722290039404,53.866249084473],[13.937500953674316,53.90847396850597],[13.90583419799816,53.98986053466797],[13.965278625488452,53.99013900756853],[13.959721565246582,53.93402862548851],[14.042499542236555,53.942081451416016],[14.046944618225268,53.99652862548845],[14.00347855685085,54.0366769060455],[14.221389770507926,53.93013763427729],[14.186329841613997,53.91558074951217],[14.2173366546632,53.865417480469205],[13.806388854980412,53.85819625854492],[14.038612365722884,53.75513839721674],[14.2830562591555,53.73875045776384],[14.215276718139592,53.70264053344738],[14.273162841796875,53.69930648803711],[14.324908256530762,53.61864852905296],[14.302708625793684,53.54261016845703],[14.448929786682186,53.26163864135748],[14.378918647766113,53.204158782958984],[14.345703125000057,53.052917480468864],[14.142452239990291,52.961112976074276],[14.121270179748649,52.84027099609369],[14.639061927795638,52.58003234863287],[14.600604057312069,52.53302383422857],[14.631249427795638,52.499130249023665],[14.528908729553166,52.39641189575218],[14.570899963378906,52.2895622253418],[14.699570655822868,52.24108886718756],[14.669348716736067,52.12155151367199],[14.741278648376522,52.07339096069347],[14.70477771759056,51.94266128540062],[14.586701393127385,51.823604583740234],[14.738728523254622,51.66687011718744],[14.698139190673942,51.55850982666027],[14.933858871460018,51.482269287109375],[14.967818260192928,51.3544158935548],[15.028479576110897,51.30979919433605],[14.930111885070744,50.99140548706072],[14.8050794601441,50.828918457031534],[14.710870742797965,50.826759338379134],[14.611928939819393,50.85478210449219],[14.651672363281364,50.93264007568365],[14.560112953186092,50.92348480224615],[14.595055580139274,50.988510131836165],[14.501680374145508,51.05150604248075],[14.39741039276123,51.00828170776373],[14.29401683807373,51.05416488647461],[14.246868133545036,50.97320175170904],[14.400946617126465,50.94234848022472],[14.372268676757926,50.88858032226568],[13.954609870910872,50.80371093750006],[13.850809097290096,50.71820068359375],[13.548975944519043,50.713214874267635],[13.465190887451229,50.59648895263689],[13.374910354614315,50.643661499023665],[13.326787948608512,50.581813812255916],[13.248618125915641,50.59226989746088],[13.195990562439079,50.500591278076286],[13.0332670211792,50.50854873657232],[12.977046012878645,50.41427230834961],[12.828769683837834,50.45862197875988],[12.705128669738826,50.39775848388672],[12.51611328125,50.40008544921898],[12.364088058471737,50.27642440795904],[12.32758998870844,50.17972946166998],[12.282715797424373,50.18267822265631],[12.194091796874943,50.32287597656256],[12.085860252380428,50.25535202026384],[12.198919296264876,50.19562149047863],[12.19906044006359,50.11182022094732],[12.256030082702637,50.062278747558594],[12.547736167907715,49.92714309692383],[12.472072601318473,49.79027175903349],[12.402890205383244,49.75516128540045],[12.527859687805176,49.68775939941435],[12.588051795959473,49.54399871826166],[12.645830154418945,49.53105926513672],[12.661074638366813,49.43216705322294],[12.78410530090332,49.35190582275402],[13.033589363098258,49.30863952636736],[13.180210113525618,49.144439697265625],[13.403729438781738,49.05178070068382],[13.401620864868221,48.98391342163103],[13.63125991821289,48.95058059692383],[13.835957527160701,48.7750511169433],[13.78705883026123,48.721511840820426],[13.809944152832088,48.590904235840014],[13.721092224121207,48.51679229736334],[13.503158569335938,48.59651184082037],[13.435749053955078,48.564682006835994],[13.410618782043514,48.377738952636776],[13.285719871520996,48.30517196655279],[12.868214607238826,48.20366668701183],[12.753028869628963,48.11729049682623],[13.00114727020275,47.8522300720216],[12.91126728057867,47.73124313354498],[13.043539047241325,47.720989227295206],[13.105588912963867,47.639202117920036],[13.013463973999023,47.46576690673845],[12.799818038940373,47.561462402343864],[12.826677322387695,47.61626052856451],[12.782772064209098,47.675922393799055],[12.605334281921444,47.67924880981457],[12.506064414978141,47.62885284423828],[12.43596267700218,47.70073318481451],[12.258779525756836,47.67621994018549],[12.254279136657772,47.739990234375114],[12.17435169219982,47.698875427246094],[12.2092800140382,47.60120010375982],[11.636343955993766,47.598270416259766],[11.58102035522461,47.51182174682634],[11.437379837036133,47.51325988769548],[11.388031959533805,47.47192382812523],[11.424080848693961,47.44562149047846],[11.341606140136776,47.45182418823248],[11.27390003204357,47.391010284423885],[11.224139213562012,47.391269683837834],[11.246058464050293,47.43478012084961],[10.977520942687931,47.39611053466808],[10.926508903503532,47.478080749511776],[10.862998962402344,47.47803115844738],[10.91859436035162,47.51609420776373],[10.883132934570426,47.53810501098644],[10.772025108337402,47.516143798828125],[10.600060462951888,47.57365036010742],[10.561381340026912,47.53593063354498],[10.432245254516829,47.58555984497076],[10.471569061279524,47.43306350708008],[10.433580398559798,47.378719329833984],[10.170168876648177,47.26990127563522],[10.226869583130338,47.3929176330567],[10.095960617065373,47.3548698425293],[10.090755462646598,47.45659255981451],[9.997338294983138,47.48622512817394],[9.971186637878759,47.55048370361328],[9.87366962432867,47.53071975708008],[9.774218559265364,47.59680175781267],[9.688732147217138,47.543983459472656],[9.044014930725098,47.82368850708008],[9.221139907837028,47.66815185546875],[9.164094924927213,47.65358352661133],[8.99164009094244,47.747985839844034],[8.941365242004451,47.731822967529354],[9.006369590759277,47.69509124755882],[8.891834259033374,47.65522384643566],[8.808216094970987,47.74168014526367],[8.771158218383846,47.71976852416992],[8.79814815521263,47.67990875244152],[8.727890014648608,47.696842193603686],[8.730445861816634,47.766109466552734],[8.56799125671381,47.8143768310548],[8.404397964477653,47.680049896240405],[8.473678588867188,47.64335632324219],[8.607149124145621,47.675994873046875],[8.584686279296875,47.60031127929693],[8.520914077758846,47.63809585571306],[8.458548545837402,47.60595703125017],[8.488503456115836,47.581394195556754],[8.379540443420467,47.570251464843864],[8.202873229980526,47.62615585327154],[8.087834358215446,47.56288528442394],[7.944071769714355,47.549701690673885],[7.820772171020621,47.5946998596192],[7.669493198394889,47.53711700439453],[7.632383823394775,47.5624237060548],[7.670560836792106,47.59326171875006],[7.607770919799862,47.580959320068416],[7.512126922607479,47.696090698242244],[7.62215709686285,47.97365951538109],[7.568590164184684,48.0363388061524],[7.577859401702995,48.121391296386776],[7.745231628417969,48.32982635498047],[7.733546733856315,48.39868545532238],[7.835922718048039,48.63367462158203],[8.087015151977653,48.802013397217024],[8.22887897491455,48.97063064575218],[7.937040328979435,49.05623245239258],[7.635286331176815,49.05416870117199],[7.445586204528809,49.184024810791016],[7.293400287628174,49.115158081054744],[7.098150730133057,49.15433120727545],[7.05802440643356,49.112586975097656],[7.033706188201904,49.18826293945324],[6.924295425415494,49.223075866699276],[6.840444087982178,49.21423339843767],[6.834462642669791,49.15137863159214],[6.737987518310831,49.16456985473633],[6.53541898727417,49.434162139892635],[6.35482120513916,49.46498489379883],[6.363647937774658,49.57404708862322],[6.516485214233398,49.724178314208984],[6.528252124786377,49.808570861816406],[6.312281131744612,49.83549880981457],[6.098370075225944,50.05990982055687],[6.189638137817383,50.189464569091854],[6.170382022857893,50.23625564575207],[6.408339977264632,50.33306884765619],[6.33975791931158,50.37989425659174],[6.374671936035213,50.44594955444336],[6.330028057098446,50.49364471435558],[6.172194004059065,50.55051422119158],[6.278378963470516,50.61639785766596],[6.173087120056209,50.62143325805687],[6.118731975555477,50.708736419677905],[5.963199138641357,50.79505157470703],[6.0738401412965,50.846858978271484],[6.082940101623649,50.921798706054744],[6.015170097351074,50.93315887451172],[6.030001163482893,50.98336410522472],[5.903690814971924,50.978271484375284],[5.872058868408317,51.04341125488281],[5.969543933868522,51.034469604492415],[6.171799182891846,51.15293121337896],[6.144780158996809,51.17371749877941],[6.193139076233138,51.19166183471674],[6.091834068298397,51.175292968750284],[6.078186035156193,51.2447128295899],[6.231968879699764,51.36598205566412],[6.220355987548942,51.50917053222656],[6.090958118438778,51.605220794677734],[6.118769168853703,51.6604576110841],[5.964007854461727,51.74161148071289],[6.004777908325309,51.76816940307623],[5.964649200439453,51.824409484863395],[6.168982028961295,51.84503173828142],[6.107149124145565,51.88898849487299],[6.158889770507812,51.905384063720646],[6.417467117309798,51.82563400268566],[6.402299880981388,51.87480163574219],[6.742709159851131,51.89905166625988],[6.835361003875846,51.99552917480486],[6.698178768157959,52.040119171142805],[6.700688838958968,52.07379150390648],[7.069309234619254,52.23925399780296],[7.029718875884953,52.29431915283209],[7.07911586761486,52.38272476196295],[7.006279945373649,52.469501495361385],[6.950539112091064,52.43696975708002],[6.764862060546875,52.464931488037166],[6.683791160583496,52.55606460571312],[6.768260955810604,52.56516647338867],[6.724298000335807,52.59061050415045],[6.743810176849422,52.64709091186529],[7.051859855651912,52.63584899902344],[7.094276905059871,52.84645080566429],[7.26148796081543,52.997539520263615],[7.226968765258846,53.124462127685604],[7.284560203552189,53.19956970214872],[7.205277919769514,53.23880767822271],[7.249166965484562,53.32986068725586],[6.998610973358154,53.361251831054915],[7.034166812896729,53.53319549560558],[7.13361120223999,53.53236007690424],[7.09027719497675,53.57652664184576],[7.158053874969539,53.627918243408146],[7.316944122314794,53.683471679687614],[8.015831947326944,53.71069335937506],[8.172499656677246,53.554584503173885],[8.155276298523177,53.513748168945426],[8.06472206115734,53.50597381591797],[8.073611259460677,53.46486282348633],[8.252499580383244,53.399028778076115],[8.316389083862418,53.46625137329124],[8.316389083862418,53.5220832824707],[8.230832099914778,53.52041625976574],[8.271943092346419,53.609859466552734],[8.516389846801701,53.55625152587902],[8.556944847106877,53.52569580078131],[8.519721984863338,53.50097274780279],[8.570834159851074,53.51819610595703],[8.483611106872786,53.69430541992193],[8.608056068420467,53.87874984741228],[8.883610725402946,53.82791519165045],[9.09972286224371,53.86291503906256],[8.963610649109114,53.894584655761776],[8.819722175598258,54.02152633666998],[8.98250007629423,54.04652786254911],[8.927499771118164,54.131805419921875],[8.85916709899908,54.12263870239269],[8.807498931884709,54.173194885253906],[8.83583259582548,54.251804351806584],[8.951944351196516,54.31289291381836],[8.846387863159237,54.26291656494169],[8.580278396606559,54.30402755737316],[8.60416603088413,54.357917785644645],[8.685832023620605,54.35708236694347],[8.608610153198185,54.38624954223644],[8.893611907959212,54.41208267211914],[9.02361106872587,54.472637176513786],[8.989167213440396,54.519306182861385],[8.903610229492188,54.46069335937506],[8.806388854980526,54.47041702270508],[8.890276908874682,54.59263992309582],[8.813055992126749,54.597362518311],[8.822500228881836,54.64597320556675],[8.687498092651595,54.72986221313516],[8.590276718139762,54.885139465331974],[8.41638755798374,54.84708404541021],[8.310277938842887,54.874305725097656],[8.279722213745174,54.75180435180687],[8.298054695129508,54.909305572509766],[8.407297932191138,55.04395228653645]],[[12.645990473625632,54.40224791003495],[12.435832977295036,54.378749847412166],[12.363612174987793,54.26597213745117],[12.460276603699072,54.24847412109369],[12.409167289733887,54.27986145019537],[12.645990473625632,54.40224791003495]],[[9.941296802167107,54.63977103947349],[9.933056831359806,54.627639770507926],[9.859076590154903,54.5913954629662],[9.938055038452319,54.62347412109392],[9.941296802167107,54.63977103947349]],[[9.740505208965892,54.53330511971416],[9.7124996185305,54.519584655761946],[9.545277595520133,54.5093040466308],[9.574166297912711,54.475139617920036],[9.624165534973372,54.51152801513672],[9.714722633362271,54.49124908447277],[9.740505208965892,54.53330511971416]]],[[[13.94762775222483,54.063982999902095],[13.910832405090275,54.064304351806754],[13.862501144409407,53.99930572509771],[13.858055114746207,54.04847335815441],[13.7691659927371,54.01902770996128],[13.812499046325684,54.09902954101568],[13.749167442322118,54.159027099609716],[13.803610801696834,54.17847061157232],[13.870834350586051,54.10152816772478],[13.94762775222483,54.063982999902095]]],[[[8.411785232872631,55.04948306636195],[8.417499542236328,55.05652618408209],[8.463055610656681,55.04569625854492],[8.411785232872631,55.04948306636195]]],[[[13.406170966791661,54.596560494420075],[13.3702783584597,54.61458206176752],[13.243055343628384,54.55875015258789],[13.2830562591555,54.64625167846674],[13.160833358764933,54.55902862548828],[13.249724388122615,54.659862518310945],[13.42916679382347,54.68458175659174],[13.37583255767845,54.63513946533203],[13.406170966791661,54.596560494420075]]],[[[13.446298879365024,54.57641239394589],[13.679720878601302,54.56263732910156],[13.569721221924112,54.46180725097662],[13.76694393157959,54.34152603149454],[13.72527885437006,54.27347183227545],[13.646389007568416,54.296527862548885],[13.70416736602806,54.326248168945426],[13.610832214355753,54.31624984741222],[13.68305587768566,54.34930419921881],[13.58083438873291,54.35291671752947],[13.352499008178768,54.26958465576217],[13.41805553436285,54.25485992431646],[13.393610000610408,54.22097396850586],[13.290279388427791,54.25125122070318],[13.335277557373274,54.278194427490234],[13.139166831970158,54.2823600769043],[13.18472290039091,54.30097198486328],[13.114721298217717,54.331806182861555],[13.127499580383471,54.37125015258789],[13.261943817138842,54.38291549682657],[13.149722099304313,54.42902755737305],[13.26805686950695,54.47930526733427],[13.158611297607422,54.504028320312614],[13.143611907959041,54.54680633544922],[13.305277824402083,54.51402664184582],[13.29749870300293,54.55236053466797],[13.368612289428881,54.57930374145502],[13.338055610656681,54.54875183105469],[13.377498626709098,54.55902862548828],[13.413056373596476,54.49375152587885],[13.506387710571403,54.480972290039006],[13.501943588257006,54.548473358154695],[13.446298879365024,54.57641239394589]]],[[[13.184166908264217,54.49430465698282],[13.226943969726733,54.468750000000114],[13.120834350586222,54.44235992431646],[13.184166908264217,54.49430465698282]]],[[[13.125168920038526,54.58240134124839],[13.13638877868675,54.6051406860351],[13.158054351806868,54.57930374145502],[13.125168920038526,54.58240134124839]]],[[[11.069721221924055,54.53470230102539],[11.23416805267334,54.5068054199221],[11.31360912322998,54.402084350586335],[11.00916671752924,54.44124984741211],[11.069721221924055,54.53470230102539]]],[[[8.691945075988713,54.557083129882756],[8.671944618225154,54.49458312988281],[8.589166641235579,54.51180648803711],[8.691945075988713,54.557083129882756]]],[[[8.539723396301383,54.75569534301769],[8.595276832580623,54.71958160400385],[8.56694316864025,54.6798629760745],[8.396944999694881,54.70569610595703],[8.539723396301383,54.75569534301769]]],[[[8.551387786865234,54.57958221435541],[8.573056221008358,54.55875015258789],[8.50916671752941,54.57402801513683],[8.551387786865234,54.57958221435541]]],[[[8.476387977600098,54.47652816772461],[8.52583217620861,54.433471679687614],[8.470277786254883,54.42180633544933],[8.476387977600098,54.47652816772461]]],[[[8.483055114746321,54.58458328247116],[8.501387596130428,54.55819320678711],[8.455277442932186,54.55875015258789],[8.483055114746321,54.58458328247116]]],[[[8.356944084167594,54.71152877807617],[8.395278930664062,54.61208343505899],[8.292498588561955,54.66708374023466],[8.356944084167594,54.71152877807617]]],[[[7.895833015442065,53.79402923584007],[7.968054771423567,53.774860382080305],[7.846387863159464,53.78680419921881],[7.895833015442065,53.79402923584007]]],[[[7.706388950348241,53.77958297729492],[7.805832862854288,53.774581909179744],[7.666944026947249,53.7587509155274],[7.706388950348241,53.77958297729492]]],[[[7.573610782623518,53.757362365722656],[7.627499103546597,53.74847412109381],[7.467502117157153,53.727085113525504],[7.573610782623518,53.757362365722656]]],[[[7.394165992737044,53.73458480834961],[7.429722785949707,53.725139617920206],[7.360278129577864,53.72680664062494],[7.394165992737044,53.73458480834961]]],[[[7.058610916137638,53.68458175659197],[7.095833778381348,53.680694580078125],[6.854722023010595,53.66125106811535],[7.058610916137638,53.68458175659197]]],[[[6.761944770812988,53.61875152587896],[6.811388969421671,53.60263824462885],[6.721387863159407,53.583751678466854],[6.749722003937052,53.55680465698242],[6.630833148956526,53.59791564941406],[6.761944770812988,53.61875152587896]]]]}}]'), r2 = {
  type: n2,
  features: i2
}, s2 = { class: "pmap_container" }, o2 = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", a2 = 5, l2 = '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', u2 = /* @__PURE__ */ st({
  __name: "MapPreview",
  props: {
    config: {}
  },
  setup(o) {
    const i = [50.93115286, 11.60392726], n = pe(null), l = o, { config: d } = Sl(l), p = (_) => d.value;
    return ki(() => d, () => {
      n.value.leafletObject?.eachLayer((_) => {
        try {
          _.setStyle(p);
        } catch (v) {
          console.log(v);
        }
      });
    }, { deep: !0 }), (_, v) => (V(), ie("div", s2, [
      le(Oe(Bh), {
        id: "map",
        ref_key: "map",
        ref: n,
        center: i,
        "max-zoom": 21,
        zoom: a2,
        style: { height: "100%" }
      }, {
        default: Ae(() => [
          le(Oe(Uh), {
            attribution: l2,
            options: {
              maxNativeZoom: 19,
              maxZoom: 25
            },
            url: o2
          }),
          le(Oe(Fo), {
            geojson: Oe(r2),
            optionsStyle: p
          }, null, 8, ["geojson", "optionsStyle"])
        ]),
        _: 1
      }, 8, ["center"])
    ]));
  }
}), c2 = /* @__PURE__ */ mr(u2, [["__scopeId", "data-v-77cbf15c"]]), h2 = { class: "settings-container" }, d2 = /* @__PURE__ */ st({
  __name: "MapSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = _r(o, "modelValue"), n = pe({
      textSection: !0
    });
    return (l, d) => {
      const p = ut("va-checkbox"), _ = ut("va-color-input"), v = ut("va-input"), m = ut("va-slider"), E = ut("va-collapse");
      return V(), Ze(E, {
        modelValue: n.value.textSection,
        "onUpdate:modelValue": d[8] || (d[8] = (A) => n.value.textSection = A),
        header: "Style settings"
      }, {
        default: Ae(() => [
          ue("div", h2, [
            le(p, {
              modelValue: i.value.stroke,
              "onUpdate:modelValue": d[0] || (d[0] = (A) => i.value.stroke = A),
              label: "stroke"
            }, null, 8, ["modelValue"]),
            le(_, {
              modelValue: i.value.color,
              "onUpdate:modelValue": d[1] || (d[1] = (A) => i.value.color = A),
              label: "line Color"
            }, null, 8, ["modelValue"]),
            le(v, {
              modelValue: i.value.weight,
              "onUpdate:modelValue": d[2] || (d[2] = (A) => i.value.weight = A),
              label: "line size"
            }, null, 8, ["modelValue"]),
            le(m, {
              modelValue: i.value.opacity,
              "onUpdate:modelValue": d[3] || (d[3] = (A) => i.value.opacity = A),
              max: 1,
              min: 0,
              step: 0.01,
              class: "slider",
              label: "line opacity",
              "track-label-visible": "",
              weight: ""
            }, null, 8, ["modelValue"]),
            le(p, {
              modelValue: i.value.fill,
              "onUpdate:modelValue": d[4] || (d[4] = (A) => i.value.fill = A),
              label: "fill"
            }, null, 8, ["modelValue"]),
            le(m, {
              modelValue: i.value.fillOpacity,
              "onUpdate:modelValue": d[5] || (d[5] = (A) => i.value.fillOpacity = A),
              max: 1,
              min: 0,
              step: 0.01,
              class: "slider",
              label: "fill opacity",
              "track-label-visible": ""
            }, null, 8, ["modelValue"]),
            le(_, {
              modelValue: i.value.fillColor,
              "onUpdate:modelValue": d[6] || (d[6] = (A) => i.value.fillColor = A),
              label: "class name"
            }, null, 8, ["modelValue"]),
            le(v, {
              modelValue: i.value.className,
              "onUpdate:modelValue": d[7] || (d[7] = (A) => i.value.className = A),
              label: "class name"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), f2 = /* @__PURE__ */ mr(d2, [["__scopeId", "data-v-65a760a2"]]), p2 = { class: "flex flex-col md6 pa-3" }, _2 = { class: "flex flex-col md6 pa-3" }, P_ = /* @__PURE__ */ st({
  __name: "AreaStyler",
  props: {
    modelValue: {
      default: () => xo({
        stroke: !0,
        color: "#ccc",
        weight: 2,
        opacity: 1,
        lineCap: "None",
        dashOffset: 2,
        fill: !0,
        fillOpacity: 1,
        className: ""
      })
    },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = _r(o, "modelValue");
    return (n, l) => (V(), ie(Re, null, [
      ue("div", p2, [
        le(f2, {
          modelValue: i.value,
          "onUpdate:modelValue": l[0] || (l[0] = (d) => i.value = d)
        }, null, 8, ["modelValue"])
      ]),
      ue("div", _2, [
        le(c2, {
          ref: "MapPrev",
          config: i.value
        }, null, 8, ["config"])
      ])
    ], 64));
  }
});
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const g2 = () => {
};
function x_(o, i, n) {
  var l;
  let d;
  Ep(n) ? d = { evaluating: n } : d = n || {};
  const { lazy: p = !1, flush: _ = "sync", evaluating: v = void 0, shallow: m = !0, onError: E = (l = globalThis.reportError) !== null && l !== void 0 ? l : g2 } = d, A = Rf(!p), w = m ? Rf(i) : pe(i);
  let b = 0;
  return RE(async (N) => {
    if (!A.value) return;
    b++;
    const k = b;
    let G = !1;
    v && Promise.resolve().then(() => {
      v.value = !0;
    });
    try {
      const X = await o((x) => {
        N(() => {
          v && (v.value = !1), G || x();
        });
      });
      k === b && (w.value = X);
    } catch (X) {
      E(X);
    } finally {
      v && k === b && (v.value = !1), G = !0;
    }
  }, { flush: _ }), p ? Yn(() => (A.value = !0, w.value)) : w;
}
const m2 = /* @__PURE__ */ st({
  __name: "PlacementSytler",
  props: {
    modelValue: {
      default: () => xo({
        placement: Po.OberservedArea
      })
    },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = _r(o, "modelValue");
    return (n, l) => {
      const d = ut("VaOptionList");
      return V(), ie(Re, null, [
        ue("div", null, [
          l[1] || (l[1] = ue("label", {
            id: "input-label-240",
            "aria-hidden": "true",
            class: "va-input-label va-input-wrapper__label va-input-wrapper__label--outer",
            style: { color: "var(--va-primary)" }
          }, "render within ", -1)),
          le(d, {
            modelValue: i.value.placement,
            "onUpdate:modelValue": l[0] || (l[0] = (p) => i.value.placement = p),
            options: [Oe(Po).Thing, Oe(Po).OberservedArea],
            label: "render within",
            type: "radio"
          }, null, 8, ["modelValue", "options"])
        ]),
        l[2] || (l[2] = ue("div", null, null, -1))
      ], 64);
    };
  }
}), v2 = { class: "auto-update-settings" }, y2 = { class: "refresh-setting" }, E2 = { class: "refresh-info" }, T2 = { class: "info-item" }, w2 = { class: "value" }, S2 = {
  key: 0,
  class: "info-item"
}, A2 = { class: "value" }, C2 = /* @__PURE__ */ st({
  __name: "AutoUpdateSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = _r(o, "modelValue");
    let n = null;
    const l = (_) => {
      n && clearTimeout(n), n = setTimeout(() => {
        i.value.ObservationrefreshTime = _;
      }, 300);
    }, d = (_) => _ === 0 ? "Never" : `${_}s`, p = (_) => new Date(_).toLocaleString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    return (_, v) => {
      const m = ut("va-slider");
      return V(), ie("div", v2, [
        v[3] || (v[3] = ue("h3", null, "Auto-update Configuration", -1)),
        ue("div", y2, [
          ue("label", null, "Observation Refresh Time: " + yt(d(i.value.ObservationrefreshTime || 0)), 1),
          le(m, {
            "model-value": i.value.ObservationrefreshTime || 0,
            "onUpdate:modelValue": l,
            min: 0,
            max: 30,
            step: 1,
            "show-ticks": !0,
            color: "primary",
            class: "refresh-slider"
          }, null, 8, ["model-value"]),
          v[0] || (v[0] = ue("div", { class: "slider-labels" }, [
            ue("span", null, "Never"),
            ue("span", null, "1s"),
            ue("span", null, "15s"),
            ue("span", null, "30s")
          ], -1))
        ]),
        ue("div", E2, [
          ue("div", T2, [
            v[1] || (v[1] = ue("span", { class: "label" }, "Current Setting:", -1)),
            ue("span", w2, yt(d(i.value.ObservationrefreshTime || 0)), 1)
          ]),
          i.value.lastUpdate ? (V(), ie("div", S2, [
            v[2] || (v[2] = ue("span", { class: "label" }, "Last Update:", -1)),
            ue("span", A2, yt(p(i.value.lastUpdate)), 1)
          ])) : Ge("", !0)
        ])
      ]);
    };
  }
}), b2 = /* @__PURE__ */ mr(C2, [["__scopeId", "data-v-bf0c06f4"]]), O2 = { class: "tree_detail" }, L2 = { class: "tree" }, I2 = { class: "menu" }, N2 = { class: "menuitem" }, D2 = { class: "checked" }, R2 = ["onClick"], P2 = ["onClick"], x2 = { class: "icon" }, F2 = { class: "text" }, M2 = ["onUpdate:modelValue", "onBlur"], B2 = ["onClick"], G2 = { class: "options" }, k2 = {
  key: 0,
  class: "childs"
}, U2 = ["onClick"], V2 = { class: "icon" }, z2 = { class: "text" }, W2 = ["onUpdate:modelValue", "onBlur"], Z2 = ["onClick"], H2 = { class: "options" }, Y2 = {
  key: 0,
  class: "childs"
}, q2 = ["onClick"], K2 = { class: "icon" }, $2 = { class: "text" }, J2 = { class: "options" }, j2 = { class: "detail" }, X2 = {
  key: 0,
  class: "content"
}, Q2 = {
  key: 0,
  class: "full"
}, eS = {
  key: 0,
  class: "rowlayout"
}, tS = {
  key: 1,
  class: "full rowlayout"
}, nS = {
  key: 2,
  class: "full"
}, iS = {
  key: 3,
  class: "full"
}, rS = {
  key: 1,
  class: "content center"
}, sS = { style: { display: "flex", "justify-content": "flex-end", padding: "8px" } }, oS = { style: { padding: "10px" } }, aS = { style: { margin: "10px 0", "padding-left": "20px" } }, lS = { style: { padding: "20px" } }, uS = { style: { display: "flex", "flex-direction": "column", gap: "10px" } }, cS = { style: { "text-align": "left" } }, hS = { style: { "font-weight": "bold" } }, dS = { style: { "font-size": "0.85em", opacity: "0.7" } }, fS = /* @__PURE__ */ st({
  __name: "RendererModal",
  props: /* @__PURE__ */ Rh({
    services: {},
    allLayers: {}
  }, {
    modelValue: {
      default: () => xo(
        []
      )
    },
    modelModifiers: {},
    show: { type: Boolean, default: () => !1 },
    showModifiers: {},
    layer: { default: () => {
    } },
    layerModifiers: {}
  }),
  emits: ["update:modelValue", "update:show", "update:layer"],
  setup(o) {
    const i = _r(o, "modelValue"), n = _r(o, "show"), l = _r(o, "layer"), d = o, { services: p, allLayers: _ } = Sl(d);
    pe([]);
    const v = pe(0), m = pe(void 0), E = pe(!1), A = pe(null), w = pe([]), b = pe(!1), N = pe(null), { getAll: k, getById: G } = ul(), X = (te) => _?.value ? _.value.filter(
      (Z) => Z.styleIds?.includes(te)
    ) : [], x = (te) => {
      const Z = X(te.id);
      Z.length > 0 ? (A.value = te, w.value = Z, E.value = !0) : z(te);
    }, z = (te) => {
      w.value.forEach((j) => {
        const U = j.styleIds?.indexOf(te.id);
        U !== void 0 && U !== -1 && j.styleIds?.splice(U, 1);
      });
      const Z = i.value.indexOf(te);
      Z !== -1 && (i.value.splice(Z, 1), m.value?.id === te.id && (m.value = void 0)), E.value = !1, A.value = null, w.value = [];
    }, Y = () => {
      E.value = !1, A.value = null, w.value = [];
    }, R = () => {
      l.value?.type == "OGCSTA" ? i.value.push({
        name: "new Style",
        thing: [
          {
            prop: "name",
            comperator: Rr.equals,
            value: "example"
          }
        ],
        renderer: {
          point_render_as: "icon",
          point_prop: "name",
          // A modelled type, so built rather than written as a literal
          point: Object.assign(new $e(), {
            currentIcon: "add_location_alt",
            iconColor: "#545050",
            iconSize: 48,
            isIconFilled: !1,
            strokeWeight: 2,
            opticSize: 24,
            grade: 1
          }),
          pointPin: {
            color: "#ccc"
          },
          area: {
            stroke: !0,
            color: "#ccc",
            weight: 2,
            opacity: 1,
            lineCap: "None",
            dashOffset: "2",
            fill: !0,
            fillOpacity: 1,
            className: ""
          }
        },
        ds_renderer: [],
        id: Hr()
      }) : i.value.push({
        name: "new Style",
        datastream: [
          {
            prop: "name",
            comperator: Rr.equals,
            value: "*"
          }
        ],
        placement: Po.Thing,
        renderer: {
          point_render_as: "icon",
          point_prop: "name",
          // A modelled type, so built rather than written as a literal
          point: Object.assign(new $e(), {
            currentIcon: "add_location_alt",
            iconColor: "#545050",
            iconSize: 48,
            isIconFilled: !1,
            strokeWeight: 2,
            opticSize: 24,
            grade: 1
          }),
          pointPin: {
            color: "#ccc"
          },
          area: {
            stroke: !0,
            color: "#ccc",
            weight: 2,
            opacity: 1,
            lineCap: "None",
            dashOffset: "2",
            fill: !0,
            fillOpacity: 1,
            className: ""
          }
        },
        id: Hr()
      });
    }, q = () => {
      m.value.ds_renderer.push({
        name: "new DS Style",
        datastream: [
          {
            prop: "name",
            comperator: Rr.equals,
            value: "*"
          }
        ],
        placement: Po.Thing,
        renderer: {
          point_render_as: "icon",
          point_prop: "name",
          point: {
            currentIcon: "add_location_alt",
            iconColor: "#545050",
            iconSize: 48,
            isIconFilled: !1,
            strokeWeight: 2,
            opticSize: 24,
            grade: 1
          },
          pointPin: {
            color: "#ccc"
          },
          area: {
            stroke: !0,
            color: "#ccc",
            weight: 2,
            opacity: 1,
            lineCap: "None",
            dashOffset: "2",
            fill: !0,
            fillOpacity: 1,
            className: ""
          }
        },
        observations: [],
        id: Hr()
      });
    }, ce = (te) => {
      N.value = te, b.value = !0;
    }, we = (te) => {
      if (!N.value) return;
      const Z = G(te), j = {
        component: te
      };
      Z?.isLayerRenderer ? j.setting = {
        conditions: [],
        renderer: {
          point_render_as: "icon",
          point_prop: "name",
          // A modelled type, so built rather than written as a literal
          point: Object.assign(new $e(), {
            currentIcon: "add_location_alt",
            iconColor: "#545050",
            iconSize: 48,
            isIconFilled: !1,
            strokeWeight: 2,
            opticSize: 24,
            grade: 1
          }),
          pointPin: {
            color: "#ccc"
          },
          area: {
            stroke: !0,
            color: "#3388ff",
            weight: 3,
            opacity: 1,
            lineCap: "None",
            dashOffset: "2",
            fill: !0,
            fillOpacity: 0.2,
            fillColor: "#3388ff",
            className: ""
          }
        }
      } : j.setting = {}, N.value.observations || (N.value.observations = []), N.value.observations.push(j), b.value = !1, N.value = null;
    }, Le = x_(async () => {
      const te = l.value;
      if (!te) return [];
      if (te.type == "WFSLayer")
        try {
          const j = await p.value.find((U) => U.id == te.service)?.service?.getFeatureTypePropDetails(te.name ?? "");
          return console.log(j), Object.entries(j).map(
            (U) => ({ text: U[0], selector: U[0], suggestions: U[1].uniqueValues.map((se) => se.value) })
          );
        } catch (Z) {
          return console.log(Z), [];
        }
      else if (te.type == "GEOJSON" && te.geoJson)
        try {
          const Z = te.geoJson;
          if (!Z?.features || Z.features.length === 0)
            return [];
          const j = /* @__PURE__ */ new Map();
          for (const U of Z.features)
            if (U.properties)
              for (const [se, ge] of Object.entries(U.properties))
                j.has(se) || j.set(se, /* @__PURE__ */ new Set()), j.get(se)?.add(ge);
          return Array.from(j.entries()).map(([U, se]) => ({
            text: U,
            selector: U,
            suggestions: Array.from(se)
          }));
        } catch (Z) {
          return console.log(Z), [];
        }
      else
        return [];
    }, []);
    return ki(n, (te) => {
      te && (m.value = void 0);
    }), ki(m, () => {
      v.value = 0;
    }), (te, Z) => {
      const j = ut("VaIcon"), U = ut("va-divider"), se = ut("VaBadge"), ge = ut("VaValue"), Je = ut("VaButton"), De = ut("VaTab"), Pe = ut("VaTabs"), _e = ut("VaScrollContainer"), St = ut("VaModal");
      return V(), ie(Re, null, [
        le(St, {
          modelValue: n.value,
          "onUpdate:modelValue": Z[10] || (Z[10] = (J) => n.value = J),
          "hide-default-actions": "",
          maxWidth: "1200px",
          "overlay-opacity": "0.2"
        }, {
          footer: Ae(() => [
            ue("div", sS, [
              le(Je, {
                onClick: Z[9] || (Z[9] = (J) => n.value = !1)
              }, {
                default: Ae(() => [...Z[24] || (Z[24] = [
                  Rt("Close", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: Ae(() => [
            ue("div", O2, [
              ue("div", L2, [
                ue("div", I2, [
                  ue("div", N2, [
                    ue("div", D2, [
                      le(j, {
                        class: "material-icons",
                        onClick: R
                      }, {
                        default: Ae(() => [...Z[14] || (Z[14] = [
                          Rt(" add ", -1)
                        ])]),
                        _: 1
                      })
                    ])
                  ]),
                  le(U),
                  (V(!0), ie(Re, null, Yt(i.value, (J) => (V(), ie("div", {
                    key: J.id
                  }, [
                    ue("div", {
                      class: as([{ active: J.id == m.value?.id }, "menuitem"]),
                      onClick: (de) => m.value = J
                    }, [
                      ue("div", {
                        class: "checked",
                        onClick: () => {
                          const de = l.value?.styleIds?.indexOf(J.id);
                          de != -1 ? l.value?.styleIds?.splice(de, 1) : l.value?.styleIds?.push(J.id);
                        }
                      }, [
                        le(j, {
                          color: l.value?.styleIds?.includes(J.id) ? "primary" : "#eeeeee",
                          class: "material-icons"
                        }, {
                          default: Ae(() => [...Z[15] || (Z[15] = [
                            Rt(" checked ", -1)
                          ])]),
                          _: 1
                        }, 8, ["color"])
                      ], 8, P2),
                      ue("div", x2, [
                        le(se, {
                          offset: [5, 14],
                          class: "mr-6",
                          color: "#efefef",
                          overlap: "",
                          style: { "--va-badge-text-wrapper-border-radius": "50%" },
                          text: "Th"
                        }, {
                          default: Ae(() => [
                            le(j, { class: "material-icons" }, {
                              default: Ae(() => [...Z[16] || (Z[16] = [
                                Rt(" style ", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      ue("div", F2, [
                        le(ge, null, {
                          default: Ae((de) => [
                            de.value ? Pf((V(), ie("input", {
                              key: 0,
                              "onUpdate:modelValue": (He) => J.name = He,
                              class: "item__input",
                              style: { width: "100%" },
                              onBlur: (He) => de.value = !1
                            }, null, 40, M2)), [
                              [xf, J.name]
                            ]) : (V(), ie("span", {
                              key: 1,
                              onClick: (He) => de.value = !0
                            }, yt(J.name), 9, B2))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      ue("div", G2, [
                        l.value?.type == "OGCSTA" && J?.thing ? (V(), Ze(Je, {
                          key: 0,
                          icon: "add",
                          preset: "secondary",
                          round: "",
                          onClick: q
                        })) : Ge("", !0),
                        le(Je, {
                          icon: "delete",
                          preset: "secondary",
                          round: "",
                          onClick: (de) => x(J)
                        }, null, 8, ["onClick"])
                      ])
                    ], 10, R2),
                    J?.thing ? (V(), ie("div", k2, [
                      (V(!0), ie(Re, null, Yt(J?.ds_renderer, (de) => (V(), ie("div", {
                        key: de.id,
                        class: as([{ active: de.id == m.value?.id }, "menuitem"]),
                        onClick: (He) => m.value = de
                      }, [
                        Z[18] || (Z[18] = ue("div", null, null, -1)),
                        ue("div", V2, [
                          le(se, {
                            offset: [5, 14],
                            class: "mr-6",
                            color: "#efefef",
                            overlap: "",
                            style: { "--va-badge-text-wrapper-border-radius": "50%" },
                            text: "DS"
                          }, {
                            default: Ae(() => [
                              le(j, { class: "material-icons" }, {
                                default: Ae(() => [...Z[17] || (Z[17] = [
                                  Rt(" settings ", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        ue("div", z2, [
                          le(ge, null, {
                            default: Ae((He) => [
                              He.value ? Pf((V(), ie("input", {
                                key: 0,
                                "onUpdate:modelValue": (gt) => de.name = gt,
                                class: "item__input",
                                style: { width: "100%" },
                                onBlur: (gt) => He.value = !1
                              }, null, 40, W2)), [
                                [xf, de.name]
                              ]) : (V(), ie("span", {
                                key: 1,
                                onClick: (gt) => He.value = !0
                              }, yt(de.name), 9, Z2))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        ue("div", H2, [
                          le(Je, {
                            icon: "add",
                            preset: "secondary",
                            round: "",
                            onClick: (He) => ce(de)
                          }, null, 8, ["onClick"]),
                          le(Je, {
                            icon: "delete",
                            preset: "secondary",
                            round: "",
                            onClick: () => {
                              const He = J, gt = He.ds_renderer.indexOf(de);
                              gt !== -1 && (He.ds_renderer.splice(gt, 1), m.value?.id === de.id && (m.value = void 0));
                            }
                          }, null, 8, ["onClick"])
                        ])
                      ], 10, U2))), 128)),
                      (V(!0), ie(Re, null, Yt(J?.ds_renderer, (de) => (V(), ie(Re, {
                        key: "obs-parent-" + de.id
                      }, [
                        de.observations && de.observations.length > 0 ? (V(), ie("div", Y2, [
                          (V(!0), ie(Re, null, Yt(de.observations, (He, gt) => (V(), ie("div", {
                            key: "obs-" + de.id + "-" + gt,
                            class: as([{ active: He === m.value }, "menuitem"]),
                            onClick: (re) => m.value = He
                          }, [
                            Z[20] || (Z[20] = ue("div", null, null, -1)),
                            ue("div", K2, [
                              le(se, {
                                offset: [5, 14],
                                class: "mr-6",
                                color: "#efefef",
                                overlap: "",
                                style: { "--va-badge-text-wrapper-border-radius": "50%" },
                                text: "Obs"
                              }, {
                                default: Ae(() => [
                                  le(j, { class: "material-icons" }, {
                                    default: Ae(() => [...Z[19] || (Z[19] = [
                                      Rt(" visibility ", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            ue("div", $2, yt(He.component || "Observation"), 1),
                            ue("div", J2, [
                              le(Je, {
                                icon: "delete",
                                preset: "secondary",
                                round: "",
                                onClick: () => {
                                  if (!de.observations) return;
                                  const re = de.observations.indexOf(He);
                                  re !== -1 && (de.observations.splice(re, 1), m.value === He && (m.value = void 0));
                                }
                              }, null, 8, ["onClick"])
                            ])
                          ], 10, q2))), 128))
                        ])) : Ge("", !0)
                      ], 64))), 128))
                    ])) : Ge("", !0)
                  ]))), 128))
                ])
              ]),
              ue("div", j2, [
                le(Pe, {
                  modelValue: v.value,
                  "onUpdate:modelValue": Z[0] || (Z[0] = (J) => v.value = J)
                }, {
                  tabs: Ae(() => [
                    l.value?.type == "OGCSTA" ? (V(), ie(Re, { key: 0 }, [
                      m.value?.thing ? (V(), ie(Re, { key: 0 }, Yt(["Conditions", "Points", "Areas", "Auto-update"], (J) => le(De, { key: J }, {
                        default: Ae(() => [
                          Rt(yt(J), 1)
                        ]),
                        _: 2
                      }, 1024)), 64)) : m.value?.component && !m.value?.datastream ? (V(), Ze(De, { key: 1 }, {
                        default: Ae(() => [...Z[21] || (Z[21] = [
                          Rt("Settings", -1)
                        ])]),
                        _: 1
                      })) : l.value?.type == "OGCSTA" ? (V(), ie(Re, { key: 2 }, Yt(["Conditions", "Points", "Areas", "Placement"], (J) => le(De, { key: J }, {
                        default: Ae(() => [
                          Rt(yt(J), 1)
                        ]),
                        _: 2
                      }, 1024)), 64)) : (V(), ie(Re, { key: 3 }, Yt(["Conditions", "Points", "Areas"], (J) => le(De, { key: J }, {
                        default: Ae(() => [
                          Rt(yt(J), 1)
                        ]),
                        _: 2
                      }, 1024)), 64))
                    ], 64)) : (V(), ie(Re, { key: 1 }, Yt(["Conditions", "Points", "Areas"], (J) => le(De, { key: J }, {
                      default: Ae(() => [
                        Rt(yt(J), 1)
                      ]),
                      _: 2
                    }, 1024)), 64))
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                m.value ? (V(), ie("div", X2, [
                  le(_e, {
                    class: "scroller",
                    vertical: ""
                  }, {
                    default: Ae(() => [
                      m.value?.component && !m.value?.datastream ? (V(), ie("div", Q2, [
                        Oe(G)(m.value.component)?.setupComponent ? (V(), Ze(Sh(Oe(G)(m.value.component)?.setupComponent), {
                          key: 0,
                          modelValue: m.value.setting,
                          "onUpdate:modelValue": Z[1] || (Z[1] = (J) => m.value.setting = J)
                        }, null, 8, ["modelValue"])) : Ge("", !0)
                      ])) : (V(), ie(Re, { key: 1 }, [
                        v.value == 1 || v.value == 2 ? (V(), ie("div", eS, [
                          v.value == 1 ? (V(), Ze(R_, {
                            key: 0,
                            modelValue: m.value.renderer,
                            "onUpdate:modelValue": Z[2] || (Z[2] = (J) => m.value.renderer = J)
                          }, null, 8, ["modelValue"])) : Ge("", !0),
                          v.value == 2 ? (V(), Ze(P_, {
                            key: 1,
                            modelValue: m.value.renderer.area,
                            "onUpdate:modelValue": Z[3] || (Z[3] = (J) => m.value.renderer.area = J)
                          }, null, 8, ["modelValue"])) : Ge("", !0)
                        ])) : Ge("", !0),
                        v.value == 3 && l.value?.type == "OGCSTA" && !m.value.thing ? (V(), ie("div", tS, [
                          le(m2, {
                            modelValue: m.value,
                            "onUpdate:modelValue": Z[4] || (Z[4] = (J) => m.value = J)
                          }, null, 8, ["modelValue"])
                        ])) : v.value == 3 && l.value?.type == "OGCSTA" && m.value.thing ? (V(), ie("div", nS, [
                          le(b2, {
                            modelValue: m.value,
                            "onUpdate:modelValue": Z[5] || (Z[5] = (J) => m.value = J)
                          }, null, 8, ["modelValue"])
                        ])) : (V(), ie("div", iS, [
                          l.value?.type == "OGCSTA" && m.value.thing ? (V(), ie(Re, { key: 0 }, [
                            v.value == 0 ? (V(), Ze(Dh, {
                              key: 0,
                              modelValue: m.value.thing,
                              "onUpdate:modelValue": Z[6] || (Z[6] = (J) => m.value.thing = J)
                            }, null, 8, ["modelValue"])) : Ge("", !0)
                          ], 64)) : (V(), ie(Re, { key: 1 }, [
                            v.value == 0 ? (V(), Ze(Dh, {
                              key: 0,
                              modelValue: m.value.datastream,
                              "onUpdate:modelValue": Z[7] || (Z[7] = (J) => m.value.datastream = J),
                              "thing-props": Oe(Le),
                              "onUpdate:thingProps": Z[8] || (Z[8] = (J) => Ep(Le) ? Le.value = J : null)
                            }, null, 8, ["modelValue", "thing-props"])) : Ge("", !0)
                          ], 64))
                        ]))
                      ], 64))
                    ]),
                    _: 1
                  })
                ])) : (V(), ie("div", rS, [
                  le(j, {
                    size: 74,
                    class: "material-icons"
                  }, {
                    default: Ae(() => [...Z[22] || (Z[22] = [
                      Rt(" style ", -1)
                    ])]),
                    _: 1
                  }),
                  ue("span", null, [
                    ue("span", {
                      class: "underline blue",
                      onClick: R
                    }, "create"),
                    Z[23] || (Z[23] = Rt(" or select Sytle to edit", -1))
                  ])
                ]))
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        le(St, {
          modelValue: E.value,
          "onUpdate:modelValue": Z[11] || (Z[11] = (J) => E.value = J),
          title: "Delete Style",
          size: "small",
          "ok-text": "Delete",
          "cancel-text": "Cancel",
          onOk: Z[12] || (Z[12] = (J) => z(A.value)),
          onCancel: Y
        }, {
          default: Ae(() => [
            ue("div", oS, [
              ue("p", null, [
                Z[25] || (Z[25] = ue("strong", null, "Warning:", -1)),
                Rt(' This style "' + yt(A.value?.name) + '" is used by ' + yt(w.value.length) + " layer(s):", 1)
              ]),
              ue("ul", aS, [
                (V(!0), ie(Re, null, Yt(w.value, (J, de) => (V(), ie("li", { key: de }, yt(J.name || J.title || "Unnamed Layer"), 1))), 128))
              ]),
              Z[26] || (Z[26] = ue("p", null, "If you delete this style, it will be removed from all these layers.", -1)),
              Z[27] || (Z[27] = ue("p", null, [
                ue("strong", null, "Do you want to continue?")
              ], -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        le(St, {
          modelValue: b.value,
          "onUpdate:modelValue": Z[13] || (Z[13] = (J) => b.value = J),
          title: "Select Observation Renderer Type",
          size: "medium",
          "hide-default-actions": ""
        }, {
          default: Ae(() => [
            ue("div", lS, [
              Z[28] || (Z[28] = ue("p", { style: { "margin-bottom": "15px" } }, "Choose which type of renderer to use for observations:", -1)),
              ue("div", uS, [
                (V(!0), ie(Re, null, Yt(Oe(k)(), ([J, de]) => (V(), Ze(Je, {
                  key: J,
                  onClick: (He) => we(J),
                  style: { "justify-content": "flex-start" }
                }, {
                  default: Ae(() => [
                    ue("div", cS, [
                      ue("div", hS, yt(de.name), 1),
                      ue("div", dS, yt(de.description), 1)
                    ])
                  ]),
                  _: 2
                }, 1032, ["onClick"]))), 128))
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), pS = /* @__PURE__ */ mr(fS, [["__scopeId", "data-v-c5967ed8"]]), _S = { class: "va-modal__message" }, gS = { class: "m-0" }, mS = { class: "settings-container" }, vS = { key: 0 }, yS = { key: 1 }, ES = { style: { "margin-top": "10px", "font-size": "12px", color: "#666" } }, TS = { class: "va-modal__message" }, wS = {
  class: "va-h3",
  style: { color: "#ff6b6b", display: "flex", "align-items": "center", gap: "8px" }
}, SS = { style: { "margin-top": "16px", color: "#333" } }, AS = {
  key: 0,
  class: "empty"
}, CS = { class: "list-group-item" }, bS = { class: "row dragIcon" }, OS = {
  key: 3,
  style: { color: "#ff6b6b", "font-size": "0.85em", "margin-left": "8px" }
}, LS = { class: "row nhidden options" }, IS = ["id"], NS = { style: { "min-width": "150px" } }, DS = { key: 0 }, RS = {
  id: "header-va-4",
  "aria-controls": "panel-va-4",
  "aria-disabled": "false",
  "aria-expanded": "false",
  class: "va-collapse__header",
  role: "button",
  style: { color: "currentcolor" },
  tabindex: "0"
}, PS = {
  key: 0,
  class: "empty"
}, xS = { key: 2 }, FS = { key: 3 }, MS = ["onClick"], BS = {
  id: "header-va-4",
  "aria-controls": "panel-va-4",
  "aria-disabled": "false",
  "aria-expanded": "false",
  class: "va-collapse__header",
  role: "button",
  style: { color: "currentcolor" },
  tabindex: "0"
}, GS = { class: "settings-container" }, kS = /* @__PURE__ */ st({
  __name: "MapsWidgetSettings",
  props: /* @__PURE__ */ Rh({
    dataSources: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(o) {
    PE();
    const i = o, n = pe({
      widgetSectionLayer: !0,
      widgetSection: !1,
      widgetServiceSection: !0,
      storeSection: !1,
      widgetMapSection: !1
    }), l = _r(o, "modelValue"), d = pe(!1), p = pe(!1), _ = pe(!1), v = pe(""), m = u_(), E = pe(!1), A = pe([]);
    ki(A, (j) => {
      kn("Selected nodes changed:", j);
    });
    const w = Yn(() => ({
      group: "description",
      disabled: !1,
      ghostClass: "ghost"
    })), b = pe(""), N = async () => {
      console.log("addService called with URL:", b.value), p.value = !0;
      let j = null, U = null, se = !1;
      try {
        console.log("Trying WMS...");
        const ge = await m.createServiceWMS(b.value);
        console.log("WMS result:", ge), ge && (l.value.services.push({
          service: ge,
          url: b.value,
          type: "WMS",
          id: Hr()
        }), se = !0);
      } catch (ge) {
        console.log("WMS error:", ge), j = ge;
      }
      try {
        console.log("Trying WFS...");
        const ge = await m.createServiceWFS(b.value);
        console.log("WFS result:", ge), ge && (l.value.services.push({
          service: ge,
          url: b.value,
          type: "WFS",
          id: Hr()
        }), se = !0);
      } catch (ge) {
        console.log("WFS error:", ge), U = ge;
      }
      if (se)
        d.value = !1, b.value = "";
      else {
        const ge = j || U;
        v.value = ge?.message || "Failed to load service. The URL is not a valid WMS or WFS service.", _.value = !0;
      }
      p.value = !1;
    }, k = (j, U) => {
      const se = [];
      return j && j.forEach((ge) => {
        se.push({
          id: Hr(),
          opacity: 1,
          service: U,
          type: "WMSLayer",
          name: ge.name,
          title: ge.title,
          attribution: ge.attribution,
          childs: k(ge.children, U)
        });
      }), se;
    }, G = pe(/* @__PURE__ */ new Map()), X = x_(async () => {
      kn("Computing services async");
      const j = [];
      for (let se of l.value.services) {
        if (kn("Service:", se), !!se.reconstructionFailed) {
          kn("Service failed reconstruction:", se.url), j.push({
            service: { _info: { title: `${se.url} (failed)`, name: se.url } },
            type: se.type,
            level: 0,
            childs: [],
            failed: !0
          });
          continue;
        }
        if (se.type == "WFS")
          kn("Processing WFS service"), se.service && typeof se.service.getFeatureTypes == "function" ? j.push({
            service: se.service,
            type: "WFS",
            level: 0,
            childs: se.service.getFeatureTypes().map(
              (Je) => ({
                id: Hr(),
                opacity: 1,
                service: se.id,
                wfs_service: new D_(se.service.getFeatureUrl(Je.name, { outputCrs: "EPSG:4326", asJson: !0, maxFeatures: 100 })),
                geoJson: {},
                type: "WFSLayer",
                name: Je.name,
                title: Je.title,
                attribution: ""
              })
            )
          }) : kn("WFS service missing getFeatureTypes method");
        else if (kn("Processing WMS service"), console.log("[MapsWidgetSettings] WMS service object:", se), console.log("[MapsWidgetSettings] service.service:", se.service), console.log("[MapsWidgetSettings] service.service._info:", se.service?._info), console.log("[MapsWidgetSettings] getLayers type:", typeof se.service?.getLayers), se.service && typeof se.service.getLayers == "function") {
          const Je = se.service.getLayers();
          console.log("[MapsWidgetSettings] WMS layers:", Je), j.push({
            service: se.service,
            type: "WMS",
            childs: k(Je, se.service),
            level: 0
          }), kn("WMS service added to tree"), console.log("[MapsWidgetSettings] ret after adding WMS:", JSON.parse(JSON.stringify(j)));
        } else
          kn("WMS service missing getLayers method");
      }
      const U = [l.value.datasourceId, ...l.value.datasourceIds].filter(Boolean);
      for (const se of U) {
        if (!se) continue;
        const ge = Ot(Os);
        try {
          const Je = ge.getDatasource(se);
          Nr("Datasource type:", ge.getDatasourceType(se));
          const De = ge.getDatasourceType(se);
          if (!G.value.has(se)) {
            let _e;
            De == "OGC Composer" ? _e = {
              id: Hr(),
              opacity: 1,
              service: Je,
              geoJson: {},
              type: "GEOJSON",
              name: "GEOJSON",
              title: "GEOJSON",
              attribution: "",
              datasourceId: se
            } : De == "valhalla" ? _e = {
              id: Hr(),
              opacity: 1,
              service: Je,
              geoJson: {},
              type: "ROUTE",
              name: "Route",
              title: "Valhalla Route",
              attribution: "",
              datasourceId: se
            } : De == "rest" ? _e = {
              id: Hr(),
              opacity: 1,
              service: Je,
              geoJson: {},
              type: "REST-GEOJSON",
              name: "REST-GEOJSON",
              title: "REST GeoJSON",
              attribution: "",
              datasourceId: se
            } : _e = {
              id: Hr(),
              opacity: 1,
              service: Je,
              geoJson: {},
              type: "OGCSTA",
              name: "OGCSTA",
              title: "OGCSTA",
              attribution: "",
              datasourceId: se
            }, G.value.set(se, _e);
          }
          const Pe = G.value.get(se);
          De == "OGC Composer" ? j.push({
            service: { _info: { title: se + "[Composer]", name: se } },
            type: "GEOJSON",
            level: 0,
            childs: [Pe]
          }) : De == "valhalla" ? j.push({
            service: { _info: { title: se + "[Valhalla Route]", name: se } },
            type: "ROUTE",
            level: 0,
            childs: [Pe]
          }) : De == "rest" ? j.push({
            service: { _info: { title: se + "[REST]", name: se } },
            type: "REST-GEOJSON",
            level: 0,
            childs: [Pe]
          }) : j.push({
            service: { _info: { title: se + "[OGCSTA]", name: se } },
            type: "OGCSTA",
            childs: [Pe],
            level: 0
          });
        } catch {
          Nr("Service not supported for datasource:", se);
        }
      }
      return console.log("[MapsWidgetSettings] Final services array:", j), console.log("[MapsWidgetSettings] Final services length:", j.length), j;
    });
    pe(0.5);
    const x = pe(!1), z = async (j) => {
      const U = { ...j, checked: !0, styleIds: [] };
      if (U.type == "WFSLayer") {
        const se = await U.wfs_service.fetch();
        kn("WFS data fetched:", se);
      }
      l.value.layers.push(U);
    }, Y = (j) => {
      const U = l.value.layers.indexOf(j);
      U > -1 && l.value.layers.splice(U, 1);
    }, R = pe(void 0), q = Yn(() => R.value?.type == "OGCSTA" ? l.value.OGCSstyles : l.value.styles), ce = pe("wms_wfs"), we = pe(""), Le = Yn(() => i.dataSources ? i.dataSources.filter((j) => j.type === "ogcsta" || j.type === "OGC Composer" || j.type === "rest" || j.type === "valhalla").map((j) => ({
      text: `${j.name} (${j.type})`,
      value: j.uid
    })) : []), te = () => {
      we.value && !l.value.datasourceIds.includes(we.value) && (l.value.datasourceIds.push(we.value), we.value = "", d.value = !1);
    }, Z = (j) => {
      const U = l.value.datasourceIds.indexOf(j);
      U > -1 && (l.value.datasourceIds.splice(U, 1), G.value.delete(j));
    };
    return (j, U) => {
      const se = ut("VaRadio"), ge = ut("va-input"), Je = ut("VaSelect"), De = ut("VaModal"), Pe = ut("VaIcon"), _e = ut("VaSlider"), St = ut("VaButton"), J = ut("va-collapse"), de = ut("VaTreeView"), He = ut("va-checkbox"), gt = ut("va-color-input");
      return V(), ie(Re, null, [
        le(De, {
          modelValue: d.value,
          "onUpdate:modelValue": U[5] || (U[5] = (re) => d.value = re),
          "ok-text": ce.value === "wms_wfs" ? "Add" : "Add Datasource",
          size: "small",
          onOk: U[6] || (U[6] = (re) => ce.value === "wms_wfs" ? N() : te())
        }, {
          default: Ae(() => [
            ue("div", _S, [
              U[22] || (U[22] = ue("h3", { class: "va-h3" }, " Add Service ", -1)),
              ue("div", gS, [
                ue("div", mS, [
                  le(se, {
                    modelValue: ce.value,
                    "onUpdate:modelValue": U[0] || (U[0] = (re) => ce.value = re),
                    option: "wms_wfs",
                    label: "WMS/WFS Service",
                    style: { "margin-bottom": "10px" }
                  }, null, 8, ["modelValue"]),
                  le(se, {
                    modelValue: ce.value,
                    "onUpdate:modelValue": U[1] || (U[1] = (re) => ce.value = re),
                    option: "datasource",
                    label: "Datasource",
                    style: { "margin-bottom": "15px" }
                  }, null, 8, ["modelValue"]),
                  ce.value === "wms_wfs" ? (V(), ie("div", vS, [
                    le(ge, {
                      modelValue: b.value,
                      "onUpdate:modelValue": U[2] || (U[2] = (re) => b.value = re),
                      placeholder: "https://[serviceurl]"
                    }, null, 8, ["modelValue"])
                  ])) : (V(), ie("div", yS, [
                    Le.value.length > 0 ? (V(), Ze(Je, {
                      key: 0,
                      modelValue: we.value,
                      "onUpdate:modelValue": U[3] || (U[3] = (re) => we.value = re),
                      options: Le.value,
                      label: "Select Datasource",
                      placeholder: "Choose a datasource",
                      "text-by": "text",
                      "value-by": "value"
                    }, null, 8, ["modelValue", "options"])) : (V(), Ze(ge, {
                      key: 1,
                      modelValue: we.value,
                      "onUpdate:modelValue": U[4] || (U[4] = (re) => we.value = re),
                      placeholder: "Enter Datasource ID",
                      label: "Datasource ID"
                    }, null, 8, ["modelValue"])),
                    ue("div", ES, [
                      U[21] || (U[21] = Rt(" Primary datasource: ", -1)),
                      ue("strong", null, yt(l.value.datasourceId), 1)
                    ])
                  ]))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "ok-text"]),
        le(De, {
          modelValue: _.value,
          "onUpdate:modelValue": U[7] || (U[7] = (re) => _.value = re),
          "ok-text": "OK",
          size: "small",
          "hide-default-actions": !1,
          "cancel-text": ""
        }, {
          default: Ae(() => [
            ue("div", TS, [
              ue("h3", wS, [
                le(Pe, { class: "material-icons" }, {
                  default: Ae(() => [...U[23] || (U[23] = [
                    Rt("error", -1)
                  ])]),
                  _: 1
                }),
                U[24] || (U[24] = Rt(" Service Error ", -1))
              ]),
              ue("div", SS, yt(v.value), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        le(pS, {
          modelValue: q.value,
          "onUpdate:modelValue": U[8] || (U[8] = (re) => q.value = re),
          layer: R.value,
          "onUpdate:layer": U[9] || (U[9] = (re) => R.value = re),
          show: x.value,
          "onUpdate:show": U[10] || (U[10] = (re) => x.value = re),
          services: l.value.services,
          "all-layers": l.value.layers
        }, null, 8, ["modelValue", "layer", "show", "services", "all-layers"]),
        le(J, {
          modelValue: n.value.widgetSectionLayer,
          "onUpdate:modelValue": U[14] || (U[14] = (re) => n.value.widgetSectionLayer = re),
          header: "Layers",
          icon: "layers"
        }, {
          default: Ae(() => [
            l.value.layers.length == 0 ? (V(), ie("span", AS, " No Layers here ")) : (V(), Ze(Oe(bw), xu({
              key: 1,
              modelValue: l.value.layers,
              "onUpdate:modelValue": U[11] || (U[11] = (re) => l.value.layers = re),
              animation: 150,
              "component-data": {
                tag: "ul",
                type: "transition-group",
                name: E.value ? null : "flip-list"
              },
              class: "list-group",
              "item-key": "id"
            }, w.value, {
              onEnd: U[12] || (U[12] = (re) => E.value = !1),
              onStart: U[13] || (U[13] = (re) => E.value = !0)
            }), {
              item: Ae(({ element: re }) => [
                ue("li", CS, [
                  ue("div", bS, [
                    re.reconstructionFailed ? (V(), Ze(Pe, {
                      key: 0,
                      class: "material-icons",
                      style: { color: "#ff6b6b" }
                    }, {
                      default: Ae(() => [...U[25] || (U[25] = [
                        Rt(" error ", -1)
                      ])]),
                      _: 1
                    })) : re.checked ? (V(), Ze(Pe, {
                      key: 1,
                      class: "material-icons",
                      onClick: (ke) => re.checked = !1
                    }, {
                      default: Ae(() => [...U[26] || (U[26] = [
                        Rt(" layers ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : (V(), Ze(Pe, {
                      key: 2,
                      class: "material-icons",
                      onClick: (ke) => re.checked = !0
                    }, {
                      default: Ae(() => [...U[27] || (U[27] = [
                        Rt(" layers_clear ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    Rt(" " + yt(re.title) + " ", 1),
                    re.reconstructionFailed ? (V(), ie("span", OS, "(failed)")) : Ge("", !0)
                  ]),
                  ue("div", LS, [
                    le(Pe, { class: "material-icons" }, {
                      default: Ae(() => [...U[28] || (U[28] = [
                        Rt(" opacity ", -1)
                      ])]),
                      _: 1
                    }),
                    ue("div", {
                      id: re.id,
                      class: "slider nhidden sliderPopOver"
                    }, [
                      ue("div", NS, [
                        le(_e, {
                          modelValue: re.opacity,
                          "onUpdate:modelValue": (ke) => re.opacity = ke,
                          max: 1,
                          min: 0,
                          step: 0.01,
                          color: "#555"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ], 8, IS),
                    re.type == "WFSLayer" || re.type == "OGCSTA" || re.type == "GEOJSON" || re.type == "REST-GEOJSON" ? (V(), ie("div", DS, [
                      le(St, {
                        icon: "settings",
                        preset: "secondary",
                        round: "",
                        onClick: () => {
                          R.value = re, x.value = !0;
                        }
                      }, null, 8, ["onClick"])
                    ])) : Ge("", !0),
                    le(St, {
                      icon: "delete",
                      preset: "secondary",
                      round: "",
                      color: "danger",
                      onClick: Ff((ke) => Y(re), ["stop"])
                    }, null, 8, ["onClick"])
                  ])
                ])
              ]),
              _: 1
            }, 16, ["modelValue", "component-data"]))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        le(J, {
          modelValue: n.value.widgetServiceSection,
          "onUpdate:modelValue": U[16] || (U[16] = (re) => n.value.widgetServiceSection = re),
          class: "bottomframe",
          header: "Services",
          icon: "home"
        }, {
          header: Ae(({ value: re, attrs: ke, iconAttrs: xe, text: Kt }) => [
            ue("div", RS, [
              le(Pe, { class: "material-icons" }, {
                default: Ae(() => [...U[29] || (U[29] = [
                  Rt("cable ", -1)
                ])]),
                _: 1
              }),
              U[30] || (U[30] = ue("div", { class: "va-collapse__header__text" }, "Services", -1)),
              le(St, {
                loading: p.value,
                icon: "add_circle",
                preset: "secondary",
                round: "",
                onClick: U[15] || (U[15] = (Qt) => {
                  Qt.stopImmediatePropagation(), d.value = !0;
                })
              }, null, 8, ["loading"]),
              le(Pe, xu({
                class: re ? "rotate-[-180deg]" : "",
                name: "va-arrow-down"
              }, xe), null, 16, ["class"])
            ])
          ]),
          body: Ae(() => [
            Oe(X) && Oe(X).length == 0 ? (V(), ie("span", PS, " No Services here ")) : Ge("", !0),
            Oe(X) && Oe(X).length > 0 ? (V(), Ze(de, {
              nodes: Oe(X),
              key: Oe(X).length,
              childrenBy: "childs"
            }, {
              content: Ae((re) => [
                re.level == 0 ? (V(), ie(Re, { key: 0 }, [
                  re.failed ? (V(), Ze(Pe, {
                    key: 0,
                    class: "material-icons",
                    style: { color: "#ff6b6b" }
                  }, {
                    default: Ae(() => [...U[31] || (U[31] = [
                      Rt(" error ", -1)
                    ])]),
                    _: 1
                  })) : (V(), Ze(Pe, {
                    key: 1,
                    class: "material-icons"
                  }, {
                    default: Ae(() => [...U[32] || (U[32] = [
                      Rt(" cable ", -1)
                    ])]),
                    _: 1
                  })),
                  re.service._info.title ? (V(), ie("b", xS, yt(re.service._info.title), 1)) : (V(), ie("b", FS, yt(re.service._info.name), 1)),
                  (re.type === "OGCSTA" || re.type === "GEOJSON" || re.type === "REST-GEOJSON") && l.value.datasourceIds.includes(re.service._info.name) ? (V(), Ze(St, {
                    key: 4,
                    class: "mt4",
                    icon: "delete",
                    preset: "plain",
                    size: "small",
                    onClick: Ff((ke) => Z(re.service._info.name), ["stop"]),
                    style: { "margin-left": "10px" }
                  }, null, 8, ["onClick"])) : Ge("", !0)
                ], 64)) : (V(), ie("span", {
                  key: 1,
                  onClick: () => z(re)
                }, [
                  le(Pe, { class: "material-icons nsee" }, {
                    default: Ae(() => [...U[33] || (U[33] = [
                      Rt(" layers ", -1)
                    ])]),
                    _: 1
                  }),
                  le(Pe, { class: "material-icons nhidden" }, {
                    default: Ae(() => [...U[34] || (U[34] = [
                      Rt(" add ", -1)
                    ])]),
                    _: 1
                  }),
                  Rt(" " + yt(re.title), 1)
                ], 8, MS))
              ]),
              _: 1
            }, 8, ["nodes"])) : Ge("", !0)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        le(J, {
          modelValue: n.value.widgetMapSection,
          "onUpdate:modelValue": U[20] || (U[20] = (re) => n.value.widgetMapSection = re),
          class: "bottomframe",
          header: "Services",
          icon: "map"
        }, {
          header: Ae(({ value: re, attrs: ke, iconAttrs: xe, text: Kt }) => [
            ue("div", BS, [
              le(Pe, { class: "material-icons" }, {
                default: Ae(() => [...U[35] || (U[35] = [
                  Rt("map ", -1)
                ])]),
                _: 1
              }),
              U[36] || (U[36] = ue("div", { class: "va-collapse__header__text" }, "Map", -1)),
              le(Pe, xu({
                class: re ? "rotate-[-180deg]" : "",
                name: "va-arrow-down"
              }, xe), null, 16, ["class"])
            ])
          ]),
          body: Ae(() => [
            ue("div", GS, [
              le(ge, {
                modelValue: l.value.baseMapUrl,
                "onUpdate:modelValue": U[17] || (U[17] = (re) => l.value.baseMapUrl = re),
                label: "Base Map URL",
                placeholder: "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              }, {
                prepend: Ae(() => [
                  le(Pe, { name: "public" })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              U[37] || (U[37] = ue("p", { class: "hint-text" }, " Tile server URL template. Use {z}, {x}, {y} placeholders for zoom and coordinates. ", -1)),
              le(He, {
                modelValue: l.value.fixed,
                "onUpdate:modelValue": U[18] || (U[18] = (re) => l.value.fixed = re),
                label: "Map fixed"
              }, null, 8, ["modelValue"]),
              le(gt, {
                modelValue: l.value.selectionHighlightColor,
                "onUpdate:modelValue": U[19] || (U[19] = (re) => l.value.selectionHighlightColor = re),
                label: "Selection Highlight Color"
              }, null, 8, ["modelValue"]),
              U[38] || (U[38] = ue("p", { class: "hint-text" }, " Color used to highlight selected Things on the map. ", -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), vp = /* @__PURE__ */ mr(kS, [["__scopeId", "data-v-5f2599d9"]]), US = {
  key: 0,
  class: "datapoint tlc"
}, VS = /* @__PURE__ */ st({
  __name: "TLCDataLabelRenderer",
  props: {
    data: {},
    config: {},
    markerSize: { default: 45 }
  },
  setup(o) {
    const i = o, { config: n, data: l, markerSize: d } = Sl(i);
    return (p, _) => (V(), ie("div", {
      class: "datapoint-wrapper",
      style: fa({ width: (Oe(d) || 45) + "px", height: (Oe(d) || 45) + "px" })
    }, [
      Oe(l) ? (V(), ie("div", US, yt(Oe(l)), 1)) : Ge("", !0)
    ], 4));
  }
}), zS = /* @__PURE__ */ mr(VS, [["__scopeId", "data-v-2eb55b7f"]]), WS = {};
function ZS(o, i) {
  return " empty ";
}
const HS = /* @__PURE__ */ mr(WS, [["render", ZS], ["__scopeId", "data-v-ca2b9f21"]]);
class YS {
  constructor() {
    this.component = zS, this.setupComponent = HS, this.description = "renders a Trafic Light DataPoint", this.name = "Traffic Light Data Point Renderer", this.qualifiedName = "tlc", this.namespace = "tlc", this.example = " 🟢⚪⚪";
  }
}
const qS = {
  key: 0,
  class: "datapoint"
}, KS = {
  key: 1,
  class: "datapoint"
}, $S = /* @__PURE__ */ st({
  __name: "ValueUnitDataLabelRenderer",
  props: {
    data: {},
    config: {},
    markerSize: { default: 0 }
  },
  setup(o) {
    const i = o, { config: n, data: l, markerSize: d } = Sl(i);
    return n.value && !n.value.unit && (n.value.unit = ""), n.value && !n.value.prefix && (n.value.prefix = ""), n.value && !n.value.suffix && (n.value.suffix = ""), (p, _) => (V(), ie("div", {
      class: "datapoint-wrapper",
      style: fa({ width: (Oe(d) || 0) + "px", height: (Oe(d) || 0) + "px" })
    }, [
      Oe(l) ? (V(), ie("div", qS, yt(Oe(n).prefix) + yt(Oe(l)) + " " + yt(Oe(n).unit) + " " + yt(Oe(n).suffix), 1)) : (V(), ie("div", KS, yt(Oe(n).prefix) + " -- " + yt(Oe(n).unit) + " " + yt(Oe(n).suffix), 1))
    ], 4));
  }
}), JS = /* @__PURE__ */ mr($S, [["__scopeId", "data-v-a78b518d"]]), jS = { class: "settings-container" }, XS = /* @__PURE__ */ st({
  __name: "ValueUnitDataLabelRendererSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = _r(o, "modelValue"), n = pe({
      textSection: !0
    });
    return (l, d) => {
      const p = ut("va-input"), _ = ut("va-collapse");
      return V(), Ze(_, {
        modelValue: n.value.textSection,
        "onUpdate:modelValue": d[3] || (d[3] = (v) => n.value.textSection = v),
        header: "Style settings"
      }, {
        default: Ae(() => [
          ue("div", jS, [
            le(p, {
              modelValue: i.value.unit,
              "onUpdate:modelValue": d[0] || (d[0] = (v) => i.value.unit = v),
              label: "unit"
            }, null, 8, ["modelValue"]),
            le(p, {
              modelValue: i.value.prefix,
              "onUpdate:modelValue": d[1] || (d[1] = (v) => i.value.prefix = v),
              label: "Prefix"
            }, null, 8, ["modelValue"]),
            le(p, {
              modelValue: i.value.suffix,
              "onUpdate:modelValue": d[2] || (d[2] = (v) => i.value.suffix = v),
              label: "suffix"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), QS = /* @__PURE__ */ mr(XS, [["__scopeId", "data-v-39ec496f"]]);
class eA {
  constructor() {
    this.component = JS, this.setupComponent = QS, this.description = "Renders a value and unit", this.name = "Value and Unit Data Point Renderer", this.namespace = "general", this.qualifiedName = "ValueUnitDataPointRenderer", this.example = " 15";
  }
}
const tA = [
  {
    name: "Map Clicked",
    type: "click_on_map",
    description: "Triggered when the map background is clicked (provides lat/lon)",
    payloadType: Ai
  },
  {
    name: "Thing Clicked",
    type: "click_on_thing",
    description: "Triggered when a Thing marker is clicked on the map",
    payloadType: Xe
  },
  {
    name: "Datastream Clicked",
    type: "click_on_datastream",
    description: "Triggered when a Datastream is clicked on the map",
    payloadType: Ye
  },
  {
    name: "Observation Clicked",
    type: "click_on_observation",
    description: "Triggered when an Observation is clicked on the map",
    payloadType: Lt
  },
  {
    name: "Location Clicked",
    type: "click_on_location",
    description: "Triggered when a Location is clicked on the map",
    payloadType: jt
  },
  {
    name: "Thing Hovered",
    type: "hover_on_thing",
    description: "Triggered when hovering over a Thing marker on the map",
    payloadType: Xe
  },
  {
    name: "Datastream Hovered",
    type: "hover_on_datastream",
    description: "Triggered when hovering over a Datastream marker on the map",
    payloadType: Ye
  }
], nA = `<?xml version="1.0" encoding="UTF-8"?>
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
                xmlns:ecore="http://www.eclipse.org/emf/2002/Ecore"
                xmlns:events="http://org.eclipse.daanse.board.app.lib.events"
                name="MapSettings"
                nsURI="http://org.eclipse.daanse.board.app.ui.vue.widget.map" nsPrefix="MapSettings">

    <!-- Map Widget Interface -->
    <eClassifiers xsi:type="ecore:EClass" name="MapWidgetInterface" abstract="true" eSuperTypes="http://org.eclipse.daanse.board.app.lib.events#//WidgetActionInterface">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Abstract base class for Map Widget operations."/>
        </eAnnotations>
        <eOperations name="zoomToThing">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Zooms the map to a specific Thing location."/>
            </eAnnotations>
            <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
                <details key="eventType" value="map.zoomToThing"/>
            </eAnnotations>
            <eParameters name="thingId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" upperBound="1" lowerBound="1">
                <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                    <details key="documentation" value="ID of the Thing to zoom to."/>
                </eAnnotations>
            </eParameters>
            <eParameters name="zoom" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" defaultValueLiteral="16">
                <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                    <details key="documentation" value="Optional zoom level to apply (default: 16)."/>
                </eAnnotations>
            </eParameters>
            <eParameters name="duration" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" defaultValueLiteral="1000">
                <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                    <details key="documentation" value="Optional animation duration in milliseconds (default: 1000)."/>
                </eAnnotations>
            </eParameters>
        </eOperations>
        <eOperations name="selectThingById">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Selects and highlights a Thing on the map by its ID."/>
            </eAnnotations>
            <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
                <details key="eventType" value="map.selectThingById"/>
            </eAnnotations>
            <eParameters name="thingId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" upperBound="1" lowerBound="1">
                <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                    <details key="documentation" value="ID of the Thing to select and highlight."/>
                </eAnnotations>
            </eParameters>
        </eOperations>
        <eOperations name="zoomToLocation">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Zooms the map to a specific GeoJSON location."/>
            </eAnnotations>
            <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
                <details key="eventType" value="map.zoomToLocation"/>
            </eAnnotations>
            <eParameters name="location" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject" upperBound="1" lowerBound="1">
                <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                    <details key="documentation" value="GeoJSON location geometry to zoom to."/>
                </eAnnotations>
            </eParameters>
            <eParameters name="zoom" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" defaultValueLiteral="16">
                <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                    <details key="documentation" value="Optional zoom level to apply (default: 16)."/>
                </eAnnotations>
            </eParameters>
            <eParameters name="duration" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" defaultValueLiteral="1000">
                <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                    <details key="documentation" value="Optional animation duration in milliseconds (default: 1000)."/>
                </eAnnotations>
            </eParameters>
        </eOperations>

        <eOperations name="showTooltip">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Shows a permanent tooltip on a Thing marker."/>
            </eAnnotations>
            <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
                <details key="eventType" value="map.showTooltip"/>
            </eAnnotations>
            <eParameters name="thingId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" upperBound="1" lowerBound="1">
                <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                    <details key="documentation" value="ID of the Thing to show the tooltip on."/>
                </eAnnotations>
            </eParameters>
            <eParameters name="content" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
                <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                    <details key="documentation" value="Optional tooltip content text. If empty, shows Thing name."/>
                </eAnnotations>
            </eParameters>
        </eOperations>

        <eOperations name="hideTooltip">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Hides the currently shown tooltip."/>
            </eAnnotations>
            <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
                <details key="eventType" value="map.hideTooltip"/>
            </eAnnotations>
        </eOperations>

        <eOperations name="displayRoute">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Displays a route on the map from GeoJSON data."/>
            </eAnnotations>
            <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
                <details key="eventType" value="map.displayRoute"/>
            </eAnnotations>
            <eParameters name="geojson" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject" upperBound="1" lowerBound="1">
                <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                    <details key="documentation" value="GeoJSON FeatureCollection containing the route."/>
                </eAnnotations>
            </eParameters>
            <eParameters name="color" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" defaultValueLiteral="#c45e00">
                <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                    <details key="documentation" value="Route line color (default: Daanse orange)."/>
                </eAnnotations>
            </eParameters>
            <eParameters name="width" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" defaultValueLiteral="5">
                <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                    <details key="documentation" value="Route line width in pixels (default: 5)."/>
                </eAnnotations>
            </eParameters>
        </eOperations>

        <eOperations name="clearRoute">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Removes the currently displayed route from the map."/>
            </eAnnotations>
            <eAnnotations source="org.eclipse.daanse.board.app.lib.events/WidgetAction">
                <details key="eventType" value="map.clearRoute"/>
            </eAnnotations>
        </eOperations>
    </eClassifiers>

    <eClassifiers xsi:type="ecore:EClass" name="MapSettings">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Represents the overall settings for a map display."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="datasourceId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional identifier for the data source."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="datasourceIds" upperBound="-1"
                             eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0" defaultValueLiteral="[]">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional array of additional datasource identifiers for multi-datasource support."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="baseMapUrl" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
                             defaultValueLiteral="https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The URL of the base map service."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="zoom" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt" defaultValueLiteral="14">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The initial zoom level of the map."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="center" upperBound="-1" defaultValueLiteral="[50.93115286, 11.60392726]"
                             eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDouble">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The geographical coordinates for the center of the map (e.g., [longitude, latitude])."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="attribution" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Attribution text for the map data."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="layers" upperBound="-1"
                             eType="#//Layer" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A list of layers to be displayed on the map."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="styles" upperBound="-1"
                             eType="#//DSRenderer" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A list of data stream renderers for styling map elements."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="OGCSstyles" upperBound="-1"
                             eType="#//Renderer" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A list of OGC-compliant renderers for styling map elements."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="services" upperBound="-1"
                             eType="#//Service" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A list of services available for the map."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="fixed" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="if true maps can not be moved in viewmode"/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="enableClustering" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Enable marker clustering for OGC STA Things and Datastreams"/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="selectionHighlightColor" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
                             lowerBound="0" defaultValueLiteral="#ff0000">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Color used to highlight selected Things on the map (default: #ff0000)"/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="selectedThingId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="ID of the currently selected Thing (persisted across mode switches)."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <eClassifiers xsi:type="ecore:EClass" name="Layer">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Represents a single layer that can be displayed on the map."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="datasourceId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional datasource identifier for this layer."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="service" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The service associated with this layer. (Mapped from TypeScript 'any' type)."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="type" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The type of the layer (e.g., 'WMS', 'GeoJSON')."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="childs" eType="#//Layer" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A nested child layer. (Note: Original TS was single LayerI, not LayerI[])."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="level" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The hierarchical level of the layer."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="styleIds" upperBound="-1"
                             eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional list of style IDs applicable to this layer."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional internal name of the layer."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="title" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional display title of the layer."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="attribution" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional attribution for this specific layer."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="geoJson" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional GeoJSON data for the layer. (Mapped from TypeScript 'any' type)."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="wfs_service" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional WFS service configuration for the layer. (Mapped from TypeScript 'any' type)."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="opacity" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDouble"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional opacity level for the layer (0.0 to 1.0)."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <eClassifiers xsi:type="ecore:EClass" name="Service">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Defines a map service that can be used by layers."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="type" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The type of the service (e.g., 'WMS', 'WFS')."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="url" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The URL endpoint of the service."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="service" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The internal service object. (Mapped from TypeScript 'any' type)."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="id" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A unique identifier for the service."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <eClassifiers xsi:type="ecore:EClass" name="IconSettings">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Defines settings for rendering icons."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="currentIcon" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The identifier or path of the currently selected icon."/>
            </eAnnotations>
        </eStructuralFeatures>
        <!-- A wrapper, as in the icon widget's own model: these settings are
             handed straight to an IconWidget, so the two have to agree. -->
        <eStructuralFeatures xsi:type="ecore:EReference" name="iconColor" containment="false" defaultValueLiteral="var(--color-fg)">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The color of the icon."/>
            </eAnnotations>
            <eGenericType eClassifier="org.eclipse.daanse.board.app.ui.vue.composables#//VariableWrapper">
                <eTypeArguments eClassifier="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"/>
            </eGenericType>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="iconSize" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The size of the icon in pixels."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="isIconFilled" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Indicates if the icon should be filled."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="strokeWeight" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The weight of the icon's stroke."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="opticSize" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The optical size of the icon."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="grade" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The grade or visual weight of the icon."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <eClassifiers xsi:type="ecore:EClass" name="PointPin">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Defines settings for a map point pin."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="color" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The color of the point pin."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="solid" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="If true, the pin is rendered as a solid filled shape without the inner circle."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <eClassifiers xsi:type="ecore:EClass" name="PointAndAreaSettings">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Combines settings for rendering both points and areas."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="show_SubElements" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional flag to show or hide sub-elements."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="point_render_as" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Specifies how points should be rendered (e.g., 'icon', 'pin')."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="point_prop" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional property to use for point rendering."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="point" eType="#//IconSettings" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Settings for rendering points as icons."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="pointPin" eType="#//PointPin" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Settings for rendering points as pins."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="area" eType="#//MapProps" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="General map properties for rendering areas."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="label" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional settings for labels. (Mapped from TypeScript 'any' type)."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <eClassifiers xsi:type="ecore:EClass" name="DSRenderer">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Defines a renderer based on data stream conditions."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The name of the data stream renderer."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="datastream" upperBound="-1"
                             eType="#//Condition" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A list of conditions applied to the data stream."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="observations" upperBound="-1"
                             lowerBound="0" eType="#//Observation" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional list of observation settings for the renderer."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="renderer" eType="#//PointAndAreaSettings" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The rendering settings for points and areas associated with this data stream."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="id" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A unique identifier for the data stream renderer."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="placement" eType="#//ERefType">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The type of reference or placement (e.g., 'Thing', 'ObservedArea')."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <eClassifiers xsi:type="ecore:EClass" name="Placement">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Represents the placement type of a rendered element."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="placement" eType="#//ERefType">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The type of reference or placement (e.g., 'Thing', 'ObservedArea')."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <eClassifiers xsi:type="ecore:EClass" name="Observation">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Defines observation settings for a renderer."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="setting" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The observation setting. (Mapped from TypeScript 'any' type)."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="component" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The component related to the observation."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="renderer" lowerBound="0" eType="#//PointAndAreaSettings" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional rendering settings for point and area (used for GeoJSON layer renderers)."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="conditions" upperBound="-1"
                             eType="#//Condition" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A list of conditions to filter GeoJSON features within observations."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <eClassifiers xsi:type="ecore:EClass" name="Condition">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Defines a condition for data stream filtering or styling."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="prop" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The property name to apply the condition to."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="comperator" eType="#//Comperator">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The comparison operator to use (e.g., 'eq', 'lt')."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="value" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The value to compare the property against."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <eClassifiers xsi:type="ecore:EClass" name="Renderer">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Defines a general renderer, potentially with multiple data stream renderers."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The name of the renderer."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="thing" upperBound="-1"
                             eType="#//Condition" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A list of conditions related to the 'thing' being rendered."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="renderer" eType="#//PointAndAreaSettings" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The primary rendering settings for points and areas."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="ds_renderer" upperBound="-1"
                             eType="#//DSRenderer" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A list of data stream renderers associated with this main renderer."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="ObservationrefreshTime" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">

                <details key="documentation" value="Optional refresh interval for observation data in milliseconds."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="lastUpdate" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional timestamp of the last update."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="id" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="A unique identifier for the renderer."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <eClassifiers xsi:type="ecore:EClass" name="MapProps">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="General properties for rendering map elements like lines or polygons."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="stroke" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional flag indicating if a stroke should be applied."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="color" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional color for the stroke."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="weight" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EInt"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional stroke weight."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="opacity" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDouble"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional opacity for the stroke (0.0 to 1.0)."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="lineCap" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional setting for the line cap style (e.g., 'butt', 'round', 'square')."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="dashOffset" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional dash offset for dashed lines."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="fill" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EBoolean"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional flag indicating if the shape should be filled."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="fillOpacity" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDouble"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional opacity for the fill color (0.0 to 1.0)."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="fillColor" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional fill color for the shape."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="className" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString"
                             lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Optional CSS class name for styling."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <eClassifiers xsi:type="ecore:EEnum" name="ERefType">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Enumeration for different types of references or placements."/>
        </eAnnotations>
        <eLiterals name="Thing" value="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Indicates a reference to a 'Thing' entity."/>
            </eAnnotations>
        </eLiterals>
        <eLiterals name="OberservedArea" value="1">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Indicates a reference to an 'Observed Area' entity."/>
            </eAnnotations>
        </eLiterals>
    </eClassifiers>

    <eClassifiers xsi:type="ecore:EEnum" name="Comperator">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Enumeration for comparison operators used in conditions."/>
        </eAnnotations>
        <eLiterals name="eq" literal="eq">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Equality operator (==)."/>
            </eAnnotations>
        </eLiterals>
        <eLiterals name="lt" value="1" literal="lt">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Less than operator (&lt;)."/>
            </eAnnotations>
        </eLiterals>
        <eLiterals name="gt" value="2" literal="gt">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Greater than operator (>)."/>
            </eAnnotations>
        </eLiterals>
        <eLiterals name="lte" value="3" literal="lte">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Less than or equals operator (&lt;=)."/>
            </eAnnotations>
        </eLiterals>
        <eLiterals name="gte" value="4" literal="gte">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Greater than or equals operator (>=)."/>
            </eAnnotations>
        </eLiterals>
        <eLiterals name="neq" value="5" literal="neq">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Not equals operator (!=)."/>
            </eAnnotations>
        </eLiterals>
    </eClassifiers>

    <!-- Event System: ThingClickPayload -->
    <eClassifiers xsi:type="ecore:EClass" name="ThingClickPayload" eSuperTypes="http://org.eclipse.daanse.board.app.lib.events#//Payload">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Payload emitted when a Thing marker is clicked on the map."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="id" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Unique identifier of the Thing."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Name of the Thing."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="description" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Description of the Thing."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="properties" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Custom properties of the Thing (mapped from Record&lt;string, any&gt;)."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="location" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Location geometry (GeoJSON) of the Thing."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="rendererId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="ID of the renderer that triggered this event."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EReference" name="datastreams" upperBound="-1" eType="#//DatastreamSummary" containment="true">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Summary of datastreams associated with this Thing."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <!-- Event System: DatastreamSummary -->
    <eClassifiers xsi:type="ecore:EClass" name="DatastreamSummary">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Summary information about a Datastream (used in event payloads)."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="id" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Datastream ID."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Datastream name."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="observedProperty" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Observed property name."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <!-- Event System: DatastreamClickPayload -->
    <eClassifiers xsi:type="ecore:EClass" name="DatastreamClickPayload" eSuperTypes="http://org.eclipse.daanse.board.app.lib.events#//Payload">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Payload emitted when a Datastream is clicked on the map."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="id" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Datastream ID."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Datastream name."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="thingId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Parent Thing ID."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="unitOfMeasurement" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Unit of measurement object."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="observedProperty" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Observed property name."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="latestObservationResult" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Latest observation result value."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="latestObservationTime" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Latest observation timestamp (ISO 8601)."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <!-- Event System: ObservationClickPayload -->
    <eClassifiers xsi:type="ecore:EClass" name="ObservationClickPayload" eSuperTypes="http://org.eclipse.daanse.board.app.lib.events#//Payload">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Payload emitted when an Observation is clicked on the map."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="id" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Observation ID."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="datastreamId" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Parent Datastream ID."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="phenomenonTime" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Phenomenon time (ISO 8601)."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="result" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Observation result value."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="resultTime" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Result time (ISO 8601)."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <!-- Event System: MapClickPayload -->
    <eClassifiers xsi:type="ecore:EClass" name="MapClickPayload" eSuperTypes="http://org.eclipse.daanse.board.app.lib.events#//Payload">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Payload emitted when the map background is clicked."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="lat" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDouble">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Latitude of the clicked position."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="lon" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EDouble">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Longitude of the clicked position."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>

    <!-- Event System: LocationClickPayload -->
    <eClassifiers xsi:type="ecore:EClass" name="LocationClickPayload" eSuperTypes="http://org.eclipse.daanse.board.app.lib.events#//Payload">
        <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
            <details key="documentation" value="Payload emitted when a Location is clicked on the map."/>
        </eAnnotations>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="id" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Location ID."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="name" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Location name."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="geometry" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EJavaObject" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="GeoJSON geometry of the location."/>
            </eAnnotations>
        </eStructuralFeatures>
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="thingIds" upperBound="-1" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString" lowerBound="0">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="Array of Thing IDs associated with this location."/>
            </eAnnotations>
        </eStructuralFeatures>
    </eClassifiers>


</ecore:EPackage>
`;
var iA = Object.defineProperty, rA = Object.getOwnPropertyDescriptor, Kh = (o, i, n, l) => {
  for (var d = l > 1 ? void 0 : l ? rA(i, n) : i, p = o.length - 1, _; p >= 0; p--)
    (_ = o[p]) && (d = (l ? _(i, n, d) : _(d)) || d);
  return l && d && iA(i, n, d), d;
}, yp = (o, i) => (n, l) => i(n, l, o);
const Ro = "MapWidget";
let Ju = class {
  constructor(o, i) {
    this.events = o, this.actions = i, this.type = Ro, this.component = ip, this.settingsComponent = vp, this.supportedDSTypes = ["ogcsta", "OGC Composer", "rest", "valhalla"], this.icon = zE, this.name = "Map";
  }
  register() {
    ul().registerDataPointRenderer(new YS()), ul().registerDataPointRenderer(new eA()), this.events.registerWidget(Ro, tA), this.actions.registerActionsFromEcoreString(Ro, nA, "widget", "model.ecore").catch(() => {
      this.actions.registerWidgetType(Ro, c_, "widget");
    }), LE().register(
      "org.eclipse.daanse.board.app.ui.vue.widget.map",
      {
        MapsWidget: ip,
        MapsWidgetSettings: vp,
        useDataPointRegistry: ul,
        // Renderer building blocks: the geojson plugin composes its markers
        // and stylers from these. Public API on purpose - a deep import into
        // this bundle's src tree cannot be resolved at runtime.
        MapMarker: yl,
        ConditionSettings: Dh,
        PointStyler: R_,
        AreaStyler: P_
      },
      "0.0.1-next.1",
      "ui.vue.widget.map"
    );
  }
  unregister() {
    this.events.unregisterWidget(Ro), this.actions.unregisterWidgetType(Ro);
  }
};
Kh([
  CE()
], Ju.prototype, "register", 1);
Kh([
  bE()
], Ju.prototype, "unregister", 1);
Ju = Kh([
  OE({
    service: [UE],
    properties: { "widget.type": Ro }
  }),
  yp(0, Df(SE)),
  yp(1, Df(AE))
], Ju);
export {
  P_ as AreaStyler,
  Dh as ConditionSettings,
  yl as MapMarker,
  Ju as MapWidgetProvider,
  ip as MapsWidget,
  vp as MapsWidgetSettings,
  R_ as PointStyler,
  ul as useDataPointRegistry
};
