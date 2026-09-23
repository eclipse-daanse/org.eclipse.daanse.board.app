(function(){var i="ui.vue.widget.map",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:\"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:\"\"}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}.pin{&[data-v-dc572ab0]{width:45px;height:45px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #00000008}&.round[data-v-dc572ab0]{border-radius:50%}&.solid{.inner[data-v-dc572ab0]{background:transparent}}&.contain{&[data-v-dc572ab0]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.inner[data-v-dc572ab0]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}}.datapoint[data-v-dc572ab0]{transform:rotate(45deg);position:absolute;top:50px;left:0;margin:0}.observation-slot[data-v-dc572ab0]{transform:rotate(45deg);position:absolute;top:0;left:0}&.marker{&[data-v-dc572ab0]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}}.inner[data-v-dc572ab0]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}}.image-marker[data-v-dc572ab0]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.text-container[data-v-0a5cc83b]{display:flex;flex-direction:column;width:100%;height:100%;gap:1rem;align-items:stretch}.pin{&[data-v-0a5cc83b]{width:45px;height:45px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #0000005c}&.round[data-v-0a5cc83b]{border-radius:50%}&.contain{&[data-v-0a5cc83b]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.inner[data-v-0a5cc83b]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}}.datapoint[data-v-0a5cc83b]{transform:rotate(45deg);position:absolute;top:50px;left:0;margin:0}&.marker{&[data-v-0a5cc83b]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}}.inner[data-v-0a5cc83b]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}}.component[data-v-0a5cc83b]{overflow:hidden}.cmap_container[data-v-0a5cc83b]{width:100%;height:100%;position:relative}.image-marker[data-v-0a5cc83b]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.conditions[data-v-6042a171]{width:100%;border-collapse:collapse;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--color-fg)}.conditions td[data-v-6042a171],.conditions th[data-v-6042a171]{padding:3px 6px;text-align:left;vertical-align:middle}.conditions__head[data-v-6042a171]{font-size:var(--text-xs);font-weight:600;color:var(--color-dim);border-bottom:1px solid var(--color-divider)}.conditions__head--end[data-v-6042a171],.conditions__end[data-v-6042a171]{width:1%;text-align:right;white-space:nowrap}.conditions__new td[data-v-6042a171]{border-bottom:1px solid var(--color-divider);padding-bottom:7px}.conditions tbody tr[data-v-6042a171]:hover{background:var(--color-raised)}.conditions__empty[data-v-6042a171]{padding:10px 6px;color:var(--color-dim)}.cell__text[data-v-6042a171]{display:inline-block;min-width:40px;padding:2px 4px;border:1px solid transparent;border-radius:var(--radius-sm, 3px);cursor:text}.cell__text[data-v-6042a171]:hover{border-color:var(--color-divider)}.cell__input[data-v-6042a171]{width:100%;padding:2px 4px;border:1px solid var(--color-outline);border-radius:var(--radius-sm, 3px);background:var(--color-pane);color:var(--color-fg);font:inherit}.cell__input[data-v-6042a171]:focus-visible{outline:2px solid var(--color-accent);outline-offset:-1px}.pmap_container[data-v-c72cb17a]{width:100%;min-height:250px}.pin{&[data-v-e218ba59]{width:45px;height:45px;border-radius:50% 50% 50% 0;background:var(--v102d0d28);transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #00000008}&.round[data-v-e218ba59]{border-radius:50%}&.solid{.inner[data-v-e218ba59]{background:transparent}}&.contain{&[data-v-e218ba59]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.inner[data-v-e218ba59]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}}&.marker{&[data-v-e218ba59]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;background:var(--v102d0d28);transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}}.inner[data-v-e218ba59]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}}.flex[data-v-e218ba59]{display:flex}.image-marker[data-v-e218ba59]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.placeholder[data-v-e218ba59]{background:#ccc;width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:10px;border:1px dashed #999}.pmap_container[data-v-77cbf15c]{width:100%;height:250px}.settings-container[data-v-1b922462]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-1b922462]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-1b922462]{font-family:Material Symbols Outlined sans-serif;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-1b922462]:hover{transform:scale(1.1)}.active-icon[data-v-1b922462]{border:2px solid rgb(0,121,0)}.slider[data-v-1b922462]{padding:0 10px}.auto-update-settings[data-v-dd5cbdb6]{padding:1rem;display:flex;flex-direction:column;gap:1.5rem}.auto-update-settings h3[data-v-dd5cbdb6]{margin:0;color:var(--color-fg);font-size:1.1rem;font-weight:600}.refresh-setting[data-v-dd5cbdb6]{display:flex;flex-direction:column;gap:1rem}.refresh-setting label[data-v-dd5cbdb6]{font-weight:500;color:var(--color-fg);font-size:.9rem}.refresh-slider[data-v-dd5cbdb6]{margin:.5rem 0}.slider-labels[data-v-dd5cbdb6]{display:flex;justify-content:space-between;font-size:.8rem;color:var(--color-dim);margin-top:.5rem}.refresh-info[data-v-dd5cbdb6]{background:var(--color-raised);border:1px solid var(--color-divider);border-radius:6px;padding:1rem;display:flex;flex-direction:column;gap:.5rem}.info-item[data-v-dd5cbdb6]{display:flex;justify-content:space-between;align-items:center}.info-item .label[data-v-dd5cbdb6]{font-weight:500;color:var(--color-dim);font-size:.9rem}.info-item .value[data-v-dd5cbdb6]{font-weight:600;color:var(--color-fg);font-size:.9rem}.full[data-v-175982e2]{position:relative}.tree_detail[data-v-175982e2]{display:flex;flex-direction:row;align-items:flex-start;align-content:flex-start;gap:5px}.tree[data-v-175982e2]{width:300px;max-height:500px;overflow-y:auto}.detail[data-v-175982e2]{border-left:1px solid var(--color-divider)}.marked[data-v-175982e2]{position:relative;display:inline-flex}.marked__tag[data-v-175982e2]{position:absolute;top:-6px;right:-10px;padding:0 3px;border-radius:7px;background:var(--color-raised);color:var(--color-dim);font-family:var(--font-sans);font-size:9px;line-height:14px}.item__input[data-v-175982e2]{width:100%;border:1px solid var(--color-outline);border-radius:var(--radius-sm, 3px);background:var(--color-pane);color:var(--color-fg);font:inherit;padding:1px 4px}.prose[data-v-175982e2]{padding:4px 2px;color:var(--color-fg);line-height:1.5}.choices[data-v-175982e2]{display:flex;flex-direction:column;gap:8px;margin-top:12px}.choice[data-v-175982e2]{justify-content:flex-start;height:auto;padding:8px 10px}.choice__text[data-v-175982e2]{display:flex;flex-direction:column;gap:2px;text-align:left}.choice__name[data-v-175982e2]{font-weight:600}.choice__what[data-v-175982e2]{font-size:var(--text-xs);opacity:.75}.empty__icon[data-v-175982e2]{font-size:74px}.menuitem{&[data-v-175982e2]{display:grid;grid-template-columns:25px 35px 1fr min-content;align-items:center;padding-top:2px;padding-bottom:2px;padding-left:5px;cursor:pointer}.checked[data-v-175982e2]{margin-top:-5px}&.active[data-v-175982e2]{background-color:var(--color-raised)}.options[data-v-175982e2]{display:flex;flex-direction:row}}.childs[data-v-175982e2]{grid-column:span 4;padding-left:15px}.content{&[data-v-175982e2]{width:846px;height:500px;padding:0 0 0 15px}.scroller[data-v-175982e2]{min-height:100%;max-height:100%;overflow-y:auto}&.center[data-v-175982e2]{display:flex;flex-direction:column;align-content:center;justify-content:center;align-items:center;color:var(--color-dim)}}.underline[data-v-175982e2]{cursor:pointer}.blue[data-v-175982e2]{color:var(--color-accent)}.rowlayout[data-v-175982e2]{display:grid;flex-direction:row;flex-wrap:nowrap;width:100%;grid-template-columns:66% 1fr;gap:15px}.settings-container[data-v-afd73ed9]{display:flex;flex-direction:column;gap:1rem;padding:15px}.hint-text[data-v-afd73ed9]{font-size:12px;color:var(--color-dim);margin:-8px 0 0;padding-left:4px}.section__head[data-v-afd73ed9]{display:flex;align-items:center;gap:7px;margin-bottom:8px;color:var(--color-fg)}.section__title[data-v-afd73ed9]{flex:1 1 auto;font-family:var(--font-sans);font-size:var(--text-sm);font-weight:600}.note[data-v-afd73ed9]{margin:8px 0 0;font-size:var(--text-xs);color:var(--color-dim)}.note--body[data-v-afd73ed9]{font-size:var(--text-sm);color:var(--color-fg)}.dialog__title[data-v-afd73ed9]{margin:0;font-family:var(--font-sans);font-size:var(--text-base);font-weight:600;color:var(--color-fg)}.failed[data-v-afd73ed9]{margin-left:8px;font-size:.85em;color:var(--color-err)}.slider__track[data-v-afd73ed9]{min-width:150px}.tree[data-v-afd73ed9]{margin:0;padding:0;list-style:none}.tree__row[data-v-afd73ed9]{display:flex;align-items:center;gap:6px}.tree__layers[data-v-afd73ed9]{margin:0;padding-left:18px;list-style:none}.tree__add[data-v-afd73ed9]{display:flex;align-items:center;gap:6px;cursor:pointer}.list-group-item{&[data-v-afd73ed9]{display:flex;flex-direction:column;align-items:flex-start;cursor:move;padding:4px;list-style:none}.row[data-v-afd73ed9]{display:flex;flex-direction:row;flex-wrap:nowrap;gap:6px;align-items:center}&[data-v-afd73ed9]:hover{background-color:#d6dde3;border-radius:var(--radius-xs)}}.empty[data-v-afd73ed9]{display:block;width:100%;vertical-align:middle;text-align:center;font-variant:small-caps;font-style:italic;color:#5d5d5d}.bottomframe[data-v-afd73ed9]{border-bottom:1px solid var(--color-divider)}#header-va-4[data-v-afd73ed9]{padding:6px 12px}.options[data-v-afd73ed9]{padding-top:6px;padding-left:12px;border-top:1px dotted #00000047}.row.nhidden[data-v-afd73ed9]{display:none}.dragIcon[data-v-afd73ed9]{cursor:n-resize}.button{margin-top:35px}.flip-list-move{transition:transform .5s}.no-move{transition:transform 0s}.ghost{opacity:.5;background:#c8ebfb}.list-group{min-height:20px}.list-group-item{cursor:move}.list-group-item i{cursor:pointer}.nhidden,.row.nhidden{display:none}.va-tree-node-root{&:hover{cursor:pointer;.nhidden{display:inline}.nsee{display:none}}}.list-group-item{&:hover{cursor:pointer;.nhidden{display:flex}}}.sliderPopOver{padding:2px 7px;.va-slider__handler{left:51%;background-color:#fff!important;border-color:#99a9c8!important;border-radius:6px!important;border-width:1px!important;width:11px;height:20px;.va-slider__handler__dot--focus{margin-top:4px}}}.mt4{margin-top:4px}.datapoint-wrapper[data-v-2eb55b7f]{position:relative;display:inline-block}.tlc[data-v-2eb55b7f]{position:absolute;border:4px solid #f8f6f6;background:#6a6a6a;padding:3px;border-radius:12px;text-wrap:nowrap;top:100%;left:50%;transform:translate(-50%) rotate(-90deg);margin-top:5px;box-shadow:-3px 5px 6px #1919192b;font-size:12px;white-space:nowrap}.settings-container[data-v-ca2b9f21]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-ca2b9f21]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-ca2b9f21]{font-family:Material Symbols Outlined sans-serif;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-ca2b9f21]:hover{transform:scale(1.1)}.active-icon[data-v-ca2b9f21]{border:2px solid rgb(0,121,0)}.slider[data-v-ca2b9f21]{padding:0 10px}.datapoint-wrapper[data-v-a78b518d]{position:relative;display:inline-block}.datapoint[data-v-a78b518d]{display:inline-block;text-wrap:nowrap;position:absolute;border:1px solid #ccc;background:#fff;padding:4px;top:100%;left:50%;transform:translate(-50%);margin-top:5px;border-radius:21px;white-space:nowrap}.settings-container[data-v-e7589c54]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-e7589c54]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-e7589c54]{font-family:Material Symbols Outlined sans-serif;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-e7589c54]:hover{transform:scale(1.1)}.active-icon[data-v-e7589c54]{border:2px solid rgb(0,121,0)}.slider[data-v-e7589c54]{padding:0 10px}\n";})();
import { PayloadImpl as Al, WidgetActionInterfaceImpl as BE, EVENT_ACTIONS_REGISTRY as kE, EVENT_REGISTRY_ID as GE, EVENT_ACTIONS_REGISTRY_ID as UE } from "org.eclipse.daanse.board.app.lib.api.events";
import { component as Rp, activate as zE, deactivate as VE, inject as Vf, initTsmRuntime as WE } from "@eclipse-daanse/tsm";
import { defineComponent as it, h as Ds, ref as me, reactive as Bo, provide as Kr, computed as Xt, onMounted as Yt, markRaw as Nn, nextTick as Qt, onBeforeUnmount as bl, inject as wt, watch as Vi, onUnmounted as Cl, render as ZE, createElementBlock as X, openBlock as z, Fragment as Re, renderList as zt, createBlock as dt, createCommentVNode as Be, unref as C, renderSlot as il, normalizeClass as Fo, normalizeStyle as _a, createElementVNode as ie, toDisplayString as Ie, withCtx as Ke, createVNode as ue, createTextVNode as Qi, resolveDynamicComponent as Ph, mergeModels as Vh, toRefs as Ol, useModel as mr, toRaw as nl, resolveComponent as HE, TransitionGroup as YE, useId as Wf, withDirectives as Zu, vModelText as Hu, withKeys as Yu, useCssVars as qE, mergeProps as Pp, isRef as xp, shallowRef as Zf, watchEffect as KE, getCurrentInstance as $E, withModifiers as Hf } from "vue";
import { FILTER as ua, UPDATE_MQTT_SUBSCRIPTIONS as Yf, MQTT_UNSUBSCRIBE_ALL as qf } from "org.eclipse.daanse.board.app.lib.datasource.ogcsta";
import { VariableWrapper as _h, useDatasourceRepository as JE, plainSettings as Kf, useTranslation as io, useFormat as jE } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as Ls } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { IconWidget as Mp, IconWidgetSettings as XE } from "org.eclipse.daanse.board.app.ui.vue.widget.icon";
import { BasicEObject as vr, createBasicEList as qu, createContainmentEList as ls, BasicEFactory as QE, BasicEPackage as e1, EPackageRegistry as Bp, BasicEClass as zn, BasicEAttribute as pe, BasicEReference as Jn, getEcorePackage as _e } from "@emfts/core";
import { loggerFactory as t1 } from "org.eclipse.daanse.board.app.lib.logger";
import { useRoute as n1 } from "vue-router";
import { DSelect as Ku, DButton as Vn, DIcon as Ht, DRadioGroup as Wh, DInput as us, DDivider as kp, DColorInput as $u, DCheckbox as Ju, DSlider as ju, DModal as cl, DTabs as i1 } from "org.eclipse.daanse.board.app.ui.vue.controls";
import { WIDGET_SERVICE_ID as r1 } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: Fp } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
function s1(o, i) {
  for (var n = 0; n < i.length; n++) {
    const l = i[n];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const h in l)
        if (h !== "default" && !(h in o)) {
          const f = Object.getOwnPropertyDescriptor(l, h);
          f && Object.defineProperty(o, h, f.get ? f : {
            enumerable: !0,
            get: () => l[h]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
const o1 = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M60%2020C45.088%2020%2033%2031.588%2033%2045.88C33%2065.16%2060%20100%2060%20100C60%20100%2087%2065.16%2087%2045.88C87%2031.588%2074.912%2020%2060%2020ZM60%2056.2C54.036%2056.2%2049.2%2051.484%2049.2%2045.68C49.2%2039.876%2054.036%2035.16%2060%2035.16C65.964%2035.16%2070.8%2039.876%2070.8%2045.68C70.8%2051.484%2065.964%2056.2%2060%2056.2Z'%20fill='%23606060'/%3e%3c/svg%3e", $f = (o, i) => {
  for (const n of Object.keys(i))
    o.on(n, i[n]);
}, Gp = (o) => {
  for (const i of Object.keys(o)) {
    const n = o[i];
    n && js(n.cancel) && n.cancel();
  }
}, a1 = (o) => !o || typeof o.charAt != "function" ? o : o.charAt(0).toUpperCase() + o.slice(1), js = (o) => typeof o == "function", Tn = (o, i, n) => {
  for (const l in n) {
    const h = "set" + a1(l);
    o[h] ? Vi(
      () => n[l],
      (f, g) => {
        o[h](f, g);
      }
    ) : i[h] && Vi(
      () => n[l],
      (f) => {
        i[h](f);
      }
    );
  }
}, fn = (o, i, n = {}) => {
  const l = { ...n };
  for (const h in o) {
    const f = i[h], g = o[h];
    f && (f && f.custom === !0 || g !== void 0 && (l[h] = g));
  }
  return l;
}, ui = (o) => {
  const i = {}, n = {};
  for (const l in o)
    if (l.startsWith("on") && !l.startsWith("onUpdate") && l !== "onReady") {
      const h = l.slice(2).toLocaleLowerCase();
      i[h] = o[l];
    } else
      n[l] = o[l];
  return { listeners: i, attrs: n };
}, l1 = async (o) => {
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
}, Lu = (o) => {
  const i = me(
    (...l) => console.warn(`Method ${o} has been invoked without being replaced`)
  ), n = (...l) => i.value(...l);
  return n.wrapped = i, Kr(o, n), n;
}, Iu = (o, i) => o.wrapped.value = i, ln = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, Bt = (o) => {
  const i = wt(o);
  if (i === void 0)
    throw new Error(
      `Attempt to inject ${o.description} before it was provided.`
    );
  return i;
}, wn = Symbol(
  "useGlobalLeaflet"
), Ai = Symbol("addLayer"), ac = Symbol("removeLayer"), Ll = Symbol(
  "registerControl"
), Up = Symbol(
  "registerLayerControl"
), zp = Symbol(
  "canSetParentHtml"
), Vp = Symbol("setParentHtml"), Wp = Symbol("setIcon"), Zp = Symbol("bindPopup"), Hp = Symbol("bindTooltip"), Yp = Symbol("unbindPopup"), qp = Symbol("unbindTooltip"), Il = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, Nl = (o) => ({ options: o.options, methods: {} }), Ea = {
  ...Il,
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
}, Dl = (o, i, n) => {
  const l = Bt(Ai), h = Bt(ac), { options: f, methods: g } = Nl(o), v = fn(
    o,
    Ea,
    f
  ), y = () => l({ leafletObject: i.value }), m = () => h({ leafletObject: i.value }), A = {
    ...g,
    setAttribution(S) {
      m(), i.value.options.attribution = S, o.visible && y();
    },
    setName() {
      m(), o.visible && y();
    },
    setLayerType() {
      m(), o.visible && y();
    },
    setVisible(S) {
      i.value && (S ? y() : m());
    },
    bindPopup(S) {
      if (!i.value || !js(i.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      i.value.bindPopup(S);
    },
    bindTooltip(S) {
      if (!i.value || !js(i.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      i.value.bindTooltip(S);
    },
    unbindTooltip() {
      i.value && (js(i.value.closeTooltip) && i.value.closeTooltip(), js(i.value.unbindTooltip) && i.value.unbindTooltip());
    },
    unbindPopup() {
      i.value && (js(i.value.closePopup) && i.value.closePopup(), js(i.value.unbindPopup) && i.value.unbindPopup());
    },
    updateVisibleProp(S) {
      n.emit("update:visible", S);
    }
  };
  return Kr(Zp, A.bindPopup), Kr(Hp, A.bindTooltip), Kr(Yp, A.unbindPopup), Kr(qp, A.unbindTooltip), Cl(() => {
    A.unbindPopup(), A.unbindTooltip(), m();
  }), { options: v, methods: A };
}, ds = (o, i) => {
  if (o && i.default)
    return Ds("div", { style: { display: "none" } }, i.default());
}, Kp = {
  ...Ea,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, u1 = (o, i, n) => {
  const { options: l, methods: h } = Dl(
    o,
    i,
    n
  );
  return { options: fn(
    o,
    Kp,
    l
  ), methods: h };
}, Zh = {
  ...Kp,
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
}, $p = (o, i, n) => {
  const { options: l, methods: h } = u1(o, i, n), f = fn(
    o,
    Zh,
    l
  ), g = Bt(ac), v = {
    ...h,
    setStroke(y) {
      i.value.setStyle({ stroke: y });
    },
    setColor(y) {
      i.value.setStyle({ color: y });
    },
    setWeight(y) {
      i.value.setStyle({ weight: y });
    },
    setOpacity(y) {
      i.value.setStyle({ opacity: y });
    },
    setLineCap(y) {
      i.value.setStyle({ lineCap: y });
    },
    setLineJoin(y) {
      i.value.setStyle({ lineJoin: y });
    },
    setDashArray(y) {
      i.value.setStyle({ dashArray: y });
    },
    setDashOffset(y) {
      i.value.setStyle({ dashOffset: y });
    },
    setFill(y) {
      i.value.setStyle({ fill: y });
    },
    setFillColor(y) {
      i.value.setStyle({ fillColor: y });
    },
    setFillOpacity(y) {
      i.value.setStyle({ fillOpacity: y });
    },
    setFillRule(y) {
      i.value.setStyle({ fillRule: y });
    },
    setClassName(y) {
      i.value.setStyle({ className: y });
    }
  };
  return bl(() => {
    g({ leafletObject: i.value });
  }), { options: f, methods: v };
}, Hh = {
  ...Zh,
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
}, Jp = (o, i, n) => {
  const { options: l, methods: h } = $p(
    o,
    i,
    n
  ), f = fn(
    o,
    Hh,
    l
  ), g = {
    ...h,
    setRadius(v) {
      i.value.setRadius(v);
    },
    setLatLng(v) {
      i.value.setLatLng(v);
    }
  };
  return { options: f, methods: g };
}, jp = {
  ...Hh,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, c1 = (o, i, n) => {
  const { options: l, methods: h } = Jp(o, i, n), f = fn(
    o,
    jp,
    l
  ), g = {
    ...h
  };
  return { options: f, methods: g };
};
it({
  name: "LCircle",
  props: jp,
  setup(o, i) {
    const n = me(), l = me(!1), h = wt(wn), f = Bt(Ai), { options: g, methods: v } = c1(o, n, i);
    return Yt(async () => {
      const { circle: y } = h ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(y(o.latLng, g));
      const { listeners: m } = ui(i.attrs);
      n.value.on(m), Tn(v, n.value, o), f({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Qt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
});
const h1 = it({
  name: "LCircleMarker",
  props: Hh,
  setup(o, i) {
    const n = me(), l = me(!1), h = wt(wn), f = Bt(Ai), { options: g, methods: v } = Jp(
      o,
      n,
      i
    );
    return Yt(async () => {
      const { circleMarker: y } = h ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(
        y(o.latLng, g)
      );
      const { listeners: m } = ui(i.attrs);
      n.value.on(m), Tn(v, n.value, o), f({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Qt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
}), Ta = {
  ...Il,
  position: {
    type: String
  }
}, Rl = (o, i) => {
  const { options: n, methods: l } = Nl(o), h = fn(
    o,
    Ta,
    n
  ), f = {
    ...l,
    setPosition(g) {
      i.value && i.value.setPosition(g);
    }
  };
  return Cl(() => {
    i.value && i.value.remove();
  }), { options: h, methods: f };
}, d1 = (o) => o.default ? Ds("div", { ref: "root" }, o.default()) : null;
it({
  name: "LControl",
  props: {
    ...Ta,
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
    const n = me(), l = me(), h = wt(wn), f = Bt(Ll), { options: g, methods: v } = Rl(o, n);
    return Yt(async () => {
      const { Control: y, DomEvent: m } = h ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js"), A = y.extend({
        onAdd() {
          return l.value;
        }
      });
      n.value = Nn(new A(g)), Tn(v, n.value, o), f({ leafletObject: n.value }), o.disableClickPropagation && l.value && m.disableClickPropagation(l.value), o.disableScrollPropagation && l.value && m.disableScrollPropagation(l.value), Qt(() => i.emit("ready", n.value));
    }), { root: l, leafletObject: n };
  },
  render() {
    return d1(this.$slots);
  }
});
const Xp = {
  ...Ta,
  prefix: {
    type: String
  }
}, f1 = (o, i) => {
  const { options: n, methods: l } = Rl(
    o,
    i
  ), h = fn(
    o,
    Xp,
    n
  ), f = {
    ...l,
    setPrefix(g) {
      i.value.setPrefix(g);
    }
  };
  return { options: h, methods: f };
};
it({
  name: "LControlAttribution",
  props: Xp,
  setup(o, i) {
    const n = me(), l = wt(wn), h = Bt(Ll), { options: f, methods: g } = f1(o, n);
    return Yt(async () => {
      const { control: v } = l ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(
        v.attribution(f)
      ), Tn(g, n.value, o), h({ leafletObject: n.value }), Qt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const Qp = {
  ...Ta,
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
}, p1 = (o, i) => {
  const { options: n } = Rl(o, i);
  return { options: fn(
    o,
    Qp,
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
it({
  name: "LControlLayers",
  props: Qp,
  setup(o, i) {
    const n = me(), l = wt(wn), h = Bt(Up), { options: f, methods: g } = p1(o, n);
    return Yt(async () => {
      const { control: v } = l ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(
        v.layers(void 0, void 0, f)
      ), Tn(g, n.value, o), h({
        ...o,
        ...g,
        leafletObject: n.value
      }), Qt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const eg = {
  ...Ta,
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
}, g1 = (o, i) => {
  const { options: n, methods: l } = Rl(
    o,
    i
  );
  return { options: fn(
    o,
    eg,
    n
  ), methods: l };
};
it({
  name: "LControlScale",
  props: eg,
  setup(o, i) {
    const n = me(), l = wt(wn), h = Bt(Ll), { options: f, methods: g } = g1(o, n);
    return Yt(async () => {
      const { control: v } = l ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(v.scale(f)), Tn(g, n.value, o), h({ leafletObject: n.value }), Qt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const tg = {
  ...Ta,
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
}, _1 = (o, i) => {
  const { options: n, methods: l } = Rl(
    o,
    i
  );
  return { options: fn(
    o,
    tg,
    n
  ), methods: l };
};
it({
  name: "LControlZoom",
  props: tg,
  setup(o, i) {
    const n = me(), l = wt(wn), h = Bt(Ll), { options: f, methods: g } = _1(o, n);
    return Yt(async () => {
      const { control: v } = l ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(v.zoom(f)), Tn(g, n.value, o), h({ leafletObject: n.value }), Qt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
const lc = {
  ...Ea
}, Yh = (o, i, n) => {
  const { options: l, methods: h } = Dl(
    o,
    i,
    n
  ), f = fn(
    o,
    lc,
    l
  ), g = {
    ...h,
    addLayer(v) {
      i.value.addLayer(v.leafletObject);
    },
    removeLayer(v) {
      i.value.removeLayer(v.leafletObject);
    }
  };
  return Kr(Ai, g.addLayer), Kr(ac, g.removeLayer), { options: f, methods: g };
}, ng = {
  ...lc
}, m1 = (o, i, n) => {
  const { options: l, methods: h } = Yh(
    o,
    i,
    n
  ), f = fn(
    o,
    ng,
    l
  ), g = {
    ...h
  };
  return { options: f, methods: g };
};
it({
  props: ng,
  setup(o, i) {
    const n = me(), l = me(!1), h = wt(wn), f = Bt(Ai), { methods: g, options: v } = m1(
      o,
      n,
      i
    );
    return Yt(async () => {
      const { featureGroup: y } = h ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(
        y(void 0, v)
      );
      const { listeners: m } = ui(i.attrs);
      n.value.on(m), Tn(g, n.value, o), f({
        ...o,
        ...g,
        leafletObject: n.value
      }), l.value = !0, Qt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
});
const ig = {
  ...lc,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, v1 = (o, i, n) => {
  const { options: l, methods: h } = Yh(
    o,
    i,
    n
  ), f = fn(
    o,
    ig,
    l
  );
  Object.prototype.hasOwnProperty.call(o, "optionsStyle") && (f.style = o.optionsStyle);
  const g = {
    ...h,
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
  return { options: f, methods: g };
}, ko = it({
  props: ig,
  setup(o, i) {
    const n = me(), l = me(!1), h = wt(wn), f = Bt(Ai), { methods: g, options: v } = v1(o, n, i);
    return Yt(async () => {
      const { geoJSON: y } = h ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(y(o.geojson, v));
      const { listeners: m } = ui(i.attrs);
      n.value.on(m), Tn(g, n.value, o), f({
        ...o,
        ...g,
        leafletObject: n.value
      }), l.value = !0, Qt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
}), qh = {
  ...Ea,
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
}, rg = (o, i, n) => {
  const { options: l, methods: h } = Dl(
    o,
    i,
    n
  ), f = fn(
    o,
    qh,
    l
  ), g = {
    ...h,
    setTileComponent() {
      var v;
      (v = i.value) == null || v.redraw();
    }
  };
  return Cl(() => {
    i.value.off();
  }), { options: f, methods: g };
}, y1 = (o, i, n, l) => o.extend({
  initialize(h) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), n.setOptions(this, h);
  },
  createTile(h) {
    const f = this._tileCoordsToKey(h);
    this.tileComponents[f] = i.create("div");
    const g = Ds({ setup: l, props: ["coords"] }, { coords: h });
    return ZE(g, this.tileComponents[f]), this.tileComponents[f];
  },
  _unloadTile(h) {
    const f = this._tileCoordsToKey(h.coords);
    this.tileComponents[f] && (this.tileComponents[f].innerHTML = "", this.tileComponents[f] = void 0);
  }
});
it({
  props: {
    ...qh,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(o, i) {
    const n = me(), l = me(null), h = me(!1), f = wt(wn), g = Bt(Ai), { options: v, methods: y } = rg(o, n, i);
    return Yt(async () => {
      const { GridLayer: m, DomUtil: A, Util: S } = f ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js"), I = y1(
        m,
        A,
        S,
        o.childRender
      );
      n.value = Nn(new I(v));
      const { listeners: D } = ui(i.attrs);
      n.value.on(D), Tn(y, n.value, o), g({
        ...o,
        ...y,
        leafletObject: n.value
      }), h.value = !0, Qt(() => i.emit("ready", n.value));
    }), { root: l, ready: h, leafletObject: n };
  },
  render() {
    return this.ready ? Ds("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const Jf = {
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
}, yl = it({
  name: "LIcon",
  props: {
    ...Jf,
    ...Il
  },
  setup(o, i) {
    const n = me(), l = wt(wn), h = Bt(zp), f = Bt(Vp), g = Bt(Wp);
    let v, y, m, A, S;
    const I = (j, W, Z) => {
      const J = j && j.innerHTML;
      if (!W) {
        Z && S && h() && f(J);
        return;
      }
      const { listeners: P } = ui(i.attrs);
      S && y(S, P);
      const { options: U } = Nl(o), re = fn(
        o,
        Jf,
        U
      );
      J && (re.html = J), S = re.html ? m(re) : A(re), v(S, P), g(S);
    }, D = () => {
      Qt(() => I(n.value, !0, !1));
    }, B = () => {
      Qt(() => I(n.value, !1, !0));
    }, G = {
      setIconUrl: D,
      setIconRetinaUrl: D,
      setIconSize: D,
      setIconAnchor: D,
      setPopupAnchor: D,
      setTooltipAnchor: D,
      setShadowUrl: D,
      setShadowRetinaUrl: D,
      setShadowAnchor: D,
      setBgPos: D,
      setClassName: D,
      setHtml: D
    };
    return Yt(async () => {
      const {
        DomEvent: j,
        divIcon: W,
        icon: Z
      } = l ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      v = j.on, y = j.off, m = W, A = Z, Tn(G, {}, o), new MutationObserver(B).observe(n.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), D();
    }), { root: n };
  },
  render() {
    const o = this.$slots.default ? this.$slots.default() : void 0;
    return Ds("div", { ref: "root" }, o);
  }
}), sg = {
  ...Ea,
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
}, E1 = (o, i, n) => {
  const { options: l, methods: h } = Dl(
    o,
    i,
    n
  ), f = fn(
    o,
    sg,
    l
  ), g = {
    ...h,
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
  return { options: f, methods: g };
};
it({
  name: "LImageOverlay",
  props: sg,
  setup(o, i) {
    const n = me(), l = me(!1), h = wt(wn), f = Bt(Ai), { options: g, methods: v } = E1(
      o,
      n,
      i
    );
    return Yt(async () => {
      const { imageOverlay: y } = h ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(
        y(o.url, o.bounds, g)
      );
      const { listeners: m } = ui(i.attrs);
      n.value.on(m), Tn(v, n.value, o), f({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Qt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
});
it({
  props: lc,
  setup(o, i) {
    const n = me(), l = me(!1), h = wt(wn), f = Bt(Ai), { methods: g } = Yh(o, n, i);
    return Yt(async () => {
      const { layerGroup: v } = h ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(
        v(void 0, o.options)
      );
      const { listeners: y } = ui(i.attrs);
      n.value.on(y), Tn(g, n.value, o), f({
        ...o,
        ...g,
        leafletObject: n.value
      }), l.value = !0, Qt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
});
function og(o, i, n) {
  var l, h, f;
  i === void 0 && (i = 50), n === void 0 && (n = {});
  var g = (l = n.isImmediate) != null && l, v = (h = n.callback) != null && h, y = n.maxWait, m = Date.now(), A = [];
  function S() {
    if (y !== void 0) {
      var D = Date.now() - m;
      if (D + i >= y)
        return y - D;
    }
    return i;
  }
  var I = function() {
    var D = [].slice.call(arguments), B = this;
    return new Promise(function(G, j) {
      var W = g && f === void 0;
      if (f !== void 0 && clearTimeout(f), f = setTimeout(function() {
        if (f = void 0, m = Date.now(), !g) {
          var J = o.apply(B, D);
          v && v(J), A.forEach(function(P) {
            return (0, P.resolve)(J);
          }), A = [];
        }
      }, S()), W) {
        var Z = o.apply(B, D);
        return v && v(Z), G(Z);
      }
      A.push({ resolve: G, reject: j });
    });
  };
  return I.cancel = function(D) {
    f !== void 0 && clearTimeout(f), A.forEach(function(B) {
      return (0, B.reject)(D);
    }), A = [];
  }, I;
}
const jf = {
  ...Il,
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
}, Kh = it({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: jf,
  setup(o, i) {
    const n = me(), l = Bo({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: h } = Nl(o), f = fn(
      o,
      jf,
      h
    ), { listeners: g, attrs: v } = ui(i.attrs), y = Lu(Ai), m = Lu(ac), A = Lu(Ll), S = Lu(
      Up
    );
    Kr(wn, o.useGlobalLeaflet);
    const I = Xt(() => {
      const W = {};
      return o.noBlockingAnimations && (W.animate = !1), W;
    }), D = Xt(() => {
      const W = I.value;
      return o.padding && (W.padding = o.padding), o.paddingTopLeft && (W.paddingTopLeft = o.paddingTopLeft), o.paddingBottomRight && (W.paddingBottomRight = o.paddingBottomRight), W;
    }), B = {
      moveend: og((W) => {
        l.leafletRef && (i.emit("update:zoom", l.leafletRef.getZoom()), i.emit("update:center", l.leafletRef.getCenter()), i.emit("update:bounds", l.leafletRef.getBounds()));
      }),
      overlayadd(W) {
        const Z = l.layersInControl.find((J) => J.name === W.name);
        Z && Z.updateVisibleProp(!0);
      },
      overlayremove(W) {
        const Z = l.layersInControl.find((J) => J.name === W.name);
        Z && Z.updateVisibleProp(!1);
      }
    };
    Yt(async () => {
      o.useGlobalLeaflet && (ln.L = ln.L || await Promise.resolve().then(() => U1));
      const { map: W, CRS: Z, Icon: J, latLngBounds: P, latLng: U, stamp: re } = o.useGlobalLeaflet ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        f.beforeMapMount && await f.beforeMapMount();
      } catch (he) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${he.message}`
        );
      }
      await l1(J);
      const fe = typeof f.crs == "string" ? Z[f.crs] : f.crs;
      f.crs = fe || Z.EPSG3857;
      const Ee = {
        addLayer(he) {
          he.layerType !== void 0 && (l.layerControl === void 0 ? l.layersToAdd.push(he) : l.layersInControl.find(
            (Oe) => re(Oe.leafletObject) === re(he.leafletObject)
          ) || (l.layerControl.addLayer(he), l.layersInControl.push(he))), he.visible !== !1 && l.leafletRef.addLayer(he.leafletObject);
        },
        removeLayer(he) {
          he.layerType !== void 0 && (l.layerControl === void 0 ? l.layersToAdd = l.layersToAdd.filter(
            (Oe) => Oe.name !== he.name
          ) : (l.layerControl.removeLayer(he.leafletObject), l.layersInControl = l.layersInControl.filter(
            (Oe) => re(Oe.leafletObject) !== re(he.leafletObject)
          ))), l.leafletRef.removeLayer(he.leafletObject);
        },
        registerLayerControl(he) {
          l.layerControl = he, l.layersToAdd.forEach((Oe) => {
            l.layerControl.addLayer(Oe);
          }), l.layersToAdd = [], A(he);
        },
        registerControl(he) {
          l.leafletRef.addControl(he.leafletObject);
        },
        setZoom(he) {
          const Oe = l.leafletRef.getZoom();
          he !== Oe && l.leafletRef.setZoom(he, I.value);
        },
        setCrs(he) {
          const Oe = l.leafletRef.getBounds();
          l.leafletRef.options.crs = he, l.leafletRef.fitBounds(Oe, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(he) {
          l.leafletRef.fitBounds(he, D.value);
        },
        setBounds(he) {
          if (!he)
            return;
          const Oe = P(he);
          Oe.isValid() && !(l.lastSetBounds || l.leafletRef.getBounds()).equals(Oe, 0) && (l.lastSetBounds = Oe, l.leafletRef.fitBounds(Oe));
        },
        setCenter(he) {
          if (he == null)
            return;
          const Oe = U(he), le = l.lastSetCenter || l.leafletRef.getCenter();
          (le.lat !== Oe.lat || le.lng !== Oe.lng) && (l.lastSetCenter = Oe, l.leafletRef.panTo(Oe, I.value));
        }
      };
      Iu(y, Ee.addLayer), Iu(m, Ee.removeLayer), Iu(A, Ee.registerControl), Iu(S, Ee.registerLayerControl), l.leafletRef = Nn(W(n.value, f)), Tn(Ee, l.leafletRef, o), $f(l.leafletRef, B), $f(l.leafletRef, g), l.ready = !0, Qt(() => i.emit("ready", l.leafletRef));
    }), bl(() => {
      Gp(B), l.leafletRef && (l.leafletRef.off(), l.leafletRef.remove());
    });
    const G = Xt(() => l.leafletRef), j = Xt(() => l.ready);
    return { root: n, ready: j, leafletObject: G, attrs: v };
  },
  render({ attrs: o }) {
    return o.style || (o.style = {}), o.style.width || (o.style.width = "100%"), o.style.height || (o.style.height = "100%"), Ds(
      "div",
      {
        ...o,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), T1 = ["Symbol(Comment)", "Symbol(Text)"], w1 = ["LTooltip", "LPopup"], ag = {
  ...Ea,
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
}, S1 = (o, i, n) => {
  const { options: l, methods: h } = Dl(
    o,
    i,
    n
  ), f = fn(
    o,
    ag,
    l
  ), g = {
    ...h,
    setDraggable(v) {
      i.value.dragging && (v ? i.value.dragging.enable() : i.value.dragging.disable());
    },
    latLngSync(v) {
      n.emit("update:latLng", v.latlng), n.emit("update:lat-lng", v.latlng);
    },
    setLatLng(v) {
      if (v != null && i.value) {
        const y = i.value.getLatLng();
        (!y || !y.equals(v)) && i.value.setLatLng(v);
      }
    }
  };
  return { options: f, methods: g };
}, A1 = (o, i) => {
  const n = i.slots.default && i.slots.default();
  return n && n.length && n.some(b1);
};
function b1(o) {
  return !(T1.includes(o.type.toString()) || w1.includes(o.type.name));
}
const El = it({
  name: "LMarker",
  props: ag,
  setup(o, i) {
    const n = me(), l = me(!1), h = wt(wn), f = Bt(Ai);
    Kr(
      zp,
      () => {
        var m;
        return !!((m = n.value) != null && m.getElement());
      }
    ), Kr(Vp, (m) => {
      var A, S;
      const I = js((A = n.value) == null ? void 0 : A.getElement) && ((S = n.value) == null ? void 0 : S.getElement());
      I && (I.innerHTML = m);
    }), Kr(
      Wp,
      (m) => {
        var A;
        return ((A = n.value) == null ? void 0 : A.setIcon) && n.value.setIcon(m);
      }
    );
    const { options: g, methods: v } = S1(o, n, i), y = {
      moveHandler: og(v.latLngSync)
    };
    return Yt(async () => {
      const { marker: m, divIcon: A } = h ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      A1(g, i) && (g.icon = A({ className: "" })), n.value = Nn(m(o.latLng, g));
      const { listeners: S } = ui(i.attrs);
      n.value.on(S), n.value.on("move", y.moveHandler), Tn(v, n.value, o), f({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Qt(() => i.emit("ready", n.value));
    }), bl(() => Gp(y)), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
}), $h = {
  ...Zh,
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
}, lg = (o, i, n) => {
  const { options: l, methods: h } = $p(
    o,
    i,
    n
  ), f = fn(
    o,
    $h,
    l
  ), g = {
    ...h,
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
  return { options: f, methods: g };
}, Xu = {
  ...$h
}, ug = (o, i, n) => {
  const { options: l, methods: h } = lg(
    o,
    i,
    n
  ), f = fn(
    o,
    Xu,
    l
  ), g = {
    ...h,
    toGeoJSON(v) {
      return i.value.toGeoJSON(v);
    }
  };
  return { options: f, methods: g };
};
it({
  name: "LPolygon",
  props: Xu,
  setup(o, i) {
    const n = me(), l = me(!1), h = wt(wn), f = Bt(Ai), { options: g, methods: v } = ug(o, n, i);
    return Yt(async () => {
      const { polygon: y } = h ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(y(o.latLngs, g));
      const { listeners: m } = ui(i.attrs);
      n.value.on(m), Tn(v, n.value, o), f({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Qt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
});
it({
  name: "LPolyline",
  props: $h,
  setup(o, i) {
    const n = me(), l = me(!1), h = wt(wn), f = Bt(Ai), { options: g, methods: v } = lg(o, n, i);
    return Yt(async () => {
      const { polyline: y } = h ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(
        y(o.latLngs, g)
      );
      const { listeners: m } = ui(i.attrs);
      n.value.on(m), Tn(v, n.value, o), f({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Qt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
});
const cg = {
  ...Il,
  content: {
    type: String,
    default: null
  }
}, hg = (o, i) => {
  const { options: n, methods: l } = Nl(o), h = {
    ...l,
    setContent(f) {
      i.value && f !== null && f !== void 0 && i.value.setContent(f);
    }
  };
  return { options: n, methods: h };
}, dg = (o) => o.default ? Ds("div", { ref: "root" }, o.default()) : null, C1 = {
  ...cg,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, O1 = (o, i) => {
  const { options: n, methods: l } = hg(o, i);
  return { options: n, methods: l };
};
it({
  name: "LPopup",
  props: C1,
  setup(o, i) {
    const n = me(), l = me(null), h = wt(wn), f = Bt(Zp), g = Bt(Yp), { options: v, methods: y } = O1(o, n);
    return Yt(async () => {
      const { popup: m } = h ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(m(v)), o.latLng !== void 0 && n.value.setLatLng(o.latLng), Tn(y, n.value, o);
      const { listeners: A } = ui(i.attrs);
      n.value.on(A), n.value.setContent(o.content || l.value || ""), f(n.value), Qt(() => i.emit("ready", n.value));
    }), bl(() => {
      g();
    }), { root: l, leafletObject: n };
  },
  render() {
    return dg(this.$slots);
  }
});
const fg = {
  ...Xu,
  latLngs: {
    ...Xu.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, L1 = (o, i, n) => {
  const { options: l, methods: h } = ug(
    o,
    i,
    n
  ), f = fn(
    o,
    fg,
    l
  ), g = {
    ...h,
    setBounds(v) {
      i.value.setBounds(v);
    },
    setLatLngs(v) {
      i.value.setBounds(v);
    }
  };
  return { options: f, methods: g };
};
it({
  name: "LRectangle",
  props: fg,
  setup(o, i) {
    const n = me(), l = me(!1), h = wt(wn), f = Bt(Ai), { options: g, methods: v } = L1(o, n, i);
    return Yt(async () => {
      const { rectangle: y, latLngBounds: m } = h ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js"), A = o.bounds ? m(o.bounds) : m(o.latLngs || []);
      n.value = Nn(y(A, g));
      const { listeners: S } = ui(i.attrs);
      n.value.on(S), Tn(v, n.value, o), f({
        ...o,
        ...v,
        leafletObject: n.value
      }), l.value = !0, Qt(() => i.emit("ready", n.value));
    }), { ready: l, leafletObject: n };
  },
  render() {
    return ds(this.ready, this.$slots);
  }
});
const Jh = {
  ...qh,
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
}, pg = (o, i, n) => {
  const { options: l, methods: h } = rg(o, i, n), f = fn(
    o,
    Jh,
    l
  ), g = {
    ...h
  };
  return { options: f, methods: g };
}, jh = it({
  props: Jh,
  setup(o, i) {
    const n = me(), l = wt(wn), h = Bt(Ai), { options: f, methods: g } = pg(o, n, i);
    return Yt(async () => {
      const { tileLayer: v } = l ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(v(o.url, f));
      const { listeners: y } = ui(i.attrs);
      n.value.on(y), Tn(g, n.value, o), h({
        ...o,
        ...g,
        leafletObject: n.value
      }), Qt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
}), I1 = {
  ...cg
}, N1 = (o, i) => {
  const { options: n, methods: l } = hg(o, i), h = Bt(qp);
  return bl(() => {
    h();
  }), { options: n, methods: l };
}, Xf = it({
  name: "LTooltip",
  props: I1,
  setup(o, i) {
    const n = me(), l = me(null), h = wt(wn), f = Bt(Hp), { options: g, methods: v } = N1(o, n);
    return Yt(async () => {
      const { tooltip: y } = h ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(y(g)), Tn(v, n.value, o);
      const { listeners: m } = ui(i.attrs);
      n.value.on(m), n.value.setContent(o.content || l.value || ""), f(n.value), Qt(() => i.emit("ready", n.value));
    }), { root: l, leafletObject: n };
  },
  render() {
    return dg(this.$slots);
  }
}), gg = {
  ...Jh,
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
}, D1 = (o, i, n) => {
  const { options: l, methods: h } = pg(o, i, n);
  return {
    options: fn(
      o,
      gg,
      l
    ),
    methods: {
      ...h
    }
  };
}, R1 = it({
  props: gg,
  setup(o, i) {
    const n = me(), l = wt(wn), h = Bt(Ai), { options: f, methods: g } = D1(
      o,
      n,
      i
    );
    return Yt(async () => {
      const { tileLayer: v } = l ? ln.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      n.value = Nn(
        v.wms(o.url, f)
      );
      const { listeners: y } = ui(i.attrs);
      n.value.on(y), Tn(g, n.value, o), h({
        ...o,
        ...g,
        leafletObject: n.value
      }), Qt(() => i.emit("ready", n.value));
    }), { leafletObject: n };
  },
  render() {
    return null;
  }
});
var Nu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _g(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var rl = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var P1 = rl.exports, Qf;
function x1() {
  return Qf || (Qf = 1, (function(o, i) {
    (function() {
      var n, l = "4.17.21", h = 200, f = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", g = "Expected a function", v = "Invalid `variable` option passed into `_.template`", y = "__lodash_hash_undefined__", m = 500, A = "__lodash_placeholder__", S = 1, I = 2, D = 4, B = 1, G = 2, j = 1, W = 2, Z = 4, J = 8, P = 16, U = 32, re = 64, fe = 128, Ee = 256, he = 512, Oe = 30, le = "...", ne = 800, V = 16, ge = 1, Ae = 2, te = 3, oe = 1 / 0, K = 9007199254740991, Fe = 17976931348623157e292, Le = NaN, Me = 4294967295, kt = Me - 1, en = Me >>> 1, Ot = [
        ["ary", fe],
        ["bind", j],
        ["bindKey", W],
        ["curry", J],
        ["curryRight", P],
        ["flip", he],
        ["partial", U],
        ["partialRight", re],
        ["rearg", Ee]
      ], Qe = "[object Arguments]", Ye = "[object Array]", Vt = "[object AsyncFunction]", un = "[object Boolean]", ci = "[object Date]", qt = "[object DOMException]", Zn = "[object Error]", Dn = "[object Function]", bi = "[object GeneratorFunction]", pn = "[object Map]", jn = "[object Number]", gn = "[object Null]", _n = "[object Object]", tn = "[object Promise]", yr = "[object Proxy]", Hn = "[object RegExp]", Kt = "[object Set]", Xn = "[object String]", Ci = "[object Symbol]", hi = "[object Undefined]", Rn = "[object WeakMap]", Oi = "[object WeakSet]", Sn = "[object ArrayBuffer]", Yn = "[object DataView]", tr = "[object Float32Array]", Qn = "[object Float64Array]", Li = "[object Int8Array]", qn = "[object Int16Array]", ei = "[object Int32Array]", Ii = "[object Uint8Array]", Ni = "[object Uint8ClampedArray]", nn = "[object Uint16Array]", ti = "[object Uint32Array]", Er = /\b__p \+= '';/g, Di = /\b(__p \+=) '' \+/g, di = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ni = /&(?:amp|lt|gt|quot|#39);/g, nr = /[&<>"']/g, Tr = RegExp(ni.source), x = RegExp(nr.source), ce = /<%-([\s\S]+?)%>/g, q = /<%([\s\S]+?)%>/g, ve = /<%=([\s\S]+?)%>/g, ke = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Pe = /^\w*$/, ot = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ft = /[\\^$.*+?()[\]{}|]/g, Ft = RegExp(ft.source), Pt = /^\s+/, Lt = /\s/, de = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Pn = /\{\n\/\* \[wrapped with (.+)\] \*/, ii = /,? & /, Wi = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, fi = /[()=,{}\[\]\/\s]/, ir = /\\(\\)?/g, xt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Gt = /\w*$/, pt = /^[-+]0x[0-9a-f]+$/i, An = /^0b[01]+$/i, bn = /^\[object .+?Constructor\]$/, ri = /^0o[0-7]+$/i, Nt = /^(?:0|[1-9]\d*)$/, Zi = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, kn = /($^)/, cn = /['\n\r\u2028\u2029\\]/g, $t = "\\ud800-\\udfff", Ri = "\\u0300-\\u036f", Fr = "\\ufe20-\\ufe2f", fs = "\\u20d0-\\u20ff", pi = Ri + Fr + fs, wr = "\\u2700-\\u27bf", Hi = "a-z\\xdf-\\xf6\\xf8-\\xff", $r = "\\xac\\xb1\\xd7\\xf7", Jr = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rr = "\\u2000-\\u206f", et = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", bt = "A-Z\\xc0-\\xd6\\xd8-\\xde", sr = "\\ufe0e\\ufe0f", xn = $r + Jr + rr + et, gi = "['’]", Mr = "[" + $t + "]", Ve = "[" + xn + "]", Ct = "[" + pi + "]", Go = "\\d+", Uo = "[" + wr + "]", Pi = "[" + Hi + "]", Bl = "[^" + $t + xn + Go + wr + Hi + bt + "]", xs = "\\ud83c[\\udffb-\\udfff]", ps = "(?:" + Ct + "|" + xs + ")", hn = "[^" + $t + "]", Br = "(?:\\ud83c[\\udde6-\\uddff]){2}", gs = "[\\ud800-\\udbff][\\udc00-\\udfff]", Sr = "[" + bt + "]", zo = "\\u200d", Fs = "(?:" + Pi + "|" + Bl + ")", wa = "(?:" + Sr + "|" + Bl + ")", Vo = "(?:" + gi + "(?:d|ll|m|re|s|t|ve))?", so = "(?:" + gi + "(?:D|LL|M|RE|S|T|VE))?", Wo = ps + "?", Zo = "[" + sr + "]?", Ho = "(?:" + zo + "(?:" + [hn, Br, gs].join("|") + ")" + Zo + Wo + ")*", kl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", Sa = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Gl = Zo + Wo + Ho, je = "(?:" + [Uo, Br, gs].join("|") + ")" + Gl, Ar = "(?:" + [hn + Ct + "?", Ct, Br, gs, Mr].join("|") + ")", Mt = RegExp(gi, "g"), Ul = RegExp(Ct, "g"), oo = RegExp(xs + "(?=" + xs + ")|" + Ar + Gl, "g"), Aa = RegExp([
        Sr + "?" + Pi + "+" + Vo + "(?=" + [Ve, Sr, "$"].join("|") + ")",
        wa + "+" + so + "(?=" + [Ve, Sr + Fs, "$"].join("|") + ")",
        Sr + "?" + Fs + "+" + Vo,
        Sr + "+" + so,
        Sa,
        kl,
        Go,
        je
      ].join("|"), "g"), ba = RegExp("[" + zo + $t + pi + sr + "]"), _s = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ca = [
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
      ], ao = -1, tt = {};
      tt[tr] = tt[Qn] = tt[Li] = tt[qn] = tt[ei] = tt[Ii] = tt[Ni] = tt[nn] = tt[ti] = !0, tt[Qe] = tt[Ye] = tt[Sn] = tt[un] = tt[Yn] = tt[ci] = tt[Zn] = tt[Dn] = tt[pn] = tt[jn] = tt[_n] = tt[Hn] = tt[Kt] = tt[Xn] = tt[Rn] = !1;
      var yt = {};
      yt[Qe] = yt[Ye] = yt[Sn] = yt[Yn] = yt[un] = yt[ci] = yt[tr] = yt[Qn] = yt[Li] = yt[qn] = yt[ei] = yt[pn] = yt[jn] = yt[_n] = yt[Hn] = yt[Kt] = yt[Xn] = yt[Ci] = yt[Ii] = yt[Ni] = yt[nn] = yt[ti] = !0, yt[Zn] = yt[Dn] = yt[Rn] = !1;
      var zl = {
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
      }, Vl = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, cc = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Wl = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, Oa = parseFloat, hc = parseInt, La = typeof Nu == "object" && Nu && Nu.Object === Object && Nu, _t = typeof self == "object" && self && self.Object === Object && self, Gn = La || _t || Function("return this")(), xi = i && !i.nodeType && i, or = xi && !0 && o && !o.nodeType && o, Ia = or && or.exports === xi, Na = Ia && La.process, _i = (function() {
        try {
          var F = or && or.require && or.require("util").types;
          return F || Na && Na.binding && Na.binding("util");
        } catch {
        }
      })(), Zl = _i && _i.isArrayBuffer, Da = _i && _i.isDate, Hl = _i && _i.isMap, Yl = _i && _i.isRegExp, Yo = _i && _i.isSet, ql = _i && _i.isTypedArray;
      function rn(F, $, Y) {
        switch (Y.length) {
          case 0:
            return F.call($);
          case 1:
            return F.call($, Y[0]);
          case 2:
            return F.call($, Y[0], Y[1]);
          case 3:
            return F.call($, Y[0], Y[1], Y[2]);
        }
        return F.apply($, Y);
      }
      function dc(F, $, Y, be) {
        for (var $e = -1, Et = F == null ? 0 : F.length; ++$e < Et; ) {
          var Cn = F[$e];
          $(be, Cn, Y(Cn), F);
        }
        return be;
      }
      function Fi(F, $) {
        for (var Y = -1, be = F == null ? 0 : F.length; ++Y < be && $(F[Y], Y, F) !== !1; )
          ;
        return F;
      }
      function jr(F, $) {
        for (var Y = F == null ? 0 : F.length; Y-- && $(F[Y], Y, F) !== !1; )
          ;
        return F;
      }
      function Ra(F, $) {
        for (var Y = -1, be = F == null ? 0 : F.length; ++Y < be; )
          if (!$(F[Y], Y, F))
            return !1;
        return !0;
      }
      function kr(F, $) {
        for (var Y = -1, be = F == null ? 0 : F.length, $e = 0, Et = []; ++Y < be; ) {
          var Cn = F[Y];
          $(Cn, Y, F) && (Et[$e++] = Cn);
        }
        return Et;
      }
      function Ms(F, $) {
        var Y = F == null ? 0 : F.length;
        return !!Y && Bs(F, $, 0) > -1;
      }
      function Pa(F, $, Y) {
        for (var be = -1, $e = F == null ? 0 : F.length; ++be < $e; )
          if (Y($, F[be]))
            return !0;
        return !1;
      }
      function Ut(F, $) {
        for (var Y = -1, be = F == null ? 0 : F.length, $e = Array(be); ++Y < be; )
          $e[Y] = $(F[Y], Y, F);
        return $e;
      }
      function Gr(F, $) {
        for (var Y = -1, be = $.length, $e = F.length; ++Y < be; )
          F[$e + Y] = $[Y];
        return F;
      }
      function xa(F, $, Y, be) {
        var $e = -1, Et = F == null ? 0 : F.length;
        for (be && Et && (Y = F[++$e]); ++$e < Et; )
          Y = $(Y, F[$e], $e, F);
        return Y;
      }
      function fc(F, $, Y, be) {
        var $e = F == null ? 0 : F.length;
        for (be && $e && (Y = F[--$e]); $e--; )
          Y = $(Y, F[$e], $e, F);
        return Y;
      }
      function lo(F, $) {
        for (var Y = -1, be = F == null ? 0 : F.length; ++Y < be; )
          if ($(F[Y], Y, F))
            return !0;
        return !1;
      }
      var pc = qo("length");
      function Kl(F) {
        return F.split("");
      }
      function $l(F) {
        return F.match(Wi) || [];
      }
      function uo(F, $, Y) {
        var be;
        return Y(F, function($e, Et, Cn) {
          if ($($e, Et, Cn))
            return be = Et, !1;
        }), be;
      }
      function br(F, $, Y, be) {
        for (var $e = F.length, Et = Y + (be ? 1 : -1); be ? Et-- : ++Et < $e; )
          if ($(F[Et], Et, F))
            return Et;
        return -1;
      }
      function Bs(F, $, Y) {
        return $ === $ ? Us(F, $, Y) : br(F, Mi, Y);
      }
      function co(F, $, Y, be) {
        for (var $e = Y - 1, Et = F.length; ++$e < Et; )
          if (be(F[$e], $))
            return $e;
        return -1;
      }
      function Mi(F) {
        return F !== F;
      }
      function Fa(F, $) {
        var Y = F == null ? 0 : F.length;
        return Y ? ka(F, $) / Y : Le;
      }
      function qo(F) {
        return function($) {
          return $ == null ? n : $[F];
        };
      }
      function Ma(F) {
        return function($) {
          return F == null ? n : F[$];
        };
      }
      function Ko(F, $, Y, be, $e) {
        return $e(F, function(Et, Cn, Dt) {
          Y = be ? (be = !1, Et) : $(Y, Et, Cn, Dt);
        }), Y;
      }
      function Ba(F, $) {
        var Y = F.length;
        for (F.sort($); Y--; )
          F[Y] = F[Y].value;
        return F;
      }
      function ka(F, $) {
        for (var Y, be = -1, $e = F.length; ++be < $e; ) {
          var Et = $(F[be]);
          Et !== n && (Y = Y === n ? Et : Y + Et);
        }
        return Y;
      }
      function Ga(F, $) {
        for (var Y = -1, be = Array(F); ++Y < F; )
          be[Y] = $(Y);
        return be;
      }
      function Jl(F, $) {
        return Ut($, function(Y) {
          return [Y, F[Y]];
        });
      }
      function jl(F) {
        return F && F.slice(0, za(F) + 1).replace(Pt, "");
      }
      function Jt(F) {
        return function($) {
          return F($);
        };
      }
      function Xr(F, $) {
        return Ut($, function(Y) {
          return F[Y];
        });
      }
      function ho(F, $) {
        return F.has($);
      }
      function Cr(F, $) {
        for (var Y = -1, be = F.length; ++Y < be && Bs($, F[Y], 0) > -1; )
          ;
        return Y;
      }
      function Xl(F, $) {
        for (var Y = F.length; Y-- && Bs($, F[Y], 0) > -1; )
          ;
        return Y;
      }
      function ks(F, $) {
        for (var Y = F.length, be = 0; Y--; )
          F[Y] === $ && ++be;
        return be;
      }
      var gc = Ma(zl), fo = Ma(Vl);
      function Ql(F) {
        return "\\" + Wl[F];
      }
      function $o(F, $) {
        return F == null ? n : F[$];
      }
      function Gs(F) {
        return ba.test(F);
      }
      function Qr(F) {
        return _s.test(F);
      }
      function Jo(F) {
        for (var $, Y = []; !($ = F.next()).done; )
          Y.push($.value);
        return Y;
      }
      function Ua(F) {
        var $ = -1, Y = Array(F.size);
        return F.forEach(function(be, $e) {
          Y[++$] = [$e, be];
        }), Y;
      }
      function jo(F, $) {
        return function(Y) {
          return F($(Y));
        };
      }
      function es(F, $) {
        for (var Y = -1, be = F.length, $e = 0, Et = []; ++Y < be; ) {
          var Cn = F[Y];
          (Cn === $ || Cn === A) && (F[Y] = A, Et[$e++] = Y);
        }
        return Et;
      }
      function Yi(F) {
        var $ = -1, Y = Array(F.size);
        return F.forEach(function(be) {
          Y[++$] = be;
        }), Y;
      }
      function _c(F) {
        var $ = -1, Y = Array(F.size);
        return F.forEach(function(be) {
          Y[++$] = [be, be];
        }), Y;
      }
      function Us(F, $, Y) {
        for (var be = Y - 1, $e = F.length; ++be < $e; )
          if (F[be] === $)
            return be;
        return -1;
      }
      function mc(F, $, Y) {
        for (var be = Y + 1; be--; )
          if (F[be] === $)
            return be;
        return be;
      }
      function mi(F) {
        return Gs(F) ? Xo(F) : pc(F);
      }
      function vi(F) {
        return Gs(F) ? Wa(F) : Kl(F);
      }
      function za(F) {
        for (var $ = F.length; $-- && Lt.test(F.charAt($)); )
          ;
        return $;
      }
      var Va = Ma(cc);
      function Xo(F) {
        for (var $ = oo.lastIndex = 0; oo.test(F); )
          ++$;
        return $;
      }
      function Wa(F) {
        return F.match(oo) || [];
      }
      function Qo(F) {
        return F.match(Aa) || [];
      }
      var zs = (function F($) {
        $ = $ == null ? Gn : Ur.defaults(Gn.Object(), $, Ur.pick(Gn, Ca));
        var Y = $.Array, be = $.Date, $e = $.Error, Et = $.Function, Cn = $.Math, Dt = $.Object, Za = $.RegExp, Or = $.String, si = $.TypeError, ea = Y.prototype, ta = Et.prototype, Vs = Dt.prototype, po = $["__core-js_shared__"], na = ta.toString, mt = Vs.hasOwnProperty, vc = 0, ms = (function() {
          var t = /[^.]+$/.exec(po && po.keys && po.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        })(), go = Vs.toString, eu = na.call(Dt), yc = Gn._, zr = Za(
          "^" + na.call(mt).replace(ft, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), _o = Ia ? $.Buffer : n, Vr = $.Symbol, ts = $.Uint8Array, tu = _o ? _o.allocUnsafe : n, vs = jo(Dt.getPrototypeOf, Dt), Ws = Dt.create, Ha = Vs.propertyIsEnumerable, mo = ea.splice, nu = Vr ? Vr.isConcatSpreadable : n, Zs = Vr ? Vr.iterator : n, ns = Vr ? Vr.toStringTag : n, vo = (function() {
          try {
            var t = Oo(Dt, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        })(), iu = $.clearTimeout !== Gn.clearTimeout && $.clearTimeout, ru = be && be.now !== Gn.Date.now && be.now, Ec = $.setTimeout !== Gn.setTimeout && $.setTimeout, yo = Cn.ceil, Eo = Cn.floor, Ya = Dt.getOwnPropertySymbols, e = _o ? _o.isBuffer : n, r = $.isFinite, a = ea.join, c = jo(Dt.keys, Dt), p = Cn.max, E = Cn.min, N = be.now, k = $.parseInt, H = Cn.random, se = ea.reverse, Se = Oo($, "DataView"), xe = Oo($, "Map"), rt = Oo($, "Promise"), mn = Oo($, "Set"), sn = Oo($, "WeakMap"), Kn = Oo(Dt, "create"), Un = sn && new sn(), ar = {}, Tc = Lo(Se), wc = Lo(xe), Sc = Lo(rt), su = Lo(mn), Ac = Lo(sn), To = Vr ? Vr.prototype : n, Wt = To ? To.valueOf : n, wo = To ? To.toString : n;
        function T(t) {
          if (vn(t) && !nt(t) && !(t instanceof ct)) {
            if (t instanceof yi)
              return t;
            if (mt.call(t, "__wrapped__"))
              return af(t);
          }
          return new yi(t);
        }
        var Hs = /* @__PURE__ */ (function() {
          function t() {
          }
          return function(s) {
            if (!dn(s))
              return {};
            if (Ws)
              return Ws(s);
            t.prototype = s;
            var u = new t();
            return t.prototype = n, u;
          };
        })();
        function ia() {
        }
        function yi(t, s) {
          this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!s, this.__index__ = 0, this.__values__ = n;
        }
        T.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: ce,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: q,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: ve,
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
        }, T.prototype = ia.prototype, T.prototype.constructor = T, yi.prototype = Hs(ia.prototype), yi.prototype.constructor = yi;
        function ct(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Me, this.__views__ = [];
        }
        function bc() {
          var t = new ct(this.__wrapped__);
          return t.__actions__ = qi(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = qi(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = qi(this.__views__), t;
        }
        function jg() {
          if (this.__filtered__) {
            var t = new ct(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function Xg() {
          var t = this.__wrapped__.value(), s = this.__dir__, u = nt(t), d = s < 0, _ = u ? t.length : 0, w = cm(0, _, this.__views__), O = w.start, R = w.end, M = R - O, Q = d ? R : O - 1, ee = this.__iteratees__, ae = ee.length, Te = 0, De = E(M, this.__takeCount__);
          if (!u || !d && _ == M && De == M)
            return Id(t, this.__actions__);
          var Ue = [];
          e:
            for (; M-- && Te < De; ) {
              Q += s;
              for (var lt = -1, ze = t[Q]; ++lt < ae; ) {
                var gt = ee[lt], vt = gt.iteratee, cr = gt.type, Gi = vt(ze);
                if (cr == Ae)
                  ze = Gi;
                else if (!Gi) {
                  if (cr == ge)
                    continue e;
                  break e;
                }
              }
              Ue[Te++] = ze;
            }
          return Ue;
        }
        ct.prototype = Hs(ia.prototype), ct.prototype.constructor = ct;
        function So(t) {
          var s = -1, u = t == null ? 0 : t.length;
          for (this.clear(); ++s < u; ) {
            var d = t[s];
            this.set(d[0], d[1]);
          }
        }
        function Qg() {
          this.__data__ = Kn ? Kn(null) : {}, this.size = 0;
        }
        function e_(t) {
          var s = this.has(t) && delete this.__data__[t];
          return this.size -= s ? 1 : 0, s;
        }
        function t_(t) {
          var s = this.__data__;
          if (Kn) {
            var u = s[t];
            return u === y ? n : u;
          }
          return mt.call(s, t) ? s[t] : n;
        }
        function n_(t) {
          var s = this.__data__;
          return Kn ? s[t] !== n : mt.call(s, t);
        }
        function i_(t, s) {
          var u = this.__data__;
          return this.size += this.has(t) ? 0 : 1, u[t] = Kn && s === n ? y : s, this;
        }
        So.prototype.clear = Qg, So.prototype.delete = e_, So.prototype.get = t_, So.prototype.has = n_, So.prototype.set = i_;
        function ys(t) {
          var s = -1, u = t == null ? 0 : t.length;
          for (this.clear(); ++s < u; ) {
            var d = t[s];
            this.set(d[0], d[1]);
          }
        }
        function r_() {
          this.__data__ = [], this.size = 0;
        }
        function s_(t) {
          var s = this.__data__, u = ou(s, t);
          if (u < 0)
            return !1;
          var d = s.length - 1;
          return u == d ? s.pop() : mo.call(s, u, 1), --this.size, !0;
        }
        function o_(t) {
          var s = this.__data__, u = ou(s, t);
          return u < 0 ? n : s[u][1];
        }
        function a_(t) {
          return ou(this.__data__, t) > -1;
        }
        function l_(t, s) {
          var u = this.__data__, d = ou(u, t);
          return d < 0 ? (++this.size, u.push([t, s])) : u[d][1] = s, this;
        }
        ys.prototype.clear = r_, ys.prototype.delete = s_, ys.prototype.get = o_, ys.prototype.has = a_, ys.prototype.set = l_;
        function Es(t) {
          var s = -1, u = t == null ? 0 : t.length;
          for (this.clear(); ++s < u; ) {
            var d = t[s];
            this.set(d[0], d[1]);
          }
        }
        function u_() {
          this.size = 0, this.__data__ = {
            hash: new So(),
            map: new (xe || ys)(),
            string: new So()
          };
        }
        function c_(t) {
          var s = vu(this, t).delete(t);
          return this.size -= s ? 1 : 0, s;
        }
        function h_(t) {
          return vu(this, t).get(t);
        }
        function d_(t) {
          return vu(this, t).has(t);
        }
        function f_(t, s) {
          var u = vu(this, t), d = u.size;
          return u.set(t, s), this.size += u.size == d ? 0 : 1, this;
        }
        Es.prototype.clear = u_, Es.prototype.delete = c_, Es.prototype.get = h_, Es.prototype.has = d_, Es.prototype.set = f_;
        function Ao(t) {
          var s = -1, u = t == null ? 0 : t.length;
          for (this.__data__ = new Es(); ++s < u; )
            this.add(t[s]);
        }
        function p_(t) {
          return this.__data__.set(t, y), this;
        }
        function g_(t) {
          return this.__data__.has(t);
        }
        Ao.prototype.add = Ao.prototype.push = p_, Ao.prototype.has = g_;
        function Wr(t) {
          var s = this.__data__ = new ys(t);
          this.size = s.size;
        }
        function __() {
          this.__data__ = new ys(), this.size = 0;
        }
        function m_(t) {
          var s = this.__data__, u = s.delete(t);
          return this.size = s.size, u;
        }
        function v_(t) {
          return this.__data__.get(t);
        }
        function y_(t) {
          return this.__data__.has(t);
        }
        function E_(t, s) {
          var u = this.__data__;
          if (u instanceof ys) {
            var d = u.__data__;
            if (!xe || d.length < h - 1)
              return d.push([t, s]), this.size = ++u.size, this;
            u = this.__data__ = new Es(d);
          }
          return u.set(t, s), this.size = u.size, this;
        }
        Wr.prototype.clear = __, Wr.prototype.delete = m_, Wr.prototype.get = v_, Wr.prototype.has = y_, Wr.prototype.set = E_;
        function od(t, s) {
          var u = nt(t), d = !u && Io(t), _ = !u && !d && Js(t), w = !u && !d && !_ && aa(t), O = u || d || _ || w, R = O ? Ga(t.length, Or) : [], M = R.length;
          for (var Q in t)
            (s || mt.call(t, Q)) && !(O && // Safari 9 has enumerable `arguments.length` in strict mode.
            (Q == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            _ && (Q == "offset" || Q == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            w && (Q == "buffer" || Q == "byteLength" || Q == "byteOffset") || // Skip index properties.
            As(Q, M))) && R.push(Q);
          return R;
        }
        function ad(t) {
          var s = t.length;
          return s ? t[Mc(0, s - 1)] : n;
        }
        function T_(t, s) {
          return yu(qi(t), bo(s, 0, t.length));
        }
        function w_(t) {
          return yu(qi(t));
        }
        function Cc(t, s, u) {
          (u !== n && !Zr(t[s], u) || u === n && !(s in t)) && Ts(t, s, u);
        }
        function qa(t, s, u) {
          var d = t[s];
          (!(mt.call(t, s) && Zr(d, u)) || u === n && !(s in t)) && Ts(t, s, u);
        }
        function ou(t, s) {
          for (var u = t.length; u--; )
            if (Zr(t[u][0], s))
              return u;
          return -1;
        }
        function S_(t, s, u, d) {
          return Ys(t, function(_, w, O) {
            s(d, _, u(_), O);
          }), d;
        }
        function ld(t, s) {
          return t && rs(s, $n(s), t);
        }
        function A_(t, s) {
          return t && rs(s, $i(s), t);
        }
        function Ts(t, s, u) {
          s == "__proto__" && vo ? vo(t, s, {
            configurable: !0,
            enumerable: !0,
            value: u,
            writable: !0
          }) : t[s] = u;
        }
        function Oc(t, s) {
          for (var u = -1, d = s.length, _ = Y(d), w = t == null; ++u < d; )
            _[u] = w ? n : ah(t, s[u]);
          return _;
        }
        function bo(t, s, u) {
          return t === t && (u !== n && (t = t <= u ? t : u), s !== n && (t = t >= s ? t : s)), t;
        }
        function Lr(t, s, u, d, _, w) {
          var O, R = s & S, M = s & I, Q = s & D;
          if (u && (O = _ ? u(t, d, _, w) : u(t)), O !== n)
            return O;
          if (!dn(t))
            return t;
          var ee = nt(t);
          if (ee) {
            if (O = dm(t), !R)
              return qi(t, O);
          } else {
            var ae = Ei(t), Te = ae == Dn || ae == bi;
            if (Js(t))
              return Rd(t, R);
            if (ae == _n || ae == Qe || Te && !_) {
              if (O = M || Te ? {} : jd(t), !R)
                return M ? tm(t, A_(O, t)) : em(t, ld(O, t));
            } else {
              if (!yt[ae])
                return _ ? t : {};
              O = fm(t, ae, R);
            }
          }
          w || (w = new Wr());
          var De = w.get(t);
          if (De)
            return De;
          w.set(t, O), Of(t) ? t.forEach(function(ze) {
            O.add(Lr(ze, s, u, ze, t, w));
          }) : bf(t) && t.forEach(function(ze, gt) {
            O.set(gt, Lr(ze, s, u, gt, t, w));
          });
          var Ue = Q ? M ? qc : Yc : M ? $i : $n, lt = ee ? n : Ue(t);
          return Fi(lt || t, function(ze, gt) {
            lt && (gt = ze, ze = t[gt]), qa(O, gt, Lr(ze, s, u, gt, t, w));
          }), O;
        }
        function b_(t) {
          var s = $n(t);
          return function(u) {
            return ud(u, t, s);
          };
        }
        function ud(t, s, u) {
          var d = u.length;
          if (t == null)
            return !d;
          for (t = Dt(t); d--; ) {
            var _ = u[d], w = s[_], O = t[_];
            if (O === n && !(_ in t) || !w(O))
              return !1;
          }
          return !0;
        }
        function cd(t, s, u) {
          if (typeof t != "function")
            throw new si(g);
          return el(function() {
            t.apply(n, u);
          }, s);
        }
        function Ka(t, s, u, d) {
          var _ = -1, w = Ms, O = !0, R = t.length, M = [], Q = s.length;
          if (!R)
            return M;
          u && (s = Ut(s, Jt(u))), d ? (w = Pa, O = !1) : s.length >= h && (w = ho, O = !1, s = new Ao(s));
          e:
            for (; ++_ < R; ) {
              var ee = t[_], ae = u == null ? ee : u(ee);
              if (ee = d || ee !== 0 ? ee : 0, O && ae === ae) {
                for (var Te = Q; Te--; )
                  if (s[Te] === ae)
                    continue e;
                M.push(ee);
              } else w(s, ae, d) || M.push(ee);
            }
          return M;
        }
        var Ys = Bd(is), hd = Bd(Ic, !0);
        function C_(t, s) {
          var u = !0;
          return Ys(t, function(d, _, w) {
            return u = !!s(d, _, w), u;
          }), u;
        }
        function au(t, s, u) {
          for (var d = -1, _ = t.length; ++d < _; ) {
            var w = t[d], O = s(w);
            if (O != null && (R === n ? O === O && !ur(O) : u(O, R)))
              var R = O, M = w;
          }
          return M;
        }
        function O_(t, s, u, d) {
          var _ = t.length;
          for (u = at(u), u < 0 && (u = -u > _ ? 0 : _ + u), d = d === n || d > _ ? _ : at(d), d < 0 && (d += _), d = u > d ? 0 : If(d); u < d; )
            t[u++] = s;
          return t;
        }
        function dd(t, s) {
          var u = [];
          return Ys(t, function(d, _, w) {
            s(d, _, w) && u.push(d);
          }), u;
        }
        function oi(t, s, u, d, _) {
          var w = -1, O = t.length;
          for (u || (u = gm), _ || (_ = []); ++w < O; ) {
            var R = t[w];
            s > 0 && u(R) ? s > 1 ? oi(R, s - 1, u, d, _) : Gr(_, R) : d || (_[_.length] = R);
          }
          return _;
        }
        var Lc = kd(), fd = kd(!0);
        function is(t, s) {
          return t && Lc(t, s, $n);
        }
        function Ic(t, s) {
          return t && fd(t, s, $n);
        }
        function lu(t, s) {
          return kr(s, function(u) {
            return bs(t[u]);
          });
        }
        function Co(t, s) {
          s = Ks(s, t);
          for (var u = 0, d = s.length; t != null && u < d; )
            t = t[ss(s[u++])];
          return u && u == d ? t : n;
        }
        function pd(t, s, u) {
          var d = s(t);
          return nt(t) ? d : Gr(d, u(t));
        }
        function Bi(t) {
          return t == null ? t === n ? hi : gn : ns && ns in Dt(t) ? um(t) : wm(t);
        }
        function Nc(t, s) {
          return t > s;
        }
        function L_(t, s) {
          return t != null && mt.call(t, s);
        }
        function I_(t, s) {
          return t != null && s in Dt(t);
        }
        function N_(t, s, u) {
          return t >= E(s, u) && t < p(s, u);
        }
        function Dc(t, s, u) {
          for (var d = u ? Pa : Ms, _ = t[0].length, w = t.length, O = w, R = Y(w), M = 1 / 0, Q = []; O--; ) {
            var ee = t[O];
            O && s && (ee = Ut(ee, Jt(s))), M = E(ee.length, M), R[O] = !u && (s || _ >= 120 && ee.length >= 120) ? new Ao(O && ee) : n;
          }
          ee = t[0];
          var ae = -1, Te = R[0];
          e:
            for (; ++ae < _ && Q.length < M; ) {
              var De = ee[ae], Ue = s ? s(De) : De;
              if (De = u || De !== 0 ? De : 0, !(Te ? ho(Te, Ue) : d(Q, Ue, u))) {
                for (O = w; --O; ) {
                  var lt = R[O];
                  if (!(lt ? ho(lt, Ue) : d(t[O], Ue, u)))
                    continue e;
                }
                Te && Te.push(Ue), Q.push(De);
              }
            }
          return Q;
        }
        function D_(t, s, u, d) {
          return is(t, function(_, w, O) {
            s(d, u(_), w, O);
          }), d;
        }
        function $a(t, s, u) {
          s = Ks(s, t), t = tf(t, s);
          var d = t == null ? t : t[ss(Nr(s))];
          return d == null ? n : rn(d, t, u);
        }
        function gd(t) {
          return vn(t) && Bi(t) == Qe;
        }
        function R_(t) {
          return vn(t) && Bi(t) == Sn;
        }
        function P_(t) {
          return vn(t) && Bi(t) == ci;
        }
        function Ja(t, s, u, d, _) {
          return t === s ? !0 : t == null || s == null || !vn(t) && !vn(s) ? t !== t && s !== s : x_(t, s, u, d, Ja, _);
        }
        function x_(t, s, u, d, _, w) {
          var O = nt(t), R = nt(s), M = O ? Ye : Ei(t), Q = R ? Ye : Ei(s);
          M = M == Qe ? _n : M, Q = Q == Qe ? _n : Q;
          var ee = M == _n, ae = Q == _n, Te = M == Q;
          if (Te && Js(t)) {
            if (!Js(s))
              return !1;
            O = !0, ee = !1;
          }
          if (Te && !ee)
            return w || (w = new Wr()), O || aa(t) ? Kd(t, s, u, d, _, w) : am(t, s, M, u, d, _, w);
          if (!(u & B)) {
            var De = ee && mt.call(t, "__wrapped__"), Ue = ae && mt.call(s, "__wrapped__");
            if (De || Ue) {
              var lt = De ? t.value() : t, ze = Ue ? s.value() : s;
              return w || (w = new Wr()), _(lt, ze, u, d, w);
            }
          }
          return Te ? (w || (w = new Wr()), lm(t, s, u, d, _, w)) : !1;
        }
        function F_(t) {
          return vn(t) && Ei(t) == pn;
        }
        function Rc(t, s, u, d) {
          var _ = u.length, w = _, O = !d;
          if (t == null)
            return !w;
          for (t = Dt(t); _--; ) {
            var R = u[_];
            if (O && R[2] ? R[1] !== t[R[0]] : !(R[0] in t))
              return !1;
          }
          for (; ++_ < w; ) {
            R = u[_];
            var M = R[0], Q = t[M], ee = R[1];
            if (O && R[2]) {
              if (Q === n && !(M in t))
                return !1;
            } else {
              var ae = new Wr();
              if (d)
                var Te = d(Q, ee, M, t, s, ae);
              if (!(Te === n ? Ja(ee, Q, B | G, d, ae) : Te))
                return !1;
            }
          }
          return !0;
        }
        function _d(t) {
          if (!dn(t) || mm(t))
            return !1;
          var s = bs(t) ? zr : bn;
          return s.test(Lo(t));
        }
        function M_(t) {
          return vn(t) && Bi(t) == Hn;
        }
        function B_(t) {
          return vn(t) && Ei(t) == Kt;
        }
        function k_(t) {
          return vn(t) && bu(t.length) && !!tt[Bi(t)];
        }
        function md(t) {
          return typeof t == "function" ? t : t == null ? Ji : typeof t == "object" ? nt(t) ? Ed(t[0], t[1]) : yd(t) : Uf(t);
        }
        function Pc(t) {
          if (!Qa(t))
            return c(t);
          var s = [];
          for (var u in Dt(t))
            mt.call(t, u) && u != "constructor" && s.push(u);
          return s;
        }
        function G_(t) {
          if (!dn(t))
            return Tm(t);
          var s = Qa(t), u = [];
          for (var d in t)
            d == "constructor" && (s || !mt.call(t, d)) || u.push(d);
          return u;
        }
        function xc(t, s) {
          return t < s;
        }
        function vd(t, s) {
          var u = -1, d = Ki(t) ? Y(t.length) : [];
          return Ys(t, function(_, w, O) {
            d[++u] = s(_, w, O);
          }), d;
        }
        function yd(t) {
          var s = $c(t);
          return s.length == 1 && s[0][2] ? Qd(s[0][0], s[0][1]) : function(u) {
            return u === t || Rc(u, t, s);
          };
        }
        function Ed(t, s) {
          return jc(t) && Xd(s) ? Qd(ss(t), s) : function(u) {
            var d = ah(u, t);
            return d === n && d === s ? lh(u, t) : Ja(s, d, B | G);
          };
        }
        function uu(t, s, u, d, _) {
          t !== s && Lc(s, function(w, O) {
            if (_ || (_ = new Wr()), dn(w))
              U_(t, s, O, u, uu, d, _);
            else {
              var R = d ? d(Qc(t, O), w, O + "", t, s, _) : n;
              R === n && (R = w), Cc(t, O, R);
            }
          }, $i);
        }
        function U_(t, s, u, d, _, w, O) {
          var R = Qc(t, u), M = Qc(s, u), Q = O.get(M);
          if (Q) {
            Cc(t, u, Q);
            return;
          }
          var ee = w ? w(R, M, u + "", t, s, O) : n, ae = ee === n;
          if (ae) {
            var Te = nt(M), De = !Te && Js(M), Ue = !Te && !De && aa(M);
            ee = M, Te || De || Ue ? nt(R) ? ee = R : On(R) ? ee = qi(R) : De ? (ae = !1, ee = Rd(M, !0)) : Ue ? (ae = !1, ee = Pd(M, !0)) : ee = [] : tl(M) || Io(M) ? (ee = R, Io(R) ? ee = Nf(R) : (!dn(R) || bs(R)) && (ee = jd(M))) : ae = !1;
          }
          ae && (O.set(M, ee), _(ee, M, d, w, O), O.delete(M)), Cc(t, u, ee);
        }
        function Td(t, s) {
          var u = t.length;
          if (u)
            return s += s < 0 ? u : 0, As(s, u) ? t[s] : n;
        }
        function wd(t, s, u) {
          s.length ? s = Ut(s, function(w) {
            return nt(w) ? function(O) {
              return Co(O, w.length === 1 ? w[0] : w);
            } : w;
          }) : s = [Ji];
          var d = -1;
          s = Ut(s, Jt(Ge()));
          var _ = vd(t, function(w, O, R) {
            var M = Ut(s, function(Q) {
              return Q(w);
            });
            return { criteria: M, index: ++d, value: w };
          });
          return Ba(_, function(w, O) {
            return Q_(w, O, u);
          });
        }
        function z_(t, s) {
          return Sd(t, s, function(u, d) {
            return lh(t, d);
          });
        }
        function Sd(t, s, u) {
          for (var d = -1, _ = s.length, w = {}; ++d < _; ) {
            var O = s[d], R = Co(t, O);
            u(R, O) && ja(w, Ks(O, t), R);
          }
          return w;
        }
        function V_(t) {
          return function(s) {
            return Co(s, t);
          };
        }
        function Fc(t, s, u, d) {
          var _ = d ? co : Bs, w = -1, O = s.length, R = t;
          for (t === s && (s = qi(s)), u && (R = Ut(t, Jt(u))); ++w < O; )
            for (var M = 0, Q = s[w], ee = u ? u(Q) : Q; (M = _(R, ee, M, d)) > -1; )
              R !== t && mo.call(R, M, 1), mo.call(t, M, 1);
          return t;
        }
        function Ad(t, s) {
          for (var u = t ? s.length : 0, d = u - 1; u--; ) {
            var _ = s[u];
            if (u == d || _ !== w) {
              var w = _;
              As(_) ? mo.call(t, _, 1) : Gc(t, _);
            }
          }
          return t;
        }
        function Mc(t, s) {
          return t + Eo(H() * (s - t + 1));
        }
        function W_(t, s, u, d) {
          for (var _ = -1, w = p(yo((s - t) / (u || 1)), 0), O = Y(w); w--; )
            O[d ? w : ++_] = t, t += u;
          return O;
        }
        function Bc(t, s) {
          var u = "";
          if (!t || s < 1 || s > K)
            return u;
          do
            s % 2 && (u += t), s = Eo(s / 2), s && (t += t);
          while (s);
          return u;
        }
        function ht(t, s) {
          return eh(ef(t, s, Ji), t + "");
        }
        function Z_(t) {
          return ad(la(t));
        }
        function H_(t, s) {
          var u = la(t);
          return yu(u, bo(s, 0, u.length));
        }
        function ja(t, s, u, d) {
          if (!dn(t))
            return t;
          s = Ks(s, t);
          for (var _ = -1, w = s.length, O = w - 1, R = t; R != null && ++_ < w; ) {
            var M = ss(s[_]), Q = u;
            if (M === "__proto__" || M === "constructor" || M === "prototype")
              return t;
            if (_ != O) {
              var ee = R[M];
              Q = d ? d(ee, M, R) : n, Q === n && (Q = dn(ee) ? ee : As(s[_ + 1]) ? [] : {});
            }
            qa(R, M, Q), R = R[M];
          }
          return t;
        }
        var bd = Un ? function(t, s) {
          return Un.set(t, s), t;
        } : Ji, Y_ = vo ? function(t, s) {
          return vo(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: ch(s),
            writable: !0
          });
        } : Ji;
        function q_(t) {
          return yu(la(t));
        }
        function Ir(t, s, u) {
          var d = -1, _ = t.length;
          s < 0 && (s = -s > _ ? 0 : _ + s), u = u > _ ? _ : u, u < 0 && (u += _), _ = s > u ? 0 : u - s >>> 0, s >>>= 0;
          for (var w = Y(_); ++d < _; )
            w[d] = t[d + s];
          return w;
        }
        function K_(t, s) {
          var u;
          return Ys(t, function(d, _, w) {
            return u = s(d, _, w), !u;
          }), !!u;
        }
        function cu(t, s, u) {
          var d = 0, _ = t == null ? d : t.length;
          if (typeof s == "number" && s === s && _ <= en) {
            for (; d < _; ) {
              var w = d + _ >>> 1, O = t[w];
              O !== null && !ur(O) && (u ? O <= s : O < s) ? d = w + 1 : _ = w;
            }
            return _;
          }
          return kc(t, s, Ji, u);
        }
        function kc(t, s, u, d) {
          var _ = 0, w = t == null ? 0 : t.length;
          if (w === 0)
            return 0;
          s = u(s);
          for (var O = s !== s, R = s === null, M = ur(s), Q = s === n; _ < w; ) {
            var ee = Eo((_ + w) / 2), ae = u(t[ee]), Te = ae !== n, De = ae === null, Ue = ae === ae, lt = ur(ae);
            if (O)
              var ze = d || Ue;
            else Q ? ze = Ue && (d || Te) : R ? ze = Ue && Te && (d || !De) : M ? ze = Ue && Te && !De && (d || !lt) : De || lt ? ze = !1 : ze = d ? ae <= s : ae < s;
            ze ? _ = ee + 1 : w = ee;
          }
          return E(w, kt);
        }
        function Cd(t, s) {
          for (var u = -1, d = t.length, _ = 0, w = []; ++u < d; ) {
            var O = t[u], R = s ? s(O) : O;
            if (!u || !Zr(R, M)) {
              var M = R;
              w[_++] = O === 0 ? 0 : O;
            }
          }
          return w;
        }
        function Od(t) {
          return typeof t == "number" ? t : ur(t) ? Le : +t;
        }
        function lr(t) {
          if (typeof t == "string")
            return t;
          if (nt(t))
            return Ut(t, lr) + "";
          if (ur(t))
            return wo ? wo.call(t) : "";
          var s = t + "";
          return s == "0" && 1 / t == -oe ? "-0" : s;
        }
        function qs(t, s, u) {
          var d = -1, _ = Ms, w = t.length, O = !0, R = [], M = R;
          if (u)
            O = !1, _ = Pa;
          else if (w >= h) {
            var Q = s ? null : sm(t);
            if (Q)
              return Yi(Q);
            O = !1, _ = ho, M = new Ao();
          } else
            M = s ? [] : R;
          e:
            for (; ++d < w; ) {
              var ee = t[d], ae = s ? s(ee) : ee;
              if (ee = u || ee !== 0 ? ee : 0, O && ae === ae) {
                for (var Te = M.length; Te--; )
                  if (M[Te] === ae)
                    continue e;
                s && M.push(ae), R.push(ee);
              } else _(M, ae, u) || (M !== R && M.push(ae), R.push(ee));
            }
          return R;
        }
        function Gc(t, s) {
          return s = Ks(s, t), t = tf(t, s), t == null || delete t[ss(Nr(s))];
        }
        function Ld(t, s, u, d) {
          return ja(t, s, u(Co(t, s)), d);
        }
        function hu(t, s, u, d) {
          for (var _ = t.length, w = d ? _ : -1; (d ? w-- : ++w < _) && s(t[w], w, t); )
            ;
          return u ? Ir(t, d ? 0 : w, d ? w + 1 : _) : Ir(t, d ? w + 1 : 0, d ? _ : w);
        }
        function Id(t, s) {
          var u = t;
          return u instanceof ct && (u = u.value()), xa(s, function(d, _) {
            return _.func.apply(_.thisArg, Gr([d], _.args));
          }, u);
        }
        function Uc(t, s, u) {
          var d = t.length;
          if (d < 2)
            return d ? qs(t[0]) : [];
          for (var _ = -1, w = Y(d); ++_ < d; )
            for (var O = t[_], R = -1; ++R < d; )
              R != _ && (w[_] = Ka(w[_] || O, t[R], s, u));
          return qs(oi(w, 1), s, u);
        }
        function Nd(t, s, u) {
          for (var d = -1, _ = t.length, w = s.length, O = {}; ++d < _; ) {
            var R = d < w ? s[d] : n;
            u(O, t[d], R);
          }
          return O;
        }
        function zc(t) {
          return On(t) ? t : [];
        }
        function Vc(t) {
          return typeof t == "function" ? t : Ji;
        }
        function Ks(t, s) {
          return nt(t) ? t : jc(t, s) ? [t] : of(Rt(t));
        }
        var $_ = ht;
        function $s(t, s, u) {
          var d = t.length;
          return u = u === n ? d : u, !s && u >= d ? t : Ir(t, s, u);
        }
        var Dd = iu || function(t) {
          return Gn.clearTimeout(t);
        };
        function Rd(t, s) {
          if (s)
            return t.slice();
          var u = t.length, d = tu ? tu(u) : new t.constructor(u);
          return t.copy(d), d;
        }
        function Wc(t) {
          var s = new t.constructor(t.byteLength);
          return new ts(s).set(new ts(t)), s;
        }
        function J_(t, s) {
          var u = s ? Wc(t.buffer) : t.buffer;
          return new t.constructor(u, t.byteOffset, t.byteLength);
        }
        function j_(t) {
          var s = new t.constructor(t.source, Gt.exec(t));
          return s.lastIndex = t.lastIndex, s;
        }
        function X_(t) {
          return Wt ? Dt(Wt.call(t)) : {};
        }
        function Pd(t, s) {
          var u = s ? Wc(t.buffer) : t.buffer;
          return new t.constructor(u, t.byteOffset, t.length);
        }
        function xd(t, s) {
          if (t !== s) {
            var u = t !== n, d = t === null, _ = t === t, w = ur(t), O = s !== n, R = s === null, M = s === s, Q = ur(s);
            if (!R && !Q && !w && t > s || w && O && M && !R && !Q || d && O && M || !u && M || !_)
              return 1;
            if (!d && !w && !Q && t < s || Q && u && _ && !d && !w || R && u && _ || !O && _ || !M)
              return -1;
          }
          return 0;
        }
        function Q_(t, s, u) {
          for (var d = -1, _ = t.criteria, w = s.criteria, O = _.length, R = u.length; ++d < O; ) {
            var M = xd(_[d], w[d]);
            if (M) {
              if (d >= R)
                return M;
              var Q = u[d];
              return M * (Q == "desc" ? -1 : 1);
            }
          }
          return t.index - s.index;
        }
        function Fd(t, s, u, d) {
          for (var _ = -1, w = t.length, O = u.length, R = -1, M = s.length, Q = p(w - O, 0), ee = Y(M + Q), ae = !d; ++R < M; )
            ee[R] = s[R];
          for (; ++_ < O; )
            (ae || _ < w) && (ee[u[_]] = t[_]);
          for (; Q--; )
            ee[R++] = t[_++];
          return ee;
        }
        function Md(t, s, u, d) {
          for (var _ = -1, w = t.length, O = -1, R = u.length, M = -1, Q = s.length, ee = p(w - R, 0), ae = Y(ee + Q), Te = !d; ++_ < ee; )
            ae[_] = t[_];
          for (var De = _; ++M < Q; )
            ae[De + M] = s[M];
          for (; ++O < R; )
            (Te || _ < w) && (ae[De + u[O]] = t[_++]);
          return ae;
        }
        function qi(t, s) {
          var u = -1, d = t.length;
          for (s || (s = Y(d)); ++u < d; )
            s[u] = t[u];
          return s;
        }
        function rs(t, s, u, d) {
          var _ = !u;
          u || (u = {});
          for (var w = -1, O = s.length; ++w < O; ) {
            var R = s[w], M = d ? d(u[R], t[R], R, u, t) : n;
            M === n && (M = t[R]), _ ? Ts(u, R, M) : qa(u, R, M);
          }
          return u;
        }
        function em(t, s) {
          return rs(t, Jc(t), s);
        }
        function tm(t, s) {
          return rs(t, $d(t), s);
        }
        function du(t, s) {
          return function(u, d) {
            var _ = nt(u) ? dc : S_, w = s ? s() : {};
            return _(u, t, Ge(d, 2), w);
          };
        }
        function ra(t) {
          return ht(function(s, u) {
            var d = -1, _ = u.length, w = _ > 1 ? u[_ - 1] : n, O = _ > 2 ? u[2] : n;
            for (w = t.length > 3 && typeof w == "function" ? (_--, w) : n, O && ki(u[0], u[1], O) && (w = _ < 3 ? n : w, _ = 1), s = Dt(s); ++d < _; ) {
              var R = u[d];
              R && t(s, R, d, w);
            }
            return s;
          });
        }
        function Bd(t, s) {
          return function(u, d) {
            if (u == null)
              return u;
            if (!Ki(u))
              return t(u, d);
            for (var _ = u.length, w = s ? _ : -1, O = Dt(u); (s ? w-- : ++w < _) && d(O[w], w, O) !== !1; )
              ;
            return u;
          };
        }
        function kd(t) {
          return function(s, u, d) {
            for (var _ = -1, w = Dt(s), O = d(s), R = O.length; R--; ) {
              var M = O[t ? R : ++_];
              if (u(w[M], M, w) === !1)
                break;
            }
            return s;
          };
        }
        function nm(t, s, u) {
          var d = s & j, _ = Xa(t);
          function w() {
            var O = this && this !== Gn && this instanceof w ? _ : t;
            return O.apply(d ? u : this, arguments);
          }
          return w;
        }
        function Gd(t) {
          return function(s) {
            s = Rt(s);
            var u = Gs(s) ? vi(s) : n, d = u ? u[0] : s.charAt(0), _ = u ? $s(u, 1).join("") : s.slice(1);
            return d[t]() + _;
          };
        }
        function sa(t) {
          return function(s) {
            return xa(kf(Bf(s).replace(Mt, "")), t, "");
          };
        }
        function Xa(t) {
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
            var u = Hs(t.prototype), d = t.apply(u, s);
            return dn(d) ? d : u;
          };
        }
        function im(t, s, u) {
          var d = Xa(t);
          function _() {
            for (var w = arguments.length, O = Y(w), R = w, M = oa(_); R--; )
              O[R] = arguments[R];
            var Q = w < 3 && O[0] !== M && O[w - 1] !== M ? [] : es(O, M);
            if (w -= Q.length, w < u)
              return Zd(
                t,
                s,
                fu,
                _.placeholder,
                n,
                O,
                Q,
                n,
                n,
                u - w
              );
            var ee = this && this !== Gn && this instanceof _ ? d : t;
            return rn(ee, this, O);
          }
          return _;
        }
        function Ud(t) {
          return function(s, u, d) {
            var _ = Dt(s);
            if (!Ki(s)) {
              var w = Ge(u, 3);
              s = $n(s), u = function(R) {
                return w(_[R], R, _);
              };
            }
            var O = t(s, u, d);
            return O > -1 ? _[w ? s[O] : O] : n;
          };
        }
        function zd(t) {
          return Ss(function(s) {
            var u = s.length, d = u, _ = yi.prototype.thru;
            for (t && s.reverse(); d--; ) {
              var w = s[d];
              if (typeof w != "function")
                throw new si(g);
              if (_ && !O && mu(w) == "wrapper")
                var O = new yi([], !0);
            }
            for (d = O ? d : u; ++d < u; ) {
              w = s[d];
              var R = mu(w), M = R == "wrapper" ? Kc(w) : n;
              M && Xc(M[0]) && M[1] == (fe | J | U | Ee) && !M[4].length && M[9] == 1 ? O = O[mu(M[0])].apply(O, M[3]) : O = w.length == 1 && Xc(w) ? O[R]() : O.thru(w);
            }
            return function() {
              var Q = arguments, ee = Q[0];
              if (O && Q.length == 1 && nt(ee))
                return O.plant(ee).value();
              for (var ae = 0, Te = u ? s[ae].apply(this, Q) : ee; ++ae < u; )
                Te = s[ae].call(this, Te);
              return Te;
            };
          });
        }
        function fu(t, s, u, d, _, w, O, R, M, Q) {
          var ee = s & fe, ae = s & j, Te = s & W, De = s & (J | P), Ue = s & he, lt = Te ? n : Xa(t);
          function ze() {
            for (var gt = arguments.length, vt = Y(gt), cr = gt; cr--; )
              vt[cr] = arguments[cr];
            if (De)
              var Gi = oa(ze), hr = ks(vt, Gi);
            if (d && (vt = Fd(vt, d, _, De)), w && (vt = Md(vt, w, O, De)), gt -= hr, De && gt < Q) {
              var Ln = es(vt, Gi);
              return Zd(
                t,
                s,
                fu,
                ze.placeholder,
                u,
                vt,
                Ln,
                R,
                M,
                Q - gt
              );
            }
            var Hr = ae ? u : this, Os = Te ? Hr[t] : t;
            return gt = vt.length, R ? vt = Sm(vt, R) : Ue && gt > 1 && vt.reverse(), ee && M < gt && (vt.length = M), this && this !== Gn && this instanceof ze && (Os = lt || Xa(Os)), Os.apply(Hr, vt);
          }
          return ze;
        }
        function Vd(t, s) {
          return function(u, d) {
            return D_(u, t, s(d), {});
          };
        }
        function pu(t, s) {
          return function(u, d) {
            var _;
            if (u === n && d === n)
              return s;
            if (u !== n && (_ = u), d !== n) {
              if (_ === n)
                return d;
              typeof u == "string" || typeof d == "string" ? (u = lr(u), d = lr(d)) : (u = Od(u), d = Od(d)), _ = t(u, d);
            }
            return _;
          };
        }
        function Zc(t) {
          return Ss(function(s) {
            return s = Ut(s, Jt(Ge())), ht(function(u) {
              var d = this;
              return t(s, function(_) {
                return rn(_, d, u);
              });
            });
          });
        }
        function gu(t, s) {
          s = s === n ? " " : lr(s);
          var u = s.length;
          if (u < 2)
            return u ? Bc(s, t) : s;
          var d = Bc(s, yo(t / mi(s)));
          return Gs(s) ? $s(vi(d), 0, t).join("") : d.slice(0, t);
        }
        function rm(t, s, u, d) {
          var _ = s & j, w = Xa(t);
          function O() {
            for (var R = -1, M = arguments.length, Q = -1, ee = d.length, ae = Y(ee + M), Te = this && this !== Gn && this instanceof O ? w : t; ++Q < ee; )
              ae[Q] = d[Q];
            for (; M--; )
              ae[Q++] = arguments[++R];
            return rn(Te, _ ? u : this, ae);
          }
          return O;
        }
        function Wd(t) {
          return function(s, u, d) {
            return d && typeof d != "number" && ki(s, u, d) && (u = d = n), s = Cs(s), u === n ? (u = s, s = 0) : u = Cs(u), d = d === n ? s < u ? 1 : -1 : Cs(d), W_(s, u, d, t);
          };
        }
        function _u(t) {
          return function(s, u) {
            return typeof s == "string" && typeof u == "string" || (s = Dr(s), u = Dr(u)), t(s, u);
          };
        }
        function Zd(t, s, u, d, _, w, O, R, M, Q) {
          var ee = s & J, ae = ee ? O : n, Te = ee ? n : O, De = ee ? w : n, Ue = ee ? n : w;
          s |= ee ? U : re, s &= ~(ee ? re : U), s & Z || (s &= -4);
          var lt = [
            t,
            s,
            _,
            De,
            ae,
            Ue,
            Te,
            R,
            M,
            Q
          ], ze = u.apply(n, lt);
          return Xc(t) && nf(ze, lt), ze.placeholder = d, rf(ze, t, s);
        }
        function Hc(t) {
          var s = Cn[t];
          return function(u, d) {
            if (u = Dr(u), d = d == null ? 0 : E(at(d), 292), d && r(u)) {
              var _ = (Rt(u) + "e").split("e"), w = s(_[0] + "e" + (+_[1] + d));
              return _ = (Rt(w) + "e").split("e"), +(_[0] + "e" + (+_[1] - d));
            }
            return s(u);
          };
        }
        var sm = mn && 1 / Yi(new mn([, -0]))[1] == oe ? function(t) {
          return new mn(t);
        } : fh;
        function Hd(t) {
          return function(s) {
            var u = Ei(s);
            return u == pn ? Ua(s) : u == Kt ? _c(s) : Jl(s, t(s));
          };
        }
        function ws(t, s, u, d, _, w, O, R) {
          var M = s & W;
          if (!M && typeof t != "function")
            throw new si(g);
          var Q = d ? d.length : 0;
          if (Q || (s &= -97, d = _ = n), O = O === n ? O : p(at(O), 0), R = R === n ? R : at(R), Q -= _ ? _.length : 0, s & re) {
            var ee = d, ae = _;
            d = _ = n;
          }
          var Te = M ? n : Kc(t), De = [
            t,
            s,
            u,
            d,
            _,
            ee,
            ae,
            w,
            O,
            R
          ];
          if (Te && Em(De, Te), t = De[0], s = De[1], u = De[2], d = De[3], _ = De[4], R = De[9] = De[9] === n ? M ? 0 : t.length : p(De[9] - Q, 0), !R && s & (J | P) && (s &= -25), !s || s == j)
            var Ue = nm(t, s, u);
          else s == J || s == P ? Ue = im(t, s, R) : (s == U || s == (j | U)) && !_.length ? Ue = rm(t, s, u, d) : Ue = fu.apply(n, De);
          var lt = Te ? bd : nf;
          return rf(lt(Ue, De), t, s);
        }
        function Yd(t, s, u, d) {
          return t === n || Zr(t, Vs[u]) && !mt.call(d, u) ? s : t;
        }
        function qd(t, s, u, d, _, w) {
          return dn(t) && dn(s) && (w.set(s, t), uu(t, s, n, qd, w), w.delete(s)), t;
        }
        function om(t) {
          return tl(t) ? n : t;
        }
        function Kd(t, s, u, d, _, w) {
          var O = u & B, R = t.length, M = s.length;
          if (R != M && !(O && M > R))
            return !1;
          var Q = w.get(t), ee = w.get(s);
          if (Q && ee)
            return Q == s && ee == t;
          var ae = -1, Te = !0, De = u & G ? new Ao() : n;
          for (w.set(t, s), w.set(s, t); ++ae < R; ) {
            var Ue = t[ae], lt = s[ae];
            if (d)
              var ze = O ? d(lt, Ue, ae, s, t, w) : d(Ue, lt, ae, t, s, w);
            if (ze !== n) {
              if (ze)
                continue;
              Te = !1;
              break;
            }
            if (De) {
              if (!lo(s, function(gt, vt) {
                if (!ho(De, vt) && (Ue === gt || _(Ue, gt, u, d, w)))
                  return De.push(vt);
              })) {
                Te = !1;
                break;
              }
            } else if (!(Ue === lt || _(Ue, lt, u, d, w))) {
              Te = !1;
              break;
            }
          }
          return w.delete(t), w.delete(s), Te;
        }
        function am(t, s, u, d, _, w, O) {
          switch (u) {
            case Yn:
              if (t.byteLength != s.byteLength || t.byteOffset != s.byteOffset)
                return !1;
              t = t.buffer, s = s.buffer;
            case Sn:
              return !(t.byteLength != s.byteLength || !w(new ts(t), new ts(s)));
            case un:
            case ci:
            case jn:
              return Zr(+t, +s);
            case Zn:
              return t.name == s.name && t.message == s.message;
            case Hn:
            case Xn:
              return t == s + "";
            case pn:
              var R = Ua;
            case Kt:
              var M = d & B;
              if (R || (R = Yi), t.size != s.size && !M)
                return !1;
              var Q = O.get(t);
              if (Q)
                return Q == s;
              d |= G, O.set(t, s);
              var ee = Kd(R(t), R(s), d, _, w, O);
              return O.delete(t), ee;
            case Ci:
              if (Wt)
                return Wt.call(t) == Wt.call(s);
          }
          return !1;
        }
        function lm(t, s, u, d, _, w) {
          var O = u & B, R = Yc(t), M = R.length, Q = Yc(s), ee = Q.length;
          if (M != ee && !O)
            return !1;
          for (var ae = M; ae--; ) {
            var Te = R[ae];
            if (!(O ? Te in s : mt.call(s, Te)))
              return !1;
          }
          var De = w.get(t), Ue = w.get(s);
          if (De && Ue)
            return De == s && Ue == t;
          var lt = !0;
          w.set(t, s), w.set(s, t);
          for (var ze = O; ++ae < M; ) {
            Te = R[ae];
            var gt = t[Te], vt = s[Te];
            if (d)
              var cr = O ? d(vt, gt, Te, s, t, w) : d(gt, vt, Te, t, s, w);
            if (!(cr === n ? gt === vt || _(gt, vt, u, d, w) : cr)) {
              lt = !1;
              break;
            }
            ze || (ze = Te == "constructor");
          }
          if (lt && !ze) {
            var Gi = t.constructor, hr = s.constructor;
            Gi != hr && "constructor" in t && "constructor" in s && !(typeof Gi == "function" && Gi instanceof Gi && typeof hr == "function" && hr instanceof hr) && (lt = !1);
          }
          return w.delete(t), w.delete(s), lt;
        }
        function Ss(t) {
          return eh(ef(t, n, cf), t + "");
        }
        function Yc(t) {
          return pd(t, $n, Jc);
        }
        function qc(t) {
          return pd(t, $i, $d);
        }
        var Kc = Un ? function(t) {
          return Un.get(t);
        } : fh;
        function mu(t) {
          for (var s = t.name + "", u = ar[s], d = mt.call(ar, s) ? u.length : 0; d--; ) {
            var _ = u[d], w = _.func;
            if (w == null || w == t)
              return _.name;
          }
          return s;
        }
        function oa(t) {
          var s = mt.call(T, "placeholder") ? T : t;
          return s.placeholder;
        }
        function Ge() {
          var t = T.iteratee || hh;
          return t = t === hh ? md : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function vu(t, s) {
          var u = t.__data__;
          return _m(s) ? u[typeof s == "string" ? "string" : "hash"] : u.map;
        }
        function $c(t) {
          for (var s = $n(t), u = s.length; u--; ) {
            var d = s[u], _ = t[d];
            s[u] = [d, _, Xd(_)];
          }
          return s;
        }
        function Oo(t, s) {
          var u = $o(t, s);
          return _d(u) ? u : n;
        }
        function um(t) {
          var s = mt.call(t, ns), u = t[ns];
          try {
            t[ns] = n;
            var d = !0;
          } catch {
          }
          var _ = go.call(t);
          return d && (s ? t[ns] = u : delete t[ns]), _;
        }
        var Jc = Ya ? function(t) {
          return t == null ? [] : (t = Dt(t), kr(Ya(t), function(s) {
            return Ha.call(t, s);
          }));
        } : ph, $d = Ya ? function(t) {
          for (var s = []; t; )
            Gr(s, Jc(t)), t = vs(t);
          return s;
        } : ph, Ei = Bi;
        (Se && Ei(new Se(new ArrayBuffer(1))) != Yn || xe && Ei(new xe()) != pn || rt && Ei(rt.resolve()) != tn || mn && Ei(new mn()) != Kt || sn && Ei(new sn()) != Rn) && (Ei = function(t) {
          var s = Bi(t), u = s == _n ? t.constructor : n, d = u ? Lo(u) : "";
          if (d)
            switch (d) {
              case Tc:
                return Yn;
              case wc:
                return pn;
              case Sc:
                return tn;
              case su:
                return Kt;
              case Ac:
                return Rn;
            }
          return s;
        });
        function cm(t, s, u) {
          for (var d = -1, _ = u.length; ++d < _; ) {
            var w = u[d], O = w.size;
            switch (w.type) {
              case "drop":
                t += O;
                break;
              case "dropRight":
                s -= O;
                break;
              case "take":
                s = E(s, t + O);
                break;
              case "takeRight":
                t = p(t, s - O);
                break;
            }
          }
          return { start: t, end: s };
        }
        function hm(t) {
          var s = t.match(Pn);
          return s ? s[1].split(ii) : [];
        }
        function Jd(t, s, u) {
          s = Ks(s, t);
          for (var d = -1, _ = s.length, w = !1; ++d < _; ) {
            var O = ss(s[d]);
            if (!(w = t != null && u(t, O)))
              break;
            t = t[O];
          }
          return w || ++d != _ ? w : (_ = t == null ? 0 : t.length, !!_ && bu(_) && As(O, _) && (nt(t) || Io(t)));
        }
        function dm(t) {
          var s = t.length, u = new t.constructor(s);
          return s && typeof t[0] == "string" && mt.call(t, "index") && (u.index = t.index, u.input = t.input), u;
        }
        function jd(t) {
          return typeof t.constructor == "function" && !Qa(t) ? Hs(vs(t)) : {};
        }
        function fm(t, s, u) {
          var d = t.constructor;
          switch (s) {
            case Sn:
              return Wc(t);
            case un:
            case ci:
              return new d(+t);
            case Yn:
              return J_(t, u);
            case tr:
            case Qn:
            case Li:
            case qn:
            case ei:
            case Ii:
            case Ni:
            case nn:
            case ti:
              return Pd(t, u);
            case pn:
              return new d();
            case jn:
            case Xn:
              return new d(t);
            case Hn:
              return j_(t);
            case Kt:
              return new d();
            case Ci:
              return X_(t);
          }
        }
        function pm(t, s) {
          var u = s.length;
          if (!u)
            return t;
          var d = u - 1;
          return s[d] = (u > 1 ? "& " : "") + s[d], s = s.join(u > 2 ? ", " : " "), t.replace(de, `{
/* [wrapped with ` + s + `] */
`);
        }
        function gm(t) {
          return nt(t) || Io(t) || !!(nu && t && t[nu]);
        }
        function As(t, s) {
          var u = typeof t;
          return s = s ?? K, !!s && (u == "number" || u != "symbol" && Nt.test(t)) && t > -1 && t % 1 == 0 && t < s;
        }
        function ki(t, s, u) {
          if (!dn(u))
            return !1;
          var d = typeof s;
          return (d == "number" ? Ki(u) && As(s, u.length) : d == "string" && s in u) ? Zr(u[s], t) : !1;
        }
        function jc(t, s) {
          if (nt(t))
            return !1;
          var u = typeof t;
          return u == "number" || u == "symbol" || u == "boolean" || t == null || ur(t) ? !0 : Pe.test(t) || !ke.test(t) || s != null && t in Dt(s);
        }
        function _m(t) {
          var s = typeof t;
          return s == "string" || s == "number" || s == "symbol" || s == "boolean" ? t !== "__proto__" : t === null;
        }
        function Xc(t) {
          var s = mu(t), u = T[s];
          if (typeof u != "function" || !(s in ct.prototype))
            return !1;
          if (t === u)
            return !0;
          var d = Kc(u);
          return !!d && t === d[0];
        }
        function mm(t) {
          return !!ms && ms in t;
        }
        var vm = po ? bs : gh;
        function Qa(t) {
          var s = t && t.constructor, u = typeof s == "function" && s.prototype || Vs;
          return t === u;
        }
        function Xd(t) {
          return t === t && !dn(t);
        }
        function Qd(t, s) {
          return function(u) {
            return u == null ? !1 : u[t] === s && (s !== n || t in Dt(u));
          };
        }
        function ym(t) {
          var s = Su(t, function(d) {
            return u.size === m && u.clear(), d;
          }), u = s.cache;
          return s;
        }
        function Em(t, s) {
          var u = t[1], d = s[1], _ = u | d, w = _ < (j | W | fe), O = d == fe && u == J || d == fe && u == Ee && t[7].length <= s[8] || d == (fe | Ee) && s[7].length <= s[8] && u == J;
          if (!(w || O))
            return t;
          d & j && (t[2] = s[2], _ |= u & j ? 0 : Z);
          var R = s[3];
          if (R) {
            var M = t[3];
            t[3] = M ? Fd(M, R, s[4]) : R, t[4] = M ? es(t[3], A) : s[4];
          }
          return R = s[5], R && (M = t[5], t[5] = M ? Md(M, R, s[6]) : R, t[6] = M ? es(t[5], A) : s[6]), R = s[7], R && (t[7] = R), d & fe && (t[8] = t[8] == null ? s[8] : E(t[8], s[8])), t[9] == null && (t[9] = s[9]), t[0] = s[0], t[1] = _, t;
        }
        function Tm(t) {
          var s = [];
          if (t != null)
            for (var u in Dt(t))
              s.push(u);
          return s;
        }
        function wm(t) {
          return go.call(t);
        }
        function ef(t, s, u) {
          return s = p(s === n ? t.length - 1 : s, 0), function() {
            for (var d = arguments, _ = -1, w = p(d.length - s, 0), O = Y(w); ++_ < w; )
              O[_] = d[s + _];
            _ = -1;
            for (var R = Y(s + 1); ++_ < s; )
              R[_] = d[_];
            return R[s] = u(O), rn(t, this, R);
          };
        }
        function tf(t, s) {
          return s.length < 2 ? t : Co(t, Ir(s, 0, -1));
        }
        function Sm(t, s) {
          for (var u = t.length, d = E(s.length, u), _ = qi(t); d--; ) {
            var w = s[d];
            t[d] = As(w, u) ? _[w] : n;
          }
          return t;
        }
        function Qc(t, s) {
          if (!(s === "constructor" && typeof t[s] == "function") && s != "__proto__")
            return t[s];
        }
        var nf = sf(bd), el = Ec || function(t, s) {
          return Gn.setTimeout(t, s);
        }, eh = sf(Y_);
        function rf(t, s, u) {
          var d = s + "";
          return eh(t, pm(d, Am(hm(d), u)));
        }
        function sf(t) {
          var s = 0, u = 0;
          return function() {
            var d = N(), _ = V - (d - u);
            if (u = d, _ > 0) {
              if (++s >= ne)
                return arguments[0];
            } else
              s = 0;
            return t.apply(n, arguments);
          };
        }
        function yu(t, s) {
          var u = -1, d = t.length, _ = d - 1;
          for (s = s === n ? d : s; ++u < s; ) {
            var w = Mc(u, _), O = t[w];
            t[w] = t[u], t[u] = O;
          }
          return t.length = s, t;
        }
        var of = ym(function(t) {
          var s = [];
          return t.charCodeAt(0) === 46 && s.push(""), t.replace(ot, function(u, d, _, w) {
            s.push(_ ? w.replace(ir, "$1") : d || u);
          }), s;
        });
        function ss(t) {
          if (typeof t == "string" || ur(t))
            return t;
          var s = t + "";
          return s == "0" && 1 / t == -oe ? "-0" : s;
        }
        function Lo(t) {
          if (t != null) {
            try {
              return na.call(t);
            } catch {
            }
            try {
              return t + "";
            } catch {
            }
          }
          return "";
        }
        function Am(t, s) {
          return Fi(Ot, function(u) {
            var d = "_." + u[0];
            s & u[1] && !Ms(t, d) && t.push(d);
          }), t.sort();
        }
        function af(t) {
          if (t instanceof ct)
            return t.clone();
          var s = new yi(t.__wrapped__, t.__chain__);
          return s.__actions__ = qi(t.__actions__), s.__index__ = t.__index__, s.__values__ = t.__values__, s;
        }
        function bm(t, s, u) {
          (u ? ki(t, s, u) : s === n) ? s = 1 : s = p(at(s), 0);
          var d = t == null ? 0 : t.length;
          if (!d || s < 1)
            return [];
          for (var _ = 0, w = 0, O = Y(yo(d / s)); _ < d; )
            O[w++] = Ir(t, _, _ += s);
          return O;
        }
        function Cm(t) {
          for (var s = -1, u = t == null ? 0 : t.length, d = 0, _ = []; ++s < u; ) {
            var w = t[s];
            w && (_[d++] = w);
          }
          return _;
        }
        function Om() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var s = Y(t - 1), u = arguments[0], d = t; d--; )
            s[d - 1] = arguments[d];
          return Gr(nt(u) ? qi(u) : [u], oi(s, 1));
        }
        var Lm = ht(function(t, s) {
          return On(t) ? Ka(t, oi(s, 1, On, !0)) : [];
        }), Im = ht(function(t, s) {
          var u = Nr(s);
          return On(u) && (u = n), On(t) ? Ka(t, oi(s, 1, On, !0), Ge(u, 2)) : [];
        }), Nm = ht(function(t, s) {
          var u = Nr(s);
          return On(u) && (u = n), On(t) ? Ka(t, oi(s, 1, On, !0), n, u) : [];
        });
        function Dm(t, s, u) {
          var d = t == null ? 0 : t.length;
          return d ? (s = u || s === n ? 1 : at(s), Ir(t, s < 0 ? 0 : s, d)) : [];
        }
        function Rm(t, s, u) {
          var d = t == null ? 0 : t.length;
          return d ? (s = u || s === n ? 1 : at(s), s = d - s, Ir(t, 0, s < 0 ? 0 : s)) : [];
        }
        function Pm(t, s) {
          return t && t.length ? hu(t, Ge(s, 3), !0, !0) : [];
        }
        function xm(t, s) {
          return t && t.length ? hu(t, Ge(s, 3), !0) : [];
        }
        function Fm(t, s, u, d) {
          var _ = t == null ? 0 : t.length;
          return _ ? (u && typeof u != "number" && ki(t, s, u) && (u = 0, d = _), O_(t, s, u, d)) : [];
        }
        function lf(t, s, u) {
          var d = t == null ? 0 : t.length;
          if (!d)
            return -1;
          var _ = u == null ? 0 : at(u);
          return _ < 0 && (_ = p(d + _, 0)), br(t, Ge(s, 3), _);
        }
        function uf(t, s, u) {
          var d = t == null ? 0 : t.length;
          if (!d)
            return -1;
          var _ = d - 1;
          return u !== n && (_ = at(u), _ = u < 0 ? p(d + _, 0) : E(_, d - 1)), br(t, Ge(s, 3), _, !0);
        }
        function cf(t) {
          var s = t == null ? 0 : t.length;
          return s ? oi(t, 1) : [];
        }
        function Mm(t) {
          var s = t == null ? 0 : t.length;
          return s ? oi(t, oe) : [];
        }
        function Bm(t, s) {
          var u = t == null ? 0 : t.length;
          return u ? (s = s === n ? 1 : at(s), oi(t, s)) : [];
        }
        function km(t) {
          for (var s = -1, u = t == null ? 0 : t.length, d = {}; ++s < u; ) {
            var _ = t[s];
            d[_[0]] = _[1];
          }
          return d;
        }
        function hf(t) {
          return t && t.length ? t[0] : n;
        }
        function Gm(t, s, u) {
          var d = t == null ? 0 : t.length;
          if (!d)
            return -1;
          var _ = u == null ? 0 : at(u);
          return _ < 0 && (_ = p(d + _, 0)), Bs(t, s, _);
        }
        function Um(t) {
          var s = t == null ? 0 : t.length;
          return s ? Ir(t, 0, -1) : [];
        }
        var zm = ht(function(t) {
          var s = Ut(t, zc);
          return s.length && s[0] === t[0] ? Dc(s) : [];
        }), Vm = ht(function(t) {
          var s = Nr(t), u = Ut(t, zc);
          return s === Nr(u) ? s = n : u.pop(), u.length && u[0] === t[0] ? Dc(u, Ge(s, 2)) : [];
        }), Wm = ht(function(t) {
          var s = Nr(t), u = Ut(t, zc);
          return s = typeof s == "function" ? s : n, s && u.pop(), u.length && u[0] === t[0] ? Dc(u, n, s) : [];
        });
        function Zm(t, s) {
          return t == null ? "" : a.call(t, s);
        }
        function Nr(t) {
          var s = t == null ? 0 : t.length;
          return s ? t[s - 1] : n;
        }
        function Hm(t, s, u) {
          var d = t == null ? 0 : t.length;
          if (!d)
            return -1;
          var _ = d;
          return u !== n && (_ = at(u), _ = _ < 0 ? p(d + _, 0) : E(_, d - 1)), s === s ? mc(t, s, _) : br(t, Mi, _, !0);
        }
        function Ym(t, s) {
          return t && t.length ? Td(t, at(s)) : n;
        }
        var qm = ht(df);
        function df(t, s) {
          return t && t.length && s && s.length ? Fc(t, s) : t;
        }
        function Km(t, s, u) {
          return t && t.length && s && s.length ? Fc(t, s, Ge(u, 2)) : t;
        }
        function $m(t, s, u) {
          return t && t.length && s && s.length ? Fc(t, s, n, u) : t;
        }
        var Jm = Ss(function(t, s) {
          var u = t == null ? 0 : t.length, d = Oc(t, s);
          return Ad(t, Ut(s, function(_) {
            return As(_, u) ? +_ : _;
          }).sort(xd)), d;
        });
        function jm(t, s) {
          var u = [];
          if (!(t && t.length))
            return u;
          var d = -1, _ = [], w = t.length;
          for (s = Ge(s, 3); ++d < w; ) {
            var O = t[d];
            s(O, d, t) && (u.push(O), _.push(d));
          }
          return Ad(t, _), u;
        }
        function th(t) {
          return t == null ? t : se.call(t);
        }
        function Xm(t, s, u) {
          var d = t == null ? 0 : t.length;
          return d ? (u && typeof u != "number" && ki(t, s, u) ? (s = 0, u = d) : (s = s == null ? 0 : at(s), u = u === n ? d : at(u)), Ir(t, s, u)) : [];
        }
        function Qm(t, s) {
          return cu(t, s);
        }
        function ev(t, s, u) {
          return kc(t, s, Ge(u, 2));
        }
        function tv(t, s) {
          var u = t == null ? 0 : t.length;
          if (u) {
            var d = cu(t, s);
            if (d < u && Zr(t[d], s))
              return d;
          }
          return -1;
        }
        function nv(t, s) {
          return cu(t, s, !0);
        }
        function iv(t, s, u) {
          return kc(t, s, Ge(u, 2), !0);
        }
        function rv(t, s) {
          var u = t == null ? 0 : t.length;
          if (u) {
            var d = cu(t, s, !0) - 1;
            if (Zr(t[d], s))
              return d;
          }
          return -1;
        }
        function sv(t) {
          return t && t.length ? Cd(t) : [];
        }
        function ov(t, s) {
          return t && t.length ? Cd(t, Ge(s, 2)) : [];
        }
        function av(t) {
          var s = t == null ? 0 : t.length;
          return s ? Ir(t, 1, s) : [];
        }
        function lv(t, s, u) {
          return t && t.length ? (s = u || s === n ? 1 : at(s), Ir(t, 0, s < 0 ? 0 : s)) : [];
        }
        function uv(t, s, u) {
          var d = t == null ? 0 : t.length;
          return d ? (s = u || s === n ? 1 : at(s), s = d - s, Ir(t, s < 0 ? 0 : s, d)) : [];
        }
        function cv(t, s) {
          return t && t.length ? hu(t, Ge(s, 3), !1, !0) : [];
        }
        function hv(t, s) {
          return t && t.length ? hu(t, Ge(s, 3)) : [];
        }
        var dv = ht(function(t) {
          return qs(oi(t, 1, On, !0));
        }), fv = ht(function(t) {
          var s = Nr(t);
          return On(s) && (s = n), qs(oi(t, 1, On, !0), Ge(s, 2));
        }), pv = ht(function(t) {
          var s = Nr(t);
          return s = typeof s == "function" ? s : n, qs(oi(t, 1, On, !0), n, s);
        });
        function gv(t) {
          return t && t.length ? qs(t) : [];
        }
        function _v(t, s) {
          return t && t.length ? qs(t, Ge(s, 2)) : [];
        }
        function mv(t, s) {
          return s = typeof s == "function" ? s : n, t && t.length ? qs(t, n, s) : [];
        }
        function nh(t) {
          if (!(t && t.length))
            return [];
          var s = 0;
          return t = kr(t, function(u) {
            if (On(u))
              return s = p(u.length, s), !0;
          }), Ga(s, function(u) {
            return Ut(t, qo(u));
          });
        }
        function ff(t, s) {
          if (!(t && t.length))
            return [];
          var u = nh(t);
          return s == null ? u : Ut(u, function(d) {
            return rn(s, n, d);
          });
        }
        var vv = ht(function(t, s) {
          return On(t) ? Ka(t, s) : [];
        }), yv = ht(function(t) {
          return Uc(kr(t, On));
        }), Ev = ht(function(t) {
          var s = Nr(t);
          return On(s) && (s = n), Uc(kr(t, On), Ge(s, 2));
        }), Tv = ht(function(t) {
          var s = Nr(t);
          return s = typeof s == "function" ? s : n, Uc(kr(t, On), n, s);
        }), wv = ht(nh);
        function Sv(t, s) {
          return Nd(t || [], s || [], qa);
        }
        function Av(t, s) {
          return Nd(t || [], s || [], ja);
        }
        var bv = ht(function(t) {
          var s = t.length, u = s > 1 ? t[s - 1] : n;
          return u = typeof u == "function" ? (t.pop(), u) : n, ff(t, u);
        });
        function pf(t) {
          var s = T(t);
          return s.__chain__ = !0, s;
        }
        function Cv(t, s) {
          return s(t), t;
        }
        function Eu(t, s) {
          return s(t);
        }
        var Ov = Ss(function(t) {
          var s = t.length, u = s ? t[0] : 0, d = this.__wrapped__, _ = function(w) {
            return Oc(w, t);
          };
          return s > 1 || this.__actions__.length || !(d instanceof ct) || !As(u) ? this.thru(_) : (d = d.slice(u, +u + (s ? 1 : 0)), d.__actions__.push({
            func: Eu,
            args: [_],
            thisArg: n
          }), new yi(d, this.__chain__).thru(function(w) {
            return s && !w.length && w.push(n), w;
          }));
        });
        function Lv() {
          return pf(this);
        }
        function Iv() {
          return new yi(this.value(), this.__chain__);
        }
        function Nv() {
          this.__values__ === n && (this.__values__ = Lf(this.value()));
          var t = this.__index__ >= this.__values__.length, s = t ? n : this.__values__[this.__index__++];
          return { done: t, value: s };
        }
        function Dv() {
          return this;
        }
        function Rv(t) {
          for (var s, u = this; u instanceof ia; ) {
            var d = af(u);
            d.__index__ = 0, d.__values__ = n, s ? _.__wrapped__ = d : s = d;
            var _ = d;
            u = u.__wrapped__;
          }
          return _.__wrapped__ = t, s;
        }
        function Pv() {
          var t = this.__wrapped__;
          if (t instanceof ct) {
            var s = t;
            return this.__actions__.length && (s = new ct(this)), s = s.reverse(), s.__actions__.push({
              func: Eu,
              args: [th],
              thisArg: n
            }), new yi(s, this.__chain__);
          }
          return this.thru(th);
        }
        function xv() {
          return Id(this.__wrapped__, this.__actions__);
        }
        var Fv = du(function(t, s, u) {
          mt.call(t, u) ? ++t[u] : Ts(t, u, 1);
        });
        function Mv(t, s, u) {
          var d = nt(t) ? Ra : C_;
          return u && ki(t, s, u) && (s = n), d(t, Ge(s, 3));
        }
        function Bv(t, s) {
          var u = nt(t) ? kr : dd;
          return u(t, Ge(s, 3));
        }
        var kv = Ud(lf), Gv = Ud(uf);
        function Uv(t, s) {
          return oi(Tu(t, s), 1);
        }
        function zv(t, s) {
          return oi(Tu(t, s), oe);
        }
        function Vv(t, s, u) {
          return u = u === n ? 1 : at(u), oi(Tu(t, s), u);
        }
        function gf(t, s) {
          var u = nt(t) ? Fi : Ys;
          return u(t, Ge(s, 3));
        }
        function _f(t, s) {
          var u = nt(t) ? jr : hd;
          return u(t, Ge(s, 3));
        }
        var Wv = du(function(t, s, u) {
          mt.call(t, u) ? t[u].push(s) : Ts(t, u, [s]);
        });
        function Zv(t, s, u, d) {
          t = Ki(t) ? t : la(t), u = u && !d ? at(u) : 0;
          var _ = t.length;
          return u < 0 && (u = p(_ + u, 0)), Cu(t) ? u <= _ && t.indexOf(s, u) > -1 : !!_ && Bs(t, s, u) > -1;
        }
        var Hv = ht(function(t, s, u) {
          var d = -1, _ = typeof s == "function", w = Ki(t) ? Y(t.length) : [];
          return Ys(t, function(O) {
            w[++d] = _ ? rn(s, O, u) : $a(O, s, u);
          }), w;
        }), Yv = du(function(t, s, u) {
          Ts(t, u, s);
        });
        function Tu(t, s) {
          var u = nt(t) ? Ut : vd;
          return u(t, Ge(s, 3));
        }
        function qv(t, s, u, d) {
          return t == null ? [] : (nt(s) || (s = s == null ? [] : [s]), u = d ? n : u, nt(u) || (u = u == null ? [] : [u]), wd(t, s, u));
        }
        var Kv = du(function(t, s, u) {
          t[u ? 0 : 1].push(s);
        }, function() {
          return [[], []];
        });
        function $v(t, s, u) {
          var d = nt(t) ? xa : Ko, _ = arguments.length < 3;
          return d(t, Ge(s, 4), u, _, Ys);
        }
        function Jv(t, s, u) {
          var d = nt(t) ? fc : Ko, _ = arguments.length < 3;
          return d(t, Ge(s, 4), u, _, hd);
        }
        function jv(t, s) {
          var u = nt(t) ? kr : dd;
          return u(t, Au(Ge(s, 3)));
        }
        function Xv(t) {
          var s = nt(t) ? ad : Z_;
          return s(t);
        }
        function Qv(t, s, u) {
          (u ? ki(t, s, u) : s === n) ? s = 1 : s = at(s);
          var d = nt(t) ? T_ : H_;
          return d(t, s);
        }
        function e0(t) {
          var s = nt(t) ? w_ : q_;
          return s(t);
        }
        function t0(t) {
          if (t == null)
            return 0;
          if (Ki(t))
            return Cu(t) ? mi(t) : t.length;
          var s = Ei(t);
          return s == pn || s == Kt ? t.size : Pc(t).length;
        }
        function n0(t, s, u) {
          var d = nt(t) ? lo : K_;
          return u && ki(t, s, u) && (s = n), d(t, Ge(s, 3));
        }
        var i0 = ht(function(t, s) {
          if (t == null)
            return [];
          var u = s.length;
          return u > 1 && ki(t, s[0], s[1]) ? s = [] : u > 2 && ki(s[0], s[1], s[2]) && (s = [s[0]]), wd(t, oi(s, 1), []);
        }), wu = ru || function() {
          return Gn.Date.now();
        };
        function r0(t, s) {
          if (typeof s != "function")
            throw new si(g);
          return t = at(t), function() {
            if (--t < 1)
              return s.apply(this, arguments);
          };
        }
        function mf(t, s, u) {
          return s = u ? n : s, s = t && s == null ? t.length : s, ws(t, fe, n, n, n, n, s);
        }
        function vf(t, s) {
          var u;
          if (typeof s != "function")
            throw new si(g);
          return t = at(t), function() {
            return --t > 0 && (u = s.apply(this, arguments)), t <= 1 && (s = n), u;
          };
        }
        var ih = ht(function(t, s, u) {
          var d = j;
          if (u.length) {
            var _ = es(u, oa(ih));
            d |= U;
          }
          return ws(t, d, s, u, _);
        }), yf = ht(function(t, s, u) {
          var d = j | W;
          if (u.length) {
            var _ = es(u, oa(yf));
            d |= U;
          }
          return ws(s, d, t, u, _);
        });
        function Ef(t, s, u) {
          s = u ? n : s;
          var d = ws(t, J, n, n, n, n, n, s);
          return d.placeholder = Ef.placeholder, d;
        }
        function Tf(t, s, u) {
          s = u ? n : s;
          var d = ws(t, P, n, n, n, n, n, s);
          return d.placeholder = Tf.placeholder, d;
        }
        function wf(t, s, u) {
          var d, _, w, O, R, M, Q = 0, ee = !1, ae = !1, Te = !0;
          if (typeof t != "function")
            throw new si(g);
          s = Dr(s) || 0, dn(u) && (ee = !!u.leading, ae = "maxWait" in u, w = ae ? p(Dr(u.maxWait) || 0, s) : w, Te = "trailing" in u ? !!u.trailing : Te);
          function De(Ln) {
            var Hr = d, Os = _;
            return d = _ = n, Q = Ln, O = t.apply(Os, Hr), O;
          }
          function Ue(Ln) {
            return Q = Ln, R = el(gt, s), ee ? De(Ln) : O;
          }
          function lt(Ln) {
            var Hr = Ln - M, Os = Ln - Q, zf = s - Hr;
            return ae ? E(zf, w - Os) : zf;
          }
          function ze(Ln) {
            var Hr = Ln - M, Os = Ln - Q;
            return M === n || Hr >= s || Hr < 0 || ae && Os >= w;
          }
          function gt() {
            var Ln = wu();
            if (ze(Ln))
              return vt(Ln);
            R = el(gt, lt(Ln));
          }
          function vt(Ln) {
            return R = n, Te && d ? De(Ln) : (d = _ = n, O);
          }
          function cr() {
            R !== n && Dd(R), Q = 0, d = M = _ = R = n;
          }
          function Gi() {
            return R === n ? O : vt(wu());
          }
          function hr() {
            var Ln = wu(), Hr = ze(Ln);
            if (d = arguments, _ = this, M = Ln, Hr) {
              if (R === n)
                return Ue(M);
              if (ae)
                return Dd(R), R = el(gt, s), De(M);
            }
            return R === n && (R = el(gt, s)), O;
          }
          return hr.cancel = cr, hr.flush = Gi, hr;
        }
        var s0 = ht(function(t, s) {
          return cd(t, 1, s);
        }), o0 = ht(function(t, s, u) {
          return cd(t, Dr(s) || 0, u);
        });
        function a0(t) {
          return ws(t, he);
        }
        function Su(t, s) {
          if (typeof t != "function" || s != null && typeof s != "function")
            throw new si(g);
          var u = function() {
            var d = arguments, _ = s ? s.apply(this, d) : d[0], w = u.cache;
            if (w.has(_))
              return w.get(_);
            var O = t.apply(this, d);
            return u.cache = w.set(_, O) || w, O;
          };
          return u.cache = new (Su.Cache || Es)(), u;
        }
        Su.Cache = Es;
        function Au(t) {
          if (typeof t != "function")
            throw new si(g);
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
        function l0(t) {
          return vf(2, t);
        }
        var u0 = $_(function(t, s) {
          s = s.length == 1 && nt(s[0]) ? Ut(s[0], Jt(Ge())) : Ut(oi(s, 1), Jt(Ge()));
          var u = s.length;
          return ht(function(d) {
            for (var _ = -1, w = E(d.length, u); ++_ < w; )
              d[_] = s[_].call(this, d[_]);
            return rn(t, this, d);
          });
        }), rh = ht(function(t, s) {
          var u = es(s, oa(rh));
          return ws(t, U, n, s, u);
        }), Sf = ht(function(t, s) {
          var u = es(s, oa(Sf));
          return ws(t, re, n, s, u);
        }), c0 = Ss(function(t, s) {
          return ws(t, Ee, n, n, n, s);
        });
        function h0(t, s) {
          if (typeof t != "function")
            throw new si(g);
          return s = s === n ? s : at(s), ht(t, s);
        }
        function d0(t, s) {
          if (typeof t != "function")
            throw new si(g);
          return s = s == null ? 0 : p(at(s), 0), ht(function(u) {
            var d = u[s], _ = $s(u, 0, s);
            return d && Gr(_, d), rn(t, this, _);
          });
        }
        function f0(t, s, u) {
          var d = !0, _ = !0;
          if (typeof t != "function")
            throw new si(g);
          return dn(u) && (d = "leading" in u ? !!u.leading : d, _ = "trailing" in u ? !!u.trailing : _), wf(t, s, {
            leading: d,
            maxWait: s,
            trailing: _
          });
        }
        function p0(t) {
          return mf(t, 1);
        }
        function g0(t, s) {
          return rh(Vc(s), t);
        }
        function _0() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return nt(t) ? t : [t];
        }
        function m0(t) {
          return Lr(t, D);
        }
        function v0(t, s) {
          return s = typeof s == "function" ? s : n, Lr(t, D, s);
        }
        function y0(t) {
          return Lr(t, S | D);
        }
        function E0(t, s) {
          return s = typeof s == "function" ? s : n, Lr(t, S | D, s);
        }
        function T0(t, s) {
          return s == null || ud(t, s, $n(s));
        }
        function Zr(t, s) {
          return t === s || t !== t && s !== s;
        }
        var w0 = _u(Nc), S0 = _u(function(t, s) {
          return t >= s;
        }), Io = gd(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? gd : function(t) {
          return vn(t) && mt.call(t, "callee") && !Ha.call(t, "callee");
        }, nt = Y.isArray, A0 = Zl ? Jt(Zl) : R_;
        function Ki(t) {
          return t != null && bu(t.length) && !bs(t);
        }
        function On(t) {
          return vn(t) && Ki(t);
        }
        function b0(t) {
          return t === !0 || t === !1 || vn(t) && Bi(t) == un;
        }
        var Js = e || gh, C0 = Da ? Jt(Da) : P_;
        function O0(t) {
          return vn(t) && t.nodeType === 1 && !tl(t);
        }
        function L0(t) {
          if (t == null)
            return !0;
          if (Ki(t) && (nt(t) || typeof t == "string" || typeof t.splice == "function" || Js(t) || aa(t) || Io(t)))
            return !t.length;
          var s = Ei(t);
          if (s == pn || s == Kt)
            return !t.size;
          if (Qa(t))
            return !Pc(t).length;
          for (var u in t)
            if (mt.call(t, u))
              return !1;
          return !0;
        }
        function I0(t, s) {
          return Ja(t, s);
        }
        function N0(t, s, u) {
          u = typeof u == "function" ? u : n;
          var d = u ? u(t, s) : n;
          return d === n ? Ja(t, s, n, u) : !!d;
        }
        function sh(t) {
          if (!vn(t))
            return !1;
          var s = Bi(t);
          return s == Zn || s == qt || typeof t.message == "string" && typeof t.name == "string" && !tl(t);
        }
        function D0(t) {
          return typeof t == "number" && r(t);
        }
        function bs(t) {
          if (!dn(t))
            return !1;
          var s = Bi(t);
          return s == Dn || s == bi || s == Vt || s == yr;
        }
        function Af(t) {
          return typeof t == "number" && t == at(t);
        }
        function bu(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= K;
        }
        function dn(t) {
          var s = typeof t;
          return t != null && (s == "object" || s == "function");
        }
        function vn(t) {
          return t != null && typeof t == "object";
        }
        var bf = Hl ? Jt(Hl) : F_;
        function R0(t, s) {
          return t === s || Rc(t, s, $c(s));
        }
        function P0(t, s, u) {
          return u = typeof u == "function" ? u : n, Rc(t, s, $c(s), u);
        }
        function x0(t) {
          return Cf(t) && t != +t;
        }
        function F0(t) {
          if (vm(t))
            throw new $e(f);
          return _d(t);
        }
        function M0(t) {
          return t === null;
        }
        function B0(t) {
          return t == null;
        }
        function Cf(t) {
          return typeof t == "number" || vn(t) && Bi(t) == jn;
        }
        function tl(t) {
          if (!vn(t) || Bi(t) != _n)
            return !1;
          var s = vs(t);
          if (s === null)
            return !0;
          var u = mt.call(s, "constructor") && s.constructor;
          return typeof u == "function" && u instanceof u && na.call(u) == eu;
        }
        var oh = Yl ? Jt(Yl) : M_;
        function k0(t) {
          return Af(t) && t >= -K && t <= K;
        }
        var Of = Yo ? Jt(Yo) : B_;
        function Cu(t) {
          return typeof t == "string" || !nt(t) && vn(t) && Bi(t) == Xn;
        }
        function ur(t) {
          return typeof t == "symbol" || vn(t) && Bi(t) == Ci;
        }
        var aa = ql ? Jt(ql) : k_;
        function G0(t) {
          return t === n;
        }
        function U0(t) {
          return vn(t) && Ei(t) == Rn;
        }
        function z0(t) {
          return vn(t) && Bi(t) == Oi;
        }
        var V0 = _u(xc), W0 = _u(function(t, s) {
          return t <= s;
        });
        function Lf(t) {
          if (!t)
            return [];
          if (Ki(t))
            return Cu(t) ? vi(t) : qi(t);
          if (Zs && t[Zs])
            return Jo(t[Zs]());
          var s = Ei(t), u = s == pn ? Ua : s == Kt ? Yi : la;
          return u(t);
        }
        function Cs(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = Dr(t), t === oe || t === -oe) {
            var s = t < 0 ? -1 : 1;
            return s * Fe;
          }
          return t === t ? t : 0;
        }
        function at(t) {
          var s = Cs(t), u = s % 1;
          return s === s ? u ? s - u : s : 0;
        }
        function If(t) {
          return t ? bo(at(t), 0, Me) : 0;
        }
        function Dr(t) {
          if (typeof t == "number")
            return t;
          if (ur(t))
            return Le;
          if (dn(t)) {
            var s = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = dn(s) ? s + "" : s;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = jl(t);
          var u = An.test(t);
          return u || ri.test(t) ? hc(t.slice(2), u ? 2 : 8) : pt.test(t) ? Le : +t;
        }
        function Nf(t) {
          return rs(t, $i(t));
        }
        function Z0(t) {
          return t ? bo(at(t), -K, K) : t === 0 ? t : 0;
        }
        function Rt(t) {
          return t == null ? "" : lr(t);
        }
        var H0 = ra(function(t, s) {
          if (Qa(s) || Ki(s)) {
            rs(s, $n(s), t);
            return;
          }
          for (var u in s)
            mt.call(s, u) && qa(t, u, s[u]);
        }), Df = ra(function(t, s) {
          rs(s, $i(s), t);
        }), Ou = ra(function(t, s, u, d) {
          rs(s, $i(s), t, d);
        }), Y0 = ra(function(t, s, u, d) {
          rs(s, $n(s), t, d);
        }), q0 = Ss(Oc);
        function K0(t, s) {
          var u = Hs(t);
          return s == null ? u : ld(u, s);
        }
        var $0 = ht(function(t, s) {
          t = Dt(t);
          var u = -1, d = s.length, _ = d > 2 ? s[2] : n;
          for (_ && ki(s[0], s[1], _) && (d = 1); ++u < d; )
            for (var w = s[u], O = $i(w), R = -1, M = O.length; ++R < M; ) {
              var Q = O[R], ee = t[Q];
              (ee === n || Zr(ee, Vs[Q]) && !mt.call(t, Q)) && (t[Q] = w[Q]);
            }
          return t;
        }), J0 = ht(function(t) {
          return t.push(n, qd), rn(Rf, n, t);
        });
        function j0(t, s) {
          return uo(t, Ge(s, 3), is);
        }
        function X0(t, s) {
          return uo(t, Ge(s, 3), Ic);
        }
        function Q0(t, s) {
          return t == null ? t : Lc(t, Ge(s, 3), $i);
        }
        function ey(t, s) {
          return t == null ? t : fd(t, Ge(s, 3), $i);
        }
        function ty(t, s) {
          return t && is(t, Ge(s, 3));
        }
        function ny(t, s) {
          return t && Ic(t, Ge(s, 3));
        }
        function iy(t) {
          return t == null ? [] : lu(t, $n(t));
        }
        function ry(t) {
          return t == null ? [] : lu(t, $i(t));
        }
        function ah(t, s, u) {
          var d = t == null ? n : Co(t, s);
          return d === n ? u : d;
        }
        function sy(t, s) {
          return t != null && Jd(t, s, L_);
        }
        function lh(t, s) {
          return t != null && Jd(t, s, I_);
        }
        var oy = Vd(function(t, s, u) {
          s != null && typeof s.toString != "function" && (s = go.call(s)), t[s] = u;
        }, ch(Ji)), ay = Vd(function(t, s, u) {
          s != null && typeof s.toString != "function" && (s = go.call(s)), mt.call(t, s) ? t[s].push(u) : t[s] = [u];
        }, Ge), ly = ht($a);
        function $n(t) {
          return Ki(t) ? od(t) : Pc(t);
        }
        function $i(t) {
          return Ki(t) ? od(t, !0) : G_(t);
        }
        function uy(t, s) {
          var u = {};
          return s = Ge(s, 3), is(t, function(d, _, w) {
            Ts(u, s(d, _, w), d);
          }), u;
        }
        function cy(t, s) {
          var u = {};
          return s = Ge(s, 3), is(t, function(d, _, w) {
            Ts(u, _, s(d, _, w));
          }), u;
        }
        var hy = ra(function(t, s, u) {
          uu(t, s, u);
        }), Rf = ra(function(t, s, u, d) {
          uu(t, s, u, d);
        }), dy = Ss(function(t, s) {
          var u = {};
          if (t == null)
            return u;
          var d = !1;
          s = Ut(s, function(w) {
            return w = Ks(w, t), d || (d = w.length > 1), w;
          }), rs(t, qc(t), u), d && (u = Lr(u, S | I | D, om));
          for (var _ = s.length; _--; )
            Gc(u, s[_]);
          return u;
        });
        function fy(t, s) {
          return Pf(t, Au(Ge(s)));
        }
        var py = Ss(function(t, s) {
          return t == null ? {} : z_(t, s);
        });
        function Pf(t, s) {
          if (t == null)
            return {};
          var u = Ut(qc(t), function(d) {
            return [d];
          });
          return s = Ge(s), Sd(t, u, function(d, _) {
            return s(d, _[0]);
          });
        }
        function gy(t, s, u) {
          s = Ks(s, t);
          var d = -1, _ = s.length;
          for (_ || (_ = 1, t = n); ++d < _; ) {
            var w = t == null ? n : t[ss(s[d])];
            w === n && (d = _, w = u), t = bs(w) ? w.call(t) : w;
          }
          return t;
        }
        function _y(t, s, u) {
          return t == null ? t : ja(t, s, u);
        }
        function my(t, s, u, d) {
          return d = typeof d == "function" ? d : n, t == null ? t : ja(t, s, u, d);
        }
        var xf = Hd($n), Ff = Hd($i);
        function vy(t, s, u) {
          var d = nt(t), _ = d || Js(t) || aa(t);
          if (s = Ge(s, 4), u == null) {
            var w = t && t.constructor;
            _ ? u = d ? new w() : [] : dn(t) ? u = bs(w) ? Hs(vs(t)) : {} : u = {};
          }
          return (_ ? Fi : is)(t, function(O, R, M) {
            return s(u, O, R, M);
          }), u;
        }
        function yy(t, s) {
          return t == null ? !0 : Gc(t, s);
        }
        function Ey(t, s, u) {
          return t == null ? t : Ld(t, s, Vc(u));
        }
        function Ty(t, s, u, d) {
          return d = typeof d == "function" ? d : n, t == null ? t : Ld(t, s, Vc(u), d);
        }
        function la(t) {
          return t == null ? [] : Xr(t, $n(t));
        }
        function wy(t) {
          return t == null ? [] : Xr(t, $i(t));
        }
        function Sy(t, s, u) {
          return u === n && (u = s, s = n), u !== n && (u = Dr(u), u = u === u ? u : 0), s !== n && (s = Dr(s), s = s === s ? s : 0), bo(Dr(t), s, u);
        }
        function Ay(t, s, u) {
          return s = Cs(s), u === n ? (u = s, s = 0) : u = Cs(u), t = Dr(t), N_(t, s, u);
        }
        function by(t, s, u) {
          if (u && typeof u != "boolean" && ki(t, s, u) && (s = u = n), u === n && (typeof s == "boolean" ? (u = s, s = n) : typeof t == "boolean" && (u = t, t = n)), t === n && s === n ? (t = 0, s = 1) : (t = Cs(t), s === n ? (s = t, t = 0) : s = Cs(s)), t > s) {
            var d = t;
            t = s, s = d;
          }
          if (u || t % 1 || s % 1) {
            var _ = H();
            return E(t + _ * (s - t + Oa("1e-" + ((_ + "").length - 1))), s);
          }
          return Mc(t, s);
        }
        var Cy = sa(function(t, s, u) {
          return s = s.toLowerCase(), t + (u ? Mf(s) : s);
        });
        function Mf(t) {
          return uh(Rt(t).toLowerCase());
        }
        function Bf(t) {
          return t = Rt(t), t && t.replace(Zi, gc).replace(Ul, "");
        }
        function Oy(t, s, u) {
          t = Rt(t), s = lr(s);
          var d = t.length;
          u = u === n ? d : bo(at(u), 0, d);
          var _ = u;
          return u -= s.length, u >= 0 && t.slice(u, _) == s;
        }
        function Ly(t) {
          return t = Rt(t), t && x.test(t) ? t.replace(nr, fo) : t;
        }
        function Iy(t) {
          return t = Rt(t), t && Ft.test(t) ? t.replace(ft, "\\$&") : t;
        }
        var Ny = sa(function(t, s, u) {
          return t + (u ? "-" : "") + s.toLowerCase();
        }), Dy = sa(function(t, s, u) {
          return t + (u ? " " : "") + s.toLowerCase();
        }), Ry = Gd("toLowerCase");
        function Py(t, s, u) {
          t = Rt(t), s = at(s);
          var d = s ? mi(t) : 0;
          if (!s || d >= s)
            return t;
          var _ = (s - d) / 2;
          return gu(Eo(_), u) + t + gu(yo(_), u);
        }
        function xy(t, s, u) {
          t = Rt(t), s = at(s);
          var d = s ? mi(t) : 0;
          return s && d < s ? t + gu(s - d, u) : t;
        }
        function Fy(t, s, u) {
          t = Rt(t), s = at(s);
          var d = s ? mi(t) : 0;
          return s && d < s ? gu(s - d, u) + t : t;
        }
        function My(t, s, u) {
          return u || s == null ? s = 0 : s && (s = +s), k(Rt(t).replace(Pt, ""), s || 0);
        }
        function By(t, s, u) {
          return (u ? ki(t, s, u) : s === n) ? s = 1 : s = at(s), Bc(Rt(t), s);
        }
        function ky() {
          var t = arguments, s = Rt(t[0]);
          return t.length < 3 ? s : s.replace(t[1], t[2]);
        }
        var Gy = sa(function(t, s, u) {
          return t + (u ? "_" : "") + s.toLowerCase();
        });
        function Uy(t, s, u) {
          return u && typeof u != "number" && ki(t, s, u) && (s = u = n), u = u === n ? Me : u >>> 0, u ? (t = Rt(t), t && (typeof s == "string" || s != null && !oh(s)) && (s = lr(s), !s && Gs(t)) ? $s(vi(t), 0, u) : t.split(s, u)) : [];
        }
        var zy = sa(function(t, s, u) {
          return t + (u ? " " : "") + uh(s);
        });
        function Vy(t, s, u) {
          return t = Rt(t), u = u == null ? 0 : bo(at(u), 0, t.length), s = lr(s), t.slice(u, u + s.length) == s;
        }
        function Wy(t, s, u) {
          var d = T.templateSettings;
          u && ki(t, s, u) && (s = n), t = Rt(t), s = Ou({}, s, d, Yd);
          var _ = Ou({}, s.imports, d.imports, Yd), w = $n(_), O = Xr(_, w), R, M, Q = 0, ee = s.interpolate || kn, ae = "__p += '", Te = Za(
            (s.escape || kn).source + "|" + ee.source + "|" + (ee === ve ? xt : kn).source + "|" + (s.evaluate || kn).source + "|$",
            "g"
          ), De = "//# sourceURL=" + (mt.call(s, "sourceURL") ? (s.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ao + "]") + `
`;
          t.replace(Te, function(ze, gt, vt, cr, Gi, hr) {
            return vt || (vt = cr), ae += t.slice(Q, hr).replace(cn, Ql), gt && (R = !0, ae += `' +
__e(` + gt + `) +
'`), Gi && (M = !0, ae += `';
` + Gi + `;
__p += '`), vt && (ae += `' +
((__t = (` + vt + `)) == null ? '' : __t) +
'`), Q = hr + ze.length, ze;
          }), ae += `';
`;
          var Ue = mt.call(s, "variable") && s.variable;
          if (!Ue)
            ae = `with (obj) {
` + ae + `
}
`;
          else if (fi.test(Ue))
            throw new $e(v);
          ae = (M ? ae.replace(Er, "") : ae).replace(Di, "$1").replace(di, "$1;"), ae = "function(" + (Ue || "obj") + `) {
` + (Ue ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (R ? ", __e = _.escape" : "") + (M ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ae + `return __p
}`;
          var lt = Gf(function() {
            return Et(w, De + "return " + ae).apply(n, O);
          });
          if (lt.source = ae, sh(lt))
            throw lt;
          return lt;
        }
        function Zy(t) {
          return Rt(t).toLowerCase();
        }
        function Hy(t) {
          return Rt(t).toUpperCase();
        }
        function Yy(t, s, u) {
          if (t = Rt(t), t && (u || s === n))
            return jl(t);
          if (!t || !(s = lr(s)))
            return t;
          var d = vi(t), _ = vi(s), w = Cr(d, _), O = Xl(d, _) + 1;
          return $s(d, w, O).join("");
        }
        function qy(t, s, u) {
          if (t = Rt(t), t && (u || s === n))
            return t.slice(0, za(t) + 1);
          if (!t || !(s = lr(s)))
            return t;
          var d = vi(t), _ = Xl(d, vi(s)) + 1;
          return $s(d, 0, _).join("");
        }
        function Ky(t, s, u) {
          if (t = Rt(t), t && (u || s === n))
            return t.replace(Pt, "");
          if (!t || !(s = lr(s)))
            return t;
          var d = vi(t), _ = Cr(d, vi(s));
          return $s(d, _).join("");
        }
        function $y(t, s) {
          var u = Oe, d = le;
          if (dn(s)) {
            var _ = "separator" in s ? s.separator : _;
            u = "length" in s ? at(s.length) : u, d = "omission" in s ? lr(s.omission) : d;
          }
          t = Rt(t);
          var w = t.length;
          if (Gs(t)) {
            var O = vi(t);
            w = O.length;
          }
          if (u >= w)
            return t;
          var R = u - mi(d);
          if (R < 1)
            return d;
          var M = O ? $s(O, 0, R).join("") : t.slice(0, R);
          if (_ === n)
            return M + d;
          if (O && (R += M.length - R), oh(_)) {
            if (t.slice(R).search(_)) {
              var Q, ee = M;
              for (_.global || (_ = Za(_.source, Rt(Gt.exec(_)) + "g")), _.lastIndex = 0; Q = _.exec(ee); )
                var ae = Q.index;
              M = M.slice(0, ae === n ? R : ae);
            }
          } else if (t.indexOf(lr(_), R) != R) {
            var Te = M.lastIndexOf(_);
            Te > -1 && (M = M.slice(0, Te));
          }
          return M + d;
        }
        function Jy(t) {
          return t = Rt(t), t && Tr.test(t) ? t.replace(ni, Va) : t;
        }
        var jy = sa(function(t, s, u) {
          return t + (u ? " " : "") + s.toUpperCase();
        }), uh = Gd("toUpperCase");
        function kf(t, s, u) {
          return t = Rt(t), s = u ? n : s, s === n ? Qr(t) ? Qo(t) : $l(t) : t.match(s) || [];
        }
        var Gf = ht(function(t, s) {
          try {
            return rn(t, n, s);
          } catch (u) {
            return sh(u) ? u : new $e(u);
          }
        }), Xy = Ss(function(t, s) {
          return Fi(s, function(u) {
            u = ss(u), Ts(t, u, ih(t[u], t));
          }), t;
        });
        function Qy(t) {
          var s = t == null ? 0 : t.length, u = Ge();
          return t = s ? Ut(t, function(d) {
            if (typeof d[1] != "function")
              throw new si(g);
            return [u(d[0]), d[1]];
          }) : [], ht(function(d) {
            for (var _ = -1; ++_ < s; ) {
              var w = t[_];
              if (rn(w[0], this, d))
                return rn(w[1], this, d);
            }
          });
        }
        function eE(t) {
          return b_(Lr(t, S));
        }
        function ch(t) {
          return function() {
            return t;
          };
        }
        function tE(t, s) {
          return t == null || t !== t ? s : t;
        }
        var nE = zd(), iE = zd(!0);
        function Ji(t) {
          return t;
        }
        function hh(t) {
          return md(typeof t == "function" ? t : Lr(t, S));
        }
        function rE(t) {
          return yd(Lr(t, S));
        }
        function sE(t, s) {
          return Ed(t, Lr(s, S));
        }
        var oE = ht(function(t, s) {
          return function(u) {
            return $a(u, t, s);
          };
        }), aE = ht(function(t, s) {
          return function(u) {
            return $a(t, u, s);
          };
        });
        function dh(t, s, u) {
          var d = $n(s), _ = lu(s, d);
          u == null && !(dn(s) && (_.length || !d.length)) && (u = s, s = t, t = this, _ = lu(s, $n(s)));
          var w = !(dn(u) && "chain" in u) || !!u.chain, O = bs(t);
          return Fi(_, function(R) {
            var M = s[R];
            t[R] = M, O && (t.prototype[R] = function() {
              var Q = this.__chain__;
              if (w || Q) {
                var ee = t(this.__wrapped__), ae = ee.__actions__ = qi(this.__actions__);
                return ae.push({ func: M, args: arguments, thisArg: t }), ee.__chain__ = Q, ee;
              }
              return M.apply(t, Gr([this.value()], arguments));
            });
          }), t;
        }
        function lE() {
          return Gn._ === this && (Gn._ = yc), this;
        }
        function fh() {
        }
        function uE(t) {
          return t = at(t), ht(function(s) {
            return Td(s, t);
          });
        }
        var cE = Zc(Ut), hE = Zc(Ra), dE = Zc(lo);
        function Uf(t) {
          return jc(t) ? qo(ss(t)) : V_(t);
        }
        function fE(t) {
          return function(s) {
            return t == null ? n : Co(t, s);
          };
        }
        var pE = Wd(), gE = Wd(!0);
        function ph() {
          return [];
        }
        function gh() {
          return !1;
        }
        function _E() {
          return {};
        }
        function mE() {
          return "";
        }
        function vE() {
          return !0;
        }
        function yE(t, s) {
          if (t = at(t), t < 1 || t > K)
            return [];
          var u = Me, d = E(t, Me);
          s = Ge(s), t -= Me;
          for (var _ = Ga(d, s); ++u < t; )
            s(u);
          return _;
        }
        function EE(t) {
          return nt(t) ? Ut(t, ss) : ur(t) ? [t] : qi(of(Rt(t)));
        }
        function TE(t) {
          var s = ++vc;
          return Rt(t) + s;
        }
        var wE = pu(function(t, s) {
          return t + s;
        }, 0), SE = Hc("ceil"), AE = pu(function(t, s) {
          return t / s;
        }, 1), bE = Hc("floor");
        function CE(t) {
          return t && t.length ? au(t, Ji, Nc) : n;
        }
        function OE(t, s) {
          return t && t.length ? au(t, Ge(s, 2), Nc) : n;
        }
        function LE(t) {
          return Fa(t, Ji);
        }
        function IE(t, s) {
          return Fa(t, Ge(s, 2));
        }
        function NE(t) {
          return t && t.length ? au(t, Ji, xc) : n;
        }
        function DE(t, s) {
          return t && t.length ? au(t, Ge(s, 2), xc) : n;
        }
        var RE = pu(function(t, s) {
          return t * s;
        }, 1), PE = Hc("round"), xE = pu(function(t, s) {
          return t - s;
        }, 0);
        function FE(t) {
          return t && t.length ? ka(t, Ji) : 0;
        }
        function ME(t, s) {
          return t && t.length ? ka(t, Ge(s, 2)) : 0;
        }
        return T.after = r0, T.ary = mf, T.assign = H0, T.assignIn = Df, T.assignInWith = Ou, T.assignWith = Y0, T.at = q0, T.before = vf, T.bind = ih, T.bindAll = Xy, T.bindKey = yf, T.castArray = _0, T.chain = pf, T.chunk = bm, T.compact = Cm, T.concat = Om, T.cond = Qy, T.conforms = eE, T.constant = ch, T.countBy = Fv, T.create = K0, T.curry = Ef, T.curryRight = Tf, T.debounce = wf, T.defaults = $0, T.defaultsDeep = J0, T.defer = s0, T.delay = o0, T.difference = Lm, T.differenceBy = Im, T.differenceWith = Nm, T.drop = Dm, T.dropRight = Rm, T.dropRightWhile = Pm, T.dropWhile = xm, T.fill = Fm, T.filter = Bv, T.flatMap = Uv, T.flatMapDeep = zv, T.flatMapDepth = Vv, T.flatten = cf, T.flattenDeep = Mm, T.flattenDepth = Bm, T.flip = a0, T.flow = nE, T.flowRight = iE, T.fromPairs = km, T.functions = iy, T.functionsIn = ry, T.groupBy = Wv, T.initial = Um, T.intersection = zm, T.intersectionBy = Vm, T.intersectionWith = Wm, T.invert = oy, T.invertBy = ay, T.invokeMap = Hv, T.iteratee = hh, T.keyBy = Yv, T.keys = $n, T.keysIn = $i, T.map = Tu, T.mapKeys = uy, T.mapValues = cy, T.matches = rE, T.matchesProperty = sE, T.memoize = Su, T.merge = hy, T.mergeWith = Rf, T.method = oE, T.methodOf = aE, T.mixin = dh, T.negate = Au, T.nthArg = uE, T.omit = dy, T.omitBy = fy, T.once = l0, T.orderBy = qv, T.over = cE, T.overArgs = u0, T.overEvery = hE, T.overSome = dE, T.partial = rh, T.partialRight = Sf, T.partition = Kv, T.pick = py, T.pickBy = Pf, T.property = Uf, T.propertyOf = fE, T.pull = qm, T.pullAll = df, T.pullAllBy = Km, T.pullAllWith = $m, T.pullAt = Jm, T.range = pE, T.rangeRight = gE, T.rearg = c0, T.reject = jv, T.remove = jm, T.rest = h0, T.reverse = th, T.sampleSize = Qv, T.set = _y, T.setWith = my, T.shuffle = e0, T.slice = Xm, T.sortBy = i0, T.sortedUniq = sv, T.sortedUniqBy = ov, T.split = Uy, T.spread = d0, T.tail = av, T.take = lv, T.takeRight = uv, T.takeRightWhile = cv, T.takeWhile = hv, T.tap = Cv, T.throttle = f0, T.thru = Eu, T.toArray = Lf, T.toPairs = xf, T.toPairsIn = Ff, T.toPath = EE, T.toPlainObject = Nf, T.transform = vy, T.unary = p0, T.union = dv, T.unionBy = fv, T.unionWith = pv, T.uniq = gv, T.uniqBy = _v, T.uniqWith = mv, T.unset = yy, T.unzip = nh, T.unzipWith = ff, T.update = Ey, T.updateWith = Ty, T.values = la, T.valuesIn = wy, T.without = vv, T.words = kf, T.wrap = g0, T.xor = yv, T.xorBy = Ev, T.xorWith = Tv, T.zip = wv, T.zipObject = Sv, T.zipObjectDeep = Av, T.zipWith = bv, T.entries = xf, T.entriesIn = Ff, T.extend = Df, T.extendWith = Ou, dh(T, T), T.add = wE, T.attempt = Gf, T.camelCase = Cy, T.capitalize = Mf, T.ceil = SE, T.clamp = Sy, T.clone = m0, T.cloneDeep = y0, T.cloneDeepWith = E0, T.cloneWith = v0, T.conformsTo = T0, T.deburr = Bf, T.defaultTo = tE, T.divide = AE, T.endsWith = Oy, T.eq = Zr, T.escape = Ly, T.escapeRegExp = Iy, T.every = Mv, T.find = kv, T.findIndex = lf, T.findKey = j0, T.findLast = Gv, T.findLastIndex = uf, T.findLastKey = X0, T.floor = bE, T.forEach = gf, T.forEachRight = _f, T.forIn = Q0, T.forInRight = ey, T.forOwn = ty, T.forOwnRight = ny, T.get = ah, T.gt = w0, T.gte = S0, T.has = sy, T.hasIn = lh, T.head = hf, T.identity = Ji, T.includes = Zv, T.indexOf = Gm, T.inRange = Ay, T.invoke = ly, T.isArguments = Io, T.isArray = nt, T.isArrayBuffer = A0, T.isArrayLike = Ki, T.isArrayLikeObject = On, T.isBoolean = b0, T.isBuffer = Js, T.isDate = C0, T.isElement = O0, T.isEmpty = L0, T.isEqual = I0, T.isEqualWith = N0, T.isError = sh, T.isFinite = D0, T.isFunction = bs, T.isInteger = Af, T.isLength = bu, T.isMap = bf, T.isMatch = R0, T.isMatchWith = P0, T.isNaN = x0, T.isNative = F0, T.isNil = B0, T.isNull = M0, T.isNumber = Cf, T.isObject = dn, T.isObjectLike = vn, T.isPlainObject = tl, T.isRegExp = oh, T.isSafeInteger = k0, T.isSet = Of, T.isString = Cu, T.isSymbol = ur, T.isTypedArray = aa, T.isUndefined = G0, T.isWeakMap = U0, T.isWeakSet = z0, T.join = Zm, T.kebabCase = Ny, T.last = Nr, T.lastIndexOf = Hm, T.lowerCase = Dy, T.lowerFirst = Ry, T.lt = V0, T.lte = W0, T.max = CE, T.maxBy = OE, T.mean = LE, T.meanBy = IE, T.min = NE, T.minBy = DE, T.stubArray = ph, T.stubFalse = gh, T.stubObject = _E, T.stubString = mE, T.stubTrue = vE, T.multiply = RE, T.nth = Ym, T.noConflict = lE, T.noop = fh, T.now = wu, T.pad = Py, T.padEnd = xy, T.padStart = Fy, T.parseInt = My, T.random = by, T.reduce = $v, T.reduceRight = Jv, T.repeat = By, T.replace = ky, T.result = gy, T.round = PE, T.runInContext = F, T.sample = Xv, T.size = t0, T.snakeCase = Gy, T.some = n0, T.sortedIndex = Qm, T.sortedIndexBy = ev, T.sortedIndexOf = tv, T.sortedLastIndex = nv, T.sortedLastIndexBy = iv, T.sortedLastIndexOf = rv, T.startCase = zy, T.startsWith = Vy, T.subtract = xE, T.sum = FE, T.sumBy = ME, T.template = Wy, T.times = yE, T.toFinite = Cs, T.toInteger = at, T.toLength = If, T.toLower = Zy, T.toNumber = Dr, T.toSafeInteger = Z0, T.toString = Rt, T.toUpper = Hy, T.trim = Yy, T.trimEnd = qy, T.trimStart = Ky, T.truncate = $y, T.unescape = Jy, T.uniqueId = TE, T.upperCase = jy, T.upperFirst = uh, T.each = gf, T.eachRight = _f, T.first = hf, dh(T, (function() {
          var t = {};
          return is(T, function(s, u) {
            mt.call(T.prototype, u) || (t[u] = s);
          }), t;
        })(), { chain: !1 }), T.VERSION = l, Fi(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          T[t].placeholder = T;
        }), Fi(["drop", "take"], function(t, s) {
          ct.prototype[t] = function(u) {
            u = u === n ? 1 : p(at(u), 0);
            var d = this.__filtered__ && !s ? new ct(this) : this.clone();
            return d.__filtered__ ? d.__takeCount__ = E(u, d.__takeCount__) : d.__views__.push({
              size: E(u, Me),
              type: t + (d.__dir__ < 0 ? "Right" : "")
            }), d;
          }, ct.prototype[t + "Right"] = function(u) {
            return this.reverse()[t](u).reverse();
          };
        }), Fi(["filter", "map", "takeWhile"], function(t, s) {
          var u = s + 1, d = u == ge || u == te;
          ct.prototype[t] = function(_) {
            var w = this.clone();
            return w.__iteratees__.push({
              iteratee: Ge(_, 3),
              type: u
            }), w.__filtered__ = w.__filtered__ || d, w;
          };
        }), Fi(["head", "last"], function(t, s) {
          var u = "take" + (s ? "Right" : "");
          ct.prototype[t] = function() {
            return this[u](1).value()[0];
          };
        }), Fi(["initial", "tail"], function(t, s) {
          var u = "drop" + (s ? "" : "Right");
          ct.prototype[t] = function() {
            return this.__filtered__ ? new ct(this) : this[u](1);
          };
        }), ct.prototype.compact = function() {
          return this.filter(Ji);
        }, ct.prototype.find = function(t) {
          return this.filter(t).head();
        }, ct.prototype.findLast = function(t) {
          return this.reverse().find(t);
        }, ct.prototype.invokeMap = ht(function(t, s) {
          return typeof t == "function" ? new ct(this) : this.map(function(u) {
            return $a(u, t, s);
          });
        }), ct.prototype.reject = function(t) {
          return this.filter(Au(Ge(t)));
        }, ct.prototype.slice = function(t, s) {
          t = at(t);
          var u = this;
          return u.__filtered__ && (t > 0 || s < 0) ? new ct(u) : (t < 0 ? u = u.takeRight(-t) : t && (u = u.drop(t)), s !== n && (s = at(s), u = s < 0 ? u.dropRight(-s) : u.take(s - t)), u);
        }, ct.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, ct.prototype.toArray = function() {
          return this.take(Me);
        }, is(ct.prototype, function(t, s) {
          var u = /^(?:filter|find|map|reject)|While$/.test(s), d = /^(?:head|last)$/.test(s), _ = T[d ? "take" + (s == "last" ? "Right" : "") : s], w = d || /^find/.test(s);
          _ && (T.prototype[s] = function() {
            var O = this.__wrapped__, R = d ? [1] : arguments, M = O instanceof ct, Q = R[0], ee = M || nt(O), ae = function(gt) {
              var vt = _.apply(T, Gr([gt], R));
              return d && Te ? vt[0] : vt;
            };
            ee && u && typeof Q == "function" && Q.length != 1 && (M = ee = !1);
            var Te = this.__chain__, De = !!this.__actions__.length, Ue = w && !Te, lt = M && !De;
            if (!w && ee) {
              O = lt ? O : new ct(this);
              var ze = t.apply(O, R);
              return ze.__actions__.push({ func: Eu, args: [ae], thisArg: n }), new yi(ze, Te);
            }
            return Ue && lt ? t.apply(this, R) : (ze = this.thru(ae), Ue ? d ? ze.value()[0] : ze.value() : ze);
          });
        }), Fi(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var s = ea[t], u = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", d = /^(?:pop|shift)$/.test(t);
          T.prototype[t] = function() {
            var _ = arguments;
            if (d && !this.__chain__) {
              var w = this.value();
              return s.apply(nt(w) ? w : [], _);
            }
            return this[u](function(O) {
              return s.apply(nt(O) ? O : [], _);
            });
          };
        }), is(ct.prototype, function(t, s) {
          var u = T[s];
          if (u) {
            var d = u.name + "";
            mt.call(ar, d) || (ar[d] = []), ar[d].push({ name: s, func: u });
          }
        }), ar[fu(n, W).name] = [{
          name: "wrapper",
          func: n
        }], ct.prototype.clone = bc, ct.prototype.reverse = jg, ct.prototype.value = Xg, T.prototype.at = Ov, T.prototype.chain = Lv, T.prototype.commit = Iv, T.prototype.next = Nv, T.prototype.plant = Rv, T.prototype.reverse = Pv, T.prototype.toJSON = T.prototype.valueOf = T.prototype.value = xv, T.prototype.first = T.prototype.head, Zs && (T.prototype[Zs] = Dv), T;
      }), Ur = zs();
      or ? ((or.exports = Ur)._ = Ur, xi._ = Ur) : Gn._ = Ur;
    }).call(P1);
  })(rl, rl.exports)), rl.exports;
}
var sl = x1();
function F1(o, ...i) {
  return [].slice.call(arguments, 1).reduce(function(n, l) {
    return n && n[l];
  }, o);
}
function mh(o, i) {
  const n = i.replace("\\.", "<|>");
  try {
    return n.split(".").reduce((l, h) => {
      const f = parseInt(h);
      return isFinite(f) && Array.isArray(l) ? l[f] : l[h.replace("<|>", ".")];
    }, o);
  } catch {
    return null;
  }
}
const os = {
  eq: "eq",
  lt: "lt",
  gt: "gt",
  lte: "lte",
  gte: "gte",
  neq: "neq"
};
function M1() {
  const o = (f, g) => !g.thing || g.thing.length == 0 || !f ? !1 : g.thing.map(
    (y) => {
      if (y.value == "*")
        return !0;
      {
        const m = mh(f, y.prop ?? "");
        return !m || !y.comperator ? !1 : h(y.comperator, m, y.value);
      }
    }
  ).reduce(
    (y, m) => y && m,
    !0
  ), i = (f, g) => !g.datastream || g.datastream.length == 0 || !f ? !1 : g.datastream.map(
    (y) => {
      if (y.value == "*")
        return !0;
      {
        const m = mh(f, y.prop ?? "");
        return m == null ? y.comperator === os.neq : y.comperator ? h(y.comperator, m, y.value) : !1;
      }
    }
  ).reduce(
    (y, m) => y && m,
    !0
  ), n = (f, g) => {
    if (!g.datastream || g.datastream.length == 0)
      return f;
    if (!f) return { type: "FeatureCollection", features: [] };
    const v = { ...f }, y = [];
    for (const m of f.features)
      for (const A of g.datastream)
        if (A.value == "*") {
          y.push(m);
          break;
        } else {
          const S = mh(m.properties, A.prop ?? "");
          if (!S)
            continue;
          if (A.comperator && h(A.comperator, S, A.value)) {
            y.push(m);
            break;
          }
        }
    return v.features = y, v;
  }, l = (f, g) => {
    const v = g.startsWith("*"), y = g.endsWith("*");
    if (v && y) {
      const m = g.slice(1, -1);
      return f.includes(m);
    } else if (v) {
      const m = g.slice(1);
      return f.endsWith(m);
    } else if (y) {
      const m = g.slice(0, -1);
      return f.startsWith(m);
    }
    return !1;
  }, h = (f, g, v) => {
    const y = String(g), m = String(v), A = m.includes("*");
    switch (f) {
      case os.eq:
        return A ? l(y, m) : y === m;
      case os.neq:
        return A ? !l(y, m) : y !== m;
      case os.gt:
        return Number(g) > Number(v);
      case os.gte:
        return Number(g) >= Number(v);
      case os.lt:
        return Number(g) < Number(v);
      case os.lte:
        return Number(g) <= Number(v);
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
function B1() {
  return {
    isFeature: (h) => !(!h || !h.type || h.type !== "Feature"),
    isFeatureCollection: (h) => !(!h || !h.type || h.type !== "FeatureCollection"),
    isPoint: (h) => !(!h || !h.type || h.type !== "Point" || !h.coordinates || !sl.isArray(h.coordinates) || h.coordinates.length < 2),
    transformToGeoJson: (h) => h ? h.type == "Feature" || h.type == "FeatureCollection" ? h : ["Polygon", "MultiPolygon", "Line", "MultiLine", "Point", "MultiPoint"].includes(h.type) ? {
      type: "Feature",
      properties: {},
      geometry: h
    } : null : null
  };
}
var ol = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var k1 = ol.exports, ep;
function G1() {
  return ep || (ep = 1, (function(o, i) {
    (function(n, l) {
      l(i);
    })(k1, (function(n) {
      var l = "1.9.4";
      function h(e) {
        var r, a, c, p;
        for (a = 1, c = arguments.length; a < c; a++) {
          p = arguments[a];
          for (r in p)
            e[r] = p[r];
        }
        return e;
      }
      var f = Object.create || /* @__PURE__ */ (function() {
        function e() {
        }
        return function(r) {
          return e.prototype = r, new e();
        };
      })();
      function g(e, r) {
        var a = Array.prototype.slice;
        if (e.bind)
          return e.bind.apply(e, a.call(arguments, 1));
        var c = a.call(arguments, 2);
        return function() {
          return e.apply(r, c.length ? c.concat(a.call(arguments)) : arguments);
        };
      }
      var v = 0;
      function y(e) {
        return "_leaflet_id" in e || (e._leaflet_id = ++v), e._leaflet_id;
      }
      function m(e, r, a) {
        var c, p, E, N;
        return N = function() {
          c = !1, p && (E.apply(a, p), p = !1);
        }, E = function() {
          c ? p = arguments : (e.apply(a, arguments), setTimeout(N, r), c = !0);
        }, E;
      }
      function A(e, r, a) {
        var c = r[1], p = r[0], E = c - p;
        return e === c && a ? e : ((e - p) % E + E) % E + p;
      }
      function S() {
        return !1;
      }
      function I(e, r) {
        if (r === !1)
          return e;
        var a = Math.pow(10, r === void 0 ? 6 : r);
        return Math.round(e * a) / a;
      }
      function D(e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
      }
      function B(e) {
        return D(e).split(/\s+/);
      }
      function G(e, r) {
        Object.prototype.hasOwnProperty.call(e, "options") || (e.options = e.options ? f(e.options) : {});
        for (var a in r)
          e.options[a] = r[a];
        return e.options;
      }
      function j(e, r, a) {
        var c = [];
        for (var p in e)
          c.push(encodeURIComponent(a ? p.toUpperCase() : p) + "=" + encodeURIComponent(e[p]));
        return (!r || r.indexOf("?") === -1 ? "?" : "&") + c.join("&");
      }
      var W = /\{ *([\w_ -]+) *\}/g;
      function Z(e, r) {
        return e.replace(W, function(a, c) {
          var p = r[c];
          if (p === void 0)
            throw new Error("No value provided for variable " + a);
          return typeof p == "function" && (p = p(r)), p;
        });
      }
      var J = Array.isArray || function(e) {
        return Object.prototype.toString.call(e) === "[object Array]";
      };
      function P(e, r) {
        for (var a = 0; a < e.length; a++)
          if (e[a] === r)
            return a;
        return -1;
      }
      var U = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function re(e) {
        return window["webkit" + e] || window["moz" + e] || window["ms" + e];
      }
      var fe = 0;
      function Ee(e) {
        var r = +/* @__PURE__ */ new Date(), a = Math.max(0, 16 - (r - fe));
        return fe = r + a, window.setTimeout(e, a);
      }
      var he = window.requestAnimationFrame || re("RequestAnimationFrame") || Ee, Oe = window.cancelAnimationFrame || re("CancelAnimationFrame") || re("CancelRequestAnimationFrame") || function(e) {
        window.clearTimeout(e);
      };
      function le(e, r, a) {
        if (a && he === Ee)
          e.call(r);
        else
          return he.call(window, g(e, r));
      }
      function ne(e) {
        e && Oe.call(window, e);
      }
      var V = {
        __proto__: null,
        extend: h,
        create: f,
        bind: g,
        get lastId() {
          return v;
        },
        stamp: y,
        throttle: m,
        wrapNum: A,
        falseFn: S,
        formatNum: I,
        trim: D,
        splitWords: B,
        setOptions: G,
        getParamString: j,
        template: Z,
        isArray: J,
        indexOf: P,
        emptyImageUrl: U,
        requestFn: he,
        cancelFn: Oe,
        requestAnimFrame: le,
        cancelAnimFrame: ne
      };
      function ge() {
      }
      ge.extend = function(e) {
        var r = function() {
          G(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, a = r.__super__ = this.prototype, c = f(a);
        c.constructor = r, r.prototype = c;
        for (var p in this)
          Object.prototype.hasOwnProperty.call(this, p) && p !== "prototype" && p !== "__super__" && (r[p] = this[p]);
        return e.statics && h(r, e.statics), e.includes && (Ae(e.includes), h.apply(null, [c].concat(e.includes))), h(c, e), delete c.statics, delete c.includes, c.options && (c.options = a.options ? f(a.options) : {}, h(c.options, e.options)), c._initHooks = [], c.callInitHooks = function() {
          if (!this._initHooksCalled) {
            a.callInitHooks && a.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var E = 0, N = c._initHooks.length; E < N; E++)
              c._initHooks[E].call(this);
          }
        }, r;
      }, ge.include = function(e) {
        var r = this.prototype.options;
        return h(this.prototype, e), e.options && (this.prototype.options = r, this.mergeOptions(e.options)), this;
      }, ge.mergeOptions = function(e) {
        return h(this.prototype.options, e), this;
      }, ge.addInitHook = function(e) {
        var r = Array.prototype.slice.call(arguments, 1), a = typeof e == "function" ? e : function() {
          this[e].apply(this, r);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(a), this;
      };
      function Ae(e) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          e = J(e) ? e : [e];
          for (var r = 0; r < e.length; r++)
            e[r] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var te = {
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
            e = B(e);
            for (var p = 0, E = e.length; p < E; p++)
              this._on(e[p], r, a);
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
            e = B(e);
            for (var p = arguments.length === 1, E = 0, N = e.length; E < N; E++)
              p ? this._off(e[E]) : this._off(e[E], r, a);
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
            var p = { fn: r, ctx: a };
            c && (p.once = !0), this._events = this._events || {}, this._events[e] = this._events[e] || [], this._events[e].push(p);
          }
        },
        _off: function(e, r, a) {
          var c, p, E;
          if (this._events && (c = this._events[e], !!c)) {
            if (arguments.length === 1) {
              if (this._firingCount)
                for (p = 0, E = c.length; p < E; p++)
                  c[p].fn = S;
              delete this._events[e];
              return;
            }
            if (typeof r != "function") {
              console.warn("wrong listener type: " + typeof r);
              return;
            }
            var N = this._listens(e, r, a);
            if (N !== !1) {
              var k = c[N];
              this._firingCount && (k.fn = S, this._events[e] = c = c.slice()), c.splice(N, 1);
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
          var c = h({}, r, {
            type: e,
            target: this,
            sourceTarget: r && r.sourceTarget || this
          });
          if (this._events) {
            var p = this._events[e];
            if (p) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var E = 0, N = p.length; E < N; E++) {
                var k = p[E], H = k.fn;
                k.once && this.off(e, H, k.ctx), H.call(k.ctx || this, c);
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
          var p = r;
          typeof r != "function" && (c = !!r, p = void 0, a = void 0);
          var E = this._events && this._events[e];
          if (E && E.length && this._listens(e, p, a) !== !1)
            return !0;
          if (c) {
            for (var N in this._eventParents)
              if (this._eventParents[N].listens(e, r, a, c))
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
          for (var p = 0, E = c.length; p < E; p++)
            if (c[p].fn === r && c[p].ctx === a)
              return p;
          return !1;
        },
        // @method once(…): this
        // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
        once: function(e, r, a) {
          if (typeof e == "object")
            for (var c in e)
              this._on(c, e[c], r, !0);
          else {
            e = B(e);
            for (var p = 0, E = e.length; p < E; p++)
              this._on(e[p], r, a, !0);
          }
          return this;
        },
        // @method addEventParent(obj: Evented): this
        // Adds an event parent - an `Evented` that will receive propagated events
        addEventParent: function(e) {
          return this._eventParents = this._eventParents || {}, this._eventParents[y(e)] = e, this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(e) {
          return this._eventParents && delete this._eventParents[y(e)], this;
        },
        _propagateEvent: function(e) {
          for (var r in this._eventParents)
            this._eventParents[r].fire(e.type, h({
              layer: e.target,
              propagatedFrom: e.target
            }, e), !0);
        }
      };
      te.addEventListener = te.on, te.removeEventListener = te.clearAllEventListeners = te.off, te.addOneTimeEventListener = te.once, te.fireEvent = te.fire, te.hasEventListeners = te.listens;
      var oe = ge.extend(te);
      function K(e, r, a) {
        this.x = a ? Math.round(e) : e, this.y = a ? Math.round(r) : r;
      }
      var Fe = Math.trunc || function(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
      };
      K.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new K(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(e) {
          return this.clone()._add(Le(e));
        },
        _add: function(e) {
          return this.x += e.x, this.y += e.y, this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(e) {
          return this.clone()._subtract(Le(e));
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
          return new K(this.x * e.x, this.y * e.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(e) {
          return new K(this.x / e.x, this.y / e.y);
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
          return this.x = Fe(this.x), this.y = Fe(this.y), this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(e) {
          e = Le(e);
          var r = e.x - this.x, a = e.y - this.y;
          return Math.sqrt(r * r + a * a);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(e) {
          return e = Le(e), e.x === this.x && e.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(e) {
          return e = Le(e), Math.abs(e.x) <= Math.abs(this.x) && Math.abs(e.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
          return "Point(" + I(this.x) + ", " + I(this.y) + ")";
        }
      };
      function Le(e, r, a) {
        return e instanceof K ? e : J(e) ? new K(e[0], e[1]) : e == null ? e : typeof e == "object" && "x" in e && "y" in e ? new K(e.x, e.y) : new K(e, r, a);
      }
      function Me(e, r) {
        if (e)
          for (var a = r ? [e, r] : e, c = 0, p = a.length; c < p; c++)
            this.extend(a[c]);
      }
      Me.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(e) {
          var r, a;
          if (!e)
            return this;
          if (e instanceof K || typeof e[0] == "number" || "x" in e)
            r = a = Le(e);
          else if (e = kt(e), r = e.min, a = e.max, !r || !a)
            return this;
          return !this.min && !this.max ? (this.min = r.clone(), this.max = a.clone()) : (this.min.x = Math.min(r.x, this.min.x), this.max.x = Math.max(a.x, this.max.x), this.min.y = Math.min(r.y, this.min.y), this.max.y = Math.max(a.y, this.max.y)), this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(e) {
          return Le(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            e
          );
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
          return Le(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
          return Le(this.max.x, this.min.y);
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
          return typeof e[0] == "number" || e instanceof K ? e = Le(e) : e = kt(e), e instanceof Me ? (r = e.min, a = e.max) : r = a = e, r.x >= this.min.x && a.x <= this.max.x && r.y >= this.min.y && a.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(e) {
          e = kt(e);
          var r = this.min, a = this.max, c = e.min, p = e.max, E = p.x >= r.x && c.x <= a.x, N = p.y >= r.y && c.y <= a.y;
          return E && N;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(e) {
          e = kt(e);
          var r = this.min, a = this.max, c = e.min, p = e.max, E = p.x > r.x && c.x < a.x, N = p.y > r.y && c.y < a.y;
          return E && N;
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
          var r = this.min, a = this.max, c = Math.abs(r.x - a.x) * e, p = Math.abs(r.y - a.y) * e;
          return kt(
            Le(r.x - c, r.y - p),
            Le(a.x + c, a.y + p)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(e) {
          return e ? (e = kt(e), this.min.equals(e.getTopLeft()) && this.max.equals(e.getBottomRight())) : !1;
        }
      };
      function kt(e, r) {
        return !e || e instanceof Me ? e : new Me(e, r);
      }
      function en(e, r) {
        if (e)
          for (var a = r ? [e, r] : e, c = 0, p = a.length; c < p; c++)
            this.extend(a[c]);
      }
      en.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(e) {
          var r = this._southWest, a = this._northEast, c, p;
          if (e instanceof Qe)
            c = e, p = e;
          else if (e instanceof en) {
            if (c = e._southWest, p = e._northEast, !c || !p)
              return this;
          } else
            return e ? this.extend(Ye(e) || Ot(e)) : this;
          return !r && !a ? (this._southWest = new Qe(c.lat, c.lng), this._northEast = new Qe(p.lat, p.lng)) : (r.lat = Math.min(c.lat, r.lat), r.lng = Math.min(c.lng, r.lng), a.lat = Math.max(p.lat, a.lat), a.lng = Math.max(p.lng, a.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(e) {
          var r = this._southWest, a = this._northEast, c = Math.abs(r.lat - a.lat) * e, p = Math.abs(r.lng - a.lng) * e;
          return new en(
            new Qe(r.lat - c, r.lng - p),
            new Qe(a.lat + c, a.lng + p)
          );
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
          return new Qe(
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
          return new Qe(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
          return new Qe(this.getSouth(), this.getEast());
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
          typeof e[0] == "number" || e instanceof Qe || "lat" in e ? e = Ye(e) : e = Ot(e);
          var r = this._southWest, a = this._northEast, c, p;
          return e instanceof en ? (c = e.getSouthWest(), p = e.getNorthEast()) : c = p = e, c.lat >= r.lat && p.lat <= a.lat && c.lng >= r.lng && p.lng <= a.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(e) {
          e = Ot(e);
          var r = this._southWest, a = this._northEast, c = e.getSouthWest(), p = e.getNorthEast(), E = p.lat >= r.lat && c.lat <= a.lat, N = p.lng >= r.lng && c.lng <= a.lng;
          return E && N;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(e) {
          e = Ot(e);
          var r = this._southWest, a = this._northEast, c = e.getSouthWest(), p = e.getNorthEast(), E = p.lat > r.lat && c.lat < a.lat, N = p.lng > r.lng && c.lng < a.lng;
          return E && N;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(e, r) {
          return e ? (e = Ot(e), this._southWest.equals(e.getSouthWest(), r) && this._northEast.equals(e.getNorthEast(), r)) : !1;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this._southWest && this._northEast);
        }
      };
      function Ot(e, r) {
        return e instanceof en ? e : new en(e, r);
      }
      function Qe(e, r, a) {
        if (isNaN(e) || isNaN(r))
          throw new Error("Invalid LatLng object: (" + e + ", " + r + ")");
        this.lat = +e, this.lng = +r, a !== void 0 && (this.alt = +a);
      }
      Qe.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(e, r) {
          if (!e)
            return !1;
          e = Ye(e);
          var a = Math.max(
            Math.abs(this.lat - e.lat),
            Math.abs(this.lng - e.lng)
          );
          return a <= (r === void 0 ? 1e-9 : r);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(e) {
          return "LatLng(" + I(this.lat, e) + ", " + I(this.lng, e) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(e) {
          return un.distance(this, Ye(e));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return un.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(e) {
          var r = 180 * e / 40075017, a = r / Math.cos(Math.PI / 180 * this.lat);
          return Ot(
            [this.lat - r, this.lng - a],
            [this.lat + r, this.lng + a]
          );
        },
        clone: function() {
          return new Qe(this.lat, this.lng, this.alt);
        }
      };
      function Ye(e, r, a) {
        return e instanceof Qe ? e : J(e) && typeof e[0] != "object" ? e.length === 3 ? new Qe(e[0], e[1], e[2]) : e.length === 2 ? new Qe(e[0], e[1]) : null : e == null ? e : typeof e == "object" && "lat" in e ? new Qe(e.lat, "lng" in e ? e.lng : e.lon, e.alt) : r === void 0 ? null : new Qe(e, r, a);
      }
      var Vt = {
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
          var r = this.projection.bounds, a = this.scale(e), c = this.transformation.transform(r.min, a), p = this.transformation.transform(r.max, a);
          return new Me(c, p);
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
          return new Qe(a, r, c);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(e) {
          var r = e.getCenter(), a = this.wrapLatLng(r), c = r.lat - a.lat, p = r.lng - a.lng;
          if (c === 0 && p === 0)
            return e;
          var E = e.getSouthWest(), N = e.getNorthEast(), k = new Qe(E.lat - c, E.lng - p), H = new Qe(N.lat - c, N.lng - p);
          return new en(k, H);
        }
      }, un = h({}, Vt, {
        wrapLng: [-180, 180],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371e3,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(e, r) {
          var a = Math.PI / 180, c = e.lat * a, p = r.lat * a, E = Math.sin((r.lat - e.lat) * a / 2), N = Math.sin((r.lng - e.lng) * a / 2), k = E * E + Math.cos(c) * Math.cos(p) * N * N, H = 2 * Math.atan2(Math.sqrt(k), Math.sqrt(1 - k));
          return this.R * H;
        }
      }), ci = 6378137, qt = {
        R: ci,
        MAX_LATITUDE: 85.0511287798,
        project: function(e) {
          var r = Math.PI / 180, a = this.MAX_LATITUDE, c = Math.max(Math.min(a, e.lat), -a), p = Math.sin(c * r);
          return new K(
            this.R * e.lng * r,
            this.R * Math.log((1 + p) / (1 - p)) / 2
          );
        },
        unproject: function(e) {
          var r = 180 / Math.PI;
          return new Qe(
            (2 * Math.atan(Math.exp(e.y / this.R)) - Math.PI / 2) * r,
            e.x * r / this.R
          );
        },
        bounds: (function() {
          var e = ci * Math.PI;
          return new Me([-e, -e], [e, e]);
        })()
      };
      function Zn(e, r, a, c) {
        if (J(e)) {
          this._a = e[0], this._b = e[1], this._c = e[2], this._d = e[3];
          return;
        }
        this._a = e, this._b = r, this._c = a, this._d = c;
      }
      Zn.prototype = {
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
          return r = r || 1, new K(
            (e.x / r - this._b) / this._a,
            (e.y / r - this._d) / this._c
          );
        }
      };
      function Dn(e, r, a, c) {
        return new Zn(e, r, a, c);
      }
      var bi = h({}, un, {
        code: "EPSG:3857",
        projection: qt,
        transformation: (function() {
          var e = 0.5 / (Math.PI * qt.R);
          return Dn(e, 0.5, -e, 0.5);
        })()
      }), pn = h({}, bi, {
        code: "EPSG:900913"
      });
      function jn(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e);
      }
      function gn(e, r) {
        var a = "", c, p, E, N, k, H;
        for (c = 0, E = e.length; c < E; c++) {
          for (k = e[c], p = 0, N = k.length; p < N; p++)
            H = k[p], a += (p ? "L" : "M") + H.x + " " + H.y;
          a += r ? de.svg ? "z" : "x" : "";
        }
        return a || "M0 0";
      }
      var _n = document.documentElement.style, tn = "ActiveXObject" in window, yr = tn && !document.addEventListener, Hn = "msLaunchUri" in navigator && !("documentMode" in document), Kt = Lt("webkit"), Xn = Lt("android"), Ci = Lt("android 2") || Lt("android 3"), hi = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), Rn = Xn && Lt("Google") && hi < 537 && !("AudioNode" in window), Oi = !!window.opera, Sn = !Hn && Lt("chrome"), Yn = Lt("gecko") && !Kt && !Oi && !tn, tr = !Sn && Lt("safari"), Qn = Lt("phantom"), Li = "OTransition" in _n, qn = navigator.platform.indexOf("Win") === 0, ei = tn && "transition" in _n, Ii = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !Ci, Ni = "MozPerspective" in _n, nn = !window.L_DISABLE_3D && (ei || Ii || Ni) && !Li && !Qn, ti = typeof orientation < "u" || Lt("mobile"), Er = ti && Kt, Di = ti && Ii, di = !window.PointerEvent && window.MSPointerEvent, ni = !!(window.PointerEvent || di), nr = "ontouchstart" in window || !!window.TouchEvent, Tr = !window.L_NO_TOUCH && (nr || ni), x = ti && Oi, ce = ti && Yn, q = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, ve = (function() {
        var e = !1;
        try {
          var r = Object.defineProperty({}, "passive", {
            get: function() {
              e = !0;
            }
          });
          window.addEventListener("testPassiveEventSupport", S, r), window.removeEventListener("testPassiveEventSupport", S, r);
        } catch {
        }
        return e;
      })(), ke = (function() {
        return !!document.createElement("canvas").getContext;
      })(), Pe = !!(document.createElementNS && jn("svg").createSVGRect), ot = !!Pe && (function() {
        var e = document.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      })(), ft = !Pe && (function() {
        try {
          var e = document.createElement("div");
          e.innerHTML = '<v:shape adj="1"/>';
          var r = e.firstChild;
          return r.style.behavior = "url(#default#VML)", r && typeof r.adj == "object";
        } catch {
          return !1;
        }
      })(), Ft = navigator.platform.indexOf("Mac") === 0, Pt = navigator.platform.indexOf("Linux") === 0;
      function Lt(e) {
        return navigator.userAgent.toLowerCase().indexOf(e) >= 0;
      }
      var de = {
        ie: tn,
        ielt9: yr,
        edge: Hn,
        webkit: Kt,
        android: Xn,
        android23: Ci,
        androidStock: Rn,
        opera: Oi,
        chrome: Sn,
        gecko: Yn,
        safari: tr,
        phantom: Qn,
        opera12: Li,
        win: qn,
        ie3d: ei,
        webkit3d: Ii,
        gecko3d: Ni,
        any3d: nn,
        mobile: ti,
        mobileWebkit: Er,
        mobileWebkit3d: Di,
        msPointer: di,
        pointer: ni,
        touch: Tr,
        touchNative: nr,
        mobileOpera: x,
        mobileGecko: ce,
        retina: q,
        passiveEvents: ve,
        canvas: ke,
        svg: Pe,
        vml: ft,
        inlineSvg: ot,
        mac: Ft,
        linux: Pt
      }, Pn = de.msPointer ? "MSPointerDown" : "pointerdown", ii = de.msPointer ? "MSPointerMove" : "pointermove", Wi = de.msPointer ? "MSPointerUp" : "pointerup", fi = de.msPointer ? "MSPointerCancel" : "pointercancel", ir = {
        touchstart: Pn,
        touchmove: ii,
        touchend: Wi,
        touchcancel: fi
      }, xt = {
        touchstart: $t,
        touchmove: cn,
        touchend: cn,
        touchcancel: cn
      }, Gt = {}, pt = !1;
      function An(e, r, a) {
        return r === "touchstart" && kn(), xt[r] ? (a = xt[r].bind(this, a), e.addEventListener(ir[r], a, !1), a) : (console.warn("wrong event specified:", r), S);
      }
      function bn(e, r, a) {
        if (!ir[r]) {
          console.warn("wrong event specified:", r);
          return;
        }
        e.removeEventListener(ir[r], a, !1);
      }
      function ri(e) {
        Gt[e.pointerId] = e;
      }
      function Nt(e) {
        Gt[e.pointerId] && (Gt[e.pointerId] = e);
      }
      function Zi(e) {
        delete Gt[e.pointerId];
      }
      function kn() {
        pt || (document.addEventListener(Pn, ri, !0), document.addEventListener(ii, Nt, !0), document.addEventListener(Wi, Zi, !0), document.addEventListener(fi, Zi, !0), pt = !0);
      }
      function cn(e, r) {
        if (r.pointerType !== (r.MSPOINTER_TYPE_MOUSE || "mouse")) {
          r.touches = [];
          for (var a in Gt)
            r.touches.push(Gt[a]);
          r.changedTouches = [r], e(r);
        }
      }
      function $t(e, r) {
        r.MSPOINTER_TYPE_TOUCH && r.pointerType === r.MSPOINTER_TYPE_TOUCH && tt(r), cn(e, r);
      }
      function Ri(e) {
        var r = {}, a, c;
        for (c in e)
          a = e[c], r[c] = a && a.bind ? a.bind(e) : a;
        return e = r, r.type = "dblclick", r.detail = 2, r.isTrusted = !1, r._simulated = !0, r;
      }
      var Fr = 200;
      function fs(e, r) {
        e.addEventListener("dblclick", r);
        var a = 0, c;
        function p(E) {
          if (E.detail !== 1) {
            c = E.detail;
            return;
          }
          if (!(E.pointerType === "mouse" || E.sourceCapabilities && !E.sourceCapabilities.firesTouchEvents)) {
            var N = zl(E);
            if (!(N.some(function(H) {
              return H instanceof HTMLLabelElement && H.attributes.for;
            }) && !N.some(function(H) {
              return H instanceof HTMLInputElement || H instanceof HTMLSelectElement;
            }))) {
              var k = Date.now();
              k - a <= Fr ? (c++, c === 2 && r(Ri(E))) : c = 1, a = k;
            }
          }
        }
        return e.addEventListener("click", p), {
          dblclick: r,
          simDblclick: p
        };
      }
      function pi(e, r) {
        e.removeEventListener("dblclick", r.dblclick), e.removeEventListener("click", r.simDblclick);
      }
      var wr = xs(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), Hi = xs(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), $r = Hi === "webkitTransition" || Hi === "OTransition" ? Hi + "End" : "transitionend";
      function Jr(e) {
        return typeof e == "string" ? document.getElementById(e) : e;
      }
      function rr(e, r) {
        var a = e.style[r] || e.currentStyle && e.currentStyle[r];
        if ((!a || a === "auto") && document.defaultView) {
          var c = document.defaultView.getComputedStyle(e, null);
          a = c ? c[r] : null;
        }
        return a === "auto" ? null : a;
      }
      function et(e, r, a) {
        var c = document.createElement(e);
        return c.className = r || "", a && a.appendChild(c), c;
      }
      function bt(e) {
        var r = e.parentNode;
        r && r.removeChild(e);
      }
      function sr(e) {
        for (; e.firstChild; )
          e.removeChild(e.firstChild);
      }
      function xn(e) {
        var r = e.parentNode;
        r && r.lastChild !== e && r.appendChild(e);
      }
      function gi(e) {
        var r = e.parentNode;
        r && r.firstChild !== e && r.insertBefore(e, r.firstChild);
      }
      function Mr(e, r) {
        if (e.classList !== void 0)
          return e.classList.contains(r);
        var a = Uo(e);
        return a.length > 0 && new RegExp("(^|\\s)" + r + "(\\s|$)").test(a);
      }
      function Ve(e, r) {
        if (e.classList !== void 0)
          for (var a = B(r), c = 0, p = a.length; c < p; c++)
            e.classList.add(a[c]);
        else if (!Mr(e, r)) {
          var E = Uo(e);
          Go(e, (E ? E + " " : "") + r);
        }
      }
      function Ct(e, r) {
        e.classList !== void 0 ? e.classList.remove(r) : Go(e, D((" " + Uo(e) + " ").replace(" " + r + " ", " ")));
      }
      function Go(e, r) {
        e.className.baseVal === void 0 ? e.className = r : e.className.baseVal = r;
      }
      function Uo(e) {
        return e.correspondingElement && (e = e.correspondingElement), e.className.baseVal === void 0 ? e.className : e.className.baseVal;
      }
      function Pi(e, r) {
        "opacity" in e.style ? e.style.opacity = r : "filter" in e.style && Bl(e, r);
      }
      function Bl(e, r) {
        var a = !1, c = "DXImageTransform.Microsoft.Alpha";
        try {
          a = e.filters.item(c);
        } catch {
          if (r === 1)
            return;
        }
        r = Math.round(r * 100), a ? (a.Enabled = r !== 100, a.Opacity = r) : e.style.filter += " progid:" + c + "(opacity=" + r + ")";
      }
      function xs(e) {
        for (var r = document.documentElement.style, a = 0; a < e.length; a++)
          if (e[a] in r)
            return e[a];
        return !1;
      }
      function ps(e, r, a) {
        var c = r || new K(0, 0);
        e.style[wr] = (de.ie3d ? "translate(" + c.x + "px," + c.y + "px)" : "translate3d(" + c.x + "px," + c.y + "px,0)") + (a ? " scale(" + a + ")" : "");
      }
      function hn(e, r) {
        e._leaflet_pos = r, de.any3d ? ps(e, r) : (e.style.left = r.x + "px", e.style.top = r.y + "px");
      }
      function Br(e) {
        return e._leaflet_pos || new K(0, 0);
      }
      var gs, Sr, zo;
      if ("onselectstart" in document)
        gs = function() {
          je(window, "selectstart", tt);
        }, Sr = function() {
          Mt(window, "selectstart", tt);
        };
      else {
        var Fs = xs(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        gs = function() {
          if (Fs) {
            var e = document.documentElement.style;
            zo = e[Fs], e[Fs] = "none";
          }
        }, Sr = function() {
          Fs && (document.documentElement.style[Fs] = zo, zo = void 0);
        };
      }
      function wa() {
        je(window, "dragstart", tt);
      }
      function Vo() {
        Mt(window, "dragstart", tt);
      }
      var so, Wo;
      function Zo(e) {
        for (; e.tabIndex === -1; )
          e = e.parentNode;
        e.style && (Ho(), so = e, Wo = e.style.outlineStyle, e.style.outlineStyle = "none", je(window, "keydown", Ho));
      }
      function Ho() {
        so && (so.style.outlineStyle = Wo, so = void 0, Wo = void 0, Mt(window, "keydown", Ho));
      }
      function kl(e) {
        do
          e = e.parentNode;
        while ((!e.offsetWidth || !e.offsetHeight) && e !== document.body);
        return e;
      }
      function Sa(e) {
        var r = e.getBoundingClientRect();
        return {
          x: r.width / e.offsetWidth || 1,
          y: r.height / e.offsetHeight || 1,
          boundingClientRect: r
        };
      }
      var Gl = {
        __proto__: null,
        TRANSFORM: wr,
        TRANSITION: Hi,
        TRANSITION_END: $r,
        get: Jr,
        getStyle: rr,
        create: et,
        remove: bt,
        empty: sr,
        toFront: xn,
        toBack: gi,
        hasClass: Mr,
        addClass: Ve,
        removeClass: Ct,
        setClass: Go,
        getClass: Uo,
        setOpacity: Pi,
        testProp: xs,
        setTransform: ps,
        setPosition: hn,
        getPosition: Br,
        get disableTextSelection() {
          return gs;
        },
        get enableTextSelection() {
          return Sr;
        },
        disableImageDrag: wa,
        enableImageDrag: Vo,
        preventOutline: Zo,
        restoreOutline: Ho,
        getSizedParentNode: kl,
        getScale: Sa
      };
      function je(e, r, a, c) {
        if (r && typeof r == "object")
          for (var p in r)
            Aa(e, p, r[p], a);
        else {
          r = B(r);
          for (var E = 0, N = r.length; E < N; E++)
            Aa(e, r[E], a, c);
        }
        return this;
      }
      var Ar = "_leaflet_events";
      function Mt(e, r, a, c) {
        if (arguments.length === 1)
          Ul(e), delete e[Ar];
        else if (r && typeof r == "object")
          for (var p in r)
            ba(e, p, r[p], a);
        else if (r = B(r), arguments.length === 2)
          Ul(e, function(k) {
            return P(r, k) !== -1;
          });
        else
          for (var E = 0, N = r.length; E < N; E++)
            ba(e, r[E], a, c);
        return this;
      }
      function Ul(e, r) {
        for (var a in e[Ar]) {
          var c = a.split(/\d/)[0];
          (!r || r(c)) && ba(e, c, null, null, a);
        }
      }
      var oo = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function Aa(e, r, a, c) {
        var p = r + y(a) + (c ? "_" + y(c) : "");
        if (e[Ar] && e[Ar][p])
          return this;
        var E = function(k) {
          return a.call(c || e, k || window.event);
        }, N = E;
        !de.touchNative && de.pointer && r.indexOf("touch") === 0 ? E = An(e, r, E) : de.touch && r === "dblclick" ? E = fs(e, E) : "addEventListener" in e ? r === "touchstart" || r === "touchmove" || r === "wheel" || r === "mousewheel" ? e.addEventListener(oo[r] || r, E, de.passiveEvents ? { passive: !1 } : !1) : r === "mouseenter" || r === "mouseleave" ? (E = function(k) {
          k = k || window.event, Oa(e, k) && N(k);
        }, e.addEventListener(oo[r], E, !1)) : e.addEventListener(r, N, !1) : e.attachEvent("on" + r, E), e[Ar] = e[Ar] || {}, e[Ar][p] = E;
      }
      function ba(e, r, a, c, p) {
        p = p || r + y(a) + (c ? "_" + y(c) : "");
        var E = e[Ar] && e[Ar][p];
        if (!E)
          return this;
        !de.touchNative && de.pointer && r.indexOf("touch") === 0 ? bn(e, r, E) : de.touch && r === "dblclick" ? pi(e, E) : "removeEventListener" in e ? e.removeEventListener(oo[r] || r, E, !1) : e.detachEvent("on" + r, E), e[Ar][p] = null;
      }
      function _s(e) {
        return e.stopPropagation ? e.stopPropagation() : e.originalEvent ? e.originalEvent._stopped = !0 : e.cancelBubble = !0, this;
      }
      function Ca(e) {
        return Aa(e, "wheel", _s), this;
      }
      function ao(e) {
        return je(e, "mousedown touchstart dblclick contextmenu", _s), e._leaflet_disable_click = !0, this;
      }
      function tt(e) {
        return e.preventDefault ? e.preventDefault() : e.returnValue = !1, this;
      }
      function yt(e) {
        return tt(e), _s(e), this;
      }
      function zl(e) {
        if (e.composedPath)
          return e.composedPath();
        for (var r = [], a = e.target; a; )
          r.push(a), a = a.parentNode;
        return r;
      }
      function Vl(e, r) {
        if (!r)
          return new K(e.clientX, e.clientY);
        var a = Sa(r), c = a.boundingClientRect;
        return new K(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (e.clientX - c.left) / a.x - r.clientLeft,
          (e.clientY - c.top) / a.y - r.clientTop
        );
      }
      var cc = de.linux && de.chrome ? window.devicePixelRatio : de.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function Wl(e) {
        return de.edge ? e.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          e.deltaY && e.deltaMode === 0 ? -e.deltaY / cc : (
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
      function Oa(e, r) {
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
      var hc = {
        __proto__: null,
        on: je,
        off: Mt,
        stopPropagation: _s,
        disableScrollPropagation: Ca,
        disableClickPropagation: ao,
        preventDefault: tt,
        stop: yt,
        getPropagationPath: zl,
        getMousePosition: Vl,
        getWheelDelta: Wl,
        isExternalTarget: Oa,
        addListener: je,
        removeListener: Mt
      }, La = oe.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(e, r, a, c) {
          this.stop(), this._el = e, this._inProgress = !0, this._duration = a || 0.25, this._easeOutPower = 1 / Math.max(c || 0.5, 0.2), this._startPos = Br(e), this._offset = r.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function() {
          this._animId = le(this._animate, this), this._step();
        },
        _step: function(e) {
          var r = +/* @__PURE__ */ new Date() - this._startTime, a = this._duration * 1e3;
          r < a ? this._runFrame(this._easeOut(r / a), e) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(e, r) {
          var a = this._startPos.add(this._offset.multiplyBy(e));
          r && a._round(), hn(this._el, a), this.fire("step");
        },
        _complete: function() {
          ne(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function(e) {
          return 1 - Math.pow(1 - e, this._easeOutPower);
        }
      }), _t = oe.extend({
        options: {
          // @section Map State Options
          // @option crs: CRS = L.CRS.EPSG3857
          // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
          // sure what it means.
          crs: bi,
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
          r = G(this, r), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(e), this._initLayout(), this._onResize = g(this._onResize, this), this._initEvents(), r.maxBounds && this.setMaxBounds(r.maxBounds), r.zoom !== void 0 && (this._zoom = this._limitZoom(r.zoom)), r.center && r.zoom !== void 0 && this.setView(Ye(r.center), r.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = Hi && de.any3d && !de.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), je(this._proxy, $r, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(e, r, a) {
          if (r = r === void 0 ? this._zoom : this._limitZoom(r), e = this._limitCenter(Ye(e), r, this.options.maxBounds), a = a || {}, this._stop(), this._loaded && !a.reset && a !== !0) {
            a.animate !== void 0 && (a.zoom = h({ animate: a.animate }, a.zoom), a.pan = h({ animate: a.animate, duration: a.duration }, a.pan));
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
          return e = e || (de.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + e, r);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(e, r) {
          return e = e || (de.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - e, r);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(e, r, a) {
          var c = this.getZoomScale(r), p = this.getSize().divideBy(2), E = e instanceof K ? e : this.latLngToContainerPoint(e), N = E.subtract(p).multiplyBy(1 - 1 / c), k = this.containerPointToLatLng(p.add(N));
          return this.setView(k, r, { zoom: a });
        },
        _getBoundsCenterZoom: function(e, r) {
          r = r || {}, e = e.getBounds ? e.getBounds() : Ot(e);
          var a = Le(r.paddingTopLeft || r.padding || [0, 0]), c = Le(r.paddingBottomRight || r.padding || [0, 0]), p = this.getBoundsZoom(e, !1, a.add(c));
          if (p = typeof r.maxZoom == "number" ? Math.min(r.maxZoom, p) : p, p === 1 / 0)
            return {
              center: e.getCenter(),
              zoom: p
            };
          var E = c.subtract(a).divideBy(2), N = this.project(e.getSouthWest(), p), k = this.project(e.getNorthEast(), p), H = this.unproject(N.add(k).divideBy(2).add(E), p);
          return {
            center: H,
            zoom: p
          };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(e, r) {
          if (e = Ot(e), !e.isValid())
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
          if (e = Le(e).round(), r = r || {}, !e.x && !e.y)
            return this.fire("moveend");
          if (r.animate !== !0 && !this.getSize().contains(e))
            return this._resetView(this.unproject(this.project(this.getCenter()).add(e)), this.getZoom()), this;
          if (this._panAnim || (this._panAnim = new La(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), r.noMoveStart || this.fire("movestart"), r.animate !== !1) {
            Ve(this._mapPane, "leaflet-pan-anim");
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
          if (a = a || {}, a.animate === !1 || !de.any3d)
            return this.setView(e, r, a);
          this._stop();
          var c = this.project(this.getCenter()), p = this.project(e), E = this.getSize(), N = this._zoom;
          e = Ye(e), r = r === void 0 ? N : r;
          var k = Math.max(E.x, E.y), H = k * this.getZoomScale(N, r), se = p.distanceTo(c) || 1, Se = 1.42, xe = Se * Se;
          function rt(Wt) {
            var wo = Wt ? -1 : 1, T = Wt ? H : k, Hs = H * H - k * k + wo * xe * xe * se * se, ia = 2 * T * xe * se, yi = Hs / ia, ct = Math.sqrt(yi * yi + 1) - yi, bc = ct < 1e-9 ? -18 : Math.log(ct);
            return bc;
          }
          function mn(Wt) {
            return (Math.exp(Wt) - Math.exp(-Wt)) / 2;
          }
          function sn(Wt) {
            return (Math.exp(Wt) + Math.exp(-Wt)) / 2;
          }
          function Kn(Wt) {
            return mn(Wt) / sn(Wt);
          }
          var Un = rt(0);
          function ar(Wt) {
            return k * (sn(Un) / sn(Un + Se * Wt));
          }
          function Tc(Wt) {
            return k * (sn(Un) * Kn(Un + Se * Wt) - mn(Un)) / xe;
          }
          function wc(Wt) {
            return 1 - Math.pow(1 - Wt, 1.5);
          }
          var Sc = Date.now(), su = (rt(1) - Un) / Se, Ac = a.duration ? 1e3 * a.duration : 1e3 * su * 0.8;
          function To() {
            var Wt = (Date.now() - Sc) / Ac, wo = wc(Wt) * su;
            Wt <= 1 ? (this._flyToFrame = le(To, this), this._move(
              this.unproject(c.add(p.subtract(c).multiplyBy(Tc(wo) / se)), N),
              this.getScaleZoom(k / ar(wo), N),
              { flyTo: !0 }
            )) : this._move(e, r)._moveEnd(!0);
          }
          return this._moveStart(!0, a.noMoveStart), To.call(this), this;
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
          return e = Ot(e), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), e.isValid() ? (this.options.maxBounds = e, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
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
          var a = this.getCenter(), c = this._limitCenter(a, this._zoom, Ot(e));
          return a.equals(c) || this.panTo(c, r), this._enforcingBounds = !1, this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(e, r) {
          r = r || {};
          var a = Le(r.paddingTopLeft || r.padding || [0, 0]), c = Le(r.paddingBottomRight || r.padding || [0, 0]), p = this.project(this.getCenter()), E = this.project(e), N = this.getPixelBounds(), k = kt([N.min.add(a), N.max.subtract(c)]), H = k.getSize();
          if (!k.contains(E)) {
            this._enforcingBounds = !0;
            var se = E.subtract(k.getCenter()), Se = k.extend(E).getSize().subtract(H);
            p.x += se.x < 0 ? -Se.x : Se.x, p.y += se.y < 0 ? -Se.y : Se.y, this.panTo(this.unproject(p), r), this._enforcingBounds = !1;
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
          e = h({
            animate: !1,
            pan: !0
          }, e === !0 ? { animate: !0 } : e);
          var r = this.getSize();
          this._sizeChanged = !0, this._lastCenter = null;
          var a = this.getSize(), c = r.divideBy(2).round(), p = a.divideBy(2).round(), E = c.subtract(p);
          return !E.x && !E.y ? this : (e.animate && e.pan ? this.panBy(E) : (e.pan && this._rawPanBy(E), this.fire("move"), e.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(g(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
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
          if (e = this._locateOptions = h({
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
          var r = g(this._handleGeolocationResponse, this), a = g(this._handleGeolocationError, this);
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
            var r = e.coords.latitude, a = e.coords.longitude, c = new Qe(r, a), p = c.toBounds(e.coords.accuracy * 2), E = this._locateOptions;
            if (E.setView) {
              var N = this.getBoundsZoom(p);
              this.setView(c, E.maxZoom ? Math.min(N, E.maxZoom) : N);
            }
            var k = {
              latlng: c,
              bounds: p,
              timestamp: e.timestamp
            };
            for (var H in e.coords)
              typeof e.coords[H] == "number" && (k[H] = e.coords[H]);
            this.fire("locationfound", k);
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
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), bt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (ne(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
          var e;
          for (e in this._layers)
            this._layers[e].remove();
          for (e in this._panes)
            bt(this._panes[e]);
          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(e, r) {
          var a = "leaflet-pane" + (e ? " leaflet-" + e.replace("Pane", "") + "-pane" : ""), c = et("div", a, r || this._mapPane);
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
          return new en(r, a);
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
          e = Ot(e), a = Le(a || [0, 0]);
          var c = this.getZoom() || 0, p = this.getMinZoom(), E = this.getMaxZoom(), N = e.getNorthWest(), k = e.getSouthEast(), H = this.getSize().subtract(a), se = kt(this.project(k, c), this.project(N, c)).getSize(), Se = de.any3d ? this.options.zoomSnap : 1, xe = H.x / se.x, rt = H.y / se.y, mn = r ? Math.max(xe, rt) : Math.min(xe, rt);
          return c = this.getScaleZoom(mn, c), Se && (c = Math.round(c / (Se / 100)) * (Se / 100), c = r ? Math.ceil(c / Se) * Se : Math.floor(c / Se) * Se), Math.max(p, Math.min(E, c));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new K(
            this._container.clientWidth || 0,
            this._container.clientHeight || 0
          ), this._sizeChanged = !1), this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(e, r) {
          var a = this._getTopLeftPoint(e, r);
          return new Me(a, a.add(this.getSize()));
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
          return r = r === void 0 ? this._zoom : r, this.options.crs.latLngToPoint(Ye(e), r);
        },
        // @method unproject(point: Point, zoom: Number): LatLng
        // Inverse of [`project`](#map-project).
        unproject: function(e, r) {
          return r = r === void 0 ? this._zoom : r, this.options.crs.pointToLatLng(Le(e), r);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(e) {
          var r = Le(e).add(this.getPixelOrigin());
          return this.unproject(r);
        },
        // @method latLngToLayerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the [origin pixel](#map-getpixelorigin).
        latLngToLayerPoint: function(e) {
          var r = this.project(Ye(e))._round();
          return r._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(e) {
          return this.options.crs.wrapLatLng(Ye(e));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(e) {
          return this.options.crs.wrapLatLngBounds(Ot(e));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(e, r) {
          return this.options.crs.distance(Ye(e), Ye(r));
        },
        // @method containerPointToLayerPoint(point: Point): Point
        // Given a pixel coordinate relative to the map container, returns the corresponding
        // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
        containerPointToLayerPoint: function(e) {
          return Le(e).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(e) {
          return Le(e).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(e) {
          var r = this.containerPointToLayerPoint(Le(e));
          return this.layerPointToLatLng(r);
        },
        // @method latLngToContainerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the map container.
        latLngToContainerPoint: function(e) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(Ye(e)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(e) {
          return Vl(e, this._container);
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
          var r = this._container = Jr(e);
          if (r) {
            if (r._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          je(r, "scroll", this._onScroll, this), this._containerId = y(r);
        },
        _initLayout: function() {
          var e = this._container;
          this._fadeAnimated = this.options.fadeAnimation && de.any3d, Ve(e, "leaflet-container" + (de.touch ? " leaflet-touch" : "") + (de.retina ? " leaflet-retina" : "") + (de.ielt9 ? " leaflet-oldie" : "") + (de.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var r = rr(e, "position");
          r !== "absolute" && r !== "relative" && r !== "fixed" && r !== "sticky" && (e.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var e = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), hn(this._mapPane, new K(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Ve(e.markerPane, "leaflet-zoom-hide"), Ve(e.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(e, r, a) {
          hn(this._mapPane, new K(0, 0));
          var c = !this._loaded;
          this._loaded = !0, r = this._limitZoom(r), this.fire("viewprereset");
          var p = this._zoom !== r;
          this._moveStart(p, a)._move(e, r)._moveEnd(p), this.fire("viewreset"), c && this.fire("load");
        },
        _moveStart: function(e, r) {
          return e && this.fire("zoomstart"), r || this.fire("movestart"), this;
        },
        _move: function(e, r, a, c) {
          r === void 0 && (r = this._zoom);
          var p = this._zoom !== r;
          return this._zoom = r, this._lastCenter = e, this._pixelOrigin = this._getNewPixelOrigin(e), c ? a && a.pinch && this.fire("zoom", a) : ((p || a && a.pinch) && this.fire("zoom", a), this.fire("move", a)), this;
        },
        _moveEnd: function(e) {
          return e && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function() {
          return ne(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(e) {
          hn(this._mapPane, this._getMapPanePos().subtract(e));
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
          this._targets = {}, this._targets[y(this._container)] = this;
          var r = e ? Mt : je;
          r(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && r(window, "resize", this._onResize, this), de.any3d && this.options.transform3DLimit && (e ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
          ne(this._resizeRequest), this._resizeRequest = le(
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
          for (var a = [], c, p = r === "mouseout" || r === "mouseover", E = e.target || e.srcElement, N = !1; E; ) {
            if (c = this._targets[y(E)], c && (r === "click" || r === "preclick") && this._draggableMoved(c)) {
              N = !0;
              break;
            }
            if (c && c.listens(r, !0) && (p && !Oa(E, e) || (a.push(c), p)) || E === this._container)
              break;
            E = E.parentNode;
          }
          return !a.length && !N && !p && this.listens(r, !0) && (a = [this]), a;
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
            a === "mousedown" && Zo(r), this._fireDOMEvent(e, a);
          }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(e, r, a) {
          if (e.type === "click") {
            var c = h({}, e);
            c.type = "preclick", this._fireDOMEvent(c, c.type, a);
          }
          var p = this._findEventTargets(e, r);
          if (a) {
            for (var E = [], N = 0; N < a.length; N++)
              a[N].listens(r, !0) && E.push(a[N]);
            p = E.concat(p);
          }
          if (p.length) {
            r === "contextmenu" && tt(e);
            var k = p[0], H = {
              originalEvent: e
            };
            if (e.type !== "keypress" && e.type !== "keydown" && e.type !== "keyup") {
              var se = k.getLatLng && (!k._radius || k._radius <= 10);
              H.containerPoint = se ? this.latLngToContainerPoint(k.getLatLng()) : this.mouseEventToContainerPoint(e), H.layerPoint = this.containerPointToLayerPoint(H.containerPoint), H.latlng = se ? k.getLatLng() : this.layerPointToLatLng(H.layerPoint);
            }
            for (N = 0; N < p.length; N++)
              if (p[N].fire(r, H, !0), H.originalEvent._stopped || p[N].options.bubblingMouseEvents === !1 && P(this._mouseEvents, r) !== -1)
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
          return Br(this._mapPane) || new K(0, 0);
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
          return kt([
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
          var c = this.project(e, r), p = this.getSize().divideBy(2), E = new Me(c.subtract(p), c.add(p)), N = this._getBoundsOffset(E, a, r);
          return Math.abs(N.x) <= 1 && Math.abs(N.y) <= 1 ? e : this.unproject(c.add(N), r);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(e, r) {
          if (!r)
            return e;
          var a = this.getPixelBounds(), c = new Me(a.min.add(e), a.max.add(e));
          return e.add(this._getBoundsOffset(c, r));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(e, r, a) {
          var c = kt(
            this.project(r.getNorthEast(), a),
            this.project(r.getSouthWest(), a)
          ), p = c.min.subtract(e.min), E = c.max.subtract(e.max), N = this._rebound(p.x, -E.x), k = this._rebound(p.y, -E.y);
          return new K(N, k);
        },
        _rebound: function(e, r) {
          return e + r > 0 ? Math.round(e - r) / 2 : Math.max(0, Math.ceil(e)) - Math.max(0, Math.floor(r));
        },
        _limitZoom: function(e) {
          var r = this.getMinZoom(), a = this.getMaxZoom(), c = de.any3d ? this.options.zoomSnap : 1;
          return c && (e = Math.round(e / c) * c), Math.max(r, Math.min(a, e));
        },
        _onPanTransitionStep: function() {
          this.fire("move");
        },
        _onPanTransitionEnd: function() {
          Ct(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function(e, r) {
          var a = this._getCenterOffset(e)._trunc();
          return (r && r.animate) !== !0 && !this.getSize().contains(a) ? !1 : (this.panBy(a, r), !0);
        },
        _createAnimProxy: function() {
          var e = this._proxy = et("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(e), this.on("zoomanim", function(r) {
            var a = wr, c = this._proxy.style[a];
            ps(this._proxy, this.project(r.center, r.zoom), this.getZoomScale(r.zoom, 1)), c === this._proxy.style[a] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          bt(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
          var e = this.getCenter(), r = this.getZoom();
          ps(this._proxy, this.project(e, r), this.getZoomScale(r, 1));
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
          var c = this.getZoomScale(r), p = this._getCenterOffset(e)._divideBy(1 - 1 / c);
          return a.animate !== !0 && !this.getSize().contains(p) ? !1 : (le(function() {
            this._moveStart(!0, a.noMoveStart || !1)._animateZoom(e, r, !0);
          }, this), !0);
        },
        _animateZoom: function(e, r, a, c) {
          this._mapPane && (a && (this._animatingZoom = !0, this._animateToCenter = e, this._animateToZoom = r, Ve(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: e,
            zoom: r,
            noUpdate: c
          }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(g(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && Ct(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
        }
      });
      function Gn(e, r) {
        return new _t(e, r);
      }
      var xi = ge.extend({
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
          return Ve(r, "leaflet-control"), a.indexOf("bottom") !== -1 ? c.insertBefore(r, c.firstChild) : c.appendChild(r), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (bt(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(e) {
          this._map && e && e.screenX > 0 && e.screenY > 0 && this._map.getContainer().focus();
        }
      }), or = function(e) {
        return new xi(e);
      };
      _t.include({
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
          var e = this._controlCorners = {}, r = "leaflet-", a = this._controlContainer = et("div", r + "control-container", this._container);
          function c(p, E) {
            var N = r + p + " " + r + E;
            e[p + E] = et("div", N, a);
          }
          c("top", "left"), c("top", "right"), c("bottom", "left"), c("bottom", "right");
        },
        _clearControlPos: function() {
          for (var e in this._controlCorners)
            bt(this._controlCorners[e]);
          bt(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var Ia = xi.extend({
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
          return xi.prototype.addTo.call(this, e), this._expandIfNotCollapsed();
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
          var r = this._getLayer(y(e));
          return r && this._layers.splice(this._layers.indexOf(r), 1), this._map ? this._update() : this;
        },
        // @method expand(): this
        // Expand the control container if collapsed.
        expand: function() {
          Ve(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var e = this._map.getSize().y - (this._container.offsetTop + 50);
          return e < this._section.clientHeight ? (Ve(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = e + "px") : Ct(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return Ct(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var e = "leaflet-control-layers", r = this._container = et("div", e), a = this.options.collapsed;
          r.setAttribute("aria-haspopup", !0), ao(r), Ca(r);
          var c = this._section = et("section", e + "-list");
          a && (this._map.on("click", this.collapse, this), je(r, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this));
          var p = this._layersLink = et("a", e + "-toggle", r);
          p.href = "#", p.title = "Layers", p.setAttribute("role", "button"), je(p, {
            keydown: function(E) {
              E.keyCode === 13 && this._expandSafely();
            },
            // Certain screen readers intercept the key event and instead send a click event
            click: function(E) {
              tt(E), this._expandSafely();
            }
          }, this), a || this.expand(), this._baseLayersList = et("div", e + "-base", c), this._separator = et("div", e + "-separator", c), this._overlaysList = et("div", e + "-overlays", c), r.appendChild(c);
        },
        _getLayer: function(e) {
          for (var r = 0; r < this._layers.length; r++)
            if (this._layers[r] && y(this._layers[r].layer) === e)
              return this._layers[r];
        },
        _addLayer: function(e, r, a) {
          this._map && e.on("add remove", this._onLayerChange, this), this._layers.push({
            layer: e,
            name: r,
            overlay: a
          }), this.options.sortLayers && this._layers.sort(g(function(c, p) {
            return this.options.sortFunction(c.layer, p.layer, c.name, p.name);
          }, this)), this.options.autoZIndex && e.setZIndex && (this._lastZIndex++, e.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function() {
          if (!this._container)
            return this;
          sr(this._baseLayersList), sr(this._overlaysList), this._layerControlInputs = [];
          var e, r, a, c, p = 0;
          for (a = 0; a < this._layers.length; a++)
            c = this._layers[a], this._addItem(c), r = r || c.overlay, e = e || !c.overlay, p += c.overlay ? 0 : 1;
          return this.options.hideSingleBase && (e = e && p > 1, this._baseLayersList.style.display = e ? "" : "none"), this._separator.style.display = r && e ? "" : "none", this;
        },
        _onLayerChange: function(e) {
          this._handlingClick || this._update();
          var r = this._getLayer(y(e.target)), a = r.overlay ? e.type === "add" ? "overlayadd" : "overlayremove" : e.type === "add" ? "baselayerchange" : null;
          a && this._map.fire(a, r);
        },
        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
        _createRadioElement: function(e, r) {
          var a = '<input type="radio" class="leaflet-control-layers-selector" name="' + e + '"' + (r ? ' checked="checked"' : "") + "/>", c = document.createElement("div");
          return c.innerHTML = a, c.firstChild;
        },
        _addItem: function(e) {
          var r = document.createElement("label"), a = this._map.hasLayer(e.layer), c;
          e.overlay ? (c = document.createElement("input"), c.type = "checkbox", c.className = "leaflet-control-layers-selector", c.defaultChecked = a) : c = this._createRadioElement("leaflet-base-layers_" + y(this), a), this._layerControlInputs.push(c), c.layerId = y(e.layer), je(c, "click", this._onInputClick, this);
          var p = document.createElement("span");
          p.innerHTML = " " + e.name;
          var E = document.createElement("span");
          r.appendChild(E), E.appendChild(c), E.appendChild(p);
          var N = e.overlay ? this._overlaysList : this._baseLayersList;
          return N.appendChild(r), this._checkDisabledLayers(), r;
        },
        _onInputClick: function() {
          if (!this._preventClick) {
            var e = this._layerControlInputs, r, a, c = [], p = [];
            this._handlingClick = !0;
            for (var E = e.length - 1; E >= 0; E--)
              r = e[E], a = this._getLayer(r.layerId).layer, r.checked ? c.push(a) : r.checked || p.push(a);
            for (E = 0; E < p.length; E++)
              this._map.hasLayer(p[E]) && this._map.removeLayer(p[E]);
            for (E = 0; E < c.length; E++)
              this._map.hasLayer(c[E]) || this._map.addLayer(c[E]);
            this._handlingClick = !1, this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function() {
          for (var e = this._layerControlInputs, r, a, c = this._map.getZoom(), p = e.length - 1; p >= 0; p--)
            r = e[p], a = this._getLayer(r.layerId).layer, r.disabled = a.options.minZoom !== void 0 && c < a.options.minZoom || a.options.maxZoom !== void 0 && c > a.options.maxZoom;
        },
        _expandIfNotCollapsed: function() {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function() {
          var e = this._section;
          this._preventClick = !0, je(e, "click", tt), this.expand();
          var r = this;
          setTimeout(function() {
            Mt(e, "click", tt), r._preventClick = !1;
          });
        }
      }), Na = function(e, r, a) {
        return new Ia(e, r, a);
      }, _i = xi.extend({
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
          var r = "leaflet-control-zoom", a = et("div", r + " leaflet-bar"), c = this.options;
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
        _createButton: function(e, r, a, c, p) {
          var E = et("a", a, c);
          return E.innerHTML = e, E.href = "#", E.title = r, E.setAttribute("role", "button"), E.setAttribute("aria-label", r), ao(E), je(E, "click", yt), je(E, "click", p, this), je(E, "click", this._refocusOnMap, this), E;
        },
        _updateDisabled: function() {
          var e = this._map, r = "leaflet-disabled";
          Ct(this._zoomInButton, r), Ct(this._zoomOutButton, r), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || e._zoom === e.getMinZoom()) && (Ve(this._zoomOutButton, r), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || e._zoom === e.getMaxZoom()) && (Ve(this._zoomInButton, r), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      _t.mergeOptions({
        zoomControl: !0
      }), _t.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new _i(), this.addControl(this.zoomControl));
      });
      var Zl = function(e) {
        return new _i(e);
      }, Da = xi.extend({
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
          var r = "leaflet-control-scale", a = et("div", r), c = this.options;
          return this._addScales(c, r + "-line", a), e.on(c.updateWhenIdle ? "moveend" : "move", this._update, this), e.whenReady(this._update, this), a;
        },
        onRemove: function(e) {
          e.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(e, r, a) {
          e.metric && (this._mScale = et("div", r, a)), e.imperial && (this._iScale = et("div", r, a));
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
          var r = e * 3.2808399, a, c, p;
          r > 5280 ? (a = r / 5280, c = this._getRoundNum(a), this._updateScale(this._iScale, c + " mi", c / a)) : (p = this._getRoundNum(r), this._updateScale(this._iScale, p + " ft", p / r));
        },
        _updateScale: function(e, r, a) {
          e.style.width = Math.round(this.options.maxWidth * a) + "px", e.innerHTML = r;
        },
        _getRoundNum: function(e) {
          var r = Math.pow(10, (Math.floor(e) + "").length - 1), a = e / r;
          return a = a >= 10 ? 10 : a >= 5 ? 5 : a >= 3 ? 3 : a >= 2 ? 2 : 1, r * a;
        }
      }), Hl = function(e) {
        return new Da(e);
      }, Yl = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Yo = xi.extend({
        // @section
        // @aka Control.Attribution options
        options: {
          position: "bottomright",
          // @option prefix: String|false = 'Leaflet'
          // The HTML text shown before the attributions. Pass `false` to disable.
          prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (de.inlineSvg ? Yl + " " : "") + "Leaflet</a>"
        },
        initialize: function(e) {
          G(this, e), this._attributions = {};
        },
        onAdd: function(e) {
          e.attributionControl = this, this._container = et("div", "leaflet-control-attribution"), ao(this._container);
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
      _t.mergeOptions({
        attributionControl: !0
      }), _t.addInitHook(function() {
        this.options.attributionControl && new Yo().addTo(this);
      });
      var ql = function(e) {
        return new Yo(e);
      };
      xi.Layers = Ia, xi.Zoom = _i, xi.Scale = Da, xi.Attribution = Yo, or.layers = Na, or.zoom = Zl, or.scale = Hl, or.attribution = ql;
      var rn = ge.extend({
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
      rn.addTo = function(e, r) {
        return e.addHandler(r, this), this;
      };
      var dc = { Events: te }, Fi = de.touch ? "touchstart mousedown" : "mousedown", jr = oe.extend({
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
          this._enabled || (je(this._dragStartTarget, Fi, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && (jr._dragging === this && this.finishDrag(!0), Mt(this._dragStartTarget, Fi, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(e) {
          if (this._enabled && (this._moved = !1, !Mr(this._element, "leaflet-zoom-anim"))) {
            if (e.touches && e.touches.length !== 1) {
              jr._dragging === this && this.finishDrag();
              return;
            }
            if (!(jr._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) && (jr._dragging = this, this._preventOutline && Zo(this._element), wa(), gs(), !this._moving)) {
              this.fire("down");
              var r = e.touches ? e.touches[0] : e, a = kl(this._element);
              this._startPoint = new K(r.clientX, r.clientY), this._startPos = Br(this._element), this._parentScale = Sa(a);
              var c = e.type === "mousedown";
              je(document, c ? "mousemove" : "touchmove", this._onMove, this), je(document, c ? "mouseup" : "touchend touchcancel", this._onUp, this);
            }
          }
        },
        _onMove: function(e) {
          if (this._enabled) {
            if (e.touches && e.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var r = e.touches && e.touches.length === 1 ? e.touches[0] : e, a = new K(r.clientX, r.clientY)._subtract(this._startPoint);
            !a.x && !a.y || Math.abs(a.x) + Math.abs(a.y) < this.options.clickTolerance || (a.x /= this._parentScale.x, a.y /= this._parentScale.y, tt(e), this._moved || (this.fire("dragstart"), this._moved = !0, Ve(document.body, "leaflet-dragging"), this._lastTarget = e.target || e.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Ve(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(a), this._moving = !0, this._lastEvent = e, this._updatePosition());
          }
        },
        _updatePosition: function() {
          var e = { originalEvent: this._lastEvent };
          this.fire("predrag", e), hn(this._element, this._newPos), this.fire("drag", e);
        },
        _onUp: function() {
          this._enabled && this.finishDrag();
        },
        finishDrag: function(e) {
          Ct(document.body, "leaflet-dragging"), this._lastTarget && (Ct(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), Mt(document, "mousemove touchmove", this._onMove, this), Mt(document, "mouseup touchend touchcancel", this._onUp, this), Vo(), Sr();
          var r = this._moved && this._moving;
          this._moving = !1, jr._dragging = !1, r && this.fire("dragend", {
            noInertia: e,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function Ra(e, r, a) {
        var c, p = [1, 4, 2, 8], E, N, k, H, se, Se, xe, rt;
        for (E = 0, Se = e.length; E < Se; E++)
          e[E]._code = br(e[E], r);
        for (k = 0; k < 4; k++) {
          for (xe = p[k], c = [], E = 0, Se = e.length, N = Se - 1; E < Se; N = E++)
            H = e[E], se = e[N], H._code & xe ? se._code & xe || (rt = uo(se, H, xe, r, a), rt._code = br(rt, r), c.push(rt)) : (se._code & xe && (rt = uo(se, H, xe, r, a), rt._code = br(rt, r), c.push(rt)), c.push(H));
          e = c;
        }
        return e;
      }
      function kr(e, r) {
        var a, c, p, E, N, k, H, se, Se;
        if (!e || e.length === 0)
          throw new Error("latlngs not passed");
        Mi(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
        var xe = Ye([0, 0]), rt = Ot(e), mn = rt.getNorthWest().distanceTo(rt.getSouthWest()) * rt.getNorthEast().distanceTo(rt.getNorthWest());
        mn < 1700 && (xe = Ms(e));
        var sn = e.length, Kn = [];
        for (a = 0; a < sn; a++) {
          var Un = Ye(e[a]);
          Kn.push(r.project(Ye([Un.lat - xe.lat, Un.lng - xe.lng])));
        }
        for (k = H = se = 0, a = 0, c = sn - 1; a < sn; c = a++)
          p = Kn[a], E = Kn[c], N = p.y * E.x - E.y * p.x, H += (p.x + E.x) * N, se += (p.y + E.y) * N, k += N * 3;
        k === 0 ? Se = Kn[0] : Se = [H / k, se / k];
        var ar = r.unproject(Le(Se));
        return Ye([ar.lat + xe.lat, ar.lng + xe.lng]);
      }
      function Ms(e) {
        for (var r = 0, a = 0, c = 0, p = 0; p < e.length; p++) {
          var E = Ye(e[p]);
          r += E.lat, a += E.lng, c++;
        }
        return Ye([r / c, a / c]);
      }
      var Pa = {
        __proto__: null,
        clipPolygon: Ra,
        polygonCenter: kr,
        centroid: Ms
      };
      function Ut(e, r) {
        if (!r || !e.length)
          return e.slice();
        var a = r * r;
        return e = pc(e, a), e = fc(e, a), e;
      }
      function Gr(e, r, a) {
        return Math.sqrt(co(e, r, a, !0));
      }
      function xa(e, r, a) {
        return co(e, r, a);
      }
      function fc(e, r) {
        var a = e.length, c = typeof Uint8Array < "u" ? Uint8Array : Array, p = new c(a);
        p[0] = p[a - 1] = 1, lo(e, p, r, 0, a - 1);
        var E, N = [];
        for (E = 0; E < a; E++)
          p[E] && N.push(e[E]);
        return N;
      }
      function lo(e, r, a, c, p) {
        var E = 0, N, k, H;
        for (k = c + 1; k <= p - 1; k++)
          H = co(e[k], e[c], e[p], !0), H > E && (N = k, E = H);
        E > a && (r[N] = 1, lo(e, r, a, c, N), lo(e, r, a, N, p));
      }
      function pc(e, r) {
        for (var a = [e[0]], c = 1, p = 0, E = e.length; c < E; c++)
          Bs(e[c], e[p]) > r && (a.push(e[c]), p = c);
        return p < E - 1 && a.push(e[E - 1]), a;
      }
      var Kl;
      function $l(e, r, a, c, p) {
        var E = c ? Kl : br(e, a), N = br(r, a), k, H, se;
        for (Kl = N; ; ) {
          if (!(E | N))
            return [e, r];
          if (E & N)
            return !1;
          k = E || N, H = uo(e, r, k, a, p), se = br(H, a), k === E ? (e = H, E = se) : (r = H, N = se);
        }
      }
      function uo(e, r, a, c, p) {
        var E = r.x - e.x, N = r.y - e.y, k = c.min, H = c.max, se, Se;
        return a & 8 ? (se = e.x + E * (H.y - e.y) / N, Se = H.y) : a & 4 ? (se = e.x + E * (k.y - e.y) / N, Se = k.y) : a & 2 ? (se = H.x, Se = e.y + N * (H.x - e.x) / E) : a & 1 && (se = k.x, Se = e.y + N * (k.x - e.x) / E), new K(se, Se, p);
      }
      function br(e, r) {
        var a = 0;
        return e.x < r.min.x ? a |= 1 : e.x > r.max.x && (a |= 2), e.y < r.min.y ? a |= 4 : e.y > r.max.y && (a |= 8), a;
      }
      function Bs(e, r) {
        var a = r.x - e.x, c = r.y - e.y;
        return a * a + c * c;
      }
      function co(e, r, a, c) {
        var p = r.x, E = r.y, N = a.x - p, k = a.y - E, H = N * N + k * k, se;
        return H > 0 && (se = ((e.x - p) * N + (e.y - E) * k) / H, se > 1 ? (p = a.x, E = a.y) : se > 0 && (p += N * se, E += k * se)), N = e.x - p, k = e.y - E, c ? N * N + k * k : new K(p, E);
      }
      function Mi(e) {
        return !J(e[0]) || typeof e[0][0] != "object" && typeof e[0][0] < "u";
      }
      function Fa(e) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Mi(e);
      }
      function qo(e, r) {
        var a, c, p, E, N, k, H, se;
        if (!e || e.length === 0)
          throw new Error("latlngs not passed");
        Mi(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
        var Se = Ye([0, 0]), xe = Ot(e), rt = xe.getNorthWest().distanceTo(xe.getSouthWest()) * xe.getNorthEast().distanceTo(xe.getNorthWest());
        rt < 1700 && (Se = Ms(e));
        var mn = e.length, sn = [];
        for (a = 0; a < mn; a++) {
          var Kn = Ye(e[a]);
          sn.push(r.project(Ye([Kn.lat - Se.lat, Kn.lng - Se.lng])));
        }
        for (a = 0, c = 0; a < mn - 1; a++)
          c += sn[a].distanceTo(sn[a + 1]) / 2;
        if (c === 0)
          se = sn[0];
        else
          for (a = 0, E = 0; a < mn - 1; a++)
            if (N = sn[a], k = sn[a + 1], p = N.distanceTo(k), E += p, E > c) {
              H = (E - c) / p, se = [
                k.x - H * (k.x - N.x),
                k.y - H * (k.y - N.y)
              ];
              break;
            }
        var Un = r.unproject(Le(se));
        return Ye([Un.lat + Se.lat, Un.lng + Se.lng]);
      }
      var Ma = {
        __proto__: null,
        simplify: Ut,
        pointToSegmentDistance: Gr,
        closestPointOnSegment: xa,
        clipSegment: $l,
        _getEdgeIntersection: uo,
        _getBitCode: br,
        _sqClosestPointOnSegment: co,
        isFlat: Mi,
        _flat: Fa,
        polylineCenter: qo
      }, Ko = {
        project: function(e) {
          return new K(e.lng, e.lat);
        },
        unproject: function(e) {
          return new Qe(e.y, e.x);
        },
        bounds: new Me([-180, -90], [180, 90])
      }, Ba = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new Me([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(e) {
          var r = Math.PI / 180, a = this.R, c = e.lat * r, p = this.R_MINOR / a, E = Math.sqrt(1 - p * p), N = E * Math.sin(c), k = Math.tan(Math.PI / 4 - c / 2) / Math.pow((1 - N) / (1 + N), E / 2);
          return c = -a * Math.log(Math.max(k, 1e-10)), new K(e.lng * r * a, c);
        },
        unproject: function(e) {
          for (var r = 180 / Math.PI, a = this.R, c = this.R_MINOR / a, p = Math.sqrt(1 - c * c), E = Math.exp(-e.y / a), N = Math.PI / 2 - 2 * Math.atan(E), k = 0, H = 0.1, se; k < 15 && Math.abs(H) > 1e-7; k++)
            se = p * Math.sin(N), se = Math.pow((1 - se) / (1 + se), p / 2), H = Math.PI / 2 - 2 * Math.atan(E * se) - N, N += H;
          return new Qe(N * r, e.x * r / a);
        }
      }, ka = {
        __proto__: null,
        LonLat: Ko,
        Mercator: Ba,
        SphericalMercator: qt
      }, Ga = h({}, un, {
        code: "EPSG:3395",
        projection: Ba,
        transformation: (function() {
          var e = 0.5 / (Math.PI * Ba.R);
          return Dn(e, 0.5, -e, 0.5);
        })()
      }), Jl = h({}, un, {
        code: "EPSG:4326",
        projection: Ko,
        transformation: Dn(1 / 180, 1, -1 / 180, 0.5)
      }), jl = h({}, Vt, {
        projection: Ko,
        transformation: Dn(1, 0, -1, 0),
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
      Vt.Earth = un, Vt.EPSG3395 = Ga, Vt.EPSG3857 = bi, Vt.EPSG900913 = pn, Vt.EPSG4326 = Jl, Vt.Simple = jl;
      var Jt = oe.extend({
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
          return this._map._targets[y(e)] = this, this;
        },
        removeInteractiveTarget: function(e) {
          return delete this._map._targets[y(e)], this;
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
      _t.include({
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the map
        addLayer: function(e) {
          if (!e._layerAdd)
            throw new Error("The provided object is not a Layer.");
          var r = y(e);
          return this._layers[r] ? this : (this._layers[r] = e, e._mapToAdd = this, e.beforeAdd && e.beforeAdd(this), this.whenReady(e._layerAdd, e), this);
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the map.
        removeLayer: function(e) {
          var r = y(e);
          return this._layers[r] ? (this._loaded && e.onRemove(this), delete this._layers[r], this._loaded && (this.fire("layerremove", { layer: e }), e.fire("remove")), e._map = e._mapToAdd = null, this) : this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the map
        hasLayer: function(e) {
          return y(e) in this._layers;
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
          e = e ? J(e) ? e : [e] : [];
          for (var r = 0, a = e.length; r < a; r++)
            this.addLayer(e[r]);
        },
        _addZoomLimit: function(e) {
          (!isNaN(e.options.maxZoom) || !isNaN(e.options.minZoom)) && (this._zoomBoundLayers[y(e)] = e, this._updateZoomLevels());
        },
        _removeZoomLimit: function(e) {
          var r = y(e);
          this._zoomBoundLayers[r] && (delete this._zoomBoundLayers[r], this._updateZoomLevels());
        },
        _updateZoomLevels: function() {
          var e = 1 / 0, r = -1 / 0, a = this._getZoomSpan();
          for (var c in this._zoomBoundLayers) {
            var p = this._zoomBoundLayers[c].options;
            e = p.minZoom === void 0 ? e : Math.min(e, p.minZoom), r = p.maxZoom === void 0 ? r : Math.max(r, p.maxZoom);
          }
          this._layersMaxZoom = r === -1 / 0 ? void 0 : r, this._layersMinZoom = e === 1 / 0 ? void 0 : e, a !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        }
      });
      var Xr = Jt.extend({
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
          return y(e);
        }
      }), ho = function(e, r) {
        return new Xr(e, r);
      }, Cr = Xr.extend({
        addLayer: function(e) {
          return this.hasLayer(e) ? this : (e.addEventParent(this), Xr.prototype.addLayer.call(this, e), this.fire("layeradd", { layer: e }));
        },
        removeLayer: function(e) {
          return this.hasLayer(e) ? (e in this._layers && (e = this._layers[e]), e.removeEventParent(this), Xr.prototype.removeLayer.call(this, e), this.fire("layerremove", { layer: e })) : this;
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
          var e = new en();
          for (var r in this._layers) {
            var a = this._layers[r];
            e.extend(a.getBounds ? a.getBounds() : a.getLatLng());
          }
          return e;
        }
      }), Xl = function(e, r) {
        return new Cr(e, r);
      }, ks = ge.extend({
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
          var p = Le(c), E = Le(r === "shadow" && a.shadowAnchor || a.iconAnchor || p && p.divideBy(2, !0));
          e.className = "leaflet-marker-" + r + " " + (a.className || ""), E && (e.style.marginLeft = -E.x + "px", e.style.marginTop = -E.y + "px"), p && (e.style.width = p.x + "px", e.style.height = p.y + "px");
        },
        _createImg: function(e, r) {
          return r = r || document.createElement("img"), r.src = e, r;
        },
        _getIconUrl: function(e) {
          return de.retina && this.options[e + "RetinaUrl"] || this.options[e + "Url"];
        }
      });
      function gc(e) {
        return new ks(e);
      }
      var fo = ks.extend({
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
          return typeof fo.imagePath != "string" && (fo.imagePath = this._detectIconPath()), (this.options.imagePath || fo.imagePath) + ks.prototype._getIconUrl.call(this, e);
        },
        _stripUrl: function(e) {
          var r = function(a, c, p) {
            var E = c.exec(a);
            return E && E[p];
          };
          return e = r(e, /^url\((['"])?(.+)\1\)$/, 2), e && r(e, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var e = et("div", "leaflet-default-icon-path", document.body), r = rr(e, "background-image") || rr(e, "backgroundImage");
          if (document.body.removeChild(e), r = this._stripUrl(r), r)
            return r;
          var a = document.querySelector('link[href$="leaflet.css"]');
          return a ? a.href.substring(0, a.href.length - 11 - 1) : "";
        }
      }), Ql = rn.extend({
        initialize: function(e) {
          this._marker = e;
        },
        addHooks: function() {
          var e = this._marker._icon;
          this._draggable || (this._draggable = new jr(e, e, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), Ve(e, "leaflet-marker-draggable");
        },
        removeHooks: function() {
          this._draggable.off({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).disable(), this._marker._icon && Ct(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(e) {
          var r = this._marker, a = r._map, c = this._marker.options.autoPanSpeed, p = this._marker.options.autoPanPadding, E = Br(r._icon), N = a.getPixelBounds(), k = a.getPixelOrigin(), H = kt(
            N.min._subtract(k).add(p),
            N.max._subtract(k).subtract(p)
          );
          if (!H.contains(E)) {
            var se = Le(
              (Math.max(H.max.x, E.x) - H.max.x) / (N.max.x - H.max.x) - (Math.min(H.min.x, E.x) - H.min.x) / (N.min.x - H.min.x),
              (Math.max(H.max.y, E.y) - H.max.y) / (N.max.y - H.max.y) - (Math.min(H.min.y, E.y) - H.min.y) / (N.min.y - H.min.y)
            ).multiplyBy(c);
            a.panBy(se, { animate: !1 }), this._draggable._newPos._add(se), this._draggable._startPos._add(se), hn(r._icon, this._draggable._newPos), this._onDrag(e), this._panRequest = le(this._adjustPan.bind(this, e));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(e) {
          this._marker.options.autoPan && (ne(this._panRequest), this._panRequest = le(this._adjustPan.bind(this, e)));
        },
        _onDrag: function(e) {
          var r = this._marker, a = r._shadow, c = Br(r._icon), p = r._map.layerPointToLatLng(c);
          a && hn(a, c), r._latlng = p, e.latlng = p, e.oldLatLng = this._oldLatLng, r.fire("move", e).fire("drag", e);
        },
        _onDragEnd: function(e) {
          ne(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", e);
        }
      }), $o = Jt.extend({
        // @section
        // @aka Marker options
        options: {
          // @option icon: Icon = *
          // Icon instance to use for rendering the marker.
          // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
          // If not specified, a common instance of `L.Icon.Default` is used.
          icon: new fo(),
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
          G(this, r), this._latlng = Ye(e);
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
          return this._latlng = Ye(e), this.update(), this.fire("move", { oldLatLng: r, latlng: this._latlng });
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
          a !== this._icon && (this._icon && this._removeIcon(), c = !0, e.title && (a.title = e.title), a.tagName === "IMG" && (a.alt = e.alt || "")), Ve(a, r), e.keyboard && (a.tabIndex = "0", a.setAttribute("role", "button")), this._icon = a, e.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && je(a, "focus", this._panOnFocus, this);
          var p = e.icon.createShadow(this._shadow), E = !1;
          p !== this._shadow && (this._removeShadow(), E = !0), p && (Ve(p, r), p.alt = ""), this._shadow = p, e.opacity < 1 && this._updateOpacity(), c && this.getPane().appendChild(this._icon), this._initInteraction(), p && E && this.getPane(e.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && Mt(this._icon, "focus", this._panOnFocus, this), bt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && bt(this._shadow), this._shadow = null;
        },
        _setPos: function(e) {
          this._icon && hn(this._icon, e), this._shadow && hn(this._shadow, e), this._zIndex = e.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(e) {
          this._icon && (this._icon.style.zIndex = this._zIndex + e);
        },
        _animateZoom: function(e) {
          var r = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center).round();
          this._setPos(r);
        },
        _initInteraction: function() {
          if (this.options.interactive && (Ve(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Ql)) {
            var e = this.options.draggable;
            this.dragging && (e = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Ql(this), e && this.dragging.enable();
          }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(e) {
          return this.options.opacity = e, this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function() {
          var e = this.options.opacity;
          this._icon && Pi(this._icon, e), this._shadow && Pi(this._shadow, e);
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
            var r = this.options.icon.options, a = r.iconSize ? Le(r.iconSize) : Le(0, 0), c = r.iconAnchor ? Le(r.iconAnchor) : Le(0, 0);
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
        return new $o(e, r);
      }
      var Qr = Jt.extend({
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
      }), Jo = Qr.extend({
        // @section
        // @aka CircleMarker options
        options: {
          fill: !0,
          // @option radius: Number = 10
          // Radius of the circle marker, in pixels
          radius: 10
        },
        initialize: function(e, r) {
          G(this, r), this._latlng = Ye(e), this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(e) {
          var r = this._latlng;
          return this._latlng = Ye(e), this.redraw(), this.fire("move", { oldLatLng: r, latlng: this._latlng });
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
          return Qr.prototype.setStyle.call(this, e), this.setRadius(r), this;
        },
        _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function() {
          var e = this._radius, r = this._radiusY || e, a = this._clickTolerance(), c = [e + a, r + a];
          this._pxBounds = new Me(this._point.subtract(c), this._point.add(c));
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
      function Ua(e, r) {
        return new Jo(e, r);
      }
      var jo = Jo.extend({
        initialize: function(e, r, a) {
          if (typeof r == "number" && (r = h({}, a, { radius: r })), G(this, r), this._latlng = Ye(e), isNaN(this.options.radius))
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
          return new en(
            this._map.layerPointToLatLng(this._point.subtract(e)),
            this._map.layerPointToLatLng(this._point.add(e))
          );
        },
        setStyle: Qr.prototype.setStyle,
        _project: function() {
          var e = this._latlng.lng, r = this._latlng.lat, a = this._map, c = a.options.crs;
          if (c.distance === un.distance) {
            var p = Math.PI / 180, E = this._mRadius / un.R / p, N = a.project([r + E, e]), k = a.project([r - E, e]), H = N.add(k).divideBy(2), se = a.unproject(H).lat, Se = Math.acos((Math.cos(E * p) - Math.sin(r * p) * Math.sin(se * p)) / (Math.cos(r * p) * Math.cos(se * p))) / p;
            (isNaN(Se) || Se === 0) && (Se = E / Math.cos(Math.PI / 180 * r)), this._point = H.subtract(a.getPixelOrigin()), this._radius = isNaN(Se) ? 0 : H.x - a.project([se, e - Se]).x, this._radiusY = H.y - N.y;
          } else {
            var xe = c.unproject(c.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = a.latLngToLayerPoint(this._latlng), this._radius = this._point.x - a.latLngToLayerPoint(xe).x;
          }
          this._updateBounds();
        }
      });
      function es(e, r, a) {
        return new jo(e, r, a);
      }
      var Yi = Qr.extend({
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
          for (var r = 1 / 0, a = null, c = co, p, E, N = 0, k = this._parts.length; N < k; N++)
            for (var H = this._parts[N], se = 1, Se = H.length; se < Se; se++) {
              p = H[se - 1], E = H[se];
              var xe = c(e, p, E, !0);
              xe < r && (r = xe, a = c(e, p, E));
            }
          return a && (a.distance = Math.sqrt(r)), a;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return qo(this._defaultShape(), this._map.options.crs);
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
          return r = r || this._defaultShape(), e = Ye(e), r.push(e), this._bounds.extend(e), this.redraw();
        },
        _setLatLngs: function(e) {
          this._bounds = new en(), this._latlngs = this._convertLatLngs(e);
        },
        _defaultShape: function() {
          return Mi(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(e) {
          for (var r = [], a = Mi(e), c = 0, p = e.length; c < p; c++)
            a ? (r[c] = Ye(e[c]), this._bounds.extend(r[c])) : r[c] = this._convertLatLngs(e[c]);
          return r;
        },
        _project: function() {
          var e = new Me();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, e), this._bounds.isValid() && e.isValid() && (this._rawPxBounds = e, this._updateBounds());
        },
        _updateBounds: function() {
          var e = this._clickTolerance(), r = new K(e, e);
          this._rawPxBounds && (this._pxBounds = new Me([
            this._rawPxBounds.min.subtract(r),
            this._rawPxBounds.max.add(r)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(e, r, a) {
          var c = e[0] instanceof Qe, p = e.length, E, N;
          if (c) {
            for (N = [], E = 0; E < p; E++)
              N[E] = this._map.latLngToLayerPoint(e[E]), a.extend(N[E]);
            r.push(N);
          } else
            for (E = 0; E < p; E++)
              this._projectLatlngs(e[E], r, a);
        },
        // clip polyline by renderer bounds so that we have less to render for performance
        _clipPoints: function() {
          var e = this._renderer._bounds;
          if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(e))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            var r = this._parts, a, c, p, E, N, k, H;
            for (a = 0, p = 0, E = this._rings.length; a < E; a++)
              for (H = this._rings[a], c = 0, N = H.length; c < N - 1; c++)
                k = $l(H[c], H[c + 1], e, c, !0), k && (r[p] = r[p] || [], r[p].push(k[0]), (k[1] !== H[c + 1] || c === N - 2) && (r[p].push(k[1]), p++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var e = this._parts, r = this.options.smoothFactor, a = 0, c = e.length; a < c; a++)
            e[a] = Ut(e[a], r);
        },
        _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
          this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(e, r) {
          var a, c, p, E, N, k, H = this._clickTolerance();
          if (!this._pxBounds || !this._pxBounds.contains(e))
            return !1;
          for (a = 0, E = this._parts.length; a < E; a++)
            for (k = this._parts[a], c = 0, N = k.length, p = N - 1; c < N; p = c++)
              if (!(!r && c === 0) && Gr(e, k[p], k[c]) <= H)
                return !0;
          return !1;
        }
      });
      function _c(e, r) {
        return new Yi(e, r);
      }
      Yi._flat = Fa;
      var Us = Yi.extend({
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
          return kr(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(e) {
          var r = Yi.prototype._convertLatLngs.call(this, e), a = r.length;
          return a >= 2 && r[0] instanceof Qe && r[0].equals(r[a - 1]) && r.pop(), r;
        },
        _setLatLngs: function(e) {
          Yi.prototype._setLatLngs.call(this, e), Mi(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return Mi(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var e = this._renderer._bounds, r = this.options.weight, a = new K(r, r);
          if (e = new Me(e.min.subtract(a), e.max.add(a)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(e))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var c = 0, p = this._rings.length, E; c < p; c++)
              E = Ra(this._rings[c], e, !0), E.length && this._parts.push(E);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(e) {
          var r = !1, a, c, p, E, N, k, H, se;
          if (!this._pxBounds || !this._pxBounds.contains(e))
            return !1;
          for (E = 0, H = this._parts.length; E < H; E++)
            for (a = this._parts[E], N = 0, se = a.length, k = se - 1; N < se; k = N++)
              c = a[N], p = a[k], c.y > e.y != p.y > e.y && e.x < (p.x - c.x) * (e.y - c.y) / (p.y - c.y) + c.x && (r = !r);
          return r || Yi.prototype._containsPoint.call(this, e, !0);
        }
      });
      function mc(e, r) {
        return new Us(e, r);
      }
      var mi = Cr.extend({
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
          var r = J(e) ? e : e.features, a, c, p;
          if (r) {
            for (a = 0, c = r.length; a < c; a++)
              p = r[a], (p.geometries || p.geometry || p.features || p.coordinates) && this.addData(p);
            return this;
          }
          var E = this.options;
          if (E.filter && !E.filter(e))
            return this;
          var N = vi(e, E);
          return N ? (N.feature = Ur(e), N.defaultOptions = N.options, this.resetStyle(N), E.onEachFeature && E.onEachFeature(e, N), this.addLayer(N)) : this;
        },
        // @method resetStyle( <Path> layer? ): this
        // Resets the given vector layer's style to the original GeoJSON style, useful for resetting style after hover events.
        // If `layer` is omitted, the style of all features in the current layer is reset.
        resetStyle: function(e) {
          return e === void 0 ? this.eachLayer(this.resetStyle, this) : (e.options = h({}, e.defaultOptions), this._setLayerStyle(e, this.options.style), this);
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
      function vi(e, r) {
        var a = e.type === "Feature" ? e.geometry : e, c = a ? a.coordinates : null, p = [], E = r && r.pointToLayer, N = r && r.coordsToLatLng || Va, k, H, se, Se;
        if (!c && !a)
          return null;
        switch (a.type) {
          case "Point":
            return k = N(c), za(E, e, k, r);
          case "MultiPoint":
            for (se = 0, Se = c.length; se < Se; se++)
              k = N(c[se]), p.push(za(E, e, k, r));
            return new Cr(p);
          case "LineString":
          case "MultiLineString":
            return H = Xo(c, a.type === "LineString" ? 0 : 1, N), new Yi(H, r);
          case "Polygon":
          case "MultiPolygon":
            return H = Xo(c, a.type === "Polygon" ? 1 : 2, N), new Us(H, r);
          case "GeometryCollection":
            for (se = 0, Se = a.geometries.length; se < Se; se++) {
              var xe = vi({
                geometry: a.geometries[se],
                type: "Feature",
                properties: e.properties
              }, r);
              xe && p.push(xe);
            }
            return new Cr(p);
          case "FeatureCollection":
            for (se = 0, Se = a.features.length; se < Se; se++) {
              var rt = vi(a.features[se], r);
              rt && p.push(rt);
            }
            return new Cr(p);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function za(e, r, a, c) {
        return e ? e(r, a) : new $o(a, c && c.markersInheritOptions && c);
      }
      function Va(e) {
        return new Qe(e[1], e[0], e[2]);
      }
      function Xo(e, r, a) {
        for (var c = [], p = 0, E = e.length, N; p < E; p++)
          N = r ? Xo(e[p], r - 1, a) : (a || Va)(e[p]), c.push(N);
        return c;
      }
      function Wa(e, r) {
        return e = Ye(e), e.alt !== void 0 ? [I(e.lng, r), I(e.lat, r), I(e.alt, r)] : [I(e.lng, r), I(e.lat, r)];
      }
      function Qo(e, r, a, c) {
        for (var p = [], E = 0, N = e.length; E < N; E++)
          p.push(r ? Qo(e[E], Mi(e[E]) ? 0 : r - 1, a, c) : Wa(e[E], c));
        return !r && a && p.length > 0 && p.push(p[0].slice()), p;
      }
      function zs(e, r) {
        return e.feature ? h({}, e.feature, { geometry: r }) : Ur(r);
      }
      function Ur(e) {
        return e.type === "Feature" || e.type === "FeatureCollection" ? e : {
          type: "Feature",
          properties: {},
          geometry: e
        };
      }
      var F = {
        toGeoJSON: function(e) {
          return zs(this, {
            type: "Point",
            coordinates: Wa(this.getLatLng(), e)
          });
        }
      };
      $o.include(F), jo.include(F), Jo.include(F), Yi.include({
        toGeoJSON: function(e) {
          var r = !Mi(this._latlngs), a = Qo(this._latlngs, r ? 1 : 0, !1, e);
          return zs(this, {
            type: (r ? "Multi" : "") + "LineString",
            coordinates: a
          });
        }
      }), Us.include({
        toGeoJSON: function(e) {
          var r = !Mi(this._latlngs), a = r && !Mi(this._latlngs[0]), c = Qo(this._latlngs, a ? 2 : r ? 1 : 0, !0, e);
          return r || (c = [c]), zs(this, {
            type: (a ? "Multi" : "") + "Polygon",
            coordinates: c
          });
        }
      }), Xr.include({
        toMultiPoint: function(e) {
          var r = [];
          return this.eachLayer(function(a) {
            r.push(a.toGeoJSON(e).geometry.coordinates);
          }), zs(this, {
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
          return this.eachLayer(function(p) {
            if (p.toGeoJSON) {
              var E = p.toGeoJSON(e);
              if (a)
                c.push(E.geometry);
              else {
                var N = Ur(E);
                N.type === "FeatureCollection" ? c.push.apply(c, N.features) : c.push(N);
              }
            }
          }), a ? zs(this, {
            geometries: c,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: c
          };
        }
      });
      function $(e, r) {
        return new mi(e, r);
      }
      var Y = $, be = Jt.extend({
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
          this._url = e, this._bounds = Ot(r), G(this, a);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Ve(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function() {
          bt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
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
          return this._map && xn(this._image), this;
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
          return this._bounds = Ot(e), this._map && this._reset(), this;
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
          var e = this._url.tagName === "IMG", r = this._image = e ? this._url : et("img");
          if (Ve(r, "leaflet-image-layer"), this._zoomAnimated && Ve(r, "leaflet-zoom-animated"), this.options.className && Ve(r, this.options.className), r.onselectstart = S, r.onmousemove = S, r.onload = g(this.fire, this, "load"), r.onerror = g(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (r.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), e) {
            this._url = r.src;
            return;
          }
          r.src = this._url, r.alt = this.options.alt;
        },
        _animateZoom: function(e) {
          var r = this._map.getZoomScale(e.zoom), a = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;
          ps(this._image, a, r);
        },
        _reset: function() {
          var e = this._image, r = new Me(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ), a = r.getSize();
          hn(e, r.min), e.style.width = a.x + "px", e.style.height = a.y + "px";
        },
        _updateOpacity: function() {
          Pi(this._image, this.options.opacity);
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
      }), $e = function(e, r, a) {
        return new be(e, r, a);
      }, Et = be.extend({
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
          var e = this._url.tagName === "VIDEO", r = this._image = e ? this._url : et("video");
          if (Ve(r, "leaflet-image-layer"), this._zoomAnimated && Ve(r, "leaflet-zoom-animated"), this.options.className && Ve(r, this.options.className), r.onselectstart = S, r.onmousemove = S, r.onloadeddata = g(this.fire, this, "load"), e) {
            for (var a = r.getElementsByTagName("source"), c = [], p = 0; p < a.length; p++)
              c.push(a[p].src);
            this._url = a.length > 0 ? c : [r.src];
            return;
          }
          J(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(r.style, "objectFit") && (r.style.objectFit = "fill"), r.autoplay = !!this.options.autoplay, r.loop = !!this.options.loop, r.muted = !!this.options.muted, r.playsInline = !!this.options.playsInline;
          for (var E = 0; E < this._url.length; E++) {
            var N = et("source");
            N.src = this._url[E], r.appendChild(N);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function Cn(e, r, a) {
        return new Et(e, r, a);
      }
      var Dt = be.extend({
        _initImage: function() {
          var e = this._image = this._url;
          Ve(e, "leaflet-image-layer"), this._zoomAnimated && Ve(e, "leaflet-zoom-animated"), this.options.className && Ve(e, this.options.className), e.onselectstart = S, e.onmousemove = S;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function Za(e, r, a) {
        return new Dt(e, r, a);
      }
      var Or = Jt.extend({
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
          e && (e instanceof Qe || J(e)) ? (this._latlng = Ye(e), G(this, r)) : (G(this, e), this._source = r), this.options.content && (this._content = this.options.content);
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
          this._zoomAnimated = e._zoomAnimated, this._container || this._initLayout(), e._fadeAnimated && Pi(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), e._fadeAnimated && Pi(this._container, 1), this.bringToFront(), this.options.interactive && (Ve(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(e) {
          e._fadeAnimated ? (Pi(this._container, 0), this._removeTimeout = setTimeout(g(bt, void 0, this._container), 200)) : bt(this._container), this.options.interactive && (Ct(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
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
          return this._latlng = Ye(e), this._map && (this._updatePosition(), this._adjustPan()), this;
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
          return this._map && xn(this._container), this;
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
          if (r instanceof Cr) {
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
            var e = this._map.latLngToLayerPoint(this._latlng), r = Le(this.options.offset), a = this._getAnchor();
            this._zoomAnimated ? hn(this._container, e.add(a)) : r = r.add(e).add(a);
            var c = this._containerBottom = -r.y, p = this._containerLeft = -Math.round(this._containerWidth / 2) + r.x;
            this._container.style.bottom = c + "px", this._container.style.left = p + "px";
          }
        },
        _getAnchor: function() {
          return [0, 0];
        }
      });
      _t.include({
        _initOverlay: function(e, r, a, c) {
          var p = r;
          return p instanceof e || (p = new e(c).setContent(r)), a && p.setLatLng(a), p;
        }
      }), Jt.include({
        _initOverlay: function(e, r, a, c) {
          var p = a;
          return p instanceof e ? (G(p, c), p._source = this) : (p = r && !c ? r : new e(c, this), p.setContent(a)), p;
        }
      });
      var si = Or.extend({
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
          return e = arguments.length ? e : this._source._map, !e.hasLayer(this) && e._popup && e._popup.options.autoClose && e.removeLayer(e._popup), e._popup = this, Or.prototype.openOn.call(this, e);
        },
        onAdd: function(e) {
          Or.prototype.onAdd.call(this, e), e.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof Qr || this._source.on("preclick", _s));
        },
        onRemove: function(e) {
          Or.prototype.onRemove.call(this, e), e.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof Qr || this._source.off("preclick", _s));
        },
        getEvents: function() {
          var e = Or.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (e.preclick = this.close), this.options.keepInView && (e.moveend = this._adjustPan), e;
        },
        _initLayout: function() {
          var e = "leaflet-popup", r = this._container = et(
            "div",
            e + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), a = this._wrapper = et("div", e + "-content-wrapper", r);
          if (this._contentNode = et("div", e + "-content", a), ao(r), Ca(this._contentNode), je(r, "contextmenu", _s), this._tipContainer = et("div", e + "-tip-container", r), this._tip = et("div", e + "-tip", this._tipContainer), this.options.closeButton) {
            var c = this._closeButton = et("a", e + "-close-button", r);
            c.setAttribute("role", "button"), c.setAttribute("aria-label", "Close popup"), c.href = "#close", c.innerHTML = '<span aria-hidden="true">&#215;</span>', je(c, "click", function(p) {
              tt(p), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var e = this._contentNode, r = e.style;
          r.width = "", r.whiteSpace = "nowrap";
          var a = e.offsetWidth;
          a = Math.min(a, this.options.maxWidth), a = Math.max(a, this.options.minWidth), r.width = a + 1 + "px", r.whiteSpace = "", r.height = "";
          var c = e.offsetHeight, p = this.options.maxHeight, E = "leaflet-popup-scrolled";
          p && c > p ? (r.height = p + "px", Ve(e, E)) : Ct(e, E), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(e) {
          var r = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center), a = this._getAnchor();
          hn(this._container, r.add(a));
        },
        _adjustPan: function() {
          if (this.options.autoPan) {
            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
              this._autopanning = !1;
              return;
            }
            var e = this._map, r = parseInt(rr(this._container, "marginBottom"), 10) || 0, a = this._container.offsetHeight + r, c = this._containerWidth, p = new K(this._containerLeft, -a - this._containerBottom);
            p._add(Br(this._container));
            var E = e.layerPointToContainerPoint(p), N = Le(this.options.autoPanPadding), k = Le(this.options.autoPanPaddingTopLeft || N), H = Le(this.options.autoPanPaddingBottomRight || N), se = e.getSize(), Se = 0, xe = 0;
            E.x + c + H.x > se.x && (Se = E.x + c - se.x + H.x), E.x - Se - k.x < 0 && (Se = E.x - k.x), E.y + a + H.y > se.y && (xe = E.y + a - se.y + H.y), E.y - xe - k.y < 0 && (xe = E.y - k.y), (Se || xe) && (this.options.keepInView && (this._autopanning = !0), e.fire("autopanstart").panBy([Se, xe]));
          }
        },
        _getAnchor: function() {
          return Le(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), ea = function(e, r) {
        return new si(e, r);
      };
      _t.mergeOptions({
        closePopupOnClick: !0
      }), _t.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(e, r, a) {
          return this._initOverlay(si, e, r, a).openOn(this), this;
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
          return this._popup = this._initOverlay(si, this._popup, e, r), this._popupHandlersAdded || (this.on({
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
          return this._popup && (this instanceof Cr || (this._popup._source = this), this._popup._prepareOpen(e || this._latlng) && this._popup.openOn(this._map)), this;
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
            yt(e);
            var r = e.layer || e.target;
            if (this._popup._source === r && !(r instanceof Qr)) {
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
      var ta = Or.extend({
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
          Or.prototype.onAdd.call(this, e), this.setOpacity(this.options.opacity), e.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function(e) {
          Or.prototype.onRemove.call(this, e), e.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function() {
          var e = Or.prototype.getEvents.call(this);
          return this.options.permanent || (e.preclick = this.close), e;
        },
        _initLayout: function() {
          var e = "leaflet-tooltip", r = e + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = et("div", r), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + y(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(e) {
          var r, a, c = this._map, p = this._container, E = c.latLngToContainerPoint(c.getCenter()), N = c.layerPointToContainerPoint(e), k = this.options.direction, H = p.offsetWidth, se = p.offsetHeight, Se = Le(this.options.offset), xe = this._getAnchor();
          k === "top" ? (r = H / 2, a = se) : k === "bottom" ? (r = H / 2, a = 0) : k === "center" ? (r = H / 2, a = se / 2) : k === "right" ? (r = 0, a = se / 2) : k === "left" ? (r = H, a = se / 2) : N.x < E.x ? (k = "right", r = 0, a = se / 2) : (k = "left", r = H + (Se.x + xe.x) * 2, a = se / 2), e = e.subtract(Le(r, a, !0)).add(Se).add(xe), Ct(p, "leaflet-tooltip-right"), Ct(p, "leaflet-tooltip-left"), Ct(p, "leaflet-tooltip-top"), Ct(p, "leaflet-tooltip-bottom"), Ve(p, "leaflet-tooltip-" + k), hn(p, e);
        },
        _updatePosition: function() {
          var e = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(e);
        },
        setOpacity: function(e) {
          this.options.opacity = e, this._container && Pi(this._container, e);
        },
        _animateZoom: function(e) {
          var r = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
          this._setPosition(r);
        },
        _getAnchor: function() {
          return Le(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      }), Vs = function(e, r) {
        return new ta(e, r);
      };
      _t.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(e, r, a) {
          return this._initOverlay(ta, e, r, a).openOn(this), this;
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
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(ta, this._tooltip, e, r), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
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
          return this._tooltip && (this instanceof Cr || (this._tooltip._source = this), this._tooltip._prepareOpen(e) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
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
          r && (je(r, "focus", function() {
            this._tooltip._source = e, this.openTooltip();
          }, this), je(r, "blur", this.closeTooltip, this));
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
      var po = ks.extend({
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
          if (a.html instanceof Element ? (sr(r), r.appendChild(a.html)) : r.innerHTML = a.html !== !1 ? a.html : "", a.bgPos) {
            var c = Le(a.bgPos);
            r.style.backgroundPosition = -c.x + "px " + -c.y + "px";
          }
          return this._setIconStyles(r, "icon"), r;
        },
        createShadow: function() {
          return null;
        }
      });
      function na(e) {
        return new po(e);
      }
      ks.Default = fo;
      var mt = Jt.extend({
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
          updateWhenIdle: de.mobile,
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
          this._removeAllTiles(), bt(this._container), e._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
          return this._map && (xn(this._container), this._setAutoZIndex(Math.max)), this;
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
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = m(this._onMoveEnd, this.options.updateInterval, this)), e.move = this._onMove), this._zoomAnimated && (e.zoomanim = this._animateZoom), e;
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
          return e instanceof K ? e : new K(e, e);
        },
        _updateZIndex: function() {
          this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
        },
        _setAutoZIndex: function(e) {
          for (var r = this.getPane().children, a = -e(-1 / 0, 1 / 0), c = 0, p = r.length, E; c < p; c++)
            E = r[c].style.zIndex, r[c] !== this._container && E && (a = e(a, +E));
          isFinite(a) && (this.options.zIndex = a + e(-1, 1), this._updateZIndex());
        },
        _updateOpacity: function() {
          if (this._map && !de.ielt9) {
            Pi(this._container, this.options.opacity);
            var e = +/* @__PURE__ */ new Date(), r = !1, a = !1;
            for (var c in this._tiles) {
              var p = this._tiles[c];
              if (!(!p.current || !p.loaded)) {
                var E = Math.min(1, (e - p.loaded) / 200);
                Pi(p.el, E), E < 1 ? r = !0 : (p.active ? a = !0 : this._onOpaqueTile(p), p.active = !0);
              }
            }
            a && !this._noPrune && this._pruneTiles(), r && (ne(this._fadeFrame), this._fadeFrame = le(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: S,
        _initContainer: function() {
          this._container || (this._container = et("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var e = this._tileZoom, r = this.options.maxZoom;
          if (e !== void 0) {
            for (var a in this._levels)
              a = Number(a), this._levels[a].el.children.length || a === e ? (this._levels[a].el.style.zIndex = r - Math.abs(e - a), this._onUpdateLevel(a)) : (bt(this._levels[a].el), this._removeTilesAtZoom(a), this._onRemoveLevel(a), delete this._levels[a]);
            var c = this._levels[e], p = this._map;
            return c || (c = this._levels[e] = {}, c.el = et("div", "leaflet-tile-container leaflet-zoom-animated", this._container), c.el.style.zIndex = r, c.origin = p.project(p.unproject(p.getPixelOrigin()), e).round(), c.zoom = e, this._setZoomTransform(c, p.getCenter(), p.getZoom()), S(c.el.offsetWidth), this._onCreateLevel(c)), this._level = c, c;
          }
        },
        _onUpdateLevel: S,
        _onRemoveLevel: S,
        _onCreateLevel: S,
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
            bt(this._levels[e].el), this._onRemoveLevel(Number(e)), delete this._levels[e];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(e, r, a, c) {
          var p = Math.floor(e / 2), E = Math.floor(r / 2), N = a - 1, k = new K(+p, +E);
          k.z = +N;
          var H = this._tileCoordsToKey(k), se = this._tiles[H];
          return se && se.active ? (se.retain = !0, !0) : (se && se.loaded && (se.retain = !0), N > c ? this._retainParent(p, E, N, c) : !1);
        },
        _retainChildren: function(e, r, a, c) {
          for (var p = 2 * e; p < 2 * e + 2; p++)
            for (var E = 2 * r; E < 2 * r + 2; E++) {
              var N = new K(p, E);
              N.z = a + 1;
              var k = this._tileCoordsToKey(N), H = this._tiles[k];
              if (H && H.active) {
                H.retain = !0;
                continue;
              } else H && H.loaded && (H.retain = !0);
              a + 1 < c && this._retainChildren(p, E, a + 1, c);
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
          var p = Math.round(r);
          this.options.maxZoom !== void 0 && p > this.options.maxZoom || this.options.minZoom !== void 0 && p < this.options.minZoom ? p = void 0 : p = this._clampZoom(p);
          var E = this.options.updateWhenZooming && p !== this._tileZoom;
          (!c || E) && (this._tileZoom = p, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), p !== void 0 && this._update(e), a || this._pruneTiles(), this._noPrune = !!a), this._setZoomTransforms(e, r);
        },
        _setZoomTransforms: function(e, r) {
          for (var a in this._levels)
            this._setZoomTransform(this._levels[a], e, r);
        },
        _setZoomTransform: function(e, r, a) {
          var c = this._map.getZoomScale(a, e.zoom), p = e.origin.multiplyBy(c).subtract(this._map._getNewPixelOrigin(r, a)).round();
          de.any3d ? ps(e.el, p, c) : hn(e.el, p);
        },
        _resetGrid: function() {
          var e = this._map, r = e.options.crs, a = this._tileSize = this.getTileSize(), c = this._tileZoom, p = this._map.getPixelWorldBounds(this._tileZoom);
          p && (this._globalTileRange = this._pxBoundsToTileRange(p)), this._wrapX = r.wrapLng && !this.options.noWrap && [
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
          var r = this._map, a = r._animatingZoom ? Math.max(r._animateToZoom, r.getZoom()) : r.getZoom(), c = r.getZoomScale(a, this._tileZoom), p = r.project(e, this._tileZoom).floor(), E = r.getSize().divideBy(c * 2);
          return new Me(p.subtract(E), p.add(E));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(e) {
          var r = this._map;
          if (r) {
            var a = this._clampZoom(r.getZoom());
            if (e === void 0 && (e = r.getCenter()), this._tileZoom !== void 0) {
              var c = this._getTiledPixelBounds(e), p = this._pxBoundsToTileRange(c), E = p.getCenter(), N = [], k = this.options.keepBuffer, H = new Me(
                p.getBottomLeft().subtract([k, -k]),
                p.getTopRight().add([k, -k])
              );
              if (!(isFinite(p.min.x) && isFinite(p.min.y) && isFinite(p.max.x) && isFinite(p.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var se in this._tiles) {
                var Se = this._tiles[se].coords;
                (Se.z !== this._tileZoom || !H.contains(new K(Se.x, Se.y))) && (this._tiles[se].current = !1);
              }
              if (Math.abs(a - this._tileZoom) > 1) {
                this._setView(e, a);
                return;
              }
              for (var xe = p.min.y; xe <= p.max.y; xe++)
                for (var rt = p.min.x; rt <= p.max.x; rt++) {
                  var mn = new K(rt, xe);
                  if (mn.z = this._tileZoom, !!this._isValidTile(mn)) {
                    var sn = this._tiles[this._tileCoordsToKey(mn)];
                    sn ? sn.current = !0 : N.push(mn);
                  }
                }
              if (N.sort(function(Un, ar) {
                return Un.distanceTo(E) - ar.distanceTo(E);
              }), N.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var Kn = document.createDocumentFragment();
                for (rt = 0; rt < N.length; rt++)
                  this._addTile(N[rt], Kn);
                this._level.el.appendChild(Kn);
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
          return Ot(this.options.bounds).overlaps(c);
        },
        _keyToBounds: function(e) {
          return this._tileCoordsToBounds(this._keyToTileCoords(e));
        },
        _tileCoordsToNwSe: function(e) {
          var r = this._map, a = this.getTileSize(), c = e.scaleBy(a), p = c.add(a), E = r.unproject(c, e.z), N = r.unproject(p, e.z);
          return [E, N];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(e) {
          var r = this._tileCoordsToNwSe(e), a = new en(r[0], r[1]);
          return this.options.noWrap || (a = this._map.wrapLatLngBounds(a)), a;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(e) {
          return e.x + ":" + e.y + ":" + e.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(e) {
          var r = e.split(":"), a = new K(+r[0], +r[1]);
          return a.z = +r[2], a;
        },
        _removeTile: function(e) {
          var r = this._tiles[e];
          r && (bt(r.el), delete this._tiles[e], this.fire("tileunload", {
            tile: r.el,
            coords: this._keyToTileCoords(e)
          }));
        },
        _initTile: function(e) {
          Ve(e, "leaflet-tile");
          var r = this.getTileSize();
          e.style.width = r.x + "px", e.style.height = r.y + "px", e.onselectstart = S, e.onmousemove = S, de.ielt9 && this.options.opacity < 1 && Pi(e, this.options.opacity);
        },
        _addTile: function(e, r) {
          var a = this._getTilePos(e), c = this._tileCoordsToKey(e), p = this.createTile(this._wrapCoords(e), g(this._tileReady, this, e));
          this._initTile(p), this.createTile.length < 2 && le(g(this._tileReady, this, e, null, p)), hn(p, a), this._tiles[c] = {
            el: p,
            coords: e,
            current: !0
          }, r.appendChild(p), this.fire("tileloadstart", {
            tile: p,
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
          a = this._tiles[c], a && (a.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Pi(a.el, 0), ne(this._fadeFrame), this._fadeFrame = le(this._updateOpacity, this)) : (a.active = !0, this._pruneTiles()), r || (Ve(a.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: a.el,
            coords: e
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), de.ielt9 || !this._map._fadeAnimated ? le(this._pruneTiles, this) : setTimeout(g(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(e) {
          return e.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(e) {
          var r = new K(
            this._wrapX ? A(e.x, this._wrapX) : e.x,
            this._wrapY ? A(e.y, this._wrapY) : e.y
          );
          return r.z = e.z, r;
        },
        _pxBoundsToTileRange: function(e) {
          var r = this.getTileSize();
          return new Me(
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
      function vc(e) {
        return new mt(e);
      }
      var ms = mt.extend({
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
          this._url = e, r = G(this, r), r.detectRetina && de.retina && r.maxZoom > 0 ? (r.tileSize = Math.floor(r.tileSize / 2), r.zoomReverse ? (r.zoomOffset--, r.minZoom = Math.min(r.maxZoom, r.minZoom + 1)) : (r.zoomOffset++, r.maxZoom = Math.max(r.minZoom, r.maxZoom - 1)), r.minZoom = Math.max(0, r.minZoom)) : r.zoomReverse ? r.minZoom = Math.min(r.maxZoom, r.minZoom) : r.maxZoom = Math.max(r.minZoom, r.maxZoom), typeof r.subdomains == "string" && (r.subdomains = r.subdomains.split("")), this.on("tileunload", this._onTileRemove);
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
          return je(a, "load", g(this._tileOnLoad, this, r, a)), je(a, "error", g(this._tileOnError, this, r, a)), (this.options.crossOrigin || this.options.crossOrigin === "") && (a.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (a.referrerPolicy = this.options.referrerPolicy), a.alt = "", a.src = this.getTileUrl(e), a;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(e) {
          var r = {
            r: de.retina ? "@2x" : "",
            s: this._getSubdomain(e),
            x: e.x,
            y: e.y,
            z: this._getZoomForUrl()
          };
          if (this._map && !this._map.options.crs.infinite) {
            var a = this._globalTileRange.max.y - e.y;
            this.options.tms && (r.y = a), r["-y"] = a;
          }
          return Z(this._url, h(r, this.options));
        },
        _tileOnLoad: function(e, r) {
          de.ielt9 ? setTimeout(g(e, this, null, r), 0) : e(null, r);
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
            if (this._tiles[e].coords.z !== this._tileZoom && (r = this._tiles[e].el, r.onload = S, r.onerror = S, !r.complete)) {
              r.src = U;
              var a = this._tiles[e].coords;
              bt(r), delete this._tiles[e], this.fire("tileabort", {
                tile: r,
                coords: a
              });
            }
        },
        _removeTile: function(e) {
          var r = this._tiles[e];
          if (r)
            return r.el.setAttribute("src", U), mt.prototype._removeTile.call(this, e);
        },
        _tileReady: function(e, r, a) {
          if (!(!this._map || a && a.getAttribute("src") === U))
            return mt.prototype._tileReady.call(this, e, r, a);
        }
      });
      function go(e, r) {
        return new ms(e, r);
      }
      var eu = ms.extend({
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
          var a = h({}, this.defaultWmsParams);
          for (var c in r)
            c in this.options || (a[c] = r[c]);
          r = G(this, r);
          var p = r.detectRetina && de.retina ? 2 : 1, E = this.getTileSize();
          a.width = E.x * p, a.height = E.y * p, this.wmsParams = a;
        },
        onAdd: function(e) {
          this._crs = this.options.crs || e.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var r = this._wmsVersion >= 1.3 ? "crs" : "srs";
          this.wmsParams[r] = this._crs.code, ms.prototype.onAdd.call(this, e);
        },
        getTileUrl: function(e) {
          var r = this._tileCoordsToNwSe(e), a = this._crs, c = kt(a.project(r[0]), a.project(r[1])), p = c.min, E = c.max, N = (this._wmsVersion >= 1.3 && this._crs === Jl ? [p.y, p.x, E.y, E.x] : [p.x, p.y, E.x, E.y]).join(","), k = ms.prototype.getTileUrl.call(this, e);
          return k + j(this.wmsParams, k, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + N;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(e, r) {
          return h(this.wmsParams, e), r || this.redraw(), this;
        }
      });
      function yc(e, r) {
        return new eu(e, r);
      }
      ms.WMS = eu, go.wms = yc;
      var zr = Jt.extend({
        // @section
        // @aka Renderer options
        options: {
          // @option padding: Number = 0.1
          // How much to extend the clip area around the map view (relative to its size)
          // e.g. 0.1 would be 10% of map view in each direction
          padding: 0.1
        },
        initialize: function(e) {
          G(this, e), y(this), this._layers = this._layers || {};
        },
        onAdd: function() {
          this._container || (this._initContainer(), Ve(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
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
          var a = this._map.getZoomScale(r, this._zoom), c = this._map.getSize().multiplyBy(0.5 + this.options.padding), p = this._map.project(this._center, r), E = c.multiplyBy(-a).add(p).subtract(this._map._getNewPixelOrigin(e, r));
          de.any3d ? ps(this._container, E, a) : hn(this._container, E);
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
          this._bounds = new Me(a, a.add(r.multiplyBy(1 + e * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }), _o = zr.extend({
        // @section
        // @aka Canvas options
        options: {
          // @option tolerance: Number = 0
          // How much to extend the click tolerance around a path/object on the map.
          tolerance: 0
        },
        getEvents: function() {
          var e = zr.prototype.getEvents.call(this);
          return e.viewprereset = this._onViewPreReset, e;
        },
        _onViewPreReset: function() {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function() {
          zr.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function() {
          var e = this._container = document.createElement("canvas");
          je(e, "mousemove", this._onMouseMove, this), je(e, "click dblclick mousedown mouseup contextmenu", this._onClick, this), je(e, "mouseout", this._handleMouseOut, this), e._leaflet_disable_events = !0, this._ctx = e.getContext("2d");
        },
        _destroyContainer: function() {
          ne(this._redrawRequest), delete this._ctx, bt(this._container), Mt(this._container), delete this._container;
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
            zr.prototype._update.call(this);
            var e = this._bounds, r = this._container, a = e.getSize(), c = de.retina ? 2 : 1;
            hn(r, e.min), r.width = c * a.x, r.height = c * a.y, r.style.width = a.x + "px", r.style.height = a.y + "px", de.retina && this._ctx.scale(2, 2), this._ctx.translate(-e.min.x, -e.min.y), this.fire("update");
          }
        },
        _reset: function() {
          zr.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
        },
        _initPath: function(e) {
          this._updateDashArray(e), this._layers[y(e)] = e;
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
          a ? a.prev = c : this._drawLast = c, c ? c.next = a : this._drawFirst = a, delete e._order, delete this._layers[y(e)], this._requestRedraw(e);
        },
        _updatePath: function(e) {
          this._extendRedrawBounds(e), e._project(), e._update(), this._requestRedraw(e);
        },
        _updateStyle: function(e) {
          this._updateDashArray(e), this._requestRedraw(e);
        },
        _updateDashArray: function(e) {
          if (typeof e.options.dashArray == "string") {
            var r = e.options.dashArray.split(/[, ]+/), a = [], c, p;
            for (p = 0; p < r.length; p++) {
              if (c = Number(r[p]), isNaN(c))
                return;
              a.push(c);
            }
            e.options._dashArray = a;
          } else
            e.options._dashArray = e.options.dashArray;
        },
        _requestRedraw: function(e) {
          this._map && (this._extendRedrawBounds(e), this._redrawRequest = this._redrawRequest || le(this._redraw, this));
        },
        _extendRedrawBounds: function(e) {
          if (e._pxBounds) {
            var r = (e.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new Me(), this._redrawBounds.extend(e._pxBounds.min.subtract([r, r])), this._redrawBounds.extend(e._pxBounds.max.add([r, r]));
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
            var a, c, p, E, N = e._parts, k = N.length, H = this._ctx;
            if (k) {
              for (H.beginPath(), a = 0; a < k; a++) {
                for (c = 0, p = N[a].length; c < p; c++)
                  E = N[a][c], H[c ? "lineTo" : "moveTo"](E.x, E.y);
                r && H.closePath();
              }
              this._fillStroke(H, e);
            }
          }
        },
        _updateCircle: function(e) {
          if (!(!this._drawing || e._empty())) {
            var r = e._point, a = this._ctx, c = Math.max(Math.round(e._radius), 1), p = (Math.max(Math.round(e._radiusY), 1) || c) / c;
            p !== 1 && (a.save(), a.scale(1, p)), a.beginPath(), a.arc(r.x, r.y / p, c, 0, Math.PI * 2, !1), p !== 1 && a.restore(), this._fillStroke(a, e);
          }
        },
        _fillStroke: function(e, r) {
          var a = r.options;
          a.fill && (e.globalAlpha = a.fillOpacity, e.fillStyle = a.fillColor || a.color, e.fill(a.fillRule || "evenodd")), a.stroke && a.weight !== 0 && (e.setLineDash && e.setLineDash(r.options && r.options._dashArray || []), e.globalAlpha = a.opacity, e.lineWidth = a.weight, e.strokeStyle = a.color, e.lineCap = a.lineCap, e.lineJoin = a.lineJoin, e.stroke());
        },
        // Canvas obviously doesn't have mouse events for individual drawn objects,
        // so we emulate that by calculating what's under the mouse on mousemove/click manually
        _onClick: function(e) {
          for (var r = this._map.mouseEventToLayerPoint(e), a, c, p = this._drawFirst; p; p = p.next)
            a = p.layer, a.options.interactive && a._containsPoint(r) && (!(e.type === "click" || e.type === "preclick") || !this._map._draggableMoved(a)) && (c = a);
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
          r && (Ct(this._container, "leaflet-interactive"), this._fireEvent([r], e, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
        },
        _handleMouseHover: function(e, r) {
          if (!this._mouseHoverThrottled) {
            for (var a, c, p = this._drawFirst; p; p = p.next)
              a = p.layer, a.options.interactive && a._containsPoint(r) && (c = a);
            c !== this._hoveredLayer && (this._handleMouseOut(e), c && (Ve(this._container, "leaflet-interactive"), this._fireEvent([c], e, "mouseover"), this._hoveredLayer = c)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, e), this._mouseHoverThrottled = !0, setTimeout(g(function() {
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
      function Vr(e) {
        return de.canvas ? new _o(e) : null;
      }
      var ts = (function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(e) {
            return document.createElement("<lvml:" + e + ' class="lvml">');
          };
        } catch {
        }
        return function(e) {
          return document.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      })(), tu = {
        _initContainer: function() {
          this._container = et("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (zr.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(e) {
          var r = e._container = ts("shape");
          Ve(r, "leaflet-vml-shape " + (this.options.className || "")), r.coordsize = "1 1", e._path = ts("path"), r.appendChild(e._path), this._updateStyle(e), this._layers[y(e)] = e;
        },
        _addPath: function(e) {
          var r = e._container;
          this._container.appendChild(r), e.options.interactive && e.addInteractiveTarget(r);
        },
        _removePath: function(e) {
          var r = e._container;
          bt(r), e.removeInteractiveTarget(r), delete this._layers[y(e)];
        },
        _updateStyle: function(e) {
          var r = e._stroke, a = e._fill, c = e.options, p = e._container;
          p.stroked = !!c.stroke, p.filled = !!c.fill, c.stroke ? (r || (r = e._stroke = ts("stroke")), p.appendChild(r), r.weight = c.weight + "px", r.color = c.color, r.opacity = c.opacity, c.dashArray ? r.dashStyle = J(c.dashArray) ? c.dashArray.join(" ") : c.dashArray.replace(/( *, *)/g, " ") : r.dashStyle = "", r.endcap = c.lineCap.replace("butt", "flat"), r.joinstyle = c.lineJoin) : r && (p.removeChild(r), e._stroke = null), c.fill ? (a || (a = e._fill = ts("fill")), p.appendChild(a), a.color = c.fillColor || c.color, a.opacity = c.fillOpacity) : a && (p.removeChild(a), e._fill = null);
        },
        _updateCircle: function(e) {
          var r = e._point.round(), a = Math.round(e._radius), c = Math.round(e._radiusY || a);
          this._setPath(e, e._empty() ? "M0 0" : "AL " + r.x + "," + r.y + " " + a + "," + c + " 0," + 65535 * 360);
        },
        _setPath: function(e, r) {
          e._path.v = r;
        },
        _bringToFront: function(e) {
          xn(e._container);
        },
        _bringToBack: function(e) {
          gi(e._container);
        }
      }, vs = de.vml ? ts : jn, Ws = zr.extend({
        _initContainer: function() {
          this._container = vs("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = vs("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          bt(this._container), Mt(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            zr.prototype._update.call(this);
            var e = this._bounds, r = e.getSize(), a = this._container;
            (!this._svgSize || !this._svgSize.equals(r)) && (this._svgSize = r, a.setAttribute("width", r.x), a.setAttribute("height", r.y)), hn(a, e.min), a.setAttribute("viewBox", [e.min.x, e.min.y, r.x, r.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(e) {
          var r = e._path = vs("path");
          e.options.className && Ve(r, e.options.className), e.options.interactive && Ve(r, "leaflet-interactive"), this._updateStyle(e), this._layers[y(e)] = e;
        },
        _addPath: function(e) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(e._path), e.addInteractiveTarget(e._path);
        },
        _removePath: function(e) {
          bt(e._path), e.removeInteractiveTarget(e._path), delete this._layers[y(e)];
        },
        _updatePath: function(e) {
          e._project(), e._update();
        },
        _updateStyle: function(e) {
          var r = e._path, a = e.options;
          r && (a.stroke ? (r.setAttribute("stroke", a.color), r.setAttribute("stroke-opacity", a.opacity), r.setAttribute("stroke-width", a.weight), r.setAttribute("stroke-linecap", a.lineCap), r.setAttribute("stroke-linejoin", a.lineJoin), a.dashArray ? r.setAttribute("stroke-dasharray", a.dashArray) : r.removeAttribute("stroke-dasharray"), a.dashOffset ? r.setAttribute("stroke-dashoffset", a.dashOffset) : r.removeAttribute("stroke-dashoffset")) : r.setAttribute("stroke", "none"), a.fill ? (r.setAttribute("fill", a.fillColor || a.color), r.setAttribute("fill-opacity", a.fillOpacity), r.setAttribute("fill-rule", a.fillRule || "evenodd")) : r.setAttribute("fill", "none"));
        },
        _updatePoly: function(e, r) {
          this._setPath(e, gn(e._parts, r));
        },
        _updateCircle: function(e) {
          var r = e._point, a = Math.max(Math.round(e._radius), 1), c = Math.max(Math.round(e._radiusY), 1) || a, p = "a" + a + "," + c + " 0 1,0 ", E = e._empty() ? "M0 0" : "M" + (r.x - a) + "," + r.y + p + a * 2 + ",0 " + p + -a * 2 + ",0 ";
          this._setPath(e, E);
        },
        _setPath: function(e, r) {
          e._path.setAttribute("d", r);
        },
        // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
        _bringToFront: function(e) {
          xn(e._path);
        },
        _bringToBack: function(e) {
          gi(e._path);
        }
      });
      de.vml && Ws.include(tu);
      function Ha(e) {
        return de.svg || de.vml ? new Ws(e) : null;
      }
      _t.include({
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
          return this.options.preferCanvas && Vr(e) || Ha(e);
        }
      });
      var mo = Us.extend({
        initialize: function(e, r) {
          Us.prototype.initialize.call(this, this._boundsToLatLngs(e), r);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(e) {
          return this.setLatLngs(this._boundsToLatLngs(e));
        },
        _boundsToLatLngs: function(e) {
          return e = Ot(e), [
            e.getSouthWest(),
            e.getNorthWest(),
            e.getNorthEast(),
            e.getSouthEast()
          ];
        }
      });
      function nu(e, r) {
        return new mo(e, r);
      }
      Ws.create = vs, Ws.pointsToPath = gn, mi.geometryToLayer = vi, mi.coordsToLatLng = Va, mi.coordsToLatLngs = Xo, mi.latLngToCoords = Wa, mi.latLngsToCoords = Qo, mi.getFeature = zs, mi.asFeature = Ur, _t.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var Zs = rn.extend({
        initialize: function(e) {
          this._map = e, this._container = e._container, this._pane = e._panes.overlayPane, this._resetStateTimeout = 0, e.on("unload", this._destroy, this);
        },
        addHooks: function() {
          je(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          Mt(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
          return this._moved;
        },
        _destroy: function() {
          bt(this._pane), delete this._pane;
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
          this._clearDeferredResetState(), this._resetState(), gs(), wa(), this._startPoint = this._map.mouseEventToContainerPoint(e), je(document, {
            contextmenu: yt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(e) {
          this._moved || (this._moved = !0, this._box = et("div", "leaflet-zoom-box", this._container), Ve(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(e);
          var r = new Me(this._point, this._startPoint), a = r.getSize();
          hn(this._box, r.min), this._box.style.width = a.x + "px", this._box.style.height = a.y + "px";
        },
        _finish: function() {
          this._moved && (bt(this._box), Ct(this._container, "leaflet-crosshair")), Sr(), Vo(), Mt(document, {
            contextmenu: yt,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(e) {
          if (!(e.which !== 1 && e.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(g(this._resetState, this), 0);
            var r = new en(
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
      _t.addInitHook("addHandler", "boxZoom", Zs), _t.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: !0
      });
      var ns = rn.extend({
        addHooks: function() {
          this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function() {
          this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function(e) {
          var r = this._map, a = r.getZoom(), c = r.options.zoomDelta, p = e.originalEvent.shiftKey ? a - c : a + c;
          r.options.doubleClickZoom === "center" ? r.setZoom(p) : r.setZoomAround(e.containerPoint, p);
        }
      });
      _t.addInitHook("addHandler", "doubleClickZoom", ns), _t.mergeOptions({
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
      var vo = rn.extend({
        addHooks: function() {
          if (!this._draggable) {
            var e = this._map;
            this._draggable = new jr(e._mapPane, e._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), e.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), e.on("zoomend", this._onZoomEnd, this), e.whenReady(this._onZoomEnd, this));
          }
          Ve(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function() {
          Ct(this._map._container, "leaflet-grab"), Ct(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
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
            var r = Ot(this._map.options.maxBounds);
            this._offsetLimit = kt(
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
          var e = this._worldWidth, r = Math.round(e / 2), a = this._initialWorldOffset, c = this._draggable._newPos.x, p = (c - r + a) % e + r - a, E = (c + r + a) % e - r - a, N = Math.abs(p + a) < Math.abs(E + a) ? p : E;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = N;
        },
        _onDragEnd: function(e) {
          var r = this._map, a = r.options, c = !a.inertia || e.noInertia || this._times.length < 2;
          if (r.fire("dragend", e), c)
            r.fire("moveend");
          else {
            this._prunePositions(+/* @__PURE__ */ new Date());
            var p = this._lastPos.subtract(this._positions[0]), E = (this._lastTime - this._times[0]) / 1e3, N = a.easeLinearity, k = p.multiplyBy(N / E), H = k.distanceTo([0, 0]), se = Math.min(a.inertiaMaxSpeed, H), Se = k.multiplyBy(se / H), xe = se / (a.inertiaDeceleration * N), rt = Se.multiplyBy(-xe / 2).round();
            !rt.x && !rt.y ? r.fire("moveend") : (rt = r._limitOffset(rt, r.options.maxBounds), le(function() {
              r.panBy(rt, {
                duration: xe,
                easeLinearity: N,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      _t.addInitHook("addHandler", "dragging", vo), _t.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: !0,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
      });
      var iu = rn.extend({
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
          e.tabIndex <= 0 && (e.tabIndex = "0"), je(e, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.on({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        removeHooks: function() {
          this._removeHooks(), Mt(this._map._container, {
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
          var r = this._panKeys = {}, a = this.keyCodes, c, p;
          for (c = 0, p = a.left.length; c < p; c++)
            r[a.left[c]] = [-1 * e, 0];
          for (c = 0, p = a.right.length; c < p; c++)
            r[a.right[c]] = [e, 0];
          for (c = 0, p = a.down.length; c < p; c++)
            r[a.down[c]] = [0, e];
          for (c = 0, p = a.up.length; c < p; c++)
            r[a.up[c]] = [0, -1 * e];
        },
        _setZoomDelta: function(e) {
          var r = this._zoomKeys = {}, a = this.keyCodes, c, p;
          for (c = 0, p = a.zoomIn.length; c < p; c++)
            r[a.zoomIn[c]] = e;
          for (c = 0, p = a.zoomOut.length; c < p; c++)
            r[a.zoomOut[c]] = -e;
        },
        _addHooks: function() {
          je(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
          Mt(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(e) {
          if (!(e.altKey || e.ctrlKey || e.metaKey)) {
            var r = e.keyCode, a = this._map, c;
            if (r in this._panKeys) {
              if (!a._panAnim || !a._panAnim._inProgress)
                if (c = this._panKeys[r], e.shiftKey && (c = Le(c).multiplyBy(3)), a.options.maxBounds && (c = a._limitOffset(Le(c), a.options.maxBounds)), a.options.worldCopyJump) {
                  var p = a.wrapLatLng(a.unproject(a.project(a.getCenter()).add(c)));
                  a.panTo(p);
                } else
                  a.panBy(c);
            } else if (r in this._zoomKeys)
              a.setZoom(a.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[r]);
            else if (r === 27 && a._popup && a._popup.options.closeOnEscapeKey)
              a.closePopup();
            else
              return;
            yt(e);
          }
        }
      });
      _t.addInitHook("addHandler", "keyboard", iu), _t.mergeOptions({
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
      var ru = rn.extend({
        addHooks: function() {
          je(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          Mt(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(e) {
          var r = Wl(e), a = this._map.options.wheelDebounceTime;
          this._delta += r, this._lastMousePos = this._map.mouseEventToContainerPoint(e), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var c = Math.max(a - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(g(this._performZoom, this), c), yt(e);
        },
        _performZoom: function() {
          var e = this._map, r = e.getZoom(), a = this._map.options.zoomSnap || 0;
          e._stop();
          var c = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), p = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(c)))) / Math.LN2, E = a ? Math.ceil(p / a) * a : p, N = e._limitZoom(r + (this._delta > 0 ? E : -E)) - r;
          this._delta = 0, this._startTime = null, N && (e.options.scrollWheelZoom === "center" ? e.setZoom(r + N) : e.setZoomAround(this._lastMousePos, r + N));
        }
      });
      _t.addInitHook("addHandler", "scrollWheelZoom", ru);
      var Ec = 600;
      _t.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: de.touchNative && de.safari && de.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var yo = rn.extend({
        addHooks: function() {
          je(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          Mt(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(e) {
          if (clearTimeout(this._holdTimeout), e.touches.length === 1) {
            var r = e.touches[0];
            this._startPos = this._newPos = new K(r.clientX, r.clientY), this._holdTimeout = setTimeout(g(function() {
              this._cancel(), this._isTapValid() && (je(document, "touchend", tt), je(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", r));
            }, this), Ec), je(document, "touchend touchcancel contextmenu", this._cancel, this), je(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function e() {
          Mt(document, "touchend", tt), Mt(document, "touchend touchcancel", e);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), Mt(document, "touchend touchcancel contextmenu", this._cancel, this), Mt(document, "touchmove", this._onMove, this);
        },
        _onMove: function(e) {
          var r = e.touches[0];
          this._newPos = new K(r.clientX, r.clientY);
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
      _t.addInitHook("addHandler", "tapHold", yo), _t.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: de.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: !0
      });
      var Eo = rn.extend({
        addHooks: function() {
          Ve(this._map._container, "leaflet-touch-zoom"), je(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          Ct(this._map._container, "leaflet-touch-zoom"), Mt(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(e) {
          var r = this._map;
          if (!(!e.touches || e.touches.length !== 2 || r._animatingZoom || this._zooming)) {
            var a = r.mouseEventToContainerPoint(e.touches[0]), c = r.mouseEventToContainerPoint(e.touches[1]);
            this._centerPoint = r.getSize()._divideBy(2), this._startLatLng = r.containerPointToLatLng(this._centerPoint), r.options.touchZoom !== "center" && (this._pinchStartLatLng = r.containerPointToLatLng(a.add(c)._divideBy(2))), this._startDist = a.distanceTo(c), this._startZoom = r.getZoom(), this._moved = !1, this._zooming = !0, r._stop(), je(document, "touchmove", this._onTouchMove, this), je(document, "touchend touchcancel", this._onTouchEnd, this), tt(e);
          }
        },
        _onTouchMove: function(e) {
          if (!(!e.touches || e.touches.length !== 2 || !this._zooming)) {
            var r = this._map, a = r.mouseEventToContainerPoint(e.touches[0]), c = r.mouseEventToContainerPoint(e.touches[1]), p = a.distanceTo(c) / this._startDist;
            if (this._zoom = r.getScaleZoom(p, this._startZoom), !r.options.bounceAtZoomLimits && (this._zoom < r.getMinZoom() && p < 1 || this._zoom > r.getMaxZoom() && p > 1) && (this._zoom = r._limitZoom(this._zoom)), r.options.touchZoom === "center") {
              if (this._center = this._startLatLng, p === 1)
                return;
            } else {
              var E = a._add(c)._divideBy(2)._subtract(this._centerPoint);
              if (p === 1 && E.x === 0 && E.y === 0)
                return;
              this._center = r.unproject(r.project(this._pinchStartLatLng, this._zoom).subtract(E), this._zoom);
            }
            this._moved || (r._moveStart(!0, !1), this._moved = !0), ne(this._animRequest);
            var N = g(r._move, r, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = le(N, this, !0), tt(e);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, ne(this._animRequest), Mt(document, "touchmove", this._onTouchMove, this), Mt(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      _t.addInitHook("addHandler", "touchZoom", Eo), _t.BoxZoom = Zs, _t.DoubleClickZoom = ns, _t.Drag = vo, _t.Keyboard = iu, _t.ScrollWheelZoom = ru, _t.TapHold = yo, _t.TouchZoom = Eo, n.Bounds = Me, n.Browser = de, n.CRS = Vt, n.Canvas = _o, n.Circle = jo, n.CircleMarker = Jo, n.Class = ge, n.Control = xi, n.DivIcon = po, n.DivOverlay = Or, n.DomEvent = hc, n.DomUtil = Gl, n.Draggable = jr, n.Evented = oe, n.FeatureGroup = Cr, n.GeoJSON = mi, n.GridLayer = mt, n.Handler = rn, n.Icon = ks, n.ImageOverlay = be, n.LatLng = Qe, n.LatLngBounds = en, n.Layer = Jt, n.LayerGroup = Xr, n.LineUtil = Ma, n.Map = _t, n.Marker = $o, n.Mixin = dc, n.Path = Qr, n.Point = K, n.PolyUtil = Pa, n.Polygon = Us, n.Polyline = Yi, n.Popup = si, n.PosAnimation = La, n.Projection = ka, n.Rectangle = mo, n.Renderer = zr, n.SVG = Ws, n.SVGOverlay = Dt, n.TileLayer = ms, n.Tooltip = ta, n.Transformation = Zn, n.Util = V, n.VideoOverlay = Et, n.bind = g, n.bounds = kt, n.canvas = Vr, n.circle = es, n.circleMarker = Ua, n.control = or, n.divIcon = na, n.extend = h, n.featureGroup = Xl, n.geoJSON = $, n.geoJson = Y, n.gridLayer = vc, n.icon = gc, n.imageOverlay = $e, n.latLng = Ye, n.latLngBounds = Ot, n.layerGroup = ho, n.map = Gn, n.marker = Gs, n.point = Le, n.polygon = mc, n.polyline = _c, n.popup = ea, n.rectangle = nu, n.setOptions = G, n.stamp = y, n.svg = Ha, n.svgOverlay = Za, n.tileLayer = go, n.tooltip = Vs, n.transformation = Dn, n.version = l, n.videoOverlay = Cn;
      var Ya = window.L;
      n.noConflict = function() {
        return window.L = Ya, this;
      }, window.L = n;
    }));
  })(ol, ol.exports)), ol.exports;
}
var mg = G1();
const fa = /* @__PURE__ */ _g(mg), U1 = /* @__PURE__ */ s1({
  __proto__: null,
  default: fa
}, [mg]);
class z1 {
  constructor() {
    this.id = "";
  }
  invoke() {
  }
  run() {
  }
}
function V1() {
  const o = me(/* @__PURE__ */ new Map());
  return {
    addTasksAndIvnoke: async (f) => {
      const g = new Set(f.map((m) => m.id));
      o.value.forEach((m, A) => {
        g.has(A) || (m.invoke(), o.value.delete(A));
      });
      const v = 10;
      let y = 0;
      for (const m of f)
        o.value.has(m.id) || (o.value.set(m.id, m), m.run(), y++, y % v === 0 && await new Promise((A) => setTimeout(A, 0)));
    },
    invokeTask: (f) => {
      o.value.get(f)?.invoke(), o.value.delete(f);
    },
    hasTask: (f) => o.value.has(f),
    clearAll: () => {
      o.value.forEach((f, g) => {
        try {
          f.invoke();
        } catch (v) {
          console.warn("Error invoking task during clearAll:", g, v);
        }
      }), o.value.clear();
    }
  };
}
var dr = 63710088e-1, W1 = {
  centimeters: dr * 100,
  centimetres: dr * 100,
  degrees: 360 / (2 * Math.PI),
  feet: dr * 3.28084,
  inches: dr * 39.37,
  kilometers: dr / 1e3,
  kilometres: dr / 1e3,
  meters: dr,
  metres: dr,
  miles: dr / 1609.344,
  millimeters: dr * 1e3,
  millimetres: dr * 1e3,
  nauticalmiles: dr / 1852,
  radians: 1,
  yards: dr * 1.0936
};
function Xh(o, i, n = {}) {
  const l = { type: "Feature" };
  return (n.id === 0 || n.id) && (l.id = n.id), n.bbox && (l.bbox = n.bbox), l.properties = i || {}, l.geometry = o, l;
}
function hl(o, i, n = {}) {
  if (!o)
    throw new Error("coordinates is required");
  if (!Array.isArray(o))
    throw new Error("coordinates must be an Array");
  if (o.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!tp(o[0]) || !tp(o[1]))
    throw new Error("coordinates must contain numbers");
  return Xh({
    type: "Point",
    coordinates: o
  }, i, n);
}
function Qu(o, i = {}) {
  const n = { type: "FeatureCollection" };
  return i.id && (n.id = i.id), i.bbox && (n.bbox = i.bbox), n.features = o, n;
}
function Z1(o, i = "kilometers") {
  const n = W1[i];
  if (!n)
    throw new Error(i + " units is invalid");
  return o * n;
}
function Du(o) {
  return o % 360 * Math.PI / 180;
}
function tp(o) {
  return !isNaN(o) && o !== null && !Array.isArray(o);
}
function dl(o, i, n) {
  if (o !== null)
    for (var l, h, f, g, v, y, m, A = 0, S = 0, I, D = o.type, B = D === "FeatureCollection", G = D === "Feature", j = B ? o.features.length : 1, W = 0; W < j; W++) {
      m = B ? o.features[W].geometry : G ? o.geometry : o, I = m ? m.type === "GeometryCollection" : !1, v = I ? m.geometries.length : 1;
      for (var Z = 0; Z < v; Z++) {
        var J = 0, P = 0;
        if (g = I ? m.geometries[Z] : m, g !== null) {
          y = g.coordinates;
          var U = g.type;
          switch (A = 0, U) {
            case null:
              break;
            case "Point":
              if (i(
                y,
                S,
                W,
                J,
                P
              ) === !1)
                return !1;
              S++, J++;
              break;
            case "LineString":
            case "MultiPoint":
              for (l = 0; l < y.length; l++) {
                if (i(
                  y[l],
                  S,
                  W,
                  J,
                  P
                ) === !1)
                  return !1;
                S++, U === "MultiPoint" && J++;
              }
              U === "LineString" && J++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (l = 0; l < y.length; l++) {
                for (h = 0; h < y[l].length - A; h++) {
                  if (i(
                    y[l][h],
                    S,
                    W,
                    J,
                    P
                  ) === !1)
                    return !1;
                  S++;
                }
                U === "MultiLineString" && J++, U === "Polygon" && P++;
              }
              U === "Polygon" && J++;
              break;
            case "MultiPolygon":
              for (l = 0; l < y.length; l++) {
                for (P = 0, h = 0; h < y[l].length; h++) {
                  for (f = 0; f < y[l][h].length - A; f++) {
                    if (i(
                      y[l][h][f],
                      S,
                      W,
                      J,
                      P
                    ) === !1)
                      return !1;
                    S++;
                  }
                  P++;
                }
                J++;
              }
              break;
            case "GeometryCollection":
              for (l = 0; l < g.geometries.length; l++)
                if (dl(g.geometries[l], i) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function vg(o, i) {
  if (o.type === "Feature")
    i(o, 0);
  else if (o.type === "FeatureCollection")
    for (var n = 0; n < o.features.length && i(o.features[n], n) !== !1; n++)
      ;
}
function Tl(o, i = {}) {
  if (o.bbox != null && i.recompute !== !0)
    return o.bbox;
  const n = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return dl(o, (l) => {
    n[0] > l[0] && (n[0] = l[0]), n[1] > l[1] && (n[1] = l[1]), n[2] < l[0] && (n[2] = l[0]), n[3] < l[1] && (n[3] = l[1]);
  }), n;
}
const Is = 11102230246251565e-32, Ti = 134217729, H1 = (3 + 8 * Is) * Is;
function vh(o, i, n, l, h) {
  let f, g, v, y, m = i[0], A = l[0], S = 0, I = 0;
  A > m == A > -m ? (f = m, m = i[++S]) : (f = A, A = l[++I]);
  let D = 0;
  if (S < o && I < n)
    for (A > m == A > -m ? (g = m + f, v = f - (g - m), m = i[++S]) : (g = A + f, v = f - (g - A), A = l[++I]), f = g, v !== 0 && (h[D++] = v); S < o && I < n; )
      A > m == A > -m ? (g = f + m, y = g - f, v = f - (g - y) + (m - y), m = i[++S]) : (g = f + A, y = g - f, v = f - (g - y) + (A - y), A = l[++I]), f = g, v !== 0 && (h[D++] = v);
  for (; S < o; )
    g = f + m, y = g - f, v = f - (g - y) + (m - y), m = i[++S], f = g, v !== 0 && (h[D++] = v);
  for (; I < n; )
    g = f + A, y = g - f, v = f - (g - y) + (A - y), A = l[++I], f = g, v !== 0 && (h[D++] = v);
  return (f !== 0 || D === 0) && (h[D++] = f), D;
}
function Y1(o, i) {
  let n = i[0];
  for (let l = 1; l < o; l++) n += i[l];
  return n;
}
function Pl(o) {
  return new Float64Array(o);
}
const q1 = (3 + 16 * Is) * Is, K1 = (2 + 12 * Is) * Is, $1 = (9 + 64 * Is) * Is * Is, ca = Pl(4), np = Pl(8), ip = Pl(12), rp = Pl(16), Ui = Pl(4);
function J1(o, i, n, l, h, f, g) {
  let v, y, m, A, S, I, D, B, G, j, W, Z, J, P, U, re, fe, Ee;
  const he = o - h, Oe = n - h, le = i - f, ne = l - f;
  P = he * ne, I = Ti * he, D = I - (I - he), B = he - D, I = Ti * ne, G = I - (I - ne), j = ne - G, U = B * j - (P - D * G - B * G - D * j), re = le * Oe, I = Ti * le, D = I - (I - le), B = le - D, I = Ti * Oe, G = I - (I - Oe), j = Oe - G, fe = B * j - (re - D * G - B * G - D * j), W = U - fe, S = U - W, ca[0] = U - (W + S) + (S - fe), Z = P + W, S = Z - P, J = P - (Z - S) + (W - S), W = J - re, S = J - W, ca[1] = J - (W + S) + (S - re), Ee = Z + W, S = Ee - Z, ca[2] = Z - (Ee - S) + (W - S), ca[3] = Ee;
  let V = Y1(4, ca), ge = K1 * g;
  if (V >= ge || -V >= ge || (S = o - he, v = o - (he + S) + (S - h), S = n - Oe, m = n - (Oe + S) + (S - h), S = i - le, y = i - (le + S) + (S - f), S = l - ne, A = l - (ne + S) + (S - f), v === 0 && y === 0 && m === 0 && A === 0) || (ge = $1 * g + H1 * Math.abs(V), V += he * A + ne * v - (le * m + Oe * y), V >= ge || -V >= ge)) return V;
  P = v * ne, I = Ti * v, D = I - (I - v), B = v - D, I = Ti * ne, G = I - (I - ne), j = ne - G, U = B * j - (P - D * G - B * G - D * j), re = y * Oe, I = Ti * y, D = I - (I - y), B = y - D, I = Ti * Oe, G = I - (I - Oe), j = Oe - G, fe = B * j - (re - D * G - B * G - D * j), W = U - fe, S = U - W, Ui[0] = U - (W + S) + (S - fe), Z = P + W, S = Z - P, J = P - (Z - S) + (W - S), W = J - re, S = J - W, Ui[1] = J - (W + S) + (S - re), Ee = Z + W, S = Ee - Z, Ui[2] = Z - (Ee - S) + (W - S), Ui[3] = Ee;
  const Ae = vh(4, ca, 4, Ui, np);
  P = he * A, I = Ti * he, D = I - (I - he), B = he - D, I = Ti * A, G = I - (I - A), j = A - G, U = B * j - (P - D * G - B * G - D * j), re = le * m, I = Ti * le, D = I - (I - le), B = le - D, I = Ti * m, G = I - (I - m), j = m - G, fe = B * j - (re - D * G - B * G - D * j), W = U - fe, S = U - W, Ui[0] = U - (W + S) + (S - fe), Z = P + W, S = Z - P, J = P - (Z - S) + (W - S), W = J - re, S = J - W, Ui[1] = J - (W + S) + (S - re), Ee = Z + W, S = Ee - Z, Ui[2] = Z - (Ee - S) + (W - S), Ui[3] = Ee;
  const te = vh(Ae, np, 4, Ui, ip);
  P = v * A, I = Ti * v, D = I - (I - v), B = v - D, I = Ti * A, G = I - (I - A), j = A - G, U = B * j - (P - D * G - B * G - D * j), re = y * m, I = Ti * y, D = I - (I - y), B = y - D, I = Ti * m, G = I - (I - m), j = m - G, fe = B * j - (re - D * G - B * G - D * j), W = U - fe, S = U - W, Ui[0] = U - (W + S) + (S - fe), Z = P + W, S = Z - P, J = P - (Z - S) + (W - S), W = J - re, S = J - W, Ui[1] = J - (W + S) + (S - re), Ee = Z + W, S = Ee - Z, Ui[2] = Z - (Ee - S) + (W - S), Ui[3] = Ee;
  const oe = vh(te, ip, 4, Ui, rp);
  return rp[oe - 1];
}
function j1(o, i, n, l, h, f) {
  const g = (i - f) * (n - h), v = (o - h) * (l - f), y = g - v, m = Math.abs(g + v);
  return Math.abs(y) >= q1 * m ? y : -J1(o, i, n, l, h, f, m);
}
function X1(o, i) {
  var n, l, h = 0, f, g, v, y, m, A, S, I = o[0], D = o[1], B = i.length;
  for (n = 0; n < B; n++) {
    l = 0;
    var G = i[n], j = G.length - 1;
    if (A = G[0], A[0] !== G[j][0] && A[1] !== G[j][1])
      throw new Error("First and last coordinates in a ring must be the same");
    for (g = A[0] - I, v = A[1] - D, l; l < j; l++) {
      if (S = G[l + 1], y = S[0] - I, m = S[1] - D, v === 0 && m === 0) {
        if (y <= 0 && g >= 0 || g <= 0 && y >= 0)
          return 0;
      } else if (m >= 0 && v <= 0 || m <= 0 && v >= 0) {
        if (f = j1(g, y, v, m, 0, 0), f === 0)
          return 0;
        (f > 0 && m > 0 && v <= 0 || f < 0 && m <= 0 && v > 0) && h++;
      }
      A = S, v = m, g = y;
    }
  }
  return h % 2 !== 0;
}
function Q1(o) {
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
function eT(o) {
  return o.type === "Feature" ? o.geometry : o;
}
function xl(o, i, n = {}) {
  if (!o)
    throw new Error("point is required");
  if (!i)
    throw new Error("polygon is required");
  const l = Q1(o), h = eT(i), f = h.type, g = i.bbox;
  let v = h.coordinates;
  if (g && tT(l, g) === !1)
    return !1;
  f === "Polygon" && (v = [v]);
  let y = !1;
  for (var m = 0; m < v.length; ++m) {
    const A = X1(l, v[m]);
    if (A === 0) return !n.ignoreBoundary;
    A && (y = !0);
  }
  return y;
}
function tT(o, i) {
  return i[0] <= o[0] && i[1] <= o[1] && i[2] >= o[0] && i[3] >= o[1];
}
function xh(o) {
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
function nT(o) {
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
function Fh(o) {
  return o.type === "Feature" ? o.geometry : o;
}
function wl(o, i, n = {}) {
  const l = xh(o), h = nT(i);
  for (let f = 0; f < h.length - 1; f++) {
    let g = !1;
    if (n.ignoreEndVertices && (f === 0 && (g = "start"), f === h.length - 2 && (g = "end"), f === 0 && f + 1 === h.length - 1 && (g = "both")), iT(
      h[f],
      h[f + 1],
      l,
      g,
      typeof n.epsilon > "u" ? null : n.epsilon
    ))
      return !0;
  }
  return !1;
}
function iT(o, i, n, l, h) {
  const f = n[0], g = n[1], v = o[0], y = o[1], m = i[0], A = i[1], S = n[0] - v, I = n[1] - y, D = m - v, B = A - y, G = S * B - I * D;
  if (h !== null) {
    if (Math.abs(G) > h)
      return !1;
  } else if (G !== 0)
    return !1;
  if (Math.abs(D) === Math.abs(B) && Math.abs(D) === 0)
    return l ? !1 : n[0] === o[0] && n[1] === o[1];
  if (l) {
    if (l === "start")
      return Math.abs(D) >= Math.abs(B) ? D > 0 ? v < f && f <= m : m <= f && f < v : B > 0 ? y < g && g <= A : A <= g && g < y;
    if (l === "end")
      return Math.abs(D) >= Math.abs(B) ? D > 0 ? v <= f && f < m : m < f && f <= v : B > 0 ? y <= g && g < A : A < g && g <= y;
    if (l === "both")
      return Math.abs(D) >= Math.abs(B) ? D > 0 ? v < f && f < m : m < f && f < v : B > 0 ? y < g && g < A : A < g && g < y;
  } else return Math.abs(D) >= Math.abs(B) ? D > 0 ? v <= f && f <= m : m <= f && f <= v : B > 0 ? y <= g && g <= A : A <= g && g <= y;
  return !1;
}
function rT(o, i) {
  const n = Fh(o), l = Fh(i), h = n.type, f = l.type, g = n.coordinates, v = l.coordinates;
  switch (h) {
    case "Point":
      switch (f) {
        case "Point":
          return Qh(g, v);
        default:
          throw new Error("feature2 " + f + " geometry not supported");
      }
    case "MultiPoint":
      switch (f) {
        case "Point":
          return oT(n, l);
        case "MultiPoint":
          return aT(n, l);
        default:
          throw new Error("feature2 " + f + " geometry not supported");
      }
    case "LineString":
      switch (f) {
        case "Point":
          return wl(l, n, { ignoreEndVertices: !0 });
        case "LineString":
          return cT(n, l);
        case "MultiPoint":
          return lT(n, l);
        default:
          throw new Error("feature2 " + f + " geometry not supported");
      }
    case "Polygon":
      switch (f) {
        case "Point":
          return xl(l, n, { ignoreBoundary: !0 });
        case "LineString":
          return hT(n, l);
        case "Polygon":
          return yg(n, l);
        case "MultiPoint":
          return uT(n, l);
        default:
          throw new Error("feature2 " + f + " geometry not supported");
      }
    case "MultiPolygon":
      switch (f) {
        case "Polygon":
          return sT(n, l);
        default:
          throw new Error("feature2 " + f + " geometry not supported");
      }
    default:
      throw new Error("feature1 " + h + " geometry not supported");
  }
}
function sT(o, i) {
  return o.coordinates.some(
    (n) => yg({ type: "Polygon", coordinates: n }, i)
  );
}
function oT(o, i) {
  let n, l = !1;
  for (n = 0; n < o.coordinates.length; n++)
    if (Qh(o.coordinates[n], i.coordinates)) {
      l = !0;
      break;
    }
  return l;
}
function aT(o, i) {
  for (const n of i.coordinates) {
    let l = !1;
    for (const h of o.coordinates)
      if (Qh(n, h)) {
        l = !0;
        break;
      }
    if (!l)
      return !1;
  }
  return !0;
}
function lT(o, i) {
  let n = !1;
  for (const l of i.coordinates)
    if (wl(l, o, { ignoreEndVertices: !0 }) && (n = !0), !wl(l, o))
      return !1;
  return !!n;
}
function uT(o, i) {
  for (const n of i.coordinates)
    if (!xl(n, o, { ignoreBoundary: !0 }))
      return !1;
  return !0;
}
function cT(o, i) {
  let n = !1;
  for (const l of i.coordinates)
    if (wl({ type: "Point", coordinates: l }, o, {
      ignoreEndVertices: !0
    }) && (n = !0), !wl({ type: "Point", coordinates: l }, o, {
      ignoreEndVertices: !1
    }))
      return !1;
  return n;
}
function hT(o, i) {
  let n = !1, l = 0;
  const h = Tl(o), f = Tl(i);
  if (!Eg(h, f))
    return !1;
  for (l; l < i.coordinates.length - 1; l++) {
    const g = dT(
      i.coordinates[l],
      i.coordinates[l + 1]
    );
    if (xl({ type: "Point", coordinates: g }, o, {
      ignoreBoundary: !0
    })) {
      n = !0;
      break;
    }
  }
  return n;
}
function yg(o, i) {
  if (o.type === "Feature" && o.geometry === null || i.type === "Feature" && i.geometry === null)
    return !1;
  const n = Tl(o), l = Tl(i);
  if (!Eg(n, l))
    return !1;
  const h = Fh(i).coordinates;
  for (const f of h)
    for (const g of f)
      if (!xl(g, o))
        return !1;
  return !0;
}
function Eg(o, i) {
  return !(o[0] > i[0] || o[2] < i[2] || o[1] > i[1] || o[3] < i[3]);
}
function Qh(o, i) {
  return o[0] === i[0] && o[1] === i[1];
}
function dT(o, i) {
  return [(o[0] + i[0]) / 2, (o[1] + i[1]) / 2];
}
var fT = rT;
function pT(o) {
  const i = [];
  return o.type === "FeatureCollection" ? vg(o, function(n) {
    dl(n, function(l) {
      i.push(hl(l, n.properties));
    });
  }) : o.type === "Feature" ? dl(o, function(n) {
    i.push(hl(n, o.properties));
  }) : dl(o, function(n) {
    i.push(hl(n));
  }), Qu(i);
}
function gT(o, i = {}) {
  const n = Tl(o), l = (n[0] + n[2]) / 2, h = (n[1] + n[3]) / 2;
  return hl([l, h], i.properties, i);
}
function _T(o) {
  if (!o)
    throw new Error("geojson is required");
  switch (o.type) {
    case "Feature":
      return Tg(o);
    case "FeatureCollection":
      return mT(o);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return ed(o);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function Tg(o) {
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
  }), i.properties = wg(o.properties), o.geometry == null ? i.geometry = null : i.geometry = ed(o.geometry), i;
}
function wg(o) {
  const i = {};
  return o && Object.keys(o).forEach((n) => {
    const l = o[n];
    typeof l == "object" ? l === null ? i[n] = null : Array.isArray(l) ? i[n] = l.map((h) => h) : i[n] = wg(l) : i[n] = l;
  }), i;
}
function mT(o) {
  const i = { type: "FeatureCollection" };
  return Object.keys(o).forEach((n) => {
    switch (n) {
      case "type":
      case "features":
        return;
      default:
        i[n] = o[n];
    }
  }), i.features = o.features.map((n) => Tg(n)), i;
}
function ed(o) {
  const i = { type: o.type };
  return o.bbox && (i.bbox = o.bbox), o.type === "GeometryCollection" ? (i.geometries = o.geometries.map((n) => ed(n)), i) : (i.coordinates = Sg(o.coordinates), i);
}
function Sg(o) {
  const i = o;
  return typeof i[0] != "object" ? i.slice() : i.map((n) => Sg(n));
}
function vT(o, i, n = {}) {
  var l = xh(o), h = xh(i), f = Du(h[1] - l[1]), g = Du(h[0] - l[0]), v = Du(l[1]), y = Du(h[1]), m = Math.pow(Math.sin(f / 2), 2) + Math.pow(Math.sin(g / 2), 2) * Math.cos(v) * Math.cos(y);
  return Z1(
    2 * Math.atan2(Math.sqrt(m), Math.sqrt(1 - m)),
    n.units
  );
}
var yT = Object.defineProperty, ET = Object.defineProperties, TT = Object.getOwnPropertyDescriptors, sp = Object.getOwnPropertySymbols, wT = Object.prototype.hasOwnProperty, ST = Object.prototype.propertyIsEnumerable, op = (o, i, n) => i in o ? yT(o, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[i] = n, ap = (o, i) => {
  for (var n in i || (i = {}))
    wT.call(i, n) && op(o, n, i[n]);
  if (sp)
    for (var n of sp(i))
      ST.call(i, n) && op(o, n, i[n]);
  return o;
}, lp = (o, i) => ET(o, TT(i));
function AT(o, i, n = {}) {
  if (!o) throw new Error("targetPoint is required");
  if (!i) throw new Error("points is required");
  let l = 1 / 0, h = 0;
  vg(i, (g, v) => {
    const y = vT(o, g, n);
    y < l && (h = v, l = y);
  });
  const f = _T(i.features[h]);
  return lp(ap({}, f), {
    properties: lp(ap({}, f.properties), {
      featureIndex: h,
      distanceToPoint: l
    })
  });
}
function bT(o) {
  const i = CT(o), n = gT(i);
  let l = !1, h = 0;
  for (; !l && h < i.features.length; ) {
    const f = i.features[h].geometry;
    let g, v, y, m, A, S, I = !1;
    if (f.type === "Point")
      n.geometry.coordinates[0] === f.coordinates[0] && n.geometry.coordinates[1] === f.coordinates[1] && (l = !0);
    else if (f.type === "MultiPoint") {
      let D = !1, B = 0;
      for (; !D && B < f.coordinates.length; )
        n.geometry.coordinates[0] === f.coordinates[B][0] && n.geometry.coordinates[1] === f.coordinates[B][1] && (l = !0, D = !0), B++;
    } else if (f.type === "LineString") {
      let D = 0;
      for (; !I && D < f.coordinates.length - 1; )
        g = n.geometry.coordinates[0], v = n.geometry.coordinates[1], y = f.coordinates[D][0], m = f.coordinates[D][1], A = f.coordinates[D + 1][0], S = f.coordinates[D + 1][1], up(g, v, y, m, A, S) && (I = !0, l = !0), D++;
    } else if (f.type === "MultiLineString") {
      let D = 0;
      for (; D < f.coordinates.length; ) {
        I = !1;
        let B = 0;
        const G = f.coordinates[D];
        for (; !I && B < G.length - 1; )
          g = n.geometry.coordinates[0], v = n.geometry.coordinates[1], y = G[B][0], m = G[B][1], A = G[B + 1][0], S = G[B + 1][1], up(g, v, y, m, A, S) && (I = !0, l = !0), B++;
        D++;
      }
    } else (f.type === "Polygon" || f.type === "MultiPolygon") && xl(n, f) && (l = !0);
    h++;
  }
  if (l)
    return n;
  {
    const f = Qu([]);
    for (let g = 0; g < i.features.length; g++)
      f.features = f.features.concat(
        pT(i.features[g]).features
      );
    return hl(AT(n, f).geometry.coordinates);
  }
}
function CT(o) {
  return o.type !== "FeatureCollection" ? o.type !== "Feature" ? Qu([Xh(o)]) : Qu([o]) : o;
}
function up(o, i, n, l, h, f) {
  const g = Math.sqrt((h - n) * (h - n) + (f - l) * (f - l)), v = Math.sqrt((o - n) * (o - n) + (i - l) * (i - l)), y = Math.sqrt((h - o) * (h - o) + (f - i) * (f - i));
  return g === v + y;
}
var cp = bT;
const Ru = /* @__PURE__ */ new Map();
function fl() {
  return {
    registerDataPointRenderer: (h) => {
      Ru.set(h.namespace + h.qualifiedName, h);
    },
    unregisterDataPointrender: (h) => {
      Ru.delete(h.namespace + h.qualifiedName);
    },
    getAll: () => Ru,
    getById: (h) => Ru.get(h)
  };
}
const OT = /* @__PURE__ */ it({
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
    return (i, n) => (z(!0), X(Re, null, zt(o.styleIds, (l) => (z(), X(Re, { key: l }, [
      o.isPoint(o.geoJson) ? Be("", !0) : (z(), dt(C(ko), {
        key: 0,
        ref_for: !0,
        ref: "thingsLayer",
        geojson: o.filterFeatureCollection(o.geoJson, o.getStyleById(l)),
        options: o.layerOptions,
        "options-style": () => o.getStyleById(l)?.renderer.area
      }, null, 8, ["geojson", "options", "options-style"]))
    ], 64))), 128));
  }
}), LT = { class: "inner" }, IT = { class: "observation-slot" }, NT = { class: "inner" }, DT = { class: "observation-slot" }, RT = ["src"], PT = /* @__PURE__ */ it({
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
    return (i, n) => (z(), X(Re, null, [
      o.renderAs === "icon" ? (z(), X("div", {
        key: 0,
        style: _a({
          background: o.isSelected ? o.selectionColor : o.backgroundColor
        }),
        class: Fo(["pin", "icon", { round: o.isRound, solid: o.isSolid }])
      }, [
        ie("div", LT, [
          o.iconConfig ? (z(), dt(C(Mp), {
            key: 0,
            configv: o.iconConfig
          }, null, 8, ["configv"])) : Be("", !0)
        ]),
        ie("div", IT, [
          il(i.$slots, "observation", {}, void 0, !0)
        ])
      ], 6)) : Be("", !0),
      o.renderAs === "prop" ? (z(), X("div", {
        key: 1,
        style: _a({
          background: o.isSelected ? o.selectionColor : o.backgroundColor
        }),
        class: Fo(["pin", "contain", "marker", { round: o.isRound, solid: o.isSolid }])
      }, [
        ie("div", NT, Ie(o.propertyValue), 1),
        ie("div", DT, [
          il(i.$slots, "observation", {}, void 0, !0)
        ])
      ], 6)) : Be("", !0),
      o.renderAs === "image" ? (z(), X(Re, { key: 2 }, [
        ie("div", {
          class: "image-marker",
          style: _a({
            width: `${o.imageSize}px`,
            height: `${o.imageSize}px`,
            background: o.isSelected ? o.selectionColor : void 0,
            borderRadius: o.isSelected ? "50%" : void 0,
            padding: o.isSelected ? "4px" : void 0
          })
        }, [
          o.imageUrl ? (z(), X("img", {
            key: 0,
            src: o.imageUrl,
            style: { width: "100%", height: "100%", objectFit: "contain" }
          }, null, 8, RT)) : Be("", !0)
        ], 4),
        il(i.$slots, "observation", {}, void 0, !0)
      ], 64)) : Be("", !0),
      o.renderAs === "none" ? il(i.$slots, "observation", { key: 3 }, void 0, !0) : Be("", !0)
    ], 64));
  }
}), er = (o, i) => {
  const n = o.__vccOpts || o;
  for (const [l, h] of i)
    n[l] = h;
  return n;
}, Sl = /* @__PURE__ */ er(PT, [["__scopeId", "data-v-dc572ab0"]]), xT = /* @__PURE__ */ it({
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
    return (i, n) => (z(!0), X(Re, null, zt(o.styleIds, (l) => (z(), X(Re, { key: l }, [
      (z(!0), X(Re, null, zt(o.filterFeatureCollection(o.layerData, o.getStyleById(l)).features, (h) => (z(), X(Re, {
        key: h.id
      }, [
        o.isPoint(h.geometry) ? Be("", !0) : (z(), dt(C(ko), {
          key: 0,
          ref_for: !0,
          ref: "geojsonLayer",
          geojson: h,
          options: o.layerOptions,
          "options-style": () => o.getStyleById(l)?.renderer.area
        }, null, 8, ["geojson", "options", "options-style"])),
        o.getPoint(h.geometry) ? (z(), dt(C(El), {
          key: 1,
          "lat-lng": o.getPoint(h.geometry),
          options: { pane: o.markerPane }
        }, {
          default: Ke(() => [
            ue(C(yl), { "class-name": "someExtraClass" }, {
              default: Ke(() => [
                ue(Sl, {
                  "render-as": o.getStyleById(l)?.renderer.point_render_as,
                  "background-color": o.getStyleById(l)?.renderer.pointPin?.color,
                  "icon-config": o.getStyleById(l)?.renderer.point,
                  "property-value": h.properties?.[o.getStyleById(l)?.renderer.point_prop ?? ""],
                  "image-url": o.getStyleById(l)?.renderer.point_image_url,
                  "image-size": o.getStyleById(l)?.renderer.point_image_size || 32,
                  "is-solid": o.getStyleById(l)?.renderer.pointPin?.solid
                }, null, 8, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size", "is-solid"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["lat-lng", "options"])) : Be("", !0)
      ], 64))), 128))
    ], 64))), 128));
  }
}), FT = /* @__PURE__ */ it({
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
    return (i, n) => (z(!0), X(Re, null, zt(o.styleIds, (l) => (z(), X(Re, { key: l }, [
      o.layerData && o.layerData.features ? (z(), X(Re, { key: 0 }, [
        (z(!0), X(Re, null, zt(o.filterFeatureCollection(o.layerData, o.getStyleById(l)).features, (h) => (z(), X(Re, {
          key: "area-" + h.id
        }, [
          h.geometry && !o.isPoint(h.geometry) ? (z(), dt(C(ko), {
            key: 0,
            ref_for: !0,
            ref: "restGeojsonLayer",
            geojson: h,
            options: o.layerOptions,
            "options-style": () => o.getStyleById(l)?.renderer.area
          }, null, 8, ["geojson", "options", "options-style"])) : Be("", !0)
        ], 64))), 128)),
        (z(!0), X(Re, null, zt(o.filterFeatureCollection(o.layerData, o.getStyleById(l)).features, (h) => (z(), X(Re, {
          key: "point-" + h.id
        }, [
          h.geometry && o.isPoint(h.geometry) && o.getPoint(h.geometry) ? (z(), dt(C(El), {
            key: 0,
            "lat-lng": o.getPoint(h.geometry),
            options: { pane: o.markerPane }
          }, {
            default: Ke(() => [
              ue(C(yl), { "class-name": "someExtraClass" }, {
                default: Ke(() => [
                  ue(Sl, {
                    "render-as": o.getStyleById(l)?.renderer.point_render_as,
                    "background-color": o.getStyleById(l)?.renderer.pointPin?.color,
                    "icon-config": o.getStyleById(l)?.renderer.point,
                    "property-value": h.properties?.[o.getStyleById(l)?.renderer.point_prop ?? ""],
                    "image-url": o.getStyleById(l)?.renderer.point_image_url,
                    "image-size": o.getStyleById(l)?.renderer.point_image_size || 32,
                    "is-solid": o.getStyleById(l)?.renderer.pointPin?.solid
                  }, null, 8, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size", "is-solid"])
                ]),
                _: 2
              }, 1024)
            ]),
            _: 2
          }, 1032, ["lat-lng", "options"])) : Be("", !0)
        ], 64))), 128))
      ], 64)) : Be("", !0)
    ], 64))), 128));
  }
});
var Mo = /* @__PURE__ */ ((o) => (o.Thing = "Thing", o.OberservedArea = "OberservedArea", o))(Mo || {}), xr = /* @__PURE__ */ ((o) => (o.equals = "eq", o.lessThen = "lt", o.greaterThen = "gt", o.lessThenEquals = "lte", o.greaterThenEquals = "gte", o.notEQuals = "neq", o))(xr || {});
class we extends vr {
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
    return b.Literals.MAP_SETTINGS;
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
      getFeature: () => this.eClass().getEStructuralFeature(we.DATASOURCE_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => we.DATASOURCE_ID,
      merge: () => !1
    });
  }
  get datasourceIds() {
    return this._datasourceIds || (this._datasourceIds = qu(this, this.eClass().getEStructuralFeature("datasourceIds"))), this._datasourceIds;
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
      getFeature: () => this.eClass().getEStructuralFeature(we.BASE_MAP_URL),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => we.BASE_MAP_URL,
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
      getFeature: () => this.eClass().getEStructuralFeature(we.ZOOM),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => we.ZOOM,
      merge: () => !1
    });
  }
  get center() {
    return this._center || (this._center = qu(this, this.eClass().getEStructuralFeature("center"))), this._center;
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
      getFeature: () => this.eClass().getEStructuralFeature(we.ATTRIBUTION),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => we.ATTRIBUTION,
      merge: () => !1
    });
  }
  get layers() {
    return this._layers || (this._layers = ls(this, this.eClass().getEStructuralFeature("layers"))), this._layers;
  }
  get styles() {
    return this._styles || (this._styles = ls(this, this.eClass().getEStructuralFeature("styles"))), this._styles;
  }
  get OGCSstyles() {
    return this._OGCSstyles || (this._OGCSstyles = ls(this, this.eClass().getEStructuralFeature("OGCSstyles"))), this._OGCSstyles;
  }
  get services() {
    return this._services || (this._services = ls(this, this.eClass().getEStructuralFeature("services"))), this._services;
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
      getFeature: () => this.eClass().getEStructuralFeature(we.FIXED),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => we.FIXED,
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
      getFeature: () => this.eClass().getEStructuralFeature(we.ENABLE_CLUSTERING),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => we.ENABLE_CLUSTERING,
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
      getFeature: () => this.eClass().getEStructuralFeature(we.SELECTION_HIGHLIGHT_COLOR),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => we.SELECTION_HIGHLIGHT_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(we.SELECTED_THING_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => we.SELECTED_THING_ID,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case we.DATASOURCE_ID:
        return this.datasourceId;
      case we.DATASOURCE_IDS:
        return this.datasourceIds;
      case we.BASE_MAP_URL:
        return this.baseMapUrl;
      case we.ZOOM:
        return this.zoom;
      case we.CENTER:
        return this.center;
      case we.ATTRIBUTION:
        return this.attribution;
      case we.LAYERS:
        return this.layers;
      case we.STYLES:
        return this.styles;
      case we.O_G_C_SSTYLES:
        return this.OGCSstyles;
      case we.SERVICES:
        return this.services;
      case we.FIXED:
        return this.fixed;
      case we.ENABLE_CLUSTERING:
        return this.enableClustering;
      case we.SELECTION_HIGHLIGHT_COLOR:
        return this.selectionHighlightColor;
      case we.SELECTED_THING_ID:
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
      case we.DATASOURCE_ID:
        this.datasourceId = n, super.eSet(i, n);
        break;
      case we.DATASOURCE_IDS:
        this.datasourceIds.clear(), this.datasourceIds.addAll(n), super.eSet(i, n);
        break;
      case we.BASE_MAP_URL:
        this.baseMapUrl = n, super.eSet(i, n);
        break;
      case we.ZOOM:
        this.zoom = n, super.eSet(i, n);
        break;
      case we.CENTER:
        this.center.clear(), this.center.addAll(n), super.eSet(i, n);
        break;
      case we.ATTRIBUTION:
        this.attribution = n, super.eSet(i, n);
        break;
      case we.LAYERS:
        this.layers.clear(), this.layers.addAll(n), super.eSet(i, n);
        break;
      case we.STYLES:
        this.styles.clear(), this.styles.addAll(n), super.eSet(i, n);
        break;
      case we.O_G_C_SSTYLES:
        this.OGCSstyles.clear(), this.OGCSstyles.addAll(n), super.eSet(i, n);
        break;
      case we.SERVICES:
        this.services.clear(), this.services.addAll(n), super.eSet(i, n);
        break;
      case we.FIXED:
        this.fixed = n, super.eSet(i, n);
        break;
      case we.ENABLE_CLUSTERING:
        this.enableClustering = n, super.eSet(i, n);
        break;
      case we.SELECTION_HIGHLIGHT_COLOR:
        this.selectionHighlightColor = n, super.eSet(i, n);
        break;
      case we.SELECTED_THING_ID:
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
      case we.DATASOURCE_ID:
        return this._datasourceId !== void 0;
      case we.DATASOURCE_IDS:
        return this._datasourceIds !== void 0 && !this._datasourceIds.isEmpty();
      case we.BASE_MAP_URL:
        return this._baseMapUrl !== "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
      case we.ZOOM:
        return this._zoom !== 14;
      case we.CENTER:
        return this._center !== void 0 && !this._center.isEmpty();
      case we.ATTRIBUTION:
        return this._attribution !== void 0;
      case we.LAYERS:
        return this._layers !== void 0 && !this._layers.isEmpty();
      case we.STYLES:
        return this._styles !== void 0 && !this._styles.isEmpty();
      case we.O_G_C_SSTYLES:
        return this._OGCSstyles !== void 0 && !this._OGCSstyles.isEmpty();
      case we.SERVICES:
        return this._services !== void 0 && !this._services.isEmpty();
      case we.FIXED:
        return this._fixed !== void 0;
      case we.ENABLE_CLUSTERING:
        return this._enableClustering !== void 0;
      case we.SELECTION_HIGHLIGHT_COLOR:
        return this._selectionHighlightColor !== "#ff0000";
      case we.SELECTED_THING_ID:
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
      case we.DATASOURCE_ID:
        this._datasourceId = void 0;
        return;
      case we.DATASOURCE_IDS:
        this._datasourceIds && this._datasourceIds.clear();
        return;
      case we.BASE_MAP_URL:
        this._baseMapUrl = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png";
        return;
      case we.ZOOM:
        this._zoom = 14;
        return;
      case we.CENTER:
        this._center && this._center.clear();
        return;
      case we.ATTRIBUTION:
        this._attribution = void 0;
        return;
      case we.LAYERS:
        this._layers && this._layers.clear();
        return;
      case we.STYLES:
        this._styles && this._styles.clear();
        return;
      case we.O_G_C_SSTYLES:
        this._OGCSstyles && this._OGCSstyles.clear();
        return;
      case we.SERVICES:
        this._services && this._services.clear();
        return;
      case we.FIXED:
        this._fixed = void 0;
        return;
      case we.ENABLE_CLUSTERING:
        this._enableClustering = void 0;
        return;
      case we.SELECTION_HIGHLIGHT_COLOR:
        this._selectionHighlightColor = "#ff0000";
        return;
      case we.SELECTED_THING_ID:
        this._selectedThingId = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      datasourceId: this.datasourceId,
      datasourceIds: this.datasourceIds?.toArray?.() ?? this.datasourceIds,
      baseMapUrl: this.baseMapUrl,
      zoom: this.zoom,
      center: this.center?.toArray?.() ?? this.center,
      attribution: this.attribution,
      layers: this.layers?.toArray?.() ?? this.layers,
      styles: this.styles?.toArray?.() ?? this.styles,
      OGCSstyles: this.OGCSstyles?.toArray?.() ?? this.OGCSstyles,
      services: this.services?.toArray?.() ?? this.services,
      fixed: this.fixed,
      enableClustering: this.enableClustering,
      selectionHighlightColor: this.selectionHighlightColor,
      selectedThingId: this.selectedThingId
    };
  }
}
class Ce extends vr {
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
    return b.Literals.LAYER;
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
      getFeature: () => this.eClass().getEStructuralFeature(Ce.DATASOURCE_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ce.DATASOURCE_ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ce.SERVICE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ce.SERVICE,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ce.TYPE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ce.TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ce.CHILDS),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ce.CHILDS,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ce.LEVEL),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ce.LEVEL,
      merge: () => !1
    });
  }
  get styleIds() {
    return this._styleIds || (this._styleIds = qu(this, this.eClass().getEStructuralFeature("styleIds"))), this._styleIds;
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
      getFeature: () => this.eClass().getEStructuralFeature(Ce.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ce.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ce.TITLE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ce.TITLE,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ce.ATTRIBUTION),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ce.ATTRIBUTION,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ce.GEO_JSON),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ce.GEO_JSON,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ce.WFS_SERVICE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ce.WFS_SERVICE,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ce.OPACITY),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ce.OPACITY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ce.DATASOURCE_ID:
        return this.datasourceId;
      case Ce.SERVICE:
        return this.service;
      case Ce.TYPE:
        return this.type;
      case Ce.CHILDS:
        return this.childs;
      case Ce.LEVEL:
        return this.level;
      case Ce.STYLE_IDS:
        return this.styleIds;
      case Ce.NAME:
        return this.name;
      case Ce.TITLE:
        return this.title;
      case Ce.ATTRIBUTION:
        return this.attribution;
      case Ce.GEO_JSON:
        return this.geoJson;
      case Ce.WFS_SERVICE:
        return this.wfs_service;
      case Ce.OPACITY:
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
      case Ce.DATASOURCE_ID:
        this.datasourceId = n, super.eSet(i, n);
        break;
      case Ce.SERVICE:
        this.service = n, super.eSet(i, n);
        break;
      case Ce.TYPE:
        this.type = n, super.eSet(i, n);
        break;
      case Ce.CHILDS:
        this.childs = n, super.eSet(i, n);
        break;
      case Ce.LEVEL:
        this.level = n, super.eSet(i, n);
        break;
      case Ce.STYLE_IDS:
        this.styleIds.clear(), this.styleIds.addAll(n), super.eSet(i, n);
        break;
      case Ce.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case Ce.TITLE:
        this.title = n, super.eSet(i, n);
        break;
      case Ce.ATTRIBUTION:
        this.attribution = n, super.eSet(i, n);
        break;
      case Ce.GEO_JSON:
        this.geoJson = n, super.eSet(i, n);
        break;
      case Ce.WFS_SERVICE:
        this.wfs_service = n, super.eSet(i, n);
        break;
      case Ce.OPACITY:
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
      case Ce.DATASOURCE_ID:
        return this._datasourceId !== void 0;
      case Ce.SERVICE:
        return this._service !== void 0;
      case Ce.TYPE:
        return this._type !== void 0;
      case Ce.CHILDS:
        return this._childs !== void 0;
      case Ce.LEVEL:
        return this._level !== void 0;
      case Ce.STYLE_IDS:
        return this._styleIds !== void 0 && !this._styleIds.isEmpty();
      case Ce.NAME:
        return this._name !== void 0;
      case Ce.TITLE:
        return this._title !== void 0;
      case Ce.ATTRIBUTION:
        return this._attribution !== void 0;
      case Ce.GEO_JSON:
        return this._geoJson !== void 0;
      case Ce.WFS_SERVICE:
        return this._wfs_service !== void 0;
      case Ce.OPACITY:
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
      case Ce.DATASOURCE_ID:
        this._datasourceId = void 0;
        return;
      case Ce.SERVICE:
        this._service = void 0;
        return;
      case Ce.TYPE:
        this._type = void 0;
        return;
      case Ce.CHILDS:
        this._childs = void 0;
        return;
      case Ce.LEVEL:
        this._level = void 0;
        return;
      case Ce.STYLE_IDS:
        this._styleIds && this._styleIds.clear();
        return;
      case Ce.NAME:
        this._name = void 0;
        return;
      case Ce.TITLE:
        this._title = void 0;
        return;
      case Ce.ATTRIBUTION:
        this._attribution = void 0;
        return;
      case Ce.GEO_JSON:
        this._geoJson = void 0;
        return;
      case Ce.WFS_SERVICE:
        this._wfs_service = void 0;
        return;
      case Ce.OPACITY:
        this._opacity = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      datasourceId: this.datasourceId,
      service: this.service,
      type: this.type,
      childs: this.childs,
      level: this.level,
      styleIds: this.styleIds?.toArray?.() ?? this.styleIds,
      name: this.name,
      title: this.title,
      attribution: this.attribution,
      geoJson: this.geoJson,
      wfs_service: this.wfs_service,
      opacity: this.opacity
    };
  }
}
class Zt extends vr {
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
    return b.Literals.SERVICE;
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
      getFeature: () => this.eClass().getEStructuralFeature(Zt.TYPE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Zt.TYPE,
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
      getFeature: () => this.eClass().getEStructuralFeature(Zt.URL),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Zt.URL,
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
      getFeature: () => this.eClass().getEStructuralFeature(Zt.SERVICE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Zt.SERVICE,
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
      getFeature: () => this.eClass().getEStructuralFeature(Zt.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Zt.ID,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Zt.TYPE:
        return this.type;
      case Zt.URL:
        return this.url;
      case Zt.SERVICE:
        return this.service;
      case Zt.ID:
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
      case Zt.TYPE:
        this.type = n, super.eSet(i, n);
        break;
      case Zt.URL:
        this.url = n, super.eSet(i, n);
        break;
      case Zt.SERVICE:
        this.service = n, super.eSet(i, n);
        break;
      case Zt.ID:
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
      case Zt.TYPE:
        return this._type !== void 0;
      case Zt.URL:
        return this._url !== void 0;
      case Zt.SERVICE:
        return this._service !== void 0;
      case Zt.ID:
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
      case Zt.TYPE:
        this._type = void 0;
        return;
      case Zt.URL:
        this._url = void 0;
        return;
      case Zt.SERVICE:
        this._service = void 0;
        return;
      case Zt.ID:
        this._id = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      type: this.type,
      url: this.url,
      service: this.service,
      id: this.id
    };
  }
}
class qe extends vr {
  constructor() {
    super(...arguments), this._iconColor = new _h();
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
    return b.Literals.ICON_SETTINGS;
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
      getFeature: () => this.eClass().getEStructuralFeature(qe.CURRENT_ICON),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => qe.CURRENT_ICON,
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
      getFeature: () => this.eClass().getEStructuralFeature(qe.ICON_COLOR),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => qe.ICON_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(qe.ICON_SIZE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => qe.ICON_SIZE,
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
      getFeature: () => this.eClass().getEStructuralFeature(qe.IS_ICON_FILLED),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => qe.IS_ICON_FILLED,
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
      getFeature: () => this.eClass().getEStructuralFeature(qe.STROKE_WEIGHT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => qe.STROKE_WEIGHT,
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
      getFeature: () => this.eClass().getEStructuralFeature(qe.OPTIC_SIZE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => qe.OPTIC_SIZE,
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
      getFeature: () => this.eClass().getEStructuralFeature(qe.GRADE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => qe.GRADE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case qe.CURRENT_ICON:
        return this.currentIcon;
      case qe.ICON_COLOR:
        return this.iconColor;
      case qe.ICON_SIZE:
        return this.iconSize;
      case qe.IS_ICON_FILLED:
        return this.isIconFilled;
      case qe.STROKE_WEIGHT:
        return this.strokeWeight;
      case qe.OPTIC_SIZE:
        return this.opticSize;
      case qe.GRADE:
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
      case qe.CURRENT_ICON:
        this.currentIcon = n, super.eSet(i, n);
        break;
      case qe.ICON_COLOR:
        this.iconColor = n, super.eSet(i, n);
        break;
      case qe.ICON_SIZE:
        this.iconSize = n, super.eSet(i, n);
        break;
      case qe.IS_ICON_FILLED:
        this.isIconFilled = n, super.eSet(i, n);
        break;
      case qe.STROKE_WEIGHT:
        this.strokeWeight = n, super.eSet(i, n);
        break;
      case qe.OPTIC_SIZE:
        this.opticSize = n, super.eSet(i, n);
        break;
      case qe.GRADE:
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
      case qe.CURRENT_ICON:
        return this._currentIcon !== void 0;
      case qe.ICON_COLOR:
        return this._iconColor !== new _h();
      case qe.ICON_SIZE:
        return this._iconSize !== void 0;
      case qe.IS_ICON_FILLED:
        return this._isIconFilled !== void 0;
      case qe.STROKE_WEIGHT:
        return this._strokeWeight !== void 0;
      case qe.OPTIC_SIZE:
        return this._opticSize !== void 0;
      case qe.GRADE:
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
      case qe.CURRENT_ICON:
        this._currentIcon = void 0;
        return;
      case qe.ICON_COLOR:
        this._iconColor = new _h();
        return;
      case qe.ICON_SIZE:
        this._iconSize = void 0;
        return;
      case qe.IS_ICON_FILLED:
        this._isIconFilled = void 0;
        return;
      case qe.STROKE_WEIGHT:
        this._strokeWeight = void 0;
        return;
      case qe.OPTIC_SIZE:
        this._opticSize = void 0;
        return;
      case qe.GRADE:
        this._grade = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      currentIcon: this.currentIcon,
      iconColor: this.iconColor,
      iconSize: this.iconSize,
      isIconFilled: this.isIconFilled,
      strokeWeight: this.strokeWeight,
      opticSize: this.opticSize,
      grade: this.grade
    };
  }
}
class Xi extends vr {
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
    return b.Literals.POINT_PIN;
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
      getFeature: () => this.eClass().getEStructuralFeature(Xi.COLOR),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xi.COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(Xi.SOLID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xi.SOLID,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Xi.COLOR:
        return this.color;
      case Xi.SOLID:
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
      case Xi.COLOR:
        this.color = n, super.eSet(i, n);
        break;
      case Xi.SOLID:
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
      case Xi.COLOR:
        return this._color !== void 0;
      case Xi.SOLID:
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
      case Xi.COLOR:
        this._color = void 0;
        return;
      case Xi.SOLID:
        this._solid = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      color: this.color,
      solid: this.solid
    };
  }
}
class Xe extends vr {
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
    return b.Literals.POINT_AND_AREA_SETTINGS;
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
      getFeature: () => this.eClass().getEStructuralFeature(Xe.SHOW__SUB_ELEMENTS),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xe.SHOW__SUB_ELEMENTS,
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
      getFeature: () => this.eClass().getEStructuralFeature(Xe.POINT_RENDER_AS),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xe.POINT_RENDER_AS,
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
      getFeature: () => this.eClass().getEStructuralFeature(Xe.POINT_PROP),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xe.POINT_PROP,
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
      getFeature: () => this.eClass().getEStructuralFeature(Xe.POINT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xe.POINT,
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
      getFeature: () => this.eClass().getEStructuralFeature(Xe.POINT_PIN),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xe.POINT_PIN,
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
      getFeature: () => this.eClass().getEStructuralFeature(Xe.AREA),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xe.AREA,
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
      getFeature: () => this.eClass().getEStructuralFeature(Xe.LABEL),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xe.LABEL,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Xe.SHOW__SUB_ELEMENTS:
        return this.show_SubElements;
      case Xe.POINT_RENDER_AS:
        return this.point_render_as;
      case Xe.POINT_PROP:
        return this.point_prop;
      case Xe.POINT:
        return this.point;
      case Xe.POINT_PIN:
        return this.pointPin;
      case Xe.AREA:
        return this.area;
      case Xe.LABEL:
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
      case Xe.SHOW__SUB_ELEMENTS:
        this.show_SubElements = n, super.eSet(i, n);
        break;
      case Xe.POINT_RENDER_AS:
        this.point_render_as = n, super.eSet(i, n);
        break;
      case Xe.POINT_PROP:
        this.point_prop = n, super.eSet(i, n);
        break;
      case Xe.POINT:
        this.point = n, super.eSet(i, n);
        break;
      case Xe.POINT_PIN:
        this.pointPin = n, super.eSet(i, n);
        break;
      case Xe.AREA:
        this.area = n, super.eSet(i, n);
        break;
      case Xe.LABEL:
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
      case Xe.SHOW__SUB_ELEMENTS:
        return this._show_SubElements !== void 0;
      case Xe.POINT_RENDER_AS:
        return this._point_render_as !== void 0;
      case Xe.POINT_PROP:
        return this._point_prop !== void 0;
      case Xe.POINT:
        return this._point !== void 0;
      case Xe.POINT_PIN:
        return this._pointPin !== void 0;
      case Xe.AREA:
        return this._area !== void 0;
      case Xe.LABEL:
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
      case Xe.SHOW__SUB_ELEMENTS:
        this._show_SubElements = void 0;
        return;
      case Xe.POINT_RENDER_AS:
        this._point_render_as = void 0;
        return;
      case Xe.POINT_PROP:
        this._point_prop = void 0;
        return;
      case Xe.POINT:
        this._point = void 0;
        return;
      case Xe.POINT_PIN:
        this._pointPin = void 0;
        return;
      case Xe.AREA:
        this._area = void 0;
        return;
      case Xe.LABEL:
        this._label = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      show_SubElements: this.show_SubElements,
      point_render_as: this.point_render_as,
      point_prop: this.point_prop,
      point: this.point,
      pointPin: this.pointPin,
      area: this.area,
      label: this.label
    };
  }
}
const ma = {
  Thing: "Thing"
};
class Tt extends vr {
  constructor() {
    super(...arguments), this._placement = ma.Thing;
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
    return b.Literals.D_S_RENDERER;
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
      getFeature: () => this.eClass().getEStructuralFeature(Tt.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Tt.NAME,
      merge: () => !1
    });
  }
  get datastream() {
    return this._datastream || (this._datastream = ls(this, this.eClass().getEStructuralFeature("datastream"))), this._datastream;
  }
  get observations() {
    return this._observations || (this._observations = ls(this, this.eClass().getEStructuralFeature("observations"))), this._observations;
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
      getFeature: () => this.eClass().getEStructuralFeature(Tt.RENDERER),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Tt.RENDERER,
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
      getFeature: () => this.eClass().getEStructuralFeature(Tt.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Tt.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(Tt.PLACEMENT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Tt.PLACEMENT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Tt.NAME:
        return this.name;
      case Tt.DATASTREAM:
        return this.datastream;
      case Tt.OBSERVATIONS:
        return this.observations;
      case Tt.RENDERER:
        return this.renderer;
      case Tt.ID:
        return this.id;
      case Tt.PLACEMENT:
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
      case Tt.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case Tt.DATASTREAM:
        this.datastream.clear(), this.datastream.addAll(n), super.eSet(i, n);
        break;
      case Tt.OBSERVATIONS:
        this.observations.clear(), this.observations.addAll(n), super.eSet(i, n);
        break;
      case Tt.RENDERER:
        this.renderer = n, super.eSet(i, n);
        break;
      case Tt.ID:
        this.id = n, super.eSet(i, n);
        break;
      case Tt.PLACEMENT:
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
      case Tt.NAME:
        return this._name !== void 0;
      case Tt.DATASTREAM:
        return this._datastream !== void 0 && !this._datastream.isEmpty();
      case Tt.OBSERVATIONS:
        return this._observations !== void 0 && !this._observations.isEmpty();
      case Tt.RENDERER:
        return this._renderer !== void 0;
      case Tt.ID:
        return this._id !== void 0;
      case Tt.PLACEMENT:
        return this._placement !== ma.Thing;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Tt.NAME:
        this._name = void 0;
        return;
      case Tt.DATASTREAM:
        this._datastream && this._datastream.clear();
        return;
      case Tt.OBSERVATIONS:
        this._observations && this._observations.clear();
        return;
      case Tt.RENDERER:
        this._renderer = void 0;
        return;
      case Tt.ID:
        this._id = void 0;
        return;
      case Tt.PLACEMENT:
        this._placement = ma.Thing;
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      name: this.name,
      datastream: this.datastream?.toArray?.() ?? this.datastream,
      observations: this.observations?.toArray?.() ?? this.observations,
      renderer: this.renderer,
      id: this.id,
      placement: this.placement
    };
  }
}
class Xs extends vr {
  constructor() {
    super(...arguments), this._placement = ma.Thing;
  }
  static {
    this.PLACEMENT = 0;
  }
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return b.Literals.PLACEMENT;
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
      getFeature: () => this.eClass().getEStructuralFeature(Xs.PLACEMENT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Xs.PLACEMENT,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Xs.PLACEMENT:
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
      case Xs.PLACEMENT:
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
      case Xs.PLACEMENT:
        return this._placement !== ma.Thing;
      default:
        return super.eIsSet(i);
    }
  }
  /**
   * Unsets the given feature
   */
  eUnset(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Xs.PLACEMENT:
        this._placement = ma.Thing;
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      placement: this.placement
    };
  }
}
class on extends vr {
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
    return b.Literals.OBSERVATION;
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
      getFeature: () => this.eClass().getEStructuralFeature(on.SETTING),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => on.SETTING,
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
      getFeature: () => this.eClass().getEStructuralFeature(on.COMPONENT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => on.COMPONENT,
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
      getFeature: () => this.eClass().getEStructuralFeature(on.RENDERER),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => on.RENDERER,
      merge: () => !1
    });
  }
  get conditions() {
    return this._conditions || (this._conditions = ls(this, this.eClass().getEStructuralFeature("conditions"))), this._conditions;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case on.SETTING:
        return this.setting;
      case on.COMPONENT:
        return this.component;
      case on.RENDERER:
        return this.renderer;
      case on.CONDITIONS:
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
      case on.SETTING:
        this.setting = n, super.eSet(i, n);
        break;
      case on.COMPONENT:
        this.component = n, super.eSet(i, n);
        break;
      case on.RENDERER:
        this.renderer = n, super.eSet(i, n);
        break;
      case on.CONDITIONS:
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
      case on.SETTING:
        return this._setting !== void 0;
      case on.COMPONENT:
        return this._component !== void 0;
      case on.RENDERER:
        return this._renderer !== void 0;
      case on.CONDITIONS:
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
      case on.SETTING:
        this._setting = void 0;
        return;
      case on.COMPONENT:
        this._component = void 0;
        return;
      case on.RENDERER:
        this._renderer = void 0;
        return;
      case on.CONDITIONS:
        this._conditions && this._conditions.clear();
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      setting: this.setting,
      component: this.component,
      renderer: this.renderer,
      conditions: this.conditions?.toArray?.() ?? this.conditions
    };
  }
}
class Fn extends vr {
  constructor() {
    super(...arguments), this._comperator = os.eq;
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
    return b.Literals.CONDITION;
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
      getFeature: () => this.eClass().getEStructuralFeature(Fn.PROP),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Fn.PROP,
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
      getFeature: () => this.eClass().getEStructuralFeature(Fn.COMPERATOR),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Fn.COMPERATOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(Fn.VALUE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Fn.VALUE,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Fn.PROP:
        return this.prop;
      case Fn.COMPERATOR:
        return this.comperator;
      case Fn.VALUE:
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
      case Fn.PROP:
        this.prop = n, super.eSet(i, n);
        break;
      case Fn.COMPERATOR:
        this.comperator = n, super.eSet(i, n);
        break;
      case Fn.VALUE:
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
      case Fn.PROP:
        return this._prop !== void 0;
      case Fn.COMPERATOR:
        return this._comperator !== os.eq;
      case Fn.VALUE:
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
      case Fn.PROP:
        this._prop = void 0;
        return;
      case Fn.COMPERATOR:
        this._comperator = os.eq;
        return;
      case Fn.VALUE:
        this._value = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      prop: this.prop,
      comperator: this.comperator,
      value: this.value
    };
  }
}
class ut extends vr {
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
    return b.Literals.RENDERER;
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
      getFeature: () => this.eClass().getEStructuralFeature(ut.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ut.NAME,
      merge: () => !1
    });
  }
  get thing() {
    return this._thing || (this._thing = ls(this, this.eClass().getEStructuralFeature("thing"))), this._thing;
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
      getFeature: () => this.eClass().getEStructuralFeature(ut.RENDERER),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ut.RENDERER,
      merge: () => !1
    });
  }
  get ds_renderer() {
    return this._ds_renderer || (this._ds_renderer = ls(this, this.eClass().getEStructuralFeature("ds_renderer"))), this._ds_renderer;
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
      getFeature: () => this.eClass().getEStructuralFeature(ut.OBSERVATIONREFRESH_TIME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ut.OBSERVATIONREFRESH_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature(ut.LAST_UPDATE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ut.LAST_UPDATE,
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
      getFeature: () => this.eClass().getEStructuralFeature(ut.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => ut.ID,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case ut.NAME:
        return this.name;
      case ut.THING:
        return this.thing;
      case ut.RENDERER:
        return this.renderer;
      case ut.DS_RENDERER:
        return this.ds_renderer;
      case ut.OBSERVATIONREFRESH_TIME:
        return this.ObservationrefreshTime;
      case ut.LAST_UPDATE:
        return this.lastUpdate;
      case ut.ID:
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
      case ut.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case ut.THING:
        this.thing.clear(), this.thing.addAll(n), super.eSet(i, n);
        break;
      case ut.RENDERER:
        this.renderer = n, super.eSet(i, n);
        break;
      case ut.DS_RENDERER:
        this.ds_renderer.clear(), this.ds_renderer.addAll(n), super.eSet(i, n);
        break;
      case ut.OBSERVATIONREFRESH_TIME:
        this.ObservationrefreshTime = n, super.eSet(i, n);
        break;
      case ut.LAST_UPDATE:
        this.lastUpdate = n, super.eSet(i, n);
        break;
      case ut.ID:
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
      case ut.NAME:
        return this._name !== void 0;
      case ut.THING:
        return this._thing !== void 0 && !this._thing.isEmpty();
      case ut.RENDERER:
        return this._renderer !== void 0;
      case ut.DS_RENDERER:
        return this._ds_renderer !== void 0 && !this._ds_renderer.isEmpty();
      case ut.OBSERVATIONREFRESH_TIME:
        return this._ObservationrefreshTime !== void 0;
      case ut.LAST_UPDATE:
        return this._lastUpdate !== void 0;
      case ut.ID:
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
      case ut.NAME:
        this._name = void 0;
        return;
      case ut.THING:
        this._thing && this._thing.clear();
        return;
      case ut.RENDERER:
        this._renderer = void 0;
        return;
      case ut.DS_RENDERER:
        this._ds_renderer && this._ds_renderer.clear();
        return;
      case ut.OBSERVATIONREFRESH_TIME:
        this._ObservationrefreshTime = void 0;
        return;
      case ut.LAST_UPDATE:
        this._lastUpdate = void 0;
        return;
      case ut.ID:
        this._id = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      name: this.name,
      thing: this.thing?.toArray?.() ?? this.thing,
      renderer: this.renderer,
      ds_renderer: this.ds_renderer?.toArray?.() ?? this.ds_renderer,
      ObservationrefreshTime: this.ObservationrefreshTime,
      lastUpdate: this.lastUpdate,
      id: this.id
    };
  }
}
class Ne extends vr {
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
    return b.Literals.MAP_PROPS;
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
      getFeature: () => this.eClass().getEStructuralFeature(Ne.STROKE),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.STROKE,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ne.COLOR),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ne.WEIGHT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.WEIGHT,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ne.OPACITY),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.OPACITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ne.LINE_CAP),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.LINE_CAP,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ne.DASH_OFFSET),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.DASH_OFFSET,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ne.FILL),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.FILL,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ne.FILL_OPACITY),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.FILL_OPACITY,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ne.FILL_COLOR),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.FILL_COLOR,
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
      getFeature: () => this.eClass().getEStructuralFeature(Ne.CLASS_NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Ne.CLASS_NAME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Ne.STROKE:
        return this.stroke;
      case Ne.COLOR:
        return this.color;
      case Ne.WEIGHT:
        return this.weight;
      case Ne.OPACITY:
        return this.opacity;
      case Ne.LINE_CAP:
        return this.lineCap;
      case Ne.DASH_OFFSET:
        return this.dashOffset;
      case Ne.FILL:
        return this.fill;
      case Ne.FILL_OPACITY:
        return this.fillOpacity;
      case Ne.FILL_COLOR:
        return this.fillColor;
      case Ne.CLASS_NAME:
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
      case Ne.STROKE:
        this.stroke = n, super.eSet(i, n);
        break;
      case Ne.COLOR:
        this.color = n, super.eSet(i, n);
        break;
      case Ne.WEIGHT:
        this.weight = n, super.eSet(i, n);
        break;
      case Ne.OPACITY:
        this.opacity = n, super.eSet(i, n);
        break;
      case Ne.LINE_CAP:
        this.lineCap = n, super.eSet(i, n);
        break;
      case Ne.DASH_OFFSET:
        this.dashOffset = n, super.eSet(i, n);
        break;
      case Ne.FILL:
        this.fill = n, super.eSet(i, n);
        break;
      case Ne.FILL_OPACITY:
        this.fillOpacity = n, super.eSet(i, n);
        break;
      case Ne.FILL_COLOR:
        this.fillColor = n, super.eSet(i, n);
        break;
      case Ne.CLASS_NAME:
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
      case Ne.STROKE:
        return this._stroke !== void 0;
      case Ne.COLOR:
        return this._color !== void 0;
      case Ne.WEIGHT:
        return this._weight !== void 0;
      case Ne.OPACITY:
        return this._opacity !== void 0;
      case Ne.LINE_CAP:
        return this._lineCap !== void 0;
      case Ne.DASH_OFFSET:
        return this._dashOffset !== void 0;
      case Ne.FILL:
        return this._fill !== void 0;
      case Ne.FILL_OPACITY:
        return this._fillOpacity !== void 0;
      case Ne.FILL_COLOR:
        return this._fillColor !== void 0;
      case Ne.CLASS_NAME:
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
      case Ne.STROKE:
        this._stroke = void 0;
        return;
      case Ne.COLOR:
        this._color = void 0;
        return;
      case Ne.WEIGHT:
        this._weight = void 0;
        return;
      case Ne.OPACITY:
        this._opacity = void 0;
        return;
      case Ne.LINE_CAP:
        this._lineCap = void 0;
        return;
      case Ne.DASH_OFFSET:
        this._dashOffset = void 0;
        return;
      case Ne.FILL:
        this._fill = void 0;
        return;
      case Ne.FILL_OPACITY:
        this._fillOpacity = void 0;
        return;
      case Ne.FILL_COLOR:
        this._fillColor = void 0;
        return;
      case Ne.CLASS_NAME:
        this._className = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      stroke: this.stroke,
      color: this.color,
      weight: this.weight,
      opacity: this.opacity,
      lineCap: this.lineCap,
      dashOffset: this.dashOffset,
      fill: this.fill,
      fillOpacity: this.fillOpacity,
      fillColor: this.fillColor,
      className: this.className
    };
  }
}
class In extends vr {
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
    return b.Literals.DATASTREAM_SUMMARY;
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
      getFeature: () => this.eClass().getEStructuralFeature(In.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => In.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(In.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => In.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(In.OBSERVED_PROPERTY),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => In.OBSERVED_PROPERTY,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case In.ID:
        return this.id;
      case In.NAME:
        return this.name;
      case In.OBSERVED_PROPERTY:
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
      case In.ID:
        this.id = n, super.eSet(i, n);
        break;
      case In.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case In.OBSERVED_PROPERTY:
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
      case In.ID:
        return this._id !== void 0;
      case In.NAME:
        return this._name !== void 0;
      case In.OBSERVED_PROPERTY:
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
      case In.ID:
        this._id = void 0;
        return;
      case In.NAME:
        this._name = void 0;
        return;
      case In.OBSERVED_PROPERTY:
        this._observedProperty = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      observedProperty: this.observedProperty
    };
  }
}
class We extends Al {
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
    return b.Literals.DATASTREAM_CLICK_PAYLOAD;
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
      getFeature: () => this.eClass().getEStructuralFeature(We.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => We.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(We.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => We.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(We.THING_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => We.THING_ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(We.UNIT_OF_MEASUREMENT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => We.UNIT_OF_MEASUREMENT,
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
      getFeature: () => this.eClass().getEStructuralFeature(We.OBSERVED_PROPERTY),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => We.OBSERVED_PROPERTY,
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
      getFeature: () => this.eClass().getEStructuralFeature(We.LATEST_OBSERVATION_RESULT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => We.LATEST_OBSERVATION_RESULT,
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
      getFeature: () => this.eClass().getEStructuralFeature(We.LATEST_OBSERVATION_TIME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => We.LATEST_OBSERVATION_TIME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case We.ID:
        return this.id;
      case We.NAME:
        return this.name;
      case We.THING_ID:
        return this.thingId;
      case We.UNIT_OF_MEASUREMENT:
        return this.unitOfMeasurement;
      case We.OBSERVED_PROPERTY:
        return this.observedProperty;
      case We.LATEST_OBSERVATION_RESULT:
        return this.latestObservationResult;
      case We.LATEST_OBSERVATION_TIME:
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
      case We.ID:
        this.id = n, super.eSet(i, n);
        break;
      case We.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case We.THING_ID:
        this.thingId = n, super.eSet(i, n);
        break;
      case We.UNIT_OF_MEASUREMENT:
        this.unitOfMeasurement = n, super.eSet(i, n);
        break;
      case We.OBSERVED_PROPERTY:
        this.observedProperty = n, super.eSet(i, n);
        break;
      case We.LATEST_OBSERVATION_RESULT:
        this.latestObservationResult = n, super.eSet(i, n);
        break;
      case We.LATEST_OBSERVATION_TIME:
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
      case We.ID:
        return this._id !== void 0;
      case We.NAME:
        return this._name !== void 0;
      case We.THING_ID:
        return this._thingId !== void 0;
      case We.UNIT_OF_MEASUREMENT:
        return this._unitOfMeasurement !== void 0;
      case We.OBSERVED_PROPERTY:
        return this._observedProperty !== void 0;
      case We.LATEST_OBSERVATION_RESULT:
        return this._latestObservationResult !== void 0;
      case We.LATEST_OBSERVATION_TIME:
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
      case We.ID:
        this._id = void 0;
        return;
      case We.NAME:
        this._name = void 0;
        return;
      case We.THING_ID:
        this._thingId = void 0;
        return;
      case We.UNIT_OF_MEASUREMENT:
        this._unitOfMeasurement = void 0;
        return;
      case We.OBSERVED_PROPERTY:
        this._observedProperty = void 0;
        return;
      case We.LATEST_OBSERVATION_RESULT:
        this._latestObservationResult = void 0;
        return;
      case We.LATEST_OBSERVATION_TIME:
        this._latestObservationTime = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      thingId: this.thingId,
      unitOfMeasurement: this.unitOfMeasurement,
      observedProperty: this.observedProperty,
      latestObservationResult: this.latestObservationResult,
      latestObservationTime: this.latestObservationTime
    };
  }
}
class St extends Al {
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
    return b.Literals.OBSERVATION_CLICK_PAYLOAD;
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
      getFeature: () => this.eClass().getEStructuralFeature(St.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => St.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(St.DATASTREAM_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => St.DATASTREAM_ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(St.PHENOMENON_TIME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => St.PHENOMENON_TIME,
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
      getFeature: () => this.eClass().getEStructuralFeature(St.RESULT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => St.RESULT,
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
      getFeature: () => this.eClass().getEStructuralFeature(St.RESULT_TIME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => St.RESULT_TIME,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case St.ID:
        return this.id;
      case St.DATASTREAM_ID:
        return this.datastreamId;
      case St.PHENOMENON_TIME:
        return this.phenomenonTime;
      case St.RESULT:
        return this.result;
      case St.RESULT_TIME:
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
      case St.ID:
        this.id = n, super.eSet(i, n);
        break;
      case St.DATASTREAM_ID:
        this.datastreamId = n, super.eSet(i, n);
        break;
      case St.PHENOMENON_TIME:
        this.phenomenonTime = n, super.eSet(i, n);
        break;
      case St.RESULT:
        this.result = n, super.eSet(i, n);
        break;
      case St.RESULT_TIME:
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
      case St.ID:
        return this._id !== void 0;
      case St.DATASTREAM_ID:
        return this._datastreamId !== void 0;
      case St.PHENOMENON_TIME:
        return this._phenomenonTime !== void 0;
      case St.RESULT:
        return this._result !== void 0;
      case St.RESULT_TIME:
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
      case St.ID:
        this._id = void 0;
        return;
      case St.DATASTREAM_ID:
        this._datastreamId = void 0;
        return;
      case St.PHENOMENON_TIME:
        this._phenomenonTime = void 0;
        return;
      case St.RESULT:
        this._result = void 0;
        return;
      case St.RESULT_TIME:
        this._resultTime = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      id: this.id,
      datastreamId: this.datastreamId,
      phenomenonTime: this.phenomenonTime,
      result: this.result,
      resultTime: this.resultTime
    };
  }
}
class Si extends Al {
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
    return b.Literals.MAP_CLICK_PAYLOAD;
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
      getFeature: () => this.eClass().getEStructuralFeature(Si.LAT),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Si.LAT,
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
      getFeature: () => this.eClass().getEStructuralFeature(Si.LON),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Si.LON,
      merge: () => !1
    });
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Si.LAT:
        return this.lat;
      case Si.LON:
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
      case Si.LAT:
        this.lat = n, super.eSet(i, n);
        break;
      case Si.LON:
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
      case Si.LAT:
        return this._lat !== void 0;
      case Si.LON:
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
      case Si.LAT:
        this._lat = void 0;
        return;
      case Si.LON:
        this._lon = void 0;
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      lat: this.lat,
      lon: this.lon
    };
  }
}
class jt extends Al {
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
    return b.Literals.LOCATION_CLICK_PAYLOAD;
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
    return this._thingIds || (this._thingIds = qu(this, this.eClass().getEStructuralFeature("thingIds"))), this._thingIds;
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
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      geometry: this.geometry,
      thingIds: this.thingIds?.toArray?.() ?? this.thingIds
    };
  }
}
class td extends QE {
  static get eINSTANCE() {
    return this._instance || (this._instance = new td()), this._instance;
  }
  constructor() {
    super(), this.setEPackage(b.eINSTANCE);
  }
  /**
   * Create a new MapSettings instance
   */
  createMapSettings() {
    return new we();
  }
  /**
   * Create a new Layer instance
   */
  createLayer() {
    return new Ce();
  }
  /**
   * Create a new Service instance
   */
  createService() {
    return new Zt();
  }
  /**
   * Create a new IconSettings instance
   */
  createIconSettings() {
    return new qe();
  }
  /**
   * Create a new PointPin instance
   */
  createPointPin() {
    return new Xi();
  }
  /**
   * Create a new PointAndAreaSettings instance
   */
  createPointAndAreaSettings() {
    return new Xe();
  }
  /**
   * Create a new DSRenderer instance
   */
  createDSRenderer() {
    return new Tt();
  }
  /**
   * Create a new Placement instance
   */
  createPlacement() {
    return new Xs();
  }
  /**
   * Create a new Observation instance
   */
  createObservation() {
    return new on();
  }
  /**
   * Create a new Condition instance
   */
  createCondition() {
    return new Fn();
  }
  /**
   * Create a new Renderer instance
   */
  createRenderer() {
    return new ut();
  }
  /**
   * Create a new MapProps instance
   */
  createMapProps() {
    return new Ne();
  }
  /**
   * Create a new ThingClickPayload instance
   */
  createThingClickPayload() {
    return new Je();
  }
  /**
   * Create a new DatastreamSummary instance
   */
  createDatastreamSummary() {
    return new In();
  }
  /**
   * Create a new DatastreamClickPayload instance
   */
  createDatastreamClickPayload() {
    return new We();
  }
  /**
   * Create a new ObservationClickPayload instance
   */
  createObservationClickPayload() {
    return new St();
  }
  /**
   * Create a new MapClickPayload instance
   */
  createMapClickPayload() {
    return new Si();
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
function No(o) {
  const i = Bp.INSTANCE.getEPackage(o);
  if (!i)
    throw new Error(`EPackage '${o}' is not registered. Access the eINSTANCE of that model's generated package (or register it via EPackageRegistry.INSTANCE.registerPackage) before initializing MapSettingsPackage.`);
  return i;
}
class b extends e1 {
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
    return this._instance || (this._instance = new b(), this._instance.init()), this._instance;
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
    super(), this.setName(b.eNAME), this.setNsURI(b.eNS_URI), this.setNsPrefix(b.eNS_PREFIX);
  }
  /**
   * Initialize package contents
   */
  init() {
    Bp.INSTANCE.set(b.eNS_URI, this), this.setEFactoryInstance(td.eINSTANCE);
    const i = new zn();
    i.setName("MapWidgetInterface"), i.setAbstract(!0), i.setInterface(!1), this.getEClassifiers().push(i), i.setEPackage(this), b.Literals.MAP_WIDGET_INTERFACE = i;
    const n = new zn();
    n.setName("MapSettings"), n.setAbstract(!1), n.setInterface(!1), this.getEClassifiers().push(n), n.setEPackage(this), b.Literals.MAP_SETTINGS = n;
    const l = new pe();
    l.setName("datasourceId"), l.setLowerBound(0), l.setUpperBound(1), n.getEStructuralFeatures().push(l), b.Literals.MAP_SETTINGS__DATASOURCE_ID = l;
    const h = new pe();
    h.setName("datasourceIds"), h.setLowerBound(0), h.setUpperBound(-1), n.getEStructuralFeatures().push(h), b.Literals.MAP_SETTINGS__DATASOURCE_IDS = h;
    const f = new pe();
    f.setName("baseMapUrl"), f.setLowerBound(0), f.setUpperBound(1), n.getEStructuralFeatures().push(f), b.Literals.MAP_SETTINGS__BASE_MAP_URL = f;
    const g = new pe();
    g.setName("zoom"), g.setLowerBound(0), g.setUpperBound(1), n.getEStructuralFeatures().push(g), b.Literals.MAP_SETTINGS__ZOOM = g;
    const v = new pe();
    v.setName("center"), v.setLowerBound(0), v.setUpperBound(-1), n.getEStructuralFeatures().push(v), b.Literals.MAP_SETTINGS__CENTER = v;
    const y = new pe();
    y.setName("attribution"), y.setLowerBound(0), y.setUpperBound(1), n.getEStructuralFeatures().push(y), b.Literals.MAP_SETTINGS__ATTRIBUTION = y;
    const m = new Jn();
    m.setContainment(!0), m.setName("layers"), m.setLowerBound(0), m.setUpperBound(-1), n.getEStructuralFeatures().push(m), b.Literals.MAP_SETTINGS__LAYERS = m;
    const A = new Jn();
    A.setContainment(!0), A.setName("styles"), A.setLowerBound(0), A.setUpperBound(-1), n.getEStructuralFeatures().push(A), b.Literals.MAP_SETTINGS__STYLES = A;
    const S = new Jn();
    S.setContainment(!0), S.setName("OGCSstyles"), S.setLowerBound(0), S.setUpperBound(-1), n.getEStructuralFeatures().push(S), b.Literals.MAP_SETTINGS__O_G_C_SSTYLES = S;
    const I = new Jn();
    I.setContainment(!0), I.setName("services"), I.setLowerBound(0), I.setUpperBound(-1), n.getEStructuralFeatures().push(I), b.Literals.MAP_SETTINGS__SERVICES = I;
    const D = new pe();
    D.setName("fixed"), D.setLowerBound(0), D.setUpperBound(1), n.getEStructuralFeatures().push(D), b.Literals.MAP_SETTINGS__FIXED = D;
    const B = new pe();
    B.setName("enableClustering"), B.setLowerBound(0), B.setUpperBound(1), n.getEStructuralFeatures().push(B), b.Literals.MAP_SETTINGS__ENABLE_CLUSTERING = B;
    const G = new pe();
    G.setName("selectionHighlightColor"), G.setLowerBound(0), G.setUpperBound(1), n.getEStructuralFeatures().push(G), b.Literals.MAP_SETTINGS__SELECTION_HIGHLIGHT_COLOR = G;
    const j = new pe();
    j.setName("selectedThingId"), j.setLowerBound(0), j.setUpperBound(1), n.getEStructuralFeatures().push(j), b.Literals.MAP_SETTINGS__SELECTED_THING_ID = j;
    const W = new zn();
    W.setName("Layer"), W.setAbstract(!1), W.setInterface(!1), this.getEClassifiers().push(W), W.setEPackage(this), b.Literals.LAYER = W;
    const Z = new pe();
    Z.setName("datasourceId"), Z.setLowerBound(0), Z.setUpperBound(1), W.getEStructuralFeatures().push(Z), b.Literals.LAYER__DATASOURCE_ID = Z;
    const J = new pe();
    J.setName("service"), J.setLowerBound(0), J.setUpperBound(1), W.getEStructuralFeatures().push(J), b.Literals.LAYER__SERVICE = J;
    const P = new pe();
    P.setName("type"), P.setLowerBound(0), P.setUpperBound(1), W.getEStructuralFeatures().push(P), b.Literals.LAYER__TYPE = P;
    const U = new Jn();
    U.setContainment(!0), U.setName("childs"), U.setLowerBound(0), U.setUpperBound(1), W.getEStructuralFeatures().push(U), b.Literals.LAYER__CHILDS = U;
    const re = new pe();
    re.setName("level"), re.setLowerBound(0), re.setUpperBound(1), W.getEStructuralFeatures().push(re), b.Literals.LAYER__LEVEL = re;
    const fe = new pe();
    fe.setName("styleIds"), fe.setLowerBound(0), fe.setUpperBound(-1), W.getEStructuralFeatures().push(fe), b.Literals.LAYER__STYLE_IDS = fe;
    const Ee = new pe();
    Ee.setName("name"), Ee.setLowerBound(0), Ee.setUpperBound(1), W.getEStructuralFeatures().push(Ee), b.Literals.LAYER__NAME = Ee;
    const he = new pe();
    he.setName("title"), he.setLowerBound(0), he.setUpperBound(1), W.getEStructuralFeatures().push(he), b.Literals.LAYER__TITLE = he;
    const Oe = new pe();
    Oe.setName("attribution"), Oe.setLowerBound(0), Oe.setUpperBound(1), W.getEStructuralFeatures().push(Oe), b.Literals.LAYER__ATTRIBUTION = Oe;
    const le = new pe();
    le.setName("geoJson"), le.setLowerBound(0), le.setUpperBound(1), W.getEStructuralFeatures().push(le), b.Literals.LAYER__GEO_JSON = le;
    const ne = new pe();
    ne.setName("wfs_service"), ne.setLowerBound(0), ne.setUpperBound(1), W.getEStructuralFeatures().push(ne), b.Literals.LAYER__WFS_SERVICE = ne;
    const V = new pe();
    V.setName("opacity"), V.setLowerBound(0), V.setUpperBound(1), W.getEStructuralFeatures().push(V), b.Literals.LAYER__OPACITY = V;
    const ge = new zn();
    ge.setName("Service"), ge.setAbstract(!1), ge.setInterface(!1), this.getEClassifiers().push(ge), ge.setEPackage(this), b.Literals.SERVICE = ge;
    const Ae = new pe();
    Ae.setName("type"), Ae.setLowerBound(0), Ae.setUpperBound(1), ge.getEStructuralFeatures().push(Ae), b.Literals.SERVICE__TYPE = Ae;
    const te = new pe();
    te.setName("url"), te.setLowerBound(0), te.setUpperBound(1), ge.getEStructuralFeatures().push(te), b.Literals.SERVICE__URL = te;
    const oe = new pe();
    oe.setName("service"), oe.setLowerBound(0), oe.setUpperBound(1), ge.getEStructuralFeatures().push(oe), b.Literals.SERVICE__SERVICE = oe;
    const K = new pe();
    K.setName("id"), K.setLowerBound(0), K.setUpperBound(1), ge.getEStructuralFeatures().push(K), b.Literals.SERVICE__ID = K;
    const Fe = new zn();
    Fe.setName("IconSettings"), Fe.setAbstract(!1), Fe.setInterface(!1), this.getEClassifiers().push(Fe), Fe.setEPackage(this), b.Literals.ICON_SETTINGS = Fe;
    const Le = new pe();
    Le.setName("currentIcon"), Le.setLowerBound(0), Le.setUpperBound(1), Fe.getEStructuralFeatures().push(Le), b.Literals.ICON_SETTINGS__CURRENT_ICON = Le;
    const Me = new Jn();
    Me.setContainment(!1), Me.setName("iconColor"), Me.setLowerBound(0), Me.setUpperBound(1), Fe.getEStructuralFeatures().push(Me), b.Literals.ICON_SETTINGS__ICON_COLOR = Me;
    const kt = new pe();
    kt.setName("iconSize"), kt.setLowerBound(0), kt.setUpperBound(1), Fe.getEStructuralFeatures().push(kt), b.Literals.ICON_SETTINGS__ICON_SIZE = kt;
    const en = new pe();
    en.setName("isIconFilled"), en.setLowerBound(0), en.setUpperBound(1), Fe.getEStructuralFeatures().push(en), b.Literals.ICON_SETTINGS__IS_ICON_FILLED = en;
    const Ot = new pe();
    Ot.setName("strokeWeight"), Ot.setLowerBound(0), Ot.setUpperBound(1), Fe.getEStructuralFeatures().push(Ot), b.Literals.ICON_SETTINGS__STROKE_WEIGHT = Ot;
    const Qe = new pe();
    Qe.setName("opticSize"), Qe.setLowerBound(0), Qe.setUpperBound(1), Fe.getEStructuralFeatures().push(Qe), b.Literals.ICON_SETTINGS__OPTIC_SIZE = Qe;
    const Ye = new pe();
    Ye.setName("grade"), Ye.setLowerBound(0), Ye.setUpperBound(1), Fe.getEStructuralFeatures().push(Ye), b.Literals.ICON_SETTINGS__GRADE = Ye;
    const Vt = new zn();
    Vt.setName("PointPin"), Vt.setAbstract(!1), Vt.setInterface(!1), this.getEClassifiers().push(Vt), Vt.setEPackage(this), b.Literals.POINT_PIN = Vt;
    const un = new pe();
    un.setName("color"), un.setLowerBound(0), un.setUpperBound(1), Vt.getEStructuralFeatures().push(un), b.Literals.POINT_PIN__COLOR = un;
    const ci = new pe();
    ci.setName("solid"), ci.setLowerBound(0), ci.setUpperBound(1), Vt.getEStructuralFeatures().push(ci), b.Literals.POINT_PIN__SOLID = ci;
    const qt = new zn();
    qt.setName("PointAndAreaSettings"), qt.setAbstract(!1), qt.setInterface(!1), this.getEClassifiers().push(qt), qt.setEPackage(this), b.Literals.POINT_AND_AREA_SETTINGS = qt;
    const Zn = new pe();
    Zn.setName("show_SubElements"), Zn.setLowerBound(0), Zn.setUpperBound(1), qt.getEStructuralFeatures().push(Zn), b.Literals.POINT_AND_AREA_SETTINGS__SHOW__SUB_ELEMENTS = Zn;
    const Dn = new pe();
    Dn.setName("point_render_as"), Dn.setLowerBound(0), Dn.setUpperBound(1), qt.getEStructuralFeatures().push(Dn), b.Literals.POINT_AND_AREA_SETTINGS__POINT_RENDER_AS = Dn;
    const bi = new pe();
    bi.setName("point_prop"), bi.setLowerBound(0), bi.setUpperBound(1), qt.getEStructuralFeatures().push(bi), b.Literals.POINT_AND_AREA_SETTINGS__POINT_PROP = bi;
    const pn = new Jn();
    pn.setContainment(!0), pn.setName("point"), pn.setLowerBound(0), pn.setUpperBound(1), qt.getEStructuralFeatures().push(pn), b.Literals.POINT_AND_AREA_SETTINGS__POINT = pn;
    const jn = new Jn();
    jn.setContainment(!0), jn.setName("pointPin"), jn.setLowerBound(0), jn.setUpperBound(1), qt.getEStructuralFeatures().push(jn), b.Literals.POINT_AND_AREA_SETTINGS__POINT_PIN = jn;
    const gn = new Jn();
    gn.setContainment(!0), gn.setName("area"), gn.setLowerBound(0), gn.setUpperBound(1), qt.getEStructuralFeatures().push(gn), b.Literals.POINT_AND_AREA_SETTINGS__AREA = gn;
    const _n = new pe();
    _n.setName("label"), _n.setLowerBound(0), _n.setUpperBound(1), qt.getEStructuralFeatures().push(_n), b.Literals.POINT_AND_AREA_SETTINGS__LABEL = _n;
    const tn = new zn();
    tn.setName("DSRenderer"), tn.setAbstract(!1), tn.setInterface(!1), this.getEClassifiers().push(tn), tn.setEPackage(this), b.Literals.D_S_RENDERER = tn;
    const yr = new pe();
    yr.setName("name"), yr.setLowerBound(0), yr.setUpperBound(1), tn.getEStructuralFeatures().push(yr), b.Literals.D_S_RENDERER__NAME = yr;
    const Hn = new Jn();
    Hn.setContainment(!0), Hn.setName("datastream"), Hn.setLowerBound(0), Hn.setUpperBound(-1), tn.getEStructuralFeatures().push(Hn), b.Literals.D_S_RENDERER__DATASTREAM = Hn;
    const Kt = new Jn();
    Kt.setContainment(!0), Kt.setName("observations"), Kt.setLowerBound(0), Kt.setUpperBound(-1), tn.getEStructuralFeatures().push(Kt), b.Literals.D_S_RENDERER__OBSERVATIONS = Kt;
    const Xn = new Jn();
    Xn.setContainment(!0), Xn.setName("renderer"), Xn.setLowerBound(0), Xn.setUpperBound(1), tn.getEStructuralFeatures().push(Xn), b.Literals.D_S_RENDERER__RENDERER = Xn;
    const Ci = new pe();
    Ci.setName("id"), Ci.setLowerBound(0), Ci.setUpperBound(1), tn.getEStructuralFeatures().push(Ci), b.Literals.D_S_RENDERER__ID = Ci;
    const hi = new pe();
    hi.setName("placement"), hi.setLowerBound(0), hi.setUpperBound(1), tn.getEStructuralFeatures().push(hi), b.Literals.D_S_RENDERER__PLACEMENT = hi;
    const Rn = new zn();
    Rn.setName("Placement"), Rn.setAbstract(!1), Rn.setInterface(!1), this.getEClassifiers().push(Rn), Rn.setEPackage(this), b.Literals.PLACEMENT = Rn;
    const Oi = new pe();
    Oi.setName("placement"), Oi.setLowerBound(0), Oi.setUpperBound(1), Rn.getEStructuralFeatures().push(Oi), b.Literals.PLACEMENT__PLACEMENT = Oi;
    const Sn = new zn();
    Sn.setName("Observation"), Sn.setAbstract(!1), Sn.setInterface(!1), this.getEClassifiers().push(Sn), Sn.setEPackage(this), b.Literals.OBSERVATION = Sn;
    const Yn = new pe();
    Yn.setName("setting"), Yn.setLowerBound(0), Yn.setUpperBound(1), Sn.getEStructuralFeatures().push(Yn), b.Literals.OBSERVATION__SETTING = Yn;
    const tr = new pe();
    tr.setName("component"), tr.setLowerBound(0), tr.setUpperBound(1), Sn.getEStructuralFeatures().push(tr), b.Literals.OBSERVATION__COMPONENT = tr;
    const Qn = new Jn();
    Qn.setContainment(!0), Qn.setName("renderer"), Qn.setLowerBound(0), Qn.setUpperBound(1), Sn.getEStructuralFeatures().push(Qn), b.Literals.OBSERVATION__RENDERER = Qn;
    const Li = new Jn();
    Li.setContainment(!0), Li.setName("conditions"), Li.setLowerBound(0), Li.setUpperBound(-1), Sn.getEStructuralFeatures().push(Li), b.Literals.OBSERVATION__CONDITIONS = Li;
    const qn = new zn();
    qn.setName("Condition"), qn.setAbstract(!1), qn.setInterface(!1), this.getEClassifiers().push(qn), qn.setEPackage(this), b.Literals.CONDITION = qn;
    const ei = new pe();
    ei.setName("prop"), ei.setLowerBound(0), ei.setUpperBound(1), qn.getEStructuralFeatures().push(ei), b.Literals.CONDITION__PROP = ei;
    const Ii = new pe();
    Ii.setName("comperator"), Ii.setLowerBound(0), Ii.setUpperBound(1), qn.getEStructuralFeatures().push(Ii), b.Literals.CONDITION__COMPERATOR = Ii;
    const Ni = new pe();
    Ni.setName("value"), Ni.setLowerBound(0), Ni.setUpperBound(1), qn.getEStructuralFeatures().push(Ni), b.Literals.CONDITION__VALUE = Ni;
    const nn = new zn();
    nn.setName("Renderer"), nn.setAbstract(!1), nn.setInterface(!1), this.getEClassifiers().push(nn), nn.setEPackage(this), b.Literals.RENDERER = nn;
    const ti = new pe();
    ti.setName("name"), ti.setLowerBound(0), ti.setUpperBound(1), nn.getEStructuralFeatures().push(ti), b.Literals.RENDERER__NAME = ti;
    const Er = new Jn();
    Er.setContainment(!0), Er.setName("thing"), Er.setLowerBound(0), Er.setUpperBound(-1), nn.getEStructuralFeatures().push(Er), b.Literals.RENDERER__THING = Er;
    const Di = new Jn();
    Di.setContainment(!0), Di.setName("renderer"), Di.setLowerBound(0), Di.setUpperBound(1), nn.getEStructuralFeatures().push(Di), b.Literals.RENDERER__RENDERER = Di;
    const di = new Jn();
    di.setContainment(!0), di.setName("ds_renderer"), di.setLowerBound(0), di.setUpperBound(-1), nn.getEStructuralFeatures().push(di), b.Literals.RENDERER__DS_RENDERER = di;
    const ni = new pe();
    ni.setName("ObservationrefreshTime"), ni.setLowerBound(0), ni.setUpperBound(1), nn.getEStructuralFeatures().push(ni), b.Literals.RENDERER__OBSERVATIONREFRESH_TIME = ni;
    const nr = new pe();
    nr.setName("lastUpdate"), nr.setLowerBound(0), nr.setUpperBound(1), nn.getEStructuralFeatures().push(nr), b.Literals.RENDERER__LAST_UPDATE = nr;
    const Tr = new pe();
    Tr.setName("id"), Tr.setLowerBound(0), Tr.setUpperBound(1), nn.getEStructuralFeatures().push(Tr), b.Literals.RENDERER__ID = Tr;
    const x = new zn();
    x.setName("MapProps"), x.setAbstract(!1), x.setInterface(!1), this.getEClassifiers().push(x), x.setEPackage(this), b.Literals.MAP_PROPS = x;
    const ce = new pe();
    ce.setName("stroke"), ce.setLowerBound(0), ce.setUpperBound(1), x.getEStructuralFeatures().push(ce), b.Literals.MAP_PROPS__STROKE = ce;
    const q = new pe();
    q.setName("color"), q.setLowerBound(0), q.setUpperBound(1), x.getEStructuralFeatures().push(q), b.Literals.MAP_PROPS__COLOR = q;
    const ve = new pe();
    ve.setName("weight"), ve.setLowerBound(0), ve.setUpperBound(1), x.getEStructuralFeatures().push(ve), b.Literals.MAP_PROPS__WEIGHT = ve;
    const ke = new pe();
    ke.setName("opacity"), ke.setLowerBound(0), ke.setUpperBound(1), x.getEStructuralFeatures().push(ke), b.Literals.MAP_PROPS__OPACITY = ke;
    const Pe = new pe();
    Pe.setName("lineCap"), Pe.setLowerBound(0), Pe.setUpperBound(1), x.getEStructuralFeatures().push(Pe), b.Literals.MAP_PROPS__LINE_CAP = Pe;
    const ot = new pe();
    ot.setName("dashOffset"), ot.setLowerBound(0), ot.setUpperBound(1), x.getEStructuralFeatures().push(ot), b.Literals.MAP_PROPS__DASH_OFFSET = ot;
    const ft = new pe();
    ft.setName("fill"), ft.setLowerBound(0), ft.setUpperBound(1), x.getEStructuralFeatures().push(ft), b.Literals.MAP_PROPS__FILL = ft;
    const Ft = new pe();
    Ft.setName("fillOpacity"), Ft.setLowerBound(0), Ft.setUpperBound(1), x.getEStructuralFeatures().push(Ft), b.Literals.MAP_PROPS__FILL_OPACITY = Ft;
    const Pt = new pe();
    Pt.setName("fillColor"), Pt.setLowerBound(0), Pt.setUpperBound(1), x.getEStructuralFeatures().push(Pt), b.Literals.MAP_PROPS__FILL_COLOR = Pt;
    const Lt = new pe();
    Lt.setName("className"), Lt.setLowerBound(0), Lt.setUpperBound(1), x.getEStructuralFeatures().push(Lt), b.Literals.MAP_PROPS__CLASS_NAME = Lt;
    const de = new zn();
    de.setName("ThingClickPayload"), de.setAbstract(!1), de.setInterface(!1), this.getEClassifiers().push(de), de.setEPackage(this), b.Literals.THING_CLICK_PAYLOAD = de;
    const Pn = new pe();
    Pn.setName("id"), Pn.setLowerBound(0), Pn.setUpperBound(1), de.getEStructuralFeatures().push(Pn), b.Literals.THING_CLICK_PAYLOAD__ID = Pn;
    const ii = new pe();
    ii.setName("name"), ii.setLowerBound(0), ii.setUpperBound(1), de.getEStructuralFeatures().push(ii), b.Literals.THING_CLICK_PAYLOAD__NAME = ii;
    const Wi = new pe();
    Wi.setName("description"), Wi.setLowerBound(0), Wi.setUpperBound(1), de.getEStructuralFeatures().push(Wi), b.Literals.THING_CLICK_PAYLOAD__DESCRIPTION = Wi;
    const fi = new pe();
    fi.setName("properties"), fi.setLowerBound(0), fi.setUpperBound(1), de.getEStructuralFeatures().push(fi), b.Literals.THING_CLICK_PAYLOAD__PROPERTIES = fi;
    const ir = new pe();
    ir.setName("location"), ir.setLowerBound(0), ir.setUpperBound(1), de.getEStructuralFeatures().push(ir), b.Literals.THING_CLICK_PAYLOAD__LOCATION = ir;
    const xt = new pe();
    xt.setName("rendererId"), xt.setLowerBound(0), xt.setUpperBound(1), de.getEStructuralFeatures().push(xt), b.Literals.THING_CLICK_PAYLOAD__RENDERER_ID = xt;
    const Gt = new Jn();
    Gt.setContainment(!0), Gt.setName("datastreams"), Gt.setLowerBound(0), Gt.setUpperBound(-1), de.getEStructuralFeatures().push(Gt), b.Literals.THING_CLICK_PAYLOAD__DATASTREAMS = Gt;
    const pt = new zn();
    pt.setName("DatastreamSummary"), pt.setAbstract(!1), pt.setInterface(!1), this.getEClassifiers().push(pt), pt.setEPackage(this), b.Literals.DATASTREAM_SUMMARY = pt;
    const An = new pe();
    An.setName("id"), An.setLowerBound(0), An.setUpperBound(1), pt.getEStructuralFeatures().push(An), b.Literals.DATASTREAM_SUMMARY__ID = An;
    const bn = new pe();
    bn.setName("name"), bn.setLowerBound(0), bn.setUpperBound(1), pt.getEStructuralFeatures().push(bn), b.Literals.DATASTREAM_SUMMARY__NAME = bn;
    const ri = new pe();
    ri.setName("observedProperty"), ri.setLowerBound(0), ri.setUpperBound(1), pt.getEStructuralFeatures().push(ri), b.Literals.DATASTREAM_SUMMARY__OBSERVED_PROPERTY = ri;
    const Nt = new zn();
    Nt.setName("DatastreamClickPayload"), Nt.setAbstract(!1), Nt.setInterface(!1), this.getEClassifiers().push(Nt), Nt.setEPackage(this), b.Literals.DATASTREAM_CLICK_PAYLOAD = Nt;
    const Zi = new pe();
    Zi.setName("id"), Zi.setLowerBound(0), Zi.setUpperBound(1), Nt.getEStructuralFeatures().push(Zi), b.Literals.DATASTREAM_CLICK_PAYLOAD__ID = Zi;
    const kn = new pe();
    kn.setName("name"), kn.setLowerBound(0), kn.setUpperBound(1), Nt.getEStructuralFeatures().push(kn), b.Literals.DATASTREAM_CLICK_PAYLOAD__NAME = kn;
    const cn = new pe();
    cn.setName("thingId"), cn.setLowerBound(0), cn.setUpperBound(1), Nt.getEStructuralFeatures().push(cn), b.Literals.DATASTREAM_CLICK_PAYLOAD__THING_ID = cn;
    const $t = new pe();
    $t.setName("unitOfMeasurement"), $t.setLowerBound(0), $t.setUpperBound(1), Nt.getEStructuralFeatures().push($t), b.Literals.DATASTREAM_CLICK_PAYLOAD__UNIT_OF_MEASUREMENT = $t;
    const Ri = new pe();
    Ri.setName("observedProperty"), Ri.setLowerBound(0), Ri.setUpperBound(1), Nt.getEStructuralFeatures().push(Ri), b.Literals.DATASTREAM_CLICK_PAYLOAD__OBSERVED_PROPERTY = Ri;
    const Fr = new pe();
    Fr.setName("latestObservationResult"), Fr.setLowerBound(0), Fr.setUpperBound(1), Nt.getEStructuralFeatures().push(Fr), b.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_RESULT = Fr;
    const fs = new pe();
    fs.setName("latestObservationTime"), fs.setLowerBound(0), fs.setUpperBound(1), Nt.getEStructuralFeatures().push(fs), b.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_TIME = fs;
    const pi = new zn();
    pi.setName("ObservationClickPayload"), pi.setAbstract(!1), pi.setInterface(!1), this.getEClassifiers().push(pi), pi.setEPackage(this), b.Literals.OBSERVATION_CLICK_PAYLOAD = pi;
    const wr = new pe();
    wr.setName("id"), wr.setLowerBound(0), wr.setUpperBound(1), pi.getEStructuralFeatures().push(wr), b.Literals.OBSERVATION_CLICK_PAYLOAD__ID = wr;
    const Hi = new pe();
    Hi.setName("datastreamId"), Hi.setLowerBound(0), Hi.setUpperBound(1), pi.getEStructuralFeatures().push(Hi), b.Literals.OBSERVATION_CLICK_PAYLOAD__DATASTREAM_ID = Hi;
    const $r = new pe();
    $r.setName("phenomenonTime"), $r.setLowerBound(0), $r.setUpperBound(1), pi.getEStructuralFeatures().push($r), b.Literals.OBSERVATION_CLICK_PAYLOAD__PHENOMENON_TIME = $r;
    const Jr = new pe();
    Jr.setName("result"), Jr.setLowerBound(0), Jr.setUpperBound(1), pi.getEStructuralFeatures().push(Jr), b.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT = Jr;
    const rr = new pe();
    rr.setName("resultTime"), rr.setLowerBound(0), rr.setUpperBound(1), pi.getEStructuralFeatures().push(rr), b.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT_TIME = rr;
    const et = new zn();
    et.setName("MapClickPayload"), et.setAbstract(!1), et.setInterface(!1), this.getEClassifiers().push(et), et.setEPackage(this), b.Literals.MAP_CLICK_PAYLOAD = et;
    const bt = new pe();
    bt.setName("lat"), bt.setLowerBound(0), bt.setUpperBound(1), et.getEStructuralFeatures().push(bt), b.Literals.MAP_CLICK_PAYLOAD__LAT = bt;
    const sr = new pe();
    sr.setName("lon"), sr.setLowerBound(0), sr.setUpperBound(1), et.getEStructuralFeatures().push(sr), b.Literals.MAP_CLICK_PAYLOAD__LON = sr;
    const xn = new zn();
    xn.setName("LocationClickPayload"), xn.setAbstract(!1), xn.setInterface(!1), this.getEClassifiers().push(xn), xn.setEPackage(this), b.Literals.LOCATION_CLICK_PAYLOAD = xn;
    const gi = new pe();
    gi.setName("id"), gi.setLowerBound(0), gi.setUpperBound(1), xn.getEStructuralFeatures().push(gi), b.Literals.LOCATION_CLICK_PAYLOAD__ID = gi;
    const Mr = new pe();
    Mr.setName("name"), Mr.setLowerBound(0), Mr.setUpperBound(1), xn.getEStructuralFeatures().push(Mr), b.Literals.LOCATION_CLICK_PAYLOAD__NAME = Mr;
    const Ve = new pe();
    Ve.setName("geometry"), Ve.setLowerBound(0), Ve.setUpperBound(1), xn.getEStructuralFeatures().push(Ve), b.Literals.LOCATION_CLICK_PAYLOAD__GEOMETRY = Ve;
    const Ct = new pe();
    Ct.setName("thingIds"), Ct.setLowerBound(0), Ct.setUpperBound(-1), xn.getEStructuralFeatures().push(Ct), b.Literals.LOCATION_CLICK_PAYLOAD__THING_IDS = Ct, b.Literals.MAP_WIDGET_INTERFACE.getESuperTypes().push(No("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("WidgetActionInterface")), b.Literals.THING_CLICK_PAYLOAD.getESuperTypes().push(No("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), b.Literals.DATASTREAM_CLICK_PAYLOAD.getESuperTypes().push(No("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), b.Literals.OBSERVATION_CLICK_PAYLOAD.getESuperTypes().push(No("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), b.Literals.MAP_CLICK_PAYLOAD.getESuperTypes().push(No("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), b.Literals.LOCATION_CLICK_PAYLOAD.getESuperTypes().push(No("http://org.eclipse.daanse.board.app.lib.events").getEClassifier("Payload")), b.Literals.MAP_SETTINGS__DATASOURCE_ID.setEType(_e().getEClassifier("EString")), b.Literals.MAP_SETTINGS__DATASOURCE_IDS.setEType(_e().getEClassifier("EString")), b.Literals.MAP_SETTINGS__BASE_MAP_URL.setEType(_e().getEClassifier("EString")), b.Literals.MAP_SETTINGS__ZOOM.setEType(_e().getEClassifier("EInt")), b.Literals.MAP_SETTINGS__CENTER.setEType(_e().getEClassifier("EDouble")), b.Literals.MAP_SETTINGS__ATTRIBUTION.setEType(_e().getEClassifier("EString")), b.Literals.MAP_SETTINGS__LAYERS.setEType(b.Literals.LAYER), b.Literals.MAP_SETTINGS__STYLES.setEType(b.Literals.D_S_RENDERER), b.Literals.MAP_SETTINGS__O_G_C_SSTYLES.setEType(b.Literals.RENDERER), b.Literals.MAP_SETTINGS__SERVICES.setEType(b.Literals.SERVICE), b.Literals.MAP_SETTINGS__FIXED.setEType(_e().getEClassifier("EBoolean")), b.Literals.MAP_SETTINGS__ENABLE_CLUSTERING.setEType(_e().getEClassifier("EBoolean")), b.Literals.MAP_SETTINGS__SELECTION_HIGHLIGHT_COLOR.setEType(_e().getEClassifier("EString")), b.Literals.MAP_SETTINGS__SELECTED_THING_ID.setEType(_e().getEClassifier("EString")), b.Literals.LAYER__DATASOURCE_ID.setEType(_e().getEClassifier("EString")), b.Literals.LAYER__SERVICE.setEType(_e().getEClassifier("EJavaObject")), b.Literals.LAYER__TYPE.setEType(_e().getEClassifier("EString")), b.Literals.LAYER__CHILDS.setEType(b.Literals.LAYER), b.Literals.LAYER__LEVEL.setEType(_e().getEClassifier("EInt")), b.Literals.LAYER__STYLE_IDS.setEType(_e().getEClassifier("EString")), b.Literals.LAYER__NAME.setEType(_e().getEClassifier("EString")), b.Literals.LAYER__TITLE.setEType(_e().getEClassifier("EString")), b.Literals.LAYER__ATTRIBUTION.setEType(_e().getEClassifier("EString")), b.Literals.LAYER__GEO_JSON.setEType(_e().getEClassifier("EJavaObject")), b.Literals.LAYER__WFS_SERVICE.setEType(_e().getEClassifier("EJavaObject")), b.Literals.LAYER__OPACITY.setEType(_e().getEClassifier("EDouble")), b.Literals.SERVICE__TYPE.setEType(_e().getEClassifier("EString")), b.Literals.SERVICE__URL.setEType(_e().getEClassifier("EString")), b.Literals.SERVICE__SERVICE.setEType(_e().getEClassifier("EJavaObject")), b.Literals.SERVICE__ID.setEType(_e().getEClassifier("EString")), b.Literals.ICON_SETTINGS__CURRENT_ICON.setEType(_e().getEClassifier("EString")), b.Literals.ICON_SETTINGS__ICON_COLOR.setEType(No("org.eclipse.daanse.board.app.ui.vue.composables").getEClassifier("VariableWrapper")), b.Literals.ICON_SETTINGS__ICON_SIZE.setEType(_e().getEClassifier("EInt")), b.Literals.ICON_SETTINGS__IS_ICON_FILLED.setEType(_e().getEClassifier("EBoolean")), b.Literals.ICON_SETTINGS__STROKE_WEIGHT.setEType(_e().getEClassifier("EInt")), b.Literals.ICON_SETTINGS__OPTIC_SIZE.setEType(_e().getEClassifier("EInt")), b.Literals.ICON_SETTINGS__GRADE.setEType(_e().getEClassifier("EInt")), b.Literals.POINT_PIN__COLOR.setEType(_e().getEClassifier("EString")), b.Literals.POINT_PIN__SOLID.setEType(_e().getEClassifier("EBoolean")), b.Literals.POINT_AND_AREA_SETTINGS__SHOW__SUB_ELEMENTS.setEType(_e().getEClassifier("EBoolean")), b.Literals.POINT_AND_AREA_SETTINGS__POINT_RENDER_AS.setEType(_e().getEClassifier("EString")), b.Literals.POINT_AND_AREA_SETTINGS__POINT_PROP.setEType(_e().getEClassifier("EString")), b.Literals.POINT_AND_AREA_SETTINGS__POINT.setEType(b.Literals.ICON_SETTINGS), b.Literals.POINT_AND_AREA_SETTINGS__POINT_PIN.setEType(b.Literals.POINT_PIN), b.Literals.POINT_AND_AREA_SETTINGS__AREA.setEType(b.Literals.MAP_PROPS), b.Literals.POINT_AND_AREA_SETTINGS__LABEL.setEType(_e().getEClassifier("EJavaObject")), b.Literals.D_S_RENDERER__NAME.setEType(_e().getEClassifier("EString")), b.Literals.D_S_RENDERER__DATASTREAM.setEType(b.Literals.CONDITION), b.Literals.D_S_RENDERER__OBSERVATIONS.setEType(b.Literals.OBSERVATION), b.Literals.D_S_RENDERER__RENDERER.setEType(b.Literals.POINT_AND_AREA_SETTINGS), b.Literals.D_S_RENDERER__ID.setEType(_e().getEClassifier("EString")), b.Literals.OBSERVATION__SETTING.setEType(_e().getEClassifier("EJavaObject")), b.Literals.OBSERVATION__COMPONENT.setEType(_e().getEClassifier("EString")), b.Literals.OBSERVATION__RENDERER.setEType(b.Literals.POINT_AND_AREA_SETTINGS), b.Literals.OBSERVATION__CONDITIONS.setEType(b.Literals.CONDITION), b.Literals.CONDITION__PROP.setEType(_e().getEClassifier("EString")), b.Literals.CONDITION__VALUE.setEType(_e().getEClassifier("EString")), b.Literals.RENDERER__NAME.setEType(_e().getEClassifier("EString")), b.Literals.RENDERER__THING.setEType(b.Literals.CONDITION), b.Literals.RENDERER__RENDERER.setEType(b.Literals.POINT_AND_AREA_SETTINGS), b.Literals.RENDERER__DS_RENDERER.setEType(b.Literals.D_S_RENDERER), b.Literals.RENDERER__OBSERVATIONREFRESH_TIME.setEType(_e().getEClassifier("EInt")), b.Literals.RENDERER__LAST_UPDATE.setEType(_e().getEClassifier("EInt")), b.Literals.RENDERER__ID.setEType(_e().getEClassifier("EString")), b.Literals.MAP_PROPS__STROKE.setEType(_e().getEClassifier("EBoolean")), b.Literals.MAP_PROPS__COLOR.setEType(_e().getEClassifier("EString")), b.Literals.MAP_PROPS__WEIGHT.setEType(_e().getEClassifier("EInt")), b.Literals.MAP_PROPS__OPACITY.setEType(_e().getEClassifier("EDouble")), b.Literals.MAP_PROPS__LINE_CAP.setEType(_e().getEClassifier("EString")), b.Literals.MAP_PROPS__DASH_OFFSET.setEType(_e().getEClassifier("EString")), b.Literals.MAP_PROPS__FILL.setEType(_e().getEClassifier("EBoolean")), b.Literals.MAP_PROPS__FILL_OPACITY.setEType(_e().getEClassifier("EDouble")), b.Literals.MAP_PROPS__FILL_COLOR.setEType(_e().getEClassifier("EString")), b.Literals.MAP_PROPS__CLASS_NAME.setEType(_e().getEClassifier("EString")), b.Literals.THING_CLICK_PAYLOAD__ID.setEType(_e().getEClassifier("EString")), b.Literals.THING_CLICK_PAYLOAD__NAME.setEType(_e().getEClassifier("EString")), b.Literals.THING_CLICK_PAYLOAD__DESCRIPTION.setEType(_e().getEClassifier("EString")), b.Literals.THING_CLICK_PAYLOAD__PROPERTIES.setEType(_e().getEClassifier("EJavaObject")), b.Literals.THING_CLICK_PAYLOAD__LOCATION.setEType(_e().getEClassifier("EJavaObject")), b.Literals.THING_CLICK_PAYLOAD__RENDERER_ID.setEType(_e().getEClassifier("EString")), b.Literals.THING_CLICK_PAYLOAD__DATASTREAMS.setEType(b.Literals.DATASTREAM_SUMMARY), b.Literals.DATASTREAM_SUMMARY__ID.setEType(_e().getEClassifier("EString")), b.Literals.DATASTREAM_SUMMARY__NAME.setEType(_e().getEClassifier("EString")), b.Literals.DATASTREAM_SUMMARY__OBSERVED_PROPERTY.setEType(_e().getEClassifier("EString")), b.Literals.DATASTREAM_CLICK_PAYLOAD__ID.setEType(_e().getEClassifier("EString")), b.Literals.DATASTREAM_CLICK_PAYLOAD__NAME.setEType(_e().getEClassifier("EString")), b.Literals.DATASTREAM_CLICK_PAYLOAD__THING_ID.setEType(_e().getEClassifier("EString")), b.Literals.DATASTREAM_CLICK_PAYLOAD__UNIT_OF_MEASUREMENT.setEType(_e().getEClassifier("EJavaObject")), b.Literals.DATASTREAM_CLICK_PAYLOAD__OBSERVED_PROPERTY.setEType(_e().getEClassifier("EString")), b.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_RESULT.setEType(_e().getEClassifier("EJavaObject")), b.Literals.DATASTREAM_CLICK_PAYLOAD__LATEST_OBSERVATION_TIME.setEType(_e().getEClassifier("EString")), b.Literals.OBSERVATION_CLICK_PAYLOAD__ID.setEType(_e().getEClassifier("EString")), b.Literals.OBSERVATION_CLICK_PAYLOAD__DATASTREAM_ID.setEType(_e().getEClassifier("EString")), b.Literals.OBSERVATION_CLICK_PAYLOAD__PHENOMENON_TIME.setEType(_e().getEClassifier("EString")), b.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT.setEType(_e().getEClassifier("EJavaObject")), b.Literals.OBSERVATION_CLICK_PAYLOAD__RESULT_TIME.setEType(_e().getEClassifier("EString")), b.Literals.MAP_CLICK_PAYLOAD__LAT.setEType(_e().getEClassifier("EDouble")), b.Literals.MAP_CLICK_PAYLOAD__LON.setEType(_e().getEClassifier("EDouble")), b.Literals.LOCATION_CLICK_PAYLOAD__ID.setEType(_e().getEClassifier("EString")), b.Literals.LOCATION_CLICK_PAYLOAD__NAME.setEType(_e().getEClassifier("EString")), b.Literals.LOCATION_CLICK_PAYLOAD__GEOMETRY.setEType(_e().getEClassifier("EJavaObject")), b.Literals.LOCATION_CLICK_PAYLOAD__THING_IDS.setEType(_e().getEClassifier("EString"));
  }
}
class Je extends Al {
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
    return b.Literals.THING_CLICK_PAYLOAD;
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
      getFeature: () => this.eClass().getEStructuralFeature(Je.ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Je.ID,
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
      getFeature: () => this.eClass().getEStructuralFeature(Je.NAME),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Je.NAME,
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
      getFeature: () => this.eClass().getEStructuralFeature(Je.DESCRIPTION),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Je.DESCRIPTION,
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
      getFeature: () => this.eClass().getEStructuralFeature(Je.PROPERTIES),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Je.PROPERTIES,
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
      getFeature: () => this.eClass().getEStructuralFeature(Je.LOCATION),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Je.LOCATION,
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
      getFeature: () => this.eClass().getEStructuralFeature(Je.RENDERER_ID),
      getOldValue: () => n,
      getNewValue: () => i,
      getPosition: () => -1,
      wasSet: () => !0,
      isTouch: () => !1,
      isReset: () => !1,
      getFeatureID: () => Je.RENDERER_ID,
      merge: () => !1
    });
  }
  get datastreams() {
    return this._datastreams || (this._datastreams = ls(this, this.eClass().getEStructuralFeature("datastreams"))), this._datastreams;
  }
  // Reflective API
  /**
   * Returns the value of the given feature
   */
  eGet(i) {
    switch (this.eClass().getFeatureID(i)) {
      case Je.ID:
        return this.id;
      case Je.NAME:
        return this.name;
      case Je.DESCRIPTION:
        return this.description;
      case Je.PROPERTIES:
        return this.properties;
      case Je.LOCATION:
        return this.location;
      case Je.RENDERER_ID:
        return this.rendererId;
      case Je.DATASTREAMS:
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
      case Je.ID:
        this.id = n, super.eSet(i, n);
        break;
      case Je.NAME:
        this.name = n, super.eSet(i, n);
        break;
      case Je.DESCRIPTION:
        this.description = n, super.eSet(i, n);
        break;
      case Je.PROPERTIES:
        this.properties = n, super.eSet(i, n);
        break;
      case Je.LOCATION:
        this.location = n, super.eSet(i, n);
        break;
      case Je.RENDERER_ID:
        this.rendererId = n, super.eSet(i, n);
        break;
      case Je.DATASTREAMS:
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
      case Je.ID:
        return this._id !== void 0;
      case Je.NAME:
        return this._name !== void 0;
      case Je.DESCRIPTION:
        return this._description !== void 0;
      case Je.PROPERTIES:
        return this._properties !== void 0;
      case Je.LOCATION:
        return this._location !== void 0;
      case Je.RENDERER_ID:
        return this._rendererId !== void 0;
      case Je.DATASTREAMS:
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
      case Je.ID:
        this._id = void 0;
        return;
      case Je.NAME:
        this._name = void 0;
        return;
      case Je.DESCRIPTION:
        this._description = void 0;
        return;
      case Je.PROPERTIES:
        this._properties = void 0;
        return;
      case Je.LOCATION:
        this._location = void 0;
        return;
      case Je.RENDERER_ID:
        this._rendererId = void 0;
        return;
      case Je.DATASTREAMS:
        this._datastreams && this._datastreams.clear();
        return;
      default:
        super.eUnset(i);
    }
  }
  /**
   * What this object is when it is stored.
   *
   * The plain names, not the private fields the getters sit in: those
   * are this class's business, and a stored board is read by things
   * that only know the model.
   */
  toJSON() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      properties: this.properties,
      location: this.location,
      rendererId: this.rendererId,
      datastreams: this.datastreams?.toArray?.() ?? this.datastreams
    };
  }
}
const MT = /* @__PURE__ */ it({
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
    const i = t1.createLogger("daanse:maps:click"), n = o, l = me({}), h = wt(Fp.TINY_EMITTER), f = Xt(() => {
      const Z = [], J = [];
      for (const P of n.renderers)
        for (const U of n.locations) {
          const re = U.things ?? [];
          for (const fe of re) {
            if (!n.compareThing(fe, P)) continue;
            const Ee = fe["@iot.id"] || fe.iotId || "", he = U["@iot.id"] || "", Oe = n.getPoint(U.location), le = n.isFeatureCollection(U.location), ne = n.isPoint(U.location);
            Z.push({
              key: `${P.id}-${he}-${Ee}`,
              thing: fe,
              location: U,
              renderer: P,
              point: Oe,
              geoJson: le && !ne ? U.location : null,
              isArea: le && !ne
            });
            const V = fe.datastreams ?? [];
            for (const ge of V) {
              const Ae = ge.iotId || "";
              for (const te of P.ds_renderer) {
                if (!n.compareDatastream(ge, te)) continue;
                const oe = ge.observedArea ? n.transformToGeoJson(ge.observedArea) : null, K = te.placement === Mo.Thing ? Oe : oe ? n.getPointformArea(oe) : null, Fe = te.observations?.some(
                  (Me) => !n.getById(Me.component)?.isLayerRenderer
                ), Le = (te.renderer.point_render_as !== "none" || Fe) && !!K;
                J.push({
                  key: `${P.id}-${te.id}-${Ae}`,
                  datastream: ge,
                  thing: fe,
                  location: U,
                  renderer: P,
                  subrenderer: te,
                  point: K,
                  observedAreaGeoJson: oe,
                  showMarker: Le
                });
              }
            }
          }
        }
      return { things: Z, datastreams: J };
    }), g = (Z, J, P) => {
      if (!n.widgetId) return;
      const U = new Je();
      U.id = (Z["@iot.id"] || Z.iotId) ?? "", U.name = Z.name ?? "", U.description = Z.description ?? "", U.properties = Z.properties, U.location = J.location, U.rendererId = P.id ?? "";
      const re = Z.datastreams || Z.Datastreams || [];
      for (const Ee of re) {
        const he = new In();
        he.id = Ee["@iot.id"] || Ee.iotId || "", he.name = Ee.name ?? "", he.observedProperty = Ee.ObservedProperty?.name || Ee.observedProperty?.name || "", U.datastreams.add(he);
      }
      const fe = {
        type: "widget:MapWidget:click_on_thing",
        widgetId: n.widgetId,
        payload: U,
        timestamp: Date.now()
      };
      console.log("🗺️ Map Widget: Emitting thing click event", fe), h.emit("widget:MapWidget:click_on_thing", fe);
    }, v = (Z, J, P) => {
      if (i("Emitting datastream click, widgetId: %s", n.widgetId), !n.widgetId) {
        i("⚠️ widgetId is undefined, not emitting event");
        return;
      }
      const U = new We();
      U.id = (Z.iotId || Z["@iot.id"]) ?? "", U.name = Z.name ?? "", U.thingId = (J["@iot.id"] || J.iotId) ?? "", U.unitOfMeasurement = Z.unitOfMeasurement ?? "", U.observedProperty = Z.observedProperty?.name ?? "";
      const re = Z.observations || [];
      if (re.length > 0) {
        const fe = re[re.length - 1];
        U.latestObservationResult = fe.result ?? "", U.latestObservationTime = fe.phenomenonTime ?? "";
      }
      h.emit("widget:MapWidget:click_on_datastream", {
        type: "widget:MapWidget:click_on_datastream",
        widgetId: n.widgetId,
        payload: U,
        timestamp: Date.now()
      });
    }, y = (Z, J, P) => {
      i("🖱️ Thing clicked: %o", Z), l.value[Z.iotId ?? "null"] = !l.value[Z.iotId ?? "null"], g(Z, J, P);
    }, m = (Z, J, P) => {
      i("🖱️ Datastream marker clicked: %o", Z), v(Z, J);
    }, A = (Z, J, P) => {
      if (!n.widgetId) return;
      const U = new Je();
      U.id = (Z["@iot.id"] || Z.iotId) ?? "", U.name = Z.name ?? "", U.description = Z.description ?? "", U.properties = Z.properties, U.location = J.location, U.rendererId = P.id ?? "", h.emit("widget:MapWidget:hover_on_thing", {
        type: "widget:MapWidget:hover_on_thing",
        widgetId: n.widgetId,
        payload: U,
        timestamp: Date.now()
      });
    }, S = (Z, J) => {
      if (!n.widgetId) return;
      const P = new We();
      P.id = (Z.iotId || Z["@iot.id"]) ?? "", P.name = Z.name ?? "", P.thingId = (J["@iot.id"] || J.iotId) ?? "", P.unitOfMeasurement = Z.unitOfMeasurement ?? "", P.observedProperty = Z.observedProperty?.name ?? "";
      const U = Z.observations || [];
      if (U.length > 0) {
        const re = U[U.length - 1];
        P.latestObservationResult = re.result ?? "", P.latestObservationTime = re.phenomenonTime ?? "";
      }
      h.emit("widget:MapWidget:hover_on_datastream", {
        type: "widget:MapWidget:hover_on_datastream",
        widgetId: n.widgetId,
        payload: P,
        timestamp: Date.now()
      });
    }, I = (Z) => n.tooltipThingId ? (Z["@iot.id"] || Z.iotId) === n.tooltipThingId : !1, D = (Z) => I(Z) && n.tooltipContent || null, B = (Z) => Z.name || Z.description || Z.iotId || "", G = (Z, J) => {
      const P = [];
      J.name && P.push(J.name), Z.name && P.push(Z.name);
      const U = Z.observations || [];
      if (U.length > 0) {
        const re = U[U.length - 1], fe = Z.unitOfMeasurement?.symbol || "";
        P.push(`${re.result} ${fe}`);
      }
      return P.join(" - ");
    }, j = (Z) => n.selectedThingId ? (Z["@iot.id"] || Z.iotId) === n.selectedThingId : !1, W = Xt(() => n.selectionHighlightColor || "#ff0000");
    return (Z, J) => (z(), X(Re, null, [
      (z(!0), X(Re, null, zt(f.value.things, (P) => (z(), X(Re, {
        key: P.key + "area"
      }, [
        P.isArea ? (z(), dt(C(ko), {
          key: 0,
          ref_for: !0,
          ref: "thingsLayer",
          geojson: P.location.location,
          options: o.layerOptions,
          "options-style": () => j(P.thing) ? { ...P.renderer.renderer.area, fillColor: W.value, color: W.value, fillOpacity: 0.5, weight: 3 } : P.renderer.renderer.area
        }, null, 8, ["geojson", "options", "options-style"])) : Be("", !0)
      ], 64))), 128)),
      (z(!0), X(Re, null, zt(f.value.things, (P) => (z(), X(Re, {
        key: P.key + "marker"
      }, [
        P.point ? (z(), dt(C(El), {
          key: 0,
          "lat-lng": P.point,
          options: { pane: o.markerPane },
          onClick: (U) => y(P.thing, P.location, P.renderer),
          onMouseenter: (U) => A(P.thing, P.location, P.renderer)
        }, {
          default: Ke(() => [
            ue(C(yl), { "class-name": "someExtraClass" }, {
              default: Ke(() => [
                ue(Sl, {
                  "render-as": P.renderer.renderer.point_render_as,
                  "background-color": P.renderer.renderer.pointPin?.color,
                  "icon-config": P.renderer.renderer.point,
                  "property-value": P.thing[P.renderer.renderer.point_prop ?? ""],
                  "image-url": P.renderer.renderer.point_image_url,
                  "image-size": P.renderer.renderer.point_image_size || 32,
                  "is-solid": P.renderer.renderer.pointPin?.solid,
                  "is-selected": j(P.thing),
                  "selection-color": W.value
                }, null, 8, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size", "is-solid", "is-selected", "selection-color"])
              ]),
              _: 2
            }, 1024),
            ue(C(Xf), {
              options: {
                permanent: I(P.thing),
                direction: "top",
                offset: [0, -20]
              }
            }, {
              default: Ke(() => [
                Qi(Ie(D(P.thing) || B(P.thing)), 1)
              ]),
              _: 2
            }, 1032, ["options"])
          ]),
          _: 2
        }, 1032, ["lat-lng", "options", "onClick", "onMouseenter"])) : Be("", !0)
      ], 64))), 128)),
      (z(!0), X(Re, null, zt(f.value.datastreams, (P) => (z(), X(Re, {
        key: P.key + "dsarea"
      }, [
        P.observedAreaGeoJson ? (z(), dt(C(ko), {
          key: 0,
          ref_for: !0,
          ref: "thingsLayer",
          geojson: P.observedAreaGeoJson,
          options: { ...o.layerOptions, pane: o.areaPane || "overlayPane" },
          "options-style": () => P.subrenderer.renderer.area
        }, null, 8, ["geojson", "options", "options-style"])) : Be("", !0)
      ], 64))), 128)),
      (z(!0), X(Re, null, zt(f.value.datastreams, (P) => (z(), X(Re, {
        key: P.key + "dslayer"
      }, [
        P.subrenderer.observations && P.datastream.observations ? (z(!0), X(Re, { key: 0 }, zt(P.subrenderer.observations, (U) => (z(), X(Re, {
          key: U.component
        }, [
          o.getById(U.component)?.isLayerRenderer ? (z(!0), X(Re, { key: 0 }, zt(P.datastream.observations, (re) => (z(), X(Re, {
            key: re.iotId
          }, [
            o.getById(U.component) && re.result ? (z(), dt(Ph(o.getById(U.component)?.component), {
              key: 0,
              config: U.setting,
              data: re.result,
              "marker-size": 0
            }, null, 8, ["config", "data"])) : Be("", !0)
          ], 64))), 128)) : Be("", !0)
        ], 64))), 128)) : Be("", !0)
      ], 64))), 128)),
      (z(!0), X(Re, null, zt(f.value.datastreams, (P) => (z(), X(Re, {
        key: P.key + "dsmarker"
      }, [
        P.showMarker ? (z(), dt(C(El), {
          key: 0,
          "lat-lng": P.point,
          options: { pane: o.markerPane },
          onClick: (U) => m(P.datastream, P.thing, P.subrenderer),
          onMouseenter: (U) => S(P.datastream, P.thing)
        }, {
          default: Ke(() => [
            ue(C(Xf), null, {
              default: Ke(() => [
                Qi(Ie(G(P.datastream, P.thing)), 1)
              ]),
              _: 2
            }, 1024),
            ue(C(yl), { "class-name": "someExtraClass" }, {
              default: Ke(() => [
                ue(Sl, {
                  "render-as": P.subrenderer.renderer.point_render_as,
                  "background-color": P.subrenderer.renderer.pointPin?.color,
                  "icon-config": P.subrenderer.renderer.point,
                  "property-value": P.datastream[P.subrenderer.renderer.point_prop ?? ""],
                  "image-url": P.subrenderer.renderer.point_image_url,
                  "image-size": P.subrenderer.renderer.point_image_size || 32,
                  "is-solid": P.subrenderer.renderer.pointPin?.solid,
                  "is-round": !0,
                  "is-selected": j(P.thing),
                  "selection-color": W.value
                }, {
                  observation: Ke(() => [
                    P.datastream.observations ? (z(!0), X(Re, { key: 0 }, zt(P.subrenderer.observations, (U) => (z(), X(Re, {
                      key: U.component
                    }, [
                      o.getById(U.component) && !o.getById(U.component)?.isLayerRenderer ? (z(), dt(Ph(o.getById(U.component)?.component), {
                        config: U.setting,
                        data: P.datastream.observations[P.subrenderer.renderer.point_render_as === "none" ? 0 : P.datastream.observations.length - 1]?.result,
                        key: P.datastream.observations[P.subrenderer.renderer.point_render_as === "none" ? 0 : P.datastream.observations.length - 1]?.phenomenonTime,
                        "marker-size": P.subrenderer.renderer.point_render_as === "image" ? 0 : P.subrenderer.renderer.point_render_as === "none" ? P.renderer.renderer.point_image_size || 32 : 45
                      }, null, 8, ["config", "data", "marker-size"])) : Be("", !0)
                    ], 64))), 128)) : Be("", !0)
                  ]),
                  _: 2
                }, 1032, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size", "is-solid", "is-selected", "selection-color"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["lat-lng", "options", "onClick", "onMouseenter"])) : Be("", !0)
      ], 64))), 128))
    ], 64));
  }
}), BT = /* @__PURE__ */ it({
  __name: "RouteLayer",
  props: {
    datasourceId: {}
  },
  setup(o) {
    const i = o, n = me(null);
    let l = null;
    const h = Xt(() => n.value?.geojson?.features ? n.value.geojson.features.filter(
      (S) => S.geometry?.type === "LineString"
    ) : []), f = Xt(() => n.value?.geojson?.features ? n.value.geojson.features.filter(
      (S) => S.geometry?.type === "Point"
    ) : []), g = Xt(() => h.value.length === 0 ? null : {
      type: "FeatureCollection",
      features: h.value
    });
    function v(S) {
      const [I, D] = S.geometry.coordinates;
      return [D, I];
    }
    function y(S) {
      const I = S.properties?.role;
      return I === "start" ? "#4caf50" : I === "end" ? "#f44336" : "#2196f3";
    }
    const m = () => ({
      color: "#c45e00",
      weight: 5,
      opacity: 0.8
    });
    async function A() {
      if (i.datasourceId)
        try {
          const I = wt(Ls).getDatasource(
            i.datasourceId
          ), D = await I.getData("object");
          n.value = D, l && l(), l = I.subscribe(async () => {
            const B = await I.getData("object");
            n.value = B;
          });
        } catch (S) {
          console.warn("RouteLayer: Could not load route data:", S);
        }
    }
    return Yt(() => {
      A();
    }), Vi(
      () => i.datasourceId,
      () => A()
    ), Cl(() => {
      l && l();
    }), (S, I) => (z(), X(Re, null, [
      g.value ? (z(), dt(C(ko), {
        key: 0,
        geojson: g.value,
        "options-style": m
      }, null, 8, ["geojson"])) : Be("", !0),
      (z(!0), X(Re, null, zt(f.value, (D, B) => (z(), dt(C(h1), {
        key: "wp-" + B,
        "lat-lng": v(D),
        radius: 8,
        "fill-color": y(D),
        color: "#fff",
        weight: 2,
        "fill-opacity": 1
      }, null, 8, ["lat-lng", "fill-color"]))), 128))
    ], 64));
  }
}), Ag = () => {
  const o = async (f, g) => {
    const v = new AbortController(), y = setTimeout(() => v.abort(), g);
    try {
      const m = await fetch(f, { signal: v.signal });
      return clearTimeout(y), m;
    } catch (m) {
      throw clearTimeout(y), m.name === "AbortError" ? new Error(`Timeout after ${g}ms`) : m;
    }
  }, i = (f, g) => {
    const v = {
      _capabilitiesUrl: g,
      _info: {},
      _layers: [],
      _operationUrls: {}
    }, y = f.querySelector("Service");
    y && (v._info.title = y.querySelector("Title")?.textContent || "", v._info.name = y.querySelector("Name")?.textContent || "", v._info.abstract = y.querySelector("Abstract")?.textContent || "");
    const m = f.querySelector("Capability > Request");
    m && ["GetMap", "GetCapabilities", "GetFeatureInfo", "GetLegendGraphic"].forEach((D) => {
      const B = m.querySelector(D);
      if (B) {
        const G = B.querySelector("DCPType > HTTP > Get > OnlineResource");
        if (G) {
          const j = G.getAttribute("xlink:href") || G.getAttribute("href");
          j && (v._operationUrls[D] = j);
        }
      }
    }), v._operationUrls.GetMap || (v._operationUrls.GetMap = g.split("?")[0]);
    const A = (I, D = []) => {
      I.querySelectorAll(":scope > Layer").forEach((G) => {
        const j = {
          name: G.querySelector(":scope > Name")?.textContent || "",
          title: G.querySelector(":scope > Title")?.textContent || "",
          abstract: G.querySelector(":scope > Abstract")?.textContent || "",
          children: []
        }, W = G.querySelector(":scope > BoundingBox, :scope > LatLonBoundingBox, :scope > EX_GeographicBoundingBox");
        W && (j.boundingBox = {
          minx: parseFloat(W.getAttribute("minx") || W.querySelector("westBoundLongitude")?.textContent || "0"),
          miny: parseFloat(W.getAttribute("miny") || W.querySelector("southBoundLatitude")?.textContent || "0"),
          maxx: parseFloat(W.getAttribute("maxx") || W.querySelector("eastBoundLongitude")?.textContent || "0"),
          maxy: parseFloat(W.getAttribute("maxy") || W.querySelector("northBoundLatitude")?.textContent || "0")
        }), A(G, j.children), D.push(j);
      });
    }, S = f.querySelector("Capability");
    return S && A(S, v._layers), v.getLayers = () => {
      const I = (D) => {
        const B = [];
        return D.forEach((G) => {
          B.push(G), G.children && G.children.length > 0 && B.push(...I(G.children));
        }), B;
      };
      return I(v._layers);
    }, v.getOperationUrl = (I) => v._operationUrls[I] || v._operationUrls.GetMap || g.split("?")[0], v;
  }, n = (f, g) => {
    const v = {
      _capabilitiesUrl: g,
      _info: {},
      _featureTypes: []
    }, y = f.querySelector("ServiceIdentification, Service");
    return y && (v._info.title = y.querySelector("Title")?.textContent || "", v._info.name = y.querySelector("Name, ServiceType")?.textContent || "", v._info.abstract = y.querySelector("Abstract")?.textContent || ""), f.querySelectorAll("FeatureType").forEach((A) => {
      v._featureTypes.push({
        name: A.querySelector("Name")?.textContent || "",
        title: A.querySelector("Title")?.textContent || "",
        abstract: A.querySelector("Abstract")?.textContent || ""
      });
    }), v.getFeatureTypes = () => v._featureTypes, v;
  };
  return {
    createServiceWMS: async (f) => {
      try {
        const g = f.includes("?") ? `${f}&SERVICE=WMS&REQUEST=GetCapabilities` : `${f}?SERVICE=WMS&REQUEST=GetCapabilities`;
        console.log("[Service.ts] Fetching WMS capabilities from:", g);
        const v = await o(g, 15e3);
        if (!v.ok)
          throw new Error(`HTTP ${v.status}: ${v.statusText}`);
        const y = await v.text(), A = new DOMParser().parseFromString(y, "text/xml");
        if (A.querySelector("parsererror"))
          throw new Error("Invalid XML response");
        const I = A.documentElement;
        if (!I.tagName.includes("Capabilities") && I.tagName !== "WMT_MS_Capabilities")
          throw new Error("Not a valid WMS GetCapabilities response");
        const D = i(A, f);
        return console.log("[Service.ts] WMS service parsed:", D), console.log("[Service.ts] WMS _info:", D._info), console.log("[Service.ts] WMS _layers:", D._layers), console.log("[Service.ts] WMS getLayers:", typeof D.getLayers), console.log("[Service.ts] WMS getLayers():", D.getLayers()), console.log("[Service.ts] WMS getOperationUrl:", typeof D.getOperationUrl), console.log("[Service.ts] WMS getOperationUrl(GetMap):", D.getOperationUrl("GetMap")), console.log("[Service.ts] WMS _operationUrls:", D._operationUrls), D;
      } catch (g) {
        throw console.log("not a WMS Service:", g), g;
      }
    },
    createServiceWFS: async (f) => {
      try {
        const g = f.includes("?") ? `${f}&SERVICE=WFS&REQUEST=GetCapabilities` : `${f}?SERVICE=WFS&REQUEST=GetCapabilities`;
        console.log("[Service.ts] Fetching WFS capabilities from:", g);
        const v = await o(g, 15e3);
        if (!v.ok)
          throw new Error(`HTTP ${v.status}: ${v.statusText}`);
        const y = await v.text(), A = new DOMParser().parseFromString(y, "text/xml");
        if (A.querySelector("parsererror"))
          throw new Error("Invalid XML response");
        if (!A.documentElement.tagName.includes("Capabilities"))
          throw new Error("Not a valid WFS GetCapabilities response");
        const D = n(A, f);
        return console.log("[Service.ts] WFS service parsed:", D), D;
      } catch (g) {
        throw console.log("not a WFS Service:", g), g;
      }
    }
  };
};
var Pu = { exports: {} }, yh, hp;
function kT() {
  if (hp) return yh;
  hp = 1;
  var o = 1e3, i = o * 60, n = i * 60, l = n * 24, h = l * 7, f = l * 365.25;
  yh = function(A, S) {
    S = S || {};
    var I = typeof A;
    if (I === "string" && A.length > 0)
      return g(A);
    if (I === "number" && isFinite(A))
      return S.long ? y(A) : v(A);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(A)
    );
  };
  function g(A) {
    if (A = String(A), !(A.length > 100)) {
      var S = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        A
      );
      if (S) {
        var I = parseFloat(S[1]), D = (S[2] || "ms").toLowerCase();
        switch (D) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return I * f;
          case "weeks":
          case "week":
          case "w":
            return I * h;
          case "days":
          case "day":
          case "d":
            return I * l;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return I * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return I * i;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return I * o;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return I;
          default:
            return;
        }
      }
    }
  }
  function v(A) {
    var S = Math.abs(A);
    return S >= l ? Math.round(A / l) + "d" : S >= n ? Math.round(A / n) + "h" : S >= i ? Math.round(A / i) + "m" : S >= o ? Math.round(A / o) + "s" : A + "ms";
  }
  function y(A) {
    var S = Math.abs(A);
    return S >= l ? m(A, S, l, "day") : S >= n ? m(A, S, n, "hour") : S >= i ? m(A, S, i, "minute") : S >= o ? m(A, S, o, "second") : A + " ms";
  }
  function m(A, S, I, D) {
    var B = S >= I * 1.5;
    return Math.round(A / I) + " " + D + (B ? "s" : "");
  }
  return yh;
}
var Eh, dp;
function GT() {
  if (dp) return Eh;
  dp = 1;
  function o(i) {
    l.debug = l, l.default = l, l.coerce = m, l.disable = v, l.enable = f, l.enabled = y, l.humanize = kT(), l.destroy = A, Object.keys(i).forEach((S) => {
      l[S] = i[S];
    }), l.names = [], l.skips = [], l.formatters = {};
    function n(S) {
      let I = 0;
      for (let D = 0; D < S.length; D++)
        I = (I << 5) - I + S.charCodeAt(D), I |= 0;
      return l.colors[Math.abs(I) % l.colors.length];
    }
    l.selectColor = n;
    function l(S) {
      let I, D = null, B, G;
      function j(...W) {
        if (!j.enabled)
          return;
        const Z = j, J = Number(/* @__PURE__ */ new Date()), P = J - (I || J);
        Z.diff = P, Z.prev = I, Z.curr = J, I = J, W[0] = l.coerce(W[0]), typeof W[0] != "string" && W.unshift("%O");
        let U = 0;
        W[0] = W[0].replace(/%([a-zA-Z%])/g, (fe, Ee) => {
          if (fe === "%%")
            return "%";
          U++;
          const he = l.formatters[Ee];
          if (typeof he == "function") {
            const Oe = W[U];
            fe = he.call(Z, Oe), W.splice(U, 1), U--;
          }
          return fe;
        }), l.formatArgs.call(Z, W), (Z.log || l.log).apply(Z, W);
      }
      return j.namespace = S, j.useColors = l.useColors(), j.color = l.selectColor(S), j.extend = h, j.destroy = l.destroy, Object.defineProperty(j, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => D !== null ? D : (B !== l.namespaces && (B = l.namespaces, G = l.enabled(S)), G),
        set: (W) => {
          D = W;
        }
      }), typeof l.init == "function" && l.init(j), j;
    }
    function h(S, I) {
      const D = l(this.namespace + (typeof I > "u" ? ":" : I) + S);
      return D.log = this.log, D;
    }
    function f(S) {
      l.save(S), l.namespaces = S, l.names = [], l.skips = [];
      const I = (typeof S == "string" ? S : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const D of I)
        D[0] === "-" ? l.skips.push(D.slice(1)) : l.names.push(D);
    }
    function g(S, I) {
      let D = 0, B = 0, G = -1, j = 0;
      for (; D < S.length; )
        if (B < I.length && (I[B] === S[D] || I[B] === "*"))
          I[B] === "*" ? (G = B, j = D, B++) : (D++, B++);
        else if (G !== -1)
          B = G + 1, j++, D = j;
        else
          return !1;
      for (; B < I.length && I[B] === "*"; )
        B++;
      return B === I.length;
    }
    function v() {
      const S = [
        ...l.names,
        ...l.skips.map((I) => "-" + I)
      ].join(",");
      return l.enable(""), S;
    }
    function y(S) {
      for (const I of l.skips)
        if (g(S, I))
          return !1;
      for (const I of l.names)
        if (g(S, I))
          return !0;
      return !1;
    }
    function m(S) {
      return S instanceof Error ? S.stack || S.message : S;
    }
    function A() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return l.enable(l.load()), l;
  }
  return Eh = o, Eh;
}
var fp;
function UT() {
  return fp || (fp = 1, (function(o, i) {
    var n = {};
    i.formatArgs = h, i.save = f, i.load = g, i.useColors = l, i.storage = v(), i.destroy = /* @__PURE__ */ (() => {
      let m = !1;
      return () => {
        m || (m = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
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
      let m;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function h(m) {
      if (m[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + m[0] + (this.useColors ? "%c " : " ") + "+" + o.exports.humanize(this.diff), !this.useColors)
        return;
      const A = "color: " + this.color;
      m.splice(1, 0, A, "color: inherit");
      let S = 0, I = 0;
      m[0].replace(/%[a-zA-Z%]/g, (D) => {
        D !== "%%" && (S++, D === "%c" && (I = S));
      }), m.splice(I, 0, A);
    }
    i.log = console.debug || console.log || (() => {
    });
    function f(m) {
      try {
        m ? i.storage.setItem("debug", m) : i.storage.removeItem("debug");
      } catch {
      }
    }
    function g() {
      let m;
      try {
        m = i.storage.getItem("debug") || i.storage.getItem("DEBUG");
      } catch {
      }
      return !m && typeof process < "u" && "env" in process && (m = n.DEBUG), m;
    }
    function v() {
      try {
        return localStorage;
      } catch {
      }
    }
    o.exports = GT()(i);
    const { formatters: y } = o.exports;
    y.j = function(m) {
      try {
        return JSON.stringify(m);
      } catch (A) {
        return "[UnexpectedJSONParseError]: " + A.message;
      }
    };
  })(Pu, Pu.exports)), Pu.exports;
}
var zT = UT();
const ro = /* @__PURE__ */ _g(zT);
ro.log = console.log.bind(console);
const ku = localStorage.getItem("debug");
console.log("[Maps Widget] Logger module loaded. localStorage.debug =", ku);
console.log("[Maps Widget] debug.enable exists:", typeof ro.enable);
ku && (ro.enable(ku), console.log("[Maps Widget] Called debug.enable with:", ku));
const fr = ro("daanse:maps:map"), Rr = ro("daanse:maps:datasource"), Th = ro("daanse:maps:observations"), Bn = ro("daanse:maps:services"), VT = ro("daanse:maps:tasks");
class bg extends BE {
  // Feature ID Constants (eLiterals)
  // Private fields
  /**
   * Returns the EClass of this object
   */
  eClass() {
    return b.Literals.MAP_WIDGET_INTERFACE;
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
const WT = {
  id: "mapholder",
  class: "holder",
  style: { height: "100%" }
}, ZT = /* @__PURE__ */ it({
  __name: "MapsWidget",
  props: /* @__PURE__ */ Vh({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(o, { expose: i }) {
    const n = (x) => {
      const ce = x;
      return typeof ce?.toArray == "function" ? ce.toArray() : Array.isArray(ce) ? ce : [];
    }, l = (x) => x ?? void 0, h = o, { datasourceId: f, id: g } = Ol(h), y = n1().params.pageid || "", m = mr(o, "configv"), A = me(null), S = new we(), I = [50.93115286, 11.60392726];
    function D(x, ce) {
      const q = m.value[x];
      if (typeof q?.clear == "function" && typeof q?.add == "function") {
        q.clear();
        for (const ve of ce) q.add(ve);
        return;
      }
      m.value[x] = ce;
    }
    function B() {
      n(m.value.center).length === 0 && D("center", I);
    }
    const G = wt(kE), j = wt(Fp.TINY_EMITTER);
    function W(x) {
      if (!g?.value) return;
      const { lat: ce, lng: q } = x.latlng, ve = new Si();
      ve.lat = ce, ve.lon = q, j.emit("widget:MapWidget:click_on_map", {
        type: "widget:MapWidget:click_on_map",
        widgetId: g.value,
        payload: ve,
        timestamp: Date.now()
      });
    }
    const { filterFeatureCollection: Z, compareDatastream: J, compareThing: P } = M1(), { isPoint: U, isFeatureCollection: re, transformToGeoJson: fe, isFeature: Ee } = B1(), { createServiceWMS: he, createServiceWFS: Oe } = Ag(), le = me({}), ne = me(/* @__PURE__ */ new Map()), V = me(!1), ge = /* @__PURE__ */ new Set(), Ae = /* @__PURE__ */ new Map(), te = /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new Map(), K = V1(), Fe = /* @__PURE__ */ new WeakMap();
    let Le = [], Me = 0;
    const kt = async () => {
      const x = ++Me, ce = [], q = nl(le.value), ve = nl(ne.value), ke = [];
      q?.datastreams && ke.push([f.value, q.datastreams]);
      for (const [ft, Ft] of ve.entries()) {
        const Pt = nl(Ft);
        Pt?.datastreams && ke.push([ft, Pt.datastreams]);
      }
      const Pe = 4;
      let ot = performance.now();
      for (const [ft, Ft] of ke)
        for (let Pt = 0; Pt < Ft.length; Pt++) {
          if (performance.now() - ot > Pe) {
            if (x !== Me) return;
            await new Promise((Pn) => setTimeout(Pn, 0)), ot = performance.now();
          }
          const de = Ft[Pt];
          if (de.observedArea)
            Fe.has(de.observedArea) || Fe.set(de.observedArea, fe(nl(de.observedArea))), ce.push({ lng: 0, lat: 0, dsId: ft, dataStream: de, geoJsonFeature: Fe.get(de.observedArea) });
          else if (de.thing?.locations?.[0]) {
            const Pn = de.thing.locations[0].location, ii = ti(Pn);
            ii ? ce.push({ lng: ii[0], lat: ii[1], dsId: ft, dataStream: de, geoJsonFeature: null }) : (Fe.has(Pn) || Fe.set(Pn, fe(Pn)), ce.push({ lng: 0, lat: 0, dsId: ft, dataStream: de, geoJsonFeature: Fe.get(Pn) }));
          }
        }
      x === Me && (Le = ce, fr("Spatial index built:", ce.length, "entries"));
    }, en = Xt(() => {
      try {
        return f.value && wt(Ls).getDatasource(f.value).type || "ogcsta";
      } catch (x) {
        return Rr("Could not detect datasource type:", x), "ogcsta";
      }
    }), Ot = {
      rest: "object",
      ogcsta: "OGCSTAData",
      "OGC Composer": "OGCSTAData"
    }, Qe = Xt(() => Ot[en.value] || "OGCSTAData"), { update: Ye, callEvent: Vt } = JE(f, Qe.value, le), un = async (x) => {
      if (x) {
        if (te.has(x)) {
          Rr("Datasource", x, "is already loading, skipping");
          return;
        }
        te.add(x);
        try {
          const ce = wt(Ls), q = ce.getDatasource(x), ve = ce.getDatasourceType(x), ke = Ot[ve] || "OGCSTAData";
          if (q && typeof q.getData == "function") {
            const Pe = await q.getData(ke);
            if (ne.value.set(x, Pe), !ge.has(x) && typeof q.subscribe == "function") {
              ge.add(x);
              const ot = async () => {
                const Ft = await q.getData(ke);
                ne.value.set(x, Ft);
              }, ft = q.subscribe(ot);
              typeof ft == "function" && Ae.set(x, ft);
            }
          }
        } catch (ce) {
          Rr("Could not get datasource data for", x, ce);
        } finally {
          te.delete(x);
        }
      }
    };
    Vi(() => [m.value?.datasourceIds, m.value?.layers], async () => {
      const x = /* @__PURE__ */ new Set();
      m.value?.datasourceIds && m.value.datasourceIds.forEach((q) => x.add(q)), m.value?.layers && m.value.layers.forEach((q) => {
        q.datasourceId && q.datasourceId !== f.value && x.add(q.datasourceId);
      });
      let ce = !1;
      for (const q of x)
        ne.value.has(q) || (await un(q), ce = !0);
      ce && A.value && (await kt(), di());
    }, { deep: !0, immediate: !0 }), Vi(f, (x, ce, q) => {
      Ye(x, ce);
    }), Vi(() => m.value?.OGCSstyles, (x, ce, q) => {
      di(), Hn();
    }, { deep: !0 });
    const { getById: ci } = fl();
    me({});
    const qt = me(m.value?.selectedThingId ?? null), Zn = me(null), Dn = me(null), bi = me(null), pn = me("#c45e00"), jn = me(5);
    let gn = null;
    Vi(qt, (x) => {
      m.value && (m.value.selectedThingId = x ?? void 0);
    }), me(!1);
    let _n = !1;
    const tn = (x) => {
      if (x.datasourceId) {
        const ce = ne.value.get(x.datasourceId);
        return ce || (un(x.datasourceId), {});
      }
      return le.value;
    };
    Yt(async () => {
      if (m.value) {
        if (Object.assign(m.value, {
          ...Kf(S),
          ...Kf(m.value)
        }), B(), m.value.services) {
          for (const q of m.value.services)
            if (q.type === "WMS") {
              if (!(typeof l(q.service)?.getLayers == "function") && q.url) {
                Bn("Reconstructing WMS service from URL: %s", q.url);
                try {
                  q.service = await he(q.url), Bn("WMS service reconstructed successfully"), q.reconstructionFailed = !1;
                } catch (ke) {
                  Bn("Could not reconstruct WMS service: %o", ke), q.reconstructionFailed = !0;
                }
              }
            } else if (q.type === "WFS" && !(typeof l(q.service)?.getFeatureTypes == "function") && q.url) {
              Bn("Reconstructing WFS service from URL: %s", q.url);
              try {
                q.service = await Oe(q.url), Bn("WFS service reconstructed successfully"), q.reconstructionFailed = !1;
              } catch (ke) {
                Bn("Could not reconstruct WFS service: %o", ke), q.reconstructionFailed = !0;
              }
            }
        }
        if (m.value.layers) {
          const q = [];
          for (const ve of m.value.layers)
            if (ve.type === "WMSLayer" && ve.service && !l(ve.service)?.getOperationUrl) {
              const ke = l(ve.service)?._capabilitiesUrl || l(ve.service)?.url || l(ve.service)?.serviceUrl;
              if (ke)
                try {
                  const Pe = await he(ke);
                  q.push({ ...ve, service: Pe, reconstructionFailed: !1 });
                } catch (Pe) {
                  Bn("Could not reconstruct WMS service for layer %s: %o", ve.name, Pe), q.push({ ...ve, reconstructionFailed: !0 });
                }
              else
                Bn("WMS layer missing service URL: %s", ve.name), q.push({ ...ve, reconstructionFailed: !0 });
            } else if (ve.type === "WFSLayer" && ve.wfs_service)
              if (typeof l(ve.wfs_service)?.fetch != "function") {
                const ke = l(ve.wfs_service)?.url;
                if (ke)
                  try {
                    const Pe = (await Promise.resolve().then(() => $w)).default, ot = new Pe(ke);
                    await ot.fetch(), q.push({ ...ve, wfs_service: ot, reconstructionFailed: !1 });
                  } catch (Pe) {
                    Bn("Could not reconstruct WFS service for layer %s: %o", ve.name, Pe), q.push({ ...ve, reconstructionFailed: !0 });
                  }
                else
                  Bn("WFS layer missing service URL: %s", ve.name), q.push({ ...ve, reconstructionFailed: !0 });
              } else
                q.push(ve);
            else
              q.push(ve);
          D("layers", q);
        }
        V.value = !0;
      }
      const x = document.getElementById("mapholder"), ce = new ResizeObserver(() => {
        A.value && A.value.leafletObject && A.value.leafletObject.invalidateSize();
      });
      x && ce.observe(x);
    });
    let yr = 0;
    Vi(() => le.value?.locations?.length || 0, async (x) => {
      yr === 0 && x > 0 && (await kt(), di(), Hn()), yr = x;
    });
    const Hn = () => {
      if (!m.value?.OGCSstyles || m.value.OGCSstyles.length === 0) {
        Th("No OGCSTA styles configured, skipping historical locations load");
        return;
      }
      const x = /* @__PURE__ */ new Map(), ce = le.value?.things || [];
      for (const ve of ce)
        if (!(!ve || !ve.iotId)) {
          for (const ke of m.value.OGCSstyles)
            if (P(ve, ke)) {
              x.set(ve.iotId, ve);
              break;
            }
        }
      for (const [ve, ke] of ne.value.entries()) {
        const Pe = ke?.things || [];
        for (const ot of Pe)
          if (!(!ot || !ot.iotId)) {
            for (const ft of m.value.OGCSstyles)
              if (P(ot, ft)) {
                x.set(ot.iotId, ot);
                break;
              }
          }
      }
      const q = Array.from(x.values());
      if (q.length > 0) {
        Th(`Setting historical locations filter for ${q.length} matching things`), Vt(ua, { historicalLocations: q }, !1);
        for (const ve of ne.value.keys())
          try {
            const Pe = wt(Ls).getDatasource(ve);
            Pe && typeof Pe.callEvent == "function" && Pe.callEvent(ua, { historicalLocations: q }, !1);
          } catch (ke) {
            Rr("Could not call event on datasource", ve, ke);
          }
      } else
        Th("No things match the configured style filters");
    }, Kt = () => {
      try {
        const x = A.value.leafletObject;
        m.value.fixed ? (x.dragging.disable(), x.scrollWheelZoom.disable(), x.doubleClickZoom.disable(), x.touchZoom.disable(), x.keyboard.disable(), x.zoomControl.remove()) : (x.dragging.enable(), x.scrollWheelZoom.enable(), x.doubleClickZoom.disable(), x.touchZoom.enable(), x.keyboard.enable(), x.zoomControl.addTo(x));
      } catch (x) {
        fr("Error in setFixed:", x);
      }
    };
    Vi(() => m.value.fixed, (x, ce, q) => {
      Kt();
    }), Xt(() => le.value?.locations ?? []);
    const Xn = (x) => (tn(x)?.locations ?? []).filter((ve) => ve && (ve["@iot.id"] || ve.iotId));
    Xt(() => (x) => F1(m, "value", "renderer", 0, "renderer", "point") ? m.value?.renderer?.[0]?.renderer?.area ?? {} : {});
    const Ci = Xt(() => ({
      pointToLayer: (x, ce) => fa.circleMarker(ce, {
        radius: 0,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 0,
        fillOpacity: 0
      })
    })), hi = (x) => m.value.layers.findIndex((ce) => ce === x), Rn = (x) => {
      const ce = hi(x);
      return {
        ...Ci.value,
        pane: `layer-pane-${ce}`
      };
    }, Oi = (x) => `layer-pane-${hi(x)}`, Sn = (x) => x ? `layer-area-pane-${hi(x)}` : "overlayPane", Yn = me(0), tr = Xt(() => {
      Yn.value;
      const x = /* @__PURE__ */ new Map();
      if (m.value?.styles)
        for (const ce of m.value.styles)
          ce.id && x.set(ce.id, ce);
      return x;
    }), Qn = (x) => tr.value.get(x), Li = () => {
      Yn.value++;
    };
    let qn = "";
    Vi(() => m.value?.styles, (x) => {
      if (!x) return;
      const ce = JSON.stringify(x);
      ce !== qn && (qn = ce, Li());
    }, { deep: !0 });
    let ei = !1;
    const Ii = () => {
      _n = !0, fr("map ready"), Kt(), Ni();
      const x = A.value?.leafletObject;
      x && (x.on("movestart", () => {
        ei = !0, Di++;
      }), x.on("moveend", () => {
        ei = !1;
      }));
    }, Ni = () => {
      const x = A.value?.leafletObject;
      !x || !m.value.layers || m.value.layers.forEach((ce, q) => {
        const ve = `layer-pane-${q}`;
        let ke = x.getPane(ve);
        ke || (ke = x.createPane(ve));
        const Pe = 400 + (m.value.layers.length - q) * 2;
        ke.style.zIndex = String(Pe);
        const ot = `layer-area-pane-${q}`;
        let ft = x.getPane(ot);
        ft || (ft = x.createPane(ot)), ft.style.zIndex = String(Pe - 1);
      });
    };
    Vi(() => m.value.layers, () => {
      _n && Ni();
    }, { deep: !0 });
    const nn = (x) => [x[1], x[0]], ti = (x) => x ? x.type === "Point" && Array.isArray(x.coordinates) ? x.coordinates : x.type === "Feature" && x.geometry?.type === "Point" && Array.isArray(x.geometry.coordinates) ? x.geometry.coordinates : null : null, Er = sl.debounce(() => {
      if (ei) return;
      const x = A.value?.leafletObject;
      if (x) {
        const ce = x.getCenter();
        D("center", [ce.lat, ce.lng]), m.value.zoom = x.getZoom();
      }
      di();
    }, 500, { leading: !1, trailing: !0 });
    let Di = 0;
    const di = async () => {
      if (fr("loadObservationsInView called"), !A.value || !A.value?.leafletObject) {
        fr("Map not ready");
        return;
      }
      let x = A.value?.leafletObject.getBounds();
      if (!x) {
        fr("No map bounds available yet");
        return;
      }
      const ce = ++Di, q = x._southWest.lng, ve = x._southWest.lat, ke = x._northEast.lng, Pe = x._northEast.lat;
      let ot = null;
      const ft = () => (ot || (ot = Xh({
        type: "Polygon",
        coordinates: [[[ke, Pe], [ke, ve], [q, ve], [q, Pe], [ke, Pe]]]
      })), ot), Ft = nl(m.value.OGCSstyles), Pt = /* @__PURE__ */ new Map();
      for (const xt of Ft) {
        const Gt = xt.ObservationrefreshTime !== void 0 && xt.ObservationrefreshTime !== null ? xt.ObservationrefreshTime : 0;
        Pt.has(Gt) || Pt.set(Gt, []);
        for (const pt of xt.ds_renderer)
          Pt.get(Gt).push({ renderer: xt, subrender: pt });
      }
      const Lt = {}, de = Le, Pn = 4;
      let ii = performance.now();
      for (let xt = 0; xt < de.length; xt++) {
        if (performance.now() - ii > Pn) {
          if (ce !== Di || ei)
            return;
          await new Promise((Nt) => setTimeout(Nt, 0)), ii = performance.now();
        }
        const pt = de[xt];
        let An;
        if (pt.geoJsonFeature ? An = fT(ft(), pt.geoJsonFeature) : An = pt.lng >= q && pt.lng <= ke && pt.lat >= ve && pt.lat <= Pe, !An) continue;
        const { dsId: bn, dataStream: ri } = pt;
        for (const [Nt, Zi] of Pt.entries()) {
          let kn = !1;
          for (const { renderer: cn, subrender: $t } of Zi) {
            const Ri = J(ri, $t), Fr = ri.thing ? P(ri.thing, cn) : !0;
            if (Ri && Fr) {
              kn = !0;
              break;
            }
          }
          kn && (Lt[Nt] || (Lt[Nt] = {}), Lt[Nt][bn] || (Lt[Nt][bn] = []), Lt[Nt][bn].push(ri));
        }
      }
      if (ce !== Di) {
        fr("Session invalidated after chunked processing, aborting");
        return;
      }
      const Wi = [];
      for (const [xt, Gt] of Object.entries(Lt))
        for (const [pt, An] of Object.entries(Gt)) {
          const bn = sl.uniqBy(An, "iotId");
          if (bn.length > 0) {
            const ri = pt === f.value;
            let Nt = 0;
            for (const cn of bn) {
              const $t = String(cn.iotId || cn["@iot.id"] || "");
              for (let Ri = 0; Ri < $t.length; Ri++)
                Nt = (Nt << 5) - Nt + $t.charCodeAt(Ri) | 0;
            }
            const Zi = `obs-${pt}-${xt}-${bn.length}-${Nt >>> 0}`, kn = new class extends z1 {
              constructor() {
                super(...arguments), this.id = Zi;
              }
              invoke() {
                window.clearInterval(this.handle);
              }
              async run() {
                if (ri)
                  Vt(ua, { observations: bn }, !1);
                else
                  try {
                    const $t = wt(Ls).getDatasource(pt);
                    $t && typeof $t.callEvent == "function" && $t.callEvent(ua, { observations: bn }, !1);
                  } catch (cn) {
                    Rr("Could not call event on datasource", pt, cn);
                  }
                parseInt(xt) !== 0 && (this.handle = window.setInterval(async () => {
                  if (ri)
                    Vt(ua, { observations: bn }, !1);
                  else
                    try {
                      const $t = wt(Ls).getDatasource(pt);
                      $t && typeof $t.callEvent == "function" && $t.callEvent(ua, { observations: bn }, !1);
                    } catch (cn) {
                      Rr("Could not call event on datasource", pt, cn);
                    }
                }, parseInt(xt) * 1e3));
              }
            }();
            Wi.push(kn), oe.set(kn.id, kn);
          }
        }
      fr("Created", Wi.length, "tasks to invoke"), K.addTasksAndIvnoke(Wi);
      const fi = /* @__PURE__ */ new Map();
      for (const [xt, Gt] of Object.entries(Lt))
        for (const [pt, An] of Object.entries(Gt))
          fi.has(pt) || fi.set(pt, []), fi.get(pt).push(...An);
      const ir = fi.get(f.value) || [];
      Vt(Yf, { observations: sl.uniqBy(ir, "iotId") });
      for (const xt of ne.value.keys()) {
        const Gt = fi.get(xt) || [];
        try {
          const An = wt(Ls).getDatasource(xt);
          An && typeof An.callEvent == "function" && An.callEvent(Yf, { observations: sl.uniqBy(Gt, "iotId") });
        } catch (pt) {
          Rr("Could not call UPDATE_MQTT_SUBSCRIPTIONS on datasource", xt, pt);
        }
      }
    }, ni = (x) => {
      if (U(x))
        return nn(x.coordinates);
      if (re(x) || Ee(x))
        try {
          let ce = cp(x);
          return nn(ce.geometry.coordinates);
        } catch {
          return null;
        }
      return null;
    }, nr = (x) => {
      if (U(x))
        return nn(x.coordinates);
      if (re(x) || Ee(x))
        try {
          let ce = cp(x);
          return nn(ce.geometry.coordinates);
        } catch {
          return null;
        }
    };
    let Tr = new class extends bg {
      constructor() {
        super(...arguments), this.zoomToThing = (x, ce = 16, q = 1e3) => {
          if (!A.value || !A.value.leafletObject) {
            console.warn("Map instance not available. Cannot zoom to thing.");
            return;
          }
          let ve = (le.value?.things || []).find((Ft) => Ft.iotId === x || Ft["@iot.id"] === x);
          if (!ve) {
            for (const [Ft, Pt] of ne.value.entries())
              if (ve = (Pt?.things || []).find((de) => de.iotId === x || de["@iot.id"] === x), ve) break;
          }
          if (!ve) {
            console.warn(`Thing with ID "${x}" not found.`);
            return;
          }
          if (!ve.locations || !ve.locations[0]) {
            console.warn(`Thing with ID "${x}" has no location.`);
            return;
          }
          const ke = ve.locations[0].location, Pe = fe(ke), ot = ni(Pe);
          if (!ot) {
            console.warn("Could not extract coordinates from thing location.");
            return;
          }
          A.value.leafletObject.flyTo(ot, ce, {
            duration: q / 1e3,
            // Leaflet expects seconds
            easeLinearity: 0.25
          });
        }, this.selectThingById = (x) => {
          fr("selectThingById called with:", x), qt.value === x ? (qt.value = null, fr("Thing deselected")) : (qt.value = x, fr("Thing selected:", x));
        }, this.zoomToLocation = async (x, ce = 16, q = 1e3) => {
          console.log("🎯 zoomToLocation called with:", { location: x, zoom: ce, duration: q });
          let ve = 0;
          for (; (!A.value || !A.value.leafletObject) && ve < 3e3; )
            console.log("🎯 Waiting for map to be ready..."), await new Promise((ft) => setTimeout(ft, 100)), ve += 100;
          if (!A.value || !A.value.leafletObject) {
            console.warn("🎯 Map instance not available after waiting. Cannot zoom to location.");
            return;
          }
          if (!x) {
            console.warn("🎯 zoomToLocation called without location");
            return;
          }
          console.log("🎯 Location type:", typeof x, "value:", x);
          const ke = fe(x);
          console.log("🎯 Transformed GeoJSON:", ke);
          const Pe = ni(ke);
          if (console.log("🎯 Extracted point:", Pe), !Pe) {
            console.warn("🎯 Could not extract coordinates from location. GeoJSON was:", ke);
            return;
          }
          const ot = A.value.leafletObject;
          console.log("🎯 Flying to", Pe, "with zoom", ce, "duration", q), ot.flyTo(Pe, ce, {
            duration: q / 1e3,
            // Leaflet expects seconds
            easeLinearity: 0.25
          }), console.log("🎯 flyTo called successfully");
        }, this.showTooltip = (x, ce) => {
          Zn.value = x, Dn.value = ce || null;
        }, this.hideTooltip = () => {
          Zn.value = null, Dn.value = null;
        }, this.displayRoute = (x, ce = "#c45e00", q = 5) => {
          if (!A.value || !A.value.leafletObject) {
            console.warn("Map not ready. Cannot display route.");
            return;
          }
          const ve = A.value.leafletObject;
          if (gn && (ve.removeLayer(gn), gn = null), !x || !x.features) return;
          gn = fa.layerGroup();
          for (const Pe of x.features)
            if (Pe.geometry.type === "LineString") {
              const ot = Pe.geometry.coordinates.map(
                (Ft) => [Ft[1], Ft[0]]
              ), ft = fa.polyline(ot, {
                color: ce,
                weight: q,
                opacity: 0.8
              });
              gn.addLayer(ft);
            } else if (Pe.geometry.type === "Point") {
              const [ot, ft] = Pe.geometry.coordinates, Ft = Pe.properties?.role;
              let Pt = "#2196f3";
              Ft === "start" ? Pt = "#4caf50" : Ft === "end" && (Pt = "#f44336");
              const Lt = fa.circleMarker([ft, ot], {
                radius: 8,
                fillColor: Pt,
                color: "#fff",
                weight: 2,
                fillOpacity: 1
              });
              Pe.properties?.name && Lt.bindTooltip(Pe.properties.name), gn.addLayer(Lt);
            }
          gn.addTo(ve);
          const ke = x.features.filter(
            (Pe) => Pe.geometry.type === "LineString"
          );
          if (ke.length > 0) {
            const Pe = ke.flatMap(
              (ot) => ot.geometry.coordinates.map(
                (ft) => [ft[1], ft[0]]
              )
            );
            Pe.length > 0 && ve.fitBounds(fa.latLngBounds(Pe), {
              padding: [50, 50]
            });
          }
          bi.value = x, pn.value = ce, jn.value = q;
        }, this.clearRoute = () => {
          gn && A.value && A.value.leafletObject && (A.value.leafletObject.removeLayer(gn), gn = null), bi.value = null;
        };
      }
    }();
    return i(Tr), Yt(() => {
      G.registerInstance(g.value, Tr, "MapWidget", y), fr("Registered instance with EventActionsRegistry:", g.value, "on page:", y);
    }), Cl(() => {
      G.unregisterInstance(g.value), fr("Unregistered instance from EventActionsRegistry:", g.value);
      for (const [x, ce] of oe.entries())
        try {
          ce.invoke();
        } catch (q) {
          VT("Error stopping task interval:", q);
        }
      K.clearAll(), oe.clear();
      try {
        Vt(qf, {});
      } catch (x) {
        Rr("Could not unsubscribe from MQTT for primary datasource on unmount:", x);
      }
      for (const x of ne.value.keys())
        try {
          const q = wt(Ls).getDatasource(x);
          q && typeof q.callEvent == "function" && q.callEvent(qf, {});
        } catch (ce) {
          Rr("Could not unsubscribe from MQTT for datasource", x, "on unmount:", ce);
        }
      for (const [x, ce] of Ae.entries())
        try {
          ce();
        } catch (q) {
          Rr(`Error unsubscribing from datasource ${x}:`, q);
        }
      Ae.clear(), ge.clear(), ne.value.clear();
    }), (x, ce) => (z(), X("div", WT, [
      m.value.baseMapUrl ? (z(), dt(C(Kh), {
        key: 0,
        id: "map",
        ref_key: "map",
        ref: A,
        center: n(m.value.center),
        "max-zoom": 21,
        "use-global-leaflet": !1,
        zoom: m.value.zoom,
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
        onMoveend: C(Er),
        onReady: Ii,
        onClick: W,
        dragging: !m.value.fixed
      }, {
        default: Ke(() => [
          ue(C(jh), {
            attribution: m.value.attribution,
            options: {
              maxNativeZoom: 19,
              maxZoom: 25
            },
            url: m.value.baseMapUrl
          }, null, 8, ["attribution", "url"]),
          (z(!0), X(Re, null, zt([...m.value.layers].reverse(), (q, ve) => (z(), X(Re, {
            key: `${q.name}-${hi(q)}`
          }, [
            q.type == "WMSLayer" && q.service && typeof l(q.service)?.getOperationUrl == "function" ? (z(), dt(C(R1), {
              key: 0,
              attribution: q.attribution,
              layers: q.name,
              name: q.name,
              opacity: q.opacity,
              transparent: !0,
              url: q.service.getOperationUrl("GetMap"),
              visible: q.checked,
              "z-index": hi(q),
              options: { pane: `layer-pane-${hi(q)}` },
              format: "image/png",
              "layer-type": "base"
            }, null, 8, ["attribution", "layers", "name", "opacity", "url", "visible", "z-index", "options"])) : Be("", !0),
            q.type == "WFSLayer" ? (z(), dt(OT, {
              key: 1,
              "geo-json": l(q.wfs_service)?.geoJson,
              "style-ids": n(q.styleIds),
              "layer-options": Rn(q),
              "filter-feature-collection": C(Z),
              "get-style-by-id": Qn,
              "is-point": C(U)
            }, null, 8, ["geo-json", "style-ids", "layer-options", "filter-feature-collection", "is-point"])) : Be("", !0),
            q.type == "GEOJSON" ? (z(), dt(xT, {
              key: 2,
              "layer-data": tn(q),
              "style-ids": n(q.styleIds),
              "layer-options": Rn(q),
              "marker-pane": Oi(q),
              "filter-feature-collection": C(Z),
              "get-style-by-id": Qn,
              "is-point": C(U),
              "get-point": ni
            }, null, 8, ["layer-data", "style-ids", "layer-options", "marker-pane", "filter-feature-collection", "is-point"])) : Be("", !0),
            q.type == "REST-GEOJSON" ? (z(), dt(FT, {
              key: 3,
              "layer-data": tn(q),
              "style-ids": n(q.styleIds),
              "layer-options": Rn(q),
              "marker-pane": Oi(q),
              "filter-feature-collection": C(Z),
              "get-style-by-id": Qn,
              "is-point": C(U),
              "get-point": ni
            }, null, 8, ["layer-data", "style-ids", "layer-options", "marker-pane", "filter-feature-collection", "is-point"])) : Be("", !0),
            q.type == "ROUTE" && q.datasourceId ? (z(), dt(BT, {
              key: 4,
              "datasource-id": q.datasourceId
            }, null, 8, ["datasource-id"])) : Be("", !0),
            q.type == "OGCSTA" ? (z(), dt(MT, {
              key: 5,
              locations: Xn(q),
              renderers: n(m.value.OGCSstyles),
              "layer-options": Rn(q),
              "marker-pane": Oi(q),
              "area-pane": Sn(q),
              "widget-id": C(g),
              "compare-thing": C(P),
              "compare-datastream": C(J),
              "is-feature-collection": C(re),
              "is-point": C(U),
              "get-point": ni,
              "get-pointform-area": nr,
              "transform-to-geo-json": C(fe),
              "get-by-id": C(ci),
              "selected-thing-id": qt.value,
              "selection-highlight-color": m.value.selectionHighlightColor ?? "#ff0000",
              "tooltip-thing-id": Zn.value,
              "tooltip-content": Dn.value
            }, null, 8, ["locations", "renderers", "layer-options", "marker-pane", "area-pane", "widget-id", "compare-thing", "compare-datastream", "is-feature-collection", "is-point", "transform-to-geo-json", "get-by-id", "selected-thing-id", "selection-highlight-color", "tooltip-thing-id", "tooltip-content"])) : Be("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 8, ["center", "zoom", "onMoveend", "dragging"])) : Be("", !0)
    ]));
  }
}), pp = /* @__PURE__ */ er(ZT, [["__scopeId", "data-v-0a5cc83b"]]);
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function gp(o, i) {
  var n = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(o);
    i && (l = l.filter(function(h) {
      return Object.getOwnPropertyDescriptor(o, h).enumerable;
    })), n.push.apply(n, l);
  }
  return n;
}
function hs(o) {
  for (var i = 1; i < arguments.length; i++) {
    var n = arguments[i] != null ? arguments[i] : {};
    i % 2 ? gp(Object(n), !0).forEach(function(l) {
      HT(o, l, n[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(n)) : gp(Object(n)).forEach(function(l) {
      Object.defineProperty(o, l, Object.getOwnPropertyDescriptor(n, l));
    });
  }
  return o;
}
function Gu(o) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Gu = function(i) {
    return typeof i;
  } : Gu = function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, Gu(o);
}
function HT(o, i, n) {
  return i in o ? Object.defineProperty(o, i, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[i] = n, o;
}
function Rs() {
  return Rs = Object.assign || function(o) {
    for (var i = 1; i < arguments.length; i++) {
      var n = arguments[i];
      for (var l in n)
        Object.prototype.hasOwnProperty.call(n, l) && (o[l] = n[l]);
    }
    return o;
  }, Rs.apply(this, arguments);
}
function YT(o, i) {
  if (o == null) return {};
  var n = {}, l = Object.keys(o), h, f;
  for (f = 0; f < l.length; f++)
    h = l[f], !(i.indexOf(h) >= 0) && (n[h] = o[h]);
  return n;
}
function qT(o, i) {
  if (o == null) return {};
  var n = YT(o, i), l, h;
  if (Object.getOwnPropertySymbols) {
    var f = Object.getOwnPropertySymbols(o);
    for (h = 0; h < f.length; h++)
      l = f[h], !(i.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(o, l) && (n[l] = o[l]);
  }
  return n;
}
var KT = "1.14.0";
function Ns(o) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(o);
}
var Ps = Ns(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Fl = Ns(/Edge/i), _p = Ns(/firefox/i), pl = Ns(/safari/i) && !Ns(/chrome/i) && !Ns(/android/i), Cg = Ns(/iP(ad|od|hone)/i), $T = Ns(/chrome/i) && Ns(/android/i), Og = {
  capture: !1,
  passive: !1
};
function It(o, i, n) {
  o.addEventListener(i, n, !Ps && Og);
}
function At(o, i, n) {
  o.removeEventListener(i, n, !Ps && Og);
}
function ec(o, i) {
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
function JT(o) {
  return o.host && o !== document && o.host.nodeType ? o.host : o.parentNode;
}
function as(o, i, n, l) {
  if (o) {
    n = n || document;
    do {
      if (i != null && (i[0] === ">" ? o.parentNode === n && ec(o, i) : ec(o, i)) || l && o === n)
        return o;
      if (o === n) break;
    } while (o = JT(o));
  }
  return null;
}
var mp = /\s+/g;
function pr(o, i, n) {
  if (o && i)
    if (o.classList)
      o.classList[n ? "add" : "remove"](i);
    else {
      var l = (" " + o.className + " ").replace(mp, " ").replace(" " + i + " ", " ");
      o.className = (l + (n ? " " + i : "")).replace(mp, " ");
    }
}
function Ze(o, i, n) {
  var l = o && o.style;
  if (l) {
    if (n === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(o, "") : o.currentStyle && (n = o.currentStyle), i === void 0 ? n : n[i];
    !(i in l) && i.indexOf("webkit") === -1 && (i = "-webkit-" + i), l[i] = n + (typeof n == "string" ? "" : "px");
  }
}
function va(o, i) {
  var n = "";
  if (typeof o == "string")
    n = o;
  else
    do {
      var l = Ze(o, "transform");
      l && l !== "none" && (n = l + " " + n);
    } while (!i && (o = o.parentNode));
  var h = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return h && new h(n);
}
function Lg(o, i, n) {
  if (o) {
    var l = o.getElementsByTagName(i), h = 0, f = l.length;
    if (n)
      for (; h < f; h++)
        n(l[h], h);
    return l;
  }
  return [];
}
function cs() {
  var o = document.scrollingElement;
  return o || document.documentElement;
}
function Wn(o, i, n, l, h) {
  if (!(!o.getBoundingClientRect && o !== window)) {
    var f, g, v, y, m, A, S;
    if (o !== window && o.parentNode && o !== cs() ? (f = o.getBoundingClientRect(), g = f.top, v = f.left, y = f.bottom, m = f.right, A = f.height, S = f.width) : (g = 0, v = 0, y = window.innerHeight, m = window.innerWidth, A = window.innerHeight, S = window.innerWidth), (i || n) && o !== window && (h = h || o.parentNode, !Ps))
      do
        if (h && h.getBoundingClientRect && (Ze(h, "transform") !== "none" || n && Ze(h, "position") !== "static")) {
          var I = h.getBoundingClientRect();
          g -= I.top + parseInt(Ze(h, "border-top-width")), v -= I.left + parseInt(Ze(h, "border-left-width")), y = g + f.height, m = v + f.width;
          break;
        }
      while (h = h.parentNode);
    if (l && o !== window) {
      var D = va(h || o), B = D && D.a, G = D && D.d;
      D && (g /= G, v /= B, S /= B, A /= G, y = g + A, m = v + S);
    }
    return {
      top: g,
      left: v,
      bottom: y,
      right: m,
      width: S,
      height: A
    };
  }
}
function vp(o, i, n) {
  for (var l = to(o, !0), h = Wn(o)[i]; l; ) {
    var f = Wn(l)[n], g = void 0;
    if (g = h >= f, !g) return l;
    if (l === cs()) break;
    l = to(l, !1);
  }
  return !1;
}
function ya(o, i, n, l) {
  for (var h = 0, f = 0, g = o.children; f < g.length; ) {
    if (g[f].style.display !== "none" && g[f] !== He.ghost && (l || g[f] !== He.dragged) && as(g[f], n.draggable, o, !1)) {
      if (h === i)
        return g[f];
      h++;
    }
    f++;
  }
  return null;
}
function nd(o, i) {
  for (var n = o.lastElementChild; n && (n === He.ghost || Ze(n, "display") === "none" || i && !ec(n, i)); )
    n = n.previousElementSibling;
  return n || null;
}
function Pr(o, i) {
  var n = 0;
  if (!o || !o.parentNode)
    return -1;
  for (; o = o.previousElementSibling; )
    o.nodeName.toUpperCase() !== "TEMPLATE" && o !== He.clone && (!i || ec(o, i)) && n++;
  return n;
}
function yp(o) {
  var i = 0, n = 0, l = cs();
  if (o)
    do {
      var h = va(o), f = h.a, g = h.d;
      i += o.scrollLeft * f, n += o.scrollTop * g;
    } while (o !== l && (o = o.parentNode));
  return [i, n];
}
function jT(o, i) {
  for (var n in o)
    if (o.hasOwnProperty(n)) {
      for (var l in i)
        if (i.hasOwnProperty(l) && i[l] === o[n][l]) return Number(n);
    }
  return -1;
}
function to(o, i) {
  if (!o || !o.getBoundingClientRect) return cs();
  var n = o, l = !1;
  do
    if (n.clientWidth < n.scrollWidth || n.clientHeight < n.scrollHeight) {
      var h = Ze(n);
      if (n.clientWidth < n.scrollWidth && (h.overflowX == "auto" || h.overflowX == "scroll") || n.clientHeight < n.scrollHeight && (h.overflowY == "auto" || h.overflowY == "scroll")) {
        if (!n.getBoundingClientRect || n === document.body) return cs();
        if (l || i) return n;
        l = !0;
      }
    }
  while (n = n.parentNode);
  return cs();
}
function XT(o, i) {
  if (o && i)
    for (var n in i)
      i.hasOwnProperty(n) && (o[n] = i[n]);
  return o;
}
function wh(o, i) {
  return Math.round(o.top) === Math.round(i.top) && Math.round(o.left) === Math.round(i.left) && Math.round(o.height) === Math.round(i.height) && Math.round(o.width) === Math.round(i.width);
}
var gl;
function Ig(o, i) {
  return function() {
    if (!gl) {
      var n = arguments, l = this;
      n.length === 1 ? o.call(l, n[0]) : o.apply(l, n), gl = setTimeout(function() {
        gl = void 0;
      }, i);
    }
  };
}
function QT() {
  clearTimeout(gl), gl = void 0;
}
function Ng(o, i, n) {
  o.scrollLeft += i, o.scrollTop += n;
}
function Dg(o) {
  var i = window.Polymer, n = window.jQuery || window.Zepto;
  return i && i.dom ? i.dom(o).cloneNode(!0) : n ? n(o).clone(!0)[0] : o.cloneNode(!0);
}
var _r = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function ew() {
  var o = [], i;
  return {
    captureAnimationState: function() {
      if (o = [], !!this.options.animation) {
        var l = [].slice.call(this.el.children);
        l.forEach(function(h) {
          if (!(Ze(h, "display") === "none" || h === He.ghost)) {
            o.push({
              target: h,
              rect: Wn(h)
            });
            var f = hs({}, o[o.length - 1].rect);
            if (h.thisAnimationDuration) {
              var g = va(h, !0);
              g && (f.top -= g.f, f.left -= g.e);
            }
            h.fromRect = f;
          }
        });
      }
    },
    addAnimationState: function(l) {
      o.push(l);
    },
    removeAnimationState: function(l) {
      o.splice(jT(o, {
        target: l
      }), 1);
    },
    animateAll: function(l) {
      var h = this;
      if (!this.options.animation) {
        clearTimeout(i), typeof l == "function" && l();
        return;
      }
      var f = !1, g = 0;
      o.forEach(function(v) {
        var y = 0, m = v.target, A = m.fromRect, S = Wn(m), I = m.prevFromRect, D = m.prevToRect, B = v.rect, G = va(m, !0);
        G && (S.top -= G.f, S.left -= G.e), m.toRect = S, m.thisAnimationDuration && wh(I, S) && !wh(A, S) && // Make sure animatingRect is on line between toRect & fromRect
        (B.top - S.top) / (B.left - S.left) === (A.top - S.top) / (A.left - S.left) && (y = nw(B, I, D, h.options)), wh(S, A) || (m.prevFromRect = A, m.prevToRect = S, y || (y = h.options.animation), h.animate(m, B, S, y)), y && (f = !0, g = Math.max(g, y), clearTimeout(m.animationResetTimer), m.animationResetTimer = setTimeout(function() {
          m.animationTime = 0, m.prevFromRect = null, m.fromRect = null, m.prevToRect = null, m.thisAnimationDuration = null;
        }, y), m.thisAnimationDuration = y);
      }), clearTimeout(i), f ? i = setTimeout(function() {
        typeof l == "function" && l();
      }, g) : typeof l == "function" && l(), o = [];
    },
    animate: function(l, h, f, g) {
      if (g) {
        Ze(l, "transition", ""), Ze(l, "transform", "");
        var v = va(this.el), y = v && v.a, m = v && v.d, A = (h.left - f.left) / (y || 1), S = (h.top - f.top) / (m || 1);
        l.animatingX = !!A, l.animatingY = !!S, Ze(l, "transform", "translate3d(" + A + "px," + S + "px,0)"), this.forRepaintDummy = tw(l), Ze(l, "transition", "transform " + g + "ms" + (this.options.easing ? " " + this.options.easing : "")), Ze(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          Ze(l, "transition", ""), Ze(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, g);
      }
    }
  };
}
function tw(o) {
  return o.offsetWidth;
}
function nw(o, i, n, l) {
  return Math.sqrt(Math.pow(i.top - o.top, 2) + Math.pow(i.left - o.left, 2)) / Math.sqrt(Math.pow(i.top - n.top, 2) + Math.pow(i.left - n.left, 2)) * l.animation;
}
var ha = [], Sh = {
  initializeByDefault: !0
}, Ml = {
  mount: function(i) {
    for (var n in Sh)
      Sh.hasOwnProperty(n) && !(n in i) && (i[n] = Sh[n]);
    ha.forEach(function(l) {
      if (l.pluginName === i.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(i.pluginName, " more than once");
    }), ha.push(i);
  },
  pluginEvent: function(i, n, l) {
    var h = this;
    this.eventCanceled = !1, l.cancel = function() {
      h.eventCanceled = !0;
    };
    var f = i + "Global";
    ha.forEach(function(g) {
      n[g.pluginName] && (n[g.pluginName][f] && n[g.pluginName][f](hs({
        sortable: n
      }, l)), n.options[g.pluginName] && n[g.pluginName][i] && n[g.pluginName][i](hs({
        sortable: n
      }, l)));
    });
  },
  initializePlugins: function(i, n, l, h) {
    ha.forEach(function(v) {
      var y = v.pluginName;
      if (!(!i.options[y] && !v.initializeByDefault)) {
        var m = new v(i, n, i.options);
        m.sortable = i, m.options = i.options, i[y] = m, Rs(l, m.defaults);
      }
    });
    for (var f in i.options)
      if (i.options.hasOwnProperty(f)) {
        var g = this.modifyOption(i, f, i.options[f]);
        typeof g < "u" && (i.options[f] = g);
      }
  },
  getEventProperties: function(i, n) {
    var l = {};
    return ha.forEach(function(h) {
      typeof h.eventProperties == "function" && Rs(l, h.eventProperties.call(n[h.pluginName], i));
    }), l;
  },
  modifyOption: function(i, n, l) {
    var h;
    return ha.forEach(function(f) {
      i[f.pluginName] && f.optionListeners && typeof f.optionListeners[n] == "function" && (h = f.optionListeners[n].call(i[f.pluginName], l));
    }), h;
  }
};
function iw(o) {
  var i = o.sortable, n = o.rootEl, l = o.name, h = o.targetEl, f = o.cloneEl, g = o.toEl, v = o.fromEl, y = o.oldIndex, m = o.newIndex, A = o.oldDraggableIndex, S = o.newDraggableIndex, I = o.originalEvent, D = o.putSortable, B = o.extraEventProperties;
  if (i = i || n && n[_r], !!i) {
    var G, j = i.options, W = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !Ps && !Fl ? G = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (G = document.createEvent("Event"), G.initEvent(l, !0, !0)), G.to = g || n, G.from = v || n, G.item = h || n, G.clone = f, G.oldIndex = y, G.newIndex = m, G.oldDraggableIndex = A, G.newDraggableIndex = S, G.originalEvent = I, G.pullMode = D ? D.lastPutMode : void 0;
    var Z = hs(hs({}, B), Ml.getEventProperties(l, i));
    for (var J in Z)
      G[J] = Z[J];
    n && n.dispatchEvent(G), j[W] && j[W].call(i, G);
  }
}
var rw = ["evt"], ji = function(i, n) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, h = l.evt, f = qT(l, rw);
  Ml.pluginEvent.bind(He)(i, n, hs({
    dragEl: ye,
    parentEl: yn,
    ghostEl: st,
    rootEl: an,
    nextEl: Po,
    lastDownEl: Uu,
    cloneEl: En,
    cloneHidden: eo,
    dragStarted: al,
    putSortable: li,
    activeSortable: He.active,
    originalEvent: h,
    oldIndex: ga,
    oldDraggableIndex: _l,
    newIndex: gr,
    newDraggableIndex: Qs,
    hideGhostForTarget: Fg,
    unhideGhostForTarget: Mg,
    cloneNowHidden: function() {
      eo = !0;
    },
    cloneNowShown: function() {
      eo = !1;
    },
    dispatchSortableEvent: function(v) {
      zi({
        sortable: n,
        name: v,
        originalEvent: h
      });
    }
  }, f));
};
function zi(o) {
  iw(hs({
    putSortable: li,
    cloneEl: En,
    targetEl: ye,
    rootEl: an,
    oldIndex: ga,
    oldDraggableIndex: _l,
    newIndex: gr,
    newDraggableIndex: Qs
  }, o));
}
var ye, yn, st, an, Po, Uu, En, eo, ga, gr, _l, Qs, xu, li, pa = !1, tc = !1, nc = [], Do, Yr, Ah, bh, Ep, Tp, al, da, ml, vl = !1, Fu = !1, zu, wi, Ch = [], Mh = !1, ic = [], uc = typeof document < "u", Mu = Cg, wp = Fl || Ps ? "cssFloat" : "float", sw = uc && !$T && !Cg && "draggable" in document.createElement("div"), Rg = (function() {
  if (uc) {
    if (Ps)
      return !1;
    var o = document.createElement("x");
    return o.style.cssText = "pointer-events:auto", o.style.pointerEvents === "auto";
  }
})(), Pg = function(i, n) {
  var l = Ze(i), h = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), f = ya(i, 0, n), g = ya(i, 1, n), v = f && Ze(f), y = g && Ze(g), m = v && parseInt(v.marginLeft) + parseInt(v.marginRight) + Wn(f).width, A = y && parseInt(y.marginLeft) + parseInt(y.marginRight) + Wn(g).width;
  if (l.display === "flex")
    return l.flexDirection === "column" || l.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (l.display === "grid")
    return l.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (f && v.float && v.float !== "none") {
    var S = v.float === "left" ? "left" : "right";
    return g && (y.clear === "both" || y.clear === S) ? "vertical" : "horizontal";
  }
  return f && (v.display === "block" || v.display === "flex" || v.display === "table" || v.display === "grid" || m >= h && l[wp] === "none" || g && l[wp] === "none" && m + A > h) ? "vertical" : "horizontal";
}, ow = function(i, n, l) {
  var h = l ? i.left : i.top, f = l ? i.right : i.bottom, g = l ? i.width : i.height, v = l ? n.left : n.top, y = l ? n.right : n.bottom, m = l ? n.width : n.height;
  return h === v || f === y || h + g / 2 === v + m / 2;
}, aw = function(i, n) {
  var l;
  return nc.some(function(h) {
    var f = h[_r].options.emptyInsertThreshold;
    if (!(!f || nd(h))) {
      var g = Wn(h), v = i >= g.left - f && i <= g.right + f, y = n >= g.top - f && n <= g.bottom + f;
      if (v && y)
        return l = h;
    }
  }), l;
}, xg = function(i) {
  function n(f, g) {
    return function(v, y, m, A) {
      var S = v.options.group.name && y.options.group.name && v.options.group.name === y.options.group.name;
      if (f == null && (g || S))
        return !0;
      if (f == null || f === !1)
        return !1;
      if (g && f === "clone")
        return f;
      if (typeof f == "function")
        return n(f(v, y, m, A), g)(v, y, m, A);
      var I = (g ? v : y).options.group.name;
      return f === !0 || typeof f == "string" && f === I || f.join && f.indexOf(I) > -1;
    };
  }
  var l = {}, h = i.group;
  (!h || Gu(h) != "object") && (h = {
    name: h
  }), l.name = h.name, l.checkPull = n(h.pull, !0), l.checkPut = n(h.put), l.revertClone = h.revertClone, i.group = l;
}, Fg = function() {
  !Rg && st && Ze(st, "display", "none");
}, Mg = function() {
  !Rg && st && Ze(st, "display", "");
};
uc && document.addEventListener("click", function(o) {
  if (tc)
    return o.preventDefault(), o.stopPropagation && o.stopPropagation(), o.stopImmediatePropagation && o.stopImmediatePropagation(), tc = !1, !1;
}, !0);
var Ro = function(i) {
  if (ye) {
    i = i.touches ? i.touches[0] : i;
    var n = aw(i.clientX, i.clientY);
    if (n) {
      var l = {};
      for (var h in i)
        i.hasOwnProperty(h) && (l[h] = i[h]);
      l.target = l.rootEl = n, l.preventDefault = void 0, l.stopPropagation = void 0, n[_r]._onDragOver(l);
    }
  }
}, lw = function(i) {
  ye && ye.parentNode[_r]._isOutsideThisEl(i.target);
};
function He(o, i) {
  if (!(o && o.nodeType && o.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(o));
  this.el = o, this.options = i = Rs({}, i), o[_r] = this;
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
      return Pg(o, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(g, v) {
      g.setData("Text", v.textContent);
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
    supportPointer: He.supportPointer !== !1 && "PointerEvent" in window && !pl,
    emptyInsertThreshold: 5
  };
  Ml.initializePlugins(this, o, n);
  for (var l in n)
    !(l in i) && (i[l] = n[l]);
  xg(i);
  for (var h in this)
    h.charAt(0) === "_" && typeof this[h] == "function" && (this[h] = this[h].bind(this));
  this.nativeDraggable = i.forceFallback ? !1 : sw, this.nativeDraggable && (this.options.touchStartThreshold = 1), i.supportPointer ? It(o, "pointerdown", this._onTapStart) : (It(o, "mousedown", this._onTapStart), It(o, "touchstart", this._onTapStart)), this.nativeDraggable && (It(o, "dragover", this), It(o, "dragenter", this)), nc.push(this.el), i.store && i.store.get && this.sort(i.store.get(this) || []), Rs(this, ew());
}
He.prototype = /** @lends Sortable.prototype */
{
  constructor: He,
  _isOutsideThisEl: function(i) {
    !this.el.contains(i) && i !== this.el && (da = null);
  },
  _getDirection: function(i, n) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, i, n, ye) : this.options.direction;
  },
  _onTapStart: function(i) {
    if (i.cancelable) {
      var n = this, l = this.el, h = this.options, f = h.preventOnFilter, g = i.type, v = i.touches && i.touches[0] || i.pointerType && i.pointerType === "touch" && i, y = (v || i).target, m = i.target.shadowRoot && (i.path && i.path[0] || i.composedPath && i.composedPath()[0]) || y, A = h.filter;
      if (_w(l), !ye && !(/mousedown|pointerdown/.test(g) && i.button !== 0 || h.disabled) && !m.isContentEditable && !(!this.nativeDraggable && pl && y && y.tagName.toUpperCase() === "SELECT") && (y = as(y, h.draggable, l, !1), !(y && y.animated) && Uu !== y)) {
        if (ga = Pr(y), _l = Pr(y, h.draggable), typeof A == "function") {
          if (A.call(this, i, y, this)) {
            zi({
              sortable: n,
              rootEl: m,
              name: "filter",
              targetEl: y,
              toEl: l,
              fromEl: l
            }), ji("filter", n, {
              evt: i
            }), f && i.cancelable && i.preventDefault();
            return;
          }
        } else if (A && (A = A.split(",").some(function(S) {
          if (S = as(m, S.trim(), l, !1), S)
            return zi({
              sortable: n,
              rootEl: S,
              name: "filter",
              targetEl: y,
              fromEl: l,
              toEl: l
            }), ji("filter", n, {
              evt: i
            }), !0;
        }), A)) {
          f && i.cancelable && i.preventDefault();
          return;
        }
        h.handle && !as(m, h.handle, l, !1) || this._prepareDragStart(i, v, y);
      }
    }
  },
  _prepareDragStart: function(i, n, l) {
    var h = this, f = h.el, g = h.options, v = f.ownerDocument, y;
    if (l && !ye && l.parentNode === f) {
      var m = Wn(l);
      if (an = f, ye = l, yn = ye.parentNode, Po = ye.nextSibling, Uu = l, xu = g.group, He.dragged = ye, Do = {
        target: ye,
        clientX: (n || i).clientX,
        clientY: (n || i).clientY
      }, Ep = Do.clientX - m.left, Tp = Do.clientY - m.top, this._lastX = (n || i).clientX, this._lastY = (n || i).clientY, ye.style["will-change"] = "all", y = function() {
        if (ji("delayEnded", h, {
          evt: i
        }), He.eventCanceled) {
          h._onDrop();
          return;
        }
        h._disableDelayedDragEvents(), !_p && h.nativeDraggable && (ye.draggable = !0), h._triggerDragStart(i, n), zi({
          sortable: h,
          name: "choose",
          originalEvent: i
        }), pr(ye, g.chosenClass, !0);
      }, g.ignore.split(",").forEach(function(A) {
        Lg(ye, A.trim(), Oh);
      }), It(v, "dragover", Ro), It(v, "mousemove", Ro), It(v, "touchmove", Ro), It(v, "mouseup", h._onDrop), It(v, "touchend", h._onDrop), It(v, "touchcancel", h._onDrop), _p && this.nativeDraggable && (this.options.touchStartThreshold = 4, ye.draggable = !0), ji("delayStart", this, {
        evt: i
      }), g.delay && (!g.delayOnTouchOnly || n) && (!this.nativeDraggable || !(Fl || Ps))) {
        if (He.eventCanceled) {
          this._onDrop();
          return;
        }
        It(v, "mouseup", h._disableDelayedDrag), It(v, "touchend", h._disableDelayedDrag), It(v, "touchcancel", h._disableDelayedDrag), It(v, "mousemove", h._delayedDragTouchMoveHandler), It(v, "touchmove", h._delayedDragTouchMoveHandler), g.supportPointer && It(v, "pointermove", h._delayedDragTouchMoveHandler), h._dragStartTimer = setTimeout(y, g.delay);
      } else
        y();
    }
  },
  _delayedDragTouchMoveHandler: function(i) {
    var n = i.touches ? i.touches[0] : i;
    Math.max(Math.abs(n.clientX - this._lastX), Math.abs(n.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ye && Oh(ye), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var i = this.el.ownerDocument;
    At(i, "mouseup", this._disableDelayedDrag), At(i, "touchend", this._disableDelayedDrag), At(i, "touchcancel", this._disableDelayedDrag), At(i, "mousemove", this._delayedDragTouchMoveHandler), At(i, "touchmove", this._delayedDragTouchMoveHandler), At(i, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(i, n) {
    n = n || i.pointerType == "touch" && i, !this.nativeDraggable || n ? this.options.supportPointer ? It(document, "pointermove", this._onTouchMove) : n ? It(document, "touchmove", this._onTouchMove) : It(document, "mousemove", this._onTouchMove) : (It(ye, "dragend", this), It(an, "dragstart", this._onDragStart));
    try {
      document.selection ? Vu(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(i, n) {
    if (pa = !1, an && ye) {
      ji("dragStarted", this, {
        evt: n
      }), this.nativeDraggable && It(document, "dragover", lw);
      var l = this.options;
      !i && pr(ye, l.dragClass, !1), pr(ye, l.ghostClass, !0), He.active = this, i && this._appendGhost(), zi({
        sortable: this,
        name: "start",
        originalEvent: n
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Yr) {
      this._lastX = Yr.clientX, this._lastY = Yr.clientY, Fg();
      for (var i = document.elementFromPoint(Yr.clientX, Yr.clientY), n = i; i && i.shadowRoot && (i = i.shadowRoot.elementFromPoint(Yr.clientX, Yr.clientY), i !== n); )
        n = i;
      if (ye.parentNode[_r]._isOutsideThisEl(i), n)
        do {
          if (n[_r]) {
            var l = void 0;
            if (l = n[_r]._onDragOver({
              clientX: Yr.clientX,
              clientY: Yr.clientY,
              target: i,
              rootEl: n
            }), l && !this.options.dragoverBubble)
              break;
          }
          i = n;
        } while (n = n.parentNode);
      Mg();
    }
  },
  _onTouchMove: function(i) {
    if (Do) {
      var n = this.options, l = n.fallbackTolerance, h = n.fallbackOffset, f = i.touches ? i.touches[0] : i, g = st && va(st, !0), v = st && g && g.a, y = st && g && g.d, m = Mu && wi && yp(wi), A = (f.clientX - Do.clientX + h.x) / (v || 1) + (m ? m[0] - Ch[0] : 0) / (v || 1), S = (f.clientY - Do.clientY + h.y) / (y || 1) + (m ? m[1] - Ch[1] : 0) / (y || 1);
      if (!He.active && !pa) {
        if (l && Math.max(Math.abs(f.clientX - this._lastX), Math.abs(f.clientY - this._lastY)) < l)
          return;
        this._onDragStart(i, !0);
      }
      if (st) {
        g ? (g.e += A - (Ah || 0), g.f += S - (bh || 0)) : g = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: A,
          f: S
        };
        var I = "matrix(".concat(g.a, ",").concat(g.b, ",").concat(g.c, ",").concat(g.d, ",").concat(g.e, ",").concat(g.f, ")");
        Ze(st, "webkitTransform", I), Ze(st, "mozTransform", I), Ze(st, "msTransform", I), Ze(st, "transform", I), Ah = A, bh = S, Yr = f;
      }
      i.cancelable && i.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!st) {
      var i = this.options.fallbackOnBody ? document.body : an, n = Wn(ye, !0, Mu, !0, i), l = this.options;
      if (Mu) {
        for (wi = i; Ze(wi, "position") === "static" && Ze(wi, "transform") === "none" && wi !== document; )
          wi = wi.parentNode;
        wi !== document.body && wi !== document.documentElement ? (wi === document && (wi = cs()), n.top += wi.scrollTop, n.left += wi.scrollLeft) : wi = cs(), Ch = yp(wi);
      }
      st = ye.cloneNode(!0), pr(st, l.ghostClass, !1), pr(st, l.fallbackClass, !0), pr(st, l.dragClass, !0), Ze(st, "transition", ""), Ze(st, "transform", ""), Ze(st, "box-sizing", "border-box"), Ze(st, "margin", 0), Ze(st, "top", n.top), Ze(st, "left", n.left), Ze(st, "width", n.width), Ze(st, "height", n.height), Ze(st, "opacity", "0.8"), Ze(st, "position", Mu ? "absolute" : "fixed"), Ze(st, "zIndex", "100000"), Ze(st, "pointerEvents", "none"), He.ghost = st, i.appendChild(st), Ze(st, "transform-origin", Ep / parseInt(st.style.width) * 100 + "% " + Tp / parseInt(st.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(i, n) {
    var l = this, h = i.dataTransfer, f = l.options;
    if (ji("dragStart", this, {
      evt: i
    }), He.eventCanceled) {
      this._onDrop();
      return;
    }
    ji("setupClone", this), He.eventCanceled || (En = Dg(ye), En.draggable = !1, En.style["will-change"] = "", this._hideClone(), pr(En, this.options.chosenClass, !1), He.clone = En), l.cloneId = Vu(function() {
      ji("clone", l), !He.eventCanceled && (l.options.removeCloneOnHide || an.insertBefore(En, ye), l._hideClone(), zi({
        sortable: l,
        name: "clone"
      }));
    }), !n && pr(ye, f.dragClass, !0), n ? (tc = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : (At(document, "mouseup", l._onDrop), At(document, "touchend", l._onDrop), At(document, "touchcancel", l._onDrop), h && (h.effectAllowed = "move", f.setData && f.setData.call(l, h, ye)), It(document, "drop", l), Ze(ye, "transform", "translateZ(0)")), pa = !0, l._dragStartId = Vu(l._dragStarted.bind(l, n, i)), It(document, "selectstart", l), al = !0, pl && Ze(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(i) {
    var n = this.el, l = i.target, h, f, g, v = this.options, y = v.group, m = He.active, A = xu === y, S = v.sort, I = li || m, D, B = this, G = !1;
    if (Mh) return;
    function j(K, Fe) {
      ji(K, B, hs({
        evt: i,
        isOwner: A,
        axis: D ? "vertical" : "horizontal",
        revert: g,
        dragRect: h,
        targetRect: f,
        canSort: S,
        fromSortable: I,
        target: l,
        completed: Z,
        onMove: function(Me, kt) {
          return Bu(an, n, ye, h, Me, Wn(Me), i, kt);
        },
        changed: J
      }, Fe));
    }
    function W() {
      j("dragOverAnimationCapture"), B.captureAnimationState(), B !== I && I.captureAnimationState();
    }
    function Z(K) {
      return j("dragOverCompleted", {
        insertion: K
      }), K && (A ? m._hideClone() : m._showClone(B), B !== I && (pr(ye, li ? li.options.ghostClass : m.options.ghostClass, !1), pr(ye, v.ghostClass, !0)), li !== B && B !== He.active ? li = B : B === He.active && li && (li = null), I === B && (B._ignoreWhileAnimating = l), B.animateAll(function() {
        j("dragOverAnimationComplete"), B._ignoreWhileAnimating = null;
      }), B !== I && (I.animateAll(), I._ignoreWhileAnimating = null)), (l === ye && !ye.animated || l === n && !l.animated) && (da = null), !v.dragoverBubble && !i.rootEl && l !== document && (ye.parentNode[_r]._isOutsideThisEl(i.target), !K && Ro(i)), !v.dragoverBubble && i.stopPropagation && i.stopPropagation(), G = !0;
    }
    function J() {
      gr = Pr(ye), Qs = Pr(ye, v.draggable), zi({
        sortable: B,
        name: "change",
        toEl: n,
        newIndex: gr,
        newDraggableIndex: Qs,
        originalEvent: i
      });
    }
    if (i.preventDefault !== void 0 && i.cancelable && i.preventDefault(), l = as(l, v.draggable, n, !0), j("dragOver"), He.eventCanceled) return G;
    if (ye.contains(i.target) || l.animated && l.animatingX && l.animatingY || B._ignoreWhileAnimating === l)
      return Z(!1);
    if (tc = !1, m && !v.disabled && (A ? S || (g = yn !== an) : li === this || (this.lastPutMode = xu.checkPull(this, m, ye, i)) && y.checkPut(this, m, ye, i))) {
      if (D = this._getDirection(i, l) === "vertical", h = Wn(ye), j("dragOverValid"), He.eventCanceled) return G;
      if (g)
        return yn = an, W(), this._hideClone(), j("revert"), He.eventCanceled || (Po ? an.insertBefore(ye, Po) : an.appendChild(ye)), Z(!0);
      var P = nd(n, v.draggable);
      if (!P || dw(i, D, this) && !P.animated) {
        if (P === ye)
          return Z(!1);
        if (P && n === i.target && (l = P), l && (f = Wn(l)), Bu(an, n, ye, h, l, f, i, !!l) !== !1)
          return W(), n.appendChild(ye), yn = n, J(), Z(!0);
      } else if (P && hw(i, D, this)) {
        var U = ya(n, 0, v, !0);
        if (U === ye)
          return Z(!1);
        if (l = U, f = Wn(l), Bu(an, n, ye, h, l, f, i, !1) !== !1)
          return W(), n.insertBefore(ye, U), yn = n, J(), Z(!0);
      } else if (l.parentNode === n) {
        f = Wn(l);
        var re = 0, fe, Ee = ye.parentNode !== n, he = !ow(ye.animated && ye.toRect || h, l.animated && l.toRect || f, D), Oe = D ? "top" : "left", le = vp(l, "top", "top") || vp(ye, "top", "top"), ne = le ? le.scrollTop : void 0;
        da !== l && (fe = f[Oe], vl = !1, Fu = !he && v.invertSwap || Ee), re = fw(i, l, f, D, he ? 1 : v.swapThreshold, v.invertedSwapThreshold == null ? v.swapThreshold : v.invertedSwapThreshold, Fu, da === l);
        var V;
        if (re !== 0) {
          var ge = Pr(ye);
          do
            ge -= re, V = yn.children[ge];
          while (V && (Ze(V, "display") === "none" || V === st));
        }
        if (re === 0 || V === l)
          return Z(!1);
        da = l, ml = re;
        var Ae = l.nextElementSibling, te = !1;
        te = re === 1;
        var oe = Bu(an, n, ye, h, l, f, i, te);
        if (oe !== !1)
          return (oe === 1 || oe === -1) && (te = oe === 1), Mh = !0, setTimeout(cw, 30), W(), te && !Ae ? n.appendChild(ye) : l.parentNode.insertBefore(ye, te ? Ae : l), le && Ng(le, 0, ne - le.scrollTop), yn = ye.parentNode, fe !== void 0 && !Fu && (zu = Math.abs(fe - Wn(l)[Oe])), J(), Z(!0);
      }
      if (n.contains(ye))
        return Z(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    At(document, "mousemove", this._onTouchMove), At(document, "touchmove", this._onTouchMove), At(document, "pointermove", this._onTouchMove), At(document, "dragover", Ro), At(document, "mousemove", Ro), At(document, "touchmove", Ro);
  },
  _offUpEvents: function() {
    var i = this.el.ownerDocument;
    At(i, "mouseup", this._onDrop), At(i, "touchend", this._onDrop), At(i, "pointerup", this._onDrop), At(i, "touchcancel", this._onDrop), At(document, "selectstart", this);
  },
  _onDrop: function(i) {
    var n = this.el, l = this.options;
    if (gr = Pr(ye), Qs = Pr(ye, l.draggable), ji("drop", this, {
      evt: i
    }), yn = ye && ye.parentNode, gr = Pr(ye), Qs = Pr(ye, l.draggable), He.eventCanceled) {
      this._nulling();
      return;
    }
    pa = !1, Fu = !1, vl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Bh(this.cloneId), Bh(this._dragStartId), this.nativeDraggable && (At(document, "drop", this), At(n, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), pl && Ze(document.body, "user-select", ""), Ze(ye, "transform", ""), i && (al && (i.cancelable && i.preventDefault(), !l.dropBubble && i.stopPropagation()), st && st.parentNode && st.parentNode.removeChild(st), (an === yn || li && li.lastPutMode !== "clone") && En && En.parentNode && En.parentNode.removeChild(En), ye && (this.nativeDraggable && At(ye, "dragend", this), Oh(ye), ye.style["will-change"] = "", al && !pa && pr(ye, li ? li.options.ghostClass : this.options.ghostClass, !1), pr(ye, this.options.chosenClass, !1), zi({
      sortable: this,
      name: "unchoose",
      toEl: yn,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: i
    }), an !== yn ? (gr >= 0 && (zi({
      rootEl: yn,
      name: "add",
      toEl: yn,
      fromEl: an,
      originalEvent: i
    }), zi({
      sortable: this,
      name: "remove",
      toEl: yn,
      originalEvent: i
    }), zi({
      rootEl: yn,
      name: "sort",
      toEl: yn,
      fromEl: an,
      originalEvent: i
    }), zi({
      sortable: this,
      name: "sort",
      toEl: yn,
      originalEvent: i
    })), li && li.save()) : gr !== ga && gr >= 0 && (zi({
      sortable: this,
      name: "update",
      toEl: yn,
      originalEvent: i
    }), zi({
      sortable: this,
      name: "sort",
      toEl: yn,
      originalEvent: i
    })), He.active && ((gr == null || gr === -1) && (gr = ga, Qs = _l), zi({
      sortable: this,
      name: "end",
      toEl: yn,
      originalEvent: i
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    ji("nulling", this), an = ye = yn = st = Po = En = Uu = eo = Do = Yr = al = gr = Qs = ga = _l = da = ml = li = xu = He.dragged = He.ghost = He.clone = He.active = null, ic.forEach(function(i) {
      i.checked = !0;
    }), ic.length = Ah = bh = 0;
  },
  handleEvent: function(i) {
    switch (i.type) {
      case "drop":
      case "dragend":
        this._onDrop(i);
        break;
      case "dragenter":
      case "dragover":
        ye && (this._onDragOver(i), uw(i));
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
    for (var i = [], n, l = this.el.children, h = 0, f = l.length, g = this.options; h < f; h++)
      n = l[h], as(n, g.draggable, this.el, !1) && i.push(n.getAttribute(g.dataIdAttr) || gw(n));
    return i;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(i, n) {
    var l = {}, h = this.el;
    this.toArray().forEach(function(f, g) {
      var v = h.children[g];
      as(v, this.options.draggable, h, !1) && (l[f] = v);
    }, this), n && this.captureAnimationState(), i.forEach(function(f) {
      l[f] && (h.removeChild(l[f]), h.appendChild(l[f]));
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
    return as(i, n || this.options.draggable, this.el, !1);
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
    var h = Ml.modifyOption(this, i, n);
    typeof h < "u" ? l[i] = h : l[i] = n, i === "group" && xg(l);
  },
  /**
   * Destroy
   */
  destroy: function() {
    ji("destroy", this);
    var i = this.el;
    i[_r] = null, At(i, "mousedown", this._onTapStart), At(i, "touchstart", this._onTapStart), At(i, "pointerdown", this._onTapStart), this.nativeDraggable && (At(i, "dragover", this), At(i, "dragenter", this)), Array.prototype.forEach.call(i.querySelectorAll("[draggable]"), function(n) {
      n.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), nc.splice(nc.indexOf(this.el), 1), this.el = i = null;
  },
  _hideClone: function() {
    if (!eo) {
      if (ji("hideClone", this), He.eventCanceled) return;
      Ze(En, "display", "none"), this.options.removeCloneOnHide && En.parentNode && En.parentNode.removeChild(En), eo = !0;
    }
  },
  _showClone: function(i) {
    if (i.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (eo) {
      if (ji("showClone", this), He.eventCanceled) return;
      ye.parentNode == an && !this.options.group.revertClone ? an.insertBefore(En, ye) : Po ? an.insertBefore(En, Po) : an.appendChild(En), this.options.group.revertClone && this.animate(ye, En), Ze(En, "display", ""), eo = !1;
    }
  }
};
function uw(o) {
  o.dataTransfer && (o.dataTransfer.dropEffect = "move"), o.cancelable && o.preventDefault();
}
function Bu(o, i, n, l, h, f, g, v) {
  var y, m = o[_r], A = m.options.onMove, S;
  return window.CustomEvent && !Ps && !Fl ? y = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (y = document.createEvent("Event"), y.initEvent("move", !0, !0)), y.to = i, y.from = o, y.dragged = n, y.draggedRect = l, y.related = h || i, y.relatedRect = f || Wn(i), y.willInsertAfter = v, y.originalEvent = g, o.dispatchEvent(y), A && (S = A.call(m, y, g)), S;
}
function Oh(o) {
  o.draggable = !1;
}
function cw() {
  Mh = !1;
}
function hw(o, i, n) {
  var l = Wn(ya(n.el, 0, n.options, !0)), h = 10;
  return i ? o.clientX < l.left - h || o.clientY < l.top && o.clientX < l.right : o.clientY < l.top - h || o.clientY < l.bottom && o.clientX < l.left;
}
function dw(o, i, n) {
  var l = Wn(nd(n.el, n.options.draggable)), h = 10;
  return i ? o.clientX > l.right + h || o.clientX <= l.right && o.clientY > l.bottom && o.clientX >= l.left : o.clientX > l.right && o.clientY > l.top || o.clientX <= l.right && o.clientY > l.bottom + h;
}
function fw(o, i, n, l, h, f, g, v) {
  var y = l ? o.clientY : o.clientX, m = l ? n.height : n.width, A = l ? n.top : n.left, S = l ? n.bottom : n.right, I = !1;
  if (!g) {
    if (v && zu < m * h) {
      if (!vl && (ml === 1 ? y > A + m * f / 2 : y < S - m * f / 2) && (vl = !0), vl)
        I = !0;
      else if (ml === 1 ? y < A + zu : y > S - zu)
        return -ml;
    } else if (y > A + m * (1 - h) / 2 && y < S - m * (1 - h) / 2)
      return pw(i);
  }
  return I = I || g, I && (y < A + m * f / 2 || y > S - m * f / 2) ? y > A + m / 2 ? 1 : -1 : 0;
}
function pw(o) {
  return Pr(ye) < Pr(o) ? 1 : -1;
}
function gw(o) {
  for (var i = o.tagName + o.className + o.src + o.href + o.textContent, n = i.length, l = 0; n--; )
    l += i.charCodeAt(n);
  return l.toString(36);
}
function _w(o) {
  ic.length = 0;
  for (var i = o.getElementsByTagName("input"), n = i.length; n--; ) {
    var l = i[n];
    l.checked && ic.push(l);
  }
}
function Vu(o) {
  return setTimeout(o, 0);
}
function Bh(o) {
  return clearTimeout(o);
}
uc && It(document, "touchmove", function(o) {
  (He.active || pa) && o.cancelable && o.preventDefault();
});
He.utils = {
  on: It,
  off: At,
  css: Ze,
  find: Lg,
  is: function(i, n) {
    return !!as(i, n, i, !1);
  },
  extend: XT,
  throttle: Ig,
  closest: as,
  toggleClass: pr,
  clone: Dg,
  index: Pr,
  nextTick: Vu,
  cancelNextTick: Bh,
  detectDirection: Pg,
  getChild: ya
};
He.get = function(o) {
  return o[_r];
};
He.mount = function() {
  for (var o = arguments.length, i = new Array(o), n = 0; n < o; n++)
    i[n] = arguments[n];
  i[0].constructor === Array && (i = i[0]), i.forEach(function(l) {
    if (!l.prototype || !l.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));
    l.utils && (He.utils = hs(hs({}, He.utils), l.utils)), Ml.mount(l);
  });
};
He.create = function(o, i) {
  return new He(o, i);
};
He.version = KT;
var Mn = [], ll, kh, Gh = !1, Lh, Ih, rc, ul;
function mw() {
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
      this.sortable.nativeDraggable ? It(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? It(document, "pointermove", this._handleFallbackAutoScroll) : l.touches ? It(document, "touchmove", this._handleFallbackAutoScroll) : It(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(n) {
      var l = n.originalEvent;
      !this.options.dragOverBubble && !l.rootEl && this._handleAutoScroll(l);
    },
    drop: function() {
      this.sortable.nativeDraggable ? At(document, "dragover", this._handleAutoScroll) : (At(document, "pointermove", this._handleFallbackAutoScroll), At(document, "touchmove", this._handleFallbackAutoScroll), At(document, "mousemove", this._handleFallbackAutoScroll)), Sp(), Wu(), QT();
    },
    nulling: function() {
      rc = kh = ll = Gh = ul = Lh = Ih = null, Mn.length = 0;
    },
    _handleFallbackAutoScroll: function(n) {
      this._handleAutoScroll(n, !0);
    },
    _handleAutoScroll: function(n, l) {
      var h = this, f = (n.touches ? n.touches[0] : n).clientX, g = (n.touches ? n.touches[0] : n).clientY, v = document.elementFromPoint(f, g);
      if (rc = n, l || this.options.forceAutoScrollFallback || Fl || Ps || pl) {
        Nh(n, this.options, v, l);
        var y = to(v, !0);
        Gh && (!ul || f !== Lh || g !== Ih) && (ul && Sp(), ul = setInterval(function() {
          var m = to(document.elementFromPoint(f, g), !0);
          m !== y && (y = m, Wu()), Nh(n, h.options, m, l);
        }, 10), Lh = f, Ih = g);
      } else {
        if (!this.options.bubbleScroll || to(v, !0) === cs()) {
          Wu();
          return;
        }
        Nh(n, this.options, to(v, !1), !1);
      }
    }
  }, Rs(o, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Wu() {
  Mn.forEach(function(o) {
    clearInterval(o.pid);
  }), Mn = [];
}
function Sp() {
  clearInterval(ul);
}
var Nh = Ig(function(o, i, n, l) {
  if (i.scroll) {
    var h = (o.touches ? o.touches[0] : o).clientX, f = (o.touches ? o.touches[0] : o).clientY, g = i.scrollSensitivity, v = i.scrollSpeed, y = cs(), m = !1, A;
    kh !== n && (kh = n, Wu(), ll = i.scroll, A = i.scrollFn, ll === !0 && (ll = to(n, !0)));
    var S = 0, I = ll;
    do {
      var D = I, B = Wn(D), G = B.top, j = B.bottom, W = B.left, Z = B.right, J = B.width, P = B.height, U = void 0, re = void 0, fe = D.scrollWidth, Ee = D.scrollHeight, he = Ze(D), Oe = D.scrollLeft, le = D.scrollTop;
      D === y ? (U = J < fe && (he.overflowX === "auto" || he.overflowX === "scroll" || he.overflowX === "visible"), re = P < Ee && (he.overflowY === "auto" || he.overflowY === "scroll" || he.overflowY === "visible")) : (U = J < fe && (he.overflowX === "auto" || he.overflowX === "scroll"), re = P < Ee && (he.overflowY === "auto" || he.overflowY === "scroll"));
      var ne = U && (Math.abs(Z - h) <= g && Oe + J < fe) - (Math.abs(W - h) <= g && !!Oe), V = re && (Math.abs(j - f) <= g && le + P < Ee) - (Math.abs(G - f) <= g && !!le);
      if (!Mn[S])
        for (var ge = 0; ge <= S; ge++)
          Mn[ge] || (Mn[ge] = {});
      (Mn[S].vx != ne || Mn[S].vy != V || Mn[S].el !== D) && (Mn[S].el = D, Mn[S].vx = ne, Mn[S].vy = V, clearInterval(Mn[S].pid), (ne != 0 || V != 0) && (m = !0, Mn[S].pid = setInterval(function() {
        l && this.layer === 0 && He.active._onTouchMove(rc);
        var Ae = Mn[this.layer].vy ? Mn[this.layer].vy * v : 0, te = Mn[this.layer].vx ? Mn[this.layer].vx * v : 0;
        typeof A == "function" && A.call(He.dragged.parentNode[_r], te, Ae, o, rc, Mn[this.layer].el) !== "continue" || Ng(Mn[this.layer].el, te, Ae);
      }.bind({
        layer: S
      }), 24))), S++;
    } while (i.bubbleScroll && I !== y && (I = to(I, !1)));
    Gh = m;
  }
}, 30), Bg = function(i) {
  var n = i.originalEvent, l = i.putSortable, h = i.dragEl, f = i.activeSortable, g = i.dispatchSortableEvent, v = i.hideGhostForTarget, y = i.unhideGhostForTarget;
  if (n) {
    var m = l || f;
    v();
    var A = n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, S = document.elementFromPoint(A.clientX, A.clientY);
    y(), m && !m.el.contains(S) && (g("spill"), this.onSpill({
      dragEl: h,
      putSortable: l
    }));
  }
};
function id() {
}
id.prototype = {
  startIndex: null,
  dragStart: function(i) {
    var n = i.oldDraggableIndex;
    this.startIndex = n;
  },
  onSpill: function(i) {
    var n = i.dragEl, l = i.putSortable;
    this.sortable.captureAnimationState(), l && l.captureAnimationState();
    var h = ya(this.sortable.el, this.startIndex, this.options);
    h ? this.sortable.el.insertBefore(n, h) : this.sortable.el.appendChild(n), this.sortable.animateAll(), l && l.animateAll();
  },
  drop: Bg
};
Rs(id, {
  pluginName: "revertOnSpill"
});
function rd() {
}
rd.prototype = {
  onSpill: function(i) {
    var n = i.dragEl, l = i.putSortable, h = l || this.sortable;
    h.captureAnimationState(), n.parentNode && n.parentNode.removeChild(n), h.animateAll();
  },
  drop: Bg
};
Rs(rd, {
  pluginName: "removeOnSpill"
});
He.mount(new mw());
He.mount(rd, id);
var vw = Object.defineProperty, yw = Object.defineProperties, Ew = Object.getOwnPropertyDescriptors, Ap = Object.getOwnPropertySymbols, Tw = Object.prototype.hasOwnProperty, ww = Object.prototype.propertyIsEnumerable, bp = (o, i, n) => i in o ? vw(o, i, { enumerable: !0, configurable: !0, writable: !0, value: n }) : o[i] = n, no = (o, i) => {
  for (var n in i || (i = {}))
    Tw.call(i, n) && bp(o, n, i[n]);
  if (Ap)
    for (var n of Ap(i))
      ww.call(i, n) && bp(o, n, i[n]);
  return o;
}, sc = (o, i) => yw(o, Ew(i));
function Dh(o) {
  o.parentElement !== null && o.parentElement.removeChild(o);
}
function Cp(o, i, n) {
  const l = n === 0 ? o.children[0] : o.children[n - 1].nextSibling;
  o.insertBefore(i, l);
}
function Sw() {
  return typeof window < "u" ? window.console : global.console;
}
const Aw = Sw();
function bw(o) {
  const i = /* @__PURE__ */ Object.create(null);
  return function(l) {
    return i[l] || (i[l] = o(l));
  };
}
const Cw = /-(\w)/g, Ow = bw((o) => o.replace(Cw, (i, n) => n.toUpperCase())), kg = ["Start", "Add", "Remove", "Update", "End"], Gg = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], Ug = ["Move"], Lw = [Ug, kg, Gg].flatMap((o) => o).map((o) => `on${o}`), Uh = {
  manage: Ug,
  manageAndEmit: kg,
  emit: Gg
};
function Iw(o) {
  return Lw.indexOf(o) !== -1;
}
const Nw = [
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
function Dw(o) {
  return Nw.includes(o);
}
function Rw(o) {
  return ["transition-group", "TransitionGroup"].includes(o);
}
function zg(o) {
  return ["id", "class", "role", "style"].includes(o) || o.startsWith("data-") || o.startsWith("aria-") || o.startsWith("on");
}
function Vg(o) {
  return o.reduce((i, [n, l]) => (i[n] = l, i), {});
}
function Pw({ $attrs: o, componentData: i = {} }) {
  const n = Vg(Object.entries(o).filter(([l, h]) => zg(l)));
  return no(no({}, n), i);
}
function xw({ $attrs: o, callBackBuilder: i }) {
  const n = Vg(Wg(o));
  Object.entries(i).forEach(([h, f]) => {
    Uh[h].forEach((g) => {
      n[`on${g}`] = f(g);
    });
  });
  const l = `[data-draggable]${n.draggable || ""}`;
  return sc(no({}, n), {
    draggable: l
  });
}
function Wg(o) {
  return Object.entries(o).filter(([i, n]) => !zg(i)).map(([i, n]) => [Ow(i), n]).filter(([i, n]) => !Iw(i));
}
const Op = (o) => {
  const i = o.el || Array.isArray(o.children) && o.children[0].el.parentNode;
  return i || console.error("使用 transition-group , 需要在slot中template内至少2层html标签"), i || {};
}, Fw = (o, i) => o.__draggable_context = i, Lp = (o) => o.__draggable_context;
class Mw {
  constructor({
    nodes: { header: i, default: n, footer: l },
    root: h,
    realList: f
  }) {
    this.defaultNodes = n, this.children = [...i, ...n, ...l], this.externalComponent = h.externalComponent, this.rootTransition = h.transition, this.tag = h.tag, this.realList = f;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(i, n) {
    const { tag: l, children: h, _isRootComponent: f } = this;
    return i(l, n, f ? { default: () => h } : h);
  }
  updated() {
    const { defaultNodes: i, realList: n } = this;
    i.forEach((l, h) => {
      Fw(Op(l), {
        element: n[h],
        index: h
      });
    });
  }
  getUnderlyingVm(i) {
    return Lp(i);
  }
  getVmIndexFromDomIndex(i, n) {
    const { defaultNodes: l } = this, { length: h } = l, f = n.children, g = f.item(i);
    if (g === null)
      return h;
    const v = Lp(g);
    if (v)
      return v.index;
    if (h === 0)
      return 0;
    const y = Op(l[0]), m = [...f].findIndex((A) => A === y);
    return i < m ? 0 : h;
  }
}
function Bw(o, i) {
  const n = o[i];
  return n ? n() : [];
}
function kw({ $slots: o, realList: i, getKey: n }) {
  const l = i || [], [h, f] = ["header", "footer"].map((y) => Bw(o, y)), { item: g } = o;
  if (!g)
    throw new Error("draggable element must have an item slot");
  const v = l.flatMap((y, m) => g({ element: y, index: m }).map((A) => (A.key = n(y), A.props = sc(no({}, A.props || {}), { "data-draggable": !0 }), A)));
  if (v.length !== l.length)
    throw new Error("Item slot must have only one child");
  return {
    header: h,
    footer: f,
    default: v
  };
}
function Gw(o) {
  const i = Rw(o), n = !Dw(o) && !i;
  return {
    transition: i,
    externalComponent: n,
    tag: n ? HE(o) : i ? YE : o
  };
}
function Uw({ $slots: o, tag: i, realList: n, getKey: l }) {
  const h = kw({ $slots: o, realList: n, getKey: l }), f = Gw(i);
  return new Mw({ nodes: h, root: f, realList: n });
}
function Zg(o, i) {
  Qt(() => this.$emit(o.toLowerCase(), i));
}
function Hg(o) {
  return (i, n) => {
    if (this.realList !== null)
      return this[`onDrag${o}`](i, n);
  };
}
function zw(o) {
  const i = Hg.call(this, o);
  return (n, l) => {
    i.call(this, n, l), Zg.call(this, o, n);
  };
}
let Rh = null;
const Vw = {
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
}, Ww = [
  "update:modelValue",
  "change",
  ...[...Uh.manageAndEmit, ...Uh.emit].map((o) => o.toLowerCase())
], Zw = it({
  name: "draggable",
  inheritAttrs: !1,
  props: Vw,
  emits: Ww,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: o, $attrs: i, tag: n, componentData: l, realList: h, getKey: f } = this, g = Uw({
        $slots: o,
        tag: n,
        realList: h,
        getKey: f
      });
      this.componentStructure = g;
      const v = Pw({ $attrs: i, componentData: l });
      return g.render(Ds, v);
    } catch (o) {
      return this.error = !0, Ds("pre", { style: { color: "red" } }, o.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && Aw.error("modelValue and list props are mutually exclusive! Please set one or another.");
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: o, $el: i, componentStructure: n } = this;
    n.updated();
    const l = xw({
      $attrs: o,
      callBackBuilder: {
        manageAndEmit: (f) => zw.call(this, f),
        emit: (f) => Zg.bind(this, f),
        manage: (f) => Hg.call(this, f)
      }
    }), h = i.nodeType === 1 ? i : i.parentElement;
    this._sortable = new He(h, l), this.targetDomElement = h, h.__draggable_component__ = this;
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
        i && Wg(o).forEach(([n, l]) => {
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
      Qt(() => this.$emit("change", o));
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
      const l = n.realList, h = { list: l, component: n };
      if (o !== i && l) {
        const f = n.getUnderlyingVm(i) || {};
        return no(no({}, f), h);
      }
      return h;
    },
    getVmIndexFromDomIndex(o) {
      return this.componentStructure.getVmIndexFromDomIndex(o, this.targetDomElement);
    },
    onDragStart(o) {
      this.context = this.getUnderlyingVm(o.item), o.item._underlying_vm_ = this.clone(this.context.element), Rh = o.item;
    },
    onDragAdd(o) {
      const i = o.item._underlying_vm_;
      if (i === void 0)
        return;
      Dh(o.item);
      const n = this.getVmIndexFromDomIndex(o.newIndex);
      this.spliceList(n, 0, i);
      const l = { element: i, newIndex: n };
      this.emitChanges({ added: l });
    },
    onDragRemove(o) {
      if (Cp(this.$el, o.item, o.oldIndex), o.pullMode === "clone") {
        Dh(o.clone);
        return;
      }
      const { index: i, element: n } = this.context;
      this.spliceList(i, 1);
      const l = { element: n, oldIndex: i };
      this.emitChanges({ removed: l });
    },
    onDragUpdate(o) {
      Dh(o.item), Cp(o.from, o.item, o.oldIndex);
      const i = this.context.index, n = this.getVmIndexFromDomIndex(o.newIndex);
      this.updatePosition(i, n);
      const l = { element: this.context.element, oldIndex: i, newIndex: n };
      this.emitChanges({ moved: l });
    },
    computeFutureIndex(o, i) {
      if (!o.element)
        return 0;
      const n = [...i.to.children].filter((g) => g.style.display !== "none"), l = n.indexOf(i.related), h = o.component.getVmIndexFromDomIndex(l);
      return n.indexOf(Rh) !== -1 || !i.willInsertAfter ? h : h + 1;
    },
    onDragMove(o, i) {
      const { move: n, realList: l } = this;
      if (!n || !l)
        return !0;
      const h = this.getRelatedContextFromMoveEvent(o), f = this.computeFutureIndex(h, o), g = sc(no({}, this.context), {
        futureIndex: f
      }), v = sc(no({}, o), {
        relatedContext: h,
        draggedContext: g
      });
      return n(v, i);
    },
    onDragEnd() {
      Rh = null;
    }
  }
}), ai = [];
for (let o = 0; o < 256; ++o)
  ai.push((o + 256).toString(16).slice(1));
function Hw(o, i = 0) {
  return (ai[o[i + 0]] + ai[o[i + 1]] + ai[o[i + 2]] + ai[o[i + 3]] + "-" + ai[o[i + 4]] + ai[o[i + 5]] + "-" + ai[o[i + 6]] + ai[o[i + 7]] + "-" + ai[o[i + 8]] + ai[o[i + 9]] + "-" + ai[o[i + 10]] + ai[o[i + 11]] + ai[o[i + 12]] + ai[o[i + 13]] + ai[o[i + 14]] + ai[o[i + 15]]).toLowerCase();
}
const Yw = new Uint8Array(16);
function qw() {
  return crypto.getRandomValues(Yw);
}
function qr(o, i, n) {
  return crypto.randomUUID ? crypto.randomUUID() : Kw(o);
}
function Kw(o, i, n) {
  o = o || {};
  const l = o.random ?? o.rng?.() ?? qw();
  if (l.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return l[6] = l[6] & 15 | 64, l[8] = l[8] & 63 | 128, Hw(l);
}
class Yg {
  constructor(i) {
    this.geoJson = {}, this.url = i;
  }
  async fetch() {
    return this.geoJson = await (await fetch(this.url)).json(), this.geoJson;
  }
}
const $w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Yg
}, Symbol.toStringTag, { value: "Module" })), Jw = { class: "conditions" }, jw = { class: "conditions__head" }, Xw = { class: "conditions__head" }, Qw = { class: "conditions__head" }, e2 = { class: "conditions__new" }, t2 = ["list", "placeholder"], n2 = ["id"], i2 = ["value"], r2 = ["list", "placeholder"], s2 = ["id"], o2 = ["value"], a2 = { class: "conditions__end" }, l2 = ["value", "list", "onBlur", "onKeyup"], u2 = ["onClick"], c2 = ["onClick"], h2 = ["value", "list", "onBlur", "onKeyup"], d2 = ["onClick"], f2 = { class: "conditions__end" }, p2 = { key: 0 }, g2 = {
  class: "conditions__empty",
  colspan: "4"
}, _2 = /* @__PURE__ */ it({
  __name: "ConditionSettings",
  props: {
    modelValue: {
      default: () => Bo([])
    },
    modelModifiers: {},
    thingProps: {
      default: () => Bo(
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
    const { t: i } = io("map"), n = mr(o, "modelValue"), l = me(""), h = me(""), f = me(xr.equals), g = mr(o, "thingProps"), v = [
      {
        text: "==",
        selector: xr.equals
      },
      {
        text: ">",
        selector: xr.greaterThen
      },
      {
        text: ">=",
        selector: xr.greaterThenEquals
      },
      {
        text: "<",
        selector: xr.lessThen
      },
      {
        text: "<=",
        selector: xr.lessThenEquals
      },
      {
        text: "!=",
        selector: xr.notEQuals
      }
    ], y = Wf(), m = Wf(), A = (P) => g.value.find((U) => U.selector === P)?.suggestions ?? [], S = Xt(() => A(l.value)), I = (P) => v.find((U) => U.selector === P)?.text ?? String(P), D = me(void 0), B = (P, U) => D.value === `${P}:${U}`, G = (P, U) => {
      D.value = `${P}:${U}`;
    }, j = () => {
      D.value = void 0;
    }, W = (P) => {
      P && (g.value.some((U) => U.selector === P) || g.value.push({ text: P, selector: P }));
    }, Z = () => {
      W(l.value), n.value.push({
        comperator: f.value,
        value: h.value,
        prop: l.value
      }), f.value = xr.equals, h.value = "", l.value = "";
    }, J = (P, U) => {
      W(U), P.prop = U, j();
    };
    return (P, U) => (z(), X("table", Jw, [
      ie("thead", null, [
        ie("tr", null, [
          ie("th", jw, Ie(C(i)("Conditions.property")), 1),
          ie("th", Xw, Ie(C(i)("Conditions.is")), 1),
          ie("th", Qw, Ie(C(i)("Conditions.value")), 1),
          U[3] || (U[3] = ie("th", { class: "conditions__head conditions__head--end" }, null, -1))
        ]),
        ie("tr", e2, [
          ie("td", null, [
            Zu(ie("input", {
              "onUpdate:modelValue": U[0] || (U[0] = (re) => l.value = re),
              list: C(y),
              class: "cell__input",
              placeholder: C(i)("Conditions.property")
            }, null, 8, t2), [
              [Hu, l.value]
            ]),
            ie("datalist", { id: C(y) }, [
              (z(!0), X(Re, null, zt(g.value, (re) => (z(), X("option", {
                key: re.selector,
                value: re.selector
              }, Ie(re.text), 9, i2))), 128))
            ], 8, n2)
          ]),
          ie("td", null, [
            ue(C(Ku), {
              modelValue: f.value,
              "onUpdate:modelValue": U[1] || (U[1] = (re) => f.value = re),
              options: v,
              "label-key": "text",
              "value-key": "selector",
              stacked: ""
            }, null, 8, ["modelValue"])
          ]),
          ie("td", null, [
            Zu(ie("input", {
              "onUpdate:modelValue": U[2] || (U[2] = (re) => h.value = re),
              list: C(m),
              class: "cell__input",
              placeholder: C(i)("Conditions.value")
            }, null, 8, r2), [
              [Hu, h.value]
            ]),
            ie("datalist", { id: C(m) }, [
              (z(!0), X(Re, null, zt(S.value, (re, fe) => (z(), X("option", {
                key: fe,
                value: re
              }, null, 8, o2))), 128))
            ], 8, s2)
          ]),
          ie("td", a2, [
            ue(C(Vn), {
              intent: "primary",
              disabled: !l.value || !h.value,
              onClick: Z
            }, {
              default: Ke(() => [
                Qi(Ie(C(i)("Conditions.add")), 1)
              ]),
              _: 1
            }, 8, ["disabled"])
          ])
        ])
      ]),
      ie("tbody", null, [
        (z(!0), X(Re, null, zt(n.value, (re, fe) => (z(), X("tr", { key: fe }, [
          ie("td", null, [
            B(fe, "prop") ? (z(), X("input", {
              key: 0,
              value: re.prop,
              list: C(y),
              class: "cell__input",
              onBlur: (Ee) => J(re, Ee.target.value),
              onKeyup: Yu((Ee) => J(re, Ee.target.value), ["enter"])
            }, null, 40, l2)) : (z(), X("span", {
              key: 1,
              class: "cell__text",
              onClick: (Ee) => G(fe, "prop")
            }, Ie(re.prop), 9, u2))
          ]),
          ie("td", null, [
            B(fe, "comperator") ? (z(), dt(C(Ku), {
              key: 0,
              "model-value": re.comperator,
              options: v,
              "label-key": "text",
              "value-key": "selector",
              stacked: "",
              "onUpdate:modelValue": (Ee) => {
                re.comperator = Ee, j();
              }
            }, null, 8, ["model-value", "onUpdate:modelValue"])) : (z(), X("span", {
              key: 1,
              class: "cell__text",
              onClick: (Ee) => G(fe, "comperator")
            }, Ie(I(re.comperator)), 9, c2))
          ]),
          ie("td", null, [
            B(fe, "value") ? (z(), X("input", {
              key: 0,
              value: re.value,
              list: C(m),
              class: "cell__input",
              onBlur: (Ee) => {
                re.value = Ee.target.value, j();
              },
              onKeyup: Yu((Ee) => {
                re.value = Ee.target.value, j();
              }, ["enter"])
            }, null, 40, h2)) : (z(), X("span", {
              key: 1,
              class: "cell__text",
              onClick: (Ee) => G(fe, "value")
            }, Ie(re.value), 9, d2))
          ]),
          ie("td", f2, [
            ue(C(Vn), {
              intent: "quiet",
              title: C(i)("Conditions.remove"),
              onClick: (Ee) => n.value.splice(fe, 1)
            }, {
              default: Ke(() => [
                ue(C(Ht), {
                  name: "delete",
                  size: "sm"
                })
              ]),
              _: 1
            }, 8, ["title", "onClick"])
          ])
        ]))), 128)),
        n.value.length === 0 ? (z(), X("tr", p2, [
          ie("td", g2, Ie(C(i)("Conditions.none")), 1)
        ])) : Be("", !0)
      ])
    ]));
  }
}), zh = /* @__PURE__ */ er(_2, [["__scopeId", "data-v-6042a171"]]), m2 = { class: "pmap_container" }, v2 = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", y2 = 5, E2 = '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', T2 = /* @__PURE__ */ it({
  __name: "MapPreviewPoint",
  setup(o) {
    const i = [50.93115286, 11.60392726], n = me(null);
    return Yt(() => {
      n.value && n.value.leafletObject && n.value.leafletObject.invalidateSize();
    }), (l, h) => (z(), X("div", m2, [
      ue(C(Kh), {
        id: "map_t",
        ref_key: "map",
        ref: n,
        center: i,
        "max-zoom": 21,
        zoom: y2,
        style: { height: "100%" }
      }, {
        default: Ke(() => [
          ue(C(jh), {
            attribution: E2,
            options: {
              maxNativeZoom: 19,
              maxZoom: 25
            },
            url: v2
          }),
          il(l.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["center"])
    ]));
  }
}), w2 = /* @__PURE__ */ er(T2, [["__scopeId", "data-v-c72cb17a"]]), S2 = { class: "flex flex-col md6 pa-3" }, A2 = { class: "flex flex-col md6 pa-3" }, b2 = { class: "inner" }, C2 = { class: "inner" }, O2 = ["src"], L2 = {
  key: 1,
  class: "placeholder"
}, I2 = /* @__PURE__ */ it({
  __name: "PointStyler",
  props: {
    modelValue: {
      default: () => Bo({
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
    qE((f) => ({
      v102d0d28: n.value.pointPin.color
    }));
    const { t: i } = io("map"), n = mr(o, "modelValue"), l = [
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
    ], h = Xt(() => [
      { label: i("Point.as.icon"), value: "icon" },
      { label: i("Point.as.prop"), value: "prop" },
      { label: i("Point.as.image"), value: "image" },
      { label: i("Point.as.none"), value: "none" }
    ]);
    return (f, g) => (z(), X(Re, null, [
      ie("div", S2, [
        ue(C(Wh), {
          modelValue: n.value.point_render_as,
          "onUpdate:modelValue": g[0] || (g[0] = (v) => n.value.point_render_as = v),
          options: h.value,
          "value-key": "value",
          "label-key": "label",
          label: C(i)("Point.renderAs"),
          inline: ""
        }, null, 8, ["modelValue", "options", "label"]),
        n.value.point_render_as == "icon" ? (z(), dt(C(XE), {
          key: 0,
          modelValue: n.value.point,
          "onUpdate:modelValue": g[1] || (g[1] = (v) => n.value.point = v)
        }, null, 8, ["modelValue"])) : Be("", !0),
        n.value.point_render_as == "prop" ? (z(), dt(C(Ku), {
          key: 1,
          modelValue: n.value.point_prop,
          "onUpdate:modelValue": g[2] || (g[2] = (v) => n.value.point_prop = v),
          options: l,
          label: C(i)("Point.prop"),
          placeholder: C(i)("Observations.choose"),
          "label-key": "text",
          "value-key": "selector"
        }, null, 8, ["modelValue", "label", "placeholder"])) : Be("", !0),
        n.value.point_render_as == "image" ? (z(), X(Re, { key: 2 }, [
          ue(C(us), {
            modelValue: n.value.point_image_url,
            "onUpdate:modelValue": g[3] || (g[3] = (v) => n.value.point_image_url = v),
            label: C(i)("Point.imageUrl"),
            placeholder: "https://example.com/image.png"
          }, null, 8, ["modelValue", "label"]),
          ue(C(us), {
            modelValue: n.value.point_image_size,
            "onUpdate:modelValue": g[4] || (g[4] = (v) => n.value.point_image_size = v),
            modelModifiers: { number: !0 },
            type: "number",
            label: C(i)("Point.imageSize"),
            suffix: "px",
            placeholder: "32"
          }, null, 8, ["modelValue", "label"])
        ], 64)) : Be("", !0),
        n.value.point_render_as != "none" ? (z(), X(Re, { key: 3 }, [
          ue(C(kp), { class: "mb15" }),
          ue(C($u), {
            modelValue: n.value.pointPin.color,
            "onUpdate:modelValue": g[5] || (g[5] = (v) => n.value.pointPin.color = v),
            class: "pin-color",
            label: C(i)("Point.pinColor")
          }, null, 8, ["modelValue", "label"]),
          ue(C(Ju), {
            modelValue: n.value.pointPin.solid,
            "onUpdate:modelValue": g[6] || (g[6] = (v) => n.value.pointPin.solid = v),
            label: C(i)("Point.solid")
          }, null, 8, ["modelValue", "label"])
        ], 64)) : Be("", !0)
      ]),
      ie("div", A2, [
        ue(w2, Pp({ ref: "MapPrev2" }, n.value.point), {
          default: Ke(() => [
            ue(C(El), { "lat-lng": [50.92828047934907, 11.587408017353823] }, {
              default: Ke(() => [
                ue(C(yl), { "class-name": "someExtraClass" }, {
                  default: Ke(() => [
                    n.value.point_render_as == "icon" ? (z(), X("div", {
                      key: 0,
                      class: Fo(["pin", "icon", { solid: n.value.pointPin.solid }])
                    }, [
                      ie("div", b2, [
                        ue(C(Mp), {
                          config: n.value.point,
                          configv: n.value.point,
                          "onUpdate:configv": g[7] || (g[7] = (v) => n.value.point = v)
                        }, null, 8, ["config", "configv"])
                      ])
                    ], 2)) : Be("", !0),
                    n.value.point_render_as == "prop" ? (z(), X("div", {
                      key: 1,
                      class: Fo(["pin", "contain", "marker", { solid: n.value.pointPin.solid }])
                    }, [
                      ie("div", C2, Ie(n.value.point_prop), 1)
                    ], 2)) : Be("", !0),
                    n.value.point_render_as == "image" ? (z(), X("div", {
                      key: 2,
                      class: "image-marker",
                      style: _a({ width: (n.value.point_image_size || 32) + "px", height: (n.value.point_image_size || 32) + "px" })
                    }, [
                      n.value.point_image_url ? (z(), X("img", {
                        key: 0,
                        src: n.value.point_image_url,
                        style: { width: "100%", height: "100%", objectFit: "contain" }
                      }, null, 8, O2)) : (z(), X("div", L2, Ie(C(i)("Point.noImage")), 1))
                    ], 4)) : Be("", !0)
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
    ], 64));
  }
}), qg = /* @__PURE__ */ er(I2, [["__scopeId", "data-v-e218ba59"]]), N2 = "FeatureCollection", D2 = /* @__PURE__ */ JSON.parse('[{"type":"Feature","id":0,"properties":{"ID_0":86,"ISO":"DEU","NAME_ENGLI":"Germany","NAME_ISO":"GERMANY","NAME_FAO":"Germany","NAME_LOCAL":"Deutschland","NAME_OBSOL":null,"NAME_VARIA":"Germany","NAME_NONLA":null,"NAME_FRENC":"Allemagne","NAME_SPANI":"Alemania","NAME_RUSSI":"????????","NAME_ARABI":"???????","NAME_CHINE":"??","WASPARTOF":null,"CONTAINS":"East Germany|West Germany|DDR","SOVEREIGN":"Germany","ISO2":"DE","WWW":null,"FIPS":"GM","ISON":276,"VALIDFR":"Unknown","VALIDTO":"Present","EUmember":1},"geometry":{"type":"MultiPolygon","coordinates":[[[[8.407297932191138,55.04395228653645],[8.442500114441145,55.0159721374514],[8.353609085083235,54.967361450195654],[8.366944313049544,54.90236282348644],[8.429720878601302,54.87763977050787],[8.812039375305233,54.9167366027832],[9.224779129028263,54.85595321655279],[9.282591819763411,54.80223464965832],[9.408679962158317,54.841171264648494],[9.435277938842773,54.788471221923885],[9.613611221313704,54.87597274780296],[9.603055953979776,54.83152770996105],[9.84305572509794,54.756248474121094],[9.955279350281046,54.780139923095646],[10.034722328186263,54.67235946655285],[9.983054161071891,54.701248168945426],[9.963891689870369,54.67303628596345],[10.034166336059798,54.66986083984375],[10.02750015258789,54.55041503906284],[9.840277671813965,54.46736145019537],[10.199167251587141,54.45597076416027],[10.13194561004633,54.311248779296875],[10.228056907653865,54.413471221923885],[10.318612098693961,54.43569564819353],[10.704722404479924,54.304862976074276],[10.928610801696777,54.381805419922216],[11.128055572509766,54.39069366455084],[11.058609962463436,54.35430526733438],[11.093610763550032,54.19791793823248],[10.75416564941412,54.05486297607433],[10.890831947326603,53.955696105956974],[11.179167747497502,54.01569366455084],[11.258610725403116,53.98485946655296],[11.258610725403116,53.93402862548851],[11.335276603698844,53.95847320556646],[11.45472240447998,53.900417327881144],[11.483610153198242,53.968471527099666],[11.378055572509936,53.997360229492244],[11.492501258850325,54.02291488647472],[11.490279197693042,53.968193054199276],[11.62583255767845,54.08958435058588],[11.525277137756348,54.07180404663086],[11.682498931884766,54.15319442749018],[12.087498664856184,54.18319320678711],[12.124721527099894,54.150138854980526],[12.09527778625494,54.18097305297857],[12.339165687561263,54.2979164123538],[12.519721031188965,54.484306335449276],[12.962499618530387,54.437637329101676],[12.68351455577495,54.40644354068151],[12.715277671814022,54.404304504394474],[12.678054809570312,54.37014007568371],[12.786945343017862,54.3962516784668],[12.810278892517147,54.3451385498048],[13.019721984863338,54.43902587890659],[13.093609809875716,54.366806030273665],[13.105833053588867,54.281806945800895],[13.286388397216797,54.235137939453296],[13.346388816833723,54.18041610717819],[13.318054199219034,54.15986251831066],[13.415834426880224,54.17514038085943],[13.382498741150187,54.14236068725586],[13.456945419311523,54.090694427490234],[13.696389198303223,54.17180633544956],[13.806944847107104,54.10319519042969],[13.74416637420677,54.029304504394645],[13.914167404174805,53.92235946655302],[13.824722290039404,53.866249084473],[13.937500953674316,53.90847396850597],[13.90583419799816,53.98986053466797],[13.965278625488452,53.99013900756853],[13.959721565246582,53.93402862548851],[14.042499542236555,53.942081451416016],[14.046944618225268,53.99652862548845],[14.00347855685085,54.0366769060455],[14.221389770507926,53.93013763427729],[14.186329841613997,53.91558074951217],[14.2173366546632,53.865417480469205],[13.806388854980412,53.85819625854492],[14.038612365722884,53.75513839721674],[14.2830562591555,53.73875045776384],[14.215276718139592,53.70264053344738],[14.273162841796875,53.69930648803711],[14.324908256530762,53.61864852905296],[14.302708625793684,53.54261016845703],[14.448929786682186,53.26163864135748],[14.378918647766113,53.204158782958984],[14.345703125000057,53.052917480468864],[14.142452239990291,52.961112976074276],[14.121270179748649,52.84027099609369],[14.639061927795638,52.58003234863287],[14.600604057312069,52.53302383422857],[14.631249427795638,52.499130249023665],[14.528908729553166,52.39641189575218],[14.570899963378906,52.2895622253418],[14.699570655822868,52.24108886718756],[14.669348716736067,52.12155151367199],[14.741278648376522,52.07339096069347],[14.70477771759056,51.94266128540062],[14.586701393127385,51.823604583740234],[14.738728523254622,51.66687011718744],[14.698139190673942,51.55850982666027],[14.933858871460018,51.482269287109375],[14.967818260192928,51.3544158935548],[15.028479576110897,51.30979919433605],[14.930111885070744,50.99140548706072],[14.8050794601441,50.828918457031534],[14.710870742797965,50.826759338379134],[14.611928939819393,50.85478210449219],[14.651672363281364,50.93264007568365],[14.560112953186092,50.92348480224615],[14.595055580139274,50.988510131836165],[14.501680374145508,51.05150604248075],[14.39741039276123,51.00828170776373],[14.29401683807373,51.05416488647461],[14.246868133545036,50.97320175170904],[14.400946617126465,50.94234848022472],[14.372268676757926,50.88858032226568],[13.954609870910872,50.80371093750006],[13.850809097290096,50.71820068359375],[13.548975944519043,50.713214874267635],[13.465190887451229,50.59648895263689],[13.374910354614315,50.643661499023665],[13.326787948608512,50.581813812255916],[13.248618125915641,50.59226989746088],[13.195990562439079,50.500591278076286],[13.0332670211792,50.50854873657232],[12.977046012878645,50.41427230834961],[12.828769683837834,50.45862197875988],[12.705128669738826,50.39775848388672],[12.51611328125,50.40008544921898],[12.364088058471737,50.27642440795904],[12.32758998870844,50.17972946166998],[12.282715797424373,50.18267822265631],[12.194091796874943,50.32287597656256],[12.085860252380428,50.25535202026384],[12.198919296264876,50.19562149047863],[12.19906044006359,50.11182022094732],[12.256030082702637,50.062278747558594],[12.547736167907715,49.92714309692383],[12.472072601318473,49.79027175903349],[12.402890205383244,49.75516128540045],[12.527859687805176,49.68775939941435],[12.588051795959473,49.54399871826166],[12.645830154418945,49.53105926513672],[12.661074638366813,49.43216705322294],[12.78410530090332,49.35190582275402],[13.033589363098258,49.30863952636736],[13.180210113525618,49.144439697265625],[13.403729438781738,49.05178070068382],[13.401620864868221,48.98391342163103],[13.63125991821289,48.95058059692383],[13.835957527160701,48.7750511169433],[13.78705883026123,48.721511840820426],[13.809944152832088,48.590904235840014],[13.721092224121207,48.51679229736334],[13.503158569335938,48.59651184082037],[13.435749053955078,48.564682006835994],[13.410618782043514,48.377738952636776],[13.285719871520996,48.30517196655279],[12.868214607238826,48.20366668701183],[12.753028869628963,48.11729049682623],[13.00114727020275,47.8522300720216],[12.91126728057867,47.73124313354498],[13.043539047241325,47.720989227295206],[13.105588912963867,47.639202117920036],[13.013463973999023,47.46576690673845],[12.799818038940373,47.561462402343864],[12.826677322387695,47.61626052856451],[12.782772064209098,47.675922393799055],[12.605334281921444,47.67924880981457],[12.506064414978141,47.62885284423828],[12.43596267700218,47.70073318481451],[12.258779525756836,47.67621994018549],[12.254279136657772,47.739990234375114],[12.17435169219982,47.698875427246094],[12.2092800140382,47.60120010375982],[11.636343955993766,47.598270416259766],[11.58102035522461,47.51182174682634],[11.437379837036133,47.51325988769548],[11.388031959533805,47.47192382812523],[11.424080848693961,47.44562149047846],[11.341606140136776,47.45182418823248],[11.27390003204357,47.391010284423885],[11.224139213562012,47.391269683837834],[11.246058464050293,47.43478012084961],[10.977520942687931,47.39611053466808],[10.926508903503532,47.478080749511776],[10.862998962402344,47.47803115844738],[10.91859436035162,47.51609420776373],[10.883132934570426,47.53810501098644],[10.772025108337402,47.516143798828125],[10.600060462951888,47.57365036010742],[10.561381340026912,47.53593063354498],[10.432245254516829,47.58555984497076],[10.471569061279524,47.43306350708008],[10.433580398559798,47.378719329833984],[10.170168876648177,47.26990127563522],[10.226869583130338,47.3929176330567],[10.095960617065373,47.3548698425293],[10.090755462646598,47.45659255981451],[9.997338294983138,47.48622512817394],[9.971186637878759,47.55048370361328],[9.87366962432867,47.53071975708008],[9.774218559265364,47.59680175781267],[9.688732147217138,47.543983459472656],[9.044014930725098,47.82368850708008],[9.221139907837028,47.66815185546875],[9.164094924927213,47.65358352661133],[8.99164009094244,47.747985839844034],[8.941365242004451,47.731822967529354],[9.006369590759277,47.69509124755882],[8.891834259033374,47.65522384643566],[8.808216094970987,47.74168014526367],[8.771158218383846,47.71976852416992],[8.79814815521263,47.67990875244152],[8.727890014648608,47.696842193603686],[8.730445861816634,47.766109466552734],[8.56799125671381,47.8143768310548],[8.404397964477653,47.680049896240405],[8.473678588867188,47.64335632324219],[8.607149124145621,47.675994873046875],[8.584686279296875,47.60031127929693],[8.520914077758846,47.63809585571306],[8.458548545837402,47.60595703125017],[8.488503456115836,47.581394195556754],[8.379540443420467,47.570251464843864],[8.202873229980526,47.62615585327154],[8.087834358215446,47.56288528442394],[7.944071769714355,47.549701690673885],[7.820772171020621,47.5946998596192],[7.669493198394889,47.53711700439453],[7.632383823394775,47.5624237060548],[7.670560836792106,47.59326171875006],[7.607770919799862,47.580959320068416],[7.512126922607479,47.696090698242244],[7.62215709686285,47.97365951538109],[7.568590164184684,48.0363388061524],[7.577859401702995,48.121391296386776],[7.745231628417969,48.32982635498047],[7.733546733856315,48.39868545532238],[7.835922718048039,48.63367462158203],[8.087015151977653,48.802013397217024],[8.22887897491455,48.97063064575218],[7.937040328979435,49.05623245239258],[7.635286331176815,49.05416870117199],[7.445586204528809,49.184024810791016],[7.293400287628174,49.115158081054744],[7.098150730133057,49.15433120727545],[7.05802440643356,49.112586975097656],[7.033706188201904,49.18826293945324],[6.924295425415494,49.223075866699276],[6.840444087982178,49.21423339843767],[6.834462642669791,49.15137863159214],[6.737987518310831,49.16456985473633],[6.53541898727417,49.434162139892635],[6.35482120513916,49.46498489379883],[6.363647937774658,49.57404708862322],[6.516485214233398,49.724178314208984],[6.528252124786377,49.808570861816406],[6.312281131744612,49.83549880981457],[6.098370075225944,50.05990982055687],[6.189638137817383,50.189464569091854],[6.170382022857893,50.23625564575207],[6.408339977264632,50.33306884765619],[6.33975791931158,50.37989425659174],[6.374671936035213,50.44594955444336],[6.330028057098446,50.49364471435558],[6.172194004059065,50.55051422119158],[6.278378963470516,50.61639785766596],[6.173087120056209,50.62143325805687],[6.118731975555477,50.708736419677905],[5.963199138641357,50.79505157470703],[6.0738401412965,50.846858978271484],[6.082940101623649,50.921798706054744],[6.015170097351074,50.93315887451172],[6.030001163482893,50.98336410522472],[5.903690814971924,50.978271484375284],[5.872058868408317,51.04341125488281],[5.969543933868522,51.034469604492415],[6.171799182891846,51.15293121337896],[6.144780158996809,51.17371749877941],[6.193139076233138,51.19166183471674],[6.091834068298397,51.175292968750284],[6.078186035156193,51.2447128295899],[6.231968879699764,51.36598205566412],[6.220355987548942,51.50917053222656],[6.090958118438778,51.605220794677734],[6.118769168853703,51.6604576110841],[5.964007854461727,51.74161148071289],[6.004777908325309,51.76816940307623],[5.964649200439453,51.824409484863395],[6.168982028961295,51.84503173828142],[6.107149124145565,51.88898849487299],[6.158889770507812,51.905384063720646],[6.417467117309798,51.82563400268566],[6.402299880981388,51.87480163574219],[6.742709159851131,51.89905166625988],[6.835361003875846,51.99552917480486],[6.698178768157959,52.040119171142805],[6.700688838958968,52.07379150390648],[7.069309234619254,52.23925399780296],[7.029718875884953,52.29431915283209],[7.07911586761486,52.38272476196295],[7.006279945373649,52.469501495361385],[6.950539112091064,52.43696975708002],[6.764862060546875,52.464931488037166],[6.683791160583496,52.55606460571312],[6.768260955810604,52.56516647338867],[6.724298000335807,52.59061050415045],[6.743810176849422,52.64709091186529],[7.051859855651912,52.63584899902344],[7.094276905059871,52.84645080566429],[7.26148796081543,52.997539520263615],[7.226968765258846,53.124462127685604],[7.284560203552189,53.19956970214872],[7.205277919769514,53.23880767822271],[7.249166965484562,53.32986068725586],[6.998610973358154,53.361251831054915],[7.034166812896729,53.53319549560558],[7.13361120223999,53.53236007690424],[7.09027719497675,53.57652664184576],[7.158053874969539,53.627918243408146],[7.316944122314794,53.683471679687614],[8.015831947326944,53.71069335937506],[8.172499656677246,53.554584503173885],[8.155276298523177,53.513748168945426],[8.06472206115734,53.50597381591797],[8.073611259460677,53.46486282348633],[8.252499580383244,53.399028778076115],[8.316389083862418,53.46625137329124],[8.316389083862418,53.5220832824707],[8.230832099914778,53.52041625976574],[8.271943092346419,53.609859466552734],[8.516389846801701,53.55625152587902],[8.556944847106877,53.52569580078131],[8.519721984863338,53.50097274780279],[8.570834159851074,53.51819610595703],[8.483611106872786,53.69430541992193],[8.608056068420467,53.87874984741228],[8.883610725402946,53.82791519165045],[9.09972286224371,53.86291503906256],[8.963610649109114,53.894584655761776],[8.819722175598258,54.02152633666998],[8.98250007629423,54.04652786254911],[8.927499771118164,54.131805419921875],[8.85916709899908,54.12263870239269],[8.807498931884709,54.173194885253906],[8.83583259582548,54.251804351806584],[8.951944351196516,54.31289291381836],[8.846387863159237,54.26291656494169],[8.580278396606559,54.30402755737316],[8.60416603088413,54.357917785644645],[8.685832023620605,54.35708236694347],[8.608610153198185,54.38624954223644],[8.893611907959212,54.41208267211914],[9.02361106872587,54.472637176513786],[8.989167213440396,54.519306182861385],[8.903610229492188,54.46069335937506],[8.806388854980526,54.47041702270508],[8.890276908874682,54.59263992309582],[8.813055992126749,54.597362518311],[8.822500228881836,54.64597320556675],[8.687498092651595,54.72986221313516],[8.590276718139762,54.885139465331974],[8.41638755798374,54.84708404541021],[8.310277938842887,54.874305725097656],[8.279722213745174,54.75180435180687],[8.298054695129508,54.909305572509766],[8.407297932191138,55.04395228653645]],[[12.645990473625632,54.40224791003495],[12.435832977295036,54.378749847412166],[12.363612174987793,54.26597213745117],[12.460276603699072,54.24847412109369],[12.409167289733887,54.27986145019537],[12.645990473625632,54.40224791003495]],[[9.941296802167107,54.63977103947349],[9.933056831359806,54.627639770507926],[9.859076590154903,54.5913954629662],[9.938055038452319,54.62347412109392],[9.941296802167107,54.63977103947349]],[[9.740505208965892,54.53330511971416],[9.7124996185305,54.519584655761946],[9.545277595520133,54.5093040466308],[9.574166297912711,54.475139617920036],[9.624165534973372,54.51152801513672],[9.714722633362271,54.49124908447277],[9.740505208965892,54.53330511971416]]],[[[13.94762775222483,54.063982999902095],[13.910832405090275,54.064304351806754],[13.862501144409407,53.99930572509771],[13.858055114746207,54.04847335815441],[13.7691659927371,54.01902770996128],[13.812499046325684,54.09902954101568],[13.749167442322118,54.159027099609716],[13.803610801696834,54.17847061157232],[13.870834350586051,54.10152816772478],[13.94762775222483,54.063982999902095]]],[[[8.411785232872631,55.04948306636195],[8.417499542236328,55.05652618408209],[8.463055610656681,55.04569625854492],[8.411785232872631,55.04948306636195]]],[[[13.406170966791661,54.596560494420075],[13.3702783584597,54.61458206176752],[13.243055343628384,54.55875015258789],[13.2830562591555,54.64625167846674],[13.160833358764933,54.55902862548828],[13.249724388122615,54.659862518310945],[13.42916679382347,54.68458175659174],[13.37583255767845,54.63513946533203],[13.406170966791661,54.596560494420075]]],[[[13.446298879365024,54.57641239394589],[13.679720878601302,54.56263732910156],[13.569721221924112,54.46180725097662],[13.76694393157959,54.34152603149454],[13.72527885437006,54.27347183227545],[13.646389007568416,54.296527862548885],[13.70416736602806,54.326248168945426],[13.610832214355753,54.31624984741222],[13.68305587768566,54.34930419921881],[13.58083438873291,54.35291671752947],[13.352499008178768,54.26958465576217],[13.41805553436285,54.25485992431646],[13.393610000610408,54.22097396850586],[13.290279388427791,54.25125122070318],[13.335277557373274,54.278194427490234],[13.139166831970158,54.2823600769043],[13.18472290039091,54.30097198486328],[13.114721298217717,54.331806182861555],[13.127499580383471,54.37125015258789],[13.261943817138842,54.38291549682657],[13.149722099304313,54.42902755737305],[13.26805686950695,54.47930526733427],[13.158611297607422,54.504028320312614],[13.143611907959041,54.54680633544922],[13.305277824402083,54.51402664184582],[13.29749870300293,54.55236053466797],[13.368612289428881,54.57930374145502],[13.338055610656681,54.54875183105469],[13.377498626709098,54.55902862548828],[13.413056373596476,54.49375152587885],[13.506387710571403,54.480972290039006],[13.501943588257006,54.548473358154695],[13.446298879365024,54.57641239394589]]],[[[13.184166908264217,54.49430465698282],[13.226943969726733,54.468750000000114],[13.120834350586222,54.44235992431646],[13.184166908264217,54.49430465698282]]],[[[13.125168920038526,54.58240134124839],[13.13638877868675,54.6051406860351],[13.158054351806868,54.57930374145502],[13.125168920038526,54.58240134124839]]],[[[11.069721221924055,54.53470230102539],[11.23416805267334,54.5068054199221],[11.31360912322998,54.402084350586335],[11.00916671752924,54.44124984741211],[11.069721221924055,54.53470230102539]]],[[[8.691945075988713,54.557083129882756],[8.671944618225154,54.49458312988281],[8.589166641235579,54.51180648803711],[8.691945075988713,54.557083129882756]]],[[[8.539723396301383,54.75569534301769],[8.595276832580623,54.71958160400385],[8.56694316864025,54.6798629760745],[8.396944999694881,54.70569610595703],[8.539723396301383,54.75569534301769]]],[[[8.551387786865234,54.57958221435541],[8.573056221008358,54.55875015258789],[8.50916671752941,54.57402801513683],[8.551387786865234,54.57958221435541]]],[[[8.476387977600098,54.47652816772461],[8.52583217620861,54.433471679687614],[8.470277786254883,54.42180633544933],[8.476387977600098,54.47652816772461]]],[[[8.483055114746321,54.58458328247116],[8.501387596130428,54.55819320678711],[8.455277442932186,54.55875015258789],[8.483055114746321,54.58458328247116]]],[[[8.356944084167594,54.71152877807617],[8.395278930664062,54.61208343505899],[8.292498588561955,54.66708374023466],[8.356944084167594,54.71152877807617]]],[[[7.895833015442065,53.79402923584007],[7.968054771423567,53.774860382080305],[7.846387863159464,53.78680419921881],[7.895833015442065,53.79402923584007]]],[[[7.706388950348241,53.77958297729492],[7.805832862854288,53.774581909179744],[7.666944026947249,53.7587509155274],[7.706388950348241,53.77958297729492]]],[[[7.573610782623518,53.757362365722656],[7.627499103546597,53.74847412109381],[7.467502117157153,53.727085113525504],[7.573610782623518,53.757362365722656]]],[[[7.394165992737044,53.73458480834961],[7.429722785949707,53.725139617920206],[7.360278129577864,53.72680664062494],[7.394165992737044,53.73458480834961]]],[[[7.058610916137638,53.68458175659197],[7.095833778381348,53.680694580078125],[6.854722023010595,53.66125106811535],[7.058610916137638,53.68458175659197]]],[[[6.761944770812988,53.61875152587896],[6.811388969421671,53.60263824462885],[6.721387863159407,53.583751678466854],[6.749722003937052,53.55680465698242],[6.630833148956526,53.59791564941406],[6.761944770812988,53.61875152587896]]]]}}]'), R2 = {
  type: N2,
  features: D2
}, P2 = { class: "pmap_container" }, x2 = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", F2 = 5, M2 = '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', B2 = /* @__PURE__ */ it({
  __name: "MapPreview",
  props: {
    config: {}
  },
  setup(o) {
    const i = [50.93115286, 11.60392726], n = me(null), l = o, { config: h } = Ol(l), f = (g) => h.value;
    return Vi(() => h, () => {
      n.value.leafletObject?.eachLayer((g) => {
        try {
          g.setStyle(f);
        } catch (v) {
          console.log(v);
        }
      });
    }, { deep: !0 }), (g, v) => (z(), X("div", P2, [
      ue(C(Kh), {
        id: "map",
        ref_key: "map",
        ref: n,
        center: i,
        "max-zoom": 21,
        zoom: F2,
        style: { height: "100%" }
      }, {
        default: Ke(() => [
          ue(C(jh), {
            attribution: M2,
            options: {
              maxNativeZoom: 19,
              maxZoom: 25
            },
            url: x2
          }),
          ue(C(ko), {
            geojson: C(R2),
            optionsStyle: f
          }, null, 8, ["geojson", "optionsStyle"])
        ]),
        _: 1
      }, 8, ["center"])
    ]));
  }
}), k2 = /* @__PURE__ */ er(B2, [["__scopeId", "data-v-77cbf15c"]]), G2 = ["data-section"], U2 = { class: "settings-container" }, z2 = /* @__PURE__ */ it({
  __name: "MapSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = mr(o, "modelValue"), { t: n } = io("map");
    return (l, h) => (z(), X("section", {
      class: "settings-section",
      "data-section-id": "style",
      "data-section": C(n)("Style.section")
    }, [
      ie("div", U2, [
        ue(C(Ju), {
          modelValue: i.value.stroke,
          "onUpdate:modelValue": h[0] || (h[0] = (f) => i.value.stroke = f),
          label: C(n)("Style.stroke")
        }, null, 8, ["modelValue", "label"]),
        ue(C($u), {
          modelValue: i.value.color,
          "onUpdate:modelValue": h[1] || (h[1] = (f) => i.value.color = f),
          label: C(n)("Style.lineColor")
        }, null, 8, ["modelValue", "label"]),
        ue(C(us), {
          modelValue: i.value.weight,
          "onUpdate:modelValue": h[2] || (h[2] = (f) => i.value.weight = f),
          type: "number",
          label: C(n)("Style.lineSize"),
          suffix: "px"
        }, null, 8, ["modelValue", "label"]),
        ue(C(ju), {
          modelValue: i.value.opacity,
          "onUpdate:modelValue": h[3] || (h[3] = (f) => i.value.opacity = f),
          min: 0,
          max: 1,
          step: 0.01,
          label: C(n)("Style.lineOpacity")
        }, null, 8, ["modelValue", "label"]),
        ue(C(Ju), {
          modelValue: i.value.fill,
          "onUpdate:modelValue": h[4] || (h[4] = (f) => i.value.fill = f),
          label: C(n)("Style.fill")
        }, null, 8, ["modelValue", "label"]),
        ue(C(ju), {
          modelValue: i.value.fillOpacity,
          "onUpdate:modelValue": h[5] || (h[5] = (f) => i.value.fillOpacity = f),
          min: 0,
          max: 1,
          step: 0.01,
          label: C(n)("Style.fillOpacity")
        }, null, 8, ["modelValue", "label"]),
        ue(C($u), {
          modelValue: i.value.fillColor,
          "onUpdate:modelValue": h[6] || (h[6] = (f) => i.value.fillColor = f),
          label: C(n)("Style.fillColor")
        }, null, 8, ["modelValue", "label"]),
        ue(C(us), {
          modelValue: i.value.className,
          "onUpdate:modelValue": h[7] || (h[7] = (f) => i.value.className = f),
          label: C(n)("Style.className")
        }, null, 8, ["modelValue", "label"])
      ])
    ], 8, G2));
  }
}), V2 = /* @__PURE__ */ er(z2, [["__scopeId", "data-v-1b922462"]]), W2 = { class: "flex flex-col md6 pa-3" }, Z2 = { class: "flex flex-col md6 pa-3" }, Kg = /* @__PURE__ */ it({
  __name: "AreaStyler",
  props: {
    modelValue: {
      default: () => Bo({
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
    const i = mr(o, "modelValue");
    return (n, l) => (z(), X(Re, null, [
      ie("div", W2, [
        ue(V2, {
          modelValue: i.value,
          "onUpdate:modelValue": l[0] || (l[0] = (h) => i.value = h)
        }, null, 8, ["modelValue"])
      ]),
      ie("div", Z2, [
        ue(k2, {
          ref: "MapPrev",
          config: i.value
        }, null, 8, ["config"])
      ])
    ], 64));
  }
});
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const H2 = () => {
};
function $g(o, i, n) {
  var l;
  let h;
  xp(n) ? h = { evaluating: n } : h = n || {};
  const { lazy: f = !1, flush: g = "sync", evaluating: v = void 0, shallow: y = !0, onError: m = (l = globalThis.reportError) !== null && l !== void 0 ? l : H2 } = h, A = Zf(!f), S = y ? Zf(i) : me(i);
  let I = 0;
  return KE(async (D) => {
    if (!A.value) return;
    I++;
    const B = I;
    let G = !1;
    v && Promise.resolve().then(() => {
      v.value = !0;
    });
    try {
      const j = await o((W) => {
        D(() => {
          v && (v.value = !1), G || W();
        });
      });
      B === I && (S.value = j);
    } catch (j) {
      m(j);
    } finally {
      v && B === I && (v.value = !1), G = !0;
    }
  }, { flush: g }), f ? Xt(() => (A.value = !0, S.value)) : S;
}
const Y2 = /* @__PURE__ */ it({
  __name: "PlacementSytler",
  props: {
    modelValue: {
      default: () => Bo({
        placement: Mo.OberservedArea
      })
    },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const { t: i } = io("map"), n = Xt(() => [
      { value: Mo.Thing, label: i("Placement.thing") },
      { value: Mo.OberservedArea, label: i("Placement.observedArea") }
    ]), l = mr(o, "modelValue");
    return (h, f) => (z(), X(Re, null, [
      ie("div", null, [
        ue(C(Wh), {
          modelValue: l.value.placement,
          "onUpdate:modelValue": f[0] || (f[0] = (g) => l.value.placement = g),
          options: n.value,
          "value-key": "value",
          "label-key": "label",
          label: C(i)("Placement.label"),
          stacked: ""
        }, null, 8, ["modelValue", "options", "label"])
      ]),
      f[1] || (f[1] = ie("div", null, null, -1))
    ], 64));
  }
}), q2 = { class: "auto-update-settings" }, K2 = { class: "refresh-setting" }, $2 = { class: "slider-labels" }, J2 = { class: "refresh-info" }, j2 = { class: "info-item" }, X2 = { class: "label" }, Q2 = { class: "value" }, eS = {
  key: 0,
  class: "info-item"
}, tS = { class: "label" }, nS = { class: "value" }, iS = /* @__PURE__ */ it({
  __name: "AutoUpdateSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = mr(o, "modelValue"), { t: n } = io("map"), l = jE();
    let h = null;
    const f = (y) => {
      h && clearTimeout(h), h = setTimeout(() => {
        i.value.ObservationrefreshTime = y;
      }, 300);
    }, g = (y) => y === 0 ? n("AutoUpdate.never") : `${y}s`, v = (y) => l.date(y, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    return (y, m) => (z(), X("div", q2, [
      ie("h3", null, Ie(C(n)("AutoUpdate.title")), 1),
      ie("div", K2, [
        ie("label", null, Ie(C(n)("AutoUpdate.refresh", { time: g(i.value.ObservationrefreshTime || 0) })), 1),
        ue(C(ju), {
          "model-value": i.value.ObservationrefreshTime || 0,
          "onUpdate:modelValue": f,
          min: 0,
          max: 30,
          step: 1,
          suffix: "s",
          class: "refresh-slider"
        }, null, 8, ["model-value"]),
        ie("div", $2, [
          ie("span", null, Ie(C(n)("AutoUpdate.never")), 1),
          m[0] || (m[0] = ie("span", null, "1s", -1)),
          m[1] || (m[1] = ie("span", null, "15s", -1)),
          m[2] || (m[2] = ie("span", null, "30s", -1))
        ])
      ]),
      ie("div", J2, [
        ie("div", j2, [
          ie("span", X2, Ie(C(n)("AutoUpdate.current")), 1),
          ie("span", Q2, Ie(g(i.value.ObservationrefreshTime || 0)), 1)
        ]),
        i.value.lastUpdate ? (z(), X("div", eS, [
          ie("span", tS, Ie(C(n)("AutoUpdate.last")), 1),
          ie("span", nS, Ie(v(i.value.lastUpdate)), 1)
        ])) : Be("", !0)
      ])
    ]));
  }
}), rS = /* @__PURE__ */ er(iS, [["__scopeId", "data-v-dd5cbdb6"]]), sS = { class: "tree_detail" }, oS = { class: "tree" }, aS = { class: "menu" }, lS = { class: "menuitem" }, uS = { class: "checked" }, cS = ["onClick"], hS = ["onClick"], dS = { class: "icon" }, fS = { class: "marked" }, pS = { class: "marked__tag" }, gS = { class: "text" }, _S = ["onUpdate:modelValue"], mS = ["onClick"], vS = { class: "options" }, yS = {
  key: 0,
  class: "childs"
}, ES = ["onClick"], TS = { class: "icon" }, wS = { class: "marked" }, SS = { class: "marked__tag" }, AS = { class: "text" }, bS = ["onUpdate:modelValue"], CS = ["onClick"], OS = { class: "options" }, LS = {
  key: 0,
  class: "childs"
}, IS = ["onClick"], NS = { class: "icon" }, DS = { class: "marked" }, RS = { class: "marked__tag" }, PS = { class: "text" }, xS = { class: "options" }, FS = { class: "detail" }, MS = {
  key: 0,
  class: "content"
}, BS = { class: "scroller" }, kS = {
  key: 0,
  class: "full"
}, GS = {
  key: 0,
  class: "rowlayout"
}, US = {
  key: 1,
  class: "full rowlayout"
}, zS = {
  key: 2,
  class: "full"
}, VS = {
  key: 3,
  class: "full"
}, WS = {
  key: 1,
  class: "content center"
}, ZS = { class: "prose" }, HS = { style: { margin: "10px 0", "padding-left": "20px" } }, YS = { class: "prose" }, qS = { class: "choices" }, KS = { class: "choice__text" }, $S = { class: "choice__name" }, JS = { class: "choice__what" }, jS = /* @__PURE__ */ it({
  __name: "RendererModal",
  props: /* @__PURE__ */ Vh({
    services: {},
    allLayers: {}
  }, {
    modelValue: {
      default: () => Bo(
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
    const { t: i } = io("map"), n = mr(o, "modelValue"), l = mr(o, "show"), h = mr(o, "layer"), f = o, { services: g, allLayers: v } = Ol(f);
    me([]);
    const y = me(0), m = me(void 0), A = me(!1), S = me(null), I = me([]), D = me(!1), B = me(null), { getAll: G, getById: j } = fl(), W = (Ae) => v?.value ? v.value.filter(
      (te) => te.styleIds?.includes(Ae)
    ) : [], Z = (Ae) => {
      const te = W(Ae.id);
      te.length > 0 ? (S.value = Ae, I.value = te, A.value = !0) : J(Ae);
    }, J = (Ae) => {
      I.value.forEach((oe) => {
        const K = oe.styleIds?.indexOf(Ae.id);
        K !== void 0 && K !== -1 && oe.styleIds?.splice(K, 1);
      });
      const te = n.value.indexOf(Ae);
      te !== -1 && (n.value.splice(te, 1), m.value?.id === Ae.id && (m.value = void 0)), A.value = !1, S.value = null, I.value = [];
    }, P = () => {
      A.value = !1, S.value = null, I.value = [];
    }, U = () => {
      h.value?.type == "OGCSTA" ? n.value.push({
        name: i("Renderer.newStyle"),
        thing: [
          {
            prop: "name",
            comperator: xr.equals,
            value: "example"
          }
        ],
        renderer: {
          point_render_as: "icon",
          point_prop: "name",
          // A modelled type, so built rather than written as a literal
          point: Object.assign(new qe(), {
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
        id: qr()
      }) : n.value.push({
        name: i("Renderer.newStyle"),
        datastream: [
          {
            prop: "name",
            comperator: xr.equals,
            value: "*"
          }
        ],
        placement: Mo.Thing,
        renderer: {
          point_render_as: "icon",
          point_prop: "name",
          // A modelled type, so built rather than written as a literal
          point: Object.assign(new qe(), {
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
        id: qr()
      });
    }, re = () => {
      m.value.ds_renderer.push({
        name: i("Renderer.newDatastreamStyle"),
        datastream: [
          {
            prop: "name",
            comperator: xr.equals,
            value: "*"
          }
        ],
        placement: Mo.Thing,
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
        id: qr()
      });
    }, fe = (Ae) => {
      B.value = Ae, D.value = !0;
    }, Ee = (Ae) => {
      if (!B.value) return;
      const te = j(Ae), oe = {
        component: Ae
      };
      te?.isLayerRenderer ? oe.setting = {
        conditions: [],
        renderer: {
          point_render_as: "icon",
          point_prop: "name",
          // A modelled type, so built rather than written as a literal
          point: Object.assign(new qe(), {
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
      } : oe.setting = {}, B.value.observations || (B.value.observations = []), B.value.observations.push(oe), D.value = !1, B.value = null;
    }, he = $g(async () => {
      const Ae = h.value;
      if (!Ae) return [];
      if (Ae.type == "WFSLayer")
        try {
          const oe = await g.value.find((K) => K.id == Ae.service)?.service?.getFeatureTypePropDetails(Ae.name ?? "");
          return console.log(oe), Object.entries(oe).map(
            (K) => ({ text: K[0], selector: K[0], suggestions: K[1].uniqueValues.map((Fe) => Fe.value) })
          );
        } catch (te) {
          return console.log(te), [];
        }
      else if (Ae.type == "GEOJSON" && Ae.geoJson)
        try {
          const te = Ae.geoJson;
          if (!te?.features || te.features.length === 0)
            return [];
          const oe = /* @__PURE__ */ new Map();
          for (const K of te.features)
            if (K.properties)
              for (const [Fe, Le] of Object.entries(K.properties))
                oe.has(Fe) || oe.set(Fe, /* @__PURE__ */ new Set()), oe.get(Fe)?.add(Le);
          return Array.from(oe.entries()).map(([K, Fe]) => ({
            text: K,
            selector: K,
            suggestions: Array.from(Fe)
          }));
        } catch (te) {
          return console.log(te), [];
        }
      else
        return [];
    }, []);
    Vi(l, (Ae) => {
      Ae && (m.value = void 0);
    }), Vi(m, () => {
      y.value = 0;
    });
    const Oe = me(void 0), le = Xt(() => {
      const Ae = m.value;
      return Ae ? Ae.component && !Ae.datastream ? ["Settings"] : h.value?.type === "OGCSTA" ? Ae.thing ? ["Conditions", "Points", "Areas", "Auto-update"] : ["Conditions", "Points", "Areas", "Placement"] : ["Conditions", "Points", "Areas"] : [];
    }), ne = {
      Settings: "settings",
      Conditions: "conditions",
      Points: "points",
      Areas: "areas",
      "Auto-update": "autoUpdate",
      Placement: "placement"
    }, V = Xt(
      () => le.value.map((Ae) => ({ id: Ae, label: i(`Renderer.tabs.${ne[Ae] ?? Ae}`) }))
    ), ge = Xt({
      get: () => le.value[y.value] ?? le.value[0] ?? "",
      set: (Ae) => {
        const te = le.value.indexOf(Ae);
        y.value = te >= 0 ? te : 0;
      }
    });
    return (Ae, te) => (z(), X(Re, null, [
      ue(C(cl), {
        modelValue: l.value,
        "onUpdate:modelValue": te[14] || (te[14] = (oe) => l.value = oe),
        size: "lg",
        title: C(i)("Settings.styles")
      }, {
        actions: Ke(() => [
          ue(C(Vn), {
            onClick: te[13] || (te[13] = (oe) => l.value = !1)
          }, {
            default: Ke(() => [
              Qi(Ie(C(i)("common:Action.close")), 1)
            ]),
            _: 1
          })
        ]),
        default: Ke(() => [
          ie("div", sS, [
            ie("div", oS, [
              ie("div", aS, [
                ie("div", lS, [
                  ie("div", uS, [
                    ue(C(Vn), {
                      intent: "quiet",
                      title: C(i)("Renderer.addStyle"),
                      onClick: U
                    }, {
                      default: Ke(() => [
                        ue(C(Ht), {
                          name: "add",
                          size: "sm"
                        })
                      ]),
                      _: 1
                    }, 8, ["title"])
                  ])
                ]),
                ue(C(kp)),
                (z(!0), X(Re, null, zt(n.value, (oe) => (z(), X("div", {
                  key: oe.id
                }, [
                  ie("div", {
                    class: Fo([{ active: oe.id == m.value?.id }, "menuitem"]),
                    onClick: (K) => m.value = oe
                  }, [
                    ie("div", {
                      class: "checked",
                      onClick: () => {
                        const K = h.value?.styleIds?.indexOf(oe.id);
                        K != -1 ? h.value?.styleIds?.splice(K, 1) : h.value?.styleIds?.push(oe.id);
                      }
                    }, [
                      ue(C(Ht), {
                        name: "check",
                        size: "sm",
                        tone: h.value?.styleIds?.includes(oe.id) ? "color-accent" : "color-divider"
                      }, null, 8, ["tone"])
                    ], 8, hS),
                    ie("div", dS, [
                      ie("span", fS, [
                        ue(C(Ht), {
                          name: "style",
                          size: "sm"
                        }),
                        ie("span", pS, Ie(C(i)("Renderer.tag.thing")), 1)
                      ])
                    ]),
                    ie("div", gS, [
                      Oe.value === oe.id ? Zu((z(), X("input", {
                        key: 0,
                        "onUpdate:modelValue": (K) => oe.name = K,
                        class: "item__input",
                        onBlur: te[0] || (te[0] = (K) => Oe.value = void 0),
                        onKeyup: te[1] || (te[1] = Yu((K) => Oe.value = void 0, ["enter"]))
                      }, null, 40, _S)), [
                        [Hu, oe.name]
                      ]) : (z(), X("span", {
                        key: 1,
                        onClick: (K) => Oe.value = oe.id
                      }, Ie(oe.name), 9, mS))
                    ]),
                    ie("div", vS, [
                      h.value?.type == "OGCSTA" && oe?.thing ? (z(), dt(C(Vn), {
                        key: 0,
                        intent: "quiet",
                        title: C(i)("Renderer.addDatastreamStyle"),
                        onClick: re
                      }, {
                        default: Ke(() => [
                          ue(C(Ht), {
                            name: "add",
                            size: "sm"
                          })
                        ]),
                        _: 1
                      }, 8, ["title"])) : Be("", !0),
                      ue(C(Vn), {
                        intent: "quiet",
                        title: C(i)("Renderer.deleteStyle"),
                        onClick: (K) => Z(oe)
                      }, {
                        default: Ke(() => [
                          ue(C(Ht), {
                            name: "delete",
                            size: "sm"
                          })
                        ]),
                        _: 1
                      }, 8, ["title", "onClick"])
                    ])
                  ], 10, cS),
                  oe?.thing ? (z(), X("div", yS, [
                    (z(!0), X(Re, null, zt(oe?.ds_renderer, (K) => (z(), X("div", {
                      key: K.id,
                      class: Fo([{ active: K.id == m.value?.id }, "menuitem"]),
                      onClick: (Fe) => m.value = K
                    }, [
                      te[18] || (te[18] = ie("div", null, null, -1)),
                      ie("div", TS, [
                        ie("span", wS, [
                          ue(C(Ht), {
                            name: "settings",
                            size: "sm"
                          }),
                          ie("span", SS, Ie(C(i)("Renderer.tag.datastream")), 1)
                        ])
                      ]),
                      ie("div", AS, [
                        Oe.value === K.id ? Zu((z(), X("input", {
                          key: 0,
                          "onUpdate:modelValue": (Fe) => K.name = Fe,
                          class: "item__input",
                          onBlur: te[2] || (te[2] = (Fe) => Oe.value = void 0),
                          onKeyup: te[3] || (te[3] = Yu((Fe) => Oe.value = void 0, ["enter"]))
                        }, null, 40, bS)), [
                          [Hu, K.name]
                        ]) : (z(), X("span", {
                          key: 1,
                          onClick: (Fe) => Oe.value = K.id
                        }, Ie(K.name), 9, CS))
                      ]),
                      ie("div", OS, [
                        ue(C(Vn), {
                          intent: "quiet",
                          title: C(i)("Renderer.addObservation"),
                          onClick: (Fe) => fe(K)
                        }, {
                          default: Ke(() => [
                            ue(C(Ht), {
                              name: "add",
                              size: "sm"
                            })
                          ]),
                          _: 1
                        }, 8, ["title", "onClick"]),
                        ue(C(Vn), {
                          intent: "quiet",
                          title: C(i)("Renderer.deleteDatastreamStyle"),
                          onClick: () => {
                            const Fe = oe, Le = Fe.ds_renderer.indexOf(K);
                            Le !== -1 && (Fe.ds_renderer.splice(Le, 1), m.value?.id === K.id && (m.value = void 0));
                          }
                        }, {
                          default: Ke(() => [
                            ue(C(Ht), {
                              name: "delete",
                              size: "sm"
                            })
                          ]),
                          _: 1
                        }, 8, ["title", "onClick"])
                      ])
                    ], 10, ES))), 128)),
                    (z(!0), X(Re, null, zt(oe?.ds_renderer, (K) => (z(), X(Re, {
                      key: "obs-parent-" + K.id
                    }, [
                      K.observations && K.observations.length > 0 ? (z(), X("div", LS, [
                        (z(!0), X(Re, null, zt(K.observations, (Fe, Le) => (z(), X("div", {
                          key: "obs-" + K.id + "-" + Le,
                          class: Fo([{ active: Fe === m.value }, "menuitem"]),
                          onClick: (Me) => m.value = Fe
                        }, [
                          te[19] || (te[19] = ie("div", null, null, -1)),
                          ie("div", NS, [
                            ie("span", DS, [
                              ue(C(Ht), {
                                name: "visibility",
                                size: "sm"
                              }),
                              ie("span", RS, Ie(C(i)("Renderer.tag.observation")), 1)
                            ])
                          ]),
                          ie("div", PS, Ie(Fe.component || C(i)("Renderer.observation")), 1),
                          ie("div", xS, [
                            ue(C(Vn), {
                              intent: "quiet",
                              title: C(i)("Renderer.deleteObservation"),
                              onClick: () => {
                                if (!K.observations) return;
                                const Me = K.observations.indexOf(Fe);
                                Me !== -1 && (K.observations.splice(Me, 1), m.value === Fe && (m.value = void 0));
                              }
                            }, {
                              default: Ke(() => [
                                ue(C(Ht), {
                                  name: "delete",
                                  size: "sm"
                                })
                              ]),
                              _: 1
                            }, 8, ["title", "onClick"])
                          ])
                        ], 10, IS))), 128))
                      ])) : Be("", !0)
                    ], 64))), 128))
                  ])) : Be("", !0)
                ]))), 128))
              ])
            ]),
            ie("div", FS, [
              ue(C(i1), {
                modelValue: ge.value,
                "onUpdate:modelValue": te[4] || (te[4] = (oe) => ge.value = oe),
                tabs: V.value,
                label: C(i)("Renderer.settings")
              }, null, 8, ["modelValue", "tabs", "label"]),
              m.value ? (z(), X("div", MS, [
                ie("div", BS, [
                  m.value?.component && !m.value?.datastream ? (z(), X("div", kS, [
                    C(j)(m.value.component)?.setupComponent ? (z(), dt(Ph(C(j)(m.value.component)?.setupComponent), {
                      key: 0,
                      modelValue: m.value.setting,
                      "onUpdate:modelValue": te[5] || (te[5] = (oe) => m.value.setting = oe)
                    }, null, 8, ["modelValue"])) : Be("", !0)
                  ])) : (z(), X(Re, { key: 1 }, [
                    y.value == 1 || y.value == 2 ? (z(), X("div", GS, [
                      y.value == 1 ? (z(), dt(qg, {
                        key: 0,
                        modelValue: m.value.renderer,
                        "onUpdate:modelValue": te[6] || (te[6] = (oe) => m.value.renderer = oe)
                      }, null, 8, ["modelValue"])) : Be("", !0),
                      y.value == 2 ? (z(), dt(Kg, {
                        key: 1,
                        modelValue: m.value.renderer.area,
                        "onUpdate:modelValue": te[7] || (te[7] = (oe) => m.value.renderer.area = oe)
                      }, null, 8, ["modelValue"])) : Be("", !0)
                    ])) : Be("", !0),
                    y.value == 3 && h.value?.type == "OGCSTA" && !m.value.thing ? (z(), X("div", US, [
                      ue(Y2, {
                        modelValue: m.value,
                        "onUpdate:modelValue": te[8] || (te[8] = (oe) => m.value = oe)
                      }, null, 8, ["modelValue"])
                    ])) : y.value == 3 && h.value?.type == "OGCSTA" && m.value.thing ? (z(), X("div", zS, [
                      ue(rS, {
                        modelValue: m.value,
                        "onUpdate:modelValue": te[9] || (te[9] = (oe) => m.value = oe)
                      }, null, 8, ["modelValue"])
                    ])) : (z(), X("div", VS, [
                      h.value?.type == "OGCSTA" && m.value.thing ? (z(), X(Re, { key: 0 }, [
                        y.value == 0 ? (z(), dt(zh, {
                          key: 0,
                          modelValue: m.value.thing,
                          "onUpdate:modelValue": te[10] || (te[10] = (oe) => m.value.thing = oe)
                        }, null, 8, ["modelValue"])) : Be("", !0)
                      ], 64)) : (z(), X(Re, { key: 1 }, [
                        y.value == 0 ? (z(), dt(zh, {
                          key: 0,
                          modelValue: m.value.datastream,
                          "onUpdate:modelValue": te[11] || (te[11] = (oe) => m.value.datastream = oe),
                          "thing-props": C(he),
                          "onUpdate:thingProps": te[12] || (te[12] = (oe) => xp(he) ? he.value = oe : null)
                        }, null, 8, ["modelValue", "thing-props"])) : Be("", !0)
                      ], 64))
                    ]))
                  ], 64))
                ])
              ])) : (z(), X("div", WS, [
                ue(C(Ht), {
                  name: "style",
                  size: "lg",
                  class: "empty__icon"
                }),
                ie("span", null, [
                  ie("span", {
                    class: "underline blue",
                    onClick: U
                  }, Ie(C(i)("Renderer.create")), 1),
                  Qi(" " + Ie(C(i)("Renderer.orSelect")), 1)
                ])
              ]))
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]),
      ue(C(cl), {
        modelValue: A.value,
        "onUpdate:modelValue": te[16] || (te[16] = (oe) => A.value = oe),
        title: C(i)("Renderer.deleteStyle"),
        size: "sm",
        onCancel: P
      }, {
        actions: Ke(() => [
          ue(C(Vn), {
            intent: "quiet",
            onClick: P
          }, {
            default: Ke(() => [
              Qi(Ie(C(i)("common:Action.cancel")), 1)
            ]),
            _: 1
          }),
          ue(C(Vn), {
            intent: "danger",
            onClick: te[15] || (te[15] = (oe) => J(S.value))
          }, {
            default: Ke(() => [
              Qi(Ie(C(i)("common:Action.delete")), 1)
            ]),
            _: 1
          })
        ]),
        default: Ke(() => [
          ie("div", ZS, [
            ie("p", null, [
              ie("strong", null, Ie(C(i)("Renderer.warning")), 1),
              Qi(" " + Ie(C(i)("Renderer.usedBy", { name: S.value?.name, count: I.value.length })), 1)
            ]),
            ie("ul", HS, [
              (z(!0), X(Re, null, zt(I.value, (oe, K) => (z(), X("li", { key: K }, Ie(oe.name || oe.title || C(i)("Renderer.unnamedLayer")), 1))), 128))
            ]),
            ie("p", null, Ie(C(i)("Renderer.deleteHint")), 1),
            ie("p", null, [
              ie("strong", null, Ie(C(i)("Renderer.continue")), 1)
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]),
      ue(C(cl), {
        modelValue: D.value,
        "onUpdate:modelValue": te[17] || (te[17] = (oe) => D.value = oe),
        title: C(i)("Renderer.selectObservation"),
        size: "md"
      }, {
        default: Ke(() => [
          ie("div", YS, [
            ie("p", null, Ie(C(i)("Renderer.chooseObservation")), 1),
            ie("div", qS, [
              (z(!0), X(Re, null, zt(C(G)(), ([oe, K]) => (z(), dt(C(Vn), {
                key: oe,
                class: "choice",
                onClick: (Fe) => Ee(oe)
              }, {
                default: Ke(() => [
                  ie("span", KS, [
                    ie("span", $S, Ie(C(i)(K.name)), 1),
                    ie("span", JS, Ie(C(i)(K.description)), 1)
                  ])
                ]),
                _: 2
              }, 1032, ["onClick"]))), 128))
            ])
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"])
    ], 64));
  }
}), XS = /* @__PURE__ */ er(jS, [["__scopeId", "data-v-175982e2"]]), QS = { class: "settings-container" }, eA = { key: 0 }, tA = { key: 1 }, nA = { class: "note" }, iA = { class: "dialog__title" }, rA = { class: "note note--body" }, sA = ["data-section"], oA = {
  key: 0,
  class: "empty"
}, aA = { class: "list-group-item" }, lA = { class: "row dragIcon" }, uA = {
  key: 2,
  class: "failed"
}, cA = { class: "row nhidden options" }, hA = ["id"], dA = { class: "slider__track" }, fA = { key: 0 }, pA = ["data-section"], gA = { class: "section__head" }, _A = { class: "section__title" }, mA = {
  key: 0,
  class: "empty"
}, vA = {
  key: 1,
  class: "tree"
}, yA = { class: "tree__row" }, EA = { key: 2 }, TA = { key: 3 }, wA = {
  key: 0,
  class: "tree__layers"
}, SA = ["onClick"], AA = ["data-section"], bA = { class: "section__head" }, CA = { class: "section__title" }, OA = { class: "settings-container" }, LA = /* @__PURE__ */ it({
  __name: "MapsWidgetSettings",
  props: /* @__PURE__ */ Vh({
    dataSources: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(o) {
    $E();
    const i = o, n = mr(o, "modelValue"), { t: l } = io("map"), h = me(!1), f = me(!1), g = me(!1), v = me(""), y = Ag(), m = me(!1), A = me([]);
    Vi(A, (le) => {
      Bn("Selected nodes changed:", le);
    });
    const S = Xt(() => ({
      group: "description",
      disabled: !1,
      ghostClass: "ghost"
    })), I = me(""), D = async () => {
      console.log("addService called with URL:", I.value), f.value = !0;
      let le = null, ne = null, V = !1;
      try {
        console.log("Trying WMS...");
        const ge = await y.createServiceWMS(I.value);
        console.log("WMS result:", ge), ge && (n.value.services.push({
          service: ge,
          url: I.value,
          type: "WMS",
          id: qr()
        }), V = !0);
      } catch (ge) {
        console.log("WMS error:", ge), le = ge;
      }
      try {
        console.log("Trying WFS...");
        const ge = await y.createServiceWFS(I.value);
        console.log("WFS result:", ge), ge && (n.value.services.push({
          service: ge,
          url: I.value,
          type: "WFS",
          id: qr()
        }), V = !0);
      } catch (ge) {
        console.log("WFS error:", ge), ne = ge;
      }
      if (V)
        h.value = !1, I.value = "";
      else {
        const ge = le || ne;
        v.value = ge?.message || l("Settings.serviceFailed"), g.value = !0;
      }
      f.value = !1;
    }, B = (le, ne) => {
      const V = [];
      return le && le.forEach((ge) => {
        V.push({
          id: qr(),
          opacity: 1,
          service: ne,
          type: "WMSLayer",
          name: ge.name,
          title: ge.title,
          attribution: ge.attribution,
          childs: B(ge.children, ne)
        });
      }), V;
    }, G = me(/* @__PURE__ */ new Map()), j = $g(async () => {
      Bn("Computing services async");
      const le = [];
      for (let V of n.value.services ?? []) {
        if (Bn("Service:", V), !!V.reconstructionFailed) {
          Bn("Service failed reconstruction:", V.url), le.push({
            service: { _info: { title: `${V.url} ${l("Settings.failed")}`, name: V.url } },
            type: V.type,
            level: 0,
            childs: [],
            failed: !0
          });
          continue;
        }
        if (V.type == "WFS")
          Bn("Processing WFS service"), V.service && typeof V.service.getFeatureTypes == "function" ? le.push({
            service: V.service,
            type: "WFS",
            level: 0,
            childs: V.service.getFeatureTypes().map(
              (Ae) => ({
                id: qr(),
                opacity: 1,
                service: V.id,
                wfs_service: new Yg(V.service.getFeatureUrl(Ae.name, { outputCrs: "EPSG:4326", asJson: !0, maxFeatures: 100 })),
                geoJson: {},
                type: "WFSLayer",
                name: Ae.name,
                title: Ae.title,
                attribution: ""
              })
            )
          }) : Bn("WFS service missing getFeatureTypes method");
        else if (Bn("Processing WMS service"), console.log("[MapsWidgetSettings] WMS service object:", V), console.log("[MapsWidgetSettings] service.service:", V.service), console.log("[MapsWidgetSettings] service.service._info:", V.service?._info), console.log("[MapsWidgetSettings] getLayers type:", typeof V.service?.getLayers), V.service && typeof V.service.getLayers == "function") {
          const Ae = V.service.getLayers();
          console.log("[MapsWidgetSettings] WMS layers:", Ae), le.push({
            service: V.service,
            type: "WMS",
            childs: B(Ae, V.service),
            level: 0
          }), Bn("WMS service added to tree"), console.log("[MapsWidgetSettings] ret after adding WMS:", JSON.parse(JSON.stringify(le)));
        } else
          Bn("WMS service missing getLayers method");
      }
      const ne = [n.value.datasourceId, ...n.value.datasourceIds ?? []].filter(Boolean);
      for (const V of ne) {
        if (!V) continue;
        const ge = wt(Ls);
        try {
          const Ae = ge.getDatasource(V);
          Rr("Datasource type:", ge.getDatasourceType(V));
          const te = ge.getDatasourceType(V);
          if (!G.value.has(V)) {
            let K;
            te == "OGC Composer" ? K = {
              id: qr(),
              opacity: 1,
              service: Ae,
              geoJson: {},
              type: "GEOJSON",
              name: "GEOJSON",
              title: "GEOJSON",
              attribution: "",
              datasourceId: V
            } : te == "valhalla" ? K = {
              id: qr(),
              opacity: 1,
              service: Ae,
              geoJson: {},
              type: "ROUTE",
              name: "Route",
              title: "Valhalla Route",
              attribution: "",
              datasourceId: V
            } : te == "rest" ? K = {
              id: qr(),
              opacity: 1,
              service: Ae,
              geoJson: {},
              type: "REST-GEOJSON",
              name: "REST-GEOJSON",
              title: "REST GeoJSON",
              attribution: "",
              datasourceId: V
            } : K = {
              id: qr(),
              opacity: 1,
              service: Ae,
              geoJson: {},
              type: "OGCSTA",
              name: "OGCSTA",
              title: "OGCSTA",
              attribution: "",
              datasourceId: V
            }, G.value.set(V, K);
          }
          const oe = G.value.get(V);
          te == "OGC Composer" ? le.push({
            service: { _info: { title: V + "[Composer]", name: V } },
            type: "GEOJSON",
            level: 0,
            childs: [oe]
          }) : te == "valhalla" ? le.push({
            service: { _info: { title: V + "[Valhalla Route]", name: V } },
            type: "ROUTE",
            level: 0,
            childs: [oe]
          }) : te == "rest" ? le.push({
            service: { _info: { title: V + "[REST]", name: V } },
            type: "REST-GEOJSON",
            level: 0,
            childs: [oe]
          }) : le.push({
            service: { _info: { title: V + "[OGCSTA]", name: V } },
            type: "OGCSTA",
            childs: [oe],
            level: 0
          });
        } catch {
          Rr("Service not supported for datasource:", V);
        }
      }
      return console.log("[MapsWidgetSettings] Final services array:", le), console.log("[MapsWidgetSettings] Final services length:", le.length), le;
    });
    me(0.5);
    const W = me(!1), Z = async (le) => {
      const ne = { ...le, checked: !0, styleIds: [] };
      if (ne.type == "WFSLayer") {
        const V = await ne.wfs_service.fetch();
        Bn("WFS data fetched:", V);
      }
      n.value.layers.push(ne);
    }, J = (le) => {
      const ne = n.value.layers.indexOf(le);
      ne > -1 && n.value.layers.splice(ne, 1);
    }, P = me(void 0), U = Xt(() => P.value?.type == "OGCSTA" ? n.value.OGCSstyles : n.value.styles), re = me("wms_wfs"), fe = me(""), Ee = Xt(() => i.dataSources ? i.dataSources.filter((le) => le.type === "ogcsta" || le.type === "OGC Composer" || le.type === "rest" || le.type === "valhalla").map((le) => ({
      text: `${le.name} (${le.type})`,
      value: le.uid
    })) : []), he = () => {
      fe.value && !n.value.datasourceIds.includes(fe.value) && (n.value.datasourceIds.push(fe.value), fe.value = "", h.value = !1);
    }, Oe = (le) => {
      const ne = n.value.datasourceIds.indexOf(le);
      ne > -1 && (n.value.datasourceIds.splice(ne, 1), G.value.delete(le));
    };
    return (le, ne) => (z(), X(Re, null, [
      ue(C(cl), {
        modelValue: h.value,
        "onUpdate:modelValue": ne[6] || (ne[6] = (V) => h.value = V),
        size: "sm",
        title: C(l)("Settings.addService")
      }, {
        actions: Ke(() => [
          ue(C(Vn), {
            intent: "quiet",
            onClick: ne[4] || (ne[4] = (V) => h.value = !1)
          }, {
            default: Ke(() => [
              Qi(Ie(C(l)("common:Action.cancel")), 1)
            ]),
            _: 1
          }),
          ue(C(Vn), {
            intent: "primary",
            "data-testid": "map-add-service-confirm",
            onClick: ne[5] || (ne[5] = (V) => re.value === "wms_wfs" ? D() : he())
          }, {
            default: Ke(() => [
              Qi(Ie(re.value === "wms_wfs" ? C(l)("Settings.add") : C(l)("Settings.addDatasource")), 1)
            ]),
            _: 1
          })
        ]),
        default: Ke(() => [
          ie("div", QS, [
            ue(C(Wh), {
              modelValue: re.value,
              "onUpdate:modelValue": ne[0] || (ne[0] = (V) => re.value = V),
              options: [
                { value: "wms_wfs", label: C(l)("Settings.serviceTypes.wmsWfs") },
                { value: "datasource", label: C(l)("Settings.serviceTypes.datasource") }
              ],
              "value-key": "value",
              "label-key": "label",
              stacked: ""
            }, null, 8, ["modelValue", "options"]),
            re.value === "wms_wfs" ? (z(), X("div", eA, [
              ue(C(us), {
                modelValue: I.value,
                "onUpdate:modelValue": ne[1] || (ne[1] = (V) => I.value = V),
                label: C(l)("Settings.serviceUrl"),
                placeholder: "https://[serviceurl]"
              }, null, 8, ["modelValue", "label"])
            ])) : (z(), X("div", tA, [
              Ee.value.length > 0 ? (z(), dt(C(Ku), {
                key: 0,
                modelValue: fe.value,
                "onUpdate:modelValue": ne[2] || (ne[2] = (V) => fe.value = V),
                options: Ee.value,
                label: C(l)("Settings.selectDatasource"),
                placeholder: C(l)("Settings.chooseDatasource"),
                "label-key": "text",
                "value-key": "value"
              }, null, 8, ["modelValue", "options", "label", "placeholder"])) : (z(), dt(C(us), {
                key: 1,
                modelValue: fe.value,
                "onUpdate:modelValue": ne[3] || (ne[3] = (V) => fe.value = V),
                placeholder: C(l)("Settings.enterDatasourceId"),
                label: C(l)("Settings.datasourceId")
              }, null, 8, ["modelValue", "placeholder", "label"])),
              ie("p", nA, [
                Qi(Ie(C(l)("Settings.primaryDatasource")) + " ", 1),
                ie("strong", null, Ie(n.value.datasourceId), 1)
              ])
            ]))
          ])
        ]),
        _: 1
      }, 8, ["modelValue", "title"]),
      ue(C(cl), {
        modelValue: g.value,
        "onUpdate:modelValue": ne[8] || (ne[8] = (V) => g.value = V),
        size: "sm"
      }, {
        header: Ke(() => [
          ue(C(Ht), {
            name: "error",
            size: "lg",
            tone: "color-err"
          }),
          ie("h2", iA, Ie(C(l)("Settings.serviceError")), 1)
        ]),
        actions: Ke(() => [
          ue(C(Vn), {
            onClick: ne[7] || (ne[7] = (V) => g.value = !1)
          }, {
            default: Ke(() => [
              Qi(Ie(C(l)("Settings.ok")), 1)
            ]),
            _: 1
          })
        ]),
        default: Ke(() => [
          ie("p", rA, Ie(v.value), 1)
        ]),
        _: 1
      }, 8, ["modelValue"]),
      ue(XS, {
        modelValue: U.value,
        "onUpdate:modelValue": ne[9] || (ne[9] = (V) => U.value = V),
        layer: P.value,
        "onUpdate:layer": ne[10] || (ne[10] = (V) => P.value = V),
        show: W.value,
        "onUpdate:show": ne[11] || (ne[11] = (V) => W.value = V),
        services: n.value.services,
        "all-layers": n.value.layers
      }, null, 8, ["modelValue", "layer", "show", "services", "all-layers"]),
      ie("section", {
        class: "settings-section",
        "data-section-id": "layers",
        "data-section": C(l)("Settings.sections.layers")
      }, [
        n.value.layers?.length ? (z(), dt(C(Zw), Pp({
          key: 1,
          modelValue: n.value.layers,
          "onUpdate:modelValue": ne[12] || (ne[12] = (V) => n.value.layers = V),
          animation: 150,
          "component-data": {
            tag: "ul",
            type: "transition-group",
            name: m.value ? null : "flip-list"
          },
          class: "list-group",
          "item-key": "id"
        }, S.value, {
          onEnd: ne[13] || (ne[13] = (V) => m.value = !1),
          onStart: ne[14] || (ne[14] = (V) => m.value = !0)
        }), {
          item: Ke(({ element: V }) => [
            ie("li", aA, [
              ie("div", lA, [
                V.reconstructionFailed ? (z(), dt(C(Ht), {
                  key: 0,
                  name: "error",
                  tone: "color-err"
                })) : (z(), dt(C(Ht), {
                  key: 1,
                  name: V.checked ? "layers" : "layers_clear",
                  title: V.checked ? C(l)("Settings.hideLayer") : C(l)("Settings.showLayer"),
                  onClick: (ge) => V.checked = !V.checked
                }, null, 8, ["name", "title", "onClick"])),
                Qi(" " + Ie(V.title) + " ", 1),
                V.reconstructionFailed ? (z(), X("span", uA, Ie(C(l)("Settings.failed")), 1)) : Be("", !0)
              ]),
              ie("div", cA, [
                ue(C(Ht), { name: "opacity" }),
                ie("div", {
                  id: V.id,
                  class: "slider nhidden sliderPopOver"
                }, [
                  ie("div", dA, [
                    ue(C(ju), {
                      modelValue: V.opacity,
                      "onUpdate:modelValue": (ge) => V.opacity = ge,
                      min: 0,
                      max: 1,
                      step: 0.01
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ], 8, hA),
                V.type == "WFSLayer" || V.type == "OGCSTA" || V.type == "GEOJSON" || V.type == "REST-GEOJSON" ? (z(), X("div", fA, [
                  ue(C(Vn), {
                    intent: "quiet",
                    title: C(l)("Settings.styles"),
                    onClick: () => {
                      P.value = V, W.value = !0;
                    }
                  }, {
                    default: Ke(() => [
                      ue(C(Ht), {
                        name: "settings",
                        size: "sm"
                      })
                    ]),
                    _: 1
                  }, 8, ["title", "onClick"])
                ])) : Be("", !0),
                ue(C(Vn), {
                  intent: "danger",
                  title: C(l)("Settings.removeLayer"),
                  onClick: Hf((ge) => J(V), ["stop"])
                }, {
                  default: Ke(() => [
                    ue(C(Ht), {
                      name: "delete",
                      size: "sm"
                    })
                  ]),
                  _: 1
                }, 8, ["title", "onClick"])
              ])
            ])
          ]),
          _: 1
        }, 16, ["modelValue", "component-data"])) : (z(), X("span", oA, Ie(C(l)("Settings.noLayers")), 1))
      ], 8, sA),
      ie("section", {
        class: "settings-section bottomframe",
        "data-section-id": "services",
        "data-section": C(l)("Settings.sections.services")
      }, [
        ie("div", gA, [
          ue(C(Ht), {
            name: "cable",
            size: "sm"
          }),
          ie("span", _A, Ie(C(l)("Settings.sections.services")), 1),
          ue(C(Vn), {
            intent: "quiet",
            title: C(l)("Settings.addService"),
            busy: f.value,
            onClick: ne[15] || (ne[15] = (V) => h.value = !0)
          }, {
            default: Ke(() => [
              ue(C(Ht), {
                name: "add_circle",
                size: "sm"
              })
            ]),
            _: 1
          }, 8, ["title", "busy"])
        ]),
        C(j) && C(j).length == 0 ? (z(), X("span", mA, Ie(C(l)("Settings.noServices")), 1)) : (z(), X("ul", vA, [
          (z(!0), X(Re, null, zt(C(j), (V) => (z(), X("li", {
            key: V.id,
            class: "tree__service"
          }, [
            ie("div", yA, [
              V.failed ? (z(), dt(C(Ht), {
                key: 0,
                name: "error",
                tone: "color-err"
              })) : (z(), dt(C(Ht), {
                key: 1,
                name: "cable"
              })),
              V.service._info.title ? (z(), X("b", EA, Ie(V.service._info.title), 1)) : (z(), X("b", TA, Ie(V.service._info.name), 1)),
              (V.type === "OGCSTA" || V.type === "GEOJSON" || V.type === "REST-GEOJSON") && n.value.datasourceIds?.includes(V.service._info.name) ? (z(), dt(C(Vn), {
                key: 4,
                intent: "quiet",
                title: C(l)("Settings.removeDatasource"),
                onClick: Hf((ge) => Oe(V.service._info.name), ["stop"])
              }, {
                default: Ke(() => [
                  ue(C(Ht), {
                    name: "delete",
                    size: "sm"
                  })
                ]),
                _: 1
              }, 8, ["title", "onClick"])) : Be("", !0)
            ]),
            V.childs && V.childs.length ? (z(), X("ul", wA, [
              (z(!0), X(Re, null, zt(V.childs, (ge) => (z(), X("li", {
                key: ge.id ?? ge.title,
                class: "tree__row"
              }, [
                ie("span", {
                  class: "tree__add",
                  onClick: () => Z(ge)
                }, [
                  ue(C(Ht), {
                    name: "layers",
                    class: "nsee"
                  }),
                  ue(C(Ht), {
                    name: "add",
                    class: "nhidden"
                  }),
                  Qi(" " + Ie(ge.title), 1)
                ], 8, SA)
              ]))), 128))
            ])) : Be("", !0)
          ]))), 128))
        ]))
      ], 8, pA),
      ie("section", {
        class: "settings-section bottomframe",
        "data-section-id": "map",
        "data-section": C(l)("Settings.sections.map")
      }, [
        ie("div", bA, [
          ue(C(Ht), {
            name: "map",
            size: "sm"
          }),
          ie("span", CA, Ie(C(l)("Settings.sections.map")), 1)
        ]),
        ie("div", OA, [
          ue(C(us), {
            modelValue: n.value.baseMapUrl,
            "onUpdate:modelValue": ne[16] || (ne[16] = (V) => n.value.baseMapUrl = V),
            label: C(l)("Settings.baseMap"),
            placeholder: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
            hint: C(l)("Settings.baseMapHint")
          }, null, 8, ["modelValue", "label", "hint"]),
          ue(C(Ju), {
            modelValue: n.value.fixed,
            "onUpdate:modelValue": ne[17] || (ne[17] = (V) => n.value.fixed = V),
            label: C(l)("Settings.fixed")
          }, null, 8, ["modelValue", "label"]),
          ue(C($u), {
            modelValue: n.value.selectionHighlightColor,
            "onUpdate:modelValue": ne[18] || (ne[18] = (V) => n.value.selectionHighlightColor = V),
            label: C(l)("Settings.highlight"),
            hint: C(l)("Settings.highlightHint")
          }, null, 8, ["modelValue", "label", "hint"])
        ])
      ], 8, AA)
    ], 64));
  }
}), Ip = /* @__PURE__ */ er(LA, [["__scopeId", "data-v-afd73ed9"]]), IA = {
  key: 0,
  class: "datapoint tlc"
}, NA = /* @__PURE__ */ it({
  __name: "TLCDataLabelRenderer",
  props: {
    data: {},
    config: {},
    markerSize: { default: 45 }
  },
  setup(o) {
    const i = o, { config: n, data: l, markerSize: h } = Ol(i);
    return (f, g) => (z(), X("div", {
      class: "datapoint-wrapper",
      style: _a({ width: (C(h) || 45) + "px", height: (C(h) || 45) + "px" })
    }, [
      C(l) ? (z(), X("div", IA, Ie(C(l)), 1)) : Be("", !0)
    ], 4));
  }
}), DA = /* @__PURE__ */ er(NA, [["__scopeId", "data-v-2eb55b7f"]]), RA = {};
function PA(o, i) {
  return " empty ";
}
const xA = /* @__PURE__ */ er(RA, [["render", PA], ["__scopeId", "data-v-ca2b9f21"]]);
class FA {
  constructor() {
    this.component = DA, this.setupComponent = xA, this.description = "map:Renderer.trafficLight.description", this.name = "map:Renderer.trafficLight.name", this.qualifiedName = "tlc", this.namespace = "tlc", this.example = " 🟢⚪⚪";
  }
}
const MA = {
  key: 0,
  class: "datapoint"
}, BA = {
  key: 1,
  class: "datapoint"
}, kA = /* @__PURE__ */ it({
  __name: "ValueUnitDataLabelRenderer",
  props: {
    data: {},
    config: {},
    markerSize: { default: 0 }
  },
  setup(o) {
    const i = o, { config: n, data: l, markerSize: h } = Ol(i);
    return n.value && !n.value.unit && (n.value.unit = ""), n.value && !n.value.prefix && (n.value.prefix = ""), n.value && !n.value.suffix && (n.value.suffix = ""), (f, g) => (z(), X("div", {
      class: "datapoint-wrapper",
      style: _a({ width: (C(h) || 0) + "px", height: (C(h) || 0) + "px" })
    }, [
      C(l) ? (z(), X("div", MA, Ie(C(n).prefix) + Ie(C(l)) + " " + Ie(C(n).unit) + " " + Ie(C(n).suffix), 1)) : (z(), X("div", BA, Ie(C(n).prefix) + " -- " + Ie(C(n).unit) + " " + Ie(C(n).suffix), 1))
    ], 4));
  }
}), GA = /* @__PURE__ */ er(kA, [["__scopeId", "data-v-a78b518d"]]), UA = ["data-section"], zA = { class: "settings-container" }, VA = /* @__PURE__ */ it({
  __name: "ValueUnitDataLabelRendererSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const i = mr(o, "modelValue"), { t: n } = io("map");
    return (l, h) => (z(), X("section", {
      class: "settings-section",
      "data-section-id": "style",
      "data-section": C(n)("Style.section")
    }, [
      ie("div", zA, [
        ue(C(us), {
          modelValue: i.value.unit,
          "onUpdate:modelValue": h[0] || (h[0] = (f) => i.value.unit = f),
          label: C(n)("ValueUnit.unit")
        }, null, 8, ["modelValue", "label"]),
        ue(C(us), {
          modelValue: i.value.prefix,
          "onUpdate:modelValue": h[1] || (h[1] = (f) => i.value.prefix = f),
          label: C(n)("ValueUnit.prefix")
        }, null, 8, ["modelValue", "label"]),
        ue(C(us), {
          modelValue: i.value.suffix,
          "onUpdate:modelValue": h[2] || (h[2] = (f) => i.value.suffix = f),
          label: C(n)("ValueUnit.suffix")
        }, null, 8, ["modelValue", "label"])
      ])
    ], 8, UA));
  }
}), WA = /* @__PURE__ */ er(VA, [["__scopeId", "data-v-e7589c54"]]);
class ZA {
  constructor() {
    this.component = GA, this.setupComponent = WA, this.description = "map:Renderer.valueUnit.description", this.name = "map:Renderer.valueUnit.name", this.namespace = "general", this.qualifiedName = "ValueUnitDataPointRenderer", this.example = " 15";
  }
}
const HA = [
  {
    name: "Map Clicked",
    type: "click_on_map",
    description: "Triggered when the map background is clicked (provides lat/lon)",
    payloadType: Si
  },
  {
    name: "Thing Clicked",
    type: "click_on_thing",
    description: "Triggered when a Thing marker is clicked on the map",
    payloadType: Je
  },
  {
    name: "Datastream Clicked",
    type: "click_on_datastream",
    description: "Triggered when a Datastream is clicked on the map",
    payloadType: We
  },
  {
    name: "Observation Clicked",
    type: "click_on_observation",
    description: "Triggered when an Observation is clicked on the map",
    payloadType: St
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
    payloadType: Je
  },
  {
    name: "Datastream Hovered",
    type: "hover_on_datastream",
    description: "Triggered when hovering over a Datastream marker on the map",
    payloadType: We
  }
], YA = `<?xml version="1.0" encoding="UTF-8"?>
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
`, qA = { name: "Karte" }, KA = { serviceFailed: "Der Dienst ließ sich nicht laden. Die Adresse ist kein gültiger WMS- oder WFS-Dienst.", addService: "Dienst hinzufügen", serviceTypes: { wmsWfs: "WMS/WFS-Dienst", datasource: "Datenquelle" }, serviceUrl: "Adresse des Dienstes", selectDatasource: "Datenquelle", chooseDatasource: "Datenquelle wählen", enterDatasourceId: "Kennung der Datenquelle eingeben", datasourceId: "Kennung der Datenquelle", primaryDatasource: "Haupt-Datenquelle:", add: "Hinzufügen", addDatasource: "Datenquelle hinzufügen", serviceError: "Fehler beim Dienst", ok: "OK", sections: { layers: "Ebenen", services: "Dienste", map: "Karte" }, noLayers: "Noch keine Ebenen", noServices: "Noch keine Dienste", hideLayer: "Ebene ausblenden", showLayer: "Ebene zeigen", failed: "(fehlgeschlagen)", styles: "Stile", removeLayer: "Ebene entfernen", removeDatasource: "Datenquelle entfernen", baseMap: "Adresse der Grundkarte", baseMapHint: "Vorlage für die Kachel-Adresse. {z}, {x} und {y} stehen für Zoomstufe und Koordinaten.", fixed: "Karte fixiert", highlight: "Farbe für die Auswahl", highlightHint: "Farbe, mit der ausgewählte Things auf der Karte hervorgehoben werden." }, $A = { trafficLight: { name: "Ampel-Darstellung", description: "Zeigt einen Messwert als Ampel" }, valueUnit: { name: "Wert und Einheit", description: "Zeigt einen Wert mit seiner Einheit" }, tabs: { settings: "Einstellungen", conditions: "Bedingungen", points: "Punkte", areas: "Flächen", autoUpdate: "Aktualisierung", placement: "Platzierung" }, addStyle: "Stil hinzufügen", addDatastreamStyle: "Datenstrom-Stil hinzufügen", deleteStyle: "Stil löschen", deleteDatastreamStyle: "Datenstrom-Stil löschen", addObservation: "Beobachtung hinzufügen", deleteObservation: "Beobachtung löschen", tag: { thing: "Th", datastream: "DS", observation: "Beob." }, observation: "Beobachtung", settings: "Darstellungseinstellungen", create: "Neu anlegen", orSelect: "oder einen Stil zum Bearbeiten wählen", warning: "Achtung:", usedBy_one: "Der Stil „{{name}}“ wird von {{count}} Ebene verwendet:", usedBy_other: "Der Stil „{{name}}“ wird von {{count}} Ebenen verwendet:", unnamedLayer: "Ebene ohne Namen", deleteHint: "Wird der Stil gelöscht, verschwindet er aus all diesen Ebenen.", continue: "Trotzdem fortfahren?", selectObservation: "Darstellung für Beobachtungen wählen", chooseObservation: "Wie sollen Beobachtungen dargestellt werden?", newStyle: "Neuer Stil", newDatastreamStyle: "Neuer Datenstrom-Stil" }, JA = { section: "Stil", stroke: "Kontur", lineColor: "Linienfarbe", lineSize: "Linienstärke", lineOpacity: "Deckkraft der Linie", fill: "Füllung", fillOpacity: "Deckkraft der Füllung", fillColor: "Füllfarbe", className: "CSS-Klasse" }, jA = { unit: "Einheit", prefix: "Präfix", suffix: "Suffix" }, XA = { renderer: "Darstellung", choose: "Darstellung wählen" }, QA = { label: "Darstellen innerhalb", thing: "Thing", observedArea: "Beobachtete Fläche" }, eb = { renderAs: "Punkt darstellen als", as: { icon: "Symbol", prop: "Eigenschaft", image: "Bild", none: "Nichts" }, prop: "Eigenschaft des Datenstroms", imageUrl: "Adresse des Bildes", imageSize: "Bildgröße", pinColor: "Farbe der Stecknadel", solid: "Gefüllt", noImage: "Kein Bild" }, tb = { title: "Automatische Aktualisierung", refresh: "Beobachtungen neu laden: {{time}}", never: "Nie", current: "Aktuelle Einstellung:", last: "Letzte Aktualisierung:" }, nb = { property: "Eigenschaft", is: "ist", value: "Wert", remove: "Bedingung entfernen", none: "Noch nichts, worauf geprüft wird.", add: "Hinzufügen" }, ib = {
  Widget: qA,
  Settings: KA,
  Renderer: $A,
  Style: JA,
  ValueUnit: jA,
  Observations: XA,
  Placement: QA,
  Point: eb,
  AutoUpdate: tb,
  Conditions: nb
}, rb = { name: "Map" }, sb = { serviceFailed: "Failed to load the service. The URL is not a valid WMS or WFS service.", addService: "Add service", serviceTypes: { wmsWfs: "WMS/WFS service", datasource: "Data source" }, serviceUrl: "Service URL", selectDatasource: "Select data source", chooseDatasource: "Choose a data source", enterDatasourceId: "Enter data source ID", datasourceId: "Data source ID", primaryDatasource: "Primary data source:", add: "Add", addDatasource: "Add data source", serviceError: "Service error", ok: "OK", sections: { layers: "Layers", services: "Services", map: "Map" }, noLayers: "No layers here", noServices: "No services here", hideLayer: "Hide layer", showLayer: "Show layer", failed: "(failed)", styles: "Styles", removeLayer: "Remove layer", removeDatasource: "Remove data source", baseMap: "Base map URL", baseMapHint: "Tile server URL template. Use {z}, {x}, {y} placeholders for zoom and coordinates.", fixed: "Map fixed", highlight: "Selection highlight colour", highlightHint: "Colour used to highlight selected Things on the map." }, ob = { trafficLight: { name: "Traffic light data point renderer", description: "Renders a data point as a traffic light" }, valueUnit: { name: "Value and unit data point renderer", description: "Renders a value and its unit" }, tabs: { settings: "Settings", conditions: "Conditions", points: "Points", areas: "Areas", autoUpdate: "Auto-update", placement: "Placement" }, addStyle: "Add style", addDatastreamStyle: "Add datastream style", deleteStyle: "Delete style", deleteDatastreamStyle: "Delete datastream style", addObservation: "Add observation", deleteObservation: "Delete observation", tag: { thing: "Th", datastream: "DS", observation: "Obs" }, observation: "Observation", settings: "Renderer settings", create: "Create", orSelect: "or select a style to edit", warning: "Warning:", usedBy_one: "The style “{{name}}” is used by {{count}} layer:", usedBy_other: "The style “{{name}}” is used by {{count}} layers:", unnamedLayer: "Unnamed layer", deleteHint: "If you delete this style, it will be removed from all these layers.", continue: "Do you want to continue?", selectObservation: "Select observation renderer", chooseObservation: "Choose which type of renderer to use for observations:", newStyle: "New style", newDatastreamStyle: "New datastream style" }, ab = { section: "Style settings", stroke: "Stroke", lineColor: "Line colour", lineSize: "Line size", lineOpacity: "Line opacity", fill: "Fill", fillOpacity: "Fill opacity", fillColor: "Fill colour", className: "Class name" }, lb = { unit: "Unit", prefix: "Prefix", suffix: "Suffix" }, ub = { renderer: "Renderer", choose: "Select an option" }, cb = { label: "Render within", thing: "Thing", observedArea: "Observed area" }, hb = { renderAs: "Render point as", as: { icon: "Icon", prop: "Property", image: "Image", none: "None" }, prop: "Datastream property", imageUrl: "Image URL", imageSize: "Image size", pinColor: "Pin colour", solid: "Solid", noImage: "No image" }, db = { title: "Auto-update configuration", refresh: "Observation refresh time: {{time}}", never: "Never", current: "Current setting:", last: "Last update:" }, fb = { property: "Property", is: "is", value: "Value", remove: "Remove condition", none: "Nothing to match on yet.", add: "Add" }, pb = {
  Widget: rb,
  Settings: sb,
  Renderer: ob,
  Style: ab,
  ValueUnit: lb,
  Observations: ub,
  Placement: cb,
  Point: hb,
  AutoUpdate: db,
  Conditions: fb
};
var gb = Object.getOwnPropertyDescriptor, _b = (o, i, n, l) => {
  for (var h = l > 1 ? void 0 : l ? gb(i, n) : i, f = o.length - 1, g; f >= 0; f--)
    (g = o[f]) && (h = g(h) || h);
  return h;
};
const Jg = "map";
let Np = class {
  constructor() {
    this.namespace = Jg, this.resources = {
      de: ib,
      en: pb
    };
  }
};
Np = _b([
  Rp({
    service: ["Translations"],
    properties: { "i18n.namespace": Jg }
  })
], Np);
var mb = Object.defineProperty, vb = Object.getOwnPropertyDescriptor, sd = (o, i, n, l) => {
  for (var h = l > 1 ? void 0 : l ? vb(i, n) : i, f = o.length - 1, g; f >= 0; f--)
    (g = o[f]) && (h = (l ? g(i, n, h) : g(h)) || h);
  return l && h && mb(i, n, h), h;
}, Dp = (o, i) => (n, l) => i(n, l, o);
b.eINSTANCE;
const xo = "MapWidget";
let oc = class {
  constructor(o, i) {
    this.events = o, this.actions = i, this.type = xo, this.component = pp, this.settingsComponent = Ip, this.supportedDSTypes = ["ogcsta", "OGC Composer", "rest", "valhalla"], this.icon = o1, this.name = "Map", this.nameKey = "map:Widget.name";
  }
  register() {
    fl().registerDataPointRenderer(new FA()), fl().registerDataPointRenderer(new ZA()), this.events.registerWidget(xo, HA), this.actions.registerActionsFromEcoreString(xo, YA, "widget", "model.ecore").catch(() => {
      this.actions.registerWidgetType(xo, bg, "widget");
    }), WE().register(
      "org.eclipse.daanse.board.app.ui.vue.widget.map",
      {
        MapsWidget: pp,
        MapsWidgetSettings: Ip,
        useDataPointRegistry: fl,
        // Renderer building blocks: the geojson plugin composes its markers
        // and stylers from these. Public API on purpose - a deep import into
        // this bundle's src tree cannot be resolved at runtime.
        MapMarker: Sl,
        ConditionSettings: zh,
        PointStyler: qg,
        AreaStyler: Kg
      },
      "0.0.1-next.1",
      "ui.vue.widget.map"
    );
  }
  unregister() {
    this.events.unregisterWidget(xo), this.actions.unregisterWidgetType(xo);
  }
};
sd([
  zE()
], oc.prototype, "register", 1);
sd([
  VE()
], oc.prototype, "unregister", 1);
oc = sd([
  Rp({
    service: [r1],
    properties: { "widget.type": xo }
  }),
  Dp(0, Vf(GE)),
  Dp(1, Vf(UE))
], oc);
export {
  Kg as AreaStyler,
  zh as ConditionSettings,
  Sl as MapMarker,
  Np as MapTranslations,
  oc as MapWidgetProvider,
  pp as MapsWidget,
  Ip as MapsWidgetSettings,
  qg as PointStyler,
  fl as useDataPointRegistry
};
