(function(){var i="ui.vue.widget.map",d=document,s=d.querySelector('style[data-tsm-bundle="'+i+'"]');if(!s){s=d.createElement('style');s.setAttribute('data-tsm-bundle',i);d.head.appendChild(s);}s.textContent=".leaflet-pane,.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-tile-container,.leaflet-pane>svg,.leaflet-pane>canvas,.leaflet-zoom-box,.leaflet-image-layer,.leaflet-layer{position:absolute;left:0;top:0}.leaflet-container{overflow:hidden}.leaflet-tile,.leaflet-marker-icon,.leaflet-marker-shadow{-webkit-user-select:none;-moz-user-select:none;user-select:none;-webkit-user-drag:none}.leaflet-tile::selection{background:transparent}.leaflet-safari .leaflet-tile{image-rendering:-webkit-optimize-contrast}.leaflet-safari .leaflet-tile-container{width:1600px;height:1600px;-webkit-transform-origin:0 0}.leaflet-marker-icon,.leaflet-marker-shadow{display:block}.leaflet-container .leaflet-overlay-pane svg{max-width:none!important;max-height:none!important}.leaflet-container .leaflet-marker-pane img,.leaflet-container .leaflet-shadow-pane img,.leaflet-container .leaflet-tile-pane img,.leaflet-container img.leaflet-image-layer,.leaflet-container .leaflet-tile{max-width:none!important;max-height:none!important;width:auto;padding:0}.leaflet-container img.leaflet-tile{mix-blend-mode:plus-lighter}.leaflet-container.leaflet-touch-zoom{-ms-touch-action:pan-x pan-y;touch-action:pan-x pan-y}.leaflet-container.leaflet-touch-drag{-ms-touch-action:pinch-zoom;touch-action:none;touch-action:pinch-zoom}.leaflet-container.leaflet-touch-drag.leaflet-touch-zoom{-ms-touch-action:none;touch-action:none}.leaflet-container{-webkit-tap-highlight-color:transparent}.leaflet-container a{-webkit-tap-highlight-color:rgba(51,181,229,.4)}.leaflet-tile{filter:inherit;visibility:hidden}.leaflet-tile-loaded{visibility:inherit}.leaflet-zoom-box{width:0;height:0;-moz-box-sizing:border-box;box-sizing:border-box;z-index:800}.leaflet-overlay-pane svg{-moz-user-select:none}.leaflet-pane{z-index:400}.leaflet-tile-pane{z-index:200}.leaflet-overlay-pane{z-index:400}.leaflet-shadow-pane{z-index:500}.leaflet-marker-pane{z-index:600}.leaflet-tooltip-pane{z-index:650}.leaflet-popup-pane{z-index:700}.leaflet-map-pane canvas{z-index:100}.leaflet-map-pane svg{z-index:200}.leaflet-vml-shape{width:1px;height:1px}.lvml{behavior:url(#default#VML);display:inline-block;position:absolute}.leaflet-control{position:relative;z-index:800;pointer-events:visiblePainted;pointer-events:auto}.leaflet-top,.leaflet-bottom{position:absolute;z-index:1000;pointer-events:none}.leaflet-top{top:0}.leaflet-right{right:0}.leaflet-bottom{bottom:0}.leaflet-left{left:0}.leaflet-control{float:left;clear:both}.leaflet-right .leaflet-control{float:right}.leaflet-top .leaflet-control{margin-top:10px}.leaflet-bottom .leaflet-control{margin-bottom:10px}.leaflet-left .leaflet-control{margin-left:10px}.leaflet-right .leaflet-control{margin-right:10px}.leaflet-fade-anim .leaflet-popup{opacity:0;-webkit-transition:opacity .2s linear;-moz-transition:opacity .2s linear;transition:opacity .2s linear}.leaflet-fade-anim .leaflet-map-pane .leaflet-popup{opacity:1}.leaflet-zoom-animated{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0}svg.leaflet-zoom-animated{will-change:transform}.leaflet-zoom-anim .leaflet-zoom-animated{-webkit-transition:-webkit-transform .25s cubic-bezier(0,0,.25,1);-moz-transition:-moz-transform .25s cubic-bezier(0,0,.25,1);transition:transform .25s cubic-bezier(0,0,.25,1)}.leaflet-zoom-anim .leaflet-tile,.leaflet-pan-anim .leaflet-tile{-webkit-transition:none;-moz-transition:none;transition:none}.leaflet-zoom-anim .leaflet-zoom-hide{visibility:hidden}.leaflet-interactive{cursor:pointer}.leaflet-grab{cursor:-webkit-grab;cursor:-moz-grab;cursor:grab}.leaflet-crosshair,.leaflet-crosshair .leaflet-interactive{cursor:crosshair}.leaflet-popup-pane,.leaflet-control{cursor:auto}.leaflet-dragging .leaflet-grab,.leaflet-dragging .leaflet-grab .leaflet-interactive,.leaflet-dragging .leaflet-marker-draggable{cursor:move;cursor:-webkit-grabbing;cursor:-moz-grabbing;cursor:grabbing}.leaflet-marker-icon,.leaflet-marker-shadow,.leaflet-image-layer,.leaflet-pane>svg path,.leaflet-tile-container{pointer-events:none}.leaflet-marker-icon.leaflet-interactive,.leaflet-image-layer.leaflet-interactive,.leaflet-pane>svg path.leaflet-interactive,svg.leaflet-image-layer.leaflet-interactive path{pointer-events:visiblePainted;pointer-events:auto}.leaflet-container{background:#ddd;outline-offset:1px}.leaflet-container a{color:#0078a8}.leaflet-zoom-box{border:2px dotted #38f;background:#ffffff80}.leaflet-container{font-family:Helvetica Neue,Arial,Helvetica,sans-serif;font-size:12px;font-size:.75rem;line-height:1.5}.leaflet-bar{box-shadow:0 1px 5px #000000a6;border-radius:4px}.leaflet-bar a{background-color:#fff;border-bottom:1px solid #ccc;width:26px;height:26px;line-height:26px;display:block;text-align:center;text-decoration:none;color:#000}.leaflet-bar a,.leaflet-control-layers-toggle{background-position:50% 50%;background-repeat:no-repeat;display:block}.leaflet-bar a:hover,.leaflet-bar a:focus{background-color:#f4f4f4}.leaflet-bar a:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.leaflet-bar a:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px;border-bottom:none}.leaflet-bar a.leaflet-disabled{cursor:default;background-color:#f4f4f4;color:#bbb}.leaflet-touch .leaflet-bar a{width:30px;height:30px;line-height:30px}.leaflet-touch .leaflet-bar a:first-child{border-top-left-radius:2px;border-top-right-radius:2px}.leaflet-touch .leaflet-bar a:last-child{border-bottom-left-radius:2px;border-bottom-right-radius:2px}.leaflet-control-zoom-in,.leaflet-control-zoom-out{font:700 18px Lucida Console,Monaco,monospace;text-indent:1px}.leaflet-touch .leaflet-control-zoom-in,.leaflet-touch .leaflet-control-zoom-out{font-size:22px}.leaflet-control-layers{box-shadow:0 1px 5px #0006;background:#fff;border-radius:5px}.leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAQAAAADQ4RFAAACf0lEQVR4AY1UM3gkARTePdvdoTxXKc+qTl3aU5U6b2Kbkz3Gtq3Zw6ziLGNPzrYx7946Tr6/ee/XeCQ4D3ykPtL5tHno4n0d/h3+xfuWHGLX81cn7r0iTNzjr7LrlxCqPtkbTQEHeqOrTy4Yyt3VCi/IOB0v7rVC7q45Q3Gr5K6jt+3Gl5nCoDD4MtO+j96Wu8atmhGqcNGHObuf8OM/x3AMx38+4Z2sPqzCxRFK2aF2e5Jol56XTLyggAMTL56XOMoS1W4pOyjUcGGQdZxU6qRh7B9Zp+PfpOFlqt0zyDZckPi1ttmIp03jX8gyJ8a/PG2yutpS/Vol7peZIbZcKBAEEheEIAgFbDkz5H6Zrkm2hVWGiXKiF4Ycw0RWKdtC16Q7qe3X4iOMxruonzegJzWaXFrU9utOSsLUmrc0YjeWYjCW4PDMADElpJSSQ0vQvA1Tm6/JlKnqFs1EGyZiFCqnRZTEJJJiKRYzVYzJck2Rm6P4iH+cmSY0YzimYa8l0EtTODFWhcMIMVqdsI2uiTvKmTisIDHJ3od5GILVhBCarCfVRmo4uTjkhrhzkiBV7SsaqS+TzrzM1qpGGUFt28pIySQHR6h7F6KSwGWm97ay+Z+ZqMcEjEWebE7wxCSQwpkhJqoZA5ivCdZDjJepuJ9IQjGGUmuXJdBFUygxVqVsxFsLMbDe8ZbDYVCGKxs+W080max1hFCarCfV+C1KATwcnvE9gRRuMP2prdbWGowm1KB1y+zwMMENkM755cJ2yPDtqhTI6ED1M/82yIDtC/4j4BijjeObflpO9I9MwXTCsSX8jWAFeHr05WoLTJ5G8IQVS/7vwR6ohirYM7f6HzYpogfS3R2OAAAAAElFTkSuQmCC);width:36px;height:36px}.leaflet-retina .leaflet-control-layers-toggle{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAQAAABvcdNgAAAEsklEQVR4AWL4TydIhpZK1kpWOlg0w3ZXP6D2soBtG42jeI6ZmQTHzAxiTbSJsYLjO9HhP+WOmcuhciVnmHVQcJnp7DFvScowZorad/+V/fVzMdMT2g9Cv9guXGv/7pYOrXh2U+RRR3dSd9JRx6bIFc/ekqHI29JC6pJ5ZEh1yWkhkbcFeSjxgx3L2m1cb1C7bceyxA+CNjT/Ifff+/kDk2u/w/33/IeCMOSaWZ4glosqT3DNnNZQ7Cs58/3Ce5HL78iZH/vKVIaYlqzfdLu8Vi7dnvUbEza5Idt36tquZFldl6N5Z/POLof0XLK61mZCmJSWjVF9tEjUluu74IUXvgttuVIHE7YxSkaYhJZam7yiM9Pv82JYfl9nptxZaxMJE4YSPty+vF0+Y2up9d3wwijfjZbabqm/3bZ9ecKHsiGmRflnn1MW4pjHf9oLufyn2z3y1D6n8g8TZhxyzipLNPnAUpsOiuWimg52psrTZYnOWYNDTMuWBWa0tJb4rgq1UvmutpaYEbZlwU3CLJm/ayYjHW5/h7xWLn9Hh1vepDkyf7dE7MtT5LR4e7yYpHrkhOUpEfssBLq2pPhAqoSWKUkk7EDqkmK6RrCEzqDjhNDWNE+XSMvkJRDWlZTmCW0l0PHQGRZY5t1L83kT0Y3l2SItk5JAWHl2dCOBm+fPu3fo5/3v61RMCO9Jx2EEYYhb0rmNQMX/vm7gqOEJLcXTGw3CAuRNeyaPWwjR8PRqKQ1PDA/dpv+on9Shox52WFnx0KY8onHayrJzm87i5h9xGw/tfkev0jGsQizqezUKjk12hBMKJ4kbCqGPVNXudyyrShovGw5CgxsRICxF6aRmSjlBnHRzg7Gx8fKqEubI2rahQYdR1YgDIRQO7JvQyD52hoIQx0mxa0ODtW2Iozn1le2iIRdzwWewedyZzewidueOGqlsn1MvcnQpuVwLGG3/IR1hIKxCjelIDZ8ldqWz25jWAsnldEnK0Zxro19TGVb2ffIZEsIO89EIEDvKMPrzmBOQcKQ+rroye6NgRRxqR4U8EAkz0CL6uSGOm6KQCdWjvjRiSP1BPalCRS5iQYiEIvxuBMJEWgzSoHADcVMuN7IuqqTeyUPq22qFimFtxDyBBJEwNyt6TM88blFHao/6tWWhuuOM4SAK4EI4QmFHA+SEyWlp4EQoJ13cYGzMu7yszEIBOm2rVmHUNqwAIQabISNMRstmdhNWcFLsSm+0tjJH1MdRxO5Nx0WDMhCtgD6OKgZeljJqJKc9po8juskR9XN0Y1lZ3mWjLR9JCO1jRDMd0fpYC2VnvjBSEFg7wBENc0R9HFlb0xvF1+TBEpF68d+DHR6IOWVv2BECtxo46hOFUBd/APU57WIoEwJhIi2CdpyZX0m93BZicktMj1AS9dClteUFAUNUIEygRZCtik5zSxI9MubTBH1GOiHsiLJ3OCoSZkILa9PxiN0EbvhsAo8tdAf9Seepd36lGWHmtNANTv5Jd0z4QYyeo/UEJqxKRpg5LZx6btLPsOaEmdMyxYdlc8LMaJnikDlhclqmPiQnTEpLUIZEwkRagjYkEibQErwhkTAKCLQEbUgkzJQWc/0PstHHcfEdQ+UAAAAASUVORK5CYII=);background-size:26px 26px}.leaflet-touch .leaflet-control-layers-toggle{width:44px;height:44px}.leaflet-control-layers .leaflet-control-layers-list,.leaflet-control-layers-expanded .leaflet-control-layers-toggle{display:none}.leaflet-control-layers-expanded .leaflet-control-layers-list{display:block;position:relative}.leaflet-control-layers-expanded{padding:6px 10px 6px 6px;color:#333;background:#fff}.leaflet-control-layers-scrollbar{overflow-y:scroll;overflow-x:hidden;padding-right:5px}.leaflet-control-layers-selector{margin-top:2px;position:relative;top:1px}.leaflet-control-layers label{display:block;font-size:13px;font-size:1.08333em}.leaflet-control-layers-separator{height:0;border-top:1px solid #ddd;margin:5px -10px 5px -6px}.leaflet-default-icon-path{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=)}.leaflet-container .leaflet-control-attribution{background:#fff;background:#fffc;margin:0}.leaflet-control-attribution,.leaflet-control-scale-line{padding:0 5px;color:#333;line-height:1.4}.leaflet-control-attribution a{text-decoration:none}.leaflet-control-attribution a:hover,.leaflet-control-attribution a:focus{text-decoration:underline}.leaflet-attribution-flag{display:inline!important;vertical-align:baseline!important;width:1em;height:.6669em}.leaflet-left .leaflet-control-scale{margin-left:5px}.leaflet-bottom .leaflet-control-scale{margin-bottom:5px}.leaflet-control-scale-line{border:2px solid #777;border-top:none;line-height:1.1;padding:2px 5px 1px;white-space:nowrap;-moz-box-sizing:border-box;box-sizing:border-box;background:#fffc;text-shadow:1px 1px #fff}.leaflet-control-scale-line:not(:first-child){border-top:2px solid #777;border-bottom:none;margin-top:-2px}.leaflet-control-scale-line:not(:first-child):not(:last-child){border-bottom:2px solid #777}.leaflet-touch .leaflet-control-attribution,.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{box-shadow:none}.leaflet-touch .leaflet-control-layers,.leaflet-touch .leaflet-bar{border:2px solid rgba(0,0,0,.2);background-clip:padding-box}.leaflet-popup{position:absolute;text-align:center;margin-bottom:20px}.leaflet-popup-content-wrapper{padding:1px;text-align:left;border-radius:12px}.leaflet-popup-content{margin:13px 24px 13px 20px;line-height:1.3;font-size:13px;font-size:1.08333em;min-height:1px}.leaflet-popup-content p{margin:1.3em 0}.leaflet-popup-tip-container{width:40px;height:20px;position:absolute;left:50%;margin-top:-1px;margin-left:-20px;overflow:hidden;pointer-events:none}.leaflet-popup-tip{width:17px;height:17px;padding:1px;margin:-10px auto 0;pointer-events:auto;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.leaflet-popup-content-wrapper,.leaflet-popup-tip{background:#fff;color:#333;box-shadow:0 3px 14px #0006}.leaflet-container a.leaflet-popup-close-button{position:absolute;top:0;right:0;border:none;text-align:center;width:24px;height:24px;font:16px/24px Tahoma,Verdana,sans-serif;color:#757575;text-decoration:none;background:transparent}.leaflet-container a.leaflet-popup-close-button:hover,.leaflet-container a.leaflet-popup-close-button:focus{color:#585858}.leaflet-popup-scrolled{overflow:auto}.leaflet-oldie .leaflet-popup-content-wrapper{-ms-zoom:1}.leaflet-oldie .leaflet-popup-tip{width:24px;margin:0 auto;-ms-filter:\"progid:DXImageTransform.Microsoft.Matrix(M11=0.70710678, M12=0.70710678, M21=-0.70710678, M22=0.70710678)\";filter:progid:DXImageTransform.Microsoft.Matrix(M11=.70710678,M12=.70710678,M21=-.70710678,M22=.70710678)}.leaflet-oldie .leaflet-control-zoom,.leaflet-oldie .leaflet-control-layers,.leaflet-oldie .leaflet-popup-content-wrapper,.leaflet-oldie .leaflet-popup-tip{border:1px solid #999}.leaflet-div-icon{background:#fff;border:1px solid #666}.leaflet-tooltip{position:absolute;padding:6px;background-color:#fff;border:1px solid #fff;border-radius:3px;color:#222;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;pointer-events:none;box-shadow:0 1px 3px #0006}.leaflet-tooltip.leaflet-interactive{cursor:pointer;pointer-events:auto}.leaflet-tooltip-top:before,.leaflet-tooltip-bottom:before,.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{position:absolute;pointer-events:none;border:6px solid transparent;background:transparent;content:\"\"}.leaflet-tooltip-bottom{margin-top:6px}.leaflet-tooltip-top{margin-top:-6px}.leaflet-tooltip-bottom:before,.leaflet-tooltip-top:before{left:50%;margin-left:-6px}.leaflet-tooltip-top:before{bottom:0;margin-bottom:-12px;border-top-color:#fff}.leaflet-tooltip-bottom:before{top:0;margin-top:-12px;margin-left:-6px;border-bottom-color:#fff}.leaflet-tooltip-left{margin-left:-6px}.leaflet-tooltip-right{margin-left:6px}.leaflet-tooltip-left:before,.leaflet-tooltip-right:before{top:50%;margin-top:-6px}.leaflet-tooltip-left:before{right:0;margin-right:-12px;border-left-color:#fff}.leaflet-tooltip-right:before{left:0;margin-left:-12px;border-right-color:#fff}@media print{.leaflet-control{-webkit-print-color-adjust:exact;print-color-adjust:exact}}.pin{&[data-v-dc572ab0]{width:45px;height:45px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #00000008}&.round[data-v-dc572ab0]{border-radius:50%}&.solid{.inner[data-v-dc572ab0]{background:transparent}}&.contain{&[data-v-dc572ab0]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.inner[data-v-dc572ab0]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}}.datapoint[data-v-dc572ab0]{transform:rotate(45deg);position:absolute;top:50px;left:0;margin:0}.observation-slot[data-v-dc572ab0]{transform:rotate(45deg);position:absolute;top:0;left:0}&.marker{&[data-v-dc572ab0]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}}.inner[data-v-dc572ab0]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}}.image-marker[data-v-dc572ab0]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.text-container[data-v-3f80a98a]{display:flex;flex-direction:column;width:100%;height:100%;gap:1rem;align-items:stretch}.pin{&[data-v-3f80a98a]{width:45px;height:45px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #0000005c}&.round[data-v-3f80a98a]{border-radius:50%}&.contain{&[data-v-3f80a98a]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.inner[data-v-3f80a98a]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}}.datapoint[data-v-3f80a98a]{transform:rotate(45deg);position:absolute;top:50px;left:0;margin:0}&.marker{&[data-v-3f80a98a]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}}.inner[data-v-3f80a98a]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}}.component[data-v-3f80a98a]{overflow:hidden}.cmap_container[data-v-3f80a98a]{width:100%;height:100%;position:relative}.image-marker[data-v-3f80a98a]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.row{align-items:flex-start;display:flex;flex:1 1 auto;flex-wrap:wrap;min-width:0;flex-direction:row}.table-inline__cell{padding:0}#proptableConditions{.va-data-table__table-td{padding:0;margin:7px 0}}.pmap_container[data-v-c72cb17a]{width:100%;min-height:250px}.pin{&[data-v-27027675]{width:45px;height:45px;border-radius:50% 50% 50% 0;background:var(--v11ef15f9);transform:rotate(-45deg);left:50%;top:50%;margin:-15px 71px 0 -15px;box-shadow:-4px -6px 8px #00000008}&.round[data-v-27027675]{border-radius:50%}&.solid{.inner[data-v-27027675]{background:transparent}}&.contain{&[data-v-27027675]{width:auto;height:auto;border-radius:25%;display:inline-block;transform:rotate(0);padding:4px;margin:0}.inner[data-v-27027675]{width:auto;height:auto;margin:0;position:relative;transform:rotate(0);border-radius:17%;display:inline-block;font-size:13px;padding:3px}}&.marker{&[data-v-27027675]:before{content:\" \";width:20px;height:20px;display:block;position:absolute;background:var(--v11ef15f9);transform:rotate(-45deg);border-radius:50% 50% 50% 0;top:14px;left:5px;z-index:-24}}.inner[data-v-27027675]{padding:5px 0 0;width:37px;height:37px;margin:3px 0 0 4px;background:#fff;position:absolute;transform:rotate(45deg);border-radius:50%}}.flex[data-v-27027675]{display:flex}.image-marker[data-v-27027675]{position:relative;display:flex;align-items:center;justify-content:center;margin-left:-50%;margin-top:-50%}.placeholder[data-v-27027675]{background:#ccc;width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:10px;border:1px dashed #999}.pmap_container[data-v-77cbf15c]{width:100%;height:250px}.settings-container[data-v-65a760a2]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-65a760a2]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-65a760a2]{font-family:Material Symbols Outlined sans-serif;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-65a760a2]:hover{transform:scale(1.1)}.active-icon[data-v-65a760a2]{border:2px solid rgb(0,121,0)}.slider[data-v-65a760a2]{padding:0 10px}.auto-update-settings[data-v-bf0c06f4]{padding:1rem;display:flex;flex-direction:column;gap:1.5rem}.auto-update-settings h3[data-v-bf0c06f4]{margin:0;color:var(--va-text-primary);font-size:1.1rem;font-weight:600}.refresh-setting[data-v-bf0c06f4]{display:flex;flex-direction:column;gap:1rem}.refresh-setting label[data-v-bf0c06f4]{font-weight:500;color:var(--va-text-primary);font-size:.9rem}.refresh-slider[data-v-bf0c06f4]{margin:.5rem 0}.slider-labels[data-v-bf0c06f4]{display:flex;justify-content:space-between;font-size:.8rem;color:var(--va-text-secondary);margin-top:.5rem}.refresh-info[data-v-bf0c06f4]{background:var(--va-background-secondary);border:1px solid var(--va-background-border);border-radius:6px;padding:1rem;display:flex;flex-direction:column;gap:.5rem}.info-item[data-v-bf0c06f4]{display:flex;justify-content:space-between;align-items:center}.info-item .label[data-v-bf0c06f4]{font-weight:500;color:var(--va-text-secondary);font-size:.9rem}.info-item .value[data-v-bf0c06f4]{font-weight:600;color:var(--va-text-primary);font-size:.9rem}.full[data-v-17c997bf]{position:relative}.tree_detail[data-v-17c997bf]{display:flex;flex-direction:row;align-items:flex-start;align-content:flex-start;gap:5px}.tree[data-v-17c997bf]{width:300px;max-height:500px;overflow-y:auto}.detail[data-v-17c997bf]{border-left:1px solid #ccc}.menuitem{&[data-v-17c997bf]{display:grid;grid-template-columns:25px 35px 1fr min-content;align-items:center;padding-top:2px;padding-bottom:2px;padding-left:5px;cursor:pointer}.checked[data-v-17c997bf]{margin-top:-5px}&.active[data-v-17c997bf]{background-color:#e5e7eb}.options[data-v-17c997bf]{display:flex;flex-direction:row}}.childs[data-v-17c997bf]{grid-column:span 4;padding-left:15px}.content{&[data-v-17c997bf]{width:846px;height:500px;padding:0 0 0 15px}.scroller[data-v-17c997bf]{min-height:100%}&.center[data-v-17c997bf]{display:flex;flex-direction:column;align-content:center;justify-content:center;align-items:center;color:#8f8f8f}}.underline[data-v-17c997bf]{cursor:pointer}.blue[data-v-17c997bf]{color:#133370}.rowlayout[data-v-17c997bf]{display:grid;flex-direction:row;flex-wrap:nowrap;width:100%;grid-template-columns:66% 1fr;gap:15px}.settings-container[data-v-5f2599d9]{display:flex;flex-direction:column;gap:1rem;padding:15px}.hint-text[data-v-5f2599d9]{font-size:12px;color:var(--va-text-secondary);margin:-8px 0 0;padding-left:4px}.list-group-item{&[data-v-5f2599d9]{display:flex;flex-direction:column;align-items:flex-start;cursor:move;padding:var(--va-tree-node-padding);list-style:none}.row[data-v-5f2599d9]{display:flex;flex-direction:row;flex-wrap:nowrap;gap:6px;align-items:center}&[data-v-5f2599d9]:hover{background-color:#d6dde3;border-radius:var(--va-tree-node-border-radius)}}.empty[data-v-5f2599d9]{display:block;width:100%;vertical-align:middle;text-align:center;font-variant:small-caps;font-style:italic;color:#5d5d5d}.bottomframe[data-v-5f2599d9]{border-bottom:1px solid var(--va-background-border)}#header-va-4[data-v-5f2599d9]{padding:6px 12px}.options[data-v-5f2599d9]{padding-top:6px;padding-left:12px;border-top:1px dotted #00000047}.row.nhidden[data-v-5f2599d9]{display:none}.dragIcon[data-v-5f2599d9]{cursor:n-resize}.button{margin-top:35px}.flip-list-move{transition:transform .5s}.no-move{transition:transform 0s}.ghost{opacity:.5;background:#c8ebfb}.list-group{min-height:20px}.list-group-item{cursor:move}.list-group-item i{cursor:pointer}.nhidden,.row.nhidden{display:none}.va-tree-node-root{&:hover{cursor:pointer;.nhidden{display:inline}.nsee{display:none}}}.list-group-item{&:hover{cursor:pointer;.nhidden{display:flex}}}.sliderPopOver{padding:2px 7px;.va-slider__handler{left:51%;background-color:#fff!important;border-color:#99a9c8!important;border-radius:6px!important;border-width:1px!important;width:11px;height:20px;.va-slider__handler__dot--focus{margin-top:4px}}}.mt4{margin-top:4px}.datapoint-wrapper[data-v-2eb55b7f]{position:relative;display:inline-block}.tlc[data-v-2eb55b7f]{position:absolute;border:4px solid #f8f6f6;background:#6a6a6a;padding:3px;border-radius:12px;text-wrap:nowrap;top:100%;left:50%;transform:translate(-50%) rotate(-90deg);margin-top:5px;box-shadow:-3px 5px 6px #1919192b;font-size:12px;white-space:nowrap}.settings-container[data-v-ca2b9f21]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-ca2b9f21]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-ca2b9f21]{font-family:Material Symbols Outlined sans-serif;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-ca2b9f21]:hover{transform:scale(1.1)}.active-icon[data-v-ca2b9f21]{border:2px solid rgb(0,121,0)}.slider[data-v-ca2b9f21]{padding:0 10px}.datapoint-wrapper[data-v-a78b518d]{position:relative;display:inline-block}.datapoint[data-v-a78b518d]{display:inline-block;text-wrap:nowrap;position:absolute;border:1px solid #ccc;background:#fff;padding:4px;top:100%;left:50%;transform:translate(-50%);margin-top:5px;border-radius:21px;white-space:nowrap}.settings-container[data-v-39ec496f]{display:flex;flex-direction:column;align-items:stretch;gap:1rem}.icons-container[data-v-39ec496f]{display:flex;flex-wrap:wrap;gap:10px;max-height:220px;overflow-y:auto;overflow-x:hidden;width:100%;cursor:pointer;padding:10px}.material-symbols-outlined[data-v-39ec496f]{font-family:Material Symbols Outlined sans-serif;font-weight:400;font-style:inherit;font-size:40px;display:inline-block;line-height:1;text-transform:none;letter-spacing:normal;word-wrap:normal;white-space:nowrap;direction:ltr;border:2px solid transparent;border-radius:5px;transition:border-color .5s ease,transform .5s ease}.material-symbols-outlined[data-v-39ec496f]:hover{transform:scale(1.1)}.active-icon[data-v-39ec496f]{border:2px solid rgb(0,121,0)}.slider[data-v-39ec496f]{padding:0 10px}\n";})();
import { EVENT_ACTIONS_REGISTRY as l1, EVENT_REGISTRY_ID as u1, EVENT_ACTIONS_REGISTRY_ID as c1 } from "org.eclipse.daanse.board.app.lib.api.events";
import { activate as d1, deactivate as f1, component as h1, inject as wh, initTsmRuntime as p1 } from "@eclipse-daanse/tsm";
import { defineComponent as $e, h as Vr, ref as le, reactive as oa, provide as Yi, computed as un, onMounted as Pt, markRaw as Xt, nextTick as Ot, onBeforeUnmount as il, inject as dt, watch as Hn, onUnmounted as rl, render as m1, createElementBlock as te, openBlock as N, Fragment as xe, renderList as At, createBlock as Be, createCommentVNode as Le, unref as be, renderSlot as Rs, normalizeClass as mr, normalizeStyle as $a, createElementVNode as se, toDisplayString as rt, withCtx as _e, createVNode as re, createTextVNode as pt, resolveDynamicComponent as fd, mergeModels as bd, toRefs as ol, useModel as pi, toRaw as Bs, resolveComponent as Xe, TransitionGroup as g1, useCssVars as v1, mergeProps as Su, isRef as up, shallowRef as bh, watchEffect as _1, withDirectives as Sh, vModelText as Th, getCurrentInstance as y1, withModifiers as xh } from "vue";
import { FILTER as Ga, UPDATE_MQTT_SUBSCRIPTIONS as Eh, MQTT_UNSUBSCRIBE_ALL as Ch } from "org.eclipse.daanse.board.app.lib.datasource.ogcsta";
import { useDatasourceRepository as w1 } from "org.eclipse.daanse.board.app.ui.vue.composables";
import { identifier as Nr } from "org.eclipse.daanse.board.app.lib.api.datasource";
import { IconWidget as dp, IconWidgetSettings as b1 } from "org.eclipse.daanse.board.app.ui.vue.widget.icon";
import { Payload as al, WidgetAction as la, WidgetActionInterface as S1 } from "org.eclipse.daanse.board.app.lib.events";
import { Documentation as Pe, Attribute as ft, Reference as sl, ModelClass as ua } from "org.eclipse.daanse.board.app.lib.annotations";
import { loggerFactory as T1 } from "org.eclipse.daanse.board.app.lib.logger";
import { useRoute as x1 } from "vue-router";
import { WIDGET_SERVICE_ID as E1 } from "org.eclipse.daanse.board.app.lib.api.widget";
const { identifiers: cp } = __tsm__.require("org.eclipse.daanse.board.app.lib.core");
function C1(o, a) {
  for (var r = 0; r < a.length; r++) {
    const l = a[r];
    if (typeof l != "string" && !Array.isArray(l)) {
      for (const d in l)
        if (d !== "default" && !(d in o)) {
          const h = Object.getOwnPropertyDescriptor(l, d);
          h && Object.defineProperty(o, d, h.get ? h : {
            enumerable: !0,
            get: () => l[d]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(o, Symbol.toStringTag, { value: "Module" }));
}
const A1 = "data:image/svg+xml,%3csvg%20width='120'%20height='120'%20viewBox='0%200%20120%20120'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M105%207.5H15C10.8579%207.5%207.5%2010.8579%207.5%2015V105C7.5%20109.142%2010.8579%20112.5%2015%20112.5H105C109.142%20112.5%20112.5%20109.142%20112.5%20105V15C112.5%2010.8579%20109.142%207.5%20105%207.5ZM15%200C6.71573%200%200%206.71573%200%2015V105C0%20113.284%206.71573%20120%2015%20120H105C113.284%20120%20120%20113.284%20120%20105V15C120%206.71573%20113.284%200%20105%200H15Z'%20fill='%23606060'/%3e%3cpath%20d='M60%2020C45.088%2020%2033%2031.588%2033%2045.88C33%2065.16%2060%20100%2060%20100C60%20100%2087%2065.16%2087%2045.88C87%2031.588%2074.912%2020%2060%2020ZM60%2056.2C54.036%2056.2%2049.2%2051.484%2049.2%2045.68C49.2%2039.876%2054.036%2035.16%2060%2035.16C65.964%2035.16%2070.8%2039.876%2070.8%2045.68C70.8%2051.484%2065.964%2056.2%2060%2056.2Z'%20fill='%23606060'/%3e%3c/svg%3e", Ah = (o, a) => {
  for (const r of Object.keys(a))
    o.on(r, a[r]);
}, fp = (o) => {
  for (const a of Object.keys(o)) {
    const r = o[a];
    r && ho(r.cancel) && r.cancel();
  }
}, P1 = (o) => !o || typeof o.charAt != "function" ? o : o.charAt(0).toUpperCase() + o.slice(1), ho = (o) => typeof o == "function", Ht = (o, a, r) => {
  for (const l in r) {
    const d = "set" + P1(l);
    o[d] ? Hn(
      () => r[l],
      (h, m) => {
        o[d](h, m);
      }
    ) : a[d] && Hn(
      () => r[l],
      (h) => {
        a[d](h);
      }
    );
  }
}, Nt = (o, a, r = {}) => {
  const l = { ...r };
  for (const d in o) {
    const h = a[d], m = o[d];
    h && (h && h.custom === !0 || m !== void 0 && (l[d] = m));
  }
  return l;
}, bn = (o) => {
  const a = {}, r = {};
  for (const l in o)
    if (l.startsWith("on") && !l.startsWith("onUpdate") && l !== "onReady") {
      const d = l.slice(2).toLocaleLowerCase();
      a[d] = o[l];
    } else
      r[l] = o[l];
  return { listeners: a, attrs: r };
}, L1 = async (o) => {
  const a = await Promise.all([
    import("./marker-icon-2x-DVSLMKfE.js"),
    import("./marker-icon-DbhCZIpd.js"),
    import("./marker-shadow-ZZvxUwqf.js")
  ]);
  delete o.Default.prototype._getIconUrl, o.Default.mergeOptions({
    iconRetinaUrl: a[0].default,
    iconUrl: a[1].default,
    shadowUrl: a[2].default
  });
}, fu = (o) => {
  const a = le(
    (...l) => console.warn(`Method ${o} has been invoked without being replaced`)
  ), r = (...l) => a.value(...l);
  return r.wrapped = a, Yi(o, r), r;
}, hu = (o, a) => o.wrapped.value = a, Dt = typeof self == "object" && self.self === self && self || typeof global == "object" && global.global === global && global || globalThis, St = (o) => {
  const a = dt(o);
  if (a === void 0)
    throw new Error(
      `Attempt to inject ${o.description} before it was provided.`
    );
  return a;
}, qt = Symbol(
  "useGlobalLeaflet"
), In = Symbol("addLayer"), zu = Symbol("removeLayer"), ll = Symbol(
  "registerControl"
), hp = Symbol(
  "registerLayerControl"
), pp = Symbol(
  "canSetParentHtml"
), mp = Symbol("setParentHtml"), gp = Symbol("setIcon"), vp = Symbol("bindPopup"), _p = Symbol("bindTooltip"), yp = Symbol("unbindPopup"), wp = Symbol("unbindTooltip"), ul = {
  options: {
    type: Object,
    default: () => ({}),
    custom: !0
  }
}, cl = (o) => ({ options: o.options, methods: {} }), Xa = {
  ...ul,
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
}, dl = (o, a, r) => {
  const l = St(In), d = St(zu), { options: h, methods: m } = cl(o), g = Nt(
    o,
    Xa,
    h
  ), v = () => l({ leafletObject: a.value }), T = () => d({ leafletObject: a.value }), x = {
    ...m,
    setAttribution(b) {
      T(), a.value.options.attribution = b, o.visible && v();
    },
    setName() {
      T(), o.visible && v();
    },
    setLayerType() {
      T(), o.visible && v();
    },
    setVisible(b) {
      a.value && (b ? v() : T());
    },
    bindPopup(b) {
      if (!a.value || !ho(a.value.bindPopup)) {
        console.warn(
          "Attempt to bind popup before bindPopup method available on layer."
        );
        return;
      }
      a.value.bindPopup(b);
    },
    bindTooltip(b) {
      if (!a.value || !ho(a.value.bindTooltip)) {
        console.warn(
          "Attempt to bind tooltip before bindTooltip method available on layer."
        );
        return;
      }
      a.value.bindTooltip(b);
    },
    unbindTooltip() {
      a.value && (ho(a.value.closeTooltip) && a.value.closeTooltip(), ho(a.value.unbindTooltip) && a.value.unbindTooltip());
    },
    unbindPopup() {
      a.value && (ho(a.value.closePopup) && a.value.closePopup(), ho(a.value.unbindPopup) && a.value.unbindPopup());
    },
    updateVisibleProp(b) {
      r.emit("update:visible", b);
    }
  };
  return Yi(vp, x.bindPopup), Yi(_p, x.bindTooltip), Yi(yp, x.unbindPopup), Yi(wp, x.unbindTooltip), rl(() => {
    x.unbindPopup(), x.unbindTooltip(), T();
  }), { options: g, methods: x };
}, yr = (o, a) => {
  if (o && a.default)
    return Vr("div", { style: { display: "none" } }, a.default());
}, bp = {
  ...Xa,
  interactive: {
    type: Boolean,
    default: void 0
  },
  bubblingMouseEvents: {
    type: Boolean,
    default: void 0
  }
}, O1 = (o, a, r) => {
  const { options: l, methods: d } = dl(
    o,
    a,
    r
  );
  return { options: Nt(
    o,
    bp,
    l
  ), methods: d };
}, Sd = {
  ...bp,
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
}, Sp = (o, a, r) => {
  const { options: l, methods: d } = O1(o, a, r), h = Nt(
    o,
    Sd,
    l
  ), m = St(zu), g = {
    ...d,
    setStroke(v) {
      a.value.setStyle({ stroke: v });
    },
    setColor(v) {
      a.value.setStyle({ color: v });
    },
    setWeight(v) {
      a.value.setStyle({ weight: v });
    },
    setOpacity(v) {
      a.value.setStyle({ opacity: v });
    },
    setLineCap(v) {
      a.value.setStyle({ lineCap: v });
    },
    setLineJoin(v) {
      a.value.setStyle({ lineJoin: v });
    },
    setDashArray(v) {
      a.value.setStyle({ dashArray: v });
    },
    setDashOffset(v) {
      a.value.setStyle({ dashOffset: v });
    },
    setFill(v) {
      a.value.setStyle({ fill: v });
    },
    setFillColor(v) {
      a.value.setStyle({ fillColor: v });
    },
    setFillOpacity(v) {
      a.value.setStyle({ fillOpacity: v });
    },
    setFillRule(v) {
      a.value.setStyle({ fillRule: v });
    },
    setClassName(v) {
      a.value.setStyle({ className: v });
    }
  };
  return il(() => {
    m({ leafletObject: a.value });
  }), { options: h, methods: g };
}, Td = {
  ...Sd,
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
}, Tp = (o, a, r) => {
  const { options: l, methods: d } = Sp(
    o,
    a,
    r
  ), h = Nt(
    o,
    Td,
    l
  ), m = {
    ...d,
    setRadius(g) {
      a.value.setRadius(g);
    },
    setLatLng(g) {
      a.value.setLatLng(g);
    }
  };
  return { options: h, methods: m };
}, xp = {
  ...Td,
  /**
   * Radius of the circle in meters.
   */
  radius: {
    type: Number
  }
}, M1 = (o, a, r) => {
  const { options: l, methods: d } = Tp(o, a, r), h = Nt(
    o,
    xp,
    l
  ), m = {
    ...d
  };
  return { options: h, methods: m };
};
$e({
  name: "LCircle",
  props: xp,
  setup(o, a) {
    const r = le(), l = le(!1), d = dt(qt), h = St(In), { options: m, methods: g } = M1(o, r, a);
    return Pt(async () => {
      const { circle: v } = d ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(v(o.latLng, m));
      const { listeners: T } = bn(a.attrs);
      r.value.on(T), Ht(g, r.value, o), h({
        ...o,
        ...g,
        leafletObject: r.value
      }), l.value = !0, Ot(() => a.emit("ready", r.value));
    }), { ready: l, leafletObject: r };
  },
  render() {
    return yr(this.ready, this.$slots);
  }
});
const I1 = $e({
  name: "LCircleMarker",
  props: Td,
  setup(o, a) {
    const r = le(), l = le(!1), d = dt(qt), h = St(In), { options: m, methods: g } = Tp(
      o,
      r,
      a
    );
    return Pt(async () => {
      const { circleMarker: v } = d ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(
        v(o.latLng, m)
      );
      const { listeners: T } = bn(a.attrs);
      r.value.on(T), Ht(g, r.value, o), h({
        ...o,
        ...g,
        leafletObject: r.value
      }), l.value = !0, Ot(() => a.emit("ready", r.value));
    }), { ready: l, leafletObject: r };
  },
  render() {
    return yr(this.ready, this.$slots);
  }
}), Ka = {
  ...ul,
  position: {
    type: String
  }
}, fl = (o, a) => {
  const { options: r, methods: l } = cl(o), d = Nt(
    o,
    Ka,
    r
  ), h = {
    ...l,
    setPosition(m) {
      a.value && a.value.setPosition(m);
    }
  };
  return rl(() => {
    a.value && a.value.remove();
  }), { options: d, methods: h };
}, k1 = (o) => o.default ? Vr("div", { ref: "root" }, o.default()) : null;
$e({
  name: "LControl",
  props: {
    ...Ka,
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
  setup(o, a) {
    const r = le(), l = le(), d = dt(qt), h = St(ll), { options: m, methods: g } = fl(o, r);
    return Pt(async () => {
      const { Control: v, DomEvent: T } = d ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js"), x = v.extend({
        onAdd() {
          return l.value;
        }
      });
      r.value = Xt(new x(m)), Ht(g, r.value, o), h({ leafletObject: r.value }), o.disableClickPropagation && l.value && T.disableClickPropagation(l.value), o.disableScrollPropagation && l.value && T.disableScrollPropagation(l.value), Ot(() => a.emit("ready", r.value));
    }), { root: l, leafletObject: r };
  },
  render() {
    return k1(this.$slots);
  }
});
const Ep = {
  ...Ka,
  prefix: {
    type: String
  }
}, D1 = (o, a) => {
  const { options: r, methods: l } = fl(
    o,
    a
  ), d = Nt(
    o,
    Ep,
    r
  ), h = {
    ...l,
    setPrefix(m) {
      a.value.setPrefix(m);
    }
  };
  return { options: d, methods: h };
};
$e({
  name: "LControlAttribution",
  props: Ep,
  setup(o, a) {
    const r = le(), l = dt(qt), d = St(ll), { options: h, methods: m } = D1(o, r);
    return Pt(async () => {
      const { control: g } = l ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(
        g.attribution(h)
      ), Ht(m, r.value, o), d({ leafletObject: r.value }), Ot(() => a.emit("ready", r.value));
    }), { leafletObject: r };
  },
  render() {
    return null;
  }
});
const Cp = {
  ...Ka,
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
}, F1 = (o, a) => {
  const { options: r } = fl(o, a);
  return { options: Nt(
    o,
    Cp,
    r
  ), methods: {
    addLayer(l) {
      l.layerType === "base" ? a.value.addBaseLayer(l.leafletObject, l.name) : l.layerType === "overlay" && a.value.addOverlay(l.leafletObject, l.name);
    },
    removeLayer(l) {
      a.value.removeLayer(l.leafletObject);
    }
  } };
};
$e({
  name: "LControlLayers",
  props: Cp,
  setup(o, a) {
    const r = le(), l = dt(qt), d = St(hp), { options: h, methods: m } = F1(o, r);
    return Pt(async () => {
      const { control: g } = l ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(
        g.layers(void 0, void 0, h)
      ), Ht(m, r.value, o), d({
        ...o,
        ...m,
        leafletObject: r.value
      }), Ot(() => a.emit("ready", r.value));
    }), { leafletObject: r };
  },
  render() {
    return null;
  }
});
const Ap = {
  ...Ka,
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
}, B1 = (o, a) => {
  const { options: r, methods: l } = fl(
    o,
    a
  );
  return { options: Nt(
    o,
    Ap,
    r
  ), methods: l };
};
$e({
  name: "LControlScale",
  props: Ap,
  setup(o, a) {
    const r = le(), l = dt(qt), d = St(ll), { options: h, methods: m } = B1(o, r);
    return Pt(async () => {
      const { control: g } = l ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(g.scale(h)), Ht(m, r.value, o), d({ leafletObject: r.value }), Ot(() => a.emit("ready", r.value));
    }), { leafletObject: r };
  },
  render() {
    return null;
  }
});
const Pp = {
  ...Ka,
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
}, R1 = (o, a) => {
  const { options: r, methods: l } = fl(
    o,
    a
  );
  return { options: Nt(
    o,
    Pp,
    r
  ), methods: l };
};
$e({
  name: "LControlZoom",
  props: Pp,
  setup(o, a) {
    const r = le(), l = dt(qt), d = St(ll), { options: h, methods: m } = R1(o, r);
    return Pt(async () => {
      const { control: g } = l ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(g.zoom(h)), Ht(m, r.value, o), d({ leafletObject: r.value }), Ot(() => a.emit("ready", r.value));
    }), { leafletObject: r };
  },
  render() {
    return null;
  }
});
const Nu = {
  ...Xa
}, xd = (o, a, r) => {
  const { options: l, methods: d } = dl(
    o,
    a,
    r
  ), h = Nt(
    o,
    Nu,
    l
  ), m = {
    ...d,
    addLayer(g) {
      a.value.addLayer(g.leafletObject);
    },
    removeLayer(g) {
      a.value.removeLayer(g.leafletObject);
    }
  };
  return Yi(In, m.addLayer), Yi(zu, m.removeLayer), { options: h, methods: m };
}, Lp = {
  ...Nu
}, z1 = (o, a, r) => {
  const { options: l, methods: d } = xd(
    o,
    a,
    r
  ), h = Nt(
    o,
    Lp,
    l
  ), m = {
    ...d
  };
  return { options: h, methods: m };
};
$e({
  props: Lp,
  setup(o, a) {
    const r = le(), l = le(!1), d = dt(qt), h = St(In), { methods: m, options: g } = z1(
      o,
      r,
      a
    );
    return Pt(async () => {
      const { featureGroup: v } = d ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(
        v(void 0, g)
      );
      const { listeners: T } = bn(a.attrs);
      r.value.on(T), Ht(m, r.value, o), h({
        ...o,
        ...m,
        leafletObject: r.value
      }), l.value = !0, Ot(() => a.emit("ready", r.value));
    }), { ready: l, leafletObject: r };
  },
  render() {
    return yr(this.ready, this.$slots);
  }
});
const Op = {
  ...Nu,
  geojson: {
    type: [Object, Array],
    custom: !0
  },
  optionsStyle: {
    type: Function,
    custom: !0
  }
}, N1 = (o, a, r) => {
  const { options: l, methods: d } = xd(
    o,
    a,
    r
  ), h = Nt(
    o,
    Op,
    l
  );
  Object.prototype.hasOwnProperty.call(o, "optionsStyle") && (h.style = o.optionsStyle);
  const m = {
    ...d,
    setGeojson(g) {
      a.value.clearLayers(), a.value.addData(g);
    },
    setOptionsStyle(g) {
      a.value.setStyle(g);
    },
    getGeoJSONData() {
      return a.value.toGeoJSON();
    },
    getBounds() {
      return a.value.getBounds();
    }
  };
  return { options: h, methods: m };
}, aa = $e({
  props: Op,
  setup(o, a) {
    const r = le(), l = le(!1), d = dt(qt), h = St(In), { methods: m, options: g } = N1(o, r, a);
    return Pt(async () => {
      const { geoJSON: v } = d ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(v(o.geojson, g));
      const { listeners: T } = bn(a.attrs);
      r.value.on(T), Ht(m, r.value, o), h({
        ...o,
        ...m,
        leafletObject: r.value
      }), l.value = !0, Ot(() => a.emit("ready", r.value));
    }), { ready: l, leafletObject: r };
  },
  render() {
    return yr(this.ready, this.$slots);
  }
}), Ed = {
  ...Xa,
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
}, Mp = (o, a, r) => {
  const { options: l, methods: d } = dl(
    o,
    a,
    r
  ), h = Nt(
    o,
    Ed,
    l
  ), m = {
    ...d,
    setTileComponent() {
      var g;
      (g = a.value) == null || g.redraw();
    }
  };
  return rl(() => {
    a.value.off();
  }), { options: h, methods: m };
}, G1 = (o, a, r, l) => o.extend({
  initialize(d) {
    this.tileComponents = {}, this.on("tileunload", this._unloadTile), r.setOptions(this, d);
  },
  createTile(d) {
    const h = this._tileCoordsToKey(d);
    this.tileComponents[h] = a.create("div");
    const m = Vr({ setup: l, props: ["coords"] }, { coords: d });
    return m1(m, this.tileComponents[h]), this.tileComponents[h];
  },
  _unloadTile(d) {
    const h = this._tileCoordsToKey(d.coords);
    this.tileComponents[h] && (this.tileComponents[h].innerHTML = "", this.tileComponents[h] = void 0);
  }
});
$e({
  props: {
    ...Ed,
    childRender: {
      type: Function,
      required: !0
    }
  },
  setup(o, a) {
    const r = le(), l = le(null), d = le(!1), h = dt(qt), m = St(In), { options: g, methods: v } = Mp(o, r, a);
    return Pt(async () => {
      const { GridLayer: T, DomUtil: x, Util: b } = h ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js"), E = G1(
        T,
        x,
        b,
        o.childRender
      );
      r.value = Xt(new E(g));
      const { listeners: P } = bn(a.attrs);
      r.value.on(P), Ht(v, r.value, o), m({
        ...o,
        ...v,
        leafletObject: r.value
      }), d.value = !0, Ot(() => a.emit("ready", r.value));
    }), { root: l, ready: d, leafletObject: r };
  },
  render() {
    return this.ready ? Vr("div", { style: { display: "none" }, ref: "root" }) : null;
  }
});
const Ph = {
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
}, Ks = $e({
  name: "LIcon",
  props: {
    ...Ph,
    ...ul
  },
  setup(o, a) {
    const r = le(), l = dt(qt), d = St(pp), h = St(mp), m = St(gp);
    let g, v, T, x, b;
    const E = (Y, B, W) => {
      const q = Y && Y.innerHTML;
      if (!B) {
        W && b && d() && h(q);
        return;
      }
      const { listeners: M } = bn(a.attrs);
      b && v(b, M);
      const { options: $ } = cl(o), ue = Nt(
        o,
        Ph,
        $
      );
      q && (ue.html = q), b = ue.html ? T(ue) : x(ue), g(b, M), m(b);
    }, P = () => {
      Ot(() => E(r.value, !0, !1));
    }, z = () => {
      Ot(() => E(r.value, !1, !0));
    }, R = {
      setIconUrl: P,
      setIconRetinaUrl: P,
      setIconSize: P,
      setIconAnchor: P,
      setPopupAnchor: P,
      setTooltipAnchor: P,
      setShadowUrl: P,
      setShadowRetinaUrl: P,
      setShadowAnchor: P,
      setBgPos: P,
      setClassName: P,
      setHtml: P
    };
    return Pt(async () => {
      const {
        DomEvent: Y,
        divIcon: B,
        icon: W
      } = l ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      g = Y.on, v = Y.off, T = B, x = W, Ht(R, {}, o), new MutationObserver(z).observe(r.value, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      }), P();
    }), { root: r };
  },
  render() {
    const o = this.$slots.default ? this.$slots.default() : void 0;
    return Vr("div", { ref: "root" }, o);
  }
}), Ip = {
  ...Xa,
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
}, W1 = (o, a, r) => {
  const { options: l, methods: d } = dl(
    o,
    a,
    r
  ), h = Nt(
    o,
    Ip,
    l
  ), m = {
    ...d,
    /**
     * Sets the opacity of the overlay.
     * @param {number} opacity
     */
    setOpacity(g) {
      return a.value.setOpacity(g);
    },
    /**
     * Changes the URL of the image.
     * @param {string} url
     */
    setUrl(g) {
      return a.value.setUrl(g);
    },
    /**
     * Update the bounds that this ImageOverlay covers
     * @param {LatLngBounds | Array<Array<number>>} bounds
     */
    setBounds(g) {
      return a.value.setBounds(g);
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
    setZIndex(g) {
      return a.value.setZIndex(g);
    }
  };
  return { options: h, methods: m };
};
$e({
  name: "LImageOverlay",
  props: Ip,
  setup(o, a) {
    const r = le(), l = le(!1), d = dt(qt), h = St(In), { options: m, methods: g } = W1(
      o,
      r,
      a
    );
    return Pt(async () => {
      const { imageOverlay: v } = d ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(
        v(o.url, o.bounds, m)
      );
      const { listeners: T } = bn(a.attrs);
      r.value.on(T), Ht(g, r.value, o), h({
        ...o,
        ...g,
        leafletObject: r.value
      }), l.value = !0, Ot(() => a.emit("ready", r.value));
    }), { ready: l, leafletObject: r };
  },
  render() {
    return yr(this.ready, this.$slots);
  }
});
$e({
  props: Nu,
  setup(o, a) {
    const r = le(), l = le(!1), d = dt(qt), h = St(In), { methods: m } = xd(o, r, a);
    return Pt(async () => {
      const { layerGroup: g } = d ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(
        g(void 0, o.options)
      );
      const { listeners: v } = bn(a.attrs);
      r.value.on(v), Ht(m, r.value, o), h({
        ...o,
        ...m,
        leafletObject: r.value
      }), l.value = !0, Ot(() => a.emit("ready", r.value));
    }), { ready: l, leafletObject: r };
  },
  render() {
    return yr(this.ready, this.$slots);
  }
});
function kp(o, a, r) {
  var l, d, h;
  a === void 0 && (a = 50), r === void 0 && (r = {});
  var m = (l = r.isImmediate) != null && l, g = (d = r.callback) != null && d, v = r.maxWait, T = Date.now(), x = [];
  function b() {
    if (v !== void 0) {
      var P = Date.now() - T;
      if (P + a >= v)
        return v - P;
    }
    return a;
  }
  var E = function() {
    var P = [].slice.call(arguments), z = this;
    return new Promise(function(R, Y) {
      var B = m && h === void 0;
      if (h !== void 0 && clearTimeout(h), h = setTimeout(function() {
        if (h = void 0, T = Date.now(), !m) {
          var q = o.apply(z, P);
          g && g(q), x.forEach(function(M) {
            return (0, M.resolve)(q);
          }), x = [];
        }
      }, b()), B) {
        var W = o.apply(z, P);
        return g && g(W), R(W);
      }
      x.push({ resolve: R, reject: Y });
    });
  };
  return E.cancel = function(P) {
    h !== void 0 && clearTimeout(h), x.forEach(function(z) {
      return (0, z.reject)(P);
    }), x = [];
  }, E;
}
const Lh = {
  ...ul,
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
}, Cd = $e({
  inheritAttrs: !1,
  emits: ["ready", "update:zoom", "update:center", "update:bounds"],
  props: Lh,
  setup(o, a) {
    const r = le(), l = oa({
      ready: !1,
      layersToAdd: [],
      layersInControl: []
    }), { options: d } = cl(o), h = Nt(
      o,
      Lh,
      d
    ), { listeners: m, attrs: g } = bn(a.attrs), v = fu(In), T = fu(zu), x = fu(ll), b = fu(
      hp
    );
    Yi(qt, o.useGlobalLeaflet);
    const E = un(() => {
      const B = {};
      return o.noBlockingAnimations && (B.animate = !1), B;
    }), P = un(() => {
      const B = E.value;
      return o.padding && (B.padding = o.padding), o.paddingTopLeft && (B.paddingTopLeft = o.paddingTopLeft), o.paddingBottomRight && (B.paddingBottomRight = o.paddingBottomRight), B;
    }), z = {
      moveend: kp((B) => {
        l.leafletRef && (a.emit("update:zoom", l.leafletRef.getZoom()), a.emit("update:center", l.leafletRef.getCenter()), a.emit("update:bounds", l.leafletRef.getBounds()));
      }),
      overlayadd(B) {
        const W = l.layersInControl.find((q) => q.name === B.name);
        W && W.updateVisibleProp(!0);
      },
      overlayremove(B) {
        const W = l.layersInControl.find((q) => q.name === B.name);
        W && W.updateVisibleProp(!1);
      }
    };
    Pt(async () => {
      o.useGlobalLeaflet && (Dt.L = Dt.L || await Promise.resolve().then(() => s2));
      const { map: B, CRS: W, Icon: q, latLngBounds: M, latLng: $, stamp: ue } = o.useGlobalLeaflet ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      try {
        h.beforeMapMount && await h.beforeMapMount();
      } catch (ne) {
        console.error(
          `The following error occurred running the provided beforeMapMount hook ${ne.message}`
        );
      }
      await L1(q);
      const fe = typeof h.crs == "string" ? W[h.crs] : h.crs;
      h.crs = fe || W.EPSG3857;
      const Ee = {
        addLayer(ne) {
          ne.layerType !== void 0 && (l.layerControl === void 0 ? l.layersToAdd.push(ne) : l.layersInControl.find(
            (U) => ue(U.leafletObject) === ue(ne.leafletObject)
          ) || (l.layerControl.addLayer(ne), l.layersInControl.push(ne))), ne.visible !== !1 && l.leafletRef.addLayer(ne.leafletObject);
        },
        removeLayer(ne) {
          ne.layerType !== void 0 && (l.layerControl === void 0 ? l.layersToAdd = l.layersToAdd.filter(
            (U) => U.name !== ne.name
          ) : (l.layerControl.removeLayer(ne.leafletObject), l.layersInControl = l.layersInControl.filter(
            (U) => ue(U.leafletObject) !== ue(ne.leafletObject)
          ))), l.leafletRef.removeLayer(ne.leafletObject);
        },
        registerLayerControl(ne) {
          l.layerControl = ne, l.layersToAdd.forEach((U) => {
            l.layerControl.addLayer(U);
          }), l.layersToAdd = [], x(ne);
        },
        registerControl(ne) {
          l.leafletRef.addControl(ne.leafletObject);
        },
        setZoom(ne) {
          const U = l.leafletRef.getZoom();
          ne !== U && l.leafletRef.setZoom(ne, E.value);
        },
        setCrs(ne) {
          const U = l.leafletRef.getBounds();
          l.leafletRef.options.crs = ne, l.leafletRef.fitBounds(U, {
            animate: !1,
            padding: [0, 0]
          });
        },
        fitBounds(ne) {
          l.leafletRef.fitBounds(ne, P.value);
        },
        setBounds(ne) {
          if (!ne)
            return;
          const U = M(ne);
          U.isValid() && !(l.lastSetBounds || l.leafletRef.getBounds()).equals(U, 0) && (l.lastSetBounds = U, l.leafletRef.fitBounds(U));
        },
        setCenter(ne) {
          if (ne == null)
            return;
          const U = $(ne), Q = l.lastSetCenter || l.leafletRef.getCenter();
          (Q.lat !== U.lat || Q.lng !== U.lng) && (l.lastSetCenter = U, l.leafletRef.panTo(U, E.value));
        }
      };
      hu(v, Ee.addLayer), hu(T, Ee.removeLayer), hu(x, Ee.registerControl), hu(b, Ee.registerLayerControl), l.leafletRef = Xt(B(r.value, h)), Ht(Ee, l.leafletRef, o), Ah(l.leafletRef, z), Ah(l.leafletRef, m), l.ready = !0, Ot(() => a.emit("ready", l.leafletRef));
    }), il(() => {
      fp(z), l.leafletRef && (l.leafletRef.off(), l.leafletRef.remove());
    });
    const R = un(() => l.leafletRef), Y = un(() => l.ready);
    return { root: r, ready: Y, leafletObject: R, attrs: g };
  },
  render({ attrs: o }) {
    return o.style || (o.style = {}), o.style.width || (o.style.width = "100%"), o.style.height || (o.style.height = "100%"), Vr(
      "div",
      {
        ...o,
        ref: "root"
      },
      this.ready && this.$slots.default ? this.$slots.default() : {}
    );
  }
}), V1 = ["Symbol(Comment)", "Symbol(Text)"], Z1 = ["LTooltip", "LPopup"], Dp = {
  ...Xa,
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
}, U1 = (o, a, r) => {
  const { options: l, methods: d } = dl(
    o,
    a,
    r
  ), h = Nt(
    o,
    Dp,
    l
  ), m = {
    ...d,
    setDraggable(g) {
      a.value.dragging && (g ? a.value.dragging.enable() : a.value.dragging.disable());
    },
    latLngSync(g) {
      r.emit("update:latLng", g.latlng), r.emit("update:lat-lng", g.latlng);
    },
    setLatLng(g) {
      if (g != null && a.value) {
        const v = a.value.getLatLng();
        (!v || !v.equals(g)) && a.value.setLatLng(g);
      }
    }
  };
  return { options: h, methods: m };
}, H1 = (o, a) => {
  const r = a.slots.default && a.slots.default();
  return r && r.length && r.some(q1);
};
function q1(o) {
  return !(V1.includes(o.type.toString()) || Z1.includes(o.type.name));
}
const Qs = $e({
  name: "LMarker",
  props: Dp,
  setup(o, a) {
    const r = le(), l = le(!1), d = dt(qt), h = St(In);
    Yi(
      pp,
      () => {
        var T;
        return !!((T = r.value) != null && T.getElement());
      }
    ), Yi(mp, (T) => {
      var x, b;
      const E = ho((x = r.value) == null ? void 0 : x.getElement) && ((b = r.value) == null ? void 0 : b.getElement());
      E && (E.innerHTML = T);
    }), Yi(
      gp,
      (T) => {
        var x;
        return ((x = r.value) == null ? void 0 : x.setIcon) && r.value.setIcon(T);
      }
    );
    const { options: m, methods: g } = U1(o, r, a), v = {
      moveHandler: kp(g.latLngSync)
    };
    return Pt(async () => {
      const { marker: T, divIcon: x } = d ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      H1(m, a) && (m.icon = x({ className: "" })), r.value = Xt(T(o.latLng, m));
      const { listeners: b } = bn(a.attrs);
      r.value.on(b), r.value.on("move", v.moveHandler), Ht(g, r.value, o), h({
        ...o,
        ...g,
        leafletObject: r.value
      }), l.value = !0, Ot(() => a.emit("ready", r.value));
    }), il(() => fp(v)), { ready: l, leafletObject: r };
  },
  render() {
    return yr(this.ready, this.$slots);
  }
}), Ad = {
  ...Sd,
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
}, Fp = (o, a, r) => {
  const { options: l, methods: d } = Sp(
    o,
    a,
    r
  ), h = Nt(
    o,
    Ad,
    l
  ), m = {
    ...d,
    setSmoothFactor(g) {
      a.value.setStyle({ smoothFactor: g });
    },
    setNoClip(g) {
      a.value.setStyle({ noClip: g });
    },
    addLatLng(g) {
      a.value.addLatLng(g);
    }
  };
  return { options: h, methods: m };
}, Lu = {
  ...Ad
}, Bp = (o, a, r) => {
  const { options: l, methods: d } = Fp(
    o,
    a,
    r
  ), h = Nt(
    o,
    Lu,
    l
  ), m = {
    ...d,
    toGeoJSON(g) {
      return a.value.toGeoJSON(g);
    }
  };
  return { options: h, methods: m };
};
$e({
  name: "LPolygon",
  props: Lu,
  setup(o, a) {
    const r = le(), l = le(!1), d = dt(qt), h = St(In), { options: m, methods: g } = Bp(o, r, a);
    return Pt(async () => {
      const { polygon: v } = d ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(v(o.latLngs, m));
      const { listeners: T } = bn(a.attrs);
      r.value.on(T), Ht(g, r.value, o), h({
        ...o,
        ...g,
        leafletObject: r.value
      }), l.value = !0, Ot(() => a.emit("ready", r.value));
    }), { ready: l, leafletObject: r };
  },
  render() {
    return yr(this.ready, this.$slots);
  }
});
$e({
  name: "LPolyline",
  props: Ad,
  setup(o, a) {
    const r = le(), l = le(!1), d = dt(qt), h = St(In), { options: m, methods: g } = Fp(o, r, a);
    return Pt(async () => {
      const { polyline: v } = d ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(
        v(o.latLngs, m)
      );
      const { listeners: T } = bn(a.attrs);
      r.value.on(T), Ht(g, r.value, o), h({
        ...o,
        ...g,
        leafletObject: r.value
      }), l.value = !0, Ot(() => a.emit("ready", r.value));
    }), { ready: l, leafletObject: r };
  },
  render() {
    return yr(this.ready, this.$slots);
  }
});
const Rp = {
  ...ul,
  content: {
    type: String,
    default: null
  }
}, zp = (o, a) => {
  const { options: r, methods: l } = cl(o), d = {
    ...l,
    setContent(h) {
      a.value && h !== null && h !== void 0 && a.value.setContent(h);
    }
  };
  return { options: r, methods: d };
}, Np = (o) => o.default ? Vr("div", { ref: "root" }, o.default()) : null, $1 = {
  ...Rp,
  latLng: {
    type: [Object, Array],
    default: () => []
  }
}, J1 = (o, a) => {
  const { options: r, methods: l } = zp(o, a);
  return { options: r, methods: l };
};
$e({
  name: "LPopup",
  props: $1,
  setup(o, a) {
    const r = le(), l = le(null), d = dt(qt), h = St(vp), m = St(yp), { options: g, methods: v } = J1(o, r);
    return Pt(async () => {
      const { popup: T } = d ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(T(g)), o.latLng !== void 0 && r.value.setLatLng(o.latLng), Ht(v, r.value, o);
      const { listeners: x } = bn(a.attrs);
      r.value.on(x), r.value.setContent(o.content || l.value || ""), h(r.value), Ot(() => a.emit("ready", r.value));
    }), il(() => {
      m();
    }), { root: l, leafletObject: r };
  },
  render() {
    return Np(this.$slots);
  }
});
const Gp = {
  ...Lu,
  latLngs: {
    ...Lu.latLngs,
    required: !1
  },
  bounds: {
    type: Object,
    custom: !0
  }
}, j1 = (o, a, r) => {
  const { options: l, methods: d } = Bp(
    o,
    a,
    r
  ), h = Nt(
    o,
    Gp,
    l
  ), m = {
    ...d,
    setBounds(g) {
      a.value.setBounds(g);
    },
    setLatLngs(g) {
      a.value.setBounds(g);
    }
  };
  return { options: h, methods: m };
};
$e({
  name: "LRectangle",
  props: Gp,
  setup(o, a) {
    const r = le(), l = le(!1), d = dt(qt), h = St(In), { options: m, methods: g } = j1(o, r, a);
    return Pt(async () => {
      const { rectangle: v, latLngBounds: T } = d ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js"), x = o.bounds ? T(o.bounds) : T(o.latLngs || []);
      r.value = Xt(v(x, m));
      const { listeners: b } = bn(a.attrs);
      r.value.on(b), Ht(g, r.value, o), h({
        ...o,
        ...g,
        leafletObject: r.value
      }), l.value = !0, Ot(() => a.emit("ready", r.value));
    }), { ready: l, leafletObject: r };
  },
  render() {
    return yr(this.ready, this.$slots);
  }
});
const Pd = {
  ...Ed,
  tms: {
    type: Boolean,
    default: void 0
  },
  subdomains: {
    type: [String, Array],
    validator: (o) => typeof o == "string" ? !0 : Array.isArray(o) ? o.every((a) => typeof a == "string") : !1
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
}, Wp = (o, a, r) => {
  const { options: l, methods: d } = Mp(o, a, r), h = Nt(
    o,
    Pd,
    l
  ), m = {
    ...d
  };
  return { options: h, methods: m };
}, Ld = $e({
  props: Pd,
  setup(o, a) {
    const r = le(), l = dt(qt), d = St(In), { options: h, methods: m } = Wp(o, r, a);
    return Pt(async () => {
      const { tileLayer: g } = l ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(g(o.url, h));
      const { listeners: v } = bn(a.attrs);
      r.value.on(v), Ht(m, r.value, o), d({
        ...o,
        ...m,
        leafletObject: r.value
      }), Ot(() => a.emit("ready", r.value));
    }), { leafletObject: r };
  },
  render() {
    return null;
  }
}), Y1 = {
  ...Rp
}, X1 = (o, a) => {
  const { options: r, methods: l } = zp(o, a), d = St(wp);
  return il(() => {
    d();
  }), { options: r, methods: l };
}, Oh = $e({
  name: "LTooltip",
  props: Y1,
  setup(o, a) {
    const r = le(), l = le(null), d = dt(qt), h = St(_p), { options: m, methods: g } = X1(o, r);
    return Pt(async () => {
      const { tooltip: v } = d ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(v(m)), Ht(g, r.value, o);
      const { listeners: T } = bn(a.attrs);
      r.value.on(T), r.value.setContent(o.content || l.value || ""), h(r.value), Ot(() => a.emit("ready", r.value));
    }), { root: l, leafletObject: r };
  },
  render() {
    return Np(this.$slots);
  }
}), Vp = {
  ...Pd,
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
}, K1 = (o, a, r) => {
  const { options: l, methods: d } = Wp(o, a, r);
  return {
    options: Nt(
      o,
      Vp,
      l
    ),
    methods: {
      ...d
    }
  };
}, Q1 = $e({
  props: Vp,
  setup(o, a) {
    const r = le(), l = dt(qt), d = St(In), { options: h, methods: m } = K1(
      o,
      r,
      a
    );
    return Pt(async () => {
      const { tileLayer: g } = l ? Dt.L : await import("./leaflet-src.esm-BnEQV3J-.js");
      r.value = Xt(
        g.wms(o.url, h)
      );
      const { listeners: v } = bn(a.attrs);
      r.value.on(v), Ht(m, r.value, o), d({
        ...o,
        ...m,
        leafletObject: r.value
      }), Ot(() => a.emit("ready", r.value));
    }), { leafletObject: r };
  },
  render() {
    return null;
  }
});
var pu = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Zp(o) {
  return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
}
var zs = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
var e2 = zs.exports, Mh;
function t2() {
  return Mh || (Mh = 1, (function(o, a) {
    (function() {
      var r, l = "4.17.21", d = 200, h = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", m = "Expected a function", g = "Invalid `variable` option passed into `_.template`", v = "__lodash_hash_undefined__", T = 500, x = "__lodash_placeholder__", b = 1, E = 2, P = 4, z = 1, R = 2, Y = 1, B = 2, W = 4, q = 8, M = 16, $ = 32, ue = 64, fe = 128, Ee = 256, ne = 512, U = 30, Q = "...", G = 800, ae = 16, ge = 1, Qe = 2, Ae = 3, ke = 1 / 0, ye = 9007199254740991, Kt = 17976931348623157e292, j = NaN, he = 4294967295, Ge = he - 1, gt = he >>> 1, oe = [
        ["ary", fe],
        ["bind", Y],
        ["bindKey", B],
        ["curry", q],
        ["curryRight", M],
        ["flip", ne],
        ["partial", $],
        ["partialRight", ue],
        ["rearg", Ee]
      ], De = "[object Arguments]", Ne = "[object Array]", pn = "[object AsyncFunction]", nn = "[object Boolean]", Xi = "[object Date]", To = "[object DOMException]", rn = "[object Error]", ti = "[object Function]", Ki = "[object GeneratorFunction]", Sn = "[object Map]", Ii = "[object Number]", xo = "[object Null]", kn = "[object Object]", wr = "[object Promise]", Qi = "[object Proxy]", ni = "[object RegExp]", on = "[object Set]", er = "[object String]", tr = "[object Symbol]", es = "[object Undefined]", ki = "[object WeakMap]", Eo = "[object WeakSet]", Di = "[object ArrayBuffer]", $n = "[object DataView]", Co = "[object Float32Array]", br = "[object Float64Array]", Fi = "[object Int8Array]", Ao = "[object Int16Array]", Hr = "[object Int32Array]", _i = "[object Uint8Array]", Bi = "[object Uint8ClampedArray]", Ri = "[object Uint16Array]", zi = "[object Uint32Array]", ca = /\b__p \+= '';/g, D = /\b(__p \+=) '' \+/g, de = /(__e\(.*?\)|\b__t\)) \+\n'';/g, J = /&(?:amp|lt|gt|quot|#39);/g, pe = /[&<>"']/g, Ve = RegExp(J.source), Fe = RegExp(pe.source), ot = /<%-([\s\S]+?)%>/g, vt = /<%([\s\S]+?)%>/g, Ft = /<%=([\s\S]+?)%>/g, $t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, cn = /^\w*$/, Qt = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Dn = /[\\^$.*+?()[\]{}|]/g, nr = RegExp(Dn.source), Sr = /^\s+/, dn = /\s/, Se = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, Bt = /\{\n\/\* \[wrapped with (.+)\] \*/, Fn = /,? & /, wt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, Tn = /[()=,{}\[\]\/\s]/, mn = /\\(\\)?/g, yi = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Gt = /\w*$/, qr = /^[-+]0x[0-9a-f]+$/i, ir = /^0b[01]+$/i, Jn = /^\[object .+?Constructor\]$/, xn = /^0o[0-7]+$/i, Tr = /^(?:0|[1-9]\d*)$/, da = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, fa = /($^)/, ha = /['\n\r\u2028\u2029\\]/g, pa = "\\ud800-\\udfff", Wu = "\\u0300-\\u036f", Vu = "\\ufe20-\\ufe2f", Zu = "\\u20d0-\\u20ff", _l = Wu + Vu + Zu, ma = "\\u2700-\\u27bf", $r = "a-z\\xdf-\\xf6\\xf8-\\xff", yl = "\\xac\\xb1\\xd7\\xf7", wl = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Po = "\\u2000-\\u206f", lt = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", xt = "A-Z\\xc0-\\xd6\\xd8-\\xde", Lo = "\\ufe0e\\ufe0f", xr = yl + wl + Po + lt, rr = "['’]", ts = "[" + pa + "]", Ue = "[" + xr + "]", Et = "[" + _l + "]", ga = "\\d+", va = "[" + ma + "]", Bn = "[" + $r + "]", bl = "[^" + pa + xr + ga + ma + $r + xt + "]", Jr = "\\ud83c[\\udffb-\\udfff]", Er = "(?:" + Et + "|" + Jr + ")", Rt = "[^" + pa + "]", Ni = "(?:\\ud83c[\\udde6-\\uddff]){2}", Cr = "[\\ud800-\\udbff][\\udc00-\\udfff]", wi = "[" + xt + "]", _a = "\\u200d", jr = "(?:" + Bn + "|" + bl + ")", ns = "(?:" + wi + "|" + bl + ")", ya = "(?:" + rr + "(?:d|ll|m|re|s|t|ve))?", Oo = "(?:" + rr + "(?:D|LL|M|RE|S|T|VE))?", wa = Er + "?", ba = "[" + Lo + "]?", Sa = "(?:" + _a + "(?:" + [Rt, Ni, Cr].join("|") + ")" + ba + wa + ")*", Sl = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", is = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", Tl = ba + wa + Sa, Ze = "(?:" + [va, Ni, Cr].join("|") + ")" + Tl, bi = "(?:" + [Rt + Et + "?", Et, Ni, Cr, ts].join("|") + ")", bt = RegExp(rr, "g"), xl = RegExp(Et, "g"), Mo = RegExp(Jr + "(?=" + Jr + ")|" + bi + Tl, "g"), rs = RegExp([
        wi + "?" + Bn + "+" + ya + "(?=" + [Ue, wi, "$"].join("|") + ")",
        ns + "+" + Oo + "(?=" + [Ue, wi + jr, "$"].join("|") + ")",
        wi + "?" + jr + "+" + ya,
        wi + "+" + Oo,
        is,
        Sl,
        ga,
        Ze
      ].join("|"), "g"), os = RegExp("[" + _a + pa + _l + Lo + "]"), Ar = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, as = [
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
      ], Io = -1, He = {};
      He[Co] = He[br] = He[Fi] = He[Ao] = He[Hr] = He[_i] = He[Bi] = He[Ri] = He[zi] = !0, He[De] = He[Ne] = He[Di] = He[nn] = He[$n] = He[Xi] = He[rn] = He[ti] = He[Sn] = He[Ii] = He[kn] = He[ni] = He[on] = He[er] = He[ki] = !1;
      var ut = {};
      ut[De] = ut[Ne] = ut[Di] = ut[$n] = ut[nn] = ut[Xi] = ut[Co] = ut[br] = ut[Fi] = ut[Ao] = ut[Hr] = ut[Sn] = ut[Ii] = ut[kn] = ut[ni] = ut[on] = ut[er] = ut[tr] = ut[_i] = ut[Bi] = ut[Ri] = ut[zi] = !0, ut[rn] = ut[ti] = ut[ki] = !1;
      var El = {
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
      }, Cl = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }, Uu = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'"
      }, Al = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
      }, ss = parseFloat, Hu = parseInt, ls = typeof pu == "object" && pu && pu.Object === Object && pu, it = typeof self == "object" && self && self.Object === Object && self, an = ls || it || Function("return this")(), Rn = a && !a.nodeType && a, ii = Rn && !0 && o && !o.nodeType && o, us = ii && ii.exports === Rn, cs = us && ls.process, En = (function() {
        try {
          var I = ii && ii.require && ii.require("util").types;
          return I || cs && cs.binding && cs.binding("util");
        } catch {
        }
      })(), Pl = En && En.isArrayBuffer, ds = En && En.isDate, Ll = En && En.isMap, Ol = En && En.isRegExp, Ta = En && En.isSet, Ml = En && En.isTypedArray;
      function Mt(I, H, Z) {
        switch (Z.length) {
          case 0:
            return I.call(H);
          case 1:
            return I.call(H, Z[0]);
          case 2:
            return I.call(H, Z[0], Z[1]);
          case 3:
            return I.call(H, Z[0], Z[1], Z[2]);
        }
        return I.apply(H, Z);
      }
      function qu(I, H, Z, we) {
        for (var We = -1, ct = I == null ? 0 : I.length; ++We < ct; ) {
          var Jt = I[We];
          H(we, Jt, Z(Jt), I);
        }
        return we;
      }
      function zn(I, H) {
        for (var Z = -1, we = I == null ? 0 : I.length; ++Z < we && H(I[Z], Z, I) !== !1; )
          ;
        return I;
      }
      function or(I, H) {
        for (var Z = I == null ? 0 : I.length; Z-- && H(I[Z], Z, I) !== !1; )
          ;
        return I;
      }
      function fs(I, H) {
        for (var Z = -1, we = I == null ? 0 : I.length; ++Z < we; )
          if (!H(I[Z], Z, I))
            return !1;
        return !0;
      }
      function Gi(I, H) {
        for (var Z = -1, we = I == null ? 0 : I.length, We = 0, ct = []; ++Z < we; ) {
          var Jt = I[Z];
          H(Jt, Z, I) && (ct[We++] = Jt);
        }
        return ct;
      }
      function Yr(I, H) {
        var Z = I == null ? 0 : I.length;
        return !!Z && Xr(I, H, 0) > -1;
      }
      function hs(I, H, Z) {
        for (var we = -1, We = I == null ? 0 : I.length; ++we < We; )
          if (Z(H, I[we]))
            return !0;
        return !1;
      }
      function Tt(I, H) {
        for (var Z = -1, we = I == null ? 0 : I.length, We = Array(we); ++Z < we; )
          We[Z] = H(I[Z], Z, I);
        return We;
      }
      function Wi(I, H) {
        for (var Z = -1, we = H.length, We = I.length; ++Z < we; )
          I[We + Z] = H[Z];
        return I;
      }
      function ps(I, H, Z, we) {
        var We = -1, ct = I == null ? 0 : I.length;
        for (we && ct && (Z = I[++We]); ++We < ct; )
          Z = H(Z, I[We], We, I);
        return Z;
      }
      function $u(I, H, Z, we) {
        var We = I == null ? 0 : I.length;
        for (we && We && (Z = I[--We]); We--; )
          Z = H(Z, I[We], We, I);
        return Z;
      }
      function ko(I, H) {
        for (var Z = -1, we = I == null ? 0 : I.length; ++Z < we; )
          if (H(I[Z], Z, I))
            return !0;
        return !1;
      }
      var Ju = xa("length");
      function Il(I) {
        return I.split("");
      }
      function kl(I) {
        return I.match(wt) || [];
      }
      function Do(I, H, Z) {
        var we;
        return Z(I, function(We, ct, Jt) {
          if (H(We, ct, Jt))
            return we = ct, !1;
        }), we;
      }
      function Si(I, H, Z, we) {
        for (var We = I.length, ct = Z + (we ? 1 : -1); we ? ct-- : ++ct < We; )
          if (H(I[ct], ct, I))
            return ct;
        return -1;
      }
      function Xr(I, H, Z) {
        return H === H ? eo(I, H, Z) : Si(I, Nn, Z);
      }
      function Fo(I, H, Z, we) {
        for (var We = Z - 1, ct = I.length; ++We < ct; )
          if (we(I[We], H))
            return We;
        return -1;
      }
      function Nn(I) {
        return I !== I;
      }
      function ms(I, H) {
        var Z = I == null ? 0 : I.length;
        return Z ? _s(I, H) / Z : j;
      }
      function xa(I) {
        return function(H) {
          return H == null ? r : H[I];
        };
      }
      function gs(I) {
        return function(H) {
          return I == null ? r : I[H];
        };
      }
      function Ea(I, H, Z, we, We) {
        return We(I, function(ct, Jt, _t) {
          Z = we ? (we = !1, ct) : H(Z, ct, Jt, _t);
        }), Z;
      }
      function vs(I, H) {
        var Z = I.length;
        for (I.sort(H); Z--; )
          I[Z] = I[Z].value;
        return I;
      }
      function _s(I, H) {
        for (var Z, we = -1, We = I.length; ++we < We; ) {
          var ct = H(I[we]);
          ct !== r && (Z = Z === r ? ct : Z + ct);
        }
        return Z;
      }
      function ys(I, H) {
        for (var Z = -1, we = Array(I); ++Z < I; )
          we[Z] = H(Z);
        return we;
      }
      function Dl(I, H) {
        return Tt(H, function(Z) {
          return [Z, I[Z]];
        });
      }
      function Fl(I) {
        return I && I.slice(0, bs(I) + 1).replace(Sr, "");
      }
      function Lt(I) {
        return function(H) {
          return I(H);
        };
      }
      function ar(I, H) {
        return Tt(H, function(Z) {
          return I[Z];
        });
      }
      function Bo(I, H) {
        return I.has(H);
      }
      function Ti(I, H) {
        for (var Z = -1, we = I.length; ++Z < we && Xr(H, I[Z], 0) > -1; )
          ;
        return Z;
      }
      function Bl(I, H) {
        for (var Z = I.length; Z-- && Xr(H, I[Z], 0) > -1; )
          ;
        return Z;
      }
      function Kr(I, H) {
        for (var Z = I.length, we = 0; Z--; )
          I[Z] === H && ++we;
        return we;
      }
      var ju = gs(El), Ro = gs(Cl);
      function Rl(I) {
        return "\\" + Al[I];
      }
      function Ca(I, H) {
        return I == null ? r : I[H];
      }
      function Qr(I) {
        return os.test(I);
      }
      function sr(I) {
        return Ar.test(I);
      }
      function Aa(I) {
        for (var H, Z = []; !(H = I.next()).done; )
          Z.push(H.value);
        return Z;
      }
      function ws(I) {
        var H = -1, Z = Array(I.size);
        return I.forEach(function(we, We) {
          Z[++H] = [We, we];
        }), Z;
      }
      function Pa(I, H) {
        return function(Z) {
          return I(H(Z));
        };
      }
      function lr(I, H) {
        for (var Z = -1, we = I.length, We = 0, ct = []; ++Z < we; ) {
          var Jt = I[Z];
          (Jt === H || Jt === x) && (I[Z] = x, ct[We++] = Z);
        }
        return ct;
      }
      function jn(I) {
        var H = -1, Z = Array(I.size);
        return I.forEach(function(we) {
          Z[++H] = we;
        }), Z;
      }
      function Yu(I) {
        var H = -1, Z = Array(I.size);
        return I.forEach(function(we) {
          Z[++H] = [we, we];
        }), Z;
      }
      function eo(I, H, Z) {
        for (var we = Z - 1, We = I.length; ++we < We; )
          if (I[we] === H)
            return we;
        return -1;
      }
      function Xu(I, H, Z) {
        for (var we = Z + 1; we--; )
          if (I[we] === H)
            return we;
        return we;
      }
      function Cn(I) {
        return Qr(I) ? La(I) : Ju(I);
      }
      function An(I) {
        return Qr(I) ? Ts(I) : Il(I);
      }
      function bs(I) {
        for (var H = I.length; H-- && dn.test(I.charAt(H)); )
          ;
        return H;
      }
      var Ss = gs(Uu);
      function La(I) {
        for (var H = Mo.lastIndex = 0; Mo.test(I); )
          ++H;
        return H;
      }
      function Ts(I) {
        return I.match(Mo) || [];
      }
      function Oa(I) {
        return I.match(rs) || [];
      }
      var to = (function I(H) {
        H = H == null ? an : Vi.defaults(an.Object(), H, Vi.pick(an, as));
        var Z = H.Array, we = H.Date, We = H.Error, ct = H.Function, Jt = H.Math, _t = H.Object, xs = H.RegExp, xi = H.String, gn = H.TypeError, Ma = Z.prototype, Ia = ct.prototype, no = _t.prototype, zo = H["__core-js_shared__"], ka = Ia.toString, at = no.hasOwnProperty, Ku = 0, Pr = (function() {
          var t = /[^.]+$/.exec(zo && zo.keys && zo.keys.IE_PROTO || "");
          return t ? "Symbol(src)_1." + t : "";
        })(), No = no.toString, zl = ka.call(_t), Qu = an._, Zi = xs(
          "^" + ka.call(at).replace(Dn, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
        ), Go = us ? H.Buffer : r, Ui = H.Symbol, ur = H.Uint8Array, Nl = Go ? Go.allocUnsafe : r, Lr = Pa(_t.getPrototypeOf, _t), io = _t.create, Es = no.propertyIsEnumerable, Wo = Ma.splice, Gl = Ui ? Ui.isConcatSpreadable : r, ro = Ui ? Ui.iterator : r, cr = Ui ? Ui.toStringTag : r, Vo = (function() {
          try {
            var t = Xo(_t, "defineProperty");
            return t({}, "", {}), t;
          } catch {
          }
        })(), Wl = H.clearTimeout !== an.clearTimeout && H.clearTimeout, Vl = we && we.now !== an.Date.now && we.now, ec = H.setTimeout !== an.setTimeout && H.setTimeout, Zo = Jt.ceil, Uo = Jt.floor, Cs = _t.getOwnPropertySymbols, e = Go ? Go.isBuffer : r, n = H.isFinite, s = Ma.join, c = Pa(_t.keys, _t), p = Jt.max, y = Jt.min, A = we.now, F = H.parseInt, V = Jt.random, ee = Ma.reverse, ve = Xo(H, "DataView"), Ce = Xo(H, "Map"), Je = Xo(H, "Promise"), Wt = Xo(H, "Set"), It = Xo(H, "WeakMap"), fn = Xo(_t, "create"), sn = It && new It(), ri = {}, tc = Ko(ve), nc = Ko(Ce), ic = Ko(Je), Zl = Ko(Wt), rc = Ko(It), Ho = Ui ? Ui.prototype : r, Ct = Ho ? Ho.valueOf : r, qo = Ho ? Ho.toString : r;
        function w(t) {
          if (Vt(t) && !qe(t) && !(t instanceof et)) {
            if (t instanceof Pn)
              return t;
            if (at.call(t, "__wrapped__"))
              return Nf(t);
          }
          return new Pn(t);
        }
        var oo = /* @__PURE__ */ (function() {
          function t() {
          }
          return function(i) {
            if (!zt(i))
              return {};
            if (io)
              return io(i);
            t.prototype = i;
            var u = new t();
            return t.prototype = r, u;
          };
        })();
        function Da() {
        }
        function Pn(t, i) {
          this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!i, this.__index__ = 0, this.__values__ = r;
        }
        w.templateSettings = {
          /**
           * Used to detect `data` property values to be HTML-escaped.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          escape: ot,
          /**
           * Used to detect code to be evaluated.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          evaluate: vt,
          /**
           * Used to detect `data` property values to inject.
           *
           * @memberOf _.templateSettings
           * @type {RegExp}
           */
          interpolate: Ft,
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
            _: w
          }
        }, w.prototype = Da.prototype, w.prototype.constructor = w, Pn.prototype = oo(Da.prototype), Pn.prototype.constructor = Pn;
        function et(t) {
          this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = he, this.__views__ = [];
        }
        function oc() {
          var t = new et(this.__wrapped__);
          return t.__actions__ = Yn(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Yn(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Yn(this.__views__), t;
        }
        function Sm() {
          if (this.__filtered__) {
            var t = new et(this);
            t.__dir__ = -1, t.__filtered__ = !0;
          } else
            t = this.clone(), t.__dir__ *= -1;
          return t;
        }
        function Tm() {
          var t = this.__wrapped__.value(), i = this.__dir__, u = qe(t), f = i < 0, _ = u ? t.length : 0, S = Fg(0, _, this.__views__), C = S.start, O = S.end, k = O - C, X = f ? O : C - 1, K = this.__iteratees__, ie = K.length, me = 0, Te = y(k, this.__takeCount__);
          if (!u || !f && _ == k && Te == k)
            return lf(t, this.__actions__);
          var Me = [];
          e:
            for (; k-- && me < Te; ) {
              X += i;
              for (var Ke = -1, Ie = t[X]; ++Ke < ie; ) {
                var nt = K[Ke], st = nt.iteratee, si = nt.type, Vn = st(Ie);
                if (si == Qe)
                  Ie = Vn;
                else if (!Vn) {
                  if (si == ge)
                    continue e;
                  break e;
                }
              }
              Me[me++] = Ie;
            }
          return Me;
        }
        et.prototype = oo(Da.prototype), et.prototype.constructor = et;
        function $o(t) {
          var i = -1, u = t == null ? 0 : t.length;
          for (this.clear(); ++i < u; ) {
            var f = t[i];
            this.set(f[0], f[1]);
          }
        }
        function xm() {
          this.__data__ = fn ? fn(null) : {}, this.size = 0;
        }
        function Em(t) {
          var i = this.has(t) && delete this.__data__[t];
          return this.size -= i ? 1 : 0, i;
        }
        function Cm(t) {
          var i = this.__data__;
          if (fn) {
            var u = i[t];
            return u === v ? r : u;
          }
          return at.call(i, t) ? i[t] : r;
        }
        function Am(t) {
          var i = this.__data__;
          return fn ? i[t] !== r : at.call(i, t);
        }
        function Pm(t, i) {
          var u = this.__data__;
          return this.size += this.has(t) ? 0 : 1, u[t] = fn && i === r ? v : i, this;
        }
        $o.prototype.clear = xm, $o.prototype.delete = Em, $o.prototype.get = Cm, $o.prototype.has = Am, $o.prototype.set = Pm;
        function Or(t) {
          var i = -1, u = t == null ? 0 : t.length;
          for (this.clear(); ++i < u; ) {
            var f = t[i];
            this.set(f[0], f[1]);
          }
        }
        function Lm() {
          this.__data__ = [], this.size = 0;
        }
        function Om(t) {
          var i = this.__data__, u = Ul(i, t);
          if (u < 0)
            return !1;
          var f = i.length - 1;
          return u == f ? i.pop() : Wo.call(i, u, 1), --this.size, !0;
        }
        function Mm(t) {
          var i = this.__data__, u = Ul(i, t);
          return u < 0 ? r : i[u][1];
        }
        function Im(t) {
          return Ul(this.__data__, t) > -1;
        }
        function km(t, i) {
          var u = this.__data__, f = Ul(u, t);
          return f < 0 ? (++this.size, u.push([t, i])) : u[f][1] = i, this;
        }
        Or.prototype.clear = Lm, Or.prototype.delete = Om, Or.prototype.get = Mm, Or.prototype.has = Im, Or.prototype.set = km;
        function Mr(t) {
          var i = -1, u = t == null ? 0 : t.length;
          for (this.clear(); ++i < u; ) {
            var f = t[i];
            this.set(f[0], f[1]);
          }
        }
        function Dm() {
          this.size = 0, this.__data__ = {
            hash: new $o(),
            map: new (Ce || Or)(),
            string: new $o()
          };
        }
        function Fm(t) {
          var i = nu(this, t).delete(t);
          return this.size -= i ? 1 : 0, i;
        }
        function Bm(t) {
          return nu(this, t).get(t);
        }
        function Rm(t) {
          return nu(this, t).has(t);
        }
        function zm(t, i) {
          var u = nu(this, t), f = u.size;
          return u.set(t, i), this.size += u.size == f ? 0 : 1, this;
        }
        Mr.prototype.clear = Dm, Mr.prototype.delete = Fm, Mr.prototype.get = Bm, Mr.prototype.has = Rm, Mr.prototype.set = zm;
        function Jo(t) {
          var i = -1, u = t == null ? 0 : t.length;
          for (this.__data__ = new Mr(); ++i < u; )
            this.add(t[i]);
        }
        function Nm(t) {
          return this.__data__.set(t, v), this;
        }
        function Gm(t) {
          return this.__data__.has(t);
        }
        Jo.prototype.add = Jo.prototype.push = Nm, Jo.prototype.has = Gm;
        function Hi(t) {
          var i = this.__data__ = new Or(t);
          this.size = i.size;
        }
        function Wm() {
          this.__data__ = new Or(), this.size = 0;
        }
        function Vm(t) {
          var i = this.__data__, u = i.delete(t);
          return this.size = i.size, u;
        }
        function Zm(t) {
          return this.__data__.get(t);
        }
        function Um(t) {
          return this.__data__.has(t);
        }
        function Hm(t, i) {
          var u = this.__data__;
          if (u instanceof Or) {
            var f = u.__data__;
            if (!Ce || f.length < d - 1)
              return f.push([t, i]), this.size = ++u.size, this;
            u = this.__data__ = new Mr(f);
          }
          return u.set(t, i), this.size = u.size, this;
        }
        Hi.prototype.clear = Wm, Hi.prototype.delete = Vm, Hi.prototype.get = Zm, Hi.prototype.has = Um, Hi.prototype.set = Hm;
        function zd(t, i) {
          var u = qe(t), f = !u && Qo(t), _ = !u && !f && co(t), S = !u && !f && !_ && za(t), C = u || f || _ || S, O = C ? ys(t.length, xi) : [], k = O.length;
          for (var X in t)
            (i || at.call(t, X)) && !(C && // Safari 9 has enumerable `arguments.length` in strict mode.
            (X == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
            _ && (X == "offset" || X == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
            S && (X == "buffer" || X == "byteLength" || X == "byteOffset") || // Skip index properties.
            Fr(X, k))) && O.push(X);
          return O;
        }
        function Nd(t) {
          var i = t.length;
          return i ? t[gc(0, i - 1)] : r;
        }
        function qm(t, i) {
          return iu(Yn(t), jo(i, 0, t.length));
        }
        function $m(t) {
          return iu(Yn(t));
        }
        function ac(t, i, u) {
          (u !== r && !qi(t[i], u) || u === r && !(i in t)) && Ir(t, i, u);
        }
        function As(t, i, u) {
          var f = t[i];
          (!(at.call(t, i) && qi(f, u)) || u === r && !(i in t)) && Ir(t, i, u);
        }
        function Ul(t, i) {
          for (var u = t.length; u--; )
            if (qi(t[u][0], i))
              return u;
          return -1;
        }
        function Jm(t, i, u, f) {
          return ao(t, function(_, S, C) {
            i(f, _, u(_), C);
          }), f;
        }
        function Gd(t, i) {
          return t && fr(i, hn(i), t);
        }
        function jm(t, i) {
          return t && fr(i, Kn(i), t);
        }
        function Ir(t, i, u) {
          i == "__proto__" && Vo ? Vo(t, i, {
            configurable: !0,
            enumerable: !0,
            value: u,
            writable: !0
          }) : t[i] = u;
        }
        function sc(t, i) {
          for (var u = -1, f = i.length, _ = Z(f), S = t == null; ++u < f; )
            _[u] = S ? r : Wc(t, i[u]);
          return _;
        }
        function jo(t, i, u) {
          return t === t && (u !== r && (t = t <= u ? t : u), i !== r && (t = t >= i ? t : i)), t;
        }
        function Ei(t, i, u, f, _, S) {
          var C, O = i & b, k = i & E, X = i & P;
          if (u && (C = _ ? u(t, f, _, S) : u(t)), C !== r)
            return C;
          if (!zt(t))
            return t;
          var K = qe(t);
          if (K) {
            if (C = Rg(t), !O)
              return Yn(t, C);
          } else {
            var ie = Ln(t), me = ie == ti || ie == Ki;
            if (co(t))
              return df(t, O);
            if (ie == kn || ie == De || me && !_) {
              if (C = k || me ? {} : Of(t), !O)
                return k ? Cg(t, jm(C, t)) : Eg(t, Gd(C, t));
            } else {
              if (!ut[ie])
                return _ ? t : {};
              C = zg(t, ie, O);
            }
          }
          S || (S = new Hi());
          var Te = S.get(t);
          if (Te)
            return Te;
          S.set(t, C), oh(t) ? t.forEach(function(Ie) {
            C.add(Ei(Ie, i, u, Ie, t, S));
          }) : ih(t) && t.forEach(function(Ie, nt) {
            C.set(nt, Ei(Ie, i, u, nt, t, S));
          });
          var Me = X ? k ? Ac : Cc : k ? Kn : hn, Ke = K ? r : Me(t);
          return zn(Ke || t, function(Ie, nt) {
            Ke && (nt = Ie, Ie = t[nt]), As(C, nt, Ei(Ie, i, u, nt, t, S));
          }), C;
        }
        function Ym(t) {
          var i = hn(t);
          return function(u) {
            return Wd(u, t, i);
          };
        }
        function Wd(t, i, u) {
          var f = u.length;
          if (t == null)
            return !f;
          for (t = _t(t); f--; ) {
            var _ = u[f], S = i[_], C = t[_];
            if (C === r && !(_ in t) || !S(C))
              return !1;
          }
          return !0;
        }
        function Vd(t, i, u) {
          if (typeof t != "function")
            throw new gn(m);
          return Ds(function() {
            t.apply(r, u);
          }, i);
        }
        function Ps(t, i, u, f) {
          var _ = -1, S = Yr, C = !0, O = t.length, k = [], X = i.length;
          if (!O)
            return k;
          u && (i = Tt(i, Lt(u))), f ? (S = hs, C = !1) : i.length >= d && (S = Bo, C = !1, i = new Jo(i));
          e:
            for (; ++_ < O; ) {
              var K = t[_], ie = u == null ? K : u(K);
              if (K = f || K !== 0 ? K : 0, C && ie === ie) {
                for (var me = X; me--; )
                  if (i[me] === ie)
                    continue e;
                k.push(K);
              } else S(i, ie, f) || k.push(K);
            }
          return k;
        }
        var ao = gf(dr), Zd = gf(uc, !0);
        function Xm(t, i) {
          var u = !0;
          return ao(t, function(f, _, S) {
            return u = !!i(f, _, S), u;
          }), u;
        }
        function Hl(t, i, u) {
          for (var f = -1, _ = t.length; ++f < _; ) {
            var S = t[f], C = i(S);
            if (C != null && (O === r ? C === C && !ai(C) : u(C, O)))
              var O = C, k = S;
          }
          return k;
        }
        function Km(t, i, u, f) {
          var _ = t.length;
          for (u = Ye(u), u < 0 && (u = -u > _ ? 0 : _ + u), f = f === r || f > _ ? _ : Ye(f), f < 0 && (f += _), f = u > f ? 0 : sh(f); u < f; )
            t[u++] = i;
          return t;
        }
        function Ud(t, i) {
          var u = [];
          return ao(t, function(f, _, S) {
            i(f, _, S) && u.push(f);
          }), u;
        }
        function vn(t, i, u, f, _) {
          var S = -1, C = t.length;
          for (u || (u = Gg), _ || (_ = []); ++S < C; ) {
            var O = t[S];
            i > 0 && u(O) ? i > 1 ? vn(O, i - 1, u, f, _) : Wi(_, O) : f || (_[_.length] = O);
          }
          return _;
        }
        var lc = vf(), Hd = vf(!0);
        function dr(t, i) {
          return t && lc(t, i, hn);
        }
        function uc(t, i) {
          return t && Hd(t, i, hn);
        }
        function ql(t, i) {
          return Gi(i, function(u) {
            return Br(t[u]);
          });
        }
        function Yo(t, i) {
          i = lo(i, t);
          for (var u = 0, f = i.length; t != null && u < f; )
            t = t[hr(i[u++])];
          return u && u == f ? t : r;
        }
        function qd(t, i, u) {
          var f = i(t);
          return qe(t) ? f : Wi(f, u(t));
        }
        function Gn(t) {
          return t == null ? t === r ? es : xo : cr && cr in _t(t) ? Dg(t) : $g(t);
        }
        function cc(t, i) {
          return t > i;
        }
        function Qm(t, i) {
          return t != null && at.call(t, i);
        }
        function eg(t, i) {
          return t != null && i in _t(t);
        }
        function tg(t, i, u) {
          return t >= y(i, u) && t < p(i, u);
        }
        function dc(t, i, u) {
          for (var f = u ? hs : Yr, _ = t[0].length, S = t.length, C = S, O = Z(S), k = 1 / 0, X = []; C--; ) {
            var K = t[C];
            C && i && (K = Tt(K, Lt(i))), k = y(K.length, k), O[C] = !u && (i || _ >= 120 && K.length >= 120) ? new Jo(C && K) : r;
          }
          K = t[0];
          var ie = -1, me = O[0];
          e:
            for (; ++ie < _ && X.length < k; ) {
              var Te = K[ie], Me = i ? i(Te) : Te;
              if (Te = u || Te !== 0 ? Te : 0, !(me ? Bo(me, Me) : f(X, Me, u))) {
                for (C = S; --C; ) {
                  var Ke = O[C];
                  if (!(Ke ? Bo(Ke, Me) : f(t[C], Me, u)))
                    continue e;
                }
                me && me.push(Me), X.push(Te);
              }
            }
          return X;
        }
        function ng(t, i, u, f) {
          return dr(t, function(_, S, C) {
            i(f, u(_), S, C);
          }), f;
        }
        function Ls(t, i, u) {
          i = lo(i, t), t = Df(t, i);
          var f = t == null ? t : t[hr(Ai(i))];
          return f == null ? r : Mt(f, t, u);
        }
        function $d(t) {
          return Vt(t) && Gn(t) == De;
        }
        function ig(t) {
          return Vt(t) && Gn(t) == Di;
        }
        function rg(t) {
          return Vt(t) && Gn(t) == Xi;
        }
        function Os(t, i, u, f, _) {
          return t === i ? !0 : t == null || i == null || !Vt(t) && !Vt(i) ? t !== t && i !== i : og(t, i, u, f, Os, _);
        }
        function og(t, i, u, f, _, S) {
          var C = qe(t), O = qe(i), k = C ? Ne : Ln(t), X = O ? Ne : Ln(i);
          k = k == De ? kn : k, X = X == De ? kn : X;
          var K = k == kn, ie = X == kn, me = k == X;
          if (me && co(t)) {
            if (!co(i))
              return !1;
            C = !0, K = !1;
          }
          if (me && !K)
            return S || (S = new Hi()), C || za(t) ? Af(t, i, u, f, _, S) : Ig(t, i, k, u, f, _, S);
          if (!(u & z)) {
            var Te = K && at.call(t, "__wrapped__"), Me = ie && at.call(i, "__wrapped__");
            if (Te || Me) {
              var Ke = Te ? t.value() : t, Ie = Me ? i.value() : i;
              return S || (S = new Hi()), _(Ke, Ie, u, f, S);
            }
          }
          return me ? (S || (S = new Hi()), kg(t, i, u, f, _, S)) : !1;
        }
        function ag(t) {
          return Vt(t) && Ln(t) == Sn;
        }
        function fc(t, i, u, f) {
          var _ = u.length, S = _, C = !f;
          if (t == null)
            return !S;
          for (t = _t(t); _--; ) {
            var O = u[_];
            if (C && O[2] ? O[1] !== t[O[0]] : !(O[0] in t))
              return !1;
          }
          for (; ++_ < S; ) {
            O = u[_];
            var k = O[0], X = t[k], K = O[1];
            if (C && O[2]) {
              if (X === r && !(k in t))
                return !1;
            } else {
              var ie = new Hi();
              if (f)
                var me = f(X, K, k, t, i, ie);
              if (!(me === r ? Os(K, X, z | R, f, ie) : me))
                return !1;
            }
          }
          return !0;
        }
        function Jd(t) {
          if (!zt(t) || Vg(t))
            return !1;
          var i = Br(t) ? Zi : Jn;
          return i.test(Ko(t));
        }
        function sg(t) {
          return Vt(t) && Gn(t) == ni;
        }
        function lg(t) {
          return Vt(t) && Ln(t) == on;
        }
        function ug(t) {
          return Vt(t) && uu(t.length) && !!He[Gn(t)];
        }
        function jd(t) {
          return typeof t == "function" ? t : t == null ? Qn : typeof t == "object" ? qe(t) ? Kd(t[0], t[1]) : Xd(t) : _h(t);
        }
        function hc(t) {
          if (!ks(t))
            return c(t);
          var i = [];
          for (var u in _t(t))
            at.call(t, u) && u != "constructor" && i.push(u);
          return i;
        }
        function cg(t) {
          if (!zt(t))
            return qg(t);
          var i = ks(t), u = [];
          for (var f in t)
            f == "constructor" && (i || !at.call(t, f)) || u.push(f);
          return u;
        }
        function pc(t, i) {
          return t < i;
        }
        function Yd(t, i) {
          var u = -1, f = Xn(t) ? Z(t.length) : [];
          return ao(t, function(_, S, C) {
            f[++u] = i(_, S, C);
          }), f;
        }
        function Xd(t) {
          var i = Lc(t);
          return i.length == 1 && i[0][2] ? If(i[0][0], i[0][1]) : function(u) {
            return u === t || fc(u, t, i);
          };
        }
        function Kd(t, i) {
          return Mc(t) && Mf(i) ? If(hr(t), i) : function(u) {
            var f = Wc(u, t);
            return f === r && f === i ? Vc(u, t) : Os(i, f, z | R);
          };
        }
        function $l(t, i, u, f, _) {
          t !== i && lc(i, function(S, C) {
            if (_ || (_ = new Hi()), zt(S))
              dg(t, i, C, u, $l, f, _);
            else {
              var O = f ? f(kc(t, C), S, C + "", t, i, _) : r;
              O === r && (O = S), ac(t, C, O);
            }
          }, Kn);
        }
        function dg(t, i, u, f, _, S, C) {
          var O = kc(t, u), k = kc(i, u), X = C.get(k);
          if (X) {
            ac(t, u, X);
            return;
          }
          var K = S ? S(O, k, u + "", t, i, C) : r, ie = K === r;
          if (ie) {
            var me = qe(k), Te = !me && co(k), Me = !me && !Te && za(k);
            K = k, me || Te || Me ? qe(O) ? K = O : jt(O) ? K = Yn(O) : Te ? (ie = !1, K = df(k, !0)) : Me ? (ie = !1, K = ff(k, !0)) : K = [] : Fs(k) || Qo(k) ? (K = O, Qo(O) ? K = lh(O) : (!zt(O) || Br(O)) && (K = Of(k))) : ie = !1;
          }
          ie && (C.set(k, K), _(K, k, f, S, C), C.delete(k)), ac(t, u, K);
        }
        function Qd(t, i) {
          var u = t.length;
          if (u)
            return i += i < 0 ? u : 0, Fr(i, u) ? t[i] : r;
        }
        function ef(t, i, u) {
          i.length ? i = Tt(i, function(S) {
            return qe(S) ? function(C) {
              return Yo(C, S.length === 1 ? S[0] : S);
            } : S;
          }) : i = [Qn];
          var f = -1;
          i = Tt(i, Lt(Oe()));
          var _ = Yd(t, function(S, C, O) {
            var k = Tt(i, function(X) {
              return X(S);
            });
            return { criteria: k, index: ++f, value: S };
          });
          return vs(_, function(S, C) {
            return xg(S, C, u);
          });
        }
        function fg(t, i) {
          return tf(t, i, function(u, f) {
            return Vc(t, f);
          });
        }
        function tf(t, i, u) {
          for (var f = -1, _ = i.length, S = {}; ++f < _; ) {
            var C = i[f], O = Yo(t, C);
            u(O, C) && Ms(S, lo(C, t), O);
          }
          return S;
        }
        function hg(t) {
          return function(i) {
            return Yo(i, t);
          };
        }
        function mc(t, i, u, f) {
          var _ = f ? Fo : Xr, S = -1, C = i.length, O = t;
          for (t === i && (i = Yn(i)), u && (O = Tt(t, Lt(u))); ++S < C; )
            for (var k = 0, X = i[S], K = u ? u(X) : X; (k = _(O, K, k, f)) > -1; )
              O !== t && Wo.call(O, k, 1), Wo.call(t, k, 1);
          return t;
        }
        function nf(t, i) {
          for (var u = t ? i.length : 0, f = u - 1; u--; ) {
            var _ = i[u];
            if (u == f || _ !== S) {
              var S = _;
              Fr(_) ? Wo.call(t, _, 1) : yc(t, _);
            }
          }
          return t;
        }
        function gc(t, i) {
          return t + Uo(V() * (i - t + 1));
        }
        function pg(t, i, u, f) {
          for (var _ = -1, S = p(Zo((i - t) / (u || 1)), 0), C = Z(S); S--; )
            C[f ? S : ++_] = t, t += u;
          return C;
        }
        function vc(t, i) {
          var u = "";
          if (!t || i < 1 || i > ye)
            return u;
          do
            i % 2 && (u += t), i = Uo(i / 2), i && (t += t);
          while (i);
          return u;
        }
        function tt(t, i) {
          return Dc(kf(t, i, Qn), t + "");
        }
        function mg(t) {
          return Nd(Na(t));
        }
        function gg(t, i) {
          var u = Na(t);
          return iu(u, jo(i, 0, u.length));
        }
        function Ms(t, i, u, f) {
          if (!zt(t))
            return t;
          i = lo(i, t);
          for (var _ = -1, S = i.length, C = S - 1, O = t; O != null && ++_ < S; ) {
            var k = hr(i[_]), X = u;
            if (k === "__proto__" || k === "constructor" || k === "prototype")
              return t;
            if (_ != C) {
              var K = O[k];
              X = f ? f(K, k, O) : r, X === r && (X = zt(K) ? K : Fr(i[_ + 1]) ? [] : {});
            }
            As(O, k, X), O = O[k];
          }
          return t;
        }
        var rf = sn ? function(t, i) {
          return sn.set(t, i), t;
        } : Qn, vg = Vo ? function(t, i) {
          return Vo(t, "toString", {
            configurable: !0,
            enumerable: !1,
            value: Uc(i),
            writable: !0
          });
        } : Qn;
        function _g(t) {
          return iu(Na(t));
        }
        function Ci(t, i, u) {
          var f = -1, _ = t.length;
          i < 0 && (i = -i > _ ? 0 : _ + i), u = u > _ ? _ : u, u < 0 && (u += _), _ = i > u ? 0 : u - i >>> 0, i >>>= 0;
          for (var S = Z(_); ++f < _; )
            S[f] = t[f + i];
          return S;
        }
        function yg(t, i) {
          var u;
          return ao(t, function(f, _, S) {
            return u = i(f, _, S), !u;
          }), !!u;
        }
        function Jl(t, i, u) {
          var f = 0, _ = t == null ? f : t.length;
          if (typeof i == "number" && i === i && _ <= gt) {
            for (; f < _; ) {
              var S = f + _ >>> 1, C = t[S];
              C !== null && !ai(C) && (u ? C <= i : C < i) ? f = S + 1 : _ = S;
            }
            return _;
          }
          return _c(t, i, Qn, u);
        }
        function _c(t, i, u, f) {
          var _ = 0, S = t == null ? 0 : t.length;
          if (S === 0)
            return 0;
          i = u(i);
          for (var C = i !== i, O = i === null, k = ai(i), X = i === r; _ < S; ) {
            var K = Uo((_ + S) / 2), ie = u(t[K]), me = ie !== r, Te = ie === null, Me = ie === ie, Ke = ai(ie);
            if (C)
              var Ie = f || Me;
            else X ? Ie = Me && (f || me) : O ? Ie = Me && me && (f || !Te) : k ? Ie = Me && me && !Te && (f || !Ke) : Te || Ke ? Ie = !1 : Ie = f ? ie <= i : ie < i;
            Ie ? _ = K + 1 : S = K;
          }
          return y(S, Ge);
        }
        function of(t, i) {
          for (var u = -1, f = t.length, _ = 0, S = []; ++u < f; ) {
            var C = t[u], O = i ? i(C) : C;
            if (!u || !qi(O, k)) {
              var k = O;
              S[_++] = C === 0 ? 0 : C;
            }
          }
          return S;
        }
        function af(t) {
          return typeof t == "number" ? t : ai(t) ? j : +t;
        }
        function oi(t) {
          if (typeof t == "string")
            return t;
          if (qe(t))
            return Tt(t, oi) + "";
          if (ai(t))
            return qo ? qo.call(t) : "";
          var i = t + "";
          return i == "0" && 1 / t == -ke ? "-0" : i;
        }
        function so(t, i, u) {
          var f = -1, _ = Yr, S = t.length, C = !0, O = [], k = O;
          if (u)
            C = !1, _ = hs;
          else if (S >= d) {
            var X = i ? null : Og(t);
            if (X)
              return jn(X);
            C = !1, _ = Bo, k = new Jo();
          } else
            k = i ? [] : O;
          e:
            for (; ++f < S; ) {
              var K = t[f], ie = i ? i(K) : K;
              if (K = u || K !== 0 ? K : 0, C && ie === ie) {
                for (var me = k.length; me--; )
                  if (k[me] === ie)
                    continue e;
                i && k.push(ie), O.push(K);
              } else _(k, ie, u) || (k !== O && k.push(ie), O.push(K));
            }
          return O;
        }
        function yc(t, i) {
          return i = lo(i, t), t = Df(t, i), t == null || delete t[hr(Ai(i))];
        }
        function sf(t, i, u, f) {
          return Ms(t, i, u(Yo(t, i)), f);
        }
        function jl(t, i, u, f) {
          for (var _ = t.length, S = f ? _ : -1; (f ? S-- : ++S < _) && i(t[S], S, t); )
            ;
          return u ? Ci(t, f ? 0 : S, f ? S + 1 : _) : Ci(t, f ? S + 1 : 0, f ? _ : S);
        }
        function lf(t, i) {
          var u = t;
          return u instanceof et && (u = u.value()), ps(i, function(f, _) {
            return _.func.apply(_.thisArg, Wi([f], _.args));
          }, u);
        }
        function wc(t, i, u) {
          var f = t.length;
          if (f < 2)
            return f ? so(t[0]) : [];
          for (var _ = -1, S = Z(f); ++_ < f; )
            for (var C = t[_], O = -1; ++O < f; )
              O != _ && (S[_] = Ps(S[_] || C, t[O], i, u));
          return so(vn(S, 1), i, u);
        }
        function uf(t, i, u) {
          for (var f = -1, _ = t.length, S = i.length, C = {}; ++f < _; ) {
            var O = f < S ? i[f] : r;
            u(C, t[f], O);
          }
          return C;
        }
        function bc(t) {
          return jt(t) ? t : [];
        }
        function Sc(t) {
          return typeof t == "function" ? t : Qn;
        }
        function lo(t, i) {
          return qe(t) ? t : Mc(t, i) ? [t] : zf(yt(t));
        }
        var wg = tt;
        function uo(t, i, u) {
          var f = t.length;
          return u = u === r ? f : u, !i && u >= f ? t : Ci(t, i, u);
        }
        var cf = Wl || function(t) {
          return an.clearTimeout(t);
        };
        function df(t, i) {
          if (i)
            return t.slice();
          var u = t.length, f = Nl ? Nl(u) : new t.constructor(u);
          return t.copy(f), f;
        }
        function Tc(t) {
          var i = new t.constructor(t.byteLength);
          return new ur(i).set(new ur(t)), i;
        }
        function bg(t, i) {
          var u = i ? Tc(t.buffer) : t.buffer;
          return new t.constructor(u, t.byteOffset, t.byteLength);
        }
        function Sg(t) {
          var i = new t.constructor(t.source, Gt.exec(t));
          return i.lastIndex = t.lastIndex, i;
        }
        function Tg(t) {
          return Ct ? _t(Ct.call(t)) : {};
        }
        function ff(t, i) {
          var u = i ? Tc(t.buffer) : t.buffer;
          return new t.constructor(u, t.byteOffset, t.length);
        }
        function hf(t, i) {
          if (t !== i) {
            var u = t !== r, f = t === null, _ = t === t, S = ai(t), C = i !== r, O = i === null, k = i === i, X = ai(i);
            if (!O && !X && !S && t > i || S && C && k && !O && !X || f && C && k || !u && k || !_)
              return 1;
            if (!f && !S && !X && t < i || X && u && _ && !f && !S || O && u && _ || !C && _ || !k)
              return -1;
          }
          return 0;
        }
        function xg(t, i, u) {
          for (var f = -1, _ = t.criteria, S = i.criteria, C = _.length, O = u.length; ++f < C; ) {
            var k = hf(_[f], S[f]);
            if (k) {
              if (f >= O)
                return k;
              var X = u[f];
              return k * (X == "desc" ? -1 : 1);
            }
          }
          return t.index - i.index;
        }
        function pf(t, i, u, f) {
          for (var _ = -1, S = t.length, C = u.length, O = -1, k = i.length, X = p(S - C, 0), K = Z(k + X), ie = !f; ++O < k; )
            K[O] = i[O];
          for (; ++_ < C; )
            (ie || _ < S) && (K[u[_]] = t[_]);
          for (; X--; )
            K[O++] = t[_++];
          return K;
        }
        function mf(t, i, u, f) {
          for (var _ = -1, S = t.length, C = -1, O = u.length, k = -1, X = i.length, K = p(S - O, 0), ie = Z(K + X), me = !f; ++_ < K; )
            ie[_] = t[_];
          for (var Te = _; ++k < X; )
            ie[Te + k] = i[k];
          for (; ++C < O; )
            (me || _ < S) && (ie[Te + u[C]] = t[_++]);
          return ie;
        }
        function Yn(t, i) {
          var u = -1, f = t.length;
          for (i || (i = Z(f)); ++u < f; )
            i[u] = t[u];
          return i;
        }
        function fr(t, i, u, f) {
          var _ = !u;
          u || (u = {});
          for (var S = -1, C = i.length; ++S < C; ) {
            var O = i[S], k = f ? f(u[O], t[O], O, u, t) : r;
            k === r && (k = t[O]), _ ? Ir(u, O, k) : As(u, O, k);
          }
          return u;
        }
        function Eg(t, i) {
          return fr(t, Oc(t), i);
        }
        function Cg(t, i) {
          return fr(t, Pf(t), i);
        }
        function Yl(t, i) {
          return function(u, f) {
            var _ = qe(u) ? qu : Jm, S = i ? i() : {};
            return _(u, t, Oe(f, 2), S);
          };
        }
        function Fa(t) {
          return tt(function(i, u) {
            var f = -1, _ = u.length, S = _ > 1 ? u[_ - 1] : r, C = _ > 2 ? u[2] : r;
            for (S = t.length > 3 && typeof S == "function" ? (_--, S) : r, C && Wn(u[0], u[1], C) && (S = _ < 3 ? r : S, _ = 1), i = _t(i); ++f < _; ) {
              var O = u[f];
              O && t(i, O, f, S);
            }
            return i;
          });
        }
        function gf(t, i) {
          return function(u, f) {
            if (u == null)
              return u;
            if (!Xn(u))
              return t(u, f);
            for (var _ = u.length, S = i ? _ : -1, C = _t(u); (i ? S-- : ++S < _) && f(C[S], S, C) !== !1; )
              ;
            return u;
          };
        }
        function vf(t) {
          return function(i, u, f) {
            for (var _ = -1, S = _t(i), C = f(i), O = C.length; O--; ) {
              var k = C[t ? O : ++_];
              if (u(S[k], k, S) === !1)
                break;
            }
            return i;
          };
        }
        function Ag(t, i, u) {
          var f = i & Y, _ = Is(t);
          function S() {
            var C = this && this !== an && this instanceof S ? _ : t;
            return C.apply(f ? u : this, arguments);
          }
          return S;
        }
        function _f(t) {
          return function(i) {
            i = yt(i);
            var u = Qr(i) ? An(i) : r, f = u ? u[0] : i.charAt(0), _ = u ? uo(u, 1).join("") : i.slice(1);
            return f[t]() + _;
          };
        }
        function Ba(t) {
          return function(i) {
            return ps(gh(mh(i).replace(bt, "")), t, "");
          };
        }
        function Is(t) {
          return function() {
            var i = arguments;
            switch (i.length) {
              case 0:
                return new t();
              case 1:
                return new t(i[0]);
              case 2:
                return new t(i[0], i[1]);
              case 3:
                return new t(i[0], i[1], i[2]);
              case 4:
                return new t(i[0], i[1], i[2], i[3]);
              case 5:
                return new t(i[0], i[1], i[2], i[3], i[4]);
              case 6:
                return new t(i[0], i[1], i[2], i[3], i[4], i[5]);
              case 7:
                return new t(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
            }
            var u = oo(t.prototype), f = t.apply(u, i);
            return zt(f) ? f : u;
          };
        }
        function Pg(t, i, u) {
          var f = Is(t);
          function _() {
            for (var S = arguments.length, C = Z(S), O = S, k = Ra(_); O--; )
              C[O] = arguments[O];
            var X = S < 3 && C[0] !== k && C[S - 1] !== k ? [] : lr(C, k);
            if (S -= X.length, S < u)
              return Tf(
                t,
                i,
                Xl,
                _.placeholder,
                r,
                C,
                X,
                r,
                r,
                u - S
              );
            var K = this && this !== an && this instanceof _ ? f : t;
            return Mt(K, this, C);
          }
          return _;
        }
        function yf(t) {
          return function(i, u, f) {
            var _ = _t(i);
            if (!Xn(i)) {
              var S = Oe(u, 3);
              i = hn(i), u = function(O) {
                return S(_[O], O, _);
              };
            }
            var C = t(i, u, f);
            return C > -1 ? _[S ? i[C] : C] : r;
          };
        }
        function wf(t) {
          return Dr(function(i) {
            var u = i.length, f = u, _ = Pn.prototype.thru;
            for (t && i.reverse(); f--; ) {
              var S = i[f];
              if (typeof S != "function")
                throw new gn(m);
              if (_ && !C && tu(S) == "wrapper")
                var C = new Pn([], !0);
            }
            for (f = C ? f : u; ++f < u; ) {
              S = i[f];
              var O = tu(S), k = O == "wrapper" ? Pc(S) : r;
              k && Ic(k[0]) && k[1] == (fe | q | $ | Ee) && !k[4].length && k[9] == 1 ? C = C[tu(k[0])].apply(C, k[3]) : C = S.length == 1 && Ic(S) ? C[O]() : C.thru(S);
            }
            return function() {
              var X = arguments, K = X[0];
              if (C && X.length == 1 && qe(K))
                return C.plant(K).value();
              for (var ie = 0, me = u ? i[ie].apply(this, X) : K; ++ie < u; )
                me = i[ie].call(this, me);
              return me;
            };
          });
        }
        function Xl(t, i, u, f, _, S, C, O, k, X) {
          var K = i & fe, ie = i & Y, me = i & B, Te = i & (q | M), Me = i & ne, Ke = me ? r : Is(t);
          function Ie() {
            for (var nt = arguments.length, st = Z(nt), si = nt; si--; )
              st[si] = arguments[si];
            if (Te)
              var Vn = Ra(Ie), li = Kr(st, Vn);
            if (f && (st = pf(st, f, _, Te)), S && (st = mf(st, S, C, Te)), nt -= li, Te && nt < X) {
              var Yt = lr(st, Vn);
              return Tf(
                t,
                i,
                Xl,
                Ie.placeholder,
                u,
                st,
                Yt,
                O,
                k,
                X - nt
              );
            }
            var $i = ie ? u : this, zr = me ? $i[t] : t;
            return nt = st.length, O ? st = Jg(st, O) : Me && nt > 1 && st.reverse(), K && k < nt && (st.length = k), this && this !== an && this instanceof Ie && (zr = Ke || Is(zr)), zr.apply($i, st);
          }
          return Ie;
        }
        function bf(t, i) {
          return function(u, f) {
            return ng(u, t, i(f), {});
          };
        }
        function Kl(t, i) {
          return function(u, f) {
            var _;
            if (u === r && f === r)
              return i;
            if (u !== r && (_ = u), f !== r) {
              if (_ === r)
                return f;
              typeof u == "string" || typeof f == "string" ? (u = oi(u), f = oi(f)) : (u = af(u), f = af(f)), _ = t(u, f);
            }
            return _;
          };
        }
        function xc(t) {
          return Dr(function(i) {
            return i = Tt(i, Lt(Oe())), tt(function(u) {
              var f = this;
              return t(i, function(_) {
                return Mt(_, f, u);
              });
            });
          });
        }
        function Ql(t, i) {
          i = i === r ? " " : oi(i);
          var u = i.length;
          if (u < 2)
            return u ? vc(i, t) : i;
          var f = vc(i, Zo(t / Cn(i)));
          return Qr(i) ? uo(An(f), 0, t).join("") : f.slice(0, t);
        }
        function Lg(t, i, u, f) {
          var _ = i & Y, S = Is(t);
          function C() {
            for (var O = -1, k = arguments.length, X = -1, K = f.length, ie = Z(K + k), me = this && this !== an && this instanceof C ? S : t; ++X < K; )
              ie[X] = f[X];
            for (; k--; )
              ie[X++] = arguments[++O];
            return Mt(me, _ ? u : this, ie);
          }
          return C;
        }
        function Sf(t) {
          return function(i, u, f) {
            return f && typeof f != "number" && Wn(i, u, f) && (u = f = r), i = Rr(i), u === r ? (u = i, i = 0) : u = Rr(u), f = f === r ? i < u ? 1 : -1 : Rr(f), pg(i, u, f, t);
          };
        }
        function eu(t) {
          return function(i, u) {
            return typeof i == "string" && typeof u == "string" || (i = Pi(i), u = Pi(u)), t(i, u);
          };
        }
        function Tf(t, i, u, f, _, S, C, O, k, X) {
          var K = i & q, ie = K ? C : r, me = K ? r : C, Te = K ? S : r, Me = K ? r : S;
          i |= K ? $ : ue, i &= ~(K ? ue : $), i & W || (i &= -4);
          var Ke = [
            t,
            i,
            _,
            Te,
            ie,
            Me,
            me,
            O,
            k,
            X
          ], Ie = u.apply(r, Ke);
          return Ic(t) && Ff(Ie, Ke), Ie.placeholder = f, Bf(Ie, t, i);
        }
        function Ec(t) {
          var i = Jt[t];
          return function(u, f) {
            if (u = Pi(u), f = f == null ? 0 : y(Ye(f), 292), f && n(u)) {
              var _ = (yt(u) + "e").split("e"), S = i(_[0] + "e" + (+_[1] + f));
              return _ = (yt(S) + "e").split("e"), +(_[0] + "e" + (+_[1] - f));
            }
            return i(u);
          };
        }
        var Og = Wt && 1 / jn(new Wt([, -0]))[1] == ke ? function(t) {
          return new Wt(t);
        } : $c;
        function xf(t) {
          return function(i) {
            var u = Ln(i);
            return u == Sn ? ws(i) : u == on ? Yu(i) : Dl(i, t(i));
          };
        }
        function kr(t, i, u, f, _, S, C, O) {
          var k = i & B;
          if (!k && typeof t != "function")
            throw new gn(m);
          var X = f ? f.length : 0;
          if (X || (i &= -97, f = _ = r), C = C === r ? C : p(Ye(C), 0), O = O === r ? O : Ye(O), X -= _ ? _.length : 0, i & ue) {
            var K = f, ie = _;
            f = _ = r;
          }
          var me = k ? r : Pc(t), Te = [
            t,
            i,
            u,
            f,
            _,
            K,
            ie,
            S,
            C,
            O
          ];
          if (me && Hg(Te, me), t = Te[0], i = Te[1], u = Te[2], f = Te[3], _ = Te[4], O = Te[9] = Te[9] === r ? k ? 0 : t.length : p(Te[9] - X, 0), !O && i & (q | M) && (i &= -25), !i || i == Y)
            var Me = Ag(t, i, u);
          else i == q || i == M ? Me = Pg(t, i, O) : (i == $ || i == (Y | $)) && !_.length ? Me = Lg(t, i, u, f) : Me = Xl.apply(r, Te);
          var Ke = me ? rf : Ff;
          return Bf(Ke(Me, Te), t, i);
        }
        function Ef(t, i, u, f) {
          return t === r || qi(t, no[u]) && !at.call(f, u) ? i : t;
        }
        function Cf(t, i, u, f, _, S) {
          return zt(t) && zt(i) && (S.set(i, t), $l(t, i, r, Cf, S), S.delete(i)), t;
        }
        function Mg(t) {
          return Fs(t) ? r : t;
        }
        function Af(t, i, u, f, _, S) {
          var C = u & z, O = t.length, k = i.length;
          if (O != k && !(C && k > O))
            return !1;
          var X = S.get(t), K = S.get(i);
          if (X && K)
            return X == i && K == t;
          var ie = -1, me = !0, Te = u & R ? new Jo() : r;
          for (S.set(t, i), S.set(i, t); ++ie < O; ) {
            var Me = t[ie], Ke = i[ie];
            if (f)
              var Ie = C ? f(Ke, Me, ie, i, t, S) : f(Me, Ke, ie, t, i, S);
            if (Ie !== r) {
              if (Ie)
                continue;
              me = !1;
              break;
            }
            if (Te) {
              if (!ko(i, function(nt, st) {
                if (!Bo(Te, st) && (Me === nt || _(Me, nt, u, f, S)))
                  return Te.push(st);
              })) {
                me = !1;
                break;
              }
            } else if (!(Me === Ke || _(Me, Ke, u, f, S))) {
              me = !1;
              break;
            }
          }
          return S.delete(t), S.delete(i), me;
        }
        function Ig(t, i, u, f, _, S, C) {
          switch (u) {
            case $n:
              if (t.byteLength != i.byteLength || t.byteOffset != i.byteOffset)
                return !1;
              t = t.buffer, i = i.buffer;
            case Di:
              return !(t.byteLength != i.byteLength || !S(new ur(t), new ur(i)));
            case nn:
            case Xi:
            case Ii:
              return qi(+t, +i);
            case rn:
              return t.name == i.name && t.message == i.message;
            case ni:
            case er:
              return t == i + "";
            case Sn:
              var O = ws;
            case on:
              var k = f & z;
              if (O || (O = jn), t.size != i.size && !k)
                return !1;
              var X = C.get(t);
              if (X)
                return X == i;
              f |= R, C.set(t, i);
              var K = Af(O(t), O(i), f, _, S, C);
              return C.delete(t), K;
            case tr:
              if (Ct)
                return Ct.call(t) == Ct.call(i);
          }
          return !1;
        }
        function kg(t, i, u, f, _, S) {
          var C = u & z, O = Cc(t), k = O.length, X = Cc(i), K = X.length;
          if (k != K && !C)
            return !1;
          for (var ie = k; ie--; ) {
            var me = O[ie];
            if (!(C ? me in i : at.call(i, me)))
              return !1;
          }
          var Te = S.get(t), Me = S.get(i);
          if (Te && Me)
            return Te == i && Me == t;
          var Ke = !0;
          S.set(t, i), S.set(i, t);
          for (var Ie = C; ++ie < k; ) {
            me = O[ie];
            var nt = t[me], st = i[me];
            if (f)
              var si = C ? f(st, nt, me, i, t, S) : f(nt, st, me, t, i, S);
            if (!(si === r ? nt === st || _(nt, st, u, f, S) : si)) {
              Ke = !1;
              break;
            }
            Ie || (Ie = me == "constructor");
          }
          if (Ke && !Ie) {
            var Vn = t.constructor, li = i.constructor;
            Vn != li && "constructor" in t && "constructor" in i && !(typeof Vn == "function" && Vn instanceof Vn && typeof li == "function" && li instanceof li) && (Ke = !1);
          }
          return S.delete(t), S.delete(i), Ke;
        }
        function Dr(t) {
          return Dc(kf(t, r, Vf), t + "");
        }
        function Cc(t) {
          return qd(t, hn, Oc);
        }
        function Ac(t) {
          return qd(t, Kn, Pf);
        }
        var Pc = sn ? function(t) {
          return sn.get(t);
        } : $c;
        function tu(t) {
          for (var i = t.name + "", u = ri[i], f = at.call(ri, i) ? u.length : 0; f--; ) {
            var _ = u[f], S = _.func;
            if (S == null || S == t)
              return _.name;
          }
          return i;
        }
        function Ra(t) {
          var i = at.call(w, "placeholder") ? w : t;
          return i.placeholder;
        }
        function Oe() {
          var t = w.iteratee || Hc;
          return t = t === Hc ? jd : t, arguments.length ? t(arguments[0], arguments[1]) : t;
        }
        function nu(t, i) {
          var u = t.__data__;
          return Wg(i) ? u[typeof i == "string" ? "string" : "hash"] : u.map;
        }
        function Lc(t) {
          for (var i = hn(t), u = i.length; u--; ) {
            var f = i[u], _ = t[f];
            i[u] = [f, _, Mf(_)];
          }
          return i;
        }
        function Xo(t, i) {
          var u = Ca(t, i);
          return Jd(u) ? u : r;
        }
        function Dg(t) {
          var i = at.call(t, cr), u = t[cr];
          try {
            t[cr] = r;
            var f = !0;
          } catch {
          }
          var _ = No.call(t);
          return f && (i ? t[cr] = u : delete t[cr]), _;
        }
        var Oc = Cs ? function(t) {
          return t == null ? [] : (t = _t(t), Gi(Cs(t), function(i) {
            return Es.call(t, i);
          }));
        } : Jc, Pf = Cs ? function(t) {
          for (var i = []; t; )
            Wi(i, Oc(t)), t = Lr(t);
          return i;
        } : Jc, Ln = Gn;
        (ve && Ln(new ve(new ArrayBuffer(1))) != $n || Ce && Ln(new Ce()) != Sn || Je && Ln(Je.resolve()) != wr || Wt && Ln(new Wt()) != on || It && Ln(new It()) != ki) && (Ln = function(t) {
          var i = Gn(t), u = i == kn ? t.constructor : r, f = u ? Ko(u) : "";
          if (f)
            switch (f) {
              case tc:
                return $n;
              case nc:
                return Sn;
              case ic:
                return wr;
              case Zl:
                return on;
              case rc:
                return ki;
            }
          return i;
        });
        function Fg(t, i, u) {
          for (var f = -1, _ = u.length; ++f < _; ) {
            var S = u[f], C = S.size;
            switch (S.type) {
              case "drop":
                t += C;
                break;
              case "dropRight":
                i -= C;
                break;
              case "take":
                i = y(i, t + C);
                break;
              case "takeRight":
                t = p(t, i - C);
                break;
            }
          }
          return { start: t, end: i };
        }
        function Bg(t) {
          var i = t.match(Bt);
          return i ? i[1].split(Fn) : [];
        }
        function Lf(t, i, u) {
          i = lo(i, t);
          for (var f = -1, _ = i.length, S = !1; ++f < _; ) {
            var C = hr(i[f]);
            if (!(S = t != null && u(t, C)))
              break;
            t = t[C];
          }
          return S || ++f != _ ? S : (_ = t == null ? 0 : t.length, !!_ && uu(_) && Fr(C, _) && (qe(t) || Qo(t)));
        }
        function Rg(t) {
          var i = t.length, u = new t.constructor(i);
          return i && typeof t[0] == "string" && at.call(t, "index") && (u.index = t.index, u.input = t.input), u;
        }
        function Of(t) {
          return typeof t.constructor == "function" && !ks(t) ? oo(Lr(t)) : {};
        }
        function zg(t, i, u) {
          var f = t.constructor;
          switch (i) {
            case Di:
              return Tc(t);
            case nn:
            case Xi:
              return new f(+t);
            case $n:
              return bg(t, u);
            case Co:
            case br:
            case Fi:
            case Ao:
            case Hr:
            case _i:
            case Bi:
            case Ri:
            case zi:
              return ff(t, u);
            case Sn:
              return new f();
            case Ii:
            case er:
              return new f(t);
            case ni:
              return Sg(t);
            case on:
              return new f();
            case tr:
              return Tg(t);
          }
        }
        function Ng(t, i) {
          var u = i.length;
          if (!u)
            return t;
          var f = u - 1;
          return i[f] = (u > 1 ? "& " : "") + i[f], i = i.join(u > 2 ? ", " : " "), t.replace(Se, `{
/* [wrapped with ` + i + `] */
`);
        }
        function Gg(t) {
          return qe(t) || Qo(t) || !!(Gl && t && t[Gl]);
        }
        function Fr(t, i) {
          var u = typeof t;
          return i = i ?? ye, !!i && (u == "number" || u != "symbol" && Tr.test(t)) && t > -1 && t % 1 == 0 && t < i;
        }
        function Wn(t, i, u) {
          if (!zt(u))
            return !1;
          var f = typeof i;
          return (f == "number" ? Xn(u) && Fr(i, u.length) : f == "string" && i in u) ? qi(u[i], t) : !1;
        }
        function Mc(t, i) {
          if (qe(t))
            return !1;
          var u = typeof t;
          return u == "number" || u == "symbol" || u == "boolean" || t == null || ai(t) ? !0 : cn.test(t) || !$t.test(t) || i != null && t in _t(i);
        }
        function Wg(t) {
          var i = typeof t;
          return i == "string" || i == "number" || i == "symbol" || i == "boolean" ? t !== "__proto__" : t === null;
        }
        function Ic(t) {
          var i = tu(t), u = w[i];
          if (typeof u != "function" || !(i in et.prototype))
            return !1;
          if (t === u)
            return !0;
          var f = Pc(u);
          return !!f && t === f[0];
        }
        function Vg(t) {
          return !!Pr && Pr in t;
        }
        var Zg = zo ? Br : jc;
        function ks(t) {
          var i = t && t.constructor, u = typeof i == "function" && i.prototype || no;
          return t === u;
        }
        function Mf(t) {
          return t === t && !zt(t);
        }
        function If(t, i) {
          return function(u) {
            return u == null ? !1 : u[t] === i && (i !== r || t in _t(u));
          };
        }
        function Ug(t) {
          var i = su(t, function(f) {
            return u.size === T && u.clear(), f;
          }), u = i.cache;
          return i;
        }
        function Hg(t, i) {
          var u = t[1], f = i[1], _ = u | f, S = _ < (Y | B | fe), C = f == fe && u == q || f == fe && u == Ee && t[7].length <= i[8] || f == (fe | Ee) && i[7].length <= i[8] && u == q;
          if (!(S || C))
            return t;
          f & Y && (t[2] = i[2], _ |= u & Y ? 0 : W);
          var O = i[3];
          if (O) {
            var k = t[3];
            t[3] = k ? pf(k, O, i[4]) : O, t[4] = k ? lr(t[3], x) : i[4];
          }
          return O = i[5], O && (k = t[5], t[5] = k ? mf(k, O, i[6]) : O, t[6] = k ? lr(t[5], x) : i[6]), O = i[7], O && (t[7] = O), f & fe && (t[8] = t[8] == null ? i[8] : y(t[8], i[8])), t[9] == null && (t[9] = i[9]), t[0] = i[0], t[1] = _, t;
        }
        function qg(t) {
          var i = [];
          if (t != null)
            for (var u in _t(t))
              i.push(u);
          return i;
        }
        function $g(t) {
          return No.call(t);
        }
        function kf(t, i, u) {
          return i = p(i === r ? t.length - 1 : i, 0), function() {
            for (var f = arguments, _ = -1, S = p(f.length - i, 0), C = Z(S); ++_ < S; )
              C[_] = f[i + _];
            _ = -1;
            for (var O = Z(i + 1); ++_ < i; )
              O[_] = f[_];
            return O[i] = u(C), Mt(t, this, O);
          };
        }
        function Df(t, i) {
          return i.length < 2 ? t : Yo(t, Ci(i, 0, -1));
        }
        function Jg(t, i) {
          for (var u = t.length, f = y(i.length, u), _ = Yn(t); f--; ) {
            var S = i[f];
            t[f] = Fr(S, u) ? _[S] : r;
          }
          return t;
        }
        function kc(t, i) {
          if (!(i === "constructor" && typeof t[i] == "function") && i != "__proto__")
            return t[i];
        }
        var Ff = Rf(rf), Ds = ec || function(t, i) {
          return an.setTimeout(t, i);
        }, Dc = Rf(vg);
        function Bf(t, i, u) {
          var f = i + "";
          return Dc(t, Ng(f, jg(Bg(f), u)));
        }
        function Rf(t) {
          var i = 0, u = 0;
          return function() {
            var f = A(), _ = ae - (f - u);
            if (u = f, _ > 0) {
              if (++i >= G)
                return arguments[0];
            } else
              i = 0;
            return t.apply(r, arguments);
          };
        }
        function iu(t, i) {
          var u = -1, f = t.length, _ = f - 1;
          for (i = i === r ? f : i; ++u < i; ) {
            var S = gc(u, _), C = t[S];
            t[S] = t[u], t[u] = C;
          }
          return t.length = i, t;
        }
        var zf = Ug(function(t) {
          var i = [];
          return t.charCodeAt(0) === 46 && i.push(""), t.replace(Qt, function(u, f, _, S) {
            i.push(_ ? S.replace(mn, "$1") : f || u);
          }), i;
        });
        function hr(t) {
          if (typeof t == "string" || ai(t))
            return t;
          var i = t + "";
          return i == "0" && 1 / t == -ke ? "-0" : i;
        }
        function Ko(t) {
          if (t != null) {
            try {
              return ka.call(t);
            } catch {
            }
            try {
              return t + "";
            } catch {
            }
          }
          return "";
        }
        function jg(t, i) {
          return zn(oe, function(u) {
            var f = "_." + u[0];
            i & u[1] && !Yr(t, f) && t.push(f);
          }), t.sort();
        }
        function Nf(t) {
          if (t instanceof et)
            return t.clone();
          var i = new Pn(t.__wrapped__, t.__chain__);
          return i.__actions__ = Yn(t.__actions__), i.__index__ = t.__index__, i.__values__ = t.__values__, i;
        }
        function Yg(t, i, u) {
          (u ? Wn(t, i, u) : i === r) ? i = 1 : i = p(Ye(i), 0);
          var f = t == null ? 0 : t.length;
          if (!f || i < 1)
            return [];
          for (var _ = 0, S = 0, C = Z(Zo(f / i)); _ < f; )
            C[S++] = Ci(t, _, _ += i);
          return C;
        }
        function Xg(t) {
          for (var i = -1, u = t == null ? 0 : t.length, f = 0, _ = []; ++i < u; ) {
            var S = t[i];
            S && (_[f++] = S);
          }
          return _;
        }
        function Kg() {
          var t = arguments.length;
          if (!t)
            return [];
          for (var i = Z(t - 1), u = arguments[0], f = t; f--; )
            i[f - 1] = arguments[f];
          return Wi(qe(u) ? Yn(u) : [u], vn(i, 1));
        }
        var Qg = tt(function(t, i) {
          return jt(t) ? Ps(t, vn(i, 1, jt, !0)) : [];
        }), ev = tt(function(t, i) {
          var u = Ai(i);
          return jt(u) && (u = r), jt(t) ? Ps(t, vn(i, 1, jt, !0), Oe(u, 2)) : [];
        }), tv = tt(function(t, i) {
          var u = Ai(i);
          return jt(u) && (u = r), jt(t) ? Ps(t, vn(i, 1, jt, !0), r, u) : [];
        });
        function nv(t, i, u) {
          var f = t == null ? 0 : t.length;
          return f ? (i = u || i === r ? 1 : Ye(i), Ci(t, i < 0 ? 0 : i, f)) : [];
        }
        function iv(t, i, u) {
          var f = t == null ? 0 : t.length;
          return f ? (i = u || i === r ? 1 : Ye(i), i = f - i, Ci(t, 0, i < 0 ? 0 : i)) : [];
        }
        function rv(t, i) {
          return t && t.length ? jl(t, Oe(i, 3), !0, !0) : [];
        }
        function ov(t, i) {
          return t && t.length ? jl(t, Oe(i, 3), !0) : [];
        }
        function av(t, i, u, f) {
          var _ = t == null ? 0 : t.length;
          return _ ? (u && typeof u != "number" && Wn(t, i, u) && (u = 0, f = _), Km(t, i, u, f)) : [];
        }
        function Gf(t, i, u) {
          var f = t == null ? 0 : t.length;
          if (!f)
            return -1;
          var _ = u == null ? 0 : Ye(u);
          return _ < 0 && (_ = p(f + _, 0)), Si(t, Oe(i, 3), _);
        }
        function Wf(t, i, u) {
          var f = t == null ? 0 : t.length;
          if (!f)
            return -1;
          var _ = f - 1;
          return u !== r && (_ = Ye(u), _ = u < 0 ? p(f + _, 0) : y(_, f - 1)), Si(t, Oe(i, 3), _, !0);
        }
        function Vf(t) {
          var i = t == null ? 0 : t.length;
          return i ? vn(t, 1) : [];
        }
        function sv(t) {
          var i = t == null ? 0 : t.length;
          return i ? vn(t, ke) : [];
        }
        function lv(t, i) {
          var u = t == null ? 0 : t.length;
          return u ? (i = i === r ? 1 : Ye(i), vn(t, i)) : [];
        }
        function uv(t) {
          for (var i = -1, u = t == null ? 0 : t.length, f = {}; ++i < u; ) {
            var _ = t[i];
            f[_[0]] = _[1];
          }
          return f;
        }
        function Zf(t) {
          return t && t.length ? t[0] : r;
        }
        function cv(t, i, u) {
          var f = t == null ? 0 : t.length;
          if (!f)
            return -1;
          var _ = u == null ? 0 : Ye(u);
          return _ < 0 && (_ = p(f + _, 0)), Xr(t, i, _);
        }
        function dv(t) {
          var i = t == null ? 0 : t.length;
          return i ? Ci(t, 0, -1) : [];
        }
        var fv = tt(function(t) {
          var i = Tt(t, bc);
          return i.length && i[0] === t[0] ? dc(i) : [];
        }), hv = tt(function(t) {
          var i = Ai(t), u = Tt(t, bc);
          return i === Ai(u) ? i = r : u.pop(), u.length && u[0] === t[0] ? dc(u, Oe(i, 2)) : [];
        }), pv = tt(function(t) {
          var i = Ai(t), u = Tt(t, bc);
          return i = typeof i == "function" ? i : r, i && u.pop(), u.length && u[0] === t[0] ? dc(u, r, i) : [];
        });
        function mv(t, i) {
          return t == null ? "" : s.call(t, i);
        }
        function Ai(t) {
          var i = t == null ? 0 : t.length;
          return i ? t[i - 1] : r;
        }
        function gv(t, i, u) {
          var f = t == null ? 0 : t.length;
          if (!f)
            return -1;
          var _ = f;
          return u !== r && (_ = Ye(u), _ = _ < 0 ? p(f + _, 0) : y(_, f - 1)), i === i ? Xu(t, i, _) : Si(t, Nn, _, !0);
        }
        function vv(t, i) {
          return t && t.length ? Qd(t, Ye(i)) : r;
        }
        var _v = tt(Uf);
        function Uf(t, i) {
          return t && t.length && i && i.length ? mc(t, i) : t;
        }
        function yv(t, i, u) {
          return t && t.length && i && i.length ? mc(t, i, Oe(u, 2)) : t;
        }
        function wv(t, i, u) {
          return t && t.length && i && i.length ? mc(t, i, r, u) : t;
        }
        var bv = Dr(function(t, i) {
          var u = t == null ? 0 : t.length, f = sc(t, i);
          return nf(t, Tt(i, function(_) {
            return Fr(_, u) ? +_ : _;
          }).sort(hf)), f;
        });
        function Sv(t, i) {
          var u = [];
          if (!(t && t.length))
            return u;
          var f = -1, _ = [], S = t.length;
          for (i = Oe(i, 3); ++f < S; ) {
            var C = t[f];
            i(C, f, t) && (u.push(C), _.push(f));
          }
          return nf(t, _), u;
        }
        function Fc(t) {
          return t == null ? t : ee.call(t);
        }
        function Tv(t, i, u) {
          var f = t == null ? 0 : t.length;
          return f ? (u && typeof u != "number" && Wn(t, i, u) ? (i = 0, u = f) : (i = i == null ? 0 : Ye(i), u = u === r ? f : Ye(u)), Ci(t, i, u)) : [];
        }
        function xv(t, i) {
          return Jl(t, i);
        }
        function Ev(t, i, u) {
          return _c(t, i, Oe(u, 2));
        }
        function Cv(t, i) {
          var u = t == null ? 0 : t.length;
          if (u) {
            var f = Jl(t, i);
            if (f < u && qi(t[f], i))
              return f;
          }
          return -1;
        }
        function Av(t, i) {
          return Jl(t, i, !0);
        }
        function Pv(t, i, u) {
          return _c(t, i, Oe(u, 2), !0);
        }
        function Lv(t, i) {
          var u = t == null ? 0 : t.length;
          if (u) {
            var f = Jl(t, i, !0) - 1;
            if (qi(t[f], i))
              return f;
          }
          return -1;
        }
        function Ov(t) {
          return t && t.length ? of(t) : [];
        }
        function Mv(t, i) {
          return t && t.length ? of(t, Oe(i, 2)) : [];
        }
        function Iv(t) {
          var i = t == null ? 0 : t.length;
          return i ? Ci(t, 1, i) : [];
        }
        function kv(t, i, u) {
          return t && t.length ? (i = u || i === r ? 1 : Ye(i), Ci(t, 0, i < 0 ? 0 : i)) : [];
        }
        function Dv(t, i, u) {
          var f = t == null ? 0 : t.length;
          return f ? (i = u || i === r ? 1 : Ye(i), i = f - i, Ci(t, i < 0 ? 0 : i, f)) : [];
        }
        function Fv(t, i) {
          return t && t.length ? jl(t, Oe(i, 3), !1, !0) : [];
        }
        function Bv(t, i) {
          return t && t.length ? jl(t, Oe(i, 3)) : [];
        }
        var Rv = tt(function(t) {
          return so(vn(t, 1, jt, !0));
        }), zv = tt(function(t) {
          var i = Ai(t);
          return jt(i) && (i = r), so(vn(t, 1, jt, !0), Oe(i, 2));
        }), Nv = tt(function(t) {
          var i = Ai(t);
          return i = typeof i == "function" ? i : r, so(vn(t, 1, jt, !0), r, i);
        });
        function Gv(t) {
          return t && t.length ? so(t) : [];
        }
        function Wv(t, i) {
          return t && t.length ? so(t, Oe(i, 2)) : [];
        }
        function Vv(t, i) {
          return i = typeof i == "function" ? i : r, t && t.length ? so(t, r, i) : [];
        }
        function Bc(t) {
          if (!(t && t.length))
            return [];
          var i = 0;
          return t = Gi(t, function(u) {
            if (jt(u))
              return i = p(u.length, i), !0;
          }), ys(i, function(u) {
            return Tt(t, xa(u));
          });
        }
        function Hf(t, i) {
          if (!(t && t.length))
            return [];
          var u = Bc(t);
          return i == null ? u : Tt(u, function(f) {
            return Mt(i, r, f);
          });
        }
        var Zv = tt(function(t, i) {
          return jt(t) ? Ps(t, i) : [];
        }), Uv = tt(function(t) {
          return wc(Gi(t, jt));
        }), Hv = tt(function(t) {
          var i = Ai(t);
          return jt(i) && (i = r), wc(Gi(t, jt), Oe(i, 2));
        }), qv = tt(function(t) {
          var i = Ai(t);
          return i = typeof i == "function" ? i : r, wc(Gi(t, jt), r, i);
        }), $v = tt(Bc);
        function Jv(t, i) {
          return uf(t || [], i || [], As);
        }
        function jv(t, i) {
          return uf(t || [], i || [], Ms);
        }
        var Yv = tt(function(t) {
          var i = t.length, u = i > 1 ? t[i - 1] : r;
          return u = typeof u == "function" ? (t.pop(), u) : r, Hf(t, u);
        });
        function qf(t) {
          var i = w(t);
          return i.__chain__ = !0, i;
        }
        function Xv(t, i) {
          return i(t), t;
        }
        function ru(t, i) {
          return i(t);
        }
        var Kv = Dr(function(t) {
          var i = t.length, u = i ? t[0] : 0, f = this.__wrapped__, _ = function(S) {
            return sc(S, t);
          };
          return i > 1 || this.__actions__.length || !(f instanceof et) || !Fr(u) ? this.thru(_) : (f = f.slice(u, +u + (i ? 1 : 0)), f.__actions__.push({
            func: ru,
            args: [_],
            thisArg: r
          }), new Pn(f, this.__chain__).thru(function(S) {
            return i && !S.length && S.push(r), S;
          }));
        });
        function Qv() {
          return qf(this);
        }
        function e0() {
          return new Pn(this.value(), this.__chain__);
        }
        function t0() {
          this.__values__ === r && (this.__values__ = ah(this.value()));
          var t = this.__index__ >= this.__values__.length, i = t ? r : this.__values__[this.__index__++];
          return { done: t, value: i };
        }
        function n0() {
          return this;
        }
        function i0(t) {
          for (var i, u = this; u instanceof Da; ) {
            var f = Nf(u);
            f.__index__ = 0, f.__values__ = r, i ? _.__wrapped__ = f : i = f;
            var _ = f;
            u = u.__wrapped__;
          }
          return _.__wrapped__ = t, i;
        }
        function r0() {
          var t = this.__wrapped__;
          if (t instanceof et) {
            var i = t;
            return this.__actions__.length && (i = new et(this)), i = i.reverse(), i.__actions__.push({
              func: ru,
              args: [Fc],
              thisArg: r
            }), new Pn(i, this.__chain__);
          }
          return this.thru(Fc);
        }
        function o0() {
          return lf(this.__wrapped__, this.__actions__);
        }
        var a0 = Yl(function(t, i, u) {
          at.call(t, u) ? ++t[u] : Ir(t, u, 1);
        });
        function s0(t, i, u) {
          var f = qe(t) ? fs : Xm;
          return u && Wn(t, i, u) && (i = r), f(t, Oe(i, 3));
        }
        function l0(t, i) {
          var u = qe(t) ? Gi : Ud;
          return u(t, Oe(i, 3));
        }
        var u0 = yf(Gf), c0 = yf(Wf);
        function d0(t, i) {
          return vn(ou(t, i), 1);
        }
        function f0(t, i) {
          return vn(ou(t, i), ke);
        }
        function h0(t, i, u) {
          return u = u === r ? 1 : Ye(u), vn(ou(t, i), u);
        }
        function $f(t, i) {
          var u = qe(t) ? zn : ao;
          return u(t, Oe(i, 3));
        }
        function Jf(t, i) {
          var u = qe(t) ? or : Zd;
          return u(t, Oe(i, 3));
        }
        var p0 = Yl(function(t, i, u) {
          at.call(t, u) ? t[u].push(i) : Ir(t, u, [i]);
        });
        function m0(t, i, u, f) {
          t = Xn(t) ? t : Na(t), u = u && !f ? Ye(u) : 0;
          var _ = t.length;
          return u < 0 && (u = p(_ + u, 0)), cu(t) ? u <= _ && t.indexOf(i, u) > -1 : !!_ && Xr(t, i, u) > -1;
        }
        var g0 = tt(function(t, i, u) {
          var f = -1, _ = typeof i == "function", S = Xn(t) ? Z(t.length) : [];
          return ao(t, function(C) {
            S[++f] = _ ? Mt(i, C, u) : Ls(C, i, u);
          }), S;
        }), v0 = Yl(function(t, i, u) {
          Ir(t, u, i);
        });
        function ou(t, i) {
          var u = qe(t) ? Tt : Yd;
          return u(t, Oe(i, 3));
        }
        function _0(t, i, u, f) {
          return t == null ? [] : (qe(i) || (i = i == null ? [] : [i]), u = f ? r : u, qe(u) || (u = u == null ? [] : [u]), ef(t, i, u));
        }
        var y0 = Yl(function(t, i, u) {
          t[u ? 0 : 1].push(i);
        }, function() {
          return [[], []];
        });
        function w0(t, i, u) {
          var f = qe(t) ? ps : Ea, _ = arguments.length < 3;
          return f(t, Oe(i, 4), u, _, ao);
        }
        function b0(t, i, u) {
          var f = qe(t) ? $u : Ea, _ = arguments.length < 3;
          return f(t, Oe(i, 4), u, _, Zd);
        }
        function S0(t, i) {
          var u = qe(t) ? Gi : Ud;
          return u(t, lu(Oe(i, 3)));
        }
        function T0(t) {
          var i = qe(t) ? Nd : mg;
          return i(t);
        }
        function x0(t, i, u) {
          (u ? Wn(t, i, u) : i === r) ? i = 1 : i = Ye(i);
          var f = qe(t) ? qm : gg;
          return f(t, i);
        }
        function E0(t) {
          var i = qe(t) ? $m : _g;
          return i(t);
        }
        function C0(t) {
          if (t == null)
            return 0;
          if (Xn(t))
            return cu(t) ? Cn(t) : t.length;
          var i = Ln(t);
          return i == Sn || i == on ? t.size : hc(t).length;
        }
        function A0(t, i, u) {
          var f = qe(t) ? ko : yg;
          return u && Wn(t, i, u) && (i = r), f(t, Oe(i, 3));
        }
        var P0 = tt(function(t, i) {
          if (t == null)
            return [];
          var u = i.length;
          return u > 1 && Wn(t, i[0], i[1]) ? i = [] : u > 2 && Wn(i[0], i[1], i[2]) && (i = [i[0]]), ef(t, vn(i, 1), []);
        }), au = Vl || function() {
          return an.Date.now();
        };
        function L0(t, i) {
          if (typeof i != "function")
            throw new gn(m);
          return t = Ye(t), function() {
            if (--t < 1)
              return i.apply(this, arguments);
          };
        }
        function jf(t, i, u) {
          return i = u ? r : i, i = t && i == null ? t.length : i, kr(t, fe, r, r, r, r, i);
        }
        function Yf(t, i) {
          var u;
          if (typeof i != "function")
            throw new gn(m);
          return t = Ye(t), function() {
            return --t > 0 && (u = i.apply(this, arguments)), t <= 1 && (i = r), u;
          };
        }
        var Rc = tt(function(t, i, u) {
          var f = Y;
          if (u.length) {
            var _ = lr(u, Ra(Rc));
            f |= $;
          }
          return kr(t, f, i, u, _);
        }), Xf = tt(function(t, i, u) {
          var f = Y | B;
          if (u.length) {
            var _ = lr(u, Ra(Xf));
            f |= $;
          }
          return kr(i, f, t, u, _);
        });
        function Kf(t, i, u) {
          i = u ? r : i;
          var f = kr(t, q, r, r, r, r, r, i);
          return f.placeholder = Kf.placeholder, f;
        }
        function Qf(t, i, u) {
          i = u ? r : i;
          var f = kr(t, M, r, r, r, r, r, i);
          return f.placeholder = Qf.placeholder, f;
        }
        function eh(t, i, u) {
          var f, _, S, C, O, k, X = 0, K = !1, ie = !1, me = !0;
          if (typeof t != "function")
            throw new gn(m);
          i = Pi(i) || 0, zt(u) && (K = !!u.leading, ie = "maxWait" in u, S = ie ? p(Pi(u.maxWait) || 0, i) : S, me = "trailing" in u ? !!u.trailing : me);
          function Te(Yt) {
            var $i = f, zr = _;
            return f = _ = r, X = Yt, C = t.apply(zr, $i), C;
          }
          function Me(Yt) {
            return X = Yt, O = Ds(nt, i), K ? Te(Yt) : C;
          }
          function Ke(Yt) {
            var $i = Yt - k, zr = Yt - X, yh = i - $i;
            return ie ? y(yh, S - zr) : yh;
          }
          function Ie(Yt) {
            var $i = Yt - k, zr = Yt - X;
            return k === r || $i >= i || $i < 0 || ie && zr >= S;
          }
          function nt() {
            var Yt = au();
            if (Ie(Yt))
              return st(Yt);
            O = Ds(nt, Ke(Yt));
          }
          function st(Yt) {
            return O = r, me && f ? Te(Yt) : (f = _ = r, C);
          }
          function si() {
            O !== r && cf(O), X = 0, f = k = _ = O = r;
          }
          function Vn() {
            return O === r ? C : st(au());
          }
          function li() {
            var Yt = au(), $i = Ie(Yt);
            if (f = arguments, _ = this, k = Yt, $i) {
              if (O === r)
                return Me(k);
              if (ie)
                return cf(O), O = Ds(nt, i), Te(k);
            }
            return O === r && (O = Ds(nt, i)), C;
          }
          return li.cancel = si, li.flush = Vn, li;
        }
        var O0 = tt(function(t, i) {
          return Vd(t, 1, i);
        }), M0 = tt(function(t, i, u) {
          return Vd(t, Pi(i) || 0, u);
        });
        function I0(t) {
          return kr(t, ne);
        }
        function su(t, i) {
          if (typeof t != "function" || i != null && typeof i != "function")
            throw new gn(m);
          var u = function() {
            var f = arguments, _ = i ? i.apply(this, f) : f[0], S = u.cache;
            if (S.has(_))
              return S.get(_);
            var C = t.apply(this, f);
            return u.cache = S.set(_, C) || S, C;
          };
          return u.cache = new (su.Cache || Mr)(), u;
        }
        su.Cache = Mr;
        function lu(t) {
          if (typeof t != "function")
            throw new gn(m);
          return function() {
            var i = arguments;
            switch (i.length) {
              case 0:
                return !t.call(this);
              case 1:
                return !t.call(this, i[0]);
              case 2:
                return !t.call(this, i[0], i[1]);
              case 3:
                return !t.call(this, i[0], i[1], i[2]);
            }
            return !t.apply(this, i);
          };
        }
        function k0(t) {
          return Yf(2, t);
        }
        var D0 = wg(function(t, i) {
          i = i.length == 1 && qe(i[0]) ? Tt(i[0], Lt(Oe())) : Tt(vn(i, 1), Lt(Oe()));
          var u = i.length;
          return tt(function(f) {
            for (var _ = -1, S = y(f.length, u); ++_ < S; )
              f[_] = i[_].call(this, f[_]);
            return Mt(t, this, f);
          });
        }), zc = tt(function(t, i) {
          var u = lr(i, Ra(zc));
          return kr(t, $, r, i, u);
        }), th = tt(function(t, i) {
          var u = lr(i, Ra(th));
          return kr(t, ue, r, i, u);
        }), F0 = Dr(function(t, i) {
          return kr(t, Ee, r, r, r, i);
        });
        function B0(t, i) {
          if (typeof t != "function")
            throw new gn(m);
          return i = i === r ? i : Ye(i), tt(t, i);
        }
        function R0(t, i) {
          if (typeof t != "function")
            throw new gn(m);
          return i = i == null ? 0 : p(Ye(i), 0), tt(function(u) {
            var f = u[i], _ = uo(u, 0, i);
            return f && Wi(_, f), Mt(t, this, _);
          });
        }
        function z0(t, i, u) {
          var f = !0, _ = !0;
          if (typeof t != "function")
            throw new gn(m);
          return zt(u) && (f = "leading" in u ? !!u.leading : f, _ = "trailing" in u ? !!u.trailing : _), eh(t, i, {
            leading: f,
            maxWait: i,
            trailing: _
          });
        }
        function N0(t) {
          return jf(t, 1);
        }
        function G0(t, i) {
          return zc(Sc(i), t);
        }
        function W0() {
          if (!arguments.length)
            return [];
          var t = arguments[0];
          return qe(t) ? t : [t];
        }
        function V0(t) {
          return Ei(t, P);
        }
        function Z0(t, i) {
          return i = typeof i == "function" ? i : r, Ei(t, P, i);
        }
        function U0(t) {
          return Ei(t, b | P);
        }
        function H0(t, i) {
          return i = typeof i == "function" ? i : r, Ei(t, b | P, i);
        }
        function q0(t, i) {
          return i == null || Wd(t, i, hn(i));
        }
        function qi(t, i) {
          return t === i || t !== t && i !== i;
        }
        var $0 = eu(cc), J0 = eu(function(t, i) {
          return t >= i;
        }), Qo = $d(/* @__PURE__ */ (function() {
          return arguments;
        })()) ? $d : function(t) {
          return Vt(t) && at.call(t, "callee") && !Es.call(t, "callee");
        }, qe = Z.isArray, j0 = Pl ? Lt(Pl) : ig;
        function Xn(t) {
          return t != null && uu(t.length) && !Br(t);
        }
        function jt(t) {
          return Vt(t) && Xn(t);
        }
        function Y0(t) {
          return t === !0 || t === !1 || Vt(t) && Gn(t) == nn;
        }
        var co = e || jc, X0 = ds ? Lt(ds) : rg;
        function K0(t) {
          return Vt(t) && t.nodeType === 1 && !Fs(t);
        }
        function Q0(t) {
          if (t == null)
            return !0;
          if (Xn(t) && (qe(t) || typeof t == "string" || typeof t.splice == "function" || co(t) || za(t) || Qo(t)))
            return !t.length;
          var i = Ln(t);
          if (i == Sn || i == on)
            return !t.size;
          if (ks(t))
            return !hc(t).length;
          for (var u in t)
            if (at.call(t, u))
              return !1;
          return !0;
        }
        function e_(t, i) {
          return Os(t, i);
        }
        function t_(t, i, u) {
          u = typeof u == "function" ? u : r;
          var f = u ? u(t, i) : r;
          return f === r ? Os(t, i, r, u) : !!f;
        }
        function Nc(t) {
          if (!Vt(t))
            return !1;
          var i = Gn(t);
          return i == rn || i == To || typeof t.message == "string" && typeof t.name == "string" && !Fs(t);
        }
        function n_(t) {
          return typeof t == "number" && n(t);
        }
        function Br(t) {
          if (!zt(t))
            return !1;
          var i = Gn(t);
          return i == ti || i == Ki || i == pn || i == Qi;
        }
        function nh(t) {
          return typeof t == "number" && t == Ye(t);
        }
        function uu(t) {
          return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ye;
        }
        function zt(t) {
          var i = typeof t;
          return t != null && (i == "object" || i == "function");
        }
        function Vt(t) {
          return t != null && typeof t == "object";
        }
        var ih = Ll ? Lt(Ll) : ag;
        function i_(t, i) {
          return t === i || fc(t, i, Lc(i));
        }
        function r_(t, i, u) {
          return u = typeof u == "function" ? u : r, fc(t, i, Lc(i), u);
        }
        function o_(t) {
          return rh(t) && t != +t;
        }
        function a_(t) {
          if (Zg(t))
            throw new We(h);
          return Jd(t);
        }
        function s_(t) {
          return t === null;
        }
        function l_(t) {
          return t == null;
        }
        function rh(t) {
          return typeof t == "number" || Vt(t) && Gn(t) == Ii;
        }
        function Fs(t) {
          if (!Vt(t) || Gn(t) != kn)
            return !1;
          var i = Lr(t);
          if (i === null)
            return !0;
          var u = at.call(i, "constructor") && i.constructor;
          return typeof u == "function" && u instanceof u && ka.call(u) == zl;
        }
        var Gc = Ol ? Lt(Ol) : sg;
        function u_(t) {
          return nh(t) && t >= -ye && t <= ye;
        }
        var oh = Ta ? Lt(Ta) : lg;
        function cu(t) {
          return typeof t == "string" || !qe(t) && Vt(t) && Gn(t) == er;
        }
        function ai(t) {
          return typeof t == "symbol" || Vt(t) && Gn(t) == tr;
        }
        var za = Ml ? Lt(Ml) : ug;
        function c_(t) {
          return t === r;
        }
        function d_(t) {
          return Vt(t) && Ln(t) == ki;
        }
        function f_(t) {
          return Vt(t) && Gn(t) == Eo;
        }
        var h_ = eu(pc), p_ = eu(function(t, i) {
          return t <= i;
        });
        function ah(t) {
          if (!t)
            return [];
          if (Xn(t))
            return cu(t) ? An(t) : Yn(t);
          if (ro && t[ro])
            return Aa(t[ro]());
          var i = Ln(t), u = i == Sn ? ws : i == on ? jn : Na;
          return u(t);
        }
        function Rr(t) {
          if (!t)
            return t === 0 ? t : 0;
          if (t = Pi(t), t === ke || t === -ke) {
            var i = t < 0 ? -1 : 1;
            return i * Kt;
          }
          return t === t ? t : 0;
        }
        function Ye(t) {
          var i = Rr(t), u = i % 1;
          return i === i ? u ? i - u : i : 0;
        }
        function sh(t) {
          return t ? jo(Ye(t), 0, he) : 0;
        }
        function Pi(t) {
          if (typeof t == "number")
            return t;
          if (ai(t))
            return j;
          if (zt(t)) {
            var i = typeof t.valueOf == "function" ? t.valueOf() : t;
            t = zt(i) ? i + "" : i;
          }
          if (typeof t != "string")
            return t === 0 ? t : +t;
          t = Fl(t);
          var u = ir.test(t);
          return u || xn.test(t) ? Hu(t.slice(2), u ? 2 : 8) : qr.test(t) ? j : +t;
        }
        function lh(t) {
          return fr(t, Kn(t));
        }
        function m_(t) {
          return t ? jo(Ye(t), -ye, ye) : t === 0 ? t : 0;
        }
        function yt(t) {
          return t == null ? "" : oi(t);
        }
        var g_ = Fa(function(t, i) {
          if (ks(i) || Xn(i)) {
            fr(i, hn(i), t);
            return;
          }
          for (var u in i)
            at.call(i, u) && As(t, u, i[u]);
        }), uh = Fa(function(t, i) {
          fr(i, Kn(i), t);
        }), du = Fa(function(t, i, u, f) {
          fr(i, Kn(i), t, f);
        }), v_ = Fa(function(t, i, u, f) {
          fr(i, hn(i), t, f);
        }), __ = Dr(sc);
        function y_(t, i) {
          var u = oo(t);
          return i == null ? u : Gd(u, i);
        }
        var w_ = tt(function(t, i) {
          t = _t(t);
          var u = -1, f = i.length, _ = f > 2 ? i[2] : r;
          for (_ && Wn(i[0], i[1], _) && (f = 1); ++u < f; )
            for (var S = i[u], C = Kn(S), O = -1, k = C.length; ++O < k; ) {
              var X = C[O], K = t[X];
              (K === r || qi(K, no[X]) && !at.call(t, X)) && (t[X] = S[X]);
            }
          return t;
        }), b_ = tt(function(t) {
          return t.push(r, Cf), Mt(ch, r, t);
        });
        function S_(t, i) {
          return Do(t, Oe(i, 3), dr);
        }
        function T_(t, i) {
          return Do(t, Oe(i, 3), uc);
        }
        function x_(t, i) {
          return t == null ? t : lc(t, Oe(i, 3), Kn);
        }
        function E_(t, i) {
          return t == null ? t : Hd(t, Oe(i, 3), Kn);
        }
        function C_(t, i) {
          return t && dr(t, Oe(i, 3));
        }
        function A_(t, i) {
          return t && uc(t, Oe(i, 3));
        }
        function P_(t) {
          return t == null ? [] : ql(t, hn(t));
        }
        function L_(t) {
          return t == null ? [] : ql(t, Kn(t));
        }
        function Wc(t, i, u) {
          var f = t == null ? r : Yo(t, i);
          return f === r ? u : f;
        }
        function O_(t, i) {
          return t != null && Lf(t, i, Qm);
        }
        function Vc(t, i) {
          return t != null && Lf(t, i, eg);
        }
        var M_ = bf(function(t, i, u) {
          i != null && typeof i.toString != "function" && (i = No.call(i)), t[i] = u;
        }, Uc(Qn)), I_ = bf(function(t, i, u) {
          i != null && typeof i.toString != "function" && (i = No.call(i)), at.call(t, i) ? t[i].push(u) : t[i] = [u];
        }, Oe), k_ = tt(Ls);
        function hn(t) {
          return Xn(t) ? zd(t) : hc(t);
        }
        function Kn(t) {
          return Xn(t) ? zd(t, !0) : cg(t);
        }
        function D_(t, i) {
          var u = {};
          return i = Oe(i, 3), dr(t, function(f, _, S) {
            Ir(u, i(f, _, S), f);
          }), u;
        }
        function F_(t, i) {
          var u = {};
          return i = Oe(i, 3), dr(t, function(f, _, S) {
            Ir(u, _, i(f, _, S));
          }), u;
        }
        var B_ = Fa(function(t, i, u) {
          $l(t, i, u);
        }), ch = Fa(function(t, i, u, f) {
          $l(t, i, u, f);
        }), R_ = Dr(function(t, i) {
          var u = {};
          if (t == null)
            return u;
          var f = !1;
          i = Tt(i, function(S) {
            return S = lo(S, t), f || (f = S.length > 1), S;
          }), fr(t, Ac(t), u), f && (u = Ei(u, b | E | P, Mg));
          for (var _ = i.length; _--; )
            yc(u, i[_]);
          return u;
        });
        function z_(t, i) {
          return dh(t, lu(Oe(i)));
        }
        var N_ = Dr(function(t, i) {
          return t == null ? {} : fg(t, i);
        });
        function dh(t, i) {
          if (t == null)
            return {};
          var u = Tt(Ac(t), function(f) {
            return [f];
          });
          return i = Oe(i), tf(t, u, function(f, _) {
            return i(f, _[0]);
          });
        }
        function G_(t, i, u) {
          i = lo(i, t);
          var f = -1, _ = i.length;
          for (_ || (_ = 1, t = r); ++f < _; ) {
            var S = t == null ? r : t[hr(i[f])];
            S === r && (f = _, S = u), t = Br(S) ? S.call(t) : S;
          }
          return t;
        }
        function W_(t, i, u) {
          return t == null ? t : Ms(t, i, u);
        }
        function V_(t, i, u, f) {
          return f = typeof f == "function" ? f : r, t == null ? t : Ms(t, i, u, f);
        }
        var fh = xf(hn), hh = xf(Kn);
        function Z_(t, i, u) {
          var f = qe(t), _ = f || co(t) || za(t);
          if (i = Oe(i, 4), u == null) {
            var S = t && t.constructor;
            _ ? u = f ? new S() : [] : zt(t) ? u = Br(S) ? oo(Lr(t)) : {} : u = {};
          }
          return (_ ? zn : dr)(t, function(C, O, k) {
            return i(u, C, O, k);
          }), u;
        }
        function U_(t, i) {
          return t == null ? !0 : yc(t, i);
        }
        function H_(t, i, u) {
          return t == null ? t : sf(t, i, Sc(u));
        }
        function q_(t, i, u, f) {
          return f = typeof f == "function" ? f : r, t == null ? t : sf(t, i, Sc(u), f);
        }
        function Na(t) {
          return t == null ? [] : ar(t, hn(t));
        }
        function $_(t) {
          return t == null ? [] : ar(t, Kn(t));
        }
        function J_(t, i, u) {
          return u === r && (u = i, i = r), u !== r && (u = Pi(u), u = u === u ? u : 0), i !== r && (i = Pi(i), i = i === i ? i : 0), jo(Pi(t), i, u);
        }
        function j_(t, i, u) {
          return i = Rr(i), u === r ? (u = i, i = 0) : u = Rr(u), t = Pi(t), tg(t, i, u);
        }
        function Y_(t, i, u) {
          if (u && typeof u != "boolean" && Wn(t, i, u) && (i = u = r), u === r && (typeof i == "boolean" ? (u = i, i = r) : typeof t == "boolean" && (u = t, t = r)), t === r && i === r ? (t = 0, i = 1) : (t = Rr(t), i === r ? (i = t, t = 0) : i = Rr(i)), t > i) {
            var f = t;
            t = i, i = f;
          }
          if (u || t % 1 || i % 1) {
            var _ = V();
            return y(t + _ * (i - t + ss("1e-" + ((_ + "").length - 1))), i);
          }
          return gc(t, i);
        }
        var X_ = Ba(function(t, i, u) {
          return i = i.toLowerCase(), t + (u ? ph(i) : i);
        });
        function ph(t) {
          return Zc(yt(t).toLowerCase());
        }
        function mh(t) {
          return t = yt(t), t && t.replace(da, ju).replace(xl, "");
        }
        function K_(t, i, u) {
          t = yt(t), i = oi(i);
          var f = t.length;
          u = u === r ? f : jo(Ye(u), 0, f);
          var _ = u;
          return u -= i.length, u >= 0 && t.slice(u, _) == i;
        }
        function Q_(t) {
          return t = yt(t), t && Fe.test(t) ? t.replace(pe, Ro) : t;
        }
        function ey(t) {
          return t = yt(t), t && nr.test(t) ? t.replace(Dn, "\\$&") : t;
        }
        var ty = Ba(function(t, i, u) {
          return t + (u ? "-" : "") + i.toLowerCase();
        }), ny = Ba(function(t, i, u) {
          return t + (u ? " " : "") + i.toLowerCase();
        }), iy = _f("toLowerCase");
        function ry(t, i, u) {
          t = yt(t), i = Ye(i);
          var f = i ? Cn(t) : 0;
          if (!i || f >= i)
            return t;
          var _ = (i - f) / 2;
          return Ql(Uo(_), u) + t + Ql(Zo(_), u);
        }
        function oy(t, i, u) {
          t = yt(t), i = Ye(i);
          var f = i ? Cn(t) : 0;
          return i && f < i ? t + Ql(i - f, u) : t;
        }
        function ay(t, i, u) {
          t = yt(t), i = Ye(i);
          var f = i ? Cn(t) : 0;
          return i && f < i ? Ql(i - f, u) + t : t;
        }
        function sy(t, i, u) {
          return u || i == null ? i = 0 : i && (i = +i), F(yt(t).replace(Sr, ""), i || 0);
        }
        function ly(t, i, u) {
          return (u ? Wn(t, i, u) : i === r) ? i = 1 : i = Ye(i), vc(yt(t), i);
        }
        function uy() {
          var t = arguments, i = yt(t[0]);
          return t.length < 3 ? i : i.replace(t[1], t[2]);
        }
        var cy = Ba(function(t, i, u) {
          return t + (u ? "_" : "") + i.toLowerCase();
        });
        function dy(t, i, u) {
          return u && typeof u != "number" && Wn(t, i, u) && (i = u = r), u = u === r ? he : u >>> 0, u ? (t = yt(t), t && (typeof i == "string" || i != null && !Gc(i)) && (i = oi(i), !i && Qr(t)) ? uo(An(t), 0, u) : t.split(i, u)) : [];
        }
        var fy = Ba(function(t, i, u) {
          return t + (u ? " " : "") + Zc(i);
        });
        function hy(t, i, u) {
          return t = yt(t), u = u == null ? 0 : jo(Ye(u), 0, t.length), i = oi(i), t.slice(u, u + i.length) == i;
        }
        function py(t, i, u) {
          var f = w.templateSettings;
          u && Wn(t, i, u) && (i = r), t = yt(t), i = du({}, i, f, Ef);
          var _ = du({}, i.imports, f.imports, Ef), S = hn(_), C = ar(_, S), O, k, X = 0, K = i.interpolate || fa, ie = "__p += '", me = xs(
            (i.escape || fa).source + "|" + K.source + "|" + (K === Ft ? yi : fa).source + "|" + (i.evaluate || fa).source + "|$",
            "g"
          ), Te = "//# sourceURL=" + (at.call(i, "sourceURL") ? (i.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Io + "]") + `
`;
          t.replace(me, function(Ie, nt, st, si, Vn, li) {
            return st || (st = si), ie += t.slice(X, li).replace(ha, Rl), nt && (O = !0, ie += `' +
__e(` + nt + `) +
'`), Vn && (k = !0, ie += `';
` + Vn + `;
__p += '`), st && (ie += `' +
((__t = (` + st + `)) == null ? '' : __t) +
'`), X = li + Ie.length, Ie;
          }), ie += `';
`;
          var Me = at.call(i, "variable") && i.variable;
          if (!Me)
            ie = `with (obj) {
` + ie + `
}
`;
          else if (Tn.test(Me))
            throw new We(g);
          ie = (k ? ie.replace(ca, "") : ie).replace(D, "$1").replace(de, "$1;"), ie = "function(" + (Me || "obj") + `) {
` + (Me ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (O ? ", __e = _.escape" : "") + (k ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + ie + `return __p
}`;
          var Ke = vh(function() {
            return ct(S, Te + "return " + ie).apply(r, C);
          });
          if (Ke.source = ie, Nc(Ke))
            throw Ke;
          return Ke;
        }
        function my(t) {
          return yt(t).toLowerCase();
        }
        function gy(t) {
          return yt(t).toUpperCase();
        }
        function vy(t, i, u) {
          if (t = yt(t), t && (u || i === r))
            return Fl(t);
          if (!t || !(i = oi(i)))
            return t;
          var f = An(t), _ = An(i), S = Ti(f, _), C = Bl(f, _) + 1;
          return uo(f, S, C).join("");
        }
        function _y(t, i, u) {
          if (t = yt(t), t && (u || i === r))
            return t.slice(0, bs(t) + 1);
          if (!t || !(i = oi(i)))
            return t;
          var f = An(t), _ = Bl(f, An(i)) + 1;
          return uo(f, 0, _).join("");
        }
        function yy(t, i, u) {
          if (t = yt(t), t && (u || i === r))
            return t.replace(Sr, "");
          if (!t || !(i = oi(i)))
            return t;
          var f = An(t), _ = Ti(f, An(i));
          return uo(f, _).join("");
        }
        function wy(t, i) {
          var u = U, f = Q;
          if (zt(i)) {
            var _ = "separator" in i ? i.separator : _;
            u = "length" in i ? Ye(i.length) : u, f = "omission" in i ? oi(i.omission) : f;
          }
          t = yt(t);
          var S = t.length;
          if (Qr(t)) {
            var C = An(t);
            S = C.length;
          }
          if (u >= S)
            return t;
          var O = u - Cn(f);
          if (O < 1)
            return f;
          var k = C ? uo(C, 0, O).join("") : t.slice(0, O);
          if (_ === r)
            return k + f;
          if (C && (O += k.length - O), Gc(_)) {
            if (t.slice(O).search(_)) {
              var X, K = k;
              for (_.global || (_ = xs(_.source, yt(Gt.exec(_)) + "g")), _.lastIndex = 0; X = _.exec(K); )
                var ie = X.index;
              k = k.slice(0, ie === r ? O : ie);
            }
          } else if (t.indexOf(oi(_), O) != O) {
            var me = k.lastIndexOf(_);
            me > -1 && (k = k.slice(0, me));
          }
          return k + f;
        }
        function by(t) {
          return t = yt(t), t && Ve.test(t) ? t.replace(J, Ss) : t;
        }
        var Sy = Ba(function(t, i, u) {
          return t + (u ? " " : "") + i.toUpperCase();
        }), Zc = _f("toUpperCase");
        function gh(t, i, u) {
          return t = yt(t), i = u ? r : i, i === r ? sr(t) ? Oa(t) : kl(t) : t.match(i) || [];
        }
        var vh = tt(function(t, i) {
          try {
            return Mt(t, r, i);
          } catch (u) {
            return Nc(u) ? u : new We(u);
          }
        }), Ty = Dr(function(t, i) {
          return zn(i, function(u) {
            u = hr(u), Ir(t, u, Rc(t[u], t));
          }), t;
        });
        function xy(t) {
          var i = t == null ? 0 : t.length, u = Oe();
          return t = i ? Tt(t, function(f) {
            if (typeof f[1] != "function")
              throw new gn(m);
            return [u(f[0]), f[1]];
          }) : [], tt(function(f) {
            for (var _ = -1; ++_ < i; ) {
              var S = t[_];
              if (Mt(S[0], this, f))
                return Mt(S[1], this, f);
            }
          });
        }
        function Ey(t) {
          return Ym(Ei(t, b));
        }
        function Uc(t) {
          return function() {
            return t;
          };
        }
        function Cy(t, i) {
          return t == null || t !== t ? i : t;
        }
        var Ay = wf(), Py = wf(!0);
        function Qn(t) {
          return t;
        }
        function Hc(t) {
          return jd(typeof t == "function" ? t : Ei(t, b));
        }
        function Ly(t) {
          return Xd(Ei(t, b));
        }
        function Oy(t, i) {
          return Kd(t, Ei(i, b));
        }
        var My = tt(function(t, i) {
          return function(u) {
            return Ls(u, t, i);
          };
        }), Iy = tt(function(t, i) {
          return function(u) {
            return Ls(t, u, i);
          };
        });
        function qc(t, i, u) {
          var f = hn(i), _ = ql(i, f);
          u == null && !(zt(i) && (_.length || !f.length)) && (u = i, i = t, t = this, _ = ql(i, hn(i)));
          var S = !(zt(u) && "chain" in u) || !!u.chain, C = Br(t);
          return zn(_, function(O) {
            var k = i[O];
            t[O] = k, C && (t.prototype[O] = function() {
              var X = this.__chain__;
              if (S || X) {
                var K = t(this.__wrapped__), ie = K.__actions__ = Yn(this.__actions__);
                return ie.push({ func: k, args: arguments, thisArg: t }), K.__chain__ = X, K;
              }
              return k.apply(t, Wi([this.value()], arguments));
            });
          }), t;
        }
        function ky() {
          return an._ === this && (an._ = Qu), this;
        }
        function $c() {
        }
        function Dy(t) {
          return t = Ye(t), tt(function(i) {
            return Qd(i, t);
          });
        }
        var Fy = xc(Tt), By = xc(fs), Ry = xc(ko);
        function _h(t) {
          return Mc(t) ? xa(hr(t)) : hg(t);
        }
        function zy(t) {
          return function(i) {
            return t == null ? r : Yo(t, i);
          };
        }
        var Ny = Sf(), Gy = Sf(!0);
        function Jc() {
          return [];
        }
        function jc() {
          return !1;
        }
        function Wy() {
          return {};
        }
        function Vy() {
          return "";
        }
        function Zy() {
          return !0;
        }
        function Uy(t, i) {
          if (t = Ye(t), t < 1 || t > ye)
            return [];
          var u = he, f = y(t, he);
          i = Oe(i), t -= he;
          for (var _ = ys(f, i); ++u < t; )
            i(u);
          return _;
        }
        function Hy(t) {
          return qe(t) ? Tt(t, hr) : ai(t) ? [t] : Yn(zf(yt(t)));
        }
        function qy(t) {
          var i = ++Ku;
          return yt(t) + i;
        }
        var $y = Kl(function(t, i) {
          return t + i;
        }, 0), Jy = Ec("ceil"), jy = Kl(function(t, i) {
          return t / i;
        }, 1), Yy = Ec("floor");
        function Xy(t) {
          return t && t.length ? Hl(t, Qn, cc) : r;
        }
        function Ky(t, i) {
          return t && t.length ? Hl(t, Oe(i, 2), cc) : r;
        }
        function Qy(t) {
          return ms(t, Qn);
        }
        function e1(t, i) {
          return ms(t, Oe(i, 2));
        }
        function t1(t) {
          return t && t.length ? Hl(t, Qn, pc) : r;
        }
        function n1(t, i) {
          return t && t.length ? Hl(t, Oe(i, 2), pc) : r;
        }
        var i1 = Kl(function(t, i) {
          return t * i;
        }, 1), r1 = Ec("round"), o1 = Kl(function(t, i) {
          return t - i;
        }, 0);
        function a1(t) {
          return t && t.length ? _s(t, Qn) : 0;
        }
        function s1(t, i) {
          return t && t.length ? _s(t, Oe(i, 2)) : 0;
        }
        return w.after = L0, w.ary = jf, w.assign = g_, w.assignIn = uh, w.assignInWith = du, w.assignWith = v_, w.at = __, w.before = Yf, w.bind = Rc, w.bindAll = Ty, w.bindKey = Xf, w.castArray = W0, w.chain = qf, w.chunk = Yg, w.compact = Xg, w.concat = Kg, w.cond = xy, w.conforms = Ey, w.constant = Uc, w.countBy = a0, w.create = y_, w.curry = Kf, w.curryRight = Qf, w.debounce = eh, w.defaults = w_, w.defaultsDeep = b_, w.defer = O0, w.delay = M0, w.difference = Qg, w.differenceBy = ev, w.differenceWith = tv, w.drop = nv, w.dropRight = iv, w.dropRightWhile = rv, w.dropWhile = ov, w.fill = av, w.filter = l0, w.flatMap = d0, w.flatMapDeep = f0, w.flatMapDepth = h0, w.flatten = Vf, w.flattenDeep = sv, w.flattenDepth = lv, w.flip = I0, w.flow = Ay, w.flowRight = Py, w.fromPairs = uv, w.functions = P_, w.functionsIn = L_, w.groupBy = p0, w.initial = dv, w.intersection = fv, w.intersectionBy = hv, w.intersectionWith = pv, w.invert = M_, w.invertBy = I_, w.invokeMap = g0, w.iteratee = Hc, w.keyBy = v0, w.keys = hn, w.keysIn = Kn, w.map = ou, w.mapKeys = D_, w.mapValues = F_, w.matches = Ly, w.matchesProperty = Oy, w.memoize = su, w.merge = B_, w.mergeWith = ch, w.method = My, w.methodOf = Iy, w.mixin = qc, w.negate = lu, w.nthArg = Dy, w.omit = R_, w.omitBy = z_, w.once = k0, w.orderBy = _0, w.over = Fy, w.overArgs = D0, w.overEvery = By, w.overSome = Ry, w.partial = zc, w.partialRight = th, w.partition = y0, w.pick = N_, w.pickBy = dh, w.property = _h, w.propertyOf = zy, w.pull = _v, w.pullAll = Uf, w.pullAllBy = yv, w.pullAllWith = wv, w.pullAt = bv, w.range = Ny, w.rangeRight = Gy, w.rearg = F0, w.reject = S0, w.remove = Sv, w.rest = B0, w.reverse = Fc, w.sampleSize = x0, w.set = W_, w.setWith = V_, w.shuffle = E0, w.slice = Tv, w.sortBy = P0, w.sortedUniq = Ov, w.sortedUniqBy = Mv, w.split = dy, w.spread = R0, w.tail = Iv, w.take = kv, w.takeRight = Dv, w.takeRightWhile = Fv, w.takeWhile = Bv, w.tap = Xv, w.throttle = z0, w.thru = ru, w.toArray = ah, w.toPairs = fh, w.toPairsIn = hh, w.toPath = Hy, w.toPlainObject = lh, w.transform = Z_, w.unary = N0, w.union = Rv, w.unionBy = zv, w.unionWith = Nv, w.uniq = Gv, w.uniqBy = Wv, w.uniqWith = Vv, w.unset = U_, w.unzip = Bc, w.unzipWith = Hf, w.update = H_, w.updateWith = q_, w.values = Na, w.valuesIn = $_, w.without = Zv, w.words = gh, w.wrap = G0, w.xor = Uv, w.xorBy = Hv, w.xorWith = qv, w.zip = $v, w.zipObject = Jv, w.zipObjectDeep = jv, w.zipWith = Yv, w.entries = fh, w.entriesIn = hh, w.extend = uh, w.extendWith = du, qc(w, w), w.add = $y, w.attempt = vh, w.camelCase = X_, w.capitalize = ph, w.ceil = Jy, w.clamp = J_, w.clone = V0, w.cloneDeep = U0, w.cloneDeepWith = H0, w.cloneWith = Z0, w.conformsTo = q0, w.deburr = mh, w.defaultTo = Cy, w.divide = jy, w.endsWith = K_, w.eq = qi, w.escape = Q_, w.escapeRegExp = ey, w.every = s0, w.find = u0, w.findIndex = Gf, w.findKey = S_, w.findLast = c0, w.findLastIndex = Wf, w.findLastKey = T_, w.floor = Yy, w.forEach = $f, w.forEachRight = Jf, w.forIn = x_, w.forInRight = E_, w.forOwn = C_, w.forOwnRight = A_, w.get = Wc, w.gt = $0, w.gte = J0, w.has = O_, w.hasIn = Vc, w.head = Zf, w.identity = Qn, w.includes = m0, w.indexOf = cv, w.inRange = j_, w.invoke = k_, w.isArguments = Qo, w.isArray = qe, w.isArrayBuffer = j0, w.isArrayLike = Xn, w.isArrayLikeObject = jt, w.isBoolean = Y0, w.isBuffer = co, w.isDate = X0, w.isElement = K0, w.isEmpty = Q0, w.isEqual = e_, w.isEqualWith = t_, w.isError = Nc, w.isFinite = n_, w.isFunction = Br, w.isInteger = nh, w.isLength = uu, w.isMap = ih, w.isMatch = i_, w.isMatchWith = r_, w.isNaN = o_, w.isNative = a_, w.isNil = l_, w.isNull = s_, w.isNumber = rh, w.isObject = zt, w.isObjectLike = Vt, w.isPlainObject = Fs, w.isRegExp = Gc, w.isSafeInteger = u_, w.isSet = oh, w.isString = cu, w.isSymbol = ai, w.isTypedArray = za, w.isUndefined = c_, w.isWeakMap = d_, w.isWeakSet = f_, w.join = mv, w.kebabCase = ty, w.last = Ai, w.lastIndexOf = gv, w.lowerCase = ny, w.lowerFirst = iy, w.lt = h_, w.lte = p_, w.max = Xy, w.maxBy = Ky, w.mean = Qy, w.meanBy = e1, w.min = t1, w.minBy = n1, w.stubArray = Jc, w.stubFalse = jc, w.stubObject = Wy, w.stubString = Vy, w.stubTrue = Zy, w.multiply = i1, w.nth = vv, w.noConflict = ky, w.noop = $c, w.now = au, w.pad = ry, w.padEnd = oy, w.padStart = ay, w.parseInt = sy, w.random = Y_, w.reduce = w0, w.reduceRight = b0, w.repeat = ly, w.replace = uy, w.result = G_, w.round = r1, w.runInContext = I, w.sample = T0, w.size = C0, w.snakeCase = cy, w.some = A0, w.sortedIndex = xv, w.sortedIndexBy = Ev, w.sortedIndexOf = Cv, w.sortedLastIndex = Av, w.sortedLastIndexBy = Pv, w.sortedLastIndexOf = Lv, w.startCase = fy, w.startsWith = hy, w.subtract = o1, w.sum = a1, w.sumBy = s1, w.template = py, w.times = Uy, w.toFinite = Rr, w.toInteger = Ye, w.toLength = sh, w.toLower = my, w.toNumber = Pi, w.toSafeInteger = m_, w.toString = yt, w.toUpper = gy, w.trim = vy, w.trimEnd = _y, w.trimStart = yy, w.truncate = wy, w.unescape = by, w.uniqueId = qy, w.upperCase = Sy, w.upperFirst = Zc, w.each = $f, w.eachRight = Jf, w.first = Zf, qc(w, (function() {
          var t = {};
          return dr(w, function(i, u) {
            at.call(w.prototype, u) || (t[u] = i);
          }), t;
        })(), { chain: !1 }), w.VERSION = l, zn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(t) {
          w[t].placeholder = w;
        }), zn(["drop", "take"], function(t, i) {
          et.prototype[t] = function(u) {
            u = u === r ? 1 : p(Ye(u), 0);
            var f = this.__filtered__ && !i ? new et(this) : this.clone();
            return f.__filtered__ ? f.__takeCount__ = y(u, f.__takeCount__) : f.__views__.push({
              size: y(u, he),
              type: t + (f.__dir__ < 0 ? "Right" : "")
            }), f;
          }, et.prototype[t + "Right"] = function(u) {
            return this.reverse()[t](u).reverse();
          };
        }), zn(["filter", "map", "takeWhile"], function(t, i) {
          var u = i + 1, f = u == ge || u == Ae;
          et.prototype[t] = function(_) {
            var S = this.clone();
            return S.__iteratees__.push({
              iteratee: Oe(_, 3),
              type: u
            }), S.__filtered__ = S.__filtered__ || f, S;
          };
        }), zn(["head", "last"], function(t, i) {
          var u = "take" + (i ? "Right" : "");
          et.prototype[t] = function() {
            return this[u](1).value()[0];
          };
        }), zn(["initial", "tail"], function(t, i) {
          var u = "drop" + (i ? "" : "Right");
          et.prototype[t] = function() {
            return this.__filtered__ ? new et(this) : this[u](1);
          };
        }), et.prototype.compact = function() {
          return this.filter(Qn);
        }, et.prototype.find = function(t) {
          return this.filter(t).head();
        }, et.prototype.findLast = function(t) {
          return this.reverse().find(t);
        }, et.prototype.invokeMap = tt(function(t, i) {
          return typeof t == "function" ? new et(this) : this.map(function(u) {
            return Ls(u, t, i);
          });
        }), et.prototype.reject = function(t) {
          return this.filter(lu(Oe(t)));
        }, et.prototype.slice = function(t, i) {
          t = Ye(t);
          var u = this;
          return u.__filtered__ && (t > 0 || i < 0) ? new et(u) : (t < 0 ? u = u.takeRight(-t) : t && (u = u.drop(t)), i !== r && (i = Ye(i), u = i < 0 ? u.dropRight(-i) : u.take(i - t)), u);
        }, et.prototype.takeRightWhile = function(t) {
          return this.reverse().takeWhile(t).reverse();
        }, et.prototype.toArray = function() {
          return this.take(he);
        }, dr(et.prototype, function(t, i) {
          var u = /^(?:filter|find|map|reject)|While$/.test(i), f = /^(?:head|last)$/.test(i), _ = w[f ? "take" + (i == "last" ? "Right" : "") : i], S = f || /^find/.test(i);
          _ && (w.prototype[i] = function() {
            var C = this.__wrapped__, O = f ? [1] : arguments, k = C instanceof et, X = O[0], K = k || qe(C), ie = function(nt) {
              var st = _.apply(w, Wi([nt], O));
              return f && me ? st[0] : st;
            };
            K && u && typeof X == "function" && X.length != 1 && (k = K = !1);
            var me = this.__chain__, Te = !!this.__actions__.length, Me = S && !me, Ke = k && !Te;
            if (!S && K) {
              C = Ke ? C : new et(this);
              var Ie = t.apply(C, O);
              return Ie.__actions__.push({ func: ru, args: [ie], thisArg: r }), new Pn(Ie, me);
            }
            return Me && Ke ? t.apply(this, O) : (Ie = this.thru(ie), Me ? f ? Ie.value()[0] : Ie.value() : Ie);
          });
        }), zn(["pop", "push", "shift", "sort", "splice", "unshift"], function(t) {
          var i = Ma[t], u = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru", f = /^(?:pop|shift)$/.test(t);
          w.prototype[t] = function() {
            var _ = arguments;
            if (f && !this.__chain__) {
              var S = this.value();
              return i.apply(qe(S) ? S : [], _);
            }
            return this[u](function(C) {
              return i.apply(qe(C) ? C : [], _);
            });
          };
        }), dr(et.prototype, function(t, i) {
          var u = w[i];
          if (u) {
            var f = u.name + "";
            at.call(ri, f) || (ri[f] = []), ri[f].push({ name: i, func: u });
          }
        }), ri[Xl(r, B).name] = [{
          name: "wrapper",
          func: r
        }], et.prototype.clone = oc, et.prototype.reverse = Sm, et.prototype.value = Tm, w.prototype.at = Kv, w.prototype.chain = Qv, w.prototype.commit = e0, w.prototype.next = t0, w.prototype.plant = i0, w.prototype.reverse = r0, w.prototype.toJSON = w.prototype.valueOf = w.prototype.value = o0, w.prototype.first = w.prototype.head, ro && (w.prototype[ro] = n0), w;
      }), Vi = to();
      ii ? ((ii.exports = Vi)._ = Vi, Rn._ = Vi) : an._ = Vi;
    }).call(e2);
  })(zs, zs.exports)), zs.exports;
}
var Ns = t2();
function n2(o, ...a) {
  return [].slice.call(arguments, 1).reduce(function(r, l) {
    return r && r[l];
  }, o);
}
function Yc(o, a) {
  const r = a.replace("\\.", "<|>");
  try {
    return r.split(".").reduce((l, d) => {
      const h = parseInt(d);
      return isFinite(h) && Array.isArray(l) ? l[h] : l[d.replace("<|>", ".")];
    }, o);
  } catch {
    return null;
  }
}
var fo = /* @__PURE__ */ ((o) => (o.eq = "eq", o.lt = "lt", o.gt = "gt", o.lte = "lte", o.gte = "gte", o.neq = "neq", o))(fo || {});
function i2() {
  const o = (h, m) => !m.thing || m.thing.length == 0 || !h ? !1 : m.thing.map(
    (v) => {
      if (v.value == "*")
        return !0;
      {
        const T = Yc(h, v.prop ?? "");
        return T ? d(v.comperator, T, v.value) : !1;
      }
    }
  ).reduce(
    (v, T) => v && T,
    !0
  ), a = (h, m) => !m.datastream || m.datastream.length == 0 || !h ? !1 : m.datastream.map(
    (v) => {
      if (v.value == "*")
        return !0;
      {
        const T = Yc(h, v.prop ?? "");
        return T == null ? v.comperator === fo.neq : d(v.comperator, T, v.value);
      }
    }
  ).reduce(
    (v, T) => v && T,
    !0
  ), r = (h, m) => {
    if (!m.datastream || m.datastream.length == 0)
      return h;
    if (!h) return { type: "FeatureCollection", features: [] };
    const g = { ...h }, v = [];
    for (const T of h.features)
      for (const x of m.datastream)
        if (x.value == "*") {
          v.push(T);
          break;
        } else {
          const b = Yc(T.properties, x.prop ?? "");
          if (!b)
            continue;
          if (d(x.comperator, b, x.value)) {
            v.push(T);
            break;
          }
        }
    return g.features = v, g;
  }, l = (h, m) => {
    const g = m.startsWith("*"), v = m.endsWith("*");
    if (g && v) {
      const T = m.slice(1, -1);
      return h.includes(T);
    } else if (g) {
      const T = m.slice(1);
      return h.endsWith(T);
    } else if (v) {
      const T = m.slice(0, -1);
      return h.startsWith(T);
    }
    return !1;
  }, d = (h, m, g) => {
    const v = String(m), T = String(g), x = T.includes("*");
    switch (h) {
      case fo.eq:
        return x ? l(v, T) : v === T;
      case fo.neq:
        return x ? !l(v, T) : v !== T;
      case fo.gt:
        return Number(m) > Number(g);
      case fo.gte:
        return Number(m) >= Number(g);
      case fo.lt:
        return Number(m) < Number(g);
      case fo.lte:
        return Number(m) <= Number(g);
      default:
        return !1;
    }
  };
  return {
    compareThing: o,
    compareDatastream: a,
    filterFeatureCollection: r
  };
}
function r2() {
  return {
    isFeature: (d) => !(!d || !d.type || d.type !== "Feature"),
    isFeatureCollection: (d) => !(!d || !d.type || d.type !== "FeatureCollection"),
    isPoint: (d) => !(!d || !d.type || d.type !== "Point" || !d.coordinates || !Ns.isArray(d.coordinates) || d.coordinates.length < 2),
    transformToGeoJson: (d) => d ? d.type == "Feature" || d.type == "FeatureCollection" ? d : ["Polygon", "MultiPolygon", "Line", "MultiLine", "Point", "MultiPoint"].includes(d.type) ? {
      type: "Feature",
      properties: {},
      geometry: d
    } : null : null
  };
}
var Gs = { exports: {} };
/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */
var o2 = Gs.exports, Ih;
function a2() {
  return Ih || (Ih = 1, (function(o, a) {
    (function(r, l) {
      l(a);
    })(o2, (function(r) {
      var l = "1.9.4";
      function d(e) {
        var n, s, c, p;
        for (s = 1, c = arguments.length; s < c; s++) {
          p = arguments[s];
          for (n in p)
            e[n] = p[n];
        }
        return e;
      }
      var h = Object.create || /* @__PURE__ */ (function() {
        function e() {
        }
        return function(n) {
          return e.prototype = n, new e();
        };
      })();
      function m(e, n) {
        var s = Array.prototype.slice;
        if (e.bind)
          return e.bind.apply(e, s.call(arguments, 1));
        var c = s.call(arguments, 2);
        return function() {
          return e.apply(n, c.length ? c.concat(s.call(arguments)) : arguments);
        };
      }
      var g = 0;
      function v(e) {
        return "_leaflet_id" in e || (e._leaflet_id = ++g), e._leaflet_id;
      }
      function T(e, n, s) {
        var c, p, y, A;
        return A = function() {
          c = !1, p && (y.apply(s, p), p = !1);
        }, y = function() {
          c ? p = arguments : (e.apply(s, arguments), setTimeout(A, n), c = !0);
        }, y;
      }
      function x(e, n, s) {
        var c = n[1], p = n[0], y = c - p;
        return e === c && s ? e : ((e - p) % y + y) % y + p;
      }
      function b() {
        return !1;
      }
      function E(e, n) {
        if (n === !1)
          return e;
        var s = Math.pow(10, n === void 0 ? 6 : n);
        return Math.round(e * s) / s;
      }
      function P(e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "");
      }
      function z(e) {
        return P(e).split(/\s+/);
      }
      function R(e, n) {
        Object.prototype.hasOwnProperty.call(e, "options") || (e.options = e.options ? h(e.options) : {});
        for (var s in n)
          e.options[s] = n[s];
        return e.options;
      }
      function Y(e, n, s) {
        var c = [];
        for (var p in e)
          c.push(encodeURIComponent(s ? p.toUpperCase() : p) + "=" + encodeURIComponent(e[p]));
        return (!n || n.indexOf("?") === -1 ? "?" : "&") + c.join("&");
      }
      var B = /\{ *([\w_ -]+) *\}/g;
      function W(e, n) {
        return e.replace(B, function(s, c) {
          var p = n[c];
          if (p === void 0)
            throw new Error("No value provided for variable " + s);
          return typeof p == "function" && (p = p(n)), p;
        });
      }
      var q = Array.isArray || function(e) {
        return Object.prototype.toString.call(e) === "[object Array]";
      };
      function M(e, n) {
        for (var s = 0; s < e.length; s++)
          if (e[s] === n)
            return s;
        return -1;
      }
      var $ = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
      function ue(e) {
        return window["webkit" + e] || window["moz" + e] || window["ms" + e];
      }
      var fe = 0;
      function Ee(e) {
        var n = +/* @__PURE__ */ new Date(), s = Math.max(0, 16 - (n - fe));
        return fe = n + s, window.setTimeout(e, s);
      }
      var ne = window.requestAnimationFrame || ue("RequestAnimationFrame") || Ee, U = window.cancelAnimationFrame || ue("CancelAnimationFrame") || ue("CancelRequestAnimationFrame") || function(e) {
        window.clearTimeout(e);
      };
      function Q(e, n, s) {
        if (s && ne === Ee)
          e.call(n);
        else
          return ne.call(window, m(e, n));
      }
      function G(e) {
        e && U.call(window, e);
      }
      var ae = {
        __proto__: null,
        extend: d,
        create: h,
        bind: m,
        get lastId() {
          return g;
        },
        stamp: v,
        throttle: T,
        wrapNum: x,
        falseFn: b,
        formatNum: E,
        trim: P,
        splitWords: z,
        setOptions: R,
        getParamString: Y,
        template: W,
        isArray: q,
        indexOf: M,
        emptyImageUrl: $,
        requestFn: ne,
        cancelFn: U,
        requestAnimFrame: Q,
        cancelAnimFrame: G
      };
      function ge() {
      }
      ge.extend = function(e) {
        var n = function() {
          R(this), this.initialize && this.initialize.apply(this, arguments), this.callInitHooks();
        }, s = n.__super__ = this.prototype, c = h(s);
        c.constructor = n, n.prototype = c;
        for (var p in this)
          Object.prototype.hasOwnProperty.call(this, p) && p !== "prototype" && p !== "__super__" && (n[p] = this[p]);
        return e.statics && d(n, e.statics), e.includes && (Qe(e.includes), d.apply(null, [c].concat(e.includes))), d(c, e), delete c.statics, delete c.includes, c.options && (c.options = s.options ? h(s.options) : {}, d(c.options, e.options)), c._initHooks = [], c.callInitHooks = function() {
          if (!this._initHooksCalled) {
            s.callInitHooks && s.callInitHooks.call(this), this._initHooksCalled = !0;
            for (var y = 0, A = c._initHooks.length; y < A; y++)
              c._initHooks[y].call(this);
          }
        }, n;
      }, ge.include = function(e) {
        var n = this.prototype.options;
        return d(this.prototype, e), e.options && (this.prototype.options = n, this.mergeOptions(e.options)), this;
      }, ge.mergeOptions = function(e) {
        return d(this.prototype.options, e), this;
      }, ge.addInitHook = function(e) {
        var n = Array.prototype.slice.call(arguments, 1), s = typeof e == "function" ? e : function() {
          this[e].apply(this, n);
        };
        return this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(s), this;
      };
      function Qe(e) {
        if (!(typeof L > "u" || !L || !L.Mixin)) {
          e = q(e) ? e : [e];
          for (var n = 0; n < e.length; n++)
            e[n] === L.Mixin.Events && console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.", new Error().stack);
        }
      }
      var Ae = {
        /* @method on(type: String, fn: Function, context?: Object): this
         * Adds a listener function (`fn`) to a particular event type of the object. You can optionally specify the context of the listener (object the this keyword will point to). You can also pass several space-separated types (e.g. `'click dblclick'`).
         *
         * @alternative
         * @method on(eventMap: Object): this
         * Adds a set of type/listener pairs, e.g. `{click: onClick, mousemove: onMouseMove}`
         */
        on: function(e, n, s) {
          if (typeof e == "object")
            for (var c in e)
              this._on(c, e[c], n);
          else {
            e = z(e);
            for (var p = 0, y = e.length; p < y; p++)
              this._on(e[p], n, s);
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
        off: function(e, n, s) {
          if (!arguments.length)
            delete this._events;
          else if (typeof e == "object")
            for (var c in e)
              this._off(c, e[c], n);
          else {
            e = z(e);
            for (var p = arguments.length === 1, y = 0, A = e.length; y < A; y++)
              p ? this._off(e[y]) : this._off(e[y], n, s);
          }
          return this;
        },
        // attach listener (without syntactic sugar now)
        _on: function(e, n, s, c) {
          if (typeof n != "function") {
            console.warn("wrong listener type: " + typeof n);
            return;
          }
          if (this._listens(e, n, s) === !1) {
            s === this && (s = void 0);
            var p = { fn: n, ctx: s };
            c && (p.once = !0), this._events = this._events || {}, this._events[e] = this._events[e] || [], this._events[e].push(p);
          }
        },
        _off: function(e, n, s) {
          var c, p, y;
          if (this._events && (c = this._events[e], !!c)) {
            if (arguments.length === 1) {
              if (this._firingCount)
                for (p = 0, y = c.length; p < y; p++)
                  c[p].fn = b;
              delete this._events[e];
              return;
            }
            if (typeof n != "function") {
              console.warn("wrong listener type: " + typeof n);
              return;
            }
            var A = this._listens(e, n, s);
            if (A !== !1) {
              var F = c[A];
              this._firingCount && (F.fn = b, this._events[e] = c = c.slice()), c.splice(A, 1);
            }
          }
        },
        // @method fire(type: String, data?: Object, propagate?: Boolean): this
        // Fires an event of the specified type. You can optionally provide a data
        // object — the first argument of the listener function will contain its
        // properties. The event can optionally be propagated to event parents.
        fire: function(e, n, s) {
          if (!this.listens(e, s))
            return this;
          var c = d({}, n, {
            type: e,
            target: this,
            sourceTarget: n && n.sourceTarget || this
          });
          if (this._events) {
            var p = this._events[e];
            if (p) {
              this._firingCount = this._firingCount + 1 || 1;
              for (var y = 0, A = p.length; y < A; y++) {
                var F = p[y], V = F.fn;
                F.once && this.off(e, V, F.ctx), V.call(F.ctx || this, c);
              }
              this._firingCount--;
            }
          }
          return s && this._propagateEvent(c), this;
        },
        // @method listens(type: String, propagate?: Boolean): Boolean
        // @method listens(type: String, fn: Function, context?: Object, propagate?: Boolean): Boolean
        // Returns `true` if a particular event type has any listeners attached to it.
        // The verification can optionally be propagated, it will return `true` if parents have the listener attached to it.
        listens: function(e, n, s, c) {
          typeof e != "string" && console.warn('"string" type argument expected');
          var p = n;
          typeof n != "function" && (c = !!n, p = void 0, s = void 0);
          var y = this._events && this._events[e];
          if (y && y.length && this._listens(e, p, s) !== !1)
            return !0;
          if (c) {
            for (var A in this._eventParents)
              if (this._eventParents[A].listens(e, n, s, c))
                return !0;
          }
          return !1;
        },
        // returns the index (number) or false
        _listens: function(e, n, s) {
          if (!this._events)
            return !1;
          var c = this._events[e] || [];
          if (!n)
            return !!c.length;
          s === this && (s = void 0);
          for (var p = 0, y = c.length; p < y; p++)
            if (c[p].fn === n && c[p].ctx === s)
              return p;
          return !1;
        },
        // @method once(…): this
        // Behaves as [`on(…)`](#evented-on), except the listener will only get fired once and then removed.
        once: function(e, n, s) {
          if (typeof e == "object")
            for (var c in e)
              this._on(c, e[c], n, !0);
          else {
            e = z(e);
            for (var p = 0, y = e.length; p < y; p++)
              this._on(e[p], n, s, !0);
          }
          return this;
        },
        // @method addEventParent(obj: Evented): this
        // Adds an event parent - an `Evented` that will receive propagated events
        addEventParent: function(e) {
          return this._eventParents = this._eventParents || {}, this._eventParents[v(e)] = e, this;
        },
        // @method removeEventParent(obj: Evented): this
        // Removes an event parent, so it will stop receiving propagated events
        removeEventParent: function(e) {
          return this._eventParents && delete this._eventParents[v(e)], this;
        },
        _propagateEvent: function(e) {
          for (var n in this._eventParents)
            this._eventParents[n].fire(e.type, d({
              layer: e.target,
              propagatedFrom: e.target
            }, e), !0);
        }
      };
      Ae.addEventListener = Ae.on, Ae.removeEventListener = Ae.clearAllEventListeners = Ae.off, Ae.addOneTimeEventListener = Ae.once, Ae.fireEvent = Ae.fire, Ae.hasEventListeners = Ae.listens;
      var ke = ge.extend(Ae);
      function ye(e, n, s) {
        this.x = s ? Math.round(e) : e, this.y = s ? Math.round(n) : n;
      }
      var Kt = Math.trunc || function(e) {
        return e > 0 ? Math.floor(e) : Math.ceil(e);
      };
      ye.prototype = {
        // @method clone(): Point
        // Returns a copy of the current point.
        clone: function() {
          return new ye(this.x, this.y);
        },
        // @method add(otherPoint: Point): Point
        // Returns the result of addition of the current and the given points.
        add: function(e) {
          return this.clone()._add(j(e));
        },
        _add: function(e) {
          return this.x += e.x, this.y += e.y, this;
        },
        // @method subtract(otherPoint: Point): Point
        // Returns the result of subtraction of the given point from the current.
        subtract: function(e) {
          return this.clone()._subtract(j(e));
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
          return new ye(this.x * e.x, this.y * e.y);
        },
        // @method unscaleBy(scale: Point): Point
        // Inverse of `scaleBy`. Divide each coordinate of the current point by
        // each coordinate of `scale`.
        unscaleBy: function(e) {
          return new ye(this.x / e.x, this.y / e.y);
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
          return this.x = Kt(this.x), this.y = Kt(this.y), this;
        },
        // @method distanceTo(otherPoint: Point): Number
        // Returns the cartesian distance between the current and the given points.
        distanceTo: function(e) {
          e = j(e);
          var n = e.x - this.x, s = e.y - this.y;
          return Math.sqrt(n * n + s * s);
        },
        // @method equals(otherPoint: Point): Boolean
        // Returns `true` if the given point has the same coordinates.
        equals: function(e) {
          return e = j(e), e.x === this.x && e.y === this.y;
        },
        // @method contains(otherPoint: Point): Boolean
        // Returns `true` if both coordinates of the given point are less than the corresponding current point coordinates (in absolute values).
        contains: function(e) {
          return e = j(e), Math.abs(e.x) <= Math.abs(this.x) && Math.abs(e.y) <= Math.abs(this.y);
        },
        // @method toString(): String
        // Returns a string representation of the point for debugging purposes.
        toString: function() {
          return "Point(" + E(this.x) + ", " + E(this.y) + ")";
        }
      };
      function j(e, n, s) {
        return e instanceof ye ? e : q(e) ? new ye(e[0], e[1]) : e == null ? e : typeof e == "object" && "x" in e && "y" in e ? new ye(e.x, e.y) : new ye(e, n, s);
      }
      function he(e, n) {
        if (e)
          for (var s = n ? [e, n] : e, c = 0, p = s.length; c < p; c++)
            this.extend(s[c]);
      }
      he.prototype = {
        // @method extend(point: Point): this
        // Extends the bounds to contain the given point.
        // @alternative
        // @method extend(otherBounds: Bounds): this
        // Extend the bounds to contain the given bounds
        extend: function(e) {
          var n, s;
          if (!e)
            return this;
          if (e instanceof ye || typeof e[0] == "number" || "x" in e)
            n = s = j(e);
          else if (e = Ge(e), n = e.min, s = e.max, !n || !s)
            return this;
          return !this.min && !this.max ? (this.min = n.clone(), this.max = s.clone()) : (this.min.x = Math.min(n.x, this.min.x), this.max.x = Math.max(s.x, this.max.x), this.min.y = Math.min(n.y, this.min.y), this.max.y = Math.max(s.y, this.max.y)), this;
        },
        // @method getCenter(round?: Boolean): Point
        // Returns the center point of the bounds.
        getCenter: function(e) {
          return j(
            (this.min.x + this.max.x) / 2,
            (this.min.y + this.max.y) / 2,
            e
          );
        },
        // @method getBottomLeft(): Point
        // Returns the bottom-left point of the bounds.
        getBottomLeft: function() {
          return j(this.min.x, this.max.y);
        },
        // @method getTopRight(): Point
        // Returns the top-right point of the bounds.
        getTopRight: function() {
          return j(this.max.x, this.min.y);
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
          var n, s;
          return typeof e[0] == "number" || e instanceof ye ? e = j(e) : e = Ge(e), e instanceof he ? (n = e.min, s = e.max) : n = s = e, n.x >= this.min.x && s.x <= this.max.x && n.y >= this.min.y && s.y <= this.max.y;
        },
        // @method intersects(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds
        // intersect if they have at least one point in common.
        intersects: function(e) {
          e = Ge(e);
          var n = this.min, s = this.max, c = e.min, p = e.max, y = p.x >= n.x && c.x <= s.x, A = p.y >= n.y && c.y <= s.y;
          return y && A;
        },
        // @method overlaps(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds
        // overlap if their intersection is an area.
        overlaps: function(e) {
          e = Ge(e);
          var n = this.min, s = this.max, c = e.min, p = e.max, y = p.x > n.x && c.x < s.x, A = p.y > n.y && c.y < s.y;
          return y && A;
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
          var n = this.min, s = this.max, c = Math.abs(n.x - s.x) * e, p = Math.abs(n.y - s.y) * e;
          return Ge(
            j(n.x - c, n.y - p),
            j(s.x + c, s.y + p)
          );
        },
        // @method equals(otherBounds: Bounds): Boolean
        // Returns `true` if the rectangle is equivalent to the given bounds.
        equals: function(e) {
          return e ? (e = Ge(e), this.min.equals(e.getTopLeft()) && this.max.equals(e.getBottomRight())) : !1;
        }
      };
      function Ge(e, n) {
        return !e || e instanceof he ? e : new he(e, n);
      }
      function gt(e, n) {
        if (e)
          for (var s = n ? [e, n] : e, c = 0, p = s.length; c < p; c++)
            this.extend(s[c]);
      }
      gt.prototype = {
        // @method extend(latlng: LatLng): this
        // Extend the bounds to contain the given point
        // @alternative
        // @method extend(otherBounds: LatLngBounds): this
        // Extend the bounds to contain the given bounds
        extend: function(e) {
          var n = this._southWest, s = this._northEast, c, p;
          if (e instanceof De)
            c = e, p = e;
          else if (e instanceof gt) {
            if (c = e._southWest, p = e._northEast, !c || !p)
              return this;
          } else
            return e ? this.extend(Ne(e) || oe(e)) : this;
          return !n && !s ? (this._southWest = new De(c.lat, c.lng), this._northEast = new De(p.lat, p.lng)) : (n.lat = Math.min(c.lat, n.lat), n.lng = Math.min(c.lng, n.lng), s.lat = Math.max(p.lat, s.lat), s.lng = Math.max(p.lng, s.lng)), this;
        },
        // @method pad(bufferRatio: Number): LatLngBounds
        // Returns bounds created by extending or retracting the current bounds by a given ratio in each direction.
        // For example, a ratio of 0.5 extends the bounds by 50% in each direction.
        // Negative values will retract the bounds.
        pad: function(e) {
          var n = this._southWest, s = this._northEast, c = Math.abs(n.lat - s.lat) * e, p = Math.abs(n.lng - s.lng) * e;
          return new gt(
            new De(n.lat - c, n.lng - p),
            new De(s.lat + c, s.lng + p)
          );
        },
        // @method getCenter(): LatLng
        // Returns the center point of the bounds.
        getCenter: function() {
          return new De(
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
          return new De(this.getNorth(), this.getWest());
        },
        // @method getSouthEast(): LatLng
        // Returns the south-east point of the bounds.
        getSouthEast: function() {
          return new De(this.getSouth(), this.getEast());
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
          typeof e[0] == "number" || e instanceof De || "lat" in e ? e = Ne(e) : e = oe(e);
          var n = this._southWest, s = this._northEast, c, p;
          return e instanceof gt ? (c = e.getSouthWest(), p = e.getNorthEast()) : c = p = e, c.lat >= n.lat && p.lat <= s.lat && c.lng >= n.lng && p.lng <= s.lng;
        },
        // @method intersects(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle intersects the given bounds. Two bounds intersect if they have at least one point in common.
        intersects: function(e) {
          e = oe(e);
          var n = this._southWest, s = this._northEast, c = e.getSouthWest(), p = e.getNorthEast(), y = p.lat >= n.lat && c.lat <= s.lat, A = p.lng >= n.lng && c.lng <= s.lng;
          return y && A;
        },
        // @method overlaps(otherBounds: LatLngBounds): Boolean
        // Returns `true` if the rectangle overlaps the given bounds. Two bounds overlap if their intersection is an area.
        overlaps: function(e) {
          e = oe(e);
          var n = this._southWest, s = this._northEast, c = e.getSouthWest(), p = e.getNorthEast(), y = p.lat > n.lat && c.lat < s.lat, A = p.lng > n.lng && c.lng < s.lng;
          return y && A;
        },
        // @method toBBoxString(): String
        // Returns a string with bounding box coordinates in a 'southwest_lng,southwest_lat,northeast_lng,northeast_lat' format. Useful for sending requests to web services that return geo data.
        toBBoxString: function() {
          return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",");
        },
        // @method equals(otherBounds: LatLngBounds, maxMargin?: Number): Boolean
        // Returns `true` if the rectangle is equivalent (within a small margin of error) to the given bounds. The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(e, n) {
          return e ? (e = oe(e), this._southWest.equals(e.getSouthWest(), n) && this._northEast.equals(e.getNorthEast(), n)) : !1;
        },
        // @method isValid(): Boolean
        // Returns `true` if the bounds are properly initialized.
        isValid: function() {
          return !!(this._southWest && this._northEast);
        }
      };
      function oe(e, n) {
        return e instanceof gt ? e : new gt(e, n);
      }
      function De(e, n, s) {
        if (isNaN(e) || isNaN(n))
          throw new Error("Invalid LatLng object: (" + e + ", " + n + ")");
        this.lat = +e, this.lng = +n, s !== void 0 && (this.alt = +s);
      }
      De.prototype = {
        // @method equals(otherLatLng: LatLng, maxMargin?: Number): Boolean
        // Returns `true` if the given `LatLng` point is at the same position (within a small margin of error). The margin of error can be overridden by setting `maxMargin` to a small number.
        equals: function(e, n) {
          if (!e)
            return !1;
          e = Ne(e);
          var s = Math.max(
            Math.abs(this.lat - e.lat),
            Math.abs(this.lng - e.lng)
          );
          return s <= (n === void 0 ? 1e-9 : n);
        },
        // @method toString(): String
        // Returns a string representation of the point (for debugging purposes).
        toString: function(e) {
          return "LatLng(" + E(this.lat, e) + ", " + E(this.lng, e) + ")";
        },
        // @method distanceTo(otherLatLng: LatLng): Number
        // Returns the distance (in meters) to the given `LatLng` calculated using the [Spherical Law of Cosines](https://en.wikipedia.org/wiki/Spherical_law_of_cosines).
        distanceTo: function(e) {
          return nn.distance(this, Ne(e));
        },
        // @method wrap(): LatLng
        // Returns a new `LatLng` object with the longitude wrapped so it's always between -180 and +180 degrees.
        wrap: function() {
          return nn.wrapLatLng(this);
        },
        // @method toBounds(sizeInMeters: Number): LatLngBounds
        // Returns a new `LatLngBounds` object in which each boundary is `sizeInMeters/2` meters apart from the `LatLng`.
        toBounds: function(e) {
          var n = 180 * e / 40075017, s = n / Math.cos(Math.PI / 180 * this.lat);
          return oe(
            [this.lat - n, this.lng - s],
            [this.lat + n, this.lng + s]
          );
        },
        clone: function() {
          return new De(this.lat, this.lng, this.alt);
        }
      };
      function Ne(e, n, s) {
        return e instanceof De ? e : q(e) && typeof e[0] != "object" ? e.length === 3 ? new De(e[0], e[1], e[2]) : e.length === 2 ? new De(e[0], e[1]) : null : e == null ? e : typeof e == "object" && "lat" in e ? new De(e.lat, "lng" in e ? e.lng : e.lon, e.alt) : n === void 0 ? null : new De(e, n, s);
      }
      var pn = {
        // @method latLngToPoint(latlng: LatLng, zoom: Number): Point
        // Projects geographical coordinates into pixel coordinates for a given zoom.
        latLngToPoint: function(e, n) {
          var s = this.projection.project(e), c = this.scale(n);
          return this.transformation._transform(s, c);
        },
        // @method pointToLatLng(point: Point, zoom: Number): LatLng
        // The inverse of `latLngToPoint`. Projects pixel coordinates on a given
        // zoom into geographical coordinates.
        pointToLatLng: function(e, n) {
          var s = this.scale(n), c = this.transformation.untransform(e, s);
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
          var n = this.projection.bounds, s = this.scale(e), c = this.transformation.transform(n.min, s), p = this.transformation.transform(n.max, s);
          return new he(c, p);
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
          var n = this.wrapLng ? x(e.lng, this.wrapLng, !0) : e.lng, s = this.wrapLat ? x(e.lat, this.wrapLat, !0) : e.lat, c = e.alt;
          return new De(s, n, c);
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring
        // that its center is within the CRS's bounds.
        // Only accepts actual `L.LatLngBounds` instances, not arrays.
        wrapLatLngBounds: function(e) {
          var n = e.getCenter(), s = this.wrapLatLng(n), c = n.lat - s.lat, p = n.lng - s.lng;
          if (c === 0 && p === 0)
            return e;
          var y = e.getSouthWest(), A = e.getNorthEast(), F = new De(y.lat - c, y.lng - p), V = new De(A.lat - c, A.lng - p);
          return new gt(F, V);
        }
      }, nn = d({}, pn, {
        wrapLng: [-180, 180],
        // Mean Earth Radius, as recommended for use by
        // the International Union of Geodesy and Geophysics,
        // see https://rosettacode.org/wiki/Haversine_formula
        R: 6371e3,
        // distance between two geographical points using spherical law of cosines approximation
        distance: function(e, n) {
          var s = Math.PI / 180, c = e.lat * s, p = n.lat * s, y = Math.sin((n.lat - e.lat) * s / 2), A = Math.sin((n.lng - e.lng) * s / 2), F = y * y + Math.cos(c) * Math.cos(p) * A * A, V = 2 * Math.atan2(Math.sqrt(F), Math.sqrt(1 - F));
          return this.R * V;
        }
      }), Xi = 6378137, To = {
        R: Xi,
        MAX_LATITUDE: 85.0511287798,
        project: function(e) {
          var n = Math.PI / 180, s = this.MAX_LATITUDE, c = Math.max(Math.min(s, e.lat), -s), p = Math.sin(c * n);
          return new ye(
            this.R * e.lng * n,
            this.R * Math.log((1 + p) / (1 - p)) / 2
          );
        },
        unproject: function(e) {
          var n = 180 / Math.PI;
          return new De(
            (2 * Math.atan(Math.exp(e.y / this.R)) - Math.PI / 2) * n,
            e.x * n / this.R
          );
        },
        bounds: (function() {
          var e = Xi * Math.PI;
          return new he([-e, -e], [e, e]);
        })()
      };
      function rn(e, n, s, c) {
        if (q(e)) {
          this._a = e[0], this._b = e[1], this._c = e[2], this._d = e[3];
          return;
        }
        this._a = e, this._b = n, this._c = s, this._d = c;
      }
      rn.prototype = {
        // @method transform(point: Point, scale?: Number): Point
        // Returns a transformed point, optionally multiplied by the given scale.
        // Only accepts actual `L.Point` instances, not arrays.
        transform: function(e, n) {
          return this._transform(e.clone(), n);
        },
        // destructive transform (faster)
        _transform: function(e, n) {
          return n = n || 1, e.x = n * (this._a * e.x + this._b), e.y = n * (this._c * e.y + this._d), e;
        },
        // @method untransform(point: Point, scale?: Number): Point
        // Returns the reverse transformation of the given point, optionally divided
        // by the given scale. Only accepts actual `L.Point` instances, not arrays.
        untransform: function(e, n) {
          return n = n || 1, new ye(
            (e.x / n - this._b) / this._a,
            (e.y / n - this._d) / this._c
          );
        }
      };
      function ti(e, n, s, c) {
        return new rn(e, n, s, c);
      }
      var Ki = d({}, nn, {
        code: "EPSG:3857",
        projection: To,
        transformation: (function() {
          var e = 0.5 / (Math.PI * To.R);
          return ti(e, 0.5, -e, 0.5);
        })()
      }), Sn = d({}, Ki, {
        code: "EPSG:900913"
      });
      function Ii(e) {
        return document.createElementNS("http://www.w3.org/2000/svg", e);
      }
      function xo(e, n) {
        var s = "", c, p, y, A, F, V;
        for (c = 0, y = e.length; c < y; c++) {
          for (F = e[c], p = 0, A = F.length; p < A; p++)
            V = F[p], s += (p ? "L" : "M") + V.x + " " + V.y;
          s += n ? Se.svg ? "z" : "x" : "";
        }
        return s || "M0 0";
      }
      var kn = document.documentElement.style, wr = "ActiveXObject" in window, Qi = wr && !document.addEventListener, ni = "msLaunchUri" in navigator && !("documentMode" in document), on = dn("webkit"), er = dn("android"), tr = dn("android 2") || dn("android 3"), es = parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1], 10), ki = er && dn("Google") && es < 537 && !("AudioNode" in window), Eo = !!window.opera, Di = !ni && dn("chrome"), $n = dn("gecko") && !on && !Eo && !wr, Co = !Di && dn("safari"), br = dn("phantom"), Fi = "OTransition" in kn, Ao = navigator.platform.indexOf("Win") === 0, Hr = wr && "transition" in kn, _i = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix() && !tr, Bi = "MozPerspective" in kn, Ri = !window.L_DISABLE_3D && (Hr || _i || Bi) && !Fi && !br, zi = typeof orientation < "u" || dn("mobile"), ca = zi && on, D = zi && _i, de = !window.PointerEvent && window.MSPointerEvent, J = !!(window.PointerEvent || de), pe = "ontouchstart" in window || !!window.TouchEvent, Ve = !window.L_NO_TOUCH && (pe || J), Fe = zi && Eo, ot = zi && $n, vt = (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1, Ft = (function() {
        var e = !1;
        try {
          var n = Object.defineProperty({}, "passive", {
            get: function() {
              e = !0;
            }
          });
          window.addEventListener("testPassiveEventSupport", b, n), window.removeEventListener("testPassiveEventSupport", b, n);
        } catch {
        }
        return e;
      })(), $t = (function() {
        return !!document.createElement("canvas").getContext;
      })(), cn = !!(document.createElementNS && Ii("svg").createSVGRect), Qt = !!cn && (function() {
        var e = document.createElement("div");
        return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) === "http://www.w3.org/2000/svg";
      })(), Dn = !cn && (function() {
        try {
          var e = document.createElement("div");
          e.innerHTML = '<v:shape adj="1"/>';
          var n = e.firstChild;
          return n.style.behavior = "url(#default#VML)", n && typeof n.adj == "object";
        } catch {
          return !1;
        }
      })(), nr = navigator.platform.indexOf("Mac") === 0, Sr = navigator.platform.indexOf("Linux") === 0;
      function dn(e) {
        return navigator.userAgent.toLowerCase().indexOf(e) >= 0;
      }
      var Se = {
        ie: wr,
        ielt9: Qi,
        edge: ni,
        webkit: on,
        android: er,
        android23: tr,
        androidStock: ki,
        opera: Eo,
        chrome: Di,
        gecko: $n,
        safari: Co,
        phantom: br,
        opera12: Fi,
        win: Ao,
        ie3d: Hr,
        webkit3d: _i,
        gecko3d: Bi,
        any3d: Ri,
        mobile: zi,
        mobileWebkit: ca,
        mobileWebkit3d: D,
        msPointer: de,
        pointer: J,
        touch: Ve,
        touchNative: pe,
        mobileOpera: Fe,
        mobileGecko: ot,
        retina: vt,
        passiveEvents: Ft,
        canvas: $t,
        svg: cn,
        vml: Dn,
        inlineSvg: Qt,
        mac: nr,
        linux: Sr
      }, Bt = Se.msPointer ? "MSPointerDown" : "pointerdown", Fn = Se.msPointer ? "MSPointerMove" : "pointermove", wt = Se.msPointer ? "MSPointerUp" : "pointerup", Tn = Se.msPointer ? "MSPointerCancel" : "pointercancel", mn = {
        touchstart: Bt,
        touchmove: Fn,
        touchend: wt,
        touchcancel: Tn
      }, yi = {
        touchstart: pa,
        touchmove: ha,
        touchend: ha,
        touchcancel: ha
      }, Gt = {}, qr = !1;
      function ir(e, n, s) {
        return n === "touchstart" && fa(), yi[n] ? (s = yi[n].bind(this, s), e.addEventListener(mn[n], s, !1), s) : (console.warn("wrong event specified:", n), b);
      }
      function Jn(e, n, s) {
        if (!mn[n]) {
          console.warn("wrong event specified:", n);
          return;
        }
        e.removeEventListener(mn[n], s, !1);
      }
      function xn(e) {
        Gt[e.pointerId] = e;
      }
      function Tr(e) {
        Gt[e.pointerId] && (Gt[e.pointerId] = e);
      }
      function da(e) {
        delete Gt[e.pointerId];
      }
      function fa() {
        qr || (document.addEventListener(Bt, xn, !0), document.addEventListener(Fn, Tr, !0), document.addEventListener(wt, da, !0), document.addEventListener(Tn, da, !0), qr = !0);
      }
      function ha(e, n) {
        if (n.pointerType !== (n.MSPOINTER_TYPE_MOUSE || "mouse")) {
          n.touches = [];
          for (var s in Gt)
            n.touches.push(Gt[s]);
          n.changedTouches = [n], e(n);
        }
      }
      function pa(e, n) {
        n.MSPOINTER_TYPE_TOUCH && n.pointerType === n.MSPOINTER_TYPE_TOUCH && He(n), ha(e, n);
      }
      function Wu(e) {
        var n = {}, s, c;
        for (c in e)
          s = e[c], n[c] = s && s.bind ? s.bind(e) : s;
        return e = n, n.type = "dblclick", n.detail = 2, n.isTrusted = !1, n._simulated = !0, n;
      }
      var Vu = 200;
      function Zu(e, n) {
        e.addEventListener("dblclick", n);
        var s = 0, c;
        function p(y) {
          if (y.detail !== 1) {
            c = y.detail;
            return;
          }
          if (!(y.pointerType === "mouse" || y.sourceCapabilities && !y.sourceCapabilities.firesTouchEvents)) {
            var A = El(y);
            if (!(A.some(function(V) {
              return V instanceof HTMLLabelElement && V.attributes.for;
            }) && !A.some(function(V) {
              return V instanceof HTMLInputElement || V instanceof HTMLSelectElement;
            }))) {
              var F = Date.now();
              F - s <= Vu ? (c++, c === 2 && n(Wu(y))) : c = 1, s = F;
            }
          }
        }
        return e.addEventListener("click", p), {
          dblclick: n,
          simDblclick: p
        };
      }
      function _l(e, n) {
        e.removeEventListener("dblclick", n.dblclick), e.removeEventListener("click", n.simDblclick);
      }
      var ma = Jr(
        ["transform", "webkitTransform", "OTransform", "MozTransform", "msTransform"]
      ), $r = Jr(
        ["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]
      ), yl = $r === "webkitTransition" || $r === "OTransition" ? $r + "End" : "transitionend";
      function wl(e) {
        return typeof e == "string" ? document.getElementById(e) : e;
      }
      function Po(e, n) {
        var s = e.style[n] || e.currentStyle && e.currentStyle[n];
        if ((!s || s === "auto") && document.defaultView) {
          var c = document.defaultView.getComputedStyle(e, null);
          s = c ? c[n] : null;
        }
        return s === "auto" ? null : s;
      }
      function lt(e, n, s) {
        var c = document.createElement(e);
        return c.className = n || "", s && s.appendChild(c), c;
      }
      function xt(e) {
        var n = e.parentNode;
        n && n.removeChild(e);
      }
      function Lo(e) {
        for (; e.firstChild; )
          e.removeChild(e.firstChild);
      }
      function xr(e) {
        var n = e.parentNode;
        n && n.lastChild !== e && n.appendChild(e);
      }
      function rr(e) {
        var n = e.parentNode;
        n && n.firstChild !== e && n.insertBefore(e, n.firstChild);
      }
      function ts(e, n) {
        if (e.classList !== void 0)
          return e.classList.contains(n);
        var s = va(e);
        return s.length > 0 && new RegExp("(^|\\s)" + n + "(\\s|$)").test(s);
      }
      function Ue(e, n) {
        if (e.classList !== void 0)
          for (var s = z(n), c = 0, p = s.length; c < p; c++)
            e.classList.add(s[c]);
        else if (!ts(e, n)) {
          var y = va(e);
          ga(e, (y ? y + " " : "") + n);
        }
      }
      function Et(e, n) {
        e.classList !== void 0 ? e.classList.remove(n) : ga(e, P((" " + va(e) + " ").replace(" " + n + " ", " ")));
      }
      function ga(e, n) {
        e.className.baseVal === void 0 ? e.className = n : e.className.baseVal = n;
      }
      function va(e) {
        return e.correspondingElement && (e = e.correspondingElement), e.className.baseVal === void 0 ? e.className : e.className.baseVal;
      }
      function Bn(e, n) {
        "opacity" in e.style ? e.style.opacity = n : "filter" in e.style && bl(e, n);
      }
      function bl(e, n) {
        var s = !1, c = "DXImageTransform.Microsoft.Alpha";
        try {
          s = e.filters.item(c);
        } catch {
          if (n === 1)
            return;
        }
        n = Math.round(n * 100), s ? (s.Enabled = n !== 100, s.Opacity = n) : e.style.filter += " progid:" + c + "(opacity=" + n + ")";
      }
      function Jr(e) {
        for (var n = document.documentElement.style, s = 0; s < e.length; s++)
          if (e[s] in n)
            return e[s];
        return !1;
      }
      function Er(e, n, s) {
        var c = n || new ye(0, 0);
        e.style[ma] = (Se.ie3d ? "translate(" + c.x + "px," + c.y + "px)" : "translate3d(" + c.x + "px," + c.y + "px,0)") + (s ? " scale(" + s + ")" : "");
      }
      function Rt(e, n) {
        e._leaflet_pos = n, Se.any3d ? Er(e, n) : (e.style.left = n.x + "px", e.style.top = n.y + "px");
      }
      function Ni(e) {
        return e._leaflet_pos || new ye(0, 0);
      }
      var Cr, wi, _a;
      if ("onselectstart" in document)
        Cr = function() {
          Ze(window, "selectstart", He);
        }, wi = function() {
          bt(window, "selectstart", He);
        };
      else {
        var jr = Jr(
          ["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]
        );
        Cr = function() {
          if (jr) {
            var e = document.documentElement.style;
            _a = e[jr], e[jr] = "none";
          }
        }, wi = function() {
          jr && (document.documentElement.style[jr] = _a, _a = void 0);
        };
      }
      function ns() {
        Ze(window, "dragstart", He);
      }
      function ya() {
        bt(window, "dragstart", He);
      }
      var Oo, wa;
      function ba(e) {
        for (; e.tabIndex === -1; )
          e = e.parentNode;
        e.style && (Sa(), Oo = e, wa = e.style.outlineStyle, e.style.outlineStyle = "none", Ze(window, "keydown", Sa));
      }
      function Sa() {
        Oo && (Oo.style.outlineStyle = wa, Oo = void 0, wa = void 0, bt(window, "keydown", Sa));
      }
      function Sl(e) {
        do
          e = e.parentNode;
        while ((!e.offsetWidth || !e.offsetHeight) && e !== document.body);
        return e;
      }
      function is(e) {
        var n = e.getBoundingClientRect();
        return {
          x: n.width / e.offsetWidth || 1,
          y: n.height / e.offsetHeight || 1,
          boundingClientRect: n
        };
      }
      var Tl = {
        __proto__: null,
        TRANSFORM: ma,
        TRANSITION: $r,
        TRANSITION_END: yl,
        get: wl,
        getStyle: Po,
        create: lt,
        remove: xt,
        empty: Lo,
        toFront: xr,
        toBack: rr,
        hasClass: ts,
        addClass: Ue,
        removeClass: Et,
        setClass: ga,
        getClass: va,
        setOpacity: Bn,
        testProp: Jr,
        setTransform: Er,
        setPosition: Rt,
        getPosition: Ni,
        get disableTextSelection() {
          return Cr;
        },
        get enableTextSelection() {
          return wi;
        },
        disableImageDrag: ns,
        enableImageDrag: ya,
        preventOutline: ba,
        restoreOutline: Sa,
        getSizedParentNode: Sl,
        getScale: is
      };
      function Ze(e, n, s, c) {
        if (n && typeof n == "object")
          for (var p in n)
            rs(e, p, n[p], s);
        else {
          n = z(n);
          for (var y = 0, A = n.length; y < A; y++)
            rs(e, n[y], s, c);
        }
        return this;
      }
      var bi = "_leaflet_events";
      function bt(e, n, s, c) {
        if (arguments.length === 1)
          xl(e), delete e[bi];
        else if (n && typeof n == "object")
          for (var p in n)
            os(e, p, n[p], s);
        else if (n = z(n), arguments.length === 2)
          xl(e, function(F) {
            return M(n, F) !== -1;
          });
        else
          for (var y = 0, A = n.length; y < A; y++)
            os(e, n[y], s, c);
        return this;
      }
      function xl(e, n) {
        for (var s in e[bi]) {
          var c = s.split(/\d/)[0];
          (!n || n(c)) && os(e, c, null, null, s);
        }
      }
      var Mo = {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        wheel: !("onwheel" in window) && "mousewheel"
      };
      function rs(e, n, s, c) {
        var p = n + v(s) + (c ? "_" + v(c) : "");
        if (e[bi] && e[bi][p])
          return this;
        var y = function(F) {
          return s.call(c || e, F || window.event);
        }, A = y;
        !Se.touchNative && Se.pointer && n.indexOf("touch") === 0 ? y = ir(e, n, y) : Se.touch && n === "dblclick" ? y = Zu(e, y) : "addEventListener" in e ? n === "touchstart" || n === "touchmove" || n === "wheel" || n === "mousewheel" ? e.addEventListener(Mo[n] || n, y, Se.passiveEvents ? { passive: !1 } : !1) : n === "mouseenter" || n === "mouseleave" ? (y = function(F) {
          F = F || window.event, ss(e, F) && A(F);
        }, e.addEventListener(Mo[n], y, !1)) : e.addEventListener(n, A, !1) : e.attachEvent("on" + n, y), e[bi] = e[bi] || {}, e[bi][p] = y;
      }
      function os(e, n, s, c, p) {
        p = p || n + v(s) + (c ? "_" + v(c) : "");
        var y = e[bi] && e[bi][p];
        if (!y)
          return this;
        !Se.touchNative && Se.pointer && n.indexOf("touch") === 0 ? Jn(e, n, y) : Se.touch && n === "dblclick" ? _l(e, y) : "removeEventListener" in e ? e.removeEventListener(Mo[n] || n, y, !1) : e.detachEvent("on" + n, y), e[bi][p] = null;
      }
      function Ar(e) {
        return e.stopPropagation ? e.stopPropagation() : e.originalEvent ? e.originalEvent._stopped = !0 : e.cancelBubble = !0, this;
      }
      function as(e) {
        return rs(e, "wheel", Ar), this;
      }
      function Io(e) {
        return Ze(e, "mousedown touchstart dblclick contextmenu", Ar), e._leaflet_disable_click = !0, this;
      }
      function He(e) {
        return e.preventDefault ? e.preventDefault() : e.returnValue = !1, this;
      }
      function ut(e) {
        return He(e), Ar(e), this;
      }
      function El(e) {
        if (e.composedPath)
          return e.composedPath();
        for (var n = [], s = e.target; s; )
          n.push(s), s = s.parentNode;
        return n;
      }
      function Cl(e, n) {
        if (!n)
          return new ye(e.clientX, e.clientY);
        var s = is(n), c = s.boundingClientRect;
        return new ye(
          // offset.left/top values are in page scale (like clientX/Y),
          // whereas clientLeft/Top (border width) values are the original values (before CSS scale applies).
          (e.clientX - c.left) / s.x - n.clientLeft,
          (e.clientY - c.top) / s.y - n.clientTop
        );
      }
      var Uu = Se.linux && Se.chrome ? window.devicePixelRatio : Se.mac ? window.devicePixelRatio * 3 : window.devicePixelRatio > 0 ? 2 * window.devicePixelRatio : 1;
      function Al(e) {
        return Se.edge ? e.wheelDeltaY / 2 : (
          // Don't trust window-geometry-based delta
          e.deltaY && e.deltaMode === 0 ? -e.deltaY / Uu : (
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
      function ss(e, n) {
        var s = n.relatedTarget;
        if (!s)
          return !0;
        try {
          for (; s && s !== e; )
            s = s.parentNode;
        } catch {
          return !1;
        }
        return s !== e;
      }
      var Hu = {
        __proto__: null,
        on: Ze,
        off: bt,
        stopPropagation: Ar,
        disableScrollPropagation: as,
        disableClickPropagation: Io,
        preventDefault: He,
        stop: ut,
        getPropagationPath: El,
        getMousePosition: Cl,
        getWheelDelta: Al,
        isExternalTarget: ss,
        addListener: Ze,
        removeListener: bt
      }, ls = ke.extend({
        // @method run(el: HTMLElement, newPos: Point, duration?: Number, easeLinearity?: Number)
        // Run an animation of a given element to a new position, optionally setting
        // duration in seconds (`0.25` by default) and easing linearity factor (3rd
        // argument of the [cubic bezier curve](https://cubic-bezier.com/#0,0,.5,1),
        // `0.5` by default).
        run: function(e, n, s, c) {
          this.stop(), this._el = e, this._inProgress = !0, this._duration = s || 0.25, this._easeOutPower = 1 / Math.max(c || 0.5, 0.2), this._startPos = Ni(e), this._offset = n.subtract(this._startPos), this._startTime = +/* @__PURE__ */ new Date(), this.fire("start"), this._animate();
        },
        // @method stop()
        // Stops the animation (if currently running).
        stop: function() {
          this._inProgress && (this._step(!0), this._complete());
        },
        _animate: function() {
          this._animId = Q(this._animate, this), this._step();
        },
        _step: function(e) {
          var n = +/* @__PURE__ */ new Date() - this._startTime, s = this._duration * 1e3;
          n < s ? this._runFrame(this._easeOut(n / s), e) : (this._runFrame(1), this._complete());
        },
        _runFrame: function(e, n) {
          var s = this._startPos.add(this._offset.multiplyBy(e));
          n && s._round(), Rt(this._el, s), this.fire("step");
        },
        _complete: function() {
          G(this._animId), this._inProgress = !1, this.fire("end");
        },
        _easeOut: function(e) {
          return 1 - Math.pow(1 - e, this._easeOutPower);
        }
      }), it = ke.extend({
        options: {
          // @section Map State Options
          // @option crs: CRS = L.CRS.EPSG3857
          // The [Coordinate Reference System](#crs) to use. Don't change this if you're not
          // sure what it means.
          crs: Ki,
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
        initialize: function(e, n) {
          n = R(this, n), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this._initContainer(e), this._initLayout(), this._onResize = m(this._onResize, this), this._initEvents(), n.maxBounds && this.setMaxBounds(n.maxBounds), n.zoom !== void 0 && (this._zoom = this._limitZoom(n.zoom)), n.center && n.zoom !== void 0 && this.setView(Ne(n.center), n.zoom, { reset: !0 }), this.callInitHooks(), this._zoomAnimated = $r && Se.any3d && !Se.mobileOpera && this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), Ze(this._proxy, yl, this._catchTransitionEnd, this)), this._addLayers(this.options.layers);
        },
        // @section Methods for modifying map state
        // @method setView(center: LatLng, zoom: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) with the given
        // animation options.
        setView: function(e, n, s) {
          if (n = n === void 0 ? this._zoom : this._limitZoom(n), e = this._limitCenter(Ne(e), n, this.options.maxBounds), s = s || {}, this._stop(), this._loaded && !s.reset && s !== !0) {
            s.animate !== void 0 && (s.zoom = d({ animate: s.animate }, s.zoom), s.pan = d({ animate: s.animate, duration: s.duration }, s.pan));
            var c = this._zoom !== n ? this._tryAnimatedZoom && this._tryAnimatedZoom(e, n, s.zoom) : this._tryAnimatedPan(e, s.pan);
            if (c)
              return clearTimeout(this._sizeTimer), this;
          }
          return this._resetView(e, n, s.pan && s.pan.noMoveStart), this;
        },
        // @method setZoom(zoom: Number, options?: Zoom/pan options): this
        // Sets the zoom of the map.
        setZoom: function(e, n) {
          return this._loaded ? this.setView(this.getCenter(), e, { zoom: n }) : (this._zoom = e, this);
        },
        // @method zoomIn(delta?: Number, options?: Zoom options): this
        // Increases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomIn: function(e, n) {
          return e = e || (Se.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom + e, n);
        },
        // @method zoomOut(delta?: Number, options?: Zoom options): this
        // Decreases the zoom of the map by `delta` ([`zoomDelta`](#map-zoomdelta) by default).
        zoomOut: function(e, n) {
          return e = e || (Se.any3d ? this.options.zoomDelta : 1), this.setZoom(this._zoom - e, n);
        },
        // @method setZoomAround(latlng: LatLng, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified geographical point on the map
        // stationary (e.g. used internally for scroll zoom and double-click zoom).
        // @alternative
        // @method setZoomAround(offset: Point, zoom: Number, options: Zoom options): this
        // Zooms the map while keeping a specified pixel on the map (relative to the top-left corner) stationary.
        setZoomAround: function(e, n, s) {
          var c = this.getZoomScale(n), p = this.getSize().divideBy(2), y = e instanceof ye ? e : this.latLngToContainerPoint(e), A = y.subtract(p).multiplyBy(1 - 1 / c), F = this.containerPointToLatLng(p.add(A));
          return this.setView(F, n, { zoom: s });
        },
        _getBoundsCenterZoom: function(e, n) {
          n = n || {}, e = e.getBounds ? e.getBounds() : oe(e);
          var s = j(n.paddingTopLeft || n.padding || [0, 0]), c = j(n.paddingBottomRight || n.padding || [0, 0]), p = this.getBoundsZoom(e, !1, s.add(c));
          if (p = typeof n.maxZoom == "number" ? Math.min(n.maxZoom, p) : p, p === 1 / 0)
            return {
              center: e.getCenter(),
              zoom: p
            };
          var y = c.subtract(s).divideBy(2), A = this.project(e.getSouthWest(), p), F = this.project(e.getNorthEast(), p), V = this.unproject(A.add(F).divideBy(2).add(y), p);
          return {
            center: V,
            zoom: p
          };
        },
        // @method fitBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets a map view that contains the given geographical bounds with the
        // maximum zoom level possible.
        fitBounds: function(e, n) {
          if (e = oe(e), !e.isValid())
            throw new Error("Bounds are not valid.");
          var s = this._getBoundsCenterZoom(e, n);
          return this.setView(s.center, s.zoom, n);
        },
        // @method fitWorld(options?: fitBounds options): this
        // Sets a map view that mostly contains the whole world with the maximum
        // zoom level possible.
        fitWorld: function(e) {
          return this.fitBounds([[-90, -180], [90, 180]], e);
        },
        // @method panTo(latlng: LatLng, options?: Pan options): this
        // Pans the map to a given center.
        panTo: function(e, n) {
          return this.setView(e, this._zoom, { pan: n });
        },
        // @method panBy(offset: Point, options?: Pan options): this
        // Pans the map by a given number of pixels (animated).
        panBy: function(e, n) {
          if (e = j(e).round(), n = n || {}, !e.x && !e.y)
            return this.fire("moveend");
          if (n.animate !== !0 && !this.getSize().contains(e))
            return this._resetView(this.unproject(this.project(this.getCenter()).add(e)), this.getZoom()), this;
          if (this._panAnim || (this._panAnim = new ls(), this._panAnim.on({
            step: this._onPanTransitionStep,
            end: this._onPanTransitionEnd
          }, this)), n.noMoveStart || this.fire("movestart"), n.animate !== !1) {
            Ue(this._mapPane, "leaflet-pan-anim");
            var s = this._getMapPanePos().subtract(e).round();
            this._panAnim.run(this._mapPane, s, n.duration || 0.25, n.easeLinearity);
          } else
            this._rawPanBy(e), this.fire("move").fire("moveend");
          return this;
        },
        // @method flyTo(latlng: LatLng, zoom?: Number, options?: Zoom/pan options): this
        // Sets the view of the map (geographical center and zoom) performing a smooth
        // pan-zoom animation.
        flyTo: function(e, n, s) {
          if (s = s || {}, s.animate === !1 || !Se.any3d)
            return this.setView(e, n, s);
          this._stop();
          var c = this.project(this.getCenter()), p = this.project(e), y = this.getSize(), A = this._zoom;
          e = Ne(e), n = n === void 0 ? A : n;
          var F = Math.max(y.x, y.y), V = F * this.getZoomScale(A, n), ee = p.distanceTo(c) || 1, ve = 1.42, Ce = ve * ve;
          function Je(Ct) {
            var qo = Ct ? -1 : 1, w = Ct ? V : F, oo = V * V - F * F + qo * Ce * Ce * ee * ee, Da = 2 * w * Ce * ee, Pn = oo / Da, et = Math.sqrt(Pn * Pn + 1) - Pn, oc = et < 1e-9 ? -18 : Math.log(et);
            return oc;
          }
          function Wt(Ct) {
            return (Math.exp(Ct) - Math.exp(-Ct)) / 2;
          }
          function It(Ct) {
            return (Math.exp(Ct) + Math.exp(-Ct)) / 2;
          }
          function fn(Ct) {
            return Wt(Ct) / It(Ct);
          }
          var sn = Je(0);
          function ri(Ct) {
            return F * (It(sn) / It(sn + ve * Ct));
          }
          function tc(Ct) {
            return F * (It(sn) * fn(sn + ve * Ct) - Wt(sn)) / Ce;
          }
          function nc(Ct) {
            return 1 - Math.pow(1 - Ct, 1.5);
          }
          var ic = Date.now(), Zl = (Je(1) - sn) / ve, rc = s.duration ? 1e3 * s.duration : 1e3 * Zl * 0.8;
          function Ho() {
            var Ct = (Date.now() - ic) / rc, qo = nc(Ct) * Zl;
            Ct <= 1 ? (this._flyToFrame = Q(Ho, this), this._move(
              this.unproject(c.add(p.subtract(c).multiplyBy(tc(qo) / ee)), A),
              this.getScaleZoom(F / ri(qo), A),
              { flyTo: !0 }
            )) : this._move(e, n)._moveEnd(!0);
          }
          return this._moveStart(!0, s.noMoveStart), Ho.call(this), this;
        },
        // @method flyToBounds(bounds: LatLngBounds, options?: fitBounds options): this
        // Sets the view of the map with a smooth animation like [`flyTo`](#map-flyto),
        // but takes a bounds parameter like [`fitBounds`](#map-fitbounds).
        flyToBounds: function(e, n) {
          var s = this._getBoundsCenterZoom(e, n);
          return this.flyTo(s.center, s.zoom, n);
        },
        // @method setMaxBounds(bounds: LatLngBounds): this
        // Restricts the map view to the given bounds (see the [maxBounds](#map-maxbounds) option).
        setMaxBounds: function(e) {
          return e = oe(e), this.listens("moveend", this._panInsideMaxBounds) && this.off("moveend", this._panInsideMaxBounds), e.isValid() ? (this.options.maxBounds = e, this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : (this.options.maxBounds = null, this);
        },
        // @method setMinZoom(zoom: Number): this
        // Sets the lower limit for the available zoom levels (see the [minZoom](#map-minzoom) option).
        setMinZoom: function(e) {
          var n = this.options.minZoom;
          return this.options.minZoom = e, this._loaded && n !== e && (this.fire("zoomlevelschange"), this.getZoom() < this.options.minZoom) ? this.setZoom(e) : this;
        },
        // @method setMaxZoom(zoom: Number): this
        // Sets the upper limit for the available zoom levels (see the [maxZoom](#map-maxzoom) option).
        setMaxZoom: function(e) {
          var n = this.options.maxZoom;
          return this.options.maxZoom = e, this._loaded && n !== e && (this.fire("zoomlevelschange"), this.getZoom() > this.options.maxZoom) ? this.setZoom(e) : this;
        },
        // @method panInsideBounds(bounds: LatLngBounds, options?: Pan options): this
        // Pans the map to the closest view that would lie inside the given bounds (if it's not already), controlling the animation using the options specific, if any.
        panInsideBounds: function(e, n) {
          this._enforcingBounds = !0;
          var s = this.getCenter(), c = this._limitCenter(s, this._zoom, oe(e));
          return s.equals(c) || this.panTo(c, n), this._enforcingBounds = !1, this;
        },
        // @method panInside(latlng: LatLng, options?: padding options): this
        // Pans the map the minimum amount to make the `latlng` visible. Use
        // padding options to fit the display to more restricted bounds.
        // If `latlng` is already within the (optionally padded) display bounds,
        // the map will not be panned.
        panInside: function(e, n) {
          n = n || {};
          var s = j(n.paddingTopLeft || n.padding || [0, 0]), c = j(n.paddingBottomRight || n.padding || [0, 0]), p = this.project(this.getCenter()), y = this.project(e), A = this.getPixelBounds(), F = Ge([A.min.add(s), A.max.subtract(c)]), V = F.getSize();
          if (!F.contains(y)) {
            this._enforcingBounds = !0;
            var ee = y.subtract(F.getCenter()), ve = F.extend(y).getSize().subtract(V);
            p.x += ee.x < 0 ? -ve.x : ve.x, p.y += ee.y < 0 ? -ve.y : ve.y, this.panTo(this.unproject(p), n), this._enforcingBounds = !1;
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
          var n = this.getSize();
          this._sizeChanged = !0, this._lastCenter = null;
          var s = this.getSize(), c = n.divideBy(2).round(), p = s.divideBy(2).round(), y = c.subtract(p);
          return !y.x && !y.y ? this : (e.animate && e.pan ? this.panBy(y) : (e.pan && this._rawPanBy(y), this.fire("move"), e.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(m(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
            oldSize: n,
            newSize: s
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
          var n = m(this._handleGeolocationResponse, this), s = m(this._handleGeolocationError, this);
          return e.watch ? this._locationWatchId = navigator.geolocation.watchPosition(n, s, e) : navigator.geolocation.getCurrentPosition(n, s, e), this;
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
            var n = e.code, s = e.message || (n === 1 ? "permission denied" : n === 2 ? "position unavailable" : "timeout");
            this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
              code: n,
              message: "Geolocation error: " + s + "."
            });
          }
        },
        _handleGeolocationResponse: function(e) {
          if (this._container._leaflet_id) {
            var n = e.coords.latitude, s = e.coords.longitude, c = new De(n, s), p = c.toBounds(e.coords.accuracy * 2), y = this._locateOptions;
            if (y.setView) {
              var A = this.getBoundsZoom(p);
              this.setView(c, y.maxZoom ? Math.min(A, y.maxZoom) : A);
            }
            var F = {
              latlng: c,
              bounds: p,
              timestamp: e.timestamp
            };
            for (var V in e.coords)
              typeof e.coords[V] == "number" && (F[V] = e.coords[V]);
            this.fire("locationfound", F);
          }
        },
        // TODO Appropriate docs section?
        // @section Other Methods
        // @method addHandler(name: String, HandlerClass: Function): this
        // Adds a new `Handler` to the map, given its name and constructor function.
        addHandler: function(e, n) {
          if (!n)
            return this;
          var s = this[e] = new n(this);
          return this._handlers.push(s), this.options[e] && s.enable(), this;
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
          this._locationWatchId !== void 0 && this.stopLocate(), this._stop(), xt(this._mapPane), this._clearControlPos && this._clearControlPos(), this._resizeRequest && (G(this._resizeRequest), this._resizeRequest = null), this._clearHandlers(), this._loaded && this.fire("unload");
          var e;
          for (e in this._layers)
            this._layers[e].remove();
          for (e in this._panes)
            xt(this._panes[e]);
          return this._layers = [], this._panes = [], delete this._mapPane, delete this._renderer, this;
        },
        // @section Other Methods
        // @method createPane(name: String, container?: HTMLElement): HTMLElement
        // Creates a new [map pane](#map-pane) with the given name if it doesn't exist already,
        // then returns it. The pane is created as a child of `container`, or
        // as a child of the main map pane if not set.
        createPane: function(e, n) {
          var s = "leaflet-pane" + (e ? " leaflet-" + e.replace("Pane", "") + "-pane" : ""), c = lt("div", s, n || this._mapPane);
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
          var e = this.getPixelBounds(), n = this.unproject(e.getBottomLeft()), s = this.unproject(e.getTopRight());
          return new gt(n, s);
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
        getBoundsZoom: function(e, n, s) {
          e = oe(e), s = j(s || [0, 0]);
          var c = this.getZoom() || 0, p = this.getMinZoom(), y = this.getMaxZoom(), A = e.getNorthWest(), F = e.getSouthEast(), V = this.getSize().subtract(s), ee = Ge(this.project(F, c), this.project(A, c)).getSize(), ve = Se.any3d ? this.options.zoomSnap : 1, Ce = V.x / ee.x, Je = V.y / ee.y, Wt = n ? Math.max(Ce, Je) : Math.min(Ce, Je);
          return c = this.getScaleZoom(Wt, c), ve && (c = Math.round(c / (ve / 100)) * (ve / 100), c = n ? Math.ceil(c / ve) * ve : Math.floor(c / ve) * ve), Math.max(p, Math.min(y, c));
        },
        // @method getSize(): Point
        // Returns the current size of the map container (in pixels).
        getSize: function() {
          return (!this._size || this._sizeChanged) && (this._size = new ye(
            this._container.clientWidth || 0,
            this._container.clientHeight || 0
          ), this._sizeChanged = !1), this._size.clone();
        },
        // @method getPixelBounds(): Bounds
        // Returns the bounds of the current map view in projected pixel
        // coordinates (sometimes useful in layer and overlay implementations).
        getPixelBounds: function(e, n) {
          var s = this._getTopLeftPoint(e, n);
          return new he(s, s.add(this.getSize()));
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
        getZoomScale: function(e, n) {
          var s = this.options.crs;
          return n = n === void 0 ? this._zoom : n, s.scale(e) / s.scale(n);
        },
        // @method getScaleZoom(scale: Number, fromZoom: Number): Number
        // Returns the zoom level that the map would end up at, if it is at `fromZoom`
        // level and everything is scaled by a factor of `scale`. Inverse of
        // [`getZoomScale`](#map-getZoomScale).
        getScaleZoom: function(e, n) {
          var s = this.options.crs;
          n = n === void 0 ? this._zoom : n;
          var c = s.zoom(e * s.scale(n));
          return isNaN(c) ? 1 / 0 : c;
        },
        // @method project(latlng: LatLng, zoom: Number): Point
        // Projects a geographical coordinate `LatLng` according to the projection
        // of the map's CRS, then scales it according to `zoom` and the CRS's
        // `Transformation`. The result is pixel coordinate relative to
        // the CRS origin.
        project: function(e, n) {
          return n = n === void 0 ? this._zoom : n, this.options.crs.latLngToPoint(Ne(e), n);
        },
        // @method unproject(point: Point, zoom: Number): LatLng
        // Inverse of [`project`](#map-project).
        unproject: function(e, n) {
          return n = n === void 0 ? this._zoom : n, this.options.crs.pointToLatLng(j(e), n);
        },
        // @method layerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding geographical coordinate (for the current zoom level).
        layerPointToLatLng: function(e) {
          var n = j(e).add(this.getPixelOrigin());
          return this.unproject(n);
        },
        // @method latLngToLayerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the [origin pixel](#map-getpixelorigin).
        latLngToLayerPoint: function(e) {
          var n = this.project(Ne(e))._round();
          return n._subtract(this.getPixelOrigin());
        },
        // @method wrapLatLng(latlng: LatLng): LatLng
        // Returns a `LatLng` where `lat` and `lng` has been wrapped according to the
        // map's CRS's `wrapLat` and `wrapLng` properties, if they are outside the
        // CRS's bounds.
        // By default this means longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees.
        wrapLatLng: function(e) {
          return this.options.crs.wrapLatLng(Ne(e));
        },
        // @method wrapLatLngBounds(bounds: LatLngBounds): LatLngBounds
        // Returns a `LatLngBounds` with the same size as the given one, ensuring that
        // its center is within the CRS's bounds.
        // By default this means the center longitude is wrapped around the dateline so its
        // value is between -180 and +180 degrees, and the majority of the bounds
        // overlaps the CRS's bounds.
        wrapLatLngBounds: function(e) {
          return this.options.crs.wrapLatLngBounds(oe(e));
        },
        // @method distance(latlng1: LatLng, latlng2: LatLng): Number
        // Returns the distance between two geographical coordinates according to
        // the map's CRS. By default this measures distance in meters.
        distance: function(e, n) {
          return this.options.crs.distance(Ne(e), Ne(n));
        },
        // @method containerPointToLayerPoint(point: Point): Point
        // Given a pixel coordinate relative to the map container, returns the corresponding
        // pixel coordinate relative to the [origin pixel](#map-getpixelorigin).
        containerPointToLayerPoint: function(e) {
          return j(e).subtract(this._getMapPanePos());
        },
        // @method layerPointToContainerPoint(point: Point): Point
        // Given a pixel coordinate relative to the [origin pixel](#map-getpixelorigin),
        // returns the corresponding pixel coordinate relative to the map container.
        layerPointToContainerPoint: function(e) {
          return j(e).add(this._getMapPanePos());
        },
        // @method containerPointToLatLng(point: Point): LatLng
        // Given a pixel coordinate relative to the map container, returns
        // the corresponding geographical coordinate (for the current zoom level).
        containerPointToLatLng: function(e) {
          var n = this.containerPointToLayerPoint(j(e));
          return this.layerPointToLatLng(n);
        },
        // @method latLngToContainerPoint(latlng: LatLng): Point
        // Given a geographical coordinate, returns the corresponding pixel coordinate
        // relative to the map container.
        latLngToContainerPoint: function(e) {
          return this.layerPointToContainerPoint(this.latLngToLayerPoint(Ne(e)));
        },
        // @method mouseEventToContainerPoint(ev: MouseEvent): Point
        // Given a MouseEvent object, returns the pixel coordinate relative to the
        // map container where the event took place.
        mouseEventToContainerPoint: function(e) {
          return Cl(e, this._container);
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
          var n = this._container = wl(e);
          if (n) {
            if (n._leaflet_id)
              throw new Error("Map container is already initialized.");
          } else throw new Error("Map container not found.");
          Ze(n, "scroll", this._onScroll, this), this._containerId = v(n);
        },
        _initLayout: function() {
          var e = this._container;
          this._fadeAnimated = this.options.fadeAnimation && Se.any3d, Ue(e, "leaflet-container" + (Se.touch ? " leaflet-touch" : "") + (Se.retina ? " leaflet-retina" : "") + (Se.ielt9 ? " leaflet-oldie" : "") + (Se.safari ? " leaflet-safari" : "") + (this._fadeAnimated ? " leaflet-fade-anim" : ""));
          var n = Po(e, "position");
          n !== "absolute" && n !== "relative" && n !== "fixed" && n !== "sticky" && (e.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos();
        },
        _initPanes: function() {
          var e = this._panes = {};
          this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), Rt(this._mapPane, new ye(0, 0)), this.createPane("tilePane"), this.createPane("overlayPane"), this.createPane("shadowPane"), this.createPane("markerPane"), this.createPane("tooltipPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (Ue(e.markerPane, "leaflet-zoom-hide"), Ue(e.shadowPane, "leaflet-zoom-hide"));
        },
        // private methods that modify map state
        // @section Map state change events
        _resetView: function(e, n, s) {
          Rt(this._mapPane, new ye(0, 0));
          var c = !this._loaded;
          this._loaded = !0, n = this._limitZoom(n), this.fire("viewprereset");
          var p = this._zoom !== n;
          this._moveStart(p, s)._move(e, n)._moveEnd(p), this.fire("viewreset"), c && this.fire("load");
        },
        _moveStart: function(e, n) {
          return e && this.fire("zoomstart"), n || this.fire("movestart"), this;
        },
        _move: function(e, n, s, c) {
          n === void 0 && (n = this._zoom);
          var p = this._zoom !== n;
          return this._zoom = n, this._lastCenter = e, this._pixelOrigin = this._getNewPixelOrigin(e), c ? s && s.pinch && this.fire("zoom", s) : ((p || s && s.pinch) && this.fire("zoom", s), this.fire("move", s)), this;
        },
        _moveEnd: function(e) {
          return e && this.fire("zoomend"), this.fire("moveend");
        },
        _stop: function() {
          return G(this._flyToFrame), this._panAnim && this._panAnim.stop(), this;
        },
        _rawPanBy: function(e) {
          Rt(this._mapPane, this._getMapPanePos().subtract(e));
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
          this._targets = {}, this._targets[v(this._container)] = this;
          var n = e ? bt : Ze;
          n(this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup", this._handleDOMEvent, this), this.options.trackResize && n(window, "resize", this._onResize, this), Se.any3d && this.options.transform3DLimit && (e ? this.off : this.on).call(this, "moveend", this._onMoveEnd);
        },
        _onResize: function() {
          G(this._resizeRequest), this._resizeRequest = Q(
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
        _findEventTargets: function(e, n) {
          for (var s = [], c, p = n === "mouseout" || n === "mouseover", y = e.target || e.srcElement, A = !1; y; ) {
            if (c = this._targets[v(y)], c && (n === "click" || n === "preclick") && this._draggableMoved(c)) {
              A = !0;
              break;
            }
            if (c && c.listens(n, !0) && (p && !ss(y, e) || (s.push(c), p)) || y === this._container)
              break;
            y = y.parentNode;
          }
          return !s.length && !A && !p && this.listens(n, !0) && (s = [this]), s;
        },
        _isClickDisabled: function(e) {
          for (; e && e !== this._container; ) {
            if (e._leaflet_disable_click)
              return !0;
            e = e.parentNode;
          }
        },
        _handleDOMEvent: function(e) {
          var n = e.target || e.srcElement;
          if (!(!this._loaded || n._leaflet_disable_events || e.type === "click" && this._isClickDisabled(n))) {
            var s = e.type;
            s === "mousedown" && ba(n), this._fireDOMEvent(e, s);
          }
        },
        _mouseEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
        _fireDOMEvent: function(e, n, s) {
          if (e.type === "click") {
            var c = d({}, e);
            c.type = "preclick", this._fireDOMEvent(c, c.type, s);
          }
          var p = this._findEventTargets(e, n);
          if (s) {
            for (var y = [], A = 0; A < s.length; A++)
              s[A].listens(n, !0) && y.push(s[A]);
            p = y.concat(p);
          }
          if (p.length) {
            n === "contextmenu" && He(e);
            var F = p[0], V = {
              originalEvent: e
            };
            if (e.type !== "keypress" && e.type !== "keydown" && e.type !== "keyup") {
              var ee = F.getLatLng && (!F._radius || F._radius <= 10);
              V.containerPoint = ee ? this.latLngToContainerPoint(F.getLatLng()) : this.mouseEventToContainerPoint(e), V.layerPoint = this.containerPointToLayerPoint(V.containerPoint), V.latlng = ee ? F.getLatLng() : this.layerPointToLatLng(V.layerPoint);
            }
            for (A = 0; A < p.length; A++)
              if (p[A].fire(n, V, !0), V.originalEvent._stopped || p[A].options.bubblingMouseEvents === !1 && M(this._mouseEvents, n) !== -1)
                return;
          }
        },
        _draggableMoved: function(e) {
          return e = e.dragging && e.dragging.enabled() ? e : this, e.dragging && e.dragging.moved() || this.boxZoom && this.boxZoom.moved();
        },
        _clearHandlers: function() {
          for (var e = 0, n = this._handlers.length; e < n; e++)
            this._handlers[e].disable();
        },
        // @section Other Methods
        // @method whenReady(fn: Function, context?: Object): this
        // Runs the given function `fn` when the map gets initialized with
        // a view (center and zoom) and at least one layer, or immediately
        // if it's already initialized, optionally passing a function context.
        whenReady: function(e, n) {
          return this._loaded ? e.call(n || this, { target: this }) : this.on("load", e, n), this;
        },
        // private methods for getting map state
        _getMapPanePos: function() {
          return Ni(this._mapPane) || new ye(0, 0);
        },
        _moved: function() {
          var e = this._getMapPanePos();
          return e && !e.equals([0, 0]);
        },
        _getTopLeftPoint: function(e, n) {
          var s = e && n !== void 0 ? this._getNewPixelOrigin(e, n) : this.getPixelOrigin();
          return s.subtract(this._getMapPanePos());
        },
        _getNewPixelOrigin: function(e, n) {
          var s = this.getSize()._divideBy(2);
          return this.project(e, n)._subtract(s)._add(this._getMapPanePos())._round();
        },
        _latLngToNewLayerPoint: function(e, n, s) {
          var c = this._getNewPixelOrigin(s, n);
          return this.project(e, n)._subtract(c);
        },
        _latLngBoundsToNewLayerBounds: function(e, n, s) {
          var c = this._getNewPixelOrigin(s, n);
          return Ge([
            this.project(e.getSouthWest(), n)._subtract(c),
            this.project(e.getNorthWest(), n)._subtract(c),
            this.project(e.getSouthEast(), n)._subtract(c),
            this.project(e.getNorthEast(), n)._subtract(c)
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
        _limitCenter: function(e, n, s) {
          if (!s)
            return e;
          var c = this.project(e, n), p = this.getSize().divideBy(2), y = new he(c.subtract(p), c.add(p)), A = this._getBoundsOffset(y, s, n);
          return Math.abs(A.x) <= 1 && Math.abs(A.y) <= 1 ? e : this.unproject(c.add(A), n);
        },
        // adjust offset for view to get inside bounds
        _limitOffset: function(e, n) {
          if (!n)
            return e;
          var s = this.getPixelBounds(), c = new he(s.min.add(e), s.max.add(e));
          return e.add(this._getBoundsOffset(c, n));
        },
        // returns offset needed for pxBounds to get inside maxBounds at a specified zoom
        _getBoundsOffset: function(e, n, s) {
          var c = Ge(
            this.project(n.getNorthEast(), s),
            this.project(n.getSouthWest(), s)
          ), p = c.min.subtract(e.min), y = c.max.subtract(e.max), A = this._rebound(p.x, -y.x), F = this._rebound(p.y, -y.y);
          return new ye(A, F);
        },
        _rebound: function(e, n) {
          return e + n > 0 ? Math.round(e - n) / 2 : Math.max(0, Math.ceil(e)) - Math.max(0, Math.floor(n));
        },
        _limitZoom: function(e) {
          var n = this.getMinZoom(), s = this.getMaxZoom(), c = Se.any3d ? this.options.zoomSnap : 1;
          return c && (e = Math.round(e / c) * c), Math.max(n, Math.min(s, e));
        },
        _onPanTransitionStep: function() {
          this.fire("move");
        },
        _onPanTransitionEnd: function() {
          Et(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
        },
        _tryAnimatedPan: function(e, n) {
          var s = this._getCenterOffset(e)._trunc();
          return (n && n.animate) !== !0 && !this.getSize().contains(s) ? !1 : (this.panBy(s, n), !0);
        },
        _createAnimProxy: function() {
          var e = this._proxy = lt("div", "leaflet-proxy leaflet-zoom-animated");
          this._panes.mapPane.appendChild(e), this.on("zoomanim", function(n) {
            var s = ma, c = this._proxy.style[s];
            Er(this._proxy, this.project(n.center, n.zoom), this.getZoomScale(n.zoom, 1)), c === this._proxy.style[s] && this._animatingZoom && this._onZoomTransitionEnd();
          }, this), this.on("load moveend", this._animMoveEnd, this), this._on("unload", this._destroyAnimProxy, this);
        },
        _destroyAnimProxy: function() {
          xt(this._proxy), this.off("load moveend", this._animMoveEnd, this), delete this._proxy;
        },
        _animMoveEnd: function() {
          var e = this.getCenter(), n = this.getZoom();
          Er(this._proxy, this.project(e, n), this.getZoomScale(n, 1));
        },
        _catchTransitionEnd: function(e) {
          this._animatingZoom && e.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd();
        },
        _nothingToAnimate: function() {
          return !this._container.getElementsByClassName("leaflet-zoom-animated").length;
        },
        _tryAnimatedZoom: function(e, n, s) {
          if (this._animatingZoom)
            return !0;
          if (s = s || {}, !this._zoomAnimated || s.animate === !1 || this._nothingToAnimate() || Math.abs(n - this._zoom) > this.options.zoomAnimationThreshold)
            return !1;
          var c = this.getZoomScale(n), p = this._getCenterOffset(e)._divideBy(1 - 1 / c);
          return s.animate !== !0 && !this.getSize().contains(p) ? !1 : (Q(function() {
            this._moveStart(!0, s.noMoveStart || !1)._animateZoom(e, n, !0);
          }, this), !0);
        },
        _animateZoom: function(e, n, s, c) {
          this._mapPane && (s && (this._animatingZoom = !0, this._animateToCenter = e, this._animateToZoom = n, Ue(this._mapPane, "leaflet-zoom-anim")), this.fire("zoomanim", {
            center: e,
            zoom: n,
            noUpdate: c
          }), this._tempFireZoomEvent || (this._tempFireZoomEvent = this._zoom !== this._animateToZoom), this._move(this._animateToCenter, this._animateToZoom, void 0, !0), setTimeout(m(this._onZoomTransitionEnd, this), 250));
        },
        _onZoomTransitionEnd: function() {
          this._animatingZoom && (this._mapPane && Et(this._mapPane, "leaflet-zoom-anim"), this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom, void 0, !0), this._tempFireZoomEvent && this.fire("zoom"), delete this._tempFireZoomEvent, this.fire("move"), this._moveEnd(!0));
        }
      });
      function an(e, n) {
        return new it(e, n);
      }
      var Rn = ge.extend({
        // @section
        // @aka Control Options
        options: {
          // @option position: String = 'topright'
          // The position of the control (one of the map corners). Possible values are `'topleft'`,
          // `'topright'`, `'bottomleft'` or `'bottomright'`
          position: "topright"
        },
        initialize: function(e) {
          R(this, e);
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
          var n = this._map;
          return n && n.removeControl(this), this.options.position = e, n && n.addControl(this), this;
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
          var n = this._container = this.onAdd(e), s = this.getPosition(), c = e._controlCorners[s];
          return Ue(n, "leaflet-control"), s.indexOf("bottom") !== -1 ? c.insertBefore(n, c.firstChild) : c.appendChild(n), this._map.on("unload", this.remove, this), this;
        },
        // @method remove: this
        // Removes the control from the map it is currently active on.
        remove: function() {
          return this._map ? (xt(this._container), this.onRemove && this.onRemove(this._map), this._map.off("unload", this.remove, this), this._map = null, this) : this;
        },
        _refocusOnMap: function(e) {
          this._map && e && e.screenX > 0 && e.screenY > 0 && this._map.getContainer().focus();
        }
      }), ii = function(e) {
        return new Rn(e);
      };
      it.include({
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
          var e = this._controlCorners = {}, n = "leaflet-", s = this._controlContainer = lt("div", n + "control-container", this._container);
          function c(p, y) {
            var A = n + p + " " + n + y;
            e[p + y] = lt("div", A, s);
          }
          c("top", "left"), c("top", "right"), c("bottom", "left"), c("bottom", "right");
        },
        _clearControlPos: function() {
          for (var e in this._controlCorners)
            xt(this._controlCorners[e]);
          xt(this._controlContainer), delete this._controlCorners, delete this._controlContainer;
        }
      });
      var us = Rn.extend({
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
          sortFunction: function(e, n, s, c) {
            return s < c ? -1 : c < s ? 1 : 0;
          }
        },
        initialize: function(e, n, s) {
          R(this, s), this._layerControlInputs = [], this._layers = [], this._lastZIndex = 0, this._handlingClick = !1, this._preventClick = !1;
          for (var c in e)
            this._addLayer(e[c], c);
          for (c in n)
            this._addLayer(n[c], c, !0);
        },
        onAdd: function(e) {
          this._initLayout(), this._update(), this._map = e, e.on("zoomend", this._checkDisabledLayers, this);
          for (var n = 0; n < this._layers.length; n++)
            this._layers[n].layer.on("add remove", this._onLayerChange, this);
          return this._container;
        },
        addTo: function(e) {
          return Rn.prototype.addTo.call(this, e), this._expandIfNotCollapsed();
        },
        onRemove: function() {
          this._map.off("zoomend", this._checkDisabledLayers, this);
          for (var e = 0; e < this._layers.length; e++)
            this._layers[e].layer.off("add remove", this._onLayerChange, this);
        },
        // @method addBaseLayer(layer: Layer, name: String): this
        // Adds a base layer (radio button entry) with the given name to the control.
        addBaseLayer: function(e, n) {
          return this._addLayer(e, n), this._map ? this._update() : this;
        },
        // @method addOverlay(layer: Layer, name: String): this
        // Adds an overlay (checkbox entry) with the given name to the control.
        addOverlay: function(e, n) {
          return this._addLayer(e, n, !0), this._map ? this._update() : this;
        },
        // @method removeLayer(layer: Layer): this
        // Remove the given layer from the control.
        removeLayer: function(e) {
          e.off("add remove", this._onLayerChange, this);
          var n = this._getLayer(v(e));
          return n && this._layers.splice(this._layers.indexOf(n), 1), this._map ? this._update() : this;
        },
        // @method expand(): this
        // Expand the control container if collapsed.
        expand: function() {
          Ue(this._container, "leaflet-control-layers-expanded"), this._section.style.height = null;
          var e = this._map.getSize().y - (this._container.offsetTop + 50);
          return e < this._section.clientHeight ? (Ue(this._section, "leaflet-control-layers-scrollbar"), this._section.style.height = e + "px") : Et(this._section, "leaflet-control-layers-scrollbar"), this._checkDisabledLayers(), this;
        },
        // @method collapse(): this
        // Collapse the control container if expanded.
        collapse: function() {
          return Et(this._container, "leaflet-control-layers-expanded"), this;
        },
        _initLayout: function() {
          var e = "leaflet-control-layers", n = this._container = lt("div", e), s = this.options.collapsed;
          n.setAttribute("aria-haspopup", !0), Io(n), as(n);
          var c = this._section = lt("section", e + "-list");
          s && (this._map.on("click", this.collapse, this), Ze(n, {
            mouseenter: this._expandSafely,
            mouseleave: this.collapse
          }, this));
          var p = this._layersLink = lt("a", e + "-toggle", n);
          p.href = "#", p.title = "Layers", p.setAttribute("role", "button"), Ze(p, {
            keydown: function(y) {
              y.keyCode === 13 && this._expandSafely();
            },
            // Certain screen readers intercept the key event and instead send a click event
            click: function(y) {
              He(y), this._expandSafely();
            }
          }, this), s || this.expand(), this._baseLayersList = lt("div", e + "-base", c), this._separator = lt("div", e + "-separator", c), this._overlaysList = lt("div", e + "-overlays", c), n.appendChild(c);
        },
        _getLayer: function(e) {
          for (var n = 0; n < this._layers.length; n++)
            if (this._layers[n] && v(this._layers[n].layer) === e)
              return this._layers[n];
        },
        _addLayer: function(e, n, s) {
          this._map && e.on("add remove", this._onLayerChange, this), this._layers.push({
            layer: e,
            name: n,
            overlay: s
          }), this.options.sortLayers && this._layers.sort(m(function(c, p) {
            return this.options.sortFunction(c.layer, p.layer, c.name, p.name);
          }, this)), this.options.autoZIndex && e.setZIndex && (this._lastZIndex++, e.setZIndex(this._lastZIndex)), this._expandIfNotCollapsed();
        },
        _update: function() {
          if (!this._container)
            return this;
          Lo(this._baseLayersList), Lo(this._overlaysList), this._layerControlInputs = [];
          var e, n, s, c, p = 0;
          for (s = 0; s < this._layers.length; s++)
            c = this._layers[s], this._addItem(c), n = n || c.overlay, e = e || !c.overlay, p += c.overlay ? 0 : 1;
          return this.options.hideSingleBase && (e = e && p > 1, this._baseLayersList.style.display = e ? "" : "none"), this._separator.style.display = n && e ? "" : "none", this;
        },
        _onLayerChange: function(e) {
          this._handlingClick || this._update();
          var n = this._getLayer(v(e.target)), s = n.overlay ? e.type === "add" ? "overlayadd" : "overlayremove" : e.type === "add" ? "baselayerchange" : null;
          s && this._map.fire(s, n);
        },
        // IE7 bugs out if you create a radio dynamically, so you have to do it this hacky way (see https://stackoverflow.com/a/119079)
        _createRadioElement: function(e, n) {
          var s = '<input type="radio" class="leaflet-control-layers-selector" name="' + e + '"' + (n ? ' checked="checked"' : "") + "/>", c = document.createElement("div");
          return c.innerHTML = s, c.firstChild;
        },
        _addItem: function(e) {
          var n = document.createElement("label"), s = this._map.hasLayer(e.layer), c;
          e.overlay ? (c = document.createElement("input"), c.type = "checkbox", c.className = "leaflet-control-layers-selector", c.defaultChecked = s) : c = this._createRadioElement("leaflet-base-layers_" + v(this), s), this._layerControlInputs.push(c), c.layerId = v(e.layer), Ze(c, "click", this._onInputClick, this);
          var p = document.createElement("span");
          p.innerHTML = " " + e.name;
          var y = document.createElement("span");
          n.appendChild(y), y.appendChild(c), y.appendChild(p);
          var A = e.overlay ? this._overlaysList : this._baseLayersList;
          return A.appendChild(n), this._checkDisabledLayers(), n;
        },
        _onInputClick: function() {
          if (!this._preventClick) {
            var e = this._layerControlInputs, n, s, c = [], p = [];
            this._handlingClick = !0;
            for (var y = e.length - 1; y >= 0; y--)
              n = e[y], s = this._getLayer(n.layerId).layer, n.checked ? c.push(s) : n.checked || p.push(s);
            for (y = 0; y < p.length; y++)
              this._map.hasLayer(p[y]) && this._map.removeLayer(p[y]);
            for (y = 0; y < c.length; y++)
              this._map.hasLayer(c[y]) || this._map.addLayer(c[y]);
            this._handlingClick = !1, this._refocusOnMap();
          }
        },
        _checkDisabledLayers: function() {
          for (var e = this._layerControlInputs, n, s, c = this._map.getZoom(), p = e.length - 1; p >= 0; p--)
            n = e[p], s = this._getLayer(n.layerId).layer, n.disabled = s.options.minZoom !== void 0 && c < s.options.minZoom || s.options.maxZoom !== void 0 && c > s.options.maxZoom;
        },
        _expandIfNotCollapsed: function() {
          return this._map && !this.options.collapsed && this.expand(), this;
        },
        _expandSafely: function() {
          var e = this._section;
          this._preventClick = !0, Ze(e, "click", He), this.expand();
          var n = this;
          setTimeout(function() {
            bt(e, "click", He), n._preventClick = !1;
          });
        }
      }), cs = function(e, n, s) {
        return new us(e, n, s);
      }, En = Rn.extend({
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
          var n = "leaflet-control-zoom", s = lt("div", n + " leaflet-bar"), c = this.options;
          return this._zoomInButton = this._createButton(
            c.zoomInText,
            c.zoomInTitle,
            n + "-in",
            s,
            this._zoomIn
          ), this._zoomOutButton = this._createButton(
            c.zoomOutText,
            c.zoomOutTitle,
            n + "-out",
            s,
            this._zoomOut
          ), this._updateDisabled(), e.on("zoomend zoomlevelschange", this._updateDisabled, this), s;
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
        _createButton: function(e, n, s, c, p) {
          var y = lt("a", s, c);
          return y.innerHTML = e, y.href = "#", y.title = n, y.setAttribute("role", "button"), y.setAttribute("aria-label", n), Io(y), Ze(y, "click", ut), Ze(y, "click", p, this), Ze(y, "click", this._refocusOnMap, this), y;
        },
        _updateDisabled: function() {
          var e = this._map, n = "leaflet-disabled";
          Et(this._zoomInButton, n), Et(this._zoomOutButton, n), this._zoomInButton.setAttribute("aria-disabled", "false"), this._zoomOutButton.setAttribute("aria-disabled", "false"), (this._disabled || e._zoom === e.getMinZoom()) && (Ue(this._zoomOutButton, n), this._zoomOutButton.setAttribute("aria-disabled", "true")), (this._disabled || e._zoom === e.getMaxZoom()) && (Ue(this._zoomInButton, n), this._zoomInButton.setAttribute("aria-disabled", "true"));
        }
      });
      it.mergeOptions({
        zoomControl: !0
      }), it.addInitHook(function() {
        this.options.zoomControl && (this.zoomControl = new En(), this.addControl(this.zoomControl));
      });
      var Pl = function(e) {
        return new En(e);
      }, ds = Rn.extend({
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
          var n = "leaflet-control-scale", s = lt("div", n), c = this.options;
          return this._addScales(c, n + "-line", s), e.on(c.updateWhenIdle ? "moveend" : "move", this._update, this), e.whenReady(this._update, this), s;
        },
        onRemove: function(e) {
          e.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this);
        },
        _addScales: function(e, n, s) {
          e.metric && (this._mScale = lt("div", n, s)), e.imperial && (this._iScale = lt("div", n, s));
        },
        _update: function() {
          var e = this._map, n = e.getSize().y / 2, s = e.distance(
            e.containerPointToLatLng([0, n]),
            e.containerPointToLatLng([this.options.maxWidth, n])
          );
          this._updateScales(s);
        },
        _updateScales: function(e) {
          this.options.metric && e && this._updateMetric(e), this.options.imperial && e && this._updateImperial(e);
        },
        _updateMetric: function(e) {
          var n = this._getRoundNum(e), s = n < 1e3 ? n + " m" : n / 1e3 + " km";
          this._updateScale(this._mScale, s, n / e);
        },
        _updateImperial: function(e) {
          var n = e * 3.2808399, s, c, p;
          n > 5280 ? (s = n / 5280, c = this._getRoundNum(s), this._updateScale(this._iScale, c + " mi", c / s)) : (p = this._getRoundNum(n), this._updateScale(this._iScale, p + " ft", p / n));
        },
        _updateScale: function(e, n, s) {
          e.style.width = Math.round(this.options.maxWidth * s) + "px", e.innerHTML = n;
        },
        _getRoundNum: function(e) {
          var n = Math.pow(10, (Math.floor(e) + "").length - 1), s = e / n;
          return s = s >= 10 ? 10 : s >= 5 ? 5 : s >= 3 ? 3 : s >= 2 ? 2 : 1, n * s;
        }
      }), Ll = function(e) {
        return new ds(e);
      }, Ol = '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>', Ta = Rn.extend({
        // @section
        // @aka Control.Attribution options
        options: {
          position: "bottomright",
          // @option prefix: String|false = 'Leaflet'
          // The HTML text shown before the attributions. Pass `false` to disable.
          prefix: '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' + (Se.inlineSvg ? Ol + " " : "") + "Leaflet</a>"
        },
        initialize: function(e) {
          R(this, e), this._attributions = {};
        },
        onAdd: function(e) {
          e.attributionControl = this, this._container = lt("div", "leaflet-control-attribution"), Io(this._container);
          for (var n in e._layers)
            e._layers[n].getAttribution && this.addAttribution(e._layers[n].getAttribution());
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
            for (var n in this._attributions)
              this._attributions[n] && e.push(n);
            var s = [];
            this.options.prefix && s.push(this.options.prefix), e.length && s.push(e.join(", ")), this._container.innerHTML = s.join(' <span aria-hidden="true">|</span> ');
          }
        }
      });
      it.mergeOptions({
        attributionControl: !0
      }), it.addInitHook(function() {
        this.options.attributionControl && new Ta().addTo(this);
      });
      var Ml = function(e) {
        return new Ta(e);
      };
      Rn.Layers = us, Rn.Zoom = En, Rn.Scale = ds, Rn.Attribution = Ta, ii.layers = cs, ii.zoom = Pl, ii.scale = Ll, ii.attribution = Ml;
      var Mt = ge.extend({
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
      Mt.addTo = function(e, n) {
        return e.addHandler(n, this), this;
      };
      var qu = { Events: Ae }, zn = Se.touch ? "touchstart mousedown" : "mousedown", or = ke.extend({
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
        initialize: function(e, n, s, c) {
          R(this, c), this._element = e, this._dragStartTarget = n || e, this._preventOutline = s;
        },
        // @method enable()
        // Enables the dragging ability
        enable: function() {
          this._enabled || (Ze(this._dragStartTarget, zn, this._onDown, this), this._enabled = !0);
        },
        // @method disable()
        // Disables the dragging ability
        disable: function() {
          this._enabled && (or._dragging === this && this.finishDrag(!0), bt(this._dragStartTarget, zn, this._onDown, this), this._enabled = !1, this._moved = !1);
        },
        _onDown: function(e) {
          if (this._enabled && (this._moved = !1, !ts(this._element, "leaflet-zoom-anim"))) {
            if (e.touches && e.touches.length !== 1) {
              or._dragging === this && this.finishDrag();
              return;
            }
            if (!(or._dragging || e.shiftKey || e.which !== 1 && e.button !== 1 && !e.touches) && (or._dragging = this, this._preventOutline && ba(this._element), ns(), Cr(), !this._moving)) {
              this.fire("down");
              var n = e.touches ? e.touches[0] : e, s = Sl(this._element);
              this._startPoint = new ye(n.clientX, n.clientY), this._startPos = Ni(this._element), this._parentScale = is(s);
              var c = e.type === "mousedown";
              Ze(document, c ? "mousemove" : "touchmove", this._onMove, this), Ze(document, c ? "mouseup" : "touchend touchcancel", this._onUp, this);
            }
          }
        },
        _onMove: function(e) {
          if (this._enabled) {
            if (e.touches && e.touches.length > 1) {
              this._moved = !0;
              return;
            }
            var n = e.touches && e.touches.length === 1 ? e.touches[0] : e, s = new ye(n.clientX, n.clientY)._subtract(this._startPoint);
            !s.x && !s.y || Math.abs(s.x) + Math.abs(s.y) < this.options.clickTolerance || (s.x /= this._parentScale.x, s.y /= this._parentScale.y, He(e), this._moved || (this.fire("dragstart"), this._moved = !0, Ue(document.body, "leaflet-dragging"), this._lastTarget = e.target || e.srcElement, window.SVGElementInstance && this._lastTarget instanceof window.SVGElementInstance && (this._lastTarget = this._lastTarget.correspondingUseElement), Ue(this._lastTarget, "leaflet-drag-target")), this._newPos = this._startPos.add(s), this._moving = !0, this._lastEvent = e, this._updatePosition());
          }
        },
        _updatePosition: function() {
          var e = { originalEvent: this._lastEvent };
          this.fire("predrag", e), Rt(this._element, this._newPos), this.fire("drag", e);
        },
        _onUp: function() {
          this._enabled && this.finishDrag();
        },
        finishDrag: function(e) {
          Et(document.body, "leaflet-dragging"), this._lastTarget && (Et(this._lastTarget, "leaflet-drag-target"), this._lastTarget = null), bt(document, "mousemove touchmove", this._onMove, this), bt(document, "mouseup touchend touchcancel", this._onUp, this), ya(), wi();
          var n = this._moved && this._moving;
          this._moving = !1, or._dragging = !1, n && this.fire("dragend", {
            noInertia: e,
            distance: this._newPos.distanceTo(this._startPos)
          });
        }
      });
      function fs(e, n, s) {
        var c, p = [1, 4, 2, 8], y, A, F, V, ee, ve, Ce, Je;
        for (y = 0, ve = e.length; y < ve; y++)
          e[y]._code = Si(e[y], n);
        for (F = 0; F < 4; F++) {
          for (Ce = p[F], c = [], y = 0, ve = e.length, A = ve - 1; y < ve; A = y++)
            V = e[y], ee = e[A], V._code & Ce ? ee._code & Ce || (Je = Do(ee, V, Ce, n, s), Je._code = Si(Je, n), c.push(Je)) : (ee._code & Ce && (Je = Do(ee, V, Ce, n, s), Je._code = Si(Je, n), c.push(Je)), c.push(V));
          e = c;
        }
        return e;
      }
      function Gi(e, n) {
        var s, c, p, y, A, F, V, ee, ve;
        if (!e || e.length === 0)
          throw new Error("latlngs not passed");
        Nn(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
        var Ce = Ne([0, 0]), Je = oe(e), Wt = Je.getNorthWest().distanceTo(Je.getSouthWest()) * Je.getNorthEast().distanceTo(Je.getNorthWest());
        Wt < 1700 && (Ce = Yr(e));
        var It = e.length, fn = [];
        for (s = 0; s < It; s++) {
          var sn = Ne(e[s]);
          fn.push(n.project(Ne([sn.lat - Ce.lat, sn.lng - Ce.lng])));
        }
        for (F = V = ee = 0, s = 0, c = It - 1; s < It; c = s++)
          p = fn[s], y = fn[c], A = p.y * y.x - y.y * p.x, V += (p.x + y.x) * A, ee += (p.y + y.y) * A, F += A * 3;
        F === 0 ? ve = fn[0] : ve = [V / F, ee / F];
        var ri = n.unproject(j(ve));
        return Ne([ri.lat + Ce.lat, ri.lng + Ce.lng]);
      }
      function Yr(e) {
        for (var n = 0, s = 0, c = 0, p = 0; p < e.length; p++) {
          var y = Ne(e[p]);
          n += y.lat, s += y.lng, c++;
        }
        return Ne([n / c, s / c]);
      }
      var hs = {
        __proto__: null,
        clipPolygon: fs,
        polygonCenter: Gi,
        centroid: Yr
      };
      function Tt(e, n) {
        if (!n || !e.length)
          return e.slice();
        var s = n * n;
        return e = Ju(e, s), e = $u(e, s), e;
      }
      function Wi(e, n, s) {
        return Math.sqrt(Fo(e, n, s, !0));
      }
      function ps(e, n, s) {
        return Fo(e, n, s);
      }
      function $u(e, n) {
        var s = e.length, c = typeof Uint8Array < "u" ? Uint8Array : Array, p = new c(s);
        p[0] = p[s - 1] = 1, ko(e, p, n, 0, s - 1);
        var y, A = [];
        for (y = 0; y < s; y++)
          p[y] && A.push(e[y]);
        return A;
      }
      function ko(e, n, s, c, p) {
        var y = 0, A, F, V;
        for (F = c + 1; F <= p - 1; F++)
          V = Fo(e[F], e[c], e[p], !0), V > y && (A = F, y = V);
        y > s && (n[A] = 1, ko(e, n, s, c, A), ko(e, n, s, A, p));
      }
      function Ju(e, n) {
        for (var s = [e[0]], c = 1, p = 0, y = e.length; c < y; c++)
          Xr(e[c], e[p]) > n && (s.push(e[c]), p = c);
        return p < y - 1 && s.push(e[y - 1]), s;
      }
      var Il;
      function kl(e, n, s, c, p) {
        var y = c ? Il : Si(e, s), A = Si(n, s), F, V, ee;
        for (Il = A; ; ) {
          if (!(y | A))
            return [e, n];
          if (y & A)
            return !1;
          F = y || A, V = Do(e, n, F, s, p), ee = Si(V, s), F === y ? (e = V, y = ee) : (n = V, A = ee);
        }
      }
      function Do(e, n, s, c, p) {
        var y = n.x - e.x, A = n.y - e.y, F = c.min, V = c.max, ee, ve;
        return s & 8 ? (ee = e.x + y * (V.y - e.y) / A, ve = V.y) : s & 4 ? (ee = e.x + y * (F.y - e.y) / A, ve = F.y) : s & 2 ? (ee = V.x, ve = e.y + A * (V.x - e.x) / y) : s & 1 && (ee = F.x, ve = e.y + A * (F.x - e.x) / y), new ye(ee, ve, p);
      }
      function Si(e, n) {
        var s = 0;
        return e.x < n.min.x ? s |= 1 : e.x > n.max.x && (s |= 2), e.y < n.min.y ? s |= 4 : e.y > n.max.y && (s |= 8), s;
      }
      function Xr(e, n) {
        var s = n.x - e.x, c = n.y - e.y;
        return s * s + c * c;
      }
      function Fo(e, n, s, c) {
        var p = n.x, y = n.y, A = s.x - p, F = s.y - y, V = A * A + F * F, ee;
        return V > 0 && (ee = ((e.x - p) * A + (e.y - y) * F) / V, ee > 1 ? (p = s.x, y = s.y) : ee > 0 && (p += A * ee, y += F * ee)), A = e.x - p, F = e.y - y, c ? A * A + F * F : new ye(p, y);
      }
      function Nn(e) {
        return !q(e[0]) || typeof e[0][0] != "object" && typeof e[0][0] < "u";
      }
      function ms(e) {
        return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."), Nn(e);
      }
      function xa(e, n) {
        var s, c, p, y, A, F, V, ee;
        if (!e || e.length === 0)
          throw new Error("latlngs not passed");
        Nn(e) || (console.warn("latlngs are not flat! Only the first ring will be used"), e = e[0]);
        var ve = Ne([0, 0]), Ce = oe(e), Je = Ce.getNorthWest().distanceTo(Ce.getSouthWest()) * Ce.getNorthEast().distanceTo(Ce.getNorthWest());
        Je < 1700 && (ve = Yr(e));
        var Wt = e.length, It = [];
        for (s = 0; s < Wt; s++) {
          var fn = Ne(e[s]);
          It.push(n.project(Ne([fn.lat - ve.lat, fn.lng - ve.lng])));
        }
        for (s = 0, c = 0; s < Wt - 1; s++)
          c += It[s].distanceTo(It[s + 1]) / 2;
        if (c === 0)
          ee = It[0];
        else
          for (s = 0, y = 0; s < Wt - 1; s++)
            if (A = It[s], F = It[s + 1], p = A.distanceTo(F), y += p, y > c) {
              V = (y - c) / p, ee = [
                F.x - V * (F.x - A.x),
                F.y - V * (F.y - A.y)
              ];
              break;
            }
        var sn = n.unproject(j(ee));
        return Ne([sn.lat + ve.lat, sn.lng + ve.lng]);
      }
      var gs = {
        __proto__: null,
        simplify: Tt,
        pointToSegmentDistance: Wi,
        closestPointOnSegment: ps,
        clipSegment: kl,
        _getEdgeIntersection: Do,
        _getBitCode: Si,
        _sqClosestPointOnSegment: Fo,
        isFlat: Nn,
        _flat: ms,
        polylineCenter: xa
      }, Ea = {
        project: function(e) {
          return new ye(e.lng, e.lat);
        },
        unproject: function(e) {
          return new De(e.y, e.x);
        },
        bounds: new he([-180, -90], [180, 90])
      }, vs = {
        R: 6378137,
        R_MINOR: 6356752314245179e-9,
        bounds: new he([-2003750834279e-5, -1549657073972e-5], [2003750834279e-5, 1876465623138e-5]),
        project: function(e) {
          var n = Math.PI / 180, s = this.R, c = e.lat * n, p = this.R_MINOR / s, y = Math.sqrt(1 - p * p), A = y * Math.sin(c), F = Math.tan(Math.PI / 4 - c / 2) / Math.pow((1 - A) / (1 + A), y / 2);
          return c = -s * Math.log(Math.max(F, 1e-10)), new ye(e.lng * n * s, c);
        },
        unproject: function(e) {
          for (var n = 180 / Math.PI, s = this.R, c = this.R_MINOR / s, p = Math.sqrt(1 - c * c), y = Math.exp(-e.y / s), A = Math.PI / 2 - 2 * Math.atan(y), F = 0, V = 0.1, ee; F < 15 && Math.abs(V) > 1e-7; F++)
            ee = p * Math.sin(A), ee = Math.pow((1 - ee) / (1 + ee), p / 2), V = Math.PI / 2 - 2 * Math.atan(y * ee) - A, A += V;
          return new De(A * n, e.x * n / s);
        }
      }, _s = {
        __proto__: null,
        LonLat: Ea,
        Mercator: vs,
        SphericalMercator: To
      }, ys = d({}, nn, {
        code: "EPSG:3395",
        projection: vs,
        transformation: (function() {
          var e = 0.5 / (Math.PI * vs.R);
          return ti(e, 0.5, -e, 0.5);
        })()
      }), Dl = d({}, nn, {
        code: "EPSG:4326",
        projection: Ea,
        transformation: ti(1 / 180, 1, -1 / 180, 0.5)
      }), Fl = d({}, pn, {
        projection: Ea,
        transformation: ti(1, 0, -1, 0),
        scale: function(e) {
          return Math.pow(2, e);
        },
        zoom: function(e) {
          return Math.log(e) / Math.LN2;
        },
        distance: function(e, n) {
          var s = n.lng - e.lng, c = n.lat - e.lat;
          return Math.sqrt(s * s + c * c);
        },
        infinite: !0
      });
      pn.Earth = nn, pn.EPSG3395 = ys, pn.EPSG3857 = Ki, pn.EPSG900913 = Sn, pn.EPSG4326 = Dl, pn.Simple = Fl;
      var Lt = ke.extend({
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
          return this._map._targets[v(e)] = this, this;
        },
        removeInteractiveTarget: function(e) {
          return delete this._map._targets[v(e)], this;
        },
        // @method getAttribution: String
        // Used by the `attribution control`, returns the [attribution option](#gridlayer-attribution).
        getAttribution: function() {
          return this.options.attribution;
        },
        _layerAdd: function(e) {
          var n = e.target;
          if (n.hasLayer(this)) {
            if (this._map = n, this._zoomAnimated = n._zoomAnimated, this.getEvents) {
              var s = this.getEvents();
              n.on(s, this), this.once("remove", function() {
                n.off(s, this);
              }, this);
            }
            this.onAdd(n), this.fire("add"), n.fire("layeradd", { layer: this });
          }
        }
      });
      it.include({
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the map
        addLayer: function(e) {
          if (!e._layerAdd)
            throw new Error("The provided object is not a Layer.");
          var n = v(e);
          return this._layers[n] ? this : (this._layers[n] = e, e._mapToAdd = this, e.beforeAdd && e.beforeAdd(this), this.whenReady(e._layerAdd, e), this);
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the map.
        removeLayer: function(e) {
          var n = v(e);
          return this._layers[n] ? (this._loaded && e.onRemove(this), delete this._layers[n], this._loaded && (this.fire("layerremove", { layer: e }), e.fire("remove")), e._map = e._mapToAdd = null, this) : this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the map
        hasLayer: function(e) {
          return v(e) in this._layers;
        },
        /* @method eachLayer(fn: Function, context?: Object): this
         * Iterates over the layers of the map, optionally specifying context of the iterator function.
         * ```
         * map.eachLayer(function(layer){
         *     layer.bindPopup('Hello');
         * });
         * ```
         */
        eachLayer: function(e, n) {
          for (var s in this._layers)
            e.call(n, this._layers[s]);
          return this;
        },
        _addLayers: function(e) {
          e = e ? q(e) ? e : [e] : [];
          for (var n = 0, s = e.length; n < s; n++)
            this.addLayer(e[n]);
        },
        _addZoomLimit: function(e) {
          (!isNaN(e.options.maxZoom) || !isNaN(e.options.minZoom)) && (this._zoomBoundLayers[v(e)] = e, this._updateZoomLevels());
        },
        _removeZoomLimit: function(e) {
          var n = v(e);
          this._zoomBoundLayers[n] && (delete this._zoomBoundLayers[n], this._updateZoomLevels());
        },
        _updateZoomLevels: function() {
          var e = 1 / 0, n = -1 / 0, s = this._getZoomSpan();
          for (var c in this._zoomBoundLayers) {
            var p = this._zoomBoundLayers[c].options;
            e = p.minZoom === void 0 ? e : Math.min(e, p.minZoom), n = p.maxZoom === void 0 ? n : Math.max(n, p.maxZoom);
          }
          this._layersMaxZoom = n === -1 / 0 ? void 0 : n, this._layersMinZoom = e === 1 / 0 ? void 0 : e, s !== this._getZoomSpan() && this.fire("zoomlevelschange"), this.options.maxZoom === void 0 && this._layersMaxZoom && this.getZoom() > this._layersMaxZoom && this.setZoom(this._layersMaxZoom), this.options.minZoom === void 0 && this._layersMinZoom && this.getZoom() < this._layersMinZoom && this.setZoom(this._layersMinZoom);
        }
      });
      var ar = Lt.extend({
        initialize: function(e, n) {
          R(this, n), this._layers = {};
          var s, c;
          if (e)
            for (s = 0, c = e.length; s < c; s++)
              this.addLayer(e[s]);
        },
        // @method addLayer(layer: Layer): this
        // Adds the given layer to the group.
        addLayer: function(e) {
          var n = this.getLayerId(e);
          return this._layers[n] = e, this._map && this._map.addLayer(e), this;
        },
        // @method removeLayer(layer: Layer): this
        // Removes the given layer from the group.
        // @alternative
        // @method removeLayer(id: Number): this
        // Removes the layer with the given internal ID from the group.
        removeLayer: function(e) {
          var n = e in this._layers ? e : this.getLayerId(e);
          return this._map && this._layers[n] && this._map.removeLayer(this._layers[n]), delete this._layers[n], this;
        },
        // @method hasLayer(layer: Layer): Boolean
        // Returns `true` if the given layer is currently added to the group.
        // @alternative
        // @method hasLayer(id: Number): Boolean
        // Returns `true` if the given internal ID is currently added to the group.
        hasLayer: function(e) {
          var n = typeof e == "number" ? e : this.getLayerId(e);
          return n in this._layers;
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
          var n = Array.prototype.slice.call(arguments, 1), s, c;
          for (s in this._layers)
            c = this._layers[s], c[e] && c[e].apply(c, n);
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
        eachLayer: function(e, n) {
          for (var s in this._layers)
            e.call(n, this._layers[s]);
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
          return v(e);
        }
      }), Bo = function(e, n) {
        return new ar(e, n);
      }, Ti = ar.extend({
        addLayer: function(e) {
          return this.hasLayer(e) ? this : (e.addEventParent(this), ar.prototype.addLayer.call(this, e), this.fire("layeradd", { layer: e }));
        },
        removeLayer: function(e) {
          return this.hasLayer(e) ? (e in this._layers && (e = this._layers[e]), e.removeEventParent(this), ar.prototype.removeLayer.call(this, e), this.fire("layerremove", { layer: e })) : this;
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
          for (var n in this._layers) {
            var s = this._layers[n];
            e.extend(s.getBounds ? s.getBounds() : s.getLatLng());
          }
          return e;
        }
      }), Bl = function(e, n) {
        return new Ti(e, n);
      }, Kr = ge.extend({
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
          R(this, e);
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
        _createIcon: function(e, n) {
          var s = this._getIconUrl(e);
          if (!s) {
            if (e === "icon")
              throw new Error("iconUrl not set in Icon options (see the docs).");
            return null;
          }
          var c = this._createImg(s, n && n.tagName === "IMG" ? n : null);
          return this._setIconStyles(c, e), (this.options.crossOrigin || this.options.crossOrigin === "") && (c.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), c;
        },
        _setIconStyles: function(e, n) {
          var s = this.options, c = s[n + "Size"];
          typeof c == "number" && (c = [c, c]);
          var p = j(c), y = j(n === "shadow" && s.shadowAnchor || s.iconAnchor || p && p.divideBy(2, !0));
          e.className = "leaflet-marker-" + n + " " + (s.className || ""), y && (e.style.marginLeft = -y.x + "px", e.style.marginTop = -y.y + "px"), p && (e.style.width = p.x + "px", e.style.height = p.y + "px");
        },
        _createImg: function(e, n) {
          return n = n || document.createElement("img"), n.src = e, n;
        },
        _getIconUrl: function(e) {
          return Se.retina && this.options[e + "RetinaUrl"] || this.options[e + "Url"];
        }
      });
      function ju(e) {
        return new Kr(e);
      }
      var Ro = Kr.extend({
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
          return typeof Ro.imagePath != "string" && (Ro.imagePath = this._detectIconPath()), (this.options.imagePath || Ro.imagePath) + Kr.prototype._getIconUrl.call(this, e);
        },
        _stripUrl: function(e) {
          var n = function(s, c, p) {
            var y = c.exec(s);
            return y && y[p];
          };
          return e = n(e, /^url\((['"])?(.+)\1\)$/, 2), e && n(e, /^(.*)marker-icon\.png$/, 1);
        },
        _detectIconPath: function() {
          var e = lt("div", "leaflet-default-icon-path", document.body), n = Po(e, "background-image") || Po(e, "backgroundImage");
          if (document.body.removeChild(e), n = this._stripUrl(n), n)
            return n;
          var s = document.querySelector('link[href$="leaflet.css"]');
          return s ? s.href.substring(0, s.href.length - 11 - 1) : "";
        }
      }), Rl = Mt.extend({
        initialize: function(e) {
          this._marker = e;
        },
        addHooks: function() {
          var e = this._marker._icon;
          this._draggable || (this._draggable = new or(e, e, !0)), this._draggable.on({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).enable(), Ue(e, "leaflet-marker-draggable");
        },
        removeHooks: function() {
          this._draggable.off({
            dragstart: this._onDragStart,
            predrag: this._onPreDrag,
            drag: this._onDrag,
            dragend: this._onDragEnd
          }, this).disable(), this._marker._icon && Et(this._marker._icon, "leaflet-marker-draggable");
        },
        moved: function() {
          return this._draggable && this._draggable._moved;
        },
        _adjustPan: function(e) {
          var n = this._marker, s = n._map, c = this._marker.options.autoPanSpeed, p = this._marker.options.autoPanPadding, y = Ni(n._icon), A = s.getPixelBounds(), F = s.getPixelOrigin(), V = Ge(
            A.min._subtract(F).add(p),
            A.max._subtract(F).subtract(p)
          );
          if (!V.contains(y)) {
            var ee = j(
              (Math.max(V.max.x, y.x) - V.max.x) / (A.max.x - V.max.x) - (Math.min(V.min.x, y.x) - V.min.x) / (A.min.x - V.min.x),
              (Math.max(V.max.y, y.y) - V.max.y) / (A.max.y - V.max.y) - (Math.min(V.min.y, y.y) - V.min.y) / (A.min.y - V.min.y)
            ).multiplyBy(c);
            s.panBy(ee, { animate: !1 }), this._draggable._newPos._add(ee), this._draggable._startPos._add(ee), Rt(n._icon, this._draggable._newPos), this._onDrag(e), this._panRequest = Q(this._adjustPan.bind(this, e));
          }
        },
        _onDragStart: function() {
          this._oldLatLng = this._marker.getLatLng(), this._marker.closePopup && this._marker.closePopup(), this._marker.fire("movestart").fire("dragstart");
        },
        _onPreDrag: function(e) {
          this._marker.options.autoPan && (G(this._panRequest), this._panRequest = Q(this._adjustPan.bind(this, e)));
        },
        _onDrag: function(e) {
          var n = this._marker, s = n._shadow, c = Ni(n._icon), p = n._map.layerPointToLatLng(c);
          s && Rt(s, c), n._latlng = p, e.latlng = p, e.oldLatLng = this._oldLatLng, n.fire("move", e).fire("drag", e);
        },
        _onDragEnd: function(e) {
          G(this._panRequest), delete this._oldLatLng, this._marker.fire("moveend").fire("dragend", e);
        }
      }), Ca = Lt.extend({
        // @section
        // @aka Marker options
        options: {
          // @option icon: Icon = *
          // Icon instance to use for rendering the marker.
          // See [Icon documentation](#L.Icon) for details on how to customize the marker icon.
          // If not specified, a common instance of `L.Icon.Default` is used.
          icon: new Ro(),
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
        initialize: function(e, n) {
          R(this, n), this._latlng = Ne(e);
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
          var n = this._latlng;
          return this._latlng = Ne(e), this.update(), this.fire("move", { oldLatLng: n, latlng: this._latlng });
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
          var e = this.options, n = "leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide"), s = e.icon.createIcon(this._icon), c = !1;
          s !== this._icon && (this._icon && this._removeIcon(), c = !0, e.title && (s.title = e.title), s.tagName === "IMG" && (s.alt = e.alt || "")), Ue(s, n), e.keyboard && (s.tabIndex = "0", s.setAttribute("role", "button")), this._icon = s, e.riseOnHover && this.on({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && Ze(s, "focus", this._panOnFocus, this);
          var p = e.icon.createShadow(this._shadow), y = !1;
          p !== this._shadow && (this._removeShadow(), y = !0), p && (Ue(p, n), p.alt = ""), this._shadow = p, e.opacity < 1 && this._updateOpacity(), c && this.getPane().appendChild(this._icon), this._initInteraction(), p && y && this.getPane(e.shadowPane).appendChild(this._shadow);
        },
        _removeIcon: function() {
          this.options.riseOnHover && this.off({
            mouseover: this._bringToFront,
            mouseout: this._resetZIndex
          }), this.options.autoPanOnFocus && bt(this._icon, "focus", this._panOnFocus, this), xt(this._icon), this.removeInteractiveTarget(this._icon), this._icon = null;
        },
        _removeShadow: function() {
          this._shadow && xt(this._shadow), this._shadow = null;
        },
        _setPos: function(e) {
          this._icon && Rt(this._icon, e), this._shadow && Rt(this._shadow, e), this._zIndex = e.y + this.options.zIndexOffset, this._resetZIndex();
        },
        _updateZIndex: function(e) {
          this._icon && (this._icon.style.zIndex = this._zIndex + e);
        },
        _animateZoom: function(e) {
          var n = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center).round();
          this._setPos(n);
        },
        _initInteraction: function() {
          if (this.options.interactive && (Ue(this._icon, "leaflet-interactive"), this.addInteractiveTarget(this._icon), Rl)) {
            var e = this.options.draggable;
            this.dragging && (e = this.dragging.enabled(), this.dragging.disable()), this.dragging = new Rl(this), e && this.dragging.enable();
          }
        },
        // @method setOpacity(opacity: Number): this
        // Changes the opacity of the marker.
        setOpacity: function(e) {
          return this.options.opacity = e, this._map && this._updateOpacity(), this;
        },
        _updateOpacity: function() {
          var e = this.options.opacity;
          this._icon && Bn(this._icon, e), this._shadow && Bn(this._shadow, e);
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
            var n = this.options.icon.options, s = n.iconSize ? j(n.iconSize) : j(0, 0), c = n.iconAnchor ? j(n.iconAnchor) : j(0, 0);
            e.panInside(this._latlng, {
              paddingTopLeft: c,
              paddingBottomRight: s.subtract(c)
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
      function Qr(e, n) {
        return new Ca(e, n);
      }
      var sr = Lt.extend({
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
          return R(this, e), this._renderer && (this._renderer._updateStyle(this), this.options.stroke && e && Object.prototype.hasOwnProperty.call(e, "weight") && this._updateBounds()), this;
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
      }), Aa = sr.extend({
        // @section
        // @aka CircleMarker options
        options: {
          fill: !0,
          // @option radius: Number = 10
          // Radius of the circle marker, in pixels
          radius: 10
        },
        initialize: function(e, n) {
          R(this, n), this._latlng = Ne(e), this._radius = this.options.radius;
        },
        // @method setLatLng(latLng: LatLng): this
        // Sets the position of a circle marker to a new location.
        setLatLng: function(e) {
          var n = this._latlng;
          return this._latlng = Ne(e), this.redraw(), this.fire("move", { oldLatLng: n, latlng: this._latlng });
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
          var n = e && e.radius || this._radius;
          return sr.prototype.setStyle.call(this, e), this.setRadius(n), this;
        },
        _project: function() {
          this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds();
        },
        _updateBounds: function() {
          var e = this._radius, n = this._radiusY || e, s = this._clickTolerance(), c = [e + s, n + s];
          this._pxBounds = new he(this._point.subtract(c), this._point.add(c));
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
      function ws(e, n) {
        return new Aa(e, n);
      }
      var Pa = Aa.extend({
        initialize: function(e, n, s) {
          if (typeof n == "number" && (n = d({}, s, { radius: n })), R(this, n), this._latlng = Ne(e), isNaN(this.options.radius))
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
        setStyle: sr.prototype.setStyle,
        _project: function() {
          var e = this._latlng.lng, n = this._latlng.lat, s = this._map, c = s.options.crs;
          if (c.distance === nn.distance) {
            var p = Math.PI / 180, y = this._mRadius / nn.R / p, A = s.project([n + y, e]), F = s.project([n - y, e]), V = A.add(F).divideBy(2), ee = s.unproject(V).lat, ve = Math.acos((Math.cos(y * p) - Math.sin(n * p) * Math.sin(ee * p)) / (Math.cos(n * p) * Math.cos(ee * p))) / p;
            (isNaN(ve) || ve === 0) && (ve = y / Math.cos(Math.PI / 180 * n)), this._point = V.subtract(s.getPixelOrigin()), this._radius = isNaN(ve) ? 0 : V.x - s.project([ee, e - ve]).x, this._radiusY = V.y - A.y;
          } else {
            var Ce = c.unproject(c.project(this._latlng).subtract([this._mRadius, 0]));
            this._point = s.latLngToLayerPoint(this._latlng), this._radius = this._point.x - s.latLngToLayerPoint(Ce).x;
          }
          this._updateBounds();
        }
      });
      function lr(e, n, s) {
        return new Pa(e, n, s);
      }
      var jn = sr.extend({
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
        initialize: function(e, n) {
          R(this, n), this._setLatLngs(e);
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
          for (var n = 1 / 0, s = null, c = Fo, p, y, A = 0, F = this._parts.length; A < F; A++)
            for (var V = this._parts[A], ee = 1, ve = V.length; ee < ve; ee++) {
              p = V[ee - 1], y = V[ee];
              var Ce = c(e, p, y, !0);
              Ce < n && (n = Ce, s = c(e, p, y));
            }
          return s && (s.distance = Math.sqrt(n)), s;
        },
        // @method getCenter(): LatLng
        // Returns the center ([centroid](https://en.wikipedia.org/wiki/Centroid)) of the polyline.
        getCenter: function() {
          if (!this._map)
            throw new Error("Must add layer to map before using getCenter()");
          return xa(this._defaultShape(), this._map.options.crs);
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
        addLatLng: function(e, n) {
          return n = n || this._defaultShape(), e = Ne(e), n.push(e), this._bounds.extend(e), this.redraw();
        },
        _setLatLngs: function(e) {
          this._bounds = new gt(), this._latlngs = this._convertLatLngs(e);
        },
        _defaultShape: function() {
          return Nn(this._latlngs) ? this._latlngs : this._latlngs[0];
        },
        // recursively convert latlngs input into actual LatLng instances; calculate bounds along the way
        _convertLatLngs: function(e) {
          for (var n = [], s = Nn(e), c = 0, p = e.length; c < p; c++)
            s ? (n[c] = Ne(e[c]), this._bounds.extend(n[c])) : n[c] = this._convertLatLngs(e[c]);
          return n;
        },
        _project: function() {
          var e = new he();
          this._rings = [], this._projectLatlngs(this._latlngs, this._rings, e), this._bounds.isValid() && e.isValid() && (this._rawPxBounds = e, this._updateBounds());
        },
        _updateBounds: function() {
          var e = this._clickTolerance(), n = new ye(e, e);
          this._rawPxBounds && (this._pxBounds = new he([
            this._rawPxBounds.min.subtract(n),
            this._rawPxBounds.max.add(n)
          ]));
        },
        // recursively turns latlngs into a set of rings with projected coordinates
        _projectLatlngs: function(e, n, s) {
          var c = e[0] instanceof De, p = e.length, y, A;
          if (c) {
            for (A = [], y = 0; y < p; y++)
              A[y] = this._map.latLngToLayerPoint(e[y]), s.extend(A[y]);
            n.push(A);
          } else
            for (y = 0; y < p; y++)
              this._projectLatlngs(e[y], n, s);
        },
        // clip polyline by renderer bounds so that we have less to render for performance
        _clipPoints: function() {
          var e = this._renderer._bounds;
          if (this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(e))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            var n = this._parts, s, c, p, y, A, F, V;
            for (s = 0, p = 0, y = this._rings.length; s < y; s++)
              for (V = this._rings[s], c = 0, A = V.length; c < A - 1; c++)
                F = kl(V[c], V[c + 1], e, c, !0), F && (n[p] = n[p] || [], n[p].push(F[0]), (F[1] !== V[c + 1] || c === A - 2) && (n[p].push(F[1]), p++));
          }
        },
        // simplify each clipped part of the polyline for performance
        _simplifyPoints: function() {
          for (var e = this._parts, n = this.options.smoothFactor, s = 0, c = e.length; s < c; s++)
            e[s] = Tt(e[s], n);
        },
        _update: function() {
          this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath());
        },
        _updatePath: function() {
          this._renderer._updatePoly(this);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(e, n) {
          var s, c, p, y, A, F, V = this._clickTolerance();
          if (!this._pxBounds || !this._pxBounds.contains(e))
            return !1;
          for (s = 0, y = this._parts.length; s < y; s++)
            for (F = this._parts[s], c = 0, A = F.length, p = A - 1; c < A; p = c++)
              if (!(!n && c === 0) && Wi(e, F[p], F[c]) <= V)
                return !0;
          return !1;
        }
      });
      function Yu(e, n) {
        return new jn(e, n);
      }
      jn._flat = ms;
      var eo = jn.extend({
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
          return Gi(this._defaultShape(), this._map.options.crs);
        },
        _convertLatLngs: function(e) {
          var n = jn.prototype._convertLatLngs.call(this, e), s = n.length;
          return s >= 2 && n[0] instanceof De && n[0].equals(n[s - 1]) && n.pop(), n;
        },
        _setLatLngs: function(e) {
          jn.prototype._setLatLngs.call(this, e), Nn(this._latlngs) && (this._latlngs = [this._latlngs]);
        },
        _defaultShape: function() {
          return Nn(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0];
        },
        _clipPoints: function() {
          var e = this._renderer._bounds, n = this.options.weight, s = new ye(n, n);
          if (e = new he(e.min.subtract(s), e.max.add(s)), this._parts = [], !(!this._pxBounds || !this._pxBounds.intersects(e))) {
            if (this.options.noClip) {
              this._parts = this._rings;
              return;
            }
            for (var c = 0, p = this._rings.length, y; c < p; c++)
              y = fs(this._rings[c], e, !0), y.length && this._parts.push(y);
          }
        },
        _updatePath: function() {
          this._renderer._updatePoly(this, !0);
        },
        // Needed by the `Canvas` renderer for interactivity
        _containsPoint: function(e) {
          var n = !1, s, c, p, y, A, F, V, ee;
          if (!this._pxBounds || !this._pxBounds.contains(e))
            return !1;
          for (y = 0, V = this._parts.length; y < V; y++)
            for (s = this._parts[y], A = 0, ee = s.length, F = ee - 1; A < ee; F = A++)
              c = s[A], p = s[F], c.y > e.y != p.y > e.y && e.x < (p.x - c.x) * (e.y - c.y) / (p.y - c.y) + c.x && (n = !n);
          return n || jn.prototype._containsPoint.call(this, e, !0);
        }
      });
      function Xu(e, n) {
        return new eo(e, n);
      }
      var Cn = Ti.extend({
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
        initialize: function(e, n) {
          R(this, n), this._layers = {}, e && this.addData(e);
        },
        // @method addData( <GeoJSON> data ): this
        // Adds a GeoJSON object to the layer.
        addData: function(e) {
          var n = q(e) ? e : e.features, s, c, p;
          if (n) {
            for (s = 0, c = n.length; s < c; s++)
              p = n[s], (p.geometries || p.geometry || p.features || p.coordinates) && this.addData(p);
            return this;
          }
          var y = this.options;
          if (y.filter && !y.filter(e))
            return this;
          var A = An(e, y);
          return A ? (A.feature = Vi(e), A.defaultOptions = A.options, this.resetStyle(A), y.onEachFeature && y.onEachFeature(e, A), this.addLayer(A)) : this;
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
          return this.eachLayer(function(n) {
            this._setLayerStyle(n, e);
          }, this);
        },
        _setLayerStyle: function(e, n) {
          e.setStyle && (typeof n == "function" && (n = n(e.feature)), e.setStyle(n));
        }
      });
      function An(e, n) {
        var s = e.type === "Feature" ? e.geometry : e, c = s ? s.coordinates : null, p = [], y = n && n.pointToLayer, A = n && n.coordsToLatLng || Ss, F, V, ee, ve;
        if (!c && !s)
          return null;
        switch (s.type) {
          case "Point":
            return F = A(c), bs(y, e, F, n);
          case "MultiPoint":
            for (ee = 0, ve = c.length; ee < ve; ee++)
              F = A(c[ee]), p.push(bs(y, e, F, n));
            return new Ti(p);
          case "LineString":
          case "MultiLineString":
            return V = La(c, s.type === "LineString" ? 0 : 1, A), new jn(V, n);
          case "Polygon":
          case "MultiPolygon":
            return V = La(c, s.type === "Polygon" ? 1 : 2, A), new eo(V, n);
          case "GeometryCollection":
            for (ee = 0, ve = s.geometries.length; ee < ve; ee++) {
              var Ce = An({
                geometry: s.geometries[ee],
                type: "Feature",
                properties: e.properties
              }, n);
              Ce && p.push(Ce);
            }
            return new Ti(p);
          case "FeatureCollection":
            for (ee = 0, ve = s.features.length; ee < ve; ee++) {
              var Je = An(s.features[ee], n);
              Je && p.push(Je);
            }
            return new Ti(p);
          default:
            throw new Error("Invalid GeoJSON object.");
        }
      }
      function bs(e, n, s, c) {
        return e ? e(n, s) : new Ca(s, c && c.markersInheritOptions && c);
      }
      function Ss(e) {
        return new De(e[1], e[0], e[2]);
      }
      function La(e, n, s) {
        for (var c = [], p = 0, y = e.length, A; p < y; p++)
          A = n ? La(e[p], n - 1, s) : (s || Ss)(e[p]), c.push(A);
        return c;
      }
      function Ts(e, n) {
        return e = Ne(e), e.alt !== void 0 ? [E(e.lng, n), E(e.lat, n), E(e.alt, n)] : [E(e.lng, n), E(e.lat, n)];
      }
      function Oa(e, n, s, c) {
        for (var p = [], y = 0, A = e.length; y < A; y++)
          p.push(n ? Oa(e[y], Nn(e[y]) ? 0 : n - 1, s, c) : Ts(e[y], c));
        return !n && s && p.length > 0 && p.push(p[0].slice()), p;
      }
      function to(e, n) {
        return e.feature ? d({}, e.feature, { geometry: n }) : Vi(n);
      }
      function Vi(e) {
        return e.type === "Feature" || e.type === "FeatureCollection" ? e : {
          type: "Feature",
          properties: {},
          geometry: e
        };
      }
      var I = {
        toGeoJSON: function(e) {
          return to(this, {
            type: "Point",
            coordinates: Ts(this.getLatLng(), e)
          });
        }
      };
      Ca.include(I), Pa.include(I), Aa.include(I), jn.include({
        toGeoJSON: function(e) {
          var n = !Nn(this._latlngs), s = Oa(this._latlngs, n ? 1 : 0, !1, e);
          return to(this, {
            type: (n ? "Multi" : "") + "LineString",
            coordinates: s
          });
        }
      }), eo.include({
        toGeoJSON: function(e) {
          var n = !Nn(this._latlngs), s = n && !Nn(this._latlngs[0]), c = Oa(this._latlngs, s ? 2 : n ? 1 : 0, !0, e);
          return n || (c = [c]), to(this, {
            type: (s ? "Multi" : "") + "Polygon",
            coordinates: c
          });
        }
      }), ar.include({
        toMultiPoint: function(e) {
          var n = [];
          return this.eachLayer(function(s) {
            n.push(s.toGeoJSON(e).geometry.coordinates);
          }), to(this, {
            type: "MultiPoint",
            coordinates: n
          });
        },
        // @method toGeoJSON(precision?: Number|false): Object
        // Coordinates values are rounded with [`formatNum`](#util-formatnum) function with given `precision`.
        // Returns a [`GeoJSON`](https://en.wikipedia.org/wiki/GeoJSON) representation of the layer group (as a GeoJSON `FeatureCollection`, `GeometryCollection`, or `MultiPoint`).
        toGeoJSON: function(e) {
          var n = this.feature && this.feature.geometry && this.feature.geometry.type;
          if (n === "MultiPoint")
            return this.toMultiPoint(e);
          var s = n === "GeometryCollection", c = [];
          return this.eachLayer(function(p) {
            if (p.toGeoJSON) {
              var y = p.toGeoJSON(e);
              if (s)
                c.push(y.geometry);
              else {
                var A = Vi(y);
                A.type === "FeatureCollection" ? c.push.apply(c, A.features) : c.push(A);
              }
            }
          }), s ? to(this, {
            geometries: c,
            type: "GeometryCollection"
          }) : {
            type: "FeatureCollection",
            features: c
          };
        }
      });
      function H(e, n) {
        return new Cn(e, n);
      }
      var Z = H, we = Lt.extend({
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
        initialize: function(e, n, s) {
          this._url = e, this._bounds = oe(n), R(this, s);
        },
        onAdd: function() {
          this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (Ue(this._image, "leaflet-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset();
        },
        onRemove: function() {
          xt(this._image), this.options.interactive && this.removeInteractiveTarget(this._image);
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
          return this._map && xr(this._image), this;
        },
        // @method bringToBack(): this
        // Brings the layer to the bottom of all overlays.
        bringToBack: function() {
          return this._map && rr(this._image), this;
        },
        // @method setUrl(url: String): this
        // Changes the URL of the image.
        setUrl: function(e) {
          return this._url = e, this._image && (this._image.src = e), this;
        },
        // @method setBounds(bounds: LatLngBounds): this
        // Update the bounds that this ImageOverlay covers
        setBounds: function(e) {
          return this._bounds = oe(e), this._map && this._reset(), this;
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
          var e = this._url.tagName === "IMG", n = this._image = e ? this._url : lt("img");
          if (Ue(n, "leaflet-image-layer"), this._zoomAnimated && Ue(n, "leaflet-zoom-animated"), this.options.className && Ue(n, this.options.className), n.onselectstart = b, n.onmousemove = b, n.onload = m(this.fire, this, "load"), n.onerror = m(this._overlayOnError, this, "error"), (this.options.crossOrigin || this.options.crossOrigin === "") && (n.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), this.options.zIndex && this._updateZIndex(), e) {
            this._url = n.src;
            return;
          }
          n.src = this._url, n.alt = this.options.alt;
        },
        _animateZoom: function(e) {
          var n = this._map.getZoomScale(e.zoom), s = this._map._latLngBoundsToNewLayerBounds(this._bounds, e.zoom, e.center).min;
          Er(this._image, s, n);
        },
        _reset: function() {
          var e = this._image, n = new he(
            this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
            this._map.latLngToLayerPoint(this._bounds.getSouthEast())
          ), s = n.getSize();
          Rt(e, n.min), e.style.width = s.x + "px", e.style.height = s.y + "px";
        },
        _updateOpacity: function() {
          Bn(this._image, this.options.opacity);
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
      }), We = function(e, n, s) {
        return new we(e, n, s);
      }, ct = we.extend({
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
          var e = this._url.tagName === "VIDEO", n = this._image = e ? this._url : lt("video");
          if (Ue(n, "leaflet-image-layer"), this._zoomAnimated && Ue(n, "leaflet-zoom-animated"), this.options.className && Ue(n, this.options.className), n.onselectstart = b, n.onmousemove = b, n.onloadeddata = m(this.fire, this, "load"), e) {
            for (var s = n.getElementsByTagName("source"), c = [], p = 0; p < s.length; p++)
              c.push(s[p].src);
            this._url = s.length > 0 ? c : [n.src];
            return;
          }
          q(this._url) || (this._url = [this._url]), !this.options.keepAspectRatio && Object.prototype.hasOwnProperty.call(n.style, "objectFit") && (n.style.objectFit = "fill"), n.autoplay = !!this.options.autoplay, n.loop = !!this.options.loop, n.muted = !!this.options.muted, n.playsInline = !!this.options.playsInline;
          for (var y = 0; y < this._url.length; y++) {
            var A = lt("source");
            A.src = this._url[y], n.appendChild(A);
          }
        }
        // @method getElement(): HTMLVideoElement
        // Returns the instance of [`HTMLVideoElement`](https://developer.mozilla.org/docs/Web/API/HTMLVideoElement)
        // used by this overlay.
      });
      function Jt(e, n, s) {
        return new ct(e, n, s);
      }
      var _t = we.extend({
        _initImage: function() {
          var e = this._image = this._url;
          Ue(e, "leaflet-image-layer"), this._zoomAnimated && Ue(e, "leaflet-zoom-animated"), this.options.className && Ue(e, this.options.className), e.onselectstart = b, e.onmousemove = b;
        }
        // @method getElement(): SVGElement
        // Returns the instance of [`SVGElement`](https://developer.mozilla.org/docs/Web/API/SVGElement)
        // used by this overlay.
      });
      function xs(e, n, s) {
        return new _t(e, n, s);
      }
      var xi = Lt.extend({
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
        initialize: function(e, n) {
          e && (e instanceof De || q(e)) ? (this._latlng = Ne(e), R(this, n)) : (R(this, e), this._source = n), this.options.content && (this._content = this.options.content);
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
          this._zoomAnimated = e._zoomAnimated, this._container || this._initLayout(), e._fadeAnimated && Bn(this._container, 0), clearTimeout(this._removeTimeout), this.getPane().appendChild(this._container), this.update(), e._fadeAnimated && Bn(this._container, 1), this.bringToFront(), this.options.interactive && (Ue(this._container, "leaflet-interactive"), this.addInteractiveTarget(this._container));
        },
        onRemove: function(e) {
          e._fadeAnimated ? (Bn(this._container, 0), this._removeTimeout = setTimeout(m(xt, void 0, this._container), 200)) : xt(this._container), this.options.interactive && (Et(this._container, "leaflet-interactive"), this.removeInteractiveTarget(this._container));
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
          return this._latlng = Ne(e), this._map && (this._updatePosition(), this._adjustPan()), this;
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
          return this._map && xr(this._container), this;
        },
        // @method bringToBack: this
        // Brings this overlay to the back of other overlays (in the same map pane).
        bringToBack: function() {
          return this._map && rr(this._container), this;
        },
        // prepare bound overlay to open: update latlng pos / content source (for FeatureGroup)
        _prepareOpen: function(e) {
          var n = this._source;
          if (!n._map)
            return !1;
          if (n instanceof Ti) {
            n = null;
            var s = this._source._layers;
            for (var c in s)
              if (s[c]._map) {
                n = s[c];
                break;
              }
            if (!n)
              return !1;
            this._source = n;
          }
          if (!e)
            if (n.getCenter)
              e = n.getCenter();
            else if (n.getLatLng)
              e = n.getLatLng();
            else if (n.getBounds)
              e = n.getBounds().getCenter();
            else
              throw new Error("Unable to get source layer LatLng.");
          return this.setLatLng(e), this._map && this.update(), !0;
        },
        _updateContent: function() {
          if (this._content) {
            var e = this._contentNode, n = typeof this._content == "function" ? this._content(this._source || this) : this._content;
            if (typeof n == "string")
              e.innerHTML = n;
            else {
              for (; e.hasChildNodes(); )
                e.removeChild(e.firstChild);
              e.appendChild(n);
            }
            this.fire("contentupdate");
          }
        },
        _updatePosition: function() {
          if (this._map) {
            var e = this._map.latLngToLayerPoint(this._latlng), n = j(this.options.offset), s = this._getAnchor();
            this._zoomAnimated ? Rt(this._container, e.add(s)) : n = n.add(e).add(s);
            var c = this._containerBottom = -n.y, p = this._containerLeft = -Math.round(this._containerWidth / 2) + n.x;
            this._container.style.bottom = c + "px", this._container.style.left = p + "px";
          }
        },
        _getAnchor: function() {
          return [0, 0];
        }
      });
      it.include({
        _initOverlay: function(e, n, s, c) {
          var p = n;
          return p instanceof e || (p = new e(c).setContent(n)), s && p.setLatLng(s), p;
        }
      }), Lt.include({
        _initOverlay: function(e, n, s, c) {
          var p = s;
          return p instanceof e ? (R(p, c), p._source = this) : (p = n && !c ? n : new e(c, this), p.setContent(s)), p;
        }
      });
      var gn = xi.extend({
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
          return e = arguments.length ? e : this._source._map, !e.hasLayer(this) && e._popup && e._popup.options.autoClose && e.removeLayer(e._popup), e._popup = this, xi.prototype.openOn.call(this, e);
        },
        onAdd: function(e) {
          xi.prototype.onAdd.call(this, e), e.fire("popupopen", { popup: this }), this._source && (this._source.fire("popupopen", { popup: this }, !0), this._source instanceof sr || this._source.on("preclick", Ar));
        },
        onRemove: function(e) {
          xi.prototype.onRemove.call(this, e), e.fire("popupclose", { popup: this }), this._source && (this._source.fire("popupclose", { popup: this }, !0), this._source instanceof sr || this._source.off("preclick", Ar));
        },
        getEvents: function() {
          var e = xi.prototype.getEvents.call(this);
          return (this.options.closeOnClick !== void 0 ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (e.preclick = this.close), this.options.keepInView && (e.moveend = this._adjustPan), e;
        },
        _initLayout: function() {
          var e = "leaflet-popup", n = this._container = lt(
            "div",
            e + " " + (this.options.className || "") + " leaflet-zoom-animated"
          ), s = this._wrapper = lt("div", e + "-content-wrapper", n);
          if (this._contentNode = lt("div", e + "-content", s), Io(n), as(this._contentNode), Ze(n, "contextmenu", Ar), this._tipContainer = lt("div", e + "-tip-container", n), this._tip = lt("div", e + "-tip", this._tipContainer), this.options.closeButton) {
            var c = this._closeButton = lt("a", e + "-close-button", n);
            c.setAttribute("role", "button"), c.setAttribute("aria-label", "Close popup"), c.href = "#close", c.innerHTML = '<span aria-hidden="true">&#215;</span>', Ze(c, "click", function(p) {
              He(p), this.close();
            }, this);
          }
        },
        _updateLayout: function() {
          var e = this._contentNode, n = e.style;
          n.width = "", n.whiteSpace = "nowrap";
          var s = e.offsetWidth;
          s = Math.min(s, this.options.maxWidth), s = Math.max(s, this.options.minWidth), n.width = s + 1 + "px", n.whiteSpace = "", n.height = "";
          var c = e.offsetHeight, p = this.options.maxHeight, y = "leaflet-popup-scrolled";
          p && c > p ? (n.height = p + "px", Ue(e, y)) : Et(e, y), this._containerWidth = this._container.offsetWidth;
        },
        _animateZoom: function(e) {
          var n = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center), s = this._getAnchor();
          Rt(this._container, n.add(s));
        },
        _adjustPan: function() {
          if (this.options.autoPan) {
            if (this._map._panAnim && this._map._panAnim.stop(), this._autopanning) {
              this._autopanning = !1;
              return;
            }
            var e = this._map, n = parseInt(Po(this._container, "marginBottom"), 10) || 0, s = this._container.offsetHeight + n, c = this._containerWidth, p = new ye(this._containerLeft, -s - this._containerBottom);
            p._add(Ni(this._container));
            var y = e.layerPointToContainerPoint(p), A = j(this.options.autoPanPadding), F = j(this.options.autoPanPaddingTopLeft || A), V = j(this.options.autoPanPaddingBottomRight || A), ee = e.getSize(), ve = 0, Ce = 0;
            y.x + c + V.x > ee.x && (ve = y.x + c - ee.x + V.x), y.x - ve - F.x < 0 && (ve = y.x - F.x), y.y + s + V.y > ee.y && (Ce = y.y + s - ee.y + V.y), y.y - Ce - F.y < 0 && (Ce = y.y - F.y), (ve || Ce) && (this.options.keepInView && (this._autopanning = !0), e.fire("autopanstart").panBy([ve, Ce]));
          }
        },
        _getAnchor: function() {
          return j(this._source && this._source._getPopupAnchor ? this._source._getPopupAnchor() : [0, 0]);
        }
      }), Ma = function(e, n) {
        return new gn(e, n);
      };
      it.mergeOptions({
        closePopupOnClick: !0
      }), it.include({
        // @method openPopup(popup: Popup): this
        // Opens the specified popup while closing the previously opened (to make sure only one is opened at one time for usability).
        // @alternative
        // @method openPopup(content: String|HTMLElement, latlng: LatLng, options?: Popup options): this
        // Creates a popup with the specified content and options and opens it in the given point on a map.
        openPopup: function(e, n, s) {
          return this._initOverlay(gn, e, n, s).openOn(this), this;
        },
        // @method closePopup(popup?: Popup): this
        // Closes the popup previously opened with [openPopup](#map-openpopup) (or the given one).
        closePopup: function(e) {
          return e = arguments.length ? e : this._popup, e && e.close(), this;
        }
      }), Lt.include({
        // @method bindPopup(content: String|HTMLElement|Function|Popup, options?: Popup options): this
        // Binds a popup to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindPopup: function(e, n) {
          return this._popup = this._initOverlay(gn, this._popup, e, n), this._popupHandlersAdded || (this.on({
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
          return this._popup && (this instanceof Ti || (this._popup._source = this), this._popup._prepareOpen(e || this._latlng) && this._popup.openOn(this._map)), this;
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
            ut(e);
            var n = e.layer || e.target;
            if (this._popup._source === n && !(n instanceof sr)) {
              this._map.hasLayer(this._popup) ? this.closePopup() : this.openPopup(e.latlng);
              return;
            }
            this._popup._source = n, this.openPopup(e.latlng);
          }
        },
        _movePopup: function(e) {
          this._popup.setLatLng(e.latlng);
        },
        _onKeyPress: function(e) {
          e.originalEvent.keyCode === 13 && this._openPopup(e);
        }
      });
      var Ia = xi.extend({
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
          xi.prototype.onAdd.call(this, e), this.setOpacity(this.options.opacity), e.fire("tooltipopen", { tooltip: this }), this._source && (this.addEventParent(this._source), this._source.fire("tooltipopen", { tooltip: this }, !0));
        },
        onRemove: function(e) {
          xi.prototype.onRemove.call(this, e), e.fire("tooltipclose", { tooltip: this }), this._source && (this.removeEventParent(this._source), this._source.fire("tooltipclose", { tooltip: this }, !0));
        },
        getEvents: function() {
          var e = xi.prototype.getEvents.call(this);
          return this.options.permanent || (e.preclick = this.close), e;
        },
        _initLayout: function() {
          var e = "leaflet-tooltip", n = e + " " + (this.options.className || "") + " leaflet-zoom-" + (this._zoomAnimated ? "animated" : "hide");
          this._contentNode = this._container = lt("div", n), this._container.setAttribute("role", "tooltip"), this._container.setAttribute("id", "leaflet-tooltip-" + v(this));
        },
        _updateLayout: function() {
        },
        _adjustPan: function() {
        },
        _setPosition: function(e) {
          var n, s, c = this._map, p = this._container, y = c.latLngToContainerPoint(c.getCenter()), A = c.layerPointToContainerPoint(e), F = this.options.direction, V = p.offsetWidth, ee = p.offsetHeight, ve = j(this.options.offset), Ce = this._getAnchor();
          F === "top" ? (n = V / 2, s = ee) : F === "bottom" ? (n = V / 2, s = 0) : F === "center" ? (n = V / 2, s = ee / 2) : F === "right" ? (n = 0, s = ee / 2) : F === "left" ? (n = V, s = ee / 2) : A.x < y.x ? (F = "right", n = 0, s = ee / 2) : (F = "left", n = V + (ve.x + Ce.x) * 2, s = ee / 2), e = e.subtract(j(n, s, !0)).add(ve).add(Ce), Et(p, "leaflet-tooltip-right"), Et(p, "leaflet-tooltip-left"), Et(p, "leaflet-tooltip-top"), Et(p, "leaflet-tooltip-bottom"), Ue(p, "leaflet-tooltip-" + F), Rt(p, e);
        },
        _updatePosition: function() {
          var e = this._map.latLngToLayerPoint(this._latlng);
          this._setPosition(e);
        },
        setOpacity: function(e) {
          this.options.opacity = e, this._container && Bn(this._container, e);
        },
        _animateZoom: function(e) {
          var n = this._map._latLngToNewLayerPoint(this._latlng, e.zoom, e.center);
          this._setPosition(n);
        },
        _getAnchor: function() {
          return j(this._source && this._source._getTooltipAnchor && !this.options.sticky ? this._source._getTooltipAnchor() : [0, 0]);
        }
      }), no = function(e, n) {
        return new Ia(e, n);
      };
      it.include({
        // @method openTooltip(tooltip: Tooltip): this
        // Opens the specified tooltip.
        // @alternative
        // @method openTooltip(content: String|HTMLElement, latlng: LatLng, options?: Tooltip options): this
        // Creates a tooltip with the specified content and options and open it.
        openTooltip: function(e, n, s) {
          return this._initOverlay(Ia, e, n, s).openOn(this), this;
        },
        // @method closeTooltip(tooltip: Tooltip): this
        // Closes the tooltip given as parameter.
        closeTooltip: function(e) {
          return e.close(), this;
        }
      }), Lt.include({
        // @method bindTooltip(content: String|HTMLElement|Function|Tooltip, options?: Tooltip options): this
        // Binds a tooltip to the layer with the passed `content` and sets up the
        // necessary event listeners. If a `Function` is passed it will receive
        // the layer as the first argument and should return a `String` or `HTMLElement`.
        bindTooltip: function(e, n) {
          return this._tooltip && this.isTooltipOpen() && this.unbindTooltip(), this._tooltip = this._initOverlay(Ia, this._tooltip, e, n), this._initTooltipInteractions(), this._tooltip.options.permanent && this._map && this._map.hasLayer(this) && this.openTooltip(), this;
        },
        // @method unbindTooltip(): this
        // Removes the tooltip previously bound with `bindTooltip`.
        unbindTooltip: function() {
          return this._tooltip && (this._initTooltipInteractions(!0), this.closeTooltip(), this._tooltip = null), this;
        },
        _initTooltipInteractions: function(e) {
          if (!(!e && this._tooltipHandlersAdded)) {
            var n = e ? "off" : "on", s = {
              remove: this.closeTooltip,
              move: this._moveTooltip
            };
            this._tooltip.options.permanent ? s.add = this._openTooltip : (s.mouseover = this._openTooltip, s.mouseout = this.closeTooltip, s.click = this._openTooltip, this._map ? this._addFocusListeners() : s.add = this._addFocusListeners), this._tooltip.options.sticky && (s.mousemove = this._moveTooltip), this[n](s), this._tooltipHandlersAdded = !e;
          }
        },
        // @method openTooltip(latlng?: LatLng): this
        // Opens the bound tooltip at the specified `latlng` or at the default tooltip anchor if no `latlng` is passed.
        openTooltip: function(e) {
          return this._tooltip && (this instanceof Ti || (this._tooltip._source = this), this._tooltip._prepareOpen(e) && (this._tooltip.openOn(this._map), this.getElement ? this._setAriaDescribedByOnLayer(this) : this.eachLayer && this.eachLayer(this._setAriaDescribedByOnLayer, this))), this;
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
          var n = typeof e.getElement == "function" && e.getElement();
          n && (Ze(n, "focus", function() {
            this._tooltip._source = e, this.openTooltip();
          }, this), Ze(n, "blur", this.closeTooltip, this));
        },
        _setAriaDescribedByOnLayer: function(e) {
          var n = typeof e.getElement == "function" && e.getElement();
          n && n.setAttribute("aria-describedby", this._tooltip._container.id);
        },
        _openTooltip: function(e) {
          if (!(!this._tooltip || !this._map)) {
            if (this._map.dragging && this._map.dragging.moving() && !this._openOnceFlag) {
              this._openOnceFlag = !0;
              var n = this;
              this._map.once("moveend", function() {
                n._openOnceFlag = !1, n._openTooltip(e);
              });
              return;
            }
            this._tooltip._source = e.layer || e.target, this.openTooltip(this._tooltip.options.sticky ? e.latlng : void 0);
          }
        },
        _moveTooltip: function(e) {
          var n = e.latlng, s, c;
          this._tooltip.options.sticky && e.originalEvent && (s = this._map.mouseEventToContainerPoint(e.originalEvent), c = this._map.containerPointToLayerPoint(s), n = this._map.layerPointToLatLng(c)), this._tooltip.setLatLng(n);
        }
      });
      var zo = Kr.extend({
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
          var n = e && e.tagName === "DIV" ? e : document.createElement("div"), s = this.options;
          if (s.html instanceof Element ? (Lo(n), n.appendChild(s.html)) : n.innerHTML = s.html !== !1 ? s.html : "", s.bgPos) {
            var c = j(s.bgPos);
            n.style.backgroundPosition = -c.x + "px " + -c.y + "px";
          }
          return this._setIconStyles(n, "icon"), n;
        },
        createShadow: function() {
          return null;
        }
      });
      function ka(e) {
        return new zo(e);
      }
      Kr.Default = Ro;
      var at = Lt.extend({
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
          updateWhenIdle: Se.mobile,
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
          R(this, e);
        },
        onAdd: function() {
          this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView();
        },
        beforeAdd: function(e) {
          e._addZoomLimit(this);
        },
        onRemove: function(e) {
          this._removeAllTiles(), xt(this._container), e._removeZoomLimit(this), this._container = null, this._tileZoom = void 0;
        },
        // @method bringToFront: this
        // Brings the tile layer to the top of all tile layers.
        bringToFront: function() {
          return this._map && (xr(this._container), this._setAutoZIndex(Math.max)), this;
        },
        // @method bringToBack: this
        // Brings the tile layer to the bottom of all tile layers.
        bringToBack: function() {
          return this._map && (rr(this._container), this._setAutoZIndex(Math.min)), this;
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
          return this.options.updateWhenIdle || (this._onMove || (this._onMove = T(this._onMoveEnd, this.options.updateInterval, this)), e.move = this._onMove), this._zoomAnimated && (e.zoomanim = this._animateZoom), e;
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
          return e instanceof ye ? e : new ye(e, e);
        },
        _updateZIndex: function() {
          this._container && this.options.zIndex !== void 0 && this.options.zIndex !== null && (this._container.style.zIndex = this.options.zIndex);
        },
        _setAutoZIndex: function(e) {
          for (var n = this.getPane().children, s = -e(-1 / 0, 1 / 0), c = 0, p = n.length, y; c < p; c++)
            y = n[c].style.zIndex, n[c] !== this._container && y && (s = e(s, +y));
          isFinite(s) && (this.options.zIndex = s + e(-1, 1), this._updateZIndex());
        },
        _updateOpacity: function() {
          if (this._map && !Se.ielt9) {
            Bn(this._container, this.options.opacity);
            var e = +/* @__PURE__ */ new Date(), n = !1, s = !1;
            for (var c in this._tiles) {
              var p = this._tiles[c];
              if (!(!p.current || !p.loaded)) {
                var y = Math.min(1, (e - p.loaded) / 200);
                Bn(p.el, y), y < 1 ? n = !0 : (p.active ? s = !0 : this._onOpaqueTile(p), p.active = !0);
              }
            }
            s && !this._noPrune && this._pruneTiles(), n && (G(this._fadeFrame), this._fadeFrame = Q(this._updateOpacity, this));
          }
        },
        _onOpaqueTile: b,
        _initContainer: function() {
          this._container || (this._container = lt("div", "leaflet-layer " + (this.options.className || "")), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this.getPane().appendChild(this._container));
        },
        _updateLevels: function() {
          var e = this._tileZoom, n = this.options.maxZoom;
          if (e !== void 0) {
            for (var s in this._levels)
              s = Number(s), this._levels[s].el.children.length || s === e ? (this._levels[s].el.style.zIndex = n - Math.abs(e - s), this._onUpdateLevel(s)) : (xt(this._levels[s].el), this._removeTilesAtZoom(s), this._onRemoveLevel(s), delete this._levels[s]);
            var c = this._levels[e], p = this._map;
            return c || (c = this._levels[e] = {}, c.el = lt("div", "leaflet-tile-container leaflet-zoom-animated", this._container), c.el.style.zIndex = n, c.origin = p.project(p.unproject(p.getPixelOrigin()), e).round(), c.zoom = e, this._setZoomTransform(c, p.getCenter(), p.getZoom()), b(c.el.offsetWidth), this._onCreateLevel(c)), this._level = c, c;
          }
        },
        _onUpdateLevel: b,
        _onRemoveLevel: b,
        _onCreateLevel: b,
        _pruneTiles: function() {
          if (this._map) {
            var e, n, s = this._map.getZoom();
            if (s > this.options.maxZoom || s < this.options.minZoom) {
              this._removeAllTiles();
              return;
            }
            for (e in this._tiles)
              n = this._tiles[e], n.retain = n.current;
            for (e in this._tiles)
              if (n = this._tiles[e], n.current && !n.active) {
                var c = n.coords;
                this._retainParent(c.x, c.y, c.z, c.z - 5) || this._retainChildren(c.x, c.y, c.z, c.z + 2);
              }
            for (e in this._tiles)
              this._tiles[e].retain || this._removeTile(e);
          }
        },
        _removeTilesAtZoom: function(e) {
          for (var n in this._tiles)
            this._tiles[n].coords.z === e && this._removeTile(n);
        },
        _removeAllTiles: function() {
          for (var e in this._tiles)
            this._removeTile(e);
        },
        _invalidateAll: function() {
          for (var e in this._levels)
            xt(this._levels[e].el), this._onRemoveLevel(Number(e)), delete this._levels[e];
          this._removeAllTiles(), this._tileZoom = void 0;
        },
        _retainParent: function(e, n, s, c) {
          var p = Math.floor(e / 2), y = Math.floor(n / 2), A = s - 1, F = new ye(+p, +y);
          F.z = +A;
          var V = this._tileCoordsToKey(F), ee = this._tiles[V];
          return ee && ee.active ? (ee.retain = !0, !0) : (ee && ee.loaded && (ee.retain = !0), A > c ? this._retainParent(p, y, A, c) : !1);
        },
        _retainChildren: function(e, n, s, c) {
          for (var p = 2 * e; p < 2 * e + 2; p++)
            for (var y = 2 * n; y < 2 * n + 2; y++) {
              var A = new ye(p, y);
              A.z = s + 1;
              var F = this._tileCoordsToKey(A), V = this._tiles[F];
              if (V && V.active) {
                V.retain = !0;
                continue;
              } else V && V.loaded && (V.retain = !0);
              s + 1 < c && this._retainChildren(p, y, s + 1, c);
            }
        },
        _resetView: function(e) {
          var n = e && (e.pinch || e.flyTo);
          this._setView(this._map.getCenter(), this._map.getZoom(), n, n);
        },
        _animateZoom: function(e) {
          this._setView(e.center, e.zoom, !0, e.noUpdate);
        },
        _clampZoom: function(e) {
          var n = this.options;
          return n.minNativeZoom !== void 0 && e < n.minNativeZoom ? n.minNativeZoom : n.maxNativeZoom !== void 0 && n.maxNativeZoom < e ? n.maxNativeZoom : e;
        },
        _setView: function(e, n, s, c) {
          var p = Math.round(n);
          this.options.maxZoom !== void 0 && p > this.options.maxZoom || this.options.minZoom !== void 0 && p < this.options.minZoom ? p = void 0 : p = this._clampZoom(p);
          var y = this.options.updateWhenZooming && p !== this._tileZoom;
          (!c || y) && (this._tileZoom = p, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), p !== void 0 && this._update(e), s || this._pruneTiles(), this._noPrune = !!s), this._setZoomTransforms(e, n);
        },
        _setZoomTransforms: function(e, n) {
          for (var s in this._levels)
            this._setZoomTransform(this._levels[s], e, n);
        },
        _setZoomTransform: function(e, n, s) {
          var c = this._map.getZoomScale(s, e.zoom), p = e.origin.multiplyBy(c).subtract(this._map._getNewPixelOrigin(n, s)).round();
          Se.any3d ? Er(e.el, p, c) : Rt(e.el, p);
        },
        _resetGrid: function() {
          var e = this._map, n = e.options.crs, s = this._tileSize = this.getTileSize(), c = this._tileZoom, p = this._map.getPixelWorldBounds(this._tileZoom);
          p && (this._globalTileRange = this._pxBoundsToTileRange(p)), this._wrapX = n.wrapLng && !this.options.noWrap && [
            Math.floor(e.project([0, n.wrapLng[0]], c).x / s.x),
            Math.ceil(e.project([0, n.wrapLng[1]], c).x / s.y)
          ], this._wrapY = n.wrapLat && !this.options.noWrap && [
            Math.floor(e.project([n.wrapLat[0], 0], c).y / s.x),
            Math.ceil(e.project([n.wrapLat[1], 0], c).y / s.y)
          ];
        },
        _onMoveEnd: function() {
          !this._map || this._map._animatingZoom || this._update();
        },
        _getTiledPixelBounds: function(e) {
          var n = this._map, s = n._animatingZoom ? Math.max(n._animateToZoom, n.getZoom()) : n.getZoom(), c = n.getZoomScale(s, this._tileZoom), p = n.project(e, this._tileZoom).floor(), y = n.getSize().divideBy(c * 2);
          return new he(p.subtract(y), p.add(y));
        },
        // Private method to load tiles in the grid's active zoom level according to map bounds
        _update: function(e) {
          var n = this._map;
          if (n) {
            var s = this._clampZoom(n.getZoom());
            if (e === void 0 && (e = n.getCenter()), this._tileZoom !== void 0) {
              var c = this._getTiledPixelBounds(e), p = this._pxBoundsToTileRange(c), y = p.getCenter(), A = [], F = this.options.keepBuffer, V = new he(
                p.getBottomLeft().subtract([F, -F]),
                p.getTopRight().add([F, -F])
              );
              if (!(isFinite(p.min.x) && isFinite(p.min.y) && isFinite(p.max.x) && isFinite(p.max.y)))
                throw new Error("Attempted to load an infinite number of tiles");
              for (var ee in this._tiles) {
                var ve = this._tiles[ee].coords;
                (ve.z !== this._tileZoom || !V.contains(new ye(ve.x, ve.y))) && (this._tiles[ee].current = !1);
              }
              if (Math.abs(s - this._tileZoom) > 1) {
                this._setView(e, s);
                return;
              }
              for (var Ce = p.min.y; Ce <= p.max.y; Ce++)
                for (var Je = p.min.x; Je <= p.max.x; Je++) {
                  var Wt = new ye(Je, Ce);
                  if (Wt.z = this._tileZoom, !!this._isValidTile(Wt)) {
                    var It = this._tiles[this._tileCoordsToKey(Wt)];
                    It ? It.current = !0 : A.push(Wt);
                  }
                }
              if (A.sort(function(sn, ri) {
                return sn.distanceTo(y) - ri.distanceTo(y);
              }), A.length !== 0) {
                this._loading || (this._loading = !0, this.fire("loading"));
                var fn = document.createDocumentFragment();
                for (Je = 0; Je < A.length; Je++)
                  this._addTile(A[Je], fn);
                this._level.el.appendChild(fn);
              }
            }
          }
        },
        _isValidTile: function(e) {
          var n = this._map.options.crs;
          if (!n.infinite) {
            var s = this._globalTileRange;
            if (!n.wrapLng && (e.x < s.min.x || e.x > s.max.x) || !n.wrapLat && (e.y < s.min.y || e.y > s.max.y))
              return !1;
          }
          if (!this.options.bounds)
            return !0;
          var c = this._tileCoordsToBounds(e);
          return oe(this.options.bounds).overlaps(c);
        },
        _keyToBounds: function(e) {
          return this._tileCoordsToBounds(this._keyToTileCoords(e));
        },
        _tileCoordsToNwSe: function(e) {
          var n = this._map, s = this.getTileSize(), c = e.scaleBy(s), p = c.add(s), y = n.unproject(c, e.z), A = n.unproject(p, e.z);
          return [y, A];
        },
        // converts tile coordinates to its geographical bounds
        _tileCoordsToBounds: function(e) {
          var n = this._tileCoordsToNwSe(e), s = new gt(n[0], n[1]);
          return this.options.noWrap || (s = this._map.wrapLatLngBounds(s)), s;
        },
        // converts tile coordinates to key for the tile cache
        _tileCoordsToKey: function(e) {
          return e.x + ":" + e.y + ":" + e.z;
        },
        // converts tile cache key to coordinates
        _keyToTileCoords: function(e) {
          var n = e.split(":"), s = new ye(+n[0], +n[1]);
          return s.z = +n[2], s;
        },
        _removeTile: function(e) {
          var n = this._tiles[e];
          n && (xt(n.el), delete this._tiles[e], this.fire("tileunload", {
            tile: n.el,
            coords: this._keyToTileCoords(e)
          }));
        },
        _initTile: function(e) {
          Ue(e, "leaflet-tile");
          var n = this.getTileSize();
          e.style.width = n.x + "px", e.style.height = n.y + "px", e.onselectstart = b, e.onmousemove = b, Se.ielt9 && this.options.opacity < 1 && Bn(e, this.options.opacity);
        },
        _addTile: function(e, n) {
          var s = this._getTilePos(e), c = this._tileCoordsToKey(e), p = this.createTile(this._wrapCoords(e), m(this._tileReady, this, e));
          this._initTile(p), this.createTile.length < 2 && Q(m(this._tileReady, this, e, null, p)), Rt(p, s), this._tiles[c] = {
            el: p,
            coords: e,
            current: !0
          }, n.appendChild(p), this.fire("tileloadstart", {
            tile: p,
            coords: e
          });
        },
        _tileReady: function(e, n, s) {
          n && this.fire("tileerror", {
            error: n,
            tile: s,
            coords: e
          });
          var c = this._tileCoordsToKey(e);
          s = this._tiles[c], s && (s.loaded = +/* @__PURE__ */ new Date(), this._map._fadeAnimated ? (Bn(s.el, 0), G(this._fadeFrame), this._fadeFrame = Q(this._updateOpacity, this)) : (s.active = !0, this._pruneTiles()), n || (Ue(s.el, "leaflet-tile-loaded"), this.fire("tileload", {
            tile: s.el,
            coords: e
          })), this._noTilesToLoad() && (this._loading = !1, this.fire("load"), Se.ielt9 || !this._map._fadeAnimated ? Q(this._pruneTiles, this) : setTimeout(m(this._pruneTiles, this), 250)));
        },
        _getTilePos: function(e) {
          return e.scaleBy(this.getTileSize()).subtract(this._level.origin);
        },
        _wrapCoords: function(e) {
          var n = new ye(
            this._wrapX ? x(e.x, this._wrapX) : e.x,
            this._wrapY ? x(e.y, this._wrapY) : e.y
          );
          return n.z = e.z, n;
        },
        _pxBoundsToTileRange: function(e) {
          var n = this.getTileSize();
          return new he(
            e.min.unscaleBy(n).floor(),
            e.max.unscaleBy(n).ceil().subtract([1, 1])
          );
        },
        _noTilesToLoad: function() {
          for (var e in this._tiles)
            if (!this._tiles[e].loaded)
              return !1;
          return !0;
        }
      });
      function Ku(e) {
        return new at(e);
      }
      var Pr = at.extend({
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
        initialize: function(e, n) {
          this._url = e, n = R(this, n), n.detectRetina && Se.retina && n.maxZoom > 0 ? (n.tileSize = Math.floor(n.tileSize / 2), n.zoomReverse ? (n.zoomOffset--, n.minZoom = Math.min(n.maxZoom, n.minZoom + 1)) : (n.zoomOffset++, n.maxZoom = Math.max(n.minZoom, n.maxZoom - 1)), n.minZoom = Math.max(0, n.minZoom)) : n.zoomReverse ? n.minZoom = Math.min(n.maxZoom, n.minZoom) : n.maxZoom = Math.max(n.minZoom, n.maxZoom), typeof n.subdomains == "string" && (n.subdomains = n.subdomains.split("")), this.on("tileunload", this._onTileRemove);
        },
        // @method setUrl(url: String, noRedraw?: Boolean): this
        // Updates the layer's URL template and redraws it (unless `noRedraw` is set to `true`).
        // If the URL does not change, the layer will not be redrawn unless
        // the noRedraw parameter is set to false.
        setUrl: function(e, n) {
          return this._url === e && n === void 0 && (n = !0), this._url = e, n || this.redraw(), this;
        },
        // @method createTile(coords: Object, done?: Function): HTMLElement
        // Called only internally, overrides GridLayer's [`createTile()`](#gridlayer-createtile)
        // to return an `<img>` HTML element with the appropriate image URL given `coords`. The `done`
        // callback is called when the tile has been loaded.
        createTile: function(e, n) {
          var s = document.createElement("img");
          return Ze(s, "load", m(this._tileOnLoad, this, n, s)), Ze(s, "error", m(this._tileOnError, this, n, s)), (this.options.crossOrigin || this.options.crossOrigin === "") && (s.crossOrigin = this.options.crossOrigin === !0 ? "" : this.options.crossOrigin), typeof this.options.referrerPolicy == "string" && (s.referrerPolicy = this.options.referrerPolicy), s.alt = "", s.src = this.getTileUrl(e), s;
        },
        // @section Extension methods
        // @uninheritable
        // Layers extending `TileLayer` might reimplement the following method.
        // @method getTileUrl(coords: Object): String
        // Called only internally, returns the URL for a tile given its coordinates.
        // Classes extending `TileLayer` can override this function to provide custom tile URL naming schemes.
        getTileUrl: function(e) {
          var n = {
            r: Se.retina ? "@2x" : "",
            s: this._getSubdomain(e),
            x: e.x,
            y: e.y,
            z: this._getZoomForUrl()
          };
          if (this._map && !this._map.options.crs.infinite) {
            var s = this._globalTileRange.max.y - e.y;
            this.options.tms && (n.y = s), n["-y"] = s;
          }
          return W(this._url, d(n, this.options));
        },
        _tileOnLoad: function(e, n) {
          Se.ielt9 ? setTimeout(m(e, this, null, n), 0) : e(null, n);
        },
        _tileOnError: function(e, n, s) {
          var c = this.options.errorTileUrl;
          c && n.getAttribute("src") !== c && (n.src = c), e(s, n);
        },
        _onTileRemove: function(e) {
          e.tile.onload = null;
        },
        _getZoomForUrl: function() {
          var e = this._tileZoom, n = this.options.maxZoom, s = this.options.zoomReverse, c = this.options.zoomOffset;
          return s && (e = n - e), e + c;
        },
        _getSubdomain: function(e) {
          var n = Math.abs(e.x + e.y) % this.options.subdomains.length;
          return this.options.subdomains[n];
        },
        // stops loading all tiles in the background layer
        _abortLoading: function() {
          var e, n;
          for (e in this._tiles)
            if (this._tiles[e].coords.z !== this._tileZoom && (n = this._tiles[e].el, n.onload = b, n.onerror = b, !n.complete)) {
              n.src = $;
              var s = this._tiles[e].coords;
              xt(n), delete this._tiles[e], this.fire("tileabort", {
                tile: n,
                coords: s
              });
            }
        },
        _removeTile: function(e) {
          var n = this._tiles[e];
          if (n)
            return n.el.setAttribute("src", $), at.prototype._removeTile.call(this, e);
        },
        _tileReady: function(e, n, s) {
          if (!(!this._map || s && s.getAttribute("src") === $))
            return at.prototype._tileReady.call(this, e, n, s);
        }
      });
      function No(e, n) {
        return new Pr(e, n);
      }
      var zl = Pr.extend({
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
        initialize: function(e, n) {
          this._url = e;
          var s = d({}, this.defaultWmsParams);
          for (var c in n)
            c in this.options || (s[c] = n[c]);
          n = R(this, n);
          var p = n.detectRetina && Se.retina ? 2 : 1, y = this.getTileSize();
          s.width = y.x * p, s.height = y.y * p, this.wmsParams = s;
        },
        onAdd: function(e) {
          this._crs = this.options.crs || e.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
          var n = this._wmsVersion >= 1.3 ? "crs" : "srs";
          this.wmsParams[n] = this._crs.code, Pr.prototype.onAdd.call(this, e);
        },
        getTileUrl: function(e) {
          var n = this._tileCoordsToNwSe(e), s = this._crs, c = Ge(s.project(n[0]), s.project(n[1])), p = c.min, y = c.max, A = (this._wmsVersion >= 1.3 && this._crs === Dl ? [p.y, p.x, y.y, y.x] : [p.x, p.y, y.x, y.y]).join(","), F = Pr.prototype.getTileUrl.call(this, e);
          return F + Y(this.wmsParams, F, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + A;
        },
        // @method setParams(params: Object, noRedraw?: Boolean): this
        // Merges an object with the new parameters and re-requests tiles on the current screen (unless `noRedraw` was set to true).
        setParams: function(e, n) {
          return d(this.wmsParams, e), n || this.redraw(), this;
        }
      });
      function Qu(e, n) {
        return new zl(e, n);
      }
      Pr.WMS = zl, No.wms = Qu;
      var Zi = Lt.extend({
        // @section
        // @aka Renderer options
        options: {
          // @option padding: Number = 0.1
          // How much to extend the clip area around the map view (relative to its size)
          // e.g. 0.1 would be 10% of map view in each direction
          padding: 0.1
        },
        initialize: function(e) {
          R(this, e), v(this), this._layers = this._layers || {};
        },
        onAdd: function() {
          this._container || (this._initContainer(), Ue(this._container, "leaflet-zoom-animated")), this.getPane().appendChild(this._container), this._update(), this.on("update", this._updatePaths, this);
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
        _updateTransform: function(e, n) {
          var s = this._map.getZoomScale(n, this._zoom), c = this._map.getSize().multiplyBy(0.5 + this.options.padding), p = this._map.project(this._center, n), y = c.multiplyBy(-s).add(p).subtract(this._map._getNewPixelOrigin(e, n));
          Se.any3d ? Er(this._container, y, s) : Rt(this._container, y);
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
          var e = this.options.padding, n = this._map.getSize(), s = this._map.containerPointToLayerPoint(n.multiplyBy(-e)).round();
          this._bounds = new he(s, s.add(n.multiplyBy(1 + e * 2)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom();
        }
      }), Go = Zi.extend({
        // @section
        // @aka Canvas options
        options: {
          // @option tolerance: Number = 0
          // How much to extend the click tolerance around a path/object on the map.
          tolerance: 0
        },
        getEvents: function() {
          var e = Zi.prototype.getEvents.call(this);
          return e.viewprereset = this._onViewPreReset, e;
        },
        _onViewPreReset: function() {
          this._postponeUpdatePaths = !0;
        },
        onAdd: function() {
          Zi.prototype.onAdd.call(this), this._draw();
        },
        _initContainer: function() {
          var e = this._container = document.createElement("canvas");
          Ze(e, "mousemove", this._onMouseMove, this), Ze(e, "click dblclick mousedown mouseup contextmenu", this._onClick, this), Ze(e, "mouseout", this._handleMouseOut, this), e._leaflet_disable_events = !0, this._ctx = e.getContext("2d");
        },
        _destroyContainer: function() {
          G(this._redrawRequest), delete this._ctx, xt(this._container), bt(this._container), delete this._container;
        },
        _updatePaths: function() {
          if (!this._postponeUpdatePaths) {
            var e;
            this._redrawBounds = null;
            for (var n in this._layers)
              e = this._layers[n], e._update();
            this._redraw();
          }
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            Zi.prototype._update.call(this);
            var e = this._bounds, n = this._container, s = e.getSize(), c = Se.retina ? 2 : 1;
            Rt(n, e.min), n.width = c * s.x, n.height = c * s.y, n.style.width = s.x + "px", n.style.height = s.y + "px", Se.retina && this._ctx.scale(2, 2), this._ctx.translate(-e.min.x, -e.min.y), this.fire("update");
          }
        },
        _reset: function() {
          Zi.prototype._reset.call(this), this._postponeUpdatePaths && (this._postponeUpdatePaths = !1, this._updatePaths());
        },
        _initPath: function(e) {
          this._updateDashArray(e), this._layers[v(e)] = e;
          var n = e._order = {
            layer: e,
            prev: this._drawLast,
            next: null
          };
          this._drawLast && (this._drawLast.next = n), this._drawLast = n, this._drawFirst = this._drawFirst || this._drawLast;
        },
        _addPath: function(e) {
          this._requestRedraw(e);
        },
        _removePath: function(e) {
          var n = e._order, s = n.next, c = n.prev;
          s ? s.prev = c : this._drawLast = c, c ? c.next = s : this._drawFirst = s, delete e._order, delete this._layers[v(e)], this._requestRedraw(e);
        },
        _updatePath: function(e) {
          this._extendRedrawBounds(e), e._project(), e._update(), this._requestRedraw(e);
        },
        _updateStyle: function(e) {
          this._updateDashArray(e), this._requestRedraw(e);
        },
        _updateDashArray: function(e) {
          if (typeof e.options.dashArray == "string") {
            var n = e.options.dashArray.split(/[, ]+/), s = [], c, p;
            for (p = 0; p < n.length; p++) {
              if (c = Number(n[p]), isNaN(c))
                return;
              s.push(c);
            }
            e.options._dashArray = s;
          } else
            e.options._dashArray = e.options.dashArray;
        },
        _requestRedraw: function(e) {
          this._map && (this._extendRedrawBounds(e), this._redrawRequest = this._redrawRequest || Q(this._redraw, this));
        },
        _extendRedrawBounds: function(e) {
          if (e._pxBounds) {
            var n = (e.options.weight || 0) + 1;
            this._redrawBounds = this._redrawBounds || new he(), this._redrawBounds.extend(e._pxBounds.min.subtract([n, n])), this._redrawBounds.extend(e._pxBounds.max.add([n, n]));
          }
        },
        _redraw: function() {
          this._redrawRequest = null, this._redrawBounds && (this._redrawBounds.min._floor(), this._redrawBounds.max._ceil()), this._clear(), this._draw(), this._redrawBounds = null;
        },
        _clear: function() {
          var e = this._redrawBounds;
          if (e) {
            var n = e.getSize();
            this._ctx.clearRect(e.min.x, e.min.y, n.x, n.y);
          } else
            this._ctx.save(), this._ctx.setTransform(1, 0, 0, 1, 0, 0), this._ctx.clearRect(0, 0, this._container.width, this._container.height), this._ctx.restore();
        },
        _draw: function() {
          var e, n = this._redrawBounds;
          if (this._ctx.save(), n) {
            var s = n.getSize();
            this._ctx.beginPath(), this._ctx.rect(n.min.x, n.min.y, s.x, s.y), this._ctx.clip();
          }
          this._drawing = !0;
          for (var c = this._drawFirst; c; c = c.next)
            e = c.layer, (!n || e._pxBounds && e._pxBounds.intersects(n)) && e._updatePath();
          this._drawing = !1, this._ctx.restore();
        },
        _updatePoly: function(e, n) {
          if (this._drawing) {
            var s, c, p, y, A = e._parts, F = A.length, V = this._ctx;
            if (F) {
              for (V.beginPath(), s = 0; s < F; s++) {
                for (c = 0, p = A[s].length; c < p; c++)
                  y = A[s][c], V[c ? "lineTo" : "moveTo"](y.x, y.y);
                n && V.closePath();
              }
              this._fillStroke(V, e);
            }
          }
        },
        _updateCircle: function(e) {
          if (!(!this._drawing || e._empty())) {
            var n = e._point, s = this._ctx, c = Math.max(Math.round(e._radius), 1), p = (Math.max(Math.round(e._radiusY), 1) || c) / c;
            p !== 1 && (s.save(), s.scale(1, p)), s.beginPath(), s.arc(n.x, n.y / p, c, 0, Math.PI * 2, !1), p !== 1 && s.restore(), this._fillStroke(s, e);
          }
        },
        _fillStroke: function(e, n) {
          var s = n.options;
          s.fill && (e.globalAlpha = s.fillOpacity, e.fillStyle = s.fillColor || s.color, e.fill(s.fillRule || "evenodd")), s.stroke && s.weight !== 0 && (e.setLineDash && e.setLineDash(n.options && n.options._dashArray || []), e.globalAlpha = s.opacity, e.lineWidth = s.weight, e.strokeStyle = s.color, e.lineCap = s.lineCap, e.lineJoin = s.lineJoin, e.stroke());
        },
        // Canvas obviously doesn't have mouse events for individual drawn objects,
        // so we emulate that by calculating what's under the mouse on mousemove/click manually
        _onClick: function(e) {
          for (var n = this._map.mouseEventToLayerPoint(e), s, c, p = this._drawFirst; p; p = p.next)
            s = p.layer, s.options.interactive && s._containsPoint(n) && (!(e.type === "click" || e.type === "preclick") || !this._map._draggableMoved(s)) && (c = s);
          this._fireEvent(c ? [c] : !1, e);
        },
        _onMouseMove: function(e) {
          if (!(!this._map || this._map.dragging.moving() || this._map._animatingZoom)) {
            var n = this._map.mouseEventToLayerPoint(e);
            this._handleMouseHover(e, n);
          }
        },
        _handleMouseOut: function(e) {
          var n = this._hoveredLayer;
          n && (Et(this._container, "leaflet-interactive"), this._fireEvent([n], e, "mouseout"), this._hoveredLayer = null, this._mouseHoverThrottled = !1);
        },
        _handleMouseHover: function(e, n) {
          if (!this._mouseHoverThrottled) {
            for (var s, c, p = this._drawFirst; p; p = p.next)
              s = p.layer, s.options.interactive && s._containsPoint(n) && (c = s);
            c !== this._hoveredLayer && (this._handleMouseOut(e), c && (Ue(this._container, "leaflet-interactive"), this._fireEvent([c], e, "mouseover"), this._hoveredLayer = c)), this._fireEvent(this._hoveredLayer ? [this._hoveredLayer] : !1, e), this._mouseHoverThrottled = !0, setTimeout(m(function() {
              this._mouseHoverThrottled = !1;
            }, this), 32);
          }
        },
        _fireEvent: function(e, n, s) {
          this._map._fireDOMEvent(n, s || n.type, e);
        },
        _bringToFront: function(e) {
          var n = e._order;
          if (n) {
            var s = n.next, c = n.prev;
            if (s)
              s.prev = c;
            else
              return;
            c ? c.next = s : s && (this._drawFirst = s), n.prev = this._drawLast, this._drawLast.next = n, n.next = null, this._drawLast = n, this._requestRedraw(e);
          }
        },
        _bringToBack: function(e) {
          var n = e._order;
          if (n) {
            var s = n.next, c = n.prev;
            if (c)
              c.next = s;
            else
              return;
            s ? s.prev = c : c && (this._drawLast = c), n.prev = null, n.next = this._drawFirst, this._drawFirst.prev = n, this._drawFirst = n, this._requestRedraw(e);
          }
        }
      });
      function Ui(e) {
        return Se.canvas ? new Go(e) : null;
      }
      var ur = (function() {
        try {
          return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"), function(e) {
            return document.createElement("<lvml:" + e + ' class="lvml">');
          };
        } catch {
        }
        return function(e) {
          return document.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">');
        };
      })(), Nl = {
        _initContainer: function() {
          this._container = lt("div", "leaflet-vml-container");
        },
        _update: function() {
          this._map._animatingZoom || (Zi.prototype._update.call(this), this.fire("update"));
        },
        _initPath: function(e) {
          var n = e._container = ur("shape");
          Ue(n, "leaflet-vml-shape " + (this.options.className || "")), n.coordsize = "1 1", e._path = ur("path"), n.appendChild(e._path), this._updateStyle(e), this._layers[v(e)] = e;
        },
        _addPath: function(e) {
          var n = e._container;
          this._container.appendChild(n), e.options.interactive && e.addInteractiveTarget(n);
        },
        _removePath: function(e) {
          var n = e._container;
          xt(n), e.removeInteractiveTarget(n), delete this._layers[v(e)];
        },
        _updateStyle: function(e) {
          var n = e._stroke, s = e._fill, c = e.options, p = e._container;
          p.stroked = !!c.stroke, p.filled = !!c.fill, c.stroke ? (n || (n = e._stroke = ur("stroke")), p.appendChild(n), n.weight = c.weight + "px", n.color = c.color, n.opacity = c.opacity, c.dashArray ? n.dashStyle = q(c.dashArray) ? c.dashArray.join(" ") : c.dashArray.replace(/( *, *)/g, " ") : n.dashStyle = "", n.endcap = c.lineCap.replace("butt", "flat"), n.joinstyle = c.lineJoin) : n && (p.removeChild(n), e._stroke = null), c.fill ? (s || (s = e._fill = ur("fill")), p.appendChild(s), s.color = c.fillColor || c.color, s.opacity = c.fillOpacity) : s && (p.removeChild(s), e._fill = null);
        },
        _updateCircle: function(e) {
          var n = e._point.round(), s = Math.round(e._radius), c = Math.round(e._radiusY || s);
          this._setPath(e, e._empty() ? "M0 0" : "AL " + n.x + "," + n.y + " " + s + "," + c + " 0," + 65535 * 360);
        },
        _setPath: function(e, n) {
          e._path.v = n;
        },
        _bringToFront: function(e) {
          xr(e._container);
        },
        _bringToBack: function(e) {
          rr(e._container);
        }
      }, Lr = Se.vml ? ur : Ii, io = Zi.extend({
        _initContainer: function() {
          this._container = Lr("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = Lr("g"), this._container.appendChild(this._rootGroup);
        },
        _destroyContainer: function() {
          xt(this._container), bt(this._container), delete this._container, delete this._rootGroup, delete this._svgSize;
        },
        _update: function() {
          if (!(this._map._animatingZoom && this._bounds)) {
            Zi.prototype._update.call(this);
            var e = this._bounds, n = e.getSize(), s = this._container;
            (!this._svgSize || !this._svgSize.equals(n)) && (this._svgSize = n, s.setAttribute("width", n.x), s.setAttribute("height", n.y)), Rt(s, e.min), s.setAttribute("viewBox", [e.min.x, e.min.y, n.x, n.y].join(" ")), this.fire("update");
          }
        },
        // methods below are called by vector layers implementations
        _initPath: function(e) {
          var n = e._path = Lr("path");
          e.options.className && Ue(n, e.options.className), e.options.interactive && Ue(n, "leaflet-interactive"), this._updateStyle(e), this._layers[v(e)] = e;
        },
        _addPath: function(e) {
          this._rootGroup || this._initContainer(), this._rootGroup.appendChild(e._path), e.addInteractiveTarget(e._path);
        },
        _removePath: function(e) {
          xt(e._path), e.removeInteractiveTarget(e._path), delete this._layers[v(e)];
        },
        _updatePath: function(e) {
          e._project(), e._update();
        },
        _updateStyle: function(e) {
          var n = e._path, s = e.options;
          n && (s.stroke ? (n.setAttribute("stroke", s.color), n.setAttribute("stroke-opacity", s.opacity), n.setAttribute("stroke-width", s.weight), n.setAttribute("stroke-linecap", s.lineCap), n.setAttribute("stroke-linejoin", s.lineJoin), s.dashArray ? n.setAttribute("stroke-dasharray", s.dashArray) : n.removeAttribute("stroke-dasharray"), s.dashOffset ? n.setAttribute("stroke-dashoffset", s.dashOffset) : n.removeAttribute("stroke-dashoffset")) : n.setAttribute("stroke", "none"), s.fill ? (n.setAttribute("fill", s.fillColor || s.color), n.setAttribute("fill-opacity", s.fillOpacity), n.setAttribute("fill-rule", s.fillRule || "evenodd")) : n.setAttribute("fill", "none"));
        },
        _updatePoly: function(e, n) {
          this._setPath(e, xo(e._parts, n));
        },
        _updateCircle: function(e) {
          var n = e._point, s = Math.max(Math.round(e._radius), 1), c = Math.max(Math.round(e._radiusY), 1) || s, p = "a" + s + "," + c + " 0 1,0 ", y = e._empty() ? "M0 0" : "M" + (n.x - s) + "," + n.y + p + s * 2 + ",0 " + p + -s * 2 + ",0 ";
          this._setPath(e, y);
        },
        _setPath: function(e, n) {
          e._path.setAttribute("d", n);
        },
        // SVG does not have the concept of zIndex so we resort to changing the DOM order of elements
        _bringToFront: function(e) {
          xr(e._path);
        },
        _bringToBack: function(e) {
          rr(e._path);
        }
      });
      Se.vml && io.include(Nl);
      function Es(e) {
        return Se.svg || Se.vml ? new io(e) : null;
      }
      it.include({
        // @namespace Map; @method getRenderer(layer: Path): Renderer
        // Returns the instance of `Renderer` that should be used to render the given
        // `Path`. It will ensure that the `renderer` options of the map and paths
        // are respected, and that the renderers do exist on the map.
        getRenderer: function(e) {
          var n = e.options.renderer || this._getPaneRenderer(e.options.pane) || this.options.renderer || this._renderer;
          return n || (n = this._renderer = this._createRenderer()), this.hasLayer(n) || this.addLayer(n), n;
        },
        _getPaneRenderer: function(e) {
          if (e === "overlayPane" || e === void 0)
            return !1;
          var n = this._paneRenderers[e];
          return n === void 0 && (n = this._createRenderer({ pane: e }), this._paneRenderers[e] = n), n;
        },
        _createRenderer: function(e) {
          return this.options.preferCanvas && Ui(e) || Es(e);
        }
      });
      var Wo = eo.extend({
        initialize: function(e, n) {
          eo.prototype.initialize.call(this, this._boundsToLatLngs(e), n);
        },
        // @method setBounds(latLngBounds: LatLngBounds): this
        // Redraws the rectangle with the passed bounds.
        setBounds: function(e) {
          return this.setLatLngs(this._boundsToLatLngs(e));
        },
        _boundsToLatLngs: function(e) {
          return e = oe(e), [
            e.getSouthWest(),
            e.getNorthWest(),
            e.getNorthEast(),
            e.getSouthEast()
          ];
        }
      });
      function Gl(e, n) {
        return new Wo(e, n);
      }
      io.create = Lr, io.pointsToPath = xo, Cn.geometryToLayer = An, Cn.coordsToLatLng = Ss, Cn.coordsToLatLngs = La, Cn.latLngToCoords = Ts, Cn.latLngsToCoords = Oa, Cn.getFeature = to, Cn.asFeature = Vi, it.mergeOptions({
        // @option boxZoom: Boolean = true
        // Whether the map can be zoomed to a rectangular area specified by
        // dragging the mouse while pressing the shift key.
        boxZoom: !0
      });
      var ro = Mt.extend({
        initialize: function(e) {
          this._map = e, this._container = e._container, this._pane = e._panes.overlayPane, this._resetStateTimeout = 0, e.on("unload", this._destroy, this);
        },
        addHooks: function() {
          Ze(this._container, "mousedown", this._onMouseDown, this);
        },
        removeHooks: function() {
          bt(this._container, "mousedown", this._onMouseDown, this);
        },
        moved: function() {
          return this._moved;
        },
        _destroy: function() {
          xt(this._pane), delete this._pane;
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
          this._clearDeferredResetState(), this._resetState(), Cr(), ns(), this._startPoint = this._map.mouseEventToContainerPoint(e), Ze(document, {
            contextmenu: ut,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseMove: function(e) {
          this._moved || (this._moved = !0, this._box = lt("div", "leaflet-zoom-box", this._container), Ue(this._container, "leaflet-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(e);
          var n = new he(this._point, this._startPoint), s = n.getSize();
          Rt(this._box, n.min), this._box.style.width = s.x + "px", this._box.style.height = s.y + "px";
        },
        _finish: function() {
          this._moved && (xt(this._box), Et(this._container, "leaflet-crosshair")), wi(), ya(), bt(document, {
            contextmenu: ut,
            mousemove: this._onMouseMove,
            mouseup: this._onMouseUp,
            keydown: this._onKeyDown
          }, this);
        },
        _onMouseUp: function(e) {
          if (!(e.which !== 1 && e.button !== 1) && (this._finish(), !!this._moved)) {
            this._clearDeferredResetState(), this._resetStateTimeout = setTimeout(m(this._resetState, this), 0);
            var n = new gt(
              this._map.containerPointToLatLng(this._startPoint),
              this._map.containerPointToLatLng(this._point)
            );
            this._map.fitBounds(n).fire("boxzoomend", { boxZoomBounds: n });
          }
        },
        _onKeyDown: function(e) {
          e.keyCode === 27 && (this._finish(), this._clearDeferredResetState(), this._resetState());
        }
      });
      it.addInitHook("addHandler", "boxZoom", ro), it.mergeOptions({
        // @option doubleClickZoom: Boolean|String = true
        // Whether the map can be zoomed in by double clicking on it and
        // zoomed out by double clicking while holding shift. If passed
        // `'center'`, double-click zoom will zoom to the center of the
        //  view regardless of where the mouse was.
        doubleClickZoom: !0
      });
      var cr = Mt.extend({
        addHooks: function() {
          this._map.on("dblclick", this._onDoubleClick, this);
        },
        removeHooks: function() {
          this._map.off("dblclick", this._onDoubleClick, this);
        },
        _onDoubleClick: function(e) {
          var n = this._map, s = n.getZoom(), c = n.options.zoomDelta, p = e.originalEvent.shiftKey ? s - c : s + c;
          n.options.doubleClickZoom === "center" ? n.setZoom(p) : n.setZoomAround(e.containerPoint, p);
        }
      });
      it.addInitHook("addHandler", "doubleClickZoom", cr), it.mergeOptions({
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
      var Vo = Mt.extend({
        addHooks: function() {
          if (!this._draggable) {
            var e = this._map;
            this._draggable = new or(e._mapPane, e._container), this._draggable.on({
              dragstart: this._onDragStart,
              drag: this._onDrag,
              dragend: this._onDragEnd
            }, this), this._draggable.on("predrag", this._onPreDragLimit, this), e.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), e.on("zoomend", this._onZoomEnd, this), e.whenReady(this._onZoomEnd, this));
          }
          Ue(this._map._container, "leaflet-grab leaflet-touch-drag"), this._draggable.enable(), this._positions = [], this._times = [];
        },
        removeHooks: function() {
          Et(this._map._container, "leaflet-grab"), Et(this._map._container, "leaflet-touch-drag"), this._draggable.disable();
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
            var n = oe(this._map.options.maxBounds);
            this._offsetLimit = Ge(
              this._map.latLngToContainerPoint(n.getNorthWest()).multiplyBy(-1),
              this._map.latLngToContainerPoint(n.getSouthEast()).multiplyBy(-1).add(this._map.getSize())
            ), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity));
          } else
            this._offsetLimit = null;
          e.fire("movestart").fire("dragstart"), e.options.inertia && (this._positions = [], this._times = []);
        },
        _onDrag: function(e) {
          if (this._map.options.inertia) {
            var n = this._lastTime = +/* @__PURE__ */ new Date(), s = this._lastPos = this._draggable._absPos || this._draggable._newPos;
            this._positions.push(s), this._times.push(n), this._prunePositions(n);
          }
          this._map.fire("move", e).fire("drag", e);
        },
        _prunePositions: function(e) {
          for (; this._positions.length > 1 && e - this._times[0] > 50; )
            this._positions.shift(), this._times.shift();
        },
        _onZoomEnd: function() {
          var e = this._map.getSize().divideBy(2), n = this._map.latLngToLayerPoint([0, 0]);
          this._initialWorldOffset = n.subtract(e).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x;
        },
        _viscousLimit: function(e, n) {
          return e - (e - n) * this._viscosity;
        },
        _onPreDragLimit: function() {
          if (!(!this._viscosity || !this._offsetLimit)) {
            var e = this._draggable._newPos.subtract(this._draggable._startPos), n = this._offsetLimit;
            e.x < n.min.x && (e.x = this._viscousLimit(e.x, n.min.x)), e.y < n.min.y && (e.y = this._viscousLimit(e.y, n.min.y)), e.x > n.max.x && (e.x = this._viscousLimit(e.x, n.max.x)), e.y > n.max.y && (e.y = this._viscousLimit(e.y, n.max.y)), this._draggable._newPos = this._draggable._startPos.add(e);
          }
        },
        _onPreDragWrap: function() {
          var e = this._worldWidth, n = Math.round(e / 2), s = this._initialWorldOffset, c = this._draggable._newPos.x, p = (c - n + s) % e + n - s, y = (c + n + s) % e - n - s, A = Math.abs(p + s) < Math.abs(y + s) ? p : y;
          this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = A;
        },
        _onDragEnd: function(e) {
          var n = this._map, s = n.options, c = !s.inertia || e.noInertia || this._times.length < 2;
          if (n.fire("dragend", e), c)
            n.fire("moveend");
          else {
            this._prunePositions(+/* @__PURE__ */ new Date());
            var p = this._lastPos.subtract(this._positions[0]), y = (this._lastTime - this._times[0]) / 1e3, A = s.easeLinearity, F = p.multiplyBy(A / y), V = F.distanceTo([0, 0]), ee = Math.min(s.inertiaMaxSpeed, V), ve = F.multiplyBy(ee / V), Ce = ee / (s.inertiaDeceleration * A), Je = ve.multiplyBy(-Ce / 2).round();
            !Je.x && !Je.y ? n.fire("moveend") : (Je = n._limitOffset(Je, n.options.maxBounds), Q(function() {
              n.panBy(Je, {
                duration: Ce,
                easeLinearity: A,
                noMoveStart: !0,
                animate: !0
              });
            }));
          }
        }
      });
      it.addInitHook("addHandler", "dragging", Vo), it.mergeOptions({
        // @option keyboard: Boolean = true
        // Makes the map focusable and allows users to navigate the map with keyboard
        // arrows and `+`/`-` keys.
        keyboard: !0,
        // @option keyboardPanDelta: Number = 80
        // Amount of pixels to pan when pressing an arrow key.
        keyboardPanDelta: 80
      });
      var Wl = Mt.extend({
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
          e.tabIndex <= 0 && (e.tabIndex = "0"), Ze(e, {
            focus: this._onFocus,
            blur: this._onBlur,
            mousedown: this._onMouseDown
          }, this), this._map.on({
            focus: this._addHooks,
            blur: this._removeHooks
          }, this);
        },
        removeHooks: function() {
          this._removeHooks(), bt(this._map._container, {
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
            var e = document.body, n = document.documentElement, s = e.scrollTop || n.scrollTop, c = e.scrollLeft || n.scrollLeft;
            this._map._container.focus(), window.scrollTo(c, s);
          }
        },
        _onFocus: function() {
          this._focused = !0, this._map.fire("focus");
        },
        _onBlur: function() {
          this._focused = !1, this._map.fire("blur");
        },
        _setPanDelta: function(e) {
          var n = this._panKeys = {}, s = this.keyCodes, c, p;
          for (c = 0, p = s.left.length; c < p; c++)
            n[s.left[c]] = [-1 * e, 0];
          for (c = 0, p = s.right.length; c < p; c++)
            n[s.right[c]] = [e, 0];
          for (c = 0, p = s.down.length; c < p; c++)
            n[s.down[c]] = [0, e];
          for (c = 0, p = s.up.length; c < p; c++)
            n[s.up[c]] = [0, -1 * e];
        },
        _setZoomDelta: function(e) {
          var n = this._zoomKeys = {}, s = this.keyCodes, c, p;
          for (c = 0, p = s.zoomIn.length; c < p; c++)
            n[s.zoomIn[c]] = e;
          for (c = 0, p = s.zoomOut.length; c < p; c++)
            n[s.zoomOut[c]] = -e;
        },
        _addHooks: function() {
          Ze(document, "keydown", this._onKeyDown, this);
        },
        _removeHooks: function() {
          bt(document, "keydown", this._onKeyDown, this);
        },
        _onKeyDown: function(e) {
          if (!(e.altKey || e.ctrlKey || e.metaKey)) {
            var n = e.keyCode, s = this._map, c;
            if (n in this._panKeys) {
              if (!s._panAnim || !s._panAnim._inProgress)
                if (c = this._panKeys[n], e.shiftKey && (c = j(c).multiplyBy(3)), s.options.maxBounds && (c = s._limitOffset(j(c), s.options.maxBounds)), s.options.worldCopyJump) {
                  var p = s.wrapLatLng(s.unproject(s.project(s.getCenter()).add(c)));
                  s.panTo(p);
                } else
                  s.panBy(c);
            } else if (n in this._zoomKeys)
              s.setZoom(s.getZoom() + (e.shiftKey ? 3 : 1) * this._zoomKeys[n]);
            else if (n === 27 && s._popup && s._popup.options.closeOnEscapeKey)
              s.closePopup();
            else
              return;
            ut(e);
          }
        }
      });
      it.addInitHook("addHandler", "keyboard", Wl), it.mergeOptions({
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
      var Vl = Mt.extend({
        addHooks: function() {
          Ze(this._map._container, "wheel", this._onWheelScroll, this), this._delta = 0;
        },
        removeHooks: function() {
          bt(this._map._container, "wheel", this._onWheelScroll, this);
        },
        _onWheelScroll: function(e) {
          var n = Al(e), s = this._map.options.wheelDebounceTime;
          this._delta += n, this._lastMousePos = this._map.mouseEventToContainerPoint(e), this._startTime || (this._startTime = +/* @__PURE__ */ new Date());
          var c = Math.max(s - (+/* @__PURE__ */ new Date() - this._startTime), 0);
          clearTimeout(this._timer), this._timer = setTimeout(m(this._performZoom, this), c), ut(e);
        },
        _performZoom: function() {
          var e = this._map, n = e.getZoom(), s = this._map.options.zoomSnap || 0;
          e._stop();
          var c = this._delta / (this._map.options.wheelPxPerZoomLevel * 4), p = 4 * Math.log(2 / (1 + Math.exp(-Math.abs(c)))) / Math.LN2, y = s ? Math.ceil(p / s) * s : p, A = e._limitZoom(n + (this._delta > 0 ? y : -y)) - n;
          this._delta = 0, this._startTime = null, A && (e.options.scrollWheelZoom === "center" ? e.setZoom(n + A) : e.setZoomAround(this._lastMousePos, n + A));
        }
      });
      it.addInitHook("addHandler", "scrollWheelZoom", Vl);
      var ec = 600;
      it.mergeOptions({
        // @section Touch interaction options
        // @option tapHold: Boolean
        // Enables simulation of `contextmenu` event, default is `true` for mobile Safari.
        tapHold: Se.touchNative && Se.safari && Se.mobile,
        // @option tapTolerance: Number = 15
        // The max number of pixels a user can shift his finger during touch
        // for it to be considered a valid tap.
        tapTolerance: 15
      });
      var Zo = Mt.extend({
        addHooks: function() {
          Ze(this._map._container, "touchstart", this._onDown, this);
        },
        removeHooks: function() {
          bt(this._map._container, "touchstart", this._onDown, this);
        },
        _onDown: function(e) {
          if (clearTimeout(this._holdTimeout), e.touches.length === 1) {
            var n = e.touches[0];
            this._startPos = this._newPos = new ye(n.clientX, n.clientY), this._holdTimeout = setTimeout(m(function() {
              this._cancel(), this._isTapValid() && (Ze(document, "touchend", He), Ze(document, "touchend touchcancel", this._cancelClickPrevent), this._simulateEvent("contextmenu", n));
            }, this), ec), Ze(document, "touchend touchcancel contextmenu", this._cancel, this), Ze(document, "touchmove", this._onMove, this);
          }
        },
        _cancelClickPrevent: function e() {
          bt(document, "touchend", He), bt(document, "touchend touchcancel", e);
        },
        _cancel: function() {
          clearTimeout(this._holdTimeout), bt(document, "touchend touchcancel contextmenu", this._cancel, this), bt(document, "touchmove", this._onMove, this);
        },
        _onMove: function(e) {
          var n = e.touches[0];
          this._newPos = new ye(n.clientX, n.clientY);
        },
        _isTapValid: function() {
          return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance;
        },
        _simulateEvent: function(e, n) {
          var s = new MouseEvent(e, {
            bubbles: !0,
            cancelable: !0,
            view: window,
            // detail: 1,
            screenX: n.screenX,
            screenY: n.screenY,
            clientX: n.clientX,
            clientY: n.clientY
            // button: 2,
            // buttons: 2
          });
          s._simulated = !0, n.target.dispatchEvent(s);
        }
      });
      it.addInitHook("addHandler", "tapHold", Zo), it.mergeOptions({
        // @section Touch interaction options
        // @option touchZoom: Boolean|String = *
        // Whether the map can be zoomed by touch-dragging with two fingers. If
        // passed `'center'`, it will zoom to the center of the view regardless of
        // where the touch events (fingers) were. Enabled for touch-capable web
        // browsers.
        touchZoom: Se.touch,
        // @option bounceAtZoomLimits: Boolean = true
        // Set it to false if you don't want the map to zoom beyond min/max zoom
        // and then bounce back when pinch-zooming.
        bounceAtZoomLimits: !0
      });
      var Uo = Mt.extend({
        addHooks: function() {
          Ue(this._map._container, "leaflet-touch-zoom"), Ze(this._map._container, "touchstart", this._onTouchStart, this);
        },
        removeHooks: function() {
          Et(this._map._container, "leaflet-touch-zoom"), bt(this._map._container, "touchstart", this._onTouchStart, this);
        },
        _onTouchStart: function(e) {
          var n = this._map;
          if (!(!e.touches || e.touches.length !== 2 || n._animatingZoom || this._zooming)) {
            var s = n.mouseEventToContainerPoint(e.touches[0]), c = n.mouseEventToContainerPoint(e.touches[1]);
            this._centerPoint = n.getSize()._divideBy(2), this._startLatLng = n.containerPointToLatLng(this._centerPoint), n.options.touchZoom !== "center" && (this._pinchStartLatLng = n.containerPointToLatLng(s.add(c)._divideBy(2))), this._startDist = s.distanceTo(c), this._startZoom = n.getZoom(), this._moved = !1, this._zooming = !0, n._stop(), Ze(document, "touchmove", this._onTouchMove, this), Ze(document, "touchend touchcancel", this._onTouchEnd, this), He(e);
          }
        },
        _onTouchMove: function(e) {
          if (!(!e.touches || e.touches.length !== 2 || !this._zooming)) {
            var n = this._map, s = n.mouseEventToContainerPoint(e.touches[0]), c = n.mouseEventToContainerPoint(e.touches[1]), p = s.distanceTo(c) / this._startDist;
            if (this._zoom = n.getScaleZoom(p, this._startZoom), !n.options.bounceAtZoomLimits && (this._zoom < n.getMinZoom() && p < 1 || this._zoom > n.getMaxZoom() && p > 1) && (this._zoom = n._limitZoom(this._zoom)), n.options.touchZoom === "center") {
              if (this._center = this._startLatLng, p === 1)
                return;
            } else {
              var y = s._add(c)._divideBy(2)._subtract(this._centerPoint);
              if (p === 1 && y.x === 0 && y.y === 0)
                return;
              this._center = n.unproject(n.project(this._pinchStartLatLng, this._zoom).subtract(y), this._zoom);
            }
            this._moved || (n._moveStart(!0, !1), this._moved = !0), G(this._animRequest);
            var A = m(n._move, n, this._center, this._zoom, { pinch: !0, round: !1 }, void 0);
            this._animRequest = Q(A, this, !0), He(e);
          }
        },
        _onTouchEnd: function() {
          if (!this._moved || !this._zooming) {
            this._zooming = !1;
            return;
          }
          this._zooming = !1, G(this._animRequest), bt(document, "touchmove", this._onTouchMove, this), bt(document, "touchend touchcancel", this._onTouchEnd, this), this._map.options.zoomAnimation ? this._map._animateZoom(this._center, this._map._limitZoom(this._zoom), !0, this._map.options.zoomSnap) : this._map._resetView(this._center, this._map._limitZoom(this._zoom));
        }
      });
      it.addInitHook("addHandler", "touchZoom", Uo), it.BoxZoom = ro, it.DoubleClickZoom = cr, it.Drag = Vo, it.Keyboard = Wl, it.ScrollWheelZoom = Vl, it.TapHold = Zo, it.TouchZoom = Uo, r.Bounds = he, r.Browser = Se, r.CRS = pn, r.Canvas = Go, r.Circle = Pa, r.CircleMarker = Aa, r.Class = ge, r.Control = Rn, r.DivIcon = zo, r.DivOverlay = xi, r.DomEvent = Hu, r.DomUtil = Tl, r.Draggable = or, r.Evented = ke, r.FeatureGroup = Ti, r.GeoJSON = Cn, r.GridLayer = at, r.Handler = Mt, r.Icon = Kr, r.ImageOverlay = we, r.LatLng = De, r.LatLngBounds = gt, r.Layer = Lt, r.LayerGroup = ar, r.LineUtil = gs, r.Map = it, r.Marker = Ca, r.Mixin = qu, r.Path = sr, r.Point = ye, r.PolyUtil = hs, r.Polygon = eo, r.Polyline = jn, r.Popup = gn, r.PosAnimation = ls, r.Projection = _s, r.Rectangle = Wo, r.Renderer = Zi, r.SVG = io, r.SVGOverlay = _t, r.TileLayer = Pr, r.Tooltip = Ia, r.Transformation = rn, r.Util = ae, r.VideoOverlay = ct, r.bind = m, r.bounds = Ge, r.canvas = Ui, r.circle = lr, r.circleMarker = ws, r.control = ii, r.divIcon = ka, r.extend = d, r.featureGroup = Bl, r.geoJSON = H, r.geoJson = Z, r.gridLayer = Ku, r.icon = ju, r.imageOverlay = We, r.latLng = Ne, r.latLngBounds = oe, r.layerGroup = Bo, r.map = an, r.marker = Qr, r.point = j, r.polygon = Xu, r.polyline = Yu, r.popup = Ma, r.rectangle = Gl, r.setOptions = R, r.stamp = v, r.svg = Es, r.svgOverlay = xs, r.tileLayer = No, r.tooltip = no, r.transformation = ti, r.version = l, r.videoOverlay = Jt;
      var Cs = window.L;
      r.noConflict = function() {
        return window.L = Cs, this;
      }, window.L = r;
    }));
  })(Gs, Gs.exports)), Gs.exports;
}
var Up = a2();
const Ua = /* @__PURE__ */ Zp(Up), s2 = /* @__PURE__ */ C1({
  __proto__: null,
  default: Ua
}, [Up]);
class l2 {
  constructor() {
    this.id = "";
  }
  invoke() {
  }
  run() {
  }
}
function u2() {
  const o = le(/* @__PURE__ */ new Map());
  return {
    addTasksAndIvnoke: async (h) => {
      const m = new Set(h.map((T) => T.id));
      o.value.forEach((T, x) => {
        m.has(x) || (T.invoke(), o.value.delete(x));
      });
      const g = 10;
      let v = 0;
      for (const T of h)
        o.value.has(T.id) || (o.value.set(T.id, T), T.run(), v++, v % g === 0 && await new Promise((x) => setTimeout(x, 0)));
    },
    invokeTask: (h) => {
      o.value.get(h)?.invoke(), o.value.delete(h);
    },
    hasTask: (h) => o.value.has(h),
    clearAll: () => {
      o.value.forEach((h, m) => {
        try {
          h.invoke();
        } catch (g) {
          console.warn("Error invoking task during clearAll:", m, g);
        }
      }), o.value.clear();
    }
  };
}
var ui = 63710088e-1, c2 = {
  centimeters: ui * 100,
  centimetres: ui * 100,
  degrees: 360 / (2 * Math.PI),
  feet: ui * 3.28084,
  inches: ui * 39.37,
  kilometers: ui / 1e3,
  kilometres: ui / 1e3,
  meters: ui,
  metres: ui,
  miles: ui / 1609.344,
  millimeters: ui * 1e3,
  millimetres: ui * 1e3,
  nauticalmiles: ui / 1852,
  radians: 1,
  yards: ui * 1.0936
};
function Od(o, a, r = {}) {
  const l = { type: "Feature" };
  return (r.id === 0 || r.id) && (l.id = r.id), r.bbox && (l.bbox = r.bbox), l.properties = a || {}, l.geometry = o, l;
}
function Us(o, a, r = {}) {
  if (!o)
    throw new Error("coordinates is required");
  if (!Array.isArray(o))
    throw new Error("coordinates must be an Array");
  if (o.length < 2)
    throw new Error("coordinates must be at least 2 numbers long");
  if (!kh(o[0]) || !kh(o[1]))
    throw new Error("coordinates must contain numbers");
  return Od({
    type: "Point",
    coordinates: o
  }, a, r);
}
function Ou(o, a = {}) {
  const r = { type: "FeatureCollection" };
  return a.id && (r.id = a.id), a.bbox && (r.bbox = a.bbox), r.features = o, r;
}
function d2(o, a = "kilometers") {
  const r = c2[a];
  if (!r)
    throw new Error(a + " units is invalid");
  return o * r;
}
function mu(o) {
  return o % 360 * Math.PI / 180;
}
function kh(o) {
  return !isNaN(o) && o !== null && !Array.isArray(o);
}
function Hs(o, a, r) {
  if (o !== null)
    for (var l, d, h, m, g, v, T, x = 0, b = 0, E, P = o.type, z = P === "FeatureCollection", R = P === "Feature", Y = z ? o.features.length : 1, B = 0; B < Y; B++) {
      T = z ? o.features[B].geometry : R ? o.geometry : o, E = T ? T.type === "GeometryCollection" : !1, g = E ? T.geometries.length : 1;
      for (var W = 0; W < g; W++) {
        var q = 0, M = 0;
        if (m = E ? T.geometries[W] : T, m !== null) {
          v = m.coordinates;
          var $ = m.type;
          switch (x = 0, $) {
            case null:
              break;
            case "Point":
              if (a(
                v,
                b,
                B,
                q,
                M
              ) === !1)
                return !1;
              b++, q++;
              break;
            case "LineString":
            case "MultiPoint":
              for (l = 0; l < v.length; l++) {
                if (a(
                  v[l],
                  b,
                  B,
                  q,
                  M
                ) === !1)
                  return !1;
                b++, $ === "MultiPoint" && q++;
              }
              $ === "LineString" && q++;
              break;
            case "Polygon":
            case "MultiLineString":
              for (l = 0; l < v.length; l++) {
                for (d = 0; d < v[l].length - x; d++) {
                  if (a(
                    v[l][d],
                    b,
                    B,
                    q,
                    M
                  ) === !1)
                    return !1;
                  b++;
                }
                $ === "MultiLineString" && q++, $ === "Polygon" && M++;
              }
              $ === "Polygon" && q++;
              break;
            case "MultiPolygon":
              for (l = 0; l < v.length; l++) {
                for (M = 0, d = 0; d < v[l].length; d++) {
                  for (h = 0; h < v[l][d].length - x; h++) {
                    if (a(
                      v[l][d][h],
                      b,
                      B,
                      q,
                      M
                    ) === !1)
                      return !1;
                    b++;
                  }
                  M++;
                }
                q++;
              }
              break;
            case "GeometryCollection":
              for (l = 0; l < m.geometries.length; l++)
                if (Hs(m.geometries[l], a) === !1)
                  return !1;
              break;
            default:
              throw new Error("Unknown Geometry Type");
          }
        }
      }
    }
}
function Hp(o, a) {
  if (o.type === "Feature")
    a(o, 0);
  else if (o.type === "FeatureCollection")
    for (var r = 0; r < o.features.length && a(o.features[r], r) !== !1; r++)
      ;
}
function el(o, a = {}) {
  if (o.bbox != null && a.recompute !== !0)
    return o.bbox;
  const r = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
  return Hs(o, (l) => {
    r[0] > l[0] && (r[0] = l[0]), r[1] > l[1] && (r[1] = l[1]), r[2] < l[0] && (r[2] = l[0]), r[3] < l[1] && (r[3] = l[1]);
  }), r;
}
const Gr = 11102230246251565e-32, On = 134217729, f2 = (3 + 8 * Gr) * Gr;
function Xc(o, a, r, l, d) {
  let h, m, g, v, T = a[0], x = l[0], b = 0, E = 0;
  x > T == x > -T ? (h = T, T = a[++b]) : (h = x, x = l[++E]);
  let P = 0;
  if (b < o && E < r)
    for (x > T == x > -T ? (m = T + h, g = h - (m - T), T = a[++b]) : (m = x + h, g = h - (m - x), x = l[++E]), h = m, g !== 0 && (d[P++] = g); b < o && E < r; )
      x > T == x > -T ? (m = h + T, v = m - h, g = h - (m - v) + (T - v), T = a[++b]) : (m = h + x, v = m - h, g = h - (m - v) + (x - v), x = l[++E]), h = m, g !== 0 && (d[P++] = g);
  for (; b < o; )
    m = h + T, v = m - h, g = h - (m - v) + (T - v), T = a[++b], h = m, g !== 0 && (d[P++] = g);
  for (; E < r; )
    m = h + x, v = m - h, g = h - (m - v) + (x - v), x = l[++E], h = m, g !== 0 && (d[P++] = g);
  return (h !== 0 || P === 0) && (d[P++] = h), P;
}
function h2(o, a) {
  let r = a[0];
  for (let l = 1; l < o; l++) r += a[l];
  return r;
}
function hl(o) {
  return new Float64Array(o);
}
const p2 = (3 + 16 * Gr) * Gr, m2 = (2 + 12 * Gr) * Gr, g2 = (9 + 64 * Gr) * Gr * Gr, Wa = hl(4), Dh = hl(8), Fh = hl(12), Bh = hl(16), Zn = hl(4);
function v2(o, a, r, l, d, h, m) {
  let g, v, T, x, b, E, P, z, R, Y, B, W, q, M, $, ue, fe, Ee;
  const ne = o - d, U = r - d, Q = a - h, G = l - h;
  M = ne * G, E = On * ne, P = E - (E - ne), z = ne - P, E = On * G, R = E - (E - G), Y = G - R, $ = z * Y - (M - P * R - z * R - P * Y), ue = Q * U, E = On * Q, P = E - (E - Q), z = Q - P, E = On * U, R = E - (E - U), Y = U - R, fe = z * Y - (ue - P * R - z * R - P * Y), B = $ - fe, b = $ - B, Wa[0] = $ - (B + b) + (b - fe), W = M + B, b = W - M, q = M - (W - b) + (B - b), B = q - ue, b = q - B, Wa[1] = q - (B + b) + (b - ue), Ee = W + B, b = Ee - W, Wa[2] = W - (Ee - b) + (B - b), Wa[3] = Ee;
  let ae = h2(4, Wa), ge = m2 * m;
  if (ae >= ge || -ae >= ge || (b = o - ne, g = o - (ne + b) + (b - d), b = r - U, T = r - (U + b) + (b - d), b = a - Q, v = a - (Q + b) + (b - h), b = l - G, x = l - (G + b) + (b - h), g === 0 && v === 0 && T === 0 && x === 0) || (ge = g2 * m + f2 * Math.abs(ae), ae += ne * x + G * g - (Q * T + U * v), ae >= ge || -ae >= ge)) return ae;
  M = g * G, E = On * g, P = E - (E - g), z = g - P, E = On * G, R = E - (E - G), Y = G - R, $ = z * Y - (M - P * R - z * R - P * Y), ue = v * U, E = On * v, P = E - (E - v), z = v - P, E = On * U, R = E - (E - U), Y = U - R, fe = z * Y - (ue - P * R - z * R - P * Y), B = $ - fe, b = $ - B, Zn[0] = $ - (B + b) + (b - fe), W = M + B, b = W - M, q = M - (W - b) + (B - b), B = q - ue, b = q - B, Zn[1] = q - (B + b) + (b - ue), Ee = W + B, b = Ee - W, Zn[2] = W - (Ee - b) + (B - b), Zn[3] = Ee;
  const Qe = Xc(4, Wa, 4, Zn, Dh);
  M = ne * x, E = On * ne, P = E - (E - ne), z = ne - P, E = On * x, R = E - (E - x), Y = x - R, $ = z * Y - (M - P * R - z * R - P * Y), ue = Q * T, E = On * Q, P = E - (E - Q), z = Q - P, E = On * T, R = E - (E - T), Y = T - R, fe = z * Y - (ue - P * R - z * R - P * Y), B = $ - fe, b = $ - B, Zn[0] = $ - (B + b) + (b - fe), W = M + B, b = W - M, q = M - (W - b) + (B - b), B = q - ue, b = q - B, Zn[1] = q - (B + b) + (b - ue), Ee = W + B, b = Ee - W, Zn[2] = W - (Ee - b) + (B - b), Zn[3] = Ee;
  const Ae = Xc(Qe, Dh, 4, Zn, Fh);
  M = g * x, E = On * g, P = E - (E - g), z = g - P, E = On * x, R = E - (E - x), Y = x - R, $ = z * Y - (M - P * R - z * R - P * Y), ue = v * T, E = On * v, P = E - (E - v), z = v - P, E = On * T, R = E - (E - T), Y = T - R, fe = z * Y - (ue - P * R - z * R - P * Y), B = $ - fe, b = $ - B, Zn[0] = $ - (B + b) + (b - fe), W = M + B, b = W - M, q = M - (W - b) + (B - b), B = q - ue, b = q - B, Zn[1] = q - (B + b) + (b - ue), Ee = W + B, b = Ee - W, Zn[2] = W - (Ee - b) + (B - b), Zn[3] = Ee;
  const ke = Xc(Ae, Fh, 4, Zn, Bh);
  return Bh[ke - 1];
}
function _2(o, a, r, l, d, h) {
  const m = (a - h) * (r - d), g = (o - d) * (l - h), v = m - g, T = Math.abs(m + g);
  return Math.abs(v) >= p2 * T ? v : -v2(o, a, r, l, d, h, T);
}
function y2(o, a) {
  var r, l, d = 0, h, m, g, v, T, x, b, E = o[0], P = o[1], z = a.length;
  for (r = 0; r < z; r++) {
    l = 0;
    var R = a[r], Y = R.length - 1;
    if (x = R[0], x[0] !== R[Y][0] && x[1] !== R[Y][1])
      throw new Error("First and last coordinates in a ring must be the same");
    for (m = x[0] - E, g = x[1] - P, l; l < Y; l++) {
      if (b = R[l + 1], v = b[0] - E, T = b[1] - P, g === 0 && T === 0) {
        if (v <= 0 && m >= 0 || m <= 0 && v >= 0)
          return 0;
      } else if (T >= 0 && g <= 0 || T <= 0 && g >= 0) {
        if (h = _2(m, v, g, T, 0, 0), h === 0)
          return 0;
        (h > 0 && T > 0 && g <= 0 || h < 0 && T <= 0 && g > 0) && d++;
      }
      x = b, g = T, m = v;
    }
  }
  return d % 2 !== 0;
}
function w2(o) {
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
function b2(o) {
  return o.type === "Feature" ? o.geometry : o;
}
function pl(o, a, r = {}) {
  if (!o)
    throw new Error("point is required");
  if (!a)
    throw new Error("polygon is required");
  const l = w2(o), d = b2(a), h = d.type, m = a.bbox;
  let g = d.coordinates;
  if (m && S2(l, m) === !1)
    return !1;
  h === "Polygon" && (g = [g]);
  let v = !1;
  for (var T = 0; T < g.length; ++T) {
    const x = y2(l, g[T]);
    if (x === 0) return !r.ignoreBoundary;
    x && (v = !0);
  }
  return v;
}
function S2(o, a) {
  return a[0] <= o[0] && a[1] <= o[1] && a[2] >= o[0] && a[3] >= o[1];
}
function hd(o) {
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
function T2(o) {
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
function pd(o) {
  return o.type === "Feature" ? o.geometry : o;
}
function tl(o, a, r = {}) {
  const l = hd(o), d = T2(a);
  for (let h = 0; h < d.length - 1; h++) {
    let m = !1;
    if (r.ignoreEndVertices && (h === 0 && (m = "start"), h === d.length - 2 && (m = "end"), h === 0 && h + 1 === d.length - 1 && (m = "both")), x2(
      d[h],
      d[h + 1],
      l,
      m,
      typeof r.epsilon > "u" ? null : r.epsilon
    ))
      return !0;
  }
  return !1;
}
function x2(o, a, r, l, d) {
  const h = r[0], m = r[1], g = o[0], v = o[1], T = a[0], x = a[1], b = r[0] - g, E = r[1] - v, P = T - g, z = x - v, R = b * z - E * P;
  if (d !== null) {
    if (Math.abs(R) > d)
      return !1;
  } else if (R !== 0)
    return !1;
  if (Math.abs(P) === Math.abs(z) && Math.abs(P) === 0)
    return l ? !1 : r[0] === o[0] && r[1] === o[1];
  if (l) {
    if (l === "start")
      return Math.abs(P) >= Math.abs(z) ? P > 0 ? g < h && h <= T : T <= h && h < g : z > 0 ? v < m && m <= x : x <= m && m < v;
    if (l === "end")
      return Math.abs(P) >= Math.abs(z) ? P > 0 ? g <= h && h < T : T < h && h <= g : z > 0 ? v <= m && m < x : x < m && m <= v;
    if (l === "both")
      return Math.abs(P) >= Math.abs(z) ? P > 0 ? g < h && h < T : T < h && h < g : z > 0 ? v < m && m < x : x < m && m < v;
  } else return Math.abs(P) >= Math.abs(z) ? P > 0 ? g <= h && h <= T : T <= h && h <= g : z > 0 ? v <= m && m <= x : x <= m && m <= v;
  return !1;
}
function E2(o, a) {
  const r = pd(o), l = pd(a), d = r.type, h = l.type, m = r.coordinates, g = l.coordinates;
  switch (d) {
    case "Point":
      switch (h) {
        case "Point":
          return Md(m, g);
        default:
          throw new Error("feature2 " + h + " geometry not supported");
      }
    case "MultiPoint":
      switch (h) {
        case "Point":
          return A2(r, l);
        case "MultiPoint":
          return P2(r, l);
        default:
          throw new Error("feature2 " + h + " geometry not supported");
      }
    case "LineString":
      switch (h) {
        case "Point":
          return tl(l, r, { ignoreEndVertices: !0 });
        case "LineString":
          return M2(r, l);
        case "MultiPoint":
          return L2(r, l);
        default:
          throw new Error("feature2 " + h + " geometry not supported");
      }
    case "Polygon":
      switch (h) {
        case "Point":
          return pl(l, r, { ignoreBoundary: !0 });
        case "LineString":
          return I2(r, l);
        case "Polygon":
          return qp(r, l);
        case "MultiPoint":
          return O2(r, l);
        default:
          throw new Error("feature2 " + h + " geometry not supported");
      }
    case "MultiPolygon":
      switch (h) {
        case "Polygon":
          return C2(r, l);
        default:
          throw new Error("feature2 " + h + " geometry not supported");
      }
    default:
      throw new Error("feature1 " + d + " geometry not supported");
  }
}
function C2(o, a) {
  return o.coordinates.some(
    (r) => qp({ type: "Polygon", coordinates: r }, a)
  );
}
function A2(o, a) {
  let r, l = !1;
  for (r = 0; r < o.coordinates.length; r++)
    if (Md(o.coordinates[r], a.coordinates)) {
      l = !0;
      break;
    }
  return l;
}
function P2(o, a) {
  for (const r of a.coordinates) {
    let l = !1;
    for (const d of o.coordinates)
      if (Md(r, d)) {
        l = !0;
        break;
      }
    if (!l)
      return !1;
  }
  return !0;
}
function L2(o, a) {
  let r = !1;
  for (const l of a.coordinates)
    if (tl(l, o, { ignoreEndVertices: !0 }) && (r = !0), !tl(l, o))
      return !1;
  return !!r;
}
function O2(o, a) {
  for (const r of a.coordinates)
    if (!pl(r, o, { ignoreBoundary: !0 }))
      return !1;
  return !0;
}
function M2(o, a) {
  let r = !1;
  for (const l of a.coordinates)
    if (tl({ type: "Point", coordinates: l }, o, {
      ignoreEndVertices: !0
    }) && (r = !0), !tl({ type: "Point", coordinates: l }, o, {
      ignoreEndVertices: !1
    }))
      return !1;
  return r;
}
function I2(o, a) {
  let r = !1, l = 0;
  const d = el(o), h = el(a);
  if (!$p(d, h))
    return !1;
  for (l; l < a.coordinates.length - 1; l++) {
    const m = k2(
      a.coordinates[l],
      a.coordinates[l + 1]
    );
    if (pl({ type: "Point", coordinates: m }, o, {
      ignoreBoundary: !0
    })) {
      r = !0;
      break;
    }
  }
  return r;
}
function qp(o, a) {
  if (o.type === "Feature" && o.geometry === null || a.type === "Feature" && a.geometry === null)
    return !1;
  const r = el(o), l = el(a);
  if (!$p(r, l))
    return !1;
  const d = pd(a).coordinates;
  for (const h of d)
    for (const m of h)
      if (!pl(m, o))
        return !1;
  return !0;
}
function $p(o, a) {
  return !(o[0] > a[0] || o[2] < a[2] || o[1] > a[1] || o[3] < a[3]);
}
function Md(o, a) {
  return o[0] === a[0] && o[1] === a[1];
}
function k2(o, a) {
  return [(o[0] + a[0]) / 2, (o[1] + a[1]) / 2];
}
var D2 = E2;
function F2(o) {
  const a = [];
  return o.type === "FeatureCollection" ? Hp(o, function(r) {
    Hs(r, function(l) {
      a.push(Us(l, r.properties));
    });
  }) : o.type === "Feature" ? Hs(o, function(r) {
    a.push(Us(r, o.properties));
  }) : Hs(o, function(r) {
    a.push(Us(r));
  }), Ou(a);
}
function B2(o, a = {}) {
  const r = el(o), l = (r[0] + r[2]) / 2, d = (r[1] + r[3]) / 2;
  return Us([l, d], a.properties, a);
}
function R2(o) {
  if (!o)
    throw new Error("geojson is required");
  switch (o.type) {
    case "Feature":
      return Jp(o);
    case "FeatureCollection":
      return z2(o);
    case "Point":
    case "LineString":
    case "Polygon":
    case "MultiPoint":
    case "MultiLineString":
    case "MultiPolygon":
    case "GeometryCollection":
      return Id(o);
    default:
      throw new Error("unknown GeoJSON type");
  }
}
function Jp(o) {
  const a = { type: "Feature" };
  return Object.keys(o).forEach((r) => {
    switch (r) {
      case "type":
      case "properties":
      case "geometry":
        return;
      default:
        a[r] = o[r];
    }
  }), a.properties = jp(o.properties), o.geometry == null ? a.geometry = null : a.geometry = Id(o.geometry), a;
}
function jp(o) {
  const a = {};
  return o && Object.keys(o).forEach((r) => {
    const l = o[r];
    typeof l == "object" ? l === null ? a[r] = null : Array.isArray(l) ? a[r] = l.map((d) => d) : a[r] = jp(l) : a[r] = l;
  }), a;
}
function z2(o) {
  const a = { type: "FeatureCollection" };
  return Object.keys(o).forEach((r) => {
    switch (r) {
      case "type":
      case "features":
        return;
      default:
        a[r] = o[r];
    }
  }), a.features = o.features.map((r) => Jp(r)), a;
}
function Id(o) {
  const a = { type: o.type };
  return o.bbox && (a.bbox = o.bbox), o.type === "GeometryCollection" ? (a.geometries = o.geometries.map((r) => Id(r)), a) : (a.coordinates = Yp(o.coordinates), a);
}
function Yp(o) {
  const a = o;
  return typeof a[0] != "object" ? a.slice() : a.map((r) => Yp(r));
}
function N2(o, a, r = {}) {
  var l = hd(o), d = hd(a), h = mu(d[1] - l[1]), m = mu(d[0] - l[0]), g = mu(l[1]), v = mu(d[1]), T = Math.pow(Math.sin(h / 2), 2) + Math.pow(Math.sin(m / 2), 2) * Math.cos(g) * Math.cos(v);
  return d2(
    2 * Math.atan2(Math.sqrt(T), Math.sqrt(1 - T)),
    r.units
  );
}
var G2 = Object.defineProperty, W2 = Object.defineProperties, V2 = Object.getOwnPropertyDescriptors, Rh = Object.getOwnPropertySymbols, Z2 = Object.prototype.hasOwnProperty, U2 = Object.prototype.propertyIsEnumerable, zh = (o, a, r) => a in o ? G2(o, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[a] = r, Nh = (o, a) => {
  for (var r in a || (a = {}))
    Z2.call(a, r) && zh(o, r, a[r]);
  if (Rh)
    for (var r of Rh(a))
      U2.call(a, r) && zh(o, r, a[r]);
  return o;
}, Gh = (o, a) => W2(o, V2(a));
function H2(o, a, r = {}) {
  if (!o) throw new Error("targetPoint is required");
  if (!a) throw new Error("points is required");
  let l = 1 / 0, d = 0;
  Hp(a, (m, g) => {
    const v = N2(o, m, r);
    v < l && (d = g, l = v);
  });
  const h = R2(a.features[d]);
  return Gh(Nh({}, h), {
    properties: Gh(Nh({}, h.properties), {
      featureIndex: d,
      distanceToPoint: l
    })
  });
}
function q2(o) {
  const a = $2(o), r = B2(a);
  let l = !1, d = 0;
  for (; !l && d < a.features.length; ) {
    const h = a.features[d].geometry;
    let m, g, v, T, x, b, E = !1;
    if (h.type === "Point")
      r.geometry.coordinates[0] === h.coordinates[0] && r.geometry.coordinates[1] === h.coordinates[1] && (l = !0);
    else if (h.type === "MultiPoint") {
      let P = !1, z = 0;
      for (; !P && z < h.coordinates.length; )
        r.geometry.coordinates[0] === h.coordinates[z][0] && r.geometry.coordinates[1] === h.coordinates[z][1] && (l = !0, P = !0), z++;
    } else if (h.type === "LineString") {
      let P = 0;
      for (; !E && P < h.coordinates.length - 1; )
        m = r.geometry.coordinates[0], g = r.geometry.coordinates[1], v = h.coordinates[P][0], T = h.coordinates[P][1], x = h.coordinates[P + 1][0], b = h.coordinates[P + 1][1], Wh(m, g, v, T, x, b) && (E = !0, l = !0), P++;
    } else if (h.type === "MultiLineString") {
      let P = 0;
      for (; P < h.coordinates.length; ) {
        E = !1;
        let z = 0;
        const R = h.coordinates[P];
        for (; !E && z < R.length - 1; )
          m = r.geometry.coordinates[0], g = r.geometry.coordinates[1], v = R[z][0], T = R[z][1], x = R[z + 1][0], b = R[z + 1][1], Wh(m, g, v, T, x, b) && (E = !0, l = !0), z++;
        P++;
      }
    } else (h.type === "Polygon" || h.type === "MultiPolygon") && pl(r, h) && (l = !0);
    d++;
  }
  if (l)
    return r;
  {
    const h = Ou([]);
    for (let m = 0; m < a.features.length; m++)
      h.features = h.features.concat(
        F2(a.features[m]).features
      );
    return Us(H2(r, h).geometry.coordinates);
  }
}
function $2(o) {
  return o.type !== "FeatureCollection" ? o.type !== "Feature" ? Ou([Od(o)]) : Ou([o]) : o;
}
function Wh(o, a, r, l, d, h) {
  const m = Math.sqrt((d - r) * (d - r) + (h - l) * (h - l)), g = Math.sqrt((o - r) * (o - r) + (a - l) * (a - l)), v = Math.sqrt((d - o) * (d - o) + (h - a) * (h - a));
  return m === g + v;
}
var Vh = q2;
const gu = /* @__PURE__ */ new Map();
function qs() {
  return {
    registerDataPointRenderer: (d) => {
      gu.set(d.namespace + d.qualifiedName, d);
    },
    unregisterDataPointrender: (d) => {
      gu.delete(d.namespace + d.qualifiedName);
    },
    getAll: () => gu,
    getById: (d) => gu.get(d)
  };
}
const J2 = /* @__PURE__ */ $e({
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
    return (a, r) => (N(!0), te(xe, null, At(o.styleIds, (l) => (N(), te(xe, { key: l }, [
      o.isPoint(o.geoJson) ? Le("", !0) : (N(), Be(be(aa), {
        key: 0,
        ref_for: !0,
        ref: "thingsLayer",
        geojson: o.filterFeatureCollection(o.geoJson, o.getStyleById(l)),
        options: o.layerOptions,
        "options-style": () => o.getStyleById(l)?.renderer.area
      }, null, 8, ["geojson", "options", "options-style"]))
    ], 64))), 128));
  }
}), j2 = { class: "inner" }, Y2 = { class: "observation-slot" }, X2 = { class: "inner" }, K2 = { class: "observation-slot" }, Q2 = ["src"], ew = /* @__PURE__ */ $e({
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
    return (a, r) => (N(), te(xe, null, [
      o.renderAs === "icon" ? (N(), te("div", {
        key: 0,
        style: $a({
          background: o.isSelected ? o.selectionColor : o.backgroundColor
        }),
        class: mr(["pin", "icon", { round: o.isRound, solid: o.isSolid }])
      }, [
        se("div", j2, [
          o.iconConfig ? (N(), Be(be(dp), {
            key: 0,
            configv: o.iconConfig
          }, null, 8, ["configv"])) : Le("", !0)
        ]),
        se("div", Y2, [
          Rs(a.$slots, "observation", {}, void 0, !0)
        ])
      ], 6)) : Le("", !0),
      o.renderAs === "prop" ? (N(), te("div", {
        key: 1,
        style: $a({
          background: o.isSelected ? o.selectionColor : o.backgroundColor
        }),
        class: mr(["pin", "contain", "marker", { round: o.isRound, solid: o.isSolid }])
      }, [
        se("div", X2, rt(o.propertyValue), 1),
        se("div", K2, [
          Rs(a.$slots, "observation", {}, void 0, !0)
        ])
      ], 6)) : Le("", !0),
      o.renderAs === "image" ? (N(), te(xe, { key: 2 }, [
        se("div", {
          class: "image-marker",
          style: $a({
            width: `${o.imageSize}px`,
            height: `${o.imageSize}px`,
            background: o.isSelected ? o.selectionColor : void 0,
            borderRadius: o.isSelected ? "50%" : void 0,
            padding: o.isSelected ? "4px" : void 0
          })
        }, [
          o.imageUrl ? (N(), te("img", {
            key: 0,
            src: o.imageUrl,
            style: { width: "100%", height: "100%", objectFit: "contain" }
          }, null, 8, Q2)) : Le("", !0)
        ], 4),
        Rs(a.$slots, "observation", {}, void 0, !0)
      ], 64)) : Le("", !0),
      o.renderAs === "none" ? Rs(a.$slots, "observation", { key: 3 }, void 0, !0) : Le("", !0)
    ], 64));
  }
}), vi = (o, a) => {
  const r = o.__vccOpts || o;
  for (const [l, d] of a)
    r[l] = d;
  return r;
}, nl = /* @__PURE__ */ vi(ew, [["__scopeId", "data-v-dc572ab0"]]), tw = /* @__PURE__ */ $e({
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
    return (a, r) => (N(!0), te(xe, null, At(o.styleIds, (l) => (N(), te(xe, { key: l }, [
      (N(!0), te(xe, null, At(o.filterFeatureCollection(o.layerData, o.getStyleById(l)).features, (d) => (N(), te(xe, {
        key: d.id
      }, [
        o.isPoint(d.geometry) ? Le("", !0) : (N(), Be(be(aa), {
          key: 0,
          ref_for: !0,
          ref: "geojsonLayer",
          geojson: d,
          options: o.layerOptions,
          "options-style": () => o.getStyleById(l)?.renderer.area
        }, null, 8, ["geojson", "options", "options-style"])),
        o.getPoint(d.geometry) ? (N(), Be(be(Qs), {
          key: 1,
          "lat-lng": o.getPoint(d.geometry),
          options: { pane: o.markerPane }
        }, {
          default: _e(() => [
            re(be(Ks), { "class-name": "someExtraClass" }, {
              default: _e(() => [
                re(nl, {
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
        }, 1032, ["lat-lng", "options"])) : Le("", !0)
      ], 64))), 128))
    ], 64))), 128));
  }
}), nw = /* @__PURE__ */ $e({
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
    return (a, r) => (N(!0), te(xe, null, At(o.styleIds, (l) => (N(), te(xe, { key: l }, [
      o.layerData && o.layerData.features ? (N(), te(xe, { key: 0 }, [
        (N(!0), te(xe, null, At(o.filterFeatureCollection(o.layerData, o.getStyleById(l)).features, (d) => (N(), te(xe, {
          key: "area-" + d.id
        }, [
          d.geometry && !o.isPoint(d.geometry) ? (N(), Be(be(aa), {
            key: 0,
            ref_for: !0,
            ref: "restGeojsonLayer",
            geojson: d,
            options: o.layerOptions,
            "options-style": () => o.getStyleById(l)?.renderer.area
          }, null, 8, ["geojson", "options", "options-style"])) : Le("", !0)
        ], 64))), 128)),
        (N(!0), te(xe, null, At(o.filterFeatureCollection(o.layerData, o.getStyleById(l)).features, (d) => (N(), te(xe, {
          key: "point-" + d.id
        }, [
          d.geometry && o.isPoint(d.geometry) && o.getPoint(d.geometry) ? (N(), Be(be(Qs), {
            key: 0,
            "lat-lng": o.getPoint(d.geometry),
            options: { pane: o.markerPane }
          }, {
            default: _e(() => [
              re(be(Ks), { "class-name": "someExtraClass" }, {
                default: _e(() => [
                  re(nl, {
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
          }, 1032, ["lat-lng", "options"])) : Le("", !0)
        ], 64))), 128))
      ], 64)) : Le("", !0)
    ], 64))), 128));
  }
});
var ra = /* @__PURE__ */ ((o) => (o.Thing = "Thing", o.OberservedArea = "OberservedArea", o))(ra || {}), Mi = /* @__PURE__ */ ((o) => (o.equals = "eq", o.lessThen = "lt", o.greaterThen = "gt", o.lessThenEquals = "lte", o.greaterThenEquals = "gte", o.notEQuals = "neq", o))(Mi || {}), iw = Object.defineProperty, rw = Object.getOwnPropertyDescriptor, yo = (o, a, r, l) => {
  for (var d = l > 1 ? void 0 : l ? rw(a, r) : a, h = o.length - 1, m; h >= 0; h--)
    (m = o[h]) && (d = (l ? m(a, r, d) : m(d)) || d);
  return l && d && iw(a, r, d), d;
};
let mi = class extends al {
  constructor() {
    super(...arguments), this.datastreams = [];
  }
};
yo([
  Pe("Unique identifier of the Thing."),
  ft()
], mi.prototype, "id", 2);
yo([
  Pe("Name of the Thing."),
  ft()
], mi.prototype, "name", 2);
yo([
  Pe("Description of the Thing."),
  ft()
], mi.prototype, "description", 2);
yo([
  Pe("Custom properties of the Thing (mapped from Record<string, any>)."),
  ft()
], mi.prototype, "properties", 2);
yo([
  Pe("Location geometry (GeoJSON) of the Thing."),
  ft()
], mi.prototype, "location", 2);
yo([
  Pe("ID of the renderer that triggered this event."),
  ft()
], mi.prototype, "rendererId", 2);
yo([
  Pe("Summary of datastreams associated with this Thing."),
  sl("DatastreamSummary")
], mi.prototype, "datastreams", 2);
mi = yo([
  Pe("Payload emitted when a Thing marker is clicked on the map."),
  ua({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.map#//ThingClickPayload" })
], mi);
var ow = Object.defineProperty, aw = Object.getOwnPropertyDescriptor, wo = (o, a, r, l) => {
  for (var d = l > 1 ? void 0 : l ? aw(a, r) : a, h = o.length - 1, m; h >= 0; h--)
    (m = o[h]) && (d = (l ? m(a, r, d) : m(d)) || d);
  return l && d && ow(a, r, d), d;
};
let gi = class extends al {
};
wo([
  Pe("Datastream ID."),
  ft()
], gi.prototype, "id", 2);
wo([
  Pe("Datastream name."),
  ft()
], gi.prototype, "name", 2);
wo([
  Pe("Parent Thing ID."),
  ft()
], gi.prototype, "thingId", 2);
wo([
  Pe("Unit of measurement object."),
  ft()
], gi.prototype, "unitOfMeasurement", 2);
wo([
  Pe("Observed property name."),
  ft()
], gi.prototype, "observedProperty", 2);
wo([
  Pe("Latest observation result value."),
  ft()
], gi.prototype, "latestObservationResult", 2);
wo([
  Pe("Latest observation timestamp (ISO 8601)."),
  ft()
], gi.prototype, "latestObservationTime", 2);
gi = wo([
  Pe("Payload emitted when a Datastream is clicked on the map."),
  ua({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.map#//DatastreamClickPayload" })
], gi);
var sw = Object.defineProperty, lw = Object.getOwnPropertyDescriptor, ml = (o, a, r, l) => {
  for (var d = l > 1 ? void 0 : l ? lw(a, r) : a, h = o.length - 1, m; h >= 0; h--)
    (m = o[h]) && (d = (l ? m(a, r, d) : m(d)) || d);
  return l && d && sw(a, r, d), d;
};
let sa = class extends al {
  constructor() {
    super(...arguments), this.thingIds = [];
  }
};
ml([
  Pe("Location ID."),
  ft()
], sa.prototype, "id", 2);
ml([
  Pe("Location name."),
  ft()
], sa.prototype, "name", 2);
ml([
  Pe("GeoJSON geometry of the location."),
  ft()
], sa.prototype, "geometry", 2);
ml([
  Pe("Array of Thing IDs associated with this location."),
  ft()
], sa.prototype, "thingIds", 2);
sa = ml([
  Pe("Payload emitted when a Location is clicked on the map."),
  ua({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.map#//LocationClickPayload" })
], sa);
const uw = /* @__PURE__ */ $e({
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
    const a = T1.createLogger("daanse:maps:click"), r = o, l = le({}), d = dt(cp.TINY_EMITTER), h = un(() => {
      const W = [], q = [];
      for (const M of r.renderers)
        for (const $ of r.locations) {
          const ue = $.things ?? [];
          for (const fe of ue) {
            if (!r.compareThing(fe, M)) continue;
            const Ee = fe["@iot.id"] || fe.iotId || "", ne = $["@iot.id"] || "", U = r.getPoint($.location), Q = r.isFeatureCollection($.location), G = r.isPoint($.location);
            W.push({
              key: `${M.id}-${ne}-${Ee}`,
              thing: fe,
              location: $,
              renderer: M,
              point: U,
              geoJson: Q && !G ? $.location : null,
              isArea: Q && !G
            });
            const ae = fe.datastreams ?? [];
            for (const ge of ae) {
              const Qe = ge.iotId || "";
              for (const Ae of M.ds_renderer) {
                if (!r.compareDatastream(ge, Ae)) continue;
                const ke = ge.observedArea ? r.transformToGeoJson(ge.observedArea) : null, ye = Ae.placement === ra.Thing ? U : ke ? r.getPointformArea(ke) : null, Kt = Ae.observations?.some(
                  (he) => !r.getById(he.component)?.isLayerRenderer
                ), j = (Ae.renderer.point_render_as !== "none" || Kt) && !!ye;
                q.push({
                  key: `${M.id}-${Ae.id}-${Qe}`,
                  datastream: ge,
                  thing: fe,
                  location: $,
                  renderer: M,
                  subrenderer: Ae,
                  point: ye,
                  observedAreaGeoJson: ke,
                  showMarker: j
                });
              }
            }
          }
        }
      return { things: W, datastreams: q };
    }), m = (W, q, M) => {
      if (!r.widgetId) return;
      const $ = new mi();
      $.id = W["@iot.id"] || W.iotId, $.name = W.name, $.description = W.description, $.properties = W.properties, $.location = q.location, $.rendererId = M.id;
      const ue = W.datastreams || W.Datastreams || [];
      $.datastreams = ue.map((Ee) => ({
        id: Ee["@iot.id"] || Ee.iotId,
        name: Ee.name,
        observedProperty: Ee.ObservedProperty?.name || Ee.observedProperty?.name
      }));
      const fe = {
        type: "widget:MapWidget:click_on_thing",
        widgetId: r.widgetId,
        payload: $,
        timestamp: Date.now()
      };
      console.log("🗺️ Map Widget: Emitting thing click event", fe), d.emit("widget:MapWidget:click_on_thing", fe);
    }, g = (W, q, M) => {
      if (a("Emitting datastream click, widgetId: %s", r.widgetId), !r.widgetId) {
        a("⚠️ widgetId is undefined, not emitting event");
        return;
      }
      const $ = new gi();
      $.id = W.iotId || W["@iot.id"], $.name = W.name, $.thingId = q["@iot.id"] || q.iotId, $.unitOfMeasurement = W.unitOfMeasurement, $.observedProperty = W.observedProperty?.name;
      const ue = W.observations || [];
      if (ue.length > 0) {
        const fe = ue[ue.length - 1];
        $.latestObservationResult = fe.result, $.latestObservationTime = fe.phenomenonTime;
      }
      d.emit("widget:MapWidget:click_on_datastream", {
        type: "widget:MapWidget:click_on_datastream",
        widgetId: r.widgetId,
        payload: $,
        timestamp: Date.now()
      });
    }, v = (W, q, M) => {
      a("🖱️ Thing clicked: %o", W), l.value[W.iotId ?? "null"] = !l.value[W.iotId ?? "null"], m(W, q, M);
    }, T = (W, q, M) => {
      a("🖱️ Datastream marker clicked: %o", W), g(W, q);
    }, x = (W, q, M) => {
      if (!r.widgetId) return;
      const $ = new mi();
      $.id = W["@iot.id"] || W.iotId, $.name = W.name, $.description = W.description, $.properties = W.properties, $.location = q.location, $.rendererId = M.id, d.emit("widget:MapWidget:hover_on_thing", {
        type: "widget:MapWidget:hover_on_thing",
        widgetId: r.widgetId,
        payload: $,
        timestamp: Date.now()
      });
    }, b = (W, q) => {
      if (!r.widgetId) return;
      const M = new gi();
      M.id = W.iotId || W["@iot.id"], M.name = W.name, M.thingId = q["@iot.id"] || q.iotId, M.unitOfMeasurement = W.unitOfMeasurement, M.observedProperty = W.observedProperty?.name;
      const $ = W.observations || [];
      if ($.length > 0) {
        const ue = $[$.length - 1];
        M.latestObservationResult = ue.result, M.latestObservationTime = ue.phenomenonTime;
      }
      d.emit("widget:MapWidget:hover_on_datastream", {
        type: "widget:MapWidget:hover_on_datastream",
        widgetId: r.widgetId,
        payload: M,
        timestamp: Date.now()
      });
    }, E = (W) => r.tooltipThingId ? (W["@iot.id"] || W.iotId) === r.tooltipThingId : !1, P = (W) => E(W) && r.tooltipContent || null, z = (W) => W.name || W.description || W.iotId || "", R = (W, q) => {
      const M = [];
      q.name && M.push(q.name), W.name && M.push(W.name);
      const $ = W.observations || [];
      if ($.length > 0) {
        const ue = $[$.length - 1], fe = W.unitOfMeasurement?.symbol || "";
        M.push(`${ue.result} ${fe}`);
      }
      return M.join(" - ");
    }, Y = (W) => r.selectedThingId ? (W["@iot.id"] || W.iotId) === r.selectedThingId : !1, B = un(() => r.selectionHighlightColor || "#ff0000");
    return (W, q) => (N(), te(xe, null, [
      (N(!0), te(xe, null, At(h.value.things, (M) => (N(), te(xe, {
        key: M.key + "area"
      }, [
        M.isArea ? (N(), Be(be(aa), {
          key: 0,
          ref_for: !0,
          ref: "thingsLayer",
          geojson: M.location.location,
          options: o.layerOptions,
          "options-style": () => Y(M.thing) ? { ...M.renderer.renderer.area, fillColor: B.value, color: B.value, fillOpacity: 0.5, weight: 3 } : M.renderer.renderer.area
        }, null, 8, ["geojson", "options", "options-style"])) : Le("", !0)
      ], 64))), 128)),
      (N(!0), te(xe, null, At(h.value.things, (M) => (N(), te(xe, {
        key: M.key + "marker"
      }, [
        M.point ? (N(), Be(be(Qs), {
          key: 0,
          "lat-lng": M.point,
          options: { pane: o.markerPane },
          onClick: ($) => v(M.thing, M.location, M.renderer),
          onMouseenter: ($) => x(M.thing, M.location, M.renderer)
        }, {
          default: _e(() => [
            re(be(Ks), { "class-name": "someExtraClass" }, {
              default: _e(() => [
                re(nl, {
                  "render-as": M.renderer.renderer.point_render_as,
                  "background-color": M.renderer.renderer.pointPin?.color,
                  "icon-config": M.renderer.renderer.point,
                  "property-value": M.thing[M.renderer.renderer.point_prop ?? ""],
                  "image-url": M.renderer.renderer.point_image_url,
                  "image-size": M.renderer.renderer.point_image_size || 32,
                  "is-solid": M.renderer.renderer.pointPin?.solid,
                  "is-selected": Y(M.thing),
                  "selection-color": B.value
                }, null, 8, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size", "is-solid", "is-selected", "selection-color"])
              ]),
              _: 2
            }, 1024),
            re(be(Oh), {
              options: {
                permanent: E(M.thing),
                direction: "top",
                offset: [0, -20]
              }
            }, {
              default: _e(() => [
                pt(rt(P(M.thing) || z(M.thing)), 1)
              ]),
              _: 2
            }, 1032, ["options"])
          ]),
          _: 2
        }, 1032, ["lat-lng", "options", "onClick", "onMouseenter"])) : Le("", !0)
      ], 64))), 128)),
      (N(!0), te(xe, null, At(h.value.datastreams, (M) => (N(), te(xe, {
        key: M.key + "dsarea"
      }, [
        M.observedAreaGeoJson ? (N(), Be(be(aa), {
          key: 0,
          ref_for: !0,
          ref: "thingsLayer",
          geojson: M.observedAreaGeoJson,
          options: { ...o.layerOptions, pane: o.areaPane || "overlayPane" },
          "options-style": () => M.subrenderer.renderer.area
        }, null, 8, ["geojson", "options", "options-style"])) : Le("", !0)
      ], 64))), 128)),
      (N(!0), te(xe, null, At(h.value.datastreams, (M) => (N(), te(xe, {
        key: M.key + "dslayer"
      }, [
        M.subrenderer.observations && M.datastream.observations ? (N(!0), te(xe, { key: 0 }, At(M.subrenderer.observations, ($) => (N(), te(xe, {
          key: $.component
        }, [
          o.getById($.component)?.isLayerRenderer ? (N(!0), te(xe, { key: 0 }, At(M.datastream.observations, (ue) => (N(), te(xe, {
            key: ue.iotId
          }, [
            o.getById($.component) && ue.result ? (N(), Be(fd(o.getById($.component)?.component), {
              key: 0,
              config: $.setting,
              data: ue.result,
              "marker-size": 0
            }, null, 8, ["config", "data"])) : Le("", !0)
          ], 64))), 128)) : Le("", !0)
        ], 64))), 128)) : Le("", !0)
      ], 64))), 128)),
      (N(!0), te(xe, null, At(h.value.datastreams, (M) => (N(), te(xe, {
        key: M.key + "dsmarker"
      }, [
        M.showMarker ? (N(), Be(be(Qs), {
          key: 0,
          "lat-lng": M.point,
          options: { pane: o.markerPane },
          onClick: ($) => T(M.datastream, M.thing, M.subrenderer),
          onMouseenter: ($) => b(M.datastream, M.thing)
        }, {
          default: _e(() => [
            re(be(Oh), null, {
              default: _e(() => [
                pt(rt(R(M.datastream, M.thing)), 1)
              ]),
              _: 2
            }, 1024),
            re(be(Ks), { "class-name": "someExtraClass" }, {
              default: _e(() => [
                re(nl, {
                  "render-as": M.subrenderer.renderer.point_render_as,
                  "background-color": M.subrenderer.renderer.pointPin?.color,
                  "icon-config": M.subrenderer.renderer.point,
                  "property-value": M.datastream[M.subrenderer.renderer.point_prop ?? ""],
                  "image-url": M.subrenderer.renderer.point_image_url,
                  "image-size": M.subrenderer.renderer.point_image_size || 32,
                  "is-solid": M.subrenderer.renderer.pointPin?.solid,
                  "is-round": !0,
                  "is-selected": Y(M.thing),
                  "selection-color": B.value
                }, {
                  observation: _e(() => [
                    M.datastream.observations ? (N(!0), te(xe, { key: 0 }, At(M.subrenderer.observations, ($) => (N(), te(xe, {
                      key: $.component
                    }, [
                      o.getById($.component) && !o.getById($.component)?.isLayerRenderer ? (N(), Be(fd(o.getById($.component)?.component), {
                        config: $.setting,
                        data: M.datastream.observations[M.subrenderer.renderer.point_render_as === "none" ? 0 : M.datastream.observations.length - 1]?.result,
                        key: M.datastream.observations[M.subrenderer.renderer.point_render_as === "none" ? 0 : M.datastream.observations.length - 1]?.phenomenonTime,
                        "marker-size": M.subrenderer.renderer.point_render_as === "image" ? 0 : M.subrenderer.renderer.point_render_as === "none" ? M.renderer.renderer.point_image_size || 32 : 45
                      }, null, 8, ["config", "data", "marker-size"])) : Le("", !0)
                    ], 64))), 128)) : Le("", !0)
                  ]),
                  _: 2
                }, 1032, ["render-as", "background-color", "icon-config", "property-value", "image-url", "image-size", "is-solid", "is-selected", "selection-color"])
              ]),
              _: 2
            }, 1024)
          ]),
          _: 2
        }, 1032, ["lat-lng", "options", "onClick", "onMouseenter"])) : Le("", !0)
      ], 64))), 128))
    ], 64));
  }
}), cw = /* @__PURE__ */ $e({
  __name: "RouteLayer",
  props: {
    datasourceId: {}
  },
  setup(o) {
    const a = o, r = le(null);
    let l = null;
    const d = un(() => r.value?.geojson?.features ? r.value.geojson.features.filter(
      (b) => b.geometry?.type === "LineString"
    ) : []), h = un(() => r.value?.geojson?.features ? r.value.geojson.features.filter(
      (b) => b.geometry?.type === "Point"
    ) : []), m = un(() => d.value.length === 0 ? null : {
      type: "FeatureCollection",
      features: d.value
    });
    function g(b) {
      const [E, P] = b.geometry.coordinates;
      return [P, E];
    }
    function v(b) {
      const E = b.properties?.role;
      return E === "start" ? "#4caf50" : E === "end" ? "#f44336" : "#2196f3";
    }
    const T = () => ({
      color: "#c45e00",
      weight: 5,
      opacity: 0.8
    });
    async function x() {
      if (a.datasourceId)
        try {
          const E = dt(Nr).getDatasource(
            a.datasourceId
          ), P = await E.getData("object");
          r.value = P, l && l(), l = E.subscribe(async () => {
            const z = await E.getData("object");
            r.value = z;
          });
        } catch (b) {
          console.warn("RouteLayer: Could not load route data:", b);
        }
    }
    return Pt(() => {
      x();
    }), Hn(
      () => a.datasourceId,
      () => x()
    ), rl(() => {
      l && l();
    }), (b, E) => (N(), te(xe, null, [
      m.value ? (N(), Be(be(aa), {
        key: 0,
        geojson: m.value,
        "options-style": T
      }, null, 8, ["geojson"])) : Le("", !0),
      (N(!0), te(xe, null, At(h.value, (P, z) => (N(), Be(be(I1), {
        key: "wp-" + z,
        "lat-lng": g(P),
        radius: 8,
        "fill-color": v(P),
        color: "#fff",
        weight: 2,
        "fill-opacity": 1
      }, null, 8, ["lat-lng", "fill-color"]))), 128))
    ], 64));
  }
}), Xp = () => {
  const o = async (h, m) => {
    const g = new AbortController(), v = setTimeout(() => g.abort(), m);
    try {
      const T = await fetch(h, { signal: g.signal });
      return clearTimeout(v), T;
    } catch (T) {
      throw clearTimeout(v), T.name === "AbortError" ? new Error(`Timeout after ${m}ms`) : T;
    }
  }, a = (h, m) => {
    const g = {
      _capabilitiesUrl: m,
      _info: {},
      _layers: [],
      _operationUrls: {}
    }, v = h.querySelector("Service");
    v && (g._info.title = v.querySelector("Title")?.textContent || "", g._info.name = v.querySelector("Name")?.textContent || "", g._info.abstract = v.querySelector("Abstract")?.textContent || "");
    const T = h.querySelector("Capability > Request");
    T && ["GetMap", "GetCapabilities", "GetFeatureInfo", "GetLegendGraphic"].forEach((P) => {
      const z = T.querySelector(P);
      if (z) {
        const R = z.querySelector("DCPType > HTTP > Get > OnlineResource");
        if (R) {
          const Y = R.getAttribute("xlink:href") || R.getAttribute("href");
          Y && (g._operationUrls[P] = Y);
        }
      }
    }), g._operationUrls.GetMap || (g._operationUrls.GetMap = m.split("?")[0]);
    const x = (E, P = []) => {
      E.querySelectorAll(":scope > Layer").forEach((R) => {
        const Y = {
          name: R.querySelector(":scope > Name")?.textContent || "",
          title: R.querySelector(":scope > Title")?.textContent || "",
          abstract: R.querySelector(":scope > Abstract")?.textContent || "",
          children: []
        }, B = R.querySelector(":scope > BoundingBox, :scope > LatLonBoundingBox, :scope > EX_GeographicBoundingBox");
        B && (Y.boundingBox = {
          minx: parseFloat(B.getAttribute("minx") || B.querySelector("westBoundLongitude")?.textContent || "0"),
          miny: parseFloat(B.getAttribute("miny") || B.querySelector("southBoundLatitude")?.textContent || "0"),
          maxx: parseFloat(B.getAttribute("maxx") || B.querySelector("eastBoundLongitude")?.textContent || "0"),
          maxy: parseFloat(B.getAttribute("maxy") || B.querySelector("northBoundLatitude")?.textContent || "0")
        }), x(R, Y.children), P.push(Y);
      });
    }, b = h.querySelector("Capability");
    return b && x(b, g._layers), g.getLayers = () => {
      const E = (P) => {
        const z = [];
        return P.forEach((R) => {
          z.push(R), R.children && R.children.length > 0 && z.push(...E(R.children));
        }), z;
      };
      return E(g._layers);
    }, g.getOperationUrl = (E) => g._operationUrls[E] || g._operationUrls.GetMap || m.split("?")[0], g;
  }, r = (h, m) => {
    const g = {
      _capabilitiesUrl: m,
      _info: {},
      _featureTypes: []
    }, v = h.querySelector("ServiceIdentification, Service");
    return v && (g._info.title = v.querySelector("Title")?.textContent || "", g._info.name = v.querySelector("Name, ServiceType")?.textContent || "", g._info.abstract = v.querySelector("Abstract")?.textContent || ""), h.querySelectorAll("FeatureType").forEach((x) => {
      g._featureTypes.push({
        name: x.querySelector("Name")?.textContent || "",
        title: x.querySelector("Title")?.textContent || "",
        abstract: x.querySelector("Abstract")?.textContent || ""
      });
    }), g.getFeatureTypes = () => g._featureTypes, g;
  };
  return {
    createServiceWMS: async (h) => {
      try {
        const m = h.includes("?") ? `${h}&SERVICE=WMS&REQUEST=GetCapabilities` : `${h}?SERVICE=WMS&REQUEST=GetCapabilities`;
        console.log("[Service.ts] Fetching WMS capabilities from:", m);
        const g = await o(m, 15e3);
        if (!g.ok)
          throw new Error(`HTTP ${g.status}: ${g.statusText}`);
        const v = await g.text(), x = new DOMParser().parseFromString(v, "text/xml");
        if (x.querySelector("parsererror"))
          throw new Error("Invalid XML response");
        const E = x.documentElement;
        if (!E.tagName.includes("Capabilities") && E.tagName !== "WMT_MS_Capabilities")
          throw new Error("Not a valid WMS GetCapabilities response");
        const P = a(x, h);
        return console.log("[Service.ts] WMS service parsed:", P), console.log("[Service.ts] WMS _info:", P._info), console.log("[Service.ts] WMS _layers:", P._layers), console.log("[Service.ts] WMS getLayers:", typeof P.getLayers), console.log("[Service.ts] WMS getLayers():", P.getLayers()), console.log("[Service.ts] WMS getOperationUrl:", typeof P.getOperationUrl), console.log("[Service.ts] WMS getOperationUrl(GetMap):", P.getOperationUrl("GetMap")), console.log("[Service.ts] WMS _operationUrls:", P._operationUrls), P;
      } catch (m) {
        throw console.log("not a WMS Service:", m), m;
      }
    },
    createServiceWFS: async (h) => {
      try {
        const m = h.includes("?") ? `${h}&SERVICE=WFS&REQUEST=GetCapabilities` : `${h}?SERVICE=WFS&REQUEST=GetCapabilities`;
        console.log("[Service.ts] Fetching WFS capabilities from:", m);
        const g = await o(m, 15e3);
        if (!g.ok)
          throw new Error(`HTTP ${g.status}: ${g.statusText}`);
        const v = await g.text(), x = new DOMParser().parseFromString(v, "text/xml");
        if (x.querySelector("parsererror"))
          throw new Error("Invalid XML response");
        if (!x.documentElement.tagName.includes("Capabilities"))
          throw new Error("Not a valid WFS GetCapabilities response");
        const P = r(x, h);
        return console.log("[Service.ts] WFS service parsed:", P), P;
      } catch (m) {
        throw console.log("not a WFS Service:", m), m;
      }
    }
  };
};
var vu = { exports: {} }, Kc, Zh;
function dw() {
  if (Zh) return Kc;
  Zh = 1;
  var o = 1e3, a = o * 60, r = a * 60, l = r * 24, d = l * 7, h = l * 365.25;
  Kc = function(x, b) {
    b = b || {};
    var E = typeof x;
    if (E === "string" && x.length > 0)
      return m(x);
    if (E === "number" && isFinite(x))
      return b.long ? v(x) : g(x);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(x)
    );
  };
  function m(x) {
    if (x = String(x), !(x.length > 100)) {
      var b = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        x
      );
      if (b) {
        var E = parseFloat(b[1]), P = (b[2] || "ms").toLowerCase();
        switch (P) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return E * h;
          case "weeks":
          case "week":
          case "w":
            return E * d;
          case "days":
          case "day":
          case "d":
            return E * l;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return E * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return E * a;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return E * o;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return E;
          default:
            return;
        }
      }
    }
  }
  function g(x) {
    var b = Math.abs(x);
    return b >= l ? Math.round(x / l) + "d" : b >= r ? Math.round(x / r) + "h" : b >= a ? Math.round(x / a) + "m" : b >= o ? Math.round(x / o) + "s" : x + "ms";
  }
  function v(x) {
    var b = Math.abs(x);
    return b >= l ? T(x, b, l, "day") : b >= r ? T(x, b, r, "hour") : b >= a ? T(x, b, a, "minute") : b >= o ? T(x, b, o, "second") : x + " ms";
  }
  function T(x, b, E, P) {
    var z = b >= E * 1.5;
    return Math.round(x / E) + " " + P + (z ? "s" : "");
  }
  return Kc;
}
var Qc, Uh;
function fw() {
  if (Uh) return Qc;
  Uh = 1;
  function o(a) {
    l.debug = l, l.default = l, l.coerce = T, l.disable = g, l.enable = h, l.enabled = v, l.humanize = dw(), l.destroy = x, Object.keys(a).forEach((b) => {
      l[b] = a[b];
    }), l.names = [], l.skips = [], l.formatters = {};
    function r(b) {
      let E = 0;
      for (let P = 0; P < b.length; P++)
        E = (E << 5) - E + b.charCodeAt(P), E |= 0;
      return l.colors[Math.abs(E) % l.colors.length];
    }
    l.selectColor = r;
    function l(b) {
      let E, P = null, z, R;
      function Y(...B) {
        if (!Y.enabled)
          return;
        const W = Y, q = Number(/* @__PURE__ */ new Date()), M = q - (E || q);
        W.diff = M, W.prev = E, W.curr = q, E = q, B[0] = l.coerce(B[0]), typeof B[0] != "string" && B.unshift("%O");
        let $ = 0;
        B[0] = B[0].replace(/%([a-zA-Z%])/g, (fe, Ee) => {
          if (fe === "%%")
            return "%";
          $++;
          const ne = l.formatters[Ee];
          if (typeof ne == "function") {
            const U = B[$];
            fe = ne.call(W, U), B.splice($, 1), $--;
          }
          return fe;
        }), l.formatArgs.call(W, B), (W.log || l.log).apply(W, B);
      }
      return Y.namespace = b, Y.useColors = l.useColors(), Y.color = l.selectColor(b), Y.extend = d, Y.destroy = l.destroy, Object.defineProperty(Y, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => P !== null ? P : (z !== l.namespaces && (z = l.namespaces, R = l.enabled(b)), R),
        set: (B) => {
          P = B;
        }
      }), typeof l.init == "function" && l.init(Y), Y;
    }
    function d(b, E) {
      const P = l(this.namespace + (typeof E > "u" ? ":" : E) + b);
      return P.log = this.log, P;
    }
    function h(b) {
      l.save(b), l.namespaces = b, l.names = [], l.skips = [];
      const E = (typeof b == "string" ? b : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const P of E)
        P[0] === "-" ? l.skips.push(P.slice(1)) : l.names.push(P);
    }
    function m(b, E) {
      let P = 0, z = 0, R = -1, Y = 0;
      for (; P < b.length; )
        if (z < E.length && (E[z] === b[P] || E[z] === "*"))
          E[z] === "*" ? (R = z, Y = P, z++) : (P++, z++);
        else if (R !== -1)
          z = R + 1, Y++, P = Y;
        else
          return !1;
      for (; z < E.length && E[z] === "*"; )
        z++;
      return z === E.length;
    }
    function g() {
      const b = [
        ...l.names,
        ...l.skips.map((E) => "-" + E)
      ].join(",");
      return l.enable(""), b;
    }
    function v(b) {
      for (const E of l.skips)
        if (m(b, E))
          return !1;
      for (const E of l.names)
        if (m(b, E))
          return !0;
      return !1;
    }
    function T(b) {
      return b instanceof Error ? b.stack || b.message : b;
    }
    function x() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return l.enable(l.load()), l;
  }
  return Qc = o, Qc;
}
var Hh;
function hw() {
  return Hh || (Hh = 1, (function(o, a) {
    var r = {};
    a.formatArgs = d, a.save = h, a.load = m, a.useColors = l, a.storage = g(), a.destroy = /* @__PURE__ */ (() => {
      let T = !1;
      return () => {
        T || (T = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), a.colors = [
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
      let T;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (T = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(T[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function d(T) {
      if (T[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + T[0] + (this.useColors ? "%c " : " ") + "+" + o.exports.humanize(this.diff), !this.useColors)
        return;
      const x = "color: " + this.color;
      T.splice(1, 0, x, "color: inherit");
      let b = 0, E = 0;
      T[0].replace(/%[a-zA-Z%]/g, (P) => {
        P !== "%%" && (b++, P === "%c" && (E = b));
      }), T.splice(E, 0, x);
    }
    a.log = console.debug || console.log || (() => {
    });
    function h(T) {
      try {
        T ? a.storage.setItem("debug", T) : a.storage.removeItem("debug");
      } catch {
      }
    }
    function m() {
      let T;
      try {
        T = a.storage.getItem("debug") || a.storage.getItem("DEBUG");
      } catch {
      }
      return !T && typeof process < "u" && "env" in process && (T = r.DEBUG), T;
    }
    function g() {
      try {
        return localStorage;
      } catch {
      }
    }
    o.exports = fw()(a);
    const { formatters: v } = o.exports;
    v.j = function(T) {
      try {
        return JSON.stringify(T);
      } catch (x) {
        return "[UnexpectedJSONParseError]: " + x.message;
      }
    };
  })(vu, vu.exports)), vu.exports;
}
var pw = hw();
const bo = /* @__PURE__ */ Zp(pw);
bo.log = console.log.bind(console);
const Tu = localStorage.getItem("debug");
console.log("[Maps Widget] Logger module loaded. localStorage.debug =", Tu);
console.log("[Maps Widget] debug.enable exists:", typeof bo.enable);
Tu && (bo.enable(Tu), console.log("[Maps Widget] Called debug.enable with:", Tu));
const ci = bo("daanse:maps:map"), Li = bo("daanse:maps:datasource"), ed = bo("daanse:maps:observations"), tn = bo("daanse:maps:services"), mw = bo("daanse:maps:tasks");
var gw = Object.defineProperty, vw = Object.getOwnPropertyDescriptor, qn = (o, a, r, l) => {
  for (var d = l > 1 ? void 0 : l ? vw(a, r) : a, h = o.length - 1, m; h >= 0; h--)
    (m = o[h]) && (d = (l ? m(a, r, d) : m(d)) || d);
  return l && d && gw(a, r, d), d;
};
let wn = class {
  constructor() {
    this.datasourceIds = "[]", this.baseMapUrl = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", this.zoom = 14, this.center = [50.93115286, 11.60392726], this.layers = [], this.styles = [], this.OGCSstyles = [], this.services = [], this.selectionHighlightColor = "#ff0000";
  }
};
qn([
  Pe("Optional identifier for the data source."),
  ft()
], wn.prototype, "datasourceId", 2);
qn([
  Pe("Optional array of additional datasource identifiers for multi-datasource support."),
  ft()
], wn.prototype, "datasourceIds", 2);
qn([
  Pe("The URL of the base map service."),
  ft()
], wn.prototype, "baseMapUrl", 2);
qn([
  Pe("The initial zoom level of the map."),
  ft()
], wn.prototype, "zoom", 2);
qn([
  Pe("The geographical coordinates for the center of the map (e.g., [longitude, latitude])."),
  ft()
], wn.prototype, "center", 2);
qn([
  Pe("Attribution text for the map data."),
  ft()
], wn.prototype, "attribution", 2);
qn([
  Pe("A list of layers to be displayed on the map."),
  sl("Layer")
], wn.prototype, "layers", 2);
qn([
  Pe("A list of data stream renderers for styling map elements."),
  sl("DSRenderer")
], wn.prototype, "styles", 2);
qn([
  Pe("A list of OGC-compliant renderers for styling map elements."),
  sl("Renderer")
], wn.prototype, "OGCSstyles", 2);
qn([
  Pe("A list of services available for the map."),
  sl("Service")
], wn.prototype, "services", 2);
qn([
  Pe("if true maps can not be moved in viewmode"),
  ft()
], wn.prototype, "fixed", 2);
qn([
  Pe("Enable marker clustering for OGC STA Things and Datastreams"),
  ft()
], wn.prototype, "enableClustering", 2);
qn([
  Pe("Color used to highlight selected Things on the map (default: #ff0000)"),
  ft()
], wn.prototype, "selectionHighlightColor", 2);
qn([
  Pe("ID of the currently selected Thing (persisted across mode switches)."),
  ft()
], wn.prototype, "selectedThingId", 2);
wn = qn([
  Pe("Represents the overall settings for a map display."),
  ua({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.map#//MapSettings" })
], wn);
var _w = Object.defineProperty, yw = Object.getOwnPropertyDescriptor, kd = (o, a, r, l) => {
  for (var d = l > 1 ? void 0 : l ? yw(a, r) : a, h = o.length - 1, m; h >= 0; h--)
    (m = o[h]) && (d = (l ? m(a, r, d) : m(d)) || d);
  return l && d && _w(a, r, d), d;
};
let ja = class extends al {
};
kd([
  Pe("Latitude of the clicked position."),
  ft()
], ja.prototype, "lat", 2);
kd([
  Pe("Longitude of the clicked position."),
  ft()
], ja.prototype, "lon", 2);
ja = kd([
  Pe("Payload emitted when the map background is clicked."),
  ua({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.map#//MapClickPayload" })
], ja);
const ww = {
  id: "mapholder",
  class: "holder",
  style: { height: "100%" }
}, bw = /* @__PURE__ */ $e({
  __name: "MapsWidget",
  props: /* @__PURE__ */ bd({
    datasourceId: {},
    id: {}
  }, {
    configv: { required: !0 },
    configvModifiers: {}
  }),
  emits: ["update:configv"],
  setup(o, { expose: a }) {
    const r = o, { datasourceId: l, id: d } = ol(r), m = x1().params.pageid || "", g = pi(o, "configv"), v = le(null), T = new wn(), x = dt(l1), b = dt(cp.TINY_EMITTER);
    function E(D) {
      if (!d?.value) return;
      const { lat: de, lng: J } = D.latlng, pe = new ja();
      pe.lat = de, pe.lon = J, b.emit("widget:MapWidget:click_on_map", {
        type: "widget:MapWidget:click_on_map",
        widgetId: d.value,
        payload: pe,
        timestamp: Date.now()
      });
    }
    const { filterFeatureCollection: P, compareDatastream: z, compareThing: R } = i2(), { isPoint: Y, isFeatureCollection: B, transformToGeoJson: W, isFeature: q } = r2(), { createServiceWMS: M, createServiceWFS: $ } = Xp(), ue = le({}), fe = le(/* @__PURE__ */ new Map()), Ee = le(!1), ne = /* @__PURE__ */ new Set(), U = /* @__PURE__ */ new Map(), Q = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Map(), ae = u2(), ge = /* @__PURE__ */ new WeakMap();
    let Qe = [], Ae = 0;
    const ke = async () => {
      const D = ++Ae, de = [], J = Bs(ue.value), pe = Bs(fe.value), Ve = [];
      J?.datastreams && Ve.push([l.value, J.datastreams]);
      for (const [vt, Ft] of pe.entries()) {
        const $t = Bs(Ft);
        $t?.datastreams && Ve.push([vt, $t.datastreams]);
      }
      const Fe = 4;
      let ot = performance.now();
      for (const [vt, Ft] of Ve)
        for (let $t = 0; $t < Ft.length; $t++) {
          if (performance.now() - ot > Fe) {
            if (D !== Ae) return;
            await new Promise((Dn) => setTimeout(Dn, 0)), ot = performance.now();
          }
          const Qt = Ft[$t];
          if (Qt.observedArea)
            ge.has(Qt.observedArea) || ge.set(Qt.observedArea, W(Bs(Qt.observedArea))), de.push({ lng: 0, lat: 0, dsId: vt, dataStream: Qt, geoJsonFeature: ge.get(Qt.observedArea) });
          else if (Qt.thing?.locations?.[0]) {
            const Dn = Qt.thing.locations[0].location, nr = Ao(Dn);
            nr ? de.push({ lng: nr[0], lat: nr[1], dsId: vt, dataStream: Qt, geoJsonFeature: null }) : (ge.has(Dn) || ge.set(Dn, W(Dn)), de.push({ lng: 0, lat: 0, dsId: vt, dataStream: Qt, geoJsonFeature: ge.get(Dn) }));
          }
        }
      D === Ae && (Qe = de, ci("Spatial index built:", de.length, "entries"));
    }, ye = un(() => {
      try {
        return l.value && dt(Nr).getDatasource(l.value).type || "ogcsta";
      } catch (D) {
        return Li("Could not detect datasource type:", D), "ogcsta";
      }
    }), Kt = {
      rest: "object",
      ogcsta: "OGCSTAData",
      "OGC Composer": "OGCSTAData"
    }, j = un(() => Kt[ye.value] || "OGCSTAData"), { update: he, callEvent: Ge } = w1(l, j.value, ue), gt = async (D) => {
      if (D) {
        if (Q.has(D)) {
          Li("Datasource", D, "is already loading, skipping");
          return;
        }
        Q.add(D);
        try {
          const de = dt(Nr), J = de.getDatasource(D), pe = de.getDatasourceType(D), Ve = Kt[pe] || "OGCSTAData";
          if (J && typeof J.getData == "function") {
            const Fe = await J.getData(Ve);
            if (fe.value.set(D, Fe), !ne.has(D) && typeof J.subscribe == "function") {
              ne.add(D);
              const ot = async () => {
                const Ft = await J.getData(Ve);
                fe.value.set(D, Ft);
              }, vt = J.subscribe(ot);
              typeof vt == "function" && U.set(D, vt);
            }
          }
        } catch (de) {
          Li("Could not get datasource data for", D, de);
        } finally {
          Q.delete(D);
        }
      }
    };
    Hn(() => [g.value?.datasourceIds, g.value?.layers], async () => {
      const D = /* @__PURE__ */ new Set();
      g.value?.datasourceIds && g.value.datasourceIds.forEach((J) => D.add(J)), g.value?.layers && g.value.layers.forEach((J) => {
        J.datasourceId && J.datasourceId !== l.value && D.add(J.datasourceId);
      });
      let de = !1;
      for (const J of D)
        fe.value.has(J) || (await gt(J), de = !0);
      de && v.value && (await ke(), Bi());
    }, { deep: !0, immediate: !0 }), Hn(l, (D, de, J) => {
      he(D, de);
    }), Hn(() => g.value?.OGCSstyles, (D, de, J) => {
      Bi(), Ii();
    }, { deep: !0 });
    const { getById: oe } = qs();
    le({});
    const De = le(g.value?.selectedThingId ?? null), Ne = le(null), pn = le(null), nn = le(null), Xi = le("#c45e00"), To = le(5);
    let rn = null;
    Hn(De, (D) => {
      g.value && (g.value.selectedThingId = D ?? void 0);
    }), le(!1);
    let ti = !1;
    const Ki = (D) => {
      if (D.datasourceId) {
        const de = fe.value.get(D.datasourceId);
        return de || (gt(D.datasourceId), {});
      }
      return ue.value;
    };
    Pt(async () => {
      if (g.value) {
        if (Object.assign(g.value, { ...T, ...g.value }), g.value.services) {
          for (const J of g.value.services)
            if (J.type === "WMS") {
              if (!(typeof J.service?.getLayers == "function") && J.url) {
                tn("Reconstructing WMS service from URL: %s", J.url);
                try {
                  J.service = await M(J.url), tn("WMS service reconstructed successfully"), J.reconstructionFailed = !1;
                } catch (Ve) {
                  tn("Could not reconstruct WMS service: %o", Ve), J.reconstructionFailed = !0;
                }
              }
            } else if (J.type === "WFS" && !(typeof J.service?.getFeatureTypes == "function") && J.url) {
              tn("Reconstructing WFS service from URL: %s", J.url);
              try {
                J.service = await $(J.url), tn("WFS service reconstructed successfully"), J.reconstructionFailed = !1;
              } catch (Ve) {
                tn("Could not reconstruct WFS service: %o", Ve), J.reconstructionFailed = !0;
              }
            }
          g.value.services = [...g.value.services];
        }
        if (g.value.layers) {
          const J = [];
          for (const pe of g.value.layers)
            if (pe.type === "WMSLayer" && pe.service && !pe.service.getOperationUrl) {
              const Ve = pe.service._capabilitiesUrl || pe.service.url || pe.service.serviceUrl;
              if (Ve)
                try {
                  const Fe = await M(Ve);
                  J.push({ ...pe, service: Fe, reconstructionFailed: !1 });
                } catch (Fe) {
                  tn("Could not reconstruct WMS service for layer %s: %o", pe.name, Fe), J.push({ ...pe, reconstructionFailed: !0 });
                }
              else
                tn("WMS layer missing service URL: %s", pe.name), J.push({ ...pe, reconstructionFailed: !0 });
            } else if (pe.type === "WFSLayer" && pe.wfs_service)
              if (typeof pe.wfs_service.fetch != "function") {
                const Ve = pe.wfs_service.url;
                if (Ve)
                  try {
                    const Fe = (await Promise.resolve().then(() => C5)).default, ot = new Fe(Ve);
                    await ot.fetch(), J.push({ ...pe, wfs_service: ot, reconstructionFailed: !1 });
                  } catch (Fe) {
                    tn("Could not reconstruct WFS service for layer %s: %o", pe.name, Fe), J.push({ ...pe, reconstructionFailed: !0 });
                  }
                else
                  tn("WFS layer missing service URL: %s", pe.name), J.push({ ...pe, reconstructionFailed: !0 });
              } else
                J.push(pe);
            else
              J.push(pe);
          g.value.layers = J;
        }
        Ee.value = !0;
      }
      const D = document.getElementById("mapholder"), de = new ResizeObserver(() => {
        v.value && v.value.leafletObject && v.value.leafletObject.invalidateSize();
      });
      D && de.observe(D);
    });
    let Sn = 0;
    Hn(() => ue.value?.locations?.length || 0, async (D) => {
      Sn === 0 && D > 0 && (await ke(), Bi(), Ii()), Sn = D;
    });
    const Ii = () => {
      if (!g.value?.OGCSstyles || g.value.OGCSstyles.length === 0) {
        ed("No OGCSTA styles configured, skipping historical locations load");
        return;
      }
      const D = /* @__PURE__ */ new Map(), de = ue.value?.things || [];
      for (const pe of de)
        if (!(!pe || !pe.iotId)) {
          for (const Ve of g.value.OGCSstyles)
            if (R(pe, Ve)) {
              D.set(pe.iotId, pe);
              break;
            }
        }
      for (const [pe, Ve] of fe.value.entries()) {
        const Fe = Ve?.things || [];
        for (const ot of Fe)
          if (!(!ot || !ot.iotId)) {
            for (const vt of g.value.OGCSstyles)
              if (R(ot, vt)) {
                D.set(ot.iotId, ot);
                break;
              }
          }
      }
      const J = Array.from(D.values());
      if (J.length > 0) {
        ed(`Setting historical locations filter for ${J.length} matching things`), Ge(Ga, { historicalLocations: J }, !1);
        for (const pe of fe.value.keys())
          try {
            const Fe = dt(Nr).getDatasource(pe);
            Fe && typeof Fe.callEvent == "function" && Fe.callEvent(Ga, { historicalLocations: J }, !1);
          } catch (Ve) {
            Li("Could not call event on datasource", pe, Ve);
          }
      } else
        ed("No things match the configured style filters");
    }, xo = () => {
      try {
        const D = v.value.leafletObject;
        g.value.fixed ? (D.dragging.disable(), D.scrollWheelZoom.disable(), D.doubleClickZoom.disable(), D.touchZoom.disable(), D.keyboard.disable(), D.zoomControl.remove()) : (D.dragging.enable(), D.scrollWheelZoom.enable(), D.doubleClickZoom.disable(), D.touchZoom.enable(), D.keyboard.enable(), D.zoomControl.addTo(D));
      } catch (D) {
        ci("Error in setFixed:", D);
      }
    };
    Hn(() => g.value.fixed, (D, de, J) => {
      xo();
    }), un(() => ue.value?.locations ?? []);
    const kn = (D) => (Ki(D)?.locations ?? []).filter((pe) => pe && (pe["@iot.id"] || pe.iotId));
    un(() => (D) => n2(g, "value", "renderer", 0, "renderer", "point") ? g.value?.renderer?.[0]?.renderer?.area ?? {} : {});
    const wr = un(() => ({
      pointToLayer: (D, de) => Ua.circleMarker(de, {
        radius: 0,
        fillColor: "#ff7800",
        color: "#000",
        weight: 1,
        opacity: 0,
        fillOpacity: 0
      })
    })), Qi = (D) => g.value.layers.findIndex((de) => de === D), ni = (D) => {
      const de = Qi(D);
      return {
        ...wr.value,
        pane: `layer-pane-${de}`
      };
    }, on = (D) => `layer-pane-${Qi(D)}`, er = (D) => D ? `layer-area-pane-${Qi(D)}` : "overlayPane", tr = le(0), es = un(() => {
      tr.value;
      const D = /* @__PURE__ */ new Map();
      if (g.value?.styles)
        for (const de of g.value.styles)
          de.id && D.set(de.id, de);
      return D;
    }), ki = (D) => es.value.get(D), Eo = () => {
      tr.value++;
    };
    let Di = "";
    Hn(() => g.value?.styles, (D) => {
      if (!D) return;
      const de = JSON.stringify(D);
      de !== Di && (Di = de, Eo());
    }, { deep: !0 });
    let $n = !1;
    const Co = () => {
      ti = !0, ci("map ready"), xo(), br();
      const D = v.value?.leafletObject;
      D && (D.on("movestart", () => {
        $n = !0, _i++;
      }), D.on("moveend", () => {
        $n = !1;
      }));
    }, br = () => {
      const D = v.value?.leafletObject;
      !D || !g.value.layers || g.value.layers.forEach((de, J) => {
        const pe = `layer-pane-${J}`;
        let Ve = D.getPane(pe);
        Ve || (Ve = D.createPane(pe));
        const Fe = 400 + (g.value.layers.length - J) * 2;
        Ve.style.zIndex = String(Fe);
        const ot = `layer-area-pane-${J}`;
        let vt = D.getPane(ot);
        vt || (vt = D.createPane(ot)), vt.style.zIndex = String(Fe - 1);
      });
    };
    Hn(() => g.value.layers, () => {
      ti && br();
    }, { deep: !0 });
    const Fi = (D) => [D[1], D[0]], Ao = (D) => D ? D.type === "Point" && Array.isArray(D.coordinates) ? D.coordinates : D.type === "Feature" && D.geometry?.type === "Point" && Array.isArray(D.geometry.coordinates) ? D.geometry.coordinates : null : null, Hr = Ns.debounce(() => {
      if ($n) return;
      const D = v.value?.leafletObject;
      if (D) {
        const de = D.getCenter();
        g.value.center = [de.lat, de.lng], g.value.zoom = D.getZoom();
      }
      Bi();
    }, 500, { leading: !1, trailing: !0 });
    let _i = 0;
    const Bi = async () => {
      if (ci("loadObservationsInView called"), !v.value || !v.value?.leafletObject) {
        ci("Map not ready");
        return;
      }
      let D = v.value?.leafletObject.getBounds();
      if (!D) {
        ci("No map bounds available yet");
        return;
      }
      const de = ++_i, J = D._southWest.lng, pe = D._southWest.lat, Ve = D._northEast.lng, Fe = D._northEast.lat;
      let ot = null;
      const vt = () => (ot || (ot = Od({
        type: "Polygon",
        coordinates: [[[Ve, Fe], [Ve, pe], [J, pe], [J, Fe], [Ve, Fe]]]
      })), ot), Ft = Bs(g.value.OGCSstyles), $t = /* @__PURE__ */ new Map();
      for (const Bt of Ft) {
        const Fn = Bt.ObservationrefreshTime !== void 0 && Bt.ObservationrefreshTime !== null ? Bt.ObservationrefreshTime : 0;
        $t.has(Fn) || $t.set(Fn, []);
        for (const wt of Bt.ds_renderer)
          $t.get(Fn).push({ renderer: Bt, subrender: wt });
      }
      const cn = {}, Qt = Qe, Dn = 4;
      let nr = performance.now();
      for (let Bt = 0; Bt < Qt.length; Bt++) {
        if (performance.now() - nr > Dn) {
          if (de !== _i || $n)
            return;
          await new Promise((Gt) => setTimeout(Gt, 0)), nr = performance.now();
        }
        const wt = Qt[Bt];
        let Tn;
        if (wt.geoJsonFeature ? Tn = D2(vt(), wt.geoJsonFeature) : Tn = wt.lng >= J && wt.lng <= Ve && wt.lat >= pe && wt.lat <= Fe, !Tn) continue;
        const { dsId: mn, dataStream: yi } = wt;
        for (const [Gt, qr] of $t.entries()) {
          let ir = !1;
          for (const { renderer: Jn, subrender: xn } of qr) {
            const Tr = z(yi, xn), da = yi.thing ? R(yi.thing, Jn) : !0;
            if (Tr && da) {
              ir = !0;
              break;
            }
          }
          ir && (cn[Gt] || (cn[Gt] = {}), cn[Gt][mn] || (cn[Gt][mn] = []), cn[Gt][mn].push(yi));
        }
      }
      if (de !== _i) {
        ci("Session invalidated after chunked processing, aborting");
        return;
      }
      const Sr = [];
      for (const [Bt, Fn] of Object.entries(cn))
        for (const [wt, Tn] of Object.entries(Fn)) {
          const mn = Ns.uniqBy(Tn, "iotId");
          if (mn.length > 0) {
            const yi = wt === l.value;
            let Gt = 0;
            for (const Jn of mn) {
              const xn = String(Jn.iotId || Jn["@iot.id"] || "");
              for (let Tr = 0; Tr < xn.length; Tr++)
                Gt = (Gt << 5) - Gt + xn.charCodeAt(Tr) | 0;
            }
            const qr = `obs-${wt}-${Bt}-${mn.length}-${Gt >>> 0}`, ir = new class extends l2 {
              constructor() {
                super(...arguments), this.id = qr;
              }
              invoke() {
                window.clearInterval(this.handle);
              }
              async run() {
                if (yi)
                  Ge(Ga, { observations: mn }, !1);
                else
                  try {
                    const xn = dt(Nr).getDatasource(wt);
                    xn && typeof xn.callEvent == "function" && xn.callEvent(Ga, { observations: mn }, !1);
                  } catch (Jn) {
                    Li("Could not call event on datasource", wt, Jn);
                  }
                parseInt(Bt) !== 0 && (this.handle = window.setInterval(async () => {
                  if (yi)
                    Ge(Ga, { observations: mn }, !1);
                  else
                    try {
                      const xn = dt(Nr).getDatasource(wt);
                      xn && typeof xn.callEvent == "function" && xn.callEvent(Ga, { observations: mn }, !1);
                    } catch (Jn) {
                      Li("Could not call event on datasource", wt, Jn);
                    }
                }, parseInt(Bt) * 1e3));
              }
            }();
            Sr.push(ir), G.set(ir.id, ir);
          }
        }
      ci("Created", Sr.length, "tasks to invoke"), ae.addTasksAndIvnoke(Sr);
      const dn = /* @__PURE__ */ new Map();
      for (const [Bt, Fn] of Object.entries(cn))
        for (const [wt, Tn] of Object.entries(Fn))
          dn.has(wt) || dn.set(wt, []), dn.get(wt).push(...Tn);
      const Se = dn.get(l.value) || [];
      Ge(Eh, { observations: Ns.uniqBy(Se, "iotId") });
      for (const Bt of fe.value.keys()) {
        const Fn = dn.get(Bt) || [];
        try {
          const Tn = dt(Nr).getDatasource(Bt);
          Tn && typeof Tn.callEvent == "function" && Tn.callEvent(Eh, { observations: Ns.uniqBy(Fn, "iotId") });
        } catch (wt) {
          Li("Could not call UPDATE_MQTT_SUBSCRIPTIONS on datasource", Bt, wt);
        }
      }
    }, Ri = (D) => {
      if (Y(D))
        return Fi(D.coordinates);
      if (B(D) || q(D))
        try {
          let de = Vh(D);
          return Fi(de.geometry.coordinates);
        } catch {
          return null;
        }
      return null;
    }, zi = (D) => {
      if (Y(D))
        return Fi(D.coordinates);
      if (B(D) || q(D))
        try {
          let de = Vh(D);
          return Fi(de.geometry.coordinates);
        } catch {
          return null;
        }
    };
    let ca = new class {
      constructor() {
        this.zoomToThing = (D, de = 16, J = 1e3) => {
          if (!v.value || !v.value.leafletObject) {
            console.warn("Map instance not available. Cannot zoom to thing.");
            return;
          }
          let pe = (ue.value?.things || []).find((Ft) => Ft.iotId === D || Ft["@iot.id"] === D);
          if (!pe) {
            for (const [Ft, $t] of fe.value.entries())
              if (pe = ($t?.things || []).find((Qt) => Qt.iotId === D || Qt["@iot.id"] === D), pe) break;
          }
          if (!pe) {
            console.warn(`Thing with ID "${D}" not found.`);
            return;
          }
          if (!pe.locations || !pe.locations[0]) {
            console.warn(`Thing with ID "${D}" has no location.`);
            return;
          }
          const Ve = pe.locations[0].location, Fe = W(Ve), ot = Ri(Fe);
          if (!ot) {
            console.warn("Could not extract coordinates from thing location.");
            return;
          }
          v.value.leafletObject.flyTo(ot, de, {
            duration: J / 1e3,
            // Leaflet expects seconds
            easeLinearity: 0.25
          });
        }, this.selectThingById = (D) => {
          ci("selectThingById called with:", D), De.value === D ? (De.value = null, ci("Thing deselected")) : (De.value = D, ci("Thing selected:", D));
        }, this.zoomToLocation = async (D, de = 16, J = 1e3) => {
          console.log("🎯 zoomToLocation called with:", { location: D, zoom: de, duration: J });
          let pe = 0;
          for (; (!v.value || !v.value.leafletObject) && pe < 3e3; )
            console.log("🎯 Waiting for map to be ready..."), await new Promise((vt) => setTimeout(vt, 100)), pe += 100;
          if (!v.value || !v.value.leafletObject) {
            console.warn("🎯 Map instance not available after waiting. Cannot zoom to location.");
            return;
          }
          if (!D) {
            console.warn("🎯 zoomToLocation called without location");
            return;
          }
          console.log("🎯 Location type:", typeof D, "value:", D);
          const Ve = W(D);
          console.log("🎯 Transformed GeoJSON:", Ve);
          const Fe = Ri(Ve);
          if (console.log("🎯 Extracted point:", Fe), !Fe) {
            console.warn("🎯 Could not extract coordinates from location. GeoJSON was:", Ve);
            return;
          }
          const ot = v.value.leafletObject;
          console.log("🎯 Flying to", Fe, "with zoom", de, "duration", J), ot.flyTo(Fe, de, {
            duration: J / 1e3,
            // Leaflet expects seconds
            easeLinearity: 0.25
          }), console.log("🎯 flyTo called successfully");
        }, this.showTooltip = (D, de) => {
          Ne.value = D, pn.value = de || null;
        }, this.hideTooltip = () => {
          Ne.value = null, pn.value = null;
        }, this.displayRoute = (D, de = "#c45e00", J = 5) => {
          if (!v.value || !v.value.leafletObject) {
            console.warn("Map not ready. Cannot display route.");
            return;
          }
          const pe = v.value.leafletObject;
          if (rn && (pe.removeLayer(rn), rn = null), !D || !D.features) return;
          rn = Ua.layerGroup();
          for (const Fe of D.features)
            if (Fe.geometry.type === "LineString") {
              const ot = Fe.geometry.coordinates.map(
                (Ft) => [Ft[1], Ft[0]]
              ), vt = Ua.polyline(ot, {
                color: de,
                weight: J,
                opacity: 0.8
              });
              rn.addLayer(vt);
            } else if (Fe.geometry.type === "Point") {
              const [ot, vt] = Fe.geometry.coordinates, Ft = Fe.properties?.role;
              let $t = "#2196f3";
              Ft === "start" ? $t = "#4caf50" : Ft === "end" && ($t = "#f44336");
              const cn = Ua.circleMarker([vt, ot], {
                radius: 8,
                fillColor: $t,
                color: "#fff",
                weight: 2,
                fillOpacity: 1
              });
              Fe.properties?.name && cn.bindTooltip(Fe.properties.name), rn.addLayer(cn);
            }
          rn.addTo(pe);
          const Ve = D.features.filter(
            (Fe) => Fe.geometry.type === "LineString"
          );
          if (Ve.length > 0) {
            const Fe = Ve.flatMap(
              (ot) => ot.geometry.coordinates.map(
                (vt) => [vt[1], vt[0]]
              )
            );
            Fe.length > 0 && pe.fitBounds(Ua.latLngBounds(Fe), {
              padding: [50, 50]
            });
          }
          nn.value = D, Xi.value = de, To.value = J;
        }, this.clearRoute = () => {
          rn && v.value && v.value.leafletObject && (v.value.leafletObject.removeLayer(rn), rn = null), nn.value = null;
        };
      }
    }();
    return a(ca), Pt(() => {
      x.registerInstance(d.value, ca, "MapWidget", m), ci("Registered instance with EventActionsRegistry:", d.value, "on page:", m);
    }), rl(() => {
      x.unregisterInstance(d.value), ci("Unregistered instance from EventActionsRegistry:", d.value);
      for (const [D, de] of G.entries())
        try {
          de.invoke();
        } catch (J) {
          mw("Error stopping task interval:", J);
        }
      ae.clearAll(), G.clear();
      try {
        Ge(Ch, {});
      } catch (D) {
        Li("Could not unsubscribe from MQTT for primary datasource on unmount:", D);
      }
      for (const D of fe.value.keys())
        try {
          const J = dt(Nr).getDatasource(D);
          J && typeof J.callEvent == "function" && J.callEvent(Ch, {});
        } catch (de) {
          Li("Could not unsubscribe from MQTT for datasource", D, "on unmount:", de);
        }
      for (const [D, de] of U.entries())
        try {
          de();
        } catch (J) {
          Li(`Error unsubscribing from datasource ${D}:`, J);
        }
      U.clear(), ne.clear(), fe.value.clear();
    }), (D, de) => (N(), te("div", ww, [
      g.value.baseMapUrl ? (N(), Be(be(Cd), {
        key: 0,
        id: "map",
        ref_key: "map",
        ref: v,
        center: g.value.center,
        "max-zoom": 21,
        "use-global-leaflet": !1,
        zoom: g.value.zoom,
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
        onMoveend: be(Hr),
        onReady: Co,
        onClick: E,
        dragging: !g.value.fixed
      }, {
        default: _e(() => [
          re(be(Ld), {
            attribution: g.value.attribution,
            options: {
              maxNativeZoom: 19,
              maxZoom: 25
            },
            url: g.value.baseMapUrl
          }, null, 8, ["attribution", "url"]),
          (N(!0), te(xe, null, At([...g.value.layers].reverse(), (J, pe) => (N(), te(xe, {
            key: `${J.name}-${Qi(J)}`
          }, [
            J.type == "WMSLayer" && J.service && typeof J.service.getOperationUrl == "function" ? (N(), Be(be(Q1), {
              key: 0,
              attribution: J.attribution,
              layers: J.name,
              name: J.name,
              opacity: J.opacity,
              transparent: !0,
              url: J.service.getOperationUrl("GetMap"),
              visible: J.checked,
              "z-index": Qi(J),
              options: { pane: `layer-pane-${Qi(J)}` },
              format: "image/png",
              "layer-type": "base"
            }, null, 8, ["attribution", "layers", "name", "opacity", "url", "visible", "z-index", "options"])) : Le("", !0),
            J.type == "WFSLayer" ? (N(), Be(J2, {
              key: 1,
              "geo-json": J.wfs_service?.geoJson,
              "style-ids": J.styleIds,
              "layer-options": ni(J),
              "filter-feature-collection": be(P),
              "get-style-by-id": ki,
              "is-point": be(Y)
            }, null, 8, ["geo-json", "style-ids", "layer-options", "filter-feature-collection", "is-point"])) : Le("", !0),
            J.type == "GEOJSON" ? (N(), Be(tw, {
              key: 2,
              "layer-data": Ki(J),
              "style-ids": J.styleIds,
              "layer-options": ni(J),
              "marker-pane": on(J),
              "filter-feature-collection": be(P),
              "get-style-by-id": ki,
              "is-point": be(Y),
              "get-point": Ri
            }, null, 8, ["layer-data", "style-ids", "layer-options", "marker-pane", "filter-feature-collection", "is-point"])) : Le("", !0),
            J.type == "REST-GEOJSON" ? (N(), Be(nw, {
              key: 3,
              "layer-data": Ki(J),
              "style-ids": J.styleIds,
              "layer-options": ni(J),
              "marker-pane": on(J),
              "filter-feature-collection": be(P),
              "get-style-by-id": ki,
              "is-point": be(Y),
              "get-point": Ri
            }, null, 8, ["layer-data", "style-ids", "layer-options", "marker-pane", "filter-feature-collection", "is-point"])) : Le("", !0),
            J.type == "ROUTE" && J.datasourceId ? (N(), Be(cw, {
              key: 4,
              "datasource-id": J.datasourceId
            }, null, 8, ["datasource-id"])) : Le("", !0),
            J.type == "OGCSTA" ? (N(), Be(uw, {
              key: 5,
              locations: kn(J),
              renderers: g.value.OGCSstyles ?? [],
              "layer-options": ni(J),
              "marker-pane": on(J),
              "area-pane": er(J),
              "widget-id": be(d),
              "compare-thing": be(R),
              "compare-datastream": be(z),
              "is-feature-collection": be(B),
              "is-point": be(Y),
              "get-point": Ri,
              "get-pointform-area": zi,
              "transform-to-geo-json": be(W),
              "get-by-id": be(oe),
              "selected-thing-id": De.value,
              "selection-highlight-color": g.value.selectionHighlightColor ?? "#ff0000",
              "tooltip-thing-id": Ne.value,
              "tooltip-content": pn.value
            }, null, 8, ["locations", "renderers", "layer-options", "marker-pane", "area-pane", "widget-id", "compare-thing", "compare-datastream", "is-feature-collection", "is-point", "transform-to-geo-json", "get-by-id", "selected-thing-id", "selection-highlight-color", "tooltip-thing-id", "tooltip-content"])) : Le("", !0)
          ], 64))), 128))
        ]),
        _: 1
      }, 8, ["center", "zoom", "onMoveend", "dragging"])) : Le("", !0)
    ]));
  }
}), qh = /* @__PURE__ */ vi(bw, [["__scopeId", "data-v-3f80a98a"]]);
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function $h(o, a) {
  var r = Object.keys(o);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(o);
    a && (l = l.filter(function(d) {
      return Object.getOwnPropertyDescriptor(o, d).enumerable;
    })), r.push.apply(r, l);
  }
  return r;
}
function vr(o) {
  for (var a = 1; a < arguments.length; a++) {
    var r = arguments[a] != null ? arguments[a] : {};
    a % 2 ? $h(Object(r), !0).forEach(function(l) {
      Sw(o, l, r[l]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(r)) : $h(Object(r)).forEach(function(l) {
      Object.defineProperty(o, l, Object.getOwnPropertyDescriptor(r, l));
    });
  }
  return o;
}
function xu(o) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? xu = function(a) {
    return typeof a;
  } : xu = function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, xu(o);
}
function Sw(o, a, r) {
  return a in o ? Object.defineProperty(o, a, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : o[a] = r, o;
}
function Zr() {
  return Zr = Object.assign || function(o) {
    for (var a = 1; a < arguments.length; a++) {
      var r = arguments[a];
      for (var l in r)
        Object.prototype.hasOwnProperty.call(r, l) && (o[l] = r[l]);
    }
    return o;
  }, Zr.apply(this, arguments);
}
function Tw(o, a) {
  if (o == null) return {};
  var r = {}, l = Object.keys(o), d, h;
  for (h = 0; h < l.length; h++)
    d = l[h], !(a.indexOf(d) >= 0) && (r[d] = o[d]);
  return r;
}
function xw(o, a) {
  if (o == null) return {};
  var r = Tw(o, a), l, d;
  if (Object.getOwnPropertySymbols) {
    var h = Object.getOwnPropertySymbols(o);
    for (d = 0; d < h.length; d++)
      l = h[d], !(a.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(o, l) && (r[l] = o[l]);
  }
  return r;
}
var Ew = "1.14.0";
function Wr(o) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(o);
}
var Ur = Wr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), gl = Wr(/Edge/i), Jh = Wr(/firefox/i), $s = Wr(/safari/i) && !Wr(/chrome/i) && !Wr(/android/i), Kp = Wr(/iP(ad|od|hone)/i), Cw = Wr(/chrome/i) && Wr(/android/i), Qp = {
  capture: !1,
  passive: !1
};
function mt(o, a, r) {
  o.addEventListener(a, r, !Ur && Qp);
}
function ht(o, a, r) {
  o.removeEventListener(a, r, !Ur && Qp);
}
function Mu(o, a) {
  if (a) {
    if (a[0] === ">" && (a = a.substring(1)), o)
      try {
        if (o.matches)
          return o.matches(a);
        if (o.msMatchesSelector)
          return o.msMatchesSelector(a);
        if (o.webkitMatchesSelector)
          return o.webkitMatchesSelector(a);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Aw(o) {
  return o.host && o !== document && o.host.nodeType ? o.host : o.parentNode;
}
function pr(o, a, r, l) {
  if (o) {
    r = r || document;
    do {
      if (a != null && (a[0] === ">" ? o.parentNode === r && Mu(o, a) : Mu(o, a)) || l && o === r)
        return o;
      if (o === r) break;
    } while (o = Aw(o));
  }
  return null;
}
var jh = /\s+/g;
function di(o, a, r) {
  if (o && a)
    if (o.classList)
      o.classList[r ? "add" : "remove"](a);
    else {
      var l = (" " + o.className + " ").replace(jh, " ").replace(" " + a + " ", " ");
      o.className = (l + (r ? " " + a : "")).replace(jh, " ");
    }
}
function Re(o, a, r) {
  var l = o && o.style;
  if (l) {
    if (r === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? r = document.defaultView.getComputedStyle(o, "") : o.currentStyle && (r = o.currentStyle), a === void 0 ? r : r[a];
    !(a in l) && a.indexOf("webkit") === -1 && (a = "-webkit-" + a), l[a] = r + (typeof r == "string" ? "" : "px");
  }
}
function Ja(o, a) {
  var r = "";
  if (typeof o == "string")
    r = o;
  else
    do {
      var l = Re(o, "transform");
      l && l !== "none" && (r = l + " " + r);
    } while (!a && (o = o.parentNode));
  var d = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return d && new d(r);
}
function em(o, a, r) {
  if (o) {
    var l = o.getElementsByTagName(a), d = 0, h = l.length;
    if (r)
      for (; d < h; d++)
        r(l[d], d);
    return l;
  }
  return [];
}
function gr() {
  var o = document.scrollingElement;
  return o || document.documentElement;
}
function ln(o, a, r, l, d) {
  if (!(!o.getBoundingClientRect && o !== window)) {
    var h, m, g, v, T, x, b;
    if (o !== window && o.parentNode && o !== gr() ? (h = o.getBoundingClientRect(), m = h.top, g = h.left, v = h.bottom, T = h.right, x = h.height, b = h.width) : (m = 0, g = 0, v = window.innerHeight, T = window.innerWidth, x = window.innerHeight, b = window.innerWidth), (a || r) && o !== window && (d = d || o.parentNode, !Ur))
      do
        if (d && d.getBoundingClientRect && (Re(d, "transform") !== "none" || r && Re(d, "position") !== "static")) {
          var E = d.getBoundingClientRect();
          m -= E.top + parseInt(Re(d, "border-top-width")), g -= E.left + parseInt(Re(d, "border-left-width")), v = m + h.height, T = g + h.width;
          break;
        }
      while (d = d.parentNode);
    if (l && o !== window) {
      var P = Ja(d || o), z = P && P.a, R = P && P.d;
      P && (m /= R, g /= z, b /= z, x /= R, v = m + x, T = g + b);
    }
    return {
      top: m,
      left: g,
      bottom: v,
      right: T,
      width: b,
      height: x
    };
  }
}
function Yh(o, a, r) {
  for (var l = go(o, !0), d = ln(o)[a]; l; ) {
    var h = ln(l)[r], m = void 0;
    if (m = d >= h, !m) return l;
    if (l === gr()) break;
    l = go(l, !1);
  }
  return !1;
}
function Ya(o, a, r, l) {
  for (var d = 0, h = 0, m = o.children; h < m.length; ) {
    if (m[h].style.display !== "none" && m[h] !== ze.ghost && (l || m[h] !== ze.dragged) && pr(m[h], r.draggable, o, !1)) {
      if (d === a)
        return m[h];
      d++;
    }
    h++;
  }
  return null;
}
function Dd(o, a) {
  for (var r = o.lastElementChild; r && (r === ze.ghost || Re(r, "display") === "none" || a && !Mu(r, a)); )
    r = r.previousElementSibling;
  return r || null;
}
function Oi(o, a) {
  var r = 0;
  if (!o || !o.parentNode)
    return -1;
  for (; o = o.previousElementSibling; )
    o.nodeName.toUpperCase() !== "TEMPLATE" && o !== ze.clone && (!a || Mu(o, a)) && r++;
  return r;
}
function Xh(o) {
  var a = 0, r = 0, l = gr();
  if (o)
    do {
      var d = Ja(o), h = d.a, m = d.d;
      a += o.scrollLeft * h, r += o.scrollTop * m;
    } while (o !== l && (o = o.parentNode));
  return [a, r];
}
function Pw(o, a) {
  for (var r in o)
    if (o.hasOwnProperty(r)) {
      for (var l in a)
        if (a.hasOwnProperty(l) && a[l] === o[r][l]) return Number(r);
    }
  return -1;
}
function go(o, a) {
  if (!o || !o.getBoundingClientRect) return gr();
  var r = o, l = !1;
  do
    if (r.clientWidth < r.scrollWidth || r.clientHeight < r.scrollHeight) {
      var d = Re(r);
      if (r.clientWidth < r.scrollWidth && (d.overflowX == "auto" || d.overflowX == "scroll") || r.clientHeight < r.scrollHeight && (d.overflowY == "auto" || d.overflowY == "scroll")) {
        if (!r.getBoundingClientRect || r === document.body) return gr();
        if (l || a) return r;
        l = !0;
      }
    }
  while (r = r.parentNode);
  return gr();
}
function Lw(o, a) {
  if (o && a)
    for (var r in a)
      a.hasOwnProperty(r) && (o[r] = a[r]);
  return o;
}
function td(o, a) {
  return Math.round(o.top) === Math.round(a.top) && Math.round(o.left) === Math.round(a.left) && Math.round(o.height) === Math.round(a.height) && Math.round(o.width) === Math.round(a.width);
}
var Js;
function tm(o, a) {
  return function() {
    if (!Js) {
      var r = arguments, l = this;
      r.length === 1 ? o.call(l, r[0]) : o.apply(l, r), Js = setTimeout(function() {
        Js = void 0;
      }, a);
    }
  };
}
function Ow() {
  clearTimeout(Js), Js = void 0;
}
function nm(o, a, r) {
  o.scrollLeft += a, o.scrollTop += r;
}
function im(o) {
  var a = window.Polymer, r = window.jQuery || window.Zepto;
  return a && a.dom ? a.dom(o).cloneNode(!0) : r ? r(o).clone(!0)[0] : o.cloneNode(!0);
}
var hi = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Mw() {
  var o = [], a;
  return {
    captureAnimationState: function() {
      if (o = [], !!this.options.animation) {
        var l = [].slice.call(this.el.children);
        l.forEach(function(d) {
          if (!(Re(d, "display") === "none" || d === ze.ghost)) {
            o.push({
              target: d,
              rect: ln(d)
            });
            var h = vr({}, o[o.length - 1].rect);
            if (d.thisAnimationDuration) {
              var m = Ja(d, !0);
              m && (h.top -= m.f, h.left -= m.e);
            }
            d.fromRect = h;
          }
        });
      }
    },
    addAnimationState: function(l) {
      o.push(l);
    },
    removeAnimationState: function(l) {
      o.splice(Pw(o, {
        target: l
      }), 1);
    },
    animateAll: function(l) {
      var d = this;
      if (!this.options.animation) {
        clearTimeout(a), typeof l == "function" && l();
        return;
      }
      var h = !1, m = 0;
      o.forEach(function(g) {
        var v = 0, T = g.target, x = T.fromRect, b = ln(T), E = T.prevFromRect, P = T.prevToRect, z = g.rect, R = Ja(T, !0);
        R && (b.top -= R.f, b.left -= R.e), T.toRect = b, T.thisAnimationDuration && td(E, b) && !td(x, b) && // Make sure animatingRect is on line between toRect & fromRect
        (z.top - b.top) / (z.left - b.left) === (x.top - b.top) / (x.left - b.left) && (v = kw(z, E, P, d.options)), td(b, x) || (T.prevFromRect = x, T.prevToRect = b, v || (v = d.options.animation), d.animate(T, z, b, v)), v && (h = !0, m = Math.max(m, v), clearTimeout(T.animationResetTimer), T.animationResetTimer = setTimeout(function() {
          T.animationTime = 0, T.prevFromRect = null, T.fromRect = null, T.prevToRect = null, T.thisAnimationDuration = null;
        }, v), T.thisAnimationDuration = v);
      }), clearTimeout(a), h ? a = setTimeout(function() {
        typeof l == "function" && l();
      }, m) : typeof l == "function" && l(), o = [];
    },
    animate: function(l, d, h, m) {
      if (m) {
        Re(l, "transition", ""), Re(l, "transform", "");
        var g = Ja(this.el), v = g && g.a, T = g && g.d, x = (d.left - h.left) / (v || 1), b = (d.top - h.top) / (T || 1);
        l.animatingX = !!x, l.animatingY = !!b, Re(l, "transform", "translate3d(" + x + "px," + b + "px,0)"), this.forRepaintDummy = Iw(l), Re(l, "transition", "transform " + m + "ms" + (this.options.easing ? " " + this.options.easing : "")), Re(l, "transform", "translate3d(0,0,0)"), typeof l.animated == "number" && clearTimeout(l.animated), l.animated = setTimeout(function() {
          Re(l, "transition", ""), Re(l, "transform", ""), l.animated = !1, l.animatingX = !1, l.animatingY = !1;
        }, m);
      }
    }
  };
}
function Iw(o) {
  return o.offsetWidth;
}
function kw(o, a, r, l) {
  return Math.sqrt(Math.pow(a.top - o.top, 2) + Math.pow(a.left - o.left, 2)) / Math.sqrt(Math.pow(a.top - r.top, 2) + Math.pow(a.left - r.left, 2)) * l.animation;
}
var Va = [], nd = {
  initializeByDefault: !0
}, vl = {
  mount: function(a) {
    for (var r in nd)
      nd.hasOwnProperty(r) && !(r in a) && (a[r] = nd[r]);
    Va.forEach(function(l) {
      if (l.pluginName === a.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(a.pluginName, " more than once");
    }), Va.push(a);
  },
  pluginEvent: function(a, r, l) {
    var d = this;
    this.eventCanceled = !1, l.cancel = function() {
      d.eventCanceled = !0;
    };
    var h = a + "Global";
    Va.forEach(function(m) {
      r[m.pluginName] && (r[m.pluginName][h] && r[m.pluginName][h](vr({
        sortable: r
      }, l)), r.options[m.pluginName] && r[m.pluginName][a] && r[m.pluginName][a](vr({
        sortable: r
      }, l)));
    });
  },
  initializePlugins: function(a, r, l, d) {
    Va.forEach(function(g) {
      var v = g.pluginName;
      if (!(!a.options[v] && !g.initializeByDefault)) {
        var T = new g(a, r, a.options);
        T.sortable = a, T.options = a.options, a[v] = T, Zr(l, T.defaults);
      }
    });
    for (var h in a.options)
      if (a.options.hasOwnProperty(h)) {
        var m = this.modifyOption(a, h, a.options[h]);
        typeof m < "u" && (a.options[h] = m);
      }
  },
  getEventProperties: function(a, r) {
    var l = {};
    return Va.forEach(function(d) {
      typeof d.eventProperties == "function" && Zr(l, d.eventProperties.call(r[d.pluginName], a));
    }), l;
  },
  modifyOption: function(a, r, l) {
    var d;
    return Va.forEach(function(h) {
      a[h.pluginName] && h.optionListeners && typeof h.optionListeners[r] == "function" && (d = h.optionListeners[r].call(a[h.pluginName], l));
    }), d;
  }
};
function Dw(o) {
  var a = o.sortable, r = o.rootEl, l = o.name, d = o.targetEl, h = o.cloneEl, m = o.toEl, g = o.fromEl, v = o.oldIndex, T = o.newIndex, x = o.oldDraggableIndex, b = o.newDraggableIndex, E = o.originalEvent, P = o.putSortable, z = o.extraEventProperties;
  if (a = a || r && r[hi], !!a) {
    var R, Y = a.options, B = "on" + l.charAt(0).toUpperCase() + l.substr(1);
    window.CustomEvent && !Ur && !gl ? R = new CustomEvent(l, {
      bubbles: !0,
      cancelable: !0
    }) : (R = document.createEvent("Event"), R.initEvent(l, !0, !0)), R.to = m || r, R.from = g || r, R.item = d || r, R.clone = h, R.oldIndex = v, R.newIndex = T, R.oldDraggableIndex = x, R.newDraggableIndex = b, R.originalEvent = E, R.pullMode = P ? P.lastPutMode : void 0;
    var W = vr(vr({}, z), vl.getEventProperties(l, a));
    for (var q in W)
      R[q] = W[q];
    r && r.dispatchEvent(R), Y[B] && Y[B].call(a, R);
  }
}
var Fw = ["evt"], ei = function(a, r) {
  var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, d = l.evt, h = xw(l, Fw);
  vl.pluginEvent.bind(ze)(a, r, vr({
    dragEl: ce,
    parentEl: Zt,
    ghostEl: je,
    rootEl: kt,
    nextEl: na,
    lastDownEl: Eu,
    cloneEl: Ut,
    cloneHidden: mo,
    dragStarted: Ws,
    putSortable: yn,
    activeSortable: ze.active,
    originalEvent: d,
    oldIndex: qa,
    oldDraggableIndex: js,
    newIndex: fi,
    newDraggableIndex: po,
    hideGhostForTarget: sm,
    unhideGhostForTarget: lm,
    cloneNowHidden: function() {
      mo = !0;
    },
    cloneNowShown: function() {
      mo = !1;
    },
    dispatchSortableEvent: function(g) {
      Un({
        sortable: r,
        name: g,
        originalEvent: d
      });
    }
  }, h));
};
function Un(o) {
  Dw(vr({
    putSortable: yn,
    cloneEl: Ut,
    targetEl: ce,
    rootEl: kt,
    oldIndex: qa,
    oldDraggableIndex: js,
    newIndex: fi,
    newDraggableIndex: po
  }, o));
}
var ce, Zt, je, kt, na, Eu, Ut, mo, qa, fi, js, po, _u, yn, Ha = !1, Iu = !1, ku = [], ea, Ji, id, rd, Kh, Qh, Ws, Za, Ys, Xs = !1, yu = !1, Cu, Mn, od = [], md = !1, Du = [], Gu = typeof document < "u", wu = Kp, ep = gl || Ur ? "cssFloat" : "float", Bw = Gu && !Cw && !Kp && "draggable" in document.createElement("div"), rm = (function() {
  if (Gu) {
    if (Ur)
      return !1;
    var o = document.createElement("x");
    return o.style.cssText = "pointer-events:auto", o.style.pointerEvents === "auto";
  }
})(), om = function(a, r) {
  var l = Re(a), d = parseInt(l.width) - parseInt(l.paddingLeft) - parseInt(l.paddingRight) - parseInt(l.borderLeftWidth) - parseInt(l.borderRightWidth), h = Ya(a, 0, r), m = Ya(a, 1, r), g = h && Re(h), v = m && Re(m), T = g && parseInt(g.marginLeft) + parseInt(g.marginRight) + ln(h).width, x = v && parseInt(v.marginLeft) + parseInt(v.marginRight) + ln(m).width;
  if (l.display === "flex")
    return l.flexDirection === "column" || l.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (l.display === "grid")
    return l.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (h && g.float && g.float !== "none") {
    var b = g.float === "left" ? "left" : "right";
    return m && (v.clear === "both" || v.clear === b) ? "vertical" : "horizontal";
  }
  return h && (g.display === "block" || g.display === "flex" || g.display === "table" || g.display === "grid" || T >= d && l[ep] === "none" || m && l[ep] === "none" && T + x > d) ? "vertical" : "horizontal";
}, Rw = function(a, r, l) {
  var d = l ? a.left : a.top, h = l ? a.right : a.bottom, m = l ? a.width : a.height, g = l ? r.left : r.top, v = l ? r.right : r.bottom, T = l ? r.width : r.height;
  return d === g || h === v || d + m / 2 === g + T / 2;
}, zw = function(a, r) {
  var l;
  return ku.some(function(d) {
    var h = d[hi].options.emptyInsertThreshold;
    if (!(!h || Dd(d))) {
      var m = ln(d), g = a >= m.left - h && a <= m.right + h, v = r >= m.top - h && r <= m.bottom + h;
      if (g && v)
        return l = d;
    }
  }), l;
}, am = function(a) {
  function r(h, m) {
    return function(g, v, T, x) {
      var b = g.options.group.name && v.options.group.name && g.options.group.name === v.options.group.name;
      if (h == null && (m || b))
        return !0;
      if (h == null || h === !1)
        return !1;
      if (m && h === "clone")
        return h;
      if (typeof h == "function")
        return r(h(g, v, T, x), m)(g, v, T, x);
      var E = (m ? g : v).options.group.name;
      return h === !0 || typeof h == "string" && h === E || h.join && h.indexOf(E) > -1;
    };
  }
  var l = {}, d = a.group;
  (!d || xu(d) != "object") && (d = {
    name: d
  }), l.name = d.name, l.checkPull = r(d.pull, !0), l.checkPut = r(d.put), l.revertClone = d.revertClone, a.group = l;
}, sm = function() {
  !rm && je && Re(je, "display", "none");
}, lm = function() {
  !rm && je && Re(je, "display", "");
};
Gu && document.addEventListener("click", function(o) {
  if (Iu)
    return o.preventDefault(), o.stopPropagation && o.stopPropagation(), o.stopImmediatePropagation && o.stopImmediatePropagation(), Iu = !1, !1;
}, !0);
var ta = function(a) {
  if (ce) {
    a = a.touches ? a.touches[0] : a;
    var r = zw(a.clientX, a.clientY);
    if (r) {
      var l = {};
      for (var d in a)
        a.hasOwnProperty(d) && (l[d] = a[d]);
      l.target = l.rootEl = r, l.preventDefault = void 0, l.stopPropagation = void 0, r[hi]._onDragOver(l);
    }
  }
}, Nw = function(a) {
  ce && ce.parentNode[hi]._isOutsideThisEl(a.target);
};
function ze(o, a) {
  if (!(o && o.nodeType && o.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(o));
  this.el = o, this.options = a = Zr({}, a), o[hi] = this;
  var r = {
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
      return om(o, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(m, g) {
      m.setData("Text", g.textContent);
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
    supportPointer: ze.supportPointer !== !1 && "PointerEvent" in window && !$s,
    emptyInsertThreshold: 5
  };
  vl.initializePlugins(this, o, r);
  for (var l in r)
    !(l in a) && (a[l] = r[l]);
  am(a);
  for (var d in this)
    d.charAt(0) === "_" && typeof this[d] == "function" && (this[d] = this[d].bind(this));
  this.nativeDraggable = a.forceFallback ? !1 : Bw, this.nativeDraggable && (this.options.touchStartThreshold = 1), a.supportPointer ? mt(o, "pointerdown", this._onTapStart) : (mt(o, "mousedown", this._onTapStart), mt(o, "touchstart", this._onTapStart)), this.nativeDraggable && (mt(o, "dragover", this), mt(o, "dragenter", this)), ku.push(this.el), a.store && a.store.get && this.sort(a.store.get(this) || []), Zr(this, Mw());
}
ze.prototype = /** @lends Sortable.prototype */
{
  constructor: ze,
  _isOutsideThisEl: function(a) {
    !this.el.contains(a) && a !== this.el && (Za = null);
  },
  _getDirection: function(a, r) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, a, r, ce) : this.options.direction;
  },
  _onTapStart: function(a) {
    if (a.cancelable) {
      var r = this, l = this.el, d = this.options, h = d.preventOnFilter, m = a.type, g = a.touches && a.touches[0] || a.pointerType && a.pointerType === "touch" && a, v = (g || a).target, T = a.target.shadowRoot && (a.path && a.path[0] || a.composedPath && a.composedPath()[0]) || v, x = d.filter;
      if ($w(l), !ce && !(/mousedown|pointerdown/.test(m) && a.button !== 0 || d.disabled) && !T.isContentEditable && !(!this.nativeDraggable && $s && v && v.tagName.toUpperCase() === "SELECT") && (v = pr(v, d.draggable, l, !1), !(v && v.animated) && Eu !== v)) {
        if (qa = Oi(v), js = Oi(v, d.draggable), typeof x == "function") {
          if (x.call(this, a, v, this)) {
            Un({
              sortable: r,
              rootEl: T,
              name: "filter",
              targetEl: v,
              toEl: l,
              fromEl: l
            }), ei("filter", r, {
              evt: a
            }), h && a.cancelable && a.preventDefault();
            return;
          }
        } else if (x && (x = x.split(",").some(function(b) {
          if (b = pr(T, b.trim(), l, !1), b)
            return Un({
              sortable: r,
              rootEl: b,
              name: "filter",
              targetEl: v,
              fromEl: l,
              toEl: l
            }), ei("filter", r, {
              evt: a
            }), !0;
        }), x)) {
          h && a.cancelable && a.preventDefault();
          return;
        }
        d.handle && !pr(T, d.handle, l, !1) || this._prepareDragStart(a, g, v);
      }
    }
  },
  _prepareDragStart: function(a, r, l) {
    var d = this, h = d.el, m = d.options, g = h.ownerDocument, v;
    if (l && !ce && l.parentNode === h) {
      var T = ln(l);
      if (kt = h, ce = l, Zt = ce.parentNode, na = ce.nextSibling, Eu = l, _u = m.group, ze.dragged = ce, ea = {
        target: ce,
        clientX: (r || a).clientX,
        clientY: (r || a).clientY
      }, Kh = ea.clientX - T.left, Qh = ea.clientY - T.top, this._lastX = (r || a).clientX, this._lastY = (r || a).clientY, ce.style["will-change"] = "all", v = function() {
        if (ei("delayEnded", d, {
          evt: a
        }), ze.eventCanceled) {
          d._onDrop();
          return;
        }
        d._disableDelayedDragEvents(), !Jh && d.nativeDraggable && (ce.draggable = !0), d._triggerDragStart(a, r), Un({
          sortable: d,
          name: "choose",
          originalEvent: a
        }), di(ce, m.chosenClass, !0);
      }, m.ignore.split(",").forEach(function(x) {
        em(ce, x.trim(), ad);
      }), mt(g, "dragover", ta), mt(g, "mousemove", ta), mt(g, "touchmove", ta), mt(g, "mouseup", d._onDrop), mt(g, "touchend", d._onDrop), mt(g, "touchcancel", d._onDrop), Jh && this.nativeDraggable && (this.options.touchStartThreshold = 4, ce.draggable = !0), ei("delayStart", this, {
        evt: a
      }), m.delay && (!m.delayOnTouchOnly || r) && (!this.nativeDraggable || !(gl || Ur))) {
        if (ze.eventCanceled) {
          this._onDrop();
          return;
        }
        mt(g, "mouseup", d._disableDelayedDrag), mt(g, "touchend", d._disableDelayedDrag), mt(g, "touchcancel", d._disableDelayedDrag), mt(g, "mousemove", d._delayedDragTouchMoveHandler), mt(g, "touchmove", d._delayedDragTouchMoveHandler), m.supportPointer && mt(g, "pointermove", d._delayedDragTouchMoveHandler), d._dragStartTimer = setTimeout(v, m.delay);
      } else
        v();
    }
  },
  _delayedDragTouchMoveHandler: function(a) {
    var r = a.touches ? a.touches[0] : a;
    Math.max(Math.abs(r.clientX - this._lastX), Math.abs(r.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ce && ad(ce), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var a = this.el.ownerDocument;
    ht(a, "mouseup", this._disableDelayedDrag), ht(a, "touchend", this._disableDelayedDrag), ht(a, "touchcancel", this._disableDelayedDrag), ht(a, "mousemove", this._delayedDragTouchMoveHandler), ht(a, "touchmove", this._delayedDragTouchMoveHandler), ht(a, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(a, r) {
    r = r || a.pointerType == "touch" && a, !this.nativeDraggable || r ? this.options.supportPointer ? mt(document, "pointermove", this._onTouchMove) : r ? mt(document, "touchmove", this._onTouchMove) : mt(document, "mousemove", this._onTouchMove) : (mt(ce, "dragend", this), mt(kt, "dragstart", this._onDragStart));
    try {
      document.selection ? Au(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(a, r) {
    if (Ha = !1, kt && ce) {
      ei("dragStarted", this, {
        evt: r
      }), this.nativeDraggable && mt(document, "dragover", Nw);
      var l = this.options;
      !a && di(ce, l.dragClass, !1), di(ce, l.ghostClass, !0), ze.active = this, a && this._appendGhost(), Un({
        sortable: this,
        name: "start",
        originalEvent: r
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Ji) {
      this._lastX = Ji.clientX, this._lastY = Ji.clientY, sm();
      for (var a = document.elementFromPoint(Ji.clientX, Ji.clientY), r = a; a && a.shadowRoot && (a = a.shadowRoot.elementFromPoint(Ji.clientX, Ji.clientY), a !== r); )
        r = a;
      if (ce.parentNode[hi]._isOutsideThisEl(a), r)
        do {
          if (r[hi]) {
            var l = void 0;
            if (l = r[hi]._onDragOver({
              clientX: Ji.clientX,
              clientY: Ji.clientY,
              target: a,
              rootEl: r
            }), l && !this.options.dragoverBubble)
              break;
          }
          a = r;
        } while (r = r.parentNode);
      lm();
    }
  },
  _onTouchMove: function(a) {
    if (ea) {
      var r = this.options, l = r.fallbackTolerance, d = r.fallbackOffset, h = a.touches ? a.touches[0] : a, m = je && Ja(je, !0), g = je && m && m.a, v = je && m && m.d, T = wu && Mn && Xh(Mn), x = (h.clientX - ea.clientX + d.x) / (g || 1) + (T ? T[0] - od[0] : 0) / (g || 1), b = (h.clientY - ea.clientY + d.y) / (v || 1) + (T ? T[1] - od[1] : 0) / (v || 1);
      if (!ze.active && !Ha) {
        if (l && Math.max(Math.abs(h.clientX - this._lastX), Math.abs(h.clientY - this._lastY)) < l)
          return;
        this._onDragStart(a, !0);
      }
      if (je) {
        m ? (m.e += x - (id || 0), m.f += b - (rd || 0)) : m = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: x,
          f: b
        };
        var E = "matrix(".concat(m.a, ",").concat(m.b, ",").concat(m.c, ",").concat(m.d, ",").concat(m.e, ",").concat(m.f, ")");
        Re(je, "webkitTransform", E), Re(je, "mozTransform", E), Re(je, "msTransform", E), Re(je, "transform", E), id = x, rd = b, Ji = h;
      }
      a.cancelable && a.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!je) {
      var a = this.options.fallbackOnBody ? document.body : kt, r = ln(ce, !0, wu, !0, a), l = this.options;
      if (wu) {
        for (Mn = a; Re(Mn, "position") === "static" && Re(Mn, "transform") === "none" && Mn !== document; )
          Mn = Mn.parentNode;
        Mn !== document.body && Mn !== document.documentElement ? (Mn === document && (Mn = gr()), r.top += Mn.scrollTop, r.left += Mn.scrollLeft) : Mn = gr(), od = Xh(Mn);
      }
      je = ce.cloneNode(!0), di(je, l.ghostClass, !1), di(je, l.fallbackClass, !0), di(je, l.dragClass, !0), Re(je, "transition", ""), Re(je, "transform", ""), Re(je, "box-sizing", "border-box"), Re(je, "margin", 0), Re(je, "top", r.top), Re(je, "left", r.left), Re(je, "width", r.width), Re(je, "height", r.height), Re(je, "opacity", "0.8"), Re(je, "position", wu ? "absolute" : "fixed"), Re(je, "zIndex", "100000"), Re(je, "pointerEvents", "none"), ze.ghost = je, a.appendChild(je), Re(je, "transform-origin", Kh / parseInt(je.style.width) * 100 + "% " + Qh / parseInt(je.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(a, r) {
    var l = this, d = a.dataTransfer, h = l.options;
    if (ei("dragStart", this, {
      evt: a
    }), ze.eventCanceled) {
      this._onDrop();
      return;
    }
    ei("setupClone", this), ze.eventCanceled || (Ut = im(ce), Ut.draggable = !1, Ut.style["will-change"] = "", this._hideClone(), di(Ut, this.options.chosenClass, !1), ze.clone = Ut), l.cloneId = Au(function() {
      ei("clone", l), !ze.eventCanceled && (l.options.removeCloneOnHide || kt.insertBefore(Ut, ce), l._hideClone(), Un({
        sortable: l,
        name: "clone"
      }));
    }), !r && di(ce, h.dragClass, !0), r ? (Iu = !0, l._loopId = setInterval(l._emulateDragOver, 50)) : (ht(document, "mouseup", l._onDrop), ht(document, "touchend", l._onDrop), ht(document, "touchcancel", l._onDrop), d && (d.effectAllowed = "move", h.setData && h.setData.call(l, d, ce)), mt(document, "drop", l), Re(ce, "transform", "translateZ(0)")), Ha = !0, l._dragStartId = Au(l._dragStarted.bind(l, r, a)), mt(document, "selectstart", l), Ws = !0, $s && Re(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(a) {
    var r = this.el, l = a.target, d, h, m, g = this.options, v = g.group, T = ze.active, x = _u === v, b = g.sort, E = yn || T, P, z = this, R = !1;
    if (md) return;
    function Y(ye, Kt) {
      ei(ye, z, vr({
        evt: a,
        isOwner: x,
        axis: P ? "vertical" : "horizontal",
        revert: m,
        dragRect: d,
        targetRect: h,
        canSort: b,
        fromSortable: E,
        target: l,
        completed: W,
        onMove: function(he, Ge) {
          return bu(kt, r, ce, d, he, ln(he), a, Ge);
        },
        changed: q
      }, Kt));
    }
    function B() {
      Y("dragOverAnimationCapture"), z.captureAnimationState(), z !== E && E.captureAnimationState();
    }
    function W(ye) {
      return Y("dragOverCompleted", {
        insertion: ye
      }), ye && (x ? T._hideClone() : T._showClone(z), z !== E && (di(ce, yn ? yn.options.ghostClass : T.options.ghostClass, !1), di(ce, g.ghostClass, !0)), yn !== z && z !== ze.active ? yn = z : z === ze.active && yn && (yn = null), E === z && (z._ignoreWhileAnimating = l), z.animateAll(function() {
        Y("dragOverAnimationComplete"), z._ignoreWhileAnimating = null;
      }), z !== E && (E.animateAll(), E._ignoreWhileAnimating = null)), (l === ce && !ce.animated || l === r && !l.animated) && (Za = null), !g.dragoverBubble && !a.rootEl && l !== document && (ce.parentNode[hi]._isOutsideThisEl(a.target), !ye && ta(a)), !g.dragoverBubble && a.stopPropagation && a.stopPropagation(), R = !0;
    }
    function q() {
      fi = Oi(ce), po = Oi(ce, g.draggable), Un({
        sortable: z,
        name: "change",
        toEl: r,
        newIndex: fi,
        newDraggableIndex: po,
        originalEvent: a
      });
    }
    if (a.preventDefault !== void 0 && a.cancelable && a.preventDefault(), l = pr(l, g.draggable, r, !0), Y("dragOver"), ze.eventCanceled) return R;
    if (ce.contains(a.target) || l.animated && l.animatingX && l.animatingY || z._ignoreWhileAnimating === l)
      return W(!1);
    if (Iu = !1, T && !g.disabled && (x ? b || (m = Zt !== kt) : yn === this || (this.lastPutMode = _u.checkPull(this, T, ce, a)) && v.checkPut(this, T, ce, a))) {
      if (P = this._getDirection(a, l) === "vertical", d = ln(ce), Y("dragOverValid"), ze.eventCanceled) return R;
      if (m)
        return Zt = kt, B(), this._hideClone(), Y("revert"), ze.eventCanceled || (na ? kt.insertBefore(ce, na) : kt.appendChild(ce)), W(!0);
      var M = Dd(r, g.draggable);
      if (!M || Zw(a, P, this) && !M.animated) {
        if (M === ce)
          return W(!1);
        if (M && r === a.target && (l = M), l && (h = ln(l)), bu(kt, r, ce, d, l, h, a, !!l) !== !1)
          return B(), r.appendChild(ce), Zt = r, q(), W(!0);
      } else if (M && Vw(a, P, this)) {
        var $ = Ya(r, 0, g, !0);
        if ($ === ce)
          return W(!1);
        if (l = $, h = ln(l), bu(kt, r, ce, d, l, h, a, !1) !== !1)
          return B(), r.insertBefore(ce, $), Zt = r, q(), W(!0);
      } else if (l.parentNode === r) {
        h = ln(l);
        var ue = 0, fe, Ee = ce.parentNode !== r, ne = !Rw(ce.animated && ce.toRect || d, l.animated && l.toRect || h, P), U = P ? "top" : "left", Q = Yh(l, "top", "top") || Yh(ce, "top", "top"), G = Q ? Q.scrollTop : void 0;
        Za !== l && (fe = h[U], Xs = !1, yu = !ne && g.invertSwap || Ee), ue = Uw(a, l, h, P, ne ? 1 : g.swapThreshold, g.invertedSwapThreshold == null ? g.swapThreshold : g.invertedSwapThreshold, yu, Za === l);
        var ae;
        if (ue !== 0) {
          var ge = Oi(ce);
          do
            ge -= ue, ae = Zt.children[ge];
          while (ae && (Re(ae, "display") === "none" || ae === je));
        }
        if (ue === 0 || ae === l)
          return W(!1);
        Za = l, Ys = ue;
        var Qe = l.nextElementSibling, Ae = !1;
        Ae = ue === 1;
        var ke = bu(kt, r, ce, d, l, h, a, Ae);
        if (ke !== !1)
          return (ke === 1 || ke === -1) && (Ae = ke === 1), md = !0, setTimeout(Ww, 30), B(), Ae && !Qe ? r.appendChild(ce) : l.parentNode.insertBefore(ce, Ae ? Qe : l), Q && nm(Q, 0, G - Q.scrollTop), Zt = ce.parentNode, fe !== void 0 && !yu && (Cu = Math.abs(fe - ln(l)[U])), q(), W(!0);
      }
      if (r.contains(ce))
        return W(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    ht(document, "mousemove", this._onTouchMove), ht(document, "touchmove", this._onTouchMove), ht(document, "pointermove", this._onTouchMove), ht(document, "dragover", ta), ht(document, "mousemove", ta), ht(document, "touchmove", ta);
  },
  _offUpEvents: function() {
    var a = this.el.ownerDocument;
    ht(a, "mouseup", this._onDrop), ht(a, "touchend", this._onDrop), ht(a, "pointerup", this._onDrop), ht(a, "touchcancel", this._onDrop), ht(document, "selectstart", this);
  },
  _onDrop: function(a) {
    var r = this.el, l = this.options;
    if (fi = Oi(ce), po = Oi(ce, l.draggable), ei("drop", this, {
      evt: a
    }), Zt = ce && ce.parentNode, fi = Oi(ce), po = Oi(ce, l.draggable), ze.eventCanceled) {
      this._nulling();
      return;
    }
    Ha = !1, yu = !1, Xs = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), gd(this.cloneId), gd(this._dragStartId), this.nativeDraggable && (ht(document, "drop", this), ht(r, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), $s && Re(document.body, "user-select", ""), Re(ce, "transform", ""), a && (Ws && (a.cancelable && a.preventDefault(), !l.dropBubble && a.stopPropagation()), je && je.parentNode && je.parentNode.removeChild(je), (kt === Zt || yn && yn.lastPutMode !== "clone") && Ut && Ut.parentNode && Ut.parentNode.removeChild(Ut), ce && (this.nativeDraggable && ht(ce, "dragend", this), ad(ce), ce.style["will-change"] = "", Ws && !Ha && di(ce, yn ? yn.options.ghostClass : this.options.ghostClass, !1), di(ce, this.options.chosenClass, !1), Un({
      sortable: this,
      name: "unchoose",
      toEl: Zt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: a
    }), kt !== Zt ? (fi >= 0 && (Un({
      rootEl: Zt,
      name: "add",
      toEl: Zt,
      fromEl: kt,
      originalEvent: a
    }), Un({
      sortable: this,
      name: "remove",
      toEl: Zt,
      originalEvent: a
    }), Un({
      rootEl: Zt,
      name: "sort",
      toEl: Zt,
      fromEl: kt,
      originalEvent: a
    }), Un({
      sortable: this,
      name: "sort",
      toEl: Zt,
      originalEvent: a
    })), yn && yn.save()) : fi !== qa && fi >= 0 && (Un({
      sortable: this,
      name: "update",
      toEl: Zt,
      originalEvent: a
    }), Un({
      sortable: this,
      name: "sort",
      toEl: Zt,
      originalEvent: a
    })), ze.active && ((fi == null || fi === -1) && (fi = qa, po = js), Un({
      sortable: this,
      name: "end",
      toEl: Zt,
      originalEvent: a
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    ei("nulling", this), kt = ce = Zt = je = na = Ut = Eu = mo = ea = Ji = Ws = fi = po = qa = js = Za = Ys = yn = _u = ze.dragged = ze.ghost = ze.clone = ze.active = null, Du.forEach(function(a) {
      a.checked = !0;
    }), Du.length = id = rd = 0;
  },
  handleEvent: function(a) {
    switch (a.type) {
      case "drop":
      case "dragend":
        this._onDrop(a);
        break;
      case "dragenter":
      case "dragover":
        ce && (this._onDragOver(a), Gw(a));
        break;
      case "selectstart":
        a.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var a = [], r, l = this.el.children, d = 0, h = l.length, m = this.options; d < h; d++)
      r = l[d], pr(r, m.draggable, this.el, !1) && a.push(r.getAttribute(m.dataIdAttr) || qw(r));
    return a;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(a, r) {
    var l = {}, d = this.el;
    this.toArray().forEach(function(h, m) {
      var g = d.children[m];
      pr(g, this.options.draggable, d, !1) && (l[h] = g);
    }, this), r && this.captureAnimationState(), a.forEach(function(h) {
      l[h] && (d.removeChild(l[h]), d.appendChild(l[h]));
    }), r && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var a = this.options.store;
    a && a.set && a.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(a, r) {
    return pr(a, r || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(a, r) {
    var l = this.options;
    if (r === void 0)
      return l[a];
    var d = vl.modifyOption(this, a, r);
    typeof d < "u" ? l[a] = d : l[a] = r, a === "group" && am(l);
  },
  /**
   * Destroy
   */
  destroy: function() {
    ei("destroy", this);
    var a = this.el;
    a[hi] = null, ht(a, "mousedown", this._onTapStart), ht(a, "touchstart", this._onTapStart), ht(a, "pointerdown", this._onTapStart), this.nativeDraggable && (ht(a, "dragover", this), ht(a, "dragenter", this)), Array.prototype.forEach.call(a.querySelectorAll("[draggable]"), function(r) {
      r.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), ku.splice(ku.indexOf(this.el), 1), this.el = a = null;
  },
  _hideClone: function() {
    if (!mo) {
      if (ei("hideClone", this), ze.eventCanceled) return;
      Re(Ut, "display", "none"), this.options.removeCloneOnHide && Ut.parentNode && Ut.parentNode.removeChild(Ut), mo = !0;
    }
  },
  _showClone: function(a) {
    if (a.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (mo) {
      if (ei("showClone", this), ze.eventCanceled) return;
      ce.parentNode == kt && !this.options.group.revertClone ? kt.insertBefore(Ut, ce) : na ? kt.insertBefore(Ut, na) : kt.appendChild(Ut), this.options.group.revertClone && this.animate(ce, Ut), Re(Ut, "display", ""), mo = !1;
    }
  }
};
function Gw(o) {
  o.dataTransfer && (o.dataTransfer.dropEffect = "move"), o.cancelable && o.preventDefault();
}
function bu(o, a, r, l, d, h, m, g) {
  var v, T = o[hi], x = T.options.onMove, b;
  return window.CustomEvent && !Ur && !gl ? v = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (v = document.createEvent("Event"), v.initEvent("move", !0, !0)), v.to = a, v.from = o, v.dragged = r, v.draggedRect = l, v.related = d || a, v.relatedRect = h || ln(a), v.willInsertAfter = g, v.originalEvent = m, o.dispatchEvent(v), x && (b = x.call(T, v, m)), b;
}
function ad(o) {
  o.draggable = !1;
}
function Ww() {
  md = !1;
}
function Vw(o, a, r) {
  var l = ln(Ya(r.el, 0, r.options, !0)), d = 10;
  return a ? o.clientX < l.left - d || o.clientY < l.top && o.clientX < l.right : o.clientY < l.top - d || o.clientY < l.bottom && o.clientX < l.left;
}
function Zw(o, a, r) {
  var l = ln(Dd(r.el, r.options.draggable)), d = 10;
  return a ? o.clientX > l.right + d || o.clientX <= l.right && o.clientY > l.bottom && o.clientX >= l.left : o.clientX > l.right && o.clientY > l.top || o.clientX <= l.right && o.clientY > l.bottom + d;
}
function Uw(o, a, r, l, d, h, m, g) {
  var v = l ? o.clientY : o.clientX, T = l ? r.height : r.width, x = l ? r.top : r.left, b = l ? r.bottom : r.right, E = !1;
  if (!m) {
    if (g && Cu < T * d) {
      if (!Xs && (Ys === 1 ? v > x + T * h / 2 : v < b - T * h / 2) && (Xs = !0), Xs)
        E = !0;
      else if (Ys === 1 ? v < x + Cu : v > b - Cu)
        return -Ys;
    } else if (v > x + T * (1 - d) / 2 && v < b - T * (1 - d) / 2)
      return Hw(a);
  }
  return E = E || m, E && (v < x + T * h / 2 || v > b - T * h / 2) ? v > x + T / 2 ? 1 : -1 : 0;
}
function Hw(o) {
  return Oi(ce) < Oi(o) ? 1 : -1;
}
function qw(o) {
  for (var a = o.tagName + o.className + o.src + o.href + o.textContent, r = a.length, l = 0; r--; )
    l += a.charCodeAt(r);
  return l.toString(36);
}
function $w(o) {
  Du.length = 0;
  for (var a = o.getElementsByTagName("input"), r = a.length; r--; ) {
    var l = a[r];
    l.checked && Du.push(l);
  }
}
function Au(o) {
  return setTimeout(o, 0);
}
function gd(o) {
  return clearTimeout(o);
}
Gu && mt(document, "touchmove", function(o) {
  (ze.active || Ha) && o.cancelable && o.preventDefault();
});
ze.utils = {
  on: mt,
  off: ht,
  css: Re,
  find: em,
  is: function(a, r) {
    return !!pr(a, r, a, !1);
  },
  extend: Lw,
  throttle: tm,
  closest: pr,
  toggleClass: di,
  clone: im,
  index: Oi,
  nextTick: Au,
  cancelNextTick: gd,
  detectDirection: om,
  getChild: Ya
};
ze.get = function(o) {
  return o[hi];
};
ze.mount = function() {
  for (var o = arguments.length, a = new Array(o), r = 0; r < o; r++)
    a[r] = arguments[r];
  a[0].constructor === Array && (a = a[0]), a.forEach(function(l) {
    if (!l.prototype || !l.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(l));
    l.utils && (ze.utils = vr(vr({}, ze.utils), l.utils)), vl.mount(l);
  });
};
ze.create = function(o, a) {
  return new ze(o, a);
};
ze.version = Ew;
var en = [], Vs, vd, _d = !1, sd, ld, Fu, Zs;
function Jw() {
  function o() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var a in this)
      a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
  }
  return o.prototype = {
    dragStarted: function(r) {
      var l = r.originalEvent;
      this.sortable.nativeDraggable ? mt(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? mt(document, "pointermove", this._handleFallbackAutoScroll) : l.touches ? mt(document, "touchmove", this._handleFallbackAutoScroll) : mt(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(r) {
      var l = r.originalEvent;
      !this.options.dragOverBubble && !l.rootEl && this._handleAutoScroll(l);
    },
    drop: function() {
      this.sortable.nativeDraggable ? ht(document, "dragover", this._handleAutoScroll) : (ht(document, "pointermove", this._handleFallbackAutoScroll), ht(document, "touchmove", this._handleFallbackAutoScroll), ht(document, "mousemove", this._handleFallbackAutoScroll)), tp(), Pu(), Ow();
    },
    nulling: function() {
      Fu = vd = Vs = _d = Zs = sd = ld = null, en.length = 0;
    },
    _handleFallbackAutoScroll: function(r) {
      this._handleAutoScroll(r, !0);
    },
    _handleAutoScroll: function(r, l) {
      var d = this, h = (r.touches ? r.touches[0] : r).clientX, m = (r.touches ? r.touches[0] : r).clientY, g = document.elementFromPoint(h, m);
      if (Fu = r, l || this.options.forceAutoScrollFallback || gl || Ur || $s) {
        ud(r, this.options, g, l);
        var v = go(g, !0);
        _d && (!Zs || h !== sd || m !== ld) && (Zs && tp(), Zs = setInterval(function() {
          var T = go(document.elementFromPoint(h, m), !0);
          T !== v && (v = T, Pu()), ud(r, d.options, T, l);
        }, 10), sd = h, ld = m);
      } else {
        if (!this.options.bubbleScroll || go(g, !0) === gr()) {
          Pu();
          return;
        }
        ud(r, this.options, go(g, !1), !1);
      }
    }
  }, Zr(o, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Pu() {
  en.forEach(function(o) {
    clearInterval(o.pid);
  }), en = [];
}
function tp() {
  clearInterval(Zs);
}
var ud = tm(function(o, a, r, l) {
  if (a.scroll) {
    var d = (o.touches ? o.touches[0] : o).clientX, h = (o.touches ? o.touches[0] : o).clientY, m = a.scrollSensitivity, g = a.scrollSpeed, v = gr(), T = !1, x;
    vd !== r && (vd = r, Pu(), Vs = a.scroll, x = a.scrollFn, Vs === !0 && (Vs = go(r, !0)));
    var b = 0, E = Vs;
    do {
      var P = E, z = ln(P), R = z.top, Y = z.bottom, B = z.left, W = z.right, q = z.width, M = z.height, $ = void 0, ue = void 0, fe = P.scrollWidth, Ee = P.scrollHeight, ne = Re(P), U = P.scrollLeft, Q = P.scrollTop;
      P === v ? ($ = q < fe && (ne.overflowX === "auto" || ne.overflowX === "scroll" || ne.overflowX === "visible"), ue = M < Ee && (ne.overflowY === "auto" || ne.overflowY === "scroll" || ne.overflowY === "visible")) : ($ = q < fe && (ne.overflowX === "auto" || ne.overflowX === "scroll"), ue = M < Ee && (ne.overflowY === "auto" || ne.overflowY === "scroll"));
      var G = $ && (Math.abs(W - d) <= m && U + q < fe) - (Math.abs(B - d) <= m && !!U), ae = ue && (Math.abs(Y - h) <= m && Q + M < Ee) - (Math.abs(R - h) <= m && !!Q);
      if (!en[b])
        for (var ge = 0; ge <= b; ge++)
          en[ge] || (en[ge] = {});
      (en[b].vx != G || en[b].vy != ae || en[b].el !== P) && (en[b].el = P, en[b].vx = G, en[b].vy = ae, clearInterval(en[b].pid), (G != 0 || ae != 0) && (T = !0, en[b].pid = setInterval(function() {
        l && this.layer === 0 && ze.active._onTouchMove(Fu);
        var Qe = en[this.layer].vy ? en[this.layer].vy * g : 0, Ae = en[this.layer].vx ? en[this.layer].vx * g : 0;
        typeof x == "function" && x.call(ze.dragged.parentNode[hi], Ae, Qe, o, Fu, en[this.layer].el) !== "continue" || nm(en[this.layer].el, Ae, Qe);
      }.bind({
        layer: b
      }), 24))), b++;
    } while (a.bubbleScroll && E !== v && (E = go(E, !1)));
    _d = T;
  }
}, 30), um = function(a) {
  var r = a.originalEvent, l = a.putSortable, d = a.dragEl, h = a.activeSortable, m = a.dispatchSortableEvent, g = a.hideGhostForTarget, v = a.unhideGhostForTarget;
  if (r) {
    var T = l || h;
    g();
    var x = r.changedTouches && r.changedTouches.length ? r.changedTouches[0] : r, b = document.elementFromPoint(x.clientX, x.clientY);
    v(), T && !T.el.contains(b) && (m("spill"), this.onSpill({
      dragEl: d,
      putSortable: l
    }));
  }
};
function Fd() {
}
Fd.prototype = {
  startIndex: null,
  dragStart: function(a) {
    var r = a.oldDraggableIndex;
    this.startIndex = r;
  },
  onSpill: function(a) {
    var r = a.dragEl, l = a.putSortable;
    this.sortable.captureAnimationState(), l && l.captureAnimationState();
    var d = Ya(this.sortable.el, this.startIndex, this.options);
    d ? this.sortable.el.insertBefore(r, d) : this.sortable.el.appendChild(r), this.sortable.animateAll(), l && l.animateAll();
  },
  drop: um
};
Zr(Fd, {
  pluginName: "revertOnSpill"
});
function Bd() {
}
Bd.prototype = {
  onSpill: function(a) {
    var r = a.dragEl, l = a.putSortable, d = l || this.sortable;
    d.captureAnimationState(), r.parentNode && r.parentNode.removeChild(r), d.animateAll();
  },
  drop: um
};
Zr(Bd, {
  pluginName: "removeOnSpill"
});
ze.mount(new Jw());
ze.mount(Bd, Fd);
var jw = Object.defineProperty, Yw = Object.defineProperties, Xw = Object.getOwnPropertyDescriptors, np = Object.getOwnPropertySymbols, Kw = Object.prototype.hasOwnProperty, Qw = Object.prototype.propertyIsEnumerable, ip = (o, a, r) => a in o ? jw(o, a, { enumerable: !0, configurable: !0, writable: !0, value: r }) : o[a] = r, vo = (o, a) => {
  for (var r in a || (a = {}))
    Kw.call(a, r) && ip(o, r, a[r]);
  if (np)
    for (var r of np(a))
      Qw.call(a, r) && ip(o, r, a[r]);
  return o;
}, Bu = (o, a) => Yw(o, Xw(a));
function cd(o) {
  o.parentElement !== null && o.parentElement.removeChild(o);
}
function rp(o, a, r) {
  const l = r === 0 ? o.children[0] : o.children[r - 1].nextSibling;
  o.insertBefore(a, l);
}
function e5() {
  return typeof window < "u" ? window.console : global.console;
}
const t5 = e5();
function n5(o) {
  const a = /* @__PURE__ */ Object.create(null);
  return function(l) {
    return a[l] || (a[l] = o(l));
  };
}
const i5 = /-(\w)/g, r5 = n5((o) => o.replace(i5, (a, r) => r.toUpperCase())), cm = ["Start", "Add", "Remove", "Update", "End"], dm = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], fm = ["Move"], o5 = [fm, cm, dm].flatMap((o) => o).map((o) => `on${o}`), yd = {
  manage: fm,
  manageAndEmit: cm,
  emit: dm
};
function a5(o) {
  return o5.indexOf(o) !== -1;
}
const s5 = [
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
function l5(o) {
  return s5.includes(o);
}
function u5(o) {
  return ["transition-group", "TransitionGroup"].includes(o);
}
function hm(o) {
  return ["id", "class", "role", "style"].includes(o) || o.startsWith("data-") || o.startsWith("aria-") || o.startsWith("on");
}
function pm(o) {
  return o.reduce((a, [r, l]) => (a[r] = l, a), {});
}
function c5({ $attrs: o, componentData: a = {} }) {
  const r = pm(Object.entries(o).filter(([l, d]) => hm(l)));
  return vo(vo({}, r), a);
}
function d5({ $attrs: o, callBackBuilder: a }) {
  const r = pm(mm(o));
  Object.entries(a).forEach(([d, h]) => {
    yd[d].forEach((m) => {
      r[`on${m}`] = h(m);
    });
  });
  const l = `[data-draggable]${r.draggable || ""}`;
  return Bu(vo({}, r), {
    draggable: l
  });
}
function mm(o) {
  return Object.entries(o).filter(([a, r]) => !hm(a)).map(([a, r]) => [r5(a), r]).filter(([a, r]) => !a5(a));
}
const op = (o) => {
  const a = o.el || Array.isArray(o.children) && o.children[0].el.parentNode;
  return a || console.error("使用 transition-group , 需要在slot中template内至少2层html标签"), a || {};
}, f5 = (o, a) => o.__draggable_context = a, ap = (o) => o.__draggable_context;
class h5 {
  constructor({
    nodes: { header: a, default: r, footer: l },
    root: d,
    realList: h
  }) {
    this.defaultNodes = r, this.children = [...a, ...r, ...l], this.externalComponent = d.externalComponent, this.rootTransition = d.transition, this.tag = d.tag, this.realList = h;
  }
  get _isRootComponent() {
    return this.externalComponent || this.rootTransition;
  }
  render(a, r) {
    const { tag: l, children: d, _isRootComponent: h } = this;
    return a(l, r, h ? { default: () => d } : d);
  }
  updated() {
    const { defaultNodes: a, realList: r } = this;
    a.forEach((l, d) => {
      f5(op(l), {
        element: r[d],
        index: d
      });
    });
  }
  getUnderlyingVm(a) {
    return ap(a);
  }
  getVmIndexFromDomIndex(a, r) {
    const { defaultNodes: l } = this, { length: d } = l, h = r.children, m = h.item(a);
    if (m === null)
      return d;
    const g = ap(m);
    if (g)
      return g.index;
    if (d === 0)
      return 0;
    const v = op(l[0]), T = [...h].findIndex((x) => x === v);
    return a < T ? 0 : d;
  }
}
function p5(o, a) {
  const r = o[a];
  return r ? r() : [];
}
function m5({ $slots: o, realList: a, getKey: r }) {
  const l = a || [], [d, h] = ["header", "footer"].map((v) => p5(o, v)), { item: m } = o;
  if (!m)
    throw new Error("draggable element must have an item slot");
  const g = l.flatMap((v, T) => m({ element: v, index: T }).map((x) => (x.key = r(v), x.props = Bu(vo({}, x.props || {}), { "data-draggable": !0 }), x)));
  if (g.length !== l.length)
    throw new Error("Item slot must have only one child");
  return {
    header: d,
    footer: h,
    default: g
  };
}
function g5(o) {
  const a = u5(o), r = !l5(o) && !a;
  return {
    transition: a,
    externalComponent: r,
    tag: r ? Xe(o) : a ? g1 : o
  };
}
function v5({ $slots: o, tag: a, realList: r, getKey: l }) {
  const d = m5({ $slots: o, realList: r, getKey: l }), h = g5(a);
  return new h5({ nodes: d, root: h, realList: r });
}
function gm(o, a) {
  Ot(() => this.$emit(o.toLowerCase(), a));
}
function vm(o) {
  return (a, r) => {
    if (this.realList !== null)
      return this[`onDrag${o}`](a, r);
  };
}
function _5(o) {
  const a = vm.call(this, o);
  return (r, l) => {
    a.call(this, r, l), gm.call(this, o, r);
  };
}
let dd = null;
const y5 = {
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
}, w5 = [
  "update:modelValue",
  "change",
  ...[...yd.manageAndEmit, ...yd.emit].map((o) => o.toLowerCase())
], b5 = $e({
  name: "draggable",
  inheritAttrs: !1,
  props: y5,
  emits: w5,
  data() {
    return {
      error: !1
    };
  },
  render() {
    try {
      this.error = !1;
      const { $slots: o, $attrs: a, tag: r, componentData: l, realList: d, getKey: h } = this, m = v5({
        $slots: o,
        tag: r,
        realList: d,
        getKey: h
      });
      this.componentStructure = m;
      const g = c5({ $attrs: a, componentData: l });
      return m.render(Vr, g);
    } catch (o) {
      return this.error = !0, Vr("pre", { style: { color: "red" } }, o.stack);
    }
  },
  created() {
    this.list !== null && this.modelValue !== null && t5.error("modelValue and list props are mutually exclusive! Please set one or another.");
  },
  mounted() {
    if (this.error)
      return;
    const { $attrs: o, $el: a, componentStructure: r } = this;
    r.updated();
    const l = d5({
      $attrs: o,
      callBackBuilder: {
        manageAndEmit: (h) => _5.call(this, h),
        emit: (h) => gm.bind(this, h),
        manage: (h) => vm.call(this, h)
      }
    }), d = a.nodeType === 1 ? a : a.parentElement;
    this._sortable = new ze(d, l), this.targetDomElement = d, d.__draggable_component__ = this;
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
      return typeof o == "function" ? o : (a) => a[o];
    }
  },
  watch: {
    $attrs: {
      handler(o) {
        const { _sortable: a } = this;
        a && mm(o).forEach(([r, l]) => {
          a.option(r, l);
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
      Ot(() => this.$emit("change", o));
    },
    alterList(o) {
      if (this.list) {
        o(this.list);
        return;
      }
      const a = [...this.modelValue];
      o(a), this.$emit("update:modelValue", a);
    },
    spliceList() {
      const o = (a) => a.splice(...arguments);
      this.alterList(o);
    },
    updatePosition(o, a) {
      const r = (l) => l.splice(a, 0, l.splice(o, 1)[0]);
      this.alterList(r);
    },
    getRelatedContextFromMoveEvent({ to: o, related: a }) {
      const r = this.getUnderlyingPotencialDraggableComponent(o);
      if (!r)
        return { component: r };
      const l = r.realList, d = { list: l, component: r };
      if (o !== a && l) {
        const h = r.getUnderlyingVm(a) || {};
        return vo(vo({}, h), d);
      }
      return d;
    },
    getVmIndexFromDomIndex(o) {
      return this.componentStructure.getVmIndexFromDomIndex(o, this.targetDomElement);
    },
    onDragStart(o) {
      this.context = this.getUnderlyingVm(o.item), o.item._underlying_vm_ = this.clone(this.context.element), dd = o.item;
    },
    onDragAdd(o) {
      const a = o.item._underlying_vm_;
      if (a === void 0)
        return;
      cd(o.item);
      const r = this.getVmIndexFromDomIndex(o.newIndex);
      this.spliceList(r, 0, a);
      const l = { element: a, newIndex: r };
      this.emitChanges({ added: l });
    },
    onDragRemove(o) {
      if (rp(this.$el, o.item, o.oldIndex), o.pullMode === "clone") {
        cd(o.clone);
        return;
      }
      const { index: a, element: r } = this.context;
      this.spliceList(a, 1);
      const l = { element: r, oldIndex: a };
      this.emitChanges({ removed: l });
    },
    onDragUpdate(o) {
      cd(o.item), rp(o.from, o.item, o.oldIndex);
      const a = this.context.index, r = this.getVmIndexFromDomIndex(o.newIndex);
      this.updatePosition(a, r);
      const l = { element: this.context.element, oldIndex: a, newIndex: r };
      this.emitChanges({ moved: l });
    },
    computeFutureIndex(o, a) {
      if (!o.element)
        return 0;
      const r = [...a.to.children].filter((m) => m.style.display !== "none"), l = r.indexOf(a.related), d = o.component.getVmIndexFromDomIndex(l);
      return r.indexOf(dd) !== -1 || !a.willInsertAfter ? d : d + 1;
    },
    onDragMove(o, a) {
      const { move: r, realList: l } = this;
      if (!r || !l)
        return !0;
      const d = this.getRelatedContextFromMoveEvent(o), h = this.computeFutureIndex(d, o), m = Bu(vo({}, this.context), {
        futureIndex: h
      }), g = Bu(vo({}, o), {
        relatedContext: d,
        draggedContext: m
      });
      return r(g, a);
    },
    onDragEnd() {
      dd = null;
    }
  }
}), _n = [];
for (let o = 0; o < 256; ++o)
  _n.push((o + 256).toString(16).slice(1));
function S5(o, a = 0) {
  return (_n[o[a + 0]] + _n[o[a + 1]] + _n[o[a + 2]] + _n[o[a + 3]] + "-" + _n[o[a + 4]] + _n[o[a + 5]] + "-" + _n[o[a + 6]] + _n[o[a + 7]] + "-" + _n[o[a + 8]] + _n[o[a + 9]] + "-" + _n[o[a + 10]] + _n[o[a + 11]] + _n[o[a + 12]] + _n[o[a + 13]] + _n[o[a + 14]] + _n[o[a + 15]]).toLowerCase();
}
const T5 = new Uint8Array(16);
function x5() {
  return crypto.getRandomValues(T5);
}
function ji(o, a, r) {
  return crypto.randomUUID ? crypto.randomUUID() : E5(o);
}
function E5(o, a, r) {
  o = o || {};
  const l = o.random ?? o.rng?.() ?? x5();
  if (l.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return l[6] = l[6] & 15 | 64, l[8] = l[8] & 63 | 128, S5(l);
}
class _m {
  constructor(a) {
    this.geoJson = {}, this.url = a;
  }
  async fetch() {
    return this.geoJson = await (await fetch(this.url)).json(), this.geoJson;
  }
}
const C5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _m
}, Symbol.toStringTag, { value: "Module" })), A5 = { class: "table-crud__slot" }, P5 = { class: "p-1" }, L5 = { class: "p-1" }, O5 = { class: "p-1" }, M5 = { class: "p-1" }, I5 = { class: "table-inline__cell" }, k5 = ["onClick"], D5 = { class: "table-inline__cell" }, F5 = ["onClick"], B5 = { class: "table-inline__cell" }, R5 = ["onClick"], wd = /* @__PURE__ */ $e({
  __name: "ConditionSettings",
  props: {
    modelValue: {
      default: () => oa([])
    },
    modelModifiers: {},
    thingProps: {
      default: () => oa(
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
    const a = pi(o, "modelValue"), r = le(), l = le(), d = le({
      text: "==",
      selector: Mi.equals
    }), h = pi(o, "thingProps"), m = [
      {
        text: "==",
        selector: Mi.equals
      },
      {
        text: ">",
        selector: Mi.greaterThen
      },
      {
        text: ">=",
        selector: Mi.greaterThenEquals
      },
      {
        text: "<",
        selector: Mi.lessThen
      },
      {
        text: "<=",
        selector: Mi.lessThenEquals
      },
      {
        text: "!=",
        selector: Mi.notEQuals
      }
    ], g = [
      { key: "prop", sortable: !0 },
      { key: "comperator", sortable: !0 },
      { key: "value", sortable: !0 },
      { key: "actions", width: 80 }
    ], v = (x) => {
      const b = {
        text: x,
        selector: x
      };
      return h.value.push(b), b;
    }, T = () => {
      a.value.push({
        comperator: d.value.selector,
        value: l.value,
        prop: r.value.selector
      }), d.value = {
        text: "==",
        selector: Mi.equals
      }, l.value = "", r.value = "";
    };
    return (x, b) => {
      const E = Xe("VaSelect"), P = Xe("VaInput"), z = Xe("VaButton"), R = Xe("VaValue"), Y = Xe("VaDataTable");
      return N(), Be(Y, {
        columns: g,
        items: a.value,
        class: "table-crud ds prop",
        striped: "",
        id: "proptableConditions"
      }, {
        headerAppend: _e(() => [
          se("tr", A5, [
            se("th", P5, [
              re(E, {
                width: "230px",
                modelValue: r.value,
                "onUpdate:modelValue": b[0] || (b[0] = (B) => r.value = B),
                options: h.value,
                "track-by": (B) => B.selector,
                "allow-create": "",
                placeholder: "Select an option",
                onCreateNew: b[1] || (b[1] = (B) => {
                  r.value = v(B);
                })
              }, null, 8, ["modelValue", "options", "track-by"])
            ]),
            se("th", L5, [
              re(E, {
                width: "230px",
                modelValue: d.value,
                "onUpdate:modelValue": b[2] || (b[2] = (B) => d.value = B),
                options: m,
                "track-by": (B) => B.selector
              }, null, 8, ["modelValue", "track-by"])
            ]),
            se("th", O5, [
              h.value.find((B) => B.selector == r.value?.selector)?.suggestions ? (N(), Be(E, {
                key: 0,
                width: "230px",
                modelValue: l.value,
                "onUpdate:modelValue": b[3] || (b[3] = (B) => l.value = B),
                options: h.value.find((B) => B.selector == r.value?.selector)?.suggestions,
                "track-by": (B) => B.selector,
                "allow-create": "",
                placeholder: "Select an option",
                onCreateNew: b[4] || (b[4] = (B) => {
                  l.value = B;
                })
              }, null, 8, ["modelValue", "options", "track-by"])) : (N(), Be(P, {
                key: 1,
                modelValue: l.value,
                "onUpdate:modelValue": b[5] || (b[5] = (B) => l.value = B),
                width: "230px",
                placeholder: "Enter value"
              }, null, 8, ["modelValue"]))
            ]),
            se("th", M5, [
              re(z, {
                disabled: !r.value || !l.value,
                block: "",
                style: { "min-width": "40px", float: "right" },
                onClick: T
              }, {
                default: _e(() => [...b[6] || (b[6] = [
                  pt(" Add ", -1)
                ])]),
                _: 1
              }, 8, ["disabled"])
            ])
          ])
        ]),
        "cell(actions)": _e(({ rowIndex: B }) => [
          re(z, {
            class: "ml-3",
            icon: "delete",
            preset: "plain",
            style: { "min-width": "40px", float: "right" },
            onClick: () => {
              a.value.splice(B, 1);
            }
          }, null, 8, ["onClick"])
        ]),
        "cell(prop)": _e(({ value: B, row: W }) => [
          se("div", I5, [
            re(R, null, {
              default: _e((q) => [
                q.value ? (N(), Be(E, {
                  key: 0,
                  "model-value": B,
                  options: h.value,
                  "track-by": (M) => M.selector,
                  "allow-create": "",
                  placeholder: "Select an option",
                  onCreateNew: (M) => {
                    const $ = v(M);
                    W.rowData.prop = $.selector, q.value = !1;
                  },
                  "onUpdate:modelValue": (M) => {
                    W.rowData.prop = M.selector, q.value = !1;
                  }
                }, null, 8, ["model-value", "options", "track-by", "onCreateNew", "onUpdate:modelValue"])) : (N(), te("span", {
                  key: 1,
                  class: mr([q.value ? "table-inline__item--hidden" : "", "table-inline__item"]),
                  onClick: (M) => q.value = !0
                }, rt(B), 11, k5))
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        "cell(comperator)": _e(({ value: B, row: W }) => [
          se("div", D5, [
            re(R, null, {
              default: _e((q) => [
                q.value ? (N(), Be(E, {
                  key: 0,
                  "model-value": { text: m.filter((M) => M.selector == B)[0].text, selector: B },
                  options: m,
                  "track-by": (M) => M.selector,
                  "onUpdate:modelValue": (M) => {
                    W.rowData.comperator = M.selector, q.value = !1;
                  }
                }, null, 8, ["model-value", "track-by", "onUpdate:modelValue"])) : (N(), te("span", {
                  key: 1,
                  class: mr([q.value ? "table-inline__item--hidden" : "", "table-inline__item"]),
                  onClick: (M) => q.value = !0
                }, rt(m.filter((M) => M.selector == B)[0].text), 11, F5))
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        "cell(value)": _e(({ value: B, row: W }) => [
          se("div", B5, [
            re(R, null, {
              default: _e((q) => [
                q.value ? (N(), Be(P, {
                  key: 0,
                  "model-value": B,
                  onBlur: (M) => q.value = !1,
                  onChange: (M) => {
                    W.rowData.value = M.target.value, q.value = !1;
                  }
                }, null, 8, ["model-value", "onBlur", "onChange"])) : (N(), te("span", {
                  key: 1,
                  class: mr([q.value ? "table-inline__item--hidden" : "", "table-inline__item"]),
                  onClick: (M) => q.value = !0
                }, rt(B), 11, R5))
              ]),
              _: 2
            }, 1024)
          ])
        ]),
        _: 1
      }, 8, ["items"]);
    };
  }
}), z5 = { class: "pmap_container" }, N5 = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", G5 = 5, W5 = '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', V5 = /* @__PURE__ */ $e({
  __name: "MapPreviewPoint",
  setup(o) {
    const a = [50.93115286, 11.60392726], r = le(null);
    return Pt(() => {
      r.value && r.value.leafletObject && r.value.leafletObject.invalidateSize();
    }), (l, d) => (N(), te("div", z5, [
      re(be(Cd), {
        id: "map_t",
        ref_key: "map",
        ref: r,
        center: a,
        "max-zoom": 21,
        zoom: G5,
        style: { height: "100%" }
      }, {
        default: _e(() => [
          re(be(Ld), {
            attribution: W5,
            options: {
              maxNativeZoom: 19,
              maxZoom: 25
            },
            url: N5
          }),
          Rs(l.$slots, "default", {}, void 0, !0)
        ]),
        _: 3
      }, 8, ["center"])
    ]));
  }
}), Z5 = /* @__PURE__ */ vi(V5, [["__scopeId", "data-v-c72cb17a"]]), U5 = { class: "flex flex-col md6 pa-3" }, H5 = { class: "flex flex-col md6 pa-3" }, q5 = { class: "inner" }, $5 = { class: "inner" }, J5 = ["src"], j5 = {
  key: 1,
  class: "placeholder"
}, Y5 = /* @__PURE__ */ $e({
  __name: "PointStyler",
  props: {
    modelValue: {
      default: () => oa({
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
    v1((d) => ({
      v11ef15f9: a.value.pointPin.color
    }));
    const a = pi(o, "modelValue"), r = [
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
    return (d, h) => {
      const m = Xe("VaButtonToggle"), g = Xe("VaSelect"), v = Xe("VaInput"), T = Xe("VaDivider"), x = Xe("va-color-input"), b = Xe("VaCheckbox");
      return N(), te(xe, null, [
        se("div", U5, [
          re(m, {
            modelValue: a.value.point_render_as,
            "onUpdate:modelValue": h[0] || (h[0] = (E) => a.value.point_render_as = E),
            options: l,
            "border-color": "primary",
            preset: "secondary"
          }, null, 8, ["modelValue"]),
          a.value.point_render_as == "icon" ? (N(), Be(be(b1), {
            key: 0,
            modelValue: a.value.point,
            "onUpdate:modelValue": h[1] || (h[1] = (E) => a.value.point = E)
          }, null, 8, ["modelValue"])) : Le("", !0),
          a.value.point_render_as == "prop" ? (N(), Be(g, {
            key: 1,
            modelValue: a.value.point_prop,
            "onUpdate:modelValue": h[2] || (h[2] = (E) => a.value.point_prop = E),
            options: r,
            label: "DataStream Prop",
            placeholder: "Select an option",
            "text-by": "text",
            "value-by": "selector"
          }, null, 8, ["modelValue"])) : Le("", !0),
          a.value.point_render_as == "image" ? (N(), te(xe, { key: 2 }, [
            re(v, {
              modelValue: a.value.point_image_url,
              "onUpdate:modelValue": h[3] || (h[3] = (E) => a.value.point_image_url = E),
              label: "Image URL",
              placeholder: "https://example.com/image.png"
            }, null, 8, ["modelValue"]),
            re(v, {
              modelValue: a.value.point_image_size,
              "onUpdate:modelValue": h[4] || (h[4] = (E) => a.value.point_image_size = E),
              modelModifiers: { number: !0 },
              type: "number",
              label: "Image Size (px)",
              placeholder: "32"
            }, null, 8, ["modelValue"])
          ], 64)) : Le("", !0),
          a.value.point_render_as != "none" ? (N(), te(xe, { key: 3 }, [
            re(T, { class: "mb15" }),
            re(x, {
              modelValue: a.value.pointPin.color,
              "onUpdate:modelValue": h[5] || (h[5] = (E) => a.value.pointPin.color = E),
              class: "pin-color",
              label: "Pin Color"
            }, null, 8, ["modelValue"]),
            re(b, {
              modelValue: a.value.pointPin.solid,
              "onUpdate:modelValue": h[6] || (h[6] = (E) => a.value.pointPin.solid = E),
              label: "Solid (vollflächig)"
            }, null, 8, ["modelValue"])
          ], 64)) : Le("", !0)
        ]),
        se("div", H5, [
          re(Z5, Su({ ref: "MapPrev2" }, a.value.point), {
            default: _e(() => [
              re(be(Qs), { "lat-lng": [50.92828047934907, 11.587408017353823] }, {
                default: _e(() => [
                  re(be(Ks), { "class-name": "someExtraClass" }, {
                    default: _e(() => [
                      a.value.point_render_as == "icon" ? (N(), te("div", {
                        key: 0,
                        class: mr(["pin", "icon", { solid: a.value.pointPin.solid }])
                      }, [
                        se("div", q5, [
                          re(be(dp), {
                            config: a.value.point,
                            configv: a.value.point,
                            "onUpdate:configv": h[7] || (h[7] = (E) => a.value.point = E)
                          }, null, 8, ["config", "configv"])
                        ])
                      ], 2)) : Le("", !0),
                      a.value.point_render_as == "prop" ? (N(), te("div", {
                        key: 1,
                        class: mr(["pin", "contain", "marker", { solid: a.value.pointPin.solid }])
                      }, [
                        se("div", $5, rt(a.value.point_prop), 1)
                      ], 2)) : Le("", !0),
                      a.value.point_render_as == "image" ? (N(), te("div", {
                        key: 2,
                        class: "image-marker",
                        style: $a({ width: (a.value.point_image_size || 32) + "px", height: (a.value.point_image_size || 32) + "px" })
                      }, [
                        a.value.point_image_url ? (N(), te("img", {
                          key: 0,
                          src: a.value.point_image_url,
                          style: { width: "100%", height: "100%", objectFit: "contain" }
                        }, null, 8, J5)) : (N(), te("div", j5, "No Image"))
                      ], 4)) : Le("", !0)
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
}), ym = /* @__PURE__ */ vi(Y5, [["__scopeId", "data-v-27027675"]]), X5 = "FeatureCollection", K5 = /* @__PURE__ */ JSON.parse('[{"type":"Feature","id":0,"properties":{"ID_0":86,"ISO":"DEU","NAME_ENGLI":"Germany","NAME_ISO":"GERMANY","NAME_FAO":"Germany","NAME_LOCAL":"Deutschland","NAME_OBSOL":null,"NAME_VARIA":"Germany","NAME_NONLA":null,"NAME_FRENC":"Allemagne","NAME_SPANI":"Alemania","NAME_RUSSI":"????????","NAME_ARABI":"???????","NAME_CHINE":"??","WASPARTOF":null,"CONTAINS":"East Germany|West Germany|DDR","SOVEREIGN":"Germany","ISO2":"DE","WWW":null,"FIPS":"GM","ISON":276,"VALIDFR":"Unknown","VALIDTO":"Present","EUmember":1},"geometry":{"type":"MultiPolygon","coordinates":[[[[8.407297932191138,55.04395228653645],[8.442500114441145,55.0159721374514],[8.353609085083235,54.967361450195654],[8.366944313049544,54.90236282348644],[8.429720878601302,54.87763977050787],[8.812039375305233,54.9167366027832],[9.224779129028263,54.85595321655279],[9.282591819763411,54.80223464965832],[9.408679962158317,54.841171264648494],[9.435277938842773,54.788471221923885],[9.613611221313704,54.87597274780296],[9.603055953979776,54.83152770996105],[9.84305572509794,54.756248474121094],[9.955279350281046,54.780139923095646],[10.034722328186263,54.67235946655285],[9.983054161071891,54.701248168945426],[9.963891689870369,54.67303628596345],[10.034166336059798,54.66986083984375],[10.02750015258789,54.55041503906284],[9.840277671813965,54.46736145019537],[10.199167251587141,54.45597076416027],[10.13194561004633,54.311248779296875],[10.228056907653865,54.413471221923885],[10.318612098693961,54.43569564819353],[10.704722404479924,54.304862976074276],[10.928610801696777,54.381805419922216],[11.128055572509766,54.39069366455084],[11.058609962463436,54.35430526733438],[11.093610763550032,54.19791793823248],[10.75416564941412,54.05486297607433],[10.890831947326603,53.955696105956974],[11.179167747497502,54.01569366455084],[11.258610725403116,53.98485946655296],[11.258610725403116,53.93402862548851],[11.335276603698844,53.95847320556646],[11.45472240447998,53.900417327881144],[11.483610153198242,53.968471527099666],[11.378055572509936,53.997360229492244],[11.492501258850325,54.02291488647472],[11.490279197693042,53.968193054199276],[11.62583255767845,54.08958435058588],[11.525277137756348,54.07180404663086],[11.682498931884766,54.15319442749018],[12.087498664856184,54.18319320678711],[12.124721527099894,54.150138854980526],[12.09527778625494,54.18097305297857],[12.339165687561263,54.2979164123538],[12.519721031188965,54.484306335449276],[12.962499618530387,54.437637329101676],[12.68351455577495,54.40644354068151],[12.715277671814022,54.404304504394474],[12.678054809570312,54.37014007568371],[12.786945343017862,54.3962516784668],[12.810278892517147,54.3451385498048],[13.019721984863338,54.43902587890659],[13.093609809875716,54.366806030273665],[13.105833053588867,54.281806945800895],[13.286388397216797,54.235137939453296],[13.346388816833723,54.18041610717819],[13.318054199219034,54.15986251831066],[13.415834426880224,54.17514038085943],[13.382498741150187,54.14236068725586],[13.456945419311523,54.090694427490234],[13.696389198303223,54.17180633544956],[13.806944847107104,54.10319519042969],[13.74416637420677,54.029304504394645],[13.914167404174805,53.92235946655302],[13.824722290039404,53.866249084473],[13.937500953674316,53.90847396850597],[13.90583419799816,53.98986053466797],[13.965278625488452,53.99013900756853],[13.959721565246582,53.93402862548851],[14.042499542236555,53.942081451416016],[14.046944618225268,53.99652862548845],[14.00347855685085,54.0366769060455],[14.221389770507926,53.93013763427729],[14.186329841613997,53.91558074951217],[14.2173366546632,53.865417480469205],[13.806388854980412,53.85819625854492],[14.038612365722884,53.75513839721674],[14.2830562591555,53.73875045776384],[14.215276718139592,53.70264053344738],[14.273162841796875,53.69930648803711],[14.324908256530762,53.61864852905296],[14.302708625793684,53.54261016845703],[14.448929786682186,53.26163864135748],[14.378918647766113,53.204158782958984],[14.345703125000057,53.052917480468864],[14.142452239990291,52.961112976074276],[14.121270179748649,52.84027099609369],[14.639061927795638,52.58003234863287],[14.600604057312069,52.53302383422857],[14.631249427795638,52.499130249023665],[14.528908729553166,52.39641189575218],[14.570899963378906,52.2895622253418],[14.699570655822868,52.24108886718756],[14.669348716736067,52.12155151367199],[14.741278648376522,52.07339096069347],[14.70477771759056,51.94266128540062],[14.586701393127385,51.823604583740234],[14.738728523254622,51.66687011718744],[14.698139190673942,51.55850982666027],[14.933858871460018,51.482269287109375],[14.967818260192928,51.3544158935548],[15.028479576110897,51.30979919433605],[14.930111885070744,50.99140548706072],[14.8050794601441,50.828918457031534],[14.710870742797965,50.826759338379134],[14.611928939819393,50.85478210449219],[14.651672363281364,50.93264007568365],[14.560112953186092,50.92348480224615],[14.595055580139274,50.988510131836165],[14.501680374145508,51.05150604248075],[14.39741039276123,51.00828170776373],[14.29401683807373,51.05416488647461],[14.246868133545036,50.97320175170904],[14.400946617126465,50.94234848022472],[14.372268676757926,50.88858032226568],[13.954609870910872,50.80371093750006],[13.850809097290096,50.71820068359375],[13.548975944519043,50.713214874267635],[13.465190887451229,50.59648895263689],[13.374910354614315,50.643661499023665],[13.326787948608512,50.581813812255916],[13.248618125915641,50.59226989746088],[13.195990562439079,50.500591278076286],[13.0332670211792,50.50854873657232],[12.977046012878645,50.41427230834961],[12.828769683837834,50.45862197875988],[12.705128669738826,50.39775848388672],[12.51611328125,50.40008544921898],[12.364088058471737,50.27642440795904],[12.32758998870844,50.17972946166998],[12.282715797424373,50.18267822265631],[12.194091796874943,50.32287597656256],[12.085860252380428,50.25535202026384],[12.198919296264876,50.19562149047863],[12.19906044006359,50.11182022094732],[12.256030082702637,50.062278747558594],[12.547736167907715,49.92714309692383],[12.472072601318473,49.79027175903349],[12.402890205383244,49.75516128540045],[12.527859687805176,49.68775939941435],[12.588051795959473,49.54399871826166],[12.645830154418945,49.53105926513672],[12.661074638366813,49.43216705322294],[12.78410530090332,49.35190582275402],[13.033589363098258,49.30863952636736],[13.180210113525618,49.144439697265625],[13.403729438781738,49.05178070068382],[13.401620864868221,48.98391342163103],[13.63125991821289,48.95058059692383],[13.835957527160701,48.7750511169433],[13.78705883026123,48.721511840820426],[13.809944152832088,48.590904235840014],[13.721092224121207,48.51679229736334],[13.503158569335938,48.59651184082037],[13.435749053955078,48.564682006835994],[13.410618782043514,48.377738952636776],[13.285719871520996,48.30517196655279],[12.868214607238826,48.20366668701183],[12.753028869628963,48.11729049682623],[13.00114727020275,47.8522300720216],[12.91126728057867,47.73124313354498],[13.043539047241325,47.720989227295206],[13.105588912963867,47.639202117920036],[13.013463973999023,47.46576690673845],[12.799818038940373,47.561462402343864],[12.826677322387695,47.61626052856451],[12.782772064209098,47.675922393799055],[12.605334281921444,47.67924880981457],[12.506064414978141,47.62885284423828],[12.43596267700218,47.70073318481451],[12.258779525756836,47.67621994018549],[12.254279136657772,47.739990234375114],[12.17435169219982,47.698875427246094],[12.2092800140382,47.60120010375982],[11.636343955993766,47.598270416259766],[11.58102035522461,47.51182174682634],[11.437379837036133,47.51325988769548],[11.388031959533805,47.47192382812523],[11.424080848693961,47.44562149047846],[11.341606140136776,47.45182418823248],[11.27390003204357,47.391010284423885],[11.224139213562012,47.391269683837834],[11.246058464050293,47.43478012084961],[10.977520942687931,47.39611053466808],[10.926508903503532,47.478080749511776],[10.862998962402344,47.47803115844738],[10.91859436035162,47.51609420776373],[10.883132934570426,47.53810501098644],[10.772025108337402,47.516143798828125],[10.600060462951888,47.57365036010742],[10.561381340026912,47.53593063354498],[10.432245254516829,47.58555984497076],[10.471569061279524,47.43306350708008],[10.433580398559798,47.378719329833984],[10.170168876648177,47.26990127563522],[10.226869583130338,47.3929176330567],[10.095960617065373,47.3548698425293],[10.090755462646598,47.45659255981451],[9.997338294983138,47.48622512817394],[9.971186637878759,47.55048370361328],[9.87366962432867,47.53071975708008],[9.774218559265364,47.59680175781267],[9.688732147217138,47.543983459472656],[9.044014930725098,47.82368850708008],[9.221139907837028,47.66815185546875],[9.164094924927213,47.65358352661133],[8.99164009094244,47.747985839844034],[8.941365242004451,47.731822967529354],[9.006369590759277,47.69509124755882],[8.891834259033374,47.65522384643566],[8.808216094970987,47.74168014526367],[8.771158218383846,47.71976852416992],[8.79814815521263,47.67990875244152],[8.727890014648608,47.696842193603686],[8.730445861816634,47.766109466552734],[8.56799125671381,47.8143768310548],[8.404397964477653,47.680049896240405],[8.473678588867188,47.64335632324219],[8.607149124145621,47.675994873046875],[8.584686279296875,47.60031127929693],[8.520914077758846,47.63809585571306],[8.458548545837402,47.60595703125017],[8.488503456115836,47.581394195556754],[8.379540443420467,47.570251464843864],[8.202873229980526,47.62615585327154],[8.087834358215446,47.56288528442394],[7.944071769714355,47.549701690673885],[7.820772171020621,47.5946998596192],[7.669493198394889,47.53711700439453],[7.632383823394775,47.5624237060548],[7.670560836792106,47.59326171875006],[7.607770919799862,47.580959320068416],[7.512126922607479,47.696090698242244],[7.62215709686285,47.97365951538109],[7.568590164184684,48.0363388061524],[7.577859401702995,48.121391296386776],[7.745231628417969,48.32982635498047],[7.733546733856315,48.39868545532238],[7.835922718048039,48.63367462158203],[8.087015151977653,48.802013397217024],[8.22887897491455,48.97063064575218],[7.937040328979435,49.05623245239258],[7.635286331176815,49.05416870117199],[7.445586204528809,49.184024810791016],[7.293400287628174,49.115158081054744],[7.098150730133057,49.15433120727545],[7.05802440643356,49.112586975097656],[7.033706188201904,49.18826293945324],[6.924295425415494,49.223075866699276],[6.840444087982178,49.21423339843767],[6.834462642669791,49.15137863159214],[6.737987518310831,49.16456985473633],[6.53541898727417,49.434162139892635],[6.35482120513916,49.46498489379883],[6.363647937774658,49.57404708862322],[6.516485214233398,49.724178314208984],[6.528252124786377,49.808570861816406],[6.312281131744612,49.83549880981457],[6.098370075225944,50.05990982055687],[6.189638137817383,50.189464569091854],[6.170382022857893,50.23625564575207],[6.408339977264632,50.33306884765619],[6.33975791931158,50.37989425659174],[6.374671936035213,50.44594955444336],[6.330028057098446,50.49364471435558],[6.172194004059065,50.55051422119158],[6.278378963470516,50.61639785766596],[6.173087120056209,50.62143325805687],[6.118731975555477,50.708736419677905],[5.963199138641357,50.79505157470703],[6.0738401412965,50.846858978271484],[6.082940101623649,50.921798706054744],[6.015170097351074,50.93315887451172],[6.030001163482893,50.98336410522472],[5.903690814971924,50.978271484375284],[5.872058868408317,51.04341125488281],[5.969543933868522,51.034469604492415],[6.171799182891846,51.15293121337896],[6.144780158996809,51.17371749877941],[6.193139076233138,51.19166183471674],[6.091834068298397,51.175292968750284],[6.078186035156193,51.2447128295899],[6.231968879699764,51.36598205566412],[6.220355987548942,51.50917053222656],[6.090958118438778,51.605220794677734],[6.118769168853703,51.6604576110841],[5.964007854461727,51.74161148071289],[6.004777908325309,51.76816940307623],[5.964649200439453,51.824409484863395],[6.168982028961295,51.84503173828142],[6.107149124145565,51.88898849487299],[6.158889770507812,51.905384063720646],[6.417467117309798,51.82563400268566],[6.402299880981388,51.87480163574219],[6.742709159851131,51.89905166625988],[6.835361003875846,51.99552917480486],[6.698178768157959,52.040119171142805],[6.700688838958968,52.07379150390648],[7.069309234619254,52.23925399780296],[7.029718875884953,52.29431915283209],[7.07911586761486,52.38272476196295],[7.006279945373649,52.469501495361385],[6.950539112091064,52.43696975708002],[6.764862060546875,52.464931488037166],[6.683791160583496,52.55606460571312],[6.768260955810604,52.56516647338867],[6.724298000335807,52.59061050415045],[6.743810176849422,52.64709091186529],[7.051859855651912,52.63584899902344],[7.094276905059871,52.84645080566429],[7.26148796081543,52.997539520263615],[7.226968765258846,53.124462127685604],[7.284560203552189,53.19956970214872],[7.205277919769514,53.23880767822271],[7.249166965484562,53.32986068725586],[6.998610973358154,53.361251831054915],[7.034166812896729,53.53319549560558],[7.13361120223999,53.53236007690424],[7.09027719497675,53.57652664184576],[7.158053874969539,53.627918243408146],[7.316944122314794,53.683471679687614],[8.015831947326944,53.71069335937506],[8.172499656677246,53.554584503173885],[8.155276298523177,53.513748168945426],[8.06472206115734,53.50597381591797],[8.073611259460677,53.46486282348633],[8.252499580383244,53.399028778076115],[8.316389083862418,53.46625137329124],[8.316389083862418,53.5220832824707],[8.230832099914778,53.52041625976574],[8.271943092346419,53.609859466552734],[8.516389846801701,53.55625152587902],[8.556944847106877,53.52569580078131],[8.519721984863338,53.50097274780279],[8.570834159851074,53.51819610595703],[8.483611106872786,53.69430541992193],[8.608056068420467,53.87874984741228],[8.883610725402946,53.82791519165045],[9.09972286224371,53.86291503906256],[8.963610649109114,53.894584655761776],[8.819722175598258,54.02152633666998],[8.98250007629423,54.04652786254911],[8.927499771118164,54.131805419921875],[8.85916709899908,54.12263870239269],[8.807498931884709,54.173194885253906],[8.83583259582548,54.251804351806584],[8.951944351196516,54.31289291381836],[8.846387863159237,54.26291656494169],[8.580278396606559,54.30402755737316],[8.60416603088413,54.357917785644645],[8.685832023620605,54.35708236694347],[8.608610153198185,54.38624954223644],[8.893611907959212,54.41208267211914],[9.02361106872587,54.472637176513786],[8.989167213440396,54.519306182861385],[8.903610229492188,54.46069335937506],[8.806388854980526,54.47041702270508],[8.890276908874682,54.59263992309582],[8.813055992126749,54.597362518311],[8.822500228881836,54.64597320556675],[8.687498092651595,54.72986221313516],[8.590276718139762,54.885139465331974],[8.41638755798374,54.84708404541021],[8.310277938842887,54.874305725097656],[8.279722213745174,54.75180435180687],[8.298054695129508,54.909305572509766],[8.407297932191138,55.04395228653645]],[[12.645990473625632,54.40224791003495],[12.435832977295036,54.378749847412166],[12.363612174987793,54.26597213745117],[12.460276603699072,54.24847412109369],[12.409167289733887,54.27986145019537],[12.645990473625632,54.40224791003495]],[[9.941296802167107,54.63977103947349],[9.933056831359806,54.627639770507926],[9.859076590154903,54.5913954629662],[9.938055038452319,54.62347412109392],[9.941296802167107,54.63977103947349]],[[9.740505208965892,54.53330511971416],[9.7124996185305,54.519584655761946],[9.545277595520133,54.5093040466308],[9.574166297912711,54.475139617920036],[9.624165534973372,54.51152801513672],[9.714722633362271,54.49124908447277],[9.740505208965892,54.53330511971416]]],[[[13.94762775222483,54.063982999902095],[13.910832405090275,54.064304351806754],[13.862501144409407,53.99930572509771],[13.858055114746207,54.04847335815441],[13.7691659927371,54.01902770996128],[13.812499046325684,54.09902954101568],[13.749167442322118,54.159027099609716],[13.803610801696834,54.17847061157232],[13.870834350586051,54.10152816772478],[13.94762775222483,54.063982999902095]]],[[[8.411785232872631,55.04948306636195],[8.417499542236328,55.05652618408209],[8.463055610656681,55.04569625854492],[8.411785232872631,55.04948306636195]]],[[[13.406170966791661,54.596560494420075],[13.3702783584597,54.61458206176752],[13.243055343628384,54.55875015258789],[13.2830562591555,54.64625167846674],[13.160833358764933,54.55902862548828],[13.249724388122615,54.659862518310945],[13.42916679382347,54.68458175659174],[13.37583255767845,54.63513946533203],[13.406170966791661,54.596560494420075]]],[[[13.446298879365024,54.57641239394589],[13.679720878601302,54.56263732910156],[13.569721221924112,54.46180725097662],[13.76694393157959,54.34152603149454],[13.72527885437006,54.27347183227545],[13.646389007568416,54.296527862548885],[13.70416736602806,54.326248168945426],[13.610832214355753,54.31624984741222],[13.68305587768566,54.34930419921881],[13.58083438873291,54.35291671752947],[13.352499008178768,54.26958465576217],[13.41805553436285,54.25485992431646],[13.393610000610408,54.22097396850586],[13.290279388427791,54.25125122070318],[13.335277557373274,54.278194427490234],[13.139166831970158,54.2823600769043],[13.18472290039091,54.30097198486328],[13.114721298217717,54.331806182861555],[13.127499580383471,54.37125015258789],[13.261943817138842,54.38291549682657],[13.149722099304313,54.42902755737305],[13.26805686950695,54.47930526733427],[13.158611297607422,54.504028320312614],[13.143611907959041,54.54680633544922],[13.305277824402083,54.51402664184582],[13.29749870300293,54.55236053466797],[13.368612289428881,54.57930374145502],[13.338055610656681,54.54875183105469],[13.377498626709098,54.55902862548828],[13.413056373596476,54.49375152587885],[13.506387710571403,54.480972290039006],[13.501943588257006,54.548473358154695],[13.446298879365024,54.57641239394589]]],[[[13.184166908264217,54.49430465698282],[13.226943969726733,54.468750000000114],[13.120834350586222,54.44235992431646],[13.184166908264217,54.49430465698282]]],[[[13.125168920038526,54.58240134124839],[13.13638877868675,54.6051406860351],[13.158054351806868,54.57930374145502],[13.125168920038526,54.58240134124839]]],[[[11.069721221924055,54.53470230102539],[11.23416805267334,54.5068054199221],[11.31360912322998,54.402084350586335],[11.00916671752924,54.44124984741211],[11.069721221924055,54.53470230102539]]],[[[8.691945075988713,54.557083129882756],[8.671944618225154,54.49458312988281],[8.589166641235579,54.51180648803711],[8.691945075988713,54.557083129882756]]],[[[8.539723396301383,54.75569534301769],[8.595276832580623,54.71958160400385],[8.56694316864025,54.6798629760745],[8.396944999694881,54.70569610595703],[8.539723396301383,54.75569534301769]]],[[[8.551387786865234,54.57958221435541],[8.573056221008358,54.55875015258789],[8.50916671752941,54.57402801513683],[8.551387786865234,54.57958221435541]]],[[[8.476387977600098,54.47652816772461],[8.52583217620861,54.433471679687614],[8.470277786254883,54.42180633544933],[8.476387977600098,54.47652816772461]]],[[[8.483055114746321,54.58458328247116],[8.501387596130428,54.55819320678711],[8.455277442932186,54.55875015258789],[8.483055114746321,54.58458328247116]]],[[[8.356944084167594,54.71152877807617],[8.395278930664062,54.61208343505899],[8.292498588561955,54.66708374023466],[8.356944084167594,54.71152877807617]]],[[[7.895833015442065,53.79402923584007],[7.968054771423567,53.774860382080305],[7.846387863159464,53.78680419921881],[7.895833015442065,53.79402923584007]]],[[[7.706388950348241,53.77958297729492],[7.805832862854288,53.774581909179744],[7.666944026947249,53.7587509155274],[7.706388950348241,53.77958297729492]]],[[[7.573610782623518,53.757362365722656],[7.627499103546597,53.74847412109381],[7.467502117157153,53.727085113525504],[7.573610782623518,53.757362365722656]]],[[[7.394165992737044,53.73458480834961],[7.429722785949707,53.725139617920206],[7.360278129577864,53.72680664062494],[7.394165992737044,53.73458480834961]]],[[[7.058610916137638,53.68458175659197],[7.095833778381348,53.680694580078125],[6.854722023010595,53.66125106811535],[7.058610916137638,53.68458175659197]]],[[[6.761944770812988,53.61875152587896],[6.811388969421671,53.60263824462885],[6.721387863159407,53.583751678466854],[6.749722003937052,53.55680465698242],[6.630833148956526,53.59791564941406],[6.761944770812988,53.61875152587896]]]]}}]'), Q5 = {
  type: X5,
  features: K5
}, e4 = { class: "pmap_container" }, t4 = "https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png", n4 = 5, i4 = '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', r4 = /* @__PURE__ */ $e({
  __name: "MapPreview",
  props: {
    config: {}
  },
  setup(o) {
    const a = [50.93115286, 11.60392726], r = le(null), l = o, { config: d } = ol(l), h = (m) => d.value;
    return Hn(() => d, () => {
      r.value.leafletObject?.eachLayer((m) => {
        try {
          m.setStyle(h);
        } catch (g) {
          console.log(g);
        }
      });
    }, { deep: !0 }), (m, g) => (N(), te("div", e4, [
      re(be(Cd), {
        id: "map",
        ref_key: "map",
        ref: r,
        center: a,
        "max-zoom": 21,
        zoom: n4,
        style: { height: "100%" }
      }, {
        default: _e(() => [
          re(be(Ld), {
            attribution: i4,
            options: {
              maxNativeZoom: 19,
              maxZoom: 25
            },
            url: t4
          }),
          re(be(aa), {
            geojson: be(Q5),
            optionsStyle: h
          }, null, 8, ["geojson", "optionsStyle"])
        ]),
        _: 1
      }, 8, ["center"])
    ]));
  }
}), o4 = /* @__PURE__ */ vi(r4, [["__scopeId", "data-v-77cbf15c"]]), a4 = { class: "settings-container" }, s4 = /* @__PURE__ */ $e({
  __name: "MapSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const a = pi(o, "modelValue"), r = le({
      textSection: !0
    });
    return (l, d) => {
      const h = Xe("va-checkbox"), m = Xe("va-color-input"), g = Xe("va-input"), v = Xe("va-slider"), T = Xe("va-collapse");
      return N(), Be(T, {
        modelValue: r.value.textSection,
        "onUpdate:modelValue": d[8] || (d[8] = (x) => r.value.textSection = x),
        header: "Style settings"
      }, {
        default: _e(() => [
          se("div", a4, [
            re(h, {
              modelValue: a.value.stroke,
              "onUpdate:modelValue": d[0] || (d[0] = (x) => a.value.stroke = x),
              label: "stroke"
            }, null, 8, ["modelValue"]),
            re(m, {
              modelValue: a.value.color,
              "onUpdate:modelValue": d[1] || (d[1] = (x) => a.value.color = x),
              label: "line Color"
            }, null, 8, ["modelValue"]),
            re(g, {
              modelValue: a.value.weight,
              "onUpdate:modelValue": d[2] || (d[2] = (x) => a.value.weight = x),
              label: "line size"
            }, null, 8, ["modelValue"]),
            re(v, {
              modelValue: a.value.opacity,
              "onUpdate:modelValue": d[3] || (d[3] = (x) => a.value.opacity = x),
              max: 1,
              min: 0,
              step: 0.01,
              class: "slider",
              label: "line opacity",
              "track-label-visible": "",
              weight: ""
            }, null, 8, ["modelValue"]),
            re(h, {
              modelValue: a.value.fill,
              "onUpdate:modelValue": d[4] || (d[4] = (x) => a.value.fill = x),
              label: "fill"
            }, null, 8, ["modelValue"]),
            re(v, {
              modelValue: a.value.fillOpacity,
              "onUpdate:modelValue": d[5] || (d[5] = (x) => a.value.fillOpacity = x),
              max: 1,
              min: 0,
              step: 0.01,
              class: "slider",
              label: "fill opacity",
              "track-label-visible": ""
            }, null, 8, ["modelValue"]),
            re(m, {
              modelValue: a.value.fillColor,
              "onUpdate:modelValue": d[6] || (d[6] = (x) => a.value.fillColor = x),
              label: "class name"
            }, null, 8, ["modelValue"]),
            re(g, {
              modelValue: a.value.className,
              "onUpdate:modelValue": d[7] || (d[7] = (x) => a.value.className = x),
              label: "class name"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), l4 = /* @__PURE__ */ vi(s4, [["__scopeId", "data-v-65a760a2"]]), u4 = { class: "flex flex-col md6 pa-3" }, c4 = { class: "flex flex-col md6 pa-3" }, wm = /* @__PURE__ */ $e({
  __name: "AreaStyler",
  props: {
    modelValue: {
      default: () => oa({
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
    const a = pi(o, "modelValue");
    return (r, l) => (N(), te(xe, null, [
      se("div", u4, [
        re(l4, {
          modelValue: a.value,
          "onUpdate:modelValue": l[0] || (l[0] = (d) => a.value = d)
        }, null, 8, ["modelValue"])
      ]),
      se("div", c4, [
        re(o4, {
          ref: "MapPrev",
          config: a.value
        }, null, 8, ["config"])
      ])
    ], 64));
  }
});
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const d4 = () => {
};
function bm(o, a, r) {
  var l;
  let d;
  up(r) ? d = { evaluating: r } : d = r || {};
  const { lazy: h = !1, flush: m = "sync", evaluating: g = void 0, shallow: v = !0, onError: T = (l = globalThis.reportError) !== null && l !== void 0 ? l : d4 } = d, x = bh(!h), b = v ? bh(a) : le(a);
  let E = 0;
  return _1(async (P) => {
    if (!x.value) return;
    E++;
    const z = E;
    let R = !1;
    g && Promise.resolve().then(() => {
      g.value = !0;
    });
    try {
      const Y = await o((B) => {
        P(() => {
          g && (g.value = !1), R || B();
        });
      });
      z === E && (b.value = Y);
    } catch (Y) {
      T(Y);
    } finally {
      g && z === E && (g.value = !1), R = !0;
    }
  }, { flush: m }), h ? un(() => (x.value = !0, b.value)) : b;
}
const f4 = /* @__PURE__ */ $e({
  __name: "PlacementSytler",
  props: {
    modelValue: {
      default: () => oa({
        placement: ra.OberservedArea
      })
    },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const a = pi(o, "modelValue");
    return (r, l) => {
      const d = Xe("VaOptionList");
      return N(), te(xe, null, [
        se("div", null, [
          l[1] || (l[1] = se("label", {
            id: "input-label-240",
            "aria-hidden": "true",
            class: "va-input-label va-input-wrapper__label va-input-wrapper__label--outer",
            style: { color: "var(--va-primary)" }
          }, "render within ", -1)),
          re(d, {
            modelValue: a.value.placement,
            "onUpdate:modelValue": l[0] || (l[0] = (h) => a.value.placement = h),
            options: [be(ra).Thing, be(ra).OberservedArea],
            label: "render within",
            type: "radio"
          }, null, 8, ["modelValue", "options"])
        ]),
        l[2] || (l[2] = se("div", null, null, -1))
      ], 64);
    };
  }
}), h4 = { class: "auto-update-settings" }, p4 = { class: "refresh-setting" }, m4 = { class: "refresh-info" }, g4 = { class: "info-item" }, v4 = { class: "value" }, _4 = {
  key: 0,
  class: "info-item"
}, y4 = { class: "value" }, w4 = /* @__PURE__ */ $e({
  __name: "AutoUpdateSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const a = pi(o, "modelValue");
    let r = null;
    const l = (m) => {
      r && clearTimeout(r), r = setTimeout(() => {
        a.value.ObservationrefreshTime = m;
      }, 300);
    }, d = (m) => m === 0 ? "Never" : `${m}s`, h = (m) => new Date(m).toLocaleString("de-DE", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    return (m, g) => {
      const v = Xe("va-slider");
      return N(), te("div", h4, [
        g[3] || (g[3] = se("h3", null, "Auto-update Configuration", -1)),
        se("div", p4, [
          se("label", null, "Observation Refresh Time: " + rt(d(a.value.ObservationrefreshTime || 0)), 1),
          re(v, {
            "model-value": a.value.ObservationrefreshTime || 0,
            "onUpdate:modelValue": l,
            min: 0,
            max: 30,
            step: 1,
            "show-ticks": !0,
            color: "primary",
            class: "refresh-slider"
          }, null, 8, ["model-value"]),
          g[0] || (g[0] = se("div", { class: "slider-labels" }, [
            se("span", null, "Never"),
            se("span", null, "1s"),
            se("span", null, "15s"),
            se("span", null, "30s")
          ], -1))
        ]),
        se("div", m4, [
          se("div", g4, [
            g[1] || (g[1] = se("span", { class: "label" }, "Current Setting:", -1)),
            se("span", v4, rt(d(a.value.ObservationrefreshTime || 0)), 1)
          ]),
          a.value.lastUpdate ? (N(), te("div", _4, [
            g[2] || (g[2] = se("span", { class: "label" }, "Last Update:", -1)),
            se("span", y4, rt(h(a.value.lastUpdate)), 1)
          ])) : Le("", !0)
        ])
      ]);
    };
  }
}), b4 = /* @__PURE__ */ vi(w4, [["__scopeId", "data-v-bf0c06f4"]]), S4 = { class: "tree_detail" }, T4 = { class: "tree" }, x4 = { class: "menu" }, E4 = { class: "menuitem" }, C4 = { class: "checked" }, A4 = ["onClick"], P4 = ["onClick"], L4 = { class: "icon" }, O4 = { class: "text" }, M4 = ["onUpdate:modelValue", "onBlur"], I4 = ["onClick"], k4 = { class: "options" }, D4 = {
  key: 0,
  class: "childs"
}, F4 = ["onClick"], B4 = { class: "icon" }, R4 = { class: "text" }, z4 = ["onUpdate:modelValue", "onBlur"], N4 = ["onClick"], G4 = { class: "options" }, W4 = {
  key: 0,
  class: "childs"
}, V4 = ["onClick"], Z4 = { class: "icon" }, U4 = { class: "text" }, H4 = { class: "options" }, q4 = { class: "detail" }, $4 = {
  key: 0,
  class: "content"
}, J4 = {
  key: 0,
  class: "full"
}, j4 = {
  key: 0,
  class: "rowlayout"
}, Y4 = {
  key: 1,
  class: "full rowlayout"
}, X4 = {
  key: 2,
  class: "full"
}, K4 = {
  key: 3,
  class: "full"
}, Q4 = {
  key: 1,
  class: "content center"
}, e3 = { style: { display: "flex", "justify-content": "flex-end", padding: "8px" } }, t3 = { style: { padding: "10px" } }, n3 = { style: { margin: "10px 0", "padding-left": "20px" } }, i3 = { style: { padding: "20px" } }, r3 = { style: { display: "flex", "flex-direction": "column", gap: "10px" } }, o3 = { style: { "text-align": "left" } }, a3 = { style: { "font-weight": "bold" } }, s3 = { style: { "font-size": "0.85em", opacity: "0.7" } }, l3 = /* @__PURE__ */ $e({
  __name: "RendererModal",
  props: /* @__PURE__ */ bd({
    services: {},
    allLayers: {}
  }, {
    modelValue: {
      default: () => oa(
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
    const a = pi(o, "modelValue"), r = pi(o, "show"), l = pi(o, "layer"), d = o, { services: h, allLayers: m } = ol(d);
    le([]);
    const g = le(0), v = le(void 0), T = le(!1), x = le(null), b = le([]), E = le(!1), P = le(null), { getAll: z, getById: R } = qs(), Y = (ne) => m?.value ? m.value.filter(
      (U) => U.styleIds?.includes(ne)
    ) : [], B = (ne) => {
      const U = Y(ne.id);
      U.length > 0 ? (x.value = ne, b.value = U, T.value = !0) : W(ne);
    }, W = (ne) => {
      b.value.forEach((Q) => {
        const G = Q.styleIds?.indexOf(ne.id);
        G !== void 0 && G !== -1 && Q.styleIds?.splice(G, 1);
      });
      const U = a.value.indexOf(ne);
      U !== -1 && (a.value.splice(U, 1), v.value?.id === ne.id && (v.value = void 0)), T.value = !1, x.value = null, b.value = [];
    }, q = () => {
      T.value = !1, x.value = null, b.value = [];
    }, M = () => {
      l.value?.type == "OGCSTA" ? a.value.push({
        name: "new Style",
        thing: [
          {
            prop: "name",
            comperator: Mi.equals,
            value: "example"
          }
        ],
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
        ds_renderer: [],
        id: ji()
      }) : a.value.push({
        name: "new Style",
        datastream: [
          {
            prop: "name",
            comperator: Mi.equals,
            value: "*"
          }
        ],
        placement: ra.Thing,
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
        id: ji()
      });
    }, $ = () => {
      v.value.ds_renderer.push({
        name: "new DS Style",
        datastream: [
          {
            prop: "name",
            comperator: Mi.equals,
            value: "*"
          }
        ],
        placement: ra.Thing,
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
        id: ji()
      });
    }, ue = (ne) => {
      P.value = ne, E.value = !0;
    }, fe = (ne) => {
      if (!P.value) return;
      const U = R(ne), Q = {
        component: ne
      };
      U?.isLayerRenderer ? Q.setting = {
        conditions: [],
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
      } : Q.setting = {}, P.value.observations || (P.value.observations = []), P.value.observations.push(Q), E.value = !1, P.value = null;
    }, Ee = bm(async () => {
      const ne = l.value;
      if (!ne) return [];
      if (ne.type == "WFSLayer")
        try {
          const Q = await h.value.find((G) => G.id == ne.service)?.service?.getFeatureTypePropDetails(ne.name ?? "");
          return console.log(Q), Object.entries(Q).map(
            (G) => ({ text: G[0], selector: G[0], suggestions: G[1].uniqueValues.map((ae) => ae.value) })
          );
        } catch (U) {
          return console.log(U), [];
        }
      else if (ne.type == "GEOJSON" && ne.geoJson)
        try {
          const U = ne.geoJson;
          if (!U?.features || U.features.length === 0)
            return [];
          const Q = /* @__PURE__ */ new Map();
          for (const G of U.features)
            if (G.properties)
              for (const [ae, ge] of Object.entries(G.properties))
                Q.has(ae) || Q.set(ae, /* @__PURE__ */ new Set()), Q.get(ae)?.add(ge);
          return Array.from(Q.entries()).map(([G, ae]) => ({
            text: G,
            selector: G,
            suggestions: Array.from(ae)
          }));
        } catch (U) {
          return console.log(U), [];
        }
      else
        return [];
    }, []);
    return Hn(r, (ne) => {
      ne && (v.value = void 0);
    }), Hn(v, () => {
      g.value = 0;
    }), (ne, U) => {
      const Q = Xe("VaIcon"), G = Xe("va-divider"), ae = Xe("VaBadge"), ge = Xe("VaValue"), Qe = Xe("VaButton"), Ae = Xe("VaTab"), ke = Xe("VaTabs"), ye = Xe("VaScrollContainer"), Kt = Xe("VaModal");
      return N(), te(xe, null, [
        re(Kt, {
          modelValue: r.value,
          "onUpdate:modelValue": U[10] || (U[10] = (j) => r.value = j),
          "hide-default-actions": "",
          maxWidth: "1200px",
          "overlay-opacity": "0.2"
        }, {
          footer: _e(() => [
            se("div", e3, [
              re(Qe, {
                onClick: U[9] || (U[9] = (j) => r.value = !1)
              }, {
                default: _e(() => [...U[24] || (U[24] = [
                  pt("Close", -1)
                ])]),
                _: 1
              })
            ])
          ]),
          default: _e(() => [
            se("div", S4, [
              se("div", T4, [
                se("div", x4, [
                  se("div", E4, [
                    se("div", C4, [
                      re(Q, {
                        class: "material-icons",
                        onClick: M
                      }, {
                        default: _e(() => [...U[14] || (U[14] = [
                          pt(" add ", -1)
                        ])]),
                        _: 1
                      })
                    ])
                  ]),
                  re(G),
                  (N(!0), te(xe, null, At(a.value, (j) => (N(), te("div", {
                    key: j.id
                  }, [
                    se("div", {
                      class: mr([{ active: j.id == v.value?.id }, "menuitem"]),
                      onClick: (he) => v.value = j
                    }, [
                      se("div", {
                        class: "checked",
                        onClick: () => {
                          const he = l.value?.styleIds?.indexOf(j.id);
                          he != -1 ? l.value?.styleIds?.splice(he, 1) : l.value?.styleIds?.push(j.id);
                        }
                      }, [
                        re(Q, {
                          color: l.value?.styleIds?.includes(j.id) ? "primary" : "#eeeeee",
                          class: "material-icons"
                        }, {
                          default: _e(() => [...U[15] || (U[15] = [
                            pt(" checked ", -1)
                          ])]),
                          _: 1
                        }, 8, ["color"])
                      ], 8, P4),
                      se("div", L4, [
                        re(ae, {
                          offset: [5, 14],
                          class: "mr-6",
                          color: "#efefef",
                          overlap: "",
                          style: { "--va-badge-text-wrapper-border-radius": "50%" },
                          text: "Th"
                        }, {
                          default: _e(() => [
                            re(Q, { class: "material-icons" }, {
                              default: _e(() => [...U[16] || (U[16] = [
                                pt(" style ", -1)
                              ])]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      se("div", O4, [
                        re(ge, null, {
                          default: _e((he) => [
                            he.value ? Sh((N(), te("input", {
                              key: 0,
                              "onUpdate:modelValue": (Ge) => j.name = Ge,
                              class: "item__input",
                              style: { width: "100%" },
                              onBlur: (Ge) => he.value = !1
                            }, null, 40, M4)), [
                              [Th, j.name]
                            ]) : (N(), te("span", {
                              key: 1,
                              onClick: (Ge) => he.value = !0
                            }, rt(j.name), 9, I4))
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      se("div", k4, [
                        l.value?.type == "OGCSTA" && j?.thing ? (N(), Be(Qe, {
                          key: 0,
                          icon: "add",
                          preset: "secondary",
                          round: "",
                          onClick: $
                        })) : Le("", !0),
                        re(Qe, {
                          icon: "delete",
                          preset: "secondary",
                          round: "",
                          onClick: (he) => B(j)
                        }, null, 8, ["onClick"])
                      ])
                    ], 10, A4),
                    j?.thing ? (N(), te("div", D4, [
                      (N(!0), te(xe, null, At(j?.ds_renderer, (he) => (N(), te("div", {
                        key: he.id,
                        class: mr([{ active: he.id == v.value?.id }, "menuitem"]),
                        onClick: (Ge) => v.value = he
                      }, [
                        U[18] || (U[18] = se("div", null, null, -1)),
                        se("div", B4, [
                          re(ae, {
                            offset: [5, 14],
                            class: "mr-6",
                            color: "#efefef",
                            overlap: "",
                            style: { "--va-badge-text-wrapper-border-radius": "50%" },
                            text: "DS"
                          }, {
                            default: _e(() => [
                              re(Q, { class: "material-icons" }, {
                                default: _e(() => [...U[17] || (U[17] = [
                                  pt(" settings ", -1)
                                ])]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        se("div", R4, [
                          re(ge, null, {
                            default: _e((Ge) => [
                              Ge.value ? Sh((N(), te("input", {
                                key: 0,
                                "onUpdate:modelValue": (gt) => he.name = gt,
                                class: "item__input",
                                style: { width: "100%" },
                                onBlur: (gt) => Ge.value = !1
                              }, null, 40, z4)), [
                                [Th, he.name]
                              ]) : (N(), te("span", {
                                key: 1,
                                onClick: (gt) => Ge.value = !0
                              }, rt(he.name), 9, N4))
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        se("div", G4, [
                          re(Qe, {
                            icon: "add",
                            preset: "secondary",
                            round: "",
                            onClick: (Ge) => ue(he)
                          }, null, 8, ["onClick"]),
                          re(Qe, {
                            icon: "delete",
                            preset: "secondary",
                            round: "",
                            onClick: () => {
                              const Ge = j, gt = Ge.ds_renderer.indexOf(he);
                              gt !== -1 && (Ge.ds_renderer.splice(gt, 1), v.value?.id === he.id && (v.value = void 0));
                            }
                          }, null, 8, ["onClick"])
                        ])
                      ], 10, F4))), 128)),
                      (N(!0), te(xe, null, At(j?.ds_renderer, (he) => (N(), te(xe, {
                        key: "obs-parent-" + he.id
                      }, [
                        he.observations && he.observations.length > 0 ? (N(), te("div", W4, [
                          (N(!0), te(xe, null, At(he.observations, (Ge, gt) => (N(), te("div", {
                            key: "obs-" + he.id + "-" + gt,
                            class: mr([{ active: Ge === v.value }, "menuitem"]),
                            onClick: (oe) => v.value = Ge
                          }, [
                            U[20] || (U[20] = se("div", null, null, -1)),
                            se("div", Z4, [
                              re(ae, {
                                offset: [5, 14],
                                class: "mr-6",
                                color: "#efefef",
                                overlap: "",
                                style: { "--va-badge-text-wrapper-border-radius": "50%" },
                                text: "Obs"
                              }, {
                                default: _e(() => [
                                  re(Q, { class: "material-icons" }, {
                                    default: _e(() => [...U[19] || (U[19] = [
                                      pt(" visibility ", -1)
                                    ])]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            se("div", U4, rt(Ge.component || "Observation"), 1),
                            se("div", H4, [
                              re(Qe, {
                                icon: "delete",
                                preset: "secondary",
                                round: "",
                                onClick: () => {
                                  if (!he.observations) return;
                                  const oe = he.observations.indexOf(Ge);
                                  oe !== -1 && (he.observations.splice(oe, 1), v.value === Ge && (v.value = void 0));
                                }
                              }, null, 8, ["onClick"])
                            ])
                          ], 10, V4))), 128))
                        ])) : Le("", !0)
                      ], 64))), 128))
                    ])) : Le("", !0)
                  ]))), 128))
                ])
              ]),
              se("div", q4, [
                re(ke, {
                  modelValue: g.value,
                  "onUpdate:modelValue": U[0] || (U[0] = (j) => g.value = j)
                }, {
                  tabs: _e(() => [
                    l.value?.type == "OGCSTA" ? (N(), te(xe, { key: 0 }, [
                      v.value?.thing ? (N(), te(xe, { key: 0 }, At(["Conditions", "Points", "Areas", "Auto-update"], (j) => re(Ae, { key: j }, {
                        default: _e(() => [
                          pt(rt(j), 1)
                        ]),
                        _: 2
                      }, 1024)), 64)) : v.value?.component && !v.value?.datastream ? (N(), Be(Ae, { key: 1 }, {
                        default: _e(() => [...U[21] || (U[21] = [
                          pt("Settings", -1)
                        ])]),
                        _: 1
                      })) : l.value?.type == "OGCSTA" ? (N(), te(xe, { key: 2 }, At(["Conditions", "Points", "Areas", "Placement"], (j) => re(Ae, { key: j }, {
                        default: _e(() => [
                          pt(rt(j), 1)
                        ]),
                        _: 2
                      }, 1024)), 64)) : (N(), te(xe, { key: 3 }, At(["Conditions", "Points", "Areas"], (j) => re(Ae, { key: j }, {
                        default: _e(() => [
                          pt(rt(j), 1)
                        ]),
                        _: 2
                      }, 1024)), 64))
                    ], 64)) : (N(), te(xe, { key: 1 }, At(["Conditions", "Points", "Areas"], (j) => re(Ae, { key: j }, {
                      default: _e(() => [
                        pt(rt(j), 1)
                      ]),
                      _: 2
                    }, 1024)), 64))
                  ]),
                  _: 1
                }, 8, ["modelValue"]),
                v.value ? (N(), te("div", $4, [
                  re(ye, {
                    class: "scroller",
                    vertical: ""
                  }, {
                    default: _e(() => [
                      v.value?.component && !v.value?.datastream ? (N(), te("div", J4, [
                        be(R)(v.value.component)?.setupComponent ? (N(), Be(fd(be(R)(v.value.component)?.setupComponent), {
                          key: 0,
                          modelValue: v.value.setting,
                          "onUpdate:modelValue": U[1] || (U[1] = (j) => v.value.setting = j)
                        }, null, 8, ["modelValue"])) : Le("", !0)
                      ])) : (N(), te(xe, { key: 1 }, [
                        g.value == 1 || g.value == 2 ? (N(), te("div", j4, [
                          g.value == 1 ? (N(), Be(ym, {
                            key: 0,
                            modelValue: v.value.renderer,
                            "onUpdate:modelValue": U[2] || (U[2] = (j) => v.value.renderer = j)
                          }, null, 8, ["modelValue"])) : Le("", !0),
                          g.value == 2 ? (N(), Be(wm, {
                            key: 1,
                            modelValue: v.value.renderer.area,
                            "onUpdate:modelValue": U[3] || (U[3] = (j) => v.value.renderer.area = j)
                          }, null, 8, ["modelValue"])) : Le("", !0)
                        ])) : Le("", !0),
                        g.value == 3 && l.value?.type == "OGCSTA" && !v.value.thing ? (N(), te("div", Y4, [
                          re(f4, {
                            modelValue: v.value,
                            "onUpdate:modelValue": U[4] || (U[4] = (j) => v.value = j)
                          }, null, 8, ["modelValue"])
                        ])) : g.value == 3 && l.value?.type == "OGCSTA" && v.value.thing ? (N(), te("div", X4, [
                          re(b4, {
                            modelValue: v.value,
                            "onUpdate:modelValue": U[5] || (U[5] = (j) => v.value = j)
                          }, null, 8, ["modelValue"])
                        ])) : (N(), te("div", K4, [
                          l.value?.type == "OGCSTA" && v.value.thing ? (N(), te(xe, { key: 0 }, [
                            g.value == 0 ? (N(), Be(wd, {
                              key: 0,
                              modelValue: v.value.thing,
                              "onUpdate:modelValue": U[6] || (U[6] = (j) => v.value.thing = j)
                            }, null, 8, ["modelValue"])) : Le("", !0)
                          ], 64)) : (N(), te(xe, { key: 1 }, [
                            g.value == 0 ? (N(), Be(wd, {
                              key: 0,
                              modelValue: v.value.datastream,
                              "onUpdate:modelValue": U[7] || (U[7] = (j) => v.value.datastream = j),
                              "thing-props": be(Ee),
                              "onUpdate:thingProps": U[8] || (U[8] = (j) => up(Ee) ? Ee.value = j : null)
                            }, null, 8, ["modelValue", "thing-props"])) : Le("", !0)
                          ], 64))
                        ]))
                      ], 64))
                    ]),
                    _: 1
                  })
                ])) : (N(), te("div", Q4, [
                  re(Q, {
                    size: 74,
                    class: "material-icons"
                  }, {
                    default: _e(() => [...U[22] || (U[22] = [
                      pt(" style ", -1)
                    ])]),
                    _: 1
                  }),
                  se("span", null, [
                    se("span", {
                      class: "underline blue",
                      onClick: M
                    }, "create"),
                    U[23] || (U[23] = pt(" or select Sytle to edit", -1))
                  ])
                ]))
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        re(Kt, {
          modelValue: T.value,
          "onUpdate:modelValue": U[11] || (U[11] = (j) => T.value = j),
          title: "Delete Style",
          size: "small",
          "ok-text": "Delete",
          "cancel-text": "Cancel",
          onOk: U[12] || (U[12] = (j) => W(x.value)),
          onCancel: q
        }, {
          default: _e(() => [
            se("div", t3, [
              se("p", null, [
                U[25] || (U[25] = se("strong", null, "Warning:", -1)),
                pt(' This style "' + rt(x.value?.name) + '" is used by ' + rt(b.value.length) + " layer(s):", 1)
              ]),
              se("ul", n3, [
                (N(!0), te(xe, null, At(b.value, (j, he) => (N(), te("li", { key: he }, rt(j.name || j.title || "Unnamed Layer"), 1))), 128))
              ]),
              U[26] || (U[26] = se("p", null, "If you delete this style, it will be removed from all these layers.", -1)),
              U[27] || (U[27] = se("p", null, [
                se("strong", null, "Do you want to continue?")
              ], -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        re(Kt, {
          modelValue: E.value,
          "onUpdate:modelValue": U[13] || (U[13] = (j) => E.value = j),
          title: "Select Observation Renderer Type",
          size: "medium",
          "hide-default-actions": ""
        }, {
          default: _e(() => [
            se("div", i3, [
              U[28] || (U[28] = se("p", { style: { "margin-bottom": "15px" } }, "Choose which type of renderer to use for observations:", -1)),
              se("div", r3, [
                (N(!0), te(xe, null, At(be(z)(), ([j, he]) => (N(), Be(Qe, {
                  key: j,
                  onClick: (Ge) => fe(j),
                  style: { "justify-content": "flex-start" }
                }, {
                  default: _e(() => [
                    se("div", o3, [
                      se("div", a3, rt(he.name), 1),
                      se("div", s3, rt(he.description), 1)
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
}), u3 = /* @__PURE__ */ vi(l3, [["__scopeId", "data-v-17c997bf"]]), c3 = { class: "va-modal__message" }, d3 = { class: "m-0" }, f3 = { class: "settings-container" }, h3 = { key: 0 }, p3 = { key: 1 }, m3 = { style: { "margin-top": "10px", "font-size": "12px", color: "#666" } }, g3 = { class: "va-modal__message" }, v3 = {
  class: "va-h3",
  style: { color: "#ff6b6b", display: "flex", "align-items": "center", gap: "8px" }
}, _3 = { style: { "margin-top": "16px", color: "#333" } }, y3 = {
  key: 0,
  class: "empty"
}, w3 = { class: "list-group-item" }, b3 = { class: "row dragIcon" }, S3 = {
  key: 3,
  style: { color: "#ff6b6b", "font-size": "0.85em", "margin-left": "8px" }
}, T3 = { class: "row nhidden options" }, x3 = ["id"], E3 = { style: { "min-width": "150px" } }, C3 = { key: 0 }, A3 = {
  id: "header-va-4",
  "aria-controls": "panel-va-4",
  "aria-disabled": "false",
  "aria-expanded": "false",
  class: "va-collapse__header",
  role: "button",
  style: { color: "currentcolor" },
  tabindex: "0"
}, P3 = {
  key: 0,
  class: "empty"
}, L3 = { key: 2 }, O3 = { key: 3 }, M3 = ["onClick"], I3 = {
  id: "header-va-4",
  "aria-controls": "panel-va-4",
  "aria-disabled": "false",
  "aria-expanded": "false",
  class: "va-collapse__header",
  role: "button",
  style: { color: "currentcolor" },
  tabindex: "0"
}, k3 = { class: "settings-container" }, D3 = /* @__PURE__ */ $e({
  __name: "MapsWidgetSettings",
  props: /* @__PURE__ */ bd({
    dataSources: {}
  }, {
    modelValue: { required: !0 },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(o) {
    y1();
    const a = o, r = le({
      widgetSectionLayer: !0,
      widgetSection: !1,
      widgetServiceSection: !0,
      storeSection: !1,
      widgetMapSection: !1
    }), l = pi(o, "modelValue"), d = le(!1), h = le(!1), m = le(!1), g = le(""), v = Xp(), T = le(!1), x = le([]);
    Hn(x, (Q) => {
      tn("Selected nodes changed:", Q);
    });
    const b = un(() => ({
      group: "description",
      disabled: !1,
      ghostClass: "ghost"
    })), E = le(""), P = async () => {
      console.log("addService called with URL:", E.value), h.value = !0;
      let Q = null, G = null, ae = !1;
      try {
        console.log("Trying WMS...");
        const ge = await v.createServiceWMS(E.value);
        console.log("WMS result:", ge), ge && (l.value.services.push({
          service: ge,
          url: E.value,
          type: "WMS",
          id: ji()
        }), ae = !0);
      } catch (ge) {
        console.log("WMS error:", ge), Q = ge;
      }
      try {
        console.log("Trying WFS...");
        const ge = await v.createServiceWFS(E.value);
        console.log("WFS result:", ge), ge && (l.value.services.push({
          service: ge,
          url: E.value,
          type: "WFS",
          id: ji()
        }), ae = !0);
      } catch (ge) {
        console.log("WFS error:", ge), G = ge;
      }
      if (ae)
        d.value = !1, E.value = "";
      else {
        const ge = Q || G;
        g.value = ge?.message || "Failed to load service. The URL is not a valid WMS or WFS service.", m.value = !0;
      }
      h.value = !1;
    }, z = (Q, G) => {
      const ae = [];
      return Q && Q.forEach((ge) => {
        ae.push({
          id: ji(),
          opacity: 1,
          service: G,
          type: "WMSLayer",
          name: ge.name,
          title: ge.title,
          attribution: ge.attribution,
          childs: z(ge.children, G)
        });
      }), ae;
    }, R = le(/* @__PURE__ */ new Map()), Y = bm(async () => {
      tn("Computing services async");
      const Q = [];
      for (let ae of l.value.services) {
        if (tn("Service:", ae), !!ae.reconstructionFailed) {
          tn("Service failed reconstruction:", ae.url), Q.push({
            service: { _info: { title: `${ae.url} (failed)`, name: ae.url } },
            type: ae.type,
            level: 0,
            childs: [],
            failed: !0
          });
          continue;
        }
        if (ae.type == "WFS")
          tn("Processing WFS service"), ae.service && typeof ae.service.getFeatureTypes == "function" ? Q.push({
            service: ae.service,
            type: "WFS",
            level: 0,
            childs: ae.service.getFeatureTypes().map(
              (Qe) => ({
                id: ji(),
                opacity: 1,
                service: ae.id,
                wfs_service: new _m(ae.service.getFeatureUrl(Qe.name, { outputCrs: "EPSG:4326", asJson: !0, maxFeatures: 100 })),
                geoJson: {},
                type: "WFSLayer",
                name: Qe.name,
                title: Qe.title,
                attribution: ""
              })
            )
          }) : tn("WFS service missing getFeatureTypes method");
        else if (tn("Processing WMS service"), console.log("[MapsWidgetSettings] WMS service object:", ae), console.log("[MapsWidgetSettings] service.service:", ae.service), console.log("[MapsWidgetSettings] service.service._info:", ae.service?._info), console.log("[MapsWidgetSettings] getLayers type:", typeof ae.service?.getLayers), ae.service && typeof ae.service.getLayers == "function") {
          const Qe = ae.service.getLayers();
          console.log("[MapsWidgetSettings] WMS layers:", Qe), Q.push({
            service: ae.service,
            type: "WMS",
            childs: z(Qe, ae.service),
            level: 0
          }), tn("WMS service added to tree"), console.log("[MapsWidgetSettings] ret after adding WMS:", JSON.parse(JSON.stringify(Q)));
        } else
          tn("WMS service missing getLayers method");
      }
      const G = [l.value.datasourceId, ...l.value.datasourceIds].filter(Boolean);
      for (const ae of G) {
        if (!ae) continue;
        const ge = dt(Nr);
        try {
          const Qe = ge.getDatasource(ae);
          Li("Datasource type:", ge.getDatasourceType(ae));
          const Ae = ge.getDatasourceType(ae);
          if (!R.value.has(ae)) {
            let ye;
            Ae == "OGC Composer" ? ye = {
              id: ji(),
              opacity: 1,
              service: Qe,
              geoJson: {},
              type: "GEOJSON",
              name: "GEOJSON",
              title: "GEOJSON",
              attribution: "",
              datasourceId: ae
            } : Ae == "valhalla" ? ye = {
              id: ji(),
              opacity: 1,
              service: Qe,
              geoJson: {},
              type: "ROUTE",
              name: "Route",
              title: "Valhalla Route",
              attribution: "",
              datasourceId: ae
            } : Ae == "rest" ? ye = {
              id: ji(),
              opacity: 1,
              service: Qe,
              geoJson: {},
              type: "REST-GEOJSON",
              name: "REST-GEOJSON",
              title: "REST GeoJSON",
              attribution: "",
              datasourceId: ae
            } : ye = {
              id: ji(),
              opacity: 1,
              service: Qe,
              geoJson: {},
              type: "OGCSTA",
              name: "OGCSTA",
              title: "OGCSTA",
              attribution: "",
              datasourceId: ae
            }, R.value.set(ae, ye);
          }
          const ke = R.value.get(ae);
          Ae == "OGC Composer" ? Q.push({
            service: { _info: { title: ae + "[Composer]", name: ae } },
            type: "GEOJSON",
            level: 0,
            childs: [ke]
          }) : Ae == "valhalla" ? Q.push({
            service: { _info: { title: ae + "[Valhalla Route]", name: ae } },
            type: "ROUTE",
            level: 0,
            childs: [ke]
          }) : Ae == "rest" ? Q.push({
            service: { _info: { title: ae + "[REST]", name: ae } },
            type: "REST-GEOJSON",
            level: 0,
            childs: [ke]
          }) : Q.push({
            service: { _info: { title: ae + "[OGCSTA]", name: ae } },
            type: "OGCSTA",
            childs: [ke],
            level: 0
          });
        } catch {
          Li("Service not supported for datasource:", ae);
        }
      }
      return console.log("[MapsWidgetSettings] Final services array:", Q), console.log("[MapsWidgetSettings] Final services length:", Q.length), Q;
    });
    le(0.5);
    const B = le(!1), W = async (Q) => {
      const G = { ...Q, checked: !0, styleIds: [] };
      if (G.type == "WFSLayer") {
        const ae = await G.wfs_service.fetch();
        tn("WFS data fetched:", ae);
      }
      l.value.layers.push(G);
    }, q = (Q) => {
      const G = l.value.layers.indexOf(Q);
      G > -1 && l.value.layers.splice(G, 1);
    }, M = le(void 0), $ = un(() => M.value?.type == "OGCSTA" ? l.value.OGCSstyles : l.value.styles), ue = le("wms_wfs"), fe = le(""), Ee = un(() => a.dataSources ? a.dataSources.filter((Q) => Q.type === "ogcsta" || Q.type === "OGC Composer" || Q.type === "rest" || Q.type === "valhalla").map((Q) => ({
      text: `${Q.name} (${Q.type})`,
      value: Q.uid
    })) : []), ne = () => {
      fe.value && !l.value.datasourceIds.includes(fe.value) && (l.value.datasourceIds.push(fe.value), fe.value = "", d.value = !1);
    }, U = (Q) => {
      const G = l.value.datasourceIds.indexOf(Q);
      G > -1 && (l.value.datasourceIds.splice(G, 1), R.value.delete(Q));
    };
    return (Q, G) => {
      const ae = Xe("VaRadio"), ge = Xe("va-input"), Qe = Xe("VaSelect"), Ae = Xe("VaModal"), ke = Xe("VaIcon"), ye = Xe("VaSlider"), Kt = Xe("VaButton"), j = Xe("va-collapse"), he = Xe("VaTreeView"), Ge = Xe("va-checkbox"), gt = Xe("va-color-input");
      return N(), te(xe, null, [
        re(Ae, {
          modelValue: d.value,
          "onUpdate:modelValue": G[5] || (G[5] = (oe) => d.value = oe),
          "ok-text": ue.value === "wms_wfs" ? "Add" : "Add Datasource",
          size: "small",
          onOk: G[6] || (G[6] = (oe) => ue.value === "wms_wfs" ? P() : ne())
        }, {
          default: _e(() => [
            se("div", c3, [
              G[22] || (G[22] = se("h3", { class: "va-h3" }, " Add Service ", -1)),
              se("div", d3, [
                se("div", f3, [
                  re(ae, {
                    modelValue: ue.value,
                    "onUpdate:modelValue": G[0] || (G[0] = (oe) => ue.value = oe),
                    option: "wms_wfs",
                    label: "WMS/WFS Service",
                    style: { "margin-bottom": "10px" }
                  }, null, 8, ["modelValue"]),
                  re(ae, {
                    modelValue: ue.value,
                    "onUpdate:modelValue": G[1] || (G[1] = (oe) => ue.value = oe),
                    option: "datasource",
                    label: "Datasource",
                    style: { "margin-bottom": "15px" }
                  }, null, 8, ["modelValue"]),
                  ue.value === "wms_wfs" ? (N(), te("div", h3, [
                    re(ge, {
                      modelValue: E.value,
                      "onUpdate:modelValue": G[2] || (G[2] = (oe) => E.value = oe),
                      placeholder: "https://[serviceurl]"
                    }, null, 8, ["modelValue"])
                  ])) : (N(), te("div", p3, [
                    Ee.value.length > 0 ? (N(), Be(Qe, {
                      key: 0,
                      modelValue: fe.value,
                      "onUpdate:modelValue": G[3] || (G[3] = (oe) => fe.value = oe),
                      options: Ee.value,
                      label: "Select Datasource",
                      placeholder: "Choose a datasource",
                      "text-by": "text",
                      "value-by": "value"
                    }, null, 8, ["modelValue", "options"])) : (N(), Be(ge, {
                      key: 1,
                      modelValue: fe.value,
                      "onUpdate:modelValue": G[4] || (G[4] = (oe) => fe.value = oe),
                      placeholder: "Enter Datasource ID",
                      label: "Datasource ID"
                    }, null, 8, ["modelValue"])),
                    se("div", m3, [
                      G[21] || (G[21] = pt(" Primary datasource: ", -1)),
                      se("strong", null, rt(l.value.datasourceId), 1)
                    ])
                  ]))
                ])
              ])
            ])
          ]),
          _: 1
        }, 8, ["modelValue", "ok-text"]),
        re(Ae, {
          modelValue: m.value,
          "onUpdate:modelValue": G[7] || (G[7] = (oe) => m.value = oe),
          "ok-text": "OK",
          size: "small",
          "hide-default-actions": !1,
          "cancel-text": ""
        }, {
          default: _e(() => [
            se("div", g3, [
              se("h3", v3, [
                re(ke, { class: "material-icons" }, {
                  default: _e(() => [...G[23] || (G[23] = [
                    pt("error", -1)
                  ])]),
                  _: 1
                }),
                G[24] || (G[24] = pt(" Service Error ", -1))
              ]),
              se("div", _3, rt(g.value), 1)
            ])
          ]),
          _: 1
        }, 8, ["modelValue"]),
        re(u3, {
          modelValue: $.value,
          "onUpdate:modelValue": G[8] || (G[8] = (oe) => $.value = oe),
          layer: M.value,
          "onUpdate:layer": G[9] || (G[9] = (oe) => M.value = oe),
          show: B.value,
          "onUpdate:show": G[10] || (G[10] = (oe) => B.value = oe),
          services: l.value.services,
          "all-layers": l.value.layers
        }, null, 8, ["modelValue", "layer", "show", "services", "all-layers"]),
        re(j, {
          modelValue: r.value.widgetSectionLayer,
          "onUpdate:modelValue": G[14] || (G[14] = (oe) => r.value.widgetSectionLayer = oe),
          header: "Layers",
          icon: "layers"
        }, {
          default: _e(() => [
            l.value.layers.length == 0 ? (N(), te("span", y3, " No Layers here ")) : (N(), Be(be(b5), Su({
              key: 1,
              modelValue: l.value.layers,
              "onUpdate:modelValue": G[11] || (G[11] = (oe) => l.value.layers = oe),
              animation: 150,
              "component-data": {
                tag: "ul",
                type: "transition-group",
                name: T.value ? null : "flip-list"
              },
              class: "list-group",
              "item-key": "id"
            }, b.value, {
              onEnd: G[12] || (G[12] = (oe) => T.value = !1),
              onStart: G[13] || (G[13] = (oe) => T.value = !0)
            }), {
              item: _e(({ element: oe }) => [
                se("li", w3, [
                  se("div", b3, [
                    oe.reconstructionFailed ? (N(), Be(ke, {
                      key: 0,
                      class: "material-icons",
                      style: { color: "#ff6b6b" }
                    }, {
                      default: _e(() => [...G[25] || (G[25] = [
                        pt(" error ", -1)
                      ])]),
                      _: 1
                    })) : oe.checked ? (N(), Be(ke, {
                      key: 1,
                      class: "material-icons",
                      onClick: (De) => oe.checked = !1
                    }, {
                      default: _e(() => [...G[26] || (G[26] = [
                        pt(" layers ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])) : (N(), Be(ke, {
                      key: 2,
                      class: "material-icons",
                      onClick: (De) => oe.checked = !0
                    }, {
                      default: _e(() => [...G[27] || (G[27] = [
                        pt(" layers_clear ", -1)
                      ])]),
                      _: 1
                    }, 8, ["onClick"])),
                    pt(" " + rt(oe.title) + " ", 1),
                    oe.reconstructionFailed ? (N(), te("span", S3, "(failed)")) : Le("", !0)
                  ]),
                  se("div", T3, [
                    re(ke, { class: "material-icons" }, {
                      default: _e(() => [...G[28] || (G[28] = [
                        pt(" opacity ", -1)
                      ])]),
                      _: 1
                    }),
                    se("div", {
                      id: oe.id,
                      class: "slider nhidden sliderPopOver"
                    }, [
                      se("div", E3, [
                        re(ye, {
                          modelValue: oe.opacity,
                          "onUpdate:modelValue": (De) => oe.opacity = De,
                          max: 1,
                          min: 0,
                          step: 0.01,
                          color: "#555"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ], 8, x3),
                    oe.type == "WFSLayer" || oe.type == "OGCSTA" || oe.type == "GEOJSON" || oe.type == "REST-GEOJSON" ? (N(), te("div", C3, [
                      re(Kt, {
                        icon: "settings",
                        preset: "secondary",
                        round: "",
                        onClick: () => {
                          M.value = oe, B.value = !0;
                        }
                      }, null, 8, ["onClick"])
                    ])) : Le("", !0),
                    re(Kt, {
                      icon: "delete",
                      preset: "secondary",
                      round: "",
                      color: "danger",
                      onClick: xh((De) => q(oe), ["stop"])
                    }, null, 8, ["onClick"])
                  ])
                ])
              ]),
              _: 1
            }, 16, ["modelValue", "component-data"]))
          ]),
          _: 1
        }, 8, ["modelValue"]),
        re(j, {
          modelValue: r.value.widgetServiceSection,
          "onUpdate:modelValue": G[16] || (G[16] = (oe) => r.value.widgetServiceSection = oe),
          class: "bottomframe",
          header: "Services",
          icon: "home"
        }, {
          header: _e(({ value: oe, attrs: De, iconAttrs: Ne, text: pn }) => [
            se("div", A3, [
              re(ke, { class: "material-icons" }, {
                default: _e(() => [...G[29] || (G[29] = [
                  pt("cable ", -1)
                ])]),
                _: 1
              }),
              G[30] || (G[30] = se("div", { class: "va-collapse__header__text" }, "Services", -1)),
              re(Kt, {
                loading: h.value,
                icon: "add_circle",
                preset: "secondary",
                round: "",
                onClick: G[15] || (G[15] = (nn) => {
                  nn.stopImmediatePropagation(), d.value = !0;
                })
              }, null, 8, ["loading"]),
              re(ke, Su({
                class: oe ? "rotate-[-180deg]" : "",
                name: "va-arrow-down"
              }, Ne), null, 16, ["class"])
            ])
          ]),
          body: _e(() => [
            be(Y) && be(Y).length == 0 ? (N(), te("span", P3, " No Services here ")) : Le("", !0),
            be(Y) && be(Y).length > 0 ? (N(), Be(he, {
              nodes: be(Y),
              key: be(Y).length,
              childrenBy: "childs"
            }, {
              content: _e((oe) => [
                oe.level == 0 ? (N(), te(xe, { key: 0 }, [
                  oe.failed ? (N(), Be(ke, {
                    key: 0,
                    class: "material-icons",
                    style: { color: "#ff6b6b" }
                  }, {
                    default: _e(() => [...G[31] || (G[31] = [
                      pt(" error ", -1)
                    ])]),
                    _: 1
                  })) : (N(), Be(ke, {
                    key: 1,
                    class: "material-icons"
                  }, {
                    default: _e(() => [...G[32] || (G[32] = [
                      pt(" cable ", -1)
                    ])]),
                    _: 1
                  })),
                  oe.service._info.title ? (N(), te("b", L3, rt(oe.service._info.title), 1)) : (N(), te("b", O3, rt(oe.service._info.name), 1)),
                  (oe.type === "OGCSTA" || oe.type === "GEOJSON" || oe.type === "REST-GEOJSON") && l.value.datasourceIds.includes(oe.service._info.name) ? (N(), Be(Kt, {
                    key: 4,
                    class: "mt4",
                    icon: "delete",
                    preset: "plain",
                    size: "small",
                    onClick: xh((De) => U(oe.service._info.name), ["stop"]),
                    style: { "margin-left": "10px" }
                  }, null, 8, ["onClick"])) : Le("", !0)
                ], 64)) : (N(), te("span", {
                  key: 1,
                  onClick: () => W(oe)
                }, [
                  re(ke, { class: "material-icons nsee" }, {
                    default: _e(() => [...G[33] || (G[33] = [
                      pt(" layers ", -1)
                    ])]),
                    _: 1
                  }),
                  re(ke, { class: "material-icons nhidden" }, {
                    default: _e(() => [...G[34] || (G[34] = [
                      pt(" add ", -1)
                    ])]),
                    _: 1
                  }),
                  pt(" " + rt(oe.title), 1)
                ], 8, M3))
              ]),
              _: 1
            }, 8, ["nodes"])) : Le("", !0)
          ]),
          _: 1
        }, 8, ["modelValue"]),
        re(j, {
          modelValue: r.value.widgetMapSection,
          "onUpdate:modelValue": G[20] || (G[20] = (oe) => r.value.widgetMapSection = oe),
          class: "bottomframe",
          header: "Services",
          icon: "map"
        }, {
          header: _e(({ value: oe, attrs: De, iconAttrs: Ne, text: pn }) => [
            se("div", I3, [
              re(ke, { class: "material-icons" }, {
                default: _e(() => [...G[35] || (G[35] = [
                  pt("map ", -1)
                ])]),
                _: 1
              }),
              G[36] || (G[36] = se("div", { class: "va-collapse__header__text" }, "Map", -1)),
              re(ke, Su({
                class: oe ? "rotate-[-180deg]" : "",
                name: "va-arrow-down"
              }, Ne), null, 16, ["class"])
            ])
          ]),
          body: _e(() => [
            se("div", k3, [
              re(ge, {
                modelValue: l.value.baseMapUrl,
                "onUpdate:modelValue": G[17] || (G[17] = (oe) => l.value.baseMapUrl = oe),
                label: "Base Map URL",
                placeholder: "https://tile.openstreetmap.org/{z}/{x}/{y}.png"
              }, {
                prepend: _e(() => [
                  re(ke, { name: "public" })
                ]),
                _: 1
              }, 8, ["modelValue"]),
              G[37] || (G[37] = se("p", { class: "hint-text" }, " Tile server URL template. Use {z}, {x}, {y} placeholders for zoom and coordinates. ", -1)),
              re(Ge, {
                modelValue: l.value.fixed,
                "onUpdate:modelValue": G[18] || (G[18] = (oe) => l.value.fixed = oe),
                label: "Map fixed"
              }, null, 8, ["modelValue"]),
              re(gt, {
                modelValue: l.value.selectionHighlightColor,
                "onUpdate:modelValue": G[19] || (G[19] = (oe) => l.value.selectionHighlightColor = oe),
                label: "Selection Highlight Color"
              }, null, 8, ["modelValue"]),
              G[38] || (G[38] = se("p", { class: "hint-text" }, " Color used to highlight selected Things on the map. ", -1))
            ])
          ]),
          _: 1
        }, 8, ["modelValue"])
      ], 64);
    };
  }
}), sp = /* @__PURE__ */ vi(D3, [["__scopeId", "data-v-5f2599d9"]]), F3 = {
  key: 0,
  class: "datapoint tlc"
}, B3 = /* @__PURE__ */ $e({
  __name: "TLCDataLabelRenderer",
  props: {
    data: {},
    config: {},
    markerSize: { default: 45 }
  },
  setup(o) {
    const a = o, { config: r, data: l, markerSize: d } = ol(a);
    return (h, m) => (N(), te("div", {
      class: "datapoint-wrapper",
      style: $a({ width: (be(d) || 45) + "px", height: (be(d) || 45) + "px" })
    }, [
      be(l) ? (N(), te("div", F3, rt(be(l)), 1)) : Le("", !0)
    ], 4));
  }
}), R3 = /* @__PURE__ */ vi(B3, [["__scopeId", "data-v-2eb55b7f"]]), z3 = {};
function N3(o, a) {
  return " empty ";
}
const G3 = /* @__PURE__ */ vi(z3, [["render", N3], ["__scopeId", "data-v-ca2b9f21"]]);
class W3 {
  constructor() {
    this.component = R3, this.setupComponent = G3, this.description = "renders a Trafic Light DataPoint", this.name = "Traffic Light Data Point Renderer", this.qualifiedName = "tlc", this.namespace = "tlc", this.example = " 🟢⚪⚪";
  }
}
const V3 = {
  key: 0,
  class: "datapoint"
}, Z3 = {
  key: 1,
  class: "datapoint"
}, U3 = /* @__PURE__ */ $e({
  __name: "ValueUnitDataLabelRenderer",
  props: {
    data: {},
    config: {},
    markerSize: { default: 0 }
  },
  setup(o) {
    const a = o, { config: r, data: l, markerSize: d } = ol(a);
    return r.value && !r.value.unit && (r.value.unit = ""), r.value && !r.value.prefix && (r.value.prefix = ""), r.value && !r.value.suffix && (r.value.suffix = ""), (h, m) => (N(), te("div", {
      class: "datapoint-wrapper",
      style: $a({ width: (be(d) || 0) + "px", height: (be(d) || 0) + "px" })
    }, [
      be(l) ? (N(), te("div", V3, rt(be(r).prefix) + rt(be(l)) + " " + rt(be(r).unit) + " " + rt(be(r).suffix), 1)) : (N(), te("div", Z3, rt(be(r).prefix) + " -- " + rt(be(r).unit) + " " + rt(be(r).suffix), 1))
    ], 4));
  }
}), H3 = /* @__PURE__ */ vi(U3, [["__scopeId", "data-v-a78b518d"]]), q3 = { class: "settings-container" }, $3 = /* @__PURE__ */ $e({
  __name: "ValueUnitDataLabelRendererSettings",
  props: {
    modelValue: { required: !0 },
    modelModifiers: {}
  },
  emits: ["update:modelValue"],
  setup(o) {
    const a = pi(o, "modelValue"), r = le({
      textSection: !0
    });
    return (l, d) => {
      const h = Xe("va-input"), m = Xe("va-collapse");
      return N(), Be(m, {
        modelValue: r.value.textSection,
        "onUpdate:modelValue": d[3] || (d[3] = (g) => r.value.textSection = g),
        header: "Style settings"
      }, {
        default: _e(() => [
          se("div", q3, [
            re(h, {
              modelValue: a.value.unit,
              "onUpdate:modelValue": d[0] || (d[0] = (g) => a.value.unit = g),
              label: "unit"
            }, null, 8, ["modelValue"]),
            re(h, {
              modelValue: a.value.prefix,
              "onUpdate:modelValue": d[1] || (d[1] = (g) => a.value.prefix = g),
              label: "Prefix"
            }, null, 8, ["modelValue"]),
            re(h, {
              modelValue: a.value.suffix,
              "onUpdate:modelValue": d[2] || (d[2] = (g) => a.value.suffix = g),
              label: "suffix"
            }, null, 8, ["modelValue"])
          ])
        ]),
        _: 1
      }, 8, ["modelValue"]);
    };
  }
}), J3 = /* @__PURE__ */ vi($3, [["__scopeId", "data-v-39ec496f"]]);
class j3 {
  constructor() {
    this.component = H3, this.setupComponent = J3, this.description = "Renders a value and unit", this.name = "Value and Unit Data Point Renderer", this.namespace = "general", this.qualifiedName = "ValueUnitDataPointRenderer", this.example = " 15";
  }
}
var Y3 = Object.defineProperty, X3 = Object.getOwnPropertyDescriptor, Qa = (o, a, r, l) => {
  for (var d = l > 1 ? void 0 : l ? X3(a, r) : a, h = o.length - 1, m; h >= 0; h--)
    (m = o[h]) && (d = (l ? m(a, r, d) : m(d)) || d);
  return l && d && Y3(a, r, d), d;
};
let _o = class extends al {
};
Qa([
  Pe("Observation ID."),
  ft()
], _o.prototype, "id", 2);
Qa([
  Pe("Parent Datastream ID."),
  ft()
], _o.prototype, "datastreamId", 2);
Qa([
  Pe("Phenomenon time (ISO 8601)."),
  ft()
], _o.prototype, "phenomenonTime", 2);
Qa([
  Pe("Observation result value."),
  ft()
], _o.prototype, "result", 2);
Qa([
  Pe("Result time (ISO 8601)."),
  ft()
], _o.prototype, "resultTime", 2);
_o = Qa([
  Pe("Payload emitted when an Observation is clicked on the map."),
  ua({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.map#//ObservationClickPayload" })
], _o);
const K3 = [
  {
    name: "Map Clicked",
    type: "click_on_map",
    description: "Triggered when the map background is clicked (provides lat/lon)",
    payloadType: ja
  },
  {
    name: "Thing Clicked",
    type: "click_on_thing",
    description: "Triggered when a Thing marker is clicked on the map",
    payloadType: mi
  },
  {
    name: "Datastream Clicked",
    type: "click_on_datastream",
    description: "Triggered when a Datastream is clicked on the map",
    payloadType: gi
  },
  {
    name: "Observation Clicked",
    type: "click_on_observation",
    description: "Triggered when an Observation is clicked on the map",
    payloadType: _o
  },
  {
    name: "Location Clicked",
    type: "click_on_location",
    description: "Triggered when a Location is clicked on the map",
    payloadType: sa
  },
  {
    name: "Thing Hovered",
    type: "hover_on_thing",
    description: "Triggered when hovering over a Thing marker on the map",
    payloadType: mi
  },
  {
    name: "Datastream Hovered",
    type: "hover_on_datastream",
    description: "Triggered when hovering over a Datastream marker on the map",
    payloadType: gi
  }
];
var Q3 = Object.defineProperty, e8 = Object.getOwnPropertyDescriptor, So = (o, a, r, l) => {
  for (var d = l > 1 ? void 0 : l ? e8(a, r) : a, h = o.length - 1, m; h >= 0; h--)
    (m = o[h]) && (d = (l ? m(a, r, d) : m(d)) || d);
  return l && d && Q3(a, r, d), d;
};
let _r = class extends S1 {
  zoomToThing(o, a, r) {
    throw new Error("zoomToThing not implemented");
  }
  selectThingById(o) {
    throw new Error("selectThingById not implemented");
  }
  zoomToLocation(o, a, r) {
    throw new Error("zoomToLocation not implemented");
  }
  showTooltip(o, a) {
    throw new Error("showTooltip not implemented");
  }
  hideTooltip() {
    throw new Error("hideTooltip not implemented");
  }
  displayRoute(o, a, r) {
    throw new Error("displayRoute not implemented");
  }
  clearRoute() {
    throw new Error("clearRoute not implemented");
  }
};
So([
  Pe("Zooms the map to a specific Thing location."),
  la({ eventType: "map.zoomToThing" })
], _r.prototype, "zoomToThing", 1);
So([
  Pe("Selects and highlights a Thing on the map by its ID."),
  la({ eventType: "map.selectThingById" })
], _r.prototype, "selectThingById", 1);
So([
  Pe("Zooms the map to a specific GeoJSON location."),
  la({ eventType: "map.zoomToLocation" })
], _r.prototype, "zoomToLocation", 1);
So([
  Pe("Shows a permanent tooltip on a Thing marker."),
  la({ eventType: "map.showTooltip" })
], _r.prototype, "showTooltip", 1);
So([
  Pe("Hides the currently shown tooltip."),
  la({ eventType: "map.hideTooltip" })
], _r.prototype, "hideTooltip", 1);
So([
  Pe("Displays a route on the map from GeoJSON data."),
  la({ eventType: "map.displayRoute" })
], _r.prototype, "displayRoute", 1);
So([
  Pe("Removes the currently displayed route from the map."),
  la({ eventType: "map.clearRoute" })
], _r.prototype, "clearRoute", 1);
_r = So([
  Pe("Abstract base class for Map Widget operations."),
  ua({ type: "http://org.eclipse.daanse.board.app.ui.vue.widget.map#//MapWidgetInterface" })
], _r);
const t8 = `<?xml version="1.0" encoding="UTF-8"?>
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
        <eStructuralFeatures xsi:type="ecore:EAttribute" name="iconColor" eType="ecore:EDataType http://www.eclipse.org/emf/2002/Ecore#//EString">
            <eAnnotations source="http://www.eclipse.org/emf/2002/GenModel">
                <details key="documentation" value="The color of the icon."/>
            </eAnnotations>
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
var n8 = Object.defineProperty, i8 = Object.getOwnPropertyDescriptor, Rd = (o, a, r, l) => {
  for (var d = l > 1 ? void 0 : l ? i8(a, r) : a, h = o.length - 1, m; h >= 0; h--)
    (m = o[h]) && (d = (l ? m(a, r, d) : m(d)) || d);
  return l && d && n8(a, r, d), d;
}, lp = (o, a) => (r, l) => a(r, l, o);
const ia = "MapWidget";
let Ru = class {
  constructor(o, a) {
    this.events = o, this.actions = a, this.type = ia, this.component = qh, this.settingsComponent = sp, this.supportedDSTypes = ["ogcsta", "OGC Composer", "rest", "valhalla"], this.icon = A1, this.name = "Map";
  }
  register() {
    qs().registerDataPointRenderer(new W3()), qs().registerDataPointRenderer(new j3()), this.events.registerWidget(ia, K3), this.actions.registerActionsFromEcoreString(ia, t8, "widget", "model.ecore").catch(() => {
      this.actions.registerWidgetType(ia, _r, "widget");
    }), p1().register(
      "org.eclipse.daanse.board.app.ui.vue.widget.map",
      {
        MapsWidget: qh,
        MapsWidgetSettings: sp,
        useDataPointRegistry: qs,
        // Renderer building blocks: the geojson plugin composes its markers
        // and stylers from these. Public API on purpose - a deep import into
        // this bundle's src tree cannot be resolved at runtime.
        MapMarker: nl,
        ConditionSettings: wd,
        PointStyler: ym,
        AreaStyler: wm
      },
      "0.0.1-next.1",
      "ui.vue.widget.map"
    );
  }
  unregister() {
    this.events.unregisterWidget(ia), this.actions.unregisterWidgetType(ia);
  }
};
Rd([
  d1()
], Ru.prototype, "register", 1);
Rd([
  f1()
], Ru.prototype, "unregister", 1);
Ru = Rd([
  h1({
    service: [E1],
    properties: { "widget.type": ia }
  }),
  lp(0, wh(u1)),
  lp(1, wh(c1))
], Ru);
export {
  wm as AreaStyler,
  wd as ConditionSettings,
  nl as MapMarker,
  Ru as MapWidgetProvider,
  qh as MapsWidget,
  sp as MapsWidgetSettings,
  ym as PointStyler,
  qs as useDataPointRegistry
};
